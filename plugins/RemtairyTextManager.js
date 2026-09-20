var Remtairy = Remtairy || {};
Remtairy.TextManager = Remtairy.TextManager || {};

var Imported = Imported || {};
Imported.RemtairyTextManager = true;

var RemGameVersion = '3.1.41';
const RemVersionText = 'ver. 1.' + RemGameVersion;


//=============================================================================
 /*:
 * @plugindesc TextManager
 * @author Remtairy
 *
 * @help
 * This is a private plugin.
 * Do not redistribute, use, or modify this plugin
 * without explicit written permission from Remtairy.
 *
 * @param RemLanguage
 * @text Language
 * @type number
 * @min 0
 * @max 5
 * @desc 0 - Japanese, 1 - English, 2 - T.Chinese, 3 - S.Chinese
 * @default 1
 *
 */
//=============================================================================

var RemLanguage = Number(PluginManager.parameters('RemtairyTextManager')['RemLanguage']);
const RemLanguageJP = 0;
const RemLanguageEN = 1;
const RemLanguageTCH = 2;
const RemLanguageSCH = 3;
const RemLanguageKR = 4;
const RemLanguageRU = 5;
const RemLanguageSP = 6;

//Basic Strings
const LevelNameEN = "Level";
const LevelNameJP = "レベル";
const LevelAbbrEN = "Lv.";
const LevelAbbrJP = "Lv.";
const HPNameEN = "Stamina";
const HPNameJP = "体力";
const HPAbbrEN = "Sta";
const HPAbbrJP = "体力";
const MPNameEN = "Energy";
const MPNameJP = "精力";
const MPAbbrEN = "EN";
const MPAbbrJP = "精力";
const TPNameEN = "Pleasure";
const TPNameJP = "快楽度";
const TPAbbrEN = "Pleasure";
const TPAbbrJP = "快楽度";
const EXPNameEN = "Experience Points";
const EXPNameJP = "経験値";
const EXPAbbrEN = "EXP";
const EXPAbbrJP = "EXP";

//Param Strings
const MaxHPNameEN = "Max Stamina";
const MaxHPNameJP = "最大体力";
const MaxMPNameEN = "Max Energy";
const MaxMPNameJP = "最大精力";
const AtkNameEN = "Strength";
const AtkNameJP = "腕力";
const DefNameEN = "Endurance";
const DefNameJP = "忍耐力";
const MatNameEN = "Dexterity";
const MatNameJP = "器用さ";
const MdfNameEN = "Mind";
const MdfNameJP = "マインド";
const AgiNameEN = "Agility";
const AgiNameJP = "素早さ";
const LukNameEN = "Charm";
const LukNameJP = "魅力";

const CritDmgNameEN = "Critical Damage";
const CritDmgNameJP = "クリティカルダメージ";
const WpAtkNameEN = "Weapon Attack";
const WpAtkNameJP = "攻撃力";
const WpDefNameEN = "Weapon Defense";
const WpDefNameJP = "防御力";
const OverblowProtectionNameEN = "Overblow Protection";
const OverblowProtectionNameJP = "ダメージ軽減量";
const FatigueNameEN = "Fatigue";
const FatigueNameJP = "現在の疲労";
const FatigueGainNameEN = "Fatigue Gain";
const FatigueGainNameJP = "疲労蓄積量";
const FatigueRecoveryNameEN = "Fatigue Recovery";
const FatigueRecoveryNameJP = "疲労回復量";
const MaxWillpowerNameEN = "Max Willpower";
const MaxWillpowerNameJP = "最大意志力";
const WillpowerNameEN = "Willpower";
const WillpowerNameJP = "意思力";
const WillpowerAbbrEN = "Will";
const WillpowerAbbrJP = "意思";
const CooldownTurnsSingularNameEN = "%1 Turn";
const CooldownTurnsSingularNameJP = "%1ターン";
const CooldownTurnsPluralNameEN = "%1 Turns";
const CooldownTurnsPluralNameJP = "%1ﾀｰﾝ";
const CockinessNameEN = "Cockiness";
const CockinessNameJP = "大胆さ";


const XParamNameEN = [
"Accuracy",
"Evasion",
"Critical Rate",
"Critical Evasion",
"Graze",
"",
"Counterattack Rate",
"Stamina Regen",
"Energy Regen",
"Pleasure Gain Per Turn"];

const XParamNameJP = [
"命中力",
"回避力",
"クリティカル率",
"クリティカル回避力",
"かすりダメージ",
"",
"カウンター率",
"体力回復量",
"精力回復量",
"ターンごとに得る快楽"];

const SParamNameEN = [
"Target Rate",
"Weapon Defense",
"Recovery Rate",
"Energy Skill Cost",
"Weapon Attack",
"Willpower Regen",
"Will Skill Cost",
"Sex Skill Cost",
"Attack Skill Cost",
"Experience Rate"];

const SParamNameJP = [
"狙われ率",
"ハルバード防御力",
"回復率",
"精神スキルコスト",
"ハルバード攻撃力",
"意思力回復量",
"意思スキルコスト",
"性スキルコスト",
"攻撃スキルコスト",
"経験率"];

//Elements String

const ElementSlashNameEN = "Slash";
const ElementSlashNameJP = "斬撃";
const ElementPierceNameEN = "Pierce";
const ElementPierceNameJP = "突撃";
const ElementBluntNameEN = "Blunt";
const ElementBluntNameJP = "打撃";
const ElementTalkNameEN = "Talk";
const ElementTalkNameJP = "猥談";
const ElementSightNameEN = "Sight";
const ElementSightNameJP = "視姦";
const ElementPettingNameEN = "Petting";
const ElementPettingNameJP = "愛撫";
const ElementStripNameEN = "Strip";
const ElementStripNameJP = "ストリップ";
const ElementAlmightyNameEN = "Almighty"; 	 //currently unused
const ElementAlmightyNameJP = "全般"; 	 //currently unused
const ElementDrugsNameEN = "Drugs"; 	 //currently unused
const ElementDrugsNameJP = "ドラッグ"; 	 //currently unused
const ElementStenchNameEN = "Stench"; 	 //currently unused
const ElementStenchNameJP = "嗅覚"; 	//currently unused
const ElementSexNameEN = "Sex";
const ElementSexNameJP = "セックス";

//Passive Categories
const PassiveCategoryNameEN = [
"\\I[56]All",
"\\I[57]\\C[1]Mouth Desire",
" ├Mouth",
" ├Kiss",
" └Blowjob",
"\\I[58]\\C[1]Boobs Desire",
" ├Boobs",
" ├Nipples",
" └Titjob",
"\\I[59]\\C[1]Pussy Desire",
" ├Clit",
" ├Pussy",
" ├Wet",
" ├Cunnilingus",
" └Vaginal Sex",
"\\I[60]\\C[1]Butt Desire",
" ├Butt",
" ├Anal",
" └Anal Sex",
"\\I[61]\\C[1]Cock Desire",
" ├Worship",
" ├Handjob",
" ├Bukkake",
" ├Swallow",
" ├Creampie",
" └Relations",
"\\I[44]\\C[1]Sadism",
" ├Status",
" ├Skills",
" ├Resist",
" ├Footjob",
" └Dominance",
"\\I[45]\\C[1]Masochism",
" ├Talk",
" ├Debuffs",
" ├Rimjob",
" ├Fetishism",
" └Submission",
"\\I[46]\\C[1]Masturbation",
" ├Urges",
" ├Sleep",
" ├Toys",
" └Orgasm",
"\\I[47]\\C[1]Exhibitionism",
" ├Sight",
" ├Clothes",
" ├Nudity",
" └Activities"
];

const PassiveCategoryNameJP = [
"\\I[56]取得パッシブ",
"\\I[57]\\C[1]口欲",
" ├クチ",
" ├キス",
" └フェラチオ",
"\\I[58]\\C[1]乳欲",
" ├おっぱい",
" ├乳首",
" └パイズリ",
"\\I[59]\\C[1]膣欲",
" ├クリトリス",
" ├マンコ",
" ├愛液",
" ├クンニ",
" └マンコセックス",
"\\I[60]\\C[1]尻欲",
" ├ケツ",
" ├アナル",
" └アナルセックス",
"\\I[61]\\C[1]棒欲",
" ├チンポ愛",
" ├手コキ",
" ├ぶっかけ",
" ├精飲",
" ├中出し",
" └肉体関係",
"\\I[44]\\C[1]サド",
" ├ステータス",
" ├スキル",
" ├耐性",
" ├足コキ",
" └支配欲",
"\\I[45]\\C[1]マゾ",
" ├猥談",
" ├弱体化",
" ├ケツ舐め",
" ├フェチ",
" └服従心",
"\\I[46]\\C[1]オナニー",
" ├性衝動",
" ├睡眠の質",
" ├オモチャ",
" └絶頂",
"\\I[47]\\C[1]露出",
" ├視姦",
" ├着衣",
" ├全裸",
" └アルバイト"
];


//Command Strings
const FightNameEN = "Fight";
const FightNameJP = "戦闘";
const EscapeNameEN = "Flee";
const EscapeNameJP = "撤退";
const AttackNameEN = "Attack";
const AttackNameJP = "攻撃";
const GuardNameEN = "End Mental Phase";
const GuardNameJP = "メンタルフェーズ終了";
const ItemNameEN = "Item";
const ItemNameJP = "アイテム";
const SkillNameEN = "Passives";
const SkillNameJP = "パッシブ";
const EquipNameEN = "Equip";
//const EquipNameEN = "REM\\I[95]Equip"; 	//currently unused
const EquipNameJP = "装備"; 		//currently unused
const StatusNameEN = "Status";
const StatusNameJP = "ステータス";
const FormationNameEN = "Party";	//currently unused
const FormationNameJP = "パーティ";		//currently unused
const SaveNameEN = "Save";
const SaveNameJP = "セーブ";
const LoadNameEN = "Load";
const LoadNameJP = "ロード";
const DeleteNameEN = "Delete";
const DeleteNameJP = "削除";
const GameEndNameEN = "End Game";
const GameEndNameJP = "終了";
const OptionsNameEN = "Settings";
const OptionsNameJP = "環境設定";
const WeaponNameEN = "Weapon";
const WeaponNameJP = "武器";
const ArmorNameEN = "Accessory";
const ArmorNameJP = "装飾";
const KeyItemNameEN = "Key Item";
const KeyItemNameJP = "主要アイテム";
const Equip2NameEN = "Equip";
const Equip2NameJP = "装備";
const NewGameNameEN = "New Game";
const NewGameNameJP = "ニューゲーム";
const ContinueNameEN = "Continue";
const ContinueNameJP = "コンティニュー";
const ToTitleNameEN = "Title";
const ToTitleNameJP = "タイトル画面へ";
const CancelNameEN = "Cancel";
const CancelNameJP = "キャンセル";
const BuyNameEN = "Shop";	//currently unused
const BuyNameJP = "ショップ";	//currently unused
const SellNameEN = "Sell";	//currently unused
const SellNameJP = "売却";	//currently unused

//Message Strings
const ActionFailureEN = "There is no effect on %1!";
const ActionFailureJP = "%1には効果なし！";
const ActorDamageEN = "\\C[16]%1 takes %2 points of stamina damage!";
const ActorDamageJP = "\\C[16]%1の体力が%2ダウン！！";
const ActorDrainEN = "%1's %2 are drained by %3 points!"; //currently unused
const ActorDrainJP = "%1's %2 are drained by %3 points!"; //currently unused
const ActorGainEN = "\\C[11]%1 gains %3 %2!";
const ActorGainJP = "\\C[11]%1の%3が%2アップ！";
const ActorLossEN = "\\C[2]%1 loses %3 %2!";
const ActorLossJP = "\\C[2]%1の%3が%2ダウン！";
const ActorNoDamageEN = "%1 takes no damage!";
const ActorNoDamageJP = "%1はダメージを受けていない！！";
const ActorNoHitEN = "\\C[6]Graze! %1 takes %2 points of damage!";
const ActorNoHitJP = "\\C[6]かすった！%1は%2のダメージを受けた！";
const ActorNoDamageGrazeEN = "Graze! %1 takes no damage!";
const ActorNoDamageGrazeJP = "かすった！しかし%1はダメージを受けていない！";
const ActorRecoveryEN = "%1's %2 are restored by %3 points!"; //currently unused
const ActorRecoveryJP = "%1's %2 are restored by %3 points!"; //currently unused
const CriticalToActorEN = "\\C[10]Critical hit!!";
const CriticalToActorJP = "\\C[10]クリティカルダメージ！！！";
const CriticalToEnemyEN = "Critical hit!!";
const CriticalToEnemyJP = "クリティカルヒット！！！";
const DefeatTextEN = "%1 is exhausted!"; //currently unused
const DefeatTextJP = "%1 is exhausted!"; //currently unused
const EmergeTextEN = "%1 appears!"; //currently unused
const EmergeTextJP = "%1 appears!jp"; //currently unused
const EnemyDamageEN = "%1 takes %2 points of stamina damage!";
const EnemyDamageJP = "%1に%2のダメージ！";
const EnemyDrainEN = "%1's %2 are drained by %3 points!"; //currently unused
const EnemyDrainJP = "%1's %2 are drained by %3 points!"; //currently unused
const EnemyGainEN = "%1 gains %3 %2!";
const EnemyGainJP = "%1の%2が%3アップ！";
const EnemyLossEN = "%1 loses %3 %2!";
const EnemyLossJP = "%1の%2が%3ダウン！";
const EnemyNoDamageEN = "\\C[7]%1 takes no damage!";
const EnemyNoDamageJP = "\\C[7]%1にダメージを与えられない！";
const EnemyNoHitEN = "\\C[8]Graze! %1 takes %2 points of damage!";
const EnemyNoHitJP = "\\C[8]かすった！%1に%2のダメージ！";
const EnemyNoDamageGrazeEN = "\\C[7]Graze! %1 takes no damage!";
const EnemyNoDamageGrazeJP = "\\C[7]かすった！しかし%1にはダメージを与えられない！";
const EnemyRecoveryEN = "%1's %2 are restored by %3 points!"; //currently unused
const EnemyRecoveryJP = "%1's %2 are restored by %3 points!"; //currently unused
const EscapeFailureEN = "But they couldn't escape!"; //currently unused
const EscapeFailureJP = "But they couldn't escape!"; //currently unused
const EscapeStartEN = "%1 runs away!"; //currently unused
const EscapeStartJP = "%1 runs away!"; //currently unused
const EvasionTextEN = "%1 evades the attack!";
const EvasionTextJP = "%1は避けた！";
const SuperEffectiveTextEN = "It was super effective!";
const SuperEffectiveTextJP = "効果はバツグンだ！";
const NotEffectiveTextEN = "It was not very effective...";
const NotEffectiveTextJP = "効果は今ひとつのようだ……。";
const SaveFileTextEN = "File";
const SaveFileTextJP = "ﾌｧｲﾙ";
const LoadMessageEN = "Load which file?";
const LoadMessageJP = "ロード";
const PreemptiveTextEN = "%1 is successfully sneak attacked!";
const PreemptiveTextJP = "%1は脱出した！";
const SurpriseTextEN = "%1 is ambushed!";
const SurpriseTextJP = "%1は抵抗出来ない！";
const UseItemTextEN = "%1 uses %2!";
const UseItemTextJP = "%1は%2を使った！";
const VictoryTextEN = "%1 has won!"; //currently unused
const VictoryTextJP = "%1 has won!"; //currently unused
const CounterAttackTextEN = "%1 counterattacks!";
const CounterAttackTextJP = "%1が反撃！";


const WardenNameEN = "Warden Level";
const WardenNameJP = "看守レベル";
const WardenLvlLimitEN = "Warden Level Limit";
const WardenLvlLimitJP = "看守レベル上限";
const SlutNameEN = "Slut Level";
const SlutNameJP = "ビッチレベル";
const StatLevelNameEN = "%1 Level";
const StatLevelNameJP = "%1レベル";
const DayNameEN = "Day";
const DayNameJP = "日数";
const OrderNameEN = "Order";
const OrderNameJP = "秩序";
const OrderChangeNameEN = "Control";
const OrderChangeNameJP = "統制力";
const CorruptionNameEN = "Corruption";
const CorruptionNameJP = "堕落";
const TitlesNameEN = "Titles";
const TitlesNameJP = "称号";
const FundingNameEN = "Funds";
const FundingNameJP = "資金";
const LedgerNameEN = "《 Ledger 》";
const LedgerNameJP = "《 損益 》";
const IncomeNameEN = "General Income";
const IncomeNameJP = "収入";
const BarIncomeNameEN = "Bar Income";
const BarIncomeNameJP = "酒場の収入";
const StoreIncomeNameEN = "Store Income";
const StoreIncomeNameJP = "ショップの収入";
const OutsourcingIncomeNameEN = "Outsourcing Income";
const OutsourcingIncomeNameJP = "残業の収入";
const NerdBlackmailNameEN = "Nerd Blackmail Payment";
const NerdBlackmailNameJP = "オタクのゆすり";
const ExpenseNameEN = "Expense";
const ExpenseNameJP = "経費";
const EstimatedSubsidiesNameEN = "Estimated Subsidies";
const EstimatedSubsidiesNameJP = "支援金";
const EstimatedProfitNameEN = "Est. Profit";
const EstimatedProfitNameJP = "翌日収益";
const EstimatedLossNameEN = "Est. Loss";
const EstimatedLossNameJP = "翌日支出";

const SecretaryModeNameEN = "Secretary Mode";
const SecretaryModeNameJP = "秘書モード";
const WardenModeNameEN = "Warden Mode";
const WardenModeNameJP = "看守モード";
const PrisonerModeNameEN = "Prisoner Mode";
const PrisonerModeNameJP = "囚人モード";

const SecretaryFreePlayModeNameEN = "Secretary Free Play";
const SecretaryFreePlayModeNameJP = "秘書フリーモード";
const WardenFreePlayModeNameEN = "Warden Free Play";
const WardenFreePlayModeNameJP = "看守フリーモード";
const PrisonerFreePlayModeNameEN = "Prisoner Free Play";
const PrisonerFreePlayModeNameJP = "囚人フリーモード";

const SecretaryChallengeRunNameEN = "Secretary Challenge Run";
const SecretaryChallengeRunNameJP = "秘書縛りプレイ";
const WardenChallengeRunNameEN = "Warden Challenge Run";
const WardenChallengeRunNameJP = "看守縛りプレイ";
const PrisonerChallengeRunNameEN = "Prisoner Challenge Run";
const PrisonerChallengeRunNameJP = "囚人縛りプレイ";

const SecretaryDescensionRunNameEN = "Secretary Descension Run";
const SecretaryDescensionRunNameJP = "秘書ディセンションモード";
const WardenDescensionRunNameEN = "Warden Descension Run";
const WardenDescensionRunNameJP = "看守ディセンションモード";
const PrisonerDescensionRunNameEN = "Prisoner Descension Run";
const PrisonerDescensionRunNameJP = "囚人ディセンションモード";



//Right Click Status
const RCMenuSleepQualityNegTwoTextEN = "\\C[7]Karryn barely got any sleep last night... \\C[0](\\C[18]Stats -10%, Charm -20%\\C[0])";
const RCMenuSleepQualityNegTwoTextJP = "\\C[7]昨夜の睡眠：ほとんど眠れなかった……。 \\C[0](\\C[18]全ステータス-10％ / 魅力-20％\\C[0])";
const RCMenuSleepQualityNegOneTextEN = "\\C[7]Karryn did not sleep well last night... \\C[0](\\C[2]Stats -5%, Charm -10%\\C[0])";
const RCMenuSleepQualityNegOneTextJP = "\\C[7]昨夜の睡眠：あまり眠れなかった…。 \\C[0](\\C[2]全ステータス-5％ / 魅力-10％\\C[0])";
const RCMenuSleepQualityZeroTextEN = "\\C[8]Karryn slept alright last night.\\C[0]";
const RCMenuSleepQualityZeroTextJP = "\\C[8]昨夜の睡眠：よく眠れた。\\C[0]";
const RCMenuSleepQualityOneTextEN = "\\C[0]Karryn got a good rest last night. (\\C[24]Stats +3%\\C[0])";
const RCMenuSleepQualityOneTextJP = "\\C[0]昨夜の睡眠：リラックスしてよく眠れた。 (\\C[24]全ステータス+3％\\C[0])";
const RCMenuSleepQualityTwoTextEN = "\\C[0]Karryn is well rested from last night. (\\C[29]Stats +6%\\C[0])";
const RCMenuSleepQualityTwoTextJP = "\\C[0]昨夜の睡眠：非常に質の高い睡眠が取れた。 (\\C[29]全ステータス+6％\\C[0])";
const RCMenuSleepQualityThreeTextEN = "\\C[0]Karryn is very well rested from last night. (\\C[28]Stats +9%\\C[0])";
const RCMenuSleepQualityThreeTextJP = "\\C[0]昨夜の睡眠：最高のコンディションで眠れた。 (\\C[28]全ステータス+9％\\C[0])";

const RCMenuFatigueLevelOneTextEN = "\\C[0]Karryn is starting to feel tired. (\\C[2]Stats -10%\\C[0])";
const RCMenuFatigueLevelOneTextJP = "\\C[0]疲労感：少し疲れを感じ始めている。 (\\C[2]全ステータス-10％\\C[0])";
const RCMenuFatigueLevelTwoTextEN = "\\C[0]Karryn feels tired... (\\C[2]Stats -20%\\C[0])";
const RCMenuFatigueLevelTwoTextJP = "\\C[0]疲労感：疲れを感じている…。 (\\C[2]全ステータス-20％\\C[0])";
const RCMenuFatigueLevelThreeTextEN = "\\C[8]Karryn is starting to feel exhausted... \\C[0](\\C[10]Stats -30%\\C[0])";
const RCMenuFatigueLevelThreeTextJP = "\\C[8]疲労感：疲れている……。 \\C[0](\\C[10]全ステータス-30％\\C[0])";
const RCMenuFatigueLevelFourTextEN = "\\C[7]Karryn is exhausted... \\C[0](\\C[18]Stats -40%, Can't Escape\\C[0])";
const RCMenuFatigueLevelFourTextJP = "\\C[7]疲労感：かなり疲弊している………。 \\C[0](\\C[18]全ステータス-40％ / 撤退不可\\C[0])";
const RCMenuFatigueLevelFiveTextEN = "\\C[7]Karryn is dead tired...... \\C[0](\\C[18]Stats -50%, Can't Escape\\C[0])";
const RCMenuFatigueLevelFiveTextJP = "\\C[7]疲労感：完全に疲労困憊になっている…………。 \\C[0](\\C[18]全ステータス-50％ / 撤退不可\\C[0])";
const RCMenuFatigueLevelFourHardTextEN = "\\C[7]Karryn is exhausted... \\C[0](\\C[18]Stats -40%\\C[0])";
const RCMenuFatigueLevelFourHardTextJP = "\\C[7]疲労感：かなり疲弊している………。 \\C[0](\\C[18]全ステータス-40％\\C[0])";
const RCMenuFatigueLevelFiveHardTextEN = "\\C[7]Karryn is dead tired...... \\C[0](\\C[18]Stats -50%\\C[0])";
const RCMenuFatigueLevelFiveHardTextJP = "\\C[7]疲労感：完全に疲労困憊になっている…………。 \\C[0](\\C[18]全ステータス-50％\\C[0])";

const RCMenuArousedLevelOneTextEN = "\\C[27]Karryn is currently aroused...\\C[0]";
const RCMenuArousedLevelOneTextJP = "\\C[27]興奮状態：発情している…。\\C[0]";
const RCMenuArousedLevelTwoTextEN = "\\C[5]Karryn is currently very aroused...\\C[0]";
const RCMenuArousedLevelTwoTextJP = "\\C[5]興奮状態：完全に発情している……。\\C[0]";

const RCMenuFrustratedLevelOneTextEN = "\\C[27]Karryn is currently sexually frustrated...\\C[0]";
const RCMenuFrustratedLevelOneTextJP = "\\C[27]興奮状態：ムラムラしている…。\\C[0]";
const RCMenuFrustratedLevelTwoTextEN = "\\C[5]Karryn is currently very sexually frustrated...\\C[0]";
const RCMenuFrustratedLevelTwoTextJP = "\\C[5]興奮状態：かなりムラムラしている……。\\C[0]";

const RCMenuNightModeTextEN = "\\C[27]Karryn's scandalous appearance is attracting extra attention...\\C[0]";
const RCMenuNightModeTextJP = "\\C[27]淫らな姿で完全に男の注目を集めてしまっている……。\\C[0]";

const RCMenuLostPantiesTextEN = "\\C[27]Karryn isn't wearing any panties right now.\\C[0]";
const RCMenuLostPantiesTextJP = "\\C[27]ノーパンで巡回中。\\C[0]";

const RCMenuDefiledHalberdTextEN = "\\C[7]Karryn's halberd has been defiled... \\C[0](\\C[18]Unarmed\\C[0])";
const RCMenuDefiledHalberdTextJP = "\\C[7]ハルバード：汚されている……。\\C[0]";

const RCMenuMetalSingleTextEN = "\\C[0]Karryn subdued a metallic inmate today. (\\C[11]Exp Rate +%1%\\C[0])";
const RCMenuMetalSingleTextJP = "\\C[0]メタル囚人を撃退した。 (\\C[11]経験値+%1％\\C[0])";
const RCMenuMetalPluralTextEN = "\\C[0]Karryn subdued %2 metallic inmates today. (\\C[11]Exp Rate +%1%\\C[0])";
const RCMenuMetalPluralTextJP = "\\C[0]メタル囚人を%2人撃退した。 (\\C[11]経験値+%1％\\C[0])";

const RCMenuGiftsSingleTextEN = "\\C[0]Karryn received a gift: \\C[0]";
const RCMenuGiftsSingleTextJP = "\\C[0]受け取った贈呈品： \\C[0]";
const RCMenuGiftsPluralTextEN = "\\C[0]Karryn received gifts: \\C[0]";
const RCMenuGiftsPluralTextJP = "\\C[0]受け取った贈呈品： \\C[0]";

const RCMenuMealOneTextEN = "\\C[0]Karryn ate an artisanal meal: (\\C[11]Exp Rate +50%\\C[0])";
const RCMenuMealOneTextJP = "\\C[0]専属シェフの特別料理を食べた。 (\\C[11]経験値+50％\\C[0])";
const RCMenuMealTwoTextEN = "\\C[0]Karryn ate an artisanal meal: (\\C[11]Stamina Regen, Energy Regen, Willpower Regen +5%\\C[0])";
const RCMenuMealTwoTextJP = "\\C[0]専属シェフの特別料理を食べた。 (\\C[11]体力回復量+5％ / 精力回復量+5％ / 意志力回復量+5％\\C[0])";
const RCMenuMealThreeTextEN = "\\C[0]Karryn ate an artisanal meal: (\\C[11]Stamina +15%, Take less orgasm damage\\C[0])";
const RCMenuMealThreeTextJP = "\\C[0]専属シェフの特別料理を食べた。 (\\C[11]体力+15％ / 絶頂による精力ダメージを軽減\\C[0])";
const RCMenuMealFourTextEN = "\\C[0]Karryn ate an artisanal meal: (\\C[27]Increased chance of getting horny on every turn\\C[0])";
const RCMenuMealFourTextJP = "\\C[0]専属シェフの特別料理を食べた。 (\\C[27]興奮状態になる確率が毎ターン上昇\\C[0])";
const RCMenuMealFiveTextEN = "\\C[0]Karryn ate an artisanal meal: (\\C[27]Boobs & Pussy Sensitivity +50%\\C[0])";
const RCMenuMealFiveTextJP = "\\C[0]専属シェフの特別料理を食べた。 (\\C[27]おっぱい感度+50％ / マンコ感度+50％\\C[0])";
const RCMenuMealSixTextEN = "\\C[0]Karryn ate an artisanal meal: (\\C[11]Strength, Dexterity, Agility +5%\\C[0])";
const RCMenuMealSixTextJP = "\\C[0]専属シェフの特別料理を食べた。 (\\C[11]腕力+5％ / 器用さ+5％ / 素早さ+5％\\C[0])";
const RCMenuMealSevenTextEN = "\\C[0]Karryn ate an artisanal meal: (\\C[11]Fatigue Gain -33%\\C[0])";
const RCMenuMealSevenTextJP = "\\C[0]専属シェフの特別料理を食べた。 (\\C[11]疲労蓄積-33％\\C[0])";
const RCMenuMealEightTextEN = "\\C[0]Karryn ate an artisanal meal: (\\C[11]Petting & Sex Resist +20%\\C[0])";
const RCMenuMealEightTextJP = "\\C[0]専属シェフの特別料理を食べた。 (\\C[11]愛撫耐性+20％ / セックス耐性+20％\\C[0])";
const RCMenuMealNineTextEN = "\\C[0]Karryn ate an artisanal meal: (\\C[11]Enemies Attack Chance---\\C[0])";
const RCMenuMealNineTextJP = "\\C[0]専属シェフの特別料理を食べた。 (\\C[11]敵の攻撃性↓↓↓\\C[0])";
const RCMenuMealTenTextEN = "\\C[0]Karryn ate an artisanal meal: (\\C[27]Mouth & Anal Sensitivity +50%\\C[0])";
const RCMenuMealTenTextJP = "\\C[0]専属シェフの特別料理を食べた。 (\\C[27]クチ感度+50％ / アナル感度+50％\\C[0])";

const RCMenuStoreItemOneTextEN = "\\C[0]Karryn is using store item: (\\C[11]Fatigue Gain -20% \\C[10]Stats -5%\\C[0])";
const RCMenuStoreItemOneTextJP = "\\C[0]ショップのアイテムを使用。 (\\C[11]疲労蓄積-20％ \\C[0]/ \\C[10]能力-5％\\C[0])";
const RCMenuStoreItemTwoTextEN = "\\C[0]Karryn is using store item: (\\C[11]Halberd Crit Rate +25% \\C[10]Halberd Defense -10%\\C[0])";
const RCMenuStoreItemTwoTextJP = "\\C[0]ショップのアイテムを使用。 (\\C[11]ハルバードクリティカル率+25％ \\C[0]/ \\C[10]ハルバード防御力-10％\\C[0])";
const RCMenuStoreItemThreeTextEN = "\\C[0]Karryn is using store item: (\\C[11]Slash & Pierce & Blunt Resist +25% \\C[10]Stamina Regen -2%\\C[0])";
const RCMenuStoreItemThreeTextJP = "\\C[0]ショップのアイテムを使用。 (\\C[11]斬撃耐性・突撃耐性・打撃耐性+25％ \\C[0]/ \\C[10]体力回復量-2％\\C[0])";
const RCMenuStoreItemFourTextEN = "\\C[0]Karryn is using store item: (\\C[11]Strip Resist +30％ \\C[10]Charm (During Battle) -15%\\C[0])";
const RCMenuStoreItemFourTextJP = "\\C[0]ショップのアイテムを使用。 (\\C[11]ストリップ耐性+30％ \\C[0]/ \\C[10]魅力-15％(バトル中)\\C[0])";
const RCMenuStoreItemFiveTextEN = "\\C[0]Karryn is using store item: (\\C[11]Charm (During Battle) +15% \\C[10]Talk & Strip Resist -15%\\C[0])";
const RCMenuStoreItemFiveTextJP = "\\C[0]ショップのアイテムを使用。 (\\C[11]魅力+15％(バトル中) \\C[0]/ \\C[10]猥談耐性・ストリップ耐性-15％\\C[0])";

const PrisonLevelNameEN = "Level";
const PrisonLevelNameJP = "LEVEL";
const PrisonLevelStatusUnknownEN = "???????";
const PrisonLevelStatusUnknownJP = "???????";
const PrisonLevelStatusAnarchyEN = "ANARCHY";
const PrisonLevelStatusAnarchyJP = "無法状態";
const PrisonLevelStatusSubjugatedEN = "Subjugated";
const PrisonLevelStatusSubjugatedJP = "制圧";
const PrisonLevelStatusRiotingEN = "RIOTING";
const PrisonLevelStatusRiotingJP = "暴動発生中!!";

const PrisonMapLevelNameEN = "Level %1: ";
const PrisonMapLevelNameJP = "【LEVEL %1】 ";
const PrisonMapOutsideNameEN = "Fort Ganon: ";
const PrisonMapOutsideNameJP = "【要塞ガナン】 ";
const PrisonMapUnknownNameEN = "Somewhere";
const PrisonMapUnknownNameJP = "要塞内";
const PrisonMapUndiscoveredNameEN = "???";
const PrisonMapUndiscoveredNameJP = "???";
const PrisonMapWeddingNameEN = "Middle of My Wedding";
const PrisonMapWeddingNameJP = "結婚式の最中";
const PrisonMapLevelFiveNameEN = "Level 5";
const PrisonMapLevelFiveNameJP = "LEVEL 5";
const PrisonMapEndlessPrisonNameEN = "Endless Prison Battle";
const PrisonMapEndlessPrisonNameJP = "果てしなきプリズンバトル";
const PrisonMapEndlessHellNameEN = "Endless Hell Battle";
const PrisonMapEndlessHellNameJP = "終わりなきヘルバトル";
const PrisonMapCustomNameEN = "Custom Battle";
const PrisonMapCustomNameJP = "カスタムバトル";


//カリンのレベル
const KissingLevelEN = "Kissing Level";
const KissingLevelJP = "キスレベル";
const PettingLevelEN = "Petting Level";
const PettingLevelJP = "愛撫レベル";
const HandjobLevelEN = "Handjob Level";
const HandjobLevelJP = "手コキレベル";
const BlowjobLevelEN = "Blowjob Level";
const BlowjobLevelJP = "フェラレベル";
const FootjobLevelEN = "Footjob Level";
const FootjobLevelJP = "足コキレベル";
const RimjobLevelEN = "Rimjob Level";
const RimjobLevelJP = "ケツ舐めレベル";
const TittyFuckLevelEN = "Titjob Level";
const TittyFuckLevelJP = "パイズリレベル";
const PussyLevelEN = "Vaginal Sex Level";
const PussyLevelJP = "マンコセックスレベル";
const AnalLevelEN = "Anal Sex Level";
const AnalLevelJP = "アナルセックスレベル";
const MasturbationLevelEN = "Masturbation Level";
const MasturbationLevelJP = "オナニーレベル";
const SadismLevelEN = "Sadism Level";
const SadismLevelJP = "サドレベル";
const MasochismLevelEN = "Masochism Level";
const MasochismLevelJP = "マゾレベル";

const MouthSensitivityEN = "Mouth Sensitivity";
const MouthSensitivityJP = "クチ感度";
const FingerSensitivityEN = "Hand Sensitivity";
const FingerSensitivityJP = "手の感度";
const BoobsSensitivityEN = "Boobs Sensitivity";
const BoobsSensitivityJP = "おっぱい感度";
const NipplesSensitivityEN = "Nipples Sensitivity";
const NipplesSensitivityJP = "チクビ感度";
const ClitorisSensitivityEN = "Clitoris Sensitivity";
const ClitorisSensitivityJP = "クリトリス感度";
const PussySensitivityEN = "Pussy Sensitivity";
const PussySensitivityJP = "マンコ感度";
const ButtSensitivityEN = "Butt Sensitivity";
const ButtSensitivityJP = "ケツ感度";
const AnalSensitivityEN = "Anal Sensitivity";
const AnalSensitivityJP = "アナル感度";
const FootSensitivityEN = "Feet Sensitivity";
const FootSensitivityJP = "足の感度";
const TalkSensitivityEN = "Talk Sensitivity";
const TalkSensitivityJP = "猥談感度";
const SightSensitivityEN = "Sight Sensitivity";
const SightSensitivityJP = "視姦感度";
const SwallowSensitivityEN = "Swallow Sensitivity";
const SwallowSensitivityJP = "ごっくん感度";
const PussyCreampieSensitivityEN = "Pussy Creampie Sensitivity";
const PussyCreampieSensitivityJP = "マンコ中出し感度";
const AnalCreampieSensitivityEN = "Anal Creampie Sensitivity";
const AnalCreampieSensitivityJP = "アナル中出し感度";
const BukkakeSensitivityEN = "Bukkake Sensitivity";
const BukkakeSensitivityJP = "ぶっかけ感度";
const ButtSpankingSensitivityEN = "Butt Spanking Sensitivity";
const ButtSpankingSensitivityJP = "スパンキング感度";

//Status Menu
const StatusMenuPrimaryEN = "Primary";
const StatusMenuPrimaryJP = "ステータス①";
const StatusMenuSecondaryEN = "Secondary";
const StatusMenuSecondaryJP = "ステータス②";
const StatusMenuProfileEN = "Profile";
const StatusMenuProfileJP = "経歴";
const StatusMenuTertiaryEN = "Tertiary";
const StatusMenuTertiaryJP = "セックス";
const StatusMenuRecordsEN = "Records";
const StatusMenuRecordsJP = "体験記録";
const StatusMenuDesiresEN = "Desires";
const StatusMenuDesiresJP = "必須性欲";
const StatusMenuEffectsEN = "Condition";
const StatusMenuEffectsJP = "状態";

const StatusMenuStatsEN = "Stats";
const StatusMenuStatsJP = "《 身体能力 》";
const StatusMenuStatLevelsEN = "《 Stat Levels 》";
const StatusMenuStatLevelsJP = "《 ステータスレベル 》";
const StatusMenuAttributesEN = "《 Attributes 》";
const StatusMenuAttributesJP = "《 戦闘能力 》";
const StatusMenuResistsEN = "《 Resists 》";
const StatusMenuResistsJP = "《 耐性 》";
const StatusMenuLevelsEN = "《 Sex Levels 》";
const StatusMenuLevelsJP = "《 性レベル 》";
const StatusMenuSensitivitiesEN = "《 Sensitivities 》";
const StatusMenuSensitivitiesJP = "《 性感度 》";

const StatusMenuMouthDesireReqEN = "《 Mouth Desire Requirements 》";
const StatusMenuMouthDesireReqJP = "《 必須口欲 》";
const StatusMenuBoobsDesireReqEN = "《 Boobs Desire Requirements 》";
const StatusMenuBoobsDesireReqJP = "《 必須乳欲 》";
const StatusMenuPussyDesireReqEN = "《 Pussy Desire Requirements 》";
const StatusMenuPussyDesireReqJP = "《 必須膣欲 》";
const StatusMenuButtDesireReqEN = "《 Butt Desire Requirements 》";
const StatusMenuButtDesireReqJP = "《 必須尻欲 》";
const StatusMenuCockDesireReqEN = "《 Cock Desire Requirements 》";
const StatusMenuCockDesireReqJP = "《 必須棒欲 》";

const ProfileNameTextEN = "Name:";
const ProfileNameTextJP = "名前：";
const ProfileAgeTextEN = "Age:";
const ProfileAgeTextJP = "年齢：";
const ProfileThreeSizesTextEN = "Three Sizes:";
const ProfileThreeSizesTextJP = "スリーサイズ：";
const ProfileBioTextEN = "Bio";
const ProfileBioTextJP = "経歴";

const ProfileNameEN = "Karryn";
const ProfileNameJP = "カリン";
const ProfileThreeSizesEN = "110(K Cup)-59-100cm (43-23-39 inches)";
const ProfileThreeSizesJP = "110cm (Ｋカップ) / 59cm / 100cm";
const ProfileThreeSizesHCupEN = "(H Cup)96-59-100cm (38-23-39 inches)";
const ProfileThreeSizesHCupJP = "96cm (Ｈカップ) / 59cm / 100cm";
const ProfileThreeSizesPCupEN = "(P Cup)134-59-100cm (53-23-39 inches)";
const ProfileThreeSizesPCupJP = "134cm (Ｐカップ) / 59cm / 100cm";
const ProfileBio_One_EN = [
"Karryn is a prodigy who overwhelmed her competition in talent and achievements ever since she could walk.",
"Her spectacular results allowed her to quickly catapult up to the ranks of the elites within the Zanados Empire.",
"Before long, she had become the Emperor's exclusive secretary, truly making her an elite without peer.",
"Further blessed by the gods with a beautiful face and shapely body, her confidence and pride are also second to none."
];
const ProfileBio_One_JP = [
"ザナドス帝国皇帝の直属秘書として名を馳せるまで、まさしく俊足の早さで到達した正真正銘のエリート。",
"幼少期から優秀な成績と身体能力で他を圧倒する才能で、キャリアの階段を意図もたやすく上り詰めていった。",
"また、その恵まれた美貌と体型に絶対的な自信を持っているため、プライドが非常に高い。"
];

const ProfileRecordFirstEN = "First: ";
const ProfileRecordFirstJP = "初体験：";
const ProfileRecordLastEN = "Last: ";
const ProfileRecordLastJP = "最　近：";
const ProfileRecordSecretEN = "\\C[7]Secret\\C[0]";
const ProfileRecordSecretJP = "\\C[7]ヒミツ\\C[0]";
const ProfileRecordNeverEN = "\\C[29]Never\\C[0]";
const ProfileRecordNeverJP = "\\C[29]未経験\\C[0]";

const ProfileRecordKissEN = "Kiss";
const ProfileRecordKissJP = "キス";
const ProfileRecordSexEN = "Sex";
const ProfileRecordSexJP = "セックス";
const ProfileRecordAnalEN = "Anal";
const ProfileRecordAnalJP = "アナル";
const ProfileRecordHandjobEN = "Handjob";
const ProfileRecordHandjobJP = "手コキ";
const ProfileRecordBlowjobEN = "Blowjob";
const ProfileRecordBlowjobJP = "フェラチオ";
const ProfileRecordTittyFuckEN = "Titjob";
const ProfileRecordTittyFuckJP = "パイズリ";
const ProfileRecordFootjobEN = "Footjob";
const ProfileRecordFootjobJP = "足コキ";
const ProfileRecordRimjobEN = "Rimjob";
const ProfileRecordRimjobJP = "ケツ舐め";
const ProfileRecordSwallowEN = "Cum Swallowing";
const ProfileRecordSwallowJP = "精飲";
const ProfileRecordPussyCreampieEN = "Pussy Creampie";
const ProfileRecordPussyCreampieJP = "中出し";
const ProfileRecordAnalCreampieEN = "Anal Creampie";
const ProfileRecordAnalCreampieJP = "アナル中出し";
const ProfileRecordBodyBukkakeEN = "Body Bukkake";
const ProfileRecordBodyBukkakeJP = "体へのぶっかけ";
const ProfileRecordFaceBukkakeEN = "Cum Facial";
const ProfileRecordFaceBukkakeJP = "顔射";

const ProfileRecordCunnilingusEN = "Cunnilingus";
const ProfileRecordCunnilingusJP = "クンニ";
const ProfileRecordSuckFingersEN = "Mouth Petting";
const ProfileRecordSuckFingersJP = "指しゃぶり";
const ProfileRecordButtSpankEN = "Butt Spanking";
const ProfileRecordButtSpankJP = "スパンキング";
const ProfileRecordBoobsPettingEN = "Boobs Petting";
const ProfileRecordBoobsPettingJP = "おっぱい愛撫";
const ProfileRecordNipplesPettingEN = "Nipples Petting";
const ProfileRecordNipplesPettingJP = "乳首愛撫";
const ProfileRecordClitPettingEN = "Clit Petting";
const ProfileRecordClitPettingJP = "クリ愛撫";
const ProfileRecordPussyPettingEN = "Pussy Petting";
const ProfileRecordPussyPettingJP = "マンコ愛撫";
const ProfileRecordButtPettingEN = "Butt Petting";
const ProfileRecordButtPettingJP = "ケツ愛撫";
const ProfileRecordAnalPettingEN = "Anal Petting";
const ProfileRecordAnalPettingJP = "アナル愛撫";
const ProfileRecordClitToyEN = "Clit Toy";
const ProfileRecordClitToyJP = "クリのオモチャ";
const ProfileRecordPussyToyEN = "Pussy Toy";
const ProfileRecordPussyToyJP = "マンコのオモチャ";
const ProfileRecordAnalToyEN = "Anal Toy";
const ProfileRecordAnalToyJP = "アナルのオモチャ";
const ProfileRecordPussySexEN = "Vaginal Sex";
const ProfileRecordPussySexJP = "マンコセックス";
const ProfileRecordAnalSexEN = "Anal Sex";
const ProfileRecordAnalSexJP = "アナルセックス";


const ProfileRecordFirstKissEN = "Got my first kiss taken by \\C[31]%2\\C[0] in %3 on \\C[26]Day %1\\C[0].";
const ProfileRecordFirstKissJP = "初キスは、\\C[26]%1日目\\C[0]の%3で\\C[31]%2\\C[0]と交わした。";
const ProfileRecordFirstKissWasPenisEN = "Had my maiden kiss taken by \\C[31]%2\\C[0]'s cock in %3 on \\C[26]Day %1\\C[0].";
const ProfileRecordFirstKissWasPenisJP = "\\C[26]%1日目\\C[0]に%3で経験した初キスは\\C[31]%2\\C[0]のチンポの亀頭だった。";
const ProfileRecordFirstKissWasAnusEN = "Got my virgin kiss taken by \\C[31]%2\\C[0]'s anus in %3 on \\C[26]Day %1\\C[0].";
const ProfileRecordFirstKissWasAnusJP = "記念すべきファーストキスは、\\C[26]%1日目\\C[0]に%3で舐めた\\C[31]%2\\C[0]のケツ穴だった。";

const ProfileRecordLastKissEN = "Kissed \\C[31]%2\\C[0] in %3 on \\C[26]Day %1\\C[0].";
const ProfileRecordLastKissJP = "\\C[26]%1日目\\C[0]に%3で\\C[31]%2\\C[0]とキスした。";
const ProfileRecordFirstSexEN = "Lost my virginity to \\C[31]%2\\C[0] in %3 on \\C[26]Day %1\\C[0].";
const ProfileRecordFirstSexJP = "\\C[26]%1日目\\C[0]、%3で\\C[31]%2\\C[0]に処女を奪われた。";
const ProfileRecordFirstPussySexWasDildoEN = "Lost my virginity to \\C[31]%2\\C[0]'s dildo in %3 on \\C[26]Day %1\\C[0].";
const ProfileRecordFirstPussySexWasDildoJP = "\\C[26]%1日目\\C[0]、%3で\\C[31]%2\\C[0]のディルドに処女を奪われた。";
const ProfileRecordLastSexEN = "Had sex with \\C[31]%2\\C[0] in %3 on \\C[26]Day %1\\C[0].";
const ProfileRecordLastSexJP = "\\C[26]%1日目\\C[0]に%3で\\C[31]%2\\C[0]とヤッた。";
const ProfileRecordFirstAnalEN = "Lost my anal virginity to \\C[31]%2\\C[0] in %3 on \\C[26]Day %1\\C[0].";
const ProfileRecordFirstAnalJP = "\\C[26]%1日目\\C[0]、%3で\\C[31]%2\\C[0]にアナル処女を奪われた。";
const ProfileRecordLastAnalEN = "Had anal sex with \\C[31]%2\\C[0] in %3 on \\C[26]Day %1\\C[0].";
const ProfileRecordLastAnalJP = "\\C[26]%1日目\\C[0]に%3で\\C[31]%2\\C[0]とケツマンコでヤッた。";
const ProfileRecordFirstHandjobEN = "Jerked off my first dick on \\C[26]Day %1\\C[0] in %3 using \\C[31]%2\\C[0]'s cock.";
const ProfileRecordFirstHandjobJP = "\\C[26]%1日目\\C[0]、%3で初めて手コキしたのは\\C[31]%2\\C[0]のチンポだった。";
const ProfileRecordLastHandjobEN = "Gave a handjob to \\C[31]%2\\C[0] in %3 on \\C[26]Day %1\\C[0].";
const ProfileRecordLastHandjobJP = "\\C[26]%1日目\\C[0]に%3で\\C[31]%2\\C[0]の勃起チンポをシコった。";
const ProfileRecordFirstBlowjobEN = "Sucked my first dick on \\C[26]Day %1\\C[0] in %3 using \\C[31]%2\\C[0]'s cock.";
const ProfileRecordFirstBlowjobJP = "\\C[26]%1日目\\C[0]、%3でしゃぶった\\C[31]%2\\C[0]のチンポが初フェラだった。";
const ProfileRecordLastBlowjobEN = "Blew \\C[31]%2\\C[0] in %3 on \\C[26]Day %1\\C[0].";
const ProfileRecordLastBlowjobJP = "\\C[26]%1日目\\C[0]に%3で\\C[31]%2\\C[0]の勃起チンポをしゃぶった。";
const ProfileRecordFirstTittyFuckEN = "Sandwiched my first cock on \\C[26]Day %1\\C[0] using \\C[31]%2\\C[0]'s cock in %3.";
const ProfileRecordFirstTittyFuckJP = "\\C[26]%1日目\\C[0]、%3で\\C[31]%2\\C[0]に初パイズリをさせられた。";
const ProfileRecordLastTittyFuckEN = "Titty fucked \\C[31]%2\\C[0] in %3 on \\C[26]Day %1\\C[0].";
const ProfileRecordLastTittyFuckJP = "\\C[26]%1日目\\C[0]に%3で\\C[31]%2\\C[0]のチンポをおっぱいで気持ち良くした。";

const ProfileRecordFirstFootjobEN = "Rubbed my first dick using my feet on \\C[26]Day %1\\C[0] in %3 using \\C[31]%2\\C[0]'s cock.";
const ProfileRecordFirstFootjobJP = "\\C[26]%1日目\\C[0]、%3で\\C[31]%2\\C[0]のチンポを足でコスった。";
const ProfileRecordLastFootjobEN = "Gave a footjob to \\C[31]%2\\C[0] in %3 on \\C[26]Day %1\\C[0].";
const ProfileRecordLastFootjobJP = "\\C[26]%1日目\\C[0]に%3で\\C[31]%2\\C[0]のチンポを足でシゴいてやった。";
const ProfileRecordFirstRimjobEN = "Performed my first anilingus on \\C[26]Day %1\\C[0] in %3 on \\C[31]%2\\C[0].";
const ProfileRecordFirstRimjobJP = "\\C[26]%1日目\\C[0]、%3で\\C[31]%2\\C[0]に初めてアナルを舐めさせられた。";
const ProfileRecordLastRimjobEN = "Tossed \\C[31]%2\\C[0]'s salad in %3 on \\C[26]Day %1\\C[0].";
const ProfileRecordLastRimjobJP = "\\C[26]%1日目\\C[0]に%3で\\C[31]%2\\C[0]のケツ穴を舐め回してあげた。";

const ProfileRecordFirstBukkakeEN = "Got bukkaked for the first time on \\C[26]Day %1\\C[0] from \\C[31]%2\\C[0] in %3.";
const ProfileRecordFirstBukkakeJP = "\\C[26]%1日目\\C[0]、%3で\\C[31]%2\\C[0]から初めて体にぶっかけられた。";
const ProfileRecordLastBukkakeEN = "Got a cum shower from \\C[31]%2\\C[0] in %3 on \\C[26]Day %1\\C[0].";
const ProfileRecordLastBukkakeJP = "\\C[26]%1日目\\C[0]に%3で\\C[31]%2\\C[0]のザーメンを体に浴びた。";
const ProfileRecordFirstFaceBukkakeEN = "Got my first facial on \\C[26]Day %1\\C[0] from \\C[31]%2\\C[0] in %3.";
const ProfileRecordFirstFaceBukkakeJP = "\\C[26]%1日目\\C[0]、%3で\\C[31]%2\\C[0]から初めて顔射された。";
const ProfileRecordLastFaceBukkakeEN = "Welcomed \\C[31]%2\\C[0]'s semen on my face in %3 on \\C[26]Day %1\\C[0].";
const ProfileRecordLastFaceBukkakeJP = "\\C[26]%1日目\\C[0]に%3で\\C[31]%2\\C[0]のザーメンを顔面で受け入れた。";

const ProfileRecordFirstSwallowEN = "Tasted my first cum on \\C[26]Day %1\\C[0] in %3 from swallowing \\C[31]%2\\C[0]'s cum.";
const ProfileRecordFirstSwallowJP = "\\C[26]%1日目\\C[0]、%3で初めて飲んだのは\\C[31]%2\\C[0]の精子だった。";
const ProfileRecordLastSwallowEN = "Swallowed \\C[31]%2\\C[0]'s cum in %3 on \\C[26]Day %1\\C[0].";
const ProfileRecordLastSwallowJP = "\\C[26]%1日目\\C[0]に%3で\\C[31]%2\\C[0]が口内に発射したザーメンをごっくんした。";
const ProfileRecordFirstPussyCreampieEN = "Let \\C[31]%2\\C[0] creampie inside me in %3 on \\C[26]Day %1\\C[0].";
const ProfileRecordFirstPussyCreampieJP = "ついに\\C[26]%1日目\\C[0]、%3で\\C[31]%2\\C[0]に初めて膣内射精をされた。";
const ProfileRecordLastPussyCreampieEN = "Received a big creampie from \\C[31]%2\\C[0] in %3 on \\C[26]Day %1\\C[0].";
const ProfileRecordLastPussyCreampieJP = "\\C[26]%1日目\\C[0]、%3で\\C[31]%2\\C[0]が膣奥にザーメンをぶちまけていった。";
const ProfileRecordFirstAnalCreampieEN = "Let \\C[31]%2\\C[0] cum inside my butt in %3 on \\C[26]Day %1\\C[0].";
const ProfileRecordFirstAnalCreampieJP = "とうとう\\C[26]%1日目\\C[0]、%3で\\C[31]%2\\C[0]に初めて腸内射精された。";
const ProfileRecordLastAnalCreampieEN = "Got creampied up my butt by \\C[31]%2\\C[0] in %3 on \\C[26]Day %1\\C[0].";
const ProfileRecordLastAnalCreampieJP = "\\C[26]%1日目\\C[0]に%3で\\C[31]%2\\C[0]がケツ奥へザーメンを放出していった。";


const StatusRecordDaysSingularEN = "day";
const StatusRecordDaysSingularJP = "日";
const StatusRecordDaysPluralEN = "total days";
const StatusRecordDaysPluralJP = "日";
const StatusRecordTimesSingularEN = "time";
const StatusRecordTimesSingularJP = "回";
const StatusRecordTimesPluralEN = "times";
const StatusRecordTimesPluralJP = "回";
const StatusRecordJustPeopleSingularEN = "person";
const StatusRecordJustPeopleSingularJP = "人";
const StatusRecordJustPeoplePluralEN = "people";
const StatusRecordJustPeoplePluralJP = "人";
const StatusRecordDifferentPeopleSingularEN = "person";
const StatusRecordDifferentPeopleSingularJP = "人";
const StatusRecordDifferentPeoplePluralEN = "different people";
const StatusRecordDifferentPeoplePluralJP = "人";

const StatusRecordDateEN = "Spent a total of %1 days in the prison.";
const StatusRecordDateJP = "私が監獄に着任してから%1日が経過した。";
const StatusRecordDateSlutEN = "Spent %1 wonderful days in Fort Ganon.♥";
const StatusRecordDateSlutJP = "私がガナンで暮らしてから%1日も経っちゃった♥";
const StatusRecordFightEN = "Subdued %1 people and lost %2 times.";
const StatusRecordFightJP = "戦闘で%1人を撃退したが、%2回は敗北してしまった。";
const StatusRecordFightSlutEN = "Subdued %1 people and only 'lost' %2 times.♥";
const StatusRecordFightSlutJP = "バトルで%1人もやっつけて来たけど、%2回は負けちゃった♥";
const StatusRecordFightSubduedOnlyEN = "Subdued %1 people.";
const StatusRecordFightSubduedOnlyJP = "戦闘で%1人を撃退した。";
const StatusRecordStripEN = "Got my clothes stripped off %1 times and panties taken off %2 times by other people.";
const StatusRecordStripJP = "服を%1回脱がされた。その内、パンティは%2回脱がされた。";
const StatusRecordStripSlutEN = "Let my clothes get stripped off %1 times and panties taken off %2 times by other people.♥";
const StatusRecordStripSlutJP = "みんなの前で%1回脱いで、%2回はノーパンになっちゃった♥";
const StatusRecordKissEN = "Got kissed %1 times by %2 different people.";
const StatusRecordKissJP = "キスを%2人の男と交わした。合計で%1回キスをしている。";
const StatusRecordKissSlutEN = "Kissed %1 times with %2 different people.♥";
const StatusRecordKissSlutJP = "私とベロチューしたオトコは%2人♥全部で%1回もチュッチュしちゃってる♥";
const StatusRecordBoobsPettedEN = "Got my boobs squeezed %1 times by %2 different people.";
const StatusRecordBoobsPettedJP = "私の胸を%2人の男に揉まれた。合計で%1回おっぱいを揉まれている。";
const StatusRecordBoobsPettedSlutEN = "Let my boobs get squeezed %1 times by %2 different people.♥";
const StatusRecordBoobsPettedSlutJP = "私のエロ乳を揉みしだいたオトコは%2人♥全部で%1回も揉んで貰ってるわね♥";
const StatusRecordNipplesPettedEN = "Got my nipples pinched %1 times by %2 different people.";
const StatusRecordNipplesPettedJP = "私の乳首を%2人の男につままれた。合計で%1回乳首をつままれている。";
const StatusRecordNipplesPettedSlutEN = "Let my nipples get pinched %1 times by %2 different people.♥";
const StatusRecordNipplesPettedSlutJP = "私のスケベな乳首をつまんだオトコは%2人♥全部で%1回も弄ばれてるのね♥";
const StatusRecordClitPettedEN = "Got my clit touched %1 times by %2 different people.";
const StatusRecordClitPettedJP = "私のクリトリスを%2人の男にイジられた。合計で%1回クリをイジられている。";
const StatusRecordClitPettedSlutEN = "Let my clit get touched %1 times by %2 different people.♥";
const StatusRecordClitPettedSlutJP = "私のクリちゃんをシコったオトコは%2人♥全部で%1回もイジってくれてるわ♥";
const StatusRecordPussyPettedEN = "Got my pussy fingered %1 times by %2 different people.";
const StatusRecordPussyPettedJP = "私のマンコを%2人の男にイジられた。合計で%1回マンコをイジられている。";
const StatusRecordPussyPettedSlutEN = "Let my pussy get fingered %1 times by %2 different people.♥";
const StatusRecordPussyPettedSlutJP = "私のドスケベマンコをイジったオトコは%2人♥全部で%1回もマンコイジりを味わったのね♥";
const StatusRecordButtPettedEN = "Got my butt felt up %1 times by %2 different people.";
const StatusRecordButtPettedJP = "私のお尻を%2人の男に鷲掴みにされた。合計で%1回尻を鷲掴みされている。";
const StatusRecordButtPettedSlutEN = "Let my butt get felt up %1 times by %2 different people.♥";
const StatusRecordButtPettedSlutJP = "私のデカケツにセクハラしたオトコは%2人♥全部で%1回もケツハラしてくれてるわ♥";
const StatusRecordAnalPettedEN = "Got my butthole fingered %1 times by %2 different people.";
const StatusRecordAnalPettedJP = "私のアナルを%2人の男に指でほじられた。合計で%1回アナルをほじられている。";
const StatusRecordAnalPettedSlutEN = "Let my butthole get fingered %1 times by %2 different people.♥";
const StatusRecordAnalPettedSlutJP = "私のケツ穴をホジくりまくったオトコは%2人♥全部で%1回もアナホジして貰えてるの♥";
const StatusRecordMasturbateEN = "Masturbated %1 times and saw other people masturbate %2 times.";
const StatusRecordMasturbateJP = "私がしたオナニーは%1回。男達のオナニーを目撃したのは%2回。";
const StatusRecordMasturbateSlutEN = "Masturbated only %1 times and saw other people jerk off %2 times.♥";
const StatusRecordMasturbateSlutJP = "色んな場所で%1回もオナって来たわ♥オトコ達がシコッてる姿は%2回も見てるんだから♥";
const StatusRecordSexPartnersEN = "Had %1 different sexual partners.";
const StatusRecordSexPartnersJP = "私と性的な関係がある男は%1人。";
const StatusRecordSexPartnersSlutEN = "Only had %1 different sexual partners.♥";
const StatusRecordSexPartnersSlutJP = "私とエロいコトした男は全部で%1人もいるのよ♥";
const StatusRecordHandjobEN = "Gave %1 handjobs to %2 different people.";
const StatusRecordHandjobJP = "私が手コキしたチンポは%2本。合計で%1回手コキした。";
const StatusRecordHandjobSlutEN = "Gave only %1 handjobs to %2 different people.♥";
const StatusRecordHandjobSlutJP = "私がシコったチンポは%2本♥全部で%1回もチンコキしてあげちゃった♥";
const StatusRecordBlowjobEN = "Gave %1 blowjobs to %2 different people.";
const StatusRecordBlowjobJP = "私がしゃぶったチンポは%2本。合計で%1回フェラチオをした。";
const StatusRecordBlowjobSlutEN = "Gave only %1 blowjobs to %2 different people.♥";
const StatusRecordBlowjobSlutJP = "私がしゃぶり尽くしたチンポは%2本♥全部で%1回もチンしゃぶを味わってるわ♥";
const StatusRecordTittyFuckEN = "Got titty fucked %1 times by %2 different people.";
const StatusRecordTittyFuckJP = "私がおっぱいで挟んだチンポは%2本。合計で%1回パイズリをした。";
const StatusRecordTittyFuckSlutEN = "Gave only %1 titty fucks to %2 different people.♥";
const StatusRecordTittyFuckSlutJP = "私の淫乱おっぱいで気持ち良くしてあげたチンポは%2本♥全部で%1回もパイコキして来たのね♥";
const StatusRecordFootjobEN = "Gave %1 footjobs to %2 different people.";
const StatusRecordFootjobJP = "私が足でシゴいたチンポは%2本。合計で%1回足コキをした。";
const StatusRecordFootjobSlutEN = "Gave only %1 footjobs to %2 different people.♥";
const StatusRecordFootjobSlutJP = "私に足でシコられたチンポは%2本♥全部で%1回もチンポを踏みまくってやったわ♥";
const StatusRecordRimjobEN = "Gave %1 rimjobs to %2 different people.";
const StatusRecordRimjobJP = "私がアナルを舐めた男は%2人。合計で%1回ケツ舐めをした。";
const StatusRecordRimjobSlutEN = "Gave only %1 rimjobs to %2 different people.♥";
const StatusRecordRimjobSlutJP = "私にケツ穴を舐めさせてくれた殿方は%2人♥全部で%1回もケツフェラさせて頂いたわ♥";
const StatusRecordCunniEN = "Received cunnilingus %1 times from %2 different people.";
const StatusRecordCunniJP = "私をクンニした男は%2人。合計で%1回マンコを舐められている。";
const StatusRecordCunniSlutEN = "Received cunnilingus only %1 times from %2 different people.♥";
const StatusRecordCunniSlutJP = "私のエロエロ欲求不マンコを舐めたオトコは%2人♥全部で%1回も私のマン汁を味わってくれたのね♥";
const StatusRecordSpankedEN = "Got spanked %1 times by %2 different people.";
const StatusRecordSpankedJP = "私をスパンキングした男は%2人。合計で%1回ケツを叩かれている。";
const StatusRecordSpankedSlutEN = "Got spanked only %1 times by %2 different people.♥";
const StatusRecordSpankedSlutJP = "私のエロケツを叩いてくれた紳士は%2人♥全部で%1回もケツにお仕置きして貰ってるの♥";
const StatusRecordPussySexEN = "Got fucked in my pussy %1 times by %2 different people.";
const StatusRecordPussySexJP = "私とセックスした男は%2人。合計%1回マンコファックしている。";
const StatusRecordPussySexSlutEN = "Got fucked in my pussy only %1 times by %2 different people.♥";
const StatusRecordPussySexSlutJP = "私の淫乱マンコにチンポをハメたオトコは%2人♥全部で%1回もマン奥で勃起チンポを楽しんで来たのね♥♥";
const StatusRecordAnalSexEN = "Got fucked in my butt %1 times by %2 different people.";
const StatusRecordAnalSexJP = "私とアナルセックスした男は%2人。合計%1回アナルファックしている。";
const StatusRecordAnalSexSlutEN = "Got fucked in my butt only %1 times by %2 different people.♥";
const StatusRecordAnalSexSlutJP = "私の変態ケツマンコとパコッたオトコは%2人♥全部で%1回もケツ穴にチンポを出し挿れして喜んじゃった♥♥";
const StatusRecordGangbangEN = "Got double penetrated %1 times and gangbanged %2 times.";
const StatusRecordGangbangJP = "私と男達との二穴ファックは%1回で、輪姦セックスは%2回目。";
const StatusRecordGangbangSlutEN = "Got double penetrated only %1 times and gangbanged only %2 times.♥";
const StatusRecordGangbangSlutJP = "２つのエロ穴にチンポをハメて来てかれこれ%1回目♥複数のオトコとの乱交で数えるともう%2回目になるわね♥♥";
const StatusRecordOrgasmEN = "Came %1 times in front of %2 different people, squirting %3 ml of fluids.";
const StatusRecordOrgasmJP = "私がイカせた男は%2人。全部で%1回チンポを射精させている。その合計ザーメン量は%3ml。";
const StatusRecordOrgasmSlutEN = "Came %1 whole times in front of %2 different people, squirting %3 ml of fluids.♥";
const StatusRecordOrgasmSlutJP = "私でイッちゃったオトコは%2人♥勃起チンポで数えると全部で%1本♥ザーメンはトータル%3mlで大量ね♥♥";
const StatusRecordSwallowEN = "Swallowed cum %1 times for a total of %3 ml of cum from %2 different people.";
const StatusRecordSwallowJP = "私がザーメンを飲んだチンポは%2本。全部で%1回精飲している。その合計ごっくん量は%3ml。";
const StatusRecordSwallowSlutEN = "Swallowed cum only %1 times for a total of %3 ml of cum from %2 different people.♥";
const StatusRecordSwallowSlutJP = "チンポミルクを飲み干したチンポは%2本♥%1回ごっくんした内、トータルで%3mlも美味しく味わって来たのね♥♥";
const StatusRecordPussyCreampieEN = "Got creampied in my pussy %1 times for a total of %3 ml of cum from %2 different people.";
const StatusRecordPussyCreampieJP = "私のマンコに中出しした男は%2人。全部で%1回膣内射精されている。合計%3mlのザーメンが膣を満たした。";
const StatusRecordPussyCreampieSlutEN = "Got creampied in my pussy only %1 times for a total of %3 ml of cum from %2 different people.♥";
const StatusRecordPussyCreampieSlutJP = "私の欲情マンコに中出ししたオトコは%2人♥膣奥に%1回も排泄されたチンポ汁は全部で%3mlになるわ♥♥♥";
const StatusRecordAnalCreampieEN = "Got creampied in my butt %1 times for a total of %3 ml of cum from %2 different people.";
const StatusRecordAnalCreampieJP = "私のアナルに中出しした男は%2人。全部で%1回腸内射精されている。合計%3mlのザーメンがお腹を満たした。";
const StatusRecordAnalCreampieSlutEN = "Got creampied in my butt only %1 times for a total of %3 ml of cum from %2 different people.♥";
const StatusRecordAnalCreampieSlutJP = "私のチンコキ専用アナルで中出ししたオトコは%2人♥♥%1回も腸奥に放出されて、気が付けばもう%3mlね♥♥♥";

const StatusRecordFingersSuckedEN = "Sucked %2 different people's fingers %1 times.";
const StatusRecordFingersSuckedJP = "私が指をしゃぶった男は%2人。合計%1回おしゃぶりしている。";
const StatusRecordFingersSuckedSlutEN = "Sucked %2 different people's fingers only %1 times.♥";
const StatusRecordFingersSuckedSlutJP = "私に指をしゃぶらせてくれたオトコは%2人♥全部で%1回もチンポみたいに舐め回してるの♥";
const StatusRecordBukkakeEN = "Got bukkaked %1 times for a total of %3 ml of cum from %2 different people.";
const StatusRecordBukkakeJP = "私にぶっかけた男は%2人。全部で%1回ぶっかけられている。その合計ザーメン量は%3ml。";
const StatusRecordBukkakeSlutEN = "Got bukkaked only %1 times for a total of %3 ml of cum from %2 different people.♥";
const StatusRecordBukkakeSlutJP = "私をトイレみたいにぶっかけてくれたオトコは%2人♥%1回も浴びて来たザーメンシャワーは全部で%3mlよ♥";
const StatusRecordFaceBukkakeEN = "Got facialed %1 times for a total of %3 ml of cum from %2 different people.";
const StatusRecordFaceBukkakeJP = "私の顔にぶっかけした男は%2人。全部で%1回顔射されている。その合計ザーメン量は%3ml。";
const StatusRecordFaceBukkakeSlutEN = "Got facialed only %1 times for a total of %3 ml of cum from %2 different people.♥";
const StatusRecordFaceBukkakeSlutJP = "私のお顔めがけてチンポ射精してくれたオトコは%2人♥%1回も顔面便器になって浴びた汁は全部で%3mlなの♥";

//StatusBattleEffectはステータスメニューの「状態」に書いてる
const StatusBattleEffectOrgasmEN = "Karryn \\C[5]just orgasmed\\C[0]! She's a mess right now and can not do anything!";
const StatusBattleEffectOrgasmJP = "【快楽：\\C[5]絶頂中！\\C[0]】今は何も出来ない！";
const StatusBattleEffectCoolEN = "Karryn is \\C[4]cool and collected\\C[0] from having low desires!\nHer accuracy, evasion, critical rate, critical evasion and regens are slightly increased.";
const StatusBattleEffectCoolJP = "【感情：\\C[4]冷静沈着①\\C[0]】命中力、回避力、クリティカル率、クリティカル回避率が少しアップ。\n【感情：\\C[4]冷静沈着②\\C[0]】全ての回復量が少しアップ。";
const StatusBattleEffectIsHornyZeroEN = "Karryn is \\C[18]horny\\C[0]! All her sexual resists are decreased.";
const StatusBattleEffectIsHornyZeroJP = "【快楽：\\C[18]興奮中！\\C[0]】全てのセクハラ耐性がダウン。";
const StatusBattleEffectIsHornyOneEN = "Karryn is \\C[18]horny\\C[0]! All her sexual resists are decreased, and all her desires will rise a bit every turn.";
const StatusBattleEffectIsHornyOneJP = "【快楽：\\C[18]興奮中！\\C[0]】全てのセクハラ耐性がダウン。全ての性欲が少しづつ上昇中【毎ターン】";
const StatusBattleEffectIsHornyTwoEN = "Karryn is \\C[18]horny\\C[0]! All her sexual resists are decreased,\nsuppress desire skills cost more and all her desires will rise a bit every turn.";
const StatusBattleEffectIsHornyTwoJP = "【快楽：\\C[18]興奮中！①\\C[0]】全てのセクハラ耐性がダウン。抑制スキルのコストがアップ【毎ターン】\n【快楽：\\C[18]興奮中！②\\C[0]】全ての性欲が少しづつ上昇中【毎ターン】";
const StatusBattleEffectIsHornyThreeEN = "Karryn is \\C[18]horny\\C[0]! Her evasion, accuracy and all her sexual resists are decreased,\nsuppress desire skills cost more, and all her desires will rise a bit every turn.";
const StatusBattleEffectIsHornyThreeJP = "【快楽：\\C[18]興奮中！①\\C[0]】回避力、命中力、全てのセクハラ耐性がダウン。抑制スキルのコストがアップ【毎ターン】\n【快楽：\\C[18]興奮中！②\\C[0]】全ての性欲が少しづつ上昇中【毎ターン】";
const StatusBattleEffectIsArousedEN = "Karryn is \\C[27]aroused\\C[0]! Her pussy will slowly get \\C[23]wetter\\C[0] every turn.";
const StatusBattleEffectIsArousedJP = "【快楽：\\C[27]発情中！\\C[0]】マンコがゆっくりと\\C[23]濡れていく\\C[0]【毎ターン】";
const StatusBattleEffectNotArousedEN = "Karryn is currently not aroused. She must be aroused before her pussy can get any wetter.";
const StatusBattleEffectNotArousedJP = "【快楽：発情していない】マンコは濡れていない。";
const StatusBattleEffectIsWetEN = "Karryn is \\C[23]wet\\C[0]! She is now able to receive vaginal penetration.";
const StatusBattleEffectIsWetJP = "【マンコ：\\C[23]濡れている！\\C[0]】挿入可能。";
const StatusBattleEffectNotWetEN = "Karryn is currently not wet. She will not receive any vaginal penetration.";
const StatusBattleEffectNotWetJP = "【マンコ：濡れていない】挿入不可。";
const StatusBattleEffectIsWearingPantiesEN = "Karryn is wearing panties. Her clothes need to be heavily displaced before her nether regions are accessible.";
const StatusBattleEffectIsWearingPantiesJP = "【パンティ：履いている】服を脱がされない限り下半身への接触は守られる。";
const StatusBattleEffectIsNotWearingPantiesEN = "Karryn is \\C[27]not wearing any panties\\C[0]! Her clothes only need to be moderately displaced before her nether regions are accessible.";
const StatusBattleEffectIsNotWearingPantiesJP = "【パンティ：\\C[27]履いてない！\\C[0]】服を脱がされれば下半身への接触を許してしまう。";
const StatusBattleEffectIsVirginPublishedEN = "Karryn is a \\C[27]known virgin\\C[0]! Her charm during battle is increased.";
const StatusBattleEffectIsVirginPublishedJP = "【性体験の情報：\\C[27]処女だと知られてしまっている！\\C[0]】バトル中は魅力アップ。";
const StatusBattleEffectIsVirginHighEN = "Karryn is a \\C[27]suspected virgin\\C[0]! Her charm during battle is increased.";
const StatusBattleEffectIsVirginHighJP = "【性体験の情報：\\C[27]処女の噂が広がっている！\\C[0]】バトル中は魅力アップ。";
const StatusBattleEffectIsVirginMedEN = "Karryn is rumored to still be a \\C[27]virgin\\C[0]! Her charm during battle is slightly increased.";
const StatusBattleEffectIsVirginMedJP = "【性体験の情報：\\C[27]処女疑惑を持たれ始めている！\\C[0]】バトル中は魅力が少しアップ。";
const StatusBattleEffectIsVirginLowEN = "Karryn is actually still a \\C[27]virgin\\C[0] but no one thinks she is! Her charm during battle remains unaffected.";
const StatusBattleEffectIsVirginLowJP = "【性体験の情報：\\C[27]まだ未経験だと誰にも知られていない\\C[0]】魅力に影響なし。";

const StatusBattleEffectIsConfidentZeroEN = "Karryn is feeling \\C[30]confident\\C[0]! All her stats are increased!";
const StatusBattleEffectIsConfidentZeroJP = "【感情：\\C[30]自信満々！\\C[0]】全ステータスアップ！";
const StatusBattleEffectIsConfidentOneEN = "Karryn is feeling \\C[30]confident\\C[0]! All her stats are increased based on her cockiness!";
const StatusBattleEffectIsConfidentOneJP = "【感情：\\C[30]自信満々！\\C[0]】全ステータスが大胆さによってアップ！";

const StatusBattleEffectIsFrustratedEN = "Karryn is \\C[18]sexually frustrated\\C[0]! Her Attack is increased while her Defense, Agility, Accuracy and Critical Evasion are decreased!";
const StatusBattleEffectIsFrustratedJP = "【感情：\\C[18]ムラムラしている！\\C[0]】攻撃力アップと引き換えに、防御力・素早さ・命中力・クリティカル回避率ダウン！";

const StatusBattleEffectDisarmedEN = "Karryn is \\C[18]disarmed\\C[0]! She will need to get closer to her halberd to rearm herself.";
const StatusBattleEffectDisarmedJP = "【武装：\\C[18]なし\\C[0]】ハルバードを拾い上げて再武装が必要。";
const StatusBattleEffectDefiledHalberdEN = "Karryn's \\C[18]halberd is currently defiled\\C[0]! She can't use her halberd until she rests in her office or a guard station.";
const StatusBattleEffectDefiledHalberdJP = "【武装：\\C[18]不可\\C[0]】ハルバードが汚されていて武装出来ない。【ベッドで休む必要あり】";
const StatusBattleEffectOffBalancedEN = "Karryn is \\C[18]off-balanced\\C[0]! Her attack, defense and evasion are decreased.";
const StatusBattleEffectOffBalancedJP = "【状態：\\C[18]バランス崩壊\\C[0]】攻撃力、防御力、回避力ダウン。";
const StatusBattleEffectWeakenEN = "Karryn is \\C[18]weakened\\C[0]! Her strength and attack are decreased.";
const StatusBattleEffectWeakenJP = "【状態：\\C[18]脱力\\C[0]】腕力、攻撃力ダウン。";
const StatusBattleEffectDizzyEN = "Karryn is \\C[18]dizzy\\C[0]! Her accuracy and evasion are decreased.";
const StatusBattleEffectDizzyJP = "【状態：\\C[18]めまい\\C[0]】命中力、回避力ダウン。";
const StatusBattleEffectSlowEN = "Karryn is \\C[18]slowed\\C[0]! Her agility is greatly decreased.";
const StatusBattleEffectSlowJP = "【状態：\\C[18]スロー\\C[0]】素早さが大幅ダウン！";
const StatusBattleEffectVulnerableEN = "Karryn is currently \\C[18]vulnerable\\C[0]! Her defense is decreased.";
const StatusBattleEffectVulnerableJP = "【状態：\\C[18]放心\\C[0]】防御力ダウン。";
const StatusBattleEffectPoisonEN = "Karryn is \\C[18]poisoned\\C[0]! Her stamina decreases every turn instead of regenerating.";
const StatusBattleEffectPoisonJP = "【状態：\\C[18]毒\\C[0]】体力が減少していく【毎ターン】";
const StatusBattleEffectYetiHeatAuraOneEN = "Karryn is being affected by \\C[18]the Yeti's heat aura\\C[0]! Her stamina regeneration is greatly decreased.";
const StatusBattleEffectYetiHeatAuraOneJP = "【状態：\\I[18]イエティの熱オーラ\\C[0]】体力回復量が大幅ダウン！";
const StatusBattleEffectYetiHeatAuraTwoEN = "Karryn is being affected by \\C[18]the Yetis's heat aura\\C[0]! Her stamina and willpower regeneration are greatly decreased.";
const StatusBattleEffectYetiHeatAuraTwoJP = "【状態：\\I[18]イエティの熱オーラ\\C[0]】体力回復量、意志力回復量が大幅ダウン！";
const StatusBattleEffectExposeWeaknessEN = "Karryn's \\C[18]weaknesses are exposed\\C[0]! Her evasion, critical evasion, and all her resists are decreased.";
const StatusBattleEffectExposeWeaknessJP = "【状態：\\C[18]弱点バレ\\C[0]】回避力、クリティカル回避力、全ての耐性がダウン。";
const StatusBattleEffectAttackComboEN = "Karryn has attacked \\C[2]%1 consecutive times\\C[0]! The damage, accuracy and cost of her next attack will be increased.";
const StatusBattleEffectAttackComboJP = "【攻撃コンボ：\\C[2]%1連続目\\C[0]】次の攻撃時にダメージ、命中力、スキルコストがアップ。";
const StatusBattleEffectAttackComboCockyEN = "Attacking four times or more in a row will increase her \\C[30]cockiness\\C[0].";
const StatusBattleEffectAttackComboCockyJP = "4回以上のコンボで大胆さアップ。";
const StatusBattleEffectSexComboOneEN = "Karryn has used her sexual skills \\C[2]%1 consecutive times\\C[0]! The pleasure damage and cost of her next non-petting sexual skill will be increased.";
const StatusBattleEffectSexComboOneJP = "【SEXコンボ：\\C[2]%1連続目\\C[0]】次の攻撃時に性スキルの快楽ダメージとスキルコストがアップ【愛撫は除く】";
const StatusBattleEffectSexComboTwoEN = "Consecutively using the same type of non-petting sexual skill on the same person will also greatly increase pleasure damage and cost.";
const StatusBattleEffectSexComboTwoJP = "更に同じ相手に同じ性スキルを連続使用で、快楽ダメージとスキルコストが大幅アップ【愛撫は除く】";

const StatusBattleEffectDanceComboEN = "Karryn has used her stripper skills \\C[2]%1 consecutive times\\C[0]! The pleasure damage and stamina cost of her next stripper skill will be increased.";
const StatusBattleEffectDanceComboJP = "【ダンスコンボ：\\C[2]%1連続目\\C[0]】次のダンススキルの快楽ダメージと体力コストがアップ。";


//Tooltipsは戦闘画面のステートTooltipに表示される
const StateTooltipsRemainingTurnsSingularEN = "\\c[27](1 Turn Left)\\c[0]";
const StateTooltipsRemainingTurnsSingularJP = "\\c[27](残り1ターン)\\c[0]";
const StateTooltipsRemainingTurnsPluralEN = "\\c[27](%1 Turns Left)\\c[0]";
const StateTooltipsRemainingTurnsPluralJP = "\\c[27](残り%1ターン)\\c[0]";

const StateTooltipsOrgasmEN = "Karryn \\C[5]just orgasmed\\C[0]!\nShe's a mess right now and can not do anything!";
const StateTooltipsOrgasmJP = "\\C[5]【絶頂中！】\\C[0]\n今は何も出来ない！";
const StateTooltipsSlashStanceEN = "%1 will take more damage and\nbe easier to hit with a \\C[4]Pierce-type attack.\\C[0]\nBut will also take less damage and\nbe harder to hit with a \\C[2]Blunt-type attack.\\C[0]";
const StateTooltipsSlashStanceJP = "有効\\I[42]\\C[4]スラスト系\\C[0]\n耐久\\I[42]\\C[2]ストライク系\\C[0]";
const StateTooltipsPierceStanceEN = "%1 will take more damage and\nbe easier to hit with a \\C[2]Blunt-type attack.\\C[0]\nBut will also take less damage and\nbe harder to hit with a \\C[3]Slash-type attack.\\C[0]";
const StateTooltipsPierceStanceJP = "有効\\I[42]\\C[2]ストライク系\\C[0]\n耐久\\I[42]\\C[3]スラッシュ系\\C[0]";
const StateTooltipsBluntStanceEN = "%1 will take more damage and\nbe easier to hit with a \\C[3]Slash-type attack.\\C[0]\nBut will also take less damage and\nbe harder to hit with a \\C[4]Pierce-type attack.\\C[0]";
const StateTooltipsBluntStanceJP = "有効\\I[42]\\C[3]スラッシュ系\\C[0]\n耐久\\I[42]\\C[4]スラスト系\\C[0]";
const StateTooltipsHornyZeroEN = "Karryn is \\C[18]horny\\C[0]!\nAll her sexual resists are decreased.";
const StateTooltipsHornyZeroJP = "\\C[18]【興奮中！】\\C[0]\n\\I[42]全てのセクハラ耐性 ダウン";
const StateTooltipsHornyOneEN = "Karryn is \\C[18]horny\\C[0]!\nAll her sexual resists are decreased,\nand all her desires will rise a bit every turn.";
const StateTooltipsHornyOneJP = "\\C[18]【興奮中！】\\C[0]\n\\I[42]全てのセクハラ耐性 ダウン\n\\I[40]全ての性欲 少しづつ上昇中\n（毎ターン）";
const StateTooltipsHornyTwoEN = "Karryn is \\C[18]horny\\C[0]!\nAll her sexual resists are decreased,\nher suppress desire skills cost more,\nand all her desires will rise a bit every turn.";
const StateTooltipsHornyTwoJP = "\\C[18]【興奮中！】\\C[0]\n\\I[42]全てのセクハラ耐性 ダウン\n\\I[42]抑制スキルのコスト アップ\n\\I[40]全ての性欲 少しづつ上昇中\n（毎ターン）";
const StateTooltipsHornyThreeEN = "Karryn is \\C[18]horny\\C[0]!\nHer evasion, accuracy and all her sexual resists are decreased,\nher suppress desire skills cost more,\nand all her desires will rise a bit every turn.";
const StateTooltipsHornyThreeJP = "\\C[18]【興奮中！】\\C[0]\n\\I[42]回避力 ダウン\n\\I[42]命中力 ダウン\n\\I[42]全てのセクハラ耐性 ダウン\n\\I[42]抑制スキルのコスト アップ\n\\I[40]全ての性欲 少しづつ上昇中\n（毎ターン）";



const StateTooltipsEnemyHornyEN = "%1 is \\C[18]horny\\C[0]!\nHe has higher act chance, lower attack chance, lower resists\nlower charm requirement, and will ejaculate more.";
const StateTooltipsEnemyHornyJP = "\\C[18]【興奮中！】\\C[0]\n\\I[42]判断力 アップ\n\\I[42]攻撃性 ダウン\n\\I[42]全ての耐性 ダウン\n\\I[42]魅力の必要値 ダウン\n\\I[40]射精量 アップ";

const StateTooltipsCoolEN = "Karryn is \\C[4]cool and collected\\C[0] from having low desires!\nHer accuracy, evasion, critical rate, critical evasion\nand all her regens are slightly increased.";
const StateTooltipsCoolJP = "\\C[4]【冷静沈着】\\C[0]\n\\I[42]命中力 少しアップ\n\\I[42]回避力 少しアップ\n\\I[42]クリティカル率 少しアップ\n\\I[42]クリティカル回避率 少しアップ\n\\I[42]全ての回復量 少しアップ";

const StateTooltipsIsWetEN = "Karryn is \\C[23]wet\\C[0]!\nShe is now able to receive vaginal penetration.";
const StateTooltipsIsWetJP = "\\C[23]【マンコが濡れている！】\n\\I[40]\\C[0]挿入可能";
const StateTooltipsNotWetEN = "Karryn is currently not wet.\nShe will not allow any vaginal penetration.";
const StateTooltipsNotWetJP = "【マンコは濡れていない】\n\\I[42]挿入不可";
const StateTooltipsWearingPantiesEN = "Karryn is wearing panties.\nHer clothes need to be heavily displaced\nbefore her nether regions are accessible.";
const StateTooltipsWearingPantiesJP = "【パンティを履いている】\n\\I[42]服を脱がされない限り下半身への接触は守られる";
const StateTooltipsNotWearingPantiesEN = "Karryn is \\C[27]not wearing any panties\\C[0]! \nHer clothes only need to be moderately displaced before her nether regions are accessible.";
const StateTooltipsNotWearingPantiesJP = "\\C[27]【パンティを履いていない！】\\C[0]\n\\I[40]服を脱がされれば下半身への接触を許してしまう";
const StateTooltipsVirginPublishedEN = "Karryn is a \\C[27]known virgin\\C[0]!\nHer charm during battle is increased.";
const StateTooltipsVirginPublishedJP = "\\C[27]【処女の情報が公開されている！】\\C[0]\n\\I[40]魅力 増加中";
const StateTooltipsVirginHighEN = "Karryn is a \\C[27]suspected virgin\\C[0]!\nHer charm during battle is increased.";
const StateTooltipsVirginHighJP = "\\C[27]【処女疑惑が広がっている！】\\C[0]\n\\I[40]魅力 増加中";
const StateTooltipsVirginMedEN = "Karryn is rumored to still be a \\C[27]virgin\\C[0]!\nHer charm during battle is slightly increased.";
const StateTooltipsVirginMedJP = "\\C[27]【処女かもと噂され始めている……】\\C[0]\n\\I[40]魅力 少し増加中";
const StateTooltipsVirginLowEN = "Karryn is actually still a \\C[27]virgin\\C[0] but no one thinks she is!\nHer charm during battle remains unaffected.";
const StateTooltipsVirginLowJP = "\\C[27]【処女バレしていない】\\C[0]\n\\I[42]魅力に影響なし";
const StateTooltipsConfidentZeroEN = "Karryn is feeling \\C[30]confident\\C[0]!\nAll her stats are increased!";
const StateTooltipsConfidentZeroJP = "\\C[30]【自信満々！】\\C[0]\n\\I[42]全ステータス アップ";
const StateTooltipsConfidentOneEN = "Karryn is feeling \\C[30]confident\\C[0]!\nAll her stats are increased based on her cockiness!";
const StateTooltipsConfidentOneJP = "\\C[30]【自信満々！】\\C[0]\n\\I[42]全ステータス 大胆さによってアップ";
const StateTooltipsFrustratedEN = "Karryn is \\C[18]sexually frustrated\\C[0]!\nHer Attack is increased but her Defense, Agility,\nAccuracy and Critical Evasion are decreased!";
const StateTooltipsFrustratedJP = "\\C[18]【ムラムラしている！】\\C[0]\n\\I[42]攻撃力 アップ\n\\I[42]防御力 ダウン\n\\I[42]素早さ ダウン\n\\I[42]命中力 ダウン\n\\I[42]クリティカル回避率 ダウン";
const StateTooltipsDisarmedEN = "Karryn is \\C[18]disarmed\\C[0]!!\nShe will need to get closer to her halberd to rearm herself.";
const StateTooltipsDisarmedJP = "\\C[18]【武装なし】\\C[0]\nハルバードを拾って再武装が必要";
const StateTooltipsOffBalancedEN = "%1 is \\C[18]off-balanced\\C[0]!\nTheir attack, defense and evasion are decreased.";
const StateTooltipsOffBalancedJP = "\\C[18]【バランス崩壊】\\C[0]\n\\I[42]攻撃力 ダウン\n\\I[42]防御力 ダウン\n\\I[42]回避力 ダウン";
const StateTooltipsWeakenEN = "%1 is \\C[18]weakened\\C[0]!\nTheir strength and attack are decreased.";
const StateTooltipsWeakenJP = "\\C[18]【脱力している！】\\C[0]\n\\I[42]腕力 ダウン\n\\I[42]攻撃力 ダウン";
const StateTooltipsDizzyEN = "%1 is \\C[18]dizzy\\C[0]!\nTheir accuracy and evasion are decreased.";
const StateTooltipsDizzyJP = "\\C[18]【フラついている！】\\C[0]\n\\I[42]命中力 ダウン\n\\I[42]回避力 ダウン";
const StateTooltipsSlowEN = "%1 is \\C[18]slowed\\C[0]!\nTheir agility is greatly decreased.";
const StateTooltipsSlowJP = "\\C[18]【鈍くなっている！】\\C[0]\n\\I[42]素早さ 大幅ダウン";
const StateTooltipsVulnerableEN = "%1 is currently \\C[18]vulnerable\\C[0]!\nTheir defense is decreased.";
const StateTooltipsVulnerableJP = "\\C[18]【放心している！】\\C[0]\n\\I[42]防御力 ダウン";
const StateTooltipsPoisonEN = "%1 is \\C[18]poisoned\\C[0]!\nTheir stamina decreases every turn instead of regenerating.";
const StateTooltipsPoisonJP = "\\C[18]【毒に侵されている！】\\C[0]\n\\I[42]体力 ダウン\n　（毎ターン）";
const StateTooltipsExposeWeaknessEN = "Karryn's \\C[18]weaknesses are exposed\\C[0]!\nHer evasion, critical evasion,\nand all her resists are decreased.";
const StateTooltipsExposeWeaknessJP = "\\C[18]【弱点バレしている！】\\C[0]\n\\I[42]回避力 ダウン\n\\I[42]クリティカル回避力 ダウン\n\\I[42]全ての耐性 ダウン";
const StateTooltipsStunnedEN = "%1 is \\C[18]stunned\\C[0]!\nTheir current turn will be skipped.";
const StateTooltipsStunnedJP = "\\C[18]【スタン状態！】\\C[0]\nこのターンは行動不可";
const StateTooltipsEnemyPoseMasterEN = "Karryn's current sexual position might reset after %1 ejaculates!";
const StateTooltipsEnemyPoseMasterJP = "ヤリ主\\I[29]%1\n※射精で体位リセットの可能性あり";
const StateTooltipsActorAttackComboEN = "Karryn has attacked \\C[2]%1 consecutive times\\C[0]!\nThe damage, accuracy and cost of her next attack will be increased.";
const StateTooltipsActorAttackComboJP = "\\C[2]【アタックコンボ！%1連続攻撃】\\C[0]\n次の攻撃で：\n\\I[42]ダメージ アップ\n\\I[42]命中力 アップ\n\\I[42]スキルコスト アップ";
const StateTooltipsActorAttackComboCockyEN = "Karryn has attacked \\C[2]%1 consecutive times\\C[0]!\nThe damage, accuracy and cost of her next attack will be increased.\nAttacking four times or more in a row will increase her \\C[30]cockiness\\C[0].";
const StateTooltipsActorAttackComboCockyJP = "\\C[2]【アタックコンボ！%1連続攻撃】\\C[0]\n\\I[42]ダメージ アップ\n\\I[42]命中力 アップ\n\\I[42]スキルコスト アップ\n\\I[42]4コンボ目で大胆さ アップ";
const StateTooltipsActorSexComboEN = "Karryn has used her sexual skills \\C[2]%1 consecutive times\\C[0]!\nThe pleasure damage and cost of her next non-petting sexual skill will be increased.\nConsecutively using the same type of non-petting sexual skill on the same person will also greatly increase pleasure damage and cost.";
const StateTooltipsActorSexComboJP = "\\C[2]【SEXコンボ！%1連続性行為】\\C[0]\n性スキル(愛撫以外)使用で：\n\\I[42]快楽ダメージ アップ\n\\I[42]スキルコスト アップ\n　\n同じ相手に同じ性スキル(愛撫以外)を連続使用で：\n\\I[42]快楽ダメージ大幅 アップ\n\\I[42]スキルコスト 大幅アップ";
const StateTooltipsEnemyPosePussySexEN = "%1 is fucking Karryn's pussy!";
const StateTooltipsEnemyPosePussySexJP = "マンコをファックしている！";
const StateTooltipsEnemyPoseCunnilingusEN = "%1 is licking Karryn's pussy!";
const StateTooltipsEnemyPoseCunnilingusJP = "マンコをクンニしている！";
const StateTooltipsEnemyPoseAnalSexEN = "%1 is fucking Karryn's ass!";
const StateTooltipsEnemyPoseAnalSexJP = "アナルをファックしている！";
const StateTooltipsEnemyPosePaizuriEN = "%1 is fucking Karryn's breasts!";
const StateTooltipsEnemyPosePaizuriJP = "パイズリさせている！";
const StateTooltipsEnemyPoseHandjobEN = "%1 is getting a handjob from Karryn!";
const StateTooltipsEnemyPoseHandjobJP = "手コキさせている！";
const StateTooltipsEnemyPoseBlowjobEN = "%1 is getting a blowjob from Karryn!";
const StateTooltipsEnemyPoseBlowjobJP = "フェラさせている！";
const StateTooltipsEnemyPoseFootjobEN = "%1 is getting a footjob from Karryn!";
const StateTooltipsEnemyPoseFootjobJP = "足コキしてもらっている！";
const StateTooltipsEnemyPoseRimjobEN = "%1 is getting a rimjob from Karryn!";
const StateTooltipsEnemyPoseRimjobJP = "ケツ舐めさせている！";
const StateTooltipsEnemyKissedEN = "%1 got kissed!\nHis attack, accuracy and evasion are decreased.";
const StateTooltipsEnemyKissedJP = "キスされてデレデレ！\n\\I[42]攻撃力 ダウン\n\\I[42]命中力 ダウン\n\\I[42]回避力 ダウン";
const StateTooltipsArousedEN = "Karryn is \\C[27]aroused\\C[0]!\nHer pussy will slowly get \\C[23]wetter\\C[0] every turn.";
const StateTooltipsArousedJP = "\\C[27]【発情中！】\\C[0]\n\\I[40]\\C[23]マンコがゆっくり濡れていく\\C[0]\n（毎ターン）";
const StateTooltipsCautiousStanceEN = "Karryn's evasion and critical evasion are greatly increased.";
const StateTooltipsCautiousStanceJP = "【見抜きの構え】\n\\I[42]回避力 大幅アップ\n\\I[42]クリティカル回避率 大幅アップ";
const StateTooltipsDefensiveStanceEN = "Karryn is protected from various debuffs.\nHer defense, overblow protection, petting resist,\nand strip resist are also greatly increased.";
const StateTooltipsDefensiveStanceJP = "【守備の構え】\n\\I[42]様々なデバフを保護\n\\I[42]守備力 大幅アップ\n\\I[42]ダメージ軽減量 大幅アップ\n\\I[42]愛撫耐性 大幅アップ\n\\I[42]ストリップ耐性 大幅アップ";
const StateTooltipsCounterStanceEN = "Karryn's counterattack rate is greatly increased.\nHer maximum number of counterattacks is increased.\nHer overblow protection is slightly increased.";
const StateTooltipsCounterStanceJP = "【反撃の構え】\n\\I[42]カウンター率 大幅アップ\n\\I[42]カウンター最大数 アップ\n\\I[42]ダメージ軽減量 少しアップ";
const StateTooltipsSecretaryStanceEN = "Karryn's talk, sight, petting\nand sex resists are greatly increased.\nPleasure damage dealt to enemies are increased.";
const StateTooltipsSecretaryStanceJP = "【秘書の構え】\n\\I[42]猥談耐性 大幅アップ\n\\I[42]視姦耐性 大幅アップ\n\\I[42]愛撫耐性 大幅アップ\n\\I[42]セックス耐性 大幅アップ\n\\I[42]敵への快楽ダメージ アップ";
const StateTooltipsLadyStanceEN = "Karryn's petting and sex resists are slightly increased.\nHer charm during battle is increased.";
const StateTooltipsLadyStanceJP = "【淑女の構え】\n\\I[42]愛撫耐性 少しアップ\n\\I[42]セックス耐性 少しアップ\n\\I[40]魅力 増加中";
const StateTooltipsPleasureStanceEN = "Karryn is welcoming the pleasure.♥";
const StateTooltipsPleasureStanceJP = "【快楽の構え】\n\\I[40]快感を受け入れている！";
const StateTooltipsWillpowerKiOneEN = "Karryn's attack is increased.";
const StateTooltipsWillpowerKiOneJP = "【チャージ】\n\\I[42]攻撃力 アップ";
const StateTooltipsWillpowerKiTwoEN = "Karryn's attack and critical damage are increased.";
const StateTooltipsWillpowerKiTwoJP = "【チャージ】\n\\I[42]攻撃力 アップ\n\\I[42]クリティカルダメージ アップ";
const StateTooltipsWillpowerFocusOneEN = "Karryn's counterattack rate is increased.";
const StateTooltipsWillpowerFocusOneJP = "【フォーカス】\n\\I[42]カウンター率 アップ";
const StateTooltipsWillpowerFocusTwoEN = "Karryn's counterattack rate and overblow protection are increased.";
const StateTooltipsWillpowerFocusTwoJP = "【フォーカス】\n\\I[42]カウンター率 アップ\n\\I[42]ダメージ軽減率 アップ";
const StateTooltipsWillpowerEyeOfTheMindOneEN = "Karryn's accuracy, evasion and critical rate are increased.";
const StateTooltipsWillpowerEyeOfTheMindOneJP = "【マインドアイズ】\n\\I[42]命中力 アップ\n\\I[42]回避力 アップ\n\\I[42]クリティカル率 アップ";
const StateTooltipsWillpowerEyeOfTheMindTwoEN = "Karryn's accuracy, evasion, critical rate\nand critical damage are increased.";
const StateTooltipsWillpowerEyeOfTheMindTwoJP = "【マインドアイズ】\n\\I[42]命中力 アップ\n\\I[42]回避力 アップ\n\\I[42]クリティカル率 アップ\n\\I[42]クリティカルダメージ アップ";
const StateTooltipsWillpowerSeeNoEvilEN = "Karryn's sight resist is increased.";
const StateTooltipsWillpowerSeeNoEvilJP = "【スコトーマ】\n\\I[42]視姦耐性 アップ";
const StateTooltipsWillpowerHearNoEvilEN = "Karryn's talk resist is increased.";
const StateTooltipsWillpowerHearNoEvilJP = "【マスキング】\n\\I[42]猥談耐性 アップ";
const StateTooltipsWillpowerRealityMarbleEN = "Karryn's charm during battle is increased.";
const StateTooltipsWillpowerRealityMarbleJP = "【リアリティ・マーブル】\n\\I[40]魅力 増加中";
const StateTooltipsWillpowerResistOrgasmEN = "Karryn is trying to resist having an orgasm!\nThe amount of pleasure required to have an orgasm is increased.";
const StateTooltipsWillpowerResistOrgasmJP = "【絶頂抑制】\nイクのを我慢している！\n\\I[42]絶頂の必須快楽度 アップ";
const StateTooltipsWillpowerEdgingControlKarrynEN = "Karryn is trying to edge her next target!\nThe amount of pleasure required to have an ejaculation\nfor her next target is increased.";
const StateTooltipsWillpowerEdgingControlKarrynJP = "【射精管理】\nターゲットの射精を制御する！\n\\I[42]敵が射精に必須の快楽度 アップ";
const StateTooltipsWillpowerEdgingControlEnemyEN = "%1 is being edged by Karryn!\nThe amount of pleasure required to have an ejaculation is increased.";
const StateTooltipsWillpowerEdgingControlEnemyJP = "【射精管理】\n%1の射精を抑制中！\n\\I[42]敵が射精に必須の快楽度 アップ";
const StateTooltipsBonusPierceDamageEN = "%1 will deal extra damage with \\C[4]Pierce-type attacks\\C[0].";
const StateTooltipsBonusPierceDamageJP = "【ボーナスアタック\\I[42]\\C[4]スラスト系\\C[0]】";
const StateTooltipsBonusBluntDamageEN = "%1 will deal extra damage with \\C[2]Blunt-type attacks\\C[0].";
const StateTooltipsBonusBluntDamageJP = "【ボーナスアタック\\I[42]\\C[2]ストライク系\\C[0]】";
const StateTooltipsBonusSlashDamageEN = "%1 will deal extra damage with \\C[3]Slash-type attacks\\C[0].";
const StateTooltipsBonusSlashDamageJP = "【ボーナスアタック\\I[42]\\C[3]スラッシュ系\\C[0]】";
const StateTooltipsEjaculationStunnedEN = "%1 is \\C[18]stunned\\C[0]!\nHis current turn will be skipped.\nHis sexual resists are increased.\nHis evasion and critical evasion are decreased.";
const StateTooltipsEjaculationStunnedJP = "\\C[18]【スタン状態！】\\C[0]\nこのターンは行動不可\n\\I[42]セクハラ耐性 アップ\n\\I[42]回避力 ダウン\n\\I[42]クリティカル回避率 ダウン";
const StateTooltipsSlimeRegenNormalEN = "%1 will regenerate 20% of stamina per turn.";
const StateTooltipsSlimeRegenNormalJP = "【再生能力】\n\\I[42]体力 20％回復\n（毎ターン）";
const StateTooltipsSlimeRegenFourthEN = "%1 will regenerate 5% of stamina per turn.";
const StateTooltipsSlimeRegenFourthJP = "【再生能力】\n\\I[42]体力 5％回復\n（毎ターン）";
const StateTooltipsOrcDefensivePresenceEN = "%1's defense is increased.";
const StateTooltipsOrcDefensivePresenceJP = "【オークの肉壁】\n\\I[42]防御力 アップ";
const StateTooltipsOrcCommandingPresenceOneEN = "%1's attack, defense and evasion are increased.";
const StateTooltipsOrcCommandingPresenceOneJP = "【進撃のオーク】\n\\I[42]攻撃力＆防御力＆回避力 アップ";
const StateTooltipsOrcCommandingPresenceTwoEN = "%1's defense and evasion are increased.";
const StateTooltipsOrcCommandingPresenceTwoJP = "【オークの肉壁】\n\\I[42]防御力＆回避力 アップ";
const StateTooltipsOrcCommandingPresenceThreeEN = "%1's attack is increased.";
const StateTooltipsOrcCommandingPresenceThreeJP = "【進撃のオーク】\n\\I[42]攻撃力 アップ";
const StateTooltipsOrcCommandingPresenceFourEN = "%1's pleasure damage is increased.";
const StateTooltipsOrcCommandingPresenceFourJP = "【オークの豚汁】\n\\I[42]快楽度ダメージ アップ";
const StateTooltipsLizardmanRacialEN = "%1 is with another lizardman.\nAll his stats are increased.";
const StateTooltipsLizardmanRacialJP = "【群れるリザードマン】\n\\I[42]全ステータス アップ";
const StateTooltipsLizardmanRacialWeakEN = "%1 is with another lizardman.\nAll his stats are slightly increased.";
const StateTooltipsLizardmanRacialWeakJP = "【群れるリザードマン】\n\\I[42]全ステータス 少しアップ";
const StateTooltipsYetiHeatAuraEN = "%1's heat aura causes\nvarious debuffs to everyone.";
const StateTooltipsYetiHeatAuraJP = "【熱オーラ放出中】\n\\I[42]全員に様々なデバフ";
const StateTooltipsYetiHeatAuraEnemyOneEN = "%1 is being affected by \\C[18]the Yeti's heat aura\\C[0]!\nHe is dealing lower pleasure damage.";
const StateTooltipsYetiHeatAuraEnemyOneJP = "\\C[18]【イエティの熱オーラ】\\C[0]\n\\I[40]カリンへの快楽度ダメージ ダウン";
const StateTooltipsYetiHeatAuraEnemyTwoEN = "%1 is being affected by \\C[18]the Yetis's heat aura\\C[0]!\nHe is dealing greatly lower pleasure damage.";
const StateTooltipsYetiHeatAuraEnemyTwoJP = "\\C[18]【イエティの熱オーラ】\\C[0]\n\\I[40]カリンへの快楽度ダメージ 大幅ダウン";
const StateTooltipsYetiHeatAuraKarrynOneEN = "Karryn is being affected by \\C[18]the Yeti's heat aura\\C[0]!\nHer stamina regeneration is greatly decreased.";
const StateTooltipsYetiHeatAuraKarrynOneJP = "\\C[18]【イエティの熱オーラ】\\C[0]\n\\I[42]体力回復量 大幅ダウン";
const StateTooltipsYetiHeatAuraKarrynTwoEN = "Karryn is being affected by \\C[18]the Yetis's heat aura\\C[0]!\nHer stamina and willpower regeneration\nare greatly decreased.";
const StateTooltipsYetiHeatAuraKarrynTwoJP = "\\C[18]【イエティの熱オーラ】\\C[0]\n\\I[42]体力回復量＆意志力回復量 大幅ダウン";

const StateTooltipsYasuKiEN = "%1's damage is increased.";
const StateTooltipsYasuKiJP = "カリンへのダメージ アップ";
const StateTooltipsYasuFocusEN = "%1 may counterattack.";
const StateTooltipsYasuFocusJP = "反撃率 アップ";
const StateTooltipsYasuEyeoftheMindEN = "%1's accuracy, critical rate and critical damage are increased.";
const StateTooltipsYasuEyeoftheMindJP = "\\I[42]命中力 アップ\n\\I[42]クリティカル率 アップ\n\\I[42]クリティカルダメージ アップ";
const StateTooltipsEnemyDefensiveStanceEN = "%1 is protected from various debuffs.\nTheir defensive and overblow protection are also increased.";
const StateTooltipsEnemyDefensiveStanceJP = "\\I[42]様々なデバフを保護\n\\I[42]守備力 アップ\n\\I[42]ダメージ軽減量 アップ";

const StateTooltipsKarrynClitToyEN = "Karryn has a toy attached to her clitoris!";
const StateTooltipsKarrynClitToyJP = "【オモチャ】\nピンクローター\n\\I[40]クリに装着中！";
const StateTooltipsKarrynPussyToyEN = "Karryn has a toy inserted in her pussy!";
const StateTooltipsKarrynPussyToyJP = "【オモチャ】\nディルド\n\\I[40]マンコに挿入中！";
const StateTooltipsKarrynAnalToyEN = "Karryn has a toy inserted in her anus!";
const StateTooltipsKarrynAnalToyJP = "【オモチャ】\nアナルビーズ\n\\I[40]ケツ穴に挿入中！";
const StateTooltipsEnemyClitToyPinkRotorEN = "%1 has a pink rotor!";
const StateTooltipsEnemyClitToyPinkRotorJP = "ピンクローターを持っている！";
const StateTooltipsEnemyPussyToyPenisDildoEN = "%1 has a penis dildo!";
const StateTooltipsEnemyPussyToyPenisDildoJP = "ディルドを持っている！";
const StateTooltipsEnemyAnalToyAnalBeadsEN = "%1 has anal beads!";
const StateTooltipsEnemyAnalToyAnalBeadsJP = "アナルビーズを持っている！";
const StateTooltipsToiletPinkRotorEN = "Someone left a pink rotor in the stall...";
const StateTooltipsToiletPinkRotorJP = "ピンクローターが放置されている……";
const StateTooltipsToiletPenisDildoEN = "Someone left a penis dildo in the stall...";
const StateTooltipsToiletPenisDildoJP = "ディルドが放置されている……";
const StateTooltipsToiletAnalBeadsEN = "Someone left anal beads in the stall...";
const StateTooltipsToiletAnalBeadsJP = "アナルビーズが放置されている……";
const StateWaitressNoAlcoholEN = "Karryn is refusing all \\C[2]attempts to get her to drink\\C[0].\n%1 Willpower will be required to refuse a drink.\nHer Willpower Regen will also be greatly reduced after refusing a drink.";
const StateWaitressNoAlcoholJP = "\\C[2]【飲酒を拒否中】\\C[0]\n全ての飲み物を断っている\n\\I[42]飲み物を断るのに必要な意志力：%1\n\\I[42]飲み物を断った時は意志力回復量 大幅ダウン";
const StateWaitressDirtyMugsSingularEN = "%1 has a dirty mug waiting to be collected.";
const StateWaitressDirtyMugsSingularJP = "【回収待ちのジョッキ】\n1杯";
const StateWaitressDirtyMugsPluralEN = "%1 has %2 dirty mugs waiting to be collected.";
const StateWaitressDirtyMugsPluralJP = "【回収待ちのジョッキ】\n%2杯";
const StateWaitressDirtyGlassesSingularEN = "%1 has a dirty glass waiting to be collected.";
const StateWaitressDirtyGlassesSingularJP = "【回収待ちのグラス】\n1杯";
const StateWaitressDirtyGlassesPluralEN = "%1 has %2 dirty glasses waiting to be collected.";
const StateWaitressDirtyGlassesPluralJP = "【回収待ちのグラス】\n%2杯";
const StateWaitressAvailableMugsSingularEN = "There is only one clean mug available.";
const StateWaitressAvailableMugsSingularJP = "【キレイなジョッキ】\n1杯";
const StateWaitressAvailableMugsPluralEN = "There are %1 clean mugs available.";
const StateWaitressAvailableMugsPluralJP = "【キレイなジョッキ】\n%1杯";
const StateWaitressAvailableGlassesSingularEN = "There is only one clean glass available.";
const StateWaitressAvailableGlassesSingularJP = "【キレイなグラス】\n1杯";
const StateWaitressAvailableGlassesPluralEN = "There are %1 clean glasses available.";
const StateWaitressAvailableGlassesPluralJP = "【キレイなグラス】\n%1杯";
const StateWaitressKarrynLocationEN = "Karryn is at %1.";
const StateWaitressKarrynLocationJP = "【現在の場所】\n%1";
const StateWaitressTableALocationEN = "Karryn is at Table A.";
const StateWaitressTableALocationJP = "【現在のテーブル】\nＡ";
const StateWaitressTableBLocationEN = "Karryn is at Table B.";
const StateWaitressTableBLocationJP = "【現在のテーブル】\nＢ";
const StateWaitressTableCLocationEN = "Karryn is at Table C.";
const StateWaitressTableCLocationJP = "【現在のテーブル】\nＣ";
const StateWaitressTableDLocationEN = "Karryn is at Table D.";
const StateWaitressTableDLocationJP = "【現在のテーブル】\nＤ";
const StateWaitressSleepingEN = "%1 is drunkenly sleeping!\nKick them out of the bar!";
const StateWaitressSleepingJP = "【泥酔中！】\n追い払うべき迷惑客";
const StateWaitressDrinkingDrinkEN = "%1 is drinking a %2.";
const StateWaitressDrinkingDrinkJP = "%1は%2を飲んでいる";

const StateWaitressDrinkingNothingEN = "%1 is not currently drinking anything.";
const StateWaitressDrinkingNothingJP = "今のところ、%1は何も飲んでいない。";
const StateWaitressWantsDrinkEN = "%1 ordered a %2.";
const StateWaitressWantsDrinkJP = "%1は%2を注文した。";

const StateReceptionistVisitorUnknownBeforeEN = "%1 has not stated the purpose of their visitation yet.";
const StateReceptionistVisitorUnknownBeforeJP = "目的はまだ不明";
const StateReceptionistVisitorUnknownAfterEN = "%1 is waiting for Karryn's response.";
const StateReceptionistVisitorUnknownAfterJP = "受付嬢の対応待ち";
const StateReceptionistVisitorWritingBeforeEN = "%1 is holding the papers they need to fill out.";
const StateReceptionistVisitorWritingBeforeJP = "未記入の申込書を持っている";
const StateReceptionistVisitorWritingDuringEN = "%1 is filling out the paperwork.";
const StateReceptionistVisitorWritingDuringJP = "申込書に記入中……";
const StateReceptionistVisitorWritingAfterEN = "%1 is holding the papers they filled out.";
const StateReceptionistVisitorWritingAfterJP = "記入済みの申込書を持っている";
const StateReceptionistVisitorPaperBeforeEN = "%1's %2 pages of paperwork need to be processed.";
const StateReceptionistVisitorPaperBeforeJP = "%2ページある申込書を持っている";
const StateReceptionistVisitorPaperAfterEN = "%1's %2 pages of paperwork are being processed.";
const StateReceptionistVisitorPaperAfterJP = "%2ページの申込書を記入中……";
const StateReceptionistVisitorTimeEN = "%1's paperwork has been processed.\nThey are allowed %2 minutes for visitation.";
const StateReceptionistVisitorTimeJP = "申込書の処理が完了\n\\I[42]所有時間：%2分";
const StateReceptionistVisitorMovingEN = "%1 is currently walking.";
const StateReceptionistVisitorMovingJP = "受付デスクに向かっている……";
const StateReceptionistVisitorSittingEN = "%1 is sitting in their seat.";
const StateReceptionistVisitorSittingJP = "座って待機している";
const StateReceptionistVisitorLineEN = "%1 is waiting on line in front of the desk.";
const StateReceptionistVisitorLineJP = "並んで待機中";
const StateReceptionistVisitorDeskEN = "%1 is standing in front of the desk.";
const StateReceptionistVisitorDeskJP = "カリンの前に立っている";

const StateStripperActorDanceComboEN = "Karryn has used her stripper skills \\C[2]%1 consecutive times\\C[0]!\nThe pleasure damage and stamina cost of her next stripper skill will be increased.";
const StateStripperActorDanceComboJP = "【ダンスコンボ！%1連続目】\n次のダンススキル使用時：\n\\I[42]快楽ダメージ アップ\n\\I[42]体力コスト アップ";

const StateTrainerKarrynLocationEN = "Karryn is with %1.";
const StateTrainerKarrynLocationJP = "【現在のベンチ】\n%1";

const DesireTooltipsMouthIntroEN = "Karryn's Mouth Desire represents her desire\nto have men's body parts in her mouth\nand to taste their various bodily fluids.";
const DesireTooltipsMouthIntroJP = "\\C[1]【口欲】\\C[0]\n\\C[27]カリンの性感帯の１つ、クチの欲求。\\C[0]\nその舌は男のカラダのあらゆる部分を感じ、\n分泌される汁を味わい尽くしてしまう。\n何度もしゃぶり、体液を飲まされる事で\n口内から全身に渡って性衝動が溢れていく。";
const DesireTooltipsBoobsIntroEN = "Karryn's Boobs Desire represents her desire\nto have her perfect breasts be squeezed,\nto have her nipples be squeezed hard,\nand to have hard objects inbetween them.";
const DesireTooltipsBoobsIntroJP = "\\C[1]【乳欲】\\C[0]\n\\C[27]カリンの性感帯の１つ、おっぱいの欲求。\\C[0]\n完璧に実った乳房は揉みしだかれる事を、\n硬く突起した乳首はイジり倒される事を望んでいる。\n胸への刺激は恋のようなドキドキを生み、\n強い性衝動へと駆られてしまう。";
const DesireTooltipsPussyIntroEN = "Karryn's Pussy Desire represents her desire\nto have her clitoris be played with and\nto have increasingly bigger objects\ninserted into her pussy.";
const DesireTooltipsPussyIntroJP = "\\C[1]【膣欲】\\C[0]\n\\C[27]カリンの性感帯の１つ、マンコの欲求。\\C[0]\n誠実な生き方を貫いてきた性器にとって、\nクリと穴への刺激は強烈な興奮材料になる。\nあらゆる手段で濡らしほぐされた膣は、\n腹の奥から性衝動を昂ぶらせていく。";
const DesireTooltipsButtIntroEN = "Karryn's Butt Desire represents her desire\nto have her big butt be groped by others\nand to have foreign objects be put up her ass.";
const DesireTooltipsButtIntroJP = "\\C[1]【尻欲】\\C[0]\n\\C[27]カリンの性感帯の１つ、ケツの欲求。\\C[0]\n誰もが振り返る自慢の巨尻は\n家畜のようにしつけられ、ホジられる事を望んでいる。\n呼び起こされたマゾヒズムは好奇心から\n性衝動を抑えられなくなってしまう。";
const DesireTooltipsCockIntroEN = "Karryn's Cock Desire represents her desire\nto know everything there is know about\neveryone's cock through sight, hearing,\nsmell, taste and touch.";
const DesireTooltipsCockIntroJP = "\\C[1]【棒欲】\\C[0]\n\\C[27]カリンの性感帯の１つ、チンポへの欲求。\\C[0]\n長らく持ち続けた勃起チンポへの興味は強く、\n五感を通してその全てを知りたがっている。\nチンポが持つ想像以上の魅力を知るたびに、\n性衝動のリミッターは完全に崩壊していく。";

const DesireTooltipsBodyDesireRequirementsUnknownEN = "\\I[40] 50    \\I[41]   Soft Petting\n\\I[40] 75    \\I[41]   Heavy Petting\n\\I[40]100   \\I[41]   Sex\n(Default Desire Requirements)";
const DesireTooltipsBodyDesireRequirementsUnknownJP = "\\I[40]ソフト愛撫\\I[41]50\n\\I[40]ハード愛撫\\I[41]75\n\\I[40]セックス\\I[41]100\n （全てデフォルト値）";
const DesireTooltipsCockDesireRequirementsUnknownEN = "\\I[40] 50    \\I[41]   Handjob\n\\I[40] 65    \\I[41]   Service\n\\I[40] 85    \\I[41]   Penetration\n(Default Desire Requirements)";
const DesireTooltipsCockDesireRequirementsUnknownJP = "\\I[40]手コキ\\I[41]50\n\\I[40]挿入なしプレイ\\I[41]65\n\\I[40]挿入セックス\\I[41]85\n （全てデフォルト値）";
const DesireTooltipsDesireRequirementsKnownEN = "Desire Requirements";
const DesireTooltipsDesireRequirementsKnownJP = "";
const DesireTooltipsDesireRequirementsKnownFormatEN = "";
const DesireTooltipsDesireRequirementsKnownFormatJP = "\\I[40]\\C[27]%1\\I[41]\\C[0]%2";


const DesireTooltipsMouthDesireDebuffOneEN = "\\I[56]\\C[2]Karryn's Accuracy will start decreasing\n\\C[0]at 50 Mouth Desire and above from\nunconsciously opening her mouth wider\nto shout out her attacks beforehand.";
const DesireTooltipsMouthDesireDebuffOneJP = "\\I[56]口欲が50に達すると、\n\\I[0]口寂しさから気が散ってしまい\n\\I[0]\\C[2]攻撃が命中しにくくなる……。\\C[0]";
const DesireTooltipsMouthDesireDebuffTwoEN = "\\I[56]\\C[2]Karryn's Critical Damage will start decreasing\n\\C[0]at 100 Mouth Desire and above from wasting\ntime on excessively licking her lips to satisfy\nher urges to have something else there.";
const DesireTooltipsMouthDesireDebuffTwoJP = "\\I[56]口欲が100に達すると、\n\\I[0]“何か”をしゃぶりたい気持ちが邪魔して\n\\I[0]\\c[2]クリティカルダメージが低下してしまう……。\\C[0]";

const DesireTooltipsBoobsDesireDebuffOneEN = "\\I[56]\\C[2]Karryn's Evasion will start decreasing\n\\C[0]at 50 Boobs Desire from being too\ndistracted by her nipples demanding\nsome love and attention.";
const DesireTooltipsBoobsDesireDebuffOneJP = "\\I[56]乳欲が50に達すると、\n\\I[0]ビンカンになっている乳首が気になって\n\\I[0]\\C[2]攻撃を避けにくくなってしまう……。\\C[0]";
const DesireTooltipsBoobsDesireDebuffTwoEN = "\\I[56]\\C[2]Karryn's Critical Rate will start decreasing\n\\C[0]at 100 Boobs Desire from the pressure on \nher chest making her feel like they are\ntrying to escape.";
const DesireTooltipsBoobsDesireDebuffTwoJP = "\\I[56]乳欲が100に達すると、\n\\I[0]爆乳から誘惑フェロモンが漏れて\n\\I[0]\\C[2]クリティカルヒットは出づらくなっていく……。\\C[0]";

const DesireTooltipsPussyDesireDebuffOneEN = "\\I[56]\\C[2]Karryn's Strip Resist will start decreasing\n\\C[0]at 50 Pussy Desire from wanting to free\nher vagina from its pulsing heat.";
const DesireTooltipsPussyDesireDebuffOneJP = "\\I[56]膣欲が50に達すると、\n\\I[0]股間が火照ってカラダ全体の体温も増すため\n\\I[0]\\C[2]脱がされやすくなってしまう……。\\C[0]";
const DesireTooltipsPussyDesireDebuffTwoEN = "\\I[56]\\C[2]Karryn's Critical Evasion will start decreasing\n\\C[0]at 100 Pussy Desire from the phantom ache\naround her vulva distracting her. ";
const DesireTooltipsPussyDesireDebuffTwoJP = "\\I[56]膣欲が100に達すると、\n\\I[0]マン奥の疼きを収めるのに夢中で\n\\I[0]\\C[2]クリティカルを避けづらくなる……。\\C[0]";

const DesireTooltipsButtDesireDebuffOneEN = "\\I[56]\\C[2]Karryn's Defense will start decreasing\n\\C[0]at 50 Butt Desire from unconsciously messing\nup her stance by showing off her ass.";
const DesireTooltipsButtDesireDebuffOneJP = "\\I[56]尻欲が50に達すると、\n\\I[0]無意識にケツがオスを求め出し\n\\I[0]\\C[2]守備が疎かになってしまう……。\\C[0]";
const DesireTooltipsButtDesireDebuffTwoEN = "\\I[56]\\C[2]Karryn's Pet Resist will start decreasing\n\\C[0]at 100 Butt Desire from wanting a man\nto vigorously attack her naughty ass.";
const DesireTooltipsButtDesireDebuffTwoJP = "\\I[56]尻欲が100に達すると、\n\\I[0]飢えたエロ尻で男を誘ってしまい\n\\I[0]\\C[2]愛撫を受け入れやすくなる……。\\C[0]";

const DesireTooltipsCockDesireDebuffOneEN = "\\I[56]\\C[2]Karryn's Attack will start decreasing\n\\C[0]at 50 Cock Desire from unconsciously\nholding back her full power in case\nshe accidently hits them in the groin.";
const DesireTooltipsCockDesireDebuffOneJP = "\\I[56]棒欲が50に達すると、\n\\I[0]男の股間に意識を持っていかれて\n\\I[0]\\C[2]攻撃するパワーが弱まってしまう……。\\C[0]";
const DesireTooltipsCockDesireDebuffTwoEN = "\\I[56]\\C[2]Karryn's Sex Resist will start decreasing\n\\C[0]at 100 Cock Desire from the thoughts in\nher head telling her to just submit to cock.";
const DesireTooltipsCockDesireDebuffTwoJP = "\\I[56]棒欲が100に達すると、\n\\I[0]勃起チンポへの忠誠心が膨らんでしまい\n\\I[0]\\C[2]セックスへの抵抗は薄れていく……。\\C[0]";

const DesireTooltipsMouthDesireTopBuffEN = "\\I[56]When Karryn's Mouth Desire is her top desire,\n\\C[11]her enemies' Defense will be lowered\n\\C[0]because of her seductively inviting mouth\nand lewd tongue movements.";
const DesireTooltipsMouthDesireTopBuffJP = "\\I[56]性欲の中で口欲が最も高い時、\n\\I[0]卑猥に誘う舌先に魅了された敵は\n\\I[0]\\C[11]カリンからの攻撃に対し守備が甘くなる。\\C[0]";
const DesireTooltipsBoobsDesireTopBuffEN = "\\I[56]When Karryn's Boobs Desire is her top desire,\n\\C[11]her enemies' Evasion will be lowered\n\\C[0]because they can't keep their eyes off the tits\nshe keeps emphasizing with every move.";
const DesireTooltipsBoobsDesireTopBuffJP = "\\I[56]性欲の中で乳欲が最も高い時、\n\\I[0]爆乳から視線を逸らせなくなった敵は\n\\I[0]\\C[11]カリンからの攻撃を避けにくくなる。\\C[0]";
const DesireTooltipsPussyDesireTopBuffEN = "\\I[56]When Karryn's Pussy Desire is her top desire,\n\\C[11]her enemies have an increased chance of\ngetting Horny every turn \\C[0]because of the\npheromones leaking out of her honey trap.";
const DesireTooltipsPussyDesireTopBuffJP = "\\I[56]性欲の中で膣欲が最も高い時、\n\\I[0]カリンの股間から放たれるフェロモンのせいで\n\\I[0]\\C[27]敵は毎ターン興奮する可能性がある。\\C[0]";
const DesireTooltipsButtDesireTopBuffEN = "\\I[56]When Karryn's Butt Desire is her top desire,\n\\C[11]her enemies' Accuracy will be lowered\n\\C[0]because they're too focused on chasing \nher swaying meaty hips.";
const DesireTooltipsButtDesireTopBuffJP = "\\I[56]性欲の中で尻欲が最も高い時、\n\\I[0]揺れるケツを追いかけるのに必死で\n\\I[0]\\C[11]敵はカリンに攻撃を当てにくくなる。\\C[0]";
const DesireTooltipsCockDesireTopBuffEN = "\\I[56]When Karryn's Cock Desire is her top desire,\n\\C[27]her Cock Desire Gain Rate will be increased\n\\C[0]because she can't stop thinking about cock.";
const DesireTooltipsCockDesireTopBuffJP = "\\I[56]性欲の中で棒欲が最も高い時、\n\\I[0]頭の中は勃起チンポでいっぱいになり\n\\I[0]\\C[27]棒欲がどんどん上昇してしまう……。\\C[0]";

const VirginityTextEN = "Sex Status";  //currently unused
const VirginityTextJP = "セックスのステータス"; //currently unused
const VirginityYesEN = "\\C[13]Virgin\\C[0]";
const VirginityYesJP = "\\C[13]処女\\C[0]";
const VirginityNoEN = "\\C[27]Non-virgin\\C[0]";
const VirginityNoJP = "\\C[27]非処女\\C[0]";
const VirginActorTextEN = "First Time With:"; //currently unused
const VirginActorTextJP = "初体験："; //currently unused
const VirginActorNoneEN = "---------"; //currently unused
const VirginActorNoneJP = "---------"; //currently unused

const ResistNameEN = " Resist";
const ResistNameJP = "耐性";
const SafeModeEN = "Safe Mode"; //currently unused
const SafeModeJP = "Safe Mode"; //currently unused
const ReplayModeEN = "Replay Mode"; //currently unused
const ReplayModeJP = "Replay Mode"; //currently unused
const PixelMovementEN = "Pixel Movement"; //currently unused
const PixelMovementJP = "Pixel Movement"; //currently unused
const BattleLogEN = "History";
const BattleLogJP = "バックログ";
const BattleStatusEN = "Status";
const BattleStatusJP = "ステータス";
const EdictsEN = "Edicts";
const EdictsJP = "指令";
const EdictCostEN = "Edict Cost";
const EdictCostJP = "指令コスト";
const QuestLogEN = "Radio"; //currently unused
const QuestLogJP = "無線";//currently unused
const GlossaryEN = "Notes";//currently unused
const GlossaryJP = "メモ";//currently unused
const PassiveObtainedOnEN = "Obtained on Day %1";
const PassiveObtainedOnJP = "%1日目に取得";
const StaminaRecoveryEN = "\\C[11]%1's stamina is restored by %2 points!";
const StaminaRecoveryJP = "\\C[11]%1の体力が%2回復！";
const EnergyRecoveryEN = "\\C[4]%1's energy is restored by %2 points!";
const EnergyRecoveryJP = "\\C[4]%1の精力が%2回復！";

const KarrynTauntMessageEN = "Karryn starts taunting!";
const KarrynTauntMessageJP = "カリンは挑発した！";
const KarrynFlauntMessageEN = "Karryn starts flaunting!";
const KarrynFlauntMessageJP = "カリンは自慢のボディで誘惑した！";

const AronCallLizardmanFailEN = "However, no one showed up...!";
const AronCallLizardmanFailJP = "しかし、誰も現れなかった……！";

const ActorGainPleasureEN = "\\C[27]%1's pleasure increases by %2!";
const ActorGainPleasureJP = "\\C[27]%1の快楽度が%2アップ！";
const ActorGainPleasure_SightEN = "\\C[27]%1's pleasure increases by %2 just from being looked at!";
const ActorGainPleasure_SightJP = "\\C[27]%1は見られて快楽度が%2アップ！";
const ActorGainPleasure_ToyEN = "\\C[27]%1's pleasure increases by %2 from the toys!";
const ActorGainPleasure_ToyJP = "\\C[27]%1は装着されたオモチャで快楽度が%2アップ！";

const PleasurePercentTextEN = " percent";
const PleasurePercentTextJP = "％";

const EnemyGainPleasure_Percent_EN = "\\C[1]%1 is %2 closer to ejaculating!";
const EnemyGainPleasure_Percent_JP = "\\C[1]%1の射精感が%2上昇！";
const EnemyGainPleasure_Value_EN = "\\C[1]%1's pleasure increases by %2!";
const EnemyGainPleasure_Value_JP = "\\C[1]%1の射精感が%2上昇！";
const ActorSingleOrgasmEN = "\\C[31]%1 loses %2 points of energy!";
const ActorSingleOrgasmJP = "\\C[31]%1は精力を%2失った！";
const ActorMultipleOrgasmEN = "\\C[1]%1 has %3 consecutive orgasms! \\C[31]%1 loses %2 points of energy!";
const ActorMultipleOrgasmJP = "\\C[1]%1は%3回連続イッた！\\C[31]精力を%2失った！";

const EjaculatePussyEN = "\\C[27]%1 invades %2's womb with \\C[1]%3 ml of semen!";
const EjaculatePussyJP = "\\C[27]膣内\\C[0]に出されたザーメン量、\\C[1]%3ml\\C[0]！！";
const EjaculateAnalEN = "\\C[27]%1 fills up %2's ass with \\C[1]%3 ml of semen!";
const EjaculateAnalJP = "\\C[27]アナル\\C[0]に出されたザーメン量、\\C[1]%3ml\\C[0]！！";
const EjaculateMouthEN = "\\C[27]%1 coats %2's throat with \\C[1]%3 ml of semen!";
const EjaculateMouthJP = "\\C[27]クチ\\C[0]に出されたザーメン量、\\C[1]%3ml\\C[0]！！";

const BukkakeFaceEN = "\\C[27]%1 covers %2's face with \\C[1]%3 ml of semen!";
const BukkakeFaceJP = "\\C[27]顔\\C[0]に付いたザーメン量、\\C[1]%3ml\\C[0]！！";
const BukkakeBoobsEN = "\\C[27]%1 cums on %2's boobs with \\C[1]%3 ml of semen!";
const BukkakeBoobsJP = "\\C[27]おっぱい\\C[0]に付いたザーメン量、\\C[1]%3ml\\C[0]！！";
const BukkakeArmsEN = "\\C[27]%1 cums on %2's arms with \\C[1]%3 ml of semen!";
const BukkakeArmsJP = "\\C[27]腕\\C[0]に付いたザーメン量、\\C[1]%3ml\\C[0]！！";
const BukkakeLegsEN = "\\C[27]%1 cums on %2's legs with \\C[1]%3 ml of semen!";
const BukkakeLegsJP = "\\C[27]足\\C[0]に付いたザーメン量、\\C[1]%3ml\\C[0]！！";
const BukkakeButtEN = "\\C[27]%1 cums on %2's butt with \\C[1]%3 ml of semen!";
const BukkakeButtJP = "\\C[27]ケツ\\C[0]に付いたザーメン量、\\C[1]%3ml\\C[0]！！";

const ActorFirstKissMouthEN = "\\C[18]Karryn just had her first kiss!!!";
const ActorFirstKissMouthJP = "\\C[18]カリンはファーストキスを奪われてしまった！！！";
const ActorFirstKissCockEN = "\\C[18]Oh no! Karryn's first kiss was with someone's dick!!!";
const ActorFirstKissCockJP = "\\C[18]なんと！カリンのファーストキスの相手はチンポの先っちょになってしまった！！！";
const ActorFirstKissAnusEN = "\\C[18]Oh no! Karryn's first kiss was with someone's anus!!!";
const ActorFirstKissAnusJP = "\\C[18]なんと！カリンのファーストキスの相手はケツの穴になってしまった！！！";
const ActorLostPussyVirginityEN = "\\C[18]Karryn's hymen broke!!!!";
const ActorLostPussyVirginityJP = "\\C[18]カリンは処女を失った！！！！！";
const ActorLostAnalVirginityEN = "\\C[18]Karryn lost her anal virginity!!";
const ActorLostAnalVirginityJP = "\\C[18]カリンはアナルの処女を失った！！！！！";

const InvasionNoiseLevelOneEN = "\\C[8]Faint noises can be heard outside.";
const InvasionNoiseLevelOneJP = "\\C[8]外で何やら物音がしているようだ……。";
const InvasionNoiseLevelTwoEN = "\\C[7]Faint movement can be heard outside.";
const InvasionNoiseLevelTwoJP = "\\C[7]外からわずかに騒音が聞こえる…。";
const InvasionNoiseLevelThreeEN = "\\C[2]Inaudible talking can be heard outside.";
const InvasionNoiseLevelThreeJP = "\\C[2]別の場所から話声が聞こえる。";
const InvasionNoiseLevelFourEN = "\\C[10]Someone is shouting outside.";
const InvasionNoiseLevelFourJP = "\\C[10]近くで騒ぎ声が聞こえる！";
const InvasionBattleStartEN = "A bunch of people barge into the room!";
const InvasionBattleStartJP = "侵入者が現れた！！";

const MasturbateBattleTouchClitEN = "Karryn starts rubbing her clitoris!";
const MasturbateBattleTouchClitJP = "カリンはクリトリスを刺激し始めた！";
const MasturbateBattleTouchPussyEN = "Karryn starts rubbing her pussy lips!";
const MasturbateBattleTouchPussyJP = "カリンはマンコを刺激し始めた！";
const MasturbateBattleTouchAnalEN = "Karryn starts touching her anus!";
const MasturbateBattleTouchAnalJP = "カリンはアナルを刺激し始めた！";
const MasturbateBattleTouchBoobsEN = "Karryn starts squeezing her boobs!";
const MasturbateBattleTouchBoobsJP = "カリンはおっぱいを揉みしだき始めた！";
const MasturbateBattleTouchNipplesEN = "Karryn starts pinching her nipples!";
const MasturbateBattleTouchNipplesJP = "カリンは乳首をつまんで刺激し始めた！";

const MasturbateBattleFingerPussyEN = "Karryn starts fingering her pussy!";
const MasturbateBattleFingerPussyJP = "カリンはマンコに指を挿れて出し入れを始めた！";
const MasturbateBattleFingerAnalEN = "Karryn starts fingering her anus!";
const MasturbateBattleFingerAnalJP = "カリンはアナルに指を挿れて出し入れを始めた！";

const MasturbateBattleToyClitPinkRotorEN = "Karryn starts playing with the pink rotor!";
const MasturbateBattleToyClitPinkRotorJP = "カリンはピンクローターでクリに衝撃を走らせた！";
const MasturbateBattleToyPussyPenisEN = "Karryn starts playing with the penis dildo!";
const MasturbateBattleToyPussyPenisJP = "カリンはディルドをマンコに激しく出し挿れした！";
const MasturbateBattleToyAnalBeadsEN = "Karryn starts playing with the anal beads!";
const MasturbateBattleToyAnalBeadsJP = "カリンはアナルビーズでケツ穴を卑猥にほじくった！";

const MasturbateBattleSuckFingersEN = "Karryn starts sucking on her fingers!";
const MasturbateBattleSuckFingersJP = "カリンは指をしゃぶり始めた！";
const MasturbateBattleSuckNipplesEN = "Karryn starts sucking on her own nipples!";
const MasturbateBattleSuckNipplesJP = "カリンは乳首をしゃぶり始めた！";

const SkillDescriptionNoValidTargetsEN = "There is no valid target.";
const SkillDescriptionNoValidTargetsJP = "※使える相手がいません。";
const SkillDescriptionNotEnoughDesireEN = "Not enough desire to do this.";
const SkillDescriptionNotEnoughDesireJP = "※性欲が不足しています。";
const SkillDescriptionCantDoThisEN = "Can't use this skill right now.";
const SkillDescriptionCantDoThisJP = "※今はまだ使えません。";
const SkillDescriptionHandsBusyEN = "Need a free hand to do this.";
const SkillDescriptionHandsBusyJP = "※手の空きが必要です。";
const SkillDescriptionNotWetEN = "Not wet enough to do this.";
const SkillDescriptionNotWetJP = "※濡れていないので出来ません。";

const TitleDescriptionFirstTimeTitleEquipEN = "\\C[29] (Equip once to get effects for this playthrough)";
const TitleDescriptionFirstTimeTitleEquipJP = "\\C[29](１度装備すれば効果を取得可能)";

const CharmEquipReqTextEN = "Charm Requirement: ";
const CharmEquipReqTextJP = "必要な魅力： ";
const GrowthRateTextEN = " Growth";
const GrowthRateTextJP = "成長度";

const RemResultsVictoryEN = "Battle Victory!";
const RemResultsVictoryJP = "勝利！！";
const RemResultsDefeatEN = "Battle Defeat...";
const RemResultsDefeatJP = "敗北した……";
const RemResultsAbortedEN = "Battle Aborted.";
const RemResultsAbortedJP = "撤退した……";
const RemResultsMasturbateBattleNoneEN = "Karryn is tired...";
const RemResultsMasturbateBattleNoneJP = "カリンは疲れてしまった……";
const RemResultsMasturbateBattleSingleEN = "Karryn came!";
const RemResultsMasturbateBattleSingleJP = "カリンは満足した！！";
const RemResultsMasturbateBattlePluralEN = "Karryn came %1 times!";
const RemResultsMasturbateBattlePluralJP = "カリンは%1回絶頂した！！！";
const RemResultsJobBattleEndEN = "Karryn's shift has ended.";
const RemResultsJobBattleEndJP = "■ アルバイトタイム 終了 ■";
const RemResultsBitchEndBattleEndEN = "HAPPY END";
const RemResultsBitchEndBattleEndJP = "ＨＡＰＰＹ　ＥＮＤ";
const RemResultsEndlessBattleNormalEN = "Final Result: Endless Prison Wave %1";
const RemResultsEndlessBattleNormalJP = "【果てしなきプリズンバトル】WAVE %1 達成";
const RemResultsEndlessBattleHellEN = "Final Result: Endless Hell Wave %1";
const RemResultsEndlessBattleHellJP = "【終わりなきヘルバトル】WAVE %1 達成";
const RemResultsGainedExpEN = "EXP Gained";
const RemResultsGainedExpJP = "獲得経験値";
const RemResultsLevelUpEN = "LEVEL UP!";
const RemResultsLevelUpJP = "レベルアップ！";
const RemResultsOrderIncreaseEN = "\\I[408]\\C[11]Restored %1 Prison Order!";
const RemResultsOrderIncreaseJP = "\\I[408]\\C[11]秩序が%1上昇した！";
const RemResultsOrderDecreaseEN = "\\I[409]\\C[10]Lost %1 Prison Order...";
const RemResultsOrderDecreaseJP = "\\I[409]\\C[10]秩序が%1低下した……。";
const RemResultsFundingIncreaseEN = "\\I[400]\\C[11]Gained %1 G!";
const RemResultsFundingIncreaseJP = "\\I[400]\\C[11]資金が%1Ｇ増えた！";
const RemResultsFundingDecreaseEN = "\\I[401]\\C[10]Lost %1 G...";
const RemResultsFundingDecreaseJP = "\\I[401]\\C[10]資金が%1Ｇ減った……。";
const RemResultsFatigueIncreaseEN = "\\I[389]\\C[10]Fatigue increased by %1%...";
const RemResultsFatigueIncreaseJP = "\\I[389]\\C[10]疲労を%1％蓄積した……。";
const RemResultsFatigueDecreaseEN = "\\I[388]\\C[11]Fatigue decreased by %1%!";
const RemResultsFatigueDecreaseJP = "\\I[388]\\C[11]疲労が%1％減少した！";
const RemResultsItemDropEN = "\\I[96]\\C[11]Gained new Accessory %1!";
const RemResultsItemDropJP = "\\I[96]\\C[11]新アクセサリー『%1』をゲット！";

const CockinessIncreasedTextEN = "\\I[354]\\C[11]Cockiness increased to %1%!";
const CockinessIncreasedTextJP = "\\I[354]\\C[11]大胆さが%1％まで上昇した！";
const CockinessDecreasedTextEN = "\\I[489]\\C[10]Cockiness has fallen to %1%...";
const CockinessDecreasedTextJP = "\\I[489]\\C[10]大胆さが%1％に減少した……。";
const CockinessResetEN = "\\I[489]\\C[10]Cockiness reset to zero...";
const CockinessResetJP = "\\I[489]\\C[10]大胆さがリセットされた……。";
const CockinessMaxxedOutEN = "\\I[354]\\C[11]Cockiness is at 100%!";
const CockinessMaxxedOutJP = "\\I[354]\\C[11]大胆さが100％になった！";

const RemResultsSubduedWithAttackEN = "\\I[74]\\C[11]Subdued %1 %2 physically!";
const RemResultsSubduedWithAttackJP = "\\I[74]\\C[11]%1人を撃退した！";
const RemResultsSubduedSexuallyEN = "\\I[43]\\C[27]Subdued %1 %2 sexually!";
const RemResultsSubduedSexuallyJP = "\\I[43]\\C[27]%1人を性的に屈服させた！";
const RemResultsSubduedWithAttackAndSexuallyEN = "\\I[291]\\C[11]Subdued %1 %2 physically and \\C[27]%3 %4 sexually\\C[11]!";
const RemResultsSubduedWithAttackAndSexuallyJP = "\\I[291]\\C[11]%1人を撃退し、%3人は性的に屈服させた！";
const RemResultsKarrynOrgasmSingularEN = "\\I[99]\\C[27]Orgasmed once!";
const RemResultsKarrynOrgasmSingularJP = "\\I[99]\\C[27]1回だけ絶頂した！";
const RemResultsKarrynOrgasmPluralEN = "\\I[99]\\C[27]Orgasmed %1 times!";
const RemResultsKarrynOrgasmPluralJP = "\\I[99]\\C[27]%1回絶頂した！";
const RemResultsKarrynMasturbatedInBattleSingularEN = "\\I[46]\\C[27]Masturbated during battle once!";
const RemResultsKarrynMasturbatedInBattleSingularJP = "\\I[46]\\C[27]人前で1回だけオナニーした！";
const RemResultsKarrynMasturbatedInBattlePluralEN = "\\I[46]\\C[27]Masturbated during battle %1 times!";
const RemResultsKarrynMasturbatedInBattlePluralJP = "\\I[46]\\C[27]人前で%1回オナニーした！";
const RemResultsKarrynKissEN = "\\I[288]\\C[27]Kissed %1 %2!";
const RemResultsKarrynKissJP = "\\I[288]\\C[27]%1人とキスした！";
const RemResultsKarrynHandjobEN = "\\I[289]\\C[27]Gave handjobs to %1 %2!";
const RemResultsKarrynHandjobJP = "\\I[289]\\C[27]%1人に手コキした！";
const RemResultsKarrynBlowjobEN = "\\I[294]\\C[27]Gave blowjobs to %1 %2!";
const RemResultsKarrynBlowjobJP = "\\I[294]\\C[27]%1人にフェラした！";
const RemResultsKarrynTitjobEN = "\\I[221]\\C[27]Gave titjobs to %1 %2!";
const RemResultsKarrynTitjobJP = "\\I[221]\\C[27]%1人にパイズリした！";
const RemResultsKarrynFootjobEN = "\\I[219]\\C[27]Gave footjobs to %1 %2!";
const RemResultsKarrynFootjobJP = "\\I[219]\\C[27]%1人に足コキした！";
const RemResultsKarrynRimjobEN = "\\I[299]\\C[27]Gave rimjobs to %1 %2!";
const RemResultsKarrynRimjobJP = "\\I[299]\\C[27]%1人にケツ舐めした！";
const RemResultsKarrynVaginalSexEN = "\\I[295]\\C[27]Had vaginal sex with %1 %2!";
const RemResultsKarrynVaginalSexJP = "\\I[295]\\C[27]%1人とマンコでセックスした！";
const RemResultsKarrynAnalSexEN = "\\I[296]\\C[27]Had anal sex with %1 %2!";
const RemResultsKarrynAnalSexJP = "\\I[296]\\C[27]%1人とアナルでセックスした！";


const RemParamLevelGainedSingularEN = "\\C[16]%3Gained %1 %2 Level!";
const RemParamLevelGainedSingularJP = "\\C[16]%3%2レベルが %1 上がった！";
const RemParamLevelGainedPluralEN = "\\C[16]%3Gained %1 %2 Levels!!";
const RemParamLevelGainedPluralJP = "\\C[16]%3%2レベルが %1 上がった！";

const RemWardenLevelRequireSingularEN = "\\C[8]\\I[25]%1 more stat level until the next Warden Level!";
const RemWardenLevelRequireSingularJP = "\\C[8]\\I[25]次の看守レベルまで、あと%1のステータスレベル！";
const RemWardenLevelRequirePluralEN = "\\C[8]\\I[25]%1 more stat levels until the next Warden Level!";
const RemWardenLevelRequirePluralJP = "\\C[8]\\I[25]次の看守レベルまで、あと%1のステータスレベル！";
const RemWardenLevelUpEN = "\\RLI[50]\\C[11]LEVEL UP!!! \\C[16]%1 has reached Warden Level %2!!";
const RemWardenLevelUpJP = "\\RLI[50]\\C[11]レベルアップ！！\\C[16]%1は看守レベルが %2 になった！！";
const RemWardenLevelLimitReachedEN = "\\RLI[51]\\C[8]%1 has reached the Warden Level Limit and will not gain any more stat levels.";
const RemWardenLevelLimitReachedJP = "\\RLI[51]\\C[8]看守レベルが上限に達しているためこれ以上ステータスレベルを上げられない。";

const RemResultsPassivesTitleEN = "New Passives Unlocked!!";
const RemResultsPassivesTitleJP = "新パッシブ解放！！";
const RemResultsTooManyPassivesUnlockedEN = "\\C[8]\\I[25]Plus %1 more other Passives!";
const RemResultsTooManyPassivesUnlockedJP = "\\C[8]\\I[25]その他%1パッシブ";

const RemDailyReportDayCountEN = "\\#\\{\\{Day %1: Daily Report\\}\\}";
const RemDailyReportDayCountJP = "\\#\\{\\{■ 報告書 ～%1日目～ ■\\}\\}";
const RemDailyReportAnarchyNoLimitEN = "\\I[377]Day %2 of Level %1 being in \\C[7]Anarchy\\C[0].";
const RemDailyReportAnarchyNoLimitJP = "\\I[377]監獄レベル%1の\\C[7]無法状態\\C[0]を%2日間継続\\";
const RemDailyReportAnarchyLimitBefore_singularEN = "\\I[377]Day %2 of Level %1 being in \\C[7]Anarchy\\C[0]. Control might be further decreased starting tomorrow from unrest!";
const RemDailyReportAnarchyLimitBefore_singularJP = "\\I[377]監獄レベル%1の\\C[7]無法状態\\C[0]を%2日間継続 \\I[25]明日、統制力が更に減少するおそれあり";
const RemDailyReportAnarchyLimitBefore_pluralEN = "\\I[377]Day %2 of Level %1 being in \\C[7]Anarchy\\C[0]. Control might further decrease in about %3 days from unrest!";
const RemDailyReportAnarchyLimitBefore_pluralJP = "\\I[377]監獄レベル%1の\\C[7]無法状態\\C[0]を%2日間継続 \\I[25]%3日後、統制力が更に減少する可能性あり";
const RemDailyReportAnarchyPastLimitEN = "\\I[377]Day %2 of Level %1 being in Anarchy. Control is further decreased by \\C[18]-%3\\C[0] due to unrest!";
const RemDailyReportAnarchyPastLimitJP = "\\I[377]監獄レベル%1の\\C[7]無法状態\\C[0]を%2日間継続 \\I[25]統制力：\\C[18]マイナス%3\\C[0]";
const RemDailyReportRiot_NewEN = "\\I[407]Level %1 has started \\C[18]RIOTING\\C[0]!! Order has decreased by \\C[18]-%2\\C[0]!";
const RemDailyReportRiot_NewJP = "\\I[407]監獄レベル%1で\\C[18]暴動勃発\\C[0]!! \\I[25]秩序：\\C[18]マイナス%2\\C[0]";
const RemDailyReportRiot_OldEN = "\\I[407]Level %1 has been \\C[18]RIOTING\\C[0] for %2 days! Control is further decreased by \\C[18]-%3\\C[0]!";
const RemDailyReportRiot_OldJP = "\\I[407]監獄レベル%1で\\C[18]暴動勃発\\C[0]!! \\I[25]統制力：更に\\C[18]マイナス%3\\C[0]";
const RemDailyReportOrderChange_PositiveEN = "\\I[408]Order has risen to %1.";
const RemDailyReportOrderChange_PositiveJP = "\\I[408]秩序：%1に上昇";
const RemDailyReportOrderChange_NegativeEN = "\\I[409]Order has fallen to %1.";
const RemDailyReportOrderChange_NegativeJP = "\\I[409]秩序：%1にダウン";
const RemDailyReportOrderChange_NeutralEN = "\\I[408]Order has remained the same at %1.";
const RemDailyReportOrderChange_NeutralJP = "\\I[408]秩序：前日同様%1を維持";
const RemDailyReportFundingChange_PositiveEN = "\\I[410]Funds have increased to \\C[11]$%1\\C[0].";
const RemDailyReportFundingChange_PositiveJP = "\\I[410]資金：\\C[11]プラス%1Ｇ\\C[0]";
const RemDailyReportFundingChange_NegativeEN = "\\I[411]Funds have decreased to \\C[2]$%1\\C[0].";
const RemDailyReportFundingChange_NegativeJP = "\\I[411]資金：\\C[2]マイナス%1Ｇ\\C[0]";
const RemDailyReportBankruptcyEN = "\\I[411]The prison is currently \\C[2]BANKRUPTED\\C[0]!!! Control is further decreased by \\C[18]-%1\\C[0]!";
const RemDailyReportBankruptcyJP = "\\I[411]資金：\\C[2]0Ｇ (破産) \\C[0]\\I[25]統制力：更に\\C[18]マイナス%1\\C[0]";
const RemDailyReportEdictPoints_SingularEN = "\\I[364]%1 Edict Point is available today.";
const RemDailyReportEdictPoints_SingularJP = "\\I[364]本日の使用可能な指令値：%1";
const RemDailyReportEdictPoints_PluralEN = "\\I[364]%1 Edict Points are available today.";
const RemDailyReportEdictPoints_PluralJP = "\\I[364]本日の使用可能な指令値：%1";
const RemDailyReportBarRep_AlmostDecayEN = "\\I[188]Bar Reputation is about to \\C[8]decay\\C[0]. Work as a waitress today to prevent it.";
const RemDailyReportBarRep_AlmostDecayJP = "\\I[188]酒場の評判：\\C[8]ガタ落ち\\C[0] \\I[24]ウェイトレスのバイトで対策可能";
const RemDailyReportBarRep_DecayedEN = "\\I[188]\\C[8]Bar Reputation has decayed by -1.\\C[0]";
const RemDailyReportBarRep_DecayedJP = "\\I[188]\\C[8]酒場の評判：マイナス1\\C[0]";
const RemDailyReportVisitorRep_AlmostDecayEN = "\\I[159]Visitor Center Reputation is about to \\C[8]decay\\C[0]. Work as a receptionist today to prevent it.";
const RemDailyReportVisitorRep_AlmostDecayJP = "\\I[159]面会人受付所の評判：\\C[8]ガタ落ち\\C[0] \\I[24]受付嬢のバイトで対策可能";
const RemDailyReportVisitorRep_DecayedEN = "\\I[159]\\C[8]Visitor Center Reputation has decayed by -1.\\C[0]";
const RemDailyReportVisitorRep_DecayedJP = "\\I[159]\\C[8]面会人受付所の評判：マイナス1\\C[0]";
const RemDailyReportToiletRep_AlmostDecayEN = "\\I[234]Bathroom Reputation is about to \\C[8]decay\\C[0]. Rest at the toilet today to prevent it.";
const RemDailyReportToiletRep_AlmostDecayJP = "\\I[234]トイレの評判：\\C[8]ガタ落ち\\C[0] \\I[24]個室で休憩すると対策可能";
const RemDailyReportToiletRep_DecayedEN = "\\I[234]\\C[8]Bathroom Reputation has decayed by -1.\\C[0]";
const RemDailyReportToiletRep_DecayedJP = "\\I[234]\\C[8]トイレの評判：マイナス1\\C[0]";
const RemDailyReportStripClubRep_AlmostDecayEN = "\\I[21]Strip Club Reputation is about to \\C[8]decay\\C[0]. Work as a stripper today to prevent it.";
const RemDailyReportStripClubRep_AlmostDecayJP = "\\I[21]ストリップクラブの評判：\\C[8]ガタ落ち\\C[0] \\I[24]ストリッパーのバイトで対策可能";
const RemDailyReportStripClubRep_DecayedEN = "\\I[21]\\C[8]Strip Club Reputation has decayed by -1.\\C[0]";
const RemDailyReportStripClubRep_DecayedJP = "\\I[21]\\C[8]ストリップクラブの評判：マイナス1\\C[0]";
const RemDailyReportGymRep_AlmostDecayEN = "\\I[159]Gym Reputation is about to \\C[8]decay\\C[0]. Work as a trainer today to prevent it.";
const RemDailyReportGymRep_AlmostDecayJP = "\\I[159]ジムの評判：\\C[8]ガタ落ち\\C[0] \\I[24]トレーナーのバイトで対策可能";
const RemDailyReportGymRep_DecayedEN = "\\I[159]\\C[8]Gym Reputation has decayed by -1.\\C[0]";
const RemDailyReportGymRep_DecayedJP = "\\I[159]\\C[8]ジムの評判：マイナス1\\C[0]";

const RemParamGainedStrengthEN = "Strength increased by %1!"; //unused
const RemParamGainedStrengthJP = "腕力が %1 上がった！"; //unused
const RemParamGainedStaminaEN = "Stamina increased by %1!"; //unused
const RemParamGainedStaminaJP = "体力が %1 上がった！"; //unused
const RemParamGainedEnergyEN = "Energy increased by %1!"; //unused
const RemParamGainedEnergyJP = "精力が %1 上がった！"; //unused
const RemParamGainedDexterityEN = "Dexterity increased by %1!"; //unused
const RemParamGainedDexterityJP = "器用さが %1 上がった！"; //unused
const RemParamGainedAgilityEN = "Agility increased by %1!"; //unused
const RemParamGainedAgilityJP = "素早さが %1 上がった！"; //unused
const RemParamGainedEnduranceEN = "Endurance increased by %1!"; //unused
const RemParamGainedEnduranceJP = "忍耐力が %1 上がった！"; //unused
const RemParamGainedMindEN = "Mind increased by %1!"; //unused
const RemParamGainedMindJP = "マインドが %1 上がった！"; //unused
const RemParamGainedCharmEN = "Charm increased by %1!"; //unused
const RemParamGainedCharmJP = "魅力が %1 上がった！"; //unused

const RemExpEnemiesDefeatedEN = "Enemies Defeated EXP"; //currently unused
const RemExpEnemiesDefeatedJP = "【戦闘】熟練度"; //currently unused
const RemExpHalberdCombatEN = "Halberd Combat EXP"; //currently unused
const RemExpHalberdCombatJP = "【武器】熟練度"; //currently unused
const RemExpUnarmedCombatEN = "Unarmed Combat EXP"; //currently unused
const RemExpUnarmedCombatJP = "【素手】熟練度"; //currently unused
const RemExpEvasionCombatEN = "Evasion EXP"; //currently unused
const RemExpEvasionCombatJP = "【回避】熟練度"; //currently unused
const RemExpWillpowerCombatEN = "Willpower EXP"; //currently unused
const RemExpWillpowerCombatJP = "【意思】熟練度"; //currently unused
const RemExpEnduranceCombatEN = "Endurance EXP"; //currently unused
const RemExpEnduranceCombatJP = "【忍耐】熟練度"; //currently unused
const RemExpTalkSensitivityEN = "Talk Sensitivity EXP"; //currently unused
const RemExpTalkSensitivityJP = "猥談感度"; //currently unused
const RemExpSightSensitivityEN = "Sight Sensitivity EXP"; //currently unused
const RemExpSightSensitivityJP = "視姦感度"; //currently unused
const RemExpFingerSensitivityEN = "Finger Sensitivity EXP"; //currently unused
const RemExpFingerSensitivityJP = "指先の感度"; //currently unused
const RemExpMouthSensitivityEN = "Mouth Sensitivity EXP"; //currently unused
const RemExpMouthSensitivityJP = "クチ感度"; //currently unused
const RemExpBoobsSensitivityEN = "Boobs Sensitivity EXP"; //currently unused
const RemExpBoobsSensitivityJP = "おっぱい感度"; //currently unused
const RemExpPussySensitivityEN = "Pussy Sensitivity EXP"; //currently unused
const RemExpPussySensitivityJP = "マンコ感度"; //currently unused
const RemExpButtSensitivityEN = "Butt Sensitivity EXP"; //currently unused
const RemExpButtSensitivityJP = "アナル感度"; //currently unused
const RemExpCreampieSensitivityEN = "Creampie Recipient EXP"; //currently unused
const RemExpCreampieSensitivityJP = "中出し感度"; //currently unused
const RemExpBukkakeSensitivityEN = "Bukkake EXP"; //currently unused
const RemExpBukkakeSensitivityJP = "ぶっかけ感度"; //currently unused
const RemExpSwallowSensitivityEN = "Swallowing EXP"; //currently unused
const RemExpSwallowSensitivityJP = "ごっくん感度"; //currently unused
const RemExpKissSkillEN = "Kissing EXP"; //currently unused
const RemExpKissSkillJP = "キス熟練度"; //currently unused
const RemExpPettingSkillEN = "Petting EXP"; //currently unused
const RemExpPettingSkillJP = "愛撫熟練度"; //currently unused
const RemExpHandjobSkillEN = "Handjob EXP"; //currently unused
const RemExpHandjobSkillJP = "手コキ熟練度"; //currently unused
const RemExpBlowjobSkillEN = "Blowjob EXP"; //currently unused
const RemExpBlowjobSkillJP = "フェラ熟練度"; //currently unused
const RemExpTittyFuckSkillEN = "Titjob EXP"; //currently unused
const RemExpTittyFuckSkillJP = "パイズリ熟練度"; //currently unused
const RemExpPussySexSkillEN = "Vaginal Sex EXP"; //currently unused
const RemExpPussySexSkillJP = "生ハメ熟練度"; //currently unused
const RemExpAnalSexSkillEN = "Anal Sex EXP"; //currently unused
const RemExpAnalSexSkillJP = "ケツマンコ熟練度"; //currently unused
const RemExpMasturbateSkillEN = "Masturbation EXP"; //currently unused
const RemExpMasturbateSkillJP = "オナニー熟練度"; //currently unused
const RemExpOrgasmSpecialEN = "Orgasm EXP"; //currently unused
const RemExpOrgasmSpecialJP = "アクメ熟練度"; //currently unused
const RemExpStrippedSpecialEN = "Stripped EXP"; //currently unused
const RemExpStrippedSpecialJP = "ストリップ熟練度"; //currently unused
const RemExpDoublePenetrationSpecialEN = "Double Penetration EXP"; //currently unused
const RemExpDoublePenetrationSpecialJP = "ニ穴ファック熟練度"; //currently unused
const RemExpTriplePenetrationSpecialEN = "Triple Penetration EXP"; //currently unused
const RemExpTriplePenetrationSpecialJP = "三穴ファック熟練度"; //currently unused


const RemYanflyBattleCoreUserEN = "User";
const RemYanflyBattleCoreUserJP = "ユーザー";
const RemYanflyBattleCoreAllyEN = "Ally";
const RemYanflyBattleCoreAllyJP = "味方";
const RemYanflyBattleCoreAlliesEN = "Allies";
const RemYanflyBattleCoreAlliesJP = "味方";
const RemYanflyBattleCoreEnemyEN = "Enemy";
const RemYanflyBattleCoreEnemyJP = "敵";
const RemYanflyBattleCoreEnemiesEN = "Enemies";
const RemYanflyBattleCoreEnemiesJP = "敵";
const RemYanflyBattleCoreAllTargetsEN = "All %1";
const RemYanflyBattleCoreAllTargetsJP = "%1全体";
const RemYanflyBattleCoreRandomTargetsEN = "%2 Random %1";
const RemYanflyBattleCoreRandomTargetsJP = "%2のランダムな%1";

const RemYanflyRemoveEN = "Remove";
const RemYanflyRemoveJP = "外す";
const RemYanflyEmptyEN = "<Empty>";
const RemYanflyEmptyJP = "<未使用>";

//Options Main
const RemYanflyOptions_All_EN = "\\I[272]All";
const RemYanflyOptions_All_JP = "\\I[272]全体";
const RemYanflyOptions_All_Help_EN = "A list of all of the game's settings.";
const RemYanflyOptions_All_Help_JP = "ゲームの設定を全て表示します。";
const RemYanflyOptions_General_EN = "\\I[273]General";
const RemYanflyOptions_General_JP = "\\I[273]一般";
const RemYanflyOptions_General_Help_EN = "General settings that alter the way the game behaves.";
const RemYanflyOptions_General_Help_JP = "言語や速度などの一般設定を変更出来ます。";
const RemYanflyOptions_Audio_EN = "\\I[274]Audio";
const RemYanflyOptions_Audio_JP = "\\I[274]オーディオ";
const RemYanflyOptions_Audio_Help_EN = "Adjust the audio settings for the game.";
const RemYanflyOptions_Audio_Help_JP = "ゲーム内で流れる音のボリュームを設定出来ます。";
const RemYanflyOptions_Visual_EN = "\\I[276]Visual";
const RemYanflyOptions_Visual_JP = "\\I[276]画面";
const RemYanflyOptions_Visual_Help_EN = "Settings that adjust the visual properties of the game.";
const RemYanflyOptions_Visual_Help_JP = "ゲームの表示に関する設定を変更出来ます。";
const RemYanflyOptions_Controls_EN = "\\I[280]Controls";
const RemYanflyOptions_Controls_JP = "\\I[280]キー";
const RemYanflyOptions_Controls_Help_EN = "Change the way you can control the game.\nPress a button on your gamepad in order to access the Gamepad Config menu.";
const RemYanflyOptions_Controls_Help_JP = "ゲームの操作キーを変更出来ます。\nゲームパッドが接続されている場合、ゲームパッドの設定を変更出来ます。";
const RemYanflyOptions_Cheats_EN = "\\I[250]Cheats";
const RemYanflyOptions_Cheats_JP = "\\I[250]チート";
const RemYanflyOptions_Cheats_Help_EN = "Cheats are only activated during Secretary Mode.\nUse these cheats if you like playing in Secretary Mode\nbut prefer certain aspects of the game to be more difficult.";
const RemYanflyOptions_Cheats_Help_JP = "秘書コース専用の設定です。\n部分的な難易度をお好みにカスタマイズしてプレイ出来ます。";
const RemYanflyOptions_Exit_EN = "\\I[254]Exit";
const RemYanflyOptions_Exit_JP = "\\I[254]終了";
const RemYanflyOptions_Exit_Help_EN = "Exit the Options Menu.";
const RemYanflyOptions_Exit_Help_JP = "設定画面を終了します。";


const RemYanflyOptions_Hair_EN = "\\I[586]Cosmetic";
const RemYanflyOptions_Hair_JP = "\\I[586]外見変更";
const RemYanflyOptions_Hair_Help_EN = "Modify Karryn's appearance.\nCertain options require the Stray Pubes DLC.";
const RemYanflyOptions_Hair_Help_JP = "カリンの容姿をカスタマイズ出来ます。\n※設定の一部には別売りの『毛DLC』が必要になります。";

const RemYanflyOptions_Lovense_EN = "\\I[587]Lovense";
const RemYanflyOptions_Lovense_JP = "\\I[587]Lovense";
const RemYanflyOptions_Lovense_Help_EN = "Settings related to Lovense sex toys integration.\nPlease practice safety handling and good hygiene when using sex toys!\nThe ALT key on the keyboard can be used as an emergency STOP button for Lovense toys.";
const RemYanflyOptions_Lovense_Help_JP = "別売りの電動オナホール『Lovense』の設定が出来ます。\n★キーボードのALTキーはLovenseの緊急停止ボタンとして機能します。\n※オナホ使用時は取り扱いと衛生管理にご配慮下さい。";

//Options General
const RemYanflyOptions_Language_EN = "\\i[275]Text Language";
const RemYanflyOptions_Language_JP = "\\i[275]テキストの言語 (Language)";
const RemYanflyOptions_Language_Help_EN = "Change the text language here.";
const RemYanflyOptions_Language_Help_JP = "文章の言語を変更出来ます。";
const RemYanflyOptions_VoiceLanguage_EN = "\\i[275]Voice Language";
const RemYanflyOptions_VoiceLanguage_JP = "\\i[275]声の言語";
const RemYanflyOptions_VoiceLanguage_Help_EN = "Change the voice language here.";
const RemYanflyOptions_VoiceLanguage_Help_JP = "ボイスの言語を変更出来ます。";
const RemYanflyOptions_AlwaysDash_EN = "\\i[273]Always Dash";
const RemYanflyOptions_AlwaysDash_JP = "\\i[273]常時ダッシュ";
const RemYanflyOptions_AlwaysDash_Help_EN = "Karryn will normally walk when this option is OFF.\nKarryn will normally dash when this option is ON.\nHolding the SHIFT key/button will switch between walking and dashing.";
const RemYanflyOptions_AlwaysDash_Help_JP = "ON：常にダッシュのスピード\nOFF：歩行スピード\n※OFFの場合は、SHIFTキーを押し続けることでダッシュします。";
const RemYanflyOptions_MessageSpeed_EN = "\\i[273]Message Speed";
const RemYanflyOptions_MessageSpeed_JP = "\\i[273]メッセージ表示速度";
const RemYanflyOptions_MessageSpeed_Help_EN = "Changes the speed text is displayed during messages.";
const RemYanflyOptions_MessageSpeed_Help_JP = "通常テキストの表示速度を変更出来ます。";
const RemYanflyOptions_MessageSpeed_NoWait_EN = "No Wait";
const RemYanflyOptions_MessageSpeed_NoWait_JP = "ノーウェイト";
const RemYanflyOptions_CommandRemember_EN = "\\i[273]Command Remember";
const RemYanflyOptions_CommandRemember_JP = "\\i[273]コマンド記憶";
const RemYanflyOptions_CommandRemember_Help_EN = "The game remembers the last Mental and Action Phase skill used.";
const RemYanflyOptions_CommandRemember_Help_JP = "メンタルフェーズとアクションフェーズの最後に使ったスキルを記憶します。";

const RemYanflyOptions_Battlelog_Duration_EN = "\\i[273]Battlelog Duration";
const RemYanflyOptions_Battlelog_Duration_JP = "\\i[273]バトルメッセージ表示時間";
const RemYanflyOptions_Battlelog_Duration_Help_EN = "Changes how long battlelog messages stay on the screen.";
const RemYanflyOptions_Battlelog_Duration_Help_JP = "バトル内テキストの表示時間を変更出来ます。";
const RemYanflyOptions_Battlelog_Duration_Zero_EN = "Very Short";
const RemYanflyOptions_Battlelog_Duration_Zero_JP = "ベリーショート";
const RemYanflyOptions_Battlelog_Duration_One_EN = "Short";
const RemYanflyOptions_Battlelog_Duration_One_JP = "ショート";
const RemYanflyOptions_Battlelog_Duration_Two_EN = "Default";
const RemYanflyOptions_Battlelog_Duration_Two_JP = "デフォルト";
const RemYanflyOptions_Battlelog_Duration_Three_EN = "Long";
const RemYanflyOptions_Battlelog_Duration_Three_JP = "ロング";
const RemYanflyOptions_Battlelog_Duration_Four_EN = "Very Long";
const RemYanflyOptions_Battlelog_Duration_Four_JP = "ベリーロング";

const RemYanflyOptions_Battlelog_Fontsize_EN = "\\i[273]Battlelog Font Size";
const RemYanflyOptions_Battlelog_Fontsize_JP = "\\i[273]バトルメッセージのフォントサイズ";
const RemYanflyOptions_Battlelog_Fontsize_Help_EN = "Changes the font size for battlelog messages.";
const RemYanflyOptions_Battlelog_Fontsize_Help_JP = "バトル内テキストのサイズを変更出来ます。";
const RemYanflyOptions_Battlelog_Fontsize_Zero_EN = "Smallest";
const RemYanflyOptions_Battlelog_Fontsize_Zero_JP = "最小";
const RemYanflyOptions_Battlelog_Fontsize_One_EN = "Smaller";
const RemYanflyOptions_Battlelog_Fontsize_One_JP = "小さい";
const RemYanflyOptions_Battlelog_Fontsize_Two_EN = "Default";
const RemYanflyOptions_Battlelog_Fontsize_Two_JP = "普通";
const RemYanflyOptions_Battlelog_Fontsize_Three_EN = "Bigger";
const RemYanflyOptions_Battlelog_Fontsize_Three_JP = "大きい";
const RemYanflyOptions_Battlelog_Fontsize_Four_EN = "Biggest";
const RemYanflyOptions_Battlelog_Fontsize_Four_JP = "最大";

const RemYanflyOptions_MaleDialogueAppear_EN = "\\i[273]Enemy Battle Dialogue";
const RemYanflyOptions_MaleDialogueAppear_JP = "\\i[273]敵のセリフ表示頻度";
const RemYanflyOptions_MaleDialogueAppear_Help_EN = "Changes how likely enemies will make a comment while using a sexual skill.\nNote there are some exceptions where enemies will always talk regardless of this setting.";
const RemYanflyOptions_MaleDialogueAppear_Help_JP = "セクハラ/セックス時に表示される敵のセリフ頻度を設定出来ます。\n※敵によっては例外があります。";
const RemYanflyOptions_MaleDialogueAppear_Zero_EN = "Silence";
const RemYanflyOptions_MaleDialogueAppear_Zero_JP = "沈黙";
const RemYanflyOptions_MaleDialogueAppear_One_EN = "Rarely";
const RemYanflyOptions_MaleDialogueAppear_One_JP = "ごく稀に";
const RemYanflyOptions_MaleDialogueAppear_Two_EN = "Sometimes";
const RemYanflyOptions_MaleDialogueAppear_Two_JP = "時々";
const RemYanflyOptions_MaleDialogueAppear_Three_EN = "Often (Default)";
const RemYanflyOptions_MaleDialogueAppear_Three_JP = "普通(デフォルト)";
const RemYanflyOptions_MaleDialogueAppear_Four_EN = "Talkative";
const RemYanflyOptions_MaleDialogueAppear_Four_JP = "おしゃべり";

const RemYanflyOptions_KarrynLinesPrompt_EN = "\\i[273]Karryn Dialogue Pause";
const RemYanflyOptions_KarrynLinesPrompt_JP = "\\i[273]カリンのセリフは待つ";
const RemYanflyOptions_KarrynLinesPrompt_Help_EN = "The battle is paused after Karryn speaks until the confirm key is pressed.\nTurning this option OFF will skip this pause for most of Karryn's battle dialogues.";
const RemYanflyOptions_KarrynLinesPrompt_Help_JP = "バトル中にカリンが話す時は自動送りするかどうかの設定が出来ます。\nON：カリン発言時のみ、決定キーを押すまで戦闘メッセージは停止します。\nOFF：カリンのセリフも含めて、戦闘メッセージは全て自動送りされます。";
const RemYanflyOptions_Disable_Rimjobs_EN = "\\i[273]Disable Rimjobs";
const RemYanflyOptions_Disable_Rimjobs_JP = "\\i[273]『ケツ舐め』を非表示";
const RemYanflyOptions_Disable_Rimjobs_Help_EN = "Prevents all rimjob content from occuring while this is option is on.\nNote that this game's progression and full content is designed with rimjobs in mind.\nOnly select this option if it'd otherwise keep you from wanting to play this game.";
const RemYanflyOptions_Disable_Rimjobs_Help_JP = "ON：アナル舐めシーンが一切発生しなくなります。\nOFF：カリンが男のアナルを舐めるシーンが発生します。\n※ゲーム進行に影響するのでご注意下さい。";
const RemYanflyOptions_Disable_Footjobs_EN = "\\i[273]Disable Footjobs";
const RemYanflyOptions_Disable_Footjobs_JP = "\\i[273]『足コキ』を非表示";
const RemYanflyOptions_Disable_Footjobs_Help_EN = "Prevents all footjob content from occuring while this is option is on.\nNote that this game's progression and full content is designed with footjobs in mind.\nOnly select this option if it'd otherwise keep you from wanting to play this game.";
const RemYanflyOptions_Disable_Footjobs_Help_JP = "ON：足コキシーンが一切発生しなくなります。\nOFF：カリンが足コキするシーンが発生します。\n※ゲーム進行に影響するのでご注意下さい。";
const RemYanflyOptions_Disable_Smegma_EN = "\\i[273]Disable Smegma";
const RemYanflyOptions_Disable_Smegma_JP = "\\i[273]チンカス描写の非表示";
const RemYanflyOptions_Disable_Smegma_Help_EN = "Prevents all mentions and descriptions of smegma in battle dialogs.\nNote that while this doesn't affect gameplay, it would reduce the variance in dialog.\nOnly select this option if it'd otherwise keep you from wanting to play this game.";
const RemYanflyOptions_Disable_Smegma_Help_JP = "ON：チンカスの描写が一切発生しなくなります。\nOFF：カリンがチンカスの匂いを嗅いだり、舐めたりするセリフが発生します。\n※セリフのバリエーションが減少する事にご注意下さい。";
const RemYanflyOptions_Disable_FeraMouth_EN = "\\i[273]Disable Blowjob Mouths";
const RemYanflyOptions_Disable_FeraMouth_JP = "\\i[273]バキュームフェラの非表示";
const RemYanflyOptions_Disable_FeraMouth_Help_EN = "Prevents exaggerated slutty blowjob mouths from appearing.\nNote that while this doesn't affect gameplay, it would reduce blowjob facial variances.\nOnly select this option if it'd otherwise keep you from wanting to play this game.";
const RemYanflyOptions_Disable_FeraMouth_Help_JP = "ON：フェラでひょっとこ口をしないようになります（ゲームには影響しません）。\nOFF：経験が増すと吸い付くようなフェラが見れます。\n※表情のバリエーションが少なくなるので、苦手な方のみＯＮにして下さい。";

const RemYanflyOptions_DisplayPleasureAsPercent_EN = "\\i[273]Display Pleasure As Percentage";
const RemYanflyOptions_DisplayPleasureAsPercent_JP = "\\i[273]快楽度を％で表示";
const RemYanflyOptions_DisplayPleasureAsPercent_Help_EN = "When this option is turned ON, pleasure values will be displayed as a percentage based \non the amount of pleasure needed to have an orgasm.\nWhen this option is turned OFF, pleasure values will be displayed as normal numbers.";
const RemYanflyOptions_DisplayPleasureAsPercent_Help_JP = "絶頂に必要な『快楽度』の表示を変更出来ます。\nON：快楽度をパーセンテージで表示します。\nOFF：快楽度を通常の数値で表示します。";

const RemYanflyOptions_ShorterDefeatBattles_EN = "\\i[273]Shorter Defeated Battles";
const RemYanflyOptions_ShorterDefeatBattles_JP = "\\i[273]敗北Ｈの短縮";
const RemYanflyOptions_ShorterDefeatBattles_Help_EN = "\\}Normally Defeated Battles (the battles after Karryn is defeated) are over only after all enemies are satisfied.\n\\{Turning this option ON will allow the battle to also end after Karryn is exhausted.\nPrisoner Mode ignores this option, this is always OFF in Prisoner Mode."
const RemYanflyOptions_ShorterDefeatBattles_Help_JP = "通常の敗北Ｈは全ての敵が射精後に終了します。\nON：敵が射精し終わらなくても、カリンの体力が０になった時点で終了します。\nOFF：通常通り全員が射精するまで続きます。囚人コースでは常にOFFになります。";

//Options Audio
const RemYanflyOptions_MasterVolume_EN = "\\i[274]Master Volume";
const RemYanflyOptions_MasterVolume_JP = "\\i[274]マスター音量";
const RemYanflyOptions_MasterVolume_Help_EN = "Adjusts the overall volume of the game.";
const RemYanflyOptions_MasterVolume_Help_JP = "ゲーム全体のボリュームを設定出来ます。";
const RemYanflyOptions_BGMVolume_EN = "\\i[274]Music Volume";
const RemYanflyOptions_BGMVolume_JP = "\\i[274]BGMの音量";
const RemYanflyOptions_BGMVolume_Help_EN = "Adjusts the volume of the music.";
const RemYanflyOptions_BGMVolume_Help_JP = "ゲーム内で流れる音楽のボリュームを設定出来ます。";
const RemYanflyOptions_BGSVolume_EN = "\\i[274]BGS Volume";
const RemYanflyOptions_BGSVolume_JP = "\\i[274]ループ効果音";
const RemYanflyOptions_BGSVolume_Help_EN = "Adjusts the volume of the background sound effects.";
const RemYanflyOptions_BGSVolume_Help_JP = "背景効果音のボリュームを設定出来ます。";
const RemYanflyOptions_MEVolume_EN = "\\i[274]ME Volume";
const RemYanflyOptions_MEVolume_JP = "\\i[274]演出音";
const RemYanflyOptions_MEVolume_Help_EN = "Adjusts the volume of the melody effects such as fanfares.";
const RemYanflyOptions_MEVolume_Help_JP = "休息のときやファンファーレに流れる音楽のボリュームを設定出来ます。";
const RemYanflyOptions_SEVolume_EN = "\\i[274]Sound Volume";
const RemYanflyOptions_SEVolume_JP = "\\i[274]効果音の音量";
const RemYanflyOptions_SEVolume_Help_EN = "Adjusts the volume of the sound effects.";
const RemYanflyOptions_SEVolume_Help_JP = "SEのボリュームを設定出来ます。";
const RemYanflyOptions_VoiceVolume_EN = "\\i[274]Voice Volume";
const RemYanflyOptions_VoiceVolume_JP = "\\i[274]カリンの声の音量";
const RemYanflyOptions_VoiceVolume_Help_EN = "Adjusts the volume of Karryn's spoken dialogue.";
const RemYanflyOptions_VoiceVolume_Help_JP = "カリンが話すボイスのボリュームを設定出来ます。";
const RemYanflyOptions_MoansVolume_EN = "\\i[274]Moan Volume";
const RemYanflyOptions_MoansVolume_JP = "\\i[274]あえぎ声の音量";
const RemYanflyOptions_MoansVolume_Help_EN = "Adjusts the volume of Karryn's moans.";
const RemYanflyOptions_MoansVolume_Help_JP = "カリンのあえぎ声のボリュームを設定出来ます。";
const RemYanflyOptions_MaleVolume_EN = "\\i[274]Male Volume";
const RemYanflyOptions_MaleVolume_JP = "\\i[274]敵の声の音量";
const RemYanflyOptions_MaleVolume_Help_EN = "Adjusts the volume of male sounds like grunts and laughter.";
const RemYanflyOptions_MaleVolume_Help_JP = "男が発する笑い声や呼び声のボリュームを設定出来ます。";
const RemYanflyOptions_KeepVoicePlayback_EN = "\\i[274]Keep Voice Playback";
const RemYanflyOptions_KeepVoicePlayback_JP = "\\i[274]メッセージ送り後もボイスを再生";
const RemYanflyOptions_KeepVoicePlayback_Help_EN = "Normally any voice being played gets cut off after you hit the confirm key.\nTurning this option ON will have voices keep playing until a new voice is played."
const RemYanflyOptions_KeepVoicePlayback_Help_JP = "ON：セリフを言い切るまでボイスが再生され続けます。\nOFF：決定キーでボイス再生は中断されます。";
const RemYanflyOptions_AutoContinueAfterVoice_EN = "\\i[274]Auto Continue After Voice";
const RemYanflyOptions_AutoContinueAfterVoice_JP = "\\i[274]ボイスを待ってから自動送りする";
const RemYanflyOptions_AutoContinueAfterVoice_Help_EN = "Turning this option ON will automatically continue the battle after Karryn's voice ends.\nThis option requires Karryn Dialogue Pause to also be turned on to work."
const RemYanflyOptions_AutoContinueAfterVoice_Help_JP = "ON：カリンがセリフを言い切ってから、自動でバトルを続行します。\nOFF：ボイスが終わっても自動送りしません。\n※この設定を有効にするには『カリンのセリフは待つ』もONにする必要があります。";

//Options Visual
const RemYanflyOptions_WindowToneRed_EN = "\\i[277]Window Tone: Red";
const RemYanflyOptions_WindowToneRed_JP = "\\i[277]ウィンドウトーン：RED";
const RemYanflyOptions_WindowToneRed_Help_EN = "Changes the window tone's \\c[18]red\\c[0] value.\nHold SHIFT while pressing LEFT/RIGHT to adjust more.\nNote: This setting is save file specific and can not be changed in the title screen.";
const RemYanflyOptions_WindowToneRed_Help_JP = "ウィンドウ色彩の\\c[18]赤\\c[0]を変更出来ます。\nSHIFTキーを押しながら左右に動かすことで大きく変更出来ます。\n※セーブデータに依存するのでタイトル画面では変更出来ません。";
const RemYanflyOptions_WindowToneGreen_EN = "\\i[278]Window Tone: Green";
const RemYanflyOptions_WindowToneGreen_JP = "\\i[278]ウィンドウトーン：GREEN";
const RemYanflyOptions_WindowToneGreen_Help_EN = "Changes the window tone's \\c[29]green\\c[0] value.\nHold SHIFT while pressing LEFT/RIGHT to adjust more.\nNote: Note: This setting is save file specific and can not be changed in the title screen.";
const RemYanflyOptions_WindowToneGreen_Help_JP = "ウィンドウ色彩の\\c[29]緑\\c[0]を変更出来ます。\nSHIFTキーを押しながら左右に動かすことで大きく変更出来ます。\n※セーブデータに依存するのでタイトル画面では変更出来ません。";
const RemYanflyOptions_WindowToneBlue_EN = "\\i[279]Window Tone: Blue";
const RemYanflyOptions_WindowToneBlue_JP = "\\i[279]ウィンドウトーン：BLUE";
const RemYanflyOptions_WindowToneBlue_Help_EN = "Changes the window tone's \\c[14]blue\\c[0] value.\nHold SHIFT while pressing LEFT/RIGHT to adjust more.\nNote: Note: This setting is save file specific and can not be changed in the title screen.";
const RemYanflyOptions_WindowToneBlue_Help_JP = "ウィンドウ色彩の\\c[14]青\\c[0]を変更出来ます。\nSHIFTキーを押しながら左右に動かすことで大きく変更出来ます。\n※セーブデータに依存するのでタイトル画面では変更出来ません。";
const RemYanflyOptions_FasterBattleDialogue_EN = "\\i[276]Fast Battle Dialogues";
const RemYanflyOptions_FasterBattleDialogue_JP = "\\i[276]バトルメッセージ倍速化";
const RemYanflyOptions_FasterBattleDialogue_Help_EN = "Turning this option ON will make battle dialogue go faster.";
const RemYanflyOptions_FasterBattleDialogue_Help_JP = "バトル中に表示されるメッセージが速くなります。";
const RemYanflyOptions_FasterBattleCutins_EN = "\\i[276]Simple Battle Cut-ins";
const RemYanflyOptions_FasterBattleCutins_JP = "\\i[276]カットインを簡略化";
const RemYanflyOptions_FasterBattleCutins_Help_EN = "Turning this option ON will make battle cut-ins go faster and turn off the cut-in animations.\nTurn this option ON if you're experiencing heavy slowdown during cut-ins.";
const RemYanflyOptions_FasterBattleCutins_Help_JP = "ON：バトル中のカットインが速くなり、アニメなしの静止画が表示されます。\nOFF：カットインは通常速度で、アニメ再生もされます。\n※カットイン中にゲームが重くなる場合はONにして下さい。";
const RemYanflyOptions_SmootherBattleCutinLoading_EN = "\\i[276]Smoother Battle Cut-in Loading";
const RemYanflyOptions_SmootherBattleCutinLoading_JP = "\\i[276]カットインのスムーズ化";
const RemYanflyOptions_SmootherBattleCutinLoading_Help_EN = "\\}\\}This is an option for stronger PCs that will make battle cut-ins load in smoother at the cost of much longer initial boot up time for the game.\n\\{\\{Please keep this option OFF if your initial boot up time is already longer than twenty seconds or if your game often crashes.\nPlease restart your game for this option to take effect.";
const RemYanflyOptions_SmootherBattleCutinLoading_Help_JP = "起動時のロード時間が長くなる代わりに、バトル中のカットイン表示で発生する遅延をかなり抑制します。\n注意１：起動時間が20秒を超える、または頻繁にフリーズする場合はOFFにして下さい。\n注意２：ONにした後、ゲームを再起動することで設定が有効になります。";
const RemYanflyOptions_DisableBattleCutins_EN = "\\i[276]Disable Battle Cut-ins";
const RemYanflyOptions_DisableBattleCutins_JP = "\\i[276]カットインの非表示";
const RemYanflyOptions_DisableBattleCutins_Help_EN = "Turning this option ON will completely disable battle cut-ins.\nThe intended visual experience is to play and enjoy the game with battle cut-ins appearing.\nThis option should only be used as a last resort if cut-ins are causing serious FPS issues.";
const RemYanflyOptions_DisableBattleCutins_Help_JP = "ON：バトル中のカットインは全て表示されません。\nOFF：バトル中のカットインが表示されます。\n※カットインの影響で処理落ちする場合のみ、最終手段としてご使用下さい。";
const RemYanflyOptions_SmootherCGLoading_EN = "\\i[276]Smoother CG Loading";
const RemYanflyOptions_SmootherCGLoading_JP = "\\i[276]CG表示のスムーズ化";
const RemYanflyOptions_SmootherCGLoading_Help_EN = "\\}\\}This is an option for stronger PCs that will make CGs load in smoother at the cost of much longer initial boot up time for the game.\nPlease keep this option OFF if your initial boot up time is already longer than twenty seconds or if your game often crashes.\n\\{Please restart your game for this option to take effect.";
const RemYanflyOptions_SmootherCGLoading_Help_JP = "起動時のロード時間が長くなる代わりに、CG表示で発生する遅延をかなり抑制します。\n注意１：起動時間が20秒を超える、または頻繁にフリーズする場合はOFFにして下さい。\n注意２：ONにした後、ゲームを再起動することで設定が有効になります。";
const RemYanflyOptions_SortPassivesAscending_EN = "\\i[276]Sort Passives Ascending";
const RemYanflyOptions_SortPassivesAscending_JP = "\\i[276]パッシブの並び順を変更";
const RemYanflyOptions_SortPassivesAscending_Help_EN = "Passives are visually sorted in the Passives screen by the date they were obtained.\nON: They will be sorted with the oldest ones on top.\nOFF: They will sorted with the newest ones on top.";
const RemYanflyOptions_SortPassivesAscending_Help_JP = "パッシブの並べ替えをします。\nON：初日から現在までに取得した順列で表示されます。\nOFF：最新取得から過去までの順列で表示されます。";
const RemYanflyOptions_SynchFPS_EN = "\\i[273]Force 60 FPS";
const RemYanflyOptions_SynchFPS_JP = "\\i[273]FPSの同期処理";
const RemYanflyOptions_SynchFPS_Help_EN = "\\}Please keep this option turned ON if your monitor is above 60Hz so that the game will properly cap at 60 FPS.\n\\{Turn this option OFF if your game is running way below 60 FPS or your monitor is 60Hz or less.\nPressing F2 will display the game's current FPS.";
const RemYanflyOptions_SynchFPS_Help_JP = "モニターが60FPSを超えて動作している場合、ONにしてください。\n60FPSで動作するようにゲーム同期を変更出来ます。\n※F2キーで現在のFPSを確認出来ます。";
const RemYanflyOptions_LightingEffects_EN = "\\i[276]Map Lighting Effects";
const RemYanflyOptions_LightingEffects_JP = "\\i[276]イベントのフラッシュ演出";
const RemYanflyOptions_LightingEffects_Help_EN = "Map lighting effects include the effects from light sources such as torches.\nTurning this OFF will remove those effects and help improve game performance if\nyour game is experiencing slow downs in areas with map lighting effects."
const RemYanflyOptions_LightingEffects_Help_JP = "フラッシュが使われるイベントでゲーム速度が遅くなる場合は、\nOFFにすることでゲームからフラッシュを解除し、\n動作パフォーマンスを向上させることが出来ます。";
const RemYanflyOptions_MapEffects_EN = "\\i[276]Animated Map Effects";
const RemYanflyOptions_MapEffects_JP = "\\i[276]マップのエフェクト";
const RemYanflyOptions_MapEffects_Help_EN = "Animated map effects include fogs and mists.\nTurning this OFF will remove those effects and help improve game performance if\nyour game is experiencing slow downs in areas with animated map effects."
const RemYanflyOptions_MapEffects_Help_JP = "マップのミストや雲などの演出表示を変更出来ます。\nON：マップ演出を表示します。\nOFF：マップ演出を非表示にします（処理が遅くなる場合は推奨）。";
const RemYanflyOptions_DisableFlashing_EN = "\\i[276]Disable Screen Flashes";
const RemYanflyOptions_DisableFlashing_JP = "\\i[276]フラッシュ演出の非表示";
const RemYanflyOptions_DisableFlashing_Help_EN = "Turning this option ON will disable full screen flashes.\nUse this option if you are sensitive to flashes or are getting eye strain from the flashes."
const RemYanflyOptions_DisableFlashing_Help_JP = "フラッシュ表現に敏感な方や目に辛いという場合はONにして下さい。\nON：全画面フラッシュの演出が無効になります。\nOFF：全画面フラッシュの演出が適用されます。";

const RemYanflyOptions_ShowSexualDamagePopup_EN = "\\i[276]Toggle Karryn Sexual Damage Popup";
const RemYanflyOptions_ShowSexualDamagePopup_JP = "\\i[276]性ダメージのポップアップ";
const RemYanflyOptions_ShowSexualDamagePopup_Help_EN = "\\}Turn this option ON to have damage numbers from sexual attacks popup over Karryn's body.\nTurn this option OFF to hide the damage numbers from sexual attacks over Karryn's body.\nInformation about sexual attacks will still appear in the battle log.";
const RemYanflyOptions_ShowSexualDamagePopup_Help_JP = "バトル中の性ダメージの表示を変更出来ます。\nON：カリンの上に性ダメージ数が表示されます。\nOFF：性ダメージはテキストログのみでの表示になります。";

const RemYanflyOptions_EdictsOutlineColor_Obtainable_EN = "\\i[276]Edicts Outline Color: Obtainable";
const RemYanflyOptions_EdictsOutlineColor_Obtainable_JP = "\\i[276]指令のアウトラインカラー：実行可能な場合";
const RemYanflyOptions_EdictsOutlineColor_Obtainable_Help_EN = "This option changes the color of the outlines in the Edicts screen\nfor the Edicts that Karryn can enact right now.";
const RemYanflyOptions_EdictsOutlineColor_Obtainable_Help_JP = "現時点で実行可能な『指令』の枠の色を変更出来ます。";
const RemYanflyOptions_EdictsOutlineColor_MeetReq_EN = "\\i[276]Edicts Outline Color: Met Req";
const RemYanflyOptions_EdictsOutlineColor_MeetReq_JP = "\\i[276]指令のアウトラインカラー：条件を満たしている場合";
const RemYanflyOptions_EdictsOutlineColor_MeetReq_Help_EN = "This option changes the color of the outlines in the Edicts screen\nfor the Edicts that Karryn meet the requirements for but can not enact right now.";
const RemYanflyOptions_EdictsOutlineColor_MeetReq_Help_JP = "条件を満たしていても現時点では実行不可な『指令』の枠の色を変更出来ます。";
const RemYanflyOptions_EdictsOutlineColor_NoReq_EN = "\\i[276]Edicts Outline Color: No Req";
const RemYanflyOptions_EdictsOutlineColor_NoReq_JP = "\\i[276]指令のアウトラインカラー：実行不可な場合";
const RemYanflyOptions_EdictsOutlineColor_NoReq_Help_EN = "This option changes the color of the outlines in the Edicts screen\nfor the Edicts that Karryn does not meet the requirements for.";
const RemYanflyOptions_EdictsOutlineColor_NoReq_Help_JP = "条件を満たしていない『指令』の枠の色を変更出来ます。";

const RemYanflyOptions_EdictsOutlineColorName_Green_EN = "Green";
const RemYanflyOptions_EdictsOutlineColorName_Green_JP = "グリーン";
const RemYanflyOptions_EdictsOutlineColorName_LightBlue_EN = "Light Blue";
const RemYanflyOptions_EdictsOutlineColorName_LightBlue_JP = "ライトブルー";
const RemYanflyOptions_EdictsOutlineColorName_Yellow_EN = "Yellow";
const RemYanflyOptions_EdictsOutlineColorName_Yellow_JP = "イエロー";
const RemYanflyOptions_EdictsOutlineColorName_Purple_EN = "Purple";
const RemYanflyOptions_EdictsOutlineColorName_Purple_JP = "パープル";
const RemYanflyOptions_EdictsOutlineColorName_Gray_EN = "Gray";
const RemYanflyOptions_EdictsOutlineColorName_Gray_JP = "グレイ";
const RemYanflyOptions_EdictsOutlineColorName_Black_EN = "Black";
const RemYanflyOptions_EdictsOutlineColorName_Black_JP = "ブラック";
const RemYanflyOptions_EdictsOutlineColorName_Red_EN = "Red";
const RemYanflyOptions_EdictsOutlineColorName_Red_JP = "レッド";

//Options Controls
const RemYanflyOptions_GamepadControl_EN = "\\i[281]Gamepad Config";
const RemYanflyOptions_GamepadControl_JP = "\\i[281]ゲームパッド設定";
const RemYanflyOptions_GamepadControl_Help_EN = "Configure the gamepad button settings.";
const RemYanflyOptions_GamepadControl_Help_JP = "ゲームパッドのボタン割り当てが設定出来ます。";
const RemYanflyOptions_KeyboardControl_EN = "\\i[280]Keyboard Config";
const RemYanflyOptions_KeyboardControl_JP = "\\i[280]キーボード設定";
const RemYanflyOptions_KeyboardControl_Help_EN = "Configure the keyboard keys settings.";
const RemYanflyOptions_KeyboardControl_Help_JP = "キーボードのキー割り当てが設定出来ます。";
const RemYanflyOptions_CancelSkipMentalPhase_EN = "\\I[280]Cancel Skips Mental Phase";
const RemYanflyOptions_CancelSkipMentalPhase_JP = "\\I[280]戦闘のメンタルフェーズをスキップ";
const RemYanflyOptions_CancelSkipMentalPhase_Help_EN = "Turning this option ON will cause Mental Phase to end automatically when pressing \nthe cancel key/button or right clicking with the mouse.";
const RemYanflyOptions_CancelSkipMentalPhase_Help_JP = "ON：キャンセルボタン/右クリックでメンタルフェーズをスキップ出来ます。\nOFF：コマンド入力するまで、メンタルフェーズからアタックフェーズに移行出来ません。";

const RemYanflyOptions_Fullscreen_EN = "\\i[273]Toggle Fullscreen";
const RemYanflyOptions_Fullscreen_JP = "\\i[273]画面表示の変更";
const RemYanflyOptions_Fullscreen_Help_EN = "Switch between Window Mode and Fullscreen Mode.\nPressing F4 or ALT+ENTER during gameplay also does the same thing.";
const RemYanflyOptions_Fullscreen_Help_JP = "Window：通常通りウィンドウ表示でゲームをプレイ出来ます。\nFullscreen：全画面表示でゲームをプレイ出来ます。\n※プレイ中にF4キーかAlt+Enterキーでも切り替えられます。";

const RemYanflyGamepadButtonNameEN = "Button %1";
const RemYanflyGamepadButtonNameJP = "%1ボタン";
const RemYanflyGamepadOkButtonNameEN = "OK / Interact";
const RemYanflyGamepadOkButtonNameJP = "決定 / 調べる";
const RemYanflyGamepadOkButtonHelpEN = "Used to accept command actions and interact with objects and people.";
const RemYanflyGamepadOkButtonHelpJP = "選択肢の決定や、マップ上で調べたり会話したいときに使います。";
const RemYanflyGamepadCancelButtonNameEN = "Cancel";
const RemYanflyGamepadCancelButtonNameJP = "キャンセル";
const RemYanflyGamepadCancelButtonHelpEN = "Used to cancel menu actions.";
const RemYanflyGamepadCancelButtonHelpJP = "選択肢のキャンセルや、メニューを閉じるときに使います。";
const RemYanflyGamepadShiftButtonNameEN = "Shift";
const RemYanflyGamepadShiftButtonNameJP = "Shift";
const RemYanflyGamepadShiftButtonHelpEN = "Hold this button to dash on the map or hide text.";
const RemYanflyGamepadShiftButtonHelpJP = "ダッシュしたいときと、テキストを非表示したいときに使います。";
const RemYanflyGamepadMenuButtonNameEN = "Menu";
const RemYanflyGamepadMenuButtonNameJP = "メニュー";
const RemYanflyGamepadMenuButtonHelpEN = "Used to open the Main Menu.";
const RemYanflyGamepadMenuButtonHelpJP = "メニューウィンドウを開くボタンです。";
const RemYanflyGamepadPageUpButtonNameEN = "Shoulder Left / Backlog";
const RemYanflyGamepadPageUpButtonNameJP = "テキストログの表示 / スクロール(↑)";
const RemYanflyGamepadPageUpButtonHelpEN = "Used to scroll through menus and items, and also open the message backlog.";
const RemYanflyGamepadPageUpButtonHelpJP = "テキストログの表示と、メニュー画面やテキストログのスクロールに使います。";
const RemYanflyGamepadPageDownButtonNameEN = "Shoulder Right / Speed Up";
const RemYanflyGamepadPageDownButtonNameJP = "テキストスキップ / スクロール(↓)";
const RemYanflyGamepadPageDownButtonHelpEN = "Used to scroll through menus and items, and also speed up text and battle.";
const RemYanflyGamepadPageDownButtonHelpJP = "テキストのスキップとバトルの加速、メニュー画面やテキストログのスクロールに使います。";
const RemYanflyGamepadResetDefaultNameEN = "Reset to Default";
const RemYanflyGamepadResetDefaultNameJP = "デフォルトに戻す";
const RemYanflyGamepadResetDefaultHelpEN = "Returns your controller to default settings.";
const RemYanflyGamepadResetDefaultHelpJP = "ゲームパッドの設定を初期状態に戻します。";
const RemYanflyGamepadFinishConfigNameEN = "Finish Configuration";
const RemYanflyGamepadFinishConfigNameJP = "設定を保存する";
const RemYanflyGamepadFinishConfigHelpEN = "Are you done configuring your gamepad?";
const RemYanflyGamepadFinishConfigHelpJP = "ゲームパッドの設定を保存して閉じます。";

const RemYanflyKeyboardHelpEN = "Change the configuration of this key?";
const RemYanflyKeyboardHelpJP = "キーボードに動作を割り当てて下さい。";
const RemYanflyKeyboardDefaultLayoutTextEN = "Default Keyboard Layout";
const RemYanflyKeyboardDefaultLayoutTextJP = "初期状態に戻す";
const RemYanflyKeyboardDefaultLayoutHelpEN = "Reverts your keyboard setting to the default setup.";
const RemYanflyKeyboardDefaultLayoutHelpJP = "キーボードの設定をデフォルトに戻します。";
const RemYanflyKeyboardWASDTextEN = "WASD Movement Layout";
const RemYanflyKeyboardWASDTextJP = "WASDモード";
const RemYanflyKeyboardWASDHelpEN = "Changes your keyboard to WASD movement.";
const RemYanflyKeyboardWASDHelpJP = "WASDキーを方向キーにします。";
const RemYanflyKeyboardFinishConfigTextEN = "Finish Configuration";
const RemYanflyKeyboardFinishConfigTextJP = "設定を完了する";
const RemYanflyKeyboardFinishConfigHelpEN = "Are you done configuring your keyboard?";
const RemYanflyKeyboardFinishConfigHelpJP = "キーボードの設定を保存して戻ります。";
const RemYanflyKeyboardClearTextEN = "Clear";
const RemYanflyKeyboardClearTextJP = "未設定";
const RemYanflyKeyboardOKKeyEN = "OK";
const RemYanflyKeyboardOKKeyJP = "OK";
const RemYanflyKeyboardOKTextEN = "OK / Interact";
const RemYanflyKeyboardOKTextJP = "OK / 調べる";
const RemYanflyKeyboardEscapeKeyEN = "Cancel/Menu";
const RemYanflyKeyboardEscapeKeyJP = "ｷｬﾝｾﾙ&ﾒﾆｭｰ";
const RemYanflyKeyboardEscapeTextEN = "Cancel / Menu";
const RemYanflyKeyboardEscapeTextJP = "キャンセル / メニュー";
const RemYanflyKeyboardCancelKeyEN = "Cancel";
const RemYanflyKeyboardCancelKeyJP = "ｷｬﾝｾﾙ";
const RemYanflyKeyboardCancelTextEN = "Cancel";
const RemYanflyKeyboardCancelTextJP = "キャンセル";
const RemYanflyKeyboardMenuKeyEN = "Menu";
const RemYanflyKeyboardMenuKeyJP = "ﾒﾆｭｰ";
const RemYanflyKeyboardMenuTextEN = "Menu";
const RemYanflyKeyboardMenuTextJP = "メニュー";
const RemYanflyKeyboardShiftKeyEN = "Shift";
const RemYanflyKeyboardShiftKeyJP = "Shift";
const RemYanflyKeyboardShiftTextEN = "Shift";
const RemYanflyKeyboardShiftTextJP = "Shift";
const RemYanflyKeyboardPageUpKeyEN = "PgUp";
const RemYanflyKeyboardPageUpKeyJP = "PgUp";
const RemYanflyKeyboardPageUpTextEN = "Page Up / Backlog";
const RemYanflyKeyboardPageUpTextJP = "Page Up / テキストログの表示";
const RemYanflyKeyboardPageDownKeyEN = "PgDn";
const RemYanflyKeyboardPageDownKeyJP = "PgDn";
const RemYanflyKeyboardPageDownTextEN = "Page Down";
const RemYanflyKeyboardPageDownTextJP = "Page Down";
const RemYanflyKeyboardLeftKeyEN = "←";
const RemYanflyKeyboardLeftKeyJP = "←";
const RemYanflyKeyboardLeftTextEN = "Left";
const RemYanflyKeyboardLeftTextJP = "←方向";
const RemYanflyKeyboardUpKeyEN = "↑";
const RemYanflyKeyboardUpKeyJP = "↑";
const RemYanflyKeyboardUpTextEN = "Up";
const RemYanflyKeyboardUpTextJP = "↑方向";
const RemYanflyKeyboardRightKeyEN = "→";
const RemYanflyKeyboardRightKeyJP = "→";
const RemYanflyKeyboardRightTextEN = "Right";
const RemYanflyKeyboardRightTextJP = "→方向";
const RemYanflyKeyboardDownKeyEN = "↓";
const RemYanflyKeyboardDownKeyJP = "↓";
const RemYanflyKeyboardDownTextEN = "Down";
const RemYanflyKeyboardDownTextJP = "↓方向";


//Options Cheats
const RemYanflyOptions_Cheats_ActorDoublePassiveGain_EN = "\\i[56]\\C[27]Hot Coffee";
const RemYanflyOptions_Cheats_ActorDoublePassiveGain_JP = "\\i[56]\\C[27]パッシブ解放２倍速";
const RemYanflyOptions_Cheats_ActorDoublePassiveGain_Help_EN = "Karryn unlocks new Passives twice as fast.\nFor people who want to see Karryn turn into a slut faster.\nNote: Cheats only work in Secretary Mode.";
const RemYanflyOptions_Cheats_ActorDoublePassiveGain_Help_JP = "新しいパッシブの解放が２倍速くなります。\n★ビッチなカリンを早く見たい人向け。\n※秘書モードでのみ有効";

const RemYanflyOptions_Cheats_ActorNoPassiveGain_EN = "\\i[56]\\C[25]Warm Coffee";
const RemYanflyOptions_Cheats_ActorNoPassiveGain_JP = "\\i[56]\\C[25]パッシブ解放禁止";
const RemYanflyOptions_Cheats_ActorNoPassiveGain_Help_EN = "Karryn no longer unlocks any more Passives.\nFor people who want to keep Karryn the way she currently is.\nNote: This special cheat only works during Free Play Mode after certain Endings.";
const RemYanflyOptions_Cheats_ActorNoPassiveGain_Help_JP = "カリンがこれ以上パッシブを解放しなくなります。\n★現状の貞操感を維持したままプレイしたい人向け。\n※特定エンディング後のフリーモードでのみ有効";

const RemYanflyOptions_Cheats_EnemyDoublePhysicalDamage_EN = "\\i[429]\\C[14]WhosYourDaddy";
const RemYanflyOptions_Cheats_EnemyDoublePhysicalDamage_JP = "\\i[429]\\C[14]体力ダメージ２倍";
const RemYanflyOptions_Cheats_EnemyDoublePhysicalDamage_Help_EN = "Enemies deal double the amount of stamina damage to Karryn.\nFor people who want to see Karryn be less invincible.\nNote: Cheats only work in Secretary Mode.";
const RemYanflyOptions_Cheats_EnemyDoublePhysicalDamage_Help_JP = "敵からの物理ダメージが２倍になります。\n★カリンの無敵っぷりを解除したい人向け。\n※秘書モードでのみ有効";
const RemYanflyOptions_Cheats_EnemyTriplePhysicalDamage_EN = "\\i[429]\\C[14]iddqd";
const RemYanflyOptions_Cheats_EnemyTriplePhysicalDamage_JP = "\\i[429]\\C[14]体力ダメージ３倍";
const RemYanflyOptions_Cheats_EnemyTriplePhysicalDamage_Help_EN = "Enemies deal triple the amount of stamina damage to Karryn.\nFor people who want to see Karryn fall down from a few hits.\nNote: Cheats only work in Secretary Mode.";
const RemYanflyOptions_Cheats_EnemyTriplePhysicalDamage_Help_JP = "敵からの物理ダメージが３倍になります。\n★手っ取り早くカリンに倒れて欲しい人向け。\n※秘書モードでのみ有効";
const RemYanflyOptions_Cheats_EnemyDoubleSexualDamage_EN = "\\i[387]\\C[1]BigDaddy";
const RemYanflyOptions_Cheats_EnemyDoubleSexualDamage_JP = "\\i[387]\\C[1]快楽ダメージ２倍";
const RemYanflyOptions_Cheats_EnemyDoubleSexualDamage_Help_EN = "Enemies deal double the amount of pleasure damage to Karryn.\nFor people who want to see Karryn succumb to pleasure faster.\nNote: Cheats only work in Secretary Mode.";
const RemYanflyOptions_Cheats_EnemyDoubleSexualDamage_Help_JP = "敵からの快楽ダメージが２倍になります。\n★快楽堕ちを早く見たい人向け。\n※秘書モードでのみ有効";
const RemYanflyOptions_Cheats_EnemyTripleSexualDamage_EN = "\\i[387]\\C[1]there is no cow level";
const RemYanflyOptions_Cheats_EnemyTripleSexualDamage_JP = "\\i[387]\\C[1]快楽ダメージ３倍";
const RemYanflyOptions_Cheats_EnemyTripleSexualDamage_Help_EN = "Enemies deal triple the amount of pleasure damage to Karryn.\nFor people who want to turn Karryn into a puddle.\nNote: Cheats only work in Secretary Mode.";
const RemYanflyOptions_Cheats_EnemyTripleSexualDamage_Help_JP = "敵からの快楽ダメージが３倍になります。\n★即イキ濡れ濡れ状態で楽しみたい人向け。\n※秘書モードでのみ有効";
const RemYanflyOptions_Cheats_EnemyDoubleOrgasmPoint_EN = "\\i[387]\\C[1]godmode";
const RemYanflyOptions_Cheats_EnemyDoubleOrgasmPoint_JP = "\\i[387]\\C[1]敵が遅漏化";
const RemYanflyOptions_Cheats_EnemyDoubleOrgasmPoint_Help_EN = "Enemies take twice as much pleasure before they will cum.\nFor people who want the men to stop premature ejaculating to Karryn.\nNote: Cheats only work in Secretary Mode.";
const RemYanflyOptions_Cheats_EnemyDoubleOrgasmPoint_Help_JP = "敵が絶頂するのに必要な快楽度が２倍になります。\n★早漏を防ぎたい人向け。\n※秘書モードでのみ有効";
const RemYanflyOptions_Cheats_EnemyAlwaysAct_EN = "\\i[385]\\C[2]stormbilly";
const RemYanflyOptions_Cheats_EnemyAlwaysAct_JP = "\\i[385]\\C[2]敵が必ず行動";
const RemYanflyOptions_Cheats_EnemyAlwaysAct_Help_EN = "Enemies will always act every turn.\nFor people who don't want enemies to skip their turn.\nNote: Cheats only work in Secretary Mode.";
const RemYanflyOptions_Cheats_EnemyAlwaysAct_Help_JP = "敵が必ず毎ターン行動するようになります。\n★敵のターンをスキップさせたくない人向け。\n※秘書モードでのみ有効";
const RemYanflyOptions_Cheats_ActorHalfStaminaRegen_EN = "\\i[473]\\C[29]pepperoni pizza";
const RemYanflyOptions_Cheats_ActorHalfStaminaRegen_JP = "\\i[473]\\C[29]回復半減";
const RemYanflyOptions_Cheats_ActorHalfStaminaRegen_Help_EN = "Karryn only regenerates half as much stamina.\nFor people who want to see Karryn get gradually worn down.\nNote: Cheats only work in Secretary Mode.";
const RemYanflyOptions_Cheats_ActorHalfStaminaRegen_Help_JP = "カリンの体力回復が半減します。\n★じわじわと追い詰められるのを見たい人向け。\n※秘書モードでのみ有効";
const RemYanflyOptions_Cheats_ActorThirdStaminaRegen_EN = "\\i[473]\\C[29]Thereisnospoon";
const RemYanflyOptions_Cheats_ActorThirdStaminaRegen_JP = "\\i[473]\\C[29]回復３分の１";
const RemYanflyOptions_Cheats_ActorThirdStaminaRegen_Help_EN = "Karryn only regenerates one-third as much stamina.\nFor people who want Karryn to regenerate much less.\nNote: Cheats only work in Secretary Mode.";
const RemYanflyOptions_Cheats_ActorThirdStaminaRegen_Help_JP = "カリンの体力回復が３分の１になります。\n★回復量を大幅に減らしたい人向け。\n※秘書モードでのみ有効";
const RemYanflyOptions_Cheats_ActorNoEvasion_EN = "\\i[427]\\C[30]Jack be nimble";
const RemYanflyOptions_Cheats_ActorNoEvasion_JP = "\\i[427]\\C[30]フルボッコ\\C[30]";
const RemYanflyOptions_Cheats_ActorNoEvasion_Help_EN = "Karryn can no longer evade.\nFor people who want Karryn to take every attack head on.\nNote: Cheats only work in Secretary Mode.";
const RemYanflyOptions_Cheats_ActorNoEvasion_Help_JP = "カリンは一切回避しなくなります。\n★攻撃を全部受けさせたい人向け。\n※秘書モードでのみ有効";
const RemYanflyOptions_Cheats_ActorHalfExpRate_EN = "\\i[361]\\C[30]hoyohoyo";
const RemYanflyOptions_Cheats_ActorHalfExpRate_JP = "\\i[361]\\C[30]経験値半減";
const RemYanflyOptions_Cheats_ActorHalfExpRate_Help_EN = "Karryn's experience rate is cut in half.\nFor people who want Karryn to take longer to level up.\nNote: Cheats only work in Secretary Mode.";
const RemYanflyOptions_Cheats_ActorHalfExpRate_Help_JP = "カリンの取得経験値が半減します。\n★レベルアップにもっと時間をかけたい人向け。\n※秘書モードでのみ有効";
const RemYanflyOptions_Cheats_LessControlFive_EN = "\\i[377]\\C[10]ROSEBUD";
const RemYanflyOptions_Cheats_LessControlFive_JP = "\\i[377]\\C[10]統制力が-5";
const RemYanflyOptions_Cheats_LessControlFive_Help_EN = "Lowers the prison's Control by 5.\nFor people who want to see more lower Order stuff.\nNote: Cheats only work in Secretary Mode.";
const RemYanflyOptions_Cheats_LessControlFive_Help_JP = "監獄の統制力が５下がります。\n★より低い秩序でプレイしたい人向け。\n※秘書モードでのみ有効";
const RemYanflyOptions_Cheats_LessControlTen_EN = "\\i[377]\\C[10]showracemenu";
const RemYanflyOptions_Cheats_LessControlTen_JP = "\\i[377]\\C[10]統制が-10";
const RemYanflyOptions_Cheats_LessControlTen_Help_EN = "Lowers the prison's Control by 10.\nFor people who want to quickly drop the prison's Order.\nNote: Cheats only work in Secretary Mode.";
const RemYanflyOptions_Cheats_LessControlTen_Help_JP = "監獄の統制力が１０下がります。\n★手っ取り早く秩序を落としたい人向け。\n※秘書モードでのみ有効";
const RemYanflyOptions_Cheats_InstantRiotsOne_EN = "\\i[407]\\C[7]Greedisgood";
const RemYanflyOptions_Cheats_InstantRiotsOne_JP = "\\i[407]\\C[7]レベル１で暴動多発";
const RemYanflyOptions_Cheats_InstantRiotsOne_Help_EN = "Prison Level One is pretty much going to riot every three days.\nFor people who want to re-experience a certain level's contents.\nNote: Cheats only work in Secretary Mode.";
const RemYanflyOptions_Cheats_InstantRiotsOne_Help_JP = "監獄レベル１でほぼ３日に１回暴動が発生するようになります。\n★特定の監獄レベルで再戦したい人向け。\n※秘書モードでのみ有効";
const RemYanflyOptions_Cheats_InstantRiotsTwo_EN = "\\i[407]\\C[7]black sheep wall";
const RemYanflyOptions_Cheats_InstantRiotsTwo_JP = "\\i[407]\\C[7]レベル２で暴動多発";
const RemYanflyOptions_Cheats_InstantRiotsTwo_Help_EN = "Prison Level Two is pretty much going to riot every three days.\nFor people who want to re-experience a certain level's contents.\nNote: Cheats only work in Secretary Mode.";
const RemYanflyOptions_Cheats_InstantRiotsTwo_Help_JP = "監獄レベル２でほぼ３日に１回暴動が発生するようになります。\n★特定の監獄レベルで再戦したい人向け。\n※秘書モードでのみ有効";
const RemYanflyOptions_Cheats_InstantRiotsThree_EN = "\\i[407]\\C[7]lumberjack";
const RemYanflyOptions_Cheats_InstantRiotsThree_JP = "\\i[407]\\C[7]レベル３で暴動多発";
const RemYanflyOptions_Cheats_InstantRiotsThree_Help_EN = "Prison Level Three is pretty much going to riot every three days.\nFor people who want to re-experience a certain level's contents.\nNote: Cheats only work in Secretary Mode.";
const RemYanflyOptions_Cheats_InstantRiotsThree_Help_JP = "監獄レベル３でほぼ３日に１回暴動が発生するようになります。\n★特定の監獄レベルで再戦したい人向け。\n※秘書モードでのみ有効";
const RemYanflyOptions_Cheats_InstantRiotsFour_EN = "\\i[407]\\C[7]allyourbasearebelongtous";
const RemYanflyOptions_Cheats_InstantRiotsFour_JP = "\\i[407]\\C[7]レベル４で暴動多発";
const RemYanflyOptions_Cheats_InstantRiotsFour_Help_EN = "Prison Level Four is pretty much going to riot every three days.\nFor people who want to re-experience a certain level's contents.\nNote: Cheats only work in Secretary Mode.";
const RemYanflyOptions_Cheats_InstantRiotsFour_Help_JP = "監獄レベル４でほぼ３日に１回暴動が発生するようになります。\n★特定の監獄レベルで再戦したい人向け。\n※秘書モードでのみ有効";
const RemYanflyOptions_Cheats_WaitressLog_EN = "\\i[282]\\C[17]KeyserSoze";
const RemYanflyOptions_Cheats_WaitressLog_JP = "\\i[282]\\C[17]らくらくウェイトレス";
const RemYanflyOptions_Cheats_WaitressLog_Help_EN = "Enables access to the History log during the Waitress side job.\nFor people who don't want to memorize orders.\nNote: Cheats only work in Secretary Mode.";
const RemYanflyOptions_Cheats_WaitressLog_Help_JP = "ウェイトレス中にバックログを表示出来るようになります。\n★注文を暗記したくない人向け。\n※秘書モードでのみ有効";

const RemYanflyOptions_Cheats_WaitressMemory_EN = "\\i[282]\\C[17]KeyserSoze";
const RemYanflyOptions_Cheats_WaitressMemory_JP = "\\i[282]\\C[17]神経衰弱ウェイトレス";
const RemYanflyOptions_Cheats_WaitressMemory_Help_EN = "Removes the icon for the drink bar patrons ordered.\nFor people who want to memorize orders.\nNote: This cheat works on all modes.";
const RemYanflyOptions_Cheats_WaitressMemory_Help_JP = "ウェイトレス中に客が注文したドリンクアイコンを非表示にします。\n★注文を暗記したい人向け。\n※全てのモードで有効";

const RemYanflyOptions_Cheats_NoAutoSave_EN = "\\i[282]The \\C[18]K*n*mi\\C[0] Code";
const RemYanflyOptions_Cheats_NoAutoSave_JP = "\\i[282]\\C[18]オートセーブ解除";
const RemYanflyOptions_Cheats_NoAutoSave_Help_EN = "Disables autosave.\nJust make sure to save often!\nNote: Cheats only work in Secretary Mode.";
const RemYanflyOptions_Cheats_NoAutoSave_Help_JP = "オートセーブを無効化します。\n※こまめなセーブをお忘れなく！\n※秘書モードでのみ有効";

const RemYanflyOptions_BoobsSize_EN = "\\i[58]Karryn's Boobs Size";
const RemYanflyOptions_BoobsSize_JP = "\\i[58]カリンのおっぱいサイズ";
const RemYanflyOptions_BoobsSize_Help_EN = "Changing Karryn's boobs size is cosmetic only and has no gameplay effect.";
const RemYanflyOptions_BoobsSize_Help_JP = "カリンのおっぱいサイズを変更出来ます。\n★見た目の変化のみでゲーム、セリフへの影響はありません。";
const RemYanflyOptions_BoobsSize_One_EN = "K Cup (Huge) (Default)";
const RemYanflyOptions_BoobsSize_One_JP = "【爆乳】Ｋカップ(デフォルト)";
const RemYanflyOptions_BoobsSize_Two_EN = "H Cup (Big)";
const RemYanflyOptions_BoobsSize_Two_JP = "【巨乳】Ｈカップ";
const RemYanflyOptions_BoobsSize_Three_EN = "P Cup (Massive)";
const RemYanflyOptions_BoobsSize_Three_JP = "【魔乳】Ｐカップ";

const RemYanflyOptions_HairColor_EN = "\\i[594]Karryn's Hair Color";
const RemYanflyOptions_HairColor_JP = "\\i[594]カリンのヘアカラー";
const RemYanflyOptions_HairColor_Help_EN = "Changing Karryn's hair color is cosmetic only and has no gameplay effect.\nNote that dialogues, cut-ins and certain sprites will still refer to Karryn's hair color as purple.\nRequires the Stray Pubes DLC.";
const RemYanflyOptions_HairColor_Help_JP = "カリンの髪の色(カットイン以外)を変更出来ます。\n★見た目の変化のみでゲーム、セリフへの影響はありません。\n※別売りの『毛DLC』必須";
const RemYanflyOptions_HairColor_One_EN = "Purple (Default)";
const RemYanflyOptions_HairColor_One_JP = "パープル(デフォルト)";
const RemYanflyOptions_HairColor_Two_EN = "Blond";
const RemYanflyOptions_HairColor_Two_JP = "ブロンド";
const RemYanflyOptions_HairColor_Three_EN = "Black";
const RemYanflyOptions_HairColor_Three_JP = "黒";

const RemYanflyOptions_DisplayPubicHair_EN = "\\i[595]Toggle Karryn's Pubic Hair";
const RemYanflyOptions_DisplayPubicHair_JP = "\\i[595]マン毛の有無";
const RemYanflyOptions_DisplayPubicHair_Help_EN = "Turn this option ON for Karryn to have pubic hair.\nKarryn having pubic hair or not is cosmetic only and has no gameplay effect.";
const RemYanflyOptions_DisplayPubicHair_Help_JP = "ON：カリンの股間に陰毛が生えます。\nOFF：カリンの股間が無毛になります。\n★パイパンでも毛ありでもゲームへの影響はありません。";

const RemYanflyOptions_PubicColor_EN = "\\i[595]Karryn's Pubic Color";
const RemYanflyOptions_PubicColor_JP = "\\i[595]カリンのマン毛カラー";
const RemYanflyOptions_PubicColor_Help_EN = "Changing Karryn's pubic color is cosmetic only and has no gameplay effect.\nRequires the Stray Pubes DLC.";
const RemYanflyOptions_PubicColor_Help_JP = "カリンの陰毛の色(カットイン以外)を変更出来ます。\n★見た目の変化のみでゲーム、セリフへの影響はありません。\n※別売りの『毛DLC』必須";
const RemYanflyOptions_PubicColor_Zero_EN = "Same as Hair Color (Default)";
const RemYanflyOptions_PubicColor_Zero_JP = "髪の色と同じ(デフォルト)";
const RemYanflyOptions_PubicColor_One_EN = "Purple";
const RemYanflyOptions_PubicColor_One_JP = "パープル";
const RemYanflyOptions_PubicColor_Two_EN = "Blond";
const RemYanflyOptions_PubicColor_Two_JP = "ブロンド";
const RemYanflyOptions_PubicColor_Three_EN = "Black";
const RemYanflyOptions_PubicColor_Three_JP = "黒";

const RemYanflyOptions_PubicStyle_EN = "\\i[595]Karryn's Pubic Style";
const RemYanflyOptions_PubicStyle_JP = "\\i[595]マン毛の形状";
const RemYanflyOptions_PubicStyle_Help_EN = "Changing Karryn's pubic style is cosmetic only and has no gameplay effect.\nRequires the Stray Pubes DLC.";
const RemYanflyOptions_PubicStyle_Help_JP = "カリンの陰毛スタイルを変更出来ます。\n★剛毛でも少毛でもゲームへの影響はありません。\n※別売りの『毛DLC』必須";
const RemYanflyOptions_PubicStyle_One_EN = "Natural (Default)";
const RemYanflyOptions_PubicStyle_One_JP = "普通(デフォルト)";
const RemYanflyOptions_PubicStyle_Two_EN = "Trimmed";
const RemYanflyOptions_PubicStyle_Two_JP = "さっぱり";
const RemYanflyOptions_PubicStyle_Three_EN = "Bushy";
const RemYanflyOptions_PubicStyle_Three_JP = "もっさり";

const RemYanflyOptions_ToggleMaleStrayPubes_EN = "\\i[596]Toggle Male Stray Pubes";
const RemYanflyOptions_ToggleMaleStrayPubes_JP = "\\i[596]張り付きチン毛の有無";
const RemYanflyOptions_ToggleMaleStrayPubes_Help_EN = "Turn this option ON for a chance of stray male pubes sticking onto Karryn's body.\nRequires the Stray Pubes DLC.";
const RemYanflyOptions_ToggleMaleStrayPubes_Help_JP = "ON：カリンの体に男達の陰毛が貼り付くようになります。\nOFF：男達の抜け毛はありません。\n※別売りの『毛DLC』必須";
const RemYanflyOptions_StrayPubesAmount_EN = "\\i[596]Stray Pubes Amount";
const RemYanflyOptions_StrayPubesAmount_JP = "\\i[596]張り付きチン毛の量";
const RemYanflyOptions_StrayPubesAmount_Help_EN = "This setting affects the chance and possible amount of stray pubes that can stick onto Karryn.\nPlay around with this setting if you feel like there's too much or not enough\ndirty male pubic hair on Karryn! Requires the Stray Pubes DLC.";
const RemYanflyOptions_StrayPubesAmount_Help_JP = "カリンにチン毛が貼り付く量(確率)を変更出来ます。\nチン毛の張り付き具合を調節したい場合にお試し下さい。\n※別売りの『毛DLC』必須";
const RemYanflyOptions_StrayPubesAmount_One_EN = "Default";
const RemYanflyOptions_StrayPubesAmount_One_JP = "普通(デフォルト)";
const RemYanflyOptions_StrayPubesAmount_Two_EN = "Less";
const RemYanflyOptions_StrayPubesAmount_Two_JP = "少なめ";
const RemYanflyOptions_StrayPubesAmount_Three_EN = "More";
const RemYanflyOptions_StrayPubesAmount_Three_JP = "多め";


const RemYanflyOptions_LovenseEnable_EN = "1) Enable Lovense Integration";
const RemYanflyOptions_LovenseEnable_JP = "① Lovenseの設定";
const RemYanflyOptions_LovenseEnable_Help_EN = "\\}Turn this setting ON to show Lovense Integration related settings.\n\\{Note that a real life Lovense sex toy will be required to use any of these features.";
const RemYanflyOptions_LovenseEnable_Help_JP = "ON：Lovenseグッズとゲームを連動させるための設定を行います。\nOFF：Lovenseとゲームは連動しません。\n※別売りの『Lovense』製の電動グッズ必須";

const RemYanflyOptions_LovenseConnectionType_EN = "2) Select Connection Type";
const RemYanflyOptions_LovenseConnectionType_JP = "② 接続先の設定";
const RemYanflyOptions_LovenseConnectionType_Help_EN = "Connect your Lovense toys to the Lovense Remote App.\n\\}Please select which version of the Lovense Remote App you're using to connect.";
const RemYanflyOptions_LovenseConnectionType_Help_JP = "Lovense Remoteの接続先を選択して下さい。";
const RemYanflyOptions_LovenseConnectionType_Mobile_EN = "iPhone/Android";
const RemYanflyOptions_LovenseConnectionType_Mobile_JP = "iPhone/Android";
const RemYanflyOptions_LovenseConnectionType_PC_EN = "Windows";
const RemYanflyOptions_LovenseConnectionType_PC_JP = "Windows";

const RemYanflyOptions_LovenseMobileIP_EN = "Enter Local IP";
const RemYanflyOptions_LovenseMobileIP_JP = "　ローカルIP";
const RemYanflyOptions_LovenseMobileIP_Help_EN = "\\}Please enter the Local IP displayed in the Game Mode screen of the mobile Lovense Remote app.\nIf you're streaming, please hide this screen while inputting the Local IP.";
const RemYanflyOptions_LovenseMobileIP_Help_JP = "Lovense Remoteアプリのゲームモード画面に表示されるLocal IPを入力して下さい。\n※ネット配信で使用する場合はこの画面を非表示にして入力して下さい。";
const RemYanflyOptions_LovenseMobileIP_Text_EN = "Please enter IP here";
const RemYanflyOptions_LovenseMobileIP_Text_JP = "IPを入力する";

const RemYanflyOptions_LovenseMobilePort_EN = "Enter Http Port";
const RemYanflyOptions_LovenseMobilePort_JP = "　Httpポート";
const RemYanflyOptions_LovenseMobilePort_Help_EN = "\\}Please enter the Http Port displayed in the Game Mode screen of the mobile Lovense Remote app.\nIf you're streaming, please hide this screen while inputting the Http Port.";
const RemYanflyOptions_LovenseMobilePort_Help_JP = "Lovense Remoteアプリのゲームモード画面に表示されるHttp Portを入力して下さい。\n※ネット配信で使用する場合はこの画面を非表示にして入力して下さい。";
const RemYanflyOptions_LovenseMobilePort_Text_EN = "Please enter port here";
const RemYanflyOptions_LovenseMobilePort_Text_JP = "Http Portを入力する";

const RemYanflyOptions_LovenseMobileHint_EN = "Please enter here";
const RemYanflyOptions_LovenseMobileHint_JP = "入力して下さい";

const RemYanflyOptions_LovenseConnectToys_EN = "3) Connect Toys";
const RemYanflyOptions_LovenseConnectToys_JP = "③ Lovenseの接続";
const RemYanflyOptions_LovenseConnectToys_Help_EN = "Please press the Connect button after completing the above steps.";
const RemYanflyOptions_LovenseConnectToys_Help_JP = "設定が完了したら『接続する』ボタンを押して下さい。";
const RemYanflyOptions_LovenseConnectToys_Text_EN = "CONNECT";
const RemYanflyOptions_LovenseConnectToys_Text_JP = "接続する";

const RemYanflyOptions_LovenseNoToysConnected_EN = "\\C[18]>>>No toys are currently connected<<<";
const RemYanflyOptions_LovenseNoToysConnected_JP = ">>>現在Lovenseグッズは接続されていません<<<";
const RemYanflyOptions_LovenseNoToysConnected_Help_EN = "\\}If you're having issues connecting the toys to the game,\nreview the above steps, make sure you're on the same Wifi network,\nand your VPN is turned off.";
const RemYanflyOptions_LovenseNoToysConnected_Help_JP = "Lovenseグッズとの接続に問題がある場合は、設定を確認し直して下さい。\nそしてLovenseグッズが同じWi-Fi上にあるか、VPNがオフになっているかどうかを確認して下さい。";


const RemYanflyOptions_LovenseToyNameList_EN = "Name: %1   Battery: %2%"; //Example 'Name: Rem's Toy  Battery: 69%'
const RemYanflyOptions_LovenseToyNameList_JP = "名前：%1　　バッテリー：%2%";
const RemYanflyOptions_LovenseToyNameList_Test_EN = "test";
const RemYanflyOptions_LovenseToyNameList_Test_JP = "テスト";

const RemYanflyOptions_LovenseIntensity_EN = "(Optional) Change Global Intensity";
const RemYanflyOptions_LovenseIntensity_JP = "【オプション】グッズ全体の強度";
const RemYanflyOptions_LovenseIntensity_Help_EN = "This setting allows you modify the intensity of all toy responses.\n\\}Note that the intensity of a toy response is also based on the type of sexual play and Karryn's sluttiness.\n\\}Lowering the intensity here is recommended if this is your first time enabling Lovense Integration for a slutty Karryn until you've adapted.";
const RemYanflyOptions_LovenseIntensity_Help_JP = "接続している全てのグッズの強度を変更出来ます。\n※強度はＨやカリンの堕ち具合によっても変化するのでご注意下さい。\n※慣れるまでは低めの強度でお試し下さい。";

const RemYanflyOptions_LovenseTime_EN = "(Optional) Change Global Duration";
const RemYanflyOptions_LovenseTime_JP = "【オプション】グッズ全体の継続時間";
const RemYanflyOptions_LovenseTime_Help_EN = "\\}Most non-penetrative sexual acts trigger a toy response only for a limited duration before automatically stopping.\nThis setting allows you modify the duration of those toy responses for all toys.";
const RemYanflyOptions_LovenseTime_Help_JP = "ほとんどのＨ(串刺しセックスを除く)はLovenseグッズが自動停止する前に規定の反応をします。\nこのオプションでLovenseグッズが停止するまでの継続時間が変更出来ます。";
const RemYanflyOptions_LovenseTime_Zero_EN = "1/2";
const RemYanflyOptions_LovenseTime_Zero_JP = "半分の間隔";
const RemYanflyOptions_LovenseTime_One_EN = "Default";
const RemYanflyOptions_LovenseTime_One_JP = "デフォルト";
const RemYanflyOptions_LovenseTime_Two_EN = "2x";
const RemYanflyOptions_LovenseTime_Two_JP = "２倍の間隔";
const RemYanflyOptions_LovenseTime_Three_EN = "3x";
const RemYanflyOptions_LovenseTime_Three_JP = "３倍の間隔";
const RemYanflyOptions_LovenseTime_Four_EN = "5x";
const RemYanflyOptions_LovenseTime_Four_JP = "５倍の間隔";
const RemYanflyOptions_LovenseTime_Five_EN = "Infinite";
const RemYanflyOptions_LovenseTime_Five_JP = "停止なし";
const RemYanflyOptions_LovenseTime_Six_EN = "1/6";
const RemYanflyOptions_LovenseTime_Six_JP = "６分の１の間隔";
const RemYanflyOptions_LovenseTime_Seven_EN = "1/4";
const RemYanflyOptions_LovenseTime_Seven_JP = "４分の１の間隔";

const RemYanflyOptions_LovensePumpEnable_EN = "(Optional) Enable Air Pump";
const RemYanflyOptions_LovensePumpEnable_JP = "【オプション】エアポンプの有効化";
const RemYanflyOptions_LovensePumpEnable_Help_EN = "Max/Max2 toys have the ability to compress using its air pump.\nYou can turn it off using this option.";
const RemYanflyOptions_LovensePumpEnable_Help_JP = "Max及びMax2にはエアポンプで収縮運動する機能があります。\nON：エアポンプを使用します。\nOFFエアポンプを使用しません。";

const RemYanflyOptions_LovenseEnableRAID_EN = "4) \\C[27]Enable RAID";
const RemYanflyOptions_LovenseEnableRAID_JP = "④ \\C[27]RAIDの有効化";
const RemYanflyOptions_LovenseEnableRAID_Help_EN = "\\}\\}'Rem's Advanced Integrated Disco' or RAID for short is Rem's unique toy integration system made for Karryn's Prison.\nBy default with RAID turned off, all connected toys will respond to EVERY sexual act to Karryn.\nTurning on RAID will enable a preset config based on your toys and \\C[27]allow further advanced customization for each connected toy.\\C[0]";
const RemYanflyOptions_LovenseEnableRAID_Help_JP = "\\}ﾚﾑｽﾞ･ｱﾄﾞﾊﾞﾝｽﾄﾞ･ｲﾝﾃｸﾞﾚｰﾃｯﾄﾞ･ﾃﾞｨｽｺ(略してRAID)はカリンズ・プリズン専用の独自グッズ統合システムです。\nON：グッズごとに部位のカスタマイズが出来、よりこだわった体験が可能になります。\nOFF：接続したグッズが全てのＨに反応します。";

const RemYanflyOptions_RAIDparty_Help_EN = "\\}Choose whether this is a '\\C[5]Party\\C[0]' toy or '\\C[4]Solo\\C[0]' toy.\n\\}\\C[5]Party\\C[0] toys will respond to all sex acts EXCEPT for the ones attributed to other toys.\n\\C[4]Solo\\C[0] toys will ONLY respond to sex acts attributed to it.";
const RemYanflyOptions_RAIDparty_Help_JP = "\\}\\C[4]スタイルＡ\\C[0]：セットした部位のＨにだけ反応するようになります。\n\\C[5]スタイルＢ\\C[0]：セットした部位のＨに反応しますが、他のグッズで選択した部位には反応しなくなります。";
const RemYanflyOptions_RAIDparty_Solo_EN = "Solo";
const RemYanflyOptions_RAIDparty_Solo_JP = "スタイルＡ";
const RemYanflyOptions_RAIDparty_Party_EN = "Party";
const RemYanflyOptions_RAIDparty_Party_JP = "スタイルＢ";

const RemYanflyOptions_RAIDsexact_Help_EN = "\\}Choose up to five different sex acts to attribute to this toy.\n\\}When a sex act is attributed to this toy, this toy will respond when that sex act happens to Karryn.\nAttributed sex acts are also more intense for this toy.";
const RemYanflyOptions_RAIDsexact_Help_JP = "このグッズに割り当てるプレイ部位を最大５つまで選択出来ます。\n割り当てた部位でＨが発生すると、このグッズが確実に反応するようになります。\nセットした部位のＨが発生した場合、グッズは更に激しく反応します。";
const RemYanflyOptions_RAIDsexact_Mouth_EN = "Mouth";
const RemYanflyOptions_RAIDsexact_Mouth_JP = "クチ";
const RemYanflyOptions_RAIDsexact_Boobs_EN = "Boobs";
const RemYanflyOptions_RAIDsexact_Boobs_JP = "おっぱい";
const RemYanflyOptions_RAIDsexact_Clit_EN = "Clit";
const RemYanflyOptions_RAIDsexact_Clit_JP = "クリ";
const RemYanflyOptions_RAIDsexact_Pussy_EN = "Pussy";
const RemYanflyOptions_RAIDsexact_Pussy_JP = "マンコ";
const RemYanflyOptions_RAIDsexact_Anal_EN = "Anal";
const RemYanflyOptions_RAIDsexact_Anal_JP = "アナル";
const RemYanflyOptions_RAIDsexact_Exhibitionism_EN = "Exhibitionism";
const RemYanflyOptions_RAIDsexact_Exhibitionism_JP = "露出";
const RemYanflyOptions_RAIDsexact_Masochism_EN = "Masochism";
const RemYanflyOptions_RAIDsexact_Masochism_JP = "マゾ";
const RemYanflyOptions_RAIDsexact_Sadism_EN = "Sadism";
const RemYanflyOptions_RAIDsexact_Sadism_JP = "サド";
const RemYanflyOptions_RAIDsexact_Rimjob_EN = "Rimjob";
const RemYanflyOptions_RAIDsexact_Rimjob_JP = "ケツ舐め";
const RemYanflyOptions_RAIDsexact_Footjob_EN = "Footjob";
const RemYanflyOptions_RAIDsexact_Footjob_JP = "足コキ";
const RemYanflyOptions_RAIDsexact_Hands_EN = "Hands";
const RemYanflyOptions_RAIDsexact_Hands_JP = "手コキ";

const RemYanflyOptions_RAIDarousal_Help_EN = "\\}Choose whether to have this toy respond to Karryn's Arousal.\nIf Arousal is set ON, this toy will produce a constant, low response while Karryn is aroused.";
const RemYanflyOptions_RAIDarousal_Help_JP = "ON：カリンの発情に連動してこのグッズが緩やかに反応します。\nOFF：このグッズはカリンの発情に反応しません。";
const RemYanflyOptions_RAIDarousal_ON_EN = "Arousal ON";
const RemYanflyOptions_RAIDarousal_ON_JP = "発情 ON";
const RemYanflyOptions_RAIDarousal_OFF_EN = "Arousal OFF";
const RemYanflyOptions_RAIDarousal_OFF_JP = "発情 OFF";
const RemYanflyOptions_RAIDorgasm_Help_EN = "\\}Choose whether to have this toy respond when Karryn has an orgasm.\nIf orgasm is set ON, this toy will produce a short, extremely high response whenever Karryn orgasms.";
const RemYanflyOptions_RAIDorgasm_Help_JP = "ON：カリンの絶頂に連動してこのグッズが激しく反応します。\nOFF：このグッズはカリンの絶頂に反応しません。";
const RemYanflyOptions_RAIDorgasm_ON_EN = "Orgasm ON";
const RemYanflyOptions_RAIDorgasm_ON_JP = "絶頂 ON";
const RemYanflyOptions_RAIDorgasm_OFF_EN = "Orgasm OFF";
const RemYanflyOptions_RAIDorgasm_OFF_JP = "絶頂 OFF";

const RemYanflyOptions_RAIDintensity_Help_EN = "Choose the intensity for this toy.\nChoosing global will use the global intensity setting for all toys.";
const RemYanflyOptions_RAIDintensity_Help_JP = "このグッズの強度を選択出来ます。\n『共通の強度』を選択すると、接続している全てのグッズに同じ設定強度が適用されます。";
const RemYanflyOptions_RAIDintensity_Global_EN = "Global Intensity";
const RemYanflyOptions_RAIDintensity_Global_JP = "共通の強度";

const RemYanflyOptions_RAIDtime_Help_EN = "Choose the duration for this toy.\nChoosing global will use the global duration setting for all toys.";
const RemYanflyOptions_RAIDtime_Help_JP = "このグッズの間隔を設定出来ます。\n『共通の間隔』を選択すると、接続している全てのグッズに同じ間隔が適用されます。";
const RemYanflyOptions_RAIDtime_Global_EN = "Global Duration";
const RemYanflyOptions_RAIDtime_Global_JP = "共通の間隔";
const RemYanflyOptions_RAIDTime_One_EN = "Default";
const RemYanflyOptions_RAIDTime_One_JP = "デフォルト";
const RemYanflyOptions_RAIDTime_Two_EN = "2x";
const RemYanflyOptions_RAIDTime_Two_JP = "２倍の間隔";
const RemYanflyOptions_RAIDTime_Three_EN = "3x";
const RemYanflyOptions_RAIDTime_Three_JP = "３倍の間隔";
const RemYanflyOptions_RAIDTime_Four_EN = "5x";
const RemYanflyOptions_RAIDTime_Four_JP = "５倍の間隔";
const RemYanflyOptions_RAIDTime_Five_EN = "Infinite";
const RemYanflyOptions_RAIDTime_Five_JP = "停止なし";
const RemYanflyOptions_RAIDTime_Six_EN = "1/6";
const RemYanflyOptions_RAIDTime_Six_JP = "６分の１の間隔";
const RemYanflyOptions_RAIDTime_Seven_EN = "1/4";
const RemYanflyOptions_RAIDTime_Seven_JP = "４分の１の間隔";
const RemYanflyOptions_RAIDTime_Eight_EN = "1/2";
const RemYanflyOptions_RAIDTime_Eight_JP = "半分の間隔";

const RemYanflyOptions_OptionsOn_EN = "ON";
const RemYanflyOptions_OptionsOn_JP = "ON";
const RemYanflyOptions_OptionsOff_EN = "OFF";
const RemYanflyOptions_OptionsOff_JP = "OFF";

//Save
const RemYanflySaveYesEN = "Yes";
const RemYanflySaveYesJP = "はい";
const RemYanflySaveNoEN = "No";
const RemYanflySaveNoJP = "いいえ";
const RemYanflySaveEmptyEN = "Empty";
const RemYanflySaveEmptyJP = "未使用";
const RemYanflySaveDeleteTextEN = "Do you wish to delete this save file?";
const RemYanflySaveDeleteTextJP = "このファイルを削除しますか？";
const RemYanflySaveLoadTextEN = "Do you wish to load this save file?";
const RemYanflySaveLoadTextJP = "このファイルをロードしますか？";
const RemYanflySaveSaveTextEN = "Do you wish to overwrite this save file?";
const RemYanflySaveSaveTextJP = "このファイルに上書きしてもいいですか？";
const RemYanflySaveInvalidTextEN = "This save is for a different game.";
const RemYanflySaveInvalidTextJP = "このファイルは別のゲームで使用されています。";
const RemYanflySaveSelectHelpEN = "Please select a file slot.";
const RemYanflySaveSelectHelpJP = "ファイルを選んでください。";
const RemYanflySaveLoadHelpEN = "Loads the data from the saved game.";
const RemYanflySaveLoadHelpJP = "このファイルをロードします。";
const RemYanflySaveSaveHelpEN = "Saves the current progress in your game.";
const RemYanflySaveSaveHelpJP = "このファイルにセーブします。";
const RemYanflySaveDeleteHelpEN = "Deletes all data from this save file.";
const RemYanflySaveDeleteHelpJP = "このファイルを削除します。";
const RemYanflyAutosavingEN = "Autosaving...";
const RemYanflyAutosavingJP = "セーブ中…";

const RemYanflySavePlaytimeEN = "Playtime:";
const RemYanflySavePlaytimeJP = "プレイ時間:";
const RemYanflySaveTotalSavesEN = "Total Saves:";
const RemYanflySaveTotalSavesJP = "セーブ数:";
const RemYanflySaveTotalDaysEN = "Total Days Spent:";
const RemYanflySaveTotalDaysJP = "周回プレイを含めた総合日数:";
const RemYanflySaveTotalPlaythroughsEN = "Total Playthroughs:";
const RemYanflySaveTotalPlaythroughsJP = "周回プレイ数:";
const RemYanflySaveTotalGameClearsEN = "Game Clear Count:";
const RemYanflySaveTotalGameClearsJP = "クリア数:";
const RemYanflySaveTotalEndingsEN = "Endings Seen:"; // currently unused
const RemYanflySaveTotalEndingsJP = "エンディング:"; // currently unused

const RemYanflyTargetEverybodyEN = "Everybody"; // currently unused
const RemYanflyTargetEverybodyJP = "Everybody"; // currently unused
const RemYanflyTargetMultiEverybodyEN = "Anyone"; // currently unused
const RemYanflyTargetMultiEverybodyJP = "Anyone"; // currently unused
const RemYanflyTargetMultiAlliesEN = "Any Ally"; // currently unused
const RemYanflyTargetMultiAlliesJP = "Any Ally"; // currently unused
const RemYanflyTargetMultiFoesEN = "Any Enemy"; // currently unused
const RemYanflyTargetMultiFoesJP = "Any Enemy"; // currently unused
const RemYanflyTargetFemaleAllyEN = "Female Ally"; // currently unused
const RemYanflyTargetFemaleAllyJP = "Female Ally"; // currently unused
const RemYanflyTargetFemaleEnemyEN = "Female Enemy"; // currently unused
const RemYanflyTargetFemaleEnemyJP = "Female Enemy"; // currently unused

const RemFTKRSkillTreeConfirmTextEN = "%2";
const RemFTKRSkillTreeConfirmTextJP = "%2";
const RemFTKRSkillTreeYesEN = "Enact";
const RemFTKRSkillTreeYesJP = "実行";
const RemFTKRSkillTreeNoEN = "Cancel";
const RemFTKRSkillTreeNoJP = "キャンセル";
const RemFTKRSkillTreeEdictPointsEN = "Edict Points:";
const RemFTKRSkillTreeEdictPointsJP = "指令値(EP)";
const RemFTKRSkillTreeEdictPointsAbbrEN = "EP";
const RemFTKRSkillTreeEdictPointsAbbrJP = "EP";
const RemFTKRSkillTreeOrderEN = "Order:";
const RemFTKRSkillTreeOrderJP = "秩序";
const RemFTKRSkillTreeFundingEN = "Funds:";
const RemFTKRSkillTreeFundingJP = "資金";
const RemFTKRSkillTreeFundingCostEN = "Cost:";
const RemFTKRSkillTreeFundingCostJP = "コスト";
const RemFTKRSkillTreeCostItemEN = "%1 Cost:"; // currently unused
const RemFTKRSkillTreeCostItemJP = "%1 コスト"; // currently unused
const RemFTKRSkillTreePreReqTextEN = "\\c[16]Requirements:";
const RemFTKRSkillTreePreReqTextJP = "\\c[16]【取得条件】";
const RemFTKRSkillTreeReqTypeEdictEN = "Edict: ";
const RemFTKRSkillTreeReqTypeEdictJP = "指令：";
const RemFTKRSkillTreeReqTypePassiveEN = "Passive: ";
const RemFTKRSkillTreeReqTypePassiveJP = "パッシブ：";


const RemErrorMessageEN = "IF YOUR GAME FILES OR SAVE FILE HAVEN'T BEEN MODIFIED OR YOU'RE NOT USING ANY MODS and you're playing a legitimate Steam/Itch.io/DLsite/Fanza copy of the game, please take a screenshot of this screen and report it to the #kp-bug-reports channel on our Discord! Please also tell us as many details of what happened before your error occurred!";
const RemErrorMessageJP = "申し訳ありません。エラーが発生しました！メッセージ「'Array buffer allocation failed'」「'resolution'」「Out of memory」が表示される場合、PCのメモリが不足しています。ゲームを起動する前に他のソフトウェア、特にブラウザソフトを全て閉じて下さい。その他エラーの場合はエラー発生時の状態、そしてこのエラー画面のスクリーンショットをRemtairyのDiscordにある「#バグ報告」チャンネルに添付していただければ、迅速に対応させていただきます。エラー発生前後の具体的な状況もお知らせ頂くと幸いです。お手数おかけして申し訳ございませんが、どうぞよろしくお願い致します！";

const RemEquipTypesEN = ["","Weapon","Accessory","Title","Load Equip Set", "Save Equip Set"];
const RemEquipTypesJP = ["","武器"," ｱｸｾｻﾘｰ ","称号","装備セットをロード", "装備セットをセーブ"];

const RemSkillTypesEN = ["",
"Attack",
"Energy",
"Sexual",
"Willpower",
"Buffs",
"Debuffs",
"Passives",
"Edicts",
"Talk",
"Sight",
"Off-balance",
"Fallen",
"Masturbate",
"Disarmed",
"Waitress",
"Bartender",
"Receptionist",
"Toilet",
"Masturbate",
"Stripper",
"Intermission",
"Trainer"
];

const RemSkillTypesJP = ["",
"攻撃スキル",
"精神スキル",
"性スキル",
"意思スキル",
"強化スキル",
"弱体スキル",
"パッシブ",
"指令",
"猥談",
"視姦",
"足がフラつく…",
"立たないと…",
"オナニー",
"再武装",
"ウェイトレス",
"バーテンダー",
"受付嬢",
"トイレ",
"オナニー",
"ストリッパー",
"インターミッション",
"トレーナー"
];

//Enemy Types
const RemPrisonerGenericEN = "Prisoner";
const RemPrisonerGenericJP = "囚人";
const RemPrisonerGuardEN = "Guard";
const RemPrisonerGuardJP = "警備兵";
const RemPrisonerThugEN = "Thug";
const RemPrisonerThugJP = "チンピラ";
const RemPrisonerGoblinEN = "Goblin";
const RemPrisonerGoblinJP = "ゴブリン";
const RemPrisonerOrcEN = "Orc";
const RemPrisonerOrcJP = "オーク";
const RemPrisonerSlimeEN = "Slime";
const RemPrisonerSlimeJP = "スライム";
const RemPrisonerNerdEN = "Nerd";
const RemPrisonerNerdJP = "オタク";
const RemPrisonerRogueEN = "Rogue";
const RemPrisonerRogueJP = "盗賊";
const RemPrisonerLizardmanEN = "Lizardman";
const RemPrisonerLizardmanJP = "リザードマン";
const RemPrisonerHomelessEN = "Hobo";
const RemPrisonerHomelessJP = "浮浪者";
const RemPrisonerWerewolfEN = "Werewolf";
const RemPrisonerWerewolfJP = "ウェアウルフ";
const RemPrisonerYetiEN = "Yeti";
const RemPrisonerYetiJP = "イエティ";


const RemReceptionistVisitorEN = "Visitor";
const RemReceptionistVisitorJP = "面会人";
const RemReceptionistFanEN = "Fan";
const RemReceptionistFanJP = "ファン";

//Boss Types
const RemBossYasuEN = "Deputy Warden";
const RemBossYasuJP = "副長官";
const RemBossTonkinEN = "Orc";
const RemBossTonkinJP = "オーク";
const RemBossCargillEN = "Doctor";
const RemBossCargillJP = "Dr.";
const RemBossAronEN = "Alpha Lizardman";
const RemBossAronJP = "アルファリザードマン";
const RemBossNoinimEN = "Great Yeti";
const RemBossNoinimJP = "グレートイエティ";
const RemBossGobrielEN = "Captain";
const RemBossGobrielJP = "キャプテン";
const RemBossEmperorEN = "His Imperial Majesty";
const RemBossEmperorJP = "陛下";

//Disable Smegma Text
const RemDisableSmegmaSkill815NameEN = "Dick Cleaning Machine";
const RemDisableSmegmaSkill815NameJP = "勃起に目がないチンポ掃除機";


//Skills
const RemRestoreMindPartialSuccessEN = "%1 succeeds in restoring a bit of her mind.";
const RemRestoreMindPartialSuccessJP = "%1の絶頂はわずかに収まった。";
const RemRestoreMindFullSuccessEN = "%1 succeeds in regaining her mind!";
const RemRestoreMindFullSuccessJP = "%1の絶頂は完全に収まった！";
const RemRestoreMindFailureEN = "%1 wasn't able to restore her mind...";
const RemRestoreMindFailureJP = "%1の絶頂は収まらなかった…。";

//Orgasm Skill Message
const RemOrgasmSkillMessageKarrynKissEN = " from kissing";
const RemOrgasmSkillMessageKarrynKissJP = "キスで気持ち良くなり過ぎて、";
const RemOrgasmSkillMessageKarrynPettingEN = " from rubbing a cock";
const RemOrgasmSkillMessageKarrynPettingJP = "チンポを愛撫する喜びのあまり、";
const RemOrgasmSkillMessageKarrynHandjobEN = " from jerking off a cock";
const RemOrgasmSkillMessageKarrynHandjobJP = "チンポをシゴく快感で";
const RemOrgasmSkillMessageKarrynBlowjobEN = " from sucking dick";
const RemOrgasmSkillMessageKarrynBlowjobJP = "チンポしゃぶりに興奮して";
const RemOrgasmSkillMessageKarrynTittyFuckEN = " from fucking a cock with her tits";
const RemOrgasmSkillMessageKarrynTittyFuckJP = "パイズリをする快感で";
const RemOrgasmSkillMessageKarrynPussySexEN = " from fucking a cock with her pussy";
const RemOrgasmSkillMessageKarrynPussySexJP = "マンコに押し寄せる快感によって、";
const RemOrgasmSkillMessageKarrynAnalSexEN = " from fucking a cock with her ass";
const RemOrgasmSkillMessageKarrynAnalSexJP = "アナルに与えられる快感で、";
const RemOrgasmSkillMessageEnemyKissEN = " from being kissed";
const RemOrgasmSkillMessageEnemyKissJP = "キスの気持ち良さで";
const RemOrgasmSkillMessageEnemyPettingEN = " from being petted";
const RemOrgasmSkillMessageEnemyPettingJP = "愛撫の快感で";
const RemOrgasmSkillMessageEnemyHandjobEN = " from being hand fucked";
const RemOrgasmSkillMessageEnemyHandjobJP = "手コキの興奮で";
const RemOrgasmSkillMessageEnemyBlowjobEN = " from being mouth fucked";
const RemOrgasmSkillMessageEnemyBlowjobJP = "フェラをしながら";
const RemOrgasmSkillMessageEnemyTittyFuckEN = " from being titty fucked";
const RemOrgasmSkillMessageEnemyTittyFuckJP = "パイズリをしながら";
const RemOrgasmSkillMessageEnemyPussySexEN = " from being fucked";
const RemOrgasmSkillMessageEnemyPussySexJP = "マンコを犯されながら";
const RemOrgasmSkillMessageEnemyAnalSexEN = " from being ass fucked";
const RemOrgasmSkillMessageEnemyAnalSexJP = "ケツ穴ファックされながら";
const RemOrgasmSkillMessageEnemyCunnilingusEN = " from receiving cunnilingus";
const RemOrgasmSkillMessageEnemyCunnilingusJP = "クンニの刺激で";
const RemOrgasmSkillMessageBukkakeEN = " from being cummed on";
const RemOrgasmSkillMessageBukkakeJP = "ぶっかけられて";
const RemOrgasmSkillMessageSwallowEN = " from swallowing cum";
const RemOrgasmSkillMessageSwallowJP = "ザーメンを飲んで";
const RemOrgasmSkillMessagePussyCreampieEN = " from being creampied in her pussy";
const RemOrgasmSkillMessagePussyCreampieJP = "マンコに中出しされて";
const RemOrgasmSkillMessageAnalCreampieEN = " from being creampied in her ass";
const RemOrgasmSkillMessageAnalCreampieJP = "ケツ奥に中出しされて";
const RemOrgasmSkillMessageMasochismEN = " from being masochistic";
const RemOrgasmSkillMessageMasochismJP = "Ｍの感情が高ぶるあまり、";
const RemOrgasmSkillMessageSadismEN = " from being sadistic";
const RemOrgasmSkillMessageSadismJP = "Ｓの快感に酔いしれて";
const RemOrgasmSkillMessageMasturbateEN = " from masturbating";
const RemOrgasmSkillMessageMasturbateJP = "オナニーの快感で";
const RemOrgasmSkillMessageSpankEN = " from being spanked";
const RemOrgasmSkillMessageSpankJP = "スパンキングの刺激で";
const RemOrgasmSkillMessageTalkEN = " from being talked down to";
const RemOrgasmSkillMessageTalkJP = "卑猥なトークにムラムラし過ぎて、";
const RemOrgasmSkillMessageSightEN = " from being looked at";
const RemOrgasmSkillMessageSightJP = "男の視線に興奮して";
const RemOrgasmSkillMessageToyEN = " from the toys";
const RemOrgasmSkillMessageToyJP = "オモチャの刺激で";

//Waitress
const RemAlcoholTypeWaterEN = "glass of water";
const RemAlcoholTypeWaterJP = "水";
const RemAlcoholTypePaleAleEN = "pint of pale ale";
const RemAlcoholTypePaleAleJP = "生ビール";
const RemAlcoholTypeDarkAleEN = "pint of dark ale";
const RemAlcoholTypeDarkAleJP = "黒ビール";
const RemAlcoholTypeVodkaEN = "glass of vodka";
const RemAlcoholTypeVodkaJP = "ウォッカ";
const RemAlcoholTypeTequilaEN = "glass of tequila";
const RemAlcoholTypeTequilaJP = "テキーラ";
const RemAlcoholTypeGoldRumEN = "glass of gold rum";
const RemAlcoholTypeGoldRumJP = "ゴールドラム";
const RemAlcoholTypeOverproofRumEN = "glass of overproof rum";
const RemAlcoholTypeOverproofRumJP = "高アルコールラム";
const RemAlcoholTypeWhiskeyEN = "glass of whiskey";
const RemAlcoholTypeWhiskeyJP = "ウイスキー";
const RemAlcoholTypeDirtyMugsSingularEN = "used mug";
const RemAlcoholTypeDirtyMugsSingularJP = "空ジョッキ";
const RemAlcoholTypeDirtyMugsPluralEN = "used mugs";
const RemAlcoholTypeDirtyMugsPluralJP = "重ねた空ジョッキ";
const RemAlcoholTypeDirtyGlassesSingularEN = "used glass";
const RemAlcoholTypeDirtyGlassesSingularJP = "空グラス";
const RemAlcoholTypeDirtyGlassesPluralEN = "used glasses";
const RemAlcoholTypeDirtyGlassesPluralJP = "重ねた空グラス";

const RemWaitressGetsTipEN = "\\C[3]%1 gets a tip of %2 gold!";
const RemWaitressGetsTipJP = "\\C[3]%1は%2Ｇのチップをゲット！";
const RemWaitressEnemySleepEN = "%1 drunkenly falls asleep on the table.";
const RemWaitressEnemySleepJP = "%1は酔いつぶれてテーブルに突っ伏したまま眠った。";
const RemWaitressEnemyWakeUpEN = "%1 jolts awake from all the commotion.";
const RemWaitressEnemyWakeUpJP = "%1は喧騒で目が覚めた。";
const RemWaitressEnemyLeavesBarEN = "\\C[8]%1 gets up and leaves the bar.";
const RemWaitressEnemyLeavesBarJP = "\\C[8]%1は起き上がって酒場から立ち去った。";
const RemWaitressEnemyLeavesBarDrunkEN = "\\C[8]%1 gets up and drunkenly stumbles out of the bar.";
const RemWaitressEnemyLeavesBarDrunkJP = "\\C[8]%1は起き上がると、酔った足取りで酒場から去った。";
const RemWaitressEnemyCallingForWaitressEN = "\\C[2]%1 starts calling for a waitress's attention.";
const RemWaitressEnemyCallingForWaitressJP = "\\C[2]%1はウェイトレスを呼んでいる！";
const RemWaitressEnemyDidntCallForWaitressEN = "However, %1 did not call for a waitress.";
const RemWaitressEnemyDidntCallForWaitressJP = "しかし%1はまだ、何を飲むか決めかねているようだ。";
const RemWaitressEnemyAskingForDrinkEN = "\\C[2]%1 would like to have a %2.";
const RemWaitressEnemyAskingForDrinkJP = "\\C[2]%1は『%2』を注文した。";
const RemWaitressEnemyAskingForWaitressToDrinkEN = "%1 is offering to give %2 a tip if she takes a sip of his drink.";
const RemWaitressEnemyAskingForWaitressToDrinkJP = "%1は彼の飲み残しを飲めば、チップを渡すと提案してきた。";
const RemWaitressEnemyAskingForWaitressToFlashEN = "%1 is offering to give %2 a tip if she flashes her hot body.";
const RemWaitressEnemyAskingForWaitressToFlashJP = "%1は%2が服をまくれば、チップを渡すと提案してきた。";
const RemWaitressRefusesDrinkEN = "But %1 refuses the drink to the disappointment of everyone around her.";
const RemWaitressRefusesDrinkJP = "しかし、%1はプライドを守るために断った。";
const RemWaitressAcceptsDrinkEN = "\\C[31]%1 takes a sip of the drink while everyone grins and cheers.";
const RemWaitressAcceptsDrinkJP = "\\C[31]客達が注目する中、%1は一口だけすすった。";
const RemWaitressWontFlashEN = "But %1 refuses to flash her body to random men in a bar.";
const RemWaitressWontFlashJP = "しかし、%1は拒否した。";
const RemWaitressFlashesEN = "\\C[27]%1 smiles and gives everyone an eyeful to look at.";
const RemWaitressFlashesJP = "\\C[27]%1は笑みを浮かべて応じた。";
const RemWaitressEnemyRefusesDrinkEN = "But %1 didn't ask for that drink.";
const RemWaitressEnemyRefusesDrinkJP = "しかし、%1は受け取らなかった。";
const RemWaitressEnemyAcceptsDrinkEN = "%1 takes and pays for the drink.";
const RemWaitressEnemyAcceptsDrinkJP = "%1は受け取ると、料金を支払った。";
const RemWaitressEnemyAlcoholKissEN = "\\C[27]%1 force fed %2 his drink while kissing her!";
const RemWaitressEnemyAlcoholKissJP = "\\C[27]%1は口移しで%2に飲ませた！";
const RemWaitressEnemyCheerForBrawlNoDrinkEN = "%1 cheers as he watches the ongoing brawl.";
const RemWaitressEnemyCheerForBrawlNoDrinkJP = "%1は喧嘩をあおっている。";
const RemWaitressEnemyCheerForBrawlYesDrinkEN = "%1 drinks as he cheers and watches the ongoing brawl.";
const RemWaitressEnemyCheerForBrawlYesDrinkJP = "%1は喧嘩を楽しみながら飲んでいる。";
const RemWaitressBrawlStartEN = "\\C[18]A brawl has started!!";
const RemWaitressBrawlStartJP = "\\C[18]喧嘩が始まった！！";
const RemWaitressBrawlJoinEN = "\\C[18]%1 eagerly jumps into the brawl!";
const RemWaitressBrawlJoinJP = "\\C[18]%1が喧嘩に参加した！";
const RemWaitressBarDamageEN = "\\C[3]The bar takes %1 gold worth of damage!";
const RemWaitressBarDamageJP = "\\C[3]酒場は%1Ｇの損害！";
const RemWaitressEnemyTellsJokeEN = "%1 starts telling a joke.";
const RemWaitressEnemyTellsJokeJP = "%1はジョークを言い出した。";
const RemWaitressEnemyContinuesJokeEN = "%1 continues to share his joke.";
const RemWaitressEnemyContinuesJokeJP = "%1はまだジョーク話を続けている。";
const RemWaitressEnemyHearsJokeEN = "%1 listens to %2's joke.";
const RemWaitressEnemyHearsJokeJP = "%1は%2のジョーク話に付き合っている。";
const RemWaitressEnemyLaughsJokeEN = "%1 laughs at %2's joke.";
const RemWaitressEnemyLaughsJokeJP = "%1は%2のジョークにウケている。";
const RemWaitressEnemyChugsDrinkEN = "%1 starts chugging his drink.";
const RemWaitressEnemyChugsDrinkJP = "%1は一気飲みした。";
const RemWaitressEnemyChugsDrinkFinishEN = "%1 chugs down the rest of his drink.";
const RemWaitressEnemyChugsDrinkFinishJP = "%1は残りを一気飲みした。";
const RemWaitressEnemyChattingEN = "%1 chats with %2.";
const RemWaitressEnemyChattingJP = "%1は%2と雑談している。";
const RemWaitressEnemyChattingHimselfEN = "%1 talks to himself.";
const RemWaitressEnemyChattingHimselfJP = "%1は独り言をつぶやいている。";
const RemWaitressEnemyEntersBarEN = "\\C[2]%1 enters the bar and sits down at %2.";
const RemWaitressEnemyEntersBarJP = "\\C[2]%1が入店して来た。%1は%2席に腰掛けた。";
const RemWaitressEnemyFumingEN = "\\C[10]%1 has a dark look on his face...";
const RemWaitressEnemyFumingJP = "\\C[10]%1は暗い面持ちをしている……。";
const RemWaitressEnemyStartSexEN = "\\C[27]%2 drunkenly stumbles a bit and %1 helps her rest her body on top of the table!!!";
const RemWaitressEnemyStartSexJP = "\\C[27]%1は酔った%2をテーブルに押し倒した！！！";
const RemWaitressEnemyRefillsKarrynMugEN = "%1 refills %2's mug with more pale ale!";
const RemWaitressEnemyRefillsKarrynMugJP = "%1は%2のジョッキへ更にビールを注ぎ込んだ！";
const RemWaitressEnemyDumpsKarrynMugEN = "%1 takes %2's mug and dumps all the ale on the floor!";
const RemWaitressEnemyDumpsKarrynMugJP = "%1がおっぱいジョッキの中身を捨てた！";
const RemWaitressDrinkSemenMugEN = "\\C[27]%1 gulps down \\C[1]%2 ml of semen!";
const RemWaitressDrinkSemenMugJP = "\\C[27]%1はジョッキに溜まったザーメンを飲み干した！！ザーメン量\\C[1]%2ml\\C[0]！！";

const RemReceptionistVisitingRoomA_EN = "Visiting Room A";
const RemReceptionistVisitingRoomA_JP = "面会室Ａ";
const RemReceptionistVisitingRoomB_EN = "Visiting Room B";
const RemReceptionistVisitingRoomB_JP = "面会室Ｂ";
const RemReceptionistVisitingRoomC_EN = "Visiting Room C";
const RemReceptionistVisitingRoomC_JP = "面会室Ｃ";
const RemReceptionistVisitingRoomD_EN = "Visiting Room D";
const RemReceptionistVisitingRoomD_JP = "面会室Ｄ";

const RemReceptionistNewVisitorEN = "\\C[2]%1 got assigned their number and sits down.";
const RemReceptionistNewVisitorJP = "\\C[2]%1は番号札を受け取って着席した。";
const RemReceptionistNewGoblinEN = "\\C[10]A goblin has appeared!";
const RemReceptionistNewGoblinJP = "\\C[10]ゴブリンが侵入してきた！";
const RemReceptionistGoblinDefeatedEN = "\\C[8]%1 has fled away!";
const RemReceptionistGoblinDefeatedJP = "\\C[8]%1は立ち去った！";
const RemReceptionistVisitorEntersVisitingRoomEN = "\\C[11]%1 entered %2.";
const RemReceptionistVisitorEntersVisitingRoomJP = "\\C[11]%1は%2へ向かって行った。";
const RemReceptionistVisitingRoomStatusOccupiedPluralEN = "\\C[23]\"%1 is in use for %2 more minutes, over!\"";
const RemReceptionistVisitingRoomStatusOccupiedPluralJP = "\\C[23]「%1はあと%2分間、使用中になります！」";
const RemReceptionistVisitingRoomStatusOccupiedSingleEN = "\\C[23]\"%1 is in use for one more minute, over!\"";
const RemReceptionistVisitingRoomStatusOccupiedSingleJP = "\\C[23]「%1はあと1分間、使用中になります！」";
const RemReceptionistVisitingRoomStatusNotOccupiedEN = "\\C[23]\"%1 is currently not being used, over!\"";
const RemReceptionistVisitingRoomStatusNotOccupiedJP = "\\C[23]「現在、%1は空室です！」";
const RemReceptionistVisitorWantsToHandOverPaperEN = "%1 is waiting to hand over their filled out paperwork.";
const RemReceptionistVisitorWantsToHandOverPaperJP = "%1は記入済み申込書を手渡そうとしている。";
const RemReceptionistVisitorAngryComplaint_OccupiedVisitingRoomEN = "\\C[10]%1 is complaining that %2 was still occupied.";
const RemReceptionistVisitorAngryComplaint_OccupiedVisitingRoomJP = "%2は別の面会人が使っている！\\C[10]%1が苦情を言ってきた。";
const RemReceptionistGreetVisitorResultNormalEN = "%1 replies that they are here for visitation.";
const RemReceptionistGreetVisitorResultNormalJP = "%1は囚人との面会に来ているようだ。";
const RemReceptionistFinishedProcessingPapersEN = "%1's papers are processed. They're allowed %2 minutes of visitation.";
const RemReceptionistFinishedProcessingPapersJP = "申込書の処理が完了。%1の面会時間：%2分";
const RemReceptionistVisitorLeavesAngryEN = "\\C[10]%1 suddenly angrily leaves the Visitor Center!";
const RemReceptionistVisitorLeavesAngryJP = "\\C[10]%1は怒ってその場から立ち去ってしまった！";
const RemReceptionistFanLeavesHappyEN = "%1 leaves the Visitor Center with a smile.";
const RemReceptionistFanLeavesHappyJP = "%1は笑顔で受付所から立ち去った。";
const RemReceptionistFanLeavesDejectedEN = "%1 dejectedly leaves the Visitor Center.";
const RemReceptionistFanLeavesDejectedJP = "%1はガックリして受付所から立ち去った……。";
const RemReceptionistPervLeavesHappyEN = "%1 leaves the Visitor Center with a huge grin.";
const RemReceptionistPervLeavesHappyJP = "%1はスッキリして受付所から立ち去った。";
const RemReceptionistPervLeavesAngryEN = "%1 angrily leaves the Visitor Center.";
const RemReceptionistPervLeavesAngryJP = "%1は欲求不満のまま受付所から立ち去った……。";
const RemReceptionistNotHereForVisitationEN = "Seems like %1 is not actually interested in visiting any inmates!";
const RemReceptionistNotHereForVisitationJP = "%1はカリンに会いに来ただけだった！";

const RemGloryBattleEndEN = "The door opens...";
const RemGloryBattleEndJP = "■ お手洗いタイム 終了 ■";
const RemGloryLeftStallCockNameEN = "The Cock on the Left";
const RemGloryLeftStallCockNameJP = "左のチンポ";
const RemGloryRightStallCockNameEN = "The Cock on the Right";
const RemGloryRightStallCockNameJP = "右のチンポ";
const RemGloryGuestEnterBathroomEN = "\\C[8]Someone has entered the bathroom.";
const RemGloryGuestEnterBathroomJP = "\\C[8]トイレに人が来た気配がする……。";
const RemGloryGuestLeaveBathroomEN = "\\C[8]Someone has left the bathroom.";
const RemGloryGuestLeaveBathroomJP = "\\C[8]誰かがトイレから立ち去った。";
const RemGloryGuestEnterLeftStallEN = "\\C[7]Someone has entered the left stall.";
const RemGloryGuestEnterLeftStallJP = "\\C[7]誰かが左の個室に入った。";
const RemGloryGuestLeaveLeftStallEN = "\\C[7]Someone has vacated the left stall.";
const RemGloryGuestLeaveLeftStallJP = "\\C[7]左の個室から人が出たようだ。";
const RemGloryGuestEnterRightStallEN = "\\C[7]Someone has entered the right stall.";
const RemGloryGuestEnterRightStallJP = "\\C[7]誰かが右の個室に入った。";
const RemGloryGuestLeaveRightStallEN = "\\C[7]Someone has vacated the right stall.";
const RemGloryGuestLeaveRightStallJP = "\\C[7]右の個室から人が出たようだ";
const RemGloryGuestPissingLeftStallEN = "\\C[8]Pissing sounds are coming from the left stall.";
const RemGloryGuestPissingLeftStallJP = "\\C[8]左の個室から小便の音がしている。";
const RemGloryGuestEatingLeftStallEN = "\\C[8]Food chewing sounds are coming from the left stall.";
const RemGloryGuestEatingLeftStallJP = "\\C[8]左の個室から食べる音が聞こえる。";
const RemGloryGuestPissingRightStallEN = "\\C[8]Pissing sounds are coming from the right stall.";
const RemGloryGuestPissingRightStallJP = "\\C[8]右の個室から小便の音がしている。";
const RemGloryGuestEatingRightStallEN = "\\C[8]Food chewing sounds are coming from the right stall.";
const RemGloryGuestEatingRightStallJP = "\\C[8]右の個室から食べる音が聞こえる。";
const RemGloryGuestShowedThroughLeftHoleEN = "\\C[27]A cock appears from the hole on the left!";
const RemGloryGuestShowedThroughLeftHoleJP = "\\C[27]左の穴からチンポが現れた！";
const RemGloryGuestShowedThroughRightHoleEN = "\\C[27]A cock appears from the hole on the right!";
const RemGloryGuestShowedThroughRightHoleJP = "\\C[27]右の穴からチンポが現れた！";

const RemStripperBattleEndEN = "Karryn's show has ended.";
const RemStripperBattleEndJP = "■ ストリップタイム 終了 ■";
const RemStripperEnemyTossCondomOntoStageEN = "%1 tosses a condom onto the stage.";
const RemStripperEnemyTossCondomOntoStageJP = "%1はコンドームを床に投げた。";
const RemStripperEnemyTipsCondomToBeltEN = "%1 ties a condom to %2's garter belt!";
const RemStripperEnemyTipsCondomToBeltJP = "%1は%2のガーターベルトにコンドームを付けた！";
const RemStripperEnemyTipsCondomToBraEN = "%1 ties a condom to %2's bra!";
const RemStripperEnemyTipsCondomToBraJP = "%1は%2のブラにコンドームを付けた！";
const RemStripperEnemyTipsCondomToNippleEN = "%1 ties a condom to %2's erect nipple!";
const RemStripperEnemyTipsCondomToNippleJP = "%1は%2の勃起乳首にコンドームを付けた！";
const RemStripperEnemyTipsCondomToHairbandEN = "%1 ties a condom to %2's bunny hairband!";
const RemStripperEnemyTipsCondomToHairbandJP = "%1は%2のヘアバンドにコンドームを付けた！";
const RemStripperEnemyTipsCondomToSidetailEN = "%1 ties a condom to %2's sidetail!";
const RemStripperEnemyTipsCondomToSidetailJP = "%1は%2のサイドテールにコンドームを付けた！";
const RemStripperEnemyEntersStripClubEN = "\\C[8]%1 takes a seat in front of the stage.";
const RemStripperEnemyEntersStripClubJP = "\\C[8]%1が席に着いた。";
const RemStripperEnemyLeavesStripClubHappyEN = "\\C[8]%1 gets up and leaves with a smile.";
const RemStripperEnemyLeavesStripClubHappyJP = "\\C[8]%1はスッキリした表情で立ち去った。";
const RemStripperEnemyLeavesStripClubUnhappyEN = "\\C[8]%1 gets up and leaves frustrated.";
const RemStripperEnemyLeavesStripClubUnhappyJP = "\\C[8]%1は不満げな表情で立ち去った。";
const RemStripperEnemyJoinVIPSingularEN = "\\C[8]%1 holds the hand of the remaining patron and brings them to the private room......";
const RemStripperEnemyJoinVIPSingularJP = "\\C[8]残った客は%1に手を引かれて、カーテンをくぐった……。";
const RemStripperEnemyJoinVIPPluralEN = "\\C[8]%1 holds the hands of the remaining patrons and brings them to the private room......";
const RemStripperEnemyJoinVIPPluralJP = "\\C[8]残った客達は%1に手を引かれて、カーテンをくぐった……。";

const RemTrainerEnemyObserveFormExcellentEN = "\\C[8](%1's form is \\C[10]pretty much perfect\\C[8].)";
const RemTrainerEnemyObserveFormExcellentJP = "\\C[8]%1のフォームは\\C[10]完璧に仕上がっている\\C[8]！";
const RemTrainerEnemyObserveFormGoodEN = "\\C[8](%1's form looks good%2\\C[8].)";
const RemTrainerEnemyObserveFormGoodJP = "\\C[8]%1のフォームは上出来だ。%2";
const RemTrainerEnemyObserveFormOkayEN = "\\C[8](%1's form could be better%2\\C[8].)";
const RemTrainerEnemyObserveFormOkayJP = "\\C[8]%1のフォームは改善の余地があるようだ。%2";
const RemTrainerEnemyObserveFormPoorEN = "\\C[8](%1's form could use a lot of work%2\\C[8].)";
const RemTrainerEnemyObserveFormPoorJP = "\\C[8]%1のフォームは課題が山積みのようだ。%2";
const RemTrainerEnemyObserveFormBadEN = "\\C[8](%1's form is absolutely terrible%2\\C[8].)";
const RemTrainerEnemyObserveFormBadJP = "\\C[8]%1のフォームは完全にデタラメだ……。%2";
const RemTrainerEnemyObserveFormMaxEN = "\\C[8] and it seems like \\C[10]this is his best"; //上のGood～Badの％２はここ
const RemTrainerEnemyObserveFormMaxJP = "\\C[8]そしてこれが彼の\\C[10]自己ベスト\\C[8]らしい。";
const RemTrainerEnemyObserveStaminaTiredEN = "\\C[8](He's also starting to look tired.)";
const RemTrainerEnemyObserveStaminaTiredJP = "\\C[8]そして、疲れも見え始めている。";
const RemTrainerEnemyObserveStaminaExhaustedEN = "\\C[8](He also looks exhausted.)";
const RemTrainerEnemyObserveStaminaExhaustedJP = "\\C[8]そして、かなり疲弊してしまっているようだ。";
const RemTrainerEnemyEntersGymEN = "\\C[2]%1 enters the gym and begins working out.";
const RemTrainerEnemyEntersGymJP = "\\C[2]%1がジム入り、トレーニングを始めた。";
const RemTrainerEnemyLeavesGymFinishedWorkoutEN = "\\C[8]%1 finished his workout and leaves the gym.";
const RemTrainerEnemyLeavesGymFinishedWorkoutJP = "\\C[8]%1はトレーニングを終えて、ジムから立ち去った。";
const RemTrainerEnemyLeavesGymFailedWorkoutEN = "\\C[8]%1 couldn't finish his workout and leaves the gym tired.";
const RemTrainerEnemyLeavesGymFailedWorkoutJP = "\\C[8]%1は途中で断念すると、疲れ切った様子でジムから立ち去った。";
const RemTrainerEnemyLeavesGymBlueballedEN = "\\C[8]%1 is too distracted and bothered by his blue balls and leaves the gym.";
const RemTrainerEnemyLeavesGymBlueballedJP = "\\C[8]%1は生殺し状態でモヤモヤした表情のまま、ジムから立ち去った。";
const RemTrainerEnemyLeavesGymHappyEN = "\\C[8]%1 couldn't finish his workout but still leaves the gym with a big smile.";
const RemTrainerEnemyLeavesGymHappyJP = "\\C[8]%1はトレーニングを完了させられなかったが、スッキリした表情でジムから立ち去った。";
const RemTrainerRinkanSpatsRippedEN = "Karryn's leggings got ripped!";
const RemTrainerRinkanSpatsRippedJP = "カリンのスパッツが破れた！";

const RemMidBattleEnemyReinforcementEN = "\\C[2]%1 arrives as enemy reinforcement!";
const RemMidBattleEnemyReinforcementJP = "\\C[2]増援に%1が現れた！";

const RemLevelFiveFreeBattleDefeatSettingEN = [
"a random Level",
"Level 1 Bar Storage",
"Level 2 Bathroom",
"Level 3 Solitary Cell",
"Level 4 Abandoned Area",
"Level 5 Altar"
];
const RemLevelFiveFreeBattleDefeatSettingJP = [
"ランダム",
"監獄レベル１ 酒場の物置",
"監獄レベル２ 男性用トイレ",
"監獄レベル３ 独房",
"監獄レベル４ 廃棄エリア",
"監獄レベル５ 祭壇"
];

/////////
// TextManager
////////////

Object.defineProperties(TextManager, {
	isJapanese: {
		get: function() {
			return (ConfigManager.remLanguage === RemLanguageJP);
		}, configurable: true
	},
	isEnglish: {
		get: function() {
			return (ConfigManager.remLanguage === RemLanguageEN);
		}, configurable: true
	},
	isTChinese: {
		get: function() {
			return (ConfigManager.remLanguage === RemLanguageTCH);
		}, configurable: true
	},
	isSChinese: {
		get: function() {
			return (ConfigManager.remLanguage === RemLanguageSCH);
		}, configurable: true
	},
	isKorean: {
		get: function() {
			return (ConfigManager.remLanguage === RemLanguageKR);
		}, configurable: true
	},
	isRussian: {
		get: function() {
			return (ConfigManager.remLanguage === RemLanguageRU);
		}, configurable: true
	},
	isSpanish: {
		get: function() {
			return (ConfigManager.remLanguage === RemLanguageSP);
		}, configurable: true
	},


	wpAtk: {
		get: function() {
			if(this.isJapanese) return WpAtkNameJP;
			else if(this.isEnglish) return WpAtkNameEN;
			else if(this.isRussian) return WpAtkNameRU;
			else if(this.isSChinese) return WpAtkNameSCH;
			else if(this.isTChinese) return WpAtkNameTCH;
			else if(this.isKorean) return WpAtkNameKR;
			else if(this.isSpanish) return WpAtkNameSP;
			return WpAtkNameEN;
		}, configurable: true
	},
	wpDef: {
		get: function() {
			if(this.isJapanese) return WpDefNameJP;
			else if(this.isEnglish) return WpDefNameEN;
			else if(this.isRussian) return WpDefNameRU;
			else if(this.isSChinese) return WpDefNameSCH;
			else if(this.isTChinese) return WpDefNameTCH;
			else if(this.isKorean) return WpDefNameKR;
			else if(this.isSpanish) return WpDefNameSP;
			return WpDefNameEN;
		}, configurable: true
	},
	overblowProtection: {
		get: function() {
			if(this.isJapanese) return OverblowProtectionNameJP;
			else if(this.isEnglish) return OverblowProtectionNameEN;
			else if(this.isRussian) return OverblowProtectionNameRU;
			else if(this.isSChinese) return OverblowProtectionNameSCH;
			else if(this.isTChinese) return OverblowProtectionNameTCH;
			else if(this.isKorean) return OverblowProtectionNameKR;
			else if(this.isSpanish) return OverblowProtectionNameSP;
			return OverblowProtectionNameEN;
		}, configurable: true
	},
	fatigue: {
		get: function() {
			if(this.isJapanese) return FatigueNameJP;
			else if(this.isEnglish) return FatigueNameEN;
			else if(this.isRussian) return FatigueNameRU;
			else if(this.isSChinese) return FatigueNameSCH;
			else if(this.isTChinese) return FatigueNameTCH;
			else if(this.isKorean) return FatigueNameKR;
			else if(this.isSpanish) return FatigueNameSP;
			return FatigueNameEN;
		}, configurable: true
	},
	fatigueGain: {
		get: function() {
			if(this.isJapanese) return FatigueGainNameJP;
			else if(this.isEnglish) return FatigueGainNameEN;
			else if(this.isRussian) return FatigueGainNameRU;
			else if(this.isSChinese) return FatigueGainNameSCH;
			else if(this.isTChinese) return FatigueGainNameTCH;
			else if(this.isKorean) return FatigueGainNameKR;
			else if(this.isSpanish) return FatigueGainNameSP;
			return FatigueGainNameEN;
		}, configurable: true
	},
	fatigueRecovery: {
		get: function() {
			if(this.isJapanese) return FatigueRecoveryNameJP;
			else if(this.isEnglish) return FatigueRecoveryNameEN;
			else if(this.isRussian) return FatigueRecoveryNameRU;
			else if(this.isSChinese) return FatigueRecoveryNameSCH;
			else if(this.isTChinese) return FatigueRecoveryNameTCH;
			else if(this.isKorean) return FatigueRecoveryNameKR;
			else if(this.isSpanish) return FatigueRecoveryNameSP;
			return FatigueRecoveryNameEN;
		}, configurable: true
	},
	maxWillpower: {
		get: function() {
			if(this.isJapanese) return MaxWillpowerNameJP;
			else if(this.isEnglish) return MaxWillpowerNameEN;
			else if(this.isRussian) return MaxWillpowerNameRU;
			else if(this.isSChinese) return MaxWillpowerNameSCH;
			else if(this.isTChinese) return MaxWillpowerNameTCH;
			else if(this.isKorean) return MaxWillpowerNameKR;
			else if(this.isSpanish) return MaxWillpowerNameSP;
			return MaxWillpowerNameEN;
		}, configurable: true
	},
	willpower: {
		get: function() {
			if(this.isJapanese) return WillpowerNameJP;
			else if(this.isEnglish) return WillpowerNameEN;
			else if(this.isRussian) return WillpowerNameRU;
			else if(this.isSChinese) return WillpowerNameSCH;
			else if(this.isTChinese) return WillpowerNameTCH;
			else if(this.isKorean) return WillpowerNameKR;
			else if(this.isSpanish) return WillpowerNameSP;
			return WillpowerNameEN;
		}, configurable: true
	},
	willpowerAbbr: {
		get: function() {
			if(this.isJapanese) return WillpowerAbbrJP;
			else if(this.isEnglish) return WillpowerAbbrEN;
			else if(this.isRussian) return WillpowerAbbrRU;
			else if(this.isSChinese) return WillpowerAbbrSCH;
			else if(this.isTChinese) return WillpowerAbbrTCH;
			else if(this.isKorean) return WillpowerAbbrKR;
			else if(this.isSpanish) return WillpowerAbbrSP;
			return WillpowerAbbrEN;
		}, configurable: true
	},
	cooldownTurnsSingular: {
		get: function() {
			if(this.isJapanese) return CooldownTurnsSingularNameJP;
			else if(this.isEnglish) return CooldownTurnsSingularNameEN;
			else if(this.isRussian) return CooldownTurnsSingularNameRU;
			else if(this.isSChinese) return CooldownTurnsSingularNameSCH;
			else if(this.isTChinese) return CooldownTurnsSingularNameTCH;
			else if(this.isKorean) return CooldownTurnsSingularNameKR;
			else if(this.isSpanish) return CooldownTurnsSingularNameSP;
			return CooldownTurnsSingularNameEN;
		}, configurable: true
	},
	cooldownTurnsPlural: {
		get: function() {
			if(this.isJapanese) return CooldownTurnsPluralNameJP;
			else if(this.isEnglish) return CooldownTurnsPluralNameEN;
			else if(this.isRussian) return CooldownTurnsPluralNameRU;
			else if(this.isSChinese) return CooldownTurnsPluralNameSCH;
			else if(this.isTChinese) return CooldownTurnsPluralNameTCH;
			else if(this.isKorean) return CooldownTurnsPluralNameKR;
			else if(this.isSpanish) return CooldownTurnsPluralNameSP;
			return CooldownTurnsPluralNameEN;
		}, configurable: true
	},
	cockiness: {
		get: function() {
			if(this.isJapanese) return CockinessNameJP;
			else if(this.isEnglish) return CockinessNameEN;
			else if(this.isRussian) return CockinessNameRU;
			else if(this.isSChinese) return CockinessNameSCH;
			else if(this.isTChinese) return CockinessNameTCH;
			else if(this.isKorean) return CockinessNameKR;
			else if(this.isSpanish) return CockinessNameSP;
			return CockinessNameEN;
		}, configurable: true
	},
	cockinessIncrease: {
		get: function() {
			if(this.isJapanese) return CockinessIncreasedTextJP;
			else if(this.isEnglish) return CockinessIncreasedTextEN;
			else if(this.isRussian) return CockinessIncreasedTextRU;
			else if(this.isSChinese) return CockinessIncreasedTextSCH;
			else if(this.isTChinese) return CockinessIncreasedTextTCH;
			else if(this.isKorean) return CockinessIncreasedTextKR;
			else if(this.isSpanish) return CockinessIncreasedTextSP;
			return CockinessIncreasedTextEN;
		}, configurable: true
	},
	cockinessDecrease: {
		get: function() {
			if(this.isJapanese) return CockinessDecreasedTextJP;
			else if(this.isEnglish) return CockinessDecreasedTextEN;
			else if(this.isRussian) return CockinessDecreasedTextRU;
			else if(this.isSChinese) return CockinessDecreasedTextSCH;
			else if(this.isTChinese) return CockinessDecreasedTextTCH;
			else if(this.isKorean) return CockinessDecreasedTextKR;
			else if(this.isSpanish) return CockinessDecreasedTextSP;
			return CockinessDecreasedTextEN;
		}, configurable: true
	},
	cockinessReset: {
		get: function() {
			if(this.isJapanese) return CockinessResetJP;
			else if(this.isEnglish) return CockinessResetEN;
			else if(this.isRussian) return CockinessResetRU;
			else if(this.isSChinese) return CockinessResetSCH;
			else if(this.isTChinese) return CockinessResetTCH;
			else if(this.isKorean) return CockinessResetKR;
			else if(this.isSpanish) return CockinessResetSP;
			return CockinessResetEN;
		}, configurable: true
	},
	cockinessMaxxedOut: {
		get: function() {
			if(this.isJapanese) return CockinessMaxxedOutJP;
			else if(this.isEnglish) return CockinessMaxxedOutEN;
			else if(this.isRussian) return CockinessMaxxedOutRU;
			else if(this.isSChinese) return CockinessMaxxedOutSCH;
			else if(this.isTChinese) return CockinessMaxxedOutTCH;
			else if(this.isKorean) return CockinessMaxxedOutKR;
			else if(this.isSpanish) return CockinessMaxxedOutSP;
			return CockinessMaxxedOutEN;
		}, configurable: true
	},

	critDmgName: {
		get: function() {
			if(this.isJapanese) return CritDmgNameJP;
			else if(this.isEnglish) return CritDmgNameEN;
			else if(this.isRussian) return CritDmgNameRU;
			else if(this.isSChinese) return CritDmgNameSCH;
			else if(this.isTChinese) return CritDmgNameTCH;
			else if(this.isKorean) return CritDmgNameKR;
			else if(this.isSpanish) return CritDmgNameSP;
			return CritDmgNameEN;
		}, configurable: true
	},
	resistName: {
		get: function() {
			if(this.isJapanese) return ResistNameJP;
			else if(this.isEnglish) return ResistNameEN;
			else if(this.isRussian) return ResistNameRU;
			else if(this.isSChinese) return ResistNameSCH;
			else if(this.isTChinese) return ResistNameTCH;
			else if(this.isKorean) return ResistNameKR;
			else if(this.isSpanish) return ResistNameSP;
			return ResistNameEN;
		}, configurable: true
	},
    loadFileName: {
		get: function() {
			if(this.isJapanese) return LoadNameJP;
			else if(this.isEnglish) return LoadNameEN;
			else if(this.isRussian) return LoadNameRU;
			else if(this.isSChinese) return LoadNameSCH;
			else if(this.isTChinese) return LoadNameTCH;
			else if(this.isKorean) return LoadNameKR;
			else if(this.isSpanish) return LoadNameSP;
			return LoadNameEN;
		}, configurable: true
	},
	saveFileName: {
		get: function() {
			if(this.isJapanese) return SaveNameJP;
			else if(this.isEnglish) return SaveNameEN;
			else if(this.isRussian) return SaveNameRU;
			else if(this.isSChinese) return SaveNameSCH;
			else if(this.isTChinese) return SaveNameTCH;
			else if(this.isKorean) return SaveNameKR;
			else if(this.isSpanish) return SaveNameSP;
			return SaveNameEN;
		}, configurable: true
	},
	deleteFileName: {
		get: function() {
			if(this.isJapanese) return DeleteNameJP;
			else if(this.isEnglish) return DeleteNameEN;
			else if(this.isRussian) return DeleteNameRU;
			else if(this.isSChinese) return DeleteNameSCH;
			else if(this.isTChinese) return DeleteNameTCH;
			else if(this.isKorean) return DeleteNameKR;
			else if(this.isSpanish) return DeleteNameSP;
			return DeleteNameEN;
		}, configurable: true
	},
    safeMode: {
		get: function() {
			if(this.isJapanese) return SafeModeJP;
			else if(this.isEnglish) return SafeModeEN;
			else if(this.isRussian) return SafeModeRU;
			else if(this.isSChinese) return SafeModeSCH;
			else if(this.isTChinese) return SafeModeTCH;
			else if(this.isKorean) return SafeModeKR;
			else if(this.isSpanish) return SafeModeSP;
			return SafeModeEN;
		}, configurable: true
	},
	replayMode: {
		get: function() {
			if(this.isJapanese) return ReplayModeJP;
			else if(this.isEnglish) return ReplayModeEN;
			else if(this.isRussian) return ReplayModeRU;
			else if(this.isSChinese) return ReplayModeSCH;
			else if(this.isTChinese) return ReplayModeTCH;
			else if(this.isKorean) return ReplayModeKR;
			else if(this.isSpanish) return ReplayModeSP;
			return ReplayModeEN;
		}, configurable: true
	},
	pixelMovement: {
		get: function() {
			if(this.isJapanese) return PixelMovementJP;
			else if(this.isEnglish) return PixelMovementEN;
			else if(this.isRussian) return PixelMovementRU;
			else if(this.isSChinese) return PixelMovementSCH;
			else if(this.isTChinese) return PixelMovementTCH;
			else if(this.isKorean) return PixelMovementKR;
			else if(this.isSpanish) return PixelMovementSP;
			return PixelMovementEN;
		}, configurable: true
	},
	battleLog: {
		get: function() {
			if(this.isJapanese) return BattleLogJP;
			else if(this.isEnglish) return BattleLogEN;
			else if(this.isRussian) return BattleLogRU;
			else if(this.isSChinese) return BattleLogSCH;
			else if(this.isTChinese) return BattleLogTCH;
			else if(this.isKorean) return BattleLogKR;
			else if(this.isSpanish) return BattleLogSP;
			return BattleLogEN;
		}, configurable: true
	},
	battleStatus: {
		get: function() {
			if(this.isJapanese) return BattleStatusJP;
			else if(this.isEnglish) return BattleStatusEN;
			else if(this.isRussian) return BattleStatusRU;
			else if(this.isSChinese) return BattleStatusSCH;
			else if(this.isTChinese) return BattleStatusTCH;
			else if(this.isKorean) return BattleStatusKR;
			else if(this.isSpanish) return BattleStatusSP;
			return BattleStatusEN;
		}, configurable: true
	},
	edicts: {
		get: function() {
			if(this.isJapanese) return EdictsJP;
			else if(this.isEnglish) return EdictsEN;
			else if(this.isRussian) return EdictsRU;
			else if(this.isSChinese) return EdictsSCH;
			else if(this.isTChinese) return EdictsTCH;
			else if(this.isKorean) return EdictsKR;
			else if(this.isSpanish) return EdictsSP;
			return EdictsEN;
		}, configurable: true
	},
	edictCostName: {
		get: function() {
			if(this.isJapanese) return EdictCostJP;
			else if(this.isEnglish) return EdictCostEN;
			else if(this.isRussian) return EdictCostRU;
			else if(this.isSChinese) return EdictCostSCH;
			else if(this.isTChinese) return EdictCostTCH;
			else if(this.isKorean) return EdictCostKR;
			else if(this.isSpanish) return EdictCostSP;
			return EdictCostEN;
		}, configurable: true
	},

	questLog: {
		get: function() {
			if(this.isJapanese) return QuestLogJP;
			else if(this.isEnglish) return QuestLogEN;
			else if(this.isRussian) return QuestLogRU;
			else if(this.isSChinese) return QuestLogSCH;
			else if(this.isTChinese) return QuestLogTCH;
			else if(this.isKorean) return QuestLogKR;
			else if(this.isSpanish) return QuestLogSP;
			return QuestLogEN;
		}, configurable: true
	},
	glossary: {
		get: function() {
			if(this.isJapanese) return GlossaryJP;
			else if(this.isEnglish) return GlossaryEN;
			else if(this.isRussian) return GlossaryRU;
			else if(this.isSChinese) return GlossarySCH;
			else if(this.isTChinese) return GlossaryTCH;
			else if(this.isKorean) return GlossaryKR;
			else if(this.isSpanish) return GlossarySP;
			return GlossaryEN;
		}, configurable: true
	},
	PassiveObtainedOn: {
		get: function() {
			if(this.isJapanese) return PassiveObtainedOnJP;
			else if(this.isEnglish) return PassiveObtainedOnEN;
			else if(this.isRussian) return PassiveObtainedOnRU;
			else if(this.isSChinese) return PassiveObtainedOnSCH;
			else if(this.isTChinese) return PassiveObtainedOnTCH;
			else if(this.isKorean) return PassiveObtainedOnKR;
			else if(this.isSpanish) return PassiveObtainedOnSP;
			return PassiveObtainedOnEN;
		}, configurable: true
	},

	staminaRecovery: {
		get: function() {
			if(this.isJapanese) return StaminaRecoveryJP;
			else if(this.isEnglish) return StaminaRecoveryEN;
			else if(this.isRussian) return StaminaRecoveryRU;
			else if(this.isSChinese) return StaminaRecoverySCH;
			else if(this.isTChinese) return StaminaRecoveryTCH;
			else if(this.isKorean) return StaminaRecoveryKR;
			else if(this.isSpanish) return StaminaRecoverySP;
			return StaminaRecoveryEN;
		}, configurable: true
	},
	energyRecovery: {
		get: function() {
			if(this.isJapanese) return EnergyRecoveryJP;
			else if(this.isEnglish) return EnergyRecoveryEN;
			else if(this.isRussian) return EnergyRecoveryRU;
			else if(this.isSChinese) return EnergyRecoverySCH;
			else if(this.isTChinese) return EnergyRecoveryTCH;
			else if(this.isKorean) return EnergyRecoveryKR;
			else if(this.isSpanish) return EnergyRecoverySP;
			return EnergyRecoveryEN;
		}, configurable: true
	},
	karrynTauntMessage: {
		get: function() {
			if(this.isJapanese) return KarrynTauntMessageJP;
			else if(this.isEnglish) return KarrynTauntMessageEN;
			else if(this.isRussian) return KarrynTauntMessageRU;
			else if(this.isSChinese) return KarrynTauntMessageSCH;
			else if(this.isTChinese) return KarrynTauntMessageTCH;
			else if(this.isKorean) return KarrynTauntMessageKR;
			else if(this.isSpanish) return KarrynTauntMessageSP;
			return KarrynTauntMessageEN;
		}, configurable: true
	},
	karrynFlauntMessage: {
		get: function() {
			if(this.isJapanese) return KarrynFlauntMessageJP;
			else if(this.isEnglish) return KarrynFlauntMessageEN;
			else if(this.isRussian) return KarrynFlauntMessageRU;
			else if(this.isSChinese) return KarrynFlauntMessageSCH;
			else if(this.isTChinese) return KarrynFlauntMessageTCH;
			else if(this.isKorean) return KarrynFlauntMessageKR;
			else if(this.isSpanish) return KarrynFlauntMessageSP;
			return KarrynFlauntMessageEN;
		}, configurable: true
	},

	aronCallLizardmanFail: {
		get: function() {
			if(this.isJapanese) return AronCallLizardmanFailJP;
			else if(this.isEnglish) return AronCallLizardmanFailEN;
			else if(this.isRussian) return AronCallLizardmanFailRU;
			else if(this.isSChinese) return AronCallLizardmanFailSCH;
			else if(this.isTChinese) return AronCallLizardmanFailTCH;
			else if(this.isKorean) return AronCallLizardmanFailKR;
			else if(this.isSpanish) return AronCallLizardmanFailSP;
			return AronCallLizardmanFailEN;
		}, configurable: true
	},

	actorGainPleasure: {
		get: function() {
			if(this.isJapanese) return ActorGainPleasureJP;
			else if(this.isEnglish) return ActorGainPleasureEN;
			else if(this.isRussian) return ActorGainPleasureRU;
			else if(this.isSChinese) return ActorGainPleasureSCH;
			else if(this.isTChinese) return ActorGainPleasureTCH;
			else if(this.isKorean) return ActorGainPleasureKR;
			else if(this.isSpanish) return ActorGainPleasureSP;
			return ActorGainPleasureEN;
		}, configurable: true
	},
	actorGainPleasure_Sight: {
		get: function() {
			if(this.isJapanese) return ActorGainPleasure_SightJP;
			else if(this.isEnglish) return ActorGainPleasure_SightEN;
			else if(this.isRussian) return ActorGainPleasure_SightRU;
			else if(this.isSChinese) return ActorGainPleasure_SightSCH;
			else if(this.isTChinese) return ActorGainPleasure_SightTCH;
			else if(this.isKorean) return ActorGainPleasure_SightKR;
			else if(this.isSpanish) return ActorGainPleasure_SightSP;
			return ActorGainPleasure_SightEN;
		}, configurable: true
	},
	actorGainPleasure_Toy: {
		get: function() {
			if(this.isJapanese) return ActorGainPleasure_ToyJP;
			else if(this.isEnglish) return ActorGainPleasure_ToyEN;
			else if(this.isRussian) return ActorGainPleasure_ToyRU;
			else if(this.isSChinese) return ActorGainPleasure_ToySCH;
			else if(this.isTChinese) return ActorGainPleasure_ToyTCH;
			else if(this.isKorean) return ActorGainPleasure_ToyKR;
			else if(this.isSpanish) return ActorGainPleasure_ToySP;
			return ActorGainPleasure_ToyEN;
		}, configurable: true
	},
	pleasurePercentText: {
		get: function() {
			if(this.isJapanese) return PleasurePercentTextJP;
			else if(this.isEnglish) return PleasurePercentTextEN;
			else if(this.isRussian) return PleasurePercentTextRU;
			else if(this.isSChinese) return PleasurePercentTextSCH;
			else if(this.isTChinese) return PleasurePercentTextTCH;
			else if(this.isKorean) return PleasurePercentTextKR;
			else if(this.isSpanish) return PleasurePercentTextSP;
			return PleasurePercentTextEN;
		}, configurable: true
	},
	enemyGainPleasurePercent: {
		get: function() {
			if(this.isJapanese) return EnemyGainPleasure_Percent_JP;
			else if(this.isEnglish) return EnemyGainPleasure_Percent_EN;
			else if(this.isRussian) return EnemyGainPleasure_Percent_RU;
			else if(this.isSChinese) return EnemyGainPleasure_Percent_SCH;
			else if(this.isTChinese) return EnemyGainPleasure_Percent_TCH;
			else if(this.isKorean) return EnemyGainPleasure_Percent_KR;
			else if(this.isSpanish) return EnemyGainPleasure_Percent_SP;
			return EnemyGainPleasure_Percent_EN;
		}, configurable: true
	},
	enemyGainPleasureValue: {
		get: function() {
			if(this.isJapanese) return EnemyGainPleasure_Value_JP;
			else if(this.isEnglish) return EnemyGainPleasure_Value_EN;
			else if(this.isRussian) return EnemyGainPleasure_Value_RU;
			else if(this.isSChinese) return EnemyGainPleasure_Value_SCH;
			else if(this.isTChinese) return EnemyGainPleasure_Value_TCH;
			else if(this.isKorean) return EnemyGainPleasure_Value_KR;
			else if(this.isSpanish) return EnemyGainPleasure_Value_SP;
			return EnemyGainPleasure_Value_EN;
		}, configurable: true
	},


	actorSingleOrgasm: {
		get: function() {
			if(this.isJapanese) return ActorSingleOrgasmJP;
			else if(this.isEnglish) return ActorSingleOrgasmEN;
			else if(this.isRussian) return ActorSingleOrgasmRU;
			else if(this.isSChinese) return ActorSingleOrgasmSCH;
			else if(this.isTChinese) return ActorSingleOrgasmTCH;
			else if(this.isKorean) return ActorSingleOrgasmKR;
			else if(this.isSpanish) return ActorSingleOrgasmSP;
			return ActorSingleOrgasmEN;
		}, configurable: true
	},
	actorMultipleOrgasm: {
		get: function() {
			if(this.isJapanese) return ActorMultipleOrgasmJP;
			else if(this.isEnglish) return ActorMultipleOrgasmEN;
			else if(this.isRussian) return ActorMultipleOrgasmRU;
			else if(this.isSChinese) return ActorMultipleOrgasmSCH;
			else if(this.isTChinese) return ActorMultipleOrgasmTCH;
			else if(this.isKorean) return ActorMultipleOrgasmKR;
			else if(this.isSpanish) return ActorMultipleOrgasmSP;
			return ActorMultipleOrgasmEN;
		}, configurable: true
	},
	ejaculatePussy: {
		get: function() {
			if(this.isJapanese) return EjaculatePussyJP;
			else if(this.isEnglish) return EjaculatePussyEN;
			else if(this.isRussian) return EjaculatePussyRU;
			else if(this.isSChinese) return EjaculatePussySCH;
			else if(this.isTChinese) return EjaculatePussyTCH;
			else if(this.isKorean) return EjaculatePussyKR;
			else if(this.isSpanish) return EjaculatePussySP;
			return EjaculatePussyEN;
		}, configurable: true
	},
	ejaculateAnal: {
		get: function() {
			if(this.isJapanese) return EjaculateAnalJP;
			else if(this.isEnglish) return EjaculateAnalEN;
			else if(this.isRussian) return EjaculateAnalRU;
			else if(this.isSChinese) return EjaculateAnalSCH;
			else if(this.isTChinese) return EjaculateAnalTCH;
			else if(this.isKorean) return EjaculateAnalKR;
			else if(this.isSpanish) return EjaculateAnalSP;
			return EjaculateAnalEN;
		}, configurable: true
	},
	ejaculateMouth: {
		get: function() {
			if(this.isJapanese) return EjaculateMouthJP;
			else if(this.isEnglish) return EjaculateMouthEN;
			else if(this.isRussian) return EjaculateMouthRU;
			else if(this.isSChinese) return EjaculateMouthSCH;
			else if(this.isTChinese) return EjaculateMouthTCH;
			else if(this.isKorean) return EjaculateMouthKR;
			else if(this.isSpanish) return EjaculateMouthSP;
			return EjaculateMouthEN;
		}, configurable: true
	},
	bukkakeFace: {
		get: function() {
			if(this.isJapanese) return BukkakeFaceJP;
			else if(this.isEnglish) return BukkakeFaceEN;
			else if(this.isRussian) return BukkakeFaceRU;
			else if(this.isSChinese) return BukkakeFaceSCH;
			else if(this.isTChinese) return BukkakeFaceTCH;
			else if(this.isKorean) return BukkakeFaceKR;
			else if(this.isSpanish) return BukkakeFaceSP;
			return BukkakeFaceEN;
		}, configurable: true
	},
	bukkakeBoobs: {
		get: function() {
			if(this.isJapanese) return BukkakeBoobsJP;
			else if(this.isEnglish) return BukkakeBoobsEN;
			else if(this.isRussian) return BukkakeBoobsRU;
			else if(this.isSChinese) return BukkakeBoobsSCH;
			else if(this.isTChinese) return BukkakeBoobsTCH;
			else if(this.isKorean) return BukkakeBoobsKR;
			else if(this.isSpanish) return BukkakeBoobsSP;
			return BukkakeBoobsEN;
		}, configurable: true
	},
	bukkakeArms: {
		get: function() {
			if(this.isJapanese) return BukkakeArmsJP;
			else if(this.isEnglish) return BukkakeArmsEN;
			else if(this.isRussian) return BukkakeArmsRU;
			else if(this.isSChinese) return BukkakeArmsSCH;
			else if(this.isTChinese) return BukkakeArmsTCH;
			else if(this.isKorean) return BukkakeArmsKR;
			else if(this.isSpanish) return BukkakeArmsSP;
			return BukkakeArmsEN;
		}, configurable: true
	},
	bukkakeLegs: {
		get: function() {
			if(this.isJapanese) return BukkakeLegsJP;
			else if(this.isEnglish) return BukkakeLegsEN;
			else if(this.isRussian) return BukkakeLegsRU;
			else if(this.isSChinese) return BukkakeLegsSCH;
			else if(this.isTChinese) return BukkakeLegsTCH;
			else if(this.isKorean) return BukkakeLegsKR;
			else if(this.isSpanish) return BukkakeLegsSP;
			return BukkakeLegsEN;
		}, configurable: true
	},

	bukkakeButt: {
		get: function() {
			if(this.isJapanese) return BukkakeButtJP;
			else if(this.isEnglish) return BukkakeButtEN;
			else if(this.isRussian) return BukkakeButtRU;
			else if(this.isSChinese) return BukkakeButtSCH;
			else if(this.isTChinese) return BukkakeButtTCH;
			else if(this.isKorean) return BukkakeButtKR;
			else if(this.isSpanish) return BukkakeButtSP;
			return BukkakeButtEN;
		}, configurable: true
	},
	actorFirstKissMouth: {
		get: function() {
			if(this.isJapanese) return ActorFirstKissMouthJP;
			else if(this.isEnglish) return ActorFirstKissMouthEN;
			else if(this.isRussian) return ActorFirstKissMouthRU;
			else if(this.isSChinese) return ActorFirstKissMouthSCH;
			else if(this.isTChinese) return ActorFirstKissMouthTCH;
			else if(this.isKorean) return ActorFirstKissMouthKR;
			else if(this.isSpanish) return ActorFirstKissMouthSP;
			return ActorFirstKissMouthEN;
		}, configurable: true
	},
	actorFirstKissCock: {
		get: function() {
			if(this.isJapanese) return ActorFirstKissCockJP;
			else if(this.isEnglish) return ActorFirstKissCockEN;
			else if(this.isRussian) return ActorFirstKissCockRU;
			else if(this.isSChinese) return ActorFirstKissCockSCH;
			else if(this.isTChinese) return ActorFirstKissCockTCH;
			else if(this.isKorean) return ActorFirstKissCockKR;
			else if(this.isSpanish) return ActorFirstKissCockSP;
			return ActorFirstKissCockEN;
		}, configurable: true
	},
	actorFirstKissAnus: {
		get: function() {
			if(this.isJapanese) return ActorFirstKissAnusJP;
			else if(this.isEnglish) return ActorFirstKissAnusEN;
			else if(this.isRussian) return ActorFirstKissAnusRU;
			else if(this.isSChinese) return ActorFirstKissAnusSCH;
			else if(this.isTChinese) return ActorFirstKissAnusTCH;
			else if(this.isKorean) return ActorFirstKissAnusKR;
			else if(this.isSpanish) return ActorFirstKissAnusSP;
			return ActorFirstKissAnusEN;
		}, configurable: true
	},
	actorLostPussyVirginity: {
		get: function() {
			if(this.isJapanese) return ActorLostPussyVirginityJP;
			else if(this.isEnglish) return ActorLostPussyVirginityEN;
			else if(this.isRussian) return ActorLostPussyVirginityRU;
			else if(this.isSChinese) return ActorLostPussyVirginitySCH;
			else if(this.isTChinese) return ActorLostPussyVirginityTCH;
			else if(this.isKorean) return ActorLostPussyVirginityKR;
			else if(this.isSpanish) return ActorLostPussyVirginitySP;
			return ActorLostPussyVirginityEN;
		}, configurable: true
	},
	actorLostAnalVirginity: {
		get: function() {
			if(this.isJapanese) return ActorLostAnalVirginityJP;
			else if(this.isEnglish) return ActorLostAnalVirginityEN;
			else if(this.isRussian) return ActorLostAnalVirginityRU;
			else if(this.isSChinese) return ActorLostAnalVirginitySCH;
			else if(this.isTChinese) return ActorLostAnalVirginityTCH;
			else if(this.isKorean) return ActorLostAnalVirginityKR;
			else if(this.isSpanish) return ActorLostAnalVirginitySP;
			return ActorLostAnalVirginityEN;
		}, configurable: true
	},
	invasionNoiseLevelOne: {
		get: function() {
			if(this.isJapanese) return InvasionNoiseLevelOneJP;
			else if(this.isEnglish) return InvasionNoiseLevelOneEN;
			else if(this.isRussian) return InvasionNoiseLevelOneRU;
			else if(this.isSChinese) return InvasionNoiseLevelOneSCH;
			else if(this.isTChinese) return InvasionNoiseLevelOneTCH;
			else if(this.isKorean) return InvasionNoiseLevelOneKR;
			else if(this.isSpanish) return InvasionNoiseLevelOneSP;
			return InvasionNoiseLevelOneEN;
		}, configurable: true
	},
	invasionNoiseLevelTwo: {
		get: function() {
			if(this.isJapanese) return InvasionNoiseLevelTwoJP;
			else if(this.isEnglish) return InvasionNoiseLevelTwoEN;
			else if(this.isRussian) return InvasionNoiseLevelTwoRU;
			else if(this.isSChinese) return InvasionNoiseLevelTwoSCH;
			else if(this.isTChinese) return InvasionNoiseLevelTwoTCH;
			else if(this.isKorean) return InvasionNoiseLevelTwoKR;
			else if(this.isSpanish) return InvasionNoiseLevelTwoSP;
			return InvasionNoiseLevelTwoEN;
		}, configurable: true
	},
	invasionNoiseLevelThree: {
		get: function() {
			if(this.isJapanese) return InvasionNoiseLevelThreeJP;
			else if(this.isEnglish) return InvasionNoiseLevelThreeEN;
			else if(this.isRussian) return InvasionNoiseLevelThreeRU;
			else if(this.isSChinese) return InvasionNoiseLevelThreeSCH;
			else if(this.isTChinese) return InvasionNoiseLevelThreeTCH;
			else if(this.isKorean) return InvasionNoiseLevelThreeKR;
			else if(this.isSpanish) return InvasionNoiseLevelThreeSP;
			return InvasionNoiseLevelThreeEN;
		}, configurable: true
	},
	invasionNoiseLevelFour: {
		get: function() {
			if(this.isJapanese) return InvasionNoiseLevelFourJP;
			else if(this.isEnglish) return InvasionNoiseLevelFourEN;
			else if(this.isRussian) return InvasionNoiseLevelFourRU;
			else if(this.isSChinese) return InvasionNoiseLevelFourSCH;
			else if(this.isTChinese) return InvasionNoiseLevelFourTCH;
			else if(this.isKorean) return InvasionNoiseLevelFourKR;
			else if(this.isSpanish) return InvasionNoiseLevelFourSP;
			return InvasionNoiseLevelFourEN;
		}, configurable: true
	},
	invasionBattleStart: {
		get: function() {
			if(this.isJapanese) return InvasionBattleStartJP;
			else if(this.isEnglish) return InvasionBattleStartEN;
			else if(this.isRussian) return InvasionBattleStartRU;
			else if(this.isSChinese) return InvasionBattleStartSCH;
			else if(this.isTChinese) return InvasionBattleStartTCH;
			else if(this.isKorean) return InvasionBattleStartKR;
			else if(this.isSpanish) return InvasionBattleStartSP;
			return InvasionBattleStartEN;
		}, configurable: true
	},


	masturbateBattleTouchClit: {
		get: function() {
			if(this.isJapanese) return MasturbateBattleTouchClitJP;
			else if(this.isEnglish) return MasturbateBattleTouchClitEN;
			else if(this.isRussian) return MasturbateBattleTouchClitRU;
			else if(this.isSChinese) return MasturbateBattleTouchClitSCH;
			else if(this.isTChinese) return MasturbateBattleTouchClitTCH;
			else if(this.isKorean) return MasturbateBattleTouchClitKR;
			else if(this.isSpanish) return MasturbateBattleTouchClitSP;
			return MasturbateBattleTouchClitEN;
		}, configurable: true
	},
	masturbateBattleTouchPussy: {
		get: function() {
			if(this.isJapanese) return MasturbateBattleTouchPussyJP;
			else if(this.isEnglish) return MasturbateBattleTouchPussyEN;
			else if(this.isRussian) return MasturbateBattleTouchPussyRU;
			else if(this.isSChinese) return MasturbateBattleTouchPussySCH;
			else if(this.isTChinese) return MasturbateBattleTouchPussyTCH;
			else if(this.isKorean) return MasturbateBattleTouchPussyKR;
			else if(this.isSpanish) return MasturbateBattleTouchPussySP;
			return MasturbateBattleTouchPussyEN;
		}, configurable: true
	},
	masturbateBattleTouchBoobs: {
		get: function() {
			if(this.isJapanese) return MasturbateBattleTouchBoobsJP;
			else if(this.isEnglish) return MasturbateBattleTouchBoobsEN;
			else if(this.isRussian) return MasturbateBattleTouchBoobsRU;
			else if(this.isSChinese) return MasturbateBattleTouchBoobsSCH;
			else if(this.isTChinese) return MasturbateBattleTouchBoobsTCH;
			else if(this.isKorean) return MasturbateBattleTouchBoobsKR;
			else if(this.isSpanish) return MasturbateBattleTouchBoobsSP;
			return MasturbateBattleTouchBoobsEN;
		}, configurable: true
	},
	masturbateBattleTouchNipples: {
		get: function() {
			if(this.isJapanese) return MasturbateBattleTouchNipplesJP;
			else if(this.isEnglish) return MasturbateBattleTouchNipplesEN;
			else if(this.isRussian) return MasturbateBattleTouchNipplesRU;
			else if(this.isSChinese) return MasturbateBattleTouchNipplesSCH;
			else if(this.isTChinese) return MasturbateBattleTouchNipplesTCH;
			else if(this.isKorean) return MasturbateBattleTouchNipplesKR;
			else if(this.isSpanish) return MasturbateBattleTouchNipplesSP;
			return MasturbateBattleTouchNipplesEN;
		}, configurable: true
	},
	masturbateBattleTouchAnal: {
		get: function() {
			if(this.isJapanese) return MasturbateBattleTouchAnalJP;
			else if(this.isEnglish) return MasturbateBattleTouchAnalEN;
			else if(this.isRussian) return MasturbateBattleTouchAnalRU;
			else if(this.isSChinese) return MasturbateBattleTouchAnalSCH;
			else if(this.isTChinese) return MasturbateBattleTouchAnalTCH;
			else if(this.isKorean) return MasturbateBattleTouchAnalKR;
			else if(this.isSpanish) return MasturbateBattleTouchAnalSP;
			return MasturbateBattleTouchAnalEN;
		}, configurable: true
	},
	masturbateBattleFingerPussy: {
		get: function() {
			if(this.isJapanese) return MasturbateBattleFingerPussyJP;
			else if(this.isEnglish) return MasturbateBattleFingerPussyEN;
			else if(this.isRussian) return MasturbateBattleFingerPussyRU;
			else if(this.isSChinese) return MasturbateBattleFingerPussySCH;
			else if(this.isTChinese) return MasturbateBattleFingerPussyTCH;
			else if(this.isKorean) return MasturbateBattleFingerPussyKR;
			else if(this.isSpanish) return MasturbateBattleFingerPussySP;
			return MasturbateBattleFingerPussyEN;
		}, configurable: true
	},
	masturbateBattleFingerAnal: {
		get: function() {
			if(this.isJapanese) return MasturbateBattleFingerAnalJP;
			else if(this.isEnglish) return MasturbateBattleFingerAnalEN;
			else if(this.isRussian) return MasturbateBattleFingerAnalRU;
			else if(this.isSChinese) return MasturbateBattleFingerAnalSCH;
			else if(this.isTChinese) return MasturbateBattleFingerAnalTCH;
			else if(this.isKorean) return MasturbateBattleFingerAnalKR;
			else if(this.isSpanish) return MasturbateBattleFingerAnalSP;
			return MasturbateBattleFingerAnalEN;
		}, configurable: true
	},

	masturbateBattleToyClitPinkRotor: {
		get: function() {
			if(this.isJapanese) return MasturbateBattleToyClitPinkRotorJP;
			else if(this.isEnglish) return MasturbateBattleToyClitPinkRotorEN;
			else {
				try {
					if(this.isRussian) return MasturbateBattleToyClitPinkRotorRU;
					else if(this.isSChinese) return MasturbateBattleToyClitPinkRotorSCH;
					else if(this.isTChinese) return MasturbateBattleToyClitPinkRotorTCH;
					else if(this.isKorean) return MasturbateBattleToyClitPinkRotorKR;
					else if(this.isSpanish) return MasturbateBattleToyClitPinkRotorSP;
				} catch(e) {}
			}
			return MasturbateBattleToyClitPinkRotorEN;
		}, configurable: true
	},
	masturbateBattleToyPussyPenis: {
		get: function() {
			if(this.isJapanese) return MasturbateBattleToyPussyPenisJP;
			else if(this.isEnglish) return MasturbateBattleToyPussyPenisEN;
			else {
				try {
					if(this.isRussian) return MasturbateBattleToyPussyPenisRU;
					else if(this.isSChinese) return MasturbateBattleToyPussyPenisSCH;
					else if(this.isTChinese) return MasturbateBattleToyPussyPenisTCH;
					else if(this.isKorean) return MasturbateBattleToyPussyPenisKR;
					else if(this.isSpanish) return MasturbateBattleToyPussyPenisSP;
				} catch(e) {}
			}
			return MasturbateBattleToyPussyPenisEN;
		}, configurable: true
	},
	masturbateBattleToyAnalBeads: {
		get: function() {
			if(this.isJapanese) return MasturbateBattleToyAnalBeadsJP;
			else if(this.isEnglish) return MasturbateBattleToyAnalBeadsEN;
			else {
				try {
					if(this.isRussian) return MasturbateBattleToyAnalBeadsRU;
					else if(this.isSChinese) return MasturbateBattleToyAnalBeadsSCH;
					else if(this.isTChinese) return MasturbateBattleToyAnalBeadsTCH;
					else if(this.isKorean) return MasturbateBattleToyAnalBeadsKR;
					else if(this.isSpanish) return MasturbateBattleToyAnalBeadsSP;
				} catch(e) {}
			}
			return MasturbateBattleToyAnalBeadsEN;
		}, configurable: true
	},
	masturbateBattleSuckFingers: {
		get: function() {
			if(this.isJapanese) return MasturbateBattleSuckFingersJP;
			else if(this.isEnglish) return MasturbateBattleSuckFingersEN;
			else if(this.isRussian) return MasturbateBattleSuckFingersRU;
			else if(this.isSChinese) return MasturbateBattleSuckFingersSCH;
			else if(this.isTChinese) return MasturbateBattleSuckFingersTCH;
			else if(this.isKorean) return MasturbateBattleSuckFingersKR;
			else if(this.isSpanish) return MasturbateBattleSuckFingersSP;
			return MasturbateBattleSuckFingersEN;
		}, configurable: true
	},
	masturbateBattleSuckNipples: {
		get: function() {
			if(this.isJapanese) return MasturbateBattleSuckNipplesJP;
			else if(this.isEnglish) return MasturbateBattleSuckNipplesEN;
			else if(this.isRussian) return MasturbateBattleSuckNipplesRU;
			else if(this.isSChinese) return MasturbateBattleSuckNipplesSCH;
			else if(this.isTChinese) return MasturbateBattleSuckNipplesTCH;
			else if(this.isKorean) return MasturbateBattleSuckNipplesKR;
			else if(this.isSpanish) return MasturbateBattleSuckNipplesSP;
			return MasturbateBattleSuckNipplesEN;
		}, configurable: true
	},

	SkillDescriptionNoValidTargets: {
		get: function() {
			if(this.isJapanese) return SkillDescriptionNoValidTargetsJP;
			else if(this.isEnglish) return SkillDescriptionNoValidTargetsEN;
			else if(this.isRussian) return SkillDescriptionNoValidTargetsRU;
			else if(this.isSChinese) return SkillDescriptionNoValidTargetsSCH;
			else if(this.isTChinese) return SkillDescriptionNoValidTargetsTCH;
			else if(this.isKorean) return SkillDescriptionNoValidTargetsKR;
			else if(this.isSpanish) return SkillDescriptionNoValidTargetsSP;
			return SkillDescriptionNoValidTargetsEN;
		}, configurable: true
	},
	SkillDescriptionNotEnoughDesire: {
		get: function() {
			if(this.isJapanese) return SkillDescriptionNotEnoughDesireJP;
			else if(this.isEnglish) return SkillDescriptionNotEnoughDesireEN;
			else if(this.isRussian) return SkillDescriptionNotEnoughDesireRU;
			else if(this.isSChinese) return SkillDescriptionNotEnoughDesireSCH;
			else if(this.isTChinese) return SkillDescriptionNotEnoughDesireTCH;
			else if(this.isKorean) return SkillDescriptionNotEnoughDesireKR;
			else if(this.isSpanish) return SkillDescriptionNotEnoughDesireSP;
			return SkillDescriptionNotEnoughDesireEN;
		}, configurable: true
	},
	SkillDescriptionCantDoThis: {
		get: function() {
			if(this.isJapanese) return SkillDescriptionCantDoThisJP;
			else if(this.isEnglish) return SkillDescriptionCantDoThisEN;
			else if(this.isRussian) return SkillDescriptionCantDoThisRU;
			else if(this.isSChinese) return SkillDescriptionCantDoThisSCH;
			else if(this.isTChinese) return SkillDescriptionCantDoThisTCH;
			else if(this.isKorean) return SkillDescriptionCantDoThisKR;
			else if(this.isSpanish) return SkillDescriptionCantDoThisSP;
			return SkillDescriptionCantDoThisEN;
		}, configurable: true
	},
	SkillDescriptionHandsBusy: {
		get: function() {
			if(this.isJapanese) return SkillDescriptionHandsBusyJP;
			else if(this.isEnglish) return SkillDescriptionHandsBusyEN;
			else if(this.isRussian) return SkillDescriptionHandsBusyRU;
			else if(this.isSChinese) return SkillDescriptionHandsBusySCH;
			else if(this.isTChinese) return SkillDescriptionHandsBusyTCH;
			else if(this.isKorean) return SkillDescriptionHandsBusyKR;
			else if(this.isSpanish) return SkillDescriptionHandsBusySP;
			return SkillDescriptionHandsBusyEN;
		}, configurable: true
	},
	SkillDescriptionNotWet: {
		get: function() {
			if(this.isJapanese) return SkillDescriptionNotWetJP;
			else if(this.isEnglish) return SkillDescriptionNotWetEN;
			else if(this.isRussian) return SkillDescriptionNotWetRU;
			else if(this.isSChinese) return SkillDescriptionNotWetSCH;
			else if(this.isTChinese) return SkillDescriptionNotWetTCH;
			else if(this.isKorean) return SkillDescriptionNotWetKR;
			else if(this.isSpanish) return SkillDescriptionNotWetSP;
			return SkillDescriptionNotWetEN;
		}, configurable: true
	},


	TitleDescriptionFirstTimeTitleEquip: {
		get: function() {
			if(this.isJapanese) return TitleDescriptionFirstTimeTitleEquipJP;
			else if(this.isEnglish) return TitleDescriptionFirstTimeTitleEquipEN;
			else if(this.isRussian) return TitleDescriptionFirstTimeTitleEquipRU;
			else if(this.isSChinese) return TitleDescriptionFirstTimeTitleEquipSCH;
			else if(this.isTChinese) return TitleDescriptionFirstTimeTitleEquipTCH;
			else if(this.isKorean) return TitleDescriptionFirstTimeTitleEquipKR;
			else if(this.isSpanish) return TitleDescriptionFirstTimeTitleEquipSP;
			return TitleDescriptionFirstTimeTitleEquipEN;
		}, configurable: true
	},


	wardenLevel: {
		get: function() {
			if(this.isJapanese) return WardenNameJP;
			else if(this.isEnglish) return WardenNameEN;
			else if(this.isRussian) return WardenNameRU;
			else if(this.isSChinese) return WardenNameSCH;
			else if(this.isTChinese) return WardenNameTCH;
			else if(this.isKorean) return WardenNameKR;
			else if(this.isSpanish) return WardenNameSP;
			return WardenNameEN;
		}, configurable: true
	},
	wardenLevelLimit: {
		get: function() {
			if(this.isJapanese) return WardenLvlLimitJP;
			else if(this.isEnglish) return WardenLvlLimitEN;
			else if(this.isRussian) return WardenLvlLimitRU;
			else if(this.isSChinese) return WardenLvlLimitSCH;
			else if(this.isTChinese) return WardenLvlLimitTCH;
			else if(this.isKorean) return WardenLvlLimitKR;
			else if(this.isSpanish) return WardenLvlLimitSP;
			return WardenLvlLimitEN;
		}, configurable: true
	},

	slutLevel: {
		get: function() {
			if(this.isJapanese) return SlutNameJP;
			else if(this.isEnglish) return SlutNameEN;
			else if(this.isRussian) return SlutNameRU;
			else if(this.isSChinese) return SlutNameSCH;
			else if(this.isTChinese) return SlutNameTCH;
			else if(this.isKorean) return SlutNameKR;
			else if(this.isSpanish) return SlutNameSP;
			return SlutNameEN;
		}, configurable: true
	},
	statLevel: {
		get: function() {
			if(this.isJapanese) return StatLevelNameJP;
			else if(this.isEnglish) return StatLevelNameEN;
			else if(this.isRussian) return StatLevelNameRU;
			else if(this.isSChinese) return StatLevelNameSCH;
			else if(this.isTChinese) return StatLevelNameTCH;
			else if(this.isKorean) return StatLevelNameKR;
			else if(this.isSpanish) return StatLevelNameSP;
			return StatLevelNameEN;
		}, configurable: true
	},

	day: {
		get: function() {
			if(this.isJapanese) return DayNameJP;
			else if(this.isEnglish) return DayNameEN;
			else if(this.isRussian) return DayNameRU;
			else if(this.isSChinese) return DayNameSCH;
			else if(this.isTChinese) return DayNameTCH;
			else if(this.isKorean) return DayNameKR;
			else if(this.isSpanish) return DayNameSP;
			return DayNameEN;
		}, configurable: true
	},
	order: {
		get: function() {
			if(this.isJapanese) return OrderNameJP;
			else if(this.isEnglish) return OrderNameEN;
			else if(this.isRussian) return OrderNameRU;
			else if(this.isSChinese) return OrderNameSCH;
			else if(this.isTChinese) return OrderNameTCH;
			else if(this.isKorean) return OrderNameKR;
			else if(this.isSpanish) return OrderNameSP;
			return OrderNameEN;
		}, configurable: true
	},
	orderChange: {
		get: function() {
			if(this.isJapanese) return OrderChangeNameJP;
			else if(this.isEnglish) return OrderChangeNameEN;
			else if(this.isRussian) return OrderChangeNameRU;
			else if(this.isSChinese) return OrderChangeNameSCH;
			else if(this.isTChinese) return OrderChangeNameTCH;
			else if(this.isKorean) return OrderChangeNameKR;
			else if(this.isSpanish) return OrderChangeNameSP;
			return OrderChangeNameEN;
		}, configurable: true
	},
	corruption: {
		get: function() {
			if(this.isJapanese) return CorruptionNameJP;
			else if(this.isEnglish) return CorruptionNameEN;
			else if(this.isRussian) return CorruptionNameRU;
			else if(this.isSChinese) return CorruptionNameSCH;
			else if(this.isTChinese) return CorruptionNameTCH;
			else if(this.isKorean) return CorruptionNameKR;
			else if(this.isSpanish) return CorruptionNameSP;
			return CorruptionNameEN;
		}, configurable: true
	},
	titles: {
		get: function() {
			if(this.isJapanese) return TitlesNameJP;
			else if(this.isEnglish) return TitlesNameEN;
			else if(this.isRussian) return TitlesNameRU;
			else if(this.isSChinese) return TitlesNameSCH;
			else if(this.isTChinese) return TitlesNameTCH;
			else if(this.isKorean) return TitlesNameKR;
			else if(this.isSpanish) return TitlesNameSP;
			return TitlesNameEN;
		}, configurable: true
	},

	funding: {
		get: function() {
			if(this.isJapanese) return FundingNameJP;
			else if(this.isEnglish) return FundingNameEN;
			else if(this.isRussian) return FundingNameRU;
			else if(this.isSChinese) return FundingNameSCH;
			else if(this.isTChinese) return FundingNameTCH;
			else if(this.isKorean) return FundingNameKR;
			else if(this.isSpanish) return FundingNameSP;
			return FundingNameEN;
		}, configurable: true
	},
	ledger: {
		get: function() {
			if(this.isJapanese) return LedgerNameJP;
			else if(this.isEnglish) return LedgerNameEN;
			else if(this.isRussian) return LedgerNameRU;
			else if(this.isSChinese) return LedgerNameSCH;
			else if(this.isTChinese) return LedgerNameTCH;
			else if(this.isKorean) return LedgerNameKR;
			else if(this.isSpanish) return LedgerNameSP;
			return LedgerNameEN;
		}, configurable: true
	},

	income: {
		get: function() {
			if(this.isJapanese) return IncomeNameJP;
			else if(this.isEnglish) return IncomeNameEN;
			else if(this.isRussian) return IncomeNameRU;
			else if(this.isSChinese) return IncomeNameSCH;
			else if(this.isTChinese) return IncomeNameTCH;
			else if(this.isKorean) return IncomeNameKR;
			else if(this.isSpanish) return IncomeNameSP;
			return IncomeNameEN;
		}, configurable: true
	},
	barIncome: {
		get: function() {
			if(this.isJapanese) return BarIncomeNameJP;
			else if(this.isEnglish) return BarIncomeNameEN;
			else if(this.isRussian) return BarIncomeNameRU;
			else if(this.isSChinese) return BarIncomeNameSCH;
			else if(this.isTChinese) return BarIncomeNameTCH;
			else if(this.isKorean) return BarIncomeNameKR;
			else if(this.isSpanish) return BarIncomeNameSP;
			return BarIncomeNameEN;
		}, configurable: true
	},
	storeIncome: {
		get: function() {
			if(this.isJapanese) return StoreIncomeNameJP;
			else if(this.isEnglish) return StoreIncomeNameEN;
			else if(this.isRussian) return StoreIncomeNameRU;
			else if(this.isSChinese) return StoreIncomeNameSCH;
			else if(this.isTChinese) return StoreIncomeNameTCH;
			else if(this.isKorean) return StoreIncomeNameKR;
			else if(this.isSpanish) return StoreIncomeNameSP;
			return StoreIncomeNameEN;
		}, configurable: true
	},
	outsourcingIncome: {
		get: function() {
			if(this.isJapanese) return OutsourcingIncomeNameJP;
			else if(this.isEnglish) return OutsourcingIncomeNameEN;
			else if(this.isRussian) return OutsourcingIncomeNameRU;
			else if(this.isSChinese) return OutsourcingIncomeNameSCH;
			else if(this.isTChinese) return OutsourcingIncomeNameTCH;
			else if(this.isKorean) return OutsourcingIncomeNameKR;
			else if(this.isSpanish) return OutsourcingIncomeNameSP;
			return OutsourcingIncomeNameEN;
		}, configurable: true
	},
	nerdBlackmail: {
		get: function() {
			if(this.isJapanese) return NerdBlackmailNameJP;
			else if(this.isEnglish) return NerdBlackmailNameEN;
			else if(this.isRussian) return NerdBlackmailNameRU;
			else if(this.isSChinese) return NerdBlackmailNameSCH;
			else if(this.isTChinese) return NerdBlackmailNameTCH;
			else if(this.isKorean) return NerdBlackmailNameKR;
			else if(this.isSpanish) return NerdBlackmailNameSP;
			return NerdBlackmailNameEN;
		}, configurable: true
	},


	expense: {
		get: function() {
			if(this.isJapanese) return ExpenseNameJP;
			else if(this.isEnglish) return ExpenseNameEN;
			else if(this.isRussian) return ExpenseNameRU;
			else if(this.isSChinese) return ExpenseNameSCH;
			else if(this.isTChinese) return ExpenseNameTCH;
			else if(this.isKorean) return ExpenseNameKR;
			else if(this.isSpanish) return ExpenseNameSP;
			return ExpenseNameEN;
		}, configurable: true
	},
	estimatedSubsidies: {
		get: function() {
			if(this.isJapanese) return EstimatedSubsidiesNameJP;
			else if(this.isEnglish) return EstimatedSubsidiesNameEN;
			else if(this.isRussian) return EstimatedSubsidiesNameRU;
			else if(this.isSChinese) return EstimatedSubsidiesNameSCH;
			else if(this.isTChinese) return EstimatedSubsidiesNameTCH;
			else if(this.isKorean) return EstimatedSubsidiesNameKR;
			else if(this.isSpanish) return EstimatedSubsidiesNameSP;
			return EstimatedSubsidiesNameEN;
		}, configurable: true
	},
	estimatedProfit: {
		get: function() {
			if(this.isJapanese) return EstimatedProfitNameJP;
			else if(this.isEnglish) return EstimatedProfitNameEN;
			else if(this.isRussian) return EstimatedProfitNameRU;
			else if(this.isSChinese) return EstimatedProfitNameSCH;
			else if(this.isTChinese) return EstimatedProfitNameTCH;
			else if(this.isKorean) return EstimatedProfitNameKR;
			else if(this.isSpanish) return EstimatedProfitNameSP;
			return EstimatedProfitNameEN;
		}, configurable: true
	},
	estimatedLoss: {
		get: function() {
			if(this.isJapanese) return EstimatedLossNameJP;
			else if(this.isEnglish) return EstimatedLossNameEN;
			else if(this.isRussian) return EstimatedLossNameRU;
			else if(this.isSChinese) return EstimatedLossNameSCH;
			else if(this.isTChinese) return EstimatedLossNameTCH;
			else if(this.isKorean) return EstimatedLossNameKR;
			else if(this.isSpanish) return EstimatedLossNameSP;
			return EstimatedLossNameEN;
		}, configurable: true
	},

	SecretaryMode: {
		get: function() {
			if(this.isJapanese) return SecretaryModeNameJP;
			else if(this.isEnglish) return SecretaryModeNameEN;
			else if(this.isRussian) return SecretaryModeNameRU;
			else if(this.isSChinese) return SecretaryModeNameSCH;
			else if(this.isTChinese) return SecretaryModeNameTCH;
			else if(this.isKorean) return SecretaryModeNameKR;
			else if(this.isSpanish) return SecretaryModeNameSP;
			return SecretaryModeNameEN;
		}, configurable: true
	},
	WardenMode: {
		get: function() {
			if(this.isJapanese) return WardenModeNameJP;
			else if(this.isEnglish) return WardenModeNameEN;
			else if(this.isRussian) return WardenModeNameRU;
			else if(this.isSChinese) return WardenModeNameSCH;
			else if(this.isTChinese) return WardenModeNameTCH;
			else if(this.isKorean) return WardenModeNameKR;
			else if(this.isSpanish) return WardenModeNameSP;
			return WardenModeNameEN;
		}, configurable: true
	},
	PrisonerMode: {
		get: function() {
			if(this.isJapanese) return PrisonerModeNameJP;
			else if(this.isEnglish) return PrisonerModeNameEN;
			else if(this.isRussian) return PrisonerModeNameRU;
			else if(this.isSChinese) return PrisonerModeNameSCH;
			else if(this.isTChinese) return PrisonerModeNameTCH;
			else if(this.isKorean) return PrisonerModeNameKR;
			else if(this.isSpanish) return PrisonerModeNameSP;
			return PrisonerModeNameEN;
		}, configurable: true
	},

	SecretaryFreePlayMode: {
		get: function() {
			if(this.isJapanese) return SecretaryFreePlayModeNameJP;
			else if(this.isEnglish) return SecretaryFreePlayModeNameEN;
			else {
				try {
					if(this.isRussian) return SecretaryFreePlayModeNameRU;
					else if(this.isSChinese) return SecretaryFreePlayModeNameSCH;
					else if(this.isTChinese) return SecretaryFreePlayModeNameTCH;
					else if(this.isKorean) return SecretaryFreePlayModeNameKR;
					else if(this.isSpanish) return SecretaryFreePlayModeNameSP;
				} catch(e) {}
			}
			return SecretaryFreePlayModeNameEN;
		}, configurable: true
	},
	WardenFreePlayMode: {
		get: function() {
			if(this.isJapanese) return WardenFreePlayModeNameJP;
			else if(this.isEnglish) return WardenFreePlayModeNameEN;
			else {
				try {
					if(this.isRussian) return WardenFreePlayModeNameRU;
					else if(this.isSChinese) return WardenFreePlayModeNameSCH;
					else if(this.isTChinese) return WardenFreePlayModeNameTCH;
					else if(this.isKorean) return WardenFreePlayModeNameKR;
					else if(this.isSpanish) return WardenFreePlayModeNameSP;
				} catch(e) {}
			}
			return WardenFreePlayModeNameEN;
		}, configurable: true
	},
	PrisonerFreePlayMode: {
		get: function() {
			if(this.isJapanese) return PrisonerFreePlayModeNameJP;
			else if(this.isEnglish) return PrisonerFreePlayModeNameEN;
			else {
				try {
					if(this.isRussian) return PrisonerFreePlayModeNameRU;
					else if(this.isSChinese) return PrisonerFreePlayModeNameSCH;
					else if(this.isTChinese) return PrisonerFreePlayModeNameTCH;
					else if(this.isKorean) return PrisonerFreePlayModeNameKR;
					else if(this.isSpanish) return PrisonerFreePlayModeNameSP;
				} catch(e) {}
			}
			return PrisonerFreePlayModeNameEN;
		}, configurable: true
	},

	SecretaryChallengeRun: {
		get: function() {
			if(this.isJapanese) return SecretaryChallengeRunNameJP;
			else if(this.isEnglish) return SecretaryChallengeRunNameEN;
			else {
				try {
					if(this.isRussian) return SecretaryChallengeRunNameRU;
					else if(this.isSChinese) return SecretaryChallengeRunNameSCH;
					else if(this.isTChinese) return SecretaryChallengeRunNameTCH;
					else if(this.isKorean) return SecretaryChallengeRunNameKR;
					else if(this.isSpanish) return SecretaryChallengeRunNameSP;
				} catch(e) {}
			}
			return SecretaryChallengeRunNameEN;
		}, configurable: true
	},
	WardenChallengeRun: {
		get: function() {
			if(this.isJapanese) return WardenChallengeRunNameJP;
			else if(this.isEnglish) return WardenChallengeRunNameEN;
			else {
				try {
					if(this.isRussian) return WardenChallengeRunNameRU;
					else if(this.isSChinese) return WardenChallengeRunNameSCH;
					else if(this.isTChinese) return WardenChallengeRunNameTCH;
					else if(this.isKorean) return WardenChallengeRunNameKR;
					else if(this.isSpanish) return WardenChallengeRunNameSP;
				} catch(e) {}
			}
			return WardenChallengeRunNameEN;
		}, configurable: true
	},
	PrisonerChallengeRun: {
		get: function() {
			if(this.isJapanese) return PrisonerChallengeRunNameJP;
			else if(this.isEnglish) return PrisonerChallengeRunNameEN;
			else {
				try {
					if(this.isRussian) return PrisonerChallengeRunNameRU;
					else if(this.isSChinese) return PrisonerChallengeRunNameSCH;
					else if(this.isTChinese) return PrisonerChallengeRunNameTCH;
					else if(this.isKorean) return PrisonerChallengeRunNameKR;
					else if(this.isSpanish) return PrisonerChallengeRunNameSP;
				} catch(e) {}
			}
			return PrisonerChallengeRunNameEN;
		}, configurable: true
	},

	SecretaryDescensionRun: {
		get: function() {
			if(this.isJapanese) return SecretaryDescensionRunNameJP;
			else if(this.isEnglish) return SecretaryDescensionRunNameEN;
			else {
				try {
					if(this.isRussian) return SecretaryDescensionRunNameRU;
					else if(this.isSChinese) return SecretaryDescensionRunNameSCH;
					else if(this.isTChinese) return SecretaryDescensionRunNameTCH;
					else if(this.isKorean) return SecretaryDescensionRunNameKR;
					else if(this.isSpanish) return SecretaryDescensionRunNameSP;
				} catch(e) {}
			}
			return SecretaryDescensionRunNameEN;
		}, configurable: true
	},
	WardenDescensionRun: {
		get: function() {
			if(this.isJapanese) return WardenDescensionRunNameJP;
			else if(this.isEnglish) return WardenDescensionRunNameEN;
			else {
				try {
					if(this.isRussian) return WardenDescensionRunNameRU;
					else if(this.isSChinese) return WardenDescensionRunNameSCH;
					else if(this.isTChinese) return WardenDescensionRunNameTCH;
					else if(this.isKorean) return WardenDescensionRunNameKR;
					else if(this.isSpanish) return WardenDescensionRunNameSP;
				} catch(e) {}
			}
			return WardenDescensionRunNameEN;
		}, configurable: true
	},
	PrisonerDescensionRun: {
		get: function() {
			if(this.isJapanese) return PrisonerDescensionRunNameJP;
			else if(this.isEnglish) return PrisonerDescensionRunNameEN;
			else {
				try {
					if(this.isRussian) return PrisonerDescensionRunNameRU;
					else if(this.isSChinese) return PrisonerDescensionRunNameSCH;
					else if(this.isTChinese) return PrisonerDescensionRunNameTCH;
					else if(this.isKorean) return PrisonerDescensionRunNameKR;
					else if(this.isSpanish) return PrisonerDescensionRunNameSP;
				} catch(e) {}
			}
			return PrisonerDescensionRunNameEN;
		}, configurable: true
	},

	RCMenuSleepQualityNegTwoText: {
		get: function() {
			if(this.isJapanese) return RCMenuSleepQualityNegTwoTextJP;
			else if(this.isEnglish) return RCMenuSleepQualityNegTwoTextEN;
			else if(this.isRussian) return RCMenuSleepQualityNegTwoTextRU;
			else if(this.isSChinese) return RCMenuSleepQualityNegTwoTextSCH;
			else if(this.isTChinese) return RCMenuSleepQualityNegTwoTextTCH;
			else if(this.isKorean) return RCMenuSleepQualityNegTwoTextKR;
			else if(this.isSpanish) return RCMenuSleepQualityNegTwoTextSP;
			return RCMenuSleepQualityNegTwoTextEN;
		}, configurable: true
	},
	RCMenuSleepQualityNegOneText: {
		get: function() {
			if(this.isJapanese) return RCMenuSleepQualityNegOneTextJP;
			else if(this.isEnglish) return RCMenuSleepQualityNegOneTextEN;
			else if(this.isRussian) return RCMenuSleepQualityNegOneTextRU;
			else if(this.isSChinese) return RCMenuSleepQualityNegOneTextSCH;
			else if(this.isTChinese) return RCMenuSleepQualityNegOneTextTCH;
			else if(this.isKorean) return RCMenuSleepQualityNegOneTextKR;
			else if(this.isSpanish) return RCMenuSleepQualityNegOneTextSP;
			return RCMenuSleepQualityNegOneTextEN;
		}, configurable: true
	},
	RCMenuSleepQualityZeroText: {
		get: function() {
			if(this.isJapanese) return RCMenuSleepQualityZeroTextJP;
			else if(this.isEnglish) return RCMenuSleepQualityZeroTextEN;
			else if(this.isRussian) return RCMenuSleepQualityZeroTextRU;
			else if(this.isSChinese) return RCMenuSleepQualityZeroTextSCH;
			else if(this.isTChinese) return RCMenuSleepQualityZeroTextTCH;
			else if(this.isKorean) return RCMenuSleepQualityZeroTextKR;
			else if(this.isSpanish) return RCMenuSleepQualityZeroTextSP;
			return RCMenuSleepQualityZeroTextEN;
		}, configurable: true
	},
	RCMenuSleepQualityOneText: {
		get: function() {
			if(this.isJapanese) return RCMenuSleepQualityOneTextJP;
			else if(this.isEnglish) return RCMenuSleepQualityOneTextEN;
			else if(this.isRussian) return RCMenuSleepQualityOneTextRU;
			else if(this.isSChinese) return RCMenuSleepQualityOneTextSCH;
			else if(this.isTChinese) return RCMenuSleepQualityOneTextTCH;
			else if(this.isKorean) return RCMenuSleepQualityOneTextKR;
			else if(this.isSpanish) return RCMenuSleepQualityOneTextSP;
			return RCMenuSleepQualityOneTextEN;
		}, configurable: true
	},
	RCMenuSleepQualityTwoText: {
		get: function() {
			if(this.isJapanese) return RCMenuSleepQualityTwoTextJP;
			else if(this.isEnglish) return RCMenuSleepQualityTwoTextEN;
			else if(this.isRussian) return RCMenuSleepQualityTwoTextRU;
			else if(this.isSChinese) return RCMenuSleepQualityTwoTextSCH;
			else if(this.isTChinese) return RCMenuSleepQualityTwoTextTCH;
			else if(this.isKorean) return RCMenuSleepQualityTwoTextKR;
			else if(this.isSpanish) return RCMenuSleepQualityTwoTextSP;
			return RCMenuSleepQualityTwoTextEN;
		}, configurable: true
	},
	RCMenuSleepQualityThreeText: {
		get: function() {
			if(this.isJapanese) return RCMenuSleepQualityThreeTextJP;
			else if(this.isEnglish) return RCMenuSleepQualityThreeTextEN;
			else if(this.isRussian) return RCMenuSleepQualityThreeTextRU;
			else if(this.isSChinese) return RCMenuSleepQualityThreeTextSCH;
			else if(this.isTChinese) return RCMenuSleepQualityThreeTextTCH;
			else if(this.isKorean) return RCMenuSleepQualityThreeTextKR;
			else if(this.isSpanish) return RCMenuSleepQualityThreeTextSP;
			return RCMenuSleepQualityThreeTextEN;
		}, configurable: true
	},
	RCMenuFatigueLevelOneText: {
		get: function() {
			if(this.isJapanese) return RCMenuFatigueLevelOneTextJP;
			else if(this.isEnglish) return RCMenuFatigueLevelOneTextEN;
			else if(this.isRussian) return RCMenuFatigueLevelOneTextRU;
			else if(this.isSChinese) return RCMenuFatigueLevelOneTextSCH;
			else if(this.isTChinese) return RCMenuFatigueLevelOneTextTCH;
			else if(this.isKorean) return RCMenuFatigueLevelOneTextKR;
			else if(this.isSpanish) return RCMenuFatigueLevelOneTextSP;
			return RCMenuFatigueLevelOneTextEN;
		}, configurable: true
	},
	RCMenuFatigueLevelTwoText: {
		get: function() {
			if(this.isJapanese) return RCMenuFatigueLevelTwoTextJP;
			else if(this.isEnglish) return RCMenuFatigueLevelTwoTextEN;
			else if(this.isRussian) return RCMenuFatigueLevelTwoTextRU;
			else if(this.isSChinese) return RCMenuFatigueLevelTwoTextSCH;
			else if(this.isTChinese) return RCMenuFatigueLevelTwoTextTCH;
			else if(this.isKorean) return RCMenuFatigueLevelTwoTextKR;
			else if(this.isSpanish) return RCMenuFatigueLevelTwoTextSP;
			return RCMenuFatigueLevelTwoTextEN;
		}, configurable: true
	},
	RCMenuFatigueLevelThreeText: {
		get: function() {
			if(this.isJapanese) return RCMenuFatigueLevelThreeTextJP;
			else if(this.isEnglish) return RCMenuFatigueLevelThreeTextEN;
			else if(this.isRussian) return RCMenuFatigueLevelThreeTextRU;
			else if(this.isSChinese) return RCMenuFatigueLevelThreeTextSCH;
			else if(this.isTChinese) return RCMenuFatigueLevelThreeTextTCH;
			else if(this.isKorean) return RCMenuFatigueLevelThreeTextKR;
			else if(this.isSpanish) return RCMenuFatigueLevelThreeTextSP;
			return RCMenuFatigueLevelThreeTextEN;
		}, configurable: true
	},
	RCMenuFatigueLevelFourText: {
		get: function() {
			if(this.isJapanese) return RCMenuFatigueLevelFourTextJP;
			else if(this.isEnglish) return RCMenuFatigueLevelFourTextEN;
			else if(this.isRussian) return RCMenuFatigueLevelFourTextRU;
			else if(this.isSChinese) return RCMenuFatigueLevelFourTextSCH;
			else if(this.isTChinese) return RCMenuFatigueLevelFourTextTCH;
			else if(this.isKorean) return RCMenuFatigueLevelFourTextKR;
			else if(this.isSpanish) return RCMenuFatigueLevelFourTextSP;
			return RCMenuFatigueLevelFourTextEN;
		}, configurable: true
	},
	RCMenuFatigueLevelFiveText: {
		get: function() {
			if(this.isJapanese) return RCMenuFatigueLevelFiveTextJP;
			else if(this.isEnglish) return RCMenuFatigueLevelFiveTextEN;
			else if(this.isRussian) return RCMenuFatigueLevelFiveTextRU;
			else if(this.isSChinese) return RCMenuFatigueLevelFiveTextSCH;
			else if(this.isTChinese) return RCMenuFatigueLevelFiveTextTCH;
			else if(this.isKorean) return RCMenuFatigueLevelFiveTextKR;
			else if(this.isSpanish) return RCMenuFatigueLevelFiveTextSP;
			return RCMenuFatigueLevelFiveTextEN;
		}, configurable: true
	},
	RCMenuFatigueLevelFourHardText: {
		get: function() {
			if(this.isJapanese) return RCMenuFatigueLevelFourHardTextJP;
			else if(this.isEnglish) return RCMenuFatigueLevelFourHardTextEN;
			else if(this.isRussian) return RCMenuFatigueLevelFourHardTextRU;
			else if(this.isSChinese) return RCMenuFatigueLevelFourHardTextSCH;
			else if(this.isTChinese) return RCMenuFatigueLevelFourHardTextTCH;
			else if(this.isKorean) return RCMenuFatigueLevelFourHardTextKR;
			else if(this.isSpanish) return RCMenuFatigueLevelFourHardTextSP;
			return RCMenuFatigueLevelFourHardTextEN;
		}, configurable: true
	},
	RCMenuFatigueLevelFiveHardText: {
		get: function() {
			if(this.isJapanese) return RCMenuFatigueLevelFiveHardTextJP;
			else if(this.isEnglish) return RCMenuFatigueLevelFiveHardTextEN;
			else if(this.isRussian) return RCMenuFatigueLevelFiveHardTextRU;
			else if(this.isSChinese) return RCMenuFatigueLevelFiveHardTextSCH;
			else if(this.isTChinese) return RCMenuFatigueLevelFiveHardTextTCH;
			else if(this.isKorean) return RCMenuFatigueLevelFiveHardTextKR;
			else if(this.isSpanish) return RCMenuFatigueLevelFiveHardTextSP;
			return RCMenuFatigueLevelFiveHardTextEN;
		}, configurable: true
	},
	RCMenuArousedLevelOneText: {
		get: function() {
			if(this.isJapanese) return RCMenuArousedLevelOneTextJP;
			else if(this.isEnglish) return RCMenuArousedLevelOneTextEN;
			else if(this.isRussian) return RCMenuArousedLevelOneTextRU;
			else if(this.isSChinese) return RCMenuArousedLevelOneTextSCH;
			else if(this.isTChinese) return RCMenuArousedLevelOneTextTCH;
			else if(this.isKorean) return RCMenuArousedLevelOneTextKR;
			else if(this.isSpanish) return RCMenuArousedLevelOneTextSP;
			return RCMenuArousedLevelOneTextEN;
		}, configurable: true
	},
	RCMenuArousedLevelTwoText: {
		get: function() {
			if(this.isJapanese) return RCMenuArousedLevelTwoTextJP;
			else if(this.isEnglish) return RCMenuArousedLevelTwoTextEN;
			else if(this.isRussian) return RCMenuArousedLevelTwoTextRU;
			else if(this.isSChinese) return RCMenuArousedLevelTwoTextSCH;
			else if(this.isTChinese) return RCMenuArousedLevelTwoTextTCH;
			else if(this.isKorean) return RCMenuArousedLevelTwoTextKR;
			else if(this.isSpanish) return RCMenuArousedLevelTwoTextSP;
			return RCMenuArousedLevelTwoTextEN;
		}, configurable: true
	},
	RCMenuFrustratedLevelOneText: {
		get: function() {
			if(this.isJapanese) return RCMenuFrustratedLevelOneTextJP;
			else if(this.isEnglish) return RCMenuFrustratedLevelOneTextEN;
			else if(this.isRussian) return RCMenuFrustratedLevelOneTextRU;
			else if(this.isSChinese) return RCMenuFrustratedLevelOneTextSCH;
			else if(this.isTChinese) return RCMenuFrustratedLevelOneTextTCH;
			else if(this.isKorean) return RCMenuFrustratedLevelOneTextKR;
			else if(this.isSpanish) return RCMenuFrustratedLevelOneTextSP;
			return RCMenuFrustratedLevelOneTextEN;
		}, configurable: true
	},
	RCMenuFrustratedLevelTwoText: {
		get: function() {
			if(this.isJapanese) return RCMenuFrustratedLevelTwoTextJP;
			else if(this.isEnglish) return RCMenuFrustratedLevelTwoTextEN;
			else if(this.isRussian) return RCMenuFrustratedLevelTwoTextRU;
			else if(this.isSChinese) return RCMenuFrustratedLevelTwoTextSCH;
			else if(this.isTChinese) return RCMenuFrustratedLevelTwoTextTCH;
			else if(this.isKorean) return RCMenuFrustratedLevelTwoTextKR;
			else if(this.isSpanish) return RCMenuFrustratedLevelTwoTextSP;
			return RCMenuFrustratedLevelTwoTextEN;
		}, configurable: true
	},
	RCMenuLostPantiesText: {
		get: function() {
			if(this.isJapanese) return RCMenuLostPantiesTextJP;
			else if(this.isEnglish) return RCMenuLostPantiesTextEN;
			else if(this.isRussian) return RCMenuLostPantiesTextRU;
			else if(this.isSChinese) return RCMenuLostPantiesTextSCH;
			else if(this.isTChinese) return RCMenuLostPantiesTextTCH;
			else if(this.isKorean) return RCMenuLostPantiesTextKR;
			else if(this.isSpanish) return RCMenuLostPantiesTextSP;
			return RCMenuLostPantiesTextEN;
		}, configurable: true
	},
	RCMenuNightModeText: {
		get: function() {
			if(this.isJapanese) return RCMenuNightModeTextJP;
			else if(this.isEnglish) return RCMenuNightModeTextEN;
			else if(this.isRussian) return RCMenuNightModeTextRU;
			else if(this.isSChinese) return RCMenuNightModeTextSCH;
			else if(this.isTChinese) return RCMenuNightModeTextTCH;
			else if(this.isKorean) return RCMenuNightModeTextKR;
			else if(this.isSpanish) return RCMenuNightModeTextSP;
			return RCMenuNightModeTextEN;
		}, configurable: true
	},

	RCMenuDefiledHalberdText: {
		get: function() {
			if(this.isJapanese) return RCMenuDefiledHalberdTextJP;
			else if(this.isEnglish) return RCMenuDefiledHalberdTextEN;
			else if(this.isRussian) return RCMenuDefiledHalberdTextRU;
			else if(this.isSChinese) return RCMenuDefiledHalberdTextSCH;
			else if(this.isTChinese) return RCMenuDefiledHalberdTextTCH;
			else if(this.isKorean) return RCMenuDefiledHalberdTextKR;
			else if(this.isSpanish) return RCMenuDefiledHalberdTextSP;
			return RCMenuDefiledHalberdTextEN;
		}, configurable: true
	},

	RCMenuMetalSingleText: {
		get: function() {
			if(this.isJapanese) return RCMenuMetalSingleTextJP;
			else if(this.isEnglish) return RCMenuMetalSingleTextEN;
			else if(this.isRussian) return RCMenuMetalSingleTextRU;
			else if(this.isSChinese) return RCMenuMetalSingleTextSCH;
			else if(this.isTChinese) return RCMenuMetalSingleTextTCH;
			else if(this.isKorean) return RCMenuMetalSingleTextKR;
			else if(this.isSpanish) return RCMenuMetalSingleTextSP;
			return RCMenuMetalSingleTextEN;
		}, configurable: true
	},
	RCMenuMetalPluralText: {
		get: function() {
			if(this.isJapanese) return RCMenuMetalPluralTextJP;
			else if(this.isEnglish) return RCMenuMetalPluralTextEN;
			else if(this.isRussian) return RCMenuMetalPluralTextRU;
			else if(this.isSChinese) return RCMenuMetalPluralTextSCH;
			else if(this.isTChinese) return RCMenuMetalPluralTextTCH;
			else if(this.isKorean) return RCMenuMetalPluralTextKR;
			else if(this.isSpanish) return RCMenuMetalPluralTextSP;
			return RCMenuMetalPluralTextEN;
		}, configurable: true
	},

	RCMenuGiftsSingleText: {
		get: function() {
			if(this.isJapanese) return RCMenuGiftsSingleTextJP;
			else if(this.isEnglish) return RCMenuGiftsSingleTextEN;
			else if(this.isRussian) return RCMenuGiftsSingleTextRU;
			else if(this.isSChinese) return RCMenuGiftsSingleTextSCH;
			else if(this.isTChinese) return RCMenuGiftsSingleTextTCH;
			else if(this.isKorean) return RCMenuGiftsSingleTextKR;
			else if(this.isSpanish) return RCMenuGiftsSingleTextSP;
			return RCMenuGiftsSingleTextEN;
		}, configurable: true
	},
	RCMenuGiftsPluralText: {
		get: function() {
			if(this.isJapanese) return RCMenuGiftsPluralTextJP;
			else if(this.isEnglish) return RCMenuGiftsPluralTextEN;
			else if(this.isRussian) return RCMenuGiftsPluralTextRU;
			else if(this.isSChinese) return RCMenuGiftsPluralTextSCH;
			else if(this.isTChinese) return RCMenuGiftsPluralTextTCH;
			else if(this.isKorean) return RCMenuGiftsPluralTextKR;
			else if(this.isSpanish) return RCMenuGiftsPluralTextSP;
			return RCMenuGiftsPluralTextEN;
		}, configurable: true
	},

	prisonLevelName: {
		get: function() {
			if(this.isJapanese) return PrisonLevelNameJP;
			else if(this.isEnglish) return PrisonLevelNameEN;
			else if(this.isRussian) return PrisonLevelNameRU;
			else if(this.isSChinese) return PrisonLevelNameSCH;
			else if(this.isTChinese) return PrisonLevelNameTCH;
			else if(this.isKorean) return PrisonLevelNameKR;
			else if(this.isSpanish) return PrisonLevelNameSP;
			return PrisonLevelNameEN;
		}, configurable: true
	},
	prisonLevelStatusUnknown: {
		get: function() {
			if(this.isJapanese) return PrisonLevelStatusUnknownJP;
			else if(this.isEnglish) return PrisonLevelStatusUnknownEN;
			else if(this.isRussian) return PrisonLevelStatusUnknownRU;
			else if(this.isSChinese) return PrisonLevelStatusUnknownSCH;
			else if(this.isTChinese) return PrisonLevelStatusUnknownTCH;
			else if(this.isKorean) return PrisonLevelStatusUnknownKR;
			else if(this.isSpanish) return PrisonLevelStatusUnknownSP;
			return PrisonLevelStatusUnknownEN;
		}, configurable: true
	},
	prisonLevelStatusAnarchy: {
		get: function() {
			if(this.isJapanese) return PrisonLevelStatusAnarchyJP;
			else if(this.isEnglish) return PrisonLevelStatusAnarchyEN;
			else if(this.isRussian) return PrisonLevelStatusAnarchyRU;
			else if(this.isSChinese) return PrisonLevelStatusAnarchySCH;
			else if(this.isTChinese) return PrisonLevelStatusAnarchyTCH;
			else if(this.isKorean) return PrisonLevelStatusAnarchyKR;
			else if(this.isSpanish) return PrisonLevelStatusAnarchySP;
			return PrisonLevelStatusAnarchyEN;
		}, configurable: true
	},
	prisonLevelStatusSubjugated: {
		get: function() {
			if(this.isJapanese) return PrisonLevelStatusSubjugatedJP;
			else if(this.isEnglish) return PrisonLevelStatusSubjugatedEN;
			else if(this.isRussian) return PrisonLevelStatusSubjugatedRU;
			else if(this.isSChinese) return PrisonLevelStatusSubjugatedSCH;
			else if(this.isTChinese) return PrisonLevelStatusSubjugatedTCH;
			else if(this.isKorean) return PrisonLevelStatusSubjugatedKR;
			else if(this.isSpanish) return PrisonLevelStatusSubjugatedSP;
			return PrisonLevelStatusSubjugatedEN;
		}, configurable: true
	},
	prisonLevelStatusRioting: {
		get: function() {
			if(this.isJapanese) return PrisonLevelStatusRiotingJP;
			else if(this.isEnglish) return PrisonLevelStatusRiotingEN;
			else if(this.isRussian) return PrisonLevelStatusRiotingRU;
			else if(this.isSChinese) return PrisonLevelStatusRiotingSCH;
			else if(this.isTChinese) return PrisonLevelStatusRiotingTCH;
			else if(this.isKorean) return PrisonLevelStatusRiotingKR;
			else if(this.isSpanish) return PrisonLevelStatusRiotingSP;
			return PrisonLevelStatusRiotingEN;
		}, configurable: true
	},
	prisonMapLevelName: {
		get: function() {
			if(this.isJapanese) return PrisonMapLevelNameJP;
			else if(this.isEnglish) return PrisonMapLevelNameEN;
			else if(this.isRussian) return PrisonMapLevelNameRU;
			else if(this.isSChinese) return PrisonMapLevelNameSCH;
			else if(this.isTChinese) return PrisonMapLevelNameTCH;
			else if(this.isKorean) return PrisonMapLevelNameKR;
			else if(this.isSpanish) return PrisonMapLevelNameSP;
			return PrisonMapLevelNameEN;
		}, configurable: true
	},
	prisonMapOutsideName: {
		get: function() {
			if(this.isJapanese) return PrisonMapOutsideNameJP;
			else if(this.isEnglish) return PrisonMapOutsideNameEN;
			else if(this.isRussian) return PrisonMapOutsideNameRU;
			else if(this.isSChinese) return PrisonMapOutsideNameSCH;
			else if(this.isTChinese) return PrisonMapOutsideNameTCH;
			else if(this.isKorean) return PrisonMapOutsideNameKR;
			else if(this.isSpanish) return PrisonMapOutsideNameSP;
			return PrisonMapOutsideNameEN;
		}, configurable: true
	},
	prisonMapUnknownName: {
		get: function() {
			if(this.isJapanese) return PrisonMapUnknownNameJP;
			else if(this.isEnglish) return PrisonMapUnknownNameEN;
			else if(this.isRussian) return PrisonMapUnknownNameRU;
			else if(this.isSChinese) return PrisonMapUnknownNameSCH;
			else if(this.isTChinese) return PrisonMapUnknownNameTCH;
			else if(this.isKorean) return PrisonMapUnknownNameKR;
			else if(this.isSpanish) return PrisonMapUnknownNameSP;
			return PrisonMapUnknownNameEN;
		}, configurable: true
	},
	prisonMapUndiscoveredName: {
		get: function() {
			if(this.isJapanese) return PrisonMapUndiscoveredNameJP;
			else if(this.isEnglish) return PrisonMapUndiscoveredNameEN;
			else if(this.isRussian) return PrisonMapUndiscoveredNameRU;
			else if(this.isSChinese) return PrisonMapUndiscoveredNameSCH;
			else if(this.isTChinese) return PrisonMapUndiscoveredNameTCH;
			else if(this.isKorean) return PrisonMapUndiscoveredNameKR;
			else if(this.isSpanish) return PrisonMapUndiscoveredNameSP;
			return PrisonMapUndiscoveredNameEN;
		}, configurable: true
	},
	prisonMapWeddingName: {
		get: function() {
			if(this.isJapanese) return PrisonMapWeddingNameJP;
			else if(this.isEnglish) return PrisonMapWeddingNameEN;
			else if(this.isRussian) return PrisonMapWeddingNameRU;
			else if(this.isSChinese) return PrisonMapWeddingNameSCH;
			else if(this.isTChinese) return PrisonMapWeddingNameTCH;
			else if(this.isKorean) return PrisonMapWeddingNameKR;
			else if(this.isSpanish) return PrisonMapWeddingNameSP;
			return PrisonMapWeddingNameEN;
		}, configurable: true
	},
	prisonMapLevelFiveName: {
		get: function() {
			if(this.isJapanese) return PrisonMapLevelFiveNameJP;
			else if(this.isEnglish) return PrisonMapLevelFiveNameEN;
			else if(this.isRussian) return PrisonMapLevelFiveNameRU;
			else if(this.isSChinese) return PrisonMapLevelFiveNameSCH;
			else if(this.isTChinese) return PrisonMapLevelFiveNameTCH;
			else if(this.isKorean) return PrisonMapLevelFiveNameKR;
			else if(this.isSpanish) return PrisonMapLevelFiveNameSP;
			return PrisonMapLevelFiveNameEN;
		}, configurable: true
	},
	prisonMapEndlessPrisonName: {
		get: function() {
			if(this.isJapanese) return PrisonMapEndlessPrisonNameJP;
			else if(this.isEnglish) return PrisonMapEndlessPrisonNameEN;
			else if(this.isRussian) return PrisonMapEndlessPrisonNameRU;
			else if(this.isSChinese) return PrisonMapEndlessPrisonNameSCH;
			else if(this.isTChinese) return PrisonMapEndlessPrisonNameTCH;
			else if(this.isKorean) return PrisonMapEndlessPrisonNameKR;
			else if(this.isSpanish) return PrisonMapEndlessPrisonNameSP;
			return PrisonMapEndlessPrisonNameEN;
		}, configurable: true
	},
	prisonMapEndlessHellName: {
		get: function() {
			if(this.isJapanese) return PrisonMapEndlessHellNameJP;
			else if(this.isEnglish) return PrisonMapEndlessHellNameEN;
			else if(this.isRussian) return PrisonMapEndlessHellNameRU;
			else if(this.isSChinese) return PrisonMapEndlessHellNameSCH;
			else if(this.isTChinese) return PrisonMapEndlessHellNameTCH;
			else if(this.isKorean) return PrisonMapEndlessHellNameKR;
			else if(this.isSpanish) return PrisonMapEndlessHellNameSP;
			return PrisonMapEndlessHellNameEN;
		}, configurable: true
	},
	prisonMapCustomName: {
		get: function() {
			if(this.isJapanese) return PrisonMapCustomNameJP;
			else if(this.isEnglish) return PrisonMapCustomNameEN;
			else if(this.isRussian) return PrisonMapCustomNameRU;
			else if(this.isSChinese) return PrisonMapCustomNameSCH;
			else if(this.isTChinese) return PrisonMapCustomNameTCH;
			else if(this.isKorean) return PrisonMapCustomNameKR;
			else if(this.isSpanish) return PrisonMapCustomNameSP;
			return PrisonMapCustomNameEN;
		}, configurable: true
	},


	kissingLevel: {
		get: function() {
			if(this.isJapanese) return KissingLevelJP;
			else if(this.isEnglish) return KissingLevelEN;
			else if(this.isRussian) return KissingLevelRU;
			else if(this.isSChinese) return KissingLevelSCH;
			else if(this.isTChinese) return KissingLevelTCH;
			else if(this.isKorean) return KissingLevelKR;
			else if(this.isSpanish) return KissingLevelSP;
			return KissingLevelEN;
		}, configurable: true
	},
	pettingLevel: {
		get: function() {
			if(this.isJapanese) return PettingLevelJP;
			else if(this.isEnglish) return PettingLevelEN;
			else if(this.isRussian) return PettingLevelRU;
			else if(this.isSChinese) return PettingLevelSCH;
			else if(this.isTChinese) return PettingLevelTCH;
			else if(this.isKorean) return PettingLevelKR;
			else if(this.isSpanish) return PettingLevelSP;
			return PettingLevelEN;
		}, configurable: true
	},
	handjobLevel: {
		get: function() {
			if(this.isJapanese) return HandjobLevelJP;
			else if(this.isEnglish) return HandjobLevelEN;
			else if(this.isRussian) return HandjobLevelRU;
			else if(this.isSChinese) return HandjobLevelSCH;
			else if(this.isTChinese) return HandjobLevelTCH;
			else if(this.isKorean) return HandjobLevelKR;
			else if(this.isSpanish) return HandjobLevelSP;
			return HandjobLevelEN;
		}, configurable: true
	},
	blowjobLevel: {
		get: function() {
			if(this.isJapanese) return BlowjobLevelJP;
			else if(this.isEnglish) return BlowjobLevelEN;
			else if(this.isRussian) return BlowjobLevelRU;
			else if(this.isSChinese) return BlowjobLevelSCH;
			else if(this.isTChinese) return BlowjobLevelTCH;
			else if(this.isKorean) return BlowjobLevelKR;
			else if(this.isSpanish) return BlowjobLevelSP;
			return BlowjobLevelEN;
		}, configurable: true
	},
	footjobLevel: {
		get: function() {
			if(this.isJapanese) return FootjobLevelJP;
			else if(this.isEnglish) return FootjobLevelEN;
			else if(this.isRussian) return FootjobLevelRU;
			else if(this.isSChinese) return FootjobLevelSCH;
			else if(this.isTChinese) return FootjobLevelTCH;
			else if(this.isKorean) return FootjobLevelKR;
			else if(this.isSpanish) return FootjobLevelSP;
			return FootjobLevelEN;
		}, configurable: true
	},
	rimjobLevel: {
		get: function() {
			if(this.isJapanese) return RimjobLevelJP;
			else if(this.isEnglish) return RimjobLevelEN;
			else if(this.isRussian) return RimjobLevelRU;
			else if(this.isSChinese) return RimjobLevelSCH;
			else if(this.isTChinese) return RimjobLevelTCH;
			else if(this.isKorean) return RimjobLevelKR;
			else if(this.isSpanish) return RimjobLevelSP;
			return RimjobLevelEN;
		}, configurable: true
	},
	tittyFuckLevel: {
		get: function() {
			if(this.isJapanese) return TittyFuckLevelJP;
			else if(this.isEnglish) return TittyFuckLevelEN;
			else if(this.isRussian) return TittyFuckLevelRU;
			else if(this.isSChinese) return TittyFuckLevelSCH;
			else if(this.isTChinese) return TittyFuckLevelTCH;
			else if(this.isKorean) return TittyFuckLevelKR;
			else if(this.isSpanish) return TittyFuckLevelSP;
			return TittyFuckLevelEN;
		}, configurable: true
	},
	pussySexLevel: {
		get: function() {
			if(this.isJapanese) return PussyLevelJP;
			else if(this.isEnglish) return PussyLevelEN;
			else if(this.isRussian) return PussyLevelRU;
			else if(this.isSChinese) return PussyLevelSCH;
			else if(this.isTChinese) return PussyLevelTCH;
			else if(this.isKorean) return PussyLevelKR;
			else if(this.isSpanish) return PussyLevelSP;
			return PussyLevelEN;
		}, configurable: true
	},
	analSexLevel: {
		get: function() {
			if(this.isJapanese) return AnalLevelJP;
			else if(this.isEnglish) return AnalLevelEN;
			else if(this.isRussian) return AnalLevelRU;
			else if(this.isSChinese) return AnalLevelSCH;
			else if(this.isTChinese) return AnalLevelTCH;
			else if(this.isKorean) return AnalLevelKR;
			else if(this.isSpanish) return AnalLevelSP;
			return AnalLevelEN;
		}, configurable: true
	},
	masturbationLevel: {
		get: function() {
			if(this.isJapanese) return MasturbationLevelJP;
			else if(this.isEnglish) return MasturbationLevelEN;
			else if(this.isRussian) return MasturbationLevelRU;
			else if(this.isSChinese) return MasturbationLevelSCH;
			else if(this.isTChinese) return MasturbationLevelTCH;
			else if(this.isKorean) return MasturbationLevelKR;
			else if(this.isSpanish) return MasturbationLevelSP;
			return MasturbationLevelEN;
		}, configurable: true
	},
	sadismLevel: {
		get: function() {
			if(this.isJapanese) return SadismLevelJP;
			else if(this.isEnglish) return SadismLevelEN;
			else if(this.isRussian) return SadismLevelRU;
			else if(this.isSChinese) return SadismLevelSCH;
			else if(this.isTChinese) return SadismLevelTCH;
			else if(this.isKorean) return SadismLevelKR;
			else if(this.isSpanish) return SadismLevelSP;
			return SadismLevelEN;
		}, configurable: true
	},
	masochismLevel: {
		get: function() {
			if(this.isJapanese) return MasochismLevelJP;
			else if(this.isEnglish) return MasochismLevelEN;
			else if(this.isRussian) return MasochismLevelRU;
			else if(this.isSChinese) return MasochismLevelSCH;
			else if(this.isTChinese) return MasochismLevelTCH;
			else if(this.isKorean) return MasochismLevelKR;
			else if(this.isSpanish) return MasochismLevelSP;
			return MasochismLevelEN;
		}, configurable: true
	},
	mouthSensitivity: {
		get: function() {
			if(this.isJapanese) return MouthSensitivityJP;
			else if(this.isEnglish) return MouthSensitivityEN;
			else if(this.isRussian) return MouthSensitivityRU;
			else if(this.isSChinese) return MouthSensitivitySCH;
			else if(this.isTChinese) return MouthSensitivityTCH;
			else if(this.isKorean) return MouthSensitivityKR;
			else if(this.isSpanish) return MouthSensitivitySP;
			return MouthSensitivityEN;
		}, configurable: true
	},
	fingerSensitivity: {
		get: function() {
			if(this.isJapanese) return FingerSensitivityJP;
			else if(this.isEnglish) return FingerSensitivityEN;
			else if(this.isRussian) return FingerSensitivityRU;
			else if(this.isSChinese) return FingerSensitivitySCH;
			else if(this.isTChinese) return FingerSensitivityTCH;
			else if(this.isKorean) return FingerSensitivityKR;
			else if(this.isSpanish) return FingerSensitivitySP;
			return FingerSensitivityEN;
		}, configurable: true
	},
	boobsSensitivity: {
		get: function() {
			if(this.isJapanese) return BoobsSensitivityJP;
			else if(this.isEnglish) return BoobsSensitivityEN;
			else if(this.isRussian) return BoobsSensitivityRU;
			else if(this.isSChinese) return BoobsSensitivitySCH;
			else if(this.isTChinese) return BoobsSensitivityTCH;
			else if(this.isKorean) return BoobsSensitivityKR;
			else if(this.isSpanish) return BoobsSensitivitySP;
			return BoobsSensitivityEN;
		}, configurable: true
	},
	nipplesSensitivity: {
		get: function() {
			if(this.isJapanese) return NipplesSensitivityJP;
			else if(this.isEnglish) return NipplesSensitivityEN;
			else if(this.isRussian) return NipplesSensitivityRU;
			else if(this.isSChinese) return NipplesSensitivitySCH;
			else if(this.isTChinese) return NipplesSensitivityTCH;
			else if(this.isKorean) return NipplesSensitivityKR;
			else if(this.isSpanish) return NipplesSensitivitySP;
			return NipplesSensitivityEN;
		}, configurable: true
	},
	clitorisSensitivity: {
		get: function() {
			if(this.isJapanese) return ClitorisSensitivityJP;
			else if(this.isEnglish) return ClitorisSensitivityEN;
			else if(this.isRussian) return ClitorisSensitivityRU;
			else if(this.isSChinese) return ClitorisSensitivitySCH;
			else if(this.isTChinese) return ClitorisSensitivityTCH;
			else if(this.isKorean) return ClitorisSensitivityKR;
			else if(this.isSpanish) return ClitorisSensitivitySP;
			return ClitorisSensitivityEN;
		}, configurable: true
	},
	pussySensitivity: {
		get: function() {
			if(this.isJapanese) return PussySensitivityJP;
			else if(this.isEnglish) return PussySensitivityEN;
			else if(this.isRussian) return PussySensitivityRU;
			else if(this.isSChinese) return PussySensitivitySCH;
			else if(this.isTChinese) return PussySensitivityTCH;
			else if(this.isKorean) return PussySensitivityKR;
			else if(this.isSpanish) return PussySensitivitySP;
			return PussySensitivityEN;
		}, configurable: true
	},
	buttSensitivity: {
		get: function() {
			if(this.isJapanese) return ButtSensitivityJP;
			else if(this.isEnglish) return ButtSensitivityEN;
			else if(this.isRussian) return ButtSensitivityRU;
			else if(this.isSChinese) return ButtSensitivitySCH;
			else if(this.isTChinese) return ButtSensitivityTCH;
			else if(this.isKorean) return ButtSensitivityKR;
			else if(this.isSpanish) return ButtSensitivitySP;
			return ButtSensitivityEN;
		}, configurable: true
	},
	analSensitivity: {
		get: function() {
			if(this.isJapanese) return AnalSensitivityJP;
			else if(this.isEnglish) return AnalSensitivityEN;
			else if(this.isRussian) return AnalSensitivityRU;
			else if(this.isSChinese) return AnalSensitivitySCH;
			else if(this.isTChinese) return AnalSensitivityTCH;
			else if(this.isKorean) return AnalSensitivityKR;
			else if(this.isSpanish) return AnalSensitivitySP;
			return AnalSensitivityEN;
		}, configurable: true
	},
	footSensitivity: {
		get: function() {
			if(this.isJapanese) return FootSensitivityJP;
			else if(this.isEnglish) return FootSensitivityEN;
			else if(this.isRussian) return FootSensitivityRU;
			else if(this.isSChinese) return FootSensitivitySCH;
			else if(this.isTChinese) return FootSensitivityTCH;
			else if(this.isKorean) return FootSensitivityKR;
			else if(this.isSpanish) return FootSensitivitySP;
			return FootSensitivityEN;
		}, configurable: true
	},

	talkSensitivity: {
		get: function() {
			if(this.isJapanese) return TalkSensitivityJP;
			else if(this.isEnglish) return TalkSensitivityEN;
			else if(this.isRussian) return TalkSensitivityRU;
			else if(this.isSChinese) return TalkSensitivitySCH;
			else if(this.isTChinese) return TalkSensitivityTCH;
			else if(this.isKorean) return TalkSensitivityKR;
			else if(this.isSpanish) return TalkSensitivitySP;
			return TalkSensitivityEN;
		}, configurable: true
	},
	sightSensitivity: {
		get: function() {
			if(this.isJapanese) return SightSensitivityJP;
			else if(this.isEnglish) return SightSensitivityEN;
			else if(this.isRussian) return SightSensitivityRU;
			else if(this.isSChinese) return SightSensitivitySCH;
			else if(this.isTChinese) return SightSensitivityTCH;
			else if(this.isKorean) return SightSensitivityKR;
			else if(this.isSpanish) return SightSensitivitySP;
			return SightSensitivityEN;
		}, configurable: true
	},
	swallowSensitivity: {
		get: function() {
			if(this.isJapanese) return SwallowSensitivityJP;
			else if(this.isEnglish) return SwallowSensitivityEN;
			else if(this.isRussian) return SwallowSensitivityRU;
			else if(this.isSChinese) return SwallowSensitivitySCH;
			else if(this.isTChinese) return SwallowSensitivityTCH;
			else if(this.isKorean) return SwallowSensitivityKR;
			else if(this.isSpanish) return SwallowSensitivitySP;
			return SwallowSensitivityEN;
		}, configurable: true
	},
	pussyCreampieSensitivity: {
		get: function() {
			if(this.isJapanese) return PussyCreampieSensitivityJP;
			else if(this.isEnglish) return PussyCreampieSensitivityEN;
			else if(this.isRussian) return PussyCreampieSensitivityRU;
			else if(this.isSChinese) return PussyCreampieSensitivitySCH;
			else if(this.isTChinese) return PussyCreampieSensitivityTCH;
			else if(this.isKorean) return PussyCreampieSensitivityKR;
			else if(this.isSpanish) return PussyCreampieSensitivitySP;
			return PussyCreampieSensitivityEN;
		}, configurable: true
	},
	analCreampieSensitivity: {
		get: function() {
			if(this.isJapanese) return AnalCreampieSensitivityJP;
			else if(this.isEnglish) return AnalCreampieSensitivityEN;
			else if(this.isRussian) return AnalCreampieSensitivityRU;
			else if(this.isSChinese) return AnalCreampieSensitivitySCH;
			else if(this.isTChinese) return AnalCreampieSensitivityTCH;
			else if(this.isKorean) return AnalCreampieSensitivityKR;
			else if(this.isSpanish) return AnalCreampieSensitivitySP;
			return AnalCreampieSensitivityEN;
		}, configurable: true
	},
	bukkakeSensitivity: {
		get: function() {
			if(this.isJapanese) return BukkakeSensitivityJP;
			else if(this.isEnglish) return BukkakeSensitivityEN;
			else if(this.isRussian) return BukkakeSensitivityRU;
			else if(this.isSChinese) return BukkakeSensitivitySCH;
			else if(this.isTChinese) return BukkakeSensitivityTCH;
			else if(this.isKorean) return BukkakeSensitivityKR;
			else if(this.isSpanish) return BukkakeSensitivitySP;
			return BukkakeSensitivityEN;
		}, configurable: true
	},
	buttSpankingSensitivity: {
		get: function() {
			if(this.isJapanese) return ButtSpankingSensitivityJP;
			else if(this.isEnglish) return ButtSpankingSensitivityEN;
			else if(this.isRussian) return ButtSpankingSensitivityRU;
			else if(this.isSChinese) return ButtSpankingSensitivitySCH;
			else if(this.isTChinese) return ButtSpankingSensitivityTCH;
			else if(this.isKorean) return ButtSpankingSensitivityKR;
			else if(this.isSpanish) return ButtSpankingSensitivitySP;
			return ButtSpankingSensitivityEN;
		}, configurable: true
	},


	statusMenuPrimary: {
		get: function() {
			if(this.isJapanese) return StatusMenuPrimaryJP;
			else if(this.isEnglish) return StatusMenuPrimaryEN;
			else if(this.isRussian) return StatusMenuPrimaryRU;
			else if(this.isSChinese) return StatusMenuPrimarySCH;
			else if(this.isTChinese) return StatusMenuPrimaryTCH;
			else if(this.isKorean) return StatusMenuPrimaryKR;
			else if(this.isSpanish) return StatusMenuPrimarySP;
			return StatusMenuPrimaryEN;
		}, configurable: true
	},
	statusMenuSecondary: {
		get: function() {
			if(this.isJapanese) return StatusMenuSecondaryJP;
			else if(this.isEnglish) return StatusMenuSecondaryEN;
			else if(this.isRussian) return StatusMenuSecondaryRU;
			else if(this.isSChinese) return StatusMenuSecondarySCH;
			else if(this.isTChinese) return StatusMenuSecondaryTCH;
			else if(this.isKorean) return StatusMenuSecondaryKR;
			else if(this.isSpanish) return StatusMenuSecondarySP;
			return StatusMenuSecondaryEN;
		}, configurable: true
	},
	statusMenuTertiary: {
		get: function() {
			if(this.isJapanese) return StatusMenuTertiaryJP;
			else if(this.isEnglish) return StatusMenuTertiaryEN;
			else if(this.isRussian) return StatusMenuTertiaryRU;
			else if(this.isSChinese) return StatusMenuTertiarySCH;
			else if(this.isTChinese) return StatusMenuTertiaryTCH;
			else if(this.isKorean) return StatusMenuTertiaryKR;
			else if(this.isSpanish) return StatusMenuTertiarySP;
			return StatusMenuTertiaryEN;
		}, configurable: true
	},
	statusMenuProfile: {
		get: function() {
			if(this.isJapanese) return StatusMenuProfileJP;
			else if(this.isEnglish) return StatusMenuProfileEN;
			else if(this.isRussian) return StatusMenuProfileRU;
			else if(this.isSChinese) return StatusMenuProfileSCH;
			else if(this.isTChinese) return StatusMenuProfileTCH;
			else if(this.isKorean) return StatusMenuProfileKR;
			else if(this.isSpanish) return StatusMenuProfileSP;
			return StatusMenuProfileEN;
		}, configurable: true
	},
	statusMenuRecords: {
		get: function() {
			if(this.isJapanese) return StatusMenuRecordsJP;
			else if(this.isEnglish) return StatusMenuRecordsEN;
			else if(this.isRussian) return StatusMenuRecordsRU;
			else if(this.isSChinese) return StatusMenuRecordsSCH;
			else if(this.isTChinese) return StatusMenuRecordsTCH;
			else if(this.isKorean) return StatusMenuRecordsKR;
			else if(this.isSpanish) return StatusMenuRecordsSP;
			return StatusMenuRecordsEN;
		}, configurable: true
	},
	statusMenuDesire: {
		get: function() {
			if(this.isJapanese) return StatusMenuDesiresJP;
			else if(this.isEnglish) return StatusMenuDesiresEN;
			else if(this.isRussian) return StatusMenuDesiresRU;
			else if(this.isSChinese) return StatusMenuDesiresSCH;
			else if(this.isTChinese) return StatusMenuDesiresTCH;
			else if(this.isKorean) return StatusMenuDesiresKR;
			else if(this.isSpanish) return StatusMenuDesiresSP;
			return StatusMenuDesiresEN;
		}, configurable: true
	},
	statusMenuEffects: {
		get: function() {
			if(this.isJapanese) return StatusMenuEffectsJP;
			else if(this.isEnglish) return StatusMenuEffectsEN;
			else if(this.isRussian) return StatusMenuEffectsRU;
			else if(this.isSChinese) return StatusMenuEffectsSCH;
			else if(this.isTChinese) return StatusMenuEffectsTCH;
			else if(this.isKorean) return StatusMenuEffectsKR;
			else if(this.isSpanish) return StatusMenuEffectsSP;
			return StatusMenuEffectsEN;
		}, configurable: true
	},

	statusMenuStats: {
		get: function() {
			if(this.isJapanese) return StatusMenuStatsJP;
			else if(this.isEnglish) return StatusMenuStatsEN;
			else if(this.isRussian) return StatusMenuStatsRU;
			else if(this.isSChinese) return StatusMenuStatsSCH;
			else if(this.isTChinese) return StatusMenuStatsTCH;
			else if(this.isKorean) return StatusMenuStatsKR;
			else if(this.isSpanish) return StatusMenuStatsSP;
			return StatusMenuStatsEN;
		}, configurable: true
	},
	statusMenuStatLevels: {
		get: function() {
			if(this.isJapanese) return StatusMenuStatLevelsJP;
			else if(this.isEnglish) return StatusMenuStatLevelsEN;
			else if(this.isRussian) return StatusMenuStatLevelsRU;
			else if(this.isSChinese) return StatusMenuStatLevelsSCH;
			else if(this.isTChinese) return StatusMenuStatLevelsTCH;
			else if(this.isKorean) return StatusMenuStatLevelsKR;
			else if(this.isSpanish) return StatusMenuStatLevelsSP;
			return StatusMenuStatLevelsEN;
		}, configurable: true
	},
	statusMenuAttributes: {
		get: function() {
			if(this.isJapanese) return StatusMenuAttributesJP;
			else if(this.isEnglish) return StatusMenuAttributesEN;
			else if(this.isRussian) return StatusMenuAttributesRU;
			else if(this.isSChinese) return StatusMenuAttributesSCH;
			else if(this.isTChinese) return StatusMenuAttributesTCH;
			else if(this.isKorean) return StatusMenuAttributesKR;
			else if(this.isSpanish) return StatusMenuAttributesSP;
			return StatusMenuAttributesEN;
		}, configurable: true
	},
	statusMenuResists: {
		get: function() {
			if(this.isJapanese) return StatusMenuResistsJP;
			else if(this.isEnglish) return StatusMenuResistsEN;
			else if(this.isRussian) return StatusMenuResistsRU;
			else if(this.isSChinese) return StatusMenuResistsSCH;
			else if(this.isTChinese) return StatusMenuResistsTCH;
			else if(this.isKorean) return StatusMenuResistsKR;
			else if(this.isSpanish) return StatusMenuResistsSP;
			return StatusMenuResistsEN;
		}, configurable: true
	},
	statusMenuLevels: {
		get: function() {
			if(this.isJapanese) return StatusMenuLevelsJP;
			else if(this.isEnglish) return StatusMenuLevelsEN;
			else if(this.isRussian) return StatusMenuLevelsRU;
			else if(this.isSChinese) return StatusMenuLevelsSCH;
			else if(this.isTChinese) return StatusMenuLevelsTCH;
			else if(this.isKorean) return StatusMenuLevelsKR;
			else if(this.isSpanish) return StatusMenuLevelsSP;
			return StatusMenuLevelsEN;
		}, configurable: true
	},
	statusMenuSensitivities: {
		get: function() {
			if(this.isJapanese) return StatusMenuSensitivitiesJP;
			else if(this.isEnglish) return StatusMenuSensitivitiesEN;
			else if(this.isRussian) return StatusMenuSensitivitiesRU;
			else if(this.isSChinese) return StatusMenuSensitivitiesSCH;
			else if(this.isTChinese) return StatusMenuSensitivitiesTCH;
			else if(this.isKorean) return StatusMenuSensitivitiesKR;
			else if(this.isSpanish) return StatusMenuSensitivitiesSP;
			return StatusMenuSensitivitiesEN;
		}, configurable: true
	},

	statusMenuMouthDesireReq: {
		get: function() {
			if(this.isJapanese) return StatusMenuMouthDesireReqJP;
			else if(this.isEnglish) return StatusMenuMouthDesireReqEN;
			else if(this.isRussian) return StatusMenuMouthDesireReqRU;
			else if(this.isSChinese) return StatusMenuMouthDesireReqSCH;
			else if(this.isTChinese) return StatusMenuMouthDesireReqTCH;
			else if(this.isKorean) return StatusMenuMouthDesireReqKR;
			else if(this.isSpanish) return StatusMenuMouthDesireReqSP;
			return StatusMenuMouthDesireReqEN;
		}, configurable: true
	},
	statusMenuBoobsDesireReq: {
		get: function() {
			if(this.isJapanese) return StatusMenuBoobsDesireReqJP;
			else if(this.isEnglish) return StatusMenuBoobsDesireReqEN;
			else if(this.isRussian) return StatusMenuBoobsDesireReqRU;
			else if(this.isSChinese) return StatusMenuBoobsDesireReqSCH;
			else if(this.isTChinese) return StatusMenuBoobsDesireReqTCH;
			else if(this.isKorean) return StatusMenuBoobsDesireReqKR;
			else if(this.isSpanish) return StatusMenuBoobsDesireReqSP;
			return StatusMenuBoobsDesireReqEN;
		}, configurable: true
	},
	statusMenuPussyDesireReq: {
		get: function() {
			if(this.isJapanese) return StatusMenuPussyDesireReqJP;
			else if(this.isEnglish) return StatusMenuPussyDesireReqEN;
			else if(this.isRussian) return StatusMenuPussyDesireReqRU;
			else if(this.isSChinese) return StatusMenuPussyDesireReqSCH;
			else if(this.isTChinese) return StatusMenuPussyDesireReqTCH;
			else if(this.isKorean) return StatusMenuPussyDesireReqKR;
			else if(this.isSpanish) return StatusMenuPussyDesireReqSP;
			return StatusMenuPussyDesireReqEN;
		}, configurable: true
	},
	statusMenuButtDesireReq: {
		get: function() {
			if(this.isJapanese) return StatusMenuButtDesireReqJP;
			else if(this.isEnglish) return StatusMenuButtDesireReqEN;
			else if(this.isRussian) return StatusMenuButtDesireReqRU;
			else if(this.isSChinese) return StatusMenuButtDesireReqSCH;
			else if(this.isTChinese) return StatusMenuButtDesireReqTCH;
			else if(this.isKorean) return StatusMenuButtDesireReqKR;
			else if(this.isSpanish) return StatusMenuButtDesireReqSP;
			return StatusMenuButtDesireReqEN;
		}, configurable: true
	},
	statusMenuCockDesireReq: {
		get: function() {
			if(this.isJapanese) return StatusMenuCockDesireReqJP;
			else if(this.isEnglish) return StatusMenuCockDesireReqEN;
			else if(this.isRussian) return StatusMenuCockDesireReqRU;
			else if(this.isSChinese) return StatusMenuCockDesireReqSCH;
			else if(this.isTChinese) return StatusMenuCockDesireReqTCH;
			else if(this.isKorean) return StatusMenuCockDesireReqKR;
			else if(this.isSpanish) return StatusMenuCockDesireReqSP;
			return StatusMenuCockDesireReqEN;
		}, configurable: true
	},

	profileNameText: {
		get: function() {
			if(this.isJapanese) return ProfileNameTextJP;
			else if(this.isEnglish) return ProfileNameTextEN;
			else if(this.isRussian) return ProfileNameTextRU;
			else if(this.isSChinese) return ProfileNameTextSCH;
			else if(this.isTChinese) return ProfileNameTextTCH;
			else if(this.isKorean) return ProfileNameTextKR;
			else if(this.isSpanish) return ProfileNameTextSP;
			return ProfileNameTextEN;
		}, configurable: true
	},
	profileAgeText: {
		get: function() {
			if(this.isJapanese) return ProfileAgeTextJP;
			else if(this.isEnglish) return ProfileAgeTextEN;
			else if(this.isRussian) return ProfileAgeTextRU;
			else if(this.isSChinese) return ProfileAgeTextSCH;
			else if(this.isTChinese) return ProfileAgeTextTCH;
			else if(this.isKorean) return ProfileAgeTextKR;
			else if(this.isSpanish) return ProfileAgeTextSP;
			return ProfileAgeTextEN;
		}, configurable: true
	},
	profileThreeSizesText: {
		get: function() {
			if(this.isJapanese) return ProfileThreeSizesTextJP;
			else if(this.isEnglish) return ProfileThreeSizesTextEN;
			else if(this.isRussian) return ProfileThreeSizesTextRU;
			else if(this.isSChinese) return ProfileThreeSizesTextSCH;
			else if(this.isTChinese) return ProfileThreeSizesTextTCH;
			else if(this.isKorean) return ProfileThreeSizesTextKR;
			else if(this.isSpanish) return ProfileThreeSizesTextSP;
			return ProfileThreeSizesTextEN;
		}, configurable: true
	},
	profileBioText: {
		get: function() {
			if(this.isJapanese) return ProfileBioTextJP;
			else if(this.isEnglish) return ProfileBioTextEN;
			else if(this.isRussian) return ProfileBioTextRU;
			else if(this.isSChinese) return ProfileBioTextSCH;
			else if(this.isTChinese) return ProfileBioTextTCH;
			else if(this.isKorean) return ProfileBioTextKR;
			else if(this.isSpanish) return ProfileBioTextSP;
			return ProfileBioTextEN;
		}, configurable: true
	},
	profileName: {
		get: function() {
			if(this.isJapanese) return ProfileNameJP;
			else if(this.isEnglish) return ProfileNameEN;
			else if(this.isRussian) return ProfileNameRU;
			else if(this.isSChinese) return ProfileNameSCH;
			else if(this.isTChinese) return ProfileNameTCH;
			else if(this.isKorean) return ProfileNameKR;
			else if(this.isSpanish) return ProfileNameSP;
			return ProfileNameEN;
		}, configurable: true
	},
	profileThreeSizesKCup: {
		get: function() {
			if(this.isJapanese) return ProfileThreeSizesJP;
			else if(this.isEnglish) return ProfileThreeSizesEN;
			else if(this.isRussian) return ProfileThreeSizesRU;
			else if(this.isSChinese) return ProfileThreeSizesSCH;
			else if(this.isTChinese) return ProfileThreeSizesTCH;
			else if(this.isKorean) return ProfileThreeSizesKR;
			else if(this.isSpanish) return ProfileThreeSizesSP;
			return ProfileThreeSizesEN;
		}, configurable: true
	},

	profileThreeSizesHCup: {
		get: function() {
			if(this.isJapanese) return ProfileThreeSizesHCupJP;
			else if(this.isEnglish) return ProfileThreeSizesHCupEN;
			else {
				try {
					if(this.isRussian) return ProfileThreeSizesHCupRU;
					else if(this.isSChinese) return ProfileThreeSizesHCupSCH;
					else if(this.isTChinese) return ProfileThreeSizesHCupTCH;
					else if(this.isKorean) return ProfileThreeSizesHCupKR;
					else if(this.isSpanish) return ProfileThreeSizesHCupSP;
				} catch(e) {}
			}
			return ProfileThreeSizesHCupEN;
		}, configurable: true
	},
	profileThreeSizesPCup: {
		get: function() {
			if(this.isJapanese) return ProfileThreeSizesPCupJP;
			else if(this.isEnglish) return ProfileThreeSizesPCupEN;
			else {
				try {
					if(this.isRussian) return ProfileThreeSizesPCupRU;
					else if(this.isSChinese) return ProfileThreeSizesPCupSCH;
					else if(this.isTChinese) return ProfileThreeSizesPCupTCH;
					else if(this.isKorean) return ProfileThreeSizesPCupKR;
					else if(this.isSpanish) return ProfileThreeSizesPCupSP;
				} catch(e) {}
			}
			return ProfileThreeSizesPCupEN;
		}, configurable: true
	},

	profileBio_One: {
		get: function() {
			if(this.isJapanese) return ProfileBio_One_JP;
			else if(this.isEnglish) return ProfileBio_One_EN;
			else if(this.isRussian) return ProfileBio_One_RU;
			else if(this.isSChinese) return ProfileBio_One_SCH;
			else if(this.isTChinese) return ProfileBio_One_TCH;
			else if(this.isKorean) return ProfileBio_One_KR;
			else if(this.isSpanish) return ProfileBio_One_SP;
			return ProfileBio_One_EN;
		}, configurable: true
	},

	profileRecordFirst: {
		get: function() {
			if(this.isJapanese) return ProfileRecordFirstJP;
			else if(this.isEnglish) return ProfileRecordFirstEN;
			else if(this.isRussian) return ProfileRecordFirstRU;
			else if(this.isSChinese) return ProfileRecordFirstSCH;
			else if(this.isTChinese) return ProfileRecordFirstTCH;
			else if(this.isKorean) return ProfileRecordFirstKR;
			else if(this.isSpanish) return ProfileRecordFirstSP;
			return ProfileRecordFirstEN;
		}, configurable: true
	},
	profileRecordLast: {
		get: function() {
			if(this.isJapanese) return ProfileRecordLastJP;
			else if(this.isEnglish) return ProfileRecordLastEN;
			else if(this.isRussian) return ProfileRecordLastRU;
			else if(this.isSChinese) return ProfileRecordLastSCH;
			else if(this.isTChinese) return ProfileRecordLastTCH;
			else if(this.isKorean) return ProfileRecordLastKR;
			else if(this.isSpanish) return ProfileRecordLastSP;
			return ProfileRecordLastEN;
		}, configurable: true
	},
	profileRecordSecret: {
		get: function() {
			if(this.isJapanese) return ProfileRecordSecretJP;
			else if(this.isEnglish) return ProfileRecordSecretEN;
			else if(this.isRussian) return ProfileRecordSecretRU;
			else if(this.isSChinese) return ProfileRecordSecretSCH;
			else if(this.isTChinese) return ProfileRecordSecretTCH;
			else if(this.isKorean) return ProfileRecordSecretKR;
			else if(this.isSpanish) return ProfileRecordSecretSP;
			return ProfileRecordSecretEN;
		}, configurable: true
	},
	profileRecordNever: {
		get: function() {
			if(this.isJapanese) return ProfileRecordNeverJP;
			else if(this.isEnglish) return ProfileRecordNeverEN;
			else if(this.isRussian) return ProfileRecordNeverRU;
			else if(this.isSChinese) return ProfileRecordNeverSCH;
			else if(this.isTChinese) return ProfileRecordNeverTCH;
			else if(this.isKorean) return ProfileRecordNeverKR;
			else if(this.isSpanish) return ProfileRecordNeverSP;
			return ProfileRecordNeverEN;
		}, configurable: true
	},
	profileRecordFirstKissWasPenis: {
		get: function() {
			if(this.isJapanese) return ProfileRecordFirstKissWasPenisJP;
			else if(this.isEnglish) return ProfileRecordFirstKissWasPenisEN;
			else if(this.isRussian) return ProfileRecordFirstKissWasPenisRU;
			else if(this.isSChinese) return ProfileRecordFirstKissWasPenisSCH;
			else if(this.isTChinese) return ProfileRecordFirstKissWasPenisTCH;
			else if(this.isKorean) return ProfileRecordFirstKissWasPenisKR;
			else if(this.isSpanish) return ProfileRecordFirstKissWasPenisSP;
			return ProfileRecordFirstKissWasPenisEN;
		}, configurable: true
	},
	profileRecordFirstKissWasAnus: {
		get: function() {
			if(this.isJapanese) return ProfileRecordFirstKissWasAnusJP;
			else if(this.isEnglish) return ProfileRecordFirstKissWasAnusEN;
			else if(this.isRussian) return ProfileRecordFirstKissWasAnusRU;
			else if(this.isSChinese) return ProfileRecordFirstKissWasAnusSCH;
			else if(this.isTChinese) return ProfileRecordFirstKissWasAnusTCH;
			else if(this.isKorean) return ProfileRecordFirstKissWasAnusKR;
			else if(this.isSpanish) return ProfileRecordFirstKissWasAnusSP;
			return ProfileRecordFirstKissWasAnusEN;
		}, configurable: true
	},

	profileRecordFirstPussySexWasDildo: {
		get: function() {
			if(this.isJapanese) return ProfileRecordFirstPussySexWasDildoJP;
			else if(this.isEnglish) return ProfileRecordFirstPussySexWasDildoEN;
			else if(this.isRussian) return ProfileRecordFirstPussySexWasDildoRU;
			else if(this.isSChinese) return ProfileRecordFirstPussySexWasDildoSCH;
			else if(this.isTChinese) return ProfileRecordFirstPussySexWasDildoTCH;
			else if(this.isKorean) return ProfileRecordFirstPussySexWasDildoKR;
			else if(this.isSpanish) return ProfileRecordFirstPussySexWasDildoSP;
			return ProfileRecordFirstPussySexWasDildoEN;
		}, configurable: true
	},


	profileRecordKiss: {
		get: function() {
			if(this.isJapanese) return ProfileRecordKissJP;
			else if(this.isEnglish) return ProfileRecordKissEN;
			else if(this.isRussian) return ProfileRecordKissRU;
			else if(this.isSChinese) return ProfileRecordKissSCH;
			else if(this.isTChinese) return ProfileRecordKissTCH;
			else if(this.isKorean) return ProfileRecordKissKR;
			else if(this.isSpanish) return ProfileRecordKissSP;
			return ProfileRecordKissEN;
		}, configurable: true
	},
	profileRecordSex: {
		get: function() {
			if(this.isJapanese) return ProfileRecordSexJP;
			else if(this.isEnglish) return ProfileRecordSexEN;
			else if(this.isRussian) return ProfileRecordSexRU;
			else if(this.isSChinese) return ProfileRecordSexSCH;
			else if(this.isTChinese) return ProfileRecordSexTCH;
			else if(this.isKorean) return ProfileRecordSexKR;
			else if(this.isSpanish) return ProfileRecordSexSP;
			return ProfileRecordSexEN;
		}, configurable: true
	},
	profileRecordAnal: {
		get: function() {
			if(this.isJapanese) return ProfileRecordAnalJP;
			else if(this.isEnglish) return ProfileRecordAnalEN;
			else if(this.isRussian) return ProfileRecordAnalRU;
			else if(this.isSChinese) return ProfileRecordAnalSCH;
			else if(this.isTChinese) return ProfileRecordAnalTCH;
			else if(this.isKorean) return ProfileRecordAnalKR;
			else if(this.isSpanish) return ProfileRecordAnalSP;
			return ProfileRecordAnalEN;
		}, configurable: true
	},
	profileRecordHandjob: {
		get: function() {
			if(this.isJapanese) return ProfileRecordHandjobJP;
			else if(this.isEnglish) return ProfileRecordHandjobEN;
			else if(this.isRussian) return ProfileRecordHandjobRU;
			else if(this.isSChinese) return ProfileRecordHandjobSCH;
			else if(this.isTChinese) return ProfileRecordHandjobTCH;
			else if(this.isKorean) return ProfileRecordHandjobKR;
			else if(this.isSpanish) return ProfileRecordHandjobSP;
			return ProfileRecordHandjobEN;
		}, configurable: true
	},
	profileRecordBlowjob: {
		get: function() {
			if(this.isJapanese) return ProfileRecordBlowjobJP;
			else if(this.isEnglish) return ProfileRecordBlowjobEN;
			else if(this.isRussian) return ProfileRecordBlowjobRU;
			else if(this.isSChinese) return ProfileRecordBlowjobSCH;
			else if(this.isTChinese) return ProfileRecordBlowjobTCH;
			else if(this.isKorean) return ProfileRecordBlowjobKR;
			else if(this.isSpanish) return ProfileRecordBlowjobSP;
			return ProfileRecordBlowjobEN;
		}, configurable: true
	},
	profileRecordTittyFuck: {
		get: function() {
			if(this.isJapanese) return ProfileRecordTittyFuckJP;
			else if(this.isEnglish) return ProfileRecordTittyFuckEN;
			else if(this.isRussian) return ProfileRecordTittyFuckRU;
			else if(this.isSChinese) return ProfileRecordTittyFuckSCH;
			else if(this.isTChinese) return ProfileRecordTittyFuckTCH;
			else if(this.isKorean) return ProfileRecordTittyFuckKR;
			else if(this.isSpanish) return ProfileRecordTittyFuckSP;
			return ProfileRecordTittyFuckEN;
		}, configurable: true
	},
	profileRecordFootjob: {
		get: function() {
			if(this.isJapanese) return ProfileRecordFootjobJP;
			else if(this.isEnglish) return ProfileRecordFootjobEN;
			else if(this.isRussian) return ProfileRecordFootjobRU;
			else if(this.isSChinese) return ProfileRecordFootjobSCH;
			else if(this.isTChinese) return ProfileRecordFootjobTCH;
			else if(this.isKorean) return ProfileRecordFootjobKR;
			else if(this.isSpanish) return ProfileRecordFootjobSP;
			return ProfileRecordFootjobEN;
		}, configurable: true
	},
	profileRecordRimjob: {
		get: function() {
			if(this.isJapanese) return ProfileRecordRimjobJP;
			else if(this.isEnglish) return ProfileRecordRimjobEN;
			else if(this.isRussian) return ProfileRecordRimjobRU;
			else if(this.isSChinese) return ProfileRecordRimjobSCH;
			else if(this.isTChinese) return ProfileRecordRimjobTCH;
			else if(this.isKorean) return ProfileRecordRimjobKR;
			else if(this.isSpanish) return ProfileRecordRimjobSP;
			return ProfileRecordRimjobEN;
		}, configurable: true
	},
	profileRecordSwallow: {
		get: function() {
			if(this.isJapanese) return ProfileRecordSwallowJP;
			else if(this.isEnglish) return ProfileRecordSwallowEN;
			else if(this.isRussian) return ProfileRecordSwallowRU;
			else if(this.isSChinese) return ProfileRecordSwallowSCH;
			else if(this.isTChinese) return ProfileRecordSwallowTCH;
			else if(this.isKorean) return ProfileRecordSwallowKR;
			else if(this.isSpanish) return ProfileRecordSwallowSP;
			return ProfileRecordSwallowEN;
		}, configurable: true
	},
	profileRecordPussyCreampie: {
		get: function() {
			if(this.isJapanese) return ProfileRecordPussyCreampieJP;
			else if(this.isEnglish) return ProfileRecordPussyCreampieEN;
			else if(this.isRussian) return ProfileRecordPussyCreampieRU;
			else if(this.isSChinese) return ProfileRecordPussyCreampieSCH;
			else if(this.isTChinese) return ProfileRecordPussyCreampieTCH;
			else if(this.isKorean) return ProfileRecordPussyCreampieKR;
			else if(this.isSpanish) return ProfileRecordPussyCreampieSP;
			return ProfileRecordPussyCreampieEN;
		}, configurable: true
	},
	profileRecordAnalCreampie: {
		get: function() {
			if(this.isJapanese) return ProfileRecordAnalCreampieJP;
			else if(this.isEnglish) return ProfileRecordAnalCreampieEN;
			else if(this.isRussian) return ProfileRecordAnalCreampieRU;
			else if(this.isSChinese) return ProfileRecordAnalCreampieSCH;
			else if(this.isTChinese) return ProfileRecordAnalCreampieTCH;
			else if(this.isKorean) return ProfileRecordAnalCreampieKR;
			else if(this.isSpanish) return ProfileRecordAnalCreampieSP;
			return ProfileRecordAnalCreampieEN;
		}, configurable: true
	},
	profileRecordBodyBukkake: {
		get: function() {
			if(this.isJapanese) return ProfileRecordBodyBukkakeJP;
			else if(this.isEnglish) return ProfileRecordBodyBukkakeEN;
			else if(this.isRussian) return ProfileRecordBodyBukkakeRU;
			else if(this.isSChinese) return ProfileRecordBodyBukkakeSCH;
			else if(this.isTChinese) return ProfileRecordBodyBukkakeTCH;
			else if(this.isKorean) return ProfileRecordBodyBukkakeKR;
			else if(this.isSpanish) return ProfileRecordBodyBukkakeSP;
			return ProfileRecordBodyBukkakeEN;
		}, configurable: true
	},
	profileRecordFaceBukkake: {
		get: function() {
			if(this.isJapanese) return ProfileRecordFaceBukkakeJP;
			else if(this.isEnglish) return ProfileRecordFaceBukkakeEN;
			else if(this.isRussian) return ProfileRecordFaceBukkakeRU;
			else if(this.isSChinese) return ProfileRecordFaceBukkakeSCH;
			else if(this.isTChinese) return ProfileRecordFaceBukkakeTCH;
			else if(this.isKorean) return ProfileRecordFaceBukkakeKR;
			else if(this.isSpanish) return ProfileRecordFaceBukkakeSP;
			return ProfileRecordFaceBukkakeEN;
		}, configurable: true
	},


	profileRecordCunnilingus: {
		get: function() {
			if(this.isJapanese) return ProfileRecordCunnilingusJP;
			else if(this.isEnglish) return ProfileRecordCunnilingusEN;
			else if(this.isRussian) return ProfileRecordCunnilingusRU;
			else if(this.isSChinese) return ProfileRecordCunnilingusSCH;
			else if(this.isTChinese) return ProfileRecordCunnilingusTCH;
			else if(this.isKorean) return ProfileRecordCunnilingusKR;
			else if(this.isSpanish) return ProfileRecordCunnilingusSP;
			return ProfileRecordCunnilingusEN;
		}, configurable: true
	},
	profileRecordSuckFingers: {
		get: function() {
			if(this.isJapanese) return ProfileRecordSuckFingersJP;
			else if(this.isEnglish) return ProfileRecordSuckFingersEN;
			else if(this.isRussian) return ProfileRecordSuckFingersRU;
			else if(this.isSChinese) return ProfileRecordSuckFingersSCH;
			else if(this.isTChinese) return ProfileRecordSuckFingersTCH;
			else if(this.isKorean) return ProfileRecordSuckFingersKR;
			else if(this.isSpanish) return ProfileRecordSuckFingersSP;
			return ProfileRecordSuckFingersEN;
		}, configurable: true
	},
	profileRecordButtSpank: {
		get: function() {
			if(this.isJapanese) return ProfileRecordButtSpankJP;
			else if(this.isEnglish) return ProfileRecordButtSpankEN;
			else if(this.isRussian) return ProfileRecordButtSpankRU;
			else if(this.isSChinese) return ProfileRecordButtSpankSCH;
			else if(this.isTChinese) return ProfileRecordButtSpankTCH;
			else if(this.isKorean) return ProfileRecordButtSpankKR;
			else if(this.isSpanish) return ProfileRecordButtSpankSP;
			return ProfileRecordButtSpankEN;
		}, configurable: true
	},
	profileRecordBoobsPetting: {
		get: function() {
			if(this.isJapanese) return ProfileRecordBoobsPettingJP;
			else if(this.isEnglish) return ProfileRecordBoobsPettingEN;
			else if(this.isRussian) return ProfileRecordBoobsPettingRU;
			else if(this.isSChinese) return ProfileRecordBoobsPettingSCH;
			else if(this.isTChinese) return ProfileRecordBoobsPettingTCH;
			else if(this.isKorean) return ProfileRecordBoobsPettingKR;
			else if(this.isSpanish) return ProfileRecordBoobsPettingSP;
			return ProfileRecordBoobsPettingEN;
		}, configurable: true
	},
	profileRecordNipplesPetting: {
		get: function() {
			if(this.isJapanese) return ProfileRecordNipplesPettingJP;
			else if(this.isEnglish) return ProfileRecordNipplesPettingEN;
			else if(this.isRussian) return ProfileRecordNipplesPettingRU;
			else if(this.isSChinese) return ProfileRecordNipplesPettingSCH;
			else if(this.isTChinese) return ProfileRecordNipplesPettingTCH;
			else if(this.isKorean) return ProfileRecordNipplesPettingKR;
			else if(this.isSpanish) return ProfileRecordNipplesPettingSP;
			return ProfileRecordNipplesPettingEN;
		}, configurable: true
	},
	profileRecordClitPetting: {
		get: function() {
			if(this.isJapanese) return ProfileRecordClitPettingJP;
			else if(this.isEnglish) return ProfileRecordClitPettingEN;
			else if(this.isRussian) return ProfileRecordClitPettingRU;
			else if(this.isSChinese) return ProfileRecordClitPettingSCH;
			else if(this.isTChinese) return ProfileRecordClitPettingTCH;
			else if(this.isKorean) return ProfileRecordClitPettingKR;
			else if(this.isSpanish) return ProfileRecordClitPettingSP;
			return ProfileRecordClitPettingEN;
		}, configurable: true
	},
	profileRecordPussyPetting: {
		get: function() {
			if(this.isJapanese) return ProfileRecordPussyPettingJP;
			else if(this.isEnglish) return ProfileRecordPussyPettingEN;
			else if(this.isRussian) return ProfileRecordPussyPettingRU;
			else if(this.isSChinese) return ProfileRecordPussyPettingSCH;
			else if(this.isTChinese) return ProfileRecordPussyPettingTCH;
			else if(this.isKorean) return ProfileRecordPussyPettingKR;
			else if(this.isSpanish) return ProfileRecordPussyPettingSP;
			return ProfileRecordPussyPettingEN;
		}, configurable: true
	},
	profileRecordButtPetting: {
		get: function() {
			if(this.isJapanese) return ProfileRecordButtPettingJP;
			else if(this.isEnglish) return ProfileRecordButtPettingEN;
			else if(this.isRussian) return ProfileRecordButtPettingRU;
			else if(this.isSChinese) return ProfileRecordButtPettingSCH;
			else if(this.isTChinese) return ProfileRecordButtPettingTCH;
			else if(this.isKorean) return ProfileRecordButtPettingKR;
			else if(this.isSpanish) return ProfileRecordButtPettingSP;
			return ProfileRecordButtPettingEN;
		}, configurable: true
	},
	profileRecordAnalPetting: {
		get: function() {
			if(this.isJapanese) return ProfileRecordAnalPettingJP;
			else if(this.isEnglish) return ProfileRecordAnalPettingEN;
			else if(this.isRussian) return ProfileRecordAnalPettingRU;
			else if(this.isSChinese) return ProfileRecordAnalPettingSCH;
			else if(this.isTChinese) return ProfileRecordAnalPettingTCH;
			else if(this.isKorean) return ProfileRecordAnalPettingKR;
			else if(this.isSpanish) return ProfileRecordAnalPettingSP;
			return ProfileRecordAnalPettingEN;
		}, configurable: true
	},
	profileRecordClitToy: {
		get: function() {
			if(this.isJapanese) return ProfileRecordClitToyJP;
			else if(this.isEnglish) return ProfileRecordClitToyEN;
			else if(this.isRussian) return ProfileRecordClitToyRU;
			else if(this.isSChinese) return ProfileRecordClitToySCH;
			else if(this.isTChinese) return ProfileRecordClitToyTCH;
			else if(this.isKorean) return ProfileRecordClitToyKR;
			else if(this.isSpanish) return ProfileRecordClitToySP;
			return ProfileRecordClitToyEN;
		}, configurable: true
	},
	profileRecordPussyToy: {
		get: function() {
			if(this.isJapanese) return ProfileRecordPussyToyJP;
			else if(this.isEnglish) return ProfileRecordPussyToyEN;
			else if(this.isRussian) return ProfileRecordPussyToyRU;
			else if(this.isSChinese) return ProfileRecordPussyToySCH;
			else if(this.isTChinese) return ProfileRecordPussyToyTCH;
			else if(this.isKorean) return ProfileRecordPussyToyKR;
			else if(this.isSpanish) return ProfileRecordPussyToySP;
			return ProfileRecordPussyToyEN;
		}, configurable: true
	},
	profileRecordAnalToy: {
		get: function() {
			if(this.isJapanese) return ProfileRecordAnalToyJP;
			else if(this.isEnglish) return ProfileRecordAnalToyEN;
			else if(this.isRussian) return ProfileRecordAnalToyRU;
			else if(this.isSChinese) return ProfileRecordAnalToySCH;
			else if(this.isTChinese) return ProfileRecordAnalToyTCH;
			else if(this.isKorean) return ProfileRecordAnalToyKR;
			else if(this.isSpanish) return ProfileRecordAnalToySP;
			return ProfileRecordAnalToyEN;
		}, configurable: true
	},
	profileRecordPussySex: {
		get: function() {
			if(this.isJapanese) return ProfileRecordPussySexJP;
			else if(this.isEnglish) return ProfileRecordPussySexEN;
			else if(this.isRussian) return ProfileRecordPussySexRU;
			else if(this.isSChinese) return ProfileRecordPussySexSCH;
			else if(this.isTChinese) return ProfileRecordPussySexTCH;
			else if(this.isKorean) return ProfileRecordPussySexKR;
			else if(this.isSpanish) return ProfileRecordPussySexSP;
			return ProfileRecordPussySexEN;
		}, configurable: true
	},
	profileRecordAnalSex: {
		get: function() {
			if(this.isJapanese) return ProfileRecordAnalSexJP;
			else if(this.isEnglish) return ProfileRecordAnalSexEN;
			else if(this.isRussian) return ProfileRecordAnalSexRU;
			else if(this.isSChinese) return ProfileRecordAnalSexSCH;
			else if(this.isTChinese) return ProfileRecordAnalSexTCH;
			else if(this.isKorean) return ProfileRecordAnalSexKR;
			else if(this.isSpanish) return ProfileRecordAnalSexSP;
			return ProfileRecordAnalSexEN;
		}, configurable: true
	},


	profileRecordFirstKiss: {
		get: function() {
			if(this.isJapanese) return ProfileRecordFirstKissJP;
			else if(this.isEnglish) return ProfileRecordFirstKissEN;
			else if(this.isRussian) return ProfileRecordFirstKissRU;
			else if(this.isSChinese) return ProfileRecordFirstKissSCH;
			else if(this.isTChinese) return ProfileRecordFirstKissTCH;
			else if(this.isKorean) return ProfileRecordFirstKissKR;
			else if(this.isSpanish) return ProfileRecordFirstKissSP;
			return ProfileRecordFirstKissEN;
		}, configurable: true
	},
	profileRecordLastKiss: {
		get: function() {
			if(this.isJapanese) return ProfileRecordLastKissJP;
			else if(this.isEnglish) return ProfileRecordLastKissEN;
			else if(this.isRussian) return ProfileRecordLastKissRU;
			else if(this.isSChinese) return ProfileRecordLastKissSCH;
			else if(this.isTChinese) return ProfileRecordLastKissTCH;
			else if(this.isKorean) return ProfileRecordLastKissKR;
			else if(this.isSpanish) return ProfileRecordLastKissSP;
			return ProfileRecordLastKissEN;
		}, configurable: true
	},
	profileRecordFirstSex: {
		get: function() {
			if(this.isJapanese) return ProfileRecordFirstSexJP;
			else if(this.isEnglish) return ProfileRecordFirstSexEN;
			else if(this.isRussian) return ProfileRecordFirstSexRU;
			else if(this.isSChinese) return ProfileRecordFirstSexSCH;
			else if(this.isTChinese) return ProfileRecordFirstSexTCH;
			else if(this.isKorean) return ProfileRecordFirstSexKR;
			else if(this.isSpanish) return ProfileRecordFirstSexSP;
			return ProfileRecordFirstSexEN;
		}, configurable: true
	},
	profileRecordLastSex: {
		get: function() {
			if(this.isJapanese) return ProfileRecordLastSexJP;
			else if(this.isEnglish) return ProfileRecordLastSexEN;
			else if(this.isRussian) return ProfileRecordLastSexRU;
			else if(this.isSChinese) return ProfileRecordLastSexSCH;
			else if(this.isTChinese) return ProfileRecordLastSexTCH;
			else if(this.isKorean) return ProfileRecordLastSexKR;
			else if(this.isSpanish) return ProfileRecordLastSexSP;
			return ProfileRecordLastSexEN;
		}, configurable: true
	},
	profileRecordFirstAnal: {
		get: function() {
			if(this.isJapanese) return ProfileRecordFirstAnalJP;
			else if(this.isEnglish) return ProfileRecordFirstAnalEN;
			else if(this.isRussian) return ProfileRecordFirstAnalRU;
			else if(this.isSChinese) return ProfileRecordFirstAnalSCH;
			else if(this.isTChinese) return ProfileRecordFirstAnalTCH;
			else if(this.isKorean) return ProfileRecordFirstAnalKR;
			else if(this.isSpanish) return ProfileRecordFirstAnalSP;
			return ProfileRecordFirstAnalEN;
		}, configurable: true
	},
	profileRecordLastAnal: {
		get: function() {
			if(this.isJapanese) return ProfileRecordLastAnalJP;
			else if(this.isEnglish) return ProfileRecordLastAnalEN;
			else if(this.isRussian) return ProfileRecordLastAnalRU;
			else if(this.isSChinese) return ProfileRecordLastAnalSCH;
			else if(this.isTChinese) return ProfileRecordLastAnalTCH;
			else if(this.isKorean) return ProfileRecordLastAnalKR;
			else if(this.isSpanish) return ProfileRecordLastAnalSP;
			return ProfileRecordLastAnalEN;
		}, configurable: true
	},
	profileRecordFirstHandjob: {
		get: function() {
			if(this.isJapanese) return ProfileRecordFirstHandjobJP;
			else if(this.isEnglish) return ProfileRecordFirstHandjobEN;
			else if(this.isRussian) return ProfileRecordFirstHandjobRU;
			else if(this.isSChinese) return ProfileRecordFirstHandjobSCH;
			else if(this.isTChinese) return ProfileRecordFirstHandjobTCH;
			else if(this.isKorean) return ProfileRecordFirstHandjobKR;
			else if(this.isSpanish) return ProfileRecordFirstHandjobSP;
			return ProfileRecordFirstHandjobEN;
		}, configurable: true
	},
	profileRecordLastHandjob: {
		get: function() {
			if(this.isJapanese) return ProfileRecordLastHandjobJP;
			else if(this.isEnglish) return ProfileRecordLastHandjobEN;
			else if(this.isRussian) return ProfileRecordLastHandjobRU;
			else if(this.isSChinese) return ProfileRecordLastHandjobSCH;
			else if(this.isTChinese) return ProfileRecordLastHandjobTCH;
			else if(this.isKorean) return ProfileRecordLastHandjobKR;
			else if(this.isSpanish) return ProfileRecordLastHandjobSP;
			return ProfileRecordLastHandjobEN;
		}, configurable: true
	},
	profileRecordFirstBlowjob: {
		get: function() {
			if(this.isJapanese) return ProfileRecordFirstBlowjobJP;
			else if(this.isEnglish) return ProfileRecordFirstBlowjobEN;
			else if(this.isRussian) return ProfileRecordFirstBlowjobRU;
			else if(this.isSChinese) return ProfileRecordFirstBlowjobSCH;
			else if(this.isTChinese) return ProfileRecordFirstBlowjobTCH;
			else if(this.isKorean) return ProfileRecordFirstBlowjobKR;
			else if(this.isSpanish) return ProfileRecordFirstBlowjobSP;
			return ProfileRecordFirstBlowjobEN;
		}, configurable: true
	},
	profileRecordLastBlowjob: {
		get: function() {
			if(this.isJapanese) return ProfileRecordLastBlowjobJP;
			else if(this.isEnglish) return ProfileRecordLastBlowjobEN;
			else if(this.isRussian) return ProfileRecordLastBlowjobRU;
			else if(this.isSChinese) return ProfileRecordLastBlowjobSCH;
			else if(this.isTChinese) return ProfileRecordLastBlowjobTCH;
			else if(this.isKorean) return ProfileRecordLastBlowjobKR;
			else if(this.isSpanish) return ProfileRecordLastBlowjobSP;
			return ProfileRecordLastBlowjobEN;
		}, configurable: true
	},
	profileRecordFirstTittyFuck: {
		get: function() {
			if(this.isJapanese) return ProfileRecordFirstTittyFuckJP;
			else if(this.isEnglish) return ProfileRecordFirstTittyFuckEN;
			else if(this.isRussian) return ProfileRecordFirstTittyFuckRU;
			else if(this.isSChinese) return ProfileRecordFirstTittyFuckSCH;
			else if(this.isTChinese) return ProfileRecordFirstTittyFuckTCH;
			else if(this.isKorean) return ProfileRecordFirstTittyFuckKR;
			else if(this.isSpanish) return ProfileRecordFirstTittyFuckSP;
			return ProfileRecordFirstTittyFuckEN;
		}, configurable: true
	},
	profileRecordLastTittyFuck: {
		get: function() {
			if(this.isJapanese) return ProfileRecordLastTittyFuckJP;
			else if(this.isEnglish) return ProfileRecordLastTittyFuckEN;
			else if(this.isRussian) return ProfileRecordLastTittyFuckRU;
			else if(this.isSChinese) return ProfileRecordLastTittyFuckSCH;
			else if(this.isTChinese) return ProfileRecordLastTittyFuckTCH;
			else if(this.isKorean) return ProfileRecordLastTittyFuckKR;
			else if(this.isSpanish) return ProfileRecordLastTittyFuckSP;
			return ProfileRecordLastTittyFuckEN;
		}, configurable: true
	},
	profileRecordFirstFootjob: {
		get: function() {
			if(this.isJapanese) return ProfileRecordFirstFootjobJP;
			else if(this.isEnglish) return ProfileRecordFirstFootjobEN;
			else if(this.isRussian) return ProfileRecordFirstFootjobRU;
			else if(this.isSChinese) return ProfileRecordFirstFootjobSCH;
			else if(this.isTChinese) return ProfileRecordFirstFootjobTCH;
			else if(this.isKorean) return ProfileRecordFirstFootjobKR;
			else if(this.isSpanish) return ProfileRecordFirstFootjobSP;
			return ProfileRecordFirstFootjobEN;
		}, configurable: true
	},
	profileRecordLastFootjob: {
		get: function() {
			if(this.isJapanese) return ProfileRecordLastFootjobJP;
			else if(this.isEnglish) return ProfileRecordLastFootjobEN;
			else if(this.isRussian) return ProfileRecordLastFootjobRU;
			else if(this.isSChinese) return ProfileRecordLastFootjobSCH;
			else if(this.isTChinese) return ProfileRecordLastFootjobTCH;
			else if(this.isKorean) return ProfileRecordLastFootjobKR;
			else if(this.isSpanish) return ProfileRecordLastFootjobSP;
			return ProfileRecordLastFootjobEN;
		}, configurable: true
	},
	profileRecordFirstRimjob: {
		get: function() {
			if(this.isJapanese) return ProfileRecordFirstRimjobJP;
			else if(this.isEnglish) return ProfileRecordFirstRimjobEN;
			else if(this.isRussian) return ProfileRecordFirstRimjobRU;
			else if(this.isSChinese) return ProfileRecordFirstRimjobSCH;
			else if(this.isTChinese) return ProfileRecordFirstRimjobTCH;
			else if(this.isKorean) return ProfileRecordFirstRimjobKR;
			else if(this.isSpanish) return ProfileRecordFirstRimjobSP;
			return ProfileRecordFirstRimjobEN;
		}, configurable: true
	},
	profileRecordLastRimjob: {
		get: function() {
			if(this.isJapanese) return ProfileRecordLastRimjobJP;
			else if(this.isEnglish) return ProfileRecordLastRimjobEN;
			else if(this.isRussian) return ProfileRecordLastRimjobRU;
			else if(this.isSChinese) return ProfileRecordLastRimjobSCH;
			else if(this.isTChinese) return ProfileRecordLastRimjobTCH;
			else if(this.isKorean) return ProfileRecordLastRimjobKR;
			else if(this.isSpanish) return ProfileRecordLastRimjobSP;
			return ProfileRecordLastRimjobEN;
		}, configurable: true
	},
	profileRecordFirstBukkake: {
		get: function() {
			if(this.isJapanese) return ProfileRecordFirstBukkakeJP;
			else if(this.isEnglish) return ProfileRecordFirstBukkakeEN;
			else if(this.isRussian) return ProfileRecordFirstBukkakeRU;
			else if(this.isSChinese) return ProfileRecordFirstBukkakeSCH;
			else if(this.isTChinese) return ProfileRecordFirstBukkakeTCH;
			else if(this.isKorean) return ProfileRecordFirstBukkakeKR;
			else if(this.isSpanish) return ProfileRecordFirstBukkakeSP;
			return ProfileRecordFirstBukkakeEN;
		}, configurable: true
	},
	profileRecordLastBukkake: {
		get: function() {
			if(this.isJapanese) return ProfileRecordLastBukkakeJP;
			else if(this.isEnglish) return ProfileRecordLastBukkakeEN;
			else if(this.isRussian) return ProfileRecordLastBukkakeRU;
			else if(this.isSChinese) return ProfileRecordLastBukkakeSCH;
			else if(this.isTChinese) return ProfileRecordLastBukkakeTCH;
			else if(this.isKorean) return ProfileRecordLastBukkakeKR;
			else if(this.isSpanish) return ProfileRecordLastBukkakeSP;
			return ProfileRecordLastBukkakeEN;
		}, configurable: true
	},
	profileRecordFirstFaceBukkake: {
		get: function() {
			if(this.isJapanese) return ProfileRecordFirstFaceBukkakeJP;
			else if(this.isEnglish) return ProfileRecordFirstFaceBukkakeEN;
			else if(this.isRussian) return ProfileRecordFirstFaceBukkakeRU;
			else if(this.isSChinese) return ProfileRecordFirstFaceBukkakeSCH;
			else if(this.isTChinese) return ProfileRecordFirstFaceBukkakeTCH;
			else if(this.isKorean) return ProfileRecordFirstFaceBukkakeKR;
			else if(this.isSpanish) return ProfileRecordFirstFaceBukkakeSP;
			return ProfileRecordFirstFaceBukkakeEN;
		}, configurable: true
	},
	profileRecordLastFaceBukkake: {
		get: function() {
			if(this.isJapanese) return ProfileRecordLastFaceBukkakeJP;
			else if(this.isEnglish) return ProfileRecordLastFaceBukkakeEN;
			else if(this.isRussian) return ProfileRecordLastFaceBukkakeRU;
			else if(this.isSChinese) return ProfileRecordLastFaceBukkakeSCH;
			else if(this.isTChinese) return ProfileRecordLastFaceBukkakeTCH;
			else if(this.isKorean) return ProfileRecordLastFaceBukkakeKR;
			else if(this.isSpanish) return ProfileRecordLastFaceBukkakeSP;
			return ProfileRecordLastFaceBukkakeEN;
		}, configurable: true
	},
	profileRecordFirstSwallow: {
		get: function() {
			if(this.isJapanese) return ProfileRecordFirstSwallowJP;
			else if(this.isEnglish) return ProfileRecordFirstSwallowEN;
			else if(this.isRussian) return ProfileRecordFirstSwallowRU;
			else if(this.isSChinese) return ProfileRecordFirstSwallowSCH;
			else if(this.isTChinese) return ProfileRecordFirstSwallowTCH;
			else if(this.isKorean) return ProfileRecordFirstSwallowKR;
			else if(this.isSpanish) return ProfileRecordFirstSwallowSP;
			return ProfileRecordFirstSwallowEN;
		}, configurable: true
	},
	profileRecordLastSwallow: {
		get: function() {
			if(this.isJapanese) return ProfileRecordLastSwallowJP;
			else if(this.isEnglish) return ProfileRecordLastSwallowEN;
			else if(this.isRussian) return ProfileRecordLastSwallowRU;
			else if(this.isSChinese) return ProfileRecordLastSwallowSCH;
			else if(this.isTChinese) return ProfileRecordLastSwallowTCH;
			else if(this.isKorean) return ProfileRecordLastSwallowKR;
			else if(this.isSpanish) return ProfileRecordLastSwallowSP;
			return ProfileRecordLastSwallowEN;
		}, configurable: true
	},
	profileRecordFirstPussyCreampie: {
		get: function() {
			if(this.isJapanese) return ProfileRecordFirstPussyCreampieJP;
			else if(this.isEnglish) return ProfileRecordFirstPussyCreampieEN;
			else if(this.isRussian) return ProfileRecordFirstPussyCreampieRU;
			else if(this.isSChinese) return ProfileRecordFirstPussyCreampieSCH;
			else if(this.isTChinese) return ProfileRecordFirstPussyCreampieTCH;
			else if(this.isKorean) return ProfileRecordFirstPussyCreampieKR;
			else if(this.isSpanish) return ProfileRecordFirstPussyCreampieSP;
			return ProfileRecordFirstPussyCreampieEN;
		}, configurable: true
	},
	profileRecordLastPussyCreampie: {
		get: function() {
			if(this.isJapanese) return ProfileRecordLastPussyCreampieJP;
			else if(this.isEnglish) return ProfileRecordLastPussyCreampieEN;
			else if(this.isRussian) return ProfileRecordLastPussyCreampieRU;
			else if(this.isSChinese) return ProfileRecordLastPussyCreampieSCH;
			else if(this.isTChinese) return ProfileRecordLastPussyCreampieTCH;
			else if(this.isKorean) return ProfileRecordLastPussyCreampieKR;
			else if(this.isSpanish) return ProfileRecordLastPussyCreampieSP;
			return ProfileRecordLastPussyCreampieEN;
		}, configurable: true
	},
	profileRecordFirstAnalCreampie: {
		get: function() {
			if(this.isJapanese) return ProfileRecordFirstAnalCreampieJP;
			else if(this.isEnglish) return ProfileRecordFirstAnalCreampieEN;
			else if(this.isRussian) return ProfileRecordFirstAnalCreampieRU;
			else if(this.isSChinese) return ProfileRecordFirstAnalCreampieSCH;
			else if(this.isTChinese) return ProfileRecordFirstAnalCreampieTCH;
			else if(this.isKorean) return ProfileRecordFirstAnalCreampieKR;
			else if(this.isSpanish) return ProfileRecordFirstAnalCreampieSP;
			return ProfileRecordFirstAnalCreampieEN;
		}, configurable: true
	},
	profileRecordLastAnalCreampie: {
		get: function() {
			if(this.isJapanese) return ProfileRecordLastAnalCreampieJP;
			else if(this.isEnglish) return ProfileRecordLastAnalCreampieEN;
			else if(this.isRussian) return ProfileRecordLastAnalCreampieRU;
			else if(this.isSChinese) return ProfileRecordLastAnalCreampieSCH;
			else if(this.isTChinese) return ProfileRecordLastAnalCreampieTCH;
			else if(this.isKorean) return ProfileRecordLastAnalCreampieKR;
			else if(this.isSpanish) return ProfileRecordLastAnalCreampieSP;
			return ProfileRecordLastAnalCreampieEN;
		}, configurable: true
	},

	statusRecordDaysSingular: {
		get: function() {
			if(this.isJapanese) return StatusRecordDaysSingularJP;
			else if(this.isEnglish) return StatusRecordDaysSingularEN;
			else if(this.isRussian) return StatusRecordDaysSingularRU;
			else if(this.isSChinese) return StatusRecordDaysSingularSCH;
			else if(this.isTChinese) return StatusRecordDaysSingularTCH;
			else if(this.isKorean) return StatusRecordDaysSingularKR;
			else if(this.isSpanish) return StatusRecordDaysSingularSP;
			return StatusRecordDaysSingularEN;
		}, configurable: true
	},
	statusRecordDaysPlural: {
		get: function() {
			if(this.isJapanese) return StatusRecordDaysPluralJP;
			else if(this.isEnglish) return StatusRecordDaysPluralEN;
			else if(this.isRussian) return StatusRecordDaysPluralRU;
			else if(this.isSChinese) return StatusRecordDaysPluralSCH;
			else if(this.isTChinese) return StatusRecordDaysPluralTCH;
			else if(this.isKorean) return StatusRecordDaysPluralKR;
			else if(this.isSpanish) return StatusRecordDaysPluralSP;
			return StatusRecordDaysPluralEN;
		}, configurable: true
	},
	statusRecordTimesSingular: {
		get: function() {
			if(this.isJapanese) return StatusRecordTimesSingularJP;
			else if(this.isEnglish) return StatusRecordTimesSingularEN;
			else if(this.isRussian) return StatusRecordTimesSingularRU;
			else if(this.isSChinese) return StatusRecordTimesSingularSCH;
			else if(this.isTChinese) return StatusRecordTimesSingularTCH;
			else if(this.isKorean) return StatusRecordTimesSingularKR;
			else if(this.isSpanish) return StatusRecordTimesSingularSP;
			return StatusRecordTimesSingularEN;
		}, configurable: true
	},
	statusRecordTimesPlural: {
		get: function() {
			if(this.isJapanese) return StatusRecordTimesPluralJP;
			else if(this.isEnglish) return StatusRecordTimesPluralEN;
			else if(this.isRussian) return StatusRecordTimesPluralRU;
			else if(this.isSChinese) return StatusRecordTimesPluralSCH;
			else if(this.isTChinese) return StatusRecordTimesPluralTCH;
			else if(this.isKorean) return StatusRecordTimesPluralKR;
			else if(this.isSpanish) return StatusRecordTimesPluralSP;
			return StatusRecordTimesPluralEN;
		}, configurable: true
	},
	statusRecordJustPeopleSingular: {
		get: function() {
			if(this.isJapanese) return StatusRecordJustPeopleSingularJP;
			else if(this.isEnglish) return StatusRecordJustPeopleSingularEN;
			else if(this.isRussian) return StatusRecordJustPeopleSingularRU;
			else if(this.isSChinese) return StatusRecordJustPeopleSingularSCH;
			else if(this.isTChinese) return StatusRecordJustPeopleSingularTCH;
			else if(this.isKorean) return StatusRecordJustPeopleSingularKR;
			else if(this.isSpanish) return StatusRecordJustPeopleSingularSP;
			return StatusRecordJustPeopleSingularEN;
		}, configurable: true
	},
	statusRecordJustPeoplePlural: {
		get: function() {
			if(this.isJapanese) return StatusRecordJustPeoplePluralJP;
			else if(this.isEnglish) return StatusRecordJustPeoplePluralEN;
			else if(this.isRussian) return StatusRecordJustPeoplePluralRU;
			else if(this.isSChinese) return StatusRecordJustPeoplePluralSCH;
			else if(this.isTChinese) return StatusRecordJustPeoplePluralTCH;
			else if(this.isKorean) return StatusRecordJustPeoplePluralKR;
			else if(this.isSpanish) return StatusRecordJustPeoplePluralSP;
			return StatusRecordJustPeoplePluralEN;
		}, configurable: true
	},
	statusRecordDifferentPeopleSingular: {
		get: function() {
			if(this.isJapanese) return StatusRecordDifferentPeopleSingularJP;
			else if(this.isEnglish) return StatusRecordDifferentPeopleSingularEN;
			else if(this.isRussian) return StatusRecordDifferentPeopleSingularRU;
			else if(this.isSChinese) return StatusRecordDifferentPeopleSingularSCH;
			else if(this.isTChinese) return StatusRecordDifferentPeopleSingularTCH;
			else if(this.isKorean) return StatusRecordDifferentPeopleSingularKR;
			else if(this.isSpanish) return StatusRecordDifferentPeopleSingularSP;
			return StatusRecordDifferentPeopleSingularEN;
		}, configurable: true
	},
	statusRecordDifferentPeoplePlural: {
		get: function() {
			if(this.isJapanese) return StatusRecordDifferentPeoplePluralJP;
			else if(this.isEnglish) return StatusRecordDifferentPeoplePluralEN;
			else if(this.isRussian) return StatusRecordDifferentPeoplePluralRU;
			else if(this.isSChinese) return StatusRecordDifferentPeoplePluralSCH;
			else if(this.isTChinese) return StatusRecordDifferentPeoplePluralTCH;
			else if(this.isKorean) return StatusRecordDifferentPeoplePluralKR;
			else if(this.isSpanish) return StatusRecordDifferentPeoplePluralSP;
			return StatusRecordDifferentPeoplePluralEN;
		}, configurable: true
	},

	statusRecordDate: {
		get: function() {
			if(this.isJapanese) return StatusRecordDateJP;
			else if(this.isEnglish) return StatusRecordDateEN;
			else if(this.isRussian) return StatusRecordDateRU;
			else if(this.isSChinese) return StatusRecordDateSCH;
			else if(this.isTChinese) return StatusRecordDateTCH;
			else if(this.isKorean) return StatusRecordDateKR;
			else if(this.isSpanish) return StatusRecordDateSP;
			return StatusRecordDateEN;
		}, configurable: true
	},
	statusRecordDateSlut: {
		get: function() {
			if(this.isJapanese) return StatusRecordDateSlutJP;
			else if(this.isEnglish) return StatusRecordDateSlutEN;
			else if(this.isRussian) return StatusRecordDateSlutRU;
			else if(this.isSChinese) return StatusRecordDateSlutSCH;
			else if(this.isTChinese) return StatusRecordDateSlutTCH;
			else if(this.isKorean) return StatusRecordDateSlutKR;
			else if(this.isSpanish) return StatusRecordDateSlutSP;
			return StatusRecordDateSlutEN;
		}, configurable: true
	},
	statusRecordFight: {
		get: function() {
			if(this.isJapanese) return StatusRecordFightJP;
			else if(this.isEnglish) return StatusRecordFightEN;
			else if(this.isRussian) return StatusRecordFightRU;
			else if(this.isSChinese) return StatusRecordFightSCH;
			else if(this.isTChinese) return StatusRecordFightTCH;
			else if(this.isKorean) return StatusRecordFightKR;
			else if(this.isSpanish) return StatusRecordFightSP;
			return StatusRecordFightEN;
		}, configurable: true
	},
	statusRecordFightSlut: {
		get: function() {
			if(this.isJapanese) return StatusRecordFightSlutJP;
			else if(this.isEnglish) return StatusRecordFightSlutEN;
			else if(this.isRussian) return StatusRecordFightSlutRU;
			else if(this.isSChinese) return StatusRecordFightSlutSCH;
			else if(this.isTChinese) return StatusRecordFightSlutTCH;
			else if(this.isKorean) return StatusRecordFightSlutKR;
			else if(this.isSpanish) return StatusRecordFightSlutSP;
			return StatusRecordFightSlutEN;
		}, configurable: true
	},
	statusRecordFightSubduedOnly: {
		get: function() {
			if(this.isJapanese) return StatusRecordFightSubduedOnlyJP;
			else if(this.isEnglish) return StatusRecordFightSubduedOnlyEN;
			else if(this.isRussian) return StatusRecordFightSubduedOnlyRU;
			else if(this.isSChinese) return StatusRecordFightSubduedOnlySCH;
			else if(this.isTChinese) return StatusRecordFightSubduedOnlyTCH;
			else if(this.isKorean) return StatusRecordFightSubduedOnlyKR;
			else if(this.isSpanish) return StatusRecordFightSubduedOnlySP;
			return StatusRecordFightSubduedOnlyEN;
		}, configurable: true
	},
	statusRecordStrip: {
		get: function() {
			if(this.isJapanese) return StatusRecordStripJP;
			else if(this.isEnglish) return StatusRecordStripEN;
			else if(this.isRussian) return StatusRecordStripRU;
			else if(this.isSChinese) return StatusRecordStripSCH;
			else if(this.isTChinese) return StatusRecordStripTCH;
			else if(this.isKorean) return StatusRecordStripKR;
			else if(this.isSpanish) return StatusRecordStripSP;
			return StatusRecordStripEN;
		}, configurable: true
	},
	statusRecordStripSlut: {
		get: function() {
			if(this.isJapanese) return StatusRecordStripSlutJP;
			else if(this.isEnglish) return StatusRecordStripSlutEN;
			else if(this.isRussian) return StatusRecordStripSlutRU;
			else if(this.isSChinese) return StatusRecordStripSlutSCH;
			else if(this.isTChinese) return StatusRecordStripSlutTCH;
			else if(this.isKorean) return StatusRecordStripSlutKR;
			else if(this.isSpanish) return StatusRecordStripSlutSP;
			return StatusRecordStripSlutEN;
		}, configurable: true
	},
	statusRecordKiss: {
		get: function() {
			if(this.isJapanese) return StatusRecordKissJP;
			else if(this.isEnglish) return StatusRecordKissEN;
			else if(this.isRussian) return StatusRecordKissRU;
			else if(this.isSChinese) return StatusRecordKissSCH;
			else if(this.isTChinese) return StatusRecordKissTCH;
			else if(this.isKorean) return StatusRecordKissKR;
			else if(this.isSpanish) return StatusRecordKissSP;
			return StatusRecordKissEN;
		}, configurable: true
	},
	statusRecordKissSlut: {
		get: function() {
			if(this.isJapanese) return StatusRecordKissSlutJP;
			else if(this.isEnglish) return StatusRecordKissSlutEN;
			else if(this.isRussian) return StatusRecordKissSlutRU;
			else if(this.isSChinese) return StatusRecordKissSlutSCH;
			else if(this.isTChinese) return StatusRecordKissSlutTCH;
			else if(this.isKorean) return StatusRecordKissSlutKR;
			else if(this.isSpanish) return StatusRecordKissSlutSP;
			return StatusRecordKissSlutEN;
		}, configurable: true
	},
	statusRecordBoobsPetted: {
		get: function() {
			if(this.isJapanese) return StatusRecordBoobsPettedJP;
			else if(this.isEnglish) return StatusRecordBoobsPettedEN;
			else if(this.isRussian) return StatusRecordBoobsPettedRU;
			else if(this.isSChinese) return StatusRecordBoobsPettedSCH;
			else if(this.isTChinese) return StatusRecordBoobsPettedTCH;
			else if(this.isKorean) return StatusRecordBoobsPettedKR;
			else if(this.isSpanish) return StatusRecordBoobsPettedSP;
			return StatusRecordBoobsPettedEN;
		}, configurable: true
	},
	statusRecordBoobsPettedSlut: {
		get: function() {
			if(this.isJapanese) return StatusRecordBoobsPettedSlutJP;
			else if(this.isEnglish) return StatusRecordBoobsPettedSlutEN;
			else if(this.isRussian) return StatusRecordBoobsPettedSlutRU;
			else if(this.isSChinese) return StatusRecordBoobsPettedSlutSCH;
			else if(this.isTChinese) return StatusRecordBoobsPettedSlutTCH;
			else if(this.isKorean) return StatusRecordBoobsPettedSlutKR;
			else if(this.isSpanish) return StatusRecordBoobsPettedSlutSP;
			return StatusRecordBoobsPettedSlutEN;
		}, configurable: true
	},
	statusRecordNipplesPetted: {
		get: function() {
			if(this.isJapanese) return StatusRecordNipplesPettedJP;
			else if(this.isEnglish) return StatusRecordNipplesPettedEN;
			else if(this.isRussian) return StatusRecordNipplesPettedRU;
			else if(this.isSChinese) return StatusRecordNipplesPettedSCH;
			else if(this.isTChinese) return StatusRecordNipplesPettedTCH;
			else if(this.isKorean) return StatusRecordNipplesPettedKR;
			else if(this.isSpanish) return StatusRecordNipplesPettedSP;
			return StatusRecordNipplesPettedEN;
		}, configurable: true
	},
	statusRecordNipplesPettedSlut: {
		get: function() {
			if(this.isJapanese) return StatusRecordNipplesPettedSlutJP;
			else if(this.isEnglish) return StatusRecordNipplesPettedSlutEN;
			else if(this.isRussian) return StatusRecordNipplesPettedSlutRU;
			else if(this.isSChinese) return StatusRecordNipplesPettedSlutSCH;
			else if(this.isTChinese) return StatusRecordNipplesPettedSlutTCH;
			else if(this.isKorean) return StatusRecordNipplesPettedSlutKR;
			else if(this.isSpanish) return StatusRecordNipplesPettedSlutSP;
			return StatusRecordNipplesPettedSlutEN;
		}, configurable: true
	},
	statusRecordClitPetted: {
		get: function() {
			if(this.isJapanese) return StatusRecordClitPettedJP;
			else if(this.isEnglish) return StatusRecordClitPettedEN;
			else if(this.isRussian) return StatusRecordClitPettedRU;
			else if(this.isSChinese) return StatusRecordClitPettedSCH;
			else if(this.isTChinese) return StatusRecordClitPettedTCH;
			else if(this.isKorean) return StatusRecordClitPettedKR;
			else if(this.isSpanish) return StatusRecordClitPettedSP;
			return StatusRecordClitPettedEN;
		}, configurable: true
	},
	statusRecordClitPettedSlut: {
		get: function() {
			if(this.isJapanese) return StatusRecordClitPettedSlutJP;
			else if(this.isEnglish) return StatusRecordClitPettedSlutEN;
			else if(this.isRussian) return StatusRecordClitPettedSlutRU;
			else if(this.isSChinese) return StatusRecordClitPettedSlutSCH;
			else if(this.isTChinese) return StatusRecordClitPettedSlutTCH;
			else if(this.isKorean) return StatusRecordClitPettedSlutKR;
			else if(this.isSpanish) return StatusRecordClitPettedSlutSP;
			return StatusRecordClitPettedSlutEN;
		}, configurable: true
	},
	statusRecordPussyPetted: {
		get: function() {
			if(this.isJapanese) return StatusRecordPussyPettedJP;
			else if(this.isEnglish) return StatusRecordPussyPettedEN;
			else if(this.isRussian) return StatusRecordPussyPettedRU;
			else if(this.isSChinese) return StatusRecordPussyPettedSCH;
			else if(this.isTChinese) return StatusRecordPussyPettedTCH;
			else if(this.isKorean) return StatusRecordPussyPettedKR;
			else if(this.isSpanish) return StatusRecordPussyPettedSP;
			return StatusRecordPussyPettedEN;
		}, configurable: true
	},
	statusRecordPussyPettedSlut: {
		get: function() {
			if(this.isJapanese) return StatusRecordPussyPettedSlutJP;
			else if(this.isEnglish) return StatusRecordPussyPettedSlutEN;
			else if(this.isRussian) return StatusRecordPussyPettedSlutRU;
			else if(this.isSChinese) return StatusRecordPussyPettedSlutSCH;
			else if(this.isTChinese) return StatusRecordPussyPettedSlutTCH;
			else if(this.isKorean) return StatusRecordPussyPettedSlutKR;
			else if(this.isSpanish) return StatusRecordPussyPettedSlutSP;
			return StatusRecordPussyPettedSlutEN;
		}, configurable: true
	},
	statusRecordButtPetted: {
		get: function() {
			if(this.isJapanese) return StatusRecordButtPettedJP;
			else if(this.isEnglish) return StatusRecordButtPettedEN;
			else if(this.isRussian) return StatusRecordButtPettedRU;
			else if(this.isSChinese) return StatusRecordButtPettedSCH;
			else if(this.isTChinese) return StatusRecordButtPettedTCH;
			else if(this.isKorean) return StatusRecordButtPettedKR;
			else if(this.isSpanish) return StatusRecordButtPettedSP;
			return StatusRecordButtPettedEN;
		}, configurable: true
	},
	statusRecordButtPettedSlut: {
		get: function() {
			if(this.isJapanese) return StatusRecordButtPettedSlutJP;
			else if(this.isEnglish) return StatusRecordButtPettedSlutEN;
			else if(this.isRussian) return StatusRecordButtPettedSlutRU;
			else if(this.isSChinese) return StatusRecordButtPettedSlutSCH;
			else if(this.isTChinese) return StatusRecordButtPettedSlutTCH;
			else if(this.isKorean) return StatusRecordButtPettedSlutKR;
			else if(this.isSpanish) return StatusRecordButtPettedSlutSP;
			return StatusRecordButtPettedSlutEN;
		}, configurable: true
	},
	statusRecordAnalPetted: {
		get: function() {
			if(this.isJapanese) return StatusRecordAnalPettedJP;
			else if(this.isEnglish) return StatusRecordAnalPettedEN;
			else if(this.isRussian) return StatusRecordAnalPettedRU;
			else if(this.isSChinese) return StatusRecordAnalPettedSCH;
			else if(this.isTChinese) return StatusRecordAnalPettedTCH;
			else if(this.isKorean) return StatusRecordAnalPettedKR;
			else if(this.isSpanish) return StatusRecordAnalPettedSP;
			return StatusRecordAnalPettedEN;
		}, configurable: true
	},
	statusRecordAnalPettedSlut: {
		get: function() {
			if(this.isJapanese) return StatusRecordAnalPettedSlutJP;
			else if(this.isEnglish) return StatusRecordAnalPettedSlutEN;
			else if(this.isRussian) return StatusRecordAnalPettedSlutRU;
			else if(this.isSChinese) return StatusRecordAnalPettedSlutSCH;
			else if(this.isTChinese) return StatusRecordAnalPettedSlutTCH;
			else if(this.isKorean) return StatusRecordAnalPettedSlutKR;
			else if(this.isSpanish) return StatusRecordAnalPettedSlutSP;
			return StatusRecordAnalPettedSlutEN;
		}, configurable: true
	},
	statusRecordMasturbate: {
		get: function() {
			if(this.isJapanese) return StatusRecordMasturbateJP;
			else if(this.isEnglish) return StatusRecordMasturbateEN;
			else if(this.isRussian) return StatusRecordMasturbateRU;
			else if(this.isSChinese) return StatusRecordMasturbateSCH;
			else if(this.isTChinese) return StatusRecordMasturbateTCH;
			else if(this.isKorean) return StatusRecordMasturbateKR;
			else if(this.isSpanish) return StatusRecordMasturbateSP;
			return StatusRecordMasturbateEN;
		}, configurable: true
	},
	statusRecordMasturbateSlut: {
		get: function() {
			if(this.isJapanese) return StatusRecordMasturbateSlutJP;
			else if(this.isEnglish) return StatusRecordMasturbateSlutEN;
			else if(this.isRussian) return StatusRecordMasturbateSlutRU;
			else if(this.isSChinese) return StatusRecordMasturbateSlutSCH;
			else if(this.isTChinese) return StatusRecordMasturbateSlutTCH;
			else if(this.isKorean) return StatusRecordMasturbateSlutKR;
			else if(this.isSpanish) return StatusRecordMasturbateSlutSP;
			return StatusRecordMasturbateSlutEN;
		}, configurable: true
	},
	statusRecordSexPartners: {
		get: function() {
			if(this.isJapanese) return StatusRecordSexPartnersJP;
			else if(this.isEnglish) return StatusRecordSexPartnersEN;
			else if(this.isRussian) return StatusRecordSexPartnersRU;
			else if(this.isSChinese) return StatusRecordSexPartnersSCH;
			else if(this.isTChinese) return StatusRecordSexPartnersTCH;
			else if(this.isKorean) return StatusRecordSexPartnersKR;
			else if(this.isSpanish) return StatusRecordSexPartnersSP;
			return StatusRecordSexPartnersEN;
		}, configurable: true
	},
	statusRecordSexPartnersSlut: {
		get: function() {
			if(this.isJapanese) return StatusRecordSexPartnersSlutJP;
			else if(this.isEnglish) return StatusRecordSexPartnersSlutEN;
			else if(this.isRussian) return StatusRecordSexPartnersSlutRU;
			else if(this.isSChinese) return StatusRecordSexPartnersSlutSCH;
			else if(this.isTChinese) return StatusRecordSexPartnersSlutTCH;
			else if(this.isKorean) return StatusRecordSexPartnersSlutKR;
			else if(this.isSpanish) return StatusRecordSexPartnersSlutSP;
			return StatusRecordSexPartnersSlutEN;
		}, configurable: true
	},
	statusRecordHandjob: {
		get: function() {
			if(this.isJapanese) return StatusRecordHandjobJP;
			else if(this.isEnglish) return StatusRecordHandjobEN;
			else if(this.isRussian) return StatusRecordHandjobRU;
			else if(this.isSChinese) return StatusRecordHandjobSCH;
			else if(this.isTChinese) return StatusRecordHandjobTCH;
			else if(this.isKorean) return StatusRecordHandjobKR;
			else if(this.isSpanish) return StatusRecordHandjobSP;
			return StatusRecordHandjobEN;
		}, configurable: true
	},
	statusRecordHandjobSlut: {
		get: function() {
			if(this.isJapanese) return StatusRecordHandjobSlutJP;
			else if(this.isEnglish) return StatusRecordHandjobSlutEN;
			else if(this.isRussian) return StatusRecordHandjobSlutRU;
			else if(this.isSChinese) return StatusRecordHandjobSlutSCH;
			else if(this.isTChinese) return StatusRecordHandjobSlutTCH;
			else if(this.isKorean) return StatusRecordHandjobSlutKR;
			else if(this.isSpanish) return StatusRecordHandjobSlutSP;
			return StatusRecordHandjobSlutEN;
		}, configurable: true
	},
	statusRecordBlowjob: {
		get: function() {
			if(this.isJapanese) return StatusRecordBlowjobJP;
			else if(this.isEnglish) return StatusRecordBlowjobEN;
			else if(this.isRussian) return StatusRecordBlowjobRU;
			else if(this.isSChinese) return StatusRecordBlowjobSCH;
			else if(this.isTChinese) return StatusRecordBlowjobTCH;
			else if(this.isKorean) return StatusRecordBlowjobKR;
			else if(this.isSpanish) return StatusRecordBlowjobSP;
			return StatusRecordBlowjobEN;
		}, configurable: true
	},
	statusRecordBlowjobSlut: {
		get: function() {
			if(this.isJapanese) return StatusRecordBlowjobSlutJP;
			else if(this.isEnglish) return StatusRecordBlowjobSlutEN;
			else if(this.isRussian) return StatusRecordBlowjobSlutRU;
			else if(this.isSChinese) return StatusRecordBlowjobSlutSCH;
			else if(this.isTChinese) return StatusRecordBlowjobSlutTCH;
			else if(this.isKorean) return StatusRecordBlowjobSlutKR;
			else if(this.isSpanish) return StatusRecordBlowjobSlutSP;
			return StatusRecordBlowjobSlutEN;
		}, configurable: true
	},
	statusRecordTittyFuck: {
		get: function() {
			if(this.isJapanese) return StatusRecordTittyFuckJP;
			else if(this.isEnglish) return StatusRecordTittyFuckEN;
			else if(this.isRussian) return StatusRecordTittyFuckRU;
			else if(this.isSChinese) return StatusRecordTittyFuckSCH;
			else if(this.isTChinese) return StatusRecordTittyFuckTCH;
			else if(this.isKorean) return StatusRecordTittyFuckKR;
			else if(this.isSpanish) return StatusRecordTittyFuckSP;
			return StatusRecordTittyFuckEN;
		}, configurable: true
	},
	statusRecordTittyFuckSlut: {
		get: function() {
			if(this.isJapanese) return StatusRecordTittyFuckSlutJP;
			else if(this.isEnglish) return StatusRecordTittyFuckSlutEN;
			else if(this.isRussian) return StatusRecordTittyFuckSlutRU;
			else if(this.isSChinese) return StatusRecordTittyFuckSlutSCH;
			else if(this.isTChinese) return StatusRecordTittyFuckSlutTCH;
			else if(this.isKorean) return StatusRecordTittyFuckSlutKR;
			else if(this.isSpanish) return StatusRecordTittyFuckSlutSP;
			return StatusRecordTittyFuckSlutEN;
		}, configurable: true
	},
	statusRecordFootjob: {
		get: function() {
			if(this.isJapanese) return StatusRecordFootjobJP;
			else if(this.isEnglish) return StatusRecordFootjobEN;
			else if(this.isRussian) return StatusRecordFootjobRU;
			else if(this.isSChinese) return StatusRecordFootjobSCH;
			else if(this.isTChinese) return StatusRecordFootjobTCH;
			else if(this.isKorean) return StatusRecordFootjobKR;
			else if(this.isSpanish) return StatusRecordFootjobSP;
			return StatusRecordFootjobEN;
		}, configurable: true
	},
	statusRecordFootjobSlut: {
		get: function() {
			if(this.isJapanese) return StatusRecordFootjobSlutJP;
			else if(this.isEnglish) return StatusRecordFootjobSlutEN;
			else if(this.isRussian) return StatusRecordFootjobSlutRU;
			else if(this.isSChinese) return StatusRecordFootjobSlutSCH;
			else if(this.isTChinese) return StatusRecordFootjobSlutTCH;
			else if(this.isKorean) return StatusRecordFootjobSlutKR;
			else if(this.isSpanish) return StatusRecordFootjobSlutSP;
			return StatusRecordFootjobSlutEN;
		}, configurable: true
	},
	statusRecordRimjob: {
		get: function() {
			if(this.isJapanese) return StatusRecordRimjobJP;
			else if(this.isEnglish) return StatusRecordRimjobEN;
			else if(this.isRussian) return StatusRecordRimjobRU;
			else if(this.isSChinese) return StatusRecordRimjobSCH;
			else if(this.isTChinese) return StatusRecordRimjobTCH;
			else if(this.isKorean) return StatusRecordRimjobKR;
			else if(this.isSpanish) return StatusRecordRimjobSP;
			return StatusRecordRimjobEN;
		}, configurable: true
	},
	statusRecordRimjobSlut: {
		get: function() {
			if(this.isJapanese) return StatusRecordRimjobSlutJP;
			else if(this.isEnglish) return StatusRecordRimjobSlutEN;
			else if(this.isRussian) return StatusRecordRimjobSlutRU;
			else if(this.isSChinese) return StatusRecordRimjobSlutSCH;
			else if(this.isTChinese) return StatusRecordRimjobSlutTCH;
			else if(this.isKorean) return StatusRecordRimjobSlutKR;
			else if(this.isSpanish) return StatusRecordRimjobSlutSP;
			return StatusRecordRimjobSlutEN;
		}, configurable: true
	},
	statusRecordCunni: {
		get: function() {
			if(this.isJapanese) return StatusRecordCunniJP;
			else if(this.isEnglish) return StatusRecordCunniEN;
			else if(this.isRussian) return StatusRecordCunniRU;
			else if(this.isSChinese) return StatusRecordCunniSCH;
			else if(this.isTChinese) return StatusRecordCunniTCH;
			else if(this.isKorean) return StatusRecordCunniKR;
			else if(this.isSpanish) return StatusRecordCunniSP;
			return StatusRecordCunniEN;
		}, configurable: true
	},
	statusRecordCunniSlut: {
		get: function() {
			if(this.isJapanese) return StatusRecordCunniSlutJP;
			else if(this.isEnglish) return StatusRecordCunniSlutEN;
			else if(this.isRussian) return StatusRecordCunniSlutRU;
			else if(this.isSChinese) return StatusRecordCunniSlutSCH;
			else if(this.isTChinese) return StatusRecordCunniSlutTCH;
			else if(this.isKorean) return StatusRecordCunniSlutKR;
			else if(this.isSpanish) return StatusRecordCunniSlutSP;
			return StatusRecordCunniSlutEN;
		}, configurable: true
	},
	statusRecordSpanked: {
		get: function() {
			if(this.isJapanese) return StatusRecordSpankedJP;
			else if(this.isEnglish) return StatusRecordSpankedEN;
			else if(this.isRussian) return StatusRecordSpankedRU;
			else if(this.isSChinese) return StatusRecordSpankedSCH;
			else if(this.isTChinese) return StatusRecordSpankedTCH;
			else if(this.isKorean) return StatusRecordSpankedKR;
			else if(this.isSpanish) return StatusRecordSpankedSP;
			return StatusRecordSpankedEN;
		}, configurable: true
	},
	statusRecordSpankedSlut: {
		get: function() {
			if(this.isJapanese) return StatusRecordSpankedSlutJP;
			else if(this.isEnglish) return StatusRecordSpankedSlutEN;
			else if(this.isRussian) return StatusRecordSpankedSlutRU;
			else if(this.isSChinese) return StatusRecordSpankedSlutSCH;
			else if(this.isTChinese) return StatusRecordSpankedSlutTCH;
			else if(this.isKorean) return StatusRecordSpankedSlutKR;
			else if(this.isSpanish) return StatusRecordSpankedSlutSP;
			return StatusRecordSpankedSlutEN;
		}, configurable: true
	},
	statusRecordPussySex: {
		get: function() {
			if(this.isJapanese) return StatusRecordPussySexJP;
			else if(this.isEnglish) return StatusRecordPussySexEN;
			else if(this.isRussian) return StatusRecordPussySexRU;
			else if(this.isSChinese) return StatusRecordPussySexSCH;
			else if(this.isTChinese) return StatusRecordPussySexTCH;
			else if(this.isKorean) return StatusRecordPussySexKR;
			else if(this.isSpanish) return StatusRecordPussySexSP;
			return StatusRecordPussySexEN;
		}, configurable: true
	},
	statusRecordPussySexSlut: {
		get: function() {
			if(this.isJapanese) return StatusRecordPussySexSlutJP;
			else if(this.isEnglish) return StatusRecordPussySexSlutEN;
			else if(this.isRussian) return StatusRecordPussySexSlutRU;
			else if(this.isSChinese) return StatusRecordPussySexSlutSCH;
			else if(this.isTChinese) return StatusRecordPussySexSlutTCH;
			else if(this.isKorean) return StatusRecordPussySexSlutKR;
			else if(this.isSpanish) return StatusRecordPussySexSlutSP;
			return StatusRecordPussySexSlutEN;
		}, configurable: true
	},
	statusRecordAnalSex: {
		get: function() {
			if(this.isJapanese) return StatusRecordAnalSexJP;
			else if(this.isEnglish) return StatusRecordAnalSexEN;
			else if(this.isRussian) return StatusRecordAnalSexRU;
			else if(this.isSChinese) return StatusRecordAnalSexSCH;
			else if(this.isTChinese) return StatusRecordAnalSexTCH;
			else if(this.isKorean) return StatusRecordAnalSexKR;
			else if(this.isSpanish) return StatusRecordAnalSexSP;
			return StatusRecordAnalSexEN;
		}, configurable: true
	},
	statusRecordAnalSexSlut: {
		get: function() {
			if(this.isJapanese) return StatusRecordAnalSexSlutJP;
			else if(this.isEnglish) return StatusRecordAnalSexSlutEN;
			else if(this.isRussian) return StatusRecordAnalSexSlutRU;
			else if(this.isSChinese) return StatusRecordAnalSexSlutSCH;
			else if(this.isTChinese) return StatusRecordAnalSexSlutTCH;
			else if(this.isKorean) return StatusRecordAnalSexSlutKR;
			else if(this.isSpanish) return StatusRecordAnalSexSlutSP;
			return StatusRecordAnalSexSlutEN;
		}, configurable: true
	},
	statusRecordGangbang: {
		get: function() {
			if(this.isJapanese) return StatusRecordGangbangJP;
			else if(this.isEnglish) return StatusRecordGangbangEN;
			else if(this.isRussian) return StatusRecordGangbangRU;
			else if(this.isSChinese) return StatusRecordGangbangSCH;
			else if(this.isTChinese) return StatusRecordGangbangTCH;
			else if(this.isKorean) return StatusRecordGangbangKR;
			else if(this.isSpanish) return StatusRecordGangbangSP;
			return StatusRecordGangbangEN;
		}, configurable: true
	},
	statusRecordGangbangSlut: {
		get: function() {
			if(this.isJapanese) return StatusRecordGangbangSlutJP;
			else if(this.isEnglish) return StatusRecordGangbangSlutEN;
			else if(this.isRussian) return StatusRecordGangbangSlutRU;
			else if(this.isSChinese) return StatusRecordGangbangSlutSCH;
			else if(this.isTChinese) return StatusRecordGangbangSlutTCH;
			else if(this.isKorean) return StatusRecordGangbangSlutKR;
			else if(this.isSpanish) return StatusRecordGangbangSlutSP;
			return StatusRecordGangbangSlutEN;
		}, configurable: true
	},

	statusRecordOrgasm: {
		get: function() {
			if(this.isJapanese) return StatusRecordOrgasmJP;
			else if(this.isEnglish) return StatusRecordOrgasmEN;
			else if(this.isRussian) return StatusRecordOrgasmRU;
			else if(this.isSChinese) return StatusRecordOrgasmSCH;
			else if(this.isTChinese) return StatusRecordOrgasmTCH;
			else if(this.isKorean) return StatusRecordOrgasmKR;
			else if(this.isSpanish) return StatusRecordOrgasmSP;
			return StatusRecordOrgasmEN;
		}, configurable: true
	},
	statusRecordOrgasmSlut: {
		get: function() {
			if(this.isJapanese) return StatusRecordOrgasmSlutJP;
			else if(this.isEnglish) return StatusRecordOrgasmSlutEN;
			else if(this.isRussian) return StatusRecordOrgasmSlutRU;
			else if(this.isSChinese) return StatusRecordOrgasmSlutSCH;
			else if(this.isTChinese) return StatusRecordOrgasmSlutTCH;
			else if(this.isKorean) return StatusRecordOrgasmSlutKR;
			else if(this.isSpanish) return StatusRecordOrgasmSlutSP;
			return StatusRecordOrgasmSlutEN;
		}, configurable: true
	},
	statusRecordSwallow: {
		get: function() {
			if(this.isJapanese) return StatusRecordSwallowJP;
			else if(this.isEnglish) return StatusRecordSwallowEN;
			else if(this.isRussian) return StatusRecordSwallowRU;
			else if(this.isSChinese) return StatusRecordSwallowSCH;
			else if(this.isTChinese) return StatusRecordSwallowTCH;
			else if(this.isKorean) return StatusRecordSwallowKR;
			else if(this.isSpanish) return StatusRecordSwallowSP;
			return StatusRecordSwallowEN;
		}, configurable: true
	},
	statusRecordSwallowSlut: {
		get: function() {
			if(this.isJapanese) return StatusRecordSwallowSlutJP;
			else if(this.isEnglish) return StatusRecordSwallowSlutEN;
			else if(this.isRussian) return StatusRecordSwallowSlutRU;
			else if(this.isSChinese) return StatusRecordSwallowSlutSCH;
			else if(this.isTChinese) return StatusRecordSwallowSlutTCH;
			else if(this.isKorean) return StatusRecordSwallowSlutKR;
			else if(this.isSpanish) return StatusRecordSwallowSlutSP;
			return StatusRecordSwallowSlutEN;
		}, configurable: true
	},
	statusRecordPussyCreampie: {
		get: function() {
			if(this.isJapanese) return StatusRecordPussyCreampieJP;
			else if(this.isEnglish) return StatusRecordPussyCreampieEN;
			else if(this.isRussian) return StatusRecordPussyCreampieRU;
			else if(this.isSChinese) return StatusRecordPussyCreampieSCH;
			else if(this.isTChinese) return StatusRecordPussyCreampieTCH;
			else if(this.isKorean) return StatusRecordPussyCreampieKR;
			else if(this.isSpanish) return StatusRecordPussyCreampieSP;
			return StatusRecordPussyCreampieEN;
		}, configurable: true
	},
	statusRecordPussyCreampieSlut: {
		get: function() {
			if(this.isJapanese) return StatusRecordPussyCreampieSlutJP;
			else if(this.isEnglish) return StatusRecordPussyCreampieSlutEN;
			else if(this.isRussian) return StatusRecordPussyCreampieSlutRU;
			else if(this.isSChinese) return StatusRecordPussyCreampieSlutSCH;
			else if(this.isTChinese) return StatusRecordPussyCreampieSlutTCH;
			else if(this.isKorean) return StatusRecordPussyCreampieSlutKR;
			else if(this.isSpanish) return StatusRecordPussyCreampieSlutSP;
			return StatusRecordPussyCreampieSlutEN;
		}, configurable: true
	},
	statusRecordAnalCreampie: {
		get: function() {
			if(this.isJapanese) return StatusRecordAnalCreampieJP;
			else if(this.isEnglish) return StatusRecordAnalCreampieEN;
			else if(this.isRussian) return StatusRecordAnalCreampieRU;
			else if(this.isSChinese) return StatusRecordAnalCreampieSCH;
			else if(this.isTChinese) return StatusRecordAnalCreampieTCH;
			else if(this.isKorean) return StatusRecordAnalCreampieKR;
			else if(this.isSpanish) return StatusRecordAnalCreampieSP;
			return StatusRecordAnalCreampieEN;
		}, configurable: true
	},
	statusRecordAnalCreampieSlut: {
		get: function() {
			if(this.isJapanese) return StatusRecordAnalCreampieSlutJP;
			else if(this.isEnglish) return StatusRecordAnalCreampieSlutEN;
			else if(this.isRussian) return StatusRecordAnalCreampieSlutRU;
			else if(this.isSChinese) return StatusRecordAnalCreampieSlutSCH;
			else if(this.isTChinese) return StatusRecordAnalCreampieSlutTCH;
			else if(this.isKorean) return StatusRecordAnalCreampieSlutKR;
			else if(this.isSpanish) return StatusRecordAnalCreampieSlutSP;
			return StatusRecordAnalCreampieSlutEN;
		}, configurable: true
	},

	statusRecordFingersSucked: {
		get: function() {
			if(this.isJapanese) return StatusRecordFingersSuckedJP;
			else if(this.isEnglish) return StatusRecordFingersSuckedEN;
			else if(this.isRussian) return StatusRecordFingersSuckedRU;
			else if(this.isSChinese) return StatusRecordFingersSuckedSCH;
			else if(this.isTChinese) return StatusRecordFingersSuckedTCH;
			else if(this.isKorean) return StatusRecordFingersSuckedKR;
			else if(this.isSpanish) return StatusRecordFingersSuckedSP;
			return StatusRecordFingersSuckedEN;
		}, configurable: true
	},
	statusRecordFingersSuckedSlut: {
		get: function() {
			if(this.isJapanese) return StatusRecordFingersSuckedSlutJP;
			else if(this.isEnglish) return StatusRecordFingersSuckedSlutEN;
			else if(this.isRussian) return StatusRecordFingersSuckedSlutRU;
			else if(this.isSChinese) return StatusRecordFingersSuckedSlutSCH;
			else if(this.isTChinese) return StatusRecordFingersSuckedSlutTCH;
			else if(this.isKorean) return StatusRecordFingersSuckedSlutKR;
			else if(this.isSpanish) return StatusRecordFingersSuckedSlutSP;
			return StatusRecordFingersSuckedSlutEN;
		}, configurable: true
	},
	statusRecordBukkake: {
		get: function() {
			if(this.isJapanese) return StatusRecordBukkakeJP;
			else if(this.isEnglish) return StatusRecordBukkakeEN;
			else if(this.isRussian) return StatusRecordBukkakeRU;
			else if(this.isSChinese) return StatusRecordBukkakeSCH;
			else if(this.isTChinese) return StatusRecordBukkakeTCH;
			else if(this.isKorean) return StatusRecordBukkakeKR;
			else if(this.isSpanish) return StatusRecordBukkakeSP;
			return StatusRecordBukkakeEN;
		}, configurable: true
	},
	statusRecordBukkakeSlut: {
		get: function() {
			if(this.isJapanese) return StatusRecordBukkakeSlutJP;
			else if(this.isEnglish) return StatusRecordBukkakeSlutEN;
			else if(this.isRussian) return StatusRecordBukkakeSlutRU;
			else if(this.isSChinese) return StatusRecordBukkakeSlutSCH;
			else if(this.isTChinese) return StatusRecordBukkakeSlutTCH;
			else if(this.isKorean) return StatusRecordBukkakeSlutKR;
			else if(this.isSpanish) return StatusRecordBukkakeSlutSP;
			return StatusRecordBukkakeSlutEN;
		}, configurable: true
	},
	statusRecordFaceBukkake: {
		get: function() {
			if(this.isJapanese) return StatusRecordFaceBukkakeJP;
			else if(this.isEnglish) return StatusRecordFaceBukkakeEN;
			else if(this.isRussian) return StatusRecordFaceBukkakeRU;
			else if(this.isSChinese) return StatusRecordFaceBukkakeSCH;
			else if(this.isTChinese) return StatusRecordFaceBukkakeTCH;
			else if(this.isKorean) return StatusRecordFaceBukkakeKR;
			else if(this.isSpanish) return StatusRecordFaceBukkakeSP;
			return StatusRecordFaceBukkakeEN;
		}, configurable: true
	},
	statusRecordFaceBukkakeSlut: {
		get: function() {
			if(this.isJapanese) return StatusRecordFaceBukkakeSlutJP;
			else if(this.isEnglish) return StatusRecordFaceBukkakeSlutEN;
			else if(this.isRussian) return StatusRecordFaceBukkakeSlutRU;
			else if(this.isSChinese) return StatusRecordFaceBukkakeSlutSCH;
			else if(this.isTChinese) return StatusRecordFaceBukkakeSlutTCH;
			else if(this.isKorean) return StatusRecordFaceBukkakeSlutKR;
			else if(this.isSpanish) return StatusRecordFaceBukkakeSlutSP;
			return StatusRecordFaceBukkakeSlutEN;
		}, configurable: true
	},

	statusBattleEffectOrgasm: {
		get: function() {
			if(this.isJapanese) return StatusBattleEffectOrgasmJP;
			else if(this.isEnglish) return StatusBattleEffectOrgasmEN;
			else if(this.isRussian) return StatusBattleEffectOrgasmRU;
			else if(this.isSChinese) return StatusBattleEffectOrgasmSCH;
			else if(this.isTChinese) return StatusBattleEffectOrgasmTCH;
			else if(this.isKorean) return StatusBattleEffectOrgasmKR;
			else if(this.isSpanish) return StatusBattleEffectOrgasmSP;
			return StatusBattleEffectOrgasmEN;
		}, configurable: true
	},
	StatusBattleEffectCool: {
		get: function() {
			if(this.isJapanese) return StatusBattleEffectCoolJP;
			else if(this.isEnglish) return StatusBattleEffectCoolEN;
			else if(this.isRussian) return StatusBattleEffectCoolRU;
			else if(this.isSChinese) return StatusBattleEffectCoolSCH;
			else if(this.isTChinese) return StatusBattleEffectCoolTCH;
			else if(this.isKorean) return StatusBattleEffectCoolKR;
			else if(this.isSpanish) return StatusBattleEffectCoolSP;
			return StatusBattleEffectCoolEN;
		}, configurable: true
	},


	statusBattleEffectIsHornyZero: {
		get: function() {
			if(this.isJapanese) return StatusBattleEffectIsHornyZeroJP;
			else if(this.isEnglish) return StatusBattleEffectIsHornyZeroEN;
			else if(this.isRussian) return StatusBattleEffectIsHornyZeroRU;
			else if(this.isSChinese) return StatusBattleEffectIsHornyZeroSCH;
			else if(this.isTChinese) return StatusBattleEffectIsHornyZeroTCH;
			else if(this.isKorean) return StatusBattleEffectIsHornyZeroKR;
			else if(this.isSpanish) return StatusBattleEffectIsHornyZeroSP;
			return StatusBattleEffectIsHornyZeroEN;
		}, configurable: true
	},
	statusBattleEffectIsHornyOne: {
		get: function() {
			if(this.isJapanese) return StatusBattleEffectIsHornyOneJP;
			else if(this.isEnglish) return StatusBattleEffectIsHornyOneEN;
			else if(this.isRussian) return StatusBattleEffectIsHornyOneRU;
			else if(this.isSChinese) return StatusBattleEffectIsHornyOneSCH;
			else if(this.isTChinese) return StatusBattleEffectIsHornyOneTCH;
			else if(this.isKorean) return StatusBattleEffectIsHornyOneKR;
			else if(this.isSpanish) return StatusBattleEffectIsHornyOneSP;
			return StatusBattleEffectIsHornyOneEN;
		}, configurable: true
	},
	statusBattleEffectIsHornyTwo: {
		get: function() {
			if(this.isJapanese) return StatusBattleEffectIsHornyTwoJP;
			else if(this.isEnglish) return StatusBattleEffectIsHornyTwoEN;
			else if(this.isRussian) return StatusBattleEffectIsHornyTwoRU;
			else if(this.isSChinese) return StatusBattleEffectIsHornyTwoSCH;
			else if(this.isTChinese) return StatusBattleEffectIsHornyTwoTCH;
			else if(this.isKorean) return StatusBattleEffectIsHornyTwoKR;
			else if(this.isSpanish) return StatusBattleEffectIsHornyTwoSP;
			return StatusBattleEffectIsHornyTwoEN;
		}, configurable: true
	},
	StatusBattleEffectIsHornyThree: {
		get: function() {
			if(this.isJapanese) return StatusBattleEffectIsHornyThreeJP;
			else if(this.isEnglish) return StatusBattleEffectIsHornyThreeEN;
			else if(this.isRussian) return StatusBattleEffectIsHornyThreeRU;
			else if(this.isSChinese) return StatusBattleEffectIsHornyThreeSCH;
			else if(this.isTChinese) return StatusBattleEffectIsHornyThreeTCH;
			else if(this.isKorean) return StatusBattleEffectIsHornyThreeKR;
			else if(this.isSpanish) return StatusBattleEffectIsHornyThreeSP;
			return StatusBattleEffectIsHornyThreeEN;
		}, configurable: true
	},


	statusBattleEffectIsConfidentZero: {
		get: function() {
			if(this.isJapanese) return StatusBattleEffectIsConfidentZeroJP;
			else if(this.isEnglish) return StatusBattleEffectIsConfidentZeroEN;
			else if(this.isRussian) return StatusBattleEffectIsConfidentZeroRU;
			else if(this.isSChinese) return StatusBattleEffectIsConfidentZeroSCH;
			else if(this.isTChinese) return StatusBattleEffectIsConfidentZeroTCH;
			else if(this.isKorean) return StatusBattleEffectIsConfidentZeroKR;
			else if(this.isSpanish) return StatusBattleEffectIsConfidentZeroSP;
			return StatusBattleEffectIsConfidentZeroEN;
		}, configurable: true
	},
	statusBattleEffectIsConfidentOne: {
		get: function() {
			if(this.isJapanese) return StatusBattleEffectIsConfidentOneJP;
			else if(this.isEnglish) return StatusBattleEffectIsConfidentOneEN;
			else if(this.isRussian) return StatusBattleEffectIsConfidentOneRU;
			else if(this.isSChinese) return StatusBattleEffectIsConfidentOneSCH;
			else if(this.isTChinese) return StatusBattleEffectIsConfidentOneTCH;
			else if(this.isKorean) return StatusBattleEffectIsConfidentOneKR;
			else if(this.isSpanish) return StatusBattleEffectIsConfidentOneSP;
			return StatusBattleEffectIsConfidentOneEN;
		}, configurable: true
	},

	statusBattleEffectIsFrustrated: {
		get: function() {
			if(this.isJapanese) return StatusBattleEffectIsFrustratedJP;
			else if(this.isEnglish) return StatusBattleEffectIsFrustratedEN;
			else if(this.isRussian) return StatusBattleEffectIsFrustratedRU;
			else if(this.isSChinese) return StatusBattleEffectIsFrustratedSCH;
			else if(this.isTChinese) return StatusBattleEffectIsFrustratedTCH;
			else if(this.isKorean) return StatusBattleEffectIsFrustratedKR;
			else if(this.isSpanish) return StatusBattleEffectIsFrustratedSP;
			return StatusBattleEffectIsFrustratedEN;
		}, configurable: true
	},

	statusBattleEffectIsAroused: {
		get: function() {
			if(this.isJapanese) return StatusBattleEffectIsArousedJP;
			else if(this.isEnglish) return StatusBattleEffectIsArousedEN;
			else if(this.isRussian) return StatusBattleEffectIsArousedRU;
			else if(this.isSChinese) return StatusBattleEffectIsArousedSCH;
			else if(this.isTChinese) return StatusBattleEffectIsArousedTCH;
			else if(this.isKorean) return StatusBattleEffectIsArousedKR;
			else if(this.isSpanish) return StatusBattleEffectIsArousedSP;
			return StatusBattleEffectIsArousedEN;
		}, configurable: true
	},
	statusBattleEffectNotAroused: {
		get: function() {
			if(this.isJapanese) return StatusBattleEffectNotArousedJP;
			else if(this.isEnglish) return StatusBattleEffectNotArousedEN;
			else if(this.isRussian) return StatusBattleEffectNotArousedRU;
			else if(this.isSChinese) return StatusBattleEffectNotArousedSCH;
			else if(this.isTChinese) return StatusBattleEffectNotArousedTCH;
			else if(this.isKorean) return StatusBattleEffectNotArousedKR;
			else if(this.isSpanish) return StatusBattleEffectNotArousedSP;
			return StatusBattleEffectNotArousedEN;
		}, configurable: true
	},
	statusBattleEffectIsWet: {
		get: function() {
			if(this.isJapanese) return StatusBattleEffectIsWetJP;
			else if(this.isEnglish) return StatusBattleEffectIsWetEN;
			else if(this.isRussian) return StatusBattleEffectIsWetRU;
			else if(this.isSChinese) return StatusBattleEffectIsWetSCH;
			else if(this.isTChinese) return StatusBattleEffectIsWetTCH;
			else if(this.isKorean) return StatusBattleEffectIsWetKR;
			else if(this.isSpanish) return StatusBattleEffectIsWetSP;
			return StatusBattleEffectIsWetEN;
		}, configurable: true
	},
	statusBattleEffectNotWet: {
		get: function() {
			if(this.isJapanese) return StatusBattleEffectNotWetJP;
			else if(this.isEnglish) return StatusBattleEffectNotWetEN;
			else if(this.isRussian) return StatusBattleEffectNotWetRU;
			else if(this.isSChinese) return StatusBattleEffectNotWetSCH;
			else if(this.isTChinese) return StatusBattleEffectNotWetTCH;
			else if(this.isKorean) return StatusBattleEffectNotWetKR;
			else if(this.isSpanish) return StatusBattleEffectNotWetSP;
			return StatusBattleEffectNotWetEN;
		}, configurable: true
	},
	statusBattleEffectIsWearingPanties: {
		get: function() {
			if(this.isJapanese) return StatusBattleEffectIsWearingPantiesJP;
			else if(this.isEnglish) return StatusBattleEffectIsWearingPantiesEN;
			else if(this.isRussian) return StatusBattleEffectIsWearingPantiesRU;
			else if(this.isSChinese) return StatusBattleEffectIsWearingPantiesSCH;
			else if(this.isTChinese) return StatusBattleEffectIsWearingPantiesTCH;
			else if(this.isKorean) return StatusBattleEffectIsWearingPantiesKR;
			else if(this.isSpanish) return StatusBattleEffectIsWearingPantiesSP;
			return StatusBattleEffectIsWearingPantiesEN;
		}, configurable: true
	},
	statusBattleEffectIsNotWearingPanties: {
		get: function() {
			if(this.isJapanese) return StatusBattleEffectIsNotWearingPantiesJP;
			else if(this.isEnglish) return StatusBattleEffectIsNotWearingPantiesEN;
			else if(this.isRussian) return StatusBattleEffectIsNotWearingPantiesRU;
			else if(this.isSChinese) return StatusBattleEffectIsNotWearingPantiesSCH;
			else if(this.isTChinese) return StatusBattleEffectIsNotWearingPantiesTCH;
			else if(this.isKorean) return StatusBattleEffectIsNotWearingPantiesKR;
			else if(this.isSpanish) return StatusBattleEffectIsNotWearingPantiesSP;
			return StatusBattleEffectIsNotWearingPantiesEN;
		}, configurable: true
	},
	StatusBattleEffectIsVirginHigh: {
		get: function() {
			if(this.isJapanese) return StatusBattleEffectIsVirginHighJP;
			else if(this.isEnglish) return StatusBattleEffectIsVirginHighEN;
			else if(this.isRussian) return StatusBattleEffectIsVirginHighRU;
			else if(this.isSChinese) return StatusBattleEffectIsVirginHighSCH;
			else if(this.isTChinese) return StatusBattleEffectIsVirginHighTCH;
			else if(this.isKorean) return StatusBattleEffectIsVirginHighKR;
			else if(this.isSpanish) return StatusBattleEffectIsVirginHighSP;
			return StatusBattleEffectIsVirginHighEN;
		}, configurable: true
	},
	StatusBattleEffectIsVirginMed: {
		get: function() {
			if(this.isJapanese) return StatusBattleEffectIsVirginMedJP;
			else if(this.isEnglish) return StatusBattleEffectIsVirginMedEN;
			else if(this.isRussian) return StatusBattleEffectIsVirginMedRU;
			else if(this.isSChinese) return StatusBattleEffectIsVirginMedSCH;
			else if(this.isTChinese) return StatusBattleEffectIsVirginMedTCH;
			else if(this.isKorean) return StatusBattleEffectIsVirginMedKR;
			else if(this.isSpanish) return StatusBattleEffectIsVirginMedSP;
			return StatusBattleEffectIsVirginMedEN;
		}, configurable: true
	},
	StatusBattleEffectIsVirginLow: {
		get: function() {
			if(this.isJapanese) return StatusBattleEffectIsVirginLowJP;
			else if(this.isEnglish) return StatusBattleEffectIsVirginLowEN;
			else if(this.isRussian) return StatusBattleEffectIsVirginLowRU;
			else if(this.isSChinese) return StatusBattleEffectIsVirginLowSCH;
			else if(this.isTChinese) return StatusBattleEffectIsVirginLowTCH;
			else if(this.isKorean) return StatusBattleEffectIsVirginLowKR;
			else if(this.isSpanish) return StatusBattleEffectIsVirginLowSP;
			return StatusBattleEffectIsVirginLowEN;
		}, configurable: true
	},
	StatusBattleEffectIsVirginPublished: {
		get: function() {
			if(this.isJapanese) return StatusBattleEffectIsVirginPublishedJP;
			else if(this.isEnglish) return StatusBattleEffectIsVirginPublishedEN;
			else if(this.isRussian) return StatusBattleEffectIsVirginPublishedRU;
			else if(this.isSChinese) return StatusBattleEffectIsVirginPublishedSCH;
			else if(this.isTChinese) return StatusBattleEffectIsVirginPublishedTCH;
			else if(this.isKorean) return StatusBattleEffectIsVirginPublishedKR;
			else if(this.isSpanish) return StatusBattleEffectIsVirginPublishedSP;
			return StatusBattleEffectIsVirginPublishedEN;
		}, configurable: true
	},

	statusBattleEffectDisarmed: {
		get: function() {
			if(this.isJapanese) return StatusBattleEffectDisarmedJP;
			else if(this.isEnglish) return StatusBattleEffectDisarmedEN;
			else if(this.isRussian) return StatusBattleEffectDisarmedRU;
			else if(this.isSChinese) return StatusBattleEffectDisarmedSCH;
			else if(this.isTChinese) return StatusBattleEffectDisarmedTCH;
			else if(this.isKorean) return StatusBattleEffectDisarmedKR;
			else if(this.isSpanish) return StatusBattleEffectDisarmedSP;
			return StatusBattleEffectDisarmedEN;
		}, configurable: true
	},
	statusBattleEffectDefiledHalberd: {
		get: function() {
			if(this.isJapanese) return StatusBattleEffectDefiledHalberdJP;
			else if(this.isEnglish) return StatusBattleEffectDefiledHalberdEN;
			else if(this.isRussian) return StatusBattleEffectDefiledHalberdRU;
			else if(this.isSChinese) return StatusBattleEffectDefiledHalberdSCH;
			else if(this.isTChinese) return StatusBattleEffectDefiledHalberdTCH;
			else if(this.isKorean) return StatusBattleEffectDefiledHalberdKR;
			else if(this.isSpanish) return StatusBattleEffectDefiledHalberdSP;
			return StatusBattleEffectDefiledHalberdEN;
		}, configurable: true
	},

	statusBattleEffectOffBalanced: {
		get: function() {
			if(this.isJapanese) return StatusBattleEffectOffBalancedJP;
			else if(this.isEnglish) return StatusBattleEffectOffBalancedEN;
			else if(this.isRussian) return StatusBattleEffectOffBalancedRU;
			else if(this.isSChinese) return StatusBattleEffectOffBalancedSCH;
			else if(this.isTChinese) return StatusBattleEffectOffBalancedTCH;
			else if(this.isKorean) return StatusBattleEffectOffBalancedKR;
			else if(this.isSpanish) return StatusBattleEffectOffBalancedSP;
			return StatusBattleEffectOffBalancedEN;
		}, configurable: true
	},
	statusBattleEffectWeaken: {
		get: function() {
			if(this.isJapanese) return StatusBattleEffectWeakenJP;
			else if(this.isEnglish) return StatusBattleEffectWeakenEN;
			else if(this.isRussian) return StatusBattleEffectWeakenRU;
			else if(this.isSChinese) return StatusBattleEffectWeakenSCH;
			else if(this.isTChinese) return StatusBattleEffectWeakenTCH;
			else if(this.isKorean) return StatusBattleEffectWeakenKR;
			else if(this.isSpanish) return StatusBattleEffectWeakenSP;
			return StatusBattleEffectWeakenEN;
		}, configurable: true
	},
	statusBattleEffectDizzy: {
		get: function() {
			if(this.isJapanese) return StatusBattleEffectDizzyJP;
			else if(this.isEnglish) return StatusBattleEffectDizzyEN;
			else if(this.isRussian) return StatusBattleEffectDizzyRU;
			else if(this.isSChinese) return StatusBattleEffectDizzySCH;
			else if(this.isTChinese) return StatusBattleEffectDizzyTCH;
			else if(this.isKorean) return StatusBattleEffectDizzyKR;
			else if(this.isSpanish) return StatusBattleEffectDizzySP;
			return StatusBattleEffectDizzyEN;
		}, configurable: true
	},
	statusBattleEffectSlow: {
		get: function() {
			if(this.isJapanese) return StatusBattleEffectSlowJP;
			else if(this.isEnglish) return StatusBattleEffectSlowEN;
			else if(this.isRussian) return StatusBattleEffectSlowRU;
			else if(this.isSChinese) return StatusBattleEffectSlowSCH;
			else if(this.isTChinese) return StatusBattleEffectSlowTCH;
			else if(this.isKorean) return StatusBattleEffectSlowKR;
			else if(this.isSpanish) return StatusBattleEffectSlowSP;
			return StatusBattleEffectSlowEN;
		}, configurable: true
	},
	statusBattleEffectVulnerable: {
		get: function() {
			if(this.isJapanese) return StatusBattleEffectVulnerableJP;
			else if(this.isEnglish) return StatusBattleEffectVulnerableEN;
			else if(this.isRussian) return StatusBattleEffectVulnerableRU;
			else if(this.isSChinese) return StatusBattleEffectVulnerableSCH;
			else if(this.isTChinese) return StatusBattleEffectVulnerableTCH;
			else if(this.isKorean) return StatusBattleEffectVulnerableKR;
			else if(this.isSpanish) return StatusBattleEffectVulnerableSP;
			return StatusBattleEffectVulnerableEN;
		}, configurable: true
	},
	statusBattleEffectPoison: {
		get: function() {
			if(this.isJapanese) return StatusBattleEffectPoisonJP;
			else if(this.isEnglish) return StatusBattleEffectPoisonEN;
			else if(this.isRussian) return StatusBattleEffectPoisonRU;
			else if(this.isSChinese) return StatusBattleEffectPoisonSCH;
			else if(this.isTChinese) return StatusBattleEffectPoisonTCH;
			else if(this.isKorean) return StatusBattleEffectPoisonKR;
			else if(this.isSpanish) return StatusBattleEffectPoisonSP;
			return StatusBattleEffectPoisonEN;
		}, configurable: true
	},
	StatusBattleEffectYetiHeatAuraOne: {
		get: function() {
			if(this.isJapanese) return StatusBattleEffectYetiHeatAuraOneJP;
			else if(this.isEnglish) return StatusBattleEffectYetiHeatAuraOneEN;
			else if(this.isRussian) return StatusBattleEffectYetiHeatAuraOneRU;
			else if(this.isSChinese) return StatusBattleEffectYetiHeatAuraOneSCH;
			else if(this.isTChinese) return StatusBattleEffectYetiHeatAuraOneTCH;
			else if(this.isKorean) return StatusBattleEffectYetiHeatAuraOneKR;
			else if(this.isSpanish) return StatusBattleEffectYetiHeatAuraOneSP;
			return StatusBattleEffectYetiHeatAuraOneEN;
		}, configurable: true
	},
	StatusBattleEffectYetiHeatAuraTwo: {
		get: function() {
			if(this.isJapanese) return StatusBattleEffectYetiHeatAuraTwoJP;
			else if(this.isEnglish) return StatusBattleEffectYetiHeatAuraTwoEN;
			else if(this.isRussian) return StatusBattleEffectYetiHeatAuraTwoRU;
			else if(this.isSChinese) return StatusBattleEffectYetiHeatAuraTwoSCH;
			else if(this.isTChinese) return StatusBattleEffectYetiHeatAuraTwoTCH;
			else if(this.isKorean) return StatusBattleEffectYetiHeatAuraTwoKR;
			else if(this.isSpanish) return StatusBattleEffectYetiHeatAuraTwoSP;
			return StatusBattleEffectYetiHeatAuraTwoEN;
		}, configurable: true
	},

	statusBattleEffectExposeWeakness: {
		get: function() {
			if(this.isJapanese) return StatusBattleEffectExposeWeaknessJP;
			else if(this.isEnglish) return StatusBattleEffectExposeWeaknessEN;
			else if(this.isRussian) return StatusBattleEffectExposeWeaknessRU;
			else if(this.isSChinese) return StatusBattleEffectExposeWeaknessSCH;
			else if(this.isTChinese) return StatusBattleEffectExposeWeaknessTCH;
			else if(this.isKorean) return StatusBattleEffectExposeWeaknessKR;
			else if(this.isSpanish) return StatusBattleEffectExposeWeaknessSP;
			return StatusBattleEffectExposeWeaknessEN;
		}, configurable: true
	},
	StatusBattleEffectAttackCombo: {
		get: function() {
			if(this.isJapanese) return StatusBattleEffectAttackComboJP;
			else if(this.isEnglish) return StatusBattleEffectAttackComboEN;
			else if(this.isRussian) return StatusBattleEffectAttackComboRU;
			else if(this.isSChinese) return StatusBattleEffectAttackComboSCH;
			else if(this.isTChinese) return StatusBattleEffectAttackComboTCH;
			else if(this.isKorean) return StatusBattleEffectAttackComboKR;
			else if(this.isSpanish) return StatusBattleEffectAttackComboSP;
			return StatusBattleEffectAttackComboEN;
		}, configurable: true
	},
	StatusBattleEffectAttackComboCocky: {
		get: function() {
			if(this.isJapanese) return StatusBattleEffectAttackComboCockyJP;
			else if(this.isEnglish) return StatusBattleEffectAttackComboCockyEN;
			else if(this.isRussian) return StatusBattleEffectAttackComboCockyRU;
			else if(this.isSChinese) return StatusBattleEffectAttackComboCockySCH;
			else if(this.isTChinese) return StatusBattleEffectAttackComboCockyTCH;
			else if(this.isKorean) return StatusBattleEffectAttackComboCockyKR;
			else if(this.isSpanish) return StatusBattleEffectAttackComboCockySP;
			return StatusBattleEffectAttackComboCockyEN;
		}, configurable: true
	},
	StatusBattleEffectSexComboOne: {
		get: function() {
			if(this.isJapanese) return StatusBattleEffectSexComboOneJP;
			else if(this.isEnglish) return StatusBattleEffectSexComboOneEN;
			else if(this.isRussian) return StatusBattleEffectSexComboOneRU;
			else if(this.isSChinese) return StatusBattleEffectSexComboOneSCH;
			else if(this.isTChinese) return StatusBattleEffectSexComboOneTCH;
			else if(this.isKorean) return StatusBattleEffectSexComboOneKR;
			else if(this.isSpanish) return StatusBattleEffectSexComboOneSP;
			return StatusBattleEffectSexComboOneEN;
		}, configurable: true
	},
	StatusBattleEffectSexComboTwo: {
		get: function() {
			if(this.isJapanese) return StatusBattleEffectSexComboTwoJP;
			else if(this.isEnglish) return StatusBattleEffectSexComboTwoEN;
			else if(this.isRussian) return StatusBattleEffectSexComboTwoRU;
			else if(this.isSChinese) return StatusBattleEffectSexComboTwoSCH;
			else if(this.isTChinese) return StatusBattleEffectSexComboTwoTCH;
			else if(this.isKorean) return StatusBattleEffectSexComboTwoKR;
			else if(this.isSpanish) return StatusBattleEffectSexComboTwoSP;
			return StatusBattleEffectSexComboTwoEN;
		}, configurable: true
	},

	StatusBattleEffectDanceCombo: {
		get: function() {
			if(this.isJapanese) return StatusBattleEffectDanceComboJP;
			else if(this.isEnglish) return StatusBattleEffectDanceComboEN;
			else if(this.isRussian) return StatusBattleEffectDanceComboRU;
			else if(this.isSChinese) return StatusBattleEffectDanceComboSCH;
			else if(this.isTChinese) return StatusBattleEffectDanceComboTCH;
			else if(this.isKorean) return StatusBattleEffectDanceComboKR;
			else if(this.isSpanish) return StatusBattleEffectDanceComboSP;
			return StatusBattleEffectDanceComboEN;
		}, configurable: true
	},


	StateTooltipsRemainingTurnsSingular: {
		get: function() {
			if(this.isJapanese) return StateTooltipsRemainingTurnsSingularJP;
			else if(this.isEnglish) return StateTooltipsRemainingTurnsSingularEN;
			else if(this.isRussian) return StateTooltipsRemainingTurnsSingularRU;
			else if(this.isSChinese) return StateTooltipsRemainingTurnsSingularSCH;
			else if(this.isTChinese) return StateTooltipsRemainingTurnsSingularTCH;
			else if(this.isKorean) return StateTooltipsRemainingTurnsSingularKR;
			else if(this.isSpanish) return StateTooltipsRemainingTurnsSingularSP;
			return StateTooltipsRemainingTurnsSingularEN;
		}, configurable: true
	},
	StateTooltipsRemainingTurnsPlural: {
		get: function() {
			if(this.isJapanese) return StateTooltipsRemainingTurnsPluralJP;
			else if(this.isEnglish) return StateTooltipsRemainingTurnsPluralEN;
			else if(this.isRussian) return StateTooltipsRemainingTurnsPluralRU;
			else if(this.isSChinese) return StateTooltipsRemainingTurnsPluralSCH;
			else if(this.isTChinese) return StateTooltipsRemainingTurnsPluralTCH;
			else if(this.isKorean) return StateTooltipsRemainingTurnsPluralKR;
			else if(this.isSpanish) return StateTooltipsRemainingTurnsPluralSP;
			return StateTooltipsRemainingTurnsPluralEN;
		}, configurable: true
	},

	StateTooltipsDisarmed: {
		get: function() {
			if(this.isJapanese) return StateTooltipsDisarmedJP;
			else if(this.isEnglish) return StateTooltipsDisarmedEN;
			else if(this.isRussian) return StateTooltipsDisarmedRU;
			else if(this.isSChinese) return StateTooltipsDisarmedSCH;
			else if(this.isTChinese) return StateTooltipsDisarmedTCH;
			else if(this.isKorean) return StateTooltipsDisarmedKR;
			else if(this.isSpanish) return StateTooltipsDisarmedSP;
			return StateTooltipsDisarmedEN;
		}, configurable: true
	},
	StateTooltipsOrgasm: {
		get: function() {
			if(this.isJapanese) return StateTooltipsOrgasmJP;
			else if(this.isEnglish) return StateTooltipsOrgasmEN;
			else if(this.isRussian) return StateTooltipsOrgasmRU;
			else if(this.isSChinese) return StateTooltipsOrgasmSCH;
			else if(this.isTChinese) return StateTooltipsOrgasmTCH;
			else if(this.isKorean) return StateTooltipsOrgasmKR;
			else if(this.isSpanish) return StateTooltipsOrgasmSP;
			return StateTooltipsOrgasmEN;
		}, configurable: true
	},
	StateTooltipsSlashStance: {
		get: function() {
			if(this.isJapanese) return StateTooltipsSlashStanceJP;
			else if(this.isEnglish) return StateTooltipsSlashStanceEN;
			else if(this.isRussian) return StateTooltipsSlashStanceRU;
			else if(this.isSChinese) return StateTooltipsSlashStanceSCH;
			else if(this.isTChinese) return StateTooltipsSlashStanceTCH;
			else if(this.isKorean) return StateTooltipsSlashStanceKR;
			else if(this.isSpanish) return StateTooltipsSlashStanceSP;
			return StateTooltipsSlashStanceEN;
		}, configurable: true
	},
	StateTooltipsPierceStance: {
		get: function() {
			if(this.isJapanese) return StateTooltipsPierceStanceJP;
			else if(this.isEnglish) return StateTooltipsPierceStanceEN;
			else if(this.isRussian) return StateTooltipsPierceStanceRU;
			else if(this.isSChinese) return StateTooltipsPierceStanceSCH;
			else if(this.isTChinese) return StateTooltipsPierceStanceTCH;
			else if(this.isKorean) return StateTooltipsPierceStanceKR;
			else if(this.isSpanish) return StateTooltipsPierceStanceSP;
			return StateTooltipsPierceStanceEN;
		}, configurable: true
	},
	StateTooltipsBluntStance: {
		get: function() {
			if(this.isJapanese) return StateTooltipsBluntStanceJP;
			else if(this.isEnglish) return StateTooltipsBluntStanceEN;
			else if(this.isRussian) return StateTooltipsBluntStanceRU;
			else if(this.isSChinese) return StateTooltipsBluntStanceSCH;
			else if(this.isTChinese) return StateTooltipsBluntStanceTCH;
			else if(this.isKorean) return StateTooltipsBluntStanceKR;
			else if(this.isSpanish) return StateTooltipsBluntStanceSP;
			return StateTooltipsBluntStanceEN;
		}, configurable: true
	},
	StateTooltipsHornyZero: {
		get: function() {
			if(this.isJapanese) return StateTooltipsHornyZeroJP;
			else if(this.isEnglish) return StateTooltipsHornyZeroEN;
			else if(this.isRussian) return StateTooltipsHornyZeroRU;
			else if(this.isSChinese) return StateTooltipsHornyZeroSCH;
			else if(this.isTChinese) return StateTooltipsHornyZeroTCH;
			else if(this.isKorean) return StateTooltipsHornyZeroKR;
			else if(this.isSpanish) return StateTooltipsHornyZeroSP;
			return StateTooltipsHornyZeroEN;
		}, configurable: true
	},
	StateTooltipsHornyOne: {
		get: function() {
			if(this.isJapanese) return StateTooltipsHornyOneJP;
			else if(this.isEnglish) return StateTooltipsHornyOneEN;
			else if(this.isRussian) return StateTooltipsHornyOneRU;
			else if(this.isSChinese) return StateTooltipsHornyOneSCH;
			else if(this.isTChinese) return StateTooltipsHornyOneTCH;
			else if(this.isKorean) return StateTooltipsHornyOneKR;
			else if(this.isSpanish) return StateTooltipsHornyOneSP;
			return StateTooltipsHornyOneEN;
		}, configurable: true
	},
	StateTooltipsHornyTwo: {
		get: function() {
			if(this.isJapanese) return StateTooltipsHornyTwoJP;
			else if(this.isEnglish) return StateTooltipsHornyTwoEN;
			else if(this.isRussian) return StateTooltipsHornyTwoRU;
			else if(this.isSChinese) return StateTooltipsHornyTwoSCH;
			else if(this.isTChinese) return StateTooltipsHornyTwoTCH;
			else if(this.isKorean) return StateTooltipsHornyTwoKR;
			else if(this.isSpanish) return StateTooltipsHornyTwoSP;
			return StateTooltipsHornyTwoEN;
		}, configurable: true
	},
	StateTooltipsHornyThree: {
		get: function() {
			if(this.isJapanese) return StateTooltipsHornyThreeJP;
			else if(this.isEnglish) return StateTooltipsHornyThreeEN;
			else if(this.isRussian) return StateTooltipsHornyThreeRU;
			else if(this.isSChinese) return StateTooltipsHornyThreeSCH;
			else if(this.isTChinese) return StateTooltipsHornyThreeTCH;
			else if(this.isKorean) return StateTooltipsHornyThreeKR;
			else if(this.isSpanish) return StateTooltipsHornyThreeSP;
			return StateTooltipsHornyThreeEN;
		}, configurable: true
	},

	StateTooltipsEnemyHorny: {
		get: function() {
			if(this.isJapanese) return StateTooltipsEnemyHornyJP;
			else if(this.isEnglish) return StateTooltipsEnemyHornyEN;
			else if(this.isRussian) return StateTooltipsEnemyHornyRU;
			else if(this.isSChinese) return StateTooltipsEnemyHornySCH;
			else if(this.isTChinese) return StateTooltipsEnemyHornyTCH;
			else if(this.isKorean) return StateTooltipsEnemyHornyKR;
			else if(this.isSpanish) return StateTooltipsEnemyHornySP;
			return StateTooltipsEnemyHornyEN;
		}, configurable: true
	},
	StateTooltipsCool: {
		get: function() {
			if(this.isJapanese) return StateTooltipsCoolJP;
			else if(this.isEnglish) return StateTooltipsCoolEN;
			else if(this.isRussian) return StateTooltipsCoolRU;
			else if(this.isSChinese) return StateTooltipsCoolSCH;
			else if(this.isTChinese) return StateTooltipsCoolTCH;
			else if(this.isKorean) return StateTooltipsCoolKR;
			else if(this.isSpanish) return StateTooltipsCoolSP;
			return StateTooltipsCoolEN;
		}, configurable: true
	},
	StateTooltipsIsWet: {
		get: function() {
			if(this.isJapanese) return StateTooltipsIsWetJP;
			else if(this.isEnglish) return StateTooltipsIsWetEN;
			else if(this.isRussian) return StateTooltipsIsWetRU;
			else if(this.isSChinese) return StateTooltipsIsWetSCH;
			else if(this.isTChinese) return StateTooltipsIsWetTCH;
			else if(this.isKorean) return StateTooltipsIsWetKR;
			else if(this.isSpanish) return StateTooltipsIsWetSP;
			return StateTooltipsIsWetEN;
		}, configurable: true
	},
	StateTooltipsNotWet: {
		get: function() {
			if(this.isJapanese) return StateTooltipsNotWetJP;
			else if(this.isEnglish) return StateTooltipsNotWetEN;
			else if(this.isRussian) return StateTooltipsNotWetRU;
			else if(this.isSChinese) return StateTooltipsNotWetSCH;
			else if(this.isTChinese) return StateTooltipsNotWetTCH;
			else if(this.isKorean) return StateTooltipsNotWetKR;
			else if(this.isSpanish) return StateTooltipsNotWetSP;
			return StateTooltipsNotWetEN;
		}, configurable: true
	},
	StateTooltipsWearingPanties: {
		get: function() {
			if(this.isJapanese) return StateTooltipsWearingPantiesJP;
			else if(this.isEnglish) return StateTooltipsWearingPantiesEN;
			else if(this.isRussian) return StateTooltipsWearingPantiesRU;
			else if(this.isSChinese) return StateTooltipsWearingPantiesSCH;
			else if(this.isTChinese) return StateTooltipsWearingPantiesTCH;
			else if(this.isKorean) return StateTooltipsWearingPantiesKR;
			else if(this.isSpanish) return StateTooltipsWearingPantiesSP;
			return StateTooltipsWearingPantiesEN;
		}, configurable: true
	},
	StateTooltipsNotWearingPanties: {
		get: function() {
			if(this.isJapanese) return StateTooltipsNotWearingPantiesJP;
			else if(this.isEnglish) return StateTooltipsNotWearingPantiesEN;
			else if(this.isRussian) return StateTooltipsNotWearingPantiesRU;
			else if(this.isSChinese) return StateTooltipsNotWearingPantiesSCH;
			else if(this.isTChinese) return StateTooltipsNotWearingPantiesTCH;
			else if(this.isKorean) return StateTooltipsNotWearingPantiesKR;
			else if(this.isSpanish) return StateTooltipsNotWearingPantiesSP;
			return StateTooltipsNotWearingPantiesEN;
		}, configurable: true
	},
	StateTooltipsVirginPublished: {
		get: function() {
			if(this.isJapanese) return StateTooltipsVirginPublishedJP;
			else if(this.isEnglish) return StateTooltipsVirginPublishedEN;
			else if(this.isRussian) return StateTooltipsVirginPublishedRU;
			else if(this.isSChinese) return StateTooltipsVirginPublishedSCH;
			else if(this.isTChinese) return StateTooltipsVirginPublishedTCH;
			else if(this.isKorean) return StateTooltipsVirginPublishedKR;
			else if(this.isSpanish) return StateTooltipsVirginPublishedSP;
			return StateTooltipsVirginPublishedEN;
		}, configurable: true
	},
	StateTooltipsVirginHigh: {
		get: function() {
			if(this.isJapanese) return StateTooltipsVirginHighJP;
			else if(this.isEnglish) return StateTooltipsVirginHighEN;
			else if(this.isRussian) return StateTooltipsVirginHighRU;
			else if(this.isSChinese) return StateTooltipsVirginHighSCH;
			else if(this.isTChinese) return StateTooltipsVirginHighTCH;
			else if(this.isKorean) return StateTooltipsVirginHighKR;
			else if(this.isSpanish) return StateTooltipsVirginHighSP;
			return StateTooltipsVirginHighEN;
		}, configurable: true
	},
	StateTooltipsVirginMed: {
		get: function() {
			if(this.isJapanese) return StateTooltipsVirginMedJP;
			else if(this.isEnglish) return StateTooltipsVirginMedEN;
			else if(this.isRussian) return StateTooltipsVirginMedRU;
			else if(this.isSChinese) return StateTooltipsVirginMedSCH;
			else if(this.isTChinese) return StateTooltipsVirginMedTCH;
			else if(this.isKorean) return StateTooltipsVirginMedKR;
			else if(this.isSpanish) return StateTooltipsVirginMedSP;
			return StateTooltipsVirginMedEN;
		}, configurable: true
	},
	StateTooltipsVirginLow: {
		get: function() {
			if(this.isJapanese) return StateTooltipsVirginLowJP;
			else if(this.isEnglish) return StateTooltipsVirginLowEN;
			else if(this.isRussian) return StateTooltipsVirginLowRU;
			else if(this.isSChinese) return StateTooltipsVirginLowSCH;
			else if(this.isTChinese) return StateTooltipsVirginLowTCH;
			else if(this.isKorean) return StateTooltipsVirginLowKR;
			else if(this.isSpanish) return StateTooltipsVirginLowSP;
			return StateTooltipsVirginLowEN;
		}, configurable: true
	},
	StateTooltipsConfidentZero: {
		get: function() {
			if(this.isJapanese) return StateTooltipsConfidentZeroJP;
			else if(this.isEnglish) return StateTooltipsConfidentZeroEN;
			else if(this.isRussian) return StateTooltipsConfidentZeroRU;
			else if(this.isSChinese) return StateTooltipsConfidentZeroSCH;
			else if(this.isTChinese) return StateTooltipsConfidentZeroTCH;
			else if(this.isKorean) return StateTooltipsConfidentZeroKR;
			else if(this.isSpanish) return StateTooltipsConfidentZeroSP;
			return StateTooltipsConfidentZeroEN;
		}, configurable: true
	},
	StateTooltipsConfidentOne: {
		get: function() {
			if(this.isJapanese) return StateTooltipsConfidentOneJP;
			else if(this.isEnglish) return StateTooltipsConfidentOneEN;
			else if(this.isRussian) return StateTooltipsConfidentOneRU;
			else if(this.isSChinese) return StateTooltipsConfidentOneSCH;
			else if(this.isTChinese) return StateTooltipsConfidentOneTCH;
			else if(this.isKorean) return StateTooltipsConfidentOneKR;
			else if(this.isSpanish) return StateTooltipsConfidentOneSP;
			return StateTooltipsConfidentOneEN;
		}, configurable: true
	},
	StateTooltipsFrustrated: {
		get: function() {
			if(this.isJapanese) return StateTooltipsFrustratedJP;
			else if(this.isEnglish) return StateTooltipsFrustratedEN;
			else if(this.isRussian) return StateTooltipsFrustratedRU;
			else if(this.isSChinese) return StateTooltipsFrustratedSCH;
			else if(this.isTChinese) return StateTooltipsFrustratedTCH;
			else if(this.isKorean) return StateTooltipsFrustratedKR;
			else if(this.isSpanish) return StateTooltipsFrustratedSP;
			return StateTooltipsFrustratedEN;
		}, configurable: true
	},
	StateTooltipsOffBalanced: {
		get: function() {
			if(this.isJapanese) return StateTooltipsOffBalancedJP;
			else if(this.isEnglish) return StateTooltipsOffBalancedEN;
			else if(this.isRussian) return StateTooltipsOffBalancedRU;
			else if(this.isSChinese) return StateTooltipsOffBalancedSCH;
			else if(this.isTChinese) return StateTooltipsOffBalancedTCH;
			else if(this.isKorean) return StateTooltipsOffBalancedKR;
			else if(this.isSpanish) return StateTooltipsOffBalancedSP;
			return StateTooltipsOffBalancedEN;
		}, configurable: true
	},
	StateTooltipsWeaken: {
		get: function() {
			if(this.isJapanese) return StateTooltipsWeakenJP;
			else if(this.isEnglish) return StateTooltipsWeakenEN;
			else if(this.isRussian) return StateTooltipsWeakenRU;
			else if(this.isSChinese) return StateTooltipsWeakenSCH;
			else if(this.isTChinese) return StateTooltipsWeakenTCH;
			else if(this.isKorean) return StateTooltipsWeakenKR;
			else if(this.isSpanish) return StateTooltipsWeakenSP;
			return StateTooltipsWeakenEN;
		}, configurable: true
	},
	StateTooltipsDizzy: {
		get: function() {
			if(this.isJapanese) return StateTooltipsDizzyJP;
			else if(this.isEnglish) return StateTooltipsDizzyEN;
			else if(this.isRussian) return StateTooltipsDizzyRU;
			else if(this.isSChinese) return StateTooltipsDizzySCH;
			else if(this.isTChinese) return StateTooltipsDizzyTCH;
			else if(this.isKorean) return StateTooltipsDizzyKR;
			else if(this.isSpanish) return StateTooltipsDizzySP;
			return StateTooltipsDizzyEN;
		}, configurable: true
	},
	StateTooltipsSlow: {
		get: function() {
			if(this.isJapanese) return StateTooltipsSlowJP;
			else if(this.isEnglish) return StateTooltipsSlowEN;
			else if(this.isRussian) return StateTooltipsSlowRU;
			else if(this.isSChinese) return StateTooltipsSlowSCH;
			else if(this.isTChinese) return StateTooltipsSlowTCH;
			else if(this.isKorean) return StateTooltipsSlowKR;
			else if(this.isSpanish) return StateTooltipsSlowSP;
			return StateTooltipsSlowEN;
		}, configurable: true
	},
	StateTooltipsVulnerable: {
		get: function() {
			if(this.isJapanese) return StateTooltipsVulnerableJP;
			else if(this.isEnglish) return StateTooltipsVulnerableEN;
			else if(this.isRussian) return StateTooltipsVulnerableRU;
			else if(this.isSChinese) return StateTooltipsVulnerableSCH;
			else if(this.isTChinese) return StateTooltipsVulnerableTCH;
			else if(this.isKorean) return StateTooltipsVulnerableKR;
			else if(this.isSpanish) return StateTooltipsVulnerableSP;
			return StateTooltipsVulnerableEN;
		}, configurable: true
	},
	StateTooltipsPoison: {
		get: function() {
			if(this.isJapanese) return StateTooltipsPoisonJP;
			else if(this.isEnglish) return StateTooltipsPoisonEN;
			else if(this.isRussian) return StateTooltipsPoisonRU;
			else if(this.isSChinese) return StateTooltipsPoisonSCH;
			else if(this.isTChinese) return StateTooltipsPoisonTCH;
			else if(this.isKorean) return StateTooltipsPoisonKR;
			else if(this.isSpanish) return StateTooltipsPoisonSP;
			return StateTooltipsPoisonEN;
		}, configurable: true
	},
	StateTooltipsExposeWeakness: {
		get: function() {
			if(this.isJapanese) return StateTooltipsExposeWeaknessJP;
			else if(this.isEnglish) return StateTooltipsExposeWeaknessEN;
			else if(this.isRussian) return StateTooltipsExposeWeaknessRU;
			else if(this.isSChinese) return StateTooltipsExposeWeaknessSCH;
			else if(this.isTChinese) return StateTooltipsExposeWeaknessTCH;
			else if(this.isKorean) return StateTooltipsExposeWeaknessKR;
			else if(this.isSpanish) return StateTooltipsExposeWeaknessSP;
			return StateTooltipsExposeWeaknessEN;
		}, configurable: true
	},
	StateTooltipsStunned: {
		get: function() {
			if(this.isJapanese) return StateTooltipsStunnedJP;
			else if(this.isEnglish) return StateTooltipsStunnedEN;
			else if(this.isRussian) return StateTooltipsStunnedRU;
			else if(this.isSChinese) return StateTooltipsStunnedSCH;
			else if(this.isTChinese) return StateTooltipsStunnedTCH;
			else if(this.isKorean) return StateTooltipsStunnedKR;
			else if(this.isSpanish) return StateTooltipsStunnedSP;
			return StateTooltipsStunnedEN;
		}, configurable: true
	},
	StateTooltipsEnemyPoseMaster: {
		get: function() {
			if(this.isJapanese) return StateTooltipsEnemyPoseMasterJP;
			else if(this.isEnglish) return StateTooltipsEnemyPoseMasterEN;
			else if(this.isRussian) return StateTooltipsEnemyPoseMasterRU;
			else if(this.isSChinese) return StateTooltipsEnemyPoseMasterSCH;
			else if(this.isTChinese) return StateTooltipsEnemyPoseMasterTCH;
			else if(this.isKorean) return StateTooltipsEnemyPoseMasterKR;
			else if(this.isSpanish) return StateTooltipsEnemyPoseMasterSP;
			return StateTooltipsEnemyPoseMasterEN;
		}, configurable: true
	},
	StateTooltipsActorAttackCombo: {
		get: function() {
			if(this.isJapanese) return StateTooltipsActorAttackComboJP;
			else if(this.isEnglish) return StateTooltipsActorAttackComboEN;
			else if(this.isRussian) return StateTooltipsActorAttackComboRU;
			else if(this.isSChinese) return StateTooltipsActorAttackComboSCH;
			else if(this.isTChinese) return StateTooltipsActorAttackComboTCH;
			else if(this.isKorean) return StateTooltipsActorAttackComboKR;
			else if(this.isSpanish) return StateTooltipsActorAttackComboSP;
			return StateTooltipsActorAttackComboEN;
		}, configurable: true
	},
	StateTooltipsActorAttackComboCocky: {
		get: function() {
			if(this.isJapanese) return StateTooltipsActorAttackComboCockyJP;
			else if(this.isEnglish) return StateTooltipsActorAttackComboCockyEN;
			else if(this.isRussian) return StateTooltipsActorAttackComboCockyRU;
			else if(this.isSChinese) return StateTooltipsActorAttackComboCockySCH;
			else if(this.isTChinese) return StateTooltipsActorAttackComboCockyTCH;
			else if(this.isKorean) return StateTooltipsActorAttackComboCockyKR;
			else if(this.isSpanish) return StateTooltipsActorAttackComboCockySP;
			return StateTooltipsActorAttackComboCockyEN;
		}, configurable: true
	},
	StateTooltipsActorSexCombo: {
		get: function() {
			if(this.isJapanese) return StateTooltipsActorSexComboJP;
			else if(this.isEnglish) return StateTooltipsActorSexComboEN;
			else if(this.isRussian) return StateTooltipsActorSexComboRU;
			else if(this.isSChinese) return StateTooltipsActorSexComboSCH;
			else if(this.isTChinese) return StateTooltipsActorSexComboTCH;
			else if(this.isKorean) return StateTooltipsActorSexComboKR;
			else if(this.isSpanish) return StateTooltipsActorSexComboSP;
			return StateTooltipsActorSexComboEN;
		}, configurable: true
	},
	StateTooltipsEnemyPosePussySex: {
		get: function() {
			if(this.isJapanese) return StateTooltipsEnemyPosePussySexJP;
			else if(this.isEnglish) return StateTooltipsEnemyPosePussySexEN;
			else if(this.isRussian) return StateTooltipsEnemyPosePussySexRU;
			else if(this.isSChinese) return StateTooltipsEnemyPosePussySexSCH;
			else if(this.isTChinese) return StateTooltipsEnemyPosePussySexTCH;
			else if(this.isKorean) return StateTooltipsEnemyPosePussySexKR;
			else if(this.isSpanish) return StateTooltipsEnemyPosePussySexSP;
			return StateTooltipsEnemyPosePussySexEN;
		}, configurable: true
	},
	StateTooltipsEnemyPoseCunnilingus: {
		get: function() {
			if(this.isJapanese) return StateTooltipsEnemyPoseCunnilingusJP;
			else if(this.isEnglish) return StateTooltipsEnemyPoseCunnilingusEN;
			else if(this.isRussian) return StateTooltipsEnemyPoseCunnilingusRU;
			else if(this.isSChinese) return StateTooltipsEnemyPoseCunnilingusSCH;
			else if(this.isTChinese) return StateTooltipsEnemyPoseCunnilingusTCH;
			else if(this.isKorean) return StateTooltipsEnemyPoseCunnilingusKR;
			else if(this.isSpanish) return StateTooltipsEnemyPoseCunnilingusSP;
			return StateTooltipsEnemyPoseCunnilingusEN;
		}, configurable: true
	},
	StateTooltipsEnemyPoseAnalSex: {
		get: function() {
			if(this.isJapanese) return StateTooltipsEnemyPoseAnalSexJP;
			else if(this.isEnglish) return StateTooltipsEnemyPoseAnalSexEN;
			else if(this.isRussian) return StateTooltipsEnemyPoseAnalSexRU;
			else if(this.isSChinese) return StateTooltipsEnemyPoseAnalSexSCH;
			else if(this.isTChinese) return StateTooltipsEnemyPoseAnalSexTCH;
			else if(this.isKorean) return StateTooltipsEnemyPoseAnalSexKR;
			else if(this.isSpanish) return StateTooltipsEnemyPoseAnalSexSP;
			return StateTooltipsEnemyPoseAnalSexEN;
		}, configurable: true
	},
	StateTooltipsEnemyPosePaizuri: {
		get: function() {
			if(this.isJapanese) return StateTooltipsEnemyPosePaizuriJP;
			else if(this.isEnglish) return StateTooltipsEnemyPosePaizuriEN;
			else if(this.isRussian) return StateTooltipsEnemyPosePaizuriRU;
			else if(this.isSChinese) return StateTooltipsEnemyPosePaizuriSCH;
			else if(this.isTChinese) return StateTooltipsEnemyPosePaizuriTCH;
			else if(this.isKorean) return StateTooltipsEnemyPosePaizuriKR;
			else if(this.isSpanish) return StateTooltipsEnemyPosePaizuriSP;
			return StateTooltipsEnemyPosePaizuriEN;
		}, configurable: true
	},
	StateTooltipsEnemyPoseHandjob: {
		get: function() {
			if(this.isJapanese) return StateTooltipsEnemyPoseHandjobJP;
			else if(this.isEnglish) return StateTooltipsEnemyPoseHandjobEN;
			else if(this.isRussian) return StateTooltipsEnemyPoseHandjobRU;
			else if(this.isSChinese) return StateTooltipsEnemyPoseHandjobSCH;
			else if(this.isTChinese) return StateTooltipsEnemyPoseHandjobTCH;
			else if(this.isKorean) return StateTooltipsEnemyPoseHandjobKR;
			else if(this.isSpanish) return StateTooltipsEnemyPoseHandjobSP;
			return StateTooltipsEnemyPoseHandjobEN;
		}, configurable: true
	},
	StateTooltipsEnemyPoseBlowjob: {
		get: function() {
			if(this.isJapanese) return StateTooltipsEnemyPoseBlowjobJP;
			else if(this.isEnglish) return StateTooltipsEnemyPoseBlowjobEN;
			else if(this.isRussian) return StateTooltipsEnemyPoseBlowjobRU;
			else if(this.isSChinese) return StateTooltipsEnemyPoseBlowjobSCH;
			else if(this.isTChinese) return StateTooltipsEnemyPoseBlowjobTCH;
			else if(this.isKorean) return StateTooltipsEnemyPoseBlowjobKR;
			else if(this.isSpanish) return StateTooltipsEnemyPoseBlowjobSP;
			return StateTooltipsEnemyPoseBlowjobEN;
		}, configurable: true
	},
	StateTooltipsEnemyPoseFootjob: {
		get: function() {
			if(this.isJapanese) return StateTooltipsEnemyPoseFootjobJP;
			else if(this.isEnglish) return StateTooltipsEnemyPoseFootjobEN;
			else if(this.isRussian) return StateTooltipsEnemyPoseFootjobRU;
			else if(this.isSChinese) return StateTooltipsEnemyPoseFootjobSCH;
			else if(this.isTChinese) return StateTooltipsEnemyPoseFootjobTCH;
			else if(this.isKorean) return StateTooltipsEnemyPoseFootjobKR;
			else if(this.isSpanish) return StateTooltipsEnemyPoseFootjobSP;
			return StateTooltipsEnemyPoseFootjobEN;
		}, configurable: true
	},
	StateTooltipsEnemyPoseRimjob: {
		get: function() {
			if(this.isJapanese) return StateTooltipsEnemyPoseRimjobJP;
			else if(this.isEnglish) return StateTooltipsEnemyPoseRimjobEN;
			else if(this.isRussian) return StateTooltipsEnemyPoseRimjobRU;
			else if(this.isSChinese) return StateTooltipsEnemyPoseRimjobSCH;
			else if(this.isTChinese) return StateTooltipsEnemyPoseRimjobTCH;
			else if(this.isKorean) return StateTooltipsEnemyPoseRimjobKR;
			else if(this.isSpanish) return StateTooltipsEnemyPoseRimjobSP;
			return StateTooltipsEnemyPoseRimjobEN;
		}, configurable: true
	},
	StateTooltipsEnemyKissed: {
		get: function() {
			if(this.isJapanese) return StateTooltipsEnemyKissedJP;
			else if(this.isEnglish) return StateTooltipsEnemyKissedEN;
			else if(this.isRussian) return StateTooltipsEnemyKissedRU;
			else if(this.isSChinese) return StateTooltipsEnemyKissedSCH;
			else if(this.isTChinese) return StateTooltipsEnemyKissedTCH;
			else if(this.isKorean) return StateTooltipsEnemyKissedKR;
			else if(this.isSpanish) return StateTooltipsEnemyKissedSP;
			return StateTooltipsEnemyKissedEN;
		}, configurable: true
	},
	StateTooltipsAroused: {
		get: function() {
			if(this.isJapanese) return StateTooltipsArousedJP;
			else if(this.isEnglish) return StateTooltipsArousedEN;
			else if(this.isRussian) return StateTooltipsArousedRU;
			else if(this.isSChinese) return StateTooltipsArousedSCH;
			else if(this.isTChinese) return StateTooltipsArousedTCH;
			else if(this.isKorean) return StateTooltipsArousedKR;
			else if(this.isSpanish) return StateTooltipsArousedSP;
			return StateTooltipsArousedEN;
		}, configurable: true
	},
	StateTooltipsCautiousStance: {
		get: function() {
			if(this.isJapanese) return StateTooltipsCautiousStanceJP;
			else if(this.isEnglish) return StateTooltipsCautiousStanceEN;
			else if(this.isRussian) return StateTooltipsCautiousStanceRU;
			else if(this.isSChinese) return StateTooltipsCautiousStanceSCH;
			else if(this.isTChinese) return StateTooltipsCautiousStanceTCH;
			else if(this.isKorean) return StateTooltipsCautiousStanceKR;
			else if(this.isSpanish) return StateTooltipsCautiousStanceSP;
			return StateTooltipsCautiousStanceEN;
		}, configurable: true
	},
	StateTooltipsDefensiveStance: {
		get: function() {
			if(this.isJapanese) return StateTooltipsDefensiveStanceJP;
			else if(this.isEnglish) return StateTooltipsDefensiveStanceEN;
			else if(this.isRussian) return StateTooltipsDefensiveStanceRU;
			else if(this.isSChinese) return StateTooltipsDefensiveStanceSCH;
			else if(this.isTChinese) return StateTooltipsDefensiveStanceTCH;
			else if(this.isKorean) return StateTooltipsDefensiveStanceKR;
			else if(this.isSpanish) return StateTooltipsDefensiveStanceSP;
			return StateTooltipsDefensiveStanceEN;
		}, configurable: true
	},
	StateTooltipsCounterStance: {
		get: function() {
			if(this.isJapanese) return StateTooltipsCounterStanceJP;
			else if(this.isEnglish) return StateTooltipsCounterStanceEN;
			else if(this.isRussian) return StateTooltipsCounterStanceRU;
			else if(this.isSChinese) return StateTooltipsCounterStanceSCH;
			else if(this.isTChinese) return StateTooltipsCounterStanceTCH;
			else if(this.isKorean) return StateTooltipsCounterStanceKR;
			else if(this.isSpanish) return StateTooltipsCounterStanceSP;
			return StateTooltipsCounterStanceEN;
		}, configurable: true
	},
	StateTooltipsSecretaryStance: {
		get: function() {
			if(this.isJapanese) return StateTooltipsSecretaryStanceJP;
			else if(this.isEnglish) return StateTooltipsSecretaryStanceEN;
			else if(this.isRussian) return StateTooltipsSecretaryStanceRU;
			else if(this.isSChinese) return StateTooltipsSecretaryStanceSCH;
			else if(this.isTChinese) return StateTooltipsSecretaryStanceTCH;
			else if(this.isKorean) return StateTooltipsSecretaryStanceKR;
			else if(this.isSpanish) return StateTooltipsSecretaryStanceSP;
			return StateTooltipsSecretaryStanceEN;
		}, configurable: true
	},
	StateTooltipsLadyStance: {
		get: function() {
			if(this.isJapanese) return StateTooltipsLadyStanceJP;
			else if(this.isEnglish) return StateTooltipsLadyStanceEN;
			else if(this.isRussian) return StateTooltipsLadyStanceRU;
			else if(this.isSChinese) return StateTooltipsLadyStanceSCH;
			else if(this.isTChinese) return StateTooltipsLadyStanceTCH;
			else if(this.isKorean) return StateTooltipsLadyStanceKR;
			else if(this.isSpanish) return StateTooltipsLadyStanceSP;
			return StateTooltipsLadyStanceEN;
		}, configurable: true
	},
	StateTooltipsPleasureStance: {
		get: function() {
			if(this.isJapanese) return StateTooltipsPleasureStanceJP;
			else if(this.isEnglish) return StateTooltipsPleasureStanceEN;
			else if(this.isRussian) return StateTooltipsPleasureStanceRU;
			else if(this.isSChinese) return StateTooltipsPleasureStanceSCH;
			else if(this.isTChinese) return StateTooltipsPleasureStanceTCH;
			else if(this.isKorean) return StateTooltipsPleasureStanceKR;
			else if(this.isSpanish) return StateTooltipsPleasureStanceSP;
			return StateTooltipsPleasureStanceEN;
		}, configurable: true
	},
	StateTooltipsWillpowerKiOne: {
		get: function() {
			if(this.isJapanese) return StateTooltipsWillpowerKiOneJP;
			else if(this.isEnglish) return StateTooltipsWillpowerKiOneEN;
			else if(this.isRussian) return StateTooltipsWillpowerKiOneRU;
			else if(this.isSChinese) return StateTooltipsWillpowerKiOneSCH;
			else if(this.isTChinese) return StateTooltipsWillpowerKiOneTCH;
			else if(this.isKorean) return StateTooltipsWillpowerKiOneKR;
			else if(this.isSpanish) return StateTooltipsWillpowerKiOneSP;
			return StateTooltipsWillpowerKiOneEN;
		}, configurable: true
	},
	StateTooltipsWillpowerKiTwo: {
		get: function() {
			if(this.isJapanese) return StateTooltipsWillpowerKiTwoJP;
			else if(this.isEnglish) return StateTooltipsWillpowerKiTwoEN;
			else if(this.isRussian) return StateTooltipsWillpowerKiTwoRU;
			else if(this.isSChinese) return StateTooltipsWillpowerKiTwoSCH;
			else if(this.isTChinese) return StateTooltipsWillpowerKiTwoTCH;
			else if(this.isKorean) return StateTooltipsWillpowerKiTwoKR;
			else if(this.isSpanish) return StateTooltipsWillpowerKiTwoSP;
			return StateTooltipsWillpowerKiTwoEN;
		}, configurable: true
	},
	StateTooltipsWillpowerFocusOne: {
		get: function() {
			if(this.isJapanese) return StateTooltipsWillpowerFocusOneJP;
			else if(this.isEnglish) return StateTooltipsWillpowerFocusOneEN;
			else if(this.isRussian) return StateTooltipsWillpowerFocusOneRU;
			else if(this.isSChinese) return StateTooltipsWillpowerFocusOneSCH;
			else if(this.isTChinese) return StateTooltipsWillpowerFocusOneTCH;
			else if(this.isKorean) return StateTooltipsWillpowerFocusOneKR;
			else if(this.isSpanish) return StateTooltipsWillpowerFocusOneSP;
			return StateTooltipsWillpowerFocusOneEN;
		}, configurable: true
	},
	StateTooltipsWillpowerFocusTwo: {
		get: function() {
			if(this.isJapanese) return StateTooltipsWillpowerFocusTwoJP;
			else if(this.isEnglish) return StateTooltipsWillpowerFocusTwoEN;
			else if(this.isRussian) return StateTooltipsWillpowerFocusTwoRU;
			else if(this.isSChinese) return StateTooltipsWillpowerFocusTwoSCH;
			else if(this.isTChinese) return StateTooltipsWillpowerFocusTwoTCH;
			else if(this.isKorean) return StateTooltipsWillpowerFocusTwoKR;
			else if(this.isSpanish) return StateTooltipsWillpowerFocusTwoSP;
			return StateTooltipsWillpowerFocusTwoEN;
		}, configurable: true
	},
	StateTooltipsWillpowerEyeOfTheMindOne: {
		get: function() {
			if(this.isJapanese) return StateTooltipsWillpowerEyeOfTheMindOneJP;
			else if(this.isEnglish) return StateTooltipsWillpowerEyeOfTheMindOneEN;
			else if(this.isRussian) return StateTooltipsWillpowerEyeOfTheMindOneRU;
			else if(this.isSChinese) return StateTooltipsWillpowerEyeOfTheMindOneSCH;
			else if(this.isTChinese) return StateTooltipsWillpowerEyeOfTheMindOneTCH;
			else if(this.isKorean) return StateTooltipsWillpowerEyeOfTheMindOneKR;
			else if(this.isSpanish) return StateTooltipsWillpowerEyeOfTheMindOneSP;
			return StateTooltipsWillpowerEyeOfTheMindOneEN;
		}, configurable: true
	},
	StateTooltipsWillpowerEyeOfTheMindTwo: {
		get: function() {
			if(this.isJapanese) return StateTooltipsWillpowerEyeOfTheMindTwoJP;
			else if(this.isEnglish) return StateTooltipsWillpowerEyeOfTheMindTwoEN;
			else if(this.isRussian) return StateTooltipsWillpowerEyeOfTheMindTwoRU;
			else if(this.isSChinese) return StateTooltipsWillpowerEyeOfTheMindTwoSCH;
			else if(this.isTChinese) return StateTooltipsWillpowerEyeOfTheMindTwoTCH;
			else if(this.isKorean) return StateTooltipsWillpowerEyeOfTheMindTwoKR;
			else if(this.isSpanish) return StateTooltipsWillpowerEyeOfTheMindTwoSP;
			return StateTooltipsWillpowerEyeOfTheMindTwoEN;
		}, configurable: true
	},
	StateTooltipsWillpowerSeeNoEvil: {
		get: function() {
			if(this.isJapanese) return StateTooltipsWillpowerSeeNoEvilJP;
			else if(this.isEnglish) return StateTooltipsWillpowerSeeNoEvilEN;
			else if(this.isRussian) return StateTooltipsWillpowerSeeNoEvilRU;
			else if(this.isSChinese) return StateTooltipsWillpowerSeeNoEvilSCH;
			else if(this.isTChinese) return StateTooltipsWillpowerSeeNoEvilTCH;
			else if(this.isKorean) return StateTooltipsWillpowerSeeNoEvilKR;
			else if(this.isSpanish) return StateTooltipsWillpowerSeeNoEvilSP;
			return StateTooltipsWillpowerSeeNoEvilEN;
		}, configurable: true
	},
	StateTooltipsWillpowerHearNoEvil: {
		get: function() {
			if(this.isJapanese) return StateTooltipsWillpowerHearNoEvilJP;
			else if(this.isEnglish) return StateTooltipsWillpowerHearNoEvilEN;
			else if(this.isRussian) return StateTooltipsWillpowerHearNoEvilRU;
			else if(this.isSChinese) return StateTooltipsWillpowerHearNoEvilSCH;
			else if(this.isTChinese) return StateTooltipsWillpowerHearNoEvilTCH;
			else if(this.isKorean) return StateTooltipsWillpowerHearNoEvilKR;
			else if(this.isSpanish) return StateTooltipsWillpowerHearNoEvilSP;
			return StateTooltipsWillpowerHearNoEvilEN;
		}, configurable: true
	},
	StateTooltipsWillpowerRealityMarble: {
		get: function() {
			if(this.isJapanese) return StateTooltipsWillpowerRealityMarbleJP;
			else if(this.isEnglish) return StateTooltipsWillpowerRealityMarbleEN;
			else if(this.isRussian) return StateTooltipsWillpowerRealityMarbleRU;
			else if(this.isSChinese) return StateTooltipsWillpowerRealityMarbleSCH;
			else if(this.isTChinese) return StateTooltipsWillpowerRealityMarbleTCH;
			else if(this.isKorean) return StateTooltipsWillpowerRealityMarbleKR;
			else if(this.isSpanish) return StateTooltipsWillpowerRealityMarbleSP;
			return StateTooltipsWillpowerRealityMarbleEN;
		}, configurable: true
	},
	StateTooltipsWillpowerResistOrgasm: {
		get: function() {
			if(this.isJapanese) return StateTooltipsWillpowerResistOrgasmJP;
			else if(this.isEnglish) return StateTooltipsWillpowerResistOrgasmEN;
			else if(this.isRussian) return StateTooltipsWillpowerResistOrgasmRU;
			else if(this.isSChinese) return StateTooltipsWillpowerResistOrgasmSCH;
			else if(this.isTChinese) return StateTooltipsWillpowerResistOrgasmTCH;
			else if(this.isKorean) return StateTooltipsWillpowerResistOrgasmKR;
			else if(this.isSpanish) return StateTooltipsWillpowerResistOrgasmSP;
			return StateTooltipsWillpowerResistOrgasmEN;
		}, configurable: true
	},
	StateTooltipsWillpowerEdgingControlKarryn: {
		get: function() {
			if(this.isJapanese) return StateTooltipsWillpowerEdgingControlKarrynJP;
			else if(this.isEnglish) return StateTooltipsWillpowerEdgingControlKarrynEN;
			else if(this.isRussian) return StateTooltipsWillpowerEdgingControlKarrynRU;
			else if(this.isSChinese) return StateTooltipsWillpowerEdgingControlKarrynSCH;
			else if(this.isTChinese) return StateTooltipsWillpowerEdgingControlKarrynTCH;
			else if(this.isKorean) return StateTooltipsWillpowerEdgingControlKarrynKR;
			else if(this.isSpanish) return StateTooltipsWillpowerEdgingControlKarrynSP;
			return StateTooltipsWillpowerEdgingControlKarrynEN;
		}, configurable: true
	},
	StateTooltipsWillpowerEdgingControlEnemy: {
		get: function() {
			if(this.isJapanese) return StateTooltipsWillpowerEdgingControlEnemyJP;
			else if(this.isEnglish) return StateTooltipsWillpowerEdgingControlEnemyEN;
			else if(this.isRussian) return StateTooltipsWillpowerEdgingControlEnemyRU;
			else if(this.isSChinese) return StateTooltipsWillpowerEdgingControlEnemySCH;
			else if(this.isTChinese) return StateTooltipsWillpowerEdgingControlEnemyTCH;
			else if(this.isKorean) return StateTooltipsWillpowerEdgingControlEnemyKR;
			else if(this.isSpanish) return StateTooltipsWillpowerEdgingControlEnemySP;
			return StateTooltipsWillpowerEdgingControlEnemyEN;
		}, configurable: true
	},
	StateTooltipsBonusPierceDamage: {
		get: function() {
			if(this.isJapanese) return StateTooltipsBonusPierceDamageJP;
			else if(this.isEnglish) return StateTooltipsBonusPierceDamageEN;
			else if(this.isRussian) return StateTooltipsBonusPierceDamageRU;
			else if(this.isSChinese) return StateTooltipsBonusPierceDamageSCH;
			else if(this.isTChinese) return StateTooltipsBonusPierceDamageTCH;
			else if(this.isKorean) return StateTooltipsBonusPierceDamageKR;
			else if(this.isSpanish) return StateTooltipsBonusPierceDamageSP;
			return StateTooltipsBonusPierceDamageEN;
		}, configurable: true
	},
	StateTooltipsBonusSlashDamage: {
		get: function() {
			if(this.isJapanese) return StateTooltipsBonusSlashDamageJP;
			else if(this.isEnglish) return StateTooltipsBonusSlashDamageEN;
			else if(this.isRussian) return StateTooltipsBonusSlashDamageRU;
			else if(this.isSChinese) return StateTooltipsBonusSlashDamageSCH;
			else if(this.isTChinese) return StateTooltipsBonusSlashDamageTCH;
			else if(this.isKorean) return StateTooltipsBonusSlashDamageKR;
			else if(this.isSpanish) return StateTooltipsBonusSlashDamageSP;
			return StateTooltipsBonusSlashDamageEN;
		}, configurable: true
	},
	StateTooltipsBonusBluntDamage: {
		get: function() {
			if(this.isJapanese) return StateTooltipsBonusBluntDamageJP;
			else if(this.isEnglish) return StateTooltipsBonusBluntDamageEN;
			else if(this.isRussian) return StateTooltipsBonusBluntDamageRU;
			else if(this.isSChinese) return StateTooltipsBonusBluntDamageSCH;
			else if(this.isTChinese) return StateTooltipsBonusBluntDamageTCH;
			else if(this.isKorean) return StateTooltipsBonusBluntDamageKR;
			else if(this.isSpanish) return StateTooltipsBonusBluntDamageSP;
			return StateTooltipsBonusBluntDamageEN;
		}, configurable: true
	},
	StateTooltipsEjaculationStunned: {
		get: function() {
			if(this.isJapanese) return StateTooltipsEjaculationStunnedJP;
			else if(this.isEnglish) return StateTooltipsEjaculationStunnedEN;
			else if(this.isRussian) return StateTooltipsEjaculationStunnedRU;
			else if(this.isSChinese) return StateTooltipsEjaculationStunnedSCH;
			else if(this.isTChinese) return StateTooltipsEjaculationStunnedTCH;
			else if(this.isKorean) return StateTooltipsEjaculationStunnedKR;
			else if(this.isSpanish) return StateTooltipsEjaculationStunnedSP;
			return StateTooltipsEjaculationStunnedEN;
		}, configurable: true
	},
	StateTooltipsSlimeRegenNormal: {
		get: function() {
			if(this.isJapanese) return StateTooltipsSlimeRegenNormalJP;
			else if(this.isEnglish) return StateTooltipsSlimeRegenNormalEN;
			else if(this.isRussian) return StateTooltipsSlimeRegenNormalRU;
			else if(this.isSChinese) return StateTooltipsSlimeRegenNormalSCH;
			else if(this.isTChinese) return StateTooltipsSlimeRegenNormalTCH;
			else if(this.isKorean) return StateTooltipsSlimeRegenNormalKR;
			else if(this.isSpanish) return StateTooltipsSlimeRegenNormalSP;
			return StateTooltipsSlimeRegenNormalEN;
		}, configurable: true
	},
	StateTooltipsSlimeRegenFourth: {
		get: function() {
			if(this.isJapanese) return StateTooltipsSlimeRegenFourthJP;
			else if(this.isEnglish) return StateTooltipsSlimeRegenFourthEN;
			else if(this.isRussian) return StateTooltipsSlimeRegenFourthRU;
			else if(this.isSChinese) return StateTooltipsSlimeRegenFourthSCH;
			else if(this.isTChinese) return StateTooltipsSlimeRegenFourthTCH;
			else if(this.isKorean) return StateTooltipsSlimeRegenFourthKR;
			else if(this.isSpanish) return StateTooltipsSlimeRegenFourthSP;
			return StateTooltipsSlimeRegenFourthEN;
		}, configurable: true
	},
	StateTooltipsOrcDefensivePresence: {
		get: function() {
			if(this.isJapanese) return StateTooltipsOrcDefensivePresenceJP;
			else if(this.isEnglish) return StateTooltipsOrcDefensivePresenceEN;
			else if(this.isRussian) return StateTooltipsOrcDefensivePresenceRU;
			else if(this.isSChinese) return StateTooltipsOrcDefensivePresenceSCH;
			else if(this.isTChinese) return StateTooltipsOrcDefensivePresenceTCH;
			else if(this.isKorean) return StateTooltipsOrcDefensivePresenceKR;
			else if(this.isSpanish) return StateTooltipsOrcDefensivePresenceSP;
			return StateTooltipsOrcDefensivePresenceEN;
		}, configurable: true
	},
	StateTooltipsOrcCommandingPresenceOne: {
		get: function() {
			if(this.isJapanese) return StateTooltipsOrcCommandingPresenceOneJP;
			else if(this.isEnglish) return StateTooltipsOrcCommandingPresenceOneEN;
			else if(this.isRussian) return StateTooltipsOrcCommandingPresenceOneRU;
			else if(this.isSChinese) return StateTooltipsOrcCommandingPresenceOneSCH;
			else if(this.isTChinese) return StateTooltipsOrcCommandingPresenceOneTCH;
			else if(this.isKorean) return StateTooltipsOrcCommandingPresenceOneKR;
			else if(this.isSpanish) return StateTooltipsOrcCommandingPresenceOneSP;
			return StateTooltipsOrcCommandingPresenceOneEN;
		}, configurable: true
	},
	StateTooltipsOrcCommandingPresenceTwo: {
		get: function() {
			if(this.isJapanese) return StateTooltipsOrcCommandingPresenceTwoJP;
			else if(this.isEnglish) return StateTooltipsOrcCommandingPresenceTwoEN;
			else if(this.isRussian) return StateTooltipsOrcCommandingPresenceTwoRU;
			else if(this.isSChinese) return StateTooltipsOrcCommandingPresenceTwoSCH;
			else if(this.isTChinese) return StateTooltipsOrcCommandingPresenceTwoTCH;
			else if(this.isKorean) return StateTooltipsOrcCommandingPresenceTwoKR;
			else if(this.isSpanish) return StateTooltipsOrcCommandingPresenceTwoSP;
			return StateTooltipsOrcCommandingPresenceTwoEN;
		}, configurable: true
	},
	StateTooltipsOrcCommandingPresenceThree: {
		get: function() {
			if(this.isJapanese) return StateTooltipsOrcCommandingPresenceThreeJP;
			else if(this.isEnglish) return StateTooltipsOrcCommandingPresenceThreeEN;
			else if(this.isRussian) return StateTooltipsOrcCommandingPresenceThreeRU;
			else if(this.isSChinese) return StateTooltipsOrcCommandingPresenceThreeSCH;
			else if(this.isTChinese) return StateTooltipsOrcCommandingPresenceThreeTCH;
			else if(this.isKorean) return StateTooltipsOrcCommandingPresenceThreeKR;
			else if(this.isSpanish) return StateTooltipsOrcCommandingPresenceThreeSP;
			return StateTooltipsOrcCommandingPresenceThreeEN;
		}, configurable: true
	},
	StateTooltipsOrcCommandingPresenceFour: {
		get: function() {
			if(this.isJapanese) return StateTooltipsOrcCommandingPresenceFourJP;
			else if(this.isEnglish) return StateTooltipsOrcCommandingPresenceFourEN;
			else if(this.isRussian) return StateTooltipsOrcCommandingPresenceFourRU;
			else if(this.isSChinese) return StateTooltipsOrcCommandingPresenceFourSCH;
			else if(this.isTChinese) return StateTooltipsOrcCommandingPresenceFourTCH;
			else if(this.isKorean) return StateTooltipsOrcCommandingPresenceFourKR;
			else if(this.isSpanish) return StateTooltipsOrcCommandingPresenceFourSP;
			return StateTooltipsOrcCommandingPresenceFourEN;
		}, configurable: true
	},
	StateTooltipsLizardmanRacial: {
		get: function() {
			if(this.isJapanese) return StateTooltipsLizardmanRacialJP;
			else if(this.isEnglish) return StateTooltipsLizardmanRacialEN;
			else if(this.isRussian) return StateTooltipsLizardmanRacialRU;
			else if(this.isSChinese) return StateTooltipsLizardmanRacialSCH;
			else if(this.isTChinese) return StateTooltipsLizardmanRacialTCH;
			else if(this.isKorean) return StateTooltipsLizardmanRacialKR;
			else if(this.isSpanish) return StateTooltipsLizardmanRacialSP;
			return StateTooltipsLizardmanRacialEN;
		}, configurable: true
	},
	StateTooltipsLizardmanRacialWeak: {
		get: function() {
			if(this.isJapanese) return StateTooltipsLizardmanRacialWeakJP;
			else if(this.isEnglish) return StateTooltipsLizardmanRacialWeakEN;
			else if(this.isRussian) return StateTooltipsLizardmanRacialWeakRU;
			else if(this.isSChinese) return StateTooltipsLizardmanRacialWeakSCH;
			else if(this.isTChinese) return StateTooltipsLizardmanRacialWeakTCH;
			else if(this.isKorean) return StateTooltipsLizardmanRacialWeakKR;
			else if(this.isSpanish) return StateTooltipsLizardmanRacialWeakSP;
			return StateTooltipsLizardmanRacialWeakEN;
		}, configurable: true
	},

	StateTooltipsYetiHeatAura: {
		get: function() {
			if(this.isJapanese) return StateTooltipsYetiHeatAuraJP;
			else if(this.isEnglish) return StateTooltipsYetiHeatAuraEN;
			else if(this.isRussian) return StateTooltipsYetiHeatAuraRU;
			else if(this.isSChinese) return StateTooltipsYetiHeatAuraSCH;
			else if(this.isTChinese) return StateTooltipsYetiHeatAuraTCH;
			else if(this.isKorean) return StateTooltipsYetiHeatAuraKR;
			else if(this.isSpanish) return StateTooltipsYetiHeatAuraSP;
			return StateTooltipsYetiHeatAuraEN;
		}, configurable: true
	},
	StateTooltipsYetiHeatAuraEnemyOne: {
		get: function() {
			if(this.isJapanese) return StateTooltipsYetiHeatAuraEnemyOneJP;
			else if(this.isEnglish) return StateTooltipsYetiHeatAuraEnemyOneEN;
			else if(this.isRussian) return StateTooltipsYetiHeatAuraEnemyOneRU;
			else if(this.isSChinese) return StateTooltipsYetiHeatAuraEnemyOneSCH;
			else if(this.isTChinese) return StateTooltipsYetiHeatAuraEnemyOneTCH;
			else if(this.isKorean) return StateTooltipsYetiHeatAuraEnemyOneKR;
			else if(this.isSpanish) return StateTooltipsYetiHeatAuraEnemyOneSP;
			return StateTooltipsYetiHeatAuraEnemyOneEN;
		}, configurable: true
	},
	StateTooltipsYetiHeatAuraEnemyTwo: {
		get: function() {
			if(this.isJapanese) return StateTooltipsYetiHeatAuraEnemyTwoJP;
			else if(this.isEnglish) return StateTooltipsYetiHeatAuraEnemyTwoEN;
			else if(this.isRussian) return StateTooltipsYetiHeatAuraEnemyTwoRU;
			else if(this.isSChinese) return StateTooltipsYetiHeatAuraEnemyTwoSCH;
			else if(this.isTChinese) return StateTooltipsYetiHeatAuraEnemyTwoTCH;
			else if(this.isKorean) return StateTooltipsYetiHeatAuraEnemyTwoKR;
			else if(this.isSpanish) return StateTooltipsYetiHeatAuraEnemyTwoSP;
			return StateTooltipsYetiHeatAuraEnemyTwoEN;
		}, configurable: true
	},
	StateTooltipsYetiHeatAuraKarrynOne: {
		get: function() {
			if(this.isJapanese) return StateTooltipsYetiHeatAuraKarrynOneJP;
			else if(this.isEnglish) return StateTooltipsYetiHeatAuraKarrynOneEN;
			else if(this.isRussian) return StateTooltipsYetiHeatAuraKarrynOneRU;
			else if(this.isSChinese) return StateTooltipsYetiHeatAuraKarrynOneSCH;
			else if(this.isTChinese) return StateTooltipsYetiHeatAuraKarrynOneTCH;
			else if(this.isKorean) return StateTooltipsYetiHeatAuraKarrynOneKR;
			else if(this.isSpanish) return StateTooltipsYetiHeatAuraKarrynOneSP;
			return StateTooltipsYetiHeatAuraKarrynOneEN;
		}, configurable: true
	},
	StateTooltipsYetiHeatAuraKarrynTwo: {
		get: function() {
			if(this.isJapanese) return StateTooltipsYetiHeatAuraKarrynTwoJP;
			else if(this.isEnglish) return StateTooltipsYetiHeatAuraKarrynTwoEN;
			else if(this.isRussian) return StateTooltipsYetiHeatAuraKarrynTwoRU;
			else if(this.isSChinese) return StateTooltipsYetiHeatAuraKarrynTwoSCH;
			else if(this.isTChinese) return StateTooltipsYetiHeatAuraKarrynTwoTCH;
			else if(this.isKorean) return StateTooltipsYetiHeatAuraKarrynTwoKR;
			else if(this.isSpanish) return StateTooltipsYetiHeatAuraKarrynTwoSP;
			return StateTooltipsYetiHeatAuraKarrynTwoEN;
		}, configurable: true
	},
	StateTooltipsYasuKi: {
		get: function() {
			if(this.isJapanese) return StateTooltipsYasuKiJP;
			else if(this.isEnglish) return StateTooltipsYasuKiEN;
			else if(this.isRussian) return StateTooltipsYasuKiRU;
			else if(this.isSChinese) return StateTooltipsYasuKiSCH;
			else if(this.isTChinese) return StateTooltipsYasuKiTCH;
			else if(this.isKorean) return StateTooltipsYasuKiKR;
			else if(this.isSpanish) return StateTooltipsYasuKiSP;
			return StateTooltipsYasuKiEN;
		}, configurable: true
	},
	StateTooltipsYasuFocus: {
		get: function() {
			if(this.isJapanese) return StateTooltipsYasuFocusJP;
			else if(this.isEnglish) return StateTooltipsYasuFocusEN;
			else if(this.isRussian) return StateTooltipsYasuFocusRU;
			else if(this.isSChinese) return StateTooltipsYasuFocusSCH;
			else if(this.isTChinese) return StateTooltipsYasuFocusTCH;
			else if(this.isKorean) return StateTooltipsYasuFocusKR;
			else if(this.isSpanish) return StateTooltipsYasuFocusSP;
			return StateTooltipsYasuFocusEN;
		}, configurable: true
	},
	StateTooltipsYasuEyeoftheMind: {
		get: function() {
			if(this.isJapanese) return StateTooltipsYasuEyeoftheMindJP;
			else if(this.isEnglish) return StateTooltipsYasuEyeoftheMindEN;
			else if(this.isRussian) return StateTooltipsYasuEyeoftheMindRU;
			else if(this.isSChinese) return StateTooltipsYasuEyeoftheMindSCH;
			else if(this.isTChinese) return StateTooltipsYasuEyeoftheMindTCH;
			else if(this.isKorean) return StateTooltipsYasuEyeoftheMindKR;
			else if(this.isSpanish) return StateTooltipsYasuEyeoftheMindSP;
			return StateTooltipsYasuEyeoftheMindEN;
		}, configurable: true
	},
	StateTooltipsEnemyDefensiveStance: {
		get: function() {
			if(this.isJapanese) return StateTooltipsEnemyDefensiveStanceJP;
			else if(this.isEnglish) return StateTooltipsEnemyDefensiveStanceEN;
			else if(this.isRussian) return StateTooltipsEnemyDefensiveStanceRU;
			else if(this.isSChinese) return StateTooltipsEnemyDefensiveStanceSCH;
			else if(this.isTChinese) return StateTooltipsEnemyDefensiveStanceTCH;
			else if(this.isKorean) return StateTooltipsEnemyDefensiveStanceKR;
			else if(this.isSpanish) return StateTooltipsEnemyDefensiveStanceSP;
			return StateTooltipsEnemyDefensiveStanceEN;
		}, configurable: true
	},
	StateTooltipsKarrynClitToy: {
		get: function() {
			if(this.isJapanese) return StateTooltipsKarrynClitToyJP;
			else if(this.isEnglish) return StateTooltipsKarrynClitToyEN;
			else if(this.isRussian) return StateTooltipsKarrynClitToyRU;
			else if(this.isSChinese) return StateTooltipsKarrynClitToySCH;
			else if(this.isTChinese) return StateTooltipsKarrynClitToyTCH;
			else if(this.isKorean) return StateTooltipsKarrynClitToyKR;
			else if(this.isSpanish) return StateTooltipsKarrynClitToySP;
			return StateTooltipsKarrynClitToyEN;
		}, configurable: true
	},
	StateTooltipsKarrynPussyToy: {
		get: function() {
			if(this.isJapanese) return StateTooltipsKarrynPussyToyJP;
			else if(this.isEnglish) return StateTooltipsKarrynPussyToyEN;
			else if(this.isRussian) return StateTooltipsKarrynPussyToyRU;
			else if(this.isSChinese) return StateTooltipsKarrynPussyToySCH;
			else if(this.isTChinese) return StateTooltipsKarrynPussyToyTCH;
			else if(this.isKorean) return StateTooltipsKarrynPussyToyKR;
			else if(this.isSpanish) return StateTooltipsKarrynPussyToySP;
			return StateTooltipsKarrynPussyToyEN;
		}, configurable: true
	},
	StateTooltipsKarrynAnalToy: {
		get: function() {
			if(this.isJapanese) return StateTooltipsKarrynAnalToyJP;
			else if(this.isEnglish) return StateTooltipsKarrynAnalToyEN;
			else if(this.isRussian) return StateTooltipsKarrynAnalToyRU;
			else if(this.isSChinese) return StateTooltipsKarrynAnalToySCH;
			else if(this.isTChinese) return StateTooltipsKarrynAnalToyTCH;
			else if(this.isKorean) return StateTooltipsKarrynAnalToyKR;
			else if(this.isSpanish) return StateTooltipsKarrynAnalToySP;
			return StateTooltipsKarrynAnalToyEN;
		}, configurable: true
	},
	StateTooltipsEnemyClitToyPinkRotor: {
		get: function() {
			if(this.isJapanese) return StateTooltipsEnemyClitToyPinkRotorJP;
			else if(this.isEnglish) return StateTooltipsEnemyClitToyPinkRotorEN;
			else if(this.isRussian) return StateTooltipsEnemyClitToyPinkRotorRU;
			else if(this.isSChinese) return StateTooltipsEnemyClitToyPinkRotorSCH;
			else if(this.isTChinese) return StateTooltipsEnemyClitToyPinkRotorTCH;
			else if(this.isKorean) return StateTooltipsEnemyClitToyPinkRotorKR;
			else if(this.isSpanish) return StateTooltipsEnemyClitToyPinkRotorSP;
			return StateTooltipsEnemyClitToyPinkRotorEN;
		}, configurable: true
	},
	StateTooltipsEnemyPussyToyPenisDildo: {
		get: function() {
			if(this.isJapanese) return StateTooltipsEnemyPussyToyPenisDildoJP;
			else if(this.isEnglish) return StateTooltipsEnemyPussyToyPenisDildoEN;
			else if(this.isRussian) return StateTooltipsEnemyPussyToyPenisDildoRU;
			else if(this.isSChinese) return StateTooltipsEnemyPussyToyPenisDildoSCH;
			else if(this.isTChinese) return StateTooltipsEnemyPussyToyPenisDildoTCH;
			else if(this.isKorean) return StateTooltipsEnemyPussyToyPenisDildoKR;
			else if(this.isSpanish) return StateTooltipsEnemyPussyToyPenisDildoSP;
			return StateTooltipsEnemyPussyToyPenisDildoEN;
		}, configurable: true
	},
	StateTooltipsEnemyAnalToyAnalBeads: {
		get: function() {
			if(this.isJapanese) return StateTooltipsEnemyAnalToyAnalBeadsJP;
			else if(this.isEnglish) return StateTooltipsEnemyAnalToyAnalBeadsEN;
			else if(this.isRussian) return StateTooltipsEnemyAnalToyAnalBeadsRU;
			else if(this.isSChinese) return StateTooltipsEnemyAnalToyAnalBeadsSCH;
			else if(this.isTChinese) return StateTooltipsEnemyAnalToyAnalBeadsTCH;
			else if(this.isKorean) return StateTooltipsEnemyAnalToyAnalBeadsKR;
			else if(this.isSpanish) return StateTooltipsEnemyAnalToyAnalBeadsSP;
			return StateTooltipsEnemyAnalToyAnalBeadsEN;
		}, configurable: true
	},
	StateTooltipsToiletPinkRotor: {
		get: function() {
			if(this.isJapanese) return StateTooltipsToiletPinkRotorJP;
			else if(this.isEnglish) return StateTooltipsToiletPinkRotorEN;
			else if(this.isRussian) return StateTooltipsToiletPinkRotorRU;
			else if(this.isSChinese) return StateTooltipsToiletPinkRotorSCH;
			else if(this.isTChinese) return StateTooltipsToiletPinkRotorTCH;
			else if(this.isKorean) return StateTooltipsToiletPinkRotorKR;
			else if(this.isSpanish) return StateTooltipsToiletPinkRotorSP;
			return StateTooltipsToiletPinkRotorEN;
		}, configurable: true
	},
	StateTooltipsToiletPenisDildo: {
		get: function() {
			if(this.isJapanese) return StateTooltipsToiletPenisDildoJP;
			else if(this.isEnglish) return StateTooltipsToiletPenisDildoEN;
			else if(this.isRussian) return StateTooltipsToiletPenisDildoRU;
			else if(this.isSChinese) return StateTooltipsToiletPenisDildoSCH;
			else if(this.isTChinese) return StateTooltipsToiletPenisDildoTCH;
			else if(this.isKorean) return StateTooltipsToiletPenisDildoKR;
			else if(this.isSpanish) return StateTooltipsToiletPenisDildoSP;
			return StateTooltipsToiletPenisDildoEN;
		}, configurable: true
	},
	StateTooltipsToiletAnalBeads: {
		get: function() {
			if(this.isJapanese) return StateTooltipsToiletAnalBeadsJP;
			else if(this.isEnglish) return StateTooltipsToiletAnalBeadsEN;
			else if(this.isRussian) return StateTooltipsToiletAnalBeadsRU;
			else if(this.isSChinese) return StateTooltipsToiletAnalBeadsSCH;
			else if(this.isTChinese) return StateTooltipsToiletAnalBeadsTCH;
			else if(this.isKorean) return StateTooltipsToiletAnalBeadsKR;
			else if(this.isSpanish) return StateTooltipsToiletAnalBeadsSP;
			return StateTooltipsToiletAnalBeadsEN;
		}, configurable: true
	},

	StateWaitressNoAlcohol: {
		get: function() {
			if(this.isJapanese) return StateWaitressNoAlcoholJP;
			else if(this.isEnglish) return StateWaitressNoAlcoholEN;
			else if(this.isRussian) return StateWaitressNoAlcoholRU;
			else if(this.isSChinese) return StateWaitressNoAlcoholSCH;
			else if(this.isTChinese) return StateWaitressNoAlcoholTCH;
			else if(this.isKorean) return StateWaitressNoAlcoholKR;
			else if(this.isSpanish) return StateWaitressNoAlcoholSP;
			return StateWaitressNoAlcoholEN;
		}, configurable: true
	},
	StateWaitressDirtyMugsSingular: {
		get: function() {
			if(this.isJapanese) return StateWaitressDirtyMugsSingularJP;
			else if(this.isEnglish) return StateWaitressDirtyMugsSingularEN;
			else if(this.isRussian) return StateWaitressDirtyMugsSingularRU;
			else if(this.isSChinese) return StateWaitressDirtyMugsSingularSCH;
			else if(this.isTChinese) return StateWaitressDirtyMugsSingularTCH;
			else if(this.isKorean) return StateWaitressDirtyMugsSingularKR;
			else if(this.isSpanish) return StateWaitressDirtyMugsSingularSP;
			return StateWaitressDirtyMugsSingularEN;
		}, configurable: true
	},
	StateWaitressDirtyMugsPlural: {
		get: function() {
			if(this.isJapanese) return StateWaitressDirtyMugsPluralJP;
			else if(this.isEnglish) return StateWaitressDirtyMugsPluralEN;
			else if(this.isRussian) return StateWaitressDirtyMugsPluralRU;
			else if(this.isSChinese) return StateWaitressDirtyMugsPluralSCH;
			else if(this.isTChinese) return StateWaitressDirtyMugsPluralTCH;
			else if(this.isKorean) return StateWaitressDirtyMugsPluralKR;
			else if(this.isSpanish) return StateWaitressDirtyMugsPluralSP;
			return StateWaitressDirtyMugsPluralEN;
		}, configurable: true
	},
	StateWaitressDirtyGlassesSingular: {
		get: function() {
			if(this.isJapanese) return StateWaitressDirtyGlassesSingularJP;
			else if(this.isEnglish) return StateWaitressDirtyGlassesSingularEN;
			else if(this.isRussian) return StateWaitressDirtyGlassesSingularRU;
			else if(this.isSChinese) return StateWaitressDirtyGlassesSingularSCH;
			else if(this.isTChinese) return StateWaitressDirtyGlassesSingularTCH;
			else if(this.isKorean) return StateWaitressDirtyGlassesSingularKR;
			else if(this.isSpanish) return StateWaitressDirtyGlassesSingularSP;
			return StateWaitressDirtyGlassesSingularEN;
		}, configurable: true
	},
	StateWaitressDirtyGlassesPlural: {
		get: function() {
			if(this.isJapanese) return StateWaitressDirtyGlassesPluralJP;
			else if(this.isEnglish) return StateWaitressDirtyGlassesPluralEN;
			else if(this.isRussian) return StateWaitressDirtyGlassesPluralRU;
			else if(this.isSChinese) return StateWaitressDirtyGlassesPluralSCH;
			else if(this.isTChinese) return StateWaitressDirtyGlassesPluralTCH;
			else if(this.isKorean) return StateWaitressDirtyGlassesPluralKR;
			else if(this.isSpanish) return StateWaitressDirtyGlassesPluralSP;
			return StateWaitressDirtyGlassesPluralEN;
		}, configurable: true
	},
	StateWaitressAvailableMugsSingular: {
		get: function() {
			if(this.isJapanese) return StateWaitressAvailableMugsSingularJP;
			else if(this.isEnglish) return StateWaitressAvailableMugsSingularEN;
			else if(this.isRussian) return StateWaitressAvailableMugsSingularRU;
			else if(this.isSChinese) return StateWaitressAvailableMugsSingularSCH;
			else if(this.isTChinese) return StateWaitressAvailableMugsSingularTCH;
			else if(this.isKorean) return StateWaitressAvailableMugsSingularKR;
			else if(this.isSpanish) return StateWaitressAvailableMugsSingularSP;
			return StateWaitressAvailableMugsSingularEN;
		}, configurable: true
	},
	StateWaitressAvailableMugsPlural: {
		get: function() {
			if(this.isJapanese) return StateWaitressAvailableMugsPluralJP;
			else if(this.isEnglish) return StateWaitressAvailableMugsPluralEN;
			else if(this.isRussian) return StateWaitressAvailableMugsPluralRU;
			else if(this.isSChinese) return StateWaitressAvailableMugsPluralSCH;
			else if(this.isTChinese) return StateWaitressAvailableMugsPluralTCH;
			else if(this.isKorean) return StateWaitressAvailableMugsPluralKR;
			else if(this.isSpanish) return StateWaitressAvailableMugsPluralSP;
			return StateWaitressAvailableMugsPluralEN;
		}, configurable: true
	},
	StateWaitressAvailableGlassesSingular: {
		get: function() {
			if(this.isJapanese) return StateWaitressAvailableGlassesSingularJP;
			else if(this.isEnglish) return StateWaitressAvailableGlassesSingularEN;
			else if(this.isRussian) return StateWaitressAvailableGlassesSingularRU;
			else if(this.isSChinese) return StateWaitressAvailableGlassesSingularSCH;
			else if(this.isTChinese) return StateWaitressAvailableGlassesSingularTCH;
			else if(this.isKorean) return StateWaitressAvailableGlassesSingularKR;
			else if(this.isSpanish) return StateWaitressAvailableGlassesSingularSP;
			return StateWaitressAvailableGlassesSingularEN;
		}, configurable: true
	},
	StateWaitressAvailableGlassesPlural: {
		get: function() {
			if(this.isJapanese) return StateWaitressAvailableGlassesPluralJP;
			else if(this.isEnglish) return StateWaitressAvailableGlassesPluralEN;
			else if(this.isRussian) return StateWaitressAvailableGlassesPluralRU;
			else if(this.isSChinese) return StateWaitressAvailableGlassesPluralSCH;
			else if(this.isTChinese) return StateWaitressAvailableGlassesPluralTCH;
			else if(this.isKorean) return StateWaitressAvailableGlassesPluralKR;
			else if(this.isSpanish) return StateWaitressAvailableGlassesPluralSP;
			return StateWaitressAvailableGlassesPluralEN;
		}, configurable: true
	},
	StateWaitressKarrynLocation: {
		get: function() {
			if(this.isJapanese) return StateWaitressKarrynLocationJP;
			else if(this.isEnglish) return StateWaitressKarrynLocationEN;
			else if(this.isRussian) return StateWaitressKarrynLocationRU;
			else if(this.isSChinese) return StateWaitressKarrynLocationSCH;
			else if(this.isTChinese) return StateWaitressKarrynLocationTCH;
			else if(this.isKorean) return StateWaitressKarrynLocationKR;
			else if(this.isSpanish) return StateWaitressKarrynLocationSP;
			return StateWaitressKarrynLocationEN;
		}, configurable: true
	},
	StateWaitressTableALocation: {
		get: function() {
			if(this.isJapanese) return StateWaitressTableALocationJP;
			else if(this.isEnglish) return StateWaitressTableALocationEN;
			else if(this.isRussian) return StateWaitressTableALocationRU;
			else if(this.isSChinese) return StateWaitressTableALocationSCH;
			else if(this.isTChinese) return StateWaitressTableALocationTCH;
			else if(this.isKorean) return StateWaitressTableALocationKR;
			else if(this.isSpanish) return StateWaitressTableALocationSP;
			return StateWaitressTableALocationEN;
		}, configurable: true
	},
	StateWaitressTableBLocation: {
		get: function() {
			if(this.isJapanese) return StateWaitressTableBLocationJP;
			else if(this.isEnglish) return StateWaitressTableBLocationEN;
			else if(this.isRussian) return StateWaitressTableBLocationRU;
			else if(this.isSChinese) return StateWaitressTableBLocationSCH;
			else if(this.isTChinese) return StateWaitressTableBLocationTCH;
			else if(this.isKorean) return StateWaitressTableBLocationKR;
			else if(this.isSpanish) return StateWaitressTableBLocationSP;
			return StateWaitressTableBLocationEN;
		}, configurable: true
	},
	StateWaitressTableCLocation: {
		get: function() {
			if(this.isJapanese) return StateWaitressTableCLocationJP;
			else if(this.isEnglish) return StateWaitressTableCLocationEN;
			else if(this.isRussian) return StateWaitressTableCLocationRU;
			else if(this.isSChinese) return StateWaitressTableCLocationSCH;
			else if(this.isTChinese) return StateWaitressTableCLocationTCH;
			else if(this.isKorean) return StateWaitressTableCLocationKR;
			else if(this.isSpanish) return StateWaitressTableCLocationSP;
			return StateWaitressTableCLocationEN;
		}, configurable: true
	},
	StateWaitressTableDLocation: {
		get: function() {
			if(this.isJapanese) return StateWaitressTableDLocationJP;
			else if(this.isEnglish) return StateWaitressTableDLocationEN;
			else if(this.isRussian) return StateWaitressTableDLocationRU;
			else if(this.isSChinese) return StateWaitressTableDLocationSCH;
			else if(this.isTChinese) return StateWaitressTableDLocationTCH;
			else if(this.isKorean) return StateWaitressTableDLocationKR;
			else if(this.isSpanish) return StateWaitressTableDLocationSP;
			return StateWaitressTableDLocationEN;
		}, configurable: true
	},
	StateWaitressSleeping: {
		get: function() {
			if(this.isJapanese) return StateWaitressSleepingJP;
			else if(this.isEnglish) return StateWaitressSleepingEN;
			else if(this.isRussian) return StateWaitressSleepingRU;
			else if(this.isSChinese) return StateWaitressSleepingSCH;
			else if(this.isTChinese) return StateWaitressSleepingTCH;
			else if(this.isKorean) return StateWaitressSleepingKR;
			else if(this.isSpanish) return StateWaitressSleepingSP;
			return StateWaitressSleepingEN;
		}, configurable: true
	},
	StateWaitressDrinkingDrink: {
		get: function() {
			if(this.isJapanese) return StateWaitressDrinkingDrinkJP;
			else if(this.isEnglish) return StateWaitressDrinkingDrinkEN;
			else if(this.isRussian) return StateWaitressDrinkingDrinkRU;
			else if(this.isSChinese) return StateWaitressDrinkingDrinkSCH;
			else if(this.isTChinese) return StateWaitressDrinkingDrinkTCH;
			else if(this.isKorean) return StateWaitressDrinkingDrinkKR;
			else if(this.isSpanish) return StateWaitressDrinkingDrinkSP;
			return StateWaitressDrinkingDrinkEN;
		}, configurable: true
	},

	StateWaitressDrinkingNothing: {
		get: function() {
			if(this.isJapanese) return StateWaitressDrinkingNothingJP;
			else if(this.isEnglish) return StateWaitressDrinkingNothingEN;
			else {
				try {
					if(this.isRussian) return StateWaitressDrinkingNothingRU;
					else if(this.isSChinese) return StateWaitressDrinkingNothingSCH;
					else if(this.isTChinese) return StateWaitressDrinkingNothingTCH;
					else if(this.isKorean) return StateWaitressDrinkingNothingKR;
					else if(this.isSpanish) return StateWaitressDrinkingNothingSP;
				} catch(e) {}
			}
			return StateWaitressDrinkingNothingEN;
		}, configurable: true
	},
	StateWaitressWantsDrink: {
		get: function() {
			if(this.isJapanese) return StateWaitressWantsDrinkJP;
			else if(this.isEnglish) return StateWaitressWantsDrinkEN;
			else {
				try {
					if(this.isRussian) return StateWaitressWantsDrinkRU;
					else if(this.isSChinese) return StateWaitressWantsDrinkSCH;
					else if(this.isTChinese) return StateWaitressWantsDrinkTCH;
					else if(this.isKorean) return StateWaitressWantsDrinkKR;
					else if(this.isSpanish) return StateWaitressWantsDrinkSP;
				} catch(e) {}
			}
			return StateWaitressDrinkingNothingEN;
		}, configurable: true
	},

	StateReceptionistVisitorUnknownBefore: {
		get: function() {
			if(this.isJapanese) return StateReceptionistVisitorUnknownBeforeJP;
			else if(this.isEnglish) return StateReceptionistVisitorUnknownBeforeEN;
			else if(this.isRussian) return StateReceptionistVisitorUnknownBeforeRU;
			else if(this.isSChinese) return StateReceptionistVisitorUnknownBeforeSCH;
			else if(this.isTChinese) return StateReceptionistVisitorUnknownBeforeTCH;
			else if(this.isKorean) return StateReceptionistVisitorUnknownBeforeKR;
			else if(this.isSpanish) return StateReceptionistVisitorUnknownBeforeSP;
			return StateReceptionistVisitorUnknownBeforeEN;
		}, configurable: true
	},
	StateReceptionistVisitorUnknownAfter: {
		get: function() {
			if(this.isJapanese) return StateReceptionistVisitorUnknownAfterJP;
			else if(this.isEnglish) return StateReceptionistVisitorUnknownAfterEN;
			else if(this.isRussian) return StateReceptionistVisitorUnknownAfterRU;
			else if(this.isSChinese) return StateReceptionistVisitorUnknownAfterSCH;
			else if(this.isTChinese) return StateReceptionistVisitorUnknownAfterTCH;
			else if(this.isKorean) return StateReceptionistVisitorUnknownAfterKR;
			else if(this.isSpanish) return StateReceptionistVisitorUnknownAfterSP;
			return StateReceptionistVisitorUnknownAfterEN;
		}, configurable: true
	},
	StateReceptionistVisitorWritingBefore: {
		get: function() {
			if(this.isJapanese) return StateReceptionistVisitorWritingBeforeJP;
			else if(this.isEnglish) return StateReceptionistVisitorWritingBeforeEN;
			else if(this.isRussian) return StateReceptionistVisitorWritingBeforeRU;
			else if(this.isSChinese) return StateReceptionistVisitorWritingBeforeSCH;
			else if(this.isTChinese) return StateReceptionistVisitorWritingBeforeTCH;
			else if(this.isKorean) return StateReceptionistVisitorWritingBeforeKR;
			else if(this.isSpanish) return StateReceptionistVisitorWritingBeforeSP;
			return StateReceptionistVisitorWritingBeforeEN;
		}, configurable: true
	},
	StateReceptionistVisitorWritingDuring: {
		get: function() {
			if(this.isJapanese) return StateReceptionistVisitorWritingDuringJP;
			else if(this.isEnglish) return StateReceptionistVisitorWritingDuringEN;
			else if(this.isRussian) return StateReceptionistVisitorWritingDuringRU;
			else if(this.isSChinese) return StateReceptionistVisitorWritingDuringSCH;
			else if(this.isTChinese) return StateReceptionistVisitorWritingDuringTCH;
			else if(this.isKorean) return StateReceptionistVisitorWritingDuringKR;
			else if(this.isSpanish) return StateReceptionistVisitorWritingDuringSP;
			return StateReceptionistVisitorWritingDuringEN;
		}, configurable: true
	},
	StateReceptionistVisitorWritingAfter: {
		get: function() {
			if(this.isJapanese) return StateReceptionistVisitorWritingAfterJP;
			else if(this.isEnglish) return StateReceptionistVisitorWritingAfterEN;
			else if(this.isRussian) return StateReceptionistVisitorWritingAfterRU;
			else if(this.isSChinese) return StateReceptionistVisitorWritingAfterSCH;
			else if(this.isTChinese) return StateReceptionistVisitorWritingAfterTCH;
			else if(this.isKorean) return StateReceptionistVisitorWritingAfterKR;
			else if(this.isSpanish) return StateReceptionistVisitorWritingAfterSP;
			return StateReceptionistVisitorWritingAfterEN;
		}, configurable: true
	},
	StateReceptionistVisitorPaperBefore: {
		get: function() {
			if(this.isJapanese) return StateReceptionistVisitorPaperBeforeJP;
			else if(this.isEnglish) return StateReceptionistVisitorPaperBeforeEN;
			else if(this.isRussian) return StateReceptionistVisitorPaperBeforeRU;
			else if(this.isSChinese) return StateReceptionistVisitorPaperBeforeSCH;
			else if(this.isTChinese) return StateReceptionistVisitorPaperBeforeTCH;
			else if(this.isKorean) return StateReceptionistVisitorPaperBeforeKR;
			else if(this.isSpanish) return StateReceptionistVisitorPaperBeforeSP;
			return StateReceptionistVisitorPaperBeforeEN;
		}, configurable: true
	},
	StateReceptionistVisitorPaperAfter: {
		get: function() {
			if(this.isJapanese) return StateReceptionistVisitorPaperAfterJP;
			else if(this.isEnglish) return StateReceptionistVisitorPaperAfterEN;
			else if(this.isRussian) return StateReceptionistVisitorPaperAfterRU;
			else if(this.isSChinese) return StateReceptionistVisitorPaperAfterSCH;
			else if(this.isTChinese) return StateReceptionistVisitorPaperAfterTCH;
			else if(this.isKorean) return StateReceptionistVisitorPaperAfterKR;
			else if(this.isSpanish) return StateReceptionistVisitorPaperAfterSP;
			return StateReceptionistVisitorPaperAfterEN;
		}, configurable: true
	},
	StateReceptionistVisitorTime: {
		get: function() {
			if(this.isJapanese) return StateReceptionistVisitorTimeJP;
			else if(this.isEnglish) return StateReceptionistVisitorTimeEN;
			else if(this.isRussian) return StateReceptionistVisitorTimeRU;
			else if(this.isSChinese) return StateReceptionistVisitorTimeSCH;
			else if(this.isTChinese) return StateReceptionistVisitorTimeTCH;
			else if(this.isKorean) return StateReceptionistVisitorTimeKR;
			else if(this.isSpanish) return StateReceptionistVisitorTimeSP;
			return StateReceptionistVisitorTimeEN;
		}, configurable: true
	},
	StateReceptionistVisitorMoving: {
		get: function() {
			if(this.isJapanese) return StateReceptionistVisitorMovingJP;
			else if(this.isEnglish) return StateReceptionistVisitorMovingEN;
			else if(this.isRussian) return StateReceptionistVisitorMovingRU;
			else if(this.isSChinese) return StateReceptionistVisitorMovingSCH;
			else if(this.isTChinese) return StateReceptionistVisitorMovingTCH;
			else if(this.isKorean) return StateReceptionistVisitorMovingKR;
			else if(this.isSpanish) return StateReceptionistVisitorMovingSP;
			return StateReceptionistVisitorMovingEN;
		}, configurable: true
	},
	StateReceptionistVisitorSitting: {
		get: function() {
			if(this.isJapanese) return StateReceptionistVisitorSittingJP;
			else if(this.isEnglish) return StateReceptionistVisitorSittingEN;
			else if(this.isRussian) return StateReceptionistVisitorSittingRU;
			else if(this.isSChinese) return StateReceptionistVisitorSittingSCH;
			else if(this.isTChinese) return StateReceptionistVisitorSittingTCH;
			else if(this.isKorean) return StateReceptionistVisitorSittingKR;
			else if(this.isSpanish) return StateReceptionistVisitorSittingSP;
			return StateReceptionistVisitorSittingEN;
		}, configurable: true
	},
	StateReceptionistVisitorLine: {
		get: function() {
			if(this.isJapanese) return StateReceptionistVisitorLineJP;
			else if(this.isEnglish) return StateReceptionistVisitorLineEN;
			else if(this.isRussian) return StateReceptionistVisitorLineRU;
			else if(this.isSChinese) return StateReceptionistVisitorLineSCH;
			else if(this.isTChinese) return StateReceptionistVisitorLineTCH;
			else if(this.isKorean) return StateReceptionistVisitorLineKR;
			else if(this.isSpanish) return StateReceptionistVisitorLineSP;
			return StateReceptionistVisitorLineEN;
		}, configurable: true
	},
	StateReceptionistVisitorDesk: {
		get: function() {
			if(this.isJapanese) return StateReceptionistVisitorDeskJP;
			else if(this.isEnglish) return StateReceptionistVisitorDeskEN;
			else if(this.isRussian) return StateReceptionistVisitorDeskRU;
			else if(this.isSChinese) return StateReceptionistVisitorDeskSCH;
			else if(this.isTChinese) return StateReceptionistVisitorDeskTCH;
			else if(this.isKorean) return StateReceptionistVisitorDeskKR;
			else if(this.isSpanish) return StateReceptionistVisitorDeskSP;
			return StateReceptionistVisitorDeskEN;
		}, configurable: true
	},

	StateStripperActorDanceCombo: {
		get: function() {
			if(this.isJapanese) return StateStripperActorDanceComboJP;
			else if(this.isEnglish) return StateStripperActorDanceComboEN;
			else if(this.isRussian) return StateStripperActorDanceComboRU;
			else if(this.isSChinese) return StateStripperActorDanceComboSCH;
			else if(this.isTChinese) return StateStripperActorDanceComboTCH;
			else if(this.isKorean) return StateStripperActorDanceComboKR;
			else if(this.isSpanish) return StateStripperActorDanceComboSP;
			return StateStripperActorDanceComboEN;
		}, configurable: true
	},
	StateTrainerKarrynLocation: {
		get: function() {
			if(this.isJapanese) return StateTrainerKarrynLocationJP;
			else if(this.isEnglish) {
				return StateTrainerKarrynLocationEN;
			}
			else {
				try {
					if(this.isRussian) return StateTrainerKarrynLocationRU;
					else if(this.isSChinese) return StateTrainerKarrynLocationSCH;
					else if(this.isTChinese) return StateTrainerKarrynLocationTCH;
					else if(this.isKorean) return StateTrainerKarrynLocationKR;
					else if(this.isSpanish) return StateTrainerKarrynLocationSP;
				} catch(e) {}
			}
			return StateTrainerKarrynLocationEN;
		}, configurable: true
	},


	DesireTooltipsMouthIntro: {
		get: function() {
			if(this.isJapanese) return DesireTooltipsMouthIntroJP;
			else if(this.isEnglish) return DesireTooltipsMouthIntroEN;
			else if(this.isRussian) return DesireTooltipsMouthIntroRU;
			else if(this.isSChinese) return DesireTooltipsMouthIntroSCH;
			else if(this.isTChinese) return DesireTooltipsMouthIntroTCH;
			else if(this.isKorean) return DesireTooltipsMouthIntroKR;
			else if(this.isSpanish) return DesireTooltipsMouthIntroSP;
			return DesireTooltipsMouthIntroEN;
		}, configurable: true
	},
	DesireTooltipsBoobsIntro: {
		get: function() {
			if(this.isJapanese) return DesireTooltipsBoobsIntroJP;
			else if(this.isEnglish) return DesireTooltipsBoobsIntroEN;
			else if(this.isRussian) return DesireTooltipsBoobsIntroRU;
			else if(this.isSChinese) return DesireTooltipsBoobsIntroSCH;
			else if(this.isTChinese) return DesireTooltipsBoobsIntroTCH;
			else if(this.isKorean) return DesireTooltipsBoobsIntroKR;
			else if(this.isSpanish) return DesireTooltipsBoobsIntroSP;
			return DesireTooltipsBoobsIntroEN;
		}, configurable: true
	},
	DesireTooltipsPussyIntro: {
		get: function() {
			if(this.isJapanese) return DesireTooltipsPussyIntroJP;
			else if(this.isEnglish) return DesireTooltipsPussyIntroEN;
			else if(this.isRussian) return DesireTooltipsPussyIntroRU;
			else if(this.isSChinese) return DesireTooltipsPussyIntroSCH;
			else if(this.isTChinese) return DesireTooltipsPussyIntroTCH;
			else if(this.isKorean) return DesireTooltipsPussyIntroKR;
			else if(this.isSpanish) return DesireTooltipsPussyIntroSP;
			return DesireTooltipsPussyIntroEN;
		}, configurable: true
	},
	DesireTooltipsButtIntro: {
		get: function() {
			if(this.isJapanese) return DesireTooltipsButtIntroJP;
			else if(this.isEnglish) return DesireTooltipsButtIntroEN;
			else if(this.isRussian) return DesireTooltipsButtIntroRU;
			else if(this.isSChinese) return DesireTooltipsButtIntroSCH;
			else if(this.isTChinese) return DesireTooltipsButtIntroTCH;
			else if(this.isKorean) return DesireTooltipsButtIntroKR;
			else if(this.isSpanish) return DesireTooltipsButtIntroSP;
			return DesireTooltipsButtIntroEN;
		}, configurable: true
	},
	DesireTooltipsCockIntro: {
		get: function() {
			if(this.isJapanese) return DesireTooltipsCockIntroJP;
			else if(this.isEnglish) return DesireTooltipsCockIntroEN;
			else if(this.isRussian) return DesireTooltipsCockIntroRU;
			else if(this.isSChinese) return DesireTooltipsCockIntroSCH;
			else if(this.isTChinese) return DesireTooltipsCockIntroTCH;
			else if(this.isKorean) return DesireTooltipsCockIntroKR;
			else if(this.isSpanish) return DesireTooltipsCockIntroSP;
			return DesireTooltipsCockIntroEN;
		}, configurable: true
	},
	DesireTooltipsBodyDesireRequirementsUnknown: {
		get: function() {
			if(this.isJapanese) return DesireTooltipsBodyDesireRequirementsUnknownJP;
			else if(this.isEnglish) return DesireTooltipsBodyDesireRequirementsUnknownEN;
			else if(this.isRussian) return DesireTooltipsBodyDesireRequirementsUnknownRU;
			else if(this.isSChinese) return DesireTooltipsBodyDesireRequirementsUnknownSCH;
			else if(this.isTChinese) return DesireTooltipsBodyDesireRequirementsUnknownTCH;
			else if(this.isKorean) return DesireTooltipsBodyDesireRequirementsUnknownKR;
			else if(this.isSpanish) return DesireTooltipsBodyDesireRequirementsUnknownSP;
			return DesireTooltipsBodyDesireRequirementsUnknownEN;
		}, configurable: true
	},
	DesireTooltipsCockDesireRequirementsUnknown: {
		get: function() {
			if(this.isJapanese) return DesireTooltipsCockDesireRequirementsUnknownJP;
			else if(this.isEnglish) return DesireTooltipsCockDesireRequirementsUnknownEN;
			else if(this.isRussian) return DesireTooltipsCockDesireRequirementsUnknownRU;
			else if(this.isSChinese) return DesireTooltipsCockDesireRequirementsUnknownSCH;
			else if(this.isTChinese) return DesireTooltipsCockDesireRequirementsUnknownTCH;
			else if(this.isKorean) return DesireTooltipsCockDesireRequirementsUnknownKR;
			else if(this.isSpanish) return DesireTooltipsCockDesireRequirementsUnknownSP;
			return DesireTooltipsCockDesireRequirementsUnknownEN;
		}, configurable: true
	},
	DesireTooltipsDesireRequirementsKnown: {
		get: function() {
			if(this.isJapanese) return DesireTooltipsDesireRequirementsKnownJP;
			else if(this.isEnglish) return DesireTooltipsDesireRequirementsKnownEN;
			else if(this.isRussian) return DesireTooltipsDesireRequirementsKnownRU;
			else if(this.isSChinese) return DesireTooltipsDesireRequirementsKnownSCH;
			else if(this.isTChinese) return DesireTooltipsDesireRequirementsKnownTCH;
			else if(this.isKorean) return DesireTooltipsDesireRequirementsKnownKR;
			else if(this.isSpanish) return DesireTooltipsDesireRequirementsKnownSP;
			return DesireTooltipsDesireRequirementsKnownEN;
		}, configurable: true
	},
	DesireTooltipsDesireRequirementsKnownFormat: {
		get: function() {
			if(this.isJapanese) return DesireTooltipsDesireRequirementsKnownFormatJP;
			else if(this.isEnglish) return DesireTooltipsDesireRequirementsKnownFormatEN;
			else if(this.isRussian) return DesireTooltipsDesireRequirementsKnownFormatRU;
			else if(this.isSChinese) return DesireTooltipsDesireRequirementsKnownFormatSCH;
			else if(this.isTChinese) return DesireTooltipsDesireRequirementsKnownFormatTCH;
			else if(this.isKorean) return DesireTooltipsDesireRequirementsKnownFormatKR;
			else if(this.isSpanish) return DesireTooltipsDesireRequirementsKnownFormatSP;
			return DesireTooltipsDesireRequirementsKnownFormatEN;
		}, configurable: true
	},

	DesireTooltipsMouthDesireDebuffOne: {
		get: function() {
			if(this.isJapanese) return DesireTooltipsMouthDesireDebuffOneJP;
			else if(this.isEnglish) return DesireTooltipsMouthDesireDebuffOneEN;
			else if(this.isRussian) return DesireTooltipsMouthDesireDebuffOneRU;
			else if(this.isSChinese) return DesireTooltipsMouthDesireDebuffOneSCH;
			else if(this.isTChinese) return DesireTooltipsMouthDesireDebuffOneTCH;
			else if(this.isKorean) return DesireTooltipsMouthDesireDebuffOneKR;
			else if(this.isSpanish) return DesireTooltipsMouthDesireDebuffOneSP;
			return DesireTooltipsMouthDesireDebuffOneEN;
		}, configurable: true
	},
	DesireTooltipsMouthDesireDebuffTwo: {
		get: function() {
			if(this.isJapanese) return DesireTooltipsMouthDesireDebuffTwoJP;
			else if(this.isEnglish) return DesireTooltipsMouthDesireDebuffTwoEN;
			else if(this.isRussian) return DesireTooltipsMouthDesireDebuffTwoRU;
			else if(this.isSChinese) return DesireTooltipsMouthDesireDebuffTwoSCH;
			else if(this.isTChinese) return DesireTooltipsMouthDesireDebuffTwoTCH;
			else if(this.isKorean) return DesireTooltipsMouthDesireDebuffTwoKR;
			else if(this.isSpanish) return DesireTooltipsMouthDesireDebuffTwoSP;
			return DesireTooltipsMouthDesireDebuffTwoEN;
		}, configurable: true
	},
	DesireTooltipsBoobsDesireDebuffOne: {
		get: function() {
			if(this.isJapanese) return DesireTooltipsBoobsDesireDebuffOneJP;
			else if(this.isEnglish) return DesireTooltipsBoobsDesireDebuffOneEN;
			else if(this.isRussian) return DesireTooltipsBoobsDesireDebuffOneRU;
			else if(this.isSChinese) return DesireTooltipsBoobsDesireDebuffOneSCH;
			else if(this.isTChinese) return DesireTooltipsBoobsDesireDebuffOneTCH;
			else if(this.isKorean) return DesireTooltipsBoobsDesireDebuffOneKR;
			else if(this.isSpanish) return DesireTooltipsBoobsDesireDebuffOneSP;
			return DesireTooltipsBoobsDesireDebuffOneEN;
		}, configurable: true
	},
	DesireTooltipsBoobsDesireDebuffTwo: {
		get: function() {
			if(this.isJapanese) return DesireTooltipsBoobsDesireDebuffTwoJP;
			else if(this.isEnglish) return DesireTooltipsBoobsDesireDebuffTwoEN;
			else if(this.isRussian) return DesireTooltipsBoobsDesireDebuffTwoRU;
			else if(this.isSChinese) return DesireTooltipsBoobsDesireDebuffTwoSCH;
			else if(this.isTChinese) return DesireTooltipsBoobsDesireDebuffTwoTCH;
			else if(this.isKorean) return DesireTooltipsBoobsDesireDebuffTwoKR;
			else if(this.isSpanish) return DesireTooltipsBoobsDesireDebuffTwoSP;
			return DesireTooltipsBoobsDesireDebuffTwoEN;
		}, configurable: true
	},
	DesireTooltipsPussyDesireDebuffOne: {
		get: function() {
			if(this.isJapanese) return DesireTooltipsPussyDesireDebuffOneJP;
			else if(this.isEnglish) return DesireTooltipsPussyDesireDebuffOneEN;
			else if(this.isRussian) return DesireTooltipsPussyDesireDebuffOneRU;
			else if(this.isSChinese) return DesireTooltipsPussyDesireDebuffOneSCH;
			else if(this.isTChinese) return DesireTooltipsPussyDesireDebuffOneTCH;
			else if(this.isKorean) return DesireTooltipsPussyDesireDebuffOneKR;
			else if(this.isSpanish) return DesireTooltipsPussyDesireDebuffOneSP;
			return DesireTooltipsPussyDesireDebuffOneEN;
		}, configurable: true
	},
	DesireTooltipsPussyDesireDebuffTwo: {
		get: function() {
			if(this.isJapanese) return DesireTooltipsPussyDesireDebuffTwoJP;
			else if(this.isEnglish) return DesireTooltipsPussyDesireDebuffTwoEN;
			else if(this.isRussian) return DesireTooltipsPussyDesireDebuffTwoRU;
			else if(this.isSChinese) return DesireTooltipsPussyDesireDebuffTwoSCH;
			else if(this.isTChinese) return DesireTooltipsPussyDesireDebuffTwoTCH;
			else if(this.isKorean) return DesireTooltipsPussyDesireDebuffTwoKR;
			else if(this.isSpanish) return DesireTooltipsPussyDesireDebuffTwoSP;
			return DesireTooltipsPussyDesireDebuffTwoEN;
		}, configurable: true
	},
	DesireTooltipsButtDesireDebuffOne: {
		get: function() {
			if(this.isJapanese) return DesireTooltipsButtDesireDebuffOneJP;
			else if(this.isEnglish) return DesireTooltipsButtDesireDebuffOneEN;
			else if(this.isRussian) return DesireTooltipsButtDesireDebuffOneRU;
			else if(this.isSChinese) return DesireTooltipsButtDesireDebuffOneSCH;
			else if(this.isTChinese) return DesireTooltipsButtDesireDebuffOneTCH;
			else if(this.isKorean) return DesireTooltipsButtDesireDebuffOneKR;
			else if(this.isSpanish) return DesireTooltipsButtDesireDebuffOneSP;
			return DesireTooltipsButtDesireDebuffOneEN;
		}, configurable: true
	},
	DesireTooltipsButtDesireDebuffTwo: {
		get: function() {
			if(this.isJapanese) return DesireTooltipsButtDesireDebuffTwoJP;
			else if(this.isEnglish) return DesireTooltipsButtDesireDebuffTwoEN;
			else if(this.isRussian) return DesireTooltipsButtDesireDebuffTwoRU;
			else if(this.isSChinese) return DesireTooltipsButtDesireDebuffTwoSCH;
			else if(this.isTChinese) return DesireTooltipsButtDesireDebuffTwoTCH;
			else if(this.isKorean) return DesireTooltipsButtDesireDebuffTwoKR;
			else if(this.isSpanish) return DesireTooltipsButtDesireDebuffTwoSP;
			return DesireTooltipsButtDesireDebuffTwoEN;
		}, configurable: true
	},
	DesireTooltipsCockDesireDebuffOne: {
		get: function() {
			if(this.isJapanese) return DesireTooltipsCockDesireDebuffOneJP;
			else if(this.isEnglish) return DesireTooltipsCockDesireDebuffOneEN;
			else if(this.isRussian) return DesireTooltipsCockDesireDebuffOneRU;
			else if(this.isSChinese) return DesireTooltipsCockDesireDebuffOneSCH;
			else if(this.isTChinese) return DesireTooltipsCockDesireDebuffOneTCH;
			else if(this.isKorean) return DesireTooltipsCockDesireDebuffOneKR;
			else if(this.isSpanish) return DesireTooltipsCockDesireDebuffOneSP;
			return DesireTooltipsCockDesireDebuffOneEN;
		}, configurable: true
	},
	DesireTooltipsCockDesireDebuffTwo: {
		get: function() {
			if(this.isJapanese) return DesireTooltipsCockDesireDebuffTwoJP;
			else if(this.isEnglish) return DesireTooltipsCockDesireDebuffTwoEN;
			else if(this.isRussian) return DesireTooltipsCockDesireDebuffTwoRU;
			else if(this.isSChinese) return DesireTooltipsCockDesireDebuffTwoSCH;
			else if(this.isTChinese) return DesireTooltipsCockDesireDebuffTwoTCH;
			else if(this.isKorean) return DesireTooltipsCockDesireDebuffTwoKR;
			else if(this.isSpanish) return DesireTooltipsCockDesireDebuffTwoSP;
			return DesireTooltipsCockDesireDebuffTwoEN;
		}, configurable: true
	},
	DesireTooltipsMouthDesireTopBuff: {
		get: function() {
			if(this.isJapanese) return DesireTooltipsMouthDesireTopBuffJP;
			else if(this.isEnglish) return DesireTooltipsMouthDesireTopBuffEN;
			else if(this.isRussian) return DesireTooltipsMouthDesireTopBuffRU;
			else if(this.isSChinese) return DesireTooltipsMouthDesireTopBuffSCH;
			else if(this.isTChinese) return DesireTooltipsMouthDesireTopBuffTCH;
			else if(this.isKorean) return DesireTooltipsMouthDesireTopBuffKR;
			else if(this.isSpanish) return DesireTooltipsMouthDesireTopBuffSP;
			return DesireTooltipsMouthDesireTopBuffEN;
		}, configurable: true
	},
	DesireTooltipsBoobsDesireTopBuff: {
		get: function() {
			if(this.isJapanese) return DesireTooltipsBoobsDesireTopBuffJP;
			else if(this.isEnglish) return DesireTooltipsBoobsDesireTopBuffEN;
			else if(this.isRussian) return DesireTooltipsBoobsDesireTopBuffRU;
			else if(this.isSChinese) return DesireTooltipsBoobsDesireTopBuffSCH;
			else if(this.isTChinese) return DesireTooltipsBoobsDesireTopBuffTCH;
			else if(this.isKorean) return DesireTooltipsBoobsDesireTopBuffKR;
			else if(this.isSpanish) return DesireTooltipsBoobsDesireTopBuffSP;
			return DesireTooltipsBoobsDesireTopBuffEN;
		}, configurable: true
	},
	DesireTooltipsPussyDesireTopBuff: {
		get: function() {
			if(this.isJapanese) return DesireTooltipsPussyDesireTopBuffJP;
			else if(this.isEnglish) return DesireTooltipsPussyDesireTopBuffEN;
			else if(this.isRussian) return DesireTooltipsPussyDesireTopBuffRU;
			else if(this.isSChinese) return DesireTooltipsPussyDesireTopBuffSCH;
			else if(this.isTChinese) return DesireTooltipsPussyDesireTopBuffTCH;
			else if(this.isKorean) return DesireTooltipsPussyDesireTopBuffKR;
			else if(this.isSpanish) return DesireTooltipsPussyDesireTopBuffSP;
			return DesireTooltipsPussyDesireTopBuffEN;
		}, configurable: true
	},
	DesireTooltipsButtDesireTopBuff: {
		get: function() {
			if(this.isJapanese) return DesireTooltipsButtDesireTopBuffJP;
			else if(this.isEnglish) return DesireTooltipsButtDesireTopBuffEN;
			else if(this.isRussian) return DesireTooltipsButtDesireTopBuffRU;
			else if(this.isSChinese) return DesireTooltipsButtDesireTopBuffSCH;
			else if(this.isTChinese) return DesireTooltipsButtDesireTopBuffTCH;
			else if(this.isKorean) return DesireTooltipsButtDesireTopBuffKR;
			else if(this.isSpanish) return DesireTooltipsButtDesireTopBuffSP;
			return DesireTooltipsButtDesireTopBuffEN;
		}, configurable: true
	},
	DesireTooltipsCockDesireTopBuff: {
		get: function() {
			if(this.isJapanese) return DesireTooltipsCockDesireTopBuffJP;
			else if(this.isEnglish) return DesireTooltipsCockDesireTopBuffEN;
			else if(this.isRussian) return DesireTooltipsCockDesireTopBuffRU;
			else if(this.isSChinese) return DesireTooltipsCockDesireTopBuffSCH;
			else if(this.isTChinese) return DesireTooltipsCockDesireTopBuffTCH;
			else if(this.isKorean) return DesireTooltipsCockDesireTopBuffKR;
			else if(this.isSpanish) return DesireTooltipsCockDesireTopBuffSP;
			return DesireTooltipsCockDesireTopBuffEN;
		}, configurable: true
	},


	virginityText: {
		get: function() {
			if(this.isJapanese) return VirginityTextJP;
			else if(this.isEnglish) return VirginityTextEN;
			else if(this.isRussian) return VirginityTextRU;
			else if(this.isSChinese) return VirginityTextSCH;
			else if(this.isTChinese) return VirginityTextTCH;
			else if(this.isKorean) return VirginityTextKR;
			else if(this.isSpanish) return VirginityTextSP;
			return VirginityTextEN;
		}, configurable: true
	},
	virginityYes: {
		get: function() {
			if(this.isJapanese) return VirginityYesJP;
			else if(this.isEnglish) return VirginityYesEN;
			else if(this.isRussian) return VirginityYesRU;
			else if(this.isSChinese) return VirginityYesSCH;
			else if(this.isTChinese) return VirginityYesTCH;
			else if(this.isKorean) return VirginityYesKR;
			else if(this.isSpanish) return VirginityYesSP;
			return VirginityYesEN;
		}, configurable: true
	},
	virginityNo: {
		get: function() {
			if(this.isJapanese) return VirginityNoJP;
			else if(this.isEnglish) return VirginityNoEN;
			else if(this.isRussian) return VirginityNoRU;
			else if(this.isSChinese) return VirginityNoSCH;
			else if(this.isTChinese) return VirginityNoTCH;
			else if(this.isKorean) return VirginityNoKR;
			else if(this.isSpanish) return VirginityNoSP;
			return VirginityNoEN;
		}, configurable: true
	},
	virginActorText: {
		get: function() {
			if(this.isJapanese) return VirginActorTextJP;
			else if(this.isEnglish) return VirginActorTextEN;
			else if(this.isRussian) return VirginActorTextRU;
			else if(this.isSChinese) return VirginActorTextSCH;
			else if(this.isTChinese) return VirginActorTextTCH;
			else if(this.isKorean) return VirginActorTextKR;
			else if(this.isSpanish) return VirginActorTextSP;
			return VirginActorTextEN;
		}, configurable: true
	},
	virginActorNone: {
		get: function() {
			if(this.isJapanese) return VirginActorNoneJP;
			else if(this.isEnglish) return VirginActorNoneEN;
			else if(this.isRussian) return VirginActorNoneRU;
			else if(this.isSChinese) return VirginActorNoneSCH;
			else if(this.isTChinese) return VirginActorNoneTCH;
			else if(this.isKorean) return VirginActorNoneKR;
			else if(this.isSpanish) return VirginActorNoneSP;
			return VirginActorNoneEN;
		}, configurable: true
	},

	actorNoDamageGraze: {
		get: function() {
			if(this.isJapanese) return ActorNoDamageGrazeJP;
			else if(this.isEnglish) return ActorNoDamageGrazeEN;
			else if(this.isRussian) return ActorNoDamageGrazeRU;
			else if(this.isSChinese) return ActorNoDamageGrazeSCH;
			else if(this.isTChinese) return ActorNoDamageGrazeTCH;
			else if(this.isKorean) return ActorNoDamageGrazeKR;
			else if(this.isSpanish) return ActorNoDamageGrazeSP;
			return ActorNoDamageGrazeEN;
		}, configurable: true
	},
	enemyNoDamageGraze: {
		get: function() {
			if(this.isJapanese) return EnemyNoDamageGrazeJP;
			else if(this.isEnglish) return EnemyNoDamageGrazeEN;
			else if(this.isRussian) return EnemyNoDamageGrazeRU;
			else if(this.isSChinese) return EnemyNoDamageGrazeSCH;
			else if(this.isTChinese) return EnemyNoDamageGrazeTCH;
			else if(this.isKorean) return EnemyNoDamageGrazeKR;
			else if(this.isSpanish) return EnemyNoDamageGrazeSP;
			return EnemyNoDamageGrazeEN;
		}, configurable: true
	},
	charmEquipReq: {
		get: function() {
			if(this.isJapanese) return CharmEquipReqTextJP;
			else if(this.isEnglish) return CharmEquipReqTextEN;
			else if(this.isRussian) return CharmEquipReqTextRU;
			else if(this.isSChinese) return CharmEquipReqTextSCH;
			else if(this.isTChinese) return CharmEquipReqTextTCH;
			else if(this.isKorean) return CharmEquipReqTextKR;
			else if(this.isSpanish) return CharmEquipReqTextSP;
			return CharmEquipReqTextEN;
		}, configurable: true
	},
	growthRateText: {
		get: function() {
			if(this.isJapanese) return GrowthRateTextJP;
			else if(this.isEnglish) return GrowthRateTextEN;
			else if(this.isRussian) return GrowthRateTextRU;
			else if(this.isSChinese) return GrowthRateTextSCH;
			else if(this.isTChinese) return GrowthRateTextTCH;
			else if(this.isKorean) return GrowthRateTextKR;
			else if(this.isSpanish) return GrowthRateTextSP;
			return GrowthRateTextEN;
		}, configurable: true
	},

	resultsVictory: {
		get: function() {
			if(this.isJapanese) return RemResultsVictoryJP;
			else if(this.isEnglish) return RemResultsVictoryEN;
			else if(this.isRussian) return RemResultsVictoryRU;
			else if(this.isSChinese) return RemResultsVictorySCH;
			else if(this.isTChinese) return RemResultsVictoryTCH;
			else if(this.isKorean) return RemResultsVictoryKR;
			else if(this.isSpanish) return RemResultsVictorySP;
			return RemResultsVictoryEN;
		}, configurable: true
	},
	resultsDefeat: {
		get: function() {
			if(this.isJapanese) return RemResultsDefeatJP;
			else if(this.isEnglish) return RemResultsDefeatEN;
			else if(this.isRussian) return RemResultsDefeatRU;
			else if(this.isSChinese) return RemResultsDefeatSCH;
			else if(this.isTChinese) return RemResultsDefeatTCH;
			else if(this.isKorean) return RemResultsDefeatKR;
			else if(this.isSpanish) return RemResultsDefeatSP;
			return RemResultsDefeatEN;
		}, configurable: true
	},
	resultsAborted: {
		get: function() {
			if(this.isJapanese) return RemResultsAbortedJP;
			else if(this.isEnglish) return RemResultsAbortedEN;
			else if(this.isRussian) return RemResultsAbortedRU;
			else if(this.isSChinese) return RemResultsAbortedSCH;
			else if(this.isTChinese) return RemResultsAbortedTCH;
			else if(this.isKorean) return RemResultsAbortedKR;
			else if(this.isSpanish) return RemResultsAbortedSP;
			return RemResultsAbortedEN;
		}, configurable: true
	},
	resultsMasturbateBattleNone: {
		get: function() {
			if(this.isJapanese) return RemResultsMasturbateBattleNoneJP;
			else if(this.isEnglish) return RemResultsMasturbateBattleNoneEN;
			else if(this.isRussian) return RemResultsMasturbateBattleNoneRU;
			else if(this.isSChinese) return RemResultsMasturbateBattleNoneSCH;
			else if(this.isTChinese) return RemResultsMasturbateBattleNoneTCH;
			else if(this.isKorean) return RemResultsMasturbateBattleNoneKR;
			else if(this.isSpanish) return RemResultsMasturbateBattleNoneSP;
			return RemResultsMasturbateBattleNoneEN;
		}, configurable: true
	},
	resultsMasturbateBattleSingle: {
		get: function() {
			if(this.isJapanese) return RemResultsMasturbateBattleSingleJP;
			else if(this.isEnglish) return RemResultsMasturbateBattleSingleEN;
			else if(this.isRussian) return RemResultsMasturbateBattleSingleRU;
			else if(this.isSChinese) return RemResultsMasturbateBattleSingleSCH;
			else if(this.isTChinese) return RemResultsMasturbateBattleSingleTCH;
			else if(this.isKorean) return RemResultsMasturbateBattleSingleKR;
			else if(this.isSpanish) return RemResultsMasturbateBattleSingleSP;
			return RemResultsMasturbateBattleSingleEN;
		}, configurable: true
	},
	resultsMasturbateBattlePlural: {
		get: function() {
			if(this.isJapanese) return RemResultsMasturbateBattlePluralJP;
			else if(this.isEnglish) return RemResultsMasturbateBattlePluralEN;
			else if(this.isRussian) return RemResultsMasturbateBattlePluralRU;
			else if(this.isSChinese) return RemResultsMasturbateBattlePluralSCH;
			else if(this.isTChinese) return RemResultsMasturbateBattlePluralTCH;
			else if(this.isKorean) return RemResultsMasturbateBattlePluralKR;
			else if(this.isSpanish) return RemResultsMasturbateBattlePluralSP;
			return RemResultsMasturbateBattlePluralEN;
		}, configurable: true
	},

	resultsJobBattleEnd: {
		get: function() {
			if(this.isJapanese) return RemResultsJobBattleEndJP;
			else if(this.isEnglish) return RemResultsJobBattleEndEN;
			else if(this.isRussian) return RemResultsJobBattleEndRU;
			else if(this.isSChinese) return RemResultsJobBattleEndSCH;
			else if(this.isTChinese) return RemResultsJobBattleEndTCH;
			else if(this.isKorean) return RemResultsJobBattleEndKR;
			else if(this.isSpanish) return RemResultsJobBattleEndSP;
			return RemResultsJobBattleEndEN;
		}, configurable: true
	},

	resultsBitchEndBattleEnd: {
		get: function() {
			if(this.isJapanese) return RemResultsBitchEndBattleEndJP;
			else if(this.isEnglish) return RemResultsBitchEndBattleEndEN;
			else if(this.isRussian) return RemResultsBitchEndBattleEndRU;
			else if(this.isSChinese) return RemResultsBitchEndBattleEndSCH;
			else if(this.isTChinese) return RemResultsBitchEndBattleEndTCH;
			else if(this.isKorean) return RemResultsBitchEndBattleEndKR;
			else if(this.isSpanish) return RemResultsBitchEndBattleEndSP;
			return RemResultsBitchEndBattleEndEN;
		}, configurable: true
	},
	resultsEndlessBattleNormal: {
		get: function() {
			if(this.isJapanese) return RemResultsEndlessBattleNormalJP;
			else if(this.isEnglish) return RemResultsEndlessBattleNormalEN;
			else if(this.isRussian) return RemResultsEndlessBattleNormalRU;
			else if(this.isSChinese) return RemResultsEndlessBattleNormalSCH;
			else if(this.isTChinese) return RemResultsEndlessBattleNormalTCH;
			else if(this.isKorean) return RemResultsEndlessBattleNormalKR;
			else if(this.isSpanish) return RemResultsEndlessBattleNormalSP;
			return RemResultsEndlessBattleNormalEN;
		}, configurable: true
	},
	resultsEndlessBattleHell: {
		get: function() {
			if(this.isJapanese) return RemResultsEndlessBattleHellJP;
			else if(this.isEnglish) return RemResultsEndlessBattleHellEN;
			else if(this.isRussian) return RemResultsEndlessBattleHellRU;
			else if(this.isSChinese) return RemResultsEndlessBattleHellSCH;
			else if(this.isTChinese) return RemResultsEndlessBattleHellTCH;
			else if(this.isKorean) return RemResultsEndlessBattleHellKR;
			else if(this.isSpanish) return RemResultsEndlessBattleHellSP;
			return RemResultsEndlessBattleHellEN;
		}, configurable: true
	},


	resultsGainedExp: {
		get: function() {
			if(this.isJapanese) return RemResultsGainedExpJP;
			else if(this.isEnglish) return RemResultsGainedExpEN;
			else if(this.isRussian) return RemResultsGainedExpRU;
			else if(this.isSChinese) return RemResultsGainedExpSCH;
			else if(this.isTChinese) return RemResultsGainedExpTCH;
			else if(this.isKorean) return RemResultsGainedExpKR;
			else if(this.isSpanish) return RemResultsGainedExpSP;
			return RemResultsGainedExpEN;
		}, configurable: true
	},
	resultsLevelUp: {
		get: function() {
			if(this.isJapanese) return RemResultsLevelUpJP;
			else if(this.isEnglish) return RemResultsLevelUpEN;
			else if(this.isRussian) return RemResultsLevelUpRU;
			else if(this.isSChinese) return RemResultsLevelUpSCH;
			else if(this.isTChinese) return RemResultsLevelUpTCH;
			else if(this.isKorean) return RemResultsLevelUpKR;
			else if(this.isSpanish) return RemResultsLevelUpSP;
			return RemResultsLevelUpEN;
		}, configurable: true
	},
	resultsOrderIncrease: {
		get: function() {
			if(this.isJapanese) return RemResultsOrderIncreaseJP;
			else if(this.isEnglish) return RemResultsOrderIncreaseEN;
			else if(this.isRussian) return RemResultsOrderIncreaseRU;
			else if(this.isSChinese) return RemResultsOrderIncreaseSCH;
			else if(this.isTChinese) return RemResultsOrderIncreaseTCH;
			else if(this.isKorean) return RemResultsOrderIncreaseKR;
			else if(this.isSpanish) return RemResultsOrderIncreaseSP;
			return RemResultsOrderIncreaseEN;
		}, configurable: true
	},
	resultsOrderDecrease: {
		get: function() {
			if(this.isJapanese) return RemResultsOrderDecreaseJP;
			else if(this.isEnglish) return RemResultsOrderDecreaseEN;
			else if(this.isRussian) return RemResultsOrderDecreaseRU;
			else if(this.isSChinese) return RemResultsOrderDecreaseSCH;
			else if(this.isTChinese) return RemResultsOrderDecreaseTCH;
			else if(this.isKorean) return RemResultsOrderDecreaseKR;
			else if(this.isSpanish) return RemResultsOrderDecreaseSP;
			return RemResultsOrderDecreaseEN;
		}, configurable: true
	},
	resultsFundingIncrease: {
		get: function() {
			if(this.isJapanese) return RemResultsFundingIncreaseJP;
			else if(this.isEnglish) return RemResultsFundingIncreaseEN;
			else if(this.isRussian) return RemResultsFundingIncreaseRU;
			else if(this.isSChinese) return RemResultsFundingIncreaseSCH;
			else if(this.isTChinese) return RemResultsFundingIncreaseTCH;
			else if(this.isKorean) return RemResultsFundingIncreaseKR;
			else if(this.isSpanish) return RemResultsFundingIncreaseSP;
			return RemResultsFundingIncreaseEN;
		}, configurable: true
	},
	resultsFundingDecrease: {
		get: function() {
			if(this.isJapanese) return RemResultsFundingDecreaseJP;
			else if(this.isEnglish) return RemResultsFundingDecreaseEN;
			else if(this.isRussian) return RemResultsFundingDecreaseRU;
			else if(this.isSChinese) return RemResultsFundingDecreaseSCH;
			else if(this.isTChinese) return RemResultsFundingDecreaseTCH;
			else if(this.isKorean) return RemResultsFundingDecreaseKR;
			else if(this.isSpanish) return RemResultsFundingDecreaseSP;
			return RemResultsFundingDecreaseEN;
		}, configurable: true
	},
	resultsFatigueIncrease: {
		get: function() {
			if(this.isJapanese) return RemResultsFatigueIncreaseJP;
			else if(this.isEnglish) return RemResultsFatigueIncreaseEN;
			else if(this.isRussian) return RemResultsFatigueIncreaseRU;
			else if(this.isSChinese) return RemResultsFatigueIncreaseSCH;
			else if(this.isTChinese) return RemResultsFatigueIncreaseTCH;
			else if(this.isKorean) return RemResultsFatigueIncreaseKR;
			else if(this.isSpanish) return RemResultsFatigueIncreaseSP;
			return RemResultsFatigueIncreaseEN;
		}, configurable: true
	},
	resultsFatigueDecrease: {
		get: function() {
			if(this.isJapanese) return RemResultsFatigueDecreaseJP;
			else if(this.isEnglish) return RemResultsFatigueDecreaseEN;
			else if(this.isRussian) return RemResultsFatigueDecreaseRU;
			else if(this.isSChinese) return RemResultsFatigueDecreaseSCH;
			else if(this.isTChinese) return RemResultsFatigueDecreaseTCH;
			else if(this.isKorean) return RemResultsFatigueDecreaseKR;
			else if(this.isSpanish) return RemResultsFatigueDecreaseSP;
			return RemResultsFatigueDecreaseEN;
		}, configurable: true
	},
	resultsItemDrop: {
		get: function() {
			if(this.isJapanese) return RemResultsItemDropJP;
			else if(this.isEnglish) return RemResultsItemDropEN;
			else {
				try {
					if(this.isRussian) return RemResultsItemDropRU;
					else if(this.isSChinese) return RemResultsItemDropSCH;
					else if(this.isTChinese) return RemResultsItemDropTCH;
					else if(this.isKorean) return RemResultsItemDropKR;
					else if(this.isSpanish) return RemResultsItemDropSP;
				} catch(e) {}
			}
			return RemResultsItemDropEN;
		}, configurable: true
	},



	resultsSubduedWithAttack: {
		get: function() {
			if(this.isJapanese) return RemResultsSubduedWithAttackJP;
			else if(this.isEnglish) return RemResultsSubduedWithAttackEN;
			else if(this.isRussian) return RemResultsSubduedWithAttackRU;
			else if(this.isSChinese) return RemResultsSubduedWithAttackSCH;
			else if(this.isTChinese) return RemResultsSubduedWithAttackTCH;
			else if(this.isKorean) return RemResultsSubduedWithAttackKR;
			else if(this.isSpanish) return RemResultsSubduedWithAttackSP;
			return RemResultsSubduedWithAttackEN;
		}, configurable: true
	},
	resultsSubduedSexually: {
		get: function() {
			if(this.isJapanese) return RemResultsSubduedSexuallyJP;
			else if(this.isEnglish) return RemResultsSubduedSexuallyEN;
			else if(this.isRussian) return RemResultsSubduedSexuallyRU;
			else if(this.isSChinese) return RemResultsSubduedSexuallySCH;
			else if(this.isTChinese) return RemResultsSubduedSexuallyTCH;
			else if(this.isKorean) return RemResultsSubduedSexuallyKR;
			else if(this.isSpanish) return RemResultsSubduedSexuallySP;
			return RemResultsSubduedSexuallyEN;
		}, configurable: true
	},
	resultsSubduedWithAttackAndSexually: {
		get: function() {
			if(this.isJapanese) return RemResultsSubduedWithAttackAndSexuallyJP;
			else if(this.isEnglish) return RemResultsSubduedWithAttackAndSexuallyEN;
			else if(this.isRussian) return RemResultsSubduedWithAttackAndSexuallyRU;
			else if(this.isSChinese) return RemResultsSubduedWithAttackAndSexuallySCH;
			else if(this.isTChinese) return RemResultsSubduedWithAttackAndSexuallyTCH;
			else if(this.isKorean) return RemResultsSubduedWithAttackAndSexuallyKR;
			else if(this.isSpanish) return RemResultsSubduedWithAttackAndSexuallySP;
			return RemResultsSubduedWithAttackAndSexuallyEN;
		}, configurable: true
	},
	resultsKarrynOrgasmSingular: {
		get: function() {
			if(this.isJapanese) return RemResultsKarrynOrgasmSingularJP;
			else if(this.isEnglish) return RemResultsKarrynOrgasmSingularEN;
			else if(this.isRussian) return RemResultsKarrynOrgasmSingularRU;
			else if(this.isSChinese) return RemResultsKarrynOrgasmSingularSCH;
			else if(this.isTChinese) return RemResultsKarrynOrgasmSingularTCH;
			else if(this.isKorean) return RemResultsKarrynOrgasmSingularKR;
			else if(this.isSpanish) return RemResultsKarrynOrgasmSingularSP;
			return RemResultsKarrynOrgasmSingularEN;
		}, configurable: true
	},
	resultsKarrynOrgasmPlural: {
		get: function() {
			if(this.isJapanese) return RemResultsKarrynOrgasmPluralJP;
			else if(this.isEnglish) return RemResultsKarrynOrgasmPluralEN;
			else if(this.isRussian) return RemResultsKarrynOrgasmPluralRU;
			else if(this.isSChinese) return RemResultsKarrynOrgasmPluralSCH;
			else if(this.isTChinese) return RemResultsKarrynOrgasmPluralTCH;
			else if(this.isKorean) return RemResultsKarrynOrgasmPluralKR;
			else if(this.isSpanish) return RemResultsKarrynOrgasmPluralSP;
			return RemResultsKarrynOrgasmPluralEN;
		}, configurable: true
	},
	resultsKarrynMasturbatedInBattleSingular: {
		get: function() {
			if(this.isJapanese) return RemResultsKarrynMasturbatedInBattleSingularJP;
			else if(this.isEnglish) return RemResultsKarrynMasturbatedInBattleSingularEN;
			else if(this.isRussian) return RemResultsKarrynMasturbatedInBattleSingularRU;
			else if(this.isSChinese) return RemResultsKarrynMasturbatedInBattleSingularSCH;
			else if(this.isTChinese) return RemResultsKarrynMasturbatedInBattleSingularTCH;
			else if(this.isKorean) return RemResultsKarrynMasturbatedInBattleSingularKR;
			else if(this.isSpanish) return RemResultsKarrynMasturbatedInBattleSingularSP;
			return RemResultsKarrynMasturbatedInBattleSingularEN;
		}, configurable: true
	},
	resultsKarrynMasturbatedInBattlePlural: {
		get: function() {
			if(this.isJapanese) return RemResultsKarrynMasturbatedInBattlePluralJP;
			else if(this.isEnglish) return RemResultsKarrynMasturbatedInBattlePluralEN;
			else if(this.isRussian) return RemResultsKarrynMasturbatedInBattlePluralRU;
			else if(this.isSChinese) return RemResultsKarrynMasturbatedInBattlePluralSCH;
			else if(this.isTChinese) return RemResultsKarrynMasturbatedInBattlePluralTCH;
			else if(this.isKorean) return RemResultsKarrynMasturbatedInBattlePluralKR;
			else if(this.isSpanish) return RemResultsKarrynMasturbatedInBattlePluralSP;
			return RemResultsKarrynMasturbatedInBattlePluralEN;
		}, configurable: true
	},
	resultsKarrynKiss: {
		get: function() {
			if(this.isJapanese) return RemResultsKarrynKissJP;
			else if(this.isEnglish) return RemResultsKarrynKissEN;
			else if(this.isRussian) return RemResultsKarrynKissRU;
			else if(this.isSChinese) return RemResultsKarrynKissSCH;
			else if(this.isTChinese) return RemResultsKarrynKissTCH;
			else if(this.isKorean) return RemResultsKarrynKissKR;
			else if(this.isSpanish) return RemResultsKarrynKissSP;
			return RemResultsKarrynKissEN;
		}, configurable: true
	},
	resultsKarrynHandjob: {
		get: function() {
			if(this.isJapanese) return RemResultsKarrynHandjobJP;
			else if(this.isEnglish) return RemResultsKarrynHandjobEN;
			else if(this.isRussian) return RemResultsKarrynHandjobRU;
			else if(this.isSChinese) return RemResultsKarrynHandjobSCH;
			else if(this.isTChinese) return RemResultsKarrynHandjobTCH;
			else if(this.isKorean) return RemResultsKarrynHandjobKR;
			else if(this.isSpanish) return RemResultsKarrynHandjobSP;
			return RemResultsKarrynHandjobEN;
		}, configurable: true
	},
	resultsKarrynBlowjob: {
		get: function() {
			if(this.isJapanese) return RemResultsKarrynBlowjobJP;
			else if(this.isEnglish) return RemResultsKarrynBlowjobEN;
			else if(this.isRussian) return RemResultsKarrynBlowjobRU;
			else if(this.isSChinese) return RemResultsKarrynBlowjobSCH;
			else if(this.isTChinese) return RemResultsKarrynBlowjobTCH;
			else if(this.isKorean) return RemResultsKarrynBlowjobKR;
			else if(this.isSpanish) return RemResultsKarrynBlowjobSP;
			return RemResultsKarrynBlowjobEN;
		}, configurable: true
	},
	resultsKarrynTitjob: {
		get: function() {
			if(this.isJapanese) return RemResultsKarrynTitjobJP;
			else if(this.isEnglish) return RemResultsKarrynTitjobEN;
			else if(this.isRussian) return RemResultsKarrynTitjobRU;
			else if(this.isSChinese) return RemResultsKarrynTitjobSCH;
			else if(this.isTChinese) return RemResultsKarrynTitjobTCH;
			else if(this.isKorean) return RemResultsKarrynTitjobKR;
			else if(this.isSpanish) return RemResultsKarrynTitjobSP;
			return RemResultsKarrynTitjobEN;
		}, configurable: true
	},
	resultsKarrynFootjob: {
		get: function() {
			if(this.isJapanese) return RemResultsKarrynFootjobJP;
			else if(this.isEnglish) return RemResultsKarrynFootjobEN;
			else if(this.isRussian) return RemResultsKarrynFootjobRU;
			else if(this.isSChinese) return RemResultsKarrynFootjobSCH;
			else if(this.isTChinese) return RemResultsKarrynFootjobTCH;
			else if(this.isKorean) return RemResultsKarrynFootjobKR;
			else if(this.isSpanish) return RemResultsKarrynFootjobSP;
			return RemResultsKarrynFootjobEN;
		}, configurable: true
	},
	resultsKarrynRimjob: {
		get: function() {
			if(this.isJapanese) return RemResultsKarrynRimjobJP;
			else if(this.isEnglish) return RemResultsKarrynRimjobEN;
			else if(this.isRussian) return RemResultsKarrynRimjobRU;
			else if(this.isSChinese) return RemResultsKarrynRimjobSCH;
			else if(this.isTChinese) return RemResultsKarrynRimjobTCH;
			else if(this.isKorean) return RemResultsKarrynRimjobKR;
			else if(this.isSpanish) return RemResultsKarrynRimjobSP;
			return RemResultsKarrynRimjobEN;
		}, configurable: true
	},
	resultsKarrynVaginalSex: {
		get: function() {
			if(this.isJapanese) return RemResultsKarrynVaginalSexJP;
			else if(this.isEnglish) return RemResultsKarrynVaginalSexEN;
			else if(this.isRussian) return RemResultsKarrynVaginalSexRU;
			else if(this.isSChinese) return RemResultsKarrynVaginalSexSCH;
			else if(this.isTChinese) return RemResultsKarrynVaginalSexTCH;
			else if(this.isKorean) return RemResultsKarrynVaginalSexKR;
			else if(this.isSpanish) return RemResultsKarrynVaginalSexSP;
			return RemResultsKarrynVaginalSexEN;
		}, configurable: true
	},
	resultsKarrynAnalSex: {
		get: function() {
			if(this.isJapanese) return RemResultsKarrynAnalSexJP;
			else if(this.isEnglish) return RemResultsKarrynAnalSexEN;
			else if(this.isRussian) return RemResultsKarrynAnalSexRU;
			else if(this.isSChinese) return RemResultsKarrynAnalSexSCH;
			else if(this.isTChinese) return RemResultsKarrynAnalSexTCH;
			else if(this.isKorean) return RemResultsKarrynAnalSexKR;
			else if(this.isSpanish) return RemResultsKarrynAnalSexSP;
			return RemResultsKarrynAnalSexEN;
		}, configurable: true
	},


	resultsPassivesTitle: {
		get: function() {
			if(this.isJapanese) return RemResultsPassivesTitleJP;
			else if(this.isEnglish) return RemResultsPassivesTitleEN;
			else if(this.isRussian) return RemResultsPassivesTitleRU;
			else if(this.isSChinese) return RemResultsPassivesTitleSCH;
			else if(this.isTChinese) return RemResultsPassivesTitleTCH;
			else if(this.isKorean) return RemResultsPassivesTitleKR;
			else if(this.isSpanish) return RemResultsPassivesTitleSP;
			return RemResultsPassivesTitleEN;
		}, configurable: true
	},
	RemResultsTooManyPassivesUnlocked: {
		get: function() {
			if(this.isJapanese) return RemResultsTooManyPassivesUnlockedJP;
			else if(this.isEnglish) return RemResultsTooManyPassivesUnlockedEN;
			else if(this.isRussian) return RemResultsTooManyPassivesUnlockedRU;
			else if(this.isSChinese) return RemResultsTooManyPassivesUnlockedSCH;
			else if(this.isTChinese) return RemResultsTooManyPassivesUnlockedTCH;
			else if(this.isKorean) return RemResultsTooManyPassivesUnlockedKR;
			else if(this.isSpanish) return RemResultsTooManyPassivesUnlockedSP;
			return RemResultsTooManyPassivesUnlockedEN;
		}, configurable: true
	},


	RemDailyReportDayCount: {
		get: function() {
			if(this.isJapanese) return RemDailyReportDayCountJP;
			else if(this.isEnglish) return RemDailyReportDayCountEN;
			else if(this.isRussian) return RemDailyReportDayCountRU;
			else if(this.isSChinese) return RemDailyReportDayCountSCH;
			else if(this.isTChinese) return RemDailyReportDayCountTCH;
			else if(this.isKorean) return RemDailyReportDayCountKR;
			else if(this.isSpanish) return RemDailyReportDayCountSP;
			return RemDailyReportDayCountEN;
		}, configurable: true
	},
	RemDailyReportAnarchyNoLimit: {
		get: function() {
			if(this.isJapanese) return RemDailyReportAnarchyNoLimitJP;
			else if(this.isEnglish) return RemDailyReportAnarchyNoLimitEN;
			else if(this.isRussian) return RemDailyReportAnarchyNoLimitRU;
			else if(this.isSChinese) return RemDailyReportAnarchyNoLimitSCH;
			else if(this.isTChinese) return RemDailyReportAnarchyNoLimitTCH;
			else if(this.isKorean) return RemDailyReportAnarchyNoLimitKR;
			else if(this.isSpanish) return RemDailyReportAnarchyNoLimitSP;
			return RemDailyReportAnarchyNoLimitEN;
		}, configurable: true
	},
	RemDailyReportAnarchyLimitBefore_singular: {
		get: function() {
			if(this.isJapanese) return RemDailyReportAnarchyLimitBefore_singularJP;
			else if(this.isEnglish) return RemDailyReportAnarchyLimitBefore_singularEN;
			else if(this.isRussian) return RemDailyReportAnarchyLimitBefore_singularRU;
			else if(this.isSChinese) return RemDailyReportAnarchyLimitBefore_singularSCH;
			else if(this.isTChinese) return RemDailyReportAnarchyLimitBefore_singularTCH;
			else if(this.isKorean) return RemDailyReportAnarchyLimitBefore_singularKR;
			else if(this.isSpanish) return RemDailyReportAnarchyLimitBefore_singularSP;
			return RemDailyReportAnarchyLimitBefore_singularEN;
		}, configurable: true
	},
	RemDailyReportAnarchyLimitBefore_plural: {
		get: function() {
			if(this.isJapanese) return RemDailyReportAnarchyLimitBefore_pluralJP;
			else if(this.isEnglish) return RemDailyReportAnarchyLimitBefore_pluralEN;
			else if(this.isRussian) return RemDailyReportAnarchyLimitBefore_pluralRU;
			else if(this.isSChinese) return RemDailyReportAnarchyLimitBefore_pluralSCH;
			else if(this.isTChinese) return RemDailyReportAnarchyLimitBefore_pluralTCH;
			else if(this.isKorean) return RemDailyReportAnarchyLimitBefore_pluralKR;
			else if(this.isSpanish) return RemDailyReportAnarchyLimitBefore_pluralSP;
			return RemDailyReportAnarchyLimitBefore_pluralEN;
		}, configurable: true
	},
	RemDailyReportAnarchyPastLimit: {
		get: function() {
			if(this.isJapanese) return RemDailyReportAnarchyPastLimitJP;
			else if(this.isEnglish) return RemDailyReportAnarchyPastLimitEN;
			else if(this.isRussian) return RemDailyReportAnarchyPastLimitRU;
			else if(this.isSChinese) return RemDailyReportAnarchyPastLimitSCH;
			else if(this.isTChinese) return RemDailyReportAnarchyPastLimitTCH;
			else if(this.isKorean) return RemDailyReportAnarchyPastLimitKR;
			else if(this.isSpanish) return RemDailyReportAnarchyPastLimitSP;
			return RemDailyReportAnarchyPastLimitEN;
		}, configurable: true
	},
	RemDailyReportRiot_New: {
		get: function() {
			if(this.isJapanese) return RemDailyReportRiot_NewJP;
			else if(this.isEnglish) return RemDailyReportRiot_NewEN;
			else if(this.isRussian) return RemDailyReportRiot_NewRU;
			else if(this.isSChinese) return RemDailyReportRiot_NewSCH;
			else if(this.isTChinese) return RemDailyReportRiot_NewTCH;
			else if(this.isKorean) return RemDailyReportRiot_NewKR;
			else if(this.isSpanish) return RemDailyReportRiot_NewSP;
			return RemDailyReportRiot_NewEN;
		}, configurable: true
	},
	RemDailyReportRiot_Old: {
		get: function() {
			if(this.isJapanese) return RemDailyReportRiot_OldJP;
			else if(this.isEnglish) return RemDailyReportRiot_OldEN;
			else if(this.isRussian) return RemDailyReportRiot_OldRU;
			else if(this.isSChinese) return RemDailyReportRiot_OldSCH;
			else if(this.isTChinese) return RemDailyReportRiot_OldTCH;
			else if(this.isKorean) return RemDailyReportRiot_OldKR;
			else if(this.isSpanish) return RemDailyReportRiot_OldSP;
			return RemDailyReportRiot_OldEN;
		}, configurable: true
	},
	RemDailyReportOrderChange_Positive: {
		get: function() {
			if(this.isJapanese) return RemDailyReportOrderChange_PositiveJP;
			else if(this.isEnglish) return RemDailyReportOrderChange_PositiveEN;
			else if(this.isRussian) return RemDailyReportOrderChange_PositiveRU;
			else if(this.isSChinese) return RemDailyReportOrderChange_PositiveSCH;
			else if(this.isTChinese) return RemDailyReportOrderChange_PositiveTCH;
			else if(this.isKorean) return RemDailyReportOrderChange_PositiveKR;
			else if(this.isSpanish) return RemDailyReportOrderChange_PositiveSP;
			return RemDailyReportOrderChange_PositiveEN;
		}, configurable: true
	},
	RemDailyReportOrderChange_Negative: {
		get: function() {
			if(this.isJapanese) return RemDailyReportOrderChange_NegativeJP;
			else if(this.isEnglish) return RemDailyReportOrderChange_NegativeEN;
			else if(this.isRussian) return RemDailyReportOrderChange_NegativeRU;
			else if(this.isSChinese) return RemDailyReportOrderChange_NegativeSCH;
			else if(this.isTChinese) return RemDailyReportOrderChange_NegativeTCH;
			else if(this.isKorean) return RemDailyReportOrderChange_NegativeKR;
			else if(this.isSpanish) return RemDailyReportOrderChange_NegativeSP;
			return RemDailyReportOrderChange_NegativeEN;
		}, configurable: true
	},
	RemDailyReportOrderChange_Neutral: {
		get: function() {
			if(this.isJapanese) return RemDailyReportOrderChange_NeutralJP;
			else if(this.isEnglish) return RemDailyReportOrderChange_NeutralEN;
			else if(this.isRussian) return RemDailyReportOrderChange_NeutralRU;
			else if(this.isSChinese) return RemDailyReportOrderChange_NeutralSCH;
			else if(this.isTChinese) return RemDailyReportOrderChange_NeutralTCH;
			else if(this.isKorean) return RemDailyReportOrderChange_NeutralKR;
			else if(this.isSpanish) return RemDailyReportOrderChange_NeutralSP;
			return RemDailyReportOrderChange_NeutralEN;
		}, configurable: true
	},
	RemDailyReportFundingChange_Positive: {
		get: function() {
			if(this.isJapanese) return RemDailyReportFundingChange_PositiveJP;
			else if(this.isEnglish) return RemDailyReportFundingChange_PositiveEN;
			else if(this.isRussian) return RemDailyReportFundingChange_PositiveRU;
			else if(this.isSChinese) return RemDailyReportFundingChange_PositiveSCH;
			else if(this.isTChinese) return RemDailyReportFundingChange_PositiveTCH;
			else if(this.isKorean) return RemDailyReportFundingChange_PositiveKR;
			else if(this.isSpanish) return RemDailyReportFundingChange_PositiveSP;
			return RemDailyReportFundingChange_PositiveEN;
		}, configurable: true
	},
	RemDailyReportFundingChange_Negative: {
		get: function() {
			if(this.isJapanese) return RemDailyReportFundingChange_NegativeJP;
			else if(this.isEnglish) return RemDailyReportFundingChange_NegativeEN;
			else if(this.isRussian) return RemDailyReportFundingChange_NegativeRU;
			else if(this.isSChinese) return RemDailyReportFundingChange_NegativeSCH;
			else if(this.isTChinese) return RemDailyReportFundingChange_NegativeTCH;
			else if(this.isKorean) return RemDailyReportFundingChange_NegativeKR;
			else if(this.isSpanish) return RemDailyReportFundingChange_NegativeSP;
			return RemDailyReportFundingChange_NegativeEN;
		}, configurable: true
	},
	RemDailyReportBankruptcy: {
		get: function() {
			if(this.isJapanese) return RemDailyReportBankruptcyJP;
			else if(this.isEnglish) return RemDailyReportBankruptcyEN;
			else if(this.isRussian) return RemDailyReportBankruptcyRU;
			else if(this.isSChinese) return RemDailyReportBankruptcySCH;
			else if(this.isTChinese) return RemDailyReportBankruptcyTCH;
			else if(this.isKorean) return RemDailyReportBankruptcyKR;
			else if(this.isSpanish) return RemDailyReportBankruptcySP;
			return RemDailyReportBankruptcyEN;
		}, configurable: true
	},
	RemDailyReportEdictPoints_Singular: {
		get: function() {
			if(this.isJapanese) return RemDailyReportEdictPoints_SingularJP;
			else if(this.isEnglish) return RemDailyReportEdictPoints_SingularEN;
			else if(this.isRussian) return RemDailyReportEdictPoints_SingularRU;
			else if(this.isSChinese) return RemDailyReportEdictPoints_SingularSCH;
			else if(this.isTChinese) return RemDailyReportEdictPoints_SingularTCH;
			else if(this.isKorean) return RemDailyReportEdictPoints_SingularKR;
			else if(this.isSpanish) return RemDailyReportEdictPoints_SingularSP;
			return RemDailyReportEdictPoints_SingularEN;
		}, configurable: true
	},
	RemDailyReportEdictPoints_Plural: {
		get: function() {
			if(this.isJapanese) return RemDailyReportEdictPoints_PluralJP;
			else if(this.isEnglish) return RemDailyReportEdictPoints_PluralEN;
			else if(this.isRussian) return RemDailyReportEdictPoints_PluralRU;
			else if(this.isSChinese) return RemDailyReportEdictPoints_PluralSCH;
			else if(this.isTChinese) return RemDailyReportEdictPoints_PluralTCH;
			else if(this.isKorean) return RemDailyReportEdictPoints_PluralKR;
			else if(this.isSpanish) return RemDailyReportEdictPoints_PluralSP;
			return RemDailyReportEdictPoints_PluralEN;
		}, configurable: true
	},
	RemDailyReportBarRep_AlmostDecay: {
		get: function() {
			if(this.isJapanese) return RemDailyReportBarRep_AlmostDecayJP;
			else if(this.isEnglish) return RemDailyReportBarRep_AlmostDecayEN;
			else if(this.isRussian) return RemDailyReportBarRep_AlmostDecayRU;
			else if(this.isSChinese) return RemDailyReportBarRep_AlmostDecaySCH;
			else if(this.isTChinese) return RemDailyReportBarRep_AlmostDecayTCH;
			else if(this.isKorean) return RemDailyReportBarRep_AlmostDecayKR;
			else if(this.isSpanish) return RemDailyReportBarRep_AlmostDecaySP;
			return RemDailyReportBarRep_AlmostDecayEN;
		}, configurable: true
	},
	RemDailyReportBarRep_Decayed: {
		get: function() {
			if(this.isJapanese) return RemDailyReportBarRep_DecayedJP;
			else if(this.isEnglish) return RemDailyReportBarRep_DecayedEN;
			else if(this.isRussian) return RemDailyReportBarRep_DecayedRU;
			else if(this.isSChinese) return RemDailyReportBarRep_DecayedSCH;
			else if(this.isTChinese) return RemDailyReportBarRep_DecayedTCH;
			else if(this.isKorean) return RemDailyReportBarRep_DecayedKR;
			else if(this.isSpanish) return RemDailyReportBarRep_DecayedSP;
			return RemDailyReportBarRep_DecayedEN;
		}, configurable: true
	},
	RemDailyReportVisitorRep_AlmostDecay: {
		get: function() {
			if(this.isJapanese) return RemDailyReportVisitorRep_AlmostDecayJP;
			else if(this.isEnglish) return RemDailyReportVisitorRep_AlmostDecayEN;
			else if(this.isRussian) return RemDailyReportVisitorRep_AlmostDecayRU;
			else if(this.isSChinese) return RemDailyReportVisitorRep_AlmostDecaySCH;
			else if(this.isTChinese) return RemDailyReportVisitorRep_AlmostDecayTCH;
			else if(this.isKorean) return RemDailyReportVisitorRep_AlmostDecayKR;
			else if(this.isSpanish) return RemDailyReportVisitorRep_AlmostDecaySP;
			return RemDailyReportVisitorRep_AlmostDecayEN;
		}, configurable: true
	},
	RemDailyReportVisitorRep_Decayed: {
		get: function() {
			if(this.isJapanese) return RemDailyReportVisitorRep_DecayedJP;
			else if(this.isEnglish) return RemDailyReportVisitorRep_DecayedEN;
			else if(this.isRussian) return RemDailyReportVisitorRep_DecayedRU;
			else if(this.isSChinese) return RemDailyReportVisitorRep_DecayedSCH;
			else if(this.isTChinese) return RemDailyReportVisitorRep_DecayedTCH;
			else if(this.isKorean) return RemDailyReportVisitorRep_DecayedKR;
			else if(this.isSpanish) return RemDailyReportVisitorRep_DecayedSP;
			return RemDailyReportVisitorRep_DecayedEN;
		}, configurable: true
	},
	RemDailyReportToiletRep_AlmostDecay: {
		get: function() {
			if(this.isJapanese) return RemDailyReportToiletRep_AlmostDecayJP;
			else if(this.isEnglish) return RemDailyReportToiletRep_AlmostDecayEN;
			else if(this.isRussian) return RemDailyReportToiletRep_AlmostDecayRU;
			else if(this.isSChinese) return RemDailyReportToiletRep_AlmostDecaySCH;
			else if(this.isTChinese) return RemDailyReportToiletRep_AlmostDecayTCH;
			else if(this.isKorean) return RemDailyReportToiletRep_AlmostDecayKR;
			else if(this.isSpanish) return RemDailyReportToiletRep_AlmostDecaySP;
			return RemDailyReportToiletRep_AlmostDecayEN;
		}, configurable: true
	},
	RemDailyReportToiletRep_Decayed: {
		get: function() {
			if(this.isJapanese) return RemDailyReportToiletRep_DecayedJP;
			else if(this.isEnglish) return RemDailyReportToiletRep_DecayedEN;
			else if(this.isRussian) return RemDailyReportToiletRep_DecayedRU;
			else if(this.isSChinese) return RemDailyReportToiletRep_DecayedSCH;
			else if(this.isTChinese) return RemDailyReportToiletRep_DecayedTCH;
			else if(this.isKorean) return RemDailyReportToiletRep_DecayedKR;
			else if(this.isSpanish) return RemDailyReportToiletRep_DecayedSP;
			return RemDailyReportToiletRep_DecayedEN;
		}, configurable: true
	},
	RemDailyReportStripClubRep_AlmostDecay: {
		get: function() {
			if(this.isJapanese) return RemDailyReportStripClubRep_AlmostDecayJP;
			else if(this.isEnglish) return RemDailyReportStripClubRep_AlmostDecayEN;
			else if(this.isRussian) return RemDailyReportStripClubRep_AlmostDecayRU;
			else if(this.isSChinese) return RemDailyReportStripClubRep_AlmostDecaySCH;
			else if(this.isTChinese) return RemDailyReportStripClubRep_AlmostDecayTCH;
			else if(this.isKorean) return RemDailyReportStripClubRep_AlmostDecayKR;
			else if(this.isSpanish) return RemDailyReportStripClubRep_AlmostDecaySP;
			return RemDailyReportStripClubRep_AlmostDecayEN;
		}, configurable: true
	},
	RemDailyReportStripClubRep_Decayed: {
		get: function() {
			if(this.isJapanese) return RemDailyReportStripClubRep_DecayedJP;
			else if(this.isEnglish) return RemDailyReportStripClubRep_DecayedEN;
			else if(this.isRussian) return RemDailyReportStripClubRep_DecayedRU;
			else if(this.isSChinese) return RemDailyReportStripClubRep_DecayedSCH;
			else if(this.isTChinese) return RemDailyReportStripClubRep_DecayedTCH;
			else if(this.isKorean) return RemDailyReportStripClubRep_DecayedKR;
			else if(this.isSpanish) return RemDailyReportStripClubRep_DecayedSP;
			return RemDailyReportStripClubRep_DecayedEN;
		}, configurable: true
	},
	RemDailyReportGymRep_AlmostDecay: {
		get: function() {
			if(this.isJapanese) return RemDailyReportGymRep_AlmostDecayJP;
			else if(this.isEnglish) return RemDailyReportGymRep_AlmostDecayEN;
			else {
				try {
					if(this.isRussian) return RemDailyReportGymRep_AlmostDecayRU;
					else if(this.isSChinese) return RemDailyReportGymRep_AlmostDecaySCH;
					else if(this.isTChinese) return RemDailyReportGymRep_AlmostDecayTCH;
					else if(this.isKorean) return RemDailyReportGymRep_AlmostDecayKR;
					else if(this.isSpanish) return RemDailyReportGymRep_AlmostDecaySP;
				} catch(e) {}
			}
			return RemDailyReportGymRep_AlmostDecayEN;
		}, configurable: true
	},
	RemDailyReportGymRep_Decayed: {
		get: function() {
			if(this.isJapanese) return RemDailyReportGymRep_DecayedJP;
			else if(this.isEnglish) return RemDailyReportGymRep_DecayedEN;
			try {
					if(this.isRussian) return RemDailyReportGymRep_DecayedRU;
					else if(this.isSChinese) return RemDailyReportGymRep_DecayedSCH;
					else if(this.isTChinese) return RemDailyReportGymRep_DecayedTCH;
					else if(this.isKorean) return RemDailyReportGymRep_DecayedKR;
					else if(this.isSpanish) return RemDailyReportGymRep_DecayedSP;
				} catch(e) {}
			return RemDailyReportGymRep_DecayedEN;
		}, configurable: true
	},


	paramGainedStrength: {
		get: function() {
			if(this.isJapanese) return RemParamGainedStrengthJP;
			else if(this.isEnglish) return RemParamGainedStrengthEN;
			else if(this.isRussian) return RemParamGainedStrengthRU;
			else if(this.isSChinese) return RemParamGainedStrengthSCH;
			else if(this.isTChinese) return RemParamGainedStrengthTCH;
			else if(this.isKorean) return RemParamGainedStrengthKR;
			else if(this.isSpanish) return RemParamGainedStrengthSP;
			return RemParamGainedStrengthEN;
		}, configurable: true
	},
	paramGainedStamina: {
		get: function() {
			if(this.isJapanese) return RemParamGainedStaminaJP;
			else if(this.isEnglish) return RemParamGainedStaminaEN;
			else if(this.isRussian) return RemParamGainedStaminaRU;
			else if(this.isSChinese) return RemParamGainedStaminaSCH;
			else if(this.isTChinese) return RemParamGainedStaminaTCH;
			else if(this.isKorean) return RemParamGainedStaminaKR;
			else if(this.isSpanish) return RemParamGainedStaminaSP;
			return RemParamGainedStaminaEN;
		}, configurable: true
	},
	paramGainedEnergy: {
		get: function() {
			if(this.isJapanese) return RemParamGainedEnergyJP;
			else if(this.isEnglish) return RemParamGainedEnergyEN;
			else if(this.isRussian) return RemParamGainedEnergyRU;
			else if(this.isSChinese) return RemParamGainedEnergySCH;
			else if(this.isTChinese) return RemParamGainedEnergyTCH;
			else if(this.isKorean) return RemParamGainedEnergyKR;
			else if(this.isSpanish) return RemParamGainedEnergySP;
			return RemParamGainedEnergyEN;
		}, configurable: true
	},
	paramGainedDexterity: {
		get: function() {
			if(this.isJapanese) return RemParamGainedDexterityJP;
			else if(this.isEnglish) return RemParamGainedDexterityEN;
			else if(this.isRussian) return RemParamGainedDexterityRU;
			else if(this.isSChinese) return RemParamGainedDexteritySCH;
			else if(this.isTChinese) return RemParamGainedDexterityTCH;
			else if(this.isKorean) return RemParamGainedDexterityKR;
			else if(this.isSpanish) return RemParamGainedDexteritySP;
			return RemParamGainedDexterityEN;
		}, configurable: true
	},
	paramGainedAgility: {
		get: function() {
			if(this.isJapanese) return RemParamGainedAgilityJP;
			else if(this.isEnglish) return RemParamGainedAgilityEN;
			else if(this.isRussian) return RemParamGainedAgilityRU;
			else if(this.isSChinese) return RemParamGainedAgilitySCH;
			else if(this.isTChinese) return RemParamGainedAgilityTCH;
			else if(this.isKorean) return RemParamGainedAgilityKR;
			else if(this.isSpanish) return RemParamGainedAgilitySP;
			return RemParamGainedAgilityEN;
		}, configurable: true
	},
	paramGainedEndurance: {
		get: function() {
			if(this.isJapanese) return RemParamGainedEnduranceJP;
			else if(this.isEnglish) return RemParamGainedEnduranceEN;
			else if(this.isRussian) return RemParamGainedEnduranceRU;
			else if(this.isSChinese) return RemParamGainedEnduranceSCH;
			else if(this.isTChinese) return RemParamGainedEnduranceTCH;
			else if(this.isKorean) return RemParamGainedEnduranceKR;
			else if(this.isSpanish) return RemParamGainedEnduranceSP;
			return RemParamGainedEnduranceEN;
		}, configurable: true
	},
	paramGainedMind: {
		get: function() {
			if(this.isJapanese) return RemParamGainedMindJP;
			else if(this.isEnglish) return RemParamGainedMindEN;
			else if(this.isRussian) return RemParamGainedMindRU;
			else if(this.isSChinese) return RemParamGainedMindSCH;
			else if(this.isTChinese) return RemParamGainedMindTCH;
			else if(this.isKorean) return RemParamGainedMindKR;
			else if(this.isSpanish) return RemParamGainedMindSP;
			return RemParamGainedMindEN;
		}, configurable: true
	},
	paramGainedCharm: {
		get: function() {
			if(this.isJapanese) return RemParamGainedCharmJP;
			else if(this.isEnglish) return RemParamGainedCharmEN;
			else if(this.isRussian) return RemParamGainedCharmRU;
			else if(this.isSChinese) return RemParamGainedCharmSCH;
			else if(this.isTChinese) return RemParamGainedCharmTCH;
			else if(this.isKorean) return RemParamGainedCharmKR;
			else if(this.isSpanish) return RemParamGainedCharmSP;
			return RemParamGainedCharmEN;
		}, configurable: true
	},

	paramLevelGainedSingular: {
		get: function() {
			if(this.isJapanese) return RemParamLevelGainedSingularJP;
			else if(this.isEnglish) return RemParamLevelGainedSingularEN;
			else if(this.isRussian) return RemParamLevelGainedSingularRU;
			else if(this.isSChinese) return RemParamLevelGainedSingularSCH;
			else if(this.isTChinese) return RemParamLevelGainedSingularTCH;
			else if(this.isKorean) return RemParamLevelGainedSingularKR;
			else if(this.isSpanish) return RemParamLevelGainedSingularSP;
			return RemParamLevelGainedSingularEN;
		}, configurable: true
	},
	paramLevelGainedPlural: {
		get: function() {
			if(this.isJapanese) return RemParamLevelGainedPluralJP;
			else if(this.isEnglish) return RemParamLevelGainedPluralEN;
			else if(this.isRussian) return RemParamLevelGainedPluralRU;
			else if(this.isSChinese) return RemParamLevelGainedPluralSCH;
			else if(this.isTChinese) return RemParamLevelGainedPluralTCH;
			else if(this.isKorean) return RemParamLevelGainedPluralKR;
			else if(this.isSpanish) return RemParamLevelGainedPluralSP;
			return RemParamLevelGainedPluralEN;
		}, configurable: true
	},
	wardenLevelRequireSingular: {
		get: function() {
			if(this.isJapanese) return RemWardenLevelRequireSingularJP;
			else if(this.isEnglish) return RemWardenLevelRequireSingularEN;
			else if(this.isRussian) return RemWardenLevelRequireSingularRU;
			else if(this.isSChinese) return RemWardenLevelRequireSingularSCH;
			else if(this.isTChinese) return RemWardenLevelRequireSingularTCH;
			else if(this.isKorean) return RemWardenLevelRequireSingularKR;
			else if(this.isSpanish) return RemWardenLevelRequireSingularSP;
			return RemWardenLevelRequireSingularEN;
		}, configurable: true
	},
	wardenLevelRequirePlural: {
		get: function() {
			if(this.isJapanese) return RemWardenLevelRequirePluralJP;
			else if(this.isEnglish) return RemWardenLevelRequirePluralEN;
			else if(this.isRussian) return RemWardenLevelRequirePluralRU;
			else if(this.isSChinese) return RemWardenLevelRequirePluralSCH;
			else if(this.isTChinese) return RemWardenLevelRequirePluralTCH;
			else if(this.isKorean) return RemWardenLevelRequirePluralKR;
			else if(this.isSpanish) return RemWardenLevelRequirePluralSP;
			return RemWardenLevelRequirePluralEN;
		}, configurable: true
	},
	wardenLevelUp: {
		get: function() {
			if(this.isJapanese) return RemWardenLevelUpJP;
			else if(this.isEnglish) return RemWardenLevelUpEN;
			else if(this.isRussian) return RemWardenLevelUpRU;
			else if(this.isSChinese) return RemWardenLevelUpSCH;
			else if(this.isTChinese) return RemWardenLevelUpTCH;
			else if(this.isKorean) return RemWardenLevelUpKR;
			else if(this.isSpanish) return RemWardenLevelUpSP;
			return RemWardenLevelUpEN;
		}, configurable: true
	},
	wardenLevelLimitReached: {
		get: function() {
			if(this.isJapanese) return RemWardenLevelLimitReachedJP;
			else if(this.isEnglish) return RemWardenLevelLimitReachedEN;
			else if(this.isRussian) return RemWardenLevelLimitReachedRU;
			else if(this.isSChinese) return RemWardenLevelLimitReachedSCH;
			else if(this.isTChinese) return RemWardenLevelLimitReachedTCH;
			else if(this.isKorean) return RemWardenLevelLimitReachedKR;
			else if(this.isSpanish) return RemWardenLevelLimitReachedSP;
			return RemWardenLevelLimitReachedEN;
		}, configurable: true
	},


	expEnemiesDefeated: {
		get: function() {
			if(this.isJapanese) return RemExpEnemiesDefeatedJP;
			else if(this.isEnglish) return RemExpEnemiesDefeatedEN;
			else if(this.isRussian) return RemExpEnemiesDefeatedRU;
			else if(this.isSChinese) return RemExpEnemiesDefeatedSCH;
			else if(this.isTChinese) return RemExpEnemiesDefeatedTCH;
			else if(this.isKorean) return RemExpEnemiesDefeatedKR;
			else if(this.isSpanish) return RemExpEnemiesDefeatedSP;
			return RemExpEnemiesDefeatedEN;
		}, configurable: true
	},
	expHalberdCombat: {
		get: function() {
			if(this.isJapanese) return RemExpHalberdCombatJP;
			else if(this.isEnglish) return RemExpHalberdCombatEN;
			else if(this.isRussian) return RemExpHalberdCombatRU;
			else if(this.isSChinese) return RemExpHalberdCombatSCH;
			else if(this.isTChinese) return RemExpHalberdCombatTCH;
			else if(this.isKorean) return RemExpHalberdCombatKR;
			else if(this.isSpanish) return RemExpHalberdCombatSP;
			return RemExpHalberdCombatEN;
		}, configurable: true
	},
	expUnarmedCombat: {
		get: function() {
			if(this.isJapanese) return RemExpUnarmedCombatJP;
			else if(this.isEnglish) return RemExpUnarmedCombatEN;
			else if(this.isRussian) return RemExpUnarmedCombatRU;
			else if(this.isSChinese) return RemExpUnarmedCombatSCH;
			else if(this.isTChinese) return RemExpUnarmedCombatTCH;
			else if(this.isKorean) return RemExpUnarmedCombatKR;
			else if(this.isSpanish) return RemExpUnarmedCombatSP;
			return RemExpUnarmedCombatEN;
		}, configurable: true
	},
	expEvasionCombat: {
		get: function() {
			if(this.isJapanese) return RemExpEvasionCombatJP;
			else if(this.isEnglish) return RemExpEvasionCombatEN;
			else if(this.isRussian) return RemExpEvasionCombatRU;
			else if(this.isSChinese) return RemExpEvasionCombatSCH;
			else if(this.isTChinese) return RemExpEvasionCombatTCH;
			else if(this.isKorean) return RemExpEvasionCombatKR;
			else if(this.isSpanish) return RemExpEvasionCombatSP;
			return RemExpEvasionCombatEN;
		}, configurable: true
	},
	expWillpowerCombat: {
		get: function() {
			if(this.isJapanese) return RemExpWillpowerCombatJP;
			else if(this.isEnglish) return RemExpWillpowerCombatEN;
			else if(this.isRussian) return RemExpWillpowerCombatRU;
			else if(this.isSChinese) return RemExpWillpowerCombatSCH;
			else if(this.isTChinese) return RemExpWillpowerCombatTCH;
			else if(this.isKorean) return RemExpWillpowerCombatKR;
			else if(this.isSpanish) return RemExpWillpowerCombatSP;
			return RemExpWillpowerCombatEN;
		}, configurable: true
	},
	expEnduranceCombat: {
		get: function() {
			if(this.isJapanese) return RemExpEnduranceCombatJP;
			else if(this.isEnglish) return RemExpEnduranceCombatEN;
			else if(this.isRussian) return RemExpEnduranceCombatRU;
			else if(this.isSChinese) return RemExpEnduranceCombatSCH;
			else if(this.isTChinese) return RemExpEnduranceCombatTCH;
			else if(this.isKorean) return RemExpEnduranceCombatKR;
			else if(this.isSpanish) return RemExpEnduranceCombatSP;
			return RemExpEnduranceCombatEN;
		}, configurable: true
	},

	expTalkSensitivity: {
		get: function() {
			if(this.isJapanese) return RemExpTalkSensitivityJP;
			else if(this.isEnglish) return RemExpTalkSensitivityEN;
			else if(this.isRussian) return RemExpTalkSensitivityRU;
			else if(this.isSChinese) return RemExpTalkSensitivitySCH;
			else if(this.isTChinese) return RemExpTalkSensitivityTCH;
			else if(this.isKorean) return RemExpTalkSensitivityKR;
			else if(this.isSpanish) return RemExpTalkSensitivitySP;
			return RemExpTalkSensitivityEN;
		}, configurable: true
	},
	expSightSensitivity: {
		get: function() {
			if(this.isJapanese) return RemExpSightSensitivityJP;
			else if(this.isEnglish) return RemExpSightSensitivityEN;
			else if(this.isRussian) return RemExpSightSensitivityRU;
			else if(this.isSChinese) return RemExpSightSensitivitySCH;
			else if(this.isTChinese) return RemExpSightSensitivityTCH;
			else if(this.isKorean) return RemExpSightSensitivityKR;
			else if(this.isSpanish) return RemExpSightSensitivitySP;
			return RemExpSightSensitivityEN;
		}, configurable: true
	},
	expFingerSensitivity: {
		get: function() {
			if(this.isJapanese) return RemExpFingerSensitivityJP;
			else if(this.isEnglish) return RemExpFingerSensitivityEN;
			else if(this.isRussian) return RemExpFingerSensitivityRU;
			else if(this.isSChinese) return RemExpFingerSensitivitySCH;
			else if(this.isTChinese) return RemExpFingerSensitivityTCH;
			else if(this.isKorean) return RemExpFingerSensitivityKR;
			else if(this.isSpanish) return RemExpFingerSensitivitySP;
			return RemExpFingerSensitivityEN;
		}, configurable: true
	},
	expMouthSensitivity: {
		get: function() {
			if(this.isJapanese) return RemExpMouthSensitivityJP;
			else if(this.isEnglish) return RemExpMouthSensitivityEN;
			else if(this.isRussian) return RemExpMouthSensitivityRU;
			else if(this.isSChinese) return RemExpMouthSensitivitySCH;
			else if(this.isTChinese) return RemExpMouthSensitivityTCH;
			else if(this.isKorean) return RemExpMouthSensitivityKR;
			else if(this.isSpanish) return RemExpMouthSensitivitySP;
			return RemExpMouthSensitivityEN;
		}, configurable: true
	},
	expBoobsSensitivity: {
		get: function() {
			if(this.isJapanese) return RemExpBoobsSensitivityJP;
			else if(this.isEnglish) return RemExpBoobsSensitivityEN;
			else if(this.isRussian) return RemExpBoobsSensitivityRU;
			else if(this.isSChinese) return RemExpBoobsSensitivitySCH;
			else if(this.isTChinese) return RemExpBoobsSensitivityTCH;
			else if(this.isKorean) return RemExpBoobsSensitivityKR;
			else if(this.isSpanish) return RemExpBoobsSensitivitySP;
			return RemExpBoobsSensitivityEN;
		}, configurable: true
	},
	expPussySensitivity: {
		get: function() {
			if(this.isJapanese) return RemExpPussySensitivityJP;
			else if(this.isEnglish) return RemExpPussySensitivityEN;
			else if(this.isRussian) return RemExpPussySensitivityRU;
			else if(this.isSChinese) return RemExpPussySensitivitySCH;
			else if(this.isTChinese) return RemExpPussySensitivityTCH;
			else if(this.isKorean) return RemExpPussySensitivityKR;
			else if(this.isSpanish) return RemExpPussySensitivitySP;
			return RemExpPussySensitivityEN;
		}, configurable: true
	},
	expButtSensitivity: {
		get: function() {
			if(this.isJapanese) return RemExpButtSensitivityJP;
			else if(this.isEnglish) return RemExpButtSensitivityEN;
			else if(this.isRussian) return RemExpButtSensitivityRU;
			else if(this.isSChinese) return RemExpButtSensitivitySCH;
			else if(this.isTChinese) return RemExpButtSensitivityTCH;
			else if(this.isKorean) return RemExpButtSensitivityKR;
			else if(this.isSpanish) return RemExpButtSensitivitySP;
			return RemExpButtSensitivityEN;
		}, configurable: true
	},
	expCreampieSensitivity: {
		get: function() {
			if(this.isJapanese) return RemExpCreampieSensitivityJP;
			else if(this.isEnglish) return RemExpCreampieSensitivityEN;
			else if(this.isRussian) return RemExpCreampieSensitivityRU;
			else if(this.isSChinese) return RemExpCreampieSensitivitySCH;
			else if(this.isTChinese) return RemExpCreampieSensitivityTCH;
			else if(this.isKorean) return RemExpCreampieSensitivityKR;
			else if(this.isSpanish) return RemExpCreampieSensitivitySP;
			return RemExpCreampieSensitivityEN;
		}, configurable: true
	},
	expBukkakeSensitivity: {
		get: function() {
			if(this.isJapanese) return RemExpBukkakeSensitivityJP;
			else if(this.isEnglish) return RemExpBukkakeSensitivityEN;
			else if(this.isRussian) return RemExpBukkakeSensitivityRU;
			else if(this.isSChinese) return RemExpBukkakeSensitivitySCH;
			else if(this.isTChinese) return RemExpBukkakeSensitivityTCH;
			else if(this.isKorean) return RemExpBukkakeSensitivityKR;
			else if(this.isSpanish) return RemExpBukkakeSensitivitySP;
			return RemExpBukkakeSensitivityEN;
		}, configurable: true
	},
	expSwallowSensitivity: {
		get: function() {
			if(this.isJapanese) return RemExpSwallowSensitivityJP;
			else if(this.isEnglish) return RemExpSwallowSensitivityEN;
			else if(this.isRussian) return RemExpSwallowSensitivityRU;
			else if(this.isSChinese) return RemExpSwallowSensitivitySCH;
			else if(this.isTChinese) return RemExpSwallowSensitivityTCH;
			else if(this.isKorean) return RemExpSwallowSensitivityKR;
			else if(this.isSpanish) return RemExpSwallowSensitivitySP;
			return RemExpSwallowSensitivityEN;
		}, configurable: true
	},
	expKissSkill: {
		get: function() {
			if(this.isJapanese) return RemExpKissSkillJP;
			else if(this.isEnglish) return RemExpKissSkillEN;
			else if(this.isRussian) return RemExpKissSkillRU;
			else if(this.isSChinese) return RemExpKissSkillSCH;
			else if(this.isTChinese) return RemExpKissSkillTCH;
			else if(this.isKorean) return RemExpKissSkillKR;
			else if(this.isSpanish) return RemExpKissSkillSP;
			return RemExpKissSkillEN;
		}, configurable: true
	},
	expPettingSkill: {
		get: function() {
			if(this.isJapanese) return RemExpPettingSkillJP;
			else if(this.isEnglish) return RemExpPettingSkillEN;
			else if(this.isRussian) return RemExpPettingSkillRU;
			else if(this.isSChinese) return RemExpPettingSkillSCH;
			else if(this.isTChinese) return RemExpPettingSkillTCH;
			else if(this.isKorean) return RemExpPettingSkillKR;
			else if(this.isSpanish) return RemExpPettingSkillSP;
			return RemExpPettingSkillEN;
		}, configurable: true
	},
	expHandjobSkill: {
		get: function() {
			if(this.isJapanese) return RemExpHandjobSkillJP;
			else if(this.isEnglish) return RemExpHandjobSkillEN;
			else if(this.isRussian) return RemExpHandjobSkillRU;
			else if(this.isSChinese) return RemExpHandjobSkillSCH;
			else if(this.isTChinese) return RemExpHandjobSkillTCH;
			else if(this.isKorean) return RemExpHandjobSkillKR;
			else if(this.isSpanish) return RemExpHandjobSkillSP;
			return RemExpHandjobSkillEN;
		}, configurable: true
	},
	expBlowjobSkill: {
		get: function() {
			if(this.isJapanese) return RemExpBlowjobSkillJP;
			else if(this.isEnglish) return RemExpBlowjobSkillEN;
			else if(this.isRussian) return RemExpBlowjobSkillRU;
			else if(this.isSChinese) return RemExpBlowjobSkillSCH;
			else if(this.isTChinese) return RemExpBlowjobSkillTCH;
			else if(this.isKorean) return RemExpBlowjobSkillKR;
			else if(this.isSpanish) return RemExpBlowjobSkillSP;
			return RemExpBlowjobSkillEN;
		}, configurable: true
	},
	expTittyFuckSkill: {
		get: function() {
			if(this.isJapanese) return RemExpTittyFuckSkillJP;
			else if(this.isEnglish) return RemExpTittyFuckSkillEN;
			else if(this.isRussian) return RemExpTittyFuckSkillRU;
			else if(this.isSChinese) return RemExpTittyFuckSkillSCH;
			else if(this.isTChinese) return RemExpTittyFuckSkillTCH;
			else if(this.isKorean) return RemExpTittyFuckSkillKR;
			else if(this.isSpanish) return RemExpTittyFuckSkillSP;
			return RemExpTittyFuckSkillEN;
		}, configurable: true
	},
	expPussySexSkill: {
		get: function() {
			if(this.isJapanese) return RemExpPussySexSkillJP;
			else if(this.isEnglish) return RemExpPussySexSkillEN;
			else if(this.isRussian) return RemExpPussySexSkillRU;
			else if(this.isSChinese) return RemExpPussySexSkillSCH;
			else if(this.isTChinese) return RemExpPussySexSkillTCH;
			else if(this.isKorean) return RemExpPussySexSkillKR;
			else if(this.isSpanish) return RemExpPussySexSkillSP;
			return RemExpPussySexSkillEN;
		}, configurable: true
	},
	expAnalSexSkill: {
		get: function() {
			if(this.isJapanese) return RemExpAnalSexSkillJP;
			else if(this.isEnglish) return RemExpAnalSexSkillEN;
			else if(this.isRussian) return RemExpAnalSexSkillRU;
			else if(this.isSChinese) return RemExpAnalSexSkillSCH;
			else if(this.isTChinese) return RemExpAnalSexSkillTCH;
			else if(this.isKorean) return RemExpAnalSexSkillKR;
			else if(this.isSpanish) return RemExpAnalSexSkillSP;
			return RemExpAnalSexSkillEN;
		}, configurable: true
	},
	expMasturbateSkill: {
		get: function() {
			if(this.isJapanese) return RemExpMasturbateSkillJP;
			else if(this.isEnglish) return RemExpMasturbateSkillEN;
			else if(this.isRussian) return RemExpMasturbateSkillRU;
			else if(this.isSChinese) return RemExpMasturbateSkillSCH;
			else if(this.isTChinese) return RemExpMasturbateSkillTCH;
			else if(this.isKorean) return RemExpMasturbateSkillKR;
			else if(this.isSpanish) return RemExpMasturbateSkillSP;
			return RemExpMasturbateSkillEN;
		}, configurable: true
	},
	expOrgasmSpecial: {
		get: function() {
			if(this.isJapanese) return RemExpOrgasmSpecialJP;
			else if(this.isEnglish) return RemExpOrgasmSpecialEN;
			else if(this.isRussian) return RemExpOrgasmSpecialRU;
			else if(this.isSChinese) return RemExpOrgasmSpecialSCH;
			else if(this.isTChinese) return RemExpOrgasmSpecialTCH;
			else if(this.isKorean) return RemExpOrgasmSpecialKR;
			else if(this.isSpanish) return RemExpOrgasmSpecialSP;
			return RemExpOrgasmSpecialEN;
		}, configurable: true
	},
	expStrippedSpecial: {
		get: function() {
			if(this.isJapanese) return RemExpStrippedSpecialJP;
			else if(this.isEnglish) return RemExpStrippedSpecialEN;
			else if(this.isRussian) return RemExpStrippedSpecialRU;
			else if(this.isSChinese) return RemExpStrippedSpecialSCH;
			else if(this.isTChinese) return RemExpStrippedSpecialTCH;
			else if(this.isKorean) return RemExpStrippedSpecialKR;
			else if(this.isSpanish) return RemExpStrippedSpecialSP;
			return RemExpStrippedSpecialEN;
		}, configurable: true
	},
	expDoublePenetrationSpecial: {
		get: function() {
			if(this.isJapanese) return RemExpDoublePenetrationSpecialJP;
			else if(this.isEnglish) return RemExpDoublePenetrationSpecialEN;
			else if(this.isRussian) return RemExpDoublePenetrationSpecialRU;
			else if(this.isSChinese) return RemExpDoublePenetrationSpecialSCH;
			else if(this.isTChinese) return RemExpDoublePenetrationSpecialTCH;
			else if(this.isKorean) return RemExpDoublePenetrationSpecialKR;
			else if(this.isSpanish) return RemExpDoublePenetrationSpecialSP;
			return RemExpDoublePenetrationSpecialEN;
		}, configurable: true
	},
	expTriplePenetrationSpecial: {
		get: function() {
			if(this.isJapanese) return RemExpTriplePenetrationSpecialJP;
			else if(this.isEnglish) return RemExpTriplePenetrationSpecialEN;
			else if(this.isRussian) return RemExpTriplePenetrationSpecialRU;
			else if(this.isSChinese) return RemExpTriplePenetrationSpecialSCH;
			else if(this.isTChinese) return RemExpTriplePenetrationSpecialTCH;
			else if(this.isKorean) return RemExpTriplePenetrationSpecialKR;
			else if(this.isSpanish) return RemExpTriplePenetrationSpecialSP;
			return RemExpTriplePenetrationSpecialEN;
		}, configurable: true
	},

	yanflyBattleCoreUser: {
		get: function() {
			if(this.isJapanese) return RemYanflyBattleCoreUserJP;
			else if(this.isEnglish) return RemYanflyBattleCoreUserEN;
			else if(this.isRussian) return RemYanflyBattleCoreUserRU;
			else if(this.isSChinese) return RemYanflyBattleCoreUserSCH;
			else if(this.isTChinese) return RemYanflyBattleCoreUserTCH;
			else if(this.isKorean) return RemYanflyBattleCoreUserKR;
			else if(this.isSpanish) return RemYanflyBattleCoreUserSP;
			return RemYanflyBattleCoreUserEN;
		}, configurable: true
	},
	yanflyBattleCoreAlly: {
		get: function() {
			if(this.isJapanese) return RemYanflyBattleCoreAllyJP;
			else if(this.isEnglish) return RemYanflyBattleCoreAllyEN;
			else if(this.isRussian) return RemYanflyBattleCoreAllyRU;
			else if(this.isSChinese) return RemYanflyBattleCoreAllySCH;
			else if(this.isTChinese) return RemYanflyBattleCoreAllyTCH;
			else if(this.isKorean) return RemYanflyBattleCoreAllyKR;
			else if(this.isSpanish) return RemYanflyBattleCoreAllySP;
			return RemYanflyBattleCoreAllyEN;
		}, configurable: true
	},
	yanflyBattleCoreAllies: {
		get: function() {
			if(this.isJapanese) return RemYanflyBattleCoreAlliesJP;
			else if(this.isEnglish) return RemYanflyBattleCoreAlliesEN;
			else if(this.isRussian) return RemYanflyBattleCoreAlliesRU;
			else if(this.isSChinese) return RemYanflyBattleCoreAlliesSCH;
			else if(this.isTChinese) return RemYanflyBattleCoreAlliesTCH;
			else if(this.isKorean) return RemYanflyBattleCoreAlliesKR;
			else if(this.isSpanish) return RemYanflyBattleCoreAlliesSP;
			return RemYanflyBattleCoreAlliesEN;
		}, configurable: true
	},
	yanflyBattleCoreEnemy: {
		get: function() {
			if(this.isJapanese) return RemYanflyBattleCoreEnemyJP;
			else if(this.isEnglish) return RemYanflyBattleCoreEnemyEN;
			else if(this.isRussian) return RemYanflyBattleCoreEnemyRU;
			else if(this.isSChinese) return RemYanflyBattleCoreEnemySCH;
			else if(this.isTChinese) return RemYanflyBattleCoreEnemyTCH;
			else if(this.isKorean) return RemYanflyBattleCoreEnemyKR;
			else if(this.isSpanish) return RemYanflyBattleCoreEnemySP;
			return RemYanflyBattleCoreEnemyEN;
		}, configurable: true
	},
	yanflyBattleCoreEnemies: {
		get: function() {
			if(this.isJapanese) return RemYanflyBattleCoreEnemiesJP;
			else if(this.isEnglish) return RemYanflyBattleCoreEnemiesEN;
			else if(this.isRussian) return RemYanflyBattleCoreEnemiesRU;
			else if(this.isSChinese) return RemYanflyBattleCoreEnemiesSCH;
			else if(this.isTChinese) return RemYanflyBattleCoreEnemiesTCH;
			else if(this.isKorean) return RemYanflyBattleCoreEnemiesKR;
			else if(this.isSpanish) return RemYanflyBattleCoreEnemiesSP;
			return RemYanflyBattleCoreEnemiesEN;
		}, configurable: true
	},
	yanflyBattleCoreAllTargets: {
		get: function() {
			if(this.isJapanese) return RemYanflyBattleCoreAllTargetsJP;
			else if(this.isEnglish) return RemYanflyBattleCoreAllTargetsEN;
			else if(this.isRussian) return RemYanflyBattleCoreAllTargetsRU;
			else if(this.isSChinese) return RemYanflyBattleCoreAllTargetsSCH;
			else if(this.isTChinese) return RemYanflyBattleCoreAllTargetsTCH;
			else if(this.isKorean) return RemYanflyBattleCoreAllTargetsKR;
			else if(this.isSpanish) return RemYanflyBattleCoreAllTargetsSP;
			return RemYanflyBattleCoreAllTargetsEN;
		}, configurable: true
	},
	yanflyBattleCoreRandomTargets: {
		get: function() {
			if(this.isJapanese) return RemYanflyBattleCoreRandomTargetsJP;
			else if(this.isEnglish) return RemYanflyBattleCoreRandomTargetsEN;
			else if(this.isRussian) return RemYanflyBattleCoreRandomTargetsRU;
			else if(this.isSChinese) return RemYanflyBattleCoreRandomTargetsSCH;
			else if(this.isTChinese) return RemYanflyBattleCoreRandomTargetsTCH;
			else if(this.isKorean) return RemYanflyBattleCoreRandomTargetsKR;
			else if(this.isSpanish) return RemYanflyBattleCoreRandomTargetsSP;
			return RemYanflyBattleCoreRandomTargetsEN;
		}, configurable: true
	},
	yanflyRemove: {
		get: function() {
			if(this.isJapanese) return RemYanflyRemoveJP;
			else if(this.isEnglish) return RemYanflyRemoveEN;
			else if(this.isRussian) return RemYanflyRemoveRU;
			else if(this.isSChinese) return RemYanflyRemoveSCH;
			else if(this.isTChinese) return RemYanflyRemoveTCH;
			else if(this.isKorean) return RemYanflyRemoveKR;
			else if(this.isSpanish) return RemYanflyRemoveSP;
			return RemYanflyRemoveEN;
		}, configurable: true
	},
	yanflyEmpty: {
		get: function() {
			if(this.isJapanese) return RemYanflyEmptyJP;
			else if(this.isEnglish) return RemYanflyEmptyEN;
			else if(this.isRussian) return RemYanflyEmptyRU;
			else if(this.isSChinese) return RemYanflyEmptySCH;
			else if(this.isTChinese) return RemYanflyEmptyTCH;
			else if(this.isKorean) return RemYanflyEmptyKR;
			else if(this.isSpanish) return RemYanflyEmptySP;
			return RemYanflyEmptyEN;
		}, configurable: true
	},

	yanflyOptionsAll: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_All_JP;
			else if(this.isEnglish) return RemYanflyOptions_All_EN;
			else if(this.isRussian) return RemYanflyOptions_All_RU;
			else if(this.isSChinese) return RemYanflyOptions_All_SCH;
			else if(this.isTChinese) return RemYanflyOptions_All_TCH;
			else if(this.isKorean) return RemYanflyOptions_All_KR;
			else if(this.isSpanish) return RemYanflyOptions_All_SP;
			return RemYanflyOptions_All_EN;
		}, configurable: true
	},
	yanflyOptionsAllHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_All_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_All_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_All_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_All_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_All_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_All_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_All_Help_SP;
			return RemYanflyOptions_All_Help_EN;
		}, configurable: true
	},
	yanflyOptionsGeneral: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_General_JP;
			else if(this.isEnglish) return RemYanflyOptions_General_EN;
			else if(this.isRussian) return RemYanflyOptions_General_RU;
			else if(this.isSChinese) return RemYanflyOptions_General_SCH;
			else if(this.isTChinese) return RemYanflyOptions_General_TCH;
			else if(this.isKorean) return RemYanflyOptions_General_KR;
			else if(this.isSpanish) return RemYanflyOptions_General_SP;
			return RemYanflyOptions_General_EN;
		}, configurable: true
	},
	yanflyOptionsGeneralHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_General_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_General_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_General_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_General_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_General_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_General_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_General_Help_SP;
			return RemYanflyOptions_General_Help_EN;
		}, configurable: true
	},
	yanflyOptionsAudio: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Audio_JP;
			else if(this.isEnglish) return RemYanflyOptions_Audio_EN;
			else if(this.isRussian) return RemYanflyOptions_Audio_RU;
			else if(this.isSChinese) return RemYanflyOptions_Audio_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Audio_TCH;
			else if(this.isKorean) return RemYanflyOptions_Audio_KR;
			else if(this.isSpanish) return RemYanflyOptions_Audio_SP;
			return RemYanflyOptions_Audio_EN;
		}, configurable: true
	},
	yanflyOptionsAudioHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Audio_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Audio_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_Audio_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_Audio_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Audio_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_Audio_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_Audio_Help_SP;
			return RemYanflyOptions_Audio_Help_EN;
		}, configurable: true
	},
	yanflyOptionsVisual: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Visual_JP;
			else if(this.isEnglish) return RemYanflyOptions_Visual_EN;
			else if(this.isRussian) return RemYanflyOptions_Visual_RU;
			else if(this.isSChinese) return RemYanflyOptions_Visual_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Visual_TCH;
			else if(this.isKorean) return RemYanflyOptions_Visual_KR;
			else if(this.isSpanish) return RemYanflyOptions_Visual_SP;
			return RemYanflyOptions_Visual_EN;
		}, configurable: true
	},
	yanflyOptionsVisualHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Visual_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Visual_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_Visual_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_Visual_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Visual_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_Visual_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_Visual_Help_SP;
			return RemYanflyOptions_Visual_Help_EN;
		}, configurable: true
	},
	yanflyOptionsControls: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Controls_JP;
			else if(this.isEnglish) return RemYanflyOptions_Controls_EN;
			else if(this.isRussian) return RemYanflyOptions_Controls_RU;
			else if(this.isSChinese) return RemYanflyOptions_Controls_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Controls_TCH;
			else if(this.isKorean) return RemYanflyOptions_Controls_KR;
			else if(this.isSpanish) return RemYanflyOptions_Controls_SP;
			return RemYanflyOptions_Controls_EN;
		}, configurable: true
	},
	yanflyOptionsControlsHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Controls_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Controls_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_Controls_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_Controls_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Controls_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_Controls_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_Controls_Help_SP;
			return RemYanflyOptions_Controls_Help_EN;
		}, configurable: true
	},
	yanflyOptionsCheats: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Cheats_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_EN;
			else if(this.isRussian) return RemYanflyOptions_Cheats_RU;
			else if(this.isSChinese) return RemYanflyOptions_Cheats_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Cheats_TCH;
			else if(this.isKorean) return RemYanflyOptions_Cheats_KR;
			else if(this.isSpanish) return RemYanflyOptions_Cheats_SP;
			return RemYanflyOptions_Cheats_EN;
		}, configurable: true
	},
	yanflyOptionsCheatsHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Cheats_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_Cheats_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_Cheats_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Cheats_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_Cheats_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_Cheats_Help_SP;
			return RemYanflyOptions_Cheats_Help_EN;
		}, configurable: true
	},

	yanflyOptionsExit: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Exit_JP;
			else if(this.isEnglish) return RemYanflyOptions_Exit_EN;
			else if(this.isRussian) return RemYanflyOptions_Exit_RU;
			else if(this.isSChinese) return RemYanflyOptions_Exit_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Exit_TCH;
			else if(this.isKorean) return RemYanflyOptions_Exit_KR;
			else if(this.isSpanish) return RemYanflyOptions_Exit_SP;
			return RemYanflyOptions_Exit_EN;
		}, configurable: true
	},
	yanflyOptionsExitHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Exit_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Exit_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_Exit_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_Exit_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Exit_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_Exit_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_Exit_Help_SP;
			return RemYanflyOptions_Exit_Help_EN;
		}, configurable: true
	},

	yanflyOptionsHair: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Hair_JP;
			else if(this.isEnglish) return RemYanflyOptions_Hair_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_Hair_RU;
					else if(this.isSChinese) return RemYanflyOptions_Hair_SCH;
					else if(this.isTChinese) return RemYanflyOptions_Hair_TCH;
					else if(this.isKorean) return RemYanflyOptions_Hair_KR;
					else if(this.isSpanish) return RemYanflyOptions_Hair_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_Hair_EN;
		}, configurable: true
	},
	yanflyOptionsHairHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Hair_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Hair_Help_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_Hair_Help_RU;
					else if(this.isSChinese) return RemYanflyOptions_Hair_Help_SCH;
					else if(this.isTChinese) return RemYanflyOptions_Hair_Help_TCH;
					else if(this.isKorean) return RemYanflyOptions_Hair_Help_KR;
					else if(this.isSpanish) return RemYanflyOptions_Hair_Help_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_Hair_Help_EN;
		}, configurable: true
	},
	yanflyOptionsLovense: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Lovense_JP;
			else if(this.isEnglish) return RemYanflyOptions_Lovense_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_Lovense_RU;
					else if(this.isSChinese) return RemYanflyOptions_Lovense_SCH;
					else if(this.isTChinese) return RemYanflyOptions_Lovense_TCH;
					else if(this.isKorean) return RemYanflyOptions_Lovense_KR;
					else if(this.isSpanish) return RemYanflyOptions_Lovense_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_Lovense_EN;
		}, configurable: true
	},
	yanflyOptionsLovenseHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Lovense_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Lovense_Help_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_Lovense_Help_RU;
					else if(this.isSChinese) return RemYanflyOptions_Lovense_Help_SCH;
					else if(this.isTChinese) return RemYanflyOptions_Lovense_Help_TCH;
					else if(this.isKorean) return RemYanflyOptions_Lovense_Help_KR;
					else if(this.isSpanish) return RemYanflyOptions_Lovense_Help_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_Lovense_Help_EN;
		}, configurable: true
	},

	yanflyOptionsBoobsSize: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_BoobsSize_JP;
			else if(this.isEnglish) return RemYanflyOptions_BoobsSize_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_BoobsSize_RU;
					else if(this.isSChinese) return RemYanflyOptions_BoobsSize_SCH;
					else if(this.isTChinese) return RemYanflyOptions_BoobsSize_TCH;
					else if(this.isKorean) return RemYanflyOptions_BoobsSize_KR;
					else if(this.isSpanish) return RemYanflyOptions_BoobsSize_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_BoobsSize_EN;
		}, configurable: true
	},
	yanflyOptionsBoobsSizeHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_BoobsSize_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_BoobsSize_Help_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_BoobsSize_Help_RU;
					else if(this.isSChinese) return RemYanflyOptions_BoobsSize_Help_SCH;
					else if(this.isTChinese) return RemYanflyOptions_BoobsSize_Help_TCH;
					else if(this.isKorean) return RemYanflyOptions_BoobsSize_Help_KR;
					else if(this.isSpanish) return RemYanflyOptions_BoobsSize_Help_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_BoobsSize_Help_EN;
		}, configurable: true
	},

	yanflyOptionsHairColor: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_HairColor_JP;
			else if(this.isEnglish) return RemYanflyOptions_HairColor_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_HairColor_RU;
					else if(this.isSChinese) return RemYanflyOptions_HairColor_SCH;
					else if(this.isTChinese) return RemYanflyOptions_HairColor_TCH;
					else if(this.isKorean) return RemYanflyOptions_HairColor_KR;
					else if(this.isSpanish) return RemYanflyOptions_HairColor_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_HairColor_EN;
		}, configurable: true
	},
	yanflyOptionsHairColorHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_HairColor_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_HairColor_Help_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_HairColor_Help_RU;
					else if(this.isSChinese) return RemYanflyOptions_HairColor_Help_SCH;
					else if(this.isTChinese) return RemYanflyOptions_HairColor_Help_TCH;
					else if(this.isKorean) return RemYanflyOptions_HairColor_Help_KR;
					else if(this.isSpanish) return RemYanflyOptions_HairColor_Help_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_HairColor_Help_EN;
		}, configurable: true
	},
	yanflyOptionsPubicColor: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_PubicColor_JP;
			else if(this.isEnglish) return RemYanflyOptions_PubicColor_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_PubicColor_RU;
					else if(this.isSChinese) return RemYanflyOptions_PubicColor_SCH;
					else if(this.isTChinese) return RemYanflyOptions_PubicColor_TCH;
					else if(this.isKorean) return RemYanflyOptions_PubicColor_KR;
					else if(this.isSpanish) return RemYanflyOptions_PubicColor_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_PubicColor_EN;
		}, configurable: true
	},
	yanflyOptionsPubicColorHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_PubicColor_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_PubicColor_Help_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_PubicColor_Help_RU;
					else if(this.isSChinese) return RemYanflyOptions_PubicColor_Help_SCH;
					else if(this.isTChinese) return RemYanflyOptions_PubicColor_Help_TCH;
					else if(this.isKorean) return RemYanflyOptions_PubicColor_Help_KR;
					else if(this.isSpanish) return RemYanflyOptions_PubicColor_Help_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_PubicColor_Help_EN;
		}, configurable: true
	},
	yanflyOptionsPubicStyle: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_PubicStyle_JP;
			else if(this.isEnglish) return RemYanflyOptions_PubicStyle_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_PubicStyle_RU;
					else if(this.isSChinese) return RemYanflyOptions_PubicStyle_SCH;
					else if(this.isTChinese) return RemYanflyOptions_PubicStyle_TCH;
					else if(this.isKorean) return RemYanflyOptions_PubicStyle_KR;
					else if(this.isSpanish) return RemYanflyOptions_PubicStyle_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_PubicStyle_EN;
		}, configurable: true
	},
	yanflyOptionsPubicStyleHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_PubicStyle_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_PubicStyle_Help_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_PubicStyle_Help_RU;
					else if(this.isSChinese) return RemYanflyOptions_PubicStyle_Help_SCH;
					else if(this.isTChinese) return RemYanflyOptions_PubicStyle_Help_TCH;
					else if(this.isKorean) return RemYanflyOptions_PubicStyle_Help_KR;
					else if(this.isSpanish) return RemYanflyOptions_PubicStyle_Help_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_PubicStyle_Help_EN;
		}, configurable: true
	},
	yanflyOptionsToggleMaleStrayPubes: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_ToggleMaleStrayPubes_JP;
			else if(this.isEnglish) return RemYanflyOptions_ToggleMaleStrayPubes_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_ToggleMaleStrayPubes_RU;
					else if(this.isSChinese) return RemYanflyOptions_ToggleMaleStrayPubes_SCH;
					else if(this.isTChinese) return RemYanflyOptions_ToggleMaleStrayPubes_TCH;
					else if(this.isKorean) return RemYanflyOptions_ToggleMaleStrayPubes_KR;
					else if(this.isSpanish) return RemYanflyOptions_ToggleMaleStrayPubes_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_ToggleMaleStrayPubes_EN;
		}, configurable: true
	},
	yanflyOptionsToggleMaleStrayPubesHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_ToggleMaleStrayPubes_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_ToggleMaleStrayPubes_Help_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_ToggleMaleStrayPubes_Help_RU;
					else if(this.isSChinese) return RemYanflyOptions_ToggleMaleStrayPubes_Help_SCH;
					else if(this.isTChinese) return RemYanflyOptions_ToggleMaleStrayPubes_Help_TCH;
					else if(this.isKorean) return RemYanflyOptions_ToggleMaleStrayPubes_Help_KR;
					else if(this.isSpanish) return RemYanflyOptions_ToggleMaleStrayPubes_Help_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_ToggleMaleStrayPubes_Help_EN;
		}, configurable: true
	},
	yanflyOptionsStrayPubesAmount: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_StrayPubesAmount_JP;
			else if(this.isEnglish) return RemYanflyOptions_StrayPubesAmount_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_StrayPubesAmount_RU;
					else if(this.isSChinese) return RemYanflyOptions_StrayPubesAmount_SCH;
					else if(this.isTChinese) return RemYanflyOptions_StrayPubesAmount_TCH;
					else if(this.isKorean) return RemYanflyOptions_StrayPubesAmount_KR;
					else if(this.isSpanish) return RemYanflyOptions_StrayPubesAmount_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_StrayPubesAmount_EN;
		}, configurable: true
	},
	yanflyOptionsStrayPubesAmountHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_StrayPubesAmount_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_StrayPubesAmount_Help_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_StrayPubesAmount_Help_RU;
					else if(this.isSChinese) return RemYanflyOptions_StrayPubesAmount_Help_SCH;
					else if(this.isTChinese) return RemYanflyOptions_StrayPubesAmount_Help_TCH;
					else if(this.isKorean) return RemYanflyOptions_StrayPubesAmount_Help_KR;
					else if(this.isSpanish) return RemYanflyOptions_StrayPubesAmount_Help_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_StrayPubesAmount_Help_EN;
		}, configurable: true
	},

	yanflyOptionsLovenseEnable: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_LovenseEnable_JP;
			else if(this.isEnglish) return RemYanflyOptions_LovenseEnable_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_LovenseEnable_RU;
					else if(this.isSChinese) return RemYanflyOptions_LovenseEnable_SCH;
					else if(this.isTChinese) return RemYanflyOptions_LovenseEnable_TCH;
					else if(this.isKorean) return RemYanflyOptions_LovenseEnable_KR;
					else if(this.isSpanish) return RemYanflyOptions_LovenseEnable_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_LovenseEnable_EN;
		}, configurable: true
	},
	yanflyOptionsLovenseEnableHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_LovenseEnable_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_LovenseEnable_Help_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_LovenseEnable_Help_RU;
					else if(this.isSChinese) return RemYanflyOptions_LovenseEnable_Help_SCH;
					else if(this.isTChinese) return RemYanflyOptions_LovenseEnable_Help_TCH;
					else if(this.isKorean) return RemYanflyOptions_LovenseEnable_Help_KR;
					else if(this.isSpanish) return RemYanflyOptions_LovenseEnable_Help_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_LovenseEnable_Help_EN;
		}, configurable: true
	},
	yanflyOptionsLovenseConnectionType: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_LovenseConnectionType_JP;
			else if(this.isEnglish) return RemYanflyOptions_LovenseConnectionType_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_LovenseConnectionType_RU;
					else if(this.isSChinese) return RemYanflyOptions_LovenseConnectionType_SCH;
					else if(this.isTChinese) return RemYanflyOptions_LovenseConnectionType_TCH;
					else if(this.isKorean) return RemYanflyOptions_LovenseConnectionType_KR;
					else if(this.isSpanish) return RemYanflyOptions_LovenseConnectionType_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_LovenseConnectionType_EN;
		}, configurable: true
	},
	yanflyOptionsLovenseConnectionTypeHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_LovenseConnectionType_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_LovenseConnectionType_Help_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_LovenseConnectionType_Help_RU;
					else if(this.isSChinese) return RemYanflyOptions_LovenseConnectionType_Help_SCH;
					else if(this.isTChinese) return RemYanflyOptions_LovenseConnectionType_Help_TCH;
					else if(this.isKorean) return RemYanflyOptions_LovenseConnectionType_Help_KR;
					else if(this.isSpanish) return RemYanflyOptions_LovenseConnectionType_Help_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_LovenseConnectionType_Help_EN;
		}, configurable: true
	},
	yanflyOptionsLovenseConnectionType_Mobile: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_LovenseConnectionType_Mobile_JP;
			else if(this.isEnglish) return RemYanflyOptions_LovenseConnectionType_Mobile_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_LovenseConnectionType_Mobile_RU;
					else if(this.isSChinese) return RemYanflyOptions_LovenseConnectionType_Mobile_SCH;
					else if(this.isTChinese) return RemYanflyOptions_LovenseConnectionType_Mobile_TCH;
					else if(this.isKorean) return RemYanflyOptions_LovenseConnectionType_Mobile_KR;
					else if(this.isSpanish) return RemYanflyOptions_LovenseConnectionType_Mobile_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_LovenseConnectionType_Mobile_EN;
		}, configurable: true
	},
	yanflyOptionsLovenseConnectionType_PC: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_LovenseConnectionType_PC_JP;
			else if(this.isEnglish) return RemYanflyOptions_LovenseConnectionType_PC_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_LovenseConnectionType_PC_RU;
					else if(this.isSChinese) return RemYanflyOptions_LovenseConnectionType_PC_SCH;
					else if(this.isTChinese) return RemYanflyOptions_LovenseConnectionType_PC_TCH;
					else if(this.isKorean) return RemYanflyOptions_LovenseConnectionType_PC_KR;
					else if(this.isSpanish) return RemYanflyOptions_LovenseConnectionType_PC_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_LovenseConnectionType_PC_EN;
		}, configurable: true
	},
	yanflyOptionsLovenseMobileIP: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_LovenseMobileIP_JP;
			else if(this.isEnglish) return RemYanflyOptions_LovenseMobileIP_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_LovenseMobileIP_RU;
					else if(this.isSChinese) return RemYanflyOptions_LovenseMobileIP_SCH;
					else if(this.isTChinese) return RemYanflyOptions_LovenseMobileIP_TCH;
					else if(this.isKorean) return RemYanflyOptions_LovenseMobileIP_KR;
					else if(this.isSpanish) return RemYanflyOptions_LovenseMobileIP_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_LovenseMobileIP_EN;
		}, configurable: true
	},
	yanflyOptionsLovenseMobileIPHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_LovenseMobileIP_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_LovenseMobileIP_Help_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_LovenseMobileIP_Help_RU;
					else if(this.isSChinese) return RemYanflyOptions_LovenseMobileIP_Help_SCH;
					else if(this.isTChinese) return RemYanflyOptions_LovenseMobileIP_Help_TCH;
					else if(this.isKorean) return RemYanflyOptions_LovenseMobileIP_Help_KR;
					else if(this.isSpanish) return RemYanflyOptions_LovenseMobileIP_Help_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_LovenseMobileIP_Help_EN;
		}, configurable: true
	},
	yanflyOptionsLovenseMobileIPText: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_LovenseMobileIP_Text_JP;
			else if(this.isEnglish) return RemYanflyOptions_LovenseMobileIP_Text_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_LovenseMobileIP_Text_RU;
					else if(this.isSChinese) return RemYanflyOptions_LovenseMobileIP_Text_SCH;
					else if(this.isTChinese) return RemYanflyOptions_LovenseMobileIP_Text_TCH;
					else if(this.isKorean) return RemYanflyOptions_LovenseMobileIP_Text_KR;
					else if(this.isSpanish) return RemYanflyOptions_LovenseMobileIP_Text_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_LovenseMobileIP_Text_EN;
		}, configurable: true
	},
	yanflyOptionsLovenseMobilePort: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_LovenseMobilePort_JP;
			else if(this.isEnglish) return RemYanflyOptions_LovenseMobilePort_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_LovenseMobilePort_RU;
					else if(this.isSChinese) return RemYanflyOptions_LovenseMobilePort_SCH;
					else if(this.isTChinese) return RemYanflyOptions_LovenseMobilePort_TCH;
					else if(this.isKorean) return RemYanflyOptions_LovenseMobilePort_KR;
					else if(this.isSpanish) return RemYanflyOptions_LovenseMobilePort_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_LovenseMobilePort_EN;
		}, configurable: true
	},
	yanflyOptionsLovenseMobilePortHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_LovenseMobilePort_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_LovenseMobilePort_Help_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_LovenseMobilePort_Help_RU;
					else if(this.isSChinese) return RemYanflyOptions_LovenseMobilePort_Help_SCH;
					else if(this.isTChinese) return RemYanflyOptions_LovenseMobilePort_Help_TCH;
					else if(this.isKorean) return RemYanflyOptions_LovenseMobilePort_Help_KR;
					else if(this.isSpanish) return RemYanflyOptions_LovenseMobilePort_Help_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_LovenseMobilePort_Help_EN;
		}, configurable: true
	},
	yanflyOptionsLovenseMobilePortText: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_LovenseMobilePort_Text_JP;
			else if(this.isEnglish) return RemYanflyOptions_LovenseMobilePort_Text_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_LovenseMobilePort_Text_RU;
					else if(this.isSChinese) return RemYanflyOptions_LovenseMobilePort_Text_SCH;
					else if(this.isTChinese) return RemYanflyOptions_LovenseMobilePort_Text_TCH;
					else if(this.isKorean) return RemYanflyOptions_LovenseMobilePort_Text_KR;
					else if(this.isSpanish) return RemYanflyOptions_LovenseMobilePort_Text_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_LovenseMobilePort_Text_EN;
		}, configurable: true
	},
	yanflyOptionsLovenseMobileHint: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_LovenseMobileHint_JP;
			else if(this.isEnglish) return RemYanflyOptions_LovenseMobileHint_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_LovenseMobileHint_RU;
					else if(this.isSChinese) return RemYanflyOptions_LovenseMobileHint_SCH;
					else if(this.isTChinese) return RemYanflyOptions_LovenseMobileHint_TCH;
					else if(this.isKorean) return RemYanflyOptions_LovenseMobileHint_KR;
					else if(this.isSpanish) return RemYanflyOptions_LovenseMobileHint_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_LovenseMobileHint_EN;
		}, configurable: true
	},


	yanflyOptionsLovenseConnectToys: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_LovenseConnectToys_JP;
			else if(this.isEnglish) return RemYanflyOptions_LovenseConnectToys_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_LovenseConnectToys_RU;
					else if(this.isSChinese) return RemYanflyOptions_LovenseConnectToys_SCH;
					else if(this.isTChinese) return RemYanflyOptions_LovenseConnectToys_TCH;
					else if(this.isKorean) return RemYanflyOptions_LovenseConnectToys_KR;
					else if(this.isSpanish) return RemYanflyOptions_LovenseConnectToys_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_LovenseConnectToys_EN;
		}, configurable: true
	},
	yanflyOptionsLovenseConnectToysHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_LovenseConnectToys_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_LovenseConnectToys_Help_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_LovenseConnectToys_Help_RU;
					else if(this.isSChinese) return RemYanflyOptions_LovenseConnectToys_Help_SCH;
					else if(this.isTChinese) return RemYanflyOptions_LovenseConnectToys_Help_TCH;
					else if(this.isKorean) return RemYanflyOptions_LovenseConnectToys_Help_KR;
					else if(this.isSpanish) return RemYanflyOptions_LovenseConnectToys_Help_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_LovenseConnectToys_Help_EN;
		}, configurable: true
	},
	yanflyOptionsLovenseConnectToysText: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_LovenseConnectToys_Text_JP;
			else if(this.isEnglish) return RemYanflyOptions_LovenseConnectToys_Text_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_LovenseConnectToys_Text_RU;
					else if(this.isSChinese) return RemYanflyOptions_LovenseConnectToys_Text_SCH;
					else if(this.isTChinese) return RemYanflyOptions_LovenseConnectToys_Text_TCH;
					else if(this.isKorean) return RemYanflyOptions_LovenseConnectToys_Text_KR;
					else if(this.isSpanish) return RemYanflyOptions_LovenseConnectToys_Text_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_LovenseConnectToys_Text_EN;
		}, configurable: true
	},

	yanflyOptionsLovenseNoToysConnected: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_LovenseNoToysConnected_JP;
			else if(this.isEnglish) return RemYanflyOptions_LovenseNoToysConnected_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_LovenseNoToysConnected_RU;
					else if(this.isSChinese) return RemYanflyOptions_LovenseNoToysConnected_SCH;
					else if(this.isTChinese) return RemYanflyOptions_LovenseNoToysConnected_TCH;
					else if(this.isKorean) return RemYanflyOptions_LovenseNoToysConnected_KR;
					else if(this.isSpanish) return RemYanflyOptions_LovenseNoToysConnected_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_LovenseNoToysConnected_EN;
		}, configurable: true
	},
	yanflyOptionsLovenseNoToysConnectedHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_LovenseNoToysConnected_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_LovenseNoToysConnected_Help_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_LovenseNoToysConnected_Help_RU;
					else if(this.isSChinese) return RemYanflyOptions_LovenseNoToysConnected_Help_SCH;
					else if(this.isTChinese) return RemYanflyOptions_LovenseNoToysConnected_Help_TCH;
					else if(this.isKorean) return RemYanflyOptions_LovenseNoToysConnected_Help_KR;
					else if(this.isSpanish) return RemYanflyOptions_LovenseNoToysConnected_Help_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_LovenseNoToysConnected_Help_EN;
		}, configurable: true
	},

	yanflyOptionsLovenseToyNameList: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_LovenseToyNameList_JP;
			else if(this.isEnglish) return RemYanflyOptions_LovenseToyNameList_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_LovenseToyNameList_RU;
					else if(this.isSChinese) return RemYanflyOptions_LovenseToyNameList_SCH;
					else if(this.isTChinese) return RemYanflyOptions_LovenseToyNameList_TCH;
					else if(this.isKorean) return RemYanflyOptions_LovenseToyNameList_KR;
					else if(this.isSpanish) return RemYanflyOptions_LovenseToyNameList_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_LovenseToyNameList_EN;
		}, configurable: true
	},
	yanflyOptionsLovenseToyNameListTest: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_LovenseToyNameList_Test_JP;
			else if(this.isEnglish) return RemYanflyOptions_LovenseToyNameList_Test_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_LovenseToyNameList_Test_RU;
					else if(this.isSChinese) return RemYanflyOptions_LovenseToyNameList_Test_SCH;
					else if(this.isTChinese) return RemYanflyOptions_LovenseToyNameList_Test_TCH;
					else if(this.isKorean) return RemYanflyOptions_LovenseToyNameList_Test_KR;
					else if(this.isSpanish) return RemYanflyOptions_LovenseToyNameList_Test_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_LovenseToyNameList_Test_EN;
		}, configurable: true
	},

	yanflyOptionsLovenseIntensity: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_LovenseIntensity_JP;
			else if(this.isEnglish) return RemYanflyOptions_LovenseIntensity_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_LovenseIntensity_RU;
					else if(this.isSChinese) return RemYanflyOptions_LovenseIntensity_SCH;
					else if(this.isTChinese) return RemYanflyOptions_LovenseIntensity_TCH;
					else if(this.isKorean) return RemYanflyOptions_LovenseIntensity_KR;
					else if(this.isSpanish) return RemYanflyOptions_LovenseIntensity_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_LovenseIntensity_EN;
		}, configurable: true
	},
	yanflyOptionsLovenseIntensityHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_LovenseIntensity_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_LovenseIntensity_Help_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_LovenseIntensity_Help_RU;
					else if(this.isSChinese) return RemYanflyOptions_LovenseIntensity_Help_SCH;
					else if(this.isTChinese) return RemYanflyOptions_LovenseIntensity_Help_TCH;
					else if(this.isKorean) return RemYanflyOptions_LovenseIntensity_Help_KR;
					else if(this.isSpanish) return RemYanflyOptions_LovenseIntensity_Help_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_LovenseIntensity_Help_EN;
		}, configurable: true
	},
	yanflyOptionsLovenseTime: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_LovenseTime_JP;
			else if(this.isEnglish) return RemYanflyOptions_LovenseTime_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_LovenseTime_RU;
					else if(this.isSChinese) return RemYanflyOptions_LovenseTime_SCH;
					else if(this.isTChinese) return RemYanflyOptions_LovenseTime_TCH;
					else if(this.isKorean) return RemYanflyOptions_LovenseTime_KR;
					else if(this.isSpanish) return RemYanflyOptions_LovenseTime_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_LovenseTime_EN;
		}, configurable: true
	},
	yanflyOptionsLovenseTimeHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_LovenseTime_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_LovenseTime_Help_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_LovenseTime_Help_RU;
					else if(this.isSChinese) return RemYanflyOptions_LovenseTime_Help_SCH;
					else if(this.isTChinese) return RemYanflyOptions_LovenseTime_Help_TCH;
					else if(this.isKorean) return RemYanflyOptions_LovenseTime_Help_KR;
					else if(this.isSpanish) return RemYanflyOptions_LovenseTime_Help_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_LovenseTime_Help_EN;
		}, configurable: true
	},

	yanflyOptionsLovensePumpEnable: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_LovensePumpEnable_JP;
			else if(this.isEnglish) return RemYanflyOptions_LovensePumpEnable_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_LovensePumpEnable_RU;
					else if(this.isSChinese) return RemYanflyOptions_LovensePumpEnable_SCH;
					else if(this.isTChinese) return RemYanflyOptions_LovensePumpEnable_TCH;
					else if(this.isKorean) return RemYanflyOptions_LovensePumpEnable_KR;
					else if(this.isSpanish) return RemYanflyOptions_LovensePumpEnable_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_LovensePumpEnable_EN;
		}, configurable: true
	},
	yanflyOptionsLovensePumpEnableHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_LovensePumpEnable_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_LovensePumpEnable_Help_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_LovensePumpEnable_Help_RU;
					else if(this.isSChinese) return RemYanflyOptions_LovensePumpEnable_Help_SCH;
					else if(this.isTChinese) return RemYanflyOptions_LovensePumpEnable_Help_TCH;
					else if(this.isKorean) return RemYanflyOptions_LovensePumpEnable_Help_KR;
					else if(this.isSpanish) return RemYanflyOptions_LovensePumpEnable_Help_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_LovensePumpEnable_Help_EN;
		}, configurable: true
	},


	yanflyOptionsLovenseEnableRAID: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_LovenseEnableRAID_JP;
			else if(this.isEnglish) return RemYanflyOptions_LovenseEnableRAID_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_LovenseEnableRAID_RU;
					else if(this.isSChinese) return RemYanflyOptions_LovenseEnableRAID_SCH;
					else if(this.isTChinese) return RemYanflyOptions_LovenseEnableRAID_TCH;
					else if(this.isKorean) return RemYanflyOptions_LovenseEnableRAID_KR;
					else if(this.isSpanish) return RemYanflyOptions_LovenseEnableRAID_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_LovenseEnableRAID_EN;
		}, configurable: true
	},
	yanflyOptionsLovenseEnableRAIDHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_LovenseEnableRAID_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_LovenseEnableRAID_Help_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_LovenseEnableRAID_Help_RU;
					else if(this.isSChinese) return RemYanflyOptions_LovenseEnableRAID_Help_SCH;
					else if(this.isTChinese) return RemYanflyOptions_LovenseEnableRAID_Help_TCH;
					else if(this.isKorean) return RemYanflyOptions_LovenseEnableRAID_Help_KR;
					else if(this.isSpanish) return RemYanflyOptions_LovenseEnableRAID_Help_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_LovenseEnableRAID_Help_EN;
		}, configurable: true
	},

	yanflyOptionsRAIDpartyHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_RAIDparty_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_RAIDparty_Help_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_RAIDparty_Help_RU;
					else if(this.isSChinese) return RemYanflyOptions_RAIDparty_Help_SCH;
					else if(this.isTChinese) return RemYanflyOptions_RAIDparty_Help_TCH;
					else if(this.isKorean) return RemYanflyOptions_RAIDparty_Help_KR;
					else if(this.isSpanish) return RemYanflyOptions_RAIDparty_Help_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_RAIDparty_Help_EN;
		}, configurable: true
	},
	yanflyOptionsRAIDpartySolo: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_RAIDparty_Solo_JP;
			else if(this.isEnglish) return RemYanflyOptions_RAIDparty_Solo_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_RAIDparty_Solo_RU;
					else if(this.isSChinese) return RemYanflyOptions_RAIDparty_Solo_SCH;
					else if(this.isTChinese) return RemYanflyOptions_RAIDparty_Solo_TCH;
					else if(this.isKorean) return RemYanflyOptions_RAIDparty_Solo_KR;
					else if(this.isSpanish) return RemYanflyOptions_RAIDparty_Solo_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_RAIDparty_Solo_EN;
		}, configurable: true
	},
	yanflyOptionsRAIDpartyParty: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_RAIDparty_Party_JP;
			else if(this.isEnglish) return RemYanflyOptions_RAIDparty_Party_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_RAIDparty_Party_RU;
					else if(this.isSChinese) return RemYanflyOptions_RAIDparty_Party_SCH;
					else if(this.isTChinese) return RemYanflyOptions_RAIDparty_Party_TCH;
					else if(this.isKorean) return RemYanflyOptions_RAIDparty_Party_KR;
					else if(this.isSpanish) return RemYanflyOptions_RAIDparty_Party_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_RAIDparty_Party_EN;
		}, configurable: true
	},
	yanflyOptionsRAIDsexactHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_RAIDsexact_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_RAIDsexact_Help_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_RAIDsexact_Help_RU;
					else if(this.isSChinese) return RemYanflyOptions_RAIDsexact_Help_SCH;
					else if(this.isTChinese) return RemYanflyOptions_RAIDsexact_Help_TCH;
					else if(this.isKorean) return RemYanflyOptions_RAIDsexact_Help_KR;
					else if(this.isSpanish) return RemYanflyOptions_RAIDsexact_Help_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_RAIDsexact_Help_EN;
		}, configurable: true
	},

	yanflyOptionsRAIDarousalHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_RAIDarousal_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_RAIDarousal_Help_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_RAIDarousal_Help_RU;
					else if(this.isSChinese) return RemYanflyOptions_RAIDarousal_Help_SCH;
					else if(this.isTChinese) return RemYanflyOptions_RAIDarousal_Help_TCH;
					else if(this.isKorean) return RemYanflyOptions_RAIDarousal_Help_KR;
					else if(this.isSpanish) return RemYanflyOptions_RAIDarousal_Help_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_RAIDarousal_Help_EN;
		}, configurable: true
	},
	yanflyOptionsRAIDarousalON: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_RAIDarousal_ON_JP;
			else if(this.isEnglish) return RemYanflyOptions_RAIDarousal_ON_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_RAIDarousal_ON_RU;
					else if(this.isSChinese) return RemYanflyOptions_RAIDarousal_ON_SCH;
					else if(this.isTChinese) return RemYanflyOptions_RAIDarousal_ON_TCH;
					else if(this.isKorean) return RemYanflyOptions_RAIDarousal_ON_KR;
					else if(this.isSpanish) return RemYanflyOptions_RAIDarousal_ON_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_RAIDarousal_ON_EN;
		}, configurable: true
	},
	yanflyOptionsRAIDarousalOFF: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_RAIDarousal_OFF_JP;
			else if(this.isEnglish) return RemYanflyOptions_RAIDarousal_OFF_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_RAIDarousal_OFF_RU;
					else if(this.isSChinese) return RemYanflyOptions_RAIDarousal_OFF_SCH;
					else if(this.isTChinese) return RemYanflyOptions_RAIDarousal_OFF_TCH;
					else if(this.isKorean) return RemYanflyOptions_RAIDarousal_OFF_KR;
					else if(this.isSpanish) return RemYanflyOptions_RAIDarousal_OFF_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_RAIDarousal_OFF_EN;
		}, configurable: true
	},
	yanflyOptionsRAIDorgasmHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_RAIDorgasm_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_RAIDorgasm_Help_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_RAIDorgasm_Help_RU;
					else if(this.isSChinese) return RemYanflyOptions_RAIDorgasm_Help_SCH;
					else if(this.isTChinese) return RemYanflyOptions_RAIDorgasm_Help_TCH;
					else if(this.isKorean) return RemYanflyOptions_RAIDorgasm_Help_KR;
					else if(this.isSpanish) return RemYanflyOptions_RAIDorgasm_Help_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_RAIDorgasm_Help_EN;
		}, configurable: true
	},
	yanflyOptionsRAIDorgasmON: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_RAIDorgasm_ON_JP;
			else if(this.isEnglish) return RemYanflyOptions_RAIDorgasm_ON_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_RAIDorgasm_ON_RU;
					else if(this.isSChinese) return RemYanflyOptions_RAIDorgasm_ON_SCH;
					else if(this.isTChinese) return RemYanflyOptions_RAIDorgasm_ON_TCH;
					else if(this.isKorean) return RemYanflyOptions_RAIDorgasm_ON_KR;
					else if(this.isSpanish) return RemYanflyOptions_RAIDorgasm_ON_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_RAIDorgasm_ON_EN;
		}, configurable: true
	},
	yanflyOptionsRAIDorgasmOFF: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_RAIDorgasm_OFF_JP;
			else if(this.isEnglish) return RemYanflyOptions_RAIDorgasm_OFF_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_RAIDorgasm_OFF_RU;
					else if(this.isSChinese) return RemYanflyOptions_RAIDorgasm_OFF_SCH;
					else if(this.isTChinese) return RemYanflyOptions_RAIDorgasm_OFF_TCH;
					else if(this.isKorean) return RemYanflyOptions_RAIDorgasm_OFF_KR;
					else if(this.isSpanish) return RemYanflyOptions_RAIDorgasm_OFF_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_RAIDorgasm_OFF_EN;
		}, configurable: true
	},

	yanflyOptionsRAIDtimeHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_RAIDtime_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_RAIDtime_Help_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_RAIDtime_Help_RU;
					else if(this.isSChinese) return RemYanflyOptions_RAIDtime_Help_SCH;
					else if(this.isTChinese) return RemYanflyOptions_RAIDtime_Help_TCH;
					else if(this.isKorean) return RemYanflyOptions_RAIDtime_Help_KR;
					else if(this.isSpanish) return RemYanflyOptions_RAIDtime_Help_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_RAIDtime_Help_EN;
		}, configurable: true
	},
	yanflyOptionsRAIDintensityHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_RAIDintensity_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_RAIDintensity_Help_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_RAIDintensity_Help_RU;
					else if(this.isSChinese) return RemYanflyOptions_RAIDintensity_Help_SCH;
					else if(this.isTChinese) return RemYanflyOptions_RAIDintensity_Help_TCH;
					else if(this.isKorean) return RemYanflyOptions_RAIDintensity_Help_KR;
					else if(this.isSpanish) return RemYanflyOptions_RAIDintensity_Help_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_RAIDintensity_Help_EN;
		}, configurable: true
	},

	yanflyOptionsLanguage: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Language_JP;
			else if(this.isEnglish) return RemYanflyOptions_Language_EN;
			else if(this.isRussian) return RemYanflyOptions_Language_RU;
			else if(this.isSChinese) return RemYanflyOptions_Language_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Language_TCH;
			else if(this.isKorean) return RemYanflyOptions_Language_KR;
			else if(this.isSpanish) return RemYanflyOptions_Language_SP;
			return RemYanflyOptions_Language_EN;
		}, configurable: true
	},
	yanflyOptionsLanguageHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Language_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Language_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_Language_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_Language_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Language_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_Language_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_Language_Help_SP;
			return RemYanflyOptions_Language_Help_EN;
		}, configurable: true
	},
	yanflyOptionsVoiceLanguage: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_VoiceLanguage_JP;
			else if(this.isEnglish) return RemYanflyOptions_VoiceLanguage_EN;
			else if(this.isRussian) return RemYanflyOptions_VoiceLanguage_RU;
			else if(this.isSChinese) return RemYanflyOptions_VoiceLanguage_SCH;
			else if(this.isTChinese) return RemYanflyOptions_VoiceLanguage_TCH;
			else if(this.isKorean) return RemYanflyOptions_VoiceLanguage_KR;
			else if(this.isSpanish) return RemYanflyOptions_VoiceLanguage_SP;
			return RemYanflyOptions_VoiceLanguage_EN;
		}, configurable: true
	},
	yanflyOptionsVoiceLanguageHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_VoiceLanguage_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_VoiceLanguage_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_VoiceLanguage_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_VoiceLanguage_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_VoiceLanguage_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_VoiceLanguage_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_VoiceLanguage_Help_SP;
			return RemYanflyOptions_VoiceLanguage_Help_EN;
		}, configurable: true
	},
	yanflyOptionsAlwaysDash: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_AlwaysDash_JP;
			else if(this.isEnglish) return RemYanflyOptions_AlwaysDash_EN;
			else if(this.isRussian) return RemYanflyOptions_AlwaysDash_RU;
			else if(this.isSChinese) return RemYanflyOptions_AlwaysDash_SCH;
			else if(this.isTChinese) return RemYanflyOptions_AlwaysDash_TCH;
			else if(this.isKorean) return RemYanflyOptions_AlwaysDash_KR;
			else if(this.isSpanish) return RemYanflyOptions_AlwaysDash_SP;
			return RemYanflyOptions_AlwaysDash_EN;
		}, configurable: true
	},
	yanflyOptionsAlwaysDashHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_AlwaysDash_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_AlwaysDash_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_AlwaysDash_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_AlwaysDash_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_AlwaysDash_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_AlwaysDash_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_AlwaysDash_Help_SP;
			return RemYanflyOptions_AlwaysDash_Help_EN;
		}, configurable: true
	},

	yanflyOptionsKarrynLinesPrompt: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_KarrynLinesPrompt_JP;
			else if(this.isEnglish) return RemYanflyOptions_KarrynLinesPrompt_EN;
			else if(this.isRussian) return RemYanflyOptions_KarrynLinesPrompt_RU;
			else if(this.isSChinese) return RemYanflyOptions_KarrynLinesPrompt_SCH;
			else if(this.isTChinese) return RemYanflyOptions_KarrynLinesPrompt_TCH;
			else if(this.isKorean) return RemYanflyOptions_KarrynLinesPrompt_KR;
			else if(this.isSpanish) return RemYanflyOptions_KarrynLinesPrompt_SP;
			return RemYanflyOptions_KarrynLinesPrompt_EN;
		}, configurable: true
	},
	yanflyOptionsKarrynLinesPromptHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_KarrynLinesPrompt_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_KarrynLinesPrompt_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_KarrynLinesPrompt_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_KarrynLinesPrompt_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_KarrynLinesPrompt_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_KarrynLinesPrompt_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_KarrynLinesPrompt_Help_SP;
			return RemYanflyOptions_KarrynLinesPrompt_Help_EN;
		}, configurable: true
	},
	yanflyOptionsFasterBattleDialogue: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_FasterBattleDialogue_JP;
			else if(this.isEnglish) return RemYanflyOptions_FasterBattleDialogue_EN;
			else if(this.isRussian) return RemYanflyOptions_FasterBattleDialogue_RU;
			else if(this.isSChinese) return RemYanflyOptions_FasterBattleDialogue_SCH;
			else if(this.isTChinese) return RemYanflyOptions_FasterBattleDialogue_TCH;
			else if(this.isKorean) return RemYanflyOptions_FasterBattleDialogue_KR;
			else if(this.isSpanish) return RemYanflyOptions_FasterBattleDialogue_SP;
			return RemYanflyOptions_FasterBattleDialogue_EN;
		}, configurable: true
	},
	yanflyOptionsFasterBattleDialogueHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_FasterBattleDialogue_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_FasterBattleDialogue_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_FasterBattleDialogue_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_FasterBattleDialogue_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_FasterBattleDialogue_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_FasterBattleDialogue_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_FasterBattleDialogue_Help_SP;
			return RemYanflyOptions_FasterBattleDialogue_Help_EN;
		}, configurable: true
	},
	yanflyOptionsFasterBattleCutins: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_FasterBattleCutins_JP;
			else if(this.isEnglish) return RemYanflyOptions_FasterBattleCutins_EN;
			else if(this.isRussian) return RemYanflyOptions_FasterBattleCutins_RU;
			else if(this.isSChinese) return RemYanflyOptions_FasterBattleCutins_SCH;
			else if(this.isTChinese) return RemYanflyOptions_FasterBattleCutins_TCH;
			else if(this.isKorean) return RemYanflyOptions_FasterBattleCutins_KR;
			else if(this.isSpanish) return RemYanflyOptions_FasterBattleCutins_SP;
			return RemYanflyOptions_FasterBattleCutins_EN;
		}, configurable: true
	},
	yanflyOptionsFasterBattleCutinsHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_FasterBattleCutins_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_FasterBattleCutins_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_FasterBattleCutins_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_FasterBattleCutins_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_FasterBattleCutins_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_FasterBattleCutins_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_FasterBattleCutins_Help_SP;
			return RemYanflyOptions_FasterBattleCutins_Help_EN;
		}, configurable: true
	},

	yanflyOptionsSmootherBattleCutinLoading: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_SmootherBattleCutinLoading_JP;
			else if(this.isEnglish) return RemYanflyOptions_SmootherBattleCutinLoading_EN;
			else if(this.isRussian) return RemYanflyOptions_SmootherBattleCutinLoading_RU;
			else if(this.isSChinese) return RemYanflyOptions_SmootherBattleCutinLoading_SCH;
			else if(this.isTChinese) return RemYanflyOptions_SmootherBattleCutinLoading_TCH;
			else if(this.isKorean) return RemYanflyOptions_SmootherBattleCutinLoading_KR;
			else if(this.isSpanish) return RemYanflyOptions_SmootherBattleCutinLoading_SP;
			return RemYanflyOptions_SmootherBattleCutinLoading_EN;
		}, configurable: true
	},
	yanflyOptionsSmootherBattleCutinLoadingHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_SmootherBattleCutinLoading_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_SmootherBattleCutinLoading_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_SmootherBattleCutinLoading_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_SmootherBattleCutinLoading_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_SmootherBattleCutinLoading_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_SmootherBattleCutinLoading_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_SmootherBattleCutinLoading_Help_SP;
			return RemYanflyOptions_SmootherBattleCutinLoading_Help_EN;
		}, configurable: true
	},
	yanflyOptionsDisableBattleCutins: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_DisableBattleCutins_JP;
			else if(this.isEnglish) return RemYanflyOptions_DisableBattleCutins_EN;
			else if(this.isRussian) return RemYanflyOptions_DisableBattleCutins_RU;
			else if(this.isSChinese) return RemYanflyOptions_DisableBattleCutins_SCH;
			else if(this.isTChinese) return RemYanflyOptions_DisableBattleCutins_TCH;
			else if(this.isKorean) return RemYanflyOptions_DisableBattleCutins_KR;
			else if(this.isSpanish) return RemYanflyOptions_DisableBattleCutins_SP;
			return RemYanflyOptions_DisableBattleCutins_EN;
		}, configurable: true
	},
	yanflyOptionsDisableBattleCutinsHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_DisableBattleCutins_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_DisableBattleCutins_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_DisableBattleCutins_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_DisableBattleCutins_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_DisableBattleCutins_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_DisableBattleCutins_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_DisableBattleCutins_Help_SP;
			return RemYanflyOptions_DisableBattleCutins_Help_EN;
		}, configurable: true
	},
	yanflyOptionsSmootherCGLoading: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_SmootherCGLoading_JP;
			else if(this.isEnglish) return RemYanflyOptions_SmootherCGLoading_EN;
			else if(this.isRussian) return RemYanflyOptions_SmootherCGLoading_RU;
			else if(this.isSChinese) return RemYanflyOptions_SmootherCGLoading_SCH;
			else if(this.isTChinese) return RemYanflyOptions_SmootherCGLoading_TCH;
			else if(this.isKorean) return RemYanflyOptions_SmootherCGLoading_KR;
			else if(this.isSpanish) return RemYanflyOptions_SmootherCGLoading_SP;
			return RemYanflyOptions_SmootherCGLoading_EN;
		}, configurable: true
	},
	yanflyOptionsSmootherCGLoadingHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_SmootherCGLoading_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_SmootherCGLoading_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_SmootherCGLoading_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_SmootherCGLoading_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_SmootherCGLoading_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_SmootherCGLoading_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_SmootherCGLoading_Help_SP;
			return RemYanflyOptions_SmootherCGLoading_Help_EN;
		}, configurable: true
	},



	yanflyOptionsSortPassivesAscending: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_SortPassivesAscending_JP;
			else if(this.isEnglish) return RemYanflyOptions_SortPassivesAscending_EN;
			else if(this.isRussian) return RemYanflyOptions_SortPassivesAscending_RU;
			else if(this.isSChinese) return RemYanflyOptions_SortPassivesAscending_SCH;
			else if(this.isTChinese) return RemYanflyOptions_SortPassivesAscending_TCH;
			else if(this.isKorean) return RemYanflyOptions_SortPassivesAscending_KR;
			else if(this.isSpanish) return RemYanflyOptions_SortPassivesAscending_SP;
			return RemYanflyOptions_SortPassivesAscending_EN;
		}, configurable: true
	},
	yanflyOptionsSortPassivesAscendingHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_SortPassivesAscending_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_SortPassivesAscending_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_SortPassivesAscending_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_SortPassivesAscending_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_SortPassivesAscending_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_SortPassivesAscending_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_SortPassivesAscending_Help_SP;
			return RemYanflyOptions_SortPassivesAscending_Help_EN;
		}, configurable: true
	},


	yanflyOptionsCommandRemember: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_CommandRemember_JP;
			else if(this.isEnglish) return RemYanflyOptions_CommandRemember_EN;
			else if(this.isRussian) return RemYanflyOptions_CommandRemember_RU;
			else if(this.isSChinese) return RemYanflyOptions_CommandRemember_SCH;
			else if(this.isTChinese) return RemYanflyOptions_CommandRemember_TCH;
			else if(this.isKorean) return RemYanflyOptions_CommandRemember_KR;
			else if(this.isSpanish) return RemYanflyOptions_CommandRemember_SP;
			return RemYanflyOptions_CommandRemember_EN;
		}, configurable: true
	},
	yanflyOptionsCommandRememberHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_CommandRemember_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_CommandRemember_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_CommandRemember_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_CommandRemember_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_CommandRemember_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_CommandRemember_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_CommandRemember_Help_SP;
			return RemYanflyOptions_CommandRemember_Help_EN;
		}, configurable: true
	},
	yanflyOptionsCancelSkipMentalPhase: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_CancelSkipMentalPhase_JP;
			else if(this.isEnglish) return RemYanflyOptions_CancelSkipMentalPhase_EN;
			else if(this.isRussian) return RemYanflyOptions_CancelSkipMentalPhase_RU;
			else if(this.isSChinese) return RemYanflyOptions_CancelSkipMentalPhase_SCH;
			else if(this.isTChinese) return RemYanflyOptions_CancelSkipMentalPhase_TCH;
			else if(this.isKorean) return RemYanflyOptions_CancelSkipMentalPhase_KR;
			else if(this.isSpanish) return RemYanflyOptions_CancelSkipMentalPhase_SP;
			return RemYanflyOptions_CancelSkipMentalPhase_EN;
		}, configurable: true
	},
	yanflyOptionsCancelSkipMentalPhaseHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_CancelSkipMentalPhase_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_CancelSkipMentalPhase_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_CancelSkipMentalPhase_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_CancelSkipMentalPhase_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_CancelSkipMentalPhase_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_CancelSkipMentalPhase_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_CancelSkipMentalPhase_Help_SP;
			return RemYanflyOptions_CancelSkipMentalPhase_Help_EN;
		}, configurable: true
	},
	yanflyOptionsFullscreen: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Fullscreen_JP;
			else if(this.isEnglish) return RemYanflyOptions_Fullscreen_EN;
			else if(this.isRussian) return RemYanflyOptions_Fullscreen_RU;
			else if(this.isSChinese) return RemYanflyOptions_Fullscreen_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Fullscreen_TCH;
			else if(this.isKorean) return RemYanflyOptions_Fullscreen_KR;
			else if(this.isSpanish) return RemYanflyOptions_Fullscreen_SP;
			return RemYanflyOptions_Fullscreen_EN;
		}, configurable: true
	},
	yanflyOptionsFullscreenHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Fullscreen_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Fullscreen_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_Fullscreen_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_Fullscreen_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Fullscreen_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_Fullscreen_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_Fullscreen_Help_SP;
			return RemYanflyOptions_Fullscreen_Help_EN;
		}, configurable: true
	},

	yanflyOptionsMessageSpeed: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_MessageSpeed_JP;
			else if(this.isEnglish) return RemYanflyOptions_MessageSpeed_EN;
			else if(this.isRussian) return RemYanflyOptions_MessageSpeed_RU;
			else if(this.isSChinese) return RemYanflyOptions_MessageSpeed_SCH;
			else if(this.isTChinese) return RemYanflyOptions_MessageSpeed_TCH;
			else if(this.isKorean) return RemYanflyOptions_MessageSpeed_KR;
			else if(this.isSpanish) return RemYanflyOptions_MessageSpeed_SP;
			return RemYanflyOptions_MessageSpeed_EN;
		}, configurable: true
	},
	yanflyOptionsMessageSpeedHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_MessageSpeed_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_MessageSpeed_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_MessageSpeed_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_MessageSpeed_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_MessageSpeed_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_MessageSpeed_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_MessageSpeed_Help_SP;
			return RemYanflyOptions_MessageSpeed_Help_EN;
		}, configurable: true
	},
	yanflyOptionsMessageSpeedNoWait: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_MessageSpeed_NoWait_JP;
			else if(this.isEnglish) return RemYanflyOptions_MessageSpeed_NoWait_EN;
			else if(this.isRussian) return RemYanflyOptions_MessageSpeed_NoWait_RU;
			else if(this.isSChinese) return RemYanflyOptions_MessageSpeed_NoWait_SCH;
			else if(this.isTChinese) return RemYanflyOptions_MessageSpeed_NoWait_TCH;
			else if(this.isKorean) return RemYanflyOptions_MessageSpeed_NoWait_KR;
			else if(this.isSpanish) return RemYanflyOptions_MessageSpeed_NoWait_SP;
			return RemYanflyOptions_MessageSpeed_NoWait_EN;
		}, configurable: true
	},

	yanflyOptionsBattlelogDuration: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Battlelog_Duration_JP;
			else if(this.isEnglish) return RemYanflyOptions_Battlelog_Duration_EN;
			else if(this.isRussian) return RemYanflyOptions_Battlelog_Duration_RU;
			else if(this.isSChinese) return RemYanflyOptions_Battlelog_Duration_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Battlelog_Duration_TCH;
			else if(this.isKorean) return RemYanflyOptions_Battlelog_Duration_KR;
			else if(this.isSpanish) return RemYanflyOptions_Battlelog_Duration_SP;
			return RemYanflyOptions_Battlelog_Duration_EN;
		}, configurable: true
	},
	yanflyOptionsBattlelogDurationHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Battlelog_Duration_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Battlelog_Duration_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_Battlelog_Duration_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_Battlelog_Duration_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Battlelog_Duration_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_Battlelog_Duration_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_Battlelog_Duration_Help_SP;
			return RemYanflyOptions_Battlelog_Duration_Help_EN;
		}, configurable: true
	},

	yanflyOptionsBattlelogFontsize: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Battlelog_Fontsize_JP;
			else if(this.isEnglish) return RemYanflyOptions_Battlelog_Fontsize_EN;
			else if(this.isRussian) return RemYanflyOptions_Battlelog_Fontsize_RU;
			else if(this.isSChinese) return RemYanflyOptions_Battlelog_Fontsize_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Battlelog_Fontsize_TCH;
			else if(this.isKorean) return RemYanflyOptions_Battlelog_Fontsize_KR;
			else if(this.isSpanish) return RemYanflyOptions_Battlelog_Fontsize_SP;
			return RemYanflyOptions_Battlelog_Fontsize_EN;
		}, configurable: true
	},
	yanflyOptionsBattlelogFontsizeHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Battlelog_Fontsize_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Battlelog_Fontsize_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_Battlelog_Fontsize_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_Battlelog_Fontsize_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Battlelog_Fontsize_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_Battlelog_Fontsize_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_Battlelog_Fontsize_Help_SP;
			return RemYanflyOptions_Battlelog_Fontsize_Help_EN;
		}, configurable: true
	},

	yanflyOptionsMaleDialogueAppear: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_MaleDialogueAppear_JP;
			else if(this.isEnglish) return RemYanflyOptions_MaleDialogueAppear_EN;
			else if(this.isRussian) return RemYanflyOptions_MaleDialogueAppear_RU;
			else if(this.isSChinese) return RemYanflyOptions_MaleDialogueAppear_SCH;
			else if(this.isTChinese) return RemYanflyOptions_MaleDialogueAppear_TCH;
			else if(this.isKorean) return RemYanflyOptions_MaleDialogueAppear_KR;
			else if(this.isSpanish) return RemYanflyOptions_MaleDialogueAppear_SP;
			return RemYanflyOptions_MaleDialogueAppear_EN;
		}, configurable: true
	},
	yanflyOptionsMaleDialogueAppearHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_MaleDialogueAppear_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_MaleDialogueAppear_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_MaleDialogueAppear_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_MaleDialogueAppear_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_MaleDialogueAppear_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_MaleDialogueAppear_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_MaleDialogueAppear_Help_SP;
			return RemYanflyOptions_MaleDialogueAppear_Help_EN;
		}, configurable: true
	},

	yanflyOptionsDisableRimjob: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Disable_Rimjobs_JP;
			else if(this.isEnglish) return RemYanflyOptions_Disable_Rimjobs_EN;
			else if(this.isRussian) return RemYanflyOptions_Disable_Rimjobs_RU;
			else if(this.isSChinese) return RemYanflyOptions_Disable_Rimjobs_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Disable_Rimjobs_TCH;
			else if(this.isKorean) return RemYanflyOptions_Disable_Rimjobs_KR;
			else if(this.isSpanish) return RemYanflyOptions_Disable_Rimjobs_SP;
			return RemYanflyOptions_Disable_Rimjobs_EN;
		}, configurable: true
	},
	yanflyOptionsDisableRimjobHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Disable_Rimjobs_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Disable_Rimjobs_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_Disable_Rimjobs_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_Disable_Rimjobs_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Disable_Rimjobs_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_Disable_Rimjobs_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_Disable_Rimjobs_Help_SP;
			return RemYanflyOptions_Disable_Rimjobs_Help_EN;
		}, configurable: true
	},
	yanflyOptionsDisableFootjob: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Disable_Footjobs_JP;
			else if(this.isEnglish) return RemYanflyOptions_Disable_Footjobs_EN;
			else if(this.isRussian) return RemYanflyOptions_Disable_Footjobs_RU;
			else if(this.isSChinese) return RemYanflyOptions_Disable_Footjobs_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Disable_Footjobs_TCH;
			else if(this.isKorean) return RemYanflyOptions_Disable_Footjobs_KR;
			else if(this.isSpanish) return RemYanflyOptions_Disable_Footjobs_SP;
			return RemYanflyOptions_Disable_Footjobs_EN;
		}, configurable: true
	},
	yanflyOptionsDisableFootjobHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Disable_Footjobs_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Disable_Footjobs_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_Disable_Footjobs_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_Disable_Footjobs_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Disable_Footjobs_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_Disable_Footjobs_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_Disable_Footjobs_Help_SP;
			return RemYanflyOptions_Disable_Footjobs_Help_EN;
		}, configurable: true
	},

	yanflyOptionsDisableSmegma: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Disable_Smegma_JP;
			else if(this.isEnglish) return RemYanflyOptions_Disable_Smegma_EN;
			else if(this.isRussian) return RemYanflyOptions_Disable_Smegma_RU;
			else if(this.isSChinese) return RemYanflyOptions_Disable_Smegma_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Disable_Smegma_TCH;
			else if(this.isKorean) return RemYanflyOptions_Disable_Smegma_KR;
			else if(this.isSpanish) return RemYanflyOptions_Disable_Smegma_SP;
			return RemYanflyOptions_Disable_Smegma_EN;
		}, configurable: true
	},
	yanflyOptionsDisableSmegmaHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Disable_Smegma_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Disable_Smegma_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_Disable_Smegma_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_Disable_Smegma_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Disable_Smegma_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_Disable_Smegma_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_Disable_Smegma_Help_SP;
			return RemYanflyOptions_Disable_Smegma_Help_EN;
		}, configurable: true
	},
	yanflyOptionsDisableFeraMouth: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Disable_FeraMouth_JP;
			else if(this.isEnglish) return RemYanflyOptions_Disable_FeraMouth_EN;
			else if(this.isRussian) return RemYanflyOptions_Disable_FeraMouth_RU;
			else if(this.isSChinese) return RemYanflyOptions_Disable_FeraMouth_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Disable_FeraMouth_TCH;
			else if(this.isKorean) return RemYanflyOptions_Disable_FeraMouth_KR;
			else if(this.isSpanish) return RemYanflyOptions_Disable_FeraMouth_SP;
			return RemYanflyOptions_Disable_FeraMouth_EN;
		}, configurable: true
	},
	yanflyOptionsDisableFeraMouthHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Disable_FeraMouth_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Disable_FeraMouth_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_Disable_FeraMouth_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_Disable_FeraMouth_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Disable_FeraMouth_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_Disable_FeraMouth_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_Disable_FeraMouth_Help_SP;
			return RemYanflyOptions_Disable_FeraMouth_Help_EN;
		}, configurable: true
	},



	yanflyOptionsDisplayPleasureAsPercent: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_DisplayPleasureAsPercent_JP;
			else if(this.isEnglish) return RemYanflyOptions_DisplayPleasureAsPercent_EN;
			else if(this.isRussian) return RemYanflyOptions_DisplayPleasureAsPercent_RU;
			else if(this.isSChinese) return RemYanflyOptions_DisplayPleasureAsPercent_SCH;
			else if(this.isTChinese) return RemYanflyOptions_DisplayPleasureAsPercent_TCH;
			else if(this.isKorean) return RemYanflyOptions_DisplayPleasureAsPercent_KR;
			else if(this.isSpanish) return RemYanflyOptions_DisplayPleasureAsPercent_SP;
			return RemYanflyOptions_DisplayPleasureAsPercent_EN;
		}, configurable: true
	},
	yanflyOptionsDisplayPleasureAsPercentHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_DisplayPleasureAsPercent_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_DisplayPleasureAsPercent_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_DisplayPleasureAsPercent_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_DisplayPleasureAsPercent_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_DisplayPleasureAsPercent_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_DisplayPleasureAsPercent_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_DisplayPleasureAsPercent_Help_SP;
			return RemYanflyOptions_DisplayPleasureAsPercent_Help_EN;
		}, configurable: true
	},


	yanflyOptionsShorterDefeatBattles: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_ShorterDefeatBattles_JP;
			else if(this.isEnglish) return RemYanflyOptions_ShorterDefeatBattles_EN;
			else if(this.isRussian) return RemYanflyOptions_ShorterDefeatBattles_RU;
			else if(this.isSChinese) return RemYanflyOptions_ShorterDefeatBattles_SCH;
			else if(this.isTChinese) return RemYanflyOptions_ShorterDefeatBattles_TCH;
			else if(this.isKorean) return RemYanflyOptions_ShorterDefeatBattles_KR;
			else if(this.isSpanish) return RemYanflyOptions_ShorterDefeatBattles_SP;
			return RemYanflyOptions_ShorterDefeatBattles_EN;
		}, configurable: true
	},
	yanflyOptionsShorterDefeatBattlesHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_ShorterDefeatBattles_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_ShorterDefeatBattles_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_ShorterDefeatBattles_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_ShorterDefeatBattles_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_ShorterDefeatBattles_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_ShorterDefeatBattles_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_ShorterDefeatBattles_Help_SP;
			return RemYanflyOptions_ShorterDefeatBattles_Help_EN;
		}, configurable: true
	},



	yanflyOptionsMasterVolume: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_MasterVolume_JP;
			else if(this.isEnglish) return RemYanflyOptions_MasterVolume_EN;
			else if(this.isRussian) return RemYanflyOptions_MasterVolume_RU;
			else if(this.isSChinese) return RemYanflyOptions_MasterVolume_SCH;
			else if(this.isTChinese) return RemYanflyOptions_MasterVolume_TCH;
			else if(this.isKorean) return RemYanflyOptions_MasterVolume_KR;
			else if(this.isSpanish) return RemYanflyOptions_MasterVolume_SP;
			return RemYanflyOptions_MasterVolume_EN;
		}, configurable: true
	},
	yanflyOptionsMasterVolumeHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_MasterVolume_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_MasterVolume_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_MasterVolume_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_MasterVolume_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_MasterVolume_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_MasterVolume_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_MasterVolume_Help_SP;
			return RemYanflyOptions_MasterVolume_Help_EN;
		}, configurable: true
	},
	yanflyOptionsBGMVolume: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_BGMVolume_JP;
			else if(this.isEnglish) return RemYanflyOptions_BGMVolume_EN;
			else if(this.isRussian) return RemYanflyOptions_BGMVolume_RU;
			else if(this.isSChinese) return RemYanflyOptions_BGMVolume_SCH;
			else if(this.isTChinese) return RemYanflyOptions_BGMVolume_TCH;
			else if(this.isKorean) return RemYanflyOptions_BGMVolume_KR;
			else if(this.isSpanish) return RemYanflyOptions_BGMVolume_SP;
			return RemYanflyOptions_BGMVolume_EN;
		}, configurable: true
	},
	yanflyOptionsBGMVolumeHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_BGMVolume_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_BGMVolume_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_BGMVolume_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_BGMVolume_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_BGMVolume_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_BGMVolume_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_BGMVolume_Help_SP;
			return RemYanflyOptions_BGMVolume_Help_EN;
		}, configurable: true
	},
	yanflyOptionsBGSVolume: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_BGSVolume_JP;
			else if(this.isEnglish) return RemYanflyOptions_BGSVolume_EN;
			else if(this.isRussian) return RemYanflyOptions_BGSVolume_RU;
			else if(this.isSChinese) return RemYanflyOptions_BGSVolume_SCH;
			else if(this.isTChinese) return RemYanflyOptions_BGSVolume_TCH;
			else if(this.isKorean) return RemYanflyOptions_BGSVolume_KR;
			else if(this.isSpanish) return RemYanflyOptions_BGSVolume_SP;
			return RemYanflyOptions_BGSVolume_EN;
		}, configurable: true
	},
	yanflyOptionsBGSVolumeHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_BGSVolume_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_BGSVolume_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_BGSVolume_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_BGSVolume_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_BGSVolume_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_BGSVolume_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_BGSVolume_Help_SP;
			return RemYanflyOptions_BGSVolume_Help_EN;
		}, configurable: true
	},
	yanflyOptionsMEVolume: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_MEVolume_JP;
			else if(this.isEnglish) return RemYanflyOptions_MEVolume_EN;
			else if(this.isRussian) return RemYanflyOptions_MEVolume_RU;
			else if(this.isSChinese) return RemYanflyOptions_MEVolume_SCH;
			else if(this.isTChinese) return RemYanflyOptions_MEVolume_TCH;
			else if(this.isKorean) return RemYanflyOptions_MEVolume_KR;
			else if(this.isSpanish) return RemYanflyOptions_MEVolume_SP;
			return RemYanflyOptions_MEVolume_EN;
		}, configurable: true
	},
	yanflyOptionsMEVolumeHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_MEVolume_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_MEVolume_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_MEVolume_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_MEVolume_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_MEVolume_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_MEVolume_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_MEVolume_Help_SP;
			return RemYanflyOptions_MEVolume_Help_EN;
		}, configurable: true
	},
	yanflyOptionsSEVolume: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_SEVolume_JP;
			else if(this.isEnglish) return RemYanflyOptions_SEVolume_EN;
			else if(this.isRussian) return RemYanflyOptions_SEVolume_RU;
			else if(this.isSChinese) return RemYanflyOptions_SEVolume_SCH;
			else if(this.isTChinese) return RemYanflyOptions_SEVolume_TCH;
			else if(this.isKorean) return RemYanflyOptions_SEVolume_KR;
			else if(this.isSpanish) return RemYanflyOptions_SEVolume_SP;
			return RemYanflyOptions_SEVolume_EN;
		}, configurable: true
	},
	yanflyOptionsSEVolumeHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_SEVolume_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_SEVolume_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_SEVolume_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_SEVolume_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_SEVolume_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_SEVolume_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_SEVolume_Help_SP;
			return RemYanflyOptions_SEVolume_Help_EN;
		}, configurable: true
	},
	yanflyOptionsVoiceVolume: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_VoiceVolume_JP;
			else if(this.isEnglish) return RemYanflyOptions_VoiceVolume_EN;
			else if(this.isRussian) return RemYanflyOptions_VoiceVolume_RU;
			else if(this.isSChinese) return RemYanflyOptions_VoiceVolume_SCH;
			else if(this.isTChinese) return RemYanflyOptions_VoiceVolume_TCH;
			else if(this.isKorean) return RemYanflyOptions_VoiceVolume_KR;
			else if(this.isSpanish) return RemYanflyOptions_VoiceVolume_SP;
			return RemYanflyOptions_VoiceVolume_EN;
		}, configurable: true
	},
	yanflyOptionsVoiceVolumeHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_VoiceVolume_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_VoiceVolume_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_VoiceVolume_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_VoiceVolume_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_VoiceVolume_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_VoiceVolume_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_VoiceVolume_Help_SP;
			return RemYanflyOptions_VoiceVolume_Help_EN;
		}, configurable: true
	},
	yanflyOptionsMoansVolume: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_MoansVolume_JP;
			else if(this.isEnglish) return RemYanflyOptions_MoansVolume_EN;
			else if(this.isRussian) return RemYanflyOptions_MoansVolume_RU;
			else if(this.isSChinese) return RemYanflyOptions_MoansVolume_SCH;
			else if(this.isTChinese) return RemYanflyOptions_MoansVolume_TCH;
			else if(this.isKorean) return RemYanflyOptions_MoansVolume_KR;
			else if(this.isSpanish) return RemYanflyOptions_MoansVolume_SP;
			return RemYanflyOptions_MoansVolume_EN;
		}, configurable: true
	},
	yanflyOptionsMoansVolumeHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_MoansVolume_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_MoansVolume_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_MoansVolume_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_MoansVolume_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_MoansVolume_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_MoansVolume_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_MoansVolume_Help_SP;
			return RemYanflyOptions_MoansVolume_Help_EN;
		}, configurable: true
	},
	yanflyOptionsMaleVolume: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_MaleVolume_JP;
			else if(this.isEnglish) return RemYanflyOptions_MaleVolume_EN;
			else if(this.isRussian) return RemYanflyOptions_MaleVolume_RU;
			else if(this.isSChinese) return RemYanflyOptions_MaleVolume_SCH;
			else if(this.isTChinese) return RemYanflyOptions_MaleVolume_TCH;
			else if(this.isKorean) return RemYanflyOptions_MaleVolume_KR;
			else if(this.isSpanish) return RemYanflyOptions_MaleVolume_SP;
			return RemYanflyOptions_MaleVolume_EN;
		}, configurable: true
	},
	yanflyOptionsMaleVolumeHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_MaleVolume_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_MaleVolume_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_MaleVolume_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_MaleVolume_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_MaleVolume_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_MaleVolume_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_MaleVolume_Help_SP;
			return RemYanflyOptions_MaleVolume_Help_EN;
		}, configurable: true
	},
	yanflyOptionsKeepVoicePlayback: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_KeepVoicePlayback_JP;
			else if(this.isEnglish) return RemYanflyOptions_KeepVoicePlayback_EN;
			else if(this.isRussian) return RemYanflyOptions_KeepVoicePlayback_RU;
			else if(this.isSChinese) return RemYanflyOptions_KeepVoicePlayback_SCH;
			else if(this.isTChinese) return RemYanflyOptions_KeepVoicePlayback_TCH;
			else if(this.isKorean) return RemYanflyOptions_KeepVoicePlayback_KR;
			else if(this.isSpanish) return RemYanflyOptions_KeepVoicePlayback_SP;
			return RemYanflyOptions_KeepVoicePlayback_EN;
		}, configurable: true
	},
	yanflyOptionsKeepVoicePlaybackHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_KeepVoicePlayback_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_KeepVoicePlayback_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_KeepVoicePlayback_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_KeepVoicePlayback_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_KeepVoicePlayback_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_KeepVoicePlayback_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_KeepVoicePlayback_Help_SP;
			return RemYanflyOptions_KeepVoicePlayback_Help_EN;
		}, configurable: true
	},
	yanflyOptionsAutoContinueAfterVoice: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_AutoContinueAfterVoice_JP;
			else if(this.isEnglish) return RemYanflyOptions_AutoContinueAfterVoice_EN;
			else if(this.isRussian) return RemYanflyOptions_AutoContinueAfterVoice_RU;
			else if(this.isSChinese) return RemYanflyOptions_AutoContinueAfterVoice_SCH;
			else if(this.isTChinese) return RemYanflyOptions_AutoContinueAfterVoice_TCH;
			else if(this.isKorean) return RemYanflyOptions_AutoContinueAfterVoice_KR;
			else if(this.isSpanish) return RemYanflyOptions_AutoContinueAfterVoice_SP;
			return RemYanflyOptions_AutoContinueAfterVoice_EN;
		}, configurable: true
	},
	yanflyOptionsAutoContinueAfterVoiceHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_AutoContinueAfterVoice_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_AutoContinueAfterVoice_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_AutoContinueAfterVoice_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_AutoContinueAfterVoice_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_AutoContinueAfterVoice_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_AutoContinueAfterVoice_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_AutoContinueAfterVoice_Help_SP;
			return RemYanflyOptions_AutoContinueAfterVoice_Help_EN;
		}, configurable: true
	},




	yanflyOptionsWindowToneRed: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_WindowToneRed_JP;
			else if(this.isEnglish) return RemYanflyOptions_WindowToneRed_EN;
			else if(this.isRussian) return RemYanflyOptions_WindowToneRed_RU;
			else if(this.isSChinese) return RemYanflyOptions_WindowToneRed_SCH;
			else if(this.isTChinese) return RemYanflyOptions_WindowToneRed_TCH;
			else if(this.isKorean) return RemYanflyOptions_WindowToneRed_KR;
			else if(this.isSpanish) return RemYanflyOptions_WindowToneRed_SP;
			return RemYanflyOptions_WindowToneRed_EN;
		}, configurable: true
	},
	yanflyOptionsWindowToneRedHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_WindowToneRed_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_WindowToneRed_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_WindowToneRed_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_WindowToneRed_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_WindowToneRed_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_WindowToneRed_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_WindowToneRed_Help_SP;
			return RemYanflyOptions_WindowToneRed_Help_EN;
		}, configurable: true
	},
	yanflyOptionsWindowToneGreen: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_WindowToneGreen_JP;
			else if(this.isEnglish) return RemYanflyOptions_WindowToneGreen_EN;
			else if(this.isRussian) return RemYanflyOptions_WindowToneGreen_RU;
			else if(this.isSChinese) return RemYanflyOptions_WindowToneGreen_SCH;
			else if(this.isTChinese) return RemYanflyOptions_WindowToneGreen_TCH;
			else if(this.isKorean) return RemYanflyOptions_WindowToneGreen_KR;
			else if(this.isSpanish) return RemYanflyOptions_WindowToneGreen_SP;
			return RemYanflyOptions_WindowToneGreen_EN;
		}, configurable: true
	},
	yanflyOptionsWindowToneGreenHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_WindowToneGreen_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_WindowToneGreen_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_WindowToneGreen_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_WindowToneGreen_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_WindowToneGreen_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_WindowToneGreen_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_WindowToneGreen_Help_SP;
			return RemYanflyOptions_WindowToneGreen_Help_EN;
		}, configurable: true
	},
	yanflyOptionsWindowToneBlue: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_WindowToneBlue_JP;
			else if(this.isEnglish) return RemYanflyOptions_WindowToneBlue_EN;
			else if(this.isRussian) return RemYanflyOptions_WindowToneBlue_RU;
			else if(this.isSChinese) return RemYanflyOptions_WindowToneBlue_SCH;
			else if(this.isTChinese) return RemYanflyOptions_WindowToneBlue_TCH;
			else if(this.isKorean) return RemYanflyOptions_WindowToneBlue_KR;
			else if(this.isSpanish) return RemYanflyOptions_WindowToneBlue_SP;
			return RemYanflyOptions_WindowToneBlue_EN;
		}, configurable: true
	},
	yanflyOptionsWindowToneBlueHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_WindowToneBlue_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_WindowToneBlue_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_WindowToneBlue_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_WindowToneBlue_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_WindowToneBlue_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_WindowToneBlue_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_WindowToneBlue_Help_SP;
			return RemYanflyOptions_WindowToneBlue_Help_EN;
		}, configurable: true
	},
	yanflyOptionsSynchFPS: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_SynchFPS_JP;
			else if(this.isEnglish) return RemYanflyOptions_SynchFPS_EN;
			else if(this.isRussian) return RemYanflyOptions_SynchFPS_RU;
			else if(this.isSChinese) return RemYanflyOptions_SynchFPS_SCH;
			else if(this.isTChinese) return RemYanflyOptions_SynchFPS_TCH;
			else if(this.isKorean) return RemYanflyOptions_SynchFPS_KR;
			else if(this.isSpanish) return RemYanflyOptions_SynchFPS_SP;
			return RemYanflyOptions_SynchFPS_EN;
		}, configurable: true
	},
	yanflyOptionsSynchFPSHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_SynchFPS_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_SynchFPS_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_SynchFPS_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_SynchFPS_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_SynchFPS_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_SynchFPS_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_SynchFPS_Help_SP;
			return RemYanflyOptions_SynchFPS_Help_EN;
		}, configurable: true
	},
	yanflyOptionsLightingEffects: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_LightingEffects_JP;
			else if(this.isEnglish) return RemYanflyOptions_LightingEffects_EN;
			else if(this.isRussian) return RemYanflyOptions_LightingEffects_RU;
			else if(this.isSChinese) return RemYanflyOptions_LightingEffects_SCH;
			else if(this.isTChinese) return RemYanflyOptions_LightingEffects_TCH;
			else if(this.isKorean) return RemYanflyOptions_LightingEffects_KR;
			else if(this.isSpanish) return RemYanflyOptions_LightingEffects_SP;
			return RemYanflyOptions_LightingEffects_EN;
		}, configurable: true
	},
	yanflyOptionsLightingEffectsHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_LightingEffects_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_LightingEffects_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_LightingEffects_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_LightingEffects_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_LightingEffects_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_LightingEffects_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_LightingEffects_Help_SP;
			return RemYanflyOptions_LightingEffects_Help_EN;
		}, configurable: true
	},
	yanflyOptionsMapEffects: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_MapEffects_JP;
			else if(this.isEnglish) return RemYanflyOptions_MapEffects_EN;
			else if(this.isRussian) return RemYanflyOptions_MapEffects_RU;
			else if(this.isSChinese) return RemYanflyOptions_MapEffects_SCH;
			else if(this.isTChinese) return RemYanflyOptions_MapEffects_TCH;
			else if(this.isKorean) return RemYanflyOptions_MapEffects_KR;
			else if(this.isSpanish) return RemYanflyOptions_MapEffects_SP;
			return RemYanflyOptions_MapEffects_EN;
		}, configurable: true
	},
	yanflyOptionsMapEffectsHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_MapEffects_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_MapEffects_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_MapEffects_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_MapEffects_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_MapEffects_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_MapEffects_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_MapEffects_Help_SP;
			return RemYanflyOptions_MapEffects_Help_EN;
		}, configurable: true
	},
	yanflyOptionsDisableFlashing: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_DisableFlashing_JP;
			else if(this.isEnglish) return RemYanflyOptions_DisableFlashing_EN;
			else if(this.isRussian) return RemYanflyOptions_DisableFlashing_RU;
			else if(this.isSChinese) return RemYanflyOptions_DisableFlashing_SCH;
			else if(this.isTChinese) return RemYanflyOptions_DisableFlashing_TCH;
			else if(this.isKorean) return RemYanflyOptions_DisableFlashing_KR;
			else if(this.isSpanish) return RemYanflyOptions_DisableFlashing_SP;
			return RemYanflyOptions_DisableFlashing_EN;
		}, configurable: true
	},
	yanflyOptionsDisableFlashingHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_DisableFlashing_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_DisableFlashing_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_DisableFlashing_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_DisableFlashing_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_DisableFlashing_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_DisableFlashing_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_DisableFlashing_Help_SP;
			return RemYanflyOptions_DisableFlashing_Help_EN;
		}, configurable: true
	},


	yanflyOptionsDisplayPubicHair: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_DisplayPubicHair_JP;
			else if(this.isEnglish) return RemYanflyOptions_DisplayPubicHair_EN;
			else if(this.isRussian) return RemYanflyOptions_DisplayPubicHair_RU;
			else if(this.isSChinese) return RemYanflyOptions_DisplayPubicHair_SCH;
			else if(this.isTChinese) return RemYanflyOptions_DisplayPubicHair_TCH;
			else if(this.isKorean) return RemYanflyOptions_DisplayPubicHair_KR;
			else if(this.isSpanish) return RemYanflyOptions_DisplayPubicHair_SP;
			return RemYanflyOptions_DisplayPubicHair_EN;
		}, configurable: true
	},
	yanflyOptionsDisplayPubicHairHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_DisplayPubicHair_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_DisplayPubicHair_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_DisplayPubicHair_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_DisplayPubicHair_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_DisplayPubicHair_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_DisplayPubicHair_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_DisplayPubicHair_Help_SP;
			return RemYanflyOptions_DisplayPubicHair_Help_EN;
		}, configurable: true
	},


	yanflyOptionsShowSexualDamagePopup: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_ShowSexualDamagePopup_JP;
			else if(this.isEnglish) return RemYanflyOptions_ShowSexualDamagePopup_EN;
			else if(this.isRussian) return RemYanflyOptions_ShowSexualDamagePopup_RU;
			else if(this.isSChinese) return RemYanflyOptions_ShowSexualDamagePopup_SCH;
			else if(this.isTChinese) return RemYanflyOptions_ShowSexualDamagePopup_TCH;
			else if(this.isKorean) return RemYanflyOptions_ShowSexualDamagePopup_KR;
			else if(this.isSpanish) return RemYanflyOptions_ShowSexualDamagePopup_SP;
			return RemYanflyOptions_ShowSexualDamagePopup_EN;
		}, configurable: true
	},
	yanflyOptionsShowSexualDamagePopupHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_ShowSexualDamagePopup_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_ShowSexualDamagePopup_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_ShowSexualDamagePopup_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_ShowSexualDamagePopup_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_ShowSexualDamagePopup_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_ShowSexualDamagePopup_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_ShowSexualDamagePopup_Help_SP;
			return RemYanflyOptions_ShowSexualDamagePopup_Help_EN;
		}, configurable: true
	},

	yanflyOptionsEdictsOutlineColorObtainable: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_EdictsOutlineColor_Obtainable_JP;
			else if(this.isEnglish) return RemYanflyOptions_EdictsOutlineColor_Obtainable_EN;
			else if(this.isRussian) return RemYanflyOptions_EdictsOutlineColor_Obtainable_RU;
			else if(this.isSChinese) return RemYanflyOptions_EdictsOutlineColor_Obtainable_SCH;
			else if(this.isTChinese) return RemYanflyOptions_EdictsOutlineColor_Obtainable_TCH;
			else if(this.isKorean) return RemYanflyOptions_EdictsOutlineColor_Obtainable_KR;
			else if(this.isSpanish) return RemYanflyOptions_EdictsOutlineColor_Obtainable_SP;
			return RemYanflyOptions_EdictsOutlineColor_Obtainable_EN;
		}, configurable: true
	},
	yanflyOptionsEdictsOutlineColorObtainableHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_EdictsOutlineColor_Obtainable_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_EdictsOutlineColor_Obtainable_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_EdictsOutlineColor_Obtainable_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_EdictsOutlineColor_Obtainable_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_EdictsOutlineColor_Obtainable_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_EdictsOutlineColor_Obtainable_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_EdictsOutlineColor_Obtainable_Help_SP;
			return RemYanflyOptions_EdictsOutlineColor_Obtainable_Help_EN;
		}, configurable: true
	},
	yanflyOptionsEdictsOutlineColorMeetReq: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_EdictsOutlineColor_MeetReq_JP;
			else if(this.isEnglish) return RemYanflyOptions_EdictsOutlineColor_MeetReq_EN;
			else if(this.isRussian) return RemYanflyOptions_EdictsOutlineColor_MeetReq_RU;
			else if(this.isSChinese) return RemYanflyOptions_EdictsOutlineColor_MeetReq_SCH;
			else if(this.isTChinese) return RemYanflyOptions_EdictsOutlineColor_MeetReq_TCH;
			else if(this.isKorean) return RemYanflyOptions_EdictsOutlineColor_MeetReq_KR;
			else if(this.isSpanish) return RemYanflyOptions_EdictsOutlineColor_MeetReq_SP;
			return RemYanflyOptions_EdictsOutlineColor_MeetReq_EN;
		}, configurable: true
	},
	yanflyOptionsEdictsOutlineColorMeetReqHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_EdictsOutlineColor_MeetReq_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_EdictsOutlineColor_MeetReq_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_EdictsOutlineColor_MeetReq_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_EdictsOutlineColor_MeetReq_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_EdictsOutlineColor_MeetReq_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_EdictsOutlineColor_MeetReq_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_EdictsOutlineColor_MeetReq_Help_SP;
			return RemYanflyOptions_EdictsOutlineColor_MeetReq_Help_EN;
		}, configurable: true
	},
	yanflyOptionsEdictsOutlineColorNoReq: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_EdictsOutlineColor_NoReq_JP;
			else if(this.isEnglish) return RemYanflyOptions_EdictsOutlineColor_NoReq_EN;
			else if(this.isRussian) return RemYanflyOptions_EdictsOutlineColor_NoReq_RU;
			else if(this.isSChinese) return RemYanflyOptions_EdictsOutlineColor_NoReq_SCH;
			else if(this.isTChinese) return RemYanflyOptions_EdictsOutlineColor_NoReq_TCH;
			else if(this.isKorean) return RemYanflyOptions_EdictsOutlineColor_NoReq_KR;
			else if(this.isSpanish) return RemYanflyOptions_EdictsOutlineColor_NoReq_SP;
			return RemYanflyOptions_EdictsOutlineColor_NoReq_EN;
		}, configurable: true
	},
	yanflyOptionsEdictsOutlineColorNoReqHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_EdictsOutlineColor_NoReq_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_EdictsOutlineColor_NoReq_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_EdictsOutlineColor_NoReq_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_EdictsOutlineColor_NoReq_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_EdictsOutlineColor_NoReq_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_EdictsOutlineColor_NoReq_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_EdictsOutlineColor_NoReq_Help_SP;
			return RemYanflyOptions_EdictsOutlineColor_NoReq_Help_EN;
		}, configurable: true
	},

	yanflyOptionsGamepadControl: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_GamepadControl_JP;
			else if(this.isEnglish) return RemYanflyOptions_GamepadControl_EN;
			else if(this.isRussian) return RemYanflyOptions_GamepadControl_RU;
			else if(this.isSChinese) return RemYanflyOptions_GamepadControl_SCH;
			else if(this.isTChinese) return RemYanflyOptions_GamepadControl_TCH;
			else if(this.isKorean) return RemYanflyOptions_GamepadControl_KR;
			else if(this.isSpanish) return RemYanflyOptions_GamepadControl_SP;
			return RemYanflyOptions_GamepadControl_EN;
		}, configurable: true
	},
	yanflyOptionsGamepadControlHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_GamepadControl_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_GamepadControl_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_GamepadControl_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_GamepadControl_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_GamepadControl_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_GamepadControl_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_GamepadControl_Help_SP;
			return RemYanflyOptions_GamepadControl_Help_EN;
		}, configurable: true
	},
	yanflyOptionsKeyboardControl: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_KeyboardControl_JP;
			else if(this.isEnglish) return RemYanflyOptions_KeyboardControl_EN;
			else if(this.isRussian) return RemYanflyOptions_KeyboardControl_RU;
			else if(this.isSChinese) return RemYanflyOptions_KeyboardControl_SCH;
			else if(this.isTChinese) return RemYanflyOptions_KeyboardControl_TCH;
			else if(this.isKorean) return RemYanflyOptions_KeyboardControl_KR;
			else if(this.isSpanish) return RemYanflyOptions_KeyboardControl_SP;
			return RemYanflyOptions_KeyboardControl_EN;
		}, configurable: true
	},
	yanflyOptionsKeyboardControlHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_KeyboardControl_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_KeyboardControl_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_KeyboardControl_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_KeyboardControl_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_KeyboardControl_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_KeyboardControl_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_KeyboardControl_Help_SP;
			return RemYanflyOptions_KeyboardControl_Help_EN;
		}, configurable: true
	},

	yanflyOptionsGamepadButtonName: {
		get: function() {
			if(this.isJapanese) return RemYanflyGamepadButtonNameJP;
			else if(this.isEnglish) return RemYanflyGamepadButtonNameEN;
			else if(this.isRussian) return RemYanflyGamepadButtonNameRU;
			else if(this.isSChinese) return RemYanflyGamepadButtonNameSCH;
			else if(this.isTChinese) return RemYanflyGamepadButtonNameTCH;
			else if(this.isKorean) return RemYanflyGamepadButtonNameKR;
			else if(this.isSpanish) return RemYanflyGamepadButtonNameSP;
			return RemYanflyGamepadButtonNameEN;
		}, configurable: true
	},
	yanflyOptionsOkButtonName: {
		get: function() {
			if(this.isJapanese) return RemYanflyGamepadOkButtonNameJP;
			else if(this.isEnglish) return RemYanflyGamepadOkButtonNameEN;
			else if(this.isRussian) return RemYanflyGamepadOkButtonNameRU;
			else if(this.isSChinese) return RemYanflyGamepadOkButtonNameSCH;
			else if(this.isTChinese) return RemYanflyGamepadOkButtonNameTCH;
			else if(this.isKorean) return RemYanflyGamepadOkButtonNameKR;
			else if(this.isSpanish) return RemYanflyGamepadOkButtonNameSP;
			return RemYanflyGamepadOkButtonNameEN;
		}, configurable: true
	},
	yanflyOptionsOkButtonHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyGamepadOkButtonHelpJP;
			else if(this.isEnglish) return RemYanflyGamepadOkButtonHelpEN;
			else if(this.isRussian) return RemYanflyGamepadOkButtonHelpRU;
			else if(this.isSChinese) return RemYanflyGamepadOkButtonHelpSCH;
			else if(this.isTChinese) return RemYanflyGamepadOkButtonHelpTCH;
			else if(this.isKorean) return RemYanflyGamepadOkButtonHelpKR;
			else if(this.isSpanish) return RemYanflyGamepadOkButtonHelpSP;
			return RemYanflyGamepadOkButtonHelpEN;
		}, configurable: true
	},
	yanflyOptionsCancelButtonName: {
		get: function() {
			if(this.isJapanese) return RemYanflyGamepadCancelButtonNameJP;
			else if(this.isEnglish) return RemYanflyGamepadCancelButtonNameEN;
			else if(this.isRussian) return RemYanflyGamepadCancelButtonNameRU;
			else if(this.isSChinese) return RemYanflyGamepadCancelButtonNameSCH;
			else if(this.isTChinese) return RemYanflyGamepadCancelButtonNameTCH;
			else if(this.isKorean) return RemYanflyGamepadCancelButtonNameKR;
			else if(this.isSpanish) return RemYanflyGamepadCancelButtonNameSP;
			return RemYanflyGamepadCancelButtonNameEN;
		}, configurable: true
	},
	yanflyOptionsCancelButtonHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyGamepadCancelButtonHelpJP;
			else if(this.isEnglish) return RemYanflyGamepadCancelButtonHelpEN;
			else if(this.isRussian) return RemYanflyGamepadCancelButtonHelpRU;
			else if(this.isSChinese) return RemYanflyGamepadCancelButtonHelpSCH;
			else if(this.isTChinese) return RemYanflyGamepadCancelButtonHelpTCH;
			else if(this.isKorean) return RemYanflyGamepadCancelButtonHelpKR;
			else if(this.isSpanish) return RemYanflyGamepadCancelButtonHelpSP;
			return RemYanflyGamepadCancelButtonHelpEN;
		}, configurable: true
	},
	yanflyOptionsShiftButtonName: {
		get: function() {
			if(this.isJapanese) return RemYanflyGamepadShiftButtonNameJP;
			else if(this.isEnglish) return RemYanflyGamepadShiftButtonNameEN;
			else if(this.isRussian) return RemYanflyGamepadShiftButtonNameRU;
			else if(this.isSChinese) return RemYanflyGamepadShiftButtonNameSCH;
			else if(this.isTChinese) return RemYanflyGamepadShiftButtonNameTCH;
			else if(this.isKorean) return RemYanflyGamepadShiftButtonNameKR;
			else if(this.isSpanish) return RemYanflyGamepadShiftButtonNameSP;
			return RemYanflyGamepadShiftButtonNameEN;
		}, configurable: true
	},
	yanflyOptionsShiftButtonHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyGamepadShiftButtonHelpJP;
			else if(this.isEnglish) return RemYanflyGamepadShiftButtonHelpEN;
			else if(this.isRussian) return RemYanflyGamepadShiftButtonHelpRU;
			else if(this.isSChinese) return RemYanflyGamepadShiftButtonHelpSCH;
			else if(this.isTChinese) return RemYanflyGamepadShiftButtonHelpTCH;
			else if(this.isKorean) return RemYanflyGamepadShiftButtonHelpKR;
			else if(this.isSpanish) return RemYanflyGamepadShiftButtonHelpSP;
			return RemYanflyGamepadShiftButtonHelpEN;
		}, configurable: true
	},
	yanflyOptionsMenuButtonName: {
		get: function() {
			if(this.isJapanese) return RemYanflyGamepadMenuButtonNameJP;
			else if(this.isEnglish) return RemYanflyGamepadMenuButtonNameEN;
			else if(this.isRussian) return RemYanflyGamepadMenuButtonNameRU;
			else if(this.isSChinese) return RemYanflyGamepadMenuButtonNameSCH;
			else if(this.isTChinese) return RemYanflyGamepadMenuButtonNameTCH;
			else if(this.isKorean) return RemYanflyGamepadMenuButtonNameKR;
			else if(this.isSpanish) return RemYanflyGamepadMenuButtonNameSP;
			return RemYanflyGamepadMenuButtonNameEN;
		}, configurable: true
	},
	yanflyOptionsMenuButtonHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyGamepadMenuButtonHelpJP;
			else if(this.isEnglish) return RemYanflyGamepadMenuButtonHelpEN;
			else if(this.isRussian) return RemYanflyGamepadMenuButtonHelpRU;
			else if(this.isSChinese) return RemYanflyGamepadMenuButtonHelpSCH;
			else if(this.isTChinese) return RemYanflyGamepadMenuButtonHelpTCH;
			else if(this.isKorean) return RemYanflyGamepadMenuButtonHelpKR;
			else if(this.isSpanish) return RemYanflyGamepadMenuButtonHelpSP;
			return RemYanflyGamepadMenuButtonHelpEN;
		}, configurable: true
	},
	yanflyOptionsPageUpButtonName: {
		get: function() {
			if(this.isJapanese) return RemYanflyGamepadPageUpButtonNameJP;
			else if(this.isEnglish) return RemYanflyGamepadPageUpButtonNameEN;
			else if(this.isRussian) return RemYanflyGamepadPageUpButtonNameRU;
			else if(this.isSChinese) return RemYanflyGamepadPageUpButtonNameSCH;
			else if(this.isTChinese) return RemYanflyGamepadPageUpButtonNameTCH;
			else if(this.isKorean) return RemYanflyGamepadPageUpButtonNameKR;
			else if(this.isSpanish) return RemYanflyGamepadPageUpButtonNameSP;
			return RemYanflyGamepadPageUpButtonNameEN;
		}, configurable: true
	},
	yanflyOptionsPageUpButtonHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyGamepadPageUpButtonHelpJP;
			else if(this.isEnglish) return RemYanflyGamepadPageUpButtonHelpEN;
			else if(this.isRussian) return RemYanflyGamepadPageUpButtonHelpRU;
			else if(this.isSChinese) return RemYanflyGamepadPageUpButtonHelpSCH;
			else if(this.isTChinese) return RemYanflyGamepadPageUpButtonHelpTCH;
			else if(this.isKorean) return RemYanflyGamepadPageUpButtonHelpKR;
			else if(this.isSpanish) return RemYanflyGamepadPageUpButtonHelpSP;
			return RemYanflyGamepadPageUpButtonHelpEN;
		}, configurable: true
	},
	yanflyOptionsPageDownButtonName: {
		get: function() {
			if(this.isJapanese) return RemYanflyGamepadPageDownButtonNameJP;
			else if(this.isEnglish) return RemYanflyGamepadPageDownButtonNameEN;
			else if(this.isRussian) return RemYanflyGamepadPageDownButtonNameRU;
			else if(this.isSChinese) return RemYanflyGamepadPageDownButtonNameSCH;
			else if(this.isTChinese) return RemYanflyGamepadPageDownButtonNameTCH;
			else if(this.isKorean) return RemYanflyGamepadPageDownButtonNameKR;
			else if(this.isSpanish) return RemYanflyGamepadPageDownButtonNameSP;
			return RemYanflyGamepadPageDownButtonNameEN;
		}, configurable: true
	},
	yanflyOptionsPageDownButtonHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyGamepadPageDownButtonHelpJP;
			else if(this.isEnglish) return RemYanflyGamepadPageDownButtonHelpEN;
			else if(this.isRussian) return RemYanflyGamepadPageDownButtonHelpRU;
			else if(this.isSChinese) return RemYanflyGamepadPageDownButtonHelpSCH;
			else if(this.isTChinese) return RemYanflyGamepadPageDownButtonHelpTCH;
			else if(this.isKorean) return RemYanflyGamepadPageDownButtonHelpKR;
			else if(this.isSpanish) return RemYanflyGamepadPageDownButtonHelpSP;
			return RemYanflyGamepadPageDownButtonHelpEN;
		}, configurable: true
	},
	yanflyOptionsResetDefaultName: {
		get: function() {
			if(this.isJapanese) return RemYanflyGamepadResetDefaultNameJP;
			else if(this.isEnglish) return RemYanflyGamepadResetDefaultNameEN;
			else if(this.isRussian) return RemYanflyGamepadResetDefaultNameRU;
			else if(this.isSChinese) return RemYanflyGamepadResetDefaultNameSCH;
			else if(this.isTChinese) return RemYanflyGamepadResetDefaultNameTCH;
			else if(this.isKorean) return RemYanflyGamepadResetDefaultNameKR;
			else if(this.isSpanish) return RemYanflyGamepadResetDefaultNameSP;
			return RemYanflyGamepadResetDefaultNameEN;
		}, configurable: true
	},
	yanflyOptionsResetDefaultHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyGamepadResetDefaultHelpJP;
			else if(this.isEnglish) return RemYanflyGamepadResetDefaultHelpEN;
			else if(this.isRussian) return RemYanflyGamepadResetDefaultHelpRU;
			else if(this.isSChinese) return RemYanflyGamepadResetDefaultHelpSCH;
			else if(this.isTChinese) return RemYanflyGamepadResetDefaultHelpTCH;
			else if(this.isKorean) return RemYanflyGamepadResetDefaultHelpKR;
			else if(this.isSpanish) return RemYanflyGamepadResetDefaultHelpSP;
			return RemYanflyGamepadResetDefaultHelpEN;
		}, configurable: true
	},
	yanflyOptionsFinishConfigName: {
		get: function() {
			if(this.isJapanese) return RemYanflyGamepadFinishConfigNameJP;
			else if(this.isEnglish) return RemYanflyGamepadFinishConfigNameEN;
			else if(this.isRussian) return RemYanflyGamepadFinishConfigNameRU;
			else if(this.isSChinese) return RemYanflyGamepadFinishConfigNameSCH;
			else if(this.isTChinese) return RemYanflyGamepadFinishConfigNameTCH;
			else if(this.isKorean) return RemYanflyGamepadFinishConfigNameKR;
			else if(this.isSpanish) return RemYanflyGamepadFinishConfigNameSP;
			return RemYanflyGamepadFinishConfigNameEN;
		}, configurable: true
	},
	yanflyOptionsFinishConfigHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyGamepadFinishConfigHelpJP;
			else if(this.isEnglish) return RemYanflyGamepadFinishConfigHelpEN;
			else if(this.isRussian) return RemYanflyGamepadFinishConfigHelpRU;
			else if(this.isSChinese) return RemYanflyGamepadFinishConfigHelpSCH;
			else if(this.isTChinese) return RemYanflyGamepadFinishConfigHelpTCH;
			else if(this.isKorean) return RemYanflyGamepadFinishConfigHelpKR;
			else if(this.isSpanish) return RemYanflyGamepadFinishConfigHelpSP;
			return RemYanflyGamepadFinishConfigHelpEN;
		}, configurable: true
	},
	yanflyKeyboardHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyKeyboardHelpJP;
			else if(this.isEnglish) return RemYanflyKeyboardHelpEN;
			else if(this.isRussian) return RemYanflyKeyboardHelpRU;
			else if(this.isSChinese) return RemYanflyKeyboardHelpSCH;
			else if(this.isTChinese) return RemYanflyKeyboardHelpTCH;
			else if(this.isKorean) return RemYanflyKeyboardHelpKR;
			else if(this.isSpanish) return RemYanflyKeyboardHelpSP;
			return RemYanflyKeyboardHelpEN;
		}, configurable: true
	},
	yanflyKeyboardDefaultLayoutText: {
		get: function() {
			if(this.isJapanese) return RemYanflyKeyboardDefaultLayoutTextJP;
			else if(this.isEnglish) return RemYanflyKeyboardDefaultLayoutTextEN;
			else if(this.isRussian) return RemYanflyKeyboardDefaultLayoutTextRU;
			else if(this.isSChinese) return RemYanflyKeyboardDefaultLayoutTextSCH;
			else if(this.isTChinese) return RemYanflyKeyboardDefaultLayoutTextTCH;
			else if(this.isKorean) return RemYanflyKeyboardDefaultLayoutTextKR;
			else if(this.isSpanish) return RemYanflyKeyboardDefaultLayoutTextSP;
			return RemYanflyKeyboardDefaultLayoutTextEN;
		}, configurable: true
	},
	yanflyKeyboardDefaultLayoutHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyKeyboardDefaultLayoutHelpJP;
			else if(this.isEnglish) return RemYanflyKeyboardDefaultLayoutHelpEN;
			else if(this.isRussian) return RemYanflyKeyboardDefaultLayoutHelpRU;
			else if(this.isSChinese) return RemYanflyKeyboardDefaultLayoutHelpSCH;
			else if(this.isTChinese) return RemYanflyKeyboardDefaultLayoutHelpTCH;
			else if(this.isKorean) return RemYanflyKeyboardDefaultLayoutHelpKR;
			else if(this.isSpanish) return RemYanflyKeyboardDefaultLayoutHelpSP;
			return RemYanflyKeyboardDefaultLayoutHelpEN;
		}, configurable: true
	},
	yanflyKeyboardWASDText: {
		get: function() {
			if(this.isJapanese) return RemYanflyKeyboardWASDTextJP;
			else if(this.isEnglish) return RemYanflyKeyboardWASDTextEN;
			else if(this.isRussian) return RemYanflyKeyboardWASDTextRU;
			else if(this.isSChinese) return RemYanflyKeyboardWASDTextSCH;
			else if(this.isTChinese) return RemYanflyKeyboardWASDTextTCH;
			else if(this.isKorean) return RemYanflyKeyboardWASDTextKR;
			else if(this.isSpanish) return RemYanflyKeyboardWASDTextSP;
			return RemYanflyKeyboardWASDTextEN;
		}, configurable: true
	},
	yanflyKeyboardWASDHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyKeyboardWASDHelpJP;
			else if(this.isEnglish) return RemYanflyKeyboardWASDHelpEN;
			else if(this.isRussian) return RemYanflyKeyboardWASDHelpRU;
			else if(this.isSChinese) return RemYanflyKeyboardWASDHelpSCH;
			else if(this.isTChinese) return RemYanflyKeyboardWASDHelpTCH;
			else if(this.isKorean) return RemYanflyKeyboardWASDHelpKR;
			else if(this.isSpanish) return RemYanflyKeyboardWASDHelpSP;
			return RemYanflyKeyboardWASDHelpEN;
		}, configurable: true
	},
	yanflyKeyboardFinishConfigText: {
		get: function() {
			if(this.isJapanese) return RemYanflyKeyboardFinishConfigTextJP;
			else if(this.isEnglish) return RemYanflyKeyboardFinishConfigTextEN;
			else if(this.isRussian) return RemYanflyKeyboardFinishConfigTextRU;
			else if(this.isSChinese) return RemYanflyKeyboardFinishConfigTextSCH;
			else if(this.isTChinese) return RemYanflyKeyboardFinishConfigTextTCH;
			else if(this.isKorean) return RemYanflyKeyboardFinishConfigTextKR;
			else if(this.isSpanish) return RemYanflyKeyboardFinishConfigTextSP;
			return RemYanflyKeyboardFinishConfigTextEN;
		}, configurable: true
	},
	yanflyKeyboardFinishConfigHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflyKeyboardFinishConfigHelpJP;
			else if(this.isEnglish) return RemYanflyKeyboardFinishConfigHelpEN;
			else if(this.isRussian) return RemYanflyKeyboardFinishConfigHelpRU;
			else if(this.isSChinese) return RemYanflyKeyboardFinishConfigHelpSCH;
			else if(this.isTChinese) return RemYanflyKeyboardFinishConfigHelpTCH;
			else if(this.isKorean) return RemYanflyKeyboardFinishConfigHelpKR;
			else if(this.isSpanish) return RemYanflyKeyboardFinishConfigHelpSP;
			return RemYanflyKeyboardFinishConfigHelpEN;
		}, configurable: true
	},
	yanflyKeyboardClearText: {
		get: function() {
			if(this.isJapanese) return RemYanflyKeyboardClearTextJP;
			else if(this.isEnglish) return RemYanflyKeyboardClearTextEN;
			else if(this.isRussian) return RemYanflyKeyboardClearTextRU;
			else if(this.isSChinese) return RemYanflyKeyboardClearTextSCH;
			else if(this.isTChinese) return RemYanflyKeyboardClearTextTCH;
			else if(this.isKorean) return RemYanflyKeyboardClearTextKR;
			else if(this.isSpanish) return RemYanflyKeyboardClearTextSP;
			return RemYanflyKeyboardClearTextEN;
		}, configurable: true
	},
	yanflyKeyboardOKKey: {
		get: function() {
			if(this.isJapanese) return RemYanflyKeyboardOKKeyJP;
			else if(this.isEnglish) return RemYanflyKeyboardOKKeyEN;
			else if(this.isRussian) return RemYanflyKeyboardOKKeyRU;
			else if(this.isSChinese) return RemYanflyKeyboardOKKeySCH;
			else if(this.isTChinese) return RemYanflyKeyboardOKKeyTCH;
			else if(this.isKorean) return RemYanflyKeyboardOKKeyKR;
			else if(this.isSpanish) return RemYanflyKeyboardOKKeySP;
			return RemYanflyKeyboardOKKeyEN;
		}, configurable: true
	},
	yanflyKeyboardOKText: {
		get: function() {
			if(this.isJapanese) return RemYanflyKeyboardOKTextJP;
			else if(this.isEnglish) return RemYanflyKeyboardOKTextEN;
			else if(this.isRussian) return RemYanflyKeyboardOKTextRU;
			else if(this.isSChinese) return RemYanflyKeyboardOKTextSCH;
			else if(this.isTChinese) return RemYanflyKeyboardOKTextTCH;
			else if(this.isKorean) return RemYanflyKeyboardOKTextKR;
			else if(this.isSpanish) return RemYanflyKeyboardOKTextSP;
			return RemYanflyKeyboardOKTextEN;
		}, configurable: true
	},
	yanflyKeyboardEscapeKey: {
		get: function() {
			if(this.isJapanese) return RemYanflyKeyboardEscapeKeyJP;
			else if(this.isEnglish) return RemYanflyKeyboardEscapeKeyEN;
			else if(this.isRussian) return RemYanflyKeyboardEscapeKeyRU;
			else if(this.isSChinese) return RemYanflyKeyboardEscapeKeySCH;
			else if(this.isTChinese) return RemYanflyKeyboardEscapeKeyTCH;
			else if(this.isKorean) return RemYanflyKeyboardEscapeKeyKR;
			else if(this.isSpanish) return RemYanflyKeyboardEscapeKeySP;
			return RemYanflyKeyboardEscapeKeyEN;
		}, configurable: true
	},
	yanflyKeyboardEscapeText: {
		get: function() {
			if(this.isJapanese) return RemYanflyKeyboardEscapeTextJP;
			else if(this.isEnglish) return RemYanflyKeyboardEscapeTextEN;
			else if(this.isRussian) return RemYanflyKeyboardEscapeTextRU;
			else if(this.isSChinese) return RemYanflyKeyboardEscapeTextSCH;
			else if(this.isTChinese) return RemYanflyKeyboardEscapeTextTCH;
			else if(this.isKorean) return RemYanflyKeyboardEscapeTextKR;
			else if(this.isSpanish) return RemYanflyKeyboardEscapeTextSP;
			return RemYanflyKeyboardEscapeTextEN;
		}, configurable: true
	},
	yanflyKeyboardCancelKey: {
		get: function() {
			if(this.isJapanese) return RemYanflyKeyboardCancelKeyJP;
			else if(this.isEnglish) return RemYanflyKeyboardCancelKeyEN;
			else if(this.isRussian) return RemYanflyKeyboardCancelKeyRU;
			else if(this.isSChinese) return RemYanflyKeyboardCancelKeySCH;
			else if(this.isTChinese) return RemYanflyKeyboardCancelKeyTCH;
			else if(this.isKorean) return RemYanflyKeyboardCancelKeyKR;
			else if(this.isSpanish) return RemYanflyKeyboardCancelKeySP;
			return RemYanflyKeyboardCancelKeyEN;
		}, configurable: true
	},
	yanflyKeyboardCancelText: {
		get: function() {
			if(this.isJapanese) return RemYanflyKeyboardCancelTextJP;
			else if(this.isEnglish) return RemYanflyKeyboardCancelTextEN;
			else if(this.isRussian) return RemYanflyKeyboardCancelTextRU;
			else if(this.isSChinese) return RemYanflyKeyboardCancelTextSCH;
			else if(this.isTChinese) return RemYanflyKeyboardCancelTextTCH;
			else if(this.isKorean) return RemYanflyKeyboardCancelTextKR;
			else if(this.isSpanish) return RemYanflyKeyboardCancelTextSP;
			return RemYanflyKeyboardCancelTextEN;
		}, configurable: true
	},
	yanflyKeyboardMenuKey: {
		get: function() {
			if(this.isJapanese) return RemYanflyKeyboardMenuKeyJP;
			else if(this.isEnglish) return RemYanflyKeyboardMenuKeyEN;
			else if(this.isRussian) return RemYanflyKeyboardMenuKeyRU;
			else if(this.isSChinese) return RemYanflyKeyboardMenuKeySCH;
			else if(this.isTChinese) return RemYanflyKeyboardMenuKeyTCH;
			else if(this.isKorean) return RemYanflyKeyboardMenuKeyKR;
			else if(this.isSpanish) return RemYanflyKeyboardMenuKeySP;
			return RemYanflyKeyboardMenuKeyEN;
		}, configurable: true
	},
	yanflyKeyboardMenuText: {
		get: function() {
			if(this.isJapanese) return RemYanflyKeyboardMenuTextJP;
			else if(this.isEnglish) return RemYanflyKeyboardMenuTextEN;
			else if(this.isRussian) return RemYanflyKeyboardMenuTextRU;
			else if(this.isSChinese) return RemYanflyKeyboardMenuTextSCH;
			else if(this.isTChinese) return RemYanflyKeyboardMenuTextTCH;
			else if(this.isKorean) return RemYanflyKeyboardMenuTextKR;
			else if(this.isSpanish) return RemYanflyKeyboardMenuTextSP;
			return RemYanflyKeyboardMenuTextEN;
		}, configurable: true
	},
	yanflyKeyboardShiftKey: {
		get: function() {
			if(this.isJapanese) return RemYanflyKeyboardShiftKeyJP;
			else if(this.isEnglish) return RemYanflyKeyboardShiftKeyEN;
			else if(this.isRussian) return RemYanflyKeyboardShiftKeyRU;
			else if(this.isSChinese) return RemYanflyKeyboardShiftKeySCH;
			else if(this.isTChinese) return RemYanflyKeyboardShiftKeyTCH;
			else if(this.isKorean) return RemYanflyKeyboardShiftKeyKR;
			else if(this.isSpanish) return RemYanflyKeyboardShiftKeySP;
			return RemYanflyKeyboardShiftKeyEN;
		}, configurable: true
	},
	yanflyKeyboardShiftText: {
		get: function() {
			if(this.isJapanese) return RemYanflyKeyboardShiftTextJP;
			else if(this.isEnglish) return RemYanflyKeyboardShiftTextEN;
			else if(this.isRussian) return RemYanflyKeyboardShiftTextRU;
			else if(this.isSChinese) return RemYanflyKeyboardShiftTextSCH;
			else if(this.isTChinese) return RemYanflyKeyboardShiftTextTCH;
			else if(this.isKorean) return RemYanflyKeyboardShiftTextKR;
			else if(this.isSpanish) return RemYanflyKeyboardShiftTextSP;
			return RemYanflyKeyboardShiftTextEN;
		}, configurable: true
	},
	yanflyKeyboardPageUpKey: {
		get: function() {
			if(this.isJapanese) return RemYanflyKeyboardPageUpKeyJP;
			else if(this.isEnglish) return RemYanflyKeyboardPageUpKeyEN;
			else if(this.isRussian) return RemYanflyKeyboardPageUpKeyRU;
			else if(this.isSChinese) return RemYanflyKeyboardPageUpKeySCH;
			else if(this.isTChinese) return RemYanflyKeyboardPageUpKeyTCH;
			else if(this.isKorean) return RemYanflyKeyboardPageUpKeyKR;
			else if(this.isSpanish) return RemYanflyKeyboardPageUpKeySP;
			return RemYanflyKeyboardPageUpKeyEN;
		}, configurable: true
	},
	yanflyKeyboardPageUpText: {
		get: function() {
			if(this.isJapanese) return RemYanflyKeyboardPageUpTextJP;
			else if(this.isEnglish) return RemYanflyKeyboardPageUpTextEN;
			else if(this.isRussian) return RemYanflyKeyboardPageUpTextRU;
			else if(this.isSChinese) return RemYanflyKeyboardPageUpTextSCH;
			else if(this.isTChinese) return RemYanflyKeyboardPageUpTextTCH;
			else if(this.isKorean) return RemYanflyKeyboardPageUpTextKR;
			else if(this.isSpanish) return RemYanflyKeyboardPageUpTextSP;
			return RemYanflyKeyboardPageUpTextEN;
		}, configurable: true
	},
	yanflyKeyboardPageDownKey: {
		get: function() {
			if(this.isJapanese) return RemYanflyKeyboardPageDownKeyJP;
			else if(this.isEnglish) return RemYanflyKeyboardPageDownKeyEN;
			else if(this.isRussian) return RemYanflyKeyboardPageDownKeyRU;
			else if(this.isSChinese) return RemYanflyKeyboardPageDownKeySCH;
			else if(this.isTChinese) return RemYanflyKeyboardPageDownKeyTCH;
			else if(this.isKorean) return RemYanflyKeyboardPageDownKeyKR;
			else if(this.isSpanish) return RemYanflyKeyboardPageDownKeySP;
			return RemYanflyKeyboardPageDownKeyEN;
		}, configurable: true
	},
	yanflyKeyboardPageDownText: {
		get: function() {
			if(this.isJapanese) return RemYanflyKeyboardPageDownTextJP;
			else if(this.isEnglish) return RemYanflyKeyboardPageDownTextEN;
			else if(this.isRussian) return RemYanflyKeyboardPageDownTextRU;
			else if(this.isSChinese) return RemYanflyKeyboardPageDownTextSCH;
			else if(this.isTChinese) return RemYanflyKeyboardPageDownTextTCH;
			else if(this.isKorean) return RemYanflyKeyboardPageDownTextKR;
			else if(this.isSpanish) return RemYanflyKeyboardPageDownTextSP;
			return RemYanflyKeyboardPageDownTextEN;
		}, configurable: true
	},
	yanflyKeyboardLeftKey: {
		get: function() {
			if(this.isJapanese) return RemYanflyKeyboardLeftKeyJP;
			else if(this.isEnglish) return RemYanflyKeyboardLeftKeyEN;
			else if(this.isRussian) return RemYanflyKeyboardLeftKeyRU;
			else if(this.isSChinese) return RemYanflyKeyboardLeftKeySCH;
			else if(this.isTChinese) return RemYanflyKeyboardLeftKeyTCH;
			else if(this.isKorean) return RemYanflyKeyboardLeftKeyKR;
			else if(this.isSpanish) return RemYanflyKeyboardLeftKeySP;
			return RemYanflyKeyboardLeftKeyEN;
		}, configurable: true
	},
	yanflyKeyboardLeftText: {
		get: function() {
			if(this.isJapanese) return RemYanflyKeyboardLeftTextJP;
			else if(this.isEnglish) return RemYanflyKeyboardLeftTextEN;
			else if(this.isRussian) return RemYanflyKeyboardLeftTextRU;
			else if(this.isSChinese) return RemYanflyKeyboardLeftTextSCH;
			else if(this.isTChinese) return RemYanflyKeyboardLeftTextTCH;
			else if(this.isKorean) return RemYanflyKeyboardLeftTextKR;
			else if(this.isSpanish) return RemYanflyKeyboardLeftTextSP;
			return RemYanflyKeyboardLeftTextEN;
		}, configurable: true
	},
	yanflyKeyboardUpKey: {
		get: function() {
			if(this.isJapanese) return RemYanflyKeyboardUpKeyJP;
			else if(this.isEnglish) return RemYanflyKeyboardUpKeyEN;
			else if(this.isRussian) return RemYanflyKeyboardUpKeyRU;
			else if(this.isSChinese) return RemYanflyKeyboardUpKeySCH;
			else if(this.isTChinese) return RemYanflyKeyboardUpKeyTCH;
			else if(this.isKorean) return RemYanflyKeyboardUpKeyKR;
			else if(this.isSpanish) return RemYanflyKeyboardUpKeySP;
			return RemYanflyKeyboardUpKeyEN;
		}, configurable: true
	},
	yanflyKeyboardUpText: {
		get: function() {
			if(this.isJapanese) return RemYanflyKeyboardUpTextJP;
			else if(this.isEnglish) return RemYanflyKeyboardUpTextEN;
			else if(this.isRussian) return RemYanflyKeyboardUpTextRU;
			else if(this.isSChinese) return RemYanflyKeyboardUpTextSCH;
			else if(this.isTChinese) return RemYanflyKeyboardUpTextTCH;
			else if(this.isKorean) return RemYanflyKeyboardUpTextKR;
			else if(this.isSpanish) return RemYanflyKeyboardUpTextSP;
			return RemYanflyKeyboardUpTextEN;
		}, configurable: true
	},
	yanflyKeyboardRightKey: {
		get: function() {
			if(this.isJapanese) return RemYanflyKeyboardRightKeyJP;
			else if(this.isEnglish) return RemYanflyKeyboardRightKeyEN;
			else if(this.isRussian) return RemYanflyKeyboardRightKeyRU;
			else if(this.isSChinese) return RemYanflyKeyboardRightKeySCH;
			else if(this.isTChinese) return RemYanflyKeyboardRightKeyTCH;
			else if(this.isKorean) return RemYanflyKeyboardRightKeyKR;
			else if(this.isSpanish) return RemYanflyKeyboardRightKeySP;
			return RemYanflyKeyboardRightKeyEN;
		}, configurable: true
	},
	yanflyKeyboardRightText: {
		get: function() {
			if(this.isJapanese) return RemYanflyKeyboardRightTextJP;
			else if(this.isEnglish) return RemYanflyKeyboardRightTextEN;
			else if(this.isRussian) return RemYanflyKeyboardRightTextRU;
			else if(this.isSChinese) return RemYanflyKeyboardRightTextSCH;
			else if(this.isTChinese) return RemYanflyKeyboardRightTextTCH;
			else if(this.isKorean) return RemYanflyKeyboardRightTextKR;
			else if(this.isSpanish) return RemYanflyKeyboardRightTextSP;
			return RemYanflyKeyboardRightTextEN;
		}, configurable: true
	},
	yanflyKeyboardDownKey: {
		get: function() {
			if(this.isJapanese) return RemYanflyKeyboardDownKeyJP;
			else if(this.isEnglish) return RemYanflyKeyboardDownKeyEN;
			else if(this.isRussian) return RemYanflyKeyboardDownKeyRU;
			else if(this.isSChinese) return RemYanflyKeyboardDownKeySCH;
			else if(this.isTChinese) return RemYanflyKeyboardDownKeyTCH;
			else if(this.isKorean) return RemYanflyKeyboardDownKeyKR;
			else if(this.isSpanish) return RemYanflyKeyboardDownKeySP;
			return RemYanflyKeyboardDownKeyEN;
		}, configurable: true
	},
	yanflyKeyboardDownText: {
		get: function() {
			if(this.isJapanese) return RemYanflyKeyboardDownTextJP;
			else if(this.isEnglish) return RemYanflyKeyboardDownTextEN;
			else if(this.isRussian) return RemYanflyKeyboardDownTextRU;
			else if(this.isSChinese) return RemYanflyKeyboardDownTextSCH;
			else if(this.isTChinese) return RemYanflyKeyboardDownTextTCH;
			else if(this.isKorean) return RemYanflyKeyboardDownTextKR;
			else if(this.isSpanish) return RemYanflyKeyboardDownTextSP;
			return RemYanflyKeyboardDownTextEN;
		}, configurable: true
	},


	RemYanflyOptions_Cheats_ActorDoublePassiveGain: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Cheats_ActorDoublePassiveGain_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_ActorDoublePassiveGain_EN;
			else if(this.isRussian) return RemYanflyOptions_Cheats_ActorDoublePassiveGain_RU;
			else if(this.isSChinese) return RemYanflyOptions_Cheats_ActorDoublePassiveGain_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Cheats_ActorDoublePassiveGain_TCH;
			else if(this.isKorean) return RemYanflyOptions_Cheats_ActorDoublePassiveGain_KR;
			else if(this.isSpanish) return RemYanflyOptions_Cheats_ActorDoublePassiveGain_SP;
			return RemYanflyOptions_Cheats_ActorDoublePassiveGain_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_ActorDoublePassiveGain_Help: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Cheats_ActorDoublePassiveGain_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_ActorDoublePassiveGain_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_Cheats_ActorDoublePassiveGain_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_Cheats_ActorDoublePassiveGain_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Cheats_ActorDoublePassiveGain_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_Cheats_ActorDoublePassiveGain_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_Cheats_ActorDoublePassiveGain_Help_SP;
			return RemYanflyOptions_Cheats_ActorDoublePassiveGain_Help_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_ActorNoPassiveGain: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Cheats_ActorNoPassiveGain_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_ActorNoPassiveGain_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_Cheats_ActorNoPassiveGain_RU;
					else if(this.isSChinese) return RemYanflyOptions_Cheats_ActorNoPassiveGain_SCH;
					else if(this.isTChinese) return RemYanflyOptions_Cheats_ActorNoPassiveGain_TCH;
					else if(this.isKorean) return RemYanflyOptions_Cheats_ActorNoPassiveGain_KR;
					else if(this.isSpanish) return RemYanflyOptions_Cheats_ActorNoPassiveGain_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_Cheats_ActorNoPassiveGain_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_ActorNoPassiveGain_Help: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Cheats_ActorNoPassiveGain_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_ActorNoPassiveGain_Help_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_Cheats_ActorNoPassiveGain_Help_RU;
					else if(this.isSChinese) return RemYanflyOptions_Cheats_ActorNoPassiveGain_Help_SCH;
					else if(this.isTChinese) return RemYanflyOptions_Cheats_ActorNoPassiveGain_Help_TCH;
					else if(this.isKorean) return RemYanflyOptions_Cheats_ActorNoPassiveGain_Help_KR;
					else if(this.isSpanish) return RemYanflyOptions_Cheats_ActorNoPassiveGain_Help_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_Cheats_ActorNoPassiveGain_Help_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_EnemyDoublePhysicalDamage: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Cheats_EnemyDoublePhysicalDamage_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_EnemyDoublePhysicalDamage_EN;
			else if(this.isRussian) return RemYanflyOptions_Cheats_EnemyDoublePhysicalDamage_RU;
			else if(this.isSChinese) return RemYanflyOptions_Cheats_EnemyDoublePhysicalDamage_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Cheats_EnemyDoublePhysicalDamage_TCH;
			else if(this.isKorean) return RemYanflyOptions_Cheats_EnemyDoublePhysicalDamage_KR;
			else if(this.isSpanish) return RemYanflyOptions_Cheats_EnemyDoublePhysicalDamage_SP;
			return RemYanflyOptions_Cheats_EnemyDoublePhysicalDamage_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_EnemyDoublePhysicalDamage_Help: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Cheats_EnemyDoublePhysicalDamage_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_EnemyDoublePhysicalDamage_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_Cheats_EnemyDoublePhysicalDamage_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_Cheats_EnemyDoublePhysicalDamage_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Cheats_EnemyDoublePhysicalDamage_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_Cheats_EnemyDoublePhysicalDamage_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_Cheats_EnemyDoublePhysicalDamage_Help_SP;
			return RemYanflyOptions_Cheats_EnemyDoublePhysicalDamage_Help_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_EnemyTriplePhysicalDamage: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Cheats_EnemyTriplePhysicalDamage_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_EnemyTriplePhysicalDamage_EN;
			else if(this.isRussian) return RemYanflyOptions_Cheats_EnemyTriplePhysicalDamage_RU;
			else if(this.isSChinese) return RemYanflyOptions_Cheats_EnemyTriplePhysicalDamage_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Cheats_EnemyTriplePhysicalDamage_TCH;
			else if(this.isKorean) return RemYanflyOptions_Cheats_EnemyTriplePhysicalDamage_KR;
			else if(this.isSpanish) return RemYanflyOptions_Cheats_EnemyTriplePhysicalDamage_SP;
			return RemYanflyOptions_Cheats_EnemyTriplePhysicalDamage_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_EnemyTriplePhysicalDamage_Help: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Cheats_EnemyTriplePhysicalDamage_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_EnemyTriplePhysicalDamage_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_Cheats_EnemyTriplePhysicalDamage_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_Cheats_EnemyTriplePhysicalDamage_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Cheats_EnemyTriplePhysicalDamage_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_Cheats_EnemyTriplePhysicalDamage_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_Cheats_EnemyTriplePhysicalDamage_Help_SP;
			return RemYanflyOptions_Cheats_EnemyTriplePhysicalDamage_Help_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_EnemyDoubleSexualDamage: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Cheats_EnemyDoubleSexualDamage_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_EnemyDoubleSexualDamage_EN;
			else if(this.isRussian) return RemYanflyOptions_Cheats_EnemyDoubleSexualDamage_RU;
			else if(this.isSChinese) return RemYanflyOptions_Cheats_EnemyDoubleSexualDamage_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Cheats_EnemyDoubleSexualDamage_TCH;
			else if(this.isKorean) return RemYanflyOptions_Cheats_EnemyDoubleSexualDamage_KR;
			else if(this.isSpanish) return RemYanflyOptions_Cheats_EnemyDoubleSexualDamage_SP;
			return RemYanflyOptions_Cheats_EnemyDoubleSexualDamage_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_EnemyDoubleSexualDamage_Help: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Cheats_EnemyDoubleSexualDamage_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_EnemyDoubleSexualDamage_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_Cheats_EnemyDoubleSexualDamage_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_Cheats_EnemyDoubleSexualDamage_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Cheats_EnemyDoubleSexualDamage_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_Cheats_EnemyDoubleSexualDamage_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_Cheats_EnemyDoubleSexualDamage_Help_SP;
			return RemYanflyOptions_Cheats_EnemyDoubleSexualDamage_Help_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_EnemyTripleSexualDamage: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Cheats_EnemyTripleSexualDamage_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_EnemyTripleSexualDamage_EN;
			else if(this.isRussian) return RemYanflyOptions_Cheats_EnemyTripleSexualDamage_RU;
			else if(this.isSChinese) return RemYanflyOptions_Cheats_EnemyTripleSexualDamage_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Cheats_EnemyTripleSexualDamage_TCH;
			else if(this.isKorean) return RemYanflyOptions_Cheats_EnemyTripleSexualDamage_KR;
			else if(this.isSpanish) return RemYanflyOptions_Cheats_EnemyTripleSexualDamage_SP;
			return RemYanflyOptions_Cheats_EnemyTripleSexualDamage_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_EnemyTripleSexualDamage_Help: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Cheats_EnemyTripleSexualDamage_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_EnemyTripleSexualDamage_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_Cheats_EnemyTripleSexualDamage_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_Cheats_EnemyTripleSexualDamage_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Cheats_EnemyTripleSexualDamage_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_Cheats_EnemyTripleSexualDamage_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_Cheats_EnemyTripleSexualDamage_Help_SP;
			return RemYanflyOptions_Cheats_EnemyTripleSexualDamage_Help_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_EnemyDoubleOrgasmPoint: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Cheats_EnemyDoubleOrgasmPoint_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_EnemyDoubleOrgasmPoint_EN;
			else if(this.isRussian) return RemYanflyOptions_Cheats_EnemyDoubleOrgasmPoint_RU;
			else if(this.isSChinese) return RemYanflyOptions_Cheats_EnemyDoubleOrgasmPoint_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Cheats_EnemyDoubleOrgasmPoint_TCH;
			else if(this.isKorean) return RemYanflyOptions_Cheats_EnemyDoubleOrgasmPoint_KR;
			else if(this.isSpanish) return RemYanflyOptions_Cheats_EnemyDoubleOrgasmPoint_SP;
			return RemYanflyOptions_Cheats_EnemyDoubleOrgasmPoint_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_EnemyDoubleOrgasmPoint_Help: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Cheats_EnemyDoubleOrgasmPoint_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_EnemyDoubleOrgasmPoint_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_Cheats_EnemyDoubleOrgasmPoint_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_Cheats_EnemyDoubleOrgasmPoint_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Cheats_EnemyDoubleOrgasmPoint_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_Cheats_EnemyDoubleOrgasmPoint_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_Cheats_EnemyDoubleOrgasmPoint_Help_SP;
			return RemYanflyOptions_Cheats_EnemyDoubleOrgasmPoint_Help_EN;
		}, configurable: true
	},


	RemYanflyOptions_Cheats_EnemyAlwaysAct: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Cheats_EnemyAlwaysAct_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_EnemyAlwaysAct_EN;
			else if(this.isRussian) return RemYanflyOptions_Cheats_EnemyAlwaysAct_RU;
			else if(this.isSChinese) return RemYanflyOptions_Cheats_EnemyAlwaysAct_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Cheats_EnemyAlwaysAct_TCH;
			else if(this.isKorean) return RemYanflyOptions_Cheats_EnemyAlwaysAct_KR;
			else if(this.isSpanish) return RemYanflyOptions_Cheats_EnemyAlwaysAct_SP;
			return RemYanflyOptions_Cheats_EnemyAlwaysAct_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_EnemyAlwaysAct_Help: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Cheats_EnemyAlwaysAct_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_EnemyAlwaysAct_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_Cheats_EnemyAlwaysAct_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_Cheats_EnemyAlwaysAct_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Cheats_EnemyAlwaysAct_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_Cheats_EnemyAlwaysAct_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_Cheats_EnemyAlwaysAct_Help_SP;
			return RemYanflyOptions_Cheats_EnemyAlwaysAct_Help_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_ActorHalfStaminaRegen: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Cheats_ActorHalfStaminaRegen_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_ActorHalfStaminaRegen_EN;
			else if(this.isRussian) return RemYanflyOptions_Cheats_ActorHalfStaminaRegen_RU;
			else if(this.isSChinese) return RemYanflyOptions_Cheats_ActorHalfStaminaRegen_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Cheats_ActorHalfStaminaRegen_TCH;
			else if(this.isKorean) return RemYanflyOptions_Cheats_ActorHalfStaminaRegen_KR;
			else if(this.isSpanish) return RemYanflyOptions_Cheats_ActorHalfStaminaRegen_SP;
			return RemYanflyOptions_Cheats_ActorHalfStaminaRegen_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_ActorHalfStaminaRegen_Help: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Cheats_ActorHalfStaminaRegen_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_ActorHalfStaminaRegen_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_Cheats_ActorHalfStaminaRegen_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_Cheats_ActorHalfStaminaRegen_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Cheats_ActorHalfStaminaRegen_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_Cheats_ActorHalfStaminaRegen_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_Cheats_ActorHalfStaminaRegen_Help_SP;
			return RemYanflyOptions_Cheats_ActorHalfStaminaRegen_Help_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_ActorThirdStaminaRegen: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Cheats_ActorThirdStaminaRegen_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_ActorThirdStaminaRegen_EN;
			else if(this.isRussian) return RemYanflyOptions_Cheats_ActorThirdStaminaRegen_RU;
			else if(this.isSChinese) return RemYanflyOptions_Cheats_ActorThirdStaminaRegen_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Cheats_ActorThirdStaminaRegen_TCH;
			else if(this.isKorean) return RemYanflyOptions_Cheats_ActorThirdStaminaRegen_KR;
			else if(this.isSpanish) return RemYanflyOptions_Cheats_ActorThirdStaminaRegen_SP;
			return RemYanflyOptions_Cheats_ActorThirdStaminaRegen_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_ActorThirdStaminaRegen_Help: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Cheats_ActorThirdStaminaRegen_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_ActorThirdStaminaRegen_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_Cheats_ActorThirdStaminaRegen_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_Cheats_ActorThirdStaminaRegen_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Cheats_ActorThirdStaminaRegen_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_Cheats_ActorThirdStaminaRegen_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_Cheats_ActorThirdStaminaRegen_Help_SP;
			return RemYanflyOptions_Cheats_ActorThirdStaminaRegen_Help_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_ActorNoEvasion: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Cheats_ActorNoEvasion_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_ActorNoEvasion_EN;
			else if(this.isRussian) return RemYanflyOptions_Cheats_ActorNoEvasion_RU;
			else if(this.isSChinese) return RemYanflyOptions_Cheats_ActorNoEvasion_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Cheats_ActorNoEvasion_TCH;
			else if(this.isKorean) return RemYanflyOptions_Cheats_ActorNoEvasion_KR;
			else if(this.isSpanish) return RemYanflyOptions_Cheats_ActorNoEvasion_SP;
			return RemYanflyOptions_Cheats_ActorNoEvasion_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_ActorNoEvasion_Help: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Cheats_ActorNoEvasion_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_ActorNoEvasion_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_Cheats_ActorNoEvasion_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_Cheats_ActorNoEvasion_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Cheats_ActorNoEvasion_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_Cheats_ActorNoEvasion_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_Cheats_ActorNoEvasion_Help_SP;
			return RemYanflyOptions_Cheats_ActorNoEvasion_Help_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_ActorHalfExpRate: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Cheats_ActorHalfExpRate_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_ActorHalfExpRate_EN;
			else if(this.isRussian) return RemYanflyOptions_Cheats_ActorHalfExpRate_RU;
			else if(this.isSChinese) return RemYanflyOptions_Cheats_ActorHalfExpRate_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Cheats_ActorHalfExpRate_TCH;
			else if(this.isKorean) return RemYanflyOptions_Cheats_ActorHalfExpRate_KR;
			else if(this.isSpanish) return RemYanflyOptions_Cheats_ActorHalfExpRate_SP;
			return RemYanflyOptions_Cheats_ActorHalfExpRate_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_ActorHalfExpRate_Help: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Cheats_ActorHalfExpRate_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_ActorHalfExpRate_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_Cheats_ActorHalfExpRate_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_Cheats_ActorHalfExpRate_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Cheats_ActorHalfExpRate_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_Cheats_ActorHalfExpRate_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_Cheats_ActorHalfExpRate_Help_SP;
			return RemYanflyOptions_Cheats_ActorHalfExpRate_Help_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_LessControlFive: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Cheats_LessControlFive_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_LessControlFive_EN;
			else if(this.isRussian) return RemYanflyOptions_Cheats_LessControlFive_RU;
			else if(this.isSChinese) return RemYanflyOptions_Cheats_LessControlFive_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Cheats_LessControlFive_TCH;
			else if(this.isKorean) return RemYanflyOptions_Cheats_LessControlFive_KR;
			else if(this.isSpanish) return RemYanflyOptions_Cheats_LessControlFive_SP;
			return RemYanflyOptions_Cheats_LessControlFive_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_LessControlFive_Help: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Cheats_LessControlFive_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_LessControlFive_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_Cheats_LessControlFive_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_Cheats_LessControlFive_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Cheats_LessControlFive_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_Cheats_LessControlFive_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_Cheats_LessControlFive_Help_SP;
			return RemYanflyOptions_Cheats_LessControlFive_Help_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_LessControlTen: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Cheats_LessControlTen_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_LessControlTen_EN;
			else if(this.isRussian) return RemYanflyOptions_Cheats_LessControlTen_RU;
			else if(this.isSChinese) return RemYanflyOptions_Cheats_LessControlTen_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Cheats_LessControlTen_TCH;
			else if(this.isKorean) return RemYanflyOptions_Cheats_LessControlTen_KR;
			else if(this.isSpanish) return RemYanflyOptions_Cheats_LessControlTen_SP;
			return RemYanflyOptions_Cheats_LessControlTen_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_LessControlTen_Help: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Cheats_LessControlTen_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_LessControlTen_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_Cheats_LessControlTen_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_Cheats_LessControlTen_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Cheats_LessControlTen_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_Cheats_LessControlTen_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_Cheats_LessControlTen_Help_SP;
			return RemYanflyOptions_Cheats_LessControlTen_Help_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_InstantRiotsOne: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Cheats_InstantRiotsOne_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_InstantRiotsOne_EN;
			else if(this.isRussian) return RemYanflyOptions_Cheats_InstantRiotsOne_RU;
			else if(this.isSChinese) return RemYanflyOptions_Cheats_InstantRiotsOne_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Cheats_InstantRiotsOne_TCH;
			else if(this.isKorean) return RemYanflyOptions_Cheats_InstantRiotsOne_KR;
			else if(this.isSpanish) return RemYanflyOptions_Cheats_InstantRiotsOne_SP;
			return RemYanflyOptions_Cheats_InstantRiotsOne_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_InstantRiotsOne_Help: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Cheats_InstantRiotsOne_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_InstantRiotsOne_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_Cheats_InstantRiotsOne_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_Cheats_InstantRiotsOne_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Cheats_InstantRiotsOne_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_Cheats_InstantRiotsOne_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_Cheats_InstantRiotsOne_Help_SP;
			return RemYanflyOptions_Cheats_InstantRiotsOne_Help_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_InstantRiotsTwo: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Cheats_InstantRiotsTwo_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_InstantRiotsTwo_EN;
			else if(this.isRussian) return RemYanflyOptions_Cheats_InstantRiotsTwo_RU;
			else if(this.isSChinese) return RemYanflyOptions_Cheats_InstantRiotsTwo_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Cheats_InstantRiotsTwo_TCH;
			else if(this.isKorean) return RemYanflyOptions_Cheats_InstantRiotsTwo_KR;
			else if(this.isSpanish) return RemYanflyOptions_Cheats_InstantRiotsTwo_SP;
			return RemYanflyOptions_Cheats_InstantRiotsTwo_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_InstantRiotsTwo_Help: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Cheats_InstantRiotsTwo_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_InstantRiotsTwo_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_Cheats_InstantRiotsTwo_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_Cheats_InstantRiotsTwo_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Cheats_InstantRiotsTwo_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_Cheats_InstantRiotsTwo_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_Cheats_InstantRiotsTwo_Help_SP;
			return RemYanflyOptions_Cheats_InstantRiotsTwo_Help_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_InstantRiotsThree: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Cheats_InstantRiotsThree_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_InstantRiotsThree_EN;
			else if(this.isRussian) return RemYanflyOptions_Cheats_InstantRiotsThree_RU;
			else if(this.isSChinese) return RemYanflyOptions_Cheats_InstantRiotsThree_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Cheats_InstantRiotsThree_TCH;
			else if(this.isKorean) return RemYanflyOptions_Cheats_InstantRiotsThree_KR;
			else if(this.isSpanish) return RemYanflyOptions_Cheats_InstantRiotsThree_SP;
			return RemYanflyOptions_Cheats_InstantRiotsThree_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_InstantRiotsThree_Help: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Cheats_InstantRiotsThree_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_InstantRiotsThree_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_Cheats_InstantRiotsThree_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_Cheats_InstantRiotsThree_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Cheats_InstantRiotsThree_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_Cheats_InstantRiotsThree_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_Cheats_InstantRiotsThree_Help_SP;
			return RemYanflyOptions_Cheats_InstantRiotsThree_Help_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_InstantRiotsFour: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Cheats_InstantRiotsFour_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_InstantRiotsFour_EN;
			else if(this.isRussian) return RemYanflyOptions_Cheats_InstantRiotsFour_RU;
			else if(this.isSChinese) return RemYanflyOptions_Cheats_InstantRiotsFour_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Cheats_InstantRiotsFour_TCH;
			else if(this.isKorean) return RemYanflyOptions_Cheats_InstantRiotsFour_KR;
			else if(this.isSpanish) return RemYanflyOptions_Cheats_InstantRiotsFour_SP;
			return RemYanflyOptions_Cheats_InstantRiotsFour_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_InstantRiotsFour_Help: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Cheats_InstantRiotsFour_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_InstantRiotsFour_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_Cheats_InstantRiotsFour_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_Cheats_InstantRiotsFour_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Cheats_InstantRiotsFour_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_Cheats_InstantRiotsFour_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_Cheats_InstantRiotsFour_Help_SP;
			return RemYanflyOptions_Cheats_InstantRiotsFour_Help_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_WaitressLog: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Cheats_WaitressLog_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_WaitressLog_EN;
			else if(this.isRussian) return RemYanflyOptions_Cheats_WaitressLog_RU;
			else if(this.isSChinese) return RemYanflyOptions_Cheats_WaitressLog_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Cheats_WaitressLog_TCH;
			else if(this.isKorean) return RemYanflyOptions_Cheats_WaitressLog_KR;
			else if(this.isSpanish) return RemYanflyOptions_Cheats_WaitressLog_SP;
			return RemYanflyOptions_Cheats_WaitressLog_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_WaitressLog_Help: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Cheats_WaitressLog_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_WaitressLog_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_Cheats_WaitressLog_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_Cheats_WaitressLog_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Cheats_WaitressLog_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_Cheats_WaitressLog_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_Cheats_WaitressLog_Help_SP;
			return RemYanflyOptions_Cheats_WaitressLog_Help_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_WaitressMemory: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Cheats_WaitressMemory_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_WaitressMemory_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_Cheats_WaitressMemory_RU;
					else if(this.isSChinese) return RemYanflyOptions_Cheats_WaitressMemory_SCH;
					else if(this.isTChinese) return RemYanflyOptions_Cheats_WaitressMemory_TCH;
					else if(this.isKorean) return RemYanflyOptions_Cheats_WaitressMemory_KR;
					else if(this.isSpanish) return RemYanflyOptions_Cheats_WaitressMemory_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_Cheats_WaitressMemory_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_WaitressMemory_Help: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Cheats_WaitressMemory_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_WaitressMemory_Help_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_Cheats_WaitressMemory_Help_RU;
					else if(this.isSChinese) return RemYanflyOptions_Cheats_WaitressMemory_Help_SCH;
					else if(this.isTChinese) return RemYanflyOptions_Cheats_WaitressMemory_Help_TCH;
					else if(this.isKorean) return RemYanflyOptions_Cheats_WaitressMemory_Help_KR;
					else if(this.isSpanish) return RemYanflyOptions_Cheats_WaitressMemory_Help_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_Cheats_WaitressMemory_Help_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_NoAutoSave: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Cheats_NoAutoSave_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_NoAutoSave_EN;
			else if(this.isRussian) return RemYanflyOptions_Cheats_NoAutoSave_RU;
			else if(this.isSChinese) return RemYanflyOptions_Cheats_NoAutoSave_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Cheats_NoAutoSave_TCH;
			else if(this.isKorean) return RemYanflyOptions_Cheats_NoAutoSave_KR;
			else if(this.isSpanish) return RemYanflyOptions_Cheats_NoAutoSave_SP;
			return RemYanflyOptions_Cheats_NoAutoSave_EN;
		}, configurable: true
	},
	RemYanflyOptions_Cheats_NoAutoSave_Help: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_Cheats_NoAutoSave_Help_JP;
			else if(this.isEnglish) return RemYanflyOptions_Cheats_NoAutoSave_Help_EN;
			else if(this.isRussian) return RemYanflyOptions_Cheats_NoAutoSave_Help_RU;
			else if(this.isSChinese) return RemYanflyOptions_Cheats_NoAutoSave_Help_SCH;
			else if(this.isTChinese) return RemYanflyOptions_Cheats_NoAutoSave_Help_TCH;
			else if(this.isKorean) return RemYanflyOptions_Cheats_NoAutoSave_Help_KR;
			else if(this.isSpanish) return RemYanflyOptions_Cheats_NoAutoSave_Help_SP;
			return RemYanflyOptions_Cheats_NoAutoSave_Help_EN;
		}, configurable: true
	},


	yanflySaveYes: {
		get: function() {
			if(this.isJapanese) return RemYanflySaveYesJP;
			else if(this.isEnglish) return RemYanflySaveYesEN;
			else if(this.isRussian) return RemYanflySaveYesRU;
			else if(this.isSChinese) return RemYanflySaveYesSCH;
			else if(this.isTChinese) return RemYanflySaveYesTCH;
			else if(this.isKorean) return RemYanflySaveYesKR;
			else if(this.isSpanish) return RemYanflySaveYesSP;
			return RemYanflySaveYesEN;
		}, configurable: true
	},
	yanflySaveNo: {
		get: function() {
			if(this.isJapanese) return RemYanflySaveNoJP;
			else if(this.isEnglish) return RemYanflySaveNoEN;
			else if(this.isRussian) return RemYanflySaveNoRU;
			else if(this.isSChinese) return RemYanflySaveNoSCH;
			else if(this.isTChinese) return RemYanflySaveNoTCH;
			else if(this.isKorean) return RemYanflySaveNoKR;
			else if(this.isSpanish) return RemYanflySaveNoSP;
			return RemYanflySaveNoEN;
		}, configurable: true
	},
	yanflySaveDeleteText: {
		get: function() {
			if(this.isJapanese) return RemYanflySaveDeleteTextJP;
			else if(this.isEnglish) return RemYanflySaveDeleteTextEN;
			else if(this.isRussian) return RemYanflySaveDeleteTextRU;
			else if(this.isSChinese) return RemYanflySaveDeleteTextSCH;
			else if(this.isTChinese) return RemYanflySaveDeleteTextTCH;
			else if(this.isKorean) return RemYanflySaveDeleteTextKR;
			else if(this.isSpanish) return RemYanflySaveDeleteTextSP;
			return RemYanflySaveDeleteTextEN;
		}, configurable: true
	},
	yanflySaveSaveText: {
		get: function() {
			if(this.isJapanese) return RemYanflySaveSaveTextJP;
			else if(this.isEnglish) return RemYanflySaveSaveTextEN;
			else if(this.isRussian) return RemYanflySaveSaveTextRU;
			else if(this.isSChinese) return RemYanflySaveSaveTextSCH;
			else if(this.isTChinese) return RemYanflySaveSaveTextTCH;
			else if(this.isKorean) return RemYanflySaveSaveTextKR;
			else if(this.isSpanish) return RemYanflySaveSaveTextSP;
			return RemYanflySaveSaveTextEN;
		}, configurable: true
	},
	yanflySaveLoadText: {
		get: function() {
			if(this.isJapanese) return RemYanflySaveLoadTextJP;
			else if(this.isEnglish) return RemYanflySaveLoadTextEN;
			else if(this.isRussian) return RemYanflySaveLoadTextRU;
			else if(this.isSChinese) return RemYanflySaveLoadTextSCH;
			else if(this.isTChinese) return RemYanflySaveLoadTextTCH;
			else if(this.isKorean) return RemYanflySaveLoadTextKR;
			else if(this.isSpanish) return RemYanflySaveLoadTextSP;
			return RemYanflySaveLoadTextEN;
		}, configurable: true
	},
	yanflySaveInvalidText: {
		get: function() {
			if(this.isJapanese) return RemYanflySaveInvalidTextJP;
			else if(this.isEnglish) return RemYanflySaveInvalidTextEN;
			else if(this.isRussian) return RemYanflySaveInvalidTextRU;
			else if(this.isSChinese) return RemYanflySaveInvalidTextSCH;
			else if(this.isTChinese) return RemYanflySaveInvalidTextTCH;
			else if(this.isKorean) return RemYanflySaveInvalidTextKR;
			else if(this.isSpanish) return RemYanflySaveInvalidTextSP;
			return RemYanflySaveInvalidTextEN;
		}, configurable: true
	},
	yanflySaveEmpty: {
		get: function() {
			if(this.isJapanese) return RemYanflySaveEmptyJP;
			else if(this.isEnglish) return RemYanflySaveEmptyEN;
			else if(this.isRussian) return RemYanflySaveEmptyRU;
			else if(this.isSChinese) return RemYanflySaveEmptySCH;
			else if(this.isTChinese) return RemYanflySaveEmptyTCH;
			else if(this.isKorean) return RemYanflySaveEmptyKR;
			else if(this.isSpanish) return RemYanflySaveEmptySP;
			return RemYanflySaveEmptyEN;
		}, configurable: true
	},
	yanflySaveSelectHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflySaveSelectHelpJP;
			else if(this.isEnglish) return RemYanflySaveSelectHelpEN;
			else if(this.isRussian) return RemYanflySaveSelectHelpRU;
			else if(this.isSChinese) return RemYanflySaveSelectHelpSCH;
			else if(this.isTChinese) return RemYanflySaveSelectHelpTCH;
			else if(this.isKorean) return RemYanflySaveSelectHelpKR;
			else if(this.isSpanish) return RemYanflySaveSelectHelpSP;
			return RemYanflySaveSelectHelpEN;
		}, configurable: true
	},
	yanflySaveLoadHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflySaveLoadHelpJP;
			else if(this.isEnglish) return RemYanflySaveLoadHelpEN;
			else if(this.isRussian) return RemYanflySaveLoadHelpRU;
			else if(this.isSChinese) return RemYanflySaveLoadHelpSCH;
			else if(this.isTChinese) return RemYanflySaveLoadHelpTCH;
			else if(this.isKorean) return RemYanflySaveLoadHelpKR;
			else if(this.isSpanish) return RemYanflySaveLoadHelpSP;
			return RemYanflySaveLoadHelpEN;
		}, configurable: true
	},
	yanflySaveSaveHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflySaveSaveHelpJP;
			else if(this.isEnglish) return RemYanflySaveSaveHelpEN;
			else if(this.isRussian) return RemYanflySaveSaveHelpRU;
			else if(this.isSChinese) return RemYanflySaveSaveHelpSCH;
			else if(this.isTChinese) return RemYanflySaveSaveHelpTCH;
			else if(this.isKorean) return RemYanflySaveSaveHelpKR;
			else if(this.isSpanish) return RemYanflySaveSaveHelpSP;
			return RemYanflySaveSaveHelpEN;
		}, configurable: true
	},
	yanflySaveDeleteHelp: {
		get: function() {
			if(this.isJapanese) return RemYanflySaveDeleteHelpJP;
			else if(this.isEnglish) return RemYanflySaveDeleteHelpEN;
			else if(this.isRussian) return RemYanflySaveDeleteHelpRU;
			else if(this.isSChinese) return RemYanflySaveDeleteHelpSCH;
			else if(this.isTChinese) return RemYanflySaveDeleteHelpTCH;
			else if(this.isKorean) return RemYanflySaveDeleteHelpKR;
			else if(this.isSpanish) return RemYanflySaveDeleteHelpSP;
			return RemYanflySaveDeleteHelpEN;
		}, configurable: true
	},
	yanflyAutosaving: {
		get: function() {
			if(this.isJapanese) return RemYanflyAutosavingJP;
			else if(this.isEnglish) return RemYanflyAutosavingEN;
			else if(this.isRussian) return RemYanflyAutosavingRU;
			else if(this.isSChinese) return RemYanflyAutosavingSCH;
			else if(this.isTChinese) return RemYanflyAutosavingTCH;
			else if(this.isKorean) return RemYanflyAutosavingKR;
			else if(this.isSpanish) return RemYanflyAutosavingSP;
			return RemYanflyAutosavingEN;
		}, configurable: true
	},

	yanflySavePlaytime: {
		get: function() {
			if(this.isJapanese) return RemYanflySavePlaytimeJP;
			else if(this.isEnglish) return RemYanflySavePlaytimeEN;
			else if(this.isRussian) return RemYanflySavePlaytimeRU;
			else if(this.isSChinese) return RemYanflySavePlaytimeSCH;
			else if(this.isTChinese) return RemYanflySavePlaytimeTCH;
			else if(this.isKorean) return RemYanflySavePlaytimeKR;
			else if(this.isSpanish) return RemYanflySavePlaytimeSP;
			return RemYanflySavePlaytimeEN;
		}, configurable: true
	},
	yanflySaveTotalSaves: {
		get: function() {
			if(this.isJapanese) return RemYanflySaveTotalSavesJP;
			else if(this.isEnglish) return RemYanflySaveTotalSavesEN;
			else if(this.isRussian) return RemYanflySaveTotalSavesRU;
			else if(this.isSChinese) return RemYanflySaveTotalSavesSCH;
			else if(this.isTChinese) return RemYanflySaveTotalSavesTCH;
			else if(this.isKorean) return RemYanflySaveTotalSavesKR;
			else if(this.isSpanish) return RemYanflySaveTotalSavesSP;
			return RemYanflySaveTotalSavesEN;
		}, configurable: true
	},
	yanflySaveTotalDays: {
		get: function() {
			if(this.isJapanese) return RemYanflySaveTotalDaysJP;
			else if(this.isEnglish) return RemYanflySaveTotalDaysEN;
			else if(this.isRussian) return RemYanflySaveTotalDaysRU;
			else if(this.isSChinese) return RemYanflySaveTotalDaysSCH;
			else if(this.isTChinese) return RemYanflySaveTotalDaysTCH;
			else if(this.isKorean) return RemYanflySaveTotalDaysKR;
			else if(this.isSpanish) return RemYanflySaveTotalDaysSP;
			return RemYanflySaveTotalDaysEN;
		}, configurable: true
	},
	yanflySaveTotalPlaythroughs: {
		get: function() {
			if(this.isJapanese) return RemYanflySaveTotalPlaythroughsJP;
			else if(this.isEnglish) return RemYanflySaveTotalPlaythroughsEN;
			else if(this.isRussian) return RemYanflySaveTotalPlaythroughsRU;
			else if(this.isSChinese) return RemYanflySaveTotalPlaythroughsSCH;
			else if(this.isTChinese) return RemYanflySaveTotalPlaythroughsTCH;
			else if(this.isKorean) return RemYanflySaveTotalPlaythroughsKR;
			else if(this.isSpanish) return RemYanflySaveTotalPlaythroughsSP;
			return RemYanflySaveTotalPlaythroughsEN;
		}, configurable: true
	},
	yanflySaveTotalGameClears: {
		get: function() {
			if(this.isJapanese) return RemYanflySaveTotalGameClearsJP;
			else if(this.isEnglish) return RemYanflySaveTotalGameClearsEN;
			else if(this.isRussian) return RemYanflySaveTotalGameClearsRU;
			else if(this.isSChinese) return RemYanflySaveTotalGameClearsSCH;
			else if(this.isTChinese) return RemYanflySaveTotalGameClearsTCH;
			else if(this.isKorean) return RemYanflySaveTotalGameClearsKR;
			else if(this.isSpanish) return RemYanflySaveTotalGameClearsSP;
			return RemYanflySaveTotalGameClearsEN;
		}, configurable: true
	},

	yanflySaveTotalEndings: {
		get: function() {
			if(this.isJapanese) return RemYanflySaveTotalEndingsJP;
			else if(this.isEnglish) return RemYanflySaveTotalEndingsEN;
			else if(this.isRussian) return RemYanflySaveTotalEndingsRU;
			else if(this.isSChinese) return RemYanflySaveTotalEndingsSCH;
			else if(this.isTChinese) return RemYanflySaveTotalEndingsTCH;
			else if(this.isKorean) return RemYanflySaveTotalEndingsKR;
			else if(this.isSpanish) return RemYanflySaveTotalEndingsSP;
			return RemYanflySaveTotalEndingsEN;
		}, configurable: true
	},


	yanflyTargetEverybody: {
		get: function() {
			if(this.isJapanese) return RemYanflyTargetEverybodyJP;
			else if(this.isEnglish) return RemYanflyTargetEverybodyEN;
			else if(this.isRussian) return RemYanflyTargetEverybodyRU;
			else if(this.isSChinese) return RemYanflyTargetEverybodySCH;
			else if(this.isTChinese) return RemYanflyTargetEverybodyTCH;
			else if(this.isKorean) return RemYanflyTargetEverybodyKR;
			else if(this.isSpanish) return RemYanflyTargetEverybodySP;
			return RemYanflyTargetEverybodyEN;
		}, configurable: true
	},
	yanflyTargetMultiEverybody: {
		get: function() {
			if(this.isJapanese) return RemYanflyTargetMultiEverybodyJP;
			else if(this.isEnglish) return RemYanflyTargetMultiEverybodyEN;
			else if(this.isRussian) return RemYanflyTargetMultiEverybodyRU;
			else if(this.isSChinese) return RemYanflyTargetMultiEverybodySCH;
			else if(this.isTChinese) return RemYanflyTargetMultiEverybodyTCH;
			else if(this.isKorean) return RemYanflyTargetMultiEverybodyKR;
			else if(this.isSpanish) return RemYanflyTargetMultiEverybodySP;
			return RemYanflyTargetMultiEverybodyEN;
		}, configurable: true
	},
	yanflyTargetMultiAllies: {
		get: function() {
			if(this.isJapanese) return RemYanflyTargetMultiAlliesJP;
			else if(this.isEnglish) return RemYanflyTargetMultiAlliesEN;
			else if(this.isRussian) return RemYanflyTargetMultiAlliesRU;
			else if(this.isSChinese) return RemYanflyTargetMultiAlliesSCH;
			else if(this.isTChinese) return RemYanflyTargetMultiAlliesTCH;
			else if(this.isKorean) return RemYanflyTargetMultiAlliesKR;
			else if(this.isSpanish) return RemYanflyTargetMultiAlliesSP;
			return RemYanflyTargetMultiAlliesEN;
		}, configurable: true
	},
	yanflyTargetMultiFoes: {
		get: function() {
			if(this.isJapanese) return RemYanflyTargetMultiFoesJP;
			else if(this.isEnglish) return RemYanflyTargetMultiFoesEN;
			else if(this.isRussian) return RemYanflyTargetMultiFoesRU;
			else if(this.isSChinese) return RemYanflyTargetMultiFoesSCH;
			else if(this.isTChinese) return RemYanflyTargetMultiFoesTCH;
			else if(this.isKorean) return RemYanflyTargetMultiFoesKR;
			else if(this.isSpanish) return RemYanflyTargetMultiFoesSP;
			return RemYanflyTargetMultiFoesEN;
		}, configurable: true
	},
	yanflyTargetFemaleAlly: {
		get: function() {
			if(this.isJapanese) return RemYanflyTargetFemaleAllyJP;
			else if(this.isEnglish) return RemYanflyTargetFemaleAllyEN;
			else if(this.isRussian) return RemYanflyTargetFemaleAllyRU;
			else if(this.isSChinese) return RemYanflyTargetFemaleAllySCH;
			else if(this.isTChinese) return RemYanflyTargetFemaleAllyTCH;
			else if(this.isKorean) return RemYanflyTargetFemaleAllyKR;
			else if(this.isSpanish) return RemYanflyTargetFemaleAllySP;
			return RemYanflyTargetFemaleAllyEN;
		}, configurable: true
	},
	yanflyTargetFemaleEnemy: {
		get: function() {
			if(this.isJapanese) return RemYanflyTargetFemaleEnemyJP;
			else if(this.isEnglish) return RemYanflyTargetFemaleEnemyEN;
			else if(this.isRussian) return RemYanflyTargetFemaleEnemyRU;
			else if(this.isSChinese) return RemYanflyTargetFemaleEnemySCH;
			else if(this.isTChinese) return RemYanflyTargetFemaleEnemyTCH;
			else if(this.isKorean) return RemYanflyTargetFemaleEnemyKR;
			else if(this.isSpanish) return RemYanflyTargetFemaleEnemySP;
			return RemYanflyTargetFemaleEnemyEN;
		}, configurable: true
	},


	FTKRSkillTreeConfirmText: {
		get: function() {
			if(this.isJapanese) return RemFTKRSkillTreeConfirmTextJP;
			else if(this.isEnglish) return RemFTKRSkillTreeConfirmTextEN;
			else if(this.isRussian) return RemFTKRSkillTreeConfirmTextRU;
			else if(this.isSChinese) return RemFTKRSkillTreeConfirmTextSCH;
			else if(this.isTChinese) return RemFTKRSkillTreeConfirmTextTCH;
			else if(this.isKorean) return RemFTKRSkillTreeConfirmTextKR;
			else if(this.isSpanish) return RemFTKRSkillTreeConfirmTextSP;
			return RemFTKRSkillTreeConfirmTextEN;
		}, configurable: true
	},
	FTKRSkillTreeYes: {
		get: function() {
			if(this.isJapanese) return RemFTKRSkillTreeYesJP;
			else if(this.isEnglish) return RemFTKRSkillTreeYesEN;
			else if(this.isRussian) return RemFTKRSkillTreeYesRU;
			else if(this.isSChinese) return RemFTKRSkillTreeYesSCH;
			else if(this.isTChinese) return RemFTKRSkillTreeYesTCH;
			else if(this.isKorean) return RemFTKRSkillTreeYesKR;
			else if(this.isSpanish) return RemFTKRSkillTreeYesSP;
			return RemFTKRSkillTreeYesEN;
		}, configurable: true
	},
	FTKRSkillTreeNo: {
		get: function() {
			if(this.isJapanese) return RemFTKRSkillTreeNoJP;
			else if(this.isEnglish) return RemFTKRSkillTreeNoEN;
			else if(this.isRussian) return RemFTKRSkillTreeNoRU;
			else if(this.isSChinese) return RemFTKRSkillTreeNoSCH;
			else if(this.isTChinese) return RemFTKRSkillTreeNoTCH;
			else if(this.isKorean) return RemFTKRSkillTreeNoKR;
			else if(this.isSpanish) return RemFTKRSkillTreeNoSP;
			return RemFTKRSkillTreeNoEN;
		}, configurable: true
	},
	FTKRSkillTreeEdictPoints: {
		get: function() {
			if(this.isJapanese) return RemFTKRSkillTreeEdictPointsJP;
			else if(this.isEnglish) return RemFTKRSkillTreeEdictPointsEN;
			else if(this.isRussian) return RemFTKRSkillTreeEdictPointsRU;
			else if(this.isSChinese) return RemFTKRSkillTreeEdictPointsSCH;
			else if(this.isTChinese) return RemFTKRSkillTreeEdictPointsTCH;
			else if(this.isKorean) return RemFTKRSkillTreeEdictPointsKR;
			else if(this.isSpanish) return RemFTKRSkillTreeEdictPointsSP;
			return RemFTKRSkillTreeEdictPointsEN;
		}, configurable: true
	},
	FTKRSkillTreeEdictPointsAbbr: {
		get: function() {
			if(this.isJapanese) return RemFTKRSkillTreeEdictPointsAbbrJP;
			else if(this.isEnglish) return RemFTKRSkillTreeEdictPointsAbbrEN;
			else if(this.isRussian) return RemFTKRSkillTreeEdictPointsAbbrRU;
			else if(this.isSChinese) return RemFTKRSkillTreeEdictPointsAbbrSCH;
			else if(this.isTChinese) return RemFTKRSkillTreeEdictPointsAbbrTCH;
			else if(this.isKorean) return RemFTKRSkillTreeEdictPointsAbbrKR;
			else if(this.isSpanish) return RemFTKRSkillTreeEdictPointsAbbrSP;
			return RemFTKRSkillTreeEdictPointsAbbrEN;
		}, configurable: true
	},
	FTKRSkillTreeOrder: {
		get: function() {
			if(this.isJapanese) return RemFTKRSkillTreeOrderJP;
			else if(this.isEnglish) return RemFTKRSkillTreeOrderEN;
			else if(this.isRussian) return RemFTKRSkillTreeOrderRU;
			else if(this.isSChinese) return RemFTKRSkillTreeOrderSCH;
			else if(this.isTChinese) return RemFTKRSkillTreeOrderTCH;
			else if(this.isKorean) return RemFTKRSkillTreeOrderKR;
			else if(this.isSpanish) return RemFTKRSkillTreeOrderSP;
			return RemFTKRSkillTreeOrderEN;
		}, configurable: true
	},

	FTKRSkillTreeFunding: {
		get: function() {
			if(this.isJapanese) return RemFTKRSkillTreeFundingJP;
			else if(this.isEnglish) return RemFTKRSkillTreeFundingEN;
			else if(this.isRussian) return RemFTKRSkillTreeFundingRU;
			else if(this.isSChinese) return RemFTKRSkillTreeFundingSCH;
			else if(this.isTChinese) return RemFTKRSkillTreeFundingTCH;
			else if(this.isKorean) return RemFTKRSkillTreeFundingKR;
			else if(this.isSpanish) return RemFTKRSkillTreeFundingSP;
			return RemFTKRSkillTreeFundingEN;
		}, configurable: true
	},
	FTKRSkillTreeFundingCost: {
		get: function() {
			if(this.isJapanese) return RemFTKRSkillTreeFundingCostJP;
			else if(this.isEnglish) return RemFTKRSkillTreeFundingCostEN;
			else if(this.isRussian) return RemFTKRSkillTreeFundingCostRU;
			else if(this.isSChinese) return RemFTKRSkillTreeFundingCostSCH;
			else if(this.isTChinese) return RemFTKRSkillTreeFundingCostTCH;
			else if(this.isKorean) return RemFTKRSkillTreeFundingCostKR;
			else if(this.isSpanish) return RemFTKRSkillTreeFundingCostSP;
			return RemFTKRSkillTreeFundingCostEN;
		}, configurable: true
	},
	FTKRSkillTreeCostText: {
		get: function() {
			if(this.isJapanese) return RemFTKRSkillTreeCostTextJP;
			else if(this.isEnglish) return RemFTKRSkillTreeCostTextEN;
			else if(this.isRussian) return RemFTKRSkillTreeCostTextRU;
			else if(this.isSChinese) return RemFTKRSkillTreeCostTextSCH;
			else if(this.isTChinese) return RemFTKRSkillTreeCostTextTCH;
			else if(this.isKorean) return RemFTKRSkillTreeCostTextKR;
			else if(this.isSpanish) return RemFTKRSkillTreeCostTextSP;
			return RemFTKRSkillTreeCostTextEN;
		}, configurable: true
	},
	FTKRSkillTreeCostItem: {
		get: function() {
			if(this.isJapanese) return RemFTKRSkillTreeCostItemJP;
			else if(this.isEnglish) return RemFTKRSkillTreeCostItemEN;
			else if(this.isRussian) return RemFTKRSkillTreeCostItemRU;
			else if(this.isSChinese) return RemFTKRSkillTreeCostItemSCH;
			else if(this.isTChinese) return RemFTKRSkillTreeCostItemTCH;
			else if(this.isKorean) return RemFTKRSkillTreeCostItemKR;
			else if(this.isSpanish) return RemFTKRSkillTreeCostItemSP;
			return RemFTKRSkillTreeCostItemEN;
		}, configurable: true
	},
	FTKRSkillTreePreReqText: {
		get: function() {
			if(this.isJapanese) return RemFTKRSkillTreePreReqTextJP;
			else if(this.isEnglish) return RemFTKRSkillTreePreReqTextEN;
			else if(this.isRussian) return RemFTKRSkillTreePreReqTextRU;
			else if(this.isSChinese) return RemFTKRSkillTreePreReqTextSCH;
			else if(this.isTChinese) return RemFTKRSkillTreePreReqTextTCH;
			else if(this.isKorean) return RemFTKRSkillTreePreReqTextKR;
			else if(this.isSpanish) return RemFTKRSkillTreePreReqTextSP;
			return RemFTKRSkillTreePreReqTextEN;
		}, configurable: true
	},
	FTKRSkillTreeReqTypeEdict: {
		get: function() {
			if(this.isJapanese) return RemFTKRSkillTreeReqTypeEdictJP;
			else if(this.isEnglish) return RemFTKRSkillTreeReqTypeEdictEN;
			else if(this.isRussian) return RemFTKRSkillTreeReqTypeEdictRU;
			else if(this.isSChinese) return RemFTKRSkillTreeReqTypeEdictSCH;
			else if(this.isTChinese) return RemFTKRSkillTreeReqTypeEdictTCH;
			else if(this.isKorean) return RemFTKRSkillTreeReqTypeEdictKR;
			else if(this.isSpanish) return RemFTKRSkillTreeReqTypeEdictSP;
			return RemFTKRSkillTreeReqTypeEdictEN;
		}, configurable: true
	},
	FTKRSkillTreeReqTypePassive: {
		get: function() {
			if(this.isJapanese) return RemFTKRSkillTreeReqTypePassiveJP;
			else if(this.isEnglish) return RemFTKRSkillTreeReqTypePassiveEN;
			else if(this.isRussian) return RemFTKRSkillTreeReqTypePassiveRU;
			else if(this.isSChinese) return RemFTKRSkillTreeReqTypePassiveSCH;
			else if(this.isTChinese) return RemFTKRSkillTreeReqTypePassiveTCH;
			else if(this.isKorean) return RemFTKRSkillTreeReqTypePassiveKR;
			else if(this.isSpanish) return RemFTKRSkillTreeReqTypePassiveSP;
			return RemFTKRSkillTreeReqTypePassiveEN;
		}, configurable: true
	},

	RemErrorMessage: {
		get: function() {
			if(this.isJapanese) return RemErrorMessageJP;
			else if(this.isEnglish) return RemErrorMessageEN;
			else if(this.isRussian) return RemErrorMessageRU;
			else if(this.isSChinese) return RemErrorMessageSCH;
			else if(this.isTChinese) return RemErrorMessageTCH;
			else if(this.isKorean) return RemErrorMessageKR;
			else if(this.isSpanish) return RemErrorMessageSP;
			return RemErrorMessageEN;
		}, configurable: true
	},


	SuperEffectiveText: {
		get: function() {
			if(this.isJapanese) return SuperEffectiveTextJP;
			else if(this.isEnglish) return SuperEffectiveTextEN;
			else if(this.isRussian) return SuperEffectiveTextRU;
			else if(this.isSChinese) return SuperEffectiveTextSCH;
			else if(this.isTChinese) return SuperEffectiveTextTCH;
			else if(this.isKorean) return SuperEffectiveTextKR;
			else if(this.isSpanish) return SuperEffectiveTextSP;
			return SuperEffectiveTextEN;
		}, configurable: true
	},
	NotEffectiveText: {
		get: function() {
			if(this.isJapanese) return NotEffectiveTextJP;
			else if(this.isEnglish) return NotEffectiveTextEN;
			else if(this.isRussian) return NotEffectiveTextRU;
			else if(this.isSChinese) return NotEffectiveTextSCH;
			else if(this.isTChinese) return NotEffectiveTextTCH;
			else if(this.isKorean) return NotEffectiveTextKR;
			else if(this.isSpanish) return NotEffectiveTextSP;
			return NotEffectiveTextEN;
		}, configurable: true
	},

	prisonerGeneric: {
		get: function() {
			if(this.isJapanese) return RemPrisonerGenericJP;
			else if(this.isEnglish) return RemPrisonerGenericEN;
			else if(this.isRussian) return RemPrisonerGenericRU;
			else if(this.isSChinese) return RemPrisonerGenericSCH;
			else if(this.isTChinese) return RemPrisonerGenericTCH;
			else if(this.isKorean) return RemPrisonerGenericKR;
			else if(this.isSpanish) return RemPrisonerGenericSP;
			return RemPrisonerGenericEN;
		}, configurable: true
	},
	prisonerThug: {
		get: function() {
			if(this.isJapanese) return RemPrisonerThugJP;
			else if(this.isEnglish) return RemPrisonerThugEN;
			else if(this.isRussian) return RemPrisonerThugRU;
			else if(this.isSChinese) return RemPrisonerThugSCH;
			else if(this.isTChinese) return RemPrisonerThugTCH;
			else if(this.isKorean) return RemPrisonerThugKR;
			else if(this.isSpanish) return RemPrisonerThugSP;
			return RemPrisonerThugEN;
		}, configurable: true
	},
	prisonerOrc: {
		get: function() {
			if(this.isJapanese) return RemPrisonerOrcJP;
			else if(this.isEnglish) return RemPrisonerOrcEN;
			else if(this.isRussian) return RemPrisonerOrcRU;
			else if(this.isSChinese) return RemPrisonerOrcSCH;
			else if(this.isTChinese) return RemPrisonerOrcTCH;
			else if(this.isKorean) return RemPrisonerOrcKR;
			else if(this.isSpanish) return RemPrisonerOrcSP;
			return RemPrisonerOrcEN;
		}, configurable: true
	},
	prisonerGoblin: {
		get: function() {
			if(this.isJapanese) return RemPrisonerGoblinJP;
			else if(this.isEnglish) return RemPrisonerGoblinEN;
			else if(this.isRussian) return RemPrisonerGoblinRU;
			else if(this.isSChinese) return RemPrisonerGoblinSCH;
			else if(this.isTChinese) return RemPrisonerGoblinTCH;
			else if(this.isKorean) return RemPrisonerGoblinKR;
			else if(this.isSpanish) return RemPrisonerGoblinSP;
			return RemPrisonerGoblinEN;
		}, configurable: true
	},
	prisonerGuard: {
		get: function() {
			if(this.isJapanese) return RemPrisonerGuardJP;
			else if(this.isEnglish) return RemPrisonerGuardEN;
			else if(this.isRussian) return RemPrisonerGuardRU;
			else if(this.isSChinese) return RemPrisonerGuardSCH;
			else if(this.isTChinese) return RemPrisonerGuardTCH;
			else if(this.isKorean) return RemPrisonerGuardKR;
			else if(this.isSpanish) return RemPrisonerGuardSP;
			return RemPrisonerGuardEN;
		}, configurable: true
	},
	prisonerSlime: {
		get: function() {
			if(this.isJapanese) return RemPrisonerSlimeJP;
			else if(this.isEnglish) return RemPrisonerSlimeEN;
			else if(this.isRussian) return RemPrisonerSlimeRU;
			else if(this.isSChinese) return RemPrisonerSlimeSCH;
			else if(this.isTChinese) return RemPrisonerSlimeTCH;
			else if(this.isKorean) return RemPrisonerSlimeKR;
			else if(this.isSpanish) return RemPrisonerSlimeSP;
			return RemPrisonerSlimeEN;
		}, configurable: true
	},
	prisonerRogue: {
		get: function() {
			if(this.isJapanese) return RemPrisonerRogueJP;
			else if(this.isEnglish) return RemPrisonerRogueEN;
			else if(this.isRussian) return RemPrisonerRogueRU;
			else if(this.isSChinese) return RemPrisonerRogueSCH;
			else if(this.isTChinese) return RemPrisonerRogueTCH;
			else if(this.isKorean) return RemPrisonerRogueKR;
			else if(this.isSpanish) return RemPrisonerRogueSP;
			return RemPrisonerRogueEN;
		}, configurable: true
	},
	prisonerNerd: {
		get: function() {
			if(this.isJapanese) return RemPrisonerNerdJP;
			else if(this.isEnglish) return RemPrisonerNerdEN;
			else if(this.isRussian) return RemPrisonerNerdRU;
			else if(this.isSChinese) return RemPrisonerNerdSCH;
			else if(this.isTChinese) return RemPrisonerNerdTCH;
			else if(this.isKorean) return RemPrisonerNerdKR;
			else if(this.isSpanish) return RemPrisonerNerdSP;
			return RemPrisonerNerdEN;
		}, configurable: true
	},
	prisonerLizardman: {
		get: function() {
			if(this.isJapanese) return RemPrisonerLizardmanJP;
			else if(this.isEnglish) return RemPrisonerLizardmanEN;
			else if(this.isRussian) return RemPrisonerLizardmanRU;
			else if(this.isSChinese) return RemPrisonerLizardmanSCH;
			else if(this.isTChinese) return RemPrisonerLizardmanTCH;
			else if(this.isKorean) return RemPrisonerLizardmanKR;
			else if(this.isSpanish) return RemPrisonerLizardmanSP;
			return RemPrisonerLizardmanEN;
		}, configurable: true
	},
	prisonerHomeless: {
		get: function() {
			if(this.isJapanese) return RemPrisonerHomelessJP;
			else if(this.isEnglish) return RemPrisonerHomelessEN;
			else if(this.isRussian) return RemPrisonerHomelessRU;
			else if(this.isSChinese) return RemPrisonerHomelessSCH;
			else if(this.isTChinese) return RemPrisonerHomelessTCH;
			else if(this.isKorean) return RemPrisonerHomelessKR;
			else if(this.isSpanish) return RemPrisonerHomelessSP;
			return RemPrisonerHomelessEN;
		}, configurable: true
	},
	prisonerWerewolf: {
		get: function() {
			if(this.isJapanese) return RemPrisonerWerewolfJP;
			else if(this.isEnglish) return RemPrisonerWerewolfEN;
			else if(this.isRussian) return RemPrisonerWerewolfRU;
			else if(this.isSChinese) return RemPrisonerWerewolfSCH;
			else if(this.isTChinese) return RemPrisonerWerewolfTCH;
			else if(this.isKorean) return RemPrisonerWerewolfKR;
			else if(this.isSpanish) return RemPrisonerWerewolfSP;
			return RemPrisonerWerewolfEN;
		}, configurable: true
	},
	prisonerYeti: {
		get: function() {
			if(this.isJapanese) return RemPrisonerYetiJP;
			else if(this.isEnglish) return RemPrisonerYetiEN;
			else if(this.isRussian) return RemPrisonerYetiRU;
			else if(this.isSChinese) return RemPrisonerYetiSCH;
			else if(this.isTChinese) return RemPrisonerYetiTCH;
			else if(this.isKorean) return RemPrisonerYetiKR;
			else if(this.isSpanish) return RemPrisonerYetiSP;
			return RemPrisonerYetiEN;
		}, configurable: true
	},

	receptionistVisitor: {
		get: function() {
			if(this.isJapanese) return RemReceptionistVisitorJP;
			else if(this.isEnglish) return RemReceptionistVisitorEN;
			else if(this.isRussian) return RemReceptionistVisitorRU;
			else if(this.isSChinese) return RemReceptionistVisitorSCH;
			else if(this.isTChinese) return RemReceptionistVisitorTCH;
			else if(this.isKorean) return RemReceptionistVisitorKR;
			else if(this.isSpanish) return RemReceptionistVisitorSP;
			return RemReceptionistVisitorEN;
		}, configurable: true
	},
	receptionistFan: {
		get: function() {
			if(this.isJapanese) return RemReceptionistFanJP;
			else if(this.isEnglish) return RemReceptionistFanEN;
			else if(this.isRussian) return RemReceptionistFanRU;
			else if(this.isSChinese) return RemReceptionistFanSCH;
			else if(this.isTChinese) return RemReceptionistFanTCH;
			else if(this.isKorean) return RemReceptionistFanKR;
			else if(this.isSpanish) return RemReceptionistFanSP;
			return RemReceptionistFanEN;
		}, configurable: true
	},



	bossYasu: {
		get: function() {
			if(this.isJapanese) return RemBossYasuJP;
			else if(this.isEnglish) return RemBossYasuEN;
			else if(this.isRussian) return RemBossYasuRU;
			else if(this.isSChinese) return RemBossYasuSCH;
			else if(this.isTChinese) return RemBossYasuTCH;
			else if(this.isKorean) return RemBossYasuKR;
			else if(this.isSpanish) return RemBossYasuSP;
			return RemBossYasuEN;
		}, configurable: true
	},
	bossTonkin: {
		get: function() {
			if(this.isJapanese) return RemBossTonkinJP;
			else if(this.isEnglish) return RemBossTonkinEN;
			else if(this.isRussian) return RemBossTonkinRU;
			else if(this.isSChinese) return RemBossTonkinSCH;
			else if(this.isTChinese) return RemBossTonkinTCH;
			else if(this.isKorean) return RemBossTonkinKR;
			else if(this.isSpanish) return RemBossTonkinSP;
			return RemBossTonkinEN;
		}, configurable: true
	},
	bossCargill: {
		get: function() {
			if(this.isJapanese) return RemBossCargillJP;
			else if(this.isEnglish) return RemBossCargillEN;
			else if(this.isRussian) return RemBossCargillRU;
			else if(this.isSChinese) return RemBossCargillSCH;
			else if(this.isTChinese) return RemBossCargillTCH;
			else if(this.isKorean) return RemBossCargillKR;
			else if(this.isSpanish) return RemBossCargillSP;
			return RemBossCargillEN;
		}, configurable: true
	},
	bossAron: {
		get: function() {
			if(this.isJapanese) return RemBossAronJP;
			else if(this.isEnglish) return RemBossAronEN;
			else if(this.isRussian) return RemBossAronRU;
			else if(this.isSChinese) return RemBossAronSCH;
			else if(this.isTChinese) return RemBossAronTCH;
			else if(this.isKorean) return RemBossAronKR;
			else if(this.isSpanish) return RemBossAronSP;
			return RemBossAronEN;
		}, configurable: true
	},
	bossNoinim: {
		get: function() {
			if(this.isJapanese) return RemBossNoinimJP;
			else if(this.isEnglish) return RemBossNoinimEN;
			else if(this.isRussian) return RemBossNoinimRU;
			else if(this.isSChinese) return RemBossNoinimSCH;
			else if(this.isTChinese) return RemBossNoinimTCH;
			else if(this.isKorean) return RemBossNoinimKR;
			else if(this.isSpanish) return RemBossNoinimSP;
			return RemBossNoinimEN;
		}, configurable: true
	},
	bossGobriel: {
		get: function() {
			if(this.isJapanese) return RemBossGobrielJP;
			else if(this.isEnglish) return RemBossGobrielEN;
			else if(this.isRussian) return RemBossGobrielRU;
			else if(this.isSChinese) return RemBossGobrielSCH;
			else if(this.isTChinese) return RemBossGobrielTCH;
			else if(this.isKorean) return RemBossGobrielKR;
			else if(this.isSpanish) return RemBossGobrielSP;
			return RemBossGobrielEN;
		}, configurable: true
	},
	bossEmperor: {
		get: function() {
			if(this.isJapanese) return RemBossEmperorJP;
			else if(this.isEnglish) return RemBossEmperorEN;
			else if(this.isRussian) return RemBossEmperorRU;
			else if(this.isSChinese) return RemBossEmperorSCH;
			else if(this.isTChinese) return RemBossEmperorTCH;
			else if(this.isKorean) return RemBossEmperorKR;
			else if(this.isSpanish) return RemBossEmperorSP;
			return RemBossEmperorEN;
		}, configurable: true
	},



	RemDisableSmegmaSkill815Name: {
		get: function() {
			if(this.isJapanese) return RemDisableSmegmaSkill815NameJP;
			else if(this.isEnglish) return RemDisableSmegmaSkill815NameEN;
			else if(this.isRussian) return RemDisableSmegmaSkill815NameRU;
			else if(this.isSChinese) return RemDisableSmegmaSkill815NameSCH;
			else if(this.isTChinese) return RemDisableSmegmaSkill815NameTCH;
			else if(this.isKorean) return RemDisableSmegmaSkill815NameKR;
			else if(this.isSpanish) return RemDisableSmegmaSkill815NameSP;
			return RemDisableSmegmaSkill815NameEN;
		}, configurable: true
	},

	restoreMindPartialSuccess: {
		get: function() {
			if(this.isJapanese) return RemRestoreMindPartialSuccessJP;
			else if(this.isEnglish) return RemRestoreMindPartialSuccessEN;
			else if(this.isRussian) return RemRestoreMindPartialSuccessRU;
			else if(this.isSChinese) return RemRestoreMindPartialSuccessSCH;
			else if(this.isTChinese) return RemRestoreMindPartialSuccessTCH;
			else if(this.isKorean) return RemRestoreMindPartialSuccessKR;
			else if(this.isSpanish) return RemRestoreMindPartialSuccessSP;
			return RemRestoreMindPartialSuccessEN;
		}, configurable: true
	},
	restoreMindFullSuccess: {
		get: function() {
			if(this.isJapanese) return RemRestoreMindFullSuccessJP;
			else if(this.isEnglish) return RemRestoreMindFullSuccessEN;
			else if(this.isRussian) return RemRestoreMindFullSuccessRU;
			else if(this.isSChinese) return RemRestoreMindFullSuccessSCH;
			else if(this.isTChinese) return RemRestoreMindFullSuccessTCH;
			else if(this.isKorean) return RemRestoreMindFullSuccessKR;
			else if(this.isSpanish) return RemRestoreMindFullSuccessSP;
			return RemRestoreMindFullSuccessEN;
		}, configurable: true
	},
	restoreMindFailure: {
		get: function() {
			if(this.isJapanese) return RemRestoreMindFailureJP;
			else if(this.isEnglish) return RemRestoreMindFailureEN;
			else if(this.isRussian) return RemRestoreMindFailureRU;
			else if(this.isSChinese) return RemRestoreMindFailureSCH;
			else if(this.isTChinese) return RemRestoreMindFailureTCH;
			else if(this.isKorean) return RemRestoreMindFailureKR;
			else if(this.isSpanish) return RemRestoreMindFailureSP;
			return RemRestoreMindFailureEN;
		}, configurable: true
	},

	alcoholWater: {
		get: function() {
			if(this.isJapanese) return RemAlcoholTypeWaterJP;
			else if(this.isEnglish) return RemAlcoholTypeWaterEN;
			else if(this.isRussian) return RemAlcoholTypeWaterRU;
			else if(this.isSChinese) return RemAlcoholTypeWaterSCH;
			else if(this.isTChinese) return RemAlcoholTypeWaterTCH;
			else if(this.isKorean) return RemAlcoholTypeWaterKR;
			else if(this.isSpanish) return RemAlcoholTypeWaterSP;
			return RemAlcoholTypeWaterEN;
		}, configurable: true
	},
	alcoholPaleAle: {
		get: function() {
			if(this.isJapanese) return RemAlcoholTypePaleAleJP;
			else if(this.isEnglish) return RemAlcoholTypePaleAleEN;
			else if(this.isRussian) return RemAlcoholTypePaleAleRU;
			else if(this.isSChinese) return RemAlcoholTypePaleAleSCH;
			else if(this.isTChinese) return RemAlcoholTypePaleAleTCH;
			else if(this.isKorean) return RemAlcoholTypePaleAleKR;
			else if(this.isSpanish) return RemAlcoholTypePaleAleSP;
			return RemAlcoholTypePaleAleEN;
		}, configurable: true
	},
	alcoholDarkAle: {
		get: function() {
			if(this.isJapanese) return RemAlcoholTypeDarkAleJP;
			else if(this.isEnglish) return RemAlcoholTypeDarkAleEN;
			else if(this.isRussian) return RemAlcoholTypeDarkAleRU;
			else if(this.isSChinese) return RemAlcoholTypeDarkAleSCH;
			else if(this.isTChinese) return RemAlcoholTypeDarkAleTCH;
			else if(this.isKorean) return RemAlcoholTypeDarkAleKR;
			else if(this.isSpanish) return RemAlcoholTypeDarkAleSP;
			return RemAlcoholTypeDarkAleEN;
		}, configurable: true
	},
	alcoholVodka: {
		get: function() {
			if(this.isJapanese) return RemAlcoholTypeVodkaJP;
			else if(this.isEnglish) return RemAlcoholTypeVodkaEN;
			else if(this.isRussian) return RemAlcoholTypeVodkaRU;
			else if(this.isSChinese) return RemAlcoholTypeVodkaSCH;
			else if(this.isTChinese) return RemAlcoholTypeVodkaTCH;
			else if(this.isKorean) return RemAlcoholTypeVodkaKR;
			else if(this.isSpanish) return RemAlcoholTypeVodkaSP;
			return RemAlcoholTypeVodkaEN;
		}, configurable: true
	},
	alcoholTequila: {
		get: function() {
			if(this.isJapanese) return RemAlcoholTypeTequilaJP;
			else if(this.isEnglish) return RemAlcoholTypeTequilaEN;
			else if(this.isRussian) return RemAlcoholTypeTequilaRU;
			else if(this.isSChinese) return RemAlcoholTypeTequilaSCH;
			else if(this.isTChinese) return RemAlcoholTypeTequilaTCH;
			else if(this.isKorean) return RemAlcoholTypeTequilaKR;
			else if(this.isSpanish) return RemAlcoholTypeTequilaSP;
			return RemAlcoholTypeTequilaEN;
		}, configurable: true
	},
	alcoholGoldRum: {
		get: function() {
			if(this.isJapanese) return RemAlcoholTypeGoldRumJP;
			else if(this.isEnglish) return RemAlcoholTypeGoldRumEN;
			else if(this.isRussian) return RemAlcoholTypeGoldRumRU;
			else if(this.isSChinese) return RemAlcoholTypeGoldRumSCH;
			else if(this.isTChinese) return RemAlcoholTypeGoldRumTCH;
			else if(this.isKorean) return RemAlcoholTypeGoldRumKR;
			else if(this.isSpanish) return RemAlcoholTypeGoldRumSP;
			return RemAlcoholTypeGoldRumEN;
		}, configurable: true
	},
	alcoholOverproofRum: {
		get: function() {
			if(this.isJapanese) return RemAlcoholTypeOverproofRumJP;
			else if(this.isEnglish) return RemAlcoholTypeOverproofRumEN;
			else if(this.isRussian) return RemAlcoholTypeOverproofRumRU;
			else if(this.isSChinese) return RemAlcoholTypeOverproofRumSCH;
			else if(this.isTChinese) return RemAlcoholTypeOverproofRumTCH;
			else if(this.isKorean) return RemAlcoholTypeOverproofRumKR;
			else if(this.isSpanish) return RemAlcoholTypeOverproofRumSP;
			return RemAlcoholTypeOverproofRumEN;
		}, configurable: true
	},
	alcoholWhiskey: {
		get: function() {
			if(this.isJapanese) return RemAlcoholTypeWhiskeyJP;
			else if(this.isEnglish) return RemAlcoholTypeWhiskeyEN;
			else if(this.isRussian) return RemAlcoholTypeWhiskeyRU;
			else if(this.isSChinese) return RemAlcoholTypeWhiskeySCH;
			else if(this.isTChinese) return RemAlcoholTypeWhiskeyTCH;
			else if(this.isKorean) return RemAlcoholTypeWhiskeyKR;
			else if(this.isSpanish) return RemAlcoholTypeWhiskeySP;
			return RemAlcoholTypeWhiskeyEN;
		}, configurable: true
	},
	alcoholDirtyMugsSingular: {
		get: function() {
			if(this.isJapanese) return RemAlcoholTypeDirtyMugsSingularJP;
			else if(this.isEnglish) return RemAlcoholTypeDirtyMugsSingularEN;
			else if(this.isRussian) return RemAlcoholTypeDirtyMugsSingularRU;
			else if(this.isSChinese) return RemAlcoholTypeDirtyMugsSingularSCH;
			else if(this.isTChinese) return RemAlcoholTypeDirtyMugsSingularTCH;
			else if(this.isKorean) return RemAlcoholTypeDirtyMugsSingularKR;
			else if(this.isSpanish) return RemAlcoholTypeDirtyMugsSingularSP;
			return RemAlcoholTypeDirtyMugsSingularEN;
		}, configurable: true
	},
	alcoholDirtyMugsPlural: {
		get: function() {
			if(this.isJapanese) return RemAlcoholTypeDirtyMugsPluralJP;
			else if(this.isEnglish) return RemAlcoholTypeDirtyMugsPluralEN;
			else if(this.isRussian) return RemAlcoholTypeDirtyMugsPluralRU;
			else if(this.isSChinese) return RemAlcoholTypeDirtyMugsPluralSCH;
			else if(this.isTChinese) return RemAlcoholTypeDirtyMugsPluralTCH;
			else if(this.isKorean) return RemAlcoholTypeDirtyMugsPluralKR;
			else if(this.isSpanish) return RemAlcoholTypeDirtyMugsPluralSP;
			return RemAlcoholTypeDirtyMugsPluralEN;
		}, configurable: true
	},
	alcoholDirtyGlassesSingular: {
		get: function() {
			if(this.isJapanese) return RemAlcoholTypeDirtyGlassesSingularJP;
			else if(this.isEnglish) return RemAlcoholTypeDirtyGlassesSingularEN;
			else if(this.isRussian) return RemAlcoholTypeDirtyGlassesSingularRU;
			else if(this.isSChinese) return RemAlcoholTypeDirtyGlassesSingularSCH;
			else if(this.isTChinese) return RemAlcoholTypeDirtyGlassesSingularTCH;
			else if(this.isKorean) return RemAlcoholTypeDirtyGlassesSingularKR;
			else if(this.isSpanish) return RemAlcoholTypeDirtyGlassesSingularSP;
			return RemAlcoholTypeDirtyGlassesSingularEN;
		}, configurable: true
	},
	alcoholDirtyGlassesPlural: {
		get: function() {
			if(this.isJapanese) return RemAlcoholTypeDirtyGlassesPluralJP;
			else if(this.isEnglish) return RemAlcoholTypeDirtyGlassesPluralEN;
			else if(this.isRussian) return RemAlcoholTypeDirtyGlassesPluralRU;
			else if(this.isSChinese) return RemAlcoholTypeDirtyGlassesPluralSCH;
			else if(this.isTChinese) return RemAlcoholTypeDirtyGlassesPluralTCH;
			else if(this.isKorean) return RemAlcoholTypeDirtyGlassesPluralKR;
			else if(this.isSpanish) return RemAlcoholTypeDirtyGlassesPluralSP;
			return RemAlcoholTypeDirtyGlassesPluralEN;
		}, configurable: true
	},

	waitressGetsTip: {
		get: function() {
			if(this.isJapanese) return RemWaitressGetsTipJP;
			else if(this.isEnglish) return RemWaitressGetsTipEN;
			else if(this.isRussian) return RemWaitressGetsTipRU;
			else if(this.isSChinese) return RemWaitressGetsTipSCH;
			else if(this.isTChinese) return RemWaitressGetsTipTCH;
			else if(this.isKorean) return RemWaitressGetsTipKR;
			else if(this.isSpanish) return RemWaitressGetsTipSP;
			return RemWaitressGetsTipEN;
		}, configurable: true
	},
	waitressEnemySleep: {
		get: function() {
			if(this.isJapanese) return RemWaitressEnemySleepJP;
			else if(this.isEnglish) return RemWaitressEnemySleepEN;
			else if(this.isRussian) return RemWaitressEnemySleepRU;
			else if(this.isSChinese) return RemWaitressEnemySleepSCH;
			else if(this.isTChinese) return RemWaitressEnemySleepTCH;
			else if(this.isKorean) return RemWaitressEnemySleepKR;
			else if(this.isSpanish) return RemWaitressEnemySleepSP;
			return RemWaitressEnemySleepEN;
		}, configurable: true
	},
	waitressEnemyWakeUp: {
		get: function() {
			if(this.isJapanese) return RemWaitressEnemyWakeUpJP;
			else if(this.isEnglish) return RemWaitressEnemyWakeUpEN;
			else if(this.isRussian) return RemWaitressEnemyWakeUpRU;
			else if(this.isSChinese) return RemWaitressEnemyWakeUpSCH;
			else if(this.isTChinese) return RemWaitressEnemyWakeUpTCH;
			else if(this.isKorean) return RemWaitressEnemyWakeUpKR;
			else if(this.isSpanish) return RemWaitressEnemyWakeUpSP;
			return RemWaitressEnemyWakeUpEN;
		}, configurable: true
	},
	waitressEnemyLeavesBar: {
		get: function() {
			if(this.isJapanese) return RemWaitressEnemyLeavesBarJP;
			else if(this.isEnglish) return RemWaitressEnemyLeavesBarEN;
			else if(this.isRussian) return RemWaitressEnemyLeavesBarRU;
			else if(this.isSChinese) return RemWaitressEnemyLeavesBarSCH;
			else if(this.isTChinese) return RemWaitressEnemyLeavesBarTCH;
			else if(this.isKorean) return RemWaitressEnemyLeavesBarKR;
			else if(this.isSpanish) return RemWaitressEnemyLeavesBarSP;
			return RemWaitressEnemyLeavesBarEN;
		}, configurable: true
	},
	waitressEnemyLeavesBarDrunk: {
		get: function() {
			if(this.isJapanese) return RemWaitressEnemyLeavesBarDrunkJP;
			else if(this.isEnglish) return RemWaitressEnemyLeavesBarDrunkEN;
			else if(this.isRussian) return RemWaitressEnemyLeavesBarDrunkRU;
			else if(this.isSChinese) return RemWaitressEnemyLeavesBarDrunkSCH;
			else if(this.isTChinese) return RemWaitressEnemyLeavesBarDrunkTCH;
			else if(this.isKorean) return RemWaitressEnemyLeavesBarDrunkKR;
			else if(this.isSpanish) return RemWaitressEnemyLeavesBarDrunkSP;
			return RemWaitressEnemyLeavesBarDrunkEN;
		}, configurable: true
	},
	waitressEnemyCallingForWaitress: {
		get: function() {
			if(this.isJapanese) return RemWaitressEnemyCallingForWaitressJP;
			else if(this.isEnglish) return RemWaitressEnemyCallingForWaitressEN;
			else if(this.isRussian) return RemWaitressEnemyCallingForWaitressRU;
			else if(this.isSChinese) return RemWaitressEnemyCallingForWaitressSCH;
			else if(this.isTChinese) return RemWaitressEnemyCallingForWaitressTCH;
			else if(this.isKorean) return RemWaitressEnemyCallingForWaitressKR;
			else if(this.isSpanish) return RemWaitressEnemyCallingForWaitressSP;
			return RemWaitressEnemyCallingForWaitressEN;
		}, configurable: true
	},
	waitressEnemyDidntCallForWaitress: {
		get: function() {
			if(this.isJapanese) return RemWaitressEnemyDidntCallForWaitressJP;
			else if(this.isEnglish) return RemWaitressEnemyDidntCallForWaitressEN;
			else if(this.isRussian) return RemWaitressEnemyDidntCallForWaitressRU;
			else if(this.isSChinese) return RemWaitressEnemyDidntCallForWaitressSCH;
			else if(this.isTChinese) return RemWaitressEnemyDidntCallForWaitressTCH;
			else if(this.isKorean) return RemWaitressEnemyDidntCallForWaitressKR;
			else if(this.isSpanish) return RemWaitressEnemyDidntCallForWaitressSP;
			return RemWaitressEnemyDidntCallForWaitressEN;
		}, configurable: true
	},
	waitressEnemyAskingForDrink: {
		get: function() {
			if(this.isJapanese) return RemWaitressEnemyAskingForDrinkJP;
			else if(this.isEnglish) return RemWaitressEnemyAskingForDrinkEN;
			else if(this.isRussian) return RemWaitressEnemyAskingForDrinkRU;
			else if(this.isSChinese) return RemWaitressEnemyAskingForDrinkSCH;
			else if(this.isTChinese) return RemWaitressEnemyAskingForDrinkTCH;
			else if(this.isKorean) return RemWaitressEnemyAskingForDrinkKR;
			else if(this.isSpanish) return RemWaitressEnemyAskingForDrinkSP;
			return RemWaitressEnemyAskingForDrinkEN;
		}, configurable: true
	},
	waitressEnemyAskingForWaitressToDrink: {
		get: function() {
			if(this.isJapanese) return RemWaitressEnemyAskingForWaitressToDrinkJP;
			else if(this.isEnglish) return RemWaitressEnemyAskingForWaitressToDrinkEN;
			else if(this.isRussian) return RemWaitressEnemyAskingForWaitressToDrinkRU;
			else if(this.isSChinese) return RemWaitressEnemyAskingForWaitressToDrinkSCH;
			else if(this.isTChinese) return RemWaitressEnemyAskingForWaitressToDrinkTCH;
			else if(this.isKorean) return RemWaitressEnemyAskingForWaitressToDrinkKR;
			else if(this.isSpanish) return RemWaitressEnemyAskingForWaitressToDrinkSP;
			return RemWaitressEnemyAskingForWaitressToDrinkEN;
		}, configurable: true
	},
	waitressEnemyAskingForWaitressToFlash: {
		get: function() {
			if(this.isJapanese) return RemWaitressEnemyAskingForWaitressToFlashJP;
			else if(this.isEnglish) return RemWaitressEnemyAskingForWaitressToFlashEN;
			else if(this.isRussian) return RemWaitressEnemyAskingForWaitressToFlashRU;
			else if(this.isSChinese) return RemWaitressEnemyAskingForWaitressToFlashSCH;
			else if(this.isTChinese) return RemWaitressEnemyAskingForWaitressToFlashTCH;
			else if(this.isKorean) return RemWaitressEnemyAskingForWaitressToFlashKR;
			else if(this.isSpanish) return RemWaitressEnemyAskingForWaitressToFlashSP;
			return RemWaitressEnemyAskingForWaitressToFlashEN;
		}, configurable: true
	},
	waitressRefusesDrink: {
		get: function() {
			if(this.isJapanese) return RemWaitressRefusesDrinkJP;
			else if(this.isEnglish) return RemWaitressRefusesDrinkEN;
			else if(this.isRussian) return RemWaitressRefusesDrinkRU;
			else if(this.isSChinese) return RemWaitressRefusesDrinkSCH;
			else if(this.isTChinese) return RemWaitressRefusesDrinkTCH;
			else if(this.isKorean) return RemWaitressRefusesDrinkKR;
			else if(this.isSpanish) return RemWaitressRefusesDrinkSP;
			return RemWaitressRefusesDrinkEN;
		}, configurable: true
	},
	waitressAcceptsDrink: {
		get: function() {
			if(this.isJapanese) return RemWaitressAcceptsDrinkJP;
			else if(this.isEnglish) return RemWaitressAcceptsDrinkEN;
			else if(this.isRussian) return RemWaitressAcceptsDrinkRU;
			else if(this.isSChinese) return RemWaitressAcceptsDrinkSCH;
			else if(this.isTChinese) return RemWaitressAcceptsDrinkTCH;
			else if(this.isKorean) return RemWaitressAcceptsDrinkKR;
			else if(this.isSpanish) return RemWaitressAcceptsDrinkSP;
			return RemWaitressAcceptsDrinkEN;
		}, configurable: true
	},
	waitressWontFlash: {
		get: function() {
			if(this.isJapanese) return RemWaitressWontFlashJP;
			else if(this.isEnglish) return RemWaitressWontFlashEN;
			else if(this.isRussian) return RemWaitressWontFlashRU;
			else if(this.isSChinese) return RemWaitressWontFlashSCH;
			else if(this.isTChinese) return RemWaitressWontFlashTCH;
			else if(this.isKorean) return RemWaitressWontFlashKR;
			else if(this.isSpanish) return RemWaitressWontFlashSP;
			return RemWaitressWontFlashEN;
		}, configurable: true
	},
	waitressFlashes: {
		get: function() {
			if(this.isJapanese) return RemWaitressFlashesJP;
			else if(this.isEnglish) return RemWaitressFlashesEN;
			else if(this.isRussian) return RemWaitressFlashesRU;
			else if(this.isSChinese) return RemWaitressFlashesSCH;
			else if(this.isTChinese) return RemWaitressFlashesTCH;
			else if(this.isKorean) return RemWaitressFlashesKR;
			else if(this.isSpanish) return RemWaitressFlashesSP;
			return RemWaitressFlashesEN;
		}, configurable: true
	},
	waitressEnemyRefusesDrink: {
		get: function() {
			if(this.isJapanese) return RemWaitressEnemyRefusesDrinkJP;
			else if(this.isEnglish) return RemWaitressEnemyRefusesDrinkEN;
			else if(this.isRussian) return RemWaitressEnemyRefusesDrinkRU;
			else if(this.isSChinese) return RemWaitressEnemyRefusesDrinkSCH;
			else if(this.isTChinese) return RemWaitressEnemyRefusesDrinkTCH;
			else if(this.isKorean) return RemWaitressEnemyRefusesDrinkKR;
			else if(this.isSpanish) return RemWaitressEnemyRefusesDrinkSP;
			return RemWaitressEnemyRefusesDrinkEN;
		}, configurable: true
	},
	waitressEnemyAcceptsDrink: {
		get: function() {
			if(this.isJapanese) return RemWaitressEnemyAcceptsDrinkJP;
			else if(this.isEnglish) return RemWaitressEnemyAcceptsDrinkEN;
			else if(this.isRussian) return RemWaitressEnemyAcceptsDrinkRU;
			else if(this.isSChinese) return RemWaitressEnemyAcceptsDrinkSCH;
			else if(this.isTChinese) return RemWaitressEnemyAcceptsDrinkTCH;
			else if(this.isKorean) return RemWaitressEnemyAcceptsDrinkKR;
			else if(this.isSpanish) return RemWaitressEnemyAcceptsDrinkSP;
			return RemWaitressEnemyAcceptsDrinkEN;
		}, configurable: true
	},
	waitressEnemyAlcoholKiss: {
		get: function() {
			if(this.isJapanese) return RemWaitressEnemyAlcoholKissJP;
			else if(this.isEnglish) return RemWaitressEnemyAlcoholKissEN;
			else if(this.isRussian) return RemWaitressEnemyAlcoholKissRU;
			else if(this.isSChinese) return RemWaitressEnemyAlcoholKissSCH;
			else if(this.isTChinese) return RemWaitressEnemyAlcoholKissTCH;
			else if(this.isKorean) return RemWaitressEnemyAlcoholKissKR;
			else if(this.isSpanish) return RemWaitressEnemyAlcoholKissSP;
			return RemWaitressEnemyAlcoholKissEN;
		}, configurable: true
	},
	waitressEnemyCheerForBrawlNoDrink: {
		get: function() {
			if(this.isJapanese) return RemWaitressEnemyCheerForBrawlNoDrinkJP;
			else if(this.isEnglish) return RemWaitressEnemyCheerForBrawlNoDrinkEN;
			else if(this.isRussian) return RemWaitressEnemyCheerForBrawlNoDrinkRU;
			else if(this.isSChinese) return RemWaitressEnemyCheerForBrawlNoDrinkSCH;
			else if(this.isTChinese) return RemWaitressEnemyCheerForBrawlNoDrinkTCH;
			else if(this.isKorean) return RemWaitressEnemyCheerForBrawlNoDrinkKR;
			else if(this.isSpanish) return RemWaitressEnemyCheerForBrawlNoDrinkSP;
			return RemWaitressEnemyCheerForBrawlNoDrinkEN;
		}, configurable: true
	},
	waitressEnemyCheerForBrawlYesDrink: {
		get: function() {
			if(this.isJapanese) return RemWaitressEnemyCheerForBrawlYesDrinkJP;
			else if(this.isEnglish) return RemWaitressEnemyCheerForBrawlYesDrinkEN;
			else if(this.isRussian) return RemWaitressEnemyCheerForBrawlYesDrinkRU;
			else if(this.isSChinese) return RemWaitressEnemyCheerForBrawlYesDrinkSCH;
			else if(this.isTChinese) return RemWaitressEnemyCheerForBrawlYesDrinkTCH;
			else if(this.isKorean) return RemWaitressEnemyCheerForBrawlYesDrinkKR;
			else if(this.isSpanish) return RemWaitressEnemyCheerForBrawlYesDrinkSP;
			return RemWaitressEnemyCheerForBrawlYesDrinkEN;
		}, configurable: true
	},
	waitressBrawlStart: {
		get: function() {
			if(this.isJapanese) return RemWaitressBrawlStartJP;
			else if(this.isEnglish) return RemWaitressBrawlStartEN;
			else if(this.isRussian) return RemWaitressBrawlStartRU;
			else if(this.isSChinese) return RemWaitressBrawlStartSCH;
			else if(this.isTChinese) return RemWaitressBrawlStartTCH;
			else if(this.isKorean) return RemWaitressBrawlStartKR;
			else if(this.isSpanish) return RemWaitressBrawlStartSP;
			return RemWaitressBrawlStartEN;
		}, configurable: true
	},
	waitressBrawlJoin: {
		get: function() {
			if(this.isJapanese) return RemWaitressBrawlJoinJP;
			else if(this.isEnglish) return RemWaitressBrawlJoinEN;
			else if(this.isRussian) return RemWaitressBrawlJoinRU;
			else if(this.isSChinese) return RemWaitressBrawlJoinSCH;
			else if(this.isTChinese) return RemWaitressBrawlJoinTCH;
			else if(this.isKorean) return RemWaitressBrawlJoinKR;
			else if(this.isSpanish) return RemWaitressBrawlJoinSP;
			return RemWaitressBrawlJoinEN;
		}, configurable: true
	},
	waitressBarDamage: {
		get: function() {
			if(this.isJapanese) return RemWaitressBarDamageJP;
			else if(this.isEnglish) return RemWaitressBarDamageEN;
			else if(this.isRussian) return RemWaitressBarDamageRU;
			else if(this.isSChinese) return RemWaitressBarDamageSCH;
			else if(this.isTChinese) return RemWaitressBarDamageTCH;
			else if(this.isKorean) return RemWaitressBarDamageKR;
			else if(this.isSpanish) return RemWaitressBarDamageSP;
			return RemWaitressBarDamageEN;
		}, configurable: true
	},
	waitressBarEnemyTellsJoke: {
		get: function() {
			if(this.isJapanese) return RemWaitressEnemyTellsJokeJP;
			else if(this.isEnglish) return RemWaitressEnemyTellsJokeEN;
			else if(this.isRussian) return RemWaitressEnemyTellsJokeRU;
			else if(this.isSChinese) return RemWaitressEnemyTellsJokeSCH;
			else if(this.isTChinese) return RemWaitressEnemyTellsJokeTCH;
			else if(this.isKorean) return RemWaitressEnemyTellsJokeKR;
			else if(this.isSpanish) return RemWaitressEnemyTellsJokeSP;
			return RemWaitressEnemyTellsJokeEN;
		}, configurable: true
	},
	waitressBarEnemyContinuesJoke: {
		get: function() {
			if(this.isJapanese) return RemWaitressEnemyContinuesJokeJP;
			else if(this.isEnglish) return RemWaitressEnemyContinuesJokeEN;
			else if(this.isRussian) return RemWaitressEnemyContinuesJokeRU;
			else if(this.isSChinese) return RemWaitressEnemyContinuesJokeSCH;
			else if(this.isTChinese) return RemWaitressEnemyContinuesJokeTCH;
			else if(this.isKorean) return RemWaitressEnemyContinuesJokeKR;
			else if(this.isSpanish) return RemWaitressEnemyContinuesJokeSP;
			return RemWaitressEnemyContinuesJokeEN;
		}, configurable: true
	},
	waitressBarEnemyHearsJoke: {
		get: function() {
			if(this.isJapanese) return RemWaitressEnemyHearsJokeJP;
			else if(this.isEnglish) return RemWaitressEnemyHearsJokeEN;
			else if(this.isRussian) return RemWaitressEnemyHearsJokeRU;
			else if(this.isSChinese) return RemWaitressEnemyHearsJokeSCH;
			else if(this.isTChinese) return RemWaitressEnemyHearsJokeTCH;
			else if(this.isKorean) return RemWaitressEnemyHearsJokeKR;
			else if(this.isSpanish) return RemWaitressEnemyHearsJokeSP;
			return RemWaitressEnemyHearsJokeEN;
		}, configurable: true
	},
	waitressBarEnemyLaughsJoke: {
		get: function() {
			if(this.isJapanese) return RemWaitressEnemyLaughsJokeJP;
			else if(this.isEnglish) return RemWaitressEnemyLaughsJokeEN;
			else if(this.isRussian) return RemWaitressEnemyLaughsJokeRU;
			else if(this.isSChinese) return RemWaitressEnemyLaughsJokeSCH;
			else if(this.isTChinese) return RemWaitressEnemyLaughsJokeTCH;
			else if(this.isKorean) return RemWaitressEnemyLaughsJokeKR;
			else if(this.isSpanish) return RemWaitressEnemyLaughsJokeSP;
			return RemWaitressEnemyLaughsJokeEN;
		}, configurable: true
	},
	waitressBarEnemyChugsDrink: {
		get: function() {
			if(this.isJapanese) return RemWaitressEnemyChugsDrinkJP;
			else if(this.isEnglish) return RemWaitressEnemyChugsDrinkEN;
			else if(this.isRussian) return RemWaitressEnemyChugsDrinkRU;
			else if(this.isSChinese) return RemWaitressEnemyChugsDrinkSCH;
			else if(this.isTChinese) return RemWaitressEnemyChugsDrinkTCH;
			else if(this.isKorean) return RemWaitressEnemyChugsDrinkKR;
			else if(this.isSpanish) return RemWaitressEnemyChugsDrinkSP;
			return RemWaitressEnemyChugsDrinkEN;
		}, configurable: true
	},
	waitressBarEnemyChugsDrinkFinish: {
		get: function() {
			if(this.isJapanese) return RemWaitressEnemyChugsDrinkFinishJP;
			else if(this.isEnglish) return RemWaitressEnemyChugsDrinkFinishEN;
			else if(this.isRussian) return RemWaitressEnemyChugsDrinkFinishRU;
			else if(this.isSChinese) return RemWaitressEnemyChugsDrinkFinishSCH;
			else if(this.isTChinese) return RemWaitressEnemyChugsDrinkFinishTCH;
			else if(this.isKorean) return RemWaitressEnemyChugsDrinkFinishKR;
			else if(this.isSpanish) return RemWaitressEnemyChugsDrinkFinishSP;
			return RemWaitressEnemyChugsDrinkFinishEN;
		}, configurable: true
	},
	waitressBarEnemyChatting: {
		get: function() {
			if(this.isJapanese) return RemWaitressEnemyChattingJP;
			else if(this.isEnglish) return RemWaitressEnemyChattingEN;
			else if(this.isRussian) return RemWaitressEnemyChattingRU;
			else if(this.isSChinese) return RemWaitressEnemyChattingSCH;
			else if(this.isTChinese) return RemWaitressEnemyChattingTCH;
			else if(this.isKorean) return RemWaitressEnemyChattingKR;
			else if(this.isSpanish) return RemWaitressEnemyChattingSP;
			return RemWaitressEnemyChattingEN;
		}, configurable: true
	},
	waitressBarEnemyChattingHimself: {
		get: function() {
			if(this.isJapanese) return RemWaitressEnemyChattingHimselfJP;
			else if(this.isEnglish) return RemWaitressEnemyChattingHimselfEN;
			else if(this.isRussian) return RemWaitressEnemyChattingHimselfRU;
			else if(this.isSChinese) return RemWaitressEnemyChattingHimselfSCH;
			else if(this.isTChinese) return RemWaitressEnemyChattingHimselfTCH;
			else if(this.isKorean) return RemWaitressEnemyChattingHimselfKR;
			else if(this.isSpanish) return RemWaitressEnemyChattingHimselfSP;
			return RemWaitressEnemyChattingHimselfEN;
		}, configurable: true
	},
	waitressBarEnemyStartSex: {
		get: function() {
			if(this.isJapanese) return RemWaitressEnemyStartSexJP;
			else if(this.isEnglish) return RemWaitressEnemyStartSexEN;
			else if(this.isRussian) return RemWaitressEnemyStartSexRU;
			else if(this.isSChinese) return RemWaitressEnemyStartSexSCH;
			else if(this.isTChinese) return RemWaitressEnemyStartSexTCH;
			else if(this.isKorean) return RemWaitressEnemyStartSexKR;
			else if(this.isSpanish) return RemWaitressEnemyStartSexSP;
			return RemWaitressEnemyStartSexEN;
		}, configurable: true
	},


	waitressEnemyRefillsKarrynMug: {
		get: function() {
			if(this.isJapanese) return RemWaitressEnemyRefillsKarrynMugJP;
			else if(this.isEnglish) return RemWaitressEnemyRefillsKarrynMugEN;
			else if(this.isRussian) return RemWaitressEnemyRefillsKarrynMugRU;
			else if(this.isSChinese) return RemWaitressEnemyRefillsKarrynMugSCH;
			else if(this.isTChinese) return RemWaitressEnemyRefillsKarrynMugTCH;
			else if(this.isKorean) return RemWaitressEnemyRefillsKarrynMugKR;
			else if(this.isSpanish) return RemWaitressEnemyRefillsKarrynMugSP;
			return RemWaitressEnemyRefillsKarrynMugEN;
		}, configurable: true
	},
	waitressEnemyDumpsKarrynMug: {
		get: function() {
			if(this.isJapanese) return RemWaitressEnemyDumpsKarrynMugJP;
			else if(this.isEnglish) return RemWaitressEnemyDumpsKarrynMugEN;
			else if(this.isRussian) return RemWaitressEnemyDumpsKarrynMugRU;
			else if(this.isSChinese) return RemWaitressEnemyDumpsKarrynMugSCH;
			else if(this.isTChinese) return RemWaitressEnemyDumpsKarrynMugTCH;
			else if(this.isKorean) return RemWaitressEnemyDumpsKarrynMugKR;
			else if(this.isSpanish) return RemWaitressEnemyDumpsKarrynMugSP;
			return RemWaitressEnemyDumpsKarrynMugEN;
		}, configurable: true
	},

	waitressDrinkSemenMug: {
		get: function() {
			if(this.isJapanese) return RemWaitressDrinkSemenMugJP;
			else if(this.isEnglish) return RemWaitressDrinkSemenMugEN;
			else if(this.isRussian) return RemWaitressDrinkSemenMugRU;
			else if(this.isSChinese) return RemWaitressDrinkSemenMugSCH;
			else if(this.isTChinese) return RemWaitressDrinkSemenMugTCH;
			else if(this.isKorean) return RemWaitressDrinkSemenMugKR;
			else if(this.isSpanish) return RemWaitressDrinkSemenMugSP;
			return RemWaitressDrinkSemenMugEN;
		}, configurable: true
	},


	waitressBarEnemyEntersBar: {
		get: function() {
			if(this.isJapanese) return RemWaitressEnemyEntersBarJP;
			else if(this.isEnglish) return RemWaitressEnemyEntersBarEN;
			else if(this.isRussian) return RemWaitressEnemyEntersBarRU;
			else if(this.isSChinese) return RemWaitressEnemyEntersBarSCH;
			else if(this.isTChinese) return RemWaitressEnemyEntersBarTCH;
			else if(this.isKorean) return RemWaitressEnemyEntersBarKR;
			else if(this.isSpanish) return RemWaitressEnemyEntersBarSP;
			return RemWaitressEnemyEntersBarEN;
		}, configurable: true
	},
	waitressBarEnemyFuming: {
		get: function() {
			if(this.isJapanese) return RemWaitressEnemyFumingJP;
			else if(this.isEnglish) return RemWaitressEnemyFumingEN;
			else if(this.isRussian) return RemWaitressEnemyFumingRU;
			else if(this.isSChinese) return RemWaitressEnemyFumingSCH;
			else if(this.isTChinese) return RemWaitressEnemyFumingTCH;
			else if(this.isKorean) return RemWaitressEnemyFumingKR;
			else if(this.isSpanish) return RemWaitressEnemyFumingSP;
			return RemWaitressEnemyFumingEN;
		}, configurable: true
	},

	receptionistNewVisitor: {
		get: function() {
			if(this.isJapanese) return RemReceptionistNewVisitorJP;
			else if(this.isEnglish) return RemReceptionistNewVisitorEN;
			else if(this.isRussian) return RemReceptionistNewVisitorRU;
			else if(this.isSChinese) return RemReceptionistNewVisitorSCH;
			else if(this.isTChinese) return RemReceptionistNewVisitorTCH;
			else if(this.isKorean) return RemReceptionistNewVisitorKR;
			else if(this.isSpanish) return RemReceptionistNewVisitorSP;
			return RemReceptionistNewVisitorEN;
		}, configurable: true
	},
	receptionistNewGoblin: {
		get: function() {
			if(this.isJapanese) return RemReceptionistNewGoblinJP;
			else if(this.isEnglish) return RemReceptionistNewGoblinEN;
			else if(this.isRussian) return RemReceptionistNewGoblinRU;
			else if(this.isSChinese) return RemReceptionistNewGoblinSCH;
			else if(this.isTChinese) return RemReceptionistNewGoblinTCH;
			else if(this.isKorean) return RemReceptionistNewGoblinKR;
			else if(this.isSpanish) return RemReceptionistNewGoblinSP;
			return RemReceptionistNewGoblinEN;
		}, configurable: true
	},
	receptionistGoblinDefeated: {
		get: function() {
			if(this.isJapanese) return RemReceptionistGoblinDefeatedJP;
			else if(this.isEnglish) return RemReceptionistGoblinDefeatedEN;
			else if(this.isRussian) return RemReceptionistGoblinDefeatedRU;
			else if(this.isSChinese) return RemReceptionistGoblinDefeatedSCH;
			else if(this.isTChinese) return RemReceptionistGoblinDefeatedTCH;
			else if(this.isKorean) return RemReceptionistGoblinDefeatedKR;
			else if(this.isSpanish) return RemReceptionistGoblinDefeatedSP;
			return RemReceptionistGoblinDefeatedEN;
		}, configurable: true
	},

	receptionistVisitorEntersVisitingRoom: {
		get: function() {
			if(this.isJapanese) return RemReceptionistVisitorEntersVisitingRoomJP;
			else if(this.isEnglish) return RemReceptionistVisitorEntersVisitingRoomEN;
			else if(this.isRussian) return RemReceptionistVisitorEntersVisitingRoomRU;
			else if(this.isSChinese) return RemReceptionistVisitorEntersVisitingRoomSCH;
			else if(this.isTChinese) return RemReceptionistVisitorEntersVisitingRoomTCH;
			else if(this.isKorean) return RemReceptionistVisitorEntersVisitingRoomKR;
			else if(this.isSpanish) return RemReceptionistVisitorEntersVisitingRoomSP;
			return RemReceptionistVisitorEntersVisitingRoomEN;
		}, configurable: true
	},
	receptionistVisitingRoomStatusOccupiedPlural: {
		get: function() {
			if(this.isJapanese) return RemReceptionistVisitingRoomStatusOccupiedPluralJP;
			else if(this.isEnglish) return RemReceptionistVisitingRoomStatusOccupiedPluralEN;
			else if(this.isRussian) return RemReceptionistVisitingRoomStatusOccupiedPluralRU;
			else if(this.isSChinese) return RemReceptionistVisitingRoomStatusOccupiedPluralSCH;
			else if(this.isTChinese) return RemReceptionistVisitingRoomStatusOccupiedPluralTCH;
			else if(this.isKorean) return RemReceptionistVisitingRoomStatusOccupiedPluralKR;
			else if(this.isSpanish) return RemReceptionistVisitingRoomStatusOccupiedPluralSP;
			return RemReceptionistVisitingRoomStatusOccupiedPluralEN;
		}, configurable: true
	},
	receptionistVisitingRoomStatusOccupiedSingle: {
		get: function() {
			if(this.isJapanese) return RemReceptionistVisitingRoomStatusOccupiedSingleJP;
			else if(this.isEnglish) return RemReceptionistVisitingRoomStatusOccupiedSingleEN;
			else if(this.isRussian) return RemReceptionistVisitingRoomStatusOccupiedSingleRU;
			else if(this.isSChinese) return RemReceptionistVisitingRoomStatusOccupiedSingleSCH;
			else if(this.isTChinese) return RemReceptionistVisitingRoomStatusOccupiedSingleTCH;
			else if(this.isKorean) return RemReceptionistVisitingRoomStatusOccupiedSingleKR;
			else if(this.isSpanish) return RemReceptionistVisitingRoomStatusOccupiedSingleSP;
			return RemReceptionistVisitingRoomStatusOccupiedSingleEN;
		}, configurable: true
	},
	receptionistVisitingRoomStatusNotOccupied: {
		get: function() {
			if(this.isJapanese) return RemReceptionistVisitingRoomStatusNotOccupiedJP;
			else if(this.isEnglish) return RemReceptionistVisitingRoomStatusNotOccupiedEN;
			else if(this.isRussian) return RemReceptionistVisitingRoomStatusNotOccupiedRU;
			else if(this.isSChinese) return RemReceptionistVisitingRoomStatusNotOccupiedSCH;
			else if(this.isTChinese) return RemReceptionistVisitingRoomStatusNotOccupiedTCH;
			else if(this.isKorean) return RemReceptionistVisitingRoomStatusNotOccupiedKR;
			else if(this.isSpanish) return RemReceptionistVisitingRoomStatusNotOccupiedSP;
			return RemReceptionistVisitingRoomStatusNotOccupiedEN;
		}, configurable: true
	},

	receptionistVisitorWantsToHandOverPaper: {
		get: function() {
			if(this.isJapanese) return RemReceptionistVisitorWantsToHandOverPaperJP;
			else if(this.isEnglish) return RemReceptionistVisitorWantsToHandOverPaperEN;
			else if(this.isRussian) return RemReceptionistVisitorWantsToHandOverPaperRU;
			else if(this.isSChinese) return RemReceptionistVisitorWantsToHandOverPaperSCH;
			else if(this.isTChinese) return RemReceptionistVisitorWantsToHandOverPaperTCH;
			else if(this.isKorean) return RemReceptionistVisitorWantsToHandOverPaperKR;
			else if(this.isSpanish) return RemReceptionistVisitorWantsToHandOverPaperSP;
			return RemReceptionistVisitorWantsToHandOverPaperEN;
		}, configurable: true
	},

	receptionistVisitorAngryComplaint_OccupiedVisitingRoom: {
		get: function() {
			if(this.isJapanese) return RemReceptionistVisitorAngryComplaint_OccupiedVisitingRoomJP;
			else if(this.isEnglish) return RemReceptionistVisitorAngryComplaint_OccupiedVisitingRoomEN;
			else if(this.isRussian) return RemReceptionistVisitorAngryComplaint_OccupiedVisitingRoomRU;
			else if(this.isSChinese) return RemReceptionistVisitorAngryComplaint_OccupiedVisitingRoomSCH;
			else if(this.isTChinese) return RemReceptionistVisitorAngryComplaint_OccupiedVisitingRoomTCH;
			else if(this.isKorean) return RemReceptionistVisitorAngryComplaint_OccupiedVisitingRoomKR;
			else if(this.isSpanish) return RemReceptionistVisitorAngryComplaint_OccupiedVisitingRoomSP;
			return RemReceptionistVisitorAngryComplaint_OccupiedVisitingRoomEN;
		}, configurable: true
	},
	receptionistGreetVisitorResultNormal: {
		get: function() {
			if(this.isJapanese) return RemReceptionistGreetVisitorResultNormalJP;
			else if(this.isEnglish) return RemReceptionistGreetVisitorResultNormalEN;
			else if(this.isRussian) return RemReceptionistGreetVisitorResultNormalRU;
			else if(this.isSChinese) return RemReceptionistGreetVisitorResultNormalSCH;
			else if(this.isTChinese) return RemReceptionistGreetVisitorResultNormalTCH;
			else if(this.isKorean) return RemReceptionistGreetVisitorResultNormalKR;
			else if(this.isSpanish) return RemReceptionistGreetVisitorResultNormalSP;
			return RemReceptionistGreetVisitorResultNormalEN;
		}, configurable: true
	},

	receptionistFinishedProcessingPapers: {
		get: function() {
			if(this.isJapanese) return RemReceptionistFinishedProcessingPapersJP;
			else if(this.isEnglish) return RemReceptionistFinishedProcessingPapersEN;
			else if(this.isRussian) return RemReceptionistFinishedProcessingPapersRU;
			else if(this.isSChinese) return RemReceptionistFinishedProcessingPapersSCH;
			else if(this.isTChinese) return RemReceptionistFinishedProcessingPapersTCH;
			else if(this.isKorean) return RemReceptionistFinishedProcessingPapersKR;
			else if(this.isSpanish) return RemReceptionistFinishedProcessingPapersSP;
			return RemReceptionistFinishedProcessingPapersEN;
		}, configurable: true
	},

	receptionistVisitorLeavesAngry: {
		get: function() {
			if(this.isJapanese) return RemReceptionistVisitorLeavesAngryJP;
			else if(this.isEnglish) return RemReceptionistVisitorLeavesAngryEN;
			else if(this.isRussian) return RemReceptionistVisitorLeavesAngryRU;
			else if(this.isSChinese) return RemReceptionistVisitorLeavesAngrySCH;
			else if(this.isTChinese) return RemReceptionistVisitorLeavesAngryTCH;
			else if(this.isKorean) return RemReceptionistVisitorLeavesAngryKR;
			else if(this.isSpanish) return RemReceptionistVisitorLeavesAngrySP;
			return RemReceptionistVisitorLeavesAngryEN;
		}, configurable: true
	},
	receptionistFanLeavesHappy: {
		get: function() {
			if(this.isJapanese) return RemReceptionistFanLeavesHappyJP;
			else if(this.isEnglish) return RemReceptionistFanLeavesHappyEN;
			else if(this.isRussian) return RemReceptionistFanLeavesHappyRU;
			else if(this.isSChinese) return RemReceptionistFanLeavesHappySCH;
			else if(this.isTChinese) return RemReceptionistFanLeavesHappyTCH;
			else if(this.isKorean) return RemReceptionistFanLeavesHappyKR;
			else if(this.isSpanish) return RemReceptionistFanLeavesHappySP;
			return RemReceptionistFanLeavesHappyEN;
		}, configurable: true
	},
	receptionistFanLeavesDejected: {
		get: function() {
			if(this.isJapanese) return RemReceptionistFanLeavesDejectedJP;
			else if(this.isEnglish) return RemReceptionistFanLeavesDejectedEN;
			else if(this.isRussian) return RemReceptionistFanLeavesDejectedRU;
			else if(this.isSChinese) return RemReceptionistFanLeavesDejectedSCH;
			else if(this.isTChinese) return RemReceptionistFanLeavesDejectedTCH;
			else if(this.isKorean) return RemReceptionistFanLeavesDejectedKR;
			else if(this.isSpanish) return RemReceptionistFanLeavesDejectedSP;
			return RemReceptionistFanLeavesDejectedEN;
		}, configurable: true
	},
	receptionistPervLeavesHappy: {
		get: function() {
			if(this.isJapanese) return RemReceptionistPervLeavesHappyJP;
			else if(this.isEnglish) return RemReceptionistPervLeavesHappyEN;
			else if(this.isRussian) return RemReceptionistPervLeavesHappyRU;
			else if(this.isSChinese) return RemReceptionistPervLeavesHappySCH;
			else if(this.isTChinese) return RemReceptionistPervLeavesHappyTCH;
			else if(this.isKorean) return RemReceptionistPervLeavesHappyKR;
			else if(this.isSpanish) return RemReceptionistPervLeavesHappySP;
			return RemReceptionistPervLeavesHappyEN;
		}, configurable: true
	},
	receptionistPervLeavesAngry: {
		get: function() {
			if(this.isJapanese) return RemReceptionistPervLeavesAngryJP;
			else if(this.isEnglish) return RemReceptionistPervLeavesAngryEN;
			else if(this.isRussian) return RemReceptionistPervLeavesAngryRU;
			else if(this.isSChinese) return RemReceptionistPervLeavesAngrySCH;
			else if(this.isTChinese) return RemReceptionistPervLeavesAngryTCH;
			else if(this.isKorean) return RemReceptionistPervLeavesAngryKR;
			else if(this.isSpanish) return RemReceptionistPervLeavesAngrySP;
			return RemReceptionistPervLeavesAngryEN;
		}, configurable: true
	},
	receptionistNotHereForVisitation: {
		get: function() {
			if(this.isJapanese) return RemReceptionistNotHereForVisitationJP;
			else if(this.isEnglish) return RemReceptionistNotHereForVisitationEN;
			else if(this.isRussian) return RemReceptionistNotHereForVisitationRU;
			else if(this.isSChinese) return RemReceptionistNotHereForVisitationSCH;
			else if(this.isTChinese) return RemReceptionistNotHereForVisitationTCH;
			else if(this.isKorean) return RemReceptionistNotHereForVisitationKR;
			else if(this.isSpanish) return RemReceptionistNotHereForVisitationSP;
			return RemReceptionistNotHereForVisitationEN;
		}, configurable: true
	},



	gloryBattleEnd: {
		get: function() {
			if(this.isJapanese) return RemGloryBattleEndJP;
			else if(this.isEnglish) return RemGloryBattleEndEN;
			else if(this.isRussian) return RemGloryBattleEndRU;
			else if(this.isSChinese) return RemGloryBattleEndSCH;
			else if(this.isTChinese) return RemGloryBattleEndTCH;
			else if(this.isKorean) return RemGloryBattleEndKR;
			else if(this.isSpanish) return RemGloryBattleEndSP;
			return RemGloryBattleEndEN;
		}, configurable: true
	},
	gloryLeftStallCockName: {
		get: function() {
			if(this.isJapanese) return RemGloryLeftStallCockNameJP;
			else if(this.isEnglish) return RemGloryLeftStallCockNameEN;
			else if(this.isRussian) return RemGloryLeftStallCockNameRU;
			else if(this.isSChinese) return RemGloryLeftStallCockNameSCH;
			else if(this.isTChinese) return RemGloryLeftStallCockNameTCH;
			else if(this.isKorean) return RemGloryLeftStallCockNameKR;
			else if(this.isSpanish) return RemGloryLeftStallCockNameSP;
			return RemGloryLeftStallCockNameEN;
		}, configurable: true
	},
	gloryRightStallCockName: {
		get: function() {
			if(this.isJapanese) return RemGloryRightStallCockNameJP;
			else if(this.isEnglish) return RemGloryRightStallCockNameEN;
			else if(this.isRussian) return RemGloryRightStallCockNameRU;
			else if(this.isSChinese) return RemGloryRightStallCockNameSCH;
			else if(this.isTChinese) return RemGloryRightStallCockNameTCH;
			else if(this.isKorean) return RemGloryRightStallCockNameKR;
			else if(this.isSpanish) return RemGloryRightStallCockNameSP;
			return RemGloryRightStallCockNameEN;
		}, configurable: true
	},
	gloryGuestEnterBathroom: {
		get: function() {
			if(this.isJapanese) return RemGloryGuestEnterBathroomJP;
			else if(this.isEnglish) return RemGloryGuestEnterBathroomEN;
			else if(this.isRussian) return RemGloryGuestEnterBathroomRU;
			else if(this.isSChinese) return RemGloryGuestEnterBathroomSCH;
			else if(this.isTChinese) return RemGloryGuestEnterBathroomTCH;
			else if(this.isKorean) return RemGloryGuestEnterBathroomKR;
			else if(this.isSpanish) return RemGloryGuestEnterBathroomSP;
			return RemGloryGuestEnterBathroomEN;
		}, configurable: true
	},
	gloryGuestLeaveBathroom: {
		get: function() {
			if(this.isJapanese) return RemGloryGuestLeaveBathroomJP;
			else if(this.isEnglish) return RemGloryGuestLeaveBathroomEN;
			else if(this.isRussian) return RemGloryGuestLeaveBathroomRU;
			else if(this.isSChinese) return RemGloryGuestLeaveBathroomSCH;
			else if(this.isTChinese) return RemGloryGuestLeaveBathroomTCH;
			else if(this.isKorean) return RemGloryGuestLeaveBathroomKR;
			else if(this.isSpanish) return RemGloryGuestLeaveBathroomSP;
			return RemGloryGuestLeaveBathroomEN;
		}, configurable: true
	},
	gloryGuestEnterLeftStall: {
		get: function() {
			if(this.isJapanese) return RemGloryGuestEnterLeftStallJP;
			else if(this.isEnglish) return RemGloryGuestEnterLeftStallEN;
			else if(this.isRussian) return RemGloryGuestEnterLeftStallRU;
			else if(this.isSChinese) return RemGloryGuestEnterLeftStallSCH;
			else if(this.isTChinese) return RemGloryGuestEnterLeftStallTCH;
			else if(this.isKorean) return RemGloryGuestEnterLeftStallKR;
			else if(this.isSpanish) return RemGloryGuestEnterLeftStallSP;
			return RemGloryGuestEnterLeftStallEN;
		}, configurable: true
	},
	gloryGuestLeaveLeftStall: {
		get: function() {
			if(this.isJapanese) return RemGloryGuestLeaveLeftStallJP;
			else if(this.isEnglish) return RemGloryGuestLeaveLeftStallEN;
			else if(this.isRussian) return RemGloryGuestLeaveLeftStallRU;
			else if(this.isSChinese) return RemGloryGuestLeaveLeftStallSCH;
			else if(this.isTChinese) return RemGloryGuestLeaveLeftStallTCH;
			else if(this.isKorean) return RemGloryGuestLeaveLeftStallKR;
			else if(this.isSpanish) return RemGloryGuestLeaveLeftStallSP;
			return RemGloryGuestLeaveLeftStallEN;
		}, configurable: true
	},
	gloryGuestEnterRightStall: {
		get: function() {
			if(this.isJapanese) return RemGloryGuestEnterRightStallJP;
			else if(this.isEnglish) return RemGloryGuestEnterRightStallEN;
			else if(this.isRussian) return RemGloryGuestEnterRightStallRU;
			else if(this.isSChinese) return RemGloryGuestEnterRightStallSCH;
			else if(this.isTChinese) return RemGloryGuestEnterRightStallTCH;
			else if(this.isKorean) return RemGloryGuestEnterRightStallKR;
			else if(this.isSpanish) return RemGloryGuestEnterRightStallSP;
			return RemGloryGuestEnterRightStallEN;
		}, configurable: true
	},
	gloryGuestLeaveRightStall: {
		get: function() {
			if(this.isJapanese) return RemGloryGuestLeaveRightStallJP;
			else if(this.isEnglish) return RemGloryGuestLeaveRightStallEN;
			else if(this.isRussian) return RemGloryGuestLeaveRightStallRU;
			else if(this.isSChinese) return RemGloryGuestLeaveRightStallSCH;
			else if(this.isTChinese) return RemGloryGuestLeaveRightStallTCH;
			else if(this.isKorean) return RemGloryGuestLeaveRightStallKR;
			else if(this.isSpanish) return RemGloryGuestLeaveRightStallSP;
			return RemGloryGuestLeaveRightStallEN;
		}, configurable: true
	},
	gloryGuestPissingLeftStall: {
		get: function() {
			if(this.isJapanese) return RemGloryGuestPissingLeftStallJP;
			else if(this.isEnglish) return RemGloryGuestPissingLeftStallEN;
			else if(this.isRussian) return RemGloryGuestPissingLeftStallRU;
			else if(this.isSChinese) return RemGloryGuestPissingLeftStallSCH;
			else if(this.isTChinese) return RemGloryGuestPissingLeftStallTCH;
			else if(this.isKorean) return RemGloryGuestPissingLeftStallKR;
			else if(this.isSpanish) return RemGloryGuestPissingLeftStallSP;
			return RemGloryGuestPissingLeftStallEN;
		}, configurable: true
	},
	gloryGuestEatingLeftStall: {
		get: function() {
			if(this.isJapanese) return RemGloryGuestEatingLeftStallJP;
			else if(this.isEnglish) return RemGloryGuestEatingLeftStallEN;
			else if(this.isRussian) return RemGloryGuestEatingLeftStallRU;
			else if(this.isSChinese) return RemGloryGuestEatingLeftStallSCH;
			else if(this.isTChinese) return RemGloryGuestEatingLeftStallTCH;
			else if(this.isKorean) return RemGloryGuestEatingLeftStallKR;
			else if(this.isSpanish) return RemGloryGuestEatingLeftStallSP;
			return RemGloryGuestEatingLeftStallEN;
		}, configurable: true
	},
	gloryGuestPissingRightStall: {
		get: function() {
			if(this.isJapanese) return RemGloryGuestPissingRightStallJP;
			else if(this.isEnglish) return RemGloryGuestPissingRightStallEN;
			else if(this.isRussian) return RemGloryGuestPissingRightStallRU;
			else if(this.isSChinese) return RemGloryGuestPissingRightStallSCH;
			else if(this.isTChinese) return RemGloryGuestPissingRightStallTCH;
			else if(this.isKorean) return RemGloryGuestPissingRightStallKR;
			else if(this.isSpanish) return RemGloryGuestPissingRightStallSP;
			return RemGloryGuestPissingRightStallEN;
		}, configurable: true
	},
	gloryGuestEatingRightStall: {
		get: function() {
			if(this.isJapanese) return RemGloryGuestEatingRightStallJP;
			else if(this.isEnglish) return RemGloryGuestEatingRightStallEN;
			else if(this.isRussian) return RemGloryGuestEatingRightStallRU;
			else if(this.isSChinese) return RemGloryGuestEatingRightStallSCH;
			else if(this.isTChinese) return RemGloryGuestEatingRightStallTCH;
			else if(this.isKorean) return RemGloryGuestEatingRightStallKR;
			else if(this.isSpanish) return RemGloryGuestEatingRightStallSP;
			return RemGloryGuestEatingRightStallEN;
		}, configurable: true
	},
	gloryGuestShowedThroughLeftHole: {
		get: function() {
			if(this.isJapanese) return RemGloryGuestShowedThroughLeftHoleJP;
			else if(this.isEnglish) return RemGloryGuestShowedThroughLeftHoleEN;
			else if(this.isRussian) return RemGloryGuestShowedThroughLeftHoleRU;
			else if(this.isSChinese) return RemGloryGuestShowedThroughLeftHoleSCH;
			else if(this.isTChinese) return RemGloryGuestShowedThroughLeftHoleTCH;
			else if(this.isKorean) return RemGloryGuestShowedThroughLeftHoleKR;
			else if(this.isSpanish) return RemGloryGuestShowedThroughLeftHoleSP;
			return RemGloryGuestShowedThroughLeftHoleEN;
		}, configurable: true
	},
	gloryGuestShowedThroughRightHole: {
		get: function() {
			if(this.isJapanese) return RemGloryGuestShowedThroughRightHoleJP;
			else if(this.isEnglish) return RemGloryGuestShowedThroughRightHoleEN;
			else if(this.isRussian) return RemGloryGuestShowedThroughRightHoleRU;
			else if(this.isSChinese) return RemGloryGuestShowedThroughRightHoleSCH;
			else if(this.isTChinese) return RemGloryGuestShowedThroughRightHoleTCH;
			else if(this.isKorean) return RemGloryGuestShowedThroughRightHoleKR;
			else if(this.isSpanish) return RemGloryGuestShowedThroughRightHoleSP;
			return RemGloryGuestShowedThroughRightHoleEN;
		}, configurable: true
	},


	stripperBattleEnd: {
		get: function() {
			if(this.isJapanese) return RemStripperBattleEndJP;
			else if(this.isEnglish) return RemStripperBattleEndEN;
			else if(this.isRussian) return RemStripperBattleEndRU;
			else if(this.isSChinese) return RemStripperBattleEndSCH;
			else if(this.isTChinese) return RemStripperBattleEndTCH;
			else if(this.isKorean) return RemStripperBattleEndKR;
			else if(this.isSpanish) return RemStripperBattleEndSP;
			return RemStripperBattleEndEN;
		}, configurable: true
	},
	RemStripperEnemyTossCondomOntoStage: {
		get: function() {
			if(this.isJapanese) return RemStripperEnemyTossCondomOntoStageJP;
			else if(this.isEnglish) return RemStripperEnemyTossCondomOntoStageEN;
			else if(this.isRussian) return RemStripperEnemyTossCondomOntoStageRU;
			else if(this.isSChinese) return RemStripperEnemyTossCondomOntoStageSCH;
			else if(this.isTChinese) return RemStripperEnemyTossCondomOntoStageTCH;
			else if(this.isKorean) return RemStripperEnemyTossCondomOntoStageKR;
			else if(this.isSpanish) return RemStripperEnemyTossCondomOntoStageSP;
			return RemStripperEnemyTossCondomOntoStageEN;
		}, configurable: true
	},
	RemStripperEnemyTipsCondomToBelt: {
		get: function() {
			if(this.isJapanese) return RemStripperEnemyTipsCondomToBeltJP;
			else if(this.isEnglish) return RemStripperEnemyTipsCondomToBeltEN;
			else if(this.isRussian) return RemStripperEnemyTipsCondomToBeltRU;
			else if(this.isSChinese) return RemStripperEnemyTipsCondomToBeltSCH;
			else if(this.isTChinese) return RemStripperEnemyTipsCondomToBeltTCH;
			else if(this.isKorean) return RemStripperEnemyTipsCondomToBeltKR;
			else if(this.isSpanish) return RemStripperEnemyTipsCondomToBeltSP;
			return RemStripperEnemyTipsCondomToBeltEN;
		}, configurable: true
	},
	RemStripperEnemyTipsCondomToBra: {
		get: function() {
			if(this.isJapanese) return RemStripperEnemyTipsCondomToBraJP;
			else if(this.isEnglish) return RemStripperEnemyTipsCondomToBraEN;
			else if(this.isRussian) return RemStripperEnemyTipsCondomToBraRU;
			else if(this.isSChinese) return RemStripperEnemyTipsCondomToBraSCH;
			else if(this.isTChinese) return RemStripperEnemyTipsCondomToBraTCH;
			else if(this.isKorean) return RemStripperEnemyTipsCondomToBraKR;
			else if(this.isSpanish) return RemStripperEnemyTipsCondomToBraSP;
			return RemStripperEnemyTipsCondomToBraEN;
		}, configurable: true
	},
	RemStripperEnemyTipsCondomToNipple: {
		get: function() {
			if(this.isJapanese) return RemStripperEnemyTipsCondomToNippleJP;
			else if(this.isEnglish) return RemStripperEnemyTipsCondomToNippleEN;
			else if(this.isRussian) return RemStripperEnemyTipsCondomToNippleRU;
			else if(this.isSChinese) return RemStripperEnemyTipsCondomToNippleSCH;
			else if(this.isTChinese) return RemStripperEnemyTipsCondomToNippleTCH;
			else if(this.isKorean) return RemStripperEnemyTipsCondomToNippleKR;
			else if(this.isSpanish) return RemStripperEnemyTipsCondomToNippleSP;
			return RemStripperEnemyTipsCondomToNippleEN;
		}, configurable: true
	},
	RemStripperEnemyTipsCondomToHairband: {
		get: function() {
			if(this.isJapanese) return RemStripperEnemyTipsCondomToHairbandJP;
			else if(this.isEnglish) return RemStripperEnemyTipsCondomToHairbandEN;
			else if(this.isRussian) return RemStripperEnemyTipsCondomToHairbandRU;
			else if(this.isSChinese) return RemStripperEnemyTipsCondomToHairbandSCH;
			else if(this.isTChinese) return RemStripperEnemyTipsCondomToHairbandTCH;
			else if(this.isKorean) return RemStripperEnemyTipsCondomToHairbandKR;
			else if(this.isSpanish) return RemStripperEnemyTipsCondomToHairbandSP;
			return RemStripperEnemyTipsCondomToHairbandEN;
		}, configurable: true
	},
	RemStripperEnemyTipsCondomToSidetail: {
		get: function() {
			if(this.isJapanese) return RemStripperEnemyTipsCondomToSidetailJP;
			else if(this.isEnglish) return RemStripperEnemyTipsCondomToSidetailEN;
			else if(this.isRussian) return RemStripperEnemyTipsCondomToSidetailRU;
			else if(this.isSChinese) return RemStripperEnemyTipsCondomToSidetailSCH;
			else if(this.isTChinese) return RemStripperEnemyTipsCondomToSidetailTCH;
			else if(this.isKorean) return RemStripperEnemyTipsCondomToSidetailKR;
			else if(this.isSpanish) return RemStripperEnemyTipsCondomToSidetailSP;
			return RemStripperEnemyTipsCondomToSidetailEN;
		}, configurable: true
	},
	RemStripperEnemyLeavesStripClubHappy: {
		get: function() {
			if(this.isJapanese) return RemStripperEnemyLeavesStripClubHappyJP;
			else if(this.isEnglish) return RemStripperEnemyLeavesStripClubHappyEN;
			else if(this.isRussian) return RemStripperEnemyLeavesStripClubHappyRU;
			else if(this.isSChinese) return RemStripperEnemyLeavesStripClubHappySCH;
			else if(this.isTChinese) return RemStripperEnemyLeavesStripClubHappyTCH;
			else if(this.isKorean) return RemStripperEnemyLeavesStripClubHappyKR;
			else if(this.isSpanish) return RemStripperEnemyLeavesStripClubHappySP;
			return RemStripperEnemyLeavesStripClubHappyEN;
		}, configurable: true
	},
	RemStripperEnemyLeavesStripClubUnhappy: {
		get: function() {
			if(this.isJapanese) return RemStripperEnemyLeavesStripClubUnhappyJP;
			else if(this.isEnglish) return RemStripperEnemyLeavesStripClubUnhappyEN;
			else if(this.isRussian) return RemStripperEnemyLeavesStripClubUnhappyRU;
			else if(this.isSChinese) return RemStripperEnemyLeavesStripClubUnhappySCH;
			else if(this.isTChinese) return RemStripperEnemyLeavesStripClubUnhappyTCH;
			else if(this.isKorean) return RemStripperEnemyLeavesStripClubUnhappyKR;
			else if(this.isSpanish) return RemStripperEnemyLeavesStripClubUnhappySP;
			return RemStripperEnemyLeavesStripClubUnhappyEN;
		}, configurable: true
	},
	RemStripperEnemyEntersStripClub: {
		get: function() {
			if(this.isJapanese) return RemStripperEnemyEntersStripClubJP;
			else if(this.isEnglish) return RemStripperEnemyEntersStripClubEN;
			else if(this.isRussian) return RemStripperEnemyEntersStripClubRU;
			else if(this.isSChinese) return RemStripperEnemyEntersStripClubSCH;
			else if(this.isTChinese) return RemStripperEnemyEntersStripClubTCH;
			else if(this.isKorean) return RemStripperEnemyEntersStripClubKR;
			else if(this.isSpanish) return RemStripperEnemyEntersStripClubSP;
			return RemStripperEnemyEntersStripClubEN;
		}, configurable: true
	},
	RemStripperEnemyJoinVIPSingular: {
		get: function() {
			if(this.isJapanese) return RemStripperEnemyJoinVIPSingularJP;
			else if(this.isEnglish) return RemStripperEnemyJoinVIPSingularEN;
			else if(this.isRussian) return RemStripperEnemyJoinVIPSingularRU;
			else if(this.isSChinese) return RemStripperEnemyJoinVIPSingularSCH;
			else if(this.isTChinese) return RemStripperEnemyJoinVIPSingularTCH;
			else if(this.isKorean) return RemStripperEnemyJoinVIPSingularKR;
			else if(this.isSpanish) return RemStripperEnemyJoinVIPSingularSP;
			return RemStripperEnemyJoinVIPSingularEN;
		}, configurable: true
	},
	RemStripperEnemyJoinVIPPlural: {
		get: function() {
			if(this.isJapanese) return RemStripperEnemyJoinVIPPluralJP;
			else if(this.isEnglish) return RemStripperEnemyJoinVIPPluralEN;
			else if(this.isRussian) return RemStripperEnemyJoinVIPPluralRU;
			else if(this.isSChinese) return RemStripperEnemyJoinVIPPluralSCH;
			else if(this.isTChinese) return RemStripperEnemyJoinVIPPluralTCH;
			else if(this.isKorean) return RemStripperEnemyJoinVIPPluralKR;
			else if(this.isSpanish) return RemStripperEnemyJoinVIPPluralSP;
			return RemStripperEnemyJoinVIPPluralEN;
		}, configurable: true
	},

	RemTrainerEnemyObserveFormExcellent: {
		get: function() {
			if(this.isJapanese) return RemTrainerEnemyObserveFormExcellentJP;
			else if(this.isEnglish) return RemTrainerEnemyObserveFormExcellentEN;
			else {
				try {
					if(this.isRussian) return RemTrainerEnemyObserveFormExcellentRU;
					else if(this.isSChinese) return RemTrainerEnemyObserveFormExcellentSCH;
					else if(this.isTChinese) return RemTrainerEnemyObserveFormExcellentTCH;
					else if(this.isKorean) return RemTrainerEnemyObserveFormExcellentKR;
					else if(this.isSpanish) return RemTrainerEnemyObserveFormExcellentSP;
				} catch(e) {}
			}
			return RemTrainerEnemyObserveFormExcellentEN;
		}, configurable: true
	},
	RemTrainerEnemyObserveFormGood: {
		get: function() {
			if(this.isJapanese) return RemTrainerEnemyObserveFormGoodJP;
			else if(this.isEnglish) return RemTrainerEnemyObserveFormGoodEN;
			else {
				try {
					if(this.isRussian) return RemTrainerEnemyObserveFormGoodRU;
					else if(this.isSChinese) return RemTrainerEnemyObserveFormGoodSCH;
					else if(this.isTChinese) return RemTrainerEnemyObserveFormGoodTCH;
					else if(this.isKorean) return RemTrainerEnemyObserveFormGoodKR;
					else if(this.isSpanish) return RemTrainerEnemyObserveFormGoodSP;
				} catch(e) {}
			}
			return RemTrainerEnemyObserveFormGoodEN;
		}, configurable: true
	},
	RemTrainerEnemyObserveFormOkay: {
		get: function() {
			if(this.isJapanese) return RemTrainerEnemyObserveFormOkayJP;
			else if(this.isEnglish) return RemTrainerEnemyObserveFormOkayEN;
			else {
				try {
					if(this.isRussian) return RemTrainerEnemyObserveFormOkayRU;
					else if(this.isSChinese) return RemTrainerEnemyObserveFormOkaySCH;
					else if(this.isTChinese) return RemTrainerEnemyObserveFormOkayTCH;
					else if(this.isKorean) return RemTrainerEnemyObserveFormOkayKR;
					else if(this.isSpanish) return RemTrainerEnemyObserveFormOkaySP;
				} catch(e) {}
			}
			return RemTrainerEnemyObserveFormOkayEN;
		}, configurable: true
	},
	RemTrainerEnemyObserveFormPoor: {
		get: function() {
			if(this.isJapanese) return RemTrainerEnemyObserveFormPoorJP;
			else if(this.isEnglish) return RemTrainerEnemyObserveFormPoorEN;
			else {
				try {
					if(this.isRussian) return RemTrainerEnemyObserveFormPoorRU;
					else if(this.isSChinese) return RemTrainerEnemyObserveFormPoorSCH;
					else if(this.isTChinese) return RemTrainerEnemyObserveFormPoorTCH;
					else if(this.isKorean) return RemTrainerEnemyObserveFormPoorKR;
					else if(this.isSpanish) return RemTrainerEnemyObserveFormPoorSP;
				} catch(e) {}
			}
			return RemTrainerEnemyObserveFormPoorEN;
		}, configurable: true
	},
	RemTrainerEnemyObserveFormBad: {
		get: function() {
			if(this.isJapanese) return RemTrainerEnemyObserveFormBadJP;
			else if(this.isEnglish) return RemTrainerEnemyObserveFormBadEN;
			else {
				try {
					if(this.isRussian) return RemTrainerEnemyObserveFormBadRU;
					else if(this.isSChinese) return RemTrainerEnemyObserveFormBadSCH;
					else if(this.isTChinese) return RemTrainerEnemyObserveFormBadTCH;
					else if(this.isKorean) return RemTrainerEnemyObserveFormBadKR;
					else if(this.isSpanish) return RemTrainerEnemyObserveFormBadSP;
				} catch(e) {}
			}
			return RemTrainerEnemyObserveFormBadEN;
		}, configurable: true
	},
	RemTrainerEnemyObserveFormMax: {
		get: function() {
			if(this.isJapanese) return RemTrainerEnemyObserveFormMaxJP;
			else if(this.isEnglish) return RemTrainerEnemyObserveFormMaxEN;
			else {
				try {
					if(this.isRussian) return RemTrainerEnemyObserveFormMaxRU;
					else if(this.isSChinese) return RemTrainerEnemyObserveFormMaxSCH;
					else if(this.isTChinese) return RemTrainerEnemyObserveFormMaxTCH;
					else if(this.isKorean) return RemTrainerEnemyObserveFormMaxKR;
					else if(this.isSpanish) return RemTrainerEnemyObserveFormMaxSP;
				} catch(e) {}
			}
			return RemTrainerEnemyObserveFormMaxEN;
		}, configurable: true
	},
	RemTrainerEnemyObserveStaminaTired: {
		get: function() {
			if(this.isJapanese) return RemTrainerEnemyObserveStaminaTiredJP;
			else if(this.isEnglish) return RemTrainerEnemyObserveStaminaTiredEN;
			else {
				try {
					if(this.isRussian) return RemTrainerEnemyObserveStaminaTiredRU;
					else if(this.isSChinese) return RemTrainerEnemyObserveStaminaTiredSCH;
					else if(this.isTChinese) return RemTrainerEnemyObserveStaminaTiredTCH;
					else if(this.isKorean) return RemTrainerEnemyObserveStaminaTiredKR;
					else if(this.isSpanish) return RemTrainerEnemyObserveStaminaTiredSP;
				} catch(e) {}
			}
			return RemTrainerEnemyObserveStaminaTiredEN;
		}, configurable: true
	},
	RemTrainerEnemyObserveStaminaExhausted: {
		get: function() {
			if(this.isJapanese) return RemTrainerEnemyObserveStaminaExhaustedJP;
			else if(this.isEnglish) return RemTrainerEnemyObserveStaminaExhaustedEN;
			else {
				try {
					if(this.isRussian) return RemTrainerEnemyObserveStaminaExhaustedRU;
					else if(this.isSChinese) return RemTrainerEnemyObserveStaminaExhaustedSCH;
					else if(this.isTChinese) return RemTrainerEnemyObserveStaminaExhaustedTCH;
					else if(this.isKorean) return RemTrainerEnemyObserveStaminaExhaustedKR;
					else if(this.isSpanish) return RemTrainerEnemyObserveStaminaExhaustedSP;
				} catch(e) {}
			}
			return RemTrainerEnemyObserveStaminaExhaustedEN;
		}, configurable: true
	},
	RemTrainerEnemyEntersGym: {
		get: function() {
			if(this.isJapanese) return RemTrainerEnemyEntersGymJP;
			else if(this.isEnglish) return RemTrainerEnemyEntersGymEN;
			else {
				try {
					if(this.isRussian) return RemTrainerEnemyEntersGymRU;
					else if(this.isSChinese) return RemTrainerEnemyEntersGymSCH;
					else if(this.isTChinese) return RemTrainerEnemyEntersGymTCH;
					else if(this.isKorean) return RemTrainerEnemyEntersGymKR;
					else if(this.isSpanish) return RemTrainerEnemyEntersGymSP;
				} catch(e) {}
			}
			return RemTrainerEnemyEntersGymEN;
		}, configurable: true
	},
	RemTrainerEnemyLeavesGymFinishedWorkout: {
		get: function() {
			if(this.isJapanese) return RemTrainerEnemyLeavesGymFinishedWorkoutJP;
			else if(this.isEnglish) return RemTrainerEnemyLeavesGymFinishedWorkoutEN;
			else {
				try {
					if(this.isRussian) return RemTrainerEnemyLeavesGymFinishedWorkoutRU;
					else if(this.isSChinese) return RemTrainerEnemyLeavesGymFinishedWorkoutSCH;
					else if(this.isTChinese) return RemTrainerEnemyLeavesGymFinishedWorkoutTCH;
					else if(this.isKorean) return RemTrainerEnemyLeavesGymFinishedWorkoutKR;
					else if(this.isSpanish) return RemTrainerEnemyLeavesGymFinishedWorkoutSP;
				} catch(e) {}
			}
			return RemTrainerEnemyLeavesGymFinishedWorkoutEN;
		}, configurable: true
	},
	RemTrainerEnemyLeavesGymFailedWorkout: {
		get: function() {
			if(this.isJapanese) return RemTrainerEnemyLeavesGymFailedWorkoutJP;
			else if(this.isEnglish) return RemTrainerEnemyLeavesGymFailedWorkoutEN;
			else {
				try {
					if(this.isRussian) return RemTrainerEnemyLeavesGymFailedWorkoutRU;
					else if(this.isSChinese) return RemTrainerEnemyLeavesGymFailedWorkoutSCH;
					else if(this.isTChinese) return RemTrainerEnemyLeavesGymFailedWorkoutTCH;
					else if(this.isKorean) return RemTrainerEnemyLeavesGymFailedWorkoutKR;
					else if(this.isSpanish) return RemTrainerEnemyLeavesGymFailedWorkoutSP;
				} catch(e) {}
			}
			return RemTrainerEnemyLeavesGymFailedWorkoutEN;
		}, configurable: true
	},
	RemTrainerEnemyLeavesGymBlueballed: {
		get: function() {
			if(this.isJapanese) return RemTrainerEnemyLeavesGymBlueballedJP;
			else if(this.isEnglish) return RemTrainerEnemyLeavesGymBlueballedEN;
			else {
				try {
					if(this.isRussian) return RemTrainerEnemyLeavesGymBlueballedRU;
					else if(this.isSChinese) return RemTrainerEnemyLeavesGymBlueballedSCH;
					else if(this.isTChinese) return RemTrainerEnemyLeavesGymBlueballedTCH;
					else if(this.isKorean) return RemTrainerEnemyLeavesGymBlueballedKR;
					else if(this.isSpanish) return RemTrainerEnemyLeavesGymBlueballedSP;
				} catch(e) {}
			}
			return RemTrainerEnemyLeavesGymBlueballedEN;
		}, configurable: true
	},
	RemTrainerEnemyLeavesGymHappy: {
		get: function() {
			if(this.isJapanese) return RemTrainerEnemyLeavesGymHappyJP;
			else if(this.isEnglish) return RemTrainerEnemyLeavesGymHappyEN;
			else {
				try {
					if(this.isRussian) return RemTrainerEnemyLeavesGymHappyRU;
					else if(this.isSChinese) return RemTrainerEnemyLeavesGymHappySCH;
					else if(this.isTChinese) return RemTrainerEnemyLeavesGymHappyTCH;
					else if(this.isKorean) return RemTrainerEnemyLeavesGymHappyKR;
					else if(this.isSpanish) return RemTrainerEnemyLeavesGymHappySP;
				} catch(e) {}
			}
			return RemTrainerEnemyLeavesGymHappyEN;
		}, configurable: true
	},
	RemTrainerRinkanSpatsRipped: {
		get: function() {
			if(this.isJapanese) return RemTrainerRinkanSpatsRippedJP;
			else if(this.isEnglish) return RemTrainerRinkanSpatsRippedEN;
			else {
				try {
					if(this.isRussian) return RemTrainerRinkanSpatsRippedRU;
					else if(this.isSChinese) return RemTrainerRinkanSpatsRippedSCH;
					else if(this.isTChinese) return RemTrainerRinkanSpatsRippedTCH;
					else if(this.isKorean) return RemTrainerRinkanSpatsRippedKR;
					else if(this.isSpanish) return RemTrainerRinkanSpatsRippedSP;
				} catch(e) {}
			}
			return RemTrainerRinkanSpatsRippedEN;
		}, configurable: true
	},

	RemYanflyOptionsOptionsOn: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_OptionsOn_JP;
			else if(this.isEnglish) return RemYanflyOptions_OptionsOn_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_OptionsOn_RU;
					else if(this.isSChinese) return RemYanflyOptions_OptionsOn_SCH;
					else if(this.isTChinese) return RemYanflyOptions_OptionsOn_TCH;
					else if(this.isKorean) return RemYanflyOptions_OptionsOn_KR;
					else if(this.isSpanish) return RemYanflyOptions_OptionsOn_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_OptionsOn_EN;
		}, configurable: true
	},
	RemYanflyOptionsOptionsOff: {
		get: function() {
			if(this.isJapanese) return RemYanflyOptions_OptionsOff_JP;
			else if(this.isEnglish) return RemYanflyOptions_OptionsOff_EN;
			else {
				try {
					if(this.isRussian) return RemYanflyOptions_OptionsOff_RU;
					else if(this.isSChinese) return RemYanflyOptions_OptionsOff_SCH;
					else if(this.isTChinese) return RemYanflyOptions_OptionsOff_TCH;
					else if(this.isKorean) return RemYanflyOptions_OptionsOff_KR;
					else if(this.isSpanish) return RemYanflyOptions_OptionsOff_SP;
				} catch(e) {}
			}
			return RemYanflyOptions_OptionsOff_EN;
		}, configurable: true
	},



	midBattleEnemyReinforcement: {
		get: function() {
			if(this.isJapanese) return RemMidBattleEnemyReinforcementJP;
			else if(this.isEnglish) return RemMidBattleEnemyReinforcementEN;
			else if(this.isRussian) return RemMidBattleEnemyReinforcementRU;
			else if(this.isSChinese) return RemMidBattleEnemyReinforcementSCH;
			else if(this.isTChinese) return RemMidBattleEnemyReinforcementTCH;
			else if(this.isKorean) return RemMidBattleEnemyReinforcementKR;
			else if(this.isSpanish) return RemMidBattleEnemyReinforcementSP;
			return RemMidBattleEnemyReinforcementEN;
		}, configurable: true
	},
});


TextManager.param = function(paramId) {
	switch (paramId) {
	case 0:
		if(this.isJapanese) return MaxHPNameJP;
		else if(this.isEnglish) return MaxHPNameEN;
		else if(this.isRussian) return MaxHPNameRU;
		else if(this.isSChinese) return MaxHPNameSCH;
		else if(this.isTChinese) return MaxHPNameTCH;
		else if(this.isKorean) return MaxHPNameKR;
		else if(this.isSpanish) return MaxHPNameSP;

		return MaxHPNameEN;
	case 1:
		if(this.isJapanese) return MaxMPNameJP;
		else if(this.isEnglish) return MaxMPNameEN;
		else if(this.isRussian) return MaxMPNameRU;
		else if(this.isSChinese) return MaxMPNameSCH;
		else if(this.isTChinese) return MaxMPNameTCH;
		else if(this.isKorean) return MaxMPNameKR;
		else if(this.isSpanish) return MaxMPNameSP;

		return MaxMPNameEN;
	case 2:
		if(this.isJapanese) return AtkNameJP;
		else if(this.isEnglish) return AtkNameEN;
		else if(this.isRussian) return AtkNameRU;
		else if(this.isSChinese) return AtkNameSCH;
		else if(this.isTChinese) return AtkNameTCH;
		else if(this.isKorean) return AtkNameKR;
		else if(this.isSpanish) return AtkNameSP;

		return AtkNameEN;
	case 3:
		if(this.isJapanese) return DefNameJP;
		else if(this.isEnglish) return DefNameEN;
		else if(this.isRussian) return DefNameRU;
		else if(this.isSChinese) return DefNameSCH;
		else if(this.isTChinese) return DefNameTCH;
		else if(this.isKorean) return DefNameKR;
		else if(this.isSpanish) return DefNameSP;

		return DefNameEN;
	case 4:
		if(this.isJapanese) return MatNameJP;
		else if(this.isEnglish) return MatNameEN;
		else if(this.isRussian) return MatNameRU;
		else if(this.isSChinese) return MatNameSCH;
		else if(this.isTChinese) return MatNameTCH;
		else if(this.isKorean) return MatNameKR;
		else if(this.isSpanish) return MatNameSP;

		return MatNameEN;
	case 5:
		if(this.isJapanese) return MdfNameJP;
		else if(this.isEnglish) return MdfNameEN;
		else if(this.isRussian) return MdfNameRU;
		else if(this.isSChinese) return MdfNameSCH;
		else if(this.isTChinese) return MdfNameTCH;
		else if(this.isKorean) return MdfNameKR;
		else if(this.isSpanish) return MdfNameSP;

		return MdfNameEN;
	case 6:
		if(this.isJapanese) return AgiNameJP;
		else if(this.isEnglish) return AgiNameEN;
		else if(this.isRussian) return AgiNameRU;
		else if(this.isSChinese) return AgiNameSCH;
		else if(this.isTChinese) return AgiNameTCH;
		else if(this.isKorean) return AgiNameKR;
		else if(this.isSpanish) return AgiNameSP;

		return AgiNameEN;
	case 7:
		if(this.isJapanese) return LukNameJP;
		else if(this.isEnglish) return LukNameEN;
		else if(this.isRussian) return LukNameRU;
		else if(this.isSChinese) return LukNameSCH;
		else if(this.isTChinese) return LukNameTCH;
		else if(this.isKorean) return LukNameKR;
		else if(this.isSpanish) return LukNameSP;

		return LukNameEN;
	}

	return $dataSystem.terms.param[basicId] || '';
};

TextManager.xparam = function(paramId) {
	if(this.isJapanese) return XParamNameJP[paramId];
	else if(this.isEnglish) return XParamNameEN[paramId];
	else if(this.isRussian) return XParamNameRU[paramId];
	else if(this.isSChinese) return XParamNameSCH[paramId];
	else if(this.isTChinese) return XParamNameTCH[paramId];
	else if(this.isKorean) return XParamNameKR[paramId];
	else if(this.isSpanish) return XParamNameSP[paramId];
	return XParamNameEN[paramId];
};

TextManager.sparam = function(paramId) {
	if(this.isJapanese) return SParamNameJP[paramId];
	else if(this.isEnglish) return SParamNameEN[paramId];
	else if(this.isRussian) return SParamNameRU[paramId];
	else if(this.isSChinese) return SParamNameSCH[paramId];
	else if(this.isTChinese) return SParamNameTCH[paramId];
	else if(this.isKorean) return SParamNameKR[paramId];
	else if(this.isSpanish) return SParamNameSP[paramId];
	return SParamNameEN[paramId];
};

TextManager.passiveCategory = function(catNum) {
	if(this.isJapanese) return PassiveCategoryNameJP[catNum];
	else if(this.isEnglish) return PassiveCategoryNameEN[catNum];
	else if(this.isRussian) return PassiveCategoryNameRU[catNum];
	else if(this.isSChinese) return PassiveCategoryNameSCH[catNum];
	else if(this.isTChinese) return PassiveCategoryNameTCH[catNum];
	else if(this.isKorean) return PassiveCategoryNameKR[catNum];
	else if(this.isSpanish) return PassiveCategoryNameSP[catNum];
	return PassiveCategoryNameEN[catNum];
};


TextManager.basic = function(basicId) {
	switch (basicId) {
	case 0:
		if(this.isJapanese)
			return LevelNameJP;
		else if(this.isEnglish)
			return LevelNameEN;
		else if(this.isRussian)
			return LevelNameRU;
		else if(this.isSChinese)
			return LevelNameSCH;
		else if(this.isTChinese)
			return LevelNameTCH;
		else if(this.isKorean)
			return LevelNameKR;
		else if(this.isSpanish)
			return LevelNameSP;

		return LevelNameEN;
	case 1:
		if(this.isJapanese)
			return LevelAbbrJP;
		else if(this.isEnglish)
			return LevelAbbrEN;
		else if(this.isRussian)
			return LevelAbbrRU;
		else if(this.isSChinese)
			return LevelAbbrSCH;
		else if(this.isTChinese)
			return LevelAbbrTCH;
		else if(this.isKorean)
			return LevelAbbrKR;
		else if(this.isSpanish)
			return LevelAbbrSP;

		return LevelAbbrEN;
	case 2:
		if(this.isJapanese)
			return HPNameJP;
		else if(this.isEnglish)
			return HPNameEN;
		else if(this.isRussian)
			return HPNameRU;
		else if(this.isSChinese)
			return HPNameSCH;
		else if(this.isTChinese)
			return HPNameTCH;
		else if(this.isKorean)
			return HPNameKR;
		else if(this.isSpanish)
			return HPNameSP;

		return HPNameEN;
	case 3:
		if(this.isJapanese)
			return HPAbbrJP;
		else if(this.isEnglish)
			return HPAbbrEN;
		else if(this.isRussian)
			return HPAbbrRU;
		else if(this.isSChinese)
			return HPAbbrSCH;
		else if(this.isTChinese)
			return HPAbbrTCH;
		else if(this.isKorean)
			return HPAbbrKR;
		else if(this.isSpanish)
			return HPAbbrSP;

		return HPAbbrEN;
	case 4:
		if(this.isJapanese)
			return MPNameJP;
		else if(this.isEnglish)
			return MPNameEN;
		else if(this.isRussian)
			return MPNameRU;
		else if(this.isSChinese)
			return MPNameSCH;
		else if(this.isTChinese)
			return MPNameTCH;
		else if(this.isKorean)
			return MPNameKR;
		else if(this.isSpanish)
			return MPNameSP;

		return MPNameEN;
	case 5:
		if(this.isJapanese)
			return MPAbbrJP;
		else if(this.isEnglish)
			return MPAbbrEN;
		else if(this.isRussian)
			return MPAbbrRU;
		else if(this.isSChinese)
			return MPAbbrSCH;
		else if(this.isTChinese)
			return MPAbbrTCH;
		else if(this.isKorean)
			return MPAbbrKR;
		else if(this.isSpanish)
			return MPAbbrSP;

		return MPAbbrEN;
	case 6:
		if(this.isJapanese)
			return TPNameJP;
		else if(this.isEnglish)
			return TPNameEN;
		else if(this.isRussian)
			return TPNameRU;
		else if(this.isSChinese)
			return TPNameSCH;
		else if(this.isTChinese)
			return TPNameTCH;
		else if(this.isKorean)
			return TPNameKR;
		else if(this.isSpanish)
			return TPNameSP;

		return TPNameEN;
	case 7:
		if(this.isJapanese)
			return TPAbbrJP;
		else if(this.isEnglish)
			return TPAbbrEN;
		else if(this.isRussian)
			return TPAbbrRU;
		else if(this.isSChinese)
			return TPAbbrSCH;
		else if(this.isTChinese)
			return TPAbbrTCH;
		else if(this.isKorean)
			return TPAbbrKR;
		else if(this.isSpanish)
			return TPAbbrSP;

		return TPAbbrEN;
	case 8:
		if(this.isJapanese)
			return EXPNameJP;
		else if(this.isEnglish)
			return EXPNameEN;
		else if(this.isRussian)
			return EXPNameRU;
		else if(this.isSChinese)
			return EXPNameSCH;
		else if(this.isTChinese)
			return EXPNameTCH;
		else if(this.isKorean)
			return EXPNameKR;
		else if(this.isSpanish)
			return EXPNameSP;

		return EXPNameEN;
	case 9:
		if(this.isJapanese)
			return EXPAbbrJP;
		else if(this.isEnglish)
			return EXPAbbrEN;
		else if(this.isRussian)
			return EXPAbbrRU;
		else if(this.isSChinese)
			return EXPAbbrSCH;
		else if(this.isTChinese)
			return EXPAbbrTCH;
		else if(this.isKorean)
			return EXPAbbrKR;
		else if(this.isSpanish)
			return EXPAbbrSP;

		return EXPAbbrEN;
	}

	return $dataSystem.terms.basic[basicId] || '';
};

TextManager.command = function(commandId) {
    switch (commandId) {
	case 0:
		if(this.isJapanese)
			return FightNameJP;
		else if(this.isEnglish)
			return FightNameEN;
		else if(this.isRussian)
			return FightNameRU;
		else if(this.isSChinese)
			return FightNameSCH;
		else if(this.isTChinese)
			return FightNameTCH;
		else if(this.isKorean)
			return FightNameKR;
		else if(this.isSpanish)
			return FightNameSP;

		return FightNameEN;
	case 1:
		if(this.isJapanese)
			return EscapeNameJP;
		else if(this.isEnglish)
			return EscapeNameEN;
		else if(this.isRussian)
			return EscapeNameRU;
		else if(this.isSChinese)
			return EscapeNameSCH;
		else if(this.isTChinese)
			return EscapeNameTCH;
		else if(this.isKorean)
			return EscapeNameKR;
		else if(this.isSpanish)
			return EscapeNameSP;

		return EscapeNameEN;
	case 2:
		if(this.isJapanese)
			return AttackNameJP;
		else if(this.isEnglish)
			return AttackNameEN;
		else if(this.isRussian)
			return AttackNameRU;
		else if(this.isSChinese)
			return AttackNameSCH;
		else if(this.isTChinese)
			return AttackNameTCH;
		else if(this.isKorean)
			return AttackNameKR;
		else if(this.isSpanish)
			return AttackNameSP;

		return AttackNameEN;
	case 3:
		if(this.isJapanese)
			return GuardNameJP;
		else if(this.isEnglish)
			return GuardNameEN;
		else if(this.isRussian)
			return GuardNameRU;
		else if(this.isSChinese)
			return GuardNameSCH;
		else if(this.isTChinese)
			return GuardNameTCH;
		else if(this.isKorean)
			return GuardNameKR;
		else if(this.isSpanish)
			return GuardNameSP;

		return GuardNameEN;
	case 4:
		if(this.isJapanese)
			return ItemNameJP;
		else if(this.isEnglish)
			return ItemNameEN;
		else if(this.isRussian)
			return ItemNameRU;
		else if(this.isSChinese)
			return ItemNameSCH;
		else if(this.isTChinese)
			return ItemNameTCH;
		else if(this.isKorean)
			return ItemNameKR;
		else if(this.isSpanish)
			return ItemNameSP;

		return ItemNameEN;
	case 5:
		if(this.isJapanese)
			return SkillNameJP;
		else if(this.isEnglish)
			return SkillNameEN;
		else if(this.isRussian)
			return SkillNameRU;
		else if(this.isSChinese)
			return SkillNameSCH;
		else if(this.isTChinese)
			return SkillNameTCH;
		else if(this.isKorean)
			return SkillNameKR;
		else if(this.isSpanish)
			return SkillNameSP;

		return SkillNameEN;
	case 6:
		if(this.isJapanese)
			return EquipNameJP;
		else if(this.isEnglish)
			return EquipNameEN;
		else if(this.isRussian)
			return EquipNameRU;
		else if(this.isSChinese)
			return EquipNameSCH;
		else if(this.isTChinese)
			return EquipNameTCH;
		else if(this.isKorean)
			return EquipNameKR;
		else if(this.isSpanish)
			return EquipNameSP;

		return EquipNameEN;
	case 7:
		if(this.isJapanese)
			return StatusNameJP;
		else if(this.isEnglish)
			return StatusNameEN;
		else if(this.isRussian)
			return StatusNameRU;
		else if(this.isSChinese)
			return StatusNameSCH;
		else if(this.isTChinese)
			return StatusNameTCH;
		else if(this.isKorean)
			return StatusNameKR;
		else if(this.isSpanish)
			return StatusNameSP;

		return StatusNameEN;
	case 8:
		if(this.isJapanese)
			return FormationNameJP;
		else if(this.isEnglish)
			return FormationNameEN;
		else if(this.isRussian)
			return FormationNameRU;
		else if(this.isSChinese)
			return FormationNameSCH;
		else if(this.isTChinese)
			return FormationNameTCH;
		else if(this.isKorean)
			return FormationNameKR;
		else if(this.isSpanish)
			return FormationNameSP;

		return FormationNameEN;
	case 9:
		if(this.isJapanese)
			return SaveNameJP;
		else if(this.isEnglish)
			return SaveNameEN;
		else if(this.isRussian)
			return SaveNameRU;
		else if(this.isSChinese)
			return SaveNameSCH;
		else if(this.isTChinese)
			return SaveNameTCH;
		else if(this.isKorean)
			return SaveNameKR;
		else if(this.isSpanish)
			return SaveNameSP;

		return SaveNameEN;
	case 10:
		if(this.isJapanese)
			return GameEndNameJP;
		else if(this.isEnglish)
			return GameEndNameEN;
		else if(this.isRussian)
			return GameEndNameRU;
		else if(this.isSChinese)
			return GameEndNameSCH;
		else if(this.isTChinese)
			return GameEndNameTCH;
		else if(this.isKorean)
			return GameEndNameKR;
		else if(this.isSpanish)
			return GameEndNameSP;

		return GameEndNameEN;
	case 11:
		if(this.isJapanese)
			return OptionsNameJP;
		else if(this.isEnglish)
			return OptionsNameEN;
		else if(this.isRussian)
			return OptionsNameRU;
		else if(this.isSChinese)
			return OptionsNameSCH;
		else if(this.isTChinese)
			return OptionsNameTCH;
		else if(this.isKorean)
			return OptionsNameKR;
		else if(this.isSpanish)
			return OptionsNameSP;

		return OptionsNameEN;
	case 12:
		if(this.isJapanese)
			return WeaponNameJP;
		else if(this.isEnglish)
			return WeaponNameEN;
		else if(this.isRussian)
			return WeaponNameRU;
		else if(this.isSChinese)
			return WeaponNameSCH;
		else if(this.isTChinese)
			return WeaponNameTCH;
		else if(this.isKorean)
			return WeaponNameKR;
		else if(this.isSpanish)
			return WeaponNameSP;

		return WeaponNameEN;
	case 13:
		if(this.isJapanese)
			return ArmorNameJP;
		else if(this.isEnglish)
			return ArmorNameEN;
		else if(this.isRussian)
			return ArmorNameRU;
		else if(this.isSChinese)
			return ArmorNameSCH;
		else if(this.isTChinese)
			return ArmorNameTCH;
		else if(this.isKorean)
			return ArmorNameKR;
		else if(this.isSpanish)
			return ArmorNameSP;

		return ArmorNameEN;
	case 14:
		if(this.isJapanese)
			return KeyItemNameJP;
		else if(this.isEnglish)
			return KeyItemNameEN;
		else if(this.isRussian)
			return KeyItemNameRU;
		else if(this.isSChinese)
			return KeyItemNameSCH;
		else if(this.isTChinese)
			return KeyItemNameTCH;
		else if(this.isKorean)
			return KeyItemNameKR;
		else if(this.isSpanish)
			return KeyItemNameSP;

		return KeyItemNameEN;
	case 15:
		if(this.isJapanese)
			return Equip2NameJP;
		else if(this.isEnglish)
			return Equip2NameEN;
		else if(this.isRussian)
			return Equip2NameRU;
		else if(this.isSChinese)
			return Equip2NameSCH;
		else if(this.isTChinese)
			return Equip2NameTCH;
		else if(this.isKorean)
			return Equip2NameKR;
		else if(this.isSpanish)
			return Equip2NameSP;

		return Equip2NameEN;
	case 18:
		if(this.isJapanese)
			return NewGameNameJP;
		else if(this.isEnglish)
			return NewGameNameEN;
		else if(this.isRussian)
			return NewGameNameRU;
		else if(this.isSChinese)
			return NewGameNameSCH;
		else if(this.isTChinese)
			return NewGameNameTCH;
		else if(this.isKorean)
			return NewGameNameKR;
		else if(this.isSpanish)
			return NewGameNameSP;

		return NewGameNameEN;
	case 19:
		if(this.isJapanese)
			return ContinueNameJP;
		else if(this.isEnglish)
			return ContinueNameEN;
		else if(this.isRussian)
			return ContinueNameRU;
		else if(this.isSChinese)
			return ContinueNameSCH;
		else if(this.isTChinese)
			return ContinueNameTCH;
		else if(this.isKorean)
			return ContinueNameKR;
		else if(this.isSpanish)
			return ContinueNameSP;

		return ContinueNameEN;
	case 21:
		if(this.isJapanese)
			return ToTitleNameJP;
		else if(this.isEnglish)
			return ToTitleNameEN;
		else if(this.isRussian)
			return ToTitleNameRU;
		else if(this.isSChinese)
			return ToTitleNameSCH;
		else if(this.isTChinese)
			return ToTitleNameTCH;
		else if(this.isKorean)
			return ToTitleNameKR;
		else if(this.isSpanish)
			return ToTitleNameSP;

		return ToTitleNameEN;
	case 22:
		if(this.isJapanese)
			return CancelNameJP;
		else if(this.isEnglish)
			return CancelNameEN;
		else if(this.isRussian)
			return CancelNameRU;
		else if(this.isSChinese)
			return CancelNameSCH;
		else if(this.isTChinese)
			return CancelNameTCH;
		else if(this.isKorean)
			return CancelNameKR;
		else if(this.isSpanish)
			return CancelNameSP;

		return CancelNameEN;
	case 24:
		if(this.isJapanese)
			return BuyNameJP;
		else if(this.isEnglish)
			return BuyNameEN;
		else if(this.isRussian)
			return BuyNameRU;
		else if(this.isSChinese)
			return BuyNameSCH;
		else if(this.isTChinese)
			return BuyNameTCH;
		else if(this.isKorean)
			return BuyNameKR;
		else if(this.isSpanish)
			return BuyNameSP;

		return BuyNameEN;
	case 25:
		if(this.isJapanese)
			return SellNameJP;
		else if(this.isEnglish)
			return SellNameEN;
		else if(this.isRussian)
			return SellNameRU;
		else if(this.isSChinese)
			return SellNameSCH;
		else if(this.isTChinese)
			return SellNameTCH;
		else if(this.isKorean)
			return SellNameKR;
		else if(this.isSpanish)
			return SellNameSP;

		return SellNameEN;
	}

	return $dataSystem.terms.commands[commandId] || '';
};

TextManager.element = function(elementId) {
	switch (elementId) {
	case 1:
		if(this.isJapanese)
			return ElementAlmightyNameJP;
		else if(this.isEnglish)
			return ElementAlmightyNameEN;
		else if(this.isRussian)
			return ElementAlmightyNameRU;
		else if(this.isSChinese)
			return ElementAlmightyNameSCH;
		else if(this.isTChinese)
			return ElementAlmightyNameTCH;
		else if(this.isKorean)
			return ElementAlmightyNameKR;
		else if(this.isSpanish)
			return ElementAlmightyNameSP;

		return ElementAlmightyNameEN;
	case 2:
		if(this.isJapanese)
			return ElementSlashNameJP;
		else if(this.isEnglish)
			return ElementSlashNameEN;
		else if(this.isRussian)
			return ElementSlashNameRU;
		else if(this.isSChinese)
			return ElementSlashNameSCH;
		else if(this.isTChinese)
			return ElementSlashNameTCH;
		else if(this.isKorean)
			return ElementSlashNameKR;
		else if(this.isSpanish)
			return ElementSlashNameSP;

		return ElementSlashNameEN;
	case 3:
		if(this.isJapanese)
			return ElementPierceNameJP;
		else if(this.isEnglish)
			return ElementPierceNameEN;
		else if(this.isRussian)
			return ElementPierceNameRU;
		else if(this.isSChinese)
			return ElementPierceNameSCH;
		else if(this.isTChinese)
			return ElementPierceNameTCH;
		else if(this.isKorean)
			return ElementPierceNameKR;
		else if(this.isSpanish)
			return ElementPierceNameSP;

		return ElementPierceNameEN;
	case 4:
		if(this.isJapanese)
			return ElementBluntNameJP;
		else if(this.isEnglish)
			return ElementBluntNameEN;
		else if(this.isRussian)
			return ElementBluntNameRU;
		else if(this.isSChinese)
			return ElementBluntNameSCH;
		else if(this.isTChinese)
			return ElementBluntNameTCH;
		else if(this.isKorean)
			return ElementBluntNameKR;
		else if(this.isSpanish)
			return ElementBluntNameSP;

		return ElementBluntNameEN;
	case 5:
		if(this.isJapanese)
			return ElementTalkNameJP;
		else if(this.isEnglish)
			return ElementTalkNameEN;
		else if(this.isRussian)
			return ElementTalkNameRU;
		else if(this.isSChinese)
			return ElementTalkNameSCH;
		else if(this.isTChinese)
			return ElementTalkNameTCH;
		else if(this.isKorean)
			return ElementTalkNameKR;
		else if(this.isSpanish)
			return ElementTalkNameSP;

		return ElementTalkNameEN;
	case 6:
		if(this.isJapanese)
			return ElementSightNameJP;
		else if(this.isEnglish)
			return ElementSightNameEN;
		else if(this.isRussian)
			return ElementSightNameRU;
		else if(this.isSChinese)
			return ElementSightNameSCH;
		else if(this.isTChinese)
			return ElementSightNameTCH;
		else if(this.isKorean)
			return ElementSightNameKR;
		else if(this.isSpanish)
			return ElementSightNameSP;

		return ElementSightNameEN;
	case 7:
		if(this.isJapanese)
			return ElementPettingNameJP;
		else if(this.isEnglish)
			return ElementPettingNameEN;
		else if(this.isRussian)
			return ElementPettingNameRU;
		else if(this.isSChinese)
			return ElementPettingNameSCH;
		else if(this.isTChinese)
			return ElementPettingNameTCH;
		else if(this.isKorean)
			return ElementPettingNameKR;
		else if(this.isSpanish)
			return ElementPettingNameSP;

		return ElementPettingNameEN;
	case 8:
		if(this.isJapanese)
			return ElementStripNameJP;
		else if(this.isEnglish)
			return ElementStripNameEN;
		else if(this.isRussian)
			return ElementStripNameRU;
		else if(this.isSChinese)
			return ElementStripNameSCH;
		else if(this.isTChinese)
			return ElementStripNameTCH;
		else if(this.isKorean)
			return ElementStripNameKR;
		else if(this.isSpanish)
			return ElementStripNameSP;

		return ElementStripNameEN;
	case 9:
		if(this.isJapanese)
			return ElementDrugsNameJP;
		else if(this.isEnglish)
			return ElementDrugsNameEN;
		else if(this.isRussian)
			return ElementDrugsNameRU;
		else if(this.isSChinese)
			return ElementDrugsNameSCH;
		else if(this.isTChinese)
			return ElementDrugsNameTCH;
		else if(this.isKorean)
			return ElementDrugsNameKR;
		else if(this.isSpanish)
			return ElementDrugsNameKR;

		return ElementDrugsNameEN;
	case 10:
		if(this.isJapanese)
			return ElementStenchNameJP;
		else if(this.isEnglish)
			return ElementStenchNameEN;
		else if(this.isRussian)
			return ElementStenchNameRU;
		else if(this.isSChinese)
			return ElementStenchNameSCH;
		else if(this.isTChinese)
			return ElementStenchNameTCH;
		else if(this.isKorean)
			return ElementStenchNameKR;
		else if(this.isSpanish)
			return ElementStenchNameSP;

		return ElementStenchNameEN;
	case 11:
		if(this.isJapanese)
			return ElementSexNameJP;
		else if(this.isEnglish)
			return ElementSexNameEN;
		else if(this.isRussian)
			return ElementSexNameRU;
		else if(this.isSChinese)
			return ElementSexNameSCH;
		else if(this.isTChinese)
			return ElementSexNameTCH;
		else if(this.isKorean)
			return ElementSexNameKR;
		else if(this.isSpanish)
			return ElementSexNameSP;

		return ElementSexNameEN;
	}

	return '';
};

TextManager.message = function(messageId) {
	switch (messageId) {
	case 'actionFailure':
		if(this.isJapanese)
			return ActionFailureJP;
		else if(this.isEnglish)
			return ActionFailureEN;
		else if(this.isRussian)
			return ActionFailureRU;
		else if(this.isSChinese)
			return ActionFailureSCH;
		else if(this.isTChinese)
			return ActionFailureTCH;
		else if(this.isKorean)
			return ActionFailureKR;
		else if(this.isSpanish)
			return ActionFailureSP;

		return ActionFailureEN;
	case 'actorDamage':
		if(this.isJapanese)
			return ActorDamageJP;
		else if(this.isEnglish)
			return ActorDamageEN;
		else if(this.isRussian)
			return ActorDamageRU;
		else if(this.isSChinese)
			return ActorDamageSCH;
		else if(this.isTChinese)
			return ActorDamageTCH;
		else if(this.isKorean)
			return ActorDamageKR;
		else if(this.isSpanish)
			return ActorDamageSP;

		return ActorDamageEN;
	case 'actorDrain':
		if(this.isJapanese)
			return ActorDrainJP;
		else if(this.isEnglish)
			return ActorDrainEN;
		else if(this.isRussian)
			return ActorDrainRU;
		else if(this.isSChinese)
			return ActorDrainSCH;
		else if(this.isTChinese)
			return ActorDrainTCH;
		else if(this.isKorean)
			return ActorDrainKR;
		else if(this.isSpanish)
			return ActorDrainSP;

		return ActorDrainEN;
	case 'actorGain':
		if(this.isJapanese)
			return ActorGainJP;
		else if(this.isEnglish)
			return ActorGainEN;
		else if(this.isRussian)
			return ActorGainRU;
		else if(this.isSChinese)
			return ActorGainSCH;
		else if(this.isTChinese)
			return ActorGainTCH;
		else if(this.isKorean)
			return ActorGainKR;
		else if(this.isSpanish)
			return ActorGainSP;

		return ActorGainEN;
	case 'actorLoss':
		if(this.isJapanese)
			return ActorLossJP;
		else if(this.isEnglish)
			return ActorLossEN;
		else if(this.isRussian)
			return ActorLossRU;
		else if(this.isSChinese)
			return ActorLossSCH;
		else if(this.isTChinese)
			return ActorLossTCH;
		else if(this.isKorean)
			return ActorLossKR;
		else if(this.isSpanish)
			return ActorLossSP;

		return ActorLossEN;
	case 'actorNoDamage':
		if(this.isJapanese)
			return ActorNoDamageJP;
		else if(this.isEnglish)
			return ActorNoDamageEN;
		else if(this.isRussian)
			return ActorNoDamageRU;
		else if(this.isSChinese)
			return ActorNoDamageSCH;
		else if(this.isTChinese)
			return ActorNoDamageTCH;
		else if(this.isKorean)
			return ActorNoDamageKR;
		else if(this.isSpanish)
			return ActorNoDamageSP;

		return ActorNoDamageEN;
	case 'actorNoHit':
		if(this.isJapanese)
			return ActorNoHitJP;
		else if(this.isEnglish)
			return ActorNoHitEN;
		else if(this.isRussian)
			return ActorNoHitRU;
		else if(this.isSChinese)
			return ActorNoHitSCH;
		else if(this.isTChinese)
			return ActorNoHitTCH;
		else if(this.isKorean)
			return ActorNoHitKR;
		else if(this.isSpanish)
			return ActorNoHitSP;

		return ActorNoHitEN;
	case 'actorRecovery':
		if(this.isJapanese)
			return ActorRecoveryJP;
		else if(this.isEnglish)
			return ActorRecoveryEN;
		else if(this.isRussian)
			return ActorRecoveryRU;
		else if(this.isSChinese)
			return ActorRecoverySCH;
		else if(this.isTChinese)
			return ActorRecoveryTCH;
		else if(this.isKorean)
			return ActorRecoveryKR;
		else if(this.isSpanish)
			return ActorRecoverySP;

		return ActorRecoveryEN;
	case 'criticalToActor':
		if(this.isJapanese)
			return CriticalToActorJP;
		else if(this.isEnglish)
			return CriticalToActorEN;
		else if(this.isRussian)
			return CriticalToActorRU;
		else if(this.isSChinese)
			return CriticalToActorSCH;
		else if(this.isTChinese)
			return CriticalToActorTCH;
		else if(this.isKorean)
			return CriticalToActorKR;
		else if(this.isSpanish)
			return CriticalToActorSP;

		return CriticalToActorEN;
	case 'criticalToEnemy':
		if(this.isJapanese)
			return CriticalToEnemyJP;
		else if(this.isEnglish)
			return CriticalToEnemyEN;
		else if(this.isRussian)
			return CriticalToEnemyRU;
		else if(this.isSChinese)
			return CriticalToEnemySCH;
		else if(this.isTChinese)
			return CriticalToEnemyTCH;
		else if(this.isKorean)
			return CriticalToEnemyKR;
		else if(this.isSpanish)
			return CriticalToEnemySP;

		return CriticalToEnemyEN;
	case 'defeatText':
		if(this.isJapanese)
			return DefeatTextJP;
		else if(this.isEnglish)
			return DefeatTextEN;
		else if(this.isRussian)
			return DefeatTextRU;
		else if(this.isSChinese)
			return DefeatTextSCH;
		else if(this.isTChinese)
			return DefeatTextTCH;
		else if(this.isKorean)
			return DefeatTextKR;
		else if(this.isSpanish)
			return DefeatTextSP;

		return DefeatTextEN;
	case 'emerge':
		if(this.isJapanese)
			return EmergeTextJP;
		else if(this.isEnglish)
			return EmergeTextEN;
		else if(this.isRussian)
			return EmergeTextRU;
		else if(this.isSChinese)
			return EmergeTextSCH;
		else if(this.isTChinese)
			return EmergeTextTCH;
		else if(this.isKorean)
			return EmergeTextKR;
		else if(this.isSpanish)
			return EmergeTextSP;

		return EmergeTextEN;
	case 'enemyDamage':
		if(this.isJapanese)
			return EnemyDamageJP;
		else if(this.isEnglish)
			return EnemyDamageEN;
		else if(this.isRussian)
			return EnemyDamageRU;
		else if(this.isSChinese)
			return EnemyDamageSCH;
		else if(this.isTChinese)
			return EnemyDamageTCH;
		else if(this.isKorean)
			return EnemyDamageKR;
		else if(this.isSpanish)
			return EnemyDamageSP;

		return EnemyDamageEN;
	case 'enemyDrain':
		if(this.isJapanese)
			return EnemyDrainJP;
		else if(this.isEnglish)
			return EnemyDrainEN;
		else if(this.isRussian)
			return EnemyDrainRU;
		else if(this.isSChinese)
			return EnemyDrainSCH;
		else if(this.isTChinese)
			return EnemyDrainTCH;
		else if(this.isKorean)
			return EnemyDrainKR;
		else if(this.isSpanish)
			return EnemyDrainSP;

		return EnemyDrainEN;
	case 'enemyGain':
		if(this.isJapanese)
			return EnemyGainJP;
		else if(this.isEnglish)
			return EnemyGainEN;
		else if(this.isRussian)
			return EnemyGainRU;
		else if(this.isSChinese)
			return EnemyGainSCH;
		else if(this.isTChinese)
			return EnemyGainTCH;
		else if(this.isKorean)
			return EnemyGainKR;
		else if(this.isSpanish)
			return EnemyGainSP;

		return EnemyGainEN;
	case 'enemyLoss':
		if(this.isJapanese)
			return EnemyLossJP;
		else if(this.isEnglish)
			return EnemyLossEN;
		else if(this.isRussian)
			return EnemyLossRU;
		else if(this.isSChinese)
			return EnemyLossSCH;
		else if(this.isTChinese)
			return EnemyLossTCH;
		else if(this.isKorean)
			return EnemyLossKR;
		else if(this.isSpanish)
			return EnemyLossSP;

		return EnemyLossEN;
	case 'enemyNoDamage':
		if(this.isJapanese)
			return EnemyNoDamageJP;
		else if(this.isEnglish)
			return EnemyNoDamageEN;
		else if(this.isRussian)
			return EnemyNoDamageRU;
		else if(this.isSChinese)
			return EnemyNoDamageSCH;
		else if(this.isTChinese)
			return EnemyNoDamageTCH;
		else if(this.isKorean)
			return EnemyNoDamageKR;
		else if(this.isSpanish)
			return EnemyNoDamageSP;

		return EnemyNoDamageEN;
	case 'enemyNoHit':
		if(this.isJapanese)
			return EnemyNoHitJP;
		else if(this.isEnglish)
			return EnemyNoHitEN;
		else if(this.isRussian)
			return EnemyNoHitRU;
		else if(this.isSChinese)
			return EnemyNoHitSCH;
		else if(this.isTChinese)
			return EnemyNoHitTCH;
		else if(this.isKorean)
			return EnemyNoHitKR;
		else if(this.isSpanish)
			return EnemyNoHitSP;

		return EnemyNoHitEN;
	case 'enemyRecovery':
		if(this.isJapanese)
			return EnemyRecoveryJP;
		else if(this.isEnglish)
			return EnemyRecoveryEN;
		else if(this.isRussian)
			return EnemyRecoveryRU;
		else if(this.isSChinese)
			return EnemyRecoverySCH;
		else if(this.isTChinese)
			return EnemyRecoveryTCH;
		else if(this.isKorean)
			return EnemyRecoveryKR;
		else if(this.isSpanish)
			return EnemyRecoverySP;

		return EnemyRecoveryEN;
	case 'escapeFailure':
		if(this.isJapanese)
			return EscapeFailureJP;
		else if(this.isEnglish)
			return EscapeFailureEN;
		else if(this.isRussian)
			return EscapeFailureRU;
		else if(this.isSChinese)
			return EscapeFailureSCH;
		else if(this.isTChinese)
			return EscapeFailureTCH;
		else if(this.isKorean)
			return EscapeFailureKR;
		else if(this.isSpanish)
			return EscapeFailureSP;

		return EscapeFailureEN;
	case 'escapeStart':
		if(this.isJapanese)
			return EscapeStartJP;
		else if(this.isEnglish)
			return EscapeStartEN;
		else if(this.isRussian)
			return EscapeStartRU;
		else if(this.isSChinese)
			return EscapeStartSCH;
		else if(this.isTChinese)
			return EscapeStartTCH;
		else if(this.isKorean)
			return EscapeStartKR;
		else if(this.isSpanish)
			return EscapeStartSP;

		return EscapeStartEN;
	case 'evasion':
		if(this.isJapanese)
			return EvasionTextJP;
		else if(this.isEnglish)
			return EvasionTextEN;
		else if(this.isRussian)
			return EvasionTextRU;
		else if(this.isSChinese)
			return EvasionTextSCH;
		else if(this.isTChinese)
			return EvasionTextTCH;
		else if(this.isKorean)
			return EvasionTextKR;
		else if(this.isSpanish)
			return EvasionTextSP;

		return EvasionTextEN;
	case 'file':
		if(this.isJapanese)
			return SaveFileTextJP;
		else if(this.isEnglish)
			return SaveFileTextEN;
		else if(this.isRussian)
			return SaveFileTextRU;
		else if(this.isSChinese)
			return SaveFileTextSCH;
		else if(this.isTChinese)
			return SaveFileTextTCH;
		else if(this.isKorean)
			return SaveFileTextKR;
		else if(this.isSpanish)
			return SaveFileTextSP;

		return SaveFileTextEN;
	case 'loadMessage':
		if(this.isJapanese)
			return LoadMessageJP;
		else if(this.isEnglish)
			return LoadMessageEN;
		else if(this.isRussian)
			return LoadMessageRU;
		else if(this.isSChinese)
			return LoadMessageSCH;
		else if(this.isTChinese)
			return LoadMessageTCH;
		else if(this.isKorean)
			return LoadMessageKR;
		else if(this.isSpanish)
			return LoadMessageSP;

		return LoadMessageEN;
	case 'preemptiveText':
		if(this.isJapanese)
			return PreemptiveTextJP;
		else if(this.isEnglish)
			return PreemptiveTextEN;
		else if(this.isRussian)
			return PreemptiveTextRU;
		else if(this.isSChinese)
			return PreemptiveTextSCH;
		else if(this.isTChinese)
			return PreemptiveTextTCH;
		else if(this.isKorean)
			return PreemptiveTextKR;
		else if(this.isSpanish)
			return PreemptiveTextSP;

		return PreemptiveTextEN;
	case 'surprise':
		if(this.isJapanese)
			return SurpriseTextJP;
		else if(this.isEnglish)
			return SurpriseTextEN;
		else if(this.isRussian)
			return SurpriseTextRU;
		else if(this.isSChinese)
			return SurpriseTextSCH;
		else if(this.isTChinese)
			return SurpriseTextTCH;
		else if(this.isKorean)
			return SurpriseTextKR;
		else if(this.isSpanish)
			return SurpriseTextSP;

		return SurpriseTextEN;
	case 'useItemText':
		if(this.isJapanese)
			return UseItemTextJP;
		else if(this.isEnglish)
			return UseItemTextEN;
		else if(this.isRussian)
			return UseItemTextRU;
		else if(this.isSChinese)
			return UseItemTextSCH;
		else if(this.isTChinese)
			return UseItemTextTCH;
		else if(this.isKorean)
			return UseItemTextKR;
		else if(this.isSpanish)
			return UseItemTextSP;

		return UseItemTextEN;
	case 'victory':
		if(this.isJapanese)
			return VictoryTextJP;
		else if(this.isEnglish)
			return VictoryTextEN;
		else if(this.isRussian)
			return VictoryTextRU;
		else if(this.isSChinese)
			return VictoryTextSCH;
		else if(this.isTChinese)
			return VictoryTextTCH;
		else if(this.isKorean)
			return VictoryTextKR;
		else if(this.isSpanish)
			return VictoryTextSP;

		return VictoryTextEN;
	case 'counterAttack':
		if(this.isJapanese)
			return CounterAttackTextJP;
		else if(this.isEnglish)
			return CounterAttackTextEN;
		else if(this.isRussian)
			return CounterAttackTextRU;
		else if(this.isSChinese)
			return CounterAttackTextSCH;
		else if(this.isTChinese)
			return CounterAttackTextTCH;
		else if(this.isKorean)
			return CounterAttackTextKR;
		else if(this.isSpanish)
			return CounterAttackTextSP;

		return CounterAttackTextEN;
	}

    return $dataSystem.terms.messages[messageId] || '';
};

TextManager.equipTypes = function(index) {
    let text = false;
	if(TextManager.isJapanese) {
		if(index <= RemEquipTypesJP.length && index > 0)
			text = RemEquipTypesJP[index];
	}
	else if(TextManager.isEnglish) {
		if(index <= RemEquipTypesEN.length && index > 0)
			text = RemEquipTypesEN[index];
	}
	else if(TextManager.isRussian) {
		if(index <= RemEquipTypesRU.length && index > 0)
			text = RemEquipTypesRU[index];
	}
	else if(TextManager.isSpanish) {
		if(index <= RemEquipTypesSP.length && index > 0)
			text = RemEquipTypesSP[index];
	}
	else if(TextManager.isSChinese) {
		if(index <= RemEquipTypesSCH.length && index > 0)
			text = RemEquipTypesSCH[index];
	}
	else if(TextManager.isTChinese) {
		if(index <= RemEquipTypesTCH.length && index > 0)
			text = RemEquipTypesTCH[index];
	}
	else if(TextManager.isKorean) {
		if(index <= RemEquipTypesKR.length && index > 0)
			text = RemEquipTypesKR[index];
	}
	return text;
};

TextManager.skillTypes = function(index) {
    var text = false;
	if(TextManager.isJapanese) {
		if(index <= RemSkillTypesJP.length && index > 0)
			text = RemSkillTypesJP[index];
	}
	else if(TextManager.isEnglish) {
		if(index <= RemSkillTypesEN.length && index > 0)
			text = RemSkillTypesEN[index];
	}
	else if(TextManager.isRussian) {
		if(index <= RemSkillTypesRU.length && index > 0)
			text = RemSkillTypesRU[index];
	}
	else if(TextManager.isSpanish) {
		if(index <= RemSkillTypesSP.length && index > 0)
			text = RemSkillTypesSP[index];
	}
	else if(TextManager.isSChinese) {
		if(index <= RemSkillTypesSCH.length && index > 0)
			text = RemSkillTypesSCH[index];
	}
	else if(TextManager.isTChinese) {
		if(index <= RemSkillTypesTCH.length && index > 0)
			text = RemSkillTypesTCH[index];
	}
	else if(TextManager.isKorean) {
		if(index <= RemSkillTypesKR.length && index > 0)
			text = RemSkillTypesKR[index];
	}
	return text;
};

TextManager.skillName = function(skillId) {
	let skill = $dataSkills[skillId];
	let text = skill.name;

	if(skill.hasRemNameDefault) text = skill.remNameDefault;

	if(TextManager.isEnglish) {
		if(skill.hasRemNameEN) text = skill.remNameEN;
	}
	else if(TextManager.isJapanese) {
		if(skill.hasRemNameJP) text = skill.remNameJP;
	}
	else if(TextManager.isTChinese) {
		if(skill.hasRemNameTCH) text = skill.remNameTCH;
	}
	else if(TextManager.isSChinese) {
		if(skill.hasRemNameSCH) text = skill.remNameSCH;
	}
	else if(TextManager.isKorean) {
		if(skill.hasRemNameKR) text = skill.remNameKR;
	}
	else if(TextManager.isRussian) {
		if(skill.hasRemNameRU) text = skill.remNameRU;
	}
	else if(TextManager.isSpanish) {
		if(skill.hasRemNameSP) text = skill.remNameSP;
	}

	//text = TextManager.convertEscapeCharacters(text);

	return text;
};

TextManager.skillDesc = function(skillId) {
	let skill = $dataSkills[skillId];
	let text = skill.description;
	if(skill.hasRemDescDefault) text = skill.remDescDefault;

	if(TextManager.isJapanese) {
		if(skill.hasRemDescJP) text = skill.remDescJP;
	}
	else if(TextManager.isEnglish) {
		if(skill.hasRemDescEN) text = skill.remDescEN;
	}
	else if(TextManager.isTChinese) {
		if(skill.hasRemDescTCH) text = skill.remDescTCH;
	}
	else if(TextManager.isSChinese) {
		if(skill.hasRemDescSCH) text = skill.remDescSCH;
	}
	else if(TextManager.isKorean) {
		if(skill.hasRemDescKR) text = skill.remDescKR;
	}
	else if(TextManager.isRussian) {
		if(skill.hasRemDescRU) text = skill.remDescRU;
	}
	else if(TextManager.isSpanish) {
		if(skill.hasRemDescSP) text = skill.remDescRU;
	}

	//text = TextManager.convertEscapeCharacters(text);

	return text;
};

TextManager.alcoholName = function(alcoholType) {
	let text = false;
	switch(alcoholType) {
	case ALCOHOL_TYPE_NOTHING:
		return '';
	case ALCOHOL_TYPE_WATER:
		text = TextManager.alcoholWater;
		break;
	case ALCOHOL_TYPE_PALE_ALE:
		text = TextManager.alcoholPaleAle;
		break;
	case ALCOHOL_TYPE_DARK_ALE:
		text = TextManager.alcoholDarkAle;
		break;
	case ALCOHOL_TYPE_VODKA:
		text = TextManager.alcoholVodka;
		break;
	case ALCOHOL_TYPE_TEQUILA:
		text = TextManager.alcoholTequila;
		break;
	case ALCOHOL_TYPE_GOLD_RUM:
		text = TextManager.alcoholGoldRum;
		break;
	case ALCOHOL_TYPE_OVERPROOF_RUM:
		text = TextManager.alcoholOverproofRum;
		break;
	case ALCOHOL_TYPE_WHISKEY:
		text = TextManager.alcoholWhiskey;
		break;
	case ALCOHOL_TYPE_DIRTY_MUGS_STACK_ONE:
		text = TextManager.alcoholDirtyMugsSingular;
		break;
	case ALCOHOL_TYPE_DIRTY_MUGS_STACK_TWO:
		text = TextManager.alcoholDirtyMugsPlural;
		break;
	case ALCOHOL_TYPE_DIRTY_GLASSES_STACK_ONE:
		text = TextManager.alcoholDirtyGlassesSingular;
		break;
	case ALCOHOL_TYPE_DIRTY_GLASSES_STACK_TWO:
	case ALCOHOL_TYPE_DIRTY_GLASSES_STACK_THREE:
		text = TextManager.alcoholDirtyGlassesPlural;
		break;
	default:
		return '';
	}

	return text;
};

TextManager.visitorRoomName = function(roomId) {
	switch (roomId) {
	case VISITING_ROOM_A_ID:
		if(this.isJapanese)
			return RemReceptionistVisitingRoomA_JP;
		else if(this.isEnglish)
			return RemReceptionistVisitingRoomA_EN;
		else if(this.isRussian)
			return RemReceptionistVisitingRoomA_RU;
		else if(this.isSChinese)
			return RemReceptionistVisitingRoomA_SCH;
		else if(this.isTChinese)
			return RemReceptionistVisitingRoomA_TCH;
		else if(this.isKorean)
			return RemReceptionistVisitingRoomA_KR;
		else if(this.isSpanish)
			return RemReceptionistVisitingRoomA_SP;

		return RemReceptionistVisitingRoomA_EN;
	case VISITING_ROOM_B_ID:
		if(this.isJapanese)
			return RemReceptionistVisitingRoomB_JP;
		else if(this.isEnglish)
			return RemReceptionistVisitingRoomB_EN;
		else if(this.isRussian)
			return RemReceptionistVisitingRoomB_RU;
		else if(this.isSChinese)
			return RemReceptionistVisitingRoomB_SCH;
		else if(this.isTChinese)
			return RemReceptionistVisitingRoomB_TCH;
		else if(this.isKorean)
			return RemReceptionistVisitingRoomB_KR;
		else if(this.isSpanish)
			return RemReceptionistVisitingRoomB_SP;

		return RemReceptionistVisitingRoomB_EN;
	case VISITING_ROOM_C_ID:
		if(this.isJapanese)
			return RemReceptionistVisitingRoomC_JP;
		else if(this.isEnglish)
			return RemReceptionistVisitingRoomC_EN;
		else if(this.isRussian)
			return RemReceptionistVisitingRoomC_RU;
		else if(this.isSChinese)
			return RemReceptionistVisitingRoomC_SCH;
		else if(this.isTChinese)
			return RemReceptionistVisitingRoomC_TCH;
		else if(this.isKorean)
			return RemReceptionistVisitingRoomC_KR;
		else if(this.isSpanish)
			return RemReceptionistVisitingRoomC_SP;

		return RemReceptionistVisitingRoomC_EN;
	case VISITING_ROOM_D_ID:
		if(this.isJapanese)
			return RemReceptionistVisitingRoomD_JP;
		else if(this.isEnglish)
			return RemReceptionistVisitingRoomD_EN;
		else if(this.isRussian)
			return RemReceptionistVisitingRoomD_RU;
		else if(this.isSChinese)
			return RemReceptionistVisitingRoomD_SCH;
		else if(this.isTChinese)
			return RemReceptionistVisitingRoomD_TCH;
		else if(this.isKorean)
			return RemReceptionistVisitingRoomD_KR;
		else if(this.isSpanish)
			return RemReceptionistVisitingRoomD_SP;

		return RemReceptionistVisitingRoomD_EN;
	}
};

TextManager.artisanMeal = function(mealId) {
	switch (mealId) {
	case ARTISAN_MEAL_SMART:
		if(this.isJapanese)
			return RCMenuMealOneTextJP;
		else if(this.isEnglish)
			return RCMenuMealOneTextEN;
		else if(this.isRussian)
			return RCMenuMealOneTextRU;
		else if(this.isSChinese)
			return RCMenuMealOneTextSCH;
		else if(this.isTChinese)
			return RCMenuMealOneTextTCH;
		else if(this.isKorean)
			return RCMenuMealOneTextKR;
		else if(this.isSpanish)
			return RCMenuMealOneTextSP;

		return RCMenuMealOneTextEN;
	case ARTISAN_MEAL_COMFY:
		if(this.isJapanese)
			return RCMenuMealTwoTextJP;
		else if(this.isEnglish)
			return RCMenuMealTwoTextEN;
		else if(this.isRussian)
			return RCMenuMealTwoTextRU;
		else if(this.isSChinese)
			return RCMenuMealTwoTextSCH;
		else if(this.isTChinese)
			return RCMenuMealTwoTextTCH;
		else if(this.isKorean)
			return RCMenuMealTwoTextKR;
		else if(this.isSpanish)
			return RCMenuMealTwoTextSP;

		return RCMenuMealTwoTextEN;
	case ARTISAN_MEAL_HEART:
		if(this.isJapanese)
			return RCMenuMealThreeTextJP;
		else if(this.isEnglish)
			return RCMenuMealThreeTextEN;
		else if(this.isRussian)
			return RCMenuMealThreeTextRU;
		else if(this.isSChinese)
			return RCMenuMealThreeTextSCH;
		else if(this.isTChinese)
			return RCMenuMealThreeTextTCH;
		else if(this.isKorean)
			return RCMenuMealThreeTextKR;
		else if(this.isSpanish)
			return RCMenuMealThreeTextSP;

		return RCMenuMealThreeTextEN;
	case ARTISAN_MEAL_SLUT:
		if(this.isJapanese)
			return RCMenuMealFourTextJP;
		else if(this.isEnglish)
			return RCMenuMealFourTextEN;
		else if(this.isRussian)
			return RCMenuMealFourTextRU;
		else if(this.isSChinese)
			return RCMenuMealFourTextSCH;
		else if(this.isTChinese)
			return RCMenuMealFourTextTCH;
		else if(this.isKorean)
			return RCMenuMealFourTextKR;
		else if(this.isSpanish)
			return RCMenuMealFourTextSP;

		return RCMenuMealFourTextEN;
	case ARTISAN_MEAL_PUSSY:
		if(this.isJapanese)
			return RCMenuMealFiveTextJP;
		else if(this.isEnglish)
			return RCMenuMealFiveTextEN;
		else if(this.isRussian)
			return RCMenuMealFiveTextRU;
		else if(this.isSChinese)
			return RCMenuMealFiveTextSCH;
		else if(this.isTChinese)
			return RCMenuMealFiveTextTCH;
		else if(this.isKorean)
			return RCMenuMealFiveTextKR;
		else if(this.isSpanish)
			return RCMenuMealFiveTextSP;

		return RCMenuMealFiveTextEN;
	case ARTISAN_MEAL_HERO:
		if(this.isJapanese)
			return RCMenuMealSixTextJP;
		else if(this.isEnglish)
			return RCMenuMealSixTextEN;
		else if(this.isRussian)
			return RCMenuMealSixTextRU;
		else if(this.isSChinese)
			return RCMenuMealSixTextSCH;
		else if(this.isTChinese)
			return RCMenuMealSixTextTCH;
		else if(this.isKorean)
			return RCMenuMealSixTextKR;
		else if(this.isSpanish)
			return RCMenuMealSixTextSP;

		return RCMenuMealSixTextEN;
	case ARTISAN_MEAL_ARMED:
		if(this.isJapanese)
			return RCMenuMealSevenTextJP;
		else if(this.isEnglish)
			return RCMenuMealSevenTextEN;
		else if(this.isRussian)
			return RCMenuMealSevenTextRU;
		else if(this.isSChinese)
			return RCMenuMealSevenTextSCH;
		else if(this.isTChinese)
			return RCMenuMealSevenTextTCH;
		else if(this.isKorean)
			return RCMenuMealSevenTextKR;
		else if(this.isSpanish)
			return RCMenuMealSevenTextSP;

		return RCMenuMealSevenTextEN;
	case ARTISAN_MEAL_WARDEN:
		if(this.isJapanese)
			return RCMenuMealEightTextJP;
		else if(this.isEnglish)
			return RCMenuMealEightTextEN;
		else if(this.isRussian)
			return RCMenuMealEightTextRU;
		else if(this.isSChinese)
			return RCMenuMealEightTextSCH;
		else if(this.isTChinese)
			return RCMenuMealEightTextTCH;
		else if(this.isKorean)
			return RCMenuMealEightTextKR;
		else if(this.isSpanish)
			return RCMenuMealEightTextSP;

		return RCMenuMealEightTextEN;
	case ARTISAN_MEAL_BITCH:
		if(this.isJapanese)
			return RCMenuMealNineTextJP;
		else if(this.isEnglish)
			return RCMenuMealNineTextEN;
		else if(this.isRussian)
			return RCMenuMealNineTextRU;
		else if(this.isSChinese)
			return RCMenuMealNineTextSCH;
		else if(this.isTChinese)
			return RCMenuMealNineTextTCH;
		else if(this.isKorean)
			return RCMenuMealNineTextKR;
		else if(this.isSpanish)
			return RCMenuMealNineTextSP;

		return RCMenuMealNineTextEN;
	case ARTISAN_MEAL_ANAL:
		if(this.isJapanese)
			return RCMenuMealTenTextJP;
		else if(this.isEnglish)
			return RCMenuMealTenTextEN;
		else if(this.isRussian)
			return RCMenuMealTenTextRU;
		else if(this.isSChinese)
			return RCMenuMealTenTextSCH;
		else if(this.isTChinese)
			return RCMenuMealTenTextTCH;
		else if(this.isKorean)
			return RCMenuMealTenTextKR;
		else if(this.isSpanish)
			return RCMenuMealTenTextSP;

		return RCMenuMealTenTextEN;

	}

	return '';
};

TextManager.storeItem = function(itemId) {
	switch (itemId) {
	case STORE_ITEM_ENERGY_DRINK:
		if(this.isJapanese)
			return RCMenuStoreItemOneTextJP;
		else if(this.isEnglish)
			return RCMenuStoreItemOneTextEN;
		else if(this.isRussian)
			return RCMenuStoreItemOneTextRU;
		else if(this.isSChinese)
			return RCMenuStoreItemOneTextSCH;
		else if(this.isTChinese)
			return RCMenuStoreItemOneTextTCH;
		else if(this.isKorean)
			return RCMenuStoreItemOneTextKR;
		else if(this.isSpanish)
			return RCMenuStoreItemOneTextSP;

		return RCMenuStoreItemOneTextEN;
	case STORE_ITEM_WELTSTONE:
		if(this.isJapanese)
			return RCMenuStoreItemTwoTextJP;
		else if(this.isEnglish)
			return RCMenuStoreItemTwoTextEN;
		else if(this.isRussian)
			return RCMenuStoreItemTwoTextRU;
		else if(this.isSChinese)
			return RCMenuStoreItemTwoTextSCH;
		else if(this.isTChinese)
			return RCMenuStoreItemTwoTextTCH;
		else if(this.isKorean)
			return RCMenuStoreItemTwoTextKR;
		else if(this.isSpanish)
			return RCMenuStoreItemTwoTextSP;

		return RCMenuStoreItemTwoTextEN;
	case STORE_ITEM_PAIN_RESIST_PILL:
		if(this.isJapanese)
			return RCMenuStoreItemThreeTextJP;
		else if(this.isEnglish)
			return RCMenuStoreItemThreeTextEN;
		else if(this.isRussian)
			return RCMenuStoreItemThreeTextRU;
		else if(this.isSChinese)
			return RCMenuStoreItemThreeTextSCH;
		else if(this.isTChinese)
			return RCMenuStoreItemThreeTextTCH;
		else if(this.isKorean)
			return RCMenuStoreItemThreeTextKR;
		else if(this.isSpanish)
			return RCMenuStoreItemThreeTextSP;

		return RCMenuStoreItemThreeTextEN;
	case STORE_ITEM_FABRIC_HARDENER:
		if(this.isJapanese)
			return RCMenuStoreItemFourTextJP;
		else if(this.isEnglish)
			return RCMenuStoreItemFourTextEN;
		else if(this.isRussian)
			return RCMenuStoreItemFourTextRU;
		else if(this.isSChinese)
			return RCMenuStoreItemFourTextSCH;
		else if(this.isTChinese)
			return RCMenuStoreItemFourTextTCH;
		else if(this.isKorean)
			return RCMenuStoreItemFourTextKR;
		else if(this.isSpanish)
			return RCMenuStoreItemFourTextSP;

		return RCMenuStoreItemFourTextEN;
	case STORE_ITEM_APHRODISIAC_PERFUME:
		if(this.isJapanese)
			return RCMenuStoreItemFiveTextJP;
		else if(this.isEnglish)
			return RCMenuStoreItemFiveTextEN;
		else if(this.isRussian)
			return RCMenuStoreItemFiveTextRU;
		else if(this.isSChinese)
			return RCMenuStoreItemFiveTextSCH;
		else if(this.isTChinese)
			return RCMenuStoreItemFiveTextTCH;
		else if(this.isKorean)
			return RCMenuStoreItemFiveTextKR;
		else if(this.isSpanish)
			return RCMenuStoreItemFiveTextSP;

		return RCMenuStoreItemFiveTextEN;
	}

	return '';
};

TextManager.freeBattleDefeatSetting = function(settingId) {
	settingId = settingId.clamp(0, 5);
	if(this.isEnglish)
		return RemLevelFiveFreeBattleDefeatSettingEN[settingId];
	else if(this.isJapanese)
		return RemLevelFiveFreeBattleDefeatSettingJP[settingId];
	else if(this.isRussian)
		return RemLevelFiveFreeBattleDefeatSettingRU[settingId];
	else if(this.isSChinese)
		return RemLevelFiveFreeBattleDefeatSettingSCH[settingId];
	else if(this.isTChinese)
		return RemLevelFiveFreeBattleDefeatSettingTCH[settingId];
	else if(this.isKorean)
		return RemLevelFiveFreeBattleDefeatSettingKR[settingId];
	else if(this.isSpanish)
		return RemLevelFiveFreeBattleDefeatSettingSP[settingId];

	return RemLevelFiveFreeBattleDefeatSettingEN[settingId];
};

TextManager.enemyTypeName = function(enemyType) {
	switch (enemyType) {
	case ENEMYTYPE_GUARD_TAG:
		return TextManager.prisonerGuard;
	case ENEMYTYPE_THUG_TAG:
		return TextManager.prisonerThug;
	case ENEMYTYPE_GOBLIN_TAG:
		return TextManager.prisonerGoblin;
	case ENEMYTYPE_PRISONER_TAG:
		return TextManager.prisonerGeneric;
	case ENEMYTYPE_ORC_TAG:
		return TextManager.prisonerOrc;
	case ENEMYTYPE_ROGUE_TAG:
		return TextManager.prisonerRogue;
	case ENEMYTYPE_SLIME_TAG:
		return TextManager.prisonerSlime;
	case ENEMYTYPE_NERD_TAG:
		return TextManager.prisonerNerd;
	case ENEMYTYPE_LIZARDMAN_TAG:
		return TextManager.prisonerLizardman;
	case ENEMYTYPE_HOMELESS_TAG:
		return TextManager.prisonerHomeless;
	case ENEMYTYPE_WEREWOLF_TAG:
		return TextManager.prisonerWerewolf;
	case ENEMYTYPE_YETI_TAG:
		return TextManager.prisonerYeti;
	}

	return '';
};

TextManager.edictsDesc = function(skillId) {
	if(!DEBUG_MODE) return '';

	switch (skillId) {
	case ARTISAN_MEAL_SMART:
		if(this.isJapanese)
			return RCMenuMealOneTextJP;
		else if(this.isEnglish)
			return RCMenuMealOneTextEN;
		else if(this.isRussian)
			return RCMenuMealOneTextRU;
		else if(this.isSChinese)
			return RCMenuMealOneTextSCH;
		else if(this.isTChinese)
			return RCMenuMealOneTextTCH;
		else if(this.isKorean)
			return RCMenuMealOneTextKR;
		else if(this.isSpanish)
			return RCMenuMealOneTextSP;

		return RCMenuMealOneTextEN;
	case ARTISAN_MEAL_ANAL:
		if(this.isJapanese)
			return RCMenuMealTenTextJP;
		else if(this.isEnglish)
			return RCMenuMealTenTextEN;
		else if(this.isRussian)
			return RCMenuMealTenTextRU;
		else if(this.isSChinese)
			return RCMenuMealTenTextSCH;
		else if(this.isTChinese)
			return RCMenuMealTenTextTCH;
		else if(this.isKorean)
			return RCMenuMealTenTextKR;
		else if(this.isSpanish)
			return RCMenuMealTenTextSP;

		return RCMenuMealTenTextEN;
	}

	return '';
};

TextManager.disabledSmegmaSkillName = function(skillId, originalName) {
	switch (skillId) {
	case PASSIVE_BJ_USAGE_TWO_ID:
		return TextManager.RemDisableSmegmaSkill815Name;
	}

	return originalName;
};

TextManager.smegmaDesc = function(skillId) {
	switch (skillId) {
	case PASSIVE_BJ_USAGE_THREE_ID:
		if(this.isJapanese) {
			if(ConfigManager.disableSmegma)
				return "チンポ";
			else
				return "チンカス";
		}
		else if(this.isEnglish) {
			if(ConfigManager.disableSmegma)
				return "dicks";
			else
				return "dick cheeses";
		}
		else if(this.isRussian) {
			if(ConfigManager.disableSmegma)
				return "член";
			else
				return "творожок";
		}
		else if(this.isSChinese) {
			if(ConfigManager.disableSmegma)
				return "鸡巴";
			else
				return "包皮垢";
		}
		else if(this.isTChinese) {
			if(ConfigManager.disableSmegma)
				return "雞巴";
			else
				return "包皮垢";
		}
		else if(this.isKorean) {
			if(ConfigManager.disableSmegma)
				return "자지";
			else
				return "좆밥";
		}
		else if(this.isSpanish) {
			if(ConfigManager.disableSmegma)
				return "pollas";
			else
				return "pollas";
		}
		break;
	}

	return '';
};

TextManager.karrynOrgasmNameType = function(actor) {
	let orgasmTypeId = actor._justGotHitBySkillType;

	switch (orgasmTypeId) {
		case JUST_SKILLTYPE_KARRYN_KISSING:
			if(this.isJapanese)
				return RemOrgasmSkillMessageKarrynKissJP;
			else if(this.isEnglish)
				return RemOrgasmSkillMessageKarrynKissEN;
			else if(this.isRussian)
				return RemOrgasmSkillMessageKarrynKissRU;
			else if(this.isSChinese)
				return RemOrgasmSkillMessageKarrynKissSCH;
			else if(this.isTChinese)
				return RemOrgasmSkillMessageKarrynKissTCH;
			else if(this.isKorean)
				return RemOrgasmSkillMessageKarrynKissKR;
			else if(this.isSpanish)
				return RemOrgasmSkillMessageKarrynKissSP;

			return RemOrgasmSkillMessageKarrynKissEN;
		case JUST_SKILLTYPE_KARRYN_PETTING:
			if(this.isJapanese)
				return RemOrgasmSkillMessageKarrynPettingJP;
			else if(this.isEnglish)
				return RemOrgasmSkillMessageKarrynPettingEN;
			else if(this.isRussian)
				return RemOrgasmSkillMessageKarrynPettingRU;
			else if(this.isSChinese)
				return RemOrgasmSkillMessageKarrynPettingSCH;
			else if(this.isTChinese)
				return RemOrgasmSkillMessageKarrynPettingTCH;
			else if(this.isKorean)
				return RemOrgasmSkillMessageKarrynPettingKR;
			else if(this.isSpanish)
				return RemOrgasmSkillMessageKarrynPettingSP;

			return RemOrgasmSkillMessageKarrynPettingEN;
		case JUST_SKILLTYPE_KARRYN_SADISM:
			if(this.isJapanese)
				return RemOrgasmSkillMessageSadismJP;
			else if(this.isEnglish)
				return RemOrgasmSkillMessageSadismEN;
			else if(this.isRussian)
				return RemOrgasmSkillMessageSadismRU;
			else if(this.isSChinese)
				return RemOrgasmSkillMessageSadismSCH;
			else if(this.isTChinese)
				return RemOrgasmSkillMessageSadismTCH;
			else if(this.isKorean)
				return RemOrgasmSkillMessageSadismKR;
			else if(this.isSpanish)
				return RemOrgasmSkillMessageSadismSP;

			return RemOrgasmSkillMessageSadismEN;
		case JUST_SKILLTYPE_KARRYN_MASOCHISM:
			if(this.isJapanese)
				return RemOrgasmSkillMessageMasochismJP;
			else if(this.isEnglish)
				return RemOrgasmSkillMessageMasochismEN;
			else if(this.isRussian)
				return RemOrgasmSkillMessageMasochismRU;
			else if(this.isSChinese)
				return RemOrgasmSkillMessageMasochismSCH;
			else if(this.isTChinese)
				return RemOrgasmSkillMessageMasochismTCH;
			else if(this.isKorean)
				return RemOrgasmSkillMessageMasochismKR;
			else if(this.isSpanish)
				return RemOrgasmSkillMessageMasochismSP;

			return RemOrgasmSkillMessageMasochismEN;
		case JUST_SKILLTYPE_KARRYN_MASTURBATE:
			if(this.isJapanese)
				return RemOrgasmSkillMessageMasturbateJP;
			else if(this.isEnglish)
				return RemOrgasmSkillMessageMasturbateEN;
			else if(this.isRussian)
				return RemOrgasmSkillMessageMasturbateRU;
			else if(this.isSChinese)
				return RemOrgasmSkillMessageMasturbateSCH;
			else if(this.isTChinese)
				return RemOrgasmSkillMessageMasturbateTCH;
			else if(this.isKorean)
				return RemOrgasmSkillMessageMasturbateKR;
			else if(this.isSpanish)
				return RemOrgasmSkillMessageMasturbateSP;

			return RemOrgasmSkillMessageMasturbateEN;
		case JUST_SKILLTYPE_KARRYN_PUSSY_SEX:
			if(this.isJapanese)
				return RemOrgasmSkillMessageKarrynPussySexJP;
			else if(this.isEnglish)
				return RemOrgasmSkillMessageKarrynPussySexEN;
			else if(this.isRussian)
				return RemOrgasmSkillMessageKarrynPussySexRU;
			else if(this.isSChinese)
				return RemOrgasmSkillMessageKarrynPussySexSCH;
			else if(this.isTChinese)
				return RemOrgasmSkillMessageKarrynPussySexTCH;
			else if(this.isKorean)
				return RemOrgasmSkillMessageKarrynPussySexKR;
			else if(this.isSpanish)
				return RemOrgasmSkillMessageKarrynPussySexSP;

			return RemOrgasmSkillMessageKarrynPussySexEN;
		case JUST_SKILLTYPE_KARRYN_ANAL_SEX:
			if(this.isJapanese)
				return RemOrgasmSkillMessageKarrynAnalSexJP;
			else if(this.isEnglish)
				return RemOrgasmSkillMessageKarrynAnalSexEN;
			else if(this.isRussian)
				return RemOrgasmSkillMessageKarrynAnalSexRU;
			else if(this.isSChinese)
				return RemOrgasmSkillMessageKarrynAnalSexSCH;
			else if(this.isTChinese)
				return RemOrgasmSkillMessageKarrynAnalSexTCH;
			else if(this.isKorean)
				return RemOrgasmSkillMessageKarrynAnalSexKR;
			else if(this.isSpanish)
				return RemOrgasmSkillMessageKarrynAnalSexSP;

			return RemOrgasmSkillMessageKarrynAnalSexEN;
		case JUST_SKILLTYPE_KARRYN_HANDJOB:
			if(this.isJapanese)
				return RemOrgasmSkillMessageKarrynHandjobJP;
			else if(this.isEnglish)
				return RemOrgasmSkillMessageKarrynHandjobEN;
			else if(this.isRussian)
				return RemOrgasmSkillMessageKarrynHandjobRU;
			else if(this.isSChinese)
				return RemOrgasmSkillMessageKarrynHandjobSCH;
			else if(this.isTChinese)
				return RemOrgasmSkillMessageKarrynHandjobTCH;
			else if(this.isKorean)
				return RemOrgasmSkillMessageKarrynHandjobKR;
			else if(this.isSpanish)
				return RemOrgasmSkillMessageKarrynHandjobSP;

			return RemOrgasmSkillMessageKarrynHandjobEN;
		case JUST_SKILLTYPE_KARRYN_BLOWJOB:
			if(this.isJapanese)
				return RemOrgasmSkillMessageKarrynBlowjobJP;
			else if(this.isEnglish)
				return RemOrgasmSkillMessageKarrynBlowjobEN;
			else if(this.isRussian)
				return RemOrgasmSkillMessageKarrynBlowjobRU;
			else if(this.isSChinese)
				return RemOrgasmSkillMessageKarrynBlowjobSCH;
			else if(this.isTChinese)
				return RemOrgasmSkillMessageKarrynBlowjobTCH;
			else if(this.isKorean)
				return RemOrgasmSkillMessageKarrynBlowjobKR;
			else if(this.isSpanish)
				return RemOrgasmSkillMessageKarrynBlowjobSP;

			return RemOrgasmSkillMessageKarrynBlowjobEN;
		case JUST_SKILLTYPE_KARRYN_TITTYFUCK:
			if(this.isJapanese)
				return RemOrgasmSkillMessageKarrynTittyFuckJP;
			else if(this.isEnglish)
				return RemOrgasmSkillMessageKarrynTittyFuckEN;
			else if(this.isRussian)
				return RemOrgasmSkillMessageKarrynTittyFuckRU;
			else if(this.isSChinese)
				return RemOrgasmSkillMessageKarrynTittyFuckSCH;
			else if(this.isTChinese)
				return RemOrgasmSkillMessageKarrynTittyFuckTCH;
			else if(this.isKorean)
				return RemOrgasmSkillMessageKarrynTittyFuckKR;
			else if(this.isSpanish)
				return RemOrgasmSkillMessageKarrynTittyFuckSP;

			return RemOrgasmSkillMessageKarrynTittyFuckEN;
		case JUST_SKILLTYPE_ENEMY_KISS:
			if(this.isJapanese)
				return RemOrgasmSkillMessageEnemyKissJP;
			else if(this.isEnglish)
				return RemOrgasmSkillMessageEnemyKissEN;
			else if(this.isRussian)
				return RemOrgasmSkillMessageEnemyKissRU;
			else if(this.isSChinese)
				return RemOrgasmSkillMessageEnemyKissSCH;
			else if(this.isTChinese)
				return RemOrgasmSkillMessageEnemyKissTCH;
			else if(this.isKorean)
				return RemOrgasmSkillMessageEnemyKissKR;
			else if(this.isSpanish)
				return RemOrgasmSkillMessageEnemyKissSP;

			return RemOrgasmSkillMessageEnemyKissEN;
		case JUST_SKILLTYPE_ENEMY_PETTING:
			if(this.isJapanese)
				return RemOrgasmSkillMessageEnemyPettingJP;
			else if(this.isEnglish)
				return RemOrgasmSkillMessageEnemyPettingEN;
			else if(this.isRussian)
				return RemOrgasmSkillMessageEnemyPettingRU;
			else if(this.isSChinese)
				return RemOrgasmSkillMessageEnemyPettingSCH;
			else if(this.isTChinese)
				return RemOrgasmSkillMessageEnemyPettingTCH;
			else if(this.isKorean)
				return RemOrgasmSkillMessageEnemyPettingKR;
			else if(this.isSpanish)
				return RemOrgasmSkillMessageEnemyPettingSP;

			return RemOrgasmSkillMessageEnemyPettingEN;
		case JUST_SKILLTYPE_ENEMY_PUSSY_SEX:
			if(this.isJapanese)
				return RemOrgasmSkillMessageEnemyPussySexJP;
			else if(this.isEnglish)
				return RemOrgasmSkillMessageEnemyPussySexEN;
			else if(this.isRussian)
				return RemOrgasmSkillMessageEnemyPussySexRU;
			else if(this.isSChinese)
				return RemOrgasmSkillMessageEnemyPussySexSCH;
			else if(this.isTChinese)
				return RemOrgasmSkillMessageEnemyPussySexTCH;
			else if(this.isKorean)
				return RemOrgasmSkillMessageEnemyPussySexKR;
			else if(this.isSpanish)
				return RemOrgasmSkillMessageEnemyPussySexSP;

			return RemOrgasmSkillMessageEnemyPussySexEN;
		case JUST_SKILLTYPE_ENEMY_ANAL_SEX:
			if(this.isJapanese)
				return RemOrgasmSkillMessageEnemyAnalSexJP;
			else if(this.isEnglish)
				return RemOrgasmSkillMessageEnemyAnalSexEN;
			else if(this.isRussian)
				return RemOrgasmSkillMessageEnemyAnalSexRU;
			else if(this.isSChinese)
				return RemOrgasmSkillMessageEnemyAnalSexSCH;
			else if(this.isTChinese)
				return RemOrgasmSkillMessageEnemyAnalSexTCH;
			else if(this.isKorean)
				return RemOrgasmSkillMessageEnemyAnalSexKR;
			else if(this.isSpanish)
				return RemOrgasmSkillMessageEnemyAnalSexSP;

			return RemOrgasmSkillMessageEnemyAnalSexEN;
		case JUST_SKILLTYPE_ENEMY_HANDJOB:
			if(this.isJapanese)
				return RemOrgasmSkillMessageEnemyHandjobJP;
			else if(this.isEnglish)
				return RemOrgasmSkillMessageEnemyHandjobEN;
			else if(this.isRussian)
				return RemOrgasmSkillMessageEnemyHandjobRU;
			else if(this.isSChinese)
				return RemOrgasmSkillMessageEnemyHandjobSCH;
			else if(this.isTChinese)
				return RemOrgasmSkillMessageEnemyHandjobTCH;
			else if(this.isKorean)
				return RemOrgasmSkillMessageEnemyHandjobKR;
			else if(this.isSpanish)
				return RemOrgasmSkillMessageEnemyHandjobSP;

			return RemOrgasmSkillMessageEnemyHandjobEN;
		case JUST_SKILLTYPE_ENEMY_BLOWJOB:
			if(this.isJapanese)
				return RemOrgasmSkillMessageEnemyBlowjobJP;
			else if(this.isEnglish)
				return RemOrgasmSkillMessageEnemyBlowjobEN;
			else if(this.isRussian)
				return RemOrgasmSkillMessageEnemyBlowjobRU;
			else if(this.isSChinese)
				return RemOrgasmSkillMessageEnemyBlowjobSCH;
			else if(this.isTChinese)
				return RemOrgasmSkillMessageEnemyBlowjobTCH;
			else if(this.isKorean)
				return RemOrgasmSkillMessageEnemyBlowjobKR;
			else if(this.isSpanish)
				return RemOrgasmSkillMessageEnemyBlowjobSP;

			return RemOrgasmSkillMessageEnemyBlowjobEN;
		case JUST_SKILLTYPE_ENEMY_TITTYFUCK:
			if(this.isJapanese)
				return RemOrgasmSkillMessageEnemyTittyFuckJP;
			else if(this.isEnglish)
				return RemOrgasmSkillMessageEnemyTittyFuckEN;
			else if(this.isRussian)
				return RemOrgasmSkillMessageEnemyTittyFuckRU;
			else if(this.isSChinese)
				return RemOrgasmSkillMessageEnemyTittyFuckSCH;
			else if(this.isTChinese)
				return RemOrgasmSkillMessageEnemyTittyFuckTCH;
			else if(this.isKorean)
				return RemOrgasmSkillMessageEnemyTittyFuckKR;
			else if(this.isSpanish)
				return RemOrgasmSkillMessageEnemyTittyFuckSP;

			return RemOrgasmSkillMessageEnemyTittyFuckEN;
		case JUST_SKILLTYPE_ENEMY_CUNNILINGUS:
			if(this.isJapanese)
				return RemOrgasmSkillMessageEnemyCunnilingusJP;
			else if(this.isEnglish)
				return RemOrgasmSkillMessageEnemyCunnilingusEN;
			else if(this.isRussian)
				return RemOrgasmSkillMessageEnemyCunnilingusRU;
			else if(this.isSChinese)
				return RemOrgasmSkillMessageEnemyCunnilingusSCH;
			else if(this.isTChinese)
				return RemOrgasmSkillMessageEnemyCunnilingusTCH;
			else if(this.isKorean)
				return RemOrgasmSkillMessageEnemyCunnilingusKR;
			else if(this.isSpanish)
				return RemOrgasmSkillMessageEnemyCunnilingusSP;

			return RemOrgasmSkillMessageEnemyCunnilingusEN;
		case JUST_SKILLTYPE_ENEMY_BUKKAKE:
			if(this.isJapanese)
				return RemOrgasmSkillMessageBukkakeJP;
			else if(this.isEnglish)
				return RemOrgasmSkillMessageBukkakeEN;
			else if(this.isRussian)
				return RemOrgasmSkillMessageBukkakeRU;
			else if(this.isSChinese)
				return RemOrgasmSkillMessageBukkakeSCH;
			else if(this.isTChinese)
				return RemOrgasmSkillMessageBukkakeTCH;
			else if(this.isKorean)
				return RemOrgasmSkillMessageBukkakeKR;
			else if(this.isSpanish)
				return RemOrgasmSkillMessageBukkakeSP;

			return RemOrgasmSkillMessageBukkakeEN;
		case JUST_SKILLTYPE_ENEMY_CUM_SWALLOW:
			if(this.isJapanese)
				return RemOrgasmSkillMessageSwallowJP;
			else if(this.isEnglish)
				return RemOrgasmSkillMessageSwallowEN;
			else if(this.isRussian)
				return RemOrgasmSkillMessageSwallowRU;
			else if(this.isSChinese)
				return RemOrgasmSkillMessageSwallowSCH;
			else if(this.isTChinese)
				return RemOrgasmSkillMessageSwallowTCH;
			else if(this.isKorean)
				return RemOrgasmSkillMessageSwallowKR;
			else if(this.isSpanish)
				return RemOrgasmSkillMessageSwallowSP;

			return RemOrgasmSkillMessageSwallowEN;
		case JUST_SKILLTYPE_ENEMY_PUSSY_CREAMPIE:
			if(this.isJapanese)
				return RemOrgasmSkillMessagePussyCreampieJP;
			else if(this.isEnglish)
				return RemOrgasmSkillMessagePussyCreampieEN;
			else if(this.isRussian)
				return RemOrgasmSkillMessagePussyCreampieRU;
			else if(this.isSChinese)
				return RemOrgasmSkillMessagePussyCreampieSCH;
			else if(this.isTChinese)
				return RemOrgasmSkillMessagePussyCreampieTCH;
			else if(this.isKorean)
				return RemOrgasmSkillMessagePussyCreampieKR;
			else if(this.isSpanish)
				return RemOrgasmSkillMessagePussyCreampieSP;

			return RemOrgasmSkillMessagePussyCreampieEN;
		case JUST_SKILLTYPE_ENEMY_ANAL_CREAMPIE:
			if(this.isJapanese)
				return RemOrgasmSkillMessageAnalCreampieJP;
			else if(this.isEnglish)
				return RemOrgasmSkillMessageAnalCreampieEN;
			else if(this.isRussian)
				return RemOrgasmSkillMessageAnalCreampieRU;
			else if(this.isSChinese)
				return RemOrgasmSkillMessageAnalCreampieSCH;
			else if(this.isTChinese)
				return RemOrgasmSkillMessageAnalCreampieTCH;
			else if(this.isKorean)
				return RemOrgasmSkillMessageAnalCreampieKR;
			else if(this.isSpanish)
				return RemOrgasmSkillMessageAnalCreampieSP;

			return RemOrgasmSkillMessageAnalCreampieEN;
		case JUST_SKILLTYPE_ENEMY_TALK:
			if(this.isJapanese)
				return RemOrgasmSkillMessageTalkJP;
			else if(this.isEnglish)
				return RemOrgasmSkillMessageTalkEN;
			else if(this.isRussian)
				return RemOrgasmSkillMessageTalkRU;
			else if(this.isSChinese)
				return RemOrgasmSkillMessageTalkSCH;
			else if(this.isTChinese)
				return RemOrgasmSkillMessageTalkTCH;
			else if(this.isKorean)
				return RemOrgasmSkillMessageTalkKR;
			else if(this.isSpanish)
				return RemOrgasmSkillMessageTalkSP;

			return RemOrgasmSkillMessageTalkEN;
		case JUST_SKILLTYPE_ENEMY_SIGHT:
			if(this.isJapanese)
				return RemOrgasmSkillMessageSightJP;
			else if(this.isEnglish)
				return RemOrgasmSkillMessageSightEN;
			else if(this.isRussian)
				return RemOrgasmSkillMessageSightRU;
			else if(this.isSChinese)
				return RemOrgasmSkillMessageSightSCH;
			else if(this.isTChinese)
				return RemOrgasmSkillMessageSightTCH;
			else if(this.isKorean)
				return RemOrgasmSkillMessageSightKR;
			else if(this.isSpanish)
				return RemOrgasmSkillMessageSightSP;

			return RemOrgasmSkillMessageSightEN;
		case JUST_SKILLTYPE_ENEMY_SPANKING:
			if(this.isJapanese)
				return RemOrgasmSkillMessageSpankJP;
			else if(this.isEnglish)
				return RemOrgasmSkillMessageSpankEN;
			else if(this.isRussian)
				return RemOrgasmSkillMessageSpankRU;
			else if(this.isSChinese)
				return RemOrgasmSkillMessageSpankSCH;
			else if(this.isTChinese)
				return RemOrgasmSkillMessageSpankTCH;
			else if(this.isKorean)
				return RemOrgasmSkillMessageSpankKR;
			else if(this.isSpanish)
				return RemOrgasmSkillMessageSpankSP;

			return RemOrgasmSkillMessageSpankEN;
		case JUST_SKILLTYPE_ENEMY_MASOCHISM:
			if(this.isJapanese)
				return RemOrgasmSkillMessageSadismJP;
			else if(this.isEnglish)
				return RemOrgasmSkillMessageSadismEN;
			else if(this.isRussian)
				return RemOrgasmSkillMessageSadismRU;
			else if(this.isSChinese)
				return RemOrgasmSkillMessageSadismSCH;
			else if(this.isTChinese)
				return RemOrgasmSkillMessageSadismTCH;
			else if(this.isKorean)
				return RemOrgasmSkillMessageSadismKR;
			else if(this.isSpanish)
				return RemOrgasmSkillMessageSadismSP;

			return RemOrgasmSkillMessageSadismEN;
		case JUST_SKILLTYPE_ENEMY_SADISM:
			if(this.isJapanese)
				return RemOrgasmSkillMessageMasochismJP;
			else if(this.isEnglish)
				return RemOrgasmSkillMessageMasochismEN;
			else if(this.isRussian)
				return RemOrgasmSkillMessageMasochismRU;
			else if(this.isSChinese)
				return RemOrgasmSkillMessageMasochismSCH;
			else if(this.isTChinese)
				return RemOrgasmSkillMessageMasochismTCH;
			else if(this.isKorean)
				return RemOrgasmSkillMessageMasochismKR;
			else if(this.isSpanish)
				return RemOrgasmSkillMessageMasochismSP;

			return RemOrgasmSkillMessageMasochismEN;
		case JUST_SKILLTYPE_PASSIVE_SIGHT:
			if(this.isJapanese)
				return RemOrgasmSkillMessageSightJP;
			else if(this.isEnglish)
				return RemOrgasmSkillMessageSightEN;
			else if(this.isRussian)
				return RemOrgasmSkillMessageSightRU;
			else if(this.isSChinese)
				return RemOrgasmSkillMessageSightSCH;
			else if(this.isTChinese)
				return RemOrgasmSkillMessageSightTCH;
			else if(this.isKorean)
				return RemOrgasmSkillMessageSightKR;
			else if(this.isSpanish)
				return RemOrgasmSkillMessageSightSP;

			return RemOrgasmSkillMessageSightEN;
		case JUST_SKILLTYPE_PASSIVE_TOY:
			if(this.isJapanese)
				return RemOrgasmSkillMessageToyJP;
			else if(this.isEnglish)
				return RemOrgasmSkillMessageToyEN;
			else if(this.isRussian)
				return RemOrgasmSkillMessageToyRU;
			else if(this.isSChinese)
				return RemOrgasmSkillMessageToySCH;
			else if(this.isTChinese)
				return RemOrgasmSkillMessageToyTCH;
			else if(this.isKorean)
				return RemOrgasmSkillMessageToyKR;
			else if(this.isSpanish)
				return RemOrgasmSkillMessageToySP;

			return RemOrgasmSkillMessageToyEN;
		case JUST_SKILLTYPE_ENEMY_TOY_PLAY:
			if(this.isJapanese)
				return RemOrgasmSkillMessageToyJP;
			else if(this.isEnglish)
				return RemOrgasmSkillMessageToyEN;
			else if(this.isRussian)
				return RemOrgasmSkillMessageToyRU;
			else if(this.isSChinese)
				return RemOrgasmSkillMessageToySCH;
			else if(this.isTChinese)
				return RemOrgasmSkillMessageToyTCH;
			else if(this.isKorean)
				return RemOrgasmSkillMessageToyKR;
			else if(this.isSpanish)
				return RemOrgasmSkillMessageToySP;

			return RemOrgasmSkillMessageToyEN;
		case JUST_SKILLTYPE_ENEMY_TOY_PLAY_CLIT:
			if(this.isJapanese)
				return RemOrgasmSkillMessageToyJP;
			else if(this.isEnglish)
				return RemOrgasmSkillMessageToyEN;
			else if(this.isRussian)
				return RemOrgasmSkillMessageToyRU;
			else if(this.isSChinese)
				return RemOrgasmSkillMessageToySCH;
			else if(this.isTChinese)
				return RemOrgasmSkillMessageToyTCH;
			else if(this.isKorean)
				return RemOrgasmSkillMessageToyKR;
			else if(this.isSpanish)
				return RemOrgasmSkillMessageToySP;

			return RemOrgasmSkillMessageToyEN;
		case JUST_SKILLTYPE_ENEMY_TOY_PLAY_PUSSY:
			if(this.isJapanese)
				return RemOrgasmSkillMessageToyJP;
			else if(this.isEnglish)
				return RemOrgasmSkillMessageToyEN;
			else if(this.isRussian)
				return RemOrgasmSkillMessageToyRU;
			else if(this.isSChinese)
				return RemOrgasmSkillMessageToySCH;
			else if(this.isTChinese)
				return RemOrgasmSkillMessageToyTCH;
			else if(this.isKorean)
				return RemOrgasmSkillMessageToyKR;
			else if(this.isSpanish)
				return RemOrgasmSkillMessageToySP;

			return RemOrgasmSkillMessageToyEN;
		case JUST_SKILLTYPE_ENEMY_TOY_PLAY_ANAL:
			if(this.isJapanese)
				return RemOrgasmSkillMessageToyJP;
			else if(this.isEnglish)
				return RemOrgasmSkillMessageToyEN;
			else if(this.isRussian)
				return RemOrgasmSkillMessageToyRU;
			else if(this.isSChinese)
				return RemOrgasmSkillMessageToySCH;
			else if(this.isTChinese)
				return RemOrgasmSkillMessageToyTCH;
			else if(this.isKorean)
				return RemOrgasmSkillMessageToyKR;
			else if(this.isSpanish)
				return RemOrgasmSkillMessageToySP;

			return RemOrgasmSkillMessageToyEN;
		case JUST_SKILLTYPE_KARRYN_TOY_INSERT_CLIT:
			if(this.isJapanese)
				return RemOrgasmSkillMessageToyJP;
			else if(this.isEnglish)
				return RemOrgasmSkillMessageToyEN;
			else if(this.isRussian)
				return RemOrgasmSkillMessageToyRU;
			else if(this.isSChinese)
				return RemOrgasmSkillMessageToySCH;
			else if(this.isTChinese)
				return RemOrgasmSkillMessageToyTCH;
			else if(this.isKorean)
				return RemOrgasmSkillMessageToyKR;
			else if(this.isSpanish)
				return RemOrgasmSkillMessageToySP;

			return RemOrgasmSkillMessageToyEN;
		case JUST_SKILLTYPE_KARRYN_TOY_INSERT_PUSSY:
			if(this.isJapanese)
				return RemOrgasmSkillMessageToyJP;
			else if(this.isEnglish)
				return RemOrgasmSkillMessageToyEN;
			else if(this.isRussian)
				return RemOrgasmSkillMessageToyRU;
			else if(this.isSChinese)
				return RemOrgasmSkillMessageToySCH;
			else if(this.isTChinese)
				return RemOrgasmSkillMessageToyTCH;
			else if(this.isKorean)
				return RemOrgasmSkillMessageToyKR;
			else if(this.isSpanish)
				return RemOrgasmSkillMessageToySP;

			return RemOrgasmSkillMessageToyEN;
		case JUST_SKILLTYPE_KARRYN_TOY_INSERT_ANAL:
			if(this.isJapanese)
				return RemOrgasmSkillMessageToyJP;
			else if(this.isEnglish)
				return RemOrgasmSkillMessageToyEN;
			else if(this.isRussian)
				return RemOrgasmSkillMessageToyRU;
			else if(this.isSChinese)
				return RemOrgasmSkillMessageToySCH;
			else if(this.isTChinese)
				return RemOrgasmSkillMessageToyTCH;
			else if(this.isKorean)
				return RemOrgasmSkillMessageToyKR;
			else if(this.isSpanish)
				return RemOrgasmSkillMessageToySP;

			return RemOrgasmSkillMessageToyEN;
		case JUST_SKILLTYPE_KARRYN_TOY_PLAY_CLIT:
			if(this.isJapanese)
				return RemOrgasmSkillMessageToyJP;
			else if(this.isEnglish)
				return RemOrgasmSkillMessageToyEN;
			else if(this.isRussian)
				return RemOrgasmSkillMessageToyRU;
			else if(this.isSChinese)
				return RemOrgasmSkillMessageToySCH;
			else if(this.isTChinese)
				return RemOrgasmSkillMessageToyTCH;
			else if(this.isKorean)
				return RemOrgasmSkillMessageToyKR;
			else if(this.isSpanish)
				return RemOrgasmSkillMessageToySP;

			return RemOrgasmSkillMessageToyEN;
		case JUST_SKILLTYPE_KARRYN_TOY_PLAY_PUSSY:
			if(this.isJapanese)
				return RemOrgasmSkillMessageToyJP;
			else if(this.isEnglish)
				return RemOrgasmSkillMessageToyEN;
			else if(this.isRussian)
				return RemOrgasmSkillMessageToyRU;
			else if(this.isSChinese)
				return RemOrgasmSkillMessageToySCH;
			else if(this.isTChinese)
				return RemOrgasmSkillMessageToyTCH;
			else if(this.isKorean)
				return RemOrgasmSkillMessageToyKR;
			else if(this.isSpanish)
				return RemOrgasmSkillMessageToySP;

			return RemOrgasmSkillMessageToyEN;
		case JUST_SKILLTYPE_KARRYN_TOY_PLAY_ANAL:
			if(this.isJapanese)
				return RemOrgasmSkillMessageToyJP;
			else if(this.isEnglish)
				return RemOrgasmSkillMessageToyEN;
			else if(this.isRussian)
				return RemOrgasmSkillMessageToyRU;
			else if(this.isSChinese)
				return RemOrgasmSkillMessageToySCH;
			else if(this.isTChinese)
				return RemOrgasmSkillMessageToyTCH;
			else if(this.isKorean)
				return RemOrgasmSkillMessageToyKR;
			else if(this.isSpanish)
				return RemOrgasmSkillMessageToySP;

			return RemOrgasmSkillMessageToyEN;

	}

	return '';

};

TextManager.pluralText_JustPeople = function(value) {
	if(value === 1) {
		return TextManager.statusRecordJustPeopleSingular;
	}
	else {
		return TextManager.statusRecordJustPeoplePlural;
	}
};

TextManager.edictsOutlineColorOption = function(symbol, value) {
	if(symbol === 'edictsOutlineColorObtainable') {
		switch (value) {
		case EDICTS_OUTLINE_COLOR_OBTAINABLE_GREEN_ID:
			if(this.isJapanese)
				return RemYanflyOptions_EdictsOutlineColorName_Green_JP;
			else if(this.isEnglish)
				return RemYanflyOptions_EdictsOutlineColorName_Green_EN;
			else if(this.isRussian)
				return RemYanflyOptions_EdictsOutlineColorName_Green_RU;
			else if(this.isSChinese)
				return RemYanflyOptions_EdictsOutlineColorName_Green_SCH;
			else if(this.isTChinese)
				return RemYanflyOptions_EdictsOutlineColorName_Green_TCH;
			else if(this.isKorean)
				return RemYanflyOptions_EdictsOutlineColorName_Green_KR;
			else if(this.isSpanish)
				return RemYanflyOptions_EdictsOutlineColorName_Green_SP;

			return RemYanflyOptions_EdictsOutlineColorName_Green_EN;
		case EDICTS_OUTLINE_COLOR_OBTAINABLE_LIGHTBLUE_ID:
			if(this.isJapanese)
				return RemYanflyOptions_EdictsOutlineColorName_LightBlue_JP;
			else if(this.isEnglish)
				return RemYanflyOptions_EdictsOutlineColorName_LightBlue_EN;
			else if(this.isRussian)
				return RemYanflyOptions_EdictsOutlineColorName_LightBlue_RU;
			else if(this.isSChinese)
				return RemYanflyOptions_EdictsOutlineColorName_LightBlue_SCH;
			else if(this.isTChinese)
				return RemYanflyOptions_EdictsOutlineColorName_LightBlue_TCH;
			else if(this.isKorean)
				return RemYanflyOptions_EdictsOutlineColorName_LightBlue_KR;
			else if(this.isSpanish)
				return RemYanflyOptions_EdictsOutlineColorName_LightBlue_SP;

			return RemYanflyOptions_EdictsOutlineColorName_LightBlue_EN;
		}
	}
	else if(symbol === 'edictsOutlineColorMeetReq') {
		switch (value) {
		case EDICTS_OUTLINE_COLOR_METREQ_YELLOW_ID:
			if(this.isJapanese)
				return RemYanflyOptions_EdictsOutlineColorName_Yellow_JP;
			else if(this.isEnglish)
				return RemYanflyOptions_EdictsOutlineColorName_Yellow_EN;
			else if(this.isRussian)
				return RemYanflyOptions_EdictsOutlineColorName_Yellow_RU;
			else if(this.isSChinese)
				return RemYanflyOptions_EdictsOutlineColorName_Yellow_SCH;
			else if(this.isTChinese)
				return RemYanflyOptions_EdictsOutlineColorName_Yellow_TCH;
			else if(this.isKorean)
				return RemYanflyOptions_EdictsOutlineColorName_Yellow_KR;
			else if(this.isSpanish)
				return RemYanflyOptions_EdictsOutlineColorName_Yellow_SP;

			return RemYanflyOptions_EdictsOutlineColorName_Yellow_EN;
		case EDICTS_OUTLINE_COLOR_METREQ_PURPLE_ID:
			if(this.isJapanese)
				return RemYanflyOptions_EdictsOutlineColorName_Purple_JP;
			else if(this.isEnglish)
				return RemYanflyOptions_EdictsOutlineColorName_Purple_EN;
			else if(this.isRussian)
				return RemYanflyOptions_EdictsOutlineColorName_Purple_RU;
			else if(this.isSChinese)
				return RemYanflyOptions_EdictsOutlineColorName_Purple_SCH;
			else if(this.isTChinese)
				return RemYanflyOptions_EdictsOutlineColorName_Purple_TCH;
			else if(this.isKorean)
				return RemYanflyOptions_EdictsOutlineColorName_Purple_KR;
			else if(this.isSpanish)
				return RemYanflyOptions_EdictsOutlineColorName_Purple_SP;

			return RemYanflyOptions_EdictsOutlineColorName_Purple_EN;
		}
	}
	else if(symbol === 'edictsOutlineColorNoReq') {
		switch (value) {
		case EDICTS_OUTLINE_COLOR_NOREQ_GRAY_ID:
			if(this.isJapanese)
				return RemYanflyOptions_EdictsOutlineColorName_Gray_JP;
			else if(this.isEnglish)
				return RemYanflyOptions_EdictsOutlineColorName_Gray_EN;
			else if(this.isRussian)
				return RemYanflyOptions_EdictsOutlineColorName_Gray_RU;
			else if(this.isSChinese)
				return RemYanflyOptions_EdictsOutlineColorName_Gray_SCH;
			else if(this.isTChinese)
				return RemYanflyOptions_EdictsOutlineColorName_Gray_TCH;
			else if(this.isKorean)
				return RemYanflyOptions_EdictsOutlineColorName_Gray_KR;
			else if(this.isSpanish)
				return RemYanflyOptions_EdictsOutlineColorName_Gray_SP;

			return RemYanflyOptions_EdictsOutlineColorName_Gray_EN;
		case EDICTS_OUTLINE_COLOR_NOREQ_BLACK_ID:
			if(this.isJapanese)
				return RemYanflyOptions_EdictsOutlineColorName_Black_JP;
			else if(this.isEnglish)
				return RemYanflyOptions_EdictsOutlineColorName_Black_EN;
			else if(this.isRussian)
				return RemYanflyOptions_EdictsOutlineColorName_Black_RU;
			else if(this.isSChinese)
				return RemYanflyOptions_EdictsOutlineColorName_Black_SCH;
			else if(this.isTChinese)
				return RemYanflyOptions_EdictsOutlineColorName_Black_TCH;
			else if(this.isKorean)
				return RemYanflyOptions_EdictsOutlineColorName_Black_KR;
			else if(this.isSpanish)
				return RemYanflyOptions_EdictsOutlineColorName_Black_SP;

			return RemYanflyOptions_EdictsOutlineColorName_Black_EN;
		case EDICTS_OUTLINE_COLOR_NOREQ_RED_ID:
			if(this.isJapanese)
				return RemYanflyOptions_EdictsOutlineColorName_Red_JP;
			else if(this.isEnglish)
				return RemYanflyOptions_EdictsOutlineColorName_Red_EN;
			else if(this.isRussian)
				return RemYanflyOptions_EdictsOutlineColorName_Red_RU;
			else if(this.isSChinese)
				return RemYanflyOptions_EdictsOutlineColorName_Red_SCH;
			else if(this.isTChinese)
				return RemYanflyOptions_EdictsOutlineColorName_Red_TCH;
			else if(this.isKorean)
				return RemYanflyOptions_EdictsOutlineColorName_Red_KR;
			else if(this.isSpanish)
				return RemYanflyOptions_EdictsOutlineColorName_Red_SP;

			return RemYanflyOptions_EdictsOutlineColorName_Red_EN;
		}
	}

	return '';
};

TextManager.battlelogDurationOption = function(value) {
	switch (value) {
	case 0:
		if(this.isJapanese)
			return RemYanflyOptions_Battlelog_Duration_Zero_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_Battlelog_Duration_Zero_EN;
		else if(this.isRussian)
			return RemYanflyOptions_Battlelog_Duration_Zero_RU;
		else if(this.isSChinese)
			return RemYanflyOptions_Battlelog_Duration_Zero_SCH;
		else if(this.isTChinese)
			return RemYanflyOptions_Battlelog_Duration_Zero_TCH;
		else if(this.isKorean)
			return RemYanflyOptions_Battlelog_Duration_Zero_KR;
		else if(this.isSpanish)
			return RemYanflyOptions_Battlelog_Duration_Zero_SP;

		return RemYanflyOptions_Battlelog_Duration_Zero_EN;
	case 1:
		if(this.isJapanese)
			return RemYanflyOptions_Battlelog_Duration_One_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_Battlelog_Duration_One_EN;
		else if(this.isRussian)
			return RemYanflyOptions_Battlelog_Duration_One_RU;
		else if(this.isSChinese)
			return RemYanflyOptions_Battlelog_Duration_One_SCH;
		else if(this.isTChinese)
			return RemYanflyOptions_Battlelog_Duration_One_TCH;
		else if(this.isKorean)
			return RemYanflyOptions_Battlelog_Duration_One_KR;
		else if(this.isSpanish)
			return RemYanflyOptions_Battlelog_Duration_One_SP;

		return RemYanflyOptions_Battlelog_Duration_One_EN;
	case 2:
		if(this.isJapanese)
			return RemYanflyOptions_Battlelog_Duration_Two_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_Battlelog_Duration_Two_EN;
		else if(this.isRussian)
			return RemYanflyOptions_Battlelog_Duration_Two_RU;
		else if(this.isSChinese)
			return RemYanflyOptions_Battlelog_Duration_Two_SCH;
		else if(this.isTChinese)
			return RemYanflyOptions_Battlelog_Duration_Two_TCH;
		else if(this.isKorean)
			return RemYanflyOptions_Battlelog_Duration_Two_KR;
		else if(this.isSpanish)
			return RemYanflyOptions_Battlelog_Duration_Two_SP;

		return RemYanflyOptions_Battlelog_Duration_Two_EN;
	case 3:
		if(this.isJapanese)
			return RemYanflyOptions_Battlelog_Duration_Three_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_Battlelog_Duration_Three_EN;
		else if(this.isRussian)
			return RemYanflyOptions_Battlelog_Duration_Three_RU;
		else if(this.isSChinese)
			return RemYanflyOptions_Battlelog_Duration_Three_SCH;
		else if(this.isTChinese)
			return RemYanflyOptions_Battlelog_Duration_Three_TCH;
		else if(this.isKorean)
			return RemYanflyOptions_Battlelog_Duration_Three_KR;
		else if(this.isSpanish)
			return RemYanflyOptions_Battlelog_Duration_Three_SP;

		return RemYanflyOptions_Battlelog_Duration_Three_EN;
	case 4:
		if(this.isJapanese)
			return RemYanflyOptions_Battlelog_Duration_Four_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_Battlelog_Duration_Four_EN;
		else if(this.isRussian)
			return RemYanflyOptions_Battlelog_Duration_Four_RU;
		else if(this.isSChinese)
			return RemYanflyOptions_Battlelog_Duration_Four_SCH;
		else if(this.isTChinese)
			return RemYanflyOptions_Battlelog_Duration_Four_TCH;
		else if(this.isKorean)
			return RemYanflyOptions_Battlelog_Duration_Four_KR;
		else if(this.isSpanish)
			return RemYanflyOptions_Battlelog_Duration_Four_SP;

		return RemYanflyOptions_Battlelog_Duration_Four_EN;
	}

	return '';
};

TextManager.battlelogFontSizeOption = function(value) {
	switch (value) {
	case 0:
		if(this.isJapanese)
			return RemYanflyOptions_Battlelog_Fontsize_Zero_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_Battlelog_Fontsize_Zero_EN;
		else if(this.isRussian)
			return RemYanflyOptions_Battlelog_Fontsize_Zero_RU;
		else if(this.isSChinese)
			return RemYanflyOptions_Battlelog_Fontsize_Zero_SCH;
		else if(this.isTChinese)
			return RemYanflyOptions_Battlelog_Fontsize_Zero_TCH;
		else if(this.isKorean)
			return RemYanflyOptions_Battlelog_Fontsize_Zero_KR;
		else if(this.isSpanish)
			return RemYanflyOptions_Battlelog_Fontsize_Zero_SP;

		return RemYanflyOptions_Battlelog_Fontsize_Zero_EN;
	case 1:
		if(this.isJapanese)
			return RemYanflyOptions_Battlelog_Fontsize_One_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_Battlelog_Fontsize_One_EN;
		else if(this.isRussian)
			return RemYanflyOptions_Battlelog_Fontsize_One_RU;
		else if(this.isSChinese)
			return RemYanflyOptions_Battlelog_Fontsize_One_SCH;
		else if(this.isTChinese)
			return RemYanflyOptions_Battlelog_Fontsize_One_TCH;
		else if(this.isKorean)
			return RemYanflyOptions_Battlelog_Fontsize_One_KR;
		else if(this.isSpanish)
			return RemYanflyOptions_Battlelog_Fontsize_One_SP;

		return RemYanflyOptions_Battlelog_Fontsize_One_EN;
	case 2:
		if(this.isJapanese)
			return RemYanflyOptions_Battlelog_Fontsize_Two_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_Battlelog_Fontsize_Two_EN;
		else if(this.isRussian)
			return RemYanflyOptions_Battlelog_Fontsize_Two_RU;
		else if(this.isSChinese)
			return RemYanflyOptions_Battlelog_Fontsize_Two_SCH;
		else if(this.isTChinese)
			return RemYanflyOptions_Battlelog_Fontsize_Two_TCH;
		else if(this.isKorean)
			return RemYanflyOptions_Battlelog_Fontsize_Two_KR;
		else if(this.isSpanish)
			return RemYanflyOptions_Battlelog_Fontsize_Two_SP;

		return RemYanflyOptions_Battlelog_Fontsize_Two_EN;
	case 3:
		if(this.isJapanese)
			return RemYanflyOptions_Battlelog_Fontsize_Three_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_Battlelog_Fontsize_Three_EN;
		else if(this.isRussian)
			return RemYanflyOptions_Battlelog_Fontsize_Three_RU;
		else if(this.isSChinese)
			return RemYanflyOptions_Battlelog_Fontsize_Three_SCH;
		else if(this.isTChinese)
			return RemYanflyOptions_Battlelog_Fontsize_Three_TCH;
		else if(this.isKorean)
			return RemYanflyOptions_Battlelog_Fontsize_Three_KR;
		else if(this.isSpanish)
			return RemYanflyOptions_Battlelog_Fontsize_Three_SP;


		return RemYanflyOptions_Battlelog_Fontsize_Three_EN;
	case 4:
		if(this.isJapanese)
			return RemYanflyOptions_Battlelog_Fontsize_Four_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_Battlelog_Fontsize_Four_EN;
		else if(this.isRussian)
			return RemYanflyOptions_Battlelog_Fontsize_Four_RU;
		else if(this.isSChinese)
			return RemYanflyOptions_Battlelog_Fontsize_Four_SCH;
		else if(this.isTChinese)
			return RemYanflyOptions_Battlelog_Fontsize_Four_TCH;
		else if(this.isKorean)
			return RemYanflyOptions_Battlelog_Fontsize_Four_KR;
		else if(this.isSpanish)
			return RemYanflyOptions_Battlelog_Fontsize_Four_SP;

		return RemYanflyOptions_Battlelog_Fontsize_Four_EN;
	}

	return '';
};

TextManager.maleDialogueAppearOption = function(value) {
	switch (value) {
	case 0:
		if(this.isJapanese)
			return RemYanflyOptions_MaleDialogueAppear_Zero_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_MaleDialogueAppear_Zero_EN;
		else if(this.isRussian)
			return RemYanflyOptions_MaleDialogueAppear_Zero_RU;
		else if(this.isSChinese)
			return RemYanflyOptions_MaleDialogueAppear_Zero_SCH;
		else if(this.isTChinese)
			return RemYanflyOptions_MaleDialogueAppear_Zero_TCH;
		else if(this.isKorean)
			return RemYanflyOptions_MaleDialogueAppear_Zero_KR;
		else if(this.isSpanish)
			return RemYanflyOptions_MaleDialogueAppear_Zero_SP;

		return RemYanflyOptions_MaleDialogueAppear_Zero_EN;
	case 1:
		if(this.isJapanese)
			return RemYanflyOptions_MaleDialogueAppear_One_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_MaleDialogueAppear_One_EN;
		else if(this.isRussian)
			return RemYanflyOptions_MaleDialogueAppear_One_RU;
		else if(this.isSChinese)
			return RemYanflyOptions_MaleDialogueAppear_One_SCH;
		else if(this.isTChinese)
			return RemYanflyOptions_MaleDialogueAppear_One_TCH;
		else if(this.isKorean)
			return RemYanflyOptions_MaleDialogueAppear_One_KR;
		else if(this.isSpanish)
			return RemYanflyOptions_MaleDialogueAppear_One_SP;

		return RemYanflyOptions_MaleDialogueAppear_One_EN;
	case 2:
		if(this.isJapanese)
			return RemYanflyOptions_MaleDialogueAppear_Two_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_MaleDialogueAppear_Two_EN;
		else if(this.isRussian)
			return RemYanflyOptions_MaleDialogueAppear_Two_RU;
		else if(this.isSChinese)
			return RemYanflyOptions_MaleDialogueAppear_Two_SCH;
		else if(this.isTChinese)
			return RemYanflyOptions_MaleDialogueAppear_Two_TCH;
		else if(this.isKorean)
			return RemYanflyOptions_MaleDialogueAppear_Two_KR;
		else if(this.isSpanish)
			return RemYanflyOptions_MaleDialogueAppear_Two_SP;

		return RemYanflyOptions_MaleDialogueAppear_Two_EN;
	case 3:
		if(this.isJapanese)
			return RemYanflyOptions_MaleDialogueAppear_Three_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_MaleDialogueAppear_Three_EN;
		else if(this.isRussian)
			return RemYanflyOptions_MaleDialogueAppear_Three_RU;
		else if(this.isSChinese)
			return RemYanflyOptions_MaleDialogueAppear_Three_SCH;
		else if(this.isTChinese)
			return RemYanflyOptions_MaleDialogueAppear_Three_TCH;
		else if(this.isKorean)
			return RemYanflyOptions_MaleDialogueAppear_Three_KR;
		else if(this.isSpanish)
			return RemYanflyOptions_MaleDialogueAppear_Three_SP;

		return RemYanflyOptions_MaleDialogueAppear_Three_EN;
	case 4:
		if(this.isJapanese)
			return RemYanflyOptions_MaleDialogueAppear_Four_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_MaleDialogueAppear_Four_EN;
		else if(this.isRussian)
			return RemYanflyOptions_MaleDialogueAppear_Four_RU;
		else if(this.isSChinese)
			return RemYanflyOptions_MaleDialogueAppear_Four_SCH;
		else if(this.isTChinese)
			return RemYanflyOptions_MaleDialogueAppear_Four_TCH;
		else if(this.isKorean)
			return RemYanflyOptions_MaleDialogueAppear_Four_KR;
		else if(this.isSpanish)
			return RemYanflyOptions_MaleDialogueAppear_Four_SP;

		return RemYanflyOptions_MaleDialogueAppear_Four_EN;
	}

	return '';
};

TextManager.karrynBoobsSizeOption = function(value) {
	switch (value) {
	case 0:
		if(this.isJapanese)
			return RemYanflyOptions_BoobsSize_One_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_BoobsSize_One_EN;
		else {
			try {
				if(this.isRussian) return RemYanflyOptions_BoobsSize_One_RU;
				else if(this.isSChinese) return RemYanflyOptions_BoobsSize_One_SCH;
				else if(this.isTChinese) return RemYanflyOptions_BoobsSize_One_TCH;
				else if(this.isKorean) return RemYanflyOptions_BoobsSize_One_KR;
				else if(this.isSpanish) return RemYanflyOptions_BoobsSize_One_SP;
			} catch(e) {}
		}

		return RemYanflyOptions_BoobsSize_One_EN;
	case 1:
		if(this.isJapanese)
			return RemYanflyOptions_BoobsSize_Two_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_BoobsSize_Two_EN;
		else {
			try {
				if(this.isRussian) return RemYanflyOptions_BoobsSize_Two_RU;
				else if(this.isSChinese) return RemYanflyOptions_BoobsSize_Two_SCH;
				else if(this.isTChinese) return RemYanflyOptions_BoobsSize_Two_TCH;
				else if(this.isKorean) return RemYanflyOptions_BoobsSize_Two_KR;
				else if(this.isSpanish) return RemYanflyOptions_BoobsSize_Two_SP;
			} catch(e) {}
		}

		return RemYanflyOptions_BoobsSize_Two_EN;
	case 2:
		if(this.isJapanese)
			return RemYanflyOptions_BoobsSize_Three_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_BoobsSize_Three_EN;
		else {
			try {
				if(this.isRussian) return RemYanflyOptions_BoobsSize_Three_RU;
				else if(this.isSChinese) return RemYanflyOptions_BoobsSize_Three_SCH;
				else if(this.isTChinese) return RemYanflyOptions_BoobsSize_Three_TCH;
				else if(this.isKorean) return RemYanflyOptions_BoobsSize_Three_KR;
				else if(this.isSpanish) return RemYanflyOptions_BoobsSize_Three_SP;
			} catch(e) {}
		}

		return RemYanflyOptions_BoobsSize_Three_EN;
	}
	return '';
};
TextManager.karrynHairColorOption = function(value) {
	switch (value) {
	case 1:
		if(this.isJapanese)
			return RemYanflyOptions_HairColor_One_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_HairColor_One_EN;
		else {
			try {
				if(this.isRussian) return RemYanflyOptions_HairColor_One_RU;
				else if(this.isSChinese) return RemYanflyOptions_HairColor_One_SCH;
				else if(this.isTChinese) return RemYanflyOptions_HairColor_One_TCH;
				else if(this.isKorean) return RemYanflyOptions_HairColor_One_KR;
				else if(this.isSpanish) return RemYanflyOptions_HairColor_One_SP;
			} catch(e) {}
		}

		return RemYanflyOptions_HairColor_One_EN;
	case 2:
		if(this.isJapanese)
			return RemYanflyOptions_HairColor_Two_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_HairColor_Two_EN;
		else {
			try {
				if(this.isRussian) return RemYanflyOptions_HairColor_Two_RU;
				else if(this.isSChinese) return RemYanflyOptions_HairColor_Two_SCH;
				else if(this.isTChinese) return RemYanflyOptions_HairColor_Two_TCH;
				else if(this.isKorean) return RemYanflyOptions_HairColor_Two_KR;
				else if(this.isSpanish) return RemYanflyOptions_HairColor_Two_SP;
			} catch(e) {}
		}

		return RemYanflyOptions_HairColor_Two_EN;
	case 3:
		if(this.isJapanese)
			return RemYanflyOptions_HairColor_Three_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_HairColor_Three_EN;
		else {
			try {
				if(this.isRussian) return RemYanflyOptions_HairColor_Three_RU;
				else if(this.isSChinese) return RemYanflyOptions_HairColor_Three_SCH;
				else if(this.isTChinese) return RemYanflyOptions_HairColor_Three_TCH;
				else if(this.isKorean) return RemYanflyOptions_HairColor_Three_KR;
				else if(this.isSpanish) return RemYanflyOptions_HairColor_Three_SP;
			} catch(e) {}
		}

		return RemYanflyOptions_HairColor_Three_EN;
	}

	return '';
};
TextManager.karrynPubicColorOption = function(value) {
	switch (value) {
	case 0:
		if(this.isJapanese)
			return RemYanflyOptions_PubicColor_Zero_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_PubicColor_Zero_EN;
		else {
			try {
				if(this.isRussian) return RemYanflyOptions_PubicColor_Zero_RU;
				else if(this.isSChinese) return RemYanflyOptions_PubicColor_Zero_SCH;
				else if(this.isTChinese) return RemYanflyOptions_PubicColor_Zero_TCH;
				else if(this.isKorean) return RemYanflyOptions_PubicColor_Zero_KR;
				else if(this.isSpanish) return RemYanflyOptions_PubicColor_Zero_SP;
			} catch(e) {}
		}

		return RemYanflyOptions_PubicColor_Zero_EN;
	case 1:
		if(this.isJapanese)
			return RemYanflyOptions_PubicColor_One_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_PubicColor_One_EN;
		else {
			try {
				if(this.isRussian) return RemYanflyOptions_PubicColor_One_RU;
				else if(this.isSChinese) return RemYanflyOptions_PubicColor_One_SCH;
				else if(this.isTChinese) return RemYanflyOptions_PubicColor_One_TCH;
				else if(this.isKorean) return RemYanflyOptions_PubicColor_One_KR;
				else if(this.isSpanish) return RemYanflyOptions_PubicColor_One_SP;
			} catch(e) {}
		}

		return RemYanflyOptions_PubicColor_One_EN;
	case 2:
		if(this.isJapanese)
			return RemYanflyOptions_PubicColor_Two_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_PubicColor_Two_EN;
		else {
			try {
				if(this.isRussian) return RemYanflyOptions_PubicColor_Two_RU;
				else if(this.isSChinese) return RemYanflyOptions_PubicColor_Two_SCH;
				else if(this.isTChinese) return RemYanflyOptions_PubicColor_Two_TCH;
				else if(this.isKorean) return RemYanflyOptions_PubicColor_Two_KR;
				else if(this.isSpanish) return RemYanflyOptions_PubicColor_Two_SP;
			} catch(e) {}
		}

		return RemYanflyOptions_PubicColor_Two_EN;
	case 3:
		if(this.isJapanese)
			return RemYanflyOptions_PubicColor_Three_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_PubicColor_Three_EN;
		else {
			try {
				if(this.isRussian) return RemYanflyOptions_PubicColor_Three_RU;
				else if(this.isSChinese) return RemYanflyOptions_PubicColor_Three_SCH;
				else if(this.isTChinese) return RemYanflyOptions_PubicColor_Three_TCH;
				else if(this.isKorean) return RemYanflyOptions_PubicColor_Three_KR;
				else if(this.isSpanish) return RemYanflyOptions_PubicColor_Three_SP;
			} catch(e) {}
		}

		return RemYanflyOptions_PubicColor_Three_EN;
	}

	return '';
};
TextManager.karrynPubicStyleOption = function(value) {
	switch (value) {
	case 1:
		if(this.isJapanese)
			return RemYanflyOptions_PubicStyle_One_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_PubicStyle_One_EN;
		else {
			try {
				if(this.isRussian) return RemYanflyOptions_PubicStyle_One_RU;
				else if(this.isSChinese) return RemYanflyOptions_PubicStyle_One_SCH;
				else if(this.isTChinese) return RemYanflyOptions_PubicStyle_One_TCH;
				else if(this.isKorean) return RemYanflyOptions_PubicStyle_One_KR;
				else if(this.isSpanish) return RemYanflyOptions_PubicStyle_One_SP;
			} catch(e) {}
		}

		return RemYanflyOptions_PubicStyle_One_EN;
	case 2:
		if(this.isJapanese)
			return RemYanflyOptions_PubicStyle_Two_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_PubicStyle_Two_EN;
		else {
			try {
				if(this.isRussian) return RemYanflyOptions_PubicStyle_Two_RU;
				else if(this.isSChinese) return RemYanflyOptions_PubicStyle_Two_SCH;
				else if(this.isTChinese) return RemYanflyOptions_PubicStyle_Two_TCH;
				else if(this.isKorean) return RemYanflyOptions_PubicStyle_Two_KR;
				else if(this.isSpanish) return RemYanflyOptions_PubicStyle_Two_SP;
			} catch(e) {}
		}

		return RemYanflyOptions_PubicStyle_Two_EN;
	case 3:
		if(this.isJapanese)
			return RemYanflyOptions_PubicStyle_Three_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_PubicStyle_Three_EN;
		else {
			try {
				if(this.isRussian) return RemYanflyOptions_PubicStyle_Three_RU;
				else if(this.isSChinese) return RemYanflyOptions_PubicStyle_Three_SCH;
				else if(this.isTChinese) return RemYanflyOptions_PubicStyle_Three_TCH;
				else if(this.isKorean) return RemYanflyOptions_PubicStyle_Three_KR;
				else if(this.isSpanish) return RemYanflyOptions_PubicStyle_Three_SP;
			} catch(e) {}
		}

		return RemYanflyOptions_PubicStyle_Three_EN;
	}

	return '';
};
TextManager.karrynStrayPubesAmountOption = function(value) {
	switch (value) {
	case MALE_STRAY_PUBES_OPTION_NORMAL_ID:
		if(this.isJapanese)
			return RemYanflyOptions_StrayPubesAmount_One_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_StrayPubesAmount_One_EN;
		else {
			try {
				if(this.isRussian) return RemYanflyOptions_StrayPubesAmount_One_RU;
				else if(this.isSChinese) return RemYanflyOptions_StrayPubesAmount_One_SCH;
				else if(this.isTChinese) return RemYanflyOptions_StrayPubesAmount_One_TCH;
				else if(this.isKorean) return RemYanflyOptions_StrayPubesAmount_One_KR;
				else if(this.isSpanish) return RemYanflyOptions_StrayPubesAmount_One_SP;
			} catch(e) {}
		}

		return RemYanflyOptions_StrayPubesAmount_One_EN;
	case MALE_STRAY_PUBES_OPTION_LOW_ID:
		if(this.isJapanese)
			return RemYanflyOptions_StrayPubesAmount_Two_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_StrayPubesAmount_Two_EN;
		else {
			try {
				if(this.isRussian) return RemYanflyOptions_StrayPubesAmount_Two_RU;
				else if(this.isSChinese) return RemYanflyOptions_StrayPubesAmount_Two_SCH;
				else if(this.isTChinese) return RemYanflyOptions_StrayPubesAmount_Two_TCH;
				else if(this.isKorean) return RemYanflyOptions_StrayPubesAmount_Two_KR;
				else if(this.isSpanish) return RemYanflyOptions_StrayPubesAmount_Two_SP;
			} catch(e) {}
		}

		return RemYanflyOptions_StrayPubesAmount_Two_EN;
	case MALE_STRAY_PUBES_OPTION_MAX_ID:
		if(this.isJapanese)
			return RemYanflyOptions_StrayPubesAmount_Three_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_StrayPubesAmount_Three_EN;
		else {
			try {
				if(this.isRussian) return RemYanflyOptions_StrayPubesAmount_Three_RU;
				else if(this.isSChinese) return RemYanflyOptions_StrayPubesAmount_Three_SCH;
				else if(this.isTChinese) return RemYanflyOptions_StrayPubesAmount_Three_TCH;
				else if(this.isKorean) return RemYanflyOptions_StrayPubesAmount_Three_KR;
				else if(this.isSpanish) return RemYanflyOptions_StrayPubesAmount_Three_SP;
			} catch(e) {}
		}

		return RemYanflyOptions_StrayPubesAmount_Three_EN;
	}

	return '';
};

TextManager.lovenseTimeOption = function(value) {
	switch (value) {
	case 0:
		if(this.isJapanese)
			return RemYanflyOptions_LovenseTime_Zero_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_LovenseTime_Zero_EN;
		else {
			try {
				if(this.isRussian) return RemYanflyOptions_LovenseTime_Zero_RU;
				else if(this.isSChinese) return RemYanflyOptions_LovenseTime_Zero_SCH;
				else if(this.isTChinese) return RemYanflyOptions_LovenseTime_Zero_TCH;
				else if(this.isKorean) return RemYanflyOptions_LovenseTime_Zero_KR;
				else if(this.isSpanish) return RemYanflyOptions_LovenseTime_Zero_SP;
			} catch(e) {}
		}

		return RemYanflyOptions_LovenseTime_Zero_EN;
	case 1:
		if(this.isJapanese)
			return RemYanflyOptions_LovenseTime_One_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_LovenseTime_One_EN;
		else {
			try {
				if(this.isRussian) return RemYanflyOptions_LovenseTime_One_RU;
				else if(this.isSChinese) return RemYanflyOptions_LovenseTime_One_SCH;
				else if(this.isTChinese) return RemYanflyOptions_LovenseTime_One_TCH;
				else if(this.isKorean) return RemYanflyOptions_LovenseTime_One_KR;
				else if(this.isSpanish) return RemYanflyOptions_LovenseTime_One_SP;
			} catch(e) {}
		}

		return RemYanflyOptions_LovenseTime_One_EN;
	case 2:
		if(this.isJapanese)
			return RemYanflyOptions_LovenseTime_Two_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_LovenseTime_Two_EN;
		else {
			try {
				if(this.isRussian) return RemYanflyOptions_LovenseTime_Two_RU;
				else if(this.isSChinese) return RemYanflyOptions_LovenseTime_Two_SCH;
				else if(this.isTChinese) return RemYanflyOptions_LovenseTime_Two_TCH;
				else if(this.isKorean) return RemYanflyOptions_LovenseTime_Two_KR;
				else if(this.isSpanish) return RemYanflyOptions_LovenseTime_Two_SP;
			} catch(e) {}
		}

		return RemYanflyOptions_LovenseTime_Two_EN;
	case 3:
		if(this.isJapanese)
			return RemYanflyOptions_LovenseTime_Three_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_LovenseTime_Three_EN;
		else {
			try {
				if(this.isRussian) return RemYanflyOptions_LovenseTime_Three_RU;
				else if(this.isSChinese) return RemYanflyOptions_LovenseTime_Three_SCH;
				else if(this.isTChinese) return RemYanflyOptions_LovenseTime_Three_TCH;
				else if(this.isKorean) return RemYanflyOptions_LovenseTime_Three_KR;
				else if(this.isSpanish) return RemYanflyOptions_LovenseTime_Three_SP;
			} catch(e) {}
		}

		return RemYanflyOptions_LovenseTime_Three_EN;
	case 4:
		if(this.isJapanese)
			return RemYanflyOptions_LovenseTime_Four_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_LovenseTime_Four_EN;
		else {
			try {
				if(this.isRussian) return RemYanflyOptions_LovenseTime_Four_RU;
				else if(this.isSChinese) return RemYanflyOptions_LovenseTime_Four_SCH;
				else if(this.isTChinese) return RemYanflyOptions_LovenseTime_Four_TCH;
				else if(this.isKorean) return RemYanflyOptions_LovenseTime_Four_KR;
				else if(this.isSpanish) return RemYanflyOptions_LovenseTime_Four_SP;
			} catch(e) {}
		}

		return RemYanflyOptions_LovenseTime_Four_EN;
	case 5:
		if(this.isJapanese)
			return RemYanflyOptions_LovenseTime_Five_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_LovenseTime_Five_EN;
		else {
			try {
				if(this.isRussian) return RemYanflyOptions_LovenseTime_Five_RU;
				else if(this.isSChinese) return RemYanflyOptions_LovenseTime_Five_SCH;
				else if(this.isTChinese) return RemYanflyOptions_LovenseTime_Five_TCH;
				else if(this.isKorean) return RemYanflyOptions_LovenseTime_Five_KR;
				else if(this.isSpanish) return RemYanflyOptions_LovenseTime_Five_SP;
			} catch(e) {}
		}

		return RemYanflyOptions_LovenseTime_Five_EN;
	case 6:
		if(this.isJapanese)
			return RemYanflyOptions_LovenseTime_Six_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_LovenseTime_Six_EN;
		else {
			try {
				if(this.isRussian) return RemYanflyOptions_LovenseTime_Six_RU;
				else if(this.isSChinese) return RemYanflyOptions_LovenseTime_Six_SCH;
				else if(this.isTChinese) return RemYanflyOptions_LovenseTime_Six_TCH;
				else if(this.isKorean) return RemYanflyOptions_LovenseTime_Six_KR;
				else if(this.isSpanish) return RemYanflyOptions_LovenseTime_Six_SP;
			} catch(e) {}
		}

		return RemYanflyOptions_LovenseTime_Six_EN;
	case 7:
		if(this.isJapanese)
			return RemYanflyOptions_LovenseTime_Seven_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_LovenseTime_Seven_EN;
		else {
			try {
				if(this.isRussian) return RemYanflyOptions_LovenseTime_Seven_RU;
				else if(this.isSChinese) return RemYanflyOptions_LovenseTime_Seven_SCH;
				else if(this.isTChinese) return RemYanflyOptions_LovenseTime_Seven_TCH;
				else if(this.isKorean) return RemYanflyOptions_LovenseTime_Seven_KR;
				else if(this.isSpanish) return RemYanflyOptions_LovenseTime_Seven_SP;
			} catch(e) {}
		}

		return RemYanflyOptions_LovenseTime_Seven_EN;

	}

	return '';
};

TextManager.RAIDtimeOption = function(value) {
	switch (value) {
	case 0:
		if(this.isJapanese)
			return RemYanflyOptions_RAIDtime_Global_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_RAIDtime_Global_EN;
		else {
			try {
				if(this.isRussian) return RemYanflyOptions_RAIDtime_Global_RU;
				else if(this.isSChinese) return RemYanflyOptions_RAIDtime_Global_SCH;
				else if(this.isTChinese) return RemYanflyOptions_RAIDtime_Global_TCH;
				else if(this.isKorean) return RemYanflyOptions_RAIDtime_Global_KR;
				else if(this.isSpanish) return RemYanflyOptions_RAIDtime_Global_SP;
			} catch(e) {}
		}

		return RemYanflyOptions_RAIDtime_Global_EN;
	case 1:
		if(this.isJapanese)
			return RemYanflyOptions_RAIDTime_One_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_RAIDTime_One_EN;
		else {
			try {
				if(this.isRussian) return RemYanflyOptions_RAIDTime_One_RU;
				else if(this.isSChinese) return RemYanflyOptions_RAIDTime_One_SCH;
				else if(this.isTChinese) return RemYanflyOptions_RAIDTime_One_TCH;
				else if(this.isKorean) return RemYanflyOptions_RAIDTime_One_KR;
				else if(this.isSpanish) return RemYanflyOptions_RAIDTime_One_SP;
			} catch(e) {}
		}

		return RemYanflyOptions_RAIDTime_One_EN;
	case 2:
		if(this.isJapanese)
			return RemYanflyOptions_RAIDTime_Two_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_RAIDTime_Two_EN;
		else {
			try {
				if(this.isRussian) return RemYanflyOptions_RAIDTime_Two_RU;
				else if(this.isSChinese) return RemYanflyOptions_RAIDTime_Two_SCH;
				else if(this.isTChinese) return RemYanflyOptions_RAIDTime_Two_TCH;
				else if(this.isKorean) return RemYanflyOptions_RAIDTime_Two_KR;
				else if(this.isSpanish) return RemYanflyOptions_RAIDTime_Two_SP;
			} catch(e) {}
		}

		return RemYanflyOptions_RAIDTime_Two_EN;
	case 3:
		if(this.isJapanese)
			return RemYanflyOptions_RAIDTime_Three_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_RAIDTime_Three_EN;
		else {
			try {
				if(this.isRussian) return RemYanflyOptions_RAIDTime_Three_RU;
				else if(this.isSChinese) return RemYanflyOptions_RAIDTime_Three_SCH;
				else if(this.isTChinese) return RemYanflyOptions_RAIDTime_Three_TCH;
				else if(this.isKorean) return RemYanflyOptions_RAIDTime_Three_KR;
				else if(this.isSpanish) return RemYanflyOptions_RAIDTime_Three_SP;
			} catch(e) {}
		}

		return RemYanflyOptions_RAIDTime_Three_EN;
	case 4:
		if(this.isJapanese)
			return RemYanflyOptions_RAIDTime_Four_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_RAIDTime_Four_EN;
		else {
			try {
				if(this.isRussian) return RemYanflyOptions_RAIDTime_Four_RU;
				else if(this.isSChinese) return RemYanflyOptions_RAIDTime_Four_SCH;
				else if(this.isTChinese) return RemYanflyOptions_RAIDTime_Four_TCH;
				else if(this.isKorean) return RemYanflyOptions_RAIDTime_Four_KR;
				else if(this.isSpanish) return RemYanflyOptions_RAIDTime_Four_SP;
			} catch(e) {}
		}

		return RemYanflyOptions_RAIDTime_Four_EN;
	case 5:
		if(this.isJapanese)
			return RemYanflyOptions_RAIDTime_Five_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_RAIDTime_Five_EN;
		else {
			try {
				if(this.isRussian) return RemYanflyOptions_RAIDTime_Five_RU;
				else if(this.isSChinese) return RemYanflyOptions_RAIDTime_Five_SCH;
				else if(this.isTChinese) return RemYanflyOptions_RAIDTime_Five_TCH;
				else if(this.isKorean) return RemYanflyOptions_RAIDTime_Five_KR;
				else if(this.isSpanish) return RemYanflyOptions_RAIDTime_Five_SP;
			} catch(e) {}
		}

		return RemYanflyOptions_RAIDTime_Five_EN;
	case 6:
		if(this.isJapanese)
			return RemYanflyOptions_RAIDTime_Six_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_RAIDTime_Six_EN;
		else {
			try {
				if(this.isRussian) return RemYanflyOptions_RAIDTime_Six_RU;
				else if(this.isSChinese) return RemYanflyOptions_RAIDTime_Six_SCH;
				else if(this.isTChinese) return RemYanflyOptions_RAIDTime_Six_TCH;
				else if(this.isKorean) return RemYanflyOptions_RAIDTime_Six_KR;
				else if(this.isSpanish) return RemYanflyOptions_RAIDTime_Six_SP;
			} catch(e) {}
		}

		return RemYanflyOptions_RAIDTime_Six_EN;
	case 7:
		if(this.isJapanese)
			return RemYanflyOptions_RAIDTime_Seven_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_RAIDTime_Seven_EN;
		else {
			try {
				if(this.isRussian) return RemYanflyOptions_RAIDTime_Seven_RU;
				else if(this.isSChinese) return RemYanflyOptions_RAIDTime_Seven_SCH;
				else if(this.isTChinese) return RemYanflyOptions_RAIDTime_Seven_TCH;
				else if(this.isKorean) return RemYanflyOptions_RAIDTime_Seven_KR;
				else if(this.isSpanish) return RemYanflyOptions_RAIDTime_Seven_SP;
			} catch(e) {}
		}

		return RemYanflyOptions_RAIDTime_Seven_EN;
	case 8:
		if(this.isJapanese)
			return RemYanflyOptions_RAIDTime_Eight_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_RAIDTime_Eight_EN;
		else {
			try {
				if(this.isRussian) return RemYanflyOptions_RAIDTime_Eight_RU;
				else if(this.isSChinese) return RemYanflyOptions_RAIDTime_Eight_SCH;
				else if(this.isTChinese) return RemYanflyOptions_RAIDTime_Eight_TCH;
				else if(this.isKorean) return RemYanflyOptions_RAIDTime_Eight_KR;
				else if(this.isSpanish) return RemYanflyOptions_RAIDTime_Eight_SP;
			} catch(e) {}
		}

		return RemYanflyOptions_RAIDTime_Eight_EN;

	}

	return '';
};

TextManager.RAIDintensityOption = function(value) {
	switch (value) {
	case 0:
		if(this.isJapanese)
			return RemYanflyOptions_RAIDintensity_Global_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_RAIDintensity_Global_EN;
		else {
			try {
				if(this.isRussian) return RemYanflyOptions_RAIDintensity_Global_RU;
				else if(this.isSChinese) return RemYanflyOptions_RAIDintensity_Global_SCH;
				else if(this.isTChinese) return RemYanflyOptions_RAIDintensity_Global_TCH;
				else if(this.isKorean) return RemYanflyOptions_RAIDintensity_Global_KR;
				else if(this.isSpanish) return RemYanflyOptions_RAIDintensity_Global_SP;
			} catch(e) {}
		}

		return RemYanflyOptions_RAIDintensity_Global_EN;
	case 25:
		return '25%';
	case 50:
		return '50%';
	case 75:
		return '75%';
	case 100:
		return '100%';

	}

	return '';
};

TextManager.toyNameListing = function(toyNum, addPadding) {
	if(!lovense.isConnected() || lovense.getToys().length < (toyNum + 1)) return '---';

	let toyData = lovense.getToys()[toyNum];
	let nickName = toyData.nickName;
	let name = toyData.name;
	let battery = toyData.battery;
	let isParty = toyData.RAID_party;

	let nameField = nickName;
	if(!nickName) nameField = name;

	let color = '\\C[4]';
	if(isParty || !ConfigManager.raidEnable) color = '\\C[5]';

	let padding = ' ';
	//if(addPadding) padding = '      ';

	return color + padding + TextManager.yanflyOptionsLovenseToyNameList.format(nameField, battery);
};

TextManager.RAIDpartyOption = function(value) {
	if(!value) {
		if(this.isJapanese)
			return RemYanflyOptions_RAIDparty_Solo_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_RAIDparty_Solo_EN;
		else {
			try {
				if(this.isRussian) return RemYanflyOptions_RAIDparty_Solo_RU;
				else if(this.isSChinese) return RemYanflyOptions_RAIDparty_Solo_SCH;
				else if(this.isTChinese) return RemYanflyOptions_RAIDparty_Solo_TCH;
				else if(this.isKorean) return RemYanflyOptions_RAIDparty_Solo_KR;
				else if(this.isSpanish) return RemYanflyOptions_RAIDparty_Solo_SP;
			} catch(e) {}
		}
		return RemYanflyOptions_RAIDparty_Solo_EN;
	}
	else if(value) {
		if(this.isJapanese)
			return RemYanflyOptions_RAIDparty_Party_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_RAIDparty_Party_EN;
		else {
			try {
				if(this.isRussian) return RemYanflyOptions_RAIDparty_Party_RU;
				else if(this.isSChinese) return RemYanflyOptions_RAIDparty_Party_SCH;
				else if(this.isTChinese) return RemYanflyOptions_RAIDparty_Party_TCH;
				else if(this.isKorean) return RemYanflyOptions_RAIDparty_Party_KR;
				else if(this.isSpanish) return RemYanflyOptions_RAIDparty_Party_SP;
			} catch(e) {}
		}
		return RemYanflyOptions_RAIDparty_Party_EN;
	}
};

TextManager.RAIDsexactOption = function(value) {
	switch (value) {
	case RAID_TYPE_NONE_ID:
		return '-----';
	case RAID_TYPE_MOUTH_ID:
		if(this.isJapanese)
			return RemYanflyOptions_RAIDsexact_Mouth_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_RAIDsexact_Mouth_EN;
		else {
			try {
				if(this.isRussian) return RemYanflyOptions_RAIDsexact_Mouth_RU;
				else if(this.isSChinese) return RemYanflyOptions_RAIDsexact_Mouth_SCH;
				else if(this.isTChinese) return RemYanflyOptions_RAIDsexact_Mouth_TCH;
				else if(this.isKorean) return RemYanflyOptions_RAIDsexact_Mouth_KR;
				else if(this.isSpanish) return RemYanflyOptions_RAIDsexact_Mouth_SP;
			} catch(e) {}
		}
		return RemYanflyOptions_RAIDsexact_Mouth_EN;
	case RAID_TYPE_BOOBS_ID:
		if(this.isJapanese)
			return RemYanflyOptions_RAIDsexact_Boobs_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_RAIDsexact_Boobs_EN;
		else {
			try {
				if(this.isRussian) return RemYanflyOptions_RAIDsexact_Boobs_RU;
				else if(this.isSChinese) return RemYanflyOptions_RAIDsexact_Boobs_SCH;
				else if(this.isTChinese) return RemYanflyOptions_RAIDsexact_Boobs_TCH;
				else if(this.isKorean) return RemYanflyOptions_RAIDsexact_Boobs_KR;
				else if(this.isSpanish) return RemYanflyOptions_RAIDsexact_Boobs_SP;
			} catch(e) {}
		}
		return RemYanflyOptions_RAIDsexact_Boobs_EN;
	case RAID_TYPE_CLIT_ID:
		if(this.isJapanese)
			return RemYanflyOptions_RAIDsexact_Clit_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_RAIDsexact_Clit_EN;
		else {
			try {
				if(this.isRussian) return RemYanflyOptions_RAIDsexact_Clit_RU;
				else if(this.isSChinese) return RemYanflyOptions_RAIDsexact_Clit_SCH;
				else if(this.isTChinese) return RemYanflyOptions_RAIDsexact_Clit_TCH;
				else if(this.isKorean) return RemYanflyOptions_RAIDsexact_Clit_KR;
				else if(this.isSpanish) return RemYanflyOptions_RAIDsexact_Clit_SP;
			} catch(e) {}
		}
		return RemYanflyOptions_RAIDsexact_Clit_EN;
		case RAID_TYPE_PUSSY_ID:
		if(this.isJapanese)
			return RemYanflyOptions_RAIDsexact_Pussy_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_RAIDsexact_Pussy_EN;
		else {
			try {
				if(this.isRussian) return RemYanflyOptions_RAIDsexact_Pussy_RU;
				else if(this.isSChinese) return RemYanflyOptions_RAIDsexact_Pussy_SCH;
				else if(this.isTChinese) return RemYanflyOptions_RAIDsexact_Pussy_TCH;
				else if(this.isKorean) return RemYanflyOptions_RAIDsexact_Pussy_KR;
				else if(this.isSpanish) return RemYanflyOptions_RAIDsexact_Pussy_SP;
			} catch(e) {}
		}
		return RemYanflyOptions_RAIDsexact_Pussy_EN;
		case RAID_TYPE_ANAL_ID:
		if(this.isJapanese)
			return RemYanflyOptions_RAIDsexact_Anal_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_RAIDsexact_Anal_EN;
		else {
			try {
				if(this.isRussian) return RemYanflyOptions_RAIDsexact_Anal_RU;
				else if(this.isSChinese) return RemYanflyOptions_RAIDsexact_Anal_SCH;
				else if(this.isTChinese) return RemYanflyOptions_RAIDsexact_Anal_TCH;
				else if(this.isKorean) return RemYanflyOptions_RAIDsexact_Anal_KR;
				else if(this.isSpanish) return RemYanflyOptions_RAIDsexact_Anal_SP;
			} catch(e) {}
		}
		return RemYanflyOptions_RAIDsexact_Anal_EN;
		case RAID_TYPE_EXHIBITIONISM_ID:
		if(this.isJapanese)
			return RemYanflyOptions_RAIDsexact_Exhibitionism_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_RAIDsexact_Exhibitionism_EN;
		else {
			try {
				if(this.isRussian) return RemYanflyOptions_RAIDsexact_Exhibitionism_RU;
				else if(this.isSChinese) return RemYanflyOptions_RAIDsexact_Exhibitionism_SCH;
				else if(this.isTChinese) return RemYanflyOptions_RAIDsexact_Exhibitionism_TCH;
				else if(this.isKorean) return RemYanflyOptions_RAIDsexact_Exhibitionism_KR;
				else if(this.isSpanish) return RemYanflyOptions_RAIDsexact_Exhibitionism_SP;
			} catch(e) {}
		}
		return RemYanflyOptions_RAIDsexact_Exhibitionism_EN;
		case RAID_TYPE_MASOCHISM_ID:
		if(this.isJapanese)
			return RemYanflyOptions_RAIDsexact_Masochism_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_RAIDsexact_Masochism_EN;
		else {
			try {
				if(this.isRussian) return RemYanflyOptions_RAIDsexact_Masochism_RU;
				else if(this.isSChinese) return RemYanflyOptions_RAIDsexact_Masochism_SCH;
				else if(this.isTChinese) return RemYanflyOptions_RAIDsexact_Masochism_TCH;
				else if(this.isKorean) return RemYanflyOptions_RAIDsexact_Masochism_KR;
				else if(this.isSpanish) return RemYanflyOptions_RAIDsexact_Masochism_SP;
			} catch(e) {}
		}
		return RemYanflyOptions_RAIDsexact_Masochism_EN;
		case RAID_TYPE_SADISM_ID:
		if(this.isJapanese)
			return RemYanflyOptions_RAIDsexact_Sadism_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_RAIDsexact_Sadism_EN;
		else {
			try {
				if(this.isRussian) return RemYanflyOptions_RAIDsexact_Sadism_RU;
				else if(this.isSChinese) return RemYanflyOptions_RAIDsexact_Sadism_SCH;
				else if(this.isTChinese) return RemYanflyOptions_RAIDsexact_Sadism_TCH;
				else if(this.isKorean) return RemYanflyOptions_RAIDsexact_Sadism_KR;
				else if(this.isSpanish) return RemYanflyOptions_RAIDsexact_Sadism_SP;
			} catch(e) {}
		}
		return RemYanflyOptions_RAIDsexact_Sadism_EN;
		case RAID_TYPE_RIMJOB_ID:
		if(this.isJapanese)
			return RemYanflyOptions_RAIDsexact_Rimjob_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_RAIDsexact_Rimjob_EN;
		else {
			try {
				if(this.isRussian) return RemYanflyOptions_RAIDsexact_Rimjob_RU;
				else if(this.isSChinese) return RemYanflyOptions_RAIDsexact_Rimjob_SCH;
				else if(this.isTChinese) return RemYanflyOptions_RAIDsexact_Rimjob_TCH;
				else if(this.isKorean) return RemYanflyOptions_RAIDsexact_Rimjob_KR;
				else if(this.isSpanish) return RemYanflyOptions_RAIDsexact_Rimjob_SP;
			} catch(e) {}
		}
		return RemYanflyOptions_RAIDsexact_Rimjob_EN;
		case RAID_TYPE_FOOTJOB_ID:
		if(this.isJapanese)
			return RemYanflyOptions_RAIDsexact_Footjob_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_RAIDsexact_Footjob_EN;
		else {
			try {
				if(this.isRussian) return RemYanflyOptions_RAIDsexact_Footjob_RU;
				else if(this.isSChinese) return RemYanflyOptions_RAIDsexact_Footjob_SCH;
				else if(this.isTChinese) return RemYanflyOptions_RAIDsexact_Footjob_TCH;
				else if(this.isKorean) return RemYanflyOptions_RAIDsexact_Footjob_KR;
				else if(this.isSpanish) return RemYanflyOptions_RAIDsexact_Footjob_SP;
			} catch(e) {}
		}
		return RemYanflyOptions_RAIDsexact_Footjob_EN;
		case RAID_TYPE_HANDS_ID:
		if(this.isJapanese)
			return RemYanflyOptions_RAIDsexact_Hands_JP;
		else if(this.isEnglish)
			return RemYanflyOptions_RAIDsexact_Hands_EN;
		else {
			try {
				if(this.isRussian) return RemYanflyOptions_RAIDsexact_Hands_RU;
				else if(this.isSChinese) return RemYanflyOptions_RAIDsexact_Hands_SCH;
				else if(this.isTChinese) return RemYanflyOptions_RAIDsexact_Hands_TCH;
				else if(this.isKorean) return RemYanflyOptions_RAIDsexact_Hands_KR;
				else if(this.isSpanish) return RemYanflyOptions_RAIDsexact_Hands_SP;
			} catch(e) {}
		}
		return RemYanflyOptions_RAIDsexact_Hands_EN;


	}

	return '';
};

TextManager.RAIDarousalOption = function(value) {
	if(!value) {
		return TextManager.yanflyOptionsRAIDarousalOFF;
	}
	else if(value) {
		return TextManager.yanflyOptionsRAIDarousalON;
	}
};
TextManager.RAIDorgasmOption = function(value) {
	if(!value) {
		return TextManager.yanflyOptionsRAIDorgasmOFF;
	}
	else if(value) {
		return TextManager.yanflyOptionsRAIDorgasmON;
	}
};


TextManager.modsNameList = function() {
	/*
	if($modsNameList && $modsNameList.length > 0) {
		let modsNames = 'Mods: ';
		$modsNameList.forEach(function(name) {
			if(name) {
				modsNames += name + '; ';
			}
		});
		return modsNames;
	}
	*/

	/*
	const modsNames = $mods
        .filter((mod) => !mod.parameters.optional)
        .map((mod) => mod.name);
	*/

	const modsNames = $mods
        .filter((mod) => !mod.parameters.optional)
        .map((mod) => mod.parameters.version ? `${mod.name} v${mod.parameters.version}` : mod.name);

    return modsNames.length ? `Mods: ${modsNames.join('; ')}` : '';
};

//////////////
// Data Manager
/////////////////////

Remtairy.TextManager.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
  if (!Remtairy.TextManager.DataManager_isDatabaseLoaded.call(this)) return false;
  if (!Remtairy._loaded_Rem_TextManager) {
    this.processRemTMNotetags_RemtairyTextManager($dataActors);
    this.processRemTMNotetags_RemtairyTextManager($dataEnemies);
	this.processRemTMNotetags_RemtairyTextManager($dataSkills);
	this.processRemTMNotetags_RemtairyTextManager($dataWeapons);
	this.processRemTMNotetags_RemtairyTextManager($dataArmors);
	this.processRemTMNotetags_RemtairyTextManager($dataStates);
	this.processRemTMNotetags_RemtairyTextManager($dataItems);
	this.processRemTMNotetags_RemtairyMisc_StateIcons($dataStates);
	this.processRemTMNotetags_RemtairyEnemy($dataEnemies);
	this.processRemTMNotetags_RemtairyEdicts($dataSkills);
	this.processRemTMNotetags_RemtairyPassives($dataSkills);
    Remtairy._loaded_Rem_TextManager = true;
  }
  return true;
};

DataManager.processRemTMNotetags_RemtairyTextManager = function(group) {
	for (let n = 1; n < group.length; n++) {
		let obj = group[n];
		let notedata = obj.note.split(/[\r\n]+/);

		obj.remNameDefault = "";
		obj.remNameEN = "";
		obj.remNameJP = "";
		obj.remNameTCH = "";
		obj.remNameSCH = "";
		obj.remNameKR = "";
		obj.remNameRU = "";
		obj.remNameSP = "";
		obj.hasRemNameDefault = false;
		obj.hasRemNameEN = false;
		obj.hasRemNameJP = false;
		obj.hasRemNameSCH = false;
		obj.hasRemNameTCH = false;
		obj.hasRemNameKR = false;
		obj.hasRemNameRU = false;
		obj.hasRemNameSP = false;
		obj.remDescDefault = "";
		obj.remDescEN = "";
		obj.remDescJP = "";
		obj.remDescTCH = "";
		obj.remDescSCH = "";
		obj.remDescKR = "";
		obj.remDescRU = "";
		obj.remDescSP = "";
		obj.hasRemDescDefault = false;
		obj.hasRemDescEN = false;
		obj.hasRemDescJP = false;
		obj.hasRemDescSCH = false;
		obj.hasRemDescTCH = false;
		obj.hasRemDescKR = false;
		obj.hasRemDescRU = false;
		obj.hasRemDescSP = false;
		obj.remMessageDefault = ['','','',''];
		obj.remMessageEN = ['','','',''];
		obj.remMessageJP = ['','','',''];
		obj.remMessageSCH = ['','','',''];
		obj.remMessageTCH = ['','','',''];
		obj.remMessageKR = ['','','',''];
		obj.remMessageRU = ['','','',''];
		obj.remMessageSP = ['','','',''];
		obj.hasRemMessageDefault = [false,false,false,false];
		obj.hasRemMessageEN = [false,false,false,false];
		obj.hasRemMessageJP = [false,false,false,false];
		obj.hasRemMessageSCH = [false,false,false,false];
		obj.hasRemMessageTCH = [false,false,false,false];
		obj.hasRemMessageKR = [false,false,false,false];
		obj.hasRemMessageRU = [false,false,false,false];
		obj.hasRemMessageSP = [false,false,false,false];
		let evalMode = 'none';

		for (let i = 0; i < notedata.length; i++) {
			let line = notedata[i];
			if (line.match(/<(?:REM NAME JP)>/i)) {
				evalMode = 'rem name jp';
			}
			else if (line.match(/<(?:REM NAME ALL)>/i)) {
				evalMode = 'rem name all';
			}
			else if (line.match(/<(?:REM NAME EN)>/i)) {
				evalMode = 'rem name en';
			}
			else if (line.match(/<(?:REM NAME TCH)>/i)) {
				evalMode = 'rem name tch';
			}
			else if (line.match(/<(?:REM NAME SCH)>/i)) {
				evalMode = 'rem name sch';
			}
			else if (line.match(/<(?:REM NAME KR)>/i)) {
				evalMode = 'rem name kr';
			}
			else if (line.match(/<(?:REM NAME RU)>/i)) {
				evalMode = 'rem name ru';
			}
			else if (line.match(/<(?:REM NAME SP)>/i)) {
				evalMode = 'rem name sp';
			}
			else if (line.match(/<(?:REM DESC JP)>/i)) {
				evalMode = 'rem desc jp';
			}
			else if (line.match(/<(?:REM DESC ALL)>/i)) {
				evalMode = 'rem desc all';
			}
			else if (line.match(/<(?:REM DESC EN)>/i)) {
				evalMode = 'rem desc en';
			}
			else if (line.match(/<(?:REM DESC TCH)>/i)) {
				evalMode = 'rem desc tch';
			}
			else if (line.match(/<(?:REM DESC SCH)>/i)) {
				evalMode = 'rem desc sch';
			}
			else if (line.match(/<(?:REM DESC KR)>/i)) {
				evalMode = 'rem desc kr';
			}
			else if (line.match(/<(?:REM DESC RU)>/i)) {
				evalMode = 'rem desc ru';
			}
			else if (line.match(/<(?:REM DESC SP)>/i)) {
				evalMode = 'rem desc sp';
			}
			else if (line.match(/<(?:REM MESSAGE1 ALL)>/i)) {
				evalMode = 'rem message1 all';
			}
			else if (line.match(/<(?:REM MESSAGE1 EN)>/i)) {
				evalMode = 'rem message1 en';
			}
			else if (line.match(/<(?:REM MESSAGE1 JP)>/i)) {
				evalMode = 'rem message1 jp';
			}
			else if (line.match(/<(?:REM MESSAGE1 SCH)>/i)) {
				evalMode = 'rem message1 sch';
			}
			else if (line.match(/<(?:REM MESSAGE1 TCH)>/i)) {
				evalMode = 'rem message1 tch';
			}
			else if (line.match(/<(?:REM MESSAGE1 KR)>/i)) {
				evalMode = 'rem message1 kr';
			}
			else if (line.match(/<(?:REM MESSAGE1 RU)>/i)) {
				evalMode = 'rem message1 ru';
			}
			else if (line.match(/<(?:REM MESSAGE1 SP)>/i)) {
				evalMode = 'rem message1 sp';
			}
			else if (line.match(/<(?:REM MESSAGE2 ALL)>/i)) {
				evalMode = 'rem message2 all';
			}
			else if (line.match(/<(?:REM MESSAGE2 EN)>/i)) {
				evalMode = 'rem message2 en';
			}
			else if (line.match(/<(?:REM MESSAGE2 JP)>/i)) {
				evalMode = 'rem message2 jp';
			}
			else if (line.match(/<(?:REM MESSAGE2 TCH)>/i)) {
				evalMode = 'rem message2 tch';
			}
			else if (line.match(/<(?:REM MESSAGE2 SCH)>/i)) {
				evalMode = 'rem message2 sch';
			}
			else if (line.match(/<(?:REM MESSAGE2 KR)>/i)) {
				evalMode = 'rem message2 kr';
			}
			else if (line.match(/<(?:REM MESSAGE2 RU)>/i)) {
				evalMode = 'rem message2 ru';
			}
			else if (line.match(/<(?:REM MESSAGE2 SP)>/i)) {
				evalMode = 'rem message2 sp';
			}
			else if (line.match(/<(?:REM MESSAGE3 ALL)>/i)) {
				evalMode = 'rem message3 all';
			}
			else if (line.match(/<(?:REM MESSAGE3 EN)>/i)) {
				evalMode = 'rem message3 en';
			}
			else if (line.match(/<(?:REM MESSAGE3 JP)>/i)) {
				evalMode = 'rem message3 jp';
			}
			else if (line.match(/<(?:REM MESSAGE3 TCH)>/i)) {
				evalMode = 'rem message3 tch';
			}
			else if (line.match(/<(?:REM MESSAGE3 SCH)>/i)) {
				evalMode = 'rem message3 sch';
			}
			else if (line.match(/<(?:REM MESSAGE3 KR)>/i)) {
				evalMode = 'rem message3 kr';
			}
			else if (line.match(/<(?:REM MESSAGE3 RU)>/i)) {
				evalMode = 'rem message3 ru';
			}
			else if (line.match(/<(?:REM MESSAGE3 SP)>/i)) {
				evalMode = 'rem message3 sp';
			}
			else if (line.match(/<(?:REM MESSAGE4 ALL)>/i)) {
				evalMode = 'rem message4 all';
			}
			else if (line.match(/<(?:REM MESSAGE4 EN)>/i)) {
				evalMode = 'rem message4 en';
			}
			else if (line.match(/<(?:REM MESSAGE4 JP)>/i)) {
				evalMode = 'rem message4 jp';
			}
			else if (line.match(/<(?:REM MESSAGE4 TCH)>/i)) {
				evalMode = 'rem message4 tch';
			}
			else if (line.match(/<(?:REM MESSAGE4 SCH)>/i)) {
				evalMode = 'rem message4 sch';
			}
			else if (line.match(/<(?:REM MESSAGE4 KR)>/i)) {
				evalMode = 'rem message4 kr';
			}
			else if (line.match(/<(?:REM MESSAGE4 RU)>/i)) {
				evalMode = 'rem message4 ru';
			}
			else if (line.match(/<(?:REM MESSAGE4 SP)>/i)) {
				evalMode = 'rem message4 sp';
			}
			else if (line.match(/<\/(?:REM NAME EN|REM NAME JP|REM NAME ALL|REM DESC ALL|REM DESC EN|REM DESC JP)>/i)) {
				evalMode = 'none';
			}
			else if (line.match(/<\/(?:REM NAME SCH|REM NAME TCH|REM NAME KR|REM NAME RU|REM NAME SP|REM DESC SCH|REM DESC TCH|REM DESC KR|REM DESC RU|REM DESC SP)>/i)) {
				evalMode = 'none';
			}
			else if (line.match(/<\/(?:REM MESSAGE1 EN|REM MESSAGE1 JP|REM MESSAGE1 ALL|REM MESSAGE2 EN|REM MESSAGE2 JP|REM MESSAGE2 ALL)>/i)) {
				evalMode = 'none';
			}
			else if (line.match(/<\/(?:REM MESSAGE1 SCH|REM MESSAGE1 TCH|REM MESSAGE1 KR|REM MESSAGE1 RU|REM MESSAGE1 SP|REM MESSAGE2 SCH|REM MESSAGE2 TCH|REM MESSAGE2 KR|REM MESSAGE2 RU|REM MESSAGE2 SP)>/i)) {
				evalMode = 'none';
			}
			else if (line.match(/<\/(?:REM MESSAGE3 EN|REM MESSAGE3 JP|REM MESSAGE3 ALL|REM MESSAGE4 EN|REM MESSAGE4 JP|REM MESSAGE4 ALL)>/i)) {
				evalMode = 'none';
			}
			else if (line.match(/<\/(?:REM MESSAGE3 SCH|REM MESSAGE3 TCH|REM MESSAGE3 KR|REM MESSAGE3 RU|REM MESSAGE3 SP|REM MESSAGE4 SCH|REM MESSAGE4 TCH|REM MESSAGE4 KR|REM MESSAGE4 RU|REM MESSAGE4 SP)>/i)) {
				evalMode = 'none';
			}
			else if (evalMode === 'rem name all') {
				obj.remNameDefault = line;
				obj.hasRemNameDefault = true;
			}
			else if (evalMode === 'rem name en') {
				obj.remNameEN = line;
				obj.hasRemNameEN = true;
			}
			else if (evalMode === 'rem name jp') {
				obj.remNameJP = line;
				obj.hasRemNameJP = true;
			}
			else if (evalMode === 'rem name sch') {
				obj.remNameSCH = line;
				obj.hasRemNameSCH = true;
			}
			else if (evalMode === 'rem name tch') {
				obj.remNameTCH = line;
				obj.hasRemNameTCH = true;
			}
			else if (evalMode === 'rem name kr') {
				obj.remNameKR = line;
				obj.hasRemNameKR = true;
			}
			else if (evalMode === 'rem name ru') {
				obj.remNameRU = line;
				obj.hasRemNameRU = true;
			}
			else if (evalMode === 'rem name sp') {
				obj.remNameSP = line;
				obj.hasRemNameRU = true;
			}
			else if (evalMode === 'rem desc all') {
				if(obj.remDescDefault.length > 0) obj.remDescDefault += "\n";
				obj.remDescDefault += line;
				obj.hasRemDescDefault = true;
			}
			else if (evalMode === 'rem desc en') {
				if(obj.remDescEN.length > 0) obj.remDescEN += "\n";
				obj.remDescEN += line;
				obj.hasRemDescEN = true;
			}
			else if (evalMode === 'rem desc jp') {
				if(obj.remDescJP.length > 0) obj.remDescJP += "\n";
				obj.remDescJP += line;
				obj.hasRemDescJP = true;
			}
			else if (evalMode === 'rem desc tch') {
				if(obj.remDescTCH.length > 0) obj.remDescTCH += "\n";
				obj.remDescTCH += line;
				obj.hasRemDescTCH = true;
			}
			else if (evalMode === 'rem desc sch') {
				if(obj.remDescSCH.length > 0) obj.remDescSCH += "\n";
				obj.remDescSCH += line;
				obj.hasRemDescSCH = true;
			}
			else if (evalMode === 'rem desc kr') {
				if(obj.remDescKR.length > 0) obj.remDescKR += "\n";
				obj.remDescKR += line;
				obj.hasRemDescKR = true;
			}
			else if (evalMode === 'rem desc ru') {
				if(obj.remDescRU.length > 0) obj.remDescRU += "\n";
				obj.remDescRU += line;
				obj.hasRemDescRU = true;
			}
			else if (evalMode === 'rem desc sp') {
				if(obj.remDescSP.length > 0) obj.remDescSP += "\n";
				obj.remDescRU += line;
				obj.hasRemDescSP = true;
			}
			else if (evalMode === 'rem message1 all') {
				obj.remMessageDefault[0] = line;
				obj.hasRemMessageDefault[0] = true;
			}
			else if (evalMode === 'rem message1 en') {
				obj.remMessageEN[0] = line;
				obj.hasRemMessageEN[0] = true;
			}
			else if (evalMode === 'rem message1 jp') {
				obj.remMessageJP[0] = line;
				obj.hasRemMessageJP[0] = true;
			}
			else if (evalMode === 'rem message1 tch') {
				obj.remMessageTCH[0] = line;
				obj.hasRemMessageTCH[0] = true;
			}
			else if (evalMode === 'rem message1 sch') {
				obj.remMessageSCH[0] = line;
				obj.hasRemMessageSCH[0] = true;
			}
			else if (evalMode === 'rem message1 kr') {
				obj.remMessageKR[0] = line;
				obj.hasRemMessageKR[0] = true;
			}
			else if (evalMode === 'rem message1 ru') {
				obj.remMessageRU[0] = line;
				obj.hasRemMessageRU[0] = true;
			}
			else if (evalMode === 'rem message1 sp') {
				obj.remMessageSP[0] = line;
				obj.hasRemMessageSP[0] = true;
			}
			else if (evalMode === 'rem message2 all') {
				obj.remMessageDefault[1] = line;
				obj.hasRemMessageDefault[1] = true;
			}
			else if (evalMode === 'rem message2 en') {
				obj.remMessageEN[1] = line;
				obj.hasRemMessageEN[1] = true;
			}
			else if (evalMode === 'rem message2 jp') {
				obj.remMessageJP[1] = line;
				obj.hasRemMessageJP[1] = true;
			}
			else if (evalMode === 'rem message2 tch') {
				obj.remMessageTCH[1] = line;
				obj.hasRemMessageTCH[1] = true;
			}
			else if (evalMode === 'rem message2 sch') {
				obj.remMessageSCH[1] = line;
				obj.hasRemMessageSCH[1] = true;
			}
			else if (evalMode === 'rem message2 kr') {
				obj.remMessageKR[1] = line;
				obj.hasRemMessageKR[1] = true;
			}
			else if (evalMode === 'rem message2 ru') {
				obj.remMessageRU[1] = line;
				obj.hasRemMessageRU[1] = true;
			}
			else if (evalMode === 'rem message2 sp') {
				obj.remMessageSP[1] = line;
				obj.hasRemMessageSP[1] = true;
			}
			else if (evalMode === 'rem message3 all') {
				obj.remMessageDefault[2] = line;
				obj.hasRemMessageDefault[2] = true;
			}
			else if (evalMode === 'rem message3 en') {
				obj.remMessageEN[2] = line;
				obj.hasRemMessageEN[2] = true;
			}
			else if (evalMode === 'rem message3 jp') {
				obj.remMessageJP[2] = line;
				obj.hasRemMessageJP[2] = true;
			}
			else if (evalMode === 'rem message3 sch') {
				obj.remMessageSCH[2] = line;
				obj.hasRemMessageSCH[2] = true;
			}
			else if (evalMode === 'rem message3 tch') {
				obj.remMessageTCH[2] = line;
				obj.hasRemMessageTCH[2] = true;
			}
			else if (evalMode === 'rem message3 kr') {
				obj.remMessageKR[2] = line;
				obj.hasRemMessageKR[2] = true;
			}
			else if (evalMode === 'rem message3 ru') {
				obj.remMessageRU[2] = line;
				obj.hasRemMessageRU[2] = true;
			}
			else if (evalMode === 'rem message3 sp') {
				obj.remMessageSP[2] = line;
				obj.hasRemMessageSP[2] = true;
			}
			else if (evalMode === 'rem message4 all') {
				obj.remMessageDefault[3] = line;
				obj.hasRemMessageDefault[3] = true;
			}
			else if (evalMode === 'rem message4 en') {
				obj.remMessageEN[3] = line;
				obj.hasRemMessageEN[3] = true;
			}
			else if (evalMode === 'rem message4 jp') {
				obj.remMessageJP[3] = line;
				obj.hasRemMessageJP[3] = true;
			}
			else if (evalMode === 'rem message4 sch') {
				obj.remMessageSCH[3] = line;
				obj.hasRemMessageSCH[3] = true;
			}
			else if (evalMode === 'rem message4 tch') {
				obj.remMessageTCH[3] = line;
				obj.hasRemMessageTCH[3] = true;
			}
			else if (evalMode === 'rem message4 kr') {
				obj.remMessageKR[3] = line;
				obj.hasRemMessageKR[3] = true;
			}
			else if (evalMode === 'rem message4 ru') {
				obj.remMessageRU[3] = line;
				obj.hasRemMessageRU[3] = true;
			}
			else if (evalMode === 'rem message4 sp') {
				obj.remMessageSP[3] = line;
				obj.hasRemMessageSP[3] = true;
			}
		}
	}
};

DataManager.getMapLocationDisplayNameRem = function(mapId) {
	if(!mapId) {
		var map = $dataMap;
		var notedata = map.note.split(/[\r\n]+/);
		var evalMode = 'none';

		for (var i = 0; i < notedata.length; i++) {
			var line = notedata[i];
			if (line.match(/<REM MAP ID:[ ](.*)>/i)) {
				mapId = parseInt(RegExp.$1);
				break;
			}
		}
	}
	let remMiscId = 'map_name_' + mapId;
	let mapName = TextManager.remMiscMapText(remMiscId);
	if(mapId > 0) $gameParty.setMapName(mapId, mapName);
	return mapName;
};

////////
// Image Manager
/////////////////

ImageManager.loadSystemRem = function(filename, hue) {
	if(TextManager.isEnglish) {
		filename += "_EN";
	}
	else if(TextManager.isJapanese) {
		filename += "_JP";
	}
    return this.loadBitmap('img/system/', filename, hue, false);
};



/////////
// Game BattlerBase
/////////////

//State message3
Game_BattlerBase.prototype.mostImportantStateText = function() {
	if(this.dontDisplayStateLogMessages()) return '';
    let states = this.states();
    for (let i = 0; i < states.length; i++) {
		let stateText = false;
		if(states[i].hasRemMessageDefault[2]) stateText = states[i].remMessageDefault[2];

		if(TextManager.isEnglish) {
			if(states[i].hasRemMessageEN[2]) stateText = states[i].remMessageEN[2];
		}
		else if(TextManager.isJapanese) {
			if(states[i].hasRemMessageJP[2]) stateText = states[i].remMessageJP[2];
		}
		else if(TextManager.isSChinese) {
			if(states[i].hasRemMessageSCH[2]) stateText = states[i].remMessageSCH[2];
		}
		else if(TextManager.isTChinese) {
			if(states[i].hasRemMessageTCH[2]) stateText = states[i].remMessageTCH[2];
		}
		else if(TextManager.isKorean) {
			if(states[i].hasRemMessageKR[2]) stateText = states[i].remMessageKR[2];
		}
		else if(TextManager.isRussian) {
			if(states[i].hasRemMessageRU[2]) stateText = states[i].remMessageRU[2];
		}
		else if(TextManager.isSpanish) {
			if(states[i].hasRemMessageSP[2]) stateText = states[i].remMessageSP[2];
		}

		if(stateText) return TextManager.convertEscapeCharacters(stateText);

		if (states[i].message3) {
            return states[i].message3;
        }
    }
    return '';
};

/////////
// Window Battlelog
///////////////////

//State message 1 and 2
Window_BattleLog.prototype.displayAddedStates = function(target) {
	if(target.dontDisplayStateLogMessages()) return;
    target.result().addedStateObjects().forEach(function(state) {
        let stateMsg = target.isActor() ? state.message1 : state.message2;
		let displayStateMsg = true;

		if(target.isActor()) {
			if(state.hasRemMessageDefault[0]) stateMsg = state.remMessageDefault[0];

			if(TextManager.isEnglish) {
				if(state.hasRemMessageEN[0]) stateMsg = state.remMessageEN[0];
			}
			else if(TextManager.isJapanese) {
				if(state.hasRemMessageJP[0]) stateMsg = state.remMessageJP[0];
			}
			else if(TextManager.isSChinese) {
				if(state.hasRemMessageSCH[0]) stateMsg = state.remMessageSCH[0];
			}
			else if(TextManager.isTChinese) {
				if(state.hasRemMessageTCH[0]) stateMsg = state.remMessageTCH[0];
			}
			else if(TextManager.isKorean) {
				if(state.hasRemMessageKR[0]) stateMsg = state.remMessageKR[0];
			}
			else if(TextManager.isRussian) {
				if(state.hasRemMessageRU[0]) stateMsg = state.remMessageRU[0];
			}
			else if(TextManager.isSpanish) {
				if(state.hasRemMessageSP[0]) stateMsg = state.remMessageSP[0];
			}
		}
		else { //target is enemy
			if(state.hasRemMessageDefault[1]) stateMsg = state.remMessageDefault[1];

			if(TextManager.isEnglish) {
				if(state.hasRemMessageEN[1]) stateMsg = state.remMessageEN[1];
			}
			else if(TextManager.isJapanese) {
				if(state.hasRemMessageJP[1]) stateMsg = state.remMessageJP[1];
			}
			else if(TextManager.isSChinese) {
				if(state.hasRemMessageSCH[1]) stateMsg = state.remMessageSCH[1];
			}
			else if(TextManager.isTChinese) {
				if(state.hasRemMessageTCH[1]) stateMsg = state.remMessageTCH[1];
			}
			else if(TextManager.isKorean) {
				if(state.hasRemMessageKR[1]) stateMsg = state.remMessageKR[1];
			}
			else if(TextManager.isRussian) {
				if(state.hasRemMessageRU[1]) stateMsg = state.remMessageRU[1];
			}
			else if(TextManager.isSpanish) {
				if(state.hasRemMessageSP[1]) stateMsg = state.remMessageSP[1];
			}

			if($gameParty.isInGloryBattle) displayStateMsg = false;
		}

		if(displayStateMsg) {
			if(state.id === target.deathStateId()) {
				this.push('performCollapse', target);
			}
			if(stateMsg) {
				stateMsg = this.convertEscapeCharacters(stateMsg);
				this.push('popBaseLine');
				this.push('pushBaseLine');
				this.push('addText', stateMsg.format(target.displayName()));
				this.push('waitForEffect');
			}
		}
    }, this);
};

//state message4
Window_BattleLog.prototype.displayRemovedStates = function(target) {
	if(target.dontDisplayStateLogMessages()) return;

	if($gameParty.isInGloryBattle && target.isEnemy()) return;

    target.result().removedStateObjects().forEach(function(state) {
		let stateMsg = false;
		if(state.message4) stateMsg = state.message4;
		if(state.hasRemMessageDefault[3]) stateMsg = state.remMessageDefault[3];

		if(TextManager.isEnglish) {
			if(state.hasRemMessageEN[3]) stateMsg = state.remMessageEN[3];
		}
		else if(TextManager.isJapanese) {
			if(state.hasRemMessageJP[3]) stateMsg = state.remMessageJP[3];
		}
		else if(TextManager.isSChinese) {
			if(state.hasRemMessageSCH[3]) stateMsg = state.remMessageSCH[3];
		}
		else if(TextManager.isTChinese) {
			if(state.hasRemMessageTCH[3]) stateMsg = state.remMessageTCH[3];
		}
		else if(TextManager.isKorean) {
			if(state.hasRemMessageKR[3]) stateMsg = state.remMessageKR[3];
		}
		else if(TextManager.isRussian) {
			if(state.hasRemMessageRU[3]) stateMsg = state.remMessageRU[3];
		}
		else if(TextManager.isSpanish) {
			if(state.hasRemMessageSP[3]) stateMsg = state.remMessageSP[3];
		}

		if(stateMsg) {
			stateMsg = this.convertEscapeCharacters(stateMsg);
			this.push('popBaseLine');
			this.push('pushBaseLine');
			this.push('addText', stateMsg.format(target.displayName()));
		}

    }, this);
};


/////////
// Game Enemy
/////////////

Game_Enemy.prototype.originalName = function() {
	let name = this.enemy().name;
	if(this.enemy().hasRemNameDefault) name = this.enemy().remNameDefault;

	if(TextManager.isEnglish) {
		if(this.enemy().hasRemNameEN) name = this.enemy().remNameEN;
	}
	else if(TextManager.isJapanese) {
		if(this.enemy().hasRemNameJP) name = this.enemy().remNameJP;
	}
	else if(TextManager.isSChinese) {
		if(this.enemy().hasRemNameSCH) name = this.enemy().remNameSCH;
	}
	else if(TextManager.isTChinese) {
		if(this.enemy().hasRemNameTCH) name = this.enemy().remNameTCH;
	}
	else if(TextManager.isKorean) {
		if(this.enemy().hasRemNameKR) name = this.enemy().remNameKR;
	}
	else if(TextManager.isRussian) {
		if(this.enemy().hasRemNameRU) name = this.enemy().remNameRU;
	}
	else if(TextManager.isSpanish) {
		if(this.enemy().hasRemNameSP) name = this.enemy().remNameSP;
	}

	name = TextManager.convertEscapeCharacters(name);
	name = TextManager.convertExtraEscapeCharacters(name);

	return name;
};

////////////
// Game Actor
//////////////////

Game_Actor.prototype.name = function() {
	let name = this._name;
	if(this.actor().hasRemNameDefault) name = this.actor().remNameDefault;

	if(TextManager.isEnglish) {
		if(this.actor().hasRemNameEN) name = this.actor().remNameEN;
	}
	else if(TextManager.isJapanese) {
		if(this.actor().hasRemNameJP) name = this.actor().remNameJP;
	}
	else if(TextManager.isSChinese) {
		if(this.actor().hasRemNameSCH) name = this.actor().remNameSCH;
	}
	else if(TextManager.isTChinese) {
		if(this.actor().hasRemNameTCH) name = this.actor().remNameTCH;
	}
	else if(TextManager.isKorean) {
		if(this.actor().hasRemNameKR) name = this.actor().remNameKR;
	}
	else if(TextManager.isRussian) {
		if(this.actor().hasRemNameRU) name = this.actor().remNameRU;
	}
	else if(TextManager.isSpanish) {
		if(this.actor().hasRemNameSP) name = this.actor().remNameSP;
	}

	name = TextManager.convertEscapeCharacters(name);
	name = TextManager.convertExtraEscapeCharacters(name);

	return name;
};

////////
// Window Help
/////////////////

Window_Help.prototype.setItem = function(item) {
	if(!item) {
		this.setText(item ? item.description : '');
		return;
	}

	let helpText = item.description;
	if(item.hasRemDescDefault) helpText = item.remDescDefault;

	if(TextManager.isEnglish) {
		if(item.hasRemDescEN) helpText = item.remDescEN;
	}
	else if(TextManager.isJapanese) {
		if(item.hasRemDescJP) helpText = item.remDescJP;
	}
	else if(TextManager.isSChinese) {
		if(item.hasRemDescSCH) helpText = item.remDescSCH;
	}
	else if(TextManager.isTChinese) {
		if(item.hasRemDescTCH) helpText = item.remDescTCH;
	}
	else if(TextManager.isKorean) {
		if(item.hasRemDescKR) helpText = item.remDescKR;
	}
	else if(TextManager.isRussian) {
		if(item.hasRemDescRU) helpText = item.remDescRU;
	}
	else if(TextManager.isSpanish) {
		if(item.hasRemDescSP) helpText = item.remDescSP;
	}

	this.setText(helpText);
};


////////
// Window Command
// Original portion of the code credited to トリアコンタン's CommandIcon.js
////////////
// TODO: Consider removing override due to unreliable criteria
//  (Texts starting with REMOVE, REMOTE, etc can trigger it).
Window_Command.prototype.drawText = function(text, x, y, width, align, target) {
    if (this instanceof Window_Options || !isNaN(text) || !text?.startsWith('REM')) {
        return Window_Selectable.prototype.drawText.apply(this, arguments);
    }

    target ??= this.currentItemContainer ?? this._windowContentsSprite;
    const textSprite = this.parseText(text.slice(3));
    textSprite.position.set(x, y);
    target.addChild(textSprite);
};
