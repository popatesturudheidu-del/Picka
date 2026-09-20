var Remtairy = Remtairy || {};
Remtairy.Karryn = Remtairy.Karryn || {};

const SLUT_LVL_THRESHOLD_STAGE_1 = 20; //Less than this number for Stage x, so Stage 1 is 1~19
const SLUT_LVL_THRESHOLD_STAGE_2 = 45; //20~44
const SLUT_LVL_THRESHOLD_STAGE_3 = 75; //45~74
const SLUT_LVL_THRESHOLD_STAGE_4 = 125; //75~124
const SLUT_LVL_THRESHOLD_STAGE_5 = 200; //unused, Stage 5 is currently 125+

const VAR_ACCESSORY_CHARM_REQ_1 = 18;
const VAR_ACCESSORY_CHARM_REQ_2 = 24;
const VAR_ACCESSORY_CHARM_REQ_3 = 32;
const VAR_ACCESSORY_CHARM_REQ_4 = 42;
const VAR_ACCESSORY_CHARM_REQ_5 = 69;

const VAR_NONATTACK_DESIRE_REQ = 0.66;
const VAR_PANTIES_TOY_DESIRE_REQ = 1.15; //unused

const VAR_BREATH_H = 0.05;
const VAR_BREATH_SPEED_MIN = 0.4;

const VAR_STARTING_AGE = 26;

const ARMOR_TAG_EARRINGS = 'Earrings';
const ARMOR_TAG_RING = 'Ring';
const ARMOR_TAG_NECKLACE = 'Necklace';
const ARMOR_TAG_BRACELET = 'Bracelet';
const ARMOR_TAG_MISC = 'Misc';

const AREA_MOUTH = 'mouth';
const AREA_BOOBS = 'boobs';
const AREA_NIPPLES = 'nipples';
const AREA_CLIT = 'clit';
const AREA_PUSSY = 'pussy';
const AREA_BUTT = 'butt';
const AREA_ANAL = 'anal';
const AREA_COCK = 'cock';
const AREA_FINGERS = 'fingers';
const AREA_RANDOM = 'random';
const AREA_HANDSHAKE = 'handshake';

const SIGHT_MOUTH = 1;
const SIGHT_BOOBS = 2;
const SIGHT_NIPPLES = 3;
const SIGHT_CLIT = 4;
const SIGHT_PUSSY = 5;
const SIGHT_BUTT = 6;
const SIGHT_ANAL = 7;
const SIGHT_MOUTH_BLOWJOB = 8;
const SIGHT_BOOBS_PAIZURI = 9;
const SIGHT_CLIT_CUNNILINGUS = 10;
const SIGHT_PUSSY_SEX = 11;
const SIGHT_ANAL_SEX = 12;
const SIGHT_ANAL_CREAMPIE = 13;
const SIGHT_PUSSY_CREAMPIE = 14;
const SIGHT_BUKKAKE_FACE = 15;
const SIGHT_BUKKAKE_BOOBS = 16;
const SIGHT_BUKKAKE_BUTT = 17;
const SIGHT_MOUTH_SWALLOW = 18;
const SIGHT_RANDOM = 19;


const KISS_LVL_ONE = 'kisslvl1';
const KISS_LVL_TWO = 'kisslvl2';

const SPANK_LVL_ONE = 'spanklvl1';
const SPANK_LVL_TWO = 'spanklvl2';
const SPANK_LVL_THREE = 'spanklvl3';

const TOY_PINK_ROTOR = 'pinkrotor';
const TOY_PENIS_DILDO = 'penisdildo';
const TOY_ANAL_BEAD = 'analbead';

const SEXACT_HANDJOB = 'handjob';
const SEXACT_BLOWJOB = 'blowjob';
const SEXACT_TITTYFUCK = 'tittyfuck';
const SEXACT_PUSSYSEX = 'pussysex';
const SEXACT_ANALSEX = 'analsex';
const SEXACT_CUNNILINGUS = 'cunnilingus';
const SEXACT_RIMJOB = 'rimjob';
const SEXACT_FOOTJOB = 'footjob';

const CUM_BUKKAKE_FACE = 'bukkakeface';
const CUM_BUKKAKE_BOOBS = 'bukkakeboobs';
const CUM_BUKKAKE_LEFTBOOB = 'bukkakeleftboob';
const CUM_BUKKAKE_RIGHTBOOB = 'bukkakerightboob';
const CUM_BUKKAKE_BUTT = 'bukkakebutt';
const CUM_BUKKAKE_BUTT_TOPRIGHT = 'bukkakebutttopright';
const CUM_BUKKAKE_BUTT_TOPLEFT = 'bukkakebutttopleft';
const CUM_BUKKAKE_BUTT_BOTTOMRIGHT = 'bukkakebuttbottomright';
const CUM_BUKKAKE_BUTT_BOTTOMLEFT = 'bukkakebuttbottomleft';
const CUM_BUKKAKE_LEFTARM = 'bukkakeleftarm';
const CUM_BUKKAKE_RIGHTARM = 'bukkakerightarm';
const CUM_BUKKAKE_LEFTLEG = 'bukkakeleftleg';
const CUM_BUKKAKE_RIGHTLEG = 'bukkakerightleg';
const CUM_SWALLOW_MOUTH = 'swallowmouth';
const CUM_CREAMPIE_PUSSY = 'creampiepussy';
const CUM_CREAMPIE_ANAL = 'creampieanal';
const CUM_INTO_MUG = 'cumintomug';
const CUM_ONTO_DESK = 'cumontodesk';
const CUM_ONTO_FLOOR = 'cumontofloor';
const CUM_INTO_CONDOM = 'cumintocondom';

//=============================================================================
 /*:
 * @plugindesc Karryn
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================

const ACTOR_KARRYN_ID = 1;

const EQUIP_SLOT_WEAPON_ID = 0;
const EQUIP_SLOT_ACCESSORY_START_ID = 1;
const EQUIP_SLOT_ACCESSORY_END_ID = 5;
const EQUIP_SLOT_TITLE_ID = 6;
const EQUIP_SLOT_LOAD_SET_ID = 7;
const EQUIP_SLOT_SAVE_SET_ID = 8;

const ACCESSORY_ID_START_ONE = 17;
const ACCESSORY_ID_END_ONE = 48;
const ACCESSORY_ID_START_TWO = 430;
const ACCESSORY_ID_END_TWO = 445;

const SAVE_EQUIP_SET_1_ID = 410;
const SAVE_EQUIP_SET_2_ID = 411;
const SAVE_EQUIP_SET_3_ID = 412;
const SAVE_EQUIP_SET_4_ID = 413;
const SAVE_EQUIP_SET_5_ID = 414;
const SAVE_EQUIP_SET_6_ID = 415;
const SAVE_EQUIP_SET_7_ID = 416;
const SAVE_EQUIP_SET_8_ID = 417;

const LOAD_EQUIP_SET_1_ID = 420;
const LOAD_EQUIP_SET_2_ID = 421;
const LOAD_EQUIP_SET_3_ID = 422;
const LOAD_EQUIP_SET_4_ID = 423;
const LOAD_EQUIP_SET_5_ID = 424;
const LOAD_EQUIP_SET_6_ID = 425;
const LOAD_EQUIP_SET_7_ID = 426;
const LOAD_EQUIP_SET_8_ID = 427;

const EQUIP_SET_1_ID = 1;
const EQUIP_SET_2_ID = 2;
const EQUIP_SET_3_ID = 3;
const EQUIP_SET_4_ID = 4;
const EQUIP_SET_5_ID = 5;
const EQUIP_SET_6_ID = 6;
const EQUIP_SET_7_ID = 7;
const EQUIP_SET_8_ID = 8;

const CLOTHING_ID_WARDEN = 1;
const CLOTHING_ID_NAKED = 2; //unused, legacy code
const CLOTHING_ID_SECRETARY = 3;
const CLOTHING_ID_WAITRESS = 4;
const CLOTHING_ID_RECEPTIONIST = 5;
const CLOTHING_ID_STRIPPER = 6;
const CLOTHING_ID_WEDDING = 7;
const CLOTHING_ID_TRAINER = 8;

const CLOTHES_STARTING_STAGE = 1;

//Stats for default clothing
const CLOTHES_WARDEN_START = 300;
const CLOTHES_WARDEN_MAXSTAGES = 5;
const CLOTHES_STAGE_WARDEN_SLIGHTLY_MOVED = 2;
const CLOTHES_STAGE_WARDEN_SEE_ONE_BOOB = 3;
const CLOTHES_STAGE_WARDEN_SEE_BOTH_BOOBS = 4;
const CLOTHES_STAGE_WARDEN_SEE_PUSSY = 3;
const CLOTHES_STAGE_WARDEN_ACCESS_PUSSY = 4;
const CLOTHES_STAGE_WARDEN_SEE_BUTT = 3;
const CLOTHES_STAGE_WARDEN_ACCESS_ANAL = 4;

const CLOTHES_WAITRESS_START = 400;
const CLOTHES_WAITRESS_MAXSTAGES = 3;
const CLOTHES_STAGE_WAITRESS_SLIGHTLY_MOVED = 2;
const CLOTHES_STAGE_WAITRESS_SEE_ONE_BOOB = 2;
const CLOTHES_STAGE_WAITRESS_SEE_BOTH_BOOBS = 3;
const CLOTHES_STAGE_WAITRESS_SEE_PUSSY = 3;
const CLOTHES_STAGE_WAITRESS_ACCESS_PUSSY = 3;
const CLOTHES_STAGE_WAITRESS_SEE_BUTT = 1;
const CLOTHES_STAGE_WAITRESS_ACCESS_ANAL = 3;

const CLOTHES_RECEPTIONIST_START = 400;
const CLOTHES_RECEPTIONIST_MAXSTAGES = 3;
const CLOTHES_STAGE_RECEPTIONIST_SLIGHTLY_MOVED = 2;
const CLOTHES_STAGE_RECEPTIONIST_SEE_ONE_BOOB = 9;
const CLOTHES_STAGE_RECEPTIONIST_SEE_BOTH_BOOBS = 9;
const CLOTHES_STAGE_RECEPTIONIST_SEE_PUSSY = 3;
const CLOTHES_STAGE_RECEPTIONIST_ACCESS_PUSSY = 3;
const CLOTHES_STAGE_RECEPTIONIST_SEE_BUTT = 2;
const CLOTHES_STAGE_RECEPTIONIST_ACCESS_ANAL = 3;

const CLOTHES_STRIPPER_START = 100;
const CLOTHES_STRIPPER_MAXSTAGES = 3;

const CLOTHES_WEDDING_START = 0;
const CLOTHES_WEDDING_MAXSTAGES = 1;

const CLOTHES_TRAINER_START = 0;
const CLOTHES_TRAINER_MAXSTAGES = 1;

const PANTIES_STARTER_ID = 1;

//Body slot id
const MOUTH_ID = 1;
const BOOBS_ID = 2;
const NIPPLES_ID = 3;
const RIGHT_HAND_ID = 4;
const LEFT_HAND_ID = 5;
const STOMACH_ID = 6; //for example, paizuri in missionary might require enemy to sit on karryn's stomach
const CLIT_ID = 7; //for example, pussy might be penetrated, but enemy can still play with karryn's clit
const PUSSY_ID = 8;
const BUTT_ID = 9; //exterior bottocks area only
const ANAL_ID = 10; 
const THIGHS_ID = 11; //for example, used in thigh job, and someone wanting to lick karryn's thighs
const FEET_ID = 12;
const OTHER_1_ID = 13;
const OTHER_2_ID = 14;
const OTHER_3_ID = 15;
const OTHER_4_ID = 16;
//Body slot status
const SLOT_FREE = 1; //bodypart != SLOT_FREE  means it is not free
const SLOT_FREE_NO_TOYS = 2; 
const SLOT_FREE_PETTING_ONLY = 3;
const SLOT_FREE_PETTING_ONLY_NO_TOYS = 4;
const SLOT_PETTED_PETTING_ONLY = 5;
const SLOT_PETTED = 10;  //for example, kissing during sex
const SLOT_TOY = 20;
const SLOT_TOY_PETTING_ONLY = 21;
const SLOT_PENIS = 30;
const SLOT_ANUS = 40;
const SLOT_TONGUE = 41;
const SLOT_UNAVAILABLE = 90; // It's not taken by someone, but it can't be used at all
const SLOT_UNAVAILABLE_BUT_HAS_TOY = 91;

//Toy filename
const NO_TOY = 0;
const CLIT_TOY_PINK_ROTOR = 1;
const PUSSY_TOY_PENIS_DILDO = 1;
const ANAL_TOY_ANAL_BEADS = 1;

//Artisan Meal
const ARTISAN_MEAL_SMART = 1;
const ARTISAN_MEAL_COMFY = 2;
const ARTISAN_MEAL_HEART = 3;
const ARTISAN_MEAL_SLUT = 4;
const ARTISAN_MEAL_PUSSY = 5;
const ARTISAN_MEAL_HERO = 6;
const ARTISAN_MEAL_ARMED = 7;
const ARTISAN_MEAL_WARDEN = 8;
const ARTISAN_MEAL_BITCH = 9;
const ARTISAN_MEAL_ANAL = 10;

//Store Item
const STORE_ITEM_ENERGY_DRINK = 1;
const STORE_ITEM_WELTSTONE = 2;
const STORE_ITEM_PAIN_RESIST_PILL = 3;
const STORE_ITEM_FABRIC_HARDENER = 4;
const STORE_ITEM_APHRODISIAC_PERFUME = 5;


function Karryn() {
    throw new Error('This is a static class');
}

Object.defineProperty(Karryn, 'level', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).level; }, configurable: true
});
Object.defineProperty(Karryn, 'slutLvl', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).slutLvl; }, configurable: true
});
Object.defineProperty(Karryn, 'str', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).str; }, configurable: true
});
Object.defineProperty(Karryn, 'end', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).end; }, configurable: true
});
Object.defineProperty(Karryn, 'dex', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).dex; }, configurable: true
});
Object.defineProperty(Karryn, 'agi', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).agi; }, configurable: true
});
Object.defineProperty(Karryn, 'mind', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).mind; }, configurable: true
});
Object.defineProperty(Karryn, 'charm', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).charm; }, configurable: true
});

Object.defineProperty(Karryn, 'inBattleCharm', {
     get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).inBattleCharm; }, configurable: true
});

Object.defineProperty(Karryn, 'stamina', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).stamina; }, configurable: true
});
Object.defineProperty(Karryn, 'maxstamina', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).maxstamina; }, configurable: true
});
Object.defineProperty(Karryn, 'realMaxStamina', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).realMaxStamina; }, configurable: true
});
Object.defineProperty(Karryn, 'energy', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).energy; }, configurable: true
});
Object.defineProperty(Karryn, 'maxenergy', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).maxenergy; }, configurable: true
});
Object.defineProperty(Karryn, 'realMaxEnergy', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).realMaxEnergy; }, configurable: true
});
Object.defineProperty(Karryn, 'will', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).will; }, configurable: true
});
Object.defineProperty(Karryn, 'maxwill', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).maxwill; }, configurable: true
});
Object.defineProperty(Karryn, 'pleasure', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).pleasure; }, configurable: true
});
Object.defineProperty(Karryn, 'wpatk', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).wpatk; }, configurable: true
});
Object.defineProperty(Karryn, 'wpdef', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).wpdef; }, configurable: true
});
Object.defineProperty(Karryn, 'esc', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).esc; }, configurable: true
});
Object.defineProperty(Karryn, 'ssc', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).ssc; }, configurable: true
});
Object.defineProperty(Karryn, 'wsc', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).wsc; }, configurable: true
});
Object.defineProperty(Karryn, 'asc', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).asc; }, configurable: true
});
Object.defineProperty(Karryn, 'graze', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).graze; }, configurable: true
});
Object.defineProperty(Karryn, 'staminaregen', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).staminaregen; }, configurable: true
});
Object.defineProperty(Karryn, 'energyregen', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).energyregen; }, configurable: true
});
Object.defineProperty(Karryn, 'willregen', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).willregen; }, configurable: true
});
Object.defineProperty(Karryn, 'hit', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).hit; }, configurable: true
});
Object.defineProperty(Karryn, 'eva', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).eva; }, configurable: true
});
Object.defineProperty(Karryn, 'cri', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).cri; }, configurable: true
});
Object.defineProperty(Karryn, 'cev', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).cev; }, configurable: true
});
Object.defineProperty(Karryn, 'mentalPhase', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).mentalPhase; }, configurable: true
});
Object.defineProperty(Karryn, 'actionPhase', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).actionPhase; }, configurable: true
});
Object.defineProperty(Karryn, 'cockDesire', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).cockDesire; }, configurable: true
});
Object.defineProperty(Karryn, 'mouthDesire', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).mouthDesire; }, configurable: true
});
Object.defineProperty(Karryn, 'boobsDesire', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).boobsDesire; }, configurable: true
});
Object.defineProperty(Karryn, 'pussyDesire', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).pussyDesire; }, configurable: true
});
Object.defineProperty(Karryn, 'buttDesire', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).buttDesire; }, configurable: true
});
Object.defineProperty(Karryn, 'maxCockDesire', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).maxCockDesire; }, configurable: true
});
Object.defineProperty(Karryn, 'maxMouthDesire', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).maxMouthDesire; }, configurable: true
});
Object.defineProperty(Karryn, 'maxBoobsDesire', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).maxBoobsDesire; }, configurable: true
});
Object.defineProperty(Karryn, 'maxPussyDesire', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).maxPussyDesire; }, configurable: true
});
Object.defineProperty(Karryn, 'maxButtDesire', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).maxButtDesire; }, configurable: true
});

Object.defineProperty(Karryn, 'fatigue', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).fatigue; }, configurable: true
});
Object.defineProperty(Karryn, 'cockiness', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).cockiness; }, configurable: true
});
Object.defineProperty(Karryn, 'isWet', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).isWet; }, configurable: true
});
Object.defineProperty(Karryn, 'isWetStageTwo', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).isWetStageTwo; }, configurable: true
});
Object.defineProperty(Karryn, 'isWetStageThree', {
    get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).isWetStageThree; }, configurable: true
});
Object.defineProperty(Karryn, "body", {
	get: function() { return $gameActors.actor(ACTOR_KARRYN_ID)._body; }, configurable: true
});
Object.defineProperty(Karryn, "poseName", {
	get: function() { return $gameActors.actor(ACTOR_KARRYN_ID).poseName; }, configurable: true
});

Karryn.setUpAsKarryn = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).setUpAsKarryn();
};
Karryn.setUpAsKarryn_newGamePlusContinue = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).setUpAsKarryn_newGamePlusContinue();
};


Karryn.hasNoStamina = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).hasNoStamina();
};
Karryn.hasNoEnergy = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).hasNoEnergy();
};

Karryn.gainStaminaExp = function(exp, enemyLvl) { 
	return $gameActors.actor(ACTOR_KARRYN_ID).gainStaminaExp(exp, enemyLvl);
};
Karryn.gainEnergyExp = function(exp, enemyLvl) { 
	return $gameActors.actor(ACTOR_KARRYN_ID).gainEnergyExp(exp, enemyLvl);
};
Karryn.gainStrengthExp = function(exp, enemyLvl) { 
	return $gameActors.actor(ACTOR_KARRYN_ID).gainStrengthExp(exp, enemyLvl);
};
Karryn.gainEnduranceExp = function(exp, enemyLvl) { 
	return $gameActors.actor(ACTOR_KARRYN_ID).gainEnduranceExp(exp, enemyLvl);
};
Karryn.gainDexterityExp = function(exp, enemyLvl) { 
	return $gameActors.actor(ACTOR_KARRYN_ID).gainDexterityExp(exp, enemyLvl);
};
Karryn.gainMindExp = function(exp, enemyLvl) { 
	return $gameActors.actor(ACTOR_KARRYN_ID).gainMindExp(exp, enemyLvl);
};
Karryn.gainAgilityExp = function(exp, enemyLvl) { 
	return $gameActors.actor(ACTOR_KARRYN_ID).gainAgilityExp(exp, enemyLvl);
};
Karryn.gainCharmExp = function(exp, enemyLvl) { 
	return $gameActors.actor(ACTOR_KARRYN_ID).gainCharmExp(exp, enemyLvl);
};

Karryn.gainUncommittedCharmExp = function(exp, enemyLvl) { 
	return $gameActors.actor(ACTOR_KARRYN_ID).gainUncommittedCharmExp(exp, enemyLvl);
};
Karryn.commitUncommittedCharmExp = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).commitUncommittedCharmExp();
};


Karryn.stenchTolerance = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).stenchTolerance();
};

Karryn.getWardenLevelLimit = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).getWardenLevelLimit();
};

Karryn.isNaked = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isNaked();
};

Karryn.boobsSizeIsHCup = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).boobsSizeIsHCup();
};
Karryn.boobsSizeIsPCup = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).boobsSizeIsPCup();
};

Karryn.getPubicColorName = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).getPubicColorName();
};
Karryn.getPubicSizeName = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).getPubicSizeName();
};

Karryn.getReactionScore = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).getReactionScore();
};
Karryn.getMapReactionScore = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).getMapReactionScore();
};

Karryn.refreshSlutLvlStageVariables_Map = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).refreshSlutLvlStageVariables_Map();
};
Karryn.checkHappyEndCondition = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).checkHappyEndCondition();
};
Karryn.checkBadEndCondition = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).checkBadEndCondition();
};


Karryn.checkChallengeRunChoiceSwitches = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).checkChallengeRunChoiceSwitches();
};


Karryn.setupPassiveReqMultiArray = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).setupPassiveReqMultiArray();
};


Karryn.talkLvl = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).talkLvl();
};
Karryn.sightLvl = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).sightLvl();
};
Karryn.pettingLvl = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).pettingLvl();
};
Karryn.kissLvl = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).kissLvl();
};
Karryn.handjobLvl = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).handjobLvl();
};
Karryn.blowjobLvl = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).blowjobLvl();
};
Karryn.tittyFuckLvl = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).tittyFuckLvl();
};
Karryn.pussySexLvl = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).pussySexLvl();
};
Karryn.analSexLvl = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).analSexLvl();
};
Karryn.masturbateLvl = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).masturbateLvl();
};
Karryn.masochismLvl = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).masochismLvl();
};
Karryn.sadismLvl = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).sadismLvl();
};

Karryn.mouthSensitivity = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).mouthSensitivity();
};
Karryn.boobsSensitivity = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).boobsSensitivity();
};
Karryn.nipplesSensitivity = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).nipplesSensitivity();
};
Karryn.pussySensitivity = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).pussySensitivity();
};
Karryn.clitSensitivity = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).clitSensitivity();
};
Karryn.buttSensitivity = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).buttSensitivity();
};
Karryn.analSensitivity = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).analSensitivity();
};
Karryn.fingerSensitivity = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).fingerSensitivity();
};
Karryn.footSensitivity = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).footSensitivity();
};
Karryn.talkSensitivity = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).talkSensitivity();
};
Karryn.sightSensitivity = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).sightSensitivity();
};
Karryn.creampieSensitivity = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).creampieSensitivity();
};
Karryn.bukkakeSensitivity = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).bukkakeSensitivity();
};
Karryn.swallowSensitivity = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).swallowSensitivity();
};
Karryn.masochismSensitivity = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).masochismSensitivity();
};
Karryn.sadismSensitivity = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).sadismSensitivity();
};
Karryn.mostSensitiveBodyAreaID = function() {
	return $gameActors.actor(ACTOR_KARRYN_ID).mostSensitiveBodyAreaID();
};

Karryn.calculateMasturbateSkillLvl = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).calculateMasturbateSkillLvl();
};
Karryn.calculateMasochismSkillLvl = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).calculateMasochismSkillLvl();
};
Karryn.calculateSadismSkillLvl = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).calculateSadismSkillLvl();
};

Karryn.setPleasure = function(value) { 
	$gameActors.actor(ACTOR_KARRYN_ID).setPleasure(value);
};
Karryn.gainPleasure = function(value) { 
	$gameActors.actor(ACTOR_KARRYN_ID).gainPleasure(value);
};
Karryn.setPleasureToArousalPoint = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).setPleasureToArousalPoint();
};
Karryn.setPleasureToOrgasmPoint = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).setPleasureToOrgasmPoint();
};


Karryn.gainCockDesire = function(value, fromWillpowerSkill, fromDesireRegen) { 
	$gameActors.actor(ACTOR_KARRYN_ID).gainCockDesire(value, fromWillpowerSkill, fromDesireRegen);
};
Karryn.gainMouthDesire = function(value, fromWillpowerSkill, fromDesireRegen) { 
	$gameActors.actor(ACTOR_KARRYN_ID).gainMouthDesire(value, fromWillpowerSkill, fromDesireRegen);
};
Karryn.gainBoobsDesire = function(value, fromWillpowerSkill, fromDesireRegen) { 
	$gameActors.actor(ACTOR_KARRYN_ID).gainBoobsDesire(value, fromWillpowerSkill, fromDesireRegen);
};
Karryn.gainPussyDesire = function(value, fromWillpowerSkill, fromDesireRegen) { 
	$gameActors.actor(ACTOR_KARRYN_ID).gainPussyDesire(value, fromWillpowerSkill, fromDesireRegen);
};
Karryn.gainButtDesire = function(value, fromWillpowerSkill, fromDesireRegen) { 
	$gameActors.actor(ACTOR_KARRYN_ID).gainButtDesire(value, fromWillpowerSkill, fromDesireRegen);
};

Karryn.topDesireIsMouthDesire = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).topDesireIsMouthDesire();
};
Karryn.topDesireIsBoobsDesire = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).topDesireIsBoobsDesire();
};
Karryn.topDesireIsPussyDesire = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).topDesireIsPussyDesire();
};
Karryn.topDesireIsButtDesire = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).topDesireIsButtDesire();
};
Karryn.topDesireIsCockDesire = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).topDesireIsCockDesire();
};


Karryn.setPose = function(value) { 
	$gameActors.actor(ACTOR_KARRYN_ID).setPose(value);
};

Karryn.hasEdict = function(id) { 
	return $gameActors.actor(ACTOR_KARRYN_ID).hasEdict(id);
};
Karryn.learnSkill = function(skillId) { 
	$gameActors.actor(ACTOR_KARRYN_ID).learnSkill(skillId);
};
Karryn.forgetSkill = function(skillId) { 
	$gameActors.actor(ACTOR_KARRYN_ID).forgetSkill(skillId);
};

Karryn.hasPassive = function(skillId) { 
	return $gameActors.actor(ACTOR_KARRYN_ID).hasPassive(skillId);
};
Karryn.setCharacterCreatorPassive = function(skillId) { 
	$gameActors.actor(ACTOR_KARRYN_ID).setCharacterCreatorPassive(skillId);
};


Karryn.totalAccessoriesOwnedCount = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).totalAccessoriesOwnedCount();
};
Karryn.isEquippingThisAccessory = function(id) { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isEquippingThisAccessory(id);
};
Karryn.isUsingThisTitle = function(id) { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isUsingThisTitle(id);
};
Karryn.hasThisTitle = function(id) { 
	return $gameActors.actor(ACTOR_KARRYN_ID).hasThisTitle(id);
};
Karryn.titleHasBeenEquippedOnceBefore = function(id) { 
	return $gameActors.actor(ACTOR_KARRYN_ID).titleHasBeenEquippedOnceBefore(id);
};


Karryn.emoteMasterManager = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).emoteMasterManager();
};
Karryn.emoteMapPose = function(goingToSleep, goingToOnani, calledFromCommons) { 
	$gameActors.actor(ACTOR_KARRYN_ID).emoteMapPose(goingToSleep, goingToOnani, calledFromCommons);
};

Karryn.moanMasterManager = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).moanMasterManager();
};
Karryn.remVoiceStopped = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).remVoiceStopped();
};
Karryn.setTroopsCutsceneVoiceSetting = function(setting) { 
	$gameActors.actor(ACTOR_KARRYN_ID).setTroopsCutsceneVoiceSetting(setting);
};


Karryn.isInChallengeRun = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInChallengeRun();
};
Karryn.isInDescensionRun = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInDescensionRun();
};
Karryn.isInCustomDescensionRun = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInCustomDescensionRun();
};

Karryn.setAllowTachieUpdate = function(status) { 
	$gameActors.actor(ACTOR_KARRYN_ID).setAllowTachieUpdate(status);
};

Karryn.setCacheChanged = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).setCacheChanged();
};

Karryn.setWardenMapPoseExtensions = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).setWardenMapPoseExtensions();
};

Karryn.isAroused = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isAroused();
};

Karryn.getFatigueLevel = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).getFatigueLevel();
};


Karryn.setSpriteBattlerPosData = function(poseName) { 
	$gameActors.actor(ACTOR_KARRYN_ID).setSpriteBattlerPosData(poseName);
};

Karryn.setKarrynWardenSprite = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).setKarrynWardenSprite();
};
Karryn.setKarrynDefeatedSprite = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).setKarrynDefeatedSprite();
};
Karryn.setKarrynSleepSprite = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).setKarrynSleepSprite();
};
Karryn.setKarrynReceptionistSprite = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).setKarrynReceptionistSprite();
};

Karryn.hasTachieCutInOnScreen = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).hasTachieCutInOnScreen();
};
Karryn.setTachieCutIn = function(n) { 
	$gameActors.actor(ACTOR_KARRYN_ID).setTachieCutIn(n);
};


Karryn.isWearingGlovesAndHat = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isWearingGlovesAndHat();
};

Karryn.isInMapPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInMapPose();
};
Karryn.isInCombatPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInCombatPose();
};
Karryn.isInJobPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInJobPose();
};
Karryn.isInDownPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInDownPose();
};
Karryn.isInStandbyPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInStandbyPose();
};
Karryn.isInAttackPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInAttackPose();
};
Karryn.isInDefendPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInDefendPose();
};
Karryn.isInEvadePose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInEvadePose();
};
Karryn.isInUnarmedPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInUnarmedPose();
};
Karryn.isInKickPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInKickPose();
};

Karryn.isInDownFallDownPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInDownFallDownPose();
};
Karryn.isInDownOrgasmPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInDownOrgasmPose();
};
Karryn.isInDownStaminaPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInDownStaminaPose();
};

Karryn.isInSexPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInSexPose();
};
Karryn.isInShowSpankMarkPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInShowSpankMarkPose();
};


Karryn.isInNoStaminaIsDefeatPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInNoStaminaIsDefeatPose();
};
Karryn.isInIgnoreMetalPropertiesPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInIgnoreMetalPropertiesPose();
};

Karryn.isInNeverDeadPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInNeverDeadPose();
};
Karryn.isInNoEjaculationStockStillContinuesPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInNoEjaculationStockStillContinuesPose();
};


Karryn.isDrawEnemiesAboveBattleTachiePose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isDrawEnemiesAboveBattleTachiePose();
};

Karryn.isInShowEnemyNameOnlyDuringValidSelectionPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInShowEnemyNameOnlyDuringValidSelectionPose();
};
Karryn.isInDontShowEnemyNameEverPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInDontShowEnemyNameEverPose();
};

Karryn.isInShowEnemyImageOnlyDuringValidSelectionPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInShowEnemyImageOnlyDuringValidSelectionPose();
};
Karryn.isInShowEnemyGaugeOnlyDuringValidSelectionPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInShowEnemyGaugeOnlyDuringValidSelectionPose();
};
Karryn.isInReorderEnemyImagesOnSelectionPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInReorderEnemyImagesOnSelectionPose();
};
Karryn.isInDrawEnemiesAtHalfWidthPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInDrawEnemiesAtHalfWidthPose();
};
Karryn.isInDontShowEnemyHealthGaugePose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInDontShowEnemyHealthGaugePose();
};
Karryn.isInDontShowEnemyPleasureGaugePose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInDontShowEnemyPleasureGaugePose();
};
Karryn.isInDontShowEnemyStateIconsPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInDontShowEnemyStateIconsPose();
};

Karryn.isInEnemiesDontRegenPleasurePose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInEnemiesDontRegenPleasurePose();
};
Karryn.isInEnemiesDontDrawSelectionPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInEnemiesDontDrawSelectionPose();
};
Karryn.isInEnemiesJoinArousedAndStayArousedPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInEnemiesJoinArousedAndStayArousedPose();
};
Karryn.isInEnemiesStayArousedPostEjaculationPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInEnemiesStayArousedPostEjaculationPose();
};


Karryn.turnOnCantEscapeFlag = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).turnOnCantEscapeFlag();
};
Karryn.turnOffCantEscapeFlag = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).turnOffCantEscapeFlag();
};

Karryn.turnOnJustEscapedFlag = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).turnOnJustEscapedFlag();
};
Karryn.turnOffJustEscapedFlag = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).turnOffJustEscapedFlag();
};

Karryn.isUsingOpenPleasure = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isUsingOpenPleasure();
};


Karryn.isInFuckedFromBehindSexPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInFuckedFromBehindSexPose();
};
Karryn.isInCowgirlSexPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInCowgirlSexPose();
};

Karryn.isInRestrainedPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInRestrainedPose();
};
Karryn.isNotInRestrainedPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isNotInRestrainedPose();
};

Karryn.isInThugGangbangPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInThugGangbangPose();
};
Karryn.isInGuardGangbangPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInGuardGangbangPose();
};

Karryn.isInFootjobSexPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInFootjobSexPose();
};
Karryn.isInKneelingBJSexPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInKneelingBJSexPose();
};
Karryn.isInStandingHJSexPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInStandingHJSexPose();
};

Karryn.isInKickCounterSexPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInKickCounterSexPose();
};

Karryn.isInGoblinCunnilingusSexPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInGoblinCunnilingusSexPose();
};
Karryn.isInLayingTittyfuckSexPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInLayingTittyfuckSexPose();
};
Karryn.isInRimjobSexPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInRimjobSexPose();
};
Karryn.isInSlimeAnalPiledriverSexPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInSlimeAnalPiledriverSexPose();
};
Karryn.isInOrcPaizuriSexPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInOrcPaizuriSexPose();
};
Karryn.isInReverseCowgirlPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInReverseCowgirlPose();
};
Karryn.isInKarrynCowgirlPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInKarrynCowgirlPose();
};
Karryn.isInLizardmanCowgirlPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInLizardmanCowgirlPose();
};
Karryn.isInWerewolfBackPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInWerewolfBackPose();
};
Karryn.isInYetiPaizuriSexPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInYetiPaizuriSexPose();
};
Karryn.isInYetiCarryPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInYetiCarryPose();
};

Karryn.isInWaitressServingPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInWaitressServingPose();
};
Karryn.isInWaitressSexPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInWaitressSexPose();
};
Karryn.isInReceptionistPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInReceptionistPose();
};

Karryn.isInToiletSittingPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInToiletSittingPose();
};
Karryn.isInToiletSitLeftPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInToiletSitLeftPose();
};
Karryn.isInToiletSitRightPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInToiletSitRightPose();
};
Karryn.isInToiletStandLeftPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInToiletStandLeftPose();
};
Karryn.isInToiletStandRightPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInToiletStandRightPose();
};

Karryn.isInStripperMouthPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInStripperMouthPose();
};
Karryn.isInStripperBoobsPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInStripperBoobsPose();
};
Karryn.isInStripperPussyPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInStripperPussyPose();
};
Karryn.isInStripperButtPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInStripperButtPose();
};
Karryn.isInStripperSexPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInStripperSexPose();
};

Karryn.isInTrainerStandbyPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInTrainerStandbyPose();
};
Karryn.isInTrainerTekokiPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInTrainerTekokiPose();
};
Karryn.isInTrainerKisuPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInTrainerKisuPose();
};
Karryn.isInTrainerFeraPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInTrainerFeraPose();
};
Karryn.isInTrainerPaizuriPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInTrainerPaizuriPose();
};
Karryn.isInTrainerRinkanPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInTrainerRinkanPose();
};



Karryn.isInMasturbationCouchPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInMasturbationCouchPose();
};
Karryn.isInMasturbationInBattlePose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInMasturbationInBattlePose();
};

Karryn.isInDefeatedPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInDefeatedPose();
};
Karryn.isInDefeatedLevel1Pose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInDefeatedLevel1Pose();
};
Karryn.isInDefeatedLevel2Pose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInDefeatedLevel2Pose();
};
Karryn.isInDefeatedLevel3Pose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInDefeatedLevel3Pose();
};
Karryn.isInDefeatedLevel4Pose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInDefeatedLevel4Pose();
};
Karryn.isInDefeatedLevel5Pose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInDefeatedLevel5Pose();
};
Karryn.isInDefeatedGuardPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInDefeatedGuardPose();
};


Karryn.isInReadyPose = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isInReadyPose();
};
Karryn.isAttackable = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isAttackable();
};
Karryn.isUsingHalberd = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isUsingHalberd();
};
Karryn.hasHalberd = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).hasHalberd();
};

Karryn.resetNightModeSettings = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).resetNightModeSettings();
};

Karryn.stripOffClothing = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).stripOffClothing();
};
Karryn.restoreClothingDurability = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).restoreClothingDurability();
};

Karryn.currentPercentOfOrgasm = function(oneMax) { 
	return $gameActors.actor(ACTOR_KARRYN_ID).currentPercentOfOrgasm(oneMax);
};

Karryn.hasDoneGuardBattleThisPlaythrough = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).hasDoneGuardBattleThisPlaythrough();
};

Karryn.resetAllGifts = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).resetAllGifts();
};
Karryn.resetGift_Emperor_LevelOne = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).resetGift_Emperor_LevelOne();
};
Karryn.resetGift_Emperor_LevelTwo = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).resetGift_Emperor_LevelTwo();
};
Karryn.resetGift_Emperor_LevelThree = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).resetGift_Emperor_LevelThree();
};
Karryn.resetGift_Emperor_LevelFour = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).resetGift_Emperor_LevelFour();
};

Karryn.hasGift = function(giftId) { 
	return $gameActors.actor(ACTOR_KARRYN_ID).hasGift(giftId);
};

Karryn.eatArtisanMeal = function(meal) { 
	$gameActors.actor(ACTOR_KARRYN_ID).eatArtisanMeal(meal);
};
Karryn.ateArtisanMeal = function(meal) { 
	return $gameActors.actor(ACTOR_KARRYN_ID).ateArtisanMeal(meal);
};

Karryn.selectStoreItem = function(item) { 
	$gameActors.actor(ACTOR_KARRYN_ID).selectStoreItem(item);
};
Karryn.isUsingStoreItem = function(item) { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isUsingStoreItem(item);
};
Karryn.resetStoreItem = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).resetStoreItem();
};

Karryn.removeState = function(stateId) { 
	$gameActors.actor(ACTOR_KARRYN_ID).removeState(stateId);
};
Karryn.addState = function(stateId) { 
	$gameActors.actor(ACTOR_KARRYN_ID).addState(stateId);
};

Karryn.edictSkilledStaffMultipler = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).edictSkilledStaffMultipler();
};

Karryn.willpowerEdgingControlEffect = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).willpowerEdgingControlEffect();
};

Karryn.addHornyState = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).addHornyState();
};

Karryn.wasDefeatedYesterday = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).wasDefeatedYesterday();
};
Karryn.wasDefeatedToday = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).wasDefeatedToday();
};


Karryn.setWearingTrainerCap = function(value) { 
	$gameActors.actor(ACTOR_KARRYN_ID).setWearingTrainerCap(value);
};
Karryn.setWearingTrainerHood = function(value) { 
	$gameActors.actor(ACTOR_KARRYN_ID).setWearingTrainerHood(value);
};
Karryn.setWearingTrainerColor = function(value) { 
	$gameActors.actor(ACTOR_KARRYN_ID).setWearingTrainerColor(value);
};
Karryn.setRandomTrainerColor = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).setRandomTrainerColor();
};


Karryn.trainerBattle_atSameLocationAsTarget = function(target) { 
	return $gameActors.actor(ACTOR_KARRYN_ID).trainerBattle_atSameLocationAsTarget(target);
};
Karryn.trainerBattle_getBenchLocation = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).trainerBattle_getBenchLocation();
};
Karryn.trainerBattle_isUsingHornyVariation = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).trainerBattle_isUsingHornyVariation();
};

Karryn.inBattleCharmStrayBonus = function() { 
	return $gameActors.actor(ACTOR_KARRYN_ID).inBattleCharmStrayBonus();
};
Karryn.isStateAffected = function(stateId) { 
	return $gameActors.actor(ACTOR_KARRYN_ID).isStateAffected(stateId);
};

Karryn.orgasmLockOn = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).orgasmLockOn();
};
Karryn.orgasmLockOff = function() { 
	$gameActors.actor(ACTOR_KARRYN_ID).orgasmLockOff();
};

Karryn.setCockDesire = function(value, fromWillpowerSkill) { 
	$gameActors.actor(ACTOR_KARRYN_ID).setCockDesire(value, fromWillpowerSkill);
};
Karryn.setMouthDesire = function(value, fromWillpowerSkill) { 
	$gameActors.actor(ACTOR_KARRYN_ID).setMouthDesire(value, fromWillpowerSkill);
};
Karryn.setBoobsDesire = function(value, fromWillpowerSkill) { 
	$gameActors.actor(ACTOR_KARRYN_ID).setBoobsDesire(value, fromWillpowerSkill);
};
Karryn.setPussyDesire = function(value, fromWillpowerSkill) { 
	$gameActors.actor(ACTOR_KARRYN_ID).setPussyDesire(value, fromWillpowerSkill);
};
Karryn.setButtDesire = function(value, fromWillpowerSkill) { 
	$gameActors.actor(ACTOR_KARRYN_ID).setButtDesire(value, fromWillpowerSkill);
};


////////////
//////////////
// Game Actor
//////////////
////////////

//Generic actor setup
Remtairy.Karryn.Game_Actor_initMembers = Game_Actor.prototype.initMembers;
Game_Actor.prototype.initMembers = function() {
    Remtairy.Karryn.Game_Actor_initMembers.call(this);
	this._poseName = POSE_NULL;
	this._poseFolderName = POSE_NULL;
	this._showTachie = false;
	this.setAllowTachieUpdate(false);
	this._tachieFlip = false;
	this.completeResetBodyParts();
	this._mentalPhase = false;
	this.setAllBodySlotsFree();
	this.turnOffCantEscapeFlag();
	this.turnOffJustEscapedFlag();
	this.removeAllToys();
	this.resetDesires();
	this.resetCockiness();
	this.resetInvasionNoiseLevel();
	this.setupObtainedTitlesArray();
	this._sleepQuality = 0;
	this._lastMentalBattleSkill = new Game_Item();
};


// Define Property
Object.defineProperty(Game_Actor.prototype, "isKarryn", {
	get: function () { return this.actorId() === ACTOR_KARRYN_ID; }, configurable: true
});
Object.defineProperty(Game_Actor.prototype, "isChatface", {
	get: function () { return this.actorId() === ACTOR_CHAT_FACE_ID; }, configurable: true
});
Object.defineProperty(Game_Actor.prototype, "isChatface_Karryn", {
	get: function () { return this.actorId() === ACTOR_CHAT_FACE_ID && this.poseName === CHAT_FOLDER_KARRYN; }, configurable: true
});

Object.defineProperty(Game_Actor.prototype, 'inBattleCharm', {
    get: function() { 
		let charm = this.charm; 
		let multipler = 1;
		if(this.isEquippingThisAccessory(MISC_CALFSKINBELT_ID)) multipler *= 0.8;
		if(this.isEquippingThisAccessory(NECKLACE_DIAMOND_ID)) {
			if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) multipler *= 1.085;
			else multipler *= 1.17;
		}
		
		if(this.isUsingThisTitle(TITLE_ID_TOILET_EAT_ORGASM)) multipler *= 1.07;
		else if(this.isUsingThisTitle(TITLE_ID_DAY_COUNT_THREE)) multipler *= 0.73;
		else if(this.isUsingThisTitle(TITLE_ID_STRIP_CLUB_REP)) multipler *= 1.15;
		else if(this.isUsingThisTitle(TITLE_ID_HOLY_EMPRESS)) multipler *= 1.3;
		else if(this.isUsingThisTitle(TITLE_ID_TRAINER_PULL_SHORTS)) multipler *= 0.75;
		
		if(this.isInEnemiesJoinArousedAndStayArousedPose()) {
			multipler *= 1.4;
		}
		else if($gameParty.isInGloryBattle) {
			multipler *= 0.65;
		}
		
		if(this.isUsingStoreItem(STORE_ITEM_APHRODISIAC_PERFUME)) 
			multipler *= 1 + 0.15 * this.getStoreItemEffectRate();
		else if(this.isUsingStoreItem(STORE_ITEM_FABRIC_HARDENER)) 
			multipler *= 1 - 0.15 * this.getStoreItemEffectRate();
		
		return Math.round(charm * multipler);
	}, configurable: true
});

Object.defineProperty(Game_Actor.prototype, "esc", { 
	get: function () { return this.pha; }, configurable: true 
});
Object.defineProperty(Game_Actor.prototype, "wsc", { 
	get: function () { return this.pdr; }, configurable: true 
});
Object.defineProperty(Game_Actor.prototype, "ssc", { 
	get: function () { return this.mdr; }, configurable: true 
});
Object.defineProperty(Game_Actor.prototype, "asc", { 
	get: function () { return this.fdr; }, configurable: true 
});

Object.defineProperty(Game_Actor.prototype, "isWet", {
	get: function () {
        return this.getBodyLiquid(BodyLiquidId.PUSSY_JUICE).amount >= LIQUID_PUSSY_WET_STAGE_ONE;
    },
	configurable: true
});
Object.defineProperty(Game_Actor.prototype, "isWetStageTwo", {
	get: function () {
        return this.getBodyLiquid(BodyLiquidId.PUSSY_JUICE).amount >= LIQUID_PUSSY_WET_STAGE_TWO;
    },
	configurable: true
});
Object.defineProperty(Game_Actor.prototype, "isWetStageThree", {
	get: function () {
        return this.getBodyLiquid(BodyLiquidId.PUSSY_JUICE).amount >= LIQUID_PUSSY_WET_STAGE_THREE;
    },
	configurable: true
});
Object.defineProperty(Game_Actor.prototype, "slutLvl", {
	get: function () { return this._slutLvl; }, configurable: true
});
Object.defineProperty(Game_Actor.prototype, "cockiness", {
	get: function () { return this._cockiness; }, configurable: true
});

Object.defineProperty(Game_Actor.prototype, "body", {
	get: function () { return this._body; }, configurable: true
});
Object.defineProperty(Game_Actor.prototype, "showTachie", {
	get: function () { return this._showTachie; }, configurable: true
});
Object.defineProperty(Game_Actor.prototype, "tachieFlip", {
	get: function () { return this._tachieFlip; }, configurable: true
});
Object.defineProperty(Game_Actor.prototype, "mentalPhase", {
	get: function () { return this._mentalPhase; }, configurable: true
});
Object.defineProperty(Game_Actor.prototype, "actionPhase", {
	get: function () { return !this._mentalPhase; }, configurable: true
});
Object.defineProperty(Game_Actor.prototype, "cockDesire", {
	get: function () { return Math.round(this._cockDesire); }, configurable: true
});
Object.defineProperty(Game_Actor.prototype, "mouthDesire", {
	get: function () { return Math.round(this._mouthDesire); }, configurable: true
});
Object.defineProperty(Game_Actor.prototype, "boobsDesire", {
	get: function () { return Math.round(this._boobsDesire); }, configurable: true
});
Object.defineProperty(Game_Actor.prototype, "pussyDesire", {
	get: function () { return Math.round(this._pussyDesire); }, configurable: true
});
Object.defineProperty(Game_Actor.prototype, "buttDesire", {
	get: function () { return Math.round(this._buttDesire); }, configurable: true
});
Object.defineProperty(Game_Actor.prototype, "maxCockDesire", {
	get: function () { return Math.round(this._maxCockDesire); }, configurable: true
});
Object.defineProperty(Game_Actor.prototype, "maxMouthDesire", {
	get: function () { return Math.round(this._maxMouthDesire); }, configurable: true
});
Object.defineProperty(Game_Actor.prototype, "maxBoobsDesire", {
	get: function () { return Math.round(this._maxBoobsDesire); }, configurable: true
});
Object.defineProperty(Game_Actor.prototype, "maxPussyDesire", {
	get: function () { return Math.round(this._maxPussyDesire); }, configurable: true
});
Object.defineProperty(Game_Actor.prototype, "maxButtDesire", {
	get: function () { return Math.round(this._maxButtDesire); }, configurable: true
});
Object.defineProperty(Game_Actor.prototype, "clothingDurability", {
	get: function () { return this._clothingDurability; }, configurable: true
});
Object.defineProperty(Game_Actor.prototype, "clothingStage", {
	get: function () { return this._clothingStage; }, configurable: true
});



//Getter Functions
//Skill Rating
Game_Actor.prototype.pettingSkillRating = function() {
	this.calculatePettingSkillRating();
	return this._pettingSkillRating;
};
Game_Actor.prototype.kissSkillRating = function() {
	this.calculateKissSkillRating();
	return this._kissSkillRating;
};
Game_Actor.prototype.handjobSkillRating = function() {
	this.calculateHandjobSkillRating();
	return this._handjobSkillRating;
};
Game_Actor.prototype.blowjobSkillRating = function() {
	this.calculateBlowjobSkillRating();
	return this._blowjobSkillRating;
};
Game_Actor.prototype.rimjobSkillRating = function() {
	this.calculateRimjobSkillRating();
	return this._rimjobSkillRating;
};
Game_Actor.prototype.footjobSkillRating = function() {
	this.calculateFootjobSkillRating();
	return this._footjobSkillRating;
};
Game_Actor.prototype.tittyFuckSkillRating = function() {
	this.calculateTittyFuckSkillRating();
	return this._tittyFuckSkillRating;
};
Game_Actor.prototype.pussySexSkillRating = function() {
	this.calculatePussySexSkillRating();
	return this._pussySexSkillRating;
};
Game_Actor.prototype.analSexSkillRating = function() {
	this.calculateAnalSexSkillRating();
	return this._analSexSkillRating;
};
Game_Actor.prototype.masturbateSkillRating = function() {
	this.calculateMasturbateSkillRating();
	return this._masturbateSkillRating;
};

//Body Sensitivity
Game_Actor.prototype.mouthSensitivity = function() {
	this.calculateMouthSensitivityRating();
	return this._mouthSensitivityRating;
};
Game_Actor.prototype.boobsSensitivity = function() {
	this.calculateBoobsSensitivityRating();
	return this._boobsSensitivityRating;
};
Game_Actor.prototype.nipplesSensitivity = function() {
	this.calculateNipplesSensitivityRating();
	return this._nipplesSensitivityRating;
};
Game_Actor.prototype.clitSensitivity = function() {
	this.calculateClitSensitivityRating();
	return this._clitSensitivityRating;
};
Game_Actor.prototype.pussySensitivity = function() {
	this.calculatePussySensitivityRating();
	return this._pussySensitivityRating;
};
Game_Actor.prototype.buttSensitivity = function() {
	this.calculateButtSensitivityRating();
	return this._buttSensitivityRating;
};
Game_Actor.prototype.analSensitivity = function() {
	this.calculateAnalSensitivityRating();
	return this._analSensitivityRating;
};
Game_Actor.prototype.fingerSensitivity = function() {
	this.calculateFingerSensitivityRating();
	return this._fingerSensitivityRating;
};
Game_Actor.prototype.footSensitivity = function() {
	this.calculateFootSensitivityRating();
	return this._footSensitivityRating;
};
Game_Actor.prototype.talkSensitivity = function() {
	this.calculateTalkSensitivityRating();
	return this._talkSensitivityRating;
};
Game_Actor.prototype.sightSensitivity = function() {
	this.calculateSightSensitivityRating();
	return this._sightSensitivityRating;
};
Game_Actor.prototype.swallowSensitivity = function() {
	this.calculateSwallowSensitivityRating();
	return this._swallowSensitivityRating;
};
Game_Actor.prototype.pussyCreampieSensitivity = function() {
	this.calculatePussyCreampieSensitivityRating();
	return this._pussyCreampieSensitivityRating;
};
Game_Actor.prototype.analCreampieSensitivity = function() {
	this.calculateAnalCreampieSensitivityRating();
	return this._analCreampieSensitivityRating;
};
Game_Actor.prototype.bukkakeSensitivity = function() {
	this.calculateBukkakeSensitivityRating();
	return this._bukkakeSensitivityRating;
};
Game_Actor.prototype.masochismSensitivity = function() {
	this.calculateMasochismSensitivityRating();
	return this._masochismSensitivityRating;
};
Game_Actor.prototype.sadismSensitivity = function() {
	this.calculateSadismSensitivityRating();
	return this._sadismSensitivityRating;
};
Game_Actor.prototype.toySensitivity = function() {
	this.calculateToySensitivityRating();
	return this._toySensitivityRating;
};

Game_Actor.prototype.mostSensitiveBodyAreaID = function() {
	let areaId = MOUTH_ID;
	let value = this.mouthSensitivity();
	let temp = 0;
	
	temp = this.boobsSensitivity();
	if(temp >= value) {
		value = temp;
		areaId = BOOBS_ID;
	}
	
	temp = this.clitSensitivity();
	if(temp >= value) {
		value = temp;
		areaId = CLIT_ID;
	}
	
	temp = this.buttSensitivity();
	if(temp >= value) {
		value = temp;
		areaId = BUTT_ID;
	}

	temp = this.nipplesSensitivity();
	if(temp >= value) {
		value = temp;
		areaId = NIPPLES_ID;
	}
	
	temp = this.analSensitivity();
	if(temp >= value) {
		value = temp;
		areaId = ANAL_ID;
	}

	temp = this.pussySensitivity();
	if(temp >= value) {
		value = temp;
		areaId = PUSSY_ID;
	}
	
	return areaId;
};



Game_Actor.prototype.hasEdict = function(id) {
	return this.isStsLearnedSkill(id);
};

///////
// Setup 
///////////
Game_Actor.prototype.setUpAsKarryn = function() {
	//Variables
	this.enableMentalPhase();
	this.enterMentalPhase();
	this.setupParamExp();
	this.changeLevel(1, false);
	this.clearStates();
	this.setupKarrynSkills();
	this.setupPassives();
	this.setupRecords();
	this.setupPlaythroughRecords();
	this.clearTempRecords();
	this.resetTodayRecords(true);
	this.clearBattleSkillsFlags();
	this.resetWillpowerEjaculationToggles();
	this.resetWillpowerPleasureDamageToggles();
	this.resetOnaniFrustration();
	this.resetOnaniInBattleDesireToBase();
	this.setupTitleFlags();
	this.setupDescensionFlags();
	this.setupStartingEdicts();
	this.resetAllGifts();
	this.recalculateSkillLvls();
	this.recalculateBodySensitivities();
	this.calculateAllMaxDesires();
	this.setWillToMax();
	this.setFatigue(0);
	this.setPleasure(0);
	this.clearAccessorySlots();
	this.changeStanceToSlash();
	this.setHalberdAsDefiled(false);
	this.restoreWardenClothingLostTemporaryDurability();
	this.setHairType(HAIR_TYPE_NORMAL_ID);
	this.changeToWardenClothing();
	this.restoreClothingDurability();
	this.removeAllToys();
	this.setPantiesType(PANTIES_STARTER_ID);
	this.putOnPanties();
	this.setWearingTrainerCap(true);
	this.setWearingTrainerHood(true);
	this.setupLiquids();
	this.setupStray();
	this.resetNightModeSettings();
	this.resetCockiness();
	this.setupEquipSets();
	
	//Tachie
	this._dontResetSexPose = false;
	this.putOnGlovesAndHat();
	this.setAllowTachieUpdate(true);
	this.setAllowTachieEmoteUpdate(true);
	this._showTachie = true;
	this.setWardenMapPose();
	this.preloadTachie();
	this.setCacheChanged();
	
	$gameSwitches.setValue(SWITCH_IS_VIRGIN_ID, true);
	$gameSwitches.setValue(SWITCH_IS_NON_VIRGIN_ID, false);
};

Game_Actor.prototype.setUpAsKarryn_newGamePlusContinue = function() {
	this.enableMentalPhase();
	this.enterMentalPhase();
	this.clearTempRecords();
	this.resetTodayRecords(true);
	this.clearStates();
	this.clearBattleSkillsFlags();
	this.resetWillpowerPleasureDamageToggles();
	this.setupPlaythroughRecords();
	this.setupTitleFlags();
	this.setupDescensionFlags();
	this.resetOnaniFrustration();
	this.resetOnaniInBattleDesireToBase();
	this.setupStartingEdicts();
	this.resetAllGifts();
	this.recalculateSkillLvls();
	this.recalculateBodySensitivities();
	this.calculateAllMaxDesires();
	this.setWillToMax();
	this.setFatigue(0);
	this.setPleasure(0);
	this.clearAccessorySlots();
	this.changeStanceToSlash();
	this.setHalberdAsDefiled(false);
	this.restoreWardenClothingLostTemporaryDurability();
	this.setHairType(HAIR_TYPE_NORMAL_ID);
	this.changeToWardenClothing();
	this.restoreClothingDurability();
	this.removeAllToys();
	this.setPantiesType(PANTIES_STARTER_ID);
	this.putOnPanties();
	this.setupLiquids();
	this.setupStray();
	this.resetNightModeSettings();
	this.resetCockiness();

	//Tachie
	this._dontResetSexPose = false;
	this.putOnGlovesAndHat();
	this.setAllowTachieUpdate(true);
	this.setAllowTachieEmoteUpdate(true);
	this._showTachie = true;
	this.setWardenMapPose();
	this.preloadTachie();
	this.setCacheChanged();
};

Game_Actor.prototype.setUpAsChatFace = function() {
	this.setAllowTachieUpdate(true);
	this.setAllowTachieEmoteUpdate(true);
	this._showTachie = true;
	this.setHasTachiePubic(false);
	this.setPose(CHAT_FOLDER_KARRYN);
};

Game_Actor.prototype.setupKarrynSkills = function() {
	//debug skills
	this.learnSkill(SKILL_DEBUG_SURRENDER_ID); 
	this.learnSkill(SKILL_DEBUG_DEFEAT_ALL_ID); 
	this.learnSkill(SKILL_DEBUG_STRIP_CLOTHES_ID); 
	this.learnSkill(SKILL_FEMALE_ORGASM_ONE_ID); 
	this.learnSkill(SKILL_FEMALE_ORGASM_TWO_ID); 
	
	//state skills
	this.learnSkill(SKILL_REGAIN_FOOTING_ID); 
	this.learnSkill(SKILL_STAND_UP_ID); 
	this.learnSkill(SKILL_FALLEN_REST_ID); 
	this.learnSkill(SKILL_KARRYN_PICK_UP_HALBERD_ID);
	this.learnSkill(SKILL_KARRYN_GET_CLOSER_TO_HALBERD_ID);
	
	//attack skills
	for(let i = 51; i <= 63; i++) {
		this.learnSkill(i);
	}
	this.learnSkill(SKILL_KARRYN_LIGHT_KICK_ID);
	
	//counterattack skills
	for(let i = 1059; i <= 1064; i++) {
		this.learnSkill(i);
	}
	//Kick skills
	this.learnSkill(SKILL_KARRYN_KICK_STRIKE_ID);
	this.learnSkill(SKILL_KARRYN_KICK_SLASH_ID);
	this.learnSkill(SKILL_KARRYN_KICK_THRUST_ID);
	this.learnSkill(SKILL_KARRYN_KICK_HEAD_STRIKE_ID);
	this.learnSkill(SKILL_KARRYN_KICK_ARM_SLASH_ID);
	this.learnSkill(SKILL_KARRYN_KICK_LEG_THRUST_ID);

	//energy skills
	for(let i = 70; i <= 79; i++) {
		this.learnSkill(i);
	}
	this.learnSkill(SKILL_KARRYN_TAUNT_ID); 
	this.learnSkill(SKILL_KARRYN_DOGEZA_ID); 
	this.learnSkill(SKILL_KARRYN_FLAUNT_ID);
	this.learnSkill(SKILL_GIVE_UP_ID);
	this.learnSkill(SKILL_SURRENDER_ID);
	this.learnSkill(SKILL_KARRYN_OPEN_PLEASURE_3TURNS_ID);
	this.learnSkill(SKILL_KARRYN_OPEN_PLEASURE_5TURNS_ID);
	this.learnSkill(SKILL_KARRYN_OPEN_PLEASURE_10TURNS_ID);
	this.learnSkill(SKILL_KARRYN_OPEN_PLEASURE_BATTLE_ID);
	this.learnSkill(SKILL_KARRYN_OPEN_PLEASURE_AUTO_MANUAL_ID);
	this.learnSkill(SKILL_CAUTIOUS_REVITALIZE_ID);
	this.learnSkill(SKILL_CAUTIOUS_SECOND_WIND_ID);
	this.learnSkill(SKILL_CAUTIOUS_FIX_CLOTHES_ID);
	this.learnSkill(SKILL_DEFENSIVE_REVITALIZE_ID);
	this.learnSkill(SKILL_DEFENSIVE_SECOND_WIND_ID);
	this.learnSkill(SKILL_DEFENSIVE_FIX_CLOTHES_ID);
	this.learnSkill(SKILL_COUNTER_REVITALIZE_ID);
	this.learnSkill(SKILL_COUNTER_SECOND_WIND_ID);
	this.learnSkill(SKILL_COUNTER_FIX_CLOTHES_ID);

	
	//willpower skills
	for(let i = WILLPOWER_SKILL_START; i <= WILLPOWER_SKILL_END; i++) {
		this.learnSkill(i);
	}
	//empty attack skills
	for(let i = 1001; i <= 1006; i++) {
		this.learnSkill(i);
	}
	
	//sex skills
	this.learnSkill(SKILL_KARRYN_KISS_SELECTOR_ID); 
	this.learnSkill(SKILL_KARRYN_HANDJOB_SELECTOR_ID); 
	this.learnSkill(SKILL_KARRYN_COCK_STARE_SELECTOR_ID);
	this.learnSkill(SKILL_KARRYN_COCK_PETTING_SELECTOR_ID); 
	this.learnSkill(SKILL_KARRYN_RIMJOB_SELECTOR_ID);
	this.learnSkill(SKILL_KARRYN_FOOTJOB_SELECTOR_ID); 	
	this.learnSkill(SKILL_KARRYN_BLOWJOB_SELECTOR_ID); 
	this.learnSkill(SKILL_KARRYN_TITTYFUCK_SELECTOR_ID); 
	this.learnSkill(SKILL_KARRYN_ANALSEX_SELECTOR_ID); 
	this.learnSkill(SKILL_KARRYN_PUSSYSEX_SELECTOR_ID); 
	
	this.learnSkill(SKILL_KARRYN_KISS_SELECTOR_CANT_ID); 
	this.learnSkill(SKILL_KARRYN_HANDJOB_SELECTOR_CANT_ID); 
	this.learnSkill(SKILL_KARRYN_COCK_STARE_SELECTOR_CANT_ID); 
	this.learnSkill(SKILL_KARRYN_COCK_PETTING_SELECTOR_CANT_ID); 
	this.learnSkill(SKILL_KARRYN_RIMJOB_SELECTOR_CANT_ID);
	this.learnSkill(SKILL_KARRYN_FOOTJOB_SELECTOR_CANT_ID); 	
	this.learnSkill(SKILL_KARRYN_BLOWJOB_SELECTOR_CANT_ID); 
	this.learnSkill(SKILL_KARRYN_TITTYFUCK_SELECTOR_CANT_ID); 
	this.learnSkill(SKILL_KARRYN_ANALSEX_SELECTOR_CANT_ID); 
	this.learnSkill(SKILL_KARRYN_PUSSYSEX_SELECTOR_CANT_ID); 
	
	this.learnSkill(SKILL_KARRYN_REMOVE_TOY_ID); 
	this.learnSkill(SKILL_KARRYN_REMOVE_TOY_CANT_ID);
	
	//masturbate skills
	this.learnSkill(SKILL_KARRYN_MAS_TOUCH_SELECTOR_ID); 
	this.learnSkill(SKILL_KARRYN_MAS_FINGER_SELECTOR_ID); 
	this.learnSkill(SKILL_KARRYN_MAS_SUCK_SELECTOR_ID); 
	this.learnSkill(SKILL_KARRYN_MAS_STOP_BATTLE_ID);
	
	for(let i = MASTURBATE_INBATTLE_SKILL_START; i <= MASTURBATE_INBATTLE_SKILL_END; i++) {
		this.learnSkill(i); 
	}
	
	//Waitress skills
	for(let i = WAITRESS_SKILL_START; i <= WAITRESS_SKILL_END; i++) {
		this.learnSkill(i); 
	}
	
	//Receptionist skills
	for(let i = RECEPTIONIST_SKILL_START; i <= RECEPTIONIST_SKILL_END; i++) {
		this.learnSkill(i); 
	}
	
	//Glory skills
	for(let i = GLORY_SKILL_START; i <= GLORY_SKILL_END; i++) {
		this.learnSkill(i); 
	}
	
	//Stripper skills
	for(let i = STRIPPER_SKILL_START; i <= STRIPPER_SKILL_END; i++) {
		this.learnSkill(i); 
	}
	
	//Trainer skills
	for(let i = TRAINER_SKILL_START; i <= TRAINER_SKILL_END; i++) {
		this.learnSkill(i); 
	}
};

// Skills Learned

Game_Actor.prototype.isLearnedSkill = function(skillId) {
	if(!this._skillsLearned) this.setupSkillsLearnedArray();
	
	if(this._skillsLearned) {
		return this._skillsLearned[skillId];
	}
	else
		return false;
};

Game_Actor.prototype.setupSkillsLearnedArray = function(skillId) {
	this._skillsLearned = [];
	
	if(this._skills) {
		for(let i = 0; i < this._skills.length; ++i) {
			this._skillsLearned[this._skills[i]] = true;
		}
	}
};

Remtairy.Karryn.Game_Actor_learnSkill = Game_Actor.prototype.learnSkill;
Game_Actor.prototype.learnSkill = function(skillId) {
	this._skillsLearned[skillId] = true;
	Remtairy.Karryn.Game_Actor_learnSkill.call(this, skillId);
};

Remtairy.Karryn.Game_Actor_forgetSkill = Game_Actor.prototype.forgetSkill;
Game_Actor.prototype.forgetSkill = function(skillId) {
	this._skillsLearned[skillId] = false;
	Remtairy.Karryn.Game_Actor_forgetSkill.call(this, skillId);
};


/////////////////////////////////
// Pre and Post Battle Processing
/////////////////////////////////

Game_Actor.prototype.setupStatsBeforeBattle = function() {
	this.setHp(this.maxstamina);
	this.setMp(this.maxenergy);
	this.setWillToMax();
	this.setPleasure(Math.min(this.pleasure, Math.floor(this.orgasmPoint() * 0.99)));
}; 

//Pre Battle
Game_Actor.prototype.preBattleSetup = function() {
	this.enterMentalPhase();
	this.disableAllPoseSkills();
	this.setupStatsBeforeBattle();
	this.cacheDesireTooltips();
	this.setUpPussyJuice();
	this.setupDesires();
	this.setupDescensionStatGain();
	this.clearBattleSkillsFlags();
	this.resetCockTargets();
	this.resetRemLineActorVariables();
	this.clearParamExp();
	this.clearTempRecords();
	this.resetOnaniInBattleDesireToBase();
	this.preBattleConfidentPassiveEffects();
	this.preBattleHornyPassiveEffects();
	//this.preBattleClothingPassiveEffects();
	this.removeState(STATE_DISARMED_ID);
	this.removeState(STATE_JUST_DEFEATED_ID);
	this.removeState(STATE_TALKING_TO_NPC_ID);
	this.removeState(STATE_NOT_TALKING_TO_NPC_ID);
	this.preBattleAddIsVirginState();
	this.setPreBattlePose();
	this.setTroopsCutsceneVoiceSetting(false);
	this._dontResetSexPose = false;
	this._emoteMasterManagerIsRunning = false;
	this._orgasmCallQueuedUp = false;
	this._dirty = true;
}; 

//same as normal prebattle except dont reset desire or pussy juice
Game_Actor.prototype.preInvasionBattleSetup = function() {
	this.enableMentalPhase();
	this.enterMentalPhase();
	this.disableAllPoseSkills();
	this.setupStatsBeforeBattle();
	this.cacheDesireTooltips();
	this.clearBattleSkillsFlags();
	this.setupDescensionStatGain();
	this.resetCockTargets();
	this.resetRemLineActorVariables();
	this.clearParamExp();
	this.clearTempRecords();
	this.preBattleConfidentPassiveEffects();
	this.preBattleHornyPassiveEffects();
	this.preBattleAddIsVirginState();
	//this.setPreBattlePose(); //called in game party version
	this._dontResetSexPose = false;
	this._emoteMasterManagerIsRunning = false;
	this._orgasmCallQueuedUp = false;
	this._dirty = true;
	
	$gameParty.addRecordInvasionBattle();
}; 

Game_Actor.prototype.preDefeatedBattleSetup = function() {
	this.setAllowTachieUpdate(false);
	this.enableMentalPhase();
	this.enterMentalPhase();
	this.disableAllPoseSkills();
	this.setupStatsBeforeBattle();
	this.setupDescensionStatGain();
	this.cacheDesireTooltips();
	this.clearBattleSkillsFlags();
	this.resetRemLineActorVariables();
	this.clearParamExp();
	this.clearTempRecords();
	this.setUpPussyJuice();
	this.setAllBodySlotsFreeExceptToy();
	this.addState(STATE_DEFEATED_ID);
	this.preBattleAddIsVirginState();
	this.setAsNoHalberdBattle();
	this.takeOffPanties();
	this.removeClothing();
	this._dontResetSexPose = false;
	this._emoteMasterManagerIsRunning = false;
	this._orgasmCallQueuedUp = false;
	this._dirty = true;
}; 

//Post Battle
Game_Actor.prototype.postBattleCleanup = function() {
	this.setAllowTachieUpdate(false);
	this.setAllBodySlotsFreeExceptToy();
	this._emoteMasterManagerIsRunning = false;
	this._dontResetSexPose = false;
	this._orgasmCallQueuedUp = false;
	this._startOfInvasionBattle = false;
	
	this.turnOffCantEscapeFlag();
	this.resetCockTargets();
	this.removeAllToysPostBattle();
	this.disableAllPoseSkills();
	this.clearParamExp();
	this.clearTempRecords();
	this.cleanUpLiquids();
	this.cleanUpStray();
	
	if(Karryn.hasEdict(EDICT_DIFFERENT_MINDSET_EFFECTS)) {
		this.takeOffGlovesAndHat();
		this.takeOffPanties();
		this.removeClothing();
	}
	else {
		this.restoreClothingDurability();
		if(!this._lostPanties && !this.isWearingAnyToy()) this.putOnPanties();
	}
	
	this.refreshNightModeSettings();
	this.resetDesires();
	this.postBattlePleasure();
	this.clearBattleSkillsFlags();
	this.enableMentalPhase();
	this.setWardenMapPose();
	this.setAllowTachieUpdate(true);
	this.setAllowTachieEmoteUpdate(true);
	this.setTroopsCutsceneVoiceSetting(false);
}; 

/////////
// Desires
/////////

Game_Actor.prototype.setupDesires = function() {
	this.setMouthDesire(this.startingMouthDesire(), false);
	this.setBoobsDesire(this.startingBoobsDesire(), false);
	this.setPussyDesire(this.startingPussyDesire(), false);
	this.setButtDesire(this.startingButtDesire(), false);
	this.setCockDesire(this.startingCockDesire(), false);
	this.startingRandomDesire();
};

Game_Actor.prototype.resetDesires = function() {
	this._mouthDesire = this.minimumMouthDesireLimit();
	this._boobsDesire = this.minimumBoobsDesireLimit();
	this._pussyDesire = this.minimumPussyDesireLimit();
	this._buttDesire = this.minimumButtDesireLimit();
	this._cockDesire = this.minimumCockDesireLimit();
};

/////////
// Age


Game_Actor.prototype.getActorAge = function() {
	return VAR_STARTING_AGE + Math.floor((Prison.date + 69)/365);
}; 

////////
// Breath
//unused
Game_Actor.prototype.getBreathSpeed = function() {
	return Math.max(VAR_BREATH_SPEED_MIN, this.currentPercentOfOrgasm(true) / 100);
}; 

////////////
// Cockiness
////////////

Game_Actor.prototype.resetCockiness = function() {
	this._cockiness = 0;
}; 

Game_Actor.prototype.addCockiness = function(value) {
	let potentialMax = false;
	value = Math.round(value);

	if(this.cockiness < this.maxCockiness()) {
		potentialMax = true;
	}
	this._cockiness = Math.min(this.maxCockiness(), this.cockiness + value);
	this._cockiness = Math.max(0, this.cockiness);
	if(potentialMax && this.cockiness === this.maxCockiness()) {
		this.addToActorCockinessMaxRecord();
		$gameParty.remAch_fearless();
	}

	if(value > 0)
		this.addToActorCockinessGainedRecord(value);
}; 

Game_Actor.prototype.maxCockiness = function() {
	let value = 100;
	if(this.isUsingThisTitle(TITLE_ID_FULFILLED_HERO)) value += 15;
	else if(this.isUsingThisTitle(TITLE_ID_GALACTIC_HERO)) value += 25;
	return value;
};

Game_Actor.prototype.addCockinessFromSubduingEnemy = function(enemyLvl) {
	if(this.hasPassive(PASSIVE_SUBDUED_COUNT_TWO_ID)) {
		if(this.level > enemyLvl)
			this.addCockiness(4);
		else
			this.addCockiness(2);
		
	}
}; 
Game_Actor.prototype.addCockinessFromTaunting = function() {
	if(this.hasPassive(PASSIVE_TAUNT_COUNT_THREE_ID))
		this.addCockiness(3);
	else if(this.hasPassive(PASSIVE_TAUNT_COUNT_ONE_ID))
		this.addCockiness(2);
	else if(this.hasPassive(PASSIVE_SUBDUED_COUNT_TWO_ID))
		this.addCockiness(1);
}; 
Game_Actor.prototype.addCockinessFromConsAttackUsage = function() {
	if(this.hasPassive(PASSIVE_SUBDUED_COUNT_TWO_ID))
		this.addCockiness(1);
};
Game_Actor.prototype.addCockinessFromCockKicking = function() {
	if(this.hasPassive(PASSIVE_COCKKICK_COUNT_ONE_ID))
		this.addCockiness(1);
}; 

Game_Actor.prototype.reduceCockinessFromEscaping = function() {
	if(this.hasPassive(PASSIVE_SUBDUED_COUNT_TWO_ID))
		this.addCockiness(Math.min(-20, Math.round(this.cockiness * -0.33)));
}; 

///////////
// Confident

Game_Actor.prototype.confidentParamRate = function(paramId) {
	let confidentRate = 1;
	if(this.isConfident) {
		if(paramId === PARAM_CHARM_ID || paramId === PARAM_STRENGTH_ID || paramId === PARAM_DEXTERITY_ID || paramId === PARAM_MIND_ID || paramId === PARAM_AGILITY_ID) {
			confidentRate += 0.12;
			
			if(this.hasPassive(PASSIVE_SUBDUED_COUNT_TWO_ID)) 
				confidentRate += this.cockiness * 0.0012
			
			
		}
	}
	return confidentRate;
}; 

//////
// Critical
/////////

Game_Actor.prototype.criticalChanceRate = function() {
    let rate = 1;
	
	if(this.isStateAffected(STATE_BONUS_CRIT_CHANCE_ID)) {
		rate += 0.25;
	}
	
	if(this.isStateAffected(STATE_COCK_KICK_CRIT_BONUS_ID)) {
		if(this.hasPassive(PASSIVE_COCKKICK_COUNT_TWO_ID)) {
			rate += 0.4;
		}
		else {
			rate += 0.2;
		}
	}
	
	return rate;
};

Game_Actor.prototype.criticalChanceBonus = function() {
    let bonus = 0;
	
	return bonus;
};

Game_Actor.prototype.criticalDamageRate = function() {
	let rate = 1;
	if(this.isEquippingThisAccessory(NECKLACE_SAPPHIRE_ID)) rate *= 0.85;
	return rate;
};

Game_Actor.prototype.criticalDamageBonus = function() {
    let bonus = 0;
	
	if(this.isStateAffected(STATE_COCK_KICK_CRIT_BONUS_ID)) {
		if(this.hasPassive(PASSIVE_COCKKICK_COUNT_TWO_ID)) {
			bonus += 0.4;
		}
		else {
			bonus += 0.2;
		}
	}
	
	if(this.isStateAffected(STATE_KI_ID) && this.hasEdict(EDICT_SPEC_OFFENSIVE_MIND_KI)) {
		bonus += this.willpowerKiCritDmgEffect();
	}
	
	if(this.isStateAffected(STATE_EYE_OF_THE_MIND_ID) && this.hasEdict(EDICT_SPEC_OFFENSIVE_MIND_EOTM)) {
		bonus += this.willpowerEyeOfTheMindCritDmgEffect();
	}
	
	return bonus;
};

////////
// Speed

////////
// Action Speed

Game_Actor.prototype.bonusActionSpeed = function(item) {
    let bonusSpeed = 0;
	let itemId = -1;
	if(item) itemId = item.id;
	
	if(this.isStateAffected(STATE_KARRYN_FIRST_TURN_ID)) 
		bonusSpeed += ACTION_SPEED_FAST_SECOND_PRIORITY;
	
	if((itemId === SKILL_KARRYN_BLOWJOB_SELECTOR_ID) && this.hasPassive(PASSIVE_BJ_PEOPLE_TWO_ID))
		bonusSpeed += ACTION_SPEED_FAST_THIRD_PRIORITY;
	else if((itemId === SKILL_KARRYN_HANDJOB_SELECTOR_ID) && this.hasPassive(PASSIVE_HJ_ORGASM_TWO_ID))
		bonusSpeed += ACTION_SPEED_FAST_THIRD_PRIORITY;
	else if((itemId === SKILL_KARRYN_RIMJOB_SELECTOR_ID) && this.isUsingThisTitle(TITLE_ID_SEX_SKILL_RIMJOB_TWO)) 
		bonusSpeed += ACTION_SPEED_FAST_THIRD_PRIORITY;
	
	if($gameTemp.isPlaytest() && TESTING_ALWAYS_FIRST) 
		bonusSpeed += ACTION_SPEED_FAST_SECOND_PRIORITY;
	
	
	return bonusSpeed;
};

Game_Actor.prototype.actionSpeedRate = function(item) {
    let speedRate = 1;
	let itemId = -1;
	
	if(item) {
		itemId = item.id;
		
		if(item.hasTag(TAG_ACTOR_ATTACK_SKILL)) {
			if(this.isUsingHalberd()) {
				if(this.hasEdict(EDICT_HALBERD_OFFENSIVE_THREE)) speedRate += 0.3;
			}
			else {
				if(this.hasEdict(EDICT_UNARMED_ATTACK_TRAINING_II)) speedRate += 0.3;
			}
		}
	}
	
	
	return speedRate;
};

///////////////
// Resting and Fatigue
////////////////////

//Fatigue Gain
Game_Actor.prototype.fatigueGainRate = function() {
	let rate = 1;
	
	rate *= this.titlesFatigueGainRate();
	if(this.ateArtisanMeal(ARTISAN_MEAL_ARMED)) {
		rate *= 1 - (0.33 * this.getArtisanFoodEffectRate());
	}
	if(this.isUsingStoreItem(STORE_ITEM_ENERGY_DRINK)) 
		rate *= 1 - (0.2 * this.getStoreItemEffectRate());
	
	if(this.hasPassive(PASSIVE_ORGASM_ML_TWO_ID) && this._todayOrgasmML > 0)
		rate *= 1 + Math.min(1, this._todayOrgasmML * 0.0015);
	if(this.hasPassive(PASSIVE_HJ_COUNT_ONE_ID) && this._tempRecordHandjobPeople > 0)
		rate *= 1 + Math.min(0.33, this._tempRecordHandjobPeople * 0.015);
	
	if(this.hasGift(GIFT_ID_EMPEROR_LV4_FATIGUE_GAIN)) rate *= 0.85;
	
	return rate;
};

Game_Actor.prototype.gainFatigue = function(value) {
	this.setFatigue(this.fatigue + value);
};

//Fatigue Recovery
Game_Actor.prototype.fatigueRecoveryRate = function() {
	let rate = 1;
	
	rate *= this.titlesFatigueRecoveryRate();
	
	if(this.hasPassive(PASSIVE_ORGASM_ML_TWO_ID) && this._todayOrgasmML > 0)
		rate *= 1 + Math.min(0.6, this._todayOrgasmML * 0.002);
	
	if(Prison.easyMode()) rate *= 1.5;
	
	return rate;
};

Game_Actor.prototype.fatigueRecoveryNumber = function() {
	let num = 0;
	if(Prison.currentlyOutsidePrison()) 
		num = this.edictsFatigueRestOffice();
	else 
		num = this.edictsFatigueRestOutside();

	if(this.isAroused() && !this._todayMasturbatedBeforeRest && !$gameSwitches.value(SWITCH_BOSS_CLEAR_BONUS_ID)) {
		num *= this.fatigueRecoveryNumberRateWhenAroused();
	}

	num *= this.fatigueRecoveryRate();

	return Math.round(num);
};

Game_Actor.prototype.getFatigueLevel = function() {
	let fatigue = this.fatigue;
	let level = 0;
	
	if(fatigue >= 65) level = 5;
	else if(fatigue >= 55) level = 4;
	else if(fatigue >= 45) level = 3;
	else if(fatigue >= 35) level = 2;
	else if(fatigue >= 25) level = 1;
	
	return level;
};

Game_Actor.prototype.fatigueLevelParamRate = function(paramId) {
	let level = this.getFatigueLevel();
	let rate = 1;

	if(paramId === PARAM_MAXSTAMINA_ID || paramId === PARAM_MAXENERGY_ID) {
		return rate;
	}
	else if(level > 0) {
		rate -= Math.min(0.99, (level * 0.1));
	}
	return rate;
};

Game_Actor.prototype.getSleepQuality = function() {
	return this._sleepQuality;
};
Game_Actor.prototype.setSleepQuality = function(value) {
	this._sleepQuality = value;
};

Game_Actor.prototype.sleepQualityParamRate = function(paramId) {
	let sleepQuality = this.getSleepQuality();
	let rate = 1;

	if(sleepQuality <= -2) {
		if(paramId === PARAM_CHARM_ID) 
			rate = 0.8;
		else rate = 0.9;
	}
	else if(sleepQuality === -1) {
		if(paramId === PARAM_CHARM_ID) 
			rate = 0.9;
		else rate = 0.95;
	}
	else if(sleepQuality === 1) {
		rate = 1.03;
	}
	else if(sleepQuality === 2) {
		rate = 1.06;
	}
	else if(sleepQuality >= 3) {
		rate = 1.09;
	}
	
	return rate;
};

//used when resting
Game_Actor.prototype.recoverAll_nextDay = function() {
    this.clearStates(); 
    this._hp = this.mhp;
	this._mp = this.mmp;
	
	let mapId = $gameMap._mapId;
	
	if(this._todayMasturbatedBeforeRest)
		this.setPleasure(0); 
	else
		this.setPleasure(Math.ceil(this.pleasure * 0.5));
}; 

Game_Actor.prototype.removeStatesOnNewWave = function() {
    this.removeState(STATE_WEAKNESS_EXPOSED_ID);
	this.removeState(STATE_PLEASURE_STANCE_ID);
}; 

Game_Actor.prototype.resetGotHitBySkillType = function() { 
	if($gameParty.isInGloryBattle && (this.didLastGetHitBySkillType(JUST_SKILLTYPE_GLORY_LEFT_HOLE_SHOWED) || this.didLastGetHitBySkillType(JUST_SKILLTYPE_GLORY_RIGHT_HOLE_SHOWED))) {}
	else
		this._justGotHitBySkillType = 0;
	this._lastHandUsedForHandjob = 0;
};

//unused
Game_Actor.prototype.executeFloorDamage = function() {
	return;
    var damage = Math.floor($gameParty.getFloorDamageRate());
    if (damage > 0) {
		this.gainFatigue(damage);
        this.performMapDamage();
    }
};

Game_Actor.prototype.isUsingOpenPleasure = function() {
	return this.isStateAffected(STATE_PLEASURE_STANCE_ID) || this.isStateAffected(STATE_PLEASURE_STANCE_BATTLE_ID) || this.isStateAffected(STATE_PLEASURE_STANCE_AUTO_MENTAL_ID);
};

/////////
// Is Alive
// Is Dead
/////////////

Game_Actor.prototype.isAlive = function() {
    return this.isAppeared() && (!this.isDeathStateAffected() || this.isInNeverDeadPose());
};
Game_Actor.prototype.isDead = function() {
    return this.isAppeared() && this.isDeathStateAffected() && !this.isInNeverDeadPose();
};

/////////
// Regenerate
////////////

Game_Actor.prototype.regenerateHp = function() {
	if(this.hasNoEnergy()) {
		let value = Math.floor(this.realMaxStamina * VAR_NO_ENERGY_STAMINA_DAMAGE);
		this.gainHp(-value);
	}
	else {
		let value = Math.floor(this.maxstamina * this.staminaregen) * this.regenerateStaminaRate();
		

		if((ConfigManager.cheatActorHalfStaminaRegen && Prison.cheatMode()) || Prison.endlessHellCheat_cheatActorHalfStaminaRegen()) 
			value *= 0.5;
		if((ConfigManager.cheatActorThirdStaminaRegen && Prison.cheatMode()) || Prison.endlessHellCheat_cheatActorThirdStaminaRegen()) 
			value *= 0.33;
		
		
		value = Math.floor(value);
		if (value !== 0) {
			this.gainHp(value);
		}
	}
};

Game_Actor.prototype.regenerateStaminaRate = function() {
	let rate = 1;
	let exceptionForNeverRegen = this.isInMasturbationCouchPose();
	let exceptionForRegenWhenZeroStamina = false;
	if($gameParty.isInGloryBattle && $gameTroop.getCurrentTurn_gloryBattle() < this._gloryBattle_restingTilTurn)
		exceptionForRegenWhenZeroStamina = true;
	if(Karryn.isInReceptionistPose() && this.isStateAffected(STATE_RECEPTIONIST_REST_ID))
		exceptionForRegenWhenZeroStamina = true;

	if((this.hasNoStamina() && !exceptionForRegenWhenZeroStamina) || exceptionForNeverRegen) rate = 0;
	return rate;
};

Game_Actor.prototype.regenerateMp = function() {
	let value = this.maxenergy * this.energyregen * this.regenerateEnergyRate();
	if(value !== 0 && this.energy > 0) {
		this._tempEnergyRegenPool += value;
		let energy = 0;
		while(this._tempEnergyRegenPool >= 1) {
			energy++;
			this._tempEnergyRegenPool--;
		}
		if(energy > 0)
			this.gainMp(energy);
	}
	
	if(!$gameScreen.isMapMode()) {
		this.regenerateWill();
		this.regenerateDesires();
		this.passiveRegenEffects();
	}
	
	this.regenPussyJuice();
	this.resetGotHitBySkillType();
	//regenerateTp aka pleasure is after this function
};

Game_Actor.prototype.regenerateEnergyRate = function() {
	let rate = 1;
	if(this.isInMasturbationCouchPose() || this.isInJobPose()) rate = 0;
	return rate;
};

Game_Actor.prototype.regenerateWill = function() {
	var value = Math.floor(this.maxwill * this.willregen);
	if (value !== 0) {
		this.gainWill(value);
	}
};

/////////////
// Karryn Sensitivity
//////////////////

Game_Actor.prototype.recalculateBodySensitivities = function() {
    this.calculateMouthSensitivityRating();
	this.calculateBoobsSensitivityRating();
	this.calculateNipplesSensitivityRating();
	this.calculateClitSensitivityRating();
	this.calculatePussySensitivityRating();
	this.calculateButtSensitivityRating();
	this.calculateAnalSensitivityRating();
	this.calculateFingerSensitivityRating();
	this.calculateFootSensitivityRating();
	this.calculateTalkSensitivityRating();
	this.calculateSightSensitivityRating();
	this.calculatePussyCreampieSensitivityRating();
	this.calculateAnalCreampieSensitivityRating();
	this.calculateBukkakeSensitivityRating();
	this.calculateSwallowSensitivityRating();
	this.calculateMasochismSensitivityRating();
	this.calculateSadismSensitivityRating();
	this.calculateToySensitivityRating();
};

////////////////
// Karryn Skill Lvl
////////////////////

Game_Actor.prototype.recalculateSkillLvls = function() {
	this.calculatePettingSkillRating();
	this.calculateKissSkillRating();
	this.calculateHandjobSkillRating();
	this.calculateBlowjobSkillRating();
	this.calculateRimjobSkillRating();
	this.calculateTittyFuckSkillRating();
	this.calculateFootjobSkillRating();
	this.calculatePussySexSkillRating();
	this.calculateAnalSexSkillRating();
	this.calculateMasturbateSkillRating();

	this.calculatePettingSkillLvl();
	this.calculateKissSkillLvl();
	this.calculateHandjobSkillLvl();
	this.calculateBlowjobSkillLvl();
	this.calculateRimjobSkillLvl();
	this.calculateFootjobSkillLvl();
	this.calculateTittyFuckSkillLvl();
	this.calculatePussySexSkillLvl();
	this.calculateAnalSexSkillLvl();
	this.calculateMasturbateSkillLvl();
	this.calculateMasochismSkillLvl();
	this.calculateSadismSkillLvl();
};

//////////////
// Karryn Pleasure
/////////////////

Game_Actor.prototype.arousalPoint = function() { 
	let value = this._arousalBasePoint + this.end * VAR_AP_PER_END + this.level * VAR_AP_PER_CLVL;
	return value;
};
Game_Actor.prototype.orgasmPoint = function() { 
	let value = this._orgasmBasePoint + this.end * VAR_OP_PER_END + this.level * VAR_OP_PER_CLVL;
	return value;
};

Game_Actor.prototype.setPleasure = function(value) { 
	let previouslyAroused = this.isAroused();
	let previouslyOrgasmPoint = this.reachedOrgasmPoint();
	value = Math.round(value);
	this.setTp(value); 
	if((previouslyAroused != this.isAroused() || 
	previouslyOrgasmPoint != this.reachedOrgasmPoint())) { 
		if(this.isInMapPose()) 
			this.setWardenMapPoseExtensions();
		this.emoteMasterManager();
		//this.setCacheChanged();
	}
		
	if(this.isAroused()) $gameSwitches.setValue(SWITCH_IS_AROUSED_ID, true);
	else $gameSwitches.setValue(SWITCH_IS_AROUSED_ID, false);
	
	
	this.raidArousalCheck();

	
	$gameScreen.setMapInfoRefreshNeeded();
};

////////
// Param
////////////

Remtairy.Karryn.Game_Actor_paramBase = Game_Actor.prototype.paramBase;
Game_Actor.prototype.paramBase = function(paramId) {
	let num = 0;
	if(this._paramLvl) {
		num = this._paramLvl[paramId];
		if(paramId === PARAM_MAXSTAMINA_ID) {
			num *= RESULTS_STAMINA_PER_PLVL;
			num += this.end * RESULTS_STAMINA_PER_ENDURANCE;
		}
		else if(paramId === PARAM_MAXENERGY_ID) {
			num = Math.round(num * RESULTS_ENERGY_PER_PLVL);
		}
	}
	num += this.passiveParamBonus(paramId); 
	num += this.edictsParamBonus(paramId);
	num += this.titlesParamBonus(paramId);
	num += this.giftsParamBonus(paramId);

	if(paramId === PARAM_CHARM_ID) {
		num += this.totalAccessoriesOwnedCount();
		
		if(this.slutLvl <= 100) {
			num -= Math.floor(this.slutLvl * 0.03);
		}
		else if(this.slutLvl <= 200) {
			num -= 3;
			num -= Math.floor((this.slutLvl - 100) * 0.04);
		}
		else if(this.slutLvl <= 300) {
			num -= 7;
			num -= Math.floor((this.slutLvl - 200) * 0.05);
		}
		else {
			num -= 12;
			num -= Math.floor((this.slutLvl - 300) * 0.067);
		}
		
	}
	else if(paramId === PARAM_STRENGTH_ID) {
		if($gameParty.isTutorialBattle() && num < 13)
			num = 13;
	}
	
	
    return Remtairy.Karryn.Game_Actor_paramBase.call(this, paramId) + num;
};

////////////
// Param Rate
/////////////

Game_Actor.prototype.paramRate = function(paramId) {
    let rate = Game_Battler.prototype.paramRate.call(this, paramId);
    rate *= this.actor().rateParams[paramId];
    rate *= this.currentClass().rateParams[paramId];
	const equips = this.equips();
    for(let equip of equips) {
        if(equip && equip.rateParams) {
            rate *= equip.rateParams[paramId];
        }
    }
	
	rate *= this.edictsParamRate(paramId);
	rate *= this.passiveParamRate(paramId);
	rate *= this.willpowerParamRate(paramId);
	rate *= this.confidentParamRate(paramId);
	rate *= this.fatigueLevelParamRate(paramId);
	rate *= this.sleepQualityParamRate(paramId);
	rate *= this.onaniFrustrationParamRate(paramId);
	rate *= this.virginityParamRate(paramId);
	rate *= this.giftsParamRate(paramId);
	rate *= this.waitressParamRate(paramId);
	rate *= this.receptionistParamRate(paramId);
	rate *= this.accessoriesParamRate(paramId);

	if($gameParty.isRiotBattle()) {
		if(this.hasThisTitle(TITLE_ID_SUPPRESS_RIOT_THREE)) rate *= 1.03;
		else if(this.hasThisTitle(TITLE_ID_SUPPRESS_RIOT_TWO)) rate *= 1.02;
		else if(this.hasThisTitle(TITLE_ID_SUPPRESS_RIOT_ONE)) rate *= 1.01;
		if(this.isUsingThisTitle(TITLE_ID_SUPPRESS_RIOT_TWO)) rate *= 1.05;
	}
	
	if(paramId === PARAM_STRENGTH_ID) {
		if($gameParty.isTutorialBattle() && rate < 1)
			rate = 1;
	}
	
	if(paramId === PARAM_MAXSTAMINA_ID && this.ateArtisanMeal(ARTISAN_MEAL_HEART)) {
		rate *= 1 + (0.15 * this.getArtisanFoodEffectRate());
	}
	else if(this.ateArtisanMeal(ARTISAN_MEAL_HERO)) {
		if(paramId === PARAM_STRENGTH_ID || paramId === PARAM_DEXTERITY_ID || paramId === PARAM_AGILITY_ID) {
			rate *= 1 + (0.05 * this.getArtisanFoodEffectRate());
		}
	}

	if(this.isUsingStoreItem(STORE_ITEM_ENERGY_DRINK)) 
		rate *= 1 - (0.05 * this.getStoreItemEffectRate());
	
    return rate;
};

Game_Actor.prototype.paramPlus = function(paramId) {
    let value = Game_Battler.prototype.paramPlus.call(this, paramId);
    value += this.actor().plusParams[paramId];
    value += this.currentClass().plusParams[paramId];
	const equips = this.equips();
    for(let equip of equips) {
        if(equip) {
			value += equip.params[paramId];
			if(equip.plusParams) value += equip.plusParams[paramId];
        }
    }
	
	value += this.accessoriesParamPlus(paramId);
	
    return value;
};

Game_Actor.prototype.xparamPlus = function(id) {
    let value = Game_Battler.prototype.xparamPlus.call(this, id);
	const equips = this.equips();
    for(let equip of equips) {
        if(equip && equip.plusXParams) {
            value += equip.plusXParams[id];
        }
    }
    value += this.actor().plusXParams[id];
    value += this.currentClass().plusXParams[id];
	
	value += this.edictsXParamPlus(id);
	value += this.willpowerXParamPlus(id);
	value += this.passiveXParamPlus(id);
	value += this.titlesXParamPlus(id);
	value += this.halberdAndUnarmedXParamPlus(id);
	value += this.giftsXParamPlus(id);
	value += this.accessoriesXParamPlus(id);
	value += this.defStanceXParamPlus(id);
	value += this.counterStanceXParamPlus(id);
	value += this.descensionXParamPlus(id);
	
	switch(id) {
	case XPARAM_STA_REGEN_ID:
		if(this.isCoolAndCollected())
			value += 0.02;
		
		if(this.ateArtisanMeal(ARTISAN_MEAL_COMFY)) {
			value += 0.05 * this.getArtisanFoodEffectRate();
		}
		
		if(this.isUsingStoreItem(STORE_ITEM_PAIN_RESIST_PILL))
			value -= 0.02 * this.getStoreItemEffectRate();
		
		if($gameParty.easyMode())
			value += 0.02;
	break;
	case XPARAM_EN_REGEN_ID:
		if(this.isCoolAndCollected())
			value += 0.02;
		
		if(this.ateArtisanMeal(ARTISAN_MEAL_COMFY)) {
			value += 0.05 * this.getArtisanFoodEffectRate();
		}
	break;
	case XPARAM_CRIT_ID:
		if(this.isUsingStoreItem(STORE_ITEM_WELTSTONE) && this.isUsingHalberd()) 
			value += 0.25 * this.getStoreItemEffectRate();
	break;
	}
	
    return value;
};

Game_Actor.prototype.xparamRate = function(id) {
    let value = Game_Battler.prototype.xparamRate.call(this, id);
	const equips = this.equips();
    for(let equip of equips) {
        if(equip && equip.rateXParams) {
            value *= equip.rateXParams[id];
        }
    }
    value *= this.actor().rateXParams[id];
    value *= this.currentClass().rateXParams[id];
	
	value *= this.passiveXParamRate(id);
	value *= this.edictsXParamRate(id);
	value *= this.titlesXParamRate(id);
	value *= this.passiveDebuffXParamRate(id);
	value *= this.exposedWeaknessXParamRate(id);
	value *= this.onaniFrustrationXParamRate(id);
	value *= this.coolXParamRate(id);
	value *= this.desireXParamRate(id);
	value *= this.giftsXParamRate(id);
	value *= this.waitressXParamRate(id);
	value *= this.receptionistXParamRate(id);
	value *= this.gloryXParamRate(id);
	value *= this.stripperXParamRate(id);
	value *= this.trainerXParamRate(id);
	value *= this.accessoriesXParamRate(id);
	value *= this.cautiousStanceXParamRate(id);
	
	switch(id) {
	case XPARAM_EVA_ID:
		if(this.isInSexPose() || this.isInDownPose() || this.isInMasturbationPose()) 
			return 0;
		if(Prison.cheatMode() && ConfigManager.cheatActorNoEvasion)
			return 0;
		if(Prison.endlessHellCheat_cheatActorNoEvasion())
			return 0;
		if($gameTemp.isPlaytest() && TESTING_KARRYN_NO_EVADE)
			return 0;
		
		if($gameParty.easyMode())
			value *= 1.1;
	break;
	case XPARAM_HIT_ID:
		value *= (1 + this._tempAttackSkillConsUsage * 0.05);
		
		if($gameParty.easyMode())
			value *= 1.1;
	break;
	case XPARAM_CNT_ID:
		if(this.isInSexPose() || this.isInDownPose() || this.isInMasturbationPose())
			return 0;
	break;
	case XPARAM_STA_REGEN_ID:
		if(this.isStateAffected(STATE_POISON_ID)) 
			return 0;
		
		if(this.isStateAffected(STATE_YETI_HEAT_KARRYN_ONE_ID) || this.isStateAffected(STATE_YETI_HEAT_KARRYN_TWO_ID)) {
			if(Prison.easyMode())
				value *= 0.5;
			else
				value *= 0.25;
		}
	break;
	}
	
    return value;
};

Game_Actor.prototype.xparamFlat = function(id) {
    let value = Game_Battler.prototype.xparamFlat.call(this, id);
	const equips = this.equips();
    for(let equip of equips) {
        if(equip && equip.flatXParams) {
            value += equip.flatXParams[id];
        }
    }
    value += this.actor().flatXParams[id];
    value += this.currentClass().flatXParams[id];
	
	if(id === XPARAM_STA_REGEN_ID) {
		if(this.isStateAffected(STATE_POISON_ID)) value = -0.1;
	}
	
    return value;
};

Game_Actor.prototype.sparamPlus = function(id) {
    let value = Game_Battler.prototype.sparamPlus.call(this, id);
	const equips = this.equips();
    for(let equip of equips) {
        if(equip && equip.plusSParams) {
            value += equip.plusSParams[id];
        }
    }
    value += this.actor().plusSParams[id];
    value += this.currentClass().plusSParams[id];
	
	
	value += this.edictsSParamPlus(id);
	value += this.halberdAndUnarmedSParamPlus(id);
	value += this.titlesSParamPlus(id);
	value += this.giftsSParamPlus(id);
	
	if(id === SPARAM_WP_REGEN_ID) {
		if(this.ateArtisanMeal(ARTISAN_MEAL_COMFY)) {
			value += 0.05 * this.getArtisanFoodEffectRate();
		}
		
		if(this.isEquippingThisAccessory(BRACELET_DIAMOND_CUFF_ID)) {
			if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) value += 0.1;
			else value += 0.05;
		}
	
		if(this.isCoolAndCollected()) value += 0.02;
		
		if($gameParty.easyMode())
			value += 0.04;
	}
	
    return value;
};

Game_Actor.prototype.sparamRate = function(id) {
    let value = Game_Battler.prototype.sparamRate.call(this, id);
	const equips = this.equips();
    for(let equip of equips) {
        if(equip && equip.rateSParams) {
            value *= equip.rateSParams[id];
        }
    }
    value *= this.actor().rateSParams[id];
    value *= this.currentClass().rateSParams[id];
	
	switch(id) {
	case SPARAM_ESC_ID:
		value *= this.accessoryBonusEscWsc();
	break;
	case SPARAM_WSC_ID:
		value *= this.accessoryBonusEscWsc();
	break;
	case SPARAM_ASC_ID:
		value *= this.accessoryBonusAscSsc();
	break;
	case SPARAM_SSC_ID:
		if(DEBUG_MODE) {
			value *= this.accessoryBonusAscSsc();
		}
	break;
	case SPARAM_EXR_ID:
		if(this.ateArtisanMeal(ARTISAN_MEAL_SMART)) {
			value *= 1 + 0.5 * this.getArtisanFoodEffectRate();
		}
		
		if(this.metalExpRateBonus() > 0) 
			value *= (1 + (this.metalExpRateBonus() * 0.01));
		
		value *= (1 + this.gymExpRateBonus());
		
		if(Prison.cheatMode() && ConfigManager.cheatActorHalfExpRate) value *= 0.5;
	break;
	case SPARAM_WPDEF_ID:
		if(this.isUsingHalberd() && this.isUsingStoreItem(STORE_ITEM_WELTSTONE))
			value *= 1 - (0.1 * this.getStoreItemEffectRate());
	break;
	case SPARAM_WP_REGEN_ID:
		if(this.isStateAffected(STATE_YETI_HEAT_KARRYN_TWO_ID)) {
			if(Prison.easyMode())
				value *= 0.75;
			else
				value *= 0.5;
		}
	break;	
	}
	
	value *= this.passiveDebuffSParamRate(id);
	value *= this.willpowerSParamRate(id);
	value *= this.giftsSParamRate(id);
	value *= this.passiveSParamRate(id);
	value *= this.onaniFrustrationSParamRate(id);
	value *= this.desireSParamRate(id);
	value *= this.waitressSParamRate(id);
	value *= this.receptionistSParamRate(id);
	value *= this.glorySParamRate(id);
	value *= this.stripperSParamRate(id);
	value *= this.trainerSParamRate(id);
	value *= this.titlesSParamRate(id);
	value *= this.edictsSParamRate(id);
	value *= this.accessoriesSParamRate(id);
	value *= this.defStanceSParamRate(id);
	value *= this.counterStanceSParamRate(id);
	value *= this.descensionSParamRate(id);

	
    return value;
};

/////////
// Critical Damage
////////////

Game_Actor.prototype.criticalMultiplierBonus = function() {
    let multiplier = Game_Battler.prototype.criticalMultiplierBonus.call(this);
    //multiplier += this.actor().critMultBonus;
    //multiplier += this.currentClass().critMultBonus;
	/*
    for (let i = 0; i < this.equips().length; ++i) {
      let equip = this.equips()[i];
      if (equip) multiplier += equip.critMultBonus;
    }
	*/
	
	if(this.hasGift(GIFT_ID_EMPEROR_LV3_CRIT_DAMAGE)) 
		multiplier += 0.1;
	
	multiplier += this.edictsCriticalDamageBonus();
	multiplier += this.passiveCriticalDamageBonus();
	multiplier += this.desireCriticalMultiplierBonus();
	
    return multiplier;
};

//////////
// Element Rate
////////////////

Game_Actor.prototype.elementRate = function(elementId) {
    let rate = this.traitsPi(Game_BattlerBase.TRAIT_ELEMENT_RATE, elementId);
	let bonus = 0;
	
	switch(elementId) {
	case ELEMENT_TALK_ID:
		bonus += this.karrynPassiveTalkElementRate();
		
		if(this.isUsingStoreItem(STORE_ITEM_APHRODISIAC_PERFUME)) 
			bonus += 0.15 * this.getStoreItemEffectRate();
	break;
	case ELEMENT_SIGHT_ID:
		bonus += this.karrynPassiveSightElementRate();
	break;
	case ELEMENT_STRIP_ID:
		bonus += this.karrynPassiveStripElementRate();
		
		if(this.isUsingStoreItem(STORE_ITEM_APHRODISIAC_PERFUME)) 
			bonus += 0.15 * this.getStoreItemEffectRate();
		else if(this.isUsingStoreItem(STORE_ITEM_FABRIC_HARDENER)) 
			bonus -= 0.3 * this.getStoreItemEffectRate();
	break;
	case ELEMENT_PETTING_ID:
		bonus += this.karrynPassivePettingElementRate();
		
		if(this.hasEdict(EDICT_SPEC_PETTING_RESIST)) bonus -= 0.25;
		
		if(this.ateArtisanMeal(ARTISAN_MEAL_WARDEN)) {
			bonus -= 0.2 * this.getArtisanFoodEffectRate();
		}
	break;
	case ELEMENT_SEX_ID:
		bonus += this.karrynPassiveSexElementRate();
		
		if(this.hasEdict(EDICT_SPEC_SEX_RESIST)) bonus -= 0.15;
		
		if(this.ateArtisanMeal(ARTISAN_MEAL_WARDEN)) {
			bonus -= 0.2 * this.getArtisanFoodEffectRate();
		}
	break;
	case ELEMENT_SLASH_ID: 
	case ELEMENT_PIERCE_ID:
	case ELEMENT_BLUNT_ID:
		bonus += this.karrynPassiveCombatElementRate(elementId);
		bonus += this.edictsCombatElementRate(elementId);
		
		if(this.isUsingStoreItem(STORE_ITEM_PAIN_RESIST_PILL)) 
			bonus -= 0.25 * this.getStoreItemEffectRate();
	break;
	}
	 
	bonus += this.willpowerElementRate(elementId);
	//bonus += this.downPoseAndNoStaminaElementRate(elementId);
	bonus += this.exposedWeaknessElementRate(elementId, rate, bonus);
	bonus += this.passiveLizardmanElementRate(elementId);
	bonus += this.desireElementRate(elementId);
	
	let elementRate = rate + bonus;
	
	if(elementRate > 1) {
		elementRate = 1 + (elementRate - 1) * 0.5;
	}
	
	//the following don't get reduced in half
	elementRate += this.karrynAccessoryElementRate(elementId);
	elementRate += this.titlesElementRate(elementId);
	elementRate += this.giftsElementRate(elementId);
	
	elementRate = Math.max(elementRate, 0);
	return elementRate;
};

//unused
Game_Actor.prototype.downPoseAndNoStaminaElementRate = function(elementId) {
	if(this.isInDownPose() || this.hasNoStamina()) {
		if(elementId === ELEMENT_TALK_ID) {
			return 0.1;
		}
		else if(elementId === ELEMENT_SIGHT_ID) {
			return 0.1;
		}
		else if(elementId === ELEMENT_STRIP_ID) {
			return 0.1;
		}
		else if(elementId === ELEMENT_PETTING_ID) {
			return 0.1;
		}
		else if(elementId === ELEMENT_SEX_ID) {
			return 0.1;
		}
	}
	
	return 0;
};

/////////
// Accessories

Game_Actor.prototype.accessoriesParamRate = function(paramId) {
	let rate = 1;
	
	switch(paramId) {
	case PARAM_STRENGTH_ID:
		if(this.isEquippingThisAccessory(MISC_HANDBAG_ID)) {
			if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) rate *= 1.015;
			else rate *= 1.03;
		}
		
		if(this.isEquippingThisAccessory(EARRING_LIONESS_ID)) rate *= 0.88;
		if(this.isEquippingThisAccessory(EARRING_HEART_ID)) rate *= 0.9;
	break;
	case PARAM_DEXTERITY_ID:
		if(this.isEquippingThisAccessory(MISC_PERFUME_ID)) {
			if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) rate *= 1.025;
			else rate *= 1.05;
		}
		
		if(this.isEquippingThisAccessory(EARRING_STAR_ID)) rate *= 0.8;
		if(this.isEquippingThisAccessory(EARRING_CHEETAH_ID)) rate *= 0.85;
		if(this.isEquippingThisAccessory(EARRING_SKULL_ID)) rate *= 0.87;
		if(this.isEquippingThisAccessory(MISC_SCARF_ID)) rate *= 0.67;
	break;
	case PARAM_AGILITY_ID:
		if(this.isEquippingThisAccessory(EARRING_LIONESS_ID)) {
			if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) rate *= 1.025;
			else rate *= 1.05;
		}
		if(this.isEquippingThisAccessory(MISC_PERFUME_ID)) {
			if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) rate *= 1.025;
			else rate *= 1.05;
		}
		
		if(this.isEquippingThisAccessory(EARRING_TEAR_ID)) rate *= 0.95;
		if(this.isEquippingThisAccessory(EARRING_SKULL_ID)) rate *= 0.87;
		if(this.isEquippingThisAccessory(MISC_HIGHHEELS_ID)) rate *= 0.67;
		if(this.isEquippingThisAccessory(MISC_LATEXSTOCKING_ID)) rate *= 0.8;
	break;
	case PARAM_MIND_ID:
		if(this.isEquippingThisAccessory(EARRING_STAR_ID)) {
			if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) rate *= 1.075;
			else rate *= 1.15;
		}
		if(this.isEquippingThisAccessory(NECKLACE_EMERALD_ID)) {
			if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) rate *= 1.05;
			else rate *= 1.1;
		}
		
		if(this.isEquippingThisAccessory(EARRING_SKULL_ID)) rate *= 0.34;
		if(this.isEquippingThisAccessory(MISC_PERFUME_ID)) rate *= 0.75;
	break;
	case PARAM_ENDURANCE_ID:
		if(this.isEquippingThisAccessory(EARRING_STAR_ID)) {
			if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) rate *= 1.025;
			else rate *= 1.05;
		}
		
		if(this.isEquippingThisAccessory(EARRING_CHEETAH_ID)) rate *= 0.9;
		if(this.isEquippingThisAccessory(EARRING_MOON_ID)) rate *= 0.9;
		if(this.isEquippingThisAccessory(EARRING_SKULL_ID)) rate *= 0.67;
	break;
	case PARAM_MAXENERGY_ID:
		if(this.isEquippingThisAccessory(EARRING_SUN_ID)) {
			if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) rate *= 1.1;
			else rate *= 1.2;
		}
	break;
	}
	
	return rate;
};

Game_Actor.prototype.accessoriesParamPlus = function(paramId) {
	let value = 0;
	
	switch(paramId) {
	case PARAM_STRENGTH_ID:
		if(this.isEquippingThisAccessory(BRACELET_ROPE_ID)) {
			if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) value += 5;
			else value += 10;
		}
		
		if(this.isEquippingThisAccessory(EARRING_HEART_ID)) value -= 5;
	break;
	case PARAM_DEXTERITY_ID:
		if(this.isEquippingThisAccessory(BRACELET_STRING_ID)) {
			if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) value += 5;
			else value += 10;
		}
		
		if(this.isEquippingThisAccessory(EARRING_TEAR_ID)) value -= 5;
	break;
	case PARAM_AGILITY_ID:
		if(this.isEquippingThisAccessory(BRACELET_BEADS_ID)) {
			if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) value += 5;
			else value += 10;
		}
		
		if(this.isEquippingThisAccessory(EARRING_TEAR_ID)) value -= 7;
	break;
	case PARAM_MIND_ID:
		if(this.isEquippingThisAccessory(BRACELET_PURPLE_ID)) {
			if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) value += 5;
			else value += 10;
		}
		
		if(this.isEquippingThisAccessory(EARRING_TEAR_ID)) value -= 4;
		if(this.isEquippingThisAccessory(EARRING_LIONESS_ID)) value -= 5;
		if(this.isEquippingThisAccessory(EARRING_HEART_ID)) value -= 6;
	break;
	case PARAM_ENDURANCE_ID:
		if(this.isEquippingThisAccessory(BRACELET_SILVER_ID)) {
			if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) value += 7;
			else value += 15;
		}
		if(this.isEquippingThisAccessory(EARRING_STAR_ID)) {
			if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) value += 4;
			else value += 8;
		}
		
		if(this.isEquippingThisAccessory(EARRING_CHEETAH_ID)) value -= 8;
		if(this.isEquippingThisAccessory(EARRING_MOON_ID)) value -= 7;
	break;
	case PARAM_MAXSTAMINA_ID:
		if(this.isEquippingThisAccessory(BRACELET_RED_ID)) {
			if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) value += 150;
			else value += 300;
		}
	break;
	case PARAM_MAXENERGY_ID:
		if(this.isEquippingThisAccessory(BRACELET_PALLADIUM_ID)) {
			if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) value += 5;
			else value += 10;
		}
		
		if(this.isEquippingThisAccessory(EARRING_HEART_ID)) {
			if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) value += 2;
			else value += 4;
		}
	break;
	}
	
	
	return value;
};

Game_Actor.prototype.accessoriesXParamRate = function(paramId) {
	let rate = 1;
	
	switch(paramId) {
	case XPARAM_EVA_ID:
		if(this.isEquippingThisAccessory(NECKLACE_SAPPHIRE_ID)) {
			if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) rate *= 1.1;
			else rate *= 1.2;
		}
	break;
	case XPARAM_CRIT_ID:
		if(this.isEquippingThisAccessory(NECKLACE_SAPPHIRE_ID)) rate *= 0.85;
	break;
	}
	
	return rate;
};

Game_Actor.prototype.accessoriesXParamPlus = function(paramId) {
	let value = 0;
	
	switch(paramId) {
	case XPARAM_STA_REGEN_ID:
		if(this.isEquippingThisAccessory(BRACELET_RED_ID)) {
			if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) value += 0.01;
			else value += 0.02;
		}
	break;
	case XPARAM_EN_REGEN_ID:
		if(this.isEquippingThisAccessory(BRACELET_PALLADIUM_ID)) {
			if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) value += 0.015;
			else value += 0.03;
		}
	break;
	case XPARAM_HIT_ID:
		if(this.isEquippingThisAccessory(BRACELET_GOLD_ID)) {
			if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) value += 0.2;
			else value += 0.4;
		}
	break;
	}
	
	return value;
};

Game_Actor.prototype.accessoriesSParamRate = function(paramId) {
	let rate = 1;
	
	if(paramId === SPARAM_WPATK_ID) {
		if(this.isEquippingThisAccessory(NECKLACE_RUBY_ID)) rate *= 0.9;
	}
	else if(id === SPARAM_WPDEF_ID) {
		if(this.isEquippingThisAccessory(MISC_RIBBON)) {
			if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) rate *= 1.005;
			else rate *= 1.01;
		}
		
		if(this.isUsingThisTitle(TITLE_ID_DESCENSION_D2_HARD)) rate *= 1.19;
	}
	else if(paramId === SPARAM_WP_REGEN_ID) {
		if(this.isEquippingThisAccessory(RING_FAIRY) && this.isInCombatPose()) {
			const precentOfStaminaMissing = (100 - this.currentPercentOfStamina_realMax()) * 0.01;
			let effect = 0;
			if(precentOfStaminaMissing >= 0.65)
				effect = 0.66 + (precentOfStaminaMissing - 0.65) * 3;
			else
				effect = precentOfStaminaMissing;
			
			if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO))	
				rate *= (1 + effect * 0.5);
			else
				rate *= (1 + effect);
		}
	}
	return rate;
};




Game_Actor.prototype.karrynAccessoryElementRate = function(elementId) {
	let bonus = 0;
	switch(elementId) {
	case ELEMENT_TALK_ID:
		bonus += this.karrynAccTalkElementRate();
	break;
	case ELEMENT_SIGHT_ID:
		bonus += this.karrynAccSightElementRate();
	break;
	case ELEMENT_STRIP_ID:
		bonus += this.karrynAccStripElementRate();
	break;
	case ELEMENT_PETTING_ID:
		bonus += this.karrynAccPettingElementRate();
	break;
	case ELEMENT_SEX_ID:
		bonus += this.karrynAccSexElementRate();
	break;
	case ELEMENT_SLASH_ID:
		bonus += this.karrynAccSlashElementRate();
	break;
	case ELEMENT_PIERCE_ID:
		bonus += this.karrynAccPierceElementRate();
	break;
	case ELEMENT_BLUNT_ID:
		bonus += this.karrynAccBluntElementRate();
	break;
	}
	
	return bonus;
};

Game_Actor.prototype.karrynAccTalkElementRate = function() {
	let accBonus = 0;
	
	if(this.isEquippingThisAccessory(RING_MIDI_ID)) {
		if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) accBonus -= 0.125;
		else accBonus -= 0.25;
	}
	
	
	if(this.isEquippingThisAccessory(MISC_NAILPOLISH_ID)) {
		if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) accBonus -= 0.025;
		else accBonus -= 0.05;
	}
	if(this.isEquippingThisAccessory(MISC_LIPGLOSS_ID)) accBonus += 0.2;
	if(this.isEquippingThisAccessory(MISC_PHONESTRAP_ID)) {
		if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) accBonus -= 0.03;
		else accBonus -= 0.06;
	}
	if(this.isEquippingThisAccessory(MISC_HANDBAG_ID)) accBonus += 0.15;
	if(this.isEquippingThisAccessory(MISC_LATEXSTOCKING_ID)) accBonus += 0.15;
	
	return accBonus;
};

Game_Actor.prototype.karrynAccSightElementRate = function() {
	let accBonus = 0;
	
	if(this.isEquippingThisAccessory(RING_MIDI_ID)) {
		if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) accBonus -= 0.125;
		else accBonus -= 0.25;
	}
	
	if(this.isEquippingThisAccessory(MISC_NAILPOLISH_ID)) accBonus += 0.2;
	if(this.isEquippingThisAccessory(MISC_EYELINER_ID)) {
		if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) accBonus -= 0.025;
		else accBonus -= 0.05;
	}
	if(this.isEquippingThisAccessory(MISC_PHONESTRAP_ID)) {
		if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) accBonus -= 0.03;
		else accBonus -= 0.06;
	}
	if(this.isEquippingThisAccessory(MISC_HANDBAG_ID)) accBonus += 0.15;
	if(this.isEquippingThisAccessory(MISC_LATEXSTOCKING_ID)) accBonus += 0.15;
	
	return accBonus;
};

Game_Actor.prototype.karrynAccPettingElementRate = function() {
	let accBonus = 0;
	
	if(this.isEquippingThisAccessory(RING_SCORPION_ID)) {
		if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) accBonus -= 0.15;
		else accBonus -= 0.3;
	}
	
	if(this.isEquippingThisAccessory(MISC_LIPGLOSS_ID)) {
		if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) accBonus -= 0.025;
		else accBonus -= 0.05;
	}
	if(this.isEquippingThisAccessory(MISC_PHONESTRAP_ID)) accBonus += 0.2;
	if(this.isEquippingThisAccessory(MISC_PERFUME_ID)) accBonus += 0.2;
	if(this.isEquippingThisAccessory(MISC_HANDBAG_ID)) accBonus += 0.15;
	if(this.isEquippingThisAccessory(MISC_LATEXSTOCKING_ID)) accBonus += 0.15;
	
	if(this.isEquippingThisAccessory(BRACELET_DIAMOND_CUFF_ID)) {
		if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) accBonus += 0.4;
		else accBonus += 0.2;
	}
	
	return accBonus;
};

Game_Actor.prototype.karrynAccSexElementRate = function() {
	let accBonus = 0;
	
	if(this.isEquippingThisAccessory(RING_GOLDGLASS_ID)) {
		if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) accBonus -= 0.15;
		else accBonus -= 0.3;
	}
	if(this.isEquippingThisAccessory(NECKLACE_EMERALD_ID)) accBonus += 0.2;
	if(this.isEquippingThisAccessory(MISC_EYELINER_ID)) accBonus += 0.15;
	if(this.isEquippingThisAccessory(MISC_PERFUME_ID)) accBonus += 0.2;
	if(this.isEquippingThisAccessory(MISC_LATEXSTOCKING_ID)) {
		if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) accBonus -= 0.035;
		else accBonus -= 0.07;
	} 
	
	if(this.isEquippingThisAccessory(BRACELET_DIAMOND_CUFF_ID)) {
		if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) accBonus += 0.3;
		else accBonus += 0.15;
	}
	
	return accBonus;
};

Game_Actor.prototype.karrynAccStripElementRate = function() {
	let accBonus = 0;
	
	if(this.isEquippingThisAccessory(MISC_CALFSKINBELT_ID)) {
		if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) accBonus -= 0.125;
		else accBonus -= 0.25;
	}
	
	if(this.isEquippingThisAccessory(NECKLACE_HERO_ID)) {
		if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) accBonus += 0.5;
		else accBonus += 0.25;
	}
	
	if(this.isEquippingThisAccessory(EARRING_CACTUS)) {
		accBonus += 0.1;
	}
	
	
	return accBonus;
};

Game_Actor.prototype.karrynAccSlashElementRate = function() {
	let accBonus = 0;
	
	if(this.isEquippingThisAccessory(NECKLACE_DOGTAG_ID)) {
		if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) accBonus -= 0.165;
		else accBonus -= 0.33;
	}
		
	if(this.isEquippingThisAccessory(NECKLACE_BALL_ID)) accBonus += 0.1;
	
	if(this.isEquippingThisAccessory(NECKLACE_HERO_ID)) {
		if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) accBonus -= 0.4;
		else accBonus -= 0.2;
	}
	
	return accBonus;
};
Game_Actor.prototype.karrynAccPierceElementRate = function() {
	let accBonus = 0;
	
	if(this.isEquippingThisAccessory(NECKLACE_BALL_ID)) {
		if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) accBonus -= 0.165;
		else accBonus -= 0.33;
	}
	
	if(this.isEquippingThisAccessory(NECKLACE_CHAIN_ID)) accBonus += 0.1;
	
	if(this.isEquippingThisAccessory(NECKLACE_HERO_ID)) {
		if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) accBonus -= 0.4;
		else accBonus -= 0.2;
	}
	
	return accBonus;
};
Game_Actor.prototype.karrynAccBluntElementRate = function() {
	let accBonus = 0;
	
	if(this.isEquippingThisAccessory(NECKLACE_CHAIN_ID)) {
		if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) accBonus -= 0.165;
		else accBonus -= 0.33;
	}
	
	if(this.isEquippingThisAccessory(NECKLACE_DOGTAG_ID)) accBonus += 0.1;
	
	if(this.isEquippingThisAccessory(NECKLACE_HERO_ID)) {
		if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) accBonus -= 0.4;
		else accBonus -= 0.2;
	}
	
	return accBonus;
};


///////
// Halberd
////////////

Game_Actor.prototype.isUsingHalberd = function() {
	if(this.isInSexPose() || this.isInDownPose() || !this.hasHalberd()) return false;
	return true;
};

Game_Actor.prototype.hasHalberd = function() {
	if(this.hasDisarmedState() || this.isStateAffected(STATE_NO_HALBERD_ID) || this.isUsingThisTitle(TITLE_ID_KICK_ONE) || this.isUsingThisTitle(TITLE_ID_DESCENSION_BROTHER_NORMAL) || this.isInJobPose() || this._halberdIsDefiled)
		return false;
	else 
		return true;
};

Game_Actor.prototype.setAsNoHalberdBattle = function() {
	this.addState(STATE_NO_HALBERD_ID);
};

Game_Actor.prototype.setHalberdAsDefiled = function(status) {
	this._halberdIsDefiled = status;
};

Game_Actor.prototype.halberdAndUnarmedXParamPlus = function(paramId) {
	let weaponXParamPlus = 0;
	
	if(this.isUsingHalberd()) {
		weaponXParamPlus += this.edictsHalberdXParamPlus(paramId);
	}
	else {
		weaponXParamPlus += this.edictsUnarmedXParamPlus(paramId);
	}
	
	return weaponXParamPlus;
};

Game_Actor.prototype.halberdAndUnarmedSParamPlus = function(paramId) {
	let weaponSParamPlus = 0;
	if(paramId !== SPARAM_WPATK_ID && paramId !== SPARAM_WPDEF_ID) return 0;
	
	if(this.isUsingHalberd()) {
		if(paramId === SPARAM_WPATK_ID) weaponSParamPlus += this.edictsHalberdAttack();
		if(paramId === SPARAM_WPDEF_ID) weaponSParamPlus += this.edictsHalberdDefense();
	}
	else
	{
		if(paramId === SPARAM_WPATK_ID) {
			weaponSParamPlus += this.edictsUnarmedAttack();
			weaponSParamPlus += this.titlesUnarmedAttack();
		}
		else if(paramId === SPARAM_WPDEF_ID) {
			weaponSParamPlus += this.edictsUnarmedDefense();
			weaponSParamPlus += this.titlesUnarmedDefense();
		}
	}

	return weaponSParamPlus;
};

/////////
// Counter
/////////////////

Game_Actor.prototype.counterTotal = function() {
    let total = 2;
	if(this.isStateAffected(STATE_COUNTER_STANCE_ID)) total += 2;
	if(this.hasEdict(EDICT_HALBERD_DEFENSIVE_FOUR) && this.isUsingHalberd()) total += 1;
	return total;
};

/////////
// Overblow Protection
///////////////////

Game_Actor.prototype.overblowProtectionRate = function() {
	let op = 0.75;

	if(Prison.easyMode()) op -= 0.15;

	if(this.isUsingHalberd()) {
		if(this.hasEdict(EDICT_HALBERD_DEFENSIVE_FOUR)) op -= 0.15;
		else if(this.hasEdict(EDICT_HALBERD_DEFENSIVE_TWO)) op -= 0.1;
	}
	else {
		if(this.hasEdict(EDICT_UNARMED_DEFENSE_TRAINING_II)) op -= 0.08;
	}
	
	if(this.hasEdict(EDICT_RESEARCH_YETI_STUDY)) op -= 0.07;

	if(this.hasEdict(EDICT_SPEC_DEFENSIVE_MIND_FOCUS) && this.isStateAffected(STATE_FOCUS_ID)) 
		op -= this.willpowerFocusOverblowProtectionEffect();

	if(this._accessoryBonusLvl > 0)
		op -= (this._accessoryBonusLvl - 1) * 0.04


	if(this.isEquippingThisAccessory(NECKLACE_RUBY_ID)) {
		if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) op -= 0.05;
		else op -= 0.1;
	}

	if(this.hasGift(GIFT_ID_EMPEROR_LV3_OVERBLOW_PROTECTION)) op -= 0.07;

	if(this.hasEdict(EDICT_PRISON_EMBLEM_EFFECTS)) {
		const masoLvl = this.masochismLvl();
		if(masoLvl < 3) op -= (this.masochismLvl() * 0.05);
		else op -= (0.15 + (this.masochismLvl() * 0.025));
	}

	if(this.isStateAffected(STATE_GUARD_ID)) {
		op *= 0.5;
	}
	else if(this.isStateAffected(STATE_COUNTER_STANCE_ID)) {
		op *= 0.8;
	}

	return Math.max(op, 0.1);
};

/////////
// Body Slots
////////////

Game_Actor.prototype.setAllBodySlots = function(st) { 
	//st = Body Status
	this._body = [ -1, st, st, st, st, st, st, st, st, st, st, st, st, st, st, st, st ];
};
Game_Actor.prototype.setAllBodySlotsFree = function() { 
	this.setAllBodySlots(SLOT_FREE);
};
Game_Actor.prototype.setAllBodySlotsUnavailable = function() { 
	this.setAllBodySlots(SLOT_UNAVAILABLE);
};

Game_Actor.prototype.setAllBodySlotsExceptToy = function(st) { 
	//st = Body Status
	for(let i = 0; i < this._body.length; i++) {
		if(this.getBodySlotStatus(i) !== SLOT_TOY && this.getBodySlotStatus(i) !== SLOT_TOY_PETTING_ONLY && this.getBodySlotStatus(i) !== SLOT_UNAVAILABLE_BUT_HAS_TOY) {
			this.setBodyPart(i, st);
		}
		else if(st === SLOT_FREE) {
			this.setBodyPart(i, SLOT_TOY);
		}
		else if(st === SLOT_UNAVAILABLE) {
			this.setBodyPart(i, SLOT_UNAVAILABLE_BUT_HAS_TOY);
		}
	}
};
Game_Actor.prototype.setAllBodySlotsFreeExceptToy = function() { 
	this.setAllBodySlotsExceptToy(SLOT_FREE);
};
Game_Actor.prototype.setAllBodySlotsUnavailableExceptToy = function() { 
	this.setAllBodySlotsExceptToy(SLOT_UNAVAILABLE);
};

Game_Actor.prototype.setAllBodySlotsExceptPettedInsert = function(st) { 
	//st = Body Status
	for(let i = 0; i < this._body.length; i++) {
		if(this.getBodySlotStatus(i) !== SLOT_PENIS && this.getBodySlotStatus(i) !== SLOT_ANUS && this.getBodySlotStatus(i) !== SLOT_TONGUE && this.getBodySlotStatus(i) !== SLOT_PETTED) {
			this.setBodyPart(i, st);
		}
	}
};
Game_Actor.prototype.setAllBodySlotsFreeExceptPettedInsert = function() { 
	this.setAllBodySlotsExceptPettedInsert(SLOT_FREE);
};


Game_Actor.prototype.setBodyPart = function(slotId, status) {
	this._body[slotId] = status;
};
Game_Actor.prototype.setBodyPartFree = function(slotId) {
	this.setBodyPart(slotId, SLOT_FREE);
};

//unused
Game_Actor.prototype.setBodyPartFree_NoToys = function(slotId) {
	this.setBodyPart(slotId, SLOT_FREE_NO_TOYS);
};

Game_Actor.prototype.setBodyPartFree_PettingOnly = function(slotId) {
	if(this.getBodySlotStatus(slotId) === SLOT_TOY || this.getBodySlotStatus(slotId) === SLOT_TOY_PETTING_ONLY || this.getBodySlotStatus(slotId) === SLOT_UNAVAILABLE_BUT_HAS_TOY)
		this.setBodyPart(slotId, SLOT_TOY_PETTING_ONLY);
	else
		this.setBodyPart(slotId, SLOT_FREE_PETTING_ONLY);
};

//unused
Game_Actor.prototype.setBodyPartFree_PettingOnly_NoToys = function(slotId) {
	this.setBodyPart(slotId, SLOT_FREE_PETTING_ONLY_NO_TOYS);
};

Game_Actor.prototype.setBodyPartUnavailable = function(slotId) {
	if(this.getBodySlotStatus(slotId) === SLOT_TOY)
		this.setBodyPart(slotId, SLOT_UNAVAILABLE_BUT_HAS_TOY);
	else
		this.setBodyPart(slotId, SLOT_UNAVAILABLE);
};
Game_Actor.prototype.setBodyPartPetted = function(slotId) {
	this.setBodyPart(slotId, SLOT_PETTED);
};
Game_Actor.prototype.setBodyPartPetted_PettingOnly = function(slotId) {
	this.setBodyPart(slotId, SLOT_PETTED_PETTING_ONLY);
};
Game_Actor.prototype.setBodyPartToy = function(slotId) {
	if(this.getBodySlotStatus(slotId) == SLOT_FREE_PETTING_ONLY || this.getBodySlotStatus(slotId) == SLOT_PETTED_PETTING_ONLY)
		this.setBodyPart(slotId, SLOT_TOY_PETTING_ONLY);
	else if(this.getBodySlotStatus(slotId) == SLOT_UNAVAILABLE)
		this.setBodyPart(slotId, SLOT_UNAVAILABLE_BUT_HAS_TOY);
	else
		this.setBodyPart(slotId, SLOT_TOY);
};
Game_Actor.prototype.setBodyPartPenis = function(slotId) {
	this.setBodyPart(slotId, SLOT_PENIS);
};
Game_Actor.prototype.setBodyPartAnus = function(slotId) {
	this.setBodyPart(slotId, SLOT_ANUS);
};
Game_Actor.prototype.setBodyPartTongue = function(slotId) {
	this.setBodyPart(slotId, SLOT_TONGUE);
};


Game_Actor.prototype.getBodySlotStatus = function(slotId) {
	return this._body[slotId];
};

Game_Actor.prototype.isBodySlotFree = function(slotId) {
	return this.getBodySlotStatus(slotId) === SLOT_FREE;
};
Game_Actor.prototype.isBodySlotPenis = function(slotId) {
	return this.getBodySlotStatus(slotId) === SLOT_PENIS;
};
Game_Actor.prototype.isBodySlotAnus = function(slotId) {
	return this.getBodySlotStatus(slotId) === SLOT_ANUS;
};
Game_Actor.prototype.isBodySlotTongue = function(slotId) {
	return this.getBodySlotStatus(slotId) === SLOT_TONGUE;
};

Game_Actor.prototype.isBodySlotToy = function(slotId) {
	switch(slotId) {
	case CLIT_ID: return this._wearingClitToy !== NO_TOY;
	case PUSSY_ID: return this._wearingPussyToy !== NO_TOY;
	case ANAL_ID: return this._wearingAnalToy !== NO_TOY;
	}
};

Game_Actor.prototype.isBodySlotInserted = function(slotId) {
	return this.getBodySlotStatus(slotId) === SLOT_PENIS || this.getBodySlotStatus(slotId) === SLOT_TOY;
};

Game_Actor.prototype.isBodySlotAvailableForPetting = function(slotId) {
	return this.getBodySlotStatus(slotId) < SLOT_PETTED_PETTING_ONLY;
};

//unused
Game_Actor.prototype.isBodySlotAvailableForToy = function(slotId) {
	return (this.getBodySlotStatus(slotId) < SLOT_TOY && 
	this.getBodySlotStatus(slotId) !== SLOT_FREE_NO_TOYS && 
	this.getBodySlotStatus(slotId) !== SLOT_FREE_PETTING_ONLY_NO_TOYS);
};

Game_Actor.prototype.isBodySlotAvailableForPenis = function(slotId) {
	if(this.getBodySlotStatus(slotId) === SLOT_FREE_PETTING_ONLY ||
	this.getBodySlotStatus(slotId) === SLOT_PETTED_PETTING_ONLY ||
	this.getBodySlotStatus(slotId) === SLOT_TOY_PETTING_ONLY || this.getBodySlotStatus(slotId) === SLOT_FREE_PETTING_ONLY_NO_TOYS) return false;
	
	return this.getBodySlotStatus(slotId) < SLOT_PENIS;
};

Game_Actor.prototype.isBodySlotUnavailable = function(slotId) {
	return this.getBodySlotStatus(slotId) === SLOT_UNAVAILABLE || this.getBodySlotStatus(slotId) === SLOT_UNAVAILABLE_BUT_HAS_TOY;
};

//////////
// Toy
//////////

Game_Actor.prototype.isWearingAnyToy = function() {
	return this.isWearingClitToy() || this.isWearingPussyToy() || this.isWearingAnalToy(); 
};

Game_Actor.prototype.isWearingClitToy = function() {
	return this._wearingClitToy !== NO_TOY;
	//return this.getBodySlotStatus(CLIT_ID) === SLOT_TOY || this.getBodySlotStatus(CLIT_ID) === SLOT_TOY_PETTING_ONLY || this.getBodySlotStatus(CLIT_ID) === SLOT_UNAVAILABLE_BUT_HAS_TOY;
};
Game_Actor.prototype.isWearingPussyToy = function() {
	return this._wearingPussyToy !== NO_TOY;
	//return this.getBodySlotStatus(PUSSY_ID) === SLOT_TOY || this.getBodySlotStatus(PUSSY_ID) === SLOT_TOY_PETTING_ONLY || this.getBodySlotStatus(PUSSY_ID) === SLOT_UNAVAILABLE_BUT_HAS_TOY;
};
Game_Actor.prototype.isWearingAnalToy = function() {
	return this._wearingAnalToy !== NO_TOY;
	//return this.getBodySlotStatus(ANAL_ID) === SLOT_TOY || this.getBodySlotStatus(ANAL_ID) === SLOT_TOY_PETTING_ONLY || this.getBodySlotStatus(ANAL_ID) === SLOT_UNAVAILABLE_BUT_HAS_TOY;
};

Game_Actor.prototype.setClitToy_PinkRotor = function(enemy) {
	//this.setBodyPartToy(CLIT_ID);
	this._wearingClitToy = CLIT_TOY_PINK_ROTOR;
	if(enemy) {
		let multipler = 0.4 + enemy.toyLvl() * 0.1;
		this._toyValue_clitToy = enemy.dex * multipler;
	}
	else {
		let multipler = 0.2 + $gameTroop.getEnemyIdAppearLvl(ENEMY_ID_NERD_CLIT_TOY) * 0.04;
		this._toyValue_clitToy = this.dex * multipler;
	}
};
Game_Actor.prototype.setPussyToy_PenisDildo = function(enemy) {
	//this.setBodyPartToy(PUSSY_ID);
	this._wearingPussyToy = PUSSY_TOY_PENIS_DILDO;
	if(enemy) {
		let multipler = 0.4 + enemy.toyLvl() * 0.1;
		this._toyValue_pussyToy = enemy.dex * multipler;
	}
	else {
		let multipler = 0.2 + $gameTroop.getEnemyIdAppearLvl(ENEMY_ID_NERD_PUSSY_TOY) * 0.04;
		this._toyValue_pussyToy = this.dex * multipler;
	}
};
Game_Actor.prototype.setAnalToy_AnalBeads = function(enemy) {
	//this.setBodyPartToy(ANAL_ID);
	this._wearingAnalToy = ANAL_TOY_ANAL_BEADS;
	if(enemy) {
		let multipler = 0.4 + enemy.toyLvl() * 0.1;
		this._toyValue_analToy = enemy.dex * multipler;
	}
	else {
		let multipler = 0.2 + $gameTroop.getEnemyIdAppearLvl(ENEMY_ID_NERD_ANAL_TOY) * 0.04;
		this._toyValue_analToy = this.dex * multipler;
	}
};

Game_Actor.prototype.isWearingClitToy_PinkRotor = function() {
	return this.isWearingClitToy() && this._wearingClitToy === CLIT_TOY_PINK_ROTOR;
};
Game_Actor.prototype.isWearingPussyToy_PenisDildo = function() {
	return this.isWearingPussyToy() && this._wearingPussyToy === PUSSY_TOY_PENIS_DILDO;
};
Game_Actor.prototype.isWearingAnalToy_AnalBeads = function() {
	return this.isWearingAnalToy() && this._wearingAnalToy === ANAL_TOY_ANAL_BEADS;
};

Game_Actor.prototype.removeAllToys = function() {
	this.removeClitToy();
	this.removePussyToy();
	this.removeAnalToy();
};

Game_Actor.prototype.removeAllToysPostBattle = function() {
	if(!Karryn.hasEdict(EDICT_WARDEN_QUEST_EFFECTS))
		this.removeAllToys();
};

Game_Actor.prototype.removeClitToy = function() {
	this.setToyInserted_ClitToy_PinkRotor(false);
	this._wearingClitToy = NO_TOY;
	this._toyValue_clitToy = 0;
	this.stopClitToyRaid();
	
};
Game_Actor.prototype.removePussyToy = function() {
	this.setToyInserted_PussyToy_PenisDildo(false);
	this._wearingPussyToy = NO_TOY;
	this._toyValue_pussyToy = 0;
	this.stopPussyToyRaid();
	
};
Game_Actor.prototype.removeAnalToy = function() {
	this.setToyInserted_AnalToy_AnalBeads(false);
	this._wearingAnalToy = NO_TOY;
	this._toyValue_analToy = 0;
	this.stopAnalToyRaid();
};

Game_Actor.prototype.getClitToyId = function() {
	if(this.isBodySlotToy(CLIT_ID) && this._wearingClitToy) 
		return '' + this.getTachieClitToyExtension() + this._wearingClitToy;
	else return NO_TOY;
};
Game_Actor.prototype.getPussyToyId = function() {
	if(this.isBodySlotToy(PUSSY_ID) && this._wearingPussyToy) 
		return '' + this.getTachiePussyToyExtension() + this._wearingPussyToy;
	else return NO_TOY;
};
Game_Actor.prototype.getAnalToyId = function() {
	if(this.isBodySlotToy(ANAL_ID) && this._wearingAnalToy) 
		return '' + this.getTachieAnalToyExtension() + this._wearingAnalToy;
	else return NO_TOY;
};


//Todo: Properly do toy extension code, Someday... :TonkinSweaty:
Game_Actor.prototype.getTachieClitToyExtension = function() {
	if($gameParty.isInGloryBattle) 
		return this.getTachieClitToyExtension_gloryBattle();
	else if(this.isInMasturbationCouchPose()) 
		return this.getTachieClitToyExtension_masBattle();
	
	let clitToyExt = '';
	let clitNakedToyException = false;
	
	if(this.isInKarrynCowgirlPose()) {
			clitToyExt = 'close_';
		if(this.tachieBody.includes('far'))
			clitToyExt = 'far_';
	}
	else if(this.isInAttackPose()) {
			clitToyExt = 'normal_';
		if(this.isConfident)
			clitToyExt = 'confident_';
	}
	else if(this.isInMapPose()) {
		if(this.tachieBody.includes('spread')) {
			clitToyExt = 'spread_';
			if(this.tachieRightArm.includes('toyC_grip') && !this.hasHalberd()) {
				let clitToyReactionScore = this.reactionScore_clitToyPassive(); 
				let clitToyLvl2 = clitToyReactionScore >= VAR_TOY_RS_LV2_REQ;
				let clitToyLvl1 = clitToyReactionScore >= VAR_TOY_RS_LV1_REQ;
				let isFrustrated = this.isOnaniFrustrated();
				if(clitToyLvl2 || (clitToyLvl1 && isFrustrated)) {
					clitToyExt = 'spread_grip_';
					clitNakedToyException = true;
				}
			}
		}
		else if(this.tachieRightArm.includes('toyC_grip') && !this.hasHalberd()) {
			let clitToyReactionScore = this.reactionScore_clitToyPassive(); 
			let clitToyLvl2 = clitToyReactionScore >= VAR_TOY_RS_LV2_REQ;
			let clitToyLvl1 = clitToyReactionScore >= VAR_TOY_RS_LV1_REQ;
			let isFrustrated = this.isOnaniFrustrated();
			if(clitToyLvl2 || (clitToyLvl1 && isFrustrated)) {
				clitToyExt = 'grip_';
				clitNakedToyException = true;
			}
		}
	}
	else if(this.isInFootjobSexPose()) {
		if(this.boobsSizeIsPCup() && !this.isWearingGlovesAndHat())
			clitToyExt = 'pcup_';
	}
	else if(this.isInDefeatedLevel5Pose()) {
		if(this.tachieLegs.includes('spread'))
			clitToyExt = 'spread_';
	}
	
	if(this._tachieClitToyHasNaked && !clitNakedToyException && !this.isWearingGlovesAndHat())
		clitToyExt += 'naked_';
	
	return clitToyExt;
};
Game_Actor.prototype.getTachiePussyToyExtension = function() {
	if(this.isInMapPose()) {
		let pussyToyExt = '';
		if(this.tachieRightArm.includes('toyP_grip'))
			pussyToyExt = 'grip_';
		return pussyToyExt;
	}
	else if(this.isInMasturbationInBattlePose()) {
		let pussyToyExt = '';
		if(this.tachieRightArm.includes('play_toyP'))
			pussyToyExt = 'rightarm_play_';
		else if(this.tachieLeftArm.includes('play_toyP'))
			pussyToyExt = 'leftarm_play_';
		return pussyToyExt;
	}
	else if(this.isInDownStaminaPose()) {
		let pussyToyExt = '1_';
		if(this.tachieBody.includes('2'))
			pussyToyExt = '2_';
		return pussyToyExt;
	}
	else if($gameParty.isInGloryBattle) 
		return this.getTachiePussyToyExtension_gloryBattle();
	else if(this.isInMasturbationCouchPose()) 
		return this.getTachiePussyToyExtension_masBattle();
	else return '';
};
Game_Actor.prototype.getTachieAnalToyExtension = function() {
	if(this.isInMapPose()) {
		let pussyToyExt = '';
		if(this.tachieLeftArm.includes('toyA_grip'))
			pussyToyExt = 'grip_';
		return pussyToyExt;
	}
	else if($gameParty.isInGloryBattle) 
		return this.getTachieAnalToyExtension_gloryBattle();
	else if(this.isInMasturbationCouchPose()) 
		return this.getTachieAnalToyExtension_masBattle();
	else return '';
};

/////////
// Spank Mark
/////////

Game_Actor.prototype.getTachieSpankMarkRightButtId = function() {
	if(!this.isInShowSpankMarkPose()) return 0;
	let spankMarkId = 0;
	if(this._tempRecordSpankMarksRightButtcheek >= 12)
		spankMarkId = 3;
	if(this._tempRecordSpankMarksRightButtcheek >= 5)
		spankMarkId = 2;
	if(this._tempRecordSpankMarksRightButtcheek >= 2)
		spankMarkId = 1;
	return spankMarkId;
};
Game_Actor.prototype.getTachieSpankMarkLeftButtId = function() {
	if(!this.isInShowSpankMarkPose()) return 0;
	let spankMarkId = 0;
	if(this._tempRecordSpankMarksLeftButtcheek >= 12)
		spankMarkId = 3;
	if(this._tempRecordSpankMarksLeftButtcheek >= 5)
		spankMarkId = 2;
	if(this._tempRecordSpankMarksLeftButtcheek >= 2)
		spankMarkId = 1;
	return spankMarkId;
};

/////////
// Draw Tachie

// Imported from Saba_Tachie.js, all credits to Saba
Game_Actor.prototype.drawTachieCache = function(cache, bitmap, x, y, rect, scale) {
	if(!rect) {
		rect = new Rectangle(0, 0, 0, 0);
	}
	
	let xx = -rect.x < 0 ? 0 : -rect.x;
	let yy = -rect.y < 0 ? 0 : -rect.y;
	let ww = rect.width / scale;
	let w = rect.width;
	if (w <= 0 || w + xx > cache.width) {
		w = cache.width - xx;
		ww = w / scale;
	}
	if (xx + ww > cache.width) {
		let xScale = (cache.width - xx) * 1.0 / ww;
		ww = cache.width - xx;
		w *= xScale;
	}
	let hh = rect.height / scale;
	let h = rect.height;
	if (h <= 0 || h + yy > cache.height) {
		h = cache.height - yy;
		hh = h / scale;
	}
	if (yy + hh > cache.height) {
		let yScale = (cache.height - yy) * 1.0 / hh;
		hh = cache.height - yy;
		h *= yScale;
	}
	//console.log('' + xx + ' ' + yy + ' ' + ww + ' ' + hh + ' ' + x + ' ' + y + ' ' + w + ' ' + h)
	
	//let offsetArray = actor.getBattlePoseOffetArray();
	//x += offsetArray[0];
	//xx -= offsetArray[0];
	//w += offsetArray[0];
	
	bitmap.blt(cache, xx, yy, ww, hh, x, y, w, h);
};

Game_Actor.prototype.drawTachieBody = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieBodyFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieHead = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieHeadFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieGlasses = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieGlassesFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieTie = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieTieFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieLeftArm = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieLeftArmFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieRightArm = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieRightArmFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieHat = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieHatFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieHips = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieHipsFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieClitToy = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieClitToyFile(), bitmap, this);
};
Game_Actor.prototype.drawTachiePussyToy = function(saba, bitmap) {
	saba.drawTachieFile(this.tachiePussyToyFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieAnalToy = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieAnalToyFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieWeapon = function(saba, bitmap) {
	//var tone = Karryn.tachieHalberdTone();
	//saba.drawTachieFileWithTone(this.tachieWeaponFile(), bitmap, this, tone);
	saba.drawTachieFile(this.tachieWeaponFile(), bitmap, this);
};
Game_Actor.prototype.drawTachiePanties = function(saba, bitmap) {
	saba.drawTachieFile(this.tachiePantiesFile(), bitmap, this);
};

Game_Actor.prototype.drawTachieHolePussy = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieHolePussyFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieHoleAnus = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieHoleAnusFile(), bitmap, this);
};

Game_Actor.prototype.drawTachieClothes = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieClothesFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieSkirt = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieSkirtFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieLegs = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieLegsFile(), bitmap, this);
};

Game_Actor.prototype.drawTachieMug = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieMugFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieStraw = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieStrawFile(), bitmap, this);
};

Game_Actor.prototype.drawTachieLeftHole = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieLeftHoleFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieRightHole = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieRightHoleFile(), bitmap, this);
};

Game_Actor.prototype.drawTachieVisitorA = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieVisitorAFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieVisitorB = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieVisitorBFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieVisitorC = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieVisitorCFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieVisitorD = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieVisitorDFile(), bitmap, this);
};

Game_Actor.prototype.drawTachiePole = function(saba, bitmap) {
	saba.drawTachieFile(this.tachiePoleFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieCondomBelt = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieCondomBeltFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieCondomBra = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieCondomBraFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieCondomChikubi = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieCondomChikubiFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieCondomHead = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieCondomHeadFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieCondomFloor = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieCondomFloorFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieCondomLeg = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieCondomLegFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieCondomPantsu = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieCondomPantsuFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieCondomButt = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieCondomButtFile(), bitmap, this);
};

Game_Actor.prototype.drawTachieCap = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieCapFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieHood = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieHoodFile(), bitmap, this);
};

Game_Actor.prototype.drawTachieBack = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieBackEFile(), bitmap, this);
	saba.drawTachieFile(this.tachieBackDFile(), bitmap, this);
	saba.drawTachieFile(this.tachieBackCFile(), bitmap, this);
	saba.drawTachieFile(this.tachieBackBFile(), bitmap, this);
	saba.drawTachieFile(this.tachieBackAFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieFront = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieFrontIFile(), bitmap, this);
	saba.drawTachieFile(this.tachieFrontHFile(), bitmap, this);
	saba.drawTachieFile(this.tachieFrontGFile(), bitmap, this);
	saba.drawTachieFile(this.tachieFrontFFile(), bitmap, this);
	saba.drawTachieFile(this.tachieFrontEFile(), bitmap, this);
	//saba.drawTachieFile(this.tachieSemenFrontEFile(), bitmap, this);
	saba.drawTachieFile(this.tachieFrontDFile(), bitmap, this);
	saba.drawTachieFile(this.tachieSemenFrontDFile(), bitmap, this);
	saba.drawTachieFile(this.tachieFrontCFile(), bitmap, this);
	saba.drawTachieFile(this.tachieSemenFrontCFile(), bitmap, this);
	saba.drawTachieFile(this.tachieFrontBFile(), bitmap, this);
	saba.drawTachieFile(this.tachieSemenFrontBFile(), bitmap, this);
	saba.drawTachieFile(this.tachieFrontAFile(), bitmap, this);
	saba.drawTachieFile(this.tachieSemenFrontAFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieBoobs = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieBoobsFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieLeftBoob = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieLeftBoobFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieRightBoob = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieRightBoobFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieBoobsErection = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieBoobsErectionFile(), bitmap, this);
};
Game_Actor.prototype.drawTachiePubic = function(saba, bitmap) {
	saba.drawTachieFile(this.tachiePubicFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieButt = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieButtFile(), bitmap, this);
};

Game_Actor.prototype.drawTachieCock = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieCockFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieCockBoobs = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieCockBoobsFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieCockMouth = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieCockMouthFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieCockFeet = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieCockFeetFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieCockPussy = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieCockPussyFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieCockAnal = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieCockAnalFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieCockRightArm = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieCockRightArmFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieCockLeftArm = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieCockLeftArmFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieHoppe = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieHoppeFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieSweat = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieSweatFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieHair = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieHairFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieEyes = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieEyesFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieEyebrows = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieEyebrowsFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieMouth = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieMouthFile(), bitmap, this);
};

Game_Actor.prototype.drawTachieSpankMarkLeftButt = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieSpankMarkLeftButtFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieSpankMarkRightButt = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieSpankMarkRightButtFile(), bitmap, this);
};

Game_Actor.prototype.drawTachieSemenWet = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieSemenWetFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieWetPanties = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieWetPantiesFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieWetPussyToy = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieWetPussyToyFile(), bitmap, this);
};

Game_Actor.prototype.drawTachieSemenCrotch = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieSemenCrotchFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieSemenCrotchPanties = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieSemenCrotchPantiesFile(), bitmap, this);
};

Game_Actor.prototype.drawTachieSemenRightArm = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieSemenRightArmFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieSemenLeftArm = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieSemenLeftArmFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieSemenRightLeg = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieSemenRightLegFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieSemenLeftLeg = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieSemenLeftLegFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieSemenBoobs = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieSemenBoobsFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieSemenRightBoob = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieSemenRightBoobFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieSemenLeftBoob = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieSemenLeftBoobFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieSemenBelly = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieSemenBellyFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieSemenBack = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieSemenBackFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieSemenDesk = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieSemenDeskFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieSemenFloor = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieSemenFloorFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieSemenButt = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieSemenButtFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieSemenButtAreas = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieSemenButtTopLeftFile(), bitmap, this);
	saba.drawTachieFile(this.tachieSemenButtBottomLeftFile(), bitmap, this);
	saba.drawTachieFile(this.tachieSemenButtTopRightFile(), bitmap, this);
	saba.drawTachieFile(this.tachieSemenButtBottomRightFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieSemenButtLeft = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieSemenButtLeftFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieSemenButtRight = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieSemenButtRightFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieSemenAnal = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieSemenAnalFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieSemenAnalPanties = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieSemenAnalPantiesFile(), bitmap, this);
};

Game_Actor.prototype.drawTachieSemenFace = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieSemenFaceFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieSemenMouth = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieSemenMouthFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieSemenCockMouth = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieSemenCockMouthFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieSemenCockBoobs = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieSemenCockBoobsFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieSemenCockLeftArm = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieSemenCockLeftArmFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieSemenCockRightArm = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieSemenCockRightArmFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieSemenCockPussy = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieSemenCockPussyFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieSemenCockAnal = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieSemenCockAnalFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieSemenCockFeet = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieSemenCockFeetFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieSemenCockNormal = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieSemenCockNormalFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieSemenHoleLeft = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieSemenHoleLeftFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieSemenHoleRight = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieSemenHoleRightFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieSemenToiletSeat = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieSemenToiletSeatFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieWetToiletSeat = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieWetToiletSeatFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieGlorySemenLeftWall = function(saba, bitmap) {
	for(let i = 0; i < this._liquidGloryCumOnLeftWall.length; ++i)
		saba.drawTachieFile(this.tachieSemenGloryLeftWallFile(i), bitmap, this);
};
Game_Actor.prototype.drawTachieGlorySemenRightWall = function(saba, bitmap) {
	for(let i = 0; i < this._liquidGloryCumOnRightWall.length; ++i)
		saba.drawTachieFile(this.tachieSemenGloryRightWallFile(i), bitmap, this);
};
Game_Actor.prototype.drawTachieGlorySemenLeftHole = function(saba, bitmap) {
	for(let i = 0; i < this._liquidGloryCumOnLeftHole.length; ++i)
		saba.drawTachieFile(this.tachieSemenGloryLeftHoleFile(i), bitmap, this);
};
Game_Actor.prototype.drawTachieGlorySemenRightHole = function(saba, bitmap) {
	for(let i = 0; i < this._liquidGloryCumOnRightHole.length; ++i)
		saba.drawTachieFile(this.tachieSemenGloryRightHoleFile(i), bitmap, this);
};
Game_Actor.prototype.drawTachieGlorySemenLeftToilet = function(saba, bitmap) {
	for(let i = 0; i < this._liquidGloryCumOnLeftToilet.length; ++i)
		saba.drawTachieFile(this.tachieSemenGloryLeftToiletFile(i), bitmap, this);
};
Game_Actor.prototype.drawTachieGlorySemenRightToilet = function(saba, bitmap) {
	for(let i = 0; i < this._liquidGloryCumOnRightToilet.length; ++i)
		saba.drawTachieFile(this.tachieSemenGloryRightToiletFile(i), bitmap, this);
};

Game_Actor.prototype.drawTachieDroolMouth = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieDroolMouthFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieDroolFingers = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieDroolFingersFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieDroolNipples = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieDroolNipplesFile(), bitmap, this);
};

Game_Actor.prototype.drawTachieStrayFace = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieStrayFaceFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieStrayBoobs = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieStrayBoobsFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieStrayRightBoob = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieStrayRightBoobFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieStrayLeftBoob = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieStrayLeftBoobFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieStrayGroin = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieStrayGroinFile(), bitmap, this);
};
Game_Actor.prototype.drawTachieStrayButt = function(saba, bitmap) {
	saba.drawTachieFile(this.tachieStrayButtFile(), bitmap, this);
};

Game_Actor.prototype.drawTachieFace = function(saba, bitmap, tachieFace) {
	if(tachieFace == 0) {
		tachieFace = this.tachieFace;
	}
	if(tachieFace == 0) {
		return;
	}
	let file = this.tachieBaseId + 'face_' + tachieFace;
	saba.drawTachieFile(file, bitmap, this);
};

/**
 * Get face index for save file.
 * @param {number} mapId
 * @param {typeof $gameSwitches} switches
 * @return {number}
 */
Game_Actor.prototype.saveFileFaceIndex = function (mapId, switches) {
    if (!this.isKarryn) {
        return this._faceIndex;
    }

    let faceId = 1;

    const isPrologueEnded = switches.value(SWITCH_PROLOGUE_ENDED);
    const isPostCaptainIntermission = switches.value(SWITCH_POST_CAPTAIN_INTERMISSION_ID);

    const generalReactionScore = this.getReactionScore();

    const generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
    const generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;

    if (mapId === MAP_ID_MODE_SELECT || mapId === MAP_ID_DESCENSION) {
        faceId = 0;
    } else if (!isPrologueEnded) {
        faceId = 2;
    } else {
        if (mapId === MAP_ID_VISITOR_CENTER) {
            faceId = 2;
        } else if (
            (mapId === MAP_ID_RECEPTION && Prison.prisonLevelOneIsAnarchy()) ||
            (mapId === MAP_ID_OFFICE_FLOODED && Prison.prisonLevelTwoIsAnarchy()) ||
            (mapId === MAP_ID_COMMON_AREA_NORTH_EAST && Prison.prisonLevelThreeIsAnarchy()) ||
            (mapId === MAP_ID_LVL4_STAIRS_TO_LVL5 && Prison.prisonLevelFourIsAnarchy()) ||
            (mapId === MAP_ID_LVL5_PRISON && Prison.prisonLevelFiveIsAnarchy()) ||
            (isPostCaptainIntermission && mapId != MAP_ID_KARRYN_OFFICE)
        ) {
            faceId = 13;
        } else if (
            mapId === MAP_ID_BAR_STORAGE ||
            mapId === MAP_ID_BATHROOM_BROKEN ||
            mapId === MAP_ID_BATHROOM_FIXED ||
            mapId === MAP_ID_LVL3_DEFEAT_SOLITARY_CELL ||
            mapId === MAP_ID_LVL4_ABANDONED_AREA
        ) {
            if (generallvl3 || generallvl2) {
                faceId = 9;
            } else {
                faceId = 10;
            }
        } else if (mapId === MAP_ID_BAR || mapId === MAP_ID_STRIP_CLUB) {
            if (generallvl3) {
                faceId = 14;
            } else if (generallvl2) {
                faceId = 12;
            } else {
                faceId = 8;
            }
        } else if (Prison.isNightMode()) {
            if (generallvl3) {
                faceId = 14;
            } else {
                faceId = 9;
            }
        } else {
            let fatigueLevel = this.getFatigueLevel();
            let fatigueLvl1 = fatigueLevel === 2;
            let fatigueLvl2 = fatigueLevel === 3;
            let fatigueLvl3 = fatigueLevel >= 4;

            if (fatigueLvl3) {
                faceId = 10;
            } else if (fatigueLvl2) {
                faceId = 6;
            } else if (fatigueLvl1) {
                faceId = 5;
            }
        }
    }

    return faceId;
};

Game_Actor.prototype.saveFileFaceName = function() {
	let faceName = this.faceName();
	let isNaked = !this.isWearingGlovesAndHat();
	if(DLC_HAIR) {
		switch(ConfigManager.KarrynHairColor) {
			case HAIR_COLOR_BLOND_ID:
				faceName += '_blond';
			break;
			case HAIR_COLOR_BLACK_ID:
				faceName += '_black';
			break;
		}
	}
	if(isNaked) {
		faceName += '_naked';
	}
	return faceName;
};

///////
// Off Balance

Game_Actor.prototype.removeStateEffectOffBalance = function() {
	if(this.isInStandbyPose() || this.isInUnarmedPose()) {
		this.resetTachieFrontA();
	}
};



//////////
// Orgasm
///////////

/////////////
// Check For Orgasm
////////////////

Game_Actor.prototype.checkForOrgasm = function() {
	let canOrgasm = false;
	if(this.reachedOrgasmPoint() && !this.orgasmLocked() && DEBUG_MODE) {
		canOrgasm = true;
		if(this.isStateAffected(STATE_KARRYN_RESIST_ORGASM_ID)) {
			canOrgasm = false;
			if(this.pleasure > Math.round(this.orgasmPoint() * this.willpowerResistOrgasmEffect())) 
				canOrgasm = true;
		}
		if(this._isCurrentlyUsingSkewer) return false;
	}
	if(canOrgasm) this.orgasm();
};

Game_Actor.prototype.orgasm = function() {
	if(!this._orgasmCallQueuedUp) {
		this._orgasmCallQueuedUp = true;
		//this.addToActorSpecificOrgasmRecord();
		this.removeState(STATE_HORNY_ID);
		this.resetOnaniFrustration();
		this.resetOnaniInBattleDesireToBase();
		this._hornyTimeLimit = -1;
		this.setOrgasmTachieChange();
		let isDisabled = this.isStateAffected(STATE_DISABLED_ID);
		if(isDisabled) this.removeState(STATE_DISABLED_ID);
		this.useOrgasmSkill();
		if(isDisabled) this.addState(STATE_DISABLED_ID);
		//this.emoteMasterManager();
	}
	BattleManager.removeImmortalStateFromEveryone();
};

Game_Actor.prototype.postOrgasmPleasure = function() { 
	this.setPleasure(0);
};


Game_Actor.prototype.postOrgasmToys = function(orgasmCount) { 
	let chance = orgasmCount - 1;
	if(this.hasPassive(PASSIVE_TOYS_ORGASM_TWO_ID))
		chance = 0;
	
	/*
	if(this.isWearingClitToy() && Math.random() < (chance * 0.25)) {
		this.removeClitToy();
	}
	*/
	if(this.isWearingPussyToy() && Math.random() < (chance * 0.2)) {
		this.removePussyToy();
		if($gameParty.isInGloryBattle) {
			this.addState(STATE_GLORY_PENIS_DILDO_ID);
		}
	}
	if(this.isWearingAnalToy() && Math.random() < (chance * 0.2)) {
		this.removeAnalToy();
		if($gameParty.isInGloryBattle) {
			this.addState(STATE_GLORY_ANAL_BEADS_ID);
		}
		
	}
	
	if($gameParty.isInGloryBattle) {
		if(!this.isWearingPussyToy()) {
			if(this.tachieLeftArm.includes('toyP'))
				this.toiletBattle_resetLeftArmToNormal();
			if(this.tachieRightArm.includes('toyP'))
				this.toiletBattle_resetRightArmToNormal();
		}
		if(!this.isWearingAnalToy()) {
			if(this.tachieLeftArm.includes('toyA'))
				this.toiletBattle_resetLeftArmToNormal();
			if(this.tachieRightArm.includes('toyA'))
				this.toiletBattle_resetRightArmToNormal();
		}
	}
};

Game_Actor.prototype.justOrgasmed = function() {
	return this.isStateAffected(STATE_JUST_ORGASMED_ID);
};
Game_Actor.prototype.addJustOrgasmed = function() {
	this.addState(STATE_JUST_ORGASMED_ID);
};
Game_Actor.prototype.getJustOrgasmedStateTurns = function() {
	return this.stateTurns(STATE_JUST_ORGASMED_ID);
};
Game_Actor.prototype.setJustOrgasmedStateTurns = function(value) {
	if($gameParty._showTopRightTimeNumberFlag) {
		if(this.isInWaitressServingPose())
			value *= 1.5;
		else if(this.isInReceptionistPose())
			value *= 1.5;
		value = Math.round(value);
	}
	this.setStateTurns(STATE_JUST_ORGASMED_ID, value);
};
Game_Actor.prototype.increaseJustOrgasmedStateTurns = function(value) {
	if(value < 0) {
		if(this.getJustOrgasmedStateTurns() <= -1 * value)
			this.removeState(STATE_JUST_ORGASMED_ID);
		else
			this.setStateTurns(STATE_JUST_ORGASMED_ID, this.getJustOrgasmedStateTurns() + value);
	}
	else 
		this.setStateTurns(STATE_JUST_ORGASMED_ID, this.getJustOrgasmedStateTurns() + value);
};

Game_Actor.prototype.checkJustOrgasmStateAtTurnEnd = function() {
	if(this.justOrgasmed() && $gameTroop.isAllDead()) {
		this.increaseJustOrgasmedStateTurns(1);
	}
};


//////////
// Stench
////////////

Game_Actor.prototype.stenchTolerance = function() { 
	var value = this.stench;

	return value;
};

/////////
// Clothing
//////////

Game_Actor.prototype.setupClothingStatus = function(startingDurability, maxStages, clothingType) { 
	this._clothingBaseDurability = startingDurability;
	this._clothingMaxStage = maxStages;
	this._clothingType = clothingType;
	this.restoreClothingDurability();
};

//For now 
Game_Actor.prototype.changeToWardenClothing = function() { 
	this.setupClothingStatus(CLOTHES_WARDEN_START, CLOTHES_WARDEN_MAXSTAGES, CLOTHING_ID_WARDEN);
	this.setHatType(HAT_TYPE_WARDEN_ID);
};

//Now unused, replaced by setWardenMapPose_Naked
Game_Actor.prototype.changeToNakedClothing_unused = function() { 
	this.setupClothingStatus(0, 1, CLOTHING_ID_NAKED);
};
Game_Actor.prototype.changeToSecretaryClothing = function() { 
	this.setupClothingStatus(0, 1, CLOTHING_ID_SECRETARY);
};
Game_Actor.prototype.changeToWaitressClothing = function() { 
	this.setupClothingStatus(CLOTHES_WAITRESS_START, CLOTHES_WAITRESS_MAXSTAGES, CLOTHING_ID_WAITRESS);
};
Game_Actor.prototype.changeToReceptionistClothing = function() { 
	this.setupClothingStatus(CLOTHES_RECEPTIONIST_START, CLOTHES_RECEPTIONIST_MAXSTAGES, CLOTHING_ID_RECEPTIONIST);
};
Game_Actor.prototype.changeToStripperClothing = function() { 
	this.setupClothingStatus(CLOTHES_STRIPPER_START, CLOTHES_STRIPPER_MAXSTAGES, CLOTHING_ID_STRIPPER);
};
Game_Actor.prototype.changeToWeddingClothing = function() { 
	this.setupClothingStatus(CLOTHES_WEDDING_START, CLOTHES_WEDDING_MAXSTAGES, CLOTHING_ID_WEDDING);
	this.setHatType(HAT_TYPE_WEDDING_ID);
};
Game_Actor.prototype.changeToTrainerClothing = function() { 
	this.setupClothingStatus(CLOTHES_TRAINER_START, CLOTHES_TRAINER_MAXSTAGES, CLOTHING_ID_TRAINER);
};

Game_Actor.prototype.getClothingMaxDurability = function(dontUseWardenTemporaryLost) { 
	if(this.isWearingWardenClothing() && !dontUseWardenTemporaryLost) 
		return Math.max(0, this._clothingBaseDurability + this.edictsBonusClothingMaxDurability() - this._clothingWardenTemporaryLostDurability);
	else
		return this._clothingBaseDurability + this.edictsBonusClothingMaxDurability();
};

Game_Actor.prototype.restoreWardenClothingLostTemporaryDurability = function() { 
	this._clothingWardenTemporaryLostDurability = 0;
};
Game_Actor.prototype.decreaseWardenClothingLostTemporaryDurability = function(value) { 
	this._clothingWardenTemporaryLostDurability += value;
};

Game_Actor.prototype.restoreClothingDurability = function() { 
	this._clothingDurability = this.getClothingMaxDurability(false);
	this._clothingStage = CLOTHES_STARTING_STAGE;
	while(this._clothingDurability <= this.minimumClothingDurabilityForCurrentStage() && this._clothingStage < this._clothingMaxStage)
		this._clothingStage++;  
	this.refreshNightModeSettings();
		
	this._hasNoClothesOn = false;
	//$gameSwitches.setValue(SWITCH_IS_NAKED_NO_CLOTHES_ID, false);
};


Game_Actor.prototype.changeClothingToStage = function(stage) { 
	let newStage = Math.min(this._clothingMaxStage, Math.max(1, stage));
	this._clothingStage = Math.max(1, newStage - 1);
	this._clothingDurability = this.minimumClothingDurabilityForCurrentStage();
	this._clothingStage = newStage;

};

Game_Actor.prototype.minimumClothingDurabilityForStage = function(stage) { 
	let maxDura = this.getClothingMaxDurability(true);
	let perStage = Math.round(maxDura / this._clothingMaxStage);
	let minimum = maxDura - (perStage * stage);
	return minimum;
};
Game_Actor.prototype.minimumClothingDurabilityForCurrentStage = function() { 
	let maxDura = this.getClothingMaxDurability(true);
	let perStage = Math.round(maxDura / this._clothingMaxStage);
	let minimum = maxDura - (perStage * this.clothingStage);
	return this.minimumClothingDurabilityForStage(this.clothingStage);
};

Game_Actor.prototype.damageClothing = function(damage, selfDamage) { 
	if(damage <= 0 || this.isClothingMaxDamaged() || !DEBUG_MODE) return -1;
	
	let minimum = this.minimumClothingDurabilityForCurrentStage();
	let outcome = this.clothingDurability - damage;
	let excessiveDamage = 0;
	
	if(outcome <= minimum) {
		if(selfDamage && this._clothingStage + 1 === this._clothingMaxStage) {
			outcome += 1;
		}
		else {
			outcome = minimum;
			excessiveDamage = damage - (this.clothingDurability - minimum);		
			this._clothingStage++;
		}
	}
	
	this._clothingDurability = Math.max(outcome, 0);
	
	if(this.isClothingMaxDamaged() && this.isWearingWardenClothing()) 
		this.addToClothesStrippedRecord();
	
	if(!selfDamage && this.isWearingWardenClothing() && this.hasPassive(PASSIVE_CLOTHES_STRIPPED_ONE_ID)) {
		let tempDamage = Math.max(0, damage);
		let maxTempDamageRatio = 0.05;
		let tempDamageMultipler = 0.033;
		
		if(this.hasPassive(PASSIVE_CLOTHES_STRIPPED_FOUR_ID)) {
			maxTempDamageRatio = 0.33;
			tempDamageMultipler = 0.5;
		}
		else if(this.hasPassive(PASSIVE_CLOTHES_STRIPPED_THREE_ID)) {
			maxTempDamageRatio = 0.2;
			tempDamageMultipler = 0.25;
		}
		else if(this.hasPassive(PASSIVE_CLOTHES_STRIPPED_TWO_ID)) {
			maxTempDamageRatio = 0.1;
			tempDamageMultipler = 0.08;
		}
		
		let maxTempDamage = this.getClothingMaxDurability(true) * maxTempDamageRatio;
		tempDamage = Math.min(tempDamage * tempDamageMultipler, maxTempDamage);
		
		this.decreaseWardenClothingLostTemporaryDurability(tempDamage);
	}
	
	return excessiveDamage;
};

//For event use
Game_Actor.prototype.removeClothing = function() { 
	this._clothingStage = this._clothingMaxStage; 
	this._clothingDurability = 0;
};

//For combat use by enemy
Game_Actor.prototype.stripOffClothing = function() { 
	if(this.isClothingMaxDamaged()) return;
	this.removeClothing(); 
	this.addToClothesStrippedRecord();
	
	if(this.isWearingWardenClothing() && this.hasPassive(PASSIVE_CLOTHES_STRIPPED_ONE_ID)) {
		let tempDamageMultipler = 0.03;
		
		if(this.hasPassive(PASSIVE_CLOTHES_STRIPPED_FOUR_ID)) {
			tempDamageMultipler = 0.2;
		}
		else if(this.hasPassive(PASSIVE_CLOTHES_STRIPPED_THREE_ID)) {
			tempDamageMultipler = 0.12;
		}
		else if(this.hasPassive(PASSIVE_CLOTHES_STRIPPED_TWO_ID)) {
			tempDamageMultipler = 0.05;
		}
		
		this.decreaseWardenClothingLostTemporaryDurability(this._clothingBaseDurability * tempDamageMultipler);
	}
};

Game_Actor.prototype.isWearingWardenClothing = function() { 
	return this._clothingType === CLOTHING_ID_WARDEN;
};
Game_Actor.prototype.isWearingSecretaryClothing = function() { 
	return this._clothingType === CLOTHING_ID_SECRETARY;
};
Game_Actor.prototype.isWearingWaitressClothing = function() { 
	return this._clothingType === CLOTHING_ID_WAITRESS;
};
Game_Actor.prototype.isWearingReceptionistClothing = function() { 
	return this._clothingType === CLOTHING_ID_RECEPTIONIST;
};
Game_Actor.prototype.isWearingStripperClothing = function() { 
	return this._clothingType === CLOTHING_ID_STRIPPER;
};
Game_Actor.prototype.isWearingWeddingClothing = function() { 
	return this._clothingType === CLOTHING_ID_WEDDING;
};


Game_Actor.prototype.isClothingMaxDamaged = function() { 
	return this.clothingStage === this._clothingMaxStage;
};
Game_Actor.prototype.isClothingAtMaxFixable = function() { 
	if(this.isWearingWardenClothing()) {
		let currentClothingStage = this.clothingStage;
		if(currentClothingStage === CLOTHES_STARTING_STAGE) return true;
		if(this._clothingWardenTemporaryLostDurability === 0) return false;
		let maxDura = this.getClothingMaxDurability(false);
		return maxDura < this.minimumClothingDurabilityForStage(currentClothingStage - 1);
	}
	else
		return this.clothingStage === CLOTHES_STARTING_STAGE;
};
Game_Actor.prototype.isClothingAtStage = function(stage) { 
	return this.clothingStage >= stage;
};

Game_Actor.prototype.isClothingAtStageSlightlyMoved = function() { 
	if(this.isWearingWardenClothing())
		return this.isClothingAtStage(CLOTHES_STAGE_WARDEN_SLIGHTLY_MOVED);
	else if(this.isWearingWaitressClothing())
		return this.isClothingAtStage(CLOTHES_STAGE_WAITRESS_SLIGHTLY_MOVED);
	else if(this.isWearingReceptionistClothing())
		return this.isClothingAtStage(CLOTHES_STAGE_RECEPTIONIST_SLIGHTLY_MOVED);
	else return true;
};
Game_Actor.prototype.isClothingAtStageSeeOneBoob = function() { 
	if(this.isWearingWardenClothing())
		return this.isClothingAtStage(CLOTHES_STAGE_WARDEN_SEE_ONE_BOOB);
	else if(this.isWearingWaitressClothing())
		return this.isClothingAtStage(CLOTHES_STAGE_WAITRESS_SEE_ONE_BOOB);
	else if(this.isWearingReceptionistClothing())
		return this.isClothingAtStage(CLOTHES_STAGE_RECEPTIONIST_SEE_ONE_BOOB);
	else return true;
};
Game_Actor.prototype.isClothingAtStageSeeBothBoobs = function() { 
	if(this.isWearingWardenClothing())
		return this.isClothingAtStage(CLOTHES_STAGE_WARDEN_SEE_BOTH_BOOBS);
	else if(this.isWearingWaitressClothing())
		return this.isClothingAtStage(CLOTHES_STAGE_WAITRESS_SEE_BOTH_BOOBS);
	else if(this.isWearingReceptionistClothing())
		return this.isClothingAtStage(CLOTHES_STAGE_RECEPTIONIST_SEE_ONE_BOOB);
	else return true;
};
Game_Actor.prototype.isClothingAtStageAccessClit_NoPanties = function() { 
	if(this.isWearingWardenClothing())
		return this.isClothingAtStage(CLOTHES_STAGE_WARDEN_SLIGHTLY_MOVED);
	else if(this.isWearingWaitressClothing())
		return this.isClothingAtStage(CLOTHES_STAGE_WAITRESS_SLIGHTLY_MOVED);
	else if(this.isWearingReceptionistClothing())
		return this.isClothingAtStage(CLOTHES_STAGE_RECEPTIONIST_SLIGHTLY_MOVED);
	else return true;
};
Game_Actor.prototype.isClothingAtStageAccessClit_WearingPanties = function() { 
	if(this.isWearingWardenClothing())
		return this.isClothingAtStage(CLOTHES_STAGE_WARDEN_SEE_PUSSY);
	else if(this.isWearingWaitressClothing())
		return this.isClothingAtStage(CLOTHES_STAGE_WAITRESS_SLIGHTLY_MOVED);
	else if(this.isWearingReceptionistClothing())
		return this.isClothingAtStage(CLOTHES_STAGE_RECEPTIONIST_SLIGHTLY_MOVED);
	else return true;
};
Game_Actor.prototype.isClothingAtStageSeePussy = function() { 
	if(this.isWearingWardenClothing())
		return this.isClothingAtStage(CLOTHES_STAGE_WARDEN_SEE_PUSSY);
	else if(this.isWearingWaitressClothing())
		return this.isClothingAtStage(CLOTHES_STAGE_WAITRESS_SEE_PUSSY);
	else if(this.isWearingReceptionistClothing())
		return this.isClothingAtStage(CLOTHES_STAGE_RECEPTIONIST_SEE_PUSSY);
	else return true;
};
Game_Actor.prototype.isClothingAtStageAccessPussy = function() {
	if(this.isWearingWardenClothing())
		return this.isClothingAtStage(CLOTHES_STAGE_WARDEN_ACCESS_PUSSY);
	else if(this.isWearingWaitressClothing())
		return this.isClothingAtStage(CLOTHES_STAGE_WAITRESS_ACCESS_PUSSY);
	else if(this.isWearingReceptionistClothing())
		return this.isClothingAtStage(CLOTHES_STAGE_RECEPTIONIST_ACCESS_PUSSY);
	else return true;	
};
Game_Actor.prototype.isClothingAtStageSeeButt = function() { 
	if(this.isWearingWardenClothing())
		return this.isClothingAtStage(CLOTHES_STAGE_WARDEN_SEE_BUTT);
	else if(this.isWearingWaitressClothing())
		return this.isClothingAtStage(CLOTHES_STAGE_WAITRESS_SEE_BUTT);
	else if(this.isWearingReceptionistClothing())
		return this.isClothingAtStage(CLOTHES_STAGE_RECEPTIONIST_SEE_BUTT);
	else return true;	
};
Game_Actor.prototype.isClothingAtStageAccessButt = function() { 
	if(this.isWearingWardenClothing())
		return this.isClothingAtStage(CLOTHES_STAGE_WARDEN_SLIGHTLY_MOVED);
	else if(this.isWearingWaitressClothing())
		return this.isClothingAtStage(CLOTHES_STAGE_WAITRESS_SEE_BUTT);
	else if(this.isWearingReceptionistClothing())
		return this.isClothingAtStage(CLOTHES_STAGE_RECEPTIONIST_SLIGHTLY_MOVED);
	else return true;
};
Game_Actor.prototype.isClothingAtStageAccessAnal = function() { 
	if(this.isWearingWardenClothing())
		return this.isClothingAtStage(CLOTHES_STAGE_WARDEN_ACCESS_ANAL);
	else if(this.isWearingWaitressClothing())
		return this.isClothingAtStage(CLOTHES_STAGE_WAITRESS_ACCESS_ANAL);
	else if(this.isWearingReceptionistClothing())
		return this.isClothingAtStage(CLOTHES_STAGE_RECEPTIONIST_ACCESS_ANAL);
	else return true;
};
Game_Actor.prototype.isClothingAtStageAccessFeet = function() {
	if(this.isWearingWardenClothing())
		return this.isClothingAtStage(4);
	else return true;	
};
Game_Actor.prototype.isClothingAtStageAccessHands = function() {
	if(this.isWearingWardenClothing())
		return this.isClothingAtStage(4);
	else return true;	
};
Game_Actor.prototype.isClothingAtStageAccessMouth = function() {
	if(this.isWearingWardenClothing())
		return this.isClothingAtStage(4);
	else return true;	
};

/////////
// Panties
///////////

Game_Actor.prototype.putOnPanties = function() { 
	this._wearingPanties = true;
	this._lostPanties = false;
};

//For non combat use, Ex: events, bath, etc
Game_Actor.prototype.takeOffPanties = function() { 
	this._wearingPanties = false;
};

//For combat use only
Game_Actor.prototype.stripOffPanties = function() { 
	if(!this.isWearingPanties()) return;
	this.takeOffPanties();
	this.addToPantiesStrippedRecord();
	this.passiveStripOffPanties_losePantiesEffect();
};
Game_Actor.prototype.isWearingPanties = function() { 
	if(!DEBUG_MODE) return true;
	else return this._wearingPanties;
};

Game_Actor.prototype.setPantiesType = function(value) { 
	this._pantiesType = value;
};
Game_Actor.prototype.getPantiesType = function() { 
	return this._pantiesType;
};

Game_Actor.prototype.showPantiesStateIcon = function() { 
	if(this.isNaked() || !DEBUG_MODE) return false;
	else if(this.isInWaitressSexPose() || $gameParty.isInGloryBattle || $gameParty.isInStripperBattle) return false;
	else if(this.isInCombatPose() || this.isInDownPose() || this.isInJobPose()) return true;
	else return false;
};

Game_Actor.prototype.isNaked = function() { 
	if($gameParty.isInTrainerBattle) 
		return this.trainerBattle_isNaked();
	
	if($gameParty.isInWaitressBattle && !this.isInWaitressSexPose()) 
		return false;
	
	if($gameParty.isInReceptionistBattle)
		return false;
	
	return this.isClothingMaxDamaged() && !this.isWearingPanties();
};

Game_Actor.prototype.isWearingGlovesAndHat = function() { 
	return this._wearingGlovesAndHat;
};
Game_Actor.prototype.takeOffGlovesAndHat = function() { 
	this._wearingGlovesAndHat = false;
	//$gameSwitches.setValue(SWITCH_IS_NAKED_NO_HATS_OR_GLOVES_ID, true);
	this.setHasTachieHat(false);
};
Game_Actor.prototype.putOnGlovesAndHat = function() { 
	this._wearingGlovesAndHat = true;
	//$gameSwitches.setValue(SWITCH_IS_NAKED_NO_HATS_OR_GLOVES_ID, false);
	this.setHasTachieHat(true);
};

//////////////
// Night Mode
// Exhibitionist Mode
//////////////

Game_Actor.prototype.getNightModeScoreRequirement = function() { 
	if(Karryn.hasEdict(EDICT_DIFFERENT_MINDSET_EFFECTS))
		return 6.5;
	else
		return 5;
};
Game_Actor.prototype.isWearingValidNightModeClothes = function() { 
	return this.isWearingWardenClothing() || this.modding_isWearingValidNightModeClothes();
};

Game_Actor.prototype.calculateNightModeScore = function() {
	let points = 0;
	
	if(this.isAroused())
		points += 1;
	
	if(Karryn.hasEdict(EDICT_DIFFERENT_MINDSET_EFFECTS)) {
		points += 2;
		
		if(this.isWet)
			points += 1.5;
				
		let semenCrotchId = '' + this.getTachieSemenCrotchId();
		semenCrotchId = semenCrotchId.slice(-1); // extracting last character
		if(semenCrotchId) {
			if(semenCrotchId.includes('3')) points += 5;
			else if(semenCrotchId.includes('2')) points += 4;
			else if(semenCrotchId.includes('1')) points += 0.5;
		}
	}
	else if(this.isWearingWardenClothing()) {
		if(this._clothingStage >= CLOTHES_STAGE_WARDEN_SEE_ONE_BOOB)
			points += 5;
			
		if(this._clothingStage >= CLOTHES_STAGE_WARDEN_SLIGHTLY_MOVED) {
			points += 1;
			if(!this.isWearingPanties()) {
				points += 1;
				
				if(this.isWet)
					points += 1;
				
				let semenCrotchId = '' + this.getTachieSemenCrotchId();
				if(semenCrotchId) {
					if(semenCrotchId.includes('3')) points += 5;
					else if(semenCrotchId.includes('2')) points += 4;
					else if(semenCrotchId.includes('1')) points += 1.5;
				}
			}
		}
		else {
			let semenCrotchId = '' + this.getTachieSemenCrotchId();
			if(semenCrotchId) {
				if(semenCrotchId.includes('3')) points += 3;
				else if(semenCrotchId.includes('2')) points += 1;
			}
		}
	}
	else if(this.modding_isWearingValidNightModeClothes()) {
		points += this.modding_calculateNightModeScore();
	}
	
	let semenFaceId = '' + this.getTachieSemenFaceId();
	semenFaceId = semenFaceId.slice(-1); // extracting last character
	if(semenFaceId) {
		if(semenFaceId.includes('3')) points += 5;
		else if(semenFaceId.includes('2')) points += 3;
		else if(semenFaceId.includes('1')) points += 1.5;
	}
	
	let semenButtId = '' + this.getTachieSemenButtId();
	if(semenButtId) {
		if(semenButtId.includes('3')) points += 4;
		else if(semenButtId.includes('2')) points += 2;
		else if(semenButtId.includes('1')) points += 0.5;
	}
	
	let semenBoobsId = '' + this.getTachieSemenBoobsId();
	semenBoobsId = semenBoobsId.slice(-1); // extracting last character
	if(semenBoobsId) {
		if(semenBoobsId.includes('3')) points += 5;
		else if(semenBoobsId.includes('2')) points += 3;
		else if(semenBoobsId.includes('1')) points += 1;
	}
	
	let semenLeftArmId = '' + this.getTachieSemenLeftArmId();
	semenLeftArmId = semenLeftArmId.slice(-1); // extracting last character
	if(semenLeftArmId) {
		if(semenLeftArmId.includes('3')) points += 2;
		else if(semenLeftArmId.includes('2')) points += 1;
	}
	
	let semenRightArmId = '' + this.getTachieSemenRightArmId();
	semenRightArmId = semenRightArmId.slice(-1); // extracting last character
	if(semenRightArmId) {
		if(semenRightArmId.includes('3')) points += 2;
		else if(semenRightArmId.includes('2')) points += 1;
	}
	
	let strayFaceId = '' + this.getTachieStrayFaceId(true);
	strayFaceId = strayFaceId.slice(-1); // extracting last character
	if(strayFaceId) {
		if(strayFaceId.includes('2')) points += 1.5;
		else if(strayFaceId.includes('1')) points += 0.5;
	}
	let strayBoobsId = '' + this.getTachieStrayBoobsId(true);
	strayBoobsId = strayBoobsId.slice(-1); // extracting last character
	if(strayBoobsId) {
		if(strayBoobsId.includes('2')) points += 2;
		else if(strayBoobsId.includes('1')) points += 1;
	}
	
	return points;
};

Game_Actor.prototype.refreshNightModeSettings = function() {
	let mapId = $gameMap._mapId;
	
	if(!this.isWearingValidNightModeClothes() || mapId === MAP_ID_MODE_SELECT || mapId === MAP_ID_DESCENSION) {
		return;
	}

	let points = this.calculateNightModeScore();

	if(points >= this.getNightModeScoreRequirement() || (Karryn.hasEdict(EDICT_DIFFERENT_MINDSET_EFFECTS) && this._todayTriggeredNightMode)) {
		$gameSwitches.setValue(SWITCH_NIGHT_MODE_ID, true);
		
		if(this.hasEdict(EDICT_OFFICE_PRISON_GUARDS)) {
			let reqGuardAggr = 20;
			if(this.hasEdict(EDICT_HIRE_CURRENT_INMATES)) reqGuardAggr -= 10;
			else if(this.hasEdict(EDICT_LAXER_HIRING_STANDARDS)) reqGuardAggr -= 5;
			
			if(Prison.guardAggression < reqGuardAggr && !this.hasEdict(EDICT_OFFICE_INMATE_GUARDS))
				$gameSwitches.setValue(SWITCH_NIGHT_MODE_EB_HALLWAY_ID, false);
			else 
				$gameSwitches.setValue(SWITCH_NIGHT_MODE_EB_HALLWAY_ID, true);
		}
		else {
			$gameSwitches.setValue(SWITCH_NIGHT_MODE_EB_HALLWAY_ID, false);
		}	
		
		if($gameVariables.value(VARIABLE_FIRST_EXHIB_PROGRESS_ID) === 0) 
			$gameVariables.setValue(VARIABLE_FIRST_EXHIB_PROGRESS_ID, 1);
		
		this._todayTriggeredNightMode = true;
		
		this.raidSight(false, true);
	}
	else if(this._todayTriggeredNightMode) {
		if(this.isClothingMaxDamaged()) {
			this._todayTriggeredNightMode = false;
			this.refreshNightModeSettings();
		}
		else {
			this.damageClothing(CLOTHES_WARDEN_START);
			this.refreshNightModeSettings();
		}
	}
	else {
		this.resetNightModeSettings();
	}
};
Game_Actor.prototype.resetNightModeSettings = function() { 
	$gameSwitches.setValue(SWITCH_NIGHT_MODE_ID, false);
	$gameSwitches.setValue(SWITCH_NIGHT_MODE_EB_HALLWAY_ID, false);
	this._todayTriggeredNightMode = false;
	this.stopSightNightModeRaid();
};

Game_Actor.prototype.stepsForTurn = function() {
    return 15;
};

Game_Actor.prototype.turnEndOnMap = function() {
    if($gameParty.steps() % this.stepsForTurn() === 0) {
        this.onTurnEnd();
        this.nightModeTurnEndOnMap();
    }
};

Game_Actor.prototype.nightModeTurnEndOnMap = function() {
	if(this.hasPassive(PASSIVE_NIGHT_BATTLE_COUNT_ONE_ID) && $gameParty.isNightMode()) {
		let previouslyIsWet = this.isWet;
		let previouslyIsWetStageTwo = this.isWetStageTwo;
		let previouslyIsAroused = this.isAroused();
	
		if(this.hasPassive(PASSIVE_NIGHT_BATTLE_COUNT_THREE_ID)) {
			if(this.currentPercentOfOrgasm(true) < 66) {
				let pleasurePercent = 2;
				if(this.isAroused()) pleasurePercent *= 1.3;
				this.gainPleasure(this.getValueOfOrgasmFromPercent(pleasurePercent), true);
			}
			
			if(!this.isWetStageThree) {
				let drip = 2;
				if(this.hasPassive(PASSIVE_PANTIES_STRIPPED_TWO_ID) && !this.isWearingPanties())
					drip += 1;
				if(this.isAroused()) drip *= 1.5;
				if(this.isWetStageTwo) drip *= 0.7;
				else if(this.isWet) drip *= 1.3;
				this.increaseLiquidPussyJuice(drip);
			}
		}
		else {
			if(this.currentPercentOfOrgasm(true) < 40) {
				let pleasurePercent = 0.7;
				if(this.isAroused()) pleasurePercent *= 0.7;
				this.gainPleasure(this.getValueOfOrgasmFromPercent(pleasurePercent), true);
			}
			
			if(this.hasPassive(PASSIVE_NIGHT_BATTLE_COUNT_TWO_ID) && this.isAroused() && !this.isWetStageTwo) {
				let drip = 2;
				if(this.hasPassive(PASSIVE_PANTIES_STRIPPED_TWO_ID) && !this.isWearingPanties())
					drip += 1;
				if(this.isWet) drip *= 0.7;
				this.increaseLiquidPussyJuice(drip);
			}
		}
	
		if((!previouslyIsWet && this.isWet) || (!previouslyIsWetStageTwo && this.isWetStageTwo) || (!previouslyIsAroused && this.isAroused())) {
			this.emoteMasterManager();
		}
	}
	
};



///////
// Accessories
////////

Game_Actor.prototype.isEquippingThisAccessory = function(id) {
	const equips = this.equips();
	if(this.isUsingThisTitle(TITLE_ID_FINAL_DESTINATION)) {
		if(equips[EQUIP_SLOT_ACCESSORY_START_ID]) {
			if(id == equips[EQUIP_SLOT_ACCESSORY_START_ID].id) return true;
		}
	}
	else {
		for(let i = EQUIP_SLOT_ACCESSORY_START_ID; i <= EQUIP_SLOT_ACCESSORY_END_ID; ++i) {
			if(equips[i]) {
				if(id == equips[i].id) return true;
			}
		}
	}
	return false;
};

Game_Actor.prototype.totalAccessoriesOwnedCount = function() {
	let accCount = 0;
	
	for(let i = ACCESSORY_ID_START_ONE; i <= ACCESSORY_ID_END_ONE; ++i) {
		if($gameParty.hasItem($dataArmors[i], true)) accCount++;
	}		
	
	for(let i = ACCESSORY_ID_START_TWO; i <= ACCESSORY_ID_END_TWO; ++i) {
		if($gameParty.hasItem($dataArmors[i], true)) accCount++;
	}
	
	return accCount;
};

Game_Actor.prototype.accessoryCharmReq = function(offset) {
	if(!offset) offset = 0;
	let count = 0;
	const equips = this.equips();
	if(equips[1]) count++;
	if(equips[2]) count++;
	if(equips[3]) count++;
	if(equips[4]) count++;
	if(equips[5]) count++;
	
	count -= offset;
	
	if(count === 0) return VAR_ACCESSORY_CHARM_REQ_1;
	else if(count === 1) return VAR_ACCESSORY_CHARM_REQ_2;
	else if(count === 2) return VAR_ACCESSORY_CHARM_REQ_3;
	else if(count === 3) return VAR_ACCESSORY_CHARM_REQ_4;
	else return VAR_ACCESSORY_CHARM_REQ_5;
};

Game_Actor.prototype.meetEquipParamRequirements = function(item, accessoryCharmOffset) {
	if(item.atypeId !== 1) return true;
	let requirements = item.equipRequirements;
	for (let i = 0; i < 9; ++i) {
		let param = 0;
		if (i === 8) {
			param = this.level;
		} else {
			param = Math.round((this.paramBase(i) + this.paramPlus(i)) * this.paramRate(i) + this.paramFlat(i));
		}
		if(i === PARAM_CHARM_ID) {
			if(requirements['atLeast'][i] + this.accessoryCharmReq(accessoryCharmOffset)  > param) {
				return false;
			}
		}
		if(requirements['atLeast'][i] > 0) {
			if(requirements['atLeast'][i] > param) return false;
		}
		if(requirements['atMost'][i] > 0) {
			if(requirements['atMost'][i] < param) return false;
		}
	}
	return true;
};

Game_Actor.prototype.meetAllEquipRequirements = function(item, accessoryCharmOffset) {
	if (!item.equipRequirements) {
		if (item.baseItemId) {
			item.equipRequirements = DataManager.getBaseItem(item).equipRequirements;
		} else {
			return true;
		}
	}
	if (!this.meetEquipParamRequirements(item, accessoryCharmOffset)) return false;
	if (!this.meetEquipClassRequirements(item)) return false;
	if (!this.meetEquipSkillRequirements(item)) return false;
	if (!this.meetEquipSwitchRequirements(item)) return false;
	if (!this.meetEquipUniqueRequirements(item)) return false;
	if (!this.meetEquipEvalRequirements(item)) return false;
	return true;
};

Game_Actor.prototype.setAccessoryBonus = function() {
	let rings = 0;
	let bracelets = 0;
	let necklaces = 0;
	let earrings = 0;
	let miscAccs = 0;
	const equips = this.equips();
    for(let i = 1; i <= 5; i++) {
		if(equips[i]) {
			let acc = $dataArmors[equips[i].id];
			if(acc.hasTag(ARMOR_TAG_RING)) rings++;
			else if(acc.hasTag(ARMOR_TAG_NECKLACE)) necklaces++;
			else if(acc.hasTag(ARMOR_TAG_EARRINGS)) earrings++;
			else if(acc.hasTag(ARMOR_TAG_BRACELET)) bracelets++;
			else if(acc.hasTag(ARMOR_TAG_MISC)) miscAccs++;
		}
	}
	
	let unique = 0;
	if(rings > 0) unique++;
	if(necklaces > 0) unique++;
	if(earrings > 0) unique++;
	if(bracelets > 0) unique++;
	unique += miscAccs;
	
	this._accessoryBonusLvl = unique;
};

//Set Bonus 2: 10%, 3: 15%, 4: 20%, 5:25%
Game_Actor.prototype.accessoryBonusAscSsc = function() {
	if(this._accessoryBonusLvl < 2) return 1;
	return 1 - this._accessoryBonusLvl * 0.05;
};
//Set Bonus 3: 10%, 4: 20%, 5:30%
Game_Actor.prototype.accessoryBonusEscWsc = function() {
	if(this._accessoryBonusLvl < 3) return 1;
	return 1.2 - this._accessoryBonusLvl * 0.1;
};

Game_Actor.prototype.accessoryBonusCharmGrowth = function() {
	if(this._accessoryBonusLvl < 2) return 0;
	return (this._accessoryBonusLvl - 1) * 0.07;
};

Remtairy.Karryn.Game_Actor_changeEquip = Game_Actor.prototype.changeEquip;
Game_Actor.prototype.changeEquip = function(slotId, item) {
	Remtairy.Karryn.Game_Actor_changeEquip.call(this, slotId, item);
	this.setAccessoryBonus();
	this.registerFirstTimeTitleEquip();
};

Remtairy.Karryn.Game_Actor_forceChangeEquip = Game_Actor.prototype.forceChangeEquip;
Game_Actor.prototype.forceChangeEquip = function(slotId, item) {
    Remtairy.Karryn.Game_Actor_forceChangeEquip.call(this, slotId, item);
	this.setAccessoryBonus();
};

Game_Actor.prototype.clearAccessorySlots = function() {
	const equips = this.equips();
	for(let i = EQUIP_SLOT_ACCESSORY_START_ID; i <= EQUIP_SLOT_ACCESSORY_END_ID; ++i) {
		if(equips[i]) {
			this._equips[i].setObject(null);
		}
	}
	this.setAccessoryBonus();
};

//Equip Sets
Game_Actor.prototype.setupEquipSets = function() {
    this._equipSetAccessories = [false, false, false, false, false, false, false];
	this._equipSetTitle = [false, TITLE_ID_EMPEROR_SECRETARY, TITLE_ID_EMPEROR_SECRETARY, TITLE_ID_EMPEROR_SECRETARY, TITLE_ID_EMPEROR_SECRETARY, TITLE_ID_EMPEROR_SECRETARY, TITLE_ID_EMPEROR_SECRETARY, TITLE_ID_EMPEROR_SECRETARY, TITLE_ID_EMPEROR_SECRETARY];
	
	$gameParty.gainItem($dataArmors[SAVE_EQUIP_SET_1_ID], 1, false);
	$gameParty.gainItem($dataArmors[SAVE_EQUIP_SET_2_ID], 1, false);
	$gameParty.gainItem($dataArmors[SAVE_EQUIP_SET_3_ID], 1, false);
	$gameParty.gainItem($dataArmors[SAVE_EQUIP_SET_4_ID], 1, false);
	$gameParty.gainItem($dataArmors[SAVE_EQUIP_SET_5_ID], 1, false);
	$gameParty.gainItem($dataArmors[SAVE_EQUIP_SET_6_ID], 1, false);
	$gameParty.gainItem($dataArmors[SAVE_EQUIP_SET_7_ID], 1, false);
	$gameParty.gainItem($dataArmors[SAVE_EQUIP_SET_8_ID], 1, false);
	
	$gameParty.gainItem($dataArmors[LOAD_EQUIP_SET_1_ID], 1, false);
	$gameParty.gainItem($dataArmors[LOAD_EQUIP_SET_2_ID], 1, false);
	$gameParty.gainItem($dataArmors[LOAD_EQUIP_SET_3_ID], 1, false);
	$gameParty.gainItem($dataArmors[LOAD_EQUIP_SET_4_ID], 1, false);
	$gameParty.gainItem($dataArmors[LOAD_EQUIP_SET_5_ID], 1, false);
	$gameParty.gainItem($dataArmors[LOAD_EQUIP_SET_6_ID], 1, false);
	$gameParty.gainItem($dataArmors[LOAD_EQUIP_SET_7_ID], 1, false);
	$gameParty.gainItem($dataArmors[LOAD_EQUIP_SET_8_ID], 1, false);
};

Game_Actor.prototype.loadEquipSet = function(itemId) {
	let setId = this.getEquipSetId(itemId);
	
	if(setId) {
		if($gameParty.hasItem($dataArmors[this._equipSetTitle[setId]]) && !$gameSwitches.value(SWITCH_TITLE_LOCK))
			this.changeEquip(EQUIP_SLOT_TITLE_ID, $dataArmors[this._equipSetTitle[setId]]);
		const equips = this.equips();
		for(let i = EQUIP_SLOT_ACCESSORY_START_ID; i <= EQUIP_SLOT_ACCESSORY_END_ID; ++i) {
			if(equips[i]) {
				this.changeEquip(i, null);
			}
		}
		if(this._equipSetAccessories[setId]) {
			for(let i = 0; i < this._equipSetAccessories[setId].length; ++i) {
				if(this._equipSetAccessories[setId][i]) {
					let itemId = this._equipSetAccessories[setId][i];
					if($gameParty.hasItem($dataArmors[itemId])) {
						if(this.meetAllEquipRequirements($dataArmors[itemId])) {
							this.changeEquip(EQUIP_SLOT_ACCESSORY_START_ID + i, $dataArmors[itemId]);
						}
					}
				}
			}
		}
	}
};


Game_Actor.prototype.saveEquipSet = function(itemId) {
	let setId = this.getEquipSetId(itemId);

	if(setId) {
		this._equipSetTitle[setId] = this.equips()[EQUIP_SLOT_TITLE_ID].id;
		this._equipSetAccessories[setId] = [];
		const equips = this.equips();
		for(let i = EQUIP_SLOT_ACCESSORY_START_ID; i <= EQUIP_SLOT_ACCESSORY_END_ID; ++i) {
			if(equips[i]) {
				this._equipSetAccessories[setId].push(equips[i].id);
			}
			else {
				this._equipSetAccessories[setId].push(false);
			}
		}
	}
};

Game_Actor.prototype.getEquipSetId = function(itemId) {
	let setId = false;
	
	switch (itemId) {
	case SAVE_EQUIP_SET_1_ID:
		setId = EQUIP_SET_1_ID;
		break;
	case SAVE_EQUIP_SET_2_ID:
		setId = EQUIP_SET_2_ID;
		break;
	case SAVE_EQUIP_SET_3_ID:
		setId = EQUIP_SET_3_ID;
		break;
	case SAVE_EQUIP_SET_4_ID:
		setId = EQUIP_SET_4_ID;
		break;
	case SAVE_EQUIP_SET_5_ID:
		setId = EQUIP_SET_5_ID;
		break;
	case SAVE_EQUIP_SET_6_ID:
		setId = EQUIP_SET_6_ID;
		break;
	case SAVE_EQUIP_SET_7_ID:
		setId = EQUIP_SET_7_ID;
		break;
	case SAVE_EQUIP_SET_8_ID:
		setId = EQUIP_SET_8_ID;
		break;
	
	case LOAD_EQUIP_SET_1_ID:
		setId = EQUIP_SET_1_ID;
		break;
	case LOAD_EQUIP_SET_2_ID:
		setId = EQUIP_SET_2_ID;
		break;
	case LOAD_EQUIP_SET_3_ID:
		setId = EQUIP_SET_3_ID;
		break;
	case LOAD_EQUIP_SET_4_ID:
		setId = EQUIP_SET_4_ID;
		break;
	case LOAD_EQUIP_SET_5_ID:
		setId = EQUIP_SET_5_ID;
		break;
	case LOAD_EQUIP_SET_6_ID:
		setId = EQUIP_SET_6_ID;
		break;
	case LOAD_EQUIP_SET_7_ID:
		setId = EQUIP_SET_7_ID;
		break;
	case LOAD_EQUIP_SET_8_ID:
		setId = EQUIP_SET_8_ID;
		break;
	
	}
	
	return setId;
};

///////////
// Virgin

Game_Actor.prototype.isVirgin = function() {
    return !this._firstPussySexDate && !this._firstPussySexWasToy;
};
Game_Actor.prototype.preBattleAddIsVirginState = function() {
    if(this.isVirgin()) this.addState(STATE_IS_VIRGIN_ID);
};
Game_Actor.prototype.virginityParamRate = function(paramId) {
    let rate = 1;
	if(paramId === PARAM_CHARM_ID && this.isVirgin()) {
		if(Karryn.hasEdict(EDICT_PUBLISH_VIRGIN_STATUS)) {
			rate = 1.15;
		}
		else {
			if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_THREE_ID))
				rate = 1;
			else if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_TOTAL_TWO_ID))
				rate = 1.05;
			else
				rate = 1.1
		}
	}
	return rate;
};

////////
// Cool

Game_Actor.prototype.isCoolAndCollected = function() {
	if(!this.isInCombatPose() && !this.isInWaitressServingPose() && !this.isInReceptionistPose())
		return false;
	
	if(this.isInWaitressServingPose() && this.isTipsy) return false;
	
	if(this.mouthDesire >= 50 || this.boobsDesire >= 50 || this.pussyDesire >= 50 || this.buttDesire >= 50 || this.cockDesire >= 50) return false;
	
	if(this.isHorny || this.isOnaniFrustrated() || this.justOrgasmed()) return false;
	
	return true;
};
Game_Actor.prototype.coolXParamRate = function(paramId) {
	let rate = 1;
	
	if(paramId === XPARAM_HIT_ID || paramId === XPARAM_EVA_ID || paramId === XPARAM_CRIT_ID || paramId === XPARAM_CRIT_EVA_ID) {
		if(this.isCoolAndCollected()) {
			rate += 0.075;
		}
	}
	
	return rate;
};

////////
// Expose Weakness

Game_Actor.prototype.hasWeaknessExposed = function() {
	return Karryn.hasEdict(EDICT_GIVE_IN_TO_NERD_BLACKMAIL) || this.isStateAffected(STATE_WEAKNESS_EXPOSED_ID);
};

Game_Actor.prototype.exposedWeaknessXParamRate = function(paramId) {
	if(!this.hasWeaknessExposed() || (paramId !== XPARAM_EVA_ID && paramId !== XPARAM_CRIT_EVA_ID)) 
		return 1;

	let exposedValue = 5;
	let exposedPower = 0.025;
	
	if(this.hasEdict(EDICT_PUBLISH_RESISTS)) exposedValue += 2;
	if(this.hasEdict(EDICT_PUBLISH_SENSITIVITIES)) exposedValue += 2;
	
	if(this.hasEdict(EDICT_PUBLISH_VIRGIN_STATUS)) exposedValue++;
	if(this.hasEdict(EDICT_PUBLISH_SEX_LEVELS)) exposedValue++;
	if(this.hasEdict(EDICT_PUBLISH_RECORDS_ONE)) exposedValue++;
	if(this.hasEdict(EDICT_PUBLISH_RECORDS_THREE)) exposedValue++;
	
	if(this.hasEdict(EDICT_INMATE_ASSISTANT_ACCOUNTANT)) exposedValue += 2;
	
	if(this.hasEdict(EDICT_THE_NERD_PROBLEM)) {
		exposedPower += 0.015;
		
		if(this.hasEdict(EDICT_THREATEN_THE_NERDS)) {
			exposedPower += 0.01;
		}
		else if(this.hasEdict(EDICT_PAY_NERD_BLACKMAIL)) {
			exposedValue -= 5;
			exposedPower -= 0.034;
		}
		else if(this.hasEdict(EDICT_GIVE_IN_TO_NERD_BLACKMAIL)) {
			exposedValue -= 2;
			exposedPower -= 0.02;
		}
		
		if(Karryn.hasEdict(EDICT_THE_ORC_PROBLEM)) {
			if(Karryn.hasEdict(EDICT_ACCESSIBILITY_FOR_ORCS) && Karryn.hasEdict(EDICT_PAY_NERD_BLACKMAIL)) {}
			else if(Karryn.hasEdict(EDICT_REJECT_THE_ORCS) && Karryn.hasEdict(EDICT_THREATEN_THE_NERDS)) {}
			else if(Karryn.hasEdict(EDICT_REACH_UNDERSTANDING_WITH_ORCS) && Karryn.hasEdict(EDICT_GIVE_IN_TO_NERD_BLACKMAIL)) {}
			else exposedPower += 0.015;
		}
	}
	
	if(Karryn.hasEdict(EDICT_BIG_BROTHER_SCENARIO)) {
		exposedPower *= 1.4;
		exposedPower += 0.02;
	}
	
	return 1 - ((exposedPower * exposedValue) * 0.2);
};


Game_Actor.prototype.exposedWeaknessElementRate = function(elementId, rate, bonus) {
	if(!this.hasWeaknessExposed() || elementId === ELEMENT_ALMIGHTY_ID) return 0;

	let exposedValue = 5;
	let exposedPower = 0.025;
	
	if(this.hasEdict(EDICT_PUBLISH_RESISTS)) exposedValue += 2;
	if(this.hasEdict(EDICT_PUBLISH_SENSITIVITIES)) exposedValue += 2;
	
	if(this.hasEdict(EDICT_PUBLISH_VIRGIN_STATUS)) exposedValue++;
	if(this.hasEdict(EDICT_PUBLISH_SEX_LEVELS)) exposedValue++;
	if(this.hasEdict(EDICT_PUBLISH_RECORDS_ONE)) exposedValue++;
	if(this.hasEdict(EDICT_PUBLISH_RECORDS_THREE)) exposedValue++;
	
	if(this.hasEdict(EDICT_INMATE_ASSISTANT_ACCOUNTANT)) exposedValue += 2;
	
	if(this.hasEdict(EDICT_THE_NERD_PROBLEM)) {
		exposedPower += 0.015;
		
		if(this.hasEdict(EDICT_THREATEN_THE_NERDS)) {
			exposedPower += 0.01;
		}
		else if(this.hasEdict(EDICT_PAY_NERD_BLACKMAIL)) {
			exposedValue -= 5;
			exposedPower -= 0.034;
		}
		else if(this.hasEdict(EDICT_GIVE_IN_TO_NERD_BLACKMAIL)) {
			exposedValue -= 2;
			exposedPower -= 0.02;
		}
		
		if(Karryn.hasEdict(EDICT_THE_ORC_PROBLEM)) {
			if(Karryn.hasEdict(EDICT_ACCESSIBILITY_FOR_ORCS) && Karryn.hasEdict(EDICT_PAY_NERD_BLACKMAIL)) {}
			else if(Karryn.hasEdict(EDICT_REJECT_THE_ORCS) && Karryn.hasEdict(EDICT_THREATEN_THE_NERDS)) {}
			else if(Karryn.hasEdict(EDICT_REACH_UNDERSTANDING_WITH_ORCS) && Karryn.hasEdict(EDICT_GIVE_IN_TO_NERD_BLACKMAIL)) {}
			else exposedPower += 0.015;
		}
	}
	
	if(Karryn.hasEdict(EDICT_BIG_BROTHER_SCENARIO)) {
		exposedPower *= 1.6;
		exposedPower += 0.03;
	}
	
	return exposedPower * exposedValue;
};

/////////
// Enemy Lizardman
Game_Actor.prototype.passiveLizardmanElementRate = function(elementId) {
	let lizBonus = 0;

	let lizardmanCount = $gameTroop.getCountOfLizardmanPresent();
	if(this.hasPassive(PASSIVE_SEXUAL_PARTNERS_LIZARDMAN_TWO_ID) && lizardmanCount > 1) {
		let rate = 0.015;
		lizBonus -= rate * lizardmanCount;
	}

	return lizBonus;
};

/////////
// Artisan Meal

Game_Actor.prototype.resetArtisanMeal = function() {
	this._artisanMeal = false;
};
Game_Actor.prototype.eatArtisanMeal = function(mealId) {
	this._artisanMeal = mealId;
	
	switch (mealId) {
	case ARTISAN_MEAL_SMART:
		this._playthroughRecordArtisanMealSMARTCount++;
		break;
	case ARTISAN_MEAL_COMFY:
		this._playthroughRecordArtisanMealCOMFYCount++;
		break;
	case ARTISAN_MEAL_HEART:
		this._playthroughRecordArtisanMealHEARTCount++;
		break;
	case ARTISAN_MEAL_SLUT:
		this._playthroughRecordArtisanMealSLUTCount++;
		break;
	case ARTISAN_MEAL_PUSSY:
		this._playthroughRecordArtisanMealPUSSYCount++;
		break;
	case ARTISAN_MEAL_HERO:
		this._playthroughRecordArtisanMealHEROCount++;
		break;
	case ARTISAN_MEAL_ARMED:
		this._playthroughRecordArtisanMealARMEDCount++;
		break;
	case ARTISAN_MEAL_WARDEN:
		this._playthroughRecordArtisanMealWARDENCount++;
		break;
	case ARTISAN_MEAL_BITCH:
		this._playthroughRecordArtisanMealBITCHCount++;
		break;
	case ARTISAN_MEAL_ANAL:
		this._playthroughRecordArtisanMealANALCount++;
		break;
	}
	
	this._playthroughRecordArtisanMealTotalCount++;
	
	$gameParty.remAch_artisanMeal();
};
Game_Actor.prototype.ateArtisanMeal = function(mealId) {
	return this._artisanMeal === mealId;
};
Game_Actor.prototype.hadAnArtisanMeal = function() {
	return this._artisanMeal != false;
};

////////
// Store Item

Game_Actor.prototype.resetStoreItem = function() {
	this._usingStoreItem = false;
};
Game_Actor.prototype.selectStoreItem = function(item) {
	this._usingStoreItem = item;
};
Game_Actor.prototype.isUsingStoreItem = function(item) {
	return this._usingStoreItem === item;
};
Game_Actor.prototype.isUsingAnyStoreItem = function() {
	return this._usingStoreItem != false;
};

////////
// Today Records

Game_Actor.prototype.resetTodayRecords = function(fullReset) {
	this._startOfInvasionBattle = false;
	this._todayTriggeredNightMode = false;
	
	this._todayTalkedAtAboutMouthPeople = 0;
	this._todayTalkedAtAboutBoobsPeople = 0;
	this._todayTalkedAtAboutPussyPeople = 0;
	this._todayTalkedAtAboutButtPeople = 0;
	this._todayTalkedAtAboutCockPeople = 0;
	
	this._todayEnemySawPeople = 0;
	this._todayEnemySawMouthPeople = 0;
	this._todayEnemySawBoobsPeople = 0;
	this._todayEnemySawPussyPeople = 0;
	this._todayEnemySawButtPeople = 0;
	
	this._todayKissedCount = 0;
	this._todayHandjobCount = 0;
	this._todayBlowjobCount = 0;
	this._todayTittyFuckCount = 0;
	this._todayPussyFuckedCount = 0;
	this._todayAnalFuckedCount = 0;
	this._todayBoobsPettedCount = 0;
	this._todayNipplesPettedCount = 0;
	this._todayButtPettedCount = 0;
	this._todayAnalPettedCount = 0;
	this._todayClitPettedCount = 0;
	this._todayPussyPettedCount = 0;
	this._todayButtSpankedCount = 0;
	this._todaySeeJerkOffCount = 0;
	this._todayCunnilingusCount = 0;
	this._todayRimjobCount = 0;
	this._todayFootjobCount = 0;
	this._todayCockPettedCount = 0;
	this._todayFingersSuckedCount = 0;
	
	this._todayKissedPeople = 0;
	this._todayHandjobPeople = 0;
	this._todayBlowjobPeople = 0;
	this._todayTittyFuckedPeople = 0;
	this._todayPussyFuckedPeople = 0;
	this._todayAnalFuckedPeople = 0;
	this._todayBukkakePeople = 0;
	this._todayFaceBukkakePeople = 0;
	this._todaySwallowPeople = 0;
	this._todayPussyCreampiePeople = 0;
	this._todayAnalCreampiePeople = 0;
	this._todayOrgasmPresencePeople = 0;
	this._todayCunnilingusPeople = 0;
	this._todayRimjobPeople = 0;
	this._todayFootjobPeople = 0;
	this._todayButtSpankedPeople = 0;
	this._todayCockPettedPeople = 0;
	this._todayCockStaredAtPeople = 0;
	this._todayFingersSuckedPeople = 0;
	this._todayBoobsPettedPeople = 0;
	this._todayNipplesPettedPeople = 0;
	this._todayClitPettedPeople = 0;
	this._todayPussyPettedPeople = 0;
	this._todayButtPettedPeople = 0;
	this._todayAnalPettedPeople = 0;
	
	this._todayBlowjobUsagePeople = 0;
	this._todayRimjobUsagePeople = 0;
	
	this._todayCockKickUsageCount = 0;
	this._todayCockStareUsageCount = 0;
	this._todayCockPetUsageCount = 0;
	
	this._todayKickCounterAfterLightKickCount = 0;
	
	this._todayTotalToysInsertedCount = 0;
	this._todayClitToyInsertedCount = 0;
	this._todayPussyToyInsertedCount = 0;
	this._todayAnalToyInsertedCount = 0;
	
	this._todayTotalToysUsedByEnemyCount = 0;
	this._todayClitToyUsedByEnemyCount = 0;
	this._todayPussyToyUsedByEnemyCount = 0;
	this._todayAnalToyUsedByEnemyCount = 0;
	
	this._todayDoublePenetrationCount = 0;
	this._todayTriplePenetrationCount = 0;
	this._todayBlowbangCount = 0;
	
	this._todayTauntCount = 0;
	this._todaySexPose_KickCounterCount = 0;
	this._todaySubduedEnemiesWithAttack = 0;
	this._todaySubduedEnemiesSexually = 0;
	this._todaySubduedTotal = 0;
	
	this._todaySwallowML = 0;
	this._todayPussyCreampieML = 0;
	this._todayAnalCreampieML = 0;
	this._todaySwallowMaxML = 0;
	this._todayPussyCreampieMaxML = 0;
	this._todayAnalCreampieMaxML = 0;
	this._todayFloorEjaculationCount = 0;
	this._todayFloorEjaculationML = 0;
	this._todayTotalEjaculationCount = 0;
	this._todayTotalEjaculationML = 0;
	
	this._todayPussyDripTenthML = 0;
	this._todayOrgasmCount = 0;
	this._todayOrgasmML = 0;
	
	this._todayPussySexUsagePartnersThug = 0;
	this._todayPussySexUsagePartnersPrisoner = 0;
	this._todayPussySexUsagePartnersGuard = 0;
	this._todayPussySexUsagePartnersGoblin = 0;
	this._todayPussySexUsagePartnersNerd = 0;
	this._todayPussySexUsagePartnersRogue = 0;
	this._todayPussySexUsagePartnersSlime = 0;
	this._todayPussySexUsagePartnersLizardman = 0;
	this._todayPussySexUsagePartnersOrc = 0;
	this._todayPussySexUsagePartnersHomeless = 0;
	this._todayPussySexUsagePartnersWerewolf = 0;
	this._todayPussySexUsagePartnersYeti = 0;
	this._todayPussySexUsagePartnersDifferentTotal = 0;
	
	this._todaySubduedMetalEnemiesCount = 0;
	this._todayMasturbatedBeforeRest = false;
	this._todayMasturbatedUsingHalberdCount = 0;
	this._todayServedGuardInBar = 0;
	this._todayServedGuardInStripClub = 0;
	this._todayServedGuardInGuardBattle = 0;
	this._todayServedGuardInToiletBattle = 0;
	this._todayServedGuardInGuardDefeat = 0;
	this._todayDrunkAlcoholInBar = 0;
	this._todayToiletBattleSexualPartners = 0;
	this._todayLevelTwoDefeatSexualPartners = 0;
	this._todayStripperBattleCondomWornCount = 0;
	
	if(this._todayGymTrainerShortsPulledCount && !fullReset)
		this._yesterdayGymTrainerShortsPulledCount = this._todayGymTrainerShortsPulledCount;
	else
		this._yesterdayGymTrainerShortsPulledCount = 0;
	this._todayGymTrainerShortsPulledCount = 0;
	
	if(this._todayGymTrainerBlueBalledCount && !fullReset)
		this._yesterdayGymTrainerBlueBalledCount = this._todayGymTrainerBlueBalledCount;
	else
		this._yesterdayGymTrainerBlueBalledCount = 0;
	this._todayGymTrainerBlueBalledCount = 0;
	
	if(this._todayGymTrainerSexDuringWorkCount && !fullReset)
		this._yesterdayGymTrainerSexDuringWorkCount = this._todayGymTrainerSexDuringWorkCount;
	else
		this._yesterdayGymTrainerSexDuringWorkCount = 0;
	this._todayGymTrainerSexDuringWorkCount = 0;
	
	
	$gameVariables.setValue(VARIABLE_DEFEATED_SPRITES_ID, 0);
	$gameVariables.setValue(VARIABLE_STRIP_CLUB_STAGE_CONDOMS_ID, 0);
	$gameVariables.setValue(VARIABLE_STRIP_CLUB_TOTAL_CONDOMS_ID, 0);
};

// Yesterday Defeat
Game_Actor.prototype.wasDefeatedYesterday = function() {
	return $gameParty._lastDefeatedDate + 1 >= Prison.date;
};

// Today Defeated
// For first defeated common event
Game_Actor.prototype.wasDefeatedToday = function() {
	return $gameSwitches.value(SWITCH_TODAY_WAITRESS_DEFEAT_ID) || $gameSwitches.value(SWITCH_TODAY_RECEPTIONIST_DEFEAT_ID) || $gameSwitches.value(SWITCH_TODAY_GLORYHOLE_DEFEAT_ID) || $gameSwitches.value(SWITCH_TODAY_STRIPPER_DEFEAT_ID);
};

/////////
// Metal Exp Rate

Game_Actor.prototype.metalExpRateBonus = function() {
	let bonus = 0;
		
	if(this._todaySubduedMetalEnemiesCount > 0) {
		bonus = 25;
		
		let rate = 25;
		if(this.hasThisTitle(TITLE_ID_METAL_SEX_ONE)) {
			bonus += 25;
			rate += 25;
		}
		
		bonus += this._todaySubduedMetalEnemiesCount * rate;
	}
	
	return bonus;
};

////////
// Character Image

Game_Actor.prototype.setKarrynWardenSprite = function() {
	let clothingStage = this._clothingStage;
	let turnSteppingOffArray = {list: [{code:34, indent: null}, {code:0}], repeat: false, skippable: true, wait:true};
	//let turnDirectionFixOffArray = {list: [{code:36, indent: null}, {code:34, indent: null}, {code:16, indent: null}, {code:0}], repeat: false, skippable: true, wait:true};
	
	if(this.hasEdict(EDICT_DIFFERENT_MINDSET_EFFECTS)) {
		this.setCharacterImage('C_Karryn01', 2);
	}
	else if(this.isWearingWardenClothing()) {
		if(!this.isWearingGlovesAndHat())
			this.setCharacterImage('C_Karryn01', 2);
		else if(clothingStage === 5 || this._hasNoClothesOn)
			this.setCharacterImage('C_Karryn01', 1);
		else if(clothingStage === 4)
			this.setCharacterImage('C_Karryn01', 7);
		else if(clothingStage === 3)
			this.setCharacterImage('C_Karryn01', 6);
		else if(clothingStage === 2)
			this.setCharacterImage('C_Karryn01', 3);
		else
			this.setCharacterImage('C_Karryn01', 4);
	}
	else {
		this.setCharacterImage('C_Karryn01', 4);
	}
	
	$gamePlayer.refresh();
	//$gamePlayer.forceMoveRoute(turnSteppingOffArray);
	$gamePlayer.setStepAnime(false);
	$gamePlayer.setDirectionFix(false);
};
Game_Actor.prototype.setKarrynDefeatedSprite = function() {
	let clothingStage = this._clothingStage;
	let turnSteppingOnArray = {list: [{code:33, indent: null}, {code:0}], repeat: false, skippable: true, wait:true};
	
	if(this.isWearingWardenClothing()) {
		if(!this.isWearingGlovesAndHat())
			this.setCharacterImage('C_Karryn_Defeated01', 3);
		else if(clothingStage === 5 || clothingStage === 4 || clothingStage === 3 ||this._hasNoClothesOn)
			this.setCharacterImage('C_Karryn_Defeated01', 2);
		else {
			if(this.isAroused()) 
				this.setCharacterImage('C_Karryn_Defeated01', 1);
			else
				this.setCharacterImage('C_Karryn_Defeated01', 0);
		}
	}
	else {
		this.setCharacterImage('C_Karryn_Defeated01', 3);
	}
	
	$gamePlayer.refresh();
	//$gamePlayer.forceMoveRoute(turnSteppingOnArray);
};
Game_Actor.prototype.setKarrynSleepSprite = function() {
	let clothingStage = this._clothingStage;
	let turnLeftArray = {list: [{code:17, indent: null}, {code:33, indent: null}, {code:35, indent: null}, {code:0}], repeat: false, skippable: true, wait:true};
	let turnDownArray = {list: [{code:16, indent: null}, {code:33, indent: null}, {code:35, indent: null}, {code:0}], repeat: false, skippable: true, wait:true};
	let turnRightArray = {list: [{code:18, indent: null}, {code:33, indent: null}, {code:35, indent: null}, {code:0}], repeat: false, skippable: true, wait:true};
	let turnUpArray = {list: [{code:19, indent: null}, {code:33, indent: null}, {code:35, indent: null}, {code:0}], repeat: false, skippable: true, wait:true};
	
	if(this.isWearingWardenClothing()) {
		if(!this.isWearingGlovesAndHat()) {
			this.setCharacterImage('C_Extra1', 3);
			$gamePlayer.forceMoveRoute(turnDownArray);
		}
		else if(clothingStage === 5 || clothingStage === 4 || this._hasNoClothesOn) {
			this.setCharacterImage('C_Extra1', 2);
			$gamePlayer.forceMoveRoute(turnDownArray);
		}
		else if(clothingStage === 3) {
			this.setCharacterImage('C_Extra1', 3);
			$gamePlayer.forceMoveRoute(turnUpArray);
		}
		else if(clothingStage === 2) {
			this.setCharacterImage('C_Extra1', 3);
			$gamePlayer.forceMoveRoute(turnRightArray);
		}
		else {
			this.setCharacterImage('C_Extra1', 3);
			$gamePlayer.forceMoveRoute(turnLeftArray);
		}
	}
	else {
		this.setCharacterImage('C_Extra1', 3);
		$gamePlayer.forceMoveRoute(turnDownArray);
	}
	
	$gamePlayer.refresh();
};
Game_Actor.prototype.setKarrynReceptionistSprite = function() {
	this.setCharacterImage('C_Karryn01', 5);
	$gamePlayer.refresh();
};


Game_CharacterBase.prototype.characterName = function() {
    let hairColor = '';
	let addHairColor = false;
	if(DLC_HAIR) {
		switch(ConfigManager.KarrynHairColor) {
			case HAIR_COLOR_PURPLE_ID:
				hairColor = '';
			break;
			case HAIR_COLOR_BLOND_ID:
				hairColor = '_' + HAIR_COLOR_BLOND_NAME;
			break;
			case HAIR_COLOR_BLACK_ID:
				hairColor = '_' + HAIR_COLOR_BLACK_NAME;
			break;
		}
		
		switch(this._characterName) {
			case '$O_Wall4':
			case 'C_Karryn01':
			case 'C_Karryn02':
			case 'C_Extra1':
			case '$C_Karryn_Stripper1':
			case 'C_Karryn_Defeated01':
				addHairColor = true;
			break;
			case '$O_Wall4_blond':
			case 'C_Karryn01_blond':
			case 'C_Karryn02_blond':
			case 'C_Extra1_blond':
			case '$C_Karryn_Stripper1_blond':
			case 'C_Karryn_Defeated01_blond':
				if(ConfigManager.KarrynHairColor !== HAIR_COLOR_BLOND_ID) {
					switch(this._characterName) {
						case '$O_Wall4_blond':
							this._characterName = '$O_Wall4';
							break;
						case 'C_Karryn01_blond':
							this._characterName = 'C_Karryn01';
							break;
						case 'C_Karryn02_blond':
							this._characterName = 'C_Karryn02';
							break;
						case 'C_Extra1_blond':
							this._characterName = 'C_Extra1';
							break;
						case '$C_Karryn_Stripper1_blond':
							this._characterName = '$C_Karryn_Stripper1';
							break;
						case 'C_Karryn_Defeated01_blond':
							this._characterName = 'C_Karryn_Defeated01';
							break;
					}
					addHairColor = true;
				}	
			break;
			case '$O_Wall4_black':
			case 'C_Karryn01_black':
			case 'C_Karryn02_black':
			case 'C_Extra1_black':
			case '$C_Karryn_Stripper1_black':
			case 'C_Karryn_Defeated01_black':
				if(ConfigManager.KarrynHairColor !== HAIR_COLOR_BLACK_ID) {
					switch(this._characterName) {
						case '$O_Wall4_black':
							this._characterName = '$O_Wall4';
							break;
						case 'C_Karryn01_black':
							this._characterName = 'C_Karryn01';
							break;
						case 'C_Karryn02_black':
							this._characterName = 'C_Karryn02';
							break;
						case 'C_Extra1_black':
							this._characterName = 'C_Extra1';
							break;
						case '$C_Karryn_Stripper1_black':
							this._characterName = '$C_Karryn_Stripper1';
							break;
						case 'C_Karryn_Defeated01_black':
							this._characterName = 'C_Karryn_Defeated01';
							break;
					}
					addHairColor = true;
				}	
			break;
		}
	}
	
	if(addHairColor) {
		return this._characterName + hairColor;
	}
	else return this._characterName;
};
Game_Actor.prototype.characterName = function() {
    let hairColor = '';
	let addHairColor = false;
	if(DLC_HAIR) {
		switch(ConfigManager.KarrynHairColor) {
			case HAIR_COLOR_PURPLE_ID:
				hairColor = '';
			break;
			case HAIR_COLOR_BLOND_ID:
				hairColor = '_' + HAIR_COLOR_BLOND_NAME;
			break;
			case HAIR_COLOR_BLACK_ID:
				hairColor = '_' + HAIR_COLOR_BLACK_NAME;
			break;
		}
		
		switch(this._characterName) {
			case '$O_Wall4':
			case 'C_Karryn01':
			case 'C_Karryn02':
			case 'C_Extra1':
			case '$C_Karryn_Stripper1':
			case 'C_Karryn_Defeated01':
				addHairColor = true;
			break;
		}
	}
	
	if(addHairColor) return this._characterName + hairColor;
	else return this._characterName;
};

/////////
//////////
// Desire
/////////////
//////////

Game_Actor.prototype.setCockDesire = function(value, fromWillpowerSkill) { 
	if(fromWillpowerSkill && value < this.cockDesire) value = Math.max(value, this.getSuppressCockDesireLowerLimit());
	this._cockDesire = value.clamp(0, this.maxCockDesire); 
	this.addToMaxReachedCockDesireRecord();
};
Game_Actor.prototype.setMouthDesire = function(value, fromWillpowerSkill) { 
	if(fromWillpowerSkill && value < this.mouthDesire) value = Math.max(value, this.getSuppressMouthDesireLowerLimit());
	this._mouthDesire = value.clamp(0, this.maxMouthDesire); 
	this.addToMaxReachedMouthDesireRecord();
};
Game_Actor.prototype.setBoobsDesire = function(value, fromWillpowerSkill) {
	if(fromWillpowerSkill && value < this.boobsDesire) value = Math.max(value, this.getSuppressBoobsDesireLowerLimit());
	this._boobsDesire = value.clamp(0, this.maxBoobsDesire);
	this.addToMaxReachedBoobsDesireRecord();
};
Game_Actor.prototype.setPussyDesire = function(value, fromWillpowerSkill) {
	if(fromWillpowerSkill && value < this.pussyDesire) value = Math.max(value, this.getSuppressPussyDesireLowerLimit());	
	this._pussyDesire = value.clamp(0, this.maxPussyDesire); 
	this.addToMaxReachedPussyDesireRecord();
};
Game_Actor.prototype.setButtDesire = function(value, fromWillpowerSkill) {
	if(fromWillpowerSkill && value < this.buttDesire) value = Math.max(value, this.getSuppressButtDesireLowerLimit());
	this._buttDesire = value.clamp(0, this.maxButtDesire); 
	this.addToMaxReachedButtDesireRecord();
};


Game_Actor.prototype.gainMouthDesire = function(value, fromWillpowerSkill, fromDesireRegen) {
	let rawValue = value;
	let addedDesire = 0;
	let currentDesire = this.mouthDesire;
	let tempMulti = 0;
	let tempCap = 0;
	
	if(value > 0 && this.isUsingThisTitle(TITLE_ID_DESCENSION_D4_HARD) && this.isInCombatPose()) {
		rawValue = 0;	
	}
	else if(fromDesireRegen) {
		if(this.isEquippingThisAccessory(RING_DOUBLE_ID)) {
			if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) rawValue *= 0.67;
			else rawValue *= 0.34;
		}
		if(this.isEquippingThisAccessory(RING_PURITY_ID)) {
			if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) rawValue *= 0.6;
			else rawValue *= 0.8;
		}
		
		if(this.isUsingThisTitle(TITLE_ID_HOLY_EMPRESS)) rawValue *= 1.25;
		else if(this.isUsingThisTitle(TITLE_ID_DESCENSION_D4_HARD)) rawValue *= 3;
	}
	else if(rawValue > 0 && !fromWillpowerSkill) {
		rawValue *= this.gainMouthDesirePassiveMultipler();
		if(this.isEquippingThisAccessory(RING_DOUBLE_ID)) {
			if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) rawValue *= 0.67;
			else rawValue *= 0.34;
		}
		if(this.isEquippingThisAccessory(RING_PURITY_ID)) {
			if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) rawValue *= 0.6;
			else rawValue *= 0.8;
		}
		
		if(this.isUsingThisTitle(TITLE_ID_HOLY_EMPRESS)) rawValue *= 1.25;
		else if(this.isUsingThisTitle(TITLE_ID_DESCENSION_D4_HARD)) rawValue *= 3;
	}
	
	if(rawValue > 0) {
		tempCap = 50;
		tempMulti = 1;
		if(rawValue > 0 && currentDesire + addedDesire < tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) <= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = (tempCap - currentDesire - addedDesire) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 75;
		tempMulti = 2;
		if(rawValue > 0 && currentDesire + addedDesire < tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) <= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = (tempCap - currentDesire - addedDesire) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 100;
		tempMulti = 3;
		if(rawValue > 0 && currentDesire + addedDesire < tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) <= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = (tempCap - currentDesire - addedDesire) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 150;
		tempMulti = 5;
		if(rawValue > 0 && currentDesire + addedDesire < tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) <= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = (tempCap - currentDesire - addedDesire) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 200;
		tempMulti = 10;
		if(rawValue > 0 && currentDesire + addedDesire < tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) <= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = (tempCap - currentDesire - addedDesire) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
	}
	else if(rawValue < 0) {
		tempCap = 150;
		tempMulti = 10;
		if(rawValue < 0 && currentDesire + addedDesire > tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) >= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = -1 * (currentDesire + addedDesire - tempCap) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 100;
		tempMulti = 5;
		if(rawValue < 0 && currentDesire + addedDesire > tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) >= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = -1 * (currentDesire + addedDesire - tempCap) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 75;
		tempMulti = 3;
		if(rawValue < 0 && currentDesire + addedDesire > tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) >= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = -1 * (currentDesire + addedDesire - tempCap) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 50;
		tempMulti = 2;
		if(rawValue < 0 && currentDesire + addedDesire > tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) >= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = -1 * (currentDesire + addedDesire - tempCap) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 0;
		tempMulti = 1;
		if(rawValue < 0 && currentDesire + addedDesire > tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) >= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = -1 * (currentDesire + addedDesire - tempCap) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
	}
	
	this.setMouthDesire(Math.round(this.mouthDesire + addedDesire), fromWillpowerSkill); 
};
Game_Actor.prototype.gainBoobsDesire = function(value, fromWillpowerSkill, fromDesireRegen) {
	let rawValue = value;
	let addedDesire = 0;
	let currentDesire = this.boobsDesire;
	let tempMulti = 0;
	let tempCap = 0;
	
	if(value > 0 && this.isUsingThisTitle(TITLE_ID_DESCENSION_D4_HARD) && this.isInCombatPose()) {
		rawValue = 0;	
	}
	else if(fromDesireRegen) {
		if(this.isEquippingThisAccessory(RING_FINGERCLAW_ID)) {
			if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) rawValue *= 0.67;
			else rawValue *= 0.34;
		}
		if(this.isEquippingThisAccessory(RING_PURITY_ID)) {
			if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) rawValue *= 0.6;
			else rawValue *= 0.8;
		}
		
		if(this.isUsingThisTitle(TITLE_ID_HOLY_EMPRESS)) rawValue *= 1.25;
		else if(this.isUsingThisTitle(TITLE_ID_DESCENSION_D4_HARD)) rawValue *= 3;
	}
	else if(rawValue > 0 && !fromWillpowerSkill) {
		rawValue *= this.gainBoobsDesirePassiveMultipler();
		if(this.isEquippingThisAccessory(RING_FINGERCLAW_ID)) {
			if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) rawValue *= 0.67;
			else rawValue *= 0.34;
		}
		if(this.isEquippingThisAccessory(RING_PURITY_ID)) {
			if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) rawValue *= 0.6;
			else rawValue *= 0.8;
		}
		
		if(this.isUsingThisTitle(TITLE_ID_HOLY_EMPRESS)) rawValue *= 1.25;
		else if(this.isUsingThisTitle(TITLE_ID_DESCENSION_D4_HARD)) rawValue *= 3;
	}
	
	if(rawValue > 0) {
		tempCap = 50;
		tempMulti = 1;
		if(rawValue > 0 && currentDesire + addedDesire < tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) <= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = (tempCap - currentDesire - addedDesire) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 75;
		tempMulti = 2;
		if(rawValue > 0 && currentDesire + addedDesire < tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) <= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = (tempCap - currentDesire - addedDesire) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 100;
		tempMulti = 3;
		if(rawValue > 0 && currentDesire + addedDesire < tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) <= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = (tempCap - currentDesire - addedDesire) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 150;
		tempMulti = 5;
		if(rawValue > 0 && currentDesire + addedDesire < tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) <= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = (tempCap - currentDesire - addedDesire) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 200;
		tempMulti = 10;
		if(rawValue > 0 && currentDesire + addedDesire < tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) <= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = (tempCap - currentDesire - addedDesire) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
	}
	else if(rawValue < 0) {
		tempCap = 150;
		tempMulti = 10;
		if(rawValue < 0 && currentDesire + addedDesire > tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) >= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = -1 * (currentDesire + addedDesire - tempCap) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 100;
		tempMulti = 5;
		if(rawValue < 0 && currentDesire + addedDesire > tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) >= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = -1 * (currentDesire + addedDesire - tempCap) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 75;
		tempMulti = 3;
		if(rawValue < 0 && currentDesire + addedDesire > tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) >= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = -1 * (currentDesire + addedDesire - tempCap) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 50;
		tempMulti = 2;
		if(rawValue < 0 && currentDesire + addedDesire > tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) >= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = -1 * (currentDesire + addedDesire - tempCap) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 0;
		tempMulti = 1;
		if(rawValue < 0 && currentDesire + addedDesire > tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) >= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = -1 * (currentDesire + addedDesire - tempCap) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
	}
	
	this.setBoobsDesire(Math.round(this.boobsDesire + addedDesire), fromWillpowerSkill); 
};
Game_Actor.prototype.gainPussyDesire = function(value, fromWillpowerSkill, fromDesireRegen) {
	let rawValue = value;
	let addedDesire = 0;
	let currentDesire = this.pussyDesire;
	let tempMulti = 0;
	let tempCap = 0;
	
	if(value > 0 && this.isUsingThisTitle(TITLE_ID_DESCENSION_D4_HARD) && this.isInCombatPose()) {
		rawValue = 0;	
	}
	else if(fromDesireRegen) {
		if(this.isEquippingThisAccessory(RING_PEARL_ID)) {
			if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) rawValue *= 0.67;
			else rawValue *= 0.34;
		}
		if(this.isEquippingThisAccessory(RING_PURITY_ID)) {
			if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) rawValue *= 0.6;
			else rawValue *= 0.8;
		}
		
		if(this.isUsingThisTitle(TITLE_ID_HOLY_EMPRESS)) rawValue *= 1.25;
		else if(this.isUsingThisTitle(TITLE_ID_TECHNICALLY_VIRGIN_BRIDE)) rawValue *= 0.75;
		else if(this.isUsingThisTitle(TITLE_ID_DESCENSION_D4_HARD)) rawValue *= 3;
	}
	else if(rawValue > 0 && !fromWillpowerSkill) {
		rawValue *= this.gainPussyDesirePassiveMultipler();
		if(this.isEquippingThisAccessory(RING_PEARL_ID)) {
			if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) rawValue *= 0.67;
			else rawValue *= 0.34;
		}
		if(this.isEquippingThisAccessory(RING_PURITY_ID)) {
			if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) rawValue *= 0.6;
			else rawValue *= 0.8;
		}
		
		if(this.isUsingThisTitle(TITLE_ID_HOLY_EMPRESS)) rawValue *= 1.25;
		else if(this.isUsingThisTitle(TITLE_ID_TECHNICALLY_VIRGIN_BRIDE)) rawValue *= 0.75;
		else if(this.isUsingThisTitle(TITLE_ID_DESCENSION_D4_HARD)) rawValue *= 3;
	}
	
	if(rawValue > 0) {
		tempCap = 50;
		tempMulti = 1;
		if(rawValue > 0 && currentDesire + addedDesire < tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) <= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = (tempCap - currentDesire - addedDesire) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 75;
		tempMulti = 2;
		if(rawValue > 0 && currentDesire + addedDesire < tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) <= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = (tempCap - currentDesire - addedDesire) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 100;
		tempMulti = 3;
		if(rawValue > 0 && currentDesire + addedDesire < tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) <= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = (tempCap - currentDesire - addedDesire) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 150;
		tempMulti = 5;
		if(rawValue > 0 && currentDesire + addedDesire < tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) <= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = (tempCap - currentDesire - addedDesire) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 200;
		tempMulti = 10;
		if(rawValue > 0 && currentDesire + addedDesire < tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) <= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = (tempCap - currentDesire - addedDesire) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
	}
	else if(rawValue < 0) {
		tempCap = 150;
		tempMulti = 10;
		if(rawValue < 0 && currentDesire + addedDesire > tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) >= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = -1 * (currentDesire + addedDesire - tempCap) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 100;
		tempMulti = 5;
		if(rawValue < 0 && currentDesire + addedDesire > tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) >= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = -1 * (currentDesire + addedDesire - tempCap) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 75;
		tempMulti = 3;
		if(rawValue < 0 && currentDesire + addedDesire > tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) >= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = -1 * (currentDesire + addedDesire - tempCap) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 50;
		tempMulti = 2;
		if(rawValue < 0 && currentDesire + addedDesire > tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) >= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = -1 * (currentDesire + addedDesire - tempCap) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 0;
		tempMulti = 1;
		if(rawValue < 0 && currentDesire + addedDesire > tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) >= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = -1 * (currentDesire + addedDesire - tempCap) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
	}
	
	this.setPussyDesire(Math.round(this.pussyDesire + addedDesire), fromWillpowerSkill); 
};
Game_Actor.prototype.gainButtDesire = function(value, fromWillpowerSkill, fromDesireRegen) {
	let rawValue = value;
	let addedDesire = 0;
	let currentDesire = this.buttDesire;
	let tempMulti = 0;
	let tempCap = 0;
	
	if(value > 0 && this.isUsingThisTitle(TITLE_ID_DESCENSION_D4_HARD) && this.isInCombatPose()) {
		rawValue = 0;	
	}
	else if(fromDesireRegen) {
		if(this.isEquippingThisAccessory(RING_CHAINHAND_ID)) {
			if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) rawValue *= 0.67;
			else rawValue *= 0.34;
		}
		if(this.isEquippingThisAccessory(RING_PURITY_ID)) {
			if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) rawValue *= 0.6;
			else rawValue *= 0.8;
		}
		
		if(this.isUsingThisTitle(TITLE_ID_HOLY_EMPRESS)) rawValue *= 1.25;
		else if(this.isUsingThisTitle(TITLE_ID_DESCENSION_D4_HARD)) rawValue *= 3;
	}
	else if(rawValue > 0 && !fromWillpowerSkill) {
		rawValue *= this.gainButtDesirePassiveMultipler();
		if(this.isEquippingThisAccessory(RING_CHAINHAND_ID)) {
			if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) rawValue *= 0.67;
			else rawValue *= 0.34;
		}
		if(this.isEquippingThisAccessory(RING_PURITY_ID)) {
			if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) rawValue *= 0.6;
			else rawValue *= 0.8;
		}
		
		if(this.isUsingThisTitle(TITLE_ID_HOLY_EMPRESS)) rawValue *= 1.25;
		else if(this.isUsingThisTitle(TITLE_ID_DESCENSION_D4_HARD)) rawValue *= 3;
	}
	
	if(rawValue > 0) {
		tempCap = 50;
		tempMulti = 1;
		if(rawValue > 0 && currentDesire + addedDesire < tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) <= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = (tempCap - currentDesire - addedDesire) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 75;
		tempMulti = 2;
		if(rawValue > 0 && currentDesire + addedDesire < tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) <= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = (tempCap - currentDesire - addedDesire) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 100;
		tempMulti = 3;
		if(rawValue > 0 && currentDesire + addedDesire < tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) <= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = (tempCap - currentDesire - addedDesire) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 150;
		tempMulti = 5;
		if(rawValue > 0 && currentDesire + addedDesire < tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) <= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = (tempCap - currentDesire - addedDesire) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 200;
		tempMulti = 10;
		if(rawValue > 0 && currentDesire + addedDesire < tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) <= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = (tempCap - currentDesire - addedDesire) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
	}
	else if(rawValue < 0) {
		tempCap = 150;
		tempMulti = 10;
		if(rawValue < 0 && currentDesire + addedDesire > tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) >= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = -1 * (currentDesire + addedDesire - tempCap) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 100;
		tempMulti = 5;
		if(rawValue < 0 && currentDesire + addedDesire > tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) >= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = -1 * (currentDesire + addedDesire - tempCap) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 75;
		tempMulti = 3;
		if(rawValue < 0 && currentDesire + addedDesire > tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) >= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = -1 * (currentDesire + addedDesire - tempCap) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 50;
		tempMulti = 2;
		if(rawValue < 0 && currentDesire + addedDesire > tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) >= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = -1 * (currentDesire + addedDesire - tempCap) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 0;
		tempMulti = 1;
		if(rawValue < 0 && currentDesire + addedDesire > tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) >= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = -1 * (currentDesire + addedDesire - tempCap) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
	}
	
	this.setButtDesire(Math.round(this.buttDesire + addedDesire), fromWillpowerSkill); 
};
Game_Actor.prototype.gainCockDesire = function(value, fromWillpowerSkill, fromDesireRegen) {
	let rawValue = value;
	let addedDesire = 0;
	let currentDesire = this.cockDesire;
	let tempMulti = 0;
	let tempCap = 0;
	
	if(value > 0 && this.isUsingThisTitle(TITLE_ID_DESCENSION_D4_HARD) && this.isInCombatPose()) {
		rawValue = 0;	
	}
	else if(fromDesireRegen) {
		if(this.isEquippingThisAccessory(RING_GEMSTONE_ID)) {
			if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) rawValue *= 0.67;
			else rawValue *= 0.34;
		}
		if(this.isEquippingThisAccessory(RING_PURITY_ID)) {
			if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) rawValue *= 0.6;
			else rawValue *= 0.8;
		}
		
		if(this.isUsingThisTitle(TITLE_ID_HOLY_EMPRESS)) rawValue *= 1.25;
		else if(this.isUsingThisTitle(TITLE_ID_SEX_SKILL_COCKSTARE_TWO)) rawValue *= 1.25;
		else if(this.isUsingThisTitle(TITLE_ID_DESCENSION_D4_HARD)) rawValue *= 3;
	}
	else if(rawValue > 0 && !fromWillpowerSkill) {
		rawValue *= this.gainCockDesirePassiveMultipler();
		if(this.isEquippingThisAccessory(RING_GEMSTONE_ID)) {
			if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) rawValue *= 0.67;
			else rawValue *= 0.34;
		}
		if(this.isEquippingThisAccessory(RING_PURITY_ID)) {
			if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) rawValue *= 0.6;
			else rawValue *= 0.8;
		}
		
		if(this.isUsingThisTitle(TITLE_ID_HOLY_EMPRESS)) rawValue *= 1.25;
		else if(this.isUsingThisTitle(TITLE_ID_SEX_SKILL_COCKSTARE_TWO)) rawValue *= 1.25;
		else if(this.isUsingThisTitle(TITLE_ID_DESCENSION_D4_HARD)) rawValue *= 3;
	}
	
	if(rawValue > 0) {
		tempCap = 50;
		tempMulti = 1;
		if(rawValue > 0 && currentDesire + addedDesire < tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) <= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = (tempCap - currentDesire - addedDesire) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 75;
		tempMulti = 2;
		if(rawValue > 0 && currentDesire + addedDesire < tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) <= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = (tempCap - currentDesire - addedDesire) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 100;
		tempMulti = 3;
		if(rawValue > 0 && currentDesire + addedDesire < tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) <= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = (tempCap - currentDesire - addedDesire) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 150;
		tempMulti = 5;
		if(rawValue > 0 && currentDesire + addedDesire < tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) <= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = (tempCap - currentDesire - addedDesire) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 200;
		tempMulti = 10;
		if(rawValue > 0 && currentDesire + addedDesire < tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) <= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = (tempCap - currentDesire - addedDesire) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
	}
	else if(rawValue < 0) {
		tempCap = 150;
		tempMulti = 10;
		if(rawValue < 0 && currentDesire + addedDesire > tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) >= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = -1 * (currentDesire + addedDesire - tempCap) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 100;
		tempMulti = 5;
		if(rawValue < 0 && currentDesire + addedDesire > tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) >= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = -1 * (currentDesire + addedDesire - tempCap) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 75;
		tempMulti = 3;
		if(rawValue < 0 && currentDesire + addedDesire > tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) >= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = -1 * (currentDesire + addedDesire - tempCap) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 50;
		tempMulti = 2;
		if(rawValue < 0 && currentDesire + addedDesire > tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) >= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = -1 * (currentDesire + addedDesire - tempCap) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
		
		tempCap = 0;
		tempMulti = 1;
		if(rawValue < 0 && currentDesire + addedDesire > tempCap) {
			if(Math.round(currentDesire + addedDesire + rawValue * (1/tempMulti)) >= tempCap) {
				addedDesire += Math.round(rawValue * (1/tempMulti));
				rawValue = 0;
			}
			else {
				let removedRawValue = -1 * (currentDesire + addedDesire - tempCap) * tempMulti;
				rawValue -= removedRawValue;
				addedDesire += tempCap - currentDesire - addedDesire;
			}
		}
	}
	
	this.setCockDesire(Math.round(this.cockDesire + addedDesire), fromWillpowerSkill); 
};

Game_Actor.prototype.gainRandomDesire = function(value, fromDesireRegen) { 
	this.gainRandomDesireWithCockWeight(value, 1, fromDesireRegen);
};
Game_Actor.prototype.gainRandomDesireWithCockWeight = function(value, weight, fromDesireRegen) { 
	switch(Math.randomInt(4 + weight)) {
		case 0:
			this.gainMouthDesire(value, false, fromDesireRegen); 
			break;
		case 1:
			this.gainBoobsDesire(value, false, fromDesireRegen);
			break;
		case 2:
			this.gainPussyDesire(value, false, fromDesireRegen);
			break;
		case 3:
			this.gainButtDesire(value, false, fromDesireRegen);
			break;
		default:
			this.gainCockDesire(value, false, fromDesireRegen);
	} 
};

Game_Actor.prototype.topDesireIsMouthDesire = function() { 
	return this.mouthDesire > this.boobsDesire && this.mouthDesire > this.pussyDesire && this.mouthDesire > this.buttDesire && this.mouthDesire > this.cockDesire;
};
Game_Actor.prototype.topDesireIsBoobsDesire = function() { 
	return this.boobsDesire > this.mouthDesire && this.boobsDesire > this.pussyDesire && this.boobsDesire > this.buttDesire && this.boobsDesire > this.cockDesire;
};
Game_Actor.prototype.topDesireIsPussyDesire = function() { 
	return this.pussyDesire > this.boobsDesire && this.pussyDesire > this.mouthDesire && this.pussyDesire > this.buttDesire && this.pussyDesire > this.cockDesire;
};
Game_Actor.prototype.topDesireIsButtDesire = function() { 
	return this.buttDesire > this.boobsDesire && this.buttDesire > this.pussyDesire && this.buttDesire > this.mouthDesire && this.buttDesire > this.cockDesire;
};
Game_Actor.prototype.topDesireIsCockDesire = function() { 
	return this.cockDesire > this.boobsDesire && this.cockDesire > this.pussyDesire && this.cockDesire > this.buttDesire && this.cockDesire > this.mouthDesire;
};


////////////////////////
////////////////////////
// Can Get XXX Conditions //
////////////////////////
////////////////////////

//////////////
// Sight

Game_Actor.prototype.canGetMouthSeen = function() { 
	return !this.isBodySlotUnavailable(MOUTH_ID);
};
Game_Actor.prototype.canGetBoobsSeen = function() { 
	return !this.isBodySlotUnavailable(BOOBS_ID);
};
Game_Actor.prototype.canGetNipplesSeen = function() { 
	return (this.isAroused() && this.isClothingAtStageSeeBothBoobs()) && !this.isBodySlotUnavailable(NIPPLES_ID);
};
Game_Actor.prototype.canGetClitSeen = function() { 
	return this.isClothingAtStageSeePussy() && !this.isWearingPanties() && !this.isBodySlotUnavailable(CLIT_ID);
};
Game_Actor.prototype.canGetPussySeen = function() { 
	return this.isClothingAtStageSeePussy() && !this.isWearingPanties() && !this.isBodySlotUnavailable(PUSSY_ID);
};
Game_Actor.prototype.canGetButtSeen = function() { 
	return !this.isBodySlotUnavailable(BUTT_ID);
};
Game_Actor.prototype.canGetAnalSeen = function() { 
	return this.isClothingAtStageAccessAnal() && !this.isWearingPanties() && !this.isBodySlotUnavailable(ANAL_ID);
};
Game_Actor.prototype.canGetBlowjobSeen = function() { 
	return this.isBodySlotPenis(MOUTH_ID);
};
Game_Actor.prototype.canGetTitjobSeen = function() { 
	return this.isBodySlotPenis(BOOBS_ID);
};
Game_Actor.prototype.canGetCunnilingusSeen = function() { 
	return this.isBodySlotTongue(PUSSY_ID);
};
Game_Actor.prototype.canGetPussySexSeen = function() { 
	return this.isBodySlotPenis(PUSSY_ID);
};
Game_Actor.prototype.canGetAnalSexSeen = function() { 
	return this.isBodySlotPenis(ANAL_ID);
};
Game_Actor.prototype.canGetAnalCreampieSeen = function() { 
	return this.getBodyLiquid(BodyLiquidId.ANAL_SEMEN).amount > 0  && this.canGetAnalSeen();
};
Game_Actor.prototype.canGetPussyCreampieSeen = function() { 
	return this.getBodyLiquid(BodyLiquidId.PUSSY_SEMEN).amount > 0  && this.canGetPussySeen();
};
Game_Actor.prototype.canGetBukkakedFaceSeen = function() { 
	return this.getBodyLiquid(BodyLiquidId.FACE_SEMEN).amount > 0 && this.canGetMouthSeen();
};
Game_Actor.prototype.canGetBukkakedBoobsSeen = function() { 
	return this._liquidBukkakeBoobs > 0 && this.canGetBoobsSeen();
};
Game_Actor.prototype.canGetBukkakedButtSeen = function() { 
	return this._liquidBukkakeButt > 0 && this.canGetButtSeen();
};
Game_Actor.prototype.canGetMouthSwallowSeen = function() { 
	return this.getBodyLiquid(BodyLiquidId.MOUTH_SEMEN).amount > 0 && this.canGetMouthSeen();
};


/////////////////////////////////////
// Petting

Game_Actor.prototype.canSuckFingers = function() { 
	let mouthReq = this.suckFingersMouthDesireRequirement();
	
	if(this.isInWaitressSexPose() && (this.tachieStraw !== REM_TACHIE_NULL && this.tachieStraw !== 'empty') && this._karrynMugContent > 0)
		return false;
	if(this.isInReceptionistPose()) return false;
	
	return this.mouthDesire >= mouthReq && this.isBodySlotAvailableForPetting(MOUTH_ID);
};
Game_Actor.prototype.canGetKissed = function(kissingLvl) { 
	let req = this.kissingMouthDesireRequirement(kissingLvl);
	
	if(this.isInWaitressSexPose() && (this.tachieStraw !== REM_TACHIE_NULL && this.tachieStraw !== 'empty') && this._karrynMugContent > 0)
		return false;
	
	return this.mouthDesire >= req && this.isBodySlotAvailableForPetting(MOUTH_ID);
};
Game_Actor.prototype.canGetBoobsPetted = function() { 
	let req = this.boobsPettingBoobsDesireRequirement();

	let pettable = this.isClothingAtStageSeeOneBoob();
	//exception
	if(this.isInReceptionistPose()) pettable = true;
	return this.boobsDesire >= req && this.isBodySlotAvailableForPetting(BOOBS_ID) && pettable;
};
Game_Actor.prototype.canGetNipplesPetted = function() { 
	let req = this.nipplesPettingBoobsDesireRequirement();

	let pettable = this.isClothingAtStageSeeBothBoobs();
	return this.boobsDesire >= req && this.isBodySlotAvailableForPetting(NIPPLES_ID) && pettable;
};
Game_Actor.prototype.canGetClitPetted = function() { 
	let req = this.clitPettingPussyDesireRequirement();

	let pettable = (this.isWearingPanties() && this.isClothingAtStageAccessClit_WearingPanties()) || (!this.isWearingPanties() && this.isClothingAtStageAccessClit_NoPanties());
	return this.pussyDesire >= req && this.isBodySlotAvailableForPetting(CLIT_ID) && pettable;
};
Game_Actor.prototype.canGetPussyPetted = function() { 
	let req = this.pussyPettingPussyDesireRequirement();

	let pettable = (this.isWearingPanties() && this.isClothingAtStageAccessPussy()) || (!this.isWearingPanties() && this.isClothingAtStageSeePussy());
	let isWet = this.isWet;
	return this.pussyDesire >= req && this.isBodySlotAvailableForPetting(PUSSY_ID) && pettable && isWet;
};
Game_Actor.prototype.canGetButtPetted = function() { 
	let req = this.buttPettingButtDesireRequirement();

	let pettable = this.isClothingAtStageAccessButt();
	return this.buttDesire >= req && this.isBodySlotAvailableForPetting(BUTT_ID) && pettable;
};
Game_Actor.prototype.canGetAnalPetted = function() { 
	let req = this.analPettingButtDesireRequirement();

	let pettable = (this.isWearingPanties() && this.isClothingAtStageAccessAnal()) || (!this.isWearingPanties() && this.isClothingAtStageSeeButt());
	return this.buttDesire >= req && this.isBodySlotAvailableForPetting(ANAL_ID) && pettable;
};

///////////
// Toys

Game_Actor.prototype.canGetClitToyInserted = function() { 
	if(!this._clitToyInsertablePose || this._wearingClitToy || this.isBodySlotTongue(CLIT_ID)) return false;
	let poseName = this.poseName;
	let req = this.clitToyPussyDesireRequirement();

	let pettable = (this.isWearingPanties() && this.isClothingAtStageSeePussy()) || (!this.isWearingPanties() && this.isClothingAtStageSlightlyMoved());
	return this.pussyDesire >= req && pettable;
};
Game_Actor.prototype.canGetPussyToyInserted = function() { 
	if(!this._pussyToyInsertablePose || this.isBodySlotPenis(PUSSY_ID) || this._wearingPussyToy || !this.isWet) return false;
	let req = this.pussyToyPussyDesireRequirement();
	
	let meetDesireReq = this.pussyDesire >= req;
	let insertable = (this.isWearingPanties() && this.isClothingAtStageAccessPussy()) || (!this.isWearingPanties() && this.isClothingAtStageSeePussy());
	return meetDesireReq && insertable;
};
Game_Actor.prototype.canGetAnalToyInserted = function() { 
	if(!this._analToyInsertablePose || this._wearingAnalToy || this.isBodySlotPenis(ANAL_ID)) return false;
	let req = this.analToyButtDesireRequirement();
	
	let meetDesireReq = this.buttDesire >= req;
	let insertable = (this.isWearingPanties() && this.isClothingAtStageAccessAnal()) || (!this.isWearingPanties() && this.isClothingAtStageSeeButt());
	return meetDesireReq && insertable;
};

/////////
// Etc

Game_Actor.prototype.canGetSpanked = function() { 
	let req = this.spankingButtDesireRequirement();

	return this.buttDesire >= req && this.isBodySlotAvailableForPetting(BUTT_ID) && this.isPoseSpankable();
};

Game_Actor.prototype.canGetCunnilingus = function() { 
	let req = this.cunnilingusPussyDesireRequirement();

	let pettable = this.isClothingAtStageAccessPussy();
	return this.pussyDesire >= req && this.isBodySlotAvailableForPenis(CLIT_ID) && pettable;
};

Game_Actor.prototype.canGiveRimjob = function(actorSkill) { 
	if(ConfigManager.disableRimjobs) return false;
	let req = this.rimjobMouthDesireRequirement();
	let insertable = actorSkill || this.isClothingAtStageAccessMouth();

	return this.mouthDesire >= req && this.isBodySlotFree(MOUTH_ID) && insertable;
};

/////////////////////////////////////
// Penis Insertion

Game_Actor.prototype.canGetMouthInserted = function(actorSkill) { 
	if(!this.isBodySlotAvailableForPenis(MOUTH_ID)) return false;
	let req = this.blowjobMouthDesireRequirement();
	let cockReq = this.blowjobCockDesireRequirement();
	let insertable = actorSkill || this.isClothingAtStageAccessMouth();
	
	if(this.isInWaitressSexPose() && (this.tachieStraw !== REM_TACHIE_NULL && this.tachieStraw !== 'empty') && this._karrynMugContent > 0)
		return false;
	
	let meetDesireReq = this.mouthDesire >= req && this.cockDesire >= cockReq;
	return meetDesireReq && insertable;
};
Game_Actor.prototype.canGetBoobsInserted = function(actorSkill) { 
	if(!this.isBodySlotAvailableForPenis(BOOBS_ID)) return false;
	let req = this.tittyFuckBoobsDesireRequirement();
	let cockReq = this.tittyFuckCockDesireRequirement();

	let meetDesireReq = this.boobsDesire >= req && this.cockDesire >= cockReq;
	let insertable = actorSkill || this.isClothingAtStageSeeBothBoobs();
	return meetDesireReq && insertable;
};
Game_Actor.prototype.canGetPussyInserted = function(actorSkill, kickCounter) { 
	if(!this.isBodySlotAvailableForPenis(PUSSY_ID)) return false;
	if(!kickCounter && !this.isWet) return false;
	if(kickCounter && !this.isWet) {
		if(!this.hasPassive(PASSIVE_KICK_COUNTER_SEX_COUNT_ONE_ID)) return false;
		
		const pussyJuice = this.getBodyLiquid(BodyLiquidId.PUSSY_JUICE).amount;
		if(pussyJuice + VAR_KARRYN_KICK_PUSSY_JUICE_INC < LIQUID_PUSSY_WET_STAGE_ONE) return false;
	}
	let req = this.pussySexPussyDesireRequirement();
	let cockReq = this.pussySexCockDesireRequirement();

	let meetDesireReq = this.pussyDesire >= req && this.cockDesire >= cockReq;
	let insertable = actorSkill || (this.isWearingPanties() && this.isClothingAtStageAccessPussy()) || (!this.isWearingPanties() && this.isClothingAtStageSeePussy()) || kickCounter && this.hasPassive(PASSIVE_KICK_COUNTER_SEX_COUNT_TWO_ID);
	return meetDesireReq && insertable;
};
Game_Actor.prototype.canGetPussyInserted_fromGoblinCL = function(actorSkill) { 
	if(!this.isWet) return false;
	let req = this.pussySexPussyDesireRequirement();
	let cockReq = this.pussySexCockDesireRequirement();

	let meetDesireReq = this.pussyDesire >= req && this.cockDesire >= cockReq;
	let insertable = actorSkill || (this.isWearingPanties() && this.isClothingAtStageAccessPussy()) || (!this.isWearingPanties() && this.isClothingAtStageSeePussy());
	return meetDesireReq && insertable;
};


Game_Actor.prototype.canGetAnalInserted = function(actorSkill) { 
	if(!this.isBodySlotAvailableForPenis(ANAL_ID)) return false;
	let req = this.analSexButtDesireRequirement();
	let cockReq = this.analSexCockDesireRequirement();

	let meetDesireReq = this.buttDesire >= req && this.cockDesire >= cockReq;
	let insertable = actorSkill || this.isClothingAtStageAccessAnal();
	return meetDesireReq && insertable;
};
Game_Actor.prototype.canGetRightHandInserted = function(actorSkill) {
	let req = this.handjobCockDesireRequirement();
	let insertable = actorSkill || this.isClothingAtStageAccessHands();

	return this.cockDesire >= req && this.isBodySlotAvailableForPenis(RIGHT_HAND_ID) && insertable;
};
Game_Actor.prototype.canGetLeftHandInserted = function(actorSkill) { 
	let req = this.handjobCockDesireRequirement();
	let insertable = actorSkill || this.isClothingAtStageAccessHands();

	return this.cockDesire >= req && this.isBodySlotAvailableForPenis(LEFT_HAND_ID) && insertable;
};

Game_Actor.prototype.canGetFeetInserted = function(actorSkill) { 
	if(ConfigManager.disableFootjobs) return false;
	let req = this.footjobCockDesireRequirement();
	let insertable = actorSkill || this.isClothingAtStageAccessFeet();

	return this.cockDesire >= req && this.isBodySlotAvailableForPenis(FEET_ID) && insertable;
};


Game_Actor.prototype.canPetWithRightHand = function() {
	let req = this.cockPettingCockDesireRequirement();
	return this.cockDesire >= req && this.isBodySlotAvailableForPenis(RIGHT_HAND_ID);
};
Game_Actor.prototype.canPetWithLeftHand = function() {
	let req = this.cockPettingCockDesireRequirement();
	return this.cockDesire >= req && this.isBodySlotAvailableForPenis(LEFT_HAND_ID);
};

////////
// Ejaculation

Game_Actor.prototype.canGetFaceBukkaked = function(target) { 
	if(this.isInDownOrgasmPose()) return false;
	if(this.isInWaitressServingPose() && !target.isValidTargetForWaitressBattle_waitressHarassment()) return false;
	
	let req = this.faceBukkakeCockDesireRequirement();
	if(!target)
		return this.cockDesire >= req;
	else
		return this.cockDesire >= req;
};
Game_Actor.prototype.canGetBodyBukkaked = function(target, area) { 
	if(area == CUM_BUKKAKE_BUTT) {
		if(this.isInDownFallDownPose()) return false;
	}
	
	if(this.isInWaitressServingPose() && !target.isValidTargetForWaitressBattle_waitressHarassment()) return false;
	
	
	let req = this.bodyBukkakeCockDesireRequirement();
	if(!target)
		return this.cockDesire >= req;
	else
		return this.cockDesire >= req;
};

Game_Actor.prototype.canBePussyCreampied = function(target) { 
	let req = this.pussyCreampieCockDesireRequirement();
	if(!target)
		return this.cockDesire >= req && this.isBodySlotInserted(PUSSY_ID);
	else
		return this.cockDesire >= req && target.isUsingBodySlotPenis(PUSSY_ID) && this.isBodySlotInserted(PUSSY_ID);
};

Game_Actor.prototype.canBeAnalCreampied = function(target) { 
	let req = this.analCreampieCockDesireRequirement();
	if(!target)
		return this.cockDesire >= req && this.isBodySlotInserted(ANAL_ID);
	else
		return this.cockDesire >= req && target.isUsingBodySlotPenis(ANAL_ID) && this.isBodySlotInserted(ANAL_ID);
};

Game_Actor.prototype.canMouthSwallow = function(target) { 
	let req = this.mouthSwallowCockDesireRequirement();
	if(!target)
		return this.cockDesire >= req && this.isBodySlotInserted(MOUTH_ID);
	else
		return this.cockDesire >= req && target.isUsingBodySlotPenis(MOUTH_ID) && this.isBodySlotInserted(MOUTH_ID);
};

Game_Actor.prototype.canDrinkSemenMug = function() { 
	let req = this.mouthSwallowCockDesireRequirement();

	return this.cockDesire >= req;
};

//None
//No Desire requirements
Game_Actor.prototype.canGetMouthInsertedNone = function() { 
	return this.isBodySlotAvailableForPenis(MOUTH_ID);
};
Game_Actor.prototype.canGetBoobsInsertedNone = function() { 
	return this.isBodySlotAvailableForPenis(BOOBS_ID);
};
Game_Actor.prototype.canGetPussyInsertedNone = function() { 
	return this.isBodySlotAvailableForPenis(PUSSY_ID);
};
Game_Actor.prototype.canGetAnalInsertedNone = function() { 
	return this.isBodySlotAvailableForPenis(ANAL_ID);
};
Game_Actor.prototype.canGetRightHandInsertedNone = function() {
	return this.isBodySlotAvailableForPenis(RIGHT_HAND_ID);
};
Game_Actor.prototype.canGetLeftHandInsertedNone = function() { 
	return this.isBodySlotAvailableForPenis(LEFT_HAND_ID);
};
Game_Actor.prototype.canGetOther1InsertedNone = function() { 
	return this.isBodySlotAvailableForPenis(OTHER_1_ID);
};
Game_Actor.prototype.canGetOther2InsertedNone = function() { 
	return this.isBodySlotAvailableForPenis(OTHER_2_ID);
};
Game_Actor.prototype.canGetOther3InsertedNone = function() { 
	return this.isBodySlotAvailableForPenis(OTHER_3_ID);
};
Game_Actor.prototype.canGetOther4InsertedNone = function() { 
	return this.isBodySlotAvailableForPenis(OTHER_4_ID);
};

Game_Actor.prototype.canGetOther1InsertedMug = function() { 
	return this.isBodySlotAvailableForPenis(OTHER_1_ID) && this.isBodySlotAvailableForPenis(MOUTH_ID);
};


// Boobs Size Variation
Game_Actor.prototype.boobsSizeIsHCup = function() {
	return ConfigManager.KarrynBoobsSize === 1;
};
Game_Actor.prototype.boobsSizeIsPCup = function() {
	return DLC_PCUP && ConfigManager.KarrynBoobsSize === 2;
};
Game_Actor.prototype.getTachieBoobCupExtensionId = function(tachiePartHasHCup, tachiePartHasPCup) {
	if(this.boobsSizeIsHCup() && tachiePartHasHCup) 
		return 'hcup_';
	else if(this.boobsSizeIsPCup() && tachiePartHasPCup) 
		return 'pcup_';
	else 
		return '';
};

Game_Actor.prototype.resetTachieHasHCup = function() { 
	this.setTachieBodyHasHCup(false);
	this.setTachieTieHasHCup(false);
	this.setTachieHipsHasHCup(false);
	this.setTachieBoobsHasHCup(false);
	this.setTachieLeftBoobHasHCup(false);
	this.setTachieRightBoobHasHCup(false);
	this.setTachieLeftArmHasHCup(false);
	this.setTachieRightArmHasHCup(false);
	this.setTachieHoppeHasHCup(false);
	this.setTachieWeaponHasHCup(false);
	this.setTachieHoodHasHCup(false);
	this.setTachieFrontAHasHCup(false);
	this.setTachieFrontBHasHCup(false);
	this.setTachieFrontCHasHCup(false);
	this.setTachieFrontDHasHCup(false);
	this.setTachieFrontEHasHCup(false);
	this.setTachieFrontHHasHCup(false);
	this.setTachieBackAHasHCup(false);
	this.setTachieBackBHasHCup(false);
	this.setTachieBackCHasHCup(false);
	this.setTachieVisitorAHasHCup(false);
	this.setTachieStrawHasHCup(false);
	this.setTachieMugHasHCup(false);
	this.setTachieCockHasHCup(false);
	this.setTachieCockMouthHasHCup(false);
	this.setTachieCockBoobsHasHCup(false);
	this.setTachieCockRightArmHasHCup(false);
	this.setTachieSemenFaceHasHCup(false);
	this.setTachieSemenBoobsHasHCup(false);
	this.setTachieSemenRightBoobHasHCup(false);
	this.setTachieSemenLeftBoobHasHCup(false);
	this.setTachieSemenRightArmHasHCup(false);
	this.setTachieSemenLeftArmHasHCup(false);
	this.setTachieSemenBackHasHCup(false);
	this.setTachieSemenBellyHasHCup(false);
	this.setTachieSemenButtBottomLeftHasHCup(false);
	this.setTachieSemenButtTopLeftHasHCup(false);
	this.setTachieSemenFrontAHasHCup(false);
	this.setTachieSemenFrontBHasHCup(false);
	this.setTachieSemenCrotchHasHCup(false);
	this.setTachieSemenCockBoobsHasHCup(false);
	this.setTachieSemenCockNormalHasHCup(false);
	this.setTachieSemenCockRightArmHasHCup(false);
	this.setTachieDroolNipplesHasHCup(false);
	this.setTachieStrayFaceHasHCup(false);
	this.setTachieStrayBoobsHasHCup(false);
	this.setTachieStrayLeftBoobHasHCup(false);
	this.setTachieStrayRightBoobHasHCup(false);
	this.setTachieCondomBraHasHCup(false);
	this.setTachieCondomBeltHasHCup(false);
	this.setTachieCondomChikubiHasHCup(false);
}; 

Game_Actor.prototype.resetTachieHasPCup = function() { 
	this.setTachieBodyHasPCup(false);
	this.setTachieTieHasPCup(false);
	this.setTachieHipsHasPCup(false);
	this.setTachieBoobsHasPCup(false);
	this.setTachieLeftBoobHasPCup(false);
	this.setTachieRightBoobHasPCup(false);
	this.setTachieLeftArmHasPCup(false);
	this.setTachieRightArmHasPCup(false);
	this.setTachieHoppeHasPCup(false);
	this.setTachieWeaponHasPCup(false);
	this.setTachieHoodHasPCup(false);
	this.setTachieFrontAHasPCup(false);
	this.setTachieFrontBHasPCup(false);
	this.setTachieFrontCHasPCup(false);
	this.setTachieFrontDHasPCup(false);
	this.setTachieFrontEHasPCup(false);
	this.setTachieFrontHHasPCup(false);
	this.setTachieBackAHasPCup(false);
	this.setTachieBackBHasPCup(false);
	this.setTachieBackCHasPCup(false);
	this.setTachieVisitorAHasPCup(false);
	this.setTachieMugHasPCup(false);
	this.setTachieStrawHasPCup(false);
	this.setTachieCockHasPCup(false);
	this.setTachieCockMouthHasPCup(false);
	this.setTachieCockBoobsHasPCup(false);
	this.setTachieCockRightArmHasPCup(false);
	this.setTachieSemenFaceHasPCup(false);
	this.setTachieSemenBoobsHasPCup(false);
	this.setTachieSemenRightBoobHasPCup(false);
	this.setTachieSemenLeftBoobHasPCup(false);
	this.setTachieSemenRightArmHasPCup(false);
	this.setTachieSemenLeftArmHasPCup(false);
	this.setTachieSemenBackHasPCup(false);
	this.setTachieSemenBellyHasPCup(false);
	this.setTachieSemenButtBottomLeftHasPCup(false);
	this.setTachieSemenButtTopLeftHasPCup(false);
	this.setTachieSemenFrontAHasPCup(false);
	this.setTachieSemenFrontBHasPCup(false);
	this.setTachieSemenCrotchHasPCup(false);
	this.setTachieSemenCockBoobsHasPCup(false);
	this.setTachieSemenCockNormalHasPCup(false);
	this.setTachieSemenCockRightArmHasPCup(false);
	this.setTachieDroolNipplesHasPCup(false);
	this.setTachieStrayFaceHasPCup(false);
	this.setTachieStrayBoobsHasPCup(false);
	this.setTachieStrayLeftBoobHasPCup(false);
	this.setTachieStrayRightBoobHasPCup(false);
	this.setTachieCondomBraHasPCup(false);
	this.setTachieCondomBeltHasPCup(false);
	this.setTachieCondomChikubiHasPCup(false);
};

Game_Actor.prototype.getTachieBodyHasHCup = function() { 
	let value = this._hasTachieBodyHasHCup;
	return value;
}; 
Game_Actor.prototype.setTachieBodyHasHCup = function(value) { 
	this._hasTachieBodyHasHCup = value;
}; 
Game_Actor.prototype.getTachieTieHasHCup = function() { 
	let value = this._hasTachieTieHasHCup;
	return value;
}; 
Game_Actor.prototype.setTachieTieHasHCup = function(value) { 
	this._hasTachieTieHasHCup = value;
}; 

Game_Actor.prototype.getTachieHipsHasHCup = function() { 
	let value = this._hasTachieHipsHasHCup;
	return value;
}; 
Game_Actor.prototype.setTachieHipsHasHCup = function(value) { 
	this._hasTachieHipsHasHCup = value;
}; 
Game_Actor.prototype.getTachieBoobsHasHCup = function() { 
	let value = this._hasTachieBoobsHasHCup;
	return value;
}; 
Game_Actor.prototype.setTachieBoobsHasHCup = function(value) { 
	this._hasTachieBoobsHasHCup = value;
}; 
Game_Actor.prototype.getTachieLeftBoobHasHCup = function() { 
	let value = this._hasTachieLeftBoobHasHCup;
	return value;
}; 
Game_Actor.prototype.setTachieLeftBoobHasHCup = function(value) { 
	this._hasTachieLeftBoobHasHCup = value;
}; 
Game_Actor.prototype.getTachieRightBoobHasHCup = function() { 
	let value = this._hasTachieRightBoobHasHCup;
	return value;
}; 
Game_Actor.prototype.setTachieRightBoobHasHCup = function(value) { 
	this._hasTachieRightBoobHasHCup = value;
}; 

Game_Actor.prototype.getTachieLeftArmHasHCup = function() { 
	let value = this._hasTachieLeftArmHasHCup;
	return value;
}; 
Game_Actor.prototype.setTachieLeftArmHasHCup = function(value) { 
	this._hasTachieLeftArmHasHCup = value;
}; 
Game_Actor.prototype.getTachieRightArmHasHCup = function() { 
	let value = this._hasTachieRightArmHasHCup;
	return value;
}; 
Game_Actor.prototype.setTachieRightArmHasHCup = function(value) { 
	this._hasTachieRightArmHasHCup = value;
}; 

Game_Actor.prototype.getTachieWeaponHasHCup = function() { 
	let value = this._hasTachieWeaponHasHCup;
	return value;
}; 
Game_Actor.prototype.setTachieWeaponHasHCup = function(value) { 
	this._hasTachieWeaponHasHCup = value;
}; 

Game_Actor.prototype.getTachieHoppeHasHCup = function() { 
	let value = this._hasTachieHoppeHasHCup;
	return value;
}; 
Game_Actor.prototype.setTachieHoppeHasHCup = function(value) { 
	this._hasTachieHoppeHasHCup = value;
}; 

Game_Actor.prototype.getTachieHoodHasHCup = function() { 
	let value = this._hasTachieHoodHasHCup;
	return value;
}; 
Game_Actor.prototype.setTachieHoodHasHCup = function(value) { 
	this._hasTachieHoodHasHCup = value;
}; 

Game_Actor.prototype.getTachieFrontAHasHCup = function() { 
	let value = this._hasTachieFrontAHasHCup;
	return value;
}; 
Game_Actor.prototype.setTachieFrontAHasHCup = function(value) { 
	this._hasTachieFrontAHasHCup = value;
}; 
Game_Actor.prototype.getTachieFrontBHasHCup = function() { 
	let value = this._hasTachieFrontBHasHCup;
	return value;
}; 
Game_Actor.prototype.setTachieFrontBHasHCup = function(value) { 
	this._hasTachieFrontBHasHCup = value;
};
Game_Actor.prototype.getTachieFrontCHasHCup = function() { 
	let value = this._hasTachieFrontCHasHCup;
	return value;
}; 
Game_Actor.prototype.setTachieFrontCHasHCup = function(value) { 
	this._hasTachieFrontCHasHCup = value;
}; 
Game_Actor.prototype.getTachieFrontDHasHCup = function() { 
	let value = this._hasTachieFrontDHasHCup;
	return value;
}; 
Game_Actor.prototype.setTachieFrontDHasHCup = function(value) { 
	this._hasTachieFrontDHasHCup = value;
}; 
Game_Actor.prototype.getTachieFrontEHasHCup = function() { 
	let value = this._hasTachieFrontEHasHCup;
	return value;
}; 
Game_Actor.prototype.setTachieFrontEHasHCup = function(value) { 
	this._hasTachieFrontEHasHCup = value;
}; 

Game_Actor.prototype.getTachieFrontHHasHCup = function() { 
	let value = this._hasTachieFrontHHasHCup;
	return value;
}; 
Game_Actor.prototype.setTachieFrontHHasHCup = function(value) { 
	this._hasTachieFrontHHasHCup = value;
}; 

Game_Actor.prototype.getTachieBackAHasHCup = function() { 
	let value = this._hasTachieBackAHasHCup;
	return value;
}; 
Game_Actor.prototype.setTachieBackAHasHCup = function(value) { 
	this._hasTachieBackAHasHCup = value;
}; 
Game_Actor.prototype.getTachieBackBHasHCup = function() { 
	let value = this._hasTachieBackBHasHCup;
	return value;
}; 
Game_Actor.prototype.setTachieBackBHasHCup = function(value) { 
	this._hasTachieBackBHasHCup = value;
}; 
Game_Actor.prototype.getTachieBackCHasHCup = function() { 
	let value = this._hasTachieBackCHasHCup;
	return value;
}; 
Game_Actor.prototype.setTachieBackCHasHCup = function(value) { 
	this._hasTachieBackCHasHCup = value;
}; 

Game_Actor.prototype.getTachieVisitorAHasHCup = function() { 
	let value = this._hasTachieVisitorAHasHCup;
	return value;
}; 
Game_Actor.prototype.setTachieVisitorAHasHCup = function(value) { 
	this._hasTachieVisitorAHasHCup = value;
}; 

Game_Actor.prototype.getTachieStrawHasHCup = function() { 
	let value = this._hasTachieStrawHasHCup;
	return value;
}; 
Game_Actor.prototype.setTachieStrawHasHCup = function(value) { 
	this._hasTachieStrawHasHCup = value;
}; 
Game_Actor.prototype.getTachieMugHasHCup = function() { 
	let value = this._hasTachieMugHasHCup;
	return value;
}; 
Game_Actor.prototype.setTachieMugHasHCup = function(value) { 
	this._hasTachieMugHasHCup = value;
}; 

Game_Actor.prototype.getTachieCockHasHCup = function() { 
	let value = this._hasTachieCockHasHCup;
	return value;
}; 
Game_Actor.prototype.setTachieCockHasHCup = function(value) { 
	this._hasTachieCockHasHCup = value;
}; 

Game_Actor.prototype.getTachieCockMouthHasHCup = function() { 
	let value = this._hasTachieCockMouthHasHCup;
	return value;
}; 
Game_Actor.prototype.setTachieCockMouthHasHCup = function(value) { 
	this._hasTachieCockMouthHasHCup = value;
}; 

Game_Actor.prototype.getTachieCockBoobsHasHCup = function() { 
	let value = this._hasTachieCockBoobsHasHCup;
	return value;
}; 
Game_Actor.prototype.setTachieCockBoobsHasHCup = function(value) { 
	this._hasTachieCockBoobsHasHCup = value;
}; 

Game_Actor.prototype.getTachieCockRightArmHasHCup = function() { 
	let value = this._hasTachieCockRightArmHasHCup;
	return value;
}; 
Game_Actor.prototype.setTachieCockRightArmHasHCup = function(value) { 
	this._hasTachieCockRightArmHasHCup = value;
}; 

Game_Actor.prototype.getTachieSemenFaceHasHCup = function() { 
	let value = this._hasTachieSemenFaceHasHCup;
	return value;
}; 
Game_Actor.prototype.setTachieSemenFaceHasHCup = function(value) { 
	this._hasTachieSemenFaceHasHCup = value;
};
Game_Actor.prototype.getTachieSemenBoobsHasHCup = function() { 
	let value = this._hasTachieSemenBoobsHasHCup;
	return value;
}; 
Game_Actor.prototype.setTachieSemenBoobsHasHCup = function(value) { 
	this._hasTachieSemenBoobsHasHCup = value;
}; 
Game_Actor.prototype.getTachieSemenLeftBoobHasHCup = function() { 
	let value = this._hasTachieSemenLeftBoobHasHCup;
	return value;
}; 
Game_Actor.prototype.setTachieSemenLeftBoobHasHCup = function(value) { 
	this._hasTachieSemenLeftBoobHasHCup = value;
}; 
Game_Actor.prototype.getTachieSemenRightBoobHasHCup = function() { 
	let value = this._hasTachieSemenRightBoobHasHCup;
	return value;
}; 
Game_Actor.prototype.setTachieSemenRightBoobHasHCup = function(value) { 
	this._hasTachieSemenRightBoobHasHCup = value;
}; 
Game_Actor.prototype.getTachieSemenLeftArmHasHCup = function() { 
	let value = this._hasTachieSemenLeftArmHasHCup;
	return value;
}; 
Game_Actor.prototype.setTachieSemenLeftArmHasHCup = function(value) { 
	this._hasTachieSemenLeftArmHasHCup = value;
}; 
Game_Actor.prototype.getTachieSemenRightArmHasHCup = function() { 
	let value = this._hasTachieSemenRightArmHasHCup;
	return value;
}; 
Game_Actor.prototype.setTachieSemenRightArmHasHCup = function(value) { 
	this._hasTachieSemenRightArmHasHCup = value;
}; 

Game_Actor.prototype.getTachieSemenBackHasHCup = function() { 
	let value = this._hasTachieSemenBackHasHCup;
	return value;
}; 
Game_Actor.prototype.setTachieSemenBackHasHCup = function(value) { 
	this._hasTachieSemenBackHasHCup = value;
}; 

Game_Actor.prototype.getTachieSemenBellyHasHCup = function() { 
	let value = this._hasTachieSemenBellyHasHCup;
	return value;
}; 
Game_Actor.prototype.setTachieSemenBellyHasHCup = function(value) { 
	this._hasTachieSemenBellyHasHCup = value;
}; 

Game_Actor.prototype.getTachieSemenButtTopLeftHasHCup = function() { 
	let value = this._hasTachieSemenButtTopLeftHasHCup;
	return value;
}; 
Game_Actor.prototype.setTachieSemenButtTopLeftHasHCup = function(value) { 
	this._hasTachieSemenButtTopLeftHasHCup = value;
}; 

Game_Actor.prototype.getTachieSemenButtBottomLeftHasHCup = function() { 
	let value = this._hasTachieSemenButtBottomLeftHasHCup;
	return value;
}; 
Game_Actor.prototype.setTachieSemenButtBottomLeftHasHCup = function(value) { 
	this._hasTachieSemenButtBottomLeftHasHCup = value;
}; 

Game_Actor.prototype.getTachieSemenFrontAHasHCup = function() { 
	let value = this._hasTachieSemenFrontAHasHCup;
	return value;
}; 
Game_Actor.prototype.setTachieSemenFrontAHasHCup = function(value) { 
	this._hasTachieSemenFrontAHasHCup = value;
}; 
Game_Actor.prototype.getTachieSemenFrontBHasHCup = function() { 
	let value = this._hasTachieSemenFrontBHasHCup;
	return value;
}; 
Game_Actor.prototype.setTachieSemenFrontBHasHCup = function(value) { 
	this._hasTachieSemenFrontBHasHCup = value;
}; 

Game_Actor.prototype.getTachieSemenCrotchHasHCup = function() { 
	let value = this._hasTachieSemenCrotchHasHCup;
	return value;
}; 
Game_Actor.prototype.setTachieSemenCrotchHasHCup = function(value) { 
	this._hasTachieSemenCrotchHasHCup = value;
}; 

Game_Actor.prototype.getTachieSemenCockBoobsHasHCup = function() { 
	let value = this._hasTachieSemenCockBoobsHasHCup;
	return value;
}; 
Game_Actor.prototype.setTachieSemenCockBoobsHasHCup = function(value) { 
	this._hasTachieSemenCockBoobsHasHCup = value;
}; 
Game_Actor.prototype.getTachieSemenCockNormalHasHCup = function() { 
	let value = this._hasTachieSemenCockNormalHasHCup;
	return value;
}; 
Game_Actor.prototype.setTachieSemenCockNormalHasHCup = function(value) { 
	this._hasTachieSemenCockNormalHasHCup = value;
};

Game_Actor.prototype.getTachieSemenCockRightArmHasHCup = function() { 
	let value = this._hasTachieSemenCockRightArmHasHCup;
	return value;
}; 
Game_Actor.prototype.setTachieSemenCockRightArmHasHCup = function(value) { 
	this._hasTachieSemenCockRightArmHasHCup = value;
};

Game_Actor.prototype.getTachieDroolNipplesHasHCup = function() { 
	let value = this._hasTachieDroolNipplesHasHCup;
	return value;
}; 
Game_Actor.prototype.setTachieDroolNipplesHasHCup = function(value) { 
	this._hasTachieDroolNipplesHasHCup = value;
}; 

Game_Actor.prototype.getTachieStrayFaceHasHCup = function() { 
	let value = this._hasTachieStrayFaceHasHCup;
	return value;
}; 
Game_Actor.prototype.setTachieStrayFaceHasHCup = function(value) { 
	this._hasTachieStrayFaceHasHCup = value;
}; 
Game_Actor.prototype.getTachieStrayBoobsHasHCup = function() { 
	let value = this._hasTachieStrayBoobsHasHCup;
	return value;
}; 
Game_Actor.prototype.setTachieStrayBoobsHasHCup = function(value) { 
	this._hasTachieStrayBoobsHasHCup = value;
}; 
Game_Actor.prototype.getTachieStrayLeftBoobHasHCup = function() { 
	let value = this._hasTachieStrayLeftBoobHasHCup;
	return value;
}; 
Game_Actor.prototype.setTachieStrayLeftBoobHasHCup = function(value) { 
	this._hasTachieStrayLeftBoobHasHCup = value;
}; 
Game_Actor.prototype.getTachieStrayRightBoobHasHCup = function() { 
	let value = this._hasTachieStrayRightBoobHasHCup;
	return value;
}; 
Game_Actor.prototype.setTachieStrayRightBoobHasHCup = function(value) { 
	this._hasTachieStrayRightBoobHasHCup = value;
}; 

Game_Actor.prototype.getTachieCondomBraHasHCup = function() { 
	let value = this._hasTachieCondomBraHasHCup;
	return value;
}; 
Game_Actor.prototype.setTachieCondomBraHasHCup = function(value) { 
	this._hasTachieCondomBraHasHCup = value;
};
Game_Actor.prototype.getTachieCondomBeltHasHCup = function() { 
	let value = this._hasTachieCondomBeltHasHCup;
	return value;
}; 
Game_Actor.prototype.setTachieCondomBeltHasHCup = function(value) { 
	this._hasTachieCondomBeltHasHCup = value;
};
Game_Actor.prototype.getTachieCondomChikubiHasHCup = function() { 
	let value = this._hasTachieCondomChikubiHasHCup;
	return value;
}; 
Game_Actor.prototype.setTachieCondomChikubiHasHCup = function(value) { 
	this._hasTachieCondomChikubiHasHCup = value;
}; 


Game_Actor.prototype.getTachieBodyHasPCup = function() { 
	let value = this._hasTachieBodyHasPCup;
	return value;
}; 
Game_Actor.prototype.setTachieBodyHasPCup = function(value) { 
	this._hasTachieBodyHasPCup = value;
}; 
Game_Actor.prototype.getTachieTieHasPCup = function() { 
	let value = this._hasTachieTieHasPCup;
	return value;
}; 
Game_Actor.prototype.setTachieTieHasPCup = function(value) { 
	this._hasTachieTieHasPCup = value;
}; 
Game_Actor.prototype.getTachieHipsHasPCup = function() { 
	let value = this._hasTachieHipsHasPCup;
	return value;
}; 
Game_Actor.prototype.setTachieHipsHasPCup = function(value) { 
	this._hasTachieHipsHasPCup = value;
}; 
Game_Actor.prototype.getTachieBoobsHasPCup = function() { 
	let value = this._hasTachieBoobsHasPCup;
	return value;
}; 
Game_Actor.prototype.setTachieBoobsHasPCup = function(value) { 
	this._hasTachieBoobsHasPCup = value;
}; 
Game_Actor.prototype.getTachieLeftBoobHasPCup = function() { 
	let value = this._hasTachieLeftBoobHasPCup;
	return value;
}; 
Game_Actor.prototype.setTachieLeftBoobHasPCup = function(value) { 
	this._hasTachieLeftBoobHasPCup = value;
}; 
Game_Actor.prototype.getTachieRightBoobHasPCup = function() { 
	let value = this._hasTachieRightBoobHasPCup;
	return value;
}; 
Game_Actor.prototype.setTachieRightBoobHasPCup = function(value) { 
	this._hasTachieRightBoobHasPCup = value;
}; 

Game_Actor.prototype.getTachieLeftArmHasPCup = function() { 
	let value = this._hasTachieLeftArmHasPCup;
	return value;
}; 
Game_Actor.prototype.setTachieLeftArmHasPCup = function(value) { 
	this._hasTachieLeftArmHasPCup = value;
}; 
Game_Actor.prototype.getTachieRightArmHasPCup = function() { 
	let value = this._hasTachieRightArmHasPCup;
	return value;
}; 
Game_Actor.prototype.setTachieRightArmHasPCup = function(value) { 
	this._hasTachieRightArmHasPCup = value;
}; 

Game_Actor.prototype.getTachieWeaponHasPCup = function() { 
	let value = this._hasTachieWeaponHasPCup;
	return value;
}; 
Game_Actor.prototype.setTachieWeaponHasPCup = function(value) { 
	this._hasTachieWeaponHasPCup = value;
}; 

Game_Actor.prototype.getTachieHoppeHasPCup = function() { 
	let value = this._hasTachieHoppeHasPCup;
	return value;
}; 
Game_Actor.prototype.setTachieHoppeHasPCup = function(value) { 
	this._hasTachieHoppeHasPCup = value;
}; 

Game_Actor.prototype.getTachieHoodHasPCup = function() { 
	let value = this._hasTachieHoodHasPCup;
	return value;
}; 
Game_Actor.prototype.setTachieHoodHasPCup = function(value) { 
	this._hasTachieHoodHasPCup = value;
}; 

Game_Actor.prototype.getTachieFrontAHasPCup = function() { 
	let value = this._hasTachieFrontAHasPCup;
	return value;
}; 
Game_Actor.prototype.setTachieFrontAHasPCup = function(value) { 
	this._hasTachieFrontAHasPCup = value;
}; 
Game_Actor.prototype.getTachieFrontBHasPCup = function() { 
	let value = this._hasTachieFrontBHasPCup;
	return value;
}; 
Game_Actor.prototype.setTachieFrontBHasPCup = function(value) { 
	this._hasTachieFrontBHasPCup = value;
};
Game_Actor.prototype.getTachieFrontCHasPCup = function() { 
	let value = this._hasTachieFrontCHasPCup;
	return value;
}; 
Game_Actor.prototype.setTachieFrontCHasPCup = function(value) { 
	this._hasTachieFrontCHasPCup = value;
}; 
Game_Actor.prototype.getTachieFrontDHasPCup = function() { 
	let value = this._hasTachieFrontDHasPCup;
	return value;
}; 
Game_Actor.prototype.setTachieFrontDHasPCup = function(value) { 
	this._hasTachieFrontDHasPCup = value;
}; 
Game_Actor.prototype.getTachieFrontEHasPCup = function() { 
	let value = this._hasTachieFrontEHasPCup;
	return value;
}; 
Game_Actor.prototype.setTachieFrontEHasPCup = function(value) { 
	this._hasTachieFrontEHasPCup = value;
};

Game_Actor.prototype.getTachieFrontHHasPCup = function() { 
	let value = this._hasTachieFrontHHasPCup;
	return value;
}; 
Game_Actor.prototype.setTachieFrontHHasPCup = function(value) { 
	this._hasTachieFrontHHasPCup = value;
}; 

Game_Actor.prototype.getTachieBackAHasPCup = function() { 
	let value = this._hasTachieBackAHasPCup;
	return value;
}; 
Game_Actor.prototype.setTachieBackAHasPCup = function(value) { 
	this._hasTachieBackAHasPCup = value;
}; 
Game_Actor.prototype.getTachieBackBHasPCup = function() { 
	let value = this._hasTachieBackBHasPCup;
	return value;
}; 
Game_Actor.prototype.setTachieBackBHasPCup = function(value) { 
	this._hasTachieBackBHasPCup = value;
}; 
Game_Actor.prototype.getTachieBackCHasPCup = function() { 
	let value = this._hasTachieBackCHasPCup;
	return value;
}; 
Game_Actor.prototype.setTachieBackCHasPCup = function(value) { 
	this._hasTachieBackCHasPCup = value;
}; 

Game_Actor.prototype.getTachieVisitorAHasPCup = function() { 
	let value = this._hasTachieVisitorAHasPCup;
	return value;
}; 
Game_Actor.prototype.setTachieVisitorAHasPCup = function(value) { 
	this._hasTachieVisitorAHasPCup = value;
}; 

Game_Actor.prototype.getTachieStrawHasPCup = function() { 
	let value = this._hasTachieStrawHasPCup;
	return value;
}; 
Game_Actor.prototype.setTachieStrawHasPCup = function(value) { 
	this._hasTachieStrawHasPCup = value;
};
Game_Actor.prototype.getTachieMugHasPCup = function() { 
	let value = this._hasTachieMugHasPCup;
	return value;
}; 
Game_Actor.prototype.setTachieMugHasPCup = function(value) { 
	this._hasTachieMugHasPCup = value;
};

Game_Actor.prototype.getTachieCockHasPCup = function() { 
	let value = this._hasTachieCockHasPCup;
	return value;
}; 
Game_Actor.prototype.setTachieCockHasPCup = function(value) { 
	this._hasTachieCockHasPCup = value;
}; 

Game_Actor.prototype.getTachieCockMouthHasPCup = function() { 
	let value = this._hasTachieCockMouthHasPCup;
	return value;
}; 
Game_Actor.prototype.setTachieCockMouthHasPCup = function(value) { 
	this._hasTachieCockMouthHasPCup = value;
}; 

Game_Actor.prototype.getTachieCockBoobsHasPCup = function() { 
	let value = this._hasTachieCockBoobsHasPCup;
	return value;
}; 
Game_Actor.prototype.setTachieCockBoobsHasPCup = function(value) { 
	this._hasTachieCockBoobsHasPCup = value;
}; 

Game_Actor.prototype.getTachieCockRightArmHasPCup = function() { 
	let value = this._hasTachieCockRightArmHasPCup;
	return value;
}; 
Game_Actor.prototype.setTachieCockRightArmHasPCup = function(value) { 
	this._hasTachieCockRightArmHasPCup = value;
}; 

Game_Actor.prototype.getTachieSemenFaceHasPCup = function() { 
	let value = this._hasTachieSemenFaceHasPCup;
	return value;
}; 
Game_Actor.prototype.setTachieSemenFaceHasPCup = function(value) { 
	this._hasTachieSemenFaceHasPCup = value;
}; 
Game_Actor.prototype.getTachieSemenBoobsHasPCup = function() { 
	let value = this._hasTachieSemenBoobsHasPCup;
	return value;
}; 
Game_Actor.prototype.setTachieSemenBoobsHasPCup = function(value) { 
	this._hasTachieSemenBoobsHasPCup = value;
}; 
Game_Actor.prototype.getTachieSemenLeftBoobHasPCup = function() { 
	let value = this._hasTachieSemenLeftBoobHasPCup;
	return value;
}; 
Game_Actor.prototype.setTachieSemenLeftBoobHasPCup = function(value) { 
	this._hasTachieSemenLeftBoobHasPCup = value;
}; 
Game_Actor.prototype.getTachieSemenRightBoobHasPCup = function() { 
	let value = this._hasTachieSemenRightBoobHasPCup;
	return value;
}; 
Game_Actor.prototype.setTachieSemenRightBoobHasPCup = function(value) { 
	this._hasTachieSemenRightBoobHasPCup = value;
}; 
Game_Actor.prototype.getTachieSemenLeftArmHasPCup = function() { 
	let value = this._hasTachieSemenLeftArmHasPCup;
	return value;
}; 
Game_Actor.prototype.setTachieSemenLeftArmHasPCup = function(value) { 
	this._hasTachieSemenLeftArmHasPCup = value;
}; 
Game_Actor.prototype.getTachieSemenRightArmHasPCup = function() { 
	let value = this._hasTachieSemenRightArmHasPCup;
	return value;
}; 
Game_Actor.prototype.setTachieSemenRightArmHasPCup = function(value) { 
	this._hasTachieSemenRightArmHasPCup = value;
}; 

Game_Actor.prototype.getTachieSemenBackHasPCup = function() { 
	let value = this._hasTachieSemenBackHasPCup;
	return value;
}; 
Game_Actor.prototype.setTachieSemenBackHasPCup = function(value) { 
	this._hasTachieSemenBackHasPCup = value;
}; 

Game_Actor.prototype.getTachieSemenBellyHasPCup = function() { 
	let value = this._hasTachieSemenBellyHasPCup;
	return value;
}; 
Game_Actor.prototype.setTachieSemenBellyHasPCup = function(value) { 
	this._hasTachieSemenBellyHasPCup = value;
}; 

Game_Actor.prototype.getTachieSemenButtTopLeftHasPCup = function() { 
	let value = this._hasTachieSemenButtTopLeftHasPCup;
	return value;
}; 
Game_Actor.prototype.setTachieSemenButtTopLeftHasPCup = function(value) { 
	this._hasTachieSemenButtTopLeftHasPCup = value;
}; 

Game_Actor.prototype.getTachieSemenButtBottomLeftHasPCup = function() { 
	let value = this._hasTachieSemenButtBottomLeftHasPCup;
	return value;
}; 
Game_Actor.prototype.setTachieSemenButtBottomLeftHasPCup = function(value) { 
	this._hasTachieSemenButtBottomLeftHasPCup = value;
}; 

Game_Actor.prototype.getTachieSemenFrontAHasPCup = function() { 
	let value = this._hasTachieSemenFrontAHasPCup;
	return value;
}; 
Game_Actor.prototype.setTachieSemenFrontAHasPCup = function(value) { 
	this._hasTachieSemenFrontAHasPCup = value;
}; 

Game_Actor.prototype.getTachieSemenFrontBHasPCup = function() { 
	let value = this._hasTachieSemenFrontBHasPCup;
	return value;
}; 
Game_Actor.prototype.setTachieSemenFrontBHasPCup = function(value) { 
	this._hasTachieSemenFrontBHasPCup = value;
}; 

Game_Actor.prototype.getTachieSemenCrotchHasPCup = function() { 
	let value = this._hasTachieSemenCrotchHasPCup;
	return value;
}; 
Game_Actor.prototype.setTachieSemenCrotchHasPCup = function(value) { 
	this._hasTachieSemenCrotchHasPCup = value;
}; 

Game_Actor.prototype.getTachieSemenCockBoobsHasPCup = function() { 
	let value = this._hasTachieSemenCockBoobsHasPCup;
	return value;
}; 
Game_Actor.prototype.setTachieSemenCockBoobsHasPCup = function(value) { 
	this._hasTachieSemenCockBoobsHasPCup = value;
}; 
Game_Actor.prototype.getTachieSemenCockNormalHasPCup = function() { 
	let value = this._hasTachieSemenCockNormalHasPCup;
	return value;
}; 
Game_Actor.prototype.setTachieSemenCockNormalHasPCup = function(value) { 
	this._hasTachieSemenCockNormalHasPCup = value;
}; 

Game_Actor.prototype.getTachieSemenCockRightArmHasPCup = function() { 
	let value = this._hasTachieSemenCockRightArmHasPCup;
	return value;
}; 
Game_Actor.prototype.setTachieSemenCockRightArmHasPCup = function(value) { 
	this._hasTachieSemenCockRightArmHasPCup = value;
};

Game_Actor.prototype.getTachieDroolNipplesHasPCup = function() { 
	let value = this._hasTachieDroolNipplesHasPCup;
	return value;
}; 
Game_Actor.prototype.setTachieDroolNipplesHasPCup = function(value) { 
	this._hasTachieDroolNipplesHasPCup = value;
}; 

Game_Actor.prototype.getTachieStrayFaceHasPCup = function() { 
	let value = this._hasTachieStrayFaceHasPCup;
	return value;
}; 
Game_Actor.prototype.setTachieStrayFaceHasPCup = function(value) { 
	this._hasTachieStrayFaceHasPCup = value;
}; 
Game_Actor.prototype.getTachieStrayBoobsHasPCup = function() { 
	let value = this._hasTachieStrayBoobsHasPCup;
	return value;
}; 
Game_Actor.prototype.setTachieStrayBoobsHasPCup = function(value) { 
	this._hasTachieStrayBoobsHasPCup = value;
}; 
Game_Actor.prototype.getTachieStrayLeftBoobHasPCup = function() { 
	let value = this._hasTachieStrayLeftBoobHasPCup;
	return value;
}; 
Game_Actor.prototype.setTachieStrayLeftBoobHasPCup = function(value) { 
	this._hasTachieStrayLeftBoobHasPCup = value;
}; 
Game_Actor.prototype.getTachieStrayRightBoobHasPCup = function() { 
	let value = this._hasTachieStrayRightBoobHasPCup;
	return value;
}; 
Game_Actor.prototype.setTachieStrayRightBoobHasPCup = function(value) { 
	this._hasTachieStrayRightBoobHasPCup = value;
}; 

Game_Actor.prototype.getTachieCondomBraHasPCup = function() { 
	let value = this._hasTachieCondomBraHasPCup;
	return value;
}; 
Game_Actor.prototype.setTachieCondomBraHasPCup = function(value) { 
	this._hasTachieCondomBraHasPCup = value;
};
Game_Actor.prototype.getTachieCondomBeltHasPCup = function() { 
	let value = this._hasTachieCondomBeltHasPCup;
	return value;
}; 
Game_Actor.prototype.setTachieCondomBeltHasPCup = function(value) { 
	this._hasTachieCondomBeltHasPCup = value;
};
Game_Actor.prototype.getTachieCondomChikubiHasPCup = function() { 
	let value = this._hasTachieCondomChikubiHasPCup;
	return value;
}; 
Game_Actor.prototype.setTachieCondomChikubiHasPCup = function(value) { 
	this._hasTachieCondomChikubiHasPCup = value;
}; 

// Food and Items
Game_Actor.prototype.getArtisanFoodEffectRate = function() { 
	let foodEffectMulti = 1;
	if(this.isUsingThisTitle(TITLE_ID_GOURMET_FOODIE))
		foodEffectMulti += 0.5;
	if(this.isEquippingThisAccessory(MISC_RECETTE)) {
		if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) foodEffectMulti += 0.06;
		else foodEffectMulti += 0.12;
	}
	return foodEffectMulti;
}; 

Game_Actor.prototype.getStoreItemEffectRate = function() { 
	let itemEffectMulti = 1;
	if(this.isEquippingThisAccessory(MISC_RECETTE)) {
		if(this.isUsingThisTitle(TITLE_ID_ASPIRING_HERO)) itemEffectMulti += 0.365;
		else itemEffectMulti += 0.73;
	}
	return itemEffectMulti;
}; 
