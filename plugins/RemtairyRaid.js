var Remtairy = Remtairy || {};
Remtairy.Raid = Remtairy.Raid || {};

//=============================================================================
 /*:
 * @plugindesc Rem's Advanced Integrated Disco
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================

const RAID_TYPE_NONE_ID = 0;
const RAID_TYPE_MOUTH_ID = 1;
const RAID_TYPE_BOOBS_ID = 2;
const RAID_TYPE_CLIT_ID = 3;
const RAID_TYPE_PUSSY_ID = 4;
const RAID_TYPE_ANAL_ID = 5;
const RAID_TYPE_EXHIBITIONISM_ID = 6;
const RAID_TYPE_MASOCHISM_ID = 7;
const RAID_TYPE_SADISM_ID = 8;
const RAID_TYPE_RIMJOB_ID = 9;
const RAID_TYPE_FOOTJOB_ID = 10;
const RAID_TYPE_HANDS_ID = 11;

const RAID_TYPE_HIGHEST_ID = 11;

const RAIDING_CLIT_TOY_ID = 1;
const RAIDING_CUNNILINGUS_ID = 2;
const RAIDING_PUSSY_TOY_ID = 3;
const RAIDING_PUSSY_SEX_ID = 4;
const RAIDING_ANAL_TOY_ID = 5;
const RAIDING_ANAL_SEX_ID = 6;
const RAIDING_TITTY_FUCK_ID = 7;
const RAIDING_BLOWJOB_ID = 8;
const RAIDING_FOOTJOB_ID = 9;
const RAIDING_RIMJOB_ID = 10;
const RAIDING_RIGHT_HANDJOB_ID = 11;
const RAIDING_LEFT_HANDJOB_ID = 12;
const RAIDING_SUCK_FINGER_MAS_ID = 30;
const RAIDING_KISS_MAS_ID = 31;
const RAIDING_BOOBS_PET_MAS_ID = 32;
const RAIDING_NIPPLES_PET_MAS_ID = 33;
const RAIDING_CLIT_PET_MAS_ID = 34;
const RAIDING_PUSSY_PET_MAS_ID = 35;
const RAIDING_ANAL_PET_MAS_ID = 36;
const RAIDING_SUCK_FINGER_STRIPPER_ID = 40;
const RAIDING_BOOBS_PET_STRIPPER_ID = 41;
const RAIDING_PUSSY_PET_STRIPPER_ID = 42;
const RAIDING_BUTT_PET_STRIPPER_ID = 43;
const RAIDING_SIGHT_NIGHTMODE_ID = 45;
const RAIDING_AROUSAL_ID = 50;
const RAIDING_ORGASM_ID = 69;
const RAIDING_ORGASM_AFTER_ID = 70;
const RAIDING_OTHER_ID = 99;


ConfigManager.setupRaidToys = function() {
	let toys = lovense.getToys();
	if(!toys) return false;
	
	let toyArrayDildo = [];
	let toyArrayNipple = [];
	let toyArrayClit = [];
	let toyArrayMale = [];
	let toyArrayAnal = [];
	
	for(let i = 0; i < toys.length; ++i) {
		let toy = toys[i];
		toy.RAID_arousal = false;
		toy.RAID_orgasm = false;
		toy.RAID_party = false;
		toy.RAID_type_mouth = false;
		toy.RAID_type_boobs = false;
		toy.RAID_type_clit = false;
		toy.RAID_type_pussy = false;
		toy.RAID_type_anal = false;
		toy.RAID_type_rimjob = false;
		toy.RAID_type_footjob = false;
		toy.RAID_type_hands = false;
		toy.RAID_type_exhibitionism = false;
		toy.RAID_type_masochism = false;
		toy.RAID_type_sadism = false;
		toy.being_RAIDed = false;
		toy.RAID_type_A = 0;
		toy.RAID_type_B = 0;
		toy.RAID_type_C = 0;
		toy.RAID_type_D = 0;
		toy.RAID_type_E = 0;
		toy.RAID_time = 0;
		toy.RAID_intensity = 0;
		toy.RAID_timeUntilEnd = 0;
		
		switch(toy.name) {
			case 'gravity':
			case 'xmachine':
			case 'hyphy':
			case 'osci':
			case 'nora':
			case 'lapis':
			case 'vulse':
			case 'mission':
				toyArrayDildo.push(i);
			break;
			case 'gemini':
				toyArrayNipple.push(i);
			break;
			case 'flexer':
			case 'exomoon':
			case 'dolce':
			case 'lush':
			case 'ferri':
			case 'domi':
			case 'ambi':
			case 'tenera':
				toyArrayClit.push(i);
			break;
			case 'calor':
			case 'gush':
			case 'diamo':
			case 'max':
			case 'solace':
			case 'solace pro':
				toyArrayMale.push(i);
			break;
			case 'hush':
			case 'edge':
			case 'ridge':
				toyArrayAnal.push(i);
			break;
		}
	}
	
	for(let i = 0; i < toys.length; ++i) {
		let toy = toys[i];
		switch(toy.name) {
			case 'calor':
			case 'gush':
			case 'diamo':
			case 'solace':
			case 'solace pro':
			case 'max':
				toy.RAID_arousal = false;
				toy.RAID_orgasm = true;
				toy.RAID_party = true;
				toy.RAID_type_A = RAID_TYPE_PUSSY_ID;
				toy.RAID_type_B = RAID_TYPE_MOUTH_ID;
			break;
			case 'hush':
			case 'edge':
			case 'ridge':
				toy.RAID_orgasm = true;
				if(toyArrayMale.length === 0) {
					toy.RAID_type_A = RAID_TYPE_ANAL_ID;
				}
				else {
					toy.RAID_arousal = true;
					toy.RAID_type_A = RAID_TYPE_MASOCHISM_ID;
				}
				if(toyArrayDildo.length === 0 && toyArrayClit.length === 0) {
					toy.RAID_arousal = true;
					toy.RAID_party = true;
				}
			break;
			case 'gemini':
				toy.RAID_orgasm = true;			
				toy.RAID_type_B = RAID_TYPE_MASOCHISM_ID;
				if(toyArrayMale.length === 0 && toyArrayClit.length === 0) {
					toy.RAID_arousal = true;
					toy.RAID_party = true;
				}
				if(toyArrayMale.length === 0) {
					toy.RAID_type_A = RAID_TYPE_BOOBS_ID;
				}
				else {
					toy.RAID_type_A = RAID_TYPE_SADISM_ID;
					toy.RAID_type_B = false;
				}
			break;
			case 'flexer':
			case 'exomoon':
			case 'dolce':
			case 'lush':
			case 'ferri':
			case 'domi':
			case 'ambi':
			case 'tenera':
				toy.RAID_orgasm = true;
				toy.RAID_arousal = true;
				toy.RAID_type_A = RAID_TYPE_CLIT_ID;
			if(toyArrayDildo.length === 0 && toyArrayMale.length === 0) {
				toy.RAID_party = true;
			}
			if(toyArrayDildo.length === 0 && (toy.name === 'flexer' || toy.name === 'lush' || toy.name === 'exomoon')) {
				toy.RAID_type_B = RAID_TYPE_PUSSY_ID;
			}
			if(toy.name === 'ferri') {
				toy.RAID_type_B = RAID_TYPE_EXHIBITIONISM_ID;
			}
			break;
			case 'gravity':
			case 'xmachine':
			case 'hyphy':
			case 'osci':
			case 'nora':
			case 'lapis':
			case 'vulse':
			case 'mission':
				toy.RAID_orgasm = true;
				toy.RAID_party = true;
				toy.RAID_type_A = RAID_TYPE_PUSSY_ID;
				if(toyArrayNipple.length === 0 && toyArrayClit.length === 0) {
					toy.RAID_arousal = true;
				}
				if(toy.name === 'hyphy' && toyArrayDildo.length > 1) {
					toy.RAID_type_B = RAID_TYPE_CLIT_ID;
				}
				if(toy.name === 'nora') {
					toy.RAID_arousal = true;
					toy.RAID_type_B = RAID_TYPE_CLIT_ID;
				}
			break;
		}
	}
	
	if(toys.length === 1) {
		toys[0].RAID_arousal = true;
		toys[0].RAID_orgasm = true;
		toys[0].RAID_party = true;
	}
	
};

ConfigManager.setupRaidArrays = function() {
	ConfigManager.raidMouthArray = [];
	ConfigManager.raidBoobsArray = [];
	ConfigManager.raidClitArray = [];
	ConfigManager.raidPussyArray = [];
	ConfigManager.raidAnalArray = [];
	ConfigManager.raidRimjobArray = [];
	ConfigManager.raidFootjobArray = [];
	ConfigManager.raidHandsArray = [];
	ConfigManager.raidExhibitionismArray = [];
	ConfigManager.raidMasochismArray = [];
	ConfigManager.raidSadismArray = [];
	ConfigManager.raidArousalArray = [];
	ConfigManager.raidOrgasmArray = [];
	
	let toys = lovense.getToys();
	if(!toys) return false;

	for(let i = 0; i < toys.length; ++i) {
		let toy = toys[i];
		
		if(toy.RAID_type_A === RAID_TYPE_MOUTH_ID || toy.RAID_type_B === RAID_TYPE_MOUTH_ID || toy.RAID_type_C === RAID_TYPE_MOUTH_ID || toy.RAID_type_D === RAID_TYPE_MOUTH_ID || toy.RAID_type_E === RAID_TYPE_MOUTH_ID) {
			toy.RAID_type_mouth = true;
			ConfigManager.raidMouthArray.push(i);
		}
		if(toy.RAID_type_A === RAID_TYPE_BOOBS_ID || toy.RAID_type_B === RAID_TYPE_BOOBS_ID || toy.RAID_type_C === RAID_TYPE_BOOBS_ID || toy.RAID_type_D === RAID_TYPE_BOOBS_ID || toy.RAID_type_E === RAID_TYPE_BOOBS_ID) {
			toy.RAID_type_boobs = true;
			ConfigManager.raidBoobsArray.push(i);
		}
		if(toy.RAID_type_A === RAID_TYPE_CLIT_ID || toy.RAID_type_B === RAID_TYPE_CLIT_ID || toy.RAID_type_C === RAID_TYPE_CLIT_ID || toy.RAID_type_D === RAID_TYPE_CLIT_ID || toy.RAID_type_E === RAID_TYPE_CLIT_ID) {
			toy.RAID_type_clit = true;
			ConfigManager.raidClitArray.push(i);
		}
		if(toy.RAID_type_A === RAID_TYPE_PUSSY_ID || toy.RAID_type_B === RAID_TYPE_PUSSY_ID || toy.RAID_type_C === RAID_TYPE_PUSSY_ID || toy.RAID_type_D === RAID_TYPE_PUSSY_ID || toy.RAID_type_E === RAID_TYPE_PUSSY_ID) {
			toy.RAID_type_pussy = true;
			ConfigManager.raidPussyArray.push(i);
		}
		if(toy.RAID_type_A === RAID_TYPE_ANAL_ID || toy.RAID_type_B === RAID_TYPE_ANAL_ID || toy.RAID_type_C === RAID_TYPE_ANAL_ID || toy.RAID_type_D === RAID_TYPE_ANAL_ID || toy.RAID_type_E === RAID_TYPE_ANAL_ID) {
			toy.RAID_type_anal = true;
			ConfigManager.raidAnalArray.push(i);
		}
		if(toy.RAID_type_A === RAID_TYPE_RIMJOB_ID || toy.RAID_type_B === RAID_TYPE_RIMJOB_ID || toy.RAID_type_C === RAID_TYPE_RIMJOB_ID || toy.RAID_type_D === RAID_TYPE_RIMJOB_ID || toy.RAID_type_E === RAID_TYPE_RIMJOB_ID) {
			toy.RAID_type_rimjob = true;
			ConfigManager.raidRimjobArray.push(i);
		}
		if(toy.RAID_type_A === RAID_TYPE_FOOTJOB_ID || toy.RAID_type_B === RAID_TYPE_FOOTJOB_ID || toy.RAID_type_C === RAID_TYPE_FOOTJOB_ID || toy.RAID_type_D === RAID_TYPE_FOOTJOB_ID || toy.RAID_type_E === RAID_TYPE_FOOTJOB_ID) {
			toy.RAID_type_footjob = true;
			ConfigManager.raidFootjobArray.push(i);
		}
		if(toy.RAID_type_A === RAID_TYPE_HANDS_ID || toy.RAID_type_B === RAID_TYPE_HANDS_ID || toy.RAID_type_C === RAID_TYPE_HANDS_ID || toy.RAID_type_D === RAID_TYPE_HANDS_ID || toy.RAID_type_E === RAID_TYPE_HANDS_ID) {
			toy.RAID_type_hands = true;
			ConfigManager.raidHandsArray.push(i);
		}
		if(toy.RAID_type_A === RAID_TYPE_EXHIBITIONISM_ID || toy.RAID_type_B === RAID_TYPE_EXHIBITIONISM_ID || toy.RAID_type_C === RAID_TYPE_EXHIBITIONISM_ID || toy.RAID_type_D === RAID_TYPE_EXHIBITIONISM_ID || toy.RAID_type_E === RAID_TYPE_EXHIBITIONISM_ID) {
			toy.RAID_type_exhibitionism = true;
			ConfigManager.raidExhibitionismArray.push(i);
		}
		if(toy.RAID_type_A === RAID_TYPE_MASOCHISM_ID || toy.RAID_type_B === RAID_TYPE_MASOCHISM_ID || toy.RAID_type_C === RAID_TYPE_MASOCHISM_ID || toy.RAID_type_D === RAID_TYPE_MASOCHISM_ID || toy.RAID_type_E === RAID_TYPE_MASOCHISM_ID) {
			toy.RAID_type_masochism = true;
			ConfigManager.raidMasochismArray.push(i);
		}
		if(toy.RAID_type_A === RAID_TYPE_SADISM_ID || toy.RAID_type_B === RAID_TYPE_SADISM_ID || toy.RAID_type_C === RAID_TYPE_SADISM_ID || toy.RAID_type_D === RAID_TYPE_SADISM_ID || toy.RAID_type_E === RAID_TYPE_SADISM_ID) {
			toy.RAID_type_sadism = true;
			ConfigManager.raidSadismArray.push(i);
		}
		
		if(toy.RAID_arousal) ConfigManager.raidArousalArray.push(i);
		if(toy.RAID_orgasm) ConfigManager.raidOrgasmArray.push(i);
	}
};


ConfigManager.convertIntoRaidStrengthString_Volume100 = function(arr) {
	if(!arr || arr.length === 0) return false;
	let str = '';
	for(let i = 0; i < arr.length; ++i) {
		if(i > 0) str += ';';
		str += arr[i];
	}
	return str;
};

ConfigManager.convertIntoRaidStrengthString_Volume75 = function(arr) {
	if(!arr || arr.length === 0) return false;
	let str = '';
	for(let i = 0; i < arr.length; ++i) {
		if(i > 0) str += ';';
		
		let num = arr[i];
		
		switch(arr[i]) {
			case 20:
				num = 16;
			break;	
			case 19:
				num = 15;
			break;	
			case 18:
				num = 14;
			break;	
			case 17:
				num = 13;
			break;	
			case 16:
				num = 12;
			break;	
			case 15:
			case 14:
				num = 11;
			break;	
			case 13:
				num = 10;
			break;
			case 12:
				num = 9;
			break;
			case 11:
			case 10:
				num = 8;
			break;	
			case 9:
				num = 7;
			break;
			case 8:
				num = 6;
			break;
			case 7:
			case 6:
				num = 5;
			break;
			case 5:
				num = 4;
			break;
			case 4:
				num = 3;
			break;
			case 3:
			case 2:
				num = 2;
			break;
			case 1:
				num = 1;
			break;
		}
		
		str += num;
	}
	return str;
};

ConfigManager.convertIntoRaidStrengthString_Volume50 = function(arr) {
	if(!arr || arr.length === 0) return false;
	let str = '';
	for(let i = 0; i < arr.length; ++i) {
		if(i > 0) str += ';';
		
		let num = arr[i];
		
		switch(arr[i]) {
			case 20:
				num = 11;
			break;
			case 19:
				num = 10;
			break;	
			case 18:
			case 17:
				num = 9;
			break;	
			case 16:
			case 15:
				num = 8;
			break;	
			case 14:
			case 13:
				num = 7;
			break;	
			case 12:
			case 11:
				num = 6;
			break;
			case 10:
			case 9:
				num = 5;
			break;	
			case 8:
			case 7:
				num = 4;
			break;
			case 6:
			case 5:
				num = 3;
			break;
			case 4:
			case 3:
				num = 2;
			break;
			case 2:
			case 1:
				num = 1;
			break;
		}
		
		str += num;
	}
	return str;
};

ConfigManager.convertIntoRaidStrengthString_Volume25 = function(arr) {
	if(!arr || arr.length === 0) return false;
	let str = '';
	for(let i = 0; i < arr.length; ++i) {
		if(i > 0) str += ';';
		
		let num = arr[i];
		
		switch(arr[i]) {
			case 20:
				num = 6;
			break;	
			case 19:
			case 18:
			case 17:
				num = 5;
			break;		
			case 16:
			case 15:
			case 14:
			case 13:
				num = 4;
			break;	
			case 12:
			case 11:
			case 10:
			case 9:
				num = 3;
			break;
			case 8:
			case 7:
			case 6:
			case 5:
				num = 2;
			break;
			case 4:
			case 3:
			case 2:
			case 1:
				num = 1;
			break;
		}
		
		str += num;
	}
	return str;
};

ConfigManager.convertIntoRaidStrengthString = function(arr, toyNum) {
	let convertedStr = '';
	if(lovense.getToys()[toyNum].RAID_intensity === 0) {
		switch(ConfigManager.lovenseVolume) {
			case 100:
				convertedStr = ConfigManager.convertIntoRaidStrengthString_Volume100(arr);
			break;
			case 75:
				convertedStr = ConfigManager.convertIntoRaidStrengthString_Volume75(arr);
			break;
			case 50:
				convertedStr = ConfigManager.convertIntoRaidStrengthString_Volume50(arr);
			break;
			case 25:
				convertedStr = ConfigManager.convertIntoRaidStrengthString_Volume25(arr);
			break;
		}
	}
	else {
		switch(lovense.getToys()[toyNum].RAID_intensity) {
			case 100:
				convertedStr = ConfigManager.convertIntoRaidStrengthString_Volume100(arr);
			break;
			case 75:
				convertedStr = ConfigManager.convertIntoRaidStrengthString_Volume75(arr);
			break;
			case 50:
				convertedStr = ConfigManager.convertIntoRaidStrengthString_Volume50(arr);
			break;
			case 25:
				convertedStr = ConfigManager.convertIntoRaidStrengthString_Volume25(arr);
			break;
		}
	}
	return convertedStr;
};

ConfigManager.convertIntoRaidThrusting = function(thrust, toyNum) {
	let convertedThrust = 0;
	if(lovense.getToys()[toyNum].RAID_intensity === 0) {
		switch(ConfigManager.lovenseVolume) {
			case 100:
				convertedThrust = thrust;
			break;
			case 75:
				convertedThrust = Math.ceil(thrust * 0.75);
			break;
			case 50:
				convertedThrust = Math.ceil(thrust * 0.5);
			break;
			case 25:
				convertedThrust = Math.ceil(thrust * 0.25);
			break;
		}
	}
	else {
		switch(lovense.getToys()[toyNum].RAID_intensity) {
			case 100:
				convertedThrust = thrust;
			break;
			case 75:
				convertedThrust = Math.ceil(thrust * 0.75);
			break;
			case 50:
				convertedThrust = Math.ceil(thrust * 0.5);
			break;
			case 25:
				convertedThrust = Math.ceil(thrust * 0.25);
			break;
		}
	}
	return convertedThrust;
};

ConfigManager.convertRaidTime = function(num, toyNum) {
	let convertedNum = num;
	if(lovense.getToys()[toyNum].RAID_time === 0) {
		switch(ConfigManager.lovenseTime) {
			case 0:
				convertedNum = Math.round(num * 0.5);
			break;
			case 1:
				convertedNum = num;
			break;
			case 2:
				convertedNum = num * 2;
			break;
			case 3:
				convertedNum = num * 3;
			break;
			case 4:
				convertedNum = num * 5;
			break;
			case 5:
				convertedNum = 0;
			break;
			case 6:
				convertedNum = Math.round(num * 0.166);
			break;
			case 7:
				convertedNum = Math.round(num * 0.25);
			break;
		}
	}
	else {
		switch(lovense.getToys()[toyNum].RAID_time) {
			case 1:
				convertedNum = num;
			break;
			case 2:
				convertedNum = num * 2;
			break;
			case 3:
				convertedNum = num * 3;
			break;
			case 4:
				convertedNum = num * 5;
			break;
			case 5:
				convertedNum = 0;
			break;
			case 6:
				convertedNum = Math.round(num * 0.166);
			break;
			case 7:
				convertedNum = Math.round(num * 0.25);
			break;
			case 8:
				convertedNum = Math.round(num * 0.5);
			break;
		}
	}
	return convertedNum;
};

Scene_Options.prototype.popScene = function() {
    ConfigManager.setupRaidArrays();
	ConfigManager.checkHairDLCOptions();
	SceneManager.pop();
	Karryn.setCacheChanged();
};

/////////////
// Game Actor
/////////////

Game_Actor.prototype.raidArousalCheck = function() {
	if(this.isAroused() && !this.reachedOrgasmPoint() && !this.isInMapPose() && (this.showEval_masturbateBattle_skillTouch() || this.buttDesire >= this.buttPettingButtDesireRequirement())) {
		this.raidArousal();
	}
	else  {
		this.stopArousalRaid();
	}
};

Game_Actor.prototype.raidArousal = function() {
    if(!lovense.isConnected()) return;
	
	let generalReactionScore = this.getReactionScore();
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	
	let level = 1;
	if(generallvl3) level = 3;
	else if(generallvl2) level = 2;
	
	const connectedToys = lovense.getToys();
	for(let toyNum = 0; toyNum < connectedToys.length; ++toyNum) {
		let useToy = false;
		let tempLevel = level;
		let toy = connectedToys[toyNum];
		if(!ConfigManager.raidEnable) useToy = true;
		else {
			if(toy.RAID_arousal && (!toy.being_RAIDed || toy.being_RAIDed === RAIDING_AROUSAL_ID) && toy.RAID_timeUntilEnd <= $gameSystem.playtime()) {
				useToy = true;
				if(this.isTwoThirdsWayToOrgasm()) 
					tempLevel++;
			}
		}
		
		if(useToy) {
			if(toy.name === 'solace') {
				let time = 0;
				let loopRunningSec = 0;
				let loopPauseSec = 0;
				let thrust = 1;
				let depth = 1;
				
				switch(tempLevel) {
					case 1:
						thrust = 1;
						depth = 1;
					break;
					case 2:
						thrust = 1;
						depth = 1;
					break;
					case 3:
						thrust = 1;
						depth = 1;
					break;
					case 4:
						thrust = 1;
						depth = 1;
					break;
				}
				
				let convertedThrust = ConfigManager.convertIntoRaidThrusting(thrust, toyNum);
				lovense.sendRemSolaceCommand(convertedThrust, depth, time, toyNum, loopRunningSec, loopPauseSec);
			} 
			else {
				let interval = 250;
				let time = 0;
				let arr = [];
				
				switch(tempLevel) {
					case 1:
						arr = [1,1,1,1,1,1,2,1];
					break;
					case 2:
						arr = [2,2,2,2,3,2,2];
					break;
					case 3:
						arr = [3,3,3,3,4,3,3,3,4];
					break;
					case 4:
						arr = [4,4,4,5,4,4,5,5,4];
					break;
				}
				
				let convertedStr = ConfigManager.convertIntoRaidStrengthString(arr, toyNum);
				lovense.sendRemCommand(convertedStr, interval, time, toyNum);
			}
			
			toy.being_RAIDed = RAIDING_AROUSAL_ID;
		}
	}
};

Game_Actor.prototype.raidFingerSuck = function(isMasSkill, isStripperSkill) {
    if(!lovense.isConnected()) return;
	
	let generalReactionScore = this.getReactionScore();
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	
	let level = 1;
	if(generallvl3) level = 3;
	else if(generallvl2) level = 2;
	
	const connectedToys = lovense.getToys();
	for(let toyNum = 0; toyNum < connectedToys.length; ++toyNum) {
		let useToy = false;
		let tempLevel = level;
		let toy = connectedToys[toyNum];
		if(!ConfigManager.raidEnable) useToy = true;
		else {
			if(toy.RAID_type_mouth) {
				useToy = true;
				tempLevel++;
			}
			else {
				if(ConfigManager.raidMouthArray.length > 0) {
					useToy = false;
				}
				else if(toy.RAID_party) {
					useToy = true;
				}
				else {
					useToy = false;
				}
			}
		}
		
		if(useToy) {
			let time = ConfigManager.convertRaidTime(15, toyNum);
			
			if(toy.name === 'solace') {
				let loopRunningSec = 0;
				let loopPauseSec = 0;
				let thrust = 1;
				let depth = 1;
				
				switch(tempLevel) {
					case 1:
						thrust = 2;
						depth = 1;
					break;
					case 2:
						thrust = 3;
						depth = 1;
					break;
					case 3:
						thrust = 4;
						depth = 1;
					break;
					case 4:
						thrust = 5;
						depth = 1;
					break;
				}
				
				let convertedThrust = ConfigManager.convertIntoRaidThrusting(thrust, toyNum);
				lovense.sendRemSolaceCommand(convertedThrust, depth, time, toyNum, loopRunningSec, loopPauseSec);
			} 
			else if(toy.name === 'solace pro' && false) {
				let actionArray = [];
				switch(tempLevel) {
					case 1:
						aa.push([0,42]);
						aa.push([1000,75]);
					break;
					case 2:
						aa.push([0,42]);
						aa.push([500,70]);
						aa.push([800,80]);
						aa.push([1000,60]);
					break;
					case 3:
						aa.push([0,42]);
						aa.push([300,70]);
						aa.push([600,80]);
						aa.push([800,60]);
					break;
					case 4:
						aa.push([0,42]);
						aa.push([150,60]);
						aa.push([250,80]);
						aa.push([450,70]);
						aa.push([650,90]);
						aa.push([850,70]);
					break;
				}
				lovense.sendRemSolaceProSetupCommand(actionArray);
				lovense.sendRemSolaceProPlayCommand(toyNum, time * 1000);
			}
			else {
				let interval = 333;
				let arr = [];
				
				if(isStripperSkill) {
					time = 0;
					tempLevel = Math.max(1, tempLevel - 1);
				}
				
				switch(tempLevel) {
					case 1:
						arr = [1,3,2,1,1,3,0,0,0];
					break;
					case 2:
						arr = [2,4,5,5,4,0,4,5,4,2,5,0,0,0];
					break;
					case 3:
						arr = [5,7,8,8,8,7,2,1,3,4,1,3,4,5,7,8,8,8,5,2,1,2,1];
					break;
					case 4:
						arr = [5,9,10,10,10,9,3,1,4,5,2,4,5,7,9,10,10,10,7,3,2,3,2];
					break;
				}
				
				let convertedStr = ConfigManager.convertIntoRaidStrengthString(arr, toyNum);
				lovense.sendRemCommand(convertedStr, interval, time, toyNum);
				if(isMasSkill)
					toy.being_RAIDed = RAIDING_SUCK_FINGER_MAS_ID;
				else if(isStripperSkill)
					toy.being_RAIDed = RAIDING_SUCK_FINGER_STRIPPER_ID;
				else
					toy.being_RAIDed = RAIDING_OTHER_ID;
				if(time) toy.RAID_timeUntilEnd = $gameSystem.playtime() + time;
				else toy.RAID_timeUntilEnd = $gameSystem.playtime() + 9999;
			}
		}
	}
};

Game_Actor.prototype.raidKiss = function(isMasSkill) {
    if(!lovense.isConnected()) return;
	
	let sexSkillReactionScore = this.reactionScore_kissPassive();
	let sexlvl3 = sexSkillReactionScore >= VAR_FP_SEX_RS_LV3_REQ;
	let sexlvl2 = sexSkillReactionScore >= VAR_FP_SEX_RS_LV2_REQ;
	
	let level = 1;
	if(sexlvl3) level = 3;
	else if(sexlvl2) level = 2;
	
	const connectedToys = lovense.getToys();
	for(let toyNum = 0; toyNum < connectedToys.length; ++toyNum) {
		let useToy = false;
		let tempLevel = level;
		let toy = connectedToys[toyNum];
		if(!ConfigManager.raidEnable) useToy = true;
		else {
			if(toy.RAID_type_mouth) {
				useToy = true;
				tempLevel++;
			}
			else {
				if(ConfigManager.raidMouthArray.length > 0) {
					useToy = false;
				}
				else if(toy.RAID_party) {
					useToy = true;
				}
				else {
					useToy = false;
				}
			}
		}
		
		if(useToy) {
			let time = ConfigManager.convertRaidTime(20, toyNum);
			
			if(toy.name === 'solace') {
				let loopRunningSec = 0;
				let loopPauseSec = 0;
				let thrust = 1;
				let depth = 1;
				
				switch(tempLevel) {
					case 1:
						thrust = 3;
						depth = 1;
					break;
					case 2:
						thrust = 5;
						depth = 1;
					break;
					case 3:
						thrust = 7;
						depth = 1;
					break;
					case 4:
						thrust = 8;
						depth = 1;
					break;
				}
				
				let convertedThrust = ConfigManager.convertIntoRaidThrusting(thrust, toyNum);
				lovense.sendRemSolaceCommand(convertedThrust, depth, time, toyNum, loopRunningSec, loopPauseSec);
			} 
			else {
				let interval = 200;
				let arr = [];
				
				switch(tempLevel) {
					case 1:
						arr = [3,3,4,4,4,4,0,0,0,0,3,0,0,0];
					break;
					case 2:
						arr = [4,5,6,6,5,5,6,6,5,5,1,1,1,2,1,1];
					break;
					case 3:
						arr = [7,8,8,8,5,7,5,8,5,8,5,7,11,11,8,11,11];
					break;
					case 4:
						arr = [8,9,9,9,7,9,7,10,7,10,7,9,13,12,10,13,12];
					break;
				}
				
				let convertedStr = ConfigManager.convertIntoRaidStrengthString(arr, toyNum);
				lovense.sendRemCommand(convertedStr, interval, time, toyNum);
				if(isMasSkill)
					toy.being_RAIDed = RAIDING_KISS_MAS_ID;
				else
					toy.being_RAIDed = RAIDING_OTHER_ID;
				if(time) toy.RAID_timeUntilEnd = $gameSystem.playtime() + time;
				else toy.RAID_timeUntilEnd = $gameSystem.playtime() + 9999;
			}
		}
	}
};

Game_Actor.prototype.raidBlowjob = function(raidLevelBoosted) {
    if(!lovense.isConnected()) return;
	
	let sexSkillReactionScore = this.reactionScore_blowjobPassive();
	let sexlvl3 = sexSkillReactionScore >= VAR_FP_SEX_RS_LV3_REQ;
	let sexlvl2 = sexSkillReactionScore >= VAR_FP_SEX_RS_LV2_REQ;
	
	let level = 1;
	if(sexlvl3) level = 3;
	else if(sexlvl2) level = 2;
	
	if(raidLevelBoosted) level++;
	
	const connectedToys = lovense.getToys();
	for(let toyNum = 0; toyNum < connectedToys.length; ++toyNum) {
		let useToy = false;
		let tempLevel = level;
		let toy = connectedToys[toyNum];
		if(!ConfigManager.raidEnable) useToy = true;
		else {
			if(toy.RAID_type_mouth) {
				useToy = true;
				tempLevel++;
			}
			else {
				if(ConfigManager.raidMouthArray.length > 0) {
					useToy = false;
				}
				else if(toy.RAID_party) {
					useToy = true;
				}
				else {
					useToy = false;
				}
			}
		}
		
		if(useToy) {
			let time = 0;
			
			if(toy.name === 'solace') {
				let loopRunningSec = 0;
				let loopPauseSec = 0;
				let thrust = 1;
				let depth = 1;
				
				switch(tempLevel) {
					case 1:
						thrust = 5;
						depth = 1;
						loopRunningSec = 3;
						loopPauseSec = 1;
					break;
					case 2:
						thrust = 8;
						depth = 2;
						loopRunningSec = 4;
						loopPauseSec = 1;
					break;
					case 3:
						thrust = 12;
						depth = 2;
					break;
					case 4:
					case 5:
						thrust = 14;
						depth = 2;
					break;
				}
				
				let convertedThrust = ConfigManager.convertIntoRaidThrusting(thrust, toyNum);
				lovense.sendRemSolaceCommand(convertedThrust, depth, time, toyNum, loopRunningSec, loopPauseSec);
			} 
			else {
				let interval = 200;
				let arr = [];
				
				switch(tempLevel) {
					case 1:
						arr = [6,7,6,7,2,2,2,6,7,7,2,1,2,1,2,1];
					break;
					case 2:
						arr = [10,12,12,10,8,2,1,2,10,12,12,10,6,6];
					break;
					case 3:
						arr = [14,14,10,10,14,14,8,8,14,8,14,8,14,14];
					break;
					case 4:
						arr = [17,17,10,10,17,17,8,8,16,8,16,8,17,16];
					break;
					case 5:
						arr = [20,20,20,10,10,20,20,8,18,18,8,18,8,18,18];
					break;
				}
				
				let convertedStr = ConfigManager.convertIntoRaidStrengthString(arr, toyNum);
				lovense.sendRemCommand(convertedStr, interval, time, toyNum);
				toy.being_RAIDed = RAIDING_BLOWJOB_ID;
				if(time) toy.RAID_timeUntilEnd = $gameSystem.playtime() + time;
				else toy.RAID_timeUntilEnd = $gameSystem.playtime() + 9999;
			}
		}
	}
};

Game_Actor.prototype.raidBoobsPet = function(isMasSkill, isStripperSkill) {
    if(!lovense.isConnected()) return;
	
	let generalReactionScore = this.getReactionScore();
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	
	let level = 1;
	if(generallvl3) level = 3;
	else if(generallvl2) level = 2;
	
	const connectedToys = lovense.getToys();
	for(let toyNum = 0; toyNum < connectedToys.length; ++toyNum) {
		let useToy = false;
		let tempLevel = level;
		let toy = connectedToys[toyNum];
		if(!ConfigManager.raidEnable) useToy = true;
		else {
			if(toy.RAID_type_boobs) {
				useToy = true;
				tempLevel++;
			}
			else {
				if(ConfigManager.raidBoobsArray.length > 0) {
					useToy = false;
				}
				else if(toy.RAID_party) {
					useToy = true;
				}
				else {
					useToy = false;
				}
			}
		}
		
		if(useToy) {
			let time = ConfigManager.convertRaidTime(10, toyNum);
			
			if(toy.name === 'solace') {
				let loopRunningSec = 2;
				let loopPauseSec = 1;
				let thrust = 1;
				let depth = 1;
				
				switch(tempLevel) {
					case 1:
						thrust = 2;
						depth = 3;
					break;
					case 2:
						thrust = 4;
						depth = 3;
					break;
					case 3:
						thrust = 6;
						depth = 3;
						loopRunningSec = 3;
					break;
					case 4:
						thrust = 7;
						depth = 3;
						loopRunningSec = 3;
					break;
				}
				
				let convertedThrust = ConfigManager.convertIntoRaidThrusting(thrust, toyNum);
				lovense.sendRemSolaceCommand(convertedThrust, depth, time, toyNum, loopRunningSec, loopPauseSec);
			} 
			else {
				let interval = 133;
				let arr = [];
				
				if(isStripperSkill) {
					time = 0;
					tempLevel = Math.max(1, tempLevel - 1);
				}
				
				switch(tempLevel) {
					case 1:
						arr = [3,3,4,6,4,2,3,3,3,6];
					break;
					case 2:
						arr = [4,5,5,4,7,3,3,4,4,7,7];
					break;
					case 3:
						arr = [5,6,5,5,9,7,2,4,5,9,9,7,3];
					break;
					case 4:
						arr = [6,7,9,6,12,12,5,2,5,2,12,12,7,1];
					break;
				}
				
				let convertedStr = ConfigManager.convertIntoRaidStrengthString(arr, toyNum);
				lovense.sendRemCommand(convertedStr, interval, time, toyNum);
				if(isMasSkill)
					toy.being_RAIDed = RAIDING_BOOBS_PET_MAS_ID;
				else if(isStripperSkill)
					toy.being_RAIDed = RAIDING_BOOBS_PET_STRIPPER_ID;
				else
					toy.being_RAIDed = RAIDING_OTHER_ID;
				if(time) toy.RAID_timeUntilEnd = $gameSystem.playtime() + time;
				else toy.RAID_timeUntilEnd = $gameSystem.playtime() + 9999;
			}
		}
	}
};

Game_Actor.prototype.raidNipplesPet = function(isMasSkill) {
    if(!lovense.isConnected()) return;
	
	let generalReactionScore = this.getReactionScore();
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	
	let level = 1;
	if(generallvl3) level = 3;
	else if(generallvl2) level = 2;
	
	const connectedToys = lovense.getToys();
	for(let toyNum = 0; toyNum < connectedToys.length; ++toyNum) {
		let useToy = false;
		let tempLevel = level;
		let toy = connectedToys[toyNum];
		if(!ConfigManager.raidEnable) useToy = true;
		else {
			if(toy.RAID_type_boobs) {
				useToy = true;
				tempLevel++;
			}
			else {
				if(ConfigManager.raidBoobsArray.length > 0) {
					useToy = false;
				}
				else if(toy.RAID_party) {
					useToy = true;
				}
				else {
					useToy = false;
				}
			}
		}
		
		if(useToy) {
			let time = ConfigManager.convertRaidTime(15, toyNum);
			
			if(toy.name === 'solace') {
				let loopRunningSec = 2;
				let loopPauseSec = 1;
				let thrust = 1;
				let depth = 1;
				
				switch(tempLevel) {
					case 1:
						thrust = 5;
						depth = 1;
					break;
					case 2:
						thrust = 7;
						depth = 1;
					break;
					case 3:
						thrust = 9;
						depth = 1;
						loopRunningSec = 3;
					break;
					case 4:
						thrust = 11;
						depth = 1;
						loopRunningSec = 3;
					break;
				}
				
				let convertedThrust = ConfigManager.convertIntoRaidThrusting(thrust, toyNum);
				lovense.sendRemSolaceCommand(convertedThrust, depth, time, toyNum, loopRunningSec, loopPauseSec);
			} 
			else {
				let interval = 133;		
				let arr = [];
				
				switch(tempLevel) {
					case 1:
						arr = [1,6,7,8,0,0,0,0,2,3,0,0];
					break;
					case 2:
						arr = [1,8,10,11,0,0,0,2,3,0,10,11,12,0,0,0,0,0];
					break;
					case 3:
						arr = [2,10,13,14,14,0,0,0,5,0,1,13,14,14,15,0,0,0,0,0,0];
					break;
					case 4:
						arr = [3,13,15,16,16,0,0,0,6,0,1,15,16,17,17,0,0,0,0,0,0];
					break;
				}
				
				let convertedStr = ConfigManager.convertIntoRaidStrengthString(arr, toyNum);
				lovense.sendRemCommand(convertedStr, interval, time, toyNum);
				if(isMasSkill)
					toy.being_RAIDed = RAIDING_NIPPLES_PET_MAS_ID;
				else
					toy.being_RAIDed = RAIDING_OTHER_ID;
				if(time) toy.RAID_timeUntilEnd = $gameSystem.playtime() + time;
				else toy.RAID_timeUntilEnd = $gameSystem.playtime() + 9999;
			}
		}
	}
};

Game_Actor.prototype.raidTittyFuck = function(raidLevelBoosted) {
    if(!lovense.isConnected()) return;
	
	let sexSkillReactionScore = this.reactionScore_tittyFuckPassive();
	let sexlvl3 = sexSkillReactionScore >= VAR_FP_SEX_RS_LV3_REQ;
	let sexlvl2 = sexSkillReactionScore >= VAR_FP_SEX_RS_LV2_REQ;
	
	let level = 1;
	if(sexlvl3) level = 3;
	else if(sexlvl2) level = 2;
	
	if(raidLevelBoosted) level++;
	
	const connectedToys = lovense.getToys();
	for(let toyNum = 0; toyNum < connectedToys.length; ++toyNum) {
		let useToy = false;
		let tempLevel = level;
		let toy = connectedToys[toyNum];
		if(!ConfigManager.raidEnable) useToy = true;
		else {
			if(toy.RAID_type_boobs) {
				useToy = true;
				tempLevel++;
			}
			else {
				if(ConfigManager.raidBoobsArray.length > 0) {
					useToy = false;
				}
				else if(toy.RAID_party) {
					useToy = true;
				}
				else {
					useToy = false;
				}
			}
		}
		
		if(useToy) {
			let time = 0;
			
			if(toy.name === 'solace') {
				let loopRunningSec = 1;
				let loopPauseSec = 1;
				let thrust = 1;
				let depth = 1;
				
				switch(tempLevel) {
					case 1:
						thrust = 5;
						depth = 3;
						loopRunningSec = 4;
					break;
					case 2:
						thrust = 7;
						depth = 3;
						loopRunningSec = 6;
					break;
					case 3:
						thrust = 9;
						depth = 3;
						loopRunningSec = 8;
					break;
					case 4:
					case 5:
						thrust = 11;
						depth = 3;
						loopRunningSec = 8;
					break;
				}
				
				let convertedThrust = ConfigManager.convertIntoRaidThrusting(thrust, toyNum);
				lovense.sendRemSolaceCommand(convertedThrust, depth, time, toyNum, loopRunningSec, loopPauseSec);
			} 
			else {
				let interval = 200;			
				let arr = [];
				
				switch(tempLevel) {
					case 1:
						arr = [3,3,3,6,6,4,6,3,3,6,6,3,4,3,6,6,4];
					break;
					case 2:
						arr = [4,4,4,8,8,6,8,4,4,8,8,4,6,4,8,8,6];
					break;
					case 3:
						arr = [5,5,5,12,12,9,12,6,12,6,12,12,14,3,5,5,14,14];
					break;
					case 4:
						arr = [6,6,6,14,14,11,14,7,14,7,14,14,17,5,7,7,17,17];
					break;
					case 5:
						arr = [8,8,8,17,17,12,17,10,19,7,16,16,20,7,4,7,20,20];
					break;
				}
				
				let convertedStr = ConfigManager.convertIntoRaidStrengthString(arr, toyNum);
				lovense.sendRemCommand(convertedStr, interval, time, toyNum);
				toy.being_RAIDed = RAIDING_TITTY_FUCK_ID;
				if(time) toy.RAID_timeUntilEnd = $gameSystem.playtime() + time;
				else toy.RAID_timeUntilEnd = $gameSystem.playtime() + 9999;
			}
		}
	}
};

Game_Actor.prototype.raidClitPet = function(isMasSkill) {
    if(!lovense.isConnected()) return;
	
	let generalReactionScore = this.getReactionScore();
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	
	let level = 1;
	if(generallvl3) level = 3;
	else if(generallvl2) level = 2;
	
	const connectedToys = lovense.getToys();
	for(let toyNum = 0; toyNum < connectedToys.length; ++toyNum) {
		let useToy = false;
		let tempLevel = level;
		let toy = connectedToys[toyNum];
		if(!ConfigManager.raidEnable) useToy = true;
		else {
			if(toy.RAID_type_clit) {
				useToy = true;
				tempLevel++;
			}
			else {
				if(ConfigManager.raidClitArray.length > 0) {
					useToy = false;
				}
				else if(toy.RAID_party) {
					useToy = true;
				}
				else {
					useToy = false;
				}
			}
		}
		
		if(useToy) {
			let time = ConfigManager.convertRaidTime(10, toyNum);
			
			if(toy.name === 'solace') {
				let loopRunningSec = 0;
				let loopPauseSec = 0;
				let thrust = 1;
				let depth = 1;
				
				switch(tempLevel) {
					case 1:
						thrust = 4;
						depth = 1;
						loopRunningSec = 4;
						loopPauseSec = 1;
					break;
					case 2:
						thrust = 6;
						depth = 1;
						loopRunningSec = 6;
						loopPauseSec = 1;
					break;
					case 3:
						thrust = 8;
						depth = 1;
					break;
					case 4:
						thrust = 10;
						depth = 1;
					break;
				}
				
				let convertedThrust = ConfigManager.convertIntoRaidThrusting(thrust, toyNum);
				lovense.sendRemSolaceCommand(convertedThrust, depth, time, toyNum, loopRunningSec, loopPauseSec);
			} 
			else {		
				let interval = 200;
				let arr = [];
				
				switch(tempLevel) {
					case 1:
						arr = [2,3,4,3,1,0,0];
					break;
					case 2:
						arr = [3,4,5,4,6,1,0];
					break;
					case 3:
						arr = [5,4,7,8,8,2,7];
					break;
					case 4:
						arr = [9,5,11,13,14,2,12];
					break;
				}
				
				let convertedStr = ConfigManager.convertIntoRaidStrengthString(arr, toyNum);
				lovense.sendRemCommand(convertedStr, interval, time, toyNum);
				if(isMasSkill)
					toy.being_RAIDed = RAIDING_CLIT_PET_MAS_ID;
				else
					toy.being_RAIDed = RAIDING_OTHER_ID;
				if(time) toy.RAID_timeUntilEnd = $gameSystem.playtime() + time;
				else toy.RAID_timeUntilEnd = $gameSystem.playtime() + 9999;
			}
		}
	}
};

Game_Actor.prototype.raidClitToy = function() {
    if(!lovense.isConnected()) return;
	
	let generalReactionScore = this.getReactionScore();
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	
	let level = 1;
	if(generallvl3) level = 3;
	else if(generallvl2) level = 2;
	
	const connectedToys = lovense.getToys();
	for(let toyNum = 0; toyNum < connectedToys.length; ++toyNum) {
		let useToy = false;
		let tempLevel = level;
		let toy = connectedToys[toyNum];
		if(!ConfigManager.raidEnable) useToy = true;
		else {
			if(toy.RAID_type_clit) {
				useToy = true;
				tempLevel++;
			}
			else {
				if(ConfigManager.raidClitArray.length > 0) {
					useToy = false;
				}
				else if(toy.RAID_party) {
					useToy = true;
				}
				else {
					useToy = false;
				}
			}
		}
		
		if(useToy) {
			let time = ConfigManager.convertRaidTime(20, toyNum);
			
			if(toy.name === 'solace') {
				let loopRunningSec = 0;
				let loopPauseSec = 0;
				let thrust = 1;
				let depth = 1;
				
				switch(tempLevel) {
					case 1:
						thrust = 5;
						depth = 1;
					break;
					case 2:
						thrust = 7;
						depth = 1;
					break;
					case 3:
						thrust = 8;
						depth = 1;
					break;
					case 4:
						thrust = 10;
						depth = 1;
					break;
				}
				
				let convertedThrust = ConfigManager.convertIntoRaidThrusting(thrust, toyNum);
				lovense.sendRemSolaceCommand(convertedThrust, depth, time, toyNum, loopRunningSec, loopPauseSec);
			} 
			else {		
				let interval = 200;
				let arr = [];
				
				switch(tempLevel) {
					case 1:
						arr = [2,2,3,3,4,4,5,5,5,5,5,5,5,5,5];
					break;
					case 2:
						arr = [3,3,4,5,6,7,7,7,7,7,7,7,7,7,7];
					break;
					case 3:
						arr = [5,5,7,9,13,11,11,11,11,11,11,11,11,11];
					break;
					case 4:
						arr = [7,7,9,10,14,12,12,12,12,12,12,12,12,12];
					break;
				}
				
				let convertedStr = ConfigManager.convertIntoRaidStrengthString(arr, toyNum);
				lovense.sendRemCommand(convertedStr, interval, time, toyNum);
				toy.being_RAIDed = RAIDING_CLIT_TOY_ID;
				if(time) toy.RAID_timeUntilEnd = $gameSystem.playtime() + time;
				else toy.RAID_timeUntilEnd = $gameSystem.playtime() + 9999;
			}
		}
	}
};

Game_Actor.prototype.raidCunnilingus = function() {
    if(!lovense.isConnected()) return;
	
	let generalReactionScore = this.getReactionScore();
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	
	let level = 1;
	if(generallvl3) level = 3;
	else if(generallvl2) level = 2;
	
	const connectedToys = lovense.getToys();
	for(let toyNum = 0; toyNum < connectedToys.length; ++toyNum) {
		let useToy = false;
		let tempLevel = level;
		let toy = connectedToys[toyNum];
		if(!ConfigManager.raidEnable) useToy = true;
		else {
			if(toy.RAID_type_clit) {
				useToy = true;
				tempLevel++;
			}
			else {
				if(ConfigManager.raidClitArray.length > 0) {
					useToy = false;
				}
				else if(toy.RAID_party) {
					useToy = true;
				}
				else {
					useToy = false;
				}
			}
		}
		
		if(useToy) {
			let time = 0;
			
			if(toy.name === 'solace') {
				let loopRunningSec = 0;
				let loopPauseSec = 0;
				let thrust = 1;
				let depth = 1;
				
				switch(tempLevel) {
					case 1:
						thrust = 5;
						depth = 2;
						loopRunningSec = 4;
						loopPauseSec = 1;
					break;
					case 2:
						thrust = 7;
						depth = 2;
						loopRunningSec = 6;
						loopPauseSec = 1;
					break;
					case 3:
						thrust = 12;
						depth = 1;
						loopRunningSec = 6;
						loopPauseSec = 1;
					break;
					case 4:
						thrust = 14;
						depth = 1;
						loopRunningSec = 6;
						loopPauseSec = 1;
					break;
				}
				
				let convertedThrust = ConfigManager.convertIntoRaidThrusting(thrust, toyNum);
				lovense.sendRemSolaceCommand(convertedThrust, depth, time, toyNum, loopRunningSec, loopPauseSec);
			} 
			else {		
				let interval = 200;
				let arr = [];
				
				switch(tempLevel) {
					case 1:
						arr = [2,4,7,7,7,6,5,7,7,0,0,0,0];
					break;
					case 2:
						arr = [2,5,9,8,9,8,5,9,9,3,9,3,9,7,9,9,0,0,0,0];
					break;
					case 3:
						arr = [5,6,9,8,13,11,7,13,13,5,13,5,13,10,10,13,13,10,10,13,13,0,0,0];
					break;
					case 4:
						arr = [5,6,9,8,15,12,7,15,15,5,15,5,15,12,12,15,15,12,12,15,15,0,0,0];
					break;
				}
				
				let convertedStr = ConfigManager.convertIntoRaidStrengthString(arr, toyNum);
				lovense.sendRemCommand(convertedStr, interval, time, toyNum);
				toy.being_RAIDed = RAIDING_CUNNILINGUS_ID;
				if(time) toy.RAID_timeUntilEnd = $gameSystem.playtime() + time;
				else toy.RAID_timeUntilEnd = $gameSystem.playtime() + 9999;
			}
		}
	}
};

Game_Actor.prototype.raidPussyPet = function(isMasSkill, isStripperSkill) {
    if(!lovense.isConnected()) return;
	
	let generalReactionScore = this.getReactionScore();
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	
	let level = 1;
	if(generallvl3) level = 3;
	else if(generallvl2) level = 2;
	
	const connectedToys = lovense.getToys();
	for(let toyNum = 0; toyNum < connectedToys.length; ++toyNum) {
		let useToy = false;
		let tempLevel = level;
		let toy = connectedToys[toyNum];
		if(!ConfigManager.raidEnable) useToy = true;
		else {
			if(toy.RAID_type_pussy) {
				useToy = true;
				tempLevel++;
			}
			else {
				if(ConfigManager.raidPussyArray.length > 0) {
					useToy = false;
				}
				else if(toy.RAID_party) {
					useToy = true;
				}
				else {
					useToy = false;
				}
			}
		}
		
		if(useToy) {
			let time = ConfigManager.convertRaidTime(15, toyNum);
			
			if(toy.name === 'solace') {
				let loopRunningSec = 0;
				let loopPauseSec = 0;
				let thrust = 1;
				let depth = 1;
				
				switch(tempLevel) {
					case 1:
						thrust = 3;
						depth = 3;
						loopRunningSec = 4;
						loopPauseSec = 1;
					break;
					case 2:
						thrust = 6;
						depth = 3;
						loopRunningSec = 3;
						loopPauseSec = 1;
					break;
					case 3:
						thrust = 9;
						depth = 2;
						loopRunningSec = 3;
						loopPauseSec = 1;
					break;
					case 4:
						thrust = 12;
						depth = 2;
						loopRunningSec = 3;
						loopPauseSec = 1;
					break;
				}
				
				let convertedThrust = ConfigManager.convertIntoRaidThrusting(thrust, toyNum);
				lovense.sendRemSolaceCommand(convertedThrust, depth, time, toyNum, loopRunningSec, loopPauseSec);
			} 
			else {		
				let interval = 150;
				let arr = [];
				
				if(isStripperSkill) {
					time = 0;
					tempLevel = Math.max(1, tempLevel - 1);
				}
				
				switch(tempLevel) {
					case 1:
						arr = [3,5,3,6,6,0,0];
					break;
					case 2:
						arr = [4,7,4,9,9,0,0,7,9,4,9,0];
					break;
					case 3:
						arr = [5,9,10,5,10,2];
					break;
					case 4:
						arr = [7,11,14,7,14,3];
					break;
				}
				
				let convertedStr = ConfigManager.convertIntoRaidStrengthString(arr, toyNum);
				lovense.sendRemCommand(convertedStr, interval, time, toyNum);
				if(isMasSkill)
					toy.being_RAIDed = RAIDING_PUSSY_PET_MAS_ID;
				else if(isStripperSkill)
					toy.being_RAIDed = RAIDING_PUSSY_PET_STRIPPER_ID;
				else
					toy.being_RAIDed = RAIDING_OTHER_ID;
				if(time) toy.RAID_timeUntilEnd = $gameSystem.playtime() + time;
				else toy.RAID_timeUntilEnd = $gameSystem.playtime() + 9999;
			}
		}
	}
};

Game_Actor.prototype.raidPussyToy = function() {
    if(!lovense.isConnected()) return;
	
	let generalReactionScore = this.getReactionScore();
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	
	let level = 1;
	if(generallvl3) level = 3;
	else if(generallvl2) level = 2;
	
	const connectedToys = lovense.getToys();
	for(let toyNum = 0; toyNum < connectedToys.length; ++toyNum) {
		let useToy = false;
		let tempLevel = level;
		let toy = connectedToys[toyNum];
		if(!ConfigManager.raidEnable) useToy = true;
		else {
			if(toy.RAID_type_pussy) {
				useToy = true;
				tempLevel++;
			}
			else {
				if(ConfigManager.raidPussyArray.length > 0) {
					useToy = false;
				}
				else if(toy.RAID_party) {
					useToy = true;
				}
				else {
					useToy = false;
				}
			}
		}
		
		if(useToy) {
			let time = ConfigManager.convertRaidTime(20, toyNum);
			
			if(toy.name === 'solace') {
				let loopRunningSec = 5;
				let loopPauseSec = 1;
				let thrust = 1;
				let depth = 1;
				
				switch(tempLevel) {
					case 1:
						thrust = 5;
						depth = 3;
					break;
					case 2:
						thrust = 7;
						depth = 3;
					break;
					case 3:
						thrust = 9;
						depth = 3;
					break;
					case 4:
						thrust = 12;
						depth = 3;
					break;
				}
				
				let convertedThrust = ConfigManager.convertIntoRaidThrusting(thrust, toyNum);
				lovense.sendRemSolaceCommand(convertedThrust, depth, time, toyNum, loopRunningSec, loopPauseSec);
			} 
			else {		
				let interval = 200;
				let arr = [];
				
				switch(tempLevel) {
					case 1:
						arr = [4,5,6,6,6,6,6,6,6,6];
					break;
					case 2:
						arr = [5,7,9,9,9,9,9,9,9,9];
					break;
					case 3:
						arr = [6,8,11,11,12,12,11,11,11,11,12,12,12,12];
					break;
					case 4:
						arr = [7,9,13,13,15,15,13,13,12,12,15,15,15,11];
					break;
				}
				
				let convertedStr = ConfigManager.convertIntoRaidStrengthString(arr, toyNum);
				lovense.sendRemCommand(convertedStr, interval, time, toyNum);
				toy.being_RAIDed = RAIDING_PUSSY_TOY_ID;
				if(time) toy.RAID_timeUntilEnd = $gameSystem.playtime() + time;
				else toy.RAID_timeUntilEnd = $gameSystem.playtime() + 9999;
			}
		}
	}
};

Game_Actor.prototype.raidPussySex = function(raidLevelBoosted) {
    if(!lovense.isConnected()) return;
	
	let sexSkillReactionScore = this.reactionScore_pussySexPassive();
	let sexlvl3 = sexSkillReactionScore >= VAR_FP_SEX_RS_LV3_REQ;
	let sexlvl2 = sexSkillReactionScore >= VAR_FP_SEX_RS_LV2_REQ;
	
	let level = 1;
	if(sexlvl3) level = 3;
	else if(sexlvl2) level = 2;
	
	if(raidLevelBoosted) level++;
	
	const connectedToys = lovense.getToys();
	for(let toyNum = 0; toyNum < connectedToys.length; ++toyNum) {
		let useToy = false;
		let tempLevel = level;
		let toy = connectedToys[toyNum];
		if(!ConfigManager.raidEnable) useToy = true;
		else {
			if(toy.RAID_type_pussy) {
				useToy = true;
				tempLevel++;
			}
			else {
				if(ConfigManager.raidPussyArray.length > 0) {
					useToy = false;
				}
				else if(toy.RAID_party) {
					useToy = true;
				}
				else {
					useToy = false;
				}
			}
		}
		
		if(useToy) {
			let time = 0;
			
			if(toy.name === 'solace') {
				let loopRunningSec = 0;
				let loopPauseSec = 0;
				let thrust = 1;
				let depth = 1;
				
				switch(tempLevel) {
					case 1:
						thrust = 6;
						depth = 3;
					break;
					case 2:
						thrust = 8;
						depth = 3;
					break;
					case 3:
						thrust = 11;
						depth = 3;
					break;
					case 4:
					case 5:
						thrust = 13;
						depth = 3;
					break;
				}
				
				let convertedThrust = ConfigManager.convertIntoRaidThrusting(thrust, toyNum);
				lovense.sendRemSolaceCommand(convertedThrust, depth, time, toyNum, loopRunningSec, loopPauseSec);
			} 
			else {		
				let interval = 166;
				let arr = [];
				
				switch(tempLevel) {
					case 1:
						interval = 200;
						arr = [5,7,4,4,1,2];
					break;
					case 2:
						arr = [5,9,7,4,9,1,2];
					break;
					case 3:
						arr = [7,11,9,5,13,9,5,13,14,14,1,4];
					break;
					case 4:
						arr = [8,14,12,7,17,12,7,16,17,17,1,4];
					break;
					case 5:
						arr = [8,14,17,20,7,20,15,7,7,18,20,20,2,5];
					break;
				}
				
				let convertedStr = ConfigManager.convertIntoRaidStrengthString(arr, toyNum);
				lovense.sendRemCommand(convertedStr, interval, time, toyNum);
				toy.being_RAIDed = RAIDING_PUSSY_SEX_ID;
				if(time) toy.RAID_timeUntilEnd = $gameSystem.playtime() + time;
				else toy.RAID_timeUntilEnd = $gameSystem.playtime() + 9999;
			}
		}
	}
};

Game_Actor.prototype.raidButtPet = function(isMasSkill, isStripperSkill) {
    if(!lovense.isConnected()) return;
	
	let generalReactionScore = this.getReactionScore();
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	
	let level = 1;
	if(generallvl3) level = 3;
	else if(generallvl2) level = 2;
	
	const connectedToys = lovense.getToys();
	for(let toyNum = 0; toyNum < connectedToys.length; ++toyNum) {
		let useToy = false;
		let tempLevel = level;
		let toy = connectedToys[toyNum];
		if(!ConfigManager.raidEnable) useToy = true;
		else {
			if(toy.RAID_type_anal) {
				useToy = true;
				tempLevel++;
			}
			else {
				if(ConfigManager.raidAnalArray.length > 0) {
					useToy = false;
				}
				else if(toy.RAID_party) {
					useToy = true;
				}
				else {
					useToy = false;
				}
			}
		}
		
		if(useToy) {
			let time = ConfigManager.convertRaidTime(15, toyNum);
			
			if(toy.name === 'solace') {
				let loopRunningSec = 3;
				let loopPauseSec = 1;
				let thrust = 1;
				let depth = 1;
				
				switch(tempLevel) {
					case 1:
						thrust = 2;
						depth = 3;
					break;
					case 2:
						thrust = 3;
						depth = 3;
					break;
					case 3:
						thrust = 5;
						depth = 3;
						loopRunningSec = 4;
					break;
					case 4:
						thrust = 6;
						depth = 3;
						loopRunningSec = 4;
					break;
				}
				
				let convertedThrust = ConfigManager.convertIntoRaidThrusting(thrust, toyNum);
				lovense.sendRemSolaceCommand(convertedThrust, depth, time, toyNum, loopRunningSec, loopPauseSec);
			} 
			else {		
				let interval = 333;
				let arr = [];
				
				if(isStripperSkill) {
					time = 0;
					tempLevel = Math.max(1, tempLevel - 1);
				}
				
				switch(tempLevel) {
					case 1:
						arr = [3,3,3,3,2,2,3,3,3,2];
					break;
					case 2:
						arr = [4,5,5,5,3,3,5,5,5,2];
					break;
					case 3:
						arr = [4,6,7,7,5,5,7,8,7,2];
					break;
					case 4:
						arr = [5,7,8,8,6,6,8,9,9,2];
					break;
				}
				
				let convertedStr = ConfigManager.convertIntoRaidStrengthString(arr, toyNum);
				lovense.sendRemCommand(convertedStr, interval, time, toyNum);
				if(isStripperSkill)
					toy.being_RAIDed = RAIDING_BUTT_PET_STRIPPER_ID;
				else
					toy.being_RAIDed = RAIDING_OTHER_ID;
				if(time) toy.RAID_timeUntilEnd = $gameSystem.playtime() + time;
				else toy.RAID_timeUntilEnd = $gameSystem.playtime() + 9999;
			}
		}
	}
};

Game_Actor.prototype.raidAnalPet = function(isMasSkill) {
    if(!lovense.isConnected()) return;
	
	let generalReactionScore = this.getReactionScore();
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	
	let level = 1;
	if(generallvl3) level = 3;
	else if(generallvl2) level = 2;
	
	const connectedToys = lovense.getToys();
	for(let toyNum = 0; toyNum < connectedToys.length; ++toyNum) {
		let useToy = false;
		let tempLevel = level;
		let toy = connectedToys[toyNum];
		if(!ConfigManager.raidEnable) useToy = true;
		else {
			if(toy.RAID_type_anal) {
				useToy = true;
				tempLevel++;
			}
			else {
				if(ConfigManager.raidAnalArray.length > 0) {
					useToy = false;
				}
				else if(toy.RAID_party) {
					useToy = true;
				}
				else {
					useToy = false;
				}
			}
		}
		
		if(useToy) {
			let time = ConfigManager.convertRaidTime(15, toyNum);
			
			if(toy.name === 'solace') {
				let loopRunningSec = 4;
				let loopPauseSec = 1;
				let thrust = 1;
				let depth = 1;
				
				switch(tempLevel) {
					case 1:
						thrust = 5;
						depth = 1;
					break;
					case 2:
						thrust = 6;
						depth = 1;
					break;
					case 3:
						thrust = 8;
						depth = 1;
						loopRunningSec = 3;
					break;
					case 4:
						thrust = 9;
						depth = 1;
						loopRunningSec = 3;
					break;
				}
				
				let convertedThrust = ConfigManager.convertIntoRaidThrusting(thrust, toyNum);
				lovense.sendRemSolaceCommand(convertedThrust, depth, time, toyNum, loopRunningSec, loopPauseSec);
			} 
			else {		
				let interval = 166;
				let arr = [];
				
				switch(tempLevel) {
					case 1:
						interval = 200;
						arr = [1,3,5,3,0,0];
					break;
					case 2:
						arr = [3,5,7,8,5,0,0];
					break;
					case 3:
						arr = [4,7,10,11,7,0,0];
					break;
					case 4:
						arr = [6,10,12,14,11,0,0];
					break;
				}
				
				let convertedStr = ConfigManager.convertIntoRaidStrengthString(arr, toyNum);
				lovense.sendRemCommand(convertedStr, interval, time, toyNum);
				if(isMasSkill)
					toy.being_RAIDed = RAIDING_ANAL_PET_MAS_ID;
				else
					toy.being_RAIDed = RAIDING_OTHER_ID;
				if(time) toy.RAID_timeUntilEnd = $gameSystem.playtime() + time;
				else toy.RAID_timeUntilEnd = $gameSystem.playtime() + 9999;
			}
		}
	}
};

Game_Actor.prototype.raidAnalToy = function() {
    if(!lovense.isConnected()) return;
	
	let generalReactionScore = this.getReactionScore();
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	
	let level = 1;
	if(generallvl3) level = 3;
	else if(generallvl2) level = 2;
	
	const connectedToys = lovense.getToys();
	for(let toyNum = 0; toyNum < connectedToys.length; ++toyNum) {
		let useToy = false;
		let tempLevel = level;
		let toy = connectedToys[toyNum];
		if(!ConfigManager.raidEnable) useToy = true;
		else {
			if(toy.RAID_type_anal) {
				useToy = true;
				tempLevel++;
			}
			else {
				if(ConfigManager.raidAnalArray.length > 0) {
					useToy = false;
				}
				else if(toy.RAID_party) {
					useToy = true;
				}
				else {
					useToy = false;
				}
			}
		}
		
		if(useToy) {
			let time = ConfigManager.convertRaidTime(20, toyNum);
			
			if(toy.name === 'solace') {
				let loopRunningSec = 3;
				let loopPauseSec = 1;
				let thrust = 1;
				let depth = 1;
				
				switch(tempLevel) {
					case 1:
						thrust = 8;
						depth = 2;
					break;
					case 2:
						thrust = 10;
						depth = 2;
						loopRunningSec = 4;
					break;
					case 3:
						thrust = 12;
						depth = 2;
						loopRunningSec = 4;
					break;
					case 4:
						thrust = 13;
						depth = 2;
						loopRunningSec = 4;
					break;
				}
				
				let convertedThrust = ConfigManager.convertIntoRaidThrusting(thrust, toyNum);
				lovense.sendRemSolaceCommand(convertedThrust, depth, time, toyNum, loopRunningSec, loopPauseSec);
			} 
			else {	
				let interval = 166;
				let arr = [];
				
				switch(tempLevel) {
					case 1:
						interval = 200;
						arr = [5,2,5,2,5,1];
					break;
					case 2:
						arr = [7,3,8,3,7,2];
					break;
					case 3:
						arr = [10,4,11,4,10,2];
					break;
					case 4:
						arr = [13,6,15,6,13,4];
					break;
				}
				
				let convertedStr = ConfigManager.convertIntoRaidStrengthString(arr, toyNum);
				lovense.sendRemCommand(convertedStr, interval, time, toyNum);
				toy.being_RAIDed = RAIDING_ANAL_TOY_ID;
				if(time) toy.RAID_timeUntilEnd = $gameSystem.playtime() + time;
				else toy.RAID_timeUntilEnd = $gameSystem.playtime() + 9999;
			}
		}
	}
};

Game_Actor.prototype.raidAnalSex = function(raidLevelBoosted) {
    if(!lovense.isConnected()) return;
	
	let sexSkillReactionScore = this.reactionScore_analSexPassive();
	let sexlvl3 = sexSkillReactionScore >= VAR_FP_SEX_RS_LV3_REQ;
	let sexlvl2 = sexSkillReactionScore >= VAR_FP_SEX_RS_LV2_REQ;
	
	let level = 1;
	if(sexlvl3) level = 3;
	else if(sexlvl2) level = 2;
	
	if(raidLevelBoosted) level++;
	
	const connectedToys = lovense.getToys();
	for(let toyNum = 0; toyNum < connectedToys.length; ++toyNum) {
		let useToy = false;
		let tempLevel = level;
		let toy = connectedToys[toyNum];
		if(!ConfigManager.raidEnable) useToy = true;
		else {
			if(toy.RAID_type_anal) {
				useToy = true;
				tempLevel++;
			}
			else {
				if(ConfigManager.raidAnalArray.length > 0) {
					useToy = false;
				}
				else if(toy.RAID_party) {
					useToy = true;
				}
				else {
					useToy = false;
				}
			}
		}
		
		if(useToy) {
			let time = 0;
			
			if(toy.name === 'solace') {
				let loopRunningSec = 0;
				let loopPauseSec = 0;
				let thrust = 1;
				let depth = 1;
				
				switch(tempLevel) {
					case 1:
						thrust = 8;
						depth = 2;
						loopRunningSec = 5;
						loopPauseSec = 1;
					break;
					case 2:
						thrust = 11;
						depth = 2;
					break;
					case 3:
						thrust = 13;
						depth = 2;
					break;
					case 4:
					case 5:
						thrust = 14;
						depth = 2;
					break;
				}
				
				let convertedThrust = ConfigManager.convertIntoRaidThrusting(thrust, toyNum);
				lovense.sendRemSolaceCommand(convertedThrust, depth, time, toyNum, loopRunningSec, loopPauseSec);
			} 
			else {		
				let interval = 166;
				let arr = [];
				
				switch(tempLevel) {
					case 1:
						interval = 200;
						arr = [4,7,5,7,4];
					break;
					case 2:
						arr = [5,9,7,9,9,5];
					break;
					case 3:
						arr = [7,12,9,13,13,7,14,14];
					break;
					case 4:
						arr = [8,15,11,16,16,12,17,17];
					break;
					case 5:
						arr = [10,20,14,18,18,12,19,19];
					break;
				}
				
				let convertedStr = ConfigManager.convertIntoRaidStrengthString(arr, toyNum);
				lovense.sendRemCommand(convertedStr, interval, time, toyNum);
				toy.being_RAIDed = RAIDING_ANAL_SEX_ID;
				if(time) toy.RAID_timeUntilEnd = $gameSystem.playtime() + time;
				else toy.RAID_timeUntilEnd = $gameSystem.playtime() + 9999;
			}
		}
	}
};

Game_Actor.prototype.raidRimjob = function() {
    if(!lovense.isConnected()) return;
	
	let sexSkillReactionScore = this.reactionScore_rimjobPassive();
	let sexlvl3 = sexSkillReactionScore >= VAR_FP_SEX_RS_LV3_REQ;
	let sexlvl2 = sexSkillReactionScore >= VAR_FP_SEX_RS_LV2_REQ;
	
	let level = 1;
	if(sexlvl3) level = 3;
	else if(sexlvl2) level = 2;
	
	const connectedToys = lovense.getToys();
	for(let toyNum = 0; toyNum < connectedToys.length; ++toyNum) {
		let useToy = false;
		let tempLevel = level;
		let toy = connectedToys[toyNum];
		if(!ConfigManager.raidEnable) useToy = true;
		else {
			if(toy.RAID_type_rimjob) {
				useToy = true;
				tempLevel++;
			}
			else if(toy.RAID_type_mouth || toy.RAID_type_masochism) {
				useToy = true;
			}
			else {
				if(ConfigManager.raidRimjobArray.length > 0 || ConfigManager.raidMouthArray.length > 0 || ConfigManager.raidMasochismArray.length > 0) {
					useToy = false;
				}
				else if(toy.RAID_party) {
					useToy = true;
				}
				else {
					useToy = false;
				}
			}
		}
		
		if(useToy) {
			let time = 0;
			
			if(toy.name === 'solace') {
				let loopRunningSec = 0;
				let loopPauseSec = 0;
				let thrust = 1;
				let depth = 1;
				
				switch(tempLevel) {
					case 1:
						thrust = 3;
						depth = 1;
						loopRunningSec = 2;
						loopPauseSec = 2;
					break;
					case 2:
						thrust = 5;
						depth = 1;
						loopRunningSec = 3;
						loopPauseSec = 2;
					break;
					case 3:
						thrust = 8;
						depth = 1;
						loopRunningSec = 4;
						loopPauseSec = 2;
					break;
					case 4:
						thrust = 9;
						depth = 1;
						loopRunningSec = 4;
						loopPauseSec = 2;
					break;
				}
				
				let convertedThrust = ConfigManager.convertIntoRaidThrusting(thrust, toyNum);
				lovense.sendRemSolaceCommand(convertedThrust, depth, time, toyNum, loopRunningSec, loopPauseSec);
			} 
			else {		
				let interval = 200;
				let arr = [];
				
				switch(tempLevel) {
					case 1:
						arr = [2,4,6,4,1,1,1];
					break;
					case 2:
						arr = [3,6,8,7,1,1,1];
					break;
					case 3:
						interval = 166;
						arr = [4,8,10,9,1];
					break;
					case 4:
						interval = 166;
						arr = [6,10,13,11,1];
					break;
				}
				
				let convertedStr = ConfigManager.convertIntoRaidStrengthString(arr, toyNum);
				lovense.sendRemCommand(convertedStr, interval, time, toyNum);
				toy.being_RAIDed = RAIDING_RIMJOB_ID;
				if(time) toy.RAID_timeUntilEnd = $gameSystem.playtime() + time;
				else toy.RAID_timeUntilEnd = $gameSystem.playtime() + 9999;
			}
		}
	}
};

Game_Actor.prototype.raidButtSpank = function() {
    if(!lovense.isConnected()) return;
	
	let generalReactionScore = this.getReactionScore();
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	
	let level = 1;
	if(generallvl3) level = 3;
	else if(generallvl2) level = 2;
	
	const connectedToys = lovense.getToys();
	for(let toyNum = 0; toyNum < connectedToys.length; ++toyNum) {
		let useToy = false;
		let tempLevel = level;
		let toy = connectedToys[toyNum];
		if(!ConfigManager.raidEnable) useToy = true;
		else {
			if(toy.RAID_type_masochism) {
				useToy = true;
				tempLevel++;
			}
			else {
				if(ConfigManager.raidMasochismArray.length > 0) {
					useToy = false;
				}
				else if(toy.RAID_party) {
					useToy = true;
				}
				else {
					useToy = false;
				}
			}
		}
		
		if(useToy) {
			let interval = 133;
			let time = ConfigManager.convertRaidTime(7, toyNum);
			let arr = [];
			
			switch(tempLevel) {
				case 1:
					arr = [6,2,0,5,6,7,0,0,0];
				break;
				case 2:
					arr = [8,4,0,6,9,10,1,0,0];
				break;
				case 3:
					arr = [10,5,1,8,11,12,3,1,1];
				break;
				case 4:
					arr = [15,1,12,15,15,6,3,1];
				break;
			}
			
			let convertedStr = ConfigManager.convertIntoRaidStrengthString(arr, toyNum);
			lovense.sendRemCommand(convertedStr, interval, time, toyNum);
			toy.being_RAIDed = RAIDING_OTHER_ID;
			if(time) toy.RAID_timeUntilEnd = $gameSystem.playtime() + time;
			else toy.RAID_timeUntilEnd = $gameSystem.playtime() + 9999;
		}
	}
};

Game_Actor.prototype.raidMasochisticCombat = function() {
    if(!lovense.isConnected()) return;
	
	let masoLvl = this.masochismLvl();
	if(masoLvl < 1) return;

	let level = 1;
	if(masoLvl > 5) level = 3;
	else if(masoLvl > 3) level = 2;
	
	const connectedToys = lovense.getToys();
	for(let toyNum = 0; toyNum < connectedToys.length; ++toyNum) {
		let useToy = false;
		let tempLevel = level;
		let toy = connectedToys[toyNum];
		if(!ConfigManager.raidEnable) useToy = true;
		else {
			if(toy.RAID_type_masochism) {
				useToy = true;
				tempLevel++;
			}
			else {
				if(ConfigManager.raidMasochismArray.length > 0) {
					useToy = false;
				}
				else if(toy.RAID_party) {
					useToy = true;
				}
				else {
					useToy = false;
				}
			}
		}
		
		if(useToy) {
			let time = ConfigManager.convertRaidTime(5, toyNum);
			
			if(toy.name === 'solace') {
				let loopRunningSec = 2;
				let loopPauseSec = 1;
				let thrust = 1;
				let depth = 1;
				
				switch(tempLevel) {
					case 1:
						thrust = 3;
						depth = 3;
					break;
					case 2:
						thrust = 4;
						depth = 3;
					break;
					case 3:
						thrust = 5;
						depth = 3;
					break;
					case 4:
						thrust = 6;
						depth = 3;
					break;
				}
				
				let convertedThrust = ConfigManager.convertIntoRaidThrusting(thrust, toyNum);
				lovense.sendRemSolaceCommand(convertedThrust, depth, time, toyNum, loopRunningSec, loopPauseSec);
			} 
			else {		
				let interval = 200;
				let arr = [];
				
				switch(tempLevel) {
					case 1:
						arr = [2,5,0,0,0];
					break;
					case 2:
						arr = [4,8,1,2,1];
					break;
					case 3:
						arr = [5,11,1,3,1];
					break;
					case 4:
						arr = [6,13,1,4,1];
					break;
				}
				
				let convertedStr = ConfigManager.convertIntoRaidStrengthString(arr, toyNum);
				lovense.sendRemCommand(convertedStr, interval, time, toyNum);
				toy.being_RAIDed = RAIDING_OTHER_ID;
				if(time) toy.RAID_timeUntilEnd = $gameSystem.playtime() + time;
				else toy.RAID_timeUntilEnd = $gameSystem.playtime() + 9999;
			}
		}
	}
};

Game_Actor.prototype.raidTalk = function(raidLevelBoosted) {
    if(!lovense.isConnected()) return;
	
	if(this.talkSensitivity() == 0) return;
	
	let generalReactionScore = this.getReactionScore();
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	
	let level = 1;
	if(generallvl3) level = 3;
	else if(generallvl2) level = 2;
	
	if(raidLevelBoosted) level++;
	
	const connectedToys = lovense.getToys();
	for(let toyNum = 0; toyNum < connectedToys.length; ++toyNum) {
		let useToy = false;
		let tempLevel = level;
		let toy = connectedToys[toyNum];
		if(!ConfigManager.raidEnable) useToy = true;
		else {
			if(toy.RAID_type_masochism) {
				useToy = true;
				tempLevel++;
			}
			else {
				if(ConfigManager.raidMasochismArray.length > 0) {
					useToy = false;
				}
				else if(toy.RAID_party) {
					useToy = true;
				}
				else {
					useToy = false;
				}
			}
		}
		
		if(useToy) {
			let time = ConfigManager.convertRaidTime(5, toyNum);
			
			if(toy.name === 'solace') {
				let loopRunningSec = 2;
				let loopPauseSec = 3;
				let thrust = 1;
				let depth = 1;
				
				switch(tempLevel) {
					case 1:
						thrust = 2;
						depth = 2;
					break;
					case 2:
						thrust = 3;
						depth = 2;
					break;
					case 3:
						thrust = 4;
						depth = 2;
					break;
					case 4:
						thrust = 5;
						depth = 2;
					break;
					case 5:
						thrust = 6;
						depth = 2;
					break;
				}
				
				let convertedThrust = ConfigManager.convertIntoRaidThrusting(thrust, toyNum);
				lovense.sendRemSolaceCommand(convertedThrust, depth, time, toyNum, loopRunningSec, loopPauseSec);
			} 
			else {		
				let interval = 250;
				let arr = [];
				
				switch(tempLevel) {
					case 1:
						arr = [2,1,2,0];
					break;
					case 2:
						time *= 2;
						arr = [3,2,3,1];
					break;
					case 3:
						time *= 2;
						arr = [5,4,5,2];
					break;
					case 4:
						time *= 2;
						arr = [7,6,7,3];
					break;
					case 5:
						time *= 2;
						arr = [8,6,9,4];
					break;
				}
				
				let convertedStr = ConfigManager.convertIntoRaidStrengthString(arr, toyNum);
				lovense.sendRemCommand(convertedStr, interval, time, toyNum);
				toy.being_RAIDed = RAIDING_OTHER_ID;
				if(time) toy.RAID_timeUntilEnd = $gameSystem.playtime() + time;
				else toy.RAID_timeUntilEnd = $gameSystem.playtime() + 9999;
			}
		}
	}
};

Game_Actor.prototype.raidSight = function(raidLevelBoosted, isNightMode) {
    if(!lovense.isConnected()) return;
	
	if(this.sightSensitivity() == 0) return;
	
	let generalReactionScore = this.getReactionScore();
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	
	let level = 1;
	if(generallvl3) level = 3;
	else if(generallvl2) level = 2;
	
	if(raidLevelBoosted) level++;
	
	const connectedToys = lovense.getToys();
	for(let toyNum = 0; toyNum < connectedToys.length; ++toyNum) {
		let useToy = false;
		let tempLevel = level;
		let toy = connectedToys[toyNum];
		if(!ConfigManager.raidEnable) useToy = true;
		else {
			if(toy.RAID_type_exhibitionism) {
				useToy = true;
				tempLevel++;
			}
			else {
				if(isNightMode) {
					useToy = false;
				}
				else if(ConfigManager.raidExhibitionismArray.length > 0) {
					useToy = false;
				}
				else if(toy.RAID_party) {
					useToy = true;
				}
				else {
					useToy = false;
				}
			}
		}
		
		if(useToy) {
			let time = ConfigManager.convertRaidTime(6, toyNum);
			
			if(toy.name === 'solace') {
				let loopRunningSec = 3;
				let loopPauseSec = 3;
				let thrust = 1;
				let depth = 1;
				
				switch(tempLevel) {
					case 1:
						thrust = 2;
						depth = 1;
					break;
					case 2:
						thrust = 3;
						depth = 1;
						loopPauseSec = 2;
					break;
					case 3:
						thrust = 4;
						depth = 1;
						loopRunningSec = 0;
						loopPauseSec = 0;
					break;
					case 4:
					case 5:
						thrust = 5;
						depth = 1;
						loopRunningSec = 0;
						loopPauseSec = 0;
					break;
				}
				
				let convertedThrust = ConfigManager.convertIntoRaidThrusting(thrust, toyNum);
				lovense.sendRemSolaceCommand(convertedThrust, depth, time, toyNum, loopRunningSec, loopPauseSec);
			} 
			else {		
				let interval = 333;
				let arr = [];
				
				if(isNightMode) {
					time = 0;
					tempLevel = Math.max(1, tempLevel - 2);
				}
				
				switch(tempLevel) {
					case 1:
						arr = [1,2,2,3,2];
					break;
					case 2:
						time *= 2;
						arr = [2,3,3,5,4];
					break;
					case 3:
						time *= 3;
						arr = [3,5,5,7,5];
					break;
					case 4:
						time *= 3;
						arr = [5,7,7,10,8];
					break;
					case 5:
						time *= 3;
						arr = [6,8,8,12,8];
					break;
				}
				
				let convertedStr = ConfigManager.convertIntoRaidStrengthString(arr, toyNum);
				lovense.sendRemCommand(convertedStr, interval, time, toyNum);
				if(isNightMode)
					toy.being_RAIDed = RAIDING_SIGHT_NIGHTMODE_ID;
				else
					toy.being_RAIDed = RAIDING_OTHER_ID;
				if(time) toy.RAID_timeUntilEnd = $gameSystem.playtime() + time;
				else toy.RAID_timeUntilEnd = $gameSystem.playtime() + 9999;
			}
		}
	}
};


Game_Actor.prototype.raidSadisticCombat = function() {
    if(!lovense.isConnected()) return;
	
	let sadoLvl = this.sadismLvl();
	if(sadoLvl < 1) return;

	let level = 1;
	if(sadoLvl > 5) level = 3;
	else if(sadoLvl > 3) level = 2;
	
	const connectedToys = lovense.getToys();
	for(let toyNum = 0; toyNum < connectedToys.length; ++toyNum) {
		let useToy = false;
		let tempLevel = level;
		let toy = connectedToys[toyNum];
		if(!ConfigManager.raidEnable) useToy = true;
		else {
			if(toy.RAID_type_sadism) {
				useToy = true;
				tempLevel++;
			}
			else {
				if(ConfigManager.raidSadismArray.length > 0) {
					useToy = false;
				}
				else if(toy.RAID_party) {
					useToy = true;
				}
				else {
					useToy = false;
				}
			}
		}
		
		if(useToy) {
			let time = ConfigManager.convertRaidTime(4, toyNum);
			
			if(toy.name === 'solace') {
				let loopRunningSec = 2;
				let loopPauseSec = 2;
				let thrust = 1;
				let depth = 1;
				
				switch(tempLevel) {
					case 1:
						thrust = 3;
						depth = 3;
					break;
					case 2:
						thrust = 5;
						depth = 3;
					break;
					case 3:
						thrust = 7;
						depth = 3;
					break;
					case 4:
						thrust = 8;
						depth = 3;
					break;
				}
				
				let convertedThrust = ConfigManager.convertIntoRaidThrusting(thrust, toyNum);
				lovense.sendRemSolaceCommand(convertedThrust, depth, time, toyNum, loopRunningSec, loopPauseSec);
			} 
			else {		
				let interval = 200;
				let arr = [];
				
				switch(tempLevel) {
					case 1:
						arr = [5,3,1,0,0,0];
					break;
					case 2:
						arr = [7,5,2,0,0,0];
					break;
					case 3:
						arr = [10,8,4,0,0,0];
					break;
					case 4:
						arr = [12,10,6,0,0];
					break;
				}
				
				let convertedStr = ConfigManager.convertIntoRaidStrengthString(arr, toyNum);
				lovense.sendRemCommand(convertedStr, interval, time, toyNum);
				toy.being_RAIDed = RAIDING_OTHER_ID;
				if(time) toy.RAID_timeUntilEnd = $gameSystem.playtime() + time;
				else toy.RAID_timeUntilEnd = $gameSystem.playtime() + 9999;
			}
		}
	}
};

Game_Actor.prototype.raidFootjob = function(raidLevelBoosted) {
    if(!lovense.isConnected()) return;
	
	let sexSkillReactionScore = this.reactionScore_footjobPassive();
	let sexlvl3 = sexSkillReactionScore >= VAR_FP_SEX_RS_LV3_REQ;
	let sexlvl2 = sexSkillReactionScore >= VAR_FP_SEX_RS_LV2_REQ;
	
	let level = 1;
	if(sexlvl3) level = 3;
	else if(sexlvl2) level = 2;
	
	if(raidLevelBoosted) level++;
	
	const connectedToys = lovense.getToys();
	for(let toyNum = 0; toyNum < connectedToys.length; ++toyNum) {
		let useToy = false;
		let tempLevel = level;
		let toy = connectedToys[toyNum];
		if(!ConfigManager.raidEnable) useToy = true;
		else {
			if(toy.RAID_type_sadism || toy.RAID_type_footjob) {
				useToy = true;
				tempLevel++;
			}
			else {
				if(ConfigManager.raidSadismArray.length > 0 || ConfigManager.raidFootjobArray.length > 0) {
					useToy = false;
				}
				else if(toy.RAID_party) {
					useToy = true;
				}
				else {
					useToy = false;
				}
			}
		}
		
		if(useToy) {
			let time = 0;
			
			if(toy.name === 'solace') {
				let loopRunningSec = 4;
				let loopPauseSec = 2;
				let thrust = 1;
				let depth = 1;
				
				switch(tempLevel) {
					case 1:
						thrust = 6;
						depth = 3;
					break;
					case 2:
						thrust = 8;
						depth = 3;
					break;
					case 3:
						thrust = 9;
						depth = 3;
					break;
					case 4:
						thrust = 11;
						depth = 3;
					break;
					case 5:
						thrust = 12;
						depth = 3;
					break;
				}
				
				let convertedThrust = ConfigManager.convertIntoRaidThrusting(thrust, toyNum);
				lovense.sendRemSolaceCommand(convertedThrust, depth, time, toyNum, loopRunningSec, loopPauseSec);
			} 
			else {		
				let interval = 200;
				let arr = [];
				
				switch(tempLevel) {
					case 1:
						arr = [1,1,5,4,5,2];
					break;
					case 2:
						arr = [3,3,8,6,8,6,8,4];
					break;
					case 3:
						interval = 166;
						arr = [5,4,9,12,10,12,10,7];
					break;
					case 4:
						interval = 166;
						arr = [7,5,12,15,13,16,12,8];
					break;
					case 5:
						interval = 166;
						arr = [9,5,13,18,14,19,14,10];
					break;
				}
				
				let convertedStr = ConfigManager.convertIntoRaidStrengthString(arr, toyNum);
				lovense.sendRemCommand(convertedStr, interval, time, toyNum);
				toy.being_RAIDed = RAIDING_FOOTJOB_ID;
				if(time) toy.RAID_timeUntilEnd = $gameSystem.playtime() + time;
				else toy.RAID_timeUntilEnd = $gameSystem.playtime() + 9999;
			}
		}
	}
};

Game_Actor.prototype.raidCockPet = function(raidLevelBoosted) {
    if(!lovense.isConnected()) return;
	
	let generalReactionScore = this.getReactionScore();
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	
	let level = 1;
	if(generallvl3) level = 3;
	else if(generallvl2) level = 2;
	
	if(raidLevelBoosted) level++;
	
	const connectedToys = lovense.getToys();
	for(let toyNum = 0; toyNum < connectedToys.length; ++toyNum) {
		let useToy = false;
		let tempLevel = level;
		let toy = connectedToys[toyNum];
		if(!ConfigManager.raidEnable) useToy = true;
		else {
			if(toy.RAID_type_hands) {
				useToy = true;
				tempLevel++;
			}
			else {
				if(ConfigManager.raidHandsArray.length > 0) {
					useToy = false;
				}
				else if(toy.RAID_party) {
					useToy = true;
				}
				else {
					useToy = false;
				}
			}
		}
		
		if(useToy) {
			let interval = 200;
			let time = ConfigManager.convertRaidTime(8, toyNum);
			let arr = [];
			
			switch(tempLevel) {
				case 1:
					arr = [2,4,4,0,0,0];
				break;
				case 2:
					arr = [2,6,6,0,0,0];
				break;
				case 3:
					interval = 166;
					arr = [4,9,9,4,0,0];
				break;
				case 4:
					interval = 166;
					arr = [6,11,12,10,0,0];
				break;
				case 5:
					interval = 166;
					arr = [7,12,14,10,0,0];
				break;
			}
			
			let convertedStr = ConfigManager.convertIntoRaidStrengthString(arr, toyNum);
			lovense.sendRemCommand(convertedStr, interval, time, toyNum);
			toy.being_RAIDed = RAIDING_OTHER_ID;
			if(time) toy.RAID_timeUntilEnd = $gameSystem.playtime() + time;
			else toy.RAID_timeUntilEnd = $gameSystem.playtime() + 9999;
		}
	}
};

Game_Actor.prototype.raidRightHandjob = function(raidLevelBoosted) {
    if(!lovense.isConnected()) return;
	
	let sexSkillReactionScore = this.reactionScore_handjobPassive();
	let sexlvl3 = sexSkillReactionScore >= VAR_FP_SEX_RS_LV3_REQ;
	let sexlvl2 = sexSkillReactionScore >= VAR_FP_SEX_RS_LV2_REQ;
	
	let level = 1;
	if(sexlvl3) level = 3;
	else if(sexlvl2) level = 2;
	
	if(raidLevelBoosted) level++;
	
	const connectedToys = lovense.getToys();
	for(let toyNum = 0; toyNum < connectedToys.length; ++toyNum) {
		let useToy = false;
		let tempLevel = level;
		let toy = connectedToys[toyNum];
		if(!ConfigManager.raidEnable) useToy = true;
		else {
			if(toy.RAID_type_hands) {
				useToy = true;
				tempLevel++;
			}
			else {
				if(ConfigManager.raidHandsArray.length > 0) {
					useToy = false;
				}
				else if(toy.RAID_party) {
					useToy = true;
				}
				else {
					useToy = false;
				}
			}
		}
		
		if(useToy) {
			let time = 0;
			
			if(toy.name === 'solace') {
				let loopRunningSec = 5;
				let loopPauseSec = 1;
				let thrust = 1;
				let depth = 1;
				
				switch(tempLevel) {
					case 1:
						thrust = 4;
						depth = 2;
					break;
					case 2:
						thrust = 6;
						depth = 2;
					break;
					case 3:
						thrust = 8;
						depth = 2;
					break;
					case 4:
						thrust = 9;
						depth = 2;
					break;
					case 5:
						thrust = 10;
						depth = 2;
					break;
				}
				
				let convertedThrust = ConfigManager.convertIntoRaidThrusting(thrust, toyNum);
				lovense.sendRemSolaceCommand(convertedThrust, depth, time, toyNum, loopRunningSec, loopPauseSec);
			} 
			else {		
				let interval = 200;
				let arr = [];
				
				switch(tempLevel) {
					case 1:
						arr = [2,3,4,4,3,2];
					break;
					case 2:
						arr = [2,4,5,6,4,3];
					break;
					case 3:
						interval = 166;
						arr = [4,6,8,9,10,8,6];
					break;
					case 4:
						interval = 166;
						arr = [8,10,12,14,13,11,9];
					break;
					case 5:
						interval = 166;
						arr = [9,11,14,16,15,13,10];
					break;
				}
				
				let convertedStr = ConfigManager.convertIntoRaidStrengthString(arr, toyNum);
				lovense.sendRemCommand(convertedStr, interval, time, toyNum);
				toy.being_RAIDed = RAIDING_RIGHT_HANDJOB_ID;
				if(time) toy.RAID_timeUntilEnd = $gameSystem.playtime() + time;
				else toy.RAID_timeUntilEnd = $gameSystem.playtime() + 9999;
			}
		}
	}
};

Game_Actor.prototype.raidLeftHandjob = function(raidLevelBoosted) {
    if(!lovense.isConnected()) return;
	
	let sexSkillReactionScore = this.reactionScore_handjobPassive();
	let sexlvl3 = sexSkillReactionScore >= VAR_FP_SEX_RS_LV3_REQ;
	let sexlvl2 = sexSkillReactionScore >= VAR_FP_SEX_RS_LV2_REQ;
	
	let level = 1;
	if(sexlvl3) level = 3;
	else if(sexlvl2) level = 2;
	
	if(raidLevelBoosted) level++;
	
	const connectedToys = lovense.getToys();
	for(let toyNum = 0; toyNum < connectedToys.length; ++toyNum) {
		let useToy = false;
		let tempLevel = level;
		let toy = connectedToys[toyNum];
		if(!ConfigManager.raidEnable) useToy = true;
		else {
			if(toy.RAID_type_hands) {
				useToy = true;
				tempLevel++;
			}
			else {
				if(ConfigManager.raidHandsArray.length > 0) {
					useToy = false;
				}
				else if(toy.RAID_party) {
					useToy = true;
				}
				else {
					useToy = false;
				}
			}
		}
		
		if(useToy) {
			let time = 0;
			
			if(toy.name === 'solace') {
				let loopRunningSec = 4;
				let loopPauseSec = 1;
				let thrust = 1;
				let depth = 1;
				
				switch(tempLevel) {
					case 1:
						thrust = 4;
						depth = 3;
					break;
					case 2:
						thrust = 5;
						depth = 3;
					break;
					case 3:
						thrust = 7;
						depth = 3;
					break;
					case 4:
					case 5:
						thrust = 8;
						depth = 3;
					break;
				}
				
				let convertedThrust = ConfigManager.convertIntoRaidThrusting(thrust, toyNum);
				lovense.sendRemSolaceCommand(convertedThrust, depth, time, toyNum, loopRunningSec, loopPauseSec);
			} 
			else {		
				let interval = 200;
				let arr = [];
				
				switch(tempLevel) {
					case 1:
						arr = [4,5,3,4,2];
					break;
					case 2:
						arr = [4,6,5,6,3,2];
					break;
					case 3:
						interval = 166;
						arr = [7,9,8,10,5,3];
					break;
					case 4:
						interval = 166;
						arr = [10,12,9,14,7,5];
					break;
					case 5:
						interval = 166;
						arr = [11,14,9,16,10,7];
					break;
				}
				
				let convertedStr = ConfigManager.convertIntoRaidStrengthString(arr, toyNum);
				lovense.sendRemCommand(convertedStr, interval, time, toyNum);
				toy.being_RAIDed = RAIDING_LEFT_HANDJOB_ID;
				if(time) toy.RAID_timeUntilEnd = $gameSystem.playtime() + time;
				else toy.RAID_timeUntilEnd = $gameSystem.playtime() + 9999;
			}
		}
	}
};

Game_Actor.prototype.raidOrgasm = function(numOfOrgasm) {
    if(!lovense.isConnected()) return;
	
	let orgasmReactionScore = this.getOrgasmReactionScore();
	let orgasmlvl3 = orgasmReactionScore >= VAR_DEF_RS_LV3_REQ;
	let orgasmlvl2 = orgasmReactionScore >= VAR_DEF_RS_LV2_REQ;
	
	let level = 1;
	if(orgasmlvl3) level = 3;
	else if(orgasmlvl2) level = 2;
	
	const connectedToys = lovense.getToys();
	for(let toyNum = 0; toyNum < connectedToys.length; ++toyNum) {
		let useToy = false;
		let tempLevel = level;
		let toy = connectedToys[toyNum];
		if(!ConfigManager.raidEnable) useToy = true;
		else {
			if(toy.RAID_orgasm) {
				useToy = true;
			}
			else {
				useToy = false;
			}
		}
		
		if(useToy) {
			let interval = 166;
			let time = ConfigManager.convertRaidTime(10 * numOfOrgasm, toyNum);
			let arr = [];
			
			switch(tempLevel) {
				case 1:
					arr = [5,8,9,9,9,8,4,1,0,1,1,0,0];
				break;
				case 2:
					arr = [7,12,15,16,14,15,13,8,3,1,2,3,1,1];
				break;
				case 3:
					arr = [9,15,20,20,18,20,16,12,6,2,4,5,3];
				break;
			}
			
			let convertedStr = ConfigManager.convertIntoRaidStrengthString(arr, toyNum);
			lovense.sendRemCommand(convertedStr, interval, time, toyNum);
			toy.being_RAIDed = RAIDING_ORGASM_ID;
			if(time) toy.RAID_timeUntilEnd = $gameSystem.playtime() + time;
			else toy.RAID_timeUntilEnd = $gameSystem.playtime() + 9999;
		}
	}
};

Game_Actor.prototype.raidOrgasmAfter = function(numOfOrgasm) {
    if(!lovense.isConnected()) return;
	
	let orgasmReactionScore = this.getOrgasmReactionScore();
	let orgasmlvl3 = orgasmReactionScore >= VAR_DEF_RS_LV3_REQ;
	let orgasmlvl2 = orgasmReactionScore >= VAR_DEF_RS_LV2_REQ;
	
	let level = 1;
	if(orgasmlvl3) level = 3;
	else if(orgasmlvl2) level = 2;
	
	const connectedToys = lovense.getToys();
	for(let toyNum = 0; toyNum < connectedToys.length; ++toyNum) {
		let useToy = false;
		let tempLevel = level;
		let toy = connectedToys[toyNum];
		if(!ConfigManager.raidEnable) useToy = true;
		else {
			if(toy.RAID_orgasm) {
				useToy = true;
			}
			else {
				useToy = false;
			}
		}
		
		if(useToy) {
			let interval = 200;
			let time = ConfigManager.convertRaidTime(20, toyNum);
			let arr = [];
			
			switch(tempLevel) {
				case 1:
					arr = [2,4,5,4,4,1,0,1,1,0,0];
				break;
				case 2:
					arr = [4,7,9,8,9,8,2,1,1,3,0];
				break;
				case 3:
					arr = [6,10,12,11,13,6,2,1,3,0];
				break;
			}
			
			let convertedStr = ConfigManager.convertIntoRaidStrengthString(arr, toyNum);
			lovense.sendRemCommand(convertedStr, interval, time, toyNum);
			toy.being_RAIDed = RAIDING_ORGASM_AFTER_ID;
			if(time) toy.RAID_timeUntilEnd = $gameSystem.playtime() + time;
			else toy.RAID_timeUntilEnd = $gameSystem.playtime() + 9999;
		}
	}
};

Game_Actor.prototype.raidSwallow = function(raidLevelBoosted) {
    if(!lovense.isConnected()) return;
	
	let swallowReactionScore = this.getSwallowReactionScore();
	let swallowlvl3 = swallowReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let swallowlvl2 = swallowReactionScore >= VAR_DEF_RS_LV2_REQ;
	
	let level = 1;
	if(swallowlvl3) level = 3;
	else if(swallowlvl2) level = 2;
	
	if(raidLevelBoosted) level++;
	
	const connectedToys = lovense.getToys();
	for(let toyNum = 0; toyNum < connectedToys.length; ++toyNum) {
		let useToy = false;
		let tempLevel = level;
		let toy = connectedToys[toyNum];
		if(!ConfigManager.raidEnable) useToy = true;
		else {
			if(toy.RAID_type_mouth) {
				useToy = true;
				tempLevel++;
			}
			else {
				if(ConfigManager.raidMouthArray.length > 0) {
					useToy = false;
				}
				else if(toy.RAID_party) {
					useToy = true;
				}
				else {
					useToy = false;
				}
			}
		}
		
		if(useToy) {
			let interval = 333;
			let time = ConfigManager.convertRaidTime(10, toyNum);
			let arr = [];
			
			switch(tempLevel) {
				case 1:
					arr = [4,5,4,4,7,7,3,4,3,8,9,3,3];
				break;
				case 2:
					arr = [5,6,5,4,10,10,4,6,3,10,12,4,3];
				break;
				case 3:
					arr = [7,10,6,5,13,13,7,10,4,13,15,15,8,3];
				break;
				case 4:
					arr = [7,12,8,6,15,16,10,13,6,15,20,20,12,4];
				break;
				case 5:
					arr = [8,15,12,6,18,20,12,14,6,17,20,20,13,4];
				break;
			}
			
			let convertedStr = ConfigManager.convertIntoRaidStrengthString(arr, toyNum);
			lovense.sendRemCommand(convertedStr, interval, time, toyNum);
			toy.being_RAIDed = RAIDING_OTHER_ID;
			if(time) toy.RAID_timeUntilEnd = $gameSystem.playtime() + time;
			else toy.RAID_timeUntilEnd = $gameSystem.playtime() + 9999;
		}
	}
};

Game_Actor.prototype.raidPussyCreampie = function(raidLevelBoosted) {
    if(!lovense.isConnected()) return;
	
	let pussyCreampieReactionScore = this.getPussyCreampieReactionScore();
	let pussyCreampielvl3 = pussyCreampieReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let pussyCreampielvl2 = pussyCreampieReactionScore >= VAR_DEF_RS_LV2_REQ;
	
	let level = 1;
	if(pussyCreampielvl3) level = 3;
	else if(pussyCreampielvl2) level = 2;
	
	if(raidLevelBoosted) level++;
	
	const connectedToys = lovense.getToys();
	for(let toyNum = 0; toyNum < connectedToys.length; ++toyNum) {
		let useToy = false;
		let tempLevel = level;
		let toy = connectedToys[toyNum];
		if(!ConfigManager.raidEnable) useToy = true;
		else {
			if(toy.RAID_type_pussy) {
				useToy = true;
				tempLevel++;
			}
			else {
				if(ConfigManager.raidPussyArray.length > 0) {
					useToy = false;
				}
				else if(toy.RAID_party) {
					useToy = true;
				}
				else {
					useToy = false;
				}
			}
		}
		
		if(useToy) {
			let interval = 250;
			let time = ConfigManager.convertRaidTime(10, toyNum);
			let arr = [];
			
			switch(tempLevel) {
				case 1:
					arr = [4,6,7,8,8,3,5,5,4,6];
				break;
				case 2:
					arr = [5,8,10,11,11,11,5,8,8,4,7];
				break;
				case 3:
					arr = [8,10,13,15,15,15,8,12,13,5,10];
				break;
				case 4:
					arr = [10,13,16,20,20,20,12,15,17,8,14];
				break;
				case 5:
					arr = [10,14,17,20,20,20,13,16,20,8,16];
				break;
			}
			
			let convertedStr = ConfigManager.convertIntoRaidStrengthString(arr, toyNum);
			lovense.sendRemCommand(convertedStr, interval, time, toyNum);
			toy.being_RAIDed = RAIDING_OTHER_ID;
			if(time) toy.RAID_timeUntilEnd = $gameSystem.playtime() + time;
			else toy.RAID_timeUntilEnd = $gameSystem.playtime() + 9999;
		}
	}
};

Game_Actor.prototype.raidAnalCreampie = function(raidLevelBoosted) {
    if(!lovense.isConnected()) return;
	
	let analCreampieReactionScore = this.getAnalCreampieReactionScore();
	let analCreampielvl3 = analCreampieReactionScore  >= VAR_DEF_RS_LV3_REQ;
	let analCreampielvl2 = analCreampieReactionScore >= VAR_DEF_RS_LV2_REQ;
	
	let level = 1;
	if(analCreampielvl3) level = 3;
	else if(analCreampielvl2) level = 2;
	
	if(raidLevelBoosted) level++;
	
	const connectedToys = lovense.getToys();
	for(let toyNum = 0; toyNum < connectedToys.length; ++toyNum) {
		let useToy = false;
		let tempLevel = level;
		let toy = connectedToys[toyNum];
		if(!ConfigManager.raidEnable) useToy = true;
		else {
			if(toy.RAID_type_anal) {
				useToy = true;
				tempLevel++;
			}
			else {
				if(ConfigManager.raidAnalArray.length > 0) {
					useToy = false;
				}
				else if(toy.RAID_party) {
					useToy = true;
				}
				else {
					useToy = false;
				}
			}
		}
		
		if(useToy) {
			let interval = 333;
			let time = ConfigManager.convertRaidTime(10, toyNum);
			let arr = [];
			
			switch(tempLevel) {
				case 1:
					arr = [6,8,8,6,8,1,2,1,1];
				break;
				case 2:
					arr = [8,10,11,11,6,10,3,1,3];
				break;
				case 3:
					arr = [12,15,16,16,9,15,5,3,5];
				break;
				case 4:
					arr = [15,19,20,20,13,20,6,4,8];
				break;
				case 5:
					arr = [16,19,20,20,14,20,8,6,10];
				break;
			}
			
			let convertedStr = ConfigManager.convertIntoRaidStrengthString(arr, toyNum);
			lovense.sendRemCommand(convertedStr, interval, time, toyNum);
			toy.being_RAIDed = RAIDING_OTHER_ID;
			if(time) toy.RAID_timeUntilEnd = $gameSystem.playtime() + time;
			else toy.RAID_timeUntilEnd = $gameSystem.playtime() + 9999;
		}
	}
};

Game_Actor.prototype.raidBukkake = function(area, raidLevelBoosted) {
    if(!lovense.isConnected()) return;
	
	let bukkakeReactionScore = this.getBukkakeReactionScore();
	let bukkakelvl3 = bukkakeReactionScore >= VAR_DEF_RS_LV3_REQ;
	let bukkakelvl2 = bukkakeReactionScore >= VAR_DEF_RS_LV2_REQ;
	
	let level = 1;
	if(bukkakelvl3) level = 3;
	else if(bukkakelvl2) level = 2;
	
	if(raidLevelBoosted) level++;
	
	const connectedToys = lovense.getToys();
	for(let toyNum = 0; toyNum < connectedToys.length; ++toyNum) {
		let useToy = false;
		let tempLevel = level;
		let toy = connectedToys[toyNum];
		if(!ConfigManager.raidEnable) useToy = true;
		else {
			switch(area) {
				case CUM_BUKKAKE_RIGHTARM:
				case CUM_BUKKAKE_LEFTARM:
					if(toy.RAID_type_hands) {
						useToy = true;
					}
					else {
						if(ConfigManager.raidHandsArray.length > 0) {
							useToy = false;
						}
						else if(toy.RAID_party) {
							useToy = true;
						}
						else {
							useToy = false;
						}
					}
				break;
				case CUM_BUKKAKE_FACE:
					if(toy.RAID_type_mouth) {
						useToy = true;
					}
					else {
						if(ConfigManager.raidMouthArray.length > 0) {
							useToy = false;
						}
						else if(toy.RAID_party) {
							useToy = true;
						}
						else {
							useToy = false;
						}
					}
				break;
				case CUM_BUKKAKE_BOOBS:
				case CUM_BUKKAKE_LEFTBOOB:
				case CUM_BUKKAKE_RIGHTBOOB:
					if(toy.RAID_type_boobs) {
						useToy = true;
					}
					else {
						if(ConfigManager.raidBoobsArray.length > 0) {
							useToy = false;
						}
						else if(toy.RAID_party) {
							useToy = true;
						}
						else {
							useToy = false;
						}
					}
				break;
				case CUM_BUKKAKE_BUTT:
				case CUM_BUKKAKE_BUTT_TOPRIGHT:
				case CUM_BUKKAKE_BUTT_TOPLEFT:
				case CUM_BUKKAKE_BUTT_BOTTOMRIGHT:
				case CUM_BUKKAKE_BUTT_BOTTOMLEFT:
				case CUM_BUKKAKE_LEFTLEG:
				case CUM_BUKKAKE_RIGHTLEG:
					if(toy.RAID_type_anal) {
						useToy = true;
					}
					else {
						if(ConfigManager.raidAnalArray.length > 0) {
							useToy = false;
						}
						else if(toy.RAID_party) {
							useToy = true;
						}
						else {
							useToy = false;
						}
					}
				break;
			}
		}
		
		if(useToy) {
			let time = ConfigManager.convertRaidTime(8, toyNum);
			
			if(toy.name === 'solace') {
				let loopRunningSec = 0;
				let loopPauseSec = 0;
				let thrust = 1;
				let depth = 1;
				
				switch(tempLevel) {
					case 1:
						thrust = 4;
						depth = 1;
					break;
					case 2:
						thrust = 5;
						depth = 1;
					break;
					case 3:
						thrust = 7;
						depth = 1;
					break;
					case 4:
					case 5:
						thrust = 8;
						depth = 1;
					break;
				}
				
				let convertedThrust = ConfigManager.convertIntoRaidThrusting(thrust, toyNum);
				lovense.sendRemSolaceCommand(convertedThrust, depth, time, toyNum, loopRunningSec, loopPauseSec);
			} 
			else {		
				let interval = 250;
				let arr = [];
				
				switch(tempLevel) {
					case 1:
						arr = [2,2,3,3,3,2,2];
					break;
					case 2:
						arr = [3,2,6,7,6,7,4,3,3,4,4,3,3,4];
					break;
					case 3:
						arr = [6,5,10,12,12,11,12,8,5,5,7,5,7,8,8];
					break;
					case 4:
						arr = [8,6,12,15,15,13,14,9,6,6,9,5,7,9,10];
					break;
				}
				
				let convertedStr = ConfigManager.convertIntoRaidStrengthString(arr, toyNum);
				lovense.sendRemCommand(convertedStr, interval, time, toyNum);
				toy.being_RAIDed = RAIDING_OTHER_ID;
				if(time) toy.RAID_timeUntilEnd = $gameSystem.playtime() + time;
				else toy.RAID_timeUntilEnd = $gameSystem.playtime() + 9999;
			}
		}
	}
};

Game_Actor.prototype.stopToyRaid = function(id) {
	if(!lovense.isConnected()) return;
	
	const connectedToys = lovense.getToys();
	for(let toyNum = 0; toyNum < connectedToys.length; ++toyNum) {
		if(connectedToys[toyNum].being_RAIDed === id) lovense.sendStopToy(toyNum);
	}
};

Game_Actor.prototype.stopClitToyRaid = function() {
	let id = RAIDING_CLIT_TOY_ID;
	this.stopToyRaid(id);
};
Game_Actor.prototype.stopCunnilingusRaid = function() {
	let id = RAIDING_CUNNILINGUS_ID;
	this.stopToyRaid(id);
};
Game_Actor.prototype.stopPussyToyRaid = function() {
	let id = RAIDING_PUSSY_TOY_ID;
	this.stopToyRaid(id);
};
Game_Actor.prototype.stopPussySexRaid = function() {
	let id = RAIDING_PUSSY_SEX_ID;
	this.stopToyRaid(id);
};
Game_Actor.prototype.stopAnalToyRaid = function() {
	let id = RAIDING_ANAL_TOY_ID;
	this.stopToyRaid(id);
};
Game_Actor.prototype.stopAnalSexRaid = function() {
	let id = RAIDING_ANAL_SEX_ID;
	this.stopToyRaid(id);
};
Game_Actor.prototype.stopTittyFuckRaid = function() {
	let id = RAIDING_TITTY_FUCK_ID;
	this.stopToyRaid(id);
};
Game_Actor.prototype.stopBlowjobRaid = function() {
	let id = RAIDING_BLOWJOB_ID;
	this.stopToyRaid(id);
};
Game_Actor.prototype.stopFootjobRaid = function() {
	let id = RAIDING_FOOTJOB_ID;
	this.stopToyRaid(id);
};
Game_Actor.prototype.stopRimjobRaid = function() {
	let id = RAIDING_RIMJOB_ID;
	this.stopToyRaid(id);
};
Game_Actor.prototype.stopRightHandjobRaid = function() {
	let id = RAIDING_RIGHT_HANDJOB_ID;
	this.stopToyRaid(id);
};
Game_Actor.prototype.stopLeftHandjobRaid = function() {
	let id = RAIDING_LEFT_HANDJOB_ID;
	this.stopToyRaid(id);
};

Game_Actor.prototype.stopFingerSuckMasRaid = function() {
	let id = RAIDING_SUCK_FINGER_MAS_ID;
	this.stopToyRaid(id);
};
Game_Actor.prototype.stopKissMasRaid = function() {
	let id = RAIDING_KISS_MAS_ID;
	this.stopToyRaid(id);
};
Game_Actor.prototype.stopBoobsPetMasRaid = function() {
	let id = RAIDING_BOOBS_PET_MAS_ID;
	this.stopToyRaid(id);
};
Game_Actor.prototype.stopNipplesPetMasRaid = function() {
	let id = RAIDING_NIPPLES_PET_MAS_ID;
	this.stopToyRaid(id);
};
Game_Actor.prototype.stopClitPetMasRaid = function() {
	let id = RAIDING_CLIT_PET_MAS_ID;
	this.stopToyRaid(id);
};
Game_Actor.prototype.stopPussyPetMasRaid = function() {
	let id = RAIDING_PUSSY_PET_MAS_ID;
	this.stopToyRaid(id);
};
Game_Actor.prototype.stopAnalPetMasRaid = function() {
	let id = RAIDING_ANAL_PET_MAS_ID;
	this.stopToyRaid(id);
};

Game_Actor.prototype.stopFingerSuckStripperRaid = function() {
	let id = RAIDING_SUCK_FINGER_STRIPPER_ID;
	this.stopToyRaid(id);
};
Game_Actor.prototype.stopBoobsPetStripperRaid = function() {
	let id = RAIDING_BOOBS_PET_STRIPPER_ID;
	this.stopToyRaid(id);
};
Game_Actor.prototype.stopPussyPetStripperRaid = function() {
	let id = RAIDING_PUSSY_PET_STRIPPER_ID;
	this.stopToyRaid(id);
};
Game_Actor.prototype.stopButtPetStripperRaid = function() {
	let id = RAIDING_BUTT_PET_STRIPPER_ID;
	this.stopToyRaid(id);
};
Game_Actor.prototype.stopSightNightModeRaid = function() {
	let id = RAIDING_SIGHT_NIGHTMODE_ID;
	this.stopToyRaid(id);
};
Game_Actor.prototype.stopArousalRaid = function() {
	let id = RAIDING_AROUSAL_ID;
	this.stopToyRaid(id);
};
Game_Actor.prototype.stopOrgasmRaids = function() {
	if(!lovense.isConnected()) return;
	let id = RAIDING_ORGASM_ID;
	let id2 = RAIDING_ORGASM_AFTER_ID;
	const connectedToys = lovense.getToys();
	for(let toyNum = 0; toyNum < connectedToys.length; ++toyNum) {
		if(connectedToys[toyNum].being_RAIDed === id || connectedToys[toyNum].being_RAIDed === id2) 
			lovense.sendStopToy(toyNum);
	}
};

Game_Actor.prototype.convertOrgasmRaidToAfter = function() {
	if(!lovense.isConnected()) return;
	let id = RAIDING_ORGASM_ID;
	const connectedToys = lovense.getToys();
	for(let toyNum = 0; toyNum < connectedToys.length; ++toyNum) {
		if(connectedToys[toyNum].being_RAIDed === id) {
			this.raidOrgasmAfter();
			return;
		};
	}
};

Game_Actor.prototype.masRaidCheck_inBattle = function() {
	if(!lovense.isConnected()) return;

	if(this._masHalberd !== LINE_KARRYN_MAS_LICK_HALBERD) this.stopKissMasRaid();
	if(this._masHalberd !== LINE_KARRYN_MAS_PUSSY_RUB_HALBERD) this.stopPussySexRaid();
	if(this._masHalberd !== LINE_KARRYN_MAS_CLIT_RUB_HALBERD) this.stopCunnilingusRaid();
	if(this._masHalberd !== LINE_KARRYN_MAS_TITTYFUCK_HALBERD) this.stopTittyFuckRaid();
	
	if(this._masRightHand !== LINE_KARRYN_MAS_TOUCH_BOOBS && this._masLeftHand !== LINE_KARRYN_MAS_TOUCH_BOOBS) 
		this.stopBoobsPetMasRaid();
	if(this._masRightHand !== LINE_KARRYN_MAS_TOUCH_NIPPLES && this._masLeftHand !== LINE_KARRYN_MAS_TOUCH_NIPPLES) 
		this.stopNipplesPetMasRaid();
	if(this._masRightHand !== LINE_KARRYN_MAS_TOUCH_CLIT && this._masLeftHand !== LINE_KARRYN_MAS_TOUCH_CLIT) 
		this.stopClitPetMasRaid();
	if(this._masRightHand !== LINE_KARRYN_MAS_FINGER_PUSSY && this._masLeftHand !== LINE_KARRYN_MAS_FINGER_PUSSY) 
		this.stopPussyPetMasRaid();
	if(this._masRightHand !== LINE_KARRYN_MAS_FINGER_ANUS && this._masLeftHand !== LINE_KARRYN_MAS_FINGER_ANUS) 
		this.stopAnalPetMasRaid();
	if(this._masRightHand !== LINE_KARRYN_MAS_SUCK_FINGERS && this._masLeftHand !== LINE_KARRYN_MAS_SUCK_FINGERS) 
		this.stopFingerSuckMasRaid();
};

Game_Actor.prototype.masRaidCheck_couch = function() {
	if(!lovense.isConnected()) return;
	
	if(!this.masturbateBattle_leftHandIsOn(SLOT_M_PUSSY) && !this.masturbateBattle_rightHandIsOn(SLOT_M_PUSSY))
		this.stopPussyPetMasRaid();
	if(!this.masturbateBattle_rightHandIsOn(SLOT_M_CLIT))
		this.stopClitPetMasRaid();
	if(!this.masturbateBattle_leftHandIsOn(SLOT_M_NIPPLES) && !this.masturbateBattle_rightHandIsOn(SLOT_M_NIPPLES) && !this.masturbateBattle_MouthIsOn(SLOT_M_NIPPLES))
		this.stopNipplesPetMasRaid();
	if(!this.masturbateBattle_leftHandIsOn(SLOT_M_ANAL))
		this.stopAnalPetMasRaid();
	if(!this.masturbateBattle_leftHandIsOn(SLOT_M_BOOBS))
		this.stopBoobsPetMasRaid();
	if(!this.masturbateBattle_rightHandIsOn(SLOT_M_MOUTH))
		this.stopFingerSuckMasRaid();
};

Game_Actor.prototype.masRaidCheck_glory = function() {
	if(this._masRightHand !== LINE_KARRYN_MAS_TOUCH_NIPPLES && this._masLeftHand !== LINE_KARRYN_MAS_TOUCH_NIPPLES) 
		this.stopNipplesPetMasRaid();
	if(this._masRightHand !== LINE_KARRYN_MAS_TOUCH_CLIT && this._masLeftHand !== LINE_KARRYN_MAS_TOUCH_CLIT) 
		this.stopClitPetMasRaid();
	if(this._masRightHand !== LINE_KARRYN_MAS_FINGER_PUSSY && this._masLeftHand !== LINE_KARRYN_MAS_FINGER_PUSSY) 
		this.stopPussyPetMasRaid();
	if(this._masRightHand !== LINE_KARRYN_MAS_FINGER_ANUS && this._masLeftHand !== LINE_KARRYN_MAS_FINGER_ANUS) 
		this.stopAnalPetMasRaid();
	if(this._masRightHand !== LINE_KARRYN_MAS_SUCK_FINGERS && this._masLeftHand !== LINE_KARRYN_MAS_SUCK_FINGERS) 
		this.stopFingerSuckMasRaid();
};

Game_Actor.prototype.stripperRaidCheck = function() {
	if(!this.isInStripperPussyPose() || (this.isInStripperPussyPose() && !this.tachieRightArm.includes('kupa')))
		this.stopPussyPetStripperRaid();
	if(!this.isInStripperButtPose() || (this.isInStripperButtPose() && !this.tachieRightArm.includes('kupa')))
		this.stopButtPetStripperRaid();
	if(!this.isInStripperBoobsPose() || (this.isInStripperBoobsPose() && !this.tachieBoobs.includes('zuri')))
		this.stopBoobsPetStripperRaid();
	if(!this.isInStripperMouthPose() || (this.isInStripperMouthPose() && !this.tachieRightArm.includes('fera') && !this.tachieRightArm.includes('suck_fingers')))
		this.stopFingerSuckStripperRaid();
};