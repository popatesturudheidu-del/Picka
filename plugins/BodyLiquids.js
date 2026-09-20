/**
 * @typedef {{passiveId: number, multiplier: number, flatReduction: number}} CleanUpPassivePenalty
 */

class BodyLiquid {
    /**
     * @protected
     * @type {BodyLiquidId}
     * Body liquid id
     */
    id;

    /**
     * @protected
     * @type {Game_Actor}
     *
     */
    actor;

    /**
     * @readonly
     * @type {CleanUpPassivePenalty[]}
     */
    cleanUpPenalties;

    /** @type {boolean} */
    #isBukkake;

    /**
     * @param {BodyLiquidId} id
     * @param {Game_Actor} actor
     * @param {boolean} isBukkake
     * @param {CleanUpPassivePenalty[]} cleanUpPenalties
     */
    constructor(
        id,
        actor,
        isBukkake,
        cleanUpPenalties = []
    ) {
        if (!id) {
            throw new Error(`Invalid id '${id}'`);
        }
        if (!actor) {
            throw new Error('Battler is required');
        }
        if (!Array.isArray(cleanUpPenalties)) {
            throw new Error('Clean up penalties is invalid');
        }

        this.id = id;
        this.actor = actor;
        this.cleanUpPenalties = cleanUpPenalties;
        this.#isBukkake = Boolean(isBukkake);
    }

    get isBukkake() {
        return this.#isBukkake;
    }

    /** @returns {number} */
    get amount() {
        return this.actor[this.amountPropertyName] ?? 0;
    }

    /**
     * @param {number} amount
     */
    set amount(amount) {
        if (Number.isNaN(amount)) {
            throw new Error('Invalid current liquid amount');
        }
        this.actor[this.amountPropertyName] = Math.max(0, amount);
    }

    /**
     * @protected
     * @returns {number}
     */
    get minimumAmount() {
        return this.actor[this.minimumAmountPropertyName] ?? 0;
    }

    /**
     * @private
     * @param {number} amount
     */
    set minimumAmount(amount) {
        if (Number.isNaN(amount)) {
            throw new Error('Invalid minimum liquid amount');
        }
        this.actor[this.minimumAmountPropertyName] = Math.max(0, amount);
    }

    /** @protected */
    get amountPropertyName() {
        return '_liquid' + this.id;
    }

    /** @protected */
    get minimumAmountPropertyName() {
        return '_minimumLiquid' + this.id;
    }

    /**
     * Adds liquid.
     * @param {number} amount
     */
    addLiquid(amount) {
        this.amount += amount;
    }

    reset() {
        this.amount = 0;
        this.minimumAmount = 0;
    }

    cleanUp() {
        let multiplier = 0;
        let flatReduction = 0;

        for (const penalty of this.cleanUpPenalties) {
            if (this.actor.hasPassive(penalty.passiveId)) {
                multiplier += penalty.multiplier;
                flatReduction += penalty.flatReduction;
            }
        }

        this.minimumAmount = Math.round(
            Math.max(
                this.amount * ((Math.random() * multiplier) - flatReduction),
                this.minimumAmount
            )
        );
        this.amount = Math.min(this.amount, this.minimumAmount);
    }
}

class PussyJuiceLiquid extends BodyLiquid {
    addLiquid(amount) {
        const isPreviouslyWet = this.actor.isWet;
        super.addLiquid(amount);
        if (!isPreviouslyWet && this.actor.isWet) {
            this.actor.refresh();
        }
        super.addLiquid(amount);
    }
}

/**
 * @enum {string}
 * @readonly
 */
const BodyLiquidId = {
    FACE_SEMEN: 'BukkakeFace',
    // Boobs group
    BOOB_LEFT_SEMEN: 'BukkakeLeftBoob',
    BOOB_RIGHT_SEMEN: 'BukkakeRightBoob',
    BELLY_SEMEN: 'BukkakeBelly',
    // Butt group
    BUTT_TOP_LEFT_SEMEN: 'BukkakeButtTopLeft',
    BUTT_TOP_RIGHT_SEMEN: 'BukkakeButtTopRight',
    BUTT_BOTTOM_LEFT_SEMEN: 'BukkakeButtBottomLeft',
    BUTT_BOTTOM_RIGHT_SEMEN: 'BukkakeButtBottomRight',
    BACK_SEMEN: 'BukkakeBack',

    ARM_LEFT_SEMEN: 'BukkakeLeftArm',
    ARM_RIGHT_SEMEN: 'BukkakeRightArm',
    LEG_LEFT_SEMEN: 'BukkakeLeftLeg',
    LEG_RIGHT_SEMEN: 'BukkakeRightLeg',

    ANAL_SEMEN: 'CreampieAnal',
    PUSSY_SEMEN: 'CreampiePussy',
    MOUTH_SEMEN: 'Swallow',

    PUSSY_JUICE: 'PussyJuice',

    MOUTH_DROOL: 'DroolMouth',
    FINGERS_DROOL: 'DroolFingers',
    NIPPLES_DROOL: 'DroolNipples',
};

(() => {
    function createLiquidsCleanUpPenalties() {
        /**
         * @readonly
         * @type {{[passiveId: number]: Omit<CleanUpPassivePenalty, 'passiveId'>}}
         */
        const passivesCleanupPenalties = {
            [PASSIVE_FACE_BUKKAKE_COUNT_TWO_ID]: {multiplier: 0.75, flatReduction: 0.15},

            [PASSIVE_BUKKAKE_COUNT_FIVE_ID]: {multiplier: 0.15, flatReduction: -0.05},
            [PASSIVE_BUKKAKE_COUNT_FOUR_ID]: {multiplier: 0.15, flatReduction: -0.05},
            [PASSIVE_BUKKAKE_COUNT_THREE_ID]: {multiplier: 0.5, flatReduction: 0.3},

            [PASSIVE_PUSSY_CREAMPIE_ML_FIVE_ID]: {multiplier: 0.2, flatReduction: -0.15},
            [PASSIVE_PUSSY_CREAMPIE_ML_THREE_ID]: {multiplier: 0.5, flatReduction: 0.25},

            [PASSIVE_ANAL_CREAMPIE_ML_THREE_ID]: {multiplier: 0.2, flatReduction: -0.15},
            [PASSIVE_ANAL_CREAMPIE_ML_FIVE_ID]: {multiplier: 0.5, flatReduction: 0.3},
        }

        const bukkakePassives = [
            PASSIVE_BUKKAKE_COUNT_THREE_ID,
            PASSIVE_BUKKAKE_COUNT_FOUR_ID,
            PASSIVE_BUKKAKE_COUNT_FIVE_ID
        ];

        /**
         * @type {{[id: BodyLiquidId]: (keyof typeof passivesCleanupPenalties)[]}}
         */
        const liquidsToPassivesMappings = {
            [BodyLiquidId.FACE_SEMEN]: [PASSIVE_FACE_BUKKAKE_COUNT_TWO_ID],
            [BodyLiquidId.PUSSY_SEMEN]: [PASSIVE_PUSSY_CREAMPIE_ML_THREE_ID, PASSIVE_PUSSY_CREAMPIE_ML_FIVE_ID],
            [BodyLiquidId.ANAL_SEMEN]: [PASSIVE_ANAL_CREAMPIE_ML_THREE_ID, PASSIVE_ANAL_CREAMPIE_ML_FIVE_ID],
            [BodyLiquidId.BOOB_LEFT_SEMEN]: bukkakePassives,
            [BodyLiquidId.BOOB_RIGHT_SEMEN]: bukkakePassives,
			[BodyLiquidId.BELLY_SEMEN]: bukkakePassives,
            [BodyLiquidId.BUTT_TOP_LEFT_SEMEN]: bukkakePassives,
            [BodyLiquidId.BUTT_TOP_RIGHT_SEMEN]: bukkakePassives,
            [BodyLiquidId.BUTT_BOTTOM_LEFT_SEMEN]: bukkakePassives,
            [BodyLiquidId.BUTT_BOTTOM_RIGHT_SEMEN]: bukkakePassives,
            [BodyLiquidId.ARM_LEFT_SEMEN]: bukkakePassives,
            [BodyLiquidId.ARM_RIGHT_SEMEN]: bukkakePassives,
            [BodyLiquidId.LEG_LEFT_SEMEN]: bukkakePassives,
            [BodyLiquidId.LEG_RIGHT_SEMEN]: bukkakePassives,
        };

        const liquidCleanUpPenalties = {};
        for (const liquidId of Object.values(BodyLiquidId)) {
            /** @type {(keyof typeof passivesCleanupPenalties)[]} */
            const liquidPassives = liquidsToPassivesMappings[liquidId] ?? [];
            /** @type {CleanUpPassivePenalty[]} */
            const cleanUpPenalties = [];
            for (const passiveId of liquidPassives) {
                if (passiveId in passivesCleanupPenalties) {
                    cleanUpPenalties.push({passiveId, ...passivesCleanupPenalties[passiveId]});
                }
            }
            liquidCleanUpPenalties[liquidId] = cleanUpPenalties;
        }

        return liquidCleanUpPenalties;
    }

    /**
     * @param {number} amount - amount to increase by
     * @param {Array<(semenAmount: number) => void>} increasePartHandlers - handlers to increase parts to select from
     */
    function increaseRandomPart(increasePartHandlers, amount) {
        const increasePart = increasePartHandlers[Math.randomInt(increasePartHandlers.length)];
        increasePart(amount);
    }

    function restoreLiquidsBackwardCompatibility() {
        for (const liquidId of Object.values(BodyLiquidId)) {
            /** @deprecated Use actor.getBodyLiquid(BodyLiquidId).addLiquid method instead */
            Game_Actor.prototype['increaseLiquid' + liquidId] = function (amount) {
                this.getBodyLiquid(liquidId).addLiquid(amount);
            }
        }

        Game_Actor.prototype.increaseLiquidBukkakeBoobs = function (semen) {
            const bellySemen = (semen * Math.random()) >> 1;
            const boobsSemen = semen - bellySemen;
            increaseRandomPart(
                [
                    (semen) => this.getBodyLiquid(BodyLiquidId.BOOB_RIGHT_SEMEN).addLiquid(semen),
                    (semen) => this.getBodyLiquid(BodyLiquidId.BOOB_LEFT_SEMEN).addLiquid(semen),
                ],
                boobsSemen
            );
            this.getBodyLiquid(BodyLiquidId.BELLY_SEMEN).addLiquid(bellySemen);
        };

        Game_Actor.prototype.increaseLiquidBukkakeButt = function (semen) {
            const backSemen = (semen * Math.random()) >> 1;
            const boobsSemen = semen - backSemen;
            increaseRandomPart(
                [
                    this.increaseLiquidBukkakeButtLeft.bind(this),
                    this.increaseLiquidBukkakeButtRight.bind(this),
                ],
                boobsSemen
            );
            this.getBodyLiquid(BodyLiquidId.BACK_SEMEN).addLiquid(backSemen);
        };

        Game_Actor.prototype.increaseLiquidBukkakeButtRight = function (semen) {
            increaseRandomPart(
                [
                    (semen) => this.getBodyLiquid(BodyLiquidId.BUTT_TOP_RIGHT_SEMEN).addLiquid(semen),
                    (semen) => this.getBodyLiquid(BodyLiquidId.BUTT_BOTTOM_RIGHT_SEMEN).addLiquid(semen),
                ],
                semen
            );
        };

        Game_Actor.prototype.increaseLiquidBukkakeButtLeft = function (semen) {
            increaseRandomPart(
                [
                    (semen) => this.getBodyLiquid(BodyLiquidId.BUTT_TOP_LEFT_SEMEN).addLiquid(semen),
                    (semen) => this.getBodyLiquid(BodyLiquidId.BUTT_BOTTOM_LEFT_SEMEN).addLiquid(semen),
                ],
                semen
            )
        };

        Object.defineProperties(Game_Actor.prototype, {
            _liquidBukkakeBoobs: {
                get: function () {
                    return this.getBodyLiquid(BodyLiquidId.BOOB_RIGHT_SEMEN).amount +
                        this.getBodyLiquid(BodyLiquidId.BOOB_LEFT_SEMEN).amount +
                        this.getBodyLiquid(BodyLiquidId.BELLY_SEMEN).amount;
                },
                /** @deprecated Use exact body part instead */
                set: function (amount) {
                    const partAmount = Math.floor(amount / 3);
                    this.getBodyLiquid(BodyLiquidId.BOOB_RIGHT_SEMEN).amount = partAmount;
                    this.getBodyLiquid(BodyLiquidId.BOOB_LEFT_SEMEN).amount = partAmount;
                    this.getBodyLiquid(BodyLiquidId.BELLY_SEMEN).amount = amount - partAmount - partAmount;
                }
            },
            _liquidBukkakeButt: {
                get: function () {
                    return this._liquidBukkakeButtLeft +
                        this._liquidBukkakeButtRight +
                        this.getBodyLiquid(BodyLiquidId.BACK_SEMEN).amount;
                },
                /** @deprecated Use exact body part instead */
                set: function (amount) {
                    const partAmount = Math.floor(amount / 3);
                    this._liquidBukkakeButtLeft = partAmount;
                    this._liquidBukkakeButtRight = partAmount;
                    this.getBodyLiquid(BodyLiquidId.BACK_SEMEN).amount = amount - partAmount - partAmount;
                }
            },
            _liquidBukkakeButtRight: {
                get: function () {
                    return this.getBodyLiquid(BodyLiquidId.BUTT_TOP_RIGHT_SEMEN).amount +
                        this.getBodyLiquid(BodyLiquidId.BUTT_BOTTOM_RIGHT_SEMEN).amount;
                },
                /** @deprecated Use exact body part instead */
                set: function (amount) {
                    const partAmount = amount >> 1;
                    this.getBodyLiquid(BodyLiquidId.BUTT_TOP_RIGHT_SEMEN).amount = partAmount;
                    this.getBodyLiquid(BodyLiquidId.BUTT_BOTTOM_RIGHT_SEMEN).amount = amount - partAmount;
                }
            },
            _liquidBukkakeButtLeft: {
                get: function () {
                    return this.getBodyLiquid(BodyLiquidId.BUTT_TOP_LEFT_SEMEN).amount +
                        this.getBodyLiquid(BodyLiquidId.BUTT_BOTTOM_LEFT_SEMEN).amount;
                },
                /** @deprecated Use exact body part instead */
                set: function (amount) {
                    const partAmount = amount >> 1;
                    this.getBodyLiquid(BodyLiquidId.BUTT_TOP_LEFT_SEMEN).amount = partAmount;
                    this.getBodyLiquid(BodyLiquidId.BUTT_BOTTOM_LEFT_SEMEN).amount = amount - partAmount;
                }
            },
        });
    }

    restoreLiquidsBackwardCompatibility();

    /** @type {Set<BodyLiquidId>} */
    const bukkakeLiquidIds = new Set([
        BodyLiquidId.FACE_SEMEN,
        BodyLiquidId.BOOB_LEFT_SEMEN,
        BodyLiquidId.BOOB_RIGHT_SEMEN,
        BodyLiquidId.BELLY_SEMEN,
        BodyLiquidId.BUTT_TOP_LEFT_SEMEN,
        BodyLiquidId.BUTT_TOP_RIGHT_SEMEN,
        BodyLiquidId.BUTT_BOTTOM_LEFT_SEMEN,
        BodyLiquidId.BUTT_BOTTOM_RIGHT_SEMEN,
        BodyLiquidId.BACK_SEMEN,
        BodyLiquidId.ARM_LEFT_SEMEN,
        BodyLiquidId.ARM_RIGHT_SEMEN,
        BodyLiquidId.LEG_LEFT_SEMEN,
        BodyLiquidId.LEG_RIGHT_SEMEN,
    ]);

    const liquidsCleanUpPenalties = createLiquidsCleanUpPenalties();

    /**
     * Get body liquid instance.
     * @param {BodyLiquidId} id
     * @returns {BodyLiquid}
     */
    Game_Actor.prototype.getBodyLiquid = function (id) {
        const isBukkake = bukkakeLiquidIds.has(id);
        const cleanUpPenalties = liquidsCleanUpPenalties[id];

        switch (id) {
            case BodyLiquidId.PUSSY_JUICE:
                return new PussyJuiceLiquid(id, this, isBukkake, cleanUpPenalties);
            default:
                return new BodyLiquid(id, this, isBukkake, cleanUpPenalties);
        }
    }

    Game_Actor.prototype.cleanUpBodyLiquids = function () {
        for (const liquidId of Object.values(BodyLiquidId)) {
            this.getBodyLiquid(liquidId).cleanUp();
        }
    }
})();
