var Remtairy = Remtairy || {};
Remtairy.CutIn = Remtairy.CutIn || {};

const CUTIN_DEFAULT_DURATION = 35; //カットインが画面に残る時間

const REM_CUT_IN_LEFT_X = -80;
const REM_CUT_IN_RIGHT_X = 0;
const REM_CUT_IN_TOP_Y = 0;
const REM_CUT_IN_BOTTOM_Y = 80;

const REM_CUT_IN_SPEED_X = 3;
const REM_CUT_IN_SPEED_Y = 3;

const REM_CUT_IN_DEFEATED_LV1_X_OFFSET = 850; //Defeated Lv1の位置をずらす
const REM_CUT_IN_DEFEATED_LV1_Y_OFFSET = 0; //Defeated Lv1の位置をずらす

const REM_CUT_IN_DEFEATED_LV2_X_OFFSET = 0; //Defeated Lv2の位置をずらす
const REM_CUT_IN_DEFEATED_LV2_Y_OFFSET = 0; //Defeated Lv2の位置をずらす

const REM_CUT_IN_DEFEATED_GUARD_X_OFFSET = -40;
const REM_CUT_IN_DEFEATED_GUARD_Y_OFFSET = 0;

const REM_CUT_IN_WAITRESS_SERVING_X_OFFSET = 75; //ウェイトレス
const REM_CUT_IN_WAITRESS_SERVING_Y_OFFSET = 0;

const REM_CUT_IN_WAITRESS_SEX_X_OFFSET = 0;
const REM_CUT_IN_WAITRESS_SEX_Y_OFFSET = 0;

const REM_CUT_IN_RECEPTIONIST_X_OFFSET = 70; //受付嬢
const REM_CUT_IN_RECEPTIONIST_Y_OFFSET = 0;

const REM_CUT_IN_GLORY_X_OFFSET = 0; //Glory
const REM_CUT_IN_GLORY_Y_OFFSET = 0;

const REM_CUT_IN_GLORY_SITLEFT_STANDRIGHT_X_OFFSET = 860; //グローリーホール Sit left, stand right
const REM_CUT_IN_GLORY_SITLEFT_STANDRIGHT_Y_OFFSET = 0;

const REM_CUT_IN_STRIPPER_SEX_X_OFFSET = 0; //stripper_vip
const REM_CUT_IN_STRIPPER_SEX_Y_OFFSET = 0;

const REM_CUT_IN_TRAINER_TEKOKI_X_OFFSET = 20; //gym_tekoki
const REM_CUT_IN_TRAINER_TEKOKI_Y_OFFSET = 0;

const REM_CUT_IN_TRAINER_KISU_X_OFFSET = 850; //gym_kisu
const REM_CUT_IN_TRAINER_KISU_Y_OFFSET = 0;

const REM_CUT_IN_TRAINER_FERA_X_OFFSET = 30; //gym_fera
const REM_CUT_IN_TRAINER_FERA_Y_OFFSET = 0;

const REM_CUT_IN_TRAINER_PAIZURI_X_OFFSET = 0; //gym_paizuri
const REM_CUT_IN_TRAINER_PAIZURI_Y_OFFSET = 0;

const REM_CUT_IN_TRAINER_SEX_X_OFFSET = 20; //gym_rinkan
const REM_CUT_IN_TRAINER_SEX_Y_OFFSET = 0;

const REM_CUT_IN_DOWN_ORG_X_OFFSET = -20; //Down_orgasm
const REM_CUT_IN_DOWN_ORG_Y_OFFSET = 0;

const REM_CUT_IN_DOWN_STAMINA_X_OFFSET = 0; //Down_stamina
const REM_CUT_IN_DOWN_STAMINA_Y_OFFSET = 0;

const REM_CUT_IN_DOWN_FALLDOWN_X_OFFSET = 0; //Down_falldown
const REM_CUT_IN_DOWN_FALLDOWN_Y_OFFSET = 0;

const REM_CUT_IN_COMBAT_STANDBY_X_OFFSET = 0; //Standby
const REM_CUT_IN_COMBAT_STANDBY_Y_OFFSET = 0;

const REM_CUT_IN_COMBAT_UNARMED_X_OFFSET = 0; //Unarmed
const REM_CUT_IN_COMBAT_UNARMED_Y_OFFSET = 0;

const REM_CUT_IN_COMBAT_DEFEND_X_OFFSET = 0; //Defend
const REM_CUT_IN_COMBAT_DEFEND_Y_OFFSET = 0;

const REM_CUT_IN_COMBAT_EVADE_X_OFFSET = 0; //Evade
const REM_CUT_IN_COMBAT_EVADE_Y_OFFSET = 0;

const REM_CUT_IN_SEX_THUG_GB_X_OFFSET = -50; //セックス　thug_gb
const REM_CUT_IN_SEX_THUG_GB_Y_OFFSET = 0;

const REM_CUT_IN_SEX_GUARD_GB_X_OFFSET = -20; //セックス　guard_gb
const REM_CUT_IN_SEX_GUARD_GB_Y_OFFSET = 0;

const REM_CUT_IN_SEX_GOBLIN_CL_X_OFFSET = 0; //セックス　goblin_cl
const REM_CUT_IN_SEX_GOBLIN_CL_Y_OFFSET = 0;

const REM_CUT_IN_SEX_SLIME_PL_X_OFFSET = 0; //セックス　slime_piledrivers
const REM_CUT_IN_SEX_SLIME_PL_Y_OFFSET = 0;

const REM_CUT_IN_SEX_STANDING_HJ_X_OFFSET = 0; //セックス　hj_standing
const REM_CUT_IN_SEX_STANDING_HJ_Y_OFFSET = 0;

const REM_CUT_IN_SEX_KNEELING_BJ_X_OFFSET = 0; //セックス　bj_kneeling
const REM_CUT_IN_SEX_KNEELING_BJ_Y_OFFSET = 0;

const REM_CUT_IN_SEX_LAYING_PAIZURI_X_OFFSET = 0; //セックス　paizuri_laying
const REM_CUT_IN_SEX_LAYING_PAIZURI_Y_OFFSET = 0;

const REM_CUT_IN_SEX_FOOTJ_X_OFFSET = 0; //セックス　footj
const REM_CUT_IN_SEX_FOOTJ_Y_OFFSET = 0;

const REM_CUT_IN_SEX_RIMMING_X_OFFSET = -40; //セックス　rimming
const REM_CUT_IN_SEX_RIMMING_Y_OFFSET = 0;

const REM_CUT_IN_SEX_WEREWOLF_BACK_X_OFFSET = 800; //セックス werewolf_back
const REM_CUT_IN_SEX_WEREWOLF_BACK_Y_OFFSET = 0;

//=============================================================================
 /*:
 * @plugindesc Cut-in
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================

const CUT_IN_ARRAY_BACK_NAME_ID = 0;
const CUT_IN_ARRAY_BACK_X_OFFSET_ID = 1;
const CUT_IN_ARRAY_BACK_Y_OFFSET_ID = 2;
const CUT_IN_ARRAY_FRONT_NAME_ID = 3;
const CUT_IN_ARRAY_FRONT_X_OFFSET_ID = 4;
const CUT_IN_ARRAY_FRONT_Y_OFFSET_ID = 5;
const CUT_IN_ARRAY_PRELOAD_LIST_ID = 6;

const CUTIN_PETTING_BOOBS_TYPE_START = 1;
const CUTIN_PETTING_BOOBS_HUMAN_NORMAL_ID = 2;
const CUTIN_PETTING_BOOBS_HUMAN_PALE_ID = 3;
const CUTIN_PETTING_BOOBS_HUMAN_BLACK_ID = 4;
const CUTIN_PETTING_BOOBS_GOBLIN_NORMAL_ID = 5;
const CUTIN_PETTING_BOOBS_GOBLIN_DARK_ID = 6;
const CUTIN_PETTING_BOOBS_ORC_NORMAL_ID = 7;
const CUTIN_PETTING_BOOBS_ORC_DARK_ID = 8;
const CUTIN_PETTING_BOOBS_LIZARDMAN_NORMAL_ID = 9;
const CUTIN_PETTING_BOOBS_LIZARDMAN_DARK_ID = 10;
const CUTIN_PETTING_BOOBS_WEREWOLF_NORMAL_ID = 11;
const CUTIN_PETTING_BOOBS_YETI_NORMAL_ID = 12;
const CUTIN_PETTING_BOOBS_SLIME_NORMAL_ID = 13;
const CUTIN_PETTING_BOOBS_TYPE_END = 20;

const CUTIN_PETTING_NIPPLES_TYPE_START = 21;
const CUTIN_PETTING_NIPPLES_HUMAN_NORMAL_ID = 22;
const CUTIN_PETTING_NIPPLES_HUMAN_PALE_ID = 23;
const CUTIN_PETTING_NIPPLES_HUMAN_BLACK_ID = 24;
const CUTIN_PETTING_NIPPLES_GOBLIN_NORMAL_ID = 25;
const CUTIN_PETTING_NIPPLES_GOBLIN_DARK_ID = 26;
const CUTIN_PETTING_NIPPLES_ORC_NORMAL_ID = 27;
const CUTIN_PETTING_NIPPLES_ORC_DARK_ID = 28;
const CUTIN_PETTING_NIPPLES_LIZARDMAN_NORMAL_ID = 29;
const CUTIN_PETTING_NIPPLES_LIZARDMAN_DARK_ID = 30;
const CUTIN_PETTING_NIPPLES_WEREWOLF_NORMAL_ID = 31;
const CUTIN_PETTING_NIPPLES_YETI_NORMAL_ID = 32;
const CUTIN_PETTING_NIPPLES_SLIME_NORMAL_ID = 33;
const CUTIN_PETTING_NIPPLES_TYPE_END = 40;

const CUTIN_PETTING_CLIT_TYPE_START = 41;
const CUTIN_PETTING_CLIT_HUMAN_NORMAL_ID = 42;
const CUTIN_PETTING_CLIT_HUMAN_PALE_ID = 43;
const CUTIN_PETTING_CLIT_HUMAN_BLACK_ID = 44;
const CUTIN_PETTING_CLIT_GOBLIN_NORMAL_ID = 45;
const CUTIN_PETTING_CLIT_GOBLIN_DARK_ID = 46;
const CUTIN_PETTING_CLIT_ORC_NORMAL_ID = 47;
const CUTIN_PETTING_CLIT_ORC_DARK_ID = 48;
const CUTIN_PETTING_CLIT_LIZARDMAN_NORMAL_ID = 49;
const CUTIN_PETTING_CLIT_LIZARDMAN_DARK_ID = 50;
const CUTIN_PETTING_CLIT_WEREWOLF_NORMAL_ID = 51;
const CUTIN_PETTING_CLIT_YETI_NORMAL_ID = 52;
const CUTIN_PETTING_CLIT_TYPE_END = 60;

const CUTIN_PETTING_PUSSY_TYPE_START = 61;
const CUTIN_PETTING_PUSSY_HUMAN_NORMAL_ID = 62;
const CUTIN_PETTING_PUSSY_HUMAN_PALE_ID = 63;
const CUTIN_PETTING_PUSSY_HUMAN_BLACK_ID = 64;
const CUTIN_PETTING_PUSSY_GOBLIN_NORMAL_ID = 65;
const CUTIN_PETTING_PUSSY_GOBLIN_DARK_ID = 66;
const CUTIN_PETTING_PUSSY_LIZARDMAN_NORMAL_ID = 67;
const CUTIN_PETTING_PUSSY_LIZARDMAN_DARK_ID = 68;
const CUTIN_PETTING_PUSSY_ORC_NORMAL_ID = 69;
const CUTIN_PETTING_PUSSY_ORC_DARK_ID = 70;
const CUTIN_PETTING_PUSSY_WEREWOLF_NORMAL_ID = 71;
const CUTIN_PETTING_PUSSY_YETI_NORMAL_ID = 72;
const CUTIN_PETTING_PUSSY_TYPE_END = 80;

const CUTIN_PETTING_BUTT_TYPE_START = 81;
const CUTIN_PETTING_BUTT_HUMAN_NORMAL_ID = 82;
const CUTIN_PETTING_BUTT_HUMAN_PALE_ID = 83;
const CUTIN_PETTING_BUTT_HUMAN_BLACK_ID = 84;
const CUTIN_PETTING_BUTT_LIZARDMAN_NORMAL_ID = 85;
const CUTIN_PETTING_BUTT_LIZARDMAN_DARK_ID = 86;
const CUTIN_PETTING_BUTT_ORC_NORMAL_ID = 87;
const CUTIN_PETTING_BUTT_ORC_DARK_ID = 88;
const CUTIN_PETTING_BUTT_WEREWOLF_NORMAL_ID = 89;
const CUTIN_PETTING_BUTT_YETI_NORMAL_ID = 90;
const CUTIN_PETTING_BUTT_SLIME_NORMAL_ID = 91;
const CUTIN_PETTING_BUTT_GOBLIN_NORMAL_ID = 98;
const CUTIN_PETTING_BUTT_GOBLIN_DARK_ID = 99;
const CUTIN_PETTING_BUTT_TYPE_END = 100;

const CUTIN_PETTING_ANAL_TYPE_START = 101;
const CUTIN_PETTING_ANAL_HUMAN_NORMAL_ID = 102;
const CUTIN_PETTING_ANAL_HUMAN_PALE_ID = 103;
const CUTIN_PETTING_ANAL_HUMAN_BLACK_ID = 104;
const CUTIN_PETTING_ANAL_GOBLIN_NORMAL_ID = 105;
const CUTIN_PETTING_ANAL_GOBLIN_DARK_ID = 106;
const CUTIN_PETTING_ANAL_ORC_NORMAL_ID = 107;
const CUTIN_PETTING_ANAL_ORC_DARK_ID = 108;
const CUTIN_PETTING_ANAL_LIZARDMAN_NORMAL_ID = 109;
const CUTIN_PETTING_ANAL_LIZARDMAN_DARK_ID = 110;
const CUTIN_PETTING_ANAL_WEREWOLF_NORMAL_ID = 111;
const CUTIN_PETTING_ANAL_YETI_NORMAL_ID = 112;
const CUTIN_PETTING_ANAL_SLIME_NORMAL_ID = 113;
const CUTIN_PETTING_ANAL_TYPE_END = 120;

const CUTIN_SUCKING_FINGERS_ENEMY_TYPE_START = 121;
const CUTIN_SUCKING_FINGERS_ENEMY_HUMAN_NORMAL_ID = 122;
const CUTIN_SUCKING_FINGERS_ENEMY_HUMAN_PALE_ID = 123;
const CUTIN_SUCKING_FINGERS_ENEMY_HUMAN_BLACK_ID = 124;
const CUTIN_SUCKING_FINGERS_ENEMY_GOBLIN_NORMAL_ID = 125;
const CUTIN_SUCKING_FINGERS_ENEMY_GOBLIN_DARK_ID = 126;
const CUTIN_SUCKING_FINGERS_ENEMY_LIZARDMAN_NORMAL_ID = 127;
const CUTIN_SUCKING_FINGERS_ENEMY_LIZARDMAN_DARK_ID = 128;
const CUTIN_SUCKING_FINGERS_ENEMY_ORC_NORMAL_ID = 129;
const CUTIN_SUCKING_FINGERS_ENEMY_ORC_DARK_ID = 130;
const CUTIN_SUCKING_FINGERS_ENEMY_YETI_NORMAL_ID = 131;
const CUTIN_SUCKING_FINGERS_ENEMY_TYPE_END = 140;

const CUTIN_SPANKING_ONE_NAME = 141;
const CUTIN_SPANKING_TWO_NAME = 142;
const CUTIN_SPANKING_THREE_NAME = 143;

const CUTIN_KARRYN_FLAUNT_ONE_ID = 144;

const CUTIN_KARRYN_ORGASM_ONE_ID = 145;
const CUTIN_KARRYN_ORGASM_TWO_ID = 146;

const CUTIN_KARRYN_KISS_ONE_TYPE_START = 161;
const CUTIN_KARRYN_KISS_ONE_HUMAN_NORMAL_ID = 162;
const CUTIN_KARRYN_KISS_ONE_HUMAN_PALE_ID = 163;
const CUTIN_KARRYN_KISS_ONE_HUMAN_BLACK_ID = 164;
const CUTIN_KARRYN_KISS_ONE_GOBLIN_NORMAL_ID = 165;
const CUTIN_KARRYN_KISS_ONE_GOBLIN_DARK_ID = 166;
const CUTIN_KARRYN_KISS_ONE_LIZARDMAN_NORMAL_ID = 167;
const CUTIN_KARRYN_KISS_ONE_LIZARDMAN_DARK_ID = 168;
const CUTIN_KARRYN_KISS_ONE_ORC_NORMAL_ID = 169;
const CUTIN_KARRYN_KISS_ONE_ORC_DARK_ID = 170;
const CUTIN_KARRYN_KISS_ONE_YETI_NORMAL_ID = 171;
const CUTIN_KARRYN_KISS_ONE_TYPE_END = 180;

const CUTIN_KARRYN_KISS_TWO_TYPE_START = 181;
const CUTIN_KARRYN_KISS_TWO_HUMAN_NORMAL_ID = 182;
const CUTIN_KARRYN_KISS_TWO_HUMAN_PALE_ID = 183;
const CUTIN_KARRYN_KISS_TWO_HUMAN_BLACK_ID = 184;
const CUTIN_KARRYN_KISS_TWO_GOBLIN_NORMAL_ID = 185;
const CUTIN_KARRYN_KISS_TWO_GOBLIN_DARK_ID = 186;
const CUTIN_KARRYN_KISS_TWO_ORC_NORMAL_ID = 187;
const CUTIN_KARRYN_KISS_TWO_ORC_DARK_ID = 188;
const CUTIN_KARRYN_KISS_TWO_LIZARDMAN_NORMAL_ID = 189;
const CUTIN_KARRYN_KISS_TWO_LIZARDMAN_DARK_ID = 190;
const CUTIN_KARRYN_KISS_TWO_YETI_NORMAL_ID = 191;
const CUTIN_KARRYN_KISS_TWO_TYPE_END = 200;

const CUTIN_ENEMY_KISS_ONE_TYPE_START = 201;
const CUTIN_ENEMY_KISS_ONE_HUMAN_NORMAL_ID = 202;
const CUTIN_ENEMY_KISS_ONE_HUMAN_PALE_ID = 203;
const CUTIN_ENEMY_KISS_ONE_HUMAN_BLACK_ID = 204;
const CUTIN_ENEMY_KISS_ONE_GOBLIN_NORMAL_ID = 205;
const CUTIN_ENEMY_KISS_ONE_GOBLIN_DARK_ID = 206;
const CUTIN_ENEMY_KISS_ONE_LIZARDMAN_NORMAL_ID = 207;
const CUTIN_ENEMY_KISS_ONE_LIZARDMAN_DARK_ID = 208;
const CUTIN_ENEMY_KISS_ONE_ORC_NORMAL_ID = 209;
const CUTIN_ENEMY_KISS_ONE_ORC_DARK_ID = 210;
const CUTIN_ENEMY_KISS_ONE_YETI_NORMAL_ID = 211;
const CUTIN_ENEMY_KISS_ONE_TYPE_END = 220;

const CUTIN_ENEMY_KISS_TWO_TYPE_START = 221;
const CUTIN_ENEMY_KISS_TWO_HUMAN_NORMAL_ID = 222;
const CUTIN_ENEMY_KISS_TWO_HUMAN_PALE_ID = 223;
const CUTIN_ENEMY_KISS_TWO_HUMAN_BLACK_ID = 224;
const CUTIN_ENEMY_KISS_TWO_GOBLIN_NORMAL_ID = 225;
const CUTIN_ENEMY_KISS_TWO_GOBLIN_DARK_ID = 226;
const CUTIN_ENEMY_KISS_TWO_ORC_NORMAL_ID = 227;
const CUTIN_ENEMY_KISS_TWO_ORC_DARK_ID = 228;
const CUTIN_ENEMY_KISS_TWO_LIZARDMAN_NORMAL_ID = 229;
const CUTIN_ENEMY_KISS_TWO_LIZARDMAN_DARK_ID = 230;
const CUTIN_ENEMY_KISS_TWO_YETI_NORMAL_ID = 231;
const CUTIN_ENEMY_KISS_TWO_TYPE_END = 240;

const CUTIN_TOY_PINK_ROTOR_INSERT_TYPE_START = 241;
const CUTIN_TOY_PINK_ROTOR_INSERT_HUMAN_NORMAL_ID = 242;
const CUTIN_TOY_PINK_ROTOR_INSERT_HUMAN_BLACK_ID = 243;
const CUTIN_TOY_PINK_ROTOR_INSERT_HUMAN_PALE_ID = 244;
const CUTIN_TOY_PINK_ROTOR_INSERT_TYPE_END = 260;

const CUTIN_TOY_PINK_ROTOR_PLAY_TYPE_START = 261;
const CUTIN_TOY_PINK_ROTOR_PLAY_HUMAN_NORMAL_ID = 262;
const CUTIN_TOY_PINK_ROTOR_PLAY_HUMAN_BLACK_ID = 263;
const CUTIN_TOY_PINK_ROTOR_PLAY_HUMAN_PALE_ID = 264;
const CUTIN_TOY_PINK_ROTOR_PLAY_TYPE_END = 280;

const CUTIN_TOY_PENIS_DILDO_INSERT_TYPE_START = 281;
const CUTIN_TOY_PENIS_DILDO_INSERT_HUMAN_NORMAL_ID = 282;
const CUTIN_TOY_PENIS_DILDO_INSERT_HUMAN_PALE_ID = 283;
const CUTIN_TOY_PENIS_DILDO_INSERT_HUMAN_BLACK_ID = 284;
const CUTIN_TOY_PENIS_DILDO_INSERT_TYPE_END = 300;

const CUTIN_TOY_PENIS_DILDO_PLAY_TYPE_START = 301;
const CUTIN_TOY_PENIS_DILDO_PLAY_HUMAN_NORMAL_ID = 302;
const CUTIN_TOY_PENIS_DILDO_PLAY_HUMAN_PALE_ID = 303;
const CUTIN_TOY_PENIS_DILDO_PLAY_HUMAN_BLACK_ID = 304;
const CUTIN_TOY_PENIS_DILDO_PLAY_TYPE_END = 320;

const CUTIN_TOY_ANAL_BEADS_INSERT_TYPE_START = 321;
const CUTIN_TOY_ANAL_BEADS_INSERT_HUMAN_NORMAL_ID = 322;
const CUTIN_TOY_ANAL_BEADS_INSERT_HUMAN_PALE_ID = 323;
const CUTIN_TOY_ANAL_BEADS_INSERT_HUMAN_BLACK_ID = 324;
const CUTIN_TOY_ANAL_BEADS_INSERT_TYPE_END = 340;

const CUTIN_TOY_ANAL_BEADS_PLAY_TYPE_START = 341;
const CUTIN_TOY_ANAL_BEADS_PLAY_HUMAN_NORMAL_ID = 342;
const CUTIN_TOY_ANAL_BEADS_PLAY_HUMAN_PALE_ID = 343;
const CUTIN_TOY_ANAL_BEADS_PLAY_HUMAN_BLACK_ID = 344;
const CUTIN_TOY_ANAL_BEADS_PLAY_TYPE_END = 360;

const CUTIN_KARRYN_COCK_PETTING_TYPE_START = 360;
const CUTIN_KARRYN_COCK_PETTING_HUMAN_CUT_NORMAL_ID = 361;
const CUTIN_KARRYN_COCK_PETTING_HUMAN_CUT_PALE_ID = 362;
const CUTIN_KARRYN_COCK_PETTING_HUMAN_CUT_BLACK_ID = 363;
const CUTIN_KARRYN_COCK_PETTING_HUMAN_HALF_NORMAL_ID = 364;
const CUTIN_KARRYN_COCK_PETTING_HUMAN_HALF_PALE_ID = 365;
const CUTIN_KARRYN_COCK_PETTING_HUMAN_HALF_BLACK_ID = 366;
const CUTIN_KARRYN_COCK_PETTING_HUMAN_SKIN_NORMAL_ID = 367;
const CUTIN_KARRYN_COCK_PETTING_HUMAN_SKIN_PALE_ID = 368;
const CUTIN_KARRYN_COCK_PETTING_HUMAN_SKIN_BLACK_ID = 369;
const CUTIN_KARRYN_COCK_PETTING_GOBLIN_NORMAL_ID = 370;
const CUTIN_KARRYN_COCK_PETTING_GOBLIN_DARK_ID = 371;
const CUTIN_KARRYN_COCK_PETTING_ORC_NORMAL_ID = 372;
const CUTIN_KARRYN_COCK_PETTING_ORC_DARK_ID = 373;
const CUTIN_KARRYN_COCK_PETTING_LIZARDMAN_NORMAL_ID = 374;
const CUTIN_KARRYN_COCK_PETTING_LIZARDMAN_DARK_ID = 375;
const CUTIN_KARRYN_COCK_PETTING_SLIME_NORMAL_ID = 376;
const CUTIN_KARRYN_COCK_PETTING_WEREWOLF_NORMAL_ID = 377;
const CUTIN_KARRYN_COCK_PETTING_YETI_NORMAL_ID = 378;
const CUTIN_KARRYN_COCK_PETTING_TYPE_END = 400;

const CUTIN_EJACULATE_MOUTH_TYPE_START = 401;
const CUTIN_EJACULATE_MOUTH_HUMAN_NORMAL_ID = 402;
const CUTIN_EJACULATE_MOUTH_HUMAN_PALE_ID = 403;
const CUTIN_EJACULATE_MOUTH_HUMAN_BLACK_ID = 404;
const CUTIN_EJACULATE_MOUTH_GOBLIN_NORMAL_ID = 405;
const CUTIN_EJACULATE_MOUTH_GOBLIN_DARK_ID = 406;
const CUTIN_EJACULATE_MOUTH_LIZARDMAN_NORMAL_ID = 407;
const CUTIN_EJACULATE_MOUTH_LIZARDMAN_DARK_ID = 408;
const CUTIN_EJACULATE_MOUTH_ORC_NORMAL_ID = 409;
const CUTIN_EJACULATE_MOUTH_ORC_DARK_ID = 410;
const CUTIN_EJACULATE_MOUTH_SLIME_NORMAL_ID = 411;
const CUTIN_EJACULATE_MOUTH_WEREWOLF_NORMAL_ID = 412;
const CUTIN_EJACULATE_MOUTH_YETI_NORMAL_ID = 413;
const CUTIN_EJACULATE_MOUTH_TYPE_END = 420;

const CUTIN_EJACULATE_BUKKAKE_REG_TYPE_START = 601;
const CUTIN_EJACULATE_BUKKAKE_REG_HUMAN_CUT_NORMAL_ID = 602;
const CUTIN_EJACULATE_BUKKAKE_REG_HUMAN_CUT_PALE_ID = 603;
const CUTIN_EJACULATE_BUKKAKE_REG_HUMAN_CUT_BLACK_ID = 604;
const CUTIN_EJACULATE_BUKKAKE_REG_HUMAN_HALF_NORMAL_ID = 605;
const CUTIN_EJACULATE_BUKKAKE_REG_HUMAN_HALF_PALE_ID = 606;
const CUTIN_EJACULATE_BUKKAKE_REG_HUMAN_HALF_BLACK_ID = 607;
const CUTIN_EJACULATE_BUKKAKE_REG_HUMAN_SKIN_NORMAL_ID = 608;
const CUTIN_EJACULATE_BUKKAKE_REG_HUMAN_SKIN_PALE_ID = 609;
const CUTIN_EJACULATE_BUKKAKE_REG_HUMAN_SKIN_BLACK_ID = 610;
const CUTIN_EJACULATE_BUKKAKE_REG_GOBLIN_NORMAL_ID = 611;
const CUTIN_EJACULATE_BUKKAKE_REG_GOBLIN_DARK_ID = 612;
const CUTIN_EJACULATE_BUKKAKE_REG_ORC_NORMAL_ID = 613;
const CUTIN_EJACULATE_BUKKAKE_REG_ORC_DARK_ID = 614;
const CUTIN_EJACULATE_BUKKAKE_REG_LIZARDMAN_NORMAL_ID = 615;
const CUTIN_EJACULATE_BUKKAKE_REG_LIZARDMAN_DARK_ID = 616;
const CUTIN_EJACULATE_BUKKAKE_REG_SLIME_NORMAL_ID = 617;
const CUTIN_EJACULATE_BUKKAKE_REG_WEREWOLF_NORMAL_ID = 618;
const CUTIN_EJACULATE_BUKKAKE_REG_YETI_NORMAL_ID = 619;
const CUTIN_EJACULATE_BUKKAKE_REG_TYPE_END = 700;

const CUTIN_EJACULATE_BUKKAKE_MIRROR_TYPE_START = 701;
const CUTIN_EJACULATE_BUKKAKE_MIRROR_HUMAN_CUT_NORMAL_ID = 702;
const CUTIN_EJACULATE_BUKKAKE_MIRROR_HUMAN_CUT_PALE_ID = 703;
const CUTIN_EJACULATE_BUKKAKE_MIRROR_HUMAN_CUT_BLACK_ID = 704;
const CUTIN_EJACULATE_BUKKAKE_MIRROR_HUMAN_HALF_NORMAL_ID = 705;
const CUTIN_EJACULATE_BUKKAKE_MIRROR_HUMAN_HALF_PALE_ID = 706;
const CUTIN_EJACULATE_BUKKAKE_MIRROR_HUMAN_HALF_BLACK_ID = 707;
const CUTIN_EJACULATE_BUKKAKE_MIRROR_HUMAN_SKIN_NORMAL_ID = 708;
const CUTIN_EJACULATE_BUKKAKE_MIRROR_HUMAN_SKIN_PALE_ID = 709;
const CUTIN_EJACULATE_BUKKAKE_MIRROR_HUMAN_SKIN_BLACK_ID = 710;
const CUTIN_EJACULATE_BUKKAKE_MIRROR_GOBLIN_NORMAL_ID = 711;
const CUTIN_EJACULATE_BUKKAKE_MIRROR_GOBLIN_DARK_ID = 712;
const CUTIN_EJACULATE_BUKKAKE_MIRROR_ORC_NORMAL_ID = 713;
const CUTIN_EJACULATE_BUKKAKE_MIRROR_ORC_DARK_ID = 714;
const CUTIN_EJACULATE_BUKKAKE_MIRROR_LIZARDMAN_NORMAL_ID = 715;
const CUTIN_EJACULATE_BUKKAKE_MIRROR_LIZARDMAN_DARK_ID = 716;
const CUTIN_EJACULATE_BUKKAKE_MIRROR_SLIME_NORMAL_ID = 717;
const CUTIN_EJACULATE_BUKKAKE_MIRROR_WEREWOLF_NORMAL_ID = 718;
const CUTIN_EJACULATE_BUKKAKE_MIRROR_YETI_NORMAL_ID = 719;
const CUTIN_EJACULATE_BUKKAKE_MIRROR_TYPE_END = 800;

const CUTIN_EJACULATE_PUSSYCREAMPIE_REG_TYPE_START = 801;
const CUTIN_EJACULATE_PUSSYCREAMPIE_REG_HUMAN_CUT_NORMAL_ID = 802;
const CUTIN_EJACULATE_PUSSYCREAMPIE_REG_HUMAN_CUT_PALE_ID = 803;
const CUTIN_EJACULATE_PUSSYCREAMPIE_REG_HUMAN_CUT_BLACK_ID = 804;
const CUTIN_EJACULATE_PUSSYCREAMPIE_REG_HUMAN_HALF_NORMAL_ID = 805;
const CUTIN_EJACULATE_PUSSYCREAMPIE_REG_HUMAN_HALF_PALE_ID = 806;
const CUTIN_EJACULATE_PUSSYCREAMPIE_REG_HUMAN_HALF_BLACK_ID = 807;
const CUTIN_EJACULATE_PUSSYCREAMPIE_REG_HUMAN_SKIN_NORMAL_ID = 808;
const CUTIN_EJACULATE_PUSSYCREAMPIE_REG_HUMAN_SKIN_PALE_ID = 809;
const CUTIN_EJACULATE_PUSSYCREAMPIE_REG_HUMAN_SKIN_BLACK_ID = 810;
const CUTIN_EJACULATE_PUSSYCREAMPIE_REG_GOBLIN_NORMAL_ID = 811;
const CUTIN_EJACULATE_PUSSYCREAMPIE_REG_GOBLIN_DARK_ID = 812;
const CUTIN_EJACULATE_PUSSYCREAMPIE_REG_ORC_NORMAL_ID = 813;
const CUTIN_EJACULATE_PUSSYCREAMPIE_REG_ORC_DARK_ID = 814;
const CUTIN_EJACULATE_PUSSYCREAMPIE_REG_LIZARDMAN_NORMAL_ID = 815;
const CUTIN_EJACULATE_PUSSYCREAMPIE_REG_LIZARDMAN_DARK_ID = 816;
const CUTIN_EJACULATE_PUSSYCREAMPIE_REG_SLIME_NORMAL_ID = 817;
const CUTIN_EJACULATE_PUSSYCREAMPIE_REG_WEREWOLF_NORMAL_ID = 818;
const CUTIN_EJACULATE_PUSSYCREAMPIE_REG_YETI_NORMAL_ID = 819;
const CUTIN_EJACULATE_PUSSYCREAMPIE_REG_TYPE_END = 900;

const CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_TYPE_START = 901;
const CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_HUMAN_CUT_NORMAL_ID = 902;
const CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_HUMAN_CUT_PALE_ID = 903;
const CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_HUMAN_CUT_BLACK_ID = 904;
const CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_HUMAN_HALF_NORMAL_ID = 905;
const CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_HUMAN_HALF_PALE_ID = 906;
const CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_HUMAN_HALF_BLACK_ID = 907;
const CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_HUMAN_SKIN_NORMAL_ID = 908;
const CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_HUMAN_SKIN_PALE_ID = 909;
const CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_HUMAN_SKIN_BLACK_ID = 910;
const CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_GOBLIN_NORMAL_ID = 911;
const CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_GOBLIN_DARK_ID = 912;
const CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_ORC_NORMAL_ID = 913;
const CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_ORC_DARK_ID = 914;
const CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_LIZARDMAN_NORMAL_ID = 915;
const CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_LIZARDMAN_DARK_ID = 916;
const CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_SLIME_NORMAL_ID = 917;
const CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_WEREWOLF_NORMAL_ID = 918;
const CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_YETI_NORMAL_ID = 919;
const CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_TYPE_END = 1000;

const CUTIN_EJACULATE_ANALCREAMPIE_REG_TYPE_START = 1001;
const CUTIN_EJACULATE_ANALCREAMPIE_REG_HUMAN_CUT_NORMAL_ID = 1002;
const CUTIN_EJACULATE_ANALCREAMPIE_REG_HUMAN_CUT_PALE_ID = 1003;
const CUTIN_EJACULATE_ANALCREAMPIE_REG_HUMAN_CUT_BLACK_ID = 1004;
const CUTIN_EJACULATE_ANALCREAMPIE_REG_HUMAN_HALF_NORMAL_ID = 1005;
const CUTIN_EJACULATE_ANALCREAMPIE_REG_HUMAN_HALF_PALE_ID = 1006;
const CUTIN_EJACULATE_ANALCREAMPIE_REG_HUMAN_HALF_BLACK_ID = 1007;
const CUTIN_EJACULATE_ANALCREAMPIE_REG_HUMAN_SKIN_NORMAL_ID = 1008;
const CUTIN_EJACULATE_ANALCREAMPIE_REG_HUMAN_SKIN_PALE_ID = 1009;
const CUTIN_EJACULATE_ANALCREAMPIE_REG_HUMAN_SKIN_BLACK_ID = 1010;
const CUTIN_EJACULATE_ANALCREAMPIE_REG_GOBLIN_NORMAL_ID = 1011;
const CUTIN_EJACULATE_ANALCREAMPIE_REG_GOBLIN_DARK_ID = 1012;
const CUTIN_EJACULATE_ANALCREAMPIE_REG_ORC_NORMAL_ID = 1013;
const CUTIN_EJACULATE_ANALCREAMPIE_REG_ORC_DARK_ID = 1014;
const CUTIN_EJACULATE_ANALCREAMPIE_REG_LIZARDMAN_NORMAL_ID = 1015;
const CUTIN_EJACULATE_ANALCREAMPIE_REG_LIZARDMAN_DARK_ID = 1016;
const CUTIN_EJACULATE_ANALCREAMPIE_REG_SLIME_NORMAL_ID = 1017;
const CUTIN_EJACULATE_ANALCREAMPIE_REG_WEREWOLF_NORMAL_ID = 1018;
const CUTIN_EJACULATE_ANALCREAMPIE_REG_YETI_NORMAL_ID = 1019;
const CUTIN_EJACULATE_ANALCREAMPIE_REG_TYPE_END = 1020;

const CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_TYPE_START = 1101;
const CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_HUMAN_CUT_NORMAL_ID = 1102;
const CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_HUMAN_CUT_PALE_ID = 1103;
const CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_HUMAN_CUT_BLACK_ID = 1104;
const CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_HUMAN_HALF_NORMAL_ID = 1105;
const CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_HUMAN_HALF_PALE_ID = 1106;
const CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_HUMAN_HALF_BLACK_ID = 1107;
const CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_HUMAN_SKIN_NORMAL_ID = 1108;
const CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_HUMAN_SKIN_PALE_ID = 1109;
const CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_HUMAN_SKIN_BLACK_ID = 1110;
const CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_GOBLIN_NORMAL_ID = 1111;
const CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_GOBLIN_DARK_ID = 1112;
const CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_ORC_NORMAL_ID = 1113;
const CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_ORC_DARK_ID = 1114;
const CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_LIZARDMAN_NORMAL_ID = 1115;
const CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_LIZARDMAN_DARK_ID = 1116;
const CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_SLIME_NORMAL_ID = 1117;
const CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_WEREWOLF_NORMAL_ID = 1118;
const CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_YETI_NORMAL_ID = 1119;
const CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_TYPE_END = 1200;





Game_Actor.prototype.resetCutIn = function() {
	this._tachieCutIn = REM_TACHIE_NULL;
	$gameScreen.erasePicture(PICTURE_CUTIN_ID);
};

Game_Actor.prototype.cutInFrame = function() {
	return this._cutInFrame;
};

Game_Actor.prototype.hasTachieCutInOnScreen = function() {
	return this.tachieCutIn != REM_TACHIE_NULL;
};

Game_Actor.prototype.setTachieCutIn = function(n) {
	if(ConfigManager.remCutinsDisabled) return;
	if(this._tachieCutIn === n) {
		return;
	}
	//console.log(n)
	this._tachieCutIn = n;
	//this._cutInFrame = 0;
	this.setCutInWaitAndDirection(n);
	this.displayCutin();
	//this.setDirty();
};

Game_Actor.prototype.setCutInWaitAndDirection = function(cutInId) {
	let poseName = this.poseName;
	let fileNameNormal = '';
	let fileNameNormalCensored = '';
	let fileNameAnime = '';
	let fileNameAnimeCensored = '';
	let wait = CUTIN_DEFAULT_DURATION;
	let startingX = REM_CUT_IN_RIGHT_X;
	let startingY = REM_CUT_IN_TOP_Y;
	let goalX = REM_CUT_IN_LEFT_X;
	let goalY = REM_CUT_IN_TOP_Y;
	let directionX = -1 * REM_CUT_IN_SPEED_X;
	let directionY = 0;
	let widthScale = 100;
	let heightScale = 100;
	let isHCup = this.boobsSizeIsHCup();
	let isPCup = this.boobsSizeIsPCup();
	//ここから編集してもいい
	
	switch(cutInId) {
		case CUTIN_PETTING_BOOBS_HUMAN_NORMAL_ID:
		case CUTIN_PETTING_BOOBS_HUMAN_PALE_ID:
		case CUTIN_PETTING_BOOBS_HUMAN_BLACK_ID:
		case CUTIN_PETTING_BOOBS_GOBLIN_NORMAL_ID:
		case CUTIN_PETTING_BOOBS_GOBLIN_DARK_ID:
		case CUTIN_PETTING_BOOBS_ORC_NORMAL_ID:
		case CUTIN_PETTING_BOOBS_ORC_DARK_ID:
		case CUTIN_PETTING_BOOBS_LIZARDMAN_NORMAL_ID:
		case CUTIN_PETTING_BOOBS_LIZARDMAN_DARK_ID:
		case CUTIN_PETTING_BOOBS_WEREWOLF_NORMAL_ID:
		case CUTIN_PETTING_BOOBS_YETI_NORMAL_ID:
		case CUTIN_PETTING_BOOBS_SLIME_NORMAL_ID:
			wait = CUTIN_DEFAULT_DURATION; 		//wait = CutInの時間
			startingX 	= REM_CUT_IN_LEFT_X - 10; 		//startingX = CutInが始まる時のX位置
			goalX 		= REM_CUT_IN_RIGHT_X - 10; 		//goalX = CutInが終わる時のX位置
			startingY 	= REM_CUT_IN_BOTTOM_Y + 110; 		//startingY = CutInが始まる時のY位置
			goalY 		= REM_CUT_IN_TOP_Y + 110;		 //goalY = CutInが終わる時のY位置
			directionX = REM_CUT_IN_SPEED_X; 			//directionX = CutInのX方向
			directionY = -1 * REM_CUT_IN_SPEED_Y; 			//directionY = CutInのY方向
			switch(cutInId) {
			case CUTIN_PETTING_BOOBS_HUMAN_NORMAL_ID:
			if(isHCup) {
				fileNameNormal 			= 'cutin_pt_bb_human_normal_hcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_bb_human_normal_hcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_bb_human_normal_hcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_bb_human_normal_hcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else if(isPCup) {
				fileNameNormal 			= 'cutin_pt_bb_human_normal_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_bb_human_normal_pcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_bb_human_normal_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_bb_human_normal_pcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_pt_bb_human_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_bb_human_normal'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_bb_human_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_bb_human_normal_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
				break;
			case CUTIN_PETTING_BOOBS_HUMAN_BLACK_ID:
			if(isHCup) {
				fileNameNormal 			= 'cutin_pt_bb_human_black_hcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_bb_human_black_hcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_bb_human_black_hcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_bb_human_black_hcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else if(isPCup) {
				fileNameNormal 			= 'cutin_pt_bb_human_black_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_bb_human_black_pcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_bb_human_black_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_bb_human_black_pcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_pt_bb_human_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_bb_human_black'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_bb_human_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_bb_human_black_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
				break;
			case CUTIN_PETTING_BOOBS_HUMAN_PALE_ID:
			if(isHCup) {
				fileNameNormal 			= 'cutin_pt_bb_human_pale_hcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_bb_human_pale_hcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_bb_human_pale_hcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_bb_human_pale_hcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else if(isPCup) {
				fileNameNormal 			= 'cutin_pt_bb_human_pale_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_bb_human_pale_pcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_bb_human_pale_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_bb_human_pale_pcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_pt_bb_human_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_bb_human_pale'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_bb_human_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_bb_human_pale_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
				break;
			case CUTIN_PETTING_BOOBS_GOBLIN_NORMAL_ID:
			if(isHCup) {
				fileNameNormal 			= 'cutin_pt_bb_goblin_normal_hcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_bb_goblin_normal_hcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_bb_goblin_normal_hcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_bb_goblin_normal_hcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else if(isPCup) {
				fileNameNormal 			= 'cutin_pt_bb_goblin_normal_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_bb_goblin_normal_pcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_bb_goblin_normal_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_bb_goblin_normal_pcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_pt_bb_goblin_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_bb_goblin_normal'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_bb_goblin_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_bb_goblin_normal_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
				break;
			case CUTIN_PETTING_BOOBS_GOBLIN_DARK_ID:
			if(isHCup) {
				fileNameNormal 			= 'cutin_pt_bb_goblin_dark_hcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_bb_goblin_dark_hcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_bb_goblin_dark_hcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_bb_goblin_dark_hcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else if(isPCup) {
				fileNameNormal 			= 'cutin_pt_bb_goblin_dark_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_bb_goblin_dark_pcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_bb_goblin_dark_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_bb_goblin_dark_pcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_pt_bb_goblin_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_bb_goblin_dark'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_bb_goblin_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_bb_goblin_dark_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
				break;
			case CUTIN_PETTING_BOOBS_ORC_NORMAL_ID:
			if(isHCup) {
				fileNameNormal 			= 'cutin_pt_bb_orc_normal_hcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_bb_orc_normal_hcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_bb_orc_normal_hcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_bb_orc_normal_hcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else if(isPCup) {
				fileNameNormal 			= 'cutin_pt_bb_orc_normal_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_bb_orc_normal_pcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_bb_orc_normal_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_bb_orc_normal_pcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_pt_bb_orc_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_bb_orc_normal'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_bb_orc_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_bb_orc_normal_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
				break;
			case CUTIN_PETTING_BOOBS_ORC_DARK_ID:
			if(isHCup) {
				fileNameNormal 			= 'cutin_pt_bb_orc_dark_hcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_bb_orc_dark_hcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_bb_orc_dark_hcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_bb_orc_dark_hcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else if(isPCup) {
				fileNameNormal 			= 'cutin_pt_bb_orc_dark_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_bb_orc_dark_pcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_bb_orc_dark_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_bb_orc_dark_pcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_pt_bb_orc_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_bb_orc_dark'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_bb_orc_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_bb_orc_dark_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
				break;
			case CUTIN_PETTING_BOOBS_LIZARDMAN_NORMAL_ID:
			if(isHCup) {
				fileNameNormal 			= 'cutin_pt_bb_lizardman_normal_hcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_bb_lizardman_normal_hcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_bb_lizardman_normal_hcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_bb_lizardman_normal_hcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else if(isPCup) {
				fileNameNormal 			= 'cutin_pt_bb_lizardman_normal_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_bb_lizardman_normal_pcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_bb_lizardman_normal_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_bb_lizardman_normal_pcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_pt_bb_lizardman_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_bb_lizardman_normal'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_bb_lizardman_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_bb_lizardman_normal_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
				break;
			case CUTIN_PETTING_BOOBS_LIZARDMAN_DARK_ID:
			if(isHCup) {
				fileNameNormal 			= 'cutin_pt_bb_lizardman_dark_hcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_bb_lizardman_dark_hcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_bb_lizardman_dark_hcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_bb_lizardman_dark_hcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else if(isPCup) {
				fileNameNormal 			= 'cutin_pt_bb_lizardman_dark_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_bb_lizardman_dark_pcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_bb_lizardman_dark_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_bb_lizardman_dark_pcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_pt_bb_lizardman_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_bb_lizardman_dark'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_bb_lizardman_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_bb_lizardman_dark_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
				break;
			case CUTIN_PETTING_BOOBS_WEREWOLF_NORMAL_ID:
			if(isHCup) {
				fileNameNormal 			= 'cutin_pt_bb_werewolf_hcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_bb_werewolf_hcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_bb_werewolf_hcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_bb_werewolf_hcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else if(isPCup) {
				fileNameNormal 			= 'cutin_pt_bb_werewolf_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_bb_werewolf_pcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_bb_werewolf_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_bb_werewolf_pcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_pt_bb_werewolf'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_bb_werewolf'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_bb_werewolf_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_bb_werewolf_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
				break;
			case CUTIN_PETTING_BOOBS_YETI_NORMAL_ID:
			if(isHCup) {
				fileNameNormal 			= 'cutin_pt_bb_yeti_hcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_bb_yeti_hcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_bb_yeti_hcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_bb_yeti_hcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else if(isPCup) {
				fileNameNormal 			= 'cutin_pt_bb_yeti_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_bb_yeti_pcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_bb_yeti_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_bb_yeti_pcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_pt_bb_yeti'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_bb_yeti'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_bb_yeti_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_bb_yeti_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}	
				break;
			case CUTIN_PETTING_BOOBS_SLIME_NORMAL_ID:
			if(isHCup) {
				fileNameNormal 			= 'cutin_pt_bb_slime_hcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_bb_slime_hcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_bb_slime_hcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_bb_slime_hcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else if(isPCup) {
				fileNameNormal 			= 'cutin_pt_bb_slime_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_bb_slime_pcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_bb_slime_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_bb_slime_pcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_pt_bb_slime'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_bb_slime'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_bb_slime_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_bb_slime_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
				break;
			}
			break;
	case CUTIN_PETTING_NIPPLES_HUMAN_NORMAL_ID:
	case CUTIN_PETTING_NIPPLES_HUMAN_PALE_ID:
	case CUTIN_PETTING_NIPPLES_HUMAN_BLACK_ID:
	case CUTIN_PETTING_NIPPLES_GOBLIN_NORMAL_ID:
	case CUTIN_PETTING_NIPPLES_GOBLIN_DARK_ID:
	case CUTIN_PETTING_NIPPLES_ORC_NORMAL_ID:
	case CUTIN_PETTING_NIPPLES_ORC_DARK_ID:
	case CUTIN_PETTING_NIPPLES_LIZARDMAN_NORMAL_ID:
	case CUTIN_PETTING_NIPPLES_LIZARDMAN_DARK_ID:
	case CUTIN_PETTING_NIPPLES_WEREWOLF_NORMAL_ID:
	case CUTIN_PETTING_NIPPLES_YETI_NORMAL_ID:
	case CUTIN_PETTING_NIPPLES_SLIME_NORMAL_ID:
		wait = CUTIN_DEFAULT_DURATION; 		//wait = CutInの時間
		startingX 	= REM_CUT_IN_LEFT_X - 50; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_RIGHT_X - 50; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_TOP_Y + 70; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y + 70; 		//goalY = CutInが終わる時のY位置
		directionX = REM_CUT_IN_SPEED_X; 			//directionX = CutInのX方向
		directionY = 0; 			//directionY = CutInのY方向
		switch(cutInId) {
		case CUTIN_PETTING_NIPPLES_HUMAN_NORMAL_ID:
		if(isHCup) {
			fileNameNormal 			= 'cutin_pt_ns_human_normal_hcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_pt_ns_human_normal_hcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ns_human_normal_hcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ns_human_normal_hcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(isPCup) {
			fileNameNormal 			= 'cutin_pt_ns_human_normal_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_pt_ns_human_normal_pcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ns_human_normal_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ns_human_normal_pcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else {
			fileNameNormal 			= 'cutin_pt_ns_human_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_pt_ns_human_normal'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ns_human_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ns_human_normal_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		break;
		case CUTIN_PETTING_NIPPLES_HUMAN_BLACK_ID:
		if(isHCup) {
			fileNameNormal 			= 'cutin_pt_ns_human_black_hcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_pt_ns_human_black_hcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ns_human_black_hcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ns_human_black_hcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(isPCup) {
			fileNameNormal 			= 'cutin_pt_ns_human_black_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_pt_ns_human_black_pcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ns_human_black_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ns_human_black_pcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else {
			fileNameNormal 			= 'cutin_pt_ns_human_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_pt_ns_human_black'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ns_human_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ns_human_black_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		break;
		case CUTIN_PETTING_NIPPLES_HUMAN_PALE_ID:
		if(isHCup) {
			fileNameNormal 			= 'cutin_pt_ns_human_pale_hcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_pt_ns_human_pale_hcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ns_human_pale_hcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ns_human_pale_hcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(isPCup) {
			fileNameNormal 			= 'cutin_pt_ns_human_pale_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_pt_ns_human_pale_pcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ns_human_pale_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ns_human_pale_pcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else {
			fileNameNormal 			= 'cutin_pt_ns_human_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_pt_ns_human_pale'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ns_human_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ns_human_pale_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		break;
		case CUTIN_PETTING_NIPPLES_GOBLIN_NORMAL_ID:
		if(isHCup) {
			fileNameNormal 			= 'cutin_pt_ns_goblin_normal_hcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_pt_ns_goblin_normal_hcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ns_goblin_normal_hcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ns_goblin_normal_hcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(isPCup) {
			fileNameNormal 			= 'cutin_pt_ns_goblin_normal_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_pt_ns_goblin_normal_pcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ns_goblin_normal_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ns_goblin_normal_pcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else {
			fileNameNormal 			= 'cutin_pt_ns_goblin_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_pt_ns_goblin_normal'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ns_goblin_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ns_goblin_normal_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		break;
		case CUTIN_PETTING_NIPPLES_GOBLIN_DARK_ID:
		if(isHCup) {
			fileNameNormal 			= 'cutin_pt_ns_goblin_dark_hcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_pt_ns_goblin_dark_hcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ns_goblin_dark_hcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ns_goblin_dark_hcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(isPCup) {
			fileNameNormal 			= 'cutin_pt_ns_goblin_dark_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_pt_ns_goblin_dark_pcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ns_goblin_dark_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ns_goblin_dark_pcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else {
			fileNameNormal 			= 'cutin_pt_ns_goblin_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_pt_ns_goblin_dark'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ns_goblin_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ns_goblin_dark_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		break;
		case CUTIN_PETTING_NIPPLES_ORC_NORMAL_ID:
		if(isHCup) {
			fileNameNormal 			= 'cutin_pt_ns_orc_normal_hcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_pt_ns_orc_normal_hcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ns_orc_normal_hcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ns_orc_normal_hcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(isPCup) {
			fileNameNormal 			= 'cutin_pt_ns_orc_normal_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_pt_ns_orc_normal_pcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ns_orc_normal_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ns_orc_normal_pcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else {
			fileNameNormal 			= 'cutin_pt_ns_orc_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_pt_ns_orc_normal'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ns_orc_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ns_orc_normal_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		break;
		case CUTIN_PETTING_NIPPLES_ORC_DARK_ID:
		if(isHCup) {
			fileNameNormal 			= 'cutin_pt_ns_orc_dark_hcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_pt_ns_orc_dark_hcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ns_orc_dark_hcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ns_orc_dark_hcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(isPCup) {
			fileNameNormal 			= 'cutin_pt_ns_orc_dark_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_pt_ns_orc_dark_pcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ns_orc_dark_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ns_orc_dark_pcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else {
			fileNameNormal 			= 'cutin_pt_ns_orc_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_pt_ns_orc_dark'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ns_orc_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ns_orc_dark_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		break;
		case CUTIN_PETTING_NIPPLES_LIZARDMAN_NORMAL_ID:
		if(isHCup) {
			fileNameNormal 			= 'cutin_pt_ns_lizardman_normal_hcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_pt_ns_lizardman_normal_hcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ns_lizardman_normal_hcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ns_lizardman_normal_hcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(isPCup) {
			fileNameNormal 			= 'cutin_pt_ns_lizardman_normal_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_pt_ns_lizardman_normal_pcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ns_lizardman_normal_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ns_lizardman_normal_pcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else {
			fileNameNormal 			= 'cutin_pt_ns_lizardman_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_pt_ns_lizardman_normal'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ns_lizardman_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ns_lizardman_normal_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		break;
		case CUTIN_PETTING_NIPPLES_LIZARDMAN_DARK_ID:
		if(isHCup) {
			fileNameNormal 			= 'cutin_pt_ns_lizardman_dark_hcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_pt_ns_lizardman_dark_hcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ns_lizardman_dark_hcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ns_lizardman_dark_hcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(isPCup) {
			fileNameNormal 			= 'cutin_pt_ns_lizardman_dark_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_pt_ns_lizardman_dark_pcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ns_lizardman_dark_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ns_lizardman_dark_pcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else {
			fileNameNormal 			= 'cutin_pt_ns_lizardman_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_pt_ns_lizardman_dark'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ns_lizardman_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ns_lizardman_dark_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		break;
		case CUTIN_PETTING_NIPPLES_WEREWOLF_NORMAL_ID:
		if(isHCup) {
			fileNameNormal 			= 'cutin_pt_ns_werewolf_hcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_pt_ns_werewolf_hcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ns_werewolf_hcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ns_werewolf_hcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(isPCup) {
			fileNameNormal 			= 'cutin_pt_ns_werewolf_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_pt_ns_werewolf_pcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ns_werewolf_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ns_werewolf_pcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else {
			fileNameNormal 			= 'cutin_pt_ns_werewolf'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_pt_ns_werewolf'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ns_werewolf_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ns_werewolf_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		break;
		case CUTIN_PETTING_NIPPLES_YETI_NORMAL_ID:
		if(isHCup) {
			fileNameNormal 			= 'cutin_pt_ns_yeti_hcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_pt_ns_yeti_hcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ns_yeti_hcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ns_yeti_hcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(isPCup) {
			fileNameNormal 			= 'cutin_pt_ns_yeti_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_pt_ns_yeti_pcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ns_yeti_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ns_yeti_pcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else {
			fileNameNormal 			= 'cutin_pt_ns_yeti'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_pt_ns_yeti'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ns_yeti_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ns_yeti_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		break;
		case CUTIN_PETTING_NIPPLES_SLIME_NORMAL_ID:
		if(isHCup) {
			fileNameNormal 			= 'cutin_pt_ns_slime_hcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_pt_ns_slime_hcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ns_slime_hcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ns_slime_hcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(isPCup) {
			fileNameNormal 			= 'cutin_pt_ns_slime_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_pt_ns_slime_pcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ns_slime_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ns_slime_pcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else {
			fileNameNormal 			= 'cutin_pt_ns_slime'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_pt_ns_slime'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ns_slime_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ns_slime_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		break;
		}
	break;
	case CUTIN_PETTING_CLIT_HUMAN_NORMAL_ID:
	case CUTIN_PETTING_CLIT_HUMAN_PALE_ID:
	case CUTIN_PETTING_CLIT_HUMAN_BLACK_ID:
	case CUTIN_PETTING_CLIT_GOBLIN_NORMAL_ID:
	case CUTIN_PETTING_CLIT_GOBLIN_DARK_ID:
	case CUTIN_PETTING_CLIT_ORC_NORMAL_ID:
	case CUTIN_PETTING_CLIT_ORC_DARK_ID:
	case CUTIN_PETTING_CLIT_LIZARDMAN_NORMAL_ID:
	case CUTIN_PETTING_CLIT_LIZARDMAN_DARK_ID:
	case CUTIN_PETTING_CLIT_WEREWOLF_NORMAL_ID:
	case CUTIN_PETTING_CLIT_YETI_NORMAL_ID:
		wait = 117; 		//wait = CutInの時間
		startingX 	= REM_CUT_IN_RIGHT_X + 40; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_LEFT_X + 40; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_TOP_Y + 80; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y + 80; 		//goalY = CutInが終わる時のY位置
		directionX = -1 * REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = 0; 				//directionY = CutInのY方向
		switch(cutInId) {
		case CUTIN_PETTING_CLIT_HUMAN_NORMAL_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_pt_ct_human_normal_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_ct_human_normal_pcup_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_ct_human_normal_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_ct_human_normal_pcup_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_pt_ct_human_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_ct_human_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_ct_human_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_ct_human_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		case CUTIN_PETTING_CLIT_HUMAN_BLACK_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_pt_ct_human_black_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_ct_human_black_pcup_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_ct_human_black_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_ct_human_black_pcup_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_pt_ct_human_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_ct_human_black_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_ct_human_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_ct_human_black_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		case CUTIN_PETTING_CLIT_HUMAN_PALE_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_pt_ct_human_pale_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_ct_human_pale_pcup_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_ct_human_pale_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_ct_human_pale_pcup_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_pt_ct_human_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_ct_human_pale_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_ct_human_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_ct_human_pale_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		case CUTIN_PETTING_CLIT_GOBLIN_NORMAL_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_pt_ct_goblin_normal_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_ct_goblin_normal_pcup_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_ct_goblin_normal_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_ct_goblin_normal_pcup_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_pt_ct_goblin_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_ct_goblin_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_ct_goblin_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_ct_goblin_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		case CUTIN_PETTING_CLIT_GOBLIN_DARK_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_pt_ct_goblin_dark_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_ct_goblin_dark_pcup_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_ct_goblin_dark_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_ct_goblin_dark_pcup_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_pt_ct_goblin_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_ct_goblin_dark_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_ct_goblin_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_ct_goblin_dark_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		case CUTIN_PETTING_CLIT_ORC_NORMAL_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_pt_ct_orc_normal_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_ct_orc_normal_pcup_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_ct_orc_normal_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_ct_orc_normal_pcup_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_pt_ct_orc_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_ct_orc_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_ct_orc_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_ct_orc_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		case CUTIN_PETTING_CLIT_ORC_DARK_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_pt_ct_orc_dark_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_ct_orc_dark_pcup_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_ct_orc_dark_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_ct_orc_dark_pcup_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_pt_ct_orc_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_ct_orc_dark_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_ct_orc_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_ct_orc_dark_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		case CUTIN_PETTING_CLIT_LIZARDMAN_NORMAL_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_pt_ct_lizardman_normal_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_ct_lizardman_normal_pcup_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_ct_lizardman_normal_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_ct_lizardman_normal_pcup_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_pt_ct_lizardman_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_ct_lizardman_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_ct_lizardman_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_ct_lizardman_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		case CUTIN_PETTING_CLIT_LIZARDMAN_DARK_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_pt_ct_lizardman_dark_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_ct_lizardman_dark_pcup_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_ct_lizardman_dark_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_ct_lizardman_dark_pcup_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_pt_ct_lizardman_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_ct_lizardman_dark_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_ct_lizardman_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_ct_lizardman_dark_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		case CUTIN_PETTING_CLIT_WEREWOLF_NORMAL_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_pt_ct_werewolf_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_ct_werewolf_pcup_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_ct_werewolf_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_ct_werewolf_pcup_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_pt_ct_werewolf'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_ct_werewolf_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_ct_werewolf_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_ct_werewolf_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		case CUTIN_PETTING_CLIT_YETI_NORMAL_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_pt_ct_yeti_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_ct_yeti_pcup_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_ct_yeti_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_ct_yeti_pcup_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_pt_ct_yeti'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_ct_yeti_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_ct_yeti_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_ct_yeti_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		}
	break;
	case CUTIN_PETTING_PUSSY_HUMAN_NORMAL_ID:
	case CUTIN_PETTING_PUSSY_HUMAN_PALE_ID:
	case CUTIN_PETTING_PUSSY_HUMAN_BLACK_ID:
	case CUTIN_PETTING_PUSSY_GOBLIN_NORMAL_ID:
	case CUTIN_PETTING_PUSSY_GOBLIN_DARK_ID:
	case CUTIN_PETTING_PUSSY_LIZARDMAN_NORMAL_ID:
	case CUTIN_PETTING_PUSSY_LIZARDMAN_DARK_ID:
	case CUTIN_PETTING_PUSSY_ORC_NORMAL_ID:
	case CUTIN_PETTING_PUSSY_ORC_DARK_ID:
	case CUTIN_PETTING_PUSSY_WEREWOLF_NORMAL_ID:
	case CUTIN_PETTING_PUSSY_YETI_NORMAL_ID:
		wait = 82; 		//wait = CutInの時間
		startingX 	= REM_CUT_IN_RIGHT_X + 40; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_LEFT_X + 40; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_TOP_Y + 80; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y + 80; 		//goalY = CutInが終わる時のY位置
		directionX = REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
		switch(cutInId) {
		case CUTIN_PETTING_PUSSY_HUMAN_NORMAL_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_pt_ps_human_normal_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_ps_human_normal_pcup_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_ps_human_normal_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_ps_human_normal_pcup_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_pt_ps_human_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_ps_human_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_ps_human_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_ps_human_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		case CUTIN_PETTING_PUSSY_HUMAN_BLACK_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_pt_ps_human_black_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_ps_human_black_pcup_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_ps_human_black_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_ps_human_black_pcup_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_pt_ps_human_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_ps_human_black_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_ps_human_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_ps_human_black_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		case CUTIN_PETTING_PUSSY_HUMAN_PALE_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_pt_ps_human_pale_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_ps_human_pale_pcup_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_ps_human_pale_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_ps_human_pale_pcup_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_pt_ps_human_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_ps_human_pale_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_ps_human_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_ps_human_pale_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		case CUTIN_PETTING_PUSSY_GOBLIN_NORMAL_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_pt_ps_goblin_normal_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_ps_goblin_normal_pcup_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_ps_goblin_normal_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_ps_goblin_normal_pcup_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_pt_ps_goblin_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_ps_goblin_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_ps_goblin_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_ps_goblin_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		case CUTIN_PETTING_PUSSY_GOBLIN_DARK_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_pt_ps_goblin_dark_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_ps_goblin_dark_pcup_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_ps_goblin_dark_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_ps_goblin_dark_pcup_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_pt_ps_goblin_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_ps_goblin_dark_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_ps_goblin_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_ps_goblin_dark_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		case CUTIN_PETTING_PUSSY_ORC_NORMAL_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_pt_ps_orc_normal_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_ps_orc_normal_pcup_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_ps_orc_normal_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_ps_orc_normal_pcup_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_pt_ps_orc_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_ps_orc_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_ps_orc_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_ps_orc_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		case CUTIN_PETTING_PUSSY_ORC_DARK_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_pt_ps_orc_dark_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_ps_orc_dark_pcup_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_ps_orc_dark_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_ps_orc_dark_pcup_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_pt_ps_orc_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_ps_orc_dark_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_ps_orc_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_ps_orc_dark_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		case CUTIN_PETTING_PUSSY_LIZARDMAN_NORMAL_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_pt_ps_lizardman_normal_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_ps_lizardman_normal_pcup_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_ps_lizardman_normal_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_ps_lizardman_normal_pcup_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_pt_ps_lizardman_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_ps_lizardman_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_ps_lizardman_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_ps_lizardman_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		case CUTIN_PETTING_PUSSY_LIZARDMAN_DARK_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_pt_ps_lizardman_dark_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_ps_lizardman_dark_pcup_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_ps_lizardman_dark_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_ps_lizardman_dark_pcup_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_pt_ps_lizardman_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_ps_lizardman_dark_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_ps_lizardman_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_ps_lizardman_dark_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		case CUTIN_PETTING_PUSSY_WEREWOLF_NORMAL_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_pt_ps_werewolf_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_ps_werewolf_pcup_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_ps_werewolf_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_ps_werewolf_pcup_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_pt_ps_werewolf'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_ps_werewolf_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_ps_werewolf_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_ps_werewolf_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		case CUTIN_PETTING_PUSSY_YETI_NORMAL_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_pt_ps_yeti_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_ps_yeti_pcup_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_ps_yeti_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_ps_yeti_pcup_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_pt_ps_yeti'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_ps_yeti_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_ps_yeti_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_ps_yeti_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		}
	break;
	case CUTIN_PETTING_BUTT_HUMAN_NORMAL_ID:
	case CUTIN_PETTING_BUTT_HUMAN_PALE_ID:
	case CUTIN_PETTING_BUTT_HUMAN_BLACK_ID:
	case CUTIN_PETTING_BUTT_ORC_NORMAL_ID:
	case CUTIN_PETTING_BUTT_ORC_DARK_ID:
	case CUTIN_PETTING_BUTT_LIZARDMAN_NORMAL_ID:
	case CUTIN_PETTING_BUTT_LIZARDMAN_DARK_ID:
	case CUTIN_PETTING_BUTT_WEREWOLF_NORMAL_ID:
		wait = CUTIN_DEFAULT_DURATION; 		//wait = CutInの時間
		startingX 	= REM_CUT_IN_LEFT_X; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_RIGHT_X; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_TOP_Y; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y; 		//goalY = CutInが終わる時のY位置
		directionX = REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = 0; 				//directionY = CutInのY方向
		switch(cutInId) {
		case CUTIN_PETTING_BUTT_HUMAN_NORMAL_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_pt_bt_human_normal_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_bt_human_normal_pcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_bt_human_normal_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_bt_human_normal_pcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_pt_bt_human_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_bt_human_normal'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_bt_human_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_bt_human_normal_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		case CUTIN_PETTING_BUTT_HUMAN_PALE_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_pt_bt_human_pale_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_bt_human_pale_pcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_bt_human_pale_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_bt_human_pale_pcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_pt_bt_human_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_bt_human_pale'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_bt_human_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_bt_human_pale_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		case CUTIN_PETTING_BUTT_HUMAN_BLACK_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_pt_bt_human_black_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_bt_human_black_pcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_bt_human_black_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_bt_human_black_pcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_pt_bt_human_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_bt_human_black'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_bt_human_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_bt_human_black_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		case CUTIN_PETTING_BUTT_ORC_NORMAL_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_pt_bt_orc_normal_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_bt_orc_normal_pcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_bt_orc_normal_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_bt_orc_normal_pcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_pt_bt_orc_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_bt_orc_normal'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_bt_orc_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_bt_orc_normal_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		case CUTIN_PETTING_BUTT_ORC_DARK_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_pt_bt_orc_dark_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_bt_orc_dark_pcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_bt_orc_dark_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_bt_orc_dark_pcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_pt_bt_orc_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_bt_orc_dark'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_bt_orc_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_bt_orc_dark_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		case CUTIN_PETTING_BUTT_LIZARDMAN_NORMAL_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_pt_bt_lizardman_normal_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_bt_lizardman_normal_pcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_bt_lizardman_normal_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_bt_lizardman_normal_pcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_pt_bt_lizardman_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_bt_lizardman_normal'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_bt_lizardman_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_bt_lizardman_normal_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		case CUTIN_PETTING_BUTT_LIZARDMAN_DARK_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_pt_bt_lizardman_dark_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_bt_lizardman_dark_pcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_bt_lizardman_dark_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_bt_lizardman_dark_pcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_pt_bt_lizardman_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_bt_lizardman_dark'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_bt_lizardman_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_bt_lizardman_dark_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		case CUTIN_PETTING_BUTT_WEREWOLF_NORMAL_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_pt_bt_werewolf_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_bt_werewolf_pcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_bt_werewolf_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_bt_werewolf_pcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_pt_bt_werewolf'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_bt_werewolf'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_bt_werewolf_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_bt_werewolf_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		}
	break;
	case CUTIN_PETTING_BUTT_GOBLIN_NORMAL_ID:
	case CUTIN_PETTING_BUTT_GOBLIN_DARK_ID:
	case CUTIN_PETTING_BUTT_YETI_NORMAL_ID:
	case CUTIN_PETTING_BUTT_SLIME_NORMAL_ID:
		wait = 62; 		//wait = CutInの時間
		startingX 	= REM_CUT_IN_RIGHT_X; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_RIGHT_X; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_TOP_Y + 280; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y + 180; 		//goalY = CutInが終わる時のY位置
		directionX = REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = -1 * REM_CUT_IN_SPEED_Y; 		//directionY = CutInのY方向
		switch(cutInId) {
		case CUTIN_PETTING_BUTT_GOBLIN_NORMAL_ID:
			fileNameNormal 			= 'cutin_pt_bt_goblin_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_pt_bt_goblin_normal'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_bt_goblin_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_bt_goblin_normal_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_PETTING_BUTT_GOBLIN_DARK_ID:
			fileNameNormal 			= 'cutin_pt_bt_goblin_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_pt_bt_goblin_dark'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_bt_goblin_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_bt_goblin_dark_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_PETTING_BUTT_YETI_NORMAL_ID:
			fileNameNormal 			= 'cutin_pt_bt_yeti'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_pt_bt_yeti'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_bt_yeti_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_bt_yeti_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_PETTING_BUTT_SLIME_NORMAL_ID:
			fileNameNormal 			= 'cutin_pt_bt_slime'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_pt_bt_slime'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_bt_slime_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_bt_slime_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		}
	break;
	case CUTIN_PETTING_ANAL_HUMAN_NORMAL_ID:
	case CUTIN_PETTING_ANAL_HUMAN_PALE_ID:
	case CUTIN_PETTING_ANAL_HUMAN_BLACK_ID:
	case CUTIN_PETTING_ANAL_GOBLIN_NORMAL_ID:
	case CUTIN_PETTING_ANAL_GOBLIN_DARK_ID:
	case CUTIN_PETTING_ANAL_ORC_NORMAL_ID:
	case CUTIN_PETTING_ANAL_ORC_DARK_ID:
	case CUTIN_PETTING_ANAL_LIZARDMAN_NORMAL_ID:
	case CUTIN_PETTING_ANAL_LIZARDMAN_DARK_ID:
	case CUTIN_PETTING_ANAL_WEREWOLF_NORMAL_ID:
	case CUTIN_PETTING_ANAL_YETI_NORMAL_ID:
	case CUTIN_PETTING_ANAL_SLIME_NORMAL_ID:
		wait = CUTIN_DEFAULT_DURATION; 		//wait = CutInの時間
		startingX 	= REM_CUT_IN_LEFT_X - 90; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_RIGHT_X - 90; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_TOP_Y + 70; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_BOTTOM_Y + 70; 		//goalY = CutInが終わる時のY位置
		directionX = REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = REM_CUT_IN_SPEED_Y; 		//directionY = CutInのY方向
		switch(cutInId) {
		case CUTIN_PETTING_ANAL_HUMAN_NORMAL_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_pt_an_human_normal_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_an_human_normal_pcup_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_an_human_normal_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_an_human_normal_pcup_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_pt_an_human_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_an_human_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_an_human_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_an_human_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		case CUTIN_PETTING_ANAL_HUMAN_PALE_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_pt_an_human_pale_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_an_human_pale_pcup_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_an_human_pale_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_an_human_pale_pcup_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_pt_an_human_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_an_human_pale_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_an_human_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_an_human_pale_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		case CUTIN_PETTING_ANAL_HUMAN_BLACK_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_pt_an_human_black_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_an_human_black_pcup_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_an_human_black_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_an_human_black_pcup_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_pt_an_human_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_an_human_black_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_an_human_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_an_human_black_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		case CUTIN_PETTING_ANAL_GOBLIN_NORMAL_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_pt_an_goblin_normal_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_an_goblin_normal_pcup_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_an_goblin_normal_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_an_goblin_normal_pcup_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_pt_an_goblin_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_an_goblin_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_an_goblin_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_an_goblin_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		case CUTIN_PETTING_ANAL_GOBLIN_DARK_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_pt_an_goblin_dark_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_an_goblin_dark_pcup_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_an_goblin_dark_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_an_goblin_dark_pcup_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_pt_an_goblin_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_an_goblin_dark_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_an_goblin_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_an_goblin_dark_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		case CUTIN_PETTING_ANAL_ORC_NORMAL_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_pt_an_orc_normal_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_an_orc_normal_pcup_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_an_orc_normal_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_an_orc_normal_pcup_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_pt_an_orc_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_an_orc_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_an_orc_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_an_orc_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		case CUTIN_PETTING_ANAL_ORC_DARK_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_pt_an_orc_dark_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_an_orc_dark_pcup_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_an_orc_dark_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_an_orc_dark_pcup_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_pt_an_orc_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_an_orc_dark_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_an_orc_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_an_orc_dark_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		case CUTIN_PETTING_ANAL_LIZARDMAN_NORMAL_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_pt_an_lizardman_normal_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_an_lizardman_normal_pcup_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_an_lizardman_normal_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_an_lizardman_normal_pcup_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_pt_an_lizardman_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_an_lizardman_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_an_lizardman_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_an_lizardman_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		case CUTIN_PETTING_ANAL_LIZARDMAN_DARK_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_pt_an_lizardman_dark_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_an_lizardman_dark_pcup_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_an_lizardman_dark_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_an_lizardman_dark_pcup_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_pt_an_lizardman_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_an_lizardman_dark_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_an_lizardman_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_an_lizardman_dark_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		case CUTIN_PETTING_ANAL_WEREWOLF_NORMAL_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_pt_an_werewolf_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_an_werewolf_pcup_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_an_werewolf_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_an_werewolf_pcup_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_pt_an_werewolf'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_an_werewolf_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_an_werewolf_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_an_werewolf_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		case CUTIN_PETTING_ANAL_YETI_NORMAL_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_pt_an_yeti_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_an_yeti_pcup_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_an_yeti_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_an_yeti_pcup_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_pt_an_yeti'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_an_yeti_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_an_yeti_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_an_yeti_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		case CUTIN_PETTING_ANAL_SLIME_NORMAL_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_pt_an_slime_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_an_slime_pcup_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_an_slime_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_an_slime_pcup_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_pt_an_slime'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_pt_an_slime_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_pt_an_slime_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_pt_an_slime_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		}
	break;
	case CUTIN_SUCKING_FINGERS_ENEMY_HUMAN_NORMAL_ID:		//指を吸わせる ↑
	case CUTIN_SUCKING_FINGERS_ENEMY_HUMAN_PALE_ID:
	case CUTIN_SUCKING_FINGERS_ENEMY_HUMAN_BLACK_ID:
	case CUTIN_SUCKING_FINGERS_ENEMY_GOBLIN_NORMAL_ID:
	case CUTIN_SUCKING_FINGERS_ENEMY_GOBLIN_DARK_ID:
	case CUTIN_SUCKING_FINGERS_ENEMY_LIZARDMAN_NORMAL_ID:
	case CUTIN_SUCKING_FINGERS_ENEMY_LIZARDMAN_DARK_ID:
	case CUTIN_SUCKING_FINGERS_ENEMY_ORC_NORMAL_ID:
	case CUTIN_SUCKING_FINGERS_ENEMY_ORC_DARK_ID:
	case CUTIN_SUCKING_FINGERS_ENEMY_YETI_NORMAL_ID:
		wait = CUTIN_DEFAULT_DURATION; 		//wait = CutInの時間
		startingX 	= REM_CUT_IN_RIGHT_X; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_RIGHT_X; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_BOTTOM_Y + 220; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y + 220; 		//goalY = CutInが終わる時のY位置
		directionX = 0; 		//directionX = CutInのX方向
		directionY = -1 * REM_CUT_IN_SPEED_Y; 		//directionY = CutInのY方向
		switch(cutInId) {
		case CUTIN_SUCKING_FINGERS_ENEMY_HUMAN_NORMAL_ID:
			fileNameNormal 			= 'cutin_fg_sc_human_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_fg_sc_human_normal'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_fg_sc_human_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_fg_sc_human_normal_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_SUCKING_FINGERS_ENEMY_HUMAN_PALE_ID:
			fileNameNormal 			= 'cutin_fg_sc_human_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_fg_sc_human_pale'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_fg_sc_human_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_fg_sc_human_pale_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_SUCKING_FINGERS_ENEMY_HUMAN_BLACK_ID:
			fileNameNormal 			= 'cutin_fg_sc_human_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_fg_sc_human_black'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_fg_sc_human_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_fg_sc_human_black_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_SUCKING_FINGERS_ENEMY_GOBLIN_NORMAL_ID:
			fileNameNormal 			= 'cutin_fg_sc_goblin_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_fg_sc_goblin_normal'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_fg_sc_goblin_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_fg_sc_goblin_normal_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_SUCKING_FINGERS_ENEMY_GOBLIN_DARK_ID:
			fileNameNormal 			= 'cutin_fg_sc_goblin_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_fg_sc_goblin_dark'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_fg_sc_goblin_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_fg_sc_goblin_dark_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_SUCKING_FINGERS_ENEMY_LIZARDMAN_NORMAL_ID:
			fileNameNormal 			= 'cutin_fg_sc_lizardman_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_fg_sc_lizardman_normal'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_fg_sc_lizardman_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_fg_sc_lizardman_normal_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_SUCKING_FINGERS_ENEMY_LIZARDMAN_DARK_ID:
			fileNameNormal 			= 'cutin_fg_sc_lizardman_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_fg_sc_lizardman_dark'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_fg_sc_lizardman_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_fg_sc_lizardman_dark_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_SUCKING_FINGERS_ENEMY_ORC_NORMAL_ID:
			fileNameNormal 			= 'cutin_fg_sc_orc_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_fg_sc_orc_normal'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_fg_sc_orc_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_fg_sc_orc_normal_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_SUCKING_FINGERS_ENEMY_ORC_DARK_ID:
			fileNameNormal 			= 'cutin_fg_sc_orc_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_fg_sc_orc_dark'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_fg_sc_orc_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_fg_sc_orc_dark_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_SUCKING_FINGERS_ENEMY_YETI_NORMAL_ID:
			fileNameNormal 			= 'cutin_fg_sc_yeti'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_fg_sc_yeti'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_fg_sc_yeti_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_fg_sc_yeti_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		}
	break;
	case CUTIN_SPANKING_ONE_NAME:
		wait = 54; 		//wait = CutInの時間
		if(isPCup) {
			fileNameNormal 			= 'cutin_bs1_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_bs1_pcup_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_bs1_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_bs1_pcup_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else {
			fileNameNormal 			= 'cutin_bs1'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_bs1_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_bs1_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_bs1_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		startingX 	= REM_CUT_IN_RIGHT_X; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_RIGHT_X; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_TOP_Y + 20; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y + 20; 		//goalY = CutInが終わる時のY位置
		directionX = 0; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
	break;
	case CUTIN_SPANKING_TWO_NAME:
		wait = 54; 		//wait = CutInの時間
		if(isPCup) {
			fileNameNormal 			= 'cutin_bs2_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_bs2_pcup_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_bs2_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_bs2_pcup_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else {
			fileNameNormal 			= 'cutin_bs2'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_bs2_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_bs2_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_bs2_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		startingX 	= REM_CUT_IN_RIGHT_X; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_RIGHT_X; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_TOP_Y + 20; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y + 20; 		//goalY = CutInが終わる時のY位置
		directionX = 0; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
	break;
	case CUTIN_SPANKING_THREE_NAME:
		wait = 54; 		//wait = CutInの時間
		if(isPCup) {
			fileNameNormal 			= 'cutin_bs3_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_bs3_pcup_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_bs3_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_bs3_pcup_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else {
			fileNameNormal 			= 'cutin_bs3'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_bs3_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_bs3_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_bs3_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		startingX 	= REM_CUT_IN_RIGHT_X; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_RIGHT_X; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_TOP_Y + 20; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y + 20; 		//goalY = CutInが終わる時のY位置
		directionX = 0; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
	break;
	case CUTIN_EJACULATE_MOUTH_HUMAN_NORMAL_ID:
	case CUTIN_EJACULATE_MOUTH_HUMAN_PALE_ID:
	case CUTIN_EJACULATE_MOUTH_HUMAN_BLACK_ID:
	case CUTIN_EJACULATE_MOUTH_GOBLIN_NORMAL_ID:
	case CUTIN_EJACULATE_MOUTH_GOBLIN_DARK_ID:
	case CUTIN_EJACULATE_MOUTH_LIZARDMAN_NORMAL_ID:
	case CUTIN_EJACULATE_MOUTH_LIZARDMAN_DARK_ID:
	case CUTIN_EJACULATE_MOUTH_ORC_NORMAL_ID:
	case CUTIN_EJACULATE_MOUTH_ORC_DARK_ID:
	case CUTIN_EJACULATE_MOUTH_SLIME_NORMAL_ID:
	case CUTIN_EJACULATE_MOUTH_WEREWOLF_NORMAL_ID:
	case CUTIN_EJACULATE_MOUTH_YETI_NORMAL_ID:
		wait = CUTIN_DEFAULT_DURATION; 		//wait = CutInの時間
		startingX 	= REM_CUT_IN_RIGHT_X - 10; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_LEFT_X - 10; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_TOP_Y + 160; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y + 160; 		//goalY = CutInが終わる時のY位置
		directionX = -1 * REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
		switch(cutInId) {
		case CUTIN_EJACULATE_MOUTH_HUMAN_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_m_human_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ej_m_human_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_m_human_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_m_human_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_MOUTH_HUMAN_PALE_ID:
			fileNameNormal 			= 'cutin_ej_m_human_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ej_m_human_pale_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_m_human_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_m_human_pale_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_MOUTH_HUMAN_BLACK_ID:
			fileNameNormal 			= 'cutin_ej_m_human_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ej_m_human_black_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_m_human_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_m_human_black_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_MOUTH_GOBLIN_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_m_goblin_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ej_m_goblin_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_m_goblin_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_m_goblin_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_MOUTH_GOBLIN_DARK_ID:
			fileNameNormal 			= 'cutin_ej_m_goblin_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ej_m_goblin_dark_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_m_goblin_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_m_goblin_dark_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_MOUTH_LIZARDMAN_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_m_lizardman_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ej_m_lizardman_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_m_lizardman_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_m_lizardman_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_MOUTH_LIZARDMAN_DARK_ID:
			fileNameNormal 			= 'cutin_ej_m_lizardman_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ej_m_lizardman_dark_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_m_lizardman_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_m_lizardman_dark_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_MOUTH_ORC_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_m_orc_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ej_m_orc_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_m_orc_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_m_orc_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_MOUTH_ORC_DARK_ID:
			fileNameNormal 			= 'cutin_ej_m_orc_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ej_m_orc_dark_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_m_orc_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_m_orc_dark_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_MOUTH_SLIME_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_m_slime'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ej_m_slime'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_m_slime_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_m_slime_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_MOUTH_WEREWOLF_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_m_werewolf'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ej_m_werewolf_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_m_werewolf_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_m_werewolf_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_MOUTH_YETI_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_m_yeti'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ej_m_yeti_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_m_yeti_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_m_yeti_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		}
	break;
	case CUTIN_EJACULATE_BUKKAKE_REG_HUMAN_CUT_NORMAL_ID:
	case CUTIN_EJACULATE_BUKKAKE_REG_HUMAN_CUT_PALE_ID:
	case CUTIN_EJACULATE_BUKKAKE_REG_HUMAN_CUT_BLACK_ID:
	case CUTIN_EJACULATE_BUKKAKE_REG_HUMAN_HALF_NORMAL_ID:
	case CUTIN_EJACULATE_BUKKAKE_REG_HUMAN_HALF_PALE_ID:
	case CUTIN_EJACULATE_BUKKAKE_REG_HUMAN_HALF_BLACK_ID:
	case CUTIN_EJACULATE_BUKKAKE_REG_HUMAN_SKIN_NORMAL_ID:
	case CUTIN_EJACULATE_BUKKAKE_REG_HUMAN_SKIN_PALE_ID:
	case CUTIN_EJACULATE_BUKKAKE_REG_HUMAN_SKIN_BLACK_ID:
	case CUTIN_EJACULATE_BUKKAKE_REG_GOBLIN_NORMAL_ID:
	case CUTIN_EJACULATE_BUKKAKE_REG_GOBLIN_DARK_ID:
	case CUTIN_EJACULATE_BUKKAKE_REG_ORC_NORMAL_ID:
	case CUTIN_EJACULATE_BUKKAKE_REG_ORC_DARK_ID:
	case CUTIN_EJACULATE_BUKKAKE_REG_LIZARDMAN_NORMAL_ID:
	case CUTIN_EJACULATE_BUKKAKE_REG_LIZARDMAN_DARK_ID:
	case CUTIN_EJACULATE_BUKKAKE_REG_SLIME_NORMAL_ID:
	case CUTIN_EJACULATE_BUKKAKE_REG_WEREWOLF_NORMAL_ID:
	case CUTIN_EJACULATE_BUKKAKE_REG_YETI_NORMAL_ID:
		wait = CUTIN_DEFAULT_DURATION; 		//wait = CutInの時間
		startingX 	= REM_CUT_IN_LEFT_X; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_RIGHT_X; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_TOP_Y + 91; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y + 91; 		//goalY = CutInが終わる時のY位置
		directionX = REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
		switch(cutInId) {
		case CUTIN_EJACULATE_BUKKAKE_REG_HUMAN_CUT_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_bk_human_cut_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_human_cut_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_human_cut_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_human_cut_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_BUKKAKE_REG_HUMAN_CUT_PALE_ID:
			fileNameNormal 			= 'cutin_ej_bk_human_cut_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_human_cut_pale_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_human_cut_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_human_cut_pale_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_BUKKAKE_REG_HUMAN_CUT_BLACK_ID:
			fileNameNormal 			= 'cutin_ej_bk_human_cut_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_human_cut_black_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_human_cut_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_human_cut_black_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_BUKKAKE_REG_HUMAN_HALF_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_bk_human_half_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_human_half_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_human_half_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_human_half_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_BUKKAKE_REG_HUMAN_HALF_PALE_ID:
			fileNameNormal 			= 'cutin_ej_bk_human_half_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_human_half_pale_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_human_half_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_human_half_pale_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_BUKKAKE_REG_HUMAN_HALF_BLACK_ID:
			fileNameNormal 			= 'cutin_ej_bk_human_half_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_human_half_black_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_human_half_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_human_half_black_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_BUKKAKE_REG_HUMAN_SKIN_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_bk_human_skin_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_human_skin_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_human_skin_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_human_skin_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_BUKKAKE_REG_HUMAN_SKIN_PALE_ID:
			fileNameNormal 			= 'cutin_ej_bk_human_skin_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_human_skin_pale_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_human_skin_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_human_skin_pale_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_BUKKAKE_REG_HUMAN_SKIN_BLACK_ID:
			fileNameNormal 			= 'cutin_ej_bk_human_skin_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_human_skin_black_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_human_skin_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_human_skin_black_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_BUKKAKE_REG_GOBLIN_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_bk_goblin_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_goblin_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_goblin_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_goblin_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_BUKKAKE_REG_GOBLIN_DARK_ID:
			fileNameNormal 			= 'cutin_ej_bk_goblin_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_goblin_dark_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_goblin_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_goblin_dark_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_BUKKAKE_REG_ORC_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_bk_orc_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_orc_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_orc_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_orc_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_BUKKAKE_REG_ORC_DARK_ID:
			fileNameNormal 			= 'cutin_ej_bk_orc_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_orc_dark_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_orc_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_orc_dark_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_BUKKAKE_REG_LIZARDMAN_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_bk_lizardman_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_lizardman_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_lizardman_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_lizardman_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_BUKKAKE_REG_LIZARDMAN_DARK_ID:
			fileNameNormal 			= 'cutin_ej_bk_lizardman_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_lizardman_dark_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_lizardman_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_lizardman_dark_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_BUKKAKE_REG_SLIME_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_bk_slime'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_slime_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_slime_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_slime_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_BUKKAKE_REG_WEREWOLF_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_bk_werewolf'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_werewolf_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_werewolf_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_werewolf_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_BUKKAKE_REG_YETI_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_bk_yeti'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_yeti_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_yeti_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_yeti_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		}
	break;
	case CUTIN_EJACULATE_BUKKAKE_MIRROR_HUMAN_CUT_NORMAL_ID:
	case CUTIN_EJACULATE_BUKKAKE_MIRROR_HUMAN_CUT_PALE_ID:
	case CUTIN_EJACULATE_BUKKAKE_MIRROR_HUMAN_CUT_BLACK_ID:
	case CUTIN_EJACULATE_BUKKAKE_MIRROR_HUMAN_HALF_NORMAL_ID:
	case CUTIN_EJACULATE_BUKKAKE_MIRROR_HUMAN_HALF_PALE_ID:
	case CUTIN_EJACULATE_BUKKAKE_MIRROR_HUMAN_HALF_BLACK_ID:
	case CUTIN_EJACULATE_BUKKAKE_MIRROR_HUMAN_SKIN_NORMAL_ID:
	case CUTIN_EJACULATE_BUKKAKE_MIRROR_HUMAN_SKIN_PALE_ID:
	case CUTIN_EJACULATE_BUKKAKE_MIRROR_HUMAN_SKIN_BLACK_ID:
	case CUTIN_EJACULATE_BUKKAKE_MIRROR_GOBLIN_NORMAL_ID:
	case CUTIN_EJACULATE_BUKKAKE_MIRROR_GOBLIN_DARK_ID:
	case CUTIN_EJACULATE_BUKKAKE_MIRROR_ORC_NORMAL_ID:
	case CUTIN_EJACULATE_BUKKAKE_MIRROR_ORC_DARK_ID:
	case CUTIN_EJACULATE_BUKKAKE_MIRROR_LIZARDMAN_NORMAL_ID:
	case CUTIN_EJACULATE_BUKKAKE_MIRROR_LIZARDMAN_DARK_ID:
	case CUTIN_EJACULATE_BUKKAKE_MIRROR_SLIME_NORMAL_ID:
	case CUTIN_EJACULATE_BUKKAKE_MIRROR_WEREWOLF_NORMAL_ID:
	case CUTIN_EJACULATE_BUKKAKE_MIRROR_YETI_NORMAL_ID:
		wait = CUTIN_DEFAULT_DURATION; 		//wait = CutInの時間
		startingX 	= REM_CUT_IN_RIGHT_X + 637; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_LEFT_X + 637; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_TOP_Y + 91; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y + 91; 		//goalY = CutInが終わる時のY位置
		directionX = -1 * REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
		widthScale = -100;
		switch(cutInId) {
		case CUTIN_EJACULATE_BUKKAKE_MIRROR_HUMAN_CUT_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_bk_human_cut_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_human_cut_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_human_cut_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_human_cut_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_BUKKAKE_MIRROR_HUMAN_CUT_PALE_ID:
			fileNameNormal 			= 'cutin_ej_bk_human_cut_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_human_cut_pale_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_human_cut_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_human_cut_pale_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_BUKKAKE_MIRROR_HUMAN_CUT_BLACK_ID:
			fileNameNormal 			= 'cutin_ej_bk_human_cut_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_human_cut_black_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_human_cut_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_human_cut_black_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_BUKKAKE_MIRROR_HUMAN_HALF_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_bk_human_half_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_human_half_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_human_half_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_human_half_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_BUKKAKE_MIRROR_HUMAN_HALF_PALE_ID:
			fileNameNormal 			= 'cutin_ej_bk_human_half_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_human_half_pale_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_human_half_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_human_half_pale_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_BUKKAKE_MIRROR_HUMAN_HALF_BLACK_ID:
			fileNameNormal 			= 'cutin_ej_bk_human_half_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_human_half_black_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_human_half_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_human_half_black_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_BUKKAKE_MIRROR_HUMAN_SKIN_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_bk_human_skin_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_human_skin_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_human_skin_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_human_skin_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_BUKKAKE_MIRROR_HUMAN_SKIN_PALE_ID:
			fileNameNormal 			= 'cutin_ej_bk_human_skin_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_human_skin_pale_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_human_skin_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_human_skin_pale_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_BUKKAKE_MIRROR_HUMAN_SKIN_BLACK_ID:
			fileNameNormal 			= 'cutin_ej_bk_human_skin_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_human_skin_black_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_human_skin_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_human_skin_black_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_BUKKAKE_MIRROR_GOBLIN_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_bk_goblin_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_goblin_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_goblin_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_goblin_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_BUKKAKE_MIRROR_GOBLIN_DARK_ID:
			fileNameNormal 			= 'cutin_ej_bk_goblin_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_goblin_dark_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_goblin_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_goblin_dark_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_BUKKAKE_MIRROR_ORC_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_bk_orc_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_orc_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_orc_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_orc_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_BUKKAKE_MIRROR_ORC_DARK_ID:
			fileNameNormal 			= 'cutin_ej_bk_orc_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_orc_dark_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_orc_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_orc_dark_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_BUKKAKE_MIRROR_LIZARDMAN_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_bk_lizardman_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_lizardman_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_lizardman_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_lizardman_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_BUKKAKE_MIRROR_LIZARDMAN_DARK_ID:
			fileNameNormal 			= 'cutin_ej_bk_lizardman_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_lizardman_dark_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_lizardman_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_lizardman_dark_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_BUKKAKE_MIRROR_SLIME_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_bk_slime'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_slime_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_slime_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_slime_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_BUKKAKE_MIRROR_WEREWOLF_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_bk_werewolf'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_werewolf_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_werewolf_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_werewolf_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_BUKKAKE_MIRROR_YETI_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_bk_yeti'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_bk_yeti_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_bk_yeti_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_bk_yeti_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		}
	break;
	case CUTIN_EJACULATE_PUSSYCREAMPIE_REG_HUMAN_CUT_NORMAL_ID:
	case CUTIN_EJACULATE_PUSSYCREAMPIE_REG_HUMAN_CUT_PALE_ID:
	case CUTIN_EJACULATE_PUSSYCREAMPIE_REG_HUMAN_CUT_BLACK_ID:
	case CUTIN_EJACULATE_PUSSYCREAMPIE_REG_HUMAN_HALF_NORMAL_ID:
	case CUTIN_EJACULATE_PUSSYCREAMPIE_REG_HUMAN_HALF_PALE_ID:
	case CUTIN_EJACULATE_PUSSYCREAMPIE_REG_HUMAN_HALF_BLACK_ID:
	case CUTIN_EJACULATE_PUSSYCREAMPIE_REG_HUMAN_SKIN_NORMAL_ID:
	case CUTIN_EJACULATE_PUSSYCREAMPIE_REG_HUMAN_SKIN_PALE_ID:
	case CUTIN_EJACULATE_PUSSYCREAMPIE_REG_HUMAN_SKIN_BLACK_ID:
	case CUTIN_EJACULATE_PUSSYCREAMPIE_REG_GOBLIN_NORMAL_ID:
	case CUTIN_EJACULATE_PUSSYCREAMPIE_REG_GOBLIN_DARK_ID:
	case CUTIN_EJACULATE_PUSSYCREAMPIE_REG_ORC_NORMAL_ID:
	case CUTIN_EJACULATE_PUSSYCREAMPIE_REG_ORC_DARK_ID:
	case CUTIN_EJACULATE_PUSSYCREAMPIE_REG_LIZARDMAN_NORMAL_ID:
	case CUTIN_EJACULATE_PUSSYCREAMPIE_REG_LIZARDMAN_DARK_ID:
	case CUTIN_EJACULATE_PUSSYCREAMPIE_REG_SLIME_NORMAL_ID:
	case CUTIN_EJACULATE_PUSSYCREAMPIE_REG_WEREWOLF_NORMAL_ID:
	case CUTIN_EJACULATE_PUSSYCREAMPIE_REG_YETI_NORMAL_ID:
		wait = 121; 		//wait = CutInの時間
		startingX 	= REM_CUT_IN_RIGHT_X; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_RIGHT_X; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_TOP_Y + 263; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y + 263; 		//goalY = CutInが終わる時のY位置
		directionX = 0; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
		switch(cutInId) {
		case CUTIN_EJACULATE_PUSSYCREAMPIE_REG_HUMAN_CUT_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_ps_human_cut_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_human_cut_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_human_cut_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_human_cut_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_PUSSYCREAMPIE_REG_HUMAN_CUT_PALE_ID:
			fileNameNormal 			= 'cutin_ej_ps_human_cut_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_human_cut_pale_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_human_cut_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_human_cut_pale_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_PUSSYCREAMPIE_REG_HUMAN_CUT_BLACK_ID:
			fileNameNormal 			= 'cutin_ej_ps_human_cut_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_human_cut_black_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_human_cut_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_human_cut_black_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_PUSSYCREAMPIE_REG_HUMAN_HALF_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_ps_human_half_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_human_half_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_human_half_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_human_half_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_PUSSYCREAMPIE_REG_HUMAN_HALF_PALE_ID:
			fileNameNormal 			= 'cutin_ej_ps_human_half_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_human_half_pale_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_human_half_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_human_half_pale_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_PUSSYCREAMPIE_REG_HUMAN_HALF_BLACK_ID:
			fileNameNormal 			= 'cutin_ej_ps_human_half_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_human_half_black_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_human_half_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_human_half_black_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_PUSSYCREAMPIE_REG_HUMAN_SKIN_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_ps_human_skin_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_human_skin_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_human_skin_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_human_skin_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_PUSSYCREAMPIE_REG_HUMAN_SKIN_PALE_ID:
			fileNameNormal 			= 'cutin_ej_ps_human_skin_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_human_skin_pale_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_human_skin_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_human_skin_pale_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_PUSSYCREAMPIE_REG_HUMAN_SKIN_BLACK_ID:
			fileNameNormal 			= 'cutin_ej_ps_human_skin_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_human_skin_black_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_human_skin_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_human_skin_black_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_PUSSYCREAMPIE_REG_GOBLIN_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_ps_goblin_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_goblin_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_goblin_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_goblin_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_PUSSYCREAMPIE_REG_GOBLIN_DARK_ID:
			fileNameNormal 			= 'cutin_ej_ps_goblin_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_goblin_dark_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_goblin_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_goblin_dark_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_PUSSYCREAMPIE_REG_ORC_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_ps_orc_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_orc_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_orc_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_orc_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_PUSSYCREAMPIE_REG_ORC_DARK_ID:
			fileNameNormal 			= 'cutin_ej_ps_orc_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_orc_dark_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_orc_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_orc_dark_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_PUSSYCREAMPIE_REG_LIZARDMAN_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_ps_lizardman_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_lizardman_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_lizardman_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_lizardman_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_PUSSYCREAMPIE_REG_LIZARDMAN_DARK_ID:
			fileNameNormal 			= 'cutin_ej_ps_lizardman_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_lizardman_dark_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_lizardman_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_lizardman_dark_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_PUSSYCREAMPIE_REG_SLIME_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_ps_slime'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_slime_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_slime_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_slime_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_PUSSYCREAMPIE_REG_WEREWOLF_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_ps_werewolf'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_werewolf_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_werewolf_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_werewolf_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_PUSSYCREAMPIE_REG_YETI_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_ps_yeti'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_yeti_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_yeti_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_yeti_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		}
	break;
	case CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_HUMAN_CUT_NORMAL_ID:
	case CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_HUMAN_CUT_PALE_ID:
	case CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_HUMAN_CUT_BLACK_ID:
	case CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_HUMAN_HALF_NORMAL_ID:
	case CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_HUMAN_HALF_PALE_ID:
	case CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_HUMAN_HALF_BLACK_ID:
	case CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_HUMAN_SKIN_NORMAL_ID:
	case CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_HUMAN_SKIN_PALE_ID:
	case CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_HUMAN_SKIN_BLACK_ID:
	case CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_GOBLIN_NORMAL_ID:
	case CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_GOBLIN_DARK_ID:
	case CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_ORC_NORMAL_ID:
	case CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_ORC_DARK_ID:
	case CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_LIZARDMAN_NORMAL_ID:
	case CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_LIZARDMAN_DARK_ID:
	case CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_SLIME_NORMAL_ID:
	case CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_WEREWOLF_NORMAL_ID:
	case CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_YETI_NORMAL_ID:
		wait = 121; 		//wait = CutInの時間
		startingX 	= REM_CUT_IN_RIGHT_X + 760; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_RIGHT_X + 760; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_TOP_Y + 263; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y + 263; 		//goalY = CutInが終わる時のY位置
		directionX = 0; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
		widthScale = -100;
		switch(cutInId) {
		case CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_HUMAN_CUT_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_ps_human_cut_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_human_cut_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_human_cut_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_human_cut_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_HUMAN_CUT_PALE_ID:
			fileNameNormal 			= 'cutin_ej_ps_human_cut_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_human_cut_pale_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_human_cut_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_human_cut_pale_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_HUMAN_CUT_BLACK_ID:
			fileNameNormal 			= 'cutin_ej_ps_human_cut_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_human_cut_black_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_human_cut_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_human_cut_black_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_HUMAN_HALF_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_ps_human_half_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_human_half_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_human_half_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_human_half_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_HUMAN_HALF_PALE_ID:
			fileNameNormal 			= 'cutin_ej_ps_human_half_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_human_half_pale_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_human_half_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_human_half_pale_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_HUMAN_HALF_BLACK_ID:
			fileNameNormal 			= 'cutin_ej_ps_human_half_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_human_half_black_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_human_half_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_human_half_black_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_HUMAN_SKIN_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_ps_human_skin_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_human_skin_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_human_skin_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_human_skin_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_HUMAN_SKIN_PALE_ID:
			fileNameNormal 			= 'cutin_ej_ps_human_skin_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_human_skin_pale_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_human_skin_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_human_skin_pale_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_HUMAN_SKIN_BLACK_ID:
			fileNameNormal 			= 'cutin_ej_ps_human_skin_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_human_skin_black_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_human_skin_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_human_skin_black_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_GOBLIN_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_ps_goblin_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_goblin_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_goblin_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_goblin_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_GOBLIN_DARK_ID:
			fileNameNormal 			= 'cutin_ej_ps_goblin_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_goblin_dark_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_goblin_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_goblin_dark_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_ORC_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_ps_orc_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_orc_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_orc_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_orc_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_ORC_DARK_ID:
			fileNameNormal 			= 'cutin_ej_ps_orc_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_orc_dark_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_orc_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_orc_dark_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_LIZARDMAN_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_ps_lizardman_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_lizardman_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_lizardman_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_lizardman_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_LIZARDMAN_DARK_ID:
			fileNameNormal 			= 'cutin_ej_ps_lizardman_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_lizardman_dark_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_lizardman_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_lizardman_dark_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_SLIME_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_ps_slime'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_slime_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_slime_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_slime_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_WEREWOLF_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_ps_werewolf'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_werewolf_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_werewolf_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_werewolf_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_PUSSYCREAMPIE_MIRROR_YETI_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_ps_yeti'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_ps_yeti_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_ps_yeti_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_ps_yeti_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		}
	break;
	case CUTIN_EJACULATE_ANALCREAMPIE_REG_HUMAN_CUT_NORMAL_ID:
	case CUTIN_EJACULATE_ANALCREAMPIE_REG_HUMAN_CUT_PALE_ID:
	case CUTIN_EJACULATE_ANALCREAMPIE_REG_HUMAN_CUT_BLACK_ID:
	case CUTIN_EJACULATE_ANALCREAMPIE_REG_HUMAN_HALF_NORMAL_ID:
	case CUTIN_EJACULATE_ANALCREAMPIE_REG_HUMAN_HALF_PALE_ID:
	case CUTIN_EJACULATE_ANALCREAMPIE_REG_HUMAN_HALF_BLACK_ID:
	case CUTIN_EJACULATE_ANALCREAMPIE_REG_HUMAN_SKIN_NORMAL_ID:
	case CUTIN_EJACULATE_ANALCREAMPIE_REG_HUMAN_SKIN_PALE_ID:
	case CUTIN_EJACULATE_ANALCREAMPIE_REG_HUMAN_SKIN_BLACK_ID:
	case CUTIN_EJACULATE_ANALCREAMPIE_REG_GOBLIN_NORMAL_ID:
	case CUTIN_EJACULATE_ANALCREAMPIE_REG_GOBLIN_DARK_ID:
	case CUTIN_EJACULATE_ANALCREAMPIE_REG_ORC_NORMAL_ID:
	case CUTIN_EJACULATE_ANALCREAMPIE_REG_ORC_DARK_ID:
	case CUTIN_EJACULATE_ANALCREAMPIE_REG_LIZARDMAN_NORMAL_ID:
	case CUTIN_EJACULATE_ANALCREAMPIE_REG_LIZARDMAN_DARK_ID:
	case CUTIN_EJACULATE_ANALCREAMPIE_REG_SLIME_NORMAL_ID:
	case CUTIN_EJACULATE_ANALCREAMPIE_REG_WEREWOLF_NORMAL_ID:
	case CUTIN_EJACULATE_ANALCREAMPIE_REG_YETI_NORMAL_ID:
		wait = 121; 		//wait = CutInの時間
		startingX 	= REM_CUT_IN_RIGHT_X; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_RIGHT_X; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_TOP_Y + 326; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y + 326; 		//goalY = CutInが終わる時のY位置
		directionX = 0; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
		switch(cutInId) {
		case CUTIN_EJACULATE_ANALCREAMPIE_REG_HUMAN_CUT_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_an_human_cut_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_human_cut_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_human_cut_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_human_cut_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_ANALCREAMPIE_REG_HUMAN_CUT_PALE_ID:
			fileNameNormal 			= 'cutin_ej_an_human_cut_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_human_cut_pale_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_human_cut_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_human_cut_pale_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_ANALCREAMPIE_REG_HUMAN_CUT_BLACK_ID:
			fileNameNormal 			= 'cutin_ej_an_human_cut_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_human_cut_black_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_human_cut_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_human_cut_black_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_ANALCREAMPIE_REG_HUMAN_HALF_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_an_human_half_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_human_half_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_human_half_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_human_half_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_ANALCREAMPIE_REG_HUMAN_HALF_PALE_ID:
			fileNameNormal 			= 'cutin_ej_an_human_half_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_human_half_pale_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_human_half_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_human_half_pale_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_ANALCREAMPIE_REG_HUMAN_HALF_BLACK_ID:
			fileNameNormal 			= 'cutin_ej_an_human_half_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_human_half_black_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_human_half_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_human_half_black_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_ANALCREAMPIE_REG_HUMAN_SKIN_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_an_human_skin_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_human_skin_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_human_skin_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_human_skin_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_ANALCREAMPIE_REG_HUMAN_SKIN_PALE_ID:
			fileNameNormal 			= 'cutin_ej_an_human_skin_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_human_skin_pale_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_human_skin_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_human_skin_pale_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_ANALCREAMPIE_REG_HUMAN_SKIN_BLACK_ID:
			fileNameNormal 			= 'cutin_ej_an_human_skin_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_human_skin_black_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_human_skin_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_human_skin_black_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_ANALCREAMPIE_REG_GOBLIN_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_an_goblin_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_goblin_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_goblin_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_goblin_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_ANALCREAMPIE_REG_GOBLIN_DARK_ID:
			fileNameNormal 			= 'cutin_ej_an_goblin_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_goblin_dark_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_goblin_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_goblin_dark_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_ANALCREAMPIE_REG_ORC_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_an_orc_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_orc_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_orc_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_orc_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_ANALCREAMPIE_REG_ORC_DARK_ID:
			fileNameNormal 			= 'cutin_ej_an_orc_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_orc_dark_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_orc_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_orc_dark_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_ANALCREAMPIE_REG_LIZARDMAN_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_an_lizardman_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_lizardman_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_lizardman_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_lizardman_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_ANALCREAMPIE_REG_LIZARDMAN_DARK_ID:
			fileNameNormal 			= 'cutin_ej_an_lizardman_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_lizardman_dark_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_lizardman_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_lizardman_dark_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_ANALCREAMPIE_REG_SLIME_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_an_slime'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_slime_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_slime_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_slime_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_ANALCREAMPIE_REG_WEREWOLF_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_an_werewolf'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_werewolf_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_werewolf_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_werewolf_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_ANALCREAMPIE_REG_YETI_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_an_yeti'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_yeti_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_yeti_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_yeti_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		}
	break;
	case CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_HUMAN_CUT_NORMAL_ID:
	case CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_HUMAN_CUT_PALE_ID:
	case CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_HUMAN_CUT_BLACK_ID:
	case CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_HUMAN_HALF_NORMAL_ID:
	case CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_HUMAN_HALF_PALE_ID:
	case CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_HUMAN_HALF_BLACK_ID:
	case CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_HUMAN_SKIN_NORMAL_ID:
	case CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_HUMAN_SKIN_PALE_ID:
	case CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_HUMAN_SKIN_BLACK_ID:
	case CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_GOBLIN_NORMAL_ID:
	case CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_GOBLIN_DARK_ID:
	case CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_ORC_NORMAL_ID:
	case CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_ORC_DARK_ID:
	case CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_LIZARDMAN_NORMAL_ID:
	case CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_LIZARDMAN_DARK_ID:
	case CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_SLIME_NORMAL_ID:
	case CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_WEREWOLF_NORMAL_ID:
	case CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_YETI_NORMAL_ID:
		wait = 121; 		//wait = CutInの時間
		startingX 	= REM_CUT_IN_RIGHT_X + 684; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_RIGHT_X + 684; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_TOP_Y + 326; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y + 326; 		//goalY = CutInが終わる時のY位置
		directionX = 0; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
		widthScale = -100;
		switch(cutInId) {
		case CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_HUMAN_CUT_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_an_human_cut_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_human_cut_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_human_cut_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_human_cut_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_HUMAN_CUT_PALE_ID:
			fileNameNormal 			= 'cutin_ej_an_human_cut_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_human_cut_pale_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_human_cut_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_human_cut_pale_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_HUMAN_CUT_BLACK_ID:
			fileNameNormal 			= 'cutin_ej_an_human_cut_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_human_cut_black_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_human_cut_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_human_cut_black_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_HUMAN_HALF_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_an_human_half_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_human_half_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_human_half_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_human_half_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_HUMAN_HALF_PALE_ID:
			fileNameNormal 			= 'cutin_ej_an_human_half_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_human_half_pale_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_human_half_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_human_half_pale_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_HUMAN_HALF_BLACK_ID:
			fileNameNormal 			= 'cutin_ej_an_human_half_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_human_half_black_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_human_half_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_human_half_black_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_HUMAN_SKIN_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_an_human_skin_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_human_skin_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_human_skin_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_human_skin_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_HUMAN_SKIN_PALE_ID:
			fileNameNormal 			= 'cutin_ej_an_human_skin_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_human_skin_pale_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_human_skin_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_human_skin_pale_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_HUMAN_SKIN_BLACK_ID:
			fileNameNormal 			= 'cutin_ej_an_human_skin_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_human_skin_black_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_human_skin_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_human_skin_black_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_GOBLIN_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_an_goblin_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_goblin_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_goblin_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_goblin_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_GOBLIN_DARK_ID:
			fileNameNormal 			= 'cutin_ej_an_goblin_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_goblin_dark_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_goblin_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_goblin_dark_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_ORC_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_an_orc_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_orc_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_orc_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_orc_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_ORC_DARK_ID:
			fileNameNormal 			= 'cutin_ej_an_orc_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_orc_dark_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_orc_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_orc_dark_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_LIZARDMAN_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_an_lizardman_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_lizardman_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_lizardman_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_lizardman_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_LIZARDMAN_DARK_ID:
			fileNameNormal 			= 'cutin_ej_an_lizardman_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_lizardman_dark_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_lizardman_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_lizardman_dark_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_SLIME_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_an_slime'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_slime_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_slime_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_slime_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_WEREWOLF_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_an_werewolf'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_werewolf_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_werewolf_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_werewolf_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_EJACULATE_ANALCREAMPIE_MIRROR_YETI_NORMAL_ID:
			fileNameNormal 			= 'cutin_ej_an_yeti'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_ej_an_yeti_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ej_an_yeti_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ej_an_yeti_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		}
	break;
	case CUTIN_KARRYN_ORGASM_ONE_ID:		//絶頂1 ↓
		wait = 53; 		//wait = CutInの時間
		fileNameNormal 			= 'cutin_or1'; //cutinFileNameNormal　= CutInアニメなしのファイルネーム
		fileNameNormalCensored 	= 'cutin_or1'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
		fileNameAnime 			= 'cutin_or1_anime'; //cutinFileNameAnime = CutInアニメありのファイルネーム
		fileNameAnimeCensored 	= 'cutin_or1_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		startingX 	= REM_CUT_IN_RIGHT_X; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_RIGHT_X; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_TOP_Y - 150; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y; 		//goalY = CutInが終わる時のY位置
		directionX = 0; 		//directionX = CutInのX方向
		directionY = REM_CUT_IN_SPEED_Y;		//directionY = CutInのY方向
	break;
	case CUTIN_KARRYN_ORGASM_TWO_ID:		//絶頂2 ↓
		wait = 33; 		//wait = CutInの時間
		if(isHCup) {
			fileNameNormal 			= 'cutin_or2_hcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_or2_hcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_or2_hcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_or2_hcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(isPCup) {
			fileNameNormal 			= 'cutin_or2_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_or2_pcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_or2_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_or2_pcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else {
			fileNameNormal 			= 'cutin_or2'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_or2'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_or2_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_or2_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		startingX 	= REM_CUT_IN_RIGHT_X - 90; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_RIGHT_X - 90; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_TOP_Y - 150; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y; 		//goalY = CutInが終わる時のY位置
		directionX = 0; 		//directionX = CutInのX方向
		directionY = REM_CUT_IN_SPEED_Y;		//directionY = CutInのY方向
	break;
	case CUTIN_KARRYN_KISS_ONE_HUMAN_NORMAL_ID:		//カリンからキス1 ←
	case CUTIN_KARRYN_KISS_ONE_HUMAN_PALE_ID:
	case CUTIN_KARRYN_KISS_ONE_HUMAN_BLACK_ID:
	case CUTIN_KARRYN_KISS_ONE_GOBLIN_NORMAL_ID:
	case CUTIN_KARRYN_KISS_ONE_GOBLIN_DARK_ID:
	case CUTIN_KARRYN_KISS_ONE_LIZARDMAN_NORMAL_ID:
	case CUTIN_KARRYN_KISS_ONE_LIZARDMAN_DARK_ID:
	case CUTIN_KARRYN_KISS_ONE_ORC_NORMAL_ID:
	case CUTIN_KARRYN_KISS_ONE_ORC_DARK_ID:
	case CUTIN_KARRYN_KISS_ONE_YETI_NORMAL_ID:
		wait = 44; 		//wait = CutInの時間
		startingX 	= REM_CUT_IN_RIGHT_X + 40; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_LEFT_X + 40; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_TOP_Y + 190; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y + 190; 		//goalY = CutInが終わる時のY位置
		directionX = -1 * REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
		switch(cutInId) {
		case CUTIN_KARRYN_KISS_ONE_HUMAN_NORMAL_ID:
			fileNameNormal 			= 'cutin_ks1_k_human_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ks1_k_human_normal'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ks1_k_human_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ks1_k_human_normal_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_KARRYN_KISS_ONE_HUMAN_PALE_ID:
			fileNameNormal 			= 'cutin_ks1_k_human_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ks1_k_human_pale'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ks1_k_human_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ks1_k_human_pale_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_KARRYN_KISS_ONE_HUMAN_BLACK_ID:
			fileNameNormal 			= 'cutin_ks1_k_human_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ks1_k_human_black'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ks1_k_human_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ks1_k_human_black_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_KARRYN_KISS_ONE_GOBLIN_NORMAL_ID:
			fileNameNormal 			= 'cutin_ks1_k_goblin_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ks1_k_goblin_normal'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ks1_k_goblin_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ks1_k_goblin_normal_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_KARRYN_KISS_ONE_GOBLIN_DARK_ID:
			fileNameNormal 			= 'cutin_ks1_k_goblin_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ks1_k_goblin_dark'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ks1_k_goblin_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ks1_k_goblin_dark_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_KARRYN_KISS_ONE_LIZARDMAN_NORMAL_ID:
			fileNameNormal 			= 'cutin_ks1_k_lizardman_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ks1_k_lizardman_normal'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ks1_k_lizardman_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ks1_k_lizardman_normal_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_KARRYN_KISS_ONE_LIZARDMAN_DARK_ID:
			fileNameNormal 			= 'cutin_ks1_k_lizardman_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ks1_k_lizardman_dark'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ks1_k_lizardman_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ks1_k_lizardman_dark_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_KARRYN_KISS_ONE_ORC_NORMAL_ID:
			fileNameNormal 			= 'cutin_ks1_k_orc_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ks1_k_orc_normal'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ks1_k_orc_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ks1_k_orc_normal_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_KARRYN_KISS_ONE_ORC_DARK_ID:
			fileNameNormal 			= 'cutin_ks1_k_orc_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ks1_k_orc_dark'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ks1_k_orc_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ks1_k_orc_dark_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_KARRYN_KISS_ONE_YETI_NORMAL_ID:
			fileNameNormal 			= 'cutin_ks1_k_yeti'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ks1_k_yeti'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ks1_k_yeti_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ks1_k_yeti_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		}
	break;
	case CUTIN_KARRYN_KISS_TWO_HUMAN_NORMAL_ID:		//カリンからキス2 ←
	case CUTIN_KARRYN_KISS_TWO_HUMAN_PALE_ID:
	case CUTIN_KARRYN_KISS_TWO_HUMAN_BLACK_ID:
	case CUTIN_KARRYN_KISS_TWO_GOBLIN_NORMAL_ID:
	case CUTIN_KARRYN_KISS_TWO_GOBLIN_DARK_ID:
	case CUTIN_KARRYN_KISS_TWO_ORC_NORMAL_ID:
	case CUTIN_KARRYN_KISS_TWO_ORC_DARK_ID:
	case CUTIN_KARRYN_KISS_TWO_LIZARDMAN_NORMAL_ID:
	case CUTIN_KARRYN_KISS_TWO_LIZARDMAN_DARK_ID:
	case CUTIN_KARRYN_KISS_TWO_YETI_NORMAL_ID:
		wait = 74; 		//wait = CutInの時間
		startingX 	= REM_CUT_IN_RIGHT_X + 30; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_LEFT_X + 30; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_TOP_Y + 250; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y + 250; 		//goalY = CutInが終わる時のY位置
		directionX = -1 * REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
		switch(cutInId) {
		case CUTIN_KARRYN_KISS_TWO_HUMAN_NORMAL_ID:
			fileNameNormal 			= 'cutin_ks2_k_human_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ks2_k_human_normal'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ks2_k_human_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ks2_k_human_normal_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_KARRYN_KISS_TWO_HUMAN_PALE_ID:
			fileNameNormal 			= 'cutin_ks2_k_human_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ks2_k_human_pale'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ks2_k_human_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ks2_k_human_pale_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_KARRYN_KISS_TWO_HUMAN_BLACK_ID:
			fileNameNormal 			= 'cutin_ks2_k_human_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ks2_k_human_black'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ks2_k_human_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ks2_k_human_black_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_KARRYN_KISS_TWO_GOBLIN_NORMAL_ID:
			fileNameNormal 			= 'cutin_ks2_k_goblin_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ks2_k_goblin_normal'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ks2_k_goblin_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ks2_k_goblin_normal_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_KARRYN_KISS_TWO_GOBLIN_DARK_ID:
			fileNameNormal 			= 'cutin_ks2_k_goblin_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ks2_k_goblin_dark'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ks2_k_goblin_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ks2_k_goblin_dark_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_KARRYN_KISS_TWO_ORC_NORMAL_ID:
			fileNameNormal 			= 'cutin_ks2_k_orc_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ks2_k_orc_normal'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ks2_k_orc_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ks2_k_orc_normal_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_KARRYN_KISS_TWO_ORC_DARK_ID:
			fileNameNormal 			= 'cutin_ks2_k_orc_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ks2_k_orc_dark'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ks2_k_orc_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ks2_k_orc_dark_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_KARRYN_KISS_TWO_LIZARDMAN_NORMAL_ID:
			fileNameNormal 			= 'cutin_ks2_k_lizardman_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ks2_k_lizardman_normal'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ks2_k_lizardman_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ks2_k_lizardman_normal_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_KARRYN_KISS_TWO_LIZARDMAN_DARK_ID:
			fileNameNormal 			= 'cutin_ks2_k_lizardman_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ks2_k_lizardman_dark'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ks2_k_lizardman_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ks2_k_lizardman_dark_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_KARRYN_KISS_TWO_YETI_NORMAL_ID:
			fileNameNormal 			= 'cutin_ks2_k_yeti'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ks2_k_yeti'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ks2_k_yeti_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ks2_k_yeti_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		}
	break;
	case CUTIN_ENEMY_KISS_ONE_HUMAN_NORMAL_ID:	//敵からキス1 →
	case CUTIN_ENEMY_KISS_ONE_HUMAN_PALE_ID:
	case CUTIN_ENEMY_KISS_ONE_HUMAN_BLACK_ID:
	case CUTIN_ENEMY_KISS_ONE_GOBLIN_NORMAL_ID:
	case CUTIN_ENEMY_KISS_ONE_GOBLIN_DARK_ID:
	case CUTIN_ENEMY_KISS_ONE_LIZARDMAN_NORMAL_ID:
	case CUTIN_ENEMY_KISS_ONE_LIZARDMAN_DARK_ID:
	case CUTIN_ENEMY_KISS_ONE_ORC_NORMAL_ID:
	case CUTIN_ENEMY_KISS_ONE_ORC_DARK_ID:
	case CUTIN_ENEMY_KISS_ONE_YETI_NORMAL_ID:
		wait = 44; 		//wait = CutInの時間
		startingX 	= REM_CUT_IN_LEFT_X; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_RIGHT_X; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_TOP_Y + 190; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y + 190; 		//goalY = CutInが終わる時のY位置
		directionX = REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
		switch(cutInId) {
		case CUTIN_ENEMY_KISS_ONE_HUMAN_NORMAL_ID:
			fileNameNormal 			= 'cutin_ks1_e_human_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ks1_e_human_normal'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ks1_e_human_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ks1_e_human_normal_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_ENEMY_KISS_ONE_HUMAN_PALE_ID:
			fileNameNormal 			= 'cutin_ks1_e_human_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ks1_e_human_pale'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ks1_e_human_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ks1_e_human_pale_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_ENEMY_KISS_ONE_HUMAN_BLACK_ID:
			fileNameNormal 			= 'cutin_ks1_e_human_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ks1_e_human_black'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ks1_e_human_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ks1_e_human_black_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_ENEMY_KISS_ONE_GOBLIN_NORMAL_ID:
			fileNameNormal 			= 'cutin_ks1_e_goblin_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ks1_e_goblin_normal'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ks1_e_goblin_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ks1_e_goblin_normal_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_ENEMY_KISS_ONE_GOBLIN_DARK_ID:
			fileNameNormal 			= 'cutin_ks1_e_goblin_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ks1_e_goblin_dark'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ks1_e_goblin_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ks1_e_goblin_dark_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_ENEMY_KISS_ONE_LIZARDMAN_NORMAL_ID:
			fileNameNormal 			= 'cutin_ks1_e_lizardman_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ks1_e_lizardman_normal'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ks1_e_lizardman_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ks1_e_lizardman_normal_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_ENEMY_KISS_ONE_LIZARDMAN_DARK_ID:
			fileNameNormal 			= 'cutin_ks1_e_lizardman_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ks1_e_lizardman_dark'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ks1_e_lizardman_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ks1_e_lizardman_dark_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_ENEMY_KISS_ONE_ORC_NORMAL_ID:
			fileNameNormal 			= 'cutin_ks1_e_orc_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ks1_e_orc_normal'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ks1_e_orc_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ks1_e_orc_normal_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_ENEMY_KISS_ONE_ORC_DARK_ID:
			fileNameNormal 			= 'cutin_ks1_e_orc_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ks1_e_orc_dark'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ks1_e_orc_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ks1_e_orc_dark_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_ENEMY_KISS_ONE_YETI_NORMAL_ID:
			fileNameNormal 			= 'cutin_ks1_e_yeti'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ks1_e_yeti'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ks1_e_yeti_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ks1_e_yeti_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		}
	break;
	case CUTIN_ENEMY_KISS_TWO_HUMAN_NORMAL_ID:	//敵からキス2 →
	case CUTIN_ENEMY_KISS_TWO_HUMAN_PALE_ID:
	case CUTIN_ENEMY_KISS_TWO_HUMAN_BLACK_ID:
	case CUTIN_ENEMY_KISS_TWO_GOBLIN_NORMAL_ID:
	case CUTIN_ENEMY_KISS_TWO_GOBLIN_DARK_ID:
	case CUTIN_ENEMY_KISS_TWO_ORC_NORMAL_ID:
	case CUTIN_ENEMY_KISS_TWO_ORC_DARK_ID:
	case CUTIN_ENEMY_KISS_TWO_LIZARDMAN_NORMAL_ID:
	case CUTIN_ENEMY_KISS_TWO_LIZARDMAN_DARK_ID:
	case CUTIN_ENEMY_KISS_TWO_YETI_NORMAL_ID:
		wait = 74; 		//wait = CutInの時間
		startingX 	= REM_CUT_IN_LEFT_X - 30; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_RIGHT_X - 30; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_TOP_Y + 250; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y + 250; 		//goalY = CutInが終わる時のY位置
		directionX = REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
		switch(cutInId) {
		case CUTIN_ENEMY_KISS_TWO_HUMAN_NORMAL_ID:
			fileNameNormal 			= 'cutin_ks2_e_human_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ks2_e_human_normal'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ks2_e_human_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ks2_e_human_normal_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_ENEMY_KISS_TWO_HUMAN_PALE_ID:
			fileNameNormal 			= 'cutin_ks2_e_human_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ks2_e_human_pale'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ks2_e_human_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ks2_e_human_pale_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_ENEMY_KISS_TWO_HUMAN_BLACK_ID:
			fileNameNormal 			= 'cutin_ks2_e_human_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ks2_e_human_black'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ks2_e_human_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ks2_e_human_black_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_ENEMY_KISS_TWO_GOBLIN_NORMAL_ID:
			fileNameNormal 			= 'cutin_ks2_e_goblin_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ks2_e_goblin_normal'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ks2_e_goblin_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ks2_e_goblin_normal_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_ENEMY_KISS_TWO_GOBLIN_DARK_ID:
			fileNameNormal 			= 'cutin_ks2_e_goblin_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ks2_e_goblin_dark'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ks2_e_goblin_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ks2_e_goblin_dark_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_ENEMY_KISS_TWO_ORC_NORMAL_ID:
			fileNameNormal 			= 'cutin_ks2_e_orc_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ks2_e_orc_normal'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ks2_e_orc_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ks2_e_orc_normal_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_ENEMY_KISS_TWO_ORC_DARK_ID:
			fileNameNormal 			= 'cutin_ks2_e_orc_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ks2_e_orc_dark'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ks2_e_orc_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ks2_e_orc_dark_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_ENEMY_KISS_TWO_LIZARDMAN_NORMAL_ID:
			fileNameNormal 			= 'cutin_ks2_e_lizardman_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ks2_e_lizardman_normal'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ks2_e_lizardman_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ks2_e_lizardman_normal_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_ENEMY_KISS_TWO_LIZARDMAN_DARK_ID:
			fileNameNormal 			= 'cutin_ks2_e_lizardman_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ks2_e_lizardman_dark'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ks2_e_lizardman_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ks2_e_lizardman_dark_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_ENEMY_KISS_TWO_YETI_NORMAL_ID:
			fileNameNormal 			= 'cutin_ks2_e_yeti'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_ks2_e_yeti'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_ks2_e_yeti_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_ks2_e_yeti_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		}
	break;
	case CUTIN_TOY_PINK_ROTOR_INSERT_HUMAN_NORMAL_ID:
	case CUTIN_TOY_PINK_ROTOR_INSERT_HUMAN_BLACK_ID:
	case CUTIN_TOY_PINK_ROTOR_INSERT_HUMAN_PALE_ID: 
		wait = CUTIN_DEFAULT_DURATION; 		//wait = CutInの時間
		startingX 	= REM_CUT_IN_RIGHT_X + 40; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_LEFT_X + 40; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_TOP_Y + 80; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y + 80; 		//goalY = CutInが終わる時のY位置
		directionX = -1 * REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
		switch(cutInId) {
		case CUTIN_TOY_PINK_ROTOR_INSERT_HUMAN_NORMAL_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_toyC_1_in_human_normal_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_toyC_1_in_human_normal_pcup_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_toyC_1_in_human_normal_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_toyC_1_in_human_normal_pcup_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_toyC_1_in_human_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_toyC_1_in_human_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_toyC_1_in_human_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_toyC_1_in_human_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		case CUTIN_TOY_PINK_ROTOR_INSERT_HUMAN_BLACK_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_toyC_1_in_human_black_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_toyC_1_in_human_black_pcup_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_toyC_1_in_human_black_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_toyC_1_in_human_black_pcup_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_toyC_1_in_human_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_toyC_1_in_human_black_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_toyC_1_in_human_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_toyC_1_in_human_black_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		case CUTIN_TOY_PINK_ROTOR_INSERT_HUMAN_PALE_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_toyC_1_in_human_pale_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_toyC_1_in_human_pale_pcup_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_toyC_1_in_human_pale_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_toyC_1_in_human_pale_pcup_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_toyC_1_in_human_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_toyC_1_in_human_pale_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_toyC_1_in_human_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_toyC_1_in_human_pale_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		}
	break;
	case CUTIN_TOY_PINK_ROTOR_PLAY_HUMAN_NORMAL_ID:
	case CUTIN_TOY_PINK_ROTOR_PLAY_HUMAN_BLACK_ID:
	case CUTIN_TOY_PINK_ROTOR_PLAY_HUMAN_PALE_ID:
		wait = CUTIN_DEFAULT_DURATION; 		//wait = CutInの時間
		startingX 	= REM_CUT_IN_RIGHT_X + 40; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_LEFT_X + 40; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_TOP_Y + 80; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y + 80; 		//goalY = CutInが終わる時のY位置
		directionX = -1 * REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
		switch(cutInId) {
		case CUTIN_TOY_PINK_ROTOR_PLAY_HUMAN_NORMAL_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_toyC_1_play_human_normal_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_toyC_1_play_human_normal_pcup_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_toyC_1_play_human_normal_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_toyC_1_play_human_normal_pcup_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_toyC_1_play_human_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_toyC_1_play_human_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_toyC_1_play_human_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_toyC_1_play_human_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		case CUTIN_TOY_PINK_ROTOR_PLAY_HUMAN_BLACK_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_toyC_1_play_human_black_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_toyC_1_play_human_black_pcup_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_toyC_1_play_human_black_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_toyC_1_play_human_black_pcup_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_toyC_1_play_human_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_toyC_1_play_human_black_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_toyC_1_play_human_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_toyC_1_play_human_black_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		case CUTIN_TOY_PINK_ROTOR_PLAY_HUMAN_PALE_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_toyC_1_play_human_pale_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_toyC_1_play_human_pale_pcup_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_toyC_1_play_human_pale_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_toyC_1_play_human_pale_pcup_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_toyC_1_play_human_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_toyC_1_play_human_pale_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_toyC_1_play_human_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_toyC_1_play_human_pale_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		}
	break;
	case CUTIN_TOY_PENIS_DILDO_INSERT_HUMAN_NORMAL_ID:
	case CUTIN_TOY_PENIS_DILDO_INSERT_HUMAN_PALE_ID:
	case CUTIN_TOY_PENIS_DILDO_INSERT_HUMAN_BLACK_ID:
		wait = CUTIN_DEFAULT_DURATION; 		//wait = CutInの時間
		startingX 	= REM_CUT_IN_RIGHT_X + 40; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_LEFT_X + 40; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_TOP_Y + 80; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y + 80; 		//goalY = CutInが終わる時のY位置
		directionX = REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
		switch(cutInId) {
		case CUTIN_TOY_PENIS_DILDO_INSERT_HUMAN_NORMAL_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_toyP_1_in_human_normal_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_toyP_1_in_human_normal_pcup_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_toyP_1_in_human_normal_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_toyP_1_in_human_normal_pcup_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_toyP_1_in_human_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_toyP_1_in_human_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_toyP_1_in_human_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_toyP_1_in_human_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		case CUTIN_TOY_PENIS_DILDO_INSERT_HUMAN_PALE_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_toyP_1_in_human_pale_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_toyP_1_in_human_pale_pcup_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_toyP_1_in_human_pale_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_toyP_1_in_human_pale_pcup_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_toyP_1_in_human_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_toyP_1_in_human_pale_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_toyP_1_in_human_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_toyP_1_in_human_pale_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		case CUTIN_TOY_PENIS_DILDO_INSERT_HUMAN_BLACK_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_toyP_1_in_human_black_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_toyP_1_in_human_black_pcup_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_toyP_1_in_human_black_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_toyP_1_in_human_black_pcup_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_toyP_1_in_human_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_toyP_1_in_human_black_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_toyP_1_in_human_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_toyP_1_in_human_black_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		}
	break;
	case CUTIN_TOY_PENIS_DILDO_PLAY_HUMAN_NORMAL_ID:
	case CUTIN_TOY_PENIS_DILDO_PLAY_HUMAN_PALE_ID:
	case CUTIN_TOY_PENIS_DILDO_PLAY_HUMAN_BLACK_ID:
		wait = 91; 		//wait = CutInの時間
		startingX 	= REM_CUT_IN_RIGHT_X + 40; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_LEFT_X + 40; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_TOP_Y + 80; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y + 80; 		//goalY = CutInが終わる時のY位置
		directionX = REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
		switch(cutInId) {
		case CUTIN_TOY_PENIS_DILDO_PLAY_HUMAN_NORMAL_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_toyP_1_play_human_normal_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_toyP_1_play_human_normal_pcup_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_toyP_1_play_human_normal_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_toyP_1_play_human_normal_pcup_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_toyP_1_play_human_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_toyP_1_play_human_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_toyP_1_play_human_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_toyP_1_play_human_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		case CUTIN_TOY_PENIS_DILDO_PLAY_HUMAN_PALE_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_toyP_1_play_human_pale_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_toyP_1_play_human_pale_pcup_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_toyP_1_play_human_pale_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_toyP_1_play_human_pale_pcup_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_toyP_1_play_human_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_toyP_1_play_human_pale_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_toyP_1_play_human_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_toyP_1_play_human_pale_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		case CUTIN_TOY_PENIS_DILDO_PLAY_HUMAN_BLACK_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_toyP_1_play_human_black_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_toyP_1_play_human_black_pcup_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_toyP_1_play_human_black_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_toyP_1_play_human_black_pcup_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_toyP_1_play_human_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_toyP_1_play_human_black_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_toyP_1_play_human_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_toyP_1_play_human_black_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		}
	break;
	case CUTIN_TOY_ANAL_BEADS_INSERT_HUMAN_NORMAL_ID:
	case CUTIN_TOY_ANAL_BEADS_INSERT_HUMAN_PALE_ID:
	case CUTIN_TOY_ANAL_BEADS_INSERT_HUMAN_BLACK_ID:
		wait = CUTIN_DEFAULT_DURATION; 		//wait = CutInの時間
		startingX 	= REM_CUT_IN_LEFT_X; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_RIGHT_X; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_BOTTOM_Y; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y; 		//goalY = CutInが終わる時のY位置
		directionX = REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = -1 * REM_CUT_IN_SPEED_Y; 		//directionY = CutInのY方向
		switch(cutInId) {
		case CUTIN_TOY_ANAL_BEADS_INSERT_HUMAN_NORMAL_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_toyA_1_in_human_normal_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_toyA_1_in_human_normal_pcup_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_toyA_1_in_human_normal_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_toyA_1_in_human_normal_pcup_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_toyA_1_in_human_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_toyA_1_in_human_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_toyA_1_in_human_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_toyA_1_in_human_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		case CUTIN_TOY_ANAL_BEADS_INSERT_HUMAN_PALE_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_toyA_1_in_human_pale_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_toyA_1_in_human_pale_pcup_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_toyA_1_in_human_pale_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_toyA_1_in_human_pale_pcup_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_toyA_1_in_human_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_toyA_1_in_human_pale_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_toyA_1_in_human_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_toyA_1_in_human_pale_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		case CUTIN_TOY_ANAL_BEADS_INSERT_HUMAN_BLACK_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_toyA_1_in_human_black_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_toyA_1_in_human_black_pcup_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_toyA_1_in_human_black_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_toyA_1_in_human_black_pcup_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_toyA_1_in_human_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_toyA_1_in_human_black_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_toyA_1_in_human_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_toyA_1_in_human_black_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		}
	break;
	case CUTIN_TOY_ANAL_BEADS_PLAY_HUMAN_NORMAL_ID:
	case CUTIN_TOY_ANAL_BEADS_PLAY_HUMAN_PALE_ID:
	case CUTIN_TOY_ANAL_BEADS_PLAY_HUMAN_BLACK_ID:
		wait = 132; 		//wait = CutInの時間
		startingX 	= REM_CUT_IN_LEFT_X; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_RIGHT_X; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_BOTTOM_Y + 100; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y + 100; 		//goalY = CutInが終わる時のY位置
		directionX = REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = -1 * REM_CUT_IN_SPEED_Y; 		//directionY = CutInのY方向
		switch(cutInId) {
		case CUTIN_TOY_ANAL_BEADS_PLAY_HUMAN_NORMAL_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_toyA_1_play_human_normal_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_toyA_1_play_human_normal_pcup_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_toyA_1_play_human_normal_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_toyA_1_play_human_normal_pcup_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_toyA_1_play_human_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_toyA_1_play_human_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_toyA_1_play_human_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_toyA_1_play_human_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		case CUTIN_TOY_ANAL_BEADS_PLAY_HUMAN_PALE_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_toyA_1_play_human_pale_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_toyA_1_play_human_pale_pcup_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_toyA_1_play_human_pale_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_toyA_1_play_human_pale_pcup_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_toyA_1_play_human_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_toyA_1_play_human_pale_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_toyA_1_play_human_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_toyA_1_play_human_pale_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		case CUTIN_TOY_ANAL_BEADS_PLAY_HUMAN_BLACK_ID:
			if(isPCup) {
				fileNameNormal 			= 'cutin_toyA_1_play_human_black_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_toyA_1_play_human_black_pcup_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_toyA_1_play_human_black_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_toyA_1_play_human_black_pcup_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
			else {
				fileNameNormal 			= 'cutin_toyA_1_play_human_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
				fileNameNormalCensored 	= 'cutin_toyA_1_play_human_black_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
				fileNameAnime 			= 'cutin_toyA_1_play_human_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
				fileNameAnimeCensored 	= 'cutin_toyA_1_play_human_black_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
			}
		break;
		}
	break;
	case CUTIN_KARRYN_FLAUNT_ONE_ID:
		wait = 57; 		//wait = CutInの時間
		if(isHCup) {
			fileNameNormal 			= 'cutin_flaunt1_hcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_flaunt1_hcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_flaunt1_hcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_flaunt1_hcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else if(isPCup) {
			fileNameNormal 			= 'cutin_flaunt1_pcup'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored 	= 'cutin_flaunt1_pcup'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_flaunt1_pcup_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_flaunt1_pcup_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		else {
			fileNameNormal 			= 'cutin_flaunt1'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_flaunt1'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_flaunt1_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_flaunt1_anime'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		}
		startingX 	= REM_CUT_IN_LEFT_X; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_RIGHT_X; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_TOP_Y; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y; 		//goalY = CutInが終わる時のY位置
		directionX = REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
	break;
	case CUTIN_KARRYN_COCK_PETTING_HUMAN_CUT_NORMAL_ID:
	case CUTIN_KARRYN_COCK_PETTING_HUMAN_CUT_PALE_ID:
	case CUTIN_KARRYN_COCK_PETTING_HUMAN_CUT_BLACK_ID:
	case CUTIN_KARRYN_COCK_PETTING_HUMAN_HALF_NORMAL_ID:
	case CUTIN_KARRYN_COCK_PETTING_HUMAN_HALF_PALE_ID:
	case CUTIN_KARRYN_COCK_PETTING_HUMAN_HALF_BLACK_ID:
	case CUTIN_KARRYN_COCK_PETTING_HUMAN_SKIN_NORMAL_ID:
	case CUTIN_KARRYN_COCK_PETTING_HUMAN_SKIN_PALE_ID:
	case CUTIN_KARRYN_COCK_PETTING_HUMAN_SKIN_BLACK_ID:
	case CUTIN_KARRYN_COCK_PETTING_GOBLIN_NORMAL_ID:
	case CUTIN_KARRYN_COCK_PETTING_GOBLIN_DARK_ID:
	case CUTIN_KARRYN_COCK_PETTING_ORC_NORMAL_ID:
	case CUTIN_KARRYN_COCK_PETTING_ORC_DARK_ID:
	case CUTIN_KARRYN_COCK_PETTING_LIZARDMAN_NORMAL_ID:
	case CUTIN_KARRYN_COCK_PETTING_LIZARDMAN_DARK_ID:
	case CUTIN_KARRYN_COCK_PETTING_SLIME_NORMAL_ID:
	case CUTIN_KARRYN_COCK_PETTING_WEREWOLF_NORMAL_ID:
	case CUTIN_KARRYN_COCK_PETTING_YETI_NORMAL_ID:
		wait = 73; 		//wait = CutInの時間
		startingX 	= REM_CUT_IN_LEFT_X + 40; 		//startingX = CutInが始まる時のX位置
		goalX 		= REM_CUT_IN_RIGHT_X + 40; 		//goalX = CutInが終わる時のX位置
		startingY 	= REM_CUT_IN_TOP_Y + 80; 		//startingY = CutInが始まる時のY位置
		goalY 		= REM_CUT_IN_TOP_Y + 80; 		//goalY = CutInが終わる時のY位置
		directionX = REM_CUT_IN_SPEED_X; 		//directionX = CutInのX方向
		directionY = 0; 		//directionY = CutInのY方向
		switch(cutInId) {
		case CUTIN_KARRYN_COCK_PETTING_HUMAN_CUT_NORMAL_ID:
			fileNameNormal 			= 'cutin_pt_ck_human_cut_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_pt_ck_human_cut_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ck_human_cut_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ck_human_cut_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_KARRYN_COCK_PETTING_HUMAN_CUT_PALE_ID:
			fileNameNormal 			= 'cutin_pt_ck_human_cut_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_pt_ck_human_cut_pale_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ck_human_cut_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ck_human_cut_pale_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_KARRYN_COCK_PETTING_HUMAN_CUT_BLACK_ID:
			fileNameNormal 			= 'cutin_pt_ck_human_cut_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_pt_ck_human_cut_black_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ck_human_cut_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ck_human_cut_black_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_KARRYN_COCK_PETTING_HUMAN_HALF_NORMAL_ID:
			fileNameNormal 			= 'cutin_pt_ck_human_half_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_pt_ck_human_half_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ck_human_half_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ck_human_half_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_KARRYN_COCK_PETTING_HUMAN_HALF_PALE_ID:
			fileNameNormal 			= 'cutin_pt_ck_human_half_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_pt_ck_human_half_pale_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ck_human_half_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ck_human_half_pale_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_KARRYN_COCK_PETTING_HUMAN_HALF_BLACK_ID:
			fileNameNormal 			= 'cutin_pt_ck_human_half_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_pt_ck_human_half_black_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ck_human_half_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ck_human_half_black_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_KARRYN_COCK_PETTING_HUMAN_SKIN_NORMAL_ID:
			fileNameNormal 			= 'cutin_pt_ck_human_skin_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_pt_ck_human_skin_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ck_human_skin_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ck_human_skin_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_KARRYN_COCK_PETTING_HUMAN_SKIN_PALE_ID:
			fileNameNormal 			= 'cutin_pt_ck_human_skin_pale'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_pt_ck_human_skin_pale_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ck_human_skin_pale_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ck_human_skin_pale_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_KARRYN_COCK_PETTING_HUMAN_SKIN_BLACK_ID:
			fileNameNormal 			= 'cutin_pt_ck_human_skin_black'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_pt_ck_human_skin_black_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ck_human_skin_black_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ck_human_skin_black_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_KARRYN_COCK_PETTING_GOBLIN_NORMAL_ID:
			fileNameNormal 			= 'cutin_pt_ck_goblin_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_pt_ck_goblin_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ck_goblin_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ck_goblin_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_KARRYN_COCK_PETTING_GOBLIN_DARK_ID:
			fileNameNormal 			= 'cutin_pt_ck_goblin_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_pt_ck_goblin_dark_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ck_goblin_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ck_goblin_dark_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_KARRYN_COCK_PETTING_ORC_NORMAL_ID:
			fileNameNormal 			= 'cutin_pt_ck_orc_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_pt_ck_orc_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ck_orc_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ck_orc_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_KARRYN_COCK_PETTING_ORC_DARK_ID:
			fileNameNormal 			= 'cutin_pt_ck_orc_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_pt_ck_orc_dark_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ck_orc_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ck_orc_dark_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_KARRYN_COCK_PETTING_LIZARDMAN_NORMAL_ID:
			fileNameNormal 			= 'cutin_pt_ck_lizardman_normal'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_pt_ck_lizardman_normal_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ck_lizardman_normal_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ck_lizardman_normal_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_KARRYN_COCK_PETTING_LIZARDMAN_DARK_ID:
			fileNameNormal 			= 'cutin_pt_ck_lizardman_dark'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_pt_ck_lizardman_dark_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ck_lizardman_dark_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ck_lizardman_dark_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_KARRYN_COCK_PETTING_SLIME_NORMAL_ID:
			fileNameNormal 			= 'cutin_pt_ck_slime'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_pt_ck_slime_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ck_slime_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ck_slime_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_KARRYN_COCK_PETTING_WEREWOLF_NORMAL_ID:
			fileNameNormal 			= 'cutin_pt_ck_werewolf'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_pt_ck_werewolf_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ck_werewolf_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ck_werewolf_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		case CUTIN_KARRYN_COCK_PETTING_YETI_NORMAL_ID:
			fileNameNormal 			= 'cutin_pt_ck_yeti'; //fileNameNormal　= CutInアニメなしのファイルネーム
			fileNameNormalCensored	= 'cutin_pt_ck_yeti_cen'; //fileNameNormalCensored　= CutInアニメなしモザイクありのファイルネーム
			fileNameAnime 			= 'cutin_pt_ck_yeti_anime'; //fileNameAnime = CutInアニメありのファイルネーム
			fileNameAnimeCensored 	= 'cutin_pt_ck_yeti_anime_cen'; //fileNameAnimeCensored = CutInアニメありモザイクありのファイルネーム
		break;
		}
	break;
	}
	
	//編集はここまで
	
	//Pose Cut-In X & Y Positions
	switch(poseName) {
	case POSE_STANDBY:
			startingX += REM_CUT_IN_COMBAT_STANDBY_X_OFFSET;
			goalX += REM_CUT_IN_COMBAT_STANDBY_X_OFFSET;
			startingY += REM_CUT_IN_COMBAT_STANDBY_Y_OFFSET;
			goalY += REM_CUT_IN_COMBAT_STANDBY_Y_OFFSET;
	break;
	case POSE_UNARMED:
			startingX += REM_CUT_IN_COMBAT_UNARMED_X_OFFSET;
			goalX += REM_CUT_IN_COMBAT_UNARMED_X_OFFSET;
			startingY += REM_CUT_IN_COMBAT_UNARMED_Y_OFFSET;
			goalY += REM_CUT_IN_COMBAT_UNARMED_Y_OFFSET;
	break;
	case POSE_DEFEND:
			startingX += REM_CUT_IN_COMBAT_DEFEND_X_OFFSET;
			goalX += REM_CUT_IN_COMBAT_DEFEND_X_OFFSET;
			startingY += REM_CUT_IN_COMBAT_DEFEND_Y_OFFSET;
			goalY += REM_CUT_IN_COMBAT_DEFEND_Y_OFFSET;
	break;
	case POSE_EVADE:
			startingX += REM_CUT_IN_COMBAT_EVADE_X_OFFSET;
			goalX += REM_CUT_IN_COMBAT_EVADE_X_OFFSET;
			startingY += REM_CUT_IN_COMBAT_EVADE_Y_OFFSET;
			goalY += REM_CUT_IN_COMBAT_EVADE_Y_OFFSET;
	break;
	case POSE_DOWN_ORGASM:
			startingX += REM_CUT_IN_DOWN_ORG_X_OFFSET;
			goalX += REM_CUT_IN_DOWN_ORG_X_OFFSET;
			startingY += REM_CUT_IN_DOWN_ORG_Y_OFFSET;
			goalY += REM_CUT_IN_DOWN_ORG_Y_OFFSET;
	break;
	case POSE_DOWN_STAMINA:
			startingX += REM_CUT_IN_DOWN_STAMINA_X_OFFSET;
			goalX += REM_CUT_IN_DOWN_STAMINA_X_OFFSET;
			startingY += REM_CUT_IN_DOWN_STAMINA_Y_OFFSET;
			goalY += REM_CUT_IN_DOWN_STAMINA_Y_OFFSET;
	break;
	case POSE_DOWN_FALLDOWN:
			startingX += REM_CUT_IN_DOWN_FALLDOWN_X_OFFSET;
			goalX += REM_CUT_IN_DOWN_FALLDOWN_X_OFFSET;
			startingY += REM_CUT_IN_DOWN_FALLDOWN_Y_OFFSET;
			goalY += REM_CUT_IN_DOWN_FALLDOWN_Y_OFFSET;
	break;
	case POSE_DEFEATED_LEVEL1:
			startingX += REM_CUT_IN_DEFEATED_LV1_X_OFFSET;
			goalX += REM_CUT_IN_DEFEATED_LV1_X_OFFSET;
			startingY += REM_CUT_IN_DEFEATED_LV1_Y_OFFSET;
			goalY += REM_CUT_IN_DEFEATED_LV1_Y_OFFSET;
	break;
	case POSE_DEFEATED_LEVEL2:
			startingX += REM_CUT_IN_DEFEATED_LV2_X_OFFSET;
			goalX += REM_CUT_IN_DEFEATED_LV2_X_OFFSET;
			startingY += REM_CUT_IN_DEFEATED_LV2_Y_OFFSET;
			goalY += REM_CUT_IN_DEFEATED_LV2_Y_OFFSET;
	break;
	case POSE_DEFEATED_GUARD:
			startingX += REM_CUT_IN_DEFEATED_GUARD_X_OFFSET;
			goalX += REM_CUT_IN_DEFEATED_GUARD_X_OFFSET;
			startingY += REM_CUT_IN_DEFEATED_GUARD_Y_OFFSET;
			goalY += REM_CUT_IN_DEFEATED_GUARD_Y_OFFSET;
	break;
	case POSE_WAITRESS_SEX:
			startingX += REM_CUT_IN_WAITRESS_SEX_X_OFFSET;
			goalX += REM_CUT_IN_WAITRESS_SEX_X_OFFSET;
			startingY += REM_CUT_IN_WAITRESS_SEX_Y_OFFSET;
			goalY += REM_CUT_IN_WAITRESS_SEX_Y_OFFSET;
	break;
	case POSE_MAP:
		if($gameParty.isInWaitressBattle) {
			startingX += REM_CUT_IN_WAITRESS_SERVING_X_OFFSET;
			goalX += REM_CUT_IN_WAITRESS_SERVING_X_OFFSET;
			startingY += REM_CUT_IN_WAITRESS_SERVING_Y_OFFSET;
			goalY += REM_CUT_IN_WAITRESS_SERVING_Y_OFFSET;
		}
	break;
	case POSE_RECEPTIONIST:
			startingX += REM_CUT_IN_RECEPTIONIST_X_OFFSET;
			goalX += REM_CUT_IN_RECEPTIONIST_X_OFFSET;
			startingY += REM_CUT_IN_RECEPTIONIST_Y_OFFSET;
			goalY += REM_CUT_IN_RECEPTIONIST_Y_OFFSET;
	break;
	case POSE_TOILET_SIT_LEFT:
	case POSE_TOILET_STAND_RIGHT:
				startingX += REM_CUT_IN_GLORY_SITLEFT_STANDRIGHT_X_OFFSET;
				goalX += REM_CUT_IN_GLORY_SITLEFT_STANDRIGHT_X_OFFSET;
				startingY += REM_CUT_IN_GLORY_SITLEFT_STANDRIGHT_Y_OFFSET;
				goalY += REM_CUT_IN_GLORY_SITLEFT_STANDRIGHT_Y_OFFSET;
	break;
	case POSE_TOILET_SITTING:
	case POSE_TOILET_SIT_RIGHT:
	case POSE_TOILET_STAND_LEFT:
				startingX += REM_CUT_IN_GLORY_X_OFFSET;
				goalX += REM_CUT_IN_GLORY_X_OFFSET;
				startingY += REM_CUT_IN_GLORY_Y_OFFSET;
				goalY += REM_CUT_IN_GLORY_Y_OFFSET;
	break;
	case POSE_STRIPPER_VIP:
			startingX += REM_CUT_IN_STRIPPER_SEX_X_OFFSET;
			goalX += REM_CUT_IN_STRIPPER_SEX_X_OFFSET;
			startingY += REM_CUT_IN_STRIPPER_SEX_Y_OFFSET;
			goalY += REM_CUT_IN_STRIPPER_SEX_Y_OFFSET;
	break;
	case POSE_TRAINER_TEKOKI:
			startingX += REM_CUT_IN_TRAINER_TEKOKI_X_OFFSET;
			goalX += REM_CUT_IN_TRAINER_TEKOKI_X_OFFSET;
			startingY += REM_CUT_IN_TRAINER_TEKOKI_Y_OFFSET;
			goalY += REM_CUT_IN_TRAINER_TEKOKI_Y_OFFSET;
	break;
	case POSE_TRAINER_KISU:
			startingX += REM_CUT_IN_TRAINER_KISU_X_OFFSET;
			goalX += REM_CUT_IN_TRAINER_KISU_X_OFFSET;
			startingY += REM_CUT_IN_TRAINER_KISU_Y_OFFSET;
			goalY += REM_CUT_IN_TRAINER_KISU_Y_OFFSET;
	break;
	case POSE_TRAINER_FERA:
			startingX += REM_CUT_IN_TRAINER_FERA_X_OFFSET;
			goalX += REM_CUT_IN_TRAINER_FERA_X_OFFSET;
			startingY += REM_CUT_IN_TRAINER_FERA_Y_OFFSET;
			goalY += REM_CUT_IN_TRAINER_FERA_Y_OFFSET;
	break;
	case POSE_TRAINER_PAIZURI:
			startingX += REM_CUT_IN_TRAINER_PAIZURI_X_OFFSET;
			goalX += REM_CUT_IN_TRAINER_PAIZURI_X_OFFSET;
			startingY += REM_CUT_IN_TRAINER_PAIZURI_Y_OFFSET;
			goalY += REM_CUT_IN_TRAINER_PAIZURI_Y_OFFSET;
	break;
	case POSE_TRAINER_RINKAN:
			startingX += REM_CUT_IN_TRAINER_SEX_X_OFFSET;
			goalX += REM_CUT_IN_TRAINER_SEX_X_OFFSET;
			startingY += REM_CUT_IN_TRAINER_SEX_Y_OFFSET;
			goalY += REM_CUT_IN_TRAINER_SEX_Y_OFFSET;
	break;
	case POSE_GOBLINCUNNILINGUS:
			startingX += REM_CUT_IN_SEX_GOBLIN_CL_X_OFFSET;
			goalX += REM_CUT_IN_SEX_GOBLIN_CL_X_OFFSET;
			startingY += REM_CUT_IN_SEX_GOBLIN_CL_Y_OFFSET;
			goalY += REM_CUT_IN_SEX_GOBLIN_CL_Y_OFFSET;
	break;
	case POSE_PAIZURI_LAYING:
			startingX += REM_CUT_IN_SEX_LAYING_PAIZURI_X_OFFSET;
			goalX += REM_CUT_IN_SEX_LAYING_PAIZURI_X_OFFSET;
			startingY += REM_CUT_IN_SEX_LAYING_PAIZURI_Y_OFFSET;
			goalY += REM_CUT_IN_SEX_LAYING_PAIZURI_Y_OFFSET;
	break;
	case POSE_RIMJOB:
			startingX += REM_CUT_IN_SEX_RIMMING_X_OFFSET;
			goalX += REM_CUT_IN_SEX_RIMMING_X_OFFSET;
			startingY += REM_CUT_IN_SEX_RIMMING_Y_OFFSET;
			goalY += REM_CUT_IN_SEX_RIMMING_Y_OFFSET;
	break;
	case POSE_THUGGANGBANG:
			startingX += REM_CUT_IN_SEX_THUG_GB_X_OFFSET;
			goalX += REM_CUT_IN_SEX_THUG_GB_X_OFFSET;
			startingY += REM_CUT_IN_SEX_THUG_GB_Y_OFFSET;
			goalY += REM_CUT_IN_SEX_THUG_GB_Y_OFFSET;
	break;
	case POSE_GUARDGANGBANG:
			startingX += REM_CUT_IN_SEX_GUARD_GB_X_OFFSET;
			goalX += REM_CUT_IN_SEX_GUARD_GB_X_OFFSET;
			startingY += REM_CUT_IN_SEX_GUARD_GB_Y_OFFSET;
			goalY += REM_CUT_IN_SEX_GUARD_GB_Y_OFFSET;
	break;
	case POSE_FOOTJOB:
			startingX += REM_CUT_IN_SEX_FOOTJ_X_OFFSET;
			goalX += REM_CUT_IN_SEX_FOOTJ_X_OFFSET;
			startingY += REM_CUT_IN_SEX_FOOTJ_Y_OFFSET;
			goalY += REM_CUT_IN_SEX_FOOTJ_Y_OFFSET;
	break;
	case POSE_HJ_STANDING:
			startingX += REM_CUT_IN_SEX_STANDING_HJ_X_OFFSET;
			goalX += REM_CUT_IN_SEX_STANDING_HJ_X_OFFSET;
			startingY += REM_CUT_IN_SEX_STANDING_HJ_Y_OFFSET;
			goalY += REM_CUT_IN_SEX_STANDING_HJ_Y_OFFSET;
	break;
	case POSE_BJ_KNEELING:
			startingX += REM_CUT_IN_SEX_KNEELING_BJ_X_OFFSET;
			goalX += REM_CUT_IN_SEX_KNEELING_BJ_X_OFFSET;
			startingY += REM_CUT_IN_SEX_KNEELING_BJ_Y_OFFSET;
			goalY += REM_CUT_IN_SEX_KNEELING_BJ_Y_OFFSET;
	break;
	case POSE_SLIME_PILEDRIVER_ANAL:
			startingX += REM_CUT_IN_SEX_SLIME_PL_X_OFFSET;
			goalX += REM_CUT_IN_SEX_SLIME_PL_X_OFFSET;
			startingY += REM_CUT_IN_SEX_SLIME_PL_Y_OFFSET;
			goalY += REM_CUT_IN_SEX_SLIME_PL_Y_OFFSET;
	break;
	case POSE_WEREWOLF_BACK:
			startingX += REM_CUT_IN_SEX_WEREWOLF_BACK_X_OFFSET;
			goalX += REM_CUT_IN_SEX_WEREWOLF_BACK_X_OFFSET;
			startingY += REM_CUT_IN_SEX_WEREWOLF_BACK_Y_OFFSET;
			goalY += REM_CUT_IN_SEX_WEREWOLF_BACK_Y_OFFSET;
	break;
	}
	
	if(ConfigManager.remCutinsFast) wait = CUTIN_DEFAULT_DURATION;

	BattleManager.cutinWait(wait);
	this._cutInFileNameNoAnime = fileNameNormal;
	this._cutInFileNameYesAnime = fileNameAnime;
	this._cutInFileNameNoAnimeCensored = fileNameNormalCensored;
	this._cutInFileNameYesAnimeCensored = fileNameAnimeCensored;
	this._cutInPosX = startingX;
	this._cutInGoalX = goalX;
	this._cutInPosY = startingY;
	this._cutInGoalY = goalY;
	this._cutInDirectionX = directionX;
	this._cutInDirectionY = directionY;
	this._cutInWidthScale = widthScale;
	this._cutInHeightScale = heightScale;
};

Game_Actor.prototype.displayCutin = function() {
	let fileName = '';
	if(ConfigManager.remCutinsFast) {
		if(Karryn.isCensored())
			fileName = this._cutInFileNameNoAnimeCensored;
		else
			fileName = this._cutInFileNameNoAnime;
	}
	else {
		if(Karryn.isCensored())
			fileName = this._cutInFileNameYesAnimeCensored;
		else
			fileName = this._cutInFileNameYesAnime;
	}
	
	let speedX = 0;
	let speedY = 0;
	let moveDuration = 0;
	if(this._cutInDirectionX != 0) speedX = Math.abs((this._cutInGoalX - this._cutInPosX) / this._cutInDirectionX);
	if(this._cutInDirectionY != 0) speedY = Math.abs((this._cutInGoalY - this._cutInPosY) / this._cutInDirectionY);
	moveDuration = Math.max(speedX, speedY);
	//console.log('displaycutin ' + fileName + ' ' + moveDuration)

	$gameScreen.showPicture(PICTURE_CUTIN_ID, fileName, 0, this._cutInPosX, this._cutInPosY, this._cutInWidthScale, this._cutInHeightScale, 255, 0);
	if(moveDuration > 0)
		$gameScreen.movePicture(PICTURE_CUTIN_ID, 0, this._cutInGoalX, this._cutInGoalY, this._cutInWidthScale, this._cutInHeightScale, 255, 0, moveDuration);
	
};


Remtairy.CutIn.BattleManager_processActionSequence =
    BattleManager.processActionSequence;
BattleManager.processActionSequence = function(actionName, actionArgs) {
	// Rem Cut In: #
	if(['REM CUTIN'].contains(actionName)) {
		let actor = $gameActors.actor(ACTOR_KARRYN_ID);
		let cutinId = eval(actionArgs[0]);
		
		if(cutinId == CUTIN_KARRYN_ORGASM_TWO_ID) {
			actor.startAnimation($dataSkills[SKILL_FEMALE_ORGASM_TWO_ID].animationId, false, 0);
			actor.setTachieCutIn(cutinId);
			$gameScreen.startShake(REM_ORGASM_LV2_SCREEN_SHAKE_POWER, REM_ORGASM_LV2_SCREEN_SHAKE_SPEED, REM_ORGASM_LV2_SCREEN_SHAKE_DURATION);
			return;
		}
		else if(cutinId == CUTIN_KARRYN_ORGASM_ONE_ID) {
			actor.startAnimation($dataSkills[SKILL_FEMALE_ORGASM_ONE_ID].animationId, false, 0);
			actor.setTachieCutIn(cutinId);
			$gameScreen.startShake(REM_ORGASM_LV1_SCREEN_SHAKE_POWER, REM_ORGASM_LV1_SCREEN_SHAKE_SPEED, REM_ORGASM_LV1_SCREEN_SHAKE_DURATION);
			return;
		}
		
		return Karryn.setTachieCutIn(eval(actionArgs[0]));
    }
	return Remtairy.CutIn.BattleManager_processActionSequence.call(this, actionName, actionArgs);
};