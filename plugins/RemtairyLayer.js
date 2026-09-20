var Remtairy = Remtairy || {};
Remtairy.Layer = Remtairy.Layer || {};

//=============================================================================
 /*:
 * @plugindesc Layer
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================

const LAYER_TYPE_HOPPE = 2; //hoppe_
const LAYER_TYPE_SWEAT = 3; //sweat_
const LAYER_TYPE_MOUTH = 4; //mouth_
const LAYER_TYPE_EYES = 5; //eyes_
const LAYER_TYPE_EYEBROWS = 6; //eyebrows_
const LAYER_TYPE_HAIR = 8; //hair_
const LAYER_TYPE_HAT = 9; //hat_
const LAYER_TYPE_GLASSES = 10; //glasses_
const LAYER_TYPE_TIE = 11; //tie_
const LAYER_TYPE_FACE = 12; //face_
const LAYER_TYPE_HIPS = 13; //hips_

const LAYER_TYPE_BODY = 20; //body_
const LAYER_TYPE_HEAD = 21; //head_
const LAYER_TYPE_BOOBS = 22; //boobs_
const LAYER_TYPE_LEFT_BOOB = 23; //leftboob_
const LAYER_TYPE_RIGHT_BOOB = 24; //rightboob_
const LAYER_TYPE_ERECT_BOOBS = 25; //boobs_bokki
const LAYER_TYPE_BUTT = 26; //butt_
const LAYER_TYPE_CLOTHES = 27; //clothes_
const LAYER_TYPE_SKIRT = 28; //skirt_
const LAYER_TYPE_LEGS = 29; //legs_

const LAYER_TYPE_LEFT_ARM = 30; //leftarm_
const LAYER_TYPE_RIGHT_ARM = 31; //rightarm_
const LAYER_TYPE_WEAPON = 32; //weapon_
const LAYER_TYPE_PANTIES = 33; //panties_
const LAYER_TYPE_PUBIC = 34; //pubic_
const LAYER_TYPE_HOLE_PUSSY = 35; //ana_manko_
const LAYER_TYPE_HOLE_ANUS = 36; //ana_anaru_
const LAYER_TYPE_SPANKMARK_LEFTBUTT = 37; //spank_leftbutt_
const LAYER_TYPE_SPANKMARK_RIGHTBUTT = 38; //spank_rightbutt_

const LAYER_TYPE_BACK_A = 40; //backA_
const LAYER_TYPE_BACK_B = 41; //backB_
const LAYER_TYPE_BACK_C = 42; //backC_
const LAYER_TYPE_BACK_D = 43; //backD_
const LAYER_TYPE_BACK_E = 44; //backE_

const LAYER_TYPE_FRONT_A = 50; //frontA_
const LAYER_TYPE_FRONT_B = 51; //frontB_
const LAYER_TYPE_FRONT_C = 52; //frontC_
const LAYER_TYPE_FRONT_D = 53; //frontD_
const LAYER_TYPE_FRONT_E = 54; //frontE_
const LAYER_TYPE_FRONT_F = 55; //frontF_
const LAYER_TYPE_FRONT_G = 56; //frontG_
const LAYER_TYPE_FRONT_H = 57; //frontH_
const LAYER_TYPE_FRONT_I = 58; //frontI_

const LAYER_TYPE_COCK_NORMAL = 60; //chin_
const LAYER_TYPE_COCK_MOUTH = 61; //chin_mouth_
const LAYER_TYPE_COCK_BOOBS = 62; //chin_boobs_
const LAYER_TYPE_COCK_RIGHT_ARM = 63; //chin_rightarm_
const LAYER_TYPE_COCK_LEFT_ARM = 64; //chin_leftarm_
const LAYER_TYPE_COCK_FEET = 65; //chin_feet_
const LAYER_TYPE_COCK_PUSSY = 66; //chin_manko_
const LAYER_TYPE_COCK_ANAL = 67; //chin_anaru_

const LAYER_TYPE_TOY_CLIT = 70; //toyC_
const LAYER_TYPE_TOY_PUSSY = 71; //toyP_
const LAYER_TYPE_TOY_ANAL = 72; //toyA_

const LAYER_TYPE_WET = 100; //zaa_wet
const LAYER_TYPE_WET_PANTIES = 101; //zaa_wet_panties_
const LAYER_TYPE_WET_PUSSY_TOY = 105; //zaa_toyP_
const LAYER_TYPE_DROOL_MOUTH = 102; //yodare_mouth_
const LAYER_TYPE_DROOL_FINGERS = 103; //yodare_finger_
const LAYER_TYPE_DROOL_NIPPLES = 104; //yodare_chikubi_

const LAYER_TYPE_SEMEN_BACK = 110; //zaa_back_
const LAYER_TYPE_SEMEN_BELLY = 111; //zaa_belly_
const LAYER_TYPE_SEMEN_BOOBS = 112; //zaa_boobs_
const LAYER_TYPE_SEMEN_LEFT_BOOB = 113; //zaa_leftboob_
const LAYER_TYPE_SEMEN_RIGHT_BOOB = 114; //zaa_rightboob_
const LAYER_TYPE_SEMEN_BUTT = 115; //zaa_butt_
const LAYER_TYPE_SEMEN_BUTT_UPPER_RIGHT = 116; //zaa_butt_right_ue_
const LAYER_TYPE_SEMEN_BUTT_UPPER_LEFT = 117; //zaa_butt_left_ue_
const LAYER_TYPE_SEMEN_BUTT_BOTTOM_RIGHT = 118; //zaa_butt_right_sita_
const LAYER_TYPE_SEMEN_BUTT_BOTTOM_LEFT = 119; //zaa_butt_left_sita_
const LAYER_TYPE_SEMEN_BUTT_RIGHT = 120; //zaa_rightbutt_
const LAYER_TYPE_SEMEN_BUTT_LEFT = 121; //zaa_leftbutt_

const LAYER_TYPE_SEMEN_PUSSY = 130; //zaa_crotch_
const LAYER_TYPE_SEMEN_PUSSY_PANTIES = 131; //zaa_crotch_panties_
const LAYER_TYPE_SEMEN_ANAL = 132; //zaa_anaru_
const LAYER_TYPE_SEMEN_ANAL_PANTIES = 139; //zaa_anaru_panties_
const LAYER_TYPE_SEMEN_RIGHT_ARM = 133; //zaa_rightarm_
const LAYER_TYPE_SEMEN_LEFT_ARM = 134; //zaa_leftarm_
const LAYER_TYPE_SEMEN_RIGHT_LEG = 135; //zaa_rightleg_
const LAYER_TYPE_SEMEN_LEFT_LEG = 136; //zaa_leftleg_
const LAYER_TYPE_SEMEN_FACE = 137; //zaa_face_
const LAYER_TYPE_SEMEN_MOUTH = 138; //zaa_mouth_

const LAYER_TYPE_SEMEN_COCK_MOUTH = 140; //zaa_chin_mouth_
const LAYER_TYPE_SEMEN_COCK_BOOBS = 141; //zaa_chin_boobs_
const LAYER_TYPE_SEMEN_COCK_RIGHT_ARM = 142; //zaa_chin_rightarm_
const LAYER_TYPE_SEMEN_COCK_LEFT_ARM = 143; //zaa_chin_leftarm_
const LAYER_TYPE_SEMEN_COCK_PUSSY = 144; //zaa_chin_manko_
const LAYER_TYPE_SEMEN_COCK_ANAL = 145; //zaa_chin_anaru_
const LAYER_TYPE_SEMEN_COCK_FEET = 146; //zaa_chin_feet_
const LAYER_TYPE_SEMEN_COCK_NORMAL = 147; //zaa_chin_

const LAYER_TYPE_SEMEN_FRONT_A = 150; //zaa_frontA_
const LAYER_TYPE_SEMEN_FRONT_B = 151; //zaa_frontB_
const LAYER_TYPE_SEMEN_FRONT_C = 152; //zaa_frontC_
const LAYER_TYPE_SEMEN_FRONT_D = 153; //zaa_frontD_
const LAYER_TYPE_SEMEN_FRONT_E = 154; //zaa_frontE_

const LAYER_TYPE_SEMEN_HOLE_LEFT = 155; //zaa_hole_left_
const LAYER_TYPE_SEMEN_HOLE_RIGHT = 156; //zaa_hole_right_
const LAYER_TYPE_SEMEN_TOILET_SEAT = 157; //zaa_toiletseat_crotch_
const LAYER_TYPE_WET_TOILET_SEAT = 158; //zaa_toiletseat_wet_
const LAYER_TYPE_GLORY_SEMEN_WALL_LEFT = 159; //zaa_glory_leftwall_
const LAYER_TYPE_GLORY_SEMEN_WALL_RIGHT = 160; //zaa_glory_rightwall_
const LAYER_TYPE_GLORY_SEMEN_HOLE_LEFT = 161; //zaa_glory_lefthole_
const LAYER_TYPE_GLORY_SEMEN_HOLE_RIGHT = 162; //zaa_glory_righthole_
const LAYER_TYPE_GLORY_SEMEN_TOILET_LEFT = 163; //zaa_glory_lefttoilet_
const LAYER_TYPE_GLORY_SEMEN_TOILET_RIGHT = 164; //zaa_glory_righttoilet_

const LAYER_TYPE_MUG = 200; //mug_
const LAYER_TYPE_STRAW = 201; //straw_
const LAYER_TYPE_VISITOR_A = 202; //visitorA_
const LAYER_TYPE_VISITOR_B = 203; //visitorB_
const LAYER_TYPE_VISITOR_C = 204; //visitorC_
const LAYER_TYPE_VISITOR_D = 205; //visitorD_
const LAYER_TYPE_SEMEN_DESK = 206; //zaa_desk_
const LAYER_TYPE_LEFT_HOLE = 207; //hole_left_
const LAYER_TYPE_RIGHT_HOLE = 208; //hole_right_
const LAYER_TYPE_SEMEN_FLOOR = 209; //zaa_floor_

const LAYER_TYPE_POLE = 300; //pole_
const LAYER_TYPE_CONDOM_BELT = 301; //kon_belt_
const LAYER_TYPE_CONDOM_BRA = 302; //kon_bra_
const LAYER_TYPE_CONDOM_CHIKUBI = 303; //kon_chikubi_
const LAYER_TYPE_CONDOM_HEAD = 304; //kon_head_
const LAYER_TYPE_CONDOM_LEG = 305; //kon_leg_
const LAYER_TYPE_CONDOM_PANTSU = 306; //kon_pantsu_
const LAYER_TYPE_CONDOM_BUTT = 307; //kon_butt_
const LAYER_TYPE_CONDOM_FLOOR = 308; //kon_floor_

const LAYER_TYPE_HOOD = 400; //hood_
const LAYER_TYPE_CAP = 401; //cap_

const LAYER_TYPE_STRAY_FACE = 500; //stray_face_
const LAYER_TYPE_STRAY_BOOBS = 501; //stray_boobs_
const LAYER_TYPE_STRAY_LEFT_BOOB = 502; //stray_leftboob_
const LAYER_TYPE_STRAY_RIGHT_BOOB = 503; //stray_rightboob_
const LAYER_TYPE_STRAY_GROIN = 504; //stray_groin_
const LAYER_TYPE_STRAY_BUTT = 505; //stray_butt_

Game_Actor.prototype.getCustomTachieLayerLoadout = function() {
	let pose = this.poseName;
	
	if(this.modding_isCustomTachieLayerPose(pose)) {
		return this.modding_getLayerLoadout(pose);
	}
	
	if(this.isInDefeatedPose()) {
		switch(pose) {
		case POSE_DEFEATED_LEVEL1:
			return this.getLayerLoadout_DefeatedLv1();
		case POSE_DEFEATED_LEVEL2:
			return this.getLayerLoadout_DefeatedLv2();
		case POSE_DEFEATED_LEVEL3:
			return this.getLayerLoadout_DefeatedLv3();
		case POSE_DEFEATED_LEVEL4:
			return this.getLayerLoadout_DefeatedLv4();
		case POSE_DEFEATED_LEVEL5:
			return this.getLayerLoadout_DefeatedLv5();
		case POSE_DEFEATED_GUARD:
			return this.getLayerLoadout_DefeatedGuard();
		}
	}
	else if(this.isInJobPose()) {
		switch(pose) {
		case POSE_RECEPTIONIST:
			return this.getLayerLoadout_Receptionist();
		case POSE_WAITRESS_SEX:
			return this.getLayerLoadout_WaitressSex();
		case POSE_TOILET_SITTING:
			return this.getLayerLoadout_ToiletSitting();
		case POSE_TOILET_SIT_LEFT:
			return this.getLayerLoadout_ToiletSitLeft();
		case POSE_TOILET_SIT_RIGHT:
			return this.getLayerLoadout_ToiletSitRight();
		case POSE_TOILET_STAND_LEFT:
			return this.getLayerLoadout_ToiletStandLeft();
		case POSE_TOILET_STAND_RIGHT:
			return this.getLayerLoadout_ToiletStandRight();
		
		case POSE_STRIPPER_MOUTH:
			return this.getLayerLoadout_StripperMouth();
		case POSE_STRIPPER_BOOBS:
			return this.getLayerLoadout_StripperBoobs();
		case POSE_STRIPPER_PUSSY:
			return this.getLayerLoadout_StripperPussy();
		case POSE_STRIPPER_BUTT:
			return this.getLayerLoadout_StripperButt();
		case POSE_STRIPPER_VIP:
			return this.getLayerLoadout_StripperVIP();
		case POSE_STRIPPER_INTERMISSION:
			return [LAYER_TYPE_CONDOM_FLOOR];
		
		case POSE_TRAINER_TEKOKI:
			return this.getLayerLoadout_TrainerTekoki();
		case POSE_TRAINER_KISU:
			return this.getLayerLoadout_TrainerKisu();
		case POSE_TRAINER_FERA:
			return this.getLayerLoadout_TrainerFera();
		case POSE_TRAINER_PAIZURI:
			return this.getLayerLoadout_TrainerPaizuri();
		case POSE_TRAINER_RINKAN:
			return this.getLayerLoadout_TrainerRinkan();
		case POSE_TRAINER_STANDBY:
			return [LAYER_TYPE_BODY];
		}
	}
	else if(this.isInCombatPose()) {
		switch(pose) {
		case POSE_ATTACK:
			return this.getLayerLoadout_Attack();
		case POSE_DEFEND:
			return this.getLayerLoadout_Defend();
		case POSE_EVADE:
			return this.getLayerLoadout_Evade();
		case POSE_KICK:
			return this.getLayerLoadout_Kick();
		case POSE_STANDBY:
			return this.getLayerLoadout_Standby();
		case POSE_UNARMED:
			return this.getLayerLoadout_Unarmed();
		}
	}
	
	switch(pose) {
	case POSE_DOWN_ORGASM:
		return this.getLayerLoadout_DownOrgasm();
	case POSE_DOWN_FALLDOWN:
		return this.getLayerLoadout_DownFalldown();
	case POSE_DOWN_STAMINA:
		return this.getLayerLoadout_DownStamina();
	case POSE_BJ_KNEELING:
		return this.getLayerLoadout_BjKneeling();
	case POSE_HJ_STANDING:
		return this.getLayerLoadout_HjStanding();
	case POSE_KICKCOUNTER:
		return this.getLayerLoadout_KickCounter();
	case POSE_GUARDGANGBANG:
		return this.getLayerLoadout_GuardGangbang();
	case POSE_GOBLINCUNNILINGUS:
		return this.getLayerLoadout_GoblinCunnilingus();
	case POSE_THUGGANGBANG:
		return this.getLayerLoadout_ThugGangbang();
	case POSE_REVERSE_COWGIRL:
		return this.getLayerLoadout_ReverseCowgirl();
	case POSE_KARRYN_COWGIRL:
		return this.getLayerLoadout_KarrynCowgirl();
	case POSE_LIZARDMAN_COWGIRL:
		return this.getLayerLoadout_LizardmanCowgirl();
	case POSE_ORC_PAIZURI:
		return this.getLayerLoadout_OrcPaizuri();
	case POSE_PAIZURI_LAYING:
		return this.getLayerLoadout_PaizuriLaying();
	case POSE_WEREWOLF_BACK:
		return this.getLayerLoadout_WerewolfBack();	
	case POSE_YETI_PAIZURI:
		return this.getLayerLoadout_YetiPaizuri();	
	case POSE_YETI_CARRY:
		return this.getLayerLoadout_YetiCarry();
	case POSE_FOOTJOB:
		return this.getLayerLoadout_Footjob();	
	case POSE_RIMJOB:
		return this.getLayerLoadout_Rimjob();
	case POSE_SLIME_PILEDRIVER_ANAL:
		return this.getLayerLoadout_SlimePiledriver();		
	case POSE_MASTURBATE_INBATTLE:
		return this.getLayerLoadout_MasturbateInBattle();
	case POSE_MASTURBATE_COUCH:
		return this.getLayerLoadout_MasturbateCouch();
	case POSE_MAP:	
		return this.getLayerLoadout_Map();
		
		
	}
	
	return this.getLayerLoadout_Default();
};

//Chatface
Game_Actor.prototype.getCustomTachieLayerLoadout_Chatface = function() {
	let layerArray = [];
	let tempArray = [];	
	let chatface = this.poseName;
	let tachieBody = this.tachieBody;
	let isWardenBody = this.tachieBodyExtension === 'warden_';
	let isSecretaryBody = this.tachieBodyExtension === 'secretary_';
	
	let mergedLeftArmArray = false;
	let leftArmArray = [ LAYER_TYPE_LEFT_ARM ];
	
	let mergedRightArmArray = false;
	let rightArmArray = [ LAYER_TYPE_RIGHT_ARM ];
	
	let mergedSemenArmsArray = false;
	let semenArmsArray = [ LAYER_TYPE_SEMEN_LEFT_ARM, LAYER_TYPE_SEMEN_RIGHT_ARM ];
	
	if(chatface === CHAT_FOLDER_KARRYN) {
		if(!mergedRightArmArray && isSecretaryBody && tachieBody === '2') {
			layerArray = layerArray.concat(rightArmArray);
			mergedRightArmArray = true;
		}
		
		tempArray = [
			LAYER_TYPE_WEAPON,
			LAYER_TYPE_HAT,
			LAYER_TYPE_GLASSES,
		
			LAYER_TYPE_SEMEN_FACE
		]
		layerArray = layerArray.concat(tempArray);

		if(!mergedSemenArmsArray && tachieBody === '3') {
			layerArray = layerArray.concat(semenArmsArray);
			mergedSemenArmsArray = true;
		}
		
		if(!mergedLeftArmArray && isWardenBody && tachieBody === '5') {
			layerArray = layerArray.concat(leftArmArray);
			mergedLeftArmArray = true;
		}

		tempArray = [
			LAYER_TYPE_SEMEN_BOOBS,
			LAYER_TYPE_STRAY_BOOBS,
			LAYER_TYPE_BOOBS
		]
		layerArray = layerArray.concat(tempArray);

		if(!mergedSemenArmsArray) {
			layerArray = layerArray.concat(semenArmsArray);
			mergedSemenArmsArray = true;
		}

		if(!mergedLeftArmArray) {
			layerArray = layerArray.concat(leftArmArray);
			mergedLeftArmArray = true;
		}
		
		tempArray = [
			LAYER_TYPE_SEMEN_BELLY,
			LAYER_TYPE_SEMEN_BUTT,
		
			LAYER_TYPE_STRAY_FACE,
			LAYER_TYPE_STRAY_GROIN,
			LAYER_TYPE_STRAY_BUTT,
			
			LAYER_TYPE_FACE,
			LAYER_TYPE_HAIR,
			
			LAYER_TYPE_SWEAT,
			LAYER_TYPE_HOPPE

		]
		layerArray = layerArray.concat(tempArray);
		
		tempArray = [	
			LAYER_TYPE_HIPS,

			LAYER_TYPE_PANTIES,
			LAYER_TYPE_BODY
		]
		layerArray = layerArray.concat(tempArray);
		
		if(!mergedRightArmArray) {
			layerArray = layerArray.concat(rightArmArray);
			mergedRightArmArray = true;
		}
		
		tempArray = [	
			LAYER_TYPE_FRONT_B
		]
		layerArray = layerArray.concat(tempArray);
	} //karryn end
	else if(chatface === CHAT_FOLDER_ARON) {
		layerArray = [
			LAYER_TYPE_HOPPE,
			LAYER_TYPE_SWEAT,
			LAYER_TYPE_FACE,
			LAYER_TYPE_BODY
		]
	}
	else {
		layerArray = [
			LAYER_TYPE_HAT,
			LAYER_TYPE_FACE,
			LAYER_TYPE_HOPPE,
			LAYER_TYPE_SWEAT,
			LAYER_TYPE_BODY
		]
	}
	
	return layerArray;
};

Game_Actor.prototype.getLayerLoadout_Default = function() {
	let actor = this;
	let layerArray = [];
	let tempArray = [];	
	
	let frontArray = [ 
		LAYER_TYPE_SEMEN_FRONT_A,
		LAYER_TYPE_FRONT_A,
		LAYER_TYPE_SEMEN_FRONT_B,
		LAYER_TYPE_FRONT_B,
		LAYER_TYPE_SEMEN_FRONT_C,
		LAYER_TYPE_FRONT_C,
		LAYER_TYPE_SEMEN_FRONT_D,
		LAYER_TYPE_FRONT_D,
		LAYER_TYPE_SEMEN_FRONT_E, 
		LAYER_TYPE_FRONT_E
	];
	
	if(actor.tachieFrontInFrontOfFace()) {
		if(actor.tachieSemenRightArmInFrontOfFront()) 
			layerArray.push(LAYER_TYPE_SEMEN_RIGHT_ARM);
		if(actor.tachieSemenLeftArmInFrontOfFront()) 
			layerArray.push(LAYER_TYPE_SEMEN_LEFT_ARM);
		layerArray = layerArray.concat(frontArray);
	}
	
	if(actor.tachieCockMouthInFrontOfFace()) {
		layerArray.push(LAYER_TYPE_SEMEN_COCK_MOUTH);
		layerArray.push(LAYER_TYPE_COCK_MOUTH);
	}
	
	layerArray.push(LAYER_TYPE_SEMEN_MOUTH);
	layerArray.push(LAYER_TYPE_SEMEN_FACE);
	
	layerArray.push(LAYER_TYPE_GLASSES);
	
	layerArray.push(LAYER_TYPE_FACE);
	
	layerArray.push(LAYER_TYPE_EYEBROWS);
	layerArray.push(LAYER_TYPE_EYES);
	layerArray.push(LAYER_TYPE_MOUTH);
	layerArray.push(LAYER_TYPE_HAIR);
	layerArray.push(LAYER_TYPE_SWEAT);
	layerArray.push(LAYER_TYPE_HOPPE);
	
	if(!actor.tachieFrontInFrontOfFace()) {
		if(actor.tachieSemenRightArmInFrontOfFront()) 
			layerArray.push(LAYER_TYPE_SEMEN_RIGHT_ARM);
		if(actor.tachieSemenLeftArmInFrontOfFront()) 
			layerArray.push(LAYER_TYPE_SEMEN_LEFT_ARM);
		layerArray = layerArray.concat(frontArray);
	}
	
	if(actor.tachieAnalToyInFrontOfEverything())
		layerArray.push(LAYER_TYPE_TOY_ANAL);
	
	if(actor.tachieToysInFrontOfEverything() && !actor.tachieToysInBehindOfEverything()) {
		if(actor.tachieClitToyInFrontOfMainToys()) 
			layerArray.push(LAYER_TYPE_TOY_CLIT);
		if(actor.tachiePussyToyInFrontOfAnalToy()) 
			layerArray.push(LAYER_TYPE_TOY_PUSSY);
		if(!actor.tachieAnalToyInFrontOfEverything())
			layerArray.push(LAYER_TYPE_TOY_ANAL);
		if(!actor.tachiePussyToyInFrontOfAnalToy()) 
			layerArray.push(LAYER_TYPE_TOY_PUSSY);
		if(!actor.tachieClitToyInFrontOfMainToys()) 
			layerArray.push(LAYER_TYPE_TOY_CLIT);
	}
	
	if(actor.tachieWeaponInFrontOfBody() && actor.tachieWeaponInFrontOfBoobs()  && !actor.tachieWeaponBehindEverything())
		layerArray.push(LAYER_TYPE_WEAPON);
	
	layerArray.push(LAYER_TYPE_SEMEN_BUTT);
	layerArray.push(LAYER_TYPE_SEMEN_BACK);
	layerArray.push(LAYER_TYPE_SEMEN_LEFT_LEG);
	layerArray.push(LAYER_TYPE_SEMEN_RIGHT_LEG);
	
	layerArray.push(LAYER_TYPE_SEMEN_COCK_LEFT_ARM);
	layerArray.push(LAYER_TYPE_SEMEN_COCK_RIGHT_ARM);
	
	if(!actor.tachieSemenLeftArmInFrontOfFront()) 
		layerArray.push(LAYER_TYPE_SEMEN_LEFT_ARM);
	if(!actor.tachieSemenRightArmInFrontOfFront()) 
		layerArray.push(LAYER_TYPE_SEMEN_RIGHT_ARM);
	
	if(actor.tachieHatInFrontOfBody()) 
		layerArray.push(LAYER_TYPE_HAT);
	
	if(actor.tachieHeadInFrontOfBody()) 				
		layerArray.push(LAYER_TYPE_HEAD);
	
	if(!actor.tachieRightArmInFrontOfLeftArm() && actor.tachieRightArmInFrontOfBody() && actor.tachieRightArmInFrontOfBoobs()) {
		layerArray.push(LAYER_TYPE_COCK_RIGHT_ARM);
		layerArray.push(LAYER_TYPE_RIGHT_ARM);
	}
	if(actor.tachieLeftArmInFrontOfBody() && actor.tachieLeftArmInFrontOfBoobs()) {
		layerArray.push(LAYER_TYPE_COCK_LEFT_ARM);
		layerArray.push(LAYER_TYPE_LEFT_ARM);
	}
	if(actor.tachieRightArmInFrontOfLeftArm() && actor.tachieRightArmInFrontOfBody() && actor.tachieRightArmInFrontOfBoobs()) {
		layerArray.push(LAYER_TYPE_COCK_RIGHT_ARM);
		layerArray.push(LAYER_TYPE_RIGHT_ARM);
	}
	
	if(actor.tachiePantiesInFrontOfBoobs()) {
		layerArray.push(LAYER_TYPE_PANTIES);
	}
	
	if(actor.tachieBoobsInFrontOfBody()) {
		layerArray.push(LAYER_TYPE_DROOL_NIPPLES);
		
		if(actor.tachieCockBoobsInFrontOfBoobs()) {
			layerArray.push(LAYER_TYPE_SEMEN_COCK_BOOBS);
			layerArray.push(LAYER_TYPE_COCK_BOOBS);
		}
		
		if(actor.tachieSemenBoobsInFrontOfBoobs()) {
			layerArray.push(LAYER_TYPE_SEMEN_RIGHT_BOOB);
			layerArray.push(LAYER_TYPE_SEMEN_LEFT_BOOB);
			layerArray.push(LAYER_TYPE_SEMEN_BOOBS);
		}
		if(actor.tachieSemenBellyInFrontOfBoobs()) {
			layerArray.push(LAYER_TYPE_SEMEN_BELLY);
		}
		
		if(actor.tachieLeftBoobInFrontOfRightBoob())
			layerArray.push(LAYER_TYPE_LEFT_BOOB);
		layerArray.push(LAYER_TYPE_RIGHT_BOOB);
		if(!actor.tachieLeftBoobInFrontOfRightBoob())
			layerArray.push(LAYER_TYPE_LEFT_BOOB);
		
		layerArray.push(LAYER_TYPE_BOOBS);
		
		if(!actor.tachieCockBoobsInFrontOfBoobs()) {
			layerArray.push(LAYER_TYPE_SEMEN_COCK_BOOBS);
			layerArray.push(LAYER_TYPE_COCK_BOOBS);
		}
		
		if(!actor.tachieSemenBoobsInFrontOfBoobs()) {
			layerArray.push(LAYER_TYPE_SEMEN_RIGHT_BOOB);
			layerArray.push(LAYER_TYPE_SEMEN_LEFT_BOOB);
			layerArray.push(LAYER_TYPE_SEMEN_BOOBS);
		}
		if(!actor.tachieSemenBellyInFrontOfBoobs()) {
			layerArray.push(LAYER_TYPE_SEMEN_BELLY);
		}
		
		if(actor.tachieWeaponInFrontOfBody() && !actor.tachieWeaponInFrontOfBoobs()  && !actor.tachieWeaponBehindEverything())
			layerArray.push(LAYER_TYPE_WEAPON);
	}
	
	if(!actor.tachieRightArmInFrontOfLeftArm() && actor.tachieRightArmInFrontOfBody() && !actor.tachieRightArmInFrontOfBoobs() && !actor.tachieRightArmInFrontOfHeadAndBehindBody()) {
		layerArray.push(LAYER_TYPE_COCK_RIGHT_ARM);
		layerArray.push(LAYER_TYPE_RIGHT_ARM);
	}
	if(actor.tachieLeftArmInFrontOfBody() && !actor.tachieLeftArmInFrontOfBoobs()) {
		layerArray.push(LAYER_TYPE_COCK_LEFT_ARM);
		layerArray.push(LAYER_TYPE_LEFT_ARM);
	}
	if(actor.tachieRightArmInFrontOfLeftArm() && actor.tachieRightArmInFrontOfBody() && !actor.tachieRightArmInFrontOfBoobs() && !actor.tachieRightArmInFrontOfHeadAndBehindBody()) {
		layerArray.push(LAYER_TYPE_COCK_RIGHT_ARM);
		layerArray.push(LAYER_TYPE_RIGHT_ARM);
	}
	
	if(!actor.tachiePantiesInFrontOfBoobs()) {
		layerArray.push(LAYER_TYPE_PANTIES);
	}
	
	if(actor.tachieHolesCocksToysInFrontOfBody()) {
		if(!actor.tachieToysInFrontOfEverything() && !actor.tachieToysInBehindOfEverything()) {
			if(actor.tachieClitToyInFrontOfMainToys() && !actor.tachieClitToyBehindCocks()) 
				layerArray.push(LAYER_TYPE_TOY_CLIT);
			if(actor.tachiePussyToyInFrontOfAnalToy()) 
				layerArray.push(LAYER_TYPE_TOY_PUSSY);
			if(!actor.tachieAnalToyInFrontOfEverything())
				layerArray.push(LAYER_TYPE_TOY_ANAL);
			if(!actor.tachiePussyToyInFrontOfAnalToy()) 
				layerArray.push(LAYER_TYPE_TOY_PUSSY);
			if(!actor.tachieClitToyInFrontOfMainToys() && !actor.tachieClitToyBehindCocks()) 
				layerArray.push(LAYER_TYPE_TOY_CLIT);
		}
		
		layerArray.push(LAYER_TYPE_SEMEN_COCK_ANAL);
		layerArray.push(LAYER_TYPE_SEMEN_COCK_PUSSY);
		layerArray.push(LAYER_TYPE_COCK_ANAL);
		layerArray.push(LAYER_TYPE_COCK_PUSSY);
		
		if(actor.tachieClitToyBehindCocks()) 
			layerArray.push(LAYER_TYPE_TOY_CLIT);
		
		layerArray.push(LAYER_TYPE_SEMEN_PUSSY);
		layerArray.push(LAYER_TYPE_SEMEN_ANAL);
		layerArray.push(LAYER_TYPE_WET);
		
		layerArray.push(LAYER_TYPE_HOLE_ANUS);
		layerArray.push(LAYER_TYPE_HOLE_PUSSY);
	}
	
	layerArray.push(LAYER_TYPE_PUBIC);
	layerArray.push(LAYER_TYPE_BODY);
	
	if(!actor.tachieHolesCocksToysInFrontOfBody()) {
		if(!actor.tachieToysInFrontOfEverything() && !actor.tachieToysInBehindOfEverything()) {
			if(actor.tachieClitToyInFrontOfMainToys()) 
				layerArray.push(LAYER_TYPE_TOY_CLIT);
			if(actor.tachiePussyToyInFrontOfAnalToy()) 
				layerArray.push(LAYER_TYPE_TOY_PUSSY);
			if(!actor.tachieAnalToyInFrontOfEverything())
				layerArray.push(LAYER_TYPE_TOY_ANAL);
			if(!actor.tachiePussyToyInFrontOfAnalToy()) 
				layerArray.push(LAYER_TYPE_TOY_PUSSY);
			if(!actor.tachieClitToyInFrontOfMainToys()) 
				layerArray.push(LAYER_TYPE_TOY_CLIT);
		}
		
		layerArray.push(LAYER_TYPE_SEMEN_COCK_ANAL);
		layerArray.push(LAYER_TYPE_SEMEN_COCK_PUSSY);
		layerArray.push(LAYER_TYPE_COCK_ANAL);
		layerArray.push(LAYER_TYPE_COCK_PUSSY);
		
		layerArray.push(LAYER_TYPE_SEMEN_PUSSY);
		layerArray.push(LAYER_TYPE_SEMEN_ANAL);
		layerArray.push(LAYER_TYPE_WET);
		
		layerArray.push(LAYER_TYPE_HOLE_ANUS);
		layerArray.push(LAYER_TYPE_HOLE_PUSSY);
	}
	
	if(!actor.tachieHatInFrontOfBody()) 
		layerArray.push(LAYER_TYPE_HAT);
	
	if(!actor.tachieHeadInFrontOfBody()) {
		if(actor.tachieRightArmInFrontOfHeadAndBehindBody()) {
			layerArray.push(LAYER_TYPE_DROOL_FINGERS);
			layerArray.push(LAYER_TYPE_COCK_RIGHT_ARM);
			layerArray.push(LAYER_TYPE_RIGHT_ARM);
		}
		layerArray.push(LAYER_TYPE_HEAD);
	}
	
	if(!actor.tachieBoobsInFrontOfBody()) {
		layerArray.push(LAYER_TYPE_DROOL_NIPPLES);
		
		if(actor.tachieCockBoobsInFrontOfBoobs()) {
			layerArray.push(LAYER_TYPE_SEMEN_COCK_BOOBS);
			layerArray.push(LAYER_TYPE_COCK_BOOBS);
		}
		
		if(actor.tachieSemenBoobsInFrontOfBoobs()) {
			layerArray.push(LAYER_TYPE_SEMEN_RIGHT_BOOB);
			layerArray.push(LAYER_TYPE_SEMEN_LEFT_BOOB);
			layerArray.push(LAYER_TYPE_SEMEN_BOOBS);
		}
		if(actor.tachieSemenBellyInFrontOfBoobs()) {
			layerArray.push(LAYER_TYPE_SEMEN_BELLY);
		}
		
		if(actor.tachieLeftBoobInFrontOfRightBoob())
			layerArray.push(LAYER_TYPE_LEFT_BOOB);
		layerArray.push(LAYER_TYPE_RIGHT_BOOB);
		if(!actor.tachieLeftBoobInFrontOfRightBoob())
			layerArray.push(LAYER_TYPE_LEFT_BOOB);
		
		layerArray.push(LAYER_TYPE_BOOBS);
		
		if(!actor.tachieCockBoobsInFrontOfBoobs()) {
			layerArray.push(LAYER_TYPE_SEMEN_COCK_BOOBS);
			layerArray.push(LAYER_TYPE_COCK_BOOBS);
		}
		
		if(!actor.tachieSemenBoobsInFrontOfBoobs()) {
			layerArray.push(LAYER_TYPE_SEMEN_RIGHT_BOOB);
			layerArray.push(LAYER_TYPE_SEMEN_LEFT_BOOB);
			layerArray.push(LAYER_TYPE_SEMEN_BOOBS);
		}
		if(!actor.tachieSemenBellyInFrontOfBoobs()) {
			layerArray.push(LAYER_TYPE_SEMEN_BELLY);
		}
		
		if(actor.tachieWeaponInFrontOfBody() && !actor.tachieWeaponInFrontOfBoobs()  && !actor.tachieWeaponBehindEverything())
			layerArray.push(LAYER_TYPE_WEAPON);
	}
	
	if(!actor.tachieCockMouthInFrontOfFace()) {
		layerArray.push(LAYER_TYPE_SEMEN_COCK_MOUTH);
		layerArray.push(LAYER_TYPE_COCK_MOUTH);
	}
	
	if(!actor.tachieWeaponInFrontOfBody() && !actor.tachieWeaponBehindEverything())
		layerArray.push(LAYER_TYPE_WEAPON);
	
	if(!actor.tachieRightArmInFrontOfLeftArm() && !actor.tachieRightArmInFrontOfBody() && !actor.tachieRightArmInFrontOfHeadAndBehindBody()) {
		layerArray.push(LAYER_TYPE_COCK_RIGHT_ARM);
		layerArray.push(LAYER_TYPE_RIGHT_ARM);
	}
	if(!actor.tachieLeftArmInFrontOfBody()) {
		layerArray.push(LAYER_TYPE_COCK_LEFT_ARM);
		layerArray.push(LAYER_TYPE_LEFT_ARM);
	}
	if(actor.tachieRightArmInFrontOfLeftArm() && !actor.tachieRightArmInFrontOfBody() && !actor.tachieRightArmInFrontOfHeadAndBehindBody()) {
		layerArray.push(LAYER_TYPE_COCK_RIGHT_ARM);
		layerArray.push(LAYER_TYPE_RIGHT_ARM);
	}
	
	if(actor.tachieWeaponBehindEverything()) {
		layerArray.push(LAYER_TYPE_WEAPON);
	}
	
	layerArray.push(LAYER_TYPE_BACK_A);
	layerArray.push(LAYER_TYPE_BACK_B);
	layerArray.push(LAYER_TYPE_BACK_C);
	layerArray.push(LAYER_TYPE_BACK_D);
	layerArray.push(LAYER_TYPE_BACK_E);
	
	if(actor.tachieToysInBehindOfEverything()) {
		if(actor.tachieClitToyInFrontOfMainToys()) 
			layerArray.push(LAYER_TYPE_TOY_CLIT);
		if(actor.tachiePussyToyInFrontOfAnalToy()) 
			layerArray.push(LAYER_TYPE_TOY_PUSSY);
		if(!actor.tachieAnalToyInFrontOfEverything())
			layerArray.push(LAYER_TYPE_TOY_ANAL);
		if(!actor.tachiePussyToyInFrontOfAnalToy()) 
			layerArray.push(LAYER_TYPE_TOY_PUSSY);
		if(!actor.tachieClitToyInFrontOfMainToys()) 
			layerArray.push(LAYER_TYPE_TOY_CLIT);
	}
	
	
	layerArray.push(LAYER_TYPE_SEMEN_FLOOR);
	
	return layerArray;
};

//defeated_level1
Game_Actor.prototype.getLayerLoadout_DefeatedLv1 = function() {
	let layerArray = [];
	let tempArray = [];	
	
	tempArray = [	
		LAYER_TYPE_SEMEN_FRONT_D,
		LAYER_TYPE_SEMEN_FRONT_C,
		LAYER_TYPE_SEMEN_FRONT_B,
		LAYER_TYPE_SEMEN_FRONT_A,
		
		LAYER_TYPE_FRONT_D,
		LAYER_TYPE_FRONT_C,
		LAYER_TYPE_FRONT_B,
		LAYER_TYPE_FRONT_A,
		
		LAYER_TYPE_HAT,
		
		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_STRAY_FACE,
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HOPPE,
		LAYER_TYPE_MOUTH,
		
		LAYER_TYPE_SEMEN_COCK_MOUTH,
		LAYER_TYPE_COCK_MOUTH,
		
		LAYER_TYPE_SEMEN_COCK_LEFT_ARM,
		LAYER_TYPE_SEMEN_COCK_RIGHT_ARM,

		LAYER_TYPE_COCK_LEFT_ARM,
		LAYER_TYPE_COCK_RIGHT_ARM,
	
		LAYER_TYPE_SEMEN_LEFT_BOOB,
		LAYER_TYPE_SEMEN_RIGHT_BOOB,
	
		LAYER_TYPE_STRAY_LEFT_BOOB,
		LAYER_TYPE_STRAY_RIGHT_BOOB,
		
		LAYER_TYPE_HAIR,
		LAYER_TYPE_TIE,
	
		LAYER_TYPE_LEFT_BOOB,
		LAYER_TYPE_RIGHT_BOOB,
		
		LAYER_TYPE_SEMEN_LEFT_ARM,
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		
		LAYER_TYPE_LEFT_ARM,
		LAYER_TYPE_RIGHT_ARM,

		LAYER_TYPE_BODY
	]
	layerArray = layerArray.concat(tempArray);
	
	
	return layerArray;
};

//defeated_level2
Game_Actor.prototype.getLayerLoadout_DefeatedLv2 = function() {
	let layerArray = [];
	
	layerArray = [
		LAYER_TYPE_HAT,
	
		LAYER_TYPE_STRAY_FACE,
	
		LAYER_TYPE_SEMEN_COCK_ANAL,
		LAYER_TYPE_SEMEN_COCK_PUSSY,

		LAYER_TYPE_SEMEN_FRONT_A,
		LAYER_TYPE_SEMEN_FRONT_B,
		LAYER_TYPE_SEMEN_FRONT_C,
		LAYER_TYPE_SEMEN_FRONT_D,
		LAYER_TYPE_FRONT_A,
		LAYER_TYPE_FRONT_B,
		LAYER_TYPE_FRONT_C,
		LAYER_TYPE_FRONT_D,

		LAYER_TYPE_SEMEN_BOOBS,
		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		
		LAYER_TYPE_RIGHT_ARM,
		
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HOPPE,
		LAYER_TYPE_MOUTH,

		LAYER_TYPE_COCK_ANAL,
		LAYER_TYPE_COCK_PUSSY,
		LAYER_TYPE_TOY_ANAL,
		LAYER_TYPE_TOY_PUSSY,
		LAYER_TYPE_TOY_CLIT,

		LAYER_TYPE_SEMEN_ANAL,
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_SEMEN_BACK,
		LAYER_TYPE_SEMEN_LEFT_ARM,
		LAYER_TYPE_SEMEN_BUTT_UPPER_LEFT,
		LAYER_TYPE_SEMEN_BUTT_BOTTOM_LEFT,
		LAYER_TYPE_SEMEN_BUTT_UPPER_RIGHT,
		LAYER_TYPE_SEMEN_BUTT_BOTTOM_RIGHT,
		LAYER_TYPE_WET,

		LAYER_TYPE_STRAY_BOOBS,
		LAYER_TYPE_STRAY_GROIN,
		LAYER_TYPE_STRAY_BUTT,

		LAYER_TYPE_PUBIC,
		LAYER_TYPE_HOLE_PUSSY,
		LAYER_TYPE_HOLE_ANUS,
		

		LAYER_TYPE_SPANKMARK_RIGHTBUTT,
		LAYER_TYPE_SPANKMARK_LEFTBUTT,
		
		LAYER_TYPE_HAIR,
		LAYER_TYPE_BODY,
		LAYER_TYPE_BOOBS,
		
		LAYER_TYPE_TIE,
		
		LAYER_TYPE_LEFT_ARM
	]
	
	return layerArray;
};

//defeated_level3
Game_Actor.prototype.getLayerLoadout_DefeatedLv3 = function() {
	let layerArray = [];
	let tempArray = [];	
	
	let mergedHoppeArray = false;
	let hoppeArray = [ LAYER_TYPE_HOPPE ];
	
	
	tempArray = [	
		LAYER_TYPE_TOY_CLIT,
		LAYER_TYPE_TOY_PUSSY,
		LAYER_TYPE_TOY_ANAL,
	
		LAYER_TYPE_SEMEN_FRONT_A,
		LAYER_TYPE_SEMEN_FRONT_B,
		LAYER_TYPE_SEMEN_FRONT_C,
		LAYER_TYPE_SEMEN_FRONT_D,
	
		LAYER_TYPE_SEMEN_COCK_MOUTH,
		LAYER_TYPE_SEMEN_COCK_PUSSY,
		LAYER_TYPE_SEMEN_COCK_ANAL,
		
		LAYER_TYPE_FRONT_A,
		LAYER_TYPE_FRONT_B,
		LAYER_TYPE_FRONT_C,
		LAYER_TYPE_FRONT_D,
		LAYER_TYPE_COCK_PUSSY,
		LAYER_TYPE_COCK_ANAL,
		
		LAYER_TYPE_TIE,
		
		LAYER_TYPE_SEMEN_COCK_BOOBS,
		LAYER_TYPE_SEMEN_RIGHT_LEG,
		LAYER_TYPE_SEMEN_BUTT,
		LAYER_TYPE_SEMEN_LEFT_LEG,
		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		LAYER_TYPE_SEMEN_LEFT_ARM,
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_SEMEN_ANAL,
		LAYER_TYPE_WET,
		
		LAYER_TYPE_COCK_BOOBS,

		LAYER_TYPE_STRAY_FACE,
		LAYER_TYPE_STRAY_BOOBS,
		LAYER_TYPE_STRAY_GROIN,
		LAYER_TYPE_STRAY_BUTT,

		LAYER_TYPE_HAT,

		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_SWEAT
	]
	layerArray = layerArray.concat(tempArray);
		
		
	if(!mergedHoppeArray && this.tachieHoppe.includes('fera')) {
		layerArray = layerArray.concat(hoppeArray);
		mergedHoppeArray = true;
	}
		
	tempArray = [	
		LAYER_TYPE_MOUTH,
		LAYER_TYPE_COCK_MOUTH
	]
	layerArray = layerArray.concat(tempArray);	
		
	if(!mergedHoppeArray) {
		layerArray = layerArray.concat(hoppeArray);
		mergedHoppeArray = true;
	}	
		
	tempArray = [
		LAYER_TYPE_BACK_A,
		
		LAYER_TYPE_SEMEN_BOOBS,
		LAYER_TYPE_BOOBS,
		
		LAYER_TYPE_HAIR,
		
		LAYER_TYPE_SEMEN_BELLY,
	
		LAYER_TYPE_PUBIC,
		LAYER_TYPE_HOLE_PUSSY,
		LAYER_TYPE_HOLE_ANUS,
		
		LAYER_TYPE_LEFT_ARM,
		LAYER_TYPE_RIGHT_ARM,
		
		LAYER_TYPE_BODY
	]
	
	
	layerArray = layerArray.concat(tempArray);
	
	return layerArray;
};

//defeated_level4
Game_Actor.prototype.getLayerLoadout_DefeatedLv4 = function() {
	let layerArray = [];
	
	layerArray = [
		LAYER_TYPE_SEMEN_FRONT_A,
		LAYER_TYPE_SEMEN_FRONT_B,
		LAYER_TYPE_SEMEN_FRONT_C,
		LAYER_TYPE_SEMEN_FRONT_D,
		LAYER_TYPE_SEMEN_COCK_ANAL,
		LAYER_TYPE_SEMEN_COCK_PUSSY,
		LAYER_TYPE_SEMEN_COCK_MOUTH,
		
		LAYER_TYPE_FRONT_A,
		LAYER_TYPE_FRONT_B,
		LAYER_TYPE_FRONT_C,
		LAYER_TYPE_FRONT_D,
		
		LAYER_TYPE_SEMEN_ANAL,
		LAYER_TYPE_SEMEN_PUSSY,
		
		LAYER_TYPE_COCK_ANAL,
		LAYER_TYPE_COCK_PUSSY,
		LAYER_TYPE_WET,
		
		LAYER_TYPE_TOY_ANAL,
		LAYER_TYPE_TOY_PUSSY,
		
		LAYER_TYPE_HAT,
		
		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_SEMEN_BUTT_LEFT,
		LAYER_TYPE_SEMEN_BUTT_RIGHT,
		LAYER_TYPE_SEMEN_LEFT_LEG,
		LAYER_TYPE_SEMEN_RIGHT_LEG,
		LAYER_TYPE_SEMEN_BACK,
		LAYER_TYPE_SEMEN_LEFT_ARM,
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		
		
		LAYER_TYPE_STRAY_FACE,
		
		LAYER_TYPE_STRAY_GROIN,
		LAYER_TYPE_STRAY_BUTT,
		
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HOPPE,
		LAYER_TYPE_MOUTH,
		
		LAYER_TYPE_SPANKMARK_RIGHTBUTT,
		LAYER_TYPE_SPANKMARK_LEFTBUTT,
		
		LAYER_TYPE_HAIR,
		LAYER_TYPE_BODY,
		
		LAYER_TYPE_COCK_MOUTH,
		
		LAYER_TYPE_SEMEN_BOOBS,
		LAYER_TYPE_STRAY_BOOBS,
		LAYER_TYPE_BOOBS,
		
		LAYER_TYPE_TIE
	]

	return layerArray;
};

//defeated_level5
Game_Actor.prototype.getLayerLoadout_DefeatedLv5 = function() {
	let layerArray = [];
	let tempArray = [];
	
	let givingBJ = this.isBodySlotPenis(MOUTH_ID);
	let legsAreSpread = this.tachieLegs.includes('spread');
	
	let mergedLegsArray = false;
	let legsArray = [ LAYER_TYPE_LEGS ];
	
	tempArray = [	
		LAYER_TYPE_SEMEN_FRONT_A,
		LAYER_TYPE_SEMEN_FRONT_B,
		LAYER_TYPE_SEMEN_FRONT_C,
		LAYER_TYPE_SEMEN_FRONT_D,	
		LAYER_TYPE_FRONT_A,
		LAYER_TYPE_FRONT_B,
		LAYER_TYPE_FRONT_C,
		LAYER_TYPE_FRONT_D,
		
		LAYER_TYPE_BACK_A,
		LAYER_TYPE_SEMEN_COCK_BOOBS,
		LAYER_TYPE_SEMEN_BOOBS,
		LAYER_TYPE_STRAY_BOOBS,
		LAYER_TYPE_COCK_BOOBS,
		LAYER_TYPE_BOOBS,
		
		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_SEMEN_COCK_LEFT_ARM,
		LAYER_TYPE_SEMEN_COCK_RIGHT_ARM,
		LAYER_TYPE_SEMEN_COCK_ANAL,
		LAYER_TYPE_SEMEN_COCK_PUSSY,
		
		LAYER_TYPE_STRAY_FACE,
		
		LAYER_TYPE_COCK_LEFT_ARM,
		
		LAYER_TYPE_TIE
	]
	layerArray = layerArray.concat(tempArray);
	
	if(givingBJ) {
		tempArray = [	
			LAYER_TYPE_SWEAT,
			LAYER_TYPE_HAIR,
			LAYER_TYPE_HOPPE,
			LAYER_TYPE_HEAD,
			LAYER_TYPE_MOUTH,
			LAYER_TYPE_SEMEN_COCK_MOUTH,
			LAYER_TYPE_COCK_MOUTH
		]
		layerArray = layerArray.concat(tempArray);
	}
	else {
		tempArray = [	
			LAYER_TYPE_HAT,
			LAYER_TYPE_EYEBROWS,
			LAYER_TYPE_EYES,
			LAYER_TYPE_MOUTH,
			LAYER_TYPE_SWEAT,
			LAYER_TYPE_HAIR,
			LAYER_TYPE_HOPPE,
			LAYER_TYPE_HEAD
		]
		layerArray = layerArray.concat(tempArray);
	}
	
	tempArray = [	
		LAYER_TYPE_COCK_PUSSY,
	
		LAYER_TYPE_TOY_PUSSY,
		LAYER_TYPE_TOY_CLIT,
		LAYER_TYPE_TOY_ANAL,

		LAYER_TYPE_COCK_ANAL,
		
		LAYER_TYPE_SEMEN_BUTT,
		LAYER_TYPE_SEMEN_ANAL,
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_SEMEN_BELLY,
		LAYER_TYPE_SEMEN_RIGHT_LEG,
		LAYER_TYPE_SEMEN_LEFT_LEG,
		LAYER_TYPE_WET,
		
		LAYER_TYPE_STRAY_GROIN,
		LAYER_TYPE_STRAY_BUTT,
		
		LAYER_TYPE_PUBIC,
		
		LAYER_TYPE_HOLE_ANUS,
		LAYER_TYPE_HOLE_PUSSY
	]
	layerArray = layerArray.concat(tempArray);	
		
	if(legsAreSpread && !mergedLegsArray) {
		layerArray = layerArray.concat(legsArray);
		mergedLegsArray = true;
	}	
		
	tempArray = [	
		LAYER_TYPE_SEMEN_LEFT_ARM,
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		
		LAYER_TYPE_LEFT_ARM,
		
		LAYER_TYPE_BODY
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedLegsArray) {
		layerArray = layerArray.concat(legsArray);
		mergedLegsArray = true;
	}
	
	if(givingBJ) {
		tempArray = [	
			LAYER_TYPE_HAT
		]
		layerArray = layerArray.concat(tempArray);
	}
	
	tempArray = [	
		LAYER_TYPE_COCK_RIGHT_ARM,
		LAYER_TYPE_RIGHT_ARM
	]
	layerArray = layerArray.concat(tempArray);
	
	return layerArray;
};

//down orgasm
Game_Actor.prototype.getLayerLoadout_DownOrgasm = function() {
	let layerArray = [];
	let tempArray = [];

	let mergedPubicArray = false;
	let pubicArray = [ LAYER_TYPE_PUBIC ];
	
	let mergedBoobsArray = false;
	let boobsArray = [ LAYER_TYPE_BOOBS ];
	
	let isPcup = this.boobsSizeIsPCup();

	tempArray = [	
		LAYER_TYPE_HAT,
		
		LAYER_TYPE_SEMEN_LEFT_ARM,
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		LAYER_TYPE_SEMEN_BOOBS,
		LAYER_TYPE_SEMEN_BACK,
		
		LAYER_TYPE_STRAY_BOOBS,
		
		LAYER_TYPE_TOY_ANAL,
		LAYER_TYPE_TOY_PUSSY,
		LAYER_TYPE_TOY_CLIT,
		
		LAYER_TYPE_STRAY_GROIN,
		LAYER_TYPE_STRAY_BUTT,
		
		LAYER_TYPE_SEMEN_ANAL,
		LAYER_TYPE_SEMEN_BUTT,
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_SEMEN_PUSSY_PANTIES,
		LAYER_TYPE_WET,
		LAYER_TYPE_WET_PANTIES,
		
		LAYER_TYPE_HAIR
	]
	layerArray = layerArray.concat(tempArray);
	
	if(isPcup) {
		if(!mergedBoobsArray) {
			layerArray = layerArray.concat(boobsArray);
			mergedBoobsArray = true;
		}
	}

	tempArray = [	
		LAYER_TYPE_LEFT_ARM,
	
		LAYER_TYPE_HIPS,
		LAYER_TYPE_PANTIES
	]
	layerArray = layerArray.concat(tempArray);

	if(!mergedPubicArray && !this.isWearingPanties()) {
		layerArray = layerArray.concat(pubicArray);
		mergedPubicArray = true;
	}
	
	if(!mergedPubicArray && this._hasTachiePubicExtension) {
		layerArray = layerArray.concat(pubicArray);
		mergedPubicArray = true;
	}
	
	tempArray = [	
		LAYER_TYPE_BODY
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedBoobsArray) {
		layerArray = layerArray.concat(boobsArray);
		mergedBoobsArray = true;
	}
	
	tempArray = [	
		LAYER_TYPE_RIGHT_ARM,
		
		LAYER_TYPE_SEMEN_FLOOR
	]
	layerArray = layerArray.concat(tempArray);

	return layerArray;
};

//down falldown
Game_Actor.prototype.getLayerLoadout_DownFalldown = function() {
	let layerArray = [];
	let tempArray = [];

	let mergedPubicArray = false;
	let pubicArray = [ LAYER_TYPE_PUBIC ];
	
	let isPcup = this.boobsSizeIsPCup();

	tempArray = [
		LAYER_TYPE_HAT,
		
		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_SEMEN_BOOBS,
		
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_MOUTH,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HAIR,
		LAYER_TYPE_HOPPE,
		
		LAYER_TYPE_TOY_PUSSY,
		LAYER_TYPE_TOY_ANAL,
		LAYER_TYPE_TOY_CLIT,
		
		LAYER_TYPE_STRAY_FACE
	]
	layerArray = layerArray.concat(tempArray);	
	
	if(isPcup) {
		tempArray = [	
			LAYER_TYPE_SEMEN_RIGHT_ARM
		]
		layerArray = layerArray.concat(tempArray);	
	}
	
	tempArray = [	
		LAYER_TYPE_STRAY_BOOBS,
		
		LAYER_TYPE_BOOBS,
		
		LAYER_TYPE_SEMEN_BELLY,
		
		LAYER_TYPE_HIPS,
		
		LAYER_TYPE_SEMEN_ANAL,
		LAYER_TYPE_SEMEN_ANAL_PANTIES,
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_SEMEN_PUSSY_PANTIES,
		
		LAYER_TYPE_STRAY_GROIN,
		LAYER_TYPE_STRAY_BUTT,
		
		LAYER_TYPE_WET,
		LAYER_TYPE_WET_PANTIES,
		
		LAYER_TYPE_PANTIES

	]
	layerArray = layerArray.concat(tempArray);

	if(!mergedPubicArray && !this.isWearingPanties()) {
		layerArray = layerArray.concat(pubicArray);
		mergedPubicArray = true;
	}
		
	if(!mergedPubicArray && this._hasTachiePubicExtension) {
		layerArray = layerArray.concat(pubicArray);
		mergedPubicArray = true;
	}

	tempArray = [	
		LAYER_TYPE_BODY,
		
		LAYER_TYPE_SEMEN_LEFT_ARM
	]
		layerArray = layerArray.concat(tempArray);	
	
	if(!isPcup) {
		tempArray = [	
			LAYER_TYPE_SEMEN_RIGHT_ARM
		]
		layerArray = layerArray.concat(tempArray);	
	}
	
	tempArray = [	
		LAYER_TYPE_LEFT_ARM,
		LAYER_TYPE_RIGHT_ARM,
		
		LAYER_TYPE_SEMEN_FLOOR
	]
	layerArray = layerArray.concat(tempArray);

	return layerArray;
};

//down stamina
Game_Actor.prototype.getLayerLoadout_DownStamina = function() {
	let layerArray = [];
	
	layerArray = [
		LAYER_TYPE_HAT,
		
		LAYER_TYPE_SEMEN_LEFT_ARM,
		LAYER_TYPE_LEFT_ARM,
	
		LAYER_TYPE_TOY_PUSSY,
		LAYER_TYPE_TOY_ANAL,
		LAYER_TYPE_TOY_CLIT,
	
		LAYER_TYPE_SEMEN_BELLY,
		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_SEMEN_BOOBS,
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_SEMEN_BUTT,
		
		LAYER_TYPE_STRAY_FACE,
		LAYER_TYPE_STRAY_BOOBS,
		
		LAYER_TYPE_BOOBS,
		
		LAYER_TYPE_SEMEN_ANAL,
		
		LAYER_TYPE_WET_PANTIES,
		LAYER_TYPE_WET,
		
		LAYER_TYPE_STRAY_GROIN,
		LAYER_TYPE_STRAY_BUTT,
		
		LAYER_TYPE_PANTIES,
		LAYER_TYPE_PUBIC,
		LAYER_TYPE_BODY,
		
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_MOUTH,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HAIR,
		LAYER_TYPE_HOPPE,
		LAYER_TYPE_HEAD,
		
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		LAYER_TYPE_RIGHT_ARM,
		
		LAYER_TYPE_SEMEN_FLOOR
	]
	
	return layerArray;
};

Game_Actor.prototype.getLayerLoadout_HjStanding = function() {
	let layerArray = [];
	
	layerArray = [
		LAYER_TYPE_FRONT_A,
		LAYER_TYPE_HAT,
	
		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_SEMEN_BOOBS,
		
		LAYER_TYPE_STRAY_FACE,
		LAYER_TYPE_STRAY_BOOBS,
		
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_MOUTH,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HAIR,
		LAYER_TYPE_HOPPE,
		
		LAYER_TYPE_BOOBS,
		
		LAYER_TYPE_TOY_CLIT,
		LAYER_TYPE_TOY_PUSSY,
		
	
		LAYER_TYPE_SEMEN_COCK_LEFT_ARM,
		LAYER_TYPE_SEMEN_LEFT_ARM,
		LAYER_TYPE_SEMEN_COCK_RIGHT_ARM,
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		LAYER_TYPE_SEMEN_BELLY,
		
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_WET,
		
		LAYER_TYPE_COCK_LEFT_ARM,

		LAYER_TYPE_LEFT_ARM,
		
		LAYER_TYPE_COCK_RIGHT_ARM,
		LAYER_TYPE_RIGHT_ARM,
		
		LAYER_TYPE_SEMEN_BUTT,
		
		LAYER_TYPE_STRAY_GROIN,
		LAYER_TYPE_STRAY_BUTT,

		LAYER_TYPE_PUBIC,
		LAYER_TYPE_BODY,
		
		LAYER_TYPE_TOY_ANAL,
		
		LAYER_TYPE_SEMEN_FLOOR
	]

	return layerArray;
};

Game_Actor.prototype.getLayerLoadout_BjKneeling = function() {
	let layerArray = [];
	let tempArray = [];
	
	let mergedSemenLeftArmArray = false;
	let semenLeftArmArray = [ LAYER_TYPE_SEMEN_LEFT_ARM ];
	let mergedSemenRightArmArray = false;
	let semenRightArmArray = [ LAYER_TYPE_SEMEN_RIGHT_ARM ];
	
	let mergedLeftArmArray = false;
	let leftArmArray = [ LAYER_TYPE_LEFT_ARM ];
	let mergedRightArmArray = false;
	let rightArmArray = [ LAYER_TYPE_RIGHT_ARM ];
	
	let leftArmIsHj = this.tachieLeftArm.includes('hj');
	let rightArmIsHj = this.tachieRightArm.includes('hj');
	
	tempArray = [
		LAYER_TYPE_FRONT_A,
		LAYER_TYPE_HAT,

		LAYER_TYPE_TOY_CLIT,
		
		LAYER_TYPE_SEMEN_BOOBS,
		LAYER_TYPE_SEMEN_COCK_MOUTH
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedSemenRightArmArray && rightArmIsHj) {
		layerArray = layerArray.concat(semenRightArmArray);
		mergedSemenRightArmArray = true;
	}
	
	tempArray = [	
		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_STRAY_FACE,
		LAYER_TYPE_STRAY_BOOBS,
		
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HOPPE,
		LAYER_TYPE_MOUTH,
		
		LAYER_TYPE_BOOBS
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedSemenRightArmArray) {
		layerArray = layerArray.concat(semenRightArmArray);
		mergedSemenRightArmArray = true;
	}

	tempArray = [	
		LAYER_TYPE_SEMEN_COCK_LEFT_ARM,
		LAYER_TYPE_SEMEN_LEFT_ARM,
		LAYER_TYPE_SEMEN_BELLY,
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_WET,
		
		LAYER_TYPE_STRAY_GROIN
	]
	layerArray = layerArray.concat(tempArray);
	
	
	if(!mergedRightArmArray && rightArmIsHj) {
		layerArray = layerArray.concat(rightArmArray);
		mergedRightArmArray = true;
	}	

	
	tempArray = [
		LAYER_TYPE_COCK_MOUTH,
	
		LAYER_TYPE_HAIR
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedRightArmArray) {
		layerArray = layerArray.concat(rightArmArray);
		mergedRightArmArray = true;
	}
	
	tempArray = [
		LAYER_TYPE_SEMEN_BUTT,
	
		LAYER_TYPE_PUBIC,
		LAYER_TYPE_BODY,
		
		LAYER_TYPE_LEFT_ARM,
		LAYER_TYPE_COCK_LEFT_ARM,
		
		LAYER_TYPE_BACK_A,
		
		LAYER_TYPE_SEMEN_FLOOR
	]
	layerArray = layerArray.concat(tempArray);
	
	
	
	return layerArray;
};

//kick counter
Game_Actor.prototype.getLayerLoadout_KickCounter = function() {
	let layerArray = [];
	
	let isTachieKiss = this._hasTachieSemenFaceExtension && this._tachieSemenFaceExtension && this._tachieSemenFaceExtension == 'kiss_';
	let isPcup = this.boobsSizeIsPCup();
	let leftArmIsNormal = this.tachieLeftArm.includes('normal');
	
	let mergedLeftArmArray = false;
	let leftArmArray = [ LAYER_TYPE_LEFT_ARM ];
	
	let mergedSemenLeftArmArray = false;
	let semenLeftArmArray = [ LAYER_TYPE_SEMEN_LEFT_ARM ];
	
	if(isPcup && leftArmIsNormal && !mergedSemenLeftArmArray) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmArray = true;
	}
	if(isPcup && leftArmIsNormal && !mergedLeftArmArray) {
		layerArray = layerArray.concat(leftArmArray);
		mergedLeftArmArray = true;
	}
	
	tempArray = [
		LAYER_TYPE_FRONT_A,
	
		LAYER_TYPE_SEMEN_BACK,
		LAYER_TYPE_SEMEN_BELLY,
		LAYER_TYPE_SEMEN_BUTT,
		LAYER_TYPE_SEMEN_ANAL,
		LAYER_TYPE_SEMEN_COCK_ANAL,
		LAYER_TYPE_SEMEN_COCK_PUSSY,
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_WET
	]
	layerArray = layerArray.concat(tempArray);
		
	tempArray = [	
		LAYER_TYPE_STRAY_GROIN,
		LAYER_TYPE_STRAY_BUTT,
		
		LAYER_TYPE_BACK_A,
		LAYER_TYPE_BACK_B,
		
		LAYER_TYPE_HAT,
		
		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_SEMEN_RIGHT_ARM
	]
	layerArray = layerArray.concat(tempArray);	
	
	
	if(!mergedSemenLeftArmArray) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmArray = true;
	}
	
	tempArray = [	
		LAYER_TYPE_SEMEN_BOOBS,
		
		LAYER_TYPE_TIE,
		
		LAYER_TYPE_STRAY_FACE,
		LAYER_TYPE_STRAY_BOOBS,
		
		LAYER_TYPE_BOOBS
	]
	layerArray = layerArray.concat(tempArray);	

	if(leftArmIsNormal && !mergedLeftArmArray) {
		layerArray = layerArray.concat(leftArmArray);
		mergedLeftArmArray = true;
	}	
		
	tempArray = [	
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_MOUTH,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HAIR,
		LAYER_TYPE_HOPPE
	]
	layerArray = layerArray.concat(tempArray);		
	
	if(!mergedLeftArmArray) {
		layerArray = layerArray.concat(leftArmArray);
		mergedLeftArmArray = true;
	}	

	tempArray = [	
		LAYER_TYPE_BODY,
		
		LAYER_TYPE_COCK_ANAL,
		LAYER_TYPE_BACK_C,
		
		LAYER_TYPE_TOY_CLIT,
		LAYER_TYPE_TOY_ANAL,
		
		LAYER_TYPE_PUBIC,
		
		LAYER_TYPE_BACK_D,
		
		LAYER_TYPE_SEMEN_FLOOR
		
	]
	layerArray = layerArray.concat(tempArray);
	
	return layerArray;
};

//thug gangbang
Game_Actor.prototype.getLayerLoadout_ThugGangbang = function() {
	let layerArray = [];
	let tempArray = [];	
	
	let mergedHoppeArray = false;
	let hoppeArray = [ LAYER_TYPE_HOPPE ];
	
	let mergedBoobsArray = false;
	let boobsArray = [ LAYER_TYPE_BOOBS ];
	
	
	tempArray = [
		LAYER_TYPE_SEMEN_COCK_BOOBS,
		
		LAYER_TYPE_COCK_BOOBS,
		
		LAYER_TYPE_FRONT_B,
		
		LAYER_TYPE_SEMEN_BOOBS,
		
		LAYER_TYPE_STRAY_BOOBS
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedBoobsArray && this.tachieBoobs.includes('zuri')) {
		layerArray = layerArray.concat(boobsArray);
		mergedBoobsArray = true;
	}	
	
	tempArray = [	
		LAYER_TYPE_HAT,
		
		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_SEMEN_COCK_MOUTH,
	
		LAYER_TYPE_STRAY_FACE,
	
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_SWEAT
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedHoppeArray && this.tachieHoppe.includes('fera')) {
		layerArray = layerArray.concat(hoppeArray);
		mergedHoppeArray = true;
	}
	
	tempArray = [	
		LAYER_TYPE_MOUTH
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedHoppeArray) {
		layerArray = layerArray.concat(hoppeArray);
		mergedHoppeArray = true;
	}
	
	tempArray = [	
		LAYER_TYPE_COCK_MOUTH,
		
		LAYER_TYPE_TIE
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedBoobsArray) {
		layerArray = layerArray.concat(boobsArray);
		mergedBoobsArray = true;
	}
	
	tempArray = [	
		LAYER_TYPE_TOY_CLIT,
	
		LAYER_TYPE_SEMEN_COCK_LEFT_ARM,
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		LAYER_TYPE_SEMEN_LEFT_ARM,
		LAYER_TYPE_SEMEN_BELLY,
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_WET,
		
		LAYER_TYPE_RIGHT_ARM,
		
		
		LAYER_TYPE_COCK_PUSSY,
		LAYER_TYPE_FRONT_A,
		
		LAYER_TYPE_STRAY_GROIN,
		
		LAYER_TYPE_PUBIC,
		LAYER_TYPE_HAIR,
		LAYER_TYPE_BODY,
		
		LAYER_TYPE_COCK_LEFT_ARM,
		LAYER_TYPE_LEFT_ARM,
		
		LAYER_TYPE_SEMEN_FLOOR
	]
	layerArray = layerArray.concat(tempArray);

	return layerArray;
};

//Goblin Cunnilingus
Game_Actor.prototype.getLayerLoadout_GoblinCunnilingus = function() {
	let layerArray = [];
	
	layerArray = [
		LAYER_TYPE_SEMEN_COCK_PUSSY,
		
		LAYER_TYPE_FRONT_A,
		
		LAYER_TYPE_HAT,
		
		LAYER_TYPE_TOY_ANAL,
		
		LAYER_TYPE_SEMEN_LEFT_ARM,
		LAYER_TYPE_SEMEN_BOOBS,
		LAYER_TYPE_SEMEN_BUTT,
		LAYER_TYPE_SEMEN_COCK_MOUTH,
		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_SEMEN_BELLY,
		
		LAYER_TYPE_SEMEN_ANAL,
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_WET,
		
		LAYER_TYPE_LEFT_ARM,
		
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		LAYER_TYPE_SEMEN_BACK,
		
		LAYER_TYPE_STRAY_FACE,
		LAYER_TYPE_STRAY_BOOBS,
		LAYER_TYPE_STRAY_GROIN,
		LAYER_TYPE_STRAY_BUTT,
		

		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HOPPE,
		LAYER_TYPE_MOUTH,
		
		LAYER_TYPE_HAIR,
		
		LAYER_TYPE_PUBIC,
		LAYER_TYPE_BODY,
		
		LAYER_TYPE_BOOBS,
		
		LAYER_TYPE_RIGHT_ARM,
		
		LAYER_TYPE_SEMEN_COCK_BOOBS,
		
		LAYER_TYPE_COCK_BOOBS,
		LAYER_TYPE_COCK_MOUTH,
		
		LAYER_TYPE_BACK_A,
		
		LAYER_TYPE_SEMEN_FLOOR
	]
	
	return layerArray;
};

//guard gangbang
Game_Actor.prototype.getLayerLoadout_GuardGangbang = function() {
	let layerArray = [];
	let tempArray = [];	
	
	let mergedHoppeArray = false;
	let hoppeArray = [ LAYER_TYPE_HOPPE ];
	
	tempArray = [
		LAYER_TYPE_HAT,
	
		LAYER_TYPE_SEMEN_COCK_ANAL,
		
		LAYER_TYPE_TOY_ANAL,
		LAYER_TYPE_COCK_ANAL,
		
		LAYER_TYPE_SEMEN_ANAL,
		LAYER_TYPE_SEMEN_COCK_MOUTH,
		LAYER_TYPE_SEMEN_BUTT,
		LAYER_TYPE_SEMEN_BACK,
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		LAYER_TYPE_SEMEN_BOOBS,
		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_SEMEN_COCK_PUSSY,
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_WET,
		
		LAYER_TYPE_STRAY_FACE,
		LAYER_TYPE_STRAY_BOOBS,
		LAYER_TYPE_STRAY_GROIN,
		LAYER_TYPE_STRAY_BUTT,
		
		LAYER_TYPE_HOLE_ANUS,
		
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_SWEAT
	]
	layerArray = layerArray.concat(tempArray);	
		
	if(!mergedHoppeArray && this.tachieHoppe.includes('fera')) {
		layerArray = layerArray.concat(hoppeArray);
		mergedHoppeArray = true;
	}	
		
	tempArray = [	
		LAYER_TYPE_RIGHT_ARM,
		LAYER_TYPE_MOUTH,

		LAYER_TYPE_COCK_MOUTH,
		
		LAYER_TYPE_HAIR
	]
	layerArray = layerArray.concat(tempArray);	
	
	if(!mergedHoppeArray) {
		layerArray = layerArray.concat(hoppeArray);
		mergedHoppeArray = true;
	}	
		
	tempArray = [	
		LAYER_TYPE_BOOBS,
		LAYER_TYPE_FRONT_A,
		LAYER_TYPE_PUBIC,
		LAYER_TYPE_BODY,
		
		LAYER_TYPE_SEMEN_FLOOR
	]
	layerArray = layerArray.concat(tempArray);
	
	return layerArray;
};

//Werewolf Back
Game_Actor.prototype.getLayerLoadout_WerewolfBack = function() {
	let layerArray = [];
	let tempArray = [];	
	
	let mergedHoppeArray = false;
	let hoppeArray = [ LAYER_TYPE_HOPPE ];
	
	
	
	tempArray = [
		LAYER_TYPE_HAT,
	
		LAYER_TYPE_SEMEN_COCK_MOUTH,
		
		LAYER_TYPE_SEMEN_LEFT_ARM,
		LAYER_TYPE_SEMEN_ANAL,
		LAYER_TYPE_SEMEN_BUTT,
		
		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_SEMEN_BOOBS,
		
		LAYER_TYPE_STRAY_FACE,
		LAYER_TYPE_STRAY_BOOBS,
		
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_SWEAT
	]
	layerArray = layerArray.concat(tempArray);
		
	if(!mergedHoppeArray && this.tachieHoppe.includes('fera')) {
		layerArray = layerArray.concat(hoppeArray);
		mergedHoppeArray = true;
	}	
		
	tempArray = [	
		LAYER_TYPE_MOUTH
	]
	layerArray = layerArray.concat(tempArray);

	
	if(!mergedHoppeArray) {
		layerArray = layerArray.concat(hoppeArray);
		mergedHoppeArray = true;
	}	
		
	tempArray = [	
		LAYER_TYPE_COCK_MOUTH,
		
		LAYER_TYPE_HAIR,
		LAYER_TYPE_LEFT_ARM,
		LAYER_TYPE_TIE,
		LAYER_TYPE_BOOBS,
		LAYER_TYPE_BODY,
		
		LAYER_TYPE_SEMEN_BACK,
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_WET,
		
		LAYER_TYPE_STRAY_BUTT,
		
		LAYER_TYPE_BUTT,
		
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		LAYER_TYPE_RIGHT_ARM,
		
		LAYER_TYPE_SEMEN_FLOOR
	]
	layerArray = layerArray.concat(tempArray);
	
	return layerArray;
};

//Orc Paizuri
Game_Actor.prototype.getLayerLoadout_OrcPaizuri = function() {
	let layerArray = [];
	let tempArray = [];	
	
	let mergedHoppeArray = false;
	let hoppeArray = [ LAYER_TYPE_HOPPE ];
	
	let mergedLeftArmArray = false;
	let leftArmArray = [ LAYER_TYPE_LEFT_ARM ];
	
	let mergedRightArmArray = false;
	let rightArmArray = [ LAYER_TYPE_RIGHT_ARM ];
	
	let hasLeftHandjob = this.isBodySlotPenis(LEFT_HAND_ID);
	let hasRightHandjob = this.isBodySlotPenis(RIGHT_HAND_ID);
	
	tempArray = [
		LAYER_TYPE_SEMEN_COCK_MOUTH,
		LAYER_TYPE_SEMEN_COCK_RIGHT_ARM,
		LAYER_TYPE_SEMEN_COCK_LEFT_ARM,
		
		LAYER_TYPE_SEMEN_BOOBS,
		LAYER_TYPE_SEMEN_COCK_BOOBS,
		
		
		LAYER_TYPE_STRAY_FACE,
		LAYER_TYPE_STRAY_BOOBS,
		
		LAYER_TYPE_SEMEN_FACE,

		LAYER_TYPE_HAT,
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_SWEAT
	]
	layerArray = layerArray.concat(tempArray);
		
	if(!mergedHoppeArray && this.tachieHoppe.includes('fera')) {
		layerArray = layerArray.concat(hoppeArray);
		mergedHoppeArray = true;
	}	
		
	tempArray = [	
		LAYER_TYPE_MOUTH,
		LAYER_TYPE_COCK_MOUTH
	]
	layerArray = layerArray.concat(tempArray);
		
	if(!mergedHoppeArray) {
		layerArray = layerArray.concat(hoppeArray);
		mergedHoppeArray = true;
	}	
		
	tempArray = [		
		LAYER_TYPE_COCK_LEFT_ARM,
		LAYER_TYPE_COCK_RIGHT_ARM,
		
		LAYER_TYPE_FRONT_A,
		LAYER_TYPE_BOOBS,

		LAYER_TYPE_SEMEN_RIGHT_ARM,
		LAYER_TYPE_SEMEN_LEFT_ARM
	]
	layerArray = layerArray.concat(tempArray);	

	
	
	if(!mergedRightArmArray && hasRightHandjob) {
		layerArray = layerArray.concat(rightArmArray);
		mergedRightArmArray = true;
	}	
	
	if(!mergedLeftArmArray && hasLeftHandjob) {
		layerArray = layerArray.concat(leftArmArray);
		mergedLeftArmArray = true;
	}
	
	tempArray = [		
		LAYER_TYPE_COCK_BOOBS,
	
		LAYER_TYPE_TIE,
	
		LAYER_TYPE_HAIR,
		LAYER_TYPE_BODY
	]
	layerArray = layerArray.concat(tempArray);	
	
	if(!mergedRightArmArray) {
		layerArray = layerArray.concat(rightArmArray);
		mergedRightArmArray = true;
	}	
	
	if(!mergedLeftArmArray) {
		layerArray = layerArray.concat(leftArmArray);
		mergedLeftArmArray = true;
	}	

	tempArray = [	
		LAYER_TYPE_SEMEN_FLOOR
	]
	layerArray = layerArray.concat(tempArray);
	
	return layerArray;
};


//Paizuri Laying
Game_Actor.prototype.getLayerLoadout_PaizuriLaying = function() {
	let layerArray = [];
	let tempArray = [];	
	
	let mergedHoppeArray = false;
	let hoppeArray = [ LAYER_TYPE_HOPPE ];
	
	let rightArmIsHj = this.tachieRightArm.includes('hj');
	
	tempArray = [
		LAYER_TYPE_HAT,
	
		LAYER_TYPE_SEMEN_COCK_MOUTH,
		LAYER_TYPE_SEMEN_COCK_RIGHT_ARM,
		
		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_STRAY_FACE,
		
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_SWEAT
	]
	layerArray = layerArray.concat(tempArray);
		
	if(!mergedHoppeArray && this.tachieHoppe.includes('fera')) {
		layerArray = layerArray.concat(hoppeArray);
		mergedHoppeArray = true;
	}	
	
	tempArray = [	
		LAYER_TYPE_MOUTH
	]
	layerArray = layerArray.concat(tempArray);
		
	if(!mergedHoppeArray) {
		layerArray = layerArray.concat(hoppeArray);
		mergedHoppeArray = true;
	}	
		
	tempArray = [
		LAYER_TYPE_COCK_MOUTH,
		
		LAYER_TYPE_FRONT_B,
		LAYER_TYPE_FRONT_A,
		
		LAYER_TYPE_SEMEN_BOOBS,
		LAYER_TYPE_SEMEN_LEFT_ARM,
		
		LAYER_TYPE_STRAY_BOOBS,
		
		LAYER_TYPE_LEFT_ARM,
		LAYER_TYPE_TIE,
		LAYER_TYPE_LEFT_BOOB
	]
	layerArray = layerArray.concat(tempArray);	
		
	if(!rightArmIsHj) {
		tempArray = [	
			LAYER_TYPE_RIGHT_ARM,
			LAYER_TYPE_RIGHT_BOOB,
			LAYER_TYPE_SEMEN_RIGHT_ARM
		]
		layerArray = layerArray.concat(tempArray);
	}		
		
	tempArray = [	
		LAYER_TYPE_SEMEN_COCK_BOOBS,
		LAYER_TYPE_COCK_BOOBS,
		
		LAYER_TYPE_HAIR
	]
	layerArray = layerArray.concat(tempArray);
		
	if(rightArmIsHj) {
		tempArray = [	
			LAYER_TYPE_RIGHT_BOOB,
			LAYER_TYPE_SEMEN_RIGHT_ARM,
			LAYER_TYPE_COCK_RIGHT_ARM,
			LAYER_TYPE_RIGHT_ARM
		]
		layerArray = layerArray.concat(tempArray);
	}		
		
	tempArray = [
		LAYER_TYPE_BACK_A,
		
		LAYER_TYPE_SEMEN_BUTT,
		LAYER_TYPE_STRAY_BUTT,
		
		LAYER_TYPE_BODY,
		
		LAYER_TYPE_TOY_ANAL,
		LAYER_TYPE_TOY_PUSSY,
		
		LAYER_TYPE_SEMEN_COCK_PUSSY,
		LAYER_TYPE_SEMEN_COCK_ANAL,
		LAYER_TYPE_COCK_ANAL,
		LAYER_TYPE_COCK_PUSSY,
		
		LAYER_TYPE_SEMEN_FLOOR
	]
	layerArray = layerArray.concat(tempArray);
	
	return layerArray;
};

//Yeti Paizuri
Game_Actor.prototype.getLayerLoadout_YetiPaizuri = function() {
	let layerArray = [];
	
	let mergedBoobsArray = false;
	let boobsArray = [ LAYER_TYPE_BOOBS ];
	
	let mergedStrayBoobsArray = false;
	let strayBoobsArray = [ LAYER_TYPE_STRAY_BOOBS ];
	
	let isPcup = this.boobsSizeIsPCup();
	
	tempArray = [
		LAYER_TYPE_HAT,
		
		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_SEMEN_BOOBS,
		LAYER_TYPE_SEMEN_LEFT_ARM,

		LAYER_TYPE_STRAY_FACE
	]
	layerArray = layerArray.concat(tempArray);
		
	if(isPcup) {
		if(!mergedStrayBoobsArray) {
			layerArray = layerArray.concat(strayBoobsArray);
			mergedStrayBoobsArray = true;
		}
	}	
	
	tempArray = [
		LAYER_TYPE_LEFT_ARM
	]
	layerArray = layerArray.concat(tempArray);
	
	if(isPcup) {
		if(!mergedBoobsArray) {
			layerArray = layerArray.concat(boobsArray);
			mergedBoobsArray = true;
		}
	}

	if(this.tachieHead.includes('close')) {
		tempArray = [	
			LAYER_TYPE_EYEBROWS,
			LAYER_TYPE_EYES,
			LAYER_TYPE_SWEAT,
			LAYER_TYPE_HOPPE,
			LAYER_TYPE_MOUTH,
			LAYER_TYPE_HAIR
		]
		layerArray = layerArray.concat(tempArray);	
	}
	else {
		tempArray = [	
			LAYER_TYPE_EYEBROWS,
			LAYER_TYPE_EYES,
			LAYER_TYPE_SWEAT,
			LAYER_TYPE_HAIR,
			LAYER_TYPE_HOPPE,
			LAYER_TYPE_MOUTH
		]
		layerArray = layerArray.concat(tempArray);	
	}

	tempArray = [	
		LAYER_TYPE_FRONT_A
	]
	layerArray = layerArray.concat(tempArray);	
	
	if(!mergedStrayBoobsArray) {
		layerArray = layerArray.concat(strayBoobsArray);
		mergedStrayBoobsArray = true;
	}
	
	tempArray = [	
		LAYER_TYPE_STRAY_GROIN,
		LAYER_TYPE_STRAY_BUTT
	]
	layerArray = layerArray.concat(tempArray);	
		
	if(!mergedBoobsArray) {
		layerArray = layerArray.concat(boobsArray);
		mergedBoobsArray = true;
	}	
		
	tempArray = [	
		LAYER_TYPE_SEMEN_COCK_BOOBS,
		LAYER_TYPE_SEMEN_BACK,
		LAYER_TYPE_SEMEN_BELLY,
		LAYER_TYPE_SEMEN_BUTT,
		LAYER_TYPE_SEMEN_ANAL,
		LAYER_TYPE_SEMEN_PUSSY,
		
		LAYER_TYPE_COCK_BOOBS,
		LAYER_TYPE_PUBIC,
		
		LAYER_TYPE_TOY_CLIT,
		
		LAYER_TYPE_BODY,
		
		LAYER_TYPE_HEAD,
		LAYER_TYPE_BACK_A,
		
		LAYER_TYPE_TOY_ANAL,
		LAYER_TYPE_TOY_PUSSY,
		
		LAYER_TYPE_SEMEN_COCK_ANAL,
		LAYER_TYPE_SEMEN_COCK_PUSSY,
		
		LAYER_TYPE_COCK_ANAL,
		LAYER_TYPE_COCK_PUSSY,
		
		LAYER_TYPE_SEMEN_FLOOR

	]
	layerArray = layerArray.concat(tempArray);
	
	return layerArray;
};

//Yeti Carry
Game_Actor.prototype.getLayerLoadout_YetiCarry = function() {
	let layerArray = [];
	
	layerArray = [
		LAYER_TYPE_HAT,
	
		LAYER_TYPE_TOY_ANAL,
		LAYER_TYPE_SEMEN_COCK_ANAL,
		LAYER_TYPE_COCK_ANAL,
		
		LAYER_TYPE_SEMEN_LEFT_ARM,
		LAYER_TYPE_SEMEN_ANAL,
		LAYER_TYPE_SEMEN_COCK_PUSSY,
		LAYER_TYPE_SEMEN_PUSSY,
		
		LAYER_TYPE_LEFT_ARM,
		
		LAYER_TYPE_COCK_PUSSY,
		LAYER_TYPE_PUBIC,
		LAYER_TYPE_HOLE_ANUS,
		
		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_SEMEN_BOOBS,
		LAYER_TYPE_SEMEN_BUTT,
		LAYER_TYPE_SEMEN_BACK,
		LAYER_TYPE_WET,
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		
		LAYER_TYPE_STRAY_FACE,
		LAYER_TYPE_STRAY_BOOBS,
		LAYER_TYPE_STRAY_GROIN,
		LAYER_TYPE_STRAY_BUTT,
		
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HOPPE,
		LAYER_TYPE_MOUTH,
		LAYER_TYPE_HAIR,
		
		LAYER_TYPE_FRONT_A,
		
		LAYER_TYPE_BODY,
		LAYER_TYPE_RIGHT_ARM,
		LAYER_TYPE_BOOBS,
		
		LAYER_TYPE_BACK_A,
		
		LAYER_TYPE_SEMEN_FLOOR
	]
	
	return layerArray;
};

//Rimjob
Game_Actor.prototype.getLayerLoadout_Rimjob = function() {
	let layerArray = [];
	
	layerArray = [
		LAYER_TYPE_HAT,
	
		LAYER_TYPE_SEMEN_LEFT_ARM,
		LAYER_TYPE_FRONT_A,
		LAYER_TYPE_FRONT_B,
		
		LAYER_TYPE_SEMEN_FACE,
		
		LAYER_TYPE_STRAY_FACE,
		LAYER_TYPE_STRAY_BOOBS,
		
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_MOUTH,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HAIR,
		LAYER_TYPE_HOPPE,
		
		LAYER_TYPE_SEMEN_BOOBS,
		
		LAYER_TYPE_TIE,
		LAYER_TYPE_BOOBS,
		
		LAYER_TYPE_SEMEN_BELLY,
		LAYER_TYPE_TOY_CLIT,
		
		LAYER_TYPE_STRAY_GROIN,
		LAYER_TYPE_STRAY_BUTT,
		
		LAYER_TYPE_PUBIC,
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_WET,
		
		LAYER_TYPE_SEMEN_ANAL,
		LAYER_TYPE_SEMEN_BUTT,
		
		LAYER_TYPE_BODY,
		
		LAYER_TYPE_TOY_ANAL,
		LAYER_TYPE_TOY_PUSSY,
		
		LAYER_TYPE_SEMEN_COCK_PUSSY,
		LAYER_TYPE_SEMEN_COCK_ANAL,
		LAYER_TYPE_COCK_ANAL,
		LAYER_TYPE_COCK_PUSSY,
		
		LAYER_TYPE_SEMEN_FLOOR
	]
	
	return layerArray;
};

//Slime Piledriver
Game_Actor.prototype.getLayerLoadout_SlimePiledriver = function() {
	let layerArray = [];
	let tempArray = [];	
	
	let mergedHoppeArray = false;
	let hoppeArray = [ LAYER_TYPE_HOPPE ];
	
	tempArray = [
		LAYER_TYPE_FRONT_B,

		LAYER_TYPE_TOY_PUSSY,

		LAYER_TYPE_SEMEN_COCK_PUSSY,
		LAYER_TYPE_COCK_PUSSY,
		
		
		LAYER_TYPE_TOY_CLIT,
		
		LAYER_TYPE_SEMEN_ANAL,
		LAYER_TYPE_SEMEN_PUSSY,
		
		LAYER_TYPE_STRAY_GROIN,
		LAYER_TYPE_STRAY_BUTT,
		
		LAYER_TYPE_PUBIC,
		
		LAYER_TYPE_HOLE_PUSSY,
		LAYER_TYPE_COCK_ANAL,
		
		LAYER_TYPE_SEMEN_BUTT,
		LAYER_TYPE_WET,
		
		LAYER_TYPE_FRONT_A,
		
		LAYER_TYPE_SEMEN_BELLY,
		LAYER_TYPE_SEMEN_BOOBS,
		
		LAYER_TYPE_STRAY_BOOBS,
		
		LAYER_TYPE_LEFT_BOOB,
		
		LAYER_TYPE_SEMEN_COCK_MOUTH,
		LAYER_TYPE_SEMEN_FACE,
		
		LAYER_TYPE_STRAY_FACE,
		
		LAYER_TYPE_SWEAT
	]
	layerArray = layerArray.concat(tempArray);
	
		
	if(!mergedHoppeArray && this.tachieHoppe.includes('fera')) {
		layerArray = layerArray.concat(hoppeArray);
		mergedHoppeArray = true;
	}
		
	tempArray = [	
		LAYER_TYPE_MOUTH,
		LAYER_TYPE_COCK_MOUTH,
		
		LAYER_TYPE_RIGHT_BOOB,
		
		LAYER_TYPE_HAT,
		
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_HAIR
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedHoppeArray) {
		layerArray = layerArray.concat(hoppeArray);
		mergedHoppeArray = true;
	}
	
	tempArray = [	
		LAYER_TYPE_TIE,

		LAYER_TYPE_BODY,
		
		LAYER_TYPE_SEMEN_LEFT_ARM,
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		
		LAYER_TYPE_LEFT_ARM,
		LAYER_TYPE_RIGHT_ARM,
		
		LAYER_TYPE_SEMEN_FLOOR
	]
	layerArray = layerArray.concat(tempArray);
	
	return layerArray;
};


//Footjob
Game_Actor.prototype.getLayerLoadout_Footjob = function() {
	let layerArray = [];
	let tempArray = [];	
	
	tempArray = [
		LAYER_TYPE_HAT,
	
		LAYER_TYPE_FRONT_A,
		
		LAYER_TYPE_SEMEN_COCK_MOUTH,
		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_SEMEN_BELLY,
		LAYER_TYPE_SEMEN_BOOBS,
		LAYER_TYPE_SEMEN_COCK_LEFT_ARM,
		LAYER_TYPE_SEMEN_RIGHT_LEG,
		LAYER_TYPE_SEMEN_LEFT_LEG,
		LAYER_TYPE_SEMEN_COCK_FEET,
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_WET,
		
		LAYER_TYPE_COCK_FEET,
		LAYER_TYPE_TOY_CLIT,
		
		LAYER_TYPE_STRAY_FACE,
		LAYER_TYPE_STRAY_BOOBS,
		LAYER_TYPE_STRAY_GROIN,
		LAYER_TYPE_STRAY_BUTT
	]	
	layerArray = layerArray.concat(tempArray);	
	
	if(this.tachieHead.includes('far')) {
		tempArray = [
			LAYER_TYPE_EYEBROWS,
			LAYER_TYPE_EYES,
			LAYER_TYPE_SWEAT,
			LAYER_TYPE_HOPPE,
			LAYER_TYPE_MOUTH,
			LAYER_TYPE_COCK_MOUTH,
			LAYER_TYPE_HAIR,
			LAYER_TYPE_HEAD
		]
		layerArray = layerArray.concat(tempArray);	
	}
	
	if(this.tachieHead.includes('close')) {
		tempArray = [
			LAYER_TYPE_EYEBROWS,
			LAYER_TYPE_EYES,
			LAYER_TYPE_MOUTH,
			LAYER_TYPE_SWEAT,
			LAYER_TYPE_HAIR,
			LAYER_TYPE_HOPPE,
			LAYER_TYPE_HEAD
		]
		layerArray = layerArray.concat(tempArray);	
	}
		
	tempArray = [
		LAYER_TYPE_TIE,
		LAYER_TYPE_BOOBS,
		LAYER_TYPE_BODY,
		
		LAYER_TYPE_SEMEN_LEFT_ARM,
		LAYER_TYPE_COCK_LEFT_ARM,
		LAYER_TYPE_LEFT_ARM,
		
		LAYER_TYPE_RIGHT_ARM,
		
		LAYER_TYPE_SEMEN_FLOOR
	]
	layerArray = layerArray.concat(tempArray);	
	
	return layerArray;
};

//Lizardman Cowgirl
Game_Actor.prototype.getLayerLoadout_LizardmanCowgirl = function() {
	let layerArray = [];
	let tempArray = [];	
	let givingBJ = this.isBodySlotPenis(MOUTH_ID);

	tempArray = [
		LAYER_TYPE_HAT,
		
		LAYER_TYPE_TOY_ANAL,
	
		LAYER_TYPE_SEMEN_COCK_RIGHT_ARM,
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		
		LAYER_TYPE_RIGHT_ARM,
		
		LAYER_TYPE_SEMEN_COCK_MOUTH,
		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_SEMEN_COCK_ANAL,
		
		LAYER_TYPE_STRAY_FACE,
		LAYER_TYPE_STRAY_BOOBS,
		
		LAYER_TYPE_COCK_RIGHT_ARM,
		LAYER_TYPE_COCK_ANAL,
		
		LAYER_TYPE_SEMEN_BOOBS,
		
		LAYER_TYPE_SEMEN_MOUTH,
		LAYER_TYPE_SEMEN_COCK_PUSSY,
		LAYER_TYPE_SEMEN_ANAL,
		LAYER_TYPE_SEMEN_BUTT,
		LAYER_TYPE_SEMEN_BACK,
		LAYER_TYPE_SEMEN_PUSSY,
		
		LAYER_TYPE_STRAY_GROIN,
		LAYER_TYPE_STRAY_BUTT,
		
		LAYER_TYPE_HOLE_ANUS,
		
		LAYER_TYPE_WET,
		
		LAYER_TYPE_PUBIC,
		LAYER_TYPE_COCK_PUSSY,
		LAYER_TYPE_BODY,
		LAYER_TYPE_BOOBS
	]	
	layerArray = layerArray.concat(tempArray);
		
	if(givingBJ) {
		tempArray = [	
			LAYER_TYPE_EYEBROWS,
			LAYER_TYPE_EYES,
			LAYER_TYPE_SWEAT,
			LAYER_TYPE_HOPPE,
			LAYER_TYPE_MOUTH
		]
		layerArray = layerArray.concat(tempArray);
	}
	else {
		tempArray = [	
			LAYER_TYPE_EYEBROWS,
			LAYER_TYPE_EYES,
			LAYER_TYPE_MOUTH,
			LAYER_TYPE_SWEAT,
			LAYER_TYPE_HOPPE
		]
		layerArray = layerArray.concat(tempArray);
	}
		

	tempArray = [	
		LAYER_TYPE_COCK_MOUTH,
		LAYER_TYPE_HAIR,
		LAYER_TYPE_HEAD,
		
		LAYER_TYPE_BACK_A,
		
		LAYER_TYPE_SEMEN_FLOOR
	]
	layerArray = layerArray.concat(tempArray);

	return layerArray;
};

//Karryn Cowgirl
Game_Actor.prototype.getLayerLoadout_KarrynCowgirl = function() {
	let layerArray = [];
	let tempArray = [];
	
	let mergedHoppeArray = false;
	let hoppeArray = [ LAYER_TYPE_HOPPE ];
	
	let mergedBackBArray = false;
	let backBArray = [ LAYER_TYPE_BACK_B ];
	
	let mergedBoobsArray = false;
	let boobsArray = [ LAYER_TYPE_BOOBS ];
	
	let mergedSemenArmsArray = false;
	let semenArmsArray = [ LAYER_TYPE_SEMEN_RIGHT_ARM, LAYER_TYPE_SEMEN_LEFT_ARM ];
	
	let givingZuri = this.tachieBoobs.includes('zuri');

	tempArray = [	
		LAYER_TYPE_HAT,
		LAYER_TYPE_TOY_CLIT,
	
		LAYER_TYPE_SEMEN_COCK_MOUTH,
		LAYER_TYPE_SEMEN_COCK_BOOBS,
		LAYER_TYPE_SEMEN_FACE
	]
	layerArray = layerArray.concat(tempArray);	
		
	if(!mergedSemenArmsArray && givingZuri) {
		layerArray = layerArray.concat(semenArmsArray);
		mergedSemenArmsArray = true;
	}

	tempArray = [	
		LAYER_TYPE_STRAY_FACE,
		
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_SWEAT
	]
	layerArray = layerArray.concat(tempArray);
		
	if(!mergedHoppeArray && this.tachieHoppe.includes('fera')) {
		layerArray = layerArray.concat(hoppeArray);
		mergedHoppeArray = true;
	}
	
	tempArray = [	
		LAYER_TYPE_MOUTH,
		LAYER_TYPE_COCK_MOUTH,
		LAYER_TYPE_HAIR
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedHoppeArray) {
		layerArray = layerArray.concat(hoppeArray);
		mergedHoppeArray = true;
	}
		
	tempArray = [	
		LAYER_TYPE_FRONT_A,
		LAYER_TYPE_COCK_BOOBS,
		LAYER_TYPE_SEMEN_BOOBS,
		LAYER_TYPE_STRAY_BOOBS
	]
	layerArray = layerArray.concat(tempArray);
		
	if(!mergedBoobsArray && givingZuri) {
		layerArray = layerArray.concat(boobsArray);
		mergedBoobsArray = true;
	}
	
	if(!givingZuri) {	
		tempArray = [	
			LAYER_TYPE_TIE
		]
		layerArray = layerArray.concat(tempArray);	
	}
		
	if(!mergedBoobsArray) {
		layerArray = layerArray.concat(boobsArray);
		mergedBoobsArray = true;
	}	
	
	if(!mergedSemenArmsArray) {
		layerArray = layerArray.concat(semenArmsArray);
		mergedSemenArmsArray = true;
	}
		
	tempArray = [		
		LAYER_TYPE_SEMEN_BELLY,
		
		LAYER_TYPE_FRONT_B,
		
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_SEMEN_COCK_PUSSY,
		LAYER_TYPE_WET,
		
		LAYER_TYPE_STRAY_GROIN,
		
		LAYER_TYPE_PUBIC,
		LAYER_TYPE_BODY,
		
		LAYER_TYPE_FRONT_C
	]
	layerArray = layerArray.concat(tempArray);	
		
	if(!mergedBackBArray && (this.tachieBackB.includes('orc') || this.tachieBackB.includes('nerd'))) {
		layerArray = layerArray.concat(backBArray);
		mergedBackBArray = true;
	}

	tempArray = [	
		LAYER_TYPE_COCK_PUSSY
	]
	layerArray = layerArray.concat(tempArray);

	if(!mergedBackBArray) {
		layerArray = layerArray.concat(backBArray);
		mergedBackBArray = true;
	}
	
	tempArray = [	
		LAYER_TYPE_BACK_A,
		
		LAYER_TYPE_SEMEN_FLOOR
	]
	layerArray = layerArray.concat(tempArray);

	return layerArray;
};

//Reverse Cowgirl
Game_Actor.prototype.getLayerLoadout_ReverseCowgirl = function() {
	let layerArray = [];
	let tempArray = [];
	
	let mergedLeftArmArray = false;
	let leftArmArray = [ LAYER_TYPE_LEFT_ARM ];
	
	let mergedSemenLeftArmArray = false;
	let semenLeftArmArray = [ LAYER_TYPE_SEMEN_LEFT_ARM ];
	
	let mergedRightArmArray = false;
	let rightArmArray = [ LAYER_TYPE_RIGHT_ARM ];
	
	let hasLeftHandjob = this.isBodySlotPenis(LEFT_HAND_ID);
	let hasRightHandjob = this.isBodySlotPenis(RIGHT_HAND_ID);
	
	tempArray = [	
		LAYER_TYPE_HAT,
		
		LAYER_TYPE_SEMEN_COCK_ANAL,
		LAYER_TYPE_SEMEN_COCK_MOUTH,
		LAYER_TYPE_SEMEN_COCK_RIGHT_ARM,
		LAYER_TYPE_SEMEN_COCK_LEFT_ARM,
		
		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_SEMEN_RIGHT_ARM
	]
	layerArray = layerArray.concat(tempArray);	
		
	if(!mergedSemenLeftArmArray && hasLeftHandjob) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmArray = true;
	}	
	
	tempArray = [	
		LAYER_TYPE_SEMEN_BUTT,
		LAYER_TYPE_SEMEN_BACK,
		
		LAYER_TYPE_STRAY_BUTT,
		
		LAYER_TYPE_HOPPE,
		LAYER_TYPE_SWEAT,
		
		LAYER_TYPE_COCK_ANAL,
		LAYER_TYPE_BUTT
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedLeftArmArray && hasLeftHandjob) {
		layerArray = layerArray.concat(leftArmArray);
		mergedLeftArmArray = true;
	}
	if(!mergedRightArmArray && hasRightHandjob) {
		layerArray = layerArray.concat(rightArmArray);
		mergedRightArmArray = true;
	}
	
	tempArray = [	
		LAYER_TYPE_COCK_LEFT_ARM,
		LAYER_TYPE_COCK_RIGHT_ARM,
		
		LAYER_TYPE_SEMEN_LEFT_ARM,
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		LAYER_TYPE_SEMEN_BOOBS,
		
		LAYER_TYPE_STRAY_BOOBS,
		
		LAYER_TYPE_BODY,
		LAYER_TYPE_BOOBS
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedSemenLeftArmArray) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmArray = true;
	}	
	
	if(!mergedLeftArmArray) {
		layerArray = layerArray.concat(leftArmArray);
		mergedLeftArmArray = true;
	}
	if(!mergedRightArmArray) {
		layerArray = layerArray.concat(rightArmArray);
		mergedRightArmArray = true;
	}
	
	tempArray = [	
		LAYER_TYPE_HAIR,
		LAYER_TYPE_HEAD,
		
		LAYER_TYPE_COCK_MOUTH,
		LAYER_TYPE_BACK_A,
		
		LAYER_TYPE_SEMEN_FLOOR
	]
	layerArray = layerArray.concat(tempArray);
	
	return layerArray;
};


Game_Actor.prototype.getLayerLoadout_MasturbateInBattle = function() {
	let layerArray = [];
	let tempArray = [];
	
	let mergedRightArmArray = false;
	let rightArmArray = [ LAYER_TYPE_RIGHT_ARM ];
	let mergedLeftArmArray = false;
	let leftArmArray = [ LAYER_TYPE_LEFT_ARM ];
	let mergedSemenRightArmArray = false;
	let semenRightArmArray = [ LAYER_TYPE_SEMEN_RIGHT_ARM ];
	let mergedSemenLeftArmArray = false;
	let semenLeftArmArray = [ LAYER_TYPE_SEMEN_LEFT_ARM ];
	let mergedSemenRightBoobArray = false;
	let semenRightBoobArray = [ LAYER_TYPE_SEMEN_RIGHT_BOOB ];
	let mergedSemenLeftBoobArray = false;
	let semenLeftBoobArray = [ LAYER_TYPE_SEMEN_LEFT_BOOB ];
	let mergedWetArray = false;
	let wetArray = [ LAYER_TYPE_WET ];
	let mergedStrayRightBoobArray = false;
	let strayRightBoobArray = [ LAYER_TYPE_STRAY_RIGHT_BOOB ];
	let mergedStrayLeftBoobArray = false;
	let strayLeftBoobArray = [ LAYER_TYPE_STRAY_LEFT_BOOB ];
	
	let leftArmIsNormal = this.tachieLeftArm.includes('normal');
	let rightArmIsNormal = this.tachieRightArm.includes('normal');
	let leftArmIsOppai = this.tachieLeftArm.includes('touch_oppai');
	let rightArmIsOppai = this.tachieRightArm.includes('touch_oppai');
	let leftArmIsChikubi = this.tachieLeftArm.includes('touch_chikubi');
	let rightArmIsChikubi = this.tachieRightArm.includes('touch_chikubi');
	let leftArmIsSuckFinger = this.tachieLeftArm.includes('suck_fingers');
	let rightArmIsSuckFinger = this.tachieRightArm.includes('suck_fingers');
	let leftArmIsKuri = this.tachieLeftArm.includes('touch_kuri');
	let rightArmIsKuri = this.tachieRightArm.includes('touch_kuri');
	let leftArmIsOmanko = this.tachieLeftArm.includes('finger_omanko');
	let rightArmIsOmanko = this.tachieRightArm.includes('finger_omanko');
	let leftArmIsAnaru = this.tachieLeftArm.includes('finger_anaru');
	let rightArmIsAnaru = this.tachieRightArm.includes('finger_anaru');
	let leftArmIsToyP = this.tachieLeftArm.includes('play_toyP');
	let rightArmIsToyP = this.tachieRightArm.includes('play_toyP');
	let frontBIsArmsHalberd = this.tachieFrontB.includes('arms_halberd');
	

	if(frontBIsArmsHalberd) {
		tempArray = [
			LAYER_TYPE_FRONT_A,
			
			LAYER_TYPE_SEMEN_RIGHT_ARM,
			LAYER_TYPE_SEMEN_LEFT_ARM,
			LAYER_TYPE_SEMEN_BOOBS,
			LAYER_TYPE_WET,
			
			LAYER_TYPE_STRAY_RIGHT_BOOB,
			LAYER_TYPE_STRAY_LEFT_BOOB,
			
			LAYER_TYPE_FRONT_B,
			
			LAYER_TYPE_HAT
		]
		layerArray = layerArray.concat(tempArray);
		
		mergedSemenRightArmArray = true;
		mergedSemenLeftArmArray = true;
		mergedWetArray = true;
		mergedSemenRightBoobArray = true;
		mergedSemenLeftBoobArray = true;
		mergedStrayRightBoobArray = true;
		mergedStrayLeftBoobArray = true;
	}
	else {
		tempArray = [
			LAYER_TYPE_FRONT_A,
			
			LAYER_TYPE_HAT,
			LAYER_TYPE_FRONT_C
		]
		layerArray = layerArray.concat(tempArray);
	}
	
	if(!mergedSemenRightBoobArray && rightArmIsSuckFinger) {
		layerArray = layerArray.concat(semenRightBoobArray);
		mergedSemenRightBoobArray = true;
	}	
	if(!mergedSemenLeftBoobArray && leftArmIsSuckFinger) {
		layerArray = layerArray.concat(semenLeftBoobArray);
		mergedSemenLeftBoobArray = true;
	}	
	
	if(!mergedSemenRightBoobArray && rightArmIsOppai) {
		layerArray = layerArray.concat(semenRightBoobArray);
		mergedSemenRightBoobArray = true;
	}	
	if(!mergedSemenLeftBoobArray && leftArmIsOppai) {
		layerArray = layerArray.concat(semenLeftBoobArray);
		mergedSemenLeftBoobArray = true;
	}	
	
	if(!mergedSemenRightBoobArray && rightArmIsChikubi) {
		layerArray = layerArray.concat(semenRightBoobArray);
		mergedSemenRightBoobArray = true;
	}	
	if(!mergedSemenLeftBoobArray && leftArmIsChikubi) {
		layerArray = layerArray.concat(semenLeftBoobArray);
		mergedSemenLeftBoobArray = true;
	}
	
	if(!mergedSemenRightBoobArray && rightArmIsToyP) {
		layerArray = layerArray.concat(semenRightBoobArray);
		mergedSemenRightBoobArray = true;
	}	
	if(!mergedSemenLeftBoobArray && leftArmIsToyP) {
		layerArray = layerArray.concat(semenLeftBoobArray);
		mergedSemenLeftBoobArray = true;
	}
	
	if(!mergedSemenRightBoobArray && rightArmIsOmanko) {
		layerArray = layerArray.concat(semenRightBoobArray);
		mergedSemenRightBoobArray = true;
	}	
	if(!mergedSemenLeftBoobArray && leftArmIsOmanko) {
		layerArray = layerArray.concat(semenLeftBoobArray);
		mergedSemenLeftBoobArray = true;
	}
	
	if(!mergedSemenRightBoobArray && rightArmIsKuri) {
		layerArray = layerArray.concat(semenRightBoobArray);
		mergedSemenRightBoobArray = true;
	}	
	if(!mergedSemenLeftBoobArray && leftArmIsKuri) {
		layerArray = layerArray.concat(semenLeftBoobArray);
		mergedSemenLeftBoobArray = true;
	}
	
	if(!mergedSemenRightBoobArray && rightArmIsNormal) {
		layerArray = layerArray.concat(semenRightBoobArray);
		mergedSemenRightBoobArray = true;
	}	
	if(!mergedSemenLeftBoobArray && leftArmIsNormal) {
		layerArray = layerArray.concat(semenLeftBoobArray);
		mergedSemenLeftBoobArray = true;
	}
	
	if(!mergedSemenRightBoobArray && rightArmIsAnaru) {
		layerArray = layerArray.concat(semenRightBoobArray);
		mergedSemenRightBoobArray = true;
	}	
	if(!mergedSemenLeftBoobArray && leftArmIsAnaru) {
		layerArray = layerArray.concat(semenLeftBoobArray);
		mergedSemenLeftBoobArray = true;
	}
	
	if(!mergedSemenRightArmArray && rightArmIsSuckFinger) {
		layerArray = layerArray.concat(semenRightArmArray);
		mergedSemenRightArmArray = true;
	}	
	if(!mergedSemenLeftArmArray && leftArmIsSuckFinger) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmArray = true;
	}	
	
	if(!mergedSemenRightArmArray && rightArmIsOppai) {
		layerArray = layerArray.concat(semenRightArmArray);
		mergedSemenRightArmArray = true;
	}	
	if(!mergedSemenLeftArmArray && leftArmIsOppai) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmArray = true;
	}	
	
	if(!mergedSemenRightArmArray && rightArmIsToyP) {
		layerArray = layerArray.concat(semenRightArmArray);
		mergedSemenRightArmArray = true;
	}	
	if(!mergedSemenLeftArmArray && leftArmIsToyP) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmArray = true;
	}	
	
	if(!mergedSemenLeftArmArray && leftArmIsOmanko) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmArray = true;
	}
	if(!mergedSemenRightArmArray && rightArmIsOmanko) {
		layerArray = layerArray.concat(semenRightArmArray);
		mergedSemenRightArmArray = true;
	}		
	
	if(!mergedSemenRightArmArray && rightArmIsKuri) {
		layerArray = layerArray.concat(semenRightArmArray);
		mergedSemenRightArmArray = true;
	}	
	if(!mergedSemenLeftArmArray && leftArmIsKuri) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmArray = true;
	}	
	
	if(!mergedSemenRightArmArray && rightArmIsNormal) {
		layerArray = layerArray.concat(semenRightArmArray);
		mergedSemenRightArmArray = true;
	}	
	if(!mergedSemenLeftArmArray && leftArmIsNormal) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmArray = true;
	}	
	
	if(!mergedSemenRightArmArray && rightArmIsChikubi) {
		layerArray = layerArray.concat(semenRightArmArray);
		mergedSemenRightArmArray = true;
	}	
	if(!mergedSemenLeftArmArray && leftArmIsChikubi) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmArray = true;
	}	
	
	if(!mergedSemenRightArmArray && rightArmIsAnaru) {
		layerArray = layerArray.concat(semenRightArmArray);
		mergedSemenRightArmArray = true;
	}	
	if(!mergedSemenLeftArmArray && leftArmIsAnaru) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmArray = true;
	}	
	
	
		
	if(!mergedStrayRightBoobArray) {
		layerArray = layerArray.concat(strayRightBoobArray);
		mergedStrayRightBoobArray = true;
	}	
	if(!mergedStrayLeftBoobArray) {
		layerArray = layerArray.concat(strayLeftBoobArray);
		mergedStrayLeftBoobArray = true;
	}	
	
	if(!mergedRightArmArray && rightArmIsSuckFinger) {
		layerArray = layerArray.concat(rightArmArray);
		mergedRightArmArray = true;
	}	
	if(!mergedLeftArmArray && leftArmIsSuckFinger) {
		layerArray = layerArray.concat(leftArmArray);
		mergedLeftArmArray = true;
	}	
	
	tempArray = [	
		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_STRAY_FACE,
	
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_MOUTH,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HAIR,
		LAYER_TYPE_HOPPE
	]
	layerArray = layerArray.concat(tempArray);	
	
	if(!mergedRightArmArray && !rightArmIsAnaru) {
		layerArray = layerArray.concat(rightArmArray);
		mergedRightArmArray = true;
	}	

	tempArray = [
		LAYER_TYPE_RIGHT_BOOB,
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedLeftArmArray && !leftArmIsAnaru) {
		layerArray = layerArray.concat(leftArmArray);
		mergedLeftArmArray = true;
	}
	
	tempArray = [	
		LAYER_TYPE_LEFT_BOOB
	]
	layerArray = layerArray.concat(tempArray);
		
		
	tempArray = [		
		LAYER_TYPE_SEMEN_BELLY,
		LAYER_TYPE_SEMEN_PUSSY
	]
	layerArray = layerArray.concat(tempArray);	
		
	if(!mergedWetArray) {
		layerArray = layerArray.concat(wetArray);
		mergedWetArray = true;
	}			
		
	tempArray = [		
		LAYER_TYPE_STRAY_GROIN,
	
		LAYER_TYPE_TOY_CLIT,
		LAYER_TYPE_TOY_PUSSY,
		LAYER_TYPE_TOY_ANAL,
		
		LAYER_TYPE_BOOBS,
		LAYER_TYPE_PUBIC,
		LAYER_TYPE_TIE,
		LAYER_TYPE_BODY
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedRightArmArray && rightArmIsAnaru) {
		layerArray = layerArray.concat(rightArmArray);
		mergedRightArmArray = true;
	}	
	if(!mergedLeftArmArray && leftArmIsAnaru) {
		layerArray = layerArray.concat(leftArmArray);
		mergedLeftArmArray = true;
	}
	
	tempArray = [		
		LAYER_TYPE_SEMEN_FLOOR
	]
	layerArray = layerArray.concat(tempArray);
	
	return layerArray;
};

Game_Actor.prototype.getLayerLoadout_MasturbateCouch = function() {
	let layerArray = [];
	let tempArray = [];	
	
	let isPcup = this.boobsSizeIsPCup();
	let leftArmIsNormal = this.tachieLeftArm.includes('normal');
	
	let mergedRightArmArray = false;
	let rightArmArray = [ LAYER_TYPE_RIGHT_ARM ];
	let mergedLeftArmArray = false;
	let leftArmArray = [ LAYER_TYPE_LEFT_ARM ];
	
	tempArray = [
		LAYER_TYPE_FRONT_A,
		
		LAYER_TYPE_FRONT_C
	]
	layerArray = layerArray.concat(tempArray);
	
	if(isPcup) {
		tempArray = [
			LAYER_TYPE_STRAY_LEFT_BOOB,
			LAYER_TYPE_STRAY_RIGHT_BOOB,
			
			LAYER_TYPE_DROOL_NIPPLES,
			
			LAYER_TYPE_LEFT_BOOB,
			LAYER_TYPE_RIGHT_BOOB
		]
		layerArray = layerArray.concat(tempArray);
	}
	
	tempArray = [
		LAYER_TYPE_FRONT_B
	]
	layerArray = layerArray.concat(tempArray);
		
	if(!leftArmIsNormal && !mergedLeftArmArray) {
		layerArray = layerArray.concat(leftArmArray);
		mergedLeftArmArray = true;
	}	
		
	if(!isPcup) {	
		tempArray = [
			LAYER_TYPE_STRAY_LEFT_BOOB,
			
			LAYER_TYPE_DROOL_NIPPLES,
			LAYER_TYPE_LEFT_BOOB
		]
		layerArray = layerArray.concat(tempArray);
	}	
	
	if(!mergedLeftArmArray) {
		layerArray = layerArray.concat(leftArmArray);
		mergedLeftArmArray = true;
	}	
		
	if(!isPcup) {	
		tempArray = [
			LAYER_TYPE_STRAY_RIGHT_BOOB
		]
		layerArray = layerArray.concat(tempArray);
	}		
		
	tempArray = [
		LAYER_TYPE_STRAY_FACE
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!isPcup) {	
		tempArray = [
			LAYER_TYPE_RIGHT_BOOB
		]
		layerArray = layerArray.concat(tempArray);
	}	
	
	tempArray = [
		LAYER_TYPE_DROOL_FINGERS
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedRightArmArray && (this.tachieRightArm.includes('finger_omanko') || this.tachieRightArm.includes('toyP') || this.tachieRightArm.includes('toyA') || this.tachieRightArm.includes('suck_finger'))) {
		layerArray = layerArray.concat(rightArmArray);
		mergedRightArmArray = true;
	}	
	
	tempArray = [	
		LAYER_TYPE_TOY_ANAL,
	
		LAYER_TYPE_WET_PUSSY_TOY,
		LAYER_TYPE_TOY_PUSSY
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedRightArmArray && this.tachieRightArm.includes('touch_mame')) {
		layerArray = layerArray.concat(rightArmArray);
		mergedRightArmArray = true;
	}	
	
	tempArray = [	
		LAYER_TYPE_TOY_CLIT,
	
		LAYER_TYPE_STRAY_GROIN,
		LAYER_TYPE_STRAY_BUTT,
	
		LAYER_TYPE_WET,
		
		LAYER_TYPE_PUBIC,
		
		LAYER_TYPE_HOLE_PUSSY,
		
		LAYER_TYPE_BODY,
		
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedRightArmArray) {
		layerArray = layerArray.concat(rightArmArray);
		mergedRightArmArray = true;
	}	

	tempArray = [	
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_MOUTH,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HAIR,
		LAYER_TYPE_HOPPE,
		LAYER_TYPE_HEAD
	]
	layerArray = layerArray.concat(tempArray);

	return layerArray;
};

Game_Actor.prototype.getLayerLoadout_Map = function() {
	let layerArray = [];
	let tempArray = [];	
	
	let mergedSemenRightArmArray = false;
	let rightSemenArmArray = [ LAYER_TYPE_SEMEN_RIGHT_ARM ];
	let mergedSemenLeftArmArray = false;
	let leftSemenArmArray = [ LAYER_TYPE_SEMEN_LEFT_ARM ];
	
	let mergedRightArmArray = false;
	let rightArmArray = [ LAYER_TYPE_RIGHT_ARM ];
	let mergedLeftArmArray = false;
	let leftArmArray = [ LAYER_TYPE_LEFT_ARM ];
	
	
	
	tempArray = [
		LAYER_TYPE_FRONT_I,
		LAYER_TYPE_FRONT_H,
		LAYER_TYPE_FRONT_G,
		LAYER_TYPE_FRONT_F,
	
		LAYER_TYPE_HAT,
	
		LAYER_TYPE_SEMEN_FRONT_A,
		LAYER_TYPE_SEMEN_FRONT_B
		
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedSemenLeftArmArray) {
		switch(this.tachieLeftArm) {
			case 'hair_1':
			case 'hair_1_naked':
			case 'defend_1':
			case 'defend_1_naked':
			case 'defend_2':
			case 'defend_2_naked':
			case 'boob1':
			case 'boob1_naked':
			case 'boob2':
			case 'boob2_naked':
			case '5':
			case '5_naked':
			case '3':
			case '3_naked':
				layerArray = layerArray.concat(leftSemenArmArray);
				mergedSemenLeftArmArray = true;
			break;
		}
	}
	
	tempArray = [	
		LAYER_TYPE_FRONT_C,
		LAYER_TYPE_FRONT_D,
		LAYER_TYPE_FRONT_E,
		
		LAYER_TYPE_FRONT_B,
		LAYER_TYPE_FRONT_A
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedLeftArmArray) {
		switch(this.tachieLeftArm) {
			case 'hair_1':
			case 'hair_1_naked':
			case 'defend_1':
			case 'defend_1_naked':
			case 'defend_2':
			case 'defend_2_naked':
			case 'boob1':
			case 'boob1_naked':
			case 'boob2':
			case 'boob2_naked':
			case '5':
			case '5_naked':
			case '3':
			case '3_naked':
				layerArray = layerArray.concat(leftArmArray);
				mergedLeftArmArray = true;
			break;
		}
	}
	
	tempArray = [	
		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_STRAY_FACE,
	
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_MOUTH,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HAIR,
		LAYER_TYPE_HOPPE,

		LAYER_TYPE_HEAD
	]
	layerArray = layerArray.concat(tempArray);

	if(this._tachieBoobsType === 'hold') {
		layerArray = layerArray.concat(leftSemenArmArray);
		mergedSemenLeftArmArray = true;
		layerArray = layerArray.concat(rightSemenArmArray);
		mergedSemenRightArmArray = true;
	}	
	
	tempArray = [
		LAYER_TYPE_SEMEN_BOOBS,
		LAYER_TYPE_STRAY_BOOBS,
		LAYER_TYPE_BOOBS,
		
		LAYER_TYPE_TIE
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedSemenLeftArmArray) {
		layerArray = layerArray.concat(leftSemenArmArray);
		mergedSemenLeftArmArray = true;
	}	
	if(!mergedSemenRightArmArray) {
		layerArray = layerArray.concat(rightSemenArmArray);
		mergedSemenRightArmArray = true;
	}	
	
	if(!mergedLeftArmArray) {
		layerArray = layerArray.concat(leftArmArray);
		mergedLeftArmArray = true;
	}
	
	tempArray = [	
		LAYER_TYPE_SEMEN_BELLY,
		LAYER_TYPE_SEMEN_BUTT
	]
	layerArray = layerArray.concat(tempArray);
		
	
	tempArray = [	
		LAYER_TYPE_BACK_B
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedRightArmArray) {
		switch(this.tachieRightArm) {
			case 'weapon_sado_1':
			case 'weapon_sado_1_naked':
			case 'weapon_maso_1':
			case 'weapon_maso_1_naked':
			case 'weapon_tired_1':
			case 'weapon_tired_1_naked':
			case 'kupa_1':
			case 'kupa_1_naked':
			case 'toyP_grip_1':
			case 'toyP_grip_1_naked':
			case 'kuri_1':
			case 'kuri_1naked':
			case 'cover_1':
			case 'cover_1_naked':
			case 'hip_1':
			case 'hip_1_naked':
			case 'up1':
			case 'up1_naked':
			case 'zipper_1':
			case 'zipper_1_naked':
				layerArray = layerArray.concat(rightArmArray);
				mergedRightArmArray = true;
			break;
		}
	}
		
	tempArray = [	
		LAYER_TYPE_STRAY_GROIN,
		LAYER_TYPE_STRAY_BUTT,

		LAYER_TYPE_HIPS,
		
		LAYER_TYPE_TOY_CLIT,
		LAYER_TYPE_TOY_PUSSY,
	
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_WET,
		LAYER_TYPE_WET_PANTIES,
		LAYER_TYPE_PANTIES,
		
		LAYER_TYPE_PUBIC,
		LAYER_TYPE_BODY,
		
		LAYER_TYPE_BACK_C
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedRightArmArray) {
		layerArray = layerArray.concat(rightArmArray);
		mergedRightArmArray = true;
	}	
	
	tempArray = [	
		LAYER_TYPE_TOY_ANAL,
		
		LAYER_TYPE_BACK_A,
		LAYER_TYPE_BACK_D
	]
	layerArray = layerArray.concat(tempArray);

	return layerArray;
};

//defeated_guard
Game_Actor.prototype.getLayerLoadout_DefeatedGuard = function() {
	let layerArray = [];
	let tempArray = [];
	
	let mergedSemenArmsArray = false;
	let semenArmsArray = [ LAYER_TYPE_SEMEN_RIGHT_ARM, LAYER_TYPE_SEMEN_LEFT_ARM ];
	
	let mergedArmsArray = false;
	let armsArray = [ LAYER_TYPE_RIGHT_ARM, LAYER_TYPE_LEFT_ARM ];
	
	let mergedBoobsArray = false;
	let boobsArray = [ LAYER_TYPE_BOOBS ];
	
	let mergedHatArray = false;
	let hatArray = [ LAYER_TYPE_HAT ];
	
	tempArray = [
		LAYER_TYPE_FRONT_B,
	
		LAYER_TYPE_SEMEN_COCK_PUSSY,
		LAYER_TYPE_SEMEN_COCK_ANAL,
		LAYER_TYPE_SEMEN_COCK_MOUTH,
	
		LAYER_TYPE_TOY_PUSSY,
		LAYER_TYPE_TOY_ANAL,
		LAYER_TYPE_COCK_ANAL,
		LAYER_TYPE_COCK_PUSSY,
		LAYER_TYPE_COCK_MOUTH
	];
	layerArray = layerArray.concat(tempArray);		
		
	if(!mergedSemenArmsArray && this.tachieFrontA) {
		layerArray = layerArray.concat(semenArmsArray);
		mergedSemenArmsArray = true;
	}	
		
	tempArray = [
	
		LAYER_TYPE_FRONT_A,
	
		LAYER_TYPE_SEMEN_COCK_BOOBS
	];
	layerArray = layerArray.concat(tempArray);	
	

	if(!mergedSemenArmsArray && this.tachieLeftArm.contains('zuri')) {
		if(this.tachieBoobs.contains('zuri_karryn')) {
			layerArray = layerArray.concat(semenArmsArray);
			layerArray.push(LAYER_TYPE_SEMEN_BOOBS);
		}
		else {
			layerArray.push(LAYER_TYPE_SEMEN_BOOBS);
			layerArray = layerArray.concat(semenArmsArray);
		}
		mergedSemenArmsArray = true;
	}
	else {
		layerArray.push(LAYER_TYPE_SEMEN_BOOBS);
	}
		
	if(!mergedSemenArmsArray && this.tachieLeftArm.includes('thigh')) {
		layerArray = layerArray.concat(semenArmsArray);
		mergedSemenArmsArray = true;
	}
		
	tempArray = [
		LAYER_TYPE_STRAY_BOOBS,
	
		LAYER_TYPE_COCK_BOOBS,
		
		LAYER_TYPE_TOY_CLIT
	]
	layerArray = layerArray.concat(tempArray);	
	
	if(!mergedBoobsArray && this.tachieBoobs.contains('zuri_enemy')) {
		layerArray = layerArray.concat(boobsArray);	
		mergedBoobsArray = true;
	}
	if(!mergedArmsArray && this.tachieLeftArm.contains('zuri')) {
		layerArray = layerArray.concat(armsArray);	
		mergedArmsArray = true;
	}
	
	if(!mergedBoobsArray && this.tachieBoobs.contains('zuri_karryn')) {
		layerArray = layerArray.concat(boobsArray);	
		mergedBoobsArray = true;
	}
	
	if(!mergedBoobsArray) {
		layerArray = layerArray.concat(boobsArray);	
		mergedBoobsArray = true;
	}
	
	tempArray = [
		LAYER_TYPE_SEMEN_ANAL,
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_SEMEN_BUTT,
		LAYER_TYPE_WET,

		LAYER_TYPE_STRAY_GROIN,
		LAYER_TYPE_STRAY_BUTT
	]
	layerArray = layerArray.concat(tempArray);
	

	/*
	if(!mergedHatArray && this.isWearingWeddingClothing()) {
		layerArray = layerArray.concat(hatArray);	
		mergedHatArray = true;
	}	
	*/
	
	if(!mergedHatArray) {
		layerArray = layerArray.concat(hatArray);	
		mergedHatArray = true;
	}
	
	tempArray = [
		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_STRAY_FACE,
	
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_MOUTH
	]
	layerArray = layerArray.concat(tempArray);	
		
	tempArray = [
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HAIR,
		LAYER_TYPE_HOPPE,
		
		LAYER_TYPE_PUBIC,
		
		LAYER_TYPE_SEMEN_BELLY,
		
		LAYER_TYPE_HOLE_ANUS,
		LAYER_TYPE_HOLE_PUSSY,

		LAYER_TYPE_BODY
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedArmsArray && this.tachieLeftArm.includes('thigh')) {
		layerArray = layerArray.concat(armsArray);	
		mergedArmsArray = true;
	}
	
	if(!mergedSemenArmsArray) {
		layerArray = layerArray.concat(semenArmsArray);
		mergedSemenArmsArray = true;
	}
	
	if(!mergedArmsArray) {
		layerArray = layerArray.concat(armsArray);	
		mergedArmsArray = true;
	}
	
	return layerArray;
};


//Waitress Sex
Game_Actor.prototype.getLayerLoadout_WaitressSex = function() {
	let layerArray = [];
	let tempArray = [];	
	
	let mergedHoppeArray = false;
	let hoppeArray = [ LAYER_TYPE_HOPPE ];
	
	let mergedRightArmArray = false;
	let rightArmArray = [ LAYER_TYPE_RIGHT_ARM ];
	
	let mergedBoobsArray = false;
	let boobsArray = [ LAYER_TYPE_SEMEN_BOOBS,
			LAYER_TYPE_STRAY_BOOBS,
			LAYER_TYPE_BOOBS ];
	
	let isPcup = this.boobsSizeIsPCup();
	
	tempArray = [
		LAYER_TYPE_SEMEN_FRONT_A,
		LAYER_TYPE_FRONT_A,
		
		LAYER_TYPE_SEMEN_COCK_MOUTH,
		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_SEMEN_COCK_RIGHT_ARM,
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		
		LAYER_TYPE_STRAY_FACE,
		
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_SWEAT,
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedHoppeArray && this.tachieHoppe.includes('fera')) {
		layerArray = layerArray.concat(hoppeArray);
		mergedHoppeArray = true;
	}
	
	tempArray = [	
		LAYER_TYPE_MOUTH
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedHoppeArray) {
		layerArray = layerArray.concat(hoppeArray);
		mergedHoppeArray = true;
	}
	
	tempArray = [		
		LAYER_TYPE_COCK_MOUTH,
		LAYER_TYPE_COCK_RIGHT_ARM,
		
		LAYER_TYPE_STRAW,
		LAYER_TYPE_HAIR
	]
	layerArray = layerArray.concat(tempArray);	
		
	if(!mergedRightArmArray && this.tachieRightArm.includes('hj')) {
		layerArray = layerArray.concat(rightArmArray);
		mergedRightArmArray = true;
	}	
		
	if(isPcup && !mergedBoobsArray) {
		layerArray = layerArray.concat(boobsArray);
		mergedBoobsArray = true;
	}	
	
	if(!mergedRightArmArray) {
		layerArray = layerArray.concat(rightArmArray);
		mergedRightArmArray = true;
	}	
		
	if(!mergedBoobsArray) {
		layerArray = layerArray.concat(boobsArray);
		mergedBoobsArray = true;
	}	

	tempArray = [	
		LAYER_TYPE_MUG,
		LAYER_TYPE_BACK_A,
		
		LAYER_TYPE_SEMEN_BACK,
		LAYER_TYPE_SEMEN_BELLY,
		LAYER_TYPE_SEMEN_BUTT,
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_WET,
		
		LAYER_TYPE_STRAY_BUTT,
		
		LAYER_TYPE_BODY,
		
		LAYER_TYPE_TOY_CLIT,
		LAYER_TYPE_TOY_ANAL,
		LAYER_TYPE_TOY_PUSSY,
		
		LAYER_TYPE_SEMEN_COCK_PUSSY,
		LAYER_TYPE_SEMEN_COCK_ANAL,
		LAYER_TYPE_COCK_ANAL,
		LAYER_TYPE_COCK_PUSSY,
		
		LAYER_TYPE_LEFT_ARM
	]
	layerArray = layerArray.concat(tempArray);

	return layerArray;
};	

//Receptionist
Game_Actor.prototype.getLayerLoadout_Receptionist = function() {
	let layerArray = [];
	let tempArray = [];
	
	let mergedLeftArmArray = false;
	let leftArmArray = [ LAYER_TYPE_LEFT_ARM ];
	
	let mergedSemenNakaArray = false;
	let semenNakaArray = [ LAYER_TYPE_SEMEN_ANAL, LAYER_TYPE_SEMEN_PUSSY, LAYER_TYPE_WET ];
	
	let mergedCockNormalArray = false;
	let cockNormalArray = [ LAYER_TYPE_COCK_NORMAL ];
	let mergedSemenCockNormalArray = false;
	let semenCockNormalArray = [ LAYER_TYPE_SEMEN_COCK_NORMAL ];
	let mergedVisitorAArray = false;
	let visitorAArray = [ LAYER_TYPE_VISITOR_A ];
	
	let thereIsPervertedGoblinFront = $gameTroop.receptionistBattle_thereIsVisitorAtDesk() && $gameTroop.receptionistBattle_visitorAtDesk()._visitor_isGoblin && $gameTroop.receptionistBattle_visitorAtDesk()._visitor_isPervert && ($gameTroop.receptionistBattle_visitorAtDesk()._visitor_isIdentified || $gameTroop.receptionistBattle_visitorAtDesk().isWanted);
	let receptionistIsKissing = this.receptionistBattle_isKissing();
	let receptionistIsGettingBoobsRubbed = this.receptionistBattle_gettingBoobsRubbed();
	let receptionistIsGivingBJ = this.receptionistBattle_isGivingBlowjob();
	let receptionistIsGivingHJ = this.receptionistBattle_isGivingHandjob();
	
	tempArray = [
		LAYER_TYPE_COCK_ANAL,
		LAYER_TYPE_COCK_PUSSY,
		
		LAYER_TYPE_FRONT_A,
		LAYER_TYPE_FRONT_B,
		LAYER_TYPE_FRONT_C,
		LAYER_TYPE_FRONT_D,
		
		LAYER_TYPE_SEMEN_COCK_ANAL,
		LAYER_TYPE_SEMEN_COCK_PUSSY,
		LAYER_TYPE_FRONT_E
	]
	layerArray = layerArray.concat(tempArray);	
	
	if(!mergedLeftArmArray && receptionistIsGivingBJ) {
		layerArray = layerArray.concat(leftArmArray);
		mergedLeftArmArray = true;
	}
	
	tempArray = [
		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_STRAY_FACE,
		
		LAYER_TYPE_GLASSES,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_HAIR,
		LAYER_TYPE_HOPPE,
		LAYER_TYPE_MOUTH,
		
		LAYER_TYPE_SEMEN_COCK_LEFT_ARM
	]
	layerArray = layerArray.concat(tempArray);	
	
	if(!mergedLeftArmArray) {
		layerArray = layerArray.concat(leftArmArray);
		mergedLeftArmArray = true;
	}
	
	tempArray = [
		LAYER_TYPE_LEFT_ARM,
		
		LAYER_TYPE_SEMEN_BUTT,
		
		LAYER_TYPE_STRAY_BUTT
	]
	layerArray = layerArray.concat(tempArray);	
		
	if(!mergedSemenNakaArray && this.clothingStage === 3 && !this.isWearingPanties()) {
		layerArray = layerArray.concat(semenNakaArray);
		mergedSemenNakaArray = true;
	}		
		
	tempArray = [		
		LAYER_TYPE_CLOTHES,
		LAYER_TYPE_SKIRT, 
		LAYER_TYPE_PANTIES
	]
	layerArray = layerArray.concat(tempArray);	
		
	if(!mergedSemenNakaArray) {
		layerArray = layerArray.concat(semenNakaArray);
		mergedSemenNakaArray = true;
	}	
		
	tempArray = [	
		LAYER_TYPE_BUTT,
		
		
		LAYER_TYPE_SEMEN_BOOBS,
		
		LAYER_TYPE_STRAY_BOOBS,
		
		LAYER_TYPE_BODY,
		LAYER_TYPE_BOOBS,
		LAYER_TYPE_RIGHT_ARM,
		
		LAYER_TYPE_BACK_A,
		LAYER_TYPE_BACK_B,
		LAYER_TYPE_BACK_C,
		LAYER_TYPE_BACK_D,
		LAYER_TYPE_BACK_E
	]
	layerArray = layerArray.concat(tempArray);
		
	if(!mergedSemenCockNormalArray && thereIsPervertedGoblinFront) {
		layerArray = layerArray.concat(semenCockNormalArray);
		mergedSemenCockNormalArray = true;
	}	
	
	if(!mergedCockNormalArray && thereIsPervertedGoblinFront && receptionistIsGettingBoobsRubbed) {
		layerArray = layerArray.concat(cockNormalArray);
		mergedCockNormalArray = true;
	}
	if(!mergedVisitorAArray && thereIsPervertedGoblinFront && receptionistIsGettingBoobsRubbed) {
		layerArray = layerArray.concat(visitorAArray);
		mergedVisitorAArray = true;
	}	
	
	if(!mergedCockNormalArray && thereIsPervertedGoblinFront && !receptionistIsGivingBJ) {
		layerArray = layerArray.concat(cockNormalArray);
		mergedCockNormalArray = true;
	}
	if(!mergedVisitorAArray && thereIsPervertedGoblinFront && !receptionistIsGivingBJ) {
		layerArray = layerArray.concat(visitorAArray);
		mergedVisitorAArray = true;
	}	

		
	tempArray = [
		LAYER_TYPE_SEMEN_DESK
	]
	layerArray = layerArray.concat(tempArray);	
		
	if(!mergedCockNormalArray && thereIsPervertedGoblinFront && receptionistIsGivingBJ) {
		layerArray = layerArray.concat(cockNormalArray);
		mergedCockNormalArray = true;
	}
	if(!mergedVisitorAArray && thereIsPervertedGoblinFront && receptionistIsGivingBJ) {
		layerArray = layerArray.concat(visitorAArray);
		mergedVisitorAArray = true;
	}	
	
	if(!mergedSemenCockNormalArray) {
		layerArray = layerArray.concat(semenCockNormalArray);
		mergedSemenCockNormalArray = true;
	}	
	if(!mergedCockNormalArray) {
		layerArray = layerArray.concat(cockNormalArray);
		mergedCockNormalArray = true;
	}
	
	
	if(!mergedVisitorAArray) {
		layerArray = layerArray.concat(visitorAArray);
		mergedVisitorAArray = true;
	}
		
	tempArray = [
		LAYER_TYPE_VISITOR_B,
		LAYER_TYPE_VISITOR_C,
		LAYER_TYPE_VISITOR_D
	]
	layerArray = layerArray.concat(tempArray);
	
	return layerArray;
};

//Toilet Sitting
Game_Actor.prototype.getLayerLoadout_ToiletSitting = function() {
	let layerArray = [];
	let tempArray = [];

	let isPcup = this.boobsSizeIsPCup();

	let mergedLeftArmArray = false;
	let leftArmArray = [ LAYER_TYPE_LEFT_ARM ];
	let mergedRightArmArray = false;
	let rightArmArray = [ LAYER_TYPE_RIGHT_ARM ];
	
	let mergedFrontBArray = false;
	let frontBArray = [ LAYER_TYPE_FRONT_B ];
	let mergedFrontCArray = false;
	let frontCArray = [ LAYER_TYPE_FRONT_C ];
	
	let mergedSemenLeftArmArray = false;
	let semenLeftArmArray = [ LAYER_TYPE_SEMEN_LEFT_ARM ];
	let mergedSemenRightArmArray = false;
	let semenRightArmArray = [ LAYER_TYPE_SEMEN_RIGHT_ARM ];
	
	let mergedLeftBoobArray = false;
	let leftBoobArray = [ LAYER_TYPE_LEFT_BOOB ];
	let mergedRightBoobArray = false;
	let rightBoobArray = [ LAYER_TYPE_RIGHT_BOOB ];
	
	let mergedSemenLeftBoobArray = false;
	let semenLeftBoobArray = [ LAYER_TYPE_SEMEN_LEFT_BOOB ];
	let mergedSemenRightBoobArray = false;
	let semenRightBoobArray = [ LAYER_TYPE_SEMEN_RIGHT_BOOB ];
	
	let mergedStrayLeftBoobArray = false;
	let strayLeftBoobArray = [ LAYER_TYPE_STRAY_LEFT_BOOB ];
	let mergedStrayRightBoobArray = false;
	let strayRightBoobArray = [ LAYER_TYPE_STRAY_RIGHT_BOOB ];
	
	let mergedSemenHoleLeftArray = false;
	let semenHoleLeftArray = [ LAYER_TYPE_SEMEN_HOLE_LEFT ];
	let mergedSemenHoleRightArray = false;
	let semenHoleRightArray = [ LAYER_TYPE_SEMEN_HOLE_RIGHT ];
	
	let mergedLegsArray = false;
	let legsArray = [ LAYER_TYPE_PUBIC, LAYER_TYPE_LEGS ];
	
	let mergedTieArray = false;
	let tieArray = [ LAYER_TYPE_TIE ];

	let mergedLegsBasedSemenArray = false;
	let legsBasedSemenArray = [ 
		LAYER_TYPE_SEMEN_LEFT_LEG,
		LAYER_TYPE_SEMEN_RIGHT_LEG,
		LAYER_TYPE_SEMEN_BUTT,
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_SEMEN_ANAL,
		LAYER_TYPE_WET,
		
		LAYER_TYPE_STRAY_GROIN,
		LAYER_TYPE_STRAY_BUTT
		];
	

	let legsAreClose = this.tachieLegs.includes('close');
	let legsAreSpread = this.tachieLegs.includes('spread');
	
	let leftArmPlayingWithToyA = this.tachieLeftArm.includes('toyA');
	let rightArmPlayingWithToyA = this.tachieRightArm.includes('toyA');
	let leftArmPlayingWithToyP = this.tachieLeftArm.includes('toyP');
	let rightArmPlayingWithToyP = this.tachieRightArm.includes('toyP');
	let leftArmPlayingWithToyC = this.tachieLeftArm.includes('toyC');
	let rightArmPlayingWithToyC = this.tachieRightArm.includes('toyC');
	
	let leftArmPlayingWithClit = this.tachieLeftArm.includes('kuri');
	let rightArmPlayingWithClit = this.tachieRightArm.includes('kuri');
	let leftArmPlayingWithPussy = this.tachieLeftArm.includes('manko');
	let rightArmPlayingWithPussy = this.tachieRightArm.includes('manko');
	let leftArmPlayingWithAnal = this.tachieLeftArm.includes('anaru');
	let rightArmPlayingWithAnal = this.tachieRightArm.includes('anaru');
	
	let leftArmSuckingFinger = this.tachieLeftArm.includes('suck_fingers');
	let rightArmSuckingFinger = this.tachieRightArm.includes('suck_fingers');
	let leftArmTouchingChikubi = this.tachieLeftArm.includes('chikubi');
	let rightArmTouchingChikubi = this.tachieRightArm.includes('chikubi');
	
	let isNaked = !this.isWearingGlovesAndHat();
	
	tempArray = [
		LAYER_TYPE_SEMEN_TOILET_SEAT,
		LAYER_TYPE_WET_TOILET_SEAT
	]	
	layerArray = layerArray.concat(tempArray);
	
	if(leftArmPlayingWithToyP && !mergedSemenLeftArmArray) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmArray = true;
	}
	if(rightArmPlayingWithToyP && !mergedSemenRightArmArray) {
		layerArray = layerArray.concat(semenRightArmArray);
		mergedSemenRightArmArray = true;
	}
	
	if(!mergedFrontBArray && leftArmPlayingWithToyP) {
		layerArray = layerArray.concat(frontBArray);
		mergedFrontBArray = true;
	}
	if(!mergedFrontCArray && rightArmPlayingWithToyP) {
		layerArray = layerArray.concat(frontCArray);
		mergedFrontCArray = true;
	}
	
	tempArray = [	
		LAYER_TYPE_TOY_PUSSY
	]
	layerArray = layerArray.concat(tempArray);
	
	if(legsAreClose && !mergedLegsBasedSemenArray) {
		layerArray = layerArray.concat(legsBasedSemenArray);
		mergedLegsBasedSemenArray = true;
	} 
	
	if(legsAreClose && !mergedLegsArray) {
		layerArray = layerArray.concat(legsArray);
		mergedLegsArray = true;
	} 

	if(leftArmSuckingFinger && !mergedSemenLeftBoobArray) {
		layerArray = layerArray.concat(semenLeftBoobArray);
		mergedSemenLeftBoobArray = true;
	}
	if(rightArmSuckingFinger && !mergedSemenRightBoobArray) {
		layerArray = layerArray.concat(semenRightBoobArray);
		mergedSemenRightBoobArray = true;
	}

	if(leftArmSuckingFinger && !mergedSemenLeftArmArray) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmArray = true;
	}
	if(rightArmSuckingFinger && !mergedSemenRightArmArray) {
		layerArray = layerArray.concat(semenRightArmArray);
		mergedSemenRightArmArray = true;
	}
	
	if(leftArmTouchingChikubi && isPcup && !mergedSemenLeftArmArray) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmArray = true;
	}
	if(rightArmTouchingChikubi && isPcup && !mergedSemenRightArmArray) {
		layerArray = layerArray.concat(semenRightArmArray);
		mergedSemenRightArmArray = true;
	}
	
	if(leftArmSuckingFinger && !mergedStrayLeftBoobArray) {
		layerArray = layerArray.concat(strayLeftBoobArray);
		mergedStrayLeftBoobArray = true;
	}
	if(rightArmSuckingFinger && !mergedStrayRightBoobArray) {
		layerArray = layerArray.concat(strayRightBoobArray);
		mergedStrayRightBoobArray = true;
	}
	
	if(leftArmSuckingFinger && !isPcup && !mergedLeftBoobArray) {
		layerArray = layerArray.concat(leftBoobArray);
		mergedLeftBoobArray = true;
	}
	if(rightArmSuckingFinger && !isPcup && !mergedRightBoobArray) {
		layerArray = layerArray.concat(rightBoobArray);
		mergedRightBoobArray = true;
	}
	
	if(leftArmSuckingFinger && isPcup && !mergedLeftArmArray) {
		layerArray = layerArray.concat(leftArmArray);
		mergedLeftArmArray = true;
	}
	if(rightArmSuckingFinger && isPcup && !mergedRightArmArray) {
		layerArray = layerArray.concat(rightArmArray);
		mergedRightArmArray = true;
	}
	
	if(isPcup && !mergedSemenLeftBoobArray) {
		layerArray = layerArray.concat(semenLeftBoobArray);
		mergedSemenLeftBoobArray = true;
	}
	if(isPcup && !mergedSemenRightBoobArray) {
		layerArray = layerArray.concat(semenRightBoobArray);
		mergedSemenRightBoobArray = true;
	}
	

	tempArray = [
		LAYER_TYPE_SEMEN_FACE
	]	
	layerArray = layerArray.concat(tempArray);

	if(leftArmPlayingWithAnal && !mergedSemenLeftArmArray) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmArray = true;
	}
	if(rightArmPlayingWithAnal && !mergedSemenRightArmArray) {
		layerArray = layerArray.concat(semenRightArmArray);
		mergedSemenRightArmArray = true;
	}
	if(leftArmPlayingWithToyA && !mergedSemenLeftArmArray) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmArray = true;
	}
	if(rightArmPlayingWithToyA && !mergedSemenRightArmArray) {
		layerArray = layerArray.concat(semenRightArmArray);
		mergedSemenRightArmArray = true;
	}
	
	if(leftArmPlayingWithPussy && !mergedSemenLeftArmArray) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmArray = true;
	}
	if(rightArmPlayingWithPussy && !mergedSemenRightArmArray) {
		layerArray = layerArray.concat(semenRightArmArray);
		mergedSemenRightArmArray = true;
	}
	
	if(isPcup && !mergedStrayRightBoobArray) {
		layerArray = layerArray.concat(strayRightBoobArray);
		mergedStrayRightBoobArray = true;
	}
	if(isPcup && !mergedStrayLeftBoobArray) {
		layerArray = layerArray.concat(strayLeftBoobArray);
		mergedStrayLeftBoobArray = true;
	}

	tempArray = [
		LAYER_TYPE_STRAY_FACE,
	
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_MOUTH,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HAIR,
		LAYER_TYPE_HOPPE,
		LAYER_TYPE_HEAD
	]	
	layerArray = layerArray.concat(tempArray);
		
	if(!mergedTieArray && isPcup && !rightArmSuckingFinger) {	
		layerArray = layerArray.concat(tieArray);
		mergedTieArray = true;
	}	
		
	if(!mergedRightBoobArray && isPcup) {	
		layerArray = layerArray.concat(rightBoobArray);
		mergedRightBoobArray = true;
	}	
	
	if(!mergedLeftBoobArray && isPcup) {	
		layerArray = layerArray.concat(leftBoobArray);
		mergedLeftBoobArray = true;
	}	
		
	if(!mergedFrontBArray && leftArmPlayingWithAnal) {
		layerArray = layerArray.concat(frontBArray);
		mergedFrontBArray = true;
	}
	if(!mergedFrontCArray && rightArmPlayingWithAnal) {
		layerArray = layerArray.concat(frontCArray);
		mergedFrontCArray = true;
	}
	
	if(!mergedFrontBArray && leftArmPlayingWithToyA) {
		layerArray = layerArray.concat(frontBArray);
		mergedFrontBArray = true;
	}
	if(!mergedFrontCArray && rightArmPlayingWithToyA) {
		layerArray = layerArray.concat(frontCArray);
		mergedFrontCArray = true;
	}
		
	if(!mergedFrontBArray && leftArmPlayingWithPussy) {
		layerArray = layerArray.concat(frontBArray);
		mergedFrontBArray = true;
	}
	if(!mergedFrontCArray && rightArmPlayingWithPussy) {
		layerArray = layerArray.concat(frontCArray);
		mergedFrontCArray = true;
	}	
	
	
	if(leftArmPlayingWithToyC && !mergedSemenLeftArmArray) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmArray = true;
	}
	if(rightArmPlayingWithToyC && !mergedSemenRightArmArray) {
		layerArray = layerArray.concat(semenRightArmArray);
		mergedSemenRightArmArray = true;
	}
	if(leftArmPlayingWithClit && !mergedSemenLeftArmArray) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmArray = true;
	}
	if(rightArmPlayingWithClit && !mergedSemenRightArmArray) {
		layerArray = layerArray.concat(semenRightArmArray);
		mergedSemenRightArmArray = true;
	}
	
	if(!mergedFrontBArray && leftArmPlayingWithToyC) {
		layerArray = layerArray.concat(frontBArray);
		mergedFrontBArray = true;
	}
	if(!mergedFrontCArray && rightArmPlayingWithToyC) {
		layerArray = layerArray.concat(frontCArray);
		mergedFrontCArray = true;
	}	
	
	if(!mergedFrontBArray && leftArmPlayingWithClit) {
		layerArray = layerArray.concat(frontBArray);
		mergedFrontBArray = true;
	}
	if(!mergedFrontCArray && rightArmPlayingWithClit) {
		layerArray = layerArray.concat(frontCArray);
		mergedFrontCArray = true;
	}	
	
	
	tempArray = [
		LAYER_TYPE_FRONT_A
	]
	layerArray = layerArray.concat(tempArray);	

	if(!leftArmPlayingWithToyA && !rightArmPlayingWithToyA) {
		tempArray = [	
			LAYER_TYPE_TOY_ANAL
		]
		layerArray = layerArray.concat(tempArray);
	}
		
	if(legsAreSpread) {
		tempArray = [
			LAYER_TYPE_TOY_CLIT,
		]
		layerArray = layerArray.concat(tempArray);	
	}		
	
	if(!mergedLegsBasedSemenArray) {
		layerArray = layerArray.concat(legsBasedSemenArray);
		mergedLegsBasedSemenArray = true;
	} 
		
	if(!mergedLegsArray) {
		layerArray = layerArray.concat(legsArray);
		mergedLegsArray = true;
	}
		
	if(!mergedTieArray && !rightArmSuckingFinger) {	
		layerArray = layerArray.concat(tieArray);
		mergedTieArray = true;
	}
		
	tempArray = [
		LAYER_TYPE_SEMEN_BELLY
	]
	layerArray = layerArray.concat(tempArray);	
		
	if(leftArmTouchingChikubi && !mergedSemenLeftArmArray) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmArray = true;
	}
	if(leftArmTouchingChikubi && !mergedSemenLeftBoobArray) {
		layerArray = layerArray.concat(semenLeftBoobArray);
		mergedSemenLeftBoobArray = true;
	}
	if(!mergedSemenLeftBoobArray) {
		layerArray = layerArray.concat(semenLeftBoobArray);
		mergedSemenLeftBoobArray = true;
	}
	
	if(rightArmTouchingChikubi && !mergedSemenRightArmArray) {
		layerArray = layerArray.concat(semenRightArmArray);
		mergedSemenRightArmArray = true;
	}
	if(rightArmTouchingChikubi && !mergedSemenRightBoobArray) {
		layerArray = layerArray.concat(semenRightBoobArray);
		mergedSemenRightBoobArray = true;
	}
	if(!mergedSemenRightBoobArray) {
		layerArray = layerArray.concat(semenRightBoobArray);
		mergedSemenRightBoobArray = true;
	}
	
	if(!mergedStrayLeftBoobArray) {
		layerArray = layerArray.concat(strayLeftBoobArray);
		mergedStrayLeftBoobArray = true;
	}
	if(!mergedStrayRightBoobArray) {
		layerArray = layerArray.concat(strayRightBoobArray);
		mergedStrayRightBoobArray = true;
	}

	if(leftArmTouchingChikubi && !mergedLeftBoobArray) {
		layerArray = layerArray.concat(leftBoobArray);
		mergedLeftBoobArray = true;
	}
	if(rightArmTouchingChikubi && !mergedRightBoobArray) {
		layerArray = layerArray.concat(rightBoobArray);
		mergedRightBoobArray = true;
	}
	
	if(!mergedLeftBoobArray) {
		layerArray = layerArray.concat(leftBoobArray);
		mergedLeftBoobArray = true;
	}
	if(!mergedRightBoobArray) {
		layerArray = layerArray.concat(rightBoobArray);
		mergedRightBoobArray = true;
	}
		
	tempArray = [
		LAYER_TYPE_BODY
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedSemenHoleRightArray) {
		layerArray = layerArray.concat(semenHoleRightArray);
		mergedSemenHoleRightArray = true;
	}
	if(!mergedSemenHoleLeftArray) {
		layerArray = layerArray.concat(semenHoleLeftArray);
		mergedSemenHoleLeftArray = true;
	}
	if(!mergedSemenLeftArmArray) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmArray = true;
	}
	if(!mergedSemenRightArmArray) {
		layerArray = layerArray.concat(semenRightArmArray);
		mergedSemenRightArmArray = true;
	}
	
	if(!mergedLeftArmArray && this.tachieLeftArm.includes('pet') && !this.tachieRightHole.includes('pet')) {
		layerArray = layerArray.concat(leftArmArray);
		mergedLeftArmArray = true;
	}
	if(!mergedRightArmArray && this.tachieRightArm.includes('pet') && !this.tachieLeftHole.includes('pet')) {
		layerArray = layerArray.concat(rightArmArray);
		mergedRightArmArray = true;
	}
	
	tempArray = [
		LAYER_TYPE_LEFT_HOLE,
		LAYER_TYPE_RIGHT_HOLE
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedLeftArmArray) {
		layerArray = layerArray.concat(leftArmArray);
		mergedLeftArmArray = true;
	}
	if(!mergedRightArmArray) {
		layerArray = layerArray.concat(rightArmArray);
		mergedRightArmArray = true;
	}	
	
	tempArray = [
		LAYER_TYPE_GLORY_SEMEN_TOILET_LEFT,
		LAYER_TYPE_GLORY_SEMEN_WALL_LEFT,
		LAYER_TYPE_GLORY_SEMEN_HOLE_LEFT,
		LAYER_TYPE_GLORY_SEMEN_TOILET_RIGHT,
		LAYER_TYPE_GLORY_SEMEN_WALL_RIGHT,
		LAYER_TYPE_GLORY_SEMEN_HOLE_RIGHT
	]
	layerArray = layerArray.concat(tempArray);

	return layerArray;
};

//Toilet Sit Left
Game_Actor.prototype.getLayerLoadout_ToiletSitLeft = function() {
	let layerArray = [];
	let tempArray = [];

	let leftArmIsIdle = this.tachieLeftArm.includes('hair');
	let leftArmIsPussy = this.tachieLeftArm.includes('kuri') || this.tachieLeftArm.includes('manko');
	let legsAreSpread = this.tachieLegs.includes('spread');
	let legsAreClose = this.tachieLegs.includes('close');
	let mouthIsBj = this.tachieMouth.includes('fera');
	let leftHoleIsSoft = this.tachieLeftHole.includes('soft');
	let leftHoleIsHard = this.tachieLeftHole.includes('hard');
	
	let mergedLeftArmArray = false;
	let leftArmArray = [ LAYER_TYPE_LEFT_ARM ];
	
	let mergedSemenLeftArmArray = false;
	let semenLeftArmArray = [ LAYER_TYPE_SEMEN_LEFT_ARM ];
	
	let mergedHoleLeftArray = false;
	let holeLeftArray = [ LAYER_TYPE_LEFT_HOLE ];
	
	let mergedSemenHoleLeftArray = false;
	let semenHoleLeftArray = [ LAYER_TYPE_SEMEN_HOLE_LEFT ];
	
	let mergedStrayFaceArray = false;
	let strayFaceArray = [ LAYER_TYPE_STRAY_FACE ];
	
	let mergedStrayGroinArray = false;
	let strayGroinArray = [ LAYER_TYPE_STRAY_GROIN ];
	
	let mergedLegsArray = false;
	let legsArray = [ LAYER_TYPE_PUBIC, LAYER_TYPE_LEGS ];
	
	let mergedLegsBasedSemenArray = false;
	let legsBasedSemenArray = [ 
		LAYER_TYPE_SEMEN_RIGHT_LEG,
		LAYER_TYPE_SEMEN_LEFT_LEG,
		LAYER_TYPE_SEMEN_BUTT,
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_WET
		];
		
	tempArray = [
		LAYER_TYPE_SEMEN_TOILET_SEAT,
		LAYER_TYPE_WET_TOILET_SEAT
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedSemenLeftArmArray && leftArmIsPussy) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmArray = true;
	}
		
	if(!mergedLeftArmArray && leftArmIsPussy) {
		layerArray = layerArray.concat(leftArmArray);
		mergedLeftArmArray = true;
	}

	if(!mergedLegsBasedSemenArray && legsAreClose) {
		layerArray = layerArray.concat(legsBasedSemenArray);
		mergedLegsBasedSemenArray = true;
	}
	
	if(!mergedStrayGroinArray && legsAreClose) {
		layerArray = layerArray.concat(strayGroinArray);
		mergedStrayGroinArray = true;
	}
	
	tempArray = [	
		LAYER_TYPE_STRAY_BUTT
	]
	layerArray = layerArray.concat(tempArray);

	if(!mergedLegsArray && legsAreClose) {
		layerArray = layerArray.concat(legsArray);
		mergedLegsArray = true;
	}
	
	if(!mergedSemenLeftArmArray && leftArmIsIdle) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmArray = true;
	}
		
	if(!mergedLeftArmArray && leftArmIsIdle) {
		layerArray = layerArray.concat(leftArmArray);
		mergedLeftArmArray = true;
	}
	
	if(!mergedSemenHoleLeftArray && leftHoleIsSoft && !mouthIsBj) {
		layerArray = layerArray.concat(semenHoleLeftArray);
		mergedSemenHoleLeftArray = true;
	}
	if(!mergedHoleLeftArray && leftHoleIsSoft && !mouthIsBj) {
		layerArray = layerArray.concat(holeLeftArray);
		mergedHoleLeftArray = true;
	}
		
	tempArray = [	
		LAYER_TYPE_SEMEN_FACE
	]
	layerArray = layerArray.concat(tempArray);	
	
	if(!mergedSemenLeftArmArray) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmArray = true;
	}
	
	if(!mergedLeftArmArray) {
		layerArray = layerArray.concat(leftArmArray);
		mergedLeftArmArray = true;
	}
	
	tempArray = [	
		LAYER_TYPE_TIE,
		
		LAYER_TYPE_SEMEN_BOOBS,
		LAYER_TYPE_STRAY_BOOBS,
		LAYER_TYPE_BOOBS
	]
	layerArray = layerArray.concat(tempArray);
		
	if(!mergedStrayGroinArray) {
		layerArray = layerArray.concat(strayGroinArray);
		mergedStrayGroinArray = true;
	}	
		
	tempArray = [
		LAYER_TYPE_SEMEN_FRONT_A,
		LAYER_TYPE_FRONT_A
	]
	layerArray = layerArray.concat(tempArray);
		
	if(!mergedSemenHoleLeftArray && leftHoleIsHard) {
		layerArray = layerArray.concat(semenHoleLeftArray);
		mergedSemenHoleLeftArray = true;
	}
	
	if(!mergedSemenHoleLeftArray && !leftHoleIsHard && mouthIsBj) {
		layerArray = layerArray.concat(semenHoleLeftArray);
		mergedSemenHoleLeftArray = true;
	}
		
	if(!mergedStrayFaceArray && mouthIsBj) {
		layerArray = layerArray.concat(strayFaceArray);
		mergedStrayFaceArray = true;
	}		
		
	tempArray = [		
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_SWEAT
	]	
	layerArray = layerArray.concat(tempArray);
	
	if(mouthIsBj) {
		tempArray = [	
			LAYER_TYPE_HOPPE,
			LAYER_TYPE_MOUTH
		]
		layerArray = layerArray.concat(tempArray);
	}	
		
	if(!mergedSemenHoleLeftArray) {
		layerArray = layerArray.concat(semenHoleLeftArray);
		mergedSemenHoleLeftArray = true;
	}
		
	if(!mergedHoleLeftArray) {
		layerArray = layerArray.concat(holeLeftArray);
		mergedHoleLeftArray = true;
	}
	
	if(!mergedStrayFaceArray) {
		layerArray = layerArray.concat(strayFaceArray);
		mergedStrayFaceArray = true;
	}	
	
	if(!mouthIsBj) {	
		tempArray = [	
			LAYER_TYPE_MOUTH,
			LAYER_TYPE_HOPPE
		]
		layerArray = layerArray.concat(tempArray);
	}
	
	tempArray = [	
		LAYER_TYPE_HAIR,
		LAYER_TYPE_HEAD,
	
		LAYER_TYPE_TOY_CLIT,
		LAYER_TYPE_TOY_PUSSY
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedLegsBasedSemenArray && legsAreSpread) {
		layerArray = layerArray.concat(legsBasedSemenArray);
		mergedLegsBasedSemenArray = true;
	}
	
	tempArray = [
		LAYER_TYPE_SEMEN_BELLY
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedLegsArray && legsAreSpread) {
		layerArray = layerArray.concat(legsArray);
		mergedLegsArray = true;
	}
	
	tempArray = [
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		
		LAYER_TYPE_BODY,
		LAYER_TYPE_RIGHT_ARM,
		
		LAYER_TYPE_SEMEN_HOLE_RIGHT,
		LAYER_TYPE_RIGHT_HOLE,
		
		LAYER_TYPE_GLORY_SEMEN_TOILET_LEFT,
		LAYER_TYPE_GLORY_SEMEN_WALL_LEFT,
		LAYER_TYPE_GLORY_SEMEN_HOLE_LEFT,
		LAYER_TYPE_GLORY_SEMEN_TOILET_RIGHT,
		LAYER_TYPE_GLORY_SEMEN_WALL_RIGHT,
		LAYER_TYPE_GLORY_SEMEN_HOLE_RIGHT
	]
	layerArray = layerArray.concat(tempArray);

	return layerArray;
};


//Toilet Sit Right
Game_Actor.prototype.getLayerLoadout_ToiletSitRight = function() {
	let layerArray = [];
	let tempArray = [];
	
	let rightArmIsIdle = this.tachieRightArm.includes('hair');
	let rightArmIsPussy = this.tachieRightArm.includes('kuri') || this.tachieRightArm.includes('manko');
	let legsAreSpread = this.tachieLegs.includes('spread');
	let legsAreClose = this.tachieLegs.includes('close');
	let mouthIsBj = this.tachieMouth.includes('fera');
	let rightHoleIsSoft = this.tachieRightHole.includes('soft');
	let rightHoleIsHard = this.tachieRightHole.includes('hard');
	
	let mergedRightArmArray = false;
	let rightArmArray = [ LAYER_TYPE_RIGHT_ARM ];
	
	let mergedSemenRightArmArray = false;
	let semenRightArmArray = [ LAYER_TYPE_SEMEN_RIGHT_ARM ];
	
	let mergedHoleRightArray = false;
	let holeRightArray = [ LAYER_TYPE_RIGHT_HOLE ];
	
	let mergedSemenHoleRightArray = false;
	let semenHoleRightArray = [ LAYER_TYPE_SEMEN_HOLE_RIGHT ];
	
	let mergedStrayFaceArray = false;
	let strayFaceArray = [ LAYER_TYPE_STRAY_FACE ];
	
	let mergedStrayGroinArray = false;
	let strayGroinArray = [ LAYER_TYPE_STRAY_GROIN ];
	
	let mergedLegsArray = false;
	let legsArray = [ LAYER_TYPE_PUBIC, LAYER_TYPE_LEGS ];
	
	let mergedLegsBasedSemenArray = false;
	let legsBasedSemenArray = [ 
		LAYER_TYPE_SEMEN_RIGHT_LEG,
		LAYER_TYPE_SEMEN_LEFT_LEG,
		LAYER_TYPE_SEMEN_BUTT,
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_WET
		];

	tempArray = [
		LAYER_TYPE_SEMEN_TOILET_SEAT,
		LAYER_TYPE_WET_TOILET_SEAT
	]
	layerArray = layerArray.concat(tempArray);

	if(!mergedSemenRightArmArray && rightArmIsPussy) {
		layerArray = layerArray.concat(semenRightArmArray);
		mergedSemenRightArmArray = true;
	}
		
	if(!mergedRightArmArray && rightArmIsPussy) {
		layerArray = layerArray.concat(rightArmArray);
		mergedRightArmArray = true;
	}

	if(!mergedLegsBasedSemenArray && legsAreClose) {
		layerArray = layerArray.concat(legsBasedSemenArray);
		mergedLegsBasedSemenArray = true;
	}
	
	if(!mergedStrayGroinArray && legsAreClose) {
		layerArray = layerArray.concat(strayGroinArray);
		mergedStrayGroinArray = true;
	}
	
	tempArray = [	
		LAYER_TYPE_STRAY_BUTT
	]
	layerArray = layerArray.concat(tempArray);

	if(!mergedLegsArray && legsAreClose) {
		layerArray = layerArray.concat(legsArray);
		mergedLegsArray = true;
	}
	
	if(!mergedSemenRightArmArray && rightArmIsIdle) {
		layerArray = layerArray.concat(semenRightArmArray);
		mergedSemenRightArmArray = true;
	}
		
	if(!mergedRightArmArray && rightArmIsIdle) {
		layerArray = layerArray.concat(rightArmArray);
		mergedRightArmArray = true;
	}
	
	if(!mergedSemenHoleRightArray && rightHoleIsSoft && !mouthIsBj) {
		layerArray = layerArray.concat(semenHoleRightArray);
		mergedSemenHoleRightArray = true;
	}
	if(!mergedHoleRightArray && rightHoleIsSoft && !mouthIsBj) {
		layerArray = layerArray.concat(holeRightArray);
		mergedHoleRightArray = true;
	}
	
	tempArray = [	
		LAYER_TYPE_SEMEN_FACE
	]
	layerArray = layerArray.concat(tempArray);	
	
	if(!mergedSemenRightArmArray) {
		layerArray = layerArray.concat(semenRightArmArray);
		mergedSemenRightArmArray = true;
	}
	
	if(!mergedRightArmArray) {
		layerArray = layerArray.concat(rightArmArray);
		mergedRightArmArray = true;
	}
	
	tempArray = [	
		LAYER_TYPE_TIE,
		
		LAYER_TYPE_SEMEN_BOOBS,
		LAYER_TYPE_STRAY_BOOBS,
		LAYER_TYPE_BOOBS
	]
	layerArray = layerArray.concat(tempArray);
		
	if(!mergedStrayGroinArray) {
		layerArray = layerArray.concat(strayGroinArray);
		mergedStrayGroinArray = true;
	}	
		
	tempArray = [
		LAYER_TYPE_SEMEN_FRONT_A,
		LAYER_TYPE_FRONT_A
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedSemenHoleRightArray && rightHoleIsHard) {
		layerArray = layerArray.concat(semenHoleRightArray);
		mergedSemenHoleRightArray = true;
	}
	
	if(!mergedSemenHoleRightArray && !rightHoleIsHard && mouthIsBj) {
		layerArray = layerArray.concat(semenHoleRightArray);
		mergedSemenHoleRightArray = true;
	}
		
	if(!mergedStrayFaceArray && mouthIsBj) {
		layerArray = layerArray.concat(strayFaceArray);
		mergedStrayFaceArray = true;
	}	
		
	tempArray = [		
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_SWEAT
	]	
	layerArray = layerArray.concat(tempArray);
		
	if(mouthIsBj) {
		tempArray = [	
			LAYER_TYPE_HOPPE,
			LAYER_TYPE_MOUTH
		]
		layerArray = layerArray.concat(tempArray);
	}

	if(!mergedSemenHoleRightArray) {
		layerArray = layerArray.concat(semenHoleRightArray);
		mergedSemenHoleRightArray = true;
	}
 		
	if(!mergedHoleRightArray) {
		layerArray = layerArray.concat(holeRightArray);
		mergedHoleRightArray = true;
	}
	
	if(!mergedStrayFaceArray) {
		layerArray = layerArray.concat(strayFaceArray);
		mergedStrayFaceArray = true;
	}	
	
	if(!mouthIsBj) {
		tempArray = [	
			LAYER_TYPE_MOUTH,
			LAYER_TYPE_HOPPE
		]
		layerArray = layerArray.concat(tempArray);
	}
	
	tempArray = [	
		LAYER_TYPE_HAIR,
		LAYER_TYPE_HEAD,
	
		LAYER_TYPE_TOY_CLIT,
		LAYER_TYPE_TOY_PUSSY
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedLegsBasedSemenArray && legsAreSpread) {
		layerArray = layerArray.concat(legsBasedSemenArray);
		mergedLegsBasedSemenArray = true;
	}
	
	tempArray = [
		LAYER_TYPE_SEMEN_BELLY
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedLegsArray && legsAreSpread) {
		layerArray = layerArray.concat(legsArray);
		mergedLegsArray = true;
	}
	
	tempArray = [
		LAYER_TYPE_SEMEN_LEFT_ARM,
		
		LAYER_TYPE_BODY,
		LAYER_TYPE_LEFT_ARM,
		
		LAYER_TYPE_SEMEN_HOLE_LEFT,
		LAYER_TYPE_LEFT_HOLE,
		
		LAYER_TYPE_GLORY_SEMEN_TOILET_LEFT,
		LAYER_TYPE_GLORY_SEMEN_WALL_LEFT,
		LAYER_TYPE_GLORY_SEMEN_HOLE_LEFT,
		LAYER_TYPE_GLORY_SEMEN_TOILET_RIGHT,
		LAYER_TYPE_GLORY_SEMEN_WALL_RIGHT,
		LAYER_TYPE_GLORY_SEMEN_HOLE_RIGHT
	]
	layerArray = layerArray.concat(tempArray);
	
	return layerArray;
};


//Toilet Stand Left
Game_Actor.prototype.getLayerLoadout_ToiletStandLeft = function() {
	let layerArray = [];
	let tempArray = [];

	let leftHoleIsEmpty = $gameTroop.gloryBattle_leftHoleIsEmpty();
	let rightHoleIsEmpty = $gameTroop.gloryBattle_rightHoleIsEmpty();
	let leftHoleIsHard = !leftHoleIsEmpty && $gameTroop._gloryLeftStall.isAroused()
	let rightHoleIsHard = !rightHoleIsEmpty && $gameTroop._gloryRightStall.isAroused()
	
	let leftArmIsChikubi = this.tachieLeftArm.includes('chikubi');
	let mouthIsFera = this.tachieMouth.includes('fera');
	let givingBJ = this.isBodySlotPenis(MOUTH_ID);
	
	let mergedLeftHoleArray = false;
	let leftHoleArray = [ LAYER_TYPE_SEMEN_HOLE_LEFT, LAYER_TYPE_LEFT_HOLE ];
	
	let mergedLeftArmArray = false;
	let leftArmArray = [ LAYER_TYPE_LEFT_ARM ];
	
	let mergedSemenLeftArmArray = false;
	let semenLeftArmArray = [ LAYER_TYPE_SEMEN_LEFT_ARM ];
	
	let mergedStrayFaceArray = false;
	let strayFaceArray = [ LAYER_TYPE_STRAY_FACE ];
	

	tempArray = [
		LAYER_TYPE_SEMEN_TOILET_SEAT,
		LAYER_TYPE_WET_TOILET_SEAT,
		
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		LAYER_TYPE_SEMEN_FRONT_A
	]
	layerArray = layerArray.concat(tempArray);	
	
	if(leftArmIsChikubi && !mergedSemenLeftArmArray) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmArray = true;
	}
	
	tempArray = [
		LAYER_TYPE_SEMEN_FACE,
		
		LAYER_TYPE_RIGHT_ARM
	]
	layerArray = layerArray.concat(tempArray);	

	if(!mergedStrayFaceArray && mouthIsFera) {
		layerArray = layerArray.concat(strayFaceArray);
		mergedStrayFaceArray = true;
	}
	
	tempArray = [	
		LAYER_TYPE_TIE
	]
	layerArray = layerArray.concat(tempArray);	
	
	if(mouthIsFera) {
		tempArray = [
			LAYER_TYPE_FRONT_B
		]
		layerArray = layerArray.concat(tempArray);	
	}	
	
	tempArray = [
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HOPPE,
		LAYER_TYPE_MOUTH,
		
		LAYER_TYPE_FRONT_A,
		
		LAYER_TYPE_SEMEN_HOLE_RIGHT,
		
		LAYER_TYPE_RIGHT_HOLE
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedStrayFaceArray) {
		layerArray = layerArray.concat(strayFaceArray);
		mergedStrayFaceArray = true;
	}
	
	tempArray = [	
		LAYER_TYPE_HAIR,
		LAYER_TYPE_HEAD,
		
		LAYER_TYPE_TOY_CLIT,
	
		LAYER_TYPE_SEMEN_BOOBS,	
		
		LAYER_TYPE_SEMEN_LEFT_LEG,
		LAYER_TYPE_SEMEN_RIGHT_LEG,
		LAYER_TYPE_SEMEN_BUTT,
		LAYER_TYPE_SEMEN_BELLY,
		LAYER_TYPE_SEMEN_BACK,
		LAYER_TYPE_SEMEN_ANAL,
		LAYER_TYPE_SEMEN_PUSSY,
		
		LAYER_TYPE_WET,
		
		LAYER_TYPE_STRAY_BOOBS,
		LAYER_TYPE_STRAY_GROIN,
		LAYER_TYPE_STRAY_BUTT,
		
		LAYER_TYPE_BOOBS,
		
		LAYER_TYPE_PUBIC,
		
		LAYER_TYPE_BODY
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedSemenLeftArmArray) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmArray = true;
	}
	
	if(!mergedLeftArmArray) {
		layerArray = layerArray.concat(leftArmArray);
		mergedLeftArmArray = true;
	}
	
	tempArray = [		
		LAYER_TYPE_TOY_ANAL,
		LAYER_TYPE_TOY_PUSSY,
		
		LAYER_TYPE_SEMEN_HOLE_LEFT,
		
		LAYER_TYPE_LEFT_HOLE,
		
		LAYER_TYPE_GLORY_SEMEN_TOILET_LEFT,
		LAYER_TYPE_GLORY_SEMEN_WALL_LEFT,
		LAYER_TYPE_GLORY_SEMEN_HOLE_LEFT,
		LAYER_TYPE_GLORY_SEMEN_TOILET_RIGHT,
		LAYER_TYPE_GLORY_SEMEN_WALL_RIGHT,
		LAYER_TYPE_GLORY_SEMEN_HOLE_RIGHT
	]
	layerArray = layerArray.concat(tempArray);
	
	return layerArray;
};

//Toilet Stand Right
Game_Actor.prototype.getLayerLoadout_ToiletStandRight = function() {
	let layerArray = [];
	let tempArray = [];

	let leftHoleIsEmpty = $gameTroop.gloryBattle_leftHoleIsEmpty();
	let rightHoleIsEmpty = $gameTroop.gloryBattle_rightHoleIsEmpty();
	let leftHoleIsHard = !leftHoleIsEmpty && $gameTroop._gloryLeftStall.isAroused()
	let rightHoleIsHard = !rightHoleIsEmpty && $gameTroop._gloryRightStall.isAroused()
	
	let rightArmIsChikubi = this.tachieRightArm.includes('chikubi');
	let mouthIsFera = this.tachieMouth.includes('fera');
	let givingBJ = this.isBodySlotPenis(MOUTH_ID);
	
	let mergedRightHoleArray = false;
	let rightHoleArray = [ LAYER_TYPE_SEMEN_HOLE_RIGHT, LAYER_TYPE_RIGHT_HOLE ];
	
	let mergedRightArmArray = false;
	let rightArmArray = [ LAYER_TYPE_RIGHT_ARM ];
	
	let mergedSemenRightArmArray = false;
	let semenRightArmArray = [ LAYER_TYPE_SEMEN_RIGHT_ARM ];
	
	let mergedStrayFaceArray = false;
	let strayFaceArray = [ LAYER_TYPE_STRAY_FACE ];
	

	tempArray = [
		LAYER_TYPE_SEMEN_TOILET_SEAT,
		LAYER_TYPE_WET_TOILET_SEAT,
	
		LAYER_TYPE_SEMEN_LEFT_ARM
	]
	layerArray = layerArray.concat(tempArray);	
		
	if(rightArmIsChikubi && !mergedSemenRightArmArray) {
		layerArray = layerArray.concat(semenRightArmArray);
		mergedSemenRightArmArray = true;
	}	
		
	tempArray = [
		LAYER_TYPE_SEMEN_FACE,
		
		LAYER_TYPE_LEFT_ARM
	]
	layerArray = layerArray.concat(tempArray);	
	
	if(!mergedStrayFaceArray && mouthIsFera) {
		layerArray = layerArray.concat(strayFaceArray);
		mergedStrayFaceArray = true;
	}
	
	tempArray = [	
		LAYER_TYPE_TIE
	]
	layerArray = layerArray.concat(tempArray);	

	if(mouthIsFera) {
		tempArray = [
			LAYER_TYPE_FRONT_B
		]
		layerArray = layerArray.concat(tempArray);	
	}

	tempArray = [
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HOPPE,
		LAYER_TYPE_MOUTH,
		
		LAYER_TYPE_FRONT_A,
		
		LAYER_TYPE_SEMEN_HOLE_LEFT,
		
		LAYER_TYPE_LEFT_HOLE
	]
	layerArray = layerArray.concat(tempArray);

	if(!mergedStrayFaceArray) {
		layerArray = layerArray.concat(strayFaceArray);
		mergedStrayFaceArray = true;
	}

	tempArray = [	
		LAYER_TYPE_HAIR,
		LAYER_TYPE_HEAD,
		
		LAYER_TYPE_TOY_CLIT,
		
		LAYER_TYPE_SEMEN_BOOBS,	
		
		LAYER_TYPE_SEMEN_LEFT_LEG,
		LAYER_TYPE_SEMEN_RIGHT_LEG,
		LAYER_TYPE_SEMEN_BUTT,
		LAYER_TYPE_SEMEN_BELLY,
		LAYER_TYPE_SEMEN_BACK,
		LAYER_TYPE_SEMEN_ANAL,
		LAYER_TYPE_SEMEN_PUSSY,
		
		LAYER_TYPE_WET,
		
		LAYER_TYPE_STRAY_BOOBS,
		LAYER_TYPE_STRAY_GROIN,
		LAYER_TYPE_STRAY_BUTT,
		
		LAYER_TYPE_BOOBS,
		
		LAYER_TYPE_PUBIC,
		
		LAYER_TYPE_BODY
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedSemenRightArmArray) {
		layerArray = layerArray.concat(semenRightArmArray);
		mergedSemenRightArmArray = true;
	}
	
	if(!mergedRightArmArray) {
		layerArray = layerArray.concat(rightArmArray);
		mergedRightArmArray = true;
	}
		
	tempArray = [	
		LAYER_TYPE_TOY_ANAL,
		LAYER_TYPE_TOY_PUSSY,
		
		LAYER_TYPE_SEMEN_HOLE_RIGHT,
		
		LAYER_TYPE_RIGHT_HOLE,
		
		LAYER_TYPE_GLORY_SEMEN_TOILET_LEFT,
		LAYER_TYPE_GLORY_SEMEN_WALL_LEFT,
		LAYER_TYPE_GLORY_SEMEN_HOLE_LEFT,
		LAYER_TYPE_GLORY_SEMEN_TOILET_RIGHT,
		LAYER_TYPE_GLORY_SEMEN_WALL_RIGHT,
		LAYER_TYPE_GLORY_SEMEN_HOLE_RIGHT
	]
	layerArray = layerArray.concat(tempArray);

	return layerArray;
};



//Stripper Mouth
Game_Actor.prototype.getLayerLoadout_StripperMouth = function() {
	let layerArray = [];
	let tempArray = [];	
	
	let mergedFrontBHole = false;
	let frontBArray = [ LAYER_TYPE_FRONT_B ];
	
	tempArray = [
		LAYER_TYPE_LEFT_ARM,
	
		LAYER_TYPE_CONDOM_HEAD,
		LAYER_TYPE_CONDOM_CHIKUBI,
		LAYER_TYPE_CONDOM_BRA
	]	
	layerArray = layerArray.concat(tempArray);	
		
	if(!mergedFrontBHole && this.tachieFrontB.includes('before')) {
		layerArray = layerArray.concat(frontBArray);
		mergedFrontBHole = true;
	}
	
	tempArray = [	
		LAYER_TYPE_STRAY_FACE,
		LAYER_TYPE_STRAY_BOOBS,
	
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_MOUTH,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HOPPE
	]
	layerArray = layerArray.concat(tempArray);	
		
	if(!mergedFrontBHole) {
		layerArray = layerArray.concat(frontBArray);
		mergedFrontBHole = true;
	}
	
	tempArray = [	
		LAYER_TYPE_HAIR,
		LAYER_TYPE_HEAD,
		
		LAYER_TYPE_POLE,
		
		LAYER_TYPE_FRONT_A,
		LAYER_TYPE_BOOBS,
		
		LAYER_TYPE_BACK_C,
		LAYER_TYPE_CONDOM_BELT,
		
		LAYER_TYPE_STRAY_GROIN,
		LAYER_TYPE_STRAY_BUTT,
		
		LAYER_TYPE_BACK_A,
		LAYER_TYPE_PANTIES,
		
		LAYER_TYPE_WET,
		
		LAYER_TYPE_PUBIC,
		LAYER_TYPE_BODY,
		
		LAYER_TYPE_RIGHT_ARM,
		
		LAYER_TYPE_CONDOM_FLOOR
	]
	layerArray = layerArray.concat(tempArray);

	return layerArray;
};

//Stripper Boobs
Game_Actor.prototype.getLayerLoadout_StripperBoobs = function() {
	let layerArray = [];
	
	layerArray = [
		LAYER_TYPE_CONDOM_HEAD,
		LAYER_TYPE_CONDOM_CHIKUBI,
		LAYER_TYPE_CONDOM_BRA,
		LAYER_TYPE_CONDOM_BELT,
		
		LAYER_TYPE_STRAY_FACE,
		LAYER_TYPE_STRAY_BOOBS,
		LAYER_TYPE_STRAY_GROIN,
		LAYER_TYPE_STRAY_BUTT,
		
		LAYER_TYPE_FRONT_A,
		
		LAYER_TYPE_FRONT_D,
		LAYER_TYPE_BOOBS,
		LAYER_TYPE_POLE,
		LAYER_TYPE_BACK_A,
		
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_MOUTH,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HAIR,
		LAYER_TYPE_HOPPE,
		
		LAYER_TYPE_PANTIES,
		
		LAYER_TYPE_WET,
		
		LAYER_TYPE_HEAD,
		LAYER_TYPE_PUBIC,
		LAYER_TYPE_BODY,
		
		LAYER_TYPE_CONDOM_FLOOR
	]
	
	return layerArray;
};

//Stripper Pussy
Game_Actor.prototype.getLayerLoadout_StripperPussy = function() {
	let layerArray = [];
	let tempArray = [];	
	
	let mergedRightArmArray = false;
	let rightArmArray = [ LAYER_TYPE_RIGHT_ARM ];
	
	let mergedFrontDArray = false;
	let frontDArray = [ LAYER_TYPE_FRONT_D ];
	
	let rightArmIsKupa = this.tachieRightArm.includes('kupa');

	let isPcup = this.boobsSizeIsPCup();
	
	tempArray = [
		LAYER_TYPE_FRONT_B
	]
	layerArray = layerArray.concat(tempArray);
	
	if(isPcup) {
		tempArray = [
			LAYER_TYPE_CONDOM_CHIKUBI,
			LAYER_TYPE_CONDOM_BRA,
			LAYER_TYPE_CONDOM_BELT,
			LAYER_TYPE_CONDOM_HEAD
		]
		layerArray = layerArray.concat(tempArray);
	}
	else {
		tempArray = [
			LAYER_TYPE_CONDOM_BELT,
			LAYER_TYPE_CONDOM_CHIKUBI,
			LAYER_TYPE_CONDOM_BRA,
			LAYER_TYPE_CONDOM_HEAD
		]
		layerArray = layerArray.concat(tempArray);
	}
	
	tempArray = [
		LAYER_TYPE_STRAY_FACE,
		LAYER_TYPE_STRAY_BOOBS,
		LAYER_TYPE_STRAY_GROIN,
		LAYER_TYPE_STRAY_BUTT
	]
	layerArray = layerArray.concat(tempArray);

	if(!mergedFrontDArray && isPcup) {
		layerArray = layerArray.concat(frontDArray);
		mergedFrontDArray = true;
	}
	
	tempArray = [	
		LAYER_TYPE_BOOBS
	]
	layerArray = layerArray.concat(tempArray);
		
	if(!mergedRightArmArray && !rightArmIsKupa) {
		layerArray = layerArray.concat(rightArmArray);
		mergedRightArmArray = true;
	}	
		
	tempArray = [	
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_MOUTH,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HAIR,
		LAYER_TYPE_HOPPE,
		
		LAYER_TYPE_FRONT_A,
		LAYER_TYPE_PANTIES,

		LAYER_TYPE_WET,
		LAYER_TYPE_PUBIC
	]
	layerArray = layerArray.concat(tempArray);	
		
	if(!mergedFrontDArray) {
		layerArray = layerArray.concat(frontDArray);
		mergedFrontDArray = true;
	}	
		
	tempArray = [		
		LAYER_TYPE_BACK_A,
		LAYER_TYPE_BODY
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedRightArmArray && rightArmIsKupa) {
		layerArray = layerArray.concat(rightArmArray);
		mergedRightArmArray = true;
	}	
	
	tempArray = [	
		LAYER_TYPE_CONDOM_FLOOR
	]
	layerArray = layerArray.concat(tempArray);

	return layerArray;
};


//Stripper Butt
Game_Actor.prototype.getLayerLoadout_StripperButt = function() {
	let layerArray = [];
	let tempArray = [];	
	
	let mergedCondomButtArray = false;
	let condomButtArray = [ LAYER_TYPE_CONDOM_BUTT ];
	
	let condomButtIsKupa = this.tachieCondomButt.includes('kupa');
	
	if(!mergedCondomButtArray && condomButtIsKupa) {
		layerArray = layerArray.concat(condomButtArray);
		mergedCondomButtArray = true;
	}	
	
	tempArray = [	
		LAYER_TYPE_FRONT_B
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedCondomButtArray) {
		layerArray = layerArray.concat(condomButtArray);
		mergedCondomButtArray = true;
	}	
	
	tempArray = [
		LAYER_TYPE_CONDOM_BELT,
		LAYER_TYPE_CONDOM_HEAD,
		
		LAYER_TYPE_STRAY_FACE,
		LAYER_TYPE_STRAY_BOOBS,
		LAYER_TYPE_STRAY_GROIN,
		LAYER_TYPE_STRAY_BUTT,
		
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_MOUTH,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HAIR,
		LAYER_TYPE_HOPPE,
		
		LAYER_TYPE_FRONT_A,
		LAYER_TYPE_FRONT_E,
		
		LAYER_TYPE_PANTIES,
		
		LAYER_TYPE_WET,
		
		LAYER_TYPE_FRONT_C,
		LAYER_TYPE_FRONT_D,
		
		LAYER_TYPE_PUBIC,
		LAYER_TYPE_BODY,
		
		LAYER_TYPE_RIGHT_ARM,
		
		LAYER_TYPE_CONDOM_BRA,
		LAYER_TYPE_BOOBS,
		
		LAYER_TYPE_CONDOM_CHIKUBI,
		LAYER_TYPE_POLE,
		
		LAYER_TYPE_CONDOM_FLOOR
	]
	layerArray = layerArray.concat(tempArray);

	return layerArray;
};

//Stripper VIP
//Stripper Sex
Game_Actor.prototype.getLayerLoadout_StripperVIP = function() {
	let layerArray = [];
	let tempArray = [];	
	
	let headIsFera = this.tachieHead.includes('fera');
	let isPcup = this.boobsSizeIsPCup();
	
	tempArray = [
		LAYER_TYPE_CONDOM_CHIKUBI,
		
		LAYER_TYPE_SEMEN_COCK_BOOBS,
		LAYER_TYPE_SEMEN_BOOBS,
		LAYER_TYPE_SEMEN_COCK_PUSSY,
		LAYER_TYPE_SEMEN_COCK_ANAL,
		
		LAYER_TYPE_COCK_BOOBS,
		LAYER_TYPE_COCK_PUSSY,
		LAYER_TYPE_COCK_ANAL,
		
		LAYER_TYPE_FRONT_A
	]
	layerArray = layerArray.concat(tempArray);	
		
	if(isPcup) {
		tempArray = [	
			LAYER_TYPE_STRAY_BOOBS,
			LAYER_TYPE_BOOBS,
			LAYER_TYPE_STRAY_FACE
		]
		layerArray = layerArray.concat(tempArray);	
	}		
	else {
		tempArray = [	
			LAYER_TYPE_STRAY_FACE,
			LAYER_TYPE_STRAY_BOOBS,
			LAYER_TYPE_BOOBS
		]
		layerArray = layerArray.concat(tempArray);	
	}	
		
	tempArray = [	
		LAYER_TYPE_CONDOM_HEAD,
		LAYER_TYPE_CONDOM_BELT,
		
		LAYER_TYPE_SEMEN_COCK_MOUTH,
		LAYER_TYPE_SEMEN_FACE
	]
	layerArray = layerArray.concat(tempArray);
		
	if(headIsFera) {
		tempArray = [	
			LAYER_TYPE_EYEBROWS,
			LAYER_TYPE_EYES,
			LAYER_TYPE_SWEAT,
			LAYER_TYPE_HOPPE,
			LAYER_TYPE_MOUTH,
			LAYER_TYPE_COCK_MOUTH,
			LAYER_TYPE_HAIR,
			LAYER_TYPE_HEAD
		]
		layerArray = layerArray.concat(tempArray);	
	}		
	else {
		tempArray = [	
			LAYER_TYPE_EYEBROWS,
			LAYER_TYPE_EYES,
			LAYER_TYPE_MOUTH,
			LAYER_TYPE_SWEAT,
			LAYER_TYPE_HAIR,
			LAYER_TYPE_HOPPE,
			LAYER_TYPE_HEAD
		]
		layerArray = layerArray.concat(tempArray);	
	}
	
	tempArray = [		
		LAYER_TYPE_SEMEN_COCK_RIGHT_ARM,
		LAYER_TYPE_SEMEN_COCK_LEFT_ARM,
		LAYER_TYPE_SEMEN_LEFT_ARM,
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		
		LAYER_TYPE_COCK_RIGHT_ARM,
		LAYER_TYPE_COCK_LEFT_ARM,
		
		LAYER_TYPE_RIGHT_ARM,
		LAYER_TYPE_LEFT_ARM,
		
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_SEMEN_ANAL,
		LAYER_TYPE_SEMEN_BELLY,
		LAYER_TYPE_SEMEN_RIGHT_LEG,
		LAYER_TYPE_SEMEN_LEFT_LEG,
		LAYER_TYPE_SEMEN_BUTT,
		LAYER_TYPE_WET,
		
		LAYER_TYPE_STRAY_GROIN,
		LAYER_TYPE_STRAY_BUTT,
		
		LAYER_TYPE_PUBIC,
		
		LAYER_TYPE_HOLE_PUSSY,
		LAYER_TYPE_HOLE_ANUS,
		LAYER_TYPE_BODY,
		
		LAYER_TYPE_SEMEN_FRONT_C,
		LAYER_TYPE_SEMEN_FRONT_B,
		LAYER_TYPE_SEMEN_FRONT_A
	]
	layerArray = layerArray.concat(tempArray);
	
	
	return layerArray;
};

//Gym

//Trainer Tekoki
Game_Actor.prototype.getLayerLoadout_TrainerTekoki = function() {
	let layerArray = [];
	let tempArray = [];	
	
	let mergedRightArmArray = false;
	let rightArmArray = [ LAYER_TYPE_RIGHT_ARM ];
	
	let mergedFrontAArray = false;
	let frontAArray = [ LAYER_TYPE_FRONT_A ];
	
	let mergedSemenLeftArmArray = false;
	let semenLeftArmArray = [ LAYER_TYPE_SEMEN_LEFT_ARM ];
	
	tempArray = [	
		LAYER_TYPE_SEMEN_RIGHT_ARM
	]
	layerArray = layerArray.concat(tempArray);	
	
	if((this.tachieLeftArm.includes('hj') || this.tachieLeftArm.includes('pet') || this.tachieLeftArm.includes('advice')) && !mergedSemenLeftArmArray) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmArray = true;
	}
	
	
	
	if((this.tachieRightArm.includes('peace') || this.tachieRightArm.includes('mouth')) && !mergedRightArmArray) {
		layerArray = layerArray.concat(rightArmArray);
		mergedRightArmArray = true;
	}
	
	tempArray = [	
		LAYER_TYPE_HOOD,
		LAYER_TYPE_CAP
	]
	layerArray = layerArray.concat(tempArray);	
		
	if(!mergedRightArmArray) {
		layerArray = layerArray.concat(rightArmArray);
		mergedRightArmArray = true;
	}	
		
	if(!this.tachieFrontA.includes('thigh') && !mergedFrontAArray) {
		layerArray = layerArray.concat(frontAArray);
		mergedFrontAArray = true;
	}	

	tempArray = [	
		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_SEMEN_COCK_NORMAL,
		
		LAYER_TYPE_STRAY_FACE,
		LAYER_TYPE_STRAY_BOOBS,
		LAYER_TYPE_STRAY_BUTT,
	
		LAYER_TYPE_COCK_NORMAL,
		LAYER_TYPE_BACK_C,
		
		LAYER_TYPE_SEMEN_BOOBS
	]
	layerArray = layerArray.concat(tempArray);	
	
	if(this.tachieLeftArm.includes('thigh') && !mergedSemenLeftArmArray) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmArray = true;
	}
	
	if(!mergedFrontAArray) {
		layerArray = layerArray.concat(frontAArray);
		mergedFrontAArray = true;
	}

	tempArray = [		
		LAYER_TYPE_BACK_B,
		LAYER_TYPE_BACK_A,
		
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_MOUTH,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HOPPE,

		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_SEMEN_BUTT,
		
		LAYER_TYPE_HAIR,
		LAYER_TYPE_BODY
	]
	layerArray = layerArray.concat(tempArray);	
		
	if(!mergedSemenLeftArmArray) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmArray = true;
	}		
	
	tempArray = [		
		LAYER_TYPE_LEFT_ARM,
		
		LAYER_TYPE_SEMEN_FRONT_C,
		LAYER_TYPE_SEMEN_FRONT_B,
		LAYER_TYPE_SEMEN_FRONT_A
		
	]
	layerArray = layerArray.concat(tempArray);
	
	

	return layerArray;
};

//Trainer Kisu
Game_Actor.prototype.getLayerLoadout_TrainerKisu = function() {
	let layerArray = [];
	let tempArray = [];	
	
	let isPcup = this.boobsSizeIsPCup();
	let leftArmIsThigh = this.tachieLeftArm.includes('thigh');
	
	let mergedLeftArmArray = false;
	let leftArmArray = [ LAYER_TYPE_LEFT_ARM ];
	
	let mergedSemenLeftArmArray = false;
	let semenLeftArmArray = [ LAYER_TYPE_SEMEN_LEFT_ARM ];
	
	let mergedSemenBoobsArray = false;
	let semenBoobsArray = [ LAYER_TYPE_SEMEN_BOOBS ];
	
	let mergedStrayBoobsArray = false;
	let strayBoobsArray = [ LAYER_TYPE_STRAY_BOOBS ];
	
	if(isPcup && !mergedSemenBoobsArray) {
		layerArray = layerArray.concat(semenBoobsArray);
		mergedSemenBoobsArray = true;
	}	
	
	tempArray = [	
		LAYER_TYPE_SEMEN_FACE
	]
	layerArray = layerArray.concat(tempArray);
		
	if(isPcup && !mergedStrayBoobsArray) {
		layerArray = layerArray.concat(strayBoobsArray);
		mergedStrayBoobsArray = true;
	}	
	
	tempArray = [		
		LAYER_TYPE_STRAY_FACE,
	
		LAYER_TYPE_BOOBS,
	
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_MOUTH,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HOPPE,
	
		LAYER_TYPE_HOOD,
		LAYER_TYPE_CAP,
		LAYER_TYPE_HAIR,
		LAYER_TYPE_HEAD,
		
		LAYER_TYPE_SEMEN_RIGHT_ARM
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedSemenBoobsArray) {
		layerArray = layerArray.concat(semenBoobsArray);
		mergedSemenBoobsArray = true;
	}	
	if(!mergedStrayBoobsArray) {
		layerArray = layerArray.concat(strayBoobsArray);
		mergedStrayBoobsArray = true;
	}	
		
	tempArray = [		
		LAYER_TYPE_BODY
	]
	layerArray = layerArray.concat(tempArray);
		
	if(!leftArmIsThigh && !mergedSemenLeftArmArray) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmArray = true;
	}	
		
	if(!leftArmIsThigh && !mergedLeftArmArray) {
		layerArray = layerArray.concat(leftArmArray);
		mergedLeftArmArray = true;
	}
		
	tempArray = [	
		LAYER_TYPE_SEMEN_COCK_NORMAL,
	
		LAYER_TYPE_COCK_NORMAL,
		LAYER_TYPE_BACK_C
	]
	layerArray = layerArray.concat(tempArray);
		
	if(leftArmIsThigh && !mergedSemenLeftArmArray) {
		layerArray = layerArray.concat(semenLeftArmArray);
		mergedSemenLeftArmArray = true;
	}		
		
	if(leftArmIsThigh && !mergedLeftArmArray) {
		layerArray = layerArray.concat(leftArmArray);
		mergedLeftArmArray = true;
	}
		
	tempArray = [	
		LAYER_TYPE_BACK_B,
		LAYER_TYPE_BACK_A,
		
		LAYER_TYPE_SEMEN_FRONT_C,
		LAYER_TYPE_SEMEN_FRONT_B,
		LAYER_TYPE_SEMEN_FRONT_A
	]
	layerArray = layerArray.concat(tempArray);
	

	return layerArray;
};

//Trainer Fera
Game_Actor.prototype.getLayerLoadout_TrainerFera = function() {
	let layerArray = [];
	let tempArray = [];	
	
	let headIsClose = this.tachieHead && this.tachieHead.includes('close');
	let hoodIsOff = this.tachieHood.includes('off');
	
	let mergedHoodArray = false;
	let hoodArray = [ LAYER_TYPE_HOOD ];
	
	let mergedSemenArmsArray = false;
	let semenArmsArray = [ LAYER_TYPE_SEMEN_RIGHT_ARM, LAYER_TYPE_SEMEN_LEFT_ARM ];
	
	let mergedSemenFaceArray = false;
	let semenFaceArray = [ LAYER_TYPE_SEMEN_FACE ];
	
	let mergedStrayFaceArray = false;
	let strayFaceArray = [ LAYER_TYPE_STRAY_FACE ];
	
	if(this.tachieFrontA.includes('close_peace') && !mergedSemenArmsArray) {
		layerArray = layerArray.concat(semenArmsArray);
		mergedSemenArmsArray = true;
	}
	
	if(headIsClose && !mergedSemenFaceArray) {
		layerArray = layerArray.concat(semenFaceArray);
		mergedSemenFaceArray = true;
	}
	
	if(!mergedSemenArmsArray) {
		layerArray = layerArray.concat(semenArmsArray);
		mergedSemenArmsArray = true;
	}
	
	if(headIsClose && !mergedStrayFaceArray) {
		layerArray = layerArray.concat(strayFaceArray);
		mergedStrayFaceArray = true;
	}
	
	tempArray = [	
		LAYER_TYPE_FRONT_A,
	]
	layerArray = layerArray.concat(tempArray);
	
	if(headIsClose) {
		if(!hoodIsOff && !mergedHoodArray) {
			layerArray = layerArray.concat(hoodArray);
			mergedHoodArray = true;
		}
		
		tempArray = [	
			LAYER_TYPE_CAP,
			LAYER_TYPE_EYEBROWS,
			LAYER_TYPE_EYES,
			LAYER_TYPE_MOUTH,
			LAYER_TYPE_SWEAT,
			LAYER_TYPE_HOPPE,
			LAYER_TYPE_HAIR,
			LAYER_TYPE_HEAD
			
		]
		layerArray = layerArray.concat(tempArray);
	}
	
	tempArray = [	
		LAYER_TYPE_SEMEN_COCK_NORMAL,
		LAYER_TYPE_COCK_NORMAL,
		LAYER_TYPE_BACK_C,
		LAYER_TYPE_BACK_B,
		LAYER_TYPE_BACK_A,
		
		LAYER_TYPE_FRONT_B
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedSemenFaceArray) {
		layerArray = layerArray.concat(semenFaceArray);
		mergedSemenFaceArray = true;
	}
	
	tempArray = [	
		LAYER_TYPE_SEMEN_BOOBS
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedStrayFaceArray) {
		layerArray = layerArray.concat(strayFaceArray);
		mergedStrayFaceArray = true;
	}
	
	tempArray = [	
		LAYER_TYPE_STRAY_BOOBS
	]
	layerArray = layerArray.concat(tempArray);
	
	if(headIsClose && hoodIsOff && !mergedHoodArray) {
		layerArray = layerArray.concat(hoodArray);
		mergedHoodArray = true;
	}
	
	if(!headIsClose) {
		tempArray = [	
			LAYER_TYPE_EYEBROWS,
			LAYER_TYPE_EYES,
			LAYER_TYPE_MOUTH,
			LAYER_TYPE_HOPPE,
			LAYER_TYPE_SWEAT,
			LAYER_TYPE_HOOD,
			LAYER_TYPE_CAP,
			LAYER_TYPE_HAIR
		]
		layerArray = layerArray.concat(tempArray);
		
		mergedHoodArray = true;
	}
	
	tempArray = [	
		LAYER_TYPE_BODY,
		
		LAYER_TYPE_SEMEN_FRONT_C,
		LAYER_TYPE_SEMEN_FRONT_B,
		LAYER_TYPE_SEMEN_FRONT_A
	]
	layerArray = layerArray.concat(tempArray);
	
	return layerArray;
};

//Trainer Paizuri
Game_Actor.prototype.getLayerLoadout_TrainerPaizuri = function() {
	let layerArray = [];
	let tempArray = [];	
	
	let bodyIsZuri = this.tachieBody.includes('zuri');
	let bodyIsBoobs = this.tachieBody.includes('boobs');
	
	let mergedBodyArray = false;
	let bodyArray = [ LAYER_TYPE_BODY ];
	
	let mergedBoobsArray = false;
	let boobsArray = [ LAYER_TYPE_BOOBS ];
	
	let mergedFrontBArray = false;
	let frontBArray = [ LAYER_TYPE_FRONT_B ];
	
	let mergedSemenBoobsArray = false;
	let semenBoobsArray = [ LAYER_TYPE_SEMEN_BOOBS ];
	
	let mergedStrayBoobsArray = false;
	let strayBoobsArray = [ LAYER_TYPE_STRAY_BOOBS ];
	
	let mergedSemenCockNormalArray = false;
	let semenCockNormalArray = [ LAYER_TYPE_SEMEN_COCK_NORMAL ];
	
	if(this.tachieCock.includes('boobs') && !mergedSemenCockNormalArray) {
		layerArray = layerArray.concat(semenCockNormalArray);
		mergedSemenCockNormalArray = true;
	}	
	
	tempArray = [	
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		LAYER_TYPE_SEMEN_LEFT_ARM,
		
		LAYER_TYPE_FRONT_A
	]
	layerArray = layerArray.concat(tempArray);
	
	if(bodyIsBoobs && !mergedFrontBArray) {
		layerArray = layerArray.concat(frontBArray);
		mergedFrontBArray = true;
	}

	if(!mergedSemenCockNormalArray) {
		layerArray = layerArray.concat(semenCockNormalArray);
		mergedSemenCockNormalArray = true;
	}
		
	tempArray = [		
		LAYER_TYPE_HOOD,
		LAYER_TYPE_CAP,
		
		LAYER_TYPE_COCK_BOOBS,
		LAYER_TYPE_COCK_NORMAL,
		
		LAYER_TYPE_SEMEN_FACE
	]
	layerArray = layerArray.concat(tempArray);	
		
	if(bodyIsZuri && !mergedSemenBoobsArray) {
		layerArray = layerArray.concat(semenBoobsArray);
		mergedSemenBoobsArray = true;
	}		
		
	tempArray = [
		LAYER_TYPE_STRAY_FACE
	]
	layerArray = layerArray.concat(tempArray);
	
	if(bodyIsZuri && !mergedStrayBoobsArray) {
		layerArray = layerArray.concat(strayBoobsArray);
		mergedStrayBoobsArray = true;
	}	
	
	tempArray = [
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_MOUTH,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HOPPE,
		
		LAYER_TYPE_HAIR,
		LAYER_TYPE_HEAD
	]
	layerArray = layerArray.concat(tempArray);
	
	tempArray = [
		LAYER_TYPE_FRONT_C
	]
	layerArray = layerArray.concat(tempArray);
	
	if(bodyIsZuri && !mergedBoobsArray) {
		layerArray = layerArray.concat(boobsArray);
		mergedBoobsArray = true;
	}
	if(bodyIsZuri && !mergedBodyArray) {
		layerArray = layerArray.concat(bodyArray);
		mergedBodyArray = true;
	}
	
	tempArray = [		
		LAYER_TYPE_BACK_C,
		LAYER_TYPE_BACK_B,
		LAYER_TYPE_BACK_A
	]
	layerArray = layerArray.concat(tempArray);
	
	if(!mergedSemenBoobsArray) {
		layerArray = layerArray.concat(semenBoobsArray);
		mergedSemenBoobsArray = true;
	}
	
	if(!mergedStrayBoobsArray) {
		layerArray = layerArray.concat(strayBoobsArray);
		mergedStrayBoobsArray = true;
	}	
	
	if(bodyIsBoobs && !mergedBoobsArray) {
		layerArray = layerArray.concat(boobsArray);
		mergedBoobsArray = true;
	}
	if(bodyIsBoobs && !mergedBodyArray) {
		layerArray = layerArray.concat(bodyArray);
		mergedBodyArray = true;
	}

	
	if(!mergedBoobsArray) {
		layerArray = layerArray.concat(boobsArray);
		mergedBoobsArray = true;
	}
	
	if(!mergedFrontBArray) {
		layerArray = layerArray.concat(frontBArray);
		mergedFrontBArray = true;
	}
	
	if(!mergedBodyArray) {
		layerArray = layerArray.concat(bodyArray);
		mergedBodyArray = true;
	}
	
	tempArray = [		
		LAYER_TYPE_BACK_D,
	
		LAYER_TYPE_SEMEN_FRONT_C,
		LAYER_TYPE_SEMEN_FRONT_B,
		LAYER_TYPE_SEMEN_FRONT_A
	]
	layerArray = layerArray.concat(tempArray);
	

	return layerArray;
};

//Trainer Rinkan
Game_Actor.prototype.getLayerLoadout_TrainerRinkan = function() {
	let layerArray = [];
	let tempArray = [];	
	
	let headIsFera = this.tachieHead.includes('fera');
	
	tempArray = [	
		LAYER_TYPE_SEMEN_COCK_ANAL,
		LAYER_TYPE_SEMEN_COCK_PUSSY,
		LAYER_TYPE_SEMEN_COCK_MOUTH,
		LAYER_TYPE_SEMEN_LEFT_LEG,
		LAYER_TYPE_SEMEN_RIGHT_LEG,
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		LAYER_TYPE_SEMEN_BUTT,
		LAYER_TYPE_SEMEN_FACE,
		
		LAYER_TYPE_SEMEN_BACK,
		LAYER_TYPE_SEMEN_BELLY,
		LAYER_TYPE_SEMEN_BOOBS,
		
		LAYER_TYPE_STRAY_FACE,
		LAYER_TYPE_STRAY_BOOBS,
	
		LAYER_TYPE_HOOD,
		LAYER_TYPE_CAP
	]
	layerArray = layerArray.concat(tempArray);
	
	if(headIsFera) {
		tempArray = [	
			LAYER_TYPE_EYEBROWS,
			LAYER_TYPE_EYES,
			LAYER_TYPE_SWEAT,
			LAYER_TYPE_HOPPE,
			LAYER_TYPE_MOUTH
		]
		layerArray = layerArray.concat(tempArray);
	}
	else {
	//Head normal
		tempArray = [	
			LAYER_TYPE_EYEBROWS,
			LAYER_TYPE_EYES,
			LAYER_TYPE_MOUTH,
			LAYER_TYPE_SWEAT,
			LAYER_TYPE_HOPPE
		]
		layerArray = layerArray.concat(tempArray);
	}
	
	tempArray = [	
		LAYER_TYPE_BOOBS,
		LAYER_TYPE_HAIR,
		LAYER_TYPE_HEAD,
		
		LAYER_TYPE_COCK_MOUTH,
		LAYER_TYPE_COCK_ANAL,
		LAYER_TYPE_COCK_PUSSY,
		
		LAYER_TYPE_SEMEN_ANAL,
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_WET,
		
		LAYER_TYPE_STRAY_GROIN,
		LAYER_TYPE_STRAY_BUTT,
		
		LAYER_TYPE_PUBIC,
		
		LAYER_TYPE_HOLE_ANUS,
		LAYER_TYPE_HOLE_PUSSY,
		
		LAYER_TYPE_SPANKMARK_LEFTBUTT,
		LAYER_TYPE_SPANKMARK_RIGHTBUTT,
		LAYER_TYPE_BODY,
		
		LAYER_TYPE_SEMEN_FRONT_C,
		LAYER_TYPE_SEMEN_FRONT_B,
		LAYER_TYPE_SEMEN_FRONT_A
	]
	layerArray = layerArray.concat(tempArray);

	return layerArray;
};


//Attack
Game_Actor.prototype.getLayerLoadout_Attack = function() {
	let layerArray = [];
	let tempArray = [];	
	
	tempArray = [	
		LAYER_TYPE_HAT,
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		LAYER_TYPE_SEMEN_BOOBS,
		
		LAYER_TYPE_STRAY_BOOBS,
		LAYER_TYPE_STRAY_BUTT,
		LAYER_TYPE_STRAY_GROIN,
		LAYER_TYPE_STRAY_FACE,
		
		LAYER_TYPE_BOOBS,
		LAYER_TYPE_WEAPON,
		LAYER_TYPE_RIGHT_ARM,
		
		LAYER_TYPE_SEMEN_BUTT,
		LAYER_TYPE_SEMEN_BACK,
		LAYER_TYPE_SEMEN_BELLY,
		LAYER_TYPE_SEMEN_FACE,
		
		LAYER_TYPE_HIPS,
		
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_MOUTH,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HOPPE,
		
		LAYER_TYPE_PANTIES,
		
		LAYER_TYPE_HAIR,
		LAYER_TYPE_PUBIC,
		
		LAYER_TYPE_TOY_CLIT,
		
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_WET,
		
		LAYER_TYPE_BODY,
		
		LAYER_TYPE_SEMEN_LEFT_ARM,
		LAYER_TYPE_LEFT_ARM,
	
		LAYER_TYPE_TOY_ANAL,
		LAYER_TYPE_TOY_PUSSY,
		
		LAYER_TYPE_SEMEN_FLOOR
	]
	layerArray = layerArray.concat(tempArray);
	
	return layerArray;
};

//Defend
Game_Actor.prototype.getLayerLoadout_Defend = function() {
	let layerArray = [];
	let tempArray = [];	
	
	tempArray = [	
		LAYER_TYPE_WEAPON,
		LAYER_TYPE_HAT,
		
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		LAYER_TYPE_SEMEN_LEFT_ARM,
		
		LAYER_TYPE_LEFT_ARM,
		LAYER_TYPE_FRONT_B,
		LAYER_TYPE_FRONT_A,
		
		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_SEMEN_BOOBS,
		
		LAYER_TYPE_STRAY_FACE,
		LAYER_TYPE_STRAY_BOOBS,
		
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_MOUTH,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HAIR,
		LAYER_TYPE_HOPPE,
		
		LAYER_TYPE_TOY_PUSSY,
		
		LAYER_TYPE_BOOBS,
		
		LAYER_TYPE_SEMEN_BELLY,
		
		LAYER_TYPE_HIPS,
		LAYER_TYPE_TOY_CLIT,
		LAYER_TYPE_PANTIES,
		
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_WET,
	
		LAYER_TYPE_STRAY_GROIN,
		LAYER_TYPE_STRAY_BUTT,
		
		
		LAYER_TYPE_PUBIC,
		LAYER_TYPE_BODY,
		
		LAYER_TYPE_RIGHT_ARM,
		
		LAYER_TYPE_TOY_ANAL,
		
		LAYER_TYPE_SEMEN_FLOOR
	]
	layerArray = layerArray.concat(tempArray);
	
	return layerArray;
};

//Evade
Game_Actor.prototype.getLayerLoadout_Evade = function() {
	let layerArray = [];
	let tempArray = [];	
	
	tempArray = [	
		LAYER_TYPE_HAT,
		LAYER_TYPE_WEAPON,
		
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		
		LAYER_TYPE_RIGHT_ARM,
		
		LAYER_TYPE_TOY_ANAL,
		LAYER_TYPE_TOY_PUSSY,
		LAYER_TYPE_TOY_CLIT,
		
		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_SEMEN_BACK,
		LAYER_TYPE_SEMEN_BOOBS,
		LAYER_TYPE_SEMEN_BUTT,
		
	
		LAYER_TYPE_STRAY_FACE,
		LAYER_TYPE_STRAY_BOOBS,
		LAYER_TYPE_STRAY_GROIN,
		
		
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_MOUTH,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HOPPE,
		
		LAYER_TYPE_HAIR,
		LAYER_TYPE_HIPS,
		
		LAYER_TYPE_BOOBS,
		
		LAYER_TYPE_PANTIES,
		
		LAYER_TYPE_STRAY_BUTT,
		
		LAYER_TYPE_SEMEN_ANAL,
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_WET,
		
		LAYER_TYPE_PUBIC,
		LAYER_TYPE_BODY,
		
		LAYER_TYPE_SEMEN_LEFT_ARM,
		LAYER_TYPE_LEFT_ARM,
		
		LAYER_TYPE_SEMEN_FLOOR
	]
	layerArray = layerArray.concat(tempArray);
	
	return layerArray;
};

//Kick
Game_Actor.prototype.getLayerLoadout_Kick = function() {
	let layerArray = [];
	let tempArray = [];	
	
	let isPcup = this.boobsSizeIsPCup();
	
	
	tempArray = [	
		LAYER_TYPE_SEMEN_BUTT,
	
		LAYER_TYPE_FRONT_C,
		LAYER_TYPE_FRONT_B
	]
	layerArray = layerArray.concat(tempArray);	
	
	if(isPcup) {
		tempArray = [	
			LAYER_TYPE_SEMEN_BOOBS,
			LAYER_TYPE_STRAY_BOOBS,
			LAYER_TYPE_BOOBS
		]
		layerArray = layerArray.concat(tempArray);	
	}
		
	tempArray = [		
		LAYER_TYPE_FRONT_A,
		
		LAYER_TYPE_TOY_PUSSY,
		LAYER_TYPE_TOY_ANAL,
		LAYER_TYPE_TOY_CLIT,
		
		LAYER_TYPE_HAT
	]
	layerArray = layerArray.concat(tempArray);	
	
	if(!isPcup) {
		tempArray = [	
			LAYER_TYPE_SEMEN_BOOBS
		]
		layerArray = layerArray.concat(tempArray);	
	}

	tempArray = [		
		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		LAYER_TYPE_SEMEN_BACK,
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_SEMEN_ANAL,
		LAYER_TYPE_WET_PANTIES,
		LAYER_TYPE_WET
	]
	layerArray = layerArray.concat(tempArray);		
		
	if(!isPcup) {
		tempArray = [	
			LAYER_TYPE_STRAY_BOOBS
		]
		layerArray = layerArray.concat(tempArray);	
	}
	
	tempArray = [
		LAYER_TYPE_STRAY_FACE,
		LAYER_TYPE_STRAY_GROIN,
		LAYER_TYPE_STRAY_BUTT
	]
	layerArray = layerArray.concat(tempArray);	
	
	if(!isPcup) {
		tempArray = [	
			LAYER_TYPE_BOOBS
		]
		layerArray = layerArray.concat(tempArray);	
	}

	tempArray = [
		LAYER_TYPE_SEMEN_LEFT_ARM,
	
		LAYER_TYPE_SEMEN_BELLY,
		
		LAYER_TYPE_PANTIES,
		LAYER_TYPE_HIPS,
		
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_MOUTH,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HAIR,
		LAYER_TYPE_HOPPE,
		
		LAYER_TYPE_LEFT_ARM,
		
		
		
		LAYER_TYPE_PUBIC,
		LAYER_TYPE_BODY,
		LAYER_TYPE_RIGHT_ARM,
		
		LAYER_TYPE_WEAPON,
		
		LAYER_TYPE_SEMEN_FLOOR
	]
	layerArray = layerArray.concat(tempArray);
	
	return layerArray;
};

//Standby
Game_Actor.prototype.getLayerLoadout_Standby = function() {
	let layerArray = [];
	let tempArray = [];	
	
	tempArray = [	
		LAYER_TYPE_FRONT_B,
		LAYER_TYPE_FRONT_A,
		LAYER_TYPE_HAT,
		
		LAYER_TYPE_SEMEN_BOOBS,
		LAYER_TYPE_STRAY_BOOBS,
		LAYER_TYPE_BOOBS,
		
		LAYER_TYPE_SEMEN_FACE,
		LAYER_TYPE_SEMEN_LEFT_ARM,
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		LAYER_TYPE_SEMEN_BELLY,
		
		LAYER_TYPE_STRAY_FACE,
		LAYER_TYPE_STRAY_GROIN,
		
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_MOUTH,
		LAYER_TYPE_SWEAT,
		
		LAYER_TYPE_HAIR,
		LAYER_TYPE_HOPPE,
		LAYER_TYPE_HEAD,
		
		LAYER_TYPE_HIPS,
		
		LAYER_TYPE_TOY_CLIT,
		LAYER_TYPE_TOY_PUSSY,
		LAYER_TYPE_TOY_ANAL,
		
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_WET,
		LAYER_TYPE_WET_PANTIES,
		
		LAYER_TYPE_PANTIES,
		LAYER_TYPE_PUBIC,
		LAYER_TYPE_BODY,
		
		LAYER_TYPE_LEFT_ARM,
		LAYER_TYPE_RIGHT_ARM,
		
		LAYER_TYPE_WEAPON,
		
		LAYER_TYPE_SEMEN_FLOOR
	]
	layerArray = layerArray.concat(tempArray);
	
	return layerArray;
};

//Unarmed
Game_Actor.prototype.getLayerLoadout_Unarmed = function() {
	let layerArray = [];
	let tempArray = [];	
	
	let leftArmIsConfident = this.tachieLeftArm.includes('confident');
	
	let mergedLeftArmArray = false;
	let leftArmArray = [ LAYER_TYPE_SEMEN_LEFT_ARM, LAYER_TYPE_LEFT_ARM ];
	
	tempArray = [	
		LAYER_TYPE_FRONT_B,
		LAYER_TYPE_FRONT_A,
		
		LAYER_TYPE_HAT
	]
	layerArray = layerArray.concat(tempArray);

	if(!leftArmIsConfident && !mergedLeftArmArray) {
		layerArray = layerArray.concat(leftArmArray);
		mergedLeftArmArray = true;
	}	
		
	tempArray = [		
		LAYER_TYPE_SEMEN_FACE,
		
		LAYER_TYPE_STRAY_FACE,
		
		LAYER_TYPE_EYEBROWS,
		LAYER_TYPE_EYES,
		LAYER_TYPE_MOUTH,
		LAYER_TYPE_SWEAT,
		LAYER_TYPE_HAIR,
		LAYER_TYPE_HOPPE,
		
		LAYER_TYPE_SEMEN_BOOBS,
		LAYER_TYPE_STRAY_BOOBS,
		LAYER_TYPE_BOOBS,
		
		LAYER_TYPE_TIE
	]
	layerArray = layerArray.concat(tempArray);

	if(!mergedLeftArmArray) {
		layerArray = layerArray.concat(leftArmArray);
		mergedLeftArmArray = true;
	}		
	
	tempArray = [	
		LAYER_TYPE_SEMEN_BELLY,
		LAYER_TYPE_SEMEN_BUTT,
		
		LAYER_TYPE_STRAY_GROIN,
		LAYER_TYPE_STRAY_BUTT,
		
		LAYER_TYPE_HIPS,
		
		LAYER_TYPE_TOY_CLIT,
		LAYER_TYPE_TOY_PUSSY,
		
		LAYER_TYPE_SEMEN_PUSSY,
		LAYER_TYPE_SEMEN_PUSSY_PANTIES,
		LAYER_TYPE_WET,
		LAYER_TYPE_WET_PANTIES,
		 
		LAYER_TYPE_PANTIES,
		LAYER_TYPE_PUBIC,
		 
		LAYER_TYPE_SEMEN_RIGHT_ARM,
		
		LAYER_TYPE_BODY,
		
		LAYER_TYPE_RIGHT_ARM,
		
		LAYER_TYPE_TOY_ANAL,
		
		LAYER_TYPE_SEMEN_FLOOR
	]
	layerArray = layerArray.concat(tempArray);
	
	return layerArray;
};