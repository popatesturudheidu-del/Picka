var Remtairy = Remtairy || {};
Remtairy.Modding = Remtairy.Modding || {};

//=============================================================================
 /*:
 * @plugindesc Modding
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================

/*
	A collection of inheritable functions used to help modders mod Karryn's Prison
	As good practice, inherit instead of overriding for compatibility with other mods
*/

// RemtairyLayer.js

// For modders who are adding completely new custom tachie layers
// Following two functions are called at the start of getCustomTachieLayerLoadout

Game_Actor.prototype.modding_isCustomTachieLayerPose = function(pose) {
	return false;
};

Game_Actor.prototype.modding_getLayerLoadout = function(pose) {
	let layerArray = [];
	
	return layerArray;
};

// Saba_Tachie.js

// This is called after getCustomTachieLayerLoadout and the return value of this function
// is concat with the layer array from getCustomTachieLayerLoadout
// Use this for modding simple new layers on top of everything
Game_Actor.prototype.modding_getCustomTachieLayerLoadout = function() {
	let layerArray = [];
	
	return layerArray;
};

// Called twice during preloadTachie
// First time checks the length of this array
// Second time calls doPreloadTachie onto each string in this array
// Sample usage: fileArray.push(this.myTachieModFile());
Game_Actor.prototype.modding_preloadTachieFileArray = function() {
	let fileArray = [];
	
	return fileArray;
};

// Next two functions are called in drawTachieActor

// This gets called when checking layerType for modded layers, 
// return true ONLY for your modded layerTypes
// To help keep compatibility with other mods, the best practice here would be to 
// inherit the function instead of overwriting it
Game_Actor.prototype.modding_layerType = function(layerType) {
	return false;
};

// This is called in the first parameter of drawTachieFile
// layerType gets passed into here
// Check it and return your modded filename 
// To help keep compatibility with other mods, the best practice here would be to 
// inherit the function instead of overwriting it
Game_Actor.prototype.modding_tachieFile = function(layerType) {
	return false;
};

// Called in isWearingValidNightModeClothes
// Used for modded clothes with their own clothing ID
Game_Actor.prototype.modding_isWearingValidNightModeClothes = function() {
	return false;
};

// Called in calculateNightModeScore
// Used for modded clothes with their own clothing ID
Game_Actor.prototype.modding_calculateNightModeScore = function() {
	return 0;
};


Game_Actor.prototype.modding_advanceNextDay = function() {
	//Specifically used to fix an issue with old mods using this switch and causing issues to the game
	if($gameSwitches.value(SWITCH_EDICT_TRAINER_OUTFIT) && !Karryn.hasEdict(EDICT_GYM_TRAINER_OUTFIT)) {
		$gameSwitches.setValue(SWITCH_EDICT_TRAINER_OUTFIT, false);
	}	
};

ConfigManager.modding_enableSmootherCutinLoading = function() {
	return false;
};


Object.defineProperty(ConfigManager, 'schModEnabled', {
    get: function() {
        return OrangeGreenworks.ugcGetItemInstallInfo('2829701779');
    },
    configurable: true
});

Object.defineProperty(ConfigManager, 'schModFolder', {
    get: function() {
		return false;
        if(ConfigManager.schModEnabled) {
			return OrangeGreenworks.ugcGetItemInstallInfo('2829701779').folder;
		}
		else return false;
    },
    configurable: true
});

DataManager.loadRemLocFile_schMod = function(name, src) {
	return;
    var xhr = new XMLHttpRequest();
    var url = '' + ConfigManager.schModFolder + '/www/loc/' + src;
    xhr.open('GET', url);
    xhr.overrideMimeType('application/json');
    xhr.onload = function() {
        if (xhr.status < 400) {
            window[name] = JSON.parse(xhr.responseText);
            DataManager.onLoad(window[name]);
        }
    };
    xhr.onerror = this._mapLoader || function() {
        DataManager._errorUrl = DataManager._errorUrl || url;
    };
    window[name] = null;
    xhr.send();
};