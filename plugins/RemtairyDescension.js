var Remtairy = Remtairy || {};
Remtairy.Descension = Remtairy.Descension || {};

//=============================================================================
 /*:
 * @plugindesc Descension
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================


const WARDEN_QUEST_ITEM_SET_STARTER = [ BRACELET_ROPE_ID, BRACELET_STRING_ID, BRACELET_BEADS_ID, BRACELET_RED_ID, RING_MIDI_ID, EARRING_CACTUS ];
const WARDEN_QUEST_ITEM_SET_LEVEL_1 = [ BRACELET_PURPLE_ID, BRACELET_GOLD_ID, RING_DOUBLE_ID, RING_FINGERCLAW_ID, RING_SCORPION_ID, NECKLACE_CHAIN_ID, NECKLACE_BALL_ID, NECKLACE_DOGTAG_ID, EARRING_SUN_ID, BRACELET_CITRINE_ID, RING_FAIRY ];
const WARDEN_QUEST_ITEM_SET_LEVEL_2 = [ EARRING_TEAR_ID, EARRING_LIONESS_ID, EARRING_CHEETAH_ID, NECKLACE_EMERALD_ID, MISC_PHONESTRAP_ID, MISC_SCARF_ID, MISC_RECETTE ];
const WARDEN_QUEST_ITEM_SET_LEVEL_3 = [ RING_PEARL_ID, RING_CHAINHAND_ID, BRACELET_SILVER_ID, EARRING_HEART_ID, EARRING_MOON_ID, EARRING_SKULL_ID, MISC_LATEXSTOCKING_ID, MISC_CALFSKINBELT_ID ];
const WARDEN_QUEST_ITEM_SET_LEVEL_4 = [ NECKLACE_RUBY_ID, NECKLACE_DIAMOND_ID, BRACELET_PALLADIUM_ID, RING_GOLDGLASS_ID ];
const WARDEN_QUEST_ITEM_SET_LEVEL_5 = [ RING_GEMSTONE_ID, NECKLACE_SAPPHIRE_ID, RING_GEMSTONE_ID, NECKLACE_SAPPHIRE_ID, BRACELET_ROPE_ID, BRACELET_STRING_ID, BRACELET_BEADS_ID, BRACELET_RED_ID, RING_MIDI_ID, EARRING_CACTUS ];
const WARDEN_QUEST_ITEM_SET_EXOTIC = [ MISC_NAILPOLISH_ID, MISC_EYELINER_ID, MISC_LIPGLOSS_ID, BRACELET_DIAMOND_CUFF_ID, RING_PURITY_ID, EARRING_PINK_ID, NECKLACE_HERO_ID, BRACELET_CITRINE_ID, NECKLACE_CATS_EYE_ID, EARRING_CACTUS, RING_FAIRY, MISC_RECETTE, MISC_RIBBON ];

//Game Actor

Game_Actor.prototype.setupDescensionStatGain = function() {
	if(this.hasEdict(EDICT_PRISON_EMBLEM_SCENARIO) || this.hasEdict(EDICT_WARDEN_QUEST_EFFECTS)) {
		this._descensionStatArray = [];
		let statArray = [ PARAM_MAXSTAMINA_ID, PARAM_MAXENERGY_ID, PARAM_STRENGTH_ID, PARAM_ENDURANCE_ID, PARAM_DEXTERITY_ID, PARAM_MIND_ID, PARAM_AGILITY_ID, PARAM_CHARM_ID ];
		let amountArray = [ 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5];
		let numOfStats = amountArray[Math.randomInt(amountArray.length)];
		for(let i = 0; i < numOfStats; i++) {
			let ranNum = Math.randomInt(statArray.length);
			this._descensionStatArray.push(statArray[ranNum]);
			statArray.splice(ranNum, 1)
		}
		
		this._descensionStatArray.push(this._descensionTodaysStat);
	}
};
Game_Actor.prototype.setupDescensionTodaysStatGain = function() {
	if(this.hasEdict(EDICT_PRISON_EMBLEM_SCENARIO) || this.hasEdict(EDICT_WARDEN_QUEST_EFFECTS)) {
		let statArray = [ PARAM_STRENGTH_ID, PARAM_DEXTERITY_ID, PARAM_AGILITY_ID, PARAM_CHARM_ID ];
		this._descensionTodaysStat = statArray[Math.randomInt(statArray.length)];
	}
};

Game_Actor.prototype.gainDescensionRandomStatsExp = function(enemyLvl, exp1, exp2, exp3) {
	if(this.hasEdict(EDICT_PRISON_EMBLEM_SCENARIO) || this.hasEdict(EDICT_WARDEN_QUEST_EFFECTS)) {
		let statArray = this._descensionStatArray.slice(0);
		const statOneID = statArray.splice(Math.randomInt(statArray.length), 1)[0];
		const statTwoID = statArray.splice(Math.randomInt(statArray.length), 1)[0];
		const statThreeID = statArray.splice(Math.randomInt(statArray.length), 1)[0];
		
		if(exp1 > 0) this.gainDescensionStatExp(enemyLvl, exp1, statOneID);
		if(exp2 > 0) this.gainDescensionStatExp(enemyLvl, exp2, statTwoID);
		if(exp3 > 0) this.gainDescensionStatExp(enemyLvl, exp3, statThreeID);
	}
};

Game_Actor.prototype.gainDescensionStatExp = function(enemyLvl, exp, statId) {
	switch(statId) {
		case PARAM_MAXSTAMINA_ID:
			this.gainStaminaExp(exp, enemyLvl);
		break;
		case PARAM_MAXENERGY_ID:
			this.gainEnergyExp(exp, enemyLvl);
		break;
		case PARAM_STRENGTH_ID:
			this.gainStrengthExp(exp, enemyLvl);
		break;
		case PARAM_ENDURANCE_ID:
			this.gainEnduranceExp(exp, enemyLvl);
		break;
		case PARAM_DEXTERITY_ID:
			this.gainDexterityExp(exp, enemyLvl);
		break;
		case PARAM_MIND_ID:
			this.gainMindExp(exp, enemyLvl);
		break;
		case PARAM_AGILITY_ID:
			this.gainAgilityExp(exp, enemyLvl);
		break;
		case PARAM_CHARM_ID:
			this.gainCharmExp(exp, enemyLvl);
		break;
	}
};

Game_Actor.prototype.descensionEarringCactusEffect = function(enemy) {
	const enemyLvl = enemy.enemyExperienceLvl();
	let expMultipler = 1;
	
	if(enemy.hasBadPrefix() || enemy.hasStarvingPrefix() || enemy.hasDrunkPrefix()) 
		expMultipler -= 0.5;
	else if(enemy.hasHungryPrefix() || enemy.hasSlowPrefix() || enemy.hasIneptPrefix() || enemy.hasWeakPrefix() || enemy.hasSensitivePrefix()) 
		expMultipler -= 0.33;
	else if(enemy.hasGoodPrefix() || enemy.hasVirginPrefix() || enemy.hasBigPrefix()) 
		expMultipler += 0.5;
	else if(enemy.hasStrongPrefix() || enemy.hasAgilePrefix() || enemy.hasDexterousPrefix() || enemy.hasEnduringPrefix() || enemy.hasMasoPrefix() || enemy.hasSadoPrefix()) 
		expMultipler += 0.33;
	else if(enemy.hasNeutralPrefix() || enemy.hasTalkPrefix() || enemy.hasSightPrefix() || enemy.hasHornyPrefix() || enemy.hasAngryPrefix()) 
		expMultipler += 0.15;
	else if(enemy.hasElitePrefix())
		expMultipler += 1;
	else if(enemy.hasMetalPrefix()) 
		expMultipler += 2;
	
	if(enemy.isBossType) {
		expMultipler *= 2; 
	}
	else if(enemy.isWanted) {
		expMultipler *= 1.25; 
	}
	
	let baseExp = 42;
		
	if(enemyLvl > 40) baseExp += 30 + enemyLvl * 0.33;
	else if(enemyLvl > 20) baseExp += 20 + enemyLvl * 0.5;
	else baseExp += enemyLvl * 1;
	
	this.gainDescensionRandomStatsExp(enemyLvl, baseExp * expMultipler, 0, 0);
};

Game_Actor.prototype.descensionParamRate = function(id) {
	let rate = 1;
	
	if(this.isUsingThisTitle(TITLE_ID_DESCENSION_QUEST_NORMAL)) {
		let cheatCount = 0;
		
		if(ConfigManager.cheatEnemyDoublePhysicalDamage) cheatCount++;
		if(ConfigManager.cheatEnemyTriplePhysicalDamage) cheatCount++;
		if(ConfigManager.cheatEnemyDoubleSexualDamage) cheatCount++;
		if(ConfigManager.cheatEnemyTripleSexualDamage) cheatCount++;
		if(ConfigManager.cheatEnemyDoubleOrgasmPoint) cheatCount++;
		if(ConfigManager.cheatEnemyAlwaysAct) cheatCount++;
		if(ConfigManager.cheatActorDoublePassiveGain) cheatCount++;
		if(ConfigManager.cheatActorHalfStaminaRegen) cheatCount++;
		if(ConfigManager.cheatActorThirdStaminaRegen) cheatCount++;
		if(ConfigManager.cheatActorHalfExpRate) cheatCount++;
		if(ConfigManager.cheatActorNoEvasion) cheatCount++;
		if(ConfigManager.cheatLessControlFive) cheatCount++;
		if(ConfigManager.cheatLessControlTen) cheatCount++;
		
		if(ConfigManager.cheatWaitressMemory && this.hasEdict(EDICT_BAR_WAITRESS_OUTFIT_I)) cheatCount++;
		
		if(ConfigManager.cheatInstantRiotsOne && (Prison.prisonLevelOneIsSubjugated() || Prison.prisonLevelOneIsRioting())) cheatCount++;
		if(ConfigManager.cheatInstantRiotsTwo && (Prison.prisonLevelTwoIsSubjugated() || Prison.prisonLevelTwoIsRioting())) cheatCount++;
		if(ConfigManager.cheatInstantRiotsThree && (Prison.prisonLevelThreeIsSubjugated() || Prison.prisonLevelThreeIsRioting())) cheatCount++;
		if(ConfigManager.cheatInstantRiotsFour && (Prison.prisonLevelFourIsSubjugated() || Prison.prisonLevelFourIsRioting())) cheatCount++;
		
		rate *= 1 + cheatCount * 0.02;
	}
	
	return rate;
};

Game_Actor.prototype.descensionXParamPlus = function(paramId) {
	let bonus = 0;

	if(this.hasEdict(EDICT_PRISON_EMBLEM_EFFECTS)) {
		if(paramId === XPARAM_STA_REGEN_ID) {
			const sadismLvl = this.sadismLvl();
			if(sadismLvl < 4)
				bonus += sadismLvl * 0.015;
			else
				bonus += 0.045 + (sadismLvl * 0.01);
		}
	}

	return bonus;
};

Game_Actor.prototype.descensionSParamRate = function(id) {
	let rate = 1;

	if(id === SPARAM_EXR_ID) {
		let toyGrowthRate = 1;
		let failedStateGrowthRate = 1;
	
		if(this.hasEdict(EDICT_WARDEN_QUEST_EFFECTS)) {
			let karrynCharm = this.inBattleCharm;
			let charmGrowth = 0;
			
			if(karrynCharm < VAR_ACCESSORY_CHARM_REQ_3) {
				charmGrowth += karrynCharm * 0.006;
			}
			else {
				charmGrowth += (karrynCharm * 0.003 + 0.16);
			}
		
			if(this.isWearingClitToy()) toyGrowthRate += charmGrowth;
			if(this.isWearingPussyToy()) toyGrowthRate += charmGrowth;
			if(this.isWearingAnalToy()) toyGrowthRate += charmGrowth;
		}
		
		if(this.hasEdict(EDICT_FAILED_STATE_EFFECTS)) {
			failedStateGrowthRate += (Prison.corruption * 0.025)
		}
	
		rate *= toyGrowthRate * failedStateGrowthRate;
		
		if(this.isUsingThisTitle(TITLE_ID_DESCENSION_QUEST_NORMAL)) {
			rate *= 0.9;
		}
	}

	return rate;
};

Game_Actor.prototype.showDescensionEdicts = function() {
	return DLC_PCUP && 
		( this.isInDescensionRun() || 
		$gameParty.allowDescensionCarryoverBuying(EDICT_BIG_BROTHER_EFFECTS) || $gameParty.allowDescensionCarryoverBuying(EDICT_FAILED_STATE_EFFECTS) || $gameParty.allowDescensionCarryoverBuying(EDICT_WARDEN_QUEST_EFFECTS) || $gameParty.allowDescensionCarryoverBuying(EDICT_PRISON_EMBLEM_EFFECTS) || $gameParty.allowDescensionCarryoverBuying(EDICT_DIFFERENT_MINDSET_EFFECTS) );
};


Game_Actor.prototype.isInDescensionRun = function() {
	return $gameSwitches.value(SWITCH_DESCENSION_RUN);
};
Game_Actor.prototype.isInCustomDescensionRun = function() {
	return $gameSwitches.value(SWITCH_CUSTOM_DESCENSION_RUN);
};

Game_Actor.prototype.setupDescensionFlags = function() {
	if(!this._flagDescensionSetupCompleted) {
		this._flagDescensionBeatScenarioBrotherOnWardenOrHigher = false;
		this._flagDescensionBeatScenarioFailedOnWardenOrHigher = false;
		this._flagDescensionBeatScenarioQuestOnWardenOrHigher = false;
		this._flagDescensionBeatScenarioEmblemOnWardenOrHigher = false;
		this._flagDescensionBeatScenarioMindsetOnWardenOrHigher = false;
		this._flagDescensionBeatD2OnPrisoner = false;
		this._flagDescensionBeatD3OnPrisoner = false;
		this._flagDescensionBeatD4OnPrisoner = false;
		this._flagDescensionBeatD5OnPrisoner = false;
		this._flagDescensionBeatScenarioBrotherOnPrisonerD5 = false;
		this._flagDescensionBeatScenarioFailedOnPrisonerD5 = false;
		this._flagDescensionBeatScenarioQuestOnPrisonerD5 = false;
		this._flagDescensionBeatScenarioEmblemOnPrisonerD5 = false;
		this._flagDescensionBeatScenarioMindsetOnPrisonerD5 = false;
		this._flagDescensionBeatScenarioQuestOnPrisonerD5HappyEnd = false;
		
		this._flagDescensionSetupCompleted = true;
	}
};

Game_Actor.prototype.descensionWardenQuestToysPreSideJobs = function() {
	if(this.hasEdict(EDICT_WARDEN_QUEST_EFFECTS)) {
		if(this.isWearingClitToy_PinkRotor())
			this._wardenQuestBeforeSideJobWoreClitToyPinkRotor = true;
		else
			this._wardenQuestBeforeSideJobWoreClitToyPinkRotor = false;
		
		if(this.isWearingPussyToy_PenisDildo())
			this._wardenQuestBeforeSideJobWorePussyToyPenisDildo = true;
		else
			this._wardenQuestBeforeSideJobWorePussyToyPenisDildo = false;
		
		if(this.isWearingAnalToy_AnalBeads())
			this._wardenQuestBeforeSideJobWoreAnalToyAnalBeads = true;
		else
			this._wardenQuestBeforeSideJobWoreAnalToyAnalBeads = false;
	}
	else {
		this._wardenQuestBeforeSideJobWoreClitToyPinkRotor = false;
		this._wardenQuestBeforeSideJobWorePussyToyPenisDildo = false;
		this._wardenQuestBeforeSideJobWoreAnalToyAnalBeads = false;
	}
};
Game_Actor.prototype.descensionWardenQuestToysPostSideJobs = function() {
	if(this.hasEdict(EDICT_WARDEN_QUEST_EFFECTS)) {
		if(this._wardenQuestBeforeSideJobWoreClitToyPinkRotor)
			this.setClitToy_PinkRotor(false);
		if(this._wardenQuestBeforeSideJobWorePussyToyPenisDildo)
			this.setPussyToy_PenisDildo(false);
		if(this._wardenQuestBeforeSideJobWoreAnalToyAnalBeads)
			this.setAnalToy_AnalBeads(false);
	}
	
	this._wardenQuestBeforeSideJobWoreClitToyPinkRotor = false;
	this._wardenQuestBeforeSideJobWorePussyToyPenisDildo = false;
	this._wardenQuestBeforeSideJobWoreAnalToyAnalBeads = false;
};

Game_Actor.prototype.descensionWardenQuestToysPreNextDay = function() {
	if(this.hasEdict(EDICT_WARDEN_QUEST_EFFECTS)) {
		if(this.isWearingClitToy_PinkRotor())
			this._wardenQuestBeforeNextDayWoreClitToyPinkRotor = true;
		else
			this._wardenQuestBeforeNextDayWoreClitToyPinkRotor = false;
		
		if(this.isWearingPussyToy_PenisDildo())
			this._wardenQuestBeforeNextDayWorePussyToyPenisDildo = true;
		else
			this._wardenQuestBeforeNextDayWorePussyToyPenisDildo = false;
		
		if(this.isWearingAnalToy_AnalBeads())
			this._wardenQuestBeforeNextDayWoreAnalToyAnalBeads = true;
		else
			this._wardenQuestBeforeNextDayWoreAnalToyAnalBeads = false;
	}
	else {
		this._wardenQuestBeforeNextDayWoreClitToyPinkRotor = false;
		this._wardenQuestBeforeNextDayWorePussyToyPenisDildo = false;
		this._wardenQuestBeforeNextDayWoreAnalToyAnalBeads = false;
	}
};
Game_Actor.prototype.descensionWardenQuestToysPostNextDay = function() {
	if(this.hasEdict(EDICT_WARDEN_QUEST_EFFECTS)) {
		if(this._wardenQuestBeforeNextDayWoreClitToyPinkRotor) {
			let chance = this.reactionScore_clitToyPassive() * 0.75;
			
			if(Math.randomInt(100) < chance)
				this.setClitToy_PinkRotor(false);
		}
		if(this._wardenQuestBeforeNextDayWorePussyToyPenisDildo) {
			let chance = this.reactionScore_pussyToyPassive() * 0.75;
			
			if(Math.randomInt(100) < chance) {
				this.setPussyToy_PenisDildo(false);
				this.takeOffPanties();
			}
		}
		if(this._wardenQuestBeforeNextDayWoreAnalToyAnalBeads) {
			let chance = this.reactionScore_analToyPassive() * 0.75;
			
			if(Math.randomInt(100) < chance)
				this.setAnalToy_AnalBeads(false);
		}
	}
	
	this._wardenQuestBeforeNextDayWoreClitToyPinkRotor = false;
	this._wardenQuestBeforeNextDayWorePussyToyPenisDildo = false;
	this._wardenQuestBeforeNextDayWoreAnalToyAnalBeads = false;
};

//Game Enemy
Game_Enemy.prototype.gold = function() {
	if($gameParty.isInGuardBattle()) {
		return this.enemy().gold;
	}
	else if($gameParty.canGainDescensionEnemyGold()) {
		return this.calculateWardenQuestGold();
	}
	else return 0;
};

Game_Enemy.prototype.calculateWardenQuestGold = function() {
	let baseGold = 0;
	
	if(this.isBossType) {
		if(this.isYasu) 
			baseGold = 6;
		else if(this.isTonkin) 
			baseGold = 625;
		else if(this.isAron) 
			baseGold = 1569;
		else if(this.isNoinim) 
			baseGold = 300;
		else if(this.isGobriel)
			baseGold = 5555;
		
		return baseGold;
	}
	else {
		const goldMultipler = this.calculateWardenQuestGoldMultipler();
		
		baseGold = 30
		
		const enemyLvl = this.enemyExperienceLvl()
		if(enemyLvl > 30) baseGold += 27 + enemyLvl * 0.2;
		else if(enemyLvl > 10) baseGold += 15 + enemyLvl * 0.6;
		else baseGold += enemyLvl * 1.5;
		
		const multipliedGold = baseGold * goldMultipler;
		let randomGold = multipliedGold + (Math.random() * 0.2 * multipliedGold) - (Math.random() * 0.2 * multipliedGold);
		

		return Math.max(0, randomGold);
	}
};

Game_Enemy.prototype.itemDropChance = function() {
	let baseChance = 10;

	if(this.isBossType) {
		if(this.isYasu) 
			baseChance = 0;
		else if(this.isTonkin) 
			baseChance = 100;
		else if(this.isAron) 
			baseChance = 100;
		else if(this.isNoinim) 
			baseChance = 40;
		else if(this.isGobriel)
			baseChance = 555;
		
		return baseChance;
	}
	else {
		if(this.isGoblinType) { 
			baseChance = 4;
		}
		else if(this.isThugType) {
			baseChance = 14;
		}
		else if(this.isNerdType) { 
			baseChance = 8;
		}
		else if(this.isRogueType) { 
			baseChance = 5;
			
			if(Karryn.hasEdict(EDICT_REPAIR_BAR)) baseChance += 2;
			if(Karryn.hasEdict(EDICT_REPAIR_KITCHEN_AND_MESS_HALL)) baseChance += 2;
			if(Karryn.hasEdict(EDICT_BUILD_STRIP_CLUB)) baseChance += 2;
			if(Karryn.hasEdict(EDICT_REPAIR_STORE)) baseChance += 2;
		}
		else if(this.isOrcType) { 
			baseChance = 15;
		}
		else if(this.isHomelessType) { 
			baseChance = 2;
		}
		else if(this.isSlimeType) {
			baseChance = 25;
		}
		else if(this.isWerewolfType) {
			baseChance = 15;
		}
		else if(this.isYetiType) {
			baseChance = 20;
		}
		else if(this.isGuardType) {
			baseChance = 15;
			baseChance -= Prison.guardAggression * 0.69;
		}
		
		let multi = 1;
		
		if(this.hasStarvingPrefix() || this.hasBadPrefix() || this.hasIneptPrefix()) multi -= 0.69;
		else if(this.hasWeakPrefix() || this.hasHungryPrefix() || this.hasSlowPrefix()) multi -= 0.33;
		else if(this.hasGoodPrefix() || this.hasDexterousPrefix() || this.hasVirginPrefix() || this.hasDrunkPrefix()) multi += 0.5;
		else if(this.hasStrongPrefix() || this.hasAgilePrefix() || this.hasEnduringPrefix() || this.hasSadoPrefix() || this.hasMasoPrefix()) multi += 0.33;
		else if(this.hasNeutralPrefix() || this.hasTalkPrefix() || this.hasSightPrefix()) multi += 0.2;
		else if(this.hasElitePrefix() || this.hasBigPrefix()) {
			multi += 2; 
		}
		else if(this.hasMetalPrefix()) { 
			multi -= 0.8;
		}
		
		if(this.isWanted) {
			multi *= 1.5; 
		}
		
	
		return Math.max(1, baseChance * multi);
	}
};

Game_Enemy.prototype.calculateWardenQuestGoldMultipler = function() {
	let typeMultipler = 1;
	let costMultipler = 1;
	let prefixMultipler = 1;
	let wantedMultipler = 1;
	
	//enemy type, prefix
	if(this.isGoblinType) { 
		if(Karryn.hasEdict(EDICT_ANTI_GOBLIN_SQUAD))
			typeMultipler += 0.1;
		else
			typeMultipler += 0.4;
	}
	else if(this.isThugType) {
		if(!Karryn.hasEdict(EDICT_REPAIR_BAR)) {
			if(Karryn.hasEdict(EDICT_NO_THUG_LABOR))
				typeMultipler -= 0.4;
			else
				typeMultipler -= 0.2;
		}
	}
	else if(this.isNerdType) { 
		if(Karryn.hasEdict(EDICT_PAY_NERD_BLACKMAIL))
			typeMultipler += 0.5;
		else if(Karryn.hasEdict(EDICT_THREATEN_THE_NERDS))
			typeMultipler -= 0.2;
		else
			typeMultipler += 0.3;
		
		if(Karryn.hasEdict(EDICT_STOCK_WITH_ADULT_BOOKS) && !Karryn.hasEdict(EDICT_ALLOW_BORROWING_ADULT_BOOKS))
			typeMultipler -= 0.2;
	}
	else if(this.isRogueType) { 
		if(Karryn.hasEdict(EDICT_FORCE_ROGUES_INTO_LABOR))
			typeMultipler -= 0.5;
		else
			typeMultipler -= 0.3;
		
		if(Karryn.hasEdict(EDICT_REPAIR_BAR)) typeMultipler += 0.15;
		if(Karryn.hasEdict(EDICT_REPAIR_KITCHEN_AND_MESS_HALL)) typeMultipler += 0.15;
		if(Karryn.hasEdict(EDICT_BUILD_STRIP_CLUB)) typeMultipler += 0.15;
		if(Karryn.hasEdict(EDICT_REPAIR_STORE)) typeMultipler += 0.15;
	}
	else if(this.isLizardmanType) { 
		if(Karryn.hasEdict(EDICT_LIZARDMEN_FREE_DRINKS))
			typeMultipler -= 0.2;
		else
			typeMultipler -= 0.3;
	}
	else if(this.isOrcType) { 
		if(Karryn.hasEdict(EDICT_ACCESSIBILITY_FOR_ORCS))
			typeMultipler += 0.2;
	}
	else if(this.isHomelessType) { 
		typeMultipler -= 0.8;
	}
	else if(this.isPrisonerType) {
		typeMultipler -= 0.33;
	}
	else if(this.isMonstrousType) {
		typeMultipler -= 0.5;
	}
	else if(this.isGuardType) {
		typeMultipler -= Prison.guardAggression * 0.02;
	}
	
	if(this.isPrisonGuard) {
		if(Karryn.hasEdict(EDICT_GUARD_PAY_FOR_FOOD)) costMultipler -= 0.2;
		if(Karryn.hasEdict(EDICT_GUARDS_NEED_TO_PAY_IN_STORE)) costMultipler -= 0.1;
		if(Karryn.hasEdict(EDICT_SELF_PAID_EQUIPMENT)) costMultipler -= 0.1;
		if(Karryn.hasEdict(EDICT_SELF_MAINENANCE)) costMultipler -= 0.1;
		if(Karryn.hasEdict(EDICT_YOU_BREAK_YOU_PAY)) costMultipler -= 0.1;
	}
	else if(this.isInmate) {
		if(Karryn.hasEdict(EDICT_PAY_FOR_BETTER_FOOD)) costMultipler -= 0.2;
		if(Karryn.hasEdict(EDICT_CHARGE_INMATES_FOR_VISITATION)) costMultipler -= 0.2;
	}
	
	if(this.hasWeakPrefix() || this.hasStarvingPrefix() || this.hasBadPrefix() || this.hasBigPrefix()) prefixMultipler -= 0.33;
	else if(this.hasIneptPrefix()) prefixMultipler -= 0.5;
	else if(this.hasDrunkPrefix() || this.hasHungryPrefix() || this.hasSlowPrefix()) prefixMultipler -= 0.15;
	else if(this.hasGoodPrefix() || this.hasDexterousPrefix() || this.hasVirginPrefix()) prefixMultipler += 0.5;
	else if(this.hasStrongPrefix() || this.hasAgilePrefix()) prefixMultipler += 0.33;
	else if(this.hasElitePrefix()) {
		prefixMultipler += 1;
		costMultipler = Math.min(1, costMultipler * 1.33);
	}
	else if(this.hasMetalPrefix()) { 
		prefixMultipler += 3; 
		costMultipler = Math.min(1, costMultipler * 1.5);
	}
	
	if(this.isWanted) {
		wantedMultipler += 0.25; 
	}
	
	return Math.max(0.05, typeMultipler * costMultipler * prefixMultipler * wantedMultipler);
};

Game_Enemy.prototype.preChargedEffect = function() {
	if(Karryn.isInDefeatedPose() || Karryn.isInJobPose() || Karryn.isInMasturbationCouchPose()) return;
	
	if(Karryn.hasEdict(EDICT_PRISON_EMBLEM_SCENARIO)) {
		let precharge = false;
		if(this.isAngry || this.hasDrunkPrefix()) precharge = Math.random() < 0.69;
		else if(this.hasElitePrefix()) precharge = Math.random() < 0.42;
		else if(this.hasHungryPrefix() || this.hasStarvingPrefix() || this.hasBadPrefix()) precharge = Math.random() < 0.13;
		else precharge = Math.random() < 0.25;
		
		if(precharge && !this.isPrisonerType && !this.isNerdType && !this.isHomelessType) {
			if(this.isLizardmanType) {
				if(Karryn.hasEdict(EDICT_THE_LIZARDMAN_PROBLEM))
					this.addState(STATE_CHARGE_ID);
			}
			else
				this.addState(STATE_CHARGE_ID);
		}
	}
};


Game_Enemy.prototype.enemyLvl_descension = function() {
	let lvl = 0;

	if(Karryn.isUsingThisTitle(TITLE_ID_DESCENSION_FAILED_NORMAL))
		lvl += 5;

	return lvl;
};

//Game Troop
Game_Troop.prototype.goldTotal = function() {
	let goldReward = $gameParty._extraGoldReward;
	let goldRate = $gameParty.battleGoldRate();
	if(goldRate <= 0) return goldReward;
    return this.deadMembers().reduce(function(r, enemy) {
        return r + enemy.gold();
    }, 0) * goldRate + goldReward;
};

Game_Troop.prototype.itemChanceTotal = function() {
	let battleRate = $gameParty.battleFlagItemDropRate();
	let itemDropRate = $gameParty.descensionItemDropRate();
	if(battleRate <= 0 || itemDropRate <= 0) return 0;
    return this.deadMembers().reduce(function(r, enemy) {
        return r + enemy.itemDropChance();
    }, 0) * battleRate * itemDropRate;
};

//Game Party
Game_Party.prototype.battleGoldRate = function() {
	if($gameParty.isInGuardBattle()) return 1;
	else if(!$gameParty.canGainDescensionEnemyGold()) return 0;
	
	let battleRate = 0;
	let toyRate = 1;
	let goldRate = 0;
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	
	if($gameParty._halfGoldRewardsFlag) battleRate = 0.5;
	else if($gameParty._fullGoldRewardsFlag) battleRate = 1;
	
	if($gameParty.isRiotBattle()) {
		battleRate *= 0.5;
	}
	
	if(Karryn.hasEdict(EDICT_WARDEN_QUEST_SCENARIO)) {
		if(actor.isWearingClitToy()) toyRate += 0.33;
		if(actor.isWearingPussyToy()) toyRate += 0.33;
		if(actor.isWearingAnalToy()) toyRate += 0.33;
	}
	
	if(Karryn.hasEdict(EDICT_WARDEN_QUEST_SCENARIO)) {
		goldRate = 1;
	}
	
	if(Karryn.isEquippingThisAccessory(BRACELET_CITRINE_ID)) {
		if(Karryn.isUsingThisTitle(TITLE_ID_ASPIRING_HERO))
			goldRate += 0.125 + (Prison.corruption * 0.005);
		else 
			goldRate += 0.25 + (Prison.corruption * 0.01);
	}
	
	
	if(!$gameParty.isInGuardBattle() && (goldRate <= 0 || battleRate <= 0)) return 0;
	
	let totalGoldRate = battleRate * toyRate * goldRate;
	
    return totalGoldRate;
};

Game_Party.prototype.canGainDescensionEnemyGold = function() {
	return Karryn.hasEdict(EDICT_WARDEN_QUEST_SCENARIO) || Karryn.isEquippingThisAccessory(BRACELET_CITRINE_ID);
};

Game_Party.prototype.battleFlagItemDropRate = function() {
	let battleRate = 0;

	if($gameParty._halfItemDropRateFlag) battleRate = 0.5;
	else if($gameParty._doubleItemDropRateFlag) battleRate = 2;
	else if($gameParty._fullItemDropRateFlag) battleRate = 1;
	
	return battleRate;
};

Game_Party.prototype.descensionItemDropRate = function() {
	let itemDropRate = 0;
	let toyRate = 1;
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	
	if(Karryn.hasEdict(EDICT_WARDEN_QUEST_SCENARIO)) {
		itemDropRate = 1;
	}
	
	if(Karryn.isEquippingThisAccessory(NECKLACE_CATS_EYE_ID)) {
		if(actor.isUsingThisTitle(TITLE_ID_ASPIRING_HERO))
			itemDropRate += Math.max(0.05, 0.35 - (Prison.corruption * 0.02));
		else
			itemDropRate += Math.max(0.1, 0.69 - (Prison.corruption * 0.02));
	}
	
	
	if(Karryn.hasEdict(EDICT_WARDEN_QUEST_SCENARIO)) {
		if(actor.isWearingClitToy()) toyRate += 0.5;
		if(actor.isWearingPussyToy()) toyRate += 0.5;
		if(actor.isWearingAnalToy()) toyRate += 0.5;
	}
	
	return itemDropRate * toyRate;
};


Game_Party.prototype.descensionWardenQuestNormalMoneyRate = function() {
	let moneyRate = 1;
	if(Karryn.hasEdict(EDICT_WARDEN_QUEST_SCENARIO)) {
		moneyRate = 0.125;
	}
	return moneyRate;
};
Game_Party.prototype.descensionWardenQuestExpenseRate = function() {
	let moneyRate = 1;
	if(Karryn.hasEdict(EDICT_WARDEN_QUEST_SCENARIO)) {
		moneyRate = 0.143;
	}
	return moneyRate;
};



Game_Party.prototype.getDescensionFailedStateEnemyId = function(includeSlime, includeWerewolf, includeYeti) {
	let enemyIdArray = [88,89,112,113,128,129,148,149,188,189,201,202,217,218];
	let mapId = $gameMap._mapId;
	
	if(mapId === MAP_ID_VISITOR_CENTER_BROKEN || mapId === MAP_ID_VISITOR_ROOM_BROKEN) {
		includeSlime = false;
		includeWerewolf = false;
		includeYeti = false;
	}
	else if(mapId === MAP_ID_STORE_BROKEN) {
		includeWerewolf = false;
		includeYeti = false;
	}
	
	if(includeSlime) {
		if(!Prison.prisonLevelOneIsAnarchy() && Math.random() < 0.25) enemyIdArray.push(133,134,135,136);
		else enemyIdArray.push(135,136);
	}
	if(includeWerewolf)  {
		if(!Prison.prisonLevelOneIsAnarchy() && Math.random() < 0.25) enemyIdArray.push(223,224,225,226);
		else enemyIdArray.push(225,226);
	}
	if(includeYeti)  {
		if(!Prison.prisonLevelOneIsAnarchy() && Math.random() < 0.25) enemyIdArray.push(231,232,233,234);
		else enemyIdArray.push(233,234);
	}
	let enemyId = enemyIdArray[Math.randomInt(enemyIdArray.length)];
	return enemyId;
};


Game_Party.prototype.handleDescensionDifficultyDoors = function() {
	const easyDoor = 93;
	const normalDoor = 34;
	const hardDoor = 35;
	
	$gameSelfSwitches.setValue([MAP_ID_MODE_SELECT, easyDoor, "A"], false);
	$gameSelfSwitches.setValue([MAP_ID_MODE_SELECT, normalDoor, "A"], false);
	$gameSelfSwitches.setValue([MAP_ID_MODE_SELECT, hardDoor, "A"], false);
	
	if(DLC_PCUP && Karryn.isInDescensionRun() && $gameSwitches.value(SWITCH_DESCENSION_DIFFICULTY_PICKED)) {
		if($gameSwitches.value(SWITCH_EASY_MODE_ID)) {
			$gameSelfSwitches.setValue([MAP_ID_MODE_SELECT, normalDoor, "A"], true);
			$gameSelfSwitches.setValue([MAP_ID_MODE_SELECT, hardDoor, "A"], true);
		}
		else if($gameSwitches.value(SWITCH_NORMAL_MODE_ID)) {
			$gameSelfSwitches.setValue([MAP_ID_MODE_SELECT, easyDoor, "A"], true);
			$gameSelfSwitches.setValue([MAP_ID_MODE_SELECT, hardDoor, "A"], true);
		}
		else if($gameSwitches.value(SWITCH_HARD_MODE_ID)) {
			$gameSelfSwitches.setValue([MAP_ID_MODE_SELECT, easyDoor, "A"], true);
			$gameSelfSwitches.setValue([MAP_ID_MODE_SELECT, normalDoor, "A"], true);
		}
	}
};

Game_Party.prototype.checkIfDescensionScenarioPicked = function() {
	if($gameVariables.value(VARIABLE_DESCENSION_RUN_ID) >= 6 || Karryn.isInCustomDescensionRun()) {
		if($gameSwitches.value(SWITCH_DR_BROTHER_SELECTED) || $gameSwitches.value(SWITCH_DR_FAILED_SELECTED) || $gameSwitches.value(SWITCH_DR_QUEST_SELECTED) || $gameSwitches.value(SWITCH_DR_EMBLEM_SELECTED) || $gameSwitches.value(SWITCH_DR_MINDSET_SELECTED))
			return true;
		else
			return false;
	}
	
	if($gameSwitches.value(SWITCH_DR_BROTHER_SELECTED) && !$gameSwitches.value(SWITCH_DR_BROTHER_CLEAR))
		return true;
	if($gameSwitches.value(SWITCH_DR_FAILED_SELECTED) && !$gameSwitches.value(SWITCH_DR_FAILED_CLEAR))
		return true;
	if($gameSwitches.value(SWITCH_DR_QUEST_SELECTED) && !$gameSwitches.value(SWITCH_DR_QUEST_CLEAR))
		return true;
	if($gameSwitches.value(SWITCH_DR_EMBLEM_SELECTED) && !$gameSwitches.value(SWITCH_DR_EMBLEM_CLEAR))
		return true;
	if($gameSwitches.value(SWITCH_DR_MINDSET_SELECTED) && !$gameSwitches.value(SWITCH_DR_MINDSET_CLEAR))
		return true;
	
	return false;
};

Game_Party.prototype.checkDescensionVictory = function() {
	if(!DLC_PCUP || !Karryn.isInDescensionRun()) return false;
	
	if(Karryn.isInCustomDescensionRun()) {
		return;
	}
	
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let currentRun = $gameVariables.value(VARIABLE_DESCENSION_RUN_ID);
		
	$gameVariables.setValue(VARIABLE_DESCENSION_RUN_ID, currentRun + 1);
	
	$gameParty.remAch_firstDescension();
	if(currentRun >= 3) 
		$gameParty.remAch_descensionThree();
	if(currentRun >= 5) 
		$gameParty.remAch_descensionFive();
	
	if(Prison.hardMode()) {
		if(currentRun === 2) 
			actor._flagDescensionBeatD2OnPrisoner = true;
		if(currentRun === 3) 
			actor._flagDescensionBeatD3OnPrisoner = true;
		if(currentRun === 4) 
			actor._flagDescensionBeatD4OnPrisoner = true;
		if(currentRun === 5) {
			actor._flagDescensionBeatD5OnPrisoner = true;
			$gameSwitches.setValue(SWITCH_GLOBAL_UNLOCKED_CUSTOM_RUN_ID, true);
		}
	}
	
	if($gameSwitches.value(SWITCH_DR_BROTHER_SELECTED)) {
		$gameSwitches.setValue(SWITCH_DR_BROTHER_CLEAR, true);
		if(Prison.normalMode() || Prison.hardMode()) {
			actor._flagDescensionBeatScenarioBrotherOnWardenOrHigher = true;
			if(Prison.hardMode() && currentRun >= 5) {
				actor._flagDescensionBeatScenarioBrotherOnPrisonerD5 = true;
			}
		}
	}
	if($gameSwitches.value(SWITCH_DR_FAILED_SELECTED)) {
		$gameSwitches.setValue(SWITCH_DR_FAILED_CLEAR, true);
		if(Prison.normalMode() || Prison.hardMode()) {
			actor._flagDescensionBeatScenarioFailedOnWardenOrHigher = true;
			if(Prison.hardMode() && currentRun >= 5) {
				actor._flagDescensionBeatScenarioFailedOnPrisonerD5 = true;
			}
			if(!Karryn.hasEdict(EDICT_GUARD_PAY_FOR_FOOD)) {
				$gameParty.remAch_guardsFreeLunch();
			}
		}
	}
	if($gameSwitches.value(SWITCH_DR_QUEST_SELECTED)) {
		$gameSwitches.setValue(SWITCH_DR_QUEST_CLEAR, true);
		if(Prison.normalMode() || Prison.hardMode()) {
			actor._flagDescensionBeatScenarioQuestOnWardenOrHigher = true;
			if(Prison.hardMode() && currentRun >= 5) {
				actor._flagDescensionBeatScenarioQuestOnPrisonerD5 = true;
				
				if(this.freeMode())
					actor._flagDescensionBeatScenarioQuestOnPrisonerD5HappyEnd = true;
			}
		}
	}
	if($gameSwitches.value(SWITCH_DR_EMBLEM_SELECTED)) { 
		$gameSwitches.setValue(SWITCH_DR_EMBLEM_CLEAR, true);
		if(Prison.normalMode() || Prison.hardMode()) {
			actor._flagDescensionBeatScenarioEmblemOnWardenOrHigher = true;
			if(Prison.hardMode() && currentRun >= 5) {
				actor._flagDescensionBeatScenarioEmblemOnPrisonerD5 = true;
			}
		}
	}
	if($gameSwitches.value(SWITCH_DR_MINDSET_SELECTED)) { 
		$gameSwitches.setValue(SWITCH_DR_MINDSET_CLEAR, true);
		if(Prison.normalMode() || Prison.hardMode()) {
			actor._flagDescensionBeatScenarioMindsetOnWardenOrHigher = true;
			if(Prison.hardMode() && currentRun >= 5) {
				actor._flagDescensionBeatScenarioMindsetOnPrisonerD5 = true;
			}
		}
	}
	
	$gameSwitches.setValue(SWITCH_DR_BROTHER_SELECTED, false);
	$gameSwitches.setValue(SWITCH_DR_FAILED_SELECTED, false);
	$gameSwitches.setValue(SWITCH_DR_QUEST_SELECTED, false);
	$gameSwitches.setValue(SWITCH_DR_EMBLEM_SELECTED, false);
	$gameSwitches.setValue(SWITCH_DR_MINDSET_SELECTED, false);
};

Game_Party.prototype.setDescensionScenarioVariables = function() {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let currentRun = $gameVariables.value(VARIABLE_DESCENSION_RUN_ID);
	
	if(currentRun < 6 && !actor.isInCustomDescensionRun()) {
		if($gameSwitches.value(SWITCH_DR_BROTHER_SELECTED))
			$gameVariables.setValue(VARIABLE_DESCENSION_SCENARIO_BROTHER_NUM_ID, currentRun);
		else if($gameSwitches.value(SWITCH_DR_FAILED_SELECTED))
			$gameVariables.setValue(VARIABLE_DESCENSION_SCENARIO_FAILED_NUM_ID, currentRun);
		else if($gameSwitches.value(SWITCH_DR_QUEST_SELECTED))
			$gameVariables.setValue(VARIABLE_DESCENSION_SCENARIO_QUEST_NUM_ID, currentRun);
		else if($gameSwitches.value(SWITCH_DR_EMBLEM_SELECTED))
			$gameVariables.setValue(VARIABLE_DESCENSION_SCENARIO_EMBLEM_NUM_ID, currentRun);
		else if($gameSwitches.value(SWITCH_DR_MINDSET_SELECTED))
			$gameVariables.setValue(VARIABLE_DESCENSION_SCENARIO_MINDSET_NUM_ID, currentRun);
	}
};

Game_Party.prototype.getDescensionNumIconForScenarioFlavor = function(skillId) {
	if(!DLC_PCUP) return 0;
	if(Karryn.isInCustomDescensionRun() || !Karryn.isInDescensionRun()) 
		return 0;
	
	let iconId = 0;
	
	switch(skillId) {
		case EDICT_BIG_BROTHER_FLAVOR:
			if($gameVariables.value(VARIABLE_DESCENSION_SCENARIO_BROTHER_NUM_ID) === 1) iconId = REM_SKILLTREE_DESCENSION_ONE_ICON_ID;
			else if($gameVariables.value(VARIABLE_DESCENSION_SCENARIO_BROTHER_NUM_ID) === 2) iconId = REM_SKILLTREE_DESCENSION_TWO_ICON_ID;
			else if($gameVariables.value(VARIABLE_DESCENSION_SCENARIO_BROTHER_NUM_ID) === 3) iconId = REM_SKILLTREE_DESCENSION_THREE_ICON_ID;
			else if($gameVariables.value(VARIABLE_DESCENSION_SCENARIO_BROTHER_NUM_ID) === 4) iconId = REM_SKILLTREE_DESCENSION_FOUR_ICON_ID;
			else if($gameVariables.value(VARIABLE_DESCENSION_SCENARIO_BROTHER_NUM_ID) === 5) iconId = REM_SKILLTREE_DESCENSION_FIVE_ICON_ID;
		break;
		case EDICT_FAILED_STATE_FLAVOR:
			if($gameVariables.value(VARIABLE_DESCENSION_SCENARIO_FAILED_NUM_ID) === 1) iconId = REM_SKILLTREE_DESCENSION_ONE_ICON_ID;
			else if($gameVariables.value(VARIABLE_DESCENSION_SCENARIO_FAILED_NUM_ID) === 2) iconId = REM_SKILLTREE_DESCENSION_TWO_ICON_ID;
			else if($gameVariables.value(VARIABLE_DESCENSION_SCENARIO_FAILED_NUM_ID) === 3) iconId = REM_SKILLTREE_DESCENSION_THREE_ICON_ID;
			else if($gameVariables.value(VARIABLE_DESCENSION_SCENARIO_FAILED_NUM_ID) === 4) iconId = REM_SKILLTREE_DESCENSION_FOUR_ICON_ID;
			else if($gameVariables.value(VARIABLE_DESCENSION_SCENARIO_FAILED_NUM_ID) === 5) iconId = REM_SKILLTREE_DESCENSION_FIVE_ICON_ID;
		break;
		case EDICT_WARDEN_QUEST_FLAVOR:
			if($gameVariables.value(VARIABLE_DESCENSION_SCENARIO_QUEST_NUM_ID) === 1) iconId = REM_SKILLTREE_DESCENSION_ONE_ICON_ID;
			else if($gameVariables.value(VARIABLE_DESCENSION_SCENARIO_QUEST_NUM_ID) === 2) iconId = REM_SKILLTREE_DESCENSION_TWO_ICON_ID;
			else if($gameVariables.value(VARIABLE_DESCENSION_SCENARIO_QUEST_NUM_ID) === 3) iconId = REM_SKILLTREE_DESCENSION_THREE_ICON_ID;
			else if($gameVariables.value(VARIABLE_DESCENSION_SCENARIO_QUEST_NUM_ID) === 4) iconId = REM_SKILLTREE_DESCENSION_FOUR_ICON_ID;
			else if($gameVariables.value(VARIABLE_DESCENSION_SCENARIO_QUEST_NUM_ID) === 5) iconId = REM_SKILLTREE_DESCENSION_FIVE_ICON_ID;
		break;
		case EDICT_PRISON_EMBLEM_FLAVOR:
			if($gameVariables.value(VARIABLE_DESCENSION_SCENARIO_EMBLEM_NUM_ID) === 1) iconId = REM_SKILLTREE_DESCENSION_ONE_ICON_ID;
			else if($gameVariables.value(VARIABLE_DESCENSION_SCENARIO_EMBLEM_NUM_ID) === 2) iconId = REM_SKILLTREE_DESCENSION_TWO_ICON_ID;
			else if($gameVariables.value(VARIABLE_DESCENSION_SCENARIO_EMBLEM_NUM_ID) === 3) iconId = REM_SKILLTREE_DESCENSION_THREE_ICON_ID;
			else if($gameVariables.value(VARIABLE_DESCENSION_SCENARIO_EMBLEM_NUM_ID) === 4) iconId = REM_SKILLTREE_DESCENSION_FOUR_ICON_ID;
			else if($gameVariables.value(VARIABLE_DESCENSION_SCENARIO_EMBLEM_NUM_ID) === 5) iconId = REM_SKILLTREE_DESCENSION_FIVE_ICON_ID;
		break;
		case EDICT_DIFFERENT_MINDSET_FLAVOR:
			if($gameVariables.value(VARIABLE_DESCENSION_SCENARIO_MINDSET_NUM_ID) === 1) iconId = REM_SKILLTREE_DESCENSION_ONE_ICON_ID;
			else if($gameVariables.value(VARIABLE_DESCENSION_SCENARIO_MINDSET_NUM_ID) === 2) iconId = REM_SKILLTREE_DESCENSION_TWO_ICON_ID;
			else if($gameVariables.value(VARIABLE_DESCENSION_SCENARIO_MINDSET_NUM_ID) === 3) iconId = REM_SKILLTREE_DESCENSION_THREE_ICON_ID;
			else if($gameVariables.value(VARIABLE_DESCENSION_SCENARIO_MINDSET_NUM_ID) === 4) iconId = REM_SKILLTREE_DESCENSION_FOUR_ICON_ID;
			else if($gameVariables.value(VARIABLE_DESCENSION_SCENARIO_MINDSET_NUM_ID) === 5) iconId = REM_SKILLTREE_DESCENSION_FIVE_ICON_ID;
		break;
	}
	
	return iconId;
};


Game_Party.prototype.setStartingDescensionEdicts = function() {
	if(!DLC_PCUP) return false;
	
	if($gameSwitches.value(SWITCH_DR_BROTHER_SELECTED)) {
		Karryn.learnSkill(EDICT_BIG_BROTHER_SCENARIO);
		if(!Karryn.isInCustomDescensionRun()) {
			Karryn.learnSkill(EDICT_BIG_BROTHER_FLAVOR);
			Karryn.learnSkill(EDICT_BIG_BROTHER_EFFECTS);
		}
	}
	else if($gameSwitches.value(SWITCH_DR_BROTHER_CLEAR) && !Karryn.isInCustomDescensionRun()) {
		Karryn.learnSkill(EDICT_BIG_BROTHER_EFFECTS);
	}
	
	if($gameSwitches.value(SWITCH_DR_FAILED_SELECTED)) {
		Karryn.learnSkill(EDICT_FAILED_STATE_SCENARIO);
		if(!Karryn.isInCustomDescensionRun()) {
			Karryn.learnSkill(EDICT_FAILED_STATE_FLAVOR);
			Karryn.learnSkill(EDICT_FAILED_STATE_EFFECTS);
		}
	}
	else if($gameSwitches.value(SWITCH_DR_FAILED_CLEAR) && !Karryn.isInCustomDescensionRun()) {
		Karryn.learnSkill(EDICT_FAILED_STATE_EFFECTS);
	}
	
	if($gameSwitches.value(SWITCH_DR_QUEST_SELECTED)) {
		Karryn.learnSkill(EDICT_WARDEN_QUEST_SCENARIO);
		if(!Karryn.isInCustomDescensionRun()) {
			Karryn.learnSkill(EDICT_WARDEN_QUEST_FLAVOR);
			Karryn.learnSkill(EDICT_WARDEN_QUEST_EFFECTS);
		}
	}
	else if($gameSwitches.value(SWITCH_DR_QUEST_CLEAR) && !Karryn.isInCustomDescensionRun()) {
		Karryn.learnSkill(EDICT_WARDEN_QUEST_EFFECTS);
	}
	
	if($gameSwitches.value(SWITCH_DR_EMBLEM_SELECTED)) {
		Karryn.learnSkill(EDICT_PRISON_EMBLEM_SCENARIO);
		if(!Karryn.isInCustomDescensionRun()) {
			Karryn.learnSkill(EDICT_PRISON_EMBLEM_FLAVOR);
			Karryn.learnSkill(EDICT_PRISON_EMBLEM_EFFECTS);
		}
	}
	else if($gameSwitches.value(SWITCH_DR_EMBLEM_CLEAR) && !Karryn.isInCustomDescensionRun()) {
		Karryn.learnSkill(EDICT_PRISON_EMBLEM_EFFECTS);
	}
	
	if($gameSwitches.value(SWITCH_DR_MINDSET_SELECTED)) {
		Karryn.learnSkill(EDICT_DIFFERENT_MINDSET_SCENARIO);
		if(!Karryn.isInCustomDescensionRun()) {
			Karryn.learnSkill(EDICT_DIFFERENT_MINDSET_FLAVOR);
			Karryn.learnSkill(EDICT_DIFFERENT_MINDSET_EFFECTS);
		}
	}
	else if($gameSwitches.value(SWITCH_DR_MINDSET_CLEAR) && !Karryn.isInCustomDescensionRun()) {
		Karryn.learnSkill(EDICT_DIFFERENT_MINDSET_EFFECTS);
	}
	
	//Descension Starting Edicts
	
	if(Karryn.isInCustomDescensionRun()) {
		Karryn.learnSkill(EDICT_DESCENSION_CUSTOM_RUN);
	}
	else {
		Karryn.learnSkill(EDICT_DESCENSION_EXPLANATION);
	}
	
	Karryn.learnSkill(EDICT_DESCENSION_SCENARIO);
	Karryn.learnSkill(EDICT_DESCENSION_UNIQUE);
	Karryn.learnSkill(EDICT_DESCENSION_CARRYOVER);
	
	if($gameSwitches.value(SWITCH_EASY_MODE_ID)) {
		Karryn.learnSkill(EDICT_DESCENSION_RUN_EASY);
	}
	if($gameSwitches.value(SWITCH_NORMAL_MODE_ID)) {
		Karryn.learnSkill(EDICT_DESCENSION_RUN_NORMAL);
	}
	if($gameSwitches.value(SWITCH_HARD_MODE_ID)) {
		Karryn.learnSkill(EDICT_DESCENSION_RUN_HARD);
	}
	
	
	if(Karryn.hasEdict(EDICT_DIFFERENT_MINDSET_EFFECTS)) {
		Karryn.learnSkill(EDICT_SEE_NO_EVIL);
		Karryn.forgetSkill(EDICT_WARDEN_OUTFIT);
	}
	
	if(Karryn.hasEdict(EDICT_BIG_BROTHER_EFFECTS)) {
		Karryn.learnSkill(EDICT_THE_NERD_PROBLEM);
	}
	
	if(Karryn.hasEdict(EDICT_FAILED_STATE_SCENARIO)) {
		Karryn.learnSkill(EDICT_PUBLISH_PROFILE);
		Karryn.learnSkill(EDICT_LAXER_HIRING_STANDARDS);
		Karryn.learnSkill(EDICT_REPAIR_KITCHEN_AND_MESS_HALL);
		Karryn.learnSkill(EDICT_BULK_FOOD_SUPPLIER);
		Karryn.learnSkill(EDICT_HIRE_CURRENT_INMATES);
		Karryn.learnSkill(EDICT_BETTER_GUARD_MEALS);
		Karryn.learnSkill(EDICT_HIRE_COOKS);
		Karryn.learnSkill(EDICT_HIRE_A_CHEF);
		Karryn.learnSkill(EDICT_GOURMET_GUARD_MEALS);
		Karryn.learnSkill(EDICT_OFFICE_PRISON_GUARDS);
		Karryn.learnSkill(EDICT_OFFICE_BED_UPGRADE_ONE);
		Karryn.learnSkill(EDICT_STANDARD_GUARD_EQUIPMENT);
		Karryn.learnSkill(EDICT_NO_HIRING_STANDARDS);
		Karryn.learnSkill(EDICT_STEROIDS_FOR_GUARDS);
		Karryn.learnSkill(EDICT_SEX_ENDURANCE_DRUGS_FOR_GUARDS);
		Karryn.learnSkill(EDICT_PERFORMANCE_ENHANCEMENT_DRUGS_FOR_GUARDS);
		Karryn.learnSkill(EDICT_NEW_DRUG_SUPPLIER);
	}
	
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	actor.setupDescensionTodaysStatGain();
};

Game_Party.prototype.allowDescensionCarryoverBuying = function(skillId) {
	if(!DLC_PCUP) return false;
	if(((Karryn.isInDescensionRun() && !Karryn.isInCustomDescensionRun()) || Karryn.isInChallengeRun()) && !Prison.freeMode()) return false;
	
	switch(skillId) {
		case EDICT_BIG_BROTHER_EFFECTS:
			return Karryn.hasThisTitle(TITLE_ID_DESCENSION_BROTHER_NORMAL);
		case EDICT_FAILED_STATE_EFFECTS:
			return Karryn.hasThisTitle(TITLE_ID_DESCENSION_FAILED_NORMAL);
		case EDICT_WARDEN_QUEST_EFFECTS:
			return Karryn.hasThisTitle(TITLE_ID_DESCENSION_QUEST_NORMAL);
		case EDICT_PRISON_EMBLEM_EFFECTS:
			return Karryn.hasThisTitle(TITLE_ID_DESCENSION_EMBLEM_NORMAL);
		case EDICT_DIFFERENT_MINDSET_EFFECTS:
			return Karryn.hasThisTitle(TITLE_ID_DESCENSION_MINDSET_NORMAL);
	}
	
	return false;
};

// Battle Manager
BattleManager.checkForItemDrop = function() {
	let itemChance = this._rewards.itemChance;
	let storedItemChance = $gameParty._storedItemDropChance;
	let totalItemsDropped = $gameParty._totalItemsDropped;
	let newItemDropping = false;
	let addToStoredItemChance = true;
	
	if(itemChance <= 0) return;

	if(Math.randomInt(500 + totalItemsDropped * 250) < itemChance + storedItemChance) {
		newItemDropping = true;
	}
	
	if(newItemDropping) {
		let droppedEdictId = this.addedItemDropReward();
		if(droppedEdictId) {
			$gameParty._storedItemDropChance = 0;
			$gameParty._totalItemsDropped++;
			addToStoredItemChance = false;
			$gameParty._itemDropSetFailedCount = 0;
			this._rewards.droppedEdictId = droppedEdictId;
		}
		else {
			$gameParty._itemDropSetFailedCount++;
		}
	}
	
	if(addToStoredItemChance) {
		if(totalItemsDropped < 3) {
			$gameParty._storedItemDropChance += itemChance;
		}
		else if(totalItemsDropped < 7) {
			$gameParty._storedItemDropChance += itemChance * 0.5;
		}
		else {
			$gameParty._storedItemDropChance += itemChance * 0.25;
		}
	}
};


BattleManager.addedItemDropReward = function() {
	let droppedEdictId = false;
	let itemSets = [];
	
	if($gameParty._totalItemsDropped === 0) {
		itemSets = itemSets.concat(WARDEN_QUEST_ITEM_SET_STARTER);
		
		if($gameParty._itemDropSetFailedCount > 0) {
			itemSets = itemSets.concat(WARDEN_QUEST_ITEM_SET_LEVEL_1);
		}
	}
	else {
		let exoticChance = 0;
		
		itemSets = itemSets.concat(WARDEN_QUEST_ITEM_SET_LEVEL_1);
		
		if(Prison.prisonLevelOneIsSubjugated())
			itemSets = itemSets.concat(WARDEN_QUEST_ITEM_SET_LEVEL_2);
		if(Prison.prisonLevelTwoIsSubjugated()) 
			itemSets = itemSets.concat(WARDEN_QUEST_ITEM_SET_LEVEL_3);
		if(Prison.prisonLevelThreeIsSubjugated())
			itemSets = itemSets.concat(WARDEN_QUEST_ITEM_SET_LEVEL_4);
		if(Prison.prisonLevelFourIsSubjugated())
			itemSets = itemSets.concat(WARDEN_QUEST_ITEM_SET_LEVEL_5);
		
		if(Prison.freeMode()) {
			exoticChance += 33;
		}
		else if(Prison.prisonLevelFiveIsAnarchy()) {
			itemSets = itemSets.concat(WARDEN_QUEST_ITEM_SET_LEVEL_5);
			itemSets = itemSets.concat(WARDEN_QUEST_ITEM_SET_LEVEL_5);
			itemSets = itemSets.concat(WARDEN_QUEST_ITEM_SET_LEVEL_5);
			exoticChance += 22;
		}
		else if(Prison.prisonLevelFourIsAnarchy()) {
			itemSets = itemSets.concat(WARDEN_QUEST_ITEM_SET_LEVEL_4);
			itemSets = itemSets.concat(WARDEN_QUEST_ITEM_SET_LEVEL_4);
			itemSets = itemSets.concat(WARDEN_QUEST_ITEM_SET_LEVEL_4);
			exoticChance += 14;
		}
		else if(Prison.prisonLevelThreeIsAnarchy()) {
			itemSets = itemSets.concat(WARDEN_QUEST_ITEM_SET_LEVEL_3);
			itemSets = itemSets.concat(WARDEN_QUEST_ITEM_SET_LEVEL_3);
			exoticChance += 8;
		}
		else if(Prison.prisonLevelTwoIsAnarchy()) {
			itemSets = itemSets.concat(WARDEN_QUEST_ITEM_SET_LEVEL_2);
			exoticChance += 5;
		}
		
		if(Karryn.isInDefeatedPose()) {
			exoticChance *= 2;
		}
		
		if(Math.randomInt(100) < exoticChance) {
			itemSets = itemSets.concat(WARDEN_QUEST_ITEM_SET_EXOTIC);
			itemSets = itemSets.concat(WARDEN_QUEST_ITEM_SET_EXOTIC);
		}
	}	
	
	if($gameParty._itemDropSetFailedCount > 2) {
		itemSets = itemSets.concat(WARDEN_QUEST_ITEM_SET_LEVEL_1);
		itemSets = itemSets.concat(WARDEN_QUEST_ITEM_SET_LEVEL_2);
		itemSets = itemSets.concat(WARDEN_QUEST_ITEM_SET_LEVEL_3);
		itemSets = itemSets.concat(WARDEN_QUEST_ITEM_SET_LEVEL_4);
	}
	if($gameParty._itemDropSetFailedCount > 4) {
		itemSets = itemSets.concat(WARDEN_QUEST_ITEM_SET_EXOTIC);
		itemSets = itemSets.concat(WARDEN_QUEST_ITEM_SET_EXOTIC);
		itemSets = itemSets.concat(WARDEN_QUEST_ITEM_SET_EXOTIC);
		itemSets = itemSets.concat(WARDEN_QUEST_ITEM_SET_EXOTIC);
	}
	
	let index = Math.randomInt(itemSets.length);
	let edictId = itemSets[index];
	
	if(!Karryn.hasEdict(edictId)) {
		Karryn.learnSkill(edictId);
		droppedEdictId = edictId;
	}
	
	return droppedEdictId;
};



