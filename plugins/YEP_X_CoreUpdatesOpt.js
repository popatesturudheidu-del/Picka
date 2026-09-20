//=============================================================================
// Yanfly Engine Plugins - Core Extension - Updates and Desktop Optimization
// YEP_X_CoreUpdatesOpt.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_X_CoreUpdatesOpt = true;

var Yanfly = Yanfly || {};
Yanfly.Updates = Yanfly.Updates || {};
Yanfly.Updates.version = 1.61;

//=============================================================================
 /*:
 * @plugindesc v1.61 (Req YEP_CoreEngine.js) Update your game without needing
 * to change your base rpg_x.js files and optimize it for desktop.
 * @author Yanfly Engine Plugins
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin requires the following:
 * - YEP_CoreEngine plugin installed
 * - Installing this plugin under YEP_CoreEngine
 * - RPG Maker MV version base code 1.4.0 or above
 * - Follow the instructions listed in the Help File's "Instructions" section
 *
 * Does your game project have at least base code (rpg_x.js) 1.4.0 or above?
 * And has RPG Maker MV updated past that, but you don't feel like updating the
 * base code manually, probably because you've made some edits to the code
 * itself? Yet, you still want to take advantage of the changes from the
 * version ups? This plugin will take care of that for you while keeping your
 * base code intact, while 'patching' the changes made from higher version ups.
 *
 * This plugin also adds in the updates and new functions from the versions
 * leading up to 1.5.2 to ensure that your project has the most up to date
 * functions even if it is running 1.4.0. This way, you do not have to tamper
 * with the game project's base code files yourself.
 *
 * Note: you will still have to download the newest Pixi libraries and to get
 * things working properly with this plugin. More will be explained in this
 * plugin's instructions section under the help file.
 *
 * ============================================================================
 * Instructions
 * ============================================================================
 *
 * If you have an old project that needs updating, do the following:
 *
 * 1. Make a backup of your project.
 * 2. Create a new project or go to the "NewData" folder in your RPG Maker MV
 *    root folder (where RPG Maker MV is installed).
 * 3. Copy the "libs" folder under "js" and replace the one in your old project.
 * 4. Copy the new index.html file to your current project.
 * 5. Update gamefont.css just in case.
 * 6. Make sure you have the latest version of YEP_CoreEngine.js installed.
 * 7. Install YEP_X_CoreUpdatesOpt.js (this plugin) under YEP_CoreEngine in the
 *    game project's Plugin Manager list.
 * 8. Run your game!
 *
 * ============================================================================
 * Desktop Optimization Option
 * ============================================================================
 *
 * This plugin also includes Yanfly's Desktop Optimization base code changes
 * for those who wish to optimize their projects as primarily desktop-only
 * games. The reason behind such an option is that since the 1.5.0 update, RPG
 * Maker MV has added a lot of wonderful new features to the editor as a whole.
 * However, the base code has been updated such a way that RPG Maker MV games
 * favor mobile game optimization over desktop games. Because of this, RPG
 * Maker MV games running off 1.5.0 and up have strange issues when images are
 * loading unlike versions 1.4.0 and below.
 *
 * This feature serves as a hybrid between the latest versions of RPG Maker MV
 * by utilizing the 1.4.0 source code that was better suited for desktop
 * optimization. This way, for developers who aim primarily at the development
 * of games for desktop, your games will be running as they did with the 1.4.0
 * base code while being able to make full use of the most recent updated RPG
 * Maker MV version's features!
 *
 * ============================================================================
 * RPG Maker MV 1.1.0 Changelog
 * ============================================================================
 *
 * rpg_core.js
 * Sprite.prototype.updateTransform – no longer needs rounding down.
 * Tilemap.prototype.update – animation frame removed
 * Tilemap.prototype.refresh – repaint flag removed
 * Tilemap.prototype.updateTransform – removed a lot of animation checks
 * Tilemap.prototype._paintTiles – animation frame check moved to here
 * Tilemap.prototype._drawAutotile – fixed error with variable names
 *
 * rpg_managers.js
 *
 * DataManager.saveGame – no longer corrupts save file while saving during a
 * parallel process
 * StorageManager.backup – new function added
 * StorageManager.backupExists – new function added
 * StorageManager.cleanBackup – new function added
 * StorageManager.restoreBackup – new function added
 * StorageManager.loadFromLocalBackupFile – new function added
 * StorageManager.loadFromWebStorageBackup – new function added
 * StorageManager.webStorageBackupExists – new function added
 * SceneManager – added FPS synch
 * SceneManager.updateMain – added in FPS synch
 * BattleManager.processEscape – removed battle state removal process from
 * wrong spot
 * BattleManager.processAbort – inserted battle state removal process to
 * correct timing
 *
 * rpg_objects.js
 * Game_Action.prototype.decideRandomTarget – random target index bug fixed
 * Game_Action.prototype.evaluate – target index bug fixed
 * Game_Action.prototype.evalDamageFormula – if formulas are used that return
 * NaN, return 0 instead
 * Game_Actor.prototype.changeClass – exp bug fixed
 * Game_Event.prototype.updateSelfMovement – added extra check to see if the
 * event is not locked
 * Game_Interpreter.prototype.command321 – class change command now has the
 * option to keep exp across changing classes
 *
 * rpg_scenes.js
 * Scene_Save.prototype.onSaveSuccess – backup process functionality added
 *
 * rpg_sprites.js
 * Sprite_Actor.prototype.refreshMotion – added a fix for guard motion
 * Spriteset_Map.prototype._canvasReAddParallax – new function added
 * Spriteset_Map.prototype.updateParallax – implemented fix for parallax bug
 *
 * rpg_windows.js
 * Window_MenuStatus.prototype.drawItemImage – fixed bug involving variable
 * face dimensions
 * Window_ActorCommand.prototype.selectLast – fixed bug with saved last
 * selected command
 *
 * ============================================================================
 * RPG Maker MV 1.2.0 Changelog
 * ============================================================================
 *
 * rpg_core.js
 * TilingSprite.prototype.generateTilingTexture added.
 *
 * rpg_objects.js
 * Game_Picture.prototype.updateRotation updated. This is to accomodate for the
 * set rotation value.
 *
 * rpg_sprites.js
 * Sprite_Animation.prototype.updateCellSprite updated. The sprite will always
 * be visible if the pattern exists.
 *
 * ============================================================================
 * RPG Maker MV 1.3.0 Changelog
 * ============================================================================
 *
 * rpg_core.js
 * Arrays get a new function: equals
 * CacheEntry new class
 * Bitmap gets many lines updated from Pixi2 to Pixi4
 * Bitmap.initialize
 * Bitmap.load
 * Bitmap.snap
 * Bitmap.onLoad
 * Bitmap._setDirty
 * Bitmap.touch, Bitmap.bltImage new functions
 * Graphics gets line updated from Pixi2 to Pixi4
 * Graphics.isWebGL
 * Graphics gets new function: callGC
 * Sprite gets many lines updated from Pixi2 to Pixi4
 * Sprite.constructor
 * Sprite._refresh
 * Sprite._renderCanvas
 * Sprite._renderWebGL
 * Sprite gets a new function: _speedUpCustomBlendModes
 * Tilemap gets many lines updated from Pixi2 to Pixi4
 * Tilemap.initialize
 * Tilemap.update
 * Tilemap.refresh
 * Tilemap.updateTransform
 * Tilemap._paintTiles
 * Tilemap._drawNormalTile
 * Tilemap._drawAutotile
 * Tilemap.isWallSideTile
 * ShaderTilemap new class
 * TilingSprite gets many lines updated from Pixi2 to Pixi4
 * TilingSprite.initialize
 * TilingSprite.updateTransform
 * TilingSprite._refresh
 * TilingSprite._renderCanvas, TilingSprite._renderWebGL new functions
 * ScreenSprite gets many lines updated from Pixi2 to Pixi4
 * ScreenSprite.initialize
 * ScreenSprite._renderCanvas
 * Window gets many lines updated from Pixi2 to Pixi4
 * Window.initialize
 * Window.updateTransform
 * Window._createAllParts
 * WindowLayer gets many lines updated from Pixi2 to Pixi4
 * WindowLayer.initialize
 * WindowLayer._renderCanvas
 * WindowLayer._renderWebGL
 * WindowLayer._webglMaskWindow
 * Weather gets line updated from Pixi2 to Pixi4
 * Weather.initialize
 * ToneFilter gets many lines updated from Pixi2 to Pixi4
 * ToneFilter.initialize removed
 * ToneFilter.reset removed
 * ToneFilter.adjustHue
 * ToneFilter.adjustSaturation
 * ToneFilter.adjustTone
 * ToneSprite gets many lines updated from Pixi2 to Pixi4
 * ToneSprite.initialize
 * ToneSprite._renderCanvas
 * ToneSprite._renderWebGL
 * Stage gets line updated from Pixi2 to Pixi4
 * Stage.initialize
 * WebAudio gets functions updated to work with the new Decrypter
 * WebAudio._load
 * WebAudio._onXhrLoad
 * Html5Audio gets function updated to work with the new Decrypter
 * Html5Audio.setup
 * Decrypter new class
 *
 * rpg_managers.js
 * DataManager.onLoad gets update check for Decrypter added
 * ImageManager._cache no longer exists. ImageManager.cache now takes its place
 * as a new CacheMap
 * ImageManager.loadEmptyBitmap, ImageManager.loadNormalBitmap,
 * ImageManager.clear, ImageManager.isReady are now all updated from _cache to
 * cache
 * AudioManager gains AudioManager._blobUrl
 * AudioManager.playBgm gets update check for Decrypter
 * AudioManager.playEncryptedBgm, AudioManager.createDecryptBuffer new functions
 * AudioManager.createBuffer updated to utilize _blobUrl
 * AudioManager.shouldUseHtml5Audio updated for Decrypter
 * SceneManager.update gets updated for a MobileSafari check
 * SceneManager.updateMain gets updated to function differently if using
 * MobileSafari
 * SceneManager.updateManagers new function
 *
 * rpg_objects.js
 * Game_Picture.updateRotation now accepts negative speed
 * Game_BattlerBase.tpRate now utilizes Game_BattlerBase.maxTp function
 *
 * rpg_scenes.js
 * Scene_Boot.create now loads the window image separately
 * Scene_Boot.loadSystemWindowImage new function
 * Scene_Boot.loadSystemImages no longer loads the window image
 *
 * rpg_sprites.js
 * Sprite_Animation.initialize gets new _reduceArtifacts variable
 * Sprite_Animation.updateCellSprite gets an update where the pattern sprite is
 * now always visible if the pattern is at least 0
 * Sprite_Picture.initialize gets new _isPicture variable
 * Spriteset_Map.createTilemap is updated to check if WebGL is being used. If it
 * is, the tilemap will be a ShaderTilemap instead of a regular Tilemap
 * Spriteset_Map.loadTileset is updated to refresh tilemap flags when loading a
 * new one
 *
 * ============================================================================
 * RPG Maker MV 1.3.1 Changelog
 * ============================================================================
 *
 * rpg_core.js
 * CacheEntry.free function fixed
 * Tilemap’s TileRenderer mode will automatically default to Nearest Neighbor
 * ScreenSprite updates
 * New properties added: anchor and blendMode
 * ScreenSprite.initialize
 * ScreenSprite.setColor
 * WebAudio.onXhrLoad function fixed
 *
 * ============================================================================
 * RPG Maker MV 1.3.2 Changelog
 * ============================================================================
 *
 * rpg_core.js
 * Added waitForLoading and register variables.
 * Graphics.playVideo function updated to add a Mobile Safari check for video
 * playing.
 * Graphics.isVideoPlaying function updated to add a Mobile Safari check for
 * video playing.
 * Graphics._onVideoLoad function updated to add a Mobile Safari check for
 * video playing.
 * Graphics._onVideoEnd function updated to add a Mobile Safari check for video
 * playing.
 * Input._updateGamepadState function updated to provide Direct Input
 * Controller support.
 * Sprite.prototype.initialize function updated to no longer have an offset
 * variable. It is now replaced by the pivot.
 * Sprite.prototype._refresh updated offset variable to work with pivot and
 * texture update ID.
 * Sprite.prototype.updateTransform function removed.
 * TilingSprite is now a different object type (PictureTilingSprite).
 * TilingSprite.prototype.initialize function updated to call
 * PictureTilingSprite instead.
 * TilingSprite.prototype._renderCanvas_PIXI and TilingSprite._renderWebGL_PIXI
 * updated to work with PictureTilingSprite instead.
 * TilingSprite.prototype._refresh function updated to work with
 * PictureTilingSprite and texture update ID.
 * TilingSprite.prototype._speedUpCustomBlendModes new.
 * TilingSprite.prototype._renderWebGL new function.
 * WindowLayer.prototype.initialize function updated to fix memory leak.
 * WindowLayer.prototype.onRemoveAsAChild new function.
 * WindowLayer.prototype.renderWebGL updated to work with PIXI.Point shift.
 * WindowLayer.prototype._maskWindow function updated to require shift.
 *
 * rpg_managers.js
 * SceneManager.onKeyDown function updated to have a warning message for
 * Japanese game systems: Reloading the game with a gamepad connected will
 * cause a disconnect.
 * BattleManager.invokeCounterAttack function updated to display the target as
 * the counter target instead of the subject.
 * BattleManager.invokeMagicReflection function updated to register the
 * reflection target and display the target as the reflect target instead of the
 * subject.
 *
 * rpg_objects.js
 * Game_Action.prototype.gainDrainedHp function updated to work with reflected
 * targets.
 * Game_Action.prototype.gainDrainedMp function updated to work with reflected
 * targets.
 * Game_Actor.prototype.isLearnedSkill function updated to now include skills
 * added through traits.
 * Game_Interpreter.prototype.command337 (Show Battle Animation) now updated to
 * work with new Editor update.
 *
 * rpg_scenes.js
 * Scene_Map.prototype.terminate updated to fix memory leak bug.
 *
 * ============================================================================
 * RPG Maker MV 1.3.3 Changelog
 * ============================================================================
 *
 * Strictly an editor update.
 *
 * ============================================================================
 * RPG Maker MV 1.3.4 Changelog
 * ============================================================================
 *
 * rpg_core.js
 * Bitmap.snap now destroys the previously saved snapshot
 * TilingSprite.prototype.updateTransform gets comments removed
 * WindowLayer.prototype.renderWebG now rounds up the shifted window coordinates
 *
 * rpg_managers.js
 * SceneManager.onKeyDown gets that terrible popup removed when pressing F5
 * BattleManager.updateEvent now uses BattleManager.checkAbort2 function
 * BattleManager.checkAbort2 is a new function used to play an extra sound
 * effect, mark the battle as escaped
 * BattleManager.updateBattleEnd now checks if the battle is aborted if the
 * party is all dead and not escaped
 *
 * rpg_objects.js
 * Game_Actor.prototype.isLearnedSkill reverted back to its 1.0.0 to 1.3.1
 * version
 * Game_Actor.prototype.hasSkill now checks if the skill exists, whether it is
 * inherently or gained through a temporary trait
 * Game_Actor.prototype.testEscape new function that checks if an action (item
 * or skill) has the escape effect
 * Game_Actor.prototype.meetsUsableItemConditions now checks specifically for
 * actor usage and to check if the item has an escape effect
 * Game_Interpreter.prototype.command111 (Conditional Branch) updated to make
 * use of the new Game_Actor.hasSkill function
 *
 * ============================================================================
 * RPG Maker MV 1.4.0 Changelog
 * ============================================================================
 *
 * rpg_core.js
 * TouchInput.isMousePressed function removed
 *
 * rpg_objects.js
 * Game_Temp.prototype.initialize function removes map touch boolean
 * Game_Temp.prototype.isMapTouched function removed
 * Game_Temp.prototype.setIsMapTouched function removed
 * Game_Actor.prototype.meetsUsableItemConditions altered to return a reference
 * to Game_BattlerBase.prototype.meetsUsableItemConditions for checking
 * Game_Player.prototype.updateDashing now checks if the dash button is pressed
 * instead of if the game map is being touched
 *
 * rpg_scenes.js
 * Scene_Map.prototype.processMapTouch updated to reflect the removal of the
 * map touch functions
 *
 * ============================================================================
 * RPG Maker MV 1.5.0 Changelog
 * ============================================================================
 *
 * rpg_core.js
 * Utils.isSupportPassiveEvent new function added
 * ImageCache added and respective functions
 * iOS memory function updates for reusing images
 * Bitmap.prototype.initialize split into new functions for iOS memory function
 * update
 * Bitmap.load split into new functions for iOS memory function update
 * Bitmap.prototype.isReady and Bitmap.prototype.isError now has extra checks
 * Bitmap properties updated for Pixi4.4
 * Bitmap.prototype.addLoadListener updated as per updated ready functions
 * Bitmap.prototype.addLoadListener updated as per updated listener functions
 * Bitmap.request new function added
 * Graphics.initialize updated with new variables added
 * Graphics._setupCssFontLoading new function added
 * Graphics.render updated
 * Graphics.printLoadingError new function added
 * Graphics.isFontLoaded updated
 * Graphics.playVideo updated
 * Graphics._createVideo updated
 * Graphics._createRenderer updated
 * Graphics._onVideoLoad updated
 * Graphics._onVideoError updated
 * Graphics._setupEventHandlers updated with new listener functions
 * Input._onKeyDown updated
 * TouchInput._setupEventHandlers updated
 * Sprite.prototype.setFrame updated
 * Sprite.prototype._onBitmapLoad updated
 * Sprite.prototype._renderCanvas updated
 * Sprite.prototype._renderWebGL updated
 * ShaderTilemap.prototype._hackRenderer updated
 * WindowLayer.prototype.renderWebGL updated
 * WindowLayer.prototype._maskWindow updated
 * WebAudio._standAlone new function added
 * WebAudio._createMasterGainNode updated
 * WebAudio._fadeIn updated
 * WebAudio._fadeOut updated
 * WebAudio.prototype.fadeOut updated
 * WebAudio.prototype._load updated
 * WebAudio.prototype._createNodes updated
 * JsonEx.stringify updated
 * JsonEx.parse updated
 * JsonEx._encode updated
 * JsonEx._decode updated
 * Decrypter.decryptImg updated
 * ResourceHandler new class
 *
 * rpg_managers.js
 * DataManager.loadDataFile updated
 * DataManager.loadMapData updated
 * DataManager.loadSavefileImage updated with function rename
 * ImageManager._imageCache, ImageManager._requestQueue,
 * ImageManager._systemReservationId, ImageManager._generateCacheKey newly added
 * ImageManager.loadEmptyBitmap updated with function rename
 * ImageManager.loadNormalBitmap updated with function rename
 * ImageManager.clear updated with new ImageCache
 * ImageManager.isReady updated with new ImageCache
 * New functions (renamed):
 * ImageManager.reserveAnimation
 * ImageManager.reserveBattleback1
 * ImageManager.reserveBattleback2
 * ImageManager.reserveEnemy
 * ImageManager.reserveCharacter
 * ImageManager.reserveFace
 * ImageManager.reserveParallax
 * ImageManager.reservePicture
 * ImageManager.reserveSvActor
 * ImageManager.reserveSvEnemy
 * ImageManager.reserveSystem
 * ImageManager.reserveTileset
 * ImageManager.reserveTitle1
 * ImageManager.reserveTitle2
 * ImageManager.reserveBitmap
 * ImageManager.reserveNormalBitmap
 * ImageManager.releaseReservation
 * ImageManager.setDefaultReservationId
 * ImageManager.requestAnimation
 * ImageManager.requestBattleback1
 * ImageManager.requestBattleback2
 * ImageManager.requestEnemy
 * ImageManager.requestCharacter
 * ImageManager.requestFace
 * ImageManager.requestParallax
 * ImageManager.requestPicture
 * ImageManager.requestSvActor
 * ImageManager.requestSvEnemy
 * ImageManager.requestSystem
 * ImageManager.requestTileset
 * ImageManager.requestTitle1
 * ImageManager.requestTitle2
 * ImageManager.requestBitmap
 * ImageManager.requestNormalBitmap new function
 * ImageManager.update new function
 * ImageManager.clearRequest new function
 * AudioManager._masterVolume added
 * SceneManager._getTimeInMs renamed to
 * SceneManager._getTimeInMsWithoutMobileSafari
 * SceneManager.preferableRendererType updated per new graphics updates
 * SceneManager.update added new updatemanagers
 * SceneManager.updateMain updated for the new
 * SceneManager._getTimeInMsWithoutMobileSafari
 * SceneManager.updateManagers updated to utilize ImageManager.update() function
 * SceneManager.changeScene updated with new reservation system
 * SceneManager.resume new function added
 *
 * rpg_objects.js
 * Game_System.prototype.saveWalkingBgm2 new function added
 * Game_Message.prototype.allText updated
 * Game_Map.prototype.autoplay updated for vehicle bgm to take into
 * consideration the new Game_System.prototype.saveWalkingBgm2 function
 * Game_Character.prototype.findDirectionTo updated
 * Game_Interpreter.prototype.setup updated to now request images at the start
 * Game_Interpreter.prototype.command282 (change tileset) updated per the new
 * image reservation system
 * Game_Interpreter.requestImages new function added to preload images that will
 * be used by the event
 *
 * rpg_scenes.js
 * Scene_Base.prototype.initialize updated with new reservation system
 * Scene_Base.prototype.attachReservation new function added
 * Scene_Base.prototype.detachReservation new function added
 * Scene_Base.prototype.update no longer checks audio errors
 * Scene_Boot.prototype.loadSystemWindowImage updated now to reserve images
 * instead of loading them
 * Scene_Boot.loadSystemImages updated now to reserve images instead of loading
 * them
 * Scene_Boot.prototype.isGameFontLoaded updated now with CSS and elapsed
 * loading time increased from 20 seconds to 60 seconds
 * Scene_Map.prototype.terminate updated now to clear requests
 * Scene_Menu.prototype.createStatusWindow updated now to reserve face images
 * Scene_Skill.prototype.start new function added
 * Scene_Skill.prototype.createStatusWindow updated now to reserve face images
 * Scene_Status.prototype.create updated now to reserve face images
 * Scene_Status.prototype.start new function added
 * Scene_Battle.prototype.terminate now clears images used
 *
 * rpg_sprites.js
 * Sprite_Animation.prototype.isReady uses new image ready system
 * Sprite_Animation.prototype.updateCellSprite updated
 *
 * rpg_windows.js
 * Window_Base.prototype.reserveFaceImages new function added
 * Window_MenuStatus.prototype.initialize no longer loads images
 * Window_MenuStatus.prototype.loadImages now uses reserve image functions
 * Window_Status.prototype.initialize updated to have an initial null actor
 * Window_NameEdit.prototype.initialize now uses reserve image functions
 * Window_Message.prototype.initMembers updated with Utils.generateRuntimeId()
 * function added
 * Window_Message.prototype.updateLoading now uses image ready system
 * Window_Message.prototype.loadMessageFace now uses reserve image functions
 * Window_Message.prototype.drawMessageFace updated with reserve image functions
 *
 * ============================================================================
 * RPG Maker MV 1.5.1 Changelog
 * ============================================================================
 *
 * rpg_core.js
 * Sprite.prototype._renderWebGL updated to be picky when detecting usage for a
 * heavy renderer
 * PIXI.GC_MODES.DEFAULT = PIXI.GC_MODES.AUTO; changed to PIXI.settings.GC_MODE
 * = PIXI.GC_MODES.AUTO;
 *
 * rpg_managers.js
 * BattleManager.initMembers added new this._turnForced variable
 * BattleManager.endTurn updated to check if a turn has been forced
 * BattleManager.isForcedTurn new function
 * BattleManager.processForcedAction updated for new forced turn variable
 *
 * rpg_objects.js
 * Game_Battler.prototype.onTurnEnd updated to have a check for a forced turn
 * Game_Interpreter.prototype.command122 (control variables) updated to have a
 * proper range calculation change
 *
 * ============================================================================
 * RPG Maker MV 1.5.2 Changelog
 * ============================================================================
 *
 * rpg_core.js
 * Graphics.initialize starts with _videoUnlocked with a false boolean.
 * Graphics._setupEventHandlers added keydown and mousedown Event Listeners
 * WebAudio._setupEventHandlers function updated to have keydown, mousedown,
 * touchend listeners resume function.
 *
 * rpg_managers.js
 * BattleManager.updateEvent now returns checkAbort instead of checkAbort2
 * BattleManager.checkAbort2 removed and became BattleManager.checkAbort
 *
 * rpg_objects.js
 * Game_Interpreter.prototype.command113 (break loop) event fixed
 *
 * rpg_scenes.js
 * No changes (good, since it doesn’t have the Scene_Item active window breaker)
 *
 * rpg_sprites.js
 * Spriteset_Battle.prototype.overworldBattleback1Name and
 * Spriteset_Battle.prototype.overworldBattleback2Name functions updated to
 * return no backdrop if an empty string is determined
 *
 * ============================================================================
 * RPG Maker MV 1.6.1 Changelog
 * ============================================================================
 *
 * rpg_core.js
 * Utils.isOptionValid function updated with fail saves
 * WebAudio.prototype._startPlaying function updated for loopLength variable
 *
 * rpg_objects.js
 * Game_Interpreter.prototype.command113 (break loop) function updated
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @param Desktop_Updates
 * @text Desktop Optimization
 * @parent ---Custom---
 * @type boolean
 * @on YES
 * @off NO
 * @desc Add Yanfly's Desktop Optimization Updates?
 * @default true
 */
//=============================================================================

Yanfly.PluginRequirements = function() {
  return Imported.YEP_CoreEngine &&
         Utils.RPGMAKER_VERSION &&
         Utils.RPGMAKER_VERSION >= '1.4.0';
};

if (Yanfly.PluginRequirements()) {

//=============================================================================
// Parameter Variables
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_X_CoreUpdatesOpt');
Yanfly.Param = Yanfly.Param || {};

Yanfly.ParameterVersionCheck = function(version, key, parameter) {
  if (Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION === version) {
    Yanfly.Param[key] = false;
  } else if (Utils.RPGMAKER_VERSION && Utils.RPGMAKER_VERSION > version) {
    Yanfly.Param[key] = false;
  } else {
    Yanfly.Param[key] = eval(String(Yanfly.Parameters[parameter]));
  }
};

Yanfly.SetupParameters = function() {
  // Desktop Optimization
  Yanfly.Param.UpdateDesktop = eval(String(Yanfly.Parameters['Desktop_Updates']));
};
Yanfly.SetupParameters();

//=============================================================================
// Desktop Optimization Changes
//=============================================================================

//-----------------------------------------------------------------------------
// Desktop Optimization rpg_core.js Changes
//-----------------------------------------------------------------------------

if (Yanfly.Param.UpdateDesktop) {

// Set up a flag to signify the Yanfly Desktop Optimization plugin is used.
// This is done for compatibility reasons.
Utils.RPGMAKER_VERSION.Yanfly = true;

//-----------------------------------------------------------------------------
// Desktop Optimizatioin rpg_managers.js Changes
//-----------------------------------------------------------------------------

// Maintaining an old, renamed function
SceneManager._getTimeInMs = function() {
    return performance.now();
};

// Switched ImageManager.reserves into ImageManager.loads
DataManager.loadSavefileImages = function(info) {
  if (info.characters) {
    for (var i = 0; i < info.characters.length; i++) {
      ImageManager.loadCharacter(info.characters[i][0]);
    }
  }
  if (info.faces) {
    for (var j = 0; j < info.faces.length; j++) {
      ImageManager.loadFace(info.faces[j][0]);
    }
  }
};

ImageManager.loadEmptyBitmap = function() {
  var empty = this.cache.getItem('empty');
  if (!empty) {
    empty = new Bitmap();
    this.cache.setItem('empty', empty);
  }
  return empty;
};

ImageManager.loadNormalBitmap = function(path, hue, smooth = false) {
  var key = this._generateCacheKey(path, hue, smooth);
  var bitmap = this.cache.getItem(key);
  if (!bitmap) {
    bitmap = Bitmap.load(path);
    bitmap.addLoadListener(function() {
        bitmap.smooth = smooth;
        bitmap.rotateHue(hue);
    });
    this.cache.setItem(key, bitmap);
  }
  return bitmap;
};

ImageManager.clear = function() {
  this.cache.clear();
};

ImageManager.isReady = function() {
  for (var key in this.cache._inner) {
    var bitmap = this.cache._inner[key].item;
    if (bitmap.isError()) {
      throw new Error('Failed to load: ' + bitmap.url);
    }
    if (!bitmap.isReady()) {
      return false;
    }
  }
  return true;
};

// Added shouldUseCanvasRenderer condition
SceneManager.preferableRendererType = function() {
  if (Utils.isOptionValid('canvas')) {
    return 'canvas';
  } else if (Utils.isOptionValid('webgl')) {
    return 'webgl';
  } else if (this.shouldUseCanvasRenderer()) {
    return 'canvas';
  } else {
    return 'auto';
  }
};

// Removed this.updateManagers
SceneManager.update = function() {
  try {
    this.tickStart();
    if (Utils.isMobileSafari()) {
      this.updateInputData();
    }
    this.updateMain();
    this.tickEnd();
  } catch (e) {
    this.catchException(e);
  }
};

// Refer to this._getTimeInMs instead of this._getTimeInMsWithoutMobileSafari
SceneManager.updateMain = function() {
  if (Utils.isMobileSafari()) {
    this.changeScene();
    this.updateScene();
  } else {
    var newTime = this._getTimeInMs();
    var fTime = (newTime - this._currentTime) / 1000;
    if (fTime > 0.25) fTime = 0.25;
    this._currentTime = newTime;
    this._accumulator += fTime;
    while (this._accumulator >= this._deltaTime) {
      this.updateInputData();
      this.changeScene();
      this.updateScene();
      this._accumulator -= this._deltaTime;
    }
  }
  this.renderScene();
  this.requestUpdate();
};

// Utilize former cache system
SceneManager.updateManagers = function(ticks, delta) {
  ImageManager.cache.update(ticks, delta);
};

//-----------------------------------------------------------------------------
// Desktop Optimization rpg_objects.js Changes
//-----------------------------------------------------------------------------

// No longer loads reserved images
Game_Interpreter.prototype.setup = function(list, eventId) {
  this.clear();
  this._mapId = $gameMap.mapId();
  this._eventId = eventId || 0;
  this._list = list;
};

// Change Tileset Event: load instead of reserve
Game_Interpreter.prototype.command282 = function() {
  var tileset = $dataTilesets[this._params[0]];
  for (var i = 0; i < tileset.tilesetNames.length; i++) {
    ImageManager.loadTileset(tileset.tilesetNames[i]);
  }
  if (ImageManager.isReady()) {
    $gameMap.changeTileset(this._params[0]);
    return true;
  } else {
    return false;
  }
};

//-----------------------------------------------------------------------------
// Desktop Optimization rpg_scenes.js Changes
//-----------------------------------------------------------------------------

// Removal of reservation ID
Scene_Base.prototype.initialize = function() {
  Stage.prototype.initialize.call(this);
  this._active = false;
  this._fadeSign = 0;
  this._fadeDuration = 0;
  this._fadeSprite = null;
};

// Audio error checking added
Scene_Base.prototype.update = function() {
  this.updateFade();
  this.updateChildren();
  AudioManager.checkErrors();
  //Code By @madtisa#8743
  ImageManager.cache.update(0, SceneManager._deltaTime);
};

// Loaded image instead of reserving it
Scene_Boot.prototype.loadSystemWindowImage = function() {
  ImageManager.loadSystem('Window');
};

// Loaded images instead of reserving them
Scene_Boot.loadSystemImages = function() {
  ImageManager.loadSystem('IconSet');
  ImageManager.loadSystem('Balloon');
  ImageManager.loadSystem('Shadow1');
  ImageManager.loadSystem('Shadow2');
  ImageManager.loadSystem('Damage');
  ImageManager.loadSystem('States');
  ImageManager.loadSystem('Weapons1');
  ImageManager.loadSystem('Weapons2');
  ImageManager.loadSystem('Weapons3');
  ImageManager.loadSystem('ButtonSet');
};

// Game font now loads instead of being in the process of loading
// Loading time upped to 60 seconds from 20
Scene_Boot.prototype.isGameFontLoaded = function() {
  if (Graphics.isFontLoaded('GameFont')) {
    return true;
  } else {
    var elapsed = Date.now() - this._startDate;
    if(elapsed >= 20000) {
		//throw new Error('Loading time exceeded 2 minutes, delete the config.rpgsave in your save folder please.');
		console.error('Failed to load GameFont');
        return true;
    }
  }
};

// Clear requests removed for image reservation
Scene_Map.prototype.terminate = function() {
  this._bypassFirstClear = true;
  Scene_Base.prototype.terminate.call(this);
  if (!SceneManager.isNextScene(Scene_Battle)) {
    this._spriteset.update();
    this._mapNameWindow.hide();
    SceneManager.snapForBackground();
  }
  $gameScreen.clearZoom();
  this.removeChild(this._fadeSprite);
  this.removeChild(this._mapNameWindow);
  this.removeChild(this._windowLayer);
  this.removeChild(this._spriteset);
  this.clearChildren();
};

// Face reservation removed
Scene_Menu.prototype.createStatusWindow = function() {
  this._statusWindow = new Window_MenuStatus(this._commandWindow.width, 0);
  this.addWindow(this._statusWindow);
};

// Refreshing the actor now occurs upon creation and instead of start
Scene_Skill.prototype.create = function() {
  Scene_ItemBase.prototype.create.call(this);
  this.createHelpWindow();
  this.createSkillTypeWindow();
  this.createStatusWindow();
  this.createItemWindow();
  this.createActorWindow();
  this.refreshActor();
};

// Refreshing the actor now occurs upon creation and instead of start
Scene_Skill.prototype.start = function() {
  Scene_ItemBase.prototype.start.call(this);
};

// Face reservation removed
Scene_Skill.prototype.createStatusWindow = function() {
  var wx = this._skillTypeWindow.width;
  var wy = this._helpWindow.height;
  var ww = Graphics.boxWidth - wx;
  var wh = this._skillTypeWindow.height;
  this._statusWindow = new Window_SkillStatus(wx, wy, ww, wh);
  this.addWindow(this._statusWindow);
};

// Refreshing the actor now occurs upon creation and instead of start
Scene_Status.prototype.create = function() {
  Scene_MenuBase.prototype.create.call(this);
  this._statusWindow = new Window_Status();
  this._statusWindow.setHandler('cancel',   this.popScene.bind(this));
  this._statusWindow.setHandler('pagedown', this.nextActor.bind(this));
  this._statusWindow.setHandler('pageup',   this.previousActor.bind(this));
  this._statusWindow.reserveFaceImages();
  this.addWindow(this._statusWindow);
  this.refreshActor();
};

// Refreshing the actor now occurs upon creation and instead of start
Scene_Status.prototype.start = function() {
  Scene_MenuBase.prototype.start.call(this);
};

// Image Reservation Clear Request removed
Scene_Battle.prototype.terminate = function() {
  Scene_Base.prototype.terminate.call(this);
  $gameParty.onBattleEnd();
  $gameTroop.onBattleEnd();
  AudioManager.stopMe();
};

//-----------------------------------------------------------------------------
// Desktop Optimization rpg_sprites.js Changes
//-----------------------------------------------------------------------------

// Ready preparation now refers to fully loaded instead of reservation
Sprite_Animation.prototype.isReady = function() {
  return ImageManager.isReady();
};

// Cleaning algorithm up
Sprite_Animation.prototype.updateCellSprite = function(sprite, cell) {
  var pattern = cell[0];
  if (pattern >= 0) {
    var sx = pattern % 5 * 192;
    var sy = Math.floor(pattern % 100 / 5) * 192;
    var mirror = this._mirror;
    sprite.bitmap = pattern < 100 ? this._bitmap1 : this._bitmap2;
    sprite.setFrame(sx, sy, 192, 192);
    sprite.x = cell[1];
    sprite.y = cell[2];
    if (this._mirror) {
        sprite.x *= -1;
    }
    sprite.rotation = cell[4] * Math.PI / 180;
    sprite.scale.x = cell[3] / 100;
    if ((cell[5] && !mirror) || (!cell[5] && mirror)) {
        sprite.scale.x *= -1;
    }
    sprite.scale.y = cell[3] / 100;
    sprite.opacity = cell[6];
    sprite.blendMode = cell[7];
    sprite.visible = true;
  } else {
    sprite.visible = false;
  }
};

//-----------------------------------------------------------------------------
// Desktop Optimization rpg_windows.js Changes
//-----------------------------------------------------------------------------

// Load images upon initializing
Window_MenuStatus.prototype.initialize = function(x, y) {
  var width = this.windowWidth();
  var height = this.windowHeight();
  Window_Selectable.prototype.initialize.call(this, x, y, width, height);
  this._formationMode = false;
  this._pendingIndex = -1;
  this.loadImages();
  this.refresh();
};

// Load images instead of reserving
Window_MenuStatus.prototype.loadImages = function() {
  $gameParty.members().forEach(function(actor) {
    ImageManager.loadFace(actor.faceName());
  }, this);
};

// Removed actor null initializing
Window_Status.prototype.initialize = function() {
  var width = Graphics.boxWidth;
  var height = Graphics.boxHeight;
  Window_Selectable.prototype.initialize.call(this, 0, 0, width, height);
  this.refresh();
  this.activate();
};

// Actor face loaded instead of reserved
Window_NameEdit.prototype.initialize = function(actor, maxLength) {
  var width = this.windowWidth();
  var height = this.windowHeight();
  var x = (Graphics.boxWidth - width) / 2;
  var y = (Graphics.boxHeight - (height + this.fittingHeight(9) + 8)) / 2;
  Window_Base.prototype.initialize.call(this, x, y, width, height);
  this._actor = actor;
  this._name = actor.name().slice(0, this._maxLength);
  this._index = this._name.length;
  this._maxLength = maxLength;
  this._defaultName = this._name;
  this.deactivate();
  this.refresh();
  ImageManager.loadFace(actor.faceName());
};

// Image reservation ID removal
Window_Message.prototype.initMembers = function() {
  this._background = 0;
  this._positionType = 2;
  this._waitCount = 0;
  this._faceBitmap = null;
  this._textState = null;
  this.clearFlags();
};

// Proper ready check for image loading instead of reservation
Window_Message.prototype.updateLoading = function() {
  if (this._faceBitmap) {
    if (ImageManager.isReady()) {
      this.drawMessageFace();
      this._faceBitmap = null;
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
};

// Face bitmap loaded instead of reserved
Window_Message.prototype.loadMessageFace = function() {
  this._faceBitmap = ImageManager.loadFace($gameMessage.faceName());
};

// Removal of reservation release function
Window_Message.prototype.drawMessageFace = function() {
  this.drawFace($gameMessage.faceName(), $gameMessage.faceIndex(), 0, 0);
};

//=============================================================================
// Desktop Optimization Changes End
//=============================================================================

}; // Yanfly.Param.UpdateDesktop

//-----------------------------------------------------------------------------

//=============================================================================
// Version Fail Checks
//=============================================================================
} else if (!Utils.RPGMAKER_VERSION) {

var text = '';
text += 'You are getting this error because you are trying to run YEP_X_CoreUp';
text += 'datesOpt while your project files are lower than version 1.4.0. \n\n';
text += 'Please visit this thread for instructions on how to update your ';
text += 'project files to 1.4.0 or higher: \n\n';
text += 'http://forums.rpgmakerweb.com/';
console.log(text);
require('nw.gui').Window.get().showDevTools();

} else if (Utils.RPGMAKER_VERSION < '1.4.0') {

var text = '';
text += 'You are getting this error because you are trying to run YEP_X_CoreUp';
text += 'datesOpt while your project files are lower than version 1.4.0. \n\n';
text += 'Please visit this thread for instructions on how to update your ';
text += 'project files to 1.4.0 or higher: \n\n';
text += 'http://forums.rpgmakerweb.com/';
console.log(text);
require('nw.gui').Window.get().showDevTools();

} else {

var text = '';
text += 'You are getting this error because you are trying to run ';
text += 'YEP_X_CoreUpdatesOpt without the required plugins. Please visit ';
text += 'Yanfly.moe and install the required plugins neede for this plugin ';
text += 'found in this plugin\'s help file before you can use it.';
console.log(text);
require('nw.gui').Window.get().showDevTools();

}; // Yanfly.PluginRequirements
//=============================================================================
// End of File
//=============================================================================
