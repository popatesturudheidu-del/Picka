var Remtairy = Remtairy || {};
Remtairy.EnemyAI = Remtairy.EnemyAI || {};

//=============================================================================
 /*:
 * @plugindesc Enemy AI
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================

const VAR_ENEMYAI_TRY_START_SEX_ATTEMPTS = 3;
const VAR_ENEMYAI_TRY_JOIN_SEX_ATTEMPTS = 5;
const VAR_ENEMYAI_TRY_UPGRADE_SEX_ATTEMPTS = 2;
const VAR_ENEMYAI_TRY_PETTING_ATTEMPTS = 5;
const VAR_ENEMYAI_TRY_PETTING_HORNY_ATTEMPTS = 10;
const VAR_ENEMYAI_TRY_PETTING_METAL_ATTEMPTS = 8;
const VAR_ENEMYAI_SKIP_PETTING_WHEN_KARRYN_ONANI_CHANCE = 90;
const VAR_ENEMYAI_METAL_TURNLIMIT = 5;

/////////
///////////
// Game Enemy
/////////////
///////////

////////////
// AI Code Overall
//////////////////

//Generic battle ai
Game_Enemy.prototype.enemyBattleAIGeneric = function() {
	//let target = BattleManager._targets[0];
	//this._lastAITarget = BattleManager._targets[0];
	let target = $gameActors.actor(ACTOR_KARRYN_ID);
	this._lastAITarget = $gameActors.actor(ACTOR_KARRYN_ID);
	
	this._enemyTurnCount++;
	
	//console.log('enemyBattleAIGeneric');
	
	//console.log(this.name());
	//console.log(BattleManager._subject);
	//console.log(BattleManager._targets[0]);
	
	if(this.usedSkillThisTurn() || this.isStateAffected(STATE_ENEMY_CAME_THIS_TURN_ID))
		return;
	
	//Special AI
	if($gameParty.isInWaitressBattle) {
		if(target.isInWaitressServingPose()) {
			this.enemyBattleAIWaitressServing(target);
			return;
		}	
		else if(target.isInWaitressSexPose()) {
			this.enemyBattleAIWaitressSex(target);
			return;
		}	
	}	

	
	if($gameParty.isInReceptionistBattle) {
		this.enemyBattleAIReceptionist(target);
		return;
	}	
	
	if($gameParty.isInGloryBattle) {
		this.enemyBattleAIGloryHole(target);
		return;
	}	
	
	if($gameParty.isInStripperBattle) {
		if(target.isInStripperSexPose()) {
			this.enemyBattleAIStripperSex(target);
			return;
		}	
		else {
			this.enemyBattleAIStripperShow(target);
			return;
		}	
	}	
	
	if($gameParty.isInTrainerBattle) {
		if(target.isInTrainerRinkanPose()) {
			this.enemyBattleAITrainerRinkan(target);
			return;
		}	
		else {
			this.enemyBattleAITrainerWork(target);
			return;
		}	
	}	
	
	if(target.isInDefeatedLevel1Pose()) {
		this.enemyBattleAIDefeatedLevel1(target);
		return;
	}
	if(target.isInDefeatedLevel2Pose()) {
		this.enemyBattleAIDefeatedLevel2(target);
		return;
	}
	if(target.isInDefeatedLevel3Pose()) {
		this.enemyBattleAIDefeatedLevel3(target);
		return;
	}
	if(target.isInDefeatedLevel4Pose()) {
		this.enemyBattleAIDefeatedLevel4(target);
		return;
	}
	if(target.isInDefeatedLevel5Pose()) {
		this.enemyBattleAIDefeatedLevel5(target);
		return;
	}
	
	
	if(target.isInDefeatedGuardPose()) {
		this.enemyBattleAIDefeatedGuard(target);
		return;
	}
	
	if(this.hasMetalPrefix()) {
		this.enemyMetalBattleAI(target);
		return;
	}
	
	//Special Actions
	if(this.specialEnemyBattleAIAction(target)) return;
	
	//Charge takes priority above everything else
	if(this.isChargedUp()) {
		if(this.chargeAIAttack(target)) return;
	}
	
	if(!DEBUG_MODE) {
		this.genericBattleAIAttack(target);
		return;
	}
	

	//First step: check if I'm already in a pose
	if(this.isInAPose()) {
		//If I'm close to an orgasm, focus on my pose skill
		let ranChanceFactor = 60;
		if(this.isHorny)
			ranChanceFactor -= 40;
		if(this.hasVirginPrefix())
			ranChanceFactor -= 40;
		if(target.isUsingOpenPleasure())
			ranChanceFactor -= 30;

		if(this.canOnlyUsePoseSkills() || Math.randomInt(ranChanceFactor) < this.currentPercentOfOrgasm(true)) {
			if(this.usePoseSkill(target))
				return;
		}
		else if(this.isLizardmanType && this.customReq_mobCallLizardman() && Karryn.hasEdict(EDICT_APPEASE_THE_LIZARDMEN) && !this.isHorny && Math.random() < 0.2) {
			this.useAISkill(SKILL_LIZARDMAN_CHARGE_ID, target);
			return;
		}
		//Nothing else to do, Petting-Talk-Sight
		this.genericPettingTalkSight(target);
		return;
	}
	//If Karryn is in a sex pose, I will not attack her
	if(target.isInSexPose()) {
		let ranChanceFactor = 80;
		if(this.isHorny)
			ranChanceFactor -= 50;
		if(this.hasVirginPrefix())
			ranChanceFactor -= 40;
		if(target.isUsingOpenPleasure())
			ranChanceFactor -= 40;
		//Am I erect, if so, I want to be in a sex pose
		if(this.isErect && Math.randomInt(ranChanceFactor) < Math.min(this.currentPercentOfArousal(true),95)) {
			//Can I join the current pose if Karryn is in one?
			if(this.tryJoinSexPose(target, VAR_ENEMYAI_TRY_JOIN_SEX_ATTEMPTS)) return;
			//Can I participate by upgrading the pose?
			if(this.tryUpgradeSexPose(target, VAR_ENEMYAI_TRY_UPGRADE_SEX_ATTEMPTS)) return;
		}
		//Nothing else to do, Petting-Talk-Sight
		if(this.isHorny) 
			this.genericPettingTalkSight(target, VAR_ENEMYAI_TRY_PETTING_HORNY_ATTEMPTS);
		else if(this.isLizardmanType && this.customReq_mobCallLizardman() && Karryn.hasEdict(EDICT_APPEASE_THE_LIZARDMEN) && !this.isHorny && Math.random() < 0.2) {
			this.useAISkill(SKILL_LIZARDMAN_CHARGE_ID, target);
			return;
		}
		else
			this.genericPettingTalkSight(target, VAR_ENEMYAI_TRY_PETTING_ATTEMPTS);
		return;
	}
	//Karryn is not in a sex pose
	else {
		let ranChanceFactor = 100;
		if(this.isHorny)
			ranChanceFactor += 80;
		if(this.hasVirginPrefix())
			ranChanceFactor += 80;
		if(target.isUsingOpenPleasure())
			ranChanceFactor += 80;
		if(this.isMonstrousType) {
			if(target.isInDownPose())
				ranChanceFactor += 200;
			if(this.isHorny)
				ranChanceFactor += 120;
		}
		
		let lowerLimit = 1000;
		if(!this.isHorny && !this.isMonstrousType && target.isInMasturbationPose()) lowerLimit = 0;
		ranChanceFactor = Math.min(ranChanceFactor, lowerLimit);
		
		let wantSex = (Math.randomInt(ranChanceFactor)) > Math.max(0, (this.anger() - this.currentPercentOfOrgasm(true)));
		let canStartSex = true;
		
		if(target.isPreparingToUseKickSkill() && target.currentAction()) {
			if(this.counterCondition_kickCounter(target, target.currentAction()))
				canStartSex = false;
		}
		
		if(this.isHorny && !this.isAngry) 
			wantSex = true;
		
		if(!wantSex && Karryn.hasEdict(EDICT_FAILED_STATE_SCENARIO) && this.isGuardType) 
			wantSex = (Math.randomInt(ranChanceFactor)) > Math.max(0, ((this.anger() * 0.5) - this.currentPercentOfOrgasm(true)));

		//If I don't want to have sex, and Karryn is currently attackable
		if(!wantSex && target.isAttackable()) {
			this.genericBattleAIAttack(target);
			return;
		}
		//If I want sex and I'm erect, can I start a sex pose?
		else if(wantSex && this.isErect && canStartSex) {
			if(this.tryStartSexPose(target, VAR_ENEMYAI_TRY_START_SEX_ATTEMPTS)) return;
		}
		//Nothing else to do, Petting-Talk-Sight
		if(this.isHorny) 
			this.genericPettingTalkSight(target, VAR_ENEMYAI_TRY_PETTING_HORNY_ATTEMPTS);
		else if(target.isInMasturbationPose())
			this.genericBattleAITalkSight(target);
		else
			this.genericPettingTalkSight(target, VAR_ENEMYAI_TRY_PETTING_ATTEMPTS);
		return;
	}
};

//Tutorial battle ai
Game_Enemy.prototype.enemyBattleAITutorial = function() {
	if(!$gameTemp._tutorialTurn) $gameTemp._tutorialTurn = 1;
	//let target = BattleManager._targets[0];
	//this._lastAITarget = BattleManager._targets[0];
	let target = $gameActors.actor(ACTOR_KARRYN_ID);
	this._lastAITarget = $gameActors.actor(ACTOR_KARRYN_ID);
	let turnCount = $gameTemp._tutorialTurn;
	let arousalPoint = this.arousalPoint();
	let thirdToPoint = Math.ceil(arousalPoint * 0.35);
	let currentBoobsDesire = target.boobsDesire;
	
	if(turnCount === 1 || turnCount === 2) {
		this.useAISkill(SKILL_ENEMY_CLOTHES_PULL_ID,target);
		this.setPleasure(this.pleasure + thirdToPoint);
		target._tempMaxReached50BoobsDesire = true;
		target.setBoobsDesire(currentBoobsDesire + 15, false);
	}
	else if(turnCount === 3) {
		this.useAISkill(SKILL_ENEMY_PETTING_BOOBS_ID,target);
		this.setPleasure(arousalPoint + thirdToPoint);
	}
	else {
		if(target.slutLvl <= 1) {
			let boobsDesire = target.boobsDesire;
			if(boobsDesire >= 50 && turnCount % 2 === 1) 
				this.useAISkill(SKILL_ENEMY_PETTING_BOOBS_ID,target);
			else {
				this.useAISkill(SKILL_ENEMY_STARE_SKILL_BOOBS_ID,target);
				target.setBoobsDesire(currentBoobsDesire + 15, false);
			}
		}
	}
	
	target._tempMaxReached50BoobsDesire = true;
	$gameTemp._tutorialTurn++;
};

//Metal AI
Game_Enemy.prototype.enemyMetalBattleAI = function(target) {
	if(this._enemyTurnCount >= VAR_ENEMYAI_METAL_TURNLIMIT && !this.isInAPose()) {
		this.useAISkill(SKILL_ESCAPE_ID,target);
		this.setUsedSkillThisTurn(true);
		this._ignoreNextOrgasmCheck = true;
		return;
	}
	
	if(this.isInAPose()) {
		let ranChanceFactor = 80;
		if(this.isHorny)
			ranChanceFactor -= 40;
		if(target.isUsingOpenPleasure())
			ranChanceFactor -= 30;
		
		if(this.canOnlyUsePoseSkills() || Math.randomInt(ranChanceFactor) < this.currentPercentOfOrgasm(true)) {
			if(this.usePoseSkill(target))
				return;
		}
	}
	
	if(target.isInSexPose()) {
		this.genericPettingTalkSight(target, VAR_ENEMYAI_TRY_PETTING_METAL_ATTEMPTS);
		return;
	}
	else {
		if(this.isChargedUp()) {
			if(this.chargeAIAttack(target)) return;
		}
		
		let ranChanceFactor = 60;
		if(this.isHorny)
			ranChanceFactor += 60;
		if(target.isUsingOpenPleasure())
			ranChanceFactor += 60;
		
		let lowerLimit = 1000;
		if(!this.isHorny && target.isInMasturbationPose()) lowerLimit = 0;
		ranChanceFactor = Math.min(ranChanceFactor, lowerLimit);
		
		let wontAttack = (Math.randomInt(ranChanceFactor)) > (this.anger() - this.currentPercentOfOrgasm(true));
		
		if(wontAttack) {
			this.genericPettingTalkSight(target, VAR_ENEMYAI_TRY_PETTING_METAL_ATTEMPTS);
		}
		else if(target.isInMasturbationPose()) {
			this.genericBattleAITalkSight(target);
		}
		else if(target.isAttackable()){
			this.genericBattleAIAttack(target);
		}
		return;
	}
	
};

//Waitress Sex AI
Game_Enemy.prototype.enemyBattleAIWaitressSex = function(target) {
	if(this.usedSkillThisTurn())
		return;
		
	//this._lastAITarget = BattleManager._targets[0];
	this._lastAITarget = $gameActors.actor(ACTOR_KARRYN_ID);
	let canStillCum = this.hasEjaculationStock();
	
	if(this.waitressSex_refillWaitressMug(target)) return;
	if(this.waitressSex_dumpWaitressMug(target)) return;
	
	if(canStillCum) {
		if(this.isInAPose()) {
			if(this.usePoseSkill(target))
				return;
		}
		
		if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_POSEJOIN_PUSSY_ID], target) && this.weaknessToPussy() >= 1) {
			this.useAISkill(SKILL_ENEMY_POSEJOIN_PUSSY_ID,target);
			return;
		}
		if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_POSEJOIN_ANAL_ID], target) && this.weaknessToAnal() >= 1) {
			this.useAISkill(SKILL_ENEMY_POSEJOIN_ANAL_ID,target);
			return;
		}

		if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_POSEJOIN_MOUTH_ID], target)) {
			if(target._cockFrontATarget) {
				BattleManager.pullOutEnemy(target._cockFrontATarget);
			}
			this.useAISkill(SKILL_ENEMY_POSEJOIN_MOUTH_ID,target);
			return;
		}
		
		if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_POSEJOIN_RIGHT_HAND_ID], target)) {
			this.useAISkill(SKILL_ENEMY_POSEJOIN_RIGHT_HAND_ID,target);
			return;
		}
		
		if(!target.blowjobPoseSkillsIsEnabled() && this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_POSEJOIN_BARSEX_OTHER1_ID], target)) {
			this.useAISkill(SKILL_ENEMY_POSEJOIN_BARSEX_OTHER1_ID,target);
			return;
		}
		
		//didn't join anything
		if(Math.random() < 0.3)
			this.genericPettingTalkSight(target);
		else if(Math.random() < 0.3)
			this.genericBattleAITalkSight(target);
		
	}
	//Have no stock left
	else {
		if(this.isUsingBodySlotPenis(OTHER_1_ID)) {
			BattleManager.pullOutEnemy(this);
		}
		
		if(Math.random() < 0.1)
			this.genericPettingTalkSight(target);
		else if(Math.random() < 0.2)
			this.genericBattleAITalkSight(target);
	}
};

//Stripper Sex AI
Game_Enemy.prototype.enemyBattleAIStripperSex = function(target) {
	if(this.usedSkillThisTurn())
		return;
	
	this._lastAITarget = $gameActors.actor(ACTOR_KARRYN_ID);
	let pussyInserted = target.pussySexPoseSkillsIsEnabled();
	let analInserted = target.analSexPoseSkillsIsEnabled();
	let boobsInserted = target.tittyFuckPoseSkillsIsEnabled();
	let mouthInserted = target.blowjobPoseSkillsIsEnabled();
	let isUsingPussy = this.isUsingBodySlotPenis(PUSSY_ID);
	let isUsingAnal = this.isUsingBodySlotPenis(ANAL_ID);
	let isUsingBoobs = this.isUsingBodySlotPenis(BOOBS_ID);
	let isUsingMouth = this.isUsingBodySlotPenis(MOUTH_ID);
	let isUsingRightHand = this.isUsingBodySlotPenis(RIGHT_HAND_ID);
	let isUsingLeftHand = this.isUsingBodySlotPenis(LEFT_HAND_ID);
	
	if(this._stripClub_isHoldingUsedCondom) {
		this.stripperBattle_getRidOfCondom(target);
		return;
	}
	
	if(isUsingPussy || isUsingAnal || isUsingBoobs || isUsingMouth) {
		let array = [];
		if(this.getPoseSkills()) array = this.getPoseSkills().slice(0);
		let success = false;
		
		if(isUsingAnal || isUsingPussy) {
			if(!this._aiPettingSkills) {}
			else {
				if(!boobsInserted) {
					if(this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_SELECTOR_BOOBS_ID))
						array.push(SKILL_ENEMY_PETTING_SELECTOR_BOOBS_ID);
				}
				if(!analInserted) {
					if(this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_SELECTOR_BUTT_ID))
						array.push(SKILL_ENEMY_PETTING_SELECTOR_BUTT_ID);
				}
				if(!pussyInserted) {
					if(this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_SELECTOR_PUSSY_ID))
						array.push(SKILL_ENEMY_PETTING_SELECTOR_PUSSY_ID);
				}
			}
		}
		else if(isUsingBoobs) {
			if(!this._aiPettingSkills) {}
			else {	
				if(this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_SELECTOR_BOOBS_ID))
					array.push(SKILL_ENEMY_PETTING_SELECTOR_BOOBS_ID);
			}
		}
		
		if(this.currentPercentOfOrgasm(true) < 66) {
			if(this._aiTalkSightSkills)
				array = array.concat(this._aiTalkSightSkills);
		}
		
		while(array.length > 0 && !success) {
			let index = Math.randomInt(array.length);
			let skillId = array.splice(index,1)[0];
			success = this.meetsSkillConditionsEval($dataSkills[skillId], target);
			if(success) {
				this.useAISkill(skillId,target);
				this.setUsedSkillThisTurn(true);
				return;
			}
		}
	}
	else if(!pussyInserted || !analInserted || !boobsInserted || !mouthInserted) {
		let array = [];
		if(this.canInsertPussy(target) && this.weaknessToPussy() >= 1)
			array.push(SKILL_ENEMY_POSEJOIN_STRIPPER_VIP_PUSSY_ID);
		if(this.canInsertAnal(target) && this.weaknessToAnal() >= 1)
			array.push(SKILL_ENEMY_POSEJOIN_STRIPPER_VIP_ANAL_ID);
		if(this.canInsertMouth(target) && this.weaknessToBlowjob() >= 1)
			array.push(SKILL_ENEMY_POSEJOIN_STRIPPER_VIP_MOUTH_ID);
		if(this.canInsertBoobs(target) && this.weaknessToTittyFuck() >= 1)
			array.push(SKILL_ENEMY_POSEJOIN_STRIPPER_VIP_BOOBS_ID);
		
		if(array.length > 0) {
			let index = Math.randomInt(array.length);
			let skillId = array.splice(index,1)[0];
			this.useAISkill(skillId,target);
			this.setUsedSkillThisTurn(true);
			return;
		}
	
	}
	else if(isUsingRightHand || isUsingLeftHand) {
		let array = [];
		if(this.getPoseSkills()) array = this.getPoseSkills().slice(0);
		let success = false;
		
		if(this._aiTalkSightSkills)
			array = array.concat(this._aiTalkSightSkills);
		
		while(array.length > 0 && !success) {
			let index = Math.randomInt(array.length);
			let skillId = array.splice(index,1)[0];
			success = this.meetsSkillConditionsEval($dataSkills[skillId], target);
			if(success) {
				this.useAISkill(skillId,target);
				this.setUsedSkillThisTurn(true);
				return;
			}
		}
	}
	else if(!target.isBodySlotPenis(RIGHT_HAND_ID) || !target.isBodySlotPenis(LEFT_HAND_ID)) {
		let array = [];
		if(this.canInsertRightHand(target))
			array.push(SKILL_ENEMY_POSEJOIN_STRIPPER_VIP_RIGHT_HJ_ID);
		if(this.canInsertLeftHand(target))
			array.push(SKILL_ENEMY_POSEJOIN_STRIPPER_VIP_LEFT_HJ_ID);
		
		if(array.length > 0) {
			let index = Math.randomInt(array.length);
			let skillId = array.splice(index,1)[0];
			this.useAISkill(skillId,target);
			this.setUsedSkillThisTurn(true);
			return;
		}

	}
	
	this.genericPettingTalkSight(target);
	return;
};

//Trainer Rinkan AI
Game_Enemy.prototype.enemyBattleAITrainerRinkan = function(target) {
	if(this.usedSkillThisTurn())
		return;
	
	this._lastAITarget = $gameActors.actor(ACTOR_KARRYN_ID);
	let pussyInserted = target.pussySexPoseSkillsIsEnabled();
	let analInserted = target.analSexPoseSkillsIsEnabled();
	let mouthInserted = target.blowjobPoseSkillsIsEnabled();
	let isUsingPussy = this.isUsingBodySlotPenis(PUSSY_ID);
	let isUsingAnal = this.isUsingBodySlotPenis(ANAL_ID);
	let isUsingMouth = this.isUsingBodySlotPenis(MOUTH_ID);
	
	if(isUsingPussy || isUsingAnal || isUsingMouth) {
		let array = [];
		if(this.getPoseSkills()) array = this.getPoseSkills().slice(0);
		let success = false;
		
		if(!this._aiPettingSkills) {}
		else if(isUsingPussy) {
			if(this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_SELECTOR_BOOBS_ID))
				array.push(SKILL_ENEMY_PETTING_SELECTOR_BOOBS_ID);
			if(this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_BOOBS_ID))
				array.push(SKILL_ENEMY_PETTING_BOOBS_ID);
			if(this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_NIPPLES_ID))
				array.push(SKILL_ENEMY_PETTING_NIPPLES_ID);
			
			if(this._aiPettingSkills.includes(SKILL_ENEMY_SPANKING_SELECTOR_ID))
				array.push(SKILL_ENEMY_SPANKING_SELECTOR_ID);
		}
		else if(isUsingAnal) {
			if(this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_SELECTOR_BOOBS_ID))
				array.push(SKILL_ENEMY_PETTING_SELECTOR_BOOBS_ID);
			if(this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_BOOBS_ID))
				array.push(SKILL_ENEMY_PETTING_BOOBS_ID);
			if(this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_NIPPLES_ID))
				array.push(SKILL_ENEMY_PETTING_NIPPLES_ID);
			if(!pussyInserted) {
				if(this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_SELECTOR_PUSSY_ID))
					array.push(SKILL_ENEMY_PETTING_SELECTOR_PUSSY_ID);
			}
		}
		else if(isUsingMouth) {
			if(this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_SELECTOR_BOOBS_ID))
				array.push(SKILL_ENEMY_PETTING_SELECTOR_BOOBS_ID);
			if(this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_BOOBS_ID))
				array.push(SKILL_ENEMY_PETTING_BOOBS_ID);
			if(this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_NIPPLES_ID))
				array.push(SKILL_ENEMY_PETTING_NIPPLES_ID);
		}
		
		if(this.currentPercentOfOrgasm(true) < 66) {
			if(this._aiTalkSightSkills)
				array = array.concat(this._aiTalkSightSkills);
		}
		
		while(array.length > 0 && !success) {
			let index = Math.randomInt(array.length);
			let skillId = array.splice(index,1)[0];
			success = this.meetsSkillConditionsEval($dataSkills[skillId], target);
			if(success) {
				this.useAISkill(skillId,target);
				this.setUsedSkillThisTurn(true);
				return;
			}
		}
	}
	else if(!pussyInserted || !analInserted || !mouthInserted) {
		let array = [];
		if(this.canInsertPussy(target) && this.weaknessToPussy() >= 1)
			array.push(SKILL_ENEMY_POSEJOIN_TRAINER_RINKAN_PUSSY_ID);
		if(this.canInsertAnal(target) && this.weaknessToAnal() >= 1)
			array.push(SKILL_ENEMY_POSEJOIN_TRAINER_RINKAN_ANAL_ID);
		if(this.canInsertMouth(target) && this.weaknessToBlowjob() >= 1)
			array.push(SKILL_ENEMY_POSEJOIN_TRAINER_RINKAN_MOUTH_ID);
		
		if(array.length > 0) {
			let index = Math.randomInt(array.length);
			let skillId = array.splice(index,1)[0];
			this.useAISkill(skillId,target);
			this.setUsedSkillThisTurn(true);
			return;
		}
	
	}
	
	this.genericPettingTalkSight(target);
	return;
};

//Defeated Level 1 battle ai
Game_Enemy.prototype.enemyBattleAIDefeatedLevel1 = function(target) {
	if(this.usedSkillThisTurn())
		return;
		
	//this._lastAITarget = BattleManager._targets[0];
	this._lastAITarget = $gameActors.actor(ACTOR_KARRYN_ID);
	let insertedIntoHand = this.isUsingBodySlotPenis(RIGHT_HAND_ID) || this.isUsingBodySlotPenis(LEFT_HAND_ID);
	let insertedIntoOther = this.isUsingBodySlotPenis(OTHER_1_ID) || this.isUsingBodySlotPenis(OTHER_2_ID) || this.isUsingBodySlotPenis(OTHER_3_ID) || this.isUsingBodySlotPenis(OTHER_4_ID);
	
	//First: Check if using mouth
	if(this.isUsingBodySlotPenis(MOUTH_ID)) {
		if(this.usePoseSkill(target))
			return;
	}
	//Second: Check if mouth is being used
	if((insertedIntoHand || insertedIntoOther) && this.canInsertMouth(target) && this.weaknessToBlowjob() >= 1) {
		this.useAISkill(SKILL_ENEMY_POSEJOIN_DEFEAT_LV1_MOUTH_ID,target);
		return;
	}
	//Third: Check if using right hand or left hand
	if(insertedIntoHand) {
		if(Math.randomInt(100) < this.currentPercentOfOrgasm(true)) {
			if(this.usePoseSkill(target))
				return;
		}
		this.genericPettingTalkSight(target);
		return;
	}
	else if(insertedIntoOther) {
	//Fourth: Check if right hand or left hand is free
		if(this.canInsertRightHand(target) && (this.isUsingBodySlotPenis(OTHER_2_ID) || this.isUsingBodySlotPenis(OTHER_3_ID))) {
			this.useAISkill(SKILL_ENEMY_POSEJOIN_DEFEAT_LV1_RIGHT_HJ_ID,target);
			return;
		}
		else if(this.canInsertLeftHand(target) && (this.isUsingBodySlotPenis(OTHER_1_ID) || this.isUsingBodySlotPenis(OTHER_4_ID))) {
			this.useAISkill(SKILL_ENEMY_POSEJOIN_DEFEAT_LV1_LEFT_HJ_ID,target);
			return;
		}
	}
	//Fifth: Insert into Other1, Other2, Other3 if they are free and not already in one of them
	//else, grope/talk
	if(insertedIntoOther) {
		this.defeatedLevel1_PettingTalkSight(target);
		return;
	}
	else {
		let skillArray = [];
		if(target.canGetOther1InsertedNone()) skillArray.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV1_OTHER1_ID);
		if(target.canGetOther2InsertedNone()) skillArray.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV1_OTHER2_ID);
		if(target.canGetOther3InsertedNone()) skillArray.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV1_OTHER3_ID);
		if(target.canGetOther4InsertedNone()) skillArray.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV1_OTHER4_ID);
		
		if(skillArray.length > 0) {
			BattleManager.pullOutEnemy(this);
			let ranNum = Math.randomInt(skillArray.length);
			this.useAISkill(skillArray[ranNum],target);
			return;
		}
	}
};

//Defeated Level 2 battle ai
Game_Enemy.prototype.enemyBattleAIDefeatedLevel2 = function(target) {
	if(this.usedSkillThisTurn())
		return;
		
	//this._lastAITarget = BattleManager._targets[0];
	this._lastAITarget = $gameActors.actor(ACTOR_KARRYN_ID);
	let pussyInserted = target.pussySexPoseSkillsIsEnabled();
	let analInserted = target.analSexPoseSkillsIsEnabled();
	let isUsingPussy = this.isUsingBodySlotPenis(PUSSY_ID);
	let isUsingAnal = this.isUsingBodySlotPenis(ANAL_ID);
	let insertedIntoOther = this.isUsingBodySlotPenis(OTHER_1_ID) || this.isUsingBodySlotPenis(OTHER_2_ID) || this.isUsingBodySlotPenis(OTHER_3_ID) || this.isUsingBodySlotPenis(OTHER_4_ID);
	
	//First: Check if using holes
	if(isUsingPussy || isUsingAnal) {
		let array = [];
		if(this.getPoseSkills()) array = this.getPoseSkills().slice(0);
		let success = false;
		
		if(isUsingAnal || (isUsingPussy && !isUsingAnal)) {
			if(!this._aiPettingSkills) {}
			else {
				if(this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_SELECTOR_BUTT_ID))
					array.push(SKILL_ENEMY_PETTING_SELECTOR_BUTT_ID);
				if(this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_SELECTOR_MOUTH_ID))
					array.push(SKILL_ENEMY_PETTING_SELECTOR_MOUTH_ID);
				if(this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_SELECTOR_BOOBS_ID) || this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_SELECTOR_BOOBS_DOGGY_ID))
					array.push(SKILL_ENEMY_PETTING_SELECTOR_BOOBS_ID);
			}
			
			if(this._aiPettingSkills.includes(SKILL_ENEMY_SPANKING_SELECTOR_ID) || this.hasAngryPrefix()) {
				array.push(SKILL_ENEMY_SPANKING_SELECTOR_ID);
				array.push(SKILL_ENEMY_SPANKING_SELECTOR_ID);
			}
			
			for(let i = 0; i < this.sadismLvl(); ++i)
				array.push(SKILL_ENEMY_SPANKING_SELECTOR_ID);
		}
		
		while(array.length > 0 && !success) {
			let index = Math.randomInt(array.length);
			let skillId = array.splice(index,1)[0];
			success = this.meetsSkillConditionsEval($dataSkills[skillId], target);
			if(success) {
				this.useAISkill(skillId,target);
				this.setUsedSkillThisTurn(true);
				return;
			}
		}
	}
	//Second: Check if holes can be inserted
	else if(insertedIntoOther && ((this.canInsertPussy(target) && this.weaknessToPussy() >= 1) || (this.canInsertAnal(target) && this.weaknessToAnal() >= 1))) {
		let array = [];
		if(this.canInsertPussy(target) && this.weaknessToPussy() >= 1)
			array.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV2_PUSSY_ID);
		if(this.canInsertAnal(target) && this.weaknessToAnal() >= 1)
			array.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV2_ANAL_ID);
		
		let index = Math.randomInt(array.length);
		let skillId = array.splice(index,1)[0];
		this.useAISkill(skillId,target);
		this.setUsedSkillThisTurn(true);
		return;
	}
	
	//Third: Insert into Other1, Other2, Other3 if they are free and not already in one of them
	//else, grope/talk
	if(insertedIntoOther) {
		this.defeatedLevel2_PettingTalkSight(target);
		return;
	}
	else {
		let skillArray = [];
		
		if(this.isSlimeType) {
			if(target.canGetOther1InsertedNone()) skillArray.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV2_OTHER1_SLIME_ID);
			if(target.canGetOther2InsertedNone()) skillArray.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV2_OTHER2_SLIME_ID);
			if(target.canGetOther3InsertedNone()) skillArray.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV2_OTHER3_SLIME_ID);
			if(target.canGetOther4InsertedNone()) skillArray.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV2_OTHER4_SLIME_ID);
		}
		else {
			if(target.canGetOther1InsertedNone()) skillArray.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV2_OTHER1_ID);
			if(target.canGetOther2InsertedNone()) skillArray.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV2_OTHER2_ID);
			if(target.canGetOther3InsertedNone()) skillArray.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV2_OTHER3_ID);
			if(target.canGetOther4InsertedNone()) skillArray.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV2_OTHER4_ID);
		}
		
		
		if(skillArray.length > 0) {
			BattleManager.pullOutEnemy(this);
			let ranNum = Math.randomInt(skillArray.length);
			this.useAISkill(skillArray[ranNum],target);
			return;
		}
	}
};

//Defeated Level 3 battle ai
Game_Enemy.prototype.enemyBattleAIDefeatedLevel3 = function(target) {
	if(this.usedSkillThisTurn())
		return;
		
	//this._lastAITarget = BattleManager._targets[0];
	this._lastAITarget = $gameActors.actor(ACTOR_KARRYN_ID);
	let pussyInserted = target.pussySexPoseSkillsIsEnabled();
	let analInserted = target.analSexPoseSkillsIsEnabled();
	let boobsInserted = target.tittyFuckPoseSkillsIsEnabled();
	let mouthInserted = target.blowjobPoseSkillsIsEnabled();
	let isUsingPussy = this.isUsingBodySlotPenis(PUSSY_ID);
	let isUsingAnal = this.isUsingBodySlotPenis(ANAL_ID);
	let isUsingBoobs = this.isUsingBodySlotPenis(BOOBS_ID);
	let isUsingMouth = this.isUsingBodySlotPenis(MOUTH_ID);
	let insertedIntoOther = this.isUsingBodySlotPenis(OTHER_1_ID) || this.isUsingBodySlotPenis(OTHER_2_ID) || this.isUsingBodySlotPenis(OTHER_3_ID) || this.isUsingBodySlotPenis(OTHER_4_ID);
	
	//First: Check if using holes
	if(isUsingPussy || isUsingAnal || isUsingBoobs || isUsingMouth) {
		let array = [];
		if(this.getPoseSkills()) array = this.getPoseSkills().slice(0);
		let success = false;
		
		if(isUsingAnal || isUsingPussy) {
			if(!this._aiPettingSkills) {}
			else {
				if(!analInserted) {
					if(this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_SELECTOR_BUTT_ID))
						array.push(SKILL_ENEMY_PETTING_SELECTOR_BUTT_ID);
				}
				if(!mouthInserted) {
					if(this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_SELECTOR_MOUTH_ID))
						array.push(SKILL_ENEMY_PETTING_SELECTOR_MOUTH_ID);
				}
				if(!boobsInserted) {
					if(this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_SELECTOR_BOOBS_ID))
						array.push(SKILL_ENEMY_PETTING_SELECTOR_BOOBS_ID);
				}
			}
			if(isUsingAnal) {
				for(let i = 0; i < this.sadismLvl(); ++i)
					array.push(SKILL_ENEMY_SPANKING_SELECTOR_ID);
			}
		}
		else if(isUsingBoobs || isUsingMouth) {
			if(!this._aiPettingSkills) {}
			else {
				if(!mouthInserted) {
					if(this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_SELECTOR_MOUTH_ID))
						array.push(SKILL_ENEMY_PETTING_SELECTOR_MOUTH_ID);
				}
				if(!boobsInserted || isUsingBoobs) {
					if(this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_SELECTOR_BOOBS_ID))
						array.push(SKILL_ENEMY_PETTING_SELECTOR_BOOBS_ID);
				}
				
			}
		}
		
		while(array.length > 0 && !success) {
			let index = Math.randomInt(array.length);
			let skillId = array.splice(index,1)[0];
			success = this.meetsSkillConditionsEval($dataSkills[skillId], target);
			if(success) {
				this.useAISkill(skillId,target);
				this.setUsedSkillThisTurn(true);
				return;
			}
		}
	}
	//Second: Check if holes can be inserted
	else if(insertedIntoOther && ((this.canInsertPussy(target) && this.weaknessToPussy() >= 1) || (this.canInsertAnal(target) && this.weaknessToAnal() >= 1) || (!boobsInserted && this.canInsertMouth(target) && this.weaknessToBlowjob() >= 1) || (!mouthInserted && this.canInsertBoobs(target) && this.weaknessToTittyFuck() >= 1 && !this.isSlimeType))) {
		let array = [];
		if(this.canInsertPussy(target) && this.weaknessToPussy() >= 1)
			array.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV3_PUSSY_ID);
		if(this.canInsertAnal(target) && this.weaknessToAnal() >= 1)
			array.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV3_ANAL_ID);
		if(!boobsInserted && this.canInsertMouth(target) && this.weaknessToBlowjob() >= 1)
			array.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV3_MOUTH_ID);
		if(!mouthInserted && this.canInsertBoobs(target) && this.weaknessToTittyFuck() >= 1 && !this.isSlimeType)
			array.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV3_BOOBS_ID);

		
		if(array.length > 0) {
			let index = Math.randomInt(array.length);
			let skillId = array.splice(index,1)[0];
			this.useAISkill(skillId,target);
			this.setUsedSkillThisTurn(true);
		}
		return;
	}
	//Third: Insert into Other1, Other2, Other3 if they are free and not already in one of them
	//else, grope/talk
	if(insertedIntoOther) {
		this.defeatedLevel3_PettingTalkSight(target);
		return;
	}
	else {
		let skillArray = [];
		
		if(target.canGetOther1InsertedNone()) skillArray.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV3_OTHER1_ID);
		if(target.canGetOther2InsertedNone()) skillArray.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV3_OTHER2_ID);
		if(target.canGetOther3InsertedNone()) skillArray.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV3_OTHER3_ID);
		if(target.canGetOther4InsertedNone()) skillArray.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV3_OTHER4_ID);
		
		if(skillArray.length > 0) {
			BattleManager.pullOutEnemy(this);
			let ranNum = Math.randomInt(skillArray.length);
			this.useAISkill(skillArray[ranNum],target);
			return;
		}
	}
	

	
};

//Defeated Level 4 battle ai
Game_Enemy.prototype.enemyBattleAIDefeatedLevel4 = function(target) {
	if(this.usedSkillThisTurn())
		return;
		
	//this._lastAITarget = BattleManager._targets[0];
	this._lastAITarget = $gameActors.actor(ACTOR_KARRYN_ID);
	let pussyInserted = target.pussySexPoseSkillsIsEnabled();
	let analInserted = target.analSexPoseSkillsIsEnabled();
	let mouthInserted = target.blowjobPoseSkillsIsEnabled();
	let isUsingPussy = this.isUsingBodySlotPenis(PUSSY_ID);
	let isUsingAnal = this.isUsingBodySlotPenis(ANAL_ID);
	let isUsingMouth = this.isUsingBodySlotPenis(MOUTH_ID);
	let insertedIntoOther = this.isUsingBodySlotPenis(OTHER_1_ID) || this.isUsingBodySlotPenis(OTHER_2_ID) || this.isUsingBodySlotPenis(OTHER_3_ID) || this.isUsingBodySlotPenis(OTHER_4_ID);
	
	//First: Check if using holes
	if(isUsingPussy || isUsingAnal || isUsingMouth) {
		let array = [];
		if(this.getPoseSkills()) array = this.getPoseSkills().slice(0);
		let success = false;
		
		if(isUsingAnal || isUsingPussy) {
			if(!this._aiPettingSkills) {}
			else {
				if(!analInserted) {
					if(this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_SELECTOR_BUTT_ID))
						array.push(SKILL_ENEMY_PETTING_SELECTOR_BUTT_ID);
				}
				if(!pussyInserted) {
					if(this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_SELECTOR_PUSSY_ID))
						array.push(SKILL_ENEMY_PETTING_SELECTOR_PUSSY_ID);
				}
				
				if(!analInserted && isUsingPussy) {
					if(this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_SELECTOR_BOOBS_ID) || this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_SELECTOR_BOOBS_DOGGY_ID))
						array.push(SKILL_ENEMY_PETTING_SELECTOR_BOOBS_ID);
					if(!mouthInserted) {
						if(this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_SELECTOR_MOUTH_ID))
							array.push(SKILL_ENEMY_PETTING_SELECTOR_MOUTH_ID);
					}
				}
				else if(!pussyInserted && analInserted) {
					if(this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_SELECTOR_BOOBS_ID) || this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_SELECTOR_BOOBS_DOGGY_ID))
						array.push(SKILL_ENEMY_PETTING_SELECTOR_BOOBS_ID);
					if(!mouthInserted) {
						if(this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_SELECTOR_MOUTH_ID))
							array.push(SKILL_ENEMY_PETTING_SELECTOR_MOUTH_ID);
					}
				}
			}
			if(isUsingAnal || (isUsingPussy && !analInserted)) {
				if(this._aiPettingSkills.includes(SKILL_ENEMY_SPANKING_SELECTOR_ID) || this.sadismLvl() >= 1 || this.hasAngryPrefix()) {
					array.push(SKILL_ENEMY_SPANKING_SELECTOR_ID);
					array.push(SKILL_ENEMY_SPANKING_SELECTOR_ID);
				}
			}
		}
		
		while(array.length > 0 && !success) {
			let index = Math.randomInt(array.length);
			let skillId = array.splice(index,1)[0];
			success = this.meetsSkillConditionsEval($dataSkills[skillId], target);
			if(success) {
				this.useAISkill(skillId,target);
				this.setUsedSkillThisTurn(true);
				return;
			}
		}
	}
	//Second: Check if holes can be inserted
	else if(insertedIntoOther && ((this.canInsertPussy(target) && this.weaknessToPussy() >= 1) || (this.canInsertAnal(target) && this.weaknessToAnal() >= 1) || (this.canInsertMouth(target) && this.weaknessToBlowjob() >= 1))) {
		let array = [];
		if(this.canInsertPussy(target) && this.weaknessToPussy() >= 1)
			array.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV4_PUSSY_ID);
		if(this.canInsertAnal(target) && this.weaknessToAnal() >= 1)
			array.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV4_ANAL_ID);
		if(this.canInsertMouth(target) && this.weaknessToBlowjob() >= 1)
			array.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV4_MOUTH_ID);

		
		if(array.length > 0) {
			let index = Math.randomInt(array.length);
			let skillId = array.splice(index,1)[0];
			this.useAISkill(skillId,target);
			this.setUsedSkillThisTurn(true);
			return;
		}
	}
	//Third: Insert into Other1, Other2, Other3 if they are free and not already in one of them
	//else, grope/talk
	if(insertedIntoOther) {
		this.defeatedLevel4_PettingTalkSight(target);
		return;
	}
	else {
		let skillArray = [];
		
		if(target.canGetOther1InsertedNone()) skillArray.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV4_OTHER1_ID);
		if(target.canGetOther2InsertedNone()) skillArray.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV4_OTHER2_ID);
		if(target.canGetOther3InsertedNone()) skillArray.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV4_OTHER3_ID);
		if(target.canGetOther4InsertedNone()) skillArray.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV4_OTHER4_ID);
		
		if(skillArray.length > 0) {
			BattleManager.pullOutEnemy(this);
			let ranNum = Math.randomInt(skillArray.length);
			this.useAISkill(skillArray[ranNum],target);
			return;
		}
	}
	

	
};

//Defeated Level 5 battle ai
Game_Enemy.prototype.enemyBattleAIDefeatedLevel5 = function(target) {
	if(this.usedSkillThisTurn())
		return;
		
	//this._lastAITarget = BattleManager._targets[0];
	this._lastAITarget = $gameActors.actor(ACTOR_KARRYN_ID);
	let pussyInserted = target.pussySexPoseSkillsIsEnabled();
	let analInserted = target.analSexPoseSkillsIsEnabled();
	let mouthInserted = target.blowjobPoseSkillsIsEnabled();
	let boobsInserted = target.tittyFuckPoseSkillsIsEnabled();
	let rightHandInserted = target.rightHandjobPoseSkillsIsEnabled();
	let leftHandInserted = target.leftHandjobPoseSkillsIsEnabled();
	let isUsingPussy = this.isUsingBodySlotPenis(PUSSY_ID);
	let isUsingAnal = this.isUsingBodySlotPenis(ANAL_ID);
	let isUsingMouth = this.isUsingBodySlotPenis(MOUTH_ID);
	let isUsingBoobs = this.isUsingBodySlotPenis(BOOBS_ID);
	let isUsingRightHand = this.isUsingBodySlotPenis(RIGHT_HAND_ID);
	let isUsingLeftHand = this.isUsingBodySlotPenis(LEFT_HAND_ID);
	let insertedIntoOther = this.isUsingBodySlotPenis(OTHER_1_ID) || this.isUsingBodySlotPenis(OTHER_2_ID) || this.isUsingBodySlotPenis(OTHER_3_ID) || this.isUsingBodySlotPenis(OTHER_4_ID);
	
	let isSlime = this.isSlimeType;
	
	//First: Check if using holes
	if(isUsingPussy || isUsingAnal || isUsingMouth || isUsingBoobs || isUsingRightHand || isUsingLeftHand) {
		let array = [];
		if(this.getPoseSkills()) array = this.getPoseSkills().slice(0);
		let success = false;
		
		if(isUsingAnal || isUsingPussy) {
			if(!this._aiPettingSkills) {}
			else {
				if(isUsingPussy) {
					if(this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_SELECTOR_BUTT_ID))
						array.push(SKILL_ENEMY_PETTING_SELECTOR_BUTT_ID);
					if(this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_SELECTOR_PUSSY_ID))
						array.push(SKILL_ENEMY_PETTING_SELECTOR_PUSSY_ID);
				}
				if(isUsingAnal) {
					if(this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_SELECTOR_PUSSY_ID))
						array.push(SKILL_ENEMY_PETTING_SELECTOR_PUSSY_ID);
				}
			}
		}
		else if(isUsingBoobs) {
			if(!mouthInserted) {
				if(this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_SELECTOR_MOUTH_ID))
					array.push(SKILL_ENEMY_PETTING_SELECTOR_MOUTH_ID);
			}
		}
		else if(isUsingMouth) {
			if(!boobsInserted) {
				if(this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_SELECTOR_BOOBS_ID) || this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_SELECTOR_BOOBS_DOGGY_ID))
					array.push(SKILL_ENEMY_PETTING_SELECTOR_BOOBS_ID);
			}
		}
		else if(isUsingRightHand || isUsingLeftHand) {
			if(!mouthInserted) {
				if(this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_SELECTOR_MOUTH_ID))
					array.push(SKILL_ENEMY_PETTING_SELECTOR_MOUTH_ID);
			}
			if(!boobsInserted) {
				if(this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_SELECTOR_BOOBS_ID) || this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_SELECTOR_BOOBS_DOGGY_ID))
					array.push(SKILL_ENEMY_PETTING_SELECTOR_BOOBS_ID);
			}
		}
		
		while(array.length > 0 && !success) {
			let index = Math.randomInt(array.length);
			let skillId = array.splice(index,1)[0];
			success = this.meetsSkillConditionsEval($dataSkills[skillId], target);
			if(success) {
				this.useAISkill(skillId,target);
				this.setUsedSkillThisTurn(true);
				return;
			}
		}
	}
	//Second: Check if holes can be inserted
	else if(insertedIntoOther && ((this.canInsertPussy(target) && this.weaknessToPussy() >= 1) || (this.canInsertAnal(target) && this.weaknessToAnal() >= 1) || (this.canInsertMouth(target) && this.weaknessToBlowjob() >= 1) || (this.canInsertBoobs(target) && this.weaknessToTittyFuck() >= 1) || (this.canInsertRightHand(target) && this.weaknessToHandjob() >= 1) || (this.canInsertLeftHand(target) && this.weaknessToHandjob() >= 1))) {
		let array = [];
		if(this.canInsertPussy(target) && this.weaknessToPussy() >= 1)
			array.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV5_PUSSY_ID);
		if(this.canInsertAnal(target) && this.weaknessToAnal() >= 1)
			array.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV5_ANAL_ID);
		if(this.canInsertMouth(target) && this.weaknessToBlowjob() >= 1)
			array.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV5_MOUTH_ID);
		if(this.canInsertBoobs(target) && this.weaknessToTittyFuck() >= 1 && !isSlime)
			array.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV5_BOOBS_ID);
		if(this.canInsertRightHand(target) && this.weaknessToHandjob() >= 1 && !isSlime)
			array.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV5_RIGHT_HJ_ID);
		if(this.canInsertLeftHand(target) && this.weaknessToHandjob() >= 1 && !isSlime)
			array.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV5_LEFT_HJ_ID);

		
		if(array.length > 0) {
			let index = Math.randomInt(array.length);
			let skillId = array.splice(index,1)[0];
			this.useAISkill(skillId,target);
			this.setUsedSkillThisTurn(true);
			return;
		}
	}
	//Third: Insert into Other1, Other2, Other3 if they are free and not already in one of them
	//else, grope/talk
	if(insertedIntoOther) {
		this.defeatedLevel5_PettingTalkSight(target);
		return;
	}
	else {
		let skillArray = [];
		
		if(this.isSlimeType) {
			if(target.canGetOther1InsertedNone()) skillArray.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV5_OTHER1_SLIME_ID);
			if(target.canGetOther2InsertedNone()) skillArray.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV5_OTHER2_SLIME_ID);
			if(target.canGetOther3InsertedNone()) skillArray.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV5_OTHER3_SLIME_ID);
			if(target.canGetOther4InsertedNone()) skillArray.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV5_OTHER4_SLIME_ID);
		}
		else {
			if(target.canGetOther1InsertedNone()) skillArray.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV5_OTHER1_ID);
			if(target.canGetOther2InsertedNone()) skillArray.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV5_OTHER2_ID);
			if(target.canGetOther3InsertedNone()) skillArray.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV5_OTHER3_ID);
			if(target.canGetOther4InsertedNone()) skillArray.push(SKILL_ENEMY_POSEJOIN_DEFEAT_LV5_OTHER4_ID);
		}
		
		if(skillArray.length > 0) {
			BattleManager.pullOutEnemy(this);
			let ranNum = Math.randomInt(skillArray.length);
			this.useAISkill(skillArray[ranNum],target);
			return;
		}
	}
};


//Defeated Guard battle ai
Game_Enemy.prototype.enemyBattleAIDefeatedGuard = function(target) {
	//this._lastAITarget = BattleManager._targets[0];
	this._lastAITarget = $gameActors.actor(ACTOR_KARRYN_ID);
	let pussyInserted = target.pussySexPoseSkillsIsEnabled();
	let analInserted = target.analSexPoseSkillsIsEnabled();
	let boobsInserted = target.tittyFuckPoseSkillsIsEnabled();
	let mouthInserted = target.blowjobPoseSkillsIsEnabled();
	let isUsingPussy = this.isUsingBodySlotPenis(PUSSY_ID);
	let isUsingAnal = this.isUsingBodySlotPenis(ANAL_ID);
	let isUsingBoobs = this.isUsingBodySlotPenis(BOOBS_ID);
	let isUsingMouth = this.isUsingBodySlotPenis(MOUTH_ID);
	
	if(this.usedSkillThisTurn())
		return;
	
	if(isUsingPussy || isUsingAnal || isUsingBoobs || isUsingMouth) {
		if(this.usePoseSkill(target))
			return;
	}
	else if(this.canInsertPussy(target) || this.canInsertAnal(target) || this.canInsertMouth(target) || this.canInsertBoobs(target)) {
		let array = [];
		if(this.canInsertPussy(target) && this.weaknessToPussy() >= 1)
			array.push(SKILL_ENEMY_POSEJOIN_DEFEAT_GUARD_PUSSY_ID);
		if(this.canInsertAnal(target) && this.weaknessToAnal() >= 1)
			array.push(SKILL_ENEMY_POSEJOIN_DEFEAT_GUARD_ANAL_ID);
		if(this.canInsertMouth(target) && this.weaknessToBlowjob() >= 1)
			array.push(SKILL_ENEMY_POSEJOIN_DEFEAT_GUARD_MOUTH_ID);
		if(this.canInsertBoobs(target) && this.weaknessToTittyFuck() >= 1)
			array.push(SKILL_ENEMY_POSEJOIN_DEFEAT_GUARD_BOOBS_ID);
		
		if(array.length > 0) {
			let index = Math.randomInt(array.length);
			let skillId = array.splice(index,1)[0];
			this.useAISkill(skillId,target);
			this.setUsedSkillThisTurn(true);
			return;
		}
	}
	
	this.defeatedGuard_PettingTalkSight(target);
	
};

//Cargill AI
Game_Enemy.prototype.enemyBattleAICargill = function() {
	//let target = BattleManager._targets[0];
	//this._lastAITarget = BattleManager._targets[0];
	let target = $gameActors.actor(ACTOR_KARRYN_ID);
	this._lastAITarget = $gameActors.actor(ACTOR_KARRYN_ID);
	
	let slime = $gameTroop.members()[0];
	let rogue = $gameTroop.members()[1];
	let nerd = $gameTroop.members()[2];
	
	let hasEnoughEnergy = this.mp >= 10;
	let rogueIsDead = rogue.isDead();
	let nerdIsDead = nerd.isDead();
	let slimeIsHurt = slime.isSlammedThisBattle();
	let slimeIsSlightlyHurt = slime.isCleavedThisBattle() || slime.isSkeweredThisBattle();
	let karrynIsNotHorny = !target.isHorny;
	let karrynIsInSexPose = target.isInSexPose();
	
	const ACTION_CARGILL_SIGHT = 1;
	const ACTION_CARGILL_TALK = 2;
	const ACTION_CARGILL_HEAL_SLIME = 3;
	const ACTION_CARGILL_REVIVE_ROGUE = 4;
	const ACTION_CARGILL_REVIVE_NERD = 5;
	const ACTION_CARGILL_DEBUFF_KARRYN = 6;
	
	if(this.isChargedUp()) {
		if(this._cargillAction === ACTION_CARGILL_DEBUFF_KARRYN) {
			this.useAISkill(SKILL_CARGILL_DEBUFF_ID,target);
		}
		else if(this._cargillAction === ACTION_CARGILL_HEAL_SLIME) {
			this._lastAITarget = slime;
			this.useAISkill(SKILL_CARGILL_SLIMEHEAL_ID,slime);
		}
		else if(this._cargillAction === ACTION_CARGILL_REVIVE_ROGUE) {
			this._lastAITarget = rogue;
			if(!rogue.hasEjaculationStock()) rogue._ejaculationStock = 1;
			rogue._mp += Math.randomInt(8) + 8;
			rogue._mp = rogue._mp.clamp(0, rogue.mmp);
			this.useAISkill(SKILL_CARGILL_REVIVE_ID,rogue);
		}
		else if(this._cargillAction === ACTION_CARGILL_REVIVE_NERD) {
			this._lastAITarget = nerd;
			if(!nerd.hasEjaculationStock()) nerd._ejaculationStock = 1;
			nerd._mp += Math.randomInt(10) + 15;
			nerd._mp = nerd._mp.clamp(0, nerd.mmp);
			this.useAISkill(SKILL_CARGILL_REVIVE_ID,nerd);
		}
	
	}
	else {
		let nextActionArray = [ ACTION_CARGILL_SIGHT, ACTION_CARGILL_SIGHT ]
		
		if(hasEnoughEnergy) {
			if(!karrynIsInSexPose) {
				if(slimeIsHurt) {
					nextActionArray.push(ACTION_CARGILL_HEAL_SLIME);
					nextActionArray.push(ACTION_CARGILL_HEAL_SLIME);
					nextActionArray.push(ACTION_CARGILL_HEAL_SLIME);
					if(slime.hasLessThanOneThirdStamina()) {
						nextActionArray.push(ACTION_CARGILL_HEAL_SLIME);
						nextActionArray.push(ACTION_CARGILL_HEAL_SLIME);
						nextActionArray.push(ACTION_CARGILL_HEAL_SLIME);
					}
				}
				else if(slimeIsSlightlyHurt) {
					nextActionArray.push(ACTION_CARGILL_HEAL_SLIME);
					if(slime.hasLessThanOneThirdStamina()) {
						nextActionArray.push(ACTION_CARGILL_HEAL_SLIME);
					}
				}
			}
			
			if(rogueIsDead) {
				nextActionArray.push(ACTION_CARGILL_REVIVE_ROGUE);
				nextActionArray.push(ACTION_CARGILL_REVIVE_ROGUE);
				nextActionArray.push(ACTION_CARGILL_REVIVE_ROGUE);
			}
			
			if(nerdIsDead) {
				nextActionArray.push(ACTION_CARGILL_REVIVE_NERD);
				nextActionArray.push(ACTION_CARGILL_REVIVE_NERD);
				nextActionArray.push(ACTION_CARGILL_REVIVE_NERD);
			}
			
			if(karrynIsNotHorny) {
				nextActionArray.push(ACTION_CARGILL_DEBUFF_KARRYN);
				nextActionArray.push(ACTION_CARGILL_DEBUFF_KARRYN);
				nextActionArray.push(ACTION_CARGILL_DEBUFF_KARRYN);
			}
			
			if(!karrynIsInSexPose) {
				if(!target.isStateAffected(STATE_WEAKEN_ID)) 
					nextActionArray.push(ACTION_CARGILL_DEBUFF_KARRYN);
				if(!target.isStateAffected(STATE_POISON_ID)) 
					nextActionArray.push(ACTION_CARGILL_DEBUFF_KARRYN);
			}
			else {
				nextActionArray.push(ACTION_CARGILL_SIGHT);
			}
		}
		
		let nextAction = nextActionArray[Math.randomInt(nextActionArray.length)];
		switch(nextAction) {
			case ACTION_CARGILL_SIGHT:
				this.useAISkill(SKILL_ENEMY_STARE_SELECTOR_RANDOM_ID,target);
				break;	
			case ACTION_CARGILL_TALK:
				this.useAISkill(SKILL_ENEMY_TALK_SELECTOR_RANDOM_ID,target);
				break;	
			case ACTION_CARGILL_HEAL_SLIME:
				this.useAISkill(SKILL_CARGILL_CHARGE_ID,target);
				this._cargillAction = ACTION_CARGILL_HEAL_SLIME;
				break;	
			case ACTION_CARGILL_REVIVE_ROGUE:
				this.useAISkill(SKILL_CARGILL_CHARGE_ID,target);
				this._cargillAction = ACTION_CARGILL_REVIVE_ROGUE;
				break;		
			case ACTION_CARGILL_REVIVE_NERD:
				this.useAISkill(SKILL_CARGILL_CHARGE_ID,target);
				this._cargillAction = ACTION_CARGILL_REVIVE_NERD;
				break;		
			case ACTION_CARGILL_DEBUFF_KARRYN:
				this.useAISkill(SKILL_CARGILL_CHARGE_ID,target);
				this._cargillAction = ACTION_CARGILL_DEBUFF_KARRYN;
				break;		
		}
	}
	
	this._mp += 3;
	this._mp = this._mp.clamp(0, this.mmp);
};

//Yasu AI
Game_Enemy.prototype.enemyBattleAIYasu = function() {
	let target = $gameActors.actor(ACTOR_KARRYN_ID);
	let resetAttackPattern = true;
	let mentalSkill = false;
	let actionSkill = false;
	let usePoseSkill = false;
	
	//Revitalize highest priority
	if(this.currentPercentOfStamina() <= 40 && this.energy > this.skillCost_yasuRevitalize() && this.meetsSkillConditions($dataSkills[SKILL_YASU_REVITALIZE_ID])) {
		this.useAISkill(SKILL_YASU_REVITALIZE_ID, target);
	}
	else {
		if(target.isInMasturbationPose()) {
			if(this.isAngry && this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_SPANKING_SELECTOR_ID], target)) {
				mentalSkill = SKILL_YASU_KI_ID;
				actionSkill = SKILL_ENEMY_SPANKING_SELECTOR_ID;
			}
			else if(this.isHorny) {
				mentalSkill = SKILL_ENEMY_STARE_SELECTOR_RANDOM_ID;
				actionSkill = SKILL_ENEMY_PETTING_SELECTOR_RANDOM_ID;
			}
			else {
				mentalSkill = SKILL_ENEMY_STARE_SELECTOR_RANDOM_ID;
			}
		}
		else if(target.isInDownPose()) {
			if(this.isAngry && this.customReq_downWeaponKick(target)) {
				actionSkill = SKILL_ENEMY_WEAPON_KICK_DOWNED_ID;
			}
			else if(this.isAngry && this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_SPANKING_SELECTOR_ID], target)) {
				mentalSkill = SKILL_YASU_KI_ID;
				actionSkill = SKILL_ENEMY_SPANKING_SELECTOR_ID;
			}
			else if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_PETTING_SELECTOR_RANDOM_ID], target)) {
				if(this.isHorny)
					mentalSkill = SKILL_ENEMY_STARE_SELECTOR_RANDOM_ID;
				else
					mentalSkill = SKILL_YASU_KI_ID;
				
				actionSkill = SKILL_ENEMY_PETTING_SELECTOR_RANDOM_ID;
			}
			else if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_CLOTHES_PULL_ID], target)) {
				if(this.isHorny)
					mentalSkill = SKILL_YASU_KI_ID;
				else
					mentalSkill = SKILL_ENEMY_STARE_SELECTOR_RANDOM_ID;
				
				actionSkill = SKILL_ENEMY_CLOTHES_PULL_ID;
			}
			else {
				mentalSkill = SKILL_ENEMY_STARE_SELECTOR_RANDOM_ID;
			}
		}
		else if(target.isInSexPose()) {
			if(this.isHorny)
				mentalSkill = SKILL_ENEMY_STARE_SELECTOR_RANDOM_ID;
			else {
				if(Math.randomInt(70) > this.currentPercentOfArousal(true))
					mentalSkill = SKILL_YASU_EOTM_ID;
				else
					mentalSkill = SKILL_YASU_KI_ID;
			}
			
			actionSkill = SKILL_ENEMY_PETTING_SELECTOR_RANDOM_ID;
			
			if(Math.randomInt(100) < Math.min(this.currentPercentOfArousal(true),95))
				usePoseSkill = true;
		}
		//Combat
		else {
			if(this.isAngry) {
				if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_SPANKING_SELECTOR_ID], target)) {
					mentalSkill = SKILL_YASU_KI_ID;
					actionSkill = SKILL_ENEMY_SPANKING_SELECTOR_ID;
				}
				else {
					mentalSkill = SKILL_YASU_KI_ID;
					if(target.isBluntStance())
						actionSkill = SKILL_YASU_SLASH_ATTACK_ID;
					else if(target.isPierceStance())
						actionSkill = SKILL_YASU_BLUNT_ATTACK_ID;
					else
						actionSkill = SKILL_YASU_PIERCE_ATTACK_ID;
				}
			}
			else if(this.isHorny) {
				if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_PETTING_SELECTOR_RANDOM_ID], target) && Math.random() < 0.6) {
					mentalSkill = SKILL_ENEMY_STARE_SELECTOR_RANDOM_ID;
					actionSkill = SKILL_ENEMY_PETTING_SELECTOR_RANDOM_ID;
				}
				else if(this.meetsSkillConditionsEval($dataSkills[SKILL_ENEMY_CLOTHES_PULL_ID], target) && Math.random() < 0.6) {
					mentalSkill = SKILL_YASU_KI_ID;
					actionSkill = SKILL_ENEMY_CLOTHES_PULL_ID;
				}
				else {
					mentalSkill = SKILL_ENEMY_STARE_SELECTOR_RANDOM_ID;
					
					if(target.isBluntStance())
						actionSkill = SKILL_YASU_SLASH_ATTACK_ID;
					else if(target.isPierceStance())
						actionSkill = SKILL_YASU_BLUNT_ATTACK_ID;
					else
						actionSkill = SKILL_YASU_PIERCE_ATTACK_ID;
				}
			}
			else {
				let attackType = $gameParty._yasuAttackPattern % 3;
				
				if(attackType === 1) {
					mentalSkill = SKILL_YASU_FOCUS_ID;
					actionSkill = SKILL_ENEMY_DEFENSIVE_STANCE_ID;
				}
				else if(attackType === 2) {
					mentalSkill = SKILL_YASU_EOTM_ID;
					actionSkill = SKILL_YASU_SPECIAL_ATTACK_ID;
				}
				else {
					mentalSkill = SKILL_YASU_KI_ID;
					
					if(target.isBluntStance())
						actionSkill = SKILL_YASU_SLASH_ATTACK_ID;
					else if(target.isPierceStance())
						actionSkill = SKILL_YASU_BLUNT_ATTACK_ID;
					else
						actionSkill = SKILL_YASU_PIERCE_ATTACK_ID;
				}
				
				resetAttackPattern = false;
			}
			
		}
		
		if(this.currentPercentOfEnergy() <= 50 && this.meetsSkillConditions($dataSkills[SKILL_YASU_HEALING_THOUGHTS_ID]))
			mentalSkill = SKILL_YASU_HEALING_THOUGHTS_ID;
	}


	if(mentalSkill) {
		this.useAISkill(mentalSkill, target);
		
		if(mentalSkill === SKILL_YASU_HEALING_THOUGHTS_ID) {
			$gameParty._yasuHealingThoughtsUsageCount++;
		}
	}
	
	if(usePoseSkill && this.usePoseSkill(target)) {
		actionSkill = false;
	}
	
	if(actionSkill) {
		if(actionSkill === SKILL_YASU_SPECIAL_ATTACK_ID) {
			if(this.skillCost_yasuSpecialAttack() > this.energy)
				actionSkill = SKILL_YASU_SLASH_ATTACK_ID;
		}
		
		
		this.useAISkill(actionSkill, target);
		
		if(actionSkill === SKILL_YASU_REVITALIZE_ID) {
			$gameParty._yasuRevitalizeUsageCount++;
		}
		if(actionSkill === SKILL_YASU_SPECIAL_ATTACK_ID) {
			$gameParty._yasuSpecialAttackUsageCount++;
		}
	}
	
	if(resetAttackPattern) {
		$gameParty._yasuAttackPattern = 0;
	}
	else {
		$gameParty._yasuAttackPattern++;
	}
};

/////////////////
// Joining Sex Pose
/////////////////

Game_Enemy.prototype.tryJoinSexPose = function(target, attempts) { 
	if(!this._aiPoseJoinSkills) return false;
	let success = false;

	let array = this._aiPoseJoinSkills.slice(0);
	
	while(array.length > 0 && !success && attempts > 0) {
		let index = Math.randomInt(array.length);
		let skillId = array.splice(index,1)[0];
		success = this.meetsSkillConditionsEval($dataSkills[skillId],target);
		if(success) {
			this.useAISkill(skillId, target);
			this.setUsedSkillThisTurn(true);
		}
		else attempts--;
	}
	
	return success;
};

//////////////////
// Starting Sex Pose
//////////////////

Game_Enemy.prototype.tryStartSexPose = function(target, attempts) { 
	if(!this._aiPoseStartSkills) return false;
	if(!target.isInReadyPose()) return false;
	
	//if(this.isPrisonerType && $gameTroop.isThereNonPrisonerTypeEnemyPresent()) 
	//	return false;
	
	let success = false;
	let array = this._aiPoseStartSkills.slice(0);
	while(array.length > 0 && !success && attempts > 0) {
		let index = Math.randomInt(array.length);
		let skillId = array.splice(index,1)[0];

		success = this.meetsSkillConditionsEval($dataSkills[skillId],target);
		if(success) {
			this.useAISkill(skillId, target);
			this.setUsedSkillThisTurn(true);
		}
		else attempts--;
	}
	return success;
};


//////////////////
// Upgrade Sex Pose
//////////////////

Game_Enemy.prototype.tryUpgradeSexPose = function(target, attempts) { 
	if(!this._aiPoseStartSkills) return false;
	if(!target.isInSexPose()) return false;
	
	let success = false;
	let array = this._aiPoseStartSkills.slice(0);
	while(array.length > 0 && !success && attempts > 0) {
		let index = Math.randomInt(array.length);
		let skillId = array.splice(index,1)[0];

		success = target.canUpgradeToPoseFromSkillId(skillId);
		if(success) {
			$gameTroop.aliveMembers().forEach(function(member) {
				if(member.isPoseMaster()) member.setPoseStatusHelper();
			});
			
			this.useAISkill(skillId, target);
			this.setUsedSkillThisTurn(true);
		}
		else attempts--;
	}
	return success;
};

////////////////
// Petting-Talk-Sight
/////////////////////

//Try to use all petting skills, if it doesn't work then work on to talk-sight
Game_Enemy.prototype.genericPettingTalkSight = function(target, attempts) { 
	if(attempts == void 0) attempts = -1;
	
	let skipTryingPettingSkills = false;
	if(!this.isHorny && target.isInMasturbationPose()) {
		skipTryingPettingSkills = Math.randomInt(100) < VAR_ENEMYAI_SKIP_PETTING_WHEN_KARRYN_ONANI_CHANCE;
	}
	
	if(attempts === -1 && !skipTryingPettingSkills) {
		if(this.tryAllPettingSkills(target)) return;
	}
	else if(!skipTryingPettingSkills) {
		if(this.tryPettingSkills(target, attempts)) return;
	}
	this.genericBattleAITalkSight(target);
};

Game_Enemy.prototype.defeatedLevel1_PettingTalkSight = function(target) { 
	let attempts = VAR_ENEMYAI_TRY_PETTING_ATTEMPTS;
	if(this.tryPettingSkills_defeatedLevel1(target, attempts)) return;
	this.genericBattleAITalkSight(target);
};
Game_Enemy.prototype.defeatedLevel2_PettingTalkSight = function(target) { 
	let attempts = VAR_ENEMYAI_TRY_PETTING_ATTEMPTS;
	if(this.tryPettingSkills_defeatedLevel2(target, attempts)) return;
	this.genericBattleAITalkSight(target);
};
Game_Enemy.prototype.defeatedLevel3_PettingTalkSight = function(target) { 
	let attempts = VAR_ENEMYAI_TRY_PETTING_ATTEMPTS;
	if(this.tryPettingSkills_defeatedLevel3(target, attempts)) return;
	this.genericBattleAITalkSight(target);
};
Game_Enemy.prototype.defeatedLevel4_PettingTalkSight = function(target) { 
	let attempts = VAR_ENEMYAI_TRY_PETTING_ATTEMPTS;
	if(this.tryPettingSkills_defeatedLevel4(target, attempts)) return;
	this.genericBattleAITalkSight(target);
};
Game_Enemy.prototype.defeatedLevel5_PettingTalkSight = function(target) { 
	let attempts = VAR_ENEMYAI_TRY_PETTING_ATTEMPTS;
	if(this.tryPettingSkills_defeatedLevel5(target, attempts)) return;
	this.genericBattleAITalkSight(target);
};
Game_Enemy.prototype.defeatedGuard_PettingTalkSight = function(target) { 
	let attempts = VAR_ENEMYAI_TRY_PETTING_ATTEMPTS;
	if(this.tryPettingSkills_defeatedGuard(target, attempts)) return;
	this.genericBattleAITalkSight(target);
};


/////////////
// Petting
////////////

Game_Enemy.prototype.tryPettingSkills = function(target, attempts) { 
	if(!this._aiPettingSkills) return false;
	let success = false;
	let array = this._aiPettingSkills.slice(0);
	
	while(array.length > 0 && !success && attempts > 0) {
		let index = Math.randomInt(array.length);
		let skillId = array.splice(index,1)[0];
		success = this.meetsSkillConditionsEval($dataSkills[skillId],target);
		if(success) this.useAISkill(skillId,target);
		else attempts--;
	}
	
	return success;
};

Game_Enemy.prototype.tryPettingSkills_defeatedLevel1 = function(target, attempts) { 
	if(!this._aiPettingSkills) return false;
	let success = false;
	let array = this._aiPettingSkills.slice(0);
	
	if(!this.isMonstrousType) {
		array.push(SKILL_ENEMY_TALK_SELECTOR_RANDOM_JERKOFF_ID);
		array.push(SKILL_ENEMY_TALK_SELECTOR_RANDOM_JERKOFF_ID);
	}
	array.push(SKILL_ENEMY_STARE_SELECTOR_RANDOM_JERKOFF_ID);
	array.push(SKILL_ENEMY_STARE_SELECTOR_RANDOM_JERKOFF_ID);
	
	while(array.length > 0 && !success && attempts > 0) {
		let index = Math.randomInt(array.length);
		let skillId = array.splice(index,1)[0];
		success = this.meetsSkillConditionsEval($dataSkills[skillId],target);
		if(success) this.useAISkill(skillId,target);
		else attempts--;
	}
	
	return success;
};

Game_Enemy.prototype.tryPettingSkills_defeatedLevel2 = function(target, attempts) { 
	if(!this._aiPettingSkills) return false;
	let success = false;
	let array = this._aiPettingSkills.slice(0);
	
	let pussyInserted = target.pussySexPoseSkillsIsEnabled();
	let analInserted = target.analSexPoseSkillsIsEnabled();
	
	if(pussyInserted || analInserted) array = [];
	else {
		if(this._aiPettingSkills.includes(SKILL_ENEMY_SPANKING_SELECTOR_ID) || this.sadismLvl() >= 1 || this.hasAngryPrefix()) {
			array.push(SKILL_ENEMY_SPANKING_SELECTOR_ID);
			array.push(SKILL_ENEMY_SPANKING_SELECTOR_ID);
		}
	}
	
	if(!this.isMonstrousType) {
		array.push(SKILL_ENEMY_TALK_SELECTOR_RANDOM_JERKOFF_ID);
		array.push(SKILL_ENEMY_TALK_SELECTOR_RANDOM_JERKOFF_ID);
	}
	array.push(SKILL_ENEMY_STARE_SELECTOR_RANDOM_JERKOFF_ID);
	array.push(SKILL_ENEMY_STARE_SELECTOR_RANDOM_JERKOFF_ID);
	
	while(array.length > 0 && !success && attempts > 0) {
		let index = Math.randomInt(array.length);
		let skillId = array.splice(index,1)[0];
		success = this.meetsSkillConditionsEval($dataSkills[skillId],target);
		if(success) this.useAISkill(skillId,target);
		else attempts--;
	}
	
	return success;
};

Game_Enemy.prototype.tryPettingSkills_defeatedLevel3 = function(target, attempts) { 
	if(!this._aiPettingSkills) return false;
	let success = false;
	let array = this._aiPettingSkills.slice(0);
	
	let pussyInserted = target.pussySexPoseSkillsIsEnabled();
	let analInserted = target.analSexPoseSkillsIsEnabled();
	let boobsInserted = target.tittyFuckPoseSkillsIsEnabled();
	let mouthInserted = target.blowjobPoseSkillsIsEnabled();
	
	if(pussyInserted && analInserted) array = [];
	
	if(!pussyInserted) {
		if(this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_SELECTOR_PUSSY_ID))
			array.push(SKILL_ENEMY_PETTING_SELECTOR_PUSSY_ID);
		if(this._aiPettingSkills.includes(SKILL_ENEMY_TOY_INSERT_PENIS_DILDO_ID))
			array.push(SKILL_ENEMY_TOY_INSERT_PENIS_DILDO_ID);
	}
	if(!analInserted) {
		if(this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_SELECTOR_BUTT_ID))
			array.push(SKILL_ENEMY_PETTING_SELECTOR_BUTT_ID);
		if(this._aiPettingSkills.includes(SKILL_ENEMY_TOY_INSERT_ANAL_BEADS_ID))
			array.push(SKILL_ENEMY_TOY_INSERT_ANAL_BEADS_ID);
	}
	if(!mouthInserted && !boobsInserted && !pussyInserted) {
		if(this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_SELECTOR_MOUTH_ID))
			array.push(SKILL_ENEMY_PETTING_SELECTOR_MOUTH_ID);
	}
	if(!boobsInserted) {
		if(this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_SELECTOR_BOOBS_ID))
			array.push(SKILL_ENEMY_PETTING_SELECTOR_BOOBS_ID);
	}
	
	if(!this.isMonstrousType) {
		array.push(SKILL_ENEMY_TALK_SELECTOR_RANDOM_JERKOFF_ID);
		array.push(SKILL_ENEMY_TALK_SELECTOR_RANDOM_JERKOFF_ID);
	}
	array.push(SKILL_ENEMY_STARE_SELECTOR_RANDOM_JERKOFF_ID);
	array.push(SKILL_ENEMY_STARE_SELECTOR_RANDOM_JERKOFF_ID);
	
	while(array.length > 0 && !success && attempts > 0) {
		let index = Math.randomInt(array.length);
		let skillId = array.splice(index,1)[0];
		success = this.meetsSkillConditionsEval($dataSkills[skillId],target);
		if(success) this.useAISkill(skillId,target);
		else attempts--;
	}
	
	return success;
};

Game_Enemy.prototype.tryPettingSkills_defeatedLevel4 = function(target, attempts) { 
	if(!this._aiPettingSkills) return false;
	let success = false;
	let array = this._aiPettingSkills.slice(0);
	
	let pussyInserted = target.pussySexPoseSkillsIsEnabled();
	let analInserted = target.analSexPoseSkillsIsEnabled();
	let mouthInserted = target.blowjobPoseSkillsIsEnabled();
	
	let isBehind = this.isUsingBodySlotPenis(OTHER_1_ID) || this.isUsingBodySlotPenis(OTHER_2_ID);
	let isInFront = this.isUsingBodySlotPenis(OTHER_3_ID) || this.isUsingBodySlotPenis(OTHER_4_ID);
	
	if(!pussyInserted && isBehind) {
		if(this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_SELECTOR_PUSSY_ID))
			array.push(SKILL_ENEMY_PETTING_SELECTOR_PUSSY_ID);
		if(this._aiPettingSkills.includes(SKILL_ENEMY_TOY_INSERT_PENIS_DILDO_ID))
			array.push(SKILL_ENEMY_TOY_INSERT_PENIS_DILDO_ID);
		if(this._aiPettingSkills.includes(SKILL_ENEMY_SPANKING_SELECTOR_ID) || this.sadismLvl() >= 1 || this.hasAngryPrefix()) 
			array.push(SKILL_ENEMY_SPANKING_SELECTOR_ID);
	}
	if(!analInserted && isBehind) {
		if(this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_SELECTOR_BUTT_ID))
			array.push(SKILL_ENEMY_PETTING_SELECTOR_BUTT_ID);
		if(this._aiPettingSkills.includes(SKILL_ENEMY_TOY_INSERT_ANAL_BEADS_ID))
			array.push(SKILL_ENEMY_TOY_INSERT_ANAL_BEADS_ID);
		if(this._aiPettingSkills.includes(SKILL_ENEMY_SPANKING_SELECTOR_ID) || this.sadismLvl() >= 1 || this.hasAngryPrefix()) 
			array.push(SKILL_ENEMY_SPANKING_SELECTOR_ID);
	}
	if(isBehind) {
		if(this._aiPettingSkills.includes(SKILL_ENEMY_SPANKING_SELECTOR_ID) || this.sadismLvl() >= 1 || this.hasAngryPrefix()) 
			array.push(SKILL_ENEMY_SPANKING_SELECTOR_ID);
	}
	
	if(!mouthInserted && isInFront) {
		if(this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_SELECTOR_MOUTH_ID)) {
			array.push(SKILL_ENEMY_PETTING_SELECTOR_MOUTH_ID);
			array.push(SKILL_ENEMY_PETTING_SELECTOR_MOUTH_ID);
		}
	}
	if(isInFront) {
		if(this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_SELECTOR_BOOBS_ID) || this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_SELECTOR_BOOBS_DOGGY_ID)) {
			array.push(SKILL_ENEMY_PETTING_SELECTOR_BOOBS_ID);
		}
	}
	
	if(!this.isMonstrousType) {
		array.push(SKILL_ENEMY_TALK_SELECTOR_RANDOM_JERKOFF_ID);
		array.push(SKILL_ENEMY_TALK_SELECTOR_RANDOM_JERKOFF_ID);
	}
	array.push(SKILL_ENEMY_STARE_SELECTOR_RANDOM_JERKOFF_ID);
	array.push(SKILL_ENEMY_STARE_SELECTOR_RANDOM_JERKOFF_ID);
	
	while(array.length > 0 && !success && attempts > 0) {
		let index = Math.randomInt(array.length);
		let skillId = array.splice(index,1)[0];
		success = this.meetsSkillConditionsEval($dataSkills[skillId],target);
		if(success) this.useAISkill(skillId,target);
		else attempts--;
	}
	
	return success;
};

Game_Enemy.prototype.tryPettingSkills_defeatedLevel5 = function(target, attempts) { 
	if(!this._aiPettingSkills) return false;
	let success = false;
	let array = [];
	
	let pussyInserted = target.pussySexPoseSkillsIsEnabled();
	let analInserted = target.analSexPoseSkillsIsEnabled();
	let boobsInserted = target.tittyFuckPoseSkillsIsEnabled();
	let mouthInserted = target.blowjobPoseSkillsIsEnabled();
	let rightHandInserted = target.rightHandjobPoseSkillsIsEnabled();
	let leftHandInserted = target.leftHandjobPoseSkillsIsEnabled();

	if(!pussyInserted) {
		if(this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_SELECTOR_PUSSY_ID))
			array.push(SKILL_ENEMY_PETTING_SELECTOR_PUSSY_ID);
		if(this._aiPettingSkills.includes(SKILL_ENEMY_TOY_INSERT_PENIS_DILDO_ID))
			array.push(SKILL_ENEMY_TOY_INSERT_PENIS_DILDO_ID);
	}
	if(!analInserted && !pussyInserted) {
		if(this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_SELECTOR_BUTT_ID))
			array.push(SKILL_ENEMY_PETTING_SELECTOR_BUTT_ID);
		if(this._aiPettingSkills.includes(SKILL_ENEMY_TOY_INSERT_ANAL_BEADS_ID))
			array.push(SKILL_ENEMY_TOY_INSERT_ANAL_BEADS_ID);
	}
	if(!mouthInserted) {
		if(this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_SELECTOR_MOUTH_ID))
			array.push(SKILL_ENEMY_PETTING_SELECTOR_MOUTH_ID);
	}
	if(!boobsInserted) {
		if(this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_SELECTOR_BOOBS_ID) || this._aiPettingSkills.includes(SKILL_ENEMY_PETTING_SELECTOR_BOOBS_DOGGY_ID))
			array.push(SKILL_ENEMY_PETTING_SELECTOR_BOOBS_ID);
	}
	
	if(!this.isMonstrousType) {
		array.push(SKILL_ENEMY_TALK_SELECTOR_RANDOM_JERKOFF_ID);
		array.push(SKILL_ENEMY_TALK_SELECTOR_RANDOM_JERKOFF_ID);
	}
	array.push(SKILL_ENEMY_STARE_SELECTOR_RANDOM_JERKOFF_ID);
	array.push(SKILL_ENEMY_STARE_SELECTOR_RANDOM_JERKOFF_ID);
	
	while(array.length > 0 && !success && attempts > 0) {
		let index = Math.randomInt(array.length);
		let skillId = array.splice(index,1)[0];
		success = this.meetsSkillConditionsEval($dataSkills[skillId],target);
		if(success) this.useAISkill(skillId,target);
		else attempts--;
	}
	
	return success;
};

Game_Enemy.prototype.tryPettingSkills_defeatedGuard = function(target, attempts) { 
	if(!this._aiPettingSkills) return false;
	let success = false;
	let array = this._aiPettingSkills.slice(0);
	
	let isUsingPussy = this.isUsingBodySlotPenis(PUSSY_ID);
	let isUsingAnal = this.isUsingBodySlotPenis(ANAL_ID);
	let isUsingBoobs = this.isUsingBodySlotPenis(BOOBS_ID);
	let isUsingMouth = this.isUsingBodySlotPenis(MOUTH_ID);
	
	if(isUsingPussy || isUsingAnal || isUsingBoobs || isUsingMouth) array = [];
	
	array.push(SKILL_ENEMY_TALK_SELECTOR_RANDOM_JERKOFF_ID);
	array.push(SKILL_ENEMY_STARE_SELECTOR_RANDOM_JERKOFF_ID);
	
	while(array.length > 0 && !success && attempts > 0) {
		let index = Math.randomInt(array.length);
		let skillId = array.splice(index,1)[0];
		success = this.meetsSkillConditionsEval($dataSkills[skillId],target);
		if(success) this.useAISkill(skillId,target);
		else attempts--;
	}
	
	return success;
};


//Try to use every petting skill
Game_Enemy.prototype.tryAllPettingSkills = function(target) { 
	if(!this._aiPettingSkills) return false;
	return this.tryPettingSkills(target, this._aiPettingSkills.length * 2);
};

/////////////
// Talk Sight
/////////////

//For generic enemy AIs, just randomly pick a talk/sight skill and use it
Game_Enemy.prototype.genericBattleAITalkSight = function(target) { 
	if(!this._aiTalkSightSkills) return;
	
	let success = false;
	let array = this._aiTalkSightSkills.slice(0);
	while(array.length > 0 && !success) {
		let index = Math.randomInt(array.length);
		let skillId = array.splice(index,1)[0];
		success = this.meetsSkillConditionsEval($dataSkills[skillId],target);
		if(success) {
			this.useAISkill(skillId, target);
			this.setUsedSkillThisTurn(true);
		}
	}
	return success;
};	
	
//////////
// Attack
///////////

//For generic enemy AIs, just randomly pick an attack skill and use it
Game_Enemy.prototype.genericBattleAIAttack = function(target) { 
	if(!this._aiAttackSkills) return;
	
	let success = false;
	let array = this._aiAttackSkills.slice(0);
	while(array.length > 0 && !success) {
		let index = Math.randomInt(array.length);
		let skillId = array.splice(index,1)[0];
		if(skillId === SKILL_MINION_THROW_LOAD_AMMO_ID) {
			target = false;
			let group = this.friendsUnit().aliveMembers();
			for(let i = 0; i < group.length; ++i) {
				let opponent = group[i];
				if(opponent && this.name() != opponent.name() && opponent.isValidTargetForMinionThrowAmmoLoading()) {
					target = opponent;
					this._lastAITarget = target;
					break;
				}
			}
			if(!target) return false;
		}
		success = this.meetsSkillConditionsEval($dataSkills[skillId],target);
		success = success && this.meetsSkillConditions($dataSkills[skillId]); //cooldown
		if(success) {
			this.useAISkill(skillId, target);
			this.setUsedSkillThisTurn(true);
		}
	}
	return success;
};

Game_Enemy.prototype.chargeAIAttack = function(target) { 
	if(!this._aiChargeSkills) return;
	
	let attempts = 3;
	let success = false;
	let array = this._aiChargeSkills.slice(0);
	while(array.length > 0 && !success && attempts > 0) {
		let index = Math.randomInt(array.length);
		let skillId = array.splice(index,1)[0];
		success = this.meetsSkillConditionsEval($dataSkills[skillId],target);
		success = success && this.meetsSkillConditions($dataSkills[skillId]); //cooldown
		if(success) {
			this.useAISkill(skillId, target);
			this.setUsedSkillThisTurn(true);
		}
		else attempts--;
	}
	return success;
};

///////////
// Special Actions

Game_Enemy.prototype.specialEnemyBattleAIAction = function(target) { 
	

	return false;
};

