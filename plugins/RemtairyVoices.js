var Remtairy = Remtairy || {};
Remtairy.Voices = Remtairy.Voices || {};

var VAR_VOICE_CACHE_LIMIT = 5;
var VAR_MOAN_CACHE_LIMIT = 5;

//=============================================================================
 /*:
 * @plugindesc Voices
 * @author Remtairy
 *
 * @help
 * This is a private plugin. 
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================

AudioManager._bgmVolume      = 80;
AudioManager._bgsVolume      = 80;
AudioManager._meVolume       = 80;
AudioManager._seVolume       = 80;
AudioManager._remVoiceVolume       = 100;
AudioManager._remCurrentVoice     = null;
AudioManager._remVoiceBuffer      = null;
AudioManager._remMoanVolume       = 30;
AudioManager._remCurrentMoan     = null;
AudioManager._remMoanBuffer      = null;
AudioManager._remEnemyVoiceVolume       = 80;


//////////////////
//////////////////
// Audio Manager
//////////////////
//////////////////

Object.defineProperty(AudioManager, 'voiceVolume', {
    get: function() {
        return this._remVoiceVolume;
    },
    set: function(value) {
        this._remVoiceVolume = value;
        this.updateVoiceParameters(this._remCurrentVoice);
    },
    configurable: true
});
Object.defineProperty(AudioManager, 'moanVolume', {
    get: function() {
        return this._remMoanVolume;
    },
    set: function(value) {
        this._remMoanVolume = value;
        this.updateMoanParameters(this._remCurrentMoan);
    },
    configurable: true
});
Object.defineProperty(AudioManager, 'maleVolume', {
    get: function() {
        return this._remEnemyVoiceVolume;
    },
    set: function(value) {
        this._remEnemyVoiceVolume = value;
    },
    configurable: true
});


//////////
// Voice
AudioManager.playVoice = function(voice, pos, isTitle) {
	if($gameParty && $gameParty.isDemoVersion() && voice.name.includes('exp3')) return;
	
	if(this.voiceVolume === 0) {
		this.stopVoice();
		return;
	}
	
	this.stopMoan();
	
    if(this.isCurrentVoice(voice)) {
		if(this.isVoicePlaying()) {
			this.updateVoiceParameters(voice);
		}
		else {
			this._remVoiceBuffer.stop();
			this.updateVoiceParameters(voice);
			this._remVoiceBuffer.play(false);
		}
    } 
	else {
        this.stopVoice();
        if(voice.name) {
			let folder = 'voice';
            this._remVoiceBuffer = this.createBuffer(folder, voice.name);
            this.updateVoiceParameters(voice);
            this._remVoiceBuffer.play(false);
			if(!isTitle)
				this._remVoiceBuffer.addStopListener(Karryn.remVoiceStopped.bind(this));
        }
    }
    this.updateCurrentVoice(voice, pos);
	
	if(voice) {
        var i = voice.name;
		//console.log('playing voice ' + i);
        this._lastLoadedVoice = this._lastLoadedVoice || [];
        this._lastLoadedVoice.push(i);
        var t = VAR_VOICE_CACHE_LIMIT;
        while (this._lastLoadedVoice.length > t) {
            var i = this._lastLoadedVoice.shift();
            if (this._lastLoadedVoice.contains(i)) continue;
            if (this._audioCacheVoice[i]) {
                this._audioCacheVoice[i].clear();
                this._audioCacheVoice[i] = undefined;
            }
        }
    }
	
	this.stopMoan();
};



AudioManager.replayVoice = function(voice) {
    if(this.isCurrentVoice(voice)) {
        this.updateVoiceParameters(voice);
    } 
	else {
        this.playVoice(voice, voice.pos);
        if(this._remVoiceBuffer) {
            this._remVoiceBuffer.fadeIn(this._replayFadeTime);
        }
    }
};

AudioManager.isCurrentVoice = function(voice) {
    return(this._remCurrentVoice && this._remVoiceBuffer &&
            this._remCurrentVoice.name === voice.name);
};

AudioManager.updateVoiceParameters = function(voice) {
    this.updateBufferParameters(this._remVoiceBuffer, this._remVoiceVolume, voice);
};

AudioManager.updateCurrentVoice = function(voice, pos) {
    this._remCurrentVoice = {
        name: voice.name,
        volume: voice.volume,
        pitch: voice.pitch,
        pan: voice.pan,
        pos: pos
    };
};

AudioManager.stopVoice = function() {
    if(this._remVoiceBuffer) {
        this._remVoiceBuffer.stop();
        this._remVoiceBuffer = null;
        this._remCurrentVoice = null;
    }
};

AudioManager.fadeOutVoice = function(duration) {
    if(this._remVoiceBuffer && this._remCurrentVoice) {
        this._remVoiceBuffer.fadeOut(duration);
        this._remCurrentVoice = null;
    }
};

AudioManager.fadeInVoice = function(duration) {
    if(this._remVoiceBuffer && this._remCurrentVoice) {
        this._remVoiceBuffer.fadeIn(duration);
    }
};

AudioManager.isVoicePlaying = function() {
	if(this._remVoiceBuffer) {
		return this._remVoiceBuffer.isPlaying();
	}
	else return false;
};

//////////
// Moan
AudioManager.playMoan = function(moan, pos) {
	if($gameParty.isDemoVersion() && moan.name.includes('exp3')) return;
	
	if(this.moanVolume === 0) {
		this.stopMoan();
		return;
	}
	
    if(this._remVoiceBuffer && this.isVoicePlaying() && this.voiceVolume > 0) {
		this.stopMoan();
		return;
	}
	
	if(this.isCurrentMoan(moan)) {
        this.updateMoanParameters(moan);
    } 
	else {
        this.stopMoan();
        if(moan.name) {
			let folder = 'moan';
            this._remMoanBuffer = this.createBuffer(folder, moan.name);
            this.updateMoanParameters(moan);
            this._remMoanBuffer.play(true, pos || 0);
        }
    }
    this.updateCurrentMoan(moan, pos);
	
	if(moan) {
        var i = moan.name;
		//console.log('playing moan ' + i);
        this._lastLoadedMoan = this._lastLoadedMoan || [];
        this._lastLoadedMoan.push(i);
        var t = VAR_MOAN_CACHE_LIMIT;
        while (this._lastLoadedMoan.length > t) {
            var i = this._lastLoadedMoan.shift();
            if (this._lastLoadedMoan.contains(i)) continue;
            if (this._audioCacheMoan[i]) {
                this._audioCacheMoan[i].clear();
                this._audioCacheMoan[i] = undefined;
            }
        }
    }
};



AudioManager.replayMoan = function(moan) {
    if(this.isCurrentMoan(moan)) {
        this.updateMoanParameters(moan);
    } 
	else {
        this.playMoan(moan, moan.pos);
        if(this._remMoanBuffer) {
            this._remMoanBuffer.fadeIn(this._replayFadeTime);
        }
    }
};

AudioManager.isCurrentMoan = function(moan) {
    return(this._remCurrentMoan && this._remMoanBuffer &&
            this._remCurrentMoan.name === moan.name);
};

AudioManager.updateMoanParameters = function(moan) {
    this.updateBufferParameters(this._remMoanBuffer, this._remMoanVolume, moan);
};

AudioManager.updateCurrentMoan = function(moan, pos) {
    this._remCurrentMoan = {
        name: moan.name,
        volume: moan.volume,
        pitch: moan.pitch,
        pan: moan.pan,
        pos: pos
    };
};

AudioManager.stopMoan = function() {
    if(this._remMoanBuffer) {
        this._remMoanBuffer.stop();
        this._remMoanBuffer = null;
        this._remCurrentMoan = null;
    }
};

AudioManager.fadeOutMoan = function(duration) {
    if(this._remMoanBuffer && this._remCurrentMoan) {
        this._remMoanBuffer.fadeOut(duration);
        this._remCurrentMoan = null;
    }
};

AudioManager.fadeInMoan = function(duration) {
    if(this._remMoanBuffer && this._remCurrentMoan) {
        this._remMoanBuffer.fadeIn(duration);
    }
};

AudioManager.isMoanPlaying = function() {
	if(this._remMoanBuffer) {
		return this._remMoanBuffer.isPlaying();
	}
	else return false;
};

Remtairy.Voices.AudioManager_stopAll = AudioManager.stopAll;
AudioManager.stopAll = function() {
    Remtairy.Voices.AudioManager_stopAll.call(this);
	this.stopVoice();
	this.stopMoan();
};

Remtairy.Voices.AudioManager_checkErrors = AudioManager.checkErrors;
AudioManager.checkErrors = function() {
	Remtairy.Voices.AudioManager_checkErrors.call(this);
	this.checkWebAudioError(this._remVoiceBuffer);
	this.checkWebAudioError(this._remMoanBuffer);
};

AudioManager.playEnemyVoiceSe = function(enemyVoice) {
    if(enemyVoice.name) {
        this._seBuffers = this._seBuffers.filter(function(audio) {
            return audio.isPlaying();
        });
        var buffer = this.createBuffer('enemy', enemyVoice.name);
        this.updateEnemyVoiceParameters(buffer, enemyVoice);
        buffer.play(false);
        this._seBuffers.push(buffer);
    }
	
	if(enemyVoice) {
        var a = enemyVoice.name;
        this._lastLoadedEnemy = this._lastLoadedEnemy || [];
        this._lastLoadedEnemy.push(a);
        var i = Imported.Irina_AntiAudioDelay.CacheLimitSe;
        while (this._lastLoadedEnemy.length > i) {
            var a = this._lastLoadedEnemy.shift();
            if (this._lastLoadedEnemy.contains(a)) continue;
            if (this._audioCacheEnemy[a]) {
                this._audioCacheEnemy[a].clear();
                this._audioCacheEnemy[a] = undefined;
            }
        }
    }
};

AudioManager.updateEnemyVoiceParameters = function(buffer, enemyVoice) {
    this.updateBufferParameters(buffer, this._remEnemyVoiceVolume, enemyVoice);
};

///////////////
// Game Actor
//////////////

// Voice Stopped
Game_Actor.prototype.remVoiceStopped = function() {
	if(this._currentlyInTroopsCutsceneVoiceSetting) return;
	
	if(ConfigManager.autoContinueAfterVoice && SceneManager._scene._messageWindow && SceneManager._scene._messageWindow.pause && ConfigManager.karrynLinesPrompt && !$gameTroop.isAllDead()) {
		SceneManager._scene._messageWindow.pause = false;
		if(!SceneManager._scene._messageWindow._textState) {
			SceneManager._scene._messageWindow.terminateMessage();
		}
	}
	
	this.moanMasterManager();
};

Game_Actor.prototype.setTroopsCutsceneVoiceSetting = function(setting) {
	this._currentlyInTroopsCutsceneVoiceSetting = setting;
	
	if(setting) {
		AudioManager.stopMoan();
		AudioManager.stopVoice();
	}
	else {
		this.moanMasterManager();
	}
};

// Moan Master Manager
// Moan Manager
Game_Actor.prototype.moanMasterManager = function() {
	if(AudioManager._remVoiceBuffer && AudioManager.isVoicePlaying()) {
		AudioManager.stopMoan();
		return;
	}
	
	if(this.isInMapPose() && !this.isInWaitressServingPose()) {
		AudioManager.stopMoan();
		return;
	}
	
	if($gameParty.isInTrainerBattle && !this.isInTrainerTekokiPose() && !this.isInTrainerKisuPose() && !this.isInTrainerPaizuriPose() && !this.isInTrainerFeraPose() && !this.isInTrainerRinkanPose()) {
		AudioManager.stopMoan();
		return;
	}
	
	
	let karrynMoanArray = [];
	let moanVolume = 100;
	let givingBJ = this.isBodySlotPenis(MOUTH_ID);
	let pussyInserted = this.isBodySlotPenis(PUSSY_ID);
	let analInserted = this.isBodySlotPenis(ANAL_ID);
	let justOrgasmed = this.didLastGetHitBySkillType(JUST_SKILLTYPE_KARRYN_ORGASM);
	let isAroused = this.isAroused() || justOrgasmed;
	
	let generalReactionScore = this.getReactionScore();
	if(this.isInDownPose()) generalReactionScore = this.getDownPoseReactionScore();
	else if(this.isInCombatPose()) generalReactionScore = this.getCombatPoseReactionScore(false);
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	
	if(givingBJ) {
		if(generallvl3) {
			karrynMoanArray.push('moan_fera_exp3_1');
			karrynMoanArray.push('moan_fera_exp3_2');
			karrynMoanArray.push('moan_fera_exp3_3');
		}
		else if(generallvl2) {
			karrynMoanArray.push('moan_fera_exp2_1');
			karrynMoanArray.push('moan_fera_exp2_2');
		}
		else {
			karrynMoanArray.push('moan_fera_exp1_1');
			karrynMoanArray.push('moan_fera_exp1_2');
		}
	}
	else if(pussyInserted || analInserted) {
		if(generallvl3) {
			karrynMoanArray.push('moan_sex_exp3_1');
			karrynMoanArray.push('moan_sex_exp3_2');
			karrynMoanArray.push('moan_sex_exp3_3');
		}
		else if(generallvl2) {
			karrynMoanArray.push('moan_sex_exp2_1');
			karrynMoanArray.push('moan_sex_exp2_2');
		}
		else {
			karrynMoanArray.push('moan_sex_exp1_1');
			karrynMoanArray.push('moan_sex_exp1_2');
		}
	}
	else if(isAroused || justOrgasmed) {
		//Gym Exception
		if($gameParty.isInTrainerBattle) {
			if(this.isInTrainerKisuPose() && (this.isStateAffected(STATE_TRAINER_USED_KISS_ID) || this.isStateAffected(STATE_TRAINER_USED_KISS_LAST_TURN_ID))) {
				if(generallvl3) {
					karrynMoanArray.push('moan_fera_exp2_1');
					karrynMoanArray.push('moan_fera_exp2_2');
				}
				else {
					karrynMoanArray.push('moan_fera_exp1_1');
					karrynMoanArray.push('moan_fera_exp1_2');
				}
			}
			else if(!this.isInTrainerRinkanPose() && !justOrgasmed && !this.isBodySlotPenis(LEFT_HAND_ID) && !this.isBodySlotPenis(BOOBS_ID)) {
				if(generallvl3) {
					karrynMoanArray.push('moan_whisper_exp2_1');
					karrynMoanArray.push('moan_whisper_exp2_2');
				}
				else if(generallvl2) {
					karrynMoanArray.push('moan_whisper_exp1_1');
					karrynMoanArray.push('moan_whisper_exp1_2');
				}
			}
			moanVolume = 66;
		}
		else {
			if(generallvl3) {
				karrynMoanArray.push('moan_whisper_exp3_1');
				karrynMoanArray.push('moan_whisper_exp3_2');
			}
			else if(generallvl2) {
				karrynMoanArray.push('moan_whisper_exp2_1');
				karrynMoanArray.push('moan_whisper_exp2_2');
			}
			else {
				karrynMoanArray.push('moan_whisper_exp1_1');
				karrynMoanArray.push('moan_whisper_exp1_2');
			}
			moanVolume = 66;
		}
	}
	
	if($gameParty.isInStripperBattle && $gameParty.stripperBattle_intermissionPhase()) {
		moanVolume = Math.max(0, Math.round(moanVolume * STRIP_CLUB_INTERMISSION_MOAN_VOLUME));
	}
	
	
	if(karrynMoanArray.length > 0) {
		let moanFileName = karrynMoanArray[Math.randomInt(karrynMoanArray.length)];
		
		if(AudioManager.isMoanPlaying()) {
			if(moanFileName.includes('fera')) {
				if(AudioManager._remCurrentMoan.name.includes('fera')) return;
			}
			else if(moanFileName.includes('sex')) {
				if(AudioManager._remCurrentMoan.name.includes('sex')) return;
			}
			else if(moanFileName.includes('whisper')) {
				if(AudioManager._remCurrentMoan.name.includes('whisper')) return;
			}
		}
		
		if(ConfigManager.remVoiceLanguage === RemLanguageEN)
			moanFileName += '_en';
		else
			moanFileName += '_jp';
		
		
		
		AudioManager.playMoan({name:moanFileName, pan:0, pitch:100, volume:moanVolume});
	}
	else {
		AudioManager.stopMoan();
	}
};

///////////////
/////////////////
// Battle Manager
/////////////////
////////////////

BattleManager.battleVoiceManager = function(target, item, targetResult) {
	let skillId = item.id;

	if(target.isActor()) {
		let isEnemyAttackSkill = item.hasTag(TAG_ENEMY_ATTACK_SKILL);
		let isEnemyPettingSkill = item.hasTag(TAG_ENEMY_PETTING_SKILL);
		let isEnemySexSkill = item.hasTag(TAG_ENEMY_SEX_SKILL);
		let isActorWillpowerSkill = item.stypeId === SKILLTYPE_WILLPOWER_ID;
		let isActorEnergySkill = item.stypeId === SKILLTYPE_ENERGY_ID;
		let isActorSideJobSkill = item.stypeId === SKILLTYPE_WAITRESS_ID || item.stypeId === SKILLTYPE_RECEPTIONIST_ID || item.stypeId === SKILLTYPE_TOILET_ID || item.stypeId === SKILLTYPE_STRIPPER_ID || item.stypeId === SKILLTYPE_TRAINER_ID;
		let isActorInBattleMasturbateSkill = item.stypeId === SKILLTYPE_MASTURBATE_INBATTLE_ID;
		
		if(isEnemyAttackSkill) {
			this.playKarrynVoice_Damage(target, targetResult, skillId);
		}
		else if(isActorWillpowerSkill) {
			this.playKarrynVoice_Willpower(skillId, targetResult);
		}
		else if(DLC_GYM && (isActorEnergySkill || isActorSideJobSkill)) {
			this.playKarrynVoice_GymDLC_EnergyAndSideJob(skillId, targetResult);
		}
		else if(!isEnemySexSkill && !isActorInBattleMasturbateSkill) {
			Karryn.moanMasterManager();
		}
	}
	else {
		let isActorAttackSkill = item.hasTag(TAG_ACTOR_ATTACK_SKILL) || item.hasTag(TAG_KICK_SKILL);
		let isActorSexSkill = item.hasTag(TAG_ACTOR_SEX_SKILL);
		
		if(isActorAttackSkill) {
			this.playKarrynVoice_Attack(skillId, targetResult);
		}
		else if(!isActorSexSkill && !target.isEnemy()) {
			Karryn.moanMasterManager();
		}	
	}
};

BattleManager.playKarrynVoice_Attack = function(skillId, result) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let karrynVoiceArray = [];
	let isCritical = result.critical;
	let isEvade = result.evaded;
	let isGrazed = result.missed;
	
	let isBasicAttack = skillId === SKILL_KARRYN_HALBERD_STRIKE_ID || skillId === SKILL_KARRYN_HALBERD_SLASH_ID || skillId === SKILL_KARRYN_HALBERD_THRUST_ID || 
		skillId === SKILL_KARRYN_KICK_STRIKE_ID || skillId === SKILL_KARRYN_KICK_SLASH_ID || skillId === SKILL_KARRYN_KICK_THRUST_ID || skillId === SKILL_KARRYN_COCK_KICK_ID || skillId === SKILL_KARRYN_LIGHT_KICK_ID;
	let isCounterAttack = skillId === SKILL_KARRYN_COUNTER_HALBERD_STRIKE_ID || skillId === SKILL_KARRYN_COUNTER_HALBERD_SLASH_ID || skillId === SKILL_KARRYN_COUNTER_HALBERD_THRUST_ID || 
		skillId === SKILL_KARRYN_COUNTER_KICK_STRIKE_ID || skillId === SKILL_KARRYN_COUNTER_KICK_SLASH_ID || skillId === SKILL_KARRYN_COUNTER_KICK_THRUST_ID;
	let isSlamOne = skillId === SKILL_KARRYN_SLAM_1_ID;
	let isSlamTwo = skillId === SKILL_KARRYN_SLAM_2_ID;
	let isCleaveOne = skillId === SKILL_KARRYN_CLEAVE_1_ID;
	let isCleaveTwo = skillId === SKILL_KARRYN_CLEAVE_2_ID;
	let isSkewerOne = skillId === SKILL_KARRYN_SKEWER_1_ID;
	let isSkewerTwo = skillId === SKILL_KARRYN_SKEWER_2_ID;
	let isHeadStrike = skillId === SKILL_KARRYN_HEAD_STRIKE_ID || skillId === SKILL_KARRYN_KICK_HEAD_STRIKE_ID;
	let isArmSlash = skillId === SKILL_KARRYN_ARM_SLASH_ID || skillId === SKILL_KARRYN_KICK_ARM_SLASH_ID;
	let isLegThrust = skillId === SKILL_KARRYN_LEG_THRUST_ID || skillId === SKILL_KARRYN_KICK_LEG_THRUST_ID;
	
	let generalReactionScore = actor.getCombatPoseReactionScore(false);
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	let isTired = actor.currentPercentOfStamina_realMax() < 41;


	if(isEvade) {
		if(generallvl3) {
			karrynVoiceArray.push('attack_miss_exp3_1');
			karrynVoiceArray.push('attack_miss_exp3_2');
			karrynVoiceArray.push('attack_miss_exp3_3');
		}
		else if(generallvl2) {
			karrynVoiceArray.push('attack_miss_exp2_1');
			karrynVoiceArray.push('attack_miss_exp2_2');
			karrynVoiceArray.push('attack_miss_exp2_3');
		}
		else {
			karrynVoiceArray.push('attack_miss_exp1_1');
			karrynVoiceArray.push('attack_miss_exp1_2');
			karrynVoiceArray.push('attack_miss_exp1_3');
		}
	}
	else if(isGrazed) {
		if(generallvl3) {
			karrynVoiceArray.push('attack_grazed_exp3_1');
			karrynVoiceArray.push('attack_grazed_exp3_2');
			karrynVoiceArray.push('attack_grazed_exp3_3');
		}
		else if(generallvl2) {
			karrynVoiceArray.push('attack_grazed_exp2_1');
			karrynVoiceArray.push('attack_grazed_exp2_2');
			karrynVoiceArray.push('attack_grazed_exp2_3');
		}
		else {
			karrynVoiceArray.push('attack_grazed_exp1_1');
			karrynVoiceArray.push('attack_grazed_exp1_2');
			karrynVoiceArray.push('attack_grazed_exp1_3');
		}
	}
	else if(isCritical) {
		if(generallvl3) {
			karrynVoiceArray.push('attack_critical_exp3_1');
			karrynVoiceArray.push('attack_critical_exp3_2');
			karrynVoiceArray.push('attack_critical_exp3_3');
			karrynVoiceArray.push('attack_critical_exp3_4');
		}
		else if(generallvl2) {
			karrynVoiceArray.push('attack_critical_exp2_1');
			karrynVoiceArray.push('attack_critical_exp2_2');
			karrynVoiceArray.push('attack_critical_exp2_3');
		}
		else {
			karrynVoiceArray.push('attack_critical_exp1_1');
			karrynVoiceArray.push('attack_critical_exp1_2');
			karrynVoiceArray.push('attack_critical_exp1_3');
		}
	}
	else {
		if(isBasicAttack) {
			if(isTired) {
				if(generallvl3) {
					karrynVoiceArray.push('attack_normal_tired_exp3_1');
					karrynVoiceArray.push('attack_normal_tired_exp3_2');
					karrynVoiceArray.push('attack_normal_tired_exp3_3');
				}
				else if(generallvl2) {
					karrynVoiceArray.push('attack_normal_tired_exp2_1');
					karrynVoiceArray.push('attack_normal_tired_exp2_2');
					karrynVoiceArray.push('attack_normal_tired_exp2_3');
				}
				else {
					karrynVoiceArray.push('attack_normal_tired_exp1_1');
					karrynVoiceArray.push('attack_normal_tired_exp1_2');
					karrynVoiceArray.push('attack_normal_tired_exp1_3');
				}
			}
			else {
				if(generallvl3) {
					karrynVoiceArray.push('attack_normal_exp3_1');
					karrynVoiceArray.push('attack_normal_exp3_2');
					karrynVoiceArray.push('attack_normal_exp3_3');
					karrynVoiceArray.push('attack_normal_exp3_4');
					karrynVoiceArray.push('attack_normal_exp3_5');
				}
				else if(generallvl2) {
					karrynVoiceArray.push('attack_normal_exp2_1');
					karrynVoiceArray.push('attack_normal_exp2_2');
					karrynVoiceArray.push('attack_normal_exp2_3');
					karrynVoiceArray.push('attack_normal_exp2_4');
					karrynVoiceArray.push('attack_normal_exp2_5');
				}
				else {
					karrynVoiceArray.push('attack_normal_exp1_1');
					karrynVoiceArray.push('attack_normal_exp1_2');
					karrynVoiceArray.push('attack_normal_exp1_3');
					karrynVoiceArray.push('attack_normal_exp1_4');
					karrynVoiceArray.push('attack_normal_exp1_5');
				}
			}
		}
		else if(isCounterAttack) {
			if(generallvl3) {
				karrynVoiceArray.push('attack_counter_exp3_1');
				karrynVoiceArray.push('attack_counter_exp3_2');
				karrynVoiceArray.push('attack_counter_exp3_3');
			}
			else if(generallvl2) {
				karrynVoiceArray.push('attack_counter_exp2_1');
				karrynVoiceArray.push('attack_counter_exp2_2');
				karrynVoiceArray.push('attack_counter_exp2_3');
			}
			else {
				karrynVoiceArray.push('attack_counter_exp1_1');
				karrynVoiceArray.push('attack_counter_exp1_2');
				karrynVoiceArray.push('attack_counter_exp1_3');
			}
		}
		else if(isSlamOne) {
			if(generallvl3) {
				karrynVoiceArray.push('skill_strike_slum_exp3_1');
				karrynVoiceArray.push('skill_strike_slum_exp3_2');
			}
			else if(generallvl2) {
				karrynVoiceArray.push('skill_strike_slum_exp2_1');
				karrynVoiceArray.push('skill_strike_slum_exp2_2');
			}
			else {
				karrynVoiceArray.push('skill_strike_slum_exp1_1');
				karrynVoiceArray.push('skill_strike_slum_exp1_2');
			}
		}
		else if(isSlamTwo) {
			if(generallvl3) {
				karrynVoiceArray.push('skill_strike_meteor_exp3_1');
				karrynVoiceArray.push('skill_strike_meteor_exp3_2');
			}
			else if(generallvl2) {
				karrynVoiceArray.push('skill_strike_meteor_exp2_1');
				karrynVoiceArray.push('skill_strike_meteor_exp2_2');
			}
			else {
				karrynVoiceArray.push('skill_strike_meteor_exp1_1');
				karrynVoiceArray.push('skill_strike_meteor_exp1_2');
			}
		}
		else if(isCleaveOne) {
			if(generallvl3) {
				karrynVoiceArray.push('skill_slash_cleave_exp3_1');
				karrynVoiceArray.push('skill_slash_cleave_exp3_2');
			}
			else if(generallvl2) {
				karrynVoiceArray.push('skill_slash_cleave_exp2_1');
				karrynVoiceArray.push('skill_slash_cleave_exp2_2');
			}
			else {
				karrynVoiceArray.push('skill_slash_cleave_exp1_1');
				karrynVoiceArray.push('skill_slash_cleave_exp1_2');
			}
		}
		else if(isCleaveTwo) {
			if(generallvl3) {
				karrynVoiceArray.push('skill_slash_gale_exp3_1');
				karrynVoiceArray.push('skill_slash_gale_exp3_2');
			}
			else if(generallvl2) {
				karrynVoiceArray.push('skill_slash_gale_exp2_1');
				karrynVoiceArray.push('skill_slash_gale_exp2_2');
			}
			else {
				karrynVoiceArray.push('skill_slash_gale_exp1_1');
				karrynVoiceArray.push('skill_slash_gale_exp1_2');
			}
		}
		else if(isSkewerOne) {
			if(generallvl3) {
				karrynVoiceArray.push('skill_thrust_skewer_exp3_1');
				karrynVoiceArray.push('skill_thrust_skewer_exp3_2');
			}
			else if(generallvl2) {
				karrynVoiceArray.push('skill_thrust_skewer_exp2_1');
				karrynVoiceArray.push('skill_thrust_skewer_exp2_2');
			}
			else {
				karrynVoiceArray.push('skill_thrust_skewer_exp1_1');
				karrynVoiceArray.push('skill_thrust_skewer_exp1_2');
			}
		}
		else if(isSkewerTwo) {
			if(generallvl3) {
				karrynVoiceArray.push('skill_thrust_flurry_exp3_1');
				karrynVoiceArray.push('skill_thrust_flurry_exp3_2');
			}
			else if(generallvl2) {
				karrynVoiceArray.push('skill_thrust_flurry_exp2_1');
				karrynVoiceArray.push('skill_thrust_flurry_exp2_2');
			}
			else {
				karrynVoiceArray.push('skill_thrust_flurry_exp1_1');
				karrynVoiceArray.push('skill_thrust_flurry_exp1_2');
			}
		}
		else if(isHeadStrike) {
			if(generallvl3) {
				karrynVoiceArray.push('skill_strike_head_exp3_1');
				karrynVoiceArray.push('skill_strike_head_exp3_2');
			}
			else if(generallvl2) {
				karrynVoiceArray.push('skill_strike_head_exp2_1');
				karrynVoiceArray.push('skill_strike_head_exp2_2');
			}
			else {
				karrynVoiceArray.push('skill_strike_head_exp1_1');
				karrynVoiceArray.push('skill_strike_head_exp1_2');
			}
		}
		else if(isArmSlash) {
			if(generallvl3) {
				karrynVoiceArray.push('skill_slash_arm_exp3_1');
				karrynVoiceArray.push('skill_slash_arm_exp3_2');
			}
			else if(generallvl2) {
				karrynVoiceArray.push('skill_slash_arm_exp2_1');
				karrynVoiceArray.push('skill_slash_arm_exp2_2');
			}
			else {
				karrynVoiceArray.push('skill_slash_arm_exp1_1');
				karrynVoiceArray.push('skill_slash_arm_exp1_2');
			}
		}
		else if(isLegThrust) {
			if(generallvl3) {
				karrynVoiceArray.push('skill_thrust_leg_exp3_1');
				karrynVoiceArray.push('skill_thrust_leg_exp3_2');
			}
			else if(generallvl2) {
				karrynVoiceArray.push('skill_thrust_leg_exp2_1');
				karrynVoiceArray.push('skill_thrust_leg_exp2_2');
			}
			else {
				karrynVoiceArray.push('skill_thrust_leg_exp1_1');
				karrynVoiceArray.push('skill_thrust_leg_exp1_2');
			}
		}
	}
	
	
	if(karrynVoiceArray.length > 0) {
		let voiceFileName = karrynVoiceArray[Math.randomInt(karrynVoiceArray.length)];
		if(ConfigManager.remVoiceLanguage === RemLanguageEN)
			voiceFileName += '_en';
		else
			voiceFileName += '_jp';
		AudioManager.playVoice({name:voiceFileName, pan:0, pitch:100, volume:100});
	}
};

BattleManager.playKarrynVoice_Willpower = function(skillId, result) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let karrynVoiceArray = [];

	let isSuppressDesire = skillId === SKILL_SUPPRESS_MOUTH_DESIRE_ID || skillId === SKILL_SUPPRESS_BOOBS_DESIRE_ID || skillId === SKILL_SUPPRESS_PUSSY_DESIRE_ID || skillId === SKILL_SUPPRESS_BUTT_DESIRE_ID || skillId === SKILL_SUPPRESS_COCK_DESIRE_ID;
	let isReleaseDesire = skillId === SKILL_RELEASE_MOUTH_DESIRE_ID || skillId === SKILL_RELEASE_BOOBS_DESIRE_ID || skillId === SKILL_RELEASE_PUSSY_DESIRE_ID || skillId === SKILL_RELEASE_BUTT_DESIRE_ID || skillId === SKILL_RELEASE_COCK_DESIRE_ID;
	let isHealingThoughts = skillId === SKILL_HEALING_THOUGHTS_ID;
	let isMindOverMatter = skillId === SKILL_MIND_OVER_MATTER_ID;
	let isSeeNoEvil = skillId === SKILL_SEE_NO_EVIL_ID;
	let isHearNoEvil = skillId === SKILL_HEAR_NO_EVIL_ID;
	let isSpeakNoEvil = skillId === SKILL_SPEAK_NO_EVIL_ID;
	let isRealityMarble = skillId === SKILL_REALITY_MARBLE_ID;
	let isEyeOfTheMind = skillId === SKILL_EYE_OF_THE_MIND_ID;
	let isKi = skillId === SKILL_KI_ID;
	let isFocus = skillId === SKILL_FOCUS_ID;
	let isEdgingControl = skillId === SKILL_EDGING_CONTROL_ID;
	let isResistOrgasm = skillId === SKILL_RESIST_ORGASM_ID;
	let isAllowEjaculation = skillId === SKILL_ALLOW_EXTERNAL_EJACULATION_ID || skillId === SKILL_ALLOW_INTERNAL_EJACULATION_ID;
	let isDenyEjaculation = skillId === SKILL_DENY_EXTERNAL_EJACULATION_ID || skillId === SKILL_DENY_INTERNAL_EJACULATION_ID;
	let isPlayfulSpirit = skillId === SKILL_PLAYFUL_SPIRIT_ID;
	let isEternalTease = skillId === SKILL_ETERNAL_TEASE_ID;


	let generalReactionScore = actor.getCombatPoseReactionScore(false);
	if(isEdgingControl || isResistOrgasm || isAllowEjaculation || isDenyEjaculation || isPlayfulSpirit || isEternalTease)
		generalReactionScore = actor.getReactionScore();
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;

	if(isSuppressDesire) {
		if(generallvl3) {
			karrynVoiceArray.push('skill_suppress_exp3_1');
			karrynVoiceArray.push('skill_suppress_exp3_2');
			karrynVoiceArray.push('skill_suppress_exp3_3');
		}
		else if(generallvl2) {
			karrynVoiceArray.push('skill_suppress_exp2_1');
			karrynVoiceArray.push('skill_suppress_exp2_2');
			karrynVoiceArray.push('skill_suppress_exp2_3');
		}
		else {
			karrynVoiceArray.push('skill_suppress_exp1_1');
			karrynVoiceArray.push('skill_suppress_exp1_2');
			karrynVoiceArray.push('skill_suppress_exp1_3');
		}
	}
	else if(isReleaseDesire) {
		if(generallvl3) {
			karrynVoiceArray.push('skill_release_exp3_1');
			karrynVoiceArray.push('skill_release_exp3_2');
			karrynVoiceArray.push('skill_release_exp3_3');
		}
		else if(generallvl2) {
			karrynVoiceArray.push('skill_release_exp2_1');
			karrynVoiceArray.push('skill_release_exp2_2');
			karrynVoiceArray.push('skill_release_exp2_3');
		}
		else {
			karrynVoiceArray.push('skill_release_exp1_1');
			karrynVoiceArray.push('skill_release_exp1_2');
			karrynVoiceArray.push('skill_release_exp1_3');
		}
	}
	else if(DLC_GYM) {
		if(isHealingThoughts) {
			if(generallvl3) {
				karrynVoiceArray.push('gymdlc_skill_healing_thoughts_exp3_1');
				karrynVoiceArray.push('gymdlc_skill_healing_thoughts_exp3_2');
				karrynVoiceArray.push('gymdlc_skill_healing_thoughts_exp3_3');
			}
			else if(generallvl2) {
				karrynVoiceArray.push('gymdlc_skill_healing_thoughts_exp2_1');
				karrynVoiceArray.push('gymdlc_skill_healing_thoughts_exp2_2');
				karrynVoiceArray.push('gymdlc_skill_healing_thoughts_exp2_3');
			}
			else {
				karrynVoiceArray.push('gymdlc_skill_healing_thoughts_exp1_1');
				karrynVoiceArray.push('gymdlc_skill_healing_thoughts_exp1_2');
				karrynVoiceArray.push('gymdlc_skill_healing_thoughts_exp1_3');
			}
		}
		else if(isKi) {
			if(generallvl3) {
				karrynVoiceArray.push('gymdlc_skill_ki_exp3_1');
				karrynVoiceArray.push('gymdlc_skill_ki_exp3_2');
				karrynVoiceArray.push('gymdlc_skill_ki_exp3_3');
			}
			else if(generallvl2) {
				karrynVoiceArray.push('gymdlc_skill_ki_exp2_1');
				karrynVoiceArray.push('gymdlc_skill_ki_exp2_2');
				karrynVoiceArray.push('gymdlc_skill_ki_exp2_3');
			}
			else {
				karrynVoiceArray.push('gymdlc_skill_ki_exp1_1');
				karrynVoiceArray.push('gymdlc_skill_ki_exp1_2');
				karrynVoiceArray.push('gymdlc_skill_ki_exp1_3');
			}
		}
		else if(isFocus) {
			if(generallvl3) {
				karrynVoiceArray.push('gymdlc_skill_focus_exp3_1');
				karrynVoiceArray.push('gymdlc_skill_focus_exp3_2');
				karrynVoiceArray.push('gymdlc_skill_focus_exp3_3');
			}
			else if(generallvl2) {
				karrynVoiceArray.push('gymdlc_skill_focus_exp2_1');
				karrynVoiceArray.push('gymdlc_skill_focus_exp2_2');
				karrynVoiceArray.push('gymdlc_skill_focus_exp2_3');
			}
			else {
				karrynVoiceArray.push('gymdlc_skill_focus_exp1_1');
				karrynVoiceArray.push('gymdlc_skill_focus_exp1_2');
				karrynVoiceArray.push('gymdlc_skill_focus_exp1_3');
			}
		}
		else if(isEdgingControl) {
			if(generallvl3) {
				karrynVoiceArray.push('gymdlc_skill_edging_control_exp3_1');
				karrynVoiceArray.push('gymdlc_skill_edging_control_exp3_2');
				karrynVoiceArray.push('gymdlc_skill_edging_control_exp3_3');
			}
			else if(generallvl2) {
				karrynVoiceArray.push('gymdlc_skill_edging_control_exp2_1');
				karrynVoiceArray.push('gymdlc_skill_edging_control_exp2_2');
			}
			else {
				karrynVoiceArray.push('gymdlc_skill_edging_control_exp1_1');
				karrynVoiceArray.push('gymdlc_skill_edging_control_exp1_2');
			}
		}
		else if(isResistOrgasm) {
			if(generallvl3) {
				karrynVoiceArray.push('gymdlc_skill_resist_orgasm_exp3_1');
				karrynVoiceArray.push('gymdlc_skill_resist_orgasm_exp3_2');
				karrynVoiceArray.push('gymdlc_skill_resist_orgasm_exp3_3');
			}
			else if(generallvl2) {
				karrynVoiceArray.push('gymdlc_skill_resist_orgasm_exp2_1');
				karrynVoiceArray.push('gymdlc_skill_resist_orgasm_exp2_2');
			}
			else {
				karrynVoiceArray.push('gymdlc_skill_resist_orgasm_exp1_1');
				karrynVoiceArray.push('gymdlc_skill_resist_orgasm_exp1_2');
			}
		}
		else if(isDenyEjaculation) {
			if(generallvl3) {
				karrynVoiceArray.push('gymdlc_skill_deny_ejaculation_exp3_1');
				karrynVoiceArray.push('gymdlc_skill_deny_ejaculation_exp3_2');
				karrynVoiceArray.push('gymdlc_skill_deny_ejaculation_exp3_3');
			}
			else if(generallvl2) {
				karrynVoiceArray.push('gymdlc_skill_deny_ejaculation_exp2_1');
				karrynVoiceArray.push('gymdlc_skill_deny_ejaculation_exp2_2');
			}
			else {
				karrynVoiceArray.push('gymdlc_skill_deny_ejaculation_exp1_1');
				karrynVoiceArray.push('gymdlc_skill_deny_ejaculation_exp1_2');
			}
		}
		else if(isAllowEjaculation) {
			if(generallvl3) {
				karrynVoiceArray.push('gymdlc_skill_allow_ejaculation_exp3_1');
				karrynVoiceArray.push('gymdlc_skill_allow_ejaculation_exp3_2');
				karrynVoiceArray.push('gymdlc_skill_allow_ejaculation_exp3_3');
			}
			else if(generallvl2) {
				karrynVoiceArray.push('gymdlc_skill_allow_ejaculation_exp2_1');
				karrynVoiceArray.push('gymdlc_skill_allow_ejaculation_exp2_2');
			}
			else {
				karrynVoiceArray.push('gymdlc_skill_allow_ejaculation_exp1_1');
				karrynVoiceArray.push('gymdlc_skill_allow_ejaculation_exp1_2');
			}
		}
		else if(isPlayfulSpirit) {
			if(generallvl3) {
				karrynVoiceArray.push('gymdlc_skill_third_pleasure_exp3_1');
				karrynVoiceArray.push('gymdlc_skill_third_pleasure_exp3_2');
				karrynVoiceArray.push('gymdlc_skill_third_pleasure_exp3_3');
			}
			else if(generallvl2) {
				karrynVoiceArray.push('gymdlc_skill_third_pleasure_exp2_1');
				karrynVoiceArray.push('gymdlc_skill_third_pleasure_exp2_2');
			}
			else {
				karrynVoiceArray.push('gymdlc_skill_third_pleasure_exp1_1');
				karrynVoiceArray.push('gymdlc_skill_third_pleasure_exp1_2');
			}
		}
		else if(isEternalTease) {
			if(generallvl3) {
				karrynVoiceArray.push('gymdlc_skill_half_pleasure_exp3_1');
				karrynVoiceArray.push('gymdlc_skill_half_pleasure_exp3_2');
				karrynVoiceArray.push('gymdlc_skill_half_pleasure_exp3_3');
			}
			else if(generallvl2) {
				karrynVoiceArray.push('gymdlc_skill_half_pleasure_exp2_1');
				karrynVoiceArray.push('gymdlc_skill_half_pleasure_exp2_2');
			}
			else {
				karrynVoiceArray.push('gymdlc_skill_half_pleasure_exp1_1');
				karrynVoiceArray.push('gymdlc_skill_half_pleasure_exp1_2');
			}
		}
		else if(isMindOverMatter) {
			if(generallvl3) {
				karrynVoiceArray.push('gymdlc_skill_mind_over_matter_exp3_1');
				karrynVoiceArray.push('gymdlc_skill_mind_over_matter_exp3_2');
				karrynVoiceArray.push('gymdlc_skill_mind_over_matter_exp3_3');
			}
			else if(generallvl2) {
				karrynVoiceArray.push('gymdlc_skill_mind_over_matter_exp2_1');
				karrynVoiceArray.push('gymdlc_skill_mind_over_matter_exp2_2');
				karrynVoiceArray.push('gymdlc_skill_mind_over_matter_exp2_3');
			}
			else {
				karrynVoiceArray.push('gymdlc_skill_mind_over_matter_exp1_1');
				karrynVoiceArray.push('gymdlc_skill_mind_over_matter_exp1_2');
				karrynVoiceArray.push('gymdlc_skill_mind_over_matter_exp1_3');
			}
		}
		else if(isSeeNoEvil) {
			if(generallvl3) {
				karrynVoiceArray.push('gymdlc_skill_see_no_evil_exp3_1');
				karrynVoiceArray.push('gymdlc_skill_see_no_evil_exp3_2');
				karrynVoiceArray.push('gymdlc_skill_see_no_evil_exp3_3');
			}
			else if(generallvl2) {
				karrynVoiceArray.push('gymdlc_skill_see_no_evil_exp2_1');
				karrynVoiceArray.push('gymdlc_skill_see_no_evil_exp2_2');
				karrynVoiceArray.push('gymdlc_skill_see_no_evil_exp2_3');
			}
			else {
				karrynVoiceArray.push('gymdlc_skill_see_no_evil_exp1_1');
				karrynVoiceArray.push('gymdlc_skill_see_no_evil_exp1_2');
				karrynVoiceArray.push('gymdlc_skill_see_no_evil_exp1_3');
			}
		}
		else if(isHearNoEvil) {
			if(generallvl3) {
				karrynVoiceArray.push('gymdlc_skill_hear_no_evil_exp3_1');
				karrynVoiceArray.push('gymdlc_skill_hear_no_evil_exp3_2');
				karrynVoiceArray.push('gymdlc_skill_hear_no_evil_exp3_3');
			}
			else if(generallvl2) {
				karrynVoiceArray.push('gymdlc_skill_hear_no_evil_exp2_1');
				karrynVoiceArray.push('gymdlc_skill_hear_no_evil_exp2_2');
				karrynVoiceArray.push('gymdlc_skill_hear_no_evil_exp2_3');
			}
			else {
				karrynVoiceArray.push('gymdlc_skill_hear_no_evil_exp1_1');
				karrynVoiceArray.push('gymdlc_skill_hear_no_evil_exp1_2');
				karrynVoiceArray.push('gymdlc_skill_hear_no_evil_exp1_3');
			}
		}
		else if(isSpeakNoEvil) {
			if(generallvl3) {
				karrynVoiceArray.push('gymdlc_skill_speak_no_evil_exp3_1');
				karrynVoiceArray.push('gymdlc_skill_speak_no_evil_exp3_2');
				karrynVoiceArray.push('gymdlc_skill_speak_no_evil_exp3_3');
			}
			else if(generallvl2) {
				karrynVoiceArray.push('gymdlc_skill_speak_no_evil_exp2_1');
				karrynVoiceArray.push('gymdlc_skill_speak_no_evil_exp2_2');
				karrynVoiceArray.push('gymdlc_skill_speak_no_evil_exp2_3');
			}
			else {
				karrynVoiceArray.push('gymdlc_skill_speak_no_evil_exp1_1');
				karrynVoiceArray.push('gymdlc_skill_speak_no_evil_exp1_2');
				karrynVoiceArray.push('gymdlc_skill_speak_no_evil_exp1_3');
			}
		}
		else if(isRealityMarble) {
			if(generallvl3) {
				karrynVoiceArray.push('gymdlc_skill_reality_marble_exp3_1');
				karrynVoiceArray.push('gymdlc_skill_reality_marble_exp3_2');
				karrynVoiceArray.push('gymdlc_skill_reality_marble_exp3_3');
			}
			else if(generallvl2) {
				karrynVoiceArray.push('gymdlc_skill_reality_marble_exp2_1');
				karrynVoiceArray.push('gymdlc_skill_reality_marble_exp2_2');
				karrynVoiceArray.push('gymdlc_skill_reality_marble_exp2_3');
			}
			else {
				karrynVoiceArray.push('gymdlc_skill_reality_marble_exp1_1');
				karrynVoiceArray.push('gymdlc_skill_reality_marble_exp1_2');
				karrynVoiceArray.push('gymdlc_skill_reality_marble_exp1_3');
			}
		}
		else if(isEyeOfTheMind) {
			if(generallvl3) {
				karrynVoiceArray.push('gymdlc_skill_eye_of_the_mind_exp3_1');
				karrynVoiceArray.push('gymdlc_skill_eye_of_the_mind_exp3_2');
				karrynVoiceArray.push('gymdlc_skill_eye_of_the_mind_exp3_3');
			}
			else if(generallvl2) {
				karrynVoiceArray.push('gymdlc_skill_eye_of_the_mind_exp2_1');
				karrynVoiceArray.push('gymdlc_skill_eye_of_the_mind_exp2_2');
				karrynVoiceArray.push('gymdlc_skill_eye_of_the_mind_exp2_3');
			}
			else {
				karrynVoiceArray.push('gymdlc_skill_eye_of_the_mind_exp1_1');
				karrynVoiceArray.push('gymdlc_skill_eye_of_the_mind_exp1_2');
				karrynVoiceArray.push('gymdlc_skill_eye_of_the_mind_exp1_3');
			}
		}
		
	}

	if(karrynVoiceArray.length > 0) {
		let voiceFileName = karrynVoiceArray[Math.randomInt(karrynVoiceArray.length)];
		if(ConfigManager.remVoiceLanguage === RemLanguageEN)
			voiceFileName += '_en';
		else
			voiceFileName += '_jp';
		AudioManager.playVoice({name:voiceFileName, pan:0, pitch:100, volume:100});
	}
};

BattleManager.playKarrynVoice_RestoreMind = function(isSuccess) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let karrynVoiceArray = [];
	
	let generalReactionScore = actor.getReactionScore();
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	
	if(DLC_GYM) {
		if(isSuccess) {
			if(generallvl3) {
				karrynVoiceArray.push('gymdlc_skill_restore_mind_success_exp3_1');
				karrynVoiceArray.push('gymdlc_skill_restore_mind_success_exp3_2');
				karrynVoiceArray.push('gymdlc_skill_restore_mind_success_exp3_3');
			}
			else if(generallvl2) {
				karrynVoiceArray.push('gymdlc_skill_restore_mind_success_exp2_1');
				karrynVoiceArray.push('gymdlc_skill_restore_mind_success_exp2_2');
			}
			else {
				karrynVoiceArray.push('gymdlc_skill_restore_mind_success_exp1_1');
				karrynVoiceArray.push('gymdlc_skill_restore_mind_success_exp1_2');
			}
		}
		else {
			if(generallvl3) {
				karrynVoiceArray.push('gymdlc_skill_restore_mind_fail_exp3_1');
				karrynVoiceArray.push('gymdlc_skill_restore_mind_fail_exp3_2');
				karrynVoiceArray.push('gymdlc_skill_restore_mind_fail_exp3_3');
			}
			else if(generallvl2) {
				karrynVoiceArray.push('gymdlc_skill_restore_mind_fail_exp2_1');
				karrynVoiceArray.push('gymdlc_skill_restore_mind_fail_exp2_2');
			}
			else {
				karrynVoiceArray.push('gymdlc_skill_restore_mind_fail_exp1_1');
				karrynVoiceArray.push('gymdlc_skill_restore_mind_fail_exp1_2');
			}
		}
	}
	
	if(karrynVoiceArray.length > 0) {
		let voiceFileName = karrynVoiceArray[Math.randomInt(karrynVoiceArray.length)];
		if(ConfigManager.remVoiceLanguage === RemLanguageEN)
			voiceFileName += '_en';
		else
			voiceFileName += '_jp';
		AudioManager.playVoice({name:voiceFileName, pan:0, pitch:100, volume:100});
	}
};

BattleManager.playKarrynVoice_GymDLC_EnergyAndSideJob = function(skillId, result) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let karrynVoiceArray = [];

	let isBlissBreathe = skillId === SKILL_BREATHE_ID || skillId === SKILL_STRIPPER_BREATHER_ORGASM_ID;
	let isFixClothes = skillId === SKILL_FIX_CLOTHES_ID || skillId === SKILL_CAUTIOUS_FIX_CLOTHES_ID || skillId === SKILL_COUNTER_FIX_CLOTHES_ID || skillId === SKILL_DEFENSIVE_FIX_CLOTHES_ID || skillId === SKILL_FIX_CLOTHES_RECEPTIONIST_ID || skillId === SKILL_FIX_CLOTHES_WAITRESS_ID;
	let isRevitalize = skillId === SKILL_REVITALIZE_ID || skillId === SKILL_CAUTIOUS_REVITALIZE_ID || skillId === SKILL_DEFENSIVE_REVITALIZE_ID || skillId === SKILL_COUNTER_REVITALIZE_ID;
	let isSecondWind = skillId === SKILL_SECOND_WIND_ID || skillId === SKILL_CAUTIOUS_SECOND_WIND_ID || skillId === SKILL_DEFENSIVE_SECOND_WIND_ID || skillId === SKILL_COUNTER_SECOND_WIND_ID;
	let isJobBreather = skillId === SKILL_RECEPTIONIST_BREATHER_ID || skillId === SKILL_FALLEN_REST_ID || skillId === SKILL_TOILET_REST_ID || skillId === SKILL_TOILET_BREATHER_ID || skillId === SKILL_WAITRESS_BREATHER_ID || skillId === SKILL_TRAINER_REST_ID || skillId === SKILL_STRIPPER_BREATHER_STAGE_ID;
	let isCautiousStance = skillId === SKILL_CAUTIOUS_STANCE_ID;
	let isDefensiveStance = skillId === SKILL_DEFENSIVE_STANCE_ID;
	let isCounterStance = skillId === SKILL_COUNTER_STANCE_ID;
	let isSecretaryStance = skillId === SKILL_ENDURE_PLEASURE_ID;
	let isLadyStance = skillId === SKILL_WAIT_OUT_PLEASURE_ID;
	let isPleasureStance = skillId === SKILL_OPEN_PLEASURE_ID || skillId === SKILL_KARRYN_OPEN_PLEASURE_3TURNS_ID || skillId === SKILL_KARRYN_OPEN_PLEASURE_5TURNS_ID || skillId === SKILL_KARRYN_OPEN_PLEASURE_10TURNS_ID || skillId === SKILL_KARRYN_OPEN_PLEASURE_BATTLE_ID;
	
	
	let generalReactionScore = 0;
	if(actor.isInCombatPose())
		generalReactionScore = actor.getCombatPoseReactionScore(false);
	else 
		generalReactionScore = actor.getReactionScore();
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;

	if(isBlissBreathe) {
		if(generallvl3) {
			karrynVoiceArray.push('gymdlc_skill_bliss_breathe_exp3_1');
			karrynVoiceArray.push('gymdlc_skill_bliss_breathe_exp3_2');
			karrynVoiceArray.push('gymdlc_skill_bliss_breathe_exp3_3');
		}
		else if(generallvl2) {
			karrynVoiceArray.push('gymdlc_skill_bliss_breathe_exp2_1');
			karrynVoiceArray.push('gymdlc_skill_bliss_breathe_exp2_2');
		}
		else {
			karrynVoiceArray.push('gymdlc_skill_bliss_breathe_exp1_1');
			karrynVoiceArray.push('gymdlc_skill_bliss_breathe_exp1_2');
		}
	}
	else if(isFixClothes) {
		if(generallvl3) {
			karrynVoiceArray.push('gymdlc_skill_fix_clothes_exp3_1');
			karrynVoiceArray.push('gymdlc_skill_fix_clothes_exp3_2');
			karrynVoiceArray.push('gymdlc_skill_fix_clothes_exp3_3');
		}
		else if(generallvl2) {
			karrynVoiceArray.push('gymdlc_skill_fix_clothes_exp2_1');
			karrynVoiceArray.push('gymdlc_skill_fix_clothes_exp2_2');
			karrynVoiceArray.push('gymdlc_skill_fix_clothes_exp2_3');
		}
		else {
			karrynVoiceArray.push('gymdlc_skill_fix_clothes_exp1_1');
			karrynVoiceArray.push('gymdlc_skill_fix_clothes_exp1_2');
			karrynVoiceArray.push('gymdlc_skill_fix_clothes_exp1_3');
		}
	}
	else if(isRevitalize) {
		if(generallvl3) {
			karrynVoiceArray.push('gymdlc_skill_revitalize_exp3_1');
			karrynVoiceArray.push('gymdlc_skill_revitalize_exp3_2');
			karrynVoiceArray.push('gymdlc_skill_revitalize_exp3_3');
		}
		else if(generallvl2) {
			karrynVoiceArray.push('gymdlc_skill_revitalize_exp2_1');
			karrynVoiceArray.push('gymdlc_skill_revitalize_exp2_2');
			karrynVoiceArray.push('gymdlc_skill_revitalize_exp2_3');
		}
		else {
			karrynVoiceArray.push('gymdlc_skill_revitalize_exp1_1');
			karrynVoiceArray.push('gymdlc_skill_revitalize_exp1_2');
			karrynVoiceArray.push('gymdlc_skill_revitalize_exp1_3');
		}
	}
	else if(isSecondWind) {
		if(generallvl3) {
			karrynVoiceArray.push('gymdlc_skill_second_wind_exp3_1');
			karrynVoiceArray.push('gymdlc_skill_second_wind_exp3_2');
			karrynVoiceArray.push('gymdlc_skill_second_wind_exp3_3');
		}
		else if(generallvl2) {
			karrynVoiceArray.push('gymdlc_skill_second_wind_exp2_1');
			karrynVoiceArray.push('gymdlc_skill_second_wind_exp2_2');
			karrynVoiceArray.push('gymdlc_skill_second_wind_exp2_3');
		}
		else {
			karrynVoiceArray.push('gymdlc_skill_second_wind_exp1_1');
			karrynVoiceArray.push('gymdlc_skill_second_wind_exp1_2');
			karrynVoiceArray.push('gymdlc_skill_second_wind_exp1_3');
		}
	}
	else if(isJobBreather) {
		if(generallvl3) {
			karrynVoiceArray.push('gymdlc_skill_breathe_exp3_1');
			karrynVoiceArray.push('gymdlc_skill_breathe_exp3_2');
			karrynVoiceArray.push('gymdlc_skill_breathe_exp3_3');
			karrynVoiceArray.push('gymdlc_skill_breathe_exp3_4');
			karrynVoiceArray.push('gymdlc_skill_breathe_exp3_5');
		}
		else if(generallvl2) {
			karrynVoiceArray.push('gymdlc_skill_breathe_exp2_1');
			karrynVoiceArray.push('gymdlc_skill_breathe_exp2_2');
			karrynVoiceArray.push('gymdlc_skill_breathe_exp2_3');
			karrynVoiceArray.push('gymdlc_skill_breathe_exp2_4');
		}
		else {
			karrynVoiceArray.push('gymdlc_skill_breathe_exp1_1');
			karrynVoiceArray.push('gymdlc_skill_breathe_exp1_2');
			karrynVoiceArray.push('gymdlc_skill_breathe_exp1_3');
			karrynVoiceArray.push('gymdlc_skill_breathe_exp1_4');
		}
	}
	else if(isCautiousStance) {
		if(generallvl3) {
			karrynVoiceArray.push('gymdlc_skill_cautious_stance_exp1_1');
			karrynVoiceArray.push('gymdlc_skill_cautious_stance_exp2_2');
			karrynVoiceArray.push('gymdlc_skill_cautious_stance_exp3_3');
		}
		else if(generallvl2) {
			karrynVoiceArray.push('gymdlc_skill_cautious_stance_exp2_1');
			karrynVoiceArray.push('gymdlc_skill_cautious_stance_exp2_2');
			karrynVoiceArray.push('gymdlc_skill_cautious_stance_exp2_3');
		}
		else {
			karrynVoiceArray.push('gymdlc_skill_cautious_stance_exp1_1');
			karrynVoiceArray.push('gymdlc_skill_cautious_stance_exp1_2');
			karrynVoiceArray.push('gymdlc_skill_cautious_stance_exp1_3');
		}
	}
	else if(isDefensiveStance) {
		if(generallvl3) {
			karrynVoiceArray.push('gymdlc_skill_defensive_stance_exp3_1');
			karrynVoiceArray.push('gymdlc_skill_defensive_stance_exp3_2');
			karrynVoiceArray.push('gymdlc_skill_defensive_stance_exp3_3');
		}
		else if(generallvl2) {
			karrynVoiceArray.push('gymdlc_skill_defensive_stance_exp2_1');
			karrynVoiceArray.push('gymdlc_skill_defensive_stance_exp2_2');
			karrynVoiceArray.push('gymdlc_skill_defensive_stance_exp2_3');
		}
		else {
			karrynVoiceArray.push('gymdlc_skill_defensive_stance_exp1_1');
			karrynVoiceArray.push('gymdlc_skill_defensive_stance_exp1_2');
			karrynVoiceArray.push('gymdlc_skill_defensive_stance_exp1_3');
		}
	}
	else if(isCounterStance) {
		if(generallvl3) {
			karrynVoiceArray.push('gymdlc_skill_counter_stance_exp3_1');
			karrynVoiceArray.push('gymdlc_skill_counter_stance_exp3_2');
			karrynVoiceArray.push('gymdlc_skill_counter_stance_exp3_3');
		}
		else if(generallvl2) {
			karrynVoiceArray.push('gymdlc_skill_counter_stance_exp2_1');
			karrynVoiceArray.push('gymdlc_skill_counter_stance_exp2_2');
			karrynVoiceArray.push('gymdlc_skill_counter_stance_exp2_3');
		}
		else {
			karrynVoiceArray.push('gymdlc_skill_counter_stance_exp1_1');
			karrynVoiceArray.push('gymdlc_skill_counter_stance_exp1_2');
			karrynVoiceArray.push('gymdlc_skill_counter_stance_exp1_3');
		}
	}
	else if(isSecretaryStance) {
		return;
		if(generallvl3) {
			karrynVoiceArray.push('gymdlc_skill_secretary_stance_exp3_1');
			karrynVoiceArray.push('gymdlc_skill_secretary_stance_exp3_2');
			karrynVoiceArray.push('gymdlc_skill_secretary_stance_exp3_3');
		}
		else if(generallvl2) {
			karrynVoiceArray.push('gymdlc_skill_secretary_stance_exp2_1');
			karrynVoiceArray.push('gymdlc_skill_secretary_stance_exp2_2');
			karrynVoiceArray.push('gymdlc_skill_secretary_stance_exp2_3');
		}
		else {
			karrynVoiceArray.push('gymdlc_skill_secretary_stance_exp1_1');
			karrynVoiceArray.push('gymdlc_skill_secretary_stance_exp1_2');
			karrynVoiceArray.push('gymdlc_skill_secretary_stance_exp1_3');
		}
	}
	else if(isLadyStance) {
		return;
		if(generallvl3) {
			karrynVoiceArray.push('gymdlc_skill_lady_stance_exp3_1');
			karrynVoiceArray.push('gymdlc_skill_lady_stance_exp3_2');
			karrynVoiceArray.push('gymdlc_skill_lady_stance_exp3_3');
		}
		else if(generallvl2) {
			karrynVoiceArray.push('gymdlc_skill_lady_stance_exp2_1');
			karrynVoiceArray.push('gymdlc_skill_lady_stance_exp2_2');
			karrynVoiceArray.push('gymdlc_skill_lady_stance_exp2_3');
		}
		else {
			karrynVoiceArray.push('gymdlc_skill_lady_stance_exp1_1');
			karrynVoiceArray.push('gymdlc_skill_lady_stance_exp1_2');
			karrynVoiceArray.push('gymdlc_skill_lady_stance_exp1_3');
		}
	}
	else if(isPleasureStance) {
		return;
		if(generallvl3) {
			karrynVoiceArray.push('gymdlc_skill_pleasure_stance_exp3_1');
			karrynVoiceArray.push('gymdlc_skill_pleasure_stance_exp3_2');
			karrynVoiceArray.push('gymdlc_skill_pleasure_stance_exp3_3');
			karrynVoiceArray.push('gymdlc_skill_pleasure_stance_exp3_4');
			karrynVoiceArray.push('gymdlc_skill_pleasure_stance_exp3_5');
		}
		else if(generallvl2) {
			karrynVoiceArray.push('gymdlc_skill_pleasure_stance_exp2_1');
			karrynVoiceArray.push('gymdlc_skill_pleasure_stance_exp2_2');
			karrynVoiceArray.push('gymdlc_skill_pleasure_stance_exp2_3');
		}
		else {
			karrynVoiceArray.push('gymdlc_skill_pleasure_stance_exp1_1');
			karrynVoiceArray.push('gymdlc_skill_pleasure_stance_exp1_2');
			karrynVoiceArray.push('gymdlc_skill_pleasure_stance_exp1_3');
		}
	}

	if(karrynVoiceArray.length > 0) {
		let voiceFileName = karrynVoiceArray[Math.randomInt(karrynVoiceArray.length)];
		if(ConfigManager.remVoiceLanguage === RemLanguageEN)
			voiceFileName += '_en';
		else
			voiceFileName += '_jp';
		AudioManager.playVoice({name:voiceFileName, pan:0, pitch:100, volume:100});
	}
};

BattleManager.playKarrynVoice_Damage = function(target, result, skillId) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let karrynVoiceArray = [];
	let isCritical = result.critical;
	let isEvade = result.evaded;
	let isGrazed = result.missed;
	let karrynIsInDefendStance = target.isStateAffected(STATE_GUARD_ID);
	let karrynIsInCounterStance = target.isStateAffected(STATE_COUNTER_STANCE_ID);
	let isClothesPull = skillId === SKILL_ENEMY_CLOTHES_PULL_ID;
	
	let generalReactionScore = actor.getCombatPoseReactionScore(false);
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	
	if(isEvade) {
		if(generallvl3) {
			karrynVoiceArray.push('evade_normal_exp3_1');
			karrynVoiceArray.push('evade_normal_exp3_2');
			karrynVoiceArray.push('evade_normal_exp3_3');
		}
		else if(generallvl2) {
			karrynVoiceArray.push('evade_normal_exp2_1');
			karrynVoiceArray.push('evade_normal_exp2_2');
			karrynVoiceArray.push('evade_normal_exp2_3');
		}
		else {
			karrynVoiceArray.push('evade_normal_exp1_1');
			karrynVoiceArray.push('evade_normal_exp1_2');
			karrynVoiceArray.push('evade_normal_exp1_3');
		}
	}
	else if(isGrazed) {
		if(generallvl3) {
			karrynVoiceArray.push('evade_graze_exp3_1');
			karrynVoiceArray.push('evade_graze_exp3_2');
			karrynVoiceArray.push('evade_graze_exp3_3');
		}
		else if(generallvl2) {
			karrynVoiceArray.push('evade_graze_exp2_1');
			karrynVoiceArray.push('evade_graze_exp2_2');
			karrynVoiceArray.push('evade_graze_exp2_3');
		}
		else {
			karrynVoiceArray.push('evade_graze_exp1_1');
			karrynVoiceArray.push('evade_graze_exp1_2');
			karrynVoiceArray.push('evade_graze_exp1_3');
		}
	}
	else if(isClothesPull) {
		if(generallvl3) {
			karrynVoiceArray.push('clothes_stripped_exp3_1');
			karrynVoiceArray.push('clothes_stripped_exp3_2');
			karrynVoiceArray.push('clothes_stripped_exp3_3');
			karrynVoiceArray.push('clothes_stripped_exp3_4');
		}
		else if(generallvl2) {
			karrynVoiceArray.push('clothes_stripped_exp2_1');
			karrynVoiceArray.push('clothes_stripped_exp2_2');
			karrynVoiceArray.push('clothes_stripped_exp2_3');
			karrynVoiceArray.push('clothes_stripped_exp2_4');
		}
		else {
			karrynVoiceArray.push('clothes_stripped_exp1_1');
			karrynVoiceArray.push('clothes_stripped_exp1_2');
			karrynVoiceArray.push('clothes_stripped_exp1_3');
			karrynVoiceArray.push('clothes_stripped_exp1_4');
		}
	}
	else if(karrynIsInDefendStance || karrynIsInCounterStance) {
		if(generallvl3) {
			karrynVoiceArray.push('defend_normal_exp3_1');
			karrynVoiceArray.push('defend_normal_exp3_2');
			karrynVoiceArray.push('defend_normal_exp3_3');
		}
		else if(generallvl2) {
			karrynVoiceArray.push('defend_normal_exp2_1');
			karrynVoiceArray.push('defend_normal_exp2_2');
			karrynVoiceArray.push('defend_normal_exp2_3');
		}
		else {
			karrynVoiceArray.push('defend_normal_exp1_1');
			karrynVoiceArray.push('defend_normal_exp1_2');
			karrynVoiceArray.push('defend_normal_exp1_3');
		}
	}
	else {
		if(isCritical) {
			if(generallvl3) {
				karrynVoiceArray.push('damage_critical_exp3_1');
				karrynVoiceArray.push('damage_critical_exp3_2');
				karrynVoiceArray.push('damage_critical_exp3_3');
			}
			else if(generallvl2) {
				karrynVoiceArray.push('damage_critical_exp2_1');
				karrynVoiceArray.push('damage_critical_exp2_2');
				karrynVoiceArray.push('damage_critical_exp2_3');
			}
			else {
				karrynVoiceArray.push('damage_critical_exp1_1');
				karrynVoiceArray.push('damage_critical_exp1_2');
				karrynVoiceArray.push('damage_critical_exp1_3');
			}
		}
		else {
			if(generallvl3) {
				karrynVoiceArray.push('damage_normal_exp3_1');
				karrynVoiceArray.push('damage_normal_exp3_2');
				karrynVoiceArray.push('damage_normal_exp3_3');
				karrynVoiceArray.push('damage_normal_exp3_4');
			}
			else if(generallvl2) {
				karrynVoiceArray.push('damage_normal_exp2_1');
				karrynVoiceArray.push('damage_normal_exp2_2');
				karrynVoiceArray.push('damage_normal_exp2_3');
				karrynVoiceArray.push('damage_normal_exp2_4');
			}
			else {
				karrynVoiceArray.push('damage_normal_exp1_1');
				karrynVoiceArray.push('damage_normal_exp1_2');
				karrynVoiceArray.push('damage_normal_exp1_3');
				karrynVoiceArray.push('damage_normal_exp1_4');
			}
		}
	}
	
	
	if(karrynVoiceArray.length > 0) {
		let voiceFileName = karrynVoiceArray[Math.randomInt(karrynVoiceArray.length)];
		if(ConfigManager.remVoiceLanguage === RemLanguageEN)
			voiceFileName += '_en';
		else
			voiceFileName += '_jp';
		AudioManager.playVoice({name:voiceFileName, pan:0, pitch:100, volume:100});
	}
};

BattleManager.playKarrynVoice_Oyasumi = function(target, result, skillId) {
	let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let karrynVoiceArray = [];
	
	let generalReactionScore = actor.getMapReactionScore();
	let generallvl3 = generalReactionScore >= VAR_DEF_RS_LV3_REQ;
	let generallvl2 = generalReactionScore >= VAR_DEF_RS_LV2_REQ;
	let fatigueLevel = actor.getFatigueLevel();
	let fatiguelvl3 = fatigueLevel >= 4;
	let fatiguelvl2 = fatigueLevel >= 2;
	
	if(fatiguelvl3) {
		karrynVoiceArray.push('voice_karryn_oyasumi_2');
	}
	else {
		if(generallvl3) {
			karrynVoiceArray.push('voice_karryn_oyasumi_3');
			karrynVoiceArray.push('voice_karryn_oyasumi_3');
			karrynVoiceArray.push('voice_karryn_oyasumi_3');
		}
		else if(generallvl2) {
			karrynVoiceArray.push('voice_karryn_oyasumi_3');
			karrynVoiceArray.push('voice_karryn_oyasumi_3');
		}
		
		if(fatiguelvl2) {
			karrynVoiceArray.push('voice_karryn_oyasumi_2');
			karrynVoiceArray.push('voice_karryn_oyasumi_2');
		}
		else {
			karrynVoiceArray.push('voice_karryn_oyasumi_1');
		}
	}
	
	if(karrynVoiceArray.length > 0) {
		let voiceFileName = karrynVoiceArray[Math.randomInt(karrynVoiceArray.length)];
		if(ConfigManager.remVoiceLanguage === RemLanguageEN)
			voiceFileName += '_en';
		else
			voiceFileName += '_jp';
		AudioManager.playVoice({name:voiceFileName, pan:0, pitch:100, volume:100});
	}
};

BattleManager.playKarrynVoice_Remtairy = function(target, result, skillId) {
	//let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let karrynVoiceArray = [];
	
	karrynVoiceArray.push('voice_karryn_remtairy_1');
	karrynVoiceArray.push('voice_karryn_remtairy_2');
	karrynVoiceArray.push('voice_karryn_remtairy_3');
	
	if(karrynVoiceArray.length > 0) {
		let voiceFileName = karrynVoiceArray[Math.randomInt(karrynVoiceArray.length)];
		if(ConfigManager.remVoiceLanguage === RemLanguageEN)
			voiceFileName += '_en';
		else
			voiceFileName += '_jp';
		AudioManager.playVoice({name:voiceFileName, pan:0, pitch:100, volume:100});
	}
};

BattleManager.playKarrynVoice_Title = function(target, result, skillId) {
	//let actor = $gameActors.actor(ACTOR_KARRYN_ID);
	let karrynVoiceArray = [];
	
	karrynVoiceArray.push('voice_karryn_title_1');
	karrynVoiceArray.push('voice_karryn_title_1');
	karrynVoiceArray.push('voice_karryn_title_1');
	karrynVoiceArray.push('voice_karryn_title_2');
	karrynVoiceArray.push('voice_karryn_title_3');
	karrynVoiceArray.push('voice_karryn_title_4');
	
	if(karrynVoiceArray.length > 0) {
		let voiceFileName = karrynVoiceArray[Math.randomInt(karrynVoiceArray.length)];
		if(ConfigManager.remVoiceLanguage === RemLanguageEN)
			voiceFileName += '_en';
		else
			voiceFileName += '_jp';
		AudioManager.playVoice({name:voiceFileName, pan:0, pitch:100, volume:100}, 0, true);
	}
};

BattleManager.playKarrynVoice_RemLine = function(lineId) {
	let voiceFileName = false;
	
	voiceFileName = lineId;
	
	//if(lineId.includes('orgasm_')) voiceFileName = 'karryn_orgasm_exp0_1'

	
	if(voiceFileName) {
		if(AudioManager.voiceVolume > 0) {
			if(ConfigManager.remVoiceLanguage === RemLanguageEN)
				voiceFileName += '_en';
			else
				voiceFileName += '_jp';
			AudioManager.playVoice({name:voiceFileName, pan:0, pitch:100, pos:0, volume: 100});
		}
		else {
			Karryn.moanMasterManager();
		}
	}
};

BattleManager.playEnemyVoice_Talk = function(enemy, enemyVolume) {
	let enemyVoiceArray = [];
	if(!enemyVolume) enemyVolume = 90;
	
	if(enemy.isThugType) {
		enemyVoiceArray.push('voice_thug_hehe1');
		enemyVoiceArray.push('voice_thug_hehe2');
		enemyVoiceArray.push('voice_thug_hey1');
		enemyVoiceArray.push('voice_thug_hey2');
		enemyVoiceArray.push('voice_thug_hey3');
	}
	else if(enemy.isGoblinType) {
		enemyVoiceArray.push('voice_goblin_hehe1');
		enemyVoiceArray.push('voice_goblin_hehe2');
		enemyVoiceArray.push('voice_goblin_hehe3');
		enemyVoiceArray.push('voice_goblin_hehe4');
	}
	else if(enemy.isLizardmanType) {
		enemyVoiceArray.push('voice_lizardman_hey1');
		enemyVoiceArray.push('voice_lizardman_hey2');
		enemyVoiceArray.push('voice_lizardman_hey3');
	}
	else if(enemy.isOrcType) {
		enemyVoiceArray.push('voice_orc_hehe1');
		enemyVoiceArray.push('voice_orc_hehe2');
		enemyVoiceArray.push('voice_orc_hey1');
		enemyVoiceArray.push('voice_orc_skill1');
	}
	else {
		enemyVoiceArray.push('voice_prisoner_hehe1');
		enemyVoiceArray.push('voice_prisoner_hehe2');
		enemyVoiceArray.push('voice_prisoner_hehe3');
		enemyVoiceArray.push('voice_prisoner_hehe4');
		enemyVoiceArray.push('voice_prisoner_hehe5');
		enemyVoiceArray.push('voice_prisoner_hey3');
		enemyVoiceArray.push('voice_prisoner_hey4');
		enemyVoiceArray.push('voice_prisoner_hey5');
		enemyVoiceArray.push('voice_prisoner_oh2');
	}
	
	if(enemyVoiceArray.length > 0) {
		let enemyFileName = enemyVoiceArray[Math.randomInt(enemyVoiceArray.length)];
		AudioManager.playEnemyVoiceSe({name:enemyFileName, pan:0, pitch:100, volume:enemyVolume});
	}
};

BattleManager.playEnemyVoice_Skill = function(enemy, enemyVolume) {
	let enemyVoiceArray = [];
	if(!enemyVolume) enemyVolume = 90;
	
	if(enemy.isThugType) {
		enemyVoiceArray.push('voice_thug_hey3');
		enemyVoiceArray.push('voice_thug_hey4');
		enemyVoiceArray.push('voice_thug_hey5');
	}
	else if(enemy.isGoblinType) {
		enemyVoiceArray.push('voice_goblin_skill1');
		enemyVoiceArray.push('voice_goblin_skill2');
		enemyVoiceArray.push('voice_goblin_skill3');
		enemyVoiceArray.push('voice_goblin_skill4');
	}
	else if(enemy.isLizardmanType) {
		enemyVoiceArray.push('voice_lizardman_skill1');
		enemyVoiceArray.push('voice_lizardman_skill2');
		enemyVoiceArray.push('voice_lizardman_skill3');
		enemyVoiceArray.push('voice_lizardman_skill4');
	}
	else if(enemy.isOrcType) {
		enemyVoiceArray.push('voice_orc_skill2');
		enemyVoiceArray.push('voice_orc_skill3');
		enemyVoiceArray.push('voice_orc_skill4');
	}
	else if(enemy.isYetiType) {
		enemyVoiceArray.push('voice_yeti_skill1');
		enemyVoiceArray.push('voice_yeti_skill2');
		enemyVoiceArray.push('voice_yeti_skill3');
		enemyVoiceArray.push('voice_yeti_skill4');
	}
	else if(enemy.isWerewolfType) {
		enemyVoiceArray.push('voice_werewolf_skill1');
		enemyVoiceArray.push('voice_werewolf_skill2');
		enemyVoiceArray.push('voice_werewolf_skill3');
	}
	else if(enemy.isSlimeType) {
		
	}
	else {
		enemyVoiceArray.push('voice_prisoner_hehe1');
		enemyVoiceArray.push('voice_prisoner_hehe2');
		enemyVoiceArray.push('voice_prisoner_hehe3');
		enemyVoiceArray.push('voice_prisoner_hehe4');
		enemyVoiceArray.push('voice_prisoner_hehe5');
		enemyVoiceArray.push('voice_prisoner_hey3');
		enemyVoiceArray.push('voice_prisoner_hey4');
		enemyVoiceArray.push('voice_prisoner_hey5');
		enemyVoiceArray.push('voice_prisoner_oh2');
	}
	
	if(enemyVoiceArray.length > 0) {
		let enemyFileName = enemyVoiceArray[Math.randomInt(enemyVoiceArray.length)];
		AudioManager.playEnemyVoiceSe({name:enemyFileName, pan:0, pitch:100, volume:enemyVolume});
	}
};

BattleManager.playEnemyVoice_SideJob = function(enemy, enemyVolume) {
	let enemyVoiceArray = [];
	let enemyType = enemy.enemyType();
	if(!enemyVolume) enemyVolume = 90;
	
	if(enemy.isThugType) {
		enemyVoiceArray.push('voice_thug_hey1');
		enemyVoiceArray.push('voice_thug_hey2');
		enemyVoiceArray.push('voice_thug_hey3');
	}
	else if(enemy.isGoblinType) {
		enemyVoiceArray.push('voice_goblin_hey1');
		enemyVoiceArray.push('voice_goblin_hey2');
		enemyVoiceArray.push('voice_goblin_hey3');
	}
	else if(enemy.isLizardmanType) {
		enemyVoiceArray.push('voice_lizardman_hey1');
		enemyVoiceArray.push('voice_lizardman_hey2');
		enemyVoiceArray.push('voice_lizardman_hey3');
	}
	else if(enemy.isOrcType) {
		enemyVoiceArray.push('voice_orc_hehe1');
		enemyVoiceArray.push('voice_orc_hey1');
		enemyVoiceArray.push('voice_orc_skill1');
		enemyVoiceArray.push('voice_orc_skill4');
	}
	else if(enemy.isVisitorType) {
		if(enemy._visitor_isGoblin) {
			enemyVoiceArray.push('voice_goblin_hey1');
			enemyVoiceArray.push('voice_goblin_hey2');
			enemyVoiceArray.push('voice_goblin_hey3');
		}
		else if(enemy._visitor_isOrc) {
			enemyVoiceArray.push('voice_orc_hehe1');
			enemyVoiceArray.push('voice_orc_hey1');
			enemyVoiceArray.push('voice_orc_skill1');
			enemyVoiceArray.push('voice_orc_skill4');
		}
		else if(enemy._visitor_isLizardman) {
			enemyVoiceArray.push('voice_lizardman_hey1');
			enemyVoiceArray.push('voice_lizardman_hey2');
			enemyVoiceArray.push('voice_lizardman_hey3');
		}
		else {
			enemyVoiceArray.push('voice_prisoner_hey1');
			enemyVoiceArray.push('voice_prisoner_hey2');
			enemyVoiceArray.push('voice_prisoner_hey3');
			enemyVoiceArray.push('voice_prisoner_hey4');
			enemyVoiceArray.push('voice_prisoner_hey5');
			enemyVoiceArray.push('voice_prisoner_oh2');
		}
	}
	else {
		enemyVoiceArray.push('voice_prisoner_hey1');
		enemyVoiceArray.push('voice_prisoner_hey2');
		enemyVoiceArray.push('voice_prisoner_hey3');
		enemyVoiceArray.push('voice_prisoner_hey4');
		enemyVoiceArray.push('voice_prisoner_hey5');
		enemyVoiceArray.push('voice_prisoner_oh2');
	}
	
	if(enemyVoiceArray.length > 0) {
		let enemyFileName = enemyVoiceArray[Math.randomInt(enemyVoiceArray.length)];
		AudioManager.playEnemyVoiceSe({name:enemyFileName, pan:0, pitch:100, volume:enemyVolume});
	}
};

///////////
// Window Message
Remtairy.Voices.Window_Message_updateInput = Window_Message.prototype.updateInput;
Window_Message.prototype.updateInput = function() {
	//if(this.isAnySubWindowActive()) return true;
	if(this.pause && !ConfigManager.keepVoicePlayback) {
		if(this.isTriggered()) {
			AudioManager.stopVoice();
		}
	}
    return Remtairy.Voices.Window_Message_updateInput.call(this);
};