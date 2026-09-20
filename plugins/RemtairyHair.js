var Remtairy = Remtairy || {};
Remtairy.Hair = Remtairy.Hair || {};

//=============================================================================
 /*:
 * @plugindesc Hair
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================

var DLC_HAIR = false;

const HAIR_TYPE_NORMAL_ID = 1;
var HAIR_TYPE_NORMAL_NAME = '1';

const HAIR_COLOR_PURPLE_ID = 1;
const HAIR_COLOR_BLOND_ID = 2;
const HAIR_COLOR_BLACK_ID = 3;
//Hair color modders are recommended to change the value of HAIR_COLOR_PURPLE_NAME in their own plugin to their own filename
var HAIR_COLOR_PURPLE_NAME = 'purple'; 
var HAIR_COLOR_BLOND_NAME = 'blond';
var HAIR_COLOR_BLACK_NAME = 'black';

const PUBIC_STYLE_NORMAL_ID = 1;
const PUBIC_STYLE_TRIMMED_ID = 2;
const PUBIC_STYLE_BUSHY_ID = 3;
var PUBIC_STYLE_NORMAL_NAME = 'normal';
var PUBIC_STYLE_TRIMMED_NAME = 'trimmed';
var PUBIC_STYLE_BUSHY_NAME = 'bushy';

const HAT_TYPE_WARDEN_ID = 1;
const HAT_TYPE_WEDDING_ID = 2;
var HAT_TYPE_WARDEN_NAME = '1';
var HAT_TYPE_WEDDING_NAME = 'wedding';

const MALE_STRAY_PUBES_OPTION_NORMAL_ID = 1;
const MALE_STRAY_PUBES_OPTION_LOW_ID = 2;
const MALE_STRAY_PUBES_OPTION_MAX_ID = 3;

const MALE_BASE_STRAY_ATTACH_CHANCE = 45;

Game_Actor.prototype.setHairType = function(id) { this._hairType = id; }
Game_Actor.prototype.setHatType = function(id) { this._hatType = id; }

Game_Actor.prototype.getHairColorName = function() {
	let name = HAIR_COLOR_PURPLE_NAME;
	
	if(!DLC_HAIR) return name;
	
	switch(ConfigManager.KarrynHairColor) {
		case HAIR_COLOR_PURPLE_ID:
			name = HAIR_COLOR_PURPLE_NAME;
		break;
		case HAIR_COLOR_BLOND_ID:
			name = HAIR_COLOR_BLOND_NAME;
		break;
		case HAIR_COLOR_BLACK_ID:
			name = HAIR_COLOR_BLACK_NAME;
		break;
	}
	return name;
};

Game_Actor.prototype.getPubicColorName = function() {
	let name = this.getHairColorName();
	
	if(!DLC_HAIR || !ConfigManager.KarrynPubicColor) return name;
	
	switch(ConfigManager.KarrynPubicColor) {
		case HAIR_COLOR_PURPLE_ID:
			name = HAIR_COLOR_PURPLE_NAME;
		break;
		case HAIR_COLOR_BLOND_ID:
			name = HAIR_COLOR_BLOND_NAME;
		break;
		case HAIR_COLOR_BLACK_ID:
			name = HAIR_COLOR_BLACK_NAME;
		break;
	}
	return name;
};


Game_Actor.prototype.getPubicSizeName = function() {
	let name = PUBIC_STYLE_NORMAL_NAME;
	
	if(!DLC_HAIR) return name;
	
	switch(ConfigManager.KarrynPubicStyle) {
		case PUBIC_STYLE_NORMAL_ID:
			name = PUBIC_STYLE_NORMAL_NAME;
		break;
		case PUBIC_STYLE_TRIMMED_ID:
			name = PUBIC_STYLE_TRIMMED_NAME;
		break;
		case PUBIC_STYLE_BUSHY_ID:
			name = PUBIC_STYLE_BUSHY_NAME;
		break;
	}
	return name;
};

Game_Actor.prototype.getHairTypeName = function() {
	let name = HAIR_TYPE_NORMAL_NAME;
	
	switch(this._hairType) {
		case HAIR_TYPE_NORMAL_ID:
			name = HAIR_TYPE_NORMAL_NAME;
		break;
	}
	
	return name;
};

Game_Actor.prototype.getHatTypeName = function() {
	let name = HAT_TYPE_WARDEN_NAME;
	
	switch(this._hatType) {
		case HAT_TYPE_WARDEN_ID:
			name = HAT_TYPE_WARDEN_NAME;
		break;
		case HAT_TYPE_WEDDING_ID:
			name = HAT_TYPE_WEDDING_NAME;
		break;
	}
	
	return name;
};


Game_Actor.prototype.getTachiePubicId = function() {
	if(!ConfigManager.displayPubic) return REM_TACHIE_NULL;
	if(!this._hasTachiePubic) return REM_TACHIE_NULL;
	
	let id = this.getPubicColorName() + '_';
	if(this._hasTachiePubicExtension) id += '' + this._tachiePubicExtension;
	id += this.getPubicSizeName();
	return id;
};

Game_Actor.prototype.getTachieHairId = function() {
	if(this.isInNoTachieHairPose()) return REM_TACHIE_NULL;
	
	let isChatFace = this.isChatface;
	let isKarrynChatface = this.isChatface_Karryn;
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let id = '';
	
	if(isChatFace) {
		if(isKarrynChatface) {
			id = actor.getHairColorName() + '_';
			//if(actor._hasTachieHairExtension) id += '' + actor._tachieHairExtension;
			id += actor.getHairTypeName();
		}
		else {
			return REM_TACHIE_NULL;
		}
	}
	else {
		id = this.getHairColorName() + '_';
		if(this._hasTachieHairExtension) id += '' + this._tachieHairExtension;
		id += this.getHairTypeName();
	}
	
	return id;
};

Game_Actor.prototype.getTachieHatId = function() {
	let isChatFace = this.isChatface;
	let isKarrynChatface = this.isChatface_Karryn;
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let id = '';
	
	if(isKarrynChatface) {
		if(!actor._hasTachieHat || this.tachieBodyExtension === 'secretary_') return REM_TACHIE_NULL;
		else if(this.tachieBodyExtension === 'wedding_') return HAT_TYPE_WEDDING_NAME;
	}
	else if(this.poseName === CHAT_FOLDER_YASU) {
		if(!this.tachieHat) return REM_TACHIE_NULL;
		else return this.tachieHat;
	}
	else {
		if(!this._hasTachieHat) return REM_TACHIE_NULL;
	}
	
	if(isKarrynChatface) {
		id = '';
		//if(actor._hasTachieHatExtension) id += '' + actor._tachieHatExtension;
		id += actor.getHatTypeName();
	}
	else {
		id = '';
		if(this._hasTachieHatExtension) id += '' + this._tachieHatExtension;
		id += this.getHatTypeName();
	}
	return id;
};

Game_Actor.prototype.getTachieStrayFaceId = function(getCountOnly) {
	let isKarrynChatface = this.isChatface_Karryn;
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let maxId = this._maxTachieStrayFaceId;
	if(isKarrynChatface) maxId = actor._maxTachieStrayFaceId;
	if(maxId == 0) return false;
	let stray = this._strayFace;
	if(isKarrynChatface) stray = actor._strayFace;
	let id = 0;
	if(stray >= 15) {
		id = 5;
	}
	else if(stray >= 10) {
		id = 4;
	}
	else if(stray >= 6) {
		id = 3;
	}
	else if(stray >= 3) {
		id = 2;
	}
	else if(stray >= 1) {
		id = 1;
	}
	else return 0;
	
	id = Math.min(id, maxId);
	if(getCountOnly) return id;
	if(this._hasTachieStrayFaceExtension) id = '' + this._tachieStrayFaceExtension + id;
	return id;
}; 
Game_Actor.prototype.getTachieStrayBoobsId = function(getCountOnly) {
	let isKarrynChatface = this.isChatface_Karryn;
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let maxId = this._maxTachieStrayBoobsId;
	if(isKarrynChatface) maxId = actor._maxTachieStrayBoobsId;
	if(maxId == 0) return false;
	let stray = this._strayBoobs;
	if(isKarrynChatface) stray = actor._strayBoobs;
	let id = 0;
	if(stray >= 15) {
		id = 5;
	}
	else if(stray >= 10) {
		id = 4;
	}
	else if(stray >= 6) {
		id = 3;
	}
	else if(stray >= 3) {
		id = 2;
	}
	else if(stray >= 1) {
		id = 1;
	}
	else return 0;
	
	id = Math.min(id, maxId);
	if(getCountOnly) return id;
	
	if(this._hasTachieStrayBoobsPCupExtensionBasedOnClothingStage && this.boobsSizeIsPCup()) {
		let clothingStage = this.clothingStage;
		if(!this.isWearingGlovesAndHat() || this.clothingStage > 4) {
			clothingStage = 4;
		}
		id = '' + clothingStage + '_' + id;
	}
	
	if(this._hasTachieStrayBoobsExtension) id = '' + this._tachieStrayBoobsExtension + id;
	return id;
}; 
Game_Actor.prototype.getTachieStrayRightBoobId = function(getCountOnly) {
	let maxId = this._maxTachieStrayRightBoobId;
	if(maxId == 0) return false;
	let stray = this._strayBoobs;
	let id = 0;
	if(stray >= 15) {
		id = 5;
	}
	else if(stray >= 10) {
		id = 4;
	}
	else if(stray >= 6) {
		id = 3;
	}
	else if(stray >= 3) {
		id = 2;
	}
	else if(stray >= 1) {
		id = 1;
	}
	else return 0;
	
	id = Math.min(id, maxId);
	if(getCountOnly) return id;
	if(this._hasTachieStrayRightBoobExtension) id = '' + this._tachieStrayRightBoobExtension + id;
	return id;
}; 
Game_Actor.prototype.getTachieStrayLeftBoobId = function(getCountOnly) {
	let maxId = this._maxTachieStrayLeftBoobId;
	if(maxId == 0) return false;
	let stray = this._strayBoobs;
	let id = 0;
	if(stray >= 15) {
		id = 5;
	}
	else if(stray >= 10) {
		id = 4;
	}
	else if(stray >= 6) {
		id = 3;
	}
	else if(stray >= 3) {
		id = 2;
	}
	else if(stray >= 1) {
		id = 1;
	}
	else return 0;
	
	id = Math.min(id, maxId);
	if(getCountOnly) return id;
	if(this._hasTachieStrayLeftBoobExtension) id = '' + this._tachieStrayLeftBoobExtension + id;
	return id;
}; 
Game_Actor.prototype.getTachieStrayGroinId = function(getCountOnly) {
	let isKarrynChatface = this.isChatface_Karryn;
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let maxId = this._maxTachieStrayGroinId;
	if(isKarrynChatface) maxId = actor._maxTachieStrayGroinId;
	if(maxId == 0) return false;
	let stray = this._strayGroin;
	if(isKarrynChatface) stray = actor._strayGroin;
	let id = 0;
	if(stray >= 15) {
		id = 5;
	}
	else if(stray >= 10) {
		id = 4;
	}
	else if(stray >= 6) {
		id = 3;
	}
	else if(stray >= 3) {
		id = 2;
	}
	else if(stray >= 1) {
		id = 1;
	}
	else return 0;
	
	id = Math.min(id, maxId);
	if(getCountOnly) return id;
	if(this._hasTachieStrayGroinExtension) id = '' + this._tachieStrayGroinExtension + id;
	return id;
}; 
Game_Actor.prototype.getTachieStrayButtId = function(getCountOnly) {
	let isKarrynChatface = this.isChatface_Karryn;
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let maxId = this._maxTachieStrayButtId;
	if(isKarrynChatface) maxId = actor._maxTachieStrayButtId;
	if(maxId == 0) return false;
	let stray = this._strayButt;
	if(isKarrynChatface) stray = actor._strayButt;
	let id = 0;
	if(stray >= 15) {
		id = 5;
	}
	else if(stray >= 10) {
		id = 4;
	}
	else if(stray >= 6) {
		id = 3;
	}
	else if(stray >= 3) {
		id = 2;
	}
	else if(stray >= 1) {
		id = 1;
	}
	else return 0;
	
	id = Math.min(id, maxId);
	if(getCountOnly) return id;
	if(this._hasTachieStrayButtExtension) id = '' + this._tachieStrayButtExtension + id;
	return id;
}; 

Game_Actor.prototype.setMaxTachieStrayFaceId = function(lowValue, normalValue, maxValue) { 
	let value = 0;
	if(DLC_HAIR && ConfigManager.displayStrayPubes) {
		switch(ConfigManager.MaleStrayPubesAmount) {
			case MALE_STRAY_PUBES_OPTION_NORMAL_ID:
				value = normalValue;
				break;
			case MALE_STRAY_PUBES_OPTION_LOW_ID:
				value = lowValue;
				break;
			case MALE_STRAY_PUBES_OPTION_MAX_ID:
				value = maxValue;
				break;
		}
	}
	this._maxTachieStrayFaceId = value; 
	
}; 
Game_Actor.prototype.setMaxTachieStrayBoobsId = function(lowValue, normalValue, maxValue) { 
	let value = 0;
	if(DLC_HAIR && ConfigManager.displayStrayPubes) {
		switch(ConfigManager.MaleStrayPubesAmount) {
			case MALE_STRAY_PUBES_OPTION_NORMAL_ID:
				value = normalValue;
				break;
			case MALE_STRAY_PUBES_OPTION_LOW_ID:
				value = lowValue;
				break;
			case MALE_STRAY_PUBES_OPTION_MAX_ID:
				value = maxValue;
				break;
			default:
				value = normalValue;
				break;
		}
	}
	this._maxTachieStrayBoobsId = value; 
}; 
Game_Actor.prototype.setMaxTachieStrayRightBoobId = function(lowValue, normalValue, maxValue) { 
	let value = 0;
	if(DLC_HAIR && ConfigManager.displayStrayPubes) {
		switch(ConfigManager.MaleStrayPubesAmount) {
			case MALE_STRAY_PUBES_OPTION_NORMAL_ID:
				value = normalValue;
				break;
			case MALE_STRAY_PUBES_OPTION_LOW_ID:
				value = lowValue;
				break;
			case MALE_STRAY_PUBES_OPTION_MAX_ID:
				value = maxValue;
				break;
			default:
				value = normalValue;
				break;
		}
	}
	this._maxTachieStrayRightBoobId = value; 
}; 
Game_Actor.prototype.setMaxTachieStrayLeftBoobId = function(lowValue, normalValue, maxValue) { 
	let value = 0;
	if(DLC_HAIR && ConfigManager.displayStrayPubes) {
		switch(ConfigManager.MaleStrayPubesAmount) {
			case MALE_STRAY_PUBES_OPTION_NORMAL_ID:
				value = normalValue;
				break;
			case MALE_STRAY_PUBES_OPTION_LOW_ID:
				value = lowValue;
				break;
			case MALE_STRAY_PUBES_OPTION_MAX_ID:
				value = maxValue;
				break;
			default:
				value = normalValue;
				break;
		}
	}
	this._maxTachieStrayLeftBoobId = value; 
}; 
Game_Actor.prototype.setMaxTachieStrayGroinId = function(lowValue, normalValue, maxValue) { 
	let value = 0;
	if(DLC_HAIR && ConfigManager.displayStrayPubes) {
		switch(ConfigManager.MaleStrayPubesAmount) {
			case MALE_STRAY_PUBES_OPTION_NORMAL_ID:
				value = normalValue;
				break;
			case MALE_STRAY_PUBES_OPTION_LOW_ID:
				value = lowValue;
				break;
			case MALE_STRAY_PUBES_OPTION_MAX_ID:
				value = maxValue;
				break;
			default:
				value = normalValue;
				break;
		}
	}
	this._maxTachieStrayGroinId = value; 
}; 
Game_Actor.prototype.setMaxTachieStrayButtId = function(lowValue, normalValue, maxValue) { 
	let value = 0;
	if(DLC_HAIR && ConfigManager.displayStrayPubes) {
		switch(ConfigManager.MaleStrayPubesAmount) {
			case MALE_STRAY_PUBES_OPTION_NORMAL_ID:
				value = normalValue;
				break;
			case MALE_STRAY_PUBES_OPTION_LOW_ID:
				value = lowValue;
				break;
			case MALE_STRAY_PUBES_OPTION_MAX_ID:
				value = maxValue;
				break;
		}
	}
	this._maxTachieStrayButtId = value; 
}; 

Game_Actor.prototype.setTachieStrayFaceExtension = function(value) { 
	this._tachieStrayFaceExtension = value; 
	this._hasTachieStrayFaceExtension = true;
}; 
Game_Actor.prototype.resetTachieStrayFaceExtension = function(value) { this._hasTachieStrayFaceExtension = false; }; 

Game_Actor.prototype.setTachieStrayBoobsExtension = function(value) { 
	this._tachieStrayBoobsExtension = value; 
	this._hasTachieStrayBoobsExtension = true;
}; 
Game_Actor.prototype.resetTachieStrayBoobsExtension = function(value) { this._hasTachieStrayBoobsExtension = false; }; 

Game_Actor.prototype.setTachieStrayRightBoobExtension = function(value) { 
	this._tachieStrayRightBoobExtension = value; 
	this._hasTachieStrayRightBoobExtension = true;
}; 
Game_Actor.prototype.resetTachieStrayRightBoobExtension = function(value) { this._hasTachieStrayRightBoobExtension = false; }; 

Game_Actor.prototype.setTachieStrayLeftBoobExtension = function(value) { 
	this._tachieStrayLeftBoobExtension = value; 
	this._hasTachieStrayLeftBoobExtension = true;
}; 
Game_Actor.prototype.resetTachieStrayLeftBoobExtension = function(value) { this._hasTachieStrayLeftBoobExtension = false; };

Game_Actor.prototype.setTachieStrayGroinExtension = function(value) { 
	this._tachieStrayGroinExtension = value; 
	this._hasTachieStrayGroinExtension = true;
}; 
Game_Actor.prototype.resetTachieStrayGroinExtension = function(value) { this._hasTachieStrayGroinExtension = false; }; 

Game_Actor.prototype.setTachieStrayButtExtension = function(value) { 
	this._tachieStrayButtExtension = value; 
	this._hasTachieStrayButtExtension = true;
}; 
Game_Actor.prototype.resetTachieStrayButtExtension = function(value) { this._hasTachieStrayButtExtension = false; };

Game_Actor.prototype.setTachieHatExtension = function(value) { 
	this._tachieHatExtension = value; 
	this._hasTachieHatExtension = true;
}; 
Game_Actor.prototype.resetTachieHatExtension = function(value) { this._hasTachieHatExtension = false; }; 

Game_Actor.prototype.setTachieHairExtension = function(value) { 
	this._tachieHairExtension = value; 
	this._hasTachieHairExtension = true;
}; 
Game_Actor.prototype.resetTachieHairExtension = function(value) { this._hasTachieHairExtension = false; }; 

Game_Actor.prototype.setTachiePubicExtension = function(value) { 
	this._tachiePubicExtension = value; 
	this._hasTachiePubicExtension = true;
}; 
Game_Actor.prototype.resetTachiePubicExtension = function(value) { this._hasTachiePubicExtension = false; }; 


//P Cup Specific

Game_Actor.prototype.setTachieStrayBoobsHasPCupExtensionBasedOnClothingStage = function(value) { 
	this._hasTachieStrayBoobsPCupExtensionBasedOnClothingStage = value;
}; 
Game_Actor.prototype.resetTachieStrayBoobsHasPCupExtensionBasedOnClothingStage = function(value) { this.setTachieStrayBoobsHasPCupExtensionBasedOnClothingStage(false); }; 


//Setup Stray
Game_Actor.prototype.setupStray = function() {
	this._strayFace = 0;
	this._strayBoobs = 0;
	this._strayGroin = 0;
	this._strayButt = 0;
	this.setCacheChanged();
};

//Clean Up Stray

Game_Actor.prototype.cleanUpStrayBeforeSideJob = function() {
	if(!this.hasPassive(PASSIVE_STRAY_PUBE_COUNT_THREE_ID)) {
		this.setupStray();
	}
};
Game_Actor.prototype.cleanUpStrayBeforeCouchMasturbation = function() {
	if(!this.hasPassive(PASSIVE_STRAY_PUBE_COUNT_TWO_ID)) {
		this.setupStray();
	}
};

Game_Actor.prototype.cleanUpStray = function() {
	if(this.hasPassive(PASSIVE_STRAY_PUBE_COUNT_TWO_ID)) {
		if(this.hasPassive(PASSIVE_STRAY_PUBE_COUNT_THREE_ID)) {
			this._strayFace = this._strayFace * 0.7;
			this._strayBoobs = this._strayBoobs * 0.7;
			this._strayGroin = this._strayGroin * 0.7;
			this._strayButt = this._strayButt * 0.7;
		}
		else {
			this._strayFace = this._strayFace * 0.4;
			this._strayBoobs = this._strayBoobs * 0.4;
			this._strayGroin = this._strayGroin * 0.4;
			this._strayButt = this._strayButt * 0.4;
		}
	}
	else {
		this.setupStray();
	}
};

Game_Actor.prototype.decayStrayFromPoseChange = function() {
	this._strayFace = this._strayFace * 0.95;
	this._strayBoobs = this._strayBoobs * 0.95;
	this._strayGroin = this._strayGroin * 0.95;
	this._strayButt = this._strayButt * 0.95;
};

// Attach Stray

Game_Actor.prototype.postDamage_basicSex_attachStray = function(target, sexAct) {
	let strayChance = target.getBaseStrayAttachChance();
	let strayArea = false;
	
	if(strayChance === 0) return;
	
	switch(sexAct) {
		case SEXACT_BLOWJOB:
			strayArea = MOUTH_ID;
		break;
		case SEXACT_TITTYFUCK:
			strayArea = BOOBS_ID;
			strayChance *= 2;
		break;
		case SEXACT_PUSSYSEX:
			strayArea = PUSSY_ID;
		break;
		case SEXACT_ANALSEX:
			strayArea = ANAL_ID;
		break;
		case SEXACT_RIMJOB:
			strayArea = MOUTH_ID;
			strayChance *= 2.5;
		break;
		case SEXACT_HANDJOB:
			strayArea = BOOBS_ID;
			strayChance *= 0.25;
			if(this.isInDefeatedLevel1Pose())
				strayChance *= 2.5;
		break;
	}
	
	let previousId = 100;
	
	if(strayArea) {
		switch(strayArea) {
			case MOUTH_ID:
				previousId = this.getTachieStrayFaceId(true);
				this._strayFace += (Math.randomInt(strayChance) * 0.01);
				if(this.getTachieStrayFaceId(true) > previousId) {
					this.addToActorStrayFaceRecord();
				}
			break;
			case BOOBS_ID:
				previousId = this.getTachieStrayBoobsId(true);
				if(this._maxTachieStrayBoobsId == 0) {
					if(this._maxTachieStrayRightBoobId >= this._maxTachieStrayLeftBoobId)
						previousId = this.getTachieStrayRightBoobId(true);
					else
						previousId = this.getTachieStrayLeftBoobId(true);
				}
				this._strayBoobs += (Math.randomInt(strayChance) * 0.01);
				if(this._maxTachieStrayBoobsId > 0) {
					if(this.getTachieStrayBoobsId(true) > previousId) {
						this.addToActorStrayBoobsRecord();
					}
				}
				else {
					if(this._maxTachieStrayRightBoobId >= this._maxTachieStrayLeftBoobId) {
						if(this.getTachieStrayRightBoobId(true) > previousId) {
							this.addToActorStrayBoobsRecord();
						}
					}
					else {
						if(this.getTachieStrayLeftBoobId(true) > previousId) {
							this.addToActorStrayBoobsRecord();
						}
					}
				}
			break;
			case PUSSY_ID:
				previousId = this.getTachieStrayGroinId(true);
				this._strayGroin += (Math.randomInt(strayChance) * 0.01);
				if(this.getTachieStrayGroinId(true) > previousId) {
					this.addToActorStrayGroinRecord();
				}
			break;
			case ANAL_ID:
				previousId = this.getTachieStrayButtId(true);
				this._strayButt += (Math.randomInt(strayChance) * 0.01);
				if(this.getTachieStrayButtId(true) > previousId) {
					this.addToActorStrayButtRecord();
				}
			break;
		}
	}
};

Game_Actor.prototype.postDamage_ejaculation_attachStray = function(target, area) {
	let strayChance = target.getBaseStrayAttachChance();
	let strayArea = false;
	
	if(strayChance === 0) return;
	
	switch(area) {
		case CUM_SWALLOW_MOUTH:
			strayArea = MOUTH_ID;
			strayChance *= 3;
		break;
		case CUM_CREAMPIE_PUSSY:
			strayArea = PUSSY_ID;
			strayChance *= 3;
		break;
		case CUM_CREAMPIE_ANAL:
			strayArea = ANAL_ID;
			strayChance *= 3;
		break;
	}
	
	let previousId = 100;
	
	if(strayArea) {
		switch(strayArea) {
			case MOUTH_ID:
				previousId = this.getTachieStrayFaceId(true);
				this._strayFace += (Math.randomInt(strayChance) * 0.01);
				if(this.getTachieStrayFaceId(true) > previousId) {
					this.addToActorStrayFaceRecord();
				}
			break;
			case BOOBS_ID:
				previousId = this.getTachieStrayBoobsId(true);
				if(this._maxTachieStrayBoobsId == 0) {
					if(this._maxTachieStrayRightBoobId >= this._maxTachieStrayLeftBoobId)
						previousId = this.getTachieStrayRightBoobId(true);
					else
						previousId = this.getTachieStrayLeftBoobId(true);
				}
				this._strayBoobs += (Math.randomInt(strayChance) * 0.01);
				if(this._maxTachieStrayBoobsId > 0) {
					if(this.getTachieStrayBoobsId(true) > previousId) {
						this.addToActorStrayBoobsRecord();
					}
				}
				else {
					if(this._maxTachieStrayRightBoobId >= this._maxTachieStrayLeftBoobId) {
						if(this.getTachieStrayRightBoobId(true) > previousId) {
							this.addToActorStrayBoobsRecord();
						}
					}
					else {
						if(this.getTachieStrayLeftBoobId(true) > previousId) {
							this.addToActorStrayBoobsRecord();
						}
					}
				}
			break;
			case PUSSY_ID:
				previousId = this.getTachieStrayGroinId(true);
				this._strayGroin += (Math.randomInt(strayChance) * 0.01);
				if(this.getTachieStrayGroinId(true) > previousId) {
					this.addToActorStrayGroinRecord();
				}
			break;
			case ANAL_ID:
				previousId = this.getTachieStrayButtId(true);
				this._strayButt += (Math.randomInt(strayChance) * 0.01);
				if(this.getTachieStrayButtId(true) > previousId) {
					this.addToActorStrayButtRecord();
				}
			break;
		}
	}
	
	if(this.getStrayTotalCount() > this._playthroughRecordTotalStrayOnBodyCount) {
		this._playthroughRecordTotalStrayOnBodyCount = this.getStrayTotalCount();
	}
};

Game_Actor.prototype.getStrayTotalCount = function() {
	let total = this.getTachieStrayFaceId(true) + this.getTachieStrayBoobsId(true) + this.getTachieStrayButtId(true) + this.getTachieStrayGroinId(true);
	total += Math.round((this.getTachieStrayRightBoobId(true) + this.getTachieStrayLeftBoobId(true)) * 0.5)
	return total;
};

Game_Actor.prototype.paramStrayDexBonus = function() {
	let count = this.getStrayTotalCount();
	if(count <= 3) return count;
	else return 3 + Math.round(((count - 3) * 0.34));
};
Game_Actor.prototype.paramStrayEndBonus = function() {
	let count = this.getStrayTotalCount();
	if(count <= 5) return count;
	else return 5 + Math.round(((count - 5) * 0.5));
};
Game_Actor.prototype.inBattleCharmStrayBonus = function() {
	let count = this.getStrayTotalCount();
	if(count <= 5) return -1 * count;
	else return -1 * (5 + Math.round(((count - 5) * 1.5)));
};

Game_Enemy.prototype.getBaseStrayAttachChance = function() {
	if(!DLC_HAIR || !ConfigManager.displayStrayPubes) return 0;
	
	let chance = MALE_BASE_STRAY_ATTACH_CHANCE;
	
	if(this.isHomelessType)
		chance *= 2.5;
	else if(this.isYetiType)
		chance *= 2;
	else if(this.isNerdType)
		chance *= 1.5;
	else if(this.isRogueType)
		chance *= 1.3;
	else if(this.isLizardmanType)
		chance *= 1.2;
	else if(this.isGoblinType || this.isPrisonerType)
		chance *= 0.9;
	else if(this.isWerewolfType)
		chance *= 0.8;
	else if(this.isOrcType)
		chance *= 0.7;
	else if(this.isSlimeType)
		chance *= 0;
	
	if(this.hasBigPrefix() || this.hasBadPrefix())
		chance *= 1.5;
	else if(this.hasDrunkPrefix() || this.hasHornyPrefix())
		chance *= 1.3;
	else if(this.hasHungryPrefix() || this.hasStarvingPrefix())
		chance *= 0.7;
	else if(this.hasMetalPrefix())
		chance *= 0;
	
	switch(ConfigManager.MaleStrayPubesAmount) {
		case MALE_STRAY_PUBES_OPTION_LOW_ID:
			chance *= 0.75;
			break;
		case MALE_STRAY_PUBES_OPTION_MAX_ID:
			chance *= 2.5;
			break;
	}
	
	if(Karryn.hasThisTitle(TITLE_ID_DIRTY_DICK_HAIR_MAGNET)) {
		if(Karryn.isUsingThisTitle(TITLE_ID_DIRTY_DICK_HAIR_MAGNET))
			chance *= 2.5;
		else
			chance *= 1.33;
	}
	
	return chance;
};



//ConfigManager

ConfigManager.checkHairDLCOptions = function() {
	if(!DLC_HAIR) {
		ConfigManager.KarrynHairColor = HAIR_COLOR_PURPLE_ID;
		ConfigManager.KarrynPubicStyle = PUBIC_STYLE_NORMAL_ID;
		ConfigManager.MaleStrayPubesAmount = 1;
	}
};