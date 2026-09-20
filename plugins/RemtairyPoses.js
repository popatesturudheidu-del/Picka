var Remtairy = Remtairy || {};
Remtairy.Poses = Remtairy.Poses || {};

//Attack poses
const POSE_NULL = -1;
const POSE_ATTACK = 2;
const POSE_DEFEND = 3;
const POSE_EVADE = 4;
const POSE_STANDBY = 5;
const POSE_ATTACK_FOLDERNAME = 'attack';
const POSE_DEFEND_FOLDERNAME = 'defend';
const POSE_EVADE_FOLDERNAME = 'evade'
const POSE_STANDBY_FOLDERNAME = 'standby';
//Unarmed poses
const POSE_UNARMED = 6;
const POSE_KICK = 7;
const POSE_UNARMED_FOLDERNAME = 'unarmed';
const POSE_KICK_FOLDERNAME = 'kick';
//Down pose
const POSE_DOWN_STAMINA = 8;
const POSE_DOWN_ORGASM = 9;
const POSE_DOWN_FALLDOWN = 10;
const POSE_DOWN_STAMINA_FOLDERNAME = 'down_stamina';
const POSE_DOWN_ORGASM_FOLDERNAME = 'down_org';
const POSE_DOWN_FALLDOWN_FOLDERNAME = 'down_falldown';
//Sex poses
const POSE_THUGGANGBANG = 11;
const POSE_GUARDGANGBANG = 12;
const POSE_GOBLINCUNNILINGUS = 13;
const POSE_SLIME_PILEDRIVER_ANAL = 14;
const POSE_ORC_PAIZURI = 15;
const POSE_KICKCOUNTER = 16;
const POSE_RIMJOB = 17;
const POSE_FOOTJOB = 18;
const POSE_HJ_STANDING = 19;
const POSE_BJ_KNEELING = 20;
const POSE_PAIZURI_LAYING = 21;
const POSE_REVERSE_COWGIRL = 22;
const POSE_KARRYN_COWGIRL = 23;
const POSE_LIZARDMAN_COWGIRL = 24;
const POSE_WAITRESS_SEX = 25;
const POSE_WEREWOLF_BACK = 26;
const POSE_YETI_PAIZURI = 27;
const POSE_YETI_CARRY = 28;

const POSE_THUGGANGBANG_FOLDERNAME = 'thug_gb';
const POSE_GUARDGANGBANG_FOLDERNAME = 'guard_gb';
const POSE_GOBLINCUNNILINGUS_FOLDERNAME = 'goblin_cl';
const POSE_SLIME_PILEDRIVER_ANAL_FOLDERNAME = 'slime_piledriver';
const POSE_ORC_PAIZURI_FOLDERNAME = 'orc_paizuri';
const POSE_KICKCOUNTER_FOLDERNAME = 'kick_counter';
const POSE_RIMJOB_FOLDERNAME = 'rimming';
const POSE_FOOTJOB_FOLDERNAME = 'footj';
const POSE_HJ_STANDING_FOLDERNAME = 'hj_standing';
const POSE_BJ_KNEELING_FOLDERNAME = 'bj_kneeling';
const POSE_PAIZURI_LAYING_FOLDERNAME = 'paizuri_laying';
const POSE_REVERSE_COWGIRL_FOLDERNAME = 'cowgirl_reverse';
const POSE_KARRYN_COWGIRL_FOLDERNAME = 'cowgirl_karryn';
const POSE_LIZARDMAN_COWGIRL_FOLDERNAME = 'cowgirl_lizardman';
const POSE_WAITRESS_SEX_FOLDERNAME = 'waitress_table';
const POSE_WEREWOLF_BACK_FOLDERNAME = 'werewolf_back';
const POSE_YETI_PAIZURI_FOLDERNAME = 'yeti_paizuri';
const POSE_YETI_CARRY_FOLDERNAME = 'yeti_carry';

//Special poses
const POSE_RECEPTIONIST = 29;
const POSE_RECEPTIONIST_FOLDERNAME = 'receptionist';

//Masturbate
const POSE_MASTURBATE_COUCH = 30;
const POSE_MASTURBATE_INBATTLE = 31;
const POSE_MASTURBATE_COUCH_FOLDERNAME = 'mas_couch';
const POSE_MASTURBATE_INBATTLE_FOLDERNAME = 'mas_inbattle';

//Glory
const POSE_TOILET_SITTING = 32;
const POSE_TOILET_SIT_LEFT = 33;
const POSE_TOILET_SIT_RIGHT = 34;
const POSE_TOILET_STAND_LEFT = 35;
const POSE_TOILET_STAND_RIGHT = 36;
const POSE_TOILET_SITTING_FOLDERNAME = 'toilet_sitting';
const POSE_TOILET_SIT_LEFT_FOLDERNAME = 'toilet_sit_left';
const POSE_TOILET_SIT_RIGHT_FOLDERNAME = 'toilet_sit_right';
const POSE_TOILET_STAND_LEFT_FOLDERNAME = 'toilet_stand_left';
const POSE_TOILET_STAND_RIGHT_FOLDERNAME = 'toilet_stand_right';

//Stripper
const POSE_STRIPPER_INTERMISSION = 37;
const POSE_STRIPPER_MOUTH = 38;
const POSE_STRIPPER_BOOBS = 39;
const POSE_STRIPPER_PUSSY = 40;
const POSE_STRIPPER_BUTT = 41;
const POSE_STRIPPER_VIP = 42;
const POSE_STRIPPER_INTERMISSION_FOLDERNAME = 'stripper_intermission';
const POSE_STRIPPER_MOUTH_FOLDERNAME = 'stripper_mouth';
const POSE_STRIPPER_BOOBS_FOLDERNAME = 'stripper_boobs';
const POSE_STRIPPER_PUSSY_FOLDERNAME = 'stripper_pussy';
const POSE_STRIPPER_BUTT_FOLDERNAME = 'stripper_butt';
const POSE_STRIPPER_VIP_FOLDERNAME = 'stripper_vip';

//Trainer
const POSE_TRAINER_STANDBY = 43;
const POSE_TRAINER_TEKOKI = 44;
const POSE_TRAINER_KISU = 45;
const POSE_TRAINER_FERA = 46;
const POSE_TRAINER_PAIZURI = 47;
const POSE_TRAINER_RINKAN = 48;
const POSE_TRAINER_STANDBY_FOLDERNAME = 'gym_standby';
const POSE_TRAINER_TEKOKI_FOLDERNAME = 'gym_tekoki';
const POSE_TRAINER_KISU_FOLDERNAME = 'gym_kisu';
const POSE_TRAINER_FERA_FOLDERNAME = 'gym_fera';
const POSE_TRAINER_PAIZURI_FOLDERNAME = 'gym_paizuri';
const POSE_TRAINER_RINKAN_FOLDERNAME = 'gym_rinkan'

//Defeated poses
const POSE_DEFEATED_LEVEL1 = 49;
const POSE_DEFEATED_LEVEL2 = 50;
const POSE_DEFEATED_LEVEL3 = 51;
const POSE_DEFEATED_LEVEL4 = 52;
const POSE_DEFEATED_LEVEL5 = 53;
const POSE_DEFEATED_GUARD = 54;
const POSE_DEFEATED_LEVEL1_FOLDERNAME = 'defeated_level1';
const POSE_DEFEATED_LEVEL2_FOLDERNAME = 'defeated_level2';
const POSE_DEFEATED_LEVEL3_FOLDERNAME = 'defeated_level3';
const POSE_DEFEATED_LEVEL4_FOLDERNAME = 'defeated_level4';
const POSE_DEFEATED_LEVEL5_FOLDERNAME = 'defeated_level5';
const POSE_DEFEATED_GUARD_FOLDERNAME = 'defeated_guard';

//Map poses
const POSE_MAP = 69;
const POSE_MAP_FOLDERNAME = 'map';

//=============================================================================
 /*:
 * @plugindesc Poses
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================

//////////
///////////////
// Game Actor
/////////////////
///////////

Game_Actor.prototype.setTachieFlip = function(flip) {
    this._tachieFlip = flip;
}; 

// Pose Name
Object.defineProperty(Game_Actor.prototype, "poseName", {
	get: function () { return this._poseName; }, configurable: true
});
Object.defineProperty(Game_Actor.prototype, "poseFolderName", {
	get: function () { return this._poseFolderName; }, configurable: true
});

// Set Pose
Game_Actor.prototype.setPose = function (name, dontResetPose) {
	//name = name.toLowerCase();
	this._poseName = name;
	this.setPoseFolderName(name);
	if(dontResetPose) return;
	this.completeResetTachieFace();
	this.completeResetBodyParts();
	this.completeResetMaxTachieSemenId();
	this.resetCockTargets();
	this.setSpankablePose(false);
	this.setClitToyInsertablePose(true);
	this.setPussyToyInsertablePose(true);
	this.setAnalToyInsertablePose(true);
	this.setHasTachiePubic(false);
	this.setHasTachieClitToyNaked(false);
	this.setPoseBattlebacks();
	if(!dontResetPose) this.decayStrayFromPoseChange();
	//this.setCacheChanged();
};

Game_Actor.prototype.setSamePose = function () {
	switch(this._poseName) {
	case POSE_ATTACK:
		this.setAttackPose();
	break;
	case POSE_DEFEND:
		this.setDefendPose();
	break;
	case POSE_EVADE:
		this.setEvadePose();
	break;
	case POSE_STANDBY:
		this.setStandbyPose();
	break;
	case POSE_UNARMED:
		this.setUnarmedPose();
	break;
	case POSE_KICK:
		this.setKickPose();
	break;
	case POSE_DOWN_STAMINA:
		this.setDownStaminaPose();
	break;
	case POSE_DOWN_ORGASM:
		this.setDownOrgasmPose();
	break;
	case POSE_DOWN_FALLDOWN:
		this.setDownFallDownPose();
	break;
	case POSE_THUGGANGBANG:
		this.setThugGangbangSexPose();
	break;
	case POSE_GUARDGANGBANG:
		this.setGuardGangbangSexPose();
	break;
	case POSE_GOBLINCUNNILINGUS:
		this.setGoblinCunnilingusSexPose();
	break;
	case POSE_SLIME_PILEDRIVER_ANAL:
		this.setSlimeAnalPiledriverPose();
	break;
	case POSE_ORC_PAIZURI:
		this.setOrcPaizuriSexPose();
	break;
	case POSE_KICKCOUNTER:
		this.setKickCounterSexPose();
	break;
	case POSE_RIMJOB:
		this.setRimjobSexPose();
	break;
	case POSE_FOOTJOB:
		this.setFootjobSexPose();
	break;
	case POSE_HJ_STANDING:
		this.setStandingHJSexPose();
	break;
	case POSE_BJ_KNEELING:
		this.setKneelingBJSexPose();
	break;
	case POSE_PAIZURI_LAYING:
		this.setLayingTittyfuckSexPose();
	break;
	case POSE_REVERSE_COWGIRL:
		this.setReverseCowgirlSexPose();
	break;
	case POSE_KARRYN_COWGIRL:
		this.setKarrynCowgirlSexPose();
	break;
	case POSE_LIZARDMAN_COWGIRL:
		this.setLizardmanCowgirlSexPose();
	break;
	case POSE_WAITRESS_SEX:
		this.setWaitressSexPose();
	break;
	case POSE_WEREWOLF_BACK:
		this.setWerewolfBackPose();
	break;
	case POSE_YETI_PAIZURI:
		this.setYetiPaizuriSexPose();
	break;
	case POSE_YETI_CARRY:
		this.setYetiCarrySexPose();
	break;
	case POSE_RECEPTIONIST:
		this.setReceptionistPose();
	break;
	case POSE_MASTURBATE_COUCH:
		this.setMasturbationCouchPose();
	break;
	case POSE_MASTURBATE_INBATTLE:
		this.setMasturbationInBattlePose();
	break;
	case POSE_TOILET_SITTING:
		this.setToiletSittingPose();
	break;
	case POSE_TOILET_SIT_LEFT:
		this.setToiletSitLeftPose();
	break;
	case POSE_TOILET_SIT_RIGHT:
		this.setToiletSitRightPose();
	break;
	case POSE_TOILET_STAND_LEFT:
		this.setToiletStandLeftPose();
	break;
	case POSE_TOILET_STAND_RIGHT:
		this.setToiletStandRightPose();
	break;
	case POSE_STRIPPER_INTERMISSION:
		this.setStripperIntermissionPose();
	break;
	case POSE_STRIPPER_MOUTH:
		this.setStripperMouthPose();
	break;
	case POSE_STRIPPER_BOOBS:
		this.setStripperBoobsPose();
	break;
	case POSE_STRIPPER_PUSSY:
		this.setStripperPussyPose();
	break;
	case POSE_STRIPPER_BUTT:
		this.setStripperButtPose();
	break;
	case POSE_STRIPPER_VIP:
		this.setStripperSexPose();
	break;
	case POSE_TRAINER_STANDBY:
		this.setTrainerStandbyPose();
	break;
	case POSE_TRAINER_TEKOKI:
		this.setTrainerTekokiPose();
	break;
	case POSE_TRAINER_KISU:
		this.setTrainerKisuPose();
	break;
	case POSE_TRAINER_FERA:
		this.setTrainerFeraPose();
	break;
	case POSE_TRAINER_PAIZURI:
		this.setTrainerPaizuriPose();
	break;
	case POSE_TRAINER_RINKAN:
		this.setTrainerRinkanPose();
	break;
	case POSE_DEFEATED_LEVEL1:
		this.setDefeatedLevel1Pose();
	break;
	case POSE_DEFEATED_LEVEL2:
		this.setDefeatedLevel2Pose();
	break;
	case POSE_DEFEATED_LEVEL3:
		this.setDefeatedLevel3Pose();
	break;
	case POSE_DEFEATED_LEVEL4:
		this.setDefeatedLevel4Pose();
	break;
	case POSE_DEFEATED_LEVEL5:
		this.setDefeatedLevel5Pose();
	break;
	case POSE_DEFEATED_GUARD:
		this.setDefeatedLevelGuardPose();
	break;
	case POSE_MAP:
		if($gameParty.isInWaitressBattle) this.setWaitressServingPose();
		else this.setWardenMapPose();
	break;
	}
};

Game_Actor.prototype.setPoseFolderName = function (name) {
	let folderName = false;
	switch(name) {
	case POSE_ATTACK:
		folderName = POSE_ATTACK_FOLDERNAME;
	break;
	case POSE_DEFEND:
		folderName = POSE_DEFEND_FOLDERNAME;
	break;
	case POSE_EVADE:
		folderName = POSE_EVADE_FOLDERNAME;
	break;
	case POSE_STANDBY:
		folderName = POSE_STANDBY_FOLDERNAME;
	break;
	case POSE_UNARMED:
		folderName = POSE_UNARMED_FOLDERNAME;
	break;
	case POSE_KICK:
		folderName = POSE_KICK_FOLDERNAME;
	break;
	case POSE_DOWN_STAMINA:
		folderName = POSE_DOWN_STAMINA_FOLDERNAME;
	break;
	case POSE_DOWN_ORGASM:
		folderName = POSE_DOWN_ORGASM_FOLDERNAME;
	break;
	case POSE_DOWN_FALLDOWN:
		folderName = POSE_DOWN_FALLDOWN_FOLDERNAME;
	break;
	case POSE_THUGGANGBANG:
		folderName = POSE_THUGGANGBANG_FOLDERNAME;
	break;
	case POSE_GUARDGANGBANG:
		folderName = POSE_GUARDGANGBANG_FOLDERNAME;
	break;
	case POSE_GOBLINCUNNILINGUS:
		folderName = POSE_GOBLINCUNNILINGUS_FOLDERNAME;
	break;
	case POSE_SLIME_PILEDRIVER_ANAL:
		folderName = POSE_SLIME_PILEDRIVER_ANAL_FOLDERNAME;
	break;
	case POSE_ORC_PAIZURI:
		folderName = POSE_ORC_PAIZURI_FOLDERNAME;
	break;
	case POSE_KICKCOUNTER:
		folderName = POSE_KICKCOUNTER_FOLDERNAME;
	break;
	case POSE_RIMJOB:
		folderName = POSE_RIMJOB_FOLDERNAME;
	break;
	case POSE_FOOTJOB:
		folderName = POSE_FOOTJOB_FOLDERNAME;
	break;
	case POSE_HJ_STANDING:
		folderName = POSE_HJ_STANDING_FOLDERNAME;
	break;
	case POSE_BJ_KNEELING:
		folderName = POSE_BJ_KNEELING_FOLDERNAME;
	break;
	case POSE_PAIZURI_LAYING:
		folderName = POSE_PAIZURI_LAYING_FOLDERNAME;
	break;
	case POSE_REVERSE_COWGIRL:
		folderName = POSE_REVERSE_COWGIRL_FOLDERNAME;
	break;
	case POSE_KARRYN_COWGIRL:
		folderName = POSE_KARRYN_COWGIRL_FOLDERNAME;
	break;
	case POSE_LIZARDMAN_COWGIRL:
		folderName = POSE_LIZARDMAN_COWGIRL_FOLDERNAME;
	break;
	case POSE_WAITRESS_SEX:
		folderName = POSE_WAITRESS_SEX_FOLDERNAME;
	break;
	case POSE_WEREWOLF_BACK:
		folderName = POSE_WEREWOLF_BACK_FOLDERNAME;
	break;
	case POSE_YETI_PAIZURI:
		folderName = POSE_YETI_PAIZURI_FOLDERNAME;
	break;
	case POSE_YETI_CARRY:
		folderName = POSE_YETI_CARRY_FOLDERNAME;
	break;
	case POSE_RECEPTIONIST:
		folderName = POSE_RECEPTIONIST_FOLDERNAME;
	break;
	case POSE_MASTURBATE_COUCH:
		folderName = POSE_MASTURBATE_COUCH_FOLDERNAME;
	break;
	case POSE_MASTURBATE_INBATTLE:
		folderName = POSE_MASTURBATE_INBATTLE_FOLDERNAME;
	break;
	case POSE_TOILET_SITTING:
		folderName = POSE_TOILET_SITTING_FOLDERNAME;
	break;
	case POSE_TOILET_SIT_LEFT:
		folderName = POSE_TOILET_SIT_LEFT_FOLDERNAME;
	break;
	case POSE_TOILET_SIT_RIGHT:
		folderName = POSE_TOILET_SIT_RIGHT_FOLDERNAME;
	break;
	case POSE_TOILET_STAND_LEFT:
		folderName = POSE_TOILET_STAND_LEFT_FOLDERNAME;
	break;
	case POSE_TOILET_STAND_RIGHT:
		folderName = POSE_TOILET_STAND_RIGHT_FOLDERNAME;
	break;
	case POSE_STRIPPER_INTERMISSION:
		folderName = POSE_STRIPPER_INTERMISSION_FOLDERNAME;
	break;
	case POSE_STRIPPER_MOUTH:
		folderName = POSE_STRIPPER_MOUTH_FOLDERNAME;
	break;
	case POSE_STRIPPER_BOOBS:
		folderName = POSE_STRIPPER_BOOBS_FOLDERNAME;
	break;
	case POSE_STRIPPER_PUSSY:
		folderName = POSE_STRIPPER_PUSSY_FOLDERNAME;
	break;
	case POSE_STRIPPER_BUTT:
		folderName = POSE_STRIPPER_BUTT_FOLDERNAME;
	break;
	case POSE_STRIPPER_VIP:
		folderName = POSE_STRIPPER_VIP_FOLDERNAME;
	break;
	case POSE_TRAINER_STANDBY:
		folderName = POSE_TRAINER_STANDBY_FOLDERNAME;
	break;
	case POSE_TRAINER_TEKOKI:
		folderName = POSE_TRAINER_TEKOKI_FOLDERNAME;
	break;
	case POSE_TRAINER_KISU:
		folderName = POSE_TRAINER_KISU_FOLDERNAME;
	break;
	case POSE_TRAINER_FERA:
		folderName = POSE_TRAINER_FERA_FOLDERNAME;
	break;
	case POSE_TRAINER_PAIZURI:
		folderName = POSE_TRAINER_PAIZURI_FOLDERNAME;
	break;
	case POSE_TRAINER_RINKAN:
		folderName = POSE_TRAINER_RINKAN_FOLDERNAME;
	break;
	case POSE_DEFEATED_LEVEL1:
		folderName = POSE_DEFEATED_LEVEL1_FOLDERNAME;
	break;
	case POSE_DEFEATED_LEVEL2:
		folderName = POSE_DEFEATED_LEVEL2_FOLDERNAME;
	break;
	case POSE_DEFEATED_LEVEL3:
		folderName = POSE_DEFEATED_LEVEL3_FOLDERNAME;
	break;
	case POSE_DEFEATED_LEVEL4:
		folderName = POSE_DEFEATED_LEVEL4_FOLDERNAME;
	break;
	case POSE_DEFEATED_LEVEL5:
		folderName = POSE_DEFEATED_LEVEL5_FOLDERNAME;
	break;
	case POSE_DEFEATED_GUARD:
		folderName = POSE_DEFEATED_GUARD_FOLDERNAME;
	break;
	case POSE_MAP:
		folderName = POSE_MAP_FOLDERNAME;
	break;
	
	case CHAT_FOLDER_KARRYN:
	case CHAT_FOLDER_EMPEROR:
	case CHAT_FOLDER_YASU:
	case CHAT_FOLDER_TONKIN:
	case CHAT_FOLDER_DOCTOR:
	case CHAT_FOLDER_ARON:
	case CHAT_FOLDER_NOINIM:
	case CHAT_FOLDER_GOBRIEL:
		folderName = name;
	break;
		
	}
	
	if(folderName)
		this._poseFolderName = folderName;
};

Game_Actor.prototype.setPoseNameForOldSaves = function () {
	switch(this.poseName) {
		case POSE_MAP_FOLDERNAME:
			this._poseFolderName = this.poseName;
			this._poseName = POSE_MAP;
			break;
		case POSE_DEFEATED_LEVEL1_FOLDERNAME:
			this._poseFolderName = this.poseName;
			this._poseName = POSE_DEFEATED_LEVEL1;
			break;
		case POSE_DEFEATED_LEVEL2_FOLDERNAME:
			this._poseFolderName = this.poseName;
			this._poseName = POSE_DEFEATED_LEVEL2;
			break;
		case POSE_DEFEATED_LEVEL3_FOLDERNAME:
			this._poseFolderName = this.poseName;
			this._poseName = POSE_DEFEATED_LEVEL3;
			break;
		case POSE_DEFEATED_LEVEL4_FOLDERNAME:
			this._poseFolderName = this.poseName;
			this._poseName = POSE_DEFEATED_LEVEL4;
			break;
		case POSE_DEFEATED_LEVEL5_FOLDERNAME:
			this._poseFolderName = this.poseName;
			this._poseName = POSE_DEFEATED_LEVEL5;
			break;
		case POSE_DEFEATED_GUARD_FOLDERNAME:
			this._poseFolderName = this.poseName;
			this._poseName = POSE_DEFEATED_GUARD;
			break;
		case POSE_STANDBY_FOLDERNAME:
			this._poseFolderName = this.poseName;
			this._poseName = POSE_STANDBY;
			break;
		case POSE_UNARMED_FOLDERNAME:
			this._poseFolderName = this.poseName;
			this._poseName = POSE_UNARMED;
			break;
		case POSE_MASTURBATE_COUCH_FOLDERNAME:
			this._poseFolderName = this.poseName;
			this._poseName = POSE_MASTURBATE_COUCH;
		break;
		
	}
};

//Reset Face
Game_Actor.prototype.completeResetTachieFace = function () {
	this.setTachieFace(0);
	this.resetTachieHoppe();
	this.resetTachieSweat();
	this.resetTachieHair();
	this.resetTachieEyebrows();
	this.resetTachieEyes();
	this.resetTachieMouth();
	this.resetTachieGlasses();
};

//Reset Body Parts
Game_Actor.prototype.completeResetBodyParts = function () {
	this.setTachieBody(1);
	this.resetTachieBodyExtension();
	this.resetTachieHipsExtension();
	this.resetTachiePubicExtension();
	this.resetTachieRightArm();
	this.resetTachieLeftArm();
	this.resetTachieHat();
	this.resetTachieHead();
	this.resetTachieHair();
	this.resetTachieWeapon();
	this.resetTachiePanties();
	this.resetTachieHips();
	this.resetTachieBoobs();
	this.resetTachieLeftBoob();
	this.resetTachieRightBoob();
	this.resetTachieButt();
	this.resetTachieSkirt();
	this.resetTachieClothes();
	this.resetTachieHolePussy();
	this.resetTachieHoleAnus();
	this.resetTachieStraw();
	this.resetTachieTie();
	this.resetTachieLegs();
	this.resetTachiePole();
	this.resetTachieCondomBra();
	this.resetTachieCondomBelt();
	this.resetTachieCondomChikubi();
	this.resetTachieCondomHead();
	this.resetTachieCondomFloor();
	//this.resetTachieCondomLeg();
	//this.resetTachieCondomPantsu();
	this.resetTachieCondomButt();
	this.resetTachieHood();
	this.resetTachieCap();
	
	this.setTachieRightArmInFrontOfBody(true);
	this.setTachieRightArmInFrontOfHeadAndBehindBody(false);
	this.setTachieLeftArmInFrontOfBody(true);
	this.setTachieRightArmInFrontOfBoobs(true);
	this.setTachieLeftArmInFrontOfBoobs(true);
	this.setTachieRightArmInFrontOfLeftArm(true);
	this.setTachieBoobsInFrontOfBody(true);
	this.setTachieSemenBoobsInFrontOfBoobs(true);
	this.setTachieSemenBellyInFrontOfBoobs(true);
	this.setTachieHeadInFrontOfBody(true);
	this.setTachieHatInFrontOfBody(true);
	this.setTachieFrontInFrontOfFace(false);
	this.setTachieSemenLeftArmInFrontOfFront(false);
	this.setTachieSemenRightArmInFrontOfFront(false);
	this.setTachiePantiesInFrontOfBoobs(false);
	this.setTachieCockBoobsInFrontOfBoobs(true);
	this.setTachieCockMouthInFrontOfFace(true);
	this.setTachieLeftBoobInFrontOfRightBoob(true);
	this.setTachieWeaponInFrontOfBody(true);
	this.setTachieWeaponInFrontOfBoobs(true);
	this.setTachieWeaponBehindEverything(false);
	this.setTachieHasBoobsHard(true);
	
	this.setTachieClitToyBehindCocks(false);
	this.setTachiePussyToyInFrontOfAnalToy(true);
	this.setTachieClitToyInFrontOfMainToys(true);
	this.setTachieHolesCocksToysInFrontOfBody(true);
	this.setTachieToysInFrontOfEverything(false);
	this.setTachieToysInBehindOfEverything(false);
	this.setTachieAnalToyInFrontOfEverything(false);
	
	this.resetBoobsType();
	this.setTachieBoobsErectionFalse();
	this.resetAllTachieCocks();
	this.resetAllTachieBack();
	this.resetAllTachieFront();
	this.resetAllTachieVisitor();
	
	this.resetTachieHasHCup();
	this.resetTachieHasPCup();
};

Game_Actor.prototype.resetAllTachieCocks = function () {
	this.resetTachieCock();
	this.resetTachieCockBoobs();
	this.resetTachieCockMouth();
	this.resetTachieCockFeet();
	this.resetTachieCockPussy();
	this.resetTachieCockAnal();
	this.resetTachieCockLeftArm();
	this.resetTachieCockRightArm();
	this.resetTachieLeftHole();
	this.resetTachieRightHole();
};	

//Reset Max Tachie Semen
Game_Actor.prototype.completeResetMaxTachieSemenId = function () {
	this.setMaxTachieSemenBackId(0);
	this.setMaxTachieSemenDeskId(0);
	this.setMaxTachieSemenBellyId(0);
	this.setMaxTachieSemenBoobsId(0);
	this.setMaxTachieSemenLeftBoobId(0);
	this.setMaxTachieSemenRightBoobId(0);
	this.setMaxTachieSemenButtId(0);
	this.setMaxTachieSemenButtTopRightId(0);
	this.setMaxTachieSemenButtTopLeftId(0);
	this.setMaxTachieSemenButtBottomRightId(0);
	this.setMaxTachieSemenButtBottomLeftId(0);
	this.setMaxTachieSemenButtRightId(0);
	this.setMaxTachieSemenButtLeftId(0);
	this.setMaxTachieSemenAnalId(0);
	this.setMaxTachieSemenAnalPantiesId(0);
	this.setMaxTachieSemenCrotchId(0);
	this.setMaxTachieSemenCrotchPantiesId(0);
	this.setMaxTachieSemenFaceId(0);
	this.setMaxTachieSemenMouthId(0);
	this.setMaxTachieSemenLeftArmId(0);
	this.setMaxTachieSemenRightArmId(0);
	this.setMaxTachieSemenLeftLegId(0);
	this.setMaxTachieSemenRightLegId(0);
	this.setMaxTachieSemenFloorId(0);
	this.setMaxTachieWetId(0);
	this.setMaxTachieWetPantiesId(0);
	this.setMaxTachieWetPussyToyId(0);
	this.setMaxTachieDroolMouthId(0);
	this.setMaxTachieDroolFingersId(0);
	this.setMaxTachieDroolNipplesId(0);
	
	this.setMaxTachieSemenCockMouthId(0);
	this.setMaxTachieSemenCockBoobsId(0);
	this.setMaxTachieSemenCockRightArmId(0);
	this.setMaxTachieSemenCockLeftArmId(0);
	this.setMaxTachieSemenCockPussyId(0);
	this.setMaxTachieSemenCockAnalId(0);
	this.setMaxTachieSemenCockFeetId(0);
	this.setMaxTachieSemenCockNormalId(0);
	this.setMaxTachieSemenHoleLeftId(0);
	this.setMaxTachieSemenHoleRightId(0);
	this.setMaxTachieSemenToiletSeatId(0);
	this.setMaxTachieWetToiletSeatId(0);
	this.setMaxTachieGlorySemenLeftWallId(0);
	this.setMaxTachieGlorySemenRightWallId(0);
	this.setMaxTachieGlorySemenLeftHoleId(0);
	this.setMaxTachieGlorySemenRightHoleId(0);
	this.setMaxTachieGlorySemenLeftToiletId(0);
	this.setMaxTachieGlorySemenRightToiletId(0);
	
	this.setMaxTachieSemenFrontAId(0);
	this.setMaxTachieSemenFrontBId(0);
	this.setMaxTachieSemenFrontCId(0);
	this.setMaxTachieSemenFrontDId(0);
	
	this.setMaxTachieStrayFaceId(0,0,0);
	this.setMaxTachieStrayBoobsId(0,0,0);
	this.setMaxTachieStrayRightBoobId(0,0,0);
	this.setMaxTachieStrayLeftBoobId(0,0,0);
	this.setMaxTachieStrayButtId(0,0,0);
	this.setMaxTachieStrayGroinId(0,0,0);
	
	this.resetTachieSemenAnalExtension();
	this.resetTachieSemenAnalPantiesExtension();
	this.resetTachieSemenBackExtension();
	this.resetTachieSemenBellyExtension();
	this.resetTachieSemenBoobsExtension();
	this.resetTachieSemenButtExtension();
	this.resetTachieSemenCrotchExtension();
	this.resetTachieSemenCrotchPantiesExtension();
	this.resetTachieSemenFaceExtension();
	this.resetTachieSemenMouthExtension();
	this.resetTachieSemenLeftArmExtension();
	this.resetTachieSemenLeftBoobExtension();
	this.resetTachieSemenRightArmExtension();
	this.resetTachieSemenRightBoobExtension(); 
	this.resetTachieSemenRightLegExtension();
	this.resetTachieSemenLeftLegExtension();
	this.resetTachieSemenWetExtension();
	this.resetTachieSemenWetPantiesExtension();
	this.resetTachieSemenWetPussyToyExtension();
	this.resetTachieSemenCockLeftArmExtension();
	this.resetTachieSemenCockRightArmExtension();
	this.resetTachieSemenCockMouthExtension();
	this.resetTachieSemenCockPussyExtension();
	this.resetTachieSemenCockNormalExtension();
	this.resetTachieSemenCockAnalExtension();
	this.resetTachieSemenCockFeetExtension();
	this.resetTachieSemenHoleRightExtension();
	this.resetTachieSemenHoleLeftExtension();
	this.resetTachieSemenToiletSeatExtension();
	this.resetTachieWetToiletSeatExtension();
	this.resetTachieSemenFrontAExtension();
	this.resetTachieSemenFrontBExtension();
	this.resetTachieSemenFrontCExtension();
	this.resetTachieSemenFrontDExtension();
	this.resetTachieSemenFrontEExtension();
	
	this.resetTachieStrayFaceExtension();
	this.resetTachieStrayBoobsExtension();
	this.resetTachieStrayRightBoobExtension();
	this.resetTachieStrayLeftBoobExtension();
	this.resetTachieStrayGroinExtension();
	this.resetTachieStrayButtExtension();
	this.resetTachieHatExtension();
	this.resetTachieHairExtension();
	
	this.resetTachieSemenBoobsHasPCupExtensionBasedOnClothingStage();
	this.resetTachieStrayBoobsHasPCupExtensionBasedOnClothingStage();
};

// Spankable Pose

Game_Actor.prototype.setSpankablePose = function (status) {
	this._spankablePose = status;
};
Game_Actor.prototype.isPoseSpankable = function () {
	return this._spankablePose;
};

// Toy Insert Pose
Game_Actor.prototype.setClitToyInsertablePose = function (status) {
	this._clitToyInsertablePose = status;
};
Game_Actor.prototype.setPussyToyInsertablePose = function (status) {
	this._pussyToyInsertablePose = status;
};
Game_Actor.prototype.setAnalToyInsertablePose = function (status) {
	this._analToyInsertablePose = status;
};

// Post Sex Pose
Game_Actor.prototype.setPostSexPose = function () {
	let pose = this.poseName;
	
	if($gameParty.isInGloryBattle) return false;
	
	if(this.justOrgasmed()) {
		this.setDownOrgasmPose();
	}
	else if(this.hasNoStamina()) {
		this.setDownStaminaPose(true);
	}
	else if(this.hasHalberd()) {
		this.setStandbyPose();
	}	
	else {
		this.setUnarmedPose();
	}
};

/////////
// Tachie Parts Names
/////////////////

Game_Actor.prototype.getBoobsType = function () {
	if(this._tachieBoobsType.length > 0) return this._tachieBoobsType + '_';
	else return '';
};
Game_Actor.prototype.setBoobsType = function (boobsType) {
	this._tachieBoobsType = boobsType;
	this.setPoseClothing();
};
Game_Actor.prototype.resetBoobsType = function () {
	this._tachieBoobsType = '';
};

Game_Actor.prototype.setPoseClothing = function () {
	if(DEBUG_MODE) {
		let fileId = this.getBoobsType() + this.clothingStage;
		if((this.isAroused() || this.justOrgasmed()) && this.tachieHasBoobsHard()) fileId += '_hard';
		this.setTachieBoobs(fileId);
	}
	else {
		this.setTachieBoobs('' + this.getBoobsType() + '1');
	}
	
	this.setPoseHips();
};

Game_Actor.prototype.setPoseHips = function () {
	if(this.isInMapPose() || this.isInStandbyPose() || this.isInWaitressServingPose() || this.isInAttackPose() || this.isInDefendPose() || this.isInEvadePose() || this.isInUnarmedPose() || this.isInKickPose() || this.isInDownFallDownPose() || this.isInDownOrgasmPose()) {
		if(DEBUG_MODE) {
			let fileId = String(this.clothingStage);
			//Cameltoe
			if((this.isInMapPose() || this.isInUnarmedPose() || this.isInStandbyPose()) && this.isWearingWardenClothing() && !this.isWearingPanties()) {
				if(fileId === '1')
					fileId = 'cameltoe_1';
				else if(fileId === '2')
					fileId = 'cameltoe_2';
			}
			else if(this.isInEvadePose() && this.isWearingWardenClothing() && this.isWearingAnalToy_AnalBeads()) {
				if(fileId === '1' || fileId === '2') {
					fileId = '3';
				}
			}
			this.setTachieHips(fileId);	
		}
		else {
			this.setTachieHips('1');
		}
	}
};

Game_Actor.prototype.setPosePanties = function () {
	if(this.isWearingPanties()) {
		let pantiesType = '';
		if(this.isInWaitressServingPose()) pantiesType += 'waitress_'
		pantiesType += this.getPantiesType();
		this.setTachiePanties(pantiesType);
	}
	else {
		this.resetTachiePanties();
	}
};

Game_Actor.prototype.setPoseWeapon = function () {
	if(this.hasHalberd()) {
		this.setTachieWeapon(1);
	}
	else {
		this.resetTachieWeapon();
	}
};

Game_Actor.prototype.setChatfaceKarrynPoseItems = function () {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	if(this.poseName === CHAT_FOLDER_KARRYN && this.tachieBodyExtension === 'warden_') {
		let isAroused = actor.isAroused();
		let isWearingGlovesAndHat = actor.isWearingGlovesAndHat();
		let clothingStage = actor._clothingStage;
		let chatfaceTachieBody = this.tachieBody;
			
		if(isWearingGlovesAndHat) {
			if(chatfaceTachieBody != 3) {
				this.setTachieRightArm('warden_' + chatfaceTachieBody);
				this.setTachieLeftArm('warden_' + chatfaceTachieBody);
			}
		}
		else {
			if(chatfaceTachieBody != 3) {
				this.setTachieRightArm('warden_naked' + chatfaceTachieBody);
				this.setTachieLeftArm('warden_naked' + chatfaceTachieBody);
			}
		}
		
		let pantiesName = actor.getPantiesType();
		if(actor.isWearingPanties() && pantiesName && pantiesName !== REM_TACHIE_NULL) {
			this.setTachiePanties(pantiesName);
		}
		else {
			this.resetTachiePanties();
		}
		
		if(chatfaceTachieBody == 5) {
			this.setTachieWeapon(1);
		}
		else {
			this.resetTachieWeapon();
		}
		
		let boobsName = 'warden_';
		if(chatfaceTachieBody == 3) {
			if(!isWearingGlovesAndHat) {
				boobsName += 'hold_naked';
			}
			else {
				boobsName += 'hold_' + clothingStage;
			}
			this.resetTachieRightArm();
			this.resetTachieLeftArm();
			this.setTachieSemenBoobsExtension('hold_');
			this.setTachieStrayBoobsExtension('hold_');
			this.setTachieSemenRightArmHasHCup(true);
			this.setTachieSemenLeftArmHasHCup(true);
			this.setTachieSemenRightArmHasPCup(true);
			this.setTachieSemenLeftArmHasPCup(true);
		}
		else {
			if(!isWearingGlovesAndHat) {
				boobsName += 'reg_naked';
				if(this.boobsSizeIsPCup()) {
					this.setTachieSemenBoobsExtension('4_');
					this.setTachieStrayBoobsExtension('4_');
				}
				else {
					this.resetTachieSemenBoobsExtension();
					this.resetTachieStrayBoobsExtension();
				}
			}
			else {
				boobsName += 'reg_' + clothingStage;
			}
			this.resetTachieSemenBoobsExtension();
			this.resetTachieStrayBoobsExtension();
			this.setTachieSemenRightArmHasHCup(false);
			this.setTachieSemenLeftArmHasHCup(false);
			this.setTachieSemenRightArmHasPCup(false);
			this.setTachieSemenLeftArmHasPCup(false);
		}
		
		if(this.tachieRightArm === 'warden_2' || this.tachieRightArm === 'warden_naked2') {
			let frontB = 'rightarm_2_hair_' + this.getHairColorName();
			this.setTachieFrontB(frontB);
		}
		else
			this.resetTachieFrontB();
		
		if(isAroused) boobsName += '_hard'
		this.setTachieBoobs(boobsName);
		this.setTachieHips(clothingStage);
		
		this.setTachieRightArmHasHCup(false);
	}
	else if(this.poseName === CHAT_FOLDER_KARRYN && this.tachieBodyExtension === 'secretary_') {
		let chatfaceTachieBody = this.tachieBody;
		if(chatfaceTachieBody != 3) {
			this.setTachieRightArm('secretary_' + chatfaceTachieBody);
		}
		else {
			this.resetTachieRightArm();
		}
	
		this.resetTachieBoobs();
		this.resetTachieHips();
		this.resetTachieWeapon();
		this.resetTachiePanties();
		this.resetTachieLeftArm();
		this.resetTachieHat();
		this.resetTachieFrontB();
		this.resetTachieHasHCup();
		this.resetTachieHasPCup();
	}
	else {
		this.resetTachieBoobs();
		this.resetTachieHips();
		this.resetTachieWeapon();
		this.resetTachiePanties();
		this.resetTachieRightArm();
		this.resetTachieLeftArm();
		this.resetTachieHat();
		this.resetTachieFrontB();
		this.resetTachieHasHCup();
		this.resetTachieHasPCup();
	}
	
	if(this.poseName === CHAT_FOLDER_KARRYN) {
		this.setTachieBodyHasHCup(true);
		this.setTachieBoobsHasHCup(true);
		this.setTachieSemenBoobsHasHCup(true);
		this.setTachieStrayBoobsHasHCup(true);
		this.setTachieBodyHasPCup(true);
		this.setTachieBoobsHasPCup(true);
		this.setTachieSemenBoobsHasPCup(true);
		this.setTachieStrayBoobsHasPCup(true);
		this.setTachieWeaponHasPCup(true);
		
		if(this.tachieBodyExtension === 'warden_')
			this.setTachieBodyHasPCup(false);
		
		switch(this.tachieLeftArm) {
			case 'warden_5':
			case 'warden_naked5':
				this.setTachieLeftArmHasPCup(true);
				break;
			default:
				this.setTachieLeftArmHasPCup(false);
				break;
		}
		
		switch(this.tachieRightArm) {
			case 'secretary_2':
				this.setTachieRightArmHasHCup(true);
				this.setTachieRightArmHasPCup(true);
				break;
			default:
				this.setTachieRightArmHasHCup(false);
				this.setTachieRightArmHasPCup(false);
				break;
		}
		
		if(Karryn.boobsSizeIsPCup() && !this.tachieBoobs.includes('hold')) {
			let clothingStage = actor._clothingStage;
			if(clothingStage >= 4) {
				this.setTachieSemenBoobsExtension('4_');
				this.setTachieStrayBoobsExtension('4_');
			}
			else {
				this.setTachieSemenBoobsExtension(clothingStage + '_');
				this.setTachieStrayBoobsExtension(clothingStage + '_');
			}
		}
	}
	else {
		this.setTachieBodyHasHCup(false);
		this.setTachieBoobsHasHCup(false);
		this.setTachieSemenBoobsHasHCup(false);
		this.setTachieStrayBoobsHasHCup(false);
		this.resetTachieSemenBoobsExtension();
		this.resetTachieStrayBoobsExtension();
		this.setTachieLeftArmHasHCup(false);
		this.setTachieRightArmHasHCup(false);
		
		
		this.setTachieBodyHasPCup(false);
		this.setTachieBoobsHasPCup(false);
		this.setTachieSemenBoobsHasPCup(false);
		this.setTachieStrayBoobsHasPCup(false);
		this.setTachieWeaponHasPCup(false);
		this.setTachieLeftArmHasPCup(false);
		this.setTachieRightArmHasPCup(false);
	}
	
};

///////////////
// Tachie Arms
// Set whether to draw tachie arms in front or behind tachie body
// And whether tachie right arm is in front of tachie left arm or not
// No longer really used
///////////////

Game_Actor.prototype.setTachieRightArmInFrontOfBody = function (status) {
	this._tachieRightArmInFrontOfBody = status;
};
Game_Actor.prototype.setTachieLeftArmInFrontOfBody = function (status) {
	this._tachieLeftArmInFrontOfBody = status;
};
Game_Actor.prototype.setTachieRightArmInFrontOfBoobs = function (status) {
	this._tachieRightArmInFrontOfBoobs = status;
};
Game_Actor.prototype.setTachieRightArmInFrontOfHeadAndBehindBody = function (status) {
	this._tachieRightArmInFrontOfHeadAndBehindBody = status;
};

Game_Actor.prototype.setTachieLeftArmInFrontOfBoobs = function (status) {
	this._tachieLeftArmInFrontOfBoobs = status;
};
Game_Actor.prototype.setTachieRightArmInFrontOfLeftArm = function (status) {
	this._tachieRightArmInFrontOfLeftArm = status;
};

Game_Actor.prototype.setTachieFrontInFrontOfFace = function (status) {
	this._tachieFrontInFrontOfFace = status;
};
Game_Actor.prototype.tachieFrontInFrontOfFace = function () {
	return this._tachieFrontInFrontOfFace;
};

Game_Actor.prototype.setTachieSemenRightArmInFrontOfFront = function (status) {
	this._tachieSemenRightArmInFrontOfFront = status;
};
Game_Actor.prototype.tachieSemenRightArmInFrontOfFront = function () {
	return this._tachieSemenRightArmInFrontOfFront;
};

Game_Actor.prototype.setTachieSemenLeftArmInFrontOfFront = function (status) {
	this._tachieSemenLeftArmInFrontOfFront = status;
};
Game_Actor.prototype.tachieSemenLeftArmInFrontOfFront = function () {
	return this._tachieSemenLeftArmInFrontOfFront;
};

Game_Actor.prototype.setTachieWeaponInFrontOfBody = function (status) {
	this._tachieWeaponInFrontOfBody = status;
};
Game_Actor.prototype.tachieWeaponInFrontOfBody = function () {
	return this._tachieWeaponInFrontOfBody;
};

Game_Actor.prototype.setTachieWeaponInFrontOfBoobs = function (status) {
	this._tachieWeaponInFrontOfBoobs = status;
};
Game_Actor.prototype.tachieWeaponInFrontOfBoobs = function () {
	return this._tachieWeaponInFrontOfBoobs;
};

Game_Actor.prototype.setTachieWeaponBehindEverything = function (status) {
	this._tachieWeaponBehindEverything = status;
};
Game_Actor.prototype.tachieWeaponBehindEverything = function () {
	return this._tachieWeaponBehindEverything;
};

Game_Actor.prototype.setTachieHasBoobsHard = function (status) {
	this._tachieHasBoobsHard = status;
};
Game_Actor.prototype.tachieHasBoobsHard = function () {
	return this._tachieHasBoobsHard;
};

Game_Actor.prototype.tachieRightArmInFrontOfBody = function () {
	return this._tachieRightArmInFrontOfBody;
};
Game_Actor.prototype.tachieLeftArmInFrontOfBody = function () {
	return this._tachieLeftArmInFrontOfBody;
};
Game_Actor.prototype.tachieRightArmInFrontOfBoobs = function () {
	return this._tachieRightArmInFrontOfBoobs;
};
Game_Actor.prototype.tachieRightArmInFrontOfHeadAndBehindBody = function () {
	return this._tachieRightArmInFrontOfHeadAndBehindBody;
};

Game_Actor.prototype.tachieLeftArmInFrontOfBoobs = function () {
	return this._tachieLeftArmInFrontOfBoobs;
};
Game_Actor.prototype.tachieRightArmInFrontOfLeftArm = function () {
	return this._tachieRightArmInFrontOfLeftArm;
};

Game_Actor.prototype.setTachieCockMouthInFrontOfFace = function (status) {
	this._tachieCockMouthInFrontOfFace = status;
};
Game_Actor.prototype.tachieCockMouthInFrontOfFace = function () {
	return this._tachieCockMouthInFrontOfFace;
};

Game_Actor.prototype.setTachieHeadInFrontOfBody = function (status) {
	this._tachieHeadInFrontOfBody = status;
};
Game_Actor.prototype.tachieHeadInFrontOfBody = function () {
	return this._tachieHeadInFrontOfBody;
};

Game_Actor.prototype.setTachieHatInFrontOfBody = function (status) {
	this._tachieHatInFrontOfBody = status;
};
Game_Actor.prototype.tachieHatInFrontOfBody = function () {
	return this._tachieHatInFrontOfBody;
};

Game_Actor.prototype.setTachieBoobsInFrontOfBody = function (status) {
	this._tachieBoobsInFrontOfBody = status;
};
Game_Actor.prototype.tachieBoobsInFrontOfBody = function () {
	return this._tachieBoobsInFrontOfBody;
};

Game_Actor.prototype.setTachieSemenBoobsInFrontOfBoobs = function (status) {
	this._tachieSemenBoobsInFrontOfBoobs = status;
};
Game_Actor.prototype.tachieSemenBoobsInFrontOfBoobs = function () {
	return this._tachieSemenBoobsInFrontOfBoobs;
};

Game_Actor.prototype.setTachieSemenBellyInFrontOfBoobs = function (status) {
	this._tachieSemenBellyInFrontOfBoobs = status;
};
Game_Actor.prototype.tachieSemenBellyInFrontOfBoobs = function () {
	return this._tachieSemenBellyInFrontOfBoobs;
};

Game_Actor.prototype.setTachieCockBoobsInFrontOfBoobs = function (status) {
	this._tachieCockBoobsInFrontOfBoobs = status;
};
Game_Actor.prototype.tachieCockBoobsInFrontOfBoobs = function () {
	return this._tachieCockBoobsInFrontOfBoobs;
};

Game_Actor.prototype.setTachieLeftBoobInFrontOfRightBoob = function (status) {
	this._tachieLeftBoobInFrontOfRightBoob = status;
};
Game_Actor.prototype.tachieLeftBoobInFrontOfRightBoob = function () {
	return this._tachieLeftBoobInFrontOfRightBoob;
};

Game_Actor.prototype.setTachiePantiesInFrontOfBoobs = function (status) {
	this._tachiePantiesInFrontOfBoobs = status;
};
Game_Actor.prototype.tachiePantiesInFrontOfBoobs = function () {
	return this._tachiePantiesInFrontOfBoobs;
};

Game_Actor.prototype.setTachieClitToyBehindCocks = function (status) {
	this._tachieClitToyBehindCocks = status;
};
Game_Actor.prototype.tachieClitToyBehindCocks = function () {
	return this._tachieClitToyBehindCocks;
};

Game_Actor.prototype.setTachieClitToyInFrontOfMainToys = function (status) {
	this._tachieClitToyInFrontOfMainToys = status;
};
Game_Actor.prototype.tachieClitToyInFrontOfMainToys = function () {
	return this._tachieClitToyInFrontOfMainToys;
};

Game_Actor.prototype.setTachiePussyToyInFrontOfAnalToy = function (status) {
	this._tachiePussyToyInFrontOfAnalToy = status;
};
Game_Actor.prototype.tachiePussyToyInFrontOfAnalToy = function () {
	return this._tachiePussyToyInFrontOfAnalToy;
};

Game_Actor.prototype.setTachieHolesCocksToysInFrontOfBody = function (status) {
	this._tachieHolesCocksToysInFrontOfBody = status;
};
Game_Actor.prototype.tachieHolesCocksToysInFrontOfBody = function () {
	return this._tachieHolesCocksToysInFrontOfBody;
};


Game_Actor.prototype.setTachieToysInFrontOfEverything = function (status) {
	this._tachieToysInFrontOfEverything = status;
};
Game_Actor.prototype.tachieToysInFrontOfEverything = function () {
	return this._tachieToysInFrontOfEverything;
};

Game_Actor.prototype.setTachieAnalToyInFrontOfEverything = function (status) {
	this._tachieAnalToyInFrontOfEverything = status;
};
Game_Actor.prototype.tachieAnalToyInFrontOfEverything = function () {
	return this._tachieAnalToyInFrontOfEverything;
};

Game_Actor.prototype.setTachieToysInBehindOfEverything = function (status) {
	this._tachieToysInBehindOfEverything = status;
};
Game_Actor.prototype.tachieToysInBehindOfEverything = function () {
	return this._tachieToysInBehindOfEverything;
};

Game_Actor.prototype.setHasTachieClitToyNaked = function (status) {
	this._tachieClitToyHasNaked = status;
};

///////
// Tachie Pubic
Game_Actor.prototype.setHasTachiePubic = function (status) {
	this._hasTachiePubic = status;
};

/*
Game_Actor.prototype.tachiePubicId = function() {
	if(!ConfigManager.displayPubic) return REM_TACHIE_NULL;
	if(!this._hasTachiePubic) return REM_TACHIE_NULL;
	
	if(!this._tachiePubicExtension) 
		return '1';
	else
		return '' + this._tachiePubicExtension + '1';
};
Game_Actor.prototype.setTachiePubicExtension = function (n) {
	this._tachiePubicExtension = n;
};	
Game_Actor.prototype.resetTachiePubicExtension = function () {
	this._tachiePubicExtension = '';
};
*/

Game_Actor.prototype.setHasTachieHat = function (status) {
	this._hasTachieHat = status;
};

///////////////
// Tachie Update
// Set whether to update tachie yet or not
///////////////

Game_Actor.prototype.setAllowTachieUpdate = function (allow) {
	this._allowTachieUpdate = allow;
	if(allow) this.setCacheChanged();
};
Game_Actor.prototype.allowTachieUpdate = function () {
	return this._allowTachieUpdate;
};

//////////
// Map Poses
///////////////

Game_Actor.prototype.isInMapPose = function() {
	let pose = this.poseName;
	return !$gameParty.isInWaitressBattle && ( pose == POSE_MAP );
};

Game_Actor.prototype.setWardenMapPose = function() {
	this.setAllowTachieUpdate(false);
	this.setPose(POSE_MAP);
	
	this.setHasTachiePubic(true);
	this.setHasTachieClitToyNaked(true);
	this.setPosePanties();
	
	this.setTachieEyes('normal_mae1');
	this.setTachieEyebrows('normal_kiri1');
	this.setTachieMouth('normal_nico1');
	this.setTachieHead('normal_1');
	this.setBoobsType('reg');
	this.setTachieBody(1);
	this.setTachieRightArm(1);
	this.setTachieLeftArm(1);
	this.setTachieSemenCrotchExtension('normal_');
	this.setTachieSemenCrotchPantiesExtension('normal_');
	
	this.setMaxTachieSemenBellyId(3);
	this.setMaxTachieSemenBoobsId(3);
	this.setMaxTachieSemenButtId(3);
	this.setMaxTachieSemenCrotchId(3);
	this.setMaxTachieSemenFaceId(3);
	this.setMaxTachieSemenLeftArmId(3);
	this.setMaxTachieSemenRightArmId(3);
	this.setMaxTachieWetId(3);
	this.setMaxTachieWetPantiesId(3);
	this.setMaxTachieSemenFrontAId(3);
	this.setMaxTachieSemenFrontBId(3);
	
	this.setMaxTachieStrayBoobsId(2,2,2);
	this.setMaxTachieStrayButtId(1,2,3);
	this.setMaxTachieStrayFaceId(1,2,2);
	this.setMaxTachieStrayGroinId(1,2,2);
	
	this.setTachieBoobsHasHCup(true);
	this.setTachieSemenBoobsHasHCup(true);
	this.setTachieStrayBoobsHasHCup(true);
	
	this.setTachieBoobsHasPCup(true);
	this.setTachieSemenBoobsHasPCup(true);
	this.setTachieStrayBoobsHasPCup(true);
	
	this.setWardenMapPoseExtensions();
	this.refreshSlutLvlStageVariables_Map();
	this.setAllowTachieUpdate(true);
	//disabled for for now since I don't know all the spots this function can get called
	//this.emoteMasterManager();
};

Game_Actor.prototype.setWardenMapPose_Reg = function() {
	this.setAllowTachieUpdate(false);
	$gameActors.actor(ACTOR_KARRYN_ID).setBoobsType('reg');
	this.setPoseClothing();
	this.setPosePanties();
	this.setTachieRightArm(1);
	this.setTachieLeftArm(1);
	this.setWardenMapPoseExtensions();
	this.setAllowTachieUpdate(true);
};
Game_Actor.prototype.setWardenMapPose_Holding = function() {
	this.setAllowTachieUpdate(false);
	$gameActors.actor(ACTOR_KARRYN_ID).setBoobsType('hold');
	this.setPoseClothing();
	this.setPosePanties();
	this.setWardenMapPoseExtensions();
	this.setAllowTachieUpdate(true);
};

//Called in Common Event 22: Set Boobs Naked
//Which is called in 51: Masturbation Battle and 105: Bed Sleep
Game_Actor.prototype.setWardenMapPose_Naked = function() {
	if(DEBUG_MODE) {
		//$gameSwitches.setValue(SWITCH_IS_NAKED_NO_CLOTHES_ID, true);
		this._hasNoClothesOn = true;
		this.setTachieRightArm('1_naked');
		this.setTachieLeftArm('1_naked');
		this.setTachieBody('naked_1');
		this.setWardenMapPoseExtensions();
	}
};

Game_Actor.prototype.setWardenMapPoseExtensions = function() {
	if(this.poseName !== POSE_MAP) {
		console.error('Error setWardenMapPoseExtensions called during pose ' + this.poseName);
		if($gameParty.isInWaitressBattle) this.setWaitressServingPose();
		else this.setWardenMapPose();
	}

	if(!this.isWearingGlovesAndHat() || !this.isWearingWardenClothing())
		this.resetTachieTie();
	else
		this.setTachieTie('1');
	
	if(!this.isWearingGlovesAndHat() || $gameParty.isInWaitressBattle) {
		if(this.tachieBody.includes('spread')) {
			if(Karryn.isCensored())
				this.setTachieBody('spread_1_naked_cen');
			else
				this.setTachieBody('spread_1_naked');
		}
		else {
			this.setTachieBody('naked_1');
		}
	}
	
	if(this.tachieHead === 'normal_1') {
		this.setTachieSemenFaceExtension('head_normal_');
		switch(this.tachieHoppe) {
			case 'down_1':
				this.setTachieHoppe('normal_1');
				break;
			case 'down_2':
				this.setTachieHoppe('normal_2');
				break;
			case 'down_3':
				this.setTachieHoppe('normal_3');
				break;	
		}
		switch(this.tachieSweat) {
			case 'down_1':
				this.setTachieSweat('normal_1');
				break;
			case 'down_2':
				this.setTachieSweat('normal_2');
				break;
			case 'down_3':
				this.setTachieSweat('normal_3');
				break;	
		}
		this.setTachieHairExtension('normal_');
		this.setTachieHatExtension('normal_');
		this.setTachieStrayFaceExtension('normal_');
	}
	else if(this.tachieHead === 'down_1'){
		this.setTachieSemenFaceExtension('head_down_');
		switch(this.tachieHoppe) {
			case 'normal_1':
				this.setTachieSweat('down_1');
				break;
			case 'normal_2':
				this.setTachieSweat('down_2');
				break;
			case 'normal_3':
				this.setTachieSweat('down_3');
				break;	
		}
		switch(this.tachieSweat) {
			case 'normal_1':
				this.setTachieSweat('down_1');
				break;
			case 'normal_2':
				this.setTachieSweat('down_2');
				break;
			case 'normal_3':
				this.setTachieSweat('down_3');
				break;	
		}
		this.setTachieHairExtension('down_');
		this.setTachieHatExtension('down_');
		this.setTachieStrayFaceExtension('down_');
	}

	this.setPosePanties();
	
	if(this.didLastGetHitBySkillType(JUST_SKILLTYPE_WAITRESS_FLASH) && this.isInWaitressServingPose() && DEBUG_MODE) {
		
	}
	else if(this.isInWaitressServingPose()){
		//$gameSwitches.setValue(SWITCH_IS_NAKED_NO_CLOTHES_ID, false);
		this.setPoseClothing();
	}
	else if((this._hasNoClothesOn || !this.isWearingGlovesAndHat()) && DEBUG_MODE) {
		//$gameSwitches.setValue(SWITCH_IS_NAKED_NO_CLOTHES_ID, true);
		let fileId = 'naked';
		if(this.getBoobsType() == 'hold_') fileId += '_hold';
		fileId += '_1';
		if((this.isAroused() || this.justOrgasmed()) && this.tachieHasBoobsHard()) fileId += '_hard';
		this.setTachieBoobs(fileId);
		this.resetTachieHips();
	}
	else {
		//$gameSwitches.setValue(SWITCH_IS_NAKED_NO_CLOTHES_ID, false);
		this.setPoseClothing();
	}
	
	this.setMaxTachieSemenLeftArmId(3);
	this.setMaxTachieSemenRightArmId(3);
	
	if(this.getBoobsType() == 'hold_') {
		this.setTachieSemenBoobsExtension('hold_1_');
		this.setTachieSemenLeftArmExtension('boobs_hold_');
		this.setTachieSemenRightArmExtension('boobs_hold_');
		this.setTachieStrayBoobsExtension('hold_');
		this.setTachieSemenLeftArmHasHCup(true);
		this.setTachieSemenRightArmHasHCup(true);
		this.setTachieSemenLeftArmHasPCup(true);
		this.setTachieSemenRightArmHasPCup(true);
		this.setTachieSemenFrontBHasHCup(false);
		this.setTachieSemenFrontBHasPCup(false);
		this.setTachieSemenBoobsHasPCupExtensionBasedOnClothingStage(false);
		this.setTachieStrayBoobsHasPCupExtensionBasedOnClothingStage(false);
		this.resetTachieRightArm();
		this.resetTachieLeftArm();
		this.resetTachieFrontA();
		this.resetTachieFrontB();
		this.resetTachieBackA();
		this.resetTachieSemenFrontAExtension();
		this.resetTachieSemenFrontBExtension();
	}
	else {
		this.resetTachieStrayBoobsExtension();
		this.resetTachieSemenBoobsExtension();
		this.resetTachieSemenFrontAExtension();
		this.resetTachieSemenFrontBExtension();
		this.setTachieSemenLeftArmHasHCup(false);
		this.setTachieSemenRightArmHasHCup(false);
		this.setTachieSemenLeftArmHasPCup(false);
		this.setTachieSemenRightArmHasPCup(false);
		this.setTachieSemenFrontBHasHCup(false);
		this.setTachieSemenFrontBHasPCup(false);
		this.setTachieSemenBoobsHasPCupExtensionBasedOnClothingStage(true);
		this.setTachieStrayBoobsHasPCupExtensionBasedOnClothingStage(true);
		
		if(this.tachieMouth === 'normal_be1' || this.tachieMouth === 'down_be1') {
			this.setTachieRightArm('8');
		}
		
		
		if(this.isWearingGlovesAndHat()) {
			switch(this.tachieLeftArm) {
			case '1_naked':
				this.setTachieLeftArm('1');
			break;
			case '2_naked':
				this.setTachieLeftArm('2');
			break;
			case '3_naked':
				this.setTachieLeftArm('3');
			break;
			case '4_naked':
				this.setTachieLeftArm('4');
			break;
			case 'boob1_naked':
				this.setTachieLeftArm('boob1');
			break;
			case 'boob2_naked':
				this.setTachieLeftArm('boob2');
			break;
			case 'defend_1_naked':
				this.setTachieLeftArm('defend_1');
			break;
			case 'defend_2_naked':
				this.setTachieLeftArm('defend_2');
			break;
			case 'face_1_naked':
				this.setTachieLeftArm('face_1');
			break;
			case 'hair_1_naked':
				this.setTachieLeftArm('hair_1');
			break;
			case 'ketsu_1_naked':
				this.setTachieLeftArm('ketsu_1');
			break;
			case 'peace_1_naked':
				this.setTachieLeftArm('peace_1');
			break;
			case 'rest_boobs_1_naked':
				this.setTachieLeftArm('rest_boobs_1');
			break;
			case 'toyA_grip_1_naked':
				this.setTachieLeftArm('toyA_grip_1');
			break;
			case 'up1_naked':
				this.setTachieLeftArm('up1');
			break;
			}
			
			switch(this.tachieRightArm) {
			case '1_naked':
				this.setTachieRightArm('1');
			break;
			case '2_naked':
				this.setTachieRightArm('2');
			break;
			case '3_naked':
				this.setTachieRightArm('3');
			break;
			case '4_naked':
				this.setTachieRightArm('4');
			break;
			case '5_naked':
				this.setTachieRightArm('5');
			break;
			case '6_naked':
				this.setTachieRightArm('6');
			break;
			case '7_naked':
				this.setTachieRightArm('7');
			break;
			case '8_naked':
				this.setTachieRightArm('8');
			break;
			case 'boob1_naked':
				this.setTachieRightArm('boob1');
			break;
			case 'cover_1_naked':
				this.setTachieRightArm('cover_1');
			break;
			case 'hip_1_naked':
				this.setTachieRightArm('hip_1');
			break;
			case 'ketsu_1_naked':
				this.setTachieRightArm('ketsu_1');
			break;
			case 'kupa_1_naked':
				this.setTachieRightArm('kupa_1');
			break;
			case 'kuri_1_naked':
				this.setTachieRightArm('kuri_1');
			break;
			case 'rest_boobs_1_naked':
				this.setTachieRightArm('rest_boobs_1');
			break;
			case 'toyC_grip_1_naked':
				this.setTachieRightArm('toyC_grip_1');
			break;
			case 'toyP_grip_1_naked':
				this.setTachieRightArm('toyP_grip_1');
			break;
			case 'up1_naked':
				this.setTachieRightArm('up1');
			break;
			case 'weapon_1_naked':
				this.setTachieRightArm('weapon_1');
			break;
			case 'weapon_tired_1_naked':
				this.setTachieRightArm('weapon_tired_1');
			break;
			case 'weapon_sado_1_naked':
				this.setTachieRightArm('weapon_sado_1');
			break;
			case 'weapon_maso_1_naked':
				this.setTachieRightArm('weapon_maso_1');
			break;
			}
		}
		else {
			switch(this.tachieLeftArm) {
			case '1':
				this.setTachieLeftArm('1_naked');
			break;
			case '2':
				this.setTachieLeftArm('2_naked');
			break;
			case '3':
				this.setTachieLeftArm('3_naked');
			break;
			case '4':
				this.setTachieLeftArm('4_naked');
			break;
			case 'boob1':
				this.setTachieLeftArm('boob1_naked');
			break;
			case 'boob2':
				this.setTachieLeftArm('boob2_naked');
			break;
			case 'defend_1':
				this.setTachieLeftArm('defend_1_naked');
			break;
			case 'defend_2':
				this.setTachieLeftArm('defend_2_naked');
			break;
			case 'face_1':
				this.setTachieLeftArm('face_1_naked');
			break;
			case 'hair_1':
				this.setTachieLeftArm('hair_1_naked');
			break;
			case 'ketsu_1':
				this.setTachieLeftArm('ketsu_1_naked');
			break;
			case 'peace_1':
				this.setTachieLeftArm('peace_1_naked');
			break;
			case 'rest_boobs_1':
				this.setTachieLeftArm('rest_boobs_1_naked');
			break;
			case 'toyA_grip_1':
				this.setTachieLeftArm('toyA_grip_1_naked');
			break;
			case 'up1':
				this.setTachieLeftArm('up1_naked');
			break;
			}
		
			switch(this.tachieRightArm) {
			case '1':
				this.setTachieRightArm('1_naked');
			break;
			case '2':
				this.setTachieRightArm('2_naked');
			break;
			case '3':
				this.setTachieRightArm('3_naked');
			break;
			case '4':
				this.setTachieRightArm('4_naked');
			break;
			case '5':
				this.setTachieRightArm('5_naked');
			break;
			case '6':
				this.setTachieRightArm('6_naked');
			break;
			case '7':
				this.setTachieRightArm('7_naked');
			break;
			case '8':
				this.setTachieRightArm('8_naked');
			break;
			case 'boob1':
				this.setTachieRightArm('boob1_naked');
			break;
			case 'cover_1':
				this.setTachieRightArm('cover_1_naked');
			break;
			case 'hip_1':
				this.setTachieRightArm('hip_1_naked');
			break;
			case 'ketsu_1':
				this.setTachieRightArm('ketsu_1_naked');
			break;
			case 'kupa_1':
				this.setTachieRightArm('kupa_1_naked');
			break;
			case 'kuri_1':
				this.setTachieRightArm('kuri_1_naked');
			break;
			case 'rest_boobs_1':
				this.setTachieRightArm('rest_boobs_1_naked');
			break;
			case 'toyC_grip_1':
				this.setTachieRightArm('toyC_grip_1_naked');
			break;
			case 'toyP_grip_1':
				this.setTachieRightArm('toyP_grip_1_naked');
			break;
			case 'up1':
				this.setTachieRightArm('up1_naked');
			break;
			case 'weapon_1':
				this.setTachieRightArm('weapon_1_naked');
			break;
			case 'weapon_tired_1':
				this.setTachieRightArm('weapon_tired_1_naked');
			break;
			case 'weapon_sado_1':
				this.setTachieRightArm('weapon_sado_1_naked');
			break;
			case 'weapon_maso_1':
				this.setTachieRightArm('weapon_maso_1_naked');
			break;
			}
		}
		
		switch(this.tachieLeftArm) {
		case '1': 
		case '1_naked':
			this.setTachieSemenLeftArmExtension('1_');
		break;
		case '2': 
		case '2_naked':
			this.setTachieSemenLeftArmExtension('2_');
		break;
		case '3': 
		case '3_naked':
			this.setTachieSemenLeftArmExtension('3_');
			this.setTachieSemenLeftArmHasPCup(true);
		break;
		case '4': 
		case '4_naked':
			this.setTachieSemenLeftArmExtension('4_');
		break;
		case 'boob1': 
		case 'boob1_naked':
			this.setTachieSemenLeftArmExtension('boob1_');
			this.setTachieSemenLeftArmHasHCup(true);
			this.setTachieSemenLeftArmHasPCup(true);
		break;
		case 'boob2': 
		case 'boob2_naked':
			this.setTachieSemenLeftArmExtension('boob2_');
			this.setTachieSemenLeftArmHasPCup(true);
		break;
		case 'defend_1': 
		case 'defend_1_naked':
			this.setTachieSemenLeftArmExtension('defend_1_');
		break;
		case 'defend_2': 
		case 'defend_2_naked':
			this.setTachieSemenLeftArmExtension('defend_2_');
		break;
		case 'face_1': 
		case 'face_1_naked':
			this.setTachieSemenLeftArmExtension('face_1_');
			this.setTachieSemenFrontAExtension('leftarm_face_1_');
		break;
		case 'hair_1': 
		case 'hair_1_naked':
			this.setTachieSemenLeftArmExtension('hair_1_');
		break;
		case 'ketsu_1': 
		case 'ketsu_1_naked':
			this.setTachieSemenLeftArmExtension('ketsu_1_');
		break;
		case 'peace_1': 
		case 'peace_1_naked':
			this.setTachieSemenLeftArmExtension('peace_1_');
			this.setTachieSemenFrontAExtension('leftarm_peace_1_');
		break;
		case 'rest_boobs_1': 
		case 'rest_boobs_1_naked':
			this.setTachieSemenLeftArmExtension('rest_boobs_1_');
			this.setTachieSemenFrontAExtension('leftarm_rest_boobs_1_');
		break;
		case 'toyA_grip_1': 
		case 'toyA_grip_1_naked':
			this.setTachieSemenLeftArmExtension('toyA_grip_1_');
		break;
		case 'up1': 
		case 'up1_naked':
			this.setTachieSemenLeftArmExtension('up1_');
		break;
		default:
			this.resetTachieSemenLeftArmExtension();
			this.setMaxTachieSemenLeftArmId(0);
		}
		
		switch(this.tachieRightArm) {
		case '1': 
		case '1_naked':
			this.setTachieSemenRightArmExtension('1_');
		break;
		case '2':
		case '2_naked':
			this.setTachieSemenRightArmExtension('2_');
		break;
		case '3':
		case '3_naked':
			this.setTachieSemenRightArmExtension('3_');
		break;
		case '4':
		case '4_naked':
			this.setTachieSemenRightArmExtension('4_');
		break;
		case '5': 
		case '5_naked':
			this.setTachieSemenRightArmExtension('5_');
		break;
		case '6': 
		case '6_naked':
			this.setTachieSemenRightArmExtension('6_');
		break;
		case '7': 
		case '7_naked':
			this.setTachieSemenRightArmExtension('7_');
		break;
		case '8':
		case '8_naked':
			this.setTachieSemenRightArmExtension('8_');
		break;
		case 'boob1':
		case 'boob1_naked':
			this.setTachieSemenRightArmExtension('boob1_');
			this.setTachieSemenFrontBExtension('rightarm_boob1_');
			this.setTachieSemenFrontBHasHCup(true);
			this.setTachieSemenFrontBHasPCup(true);
		break;
		case 'cover_1':
		case 'cover_1_naked':
			this.setTachieSemenRightArmExtension('cover_1_');
		break;
		case 'ketsu_1':
		case 'ketsu_1_naked':
			this.setTachieSemenRightArmExtension('ketsu_1_');
		break;
		case 'kupa_1':
		case 'kupa_1_naked':
			this.setTachieSemenRightArmExtension('kupa_1_');
		break;
		case 'kuri_1':
		case 'kuri_1_naked':
			this.setTachieSemenRightArmExtension('kuri_1_');
		break;
		case 'rest_boobs_1':
		case 'rest_boobs_1_naked':
			this.setTachieSemenRightArmExtension('rest_boobs_1_');
		break;
		case 'toyC_grip_1':
		case 'toyC_grip_1_naked':
			this.setTachieSemenRightArmExtension('toyC_grip_1_');
		break;
		case 'toyP_grip_1':
		case 'toyP_grip_1_naked':
			this.setTachieSemenRightArmExtension('toyP_grip_1_');
		break;
		case 'weapon_tired_1':
		case 'weapon_tired_1_naked':
			this.setTachieSemenRightArmExtension('weapon_tired_1_');
			this.setTachieSemenFrontBExtension('rightarm_weapon_tired_1_');
		break;
		case 'weapon_maso_1':
		case 'weapon_maso_1_naked':
			this.setTachieSemenRightArmExtension('weapon_maso_1_');
		break;
		case 'weapon_sado_1':
		case 'weapon_sado_1_naked':
			this.setTachieSemenRightArmExtension('weapon_sado_1_');
		break;
		case 'up1': 
		case 'up1_naked':
			this.setTachieSemenRightArmExtension('up1_');
		break;
		default:
			this.resetTachieSemenRightArmExtension();
			this.setMaxTachieSemenRightArmId(0);
		}
		
		this.resetTachieFrontB();
		this.resetTachieBackA();
		this.setTachieFrontBHasHCup(false);
		this.setTachieFrontBHasPCup(false);
		
		switch(this.tachieRightArm) {
		case '2':
		case '2_naked':
			let backA = 'rightarm_2_hair_' + this.getHairColorName();
			this.setTachieBackA(backA);
		break;
		case 'boob1':
			this.setTachieFrontB('rightarm_boob1');
			this.setTachieFrontBHasHCup(true);
			this.setTachieFrontBHasPCup(true);
		break;
		case 'boob1_naked':
			this.setTachieFrontB('rightarm_boob1_naked');
			this.setTachieFrontBHasHCup(true);
			this.setTachieFrontBHasPCup(true);
		break;
		case '6':
			this.setTachieFrontB('rightarm_6');
		break;
		case '6_naked':
			this.setTachieFrontB('rightarm_6_naked');
		break;
		case 'rest_boobs_1':
			this.setTachieFrontB('rightarm_rest_boobs_1');
		break;
		case 'rest_boobs_1_naked':
			this.setTachieFrontB('rightarm_rest_boobs_1_naked');
		break;
		case 'weapon_tired_1':
			this.setTachieFrontB('rightarm_weapon_tired_1');
		break;
		case 'weapon_tired_1_naked':
			this.setTachieFrontB('rightarm_weapon_tired_1_naked');
		break;
		}
		
		this.resetTachieFrontA();
		this.setTachieLeftArmHasHCup(false);
		this.setTachieLeftArmHasPCup(false);
		
		switch(this.tachieLeftArm) {
			case '3':
			case '3_naked':
				this.setTachieLeftArmHasPCup(true);
			break;
			case '5_naked':
			case 'boob1':
			case 'boob1_naked':
			case 'boob2':
			case 'boob2_naked':
				this.setTachieLeftArmHasHCup(true);
				this.setTachieLeftArmHasPCup(true);
			break;
			case 'face_1':
				this.setTachieFrontA('leftarm_face_1');
			break;
			case 'face_1_naked':
				this.setTachieFrontA('leftarm_face_1_naked');
			break;
			case 'peace_1':
				this.setTachieFrontA('leftarm_peace_1');
			break;
			case 'peace_1_naked':
				this.setTachieFrontA('leftarm_peace_1_naked');
			break;
			case 'rest_boobs_1':
				this.setTachieFrontA('leftarm_rest_boobs_1');
			break;
			case 'rest_boobs_1_naked':
				this.setTachieFrontA('leftarm_rest_boobs_1_naked');
			break;
		}
		
		switch(this.tachieFrontH) {
			case 'weapon_1':
				this.setTachieFrontHHasPCup(true);
			break;
			default:
				this.setTachieFrontHHasPCup(false);
			break;
		}
		
	}
};

/////////////
// Combat Poses - Standard
// Only for generic battles, special battles do not use combat poses
///////////////


Game_Actor.prototype.setStandbyPose = function() {
	this.setAllowTachieUpdate(false);
	let pose = this.poseName;
	let notAlreadyInSamePose = pose != POSE_STANDBY;
	
	if(notAlreadyInSamePose)
		this.setPose(POSE_STANDBY);
	
	this.setPosePanties();
	this.setSpankablePose(true);
	this.setHasTachiePubic(true);
	this.setHasTachieClitToyNaked(true);
	
	this.setMaxTachieSemenBellyId(3);
	this.setMaxTachieSemenBoobsId(3);
	this.setMaxTachieSemenCrotchId(3);
	this.setMaxTachieSemenFaceId(3);
	this.setMaxTachieSemenLeftArmId(3);
	this.setMaxTachieSemenRightArmId(3);
	this.setMaxTachieWetId(3);
	this.setMaxTachieWetPantiesId(3);
	this.setMaxTachieSemenFloorId(3);
	
	this.setSpriteBattlerPosData(POSE_STANDBY);
	this.setAllBodySlotsFreeExceptToy();
	
	if(!this.isWearingGlovesAndHat()) {
		this.setTachieBody('naked_1');
	}
	
	this.setMaxTachieStrayBoobsId(2,2,2);
	this.setMaxTachieStrayFaceId(1,2,2);
	this.setMaxTachieStrayGroinId(1,2,2);
	
	this.setTachieBoobsHasHCup(true);
	this.setTachieSemenBoobsHasHCup(true);
	this.setTachieStrayBoobsHasHCup(true);
	this.setTachieBoobsHasPCup(true);
	this.setTachieSemenBoobsHasPCup(true);
	this.setTachieStrayBoobsHasPCup(true);
	this.setTachieSemenBoobsHasPCupExtensionBasedOnClothingStage(true);
	this.setTachieStrayBoobsHasPCupExtensionBasedOnClothingStage(true);
	
	if(notAlreadyInSamePose)
		this.emoteStandbyPose();
	this.setAllowTachieUpdate(true);
	BattleManager.playNormalBgm();
};


Game_Actor.prototype.setAttackPose = function() {
	this.setAllowTachieUpdate(false);
	let pose = this.poseName;
	let notAlreadyInSamePose = pose != POSE_ATTACK;
	
	if(notAlreadyInSamePose)
		this.setPose(POSE_ATTACK);
	
	this.setPosePanties();
	//this.setPoseWeapon();
	this.setHasTachiePubic(true);
	this.setHasTachieClitToyNaked(true);
	
	this.setTachieBody('1');
	
	if(!this.isWearingGlovesAndHat()) {
		if((this.isAroused() || this.justOrgasmed())) 
			this.setTachieBoobs('naked_1_hard');
		else
			this.setTachieBoobs('naked_1');
		
		this.setTachieRightArm('naked_1');
		this.setTachieLeftArm('naked_1');
	}
	else {
		this.setPoseClothing();
		this.setTachieRightArm('1');
		this.setTachieLeftArm('1');
	}
	
	this.setMaxTachieSemenBackId(3);
	this.setMaxTachieSemenBellyId(3);
	this.setMaxTachieSemenBoobsId(3);
	this.setMaxTachieSemenButtId(3);
	this.setMaxTachieSemenCrotchId(3);
	this.setMaxTachieSemenFaceId(3);
	this.setMaxTachieSemenLeftArmId(3);
	this.setMaxTachieSemenRightArmId(3);
	this.setMaxTachieWetId(3);
	this.setMaxTachieSemenFloorId(3);
	this.setMaxTachieStrayBoobsId(1,2,2);
	this.setMaxTachieStrayButtId(1,2,2);
	this.setMaxTachieStrayFaceId(1,2,2);
	this.setMaxTachieStrayGroinId(1,1,1);
	
	this.setSpriteBattlerPosData(POSE_STANDBY);
	this.setAllBodySlotsFreeExceptToy();
	
	this.setTachieBoobsHasHCup(true);
	this.setTachieSemenBoobsHasHCup(true);
	this.setTachieStrayBoobsHasHCup(true);
	this.setTachieBoobsHasPCup(true);
	this.setTachieSemenBoobsHasPCup(true);
	this.setTachieStrayBoobsHasPCup(true);
	
	BattleManager.playNormalBgm();
	
	if(notAlreadyInSamePose)
		this.emoteAttackPose();
	
	this.setAllowTachieUpdate(true);
};
Game_Actor.prototype.setDefendPose = function() {
	this.setAllowTachieUpdate(false);
	let pose = this.poseName;
	let notAlreadyInSamePose = pose != POSE_DEFEND;
	
	if(notAlreadyInSamePose)
		this.setPose(POSE_DEFEND);
	
	if(!this.isWearingGlovesAndHat()) {
		this.setTachieBody('naked_1');
	}
	else {
		this.setTachieBody('1');
	}
	
	this.setPosePanties();
	this.setPoseWeapon();
	this.setHasTachiePubic(true);
	this.setHasTachieClitToyNaked(true);
	
	this.setMaxTachieSemenBellyId(3);
	this.setMaxTachieSemenBoobsId(3);
	this.setMaxTachieSemenCrotchId(3);
	this.setMaxTachieSemenFaceId(3);
	this.setMaxTachieSemenLeftArmId(3);
	this.setMaxTachieSemenRightArmId(3);
	this.setMaxTachieWetId(3);
	this.setMaxTachieSemenFloorId(3);
	
	this.setSpriteBattlerPosData(POSE_DEFEND);
	this.setAllBodySlotsFreeExceptToy();
	
	BattleManager.playNormalBgm();
	
	
	if(notAlreadyInSamePose)
		this.emoteDefendPose();
	else {
		if(!this.isWearingGlovesAndHat()) {
			if((this.isAroused() || this.justOrgasmed())) 
				this.setTachieBoobs('naked_1_hard');
			else
				this.setTachieBoobs('naked_1');
		}
		else {
			this.setPoseClothing();
		}
		
		let hasHalberd = this.hasHalberd();
		if(hasHalberd) {
			if(!this.isWearingGlovesAndHat()) {
				this.setTachieLeftArm('halberd_naked');
				this.setTachieRightArm('halberd_naked');
				this.setTachieFrontA('rightarm_halberd_naked');
			}
			else {
				this.setTachieLeftArm('halberd');
				this.setTachieRightArm('halberd');
				this.setTachieFrontA('rightarm_halberd');
			}
			this.resetTachieSemenLeftArmExtension();
			this.resetTachieSemenRightArmExtension();
			this.setTachieSemenRightArmHasPCup(false);
		}
		else {
			if(!this.isWearingGlovesAndHat()) {
				this.setTachieLeftArm('unarmed_naked');
				this.setTachieRightArm('unarmed_naked');
				this.setTachieFrontB('rightarm_unarmed_naked');
			}
			else {
				this.setTachieLeftArm('unarmed');
				this.setTachieRightArm('unarmed');
				this.setTachieFrontB('rightarm_unarmed');
			}
			this.setTachieSemenLeftArmExtension('unarmed_');
			this.setTachieSemenRightArmExtension('unarmed_');
			this.setTachieFrontBHasPCup(true);
			this.setTachieSemenRightArmHasPCup(true);
		}
	}
	
	
	this.setMaxTachieStrayBoobsId(2,3,3);
	this.setMaxTachieStrayButtId(1,1,1);
	this.setMaxTachieStrayFaceId(1,2,2);
	this.setMaxTachieStrayGroinId(1,2,2);
	
	this.setTachieBoobsHasHCup(true);
	this.setTachieStrayBoobsHasHCup(true);
	this.setTachieSemenBoobsHasHCup(true);
	this.setTachieHipsHasHCup(true);
	this.setTachieBoobsHasPCup(true);
	this.setTachieStrayBoobsHasPCup(true);
	this.setTachieSemenBoobsHasPCup(true);
	
	//this.emoteDefendPose();
	
	this.setAllowTachieUpdate(true);
};
Game_Actor.prototype.setEvadePose = function() {
	this.setAllowTachieUpdate(false);
	let pose = this.poseName;
	let notAlreadyInSamePose = pose != POSE_EVADE;
	
	if(notAlreadyInSamePose)
		this.setPose(POSE_EVADE);
	
	this.setPosePanties();
	this.setPoseWeapon();
	this.setSpankablePose(true);
	this.setHasTachiePubic(true);
	this.setHasTachieClitToyNaked(false);
	
	this.setMaxTachieSemenAnalId(3);
	this.setMaxTachieSemenBackId(3);
	this.setMaxTachieSemenBoobsId(3);
	this.setMaxTachieSemenButtId(3);
	this.setMaxTachieSemenCrotchId(3);
	this.setMaxTachieSemenFaceId(3);
	this.setMaxTachieSemenLeftArmId(3);
	this.setMaxTachieSemenRightArmId(3);
	this.setMaxTachieWetId(3);
	this.setMaxTachieSemenFloorId(3);
	
	this.setSpriteBattlerPosData(POSE_EVADE);
	
	BattleManager.playNormalBgm();
	
	this.setMaxTachieStrayBoobsId(2,3,4);
	this.setMaxTachieStrayButtId(2,3,4);
	this.setMaxTachieStrayFaceId(1,2,2);
	this.setMaxTachieStrayGroinId(1,2,4);
	
	this.setTachieBoobsHasHCup(true);
	this.setTachieStrayBoobsHasHCup(true);
	this.setTachieSemenBoobsHasHCup(true);
	this.setTachieBoobsHasPCup(true);
	this.setTachieStrayBoobsHasPCup(true);
	this.setTachieSemenBoobsHasPCup(true);
	
	if(notAlreadyInSamePose)
		this.emoteEvadePose();
	
	this.setAllowTachieUpdate(true);
};

//////
// Unarm Poses
/////////

Game_Actor.prototype.setUnarmedPose = function() {
	this.setAllowTachieUpdate(false);
	let pose = this.poseName;
	let notAlreadyInSamePose = pose != POSE_UNARMED;
	
	if(notAlreadyInSamePose)
		this.setPose(POSE_UNARMED);
	
	this.setSpriteBattlerPosData(POSE_UNARMED);
	this.removeAllPettedInsertExceptToy();
	this.setAllBodySlotsFreeExceptToy();
	
	this.setPosePanties();
	this.setSpankablePose(true);
	this.setHasTachiePubic(true);
	this.setHasTachieClitToyNaked(true);
	
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM) || this.justOrgasmed();
	let isAroused = this.isAroused() || justOrgasmed;
	let isHorny = this.isHorny;
	let isOffBalanced = this.isOffBalance;
	let isConfident = this.isConfident;
	let tachieLeftArmName = '';
	let tachieRightArmName = '';
	this.resetTachieFrontA();
	this.resetTachieFrontB();
	
	if(!this.isWearingGlovesAndHat()) {
		if(isAroused) {
			this.setTachieBoobs('naked_1_hard');
		}
		else {
			this.setTachieBoobs('naked_1');
		}
		tachieLeftArmName = 'naked_';
		tachieRightArmName = 'naked_';
		this.resetTachieHips();
		this.resetTachieHat();
		this.resetTachieTie();
	}
	else {
		this.setPoseClothing();
		this.setTachieTie('1');
	}
	

	if(isConfident) {
		tachieLeftArmName += 'confident_1';
		tachieRightArmName += '1';

		this.setTachieSemenLeftArmExtension('confident_1_');
	}
	else {
		tachieLeftArmName += '1';
		tachieRightArmName += '1';
		
		this.resetTachieSemenLeftArmExtension();
	}
	
	this.setTachieLeftArm(tachieLeftArmName);
	this.setTachieRightArm(tachieRightArmName);
	
	//frontA
	if(isOffBalanced) {
		this.setTachieFrontA('offbalanced');
	}
	
	//frontB
	if(isHorny) {
		this.setTachieFrontB('breath_1');
	}
		
	this.setMaxTachieSemenBellyId(3);
	this.setMaxTachieSemenBoobsId(3);
	this.setMaxTachieSemenButtId(3);
	this.setMaxTachieSemenCrotchId(3);
	this.setMaxTachieSemenCrotchPantiesId(3);
	this.setMaxTachieSemenFaceId(3);
	this.setMaxTachieSemenLeftArmId(3);
	this.setMaxTachieSemenRightArmId(3);
	this.setMaxTachieWetId(3);
	this.setMaxTachieWetPantiesId(3);
	this.setMaxTachieSemenFloorId(3);
	
	BattleManager.playNormalBgm();
	
	this.setMaxTachieStrayBoobsId(1,2,2);
	this.setMaxTachieStrayButtId(1,2,3);
	this.setMaxTachieStrayFaceId(1,2,2);
	this.setMaxTachieStrayGroinId(1,2,2);
	
	this.setTachieBoobsHasHCup(true);
	this.setTachieStrayBoobsHasHCup(true);
	this.setTachieSemenBoobsHasHCup(true);
	this.setTachieRightArmHasPCup(true);
	this.setTachieBoobsHasPCup(true);
	this.setTachieStrayBoobsHasPCup(true);
	this.setTachieSemenRightArmHasPCup(true);
	this.setTachieSemenBoobsHasPCup(true);
	this.setTachieSemenBoobsHasPCupExtensionBasedOnClothingStage(true);
	this.setTachieStrayBoobsHasPCupExtensionBasedOnClothingStage(true);
	
	if(notAlreadyInSamePose)
		this.emoteUnarmedPose();
	
	this.setAllowTachieUpdate(true);
};

Game_Actor.prototype.setKickPose = function(item) {
	this.setAllowTachieUpdate(false);
	let pose = this.poseName;
	let notAlreadyInSamePose = pose != POSE_KICK;
	
	if(notAlreadyInSamePose)
		this.setPose(POSE_KICK);
	
	this.setSpriteBattlerPosData(POSE_KICK);
	
	if(!this.isWearingGlovesAndHat()) {
		if(Karryn.isCensored())
			this.setTachieBody('naked_1_cen');
		else
			this.setTachieBody('naked_1');

		if((this.isAroused() || this.justOrgasmed())) 
			this.setTachieBoobs('naked_1_hard');
		else
			this.setTachieBoobs('naked_1');
	}
	else {
		if(Karryn.isCensored())
			this.setTachieBody('1_cen');
		else
			this.setTachieBody('1');
		this.setPoseClothing();
	}
	
	this.setPosePanties();
	this.setPoseWeapon();
	this.setSpankablePose(true);
	this.setHasTachiePubic(true);
	this.setHasTachieClitToyNaked(true);
	
	this.setMaxTachieSemenAnalId(3);
	this.setMaxTachieSemenBackId(3);
	this.setMaxTachieSemenBellyId(3);
	this.setMaxTachieSemenBoobsId(3);
	this.setMaxTachieSemenButtId(3);
	this.setMaxTachieSemenCrotchId(3);
	this.setMaxTachieSemenFaceId(3);
	this.setMaxTachieSemenLeftArmId(3);
	this.setMaxTachieSemenRightArmId(3);
	this.setMaxTachieWetId(3);
	this.setMaxTachieWetPantiesId(3);
	this.setMaxTachieSemenFloorId(3);
	
	BattleManager.playNormalBgm();
	
	this.setMaxTachieStrayBoobsId(1,2,2);
	this.setMaxTachieStrayButtId(2,3,3);
	this.setMaxTachieStrayFaceId(1,2,2);
	this.setMaxTachieStrayGroinId(1,2,2);
	
	this.setTachieBoobsHasHCup(true);
	this.setTachieStrayBoobsHasHCup(true);
	this.setTachieSemenBoobsHasHCup(true);
	this.setTachieBoobsHasPCup(true);
	this.setTachieStrayBoobsHasPCup(true);
	this.setTachieSemenBoobsHasPCup(true);
	
	this.emoteKickPose(item);
	this.setAllowTachieUpdate(true);
};

Game_Actor.prototype.isInStandbyPose = function() {
	return this.poseName == POSE_STANDBY;
};
Game_Actor.prototype.isInAttackPose = function() {
	return this.poseName == POSE_ATTACK;
};
Game_Actor.prototype.isInDefendPose = function() {
	return this.poseName == POSE_DEFEND;
};
Game_Actor.prototype.isInEvadePose = function() {
	return this.poseName == POSE_EVADE;
};
Game_Actor.prototype.isInUnarmedPose = function() {
	return this.poseName == POSE_UNARMED;
};
Game_Actor.prototype.isInKickPose = function() {
	return this.poseName == POSE_KICK;
};

Game_Actor.prototype.isInCombatPose = function() {
	return this.isInStandbyPose() || this.isInAttackPose() || this.isInDefendPose() ||
	this.isInEvadePose() || this.isInUnarmedPose() || this.isInKickPose() ;
};


Game_Actor.prototype.isInJobPose = function() {
	return $gameParty.isInWaitressBattle || $gameParty.isInReceptionistBattle || $gameParty.isInGloryBattle || $gameParty.isInStripperBattle || $gameParty.isInTrainerBattle;
};

Game_Actor.prototype.isInShowSpankMarkPose = function() {
	return this.isInDefeatedLevel4Pose() || this.isInDefeatedLevel2Pose() || this.isInTrainerRinkanPose();
};

Game_Actor.prototype.isInNoTachieHairPose = function() {
	return this.isInTrainerStandbyPose() || this.isInStripperIntermissionPose();
};

Game_Actor.prototype.isAttackable = function() {
	return (this.isInCombatPose() && this.stamina >= 1);
};
Game_Actor.prototype.canAttack = function(target) {
	return this.isAttackable();
};



///////
// Down Pose
//////////

//POSE_DOWN_STAMINA = Down pose for no Stamina
Game_Actor.prototype.setDownStaminaPose = function(skipRemLine) {
	let pose = this.poseName;
	let notAlreadyInSamePose = pose != POSE_DOWN_STAMINA;
	
	if(skipRemLine) this._remLine_skipNextDownStamina = true;
	
	if(notAlreadyInSamePose) {
		this.setPose(POSE_DOWN_STAMINA);
		this.removeStatesBeforeSex();
		this.addToActorDebuffDownStaminaRecord();
		this.resetAttackSkillConsUsage();
		this.resetEndurePleasureStanceCost();
		this.resetSexSkillConsUsage(false);
	}
	
	this.setPosePanties();
	this.setSpankablePose(true);
	this.setHasTachiePubic(true);
	this.setHasTachieClitToyNaked(false);
	
	this.setTachieHead('1');
	
	this.setSpriteBattlerPosData(POSE_DOWN_STAMINA);
	this.removeAllPettedInsertExceptToy();
	this.setAllBodySlotsFreeExceptToy();
	
	this.setMaxTachieSemenAnalId(3);
	this.setMaxTachieSemenBellyId(3);
	this.setMaxTachieSemenBoobsId(3);
	this.setMaxTachieSemenButtId(3);
	this.setMaxTachieSemenCrotchId(3);
	this.setMaxTachieSemenFaceId(3);
	this.setMaxTachieSemenLeftArmId(3);
	this.setMaxTachieSemenRightArmId(3);
	this.setMaxTachieWetId(3);
	this.setMaxTachieWetPantiesId(3);
	this.setMaxTachieSemenFloorId(3);
	
	if(notAlreadyInSamePose) {
		this.passiveDownStaminaState_addHornyEffect();
		this.passiveDownStaminaState_increaseCooldown();
		this.emoteDownStaminaPose();
		
		BattleManager.actionRemLines(KARRYN_LINE_DOWN_STAMINA);
	}
	
	this.setMaxTachieStrayBoobsId(2,3,3);
	this.setMaxTachieStrayButtId(1,2,4);
	this.setMaxTachieStrayFaceId(1,2,2);
	this.setMaxTachieStrayGroinId(2,3,4);
	
	this.setTachieBoobsHasHCup(true);
	this.setTachieStrayBoobsHasHCup(true);
	this.setTachieSemenBoobsHasHCup(true);
	this.setTachieBoobsHasPCup(true);
	this.setTachieStrayBoobsHasPCup(true);
	this.setTachieSemenBoobsHasPCup(true);
	this.setTachieSemenBellyHasPCup(true);
	
	//BattleManager.playDownStaminaBgmChange();
	BattleManager.playSpecialBgm_DownStamina();
}

//POSE_DOWN_ORGASM = Down pose for having an orgasm 
Game_Actor.prototype.setDownOrgasmPose = function() {
	let pose = this.poseName;
	let notAlreadyInSamePose = pose != POSE_DOWN_ORGASM;
	
	if(notAlreadyInSamePose) {
		this.setPose(POSE_DOWN_ORGASM);
		this.resetAttackSkillConsUsage();
		this.resetEndurePleasureStanceCost();
		this.resetSexSkillConsUsage(false);
	}
	
	this.removeStatesBeforeSex();

	this.setTachieHasBoobsHard(false);
	this.setPoseClothing();
	this.setPosePanties();
	this.setSpankablePose(true);
	this.setHasTachiePubic(true);
	this.setHasTachieClitToyNaked(false);

	if(!this.isWearingGlovesAndHat()) {
		if(Karryn.isCensored())
			this.setTachieBody('naked_1_cen');
		else
			this.setTachieBody('naked_1');

		this.setTachieRightArm('naked_1');
		this.setTachieLeftArm('naked_1');
	}
	else {
		if(Karryn.isCensored())
			this.setTachieBody('1_cen');
		else
			this.setTachieBody('1');
		
		this.setTachieRightArm('1');
		this.setTachieLeftArm('1');
	}
	
	if(this.boobsSizeIsPCup()) {
		this.setTachieHasBoobsHard(true);
	}
	else {
		this.setTachieHasBoobsHard(false);
	}
	
	this.setSpriteBattlerPosData(POSE_DOWN_ORGASM);
	this.removeAllPettedInsertExceptToy();
	this.setAllBodySlotsFreeExceptToy();
	
	this.setMaxTachieSemenAnalId(3);
	this.setMaxTachieSemenBackId(3);
	this.setMaxTachieSemenBoobsId(3);
	this.setMaxTachieSemenButtId(3);
	this.setMaxTachieSemenCrotchId(3);
	this.setMaxTachieSemenCrotchPantiesId(3);
	this.setMaxTachieSemenLeftArmId(3);
	this.setMaxTachieSemenRightArmId(3);
	this.setMaxTachieSemenFloorId(3);
	this.setMaxTachieWetId(3);
	this.setMaxTachieWetPantiesId(3);
	
	this.setMaxTachieStrayBoobsId(2,3,3);
	this.setMaxTachieStrayButtId(2,3,4);
	this.setMaxTachieStrayGroinId(1,2,4);
	
	this.setTachieBoobsHasHCup(true);
	this.setTachieStrayBoobsHasHCup(true);
	this.setTachieSemenBoobsHasHCup(true);
	this.setTachieBoobsHasPCup(true);
	this.setTachieLeftArmHasPCup(true);
	this.setTachieRightArmHasPCup(true);
	this.setTachieStrayBoobsHasPCup(true);
	this.setTachieSemenBoobsHasPCup(true);
	this.setTachieSemenLeftArmHasPCup(true);
	this.setTachieSemenRightArmHasPCup(true);
	
	BattleManager.playSpecialBgm_DownOther();
	
	if(notAlreadyInSamePose) {
		this.emoteDownOrgasmPose();
	}
};

Game_Actor.prototype.setDownFallDownPose = function() {
	let pose = this.poseName;
	let notAlreadyInSamePose = pose != POSE_DOWN_FALLDOWN;
	
	if(notAlreadyInSamePose) {
		this.setPose(POSE_DOWN_FALLDOWN);
		this.removeStatesBeforeSexExceptFallen();
		this.resetAttackSkillConsUsage();
		this.resetEndurePleasureStanceCost();
		this.resetSexSkillConsUsage(false);
		this._cooldownTurns[SKILL_FALLEN_REST_ID] = 0;
	}
	
	this.setPosePanties();
	
	if(!this.isWearingGlovesAndHat()) {
		if(Karryn.isCensored())
			this.setTachieBody('naked_1_cen');
		else
			this.setTachieBody('naked_1');
		
		if((this.isAroused() || this.justOrgasmed())) 
			this.setTachieBoobs('naked_1_hard');
		else
			this.setTachieBoobs('naked_1');
		
		this.setTachieRightArm('naked_1');
		this.setTachieLeftArm('naked_1');
	}
	else {
		if(Karryn.isCensored())
			this.setTachieBody('1_cen');
		else
			this.setTachieBody('1');
		
		if((this.isWearingPussyToy() || this.isWearingClitToy()) && this.isWearingWardenClothing() && !this.isClothingAtStageSeePussy()) {
			this.damageClothing(CLOTHES_WARDEN_START, true);
			if(!this.isClothingAtStageSeePussy()) {
				this.damageClothing(CLOTHES_WARDEN_START, true);
			}
		}
		
		this.setTachieRightArm('1');
		this.setTachieLeftArm('1');
	}
	
	this.setSpriteBattlerPosData(POSE_DOWN_FALLDOWN);
	this.removeAllPettedInsertExceptToy();
	this.setAllBodySlotsFreeExceptToy();
	this.setHasTachiePubic(true);
	this.setHasTachieClitToyNaked(true);
	
	this.setMaxTachieSemenAnalId(3);
	this.setMaxTachieSemenAnalPantiesId(3);
	this.setMaxTachieSemenBellyId(3);
	this.setMaxTachieSemenBoobsId(3);
	this.setMaxTachieSemenCrotchId(3);
	this.setMaxTachieSemenCrotchPantiesId(3);
	this.setMaxTachieSemenFaceId(3);
	this.setMaxTachieSemenLeftArmId(3);
	this.setMaxTachieSemenRightArmId(3);
	this.setMaxTachieSemenFloorId(3);
	this.setMaxTachieWetId(3);
	this.setMaxTachieWetPantiesId(3);
	
	BattleManager.playSpecialBgm_DownOther();
	
	this.setMaxTachieStrayBoobsId(2,3,3);
	this.setMaxTachieStrayButtId(1,2,4);
	this.setMaxTachieStrayFaceId(1,2,2);
	this.setMaxTachieStrayGroinId(2,3,4);
	
	this.setTachieBoobsHasHCup(true);
	this.setTachieStrayBoobsHasHCup(true);
	this.setTachieSemenBoobsHasHCup(true);
	this.setTachieBoobsHasPCup(true);
	this.setTachieStrayBoobsHasPCup(true);
	this.setTachieSemenBoobsHasPCup(true);
	
	if(notAlreadyInSamePose) {
		this.emoteDownFalldownPose();
		BattleManager.actionRemLines(KARRYN_LINE_DOWN_FALLDOWN);
	}
}

Game_Actor.prototype.isInDownPose = function() {
	return (this.isInDownOrgasmPose() || this.isInDownStaminaPose() || this.isInDownFallDownPose());
}
Game_Actor.prototype.isInDownOrgasmPose = function() {
	return this.poseName == POSE_DOWN_ORGASM;
}
Game_Actor.prototype.isInDownStaminaPose = function() {
	return this.poseName == POSE_DOWN_STAMINA;
}
Game_Actor.prototype.isInDownFallDownPose = function() {
	return this.poseName == POSE_DOWN_FALLDOWN;
}

////////
// Sex Pose
////////////

//Ready to change into sex pose
Game_Actor.prototype.isInReadyPose = function() {
	return true;
};

Game_Actor.prototype.isInSexPose = function() {
	if($gameParty.isInStripperBattle) return this.isInStripperSexPose();
	if($gameParty.isInTrainerBattle) return this.trainerBattle_isInSexPose();
	if($gameParty.isInReceptionistBattle) return this.receptionistBattle_isInSexPose();
	return !this.isInCombatPose() && !this.isInDownPose() && !this.isInMasturbationPose() && 
	!this.isInWaitressServingPose() && !this.isInMapPose();
};

Game_Actor.prototype.isInSexablePose = function() {
	return $gameParty.isInTrainerBattle || $gameParty.isInReceptionistBattle;
};

Game_Actor.prototype.isInFuckedFromBehindSexPose = function() { //Doggy 
	if(!this.pussySexPoseSkillsIsEnabled() && !this.analSexPoseSkillsIsEnabled()) return false;
	return this.isInDefeatedLevel2Pose() || this.isInDefeatedLevel4Pose() || this.isInGoblinCunnilingusSexPose() || this.isInLayingTittyfuckSexPose() || this.isInRimjobSexPose() || this.isInWaitressSexPose() || this.isInToiletStandLeftPose() || this.isInToiletStandRightPose() || this.isInWerewolfBackPose();
};

Game_Actor.prototype.isInCowgirlSexPose = function() {
	if(!this.pussySexPoseSkillsIsEnabled() && !this.analSexPoseSkillsIsEnabled()) return false;
	return this.isInReverseCowgirlPose() || this.isInLizardmanCowgirlPose() || this.isInKarrynCowgirlPose();
};

Game_Actor.prototype.isInRestrainedPose = function() {
	return this.isInDefeatedLevel3Pose() || this.isInDefeatedLevel4Pose() || this.isInThugGangbangPose() || this.isInSlimeAnalPiledriverSexPose() || this.isInKickCounterSexPose() || this.isInWerewolfBackPose() || this.isInYetiCarryPose();
};
Game_Actor.prototype.isNotInRestrainedPose = function() {
	return !this.isInRestrainedPose();
};



///////////
// Set Sex Pose
//////////////

Game_Actor.prototype.isInThugGangbangPose = function() {
	return this.poseName == POSE_THUGGANGBANG;
};
Game_Actor.prototype.setThugGangbangSexPose = function() {
	this.setAllowTachieUpdate(false);
	let dontResetPose = this._dontResetSexPose;
	let dontResetBodySlots = this.isInSexPose();
	this.setPose(POSE_THUGGANGBANG, dontResetPose);
	this.setSpriteBattlerPosData(POSE_THUGGANGBANG);
	if(dontResetPose) {
		this.setAllowTachieUpdate(true);
		this.emoteMasterManager();
		this._dontResetSexPose = false;
		return;
	}
	this.removeStatesBeforeSex();
	if(!dontResetBodySlots) {
		this.removeAllPettedInsertExceptToy();
		this.setAllBodySlotsFreeExceptToy();
	}
	else {
		this.setAllBodySlotsFreeExceptPettedInsert();
	}
	this.removePussyToy();
	this.setHasTachiePubic(true);
	this.setHasTachieClitToyNaked(true);
	
	if(!this.isWearingGlovesAndHat()) {
		if(Karryn.isCensored())
			this.setTachieBody('naked_1_cen');
		else
			this.setTachieBody('naked_1');
		this.resetTachieTie();
	}
	else {
		if(Karryn.isCensored())
			this.setTachieBody('1_cen');
		else
			this.setTachieBody('1');
		this.setTachieTie('1');
	}
	
	this.setTachieBoobs('empty');
	this.setTachieSemenLeftArmExtension('empty_');
	this.setTachieSemenRightArmExtension('empty_');
	
	this.setMaxTachieSemenBoobsId(1);
	this.setMaxTachieSemenBellyId(1);
	this.setMaxTachieSemenCrotchId(1);
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieSemenLeftArmId(1);
	this.setMaxTachieSemenRightArmId(1);
	this.setMaxTachieSemenFloorId(3);
	this.setMaxTachieWetId(1);

	this.setBodyPartFree_PettingOnly(CLIT_ID);
	this.setBodyPartFree_PettingOnly(THIGHS_ID);
	this.setBodyPartUnavailable(RIGHT_HAND_ID);
	this.setBodyPartUnavailable(BUTT_ID);
	this.setBodyPartUnavailable(ANAL_ID);
	this.setBodyPartUnavailable(FEET_ID);
	
	BattleManager.playSpecialBgm_EnemySex();
	
	this.setMaxTachieStrayBoobsId(2,3,5);
	this.setMaxTachieStrayFaceId(1,2,2);
	this.setMaxTachieStrayGroinId(2,3,4);
	this.setTachieStrayBoobsExtension('empty_');
	
	this.setTachieBoobsHasHCup(true);
	this.setTachieFrontBHasHCup(true);
	this.setTachieStrayBoobsHasHCup(true);
	this.setTachieSemenBoobsHasHCup(true);
	this.setTachieCockBoobsHasHCup(true);
	this.setTachieBoobsHasPCup(true);
	this.setTachieFrontBHasPCup(true);
	this.setTachieStrayBoobsHasPCup(true);
	this.setTachieSemenBoobsHasPCup(true);
	this.setTachieCockBoobsHasPCup(true);
	this.setTachieSemenCockBoobsHasPCup(true);
	
	if(dontResetBodySlots) {
		BattleManager.upgradingPoseReinsertBody(this);
	}
	
	this.emoteThugGangbangPose();
	
	this.setAllowTachieUpdate(true);
};

Game_Actor.prototype.isInWerewolfBackPose = function() {
	return this.poseName == POSE_WEREWOLF_BACK;
};
Game_Actor.prototype.setWerewolfBackPose = function(holeInserted) {
	this.setAllowTachieUpdate(false);
	let dontResetPose = this._dontResetSexPose;
	let dontResetBodySlots = this.isInSexPose();
	this.setPose(POSE_WEREWOLF_BACK, dontResetPose);
	this.setSpriteBattlerPosData(POSE_WEREWOLF_BACK);
	if(dontResetPose) {
		this.setAllowTachieUpdate(true);
		this.emoteMasterManager();
		this._dontResetSexPose = false;
		return;
	}
	this.removeStatesBeforeSex();
	if(!dontResetBodySlots) {
		this.removeAllPettedInsertExceptToy();
		this.setAllBodySlotsFreeExceptToy();
	}
	else {
		this.setAllBodySlotsFreeExceptPettedInsert();
	}
	this.setHasTachiePubic(false);
	this.setHasTachieClitToyNaked(false);
	
	this.setTachieBody('1');
	this.setTachieBoobs('1');
	
	if(!this.isWearingGlovesAndHat()) {
		this.resetTachieTie();
		this.setTachieLeftArm('naked_1');
		this.setTachieRightArm('naked_1');
	}
	else {
		this.setTachieTie('1');
		this.setTachieLeftArm('1');
		this.setTachieRightArm('1');
	}
	
	if(holeInserted === PUSSY_ID) {
		this.setBodyPartUnavailable(ANAL_ID);
		this.setTachieButt('high');
		this.setTachieSemenAnalExtension('high_');
		this.setTachieSemenBackExtension('high_');
		this.setTachieSemenButtExtension('high_');
		this.setTachieSemenCrotchExtension('high_');
		this.setTachieSemenWetExtension('high_');
		this.setTachieStrayButtExtension('high_');
	}
	else {
		this.setBodyPartUnavailable(PUSSY_ID);
		this.setTachieButt('low');
		this.setTachieSemenAnalExtension('low_');
		this.setTachieSemenBackExtension('low_');
		this.setTachieSemenButtExtension('low_');
		this.setTachieSemenCrotchExtension('low_');
		this.setTachieSemenWetExtension('low_');
		this.setTachieStrayButtExtension('low_');
	}

	this.setMaxTachieSemenBackId(1);
	this.setMaxTachieSemenBoobsId(1);
	this.setMaxTachieSemenButtId(1);
	this.setMaxTachieSemenCrotchId(1);
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieSemenLeftArmId(1);
	this.setMaxTachieSemenRightArmId(1);
	this.setMaxTachieSemenFloorId(3);
	this.setMaxTachieWetId(1);

	this.setBodyPartFree_PettingOnly(BOOBS_ID);
	this.setBodyPartFree_PettingOnly(NIPPLES_ID);
	this.setBodyPartUnavailable(CLIT_ID);
	this.setBodyPartUnavailable(LEFT_HAND_ID);
	this.setBodyPartUnavailable(RIGHT_HAND_ID);
	this.setBodyPartUnavailable(BUTT_ID);
	this.setBodyPartUnavailable(THIGHS_ID);
	this.setBodyPartUnavailable(FEET_ID);
	
	BattleManager.playSpecialBgm_EnemySex();
	
	this.setMaxTachieStrayBoobsId(2,3,5);
	this.setMaxTachieStrayButtId(2,3,4);
	this.setMaxTachieStrayFaceId(1,2,2);
	
	this.setTachieBoobsHasHCup(true);
	this.setTachieTieHasHCup(true);
	this.setTachieRightArmHasHCup(true);
	this.setTachieSemenRightArmHasHCup(true);
	this.setTachieSemenBoobsHasHCup(true);
	this.setTachieStrayBoobsHasHCup(true);
	this.setTachieBoobsHasPCup(true);
	this.setTachieTieHasPCup(true);
	this.setTachieRightArmHasPCup(true);
	this.setTachieLeftArmHasPCup(true);
	this.setTachieSemenLeftArmHasPCup(true);
	this.setTachieSemenBoobsHasPCup(true);
	this.setTachieStrayBoobsHasPCup(true);
	
	if(dontResetBodySlots) {
		BattleManager.upgradingPoseReinsertBody(this);
	}
	
	this.emoteWerewolfBackPose();
	
	this.setAllowTachieUpdate(true);
};


Game_Actor.prototype.isInGuardGangbangPose = function() {
	return this.poseName == POSE_GUARDGANGBANG;
};
Game_Actor.prototype.setGuardGangbangSexPose = function() {
	this.setAllowTachieUpdate(false);
	let dontResetPose = this._dontResetSexPose;
	let dontResetBodySlots = this.isInSexPose();
	this.setPose(POSE_GUARDGANGBANG, dontResetPose);
	this.setSpriteBattlerPosData(POSE_GUARDGANGBANG);
	if(dontResetPose) {
		this.setAllowTachieUpdate(true);
		this.emoteMasterManager();
		this._dontResetSexPose = false;
		return;
	}
	this.removeStatesBeforeSex();
	if(!dontResetBodySlots) {
		this.removeAllPettedInsertExceptToy();
		this.setAllBodySlotsFreeExceptToy();
	}
	else {
		this.setAllBodySlotsFreeExceptPettedInsert();
	}
	this.removePussyToy();
	this.setSpankablePose(true);
	this.setHasTachiePubic(true);
	this.setHasTachieClitToyNaked(false);
	
	this.setTachieBoobs('1');
	
	if(!this.isWearingGlovesAndHat()) {
		this.setTachieRightArm('normal_naked');
		this.setTachieBody('naked_1');
	}
	else {
		this.setTachieRightArm('normal');
		this.setTachieBody('1');
	}
	
	this.setMaxTachieSemenAnalId(1);
	this.setMaxTachieSemenBackId(1);
	this.setMaxTachieSemenBoobsId(1);
	this.setMaxTachieSemenButtId(1);
	this.setMaxTachieSemenCrotchId(1);
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieSemenRightArmId(1);
	this.setMaxTachieSemenFloorId(3);
	this.setMaxTachieWetId(1);

	this.setBodyPartFree_PettingOnly(CLIT_ID);
	this.setBodyPartFree_PettingOnly(BOOBS_ID);
	this.setBodyPartFree_PettingOnly(NIPPLES_ID);
	this.setBodyPartFree_PettingOnly(THIGHS_ID);
	this.setBodyPartUnavailable(RIGHT_HAND_ID);
	this.setBodyPartUnavailable(LEFT_HAND_ID);
	this.setBodyPartUnavailable(FEET_ID);
	
	BattleManager.playSpecialBgm_EnemySex();
	
	this.setMaxTachieStrayBoobsId(1,2,2);
	this.setMaxTachieStrayButtId(2,3,4);
	this.setMaxTachieStrayFaceId(2,2,2);
	this.setMaxTachieStrayGroinId(1,2,4);
	
	this.setTachieBoobsHasHCup(true);
	this.setTachieStrayBoobsHasHCup(true);
	this.setTachieSemenBoobsHasHCup(true);
	this.setTachieBoobsHasPCup(true);
	this.setTachieStrayBoobsHasPCup(true);
	this.setTachieSemenBoobsHasPCup(true);
	
	if(dontResetBodySlots) {
		BattleManager.upgradingPoseReinsertBody(this);
	}
	
	this.emoteGuardGangbangPose();
	
	this.setAllowTachieUpdate(true);
};

Game_Actor.prototype.isInReverseCowgirlPose = function() {
	return this.poseName == POSE_REVERSE_COWGIRL;
};
Game_Actor.prototype.setReverseCowgirlSexPose = function(karrynSkill, target) {
	this.setAllowTachieUpdate(false);
	let dontResetPose = this._dontResetSexPose;
	let dontResetBodySlots = this.isInSexPose();
	this.setPose(POSE_REVERSE_COWGIRL, dontResetPose);
	this.setSpriteBattlerPosData(POSE_REVERSE_COWGIRL);
	if(dontResetPose) {
		this.emoteReverseCowgirlPose();
		this.setAllowTachieUpdate(true);
		this._dontResetSexPose = false;
		return;
	}
	this.removeStatesBeforeSex();
	if(!dontResetBodySlots) {
		this.removeAllPettedInsertExceptToy();
		this.setAllBodySlotsFreeExceptToy();
	}
	else {
		this.setAllBodySlotsFreeExceptPettedInsert();
	}
	this.removeAnalToy();
	this.setSpankablePose(true);
	this.setHasTachiePubic(false);
	this.setHasTachieClitToyNaked(false);
	
	this.setTachieBoobs('1');
	this.setTachieHead('close');
	this.setTachieHatExtension('close_');
	this.setTachieHairExtension('close_');
	this.setTachieSemenFaceExtension('close_');
	this.setTachieSemenLeftArmExtension('normal_');

	this.setMaxTachieSemenBackId(1);
	this.setMaxTachieSemenBoobsId(1);
	this.setMaxTachieSemenButtId(1);
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieSemenLeftArmId(1);
	this.setMaxTachieSemenRightArmId(0);
	this.setMaxTachieSemenCockAnalId(0);
	this.setMaxTachieSemenFloorId(3);

	this.setBodyPartFree_PettingOnly(CLIT_ID);
	this.setBodyPartFree_PettingOnly(BOOBS_ID);
	this.setBodyPartFree_PettingOnly(NIPPLES_ID);
	this.setBodyPartFree_PettingOnly(PUSSY_ID);
	this.setBodyPartFree_PettingOnly(THIGHS_ID);
	this.setBodyPartUnavailable(FEET_ID);
	
	this.setTachieBoobsHasHCup(true);
	this.setTachieSemenBoobsHasHCup(true);
	this.setTachieStrayBoobsHasHCup(true);
	this.setTachieLeftArmHasHCup(true);
	this.setTachieSemenLeftArmHasHCup(true);
	this.setTachieBoobsHasPCup(true);
	this.setTachieSemenBoobsHasPCup(true);
	this.setTachieStrayBoobsHasPCup(true);
	
	if(karrynSkill)
		BattleManager.playSpecialBgm_KarrynSex();
	else
		BattleManager.playSpecialBgm_EnemySex();
	

	this.setMaxTachieStrayBoobsId(1,2,2);
	this.setMaxTachieStrayButtId(2,3,4);
	
	if(dontResetBodySlots) {
		BattleManager.upgradingPoseReinsertBody(this);
	}
	
	this.emoteReverseCowgirlPose(target);
	
	this.setAllowTachieUpdate(true);
};

Game_Actor.prototype.isInLizardmanCowgirlPose = function() {
	return this.poseName == POSE_LIZARDMAN_COWGIRL;
};
Game_Actor.prototype.setLizardmanCowgirlSexPose = function() {
	this.setAllowTachieUpdate(false);
	let dontResetPose = this._dontResetSexPose;
	let dontResetBodySlots = this.isInSexPose();
	this.setPose(POSE_LIZARDMAN_COWGIRL, dontResetPose);
	this.setSpriteBattlerPosData(POSE_LIZARDMAN_COWGIRL);
	if(dontResetPose) {
		this.setAllowTachieUpdate(true);
		this.emoteMasterManager();
		this._dontResetSexPose = false;
		return;
	}
	this.removeStatesBeforeSex();
	if(!dontResetBodySlots) {
		this.removeAllPettedInsertExceptToy();
		this.setAllBodySlotsFreeExceptToy();
	}
	else {
		this.setAllBodySlotsFreeExceptPettedInsert();
	}
	this.removePussyToy();
	this.setHasTachiePubic(true);
	this.setSpankablePose(true);
	this.setHasTachieClitToyNaked(false);
	
	if(!this.isWearingGlovesAndHat()) {
		this.setTachieBody('naked_1');
	}
	else {
		this.setTachieBody('1');
	}
	
	this.setTachieBoobs('1');
	
	this.setTachieSemenRightArmExtension('normal_');
	this.setTachieSemenFaceExtension('normal_');
	this.resetTachieSemenMouthExtension();
	
	this.setMaxTachieSemenAnalId(1);
	this.setMaxTachieSemenBackId(1);
	this.setMaxTachieSemenBoobsId(1);
	this.setMaxTachieSemenButtId(1);
	this.setMaxTachieSemenCrotchId(1);
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieSemenRightArmId(1);
	this.setMaxTachieSemenFloorId(3);
	this.setMaxTachieWetId(1);
	
	this.setMaxTachieStrayBoobsId(1,1,1);
	this.setMaxTachieStrayButtId(1,2,3);
	this.setMaxTachieStrayFaceId(1,2,2);
	this.setMaxTachieStrayGroinId(1,2,3);

	this.setBodyPartFree_PettingOnly(BOOBS_ID);
	this.setBodyPartFree_PettingOnly(NIPPLES_ID);
	this.setBodyPartFree_PettingOnly(CLIT_ID);
	this.setBodyPartFree_PettingOnly(THIGHS_ID);
	this.setBodyPartUnavailable(FEET_ID);
	this.setBodyPartUnavailable(LEFT_HAND_ID);
	
	this.setTachieBoobsHasHCup(true);
	this.setTachieBoobsHasPCup(true);
	
	BattleManager.playSpecialBgm_EnemySex();
	
	if(dontResetBodySlots) {
		BattleManager.upgradingPoseReinsertBody(this);
	}
	
	if(this.isWearingAnalToy_AnalBeads())
		this.setToyInserted_AnalToy_AnalBeads(true);
	
	this.emoteLizardmanCowgirlPose();
	this.setAllowTachieUpdate(true);
};

Game_Actor.prototype.isInKarrynCowgirlPose = function() {
	return this.poseName == POSE_KARRYN_COWGIRL;
};
Game_Actor.prototype.setKarrynCowgirlSexPose = function() {
	this.setAllowTachieUpdate(false);
	let dontResetPose = this._dontResetSexPose;
	let dontResetBodySlots = this.isInSexPose();
	this.setPose(POSE_KARRYN_COWGIRL, dontResetPose);
	this.setSpriteBattlerPosData(POSE_KARRYN_COWGIRL);
	if(dontResetPose) {
		this.setAllowTachieUpdate(true);
		this.emoteMasterManager();
		this._dontResetSexPose = false;
		return;
	}
	this.removeStatesBeforeSex();
	if(!dontResetBodySlots) {
		this.removeAllPettedInsertExceptToy();
		this.setAllBodySlotsFreeExceptToy();
	}
	else {
		this.setAllBodySlotsFreeExceptPettedInsert();
	}
	this.removePussyToy();
	this.setSpankablePose(false);
	this.setHasTachiePubic(true);
	this.setHasTachieClitToyNaked(true);
	
	if(this.isWearingGlovesAndHat()) {
		this.setTachieTie(1);
	}
	else {
		this.resetTachieTie();
	}
	
	this.setMaxTachieSemenBellyId(1);
	this.setMaxTachieSemenBoobsId(1);
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieSemenLeftArmId(1);
	this.setMaxTachieSemenRightArmId(1);
	this.setMaxTachieSemenCrotchId(1);
	this.setMaxTachieSemenFloorId(3);

	this.setBodyPartFree_PettingOnly(CLIT_ID);
	this.setBodyPartFree_PettingOnly(BUTT_ID);
	this.setBodyPartFree_PettingOnly(ANAL_ID);
	this.setBodyPartFree_PettingOnly(THIGHS_ID);
	this.setBodyPartUnavailable(FEET_ID);
	this.setBodyPartUnavailable(RIGHT_HAND_ID);
	this.setBodyPartUnavailable(LEFT_HAND_ID);
	
	this.setTachieBoobsHasHCup(true);
	this.setTachieSemenBoobsHasHCup(true);
	this.setTachieStrayBoobsHasHCup(true);
	this.setTachieBoobsHasPCup(true);
	this.setTachieSemenBoobsHasPCup(true);
	this.setTachieStrayBoobsHasPCup(true);
	
	BattleManager.playSpecialBgm_KarrynSex();
	
	this.setMaxTachieStrayBoobsId(2,3,3);
	this.setMaxTachieStrayFaceId(1,2,2);
	this.setMaxTachieStrayGroinId(2,3,3);
	
	if(dontResetBodySlots) {
		BattleManager.upgradingPoseReinsertBody(this);
	}
	
	this.emoteKarrynCowgirlPose();
	
	this.setAllowTachieUpdate(true);
};

Game_Actor.prototype.isInGoblinCunnilingusSexPose = function() {
	return this.poseName == POSE_GOBLINCUNNILINGUS;
};
Game_Actor.prototype.setGoblinCunnilingusSexPose = function() {
	this.setAllowTachieUpdate(false);
	let dontResetPose = this._dontResetSexPose;
	let dontResetBodySlots = this.isInSexPose();
	this.setPose(POSE_GOBLINCUNNILINGUS, dontResetPose);
	this.setSpriteBattlerPosData(POSE_GOBLINCUNNILINGUS);
	if(dontResetPose) {
		this.setAllowTachieUpdate(true);
		this.emoteMasterManager();
		this._dontResetSexPose = false;
		return;
	}
	this.removeStatesBeforeSex();
	if(!dontResetBodySlots) {
		this.removeAllPettedInsertExceptToy();
		this.setAllBodySlotsFreeExceptToy();
	}
	else {
		this.setAllBodySlotsFreeExceptPettedInsert();
	}
	this.setClitToyInsertablePose(false);
	this.setPussyToyInsertablePose(false);
	this.removePussyToy();
	this.setSpankablePose(true);
	this.setHasTachiePubic(true);
	this.setHasTachieClitToyNaked(false);
	
	this.setMaxTachieSemenAnalId(3);
	this.setMaxTachieSemenBoobsId(1);
	this.setMaxTachieSemenBellyId(1);
	this.setMaxTachieSemenButtId(1);
	this.setMaxTachieSemenCrotchId(1);
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieSemenLeftArmId(1);
	this.setMaxTachieSemenRightArmId(1);
	this.setMaxTachieSemenFloorId(3);
	this.setMaxTachieWetId(1);

	this.setBodyPartFree_PettingOnly(CLIT_ID);
	this.setBodyPartFree_PettingOnly(THIGHS_ID);
	this.setBodyPartFree_PettingOnly(BUTT_ID);
	this.setBodyPartFree_PettingOnly(ANAL_ID);
	this.setBodyPartUnavailable(RIGHT_HAND_ID);
	this.setBodyPartUnavailable(LEFT_HAND_ID);
	this.setBodyPartUnavailable(STOMACH_ID);
	this.setBodyPartUnavailable(FEET_ID);
	
	BattleManager.playSpecialBgm_EnemySex();
	
	this.setMaxTachieStrayBoobsId(1,2,2);
	this.setMaxTachieStrayButtId(2,3,4);
	this.setMaxTachieStrayFaceId(1,1,1);
	this.setMaxTachieStrayGroinId(1,2,4);
	
	this.setTachieBoobsHasHCup(true);
	this.setTachieSemenBoobsHasHCup(true);
	this.setTachieStrayBoobsHasHCup(true);
	this.setTachieBoobsHasPCup(true);
	this.setTachieSemenBoobsHasPCup(true);
	this.setTachieStrayBoobsHasPCup(true);
	this.setTachieBackAHasPCup(true);
	
	if(dontResetBodySlots) {
		BattleManager.upgradingPoseReinsertBody(this);
	}
	
	this.emoteGoblinCunnilingusPose();
	
	this.setAllowTachieUpdate(true);
};

Game_Actor.prototype.isInOrcPaizuriSexPose = function() {
	return this.poseName == POSE_ORC_PAIZURI;
};
Game_Actor.prototype.setOrcPaizuriSexPose = function() {
	this.setAllowTachieUpdate(false);
	let dontResetPose = this._dontResetSexPose;
	let dontResetBodySlots = this.isInSexPose();
	this.setPose(POSE_ORC_PAIZURI, dontResetPose);
	this.setSpriteBattlerPosData(POSE_ORC_PAIZURI);
	if(dontResetPose) {
		this.setAllowTachieUpdate(true);
		this.emoteMasterManager();
		this._dontResetSexPose = false;
		return;
	}
	this.removeStatesBeforeSex();
	if(!dontResetBodySlots) {
		this.removeAllPettedInsertExceptToy();
		this.setAllBodySlotsFreeExceptToy();
	}
	else {
		this.setAllBodySlotsFreeExceptPettedInsert();
	}
	this.setSpankablePose(false);
	this.setHasTachiePubic(false);
	this.setHasTachieClitToyNaked(false);

	this.setTachieBody(1);
	this.setTachieBoobs(1);

	if(this.isWearingGlovesAndHat()) {
		this.setTachieTie(1);
		this.setTachieRightArm('normal');
		this.setTachieLeftArm('normal');
	}
	else {
		this.setTachieRightArm('normal_naked');
		this.setTachieLeftArm('normal_naked');
	}
	
	

	this.setMaxTachieSemenBoobsId(1);
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieSemenLeftArmId(1);
	this.setMaxTachieSemenRightArmId(1);
	this.setMaxTachieSemenCockBoobsId(1);
	this.setMaxTachieSemenFloorId(3);

	this.setBodyPartUnavailable(THIGHS_ID);
	this.setBodyPartUnavailable(PUSSY_ID);
	this.setBodyPartUnavailable(ANAL_ID);
	this.setBodyPartUnavailable(FEET_ID);
	
	BattleManager.playSpecialBgm_EnemySex();
	
	this.setMaxTachieStrayBoobsId(2,3,4);
	this.setMaxTachieStrayFaceId(1,2,2);
	
	this.setTachieBoobsHasHCup(true);
	this.setTachieFrontAHasHCup(true);
	this.setTachieSemenBoobsHasHCup(true);
	this.setTachieStrayBoobsHasHCup(true);
	this.setTachieBoobsHasPCup(true);
	this.setTachieFrontAHasPCup(true);
	this.setTachieSemenBoobsHasPCup(true);
	this.setTachieStrayBoobsHasPCup(true);
	this.setTachieSemenCockBoobsHasPCup(true);
	
	if(dontResetBodySlots) {
		BattleManager.upgradingPoseReinsertBody(this);
	}
	
	this.emoteOrcPaizuriPose();
	
	this.setAllowTachieUpdate(true);
};

Game_Actor.prototype.isInYetiPaizuriSexPose = function() {
	return this.poseName == POSE_YETI_PAIZURI;
};
Game_Actor.prototype.setYetiPaizuriSexPose = function() {
	this.setAllowTachieUpdate(false);
	let dontResetPose = this._dontResetSexPose;
	let dontResetBodySlots = this.isInSexPose();
	this.setPose(POSE_YETI_PAIZURI, dontResetPose);
	this.setSpriteBattlerPosData(POSE_YETI_PAIZURI);
	if(dontResetPose) {
		this.setAllowTachieUpdate(true);
		this.emoteMasterManager();
		this._dontResetSexPose = false;
		return;
	}
	this.removeStatesBeforeSex();
	if(!dontResetBodySlots) {
		this.removeAllPettedInsertExceptToy();
		this.setAllBodySlotsFreeExceptToy();
	}
	else {
		this.setAllBodySlotsFreeExceptPettedInsert();
	}
	this.setSpankablePose(true);
	this.setHasTachiePubic(true);
	this.setHasTachieClitToyNaked(false);
	
	if(this.isWearingGlovesAndHat()) {
		this.setTachieBody(1);
		this.setTachieLeftArm('1');
	}
	else {
		this.setTachieBody('naked_1');
		this.setTachieLeftArm('naked_1');
	}
	
	this.setTachieFrontA('yeti');
	this.setTachieBoobs('1');

	this.setMaxTachieSemenBackId(1);
	this.setMaxTachieSemenBellyId(1);
	this.setMaxTachieSemenBoobsId(1);
	this.setMaxTachieSemenButtId(1);
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieSemenCrotchId(1);
	this.setMaxTachieSemenAnalId(1);
	this.setMaxTachieSemenLeftArmId(1);
	this.setMaxTachieSemenFloorId(3);

	this.setBodyPartUnavailable(NIPPLES_ID);
	this.setBodyPartUnavailable(THIGHS_ID);
	this.setBodyPartUnavailable(MOUTH_ID);
	this.setBodyPartUnavailable(LEFT_HAND_ID);
	this.setBodyPartUnavailable(RIGHT_HAND_ID);
	this.setBodyPartUnavailable(FEET_ID);
	
	BattleManager.playSpecialBgm_EnemySex();
	
	this.setMaxTachieStrayBoobsId(2,3,4);
	this.setMaxTachieStrayButtId(1,2,2);
	this.setMaxTachieStrayFaceId(1,1,1);
	this.setMaxTachieStrayGroinId(1,2,2);
	
	this.setTachieBoobsHasHCup(true);
	this.setTachieLeftArmHasHCup(true);
	this.setTachieSemenBoobsHasHCup(true);
	this.setTachieStrayBoobsHasHCup(true);	
	this.setTachieFrontAHasPCup(true);
	this.setTachieBoobsHasPCup(true);
	this.setTachieLeftArmHasPCup(true);
	this.setTachieSemenBoobsHasPCup(true);
	this.setTachieStrayBoobsHasPCup(true);
	this.setTachieCockBoobsHasPCup(true);
	this.setTachieSemenCockBoobsHasPCup(true);
	
	if(dontResetBodySlots) {
		BattleManager.upgradingPoseReinsertBody(this);
	}
	
	this.emoteYetiPaizuriPose();
	
	this.setAllowTachieUpdate(true);
};

Game_Actor.prototype.isInYetiCarryPose = function() {
	return this.poseName == POSE_YETI_CARRY;
};
Game_Actor.prototype.setYetiCarrySexPose = function() {
	this.setAllowTachieUpdate(false);
	let dontResetPose = this._dontResetSexPose;
	let dontResetBodySlots = this.isInSexPose();
	this.setPose(POSE_YETI_CARRY, dontResetPose);
	this.setSpriteBattlerPosData(POSE_YETI_CARRY);
	if(dontResetPose) {
		this.setAllowTachieUpdate(true);
		this.emoteMasterManager();
		this._dontResetSexPose = false;
		return;
	}
	this.removeStatesBeforeSex();
	if(!dontResetBodySlots) {
		this.removeAllPettedInsertExceptToy();
		this.setAllBodySlotsFreeExceptToy();
	}
	else {
		this.setAllBodySlotsFreeExceptPettedInsert();
	}
	this.removePussyToy();
	this.setClitToyInsertablePose(false);
	this.setHasTachiePubic(true);
	this.setSpankablePose(true);
	this.setHasTachieClitToyNaked(false);
	
	if(this.isStateAffected(STATE_LIGHT_KICK_ID)) {
		this.addState(STATE_LIGHT_KICK_COUNTERED_ID);
	}
	else {
		this.removeState(STATE_LIGHT_KICK_COUNTERED_ID);
	}
	
	if(this.isWearingGlovesAndHat()) {
		this.setTachieBody(1);
		this.setTachieLeftArm(1);
		this.setTachieRightArm(1);
	}
	else {
		this.setTachieBody('naked_1');
		this.setTachieLeftArm('naked_1');
		this.setTachieRightArm('naked_1');
	}
	
	this.setTachieBoobs(1);
	this.setTachieBackA('yeti');
	
	this.setMaxTachieSemenBackId(1);
	this.setMaxTachieSemenBoobsId(1);
	this.setMaxTachieSemenButtId(1);
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieSemenCrotchId(1);
	this.setMaxTachieSemenAnalId(1);
	this.setMaxTachieSemenRightArmId(1);
	this.setMaxTachieSemenLeftArmId(1);
	this.setMaxTachieSemenFloorId(3);
	this.setMaxTachieWetId(1);
	
	this.setBodyPartFree_PettingOnly(MOUTH_ID);
	this.setBodyPartUnavailable(BOOBS_ID);
	this.setBodyPartUnavailable(NIPPLES_ID);
	this.setBodyPartUnavailable(CLIT_ID);
	this.setBodyPartUnavailable(THIGHS_ID);
	this.setBodyPartUnavailable(FEET_ID);
	this.setBodyPartUnavailable(LEFT_HAND_ID);
	this.setBodyPartUnavailable(RIGHT_HAND_ID);
	
	BattleManager.playSpecialBgm_EnemySex();
	
	this.setMaxTachieStrayBoobsId(1,2,2);
	this.setMaxTachieStrayButtId(1,2,4);
	this.setMaxTachieStrayFaceId(1,1,1);
	this.setMaxTachieStrayGroinId(2,3,4);
	
	this.setTachieBoobsHasHCup(true);
	this.setTachieSemenBoobsHasHCup(true);
	this.setTachieStrayBoobsHasHCup(true);
	this.setTachieBoobsHasPCup(true);
	this.setTachieLeftArmHasPCup(true);
	this.setTachieRightArmHasPCup(true);
	this.setTachieSemenLeftArmHasPCup(true);
	this.setTachieSemenRightArmHasPCup(true);
	this.setTachieSemenBoobsHasPCup(true);
	this.setTachieStrayBoobsHasPCup(true);
	
	if(dontResetBodySlots) {
		BattleManager.upgradingPoseReinsertBody(this);
	}
	
	if(this.isWearingAnalToy_AnalBeads())
		this.setToyInserted_AnalToy_AnalBeads(true);
	
	this.emoteYetiCarryPose();
	this.setAllowTachieUpdate(true);
};

Game_Actor.prototype.isInKickCounterSexPose = function() {
	return this.poseName == POSE_KICKCOUNTER;
};
Game_Actor.prototype.setKickCounterSexPose = function() {
	this.setAllowTachieUpdate(false);
	let dontResetPose = this._dontResetSexPose;
	let dontResetBodySlots = this.isInSexPose();
	this.setPose(POSE_KICKCOUNTER, dontResetPose);
	this.setSpriteBattlerPosData(POSE_KICKCOUNTER);
	if(dontResetPose) {
		this.setAllowTachieUpdate(true);
		this.emoteMasterManager();
		this._dontResetSexPose = false;
		return;
	}
	this.removeStatesBeforeSex();
	if(!dontResetBodySlots) {
		this.removeAllPettedInsertExceptToy();
		this.setAllBodySlotsFreeExceptToy();
	}
	else {
		this.setAllBodySlotsFreeExceptPettedInsert();
	}
	this.removePussyToy();
	this.setClitToyInsertablePose(false);
	this.setPussyToyInsertablePose(false);
	this.setSpankablePose(true);
	this.setHasTachiePubic(true);
	this.setHasTachieClitToyNaked(true);
	
	if(this.isStateAffected(STATE_LIGHT_KICK_ID)) {
		this.addState(STATE_LIGHT_KICK_COUNTERED_ID);
	}
	else {
		this.removeState(STATE_LIGHT_KICK_COUNTERED_ID);
	}
	
	if(this.isWearingGlovesAndHat()) {
		if(Karryn.isCensored()) {
			this.setTachieBackD('legs_cen');
		}
		else {
			this.setTachieBackD('legs');
		}		
	}
	else {
		if(Karryn.isCensored()) {
			this.setTachieBackD('legs_naked_cen');
		}
		else {
			this.setTachieBackD('legs_naked');
		}		
	}

	this.setMaxTachieSemenAnalId(1);
	this.setMaxTachieSemenBoobsId(1);
	this.setMaxTachieSemenBellyId(1);
	this.setMaxTachieSemenButtId(1);
	this.setMaxTachieSemenCrotchId(1);
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieSemenLeftArmId(1);
	this.setMaxTachieSemenFloorId(3);
	this.setMaxTachieWetId(1);

	this.setBodyPartFree_PettingOnly(MOUTH_ID);
	this.setBodyPartFree_PettingOnly(BOOBS_ID);
	this.setBodyPartFree_PettingOnly(NIPPLES_ID);
	this.setBodyPartFree_PettingOnly(CLIT_ID);
	this.setBodyPartUnavailable(RIGHT_HAND_ID);
	this.setBodyPartUnavailable(LEFT_HAND_ID);
	this.setBodyPartUnavailable(STOMACH_ID);
	this.setBodyPartUnavailable(FEET_ID);
	
	BattleManager.playSpecialBgm_EnemySex();
	
	this.setMaxTachieStrayBoobsId(2,3,3);
	this.setMaxTachieStrayButtId(1,2,2);
	this.setMaxTachieStrayFaceId(1,2,2);
	this.setMaxTachieStrayGroinId(1,1,1);
	this.setTachieStrayFaceExtension('normal_');
	this.setTachieStrayBoobsExtension('normal_');
	
	this.setTachieBoobsHasHCup(true);
	this.setTachieTieHasHCup(true);
	this.setTachieStrayBoobsHasHCup(true);
	this.setTachieSemenBoobsHasHCup(true);
	this.setTachieBoobsHasPCup(true);
	this.setTachieTieHasPCup(true);
	this.setTachieStrayBoobsHasPCup(true);
	this.setTachieSemenBoobsHasPCup(true);
	
	if(dontResetBodySlots) {
		BattleManager.upgradingPoseReinsertBody(this);
	}
	
	this.emoteKickCounterPose(false, true);
	
	this.setAllowTachieUpdate(true);
};

Game_Actor.prototype.isInRimjobSexPose = function() {
	return this.poseName == POSE_RIMJOB;
};
Game_Actor.prototype.setRimjobSexPose = function(karrynSkill) {
	this.setAllowTachieUpdate(false);
	let dontResetPose = this._dontResetSexPose;
	let dontResetBodySlots = this.isInSexPose();
	this.setPose(POSE_RIMJOB, dontResetPose);
	this.setSpriteBattlerPosData(POSE_RIMJOB);
	if(dontResetPose) {
		this.setAllowTachieUpdate(true);
		this.emoteMasterManager();
		this._dontResetSexPose = false;
		return;
	}
	this.removeStatesBeforeSex();
	if(!dontResetBodySlots) {
		this.removeAllPettedInsertExceptToy();
		this.setAllBodySlotsFreeExceptToy();
	}
	else {
		this.setAllBodySlotsFreeExceptPettedInsert();
	}
	this.setSpankablePose(true);
	this.setHasTachiePubic(true);
	this.setHasTachieClitToyNaked(true);
	
	
	if(!this.isWearingGlovesAndHat()) {
		this.setTachieBody('naked_1');
		this.setTachieFrontA('leftarm_naked');
	}
	else {
		this.setTachieBody(1);
		this.setTachieTie(1);
		this.setTachieFrontA('leftarm');
	}
	
	this.setTachieBoobs(1);
	
	this.setMaxTachieSemenAnalId(1);
	this.setMaxTachieSemenBellyId(1);
	this.setMaxTachieSemenBoobsId(1);
	this.setMaxTachieSemenButtId(1);
	this.setMaxTachieSemenCrotchId(1);
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieSemenLeftArmId(1);
	this.setMaxTachieSemenFloorId(3);
	this.setMaxTachieWetId(1);
	
	this.setBodyPartFree_PettingOnly(MOUTH_ID);
	this.setBodyPartFree_PettingOnly(THIGHS_ID);
	this.setBodyPartFree_PettingOnly(BOOBS_ID);
	this.setBodyPartFree_PettingOnly(NIPPLES_ID);
	this.setBodyPartFree_PettingOnly(CLIT_ID);
	this.setBodyPartUnavailable(RIGHT_HAND_ID);
	this.setBodyPartUnavailable(LEFT_HAND_ID);
	this.setBodyPartUnavailable(FEET_ID);
	
	if(karrynSkill)
		BattleManager.playSpecialBgm_KarrynSex();
	else
		BattleManager.playSpecialBgm_EnemySex();
	
	this.setMaxTachieStrayBoobsId(2,3,3);
	this.setMaxTachieStrayButtId(1,2,2);
	this.setMaxTachieStrayFaceId(1,2,2);
	this.setMaxTachieStrayGroinId(1,1,2);
	
	this.setTachieBoobsHasHCup(true);
	this.setTachieStrayBoobsHasHCup(true);
	this.setTachieSemenBoobsHasHCup(true);
	this.setTachieBoobsHasPCup(true);
	this.setTachieStrayBoobsHasPCup(true);
	this.setTachieSemenBoobsHasPCup(true);
	
	if(dontResetBodySlots) {
		BattleManager.upgradingPoseReinsertBody(this);
	}
	
	this.emoteRimjobPose();
	
	this.setAllowTachieUpdate(true);
};

Game_Actor.prototype.isInFootjobSexPose = function() {
	return this.poseName == POSE_FOOTJOB;
};
Game_Actor.prototype.setFootjobSexPose = function(karrynSkill) {
	this.setAllowTachieUpdate(false);
	let dontResetPose = this._dontResetSexPose;
	let dontResetBodySlots = this.isInSexPose();
	this.setPose(POSE_FOOTJOB, dontResetPose);
	this.setSpriteBattlerPosData(POSE_FOOTJOB);
	if(dontResetPose) {
		this.setAllowTachieUpdate(true);
		this.emoteMasterManager();
		this._dontResetSexPose = false;
		return;
	}
	this.removeStatesBeforeSex();
	if(!dontResetBodySlots) {
		this.removeAllPettedInsertExceptToy();
		this.setAllBodySlotsFreeExceptToy();
	}
	else {
		this.setAllBodySlotsFreeExceptPettedInsert();
	}
	this.setSpankablePose(false);
	this.setHasTachiePubic(false);
	this.setHasTachieClitToyNaked(true);
	
	this.setTachieBoobs('1');
	this.setTachieHead('close_1');
	this.setTachieHatExtension('close_');
	this.setTachieHairExtension('close_');
	this.setTachieSemenFaceExtension('close_');

	this.setMaxTachieSemenBellyId(1);
	this.setMaxTachieSemenBoobsId(1);
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieWetId(1);
	this.setMaxTachieSemenLeftLegId(1);
	this.setMaxTachieSemenRightLegId(1);
	this.setMaxTachieSemenCrotchId(1);
	this.setMaxTachieSemenFloorId(3);
	
	this.setBodyPartFree_PettingOnly(BOOBS_ID);
	this.setBodyPartFree_PettingOnly(NIPPLES_ID);
	this.setBodyPartFree_PettingOnly(CLIT_ID);
	this.setBodyPartFree_PettingOnly(PUSSY_ID);
	this.setBodyPartUnavailable(BUTT_ID);
	this.setBodyPartUnavailable(ANAL_ID);
	this.setBodyPartUnavailable(RIGHT_HAND_ID);
	
	if(karrynSkill)
		BattleManager.playSpecialBgm_KarrynSex();
	else
		BattleManager.playSpecialBgm_EnemySex();
	
	this.setMaxTachieStrayBoobsId(1,2,3);
	this.setMaxTachieStrayButtId(1,2,4);
	this.setMaxTachieStrayFaceId(1,2,2);
	this.setMaxTachieStrayGroinId(2,3,3);
	this.setTachieStrayFaceExtension('close_');
	
	this.setTachieBoobsHasHCup(true);
	this.setTachieStrayBoobsHasHCup(true);
	this.setTachieSemenBoobsHasHCup(true);
	this.setTachieBoobsHasPCup(true);
	this.setTachieTieHasPCup(true);
	this.setTachieStrayBoobsHasPCup(true);
	this.setTachieSemenBoobsHasPCup(true);
	this.setTachieSemenBellyHasPCup(true);
	
	if(dontResetBodySlots) {
		BattleManager.upgradingPoseReinsertBody(this);
	}
	
	this.emoteFootjobPose();
	
	this.setAllowTachieUpdate(true);
};

Game_Actor.prototype.isInStandingHJSexPose = function() {
	return this.poseName == POSE_HJ_STANDING;
};
Game_Actor.prototype.setStandingHJSexPose = function(karrynSkill) {
	this.setAllowTachieUpdate(false);
	let dontResetPose = this._dontResetSexPose;
	let dontResetBodySlots = this.isInSexPose();
	this.setPose(POSE_HJ_STANDING, dontResetPose);
	this.setSpriteBattlerPosData(POSE_HJ_STANDING);
	if(dontResetPose) {
		this.setAllowTachieUpdate(true);
		this.emoteMasterManager();
		this._dontResetSexPose = false;
		return;
	}
	this.removeStatesBeforeSex();
	if(!dontResetBodySlots) {
		this.removeAllPettedInsertExceptToy();
		this.setAllBodySlotsFreeExceptToy();
	}
	else {
		this.setAllBodySlotsFreeExceptPettedInsert();
	}
	this.setSpankablePose(true);
	this.setHasTachiePubic(true);
	this.setHasTachieClitToyNaked(true);
	
	if(!this.isWearingGlovesAndHat()) {
		this.setTachieBody('naked_1');
		this.setTachieBoobs('naked_1');
	}
	else {
		this.setTachieBody('1');
		this.setTachieBoobs('1');
	}
	
	this.setMaxTachieSemenBellyId(1);
	this.setMaxTachieSemenBoobsId(1);
	this.setMaxTachieSemenButtId(1);
	this.setMaxTachieSemenCrotchId(1);
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieSemenLeftArmId(1);
	this.setMaxTachieSemenRightArmId(1);
	this.setMaxTachieSemenFloorId(3);
	this.setMaxTachieWetId(1);
	this.setTachieSemenLeftArmExtension('normal_');


	this.setBodyPartFree_PettingOnly(MOUTH_ID);
	this.setBodyPartFree_PettingOnly(THIGHS_ID);
	this.setBodyPartFree_PettingOnly(BOOBS_ID);
	this.setBodyPartFree_PettingOnly(NIPPLES_ID);
	this.setBodyPartFree_PettingOnly(BUTT_ID);
	this.setBodyPartFree_PettingOnly(ANAL_ID);
	this.setBodyPartFree_PettingOnly(CLIT_ID);
	this.setBodyPartFree_PettingOnly(PUSSY_ID);
	this.setBodyPartUnavailable(STOMACH_ID);
	this.setBodyPartUnavailable(FEET_ID);
	
	if(karrynSkill)
		BattleManager.playSpecialBgm_KarrynSex();
	else
		BattleManager.playSpecialBgm_EnemySex();
	
	this.setMaxTachieStrayBoobsId(1,2,2);
	this.setMaxTachieStrayButtId(1,1,1);
	this.setMaxTachieStrayFaceId(1,2,2);
	this.setMaxTachieStrayGroinId(1,2,2);
	
	this.setTachieBoobsHasHCup(true);
	this.setTachieStrayBoobsHasHCup(true);
	this.setTachieSemenBoobsHasHCup(true);
	this.setTachieBoobsHasPCup(true);
	this.setTachieStrayBoobsHasPCup(true);
	this.setTachieSemenBoobsHasPCup(true);
	
	if(dontResetBodySlots) {
		BattleManager.upgradingPoseReinsertBody(this);
	}
	
	this.emoteStandingHandjobPose();
	
	this.setAllowTachieUpdate(true);
};

Game_Actor.prototype.isInKneelingBJSexPose = function() {
	return this.poseName == POSE_BJ_KNEELING;
};
Game_Actor.prototype.setKneelingBJSexPose = function(karrynSkill) {
	this.setAllowTachieUpdate(false);
	let dontResetPose = this._dontResetSexPose;
	let dontResetBodySlots = this.isInSexPose();
	this.setPose(POSE_BJ_KNEELING, dontResetPose);
	this.setSpriteBattlerPosData(POSE_BJ_KNEELING);
	if(dontResetPose) {
		this.setAllowTachieUpdate(true);
		this.emoteMasterManager();
		this._dontResetSexPose = false;
		return;
	}
	this.removeStatesBeforeSex();
	if(!dontResetBodySlots) {
		this.removeAllPettedInsertExceptToy();
		this.setAllBodySlotsFreeExceptToy();
	}
	else {
		this.setAllBodySlotsFreeExceptPettedInsert();
	}

	this.setTachieSemenRightArmExtension('normal_');
	this.setTachieSemenLeftArmExtension('normal_');
	this.setHasTachiePubic(true);
	this.setHasTachieClitToyNaked(false);


	if(!this.isWearingGlovesAndHat()) {
		this.setTachieBoobs('naked_1');
		this.setTachieLeftArm('normal_naked');
		
		if(karrynSkill) {
			this.setTachieRightArm('hj_naked');
			this.setMaxTachieSemenRightArmId(0);
		}
		else {
			this.setTachieRightArm('normal_naked');
			this.setMaxTachieSemenRightArmId(1);
		}
	}
	else {
		this.setTachieBoobs('1');
		this.setTachieLeftArm('normal');
		
		if(karrynSkill) {
			this.setTachieRightArm('hj');
			this.setMaxTachieSemenRightArmId(0);
		}
		else {
			this.setTachieRightArm('normal');
			this.setMaxTachieSemenRightArmId(1);
		}
	}
	
	this.setMaxTachieSemenBellyId(1);
	this.setMaxTachieSemenBoobsId(1);
	this.setMaxTachieSemenButtId(1);
	this.setMaxTachieSemenCrotchId(1);
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieSemenLeftArmId(1);
	this.setMaxTachieSemenFloorId(3);
	this.setMaxTachieWetId(1);
	
	this.setMaxTachieStrayBoobsId(2,3,3);
	this.setMaxTachieStrayFaceId(1,2,2);
	this.setMaxTachieStrayGroinId(1,2,2);
	
	this.setTachieBoobsHasHCup(true);
	this.setTachieSemenBoobsHasHCup(true);
	this.setTachieStrayBoobsHasHCup(true);
	this.setTachieBoobsHasPCup(true);
	this.setTachieSemenBoobsHasPCup(true);
	this.setTachieStrayBoobsHasPCup(true);
	
	this.setBodyPartFree_PettingOnly(THIGHS_ID);
	this.setBodyPartFree_PettingOnly(BOOBS_ID);
	this.setBodyPartFree_PettingOnly(NIPPLES_ID);
	this.setBodyPartFree_PettingOnly(CLIT_ID);
	this.setBodyPartUnavailable(RIGHT_HAND_ID);
	this.setBodyPartUnavailable(BUTT_ID);
	this.setBodyPartUnavailable(ANAL_ID);
	this.setBodyPartUnavailable(PUSSY_ID);
	this.setBodyPartUnavailable(STOMACH_ID);
	this.setBodyPartUnavailable(FEET_ID);
	
	if(karrynSkill)
		BattleManager.playSpecialBgm_KarrynSex();
	else
		BattleManager.playSpecialBgm_EnemySex();
	
	this.setMaxTachieStrayBoobsId(1,2,3);
	this.setMaxTachieStrayFaceId(1,2,2);
	this.setMaxTachieStrayGroinId(1,2,2);
	
	if(dontResetBodySlots) {
		BattleManager.upgradingPoseReinsertBody(this);
	}
	
	this.emoteKneelingBlowjobPose();
	
	this.setAllowTachieUpdate(true);
};

Game_Actor.prototype.isInLayingTittyfuckSexPose = function() {
	return this.poseName == POSE_PAIZURI_LAYING;
};
Game_Actor.prototype.setLayingTittyfuckSexPose = function(karrynSkill) {
	this.setAllowTachieUpdate(false);
	let dontResetPose = this._dontResetSexPose;
	let dontResetBodySlots = this.isInSexPose();
	this.setPose(POSE_PAIZURI_LAYING, dontResetPose);
	this.setSpriteBattlerPosData(POSE_PAIZURI_LAYING);
	if(dontResetPose) {
		this.setAllowTachieUpdate(true);
		this.emoteMasterManager();
		this._dontResetSexPose = false;
		return;
	}
	this.removeStatesBeforeSex();
	if(!dontResetBodySlots) {
		this.removeAllPettedInsertExceptToy();
		this.setAllBodySlotsFreeExceptToy();
	}
	else {
		this.setAllBodySlotsFreeExceptPettedInsert();
	}

	if(this.isWearingGlovesAndHat()) {
		this.setTachieTie(1);
		this.setTachieLeftArm('normal');
		this.setTachieRightArm('normal');
	}
	else {
		this.resetTachieTie();
		this.setTachieLeftArm('normal_naked');
		this.setTachieRightArm('normal_naked');
	}
	
	this.setTachieBody(1);
	this.setTachieLeftBoob('normal');
	this.setTachieRightBoob('normal');

	this.setSpankablePose(true);
	this.setHasTachiePubic(false);
	this.setHasTachieClitToyNaked(false);
	
	this.setMaxTachieSemenBoobsId(1);
	this.setMaxTachieSemenButtId(1);
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieSemenLeftArmId(1);
	this.setMaxTachieSemenRightArmId(0);
	this.setMaxTachieSemenFloorId(3);
	
	this.setTachieSemenBoobsExtension('normal_');
	this.setTachieSemenRightArmExtension('normal_');
	
	this.setBodyPartFree_PettingOnly(THIGHS_ID);
	this.setBodyPartFree_PettingOnly(NIPPLES_ID);
	this.setBodyPartUnavailable(CLIT_ID);
	this.setBodyPartUnavailable(LEFT_HAND_ID);
	this.setBodyPartUnavailable(STOMACH_ID);
	this.setBodyPartUnavailable(FEET_ID);
	
	if(karrynSkill)
		BattleManager.playSpecialBgm_KarrynSex();
	else
		BattleManager.playSpecialBgm_EnemySex();
	

	this.setMaxTachieStrayFaceId(1,2,2);
	this.setMaxTachieStrayBoobsId(2,3,4);
	this.setMaxTachieStrayButtId(1,2,4);
	
	this.setTachieLeftArmHasHCup(true);
	this.setTachieRightArmHasHCup(true);
	this.setTachieLeftBoobHasHCup(true);
	this.setTachieRightBoobHasHCup(true);
	this.setTachieStrayBoobsHasHCup(true);
	this.setTachieSemenBoobsHasHCup(true);
	
	this.setTachieLeftArmHasPCup(true);
	this.setTachieRightArmHasPCup(true);
	this.setTachieLeftBoobHasPCup(true);
	this.setTachieRightBoobHasPCup(true);
	this.setTachieFrontAHasPCup(true);
	this.setTachieFrontBHasPCup(true);
	this.setTachieTieHasPCup(true);
	this.setTachieStrayBoobsHasPCup(true);
	this.setTachieSemenBoobsHasPCup(true);
	
	if(dontResetBodySlots) {
		BattleManager.upgradingPoseReinsertBody(this);
	}
	
	this.emoteLayingPaizuriPose();
	
	this.setAllowTachieUpdate(true);
};

Game_Actor.prototype.isInSlimeAnalPiledriverSexPose = function() {
	return this.poseName == POSE_SLIME_PILEDRIVER_ANAL;
};
Game_Actor.prototype.setSlimeAnalPiledriverPose = function() {
	this.setAllowTachieUpdate(false);
	let dontResetBodySlots = this.isInSexPose();
	this.setPose(POSE_SLIME_PILEDRIVER_ANAL);
	this.setSpriteBattlerPosData(POSE_SLIME_PILEDRIVER_ANAL);
	this.removeStatesBeforeSex();
	if(!dontResetBodySlots) {
		this.removeAllPettedInsertExceptToy();
		this.setAllBodySlotsFreeExceptToy();
	}
	else {
		this.setAllBodySlotsFreeExceptPettedInsert();
	}
	this.removeAnalToy();
	
	this.setSpankablePose(true);
	this.setHasTachiePubic(true);
	this.setHasTachieClitToyNaked(false);
	
	if(this.isWearingGlovesAndHat()) {
		this.setTachieFrontA('legs');
		this.setTachieTie('1');
		this.setTachieLeftArm('1');
		this.setTachieRightArm('1');
	}
	else {
		this.setTachieFrontA('legs_naked');
		this.setTachieLeftArm('naked_1');
		this.setTachieRightArm('naked_1');
	}
	
	if(Karryn.isCensored())
		this.setTachieBody('1_cen');
	else
		this.setTachieBody('1');
	
	this.setTachieLeftBoob('1');
	this.setTachieRightBoob('1');
	
	if(this.isWearingPussyToy_PenisDildo()) {
		this.setTachieHolePussy('open');
		this.setTachiePubicExtension('open_');
		this.setTachieStrayGroinExtension('open_');
		this.setTachieSemenCrotchExtension('open_');
	}
	
	this.setMaxTachieSemenAnalId(1);
	this.setMaxTachieSemenBellyId(1);
	this.setMaxTachieSemenBoobsId(1);
	this.setMaxTachieSemenButtId(1);
	this.setMaxTachieSemenCrotchId(1);
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieSemenLeftArmId(1);
	this.setMaxTachieSemenRightArmId(1);
	this.setMaxTachieSemenFloorId(3);
	this.setMaxTachieWetId(1);
	this.setTachieSemenCrotchExtension('empty_');
	
	this.setBodyPartFree_PettingOnly(THIGHS_ID);
	this.setBodyPartFree_PettingOnly(NIPPLES_ID);
	this.setBodyPartFree_PettingOnly(BOOBS_ID);
	this.setBodyPartFree_PettingOnly(CLIT_ID);
	this.setBodyPartFree_PettingOnly(BUTT_ID);
	this.setBodyPartUnavailable(LEFT_HAND_ID);
	this.setBodyPartUnavailable(RIGHT_HAND_ID);
	this.setBodyPartUnavailable(STOMACH_ID);
	this.setBodyPartUnavailable(FEET_ID);
	
	BattleManager.playSpecialBgm_EnemySex();
	
	this.setMaxTachieStrayBoobsId(2,3,4);
	this.setMaxTachieStrayButtId(1,2,4);
	this.setMaxTachieStrayFaceId(1,2,2);
	this.setMaxTachieStrayGroinId(1,2,4);
	
	this.setTachieLeftBoobHasHCup(true);
	this.setTachieRightBoobHasHCup(true);
	this.setTachieStrayBoobsHasHCup(true);
	this.setTachieSemenBoobsHasHCup(true);
	
	this.setTachieLeftBoobHasPCup(true);
	this.setTachieRightBoobHasPCup(true);
	this.setTachieStrayBoobsHasPCup(true);
	this.setTachieSemenBoobsHasPCup(true);
	this.setTachieSemenFaceHasPCup(true);
	
	if(dontResetBodySlots) {
		BattleManager.upgradingPoseReinsertBody(this);
	}
	
	if(this.isWearingPussyToy_PenisDildo())
		this.setToyInserted_PussyToy_PenisDildo(true);
	
	this.emoteSlimePiledriverPose();
	this.setAllowTachieUpdate(true);
};



////////////
// Masturbation Couch Pose
/////////////////////

Game_Actor.prototype.isInMasturbationPose = function() {
	return this.isInMasturbationCouchPose() || this.isInMasturbationInBattlePose();
};

//MasCouch
Game_Actor.prototype.isInMasturbationCouchPose = function() {
	return this.poseName == POSE_MASTURBATE_COUCH;
};
Game_Actor.prototype.setMasturbationCouchPose = function() {
	this.setPose(POSE_MASTURBATE_COUCH);
	this.setSpriteBattlerPosData(POSE_MASTURBATE_COUCH);
	this.takeOffPanties();
	this.removeClothing();
	this.removeAllPettedInsertExceptToy();
	this.setAllBodySlotsFree();
	this.setHasTachiePubic(true);
	this.setHasTachieClitToyNaked(false);
	
	if(this.isWearingAnalToy_AnalBeads()) {
		this._masBattle_tachieAnalToyPosition = 1;
	}
	
	if(this.isWearingPussyToy_PenisDildo()) {
		this.setMaxTachieWetPussyToyId(3);
		if(Math.random() < 0.5)
			this._masBattle_tachiePussyToyPosition = 1;
		else
			this._masBattle_tachiePussyToyPosition = 2;
		this.setTachieSemenWetPussyToyExtension('' + this._masBattle_tachiePussyToyPosition + '_');
	}
	
	this.setMaxTachieWetId(3);
	this.setMaxTachieDroolFingersId(0);
	this.setMaxTachieDroolNipplesId(0);
	
	this.masturbateBattle_resetLeftHand();
	this.masturbateBattle_resetRightHand();
	

	if(Karryn.isCensored()) {
		if(!this.isWearingGlovesAndHat()) {
			this.setTachieBody('naked_1_cen');
		}
		else {
			this.setTachieBody('1_cen');
		}
	} 
	else {
		if(!this.isWearingGlovesAndHat()) {
			this.setTachieBody('naked_1');
		}
		else {
			this.setTachieBody('1');
		}
	}
	

	this.setMaxTachieStrayButtId(1,2,4);
	this.setMaxTachieStrayFaceId(1,2,2);
	this.setMaxTachieStrayGroinId(2,3,4);
	this.setMaxTachieStrayLeftBoobId(2,3,3);
	this.setMaxTachieStrayRightBoobId(2,3,3);
	this.setTachieStrayLeftBoobExtension('normal_');
	this.setTachieStrayRightBoobExtension('normal_');
	
	this.setTachieLeftBoobHasHCup(true);
	this.setTachieRightBoobHasHCup(true);
	this.setTachieStrayLeftBoobHasHCup(true);
	this.setTachieStrayRightBoobHasHCup(true);
	this.setTachieDroolNipplesHasHCup(true);
	this.setTachieLeftBoobHasPCup(true);
	this.setTachieRightBoobHasPCup(true);
	this.setTachieStrayLeftBoobHasPCup(true);
	this.setTachieStrayRightBoobHasPCup(true);
	this.setTachieDroolNipplesHasPCup(true);
	this.setTachieFrontAHasPCup(true);
	
	this.emoteMasturbateCouchBattle();
};

//////////////
// Masturbation In Battle Pose
// Onani In Battle Pose
/////////////////

Game_Actor.prototype.isInMasturbationInBattlePose = function() {
	return this.poseName == POSE_MASTURBATE_INBATTLE;
};
Game_Actor.prototype.setMasturbationInBattlePose = function() {
	let alreadyInPose = this.isInMasturbationInBattlePose();
	this.setPose(POSE_MASTURBATE_INBATTLE);
	this.setSpriteBattlerPosData(POSE_MASTURBATE_INBATTLE);
	this.setAllBodySlotsFree();
	this.setHasTachiePubic(true);
	this.setTachieHasBoobsHard(false);
	this.setHasTachieClitToyNaked(true);
	this.takeOffPanties();
	
	if(!alreadyInPose) {
		this.masInBattle_resetLeftArmToNormal();
		this.masInBattle_resetRightArmToNormal();
		this._masHalberd = false;
	}
	
	if(!this.isWearingGlovesAndHat()) {
		this.setTachieBody('naked_1');
		this.resetTachieBoobs();
		this.resetTachieTie();
		this.resetTachieFrontC();
	}
	else {
		this.setTachieBody('1');
		if(this.boobsSizeIsPCup()) {
			this.resetTachieFrontC();
		}
		else {
			this.setTachieFrontC('tie_1');
		}
		this.setTachieTie(1);
		if(this._clothingStage < 4) {
			if(this.boobsSizeIsPCup()) {
				this.changeClothingToStage(5);
			}
			else {
				this.changeClothingToStage(4);
			}
		}
		this.setPoseClothing();
	}
	
	this.setMaxTachieSemenBoobsId(0);
	this.setMaxTachieSemenRightBoobId(3);
	this.setMaxTachieSemenLeftBoobId(3);
	this.setMaxTachieSemenBellyId(3);
	this.setMaxTachieSemenCrotchId(3);
	this.setMaxTachieSemenFaceId(3);
	this.setMaxTachieSemenLeftArmId(3);
	this.setMaxTachieSemenRightArmId(3);
	this.setMaxTachieSemenFloorId(3);
	this.setMaxTachieWetId(3);
	

	this.setMaxTachieStrayFaceId(1,2,2);
	this.setMaxTachieStrayGroinId(2,2,2);
	this.setMaxTachieStrayLeftBoobId(1,1,1);
	this.setMaxTachieStrayRightBoobId(2,2,2);
	this.setTachieStrayLeftBoobExtension('normal_');
	this.setTachieStrayRightBoobExtension('normal_');
	
	this.setTachieFrontBHasHCup(true);
	this.setTachieSemenBoobsHasHCup(true);
	this.setTachieSemenLeftBoobHasHCup(true);
	this.setTachieSemenRightBoobHasHCup(true);
	this.setTachieStrayLeftBoobHasHCup(true);
	this.setTachieStrayRightBoobHasHCup(true);
	this.setTachieFrontBHasPCup(true);
	this.setTachieSemenBoobsHasPCup(true);
	this.setTachieSemenLeftBoobHasPCup(true);
	this.setTachieSemenRightBoobHasPCup(true);
	this.setTachieStrayLeftBoobHasPCup(true);
	this.setTachieStrayRightBoobHasPCup(true);
	
	BattleManager.playSpecialBgm_KarrynSex();
};

///////////
// Waitress Pose

Game_Actor.prototype.isInWaitressServingPose = function() {
	let pose = this.poseName;
	return $gameParty.isInWaitressBattle && ( pose == POSE_MAP );
};
Game_Actor.prototype.setWaitressServingPose = function() {
	this.removeAllPettedToyInsert();
	this.setAllBodySlotsFree();
	this.setSpriteBattlerPosData(POSE_MAP);
	this.setClitToyInsertablePose(false);
	this.setPussyToyInsertablePose(false);
	this.setAnalToyInsertablePose(false);
	this.setHasTachieHat(false);
	
	this.setPose(POSE_MAP);
	this.setTachieBody('naked_1');
	this.setTachieHead('normal_1');
	this.takeOffGlovesAndHat();
	this.setBoobsType('waitress');
	this.setTachieHipsExtension('waitress_');
	this.setPoseClothing();
	this.setPosePanties();
	this.setSpankablePose(true);
	this.setHasTachiePubic(true);
	this.setHasTachieClitToyNaked(true);

	this.setTachieSemenCrotchExtension('normal_');

	this.setMaxTachieSemenBellyId(3);
	this.setMaxTachieSemenBoobsId(3);
	this.setMaxTachieSemenButtId(3);
	this.setMaxTachieSemenCrotchId(3);
	this.setMaxTachieSemenFaceId(3);
	this.setMaxTachieSemenLeftArmId(3);
	this.setMaxTachieSemenRightArmId(3);
	this.setMaxTachieWetId(3);
	this.setMaxTachieWetPantiesId(3);
	this.setMaxTachieSemenFrontAId(3);
	this.setMaxTachieSemenFrontBId(3);
	
	this.setMaxTachieStrayBoobsId(2,2,2);
	this.setMaxTachieStrayButtId(1,2,3);
	this.setMaxTachieStrayFaceId(1,2,2);
	this.setMaxTachieStrayGroinId(1,2,2);
	
	

	this.setTachieBoobsHasHCup(true);
	this.setTachieSemenBoobsHasHCup(true);
	this.setTachieStrayBoobsHasHCup(true);
	
	this.setTachieBoobsHasPCup(true);
	this.setTachieSemenBoobsHasPCup(true);
	this.setTachieStrayBoobsHasPCup(true);
	
	this.emoteWaitressServingPose();
};

Game_Actor.prototype.isInWaitressSexPose = function() {
	let pose = this.poseName;
	return ( pose == POSE_WAITRESS_SEX );
};
Game_Actor.prototype.setWaitressSexPose = function() {
	this.setAllowTachieUpdate(false);
	this.setPose(POSE_WAITRESS_SEX);
	this.setSpriteBattlerPosData(POSE_WAITRESS_SEX);
	this.removeStatesBeforeSex();
	this.removeAllPettedInsertExceptToy();
	this.setAllBodySlotsFreeExceptToy();
	this.setSpankablePose(true);
	this.setHasTachiePubic(false);
	this.setHasTachieClitToyNaked(false);
	
	this.setTachieBody(1);
	this.setTachieLeftArm(1);
	this.setTachieSemenWetExtension('1_');
	this.setTachieSemenCrotchExtension('1_');
	this.setTachieBoobs('1');
	this.setTachieBackA('boobs_1');
	this.setTachieRightArm('empty');
	
	this.setMaxTachieSemenBackId(1);
	this.setMaxTachieSemenBellyId(1);
	this.setMaxTachieSemenBoobsId(1);
	this.setMaxTachieSemenButtId(1);
	this.setMaxTachieSemenCrotchId(1);
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieSemenRightArmId(1);
	this.setMaxTachieWetId(1);
	
	

	this.setBodyPartFree_PettingOnly(THIGHS_ID);
	this.setBodyPartFree_PettingOnly(BOOBS_ID);
	this.setBodyPartFree_PettingOnly(NIPPLES_ID);
	this.setBodyPartFree_PettingOnly(CLIT_ID);
	this.setBodyPartUnavailable(LEFT_HAND_ID);
	this.setBodyPartUnavailable(FEET_ID);
	
	$gameMap.changeBattleback(BATTLEBACK1_BAR_WAITRESS_SEX_NAME, null);
	BattleManager.changeBattleback(BATTLEBACK1_BAR_WAITRESS_SEX_NAME, null);
	
	this.setMaxTachieStrayBoobsId(2,3,5);
	this.setMaxTachieStrayButtId(2,3,4);
	this.setMaxTachieStrayFaceId(1,2,2);
	
	this.setTachieBackAHasHCup(true);
	this.setTachieBoobsHasHCup(true);
	this.setTachieLeftArmHasHCup(true);
	this.setTachieRightArmHasHCup(true);
	this.setTachieSemenRightArmHasHCup(true);
	this.setTachieStrayBoobsHasHCup(true);
	this.setTachieSemenBoobsHasHCup(true);
	this.setTachieBackAHasPCup(true);
	this.setTachieBoobsHasPCup(true);
	this.setTachieLeftArmHasPCup(true);
	this.setTachieRightArmHasPCup(true);
	this.setTachieSemenRightArmHasPCup(true);
	this.setTachieStrayBoobsHasPCup(true);
	this.setTachieSemenBoobsHasPCup(true);
	this.setTachieCockRightArmHasPCup(true);
	this.setTachieSemenCockRightArmHasPCup(true);
	this.setTachieFrontAHasPCup(true);
	this.setTachieMugHasPCup(true);
	this.setTachieStrawHasPCup(true);
	this.setTachieSemenFrontAHasPCup(true);
	
	BattleManager.playSpecialBgm_WaitressSex();
	this.emoteWaitressSexPose();
	this.setAllowTachieUpdate(true);
	BattleManager.actionRemLines(KARRYN_LINE_WAITRESS_TABLE_START);
};

///////////
// Receptionist Pose

Game_Actor.prototype.isInReceptionistPose = function() {
	return this.poseName == POSE_RECEPTIONIST;
};
Game_Actor.prototype.setReceptionistPose = function() {
	this.setAllowTachieUpdate(false);
	this.setPose(POSE_RECEPTIONIST, false);
	this.setSpriteBattlerPosData(POSE_RECEPTIONIST);
	this.removeStatesBeforeSex();
	this.removeAllPettedToyInsert();
	this.setAllBodySlotsFree();
	this.setSpankablePose(true);
	this.setHasTachiePubic(false);
	this.setHasTachieHat(false);
	
	this.setMaxTachieSemenButtId(1);
	this.setMaxTachieSemenCrotchId(1);
	this.setMaxTachieSemenAnalId(1);
	this.setMaxTachieWetId(1);
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieSemenBoobsId(1);
	this.setMaxTachieSemenDeskId(3);
	
	this.setBodyPartFree_PettingOnly(BOOBS_ID);
	this.setBodyPartFree_PettingOnly(NIPPLES_ID);
	this.setBodyPartFree_PettingOnly(THIGHS_ID);
	this.setBodyPartUnavailable(RIGHT_HAND_ID);
	this.setBodyPartUnavailable(FEET_ID);
	
	this.setMaxTachieStrayBoobsId(1,2,2);
	this.setMaxTachieStrayButtId(2,3,4);
	this.setMaxTachieStrayFaceId(1,1,1);
	
	this.setTachieBoobsHasHCup(true);
	this.setTachieStrayBoobsHasHCup(true);
	this.setTachieSemenBoobsHasHCup(true);
	this.setTachieBoobsHasPCup(true);
	this.setTachieStrayBoobsHasPCup(true);
	this.setTachieSemenBoobsHasPCup(true);
	
	this.emoteReceptionistPose();
	
	this.setAllowTachieUpdate(true);
};

///////////
// Toilet Sitting Pose

Game_Actor.prototype.isInToiletSittingPose = function() {
	return this.poseName == POSE_TOILET_SITTING;
};
Game_Actor.prototype.setToiletSittingPose = function() {
	let leftArmIsKuri = this.tachieLeftArm.includes('kuri');
	let leftArmIsChikubi = this.tachieLeftArm.includes('chikubi');
	let leftArmIsManko = this.tachieLeftArm.includes('manko');
	let leftArmIsAnaru = this.tachieLeftArm.includes('anaru');
	let rightArmIsKuri = this.tachieRightArm.includes('kuri');
	let rightArmIsChikubi = this.tachieRightArm.includes('chikubi');
	let rightArmIsManko = this.tachieRightArm.includes('manko');
	let rightArmIsAnaru = this.tachieRightArm.includes('anaru');
	let currentlyInToiletStandLeftPose = this.isInToiletStandLeftPose();
	let currentlyInToiletStandRightPose = this.isInToiletStandRightPose();
	let level2Kuri = this.isAroused && this.reactionScore_clitPettingPassive() >= 60;

	
	this.setAllowTachieUpdate(false);
	
	this.setTachieClitToyExtension_gloryBattle('');
	this.setTachiePussyToyExtension_gloryBattle('left_1_');
	this.setTachieAnalToyExtension_gloryBattle('right_');
	
	this.setPose(POSE_TOILET_SITTING, false);
	this.setSpriteBattlerPosData(POSE_TOILET_SITTING);
	this.removeStatesBeforeSex();
	this.removeAllPettedInsertExceptToy();
	this.setAllBodySlotsFreeExceptToy();
	this.setSpankablePose(false);
	this.setHasTachieHat(false);
	this.setHasTachiePubic(true);
	
	if(leftArmIsChikubi) {
		this.setTachieLeftBoob('touch_chikubi');
		this.setTachieLeftArm('chikubi_1');
	}
	else {
		this.setTachieLeftBoob('normal');
		
		if(leftArmIsKuri) {
			//Credits to @ihavenosoul!
			if(this.isWearingClitToy()) {
				this.setTachieLeftArm('toyC_1');
			}
			else if(level2Kuri) {
				this.setTachieLeftArm('kuri_2');
			}
			else {
				this.setTachieLeftArm('kuri_1');
			}
		}
		else if(leftArmIsManko) {
			this.setTachieLeftArm('manko_1');
		}
		else if(leftArmIsAnaru) {
			this.setTachieLeftArm('anaru_1');
		}
		else {
			this.toiletBattle_resetLeftArmToNormal();
		}
	}
	
	if(rightArmIsChikubi) {
		this.setTachieRightBoob('touch_chikubi');
		this.setTachieRightArm('chikubi_1');
	}
	else {
		this.setTachieRightBoob('normal');
		
		if(rightArmIsKuri) {
			//Credits to @ihavenosoul!
			if(this.isWearingClitToy()) {
				this.setTachieRightArm('toyC_1');
			}
			else if(level2Kuri) {
				this.setTachieRightArm('kuri_2');
			}
			else {
				this.setTachieRightArm('kuri_1');
			}
		}
		else if(rightArmIsManko) {
			this.setTachieRightArm('manko_1');
		}
		else if(rightArmIsAnaru) {
			this.setTachieRightArm('anaru_1');
		}
		else {
			this.toiletBattle_resetRightArmToNormal();
		}
	}

	if(this.isWearingGlovesAndHat()) {
		this.setTachieTie('1');
	}
	else {
		this.resetTachieTie();
	}
	
	this.setMaxTachieSemenBellyId(1);
	
	this.setMaxTachieGlorySemenLeftWallId(1);
	this.setMaxTachieGlorySemenRightWallId(1);
	this.setMaxTachieGlorySemenLeftHoleId(1);
	this.setMaxTachieGlorySemenRightHoleId(1);
	this.setMaxTachieGlorySemenLeftToiletId(1);
	this.setMaxTachieGlorySemenRightToiletId(1);

	const pussySemen = this.getBodyLiquid(BodyLiquidId.PUSSY_SEMEN).amount;
	if((currentlyInToiletStandLeftPose || currentlyInToiletStandRightPose) && pussySemen > 0) {
		this.increaseLiquidCumOnToiletSeat(Math.round((Math.random() * 0.5 + 0.15) * pussySemen));
 	}
	
	this.setMaxTachieStrayBoobsId(0,0,0);
	this.setMaxTachieStrayLeftBoobId(1,1,2);
	this.setMaxTachieStrayRightBoobId(1,2,3);
	this.setMaxTachieStrayButtId(1,2,2);
	this.setMaxTachieStrayFaceId(1,2,2);
	this.setMaxTachieStrayGroinId(1,1,1);
	
	this.setTachieLeftBoobHasHCup(true);
	this.setTachieRightBoobHasHCup(true);
	this.setTachieSemenRightBoobHasHCup(true);
	this.setTachieSemenLeftBoobHasHCup(true);
	this.setTachieStrayLeftBoobHasHCup(true);
	this.setTachieStrayRightBoobHasHCup(true);
	this.setTachieTieHasPCup(true);
	this.setTachieLeftBoobHasPCup(true);
	this.setTachieRightBoobHasPCup(true);
	this.setTachieSemenRightBoobHasPCup(true);
	this.setTachieSemenLeftBoobHasPCup(true);
	this.setTachieStrayLeftBoobHasPCup(true);
	this.setTachieStrayRightBoobHasPCup(true);
	
	this.emoteGloryToiletSittingPose();
	
	this.setAllowTachieUpdate(true);
};

///////////
// Toilet Sit Left Pose

Game_Actor.prototype.isInToiletSitLeftPose = function() {
	return this.poseName == POSE_TOILET_SIT_LEFT;
};
Game_Actor.prototype.setToiletSitLeftPose = function() {
	let leftArmIsKuri = this.tachieLeftArm.includes('kuri');
	let leftArmIsChikubi = this.tachieLeftArm.includes('chikubi');
	let leftArmIsManko = this.tachieLeftArm.includes('manko');
	let leftArmIsToyC = this.tachieLeftArm.includes('toyC');
	
	this.setAllowTachieUpdate(false);
	
	this.setTachieClitToyExtension_gloryBattle('');
	this.setTachiePussyToyExtension_gloryBattle('');
	this.setTachieAnalToyExtension_gloryBattle('');
	
	this.setPose(POSE_TOILET_SIT_LEFT, false);
	this.setSpriteBattlerPosData(POSE_TOILET_SIT_LEFT);
	this.removeStatesBeforeSex();
	this.removeAllPettedInsertExceptToy();
	this.setAllBodySlotsFreeExceptToy();
	this.setSpankablePose(false);
	this.setHasTachieHat(false);
	this.setHasTachiePubic(true);
	
	this.setTachieHead('1');
	
	if(leftArmIsChikubi) 
		this.setTachieLeftArm('chikubi');
	else if(leftArmIsKuri || leftArmIsToyC)
		this.setTachieLeftArm('kuri');
	else if(leftArmIsManko)
		this.setTachieLeftArm('manko');
	
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieSemenBellyId(1);
	
	this.setTachieSemenToiletSeatExtension('spread_');
	this.setTachieWetToiletSeatExtension('spread_');
	this.setMaxTachieSemenToiletSeatId(1);
	this.setMaxTachieWetToiletSeatId(1);
	
	this.setMaxTachieGlorySemenLeftWallId(1);
	this.setMaxTachieGlorySemenRightWallId(1);
	this.setMaxTachieGlorySemenLeftHoleId(1);
	this.setMaxTachieGlorySemenRightHoleId(1);
	this.setMaxTachieGlorySemenLeftToiletId(1);
	this.setMaxTachieGlorySemenRightToiletId(1);
	
	this.setMaxTachieStrayBoobsId(2,3,4);
	this.setMaxTachieStrayButtId(1,2,2);
	this.setMaxTachieStrayFaceId(1,2,2);
	this.setMaxTachieStrayGroinId(1,2,2);
	
	this.setTachieBoobsHasHCup(true);
	this.setTachieTieHasHCup(true);
	this.setTachieSemenBoobsHasHCup(true);
	this.setTachieStrayBoobsHasHCup(true);
	
	this.setTachieBoobsHasPCup(true);
	this.setTachieTieHasPCup(true);
	this.setTachieSemenBoobsHasPCup(true);
	this.setTachieStrayBoobsHasPCup(true);
	
	this.emoteGloryToiletSitLeftPose();
	
	this.setAllowTachieUpdate(true);
};

///////////
// Toilet Sit Right Pose

Game_Actor.prototype.isInToiletSitRightPose = function() {
	return this.poseName == POSE_TOILET_SIT_RIGHT;
};
Game_Actor.prototype.setToiletSitRightPose = function() {
	let rightArmIsKuri = this.tachieRightArm.includes('kuri');
	let rightArmIsChikubi = this.tachieRightArm.includes('chikubi');
	let rightArmIsManko = this.tachieRightArm.includes('manko');
	let rightArmIsToyC = this.tachieRightArm.includes('toyC');
	
	this.setAllowTachieUpdate(false);
	
	this.setTachieClitToyExtension_gloryBattle('');
	this.setTachiePussyToyExtension_gloryBattle('');
	this.setTachieAnalToyExtension_gloryBattle('');
	
	this.setPose(POSE_TOILET_SIT_RIGHT, false);
	this.setSpriteBattlerPosData(POSE_TOILET_SIT_RIGHT);
	this.removeStatesBeforeSex();
	this.removeAllPettedInsertExceptToy();
	this.setAllBodySlotsFreeExceptToy();
	this.setSpankablePose(false);
	this.setHasTachieHat(false);
	this.setHasTachiePubic(true);
	
	this.setTachieHead('1');
	
	if(rightArmIsChikubi) 
		this.setTachieRightArm('chikubi');
	else if(rightArmIsKuri || rightArmIsToyC)
		this.setTachieRightArm('kuri');
	else if(rightArmIsManko)
		this.setTachieRightArm('manko');
	
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieSemenBellyId(1);
	
	this.setTachieSemenToiletSeatExtension('spread_');
	this.setTachieWetToiletSeatExtension('spread_');
	this.setMaxTachieSemenToiletSeatId(1);
	this.setMaxTachieWetToiletSeatId(1);
	
	this.setMaxTachieGlorySemenLeftWallId(1);
	this.setMaxTachieGlorySemenRightWallId(1);
	this.setMaxTachieGlorySemenLeftHoleId(1);
	this.setMaxTachieGlorySemenRightHoleId(1);
	this.setMaxTachieGlorySemenLeftToiletId(1);
	this.setMaxTachieGlorySemenRightToiletId(1);
	
	this.setMaxTachieStrayBoobsId(2,3,4);
	this.setMaxTachieStrayButtId(1,2,2);
	this.setMaxTachieStrayFaceId(1,2,2);
	this.setMaxTachieStrayGroinId(1,2,2);
	
	this.setTachieBoobsHasHCup(true);
	this.setTachieTieHasHCup(true);
	this.setTachieSemenBoobsHasHCup(true);
	this.setTachieStrayBoobsHasHCup(true);
	
	this.setTachieBoobsHasPCup(true);
	this.setTachieTieHasPCup(true);
	this.setTachieSemenBoobsHasPCup(true);
	this.setTachieStrayBoobsHasPCup(true);
	
	this.emoteGloryToiletSitRightPose();
	
	this.setAllowTachieUpdate(true);
};

///////////
// Toilet Stand Left Pose

Game_Actor.prototype.isInToiletStandLeftPose = function() {
	return this.poseName == POSE_TOILET_STAND_LEFT;
};
Game_Actor.prototype.setToiletStandLeftPose = function() {
	let leftArmIsChikubi = this.tachieLeftArm.includes('chikubi');
	
	this.setAllowTachieUpdate(false);
	this.setTachieClitToyExtension_gloryBattle('high_');
	this.setTachiePussyToyExtension_gloryBattle('high_');
	this.setTachieAnalToyExtension_gloryBattle('high_');
	this.setPose(POSE_TOILET_STAND_LEFT, false);
	this.setSpriteBattlerPosData(POSE_TOILET_STAND_LEFT);
	this.removeStatesBeforeSex();
	this.removeAllPettedInsertExceptToy();
	this.setAllBodySlotsFreeExceptToy();
	this.setSpankablePose(false);
	this.setHasTachieHat(false);
	this.setHasTachiePubic(true);
	
	this.setTachieHead('1');
	
	if(!this.tachieBody.includes('low') && !this.tachieBody.includes('high'))
		this.setTachieBody('high');
	
	this.setTachieSemenRightArmExtension('normal_');
	
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieSemenRightArmId(1);
	
	this.setTachieSemenToiletSeatExtension('spread_');
	this.setTachieWetToiletSeatExtension('spread_');
	this.setMaxTachieSemenToiletSeatId(1);
	this.setMaxTachieWetToiletSeatId(1);
	
	this.setMaxTachieGlorySemenLeftWallId(1);
	this.setMaxTachieGlorySemenRightWallId(1);
	this.setMaxTachieGlorySemenLeftHoleId(1);
	this.setMaxTachieGlorySemenRightHoleId(1);
	this.setMaxTachieGlorySemenLeftToiletId(1);
	this.setMaxTachieGlorySemenRightToiletId(1);
	
	this.setMaxTachieStrayBoobsId(2,3,4);
	this.setMaxTachieStrayButtId(1,2,2);
	this.setMaxTachieStrayFaceId(1,1,1);
	this.setMaxTachieStrayGroinId(1,1,1);
	this.setTachieStrayBoobsExtension('normal_');
	
	this.setTachieBoobsHasHCup(true);
	this.setTachieTieHasHCup(true);
	this.setTachieSemenBoobsHasHCup(true);
	this.setTachieStrayBoobsHasHCup(true);
	this.setTachieBoobsHasPCup(true);
	this.setTachieTieHasPCup(true);
	this.setTachieSemenBoobsHasPCup(true);
	this.setTachieStrayBoobsHasPCup(true);
	
	this.emoteGloryToiletStandLeftPose();
	
	this.setAllowTachieUpdate(true);
};

///////////
// Toilet Stand Right Pose

Game_Actor.prototype.isInToiletStandRightPose = function() {
	return this.poseName == POSE_TOILET_STAND_RIGHT;
};
Game_Actor.prototype.setToiletStandRightPose = function() {
	let rightArmIsChikubi = this.tachieRightArm.includes('chikubi');
	
	this.setAllowTachieUpdate(false);
	this.setTachieClitToyExtension_gloryBattle('high_');
	this.setTachiePussyToyExtension_gloryBattle('high_');
	this.setTachieAnalToyExtension_gloryBattle('high_');
	this.setPose(POSE_TOILET_STAND_RIGHT, false);
	this.setSpriteBattlerPosData(POSE_TOILET_STAND_RIGHT);
	this.removeStatesBeforeSex();
	this.removeAllPettedInsertExceptToy();
	this.setAllBodySlotsFreeExceptToy();
	this.setSpankablePose(false);
	this.setHasTachieHat(false);
	this.setHasTachiePubic(true);
	
	this.setTachieHead('1');
	
	if(!this.tachieBody.includes('low') && !this.tachieBody.includes('high'))
		this.setTachieBody('high');
	
	this.setTachieSemenLeftArmExtension('normal_');
	
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieSemenLeftArmId(1);
	
	this.setTachieSemenToiletSeatExtension('spread_');
	this.setTachieWetToiletSeatExtension('spread_');
	this.setMaxTachieSemenToiletSeatId(1);
	this.setMaxTachieWetToiletSeatId(1);
	
	this.setMaxTachieGlorySemenLeftWallId(1);
	this.setMaxTachieGlorySemenRightWallId(1);
	this.setMaxTachieGlorySemenLeftHoleId(1);
	this.setMaxTachieGlorySemenRightHoleId(1);
	this.setMaxTachieGlorySemenLeftToiletId(1);
	this.setMaxTachieGlorySemenRightToiletId(1);
	
	this.setMaxTachieStrayBoobsId(2,3,4);
	this.setMaxTachieStrayButtId(1,2,2);
	this.setMaxTachieStrayFaceId(1,1,1);
	this.setMaxTachieStrayGroinId(1,1,1);
	this.setTachieStrayBoobsExtension('normal_');
	
	this.setTachieBoobsHasHCup(true);
	this.setTachieTieHasHCup(true);
	this.setTachieSemenBoobsHasHCup(true);
	this.setTachieStrayBoobsHasHCup(true);
	this.setTachieBoobsHasPCup(true);
	this.setTachieTieHasPCup(true);
	this.setTachieSemenBoobsHasPCup(true);
	this.setTachieStrayBoobsHasPCup(true);
	
	this.emoteGloryToiletStandRightPose();
	
	this.setAllowTachieUpdate(true);
};

////////
// Stripper

Game_Actor.prototype.isInStripperIntermissionPose = function() {
	return this.poseName == POSE_STRIPPER_INTERMISSION;
};
Game_Actor.prototype.setStripperIntermissionPose = function() {
	this.setPose(POSE_STRIPPER_INTERMISSION, false);
	this.setSpriteBattlerPosData(POSE_STRIPPER_INTERMISSION);
	this.setHasTachiePubic(false);
	this.setHasTachieHat(false);
};

Game_Actor.prototype.isInStripperMouthPose = function() {
	return this.poseName == POSE_STRIPPER_MOUTH;
};
Game_Actor.prototype.setStripperMouthPose = function() {
	this.setAllowTachieUpdate(false);
	let pose = this.poseName;
	let notAlreadyInSamePose = pose != POSE_STRIPPER_MOUTH;
	
	if(notAlreadyInSamePose)
		this.setPose(POSE_STRIPPER_MOUTH);
	
	this.setSpankablePose(false);
	this.setHasTachiePubic(true);
	this.setHasTachieHat(false);
	
	this.setSpriteBattlerPosData(POSE_STRIPPER_MOUTH);
	this.setAllBodySlotsFree();
	
	this.setTachiePole(1);
	this.setTachieHead(1);
	this.setTachieLeftArm('normal_1');
	this.setTachieRightArm('normal_1');
	this.setMaxTachieWetId(3);
	
	this.setMaxTachieStrayBoobsId(1,2,2);
	this.setMaxTachieStrayButtId(1,1,1);
	this.setMaxTachieStrayFaceId(1,2,2);
	this.setMaxTachieStrayGroinId(1,1,2);

	this.setTachieBodyHasHCup(true);
	this.setTachieBoobsHasHCup(true);
	this.setTachieFrontAHasHCup(true);
	this.setTachieBackCHasHCup(true);
	this.setTachieStrayBoobsHasHCup(true);
	this.setTachieCondomBraHasHCup(true);
	this.setTachieCondomChikubiHasHCup(true);
	this.setTachieBodyHasPCup(true);
	this.setTachieBoobsHasPCup(true);
	this.setTachieFrontAHasPCup(true);
	this.setTachieBackCHasPCup(true);
	this.setTachieStrayBoobsHasPCup(true);
	this.setTachieCondomBraHasPCup(true);
	this.setTachieCondomChikubiHasPCup(true);

	this.emoteStripperMouthPose();
	this.setAllowTachieUpdate(true);
};

Game_Actor.prototype.isInStripperBoobsPose = function() {
	return this.poseName == POSE_STRIPPER_BOOBS;
};
Game_Actor.prototype.setStripperBoobsPose = function() {
	this.setAllowTachieUpdate(false);
	let pose = this.poseName;
	let notAlreadyInSamePose = pose != POSE_STRIPPER_BOOBS;
	
	if(notAlreadyInSamePose)
		this.setPose(POSE_STRIPPER_BOOBS);
	
	this.setSpankablePose(false);
	this.setHasTachiePubic(true);
	this.setHasTachieHat(false);
	
	this.setSpriteBattlerPosData(POSE_STRIPPER_BOOBS);
	this.setAllBodySlotsFree();
	
	this.setTachiePole(1);
	this.setTachieHead(1);
	this.setMaxTachieWetId(3);
	
	this.setMaxTachieStrayBoobsId(2,2,2);
	this.setMaxTachieStrayFaceId(1,2,2);
	this.setMaxTachieStrayGroinId(1,2,2);
	
	this.setTachieBoobsHasHCup(true);
	this.setTachieFrontAHasHCup(true);
	this.setTachieFrontDHasHCup(true);
	this.setTachieStrayBoobsHasHCup(true);
	this.setTachieCondomBraHasHCup(true);
	this.setTachieCondomChikubiHasHCup(true);
	this.setTachieBoobsHasPCup(true);
	this.setTachieFrontAHasPCup(true);
	this.setTachieFrontDHasPCup(true);
	this.setTachieStrayBoobsHasPCup(true);
	this.setTachieCondomBraHasPCup(true);
	this.setTachieCondomChikubiHasPCup(true);
	
	this.emoteStripperBoobsPose();
	this.setAllowTachieUpdate(true);
};

Game_Actor.prototype.isInStripperPussyPose = function() {
	return this.poseName == POSE_STRIPPER_PUSSY;
};
Game_Actor.prototype.setStripperPussyPose = function() {
	this.setAllowTachieUpdate(false);
	let pose = this.poseName;
	let notAlreadyInSamePose = pose != POSE_STRIPPER_PUSSY;
	
	if(notAlreadyInSamePose)
		this.setPose(POSE_STRIPPER_PUSSY);
	
	this.setSpankablePose(false);
	this.setHasTachiePubic(true);
	this.setHasTachieHat(false);
	
	this.setSpriteBattlerPosData(POSE_STRIPPER_PUSSY);
	this.setAllBodySlotsFree();
	
	this.setTachieRightArm('normal_1');
	this.setMaxTachieWetId(3);
	
	this.setMaxTachieStrayBoobsId(1,2,2);
	this.setMaxTachieStrayButtId(1,1,1);
	this.setMaxTachieStrayFaceId(1,2,2);
	this.setMaxTachieStrayGroinId(2,2,2);
	
	this.setTachieBoobsHasHCup(true);
	this.setTachieStrayBoobsHasHCup(true);
	this.setTachieCondomBraHasHCup(true);
	this.setTachieCondomChikubiHasHCup(true);
	this.setTachieBoobsHasPCup(true);
	this.setTachieBackAHasPCup(true);
	this.setTachieFrontBHasPCup(true);
	this.setTachieFrontDHasPCup(true);
	this.setTachieStrayBoobsHasPCup(true);
	this.setTachieCondomBraHasPCup(true);
	this.setTachieCondomBeltHasPCup(false);
	this.setTachieCondomChikubiHasPCup(true);
	
	
	this.emoteStripperPussyPose();
	this.setAllowTachieUpdate(true);
};

Game_Actor.prototype.isInStripperButtPose = function() {
	return this.poseName == POSE_STRIPPER_BUTT;
};
Game_Actor.prototype.setStripperButtPose = function() {
	this.setAllowTachieUpdate(false);
	let pose = this.poseName;
	let notAlreadyInSamePose = pose != POSE_STRIPPER_BUTT;
	
	if(notAlreadyInSamePose)
		this.setPose(POSE_STRIPPER_BUTT);
	
	this.setSpankablePose(false);
	this.setHasTachiePubic(true);
	this.setHasTachieHat(false);
	
	this.setSpriteBattlerPosData(POSE_STRIPPER_BUTT);
	this.setAllBodySlotsFree();
	
	this.setTachiePole(1);
	this.setTachieRightArm('normal_1');
	this.setMaxTachieWetId(3);
	
	this.setMaxTachieStrayButtId(2,3,4);
	this.setMaxTachieStrayFaceId(1,1,1);
	this.setMaxTachieStrayGroinId(1,2,2);
	
	this.setTachieBoobsHasHCup(true);
	this.setTachieStrayBoobsHasHCup(true);
	this.setTachieCondomBraHasHCup(true);
	this.setTachieCondomChikubiHasHCup(true);
	this.setTachieFrontEHasHCup(true);
	this.setTachieBoobsHasPCup(true);
	this.setTachieStrayBoobsHasPCup(true);
	this.setTachieCondomBraHasPCup(true);
	this.setTachieCondomChikubiHasPCup(true);
	this.setTachieFrontEHasPCup(true);
	
	this.emoteStripperButtPose();
	this.setAllowTachieUpdate(true);
};

//Stripper VIP
//StripperVIP
Game_Actor.prototype.isInStripperSexPose = function() {
	return this.poseName == POSE_STRIPPER_VIP;
};
Game_Actor.prototype.setStripperSexPose = function() {
	this.setAllowTachieUpdate(false);
	
	this.setPose(POSE_STRIPPER_VIP);
	this.setSpriteBattlerPosData(POSE_STRIPPER_VIP);
	this.setAllBodySlotsFree();
	this.setClitToyInsertablePose(false);
	this.setPussyToyInsertablePose(false);
	this.setAnalToyInsertablePose(false);
	this.setSpankablePose(true);
	this.setHasTachiePubic(true);
	this.setHasTachieHat(false);
	
	if(Karryn.isCensored())
		this.setTachieBody('1_cen');
	else
		this.setTachieBody('1');
	
	this.setTachieHead('normal');
	this.setTachieHairExtension('normal_');
	this.setTachieSemenFaceExtension('normal_');
	this.setTachieBoobs('normal');
	this.setTachieSemenBoobsExtension('normal_');
	this.setTachieRightArm('normal');
	this.setTachieLeftArm('normal');
	this.setTachieSemenLeftArmExtension('normal_');
	this.setTachieSemenRightArmExtension('normal_');
	
	this.setMaxTachieSemenAnalId(1);
	this.setMaxTachieSemenBellyId(1);
	this.setMaxTachieSemenBoobsId(1);
	this.setMaxTachieSemenButtId(1);
	this.setMaxTachieSemenCrotchId(1);
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieSemenLeftArmId(1);
	this.setMaxTachieSemenRightArmId(1);
	this.setMaxTachieSemenLeftLegId(1);
	this.setMaxTachieSemenRightLegId(1);
	this.setMaxTachieWetId(1);
	this.setMaxTachieSemenFrontAId(1);
	this.setMaxTachieSemenFrontBId(1);
	this.setMaxTachieSemenFrontCId(1);
	
	this.setBodyPartFree_PettingOnly(THIGHS_ID);
	this.setBodyPartFree_PettingOnly(NIPPLES_ID);
	this.setBodyPartFree_PettingOnly(CLIT_ID);
	this.setBodyPartUnavailable(STOMACH_ID);
	this.setBodyPartUnavailable(FEET_ID);
	
	
	$gameMap.changeBattleback(BATTLEBACK1_STRIPCLUB_STRIPPER_SEX_NAME, null);
	BattleManager.changeBattleback(BATTLEBACK1_STRIPCLUB_STRIPPER_SEX_NAME, null);
	
	BattleManager.playSpecialBgm_StripperSex();
	
	this.setMaxTachieStrayBoobsId(2,3,5);
	this.setMaxTachieStrayButtId(1,2,4);
	this.setMaxTachieStrayFaceId(1,2,2);
	this.setMaxTachieStrayGroinId(2,3,4);
	this.setTachieStrayFaceExtension('normal_');
	this.setTachieStrayBoobsExtension('normal_');
	
	this.setTachieBoobsHasHCup(true);
	this.setTachieFrontAHasHCup(true);
	this.setTachieStrayBoobsHasHCup(true);
	this.setTachieSemenBoobsHasHCup(true);
	this.setTachieCondomChikubiHasHCup(true);
	this.setTachieBoobsHasPCup(true);
	this.setTachieFrontAHasPCup(true);
	this.setTachieCockBoobsHasPCup(true);
	this.setTachieSemenCockBoobsHasPCup(true);
	this.setTachieStrayBoobsHasPCup(true);
	this.setTachieSemenBoobsHasPCup(true);
	this.setTachieCondomChikubiHasPCup(true);
	
	this.emoteStripperVIPPose();
	this.setAllowTachieUpdate(true);
	
	BattleManager.actionRemLines(KARRYN_LINE_STRIPPER_VIP_START);
};

////////
// Trainer

//Trainer Standby
Game_Actor.prototype.isInTrainerStandbyPose = function() {
	return this.poseName == POSE_TRAINER_STANDBY;
};
Game_Actor.prototype.setTrainerStandbyPose = function() {
	this.setPose(POSE_TRAINER_STANDBY, false);
	this.setSpriteBattlerPosData(POSE_TRAINER_STANDBY);
	this.setHasTachiePubic(false);
	this.setHasTachieHat(false);
	this.moanMasterManager();
};

//Trainer Tekoki
Game_Actor.prototype.isInTrainerTekokiPose = function() {
	return this.poseName == POSE_TRAINER_TEKOKI;
};
Game_Actor.prototype.setTrainerTekokiPose = function(target) {
	this.setAllowTachieUpdate(false);
	let pose = this.poseName;
	let notAlreadyInSamePose = pose != POSE_TRAINER_TEKOKI;
	
	if(notAlreadyInSamePose) {
		this.setPose(POSE_TRAINER_TEKOKI, true);
		this.completeResetTachieFace();
		this.completeResetBodyParts();
		this.completeResetMaxTachieSemenId();
		
		if(target) {
			target.setGymOrgasmSkills_trainerWork();
		}
	}
	
	this.setSpankablePose(false);
	this.setHasTachiePubic(false);
	this.setHasTachieHat(false);
	
	this.setSpriteBattlerPosData(POSE_TRAINER_TEKOKI);
	//this.setAllBodySlotsFree();
	

	this.setTachieBody(this.gymOutfitColor);

	this.setMaxTachieSemenButtId(1);
	this.setMaxTachieSemenBoobsId(1);
	this.setMaxTachieSemenFaceId(1);
	//this.setMaxTachieSemenLeftArmId(1);
	//this.setMaxTachieSemenRightArmId(1);
	this.setMaxTachieSemenCrotchId(1);
	//this.setMaxTachieSemenCockNormalId(1);
	
	this.setMaxTachieSemenFrontAId(1);
	this.setMaxTachieSemenFrontBId(1);
	this.setMaxTachieSemenFrontCId(1);
	
	this.setMaxTachieStrayBoobsId(2,3,3);
	this.setMaxTachieStrayButtId(1,1,1);
	this.setMaxTachieStrayFaceId(1,2,2);
	
	this.setTachieBodyHasHCup(true);
	this.setTachieSemenBoobsHasHCup(true);
	this.setTachieStrayBoobsHasHCup(true);
	this.setTachieBodyHasPCup(true);
	this.setTachieHoodHasPCup(true);
	this.setTachieSemenBoobsHasPCup(true);
	this.setTachieSemenCrotchHasPCup(true);
	this.setTachieStrayBoobsHasPCup(true);
	
	this.emoteTrainerTekokiPose();
	this.setAllowTachieUpdate(true);
	
	this.moanMasterManager();
};

//Trainer Kisu
Game_Actor.prototype.isInTrainerKisuPose = function() {
	return this.poseName == POSE_TRAINER_KISU;
};
Game_Actor.prototype.setTrainerKisuPose = function(target, hasHeadSetting, setHeadClose) {
	this.setAllowTachieUpdate(false);
	let pose = this.poseName;
	let notAlreadyInSamePose = pose != POSE_TRAINER_KISU;
	//let givingHJ = this.isBodySlotPenis(LEFT_HAND_ID);
	
	if(notAlreadyInSamePose) {
		this.setPose(POSE_TRAINER_KISU, true);
		if(!hasHeadSetting) setHeadClose = false;
		//if(givingHJ) {
			this.completeResetTachieFace();
			this.completeResetBodyParts();
			this.completeResetMaxTachieSemenId();
		//}
		
		if(target) {
			target.setGymOrgasmSkills_trainerWork();
		}
	}
	
	this.setSpankablePose(false);
	this.setHasTachiePubic(false);
	this.setHasTachieHat(false);
	
	if(this.boobsSizeIsPCup()) {
		this.setTachieBoobs(1);
	}
	else {
		this.resetTachieBoobs();
	}
	
	this.setSpriteBattlerPosData(POSE_TRAINER_KISU);
	//if(!givingHJ)
	//	this.setAllBodySlotsFree();

	this.setTachieBody(this.gymOutfitColor);
	
	//this.setTrainerTachieGymGoer(target);
	
	this.setMaxTachieSemenBoobsId(1);
	//this.setMaxTachieSemenFaceId(1);
	//this.setMaxTachieSemenLeftArmId(1);
	this.setMaxTachieSemenRightArmId(1);
	//this.setMaxTachieSemenCockNormalId(1);
	
	this.setMaxTachieSemenFrontAId(1);
	this.setMaxTachieSemenFrontBId(1);
	this.setMaxTachieSemenFrontCId(1);
	
	this.setMaxTachieStrayBoobsId(1,2,2);
	this.setMaxTachieStrayFaceId(1,2,2);
	
	this.setTachieBodyHasHCup(true);
	this.setTachieHoodHasHCup(true);
	this.setTachieSemenBoobsHasHCup(true);
	this.setTachieBodyHasPCup(true);
	this.setTachieBoobsHasPCup(true);
	this.setTachieSemenBoobsHasPCup(true);
	this.setTachieStrayBoobsHasPCup(true);
	
	this.emoteTrainerKisuPose();
	this.setAllowTachieUpdate(true);
	
	this.moanMasterManager();
};

//Trainer Fera
Game_Actor.prototype.isInTrainerFeraPose = function() {
	return this.poseName == POSE_TRAINER_FERA;
};
Game_Actor.prototype.setTrainerFeraPose = function(target, hasBodySetting, setBodyClose) {
	this.setAllowTachieUpdate(false);
	let pose = this.poseName;
	let notAlreadyInSamePose = pose != POSE_TRAINER_FERA;
	
	if(notAlreadyInSamePose) {
		this.setPose(POSE_TRAINER_FERA, true);
		if(!hasBodySetting) setBodyClose = false;
		this.completeResetTachieFace();
		this.completeResetBodyParts();
		this.completeResetMaxTachieSemenId();
		
		if(target) {
			target.setGymOrgasmSkills_trainerWork();
		}
	}
	
	this.setSpankablePose(false);
	this.setHasTachiePubic(false);
	this.setHasTachieHat(false);
	
	this.setSpriteBattlerPosData(POSE_TRAINER_FERA);
	//this.setAllBodySlotsFree();
	
	//this.setTrainerTachieGymGoer(target);
	
	//this.setMaxTachieSemenBoobsId(1);
	//this.setMaxTachieSemenFaceId(1);
	//this.setMaxTachieSemenLeftArmId(1);
	//this.setMaxTachieSemenRightArmId(1);
	//this.setMaxTachieSemenCockNormalId(1);
	
	this.setMaxTachieSemenFrontAId(1);
	this.setMaxTachieSemenFrontBId(1);
	this.setMaxTachieSemenFrontCId(1);
	
	this.setMaxTachieStrayBoobsId(1,2,2);
	this.setMaxTachieStrayFaceId(1,2,2); 
	
	this.setTachieBodyHasHCup(true);
	this.setTachieSemenBoobsHasHCup(true);
	this.setTachieBodyHasPCup(true);

	
	this.emoteTrainerFeraPose();
	this.setAllowTachieUpdate(true);
	
	this.moanMasterManager();
};

//Trainer Paizuri
Game_Actor.prototype.isInTrainerPaizuriPose = function() {
	return this.poseName == POSE_TRAINER_PAIZURI;
};
Game_Actor.prototype.setTrainerPaizuriPose = function(target) {
	this.setAllowTachieUpdate(false);
	let pose = this.poseName;
	let notAlreadyInSamePose = pose != POSE_TRAINER_PAIZURI;
	
	if(notAlreadyInSamePose) {
		this.setPose(POSE_TRAINER_PAIZURI, true);
		this.completeResetTachieFace();
		this.completeResetBodyParts();
		this.completeResetMaxTachieSemenId();
		
		if(target) {
			target.setGymOrgasmSkills_trainerWork();
		}
	}
	
	this.setSpankablePose(false);
	this.setHasTachiePubic(false);
	this.setHasTachieHat(false);
	
	this.setTachieHead('1');
	this.setTachieBackD('hip');
	
	this.setSpriteBattlerPosData(POSE_TRAINER_PAIZURI);
	//this.setAllBodySlotsFree();
	
	//this.setTrainerTachieGymGoer(target);
	
	//this.setMaxTachieSemenBoobsId(1);
	this.setMaxTachieSemenFaceId(1);
	//this.setMaxTachieSemenLeftArmId(1);
	//this.setMaxTachieSemenRightArmId(1);
	//this.setMaxTachieSemenCockNormalId(1);
	
	this.setMaxTachieSemenFrontAId(1);
	this.setMaxTachieSemenFrontBId(1);
	this.setMaxTachieSemenFrontCId(1);
	
	this.setMaxTachieStrayBoobsId(2,3,3);
	this.setMaxTachieStrayFaceId(1,2,2);
	
	this.setTachieBoobsHasHCup(true);
	this.setTachieFrontCHasHCup(true);
	this.setTachieStrayBoobsHasHCup(true); 
	this.setTachieSemenBoobsHasHCup(true); 
	this.setTachieCockBoobsHasHCup(true);
	this.setTachieBoobsHasPCup(true);
	this.setTachieFrontCHasPCup(true);
	this.setTachieStrayBoobsHasPCup(true); 
	this.setTachieSemenBoobsHasPCup(true); 
	this.setTachieCockBoobsHasPCup(true);
	
	this.emoteTrainerPaizuriPose();
	this.setAllowTachieUpdate(true);
	
	this.moanMasterManager();
};

//Trainer Paizuri
Game_Actor.prototype.isInTrainerRinkanPose = function() {
	return this.poseName == POSE_TRAINER_RINKAN;
};
Game_Actor.prototype.setTrainerRinkanPose = function() {
	this.setAllowTachieUpdate(false);
	let pose = this.poseName;
	let notAlreadyInSamePose = pose != POSE_TRAINER_RINKAN;
	
	if(notAlreadyInSamePose)
		this.setPose(POSE_TRAINER_RINKAN);
	
	this.setSpankablePose(true);
	this.setHasTachieHat(false);
	this.setClitToyInsertablePose(false);
	this.setPussyToyInsertablePose(false);
	this.setAnalToyInsertablePose(false);
	this.setHasTachiePubic(false);
	
	this.setSpriteBattlerPosData(POSE_TRAINER_RINKAN);
	this.setAllBodySlotsFree();
	
	this.setTachieHead('normal');
	this.setTachieBody('normal');
	this.setTachieBoobs('clothed_' + this.gymOutfitColor);
	
	this.setTachieHairExtension('normal_');
	this.setTachieSemenFaceExtension('normal_');
	this.setTachieSemenBackExtension('clothed_');
	this.setTachieSemenBellyExtension('clothed_');
	this.setTachieSemenBoobsExtension('clothed_');
	this.setTachieSemenWetExtension('normal_');
	this.setMaxTachieSemenBackId(1);
	this.setMaxTachieSemenButtId(1);
	this.setMaxTachieWetId(1);
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieSemenBellyId(1);
	this.setMaxTachieSemenBoobsId(1);
	this.setMaxTachieSemenLeftLegId(1);
	this.setMaxTachieSemenRightLegId(1);
	this.setMaxTachieSemenRightArmId(1);
	this.setMaxTachieSemenFrontAId(1);
	this.setMaxTachieSemenFrontBId(1);
	this.setMaxTachieSemenFrontCId(1);
	
	this.setBodyPartFree_PettingOnly(CLIT_ID);
	this.setBodyPartFree_PettingOnly(BOOBS_ID);
	this.setBodyPartFree_PettingOnly(NIPPLES_ID);
	this.setBodyPartUnavailable(LEFT_HAND_ID);
	this.setBodyPartUnavailable(RIGHT_HAND_ID);
	this.setBodyPartUnavailable(FEET_ID);
	this.setBodyPartUnavailable(STOMACH_ID);
	
	this.setMaxTachieStrayBoobsId(1,2,3);
	this.setMaxTachieStrayButtId(1,2,4);
	this.setMaxTachieStrayFaceId(1,2,2);
	this.setMaxTachieStrayGroinId(1,2,4);
	
	this.setTachieStrayFaceExtension('normal_');
	this.setTachieStrayBoobsExtension('clothed_');
	
	$gameMap.changeBattleback(BATTLEBACK1_GYM_TRAINER_RINKAN_NAME, null);
	BattleManager.changeBattleback(BATTLEBACK1_GYM_TRAINER_RINKAN_NAME, null);
	
	this.setTachieBoobsHasHCup(true);
	this.setTachieSemenBoobsHasHCup(true);
	this.setTachieStrayBoobsHasHCup(true);
	this.setTachieBoobsHasPCup(true);
	this.setTachieSemenBoobsHasPCup(true);
	this.setTachieStrayBoobsHasPCup(true);
	
	BattleManager.playSpecialBgm_TrainerRinkan();
	this.emoteTrainerRinkanPose();
	this.setAllowTachieUpdate(true);
	
	BattleManager.actionRemLines(KARRYN_LINE_TRAINER_RINKAN_START);
};

//////
// No Stamina Defeat Pose

// Lose the battle when in the following poses with no stamina
Game_Actor.prototype.isInNoStaminaIsDefeatPose = function() {
	if(!DEBUG_MODE) return true;
	
	return this.isInMasturbationCouchPose();
};


//////
// Ignore Metal Properties Pose
Game_Actor.prototype.isInIgnoreMetalPropertiesPose = function() {
	return this.isInDefeatedPose() || this.isInJobPose();
};

////////
// Ignore No Stamina and No Energy Pose

//Battle does not automatically end with no stamina and no energy
Game_Battler.prototype.isInNeverDeadPose = function() {
	return false;
};
Game_Actor.prototype.isInNeverDeadPose = function() {
	return this.isInDefeatedPose();
};

///////////
// No Ejaculation Stock and No Energy does not mean it is over Pose

Game_Actor.prototype.isInNoEjaculationStockStillContinuesPose = function() {
	return this.isInWaitressSexPose() || $gameParty.isInGloryBattle || ($gameParty.isInStripperBattle && !this.isInStripperSexPose()) || ($gameParty.isInTrainerBattle && !this.isInTrainerRinkanPose());
};

///////
// Draw Enemies Above Tachie Pose

Game_Actor.prototype.isDrawEnemiesAboveBattleTachiePose = function() {
	return this.isInMasturbationCouchPose() || this.isInDefeatedPose() || this.isInReceptionistPose() || $gameParty.isInGloryBattle || ($gameParty.isInTrainerBattle && !this.isInTrainerRinkanPose());
};

/////////////
// Don't Gain Fatigue Per Turn Pose

Game_Actor.prototype.isDontGainFatiguePerTurnPose = function() {
	return this.isInMasturbationCouchPose() || this.isInDefeatedPose() || this.isInJobPose();
};

//////
// Battleback Setting Pose

Game_Actor.prototype.isInDrawBattleBacks1CloseGroundPose = function() {
	return this.isInThugGangbangPose();
};
Game_Actor.prototype.isInDrawBattleBacks1FarGroundPose = function() {
	return this.isInDownOrgasmPose();
};
Game_Actor.prototype.isInDrawDefaultBattleBacks1Pose = function() {
	return $dataMap.specifyBattleback && !this.isInDrawBattleBacks1CloseGroundPose() && !this.isInDrawBattleBacks1FarGroundPose() && !this.isInJobPose() && !this.isInDefeatedPose() && !this.isInMasturbationCouchPose() && !this.isInMapPose();
};

//Pose Battlebacks
 
Game_Actor.prototype.setPoseBattlebacks = function() {
	if(!BattleManager._spriteset) return;
	let battleback1Name = '' + $dataMap.battleback1Name;
	let battleback2Name = '' + $dataMap.battleback2Name;
	
	if(Prison.isNightBattle()) battleback2Name += '_night';
	
	if(battleback1Name && this.isInDrawBattleBacks1CloseGroundPose() && !battleback1Name.includes('Defeated')) {
		$gameMap.changeBattleback(battleback1Name + '_close', battleback2Name);
		BattleManager.changeBattleback(battleback1Name + '_close', battleback2Name);
	}
	else if(battleback1Name && this.isInDrawBattleBacks1FarGroundPose() && !battleback1Name.includes('Defeated')) {
		$gameMap.changeBattleback(battleback1Name + '_far', battleback2Name);
		BattleManager.changeBattleback(battleback1Name + '_far', battleback2Name);
	}
	else if(this.isInDrawDefaultBattleBacks1Pose()) {
		$gameMap.changeBattleback(battleback1Name, battleback2Name);
		BattleManager.changeBattleback(battleback1Name, battleback2Name);
	} 
	else return;
};



///////
// Show Enemy Name Only During Valid Selection Pose

Game_Actor.prototype.isInShowEnemyNameOnlyDuringValidSelectionPose = function() {
	return this.isInDefeatedPose() || this.isInWaitressSexPose() || this.isInStripperSexPose() || this.isInTrainerRinkanPose();
};
Game_Actor.prototype.isInDontShowEnemyNameEverPose = function() {
	return $gameParty.isInGloryBattle;
};
Game_Actor.prototype.isInShowEnemyImageOnlyDuringValidSelectionPose = function() {
	return this.isInMasturbationCouchPose() || this.isInDefeatedPose() || this.isInWaitressSexPose() || $gameParty.isInGloryBattle || this.isInStripperSexPose() || this.isInTrainerRinkanPose();
};
Game_Actor.prototype.isInShowEnemyGaugeOnlyDuringValidSelectionPose = function() {
	return this.isInDefeatedPose() || this.isInWaitressSexPose() || this.isInStripperSexPose() || this.isInTrainerRinkanPose();
};
Game_Actor.prototype.isInDontShowEnemyHealthGaugePose = function() {
	return $gameParty.isInWaitressBattle || this.isInDefeatedPose() || $gameParty.isInGloryBattle || $gameParty.isInStripperBattle || $gameParty.isInTrainerBattle;
};
Game_Actor.prototype.isInDontShowEnemyPleasureGaugePose = function() {
	return $gameParty.isInWaitressBattle || this.isInDefeatedPose() || $gameParty.isInGloryBattle;
};
Game_Actor.prototype.isInDontShowEnemyStateIconsPose = function() {
	return $gameParty.isInGloryBattle;
};
Game_Actor.prototype.isInReorderEnemyImagesOnSelectionPose = function() {
	return this.isInDefeatedPose() || this.isInWaitressSexPose() || $gameParty.isInGloryBattle || this.isInStripperSexPose() || this.isInTrainerRinkanPose();
};
Game_Actor.prototype.isInDrawEnemiesAtHalfWidthPose = function() {
	//return false;
	return $gameParty.isInWaitressBattle || this.isInDefeatedPose() || $gameParty.isInStripperBattle || $gameParty.isInTrainerBattle;
};
Game_Actor.prototype.isInEnemiesDontRegenPleasurePose = function() {
	return this.isInWaitressServingPose() || ($gameParty.isInStripperBattle && !this.isInStripperSexPose());
};
Game_Actor.prototype.isInEnemiesDontDrawSelectionPose = function() {
	return $gameParty.isInGloryBattle;
};
Game_Actor.prototype.isInEnemiesJoinArousedAndStayArousedPose = function() {
	return this.isInDefeatedPose() || this.isInWaitressSexPose() || this.isInStripperSexPose() || this.isInTrainerRinkanPose();
};
Game_Actor.prototype.isInEnemiesStayArousedPostEjaculationPose = function() {
	return $gameParty.isInTrainerBattle;
};

////////
// Set Defeat Poses
////////////////

Game_Actor.prototype.isInDefeatedPose = function() {
	return this.isInDefeatedLevel1Pose() || this.isInDefeatedLevel2Pose() || this.isInDefeatedLevel3Pose() || this.isInDefeatedLevel4Pose() || this.isInDefeatedLevel5Pose() || this.isInDefeatedGuardPose();
};

Game_Actor.prototype.isInDefeatedLevel1Pose = function() {
	return this.poseName == POSE_DEFEATED_LEVEL1;
};
Game_Actor.prototype.setDefeatedLevel1Pose = function() {
	this.setAllowTachieUpdate(false);
	this.setPose(POSE_DEFEATED_LEVEL1);
	this.setSpriteBattlerPosData(POSE_DEFEATED_LEVEL1);
	this.takeOffPanties();
	this.removeClothing();
	this.removeAllPettedInsertExceptToy();
	this.setAllBodySlotsFreeExceptToy();
	this.setHasTachiePubic(false);
	this.setHasTachieClitToyNaked(false);
	
	this.setTachieBody('1');
	
	this.setTachieLeftBoob('normal');
	this.setTachieRightBoob('normal');
	
	if(!this.isWearingGlovesAndHat()) {
		this.setTachieLeftArm('normal_naked');
		this.setTachieRightArm('normal_naked');
	}
	else {
		this.setTachieTie('1');
		this.setTachieLeftArm('normal');
		this.setTachieRightArm('normal');
	}
	
	this.setTachieSemenLeftArmExtension('normal_');
	this.setTachieSemenRightArmExtension('normal_');
	this.setTachieSemenLeftBoobExtension('normal_');
	this.setTachieSemenRightBoobExtension('normal_');
	this.setTachieStrayLeftBoobExtension('normal_');
	this.setTachieStrayRightBoobExtension('normal_');

	this.setMaxTachieSemenLeftArmId(1);
	this.setMaxTachieSemenRightArmId(1);
	this.setMaxTachieSemenLeftBoobId(1);
	this.setMaxTachieSemenRightBoobId(1);
	this.setMaxTachieSemenFaceId(1);
	
	this.setBodyPartFree_PettingOnly(BOOBS_ID);
	this.setBodyPartFree_PettingOnly(NIPPLES_ID);
	this.setBodyPartUnavailable(CLIT_ID);
	this.setBodyPartUnavailable(PUSSY_ID);
	this.setBodyPartUnavailable(ANAL_ID);
	this.setBodyPartUnavailable(BUTT_ID);
	this.setBodyPartUnavailable(STOMACH_ID);
	this.setBodyPartUnavailable(FEET_ID);
	this.setBodyPartUnavailable(THIGHS_ID);
	
	this.setMaxTachieStrayLeftBoobId(2,3,3);
	this.setMaxTachieStrayRightBoobId(2,3,3);
	this.setMaxTachieStrayFaceId(1,2,2);
	
	this.setTachieLeftBoobHasHCup(true);
	this.setTachieRightBoobHasHCup(true);
	this.setTachieSemenLeftBoobHasHCup(true);
	this.setTachieSemenRightBoobHasHCup(true);
	this.setTachieStrayLeftBoobHasHCup(true);
	this.setTachieStrayRightBoobHasHCup(true);
	this.setTachieLeftBoobHasPCup(true);
	this.setTachieRightBoobHasPCup(true);
	this.setTachieSemenLeftBoobHasPCup(true);
	this.setTachieSemenRightBoobHasPCup(true);
	this.setTachieStrayLeftBoobHasPCup(true);
	this.setTachieStrayRightBoobHasPCup(true);
	
	this.emoteDefeatedLevelOnePose(false);
	this.setAllowTachieUpdate(true);
};

Game_Actor.prototype.isInDefeatedLevel2Pose = function() {
	return this.poseName == POSE_DEFEATED_LEVEL2;
};
Game_Actor.prototype.setDefeatedLevel2Pose = function() {
	this.setAllowTachieUpdate(false);
	this.setPose(POSE_DEFEATED_LEVEL2);
	this.setSpriteBattlerPosData(POSE_DEFEATED_LEVEL2);
	this.takeOffPanties();
	this.removeClothing();
	this.removeAllPettedInsertExceptToy();
	this.setAllBodySlotsFreeExceptToy();
	this.setSpankablePose(true);
	this.setHasTachiePubic(true);
	this.setHasTachieClitToyNaked(false);
	
	if(!this.isWearingGlovesAndHat()) {
		if(Karryn.isCensored())
			this.setTachieBody('naked_1_cen');
		else
			this.setTachieBody('naked_1');
		
		this.setTachieLeftArm('naked_1');
		this.setTachieRightArm('naked_1');
	}
	else {
		if(Karryn.isCensored())
			this.setTachieBody('1_cen');
		else
			this.setTachieBody('1');
		
		this.setTachieTie('1');
		this.setTachieLeftArm('1');
		this.setTachieRightArm('1');
	}
	
	this.setTachieBoobs('1');
	
	if(this.isWearingPussyToy_PenisDildo()) {
		this.setTachieHolePussy('open');
		this.setTachiePubicExtension('open_');
		this.setTachieStrayGroinExtension('open_');
		this.setTachieSemenWetExtension('open_');
		this.setTachieSemenCrotchExtension('open_');
	}
	
	this.setMaxTachieSemenAnalId(1);
	this.setMaxTachieSemenBackId(1);
	this.setMaxTachieSemenBoobsId(1);
	this.setMaxTachieSemenButtTopRightId(1);
	this.setMaxTachieSemenButtBottomRightId(1);
	this.setMaxTachieSemenButtTopLeftId(1);
	this.setMaxTachieSemenButtBottomLeftId(1);
	this.setMaxTachieSemenCrotchId(1);
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieSemenLeftArmId(1);
	this.setMaxTachieSemenRightArmId(1);
	this.setMaxTachieWetId(1);
	
	this.setBodyPartFree_PettingOnly(MOUTH_ID);
	this.setBodyPartFree_PettingOnly(BOOBS_ID);
	this.setBodyPartFree_PettingOnly(NIPPLES_ID);
	this.setBodyPartUnavailable(STOMACH_ID);
	this.setBodyPartUnavailable(RIGHT_HAND_ID);
	this.setBodyPartUnavailable(LEFT_HAND_ID);
	this.setBodyPartUnavailable(FEET_ID);
	this.setBodyPartUnavailable(THIGHS_ID);
	
	this.setMaxTachieStrayBoobsId(1,2,2);
	this.setMaxTachieStrayButtId(2,3,4);
	this.setMaxTachieStrayFaceId(1,2,2);
	this.setMaxTachieStrayGroinId(2,3,4);
	
	this.setTachieBoobsHasHCup(true);
	this.setTachieSemenBoobsHasHCup(true);
	this.setTachieStrayBoobsHasHCup(true);
	this.setTachieBoobsHasPCup(true);
	this.setTachieSemenBackHasPCup(true);
	this.setTachieSemenBoobsHasPCup(true);
	this.setTachieStrayBoobsHasPCup(true);
	this.setTachieSemenButtBottomLeftHasPCup(true);
	this.setTachieSemenButtTopLeftHasPCup(true);
	
	if(this.isWearingPussyToy_PenisDildo())
		this.setToyInserted_PussyToy_PenisDildo(true);
	if(this.isWearingAnalToy_AnalBeads())
		this.setToyInserted_AnalToy_AnalBeads(true);
	
	this.emoteDefeatedLevelTwoPose();
	this.setAllowTachieUpdate(true);
};

Game_Actor.prototype.isInDefeatedLevel3Pose = function() {
	return this.poseName == POSE_DEFEATED_LEVEL3;
};
Game_Actor.prototype.setDefeatedLevel3Pose = function() {
	this.setAllowTachieUpdate(false);
	this.setPose(POSE_DEFEATED_LEVEL3);
	this.setSpriteBattlerPosData(POSE_DEFEATED_LEVEL3);
	this.takeOffPanties();
	this.removeClothing();
	this.removeAllPettedInsertExceptToy();
	this.setAllBodySlotsFreeExceptToy();
	this.setSpankablePose(true);
	this.setHasTachiePubic(true);
	this.setHasTachieClitToyNaked(true);
	
	this.setTachieBoobs('normal');
	
	if(this.isWearingGlovesAndHat()) {
		this.setTachieTie('normal');
		this.setTachieRightArm('1');
		this.setTachieLeftArm('1');
	}
	else {
		this.setTachieRightArm('naked_1');
		this.setTachieLeftArm('naked_1');
	}
	
	if(this.isWearingPussyToy_PenisDildo()) {
		this.setTachieHolePussy('open');
		this.setTachiePubicExtension('open_');
		this.setTachieSemenWetExtension('open_');
		this.setTachieSemenCrotchExtension('open_');
	}
	
	this.setMaxTachieSemenAnalId(1);
	this.setMaxTachieSemenBellyId(1);
	this.setMaxTachieSemenBoobsId(1);
	this.setMaxTachieSemenButtId(1);
	this.setMaxTachieSemenCrotchId(1);
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieSemenLeftArmId(1);
	this.setMaxTachieSemenRightArmId(1);
	this.setMaxTachieSemenLeftLegId(1);
	this.setMaxTachieSemenRightLegId(1);
	this.setMaxTachieWetId(1);
	
	
	this.setBodyPartUnavailable(STOMACH_ID);
	this.setBodyPartUnavailable(RIGHT_HAND_ID);
	this.setBodyPartUnavailable(LEFT_HAND_ID);
	this.setBodyPartUnavailable(FEET_ID);
	this.setBodyPartUnavailable(THIGHS_ID);
	
	this.setMaxTachieStrayBoobsId(2,3,3);
	this.setMaxTachieStrayButtId(1,2,2);
	this.setMaxTachieStrayFaceId(1,2,2);
	this.setMaxTachieStrayGroinId(2,3,4);
	this.setTachieStrayBoobsExtension('normal_');
	
	this.setTachieBoobsHasHCup(true);
	this.setTachieBackAHasHCup(true);
	this.setTachieSemenBoobsHasHCup(true);
	this.setTachieStrayBoobsHasHCup(true);
	
	this.setTachieBoobsHasPCup(true);
	this.setTachieBackAHasPCup(true);
	this.setTachieCockBoobsHasPCup(true);
	this.setTachieSemenBellyHasPCup(true);
	this.setTachieSemenBoobsHasPCup(true);
	this.setTachieSemenCockBoobsHasPCup(true);
	this.setTachieStrayBoobsHasPCup(true);
	
	this.setTachieTieHasHCup(false);
	this.setTachieTieHasPCup(true);
	
	if(this.isWearingPussyToy_PenisDildo())
		this.setToyInserted_PussyToy_PenisDildo(true);
	if(this.isWearingAnalToy_AnalBeads())
		this.setToyInserted_AnalToy_AnalBeads(true);
	
	this.emoteDefeatedLevelThreePose();
	this.setAllowTachieUpdate(true);
};

Game_Actor.prototype.isInDefeatedLevel4Pose = function() {
	return this.poseName == POSE_DEFEATED_LEVEL4;
};
Game_Actor.prototype.setDefeatedLevel4Pose = function() {
	this.setAllowTachieUpdate(false);
	this.setPose(POSE_DEFEATED_LEVEL4);
	this.setSpriteBattlerPosData(POSE_DEFEATED_LEVEL4);
	this.takeOffPanties();
	this.removeClothing();
	this.removeAllPettedInsertExceptToy();
	this.setAllBodySlotsFreeExceptToy();
	this.setSpankablePose(true);
	this.setHasTachiePubic(false);
	this.setHasTachieClitToyNaked(false);
	
	if(this.isWearingGlovesAndHat()) {
		this.setTachieBody(1);
		this.setTachieTie(1);
	}
	else {
		this.setTachieBody('naked_1');
	}
	
	this.setTachieBoobs('1');
	
	
	this.setMaxTachieSemenAnalId(1);
	this.setMaxTachieSemenBackId(1);
	this.setMaxTachieSemenBoobsId(1);
	this.setMaxTachieSemenButtRightId(1);
	this.setMaxTachieSemenButtLeftId(1);
	this.setMaxTachieSemenCrotchId(1);
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieSemenLeftArmId(1);
	this.setMaxTachieSemenRightArmId(1);
	this.setMaxTachieSemenLeftLegId(1);
	this.setMaxTachieSemenRightLegId(1);
	this.setMaxTachieWetId(1);
	
	this.setBodyPartFree_PettingOnly(CLIT_ID);
	this.setBodyPartFree_PettingOnly(BOOBS_ID);
	this.setBodyPartFree_PettingOnly(NIPPLES_ID);
	this.setBodyPartUnavailable(STOMACH_ID);
	this.setBodyPartUnavailable(RIGHT_HAND_ID);
	this.setBodyPartUnavailable(LEFT_HAND_ID);
	this.setBodyPartUnavailable(FEET_ID);
	this.setBodyPartUnavailable(THIGHS_ID);
	
	this.setMaxTachieStrayBoobsId(1,2,3);
	this.setMaxTachieStrayButtId(2,3,3);
	this.setMaxTachieStrayFaceId(1,1,1);
	this.setMaxTachieStrayGroinId(1,1,1);
	
	this.setTachieBoobsHasHCup(true);
	this.setTachieStrayBoobsHasHCup(true);
	this.setTachieSemenBoobsHasHCup(true);
	this.setTachieBoobsHasPCup(true);
	this.setTachieStrayBoobsHasPCup(true);
	this.setTachieSemenBoobsHasPCup(true);
	
	this.emoteDefeatedLevelFourPose();
	this.setAllowTachieUpdate(true);
};

Game_Actor.prototype.isInDefeatedLevel5Pose = function() {
	return this.poseName == POSE_DEFEATED_LEVEL5;
};
Game_Actor.prototype.setDefeatedLevel5Pose = function() {
	this.setAllowTachieUpdate(false);
	this.setPose(POSE_DEFEATED_LEVEL5);
	this.setSpriteBattlerPosData(POSE_DEFEATED_LEVEL5);
	this.takeOffPanties();
	this.removeClothing();
	this.removeAllPettedInsertExceptToy();
	this.setAllBodySlotsFreeExceptToy();
	this.setSpankablePose(false);
	this.setHasTachiePubic(true);
	this.setHasTachieClitToyNaked(true);
	
	
	if(Karryn.isCensored())
		this.setTachieBody('1_cen');
	else
		this.setTachieBody('1');
	
	if(this.isWearingGlovesAndHat()) {
		this.setTachieLegs('normal_1');
	}
	else {
		this.setTachieLegs('normal_naked_1');
		this.resetTachieHat();
		this.resetTachieTie();
	}
	
	this.setTachieHead('normal');
	this.setTachieBoobs('normal');
	
	if(this.isWearingPussyToy_PenisDildo()) {
		this.setTachieHolePussy('open');
		this.setTachiePubicExtension('open_');
		this.setTachieStrayGroinExtension('open_');
		this.setTachieSemenWetExtension('open_');
		this.setTachieSemenCrotchExtension('open_');
	}
	
	this.setMaxTachieSemenAnalId(1);
	this.setMaxTachieSemenBellyId(1);
	this.setMaxTachieSemenBoobsId(1);
	this.setMaxTachieSemenButtId(1);
	this.setMaxTachieSemenCrotchId(1);
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieSemenLeftArmId(1);
	this.setMaxTachieSemenRightArmId(1);
	this.setMaxTachieSemenLeftLegId(1);
	this.setMaxTachieSemenRightLegId(1);
	this.setMaxTachieWetId(1);

	this.setTachieSemenFaceExtension('normal_');
	this.setTachieSemenBoobsExtension('normal_');
	this.setTachieSemenLeftArmExtension('normal_');
	this.setTachieSemenRightArmExtension('normal_');
	this.setTachieSemenWetExtension('normal_');
	this.setTachieHatExtension('normal_');
	this.setTachieHairExtension('normal_');

	this.setBodyPartFree_PettingOnly(CLIT_ID);
	this.setBodyPartFree_PettingOnly(NIPPLES_ID);
	this.setBodyPartFree_PettingOnly(STOMACH_ID);
	this.setBodyPartUnavailable(FEET_ID);
	this.setBodyPartUnavailable(THIGHS_ID);
	this.setBodyPartUnavailable(BUTT_ID);
	
	this.setMaxTachieStrayBoobsId(2,3,4);
	this.setMaxTachieStrayButtId(1,2,3);
	this.setMaxTachieStrayFaceId(1,2,2);
	this.setMaxTachieStrayGroinId(2,3,4);
	this.setTachieStrayFaceExtension('normal_');
	this.setTachieStrayBoobsExtension('normal_');
	
	this.setTachieBoobsHasHCup(true);
	this.setTachieBackAHasHCup(true);
	this.setTachieCockBoobsHasHCup(true);
	this.setTachieStrayBoobsHasHCup(true);
	this.setTachieSemenBoobsHasHCup(true);
	this.setTachieSemenCockBoobsHasHCup(true);
	
	this.setTachieBoobsHasPCup(true);
	this.setTachieBackAHasPCup(true);
	this.setTachieCockBoobsHasPCup(true);
	this.setTachieStrayBoobsHasPCup(true);
	this.setTachieSemenBoobsHasPCup(true);
	this.setTachieSemenCockBoobsHasPCup(true);
	
	if(this.isWearingPussyToy_PenisDildo())
		this.setToyInserted_PussyToy_PenisDildo(true);
	if(this.isWearingAnalToy_AnalBeads())
		this.setToyInserted_AnalToy_AnalBeads(true);
	
	this.emoteDefeatedLevelFivePose();
	this.setAllowTachieUpdate(true);
};

Game_Actor.prototype.isInDefeatedGuardPose = function() {
	return this.poseName == POSE_DEFEATED_GUARD;
};
Game_Actor.prototype.setDefeatedLevelGuardPose = function() {
	this.setAllowTachieUpdate(false);
	this.setPose(POSE_DEFEATED_GUARD);
	this.setSpriteBattlerPosData(POSE_DEFEATED_GUARD);
	this.takeOffPanties();
	this.removeClothing();
	this.removeAllPettedInsertExceptToy();
	this.setAllBodySlotsFreeExceptToy();
	this.setSpankablePose(false);
	this.setHasTachiePubic(true);
	this.setHasTachieClitToyNaked(false);
	
	if(this.isWearingWeddingClothing()) {
		if(Karryn.isCensored())
			this.setTachieBody('wedding_1_cen');
		else
			this.setTachieBody('wedding_1');
	}
	else if(!this.isWearingGlovesAndHat()) {
		if(Karryn.isCensored())
			this.setTachieBody('naked_1_cen');
		else
			this.setTachieBody('naked_1');
	}
	else {
		if(Karryn.isCensored())
			this.setTachieBody('1_cen');
		else
			this.setTachieBody(1);
		this.setHatType(HAT_TYPE_WARDEN_ID);
	}

	this.setMaxTachieSemenAnalId(1);
	this.setMaxTachieSemenBoobsId(1);
	this.setMaxTachieSemenBellyId(1);
	this.setMaxTachieSemenButtId(1);
	this.setMaxTachieSemenCrotchId(1);
	this.setMaxTachieSemenFaceId(1);
	this.setMaxTachieSemenLeftArmId(1);
	this.setMaxTachieSemenRightArmId(1);
	this.setMaxTachieWetId(1);
	
	this.setTachieBoobs('empty');
	this.setTachieSemenBoobsExtension('empty_');
	this.setTachieStrayBoobsExtension('empty_');

	if(this.isWearingPussyToy_PenisDildo()) {
		this.setTachieHolePussy('open');
		this.setTachiePubicExtension('open_');
		this.setTachieStrayGroinExtension('open_');
		this.setTachieSemenWetExtension('open_');
		this.setTachieSemenCrotchExtension('open_');
	}

	this.setBodyPartUnavailable(BUTT_ID);
	this.setBodyPartUnavailable(RIGHT_HAND_ID);
	this.setBodyPartUnavailable(LEFT_HAND_ID);
	this.setBodyPartUnavailable(FEET_ID);
	this.setBodyPartUnavailable(THIGHS_ID);
	
	this.setMaxTachieStrayBoobsId(2,3,3);
	this.setMaxTachieStrayButtId(1,3,4);
	this.setMaxTachieStrayFaceId(1,2,2);
	this.setMaxTachieStrayGroinId(2,3,4);
	
	this.setTachieBoobsHasHCup(true);
	this.setTachieFrontBHasHCup(true);
	this.setTachieSemenBoobsHasHCup(true);
	this.setTachieStrayBoobsHasHCup(true);
	this.setTachieBoobsHasPCup(true);
	this.setTachieFrontAHasPCup(true);
	this.setTachieFrontBHasPCup(true);
	this.setTachieSemenBoobsHasPCup(true);
	this.setTachieStrayBoobsHasPCup(true);
	this.setTachieCockBoobsHasPCup(true);
	this.setTachieCockMouthHasPCup(true);
	this.setTachieSemenCockBoobsHasPCup(true);
	
	if(this.isWearingPussyToy_PenisDildo())
		this.setToyInserted_PussyToy_PenisDildo(true);
	if(this.isWearingAnalToy_AnalBeads())
		this.setToyInserted_AnalToy_AnalBeads(true);
	
	this.emoteDefeatedGuardPose();
	this.setAllowTachieUpdate(true);
};

/////////
// Situations
//////////////

Game_Actor.prototype.setPreBattlePose = function() {
	if(this.hasHalberd()) {
		this.setStandbyPose();
	}	
	else {
		this.setUnarmedPose();
	}
};

//Karryn takes damage
Remtairy.Poses.Game_Actor_performDamage = Game_Actor.prototype.performDamage;
Game_Actor.prototype.performDamage = function() {
	Remtairy.Poses.Game_Actor_performDamage.call(this);
	let result = this.result();
	//Combat pose only
	if(this.isInCombatPose()) {
		//Graze result
		if(result.graze) {
			if(Karryn.hasEdict(EDICT_PRISON_EMBLEM_SCENARIO)) {
				this.gainDescensionRandomStatsExp($gameTroop.getAverageEnemyExperienceLvl(), 60, 25, 10);
			}
			else {
				this.gainStaminaExp(15, $gameTroop.getAverageEnemyExperienceLvl());
				this.gainAgilityExp(80, $gameTroop.getAverageEnemyExperienceLvl());
			}
			this.setEvadePose();
			this.passiveEvadePoseEffect();
			//this.setHp(this.hp - Math.round(this.agi/2));
		}
		//Hit result
		else {
			//Stamina damage
			if((result.staminaDamage > 0 || result.hpDamage > 0) && !this.hasNoStamina()) {
				if(Karryn.hasEdict(EDICT_PRISON_EMBLEM_SCENARIO)) {
					this.gainDescensionRandomStatsExp($gameTroop.getAverageEnemyExperienceLvl(), 25, 15, 0);
				}
				else {
					this.gainStaminaExp(25, $gameTroop.getAverageEnemyExperienceLvl());
					this.gainEnduranceExp(15, $gameTroop.getAverageEnemyExperienceLvl());
				}
				if(!result.skillTypeEnemyPetting && !result.skillTypeEnemySex && !result.skillTypeEnemyBukkake && !result.skillTypeActorOnani) {
					if(Karryn.hasEdict(EDICT_PRISON_EMBLEM_SCENARIO)) {
						this.gainDescensionRandomStatsExp($gameTroop.getAverageEnemyExperienceLvl(), 20, 10, 0);
					}
					else {
						this.gainStrengthExp(30, $gameTroop.getAverageEnemyExperienceLvl());
					}
					this.setDefendPose();
					this._playthroughRecordFullHitTakenCount++;
				}
			}
		}
		
	} //end combat pose
	//Sex or down pose
	else {
		
		if((result.staminaDamage > 0 || result.hpDamage > 0) && !this.hasNoStamina()) {
			if(Karryn.hasEdict(EDICT_PRISON_EMBLEM_SCENARIO)) {
				this.gainDescensionRandomStatsExp($gameTroop.getAverageEnemyExperienceLvl(), 20, 10, 0);
			}
			else {
				this.gainStrengthExp(15, $gameTroop.getAverageEnemyExperienceLvl());
				this.gainStaminaExp(15, $gameTroop.getAverageEnemyExperienceLvl());
			}
		}
		
		
	}
	
	//Critically hitted
	if(result.critical) {
		if(Karryn.hasEdict(EDICT_PRISON_EMBLEM_SCENARIO)) {
			this.gainDescensionRandomStatsExp($gameTroop.getAverageEnemyExperienceLvl(), 90, 30, 0);
		}
		else {
			this.gainEnduranceExp(120, $gameTroop.getAverageEnemyExperienceLvl());
		}
	}
};

//Karryn evades
Remtairy.Poses.Game_Actor_performEvasion = Game_Actor.prototype.performEvasion;
Game_Actor.prototype.performEvasion = function() {
    Remtairy.Poses.Game_Actor_performEvasion.call(this);
    
	if(this.isInCombatPose()) {
		if(Karryn.hasEdict(EDICT_PRISON_EMBLEM_SCENARIO)) {
			this.gainDescensionRandomStatsExp($gameTroop.getAverageEnemyExperienceLvl(), 70, 25, 10);
		}
		else {
			this.gainAgilityExp(90, $gameTroop.getAverageEnemyExperienceLvl());
			this.gainStaminaExp(15, $gameTroop.getAverageEnemyExperienceLvl());
		}
		this.setEvadePose();
		let clothingDmg = Math.min(Math.max(this.agi * 0.25, this.getClothingMaxDurability() * 0.01), this.getClothingMaxDurability() * 0.08)
		this.damageClothing(clothingDmg, true);
		this.passiveEvadePoseEffect();
		this.setHp(this.hp - Math.round((this.agi * 1.35 + this.realMaxStamina * 0.01) * this.evasionCostMultipler()));
		this._playthroughRecordAttackEvadedCount++;
	}
};


//Karryn is using skill
Remtairy.Poses.Game_Actor_performAction = Game_Actor.prototype.performAction;
Game_Actor.prototype.performAction = function(action) {
	Remtairy.Poses.Game_Actor_performAction.call(this, action);
	
	if ((action.isActorAttackSkill() || action.isActorKickSkill()) && this.isInCombatPose()) {
		this.changeStanceBySkill(action.item());
		
		if(action.isActorKickSkill()) {
			this.setKickPose(action.item());
		}
		else if(this.isUsingHalberd()) {
			this.setAttackPose();
			this.passiveAttackPoseEffect();			
		}	
	}
};

/////////
// Refresh
////////////

//Gets called at the end of every action
Game_Actor.prototype.refreshPose = function(onlyChangeIfDifferent) {
	if(this.isInSexPose()) {
		return;
	}
	
	if(this.isInJobPose()) {
		return;
	}
	
	if(this.isInMasturbationCouchPose()) {
		return;
	}
	
	if(this.justOrgasmed()) {
		if(onlyChangeIfDifferent) { 
			if(!this.isInDownOrgasmPose()) 
				this.setDownOrgasmPose();
			return;
		}
		else if(!onlyChangeIfDifferent) {
			this.setDownOrgasmPose();
			return;
		}
	}
	//In a down orgasm pose but state worn off
	else if(this.isInDownOrgasmPose() && !this.justOrgasmed()) {
		this.setStandbyPose(); 
		this.moanMasterManager();
	}

	if(this.hasNoStamina()) {
		let notComingFromCombatPose = !this.isInCombatPose();
		if(onlyChangeIfDifferent) {
			if(!this.isInDownStaminaPose()) 
				this.setDownStaminaPose(notComingFromCombatPose);
		}
		else if(!onlyChangeIfDifferent) {
			this.setDownStaminaPose(notComingFromCombatPose); 
		}
		
	}
	//In a down stamina pose but now has stamina
	else if(this.isInDownStaminaPose() && !this.hasNoStamina()) {
		this.setStandbyPose(); 
	}
	
	if(this.isStateAffected(STATE_FALLEN_ID)) {
		if(onlyChangeIfDifferent) {
			if(!this.isInDownFallDownPose()) 
				this.setDownFallDownPose();
		}
		else if(!onlyChangeIfDifferent) {
			this.setDownFallDownPose(); 
		}
	}
	//In a down fall down pose but doesn't have state anymore
	else if(this.isInDownFallDownPose()) {
		this.setStandbyPose();
	}
	
	if(this.isInCombatPose()) {
		if(this.hasNoStamina()) {
			this.setDownStaminaPose(false);
		}
		else if(this.isGuarding) {
			if(onlyChangeIfDifferent) { 
				if(!this.isInDefendPose()) 
					this.setDefendPose();
			}
			else if(!onlyChangeIfDifferent) {
				this.setDefendPose();
			}
		}
		else if(this.hasHalberd()) {
			if(onlyChangeIfDifferent) { 
				if(!this.isInStandbyPose()) 
					this.setStandbyPose();
			}
			else if(!onlyChangeIfDifferent) {
				this.setStandbyPose();
			}
		}	
		else {
			if(onlyChangeIfDifferent) { 
				if(!this.isInUnarmedPose()) 
					this.setUnarmedPose();
			}
			else if(!onlyChangeIfDifferent) {
				this.setUnarmedPose();
			}
		}
	}
	
};

/////////
// Preload Karryn Poses

DKTools.PreloadManager.preloadKarrynPoses = function() {
	if(false && DEBUG_MODE && ConfigManager.remCutinsSmootherLoading && !ConfigManager.remCutinsDisabled && ConfigManager.remCutinsFast) {
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_bs1.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_bs2.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_bs3.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_fg_sc_human_normal.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_fg_sc_human_pale.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_fg_sc_human_black.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_flaunt1.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ks1_e_goblin_normal.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ks1_e_goblin_dark.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ks1_e_human_normal.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ks1_e_human_pale.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ks1_e_human_black.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ks1_e_lizardman_normal.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ks1_e_lizardman_dark.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ks1_e_orc_normal.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ks1_e_orc_dark.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ks2_e_goblin_normal.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ks2_e_goblin_dark.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ks2_e_human_normal.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ks2_e_human_pale.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ks2_e_human_black.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ks2_e_lizardman_normal.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ks2_e_lizardman_dark.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ks2_e_orc_normal.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ks2_e_orc_dark.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ks1_k_goblin_normal.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ks1_k_goblin_dark.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ks1_k_human_normal.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ks1_k_human_pale.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ks1_k_human_black.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ks1_k_lizardman_normal.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ks1_k_lizardman_dark.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ks1_k_orc_normal.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ks1_k_orc_dark.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ks2_k_goblin_dark.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ks2_k_goblin_normal.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ks2_k_human_normal.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ks2_k_human_pale.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ks2_k_human_black.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ks2_k_lizardman_dark.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ks2_k_lizardman_normal.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ks2_k_orc_dark.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ks2_k_orc_normal.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_or1.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_or2.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_bb_goblin_normal.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_bb_goblin_dark.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_bb_human_normal.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_bb_human_pale.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_bb_human_black.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_bb_lizardman_normal.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_bb_lizardman_dark.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_bb_orc_normal.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_bb_orc_dark.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_bt_goblin_normal.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_bt_goblin_dark.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_bt_human_normal.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_bt_human_pale.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_bt_human_black.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_bt_orc_normal.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_bt_orc_dark.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_bt_lizardman_normal.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_bt_lizardman_dark.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_bt_werewolf.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_bt_yeti.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ns_goblin_normal.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ns_goblin_dark.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ns_human_normal.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ns_human_pale.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ns_human_black.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ns_orc_normal.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ns_orc_dark.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ns_lizardman_normal.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ns_lizardman_dark.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ns_werewolf.png', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ns_yeti.png', hue: 0, caching: true });
		
		if(Karryn.isCensored()) { 
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_goblin_dark_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_goblin_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_human_cut_black_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_human_cut_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_human_cut_pale_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_human_half_black_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_human_half_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_human_half_pale_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_human_skin_black_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_human_skin_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_human_skin_pale_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_lizardman_dark_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_lizardman_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_orc_dark_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_orc_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_slime_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_werewolf_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_goblin_dark_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_goblin_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_human_cut_black_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_human_cut_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_human_cut_pale_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_human_half_black_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_human_half_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_human_half_pale_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_human_skin_black_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_human_skin_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_human_skin_pale_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_lizardman_dark_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_lizardman_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_orc_dark_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_orc_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_slime_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_werewolf_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_yeti_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_m_goblin_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_m_goblin_dark_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_m_human_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_m_human_pale_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_m_human_black_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_m_lizardman_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_m_lizardman_dark_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_m_orc_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_m_orc_dark_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_m_werewolf_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_m_yeti_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_goblin_dark_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_goblin_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_human_cut_black_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_human_cut_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_human_cut_pale_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_human_half_black_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_human_half_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_human_half_pale_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_human_skin_black_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_human_skin_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_human_skin_pale_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_lizardman_dark_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_lizardman_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_orc_dark_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_orc_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_slime_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_werewolf_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_yeti_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_an_goblin_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_an_goblin_dark_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_an_human_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_an_human_pale_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_an_human_black_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_an_lizardman_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_an_lizardman_dark_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_an_orc_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_an_orc_dark_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_an_werewolf_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_an_yeti_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_goblin_dark_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_goblin_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_human_cut_black_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_human_cut_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_human_cut_pale_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_human_half_black_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_human_half_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_human_half_pale_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_human_skin_black_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_human_skin_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_human_skin_pale_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_lizardman_dark_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_lizardman_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_orc_dark_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_orc_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_slime_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_werewolf_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_yeti_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ct_goblin_dark_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ct_goblin_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ct_human_black_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ct_human_pale_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ct_human_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ct_orc_dark_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ct_orc_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ct_lizardman_dark_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ct_lizardman_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ct_werewolf_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ct_yeti_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ps_goblin_dark_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ps_goblin_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ps_human_black_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ps_human_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ps_human_pale_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ps_orc_dark_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ps_orc_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ps_lizardman_dark_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ps_lizardman_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ps_werewolf_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ps_yeti_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_toyA_1_in_human_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_toyA_1_in_human_pale_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_toyA_1_in_human_black_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_toyA_1_play_human_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_toyA_1_play_human_pale_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_toyA_1_play_human_black_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_toyC_1_in_human_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_toyC_1_in_human_pale_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_toyC_1_in_human_black_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_toyC_1_play_human_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_toyC_1_play_human_pale_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_toyC_1_play_human_black_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_toyP_1_in_human_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_toyP_1_in_human_pale_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_toyP_1_in_human_black_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_toyP_1_play_human_normal_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_toyP_1_play_human_black_cen.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_toyP_1_play_human_pale_cen.png', hue: 0, caching: true });
		}
		else {
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_goblin_dark.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_goblin_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_human_cut_black.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_human_cut_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_human_cut_pale.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_human_half_black.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_human_half_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_human_half_pale.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_human_skin_black.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_human_skin_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_human_skin_pale.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_lizardman_dark.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_lizardman_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_orc_dark.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_orc_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_slime.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_an_werewolf.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_goblin_dark.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_goblin_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_human_cut_black.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_human_cut_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_human_cut_pale.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_human_half_black.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_human_half_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_human_half_pale.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_human_skin_black.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_human_skin_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_human_skin_pale.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_lizardman_dark.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_lizardman_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_orc_dark.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_orc_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_slime.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_werewolf.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_bk_yeti.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_m_goblin_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_m_goblin_dark.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_m_human_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_m_human_pale.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_m_human_black.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_m_lizardman_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_m_lizardman_dark.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_m_orc_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_m_orc_dark.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_m_werewolf.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_m_yeti.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_goblin_dark.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_goblin_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_human_cut_black.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_human_cut_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_human_cut_pale.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_human_half_black.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_human_half_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_human_half_pale.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_human_skin_black.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_human_skin_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_human_skin_pale.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_lizardman_dark.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_lizardman_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_orc_dark.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_orc_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_slime.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_werewolf.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_ej_ps_yeti.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_an_goblin_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_an_goblin_dark.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_an_human_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_an_human_black.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_an_human_pale.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_an_orc_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_an_orc_dark.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_an_lizardman_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_an_lizardman_dark.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_an_werewolf.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_an_yeti.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_goblin_dark.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_goblin_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_human_cut_black.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_human_cut_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_human_cut_pale.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_human_half_black.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_human_half_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_human_half_pale.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_human_skin_black.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_human_skin_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_human_skin_pale.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_lizardman_dark.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_lizardman_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_orc_dark.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_orc_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_slime.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_werewolf.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ck_yeti.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ct_goblin_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ct_goblin_dark.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ct_human_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ct_human_pale.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ct_human_black.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ct_orc_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ct_orc_dark.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ct_lizardman_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ct_lizardman_dark.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ct_werewolf.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ct_yeti.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ps_goblin_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ps_goblin_dark.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ps_human_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ps_human_pale.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ps_human_black.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ps_orc_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ps_orc_dark.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ps_lizardman_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ps_lizardman_dark.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ps_werewolf.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_pt_ps_yeti.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_toyA_1_in_human_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_toyA_1_in_human_pale.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_toyA_1_in_human_black.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_toyA_1_play_human_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_toyA_1_play_human_black.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_toyA_1_play_human_pale.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_toyC_1_in_human_black.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_toyC_1_in_human_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_toyC_1_in_human_pale.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_toyC_1_play_human_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_toyC_1_play_human_pale.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_toyC_1_play_human_black.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_toyP_1_in_human_black.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_toyP_1_in_human_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_toyP_1_in_human_pale.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_toyP_1_play_human_black.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_toyP_1_play_human_normal.png', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/pictures/cutin_toyP_1_play_human_pale.png', hue: 0, caching: true });
		}
		
		
	}

	
	if(ConfigManager.remSmootherCGLoading) {
		DKTools.PreloadManager.preloadImage({ path: 'img/chatface/', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/karryn/attack/', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/karryn/defend/', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/karryn/down_falldown/', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/karryn/down_stamina/', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/karryn/evade/', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/karryn/kick/', hue: 0, caching: true });
		//DKTools.PreloadManager.preloadImage({ path: 'img/karryn/map/', hue: 0, caching: true });
		//DKTools.PreloadManager.preloadImage({ path: 'img/karryn/receptionist/', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/karryn/standby/', hue: 0, caching: true });
		DKTools.PreloadManager.preloadImage({ path: 'img/karryn/unarmed/', hue: 0, caching: true });
		
		if(DEBUG_MODE) {
			DKTools.PreloadManager.preloadImage({ path: 'img/karryn/bj_kneeling/', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/karryn/defeated_guard/', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/karryn/defeated_level1/', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/karryn/defeated_level2/', hue: 0, caching: true });
			
			DKTools.PreloadManager.preloadImage({ path: 'img/karryn/down_org/', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/karryn/footj/', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/karryn/goblin_cl/', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/karryn/guard_gb/', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/karryn/hj_standing/', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/karryn/kick_counter/', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/karryn/mas_couch/', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/karryn/mas_inbattle/', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/karryn/orc_paizuri/', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/karryn/paizuri_laying/', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/karryn/rimming/', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/karryn/slime_piledriver/', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/karryn/thug_gb/', hue: 0, caching: true });
			DKTools.PreloadManager.preloadImage({ path: 'img/karryn/waitress_table/', hue: 0, caching: true });
			
			
			if(!KARRYN_PRISON_GAME_IS_DEMO) {
				DKTools.PreloadManager.preloadImage({ path: 'img/karryn/cowgirl_karryn/', hue: 0, caching: true });
				DKTools.PreloadManager.preloadImage({ path: 'img/karryn/cowgirl_reverse/', hue: 0, caching: true });
				DKTools.PreloadManager.preloadImage({ path: 'img/karryn/cowgirl_lizardman/', hue: 0, caching: true });
				DKTools.PreloadManager.preloadImage({ path: 'img/karryn/defeated_level3/', hue: 0, caching: true });
				DKTools.PreloadManager.preloadImage({ path: 'img/karryn/defeated_level4/', hue: 0, caching: true });
				DKTools.PreloadManager.preloadImage({ path: 'img/karryn/defeated_level5/', hue: 0, caching: true });
				DKTools.PreloadManager.preloadImage({ path: 'img/karryn/werewolf_back/', hue: 0, caching: true });
				DKTools.PreloadManager.preloadImage({ path: 'img/karryn/yeti_carry/', hue: 0, caching: true });
				DKTools.PreloadManager.preloadImage({ path: 'img/karryn/yeti_paizuri/', hue: 0, caching: true });
				DKTools.PreloadManager.preloadImage({ path: 'img/karryn/stripper_mouth/', hue: 0, caching: true });
				DKTools.PreloadManager.preloadImage({ path: 'img/karryn/stripper_boobs/', hue: 0, caching: true });
				DKTools.PreloadManager.preloadImage({ path: 'img/karryn/stripper_pussy/', hue: 0, caching: true });
				DKTools.PreloadManager.preloadImage({ path: 'img/karryn/stripper_butt/', hue: 0, caching: true });
				DKTools.PreloadManager.preloadImage({ path: 'img/karryn/stripper_vip/', hue: 0, caching: true });
				DKTools.PreloadManager.preloadImage({ path: 'img/karryn/toilet_sit_left/', hue: 0, caching: true });
				DKTools.PreloadManager.preloadImage({ path: 'img/karryn/toilet_sit_right/', hue: 0, caching: true });
				DKTools.PreloadManager.preloadImage({ path: 'img/karryn/toilet_sitting/', hue: 0, caching: true });
				DKTools.PreloadManager.preloadImage({ path: 'img/karryn/toilet_stand_left/', hue: 0, caching: true });
				DKTools.PreloadManager.preloadImage({ path: 'img/karryn/toilet_stand_right/', hue: 0, caching: true });
				
				if(DLC_GYM) {
					DKTools.PreloadManager.preloadImage({ path: 'img/karryn/gym_standby/', hue: 0, caching: true });
					DKTools.PreloadManager.preloadImage({ path: 'img/karryn/gym_fera/', hue: 0, caching: true });
					DKTools.PreloadManager.preloadImage({ path: 'img/karryn/gym_kisu/', hue: 0, caching: true });
					DKTools.PreloadManager.preloadImage({ path: 'img/karryn/gym_paizuri/', hue: 0, caching: true });
					DKTools.PreloadManager.preloadImage({ path: 'img/karryn/gym_tekoki/', hue: 0, caching: true });
					DKTools.PreloadManager.preloadImage({ path: 'img/karryn/gym_rinkan/', hue: 0, caching: true });
				}
			}
		}
	
	}
};

