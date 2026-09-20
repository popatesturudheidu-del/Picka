var Remtairy = Remtairy || {};
Remtairy.KarrynOnani = Remtairy.KarrynOnani || {};

//オナニー Couch
const BATTLEBACK1_MASTURBATION_COUCH_NAME = 'Mas01';
const MASTURBATION_LV1_BATTLERNAME = 'mas_target';

const MASTURBATION_LV1_X_OFFSET = 0;
const MASTURBATION_LV1_Y_OFFSET = -50;

var MASTURBATION_LV1_FINGERS_CLOSE_X = 912;
var MASTURBATION_LV1_FINGERS_CLOSE_Y = 260;

var MASTURBATION_LV1_FINGERS_CLOSE_SUCK_FINGERS_X = 890;
var MASTURBATION_LV1_FINGERS_CLOSE_SUCK_FINGERS_Y = 262;

var MASTURBATION_LV1_FINGERS_FAR_X = 920;
var MASTURBATION_LV1_FINGERS_FAR_Y = 265;

var MASTURBATION_LV1_BOOBS_NORMAL_X = 830;
var MASTURBATION_LV1_BOOBS_NORMAL_Y = 415;

var MASTURBATION_LV1_BOOBS_MOVED_X = 860;
var MASTURBATION_LV1_BOOBS_MOVED_Y = 365;

var MASTURBATION_LV1_NIPPLES_NORMAL_X = 530;
var MASTURBATION_LV1_NIPPLES_NORMAL_Y = 305;

var MASTURBATION_LV1_NIPPLES_NORMAL_HCUP_X = 620;
var MASTURBATION_LV1_NIPPLES_NORMAL_HCUP_Y = 325;

var MASTURBATION_LV1_NIPPLES_NORMAL_PCUP_X = 420;
var MASTURBATION_LV1_NIPPLES_NORMAL_PCUP_Y = 455;

var MASTURBATION_LV1_NIPPLES_TOUCH_X = 598;
var MASTURBATION_LV1_NIPPLES_TOUCH_Y = 290;

var MASTURBATION_LV1_NIPPLES_TOUCH_HCUP_X = 640;
var MASTURBATION_LV1_NIPPLES_TOUCH_HCUP_Y = 310;

var MASTURBATION_LV1_NIPPLES_TOUCH_PCUP_X = 440;
var MASTURBATION_LV1_NIPPLES_TOUCH_PCUP_Y = 270;

var MASTURBATION_LV1_NIPPLES_SUCK_X = 780;
var MASTURBATION_LV1_NIPPLES_SUCK_Y = 290;

var MASTURBATION_LV1_NIPPLES_SUCK_HCUP_X = 820;
var MASTURBATION_LV1_NIPPLES_SUCK_HCUP_Y = 310;

var MASTURBATION_LV1_NIPPLES_SUCK_PCUP_X = 1130;
var MASTURBATION_LV1_NIPPLES_SUCK_PCUP_Y = 620;

var MASTURBATION_LV1_NIPPLES_SUCK_TOUCHED_X = 735;
var MASTURBATION_LV1_NIPPLES_SUCK_TOUCHED_Y = 260;

var MASTURBATION_LV1_NIPPLES_SUCK_TOUCHED_HCUP_X = 785;
var MASTURBATION_LV1_NIPPLES_SUCK_TOUCHED_HCUP_Y = 260;

var MASTURBATION_LV1_NIPPLES_SUCK_TOUCHED_PCUP_X = 1150;
var MASTURBATION_LV1_NIPPLES_SUCK_TOUCHED_PCUP_Y = 260;

var MASTURBATION_LV1_NIPPLES_SUCK_OPPAI_PCUP_X = 1065;
var MASTURBATION_LV1_NIPPLES_SUCK_OPPAI_PCUP_Y = 315;

var MASTURBATION_LV1_NIPPLES_SUCK_SUCKING_PCUP_X = 420;
var MASTURBATION_LV1_NIPPLES_SUCK_SUCKING_PCUP_Y = 455;

var MASTURBATION_LV1_CLIT_X = 665;
var MASTURBATION_LV1_CLIT_Y = 612;

var MASTURBATION_LV1_PUSSY_X = 642;
var MASTURBATION_LV1_PUSSY_Y = 714;

var MASTURBATION_LV1_ANAL_X = 641;
var MASTURBATION_LV1_ANAL_Y = 810;

//=============================================================================
 /*:
 * @plugindesc Karryn Onani
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================

const MASTURBATE_INBATTLE_SKILL_START = 1326;
const MASTURBATE_INBATTLE_SKILL_END = 1349;

const VAR_BASE_MASTURBATE_TURNS = 7;
const VAR_NOISE_LEVEL_MIN_EFFECT = 4;
const VAR_NOISE_LEVEL_INVASION_CHANCE = 0.2;

const TROOP_ONANI_COUCH_ID = 15;

const SLOT_M_MOUTH = 70;
const SLOT_M_BOOBS = 71;
const SLOT_M_NIPPLES = 72;
const SLOT_M_CLIT = 73;
const SLOT_M_PUSSY = 74;
const SLOT_M_BUTT = 75;
const SLOT_M_ANAL = 76;
const SLOT_M_FINGERS = 77;

const ENEMYTYPE_MASTURBATE_MOUTH_TAG = 'm_mouth';
const ENEMYTYPE_MASTURBATE_FINGERS_TAG = 'm_fingers';
const ENEMYTYPE_MASTURBATE_BOOBS_TAG = 'm_boobs';
const ENEMYTYPE_MASTURBATE_NIPPLES_TAG = 'm_nipples';
const ENEMYTYPE_MASTURBATE_CLIT_TAG = 'm_clit';
const ENEMYTYPE_MASTURBATE_PUSSY_TAG = 'm_pussy';
const ENEMYTYPE_MASTURBATE_BUTT_TAG = 'm_butt';
const ENEMYTYPE_MASTURBATE_ANAL_TAG = 'm_anal';
const ENEMYTYPE_MASTURBATE_NIPPLES_SUCK_TAG = 'm_nipples_suck';


////////////////
// Game Troop
////////////////

Game_Troop.prototype.setupMasturbationBattle = function(troopId) {
	this._troopId = troopId;
    this._enemies = [];
	
	if(Karryn.isInMasturbationCouchPose()) {
		this.troop().members.forEach(function(member) {
			if ($dataEnemies[member.enemyId]) {
				let enemyId = member.enemyId;
				let x = MASTURBATION_LV1_X_OFFSET;
				let y = MASTURBATION_LV1_Y_OFFSET;
								
				let enemy = new Game_Enemy(enemyId, x, y, false);
				let spriteName = MASTURBATION_LV1_BATTLERNAME;
				let bodyType = enemy.enemyType();
				if(bodyType == ENEMYTYPE_MASTURBATE_FINGERS_TAG) {
					enemy._screenX = x + MASTURBATION_LV1_FINGERS_CLOSE_X;
					enemy._screenY = y + MASTURBATION_LV1_FINGERS_CLOSE_Y;
				}
				else if(bodyType == ENEMYTYPE_MASTURBATE_BOOBS_TAG) {
					enemy._screenX = x + MASTURBATION_LV1_BOOBS_NORMAL_X;
					enemy._screenY = y + MASTURBATION_LV1_BOOBS_NORMAL_Y;
				}
				else if(bodyType == ENEMYTYPE_MASTURBATE_NIPPLES_TAG) {
					if(Karryn.boobsSizeIsHCup()) {
						enemy._screenX = x + MASTURBATION_LV1_NIPPLES_NORMAL_HCUP_X;
						enemy._screenY = y + MASTURBATION_LV1_NIPPLES_NORMAL_HCUP_Y;
					}
					else if(Karryn.boobsSizeIsPCup()) {
						enemy._screenX = x + MASTURBATION_LV1_NIPPLES_NORMAL_PCUP_X;
						enemy._screenY = y + MASTURBATION_LV1_NIPPLES_NORMAL_PCUP_Y;
					}
					else {
						enemy._screenX = x + MASTURBATION_LV1_NIPPLES_NORMAL_X;
						enemy._screenY = y + MASTURBATION_LV1_NIPPLES_NORMAL_Y;
					}
				}
				else if(bodyType == ENEMYTYPE_MASTURBATE_NIPPLES_SUCK_TAG) {
					if(Karryn.boobsSizeIsHCup()) {
						enemy._screenX = x + MASTURBATION_LV1_NIPPLES_SUCK_HCUP_X;
						enemy._screenY = y + MASTURBATION_LV1_NIPPLES_SUCK_HCUP_Y;
					}
					else if(Karryn.boobsSizeIsPCup()) {
						enemy._screenX = x + MASTURBATION_LV1_NIPPLES_SUCK_PCUP_X;
						enemy._screenY = y + MASTURBATION_LV1_NIPPLES_SUCK_PCUP_Y;
					}
					else {
						enemy._screenX = x + MASTURBATION_LV1_NIPPLES_SUCK_X;
						enemy._screenY = y + MASTURBATION_LV1_NIPPLES_SUCK_Y;
					}
				}
				else if(bodyType == ENEMYTYPE_MASTURBATE_CLIT_TAG) {
					enemy._screenX = x + MASTURBATION_LV1_CLIT_X;
					enemy._screenY = y + MASTURBATION_LV1_CLIT_Y;
				}
				else if(bodyType == ENEMYTYPE_MASTURBATE_PUSSY_TAG) {
					enemy._screenX = x + MASTURBATION_LV1_PUSSY_X;
					enemy._screenY = y + MASTURBATION_LV1_PUSSY_Y;
				}
				else if(bodyType == ENEMYTYPE_MASTURBATE_ANAL_TAG) {
					enemy._screenX = x + MASTURBATION_LV1_ANAL_X;
					enemy._screenY = y + MASTURBATION_LV1_ANAL_Y;
				}
				
						
				enemy.setCustomEnemySprite(spriteName);
				//enemy.setCustomEnemySpritePosition(x, y);
				
				this._enemies.push(enemy);
			}
		}, this);
	}
	else console.error('Error with troop setupMasturbationBattle');
};

////////////////
// Game Actor
////////////////


// Sexually Frustrated 
Game_Actor.prototype.isOnaniFrustrated = function() {
	return this._onaniFrustration > 0;
};
Game_Actor.prototype.resetOnaniFrustration = function() {
	this._onaniFrustration = 0; 
};
Game_Actor.prototype.increaseOnaniFrustration = function() {
	this._onaniFrustration++; 
};


Game_Actor.prototype.onaniFrustrationParamRate = function(paramId) {
	let rate = 1;
	
	if(paramId === PARAM_AGILITY_ID && this.isOnaniFrustrated()) {
		let multi = 0.03;
		rate -= this._onaniFrustration * multi;
	}
	
	return Math.max(0, rate);
};

Game_Actor.prototype.onaniFrustrationXParamRate = function(paramId) {
	let rate = 1;
	
	if(paramId === XPARAM_CRIT_EVA_ID && this.isOnaniFrustrated()) {
		let multi = 0.05;
		rate -= this._onaniFrustration * multi;
	}
	else if(paramId === XPARAM_HIT_ID && this.isOnaniFrustrated()) {
		let multi = 0.03;
		rate -= this._onaniFrustration * multi;
	}
	
	return Math.max(0, rate);
};

Game_Actor.prototype.onaniFrustrationSParamRate = function(paramId) {
	let rate = 1;
	
	switch(paramId) {
	case SPARAM_WPDEF_ID:
		if(this.isOnaniFrustrated()) {
			rate -= this._onaniFrustration * 0.05;
			rate = Math.max(0.15, rate);
		}
	break;
	case SPARAM_WPATK_ID:
		if(this.isOnaniFrustrated()) {
			rate += this._onaniFrustration * 0.04;
			rate = Math.min(1.4, rate);
		}
	break;
	}
	
	return rate;
};

/////////////////
///////////////////
// In Battle Onani
///////////////////
////////////////

Game_Actor.prototype.setWantsToOnaniInBattle = function(status) {
	this._onaniWantsToInBattle = status;
};
Game_Actor.prototype.wantsToOnaniInBattle = function() {
	return this._onaniWantsToInBattle;
};

Game_Actor.prototype.setOnaniInBattleDesireBuildup = function(value) {
	this._onaniInBattleDesireBuildup = Math.max(0, value);
};
Game_Actor.prototype.increaseOnaniInBattleDesireBuildup = function(value) {
	this.setOnaniInBattleDesireBuildup(this._onaniInBattleDesireBuildup + value);
};

Game_Actor.prototype.checkOnaniInBattleDesire = function() {
	if(!this.wantsToOnaniInBattle() && this.masturbateLvl() >= 1 && (this.isInCombatPose() || $gameParty.isInGloryBattle)) {
		let buildupValue = 3 + this.masturbateLvl();
		
		if(this.hasPassive(PASSIVE_SEE_JERKOFF_COUNT_THREE_ID))
			buildupValue += 4;
		else if(this.hasPassive(PASSIVE_SEE_JERKOFF_COUNT_TWO_ID))
			buildupValue += 2;
		
		if(this.hasPassive(PASSIVE_MASTURBATED_INBATTLE_COUNT_THREE_ID))
			buildupValue += 6;
		else if(this.hasPassive(PASSIVE_MASTURBATED_INBATTLE_COUNT_ONE_ID))
			buildupValue += 3;
		
		if(this.hasPassive(PASSIVE_MASTURBATED_COUCH_COUNT_THREE_ID))
			buildupValue += 3;
		
		if(this.hasPassive(PASSIVE_MASTURBATED_GLORYHOLE_COUNT_THREE_ID))
			buildupValue += 4;
		else if(this.hasPassive(PASSIVE_MASTURBATED_GLORYHOLE_COUNT_ONE_ID))
			buildupValue += 2;
		
		if(this.hasPassive(PASSIVE_KISS_ORGASM_TWO_ID) && this._tempRecordKissedCount == 0)
			buildupValue += 4;
		
		if(this.hasPassive(PASSIVE_CLIT_PETTED_COUNT_THREE_ID) && this._todayClitPettedCount > 0)
			buildupValue += Math.ceil(this._todayClitPettedCount * 0.36);
		
		if(this.hasPassive(PASSIVE_TITTYFUCK_ORGASM_TWO_ID) && this._todayTittyFuckCount > 0)
			buildupValue += Math.ceil(this._todayTittyFuckCount * 0.8);
		
		if(this.hasPassive(PASSIVE_NIPPLES_PETTED_COUNT_TWO_ID))
			buildupValue += 2;
		
		if(this.hasPassive(PASSIVE_PINK_ROTOR_INSERT_COUNT_TWO_ID))
			buildupValue += 3;
		
		if(this.hasPassive(PASSIVE_MASTURBATE_ORGASM_TWO_ID))
			buildupValue += 4;
		
		const faceSemen = this.getBodyLiquid(BodyLiquidId.FACE_SEMEN).amount;
		if (faceSemen > 0) {
			if (this.hasPassive(PASSIVE_FACE_BUKKAKE_COUNT_ONE_ID)) {
				buildupValue += 4;
			}
			if (this.hasPassive(PASSIVE_FACE_BUKKAKE_COUNT_TWO_ID)) {
				buildupValue += 4;
			}
		}
		
		if(this.hasPassive(PASSIVE_STRAY_PUBE_COUNT_TWO_ID) && this.getStrayTotalCount() > 0)
			buildupValue += 3;
		
		if(this.hasPassive(PASSIVE_TOILET_COCK_APPEARED_COUNT_TWO_ID))
			buildupValue += 3;
		
		if(this.hasPassive(CHARA_CREATE_THREE_ONANI_ID))
			buildupValue += 3;
		
		buildupValue += this._onaniFrustration * 2;
		
		if(this.justOrgasmed()) buildupValue *= 0.1;
		
		buildupValue *= (1 - (this.getFatigueLevel() * 0.1));
		
		if(this.isHorny) buildupValue *= 2;
		else if(this.isAroused()) buildupValue *= 1.4;
		else if(this.isWearingClitToy()) buildupValue *= 1.2;
		
		let topDesireMultipler = 1;
		
		if(this.mouthDesire >= 200)
			topDesireMultipler = Math.max(1.4, topDesireMultipler);
		else if(this.mouthDesire >= 150)
			topDesireMultipler = Math.max(1.3, topDesireMultipler);
		else if(this.mouthDesire >= 100)
			topDesireMultipler = Math.max(1.25, topDesireMultipler);
		else if(this.mouthDesire >= 75)
			topDesireMultipler = Math.max(1.2, topDesireMultipler);
		else if(this.mouthDesire >= 50)
			topDesireMultipler = Math.max(1.1, topDesireMultipler);
			
		if(this.boobsDesire >= 200)
			topDesireMultipler = Math.max(1.4, topDesireMultipler);
		else if(this.boobsDesire >= 150)
			topDesireMultipler = Math.max(1.3, topDesireMultipler);
		else if(this.boobsDesire >= 100)
			topDesireMultipler = Math.max(1.25, topDesireMultipler);
		else if(this.boobsDesire >= 75)
			topDesireMultipler = Math.max(1.2, topDesireMultipler);
		else if(this.boobsDesire >= 50)
			topDesireMultipler = Math.max(1.1, topDesireMultipler);
		
		if(this.pussyDesire >= 200)
			topDesireMultipler = Math.max(1.4, topDesireMultipler);
		else if(this.pussyDesire >= 150)
			topDesireMultipler = Math.max(1.3, topDesireMultipler);
		else if(this.pussyDesire >= 100)
			topDesireMultipler = Math.max(1.25, topDesireMultipler);
		else if(this.pussyDesire >= 75)
			topDesireMultipler = Math.max(1.2, topDesireMultipler);
		else if(this.pussyDesire >= 50)
			topDesireMultipler = Math.max(1.1, topDesireMultipler);
		
		if(this.buttDesire >= 200)
			topDesireMultipler = Math.max(1.4, topDesireMultipler);
		else if(this.buttDesire >= 150)
			topDesireMultipler = Math.max(1.3, topDesireMultipler);
		else if(this.buttDesire >= 100)
			topDesireMultipler = Math.max(1.25, topDesireMultipler);
		else if(this.buttDesire >= 75)
			topDesireMultipler = Math.max(1.2, topDesireMultipler);
		else if(this.buttDesire >= 50)
			topDesireMultipler = Math.max(1.1, topDesireMultipler);
			
		buildupValue *= topDesireMultipler;

		buildupValue = Math.min(buildupValue, 50);
		
		this.increaseOnaniInBattleDesireBuildup(buildupValue);

		if(this._onaniInBattleDesireBuildup > 100 && this.isAroused() && Math.randomInt(150) < this._onaniInBattleDesireBuildup) {
			let canUseAnySkill = false;
			if(this.showEval_mbSuckFingers()) canUseAnySkill = true;
			else if(this.showEval_mbTouchBoobs()) canUseAnySkill = true;
			else if(this.showEval_mbTouchNipples()) canUseAnySkill = true;
			else if(this.showEval_mbTouchClit_noToy()) canUseAnySkill = true;
			else if(this.showEval_mbTouchClit_pinkRotor()) canUseAnySkill = true;
			else if(this.showEval_mbTouchPussy_noToy()) canUseAnySkill = true;
			else if(this.showEval_mbTouchPussy_penisDildo()) canUseAnySkill = true;
			else if(this.showEval_mbTouchAnal_noToy()) canUseAnySkill = true;
			else if(this.showEval_mbTouchAnal_analBeads()) canUseAnySkill = true;
			
			if(!canUseAnySkill && this.isInCombatPose()) {
				if(this.showEval_mbLickHalberd()) canUseAnySkill = true;
				else if(this.showEval_mbTittyfuckHalberd()) canUseAnySkill = true;
				else if(this.showEval_mbClitRubHalberd()) canUseAnySkill = true;
				else if(this.showEval_mbPussyRubHalberd()) canUseAnySkill = true;
			}

			if(canUseAnySkill)
				this.setWantsToOnaniInBattle(true);
		}
		
	}
};

Game_Actor.prototype.resetOnaniInBattleDesireToBase = function() {
	if($gameParty.isInGloryBattle) return false;
	
	let baseValue = 0;
	
	if(this.isAroused())
		baseValue += this._onaniFrustration * 8;
	else
		baseValue += this._onaniFrustration * 5;
	
	
	this.setOnaniInBattleDesireBuildup(baseValue);
	
	this.setWantsToOnaniInBattle(false);
};

Game_Actor.prototype.isMasturbatingWithHalberd = function() {
	if(!this.isInMasturbationInBattlePose()) return false;
	return this.tachieFrontB == 'arms_halberd' || this.tachieFrontB == 'arms_halberd_naked';
};

// Skills
Game_Actor.prototype.showEval_mbDontMasturbate = function() {
	return !this.isInMasturbationInBattlePose();
};
Game_Actor.prototype.afterEval_mbDontMasturbate = function() {
	this.increaseOnaniFrustration();
	if(this.hasPassive(PASSIVE_MASTURBATED_INBATTLE_COUNT_FOUR_ID)) this.increaseOnaniFrustration();
	if(this.hasPassive(PASSIVE_MASTURBATE_ORGASM_TWO_ID)) this.increaseOnaniFrustration();
	this.resetOnaniInBattleDesireToBase();
};

Game_Actor.prototype.showEval_mbStopMasturbating = function() {
	return this.isInMasturbationInBattlePose();
};
Game_Actor.prototype.afterEval_mbStopMasturbating = function() {
	if(this.hasHalberd()) {
		this.setStandbyPose();
	}	
	else {
		this.setUnarmedPose();
	}
	
	this._masRightHand = false;
	this._masLeftHand = false;
	this._masHalberd = false;
	this.masRaidCheck_inBattle();
};

Game_Actor.prototype.showEval_mbSuckFingers = function() {
	return this.mouthDesire >= this.suckFingersMouthDesireRequirement();
};
Game_Actor.prototype.showEval_mbTouchBoobs = function() {
	return this.boobsDesire >= this.boobsPettingBoobsDesireRequirement();
};
Game_Actor.prototype.showEval_mbTouchNipples = function() {
	return this.boobsDesire >= this.nipplesPettingBoobsDesireRequirement();
};
Game_Actor.prototype.showEval_mbTouchClit_noToy = function() {
	if(this.isWearingClitToy())
		return false;
	else
		return this.pussyDesire >= this.clitPettingPussyDesireRequirement();
};
Game_Actor.prototype.showEval_mbTouchClit_pinkRotor = function() {
	if(this.isWearingClitToy())
		return this.pussyDesire >= this.clitToyPussyDesireRequirement();
	else
		return false;
};
Game_Actor.prototype.showEval_mbTouchPussy_noToy = function() {
	if(this.isWearingPussyToy())
		return false;
	else
		return this.isWet && this.pussyDesire >= this.pussyPettingPussyDesireRequirement();
};
Game_Actor.prototype.showEval_mbTouchPussy_penisDildo = function() {
	if(this.isWearingPussyToy())
		return this.pussyDesire >= this.pussyToyPussyDesireRequirement();
	else
		return false;
};
Game_Actor.prototype.showEval_mbTouchAnal_noToy = function() {
	if(this.isWearingAnalToy())
		return false;
	else
		return this.buttDesire >= this.analPettingButtDesireRequirement();
};
Game_Actor.prototype.showEval_mbTouchAnal_analBeads = function() {
	if(this.isWearingAnalToy())
		return this.buttDesire >= this.analToyButtDesireRequirement();
	else
		return false;
};

Game_Actor.prototype.showEval_mbLickHalberd = function() {
	if(this.isWearingPussyToy() || this.isWearingClitToy() || !this.hasHalberd())
		return false;
	else
		return this.mouthDesire >= this.blowjobMouthDesireRequirement() && this.cockDesire >= this.blowjobCockDesireRequirement() * 0.5 && this.hasPassive(PASSIVE_FIRST_BJ_ID);
};
Game_Actor.prototype.showEval_mbTittyfuckHalberd = function() {
	if(this.isWearingPussyToy() || this.isWearingClitToy() || !this.hasHalberd())
		return false;
	else
		return this.boobsDesire >= this.tittyFuckBoobsDesireRequirement() && this.cockDesire >= this.tittyFuckCockDesireRequirement() * 0.5 && this.hasPassive(PASSIVE_TITTYFUCK_COUNT_ONE_ID);
};
Game_Actor.prototype.showEval_mbClitRubHalberd = function() {
	if(this.isWearingPussyToy() || this.isWearingClitToy() || !this.hasHalberd())
		return false;
	else
		return this.pussyDesire >= this.cunnilingusPussyDesireRequirement();
};
Game_Actor.prototype.showEval_mbPussyRubHalberd = function() {
	if(this.isWearingPussyToy() || this.isWearingClitToy() || !this.hasHalberd())
		return false;
	else
		return this.pussyDesire >= this.pussySexPussyDesireRequirement() && this.cockDesire >= this.pussySexCockDesireRequirement() * 0.5;
};

Game_Actor.prototype.getTachieClitToyExtension_masBattle = function() {
	let ext = '';
	if(this.tachieLeftArm === 'toyC') ext = 'leftarm_';
	return ext;
};
Game_Actor.prototype.getTachiePussyToyExtension_masBattle = function() {
	return this._masBattle_tachiePussyToyPosition + '_';
};
Game_Actor.prototype.getTachieAnalToyExtension_masBattle = function() {
	let ext = '';
	if(this.tachieRightArm.includes('toyA')) ext = 'rightarm' + this._masBattle_tachieAnalToyPosition + '_';
	return ext;
};


Game_Actor.prototype.customReq_masInBattlePetting = function() {
	return (this.isInCombatPose() || this.isInMasturbationInBattlePose());
};
Game_Actor.prototype.customReq_masInBattleHalberd = function() {
	return (this.isInCombatPose() || this.isInMasturbationInBattlePose()) && this.hasHalberd();
};

Game_Actor.prototype.dmgFormula_masInBattleSkill = function(area, useRightHand, useHalberd) {
	let target = this;
	let useLeftHand = !useRightHand && !useHalberd;
	let usingClitToy = target.isWearingClitToy();
	let usingPussyToy = target.isWearingPussyToy();
	let usingAnalToy = target.isWearingAnalToy();
	let lickingHalberd = false;
	let hitBySkillTypeSet = false;
	
	let enemySkillLvl = this.masturbateLvl();
	let enemySkillRating = this.masturbateSkillRating();
	let staminaPercent = target.hp / target.mhp;
	let targetPettingRate = 1;
	let baseDmg = 0;
	let targetDesire = 0;
	let targetSensitivity = 0;
	
	this.setAllowTachieUpdate(false);
	this.resetOnaniInBattleDesireToBase();
	this.addToActorMasturbatedInBattleRecord();
	if(!this.isInMasturbationInBattlePose()) {
		this.setMasturbationInBattlePose();
	}
	
	switch(area) {
	case AREA_BOOBS:
		if(useHalberd) {
			baseDmg = BASEDMG_SEXACT_TITTYFUCK;
			targetDesire = target.boobsDesire;
			targetSensitivity = target.boobsSensitivity();
			//this.addToActorTittyFuckRecord(false, false);
			this.addToActorMasturbatedUsingHalberdRecord();
			BattleManager.actionRemLines(LINE_KARRYN_MAS_TITTYFUCK_HALBERD);
			this.raidTittyFuck();
			this._masRightHand = false;
			this._masLeftHand = false;
			this._masHalberd = LINE_KARRYN_MAS_TITTYFUCK_HALBERD;
		}
		else {
			baseDmg = BASEDMG_PETTING_BOOBS;
			targetDesire = target.boobsDesire;
			targetSensitivity = target.boobsSensitivity();
			this.addToActorBoobsPettedRecord(false, false, true);
			BattleManager.actionRemLines(LINE_KARRYN_MAS_TOUCH_BOOBS);
			this.raidBoobsPet(true);
			if(useRightHand) this._masRightHand = LINE_KARRYN_MAS_TOUCH_BOOBS;
			else this._masLeftHand = LINE_KARRYN_MAS_TOUCH_BOOBS;
			this._masHalberd = false;
		}
	break;
	case AREA_NIPPLES:
		baseDmg = BASEDMG_PETTING_NIPPLES;
		targetDesire = target.boobsDesire;
		targetSensitivity = target.nipplesSensitivity();
		this.addToActorNipplesPettedRecord(false, false, true);
		BattleManager.actionRemLines(LINE_KARRYN_MAS_TOUCH_NIPPLES);
		this.raidNipplesPet(true);
		if(useRightHand) this._masRightHand = LINE_KARRYN_MAS_TOUCH_NIPPLES;
		else this._masLeftHand = LINE_KARRYN_MAS_TOUCH_NIPPLES;
		this._masHalberd = false;
	break;
	case AREA_CLIT:
		if(useHalberd) {
			baseDmg = BASEDMG_SEXACT_CUNNILINGUS;
			targetDesire = target.pussyDesire;
			targetSensitivity = target.clitSensitivity();
			//this.addToActorClitPettedRecord(false, false, true);
			this.addToActorMasturbatedUsingHalberdRecord();
			BattleManager.actionRemLines(LINE_KARRYN_MAS_CLIT_RUB_HALBERD);
			this.raidCunnilingus();
			this._masRightHand = false;
			this._masLeftHand = false;
			this._masHalberd = LINE_KARRYN_MAS_CLIT_RUB_HALBERD;
		}
		else if(usingClitToy) {
			baseDmg = BASEDMG_TOY_PINK_ROTOR;
			targetDesire = target.pussyDesire;
			targetSensitivity = target.clitSensitivity() * target.toySensitivity();
			this.addToClitToyUsedByEnemyRecord(false);
			BattleManager.actionRemLines(KARRYN_LINE_KARRYN_PETTING_PINK_ROTOR);
			hitBySkillTypeSet = true;
			target.justGotHitBySkillType(JUST_SKILLTYPE_KARRYN_TOY_PLAY_CLIT);
			this.raidClitToy();
			if(useRightHand) this._masRightHand = KARRYN_LINE_KARRYN_PETTING_PINK_ROTOR;
			else this._masLeftHand = KARRYN_LINE_KARRYN_PETTING_PINK_ROTOR;
			this._masHalberd = false;
		}
		else {
			baseDmg = BASEDMG_PETTING_CLIT;
			targetDesire = target.pussyDesire;
			targetSensitivity = target.clitSensitivity();
			this.addToActorClitPettedRecord(false, false, true);
			BattleManager.actionRemLines(LINE_KARRYN_MAS_TOUCH_CLIT);
			this.raidClitPet(true);
			if(useRightHand) this._masRightHand = LINE_KARRYN_MAS_TOUCH_CLIT;
			else this._masLeftHand = LINE_KARRYN_MAS_TOUCH_CLIT;
			this._masHalberd = false;
		}
	break;
	case AREA_PUSSY:
		if(useHalberd) {
			baseDmg = BASEDMG_SEXACT_PUSSYSEX;
			targetDesire = target.pussyDesire;
			targetSensitivity = target.pussySensitivity();
			//this.addToActorPussyPettedRecord(false, false, true);
			this.addToActorMasturbatedUsingHalberdRecord();
			BattleManager.actionRemLines(LINE_KARRYN_MAS_PUSSY_RUB_HALBERD);
			this.raidPussySex();
			this._masRightHand = false;
			this._masLeftHand = false;
			this._masHalberd = LINE_KARRYN_MAS_PUSSY_RUB_HALBERD;
		}
		else if(usingPussyToy) {
			baseDmg = BASEDMG_TOY_PENIS_DILDO;
			targetDesire = target.pussyDesire;
			targetSensitivity = target.pussySensitivity() * target.toySensitivity();
			this.addToPussyToyUsedByEnemyRecord(false);
			BattleManager.actionRemLines(KARRYN_LINE_KARRYN_PETTING_PENIS_DILDO);
			hitBySkillTypeSet = true;
			target.justGotHitBySkillType(JUST_SKILLTYPE_KARRYN_TOY_PLAY_PUSSY);
			this.raidPussyToy();
			if(useRightHand) this._masRightHand = JUST_SKILLTYPE_KARRYN_TOY_PLAY_PUSSY;
			else this._masLeftHand = JUST_SKILLTYPE_KARRYN_TOY_PLAY_PUSSY;
			this._masHalberd = false;
		}
		else {
			baseDmg = BASEDMG_PETTING_PUSSY;
			targetDesire = target.pussyDesire;
			targetSensitivity = target.pussySensitivity();
			this.addToActorPussyPettedRecord(false, false, true);
			BattleManager.actionRemLines(LINE_KARRYN_MAS_FINGER_PUSSY);
			this.raidPussyPet(true);
			if(useRightHand) this._masRightHand = LINE_KARRYN_MAS_FINGER_PUSSY;
			else this._masLeftHand = LINE_KARRYN_MAS_FINGER_PUSSY;
			this._masHalberd = false;
		}
	break;
	case AREA_ANAL:
		if(usingAnalToy) {
			baseDmg = BASEDMG_TOY_ANAL_BEADS;
			targetDesire = target.buttDesire;
			targetSensitivity = target.analSensitivity() * target.toySensitivity();
			this.addToAnalToyUsedByEnemyRecord(false);
			BattleManager.actionRemLines(KARRYN_LINE_KARRYN_PETTING_ANAL_BEADS);
			hitBySkillTypeSet = true;
			target.justGotHitBySkillType(JUST_SKILLTYPE_KARRYN_TOY_PLAY_ANAL);
			this.raidAnalToy();
			if(useRightHand) this._masRightHand = KARRYN_LINE_KARRYN_PETTING_ANAL_BEADS;
			else this._masLeftHand = KARRYN_LINE_KARRYN_PETTING_ANAL_BEADS;
			this._masHalberd = false;
		}
		else {
			baseDmg = BASEDMG_PETTING_ANAL;
			targetDesire = target.buttDesire;
			targetSensitivity = target.analSensitivity();
			this.addToActorAnalPettedRecord(false, false, true);
			BattleManager.actionRemLines(LINE_KARRYN_MAS_FINGER_ANUS);
			this.raidAnalPet(true);
			if(useRightHand) this._masRightHand = LINE_KARRYN_MAS_FINGER_ANUS;
			else this._masLeftHand = LINE_KARRYN_MAS_FINGER_ANUS;
			this._masHalberd = false;
		}
	break;
	case AREA_FINGERS:
		baseDmg = BASEDMG_SUCKING_FINGERS;
		targetDesire = target.mouthDesire;
		targetSensitivity = target.mouthSensitivity();
		this.addToActorFingersSuckedRecord(false, false, true);
		BattleManager.actionRemLines(LINE_KARRYN_MAS_SUCK_FINGERS);
		this.raidFingerSuck(true);
		if(useRightHand) this._masRightHand = LINE_KARRYN_MAS_SUCK_FINGERS;
		else this._masLeftHand = LINE_KARRYN_MAS_SUCK_FINGERS;
		this._masHalberd = false;
	break;
	case AREA_MOUTH:
		baseDmg = BASEDMG_SEXACT_BLOWJOB;
		targetDesire = target.mouthDesire;
		targetSensitivity = target.mouthSensitivity();
		//this.addToActorBlowjobRecord(false, false);
		this.addToActorMasturbatedUsingHalberdRecord();
		BattleManager.actionRemLines(LINE_KARRYN_MAS_LICK_HALBERD);
		lickingHalberd = true;
		this.raidKiss(true);
		this._masRightHand = false;
		this._masLeftHand = false;
		this._masHalberd = LINE_KARRYN_MAS_LICK_HALBERD;
	break;
	default:
		console.error("Error dmgFormula masInBattleSkill area: " + area);
	}
	
	this.masRaidCheck_inBattle();
	
	let targetDesireGain = (baseDmg + enemySkillLvl) * targetPettingRate;
	let targetPleasureGain = (targetDesireGain + this.dex * 1.3) * enemySkillRating * targetPettingRate * targetSensitivity;

	//targetPleasureGain *= Math.max(targetPettingRate * targetSensitivity * 0.01, 1 + (0.02 * (this.dex - target.end)));
	
	targetPleasureGain *= target.passivePettingPleasureRate();
	
	let targetPleasureUpperCap = target.getValueOfOrgasmFromPercent((VAR_PLEASURE_UPPER_CAP_COEFF_ONE + (target.slutLvl + 1) * VAR_PLEASURE_UPPER_CAP_COEFF_TWO) * targetSensitivity * targetPettingRate * (VAR_PLEASURE_UPPER_CAP_COEFF_THREE + targetDesire * VAR_PLEASURE_UPPER_CAP_COEFF_FOUR));
	targetPleasureGain = Math.min(targetPleasureGain, targetPleasureUpperCap);
	
	
	let staminaDmg = target.skillCost_karrynOnaniInBattleSkills();
	if(useHalberd && this.hasPassive(PASSIVE_MASTURBATED_HALBERD_COUNT_TWO_ID)) {
		staminaDmg *= 0.9;
		if(this.hasPassive(PASSIVE_MASTURBATED_HALBERD_COUNT_THREE_ID) && this._todayMasturbatedUsingHalberdCount > 0) {
			staminaDmg *= Math.max(0.5, 1 - (this._todayMasturbatedUsingHalberdCount * 0.05));
		}
	}
	
	let result = target.result();
	result.pleasureDamage = targetPleasureGain;
	result.desireAreaDamage = targetDesireGain * .6;
	result.desireRandomDamage = targetDesireGain * .4;
	result.desireCockWeight = 3;
	result.desireTarget = area;
	//result.staminaDamage = staminaDmg;

	switch(area) {
	case AREA_BOOBS:
		target.addToActorBoobsPleasureRecord(targetPleasureGain);
	break;
	case AREA_NIPPLES:
		target.addToActorNipplesPleasureRecord(targetPleasureGain);
	break;
	case AREA_PUSSY:
		target.addToActorPussyPleasureRecord(targetPleasureGain);
	break;
	case AREA_CLIT:
		target.addToActorClitPleasureRecord(targetPleasureGain);
	break;
	case AREA_BUTT:
		target.addToActorButtPleasureRecord(targetPleasureGain);
	break;
	case AREA_ANAL:
		target.addToActorAnalPleasureRecord(targetPleasureGain);
	break;
	case AREA_FINGERS:
	case AREA_MOUTH:
		target.addToActorMouthPleasureRecord(targetPleasureGain);
	break;
	}

	
	//Tachie
	if(useHalberd) {
		this.setMaxTachieSemenBoobsId(3);
		this.setMaxTachieSemenRightBoobId(0);
		this.setMaxTachieSemenLeftBoobId(0);
		
		this.setTachieSemenBoobsExtension('halberd_');
		this.setTachieSemenRightArmExtension('halberd_');
		this.setTachieSemenLeftArmExtension('halberd_');
		this.setTachieSemenWetExtension('halberd_');
		this.setTachieStrayLeftBoobExtension('halberd_');
		this.setTachieStrayRightBoobExtension('halberd_');
		
		if(this.isWearingGlovesAndHat()) {
			this.setTachieFrontB('arms_halberd');
		}
		else {
			this.setTachieFrontB('arms_halberd_naked');
		}
		this.resetTachieRightArm();
		this.resetTachieLeftArm();
		this.resetTachieRightBoob();
		this.resetTachieLeftBoob();
		
		this.setMaxTachieStrayLeftBoobId(1,3,3);
		this.setMaxTachieStrayRightBoobId(2,2,4);
		
		this.setTachieSemenLeftArmHasHCup(true);
		this.setTachieSemenRightArmHasHCup(true);
		this.setTachieSemenLeftArmHasPCup(true);
		this.setTachieSemenRightArmHasPCup(true);
	}
	else {
		this.resetTachieFrontB();
		this.setMaxTachieSemenBoobsId(0);
		this.setMaxTachieSemenRightBoobId(3);
		this.setMaxTachieSemenLeftBoobId(3);
		this.resetTachieSemenWetExtension();
		this.setMaxTachieStrayLeftBoobId(1,1,1);
		this.setMaxTachieStrayRightBoobId(2,2,2);
		
		if(useRightHand) {
			if(!this.tachieLeftArm) {
				this.masInBattle_resetLeftArmToNormal();
			}
			
			switch(area) {
			case AREA_BOOBS:
				if(this.isWearingGlovesAndHat()) {
					this.setTachieRightArm('touch_oppai');
				}
				else {
					this.setTachieRightArm('touch_oppai_naked');
				}
				
				this.resetTachieRightBoob();
				this.setTachieRightArmHasHCup(true);
				this.setTachieRightArmHasPCup(true);
				
				this.setTachieSemenRightArmExtension('touch_oppai_');
				this.setTachieSemenRightBoobExtension('touch_oppai_');
				this.setTachieStrayRightBoobExtension('touch_oppai_');
				
				this.setTachieSemenRightArmHasHCup(true);
				this.setTachieSemenRightArmHasPCup(true);
			break;
			case AREA_NIPPLES:
				if(this.isWearingGlovesAndHat()) {
					this.setTachieRightArm('touch_chikubi');
				}
				else {
					this.setTachieRightArm('touch_chikubi_naked');
				}
				
				this.resetTachieRightBoob();
				this.setTachieRightArmHasHCup(true);
				this.setTachieRightArmHasPCup(true);
				
				this.setTachieSemenRightArmExtension('touch_chikubi_');
				this.setTachieSemenRightBoobExtension('touch_chikubi_');
				this.setTachieStrayRightBoobExtension('touch_chikubi_');
				
				this.setTachieSemenRightArmHasHCup(true);
				this.setTachieSemenRightArmHasPCup(true);
			break;
			case AREA_PUSSY:
				if(usingPussyToy) {
					if(this.isWearingGlovesAndHat()) {
						this.setTachieRightArm('play_toyP');
					}
					else {
						this.setTachieRightArm('play_toyP_naked');
					}
				
					this.setTachieSemenRightArmExtension('play_toyP_');
					this.setTachieSemenRightBoobExtension('play_toyP_');
					this.setTachieStrayRightBoobExtension('play_toyP_');
					
					this.resetTachieRightBoob();
					this.setTachieRightArmHasHCup(true);
					this.setTachieSemenRightArmHasHCup(false);
					this.setTachieRightArmHasPCup(true);
					this.setTachieSemenRightArmHasPCup(true);
					
					if(this.tachieLeftArm.includes('play_toyP')) this.masInBattle_resetLeftArmToNormal();
				}
				else {
					if(this.isWearingGlovesAndHat()) {
						this.setTachieRightArm('finger_omanko');
					}
					else {
						this.setTachieRightArm('finger_omanko_naked');
					}
					
					this.resetTachieRightBoob();
					this.setTachieRightArmHasHCup(true);
					this.setTachieRightArmHasPCup(true);
					
					this.setTachieSemenRightArmExtension('finger_omanko_');
					this.setTachieSemenRightBoobExtension('finger_omanko_');
					this.setTachieStrayRightBoobExtension('finger_omanko_');
					
					this.setTachieSemenRightArmHasHCup(false);
					this.setTachieSemenRightArmHasPCup(true);
				}
			break;
			case AREA_CLIT:
				if(this.isWearingGlovesAndHat()) {
					this.setTachieRightArm('touch_kuri');
				}
				else {
					this.setTachieRightArm('touch_kuri_naked');
				}
				
				this.resetTachieRightBoob();
				this.setTachieRightArmHasHCup(true);
				this.setTachieRightArmHasPCup(true);

				this.setTachieSemenRightArmExtension('touch_kuri_');
				this.setTachieSemenRightBoobExtension('touch_kuri_');
				this.setTachieStrayRightBoobExtension('touch_kuri_');
				
				this.setTachieSemenRightArmHasHCup(false);
				this.setTachieSemenRightArmHasPCup(true);
			break;
			case AREA_ANAL:
				if(this.isWearingGlovesAndHat()) {
					this.setTachieRightArm('finger_anaru');
				}
				else {
					this.setTachieRightArm('finger_anaru_naked');
				}
				
				if(!this.isWearingGlovesAndHat() && this.boobsSizeIsPCup()) {
					this.setTachieRightBoob('finger_anaru_naked');
				}
				else {
					this.setTachieRightBoob('finger_anaru');
				}

				this.setTachieRightArmHasHCup(false);
				this.setTachieRightBoobHasHCup(true);
				this.setTachieRightArmHasPCup(false);
				this.setTachieRightBoobHasPCup(true);

				this.setTachieSemenRightArmExtension('finger_anaru_');
				this.setTachieSemenRightBoobExtension('finger_anaru_');
				this.setTachieStrayRightBoobExtension('finger_anaru_');
				
				this.setTachieSemenRightArmHasHCup(false);
				this.setTachieSemenRightArmHasPCup(true);
			break;
			case AREA_FINGERS:
				if(this.isWearingGlovesAndHat()) {
					this.setTachieRightArm('suck_fingers');
				}
				else {
					this.setTachieRightArm('suck_fingers_naked');
				}
				
				this.setTachieSemenRightArmExtension('suck_fingers_');
				this.setTachieSemenRightBoobExtension('suck_fingers_');
				this.setTachieStrayRightBoobExtension('suck_fingers_');
				
				this.setTachieRightBoob('suck_fingers');
				this.setTachieRightBoobHasHCup(true);
				this.setTachieRightBoobHasPCup(true);
				
				this.resetTachieMouth();
				this.setTachieRightArmHasHCup(false);
				this.setTachieSemenRightArmHasHCup(false);
				this.setTachieRightArmHasPCup(false);
				this.setTachieSemenRightArmHasPCup(false);
				
				if(this.tachieLeftArm.includes('suck_fingers')) 
					this.masInBattle_resetLeftArmToNormal();
			break;
			}
		}
		//Left Hand
		else {
			if(!this.tachieRightArm) {
				this.masInBattle_resetRightArmToNormal();
			}
			
			switch(area) {
			case AREA_BOOBS:
				if(this.isWearingGlovesAndHat()) {
					this.setTachieLeftArm('touch_oppai');
				}
				else {
					this.setTachieLeftArm('touch_oppai_naked');
				}
				
				this.resetTachieLeftBoob();
				this.setTachieLeftArmHasHCup(true);
				this.setTachieLeftArmHasPCup(true);
				
				this.setTachieSemenLeftArmExtension('touch_oppai_');
				this.setTachieSemenLeftBoobExtension('touch_oppai_');
				this.setTachieStrayLeftBoobExtension('touch_oppai_');
				
				this.setTachieSemenLeftArmHasHCup(true);
				this.setTachieSemenLeftArmHasPCup(true);
			break;
			case AREA_NIPPLES:
				if(this.isWearingGlovesAndHat()) {
					this.setTachieLeftArm('touch_chikubi');
				}
				else {
					this.setTachieLeftArm('touch_chikubi_naked');
				}
				
				this.resetTachieLeftBoob();
				this.setTachieLeftArmHasHCup(true);
				this.setTachieLeftArmHasPCup(true);
				
				this.setTachieSemenLeftArmExtension('touch_chikubi_');
				this.setTachieSemenLeftBoobExtension('touch_chikubi_');
				this.setTachieStrayLeftBoobExtension('touch_chikubi_');
				
				this.setTachieSemenLeftArmHasHCup(true);
				this.setTachieSemenLeftArmHasPCup(true);
			break;
			case AREA_PUSSY:
				if(usingPussyToy) {
					if(this.isWearingGlovesAndHat()) {
						this.setTachieLeftArm('play_toyP');
					}
					else {
						this.setTachieLeftArm('play_toyP_naked');
					}

					this.setTachieSemenLeftArmExtension('play_toyP_');
					this.setTachieSemenLeftBoobExtension('play_toyP_');
					this.setTachieStrayLeftBoobExtension('play_toyP_');
					
					this.resetTachieLeftBoob();
					this.setTachieLeftArmHasHCup(true);
					this.setTachieSemenLeftArmHasHCup(false);
					this.setTachieLeftArmHasPCup(true);
					this.setTachieSemenLeftArmHasPCup(true);
					
					if(this.tachieRightArm.includes('play_toyP')) this.masInBattle_resetRightArmToNormal();
				}
				else {
					if(this.isWearingGlovesAndHat()) {
						this.setTachieLeftArm('finger_omanko');
					}
					else {
						this.setTachieLeftArm('finger_omanko_naked');
					}
					
					this.resetTachieLeftBoob();
					this.setTachieLeftArmHasHCup(true);
					this.setTachieSemenLeftArmHasHCup(false);
					this.setTachieLeftArmHasPCup(true);
					this.setTachieSemenLeftArmHasPCup(true);
					
					this.setTachieSemenLeftArmExtension('finger_omanko_');
					this.setTachieSemenLeftBoobExtension('finger_omanko_');
					this.setTachieStrayLeftBoobExtension('finger_omanko_');
				}
			break;
			case AREA_CLIT:
				if(this.isWearingGlovesAndHat()) {
					this.setTachieLeftArm('touch_kuri');
				}
				else {
					this.setTachieLeftArm('touch_kuri_naked');
				}
				
				this.resetTachieLeftBoob();
				this.setTachieLeftArmHasHCup(true);
				this.setTachieSemenLeftArmHasHCup(false);
				this.setTachieLeftArmHasPCup(true);
				this.setTachieSemenLeftArmHasPCup(true);
				
				this.setTachieSemenLeftArmExtension('touch_kuri_');
				this.setTachieSemenLeftBoobExtension('touch_kuri_');
				this.setTachieStrayLeftBoobExtension('touch_kuri_');
			break;
			case AREA_ANAL:
				if(this.isWearingGlovesAndHat()) {
					this.setTachieLeftArm('finger_anaru');
				}
				else {
					this.setTachieLeftArm('finger_anaru_naked');
				}
				
				this.setTachieLeftBoob('finger_anaru');
				
				this.setTachieLeftArmHasHCup(false);
				this.setTachieLeftBoobHasHCup(true);
				this.setTachieSemenLeftArmHasHCup(false);
				this.setTachieLeftArmHasPCup(false);
				this.setTachieLeftBoobHasPCup(true);
				this.setTachieSemenLeftArmHasPCup(true);
				
				this.setTachieSemenLeftArmExtension('finger_anaru_');
				this.setTachieSemenLeftBoobExtension('finger_anaru_');
				this.setTachieStrayLeftBoobExtension('finger_anaru_');
			break;
			case AREA_FINGERS:
				if(this.isWearingGlovesAndHat()) {
					this.setTachieLeftArm('suck_fingers');
				}
				else {
					this.setTachieLeftArm('suck_fingers_naked');
				}
				
				this.setTachieSemenLeftArmExtension('suck_fingers_');
				this.setTachieSemenLeftBoobExtension('suck_fingers_');
				this.setTachieStrayLeftBoobExtension('suck_fingers_');
				
				this.setTachieLeftBoob('suck_fingers');
				this.setTachieLeftBoobHasHCup(true);
				this.setTachieLeftBoobHasPCup(true);
				
				this.resetTachieMouth();
				this.setTachieLeftArmHasHCup(false);
				this.setTachieSemenLeftArmHasHCup(false);
				this.setTachieLeftArmHasPCup(false);
				this.setTachieSemenLeftArmHasPCup(false);
				
				if(this.tachieRightArm.includes('suck_fingers')) 
					this.masInBattle_resetRightArmToNormal();
			break;
			}
		}
	}
	
	if(!hitBySkillTypeSet)
		target.justGotHitBySkillType(JUST_SKILLTYPE_KARRYN_MASTURBATE);
	
	this.emoteMasturbationInBattlePose(lickingHalberd);
	this.setAllowTachieUpdate(true);
	
	return staminaDmg;
};


Game_Actor.prototype.afterEval_masInBattleSkill = function(area) {
	let currentPleasurePercent = this.currentPercentOfOrgasm(false);
	
	this.increaseOnaniInBattleDesireBuildup(currentPleasurePercent);
	
	let hornyChance = 0;
	
	if(this.isMasturbatingWithHalberd()) {
		if(this.hasPassive(PASSIVE_MASTURBATED_HALBERD_COUNT_ONE_ID)) hornyChance += 25;
	}
	else {
		
	}
	
	if(hornyChance > 0) {
		$gameTroop.setAllEnemiesToHorny_chanceBased(hornyChance, true);
	}
	
	this.resetEndurePleasureStanceCost();
	this.resetAttackSkillConsUsage();
	this.resetSexSkillConsUsage(false);
	
	if(Karryn.hasEdict(EDICT_PRISON_EMBLEM_SCENARIO)) {
		this.gainDescensionRandomStatsExp(this.level, 55, 18, 15);
	}
	else {
		this.gainDexterityExp(45, this.level);
		this.gainStaminaExp(15, this.level);
		this.gainEnduranceExp(25, this.level);
		this.gainCharmExp(3, this.level);
	}
	
};

Game_Actor.prototype.postDamage_femaleOrgasm_masturbationInBattle = function(orgasmCount, addJustOrgasmedState) {
	let changeToCombatPose = false;
	
	if(addJustOrgasmedState) {
		changeToCombatPose = true;
	}
	else {
		let chanceToChangeToCombatPose = 50 + orgasmCount * 50;
		
		if(this.hasPassive(PASSIVE_MASTURBATE_ORGASM_TWO_ID)) chanceToChangeToCombatPose -= 60;
		else if(this.hasPassive(PASSIVE_MASTURBATE_ORGASM_ONE_ID)) chanceToChangeToCombatPose -= 35;
			
		if(this.hasPassive(PASSIVE_ORGASM_TRIPLE_ID)) chanceToChangeToCombatPose -= 40;
		else if(this.hasPassive(PASSIVE_ORGASM_DOUBLE_ID)) chanceToChangeToCombatPose -= 20;
		
		if(this.hasPassive(PASSIVE_ORGASM_COUNT_SIX_ID)) chanceToChangeToCombatPose -= 20;
		else if(this.hasPassive(PASSIVE_ORGASM_COUNT_THREE_ID)) chanceToChangeToCombatPose -= 10;
		
		if(this.hasPassive(PASSIVE_ORGASM_PEOPLE_FOUR_ID)) chanceToChangeToCombatPose -= 10;
		
		if(this.hasPassive(PASSIVE_PUSSY_CREAMPIE_ORGASM_ONE_ID)) chanceToChangeToCombatPose -= 5;
		
		if(this.hasPassive(PASSIVE_SADISM_ORGASM_ONE_ID) && this._tempRecordSubduedEnemiesWithAttack > 0) 
			chanceToChangeToCombatPose -= this._tempRecordSubduedEnemiesWithAttack * 2;
		
		if(Math.randomInt(100) < chanceToChangeToCombatPose) 
			changeToCombatPose = true;
	}
	
	if(changeToCombatPose) {
		this.setStandbyPose();
		this.refreshPose(true);
	}
};

Game_Actor.prototype.masInBattle_resetLeftArmToNormal = function() {
	if(this.isWearingGlovesAndHat()) {
		this.setTachieLeftArm('normal');
	}
	else {
		this.setTachieLeftArm('normal_naked');
	}
	
	this.resetTachieLeftBoob();
	this.setTachieLeftArmHasHCup(true);
	this.setTachieLeftArmHasPCup(true);
	
	this.setTachieSemenLeftArmExtension('normal_');
	this.setTachieSemenLeftBoobExtension('normal_');
	
	this.setMaxTachieStrayLeftBoobId(1,1,1);
	this.setTachieSemenLeftArmHasHCup(false);
	this.setTachieSemenLeftArmHasPCup(true);
	
	this._masLeftHand = false;
};
Game_Actor.prototype.masInBattle_resetRightArmToNormal = function() {
	if(this.isWearingGlovesAndHat()) {
		this.setTachieRightArm('normal');
	}
	else {
		this.setTachieRightArm('normal_naked');
	}
	
	this.resetTachieRightBoob();
	this.setTachieRightArmHasHCup(true);
	this.setTachieRightArmHasPCup(true);

	this.setTachieSemenRightArmExtension('normal_');
	this.setTachieSemenRightBoobExtension('normal_');
	
	this.setMaxTachieStrayRightBoobId(2,2,2);
	this.setTachieSemenRightArmHasHCup(false);
	this.setTachieSemenRightArmHasPCup(true);
	
	this._masRightHand = false;
};


/////////////////
///////////////////
// Couch Onani
// Masturbation Battle
///////////////////
////////////////

//Pre Battle
//Pre Masturbation Battle
Game_Actor.prototype.preMasturbationBattleSetup = function() {
	this.preBattleSetup();
	this.disableMentalPhase();
	this.resetInvasionNoiseLevel();
	this.resetOnaniFrustration();
	this.setAsNoHalberdBattle();
	this.clearBattleSkillsFlags();
	
	this.addToActorMasturbatedCouchRecord();
	this._todayMasturbatedBeforeRest = true;
	this._orgasmCallQueuedUp = false;
	this._startOfInvasionBattle = false;
	this.removeState(STATE_CONFIDENT_ID);
	
	if(this.mouthDesire < 50 && this.boobsDesire < 50 && this.pussyDesire < 50 && this.buttDesire < 75) {
		let boostArray = [MOUTH_ID, BOOBS_ID, PUSSY_ID];
		if(this.maxButtDesire >= 75) {
			boostArray.push(BUTT_ID);
		}
		if(this.hasPassive(CHARA_CREATE_THREE_MOUTH_ID)) {
			boostArray.push(MOUTH_ID);
			boostArray.push(MOUTH_ID);
			boostArray.push(MOUTH_ID);
			boostArray.push(MOUTH_ID);
		}
		else if(this.hasPassive(CHARA_CREATE_THREE_BOOBS_ID)) {
			boostArray.push(BOOBS_ID);
			boostArray.push(BOOBS_ID);
			boostArray.push(BOOBS_ID);
			boostArray.push(BOOBS_ID);
		}
		else if(this.hasPassive(CHARA_CREATE_THREE_PUSSY_ID)) {
			boostArray.push(PUSSY_ID);
			boostArray.push(PUSSY_ID);
			boostArray.push(PUSSY_ID);
			boostArray.push(PUSSY_ID);
		}
		else if(this.hasPassive(CHARA_CREATE_THREE_BUTT_ID) && this.maxButtDesire >= 75) {
			boostArray.push(BUTT_ID);
			boostArray.push(BUTT_ID);
			boostArray.push(BUTT_ID);
			boostArray.push(BUTT_ID);
			boostArray.push(BUTT_ID);
		}
		
		let boostDesire = boostArray[Math.randomInt(boostArray.length)];
		
		if(boostDesire === MOUTH_ID) 
			this.setMouthDesire(50, false);
		else if(boostDesire === BOOBS_ID) 
			this.setBoobsDesire(50, false);
		else if(boostDesire === PUSSY_ID) 
			this.setPussyDesire(50, false);
		else if(boostDesire === BUTT_ID) 
			this.setButtDesire(75, false);
	}
	
	$gameMap.changeBattleback(BATTLEBACK1_MASTURBATION_COUCH_NAME, null);
	this.setMasturbationCouchPose();
	$gameVariables.setValue(VARIABLE_TROOPID_ID, TROOP_ONANI_COUCH_ID);
	
	this._masRightHand = false;
	this._masLeftHand = false;
	this._masHalberd = false;
	
	this._dirty = true;
}; 

//Post Battle
//Post Masturbation Battle
Game_Actor.prototype.postMasturbationBattleCleanup = function() {
	let invasionChance = this.getInvasionChance();
	let invasionNoiseLevel = this.getInvasionNoiseLevel();
	let invasionNoiseLevelEffect = Math.max(invasionChance * VAR_NOISE_LEVEL_INVASION_CHANCE, VAR_NOISE_LEVEL_MIN_EFFECT);

	if(invasionChance > 0)
		invasionChance += invasionNoiseLevel * invasionNoiseLevelEffect;
	
	if(invasionChance > 0 && Math.randomInt(100) < invasionChance) {
		$gameSwitches.setValue(SWITCH_INVASION_BATTLE_ID, true);
		this._startOfInvasionBattle = true;
		if(this._tempRecordOrgasmCount > 0) 
			BattleManager.setEnemySneakAttackBattle();
		this.refreshSlutLvlStageVariables_General();
	}
	else {
		$gameSwitches.setValue(SWITCH_INVASION_BATTLE_ID, false);
		this._startOfInvasionBattle = false;
		this.postBattleCleanup();
		$gameActors.actor(ACTOR_KARRYN_ID).setPleasure(0);
	}
	
	$gameActors.actor(ACTOR_KARRYN_ID).setWardenMapPose(0);
};	


	
//Skill cost
Game_Actor.prototype.staminaCost_masturbateBattleSkills = function() {
	let cost = Math.round(this.maxstamina / 
	(VAR_BASE_MASTURBATE_TURNS + this.masturbateLvl()))
	return cost;
};

// Masturbate Battle Body Slots
Game_Actor.prototype.masturbateBattle_setRightHandOn = function(slotPart) { 
	this.setBodyPart(RIGHT_HAND_ID, slotPart);
};
Game_Actor.prototype.masturbateBattle_setLeftHandOn = function(slotPart) { 
	this.setBodyPart(LEFT_HAND_ID, slotPart);
};
Game_Actor.prototype.masturbateBattle_setMouthOn = function(slotPart) { 
	this.setBodyPart(MOUTH_ID, slotPart);
};

Game_Actor.prototype.masturbateBattle_rightHandIsOn = function(slotPart) { 
	return this.getBodySlotStatus(RIGHT_HAND_ID) === slotPart;
};
Game_Actor.prototype.masturbateBattle_leftHandIsOn = function(slotPart) { 
	return this.getBodySlotStatus(LEFT_HAND_ID) === slotPart;
};
Game_Actor.prototype.masturbateBattle_MouthIsOn = function(slotPart) { 
	return this.getBodySlotStatus(MOUTH_ID) === slotPart;
};

Game_Actor.prototype.masturbateBattle_rightHandIsFree = function() { 
	return this.getBodySlotStatus(RIGHT_HAND_ID) === SLOT_FREE;
};
Game_Actor.prototype.masturbateBattle_LeftHandIsFree = function() { 
	return this.getBodySlotStatus(LEFT_HAND_ID) === SLOT_FREE;
};
Game_Actor.prototype.masturbateBattle_MouthIsFree = function() { 
	return this.getBodySlotStatus(MOUTH_ID) === SLOT_FREE;
};

////////
// Noise

Game_Actor.prototype.resetInvasionNoiseLevel = function() { 
	this._invasionNoiseLevel = 0;
	this._invasionNoise = 0;
};
Game_Actor.prototype.increaseInvasionNoise = function(value) { 
	let noiseMultipler = 1;
	let generalReactionScore = this.getReactionScore();
	
	if(generalReactionScore >= VAR_DEF_RS_LV3_REQ) 
		noiseMultipler = 2;
	else if(generalReactionScore >= VAR_DEF_RS_LV2_REQ) 
		noiseMultipler = 1.5;
	else if(generalReactionScore >= VAR_DEF_RS_LV1_REQ) 
		noiseMultipler = 1;
	else
		noiseMultipler = 0.5;
	
	let noiseValue = value * noiseMultipler;
	this._invasionNoise += noiseValue;
	if(this._invasionNoise >= 10) {
		if(Math.randomInt(5) < this._invasionNoise - 8) {
			this.increaseInvasionNoiseLevel(1);
			this._invasionNoise = 0;
		}
	}
};
Game_Actor.prototype.increaseInvasionNoiseLevel = function(levels) { 
	this._invasionNoiseLevel += levels;
	
	let invasionNoiseLevelText = '';
	
	if(this._invasionNoiseLevel <= 2) invasionNoiseLevelText = TextManager.invasionNoiseLevelOne;
	else if(this._invasionNoiseLevel <= 4) invasionNoiseLevelText = TextManager.invasionNoiseLevelTwo;
	else if(this._invasionNoiseLevel <= 6) invasionNoiseLevelText = TextManager.invasionNoiseLevelThree;
	else invasionNoiseLevelText = TextManager.invasionNoiseLevelFour;
	
	BattleManager._logWindow.push('addText', invasionNoiseLevelText);
	
	if(this.hasEdict(EDICT_OFFICE_SELL_ONANI_VIDEO))
		$gameParty.increaseExtraGoldReward(Math.randomInt(20 * levels));
};

Game_Actor.prototype.getInvasionNoiseLevel = function() { 
	return this._invasionNoiseLevel;
};

////////
// Is Valid Target

Game_Enemy.prototype.isValidTargetForMasturbateBattle_skillTouch = function() { 
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let bodyType = this.enemyType();
	let validTarget = false;
	
	switch(bodyType) {
	case ENEMYTYPE_MASTURBATE_BOOBS_TAG:
		validTarget = actor.boobsDesire >= actor.boobsPettingBoobsDesireRequirement();
	break;
	case ENEMYTYPE_MASTURBATE_CLIT_TAG:
		validTarget = actor.pussyDesire >= actor.clitPettingPussyDesireRequirement();
	break;
	case ENEMYTYPE_MASTURBATE_NIPPLES_TAG:
		validTarget = actor.boobsDesire >= actor.nipplesPettingBoobsDesireRequirement();
	break;
	case ENEMYTYPE_MASTURBATE_PUSSY_TAG:
		if(actor.isWearingPussyToy()) 
			validTarget = false;
		else 
			validTarget = actor.pussyDesire >= actor.pussyPettingPussyDesireRequirement();
	break;
	case ENEMYTYPE_MASTURBATE_ANAL_TAG:
		validTarget = actor.buttDesire >= actor.analPettingButtDesireRequirement();
	break;
	}
	
	if(validTarget) {
		this._selectionShowName = true;
		this.masturbateBattleSpritePos_nipples();
		this.masturbateBattleSpritePos_boobs();
		return true;
	}
	else {
		this._selectionShowName = false;
		return false;
	}
};

Game_Enemy.prototype.isValidTargetForMasturbateBattle_skillFinger = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let bodyType = this.enemyType();
	let validTarget = false;
	
	if(bodyType == ENEMYTYPE_MASTURBATE_PUSSY_TAG) {
		if(actor.isWearingPussyToy())
			validTarget = actor.pussyDesire >= actor.pussyToyPussyDesireRequirement() && actor.isWet;
		else
			validTarget = actor.pussyDesire >= actor.pussySexPussyDesireRequirement() && actor.isWet;
	}
	else if(bodyType == ENEMYTYPE_MASTURBATE_ANAL_TAG) {
		if(actor.isWearingAnalToy())
			validTarget = actor.buttDesire >= actor.analToyButtDesireRequirement();
		else
			validTarget = actor.buttDesire >= actor.analSexButtDesireRequirement();
	}

	if(validTarget) {
		this._selectionShowName = true;
		return true;
	}
	else {
		this._selectionShowName = false;
		return false;
	}
};

Game_Enemy.prototype.isValidTargetForMasturbateBattle_skillSuck = function() { 
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let bodyType = this.enemyType();
	let validTarget = false;
	
	if(bodyType == ENEMYTYPE_MASTURBATE_FINGERS_TAG) {
		validTarget = actor.mouthDesire >= actor.suckFingersMouthDesireRequirement();
	}
	else if(bodyType == ENEMYTYPE_MASTURBATE_NIPPLES_SUCK_TAG) {
		validTarget = actor.mouthDesire >= actor.suckFingersMouthDesireRequirement() && actor.boobsDesire >= actor.nipplesPettingBoobsDesireRequirement();
	}
	
	if(validTarget) {
		this._selectionShowName = true;
		this.masturbateBattleSpritePos_fingers();
		this.masturbateBattleSpritePos_nipples_suck();
		return true;
	}
	else {
		this._selectionShowName = false;
		return false;
	}
};

///////////
// Masturbation Sprite Pos

Game_Enemy.prototype.masturbateBattleSpritePos_fingers = function() { 
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let bodyType = this.enemyType();
	
	if(bodyType == ENEMYTYPE_MASTURBATE_FINGERS_TAG) {
		if(actor.tachieHead == 'far') 
			this.setCustomEnemySpritePosition(MASTURBATION_LV1_X_OFFSET + MASTURBATION_LV1_FINGERS_FAR_X, MASTURBATION_LV1_Y_OFFSET + MASTURBATION_LV1_FINGERS_FAR_Y);
		else if(actor.tachieHead == 'close') {
			if(actor.tachieRightArm == 'suck_fingers') 
				this.setCustomEnemySpritePosition(MASTURBATION_LV1_X_OFFSET + MASTURBATION_LV1_FINGERS_CLOSE_SUCK_FINGERS_X, MASTURBATION_LV1_Y_OFFSET + MASTURBATION_LV1_FINGERS_CLOSE_SUCK_FINGERS_Y);
			else
				this.setCustomEnemySpritePosition(MASTURBATION_LV1_X_OFFSET + MASTURBATION_LV1_FINGERS_CLOSE_X, MASTURBATION_LV1_Y_OFFSET + MASTURBATION_LV1_FINGERS_CLOSE_Y);
		}
	}
};

Game_Enemy.prototype.masturbateBattleSpritePos_boobs = function() { 
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let bodyType = this.enemyType();
	
	if(bodyType == ENEMYTYPE_MASTURBATE_BOOBS_TAG) {
		if(actor.tachieLeftBoob == 'normal' || actor.tachieLeftBoob == 'touch_oppai') 
			this.setCustomEnemySpritePosition(MASTURBATION_LV1_X_OFFSET + MASTURBATION_LV1_BOOBS_NORMAL_X, MASTURBATION_LV1_Y_OFFSET + MASTURBATION_LV1_BOOBS_NORMAL_Y);
		else {
			this.setCustomEnemySpritePosition(MASTURBATION_LV1_X_OFFSET + MASTURBATION_LV1_BOOBS_MOVED_X, MASTURBATION_LV1_Y_OFFSET + MASTURBATION_LV1_BOOBS_MOVED_Y);
		}
	}
};

Game_Enemy.prototype.masturbateBattleSpritePos_nipples = function() { 
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let bodyType = this.enemyType();
	
	if(bodyType == ENEMYTYPE_MASTURBATE_NIPPLES_TAG) {
		if(actor.tachieRightBoob == 'touch_chikubi') {
			if(Karryn.boobsSizeIsHCup()) {
				this.setCustomEnemySpritePosition(
					MASTURBATION_LV1_X_OFFSET + MASTURBATION_LV1_NIPPLES_TOUCH_HCUP_X,
					MASTURBATION_LV1_Y_OFFSET + MASTURBATION_LV1_NIPPLES_TOUCH_HCUP_Y
				);
			} else if(Karryn.boobsSizeIsPCup()) {
				this.setCustomEnemySpritePosition(
					MASTURBATION_LV1_X_OFFSET + MASTURBATION_LV1_NIPPLES_TOUCH_PCUP_X,
					MASTURBATION_LV1_Y_OFFSET + MASTURBATION_LV1_NIPPLES_TOUCH_PCUP_Y
				);
			} else {
				this.setCustomEnemySpritePosition(
					MASTURBATION_LV1_X_OFFSET + MASTURBATION_LV1_NIPPLES_TOUCH_X,
					MASTURBATION_LV1_Y_OFFSET + MASTURBATION_LV1_NIPPLES_TOUCH_Y
				);
			}
		} else {
			if(Karryn.boobsSizeIsHCup()) {
				this.setCustomEnemySpritePosition(
					MASTURBATION_LV1_X_OFFSET + MASTURBATION_LV1_NIPPLES_NORMAL_HCUP_X,
					MASTURBATION_LV1_Y_OFFSET + MASTURBATION_LV1_NIPPLES_NORMAL_HCUP_Y - 5
				);
			} else if(Karryn.boobsSizeIsPCup()) {
				this.setCustomEnemySpritePosition(
					MASTURBATION_LV1_X_OFFSET + MASTURBATION_LV1_NIPPLES_NORMAL_PCUP_X,
					MASTURBATION_LV1_Y_OFFSET + MASTURBATION_LV1_NIPPLES_NORMAL_PCUP_Y
				);
			} else {
				this.setCustomEnemySpritePosition(
					MASTURBATION_LV1_X_OFFSET + MASTURBATION_LV1_NIPPLES_NORMAL_X + 25,
					MASTURBATION_LV1_Y_OFFSET + MASTURBATION_LV1_NIPPLES_NORMAL_Y
				);
			}
		}
	}
};

Game_Enemy.prototype.masturbateBattleSpritePos_nipples_suck = function() { 
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let bodyType = this.enemyType();
	
	if(bodyType == ENEMYTYPE_MASTURBATE_NIPPLES_SUCK_TAG) {
		switch(actor.tachieLeftBoob) {
			case 'touch_oppai':
				if(Karryn.boobsSizeIsPCup()) {
					this.setCustomEnemySpritePosition(
						MASTURBATION_LV1_X_OFFSET + MASTURBATION_LV1_NIPPLES_SUCK_OPPAI_PCUP_X,
						MASTURBATION_LV1_Y_OFFSET + MASTURBATION_LV1_NIPPLES_SUCK_OPPAI_PCUP_Y
					);
				} else if(Karryn.boobsSizeIsHCup()) {
					this.setCustomEnemySpritePosition(
						MASTURBATION_LV1_X_OFFSET + MASTURBATION_LV1_NIPPLES_SUCK_HCUP_X - 5,
						MASTURBATION_LV1_Y_OFFSET + MASTURBATION_LV1_NIPPLES_SUCK_HCUP_Y - 5
					);
				} else {
					this.setCustomEnemySpritePosition(
						MASTURBATION_LV1_X_OFFSET + MASTURBATION_LV1_NIPPLES_SUCK_X + 20,
						MASTURBATION_LV1_Y_OFFSET + MASTURBATION_LV1_NIPPLES_SUCK_Y - 3
					);
				}

				break;
			case 'suck_chikubi':
				if(Karryn.boobsSizeIsPCup()) {
					if(actor.tachieRightBoob == 'touch_chikubi') {
						this.setCustomEnemySpritePosition(
							MASTURBATION_LV1_X_OFFSET + MASTURBATION_LV1_NIPPLES_TOUCH_PCUP_X,
							MASTURBATION_LV1_Y_OFFSET + MASTURBATION_LV1_NIPPLES_TOUCH_PCUP_Y
						);
					} else {
						this.setCustomEnemySpritePosition(
							MASTURBATION_LV1_X_OFFSET + MASTURBATION_LV1_NIPPLES_SUCK_SUCKING_PCUP_X,
							MASTURBATION_LV1_Y_OFFSET + MASTURBATION_LV1_NIPPLES_SUCK_SUCKING_PCUP_Y
						);
					}
				} else if(Karryn.boobsSizeIsHCup()) {
					if(actor.tachieRightBoob == 'touch_chikubi') {
						this.setCustomEnemySpritePosition(
							MASTURBATION_LV1_X_OFFSET + MASTURBATION_LV1_NIPPLES_TOUCH_HCUP_X,
							MASTURBATION_LV1_Y_OFFSET + MASTURBATION_LV1_NIPPLES_TOUCH_HCUP_Y
						);
					} else {
						this.setCustomEnemySpritePosition(
							MASTURBATION_LV1_X_OFFSET + MASTURBATION_LV1_NIPPLES_NORMAL_HCUP_X,
							MASTURBATION_LV1_Y_OFFSET + MASTURBATION_LV1_NIPPLES_NORMAL_HCUP_Y - 5
						);
					}
				} else {
					if(actor.tachieRightBoob == 'touch_chikubi') {
						this.setCustomEnemySpritePosition(
							MASTURBATION_LV1_X_OFFSET + MASTURBATION_LV1_NIPPLES_TOUCH_X,
							MASTURBATION_LV1_Y_OFFSET + MASTURBATION_LV1_NIPPLES_TOUCH_Y
						);
					} else {
						this.setCustomEnemySpritePosition(
							MASTURBATION_LV1_X_OFFSET + MASTURBATION_LV1_NIPPLES_NORMAL_X + 25,
							MASTURBATION_LV1_Y_OFFSET + MASTURBATION_LV1_NIPPLES_NORMAL_Y
						);
					}
				}

				break;
			case 'touch_chikubi':
				if(Karryn.boobsSizeIsPCup()) {
					this.setCustomEnemySpritePosition(
						MASTURBATION_LV1_X_OFFSET + MASTURBATION_LV1_NIPPLES_SUCK_TOUCHED_PCUP_X,
						MASTURBATION_LV1_Y_OFFSET + MASTURBATION_LV1_NIPPLES_SUCK_TOUCHED_PCUP_Y
					);
				} else if(Karryn.boobsSizeIsHCup()) {
				this.setCustomEnemySpritePosition(
					MASTURBATION_LV1_X_OFFSET + MASTURBATION_LV1_NIPPLES_SUCK_TOUCHED_HCUP_X + 28,
					MASTURBATION_LV1_Y_OFFSET + MASTURBATION_LV1_NIPPLES_SUCK_TOUCHED_HCUP_Y + 10
				);
				} else {
				this.setCustomEnemySpritePosition(
					MASTURBATION_LV1_X_OFFSET + MASTURBATION_LV1_NIPPLES_SUCK_TOUCHED_X,
					MASTURBATION_LV1_Y_OFFSET + MASTURBATION_LV1_NIPPLES_SUCK_TOUCHED_Y
				);
				}

				break;
			default:
				if(Karryn.boobsSizeIsPCup()) {
					this.setCustomEnemySpritePosition(
						MASTURBATION_LV1_X_OFFSET + MASTURBATION_LV1_NIPPLES_SUCK_PCUP_X,
						MASTURBATION_LV1_Y_OFFSET + MASTURBATION_LV1_NIPPLES_SUCK_PCUP_Y
					);
				} else if(Karryn.boobsSizeIsHCup()) {
					this.setCustomEnemySpritePosition(
						MASTURBATION_LV1_X_OFFSET + MASTURBATION_LV1_NIPPLES_SUCK_HCUP_X + 15,
						MASTURBATION_LV1_Y_OFFSET + MASTURBATION_LV1_NIPPLES_SUCK_HCUP_Y
					);
				} else {
					this.setCustomEnemySpritePosition(
						MASTURBATION_LV1_X_OFFSET + MASTURBATION_LV1_NIPPLES_SUCK_X,
						MASTURBATION_LV1_Y_OFFSET + MASTURBATION_LV1_NIPPLES_SUCK_Y
					);
				}
		}
	}
};

//////////
// Release

Game_Actor.prototype.masturbateBattle_resetLeftHand = function() {
	if(this.masturbateBattle_leftHandIsOn(SLOT_M_MOUTH)) {
		this.masturbateBattle_setMouthOn(SLOT_FREE);
		this.setMaxTachieDroolFingersId(0); 
		this.setMaxTachieDroolNipplesId(0);
	}
	this.masturbateBattle_setLeftHandOn(SLOT_FREE);
	
	this.setTachieLeftArm('normal');
	this.setTachieLeftBoob('normal');
	this.setTachieStrayLeftBoobExtension('normal_');
	
	this._masLeftHand = false;
};
	
Game_Actor.prototype.masturbateBattle_resetRightHand = function() {
	if(this.masturbateBattle_rightHandIsOn(SLOT_M_MOUTH)) {
		this.masturbateBattle_setMouthOn(SLOT_FREE);
		this.setMaxTachieDroolFingersId(0); 
		this.setMaxTachieDroolNipplesId(0);
	}
	this.masturbateBattle_setRightHandOn(SLOT_FREE);
	
	this.setTachieRightArm('normal');
	this.setTachieRightBoob('normal');
	this.setTachieStrayRightBoobExtension('normal_');
	
	this._masBattle_tachiePussyToyConsUsage = false;
	
	this._masRightHand = false;
};

////////
// Stop Masturbating (Couch)
Game_Actor.prototype.showEval_masturbateBattle_stopMasturbating = function() {
	let reqOrgasms = 0;
	
	reqOrgasms += Math.round(this.masturbateLvl() * 0.5);
	reqOrgasms -= Math.round(this.getFatigueLevel() * 0.5);
	
	reqOrgasms = Math.max(1, reqOrgasms);
	if(this._tempRecordOrgasmCount >= reqOrgasms) return true;
};

Game_Actor.prototype.afterEval_masturbateBattle_stopMasturbating = function() {
	$gameTroop.setAllEnemiesToHide();
};

///////
// Show Eval

Game_Actor.prototype.showEval_masturbateBattle_skillTouch = function() {
	return this.boobsDesire >= this.boobsPettingBoobsDesireRequirement() 
	|| this.pussyDesire >= this.clitPettingPussyDesireRequirement()
	|| this.boobsDesire >= this.nipplesPettingBoobsDesireRequirement()
	|| this.pussyDesire >= this.pussyPettingPussyDesireRequirement()
	|| this.buttDesire >= this.analPettingButtDesireRequirement();
};
Game_Actor.prototype.showEval_masturbateBattle_skillFinger = function() {
	return (this.pussyDesire >= this.pussySexPussyDesireRequirement() && this.isWet)
	|| this.buttDesire >= this.analSexButtDesireRequirement();
};
Game_Actor.prototype.showEval_masturbateBattle_skillSuck = function() {
	return this.mouthDesire >= this.suckFingersMouthDesireRequirement()
	|| (this.mouthDesire >= this.suckFingersMouthDesireRequirement() && this.boobsDesire >= this.nipplesPettingBoobsDesireRequirement());
};

////////
// Before Eval

//Touch
Game_Actor.prototype.beforeEval_masturbateBattle_skillTouch = function(target) {
	let bodyType = target.enemyType();
	let onaniLvl = this.masturbateLvl();
	let extraGoldReward = 0;
	if(this.hasEdict(EDICT_OFFICE_SELL_ONANI_VIDEO))
		extraGoldReward = Math.randomInt(onaniLvl * 5 + 12);
	
	switch(bodyType) {
	case ENEMYTYPE_MASTURBATE_CLIT_TAG:
		if(this.isWearingClitToy_PinkRotor()) {
			this.increaseInvasionNoise(2);
			
			this.masturbateBattle_resetLeftHand();
			this.masturbateBattle_setLeftHandOn(SLOT_M_CLIT);
			
			this.setTachieLeftArm('toyC');
			
			BattleManager._logWindow.push('addText', TextManager.masturbateBattleToyClitPinkRotor);
			BattleManager.actionRemLines(KARRYN_LINE_KARRYN_PETTING_PINK_ROTOR);
			$gameParty.increaseExtraGoldReward(extraGoldReward * 1.3);
			this.raidClitToy();
		}
		else {
			if(!this.masturbateBattle_rightHandIsOn(SLOT_M_CLIT))
				this.increaseInvasionNoise(2);
			
			this.masturbateBattle_resetRightHand();
			this.masturbateBattle_setRightHandOn(SLOT_M_CLIT);
			
			if(this.boobsSizeIsPCup()) {
				this.resetTachieRightArm();
			}
			else {
				this.setTachieRightArm('touch_mame');
			}
			
			if(this.boobsSizeIsHCup()) {
				this.setTachieRightBoob('normal');
				this.setTachieStrayRightBoobExtension('normal_');
			}
			else {
				this.setTachieRightBoob('touch_mame');
				this.setTachieStrayRightBoobExtension('touch_mame_');
			}

			BattleManager._logWindow.push('addText', TextManager.masturbateBattleTouchClit);
			BattleManager.actionRemLines(LINE_KARRYN_MAS_TOUCH_CLIT);
			$gameParty.increaseExtraGoldReward(extraGoldReward);
			this.raidClitPet(true);
		}
	break;
	case ENEMYTYPE_MASTURBATE_PUSSY_TAG:
		if(!this.masturbateBattle_leftHandIsOn(SLOT_M_PUSSY))
			this.increaseInvasionNoise(2);
		
		this.masturbateBattle_resetLeftHand();
		this.masturbateBattle_setLeftHandOn(SLOT_M_PUSSY);
		if(this.boobsSizeIsPCup()) {
			this.setTachieLeftBoob('touch_omanko');
			this.setTachieStrayLeftBoobExtension('touch_omanko_');
			this.resetTachieLeftArm();
		}
		else {
			this.setTachieLeftArm('touch_omanko');
		}
		BattleManager._logWindow.push('addText', TextManager.masturbateBattleTouchPussy);
		BattleManager.actionRemLines(LINE_KARRYN_MAS_TOUCH_PUSSY);
		$gameParty.increaseExtraGoldReward(extraGoldReward * 1.2);
		this.raidPussyPet(true);
	break;
	case ENEMYTYPE_MASTURBATE_ANAL_TAG:
		if(!this.masturbateBattle_leftHandIsOn(SLOT_M_ANAL))
			this.increaseInvasionNoise(2);
		
		this.masturbateBattle_resetLeftHand();
		this.masturbateBattle_setLeftHandOn(SLOT_M_ANAL);
		this.setTachieLeftArm('touch_anaru');
		if(this.boobsSizeIsPCup()) {
			this.setTachieLeftBoob('touch_anaru');
			this.setTachieStrayLeftBoobExtension('touch_anaru_');
		}
		BattleManager._logWindow.push('addText', TextManager.masturbateBattleTouchAnal);
		BattleManager.actionRemLines(LINE_KARRYN_MAS_TOUCH_ANUS);
		$gameParty.increaseExtraGoldReward(extraGoldReward * 1.2);
		this.raidAnalPet(true);
	break;
	case ENEMYTYPE_MASTURBATE_BOOBS_TAG:
		if(!this.masturbateBattle_leftHandIsOn(SLOT_M_BOOBS))
			this.increaseInvasionNoise(2);
		
		this.masturbateBattle_resetLeftHand();
		this.masturbateBattle_setLeftHandOn(SLOT_M_BOOBS);
		this.resetTachieLeftArm();
		this.setTachieLeftBoob('touch_oppai');
		this.setTachieStrayLeftBoobExtension('touch_oppai_');
		BattleManager._logWindow.push('addText', TextManager.masturbateBattleTouchBoobs);
		BattleManager.actionRemLines(LINE_KARRYN_MAS_TOUCH_BOOBS);
		$gameParty.increaseExtraGoldReward(extraGoldReward);
		this.raidBoobsPet(true);
	break;
	case ENEMYTYPE_MASTURBATE_NIPPLES_TAG:
		if(!this.masturbateBattle_rightHandIsOn(SLOT_M_NIPPLES))
			this.increaseInvasionNoise(2);
		
		this.masturbateBattle_resetRightHand();
		this.masturbateBattle_resetLeftHand();
		this.masturbateBattle_setRightHandOn(SLOT_M_NIPPLES);
		this.masturbateBattle_setLeftHandOn(SLOT_M_NIPPLES);
		this.resetTachieRightArm();
		this.resetTachieLeftArm();
		this.setTachieRightBoob('touch_chikubi');
		this.setTachieLeftBoob('touch_chikubi');
		this.setTachieStrayLeftBoobExtension('touch_chikubi_');
		this.setTachieStrayRightBoobExtension('touch_chikubi_');
		BattleManager._logWindow.push('addText', TextManager.masturbateBattleTouchNipples);
		BattleManager.actionRemLines(LINE_KARRYN_MAS_TOUCH_NIPPLES);
		$gameParty.increaseExtraGoldReward(extraGoldReward * 1.2);
		this.raidNipplesPet(true);
	break;
	}
	
	this.emoteMasturbateCouchBattle();
};//End Touch

//Finger
Game_Actor.prototype.beforeEval_masturbateBattle_skillFinger = function(target) {
	let bodyType = target.enemyType();
	let onaniLvl = this.masturbateLvl();
	let extraGoldReward = 0;
	if(this.hasEdict(EDICT_OFFICE_SELL_ONANI_VIDEO))
		extraGoldReward = Math.randomInt(onaniLvl * 7 + 15);
	
	switch(bodyType) {
	case ENEMYTYPE_MASTURBATE_PUSSY_TAG:
		if(this.isWearingPussyToy_PenisDildo()) {
			if(!this.masturbateBattle_rightHandIsOn(SLOT_M_PUSSY))
				this.increaseInvasionNoise(2);
			
			if(this.tachieRightArm.includes('toyP')) {
				this.masturbateBattle_resetRightHand();
				this._masBattle_tachiePussyToyConsUsage = true;
			}
			else {
				this.masturbateBattle_resetRightHand();
			}
			this.masturbateBattle_setRightHandOn(SLOT_M_PUSSY);
			
			if(Math.random() < 0.5)
				this._masBattle_tachiePussyToyPosition = 1;
			else
				this._masBattle_tachiePussyToyPosition = 2;
			
			this.setTachieRightArm('toyP_' + this._masBattle_tachiePussyToyPosition);
			
			if(this.boobsSizeIsPCup()) {
				this.setTachieRightBoob('toyP_' + this._masBattle_tachiePussyToyPosition);
				this.setTachieStrayRightBoobExtension('toyP_' + this._masBattle_tachiePussyToyPosition + '_');
			}
			else {
				this.setTachieRightBoob('normal');
				this.setTachieStrayRightBoobExtension('normal_');
			}
			
			this.setTachieSemenWetPussyToyExtension('' + this._masBattle_tachiePussyToyPosition + '_');
			
			
			BattleManager._logWindow.push('addText', TextManager.masturbateBattleToyPussyPenis);
			BattleManager.actionRemLines(KARRYN_LINE_KARRYN_PETTING_PENIS_DILDO);
			$gameParty.increaseExtraGoldReward(extraGoldReward * 1.3);
			this.raidPussyToy();
		}
		else {
			if(this.masturbateBattle_rightHandIsFree() || (this.masturbateBattle_rightHandIsFree() === this.masturbateBattle_LeftHandIsFree() && !this.masturbateBattle_rightHandIsOn(SLOT_M_CLIT) )) {
				if(!this.masturbateBattle_rightHandIsOn(SLOT_M_PUSSY))
					this.increaseInvasionNoise(2);
				
				this.masturbateBattle_resetRightHand();
				this.masturbateBattle_setRightHandOn(SLOT_M_PUSSY);
				if(Karryn.isCensored())
					this.setTachieRightArm('finger_omanko_cen');
				else
					this.setTachieRightArm('finger_omanko');
				
				if(this.boobsSizeIsPCup()) {
					this.setTachieRightBoob('finger_omanko');
					this.setTachieStrayRightBoobExtension('finger_omanko_');
				}
			}
			else {
				if(!this.masturbateBattle_leftHandIsOn(SLOT_M_PUSSY))
					this.increaseInvasionNoise(2);
				
				this.masturbateBattle_resetLeftHand();
				this.masturbateBattle_setLeftHandOn(SLOT_M_PUSSY);
				if(Karryn.isCensored())
					this.setTachieLeftArm('finger_omanko_cen');
				else
					this.setTachieLeftArm('finger_omanko');
				
				if(this.boobsSizeIsPCup()) {
					this.setTachieLeftBoob('finger_omanko');
					this.setTachieStrayLeftBoobExtension('finger_omanko_');
				}
				
			}
			
			BattleManager._logWindow.push('addText', TextManager.masturbateBattleFingerPussy);
			BattleManager.actionRemLines(LINE_KARRYN_MAS_FINGER_PUSSY);
			$gameParty.increaseExtraGoldReward(extraGoldReward);
			this.raidPussyPet(true);
		}
	break;
	case ENEMYTYPE_MASTURBATE_ANAL_TAG:
		if(this.isWearingAnalToy_AnalBeads()) {
			if(!this.masturbateBattle_rightHandIsOn(SLOT_M_ANAL))
				this.increaseInvasionNoise(2);
			
			if(this._masBattle_tachieAnalToyPosition === 1) {
				this._masBattle_tachieAnalToyPosition = 2;
			}
			else if(this._masBattle_tachieAnalToyPosition === 2) {
				this._masBattle_tachieAnalToyPosition = 3;
			}
			else if(this._masBattle_tachieAnalToyPosition === 3) {
				this._masBattle_tachieAnalToyPosition = 2;
			}
			
			this.masturbateBattle_resetRightHand();
			this.masturbateBattle_setRightHandOn(SLOT_M_ANAL);
			
			this.setTachieRightArm('toyA_' + this._masBattle_tachieAnalToyPosition);
			
			if(this.boobsSizeIsPCup()) {
				this.setTachieRightBoob('toyA');
				this.setTachieStrayRightBoobExtension('toyA_');
			}
			
			BattleManager._logWindow.push('addText', TextManager.masturbateBattleToyAnalBeads);
			BattleManager.actionRemLines(KARRYN_LINE_KARRYN_PETTING_ANAL_BEADS);
			$gameParty.increaseExtraGoldReward(extraGoldReward * 1.3);
			this.raidAnalToy();
		}
		else {
			if(!this.masturbateBattle_leftHandIsOn(SLOT_M_ANAL))
				this.increaseInvasionNoise(2);
			
			this.masturbateBattle_resetLeftHand();
			this.masturbateBattle_setLeftHandOn(SLOT_M_ANAL);
			if(Karryn.isCensored())
				this.setTachieLeftArm('finger_anaru_cen');
			else
				this.setTachieLeftArm('finger_anaru');
			
			if(this.boobsSizeIsPCup()) {
				this.setTachieLeftBoob('finger_anaru');
				this.setTachieStrayLeftBoobExtension('finger_anaru_');
			}
			
			BattleManager._logWindow.push('addText', TextManager.masturbateBattleFingerAnal);
			BattleManager.actionRemLines(LINE_KARRYN_MAS_FINGER_ANUS);
			$gameParty.increaseExtraGoldReward(extraGoldReward);
			this.raidAnalPet(true);
		}
	break;
	}
	
	this.emoteMasturbateCouchBattle();
};//End Finger

//Suck
Game_Actor.prototype.beforeEval_masturbateBattle_skillSuck = function(target) {
	let bodyType = target.enemyType();
	let onaniLvl = this.masturbateLvl();
	let extraGoldReward = 0;
	if(this.hasEdict(EDICT_OFFICE_SELL_ONANI_VIDEO))
		extraGoldReward = Math.randomInt(onaniLvl * 5 + 8);
	
	switch(bodyType) {
	case ENEMYTYPE_MASTURBATE_FINGERS_TAG:
		if(!this.masturbateBattle_MouthIsOn(SLOT_M_FINGERS))
			this.increaseInvasionNoise(2);
		
		this.masturbateBattle_resetRightHand();
		if(this.masturbateBattle_leftHandIsOn(SLOT_M_MOUTH)) this.masturbateBattle_resetLeftHand();
		
		this.masturbateBattle_setRightHandOn(SLOT_M_MOUTH);
		this.masturbateBattle_setMouthOn(SLOT_M_FINGERS);
		this.setTachieRightArm('suck_fingers');

		this.increaseLiquidDroolFingers(1);
		this.setMaxTachieDroolFingersId(3); 
		this.setMaxTachieDroolNipplesId(0);
		BattleManager._logWindow.push('addText', TextManager.masturbateBattleSuckFingers);
		BattleManager.actionRemLines(LINE_KARRYN_MAS_SUCK_FINGERS);
		$gameParty.increaseExtraGoldReward(extraGoldReward);
		this.raidFingerSuck(true);
	break;
	case ENEMYTYPE_MASTURBATE_NIPPLES_SUCK_TAG:
		if(!this.masturbateBattle_MouthIsOn(SLOT_M_NIPPLES))
			this.increaseInvasionNoise(2);
		
		this.masturbateBattle_resetLeftHand();
		if(this.masturbateBattle_rightHandIsOn(SLOT_M_MOUTH)) this.masturbateBattle_resetRightHand();
		
		this.masturbateBattle_setLeftHandOn(SLOT_M_MOUTH);
		this.masturbateBattle_setMouthOn(SLOT_M_NIPPLES);
		this.resetTachieLeftArm();
		this.setTachieLeftBoob('suck_chikubi');
		this.setTachieStrayLeftBoobExtension('suck_chikubi_');

		this.increaseLiquidDroolNipples(1);
		this.setMaxTachieDroolFingersId(0); 
		this.setMaxTachieDroolNipplesId(3);
		BattleManager._logWindow.push('addText', TextManager.masturbateBattleSuckNipples);
		BattleManager.actionRemLines(LINE_KARRYN_MAS_SUCK_NIPPLES);
		$gameParty.increaseExtraGoldReward(extraGoldReward * 1.5);
		this.raidNipplesPet(true);
	break;
	}
	this.emoteMasturbateCouchBattle();
};//End Suck

////////
// Damage Formula

Game_Actor.prototype.dmgFormula_masturbateBattle = function(target) {
	let activeAreas = 0;
	let mouthDesireGain = 0;
	let boobsDesireGain = 0;
	let pussyDesireGain = 0;
	let buttDesireGain = 0;
	let randomDesireGainFromMouth = 0;
	let randomDesireGainFromRightHand = 0;
	let randomDesireGainFromLeftHand = 0;
	
	let skillLvl = this.masturbateLvl();
	let skillRating = this.masturbateSkillRating();
	let pettingRate = 1;
	//let pettingRate = this.elementRate(ELEMENT_PETTING_ID);

	let pleasureFeedback = 0;
	
	//Right Hand
	if(!this.masturbateBattle_rightHandIsFree()) {
		activeAreas++;
		
		if(this.masturbateBattle_rightHandIsOn(SLOT_M_NIPPLES)) {
			let baseDmg = BASEDMG_PETTING_NIPPLES;
			let sensitivityRating = this.nipplesSensitivity();
			let desireTotal = this.boobsDesire + this.cockDesire;
			
			let desireGain = (baseDmg + skillLvl) * pettingRate;
			boobsDesireGain += desireGain * 0.3;
			randomDesireGainFromRightHand += desireGain * 0.7;
			
			let possiblePleasure = (desireGain + this.dex * 1.3) * skillRating * pettingRate * sensitivityRating;
			//possiblePleasure -= (this.end * (0.5 - desireTotal / 400));
			
			if(possiblePleasure > 0) {
				pleasureFeedback += possiblePleasure;
				this.addToActorNipplesPleasureRecord(possiblePleasure);
			}
			
			this.addToActorNipplesPettedRecord(false, false, true);
		}
		else if(this.masturbateBattle_rightHandIsOn(SLOT_M_CLIT)) {
			let baseDmg = BASEDMG_PETTING_CLIT;
			let sensitivityRating = this.clitSensitivity();
			let desireTotal = this.pussyDesire + this.cockDesire;
			
			let desireGain = (baseDmg + skillLvl) * pettingRate;
			pussyDesireGain += desireGain * 0.4;
			randomDesireGainFromRightHand += desireGain * 0.6;
			
			let possiblePleasure = (desireGain + this.dex * 1.3) * skillRating * pettingRate * sensitivityRating;
			//possiblePleasure -= (this.end * (0.5 - desireTotal / 400));
			
			if(possiblePleasure > 0) {
				pleasureFeedback += possiblePleasure;
				this.addToActorClitPleasureRecord(possiblePleasure);
			}
			
			this.addToActorClitPettedRecord(false, false, true);
		}
		else if(this.masturbateBattle_rightHandIsOn(SLOT_M_PUSSY)) {
			if(this.isWearingPussyToy_PenisDildo()) {
				baseDmg = BASEDMG_TOY_PENIS_DILDO;
				let sensitivityRating = this.pussySensitivity() * this.toySensitivity();
				let desireTotal = this.pussyDesire + this.cockDesire;
				
				let desireGain = (baseDmg + skillLvl) * pettingRate;
				pussyDesireGain += desireGain * 0.5;
				randomDesireGainFromRightHand += desireGain * 0.7;
				
				let possiblePleasure = (desireGain + this.dex * 1.3) * skillRating * pettingRate * sensitivityRating;
				
				if(possiblePleasure > 0) {
					pleasureFeedback += possiblePleasure;
					this.addToActorPussyPleasureRecord(possiblePleasure);
				}
				
				this.addToPussyToyUsedByEnemyRecord(false);
			}
			else {
				let baseDmg = BASEDMG_PETTING_PUSSY;
				let sensitivityRating = this.pussySensitivity();
				let desireTotal = this.pussyDesire + this.cockDesire;
				
				let desireGain = (baseDmg + skillLvl) * pettingRate;
				pussyDesireGain += desireGain * 0.3;
				randomDesireGainFromRightHand += desireGain * 0.7;
				
				let possiblePleasure = (desireGain + this.dex * 1.3) * skillRating * pettingRate * sensitivityRating;
				//possiblePleasure -= (this.end * (0.5 - desireTotal / 400));
				
				if(possiblePleasure > 0) {
					pleasureFeedback += possiblePleasure;
					this.addToActorPussyPleasureRecord(possiblePleasure);
				}
				
				this.addToActorPussyPettedRecord(false, false, true);
			}
		}
		else if(this.masturbateBattle_rightHandIsOn(SLOT_M_ANAL)) {
			if(this.isWearingAnalToy_AnalBeads()) {
				let baseDmg = BASEDMG_TOY_ANAL_BEADS;
				let sensitivityRating = this.analSensitivity() * this.toySensitivity();
				let desireTotal = this.buttDesire + this.cockDesire;
				
				let desireGain = (baseDmg + skillLvl) * pettingRate;
				buttDesireGain += desireGain * 0.5;
				randomDesireGainFromLeftHand += desireGain * 0.7;
				
				let possiblePleasure = (desireGain + this.dex * 1.3) * skillRating * pettingRate * sensitivityRating;
				
				if(possiblePleasure > 0) {
					pleasureFeedback += possiblePleasure;
					this.addToActorAnalPleasureRecord(possiblePleasure);
				}
				
				this.addToAnalToyUsedByEnemyRecord(false);
			}
		}
	}//End right hand
	
	//Left Hand
	if(!this.masturbateBattle_LeftHandIsFree()) {
		activeAreas++;
		
		if(this.masturbateBattle_leftHandIsOn(SLOT_M_BOOBS)) {
			let baseDmg = BASEDMG_PETTING_BOOBS;
			let sensitivityRating = this.boobsSensitivity();
			let desireTotal = this.boobsDesire + this.cockDesire;
			
			let desireGain = (baseDmg + skillLvl) * pettingRate;
			boobsDesireGain += desireGain * 0.4;
			randomDesireGainFromLeftHand += desireGain * 0.6;
			
			let possiblePleasure = (desireGain + this.dex * 1.3) * skillRating * pettingRate * sensitivityRating;
			//possiblePleasure -= (this.end * (0.5 - desireTotal / 400));
			
			if(possiblePleasure > 0) {
				if(pleasureFeedback > 0) {
					pleasureFeedback = (pleasureFeedback + possiblePleasure) * 0.75;
				}
				else {
					pleasureFeedback += possiblePleasure;
				}
				this.addToActorBoobsPleasureRecord(possiblePleasure);
			}
			
			this.addToActorBoobsPettedRecord(false, false, true);
		}
		else if(this.masturbateBattle_leftHandIsOn(SLOT_M_NIPPLES)) {
			let baseDmg = BASEDMG_PETTING_NIPPLES;
			let sensitivityRating = this.nipplesSensitivity();
			let desireTotal = this.boobsDesire + this.cockDesire;
			
			let desireGain = (baseDmg + skillLvl) * pettingRate;
			boobsDesireGain += desireGain * 0.3;
			randomDesireGainFromLeftHand += desireGain * 0.7;
			
			let possiblePleasure = (desireGain + this.dex * 1.3) * skillRating * pettingRate * sensitivityRating;
			//possiblePleasure -= (this.end * (0.5 - desireTotal / 400));
			
			if(possiblePleasure > 0) {
				if(pleasureFeedback > 0) {
					pleasureFeedback = (pleasureFeedback + possiblePleasure) * 0.75;
				}
				else {
					pleasureFeedback += possiblePleasure;
				}
				this.addToActorNipplesPleasureRecord(possiblePleasure);
			}
			
			//if(!this.masturbateBattle_rightHandIsOn(SLOT_M_NIPPLES)) 
				this.addToActorNipplesPettedRecord(false, false, true);
		}
		else if(this.masturbateBattle_leftHandIsOn(SLOT_M_CLIT)) {
			if(this.isWearingClitToy_PinkRotor()) {
				let baseDmg = BASEDMG_TOY_PINK_ROTOR;
				let sensitivityRating = this.clitSensitivity() * this.toySensitivity();
				let desireTotal = this.pussyDesire + this.cockDesire;
				
				let desireGain = (baseDmg + skillLvl) * pettingRate;
				pussyDesireGain += desireGain * 0.5;
				randomDesireGainFromLeftHand += desireGain * 0.7;
				
				let possiblePleasure = (desireGain + this.dex * 1.3) * skillRating * pettingRate * sensitivityRating;
				//possiblePleasure -= (this.end * (0.5 - desireTotal / 400));
				
				if(possiblePleasure > 0) {
					if(pleasureFeedback > 0) {
						pleasureFeedback = (pleasureFeedback + possiblePleasure) * 0.75;
					}
					else {
						pleasureFeedback += possiblePleasure;
					}
					this.addToActorClitPleasureRecord(possiblePleasure);
				}
				
				this.addToClitToyUsedByEnemyRecord(false);
			}
			else {
				let baseDmg = BASEDMG_PETTING_CLIT;
				let sensitivityRating = this.clitSensitivity();
				let desireTotal = this.pussyDesire + this.cockDesire;
				
				let desireGain = (baseDmg + skillLvl) * pettingRate;
				pussyDesireGain += desireGain * 0.4;
				randomDesireGainFromLeftHand += desireGain * 0.6;
				
				let possiblePleasure = (desireGain + this.dex * 1.3) * skillRating * pettingRate * sensitivityRating;
				//possiblePleasure -= (this.end * (0.5 - desireTotal / 400));
				
				if(possiblePleasure > 0) {
					if(pleasureFeedback > 0) {
						pleasureFeedback = (pleasureFeedback + possiblePleasure) * 0.75;
					}
					else {
						pleasureFeedback += possiblePleasure;
					}
					this.addToActorClitPleasureRecord(possiblePleasure);
				}
				
				this.addToActorClitPettedRecord(false, false, true);
			}
		}
		else if(this.masturbateBattle_leftHandIsOn(SLOT_M_PUSSY)) {
			let baseDmg = BASEDMG_PETTING_PUSSY + 2;
			let sensitivityRating = this.pussySensitivity();
			let desireTotal = this.pussyDesire + this.cockDesire;
			
			let desireGain = (baseDmg + skillLvl) * pettingRate;
			pussyDesireGain += desireGain * 0.3;
			randomDesireGainFromLeftHand += desireGain * 0.7;
			
			let possiblePleasure = (desireGain + this.dex * 1.3) * skillRating * pettingRate * sensitivityRating;
			//possiblePleasure -= (this.end * (0.5 - desireTotal / 400));
			
			if(possiblePleasure > 0) {
				if(pleasureFeedback > 0) {
					pleasureFeedback = (pleasureFeedback + possiblePleasure) * 0.75;
				}
				else {
					pleasureFeedback += possiblePleasure;
				}
				this.addToActorPussyPleasureRecord(possiblePleasure);
			}
			
			this.addToActorPussyPettedRecord(false, false, true);
		}
		else if(this.masturbateBattle_leftHandIsOn(SLOT_M_ANAL)) {
			let baseDmg = BASEDMG_PETTING_ANAL;
			let sensitivityRating = this.analSensitivity();
			let desireTotal = this.buttDesire + this.cockDesire;
			
			let desireGain = (baseDmg + skillLvl) * pettingRate;
			buttDesireGain += desireGain * 0.3;
			randomDesireGainFromLeftHand += desireGain * 0.7;
			
			let possiblePleasure = (desireGain + this.dex * 1.3) * skillRating * pettingRate * sensitivityRating;
			//possiblePleasure -= (this.end * (0.5 - desireTotal / 400));
			
			if(possiblePleasure > 0) {
				if(pleasureFeedback > 0) {
					pleasureFeedback = (pleasureFeedback + possiblePleasure) * 0.75;
				}
				else {
					pleasureFeedback += possiblePleasure;
				}
				this.addToActorAnalPleasureRecord(possiblePleasure);
			}
			
			this.addToActorAnalPettedRecord(false, false, true);
		}
	} //End left hand
	
	//Mouth
	if(!this.masturbateBattle_MouthIsFree()) {
		activeAreas++;
		
		if(this.masturbateBattle_MouthIsOn(SLOT_M_NIPPLES)) {
			let baseDmg = BASEDMG_PETTING_NIPPLES;
			let sensitivityRating = this.nipplesSensitivity();
			let desireTotal = this.boobsDesire + this.cockDesire;
			
			let desireGain = (baseDmg + skillLvl) * pettingRate;
			boobsDesireGain += desireGain * 0.3;
			randomDesireGainFromMouth += desireGain * 0.7;
			
			let possiblePleasure = (desireGain + this.dex * 1.3) * skillRating * pettingRate * sensitivityRating;
			//possiblePleasure -= (this.end * (0.5 - desireTotal / 400));
			
			if(possiblePleasure > 0) {
				if(pleasureFeedback > 0) {
					pleasureFeedback = (pleasureFeedback + possiblePleasure) * 0.75;
				}
				else {
					pleasureFeedback += possiblePleasure;
				}
				this.addToActorNipplesPleasureRecord(possiblePleasure);
			}
			
			this.increaseLiquidDroolNipples(1);
			this.addToActorNipplesPettedRecord(false, false, true);
		}
		else if(this.masturbateBattle_MouthIsOn(SLOT_M_FINGERS)) {
			let baseDmg = BASEDMG_SUCKING_FINGERS;
			let sensitivityRating = this.mouthSensitivity();
			let desireTotal = this.mouthDesire + this.cockDesire;
			
			let desireGain = (baseDmg + skillLvl) * pettingRate;
			mouthDesireGain += desireGain * 0.3;
			randomDesireGainFromMouth += desireGain * 0.7;
			
			let possiblePleasure = (desireGain + this.dex * 1.3) * skillRating * pettingRate * sensitivityRating;
			//possiblePleasure -= (this.end * (0.5 - desireTotal / 400));
			
			if(possiblePleasure > 0) {
				pleasureFeedback += possiblePleasure;
				this.addToActorMouthPleasureRecord(possiblePleasure);
			}
			
			this.increaseLiquidDroolFingers(1);
			this.addToActorFingersSuckedRecord(false, false, true);
		}
	}//End mouth
	
	target.result().pleasureFeedback = pleasureFeedback;
	this.gainMouthDesire(mouthDesireGain, false, false);
	this.gainBoobsDesire(boobsDesireGain, false, false);
	this.gainPussyDesire(pussyDesireGain, false, false);
	this.gainButtDesire(buttDesireGain, false, false);
	this.gainRandomDesire(randomDesireGainFromMouth, false);
	this.gainRandomDesire(randomDesireGainFromRightHand, false);
	this.gainRandomDesire(randomDesireGainFromLeftHand, false);
	
	this.gainHp(-this.staminaCost_masturbateBattleSkills());
	
	let noiseGain = 0; 
	
	if(Karryn.hasEdict(EDICT_PRISON_EMBLEM_SCENARIO)) {
		this.gainDescensionRandomStatsExp(this.level, 20 + activeAreas * 10, 15, 10);
	}
	else {
		if(activeAreas === 1) {
			this.gainDexterityExp(40, this.level);
		}
		else if(activeAreas === 2) {
			this.gainDexterityExp(50, this.level);
		}
		else if(activeAreas === 3) {
			this.gainDexterityExp(60, this.level);
		}
		this.gainStaminaExp(15, this.level);
	}
	
	if(this.tachieMouth.includes('ahe')) {
		noiseGain += 6;
	}
	else if(this.tachieMouth.includes('ho') || this.tachieMouth.includes('nico')) {
		noiseGain += 4;
	}
	else if(this.tachieMouth.includes('ku') || this.tachieMouth.includes('mu')) {
		noiseGain += 2;
	}
	else {
		noiseGain += 3;
	}
	
	if(this.isWet) {
		if(this.tachieLeftArm.includes('finger_omanko') || this.tachieRightArm.includes('finger_omanko') || this.tachieRightArm.includes('toyP'))
			noiseGain += 3;
		else 
			noiseGain += 1;
	}
	
	this.increaseInvasionNoise(noiseGain);
	
	this.justGotHitBySkillType(JUST_SKILLTYPE_KARRYN_MASTURBATE);
	
	if(this.hasEdict(EDICT_OFFICE_SELL_ONANI_VIDEO)) {
		$gameParty.increaseExtraGoldReward(Math.randomInt(2 * activeAreas * this.masturbateLvl()));
	}
	
	this.masRaidCheck_couch();
	
	return 0;
};

///////
// Orgasm

Game_Actor.prototype.postDamage_femaleOrgasm_masturbationCouch = function(orgasmCount) {
	if(this.isInMasturbationCouchPose()) {
		this.masturbateBattle_resetLeftHand();
		this.masturbateBattle_resetRightHand();

		
		this.emoteMasturbateCouchBattle();
	}
	
	if(this.isInMasturbationCouchPose()) {
		this.increaseInvasionNoiseLevel(orgasmCount);
	}
};

// Sleep Quality
Game_Actor.prototype.masturbationSleepQuality = function() {
	let sleepLvl = 0;

	if(this._todayMasturbatedBeforeRest) {
		if(this.hasPassive(PASSIVE_MASTURBATED_COUCH_COUNT_TWO_ID))
			sleepLvl += 2;
		else if(this.hasPassive(PASSIVE_MASTURBATED_COUCH_COUNT_ONE_ID))
			sleepLvl += 1;
	}
	else if(this.isAroused() && !$gameSwitches.value(SWITCH_BOSS_CLEAR_BONUS_ID)) {
		if(this.hasPassive(PASSIVE_MASTURBATED_COUCH_COUNT_THREE_ID))
			sleepLvl -= 3;
		else if(this.hasPassive(PASSIVE_MASTURBATED_COUCH_COUNT_TWO_ID))
			sleepLvl -= 2;
		else
			sleepLvl -= 1;
	}
	
	return sleepLvl;
};
