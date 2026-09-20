var Remtairy = Remtairy || {};
Remtairy.KarrynTrainer = Remtairy.KarrynTrainer || {};

//敵の位置
const GYM_BENCH_A_X = 125;
const GYM_BENCH_B_X = 125;
const GYM_BENCH_C_X = 125;
const GYM_BENCH_D_X = 125;
const GYM_BENCH_E_X = 125;
const GYM_BENCH_A_Y = 245;
const GYM_BENCH_B_Y = 350;
const GYM_BENCH_C_Y = 455;
const GYM_BENCH_D_Y = 560;
const GYM_BENCH_E_Y = 665;
//敵のPleasureバーの位置
const GYM_ENEMY_PLEASURE_GAUGE_X = -1;
const GYM_ENEMY_PLEASURE_GAUGE_Y = 22;
//敵に出る数字位置
const GYM_SBP_ENEMY_DAMAGE_OFFSET_X = 0;
const GYM_SBP_ENEMY_DAMAGE_OFFSET_Y = 40;

const GYM_RINKAN_RIPPED_SE_NAME = '+Gym_ripped';
const GYM_RINKAN_RIPPED_SE_VOLUME = 70;

const BATTLEBACK1_GYM_TRAINER_WORK_NAME = 'Gym1';
const BATTLEBACK1_GYM_TRAINER_RINKAN_NAME = 'Gym2';

//=============================================================================
 /*:
 * @plugindesc Karryn Trainer
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================

var DLC_GYM = false;

const TRAINER_SKILL_START = 1837;
const TRAINER_SKILL_END = 1853;

const TRAINER_OUTFIT_COLOR_GREEN_ID = 1;
const TRAINER_OUTFIT_COLOR_GRAY_ID = 2;
const TRAINER_OUTFIT_COLOR_PINK_ID = 3;
const TRAINER_OUTFIT_COLOR_LEOPARD_ID = 4;

const TRAINER_SEMEN_FRONT_RINKAN_POSE = 0;
const TRAINER_SEMEN_FRONT_TEKOKI_POSE = 1;
const TRAINER_SEMEN_FRONT_KISU_POSE = 2;
const TRAINER_SEMEN_FRONT_FERA_POSE = 3;
const TRAINER_SEMEN_FRONT_PAIZURI_POSE = 4;


const TRAINER_RESET_FLOOR_SEMEN = [
	[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0]
];

const GYM_TOTAL_BENCHES = 5;
const GYM_BENCH_A = 1;
const GYM_BENCH_B = 2;
const GYM_BENCH_C = 3;
const GYM_BENCH_D = 4;
const GYM_BENCH_E = 5;
const GYM_NOT_AT_BENCH = -1;

const TRAINER_REP_DECAY_DAYS = 4;

const GYMGOER_WANTED_LVL_COMPLETED_WORKOUT = 2;
const GYMGOER_WANTED_LVL_BLUEBALLED = -2;
const GYMGOER_WANTED_LVL_FAILED_WORKOUT = -1;

const GYMGOER_FORM_LIMIT_BAD = 0;
const GYMGOER_FORM_LIMIT_POOR = 0.75;
const GYMGOER_FORM_LIMIT_NORMAL = 0.95;
const GYMGOER_FORM_LIMIT_GOOD = 1.15;
const GYMGOER_FORM_LIMIT_EXCELLENT = 1.3;

const GYMGOER_STAMINA_LIMIT_EXHAUSTED = 0.33;
const GYMGOER_STAMINA_LIMIT_TIRED = 0.66;

const GYMGOER_WORKOUT_INTERVAL_CLOSE = 45;
const GYMGOER_WORKOUT_INTERVAL_FAR = 45;
const GYMGOER_WORKOUT_INTERVAL_SEX = 15;
const GYMGOER_WORKOUT_STAMINA_CUTOFF = 0.05;
const GYMGOER_EJACULATION_STAMINA_COST = 0.15;
const GYMGOER_BLUEBALLS_TIMELIMIT = 90;

const GYMGOER_SATISFACTION_LOST_FROM_BLUEBALLS = -2;
const GYMGOER_SATISFACTION_LOST_FROM_MEMBERSHIP = -1;
const GYMGOER_SATISFACTION_GAIN_FROM_FINISHED_WORKOUT = 3;
const GYMGOER_SATISFACTION_GAIN_FROM_CUMMING = 1;
const GYMGOER_SATISFACTION_GAIN_FROM_FIRST_TOUCH = 1;
const GYMGOER_SATISFACTION_GAIN_FROM_RINKAN_STARTED = 2;

//////////
// Game Party
///////////

Object.defineProperty(Game_Party.prototype, "isInTrainerBattle", {
	get: function () { return this._isInTrainerBattle; }, configurable: true
});
Game_Party.prototype.setIsInTrainerBattleFlag = function(status) {
	this._isInTrainerBattle = status;
};

Game_Party.prototype.initializeTrainerSettings = function() {
	this.setGymReputation(0);
	this.setTrainerNotoriety(0);
};

Game_Party.prototype.setGymReputation = function(value) {
	let minRep = this.getMinimumGymReputation();
	
	this._gymReputation = Math.max(minRep, value);
	
	$gameVariables.setValue(VARIABLE_GYM_REPUTATION_ID, this._gymReputation);
};
Game_Party.prototype.increaseGymReputation = function(value) {
	this.setGymReputation(this._gymReputation + value);
};
Game_Party.prototype.getMinimumGymReputation = function() {
	let minRep = 0;
	return minRep;
};

Game_Party.prototype.increaseGymGoerSatisfaction = function(value) {
	this._trainerBattle_gymGoerSatisfaction += value;
};

Game_Party.prototype.setTrainerNotoriety = function(value) {
	let minNotoriety = 0;
	
	this._trainerNotoriety = Math.max(minNotoriety, value);
	
	if(!DEBUG_MODE) this._trainerNotoriety = 0;
	$gameVariables.setValue(VARIABLE_TRAINER_NOTORIETY_ID, this._trainerNotoriety);
};
Game_Party.prototype.increaseTrainerNotoriety = function(value) {
	this.setTrainerNotoriety(this._trainerNotoriety + value);
};


Game_Party.prototype.trainerBattle_getCurrentTimeInSeconds = function() {
	return this._trainerBattle_currentTimeInSeconds;
};
Game_Party.prototype.trainerBattle_getTimeMinutesNumber = function() {
	let remainingTime = this._trainerBattle_timeLimit - this.trainerBattle_getCurrentTimeInSeconds();
	if(remainingTime <= 0) return 0;
	let minutes = Math.floor(remainingTime / 60);
	return minutes;
};
Game_Party.prototype.trainerBattle_getTimeSecondsNumber = function() {
	let remainingTime = this._trainerBattle_timeLimit - this.trainerBattle_getCurrentTimeInSeconds();
	if(remainingTime <= 0) return 0;
	let seconds = remainingTime % 60;
	return seconds;
};

Game_Party.prototype.trainerBattle_advanceTimeBySeconds = function(value) {
	this._trainerBattle_currentTimeInSeconds += value;
};

Game_Party.prototype.setTrainerBattleTimeLimit = function(minutes) {
	if(minutes === 15) {
		this._trainerBattle_timeLimit = 900;
		this._trainerBattle_baseFatigueGain = 1;
		this._trainerBattle_battleTimeLimitBasedMaxSpawnMultipler = 1;
	}
	else if(minutes === 20) {
		this._trainerBattle_timeLimit = 1200;
		this._trainerBattle_baseFatigueGain = 1;
		this._trainerBattle_battleTimeLimitBasedMaxSpawnMultipler = 1.1;
	}
	else if(minutes === 30) {
		this._trainerBattle_timeLimit = 1800;
		this._trainerBattle_baseFatigueGain = 2;
		this._trainerBattle_battleTimeLimitBasedMaxSpawnMultipler = 1.25;
	}
	else if(minutes === 45) {
		this._trainerBattle_timeLimit = 2700;
		this._trainerBattle_baseFatigueGain = 3;
		this._trainerBattle_battleTimeLimitBasedMaxSpawnMultipler = 1.5;
	}
	else if(minutes === 60) {
		this._trainerBattle_timeLimit = 3600;
		this._trainerBattle_baseFatigueGain = 4;
		this._trainerBattle_battleTimeLimitBasedMaxSpawnMultipler = 2;
	}
};

Object.defineProperty(Game_Party.prototype, "trainerBattleTimeChoice", {
	get: function () { 
		let choice = 0;
		let rep = $gameParty._gymReputation;
		
		if(rep >= 30)
			choice = 3;
		else if(rep >= 15)
			choice = 2;
		else if(rep >= 5)
			choice = 1;

		let maxLimit = 2;
		if(this.freeMode()) { 
			maxLimit += 2;
		}

		return Math.min(maxLimit, choice);
		
	}, configurable: true
});

Game_Party.prototype.getAvailableTrainerBattleTimeLimitChoice = function() {
	let choice = 0;
	
	let rep = $gameParty._gymReputation;
	
	if(rep >= 30)
		choice = 4;
	else if(rep >= 20)
		choice = 3;
	else if(rep >= 10)
		choice = 2;
	else if(rep >= 5)
		choice = 1;
	
	return choice;
};


Game_Party.prototype.preTrainerBattleSetup = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	BattleManager.setEnemySneakAttackBattle();
	this.setIsInTrainerBattleFlag(true);
	this.preBattleSetup();
	$gameMap.changeBattleback(BATTLEBACK1_GYM_TRAINER_WORK_NAME, null);
	this._showTopRightTimeNumberFlag = true;
	this._fullGoldRewardsFlag = false;
	this._halfGoldRewardsFlag = false;
	this._fullItemDropRateFlag = false;
	this._halfItemDropRateFlag = true;
	this._doubleItemDropRateFlag = false;
	
	this.increaseFatigueGain(this._trainerBattle_baseFatigueGain);
	
	this._trainerBattle_currentTimeInSeconds = 0;
	this._trainerBattle_gymGoerSatisfaction = 0;
	
	this.setTrainerNotoriety(0);
	
	actor.preTrainerBattleSetup();
};

Game_Party.prototype.postTrainerBattleCleanup = function() {
	this.setIsInTrainerBattleFlag(false);
	this._showTopRightTimeNumberFlag = false;
	$gameSwitches.setValue(SWITCH_TODAY_TRAINER_BATTLE_ID, true);
	

	if(this._trainerBattle_gymGoerSatisfaction > 0) {
		let addRep = 1;
		if($gameParty._gymReputation <= 20 && Math.randomInt(100) < this._trainerBattle_gymGoerSatisfaction) addRep++;
		this.increaseGymReputation(addRep);
		$gameSwitches.setValue(SWITCH_TODAY_TRAINER_REP_UP_ID, true);
	}
	else if(this._trainerBattle_gymGoerSatisfaction < 0) {
		let addRep = -1;
		if(Math.randomInt(100) < this._trainerBattle_gymGoerSatisfaction * -1) addRep--;
		this.increaseGymReputation(addRep);
	}
	
	
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	
	if(Karryn.hasEdict(EDICT_DIFFERENT_MINDSET_EFFECTS)) {
		actor.takeOffGlovesAndHat();
		actor.changeToWardenClothing();
		actor.takeOffPanties();
		actor.removeClothing();
	}
	else {
		actor.putOnGlovesAndHat();
		actor.changeToWardenClothing();
	}
	
	actor.descensionWardenQuestToysPostSideJobs();
	
	if(!$gameSwitches.value(SWITCH_DEFEATED_IN_LEVEL_THREE_ID)) {
		actor._playthroughRecordTrainerBattleTotalShiftsCount++;
	}
};



//////////
// Game Actor
///////////

Object.defineProperty(Game_Actor.prototype, "gymOutfitColor", { 
	get: function () { 
		switch(this._wearingTrainerColor) {
			case TRAINER_OUTFIT_COLOR_GREEN_ID:
				return 'green';
			case TRAINER_OUTFIT_COLOR_GRAY_ID:
				return 'gray';
			case TRAINER_OUTFIT_COLOR_PINK_ID:
				return 'pink';
			case TRAINER_OUTFIT_COLOR_LEOPARD_ID:
				return 'leopard';
			default:
				return 'green';
		}
		return 'green';
	}, configurable: true 
});


////////
// Setup
///////////

Game_Actor.prototype.preTrainerBattleSetup = function() {
	this._hornyTimeLimit = -1; //unused
	this.descensionWardenQuestToysPreSideJobs();
	this.removeAllToys();
	this.changeToTrainerClothing();
	this.trainerBattle_setToStandby(false);
	
	this._trainer_movingToBenchLocation = false;
	this._trainer_usedAdviceOnGoodForm = false;
	
	this._trainer_semenFrontPoseArray = TRAINER_RESET_FLOOR_SEMEN;
	//this._trainer_semenFrontPoseArray = [ [0,0,0], [0,0,0], [0,0,0], [0,0,0], [0,0,0] ];
	
	this.cleanUpLiquidsBeforeSideJob();
	this.cleanUpStrayBeforeSideJob();
	this.setupDesires();
	
	this._recordGymTrainerBattleCount++;
	this._playthroughRecordGymTrainerBattleCount++;
	
	this.removeState(STATE_CONFIDENT_ID);
};

Game_Actor.prototype.isWearingTrainerCap = function() {
	return this._wearingTrainerCap;
};
Game_Actor.prototype.isWearingTrainerHood = function() {
	return this._wearingTrainerHood;
};

Game_Actor.prototype.setWearingTrainerCap = function(value) {
	this._wearingTrainerCap = value;
};
Game_Actor.prototype.setWearingTrainerHood = function(value) {
	this._wearingTrainerHood = value;
};

Game_Actor.prototype.setWearingTrainerColor = function(value) {
	this._wearingTrainerColor = value;
};
Game_Actor.prototype.setRandomTrainerColor = function() {
	let rep = $gameParty._gymReputation;
	let maxColor = 1;
	if(rep >= 10) maxColor = 4;
	else if(rep >= 6) maxColor = 3;
	else if(rep >= 3) maxColor = 2;
	this.setWearingTrainerColor(Math.randomInt(maxColor) + 1);
};

Game_Actor.prototype.trainerBattle_getBenchLocation = function() {
	return this._trainer_atBenchLocation;
};
Game_Actor.prototype.trainerBattle_atSameLocationAsTarget = function(target) {
	return this.trainerBattle_getBenchLocation() === target.gymBenchId;
};

// Tachie Gym Goer
Game_Actor.prototype.setTrainerTachieGymGoer = function(target) {
	if(!target) return;
	
	let enemyCock = target.enemyCock();

	if(target.isGoblinType) {
		if(enemyCock.includes('dark'))
			this.setTachieBackA('goblin_dark');
		else
			this.setTachieBackA('goblin_normal');
	}
	else if(target.isOrcType) {
		if(enemyCock.includes('dark'))
			this.setTachieBackA('orc_dark');
		else
			this.setTachieBackA('orc_normal');
	}
	else if(target.isLizardmanType) {
		if(enemyCock.includes('dark'))
			this.setTachieBackA('lizardman_dark');
		else
			this.setTachieBackA('lizardman_normal');
	}
	else if(target.isNerdType) {
		if(enemyCock.includes('pale'))
			this.setTachieBackA('nerd_pale');
		else if(enemyCock.includes('black'))
			this.setTachieBackA('nerd_black');
		else
			this.setTachieBackA('nerd_normal');
	}
	else {
		if(enemyCock.includes('pale'))
			this.setTachieBackA('human_pale');
		else if(enemyCock.includes('black'))
			this.setTachieBackA('human_black');
		else
			this.setTachieBackA('human_normal');
	}

	if(target.isErect) {
		if(target._gym_shortsStripped) {
			let enemyCock = target.enemyCock();
			let cockType = '';
			
			if(this.isInTrainerPaizuriPose() && this.tachieBody.includes('zuri')) {
				if(Karryn.isCensored())
					this.setTachieCockBoobs(enemyCock + '_cen');
				else
					this.setTachieCockBoobs(enemyCock);
				this.resetTachieCock();
			}
			else {
				cockType = 'hard_';
				if(Karryn.isCensored())
					this.setTachieCock(cockType + enemyCock + '_cen');
				else
					this.setTachieCock(cockType + enemyCock);
				this.resetTachieCockBoobs();
			}
			
			this.resetTachieBackB();
			this.resetTachieBackC();
			
			this.setTachieSemenCockNormalExtension('hard_');
			this.setMaxTachieSemenCockNormalId(1);
		}
		else {
			if(target.isGoblinType) {
				this.setTachieBackB('goblin_shorts_1');
				this.setTachieBackC('goblin_shorts_hard_1');
			}
			else if(target.isOrcType) {
				this.setTachieBackB('orc_shorts_1');
				this.setTachieBackC('orc_shorts_hard_1');
			}
			else if(target.isNerdType) {
				this.setTachieBackB('nerd_shorts_1');
				this.setTachieBackC('nerd_shorts_hard_1');
			}
			else {
				this.setTachieBackB('human_shorts_1');
				this.setTachieBackC('human_shorts_hard_1');
			}

			this.resetTachieCock();
			this.resetTachieCockBoobs();
			this.setMaxTachieSemenCockNormalId(0);
			this.setTachieCockHasHCup(false);
		}
	}
	else {
		if(target._gym_shortsStripped) {
			let enemyCock = target.enemyCock();
			let cockType = '';
			
	
			cockType = 'soft_';
			
			if(Karryn.isCensored())
				this.setTachieCock(cockType + enemyCock + '_cen');
			else
				this.setTachieCock(cockType + enemyCock);
			
			this.resetTachieCockBoobs();
			this.resetTachieBackB();
			this.resetTachieBackC();
			
			this.setTachieSemenCockNormalExtension('soft_');
			this.setMaxTachieSemenCockNormalId(1);
		}
		else {
			if(target.isGoblinType) {
				this.setTachieBackB('goblin_shorts_1');
				this.setTachieBackC('goblin_shorts_soft_1');
			}
			else if(target.isOrcType) {
				this.setTachieBackB('orc_shorts_1');
				this.setTachieBackC('orc_shorts_soft_1');
			}
			else if(target.isNerdType) {
				this.setTachieBackB('nerd_shorts_1');
				this.setTachieBackC('nerd_shorts_soft_1');
			}
			else {
				this.setTachieBackB('human_shorts_1');
				this.setTachieBackC('human_shorts_soft_1');
			}
			
			this.resetTachieCock();
			this.setMaxTachieSemenCockNormalId(0);
		}
	}
		
};

Game_Actor.prototype.trainerBattle_getTachieSemenFrontAId = function() {
	return this.trainerBattle_getSemenFrontFromIndex(0);
	
	//old code
	let arrayId = 0;

	if(this.isInTrainerRinkanPose())
		arrayId = TRAINER_SEMEN_FRONT_RINKAN_POSE;
	else if(this.isInTrainerTekokiPose())
		arrayId = TRAINER_SEMEN_FRONT_TEKOKI_POSE;
	else if(this.isInTrainerKisuPose())
		arrayId = TRAINER_SEMEN_FRONT_KISU_POSE;
	else if(this.isInTrainerFeraPose())
		arrayId = TRAINER_SEMEN_FRONT_FERA_POSE;
	else if(this.isInTrainerPaizuriPose())
		arrayId = TRAINER_SEMEN_FRONT_PAIZURI_POSE;
	
	if(!this._trainer_semenFrontPoseArray)
		this._trainer_semenFrontPoseArray = [ [0,0,0], [0,0,0], [0,0,0], [0,0,0], [0,0,0] ];
	
	return this._trainer_semenFrontPoseArray[arrayId][0];
};
Game_Actor.prototype.trainerBattle_getTachieSemenFrontBId = function() {
	return this.trainerBattle_getSemenFrontFromIndex(1);
	
	//old code
	let arrayId = 0;

	if(this.isInTrainerRinkanPose())
		arrayId = TRAINER_SEMEN_FRONT_RINKAN_POSE;
	else if(this.isInTrainerTekokiPose())
		arrayId = TRAINER_SEMEN_FRONT_TEKOKI_POSE;
	else if(this.isInTrainerKisuPose())
		arrayId = TRAINER_SEMEN_FRONT_KISU_POSE;
	else if(this.isInTrainerFeraPose())
		arrayId = TRAINER_SEMEN_FRONT_FERA_POSE;
	else if(this.isInTrainerPaizuriPose())
		arrayId = TRAINER_SEMEN_FRONT_PAIZURI_POSE;
	
	if(!this._trainer_semenFrontPoseArray)
		this._trainer_semenFrontPoseArray = [ [0,0,0], [0,0,0], [0,0,0], [0,0,0], [0,0,0] ];
	
	return this._trainer_semenFrontPoseArray[arrayId][1];
};
Game_Actor.prototype.trainerBattle_getTachieSemenFrontCId = function() {
	return this.trainerBattle_getSemenFrontFromIndex(2);
	
	//old code
	let arrayId = 0;

	if(this.isInTrainerRinkanPose())
		arrayId = TRAINER_SEMEN_FRONT_RINKAN_POSE;
	else if(this.isInTrainerTekokiPose())
		arrayId = TRAINER_SEMEN_FRONT_TEKOKI_POSE;
	else if(this.isInTrainerKisuPose())
		arrayId = TRAINER_SEMEN_FRONT_KISU_POSE;
	else if(this.isInTrainerFeraPose())
		arrayId = TRAINER_SEMEN_FRONT_FERA_POSE;
	else if(this.isInTrainerPaizuriPose())
		arrayId = TRAINER_SEMEN_FRONT_PAIZURI_POSE;
	
	if(!this._trainer_semenFrontPoseArray)
		this._trainer_semenFrontPoseArray = [ [0,0,0], [0,0,0], [0,0,0], [0,0,0], [0,0,0] ];
	
	return this._trainer_semenFrontPoseArray[arrayId][2];
};

Game_Actor.prototype.trainerBattle_getSemenFrontFromIndex = function(index) {
	if (!this._trainer_semenFrontPoseArray) {
		this._trainer_semenFrontPoseArray = TRAINER_RESET_FLOOR_SEMEN;
		return 0;
	}

	if (this.isInTrainerRinkanPose()) return this._trainer_semenFrontPoseArray[TRAINER_SEMEN_FRONT_RINKAN_POSE][index];
	else {
		switch (this._trainer_atBenchLocation) {
			case GYM_BENCH_A: return this._trainer_semenFrontPoseArray[GYM_BENCH_A][index];
			case GYM_BENCH_B: return this._trainer_semenFrontPoseArray[GYM_BENCH_B][index];
			case GYM_BENCH_C: return this._trainer_semenFrontPoseArray[GYM_BENCH_C][index];
			case GYM_BENCH_D: return this._trainer_semenFrontPoseArray[GYM_BENCH_D][index];
			case GYM_BENCH_E: return this._trainer_semenFrontPoseArray[GYM_BENCH_E][index];
			default: return 0;
		}
	}
};

Game_Actor.prototype.setTrainerRinkanTachie_body_ripped = function() {
	if(!this.tachieBody.includes('ripped')) {
		this.setAllowTachieEmoteUpdate(false);
		if(Karryn.isCensored())
			this.setTachieBody('ripped_cen');
		else
			this.setTachieBody('ripped');
		this.setHasTachiePubic(true);
		
		this.setTachieSemenBellyExtension('naked_');
		if(this._tachieSemenWetExtension == 'normal_') this.setTachieSemenWetExtension('ripped_');
		this.setMaxTachieSemenCrotchId(1);
		this.setMaxTachieSemenAnalId(1);
		this.setAllowTachieEmoteUpdate(true);
		BattleManager._logWindow.push('addText', TextManager.RemTrainerRinkanSpatsRipped);
		AudioManager.playSe({name:GYM_RINKAN_RIPPED_SE_NAME, pan:0, pitch:100, volume:GYM_RINKAN_RIPPED_SE_VOLUME});
	}
};
Game_Actor.prototype.setTrainerRinkanTachie_boobs_naked = function() {
	if(this.tachieBoobs != 'naked') {
		this.setTachieBoobs('naked_' + this.gymOutfitColor);
	}
		
	this.setTachieSemenBackExtension('naked_');	
	this.setTachieSemenBoobsExtension('naked_');
	this.setTachieStrayBoobsExtension('naked_');
};

Game_Actor.prototype.postDamage_basicSpanking_trainerBattle = function(target, spankLvl) {
	if(this.isInTrainerRinkanPose()) {
		this.setTrainerRinkanTachie_body_ripped();
	}
};
Game_Actor.prototype.postDamage_basicPetting_trainerBattle = function(target, area) {
	if(this.isInTrainerRinkanPose()) {
		switch(area) {
		case AREA_BOOBS:
		case AREA_NIPPLES:
			this.setTrainerRinkanTachie_boobs_naked();
		break;
		case AREA_CLIT:
		case AREA_PUSSY:
		case AREA_BUTT:
		case AREA_ANAL:
			this.setTrainerRinkanTachie_body_ripped();
		break;
		}
	}
};

Game_Actor.prototype.trainerXParamRate = function(id) {
	let passiveRate = 1;
	if($gameParty.isInTrainerBattle && !this.isInTrainerRinkanPose()) {
		if(id === XPARAM_EN_REGEN_ID) {
			if(this._trainer_atBenchLocation === GYM_NOT_AT_BENCH)
				passiveRate = 0.4;
			else
				passiveRate = 0.2;
		}
	}
	return passiveRate;
};
Game_Actor.prototype.trainerSParamRate = function(id) {
	let passiveRate = 1;
	if($gameParty.isInTrainerBattle && !this.isInTrainerRinkanPose()) {
		if(id === SPARAM_WP_REGEN_ID) {
			passiveRate = 0.33;
		}
		else if(id === SPARAM_WP_REGEN_ID) {
			passiveRate = 0.33;
		}
	}
	return passiveRate;
};

Game_Actor.prototype.gymExpRateBonus = function() {
	let bonus = 0;
	let rep = $gameParty._gymReputation;
	
	if(rep <= 10) {
		bonus += rep * 0.01;
	}
	else if(rep <= 30) {
		bonus += 0.1 + (rep * 0.005);
	}
	else {
		bonus += 0.15 + (rep * 0.001);
	}
	
	return bonus;
};

// Is In Sex Pose
Game_Actor.prototype.trainerBattle_isInSexPose = function() {
	if(this.isInTrainerRinkanPose()) return true;
	return this.leftHandjobPoseSkillsIsEnabled() || this.blowjobPoseSkillsIsEnabled() || this.tittyFuckPoseSkillsIsEnabled() || this.isStateAffected(STATE_TRAINER_USED_COCK_PET_ID) || this.isStateAffected(STATE_TRAINER_USED_KISS_ID) || this.isStateAffected(STATE_TRAINER_USED_KISS_LAST_TURN_ID);
};

Game_Actor.prototype.trainerBattle_isNaked = function() { 
	return this.isInTrainerRinkanPose() && this.tachieBody.includes('ripped') && this.tachieBoobs.includes('naked');
};
// Is Horny
Game_Actor.prototype.trainerBattle_isUsingHornyVariation = function() { 
	return this.isHorny ||
	(this.showEval_karrynCockStareSkill() && this.getCockStareReactionScore() >= VAR_DEF_RS_LV2_REQ && this.cockDesire >= this.cockPettingCockDesireRequirement(true)) ||
	(this.customReq_trainerCockPet() && this.showEval_karrynCockPettingSkill()) ||
	(this.customReq_trainerKiss() && this.showEval_karrynKissSkill()) ||
	(this.customReq_trainerHandjob(true) && this.showEval_karrynHandjobSkill()) ||
	(this.customReq_trainerBlowjob(true) && this.showEval_karrynBlowjobSkill()) ||
	(this.customReq_trainerTittyFuck(true) && this.showEval_karrynTittyFuckSkill());
};

Game_Actor.prototype.trainerBattle_setToStandby = function(notAtSetup) {
	this.setTrainerStandbyPose();
	
	if(notAtSetup) {
		let enemy = $gameTroop.trainerBattle_getGymGoerAtTrainerLocation();
		if(enemy) {
			BattleManager.pullOutEnemy(enemy);
			enemy.removeState(STATE_BENCH_KARRYN_ID);
			enemy._gym_trainerObserved = false;
		}
	}
	
	this._trainer_atBenchLocation = GYM_NOT_AT_BENCH;
};

// Trainer Rinkan
Game_Actor.prototype.startTrainerRinkan = function() {
	$gameTroop._gymObs.hide();
	
	$gameTroop.setAllEnemiesToAroused();
	
	BattleManager.pullOutAllEnemies();
	
	$gameTroop.aliveMembers().forEach(function(member) {
		member.setGymOrgasmSkills_trainerRinkan();
		member.removeState(STATE_BENCH_KARRYN_ID);
    });
	
	$gameParty.increaseGymGoerSatisfaction(GYMGOER_SATISFACTION_GAIN_FROM_RINKAN_STARTED);
	
	$gameParty._showTopRightTimeNumberFlag = false;
	$gameParty.trainerBattle_advanceTimeBySeconds(1);
	
	this.setTrainerRinkanPose();
	
	this._recordGymTrainerRinkanSexCount++;
};

Game_Actor.prototype.postDamage_ejaculation_trainerBattle = function(target, area, semen, floorRunoffRate) {
	if(!this.isInTrainerRinkanPose()) {
		$gameParty.increaseGymGoerSatisfaction(GYMGOER_SATISFACTION_GAIN_FROM_CUMMING);
		target._hp = Math.max(
			target.mhp * GYMGOER_WORKOUT_STAMINA_CUTOFF, 
			this.hp - (target.mhp * GYMGOER_EJACULATION_STAMINA_COST
		));
	}
	
	if (!this._trainer_semenFrontPoseArray) this._trainer_semenFrontPoseArray = TRAINER_RESET_FLOOR_SEMEN;
	let ranNum = Math.randomInt(10);
	
	let arrayId = TRAINER_SEMEN_FRONT_RINKAN_POSE;
	if (!this.isInTrainerRinkanPose()) arrayId = this._trainer_atBenchLocation;
	
	switch (area) {
		//A 0 = Karryn's left side / back
		//B 1 = Karryn's right side / right
		//C 2 = Karryn's back side / front
		case CUM_BUKKAKE_FACE:
			if (this.isInTrainerRinkanPose()) {
				if (ranNum <= 3) this._trainer_semenFrontPoseArray[arrayId][0] += floorRunoffRate;
				else if (ranNum === 6) this._trainer_semenFrontPoseArray[arrayId][1] += floorRunoffRate;
			}
			else {
				if (ranNum <= 1) this._trainer_semenFrontPoseArray[arrayId][0] += floorRunoffRate;
				else if (ranNum <= 3) this._trainer_semenFrontPoseArray[arrayId][1] += floorRunoffRate;
				else if (ranNum <= 6) this._trainer_semenFrontPoseArray[arrayId][2] += floorRunoffRate;
			}
			break;
		case CUM_BUKKAKE_RIGHTARM:
			if (this.isInTrainerRinkanPose()) {
				if (ranNum <= 2) this._trainer_semenFrontPoseArray[arrayId][1] += floorRunoffRate;
				else if (ranNum <= 7) this._trainer_semenFrontPoseArray[arrayId][2] += floorRunoffRate;
			}
			else {
				if (ranNum <= 6) this._trainer_semenFrontPoseArray[arrayId][1] += floorRunoffRate;
			}
			break;
		case CUM_BUKKAKE_LEFTARM:
			if (this.isInTrainerRinkanPose()) {
				if (ranNum <= 3) this._trainer_semenFrontPoseArray[arrayId][2] += floorRunoffRate;
			}
			else {
				if (ranNum <= 4) this._trainer_semenFrontPoseArray[arrayId][0] += floorRunoffRate;
				else if (ranNum <= 7) this._trainer_semenFrontPoseArray[arrayId][2] += floorRunoffRate;
			}
			break;
		case CUM_BUKKAKE_RIGHTLEG:
			if (ranNum <= 4) this._trainer_semenFrontPoseArray[arrayId][0] += floorRunoffRate;
			else if (ranNum <= 6) this._trainer_semenFrontPoseArray[arrayId][1] += floorRunoffRate;
			break;
		case CUM_BUKKAKE_LEFTLEG:
			if (ranNum <= 5) this._trainer_semenFrontPoseArray[arrayId][0] += floorRunoffRate;
			else if (ranNum <= 6) this._trainer_semenFrontPoseArray[arrayId][1] += floorRunoffRate;
			break;
		case CUM_BUKKAKE_BOOBS:
			if (this.isInTrainerRinkanPose()) {
				if (ranNum <= 3) this._trainer_semenFrontPoseArray[arrayId][0] += floorRunoffRate;
				else if (ranNum === 6) this._trainer_semenFrontPoseArray[arrayId][1] += floorRunoffRate;
			}
			else {
				if (ranNum <= 0) this._trainer_semenFrontPoseArray[arrayId][0] += floorRunoffRate;
				else if (ranNum <= 1) this._trainer_semenFrontPoseArray[arrayId][1] += floorRunoffRate;
				else if (ranNum <= 3) this._trainer_semenFrontPoseArray[arrayId][2] += floorRunoffRate;
			}
			break;
		case CUM_BUKKAKE_BUTT:
			if (ranNum <= 2) this._trainer_semenFrontPoseArray[arrayId][0] += floorRunoffRate;
			break;
		case CUM_ONTO_FLOOR:
			if (this.isInTrainerRinkanPose()) {
				if (ranNum <= 2) this._trainer_semenFrontPoseArray[arrayId][0] += semen;
				else if (ranNum === 5) this._trainer_semenFrontPoseArray[arrayId][1] += semen;
				else if (ranNum <= 8) this._trainer_semenFrontPoseArray[arrayId][2] += semen;
			}
			else {
				if (ranNum <= 1) this._trainer_semenFrontPoseArray[arrayId][0] += semen;
				else if (ranNum === 3) this._trainer_semenFrontPoseArray[arrayId][1] += semen;
				else if (ranNum <= 6) this._trainer_semenFrontPoseArray[arrayId][2] += semen;
			}
 	}
	
	/*
	if(!this._trainer_semenFrontPoseArray)
		this._trainer_semenFrontPoseArray = [ [0,0,0], [0,0,0], [0,0,0], [0,0,0], [0,0,0] ];
	
	let arrayId = 0;
	
	if(this.isInTrainerRinkanPose())
		arrayId = TRAINER_SEMEN_FRONT_RINKAN_POSE;
	else if(this.isInTrainerTekokiPose())
		arrayId = TRAINER_SEMEN_FRONT_TEKOKI_POSE;
	else if(this.isInTrainerKisuPose())
		arrayId = TRAINER_SEMEN_FRONT_KISU_POSE;
	else if(this.isInTrainerFeraPose())
		arrayId = TRAINER_SEMEN_FRONT_FERA_POSE;
	else if(this.isInTrainerPaizuriPose())
		arrayId = TRAINER_SEMEN_FRONT_PAIZURI_POSE;
	
	//A 0 = Karryn's left side / back
	//B 1 = Karryn's right side / right
	//C 2 = Karryn's back side / front
	switch(area) {
	case CUM_BUKKAKE_FACE:
		if(this.isInTrainerRinkanPose()) {
			if(ranNum <= 3) 
				this._trainer_semenFrontPoseArray[arrayId][0] += floorRunoffRate;
			else if(ranNum === 6)
				this._trainer_semenFrontPoseArray[arrayId][1] += floorRunoffRate;
		}
		else {
			if(ranNum <= 1) 
				this._trainer_semenFrontPoseArray[arrayId][0] += floorRunoffRate;
			else if(ranNum <= 3)
				this._trainer_semenFrontPoseArray[arrayId][1] += floorRunoffRate;
			else if(ranNum <= 6)
				this._trainer_semenFrontPoseArray[arrayId][2] += floorRunoffRate;
		}
	break;
	case CUM_BUKKAKE_RIGHTARM:
		if(this.isInTrainerRinkanPose()) {
			if(ranNum <= 2) 
				this._trainer_semenFrontPoseArray[arrayId][1] += floorRunoffRate;
			else if(ranNum <= 7)
				this._trainer_semenFrontPoseArray[arrayId][2] += floorRunoffRate;
		}
		else {
			if(ranNum <= 6) 
				this._trainer_semenFrontPoseArray[arrayId][1] += floorRunoffRate;
		}
	break;
	case CUM_BUKKAKE_LEFTARM:
		if(this.isInTrainerRinkanPose()) {
			if(ranNum <= 3) 
				this._trainer_semenFrontPoseArray[arrayId][2] += floorRunoffRate;
		}
		else {
			if(ranNum <= 4) 
				this._trainer_semenFrontPoseArray[arrayId][0] += floorRunoffRate;
			else if(ranNum <= 7)
				this._trainer_semenFrontPoseArray[arrayId][2] += floorRunoffRate;
		}
	break;
	case CUM_BUKKAKE_RIGHTLEG:
		if(ranNum <= 4) 
			this._trainer_semenFrontPoseArray[arrayId][0] += floorRunoffRate;
		else if(ranNum <= 6)
			this._trainer_semenFrontPoseArray[arrayId][1] += floorRunoffRate;
	break;
	case CUM_BUKKAKE_LEFTLEG:
		if(ranNum <= 5) 
			this._trainer_semenFrontPoseArray[arrayId][0] += floorRunoffRate;
		else if(ranNum <= 6)
			this._trainer_semenFrontPoseArray[arrayId][1] += floorRunoffRate;
	break;
	case CUM_BUKKAKE_BOOBS:
		if(this.isInTrainerRinkanPose()) {
			if(ranNum <= 3) 
				this._trainer_semenFrontPoseArray[arrayId][0] += floorRunoffRate;
			else if(ranNum === 6)
				this._trainer_semenFrontPoseArray[arrayId][1] += floorRunoffRate;
		}
		else {
			if(ranNum <= 0) 
				this._trainer_semenFrontPoseArray[arrayId][0] += floorRunoffRate;
			else if(ranNum <= 1)
				this._trainer_semenFrontPoseArray[arrayId][1] += floorRunoffRate;
			else if(ranNum <= 3)
				this._trainer_semenFrontPoseArray[arrayId][2] += floorRunoffRate;
		}
	break;
	case CUM_BUKKAKE_BUTT:
		if(ranNum <= 2) 
			this._trainer_semenFrontPoseArray[arrayId][0] += floorRunoffRate;
	break;
	case CUM_ONTO_FLOOR:
		if(this.isInTrainerRinkanPose()) {
			if(ranNum <= 2) 
				this._trainer_semenFrontPoseArray[arrayId][0] += floorRunoffRate;
			else if(ranNum === 5)
				this._trainer_semenFrontPoseArray[arrayId][1] += floorRunoffRate;
			else if(ranNum <= 8)
				this._trainer_semenFrontPoseArray[arrayId][2] += floorRunoffRate;
		}
		else {
			if(ranNum <= 1) 
				this._trainer_semenFrontPoseArray[arrayId][0] += floorRunoffRate;
			else if(ranNum === 3)
				this._trainer_semenFrontPoseArray[arrayId][1] += floorRunoffRate;
			else if(ranNum <= 6)
				this._trainer_semenFrontPoseArray[arrayId][2] += floorRunoffRate;
		}
	break;
	}
	
	*/
};

// Move
Game_Actor.prototype.customReq_trainerMoveToBench = function() {
	let reqLength = 0;
	if(this.trainerBattle_getBenchLocation() != GYM_NOT_AT_BENCH) reqLength += 1;
	return $gameTroop.trainerBattle_activeGymGoers().length > reqLength;
};
Game_Actor.prototype.afterEval_trainerMoveToBench = function(target) {
	this.trainerBattle_setToStandby(true);
	this._trainer_movingToBenchLocation = target.gymBenchId;
	this.resetSexSkillConsUsage();
};

Game_Actor.prototype.customReq_trainerObserve = function() {
	let target = $gameTroop.trainerBattle_getGymGoerAtTrainerLocation();
	return this.trainerBattle_getBenchLocation() != GYM_NOT_AT_BENCH && target && !target._gym_trainerObserved && !target._gym_hereMainlyForSex && !this.trainerBattle_isInSexPose();
};
Game_Actor.prototype.afterEval_trainerObserve = function() {
	let target = $gameTroop.trainerBattle_getGymGoerAtTrainerLocation();
	if(!target) return;
	
	target._gym_trainerObserved = true;
	
	let targetForm = target._gym_workout_form;
	let targetStamina = target.hp / target.mhp;
	let formString = '';
	let maxFormString = '';
	let staminaString = false;
	
	if(targetForm >= GYMGOER_FORM_LIMIT_EXCELLENT) formString = TextManager.RemTrainerEnemyObserveFormExcellent;
	else if(targetForm >= GYMGOER_FORM_LIMIT_GOOD) formString = TextManager.RemTrainerEnemyObserveFormGood;
	else if(targetForm >= GYMGOER_FORM_LIMIT_NORMAL) formString = TextManager.RemTrainerEnemyObserveFormOkay;
	else if(targetForm >= GYMGOER_FORM_LIMIT_POOR) formString = TextManager.RemTrainerEnemyObserveFormPoor;
	else formString = TextManager.RemTrainerEnemyObserveFormBad;
	
	if(targetForm == target.trainerBattle_maxForm()) maxFormString = TextManager.RemTrainerEnemyObserveFormMax;
	
	if(targetStamina <= GYMGOER_STAMINA_LIMIT_EXHAUSTED) staminaString = TextManager.RemTrainerEnemyObserveStaminaExhausted;
	else if(targetStamina <= GYMGOER_STAMINA_LIMIT_TIRED) staminaString = TextManager.RemTrainerEnemyObserveStaminaTired;
	
	BattleManager._logWindow.push('addText', formString.format(target.displayName(), maxFormString));
	if(staminaString) BattleManager._logWindow.push('addText', staminaString);

	let meetsCockStarePassiveReq = this.karrynCockStareSkillPassiveRequirement();
	
	if(target._gym_shortsStripped && target.isErect) {
		BattleManager.playSpecialBgm_TrainerSex();
	}
	else {
		BattleManager.playSpecialBgm_TrainerWork();
	}
	
	if(Karryn.hasEdict(EDICT_PRISON_EMBLEM_SCENARIO)) {
		this.gainDescensionRandomStatsExp(this.level, 14, 7, 0);
	}
	else {
		this.gainMindExp(20, this.level);
	}
	this.justGotHitBySkillType(JUST_SKILLTYPE_TRAINER_OBSERVING);
	
	if(this.trainerBattle_isUsingHornyVariation()) {
		this.trainerBattle_switchToDifferentPose(target);
	}
	else {
		this.setTrainerTekokiPose(target);
	}
	
	if(target.reachedOrgasmPoint() || target.trainerBattle_isBlueBalled()) {
		BattleManager.actionRemLines(KARRYN_LINE_TRAINER_OBSERVE_ORGASMCOCK);
	} 
	else if(meetsCockStarePassiveReq) {
		if(target.isErect) {
			BattleManager.actionRemLines(KARRYN_LINE_TRAINER_OBSERVE_HARDCOCK);
		}
		else {
			BattleManager.actionRemLines(KARRYN_LINE_TRAINER_OBSERVE_SOFTCOCK);
		}
	}
	
	this.resetSexSkillConsUsage();
};

Game_Actor.prototype.customReq_trainerAdvice = function() {
	let target = $gameTroop.trainerBattle_getGymGoerAtTrainerLocation();
	return this.trainerBattle_getBenchLocation() != GYM_NOT_AT_BENCH && target;
};
Game_Actor.prototype.afterEval_trainerAdvice = function() {
	let target = $gameTroop.trainerBattle_getGymGoerAtTrainerLocation();
	let usedCockPet = false;
	let usedKiss = false;
	if(this.isStateAffected(STATE_TRAINER_USED_COCK_PET_ID)) {
		usedCockPet = true;
		this.addState(STATE_TRAINER_USED_COCK_PET_ID);
	}
	if(this.isStateAffected(STATE_TRAINER_USED_KISS_ID)) {
		usedKiss = true;
		this.addState(STATE_TRAINER_USED_KISS_LAST_TURN_ID);
	}
	
	if(target._gym_workout_form >= 1) {
		this._trainer_usedAdviceOnGoodForm = true;
	}
	else {
		this._trainer_usedAdviceOnGoodForm = false;
	}
	
	let formChange = 0.1 + (Math.random() * 0.05);
	if(this.trainerBattle_isInSexPose()) formChange -= (0.08 + (Math.random() * 0.03));
	else if(this.trainerBattle_isUsingHornyVariation()) formChange -= 0.05;
	if(target._gym_trainerObserved && formChange > 0) {
		target._gym_trainerObserved = false;
		formChange *= (1.5 + Math.random() * 0.5);
	}
	target._gym_workout_form += formChange;
	target._gym_trainerGaveAdvice = true;
	
	
	
	if(this.trainerBattle_isInSexPose()) {
		if(this.isInTrainerKisuPose() && (this.isStateAffected(STATE_TRAINER_USED_KISS_ID) || this.isStateAffected(STATE_TRAINER_USED_KISS_LAST_TURN_ID)))
			BattleManager.actionRemLines(KARRYN_LINE_TRAINER_ADVICE_SEXUAL_KISS);
		else if(this.isInTrainerFeraPose() && this.isBodySlotPenis(MOUTH_ID))
			BattleManager.actionRemLines(KARRYN_LINE_TRAINER_ADVICE_SEXUAL_FERA);
		else if(this.isInTrainerPaizuriPose() && this.isBodySlotPenis(BOOBS_ID))
			BattleManager.actionRemLines(KARRYN_LINE_TRAINER_ADVICE_SEXUAL_PAIZURI);
		else
			BattleManager.actionRemLines(KARRYN_LINE_TRAINER_ADVICE_SEXUAL_COCK);
		this._playthroughRecordGymTrainerCockAdviceGivenCount++;
	}
	else if(this.trainerBattle_isUsingHornyVariation()) {
		BattleManager.actionRemLines(KARRYN_LINE_TRAINER_ADVICE_FORM_HORNY);
		this._recordGymTrainerHornyAdviceGivenCount++;
	}
	else {
		BattleManager.actionRemLines(KARRYN_LINE_TRAINER_ADVICE_FORM_NORMAL);
		this._playthroughRecordGymTrainerGoodAdviceGivenCount++;
	}
	
	if(target._gym_shortsStripped && target.isErect) {
		BattleManager.playSpecialBgm_TrainerSex();
	}
	else {
		BattleManager.playSpecialBgm_TrainerWork();
	}
	
	if(Karryn.hasEdict(EDICT_PRISON_EMBLEM_SCENARIO)) {
		this.gainDescensionRandomStatsExp(this.level, 14, 7, 0);
	}
	else {
		this.gainMindExp(20, this.level);
	}
	this.justGotHitBySkillType(JUST_SKILLTYPE_TRAINER_ADVISING);
	
	if(this.trainerBattle_isInSexPose()) {
		this.emoteMasterManager_TrainerBattle();
	}
	else if(this.trainerBattle_isUsingHornyVariation()) {
		this.trainerBattle_switchToDifferentPose(target);
	}
	else {
		this.setTrainerTekokiPose(target);
	}
	
	this.resetSexSkillConsUsage();
};

Game_Actor.prototype.trainerBattle_switchToDifferentPose = function(target) {
	const CURRENT_TRAINER_POSE = 1;
	const TEKOKI_TRAINER_POSE = 2;
	const KISU_TRAINER_POSE = 3;
	const PAIZURI_TRAINER_POSE = 4;
	const FERA_TRAINER_POSE = 5;
	
	let poseArray = [CURRENT_TRAINER_POSE];
	
	if(this.topDesireIsMouthDesire()) {
		poseArray.push(KISU_TRAINER_POSE);
		poseArray.push(KISU_TRAINER_POSE);
	}
	else if(this.topDesireIsBoobsDesire()) {
		poseArray.push(PAIZURI_TRAINER_POSE);
		poseArray.push(PAIZURI_TRAINER_POSE);
		poseArray.push(PAIZURI_TRAINER_POSE);
	}
	else if(this.topDesireIsCockDesire()) {
		poseArray.push(FERA_TRAINER_POSE);
		poseArray.push(FERA_TRAINER_POSE);
	}
	else {
		poseArray.push(TEKOKI_TRAINER_POSE);
		poseArray.push(TEKOKI_TRAINER_POSE);
	}
	
	if(this.mouthDesire >= this.kissingMouthDesireRequirement(KISS_LVL_ONE, true)) {
		poseArray.push(KISU_TRAINER_POSE);
		poseArray.push(KISU_TRAINER_POSE);
	}
	if(this.boobsDesire >= this.tittyFuckBoobsDesireRequirement(true)) {
		poseArray.push(PAIZURI_TRAINER_POSE);
		poseArray.push(PAIZURI_TRAINER_POSE);
	}
	if(this.cockDesire >= this.blowjobCockDesireRequirement(true)) {
		poseArray.push(FERA_TRAINER_POSE);
		poseArray.push(FERA_TRAINER_POSE);
	}
	
	
	
	
	
	let changeToPoseID = poseArray[Math.randomInt(poseArray.length)];
	switch(changeToPoseID) {
		case TEKOKI_TRAINER_POSE:
			this.setTrainerTekokiPose(target);
        break;
		case KISU_TRAINER_POSE:
			this.setTrainerKisuPose(target);
        break;
		case PAIZURI_TRAINER_POSE:
			this.setTrainerPaizuriPose(target);
        break;
		case FERA_TRAINER_POSE:
			this.setTrainerFeraPose(target);
        break;
		case CURRENT_TRAINER_POSE:
			this.emoteMasterManager_TrainerBattle();
        break;
	}	
};

// Rest 
Game_Actor.prototype.dmgFormula_trainerRest = function() {
	let percent = Math.max(0.3, this.hrg * 5);
	let dmg = this.maxstamina * percent;
	return Math.round(dmg);
};
Game_Actor.prototype.afterEval_trainerRest = function() {
	this.trainerBattle_setToStandby(true);
	this.addState(STATE_TRAINER_RESTING_ID);
	this.resetSexSkillConsUsage();
};

// Sex Skills

// Pull Shorts
Game_Actor.prototype.showEval_trainerPullShorts = function() { 
	return this.hasPassive(PASSIVE_TRAINER_HORNY_ADVICE_COUNT_ONE_ID);
};
Game_Actor.prototype.customReq_trainerPullShorts = function() {
	let target = $gameTroop.trainerBattle_getGymGoerAtTrainerLocation();
	
	return this.trainerBattle_isUsingHornyVariation() && this.trainerBattle_getBenchLocation() != GYM_NOT_AT_BENCH && target && !target._gym_shortsStripped;
};
Game_Actor.prototype.afterEval_trainerPullShorts = function(target) {
	target._gym_shortsStripped = true;
	if(!target._gym_shortsWasStrippedOnceThisBattle) {
		target._gym_shortsWasStrippedOnceThisBattle = true;
		this._recordGymTrainerShortsPulledCount++;
	}
	
	if(target.isErect) {
		BattleManager.playSpecialBgm_TrainerSex();
	}
	else {
		BattleManager.playSpecialBgm_TrainerWork();
	}
	
	BattleManager.actionRemLines(KARRYN_LINE_TRAINER_PULL_SHORTS);
	
	this.justGotHitBySkillType(JUST_SKILLTYPE_TRAINER_PULLING_SHORTS);
	
	this.setTrainerFeraPose(target);
};

Game_Actor.prototype.showEval_trainerSexSkills = function() { 
	return this._recordGymTrainerShortsPulledCount > 0;
};

// Cock Pet
Game_Actor.prototype.showEval_trainerCockPet = function() {
	return this.showEval_trainerSexSkills() && this.showEval_karrynCockPettingSkill();
};
Game_Actor.prototype.customReq_trainerCockPet = function() {
	let target = $gameTroop.trainerBattle_getGymGoerAtTrainerLocation();
	let meetDesireReq = this.cockDesire >= this.cockPettingCockDesireRequirement(true);
	
	if(this.isBodySlotPenis(BOOBS_ID) || this.isBodySlotPenis(MOUTH_ID) || this.isBodySlotPenis(LEFT_HAND_ID))
		return false;
	
	return this.trainerBattle_getBenchLocation() != GYM_NOT_AT_BENCH && target && meetDesireReq;
};
Game_Actor.prototype.afterEval_trainerCockPet = function() {
	let target = $gameTroop.trainerBattle_getGymGoerAtTrainerLocation();
	if(target) {
		target.trainerBattle_setTrainerUsedSexSkill(this);
		this.addState(STATE_TRAINER_USED_COCK_PET_ID);
		
		if(this.isInTrainerKisuPose() && this.isStateAffected(STATE_TRAINER_USED_KISS_ID)) {
			this.addState(STATE_TRAINER_USED_KISS_LAST_TURN_ID);
		}
		
		//this.setTrainerTekokiPose();
		this.selectorKarryn_cockPetting(target);
	}
	
	
};



// Kiss
Game_Actor.prototype.showEval_trainerKiss = function() {
	return this.showEval_trainerSexSkills() && this.showEval_karrynKissSkill();
};
Game_Actor.prototype.customReq_trainerKiss = function() {
	let target = $gameTroop.trainerBattle_getGymGoerAtTrainerLocation();
	let meetDesireReq = this.mouthDesire >= this.kissingMouthDesireRequirement(KISS_LVL_ONE, true);
	
	return this.trainerBattle_getBenchLocation() != GYM_NOT_AT_BENCH && target && meetDesireReq;
};
Game_Actor.prototype.afterEval_trainerKiss = function() {
	let target = $gameTroop.trainerBattle_getGymGoerAtTrainerLocation();
	if(target) {
		if(this.isInTrainerKisuPose() && this.isStateAffected(STATE_TRAINER_USED_COCK_PET_ID)) {
			this.addState(STATE_TRAINER_USED_COCK_PET_ID);
		}
		
		target.trainerBattle_setTrainerFirstTouched();
		this.setTrainerKisuPose(target);
		this.selectorKarryn_kiss(target);
		this.addState(STATE_TRAINER_USED_KISS_ID);
		target.addState(STATE_TRAINER_USED_KISS_ID);
	}
};


// Handjob
Game_Actor.prototype.showEval_trainerHandjob = function() {
	return this.showEval_trainerSexSkills() && this.showEval_karrynHandjobSkill();
};
Game_Actor.prototype.customReq_trainerHandjob = function(pullShortsSkillReq) {
	let target = $gameTroop.trainerBattle_getGymGoerAtTrainerLocation();
	let meetDesireReq = this.cockDesire >= this.handjobCockDesireRequirement(true);
	
	return this.trainerBattle_getBenchLocation() != GYM_NOT_AT_BENCH && meetDesireReq && target && ((target._gym_shortsStripped && target.isErect&& !target.hasNoMoreEjaculationStockOrEnergy()) || pullShortsSkillReq);
};
Game_Actor.prototype.afterEval_trainerHandjob = function() {
	let target = $gameTroop.trainerBattle_getGymGoerAtTrainerLocation();
	if(target) {
		target.trainerBattle_setTrainerUsedSexSkill(this);
		if(this.isInTrainerKisuPose()) {
			this.setTrainerKisuPose(target);
			if(this.isStateAffected(STATE_TRAINER_USED_KISS_ID)) {
				this.addState(STATE_TRAINER_USED_KISS_LAST_TURN_ID);
			}
		}
		else {
			this.setTrainerTekokiPose(target);
		}
		this.selectorKarryn_handjob(target);
	}
};


// Blowjob
Game_Actor.prototype.showEval_trainerBlowjob = function() {
	return this.showEval_trainerSexSkills() && this.showEval_karrynBlowjobSkill();
};
Game_Actor.prototype.customReq_trainerBlowjob = function(pullShortsSkillReq) {
	let target = $gameTroop.trainerBattle_getGymGoerAtTrainerLocation();
	let meetDesireReq = this.mouthDesire >= this.blowjobMouthDesireRequirement(true) && this.cockDesire >= this.blowjobCockDesireRequirement(true);
	
	return this.trainerBattle_getBenchLocation() != GYM_NOT_AT_BENCH && meetDesireReq && target && ((target._gym_shortsStripped && target.isErect&& !target.hasNoMoreEjaculationStockOrEnergy()) || pullShortsSkillReq);
};
Game_Actor.prototype.afterEval_trainerBlowjob = function() {
	let target = $gameTroop.trainerBattle_getGymGoerAtTrainerLocation();
	if(target) {
		target.trainerBattle_setTrainerUsedSexSkill(this);
		this.setTrainerFeraPose(target);
		this.selectorKarryn_blowjob(target);
	}
};

// Titty Fuck
Game_Actor.prototype.showEval_trainerTittyFuck = function() {
	return this.showEval_trainerSexSkills() && this.showEval_karrynTittyFuckSkill();
};
Game_Actor.prototype.customReq_trainerTittyFuck = function(pullShortsSkillReq) {
	let target = $gameTroop.trainerBattle_getGymGoerAtTrainerLocation();
	let meetDesireReq = this.boobsDesire >= this.tittyFuckBoobsDesireRequirement(true) && this.cockDesire >= this.tittyFuckCockDesireRequirement(true);
	
	return this.trainerBattle_getBenchLocation() != GYM_NOT_AT_BENCH && meetDesireReq && target && ((target._gym_shortsStripped && target.isErect&& !target.hasNoMoreEjaculationStockOrEnergy()) || pullShortsSkillReq);
};
Game_Actor.prototype.afterEval_trainerTittyFuck = function() {
	let target = $gameTroop.trainerBattle_getGymGoerAtTrainerLocation();
	if(target) {
		target.trainerBattle_setTrainerUsedSexSkill(this);
		this.setTrainerPaizuriPose(target);
		this.selectorKarryn_tittyfuck(target);
	}
};

// Stop Sex
Game_Actor.prototype.showEval_trainerStopSex = function() {
	return this.trainerBattle_isInSexPose() && !this.isStateAffected(STATE_TRAINER_USED_COCK_PET_ID) && !this.isStateAffected(STATE_TRAINER_USED_KISS_ID);
};
Game_Actor.prototype.afterEval_trainerStopSex = function() {
	this.removeState(STATE_TRAINER_USED_COCK_PET_ID); 
	this.removeState(STATE_TRAINER_USED_KISS_ID);
	this.removeState(STATE_TRAINER_USED_KISS_LAST_TURN_ID);
	
	let enemy = $gameTroop.trainerBattle_getGymGoerAtTrainerLocation();
	if(enemy) {
		BattleManager.pullOutEnemy(enemy);
		if(this.isInTrainerKisuPose()) {
			this.setTrainerKisuPose(enemy);
		}
		else if(this.isInTrainerFeraPose() || this.isInTrainerPaizuriPose()) {
			this.setTrainerFeraPose(enemy);
		}
		else {
			this.setTrainerTekokiPose(enemy);
		}
	}
	else {
		this.setTrainerStandbyPose();
	}
	
	this.resetSexSkillConsUsage();
};

Game_Actor.prototype.showEval_trainerDemonstrate = function() {
	return this.hasPassive(PASSIVE_TRAINER_GYMGOER_SEX_COUNT_ONE_ID) && (this.karrynPussySexSkillPassiveRequirement() || this.karrynAnalSexSkillPassiveRequirement());
};
Game_Actor.prototype.customReq_trainerDemonstrate = function() {
	if(!this.isAroused()) return false;
	
	let canDoVaginal = this.karrynPussySexSkillPassiveRequirement() && this.pussyDesire >= this.pussySexPussyDesireRequirement(true) && this.cockDesire >= this.pussySexCockDesireRequirement(true) && this.isWet;
	let canDoAnal = this.karrynAnalSexSkillPassiveRequirement() && this.buttDesire >= this.analSexButtDesireRequirement(true) && this.cockDesire >= this.analSexCockDesireRequirement(true);
	
	if(!canDoVaginal && !canDoAnal) return false;
	
	let activeGymGoers = $gameTroop.trainerBattle_activeGymGoers();
	if(activeGymGoers.length == 0) return false;
	
	let ableBodies = 0;
	
	activeGymGoers.forEach(function(member) {
		if(!member.hasNoMoreEjaculationStockOrEnergy()) {
			ableBodies++
		}
    });
	
	return ableBodies > 0;
};
Game_Actor.prototype.afterEval_trainerDemonstrate = function() {
	this.startTrainerRinkan();
	this.resetSexSkillConsUsage();
};

// End Shift
Game_Actor.prototype.showEval_trainerBattle_endShift = function() {
	return $gameTroop._gymGoersSpawnedCount >= $gameTroop._gymGoersSpawnLimit && $gameTroop.trainerBattle_activeGymGoers().length === 0;
};
Game_Actor.prototype.afterEval_trainerBattle_endShift = function() {
	$gameParty.trainerBattle_advanceTimeBySeconds($gameParty._trainerBattle_timeLimit - $gameParty.trainerBattle_getCurrentTimeInSeconds());
};

////////////////
// Game Troop
////////////////

//////
// Setup

Game_Troop.prototype.setupTrainerBattle = function(troopId) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	this._gymBenches = [ false, false, false, false, false, false ];
	
	this.calculateGymGoersSpawnLimit();
	
	let gymgoers = this.trainerBattle_startingGymGoers();
	
	//Enemies
	for(let i = 0; i < gymgoers.length; ++i) {
		let enemyId = gymgoers[i];
		let enemy = this.setup_trainerBattle_gymGoer(enemyId);
		enemy.setupForTrainerBattle_starters();
	}
	this.makeUniqueNames();
	this.setupEnemyPrefixEjaculationStockEffect();

	this._gymGoersSpawnedCount = gymgoers.length;
	this._nextGymGoerTimeLimit = 120;
	
	this._gymObs = new Game_Enemy(ENEMY_GYM_OBS_ID, 0, 0, false, ENEMY_GYM_OBS_ID);
	this._enemies.push(this._gymObs);
	
};

Game_Troop.prototype.calculateGymGoersSpawnLimit = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let rep = $gameParty._gymReputation;
	
	let spawnLimit = 3;
	
	if(rep > 15) spawnLimit = 13 + Math.randomInt((rep - 15) * 0.5);
	else if(rep <= 15) spawnLimit = 8 + ((rep - 5) * 0.5);
	else if(rep <= 5) spawnLimit = 3 + rep;

	let spawnRate = 1;
	
	
	if(Karryn.hasPassive(PASSIVE_TRAINER_GYMGOER_SEX_COUNT_THREE_ID)) {
		spawnLimit += 1;
		spawnRate += 0.2;
	}
	else if(Karryn.hasPassive(PASSIVE_TRAINER_GYMGOER_SEX_COUNT_TWO_ID)) {
		spawnLimit += 1;
		spawnRate += 0.1;
	}
	
	
	
	if(Karryn.hasEdict(EDICT_APHRODISIACS_IN_INMATE_FOOD)) {
		spawnRate += 0.1;
	}
	if(Karryn.hasEdict(EDICT_APHRODISIACS_DRUGS_FOR_INMATES)) {
		spawnRate += 0.1;
	}
	
	if(Prison.prisonLevelThreeIsRioting()) {
		spawnLimit -= 2;
		spawnRate -= 0.2;
	}
	
	if(Karryn.hasEdict(EDICT_GYM_POLICY_EXTENDED)) {
		spawnLimit += 2;
		spawnRate += 0.25;
	}
	else if(Karryn.hasEdict(EDICT_GYM_POLICY_SHORTEN)) {
		spawnLimit -= 2;
		spawnRate -= 0.15;
	}
	
	if(Karryn.hasEdict(EDICT_PAID_GYM_MEMBERSHIP)) {
		spawnRate -= 0.1;
	}
	if(Karryn.hasEdict(EDICT_COLD_SHOWERS)) {
		spawnRate -= 0.1;
	}
	
	if(Karryn.hasEdict(EDICT_REPAIR_READING_ROOM) && Karryn.hasEdict(EDICT_STOCK_WITH_BODYBUILDING_BOOKS)) {
		spawnLimit += 2;
	}
	if(Karryn.hasEdict(EDICT_NO_THUG_LABOR)) {
		spawnLimit += 2;
	}
	
	if(Karryn.hasEdict(EDICT_RECEPTION_POLICY_STRONG_ONLY)) {
		spawnRate += 0.2;
	}
	else if(Karryn.hasEdict(EDICT_RECEPTION_POLICY_FAVOR_STRONG)) {
		spawnRate += 0.1;
	}
	else if(Karryn.hasEdict(EDICT_RECEPTION_POLICY_WEAK_ONLY)) {
		spawnRate -= 0.1;
	}
	else if(Karryn.hasEdict(EDICT_RECEPTION_POLICY_FAVOR_WEAK)) {
		spawnRate -= 0.25;
	}
	
	if(Karryn.hasEdict(EDICT_EXPAND_INMATE_MENU)) {
		spawnRate += 0.1;
	}
	else if(!Karryn.hasEdict(EDICT_REPAIR_KITCHEN_AND_MESS_HALL)) {
		spawnRate -= 0.1;
	}
	
	spawnRate *= $gameParty._trainerBattle_battleTimeLimitBasedMaxSpawnMultipler;

	this._gymGoersSpawnLimit = Math.max(2, Math.ceil(spawnLimit * spawnRate));
};

Game_Troop.prototype.setup_trainerBattle_gymGoer = function(enemyId) {
	let originalEnemyId = enemyId;
	let wanted = false;
	wanted = Prison.findAvailableWanted($dataEnemies[enemyId], 1);
	if(wanted) {
		if(!wanted.enemyTypeIsBoss())
			enemyId = wanted._enemyId;
	}
	
	let benchId = -1;
	while(benchId === -1) {
		randomNum = Math.randomInt(GYM_TOTAL_BENCHES) + GYM_BENCH_A;
		if(this._gymBenches[randomNum] === false) {
			benchId = randomNum;
		}
	}
	
	let x = ENEMY_NAME_STARTING_X;
	let y = ENEMY_NAME_STARTING_Y;
	
	switch(benchId) {
	case GYM_BENCH_A:
		x = GYM_BENCH_A_X;
		y = GYM_BENCH_A_Y;
		break;
	case GYM_BENCH_B:
		x = GYM_BENCH_B_X;
		y = GYM_BENCH_B_Y;
		break;
	case GYM_BENCH_C:
		x = GYM_BENCH_C_X;
		y = GYM_BENCH_C_Y;
		break;
	case GYM_BENCH_D:
		x = GYM_BENCH_D_X;
		y = GYM_BENCH_D_Y;
		break;
	case GYM_BENCH_E:
		x = GYM_BENCH_E_X;
		y = GYM_BENCH_E_Y;
		break;
	}
	
	if(!wanted) enemyId = this.checkEnemyIdForPossibleDowngradeOrUpgrade(enemyId);
	let enemy = new Game_Enemy(enemyId, x, y, wanted, originalEnemyId);
	enemy._gym_usingBenchId = benchId;
	this._gymBenches[benchId] = enemy;
	this._enemies.push(enemy);
	enemy.setupForTrainerBattle();
	
	return enemy;
};


Game_Troop.prototype.trainerBattle_startingGymGoers = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let gymgoers = [];
	let startingNum = 0;
	let rep = $gameParty._gymReputation;
	
	if(rep >= 30) startingNum = 4 + Math.randomInt(3);
	else if(rep >= 20) startingNum = 4 + Math.randomInt(2);
	else if(rep >= 10) startingNum = 3 + Math.randomInt(3);
	else if(rep >= 7) startingNum = 3 + Math.randomInt(2);
	else if(rep >= 4) startingNum = 2 + Math.randomInt(3);
	else if(rep >= 1) startingNum = 2 + Math.randomInt(2);
	else startingNum = 2;
	
	if(Karryn.hasEdict(EDICT_GYM_POLICY_EXTENDED)) {
		startingNum += 1;
	}
	else if(Karryn.hasEdict(EDICT_GYM_POLICY_SHORTEN)) {
		startingNum -= 1;
	}
	
	startingNum = Math.min(startingNum, GYM_TOTAL_BENCHES);
	
	for(let i = 0; i < startingNum; ++i) {
		gymgoers.push(this.trainerBattle_validEnemyId());
	}
	
	return gymgoers;
};

Game_Troop.prototype.trainerBattle_validEnemyId = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let validEnemyTypes = [ 51, 52, 53, 54, 55, 91, 181, 191 ];
	let gymRep = $gameParty._gymReputation;
	let trainerNotoriety = $gameParty._trainerNotoriety;
	
	//Thugs
	if(!Prison.prisonLevelOneIsRioting()) {
		validEnemyTypes.push(94);
		validEnemyTypes.push(95);
	}
	
	//Goblins
	if(trainerNotoriety >= 5) {
		validEnemyTypes.push(81);
		validEnemyTypes.push(82);
	}
	
	//Rogues
	if(gymRep >= 10 && !Prison.prisonLevelTwoIsRioting()) {
		validEnemyTypes.push(142);
	}
	
	//Nerds
	if(!Prison.prisonLevelTwoIsRioting()) {
		if(Karryn.hasEdict(EDICT_REPAIR_READING_ROOM) && Karryn.hasEdict(EDICT_STOCK_WITH_BODYBUILDING_BOOKS)) {
			validEnemyTypes.push(121);
			if(gymRep >= 5) {
				validEnemyTypes.push(122);
				validEnemyTypes.push(123);
			}
		}
		else if(gymRep >= 15)
			validEnemyTypes.push(121);
	}
	
	//Lizardman
	if(!Prison.prisonLevelThreeIsRioting()) {
		validEnemyTypes.push(193);
		validEnemyTypes.push(194);
	}
	
	//Orcs
	if(!Prison.prisonLevelThreeIsRioting()) {
		validEnemyTypes.push(182);
		validEnemyTypes.push(183);
	}
	
	//Homeless
	if(trainerNotoriety >= 3 && !Prison.prisonLevelThreeIsRioting()) {
		validEnemyTypes.push(211);
		validEnemyTypes.push(212);
	}
	
	//Guards
	if(gymRep >= 3 && (Prison.guardAggression >= 20 || (Prison.guardAggression >= 12 && Karryn.hasEdict(EDICT_EXPERT_GUARD_TRAINING)))) {
		validEnemyTypes = validEnemyTypes.concat($gameParty.getGuardEnemyIds());
	}
	
	if(Karryn.hasEdict(EDICT_FAILED_STATE_EFFECTS)) {
		validEnemyTypes.push($gameParty.getDescensionFailedStateEnemyId(false, false, false));
		validEnemyTypes.push($gameParty.getDescensionFailedStateEnemyId(false, false, false));
		validEnemyTypes.push($gameParty.getDescensionFailedStateEnemyId(false, false, false));
		validEnemyTypes.push($gameParty.getDescensionFailedStateEnemyId(false, false, false));
	}
	
	return validEnemyTypes[Math.randomInt(validEnemyTypes.length)];
};

// On Turn End
// End of Turn
Game_Troop.prototype.onTurnEndSpecial_trainerBattle = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	
	if(!actor.isInTrainerRinkanPose()) {
		//Moving
		if(actor._trainer_movingToBenchLocation) {
			let target = $gameTroop._gymBenches[actor._trainer_movingToBenchLocation];
			
			if(target) {
				actor._trainer_atBenchLocation = actor._trainer_movingToBenchLocation;
				target.addState(STATE_BENCH_KARRYN_ID);
				
				if(Karryn.hasEdict(EDICT_PRISON_EMBLEM_SCENARIO)) {
					actor.gainDescensionRandomStatsExp(actor.level, 15, 10, 0);
				}
				else {
					actor.gainAgilityExp(25, actor.level);
				}
				actor.justGotHitBySkillType(JUST_SKILLTYPE_TRAINER_MOVING);
				actor.setTrainerTekokiPose(target);
				//actor.setTrainerTachieGymGoer(target);
				
				if(!target._gym_firstMove) {
					target._gym_firstMove = true;
					BattleManager.actionRemLines(KARRYN_LINE_TRAINER_START);
				}
				
				if(target._gym_shortsStripped && target.isErect) {
					BattleManager.playSpecialBgm_TrainerSex();
				}
				else {
					BattleManager.playSpecialBgm_TrainerWork();
				}
			}
			actor._trainer_movingToBenchLocation = false;
		}
		
		//Spawn
		if(this._gymGoersSpawnedCount < this._gymGoersSpawnLimit && $gameParty.trainerBattle_getCurrentTimeInSeconds() > this._nextGymGoerTimeLimit && this.trainerBattle_countEmptyBenches() > 0) {
			let enemyId = this.trainerBattle_validEnemyId();
			let enemy = this.setup_trainerBattle_gymGoer(enemyId);
			enemy.makeUniqueNames();
			enemy.setupEnemyPrefixEjaculationStockEffect();
			enemy.onBattleStart();
			enemy.midBattleSpawn_setupDreamX();
			
			if(!enemy.hasAngryPrefix() && !enemy.hasHungryPrefix() && !enemy.hasStarvingPrefix()) {
				let chanceHereMainlyForSex = 0;
				if($gameParty._trainerNotoriety > 0) {
					if($gameParty._trainerNotoriety > 5) chanceHereMainlyForSex = 40 + ($gameParty._trainerNotoriety * 4);
					else chanceHereMainlyForSex += $gameParty._trainerNotoriety * 8;
				}
				if(enemy.hasHornyPrefix() || enemy.isHorny) chanceHereMainlyForSex += 25;
				if(enemy.isHomelessType) chanceHereMainlyForSex += 20;
				else if(enemy.isGoblinType) chanceHereMainlyForSex += 30;
				if(Math.randomInt(100) <= chanceHereMainlyForSex) {
					enemy._gym_hereMainlyForSex = true;
					enemy.setPleasureToArousalPoint();
					enemy._firstTimeAroused = true;
				}
			}
			
			SceneManager._scene._spriteset.addEnemy(enemy);
			this._gymGoersSpawnedCount++;
			this._nextGymGoerTimeLimit = $gameParty.trainerBattle_getCurrentTimeInSeconds() + 30 + (Math.randomInt(3) * 30);
			BattleManager._logWindow.push('addText', TextManager.RemTrainerEnemyEntersGym.format(enemy.displayName()));
			AudioManager.playSe({name:'+Waitress_Chair1', pan:0, pitch:70, volume:90});
		}
	}
	//Trainer Rinkan
	else {
		
	}
	
};

Game_Troop.prototype.trainerBattle_getGymGoerAtTrainerLocation = function() {
	let benchId = Karryn.trainerBattle_getBenchLocation();
	if(benchId === GYM_NOT_AT_BENCH) return false;
	if(!this._gymBenches) return false;
	
	return this._gymBenches[benchId];
};

Game_Troop.prototype.trainerBattle_activeGymGoers = function() {
	return this.members().filter(function(member) {
        return member.isAppeared() && !member.isDeathStateAffected() && member.enemyType() !== ENEMYTYPE_GYM_OBS_TAG;
    });
};

Game_Troop.prototype.trainerBattle_countEmptyBenches = function() {
	let count = 0;
	
	for(let i = GYM_BENCH_A; i < GYM_TOTAL_BENCHES; ++i) {
		if(this._gymBenches[i] === false) count++;
	}
	
	return count;
};

Game_Troop.prototype.trainerBattle_noMoreGymGoers = function() {
	return this.trainerBattle_activeGymGoers().length === 0 && this._gymGoersSpawnedCount >= this._gymGoersSpawnLimit;
};

///////////
// Game Enemy
/////////////

Object.defineProperty(Game_Enemy.prototype, "gymBenchId", { 
	get: function () { return this._gym_usingBenchId; }, configurable: true 
});

Game_Enemy.prototype.setupForTrainerBattle = function() {
	this._gym_workout_remainingProgress = 100;
	this._gym_workout_form = 1;
	this._gym_workout_lastWorkoutTime = 0;
	
	if(this.hasElitePrefix() || this.hasStrongPrefix() || this.hasGoodPrefix()) {
		this._gym_workout_form += (0.33 * Math.random() * this.trainerBattle_maxForm());
		this._gym_workout_form -= (0.1 * Math.random() * this.trainerBattle_minForm());
	}
	else {
		this._gym_workout_form += (0.2 * Math.random() * this.trainerBattle_maxForm());
		this._gym_workout_form -= (0.33 * Math.random() * this.trainerBattle_minForm());
	}
	
	this._gym_firstMove = false;
	this._gym_shortsStripped = false; 
	this._gym_shortsWasStrippedOnceThisBattle = false; 
	this._gym_trainerFirstTouched = false; 
	this._gym_trainerUsedSexSkill = false; 
	this._gym_trainerObserved = false; 
	this._gym_trainerGaveAdvice = false; 
	this._gym_workout_trainerLastUsedSexSkillTime = 0;
	
	this._gym_hereMainlyForSex = false;
	
	if(Karryn.hasEdict(EDICT_PAID_GYM_MEMBERSHIP)) {
		$gameParty.increaseGymGoerSatisfaction(GYMGOER_SATISFACTION_LOST_FROM_MEMBERSHIP);
	}
};

Game_Enemy.prototype.setupForTrainerBattle_starters = function() {
	let startingProgress = Math.randomInt(21);
	this._gym_workout_remainingProgress -= startingProgress;
	this._hp -= this.mhp * (startingProgress * 0.01);
};

Game_Enemy.prototype.trainerBattle_minForm = function() {
	let num = 0.75;
	
	if(this.hasEnduringPrefix() || this.hasStrongPrefix() || this.hasGoodPrefix() || this.hasMetalPrefix()) num += 0.09;
	else if(this.hasElitePrefix() || this.hasBigPrefix()) num += 0.13;
	else {
		if(this.isGoblinType || this.isNerdType || this.isPrisonerType)  num -= 0.1;
		
		if(this.hasWeakPrefix() || this.hasBadPrefix() || this.hasStarvingPrefix()) num -= 0.2;
		else if(this.hasIneptPrefix() || this.hasSlowPrefix() || this.hasHungryPrefix()) num -= 0.15;
		else if(this.hasDrunkPrefix() || this.hasSensitivePrefix() || this.hasHornyPrefix()) num -= 0.08;
		else if(this.hasAngryPrefix() || this.hasDexterousPrefix() || this.hasAgilePrefix()) num += 0.05;
	}
	
	if(this.isErect || this.isHorny) num -= 0.15;
	if(this.hasNoMoreEjaculationStockOrEnergy()) num -= 0.25;
	if(this._gym_trainerUsedSexSkill) num -= 0.15;
	
	return Math.max(num, 0.25);
};

Game_Enemy.prototype.trainerBattle_maxForm = function() {
	let num = 1.5;
	
	if(this.hasWeakPrefix() || this.hasBadPrefix() || this.hasStarvingPrefix()) num -= 0.2;
	else if(this.hasIneptPrefix() || this.hasSlowPrefix() || this.hasHungryPrefix()) num -= 0.15;
	else if(this.hasDrunkPrefix() || this.hasSensitivePrefix()) num -= 0.1;
	else if(this.hasAngryPrefix() || this.hasDexterousPrefix() || this.hasAgilePrefix() || this.hasHornyPrefix()) num += 0.1;
	else if(this.hasEnduringPrefix() || this.hasStrongPrefix() || this.hasGoodPrefix() || this.hasMetalPrefix()) num += 0.15;
	else if(this.hasElitePrefix() || this.hasBigPrefix()) num += 0.25;
	
	if(this.isErect || this.isHorny) num -= 0.25;
	
	return Math.max(num, this.trainerBattle_minForm() + 0.25);
};

Game_Enemy.prototype.battlerName_trainerBattleSuffix = function() {
	let suffixFileName = '';
	
	if(this.isErect) {
		if(this.trainerBattle_isBlueBalled() && Karryn.trainerBattle_atSameLocationAsTarget(this))
			suffixFileName = ENEMY_BATTLERNAME_ANGRY_SUFFIX;
		else
			suffixFileName = ENEMY_BATTLERNAME_BLUSH_SUFFIX;
	}
	else if(this._gym_workoutForm >= GYMGOER_FORM_LIMIT_EXCELLENT) {
		suffixFileName = ENEMY_BATTLERNAME_CHARGE_SUFFIX;
	}
	

	return suffixFileName;
};

Game_Enemy.prototype.trainerBattle_isBlueBalled = function() {
	return this.isErect && this._gym_trainerUsedSexSkill && !Karryn.trainerBattle_atSameLocationAsTarget(this) && this._enemyTempRecordTotalEjaculationCount == 0 && !Karryn.isInTrainerRinkanPose() && $gameParty.trainerBattle_getCurrentTimeInSeconds() >= this._gym_workout_trainerLastUsedSexSkillTime + GYMGOER_BLUEBALLS_TIMELIMIT;
};

Game_Enemy.prototype.bonusPpt_trainerBattle_far = function() {
	let value = this.pleasure;
	if(value <= 0) return 0;
	
	let degenRate = 0.06;
	if(this.reachedOrgasmPoint()) degenRate *= 2;
	else if(this._enemyTempRecordTotalEjaculationCount > 0)  degenRate *= 1.5;
	if(Karryn.isInSexPose() || this.isHorny || this.isStateAffected(STATE_TRAINER_USED_KISS_ID)) degenRate *= 0.2;

	value -= Math.random() * value * 0.33;
	value *= degenRate;
	
	if(this._gym_hereMainlyForSex && this._enemyTempRecordTotalEjaculationCount == 0) {
		value = Math.min(value, Math.round(this.pleasure - 1 - this.arousalPoint()));
	}

	return Math.min(0, value * -1);
};
Game_Enemy.prototype.bonusPpt_trainerBattle_close = function() {
	let rate = 1;
	
	if($gameParty.isInTrainerBattle && !Karryn.isInTrainerRinkanPose() && Karryn.trainerBattle_atSameLocationAsTarget(this)) {
		if(!Karryn.trainerBattle_isUsingHornyVariation())
			rate = 0.8;
	}
	
	return rate;
};

Game_Enemy.prototype.enemyGymParamRate = function(paramId) {
	let increasedRate = 0;
	let rep = $gameParty._gymReputation;
	let notoriety = $gameParty._trainerNotoriety;
	
	if(DLC_GYM && !this.isBossType) {
		if(rep <= 10) {
			increasedRate += rep * 0.015;
		}
		else if(rep <= 30) {
			increasedRate += 0.15 + (rep * 0.005);
		}
		else if(rep > 30) {
			increasedRate += 0.25 + (rep * 0.001);
		}
		
		if(notoriety <= 10) {
			increasedRate -= notoriety * 0.005;
		}
		else if(notoriety <= 30) {
			increasedRate -= 0.05 + (notoriety * 0.0025);
		}
		else if(notoriety > 30) {
			increasedRate -= 0.1 + (notoriety * 0.001);
		}
	}
	
	increasedRate = Math.max(increasedRate, -0.75);
	increasedRate = Math.min(increasedRate, 0.5);
	
	return 1 + increasedRate;
};

Game_Enemy.prototype.setGymOrgasmSkills_trainerWork = function() {
	if(Karryn.isInTrainerTekokiPose()) {
		this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_LEFTARM_ID, SKILL_ENEMY_EJACULATE_LEFTARM_ID, SKILL_ENEMY_EJACULATE_BOOBS_ID, SKILL_ENEMY_EJACULATE_RIGHTARM_ID, SKILL_ENEMY_EJACULATE_RIGHTARM_ID, SKILL_ENEMY_EJACULATE_ONTO_FLOOR_ID]);
	}
	else if(Karryn.isInTrainerKisuPose()) {
		this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_LEFTARM_ID, SKILL_ENEMY_EJACULATE_LEFTARM_ID, SKILL_ENEMY_EJACULATE_BOOBS_ID, SKILL_ENEMY_EJACULATE_BOOBS_ID, SKILL_ENEMY_EJACULATE_ONTO_FLOOR_ID]);
	}
	else if(Karryn.isInTrainerFeraPose()) {
		this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_FACE_ID, SKILL_ENEMY_EJACULATE_FACE_ID, SKILL_ENEMY_EJACULATE_FACE_ID, SKILL_ENEMY_EJACULATE_FACE_ID, SKILL_ENEMY_EJACULATE_FACE_ID, SKILL_ENEMY_EJACULATE_BOOBS_ID]);
	}
	else if(Karryn.isInTrainerPaizuriPose()) {
		this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_BOOBS_ID, SKILL_ENEMY_EJACULATE_BOOBS_ID, SKILL_ENEMY_EJACULATE_BOOBS_ID, SKILL_ENEMY_EJACULATE_RIGHTARM_ID, SKILL_ENEMY_EJACULATE_LEFTARM_ID, SKILL_ENEMY_EJACULATE_FACE_ID]);
	}
	
};
Game_Enemy.prototype.setGymOrgasmSkills_trainerRinkan = function() {
	this.setOrgasmSkills([SKILL_ENEMY_EJACULATE_LEFTLEG_ID,SKILL_ENEMY_EJACULATE_RIGHTLEG_ID,SKILL_ENEMY_EJACULATE_BUTT_ID,SKILL_ENEMY_EJACULATE_BOOBS_ID,SKILL_ENEMY_EJACULATE_FACE_ID]);
};

Game_Enemy.prototype.checkForOrgasm_trainerBattle = function() {
	let canOrgasm = true;
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	
	if(this.isStateAffected(STATE_ENEMY_CAME_THIS_TURN_ID)) {
		canOrgasm = false;
	}
	else if(this.isStateAffected(STATE_ENEMY_EDGING_CONTROL_ID)) {
		canOrgasm = false;
		if(this.pleasure >= this.orgasmPoint() * Karryn.willpowerEdgingControlEffect())
			canOrgasm = true;
	}
	
	if(!actor.trainerBattle_atSameLocationAsTarget(this)) {
		canOrgasm = false;
	}
	else if((actor.tachieBackB && actor.tachieBackB.includes('shorts')) || actor.didLastGetHitBySkillType(JUST_SKILLTYPE_TRAINER_PULLING_SHORTS)) {
		canOrgasm = false;
	}
		
	return canOrgasm;
};

Game_Enemy.prototype.trainerBattle_setTrainerFirstTouched = function() {
	if(!this._gym_trainerFirstTouched) {
		this._gym_trainerFirstTouched = true;
		$gameParty.increaseGymGoerSatisfaction(GYMGOER_SATISFACTION_GAIN_FROM_FIRST_TOUCH);
	}
};
Game_Enemy.prototype.trainerBattle_setTrainerUsedSexSkill = function(actor) {
	if(!this._gym_trainerUsedSexSkill) {
		this._gym_trainerUsedSexSkill = true;
		this.trainerBattle_setTrainerFirstTouched();
		this.addToSexSkilledDuringGymWorkoutCountRecord(actor);
	}
	this._gym_workout_trainerLastUsedSexSkillTime = $gameParty.trainerBattle_getCurrentTimeInSeconds();
};

Game_Enemy.prototype.trainerBattle_isValidTargetForMoveToBench = function(actor) {
	let validTarget = !actor.trainerBattle_atSameLocationAsTarget(this) && this.enemyType() !== ENEMYTYPE_GYM_OBS_TAG;
	if(validTarget) {
		this._selectionShowName = true;
		return true;
	}
	else {
		this._selectionShowName = false;
		return false;
	}
};
Game_Enemy.prototype.trainerBattle_isValidTargetForPullShorts = function(actor) {
	let validTarget = actor.trainerBattle_atSameLocationAsTarget(this);
	if(validTarget) {
		this._selectionShowName = true;
		return true;
	}
	else {
		this._selectionShowName = false;
		return false;
	}
};

// Enemy Action

Game_Enemy.prototype.trainerBattle_action_workout = function(formDecayRate) {
	let workoutInterval = GYMGOER_WORKOUT_INTERVAL_FAR;
	if(Karryn.trainerBattle_atSameLocationAsTarget(this)) {
		workoutInterval = GYMGOER_WORKOUT_INTERVAL_CLOSE;
		if(Karryn.isInSexPose())
			workoutInterval += GYMGOER_WORKOUT_INTERVAL_SEX
	}
	else if(this.hasSlowPrefix() || this.hasBadPrefix() || this.hasStarvingPrefix()) workoutInterval += 15;
	
	while((this.hp > this.mhp * GYMGOER_WORKOUT_STAMINA_CUTOFF) && (this._gym_workout_lastWorkoutTime + workoutInterval <= $gameParty.trainerBattle_getCurrentTimeInSeconds()) && this._gym_workout_remainingProgress > 0) {
		let formDecayedNum = 0;
		let formDecayChance = formDecayRate * 25;
		let maxForm = this.trainerBattle_maxForm();
		let minForm = this.trainerBattle_minForm();
		
		if(this.trainerBattle_isBlueBalled()) {
			formDecayChance += 40;
			formDecayedNum += 0.075;
		}
		else if(this.isErect) {
			formDecayChance += 25;
			formDecayedNum += 0.05;
		}
		else if(!this._gym_trainerGaveAdvice) {
			formDecayChance += 10;
		}
		
		if(this.isStateAffected(STATE_ENEMY_KISSED_ID)) {
			formDecayChance += 5;
			formDecayedNum += 0.03;
		}
		
		if(this._gym_shortsStripped) {
			formDecayChance += (formDecayRate + 10);
		}
		
		if(Math.randomInt(100) < formDecayChance) {
			let num = (maxForm - minForm) * 0.07;
			num = num - (Math.random() * num);
			formDecayedNum += num;
			num = Math.max(0, this._gym_workout_form - minForm) * 0.1;
			num = num + (Math.random() * num) - (Math.random() * num);
			formDecayedNum += num;
		}
		
		this._gym_workout_form = this._gym_workout_form - formDecayedNum;
		this._gym_workout_form = Math.min(this._gym_workout_form, maxForm);
		this._gym_workout_form = Math.max(this._gym_workout_form, minForm);
		
		let workoutProgress = Math.randomInt(4) + 12;
		if(this.isErect || this.isHorny) workoutProgress *= 0.8;
		if(this._gym_hereMainlyForSex) workoutProgress *= 0.33;
		let workoutCost = workoutProgress * 0.01 * this.mhp;
		if(this._enemyTempRecordTotalEjaculationCount > 0) workoutCost *= (1 + this._enemyTempRecordTotalEjaculationCount * 0.25);
		else if(this.trainerBattle_isBlueBalled()) workoutCost *= 1.33;
		else if(this.isHorny) workoutCost *= 1.25;
		
		this._hp = Math.max(this.mhp * GYMGOER_WORKOUT_STAMINA_CUTOFF, this.hp - workoutCost);
		this._gym_workout_remainingProgress -= (workoutProgress * this._gym_workout_form);

		
		this._gym_workout_lastWorkoutTime = $gameParty.trainerBattle_getCurrentTimeInSeconds();
		
		if(this._gym_shortsStripped && !Karryn.trainerBattle_atSameLocationAsTarget(this) && this.hasVirginPrefix() && !this._enemyRecordSexualPartner) {
			this._gym_shortsStripped = false;
		}
	}
};

Game_Enemy.prototype.trainerBattle_action_leavesGym = function(target) {
	let finishedWorkout = this._gym_workout_remainingProgress <= 0;
	let isBlueballed = this.trainerBattle_isBlueBalled();
	let wantedLevelChange = 0;
	
	if(target.trainerBattle_atSameLocationAsTarget(this)) {
		target.trainerBattle_setToStandby(true);
	}
	
	if(finishedWorkout) {
		BattleManager._logWindow.push('addText', TextManager.RemTrainerEnemyLeavesGymFinishedWorkout.format(this.displayName()));
		AudioManager.playSe({name:'+Footstep1', pan:0, pitch:70, volume:70});
		let rate = 1;
		if(!this._gym_trainerGaveAdvice) rate *= 0.5;
		$gameParty.increaseGymGoerSatisfaction(GYMGOER_SATISFACTION_GAIN_FROM_FINISHED_WORKOUT * rate);
		wantedLevelChange += GYMGOER_WANTED_LVL_COMPLETED_WORKOUT;
		if(Karryn.isUsingThisTitle(TITLE_ID_TRAINER_GOOD_ADVICE)) wantedLevelChange += 2;
		if(this._enemyTempRecordTotalEjaculationCount > 0) {
			$gameParty.increaseTrainerNotoriety(3);
		}
	}
	else {
		if(this._enemyTempRecordTotalEjaculationCount > 0) {
			BattleManager._logWindow.push('addText', TextManager.RemTrainerEnemyLeavesGymHappy.format(this.displayName()));
			AudioManager.playSe({name:'+Footstep1', pan:0, pitch:70, volume:70});
			$gameParty.increaseTrainerNotoriety(3);
		}
		else if(isBlueballed) {
			BattleManager._logWindow.push('addText', TextManager.RemTrainerEnemyLeavesGymBlueballed.format(this.displayName()));
			AudioManager.playSe({name:'+Footstep1', pan:0, pitch:70, volume:70});
			$gameParty.increaseGymGoerSatisfaction(GYMGOER_SATISFACTION_LOST_FROM_BLUEBALLS);
			$gameParty.increaseTrainerNotoriety(1);
			wantedLevelChange += GYMGOER_WANTED_LVL_BLUEBALLED;
			wantedLevelChange += GYMGOER_WANTED_LVL_FAILED_WORKOUT;
			if(Karryn.isUsingThisTitle(TITLE_ID_TRAINER_BLUE_BALLER)) wantedLevelChange -= 1;
			this.addToEnemyGymBlueBalledRecord();
			target._todayGymTrainerBlueBalledCount++;
			target._playthroughRecordGymTrainerBlueBalledCount++;
			target._tempRecordGymTrainerBlueBalledCount++;
			target._recordGymTrainerBlueBalledCount++;
			target._playthroughRecordGymTrainerBlueBalledMaxShiftCount = Math.max(target._playthroughRecordGymTrainerBlueBalledMaxShiftCount, target._tempRecordGymTrainerBlueBalledCount);
		}
		else {
			BattleManager._logWindow.push('addText', TextManager.RemTrainerEnemyLeavesGymFailedWorkout.format(this.displayName()));
			AudioManager.playSe({name:'+Footstep1', pan:0, pitch:70, volume:70});
			wantedLevelChange += GYMGOER_WANTED_LVL_FAILED_WORKOUT;
		}
	}
	
	if(wantedLevelChange != 0 && this.isWanted) {
		let wantedLvl = $gameParty.getWantedEnemyById(this.getWantedId())._wantedLvl;
		$gameParty.getWantedEnemyById(this.getWantedId())._wantedLvl = Math.max(1, Math.round(wantedLvl + wantedLevelChange));
	}
	
	if(this._gym_shortsWasStrippedOnceThisBattle && !this._gym_trainerFirstTouched && !this._gym_trainerUsedSexSkill) {
		target._playthroughRecordGymTrainerOnlyPulledOffShortsCount++;
	}
	
	$gameTroop._gymBenches[this._gym_usingBenchId] = false;
	this.hide();
	this.clearActions();
    this.clearStates();
};


/////////////
// Trainer Battle AI
///////////

Game_Enemy.prototype.enemyBattleAITrainerWork = function(target) {
	if(this.enemyType() == ENEMYTYPE_GYM_OBS_TAG) return;
	
	if(this.hasNoMoreEjaculationStockOrEnergy()) {
		this.trainerBattle_action_leavesGym(target);
		return;
	}
	
	let trainerIsFuckingAround = target.trainerBattle_isInSexPose();
	
	//Karryn is here
	if(target.trainerBattle_atSameLocationAsTarget(this)) {
		if(trainerIsFuckingAround) {
			this.trainerBattle_action_workout(target, 1);
		}
		else {
			if(this.hp <= this.mhp * GYMGOER_WORKOUT_STAMINA_CUTOFF || this._gym_workout_remainingProgress <= 0) {
				this.trainerBattle_action_leavesGym(target);
				return;
			}
			
			this.trainerBattle_action_workout(target, 0.5);
		}
	}
	//Karryn is elsewhere
	else {
		if(this.hp <= this.mhp * GYMGOER_WORKOUT_STAMINA_CUTOFF || this._gym_workout_remainingProgress <= 0) {
			this.trainerBattle_action_leavesGym(target);
			return;
		}
			
		if(trainerIsFuckingAround) {
			this.trainerBattle_action_workout(target, 3);
		}
		else {
			this.trainerBattle_action_workout(target, 2);
		}
		
	}
	
	
};