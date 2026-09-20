var Remtairy = Remtairy || {};
Remtairy.CM = Remtairy.CM || {};

//=============================================================================
/*:
 * @plugindesc ConfigManager
 * @author Remtairy
 *
 * @help
 * This is a private plugin.
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================

const EDICTS_OUTLINE_COLOR_OBTAINABLE_GREEN_ID = 0;
const EDICTS_OUTLINE_COLOR_OBTAINABLE_LIGHTBLUE_ID = 1;
const EDICTS_OUTLINE_COLOR_METREQ_YELLOW_ID = 0;
const EDICTS_OUTLINE_COLOR_METREQ_PURPLE_ID = 1;
const EDICTS_OUTLINE_COLOR_NOREQ_BLACK_ID = 0;
const EDICTS_OUTLINE_COLOR_NOREQ_GRAY_ID = 1;
const EDICTS_OUTLINE_COLOR_NOREQ_RED_ID = 2;

const YANFLY_CONFIG_GAUGE_Y_OFFSET = 6;

///////////
// ConfigManager
////////////////

ConfigManager.synchFps = false;
ConfigManager.safeMode = false;
ConfigManager.replayMode = false;
ConfigManager.pixelMovement = true;
ConfigManager.remMapEffect = true;
ConfigManager.remDisableScreenFlash = false;
ConfigManager.karrynLinesPrompt = true;
ConfigManager.remLinesFast = false;
ConfigManager.remCutinsFast = false;
ConfigManager.remCutinsSmootherLoading = false;
ConfigManager.remSmootherCGLoading = false;
ConfigManager.remCutinsDisabled = false;
ConfigManager.remShowSexualDamagePopup = true;
ConfigManager.disableFootjobs = false;
ConfigManager.disableRimjobs = false;
ConfigManager.disableSmegma = false;
ConfigManager.disableFeraMouth = false;
ConfigManager.keepVoicePlayback = false;
ConfigManager.autoContinueAfterVoice = true;
ConfigManager.remBattlelogDuration = 2;
ConfigManager.remBattlelogFontSize = 2;
ConfigManager.remMaleDialogueAppear = 3;
ConfigManager.sortPassivesAscending = false;
ConfigManager.cancelSkipMentalPhase = false;
ConfigManager.remLanguage = RemLanguageEN;
ConfigManager.remVoiceLanguage = RemLanguageEN;
ConfigManager.displayPleasureAsPercent = true;
ConfigManager.shorterDefeatBattles = false;
ConfigManager.masterVolume = 80;
ConfigManager.voiceVolume = 100;
ConfigManager.moanVolume = 40;
ConfigManager.seVolume = 40;
ConfigManager.bgmVolume = 40;
ConfigManager.maleVolume = 30;

ConfigManager.edictsOutlineColorObtainable = 0;
ConfigManager.edictsOutlineColorMeetReq = 0;
ConfigManager.edictsOutlineColorNoReq = 0;

ConfigManager.cheatEnemyDoublePhysicalDamage = false;
ConfigManager.cheatEnemyTriplePhysicalDamage = false;
ConfigManager.cheatEnemyDoubleSexualDamage = false;
ConfigManager.cheatEnemyTripleSexualDamage = false;
ConfigManager.cheatEnemyDoubleOrgasmPoint = false;
ConfigManager.cheatEnemyAlwaysAct = false;
ConfigManager.cheatActorDoublePassiveGain = false;
ConfigManager.cheatActorNoPassiveGain = false;
ConfigManager.cheatActorHalfStaminaRegen = false;
ConfigManager.cheatActorThirdStaminaRegen = false;
ConfigManager.cheatActorHalfExpRate = false;
ConfigManager.cheatActorNoEvasion = false;
ConfigManager.cheatLessControlFive = false;
ConfigManager.cheatLessControlTen = false;
ConfigManager.cheatInstantRiotsOne = false;
ConfigManager.cheatInstantRiotsTwo = false;
ConfigManager.cheatInstantRiotsThree = false;
ConfigManager.cheatInstantRiotsFour = false;
ConfigManager.cheatWaitressLog = false;
ConfigManager.cheatWaitressMemory = false;

ConfigManager.cheatDisableAutosave = false;

ConfigManager.KarrynBoobsSize = 0;
ConfigManager.KarrynHairColor = 1;
ConfigManager.displayPubic = true;
ConfigManager.KarrynPubicStyle = 1;
ConfigManager.KarrynPubicColor = 0;
ConfigManager.displayStrayPubes = true;
ConfigManager.MaleStrayPubesAmount = 1;

ConfigManager.lovenseEnable = false;
ConfigManager.lovenseIP = false;
ConfigManager.lovenseInputingIP = false;
ConfigManager.lovensePort = false;
ConfigManager.lovenseInputingPort = false;
ConfigManager.lovensePCLANEnabled = false;
ConfigManager.lovenseVolume = 100;
ConfigManager.lovenseTime = 1;
ConfigManager.lovensePumpEnable = true;

ConfigManager.raidEnable = false;
ConfigManager.raidMouthArray = [];
ConfigManager.raidBoobsArray = [];
ConfigManager.raidClitArray = [];
ConfigManager.raidPussyArray = [];
ConfigManager.raidAnalArray = [];
ConfigManager.raidExhibitionismArray = [];
ConfigManager.raidMasochismArray = [];
ConfigManager.raidSadismArray = [];
ConfigManager.raidArousalArray = [];
ConfigManager.raidOrgasmArray = [];

Object.defineProperty(ConfigManager, 'bgmVolume', {
    get: function () {
        return AudioManager._bgmVolume;
    },
    set: function (value) {
        AudioManager.bgmVolume = value;
        AudioManager.meVolume = value;
    },
    configurable: true
});

Object.defineProperty(ConfigManager, 'bgsVolume', {
    get: function () {
        return AudioManager.seVolume;
    },
    set: function (value) {
        AudioManager.bgsVolume = value;
    },
    configurable: true
});

Object.defineProperty(ConfigManager, 'meVolume', {
    get: function () {
        return AudioManager._bgmVolume;
    },
    set: function (value) {
        AudioManager.meVolume = value;
    },
    configurable: true
});

Object.defineProperty(ConfigManager, 'seVolume', {
    get: function () {
        return AudioManager.seVolume;
    },
    set: function (value) {
        AudioManager.seVolume = value;
        AudioManager.bgsVolume = value;
    },
    configurable: true
});

Object.defineProperty(ConfigManager, 'voiceVolume', {
    get: function () {
        return AudioManager.voiceVolume;
    },
    set: function (value) {
        AudioManager.voiceVolume = value;
    },
    configurable: true
});

Object.defineProperty(ConfigManager, 'moanVolume', {
    get: function () {
        return AudioManager.moanVolume;
    },
    set: function (value) {
        AudioManager.moanVolume = value;
    },
    configurable: true
});

Object.defineProperty(ConfigManager, 'maleVolume', {
    get: function () {
        return AudioManager.maleVolume;
    },
    set: function (value) {
        AudioManager.maleVolume = value;
    },
    configurable: true
});

Remtairy.CM.ConfigManager_applyData = ConfigManager.applyData;
ConfigManager.applyData = function (config) {
    Remtairy.CM.ConfigManager_applyData.call(this, config);

    //this.remLanguage = config['remLanguage'];
    //if(this.remLanguage !== RemLanguageJP && this.remLanguage !== RemLanguageEN)
    //	this.remLanguage = KARRYN_PRISON_LANGUAGE;
    this.remLanguage = this.readRemConfig(config, 'remLanguage');
    this.remVoiceLanguage = this.readRemConfig(config, 'remVoiceLanguage');

    this.synchFps = this.readRemConfig(config, 'synchFps');
    this.safeMode = config['safeMode'];
    this.replayMode = config['replayMode'];
    this.pixelMovement = this.readRemConfig(config, 'pixelMovement');

    this.remMapEffect = this.readRemConfig(config, 'remMapEffect');
    this.remDisableScreenFlash = this.readRemConfig(config, 'remDisableScreenFlash');
    this.remLinesFast = config['remLinesFast'];
    this.karrynLinesPrompt = this.readRemConfig(config, 'karrynLinesPrompt');
    this.remCutinsFast = config['remCutinsFast'];
    this.remCutinsSmootherLoading = this.readRemConfig(config, 'remCutinsSmootherLoading');
    this.remSmootherCGLoading = this.readRemConfig(config, 'remSmootherCGLoading');
    this.remCutinsDisabled = this.readRemConfig(config, 'remCutinsDisabled');
    this.remShowSexualDamagePopup = this.readRemConfig(config, 'remShowSexualDamagePopup');

    this.disableFootjobs = this.readRemConfig(config, 'disableFootjobs');
    this.disableRimjobs = this.readRemConfig(config, 'disableRimjobs');
    this.disableSmegma = this.readRemConfig(config, 'disableSmegma');
    this.disableFeraMouth = this.readRemConfig(config, 'disableFeraMouth');

    this.keepVoicePlayback = this.readRemConfig(config, 'keepVoicePlayback');
    this.autoContinueAfterVoice = this.readRemConfig(config, 'autoContinueAfterVoice');

    this.remBattlelogDuration = this.readRemConfig(config, 'remBattlelogDuration');
    this.remBattlelogFontSize = this.readRemConfig(config, 'remBattlelogFontSize');
    this.remMaleDialogueAppear = this.readRemConfig(config, 'remMaleDialogueAppear');
    this.displayPleasureAsPercent = this.readRemConfig(config, 'displayPleasureAsPercent');

    this.voiceVolume = this.readRemVolume(config, 'voiceVolume');
    this.moanVolume = this.readRemVolume(config, 'moanVolume');
    this.masterVolume = this.readRemVolume(config, 'masterVolume');
    this.bgmVolume = this.readRemVolume(config, 'bgmVolume');
    this.seVolume = this.readRemVolume(config, 'seVolume');
    this.maleVolume = this.readRemVolume(config, 'maleVolume');

    this.sortPassivesAscending = this.readRemConfig(config, 'sortPassivesAscending');
    this.cancelSkipMentalPhase = this.readRemConfig(config, 'cancelSkipMentalPhase');
    this.shorterDefeatBattles = this.readRemConfig(config, 'shorterDefeatBattles');

    this.edictsOutlineColorObtainable = this.readRemConfig(config, 'edictsOutlineColorObtainable');
    this.edictsOutlineColorMeetReq = this.readRemConfig(config, 'edictsOutlineColorMeetReq');
    this.edictsOutlineColorNoReq = this.readRemConfig(config, 'edictsOutlineColorNoReq');

    this.cheatEnemyDoublePhysicalDamage = this.readRemConfig(config, 'cheatEnemyDoublePhysicalDamage');
    this.cheatEnemyTriplePhysicalDamage = this.readRemConfig(config, 'cheatEnemyTriplePhysicalDamage');
    this.cheatEnemyDoubleSexualDamage = this.readRemConfig(config, 'cheatEnemyDoubleSexualDamage');
    this.cheatEnemyTripleSexualDamage = this.readRemConfig(config, 'cheatEnemyTripleSexualDamage');
    this.cheatEnemyDoubleOrgasmPoint = this.readRemConfig(config, 'cheatEnemyDoubleOrgasmPoint');
    this.cheatEnemyAlwaysAct = this.readRemConfig(config, 'cheatEnemyAlwaysAct');

    this.cheatActorDoublePassiveGain = this.readRemConfig(config, 'cheatActorDoublePassiveGain');
    this.cheatActorNoPassiveGain = this.readRemConfig(config, 'cheatActorNoPassiveGain');
    this.cheatActorHalfStaminaRegen = this.readRemConfig(config, 'cheatActorHalfStaminaRegen');
    this.cheatActorThirdStaminaRegen = this.readRemConfig(config, 'cheatActorThirdStaminaRegen');
    this.cheatActorHalfExpRate = this.readRemConfig(config, 'cheatActorHalfExpRate');
    this.cheatActorNoEvasion = this.readRemConfig(config, 'cheatActorNoEvasion');
    this.cheatLessControlFive = this.readRemConfig(config, 'cheatLessControlFive');
    this.cheatLessControlTen = this.readRemConfig(config, 'cheatLessControlTen');
    this.cheatInstantRiotsOne = this.readRemConfig(config, 'cheatInstantRiotsOne');
    this.cheatInstantRiotsTwo = this.readRemConfig(config, 'cheatInstantRiotsTwo');
    this.cheatInstantRiotsThree = this.readRemConfig(config, 'cheatInstantRiotsThree');
    this.cheatInstantRiotsFour = this.readRemConfig(config, 'cheatInstantRiotsFour');
    this.cheatWaitressLog = this.readRemConfig(config, 'cheatWaitressLog');
    this.cheatWaitressMemory = this.readRemConfig(config, 'cheatWaitressMemory');
    this.cheatDisableAutosave = this.readRemConfig(config, 'cheatDisableAutosave');

    this.KarrynBoobsSize = this.readRemConfig(config, 'KarrynBoobsSize');
    this.KarrynHairColor = this.readRemConfig(config, 'KarrynHairColor');
    this.KarrynPubicStyle = this.readRemConfig(config, 'KarrynPubicStyle');
    this.KarrynPubicColor = this.readRemConfig(config, 'KarrynPubicColor');
    this.MaleStrayPubesAmount = this.readRemConfig(config, 'MaleStrayPubesAmount');
    this.displayPubic = this.readRemConfig(config, 'displayPubic');
    this.displayStrayPubes = this.readRemConfig(config, 'displayStrayPubes');

    this.lovenseEnable = this.readRemConfig(config, 'lovenseEnable');
    this.lovenseVolume = this.readRemConfig(config, 'lovenseVolume');
    this.lovensePumpEnable = this.readRemConfig(config, 'lovensePumpEnable');
    this.raidEnable = this.readRemConfig(config, 'raidEnable');
    this.lovenseTime = this.readRemConfig(config, 'lovenseTime');

};

Remtairy.CM.ConfigManager_makeData = ConfigManager.makeData;
ConfigManager.makeData = function () {
    let config = Remtairy.CM.ConfigManager_makeData.call(this);
    config.remBattlelogDuration = this.remBattlelogDuration;
    config.remBattlelogFontSize = this.remBattlelogFontSize;
    config.remMaleDialogueAppear = this.remMaleDialogueAppear;
    config.KarrynBoobsSize = this.KarrynBoobsSize;
    config.KarrynHairColor = this.KarrynHairColor;
    config.KarrynPubicStyle = this.KarrynPubicStyle;
    config.KarrynPubicColor = this.KarrynPubicColor;
    config.MaleStrayPubesAmount = this.MaleStrayPubesAmount;
    config.lovenseTime = this.lovenseTime;
    config.synchFps = this.synchFps;
    config.voiceVolume = this.voiceVolume;
    config.moanVolume = this.moanVolume;
    config.maleVolume = this.maleVolume;
    return config;
};

ConfigManager.readRemVolume = function (config, name) {
    let value = config[name];
    if (value !== undefined) {
        return Number(value).clamp(0, 100);
    } else {
        switch (name) {
            case 'masterVolume':
                return 100;
            case 'moanVolume':
                return 30;
            case 'voiceVolume':
                return 100;
            case 'seVolume':
                return 50;
            case 'bgmVolume':
                return 50;
            case 'maleVolume':
                return 50;
        }
    }
};

ConfigManager.readRemConfig = function (config, name) {
    let value = config[name];
    if (value !== undefined) {
        return value;
    } else {
        switch (name) {
            case 'remBattlelogDuration':
                return 2;
            case 'remBattlelogFontSize':
                return 2;
            case 'remMaleDialogueAppear':
                return 3;
            case 'pixelMovement':
                return true;
            case 'remMapEffect':
                return true;
            case 'remDisableScreenFlash':
                return false;
            case 'karrynLinesPrompt':
                return true;
            case 'remCutinsSmootherLoading':
                return false;
            case 'remSmootherCGLoading':
                return false;
            case 'remCutinsDisabled':
                return false;
            case 'remShowSexualDamagePopup':
                return true;
            case 'displayPleasureAsPercent':
                return true;
            case 'disableFootjobs':
                return false;
            case 'disableRimjobs':
                return false;
            case 'disableSmegma':
                return false;
            case 'disableFeraMouth':
                return false;

            case 'keepVoicePlayback':
                return false;
            case 'autoContinueAfterVoice':
                return true;
            case 'synchFps':
                return false;

            case 'edictsOutlineColorObtainable':
                return EDICTS_OUTLINE_COLOR_OBTAINABLE_GREEN_ID;
            case 'edictsOutlineColorMeetReq':
                return EDICTS_OUTLINE_COLOR_METREQ_YELLOW_ID;
            case 'edictsOutlineColorNoReq':
                return EDICTS_OUTLINE_COLOR_NOREQ_GRAY_ID;

            case 'cheatEnemyDoublePhysicalDamage':
            case 'cheatEnemyTriplePhysicalDamage':
            case 'cheatEnemyDoubleSexualDamage':
            case 'cheatEnemyTripleSexualDamage':
            case 'cheatEnemyDoubleOrgasmPoint':
            case 'cheatEnemyAlwaysAct':
            case 'cheatActorDoublePassiveGain':
            case 'cheatActorNoPassiveGain':
            case 'cheatActorHalfStaminaRegen':
            case 'cheatActorThirdStaminaRegen':
            case 'cheatActorHalfExpRate':
            case 'cheatActorNoEvasion':
            case 'cheatLessControlFive':
            case 'cheatLessControlTen':
            case 'cheatInstantRiotsOne':
            case 'cheatInstantRiotsTwo':
            case 'cheatInstantRiotsThree':
            case 'cheatInstantRiotsFour':
            case 'cheatWaitressLog':
            case 'cheatWaitressMemory':
            case 'cheatDisableAutosave':
                return false;

            case 'sortPassivesAscending':
                return false;
            case 'shorterDefeatBattles':
                return false;
            case 'displayPubic':
                return true;
            case 'displayStrayPubes':
                return true;

            case 'remLanguage':
                return KARRYN_PRISON_LANGUAGE;
            case 'remVoiceLanguage':
                return KARRYN_PRISON_LANGUAGE;
            case 'KarrynBoobsSize':
                return 0;
            case 'KarrynHairColor':
                return 1;
            case 'KarrynPubicStyle':
                return 1;
            case 'KarrynPubicColor':
                return 0;
            case 'MaleStrayPubesAmount':
                return 1;

            case 'lovenseEnable':
                return false;
            case 'lovensePumpEnable':
                return true;
            case 'raidEnable':
                return false;
            case 'lovenseVolume':
                return 100;
            case 'lovenseTime':
                return 1;

            default:
                return false;
        }
    }
};

ConfigManager.readConfigMessageSpeed = function (config, name) {
    let value = config[name];
    if (value !== undefined) {
        return value;
    } else {
        return 10;
    }
};

ConfigManager.convertedTachieMouthName = function (actor) {
    let id = actor.tachieMouth;
    if (ConfigManager.disableFeraMouth) {
        switch (id) {
            case 'fera4':
                id = 'fera1';
                break;
            case 'fera5':
                id = 'fera2';
                break;
            case 'fera6':
                id = 'fera3';
                break;
            case 'fera_4':
                id = 'fera_1';
                break;
            case 'fera_5':
                id = 'fera_2';
                break;
            case 'fera_6':
                id = 'fera_3';
                break;
            case 'far_fera4':
                id = 'far_fera1';
                break;
            case 'far_fera5':
                id = 'far_fera2';
                break;
            case 'far_fera6':
                id = 'far_fera3';
                break;
            case 'fera_soft4':
                id = 'fera_soft1';
                break;
            case 'fera_soft5':
                id = 'fera_soft2';
                break;
            case 'fera_soft6':
                id = 'fera_soft3';
                break;
            case 'fera_hard4':
                id = 'fera_hard1';
                break;
            case 'fera_hard5':
                id = 'fera_hard2';
                break;
            case 'fera_hard6':
                id = 'fera_hard3';
                break;
        }
    }
    return id;
};

//////////////////
// Window Options
//////////////////

Remtairy.CM.Window_Options_addGeneralOptions = Window_Options.prototype.addGeneralOptions;
Window_Options.prototype.addGeneralOptions = function () {
    Remtairy.CM.Window_Options_addGeneralOptions.call(this);
    if (Imported.YEP_OptionsCore) {
        return;
    }
    this.addRemOptions();
};

Window_Options.prototype.addRemOptions = function () {
    this.addCommand(TextManager.safeMode, 'safeMode');
    this.addCommand(TextManager.replayMode, 'replayMode');
    this.addCommand(TextManager.pixelMovement, 'pixelMovement');
    this.addCommand(TextManager.remLanguage, 'remLanguage');
    this.addCommand(TextManager.remVoiceLanguage, 'remVoiceLanguage');

    this.addCommand(TextManager.yanflyOptionsDisableRimjob, 'disableFootjobs');
    this.addCommand(TextManager.yanflyOptionsDisableRimjob, 'disableRimjobs');
    this.addCommand(TextManager.yanflyOptionsDisableSmegma, 'disableSmegma');
    this.addCommand(TextManager.yanflyOptionsDisableFeraMouth, 'disableFeraMouth');

    this.addCommand(TextManager.yanflyOptionsKeepVoicePlayback, 'keepVoicePlayback');
    this.addCommand(TextManager.yanflyOptionsAutoContinueAfterVoice, 'autoContinueAfterVoice');

    this.addCommand(TextManager.yanflyOptionsDisplayPleasureAsPercent, 'displayPleasureAsPercent');

    this.addCommand(TextManager.yanflyOptionsMapEffects, 'remMapEffect');
    this.addCommand(TextManager.yanflyOptionsDisableFlashing, 'remDisableScreenFlash');

    this.addCommand(TextManager.yanflyOptionsKarrynLinesPrompt, 'karrynLinesPrompt');
    this.addCommand(TextManager.yanflyOptionsFasterBattleDialogue, 'remLinesFast');
    this.addCommand(TextManager.yanflyOptionsFasterBattleCutins, 'remCutinsFast');
    this.addCommand(TextManager.yanflyOptionsSmootherBattleCutinLoading, 'remCutinsSmootherLoading');
    this.addCommand(TextManager.yanflyOptionsSmootherCGLoading, 'remSmootherCGLoading');
    this.addCommand(TextManager.yanflyOptionsDisableBattleCutins, 'remCutinsDisabled');

    this.addCommand(TextManager.yanflyOptionsShowSexualDamagePopup, 'remShowSexualDamagePopup');

    this.addCommand(TextManager.yanflyOptionsBattlelogDuration, 'remBattlelogDuration');
    this.addCommand(TextManager.yanflyOptionsBattlelogFontsize, 'remBattlelogFontSize');

    this.addCommand(TextManager.yanflyOptionsMaleDialogueAppear, 'remMaleDialogueAppear');

    this.addCommand(TextManager.yanflyOptionsSortPassivesAscending, 'sortPassivesAscending');

    this.addCommand(TextManager.yanflyOptionsCancelSkipMentalPhase, 'cancelSkipMentalPhase');
};

Remtairy.CM.Window_Options_statusText = Window_Options.prototype.statusText;
Window_Options.prototype.statusText = function (index) {
    let symbol = this.commandSymbol(index);
    let value = this.getConfigValue(symbol);
    switch (symbol) {
        case 'remLanguage':
            if (value == RemLanguageJP) {
                return "日本語";
            } else if (value == RemLanguageEN) {
                return "English";
            } else if (value == RemLanguageTCH) {
                return "繁體中文";
            } else if (value == RemLanguageSCH) {
                return "简体中文";
            } else if (value == RemLanguageKR) {
                return "한국어";
            } else if (value == RemLanguageRU) {
                return "Русский";
            } else if (value == RemLanguageSP) {
                return "Español";
            } else {
                return "error";
            }
        case 'remVoiceLanguage':
            if (value == RemLanguageJP) {
                return "日本語";
            } else if (value == RemLanguageEN) {
                return "English";
            } else {
                return "error";
            }
        case 'edictsOutlineColorObtainable':
        case 'edictsOutlineColorMeetReq':
        case 'edictsOutlineColorNoReq':
            return TextManager.edictsOutlineColorOption(symbol, value);
        case 'remBattlelogDuration':
            return TextManager.battlelogDurationOption(value);
        case 'remBattlelogFontSize':
            return TextManager.battlelogFontSizeOption(value);
        case 'remMaleDialogueAppear':
            return TextManager.maleDialogueAppearOption(value);
        case 'KarrynBoobsSize':
            return TextManager.karrynBoobsSizeOption(value);
        case 'KarrynHairColor':
            return TextManager.karrynHairColorOption(value);
        case 'KarrynPubicColor':
            return TextManager.karrynPubicColorOption(value);
        case 'KarrynPubicStyle':
            return TextManager.karrynPubicStyleOption(value);
        case 'MaleStrayPubesAmount':
            return TextManager.karrynStrayPubesAmountOption(value);
        case 'lovenseTime':
            return TextManager.lovenseTimeOption(value);

        default:
            return Remtairy.CM.Window_Options_statusText.call(this, index);
    }
};

Window_Options.prototype.changePaintOpacity = function (enabled) {
    this.contents.fontBold = enabled;
    this.contents.paintOpacity = enabled ? 255 : this.translucentOpacity();
};

Window_Options.prototype.drawOptionsFullscreen = function (index) {
    let onText = 'Fullscreen';
    let offText = 'Window';
    var rect = this.itemRectForText(index);
    var statusWidth = this.statusWidth();
    var halfStatusWidth = this.statusWidth() / 2;
    var titleWidth = rect.width - statusWidth;
    this.resetTextColor();
    var symbol = this.commandSymbol(index);
    var value = this.getConfigValue(symbol);
    this.changePaintOpacity(!value);
    this.drawText(offText, titleWidth, rect.y, halfStatusWidth, 'center');
    this.changePaintOpacity(value);
    this.drawText(onText, titleWidth + halfStatusWidth, rect.y, halfStatusWidth, 'center');
};

//Credits to https://github.com/ivan02022000/rpg-maker-files/blob/9607c1c95783d291ae757b22701dec19f50b72b0/FullscreenToggleOption_change
Window_Options.prototype.lastInput = false;

Window_Options_processCursorMove = Window_Options.prototype.processCursorMove;
Window_Options.prototype.processCursorMove = function () {
    if (this.isOpenAndActive()) {
        if (this.lastInput) {
            this.refresh();
            this.lastInput = false;
        } else if (
            this.isCursorMovable() &&
            (Input.isRepeated('right') || Input.isRepeated('left'))
        ) {
            this.lastInput = true;
        }
    }

    Window_Options_processCursorMove.call(this);
};

Window_Options_processHandling = Window_Options.prototype.processHandling;
Window_Options.prototype.processHandling = function () {
    if (this.isOpenAndActive()) {
        if (this.lastInput) {
            this.refresh();
            this.lastInput = false;
        } else if (
            (this.isOkEnabled() && this.isOkTriggered()) ||
            (TouchInput.isTriggered() && this.isTouchedInsideFrame())
        ) {
            this.lastInput = true;
        }
    }
    Window_Options_processHandling.call(this);
};

// Lovense

Window_Options.prototype.drawOptionsLovenseIP = function (index) {
    var rect = this.itemRectForText(index);
    var statusWidth = this.statusWidth();
    var titleWidth = rect.width - statusWidth;
    this.resetTextColor();
    var symbol = this.commandSymbol(index);
    if (ConfigManager.lovensePCLANEnabled) {
        this.changePaintOpacity(false);
        this.drawText('-----', titleWidth, rect.y, statusWidth, 'right');
    } else if (!ConfigManager.lovenseIP) {
        this.changePaintOpacity(false);
        this.drawText(TextManager.yanflyOptionsLovenseMobileIPText, titleWidth, rect.y, statusWidth, 'right');
    } else {
        let ipText = '';
        let ipValue = '' + ConfigManager.lovenseIP;
        for (let i = 0; i < ipValue.length; ++i) {
            if (ipValue[i] === '.') {
                ipText += '.';
            } else if (ipValue[i] === ':') {
                ipText += ':';
            } else {
                ipText += '*';
            }
        }
        this.changePaintOpacity(true);
        this.drawText(ipText, titleWidth, rect.y, statusWidth, 'right');
    }
};
Window_Options.prototype.drawOptionsLovensePort = function (index) {
    var rect = this.itemRectForText(index);
    var statusWidth = this.statusWidth();
    var titleWidth = rect.width - statusWidth;
    this.resetTextColor();
    var symbol = this.commandSymbol(index);
    if (ConfigManager.lovensePCLANEnabled) {
        this.changePaintOpacity(false);
        this.drawText('-----', titleWidth, rect.y, statusWidth, 'right');
    } else if (!ConfigManager.lovensePort) {
        this.changePaintOpacity(false);
        this.drawText(TextManager.yanflyOptionsLovenseMobilePortText, titleWidth, rect.y, statusWidth, 'right');
    } else {
        let portText = '';
        let portValue = '' + ConfigManager.lovensePort;
        for (let i = 0; i < portValue.length; ++i) {
            portText += '*';
        }
        this.changePaintOpacity(true);
        this.drawText(portText, titleWidth, rect.y, statusWidth, 'right');
    }
};

Window_Options.prototype.drawOptionsLovensePCLANEnabled = function (index) {
    let onText = TextManager.yanflyOptionsLovenseConnectionType_PC;
    let offText = TextManager.yanflyOptionsLovenseConnectionType_Mobile;
    var rect = this.itemRectForText(index);
    var statusWidth = this.statusWidth();
    var halfStatusWidth = this.statusWidth() / 2;
    var titleWidth = rect.width - statusWidth;
    this.resetTextColor();
    var symbol = this.commandSymbol(index);
    var value = this.getConfigValue(symbol);
    this.changePaintOpacity(!value);
    this.drawText(offText, titleWidth, rect.y, halfStatusWidth, 'center');
    this.changePaintOpacity(value);
    this.drawText(onText, titleWidth + halfStatusWidth, rect.y, halfStatusWidth,
        'center'
    );
};

Window_Options.prototype.drawOptionsLovenseConnect = function (index) {
    var rect = this.itemRectForText(index);
    var statusWidth = this.statusWidth();
    var titleWidth = rect.width - statusWidth;
    this.resetTextColor();
    var symbol = this.commandSymbol(index);
    this.changePaintOpacity(true);
    this.drawText(TextManager.yanflyOptionsLovenseConnectToysText, titleWidth, rect.y, statusWidth, 'right');
};

Window_Options.prototype.drawOptionsLovenseTestConnection = function (index) {
    var rect = this.itemRectForText(index);
    var statusWidth = this.statusWidth();
    var titleWidth = rect.width - statusWidth;
    this.resetTextColor();
    var symbol = this.commandSymbol(index);
    this.changePaintOpacity(true);
    this.drawText(TextManager.yanflyOptionsLovenseToyNameListTest, titleWidth, rect.y, statusWidth, 'right');
};

Window_Options.prototype.changeRAIDparty = function (toyNum, symbol, value) {
    let lastValue = lovense.getToys()[toyNum].RAID_party;
    if (lastValue !== value) {
        this.setRAIDparty(toyNum, value);
        this.redrawItem(this.findSymbol(symbol));
        SoundManager.playCursor();
    }
};
Window_Options.prototype.setRAIDparty = function (toyNum, value) {
    lovense.getToys()[toyNum].RAID_party = value;
};
Window_Options.prototype.getRAIDpartyValue = function (toyNum) {
    return lovense.getToys()[toyNum].RAID_party;
};
Window_Options.prototype.RAIDpartyText = function (toyNum) {
    let value = this.getRAIDpartyValue(toyNum);
    return TextManager.RAIDpartyOption(value);
};

Window_Options.prototype.changeRAIDarousal = function (toyNum, symbol, value) {
    let lastValue = lovense.getToys()[toyNum].RAID_arousal;
    if (lastValue !== value) {
        this.setRAIDarousal(toyNum, value);
        this.redrawItem(this.findSymbol(symbol));
        SoundManager.playCursor();
    }
};
Window_Options.prototype.setRAIDarousal = function (toyNum, value) {
    lovense.getToys()[toyNum].RAID_arousal = value;
};
Window_Options.prototype.getRAIDarousalValue = function (toyNum) {
    return lovense.getToys()[toyNum].RAID_arousal;
};
Window_Options.prototype.RAIDarousalText = function (toyNum) {
    let value = this.getRAIDarousalValue(toyNum);
    return TextManager.RAIDarousalOption(value);
};

Window_Options.prototype.changeRAIDorgasm = function (toyNum, symbol, value) {
    let lastValue = lovense.getToys()[toyNum].RAID_orgasm;
    if (lastValue !== value) {
        this.setRAIDorgasm(toyNum, value);
        this.redrawItem(this.findSymbol(symbol));
        SoundManager.playCursor();
    }
};
Window_Options.prototype.setRAIDorgasm = function (toyNum, value) {
    lovense.getToys()[toyNum].RAID_orgasm = value;
};
Window_Options.prototype.getRAIDorgasmValue = function (toyNum) {
    return lovense.getToys()[toyNum].RAID_orgasm;
};
Window_Options.prototype.RAIDorgasmText = function (toyNum) {
    let value = this.getRAIDorgasmValue(toyNum);
    return TextManager.RAIDorgasmOption(value);
};

Window_Options.prototype.changeRAIDtime = function (toyNum, symbol, add) {
    this.setRAIDtime(toyNum, add);
    this.redrawItem(this.findSymbol(symbol));
    SoundManager.playCursor();
};
Window_Options.prototype.setRAIDtime = function (toyNum, add) {
    if (add) {
        lovense.getToys()[toyNum].RAID_time++;
        if (lovense.getToys()[toyNum].RAID_time > 8) {
            lovense.getToys()[toyNum].RAID_time = 0;
        }
    } else {
        lovense.getToys()[toyNum].RAID_time--;
        if (lovense.getToys()[toyNum].RAID_time < 0) {
            lovense.getToys()[toyNum].RAID_time = 8;
        }
    }
};
Window_Options.prototype.getRAIDtimeValue = function (toyNum) {
    return lovense.getToys()[toyNum].RAID_time;
};
Window_Options.prototype.RAIDtimeText = function (toyNum) {
    let value = this.getRAIDtimeValue(toyNum);
    return TextManager.RAIDtimeOption(value);
};

Window_Options.prototype.changeRAIDintensity = function (toyNum, symbol, add) {
    this.setRAIDintensity(toyNum, add);
    this.redrawItem(this.findSymbol(symbol));
    SoundManager.playCursor();
};
Window_Options.prototype.setRAIDintensity = function (toyNum, add) {
    if (add) {
        lovense.getToys()[toyNum].RAID_intensity += 25;
        if (lovense.getToys()[toyNum].RAID_intensity > 100) {
            lovense.getToys()[toyNum].RAID_intensity = 0;
        }
    } else {
        lovense.getToys()[toyNum].RAID_intensity -= 25;
        if (lovense.getToys()[toyNum].RAID_intensity < 0) {
            lovense.getToys()[toyNum].RAID_intensity = 100;
        }
    }
};
Window_Options.prototype.getRAIDintensityValue = function (toyNum) {
    return lovense.getToys()[toyNum].RAID_intensity;
};
Window_Options.prototype.RAIDintensityText = function (toyNum) {
    let value = this.getRAIDintensityValue(toyNum);
    return TextManager.RAIDintensityOption(value);
};

Window_Options.prototype.RAIDsexactText = function (toyNum, letter) {
    let value = this.getRAIDsexact(toyNum, letter);
    return TextManager.RAIDsexactOption(value);
};
Window_Options.prototype.getRAIDsexact = function (toyNum, letter) {
    switch (letter) {
        case 'A':
            return lovense.getToys()[toyNum].RAID_type_A;
        case 'B':
            return lovense.getToys()[toyNum].RAID_type_B;
        case 'C':
            return lovense.getToys()[toyNum].RAID_type_C;
        case 'D':
            return lovense.getToys()[toyNum].RAID_type_D;
        case 'E':
            return lovense.getToys()[toyNum].RAID_type_E;
    }
};
Window_Options.prototype.setRAIDsexact = function (toyNum, value, letter) {
    switch (letter) {
        case 'A':
            lovense.getToys()[toyNum].RAID_type_A = value;
            break;
        case 'B':
            lovense.getToys()[toyNum].RAID_type_B = value;
            break;
        case 'C':
            lovense.getToys()[toyNum].RAID_type_C = value;
            break;
        case 'D':
            lovense.getToys()[toyNum].RAID_type_D = value;
            break;
        case 'E':
            lovense.getToys()[toyNum].RAID_type_E = value;
            break;
    }

};
Window_Options.prototype.changeRAIDsexact_up = function (toyNum, letter, symbol) {
    let lastValue = this.getRAIDsexact(toyNum, letter);
    let value = lastValue + 1;
    if (value > RAID_TYPE_HIGHEST_ID) {
        value = 0;
    }

    if (value !== 0) {
        switch (letter) {
            case 'A':
                while (lovense.getToys()[toyNum].RAID_type_B === value || lovense.getToys()[toyNum].RAID_type_C ===
                value || lovense.getToys()[toyNum].RAID_type_D === value || lovense.getToys()[toyNum].RAID_type_E ===
                value) {
                    value++;
                    if (value > RAID_TYPE_HIGHEST_ID) {
                        value = 0;
                        break;
                    }
                    if (ConfigManager.disableRimjobs && value === RAID_TYPE_RIMJOB_ID) {
                        value++;
                        if (value > RAID_TYPE_HIGHEST_ID) {
                            value = 0;
                            break;
                        }
                    }
                    if (ConfigManager.disableFootjobs && value === RAID_TYPE_FOOTJOB_ID) {
                        value++;
                        if (value > RAID_TYPE_HIGHEST_ID) {
                            value = 0;
                            break;
                        }
                    }
                }
                break;
            case 'B':
                while (lovense.getToys()[toyNum].RAID_type_A === value || lovense.getToys()[toyNum].RAID_type_C ===
                value || lovense.getToys()[toyNum].RAID_type_D === value || lovense.getToys()[toyNum].RAID_type_E ===
                value) {
                    value++;
                    if (value > RAID_TYPE_HIGHEST_ID) {
                        value = 0;
                        break;
                    }
                    if (ConfigManager.disableRimjobs && value === RAID_TYPE_RIMJOB_ID) {
                        value++;
                        if (value > RAID_TYPE_HIGHEST_ID) {
                            value = 0;
                            break;
                        }
                    }
                    if (ConfigManager.disableFootjobs && value === RAID_TYPE_FOOTJOB_ID) {
                        value++;
                        if (value > RAID_TYPE_HIGHEST_ID) {
                            value = 0;
                            break;
                        }
                    }
                }
                break;
            case 'C':
                while (lovense.getToys()[toyNum].RAID_type_B === value || lovense.getToys()[toyNum].RAID_type_A ===
                value || lovense.getToys()[toyNum].RAID_type_D === value || lovense.getToys()[toyNum].RAID_type_E ===
                value) {
                    value++;
                    if (value > RAID_TYPE_HIGHEST_ID) {
                        value = 0;
                        break;
                    }
                    if (ConfigManager.disableRimjobs && value === RAID_TYPE_RIMJOB_ID) {
                        value++;
                        if (value > RAID_TYPE_HIGHEST_ID) {
                            value = 0;
                            break;
                        }
                    }
                    if (ConfigManager.disableFootjobs && value === RAID_TYPE_FOOTJOB_ID) {
                        value++;
                        if (value > RAID_TYPE_HIGHEST_ID) {
                            value = 0;
                            break;
                        }
                    }
                }
                break;
            case 'D':
                while (lovense.getToys()[toyNum].RAID_type_B === value || lovense.getToys()[toyNum].RAID_type_A ===
                value || lovense.getToys()[toyNum].RAID_type_C === value || lovense.getToys()[toyNum].RAID_type_E ===
                value) {
                    value++;
                    if (value > RAID_TYPE_HIGHEST_ID) {
                        value = 0;
                        break;
                    }
                    if (ConfigManager.disableRimjobs && value === RAID_TYPE_RIMJOB_ID) {
                        value++;
                        if (value > RAID_TYPE_HIGHEST_ID) {
                            value = 0;
                            break;
                        }
                    }
                    if (ConfigManager.disableFootjobs && value === RAID_TYPE_FOOTJOB_ID) {
                        value++;
                        if (value > RAID_TYPE_HIGHEST_ID) {
                            value = 0;
                            break;
                        }
                    }
                }
                break;
            case 'E':
                while (lovense.getToys()[toyNum].RAID_type_B === value || lovense.getToys()[toyNum].RAID_type_A ===
                value || lovense.getToys()[toyNum].RAID_type_D === value || lovense.getToys()[toyNum].RAID_type_C ===
                value) {
                    value++;
                    if (value > RAID_TYPE_HIGHEST_ID) {
                        value = 0;
                        break;
                    }
                    if (ConfigManager.disableRimjobs && value === RAID_TYPE_RIMJOB_ID) {
                        value++;
                        if (value > RAID_TYPE_HIGHEST_ID) {
                            value = 0;
                            break;
                        }
                    }
                    if (ConfigManager.disableFootjobs && value === RAID_TYPE_FOOTJOB_ID) {
                        value++;
                        if (value > RAID_TYPE_HIGHEST_ID) {
                            value = 0;
                            break;
                        }
                    }
                }
                break;
        }
    }
    this.setRAIDsexact(toyNum, value, letter);

    this.redrawItem(this.findSymbol(symbol));
    SoundManager.playCursor();
};
Window_Options.prototype.changeRAIDsexact_down = function (toyNum, letter, symbol) {
    let lastValue = this.getRAIDsexact(toyNum, letter);
    let value = lastValue - 1;
    if (value < 0) {
        value = RAID_TYPE_HIGHEST_ID;
    }

    if (value !== 0) {
        switch (letter) {
            case 'A':
                while (lovense.getToys()[toyNum].RAID_type_B === value || lovense.getToys()[toyNum].RAID_type_C ===
                value || lovense.getToys()[toyNum].RAID_type_D === value || lovense.getToys()[toyNum].RAID_type_E ===
                value) {
                    value--;
                    if (value === 0) {
                        break;
                    }
                    if (ConfigManager.disableFootjobs && value === RAID_TYPE_FOOTJOB_ID) {
                        value--;
                        if (value === 0) {
                            break;
                        }
                    }
                    if (ConfigManager.disableRimjobs && value === RAID_TYPE_RIMJOB_ID) {
                        value--;
                        if (value === 0) {
                            break;
                        }
                    }
                }
                break;
            case 'B':
                while (lovense.getToys()[toyNum].RAID_type_A === value || lovense.getToys()[toyNum].RAID_type_C ===
                value || lovense.getToys()[toyNum].RAID_type_D === value || lovense.getToys()[toyNum].RAID_type_E ===
                value) {
                    value--;
                    if (value === 0) {
                        break;
                    }
                    if (ConfigManager.disableFootjobs && value === RAID_TYPE_FOOTJOB_ID) {
                        value--;
                        if (value === 0) {
                            break;
                        }
                    }
                    if (ConfigManager.disableRimjobs && value === RAID_TYPE_RIMJOB_ID) {
                        value--;
                        if (value === 0) {
                            break;
                        }
                    }
                }
                break;
            case 'C':
                while (lovense.getToys()[toyNum].RAID_type_B === value || lovense.getToys()[toyNum].RAID_type_A ===
                value || lovense.getToys()[toyNum].RAID_type_D === value || lovense.getToys()[toyNum].RAID_type_E ===
                value) {
                    value--;
                    if (value === 0) {
                        break;
                    }
                    if (ConfigManager.disableFootjobs && value === RAID_TYPE_FOOTJOB_ID) {
                        value--;
                        if (value === 0) {
                            break;
                        }
                    }
                    if (ConfigManager.disableRimjobs && value === RAID_TYPE_RIMJOB_ID) {
                        value--;
                        if (value === 0) {
                            break;
                        }
                    }
                }
                break;
            case 'D':
                while (lovense.getToys()[toyNum].RAID_type_B === value || lovense.getToys()[toyNum].RAID_type_A ===
                value || lovense.getToys()[toyNum].RAID_type_C === value || lovense.getToys()[toyNum].RAID_type_E ===
                value) {
                    value--;
                    if (value === 0) {
                        break;
                    }
                    if (ConfigManager.disableFootjobs && value === RAID_TYPE_FOOTJOB_ID) {
                        value--;
                        if (value === 0) {
                            break;
                        }
                    }
                    if (ConfigManager.disableRimjobs && value === RAID_TYPE_RIMJOB_ID) {
                        value--;
                        if (value === 0) {
                            break;
                        }
                    }
                }
                break;
            case 'E':
                while (lovense.getToys()[toyNum].RAID_type_B === value || lovense.getToys()[toyNum].RAID_type_A ===
                value || lovense.getToys()[toyNum].RAID_type_D === value || lovense.getToys()[toyNum].RAID_type_C ===
                value) {
                    value--;
                    if (value === 0) {
                        break;
                    }
                    if (ConfigManager.disableFootjobs && value === RAID_TYPE_FOOTJOB_ID) {
                        value--;
                        if (value === 0) {
                            break;
                        }
                    }
                    if (ConfigManager.disableRimjobs && value === RAID_TYPE_RIMJOB_ID) {
                        value--;
                        if (value === 0) {
                            break;
                        }
                    }
                }
                break;
        }
    }
    this.setRAIDsexact(toyNum, value, letter);

    this.redrawItem(this.findSymbol(symbol));
    SoundManager.playCursor();
};

Window_Options.prototype.createTextBox = function () {
    this._textBox = new TextBox(RS.InputDialog.Params.szFieldId, RS.InputDialog.Params.szTextBoxId);
    this._textBox.setEvent(this.okTextBoxResult.bind(this), this.cancelTextBoxResult.bind(this));
    //this._textBox._okFunc = this.okTextBoxResult.bind(this);
    //this._textBox._cancelFunc = this.cancelTextBoxResult.bind(this);
    this._textBox.show();
    this._textBox.getFocus();
    //this._textBox.setTextHint();
};
Window_Options.prototype.okTextBoxResult = function () {
    var text = this._textBox.getText() || '';
    if (text.match(/^([\d]+)$/g)) {
        text = Number(RegExp.$1);
    }
    if (ConfigManager.lovenseInputingIP) {
        ConfigManager.lovenseIP = text;
    } else if (ConfigManager.lovenseInputingPort) {
        ConfigManager.lovensePort = text;
    }
    TouchInput.clear();
    Input.clear();
    this._textBox.terminate();
    this._textBox = null;
};
Window_Options.prototype.cancelTextBoxResult = function () {
    TouchInput.clear();
    Input.clear();
    this._textBox.terminate();
    this._textBox = null;
};

Window_Options_cursorDown = Window_Options.prototype.cursorDown;
Window_Options.prototype.cursorDown = function (wrap) {
    if (this._textBox) {
        return;
    } else {
        Window_Options_cursorDown.call(this, wrap);
    }
};
Window_Options_cursorUp = Window_Options.prototype.cursorUp;
Window_Options.prototype.cursorUp = function (wrap) {
    if (this._textBox) {
        return;
    } else {
        Window_Options_cursorUp.call(this, wrap);
    }
};
Window_Options_cursorRight = Window_Options.prototype.cursorRight;
Window_Options.prototype.cursorRight = function (wrap) {
    if (this._textBox) {
        return;
    } else {
        Window_Options_cursorRight.call(this, wrap);
    }
};
Window_Options_cursorLeft = Window_Options.prototype.cursorLeft;
Window_Options.prototype.cursorLeft = function (wrap) {
    if (this._textBox) {
        return;
    } else {
        Window_Options_cursorLeft.call(this, wrap);
    }
};
Window_Options_cursorPagedown = Window_Options.prototype.cursorPagedown;
Window_Options.prototype.cursorPagedown = function () {
    if (this._textBox) {
        return;
    } else {
        Window_Options_cursorPagedown.call(this);
    }
};
Window_Options_cursorPageup = Window_Options.prototype.cursorPageup;
Window_Options.prototype.cursorPageup = function () {
    if (this._textBox) {
        return;
    } else {
        Window_Options_cursorPageup.call(this);
    }
};
Window_Options_scrollDown = Window_Options.prototype.scrollDown;
Window_Options.prototype.scrollDown = function () {
    if (this._textBox) {
        return;
    } else {
        Window_Options_scrollDown.call(this);
    }
};
Window_Options_scrollUp = Window_Options.prototype.scrollUp;
Window_Options.prototype.scrollUp = function () {
    if (this._textBox) {
        return;
    } else {
        Window_Options_scrollUp.call(this);
    }
};
Window_Options_processWheel = Window_Options.prototype.processWheel;
Window_Options.prototype.processWheel = function () {
    if (this._textBox) {
        return;
    } else {
        Window_Options_processWheel.call(this);
    }
};

Window_Options_processOk = Window_Options.prototype.processOk;
Window_Options.prototype.processOk = function () {
    if (this._textBox) {
        this.okTextBoxResult();
    } else {
        Window_Options_processOk.call(this);
    }
};

Window_Options_processCancel = Window_Options.prototype.processCancel;
Window_Options.prototype.processCancel = function () {
    if (this._textBox) {
        this.cancelTextBoxResult();
    } else {
        Window_Options_processCancel.call(this);
    }
};

Window_Options.prototype.drawOptionsOnOff = function (index, onText, offText) {
    onText = onText || TextManager.RemYanflyOptionsOptionsOn;
    offText = offText || TextManager.RemYanflyOptionsOptionsOff;
    var rect = this.itemRectForText(index);
    var statusWidth = this.statusWidth();
    var halfStatusWidth = this.statusWidth() / 2;
    var titleWidth = rect.width - statusWidth;
    this.resetTextColor();
    var symbol = this.commandSymbol(index);
    var value = this.getConfigValue(symbol);
    this.changePaintOpacity(!value);
    this.drawText(offText, titleWidth, rect.y, halfStatusWidth, 'center');
    this.changePaintOpacity(value);
    this.drawText(onText, titleWidth + halfStatusWidth, rect.y, halfStatusWidth, 'center');
};
