(() => {
    async function fetchFile(url) {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed fetching file '${response.url}': ${response.status}`);
        }
        if (!response.body) {
            throw new Error(`Response body is missing for '${response.url}'`);
        }

        return response;
    }

    async function getWebFileText(url) {
        const response = await fetchFile(url);
        return await response.text();
    }

    function requireGetFileText() {
        try {
            const fsPromises = require('fs').promises;
            const {dirname, resolve} = require('path');

            if (fsPromises) {
                return (url) => {
                    const fullPath = resolve(dirname(process.mainModule?.filename || ''), url);
                    return fsPromises.readFile(fullPath, 'utf8');
                };
            }
        } catch (err) {
            logger.warn({err}, 'Node fs API is not supported. Falling back to web.');
        }

        return (url) => getWebFileText(url)
    }

    function createSvgBaseTexture(svgText, scale) {
        const svgDataUrl = `data:image/svg+xml,${encodeURIComponent(svgText.trim())}`;
        const resource = new PIXI.SVGResource(svgDataUrl, {scale});
        return new PIXI.BaseTexture(resource);
    }

    async function loadSvgCursorData(location) {
        const getFileText = requireGetFileText();

        const [leftSvg, middleSvg, rightSvg] = await Promise.all([
            getFileText(`${location}_left.svg`),
            getFileText(`${location}_middle.svg`),
            getFileText(`${location}_right.svg`),
        ]);

        return {
            leftEndTexture: createSvgBaseTexture(leftSvg, 0.25),
            middleTexture: createSvgBaseTexture(middleSvg, 0.25),
            rightEndTexture: createSvgBaseTexture(rightSvg, 0.25),
        };
    }

    class SvgCursorSprite extends CursorSprite {
        updateSize() {
            this._rightEndSprite.position.x = this._cursorWidth;
            this._middleSprite.width = this._cursorWidth;

            const y = this._cursorHeight / 2;
            this._middleSprite.y = y;
            this._leftEndSprite.y = y;
            this._rightEndSprite.y = y;
        }
    }

    const defaultSvgCursorDataPromise = loadSvgCursorData('img/system/cursor/halberd');

    Window.prototype.getCursorSprite = async function () {
        return new SvgCursorSprite(await defaultSvgCursorDataPromise);
    };
})();
