var Remtairy = Remtairy || {};
Remtairy.Liquids = Remtairy.Liquids || {};

const LIQUID_PUSSY_WET_STAGE_ONE = 25;
const LIQUID_PUSSY_WET_STAGE_TWO = 80;
const LIQUID_PUSSY_WET_STAGE_THREE = 200;

//=============================================================================
 /*:
 * @plugindesc Liquids
 * @author Remtairy
 *
 * @help
 * This is a private plugin.
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 */
//=============================================================================

////////
// Tachie
///////////////

/**
 * @enum
 * @readonly
 */
const LiquidType = {
	ARMS_SEMEN: 0,
	LEGS_SEMEN: 1,
	BELLY_SEMEN: 2,
	BOOBS_SEMEN: 3,
	BUTT_SEMEN: 4,
	BACK_SEMEN: 5,
	FLOOR_SEMEN: 6,
	DESK_SEMEN: 7,
	TOILET_SEAT_SEMEN: 8,
	PUSSY_JUICE: 9,
	TOILET_WALL_SEMEN: 10,
	FACE_SEMEN: 11,
	COCK_SEMEN: 12,
	CROTCH_SEMEN: 13,
	ANAL_SEMEN: 14,
	MOUTH_DROLL: 15,
	OTHER_DROLL: 16,
}

/**
 * @type {Record<LiquidType, number[]>}
 * @private
 */
Game_Actor.prototype._liquidLevels = {
	[LiquidType.ARMS_SEMEN]: [0, 1, 15, 35],
	[LiquidType.LEGS_SEMEN]: [0, 1, 15, 35],
	[LiquidType.BELLY_SEMEN]: [0, 8, 30, 70],
	[LiquidType.BOOBS_SEMEN]: [0, 1, 30, 70],
	[LiquidType.BUTT_SEMEN]: [0, 1, 45, 90],
	[LiquidType.BACK_SEMEN]: [0, 8, 30, 70],
	[LiquidType.FLOOR_SEMEN]: [0, 10, 30, 69],
	[LiquidType.DESK_SEMEN]: [0, 1, 20, 50],
	[LiquidType.TOILET_SEAT_SEMEN]: [0, 10, 20, 50],
	[LiquidType.PUSSY_JUICE]: [0, LIQUID_PUSSY_WET_STAGE_ONE, LIQUID_PUSSY_WET_STAGE_TWO, LIQUID_PUSSY_WET_STAGE_THREE],
	[LiquidType.TOILET_WALL_SEMEN]: [0, 3, 15, 42],
	[LiquidType.FACE_SEMEN]: [0, 1, 25, 60],
	[LiquidType.COCK_SEMEN]: [0, 1, 15, 40],
	[LiquidType.CROTCH_SEMEN]: [0, 1, 30, 75],
	[LiquidType.ANAL_SEMEN]: [0, 1, 30, 75],
	[LiquidType.MOUTH_DROLL]: [0, 3, 7, 18],
	[LiquidType.OTHER_DROLL]: [0, 1, 4, 7],
	// TODO: FrontA semen layers are too unstructured.
	// :TonkinBow:
}

/**
 * @param {LiquidType} liquidType
 * @param {number} liquidAmount
 * @return {number}
 */
Game_Actor.prototype.getLiquidLevel = function (liquidType, liquidAmount) {
	const liquidLevels = this._liquidLevels[liquidType] ?? [];

	for (let level = liquidLevels.length - 1; level >= 0; level--) {
		if (liquidAmount >= liquidLevels[level]) {
			return level;
		}
	}

	return 0;
}

/**
 * @param {LiquidType} liquidType
 * @param {(actor: Game_Actor) => number} getLiquidAmount
 * @param {(actor: Game_Actor) => number} getMaxLiquidId
 * @param {boolean} substituteWithMainActor - crutch to avoid synchronizing main actor with chat face actor.
 * @return {number}
 */
Game_Actor.prototype.getLiquidId = function (
	liquidType,
	getLiquidAmount,
	getMaxLiquidId,
	substituteWithMainActor = false
) {
	/** @type {Game_Actor} */
	const actor = substituteWithMainActor && this.isChatface_Karryn ? $gameActors.actor(ACTOR_KARRYN_ID) : this;
	const liquidAmount = getLiquidAmount(actor);
	const maxId = getMaxLiquidId(actor);
	const liquidLevel = this.getLiquidLevel(liquidType, liquidAmount);

	return Math.min(liquidLevel, maxId);
}

Game_Actor.prototype.getTachieWetId = function() {
	const id = this.getLiquidId(
		LiquidType.PUSSY_JUICE,
		(actor) => actor.getBodyLiquid(BodyLiquidId.PUSSY_JUICE).amount,
		(actor) => actor._maxTachieWetId
	);

	if (!id) {
		return false;
	}

	return this._hasTachieSemenWetExtension
		? this._tachieSemenWetExtension + id
		: id;
};

Game_Actor.prototype.getTachieWetPantiesId = function() {
	const id = this.getLiquidId(
		LiquidType.PUSSY_JUICE,
		(actor) => actor.getBodyLiquid(BodyLiquidId.PUSSY_JUICE).amount,
		(actor) => actor._maxTachieWetPantiesId
	);

	if (!id) {
		return false;
	}

	return this._hasTachieSemenWetPantiesExtension
		? this._tachieSemenWetPantiesExtension + id
		: id;
};

Game_Actor.prototype.getTachieWetPussyToyId = function() {
	const id = this.getLiquidId(
		LiquidType.PUSSY_JUICE,
		(actor) => actor.getBodyLiquid(BodyLiquidId.PUSSY_JUICE).amount,
		(actor) => actor._maxTachieWetPussyToyId
	);

	if (!id) {
		return false;
	}

	return this._hasTachieSemenWetPussyToyExtension
		? this._tachieSemenWetPussyToyExtension + id
		: id;
};

Game_Actor.prototype.getTachieSemenRightArmId = function() {
	const id = this.getLiquidId(
		LiquidType.ARMS_SEMEN,
		(actor) => actor.getBodyLiquid(BodyLiquidId.ARM_RIGHT_SEMEN).amount,
		(actor) => actor._maxTachieSemenRightArmId,
		true
	);

	if (!id) {
		return false;
	}

	const isKarrynChatface = this.isChatface_Karryn;
	if(isKarrynChatface) {
		return '' + this.tachieBody + '_' + id;
	} else if (this._hasTachieSemenRightArmExtension) {
		return '' + this._tachieSemenRightArmExtension + id;
	} else {
		return id;
	}
};

Game_Actor.prototype.getTachieSemenLeftArmId = function() {
	const id = this.getLiquidId(
		LiquidType.ARMS_SEMEN,
		(actor) => actor.getBodyLiquid(BodyLiquidId.ARM_LEFT_SEMEN).amount,
		(actor) => actor._maxTachieSemenLeftArmId,
		true
	);

	if (!id) {
		return false;
	}

	const isKarrynChatface = this.isChatface_Karryn;
	if (isKarrynChatface) {
		return '' + this.tachieBody + '_' + id;
	} else if (this._hasTachieSemenLeftArmExtension) {
		return '' + this._tachieSemenLeftArmExtension + id
	} else {
		return id;
	}
};

Game_Actor.prototype.getTachieSemenRightLegId = function() {
	const id = this.getLiquidId(
		LiquidType.LEGS_SEMEN,
		(actor) => actor.getBodyLiquid(BodyLiquidId.LEG_RIGHT_SEMEN).amount,
		(actor) => actor._maxTachieSemenRightLegId
	);

	if (!id) {
		return false;
	}

	return this._hasTachieSemenRightLegExtension
		? '' + this._tachieSemenRightLegExtension + id
		: id;
};

Game_Actor.prototype.getTachieSemenLeftLegId = function() {
	const id = this.getLiquidId(
		LiquidType.LEGS_SEMEN,
		(actor) => actor.getBodyLiquid(BodyLiquidId.LEG_LEFT_SEMEN).amount,
		(actor) => actor._maxTachieSemenLeftLegId
	);

	if (!id) {
		return false;
	}

	return this._hasTachieSemenLeftLegExtension
		? '' + this._tachieSemenLeftLegExtension + id
		: id;
};

Game_Actor.prototype.getTachieSemenBellyId = function() {
	const id = this.getLiquidId(
		LiquidType.BELLY_SEMEN,
		(actor) => actor.getBodyLiquid(BodyLiquidId.BELLY_SEMEN).amount,
		(actor) => actor._maxTachieSemenBellyId,
		true
	);

	if (!id) {
		return false;
	}

	return this._hasTachieSemenBellyExtension
		? '' + this._tachieSemenBellyExtension + id
		: id;
};

Game_Actor.prototype.getTachieSemenBoobsId = function() {
	let id = this.getLiquidId(
		LiquidType.BOOBS_SEMEN,
		(actor) => actor._liquidBukkakeBoobs,
		(actor) => actor._maxTachieSemenBoobsId,
		true
	);

	if (!id) {
		return false;
	}

	if(this._hasTachieSemenBoobsPCupExtensionBasedOnClothingStage && this.boobsSizeIsPCup()) {
		let fixedClothingStage = this.clothingStage;
		if(!this.isWearingGlovesAndHat() || this.clothingStage > 4) {
			fixedClothingStage = 4;
		}
		id = '' + fixedClothingStage + '_' + id;
	}

	const isKarrynChatface = this.isChatface_Karryn;
	if (isKarrynChatface) {
		return this._hasTachieSemenBoobsExtension ? '' + this._tachieSemenBoobsExtension + id : id;
	} else if (this._hasTachieSemenBoobsExtension) {
		return '' + this._tachieSemenBoobsExtension + id;
	} else {
		return id;
	}
};

Game_Actor.prototype.getTachieSemenRightBoobId = function() {
	const id = this.getLiquidId(
		LiquidType.BOOBS_SEMEN,
		(actor) => actor.getBodyLiquid(BodyLiquidId.BOOB_RIGHT_SEMEN).amount,
		(actor) => actor._maxTachieSemenRightBoobId
	);

	if (!id) {
		return false;
	}

	return this._hasTachieSemenRightBoobExtension
		? '' + this._tachieSemenRightBoobExtension + id
		: id;
};

Game_Actor.prototype.getTachieSemenLeftBoobId = function() {
	const id = this.getLiquidId(
		LiquidType.BOOBS_SEMEN,
		(actor) => actor.getBodyLiquid(BodyLiquidId.BOOB_LEFT_SEMEN).amount,
		(actor) => actor._maxTachieSemenLeftBoobId
	);

	if (!id) {
		return false;
	}

	return this._hasTachieSemenLeftBoobExtension
		? '' + this._tachieSemenLeftBoobExtension + id
		: id;
};

Game_Actor.prototype.getTachieSemenButtId = function() {
	const id = this.getLiquidId(
		LiquidType.BUTT_SEMEN,
		(actor) => actor._liquidBukkakeButt,
		(actor) => actor._maxTachieSemenButtId,
		true
	);

	if (!id) {
		return false;
	}

	return this._hasTachieSemenButtExtension
		? '' + this._tachieSemenButtExtension + id
		: id;
};

Game_Actor.prototype.getTachieSemenButtTopRightId = function() {
	return this.getLiquidId(
		LiquidType.BUTT_SEMEN,
		(actor) => actor.getBodyLiquid(BodyLiquidId.BUTT_TOP_RIGHT_SEMEN).amount,
		(actor) => actor._maxTachieSemenButtTopRightId
	);
};

Game_Actor.prototype.getTachieSemenButtBottomRightId = function() {
	return this.getLiquidId(
		LiquidType.BUTT_SEMEN,
		(actor) => actor.getBodyLiquid(BodyLiquidId.BUTT_BOTTOM_RIGHT_SEMEN).amount,
		(actor) => actor._maxTachieSemenButtBottomRightId
	);
};

Game_Actor.prototype.getTachieSemenButtTopLeftId = function() {
	return this.getLiquidId(
		LiquidType.BUTT_SEMEN,
		(actor) => actor.getBodyLiquid(BodyLiquidId.BUTT_TOP_LEFT_SEMEN).amount,
		(actor) => actor._maxTachieSemenButtTopLeftId
	);
};

Game_Actor.prototype.getTachieSemenButtBottomLeftId = function() {
	return this.getLiquidId(
		LiquidType.BUTT_SEMEN,
		(actor) => actor.getBodyLiquid(BodyLiquidId.BUTT_BOTTOM_LEFT_SEMEN).amount,
		(actor) => actor._maxTachieSemenButtBottomLeftId
	);
};

Game_Actor.prototype.getTachieSemenButtLeftId = function() {
	return this.getLiquidId(
		LiquidType.BUTT_SEMEN,
		(actor) => actor._liquidBukkakeButtLeft,
		(actor) => actor._maxTachieSemenButtLeftId
	);
};

Game_Actor.prototype.getTachieSemenButtRightId = function() {
	return this.getLiquidId(
		LiquidType.BUTT_SEMEN,
		(actor) => actor._liquidBukkakeButtRight,
		(actor) => actor._maxTachieSemenButtRightId
	);
};

Game_Actor.prototype.getTachieSemenBackId = function() {
	const id = this.getLiquidId(
		LiquidType.BACK_SEMEN,
		(actor) => actor.getBodyLiquid(BodyLiquidId.BACK_SEMEN).amount,
		(actor) => actor._maxTachieSemenBackId
	);

	if (!id) {
		return false;
	}

	return this._hasTachieSemenBackExtension
		? '' + this._tachieSemenBackExtension + id
		: id;
};

Game_Actor.prototype.getTachieSemenFloorId = function() {
	return this.getLiquidId(
		LiquidType.FLOOR_SEMEN,
		(actor) => actor._liquidOnFloor,
		(actor) => actor._maxTachieSemenFloorId
	);
};

Game_Actor.prototype.getTachieSemenDeskId = function() {
	return this.getLiquidId(
		LiquidType.DESK_SEMEN,
		(actor) => actor._liquidOnDesk,
		(actor) => actor._maxTachieSemenDeskId
	);
};

Game_Actor.prototype.getTachieSemenToiletSeatId = function() {
	const id = this.getLiquidId(
		LiquidType.TOILET_SEAT_SEMEN,
		(actor) => actor._liquidCumOnToiletSeat,
		(actor) => actor._maxTachieSemenToiletSeatId
	);

	if (!id) {
		return false;
	}

	return this._hasTachieSemenToiletSeatExtension
		? '' + this._tachieSemenToiletSeatExtension + id
		: id;
};

Game_Actor.prototype.getTachieWetToiletSeatId = function() {
	const id = this.getLiquidId(
		LiquidType.PUSSY_JUICE,
		(actor) => actor._liquidJuiceOnToiletSeat,
		(actor) => actor._maxTachieWetToiletSeatId
	);

	if (!id) {
		return false;
	}

	return this._hasTachieWetToiletSeatExtension
		? this._tachieWetToiletSeatExtension + id
		: id;
};

Game_Actor.prototype.getTachieGlorySemenLeftWallId = function(index) {
	return this.getLiquidId(
		LiquidType.TOILET_WALL_SEMEN,
		(actor) => actor._liquidGloryCumOnLeftWall[index],
		(actor) => actor._maxTachieGlorySemenLeftWallId
	);
};

Game_Actor.prototype.getTachieGlorySemenRightWallId = function(index) {
	return this.getLiquidId(
		LiquidType.TOILET_WALL_SEMEN,
		(actor) => actor._liquidGloryCumOnRightWall[index],
		(actor) => actor._maxTachieGlorySemenRightWallId
	);
};

Game_Actor.prototype.getTachieGlorySemenLeftHoleId = function(index) {
	return this.getLiquidId(
		LiquidType.TOILET_WALL_SEMEN,
		(actor) => actor._liquidGloryCumOnLeftHole[index],
		(actor) => actor._maxTachieGlorySemenLeftHoleId
	);
};

Game_Actor.prototype.getTachieGlorySemenRightHoleId = function(index) {
	return this.getLiquidId(
		LiquidType.TOILET_WALL_SEMEN,
		(actor) => actor._liquidGloryCumOnRightHole[index],
		(actor) => actor._maxTachieGlorySemenRightHoleId
	);
};

Game_Actor.prototype.getTachieGlorySemenLeftToiletId = function(index) {
	return this.getLiquidId(
		LiquidType.TOILET_WALL_SEMEN,
		(actor) => actor._liquidGloryCumOnLeftToilet[index],
		(actor) => actor._maxTachieGlorySemenLeftToiletId
	);
};

Game_Actor.prototype.getTachieGlorySemenRightToiletId = function(index) {
	return this.getLiquidId(
		LiquidType.TOILET_WALL_SEMEN,
		(actor) => actor._liquidGloryCumOnRightToilet[index],
		(actor) => actor._maxTachieGlorySemenLeftToiletId
	);
};

Game_Actor.prototype.getTachieSemenFaceId = function() {
	const id = this.getLiquidId(
		LiquidType.FACE_SEMEN,
		(actor) => actor.getBodyLiquid(BodyLiquidId.FACE_SEMEN).amount,
		(actor) => actor._maxTachieSemenFaceId,
		true
	);

	if (!id) {
		return false;
	}

	const isKarrynChatface = this.isChatface_Karryn;
	if (isKarrynChatface) {
		 return this._hasTachieSemenFaceExtension ? '' + this._tachieSemenFaceExtension + id : id;
	} else if (this._hasTachieSemenFaceExtension) {
		return this._tachieSemenFaceExtension + id;
	} else {
		return id;
	}
};

Game_Actor.prototype.getTachieSemenMouthId = function() {
	if (!this._cockMouthTarget) {
		return false;
	}

	const id = this.getLiquidId(
		LiquidType.FACE_SEMEN,
		(actor) => actor.getBodyLiquid(BodyLiquidId.MOUTH_SEMEN).amount,
		(actor) => actor._maxTachieSemenMouthId
	);

	if (!id) {
		return false;
	}

	return this._hasTachieSemenMouthExtension
		? this._tachieSemenMouthExtension + id
		: id;
};

Game_Actor.prototype.getTachieSemenCockMouthId = function() {
	if (!this._cockMouthTarget) {
		return false;
	}

	const id = this.getLiquidId(
		LiquidType.COCK_SEMEN,
		(actor) =>
			actor._cockMouthTarget._enemyTempRecordTotalEjaculationCount -
			actor._cockMouthTarget._enemyTempRecordBlowjobCleanedCount,
		(actor) => actor._maxTachieSemenCockMouthId
	);

	if (!id) {
		return false;
	}

	return this._hasTachieSemenCockMouthExtension
		? this._tachieSemenCockMouthExtension + id
		: id;
};

Game_Actor.prototype.getTachieSemenCockBoobsId = function() {
	if (!this._cockBoobsTarget) {
		return false;
	}

	return this.getLiquidId(
		LiquidType.COCK_SEMEN,
		(actor) =>
			actor._cockBoobsTarget._enemyTempRecordTotalEjaculationCount -
			actor._cockBoobsTarget._enemyTempRecordBlowjobCleanedCount,
		(actor) => actor._maxTachieSemenCockBoobsId
	);
};

Game_Actor.prototype.getTachieSemenCockRightArmId = function() {
	if (!this._cockRightArmTarget) {
		return false;
	}

	const id = this.getLiquidId(
		LiquidType.COCK_SEMEN,
		(actor) =>
			actor._cockRightArmTarget._enemyTempRecordTotalEjaculationCount -
			actor._cockRightArmTarget._enemyTempRecordBlowjobCleanedCount,
		(actor) => actor._maxTachieSemenCockRightArmId
	);

	if (!id) {
		return false;
	}

	return this._hasTachieSemenCockRightArmExtension
		? this._tachieSemenCockRightArmExtension + id
		: id;
};

Game_Actor.prototype.getTachieSemenCockLeftArmId = function() {
	if (!this._cockLeftArmTarget) {
		return false;
	}

	const id = this.getLiquidId(
		LiquidType.COCK_SEMEN,
		(actor) =>
			actor._cockLeftArmTarget._enemyTempRecordTotalEjaculationCount -
			actor._cockLeftArmTarget._enemyTempRecordBlowjobCleanedCount,
		(actor) => actor._maxTachieSemenCockLeftArmId
	);

	if (!id) {
		return false;
	}

	return this._hasTachieSemenCockLeftArmExtension
		? this._tachieSemenCockLeftArmExtension + id
		: id;
};

Game_Actor.prototype.getTachieSemenCockPussyId = function() {
	if (!this._cockPussyTarget) {
		return false;
	}

	const id = this.getLiquidId(
		LiquidType.COCK_SEMEN,
		(actor) =>
			actor._cockPussyTarget._enemyTempRecordTotalEjaculationCount -
			actor._cockPussyTarget._enemyTempRecordBlowjobCleanedCount,
		(actor) => actor._maxTachieSemenCockPussyId
	);

	if (!id) {
		return false;
	}

	return this._hasTachieSemenCockPussyExtension
		? this._tachieSemenCockPussyExtension + id
		: id;
};

Game_Actor.prototype.getTachieSemenCockAnalId = function() {
	if (!this._cockAnalTarget) {
		return false;
	}

	const id = this.getLiquidId(
		LiquidType.COCK_SEMEN,
		(actor) =>
			actor._cockAnalTarget._enemyTempRecordTotalEjaculationCount -
			actor._cockAnalTarget._enemyTempRecordBlowjobCleanedCount,
		(actor) => actor._maxTachieSemenCockAnalId
	);

	if (!id) {
		return false;
	}

	return this._hasTachieSemenCockAnalExtension
		? this._tachieSemenCockAnalExtension + id
		: id;
};

Game_Actor.prototype.getTachieSemenCockFeetId = function() {
	if (!this._cockFeetTarget) {
		return false;
	}

	const id = this.getLiquidId(
		LiquidType.COCK_SEMEN,
		(actor) =>
			actor._cockFeetTarget._enemyTempRecordTotalEjaculationCount -
			actor._cockFeetTarget._enemyTempRecordBlowjobCleanedCount,
		(actor) => actor._maxTachieSemenCockFeetId
	);
	
	if (!id) {
		return false;
	}
	
	return this._hasTachieSemenCockFeetExtension
		? this._tachieSemenCockFeetExtension + id
		: id;
};

Game_Actor.prototype.getTachieSemenCockNormalId = function() {
	if (!this._cockNormalTarget) {
		return false;
	}

	const id = this.getLiquidId(
		LiquidType.COCK_SEMEN,
		(actor) =>
			actor._cockNormalTarget._enemyTempRecordTotalEjaculationCount -
			actor._cockNormalTarget._enemyTempRecordBlowjobCleanedCount,
		(actor) => actor._maxTachieSemenCockNormalId
	);

	if (!id) {
		return false;
	}

	return this._hasTachieSemenCockNormalExtension
		? this._tachieSemenCockNormalExtension + id
		: id;
};

Game_Actor.prototype.getTachieSemenHoleLeftId = function() {
	if (!$gameTroop._gloryLeftStall || !$gameTroop._gloryLeftStall._guest_showedThroughHole) {
		return false;
	}

	const id = this.getLiquidId(
		LiquidType.COCK_SEMEN,
		() =>
			$gameTroop._gloryLeftStall._enemyTempRecordTotalEjaculationCount -
			$gameTroop._gloryLeftStall._enemyTempRecordBlowjobCleanedCount,
		(actor) => actor._maxTachieSemenHoleLeftId
	);

	if (!id) {
		return false;
	}

	return this._hasTachieSemenHoleLeftExtension
		? this._tachieSemenHoleLeftExtension + id
		: id;
};

Game_Actor.prototype.getTachieSemenHoleRightId = function() {
	if (!$gameTroop._gloryRightStall || !$gameTroop._gloryRightStall._guest_showedThroughHole) {
		return false;
	}

	const id = this.getLiquidId(
		LiquidType.COCK_SEMEN,
		() =>
			$gameTroop._gloryRightStall._enemyTempRecordTotalEjaculationCount -
			$gameTroop._gloryRightStall._enemyTempRecordBlowjobCleanedCount,
		(actor) => actor._maxTachieSemenHoleRightId
	);

	if (!id) {
		return false;
	}

	return this._hasTachieSemenHoleRightExtension
		? this._tachieSemenHoleRightExtension + id
		: id;
};

Game_Actor.prototype.getTachieSemenFrontAId = function() {
	let maxId = this._maxTachieSemenFrontAId;
	if(maxId == 0) return false;

	let liquid = 0;
	let id = 0;
	if($gameParty.isInTrainerBattle) {
		if(this.isInTrainerStandbyPose()) return false;
		liquid = this.trainerBattle_getTachieSemenFrontAId();
	}
	else if($gameParty.isInStripperBattle) {
		if(!this.isInStripperSexPose()) return false;
		liquid = this.stripperBattle_getTachieSemenFrontAId();
	}
	else if($gameParty.isInGloryBattle) {
		if(!this.isInToiletSitLeftPose() && !this.isInToiletSitRightPose() && !this.isInToiletStandLeftPose() && !this.isInToiletStandRightPose()) return false;
		let tempExt = false;
		if(this.isInToiletSitRightPose() || this.isInToiletStandLeftPose()) {
			if(this._hasTachieSemenLeftArmExtension) {
				tempExt = this._tachieSemenLeftArmExtension;
				this.resetTachieSemenLeftArmExtension();
			}
			liquid = parseInt(this.getTachieSemenLeftArmId());
			if(tempExt) {
				this.setTachieSemenLeftArmExtension(tempExt);
			}
		}
		else if(this.isInToiletSitLeftPose() || this.isInToiletStandRightPose()) {
			if(this._hasTachieSemenRightArmExtension) {
				tempExt = this._tachieSemenRightArmExtension;
				this.resetTachieSemenRightArmExtension();
			}
			liquid = parseInt(this.getTachieSemenRightArmId());
			if(tempExt) {
				this.setTachieSemenRightArmExtension(tempExt);
			}
		}
		else return false;
	}
	else if(this.isInMapPose()) {
		switch(this.tachieLeftArm) {
			case 'face_1':
			case 'face_1_naked':
			case 'peace_1':
			case 'peace_1_naked':
			case 'rest_boobs_1':
			case 'rest_boobs_1_naked':
				let tempExt = false;
				if(this._hasTachieSemenLeftArmExtension) {
					tempExt = this._tachieSemenLeftArmExtension;
					this.resetTachieSemenLeftArmExtension();
				}
				liquid = parseInt(this.getTachieSemenLeftArmId());
				if(tempExt) {
					this.setTachieSemenLeftArmExtension(tempExt);
				}
			break;
		}
	}
	else {
		if(!this._cockFrontATarget) return false;
		liquid = this._cockFrontATarget._enemyTempRecordTotalEjaculationCount - this._cockFrontATarget._enemyTempRecordBlowjobCleanedCount;
	}

	if($gameParty.isInTrainerBattle) {
		if(liquid >= 1)
			id = 10;
		else return false;
	}
	else {
		if(liquid >= 40)
			id = 3;
		else if(liquid >= 15)
			id = 2;
		else if(liquid >= 1)
			id = 1;
		else return false;
	}

	id = Math.min(id, maxId);
	if(this._hasTachieSemenFrontAExtension) return this._tachieSemenFrontAExtension + id;
	return id;
};
Game_Actor.prototype.getTachieSemenFrontBId = function() {
	let maxId = this._maxTachieSemenFrontBId;
	if(maxId == 0) return false;

	let liquid = 0;
	let id = 0;
	if($gameParty.isInTrainerBattle) {
		if(this.isInTrainerStandbyPose()) return false;
		liquid = this.trainerBattle_getTachieSemenFrontBId();
	}
	else if($gameParty.isInStripperBattle) {
		if(!this.isInStripperSexPose()) return false;
		liquid = this.stripperBattle_getTachieSemenFrontBId();
	}
	else if(this.isInMapPose()) {
		switch(this.tachieRightArm) {
			case 'boob1':
			case 'boob1_naked':
			case 'weapon_tired_1':
			case 'weapon_tired_1_naked':
				let tempExt = false;
				if(this._hasTachieSemenRightArmExtension) {
					tempExt = this._tachieSemenRightArmExtension;
					this.resetTachieSemenRightArmExtension();
				}
				liquid = parseInt(this.getTachieSemenRightArmId());
				if(tempExt) {
					this.setTachieSemenRightArmExtension(tempExt);
				}
			break;
		}
	}
	else {
		if(!this._cockFrontBTarget) return false;
		liquid = this._cockFrontBTarget._enemyTempRecordTotalEjaculationCount - this._cockFrontBTarget._enemyTempRecordBlowjobCleanedCount;
	}

	if($gameParty.isInTrainerBattle) {
		if(liquid >= 1)
			id = 10;
		else return false;
	}
	else {
		if(liquid >= 40)
			id = 3;
		else if(liquid >= 15)
			id = 2;
		else if(liquid >= 1)
			id = 1;
		else return false;
	}

	id = Math.min(id, maxId);
	if(this._hasTachieSemenFrontBExtension) return this._tachieSemenFrontBExtension + id;
	return id;
};
Game_Actor.prototype.getTachieSemenFrontCId = function() {
	let maxId = this._maxTachieSemenFrontCId;
	if(maxId == 0) return false;

	let liquid = 0;
	let id = 0;
	if($gameParty.isInTrainerBattle) {
		if(this.isInTrainerStandbyPose()) return false;
		liquid = this.trainerBattle_getTachieSemenFrontCId();
	}
	else if($gameParty.isInStripperBattle) {
		if(!this.isInStripperSexPose()) return false;
		liquid = this.stripperBattle_getTachieSemenFrontCId();
	}
	else {
		if(!this._cockFrontCTarget) return false;
		liquid = this._cockFrontCTarget._enemyTempRecordTotalEjaculationCount - this._cockFrontCTarget._enemyTempRecordBlowjobCleanedCount;
	}

	if($gameParty.isInTrainerBattle) {
		if(liquid >= 1)
			id = 10;
		else return false;
	}
	else {
		if(liquid >= 40)
			id = 3;
		else if(liquid >= 15)
			id = 2;
		else if(liquid >= 1)
			id = 1;
		else return false;
	}

	id = Math.min(id, maxId);
	if(this._hasTachieSemenFrontCExtension) return this._tachieSemenFrontCExtension + id;
	return id;
};
Game_Actor.prototype.getTachieSemenFrontDId = function() {
	let maxId = this._maxTachieSemenFrontDId;
	if(maxId == 0) return false;
	if(!this._cockFrontDTarget) return false;
	let liquid = this._cockFrontDTarget._enemyTempRecordTotalEjaculationCount - this._cockFrontDTarget._enemyTempRecordBlowjobCleanedCount;
	let id = 0;
	if(liquid >= 40)
		id = 3;
	else if(liquid >= 15)
		id = 2;
	else if(liquid >= 1)
		id = 1;
	else return false;

	id = Math.min(id, maxId);
	if(this._hasTachieSemenFrontDExtension) return this._tachieSemenFrontDExtension + id;
	return id;
};

Game_Actor.prototype.getTachieSemenCrotchPantiesId = function() {
	const id = this.getLiquidId(
		LiquidType.CROTCH_SEMEN,
		(actor) => actor.getBodyLiquid(BodyLiquidId.PUSSY_SEMEN).amount,
		(actor) => actor._maxTachieSemenCrotchPantiesId
	);

	if (!id) {
		return false;
	}

	return this._hasTachieSemenCrotchPantiesExtension
		? '' + this._tachieSemenCrotchPantiesExtension + id
		: id;
};

Game_Actor.prototype.getTachieSemenCrotchId = function() {
	const id = this.getLiquidId(
		LiquidType.CROTCH_SEMEN,
		(actor) => actor.getBodyLiquid(BodyLiquidId.PUSSY_SEMEN).amount,
		(actor) => actor._maxTachieSemenCrotchId
	);

	if (!id) {
		return false;
	}

	return this._hasTachieSemenCrotchExtension ?
		'' + this._tachieSemenCrotchExtension + id
		: id;
};

Game_Actor.prototype.getTachieSemenAnalPantiesId = function() {
	const id = this.getLiquidId(
		LiquidType.ANAL_SEMEN,
		(actor) => actor.getBodyLiquid(BodyLiquidId.ANAL_SEMEN).amount,
		(actor) => actor._maxTachieSemenAnalPantiesId
	);

	if (!id) {
		return false;
	}

	return this._hasTachieSemenAnalExtension
		? '' + this._tachieSemenAnalExtension + id
		: id;
};

Game_Actor.prototype.getTachieSemenAnalId = function() {
	const id = this.getLiquidId(
		LiquidType.ANAL_SEMEN,
		(actor) => actor.getBodyLiquid(BodyLiquidId.ANAL_SEMEN).amount,
		(actor) => actor._maxTachieSemenAnalId
	);

	if (!id) {
		return false;
	}

	return this._hasTachieSemenAnalExtension
		? '' + this._tachieSemenAnalExtension + id
		: id;
};

Game_Actor.prototype.getTachieDroolMouthId = function() {
	return this.getLiquidId(
		LiquidType.MOUTH_DROLL,
		(actor) => actor.getBodyLiquid(BodyLiquidId.MOUTH_DROOL).amount,
		(actor) => actor._maxTachieDroolMouthId
	);
};

Game_Actor.prototype.getTachieDroolFingersId = function() {
	return this.getLiquidId(
		LiquidType.OTHER_DROLL,
		(actor) => actor.getBodyLiquid(BodyLiquidId.FINGERS_DROOL).amount,
		(actor) => actor._maxTachieDroolFingersId
	);
};

Game_Actor.prototype.getTachieDroolNipplesId = function() {
	return this.getLiquidId(
		LiquidType.OTHER_DROLL,
		(actor) => actor.getBodyLiquid(BodyLiquidId.NIPPLES_DROOL).amount,
		(actor) => actor._maxTachieDroolNipplesId
	);
};

Game_Actor.prototype.setMaxTachieSemenBackId = function(value) { this._maxTachieSemenBackId = value; };
Game_Actor.prototype.setMaxTachieSemenDeskId = function(value) { this._maxTachieSemenDeskId = value; };
Game_Actor.prototype.setMaxTachieSemenBellyId = function(value) { this._maxTachieSemenBellyId = value; };
Game_Actor.prototype.setMaxTachieSemenBoobsId = function(value) { this._maxTachieSemenBoobsId = value; };
Game_Actor.prototype.setMaxTachieSemenLeftBoobId = function(value) { this._maxTachieSemenLeftBoobId = value; };
Game_Actor.prototype.setMaxTachieSemenRightBoobId = function(value) { this._maxTachieSemenRightBoobId = value; };
Game_Actor.prototype.setMaxTachieSemenButtId = function(value) { this._maxTachieSemenButtId = value; };
Game_Actor.prototype.setMaxTachieSemenButtTopRightId = function(value) { this._maxTachieSemenButtTopRightId = value; };
Game_Actor.prototype.setMaxTachieSemenButtBottomRightId = function(value) { this._maxTachieSemenButtBottomRightId = value; };
Game_Actor.prototype.setMaxTachieSemenButtTopLeftId = function(value) { this._maxTachieSemenButtTopLeftId = value; };
Game_Actor.prototype.setMaxTachieSemenButtBottomLeftId = function(value) { this._maxTachieSemenButtBottomLeftId = value; };
Game_Actor.prototype.setMaxTachieSemenButtRightId = function(value) { this._maxTachieSemenButtRightId = value; };
Game_Actor.prototype.setMaxTachieSemenButtLeftId = function(value) { this._maxTachieSemenButtLeftId = value; };
Game_Actor.prototype.setMaxTachieSemenAnalId = function(value) { this._maxTachieSemenAnalId = value; };
Game_Actor.prototype.setMaxTachieSemenAnalPantiesId = function(value) { this._maxTachieSemenAnalPantiesId = value; };
Game_Actor.prototype.setMaxTachieSemenCrotchId = function(value) { this._maxTachieSemenCrotchId = value; };
Game_Actor.prototype.setMaxTachieSemenCrotchPantiesId = function(value) { this._maxTachieSemenCrotchPantiesId = value; };
Game_Actor.prototype.setMaxTachieSemenFaceId = function(value) { this._maxTachieSemenFaceId = value; };
Game_Actor.prototype.setMaxTachieSemenMouthId = function(value) { this._maxTachieSemenMouthId = value; };
Game_Actor.prototype.setMaxTachieSemenLeftArmId = function(value) { this._maxTachieSemenLeftArmId = value; };
Game_Actor.prototype.setMaxTachieSemenRightArmId = function(value) { this._maxTachieSemenRightArmId = value; };
Game_Actor.prototype.setMaxTachieSemenLeftLegId = function(value) { this._maxTachieSemenLeftLegId = value; };
Game_Actor.prototype.setMaxTachieSemenRightLegId = function(value) { this._maxTachieSemenRightLegId = value; };
Game_Actor.prototype.setMaxTachieSemenFloorId = function(value) { this._maxTachieSemenFloorId = value; };
Game_Actor.prototype.setMaxTachieWetId = function(value) { this._maxTachieWetId = value; };
Game_Actor.prototype.setMaxTachieWetPantiesId = function(value) { this._maxTachieWetPantiesId = value; };
Game_Actor.prototype.setMaxTachieWetPussyToyId = function(value) { this._maxTachieWetPussyToyId = value; };


Game_Actor.prototype.setMaxTachieDroolMouthId = function(value) { this._maxTachieDroolMouthId = value; };
Game_Actor.prototype.setMaxTachieDroolFingersId = function(value) { this._maxTachieDroolFingersId = value; };
Game_Actor.prototype.setMaxTachieDroolNipplesId = function(value) { this._maxTachieDroolNipplesId = value; };

Game_Actor.prototype.setMaxTachieSemenCockMouthId = function(value) { this._maxTachieSemenCockMouthId = value; };
Game_Actor.prototype.setMaxTachieSemenCockBoobsId = function(value) { this._maxTachieSemenCockBoobsId = value; };
Game_Actor.prototype.setMaxTachieSemenCockRightArmId = function(value) { this._maxTachieSemenCockRightArmId = value; };
Game_Actor.prototype.setMaxTachieSemenCockLeftArmId = function(value) { this._maxTachieSemenCockLeftArmId = value; };
Game_Actor.prototype.setMaxTachieSemenCockPussyId = function(value) { this._maxTachieSemenCockPussyId = value; };
Game_Actor.prototype.setMaxTachieSemenCockAnalId = function(value) { this._maxTachieSemenCockAnalId = value; };
Game_Actor.prototype.setMaxTachieSemenCockFeetId = function(value) { this._maxTachieSemenCockFeetId = value; };
Game_Actor.prototype.setMaxTachieSemenCockNormalId = function(value) { this._maxTachieSemenCockNormalId = value; };
Game_Actor.prototype.setMaxTachieSemenHoleLeftId = function(value) { this._maxTachieSemenHoleLeftId = value; };
Game_Actor.prototype.setMaxTachieSemenHoleRightId = function(value) { this._maxTachieSemenHoleRightId = value; };
Game_Actor.prototype.setMaxTachieSemenToiletSeatId = function(value) { this._maxTachieSemenToiletSeatId = value; };
Game_Actor.prototype.setMaxTachieWetToiletSeatId = function(value) { this._maxTachieWetToiletSeatId = value; };
Game_Actor.prototype.setMaxTachieGlorySemenLeftWallId = function(value) { this._maxTachieGlorySemenLeftWallId = value; };
Game_Actor.prototype.setMaxTachieGlorySemenRightWallId = function(value) { this._maxTachieGlorySemenRightWallId = value; };
Game_Actor.prototype.setMaxTachieGlorySemenLeftHoleId = function(value) { this._maxTachieGlorySemenLeftHoleId = value; };
Game_Actor.prototype.setMaxTachieGlorySemenRightHoleId = function(value) { this._maxTachieGlorySemenRightHoleId = value; };
Game_Actor.prototype.setMaxTachieGlorySemenLeftToiletId = function(value) { this._maxTachieGlorySemenLeftToiletId = value; };
Game_Actor.prototype.setMaxTachieGlorySemenRightToiletId = function(value) { this._maxTachieGlorySemenRightToiletId = value; };

Game_Actor.prototype.setMaxTachieSemenFrontAId = function(value) { this._maxTachieSemenFrontAId = value; };
Game_Actor.prototype.setMaxTachieSemenFrontBId = function(value) { this._maxTachieSemenFrontBId = value; };
Game_Actor.prototype.setMaxTachieSemenFrontCId = function(value) { this._maxTachieSemenFrontCId = value; };
Game_Actor.prototype.setMaxTachieSemenFrontDId = function(value) { this._maxTachieSemenFrontDId = value; };

Game_Actor.prototype.setTachieSemenAnalExtension = function(value) {
	this._tachieSemenAnalExtension = value;
	this._hasTachieSemenAnalExtension = true;
};
Game_Actor.prototype.resetTachieSemenAnalExtension = function() { this._hasTachieSemenAnalExtension = false; };

Game_Actor.prototype.setTachieSemenAnalPantiesExtension = function(value) {
	this._tachieSemenAnalPantiesExtension = value;
	this._hasTachieSemenAnalPantiesExtension = true;
};
Game_Actor.prototype.resetTachieSemenAnalPantiesExtension = function() { this._hasTachieSemenAnalPantiesExtension = false; };

Game_Actor.prototype.setTachieSemenBackExtension = function(value) {
	this._tachieSemenBackExtension = value;
	this._hasTachieSemenBackExtension = true;
};
Game_Actor.prototype.resetTachieSemenBackExtension = function() { this._hasTachieSemenBackExtension = false; };

Game_Actor.prototype.setTachieSemenBellyExtension = function(value) {
	this._tachieSemenBellyExtension = value;
	this._hasTachieSemenBellyExtension = true;
};
Game_Actor.prototype.resetTachieSemenBellyExtension = function() { this._hasTachieSemenBellyExtension = false; };

Game_Actor.prototype.setTachieSemenButtExtension = function(value) {
	this._tachieSemenButtExtension = value;
	this._hasTachieSemenButtExtension = true;
};
Game_Actor.prototype.resetTachieSemenButtExtension = function() { this._hasTachieSemenButtExtension = false; };

Game_Actor.prototype.setTachieSemenBoobsExtension = function(value) {
	this._tachieSemenBoobsExtension = value;
	this._hasTachieSemenBoobsExtension = true;
};
Game_Actor.prototype.resetTachieSemenBoobsExtension = function() { this._hasTachieSemenBoobsExtension = false; };

Game_Actor.prototype.setTachieSemenLeftBoobExtension = function(value) {
	this._tachieSemenLeftBoobExtension = value;
	this._hasTachieSemenLeftBoobExtension = true;
};
Game_Actor.prototype.resetTachieSemenLeftBoobExtension = function() { this._hasTachieSemenLeftBoobExtension = false; };

Game_Actor.prototype.setTachieSemenRightBoobExtension = function(value) {
	this._tachieSemenRightBoobExtension = value;
	this._hasTachieSemenRightBoobExtension = true;
};
Game_Actor.prototype.resetTachieSemenRightBoobExtension = function() { this._hasTachieSemenRightBoobExtension = false; };

Game_Actor.prototype.setTachieSemenLeftLegExtension = function(value) {
	this._tachieSemenLeftLegExtension = value;
	this._hasTachieSemenLeftLegExtension = true;
};
Game_Actor.prototype.resetTachieSemenLeftLegExtension = function() { this._hasTachieSemenLeftLegExtension = false; };

Game_Actor.prototype.setTachieSemenRightLegExtension = function(value) {
	this._tachieSemenRightLegExtension = value;
	this._hasTachieSemenRightLegExtension = true;
};
Game_Actor.prototype.resetTachieSemenRightLegExtension = function() { this._hasTachieSemenRightLegExtension = false; };

Game_Actor.prototype.setTachieSemenCrotchExtension = function(value) {
	this._tachieSemenCrotchExtension = value;
	this._hasTachieSemenCrotchExtension = true;
};
Game_Actor.prototype.resetTachieSemenCrotchExtension = function() { this._hasTachieSemenCrotchExtension = false; };

Game_Actor.prototype.setTachieSemenCrotchPantiesExtension = function(value) {
	this._tachieSemenCrotchPantiesExtension = value;
	this._hasTachieSemenCrotchPantiesExtension = true;
};
Game_Actor.prototype.resetTachieSemenCrotchPantiesExtension = function() { this._hasTachieSemenCrotchPantiesExtension = false; };



Game_Actor.prototype.setTachieSemenFaceExtension = function(value) {
	this._tachieSemenFaceExtension = value;
	this._hasTachieSemenFaceExtension = true;
};
Game_Actor.prototype.resetTachieSemenFaceExtension = function() { this._hasTachieSemenFaceExtension = false; };

Game_Actor.prototype.setTachieSemenMouthExtension = function(value) {
	this._tachieSemenMouthExtension = value;
	this._hasTachieSemenMouthExtension = true;
};
Game_Actor.prototype.resetTachieSemenMouthExtension = function() { this._hasTachieSemenMouthExtension = false; };


Game_Actor.prototype.setTachieSemenLeftArmExtension = function(value) {
	this._tachieSemenLeftArmExtension = value;
	this._hasTachieSemenLeftArmExtension = true;
};
Game_Actor.prototype.resetTachieSemenLeftArmExtension = function() { this._hasTachieSemenLeftArmExtension = false; };

Game_Actor.prototype.setTachieSemenCockLeftArmExtension = function(value) {
	this._tachieSemenCockLeftArmExtension = value;
	this._hasTachieSemenCockLeftArmExtension = true;
};
Game_Actor.prototype.resetTachieSemenCockLeftArmExtension = function() { this._hasTachieSemenCockLeftArmExtension = false; };

Game_Actor.prototype.setTachieSemenRightArmExtension = function(value) {
	this._tachieSemenRightArmExtension = value;
	this._hasTachieSemenRightArmExtension = true;
};
Game_Actor.prototype.resetTachieSemenRightArmExtension = function() { this._hasTachieSemenRightArmExtension = false; };

Game_Actor.prototype.setTachieSemenCockRightArmExtension = function(value) {
	this._tachieSemenCockRightArmExtension = value;
	this._hasTachieSemenCockRightArmExtension = true;
};
Game_Actor.prototype.resetTachieSemenCockRightArmExtension = function() { this._hasTachieSemenCockRightArmExtension = false; };

Game_Actor.prototype.setTachieSemenCockMouthExtension = function(value) {
	this._tachieSemenCockMouthExtension = value;
	this._hasTachieSemenCockMouthExtension = true;
};
Game_Actor.prototype.resetTachieSemenCockMouthExtension = function() { this._hasTachieSemenCockMouthExtension = false; };

Game_Actor.prototype.setTachieSemenCockPussyExtension = function(value) {
	this._tachieSemenCockPussyExtension = value;
	this._hasTachieSemenCockPussyExtension = true;
};
Game_Actor.prototype.resetTachieSemenCockPussyExtension = function() { this._hasTachieSemenCockPussyExtension = false; };

Game_Actor.prototype.setTachieSemenCockAnalExtension = function(value) {
	this._tachieSemenCockAnalExtension = value;
	this._hasTachieSemenCockAnalExtension = true;
};
Game_Actor.prototype.resetTachieSemenCockAnalExtension = function() { this._hasTachieSemenCockAnalExtension = false; };

Game_Actor.prototype.setTachieSemenCockFeetExtension = function(value) {
	this._tachieSemenCockFeetExtension = value;
	this._hasTachieSemenCockFeetExtension = true;
};
Game_Actor.prototype.resetTachieSemenCockFeetExtension = function() { this._hasTachieSemenCockFeetExtension = false; };

Game_Actor.prototype.setTachieSemenCockNormalExtension = function(value) {
	this._tachieSemenCockNormalExtension = value;
	this._hasTachieSemenCockNormalExtension = true;
};
Game_Actor.prototype.resetTachieSemenCockNormalExtension = function() { this._hasTachieSemenCockNormalExtension = false; };

Game_Actor.prototype.setTachieSemenHoleLeftExtension = function(value) {
	this._tachieSemenHoleLeftExtension = value;
	this._hasTachieSemenHoleLeftExtension = true;
};
Game_Actor.prototype.resetTachieSemenHoleLeftExtension = function() { this._hasTachieSemenHoleLeftExtension = false; };

Game_Actor.prototype.setTachieSemenHoleRightExtension = function(value) {
	this._tachieSemenHoleRightExtension = value;
	this._hasTachieSemenHoleRightExtension = true;
};
Game_Actor.prototype.resetTachieSemenHoleRightExtension = function() { this._hasTachieSemenHoleRightExtension = false; };

Game_Actor.prototype.setTachieSemenWetExtension = function(value) {
	this._tachieSemenWetExtension = value;
	this._hasTachieSemenWetExtension = true;
};
Game_Actor.prototype.resetTachieSemenWetExtension = function() { this._hasTachieSemenWetExtension = false; };

Game_Actor.prototype.setTachieSemenWetPantiesExtension = function(value) {
	this._tachieSemenWetPantiesExtension = value;
	this._hasTachieSemenWetPantiesExtension = true;
};
Game_Actor.prototype.resetTachieSemenWetPantiesExtension = function() { this._hasTachieSemenWetPantiesExtension = false; };

Game_Actor.prototype.setTachieSemenWetPussyToyExtension = function(value) {
	this._tachieSemenWetPussyToyExtension = value;
	this._hasTachieSemenWetPussyToyExtension = true;
};
Game_Actor.prototype.resetTachieSemenWetPussyToyExtension = function() { this._tachieSemenWetPussyToyExtension = false; };




Game_Actor.prototype.setTachieSemenToiletSeatExtension = function(value) {
	this._tachieSemenToiletSeatExtension = value;
	this._hasTachieSemenToiletSeatExtension = true;
};
Game_Actor.prototype.resetTachieSemenToiletSeatExtension = function() { this._hasTachieSemenToiletSeatExtension = false; };

Game_Actor.prototype.setTachieWetToiletSeatExtension = function(value) {
	this._tachieWetToiletSeatExtension = value;
	this._hasTachieWetToiletSeatExtension = true;
};
Game_Actor.prototype.resetTachieWetToiletSeatExtension = function() { this._hasTachieWetToiletSeatExtension = false; };

Game_Actor.prototype.setTachieSemenFrontAExtension = function(value) {
	this._tachieSemenFrontAExtension = value;
	this._hasTachieSemenFrontAExtension = true;
};
Game_Actor.prototype.resetTachieSemenFrontAExtension = function() { this._hasTachieSemenFrontAExtension = false; };

Game_Actor.prototype.setTachieSemenFrontBExtension = function(value) {
	this._tachieSemenFrontBExtension = value;
	this._hasTachieSemenFrontBExtension = true;
};
Game_Actor.prototype.resetTachieSemenFrontBExtension = function() { this._hasTachieSemenFrontBExtension = false; };

Game_Actor.prototype.setTachieSemenFrontCExtension = function(value) {
	this._tachieSemenFrontCExtension = value;
	this._hasTachieSemenFrontCExtension = true;
};
Game_Actor.prototype.resetTachieSemenFrontCExtension = function() { this._hasTachieSemenFrontCExtension = false; };

Game_Actor.prototype.setTachieSemenFrontDExtension = function(value) {
	this._tachieSemenFrontDExtension = value;
	this._hasTachieSemenFrontDExtension = true;
};
Game_Actor.prototype.resetTachieSemenFrontDExtension = function() { this._hasTachieSemenFrontDExtension = false; };

Game_Actor.prototype.setTachieSemenFrontEExtension = function(value) {
	this._tachieSemenFrontEExtension = value;
	this._hasTachieSemenFrontEExtension = true;
};
Game_Actor.prototype.resetTachieSemenFrontEExtension = function() { this._hasTachieSemenFrontEExtension = false; };

///////////
// Semen
////////////

Game_Actor.prototype.setupLiquids = function() {
	/*
	this._liquidPussyJuice = 0;
	this._liquidSwallow = 0;
	this._liquidCreampiePussy = 0;
	this._liquidCreampieAnal = 0;
	this._liquidBukkakeFace = 0;
	this._liquidBukkakeBoobs = 0;
	this._liquidBukkakeLeftBoob = 0;
	this._liquidBukkakeRightBoob = 0;
	this._liquidBukkakeButt = 0;
	this._liquidBukkakeButtTopRight = 0;
	this._liquidBukkakeButtTopLeft = 0;
	this._liquidBukkakeButtBottomRight = 0;
	this._liquidBukkakeButtBottomLeft = 0;
	this._liquidBukkakeButtRight = 0;
	this._liquidBukkakeButtLeft = 0;
	this._liquidBukkakeLeftArm = 0;
	this._liquidBukkakeRightArm = 0;
	this._liquidBukkakeLeftLeg = 0;
	this._liquidBukkakeRightLeg = 0;
	this._liquidDroolMouth = 0;
	this._liquidDroolFingers = 0;
	this._liquidDroolNipples = 0;
	*/
	
	for (const liquidId of Object.values(BodyLiquidId)) {
		this.getBodyLiquid(liquidId).reset();
	}
	
	this._liquidOnFloor = 0;

	//Receptionist
	this._liquidOnDesk = 0;

	//Glory
	this._liquidCumOnToiletSeat = 0;
	this._liquidJuiceOnToiletSeat = 0;
	this._liquidGloryCumOnLeftWall = [0, 0, 0, 0, 0 , 0, 0, 0, 0];
	this._liquidGloryCumOnLeftHole = [0, 0];
	this._liquidGloryCumOnLeftToilet = [0, 0];
	this._liquidGloryCumOnRightWall = [0, 0, 0, 0, 0 , 0, 0, 0, 0];
	this._liquidGloryCumOnRightHole = [0, 0];
	this._liquidGloryCumOnRightToilet = [0, 0, 0, 0];

	//Minimum
	/*
	this._minimumLiquidBukkakeFace = 0;
	this._minimumLiquidBukkakeBoobs = 0;
	this._minimumLiquidBukkakeButt = 0;
	this._minimumLiquidBukkakeLeftArm = 0;
	this._minimumLiquidBukkakeRightArm = 0;
	this._minimumLiquidBukkakeLeftLeg = 0;
	this._minimumLiquidBukkakeRightLeg = 0;
	this._minimumLiquidCreampiePussy = 0;
	this._minimumLiquidCreampieAnal = 0;
	*/
	this.setCacheChanged();
};

Game_Actor.prototype.resetLiquidsExceptPussyJuice = function() {
	const pussyJuice = this.getBodyLiquid(BodyLiquidId.PUSSY_JUICE);
	const pussyJuiceAmount = pussyJuice.amount;
	this.setupLiquids();
	pussyJuice.amount = pussyJuiceAmount;
	this.setCacheChanged();
};

Game_Actor.prototype.cleanUpLiquidsBeforeSideJob = function() {
	if(!this.hasPassive(PASSIVE_BUKKAKE_ORGASM_ONE_ID)) {
		this.setupLiquids();
	}
	else {
		this.cleanUpLiquids();
	}
};

//Clean Up Liquids
Game_Actor.prototype.cleanUpLiquids = function() {
	/*
	if(this.hasPassive(PASSIVE_FACE_BUKKAKE_COUNT_TWO_ID)) {
		let multiValue = 0.75;
		let flatMinusValue = 0.15;

		this._minimumLiquidBukkakeFace = Math.round(Math.max(this._liquidBukkakeFace * ((Math.random() * multiValue) - flatMinusValue), this._minimumLiquidBukkakeFace));
		this._liquidBukkakeFace = Math.min(this._liquidBukkakeFace, this._minimumLiquidBukkakeFace);
	}
	else {
		this._liquidBukkakeFace = 0;
		this._minimumLiquidBukkakeFace = 0;
	}

	if(this.hasPassive(PASSIVE_BUKKAKE_COUNT_THREE_ID)) {
		let multiValue = 0.5;
		let flatMinusValue = 0.3;

		if(this.hasPassive(PASSIVE_BUKKAKE_COUNT_FIVE_ID)) {
			multiValue = 0.9;
			flatMinusValue = 0.2;
		}
		else if(this.hasPassive(PASSIVE_BUKKAKE_COUNT_FOUR_ID)) {
			multiValue = 0.75;
			flatMinusValue = 0.25;
		}

		this._liquidBukkakeBoobs += this._liquidBukkakeLeftBoob + this._liquidBukkakeRightBoob;
		this._minimumLiquidBukkakeBoobs = Math.round(Math.max(this._liquidBukkakeBoobs * ((Math.random() * multiValue) - flatMinusValue), this._minimumLiquidBukkakeBoobs));
		this._liquidBukkakeBoobs = Math.min(this._liquidBukkakeBoobs, this._minimumLiquidBukkakeBoobs);

		this._liquidBukkakeButt += this._liquidBukkakeButtTopRight + this._liquidBukkakeButtTopLeft + this._liquidBukkakeButtBottomRight + this._liquidBukkakeButtBottomLeft + this._liquidBukkakeButtRight + this._liquidBukkakeButtLeft;
		this._minimumLiquidBukkakeButt = Math.round(Math.max(this._liquidBukkakeButt * ((Math.random() * multiValue) - flatMinusValue), this._minimumLiquidBukkakeButt));
		this._liquidBukkakeButt = Math.min(this._liquidBukkakeButt, this._minimumLiquidBukkakeButt);

		this._minimumLiquidBukkakeLeftArm = Math.round(Math.max(this._liquidBukkakeLeftArm * ((Math.random() * multiValue) - flatMinusValue), this._minimumLiquidBukkakeLeftArm));
		this._liquidBukkakeLeftArm = Math.min(this._liquidBukkakeLeftArm, this._minimumLiquidBukkakeLeftArm);

		this._minimumLiquidBukkakeRightArm = Math.round(Math.max(this._liquidBukkakeRightArm * ((Math.random() * multiValue) - flatMinusValue), this._minimumLiquidBukkakeRightArm));
		this._liquidBukkakeRightArm = Math.min(this._liquidBukkakeRightArm, this._minimumLiquidBukkakeRightArm);

		this._minimumLiquidBukkakeLeftLeg = Math.round(Math.max(this._liquidBukkakeLeftLeg * ((Math.random() * multiValue) - flatMinusValue), this._minimumLiquidBukkakeLeftLeg));
		this._liquidBukkakeLeftLeg = Math.min(this._liquidBukkakeLeftLeg, this._minimumLiquidBukkakeLeftLeg);

		this._minimumLiquidBukkakeRightLeg = Math.round(Math.max(this._liquidBukkakeRightLeg * ((Math.random() * multiValue) - flatMinusValue), this._minimumLiquidBukkakeRightLeg));
		this._liquidBukkakeRightLeg = Math.min(this._liquidBukkakeRightLeg, this._minimumLiquidBukkakeRightLeg);
	}
	else {
		this._liquidBukkakeBoobs = 0;
		this._liquidBukkakeButt = 0;
		this._liquidBukkakeLeftArm = 0;
		this._liquidBukkakeRightArm = 0;
		this._liquidBukkakeLeftLeg = 0;
		this._liquidBukkakeRightLeg = 0;
		this._minimumLiquidBukkakeBoobs = 0;
		this._minimumLiquidBukkakeButt = 0;
		this._minimumLiquidBukkakeLeftArm = 0;
		this._minimumLiquidBukkakeRightArm = 0;
		this._minimumLiquidBukkakeLeftLeg = 0;
		this._minimumLiquidBukkakeRightLeg = 0;
	}

	if(this.hasPassive(PASSIVE_PUSSY_CREAMPIE_ML_THREE_ID)) {
		let multiValue = 0.5;
		let flatMinusValue = 0.25;

		if(this.hasPassive(PASSIVE_PUSSY_CREAMPIE_ML_FIVE_ID)) {
			multiValue = 0.7;
			flatMinusValue = 0.1;
		}

		this._minimumLiquidCreampiePussy = Math.round(Math.max(this._liquidCreampiePussy * ((Math.random() * multiValue) - flatMinusValue), this._minimumLiquidCreampiePussy));
		this._liquidCreampiePussy = Math.min(this._liquidCreampiePussy, this._minimumLiquidCreampiePussy);
	}
	else {
		this._liquidCreampiePussy = 0;
		this._minimumLiquidCreampiePussy = 0;
	}

	if(this.hasPassive(PASSIVE_ANAL_CREAMPIE_ML_THREE_ID)) {
		let multiValue = 0.5;
		let flatMinusValue = 0.25;

		if(this.hasPassive(PASSIVE_ANAL_CREAMPIE_ML_FIVE_ID)) {
			multiValue = 0.7;
			flatMinusValue = 0.1;
		}

		this._minimumLiquidCreampieAnal = Math.round(Math.max(this._liquidCreampieAnal * ((Math.random() * multiValue) - flatMinusValue), this._minimumLiquidCreampieAnal));
		this._liquidCreampieAnal = Math.min(this._liquidCreampieAnal, this._minimumLiquidCreampieAnal);
	}
	else {
		this._liquidCreampieAnal = 0;
		this._minimumLiquidCreampieAnal = 0;
	}
	*/
	
	this.cleanUpBodyLiquids();

	/////////
	//Always
	/*
	this._liquidPussyJuice = 0;
	this._liquidSwallow = 0;
	this._liquidBukkakeLeftBoob = 0;
	this._liquidBukkakeRightBoob = 0;
	this._liquidBukkakeButtTopRight = 0;
	this._liquidBukkakeButtTopLeft = 0;
	this._liquidBukkakeButtBottomRight = 0;
	this._liquidBukkakeButtBottomLeft = 0;
	this._liquidBukkakeButtRight = 0;
	this._liquidBukkakeButtLeft = 0;
	this._liquidDroolMouth = 0;
	this._liquidDroolFingers = 0;
	this._liquidDroolNipples = 0;
	*/
	this._liquidOnFloor = 0;

	//Receptionist
	this._liquidOnDesk = 0;

	//Glory
	this._liquidCumOnToiletSeat = 0;
	this._liquidJuiceOnToiletSeat = 0;
	this._liquidGloryCumOnLeftWall = [0, 0, 0, 0, 0 , 0, 0, 0, 0];
	this._liquidGloryCumOnLeftHole = [0, 0];
	this._liquidGloryCumOnLeftToilet = [0, 0];
	this._liquidGloryCumOnRightWall = [0, 0, 0, 0, 0 , 0, 0, 0, 0];
	this._liquidGloryCumOnRightHole = [0, 0];
	this._liquidGloryCumOnRightToilet = [0, 0, 0, 0];

	//Stripper
	this._stripper_stageCondomCount = 0;
	this._stripper_beltCondomCount = 0;
	this._stripper_buttCondomCount = 0;
	this._stripper_braCondomCount = 0;
	this._stripper_nipplesCondomCount = 0;
	this._stripper_headCondomCount = 0;
	this._stripper_wornCondomTotalCount = 0;

	this.setCacheChanged();
};


Game_Actor.prototype.increaseLiquidPussyJuice = function(liquid) {
	this.getBodyLiquid(BodyLiquidId.PUSSY_JUICE).addLiquid(liquid);
	/*
	let previouslyIsWet = this.isWet;
	this._liquidPussyJuice += liquid;
	if(!previouslyIsWet && this.isWet) {
		this.refresh();
	}
	*/
};

Game_Actor.prototype.increaseLiquidDroolMouth = function(liquid) {
	this.getBodyLiquid(BodyLiquidId.MOUTH_DROOL).addLiquid(liquid);
};
Game_Actor.prototype.increaseLiquidDroolFingers = function(liquid) {
	this.getBodyLiquid(BodyLiquidId.FINGERS_DROOL).addLiquid(liquid);
};
Game_Actor.prototype.increaseLiquidDroolNipples = function(liquid) {
	this.getBodyLiquid(BodyLiquidId.NIPPLES_DROOL).addLiquid(liquid);
};

Game_Actor.prototype.increaseLiquidSwallow = function(semen) {
	this.getBodyLiquid(BodyLiquidId.MOUTH_SEMEN).addLiquid(semen);
};
Game_Actor.prototype.increaseLiquidCreampiePussy = function(semen) {
	this.getBodyLiquid(BodyLiquidId.PUSSY_SEMEN).addLiquid(semen);
};
Game_Actor.prototype.increaseLiquidCreampieAnal = function(semen) {
	this.getBodyLiquid(BodyLiquidId.ANAL_SEMEN).addLiquid(semen);
};
Game_Actor.prototype.increaseLiquidBukkakeFace = function(semen) {
	this.getBodyLiquid(BodyLiquidId.FACE_SEMEN).addLiquid(semen);
};

Game_Actor.prototype.increaseLiquidBukkakeLeftBoob = function(semen) {
	this.getBodyLiquid(BodyLiquidId.BOOB_LEFT_SEMEN).addLiquid(semen);
};
Game_Actor.prototype.increaseLiquidBukkakeRightBoob = function(semen) {
	this.getBodyLiquid(BodyLiquidId.BOOB_RIGHT_SEMEN).addLiquid(semen);
};

Game_Actor.prototype.increaseLiquidBukkakeButtTopRight = function(semen) {
	this.getBodyLiquid(BodyLiquidId.BUTT_TOP_RIGHT_SEMEN).addLiquid(semen);
};
Game_Actor.prototype.increaseLiquidBukkakeButtTopLeft = function(semen) {
	this.getBodyLiquid(BodyLiquidId.BUTT_TOP_LEFT_SEMEN).addLiquid(semen);
};
Game_Actor.prototype.increaseLiquidBukkakeButtBottomRight = function(semen) {
	this.getBodyLiquid(BodyLiquidId.BUTT_BOTTOM_RIGHT_SEMEN).addLiquid(semen);
};
Game_Actor.prototype.increaseLiquidBukkakeButtBottomLeft = function(semen) {
	this.getBodyLiquid(BodyLiquidId.BUTT_BOTTOM_LEFT_SEMEN).addLiquid(semen);
};

Game_Actor.prototype.increaseLiquidBukkakeRightArm = function(semen) {
	this.getBodyLiquid(BodyLiquidId.ARM_RIGHT_SEMEN).addLiquid(semen);
};
Game_Actor.prototype.increaseLiquidBukkakeLeftArm = function(semen) {
	this.getBodyLiquid(BodyLiquidId.ARM_LEFT_SEMEN).addLiquid(semen);
};

Game_Actor.prototype.increaseLiquidBukkakeRightLeg = function(semen) {
	this.getBodyLiquid(BodyLiquidId.LEG_RIGHT_SEMEN).addLiquid(semen);
};
Game_Actor.prototype.increaseLiquidBukkakeLeftLeg = function(semen) {
	this.getBodyLiquid(BodyLiquidId.LEG_LEFT_SEMEN).addLiquid(semen);
};

Game_Actor.prototype.increaseLiquidOnDesk = function(semen) {
	this._liquidOnDesk += semen;
};

Game_Actor.prototype.increaseLiquidOnFloor = function(semen) {
	this._liquidOnFloor += semen;
	$gameParty.remAch_poorJanitor(this._liquidOnFloor);
};

Game_Actor.prototype.increaseLiquidCumOnToiletSeat = function(semen) {
	this._liquidCumOnToiletSeat += semen;
};
Game_Actor.prototype.increaseLiquidJuiceOnToiletSeat = function(semen) {
	this._liquidJuiceOnToiletSeat += semen;
};
Game_Actor.prototype.increaseGloryCumOnLeftWall = function(semen, index) {
	this._liquidGloryCumOnLeftWall[index] += semen;
};
Game_Actor.prototype.increaseGloryCumOnLeftHole = function(semen, index) {
	this._liquidGloryCumOnLeftHole[index] += semen;
};
Game_Actor.prototype.increaseGloryCumOnLeftToilet = function(semen, index) {
	this._liquidGloryCumOnLeftToilet[index] += semen;
};
Game_Actor.prototype.increaseGloryCumOnRightWall = function(semen, index) {
	this._liquidGloryCumOnRightWall[index] += semen;
};
Game_Actor.prototype.increaseGloryCumOnRightHole = function(semen, index) {
	this._liquidGloryCumOnRightHole[index] += semen;
};
Game_Actor.prototype.increaseGloryCumOnRightToilet = function(semen, index) {
	this._liquidGloryCumOnRightToilet[index] += semen;
};

Game_Actor.prototype.getCurrentBukkakeTotal = function() {
	return Object.values(BodyLiquidId)
		.map((id) => this.getBodyLiquid(id))
		.filter((liquid) => liquid.isBukkake)
		.reduce((sum, liquid) => sum += liquid.amount, 0);
	
	/*
	let total = this._liquidBukkakeFace + this._liquidBukkakeBoobs + this._liquidBukkakeLeftBoob + this._liquidBukkakeRightBoob + this._liquidBukkakeLeftArm + this._liquidBukkakeRightArm + this._liquidBukkakeLeftLeg + this._liquidBukkakeRightLeg + this._liquidBukkakeButt;

	if(this.isInDefeatedLevel2Pose()) {
		total += this._liquidBukkakeButtTopRight + this._liquidBukkakeButtTopLeft + this._liquidBukkakeButtBottomRight + this._liquidBukkakeButtBottomLeft;
	}
	else if(this.isInDefeatedLevel4Pose()) {
		total += this._liquidBukkakeButtRight + this._liquidBukkakeButtLeft;
	}


	return total;
	*/
};

//unused
Game_Actor.prototype.splitLiquidBukkakeBoobsToRightAndLeft = function() {
	let liquid = this._liquidBukkakeBoobs;
	let rightLiquid = Math.randomInt(liquid);
	let leftLiquid = liquid - rightLiquid;

	this._liquidBukkakeBoobs = 0;
	this._liquidBukkakeRightBoob += rightLiquid;
	this._liquidBukkakeLeftBoob += leftLiquid;
};

//unused
Game_Actor.prototype.splitLiquidBukkakeButtToQuarters = function() {
	let liquid = this._liquidBukkakeButt;
	let rightLiquid = Math.randomInt(liquid);
	let leftLiquid = liquid - rightLiquid;

	this._liquidBukkakeButt = 0;
	if(Math.random() < 0.69) {
		this._liquidBukkakeButtTopRight += rightLiquid;
	}
	else {
		this._liquidBukkakeButtBottomRight += rightLiquid;
	}
	if(Math.random() < 0.69) {
		this._liquidBukkakeButtTopLeft += leftLiquid;
	}
	else {
		this._liquidBukkakeButtBottomLeft += leftLiquid;
	}
	

};



///////////
// Pussy Juice
///////////////

Game_Actor.prototype.setUpPussyJuice = function() {
	if(!DEBUG_MODE) return;
	if(this.reachedOrgasmPoint()) {
		this.increaseLiquidPussyJuice(this.passivePussyJuiceDrip() * 3);
	}
	else if(this.isAroused()) {
		this.increaseLiquidPussyJuice(this.passivePussyJuiceDrip());
	}
};

Game_Actor.prototype.regenPussyJuice = function() {
	if(DEBUG_MODE) {
		let drip = this.passivePussyJuiceDrip();
		if(!this.isWet && this.isHorny) drip *= 2;
		drip = Math.max(0, drip);
		this.increaseLiquidPussyJuice(drip);
		this.addToActorPussyDripRecord(drip);

		if((this.isInToiletSittingPose() || this.isInToiletSitLeftPose() || this.isInToiletSitRightPose()) && this.isWet && drip > 0) {
			this.increaseLiquidJuiceOnToiletSeat(Math.round(Math.random() * 0.33 * drip));
		}
	}
};


Game_Actor.prototype.cleanBlowjobCockSemenLiquid = function(target) {
	if(!target) return;
	if(!target._enemyTempRecordTotalEjaculationCount) return;
	if(!this.hasPassive(PASSIVE_SWALLOW_ML_ONE_ID)) return;

	let cleanValue = 0;

	cleanValue += this.reactionScore_blowjobPassive() * 0.002;
	cleanValue += this.reactionScore_swallowPassive() * 0.002;

	if(this.hasPassive(PASSIVE_SWALLOW_ML_FOUR_ID)) cleanValue += Math.random() * 0.69;
	else if(this.hasPassive(PASSIVE_SWALLOW_ML_THREE_ID)) cleanValue += Math.random() * 0.42;
	else if(this.hasPassive(PASSIVE_SWALLOW_ML_TWO_ID)) cleanValue += Math.random() * 0.2;

	if(this.hasPassive(PASSIVE_BJ_USAGE_THREE_ID)) cleanValue += Math.random() * 0.42;
	else if(this.hasPassive(PASSIVE_BJ_USAGE_TWO_ID)) cleanValue += Math.random() * 0.2;
	else if(this.hasPassive(PASSIVE_BJ_USAGE_ONE_ID)) cleanValue += Math.random() * 0.1;

	if(this.hasPassive(PASSIVE_BJ_PEOPLE_FOUR_ID)) cleanValue += Math.random() * 0.3;
	else if(this.hasPassive(PASSIVE_BJ_PEOPLE_THREE_ID)) cleanValue += Math.random() * 0.2;
	else if(this.hasPassive(PASSIVE_BJ_PEOPLE_TWO_ID)) cleanValue += Math.random() * 0.1;

	target._enemyTempRecordBlowjobCleanedCount = Math.min(target._enemyTempRecordBlowjobCleanedCount + cleanValue, target._enemyTempRecordTotalEjaculationCount);
};


//P Cup Specific

Game_Actor.prototype.setTachieSemenBoobsHasPCupExtensionBasedOnClothingStage = function(value) {
	this._hasTachieSemenBoobsPCupExtensionBasedOnClothingStage = value;
};
Game_Actor.prototype.resetTachieSemenBoobsHasPCupExtensionBasedOnClothingStage = function(value) { this.setTachieSemenBoobsHasPCupExtensionBasedOnClothingStage(false); };
