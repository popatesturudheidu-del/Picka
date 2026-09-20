/*=============================================================================
 ApngPicture.js
----------------------------------------------------------------------------
 (C)2019 Triacontane
 This software is released under the MIT License.
 http://opensource.org/licenses/mit-license.php
----------------------------------------------------------------------------
 Version
 1.8.4 2021/02/01 数字のみのファイルをapng指定して起動するとエラーになる問題を修正
 1.8.3 2021/01/18 1.8.2の修正でapngでないピクチャや敵キャラを表示しようとするとエラーになる問題を修正
 1.8.2 2021/01/17 キャッシュ方針を「あり」にした画像を再表示するとき、フレームを初期化するよう修正
 1.8.1 2021/01/17 キャッシュ方針を「あり」にしているとき、破棄のタイミングでエラーになる問題を修正
 1.8.0 2020/11/29 1セルごとのフレーム数をゲーム側で設定できるパラメータを追加
 1.7.2 2020/11/28 gifを使う場合はダミーのpngファイルが別途必要である旨の追記を追加
 1.7.1 2020/11/22 メニュー画面を開いたときに表示中のapngピクチャが消えないよう修正
 1.7.0 2020/11/11 APNGのアニメーションを停止、全停止できるスイッチを追加
 1.6.1 2020/11/03 プラグイン上でapng画像の高さを正しく取得できるよう修正
 1.6.0 2020/10/24 再生回数を指定したときに最初ではなく最後のフレームでアニメーションが止まる設定を追加
 1.5.0 2020/10/17 サイドビューの敵キャラをapng化できるよう修正。機能が不完全であることに変わりはありません。
 1.4.3 2020/03/17 ライブラリがpixi5.0対応によるバージョンアップで使用できなくなったのでヘルプの取得元を旧版に変更
 1.4.2 2020/03/07 キャッシュしない設定のapngを繰り返し表示、削除し続けるとメモリリークが発生する問題を修正
 1.4.1 2020/02/23 英語版のプラグインパラメータの記述が不足していたので修正
 1.4.0 2020/02/01 アニメーションのループ回数を指定できる機能を追加
 1.3.1 2019/12/31 画像を登録せずゲーム開始するとローディングが完了しない問題を修正
 1.3.0 2019/12/31 APNGのキャッシュ機能を追加
 1.2.1 2019/12/31 シーン追加画像でgifが表示されない問題を修正
 1.2.0 2019/12/31 APNGのみツクール本体の暗号化機能に対応
 1.1.0 2019/12/29 シーン追加画像の表示優先度を設定できる機能を追加
 1.0.0 2019/12/27 初版
----------------------------------------------------------------------------
 [Blog]   : https://triacontane.blogspot.jp/
 [Twitter]: https://twitter.com/triacontane/
 [GitHub] : https://github.com/triacontane/
=============================================================================*/

/*:
 * @plugindesc ApngSupportPlugin
 * @author triacontane
 *
 * @param PictureList
 * @desc List of picture images to be handled as APNG.
 * @default []
 * @type struct<PictureApngRecord>[]
 *
 * @param EnemyList
 * @desc List of enemy images to be handled as APNG.
 * @default []
 * @type struct<EnemyApngRecord>[]
 *
 * @param SideEnemyList
 * @desc List of enemy images to be handled as APNG.
 * @default []
 * @type struct<SideEnemyApngRecord>[]
 *
 * @param DefaultLoopTimes
 * @desc The number of animation loops. It stops after looping the specified number of times.
 * @default 0
 * @type number
 *
 * @param AllStopSwitch
 * @desc All animations stop when the specified number switch is ON.
 * @default 0
 * @type switch
 *
 *
 * @param StopLastFrame
 * @text 最終フレームで止める
 * @desc ループ回数が決まっているアニメーションを再生したとき最初のフレームではなく最後のフレームでアニメーションが止まります。
 * @default true
 * @type boolean
 *
 * @help ApngPicture.js
 * APNG or GIF is treated as a picture and animated on the screen.
 * From the parameters, select the file in which the APNG picture file is registered.
 * It will be animated if it is displayed in "Display Picture".
 *
 * The following libraries are required for use.
 * https://github.com/sbfkcel/pixi-apngAndGif
 *
 * Download the target file and import it from the plugin management screen.
 * https://github.com/sbfkcel/pixi-apngAndGif/blob/fd2e0fb3274bf2c360c608b42e527889d10a6330/dist/PixiApngAndGif.js
 *
 * In addition, the color tone change of the picture is not reflected.
 * Also, extensions by other plug-ins may not work.
 *
 * In addition, APNG registered from parameters can be additionally displayed for each scene.
 * Display can be controlled by switch.
 *
 * There is also a function to display APNG on the enemy character image, but this function
 * The image is incomplete because no flash is performed.
 *
 * This plugin is released under the MIT License.
 */
/*:ja
 * @plugindesc APNGピクチャプラグイン
 * @author トリアコンタン
 *
 * @param PictureList
 * @text APNGのピクチャリスト
 * @desc APNGとして扱うピクチャ画像のリストです。GIFを指定したい場合は拡張子付きで直接入力してください。
 * @default []
 * @type struct<PictureApngRecord>[]
 *
 * @param EnemyList
 * @text APNGの敵キャラリスト
 * @desc APNGとして扱う敵キャラ画像のリストです。GIFを指定したい場合は拡張子付きで直接入力してください。この機能は不完全です。
 * @default []
 * @type struct<EnemyApngRecord>[]
 *
 * @param SideEnemyList
 * @text APNGのSV敵キャラリスト
 * @desc APNGとして扱うSV敵キャラ画像のリストです。サイドビューの画像を使用したい場合はこちらから登録してください。
 * @default []
 * @type struct<SideEnemyApngRecord>[]
 *
 * @param DefaultLoopTimes
 * @text デフォルトループ回数
 * @desc アニメーションのループ回数です。指定した回数分ループ再生すると止まります。0を指定すると無限にアニメーションします。
 * @default 0
 * @type number
 *
 * @param StopLastFrame
 * @text 最終フレームで止める
 * @desc ループ回数が決まっているアニメーションを再生したとき最初のフレームではなく最後のフレームでアニメーションが止まります。
 * @default false
 * @type boolean
 *
 * @param AllStopSwitch
 * @text 全停止スイッチ
 * @desc 指定した番号スイッチがONのとき全てのアニメーションが停止します。
 * @default 0
 * @type switch
 *
 * @param FrameCount
 * @text 1セルのフレーム数
 * @desc 設定すると1セルごとのフレーム数をゲーム側で固定にできます。
 * @default 0
 * @type number
 *
 * @help ApngPicture.js
 * APNG、もしくはGIFアニメをピクチャとして画面上にアニメ表示します。
 * パラメータからAPNGのピクチャとして登録したファイルを
 * 「ピクチャの表示」で表示すればアニメーションされます。
 *
 * 使用には以下のライブラリが必要です。
 * https://github.com/sbfkcel/pixi-apngAndGif
 *
 * ただし、ライブラリの最新版はpixi5.0に対応した結果、ツクールMV側の最新である4.0では
 * 再生できなくなりました。よって最新版ではなく、下記の旧版を使用する必要があります。
 *
 * 対象ファイルをダウンロードしてプラグイン管理画面から取り込んでください。
 * https://github.com/sbfkcel/pixi-apngAndGif/blob/fd2e0fb3274bf2c360c608b42e527889d10a6330/dist/PixiApngAndGif.js
 *
 * なお、ピクチャの色調変更は反映されません。
 * また、他のプラグインによる拡張が機能しない場合があります。
 *
 * APNGをキャッシュすることで表示時の硬直を抑えることができますが、
 * キャッシュする量に比例して初回起動時に時間が掛かるようになります。
 * また、キャッシュした画像は1画面中で同時に2つ以上は表示できません。
 * 使用する場合はご注意ください。
 *
 * さらに、各シーンでパラメータから登録したAPNGを追加表示できます。
 * スイッチによる表示制御が可能です。
 *
 * 敵キャラ画像にAPNGを表示する機能もありますが、この機能は
 * 画像のフラッシュが一切行われないため不完全です。
 * また、画像サイズの大きいAPNGを読み込むと、表示が遅くなる場合があります。
 * 表示が遅い場合はGIFアニメもお試しください。
 *
 * GIFを使用したい場合、拡張子がgifのファイルはツクールMVで認識されないので
 * パラメータに拡張子付きのファイル名を直接入力してください。
 * 同一ファイル名のpngファイルが別途必要です。(中身は空の画像でOK)
 * また、GIFはツクールMVの暗号化機能の対象外となります。
 *　
 * このプラグインにはプラグインコマンドはありません。
 *
 * 利用規約：
 *  作者に無断で改変、再配布が可能で、利用形態（商用、18禁利用等）
 *  についても制限はありません。
 *  このプラグインはもうあなたのものです。
 */

/*~struct~SceneApngRecord:ja
 *
 * @param SceneName
 * @text 対象シーン
 * @desc 画像を追加するシーンです。
 * @type select
 * @default Scene_Title
 * @option タイトル
 * @value Scene_Title
 * @option ゲームオーバー
 * @value Scene_Gameover
 * @option バトル
 * @value Scene_Battle
 * @option メインメニュー
 * @value Scene_Menu
 * @option アイテム
 * @value Scene_Item
 * @option スキル
 * @value Scene_Skill
 * @option 装備
 * @value Scene_Equip
 * @option ステータス
 * @value Scene_Status
 * @option オプション
 * @value Scene_Options
 * @option セーブ
 * @value Scene_Save
 * @option ロード
 * @value Scene_Load
 * @option ゲーム終了
 * @value Scene_End
 * @option ショップ
 * @value Scene_Shop
 * @option 名前入力
 * @value Scene_Name
 * @option デバッグ
 * @value Scene_Debug
 * @option サウンドテスト
 * @value Scene_SoundTest
 * @option 用語辞典
 * @value Scene_Glossary
 *
 * @param FileName
 * @text ファイル名
 * @desc 追加するAPNGのファイル名です。
 * @default
 * @require 1
 * @dir img/system/
 * @type file
 *
 * @param CachePolicy
 * @text キャッシュ方針
 * @desc 画像のキャッシュ方針です。大量にキャッシュするとメモリ使用量に影響が出る場合があります。
 * @default 0
 * @type select
 * @option キャッシュしない
 * @value 0
 * @option 初回表示時にキャッシュ
 * @value 1
 * @option ゲーム起動時にキャッシュ
 * @value 2
 *
 * @param X
 * @text X座標
 * @desc 追加するAPNGのX座標です。
 * @default 0
 * @type number
 *
 * @param Y
 * @text Y座標
 * @desc 追加するAPNGのY座標です。
 * @default 0
 * @type number
 *
 * @param Origin
 * @text 原点
 * @desc 追加するAPNGの原点です。
 * @default 0
 * @type select
 * @option 左上
 * @value 0
 * @option 中央
 * @value 1
 *
 * @param Priority
 * @text 優先度
 * @desc 画像の表示優先度です。最背面は画面上に表示されないことが多いので通常の使用では推奨しません。
 * @default 0
 * @type select
 * @option 最前面
 * @value 0
 * @option ウィンドウの下
 * @value 1
 * @option 最背面
 * @value 2
 *
 * @param Switch
 * @text 出現条件スイッチ
 * @desc 指定したスイッチがONのときのみ表示されます。指定しない場合、常に表示されます。
 * @default 0
 * @type switch
 *
 * @param LoopTimes
 * @text ループ回数
 * @desc アニメーションのループ回数です。0を指定するとデフォルト設定に従います。
 * @default 0
 * @type number
 *
 * @param StopSwitch
 * @text 停止スイッチ
 * @desc 指定した番号スイッチがONのときアニメーションが停止します。
 * @default 0
 * @type switch
 */

/*~struct~PictureApngRecord:ja
 *
 * @param FileName
 * @text ファイル名
 * @desc 追加するAPNGのファイル名です。
 * @default
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param CachePolicy
 * @text キャッシュ方針
 * @desc 画像のキャッシュ方針です。大量にキャッシュするとメモリ使用量に影響が出る場合があります。
 * @default 0
 * @type select
 * @option キャッシュしない
 * @value 0
 * @option 初回表示時にキャッシュ
 * @value 1
 * @option ゲーム起動時にキャッシュ
 * @value 2
 *
 * @param LoopTimes
 * @text ループ回数
 * @desc アニメーションのループ回数です。0を指定するとデフォルト設定に従います。
 * @default 0
 * @type number
 *
 * @param StopSwitch
 * @text 停止スイッチ
 * @desc 指定した番号スイッチがONのときアニメーションが停止します。
 * @default 0
 * @type switch
 */

/*~struct~EnemyApngRecord:ja
 *
 * @param FileName
 * @text ファイル名
 * @desc 追加するAPNGのファイル名です。
 * @default
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param CachePolicy
 * @text キャッシュ方針
 * @desc 画像のキャッシュ方針です。大量にキャッシュするとメモリ使用量に影響が出る場合があります。
 * @default 0
 * @type select
 * @option キャッシュしない
 * @value 0
 * @option 初回表示時にキャッシュ
 * @value 1
 * @option ゲーム起動時にキャッシュ
 * @value 2
 *
 * @param LoopTimes
 * @text ループ回数
 * @desc アニメーションのループ回数です。0を指定するとデフォルト設定に従います。
 * @default 0
 * @type number
 *
 * @param StopSwitch
 * @text 停止スイッチ
 * @desc 指定した番号スイッチがONのときアニメーションが停止します。
 * @default 0
 * @type switch
 */

/*~struct~SideEnemyApngRecord:ja
 *
 * @param FileName
 * @text ファイル名
 * @desc 追加するAPNGのファイル名です。
 * @default
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param CachePolicy
 * @text キャッシュ方針
 * @desc 画像のキャッシュ方針です。大量にキャッシュするとメモリ使用量に影響が出る場合があります。
 * @default 0
 * @type select
 * @option キャッシュしない
 * @value 0
 * @option 初回表示時にキャッシュ
 * @value 1
 * @option ゲーム起動時にキャッシュ
 * @value 2
 *
 * @param LoopTimes
 * @text ループ回数
 * @desc アニメーションのループ回数です。0を指定するとデフォルト設定に従います。
 * @default 0
 * @type number
 *
 * @param StopSwitch
 * @text 停止スイッチ
 * @desc 指定した番号スイッチがONのときアニメーションが停止します。
 * @default 0
 * @type switch
 */

/*~struct~SceneApngRecord:
 *
 * @param SceneName
 * @desc Target Scene
 * @type select
 * @default Scene_Title
 * @option Scene_Title
 * @option Scene_Gameover
 * @option Scene_Battle
 * @option Scene_Menu
 * @option Scene_Item
 * @option Scene_Skill
 * @option Scene_Equip
 * @option Scene_Status
 * @option Scene_Options
 * @option Scene_Save
 * @option Scene_Load
 * @option Scene_End
 * @option Scene_Shop
 * @option Scene_Name
 * @option Scene_Debug
 * @option Scene_SoundTest
 * @option Scene_Glossary
 *
 * @param FileName
 * @desc File name of apng
 * @default
 * @require 1
 * @dir img/system/
 * @type file
 *
 * @param CachePolicy
 * @desc Cache policy
 * @default 0
 * @type select
 * @option None
 * @value 0
 * @option Cache on first display
 * @value 1
 * @option Cache at game start
 * @value 2
 *
 * @param X
 * @desc X of apng
 * @default 0
 * @type number
 *
 * @param Y
 * @desc Y of apng
 * @default 0
 * @type number
 *
 * @param Origin
 * @desc Origin of apng
 * @default 0
 * @type select
 * @option Upper left
 * @value 0
 * @option Center
 * @value 1
 *
 * @param Priority
 * @desc Priority of apng
 * @default 0
 * @type select
 * @option Front
 * @value 0
 * @option Under window
 * @value 1
 * @option Back
 * @value 2
 *
 * @param Switch
 * @desc Displayed only when the specified switch is ON
 * @default 0
 * @type switch
 *
 * @param LoopTimes
 * @desc The number of animation loops. Specifying 0 follows the default setting.
 * @default 0
 * @type number
 *
 * @param StopSwitch
 * @desc The animation stops when the specified number switch is turned on.
 * @default 0
 * @type switch
 */

/*~struct~PictureApngRecord:
 *
 * @param FileName
 * @desc File name of apng
 * @default
 * @require 1
 * @dir img/pictures/
 * @type file
 *
 * @param CachePolicy
 * @desc Cache policy
 * @default 0
 * @type select
 * @option None
 * @value 0
 * @option Cache on first display
 * @value 1
 * @option Cache at game start
 * @value 2
 *
 * @param LoopTimes
 * @desc The number of animation loops. Specifying 0 follows the default setting.
 * @default 0
 * @type number
 *
 * @param StopSwitch
 * @desc The animation stops when the specified number switch is turned on.
 * @default 0
 * @type switch
 */

/*~struct~EnemyApngRecord:
 *
 * @param FileName
 * @desc File name of apng
 * @default
 * @require 1
 * @dir img/enemies/
 * @type file
 *
 * @param CachePolicy
 * @desc Cache policy
 * @default 0
 * @type select
 * @option None
 * @value 0
 * @option Cache on first display
 * @value 1
 * @option Cache at game start
 * @value 2
 *
 * @param LoopTimes
 * @desc The number of animation loops. Specifying 0 follows the default setting.
 * @default 0
 * @type number
 *
 * @param StopSwitch
 * @desc The animation stops when the specified number switch is turned on.
 * @default 0
 * @type switch
 */

/*~struct~SideEnemyApngRecord:
 *
 * @param FileName
 * @desc File name of apng
 * @default
 * @require 1
 * @dir img/sv_enemies/
 * @type file
 *
 * @param CachePolicy
 * @desc Cache policy
 * @default 0
 * @type select
 * @option None
 * @value 0
 * @option Cache on first display
 * @value 1
 * @option Cache at game start
 * @value 2
 *
 * @param LoopTimes
 * @desc The number of animation loops. Specifying 0 follows the default setting.
 * @default 0
 * @type number
 *
 * @param StopSwitch
 * @desc The animation stops when the specified number switch is turned on.
 * @default 0
 * @type switch
 */

(function() {
    'use strict';

    /**
     * Create plugin parameter. param[paramName] ex. param.commandPrefix
     * @param {HTMLOrSVGScriptElement} script currentScript
     * @returns {Object} Created parameter
     */
    const createPluginParameter = function (script) {
        if (!('src' in script)) {
            throw new Error('Script source url is missing');
        }

        const pluginName = script.src.replace(/^.*\/(.*).js$/, function () {
            return arguments[1];
        });
        const paramReplacer = function (key, value) {
            if (value === 'null') {
                return value;
            }
            if (value[0] === '"' && value[value.length - 1] === '"') {
                return value;
            }
            try {
                return JSON.parse(value);
            } catch (e) {
                return value;
            }
        };
        const parameter = JSON.parse(JSON.stringify(PluginManager.parameters(pluginName), paramReplacer));
        PluginManager.setParameters(pluginName, parameter);
        return parameter;
    };

    const param = createPluginParameter(document.currentScript);

    /**
     * @typedef {{
     *  FileName: string,
     *  CachePolicy: number,
     *  LoopTimes: number,
     *  StopSwitch: number,
     *  Speed: number | undefined,
     * }[]} ApngConfig
     */

    /**
     * @typedef {{
     *  alias: string,
     *  cachePolicy: number,
     *  loopTimes: number,
     *  speed?: number,
     * }} ApngOptions
     */

    /**
     * ApngLoader
     * APNGもしくはGIF画像を読み込んで保持します。
     */
    class ApngLoader {
        static _loading = 0;

        /**
         * @param {string} folder
         * @param {ApngConfig} paramList
         */
        constructor(folder, paramList) {
            if (Decrypter.hasEncryptedImages) {
                Decrypter.readEncryptionkey();
                this._decryptionKey = new Uint8Array(
                    Decrypter._encryptionKey.map((byte) => parseInt(byte, 16))
                )
            } else {
                this._decryptionKey = undefined;
            }
            this._folder = folder;
            /** @type {Record<string, string>} */
            this._fileHash = {};
            /** @type {Record<string, ApngOptions>} */
            this._options = {};
            this.addAllImage(paramList);
        }

        /**
         * @param {ApngConfig | undefined} paramList
         */
        addAllImage(paramList) {
            if (!paramList?.length) {
                return;
            }

            for (const item of paramList) {
                this.addImage(item);
            }
        }

        /**
         * @param {ApngConfig[number]} item
         */
        addImage(item) {
            let name = String(item.FileName) || '';
            let ext = Decrypter.hasEncryptedImages ? 'rpgmvp' : 'png';
            name = name.replace(/\.gif$/gi, function() {
                ext = 'gif';
                return '';
            });

            let path;
            if (name.endsWith('.json')) {
                path = `img/${this._folder}/${name}`;
            } else if (name.startsWith('http:') || name.startsWith('https:')) {
                path = name;
            } else {
                path = `img/${this._folder}/${name}.${ext}`;
            }

            if (!(name in this._fileHash)) {
                this._fileHash[name] = path;
                this._options[name] = {
                    alias: name,
                    cachePolicy: item.CachePolicy,
                    loopTimes: item.LoopTimes,
                    speed: item.Speed,
                };

                if(this.isPreloaded(name)) {
                    this.loadSprite(name).catch((err) => console.error(`Failed to load: ${name}`, err));
                }
            }
        }

        /**
         *
         * @param {string} name
         * @return {Promise<*>}
         */
        loadSprite(name) {
            const path = this._fileHash[name];
            const isEncrypted = !path.endsWith('.png')

            return PIXI.Assets.load({
                alias: name,
                src: path,
                loadParser: isEncrypted ? undefined : 'loadApng',
                data: {
                    decryptionKey: this._decryptionKey,
                    decryptedFormat: {
                        ext: '.apng',
                        mimeType: 'image/apng'
                    }
                },
            })
        }

        /**
         * @param {string} name
         * @return {boolean}
         */
        isPreloaded(name) {
            const item = this._options[name];
            return item.cachePolicy === 2
                && !ConfigManager.remCutinsDisabled
                && !ConfigManager.remCutinsFast
                && ConfigManager.modding_enableSmootherCutinLoading();
        }

        /**
         * @param {string} name
         * @return {Promise<*>}
         */
        async createSprite(name) {
            if (!this.isApng(name)) {
                return null;
            }

            const animatedSprite = await this.loadSprite(name);

            const {loopTimes} = this._options[name];
            const loopCount = loopTimes ?? param.DefaultLoopTimes;

            animatedSprite.name = name;
            animatedSprite.playTimes = loopCount;
            animatedSprite.animationSpeed = this._options[name].speed || 1;
            animatedSprite.pixiApngOption = this._options[name];
            animatedSprite.play();

            return animatedSprite;
        }

        /**
         * @param {string} name
         * @return {boolean}
         */
        isApng(name) {
            return !!this._fileHash[name];
        }

        static startLoading() {
        };

        static isReady() {
            return !this._loading;
        }
    }

    const _Scene_Boot_isReady = Scene_Boot.prototype.isReady;
    Scene_Boot.prototype.isReady = function() {
        const result = _Scene_Boot_isReady.apply(this, arguments);
        if (result) {
            SceneManager.setupApngLoaderIfNeed();
        }
        return result && ApngLoader.isReady();
    };

    const _Scene_Base_terminate = Scene_Base.prototype.terminate;
    Scene_Base.prototype.terminate = function() {
        _Scene_Base_terminate.apply(this, arguments);
        if (this._spriteset) {
            this._spriteset.destroyApngPicture();
        }
    };

    Spriteset_Base.prototype.destroyApngPicture = function() {
        this.destroyApngPictureContainer(this._pictureContainer);
    };

    Spriteset_Base.prototype.destroyApngPictureContainer = function(container) {
        if (!container) {
            return;
        }
        container.children.forEach(function(sprite) {
            if (sprite.destroyApngIfNeed) {
                sprite.destroyApngIfNeed();
            }
        });
    };

    SceneManager.setupApngLoaderIfNeed = function() {
        if (this._apngLoaderPicture) {
            return;
        }

        this._apngLoaderPicture = new ApngLoader('pictures', param.PictureList);
    };

    /**
     * @param {string} name
     * @return {Promise<any> | null}
     */
    SceneManager.tryLoadApngPicture = function(name) {
        return this._apngLoaderPicture.createSprite(name);
    };

    /**
     * @param {string} name
     * @return {Promise<void>}
     */
    Sprite_Picture.prototype.addApngChild = async function(name) {
        await this.destroyApngIfNeed();
        SceneManager.setupApngLoaderIfNeed();
        this._apngSprite = await this.loadApngSprite(name);
        if (this._apngSprite) {
            if (this._apngSprite.totalFrames > 0) {
                this._apngSprite.currentFrame = 0;
            }
            this._apngSprite.play();
            this.addChild(this._apngSprite);
            this.updateApngAnchor();
            this.updateApngBlendMode();
        }
    };

    Sprite_Picture.prototype.destroyApngIfNeed = function() {
        if (this._apngSprite) {
            if (this.isPreloaded()) {
                this.removeApng();
            } else {
                return this.destroyApng();
            }
        }
    };

    Sprite_Picture.prototype.destroyApng = function() {
        const spriteName = this._apngSprite.pixiApngOption.alias;
        this._apngSprite = null;
        return PIXI.Assets.unload(spriteName)
    };

    Sprite_Picture.prototype.removeApng = function() {
        this.removeChild(this._apngSprite);
        this._apngSprite = null;
    };

    Sprite_Picture.prototype.isPreloaded = function() {
        return this._apngSprite?.pixiApngOption.cachePolicy === 2
            && !ConfigManager.remCutinsDisabled
            && !ConfigManager.remCutinsFast
            && ConfigManager.modding_enableSmootherCutinLoading();
    };

    Sprite_Picture.prototype.updateApngAnchor = function() {
        if (this._apngSprite) {
            this._apngSprite.anchor.x = this.anchor.x;
            this._apngSprite.anchor.y = this.anchor.y;
        }
    };

    Sprite_Picture.prototype.updateApngBlendMode = function() {
        if (this._apngSprite) {
            this._apngSprite.blendMode = this.blendMode;
        }
    };

    /**
     * Sprite_Picture
     * APNGとして登録されているピクチャの読み込みを追加します。
     */
    const _Sprite_Picture_loadBitmap = Sprite_Picture.prototype.loadBitmap;
    Sprite_Picture.prototype.loadBitmap = function() {
        _Sprite_Picture_loadBitmap.apply(this, arguments);
        this.addApngChild(this._pictureName);
    };

    /**
     * @param {string} name
     * @return {Promise<*>|null}
     */
    Sprite_Picture.prototype.loadApngSprite = function(name) {
        return SceneManager.tryLoadApngPicture(name);
    };

    const _Sprite_Picture_updateOrigin = Sprite_Picture.prototype.updateOrigin;
    Sprite_Picture.prototype.updateOrigin = function() {
        _Sprite_Picture_updateOrigin.apply(this, arguments);
        this.updateApngAnchor();
    };

    const _Sprite_Picture_updateOther = Sprite_Picture.prototype.updateOther;
    Sprite_Picture.prototype.updateOther = function() {
        _Sprite_Picture_updateOther.apply(this, arguments);
        this.updateApngBlendMode();
    };

    const _Sprite_Picture_updateBitmap = Sprite_Picture.prototype.updateBitmap;
    Sprite_Picture.prototype.updateBitmap = function() {
        _Sprite_Picture_updateBitmap.apply(this, arguments);
        const picture = this.picture();
        if (!picture && this._apngSprite) {
            this.destroyApngIfNeed();
        }
    };
})();
