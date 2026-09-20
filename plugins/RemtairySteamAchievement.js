var Remtairy = Remtairy || {};
Remtairy.SteamAchievement = Remtairy.SteamAchievement || {};

//=============================================================================
 /*:
 * @plugindesc Steam Achievement
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================

Game_Party.prototype.remAch_prologue = function() {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(!OrangeGreenworks.getAchievement('ACH_PROLOGUE')) {
			OrangeGreenworks.activateAchievement('ACH_PROLOGUE');
		}
	}
};

Game_Party.prototype.remAch_level1Boss = function() {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(!OrangeGreenworks.getAchievement('ACH_LEVEL1_BOSS')) {
			OrangeGreenworks.activateAchievement('ACH_LEVEL1_BOSS');
		}
	}
};

Game_Party.prototype.remAch_level2Boss = function() {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(!OrangeGreenworks.getAchievement('ACH_LEVEL2_BOSS')) {
			OrangeGreenworks.activateAchievement('ACH_LEVEL2_BOSS');
		}
	}
};

Game_Party.prototype.remAch_level3Boss = function() {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(!OrangeGreenworks.getAchievement('ACH_LEVEL3_BOSS')) {
			OrangeGreenworks.activateAchievement('ACH_LEVEL3_BOSS');
		}
	}
};

Game_Party.prototype.remAch_level4Boss = function() {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(!OrangeGreenworks.getAchievement('ACH_LEVEL4_BOSS')) {
			OrangeGreenworks.activateAchievement('ACH_LEVEL4_BOSS');
		}
	}
};

Game_Party.prototype.remAch_finalBoss = function() {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(!OrangeGreenworks.getAchievement('ACH_FINAL_BOSS')) {
			OrangeGreenworks.activateAchievement('ACH_FINAL_BOSS');
		}
	}
};

Game_Party.prototype.remAch_firstEdict = function() {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(!OrangeGreenworks.getAchievement('ACH_FIRST_EDICT')) {
			OrangeGreenworks.activateAchievement('ACH_FIRST_EDICT');
		}
	}
};

Game_Party.prototype.remAch_tenPassives = function() {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(!OrangeGreenworks.getAchievement('ACH_TEN_PASSIVES')) {
			OrangeGreenworks.activateAchievement('ACH_TEN_PASSIVES');
		}
	}
};

Game_Party.prototype.remAch_defeated = function() {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(!OrangeGreenworks.getAchievement('ACH_DEFEATED')) {
			OrangeGreenworks.activateAchievement('ACH_DEFEATED');
		}
	}
};

Game_Party.prototype.remAch_fearless = function() {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(!OrangeGreenworks.getAchievement('ACH_FEARLESS')) {
			OrangeGreenworks.activateAchievement('ACH_FEARLESS');
		}
	}
};

Game_Party.prototype.remAch_firstKiss = function() {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(!OrangeGreenworks.getAchievement('ACH_FIRST_KISS')) {
			OrangeGreenworks.activateAchievement('ACH_FIRST_KISS');
		}
	}
};

Game_Party.prototype.remAch_everyonesIdol = function() {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(!OrangeGreenworks.getAchievement('ACH_EVERYONES_IDOL')) {
			OrangeGreenworks.activateAchievement('ACH_EVERYONES_IDOL');
		}
	}
};

Game_Party.prototype.remAch_sleepyBeauty = function() {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(!OrangeGreenworks.getAchievement('ACH_SLEEPY_BEAUTY')) {
			OrangeGreenworks.activateAchievement('ACH_SLEEPY_BEAUTY');
		}
	}
};

Game_Party.prototype.remAch_beautyAndTheBeast = function() {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(!OrangeGreenworks.getAchievement('ACH_BEAUTY_AND_THE_BEAST')) {
			OrangeGreenworks.activateAchievement('ACH_BEAUTY_AND_THE_BEAST');
		}
	}
};

Game_Party.prototype.remAch_unconventional = function() {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(!OrangeGreenworks.getAchievement('ACH_UNCONVENTIONAL')) {
			OrangeGreenworks.activateAchievement('ACH_UNCONVENTIONAL');
		}
	}
};

Game_Party.prototype.remAch_taunt = function() {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(!OrangeGreenworks.getAchievement('ACH_TAUNT')) {
			OrangeGreenworks.activateAchievement('ACH_TAUNT');
		}
	}
};

Game_Party.prototype.remAch_bankruptcy = function() {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(!OrangeGreenworks.getAchievement('ACH_BANKRUPTCY')) {
			OrangeGreenworks.activateAchievement('ACH_BANKRUPTCY');
		}
	}
};

Game_Party.prototype.remAch_artisanMeal = function() {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(!OrangeGreenworks.getAchievement('ACH_ARTISAN_MEAL')) {
			OrangeGreenworks.activateAchievement('ACH_ARTISAN_MEAL');
		}
	}
};

Game_Party.prototype.remAch_subdueRiot = function() {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(!OrangeGreenworks.getAchievement('ACH_SUBDUE_RIOT')) {
			OrangeGreenworks.activateAchievement('ACH_SUBDUE_RIOT');
		}
	}
};

Game_Party.prototype.remAch_fullOrder = function() {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(!OrangeGreenworks.getAchievement('ACH_MAX_ORDER')) {
			OrangeGreenworks.activateAchievement('ACH_MAX_ORDER');
		}
	}
};

Game_Party.prototype.remAch_zeroOrder = function() {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(!OrangeGreenworks.getAchievement('ACH_GAME_OVER')) {
			OrangeGreenworks.activateAchievement('ACH_GAME_OVER');
		}
	}
};

Game_Party.prototype.remAch_waitressShifts = function(count) {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(count >= 20) {
			if(!OrangeGreenworks.getAchievement('ACH_WAITRESS_SHIFTS')) {
				OrangeGreenworks.activateAchievement('ACH_WAITRESS_SHIFTS');
			}
		}
	}
};

Game_Party.prototype.remAch_receptionistRadio = function() {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(!OrangeGreenworks.getAchievement('ACH_RECEPTIONIST_RADIO')) {
			OrangeGreenworks.activateAchievement('ACH_RECEPTIONIST_RADIO');
		}
	}
};

Game_Party.prototype.remAch_meltys = function(actor) {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(actor.equips()[1] && actor.equips()[2] && actor.equips()[3] && actor.equips()[4] && actor.equips()[5]) {
			if(!OrangeGreenworks.getAchievement('ACH_MELTYS')) {
				OrangeGreenworks.activateAchievement('ACH_MELTYS');
			}
		}
	}
};

Game_Party.prototype.remAch_hardworkingRestroom = function() {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(!OrangeGreenworks.getAchievement('ACH_HARDWORKING_RESTROOM')) {
			OrangeGreenworks.activateAchievement('ACH_HARDWORKING_RESTROOM');
		}
	}
};

Game_Party.prototype.remAch_danceCombo = function() {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(!OrangeGreenworks.getAchievement('ACH_DANCE_COMBO')) {
			OrangeGreenworks.activateAchievement('ACH_DANCE_COMBO');
		}
	}
};

Game_Party.prototype.remAch_aspiringHero = function() {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(!OrangeGreenworks.getAchievement('ACH_ASPIRING_HERO')) {
			OrangeGreenworks.activateAchievement('ACH_ASPIRING_HERO');
		}
	}
};

Game_Party.prototype.remAch_statTitleStr = function() {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(!OrangeGreenworks.getAchievement('ACH_STAT_TITLE_STR')) {
			OrangeGreenworks.activateAchievement('ACH_STAT_TITLE_STR');
		}
	}
};
Game_Party.prototype.remAch_statTitleDex = function() {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(!OrangeGreenworks.getAchievement('ACH_STAT_TITLE_DEX')) {
			OrangeGreenworks.activateAchievement('ACH_STAT_TITLE_DEX');
		}
	}
};
Game_Party.prototype.remAch_statTitleAgi = function() {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(!OrangeGreenworks.getAchievement('ACH_STAT_TITLE_AGI')) {
			OrangeGreenworks.activateAchievement('ACH_STAT_TITLE_AGI');
		}
	}
};
Game_Party.prototype.remAch_statTitleEnd = function() {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(!OrangeGreenworks.getAchievement('ACH_STAT_TITLE_END')) {
			OrangeGreenworks.activateAchievement('ACH_STAT_TITLE_END');
		}
	}
};
Game_Party.prototype.remAch_statTitleMind = function() {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(!OrangeGreenworks.getAchievement('ACH_STAT_TITLE_MIND')) {
			OrangeGreenworks.activateAchievement('ACH_STAT_TITLE_MIND');
		}
	}
};

Game_Party.prototype.remAch_queenOfFighters = function() {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(!OrangeGreenworks.getAchievement('ACH_KICK_REWARD')) {
			OrangeGreenworks.activateAchievement('ACH_KICK_REWARD');
		}
	}
};

Game_Party.prototype.remAch_masoRun = function() {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(!OrangeGreenworks.getAchievement('ACH_MASO_RUN')) {
			OrangeGreenworks.activateAchievement('ACH_MASO_RUN');
		}
	}
};
Game_Party.prototype.remAch_sadoRun = function() {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(!OrangeGreenworks.getAchievement('ACH_SADO_RUN')) {
			OrangeGreenworks.activateAchievement('ACH_SADO_RUN');
		}
	}
};

Game_Party.prototype.remAch_freshEmperorSecretary = function() {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(!OrangeGreenworks.getAchievement('ACH_FRESH_EMPEROR_SECRETARY')) {
			OrangeGreenworks.activateAchievement('ACH_FRESH_EMPEROR_SECRETARY');
		}
	}
};

Game_Party.prototype.remAch_pureEmpressEnd = function() {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(!OrangeGreenworks.getAchievement('ACH_PURE_EMPRESS_END')) {
			OrangeGreenworks.activateAchievement('ACH_PURE_EMPRESS_END');
		}
	}
};

Game_Party.prototype.remAch_incorruptible = function() {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(!OrangeGreenworks.getAchievement('ACH_INCORRUPTIBLE')) {
			OrangeGreenworks.activateAchievement('ACH_INCORRUPTIBLE');
		}
	}
};

Game_Party.prototype.remAch_endlessPrisonWave15 = function() {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(!OrangeGreenworks.getAchievement('ACH_ENDLESS_PRISON_WAVE_15')) {
			OrangeGreenworks.activateAchievement('ACH_ENDLESS_PRISON_WAVE_15');
		}
	}
};

Game_Party.prototype.remAch_endlessHellWave9 = function() {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(!OrangeGreenworks.getAchievement('ACH_ENDLESS_HELL_WAVE_9')) {
			OrangeGreenworks.activateAchievement('ACH_ENDLESS_HELL_WAVE_9');
		}
	}
};

Game_Party.prototype.remAch_yasuNote = function() {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(!OrangeGreenworks.getAchievement('ACH_YASU_NOTE')) {
			OrangeGreenworks.activateAchievement('ACH_YASU_NOTE');
		}
	}
};

Game_Party.prototype.remAch_petKitty = function() {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(!OrangeGreenworks.getAchievement('ACH_PET_KITTY')) {
			OrangeGreenworks.activateAchievement('ACH_PET_KITTY');
		}
	}
};

Game_Party.prototype.remAch_freePlay400SlutLevel = function() {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(!OrangeGreenworks.getAchievement('ACH_FREEPLAY_400S')) {
			OrangeGreenworks.activateAchievement('ACH_FREEPLAY_400S');
		}
	}
};

Game_Party.prototype.remAch_purpleWanted = function(enemy) {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(enemy.isWanted && enemy.hasElitePrefix() && !enemy.isBossType && !Karryn.isInJobPose()) {
			if(!OrangeGreenworks.getAchievement('ACH_PURPLE_WANTED')) {
				OrangeGreenworks.activateAchievement('ACH_PURPLE_WANTED');
			}
		}
	}
};

Game_Party.prototype.remAch_poorJanitor = function(semen) {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(semen >= 69) {
			if(!OrangeGreenworks.getAchievement('ACH_POOR_JANITOR')) {
				OrangeGreenworks.activateAchievement('ACH_POOR_JANITOR');
			}
		}
	}
};

Game_Party.prototype.remAch_72Titles = function(count) {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(count >= 72) {
			if(!OrangeGreenworks.getAchievement('ACH_72_TITLES')) {
				OrangeGreenworks.activateAchievement('ACH_72_TITLES');
			}
		}
	}
};

Game_Party.prototype.remAch_empressEnd = function() {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(!OrangeGreenworks.getAchievement('ACH_EMPRESS_END')) {
			OrangeGreenworks.activateAchievement('ACH_EMPRESS_END');
		}
	}
};

Game_Party.prototype.remAch_happyEnd = function() {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(!OrangeGreenworks.getAchievement('ACH_HAPPY_END')) {
			OrangeGreenworks.activateAchievement('ACH_HAPPY_END');
		}
	}
};

Game_Party.prototype.remAch_redemption = function() {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(!OrangeGreenworks.getAchievement('ACH_REDEMPTION_RUN')) {
			OrangeGreenworks.activateAchievement('ACH_REDEMPTION_RUN');
		}
	}
};

Game_Party.prototype.remAch_speedRun = function() {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(!OrangeGreenworks.getAchievement('ACH_SPEED_RUN')) {
			OrangeGreenworks.activateAchievement('ACH_SPEED_RUN');
		}
	}
};

Game_Party.prototype.remAch_firstDescension = function() {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(!OrangeGreenworks.getAchievement('ACH_FIRST_DESCENSION')) {
			OrangeGreenworks.activateAchievement('ACH_FIRST_DESCENSION');
		}
	}
};

Game_Party.prototype.remAch_descensionThree = function() {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(!OrangeGreenworks.getAchievement('ACH_DESCENSION_THREE')) {
			OrangeGreenworks.activateAchievement('ACH_DESCENSION_THREE');
		}
	}
};

Game_Party.prototype.remAch_descensionFive = function() {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(!OrangeGreenworks.getAchievement('ACH_DESCENSION_FIVE')) {
			OrangeGreenworks.activateAchievement('ACH_DESCENSION_FIVE');
		}
	}
};

Game_Party.prototype.remAch_guardsFreeLunch = function() {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(!OrangeGreenworks.getAchievement('ACH_GUARDS_FREE_LUNCH')) {
			OrangeGreenworks.activateAchievement('ACH_GUARDS_FREE_LUNCH');
		}
	}
};

Game_Party.prototype.remAch_ribbon = function() {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(!OrangeGreenworks.getAchievement('ACH_RIBBON')) {
			OrangeGreenworks.activateAchievement('ACH_RIBBON');
		}
	}
};

Game_Party.prototype.remAch_goldFarmer = function(gold) {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(gold >= 2000) {
			if(!OrangeGreenworks.getAchievement('ACH_GOLD_FARMER')) {
				OrangeGreenworks.activateAchievement('ACH_GOLD_FARMER');
			}
		}
	}
};

Game_Party.prototype.remAch_rngesusPlease = function(levels) {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(levels >= 3) {
			if(!OrangeGreenworks.getAchievement('ACH_RNGESUS')) {
				OrangeGreenworks.activateAchievement('ACH_RNGESUS');
			}
		}
	}
};

Game_Party.prototype.remAch_differentMindsetClub = function(rep) {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(rep >= 10) {
			if(!OrangeGreenworks.getAchievement('ACH_DIFFERENT_MINDSET_SC')) {
				OrangeGreenworks.activateAchievement('ACH_DIFFERENT_MINDSET_SC');
			}
		}
	}
};

Game_Party.prototype.remAch_failedStateRiots = function() {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(!OrangeGreenworks.getAchievement('ACH_FAILED_STATE_RIOTS')) {
			OrangeGreenworks.activateAchievement('ACH_FAILED_STATE_RIOTS');
		}
	}
};

Game_Party.prototype.remAch_nice = function(corruption) {
	if(STEAM_MODE && !$gameParty.isDemoVersion()) {
		if(corruption >= 69) { //Nice.
			if(!OrangeGreenworks.getAchievement('ACH_NICE_BROTHER')) {
				OrangeGreenworks.activateAchievement('ACH_NICE_BROTHER');
			}
		}
	}
};