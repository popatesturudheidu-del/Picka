patchTextManagerWithRussianDeclension();

//Basic Strings
const LevelNameRU = "Уровень";
const LevelAbbrRU = "Ур.";
const HPNameRU = makeRussianName(["Выносливость", "Выносливости", "Выносливости", "Выносливость", "Выносливостью", "Выносливости"]);
const HPAbbrRU = "Вын";
const MPNameRU = makeRussianName(["Энергия", "Энергии", "Энергии", "Энергию", "Энергией", "Энергии"]);
const MPAbbrRU = "Эн";
const TPNameRU = makeRussianName(["Наслаждение", "Наслаждения", "Наслаждению", "Наслаждение", "Наслаждением", "Наслаждении"]);
const TPAbbrRU = "Наслаждение";
const EXPNameRU = "Очки опыта";
const EXPAbbrRU = "Опыт";

//Param Strings
const MaxHPNameRU = "Лимит Выносливости";
const MaxMPNameRU = "Лимит Энергии";
const AtkNameRU = makeRussianName(["Сила", "Силы", "Силе", "Силу", "Силой", "Силе"]);
const DefNameRU = makeRussianName(["Стойкость", "Стойкости", "Стойкости", "Стойкость", "Стойкостью", "Стойкости"]);
const MatNameRU = makeRussianName(["Ловкость", "Ловкости", "Ловкости", "Ловкость", "Ловкостью", "Ловкости"]);
const MdfNameRU = makeRussianName(["Разум", "Разума", "Разуму", "Разум", "Разумом", "Разуме"]);
const AgiNameRU = makeRussianName(["Проворность", "Проворности", "Проворности", "Проворность", "Проворностью", "Проворности"]);
const LukNameRU = makeRussianName(["Шарм", "Шарма", "Шарму", "Шарм", "Шармом", "Шарме"]);

const CritDmgNameRU = "Критический урон";
const WpAtkNameRU = "Атака оружия";
const WpDefNameRU = "Защита оружия";
const OverblowProtectionNameRU = "Сохранность";
const FatigueNameRU = "Усталость";
const FatigueGainNameRU = "Рост усталости";
const FatigueRecoveryNameRU = "Восстановление усталости";
const MaxWillpowerNameRU = "Лимит Силы Воли";
const WillpowerNameRU = makeRussianName(["Сила Воли", "Силы Воли", "Силе Воли", "Силу Воли", "Силой Воли", "Силе Воли"]);
const WillpowerAbbrRU = "Воля";
const CooldownTurnsSingularNameRU = "%1 ход";
const CooldownTurnsPluralNameRU = "%1 %Plural(%1;ход;хода;ходов)";
const CockinessNameRU = "Дерзость";

const XParamNameRU = [
"Точность",
"Уклонение",
"Шанс критических ударов",
"Критическое уклонение",
"Шанс поцарапать",
"",
"Шанс контратаки",
"Регенерация выносливости",
"Регенерация энергии",
"Наслаждения за ход"];

const SParamNameRU = [
"Уровень угрозы",
"Защита оружия",
"Частота регенерации",
"Цена энергетических навыков",
"Атака оружия",
"Регенерация Силы Воли",
"Цена навыков Силы Воли",
"Цена секс-навыков",
"Цена навыков атаки",
"Опыт"];

//Elements String

const ElementSlashNameRU = "Сопротивление рубящим ударам";
const ElementPierceNameRU = "Сопротивление колющим ударам";
const ElementBluntNameRU = "Сопротивление дробящим ударам";
const ElementTalkNameRU = "Сопротивление разговорам";
const ElementSightNameRU = "Сопротивление взглядам";
const ElementPettingNameRU = "Сопротивление ласкам";
const ElementStripNameRU = "Сопротивление раздеванию";
const ElementAlmightyNameRU = "Всемогущий";
const ElementDrugsNameRU = "Наркотики";
const ElementStenchNameRU = "Вонь";
const ElementSexNameRU = "Сопротивление сексу";

//Passive Categories
const PassiveCategoryNameRU = [
"\\I[56]Все",
"\\I[57]\\C[1]Желание рта",
" ├Рот",
" ├Поцелуй",
" └Минет",
"\\I[58]\\C[1]Желание груди",
" ├Грудь",
" ├Соски",
" └Пайзури",
"\\I[59]\\C[1]Желание киски",
" ├Клитор",
" ├Киска",
" ├Намокание",
" ├Куннилингус",
" └Вагинальный секс",
"\\I[60]\\C[1]Желание попки",
" ├Булки",
" ├Анал",
" └Анальный секс",
"\\I[61]\\C[1]Желание члена",
" ├Интерес",
" ├Работа ручками",
" ├Буккакэ",
" ├Питьё",
" ├Кримпай",
" └Отношения",
"\\I[44]\\C[1]Садизм",
" ├Статус",
" ├Способности", 
" ├Сопротивление",
" ├Работа ножками",
" └Доминирование",
"\\I[45]\\C[1]Мазохизм",
" ├Словестный",
" ├Негативные эффекты",
" ├Анилингус",
" ├Фетишизм",
" └Покорность",
"\\I[46]\\C[1]Мастурбация",
" ├Желание",
" ├Сон",
" ├Игрушки",
" └Оргазм",
"\\I[47]\\C[1]Эксгибиционизм",
" ├Взгляд",
" ├Одежда",
" ├Нагота",
" └События"
];


//Command Strings
const FightNameRU = "Сражаться";
const EscapeNameRU = "Сбежать";
const AttackNameRU = "Атаковать";
const GuardNameRU = "Конец фазы";
const ItemNameRU = "Предметы";
const SkillNameRU = "Пассивки";
const EquipNameRU = "Снаряжение";
const StatusNameRU = "Статус";
const FormationNameRU = "Группа";
const SaveNameRU = "Сохранение";
const LoadNameRU = "Загрузка";
const DeleteNameRU = "Удалить";
const GameEndNameRU = "Выйти";
const OptionsNameRU = "Настройки";
const WeaponNameRU = "Оружие";
const ArmorNameRU = "Аксессуары";
const KeyItemNameRU = "Ключевой предмет";
const Equip2NameRU = "Снаряжение";
const NewGameNameRU = "Новая игра";
const ContinueNameRU = "Продолжить";
const ToTitleNameRU = "В главное меню";
const CancelNameRU = "Закрыть";
const BuyNameRU = "Магазин";
const SellNameRU = "Продать";

//Message Strings
const ActionFailureRU = "Никакого эффекта на %П1!";
const ActorDamageRU = "\\C[16]%И1 получает %2 ед. урона выносливости!";
const ActorDrainRU = "%1's %2 are drained by %3 points!"; //currently unused
const ActorGainRU = "\\C[11]%И1 получает %3 %2!";
const ActorLossRU = "\\C[2]%И1 теряет %3 %2!";
const ActorNoDamageRU = "%И1 не получила урона!";
const ActorNoHitRU = "\\C[6]Царапина! %И1 получила %2 ед. урона!";
const ActorNoDamageGrazeRU = "Царапина! %И1 не получила урона!";
const ActorRecoveryRU = "%1's %2 are restored by %3 points!"; //currently unused
const CriticalToActorRU = "\\C[10]Критическое попадание!!";
const CriticalToEnemyRU = "Критическое попадание!!";
const DefeatTextRU = "%1 is exhausted!"; //currently unused
const EmergeTextRU = "%1 appears!"; //currently unused
const EnemyDamageRU = "%И1 получает %2 ед. урона выносливости!";
const EnemyDrainRU = "%1's %2 are drained by %3 points!"; //currently unused
const EnemyGainRU = "%И1 получает %3 %2!";
const EnemyLossRU = "%И1 теряет %3 %2!";
const EnemyNoDamageRU = "\\C[7]%И1 не получил урона!";
const EnemyNoHitRU = "\\C[8]Царапина! %И1 получил %2 ед. урона!";
const EnemyNoDamageGrazeRU = "\\C[7]Царапина! %И1 не получил урона!";
const EnemyRecoveryRU = "%1's %2 are restored by %3 points!"; //currently unused
const EscapeFailureRU = "But they couldn't escape!"; //currently unused
const EscapeStartRU = "%И1 сбегает!"; //currently unused
const EvasionTextRU = "%И1 уклоняется от атаки!";
const SuperEffectiveTextRU = "Это было очень эффективно!";
const NotEffectiveTextRU = "Было не очень эффективно...";
const SaveFileTextRU = "Файл";
const LoadMessageRU = "Какой файл загрузить?";
const PreemptiveTextRU = "%И1 успешно атакован изподтишка!";
const SurpriseTextRU = "%И1 попадает в засаду!";
const UseItemTextRU = "%И1 использует %2!";
const VictoryTextRU = "%И1 победила!"; //currently unused
const CounterAttackTextRU = "%И1 контратакует!";


const WardenNameRU = "Уровень Надзирателя";
const WardenLvlLimitRU = "Лимит Уровня Надзирателя";
const SlutNameRU = "Уровень Шлюхи";
const StatLevelNameRU = "%1";
const DayNameRU = "День";
const OrderNameRU = "Порядок";
const OrderChangeNameRU = "Контроль";
const CorruptionNameRU = "Коррупция";
const TitlesNameRU = "Титулы";
const FundingNameRU = "Капитал";
const LedgerNameRU = "《 Бухгалтерия 》";
const IncomeNameRU = "Доход";
const BarIncomeNameRU = "Доход бара";
const StoreIncomeNameRU = "Доход магазина";
const OutsourcingIncomeNameRU = "Доход с аутсорсинга";
const NerdBlackmailNameRU = "Плата ботаникам";
const ExpenseNameRU = "Расходы";
const EstimatedSubsidiesNameRU = "Субсидии";
const EstimatedProfitNameRU = "Итого";
const EstimatedLossNameRU = "Итого";

const SecretaryModeNameRU = "Режим Секретарши";
const WardenModeNameRU = "Режим Надзирательницы";
const PrisonerModeNameRU = "Режим Заключённой";

const SecretaryFreePlayModeNameRU = "Режим Секретарши, свободная игра";
const WardenFreePlayModeNameRU = "Режим Надзирательницы, свободная игра";
const PrisonerFreePlayModeNameRU = "Режим Заключённой, свободная игра";

const SecretaryChallengeRunNameRU = "Secretary Challenge Run";
const WardenChallengeRunNameRU = "Warden Challenge Run";
const PrisonerChallengeRunNameRU = "Prisoner Challenge Run";

const SecretaryDescensionRunNameRU = "Secretary Descension Run";
const WardenDescensionRunNameRU = "Warden Descension Run";
const PrisonerDescensionRunNameRU = "Prisoner Descension Run";


//Right Click Status
const RCMenuSleepQualityNegTwoTextRU = "\\C[7]Карин почти не спала прошлой ночью... \\C[0](\\C[18]Характеристики -10%, Шарм -20%\\C[0])";
const RCMenuSleepQualityNegOneTextRU = "\\C[7]Карин плохо спала прошлой ночью... \\C[0](\\C[2]Характеристики -5%, Шарм -10%\\C[0])";
const RCMenuSleepQualityZeroTextRU = "\\C[8]Карин выспалась.\\C[0]";
const RCMenuSleepQualityOneTextRU = "\\C[0]Карин неплохо отдохнула прошлой ночью. (\\C[24]Характеристики +3%\\C[0])";
const RCMenuSleepQualityTwoTextRU = "\\C[0]Карин хорошо отдохнула прошлой ночью. (\\C[29]Характеристики +6%\\C[0])";
const RCMenuSleepQualityThreeTextRU = "\\C[0]Карин отлично выспалась прошлой ночью. (\\C[28]Характеристики +9%\\C[0])";

const RCMenuFatigueLevelOneTextRU = "\\C[0]Карин начинает уставать. (\\C[2]Характеристики -10%\\C[0])";
const RCMenuFatigueLevelTwoTextRU = "\\C[0]Карин устала... (\\C[2]Характеристики -20%\\C[0])";
const RCMenuFatigueLevelThreeTextRU = "\\C[8]Карин начинает истощаться... \\C[0](\\C[10]Характеристики -30%\\C[0])";
const RCMenuFatigueLevelFourTextRU = "\\C[7]Карин истощена... \\C[0](\\C[18]Характеристики -40%, нельзя сбежать\\C[0])";
const RCMenuFatigueLevelFiveTextRU = "\\C[7]Карин валится с ног...... \\C[0](\\C[18]Характеристики -50%, нельзя сбежать\\C[0])";
const RCMenuFatigueLevelFourHardTextRU = "\\C[7]Карин истощена... \\C[0](\\C[18]Характеристики -40%\\C[0])";
const RCMenuFatigueLevelFiveHardTextRU = "\\C[7]Карин валится с ног...... \\C[0](\\C[18]Характеристики -50%\\C[0])";

const RCMenuArousedLevelOneTextRU = "\\C[27]Карин возбуждена...\\C[0]";
const RCMenuArousedLevelTwoTextRU = "\\C[5]Карин очень возбуждена...\\C[0]";

const RCMenuFrustratedLevelOneTextRU = "\\C[27]Карин сексуально не удовлетворена...\\C[0]";
const RCMenuFrustratedLevelTwoTextRU = "\\C[5]Карин очень сильно хочет кончить...\\C[0]";

const RCMenuNightModeTextRU = "\\C[27]Непотребный вид Карин привлекает дополнительное внимание...\\C[0]";

const RCMenuLostPantiesTextRU = "\\C[27]Карин сейчас без трусиков.\\C[0]";

const RCMenuDefiledHalberdTextRU = "\\C[7]Алебарда Карин испачкана... \\C[0](\\C[18]Безоружна\\C[0])";

const RCMenuMetalSingleTextRU = "\\C[0]Сегодня Карин одолела металлического заключённого. (\\C[11]Опыт +%1%\\C[0])";
const RCMenuMetalPluralTextRU = "\\C[0]Сегодня Карин одолела %2 металлических заключённых. (\\C[11]Опыт +%1%\\C[0])";

const RCMenuGiftsSingleTextRU = "\\C[0]Карин получила подарок: \\C[0]";
const RCMenuGiftsPluralTextRU = "\\C[0]Карин получила подарки: \\C[0]";

const RCMenuMealOneTextRU = "\\C[0]Карин поела в столовой: (\\C[11]Опыт +50%\\C[0])";
const RCMenuMealTwoTextRU = "\\C[0]Карин поела в столовой: (\\C[11]Регенерации Выносливости, Энергии, Силы Воли +5%\\C[0])";
const RCMenuMealThreeTextRU = "\\C[0]Карин поела в столовой: (\\C[11]Выносливость +15%, меньше урона от оргазма\\C[0])";
const RCMenuMealFourTextRU = "\\C[0]Карин поела в столовой: (\\C[27]Повышен шанс возбудиться\\C[0])";
const RCMenuMealFiveTextRU = "\\C[0]Карин поела в столовой: (\\C[27]Чувствительности груди и киски +50%\\C[0])";
const RCMenuMealSixTextRU = "\\C[0]Карин поела в столовой: (\\C[11]Сила, Ловкость, Проворность +5%\\C[0])";
const RCMenuMealSevenTextRU = "\\C[0]Карин поела в столовой: (\\C[11]Рост усталости -33%\\C[0])";
const RCMenuMealEightTextRU = "\\C[0]Карин поела в столовой: (\\C[11]Сопротивления ласкам и сексу +20%\\C[0])";
const RCMenuMealNineTextRU = "\\C[0]Карин поела в столовой: (\\C[11]Шанс атаки врагов---\\C[0])";
const RCMenuMealTenTextRU = "\\C[0]Карин поела в столовой: (\\C[27]Чувствительности рта и к аналу +50%\\C[0])";

const RCMenuStoreItemOneTextRU = "\\C[0]Активен предмет из магазина: (\\C[11]Рост усталости -20% \\C[10]Характеристики -5%\\C[0])";
const RCMenuStoreItemTwoTextRU = "\\C[0]Активен предмет из магазина: (\\C[11]Шанс критических ударов алебардой +25% \\C[10]Защита алебардой -10%\\C[0])";
const RCMenuStoreItemThreeTextRU = "\\C[0]Активен предмет из магазина: (\\C[11]Сопротивления рубящим, колющим, дробящим ударам +25% \\C[10]Регенерация выносливости -2%\\C[0])";
const RCMenuStoreItemFourTextRU = "\\C[0]Активен предмет из магазина: (\\C[11]Сопротивление раздеванию +30％ \\C[10]Шарм в битве -15%\\C[0])";
const RCMenuStoreItemFiveTextRU = "\\C[0]Активен предмет из магазина: (\\C[11]Шарм в битве +15% \\C[10]Сопротивления раздеванию и разговорам -15%\\C[0])";

const PrisonLevelNameRU = "Уровень";
const PrisonLevelStatusUnknownRU = "???????";
const PrisonLevelStatusAnarchyRU = "АНАРХИЯ";
const PrisonLevelStatusSubjugatedRU = "Подчинён";
const PrisonLevelStatusRiotingRU = "БУНТ";

const PrisonMapLevelNameRU = "Уровень %1: ";
const PrisonMapOutsideNameRU = "Форт Ганон: ";
const PrisonMapUnknownNameRU = "Где-то";
const PrisonMapUndiscoveredNameRU = "???";
const PrisonMapWeddingNameRU = "Посреди её свадьбы";
const PrisonMapLevelFiveNameRU = "Уровень 5";
const PrisonMapEndlessPrisonNameRU = "Бесконечная тюремная битва";
const PrisonMapEndlessHellNameRU = "Бесконечная адская битва";
const PrisonMapCustomNameRU = "Настраиваемая битва";


const KissingLevelRU = "Уровень поцелуев";
const PettingLevelRU = "Уровень ласк";
const HandjobLevelRU = "Уровень работы ручками";
const BlowjobLevelRU = "Уровень минета";
const FootjobLevelRU = "Уровень работы ножками";
const RimjobLevelRU = "Уровень анилингуса";
const TittyFuckLevelRU = "Уровень пайзури";
const PussyLevelRU = "Уровень вагинального секса";
const AnalLevelRU = "Уровень анального секса";
const MasturbationLevelRU = "Уровень мастурбации";
const SadismLevelRU = "Уровень садизма";
const MasochismLevelRU = "Уровень мазохизма";

const MouthSensitivityRU = "Чувствительность рта";
const FingerSensitivityRU = "Чувствительность рук";
const BoobsSensitivityRU = "Чувствительность груди";
const NipplesSensitivityRU = "Чувствительность сосков";
const ClitorisSensitivityRU = "Чувствительность клитора";
const PussySensitivityRU = "Чувствительность киски";
const ButtSensitivityRU = "Чувствительность попки";
const AnalSensitivityRU = "Чувствительность к аналу";
const FootSensitivityRU = "Чувствительность ножек";
const TalkSensitivityRU = "Чувствительность к разговорам";
const SightSensitivityRU = "Чувствительность к взглядам";
const SwallowSensitivityRU = "Чувствительность глотания";
const PussyCreampieSensitivityRU = "Чувствительность к сперме в киске";
const AnalCreampieSensitivityRU = "Чувствительность к сперме в попке";
const BukkakeSensitivityRU = "Чувствительность к буккакэ";
const ButtSpankingSensitivityRU = "Чувствительность к ударам по заднице";

//Status Menu
const StatusMenuPrimaryRU = "Основные";
const StatusMenuSecondaryRU = "Вторичные";
const StatusMenuProfileRU = "Профиль";
const StatusMenuTertiaryRU = "Секс";
const StatusMenuRecordsRU = "Записи";
const StatusMenuDesiresRU = "Желания";
const StatusMenuEffectsRU = "Состояние";

const StatusMenuStatsRU = "Характеристики";
const StatusMenuStatLevelsRU = "《 Уровни основных характеристик 》";
const StatusMenuAttributesRU = "《 Атрибуты 》";
const StatusMenuResistsRU = "《 Сопротивления 》";
const StatusMenuLevelsRU = "《 Секс-уровни 》";
const StatusMenuSensitivitiesRU = "《 Чувствительность 》";

const StatusMenuMouthDesireReqRU = "《 Требования к Желанию рта 》";
const StatusMenuBoobsDesireReqRU = "《 Требования к Желанию груди 》";
const StatusMenuPussyDesireReqRU = "《 Требования к Желанию киски 》";
const StatusMenuButtDesireReqRU = "《 Требования к Желанию попки 》";
const StatusMenuCockDesireReqRU = "《 Требования к Желанию члена 》";

const ProfileNameTextRU = "Имя:";
const ProfileAgeTextRU = "Возраст:";
const ProfileThreeSizesTextRU = "Размеры:";
const ProfileBioTextRU = "Биография";

const ProfileNameRU = "Карин";
const ProfileThreeSizesRU = "110-59-100 (чашечка К)";
const ProfileThreeSizesHCupRU = "96-59-100 (чашечка H)";
const ProfileBio_One_RU = [
"Карин — вундеркинд. С малых лет, она была талантливей и успешней всех.", 
"Её потрясающие результаты позволили ей без проблем вступить в ряды элит империи Занадос.",
"Вскоре она стала личным секретарём императора, что сделало её одним из важнейших людей империи.",
"Карин одарена красивым лицом и стройным телом, а её самоуверенность и гордость не знают границ."
];

const ProfileRecordFirstRU = "Первый: ";
const ProfileRecordLastRU = "Последний: ";
const ProfileRecordSecretRU = "\\C[7]Секрет\\C[0]";
const ProfileRecordNeverRU = "\\C[29]Никогда\\C[0]";

const ProfileRecordKissRU = "Поцелуй";
const ProfileRecordSexRU = "Секс";
const ProfileRecordAnalRU = "Анал";
const ProfileRecordHandjobRU = "Работа ручками";
const ProfileRecordBlowjobRU = "Минет";
const ProfileRecordTittyFuckRU = "Пайзури";
const ProfileRecordFootjobRU = "Работа ножками";
const ProfileRecordRimjobRU = "Анилингус";
const ProfileRecordSwallowRU = "Глотание спермы";
const ProfileRecordPussyCreampieRU = "Сперма в киске";
const ProfileRecordAnalCreampieRU = "Сперма в попке";
const ProfileRecordBodyBukkakeRU = "Буккакэ тела";
const ProfileRecordFaceBukkakeRU = "Буккакэ лица";

const ProfileRecordCunnilingusRU = "Куннилингус";
const ProfileRecordSuckFingersRU = "Ласки рта";
const ProfileRecordButtSpankRU = "Удар по заднице";
const ProfileRecordBoobsPettingRU = "Ласки груди";
const ProfileRecordNipplesPettingRU = "Ласки сосков";
const ProfileRecordClitPettingRU = "Ласки клитора";
const ProfileRecordPussyPettingRU = "Ласки киски";
const ProfileRecordButtPettingRU = "Ласки попки";
const ProfileRecordAnalPettingRU = "Ласки ануса";
const ProfileRecordClitToyRU = "Клиторальные игрушки";
const ProfileRecordPussyToyRU = "Вагинальные игрушки";
const ProfileRecordAnalToyRU = "Анальные игрушки";
const ProfileRecordPussySexRU = "Вагинальный секс";
const ProfileRecordAnalSexRU = "Анальный секс";


const ProfileRecordFirstKissRU = "Первый раз поцеловалась с \\C[31]%Т2\\C[0] %WhereIn(%3) на \\C[26]%1 день\\C[0].";
const ProfileRecordFirstKissWasPenisRU = "Мой первый поцелуй украл член \\C[31]%Р2\\C[0] %WhereIn(%3) на \\C[26]%1 день\\C[0].";
const ProfileRecordFirstKissWasAnusRU = "Мой девственный поцелуй забрал анус \\C[31]%Р2\\C[0] %WhereIn(%3) на \\C[26]%1 день\\C[0].";

const ProfileRecordLastKissRU = "Поцеловала \\C[31]%В2\\C[0] %WhereIn(%3) на \\C[26]%1 день\\C[0].";
const ProfileRecordFirstSexRU = "Отдала свою девственность \\C[31]%Д2\\C[0] %WhereIn(%3) на \\C[26]%1 день\\C[0].";
const ProfileRecordFirstPussySexWasDildoRU = "Девственности меня лишил дилдо \\C[31]%Р2\\C[0] %WhereIn(%3) на \\C[26]%1 день\\C[0].";
const ProfileRecordLastSexRU = "Занималась сексом с \\C[31]%Т2\\C[0] %WhereIn(%3) на \\C[26]%1 день\\C[0].";
const ProfileRecordFirstAnalRU = "Отдала анальную девственность \\C[31]%Д2\\C[0] %WhereIn(%3) на \\C[26]%1 день\\C[0].";
const ProfileRecordLastAnalRU = "Занималась анальным сексом с \\C[31]%Т2\\C[0] %WhereIn(%3) на \\C[26]%1 день\\C[0].";
const ProfileRecordFirstHandjobRU = "Подрочила первый член на \\C[26]%1 день\\C[0] %WhereIn(%3) используя член \\C[31]%Р2\\C[0].";
const ProfileRecordLastHandjobRU = "Подрочила \\C[31]%Д2\\C[0] %WhereIn(%3) на \\C[26]%1 день\\C[0].";
const ProfileRecordFirstBlowjobRU = "Первый раз отсосала на \\C[26]%1 день\\C[0] %WhereIn(%3) используя член \\C[31]%Р2\\C[0].";
const ProfileRecordLastBlowjobRU = "Отсосала \\C[31]%Д2\\C[0] %WhereIn(%3) на \\C[26]%1 день\\C[0].";
const ProfileRecordFirstTittyFuckRU = "Обслужила первый член на \\C[26]%1 день\\C[0] используя член \\C[31]%Р2\\C[0] %WhereIn(%3).";
const ProfileRecordLastTittyFuckRU = "Трахнула грудью \\C[31]%В2\\C[0] %WhereIn(%3) на \\C[26]%1 день\\C[0].";

const ProfileRecordFirstFootjobRU = "Впервые подрочила ножками на \\C[26]%1 день\\C[0] %WhereIn(%3) используя член \\C[31]%Р2\\C[0].";
const ProfileRecordLastFootjobRU = "Обслужила ножками \\C[31]%В2\\C[0] %WhereIn(%3) на \\C[26]%1 день\\C[0].";
const ProfileRecordFirstRimjobRU = "Первый раз лизала задницу \\C[31]%Д2\\C[0] на \\C[26]%1 день\\C[0] %WhereIn(%3).";
const ProfileRecordLastRimjobRU = "Вылизала зад \\C[31]%Д2\\C[0] %WhereIn(%3) на \\C[26]%1 день\\C[0].";

const ProfileRecordFirstBukkakeRU = "Первый раз меня облил спермой \\C[31]%И2\\C[0] на \\C[26]%1 день\\C[0] %WhereIn(%3).";
const ProfileRecordLastBukkakeRU = "Помылась спермой \\C[31]%Р2\\C[0] %WhereIn(%3) на \\C[26]%1 день\\C[0].";
const ProfileRecordFirstFaceBukkakeRU = "Моё лицо обкончали на \\C[26]%1 день\\C[0], это сделал \\C[31]%И2\\C[0] %WhereIn(%3).";
const ProfileRecordLastFaceBukkakeRU = "Приняла сперму \\C[31]%Р2\\C[0] на своё лицо %WhereIn(%3) на \\C[26]%1 день\\C[0].";

const ProfileRecordFirstSwallowRU = "Познала вкус спермы на \\C[26]%1 день\\C[0] %WhereIn(%3) от \\C[31]%Р2\\C[0].";
const ProfileRecordLastSwallowRU = "Проглотила сперму \\C[31]%Р2\\C[0] %WhereIn(%3) на \\C[26]%1 день\\C[0].";
const ProfileRecordFirstPussyCreampieRU = "Позволила \\C[31]%Д2\\C[0] кончить внутрь %WhereIn(%3) на \\C[26]%1 день\\C[0].";
const ProfileRecordLastPussyCreampieRU = "\\C[31]%И2\\C[0] заполнил меня спермой %WhereIn(%3) на \\C[26]%1 день\\C[0].";
const ProfileRecordFirstAnalCreampieRU = "Позволила \\C[31]%Д2\\C[0] кончить в свою попку %WhereIn(%3) на \\C[26]%1 день\\C[0].";
const ProfileRecordLastAnalCreampieRU = "Мою попку заполнил \\C[31]%И2\\C[0] %WhereIn(%3) на \\C[26]%1 день\\C[0].";


const StatusRecordDaysSingularRU = "день";
const StatusRecordDaysPluralRU = "всего дней";
const StatusRecordTimesSingularRU = "раз";
const StatusRecordTimesPluralRU = "раза";
const StatusRecordJustPeopleSingularRU = "человек";
const StatusRecordJustPeoplePluralRU = "человек";
const StatusRecordDifferentPeopleSingularRU = "человек";
const StatusRecordDifferentPeoplePluralRU = "разные люди";

const StatusRecordDateRU = "Провела всего %1 %Plural(%1;день;дня;дней) в тюрьме.";
const StatusRecordDateSlutRU = "Провела %1 %Plural(%1;замечательный день;замечательных дня;замечательных дней) в форту Ганон♥";
const StatusRecordFightRU = "Подчинила %1 %Plural(%1;человека;человек;человек) и проиграла %2 %Plural(%2;раз;раза;раз).";
const StatusRecordFightSlutRU = "Подчинила %1 %Plural(%1;человека;человек;человек) и «проиграла» лишь %2 %Plural(%2;раз;раза;раз)♥";
const StatusRecordFightSubduedOnlyRU = "Подчинила %1 %Plural(%1;человека;человек;человек).";
const StatusRecordStripRU = "С меня снимали одежду %1 %Plural(%1;раз;раза;раз) и трусики %2 %Plural(%2;раз;раза;раз).";
const StatusRecordStripSlutRU = "Меня раздели %1 %Plural(%1;раз;раза;раз) и стянули трусики %2 %Plural(%2;раз;раза;раз)♥";
const StatusRecordKissRU = "Меня %Plural(%2;поцеловал;поцеловали;поцеловали) %1 %Plural(%1;раз;раза;раз) %2 %Plural(%2;разный человек;разных человека;разных людей;человек).";
const StatusRecordKissSlutRU = "Я целовалась %1 %Plural(%1;раз;раза;раз) с %2 %Plural(%2;разным человеком;разными людьми;разными людьми;человеком)♥";
const StatusRecordBoobsPettedRU = "Мою грудь %Plural(%2;лапал;лапали;лапали) %1 %Plural(%1;раз;раза;раз) %2 %Plural(%2;разный человек;разных человека;разных людей;человек).";
const StatusRecordBoobsPettedSlutRU = "С моими сиськами %Plural(%2;играли;играли;играли;играл) %1 %Plural(%1;раз;раза;раз) %2 %Plural(%2;разный человек;разных человека;разных людей;человек)♥";
const StatusRecordNipplesPettedRU = "Мои соски %Plural(%2;щипал;щипали;щипали) %1 %Plural(%1;раз;раза;раз) %2 %Plural(%2;разный человек;разных человека;разных людей;человек).";
const StatusRecordNipplesPettedSlutRU = "С моими сосками %Plural(%2;играли;играли;играли;играл) %1 %Plural(%1;раз;раза;раз) %2 %Plural(%2;разный человек;разных человека;разных людей;человек)♥";
const StatusRecordClitPettedRU = "Мой клитор %Plural(%2;трогал;трогали;трогали) %1 %Plural(%1;раз;раза;раз) %2 %Plural(%2;разный человек;разных человека;разных людей;человек).";
const StatusRecordClitPettedSlutRU = "С моим клитором %Plural(%2;играли;играли;играли;играл) %1 %Plural(%1;раз;раза;раз) %2 %Plural(%2;разный человек;разных человека;разных людей;человек)♥";
const StatusRecordPussyPettedRU = "Мою киску %Plural(%2;трогал;трогали;трогали) %1 %Plural(%1;раз;раза;раз) %2 %Plural(%2;разный человек;разных человека;разных людей;человек).";
const StatusRecordPussyPettedSlutRU = "С моей киской %Plural(%2;играли;играли;играли;играл) %1 %Plural(%1;раз;раза;раз) %2 %Plural(%2;разный человек;разных человека;разных людей;человек)♥";
const StatusRecordButtPettedRU = "Мою попу %Plural(%2;облапал;облапали;облапали) %1 %Plural(%1;раз;раза;раз) %2 %Plural(%2;разный человек;разных человека;разных людей;человек).";
const StatusRecordButtPettedSlutRU = "С моей попкой %Plural(%2;играли;играли;играли;играл) %1 %Plural(%1;раз;раза;раз) %2 %Plural(%2;разный человек;разных человека;разных людей;человек)♥";
const StatusRecordAnalPettedRU = "Мой анус %Plural(%2;трогал;трогали;трогали) %1 %Plural(%1;раз;раза;раз) %2 %Plural(%2;разный человек;разных человека;разных людей;человек).";
const StatusRecordAnalPettedSlutRU = "С моим анусом %Plural(%2;играли;играли;играли;играл) %1 %Plural(%1;раз;раза;раз) %2 %Plural(%2;разный человек;разных человека;разных людей;человек)♥";
const StatusRecordMasturbateRU = "Мастурбировала %1 %Plural(%1;раз;раза;раз) и видела как другие мастурбируют %2 %Plural(%2;раз;раза;раз).";
const StatusRecordMasturbateSlutRU = "Ласкала себя всего лишь %1 %Plural(%1;раз;раза;раз) и наблюдала как другие дрочат %2 %Plural(%2;раз;раза;раз)♥";
const StatusRecordSexPartnersRU = "У меня %Plural(%1;был;было;было) %1 %Plural(%1;сексуальный партнёр;сексуальных партнёра;сексуальных партнёров).";
const StatusRecordSexPartnersSlutRU = "У меня %Plural(%1;был;было;было) всего лишь %1 %Plural(%1;сексуальный партнёр;сексуальных партнёра;сексуальных партнёров).";
const StatusRecordHandjobRU = "Подрочила %1 %Plural(%1;раз;раза;раз) %2 %Plural(%2;разному человеку;разным людям;разным людям;человеку).";
const StatusRecordHandjobSlutRU = "Подрочила всего лишь %1 %Plural(%1;раз;раза;раз) %2 %Plural(%2;разному человеку;разным людям;разным людям;человеку)♥";
const StatusRecordBlowjobRU = "Сделала %1 %Plural(%1;минет;минета;минетов) %2 %Plural(%2;разному человеку;разным людям;разным людям;человеку).";
const StatusRecordBlowjobSlutRU = "Отсосала %1 %Plural(%1;раз;раза;раз) %2 %Plural(%2;разному человеку;разным людям;разным людям;человеку)♥";
const StatusRecordTittyFuckRU = "Мою грудь %Plural(%2;трахнул;трахнули;трахнули) %1 %Plural(%1;раз;раза;раз) %2 %Plural(%2;разный человек;разных человека;разных людей;человек).";
const StatusRecordTittyFuckSlutRU = "Ублажила своей грудью %1 %Plural(%1;раз;раза;раз) %2 %Plural(%2;разного человека;разных людей;разных людей;человека)♥";
const StatusRecordFootjobRU = "Подрочила ногами %1 %Plural(%1;раз;раза;раз) %2 %Plural(%2;разному человеку;разным людям;разным людям;человеку).";
const StatusRecordFootjobSlutRU = "Подрочила ножками всего лишь %1 %Plural(%1;раз;раза;раз) %2 %Plural(%2;разному человеку;разным людям;разным людям;человеку)♥";
const StatusRecordRimjobRU = "Лизала зад %1 %Plural(%1;раз;раза;раз) %2 %Plural(%2;разному человеку;разным людям;разным людям;человеку).";
const StatusRecordRimjobSlutRU = "Почистила анус всего лишь %1 %Plural(%1;раз;раза;раз) %2 %Plural(%2;разному человеку;разным людям;разным людям;человеку)♥";
const StatusRecordCunniRU = "Мне %Plural(%2;лизал;лизали;лизали) %1 %Plural(%1;раз;раза;раз) %2 %Plural(%2;разный человек;разных человека;разных людей;человек).";
const StatusRecordCunniSlutRU = "Мне %Plural(%2;лизал;лизали;лизали) всего лишь %1 %Plural(%1;раз;раза;раз) %2 %Plural(%2;разного человека;разных людей;разных людей;человека)♥";
const StatusRecordSpankedRU = "Меня %Plural(%2;отшлёпал;отшлёпали;отшлёпали) %1 %Plural(%1;раз;раза;раз) %2 %Plural(%2;разный человек;разных человека;разных людей;человек).";
const StatusRecordSpankedSlutRU = "Меня %Plural(%2;отшлёпал;отшлёпали;отшлёпали) всего лишь %1 %Plural(%1;раз;раза;раз) %2 %Plural(%2;разный человек;разных человека;разных людей;человек)♥";
const StatusRecordPussySexRU = "Мою киску %Plural(%2;трахнул;трахнули;трахнули) %1 %Plural(%1;раз;раза;раз) %2 %Plural(%2;разный человек;разных человека;разных людей;человек).";
const StatusRecordPussySexSlutRU = "Мою киску %Plural(%2;трахнул;трахнули;трахнули) всего лишь %1 %Plural(%1;раз;раза;раз) %2 %Plural(%2;разный человек;разных человека;разных людей;человек)♥";
const StatusRecordAnalSexRU = "Мою попку %Plural(%2;трахнул;трахнули;трахнули) %1 %Plural(%1;раз;раза;раз) %2 %Plural(%2;разный человек;разных человека;разных людей;человек).";
const StatusRecordAnalSexSlutRU = "Мою попку %Plural(%2;трахнул;трахнули;трахнули) всего лишь %1 %Plural(%1;раз;раза;раз) %2 %Plural(%2;разный человек;разных человека;разных людей;человек)♥";
const StatusRecordGangbangRU = "Двойное проникновение было %1 %Plural(%1;раз;раза;раз) и групповой секс %2 %Plural(%2;раз;раза;раз).";
const StatusRecordGangbangSlutRU = "Двойное проникновение было всего лишь %1 %Plural(%1;раз;раза;раз) и групповушка всего лишь %2 %Plural(%2;раз;раза;раз)♥";
const StatusRecordOrgasmRU = "Кончила %1 %Plural(%1;раз;раза;раз) на глазах у %2 %Plural(%2;разного человека;разных людей;разных людей;человека), выделив %3мл жидкости.";
const StatusRecordOrgasmSlutRU = "Кончила %1 %Plural(%1;раз;раза;раз) на глазах у %2 %Plural(%2;разного человека;разных людей;разных людей;человека), выделив %3мл жидкости♥";
const StatusRecordSwallowRU = "Я проглотила сперму %1 %Plural(%1;раз;раза;раз), и выпила %3мл спермы от %2 %Plural(%2;разного человека;разных людей;разных людей;человека).";
const StatusRecordSwallowSlutRU = "Я глотала сперму всего лишь %1 %Plural(%1;раз;раза;раз), и выпила %3мл спермы от %2 %Plural(%2;разного человека;разных людей;разных людей;человека)♥";
const StatusRecordPussyCreampieRU = "В моё влагалище кончили %1 %Plural(%1;раз;раза;раз), в неё попало %3мл спермы от %2 %Plural(%2;разного человека;разных людей;разных людей;человека).";
const StatusRecordPussyCreampieSlutRU = "В мою киску кончили всего лишь %1 %Plural(%1;раз;раза;раз), в ней побывало %3мл спермы от %2 %Plural(%2;разного человека;разных людей;разных людей;человека)♥";
const StatusRecordAnalCreampieRU = "В мою попу кончили %1 %Plural(%1;раз;раза;раз), в ней побывало %3мл спермы от %2 %Plural(%2;разного человека;разных людей;разных людей;человека).";
const StatusRecordAnalCreampieSlutRU = "В мою попку кончили всего лишь %1 %Plural(%1;раз;раза;раз), в ней побывало %3мл спермы от %2 %Plural(%2;разного человека;разных людей;разных людей;человека)♥";

const StatusRecordFingersSuckedRU = "В моём рту %Plural(%2;был;было;было) %2 %Plural(%2;чужой палец;чужих пальца;чужих пальцев) %1 %Plural(%1;раз;раза;раз).";
const StatusRecordFingersSuckedSlutRU = "Сосала %2 %Plural(%2;пальчик;разных пальчика;разных пальчиков) всего лишь %1 %Plural(%1;раз;раза;раз)♥";
const StatusRecordBukkakeRU = "На меня кончили %1 %Plural(%1;раз;раза;раз), в сумме %3мл спермы от %2 %Plural(%2;разного человека;разных людей;разных людей;человека).";
const StatusRecordBukkakeSlutRU = "Приняла душ из спермы %1 %Plural(%1;раз;раза;раз), в сумме %3мл спермы от %2 %Plural(%2;разного человека;разных людей;разных людей;человека)♥";
const StatusRecordFaceBukkakeRU = "Мне кончили на лицо %1 %Plural(%1;раз;раза;раз), в сумме %3мл спермы от %2 %Plural(%2;разного человека;разных людей;разных людей;человека).";
const StatusRecordFaceBukkakeSlutRU = "Мне кончили на лицо всего лишь %1 %Plural(%1;раз;раза;раз), в сумме %3мл спермы от %2 %Plural(%2;разного человека;разных людей;разных людей;человека)♥";

//StatusBattleEffectはステータスメニューの「状態」に書いてる
const StatusBattleEffectOrgasmRU = "Карин \\C[5]только что кончила\\C[0]! Она сейчас слаба и не может ничего сделать!";
const StatusBattleEffectCoolRU = "Карин \\C[4]спокойна и собрана\\C[0] из-за низких Желаний!\nЕё Точность, Уклонение, Шанс критических ударов, Критическое уклонение и Регенерации немного увеличены.";
const StatusBattleEffectIsHornyZeroRU = "Карин \\C[18]возбуждена\\C[0]! Все её сексуальные Сопротивления понижены.";
const StatusBattleEffectIsHornyOneRU = "Карин \\C[18]возбуждена\\C[0]! Все её сексуальные Сопротивления понижены и все её Желания будут расти с каждым ходом.";
const StatusBattleEffectIsHornyTwoRU = "Карин \\C[18]возбуждена\\C[0]! Все её сексуальные Сопротивления понижены,\nнавыки «Подавления Желаний» стоят больше и все её желания будут расти с каждым ходом.";
const StatusBattleEffectIsHornyThreeRU = "Карин \\C[18]возбуждена\\C[0]! Её Точность, Уклонение и все её сексуальные Сопротивления понижены,\nнавыки «Подавления Желаний» стоят больше и все её желания будут расти с каждым ходом.";
const StatusBattleEffectIsArousedRU = "Карин \\C[27]сильно возбуждена\\C[0]! Её киска будет медленно \\C[23]намокать\\C[0] каждый ход.";
const StatusBattleEffectNotArousedRU = "Карин сейчас недостаточно возбуждена. Она должна возбудиться больше, чтобы её киска намокла.";
const StatusBattleEffectIsWetRU = "Карин \\C[23]мокрая\\C[0]! Теперь в её киску могут вставить.";
const StatusBattleEffectNotWetRU = "Карин сухая. Она не допустит вагинального проникновения";
const StatusBattleEffectIsWearingPantiesRU = "Карин носит трусики. Её одежда должна быть сильно стянута\nчтобы открыть доступ к промежности.";
const StatusBattleEffectIsNotWearingPantiesRU = "Карин \\C[27]без трусиков\\C[0]! Достаточно немного стянуть её одежду\nчтобы её нижняя область стала доступна.";
const StatusBattleEffectIsVirginPublishedRU = "Все узнали что Карин — \\C[27]девственница\\C[0]! Её Шарм во время битв увеличен.";
const StatusBattleEffectIsVirginHighRU = "Все подозревают что Карин — \\C[27]девственница\\C[0]! Её Шарм во время битв увеличен.";
const StatusBattleEffectIsVirginMedRU = "Ходят слухи что Карин — \\C[27]девственница\\C[0]! Её Шарм во время битв немного увеличен.";
const StatusBattleEffectIsVirginLowRU = "На самом деле Карин всё ещё \\C[27]девственница\\C[0] но никто этому не верит! Шарм во время битвы от этого не меняется.";

const StatusBattleEffectIsConfidentZeroRU = "Карин чувствует себя \\C[30]уверенно\\C[0]! Все её характеристики увеличены!";
const StatusBattleEffectIsConfidentOneRU = "Карин чувствует себя \\C[30]уверенно\\C[0]! Все её характеристики увеличены в зависимости от её Дерзости!";

const StatusBattleEffectIsFrustratedRU = "Карин \\C[18]сексуально неудовлетворена\\C[0]! Её Атака повышена, а Защита, Проворность, Точность и Критическое уклонение понижены!";

const StatusBattleEffectDisarmedRU = "Карин \\C[18]безоружна\\C[0]! Ей нужно подобраться ближе к своей алебарде чтобы подобрать её.";
const StatusBattleEffectDefiledHalberdRU = "Алебарда Карин \\C[18]испачкана\\C[0]! Она не может использовать свою алебарду, пока не отдохнёт в своём офисе.";
const StatusBattleEffectOffBalancedRU = "Карин \\C[18]в шатком состоянии\\C[0]! Её Атака, Защита и Уклонение понижены.";
const StatusBattleEffectWeakenRU = "Карин \\C[18]ослаблена\\C[0]! Её Сила и Атака понижены.";
const StatusBattleEffectDizzyRU = "У Карин \\C[18]головокружение\\C[0]! Её Точность и Уклонение понижены.";
const StatusBattleEffectSlowRU = "Карин \\C[18]замедлена\\C[0]! Её Проворность сильно понижена.";
const StatusBattleEffectVulnerableRU = "Карин сейчас \\C[18]уязвима\\C[0]! Её Защита понижена.";
const StatusBattleEffectPoisonRU = "Карин \\C[18]отравлена\\C[0]! Вместо восстановления, её Выносливость понижается с каждым ходом.";
const StatusBattleEffectYetiHeatAuraOneRU = "На Карин действует \\C[18]тепловая аура йети\\C[0]! Её Регенерация Выносливости сильно понижена.";
const StatusBattleEffectYetiHeatAuraTwoRU = "На Карин действует \\C[18]тепловая аура йети\\C[0]! Регенерации Выносливости и Силы Воли сильно понижены.";
const StatusBattleEffectExposeWeaknessRU = "\\C[18]Слабости Карин раскрыты\\C[0]! Уклонение, Критическое уклонение и все её Сопротивления понижены.";
const StatusBattleEffectAttackComboRU = "Карин атаковала \\C[2]%1 %Plural(%1;раз;раза;раз) подряд\\C[0]! Урон, Точность и стоимость её следующей атаки будут увеличены.";
const StatusBattleEffectAttackComboCockyRU = "Атака 4 раза подряд или больше увеличит её \\C[30]Дерзость\\C[0].";
const StatusBattleEffectSexComboOneRU = "Карин использовала свои секс-умения \\C[2]%1 %Plural(%1;раз;раза;раз) подряд\\C[0]! Урон наслаждением и стоимость её следующих секс-навыко (не ласк) увеличены.";
const StatusBattleEffectSexComboTwoRU = "Раз за разом использование одного и того же секс-умения (не ласк) на той же цели сильно увеличит его стоимость и урон.";

const StatusBattleEffectDanceComboRU = "Карин использовала стрип-умения \\C[2]%1 %Plural(%1;раз;раза;раз) подряд\\C[0]! Урон наслаждением и стоимость следующих стрип-умений увеличены.";


const StateTooltipsRemainingTurnsSingularRU = "\\c[27](остался 1 ход)\\c[0]";
const StateTooltipsRemainingTurnsPluralRU = "\\c[27](%Plural(%1;остался;осталось;осталось) %1 %Plural(%1;ход;хода;ходов))\\c[0]";

const StateTooltipsOrgasmRU = "Карин \\C[5]только что кончила\\C[0]!\nОна сейчас слаба и не может ничего сделать!";
const StateTooltipsSlashStanceRU = "%И1 получит больше урона от \\C[4]колющих атак.\\C[0] \nи ими будет легче попасть \nНо также получит меньше урона от \\C[2]дробящих атак.\\C[0] \nи ими будет сложнее попасть";
const StateTooltipsPierceStanceRU = "%И1 получит больше урона от \\C[4]дробящих атак.\\C[0] \nи ими будет легче попасть \nНо также получит меньше урона от \\C[2]рубящих атак.\\C[0] \nи ими будет сложнее попасть";
const StateTooltipsBluntStanceRU = "%И1 получит больше урона от \\C[4]рубящих атак.\\C[0] \nи ими будет легче попасть \nНо также получит меньше урона от \\C[2]колющих атак.\\C[0] \nи ими будет сложнее попасть";
const StateTooltipsHornyZeroRU = "Карин \\C[18]возбуждена\\C[0]!\nВсе её сексуальные Сопротивления понижены.";
const StateTooltipsHornyOneRU = "Карин \\C[18]возбуждена\\C[0]!\nВсе её сексуальные Сопротивления понижены,\nи все её желания будут расти с каждым ходом.";
const StateTooltipsHornyTwoRU = "Карин \\C[18]возбуждена\\C[0]!\nВсе её сексуальные Сопротивления понижены,\nнавыки «Подавления Желаний» стоят больше,\nи все её Желания будут расти с каждым ходом.";
const StateTooltipsHornyThreeRU = "Карин \\C[18]возбуждена\\C[0]!\nЕё Уклонение, Точность и все её сексуальные Сопротивления понижены,\nнавыки «Подавления Желаний» стоят больше,\nи все её Желания будут расти с каждым ходом.";


const StateTooltipsEnemyHornyRU = "%И1 \\C[18]возбуждён\\C[0]!\nШанс действия повышен, Шанс атаки понижен, Сопротивления понижены\nСнижены требования к Шарму, выделит больше спермы.";

const StateTooltipsCoolRU = "Карин \\C[4]спокойна и собрана\\C[0] из-за низких Желаний!\nЕё точность, уклонение, Шанс критических ударов, Критическое уклонение\nи все восстановления немного увеличены.";

const StateTooltipsIsWetRU = "Карин \\C[23]мокрая\\C[0]!\nТеперь в её киску могут вставить.";
const StateTooltipsNotWetRU = "Карин сейчас сухая.\nОна не допустит вагинального проникновения";
const StateTooltipsWearingPantiesRU = "Карин носит трусики.\nЕё одежда должна быть сильно стянута\nчтобы открыть доступ к промежности.";
const StateTooltipsNotWearingPantiesRU = "Карин \\C[27]без трусиков\\C[0]!\nДостаточно немного стянуть её одежду, чтобы открыть доступ к промежности.";
const StateTooltipsVirginPublishedRU = "Все узнали что Карин — \\C[27]девственница\\C[0]!\nЕё Шарм во время битв увеличен.";
const StateTooltipsVirginHighRU = "Все подозревают что Карин — \\C[27]девственница\\C[0]!\nЕё Шарм во время битв увеличен.";
const StateTooltipsVirginMedRU = "Ходят слухи что Карин — \\C[27]девственница\\C[0]!\nЕё Шарм во время битв немного увеличен.";
const StateTooltipsVirginLowRU = "На самом деле Карин всё ещё \\C[27]девственница\\C[0] но никто этому не верит!\nШарм во время битвы от этого не меняется.";
const StateTooltipsConfidentZeroRU = "Карин чувствует себя \\C[30]уверенно\\C[0]!\nВсе её характеристики увеличены!";
const StateTooltipsConfidentOneRU = "Карин чувствует себя \\C[30]уверенно\\C[0]!\nВсе её характеристики увеличены в зависимости от её Дерзости!";
const StateTooltipsFrustratedRU = "Карин \\C[18]сексуально неудовлетворена\\C[0]!\nЕё Атака повышена, а Защита, Проворность,\nТочность и Критическое уклонение понижены!";
const StateTooltipsDisarmedRU = "Карин \\C[18]безоружна\\C[0]!!\nЕй нужно подобраться ближе к своей алебарде чтобы подобрать её.";
const StateTooltipsOffBalancedRU = "%И1 \\C[18]в шатком состоянии\\C[0]!\nАтака, Защита и Уклонение понижены.";
const StateTooltipsWeakenRU = "%И1 \\C[18]слабеет\\C[0]!\nСила и Атака понижены.";
const StateTooltipsDizzyRU = "У %Р1 \\C[18]головокружение\\C[0]!\nТочность и Уклонение понижены.";
const StateTooltipsSlowRU = "%В1 \\C[18]замедлили\\C[0]!\nПроворность сильно понижена.";
const StateTooltipsVulnerableRU = "%И1 сейчас \\C[18]в уязвимом состоянии\\C[0]!\nЗащита понижена.";
const StateTooltipsPoisonRU = "%И1 \\C[18]отравлен\\C[0]!\nВыносливость понижается с каждым ходом.";
const StateTooltipsExposeWeaknessRU = "\\C[18]Слабости Карин раскрыты\\C[0]!\nУклонение, Критическое уклонение\nи все Сопротивления понижены.";
const StateTooltipsStunnedRU = "%И1 \\C[18]оглушена\\C[0]!\nТекущий ход будет пропущен.";
const StateTooltipsEnemyPoseMasterRU = "Текущая сексуальная позиция Карин может сброситься когда %И1 кончит!";
const StateTooltipsActorAttackComboRU = "Карин атаковала \\C[2]%1 %Plural(%1;раз;раза;раз) подряд\\C[0]!\nУрон, Точность и стоимость её следующей атаки будут увеличены.";
const StateTooltipsActorAttackComboCockyRU = "Карин атаковала \\C[2]%1 %Plural(%1;раз;раза;раз) подряд\\C[0]!\nУрон, Точность и стоимость её следующей атаки будут увеличены.\nАтака 4 раза подряд или больше увеличит её \\C[30]Дерзость\\C[0].";
const StateTooltipsActorSexComboRU = "Карин использовала свои секс-умения \\C[2]%1 %Plural(%1;раз;раза;раз) подряд\\C[0]!\nУрон наслаждением и стоимость её следующих секс-умений (не ласк) увеличены.\nРаз за разом использование одного и того же секс-умения (не ласк) на той же цели сильно увеличит его стоимость и урон.";
const StateTooltipsEnemyPosePussySexRU = "%И1 трахает киску Карин!";
const StateTooltipsEnemyPoseCunnilingusRU = "%И1 лижет киску Карин!";
const StateTooltipsEnemyPoseAnalSexRU = "%И1 трахает Карин в задницу!";
const StateTooltipsEnemyPosePaizuriRU = "%И1 трахает грудь Карин!";
const StateTooltipsEnemyPoseHandjobRU = "Карин дрочит член %Д1!";
const StateTooltipsEnemyPoseBlowjobRU = "Карин делает минет %Д1!";
const StateTooltipsEnemyPoseFootjobRU = "Карин стимулирует член %Р1 своими ножками!";
const StateTooltipsEnemyPoseRimjobRU = "Карин лижет задницу %Д1!";
const StateTooltipsEnemyKissedRU = "%И1 получил поцелуй!\nЕго Атака, Точность и Уклонение понижены.";
const StateTooltipsArousedRU = "Карин \\C[27]сильно возбуждена\\C[0]!\nЕё киска будет медленно \\C[23]намокать\\C[0] с каждым ходом.";
const StateTooltipsCautiousStanceRU = "Уклонение и Критическое уклонение Карин сильно увеличены.";
const StateTooltipsDefensiveStanceRU = "Карин защищена от различных негативных эффектов.\nЕё Защита, Сохранность, Сопротивления ласкам\nи раздеванию сильно повышены.";
const StateTooltipsCounterStanceRU = "Шанс контратаки сильно повышен.\nКоличество контратак увеличено.\nСохранность слегка увеличена.";
const StateTooltipsSecretaryStanceRU = "Сопротивления разговорам, взглядам, ласкам\nи сексуальные Сопротивления Карин сильно повышены.\nНаносимый Урон наслаждением увеличен.";
const StateTooltipsLadyStanceRU = "Сопротивления ласкам и к сексу Карин слегка повышены.\nЕё Шарм в битвах увеличен.";
const StateTooltipsPleasureStanceRU = "Карин отдалась наслаждению♥";
const StateTooltipsWillpowerKiOneRU = "Атака Карин повышена.";
const StateTooltipsWillpowerKiTwoRU = "Атака и Критический урон Карин повышены.";
const StateTooltipsWillpowerFocusOneRU = "Шанс контратаки Карин увеличен.";
const StateTooltipsWillpowerFocusTwoRU = "Шанс контратаки и Сохранность Карин увеличены.";
const StateTooltipsWillpowerEyeOfTheMindOneRU = "Точность, Уклонение и Шанс критических ударов Карин увеличены.";
const StateTooltipsWillpowerEyeOfTheMindTwoRU = "Точность, Уклонение, Шанс критических ударов\nи Критический урон Карин увеличены.";
const StateTooltipsWillpowerSeeNoEvilRU = "Сопротивление взглядам Карин увеличено.";
const StateTooltipsWillpowerHearNoEvilRU = "Сопротивление разговорам Карин увеличено.";
const StateTooltipsWillpowerRealityMarbleRU = "Шарм Карин во время битвы увеличен.";
const StateTooltipsWillpowerResistOrgasmRU = "Карин пытается сопротивляться оргазму!\nКоличество Наслаждения, необходимого для оргазма, увеличено.";
const StateTooltipsWillpowerEdgingControlKarrynRU = "Карин попытается контролировать свою следующую цель!\nКоличество Наслаждения необходимого чтобы кончить\nдля её следующей цели увеличено.";
const StateTooltipsWillpowerEdgingControlEnemyRU = "%И1 контролируется Карин!\nКоличество Наслаждения необходимого чтобы кончить увеличено.";
const StateTooltipsBonusPierceDamageRU = "Дополнительный урон от \\C[4]колющей атаки\\C[0].";
const StateTooltipsBonusBluntDamageRU = "Дополнительный урон от \\C[2]дробящей атаки\\C[0].";
const StateTooltipsBonusSlashDamageRU = "Дополнительный урон от \\C[3]рубящей атаки\\C[0].";
const StateTooltipsEjaculationStunnedRU = "%И1 \\C[18]оглушён\\C[0]!\nЕго текущий ход будет пропущен.\nСексуальные Сопротивления повышены.\nУклонение и Крит уклонение понижены.";
const StateTooltipsSlimeRegenNormalRU = "%И1 восстанавливает 20% выносливости за ход.";
const StateTooltipsSlimeRegenFourthRU = "%И1 восстанавливает 5% выносливости за ход.";
const StateTooltipsOrcDefensivePresenceRU = "Защита %Р1 повышена.";
const StateTooltipsOrcCommandingPresenceOneRU = "Атака, защита и уклонение %Р1 повышены.";
const StateTooltipsOrcCommandingPresenceTwoRU = "Защита и уклонение %Р1 повышены.";
const StateTooltipsOrcCommandingPresenceThreeRU = "Атака %Р1 повышена.";
const StateTooltipsOrcCommandingPresenceFourRU = "Урон наслаждением %Р1 повышен.";
const StateTooltipsLizardmanRacialRU = "%И1 с ещё одним людоящером.\nВсе его характеристики повышены.";
const StateTooltipsLizardmanRacialWeakRU = "%И1 с ещё одним людоящером.\nВсе его характеристики слегка повышены.";
const StateTooltipsYetiHeatAuraRU = "Тепловая аура %Р1 вызвала у всех различные негативные эффекты.";
const StateTooltipsYetiHeatAuraEnemyOneRU = "%И1 под влиянием \\C[18]тепловой ауры йети\\C[0]!\nОн наносит меньше урона наслаждением.";
const StateTooltipsYetiHeatAuraEnemyTwoRU = "%И1 под влиянием \\C[18]тепловой ауры йети\\C[0]!\nОн наносит намного меньше урона наслаждением.";
const StateTooltipsYetiHeatAuraKarrynOneRU = "Карин под влиянием \\C[18]тепловой ауры йети\\C[0]!\nРегенерация Выносливости сильно снизилась.";
const StateTooltipsYetiHeatAuraKarrynTwoRU = "Карин под влиянием \\C[18]тепловой ауры йети\\C[0]!\nРегенерации Выносливости и Силы Воли\nсильно снизились.";

const StateTooltipsYasuKiRU = "%И1 повысил урон.";
const StateTooltipsYasuFocusRU = "%И1 может контратаковать.";
const StateTooltipsYasuEyeoftheMindRU = "%И1 повысил свои Точность, Шанс критических ударов и Критический урон.";
const StateTooltipsEnemyDefensiveStanceRU = "%И1 защищён от различных негативных эффектов.\nЕго Защита и Сохранность также повышены.";

const StateTooltipsKarrynClitToyRU = "К клитору Карин прикреплена игрушка!";
const StateTooltipsKarrynPussyToyRU = "В вагину Карин вставили игрушку!";
const StateTooltipsKarrynAnalToyRU = "В анус Карин вставили игрушку!";
const StateTooltipsEnemyClitToyPinkRotorRU = "%И1 имеет при себе виброяйцо!";
const StateTooltipsEnemyPussyToyPenisDildoRU = "У %Р1 есть дилдо!";
const StateTooltipsEnemyAnalToyAnalBeadsRU = "У %Р1 есть анальные шарики!";
const StateTooltipsToiletPinkRotorRU = "Кто-то оставил виброяйцо в кабинке...";
const StateTooltipsToiletPenisDildoRU = "Кто-то оставил дилдо в кабинке...";
const StateTooltipsToiletAnalBeadsRU = "Кто-то оставил анальные шарики в кабинке...";
const StateWaitressNoAlcoholRU = "Карин отказывает всем \\C[2]кто пытается её напоить\\C[0].\n%1 Силы Воли необходимо для отказа.\nРегенерация Силы Воли сильно снизится после отказа.";
const StateWaitressDirtyMugsSingularRU = "У %Р1 грязная кружка.";
const StateWaitressDirtyMugsPluralRU = "У %Р1 %2 %Plural(%2;грязная кружка;грязных кружки;грязных кружек).";
const StateWaitressDirtyGlassesSingularRU = "У %Р1 грязный стакан.";
const StateWaitressDirtyGlassesPluralRU = "У %Р1 %2 %Plural(%2;грязный стакан;грязных стакана;грязных стаканов).";
const StateWaitressAvailableMugsSingularRU = "Осталась только одна чистая кружка.";
const StateWaitressAvailableMugsPluralRU = "В наличии %1 %Plural(%1;чистая кружка;чистых кружки;чистых кружек).";
const StateWaitressAvailableGlassesSingularRU = "Остался только один чистый стакан.";
const StateWaitressAvailableGlassesPluralRU = "В наличии %1 %Plural(%1;чистый стакан;чистых стакана;чистых стаканов).";
const StateWaitressKarrynLocationRU = "Карин у %Р1.";
const StateWaitressTableALocationRU = "Карин у стола A.";
const StateWaitressTableBLocationRU = "Карин у стола B.";
const StateWaitressTableCLocationRU = "Карин у стола C.";
const StateWaitressTableDLocationRU = "Карин у стола D.";
const StateWaitressSleepingRU = "%И1 напился и спит!\nВыгоните его из бара!";
const StateWaitressDrinkingDrinkRU = "%И1 пьёт %В2.";
const StateReceptionistVisitorUnknownBeforeRU = "%И1 ещё не сообщил цель своего визита.";
const StateReceptionistVisitorUnknownAfterRU = "%И1 ждёт ответа Карин.";
const StateReceptionistVisitorWritingBeforeRU = "%И1 держит бумаги, которые нужно заполнить.";
const StateReceptionistVisitorWritingDuringRU = "%И1 заполняет бумаги.";
const StateReceptionistVisitorWritingAfterRU = "%И1 держит уже заполненные бумаги.";
const StateReceptionistVisitorPaperBeforeRU = "%2 %Plural(%2;страницу;страницы;страниц) нужно проверить.";
const StateReceptionistVisitorPaperAfterRU = "%2 %Plural(%2;страницу;страницы;страниц) проверяются.";
const StateReceptionistVisitorTimeRU = "Бумаги %Р1 проверены.\nВыделено %2 %Plural(%2;минута;минуты;минут) на посещение.";
const StateReceptionistVisitorMovingRU = "%И1 в пути.";
const StateReceptionistVisitorSittingRU = "%И1 на своём месте.";
const StateReceptionistVisitorLineRU = "%И1 ждёт в очереди.";
const StateReceptionistVisitorDeskRU = "%И1 стоит перед стойкой.";

const StateStripperActorDanceComboRU = "Карин использовала свои навыки стриптиза \\C[2]%1 %Plural(%1;раз;раза;раз)\\C[0]!\nУрон наслаждением и стоимость следующего навыка стриптиза повышены.";

const DesireTooltipsMouthIntroRU = "Желание рта Карин представляет из себя желание\nбрать в рот различные мужские части тела\nи пробовать их жидкости.";
const DesireTooltipsBoobsIntroRU = "Желание груди Карин представляет из себя желание\nчтобы её идеальную грудь лапали,\nсоски сильно сжимали,\nи иметь что-то твёрдое между сиськами.";
const DesireTooltipsPussyIntroRU = "Желание киски Карин представляет из себя желание\nчтобы с её клитором играли и\nчтобы большие, толстые объекты\nпроникали в её киску.";
const DesireTooltipsButtIntroRU = "Желание попки Карин представляет из себя желание\nчтобы её попку трогали другие\nи вставляли в неё разные предметы.";
const DesireTooltipsCockIntroRU = "Желание члена Карин представляет из себя желание\nпознавать члены через\nчерез взгляд, слух,\nзапах, вкус и осязание.";

const DesireTooltipsBodyDesireRequirementsUnknownRU = "\\I[40] 50    \\I[41]   Лёгкие ласки\n\\I[40] 75    \\I[41]   Продвинутые ласки\n\\I[40]100   \\I[41]   Секс\n(стандартные требования)";
const DesireTooltipsCockDesireRequirementsUnknownRU = "\\I[40] 50    \\I[41]   Работа ручками\n\\I[40] 65    \\I[41]   Обслуживание\n\\I[40] 85    \\I[41]   Пенетрация\n(стандартные требования)";
const DesireTooltipsDesireRequirementsKnownRU = "Требования Желаний";
const DesireTooltipsDesireRequirementsKnownFormatRU = "";


const DesireTooltipsMouthDesireDebuffOneRU = "\\I[56]\\C[2]Точность Карин начнёт падать\n\\C[0]начиная с 50 Желания рта и выше \nтак как она неосознанно открывает свой рот шире\nи заранее выкрикивает свои атаки.";
const DesireTooltipsMouthDesireDebuffTwoRU = "\\I[56]\\C[2]Критический урон Карин начнёт падать\n\\C[0]начиная со 100 Желания рта и выше \nтак как она будет тратить время на облизывание своих губ \nчтобы подавить свои порывы облизать что-то другое.";

const DesireTooltipsBoobsDesireDebuffOneRU = "\\I[56]\\C[2]Уклонение Карин начнёт падать\n\\C[0]начиная с 50 Желания груди \nтак как она будет отвлекаться из-за своих сосков\nжелающих любви и внимания.";
const DesireTooltipsBoobsDesireDebuffTwoRU = "\\I[56]\\C[2]Шанс критических ударов Карин начнёт падать\n\\C[0]начиная со 100 Желания груди \nиз-за давления в её груди, которое заставит её чувствовать\nбудто её грудь пытается вырваться наружу.";

const DesireTooltipsPussyDesireDebuffOneRU = "\\I[56]\\C[2]Сопротивление раздеванию Карин начнёт падать\n\\C[0]начиная с 50 Желания киски \nиз-за желания освободить свою вагину от её пульсирующей жары.";
const DesireTooltipsPussyDesireDebuffTwoRU = "\\I[56]\\C[2]Крит уклонение Карин начнёт падать\n\\C[0]начиная со 100 желания киски \nиз-за необъяснимых спазмов вокруг её вагины, отвлекающие её. ";

const DesireTooltipsButtDesireDebuffOneRU = "\\I[56]\\C[2]Защита Карин начинает понижаться\n\\C[0]начиная с 50 Желания попки \nиз-за того что она нарушает свою боевую стойку, демонстрируя свою попку.";
const DesireTooltipsButtDesireDebuffTwoRU = "\\I[56]\\C[2]Сопротивление Ласкам Карин начинает понижаться\n\\C[0]начиная со 100 Желания попки \nиз-за ожидания того, кто сможет хорошенько её отшлёпать по заднице.";

const DesireTooltipsCockDesireDebuffOneRU = "\\I[56]\\C[2]Атака Карин начнёт понижаться\n\\C[0]начиная с 50 Желания члена \nтак как она неосознанно сдерживает свои силы\nчтобы случайно не попасть по их промежности.";
const DesireTooltipsCockDesireDebuffTwoRU = "\\I[56]\\C[2]Сопротивление сексу Карин начнёт понижаться\n\\C[0]начиная со 100 Желания члена \nиз-за мыслей в её голове, которые говорят ей подчиниться членам.";

const DesireTooltipsMouthDesireTopBuffRU = "\\I[56]Когда Желание рта Карин выше остальных,\n\\C[11]Защита её врагов понижается\n\\C[0]из-за её соблазнительно манящего ротика\nи развратных движений языка.";
const DesireTooltipsBoobsDesireTopBuffRU = "\\I[56]Когда Желание груди Карин выше остальных,\n\\C[11]Уклонение её врагов понижается\n\\C[0]потому что они не могут отвести свои глаза от её груди\nкоторую она подчёркивает каждым своим движением.";
const DesireTooltipsPussyDesireTopBuffRU = "\\I[56]Когда Желание киски Карин выше остальных,\n\\C[11]у её врагов повышается шанс \nвозбудиться с каждым ходом \\C[0]потому что её феромоны\nвытекают из её киски.";
const DesireTooltipsButtDesireTopBuffRU = "\\I[56]Когда Желание попки Карин выше остальных,\n\\C[11]Точность её врагов понижается\n\\C[0]потому что они преследуют взглядами \nеё качающиеся пышные бёдра.";
const DesireTooltipsCockDesireTopBuffRU = "\\I[56]Когда Желание члена Карин выше остальных,\n\\C[27]её Желание члена будет расти быстрее\n\\C[0]потому что она не может перестать думать о членах.";

const VirginityTextRU = "Секс-статус";
const VirginityYesRU = "\\C[13]Девственница\\C[0]";
const VirginityNoRU = "\\C[27]Не девственница\\C[0]";
const VirginActorTextRU = "Первый раз с:"; //currently unused
const VirginActorNoneRU = "---------"; //currently unused

const ResistNameRU = "";
const SafeModeRU = "Безопасный режим"; //currently unused
const ReplayModeRU = "Режим повтора"; //currently unused
const PixelMovementRU = "Пиксельное движение"; //currently unused
const BattleLogRU = "История";
const BattleStatusRU = "Статус";
const EdictsRU = "Указы";
const EdictCostRU = "Стоимость указа";
const QuestLogRU = "Радио"; //currently unused
const GlossaryRU = "Заметки"; //currently unused
const PassiveObtainedOnRU = "Получена на %1 день";
const StaminaRecoveryRU = "\\C[11]Выносливость %Р1 восстановилась на %2!";
const EnergyRecoveryRU = "\\C[4]Энергия %Р1 восстановилась на %2!";

const KarrynTauntMessageRU = "Карин начинает провоцировать!";
const KarrynFlauntMessageRU = "Карин начинает соблазнять!";

const AronCallLizardmanFailRU = "Однако, никто не пришёл...!";

const ActorGainPleasureRU = "\\C[27]Наслаждение %Р1 увеличилось на %2!";
const ActorGainPleasure_SightRU = "\\C[27]Наслаждение %Р1 увеличилось на %2 из-за того, что на неё пялятся!";
const ActorGainPleasure_ToyRU = "\\C[27]От игрушек, Наслаждение %Р1 увеличилось на %2!";

const PleasurePercentTextRU = "％";

const EnemyGainPleasure_Percent_RU = "\\C[1]%И1 на %2 ближе к оргазму!";
const EnemyGainPleasure_Value_RU = "\\C[1]Наслаждение %Р1 увеличилось на %2!";
const ActorSingleOrgasmRU = "\\C[31]%И1 теряет %2 ед. энергии!";
const ActorMultipleOrgasmRU = "\\C[1]%И1 кончила %3 %Plural(%3;раз;раза;раз) подряд! \\C[31]%И1 теряет %2 ед. энергии!";

const EjaculatePussyRU = "\\C[27]%И1 залил в матку %Р2 \\C[1]%3мл спермы!";
const EjaculateAnalRU = "\\C[27]%И1 заполнил попку %Р2 \\C[1]%3мл спермы!";
const EjaculateMouthRU = "\\C[27]%И1 спустил в горло %Р2 \\C[1]%3мл спермы!";

const BukkakeFaceRU = "\\C[27]%И1 покрыл лицо %Р2 \\C[1]%3мл спермы!";
const BukkakeBoobsRU = "\\C[27]%И1 спустил на грудь %Р2 \\C[1]%3мл спермы!";
const BukkakeArmsRU = "\\C[27]%И1 испачкал руки %Р2 в \\C[1]%3мл спермы!";
const BukkakeLegsRU = "\\C[27]%И1 вылил на ноги %Р2 \\C[1]%3мл спермы!";
const BukkakeButtRU = "\\C[27]%И1 кончил на попку %Р2 \\C[1]%3мл спермы!";

const ActorFirstKissMouthRU = "\\C[18]Это был первый поцелуй Карин!!!";
const ActorFirstKissCockRU = "\\C[18]О нет! Первый поцелуй Карин был с чьим-то членом!!!";
const ActorFirstKissAnusRU = "\\C[18]О нет! Первый поцелуй Карин был с чьим-то анусом!!!";
const ActorLostPussyVirginityRU = "\\C[18]Девственная плева Карин порвана!!!!";
const ActorLostAnalVirginityRU = "\\C[18]Карин потеряла анальную девственность!!";

const InvasionNoiseLevelOneRU = "\\C[8]Снаружи слышен слабый шум.";
const InvasionNoiseLevelTwoRU = "\\C[7]Тихие шаги слышны за дверью.";
const InvasionNoiseLevelThreeRU = "\\C[2]Невнятные разговоры слышны за дверью.";
const InvasionNoiseLevelFourRU = "\\C[10]Кто-то кричит снаружи.";
const InvasionBattleStartRU = "Группа людей ворвалась в комнату!";

const MasturbateBattleTouchClitRU = "Карин начинает стимулировать свой клитор!";
const MasturbateBattleTouchPussyRU = "Карин начинает гладить свои половые губы!";
const MasturbateBattleTouchAnalRU = "Карин начинает трогать свой анус!";
const MasturbateBattleTouchBoobsRU = "Карин начинает сжимать мять грудь!";
const MasturbateBattleTouchNipplesRU = "Карин начинает сжимать свои соски!";

const MasturbateBattleFingerPussyRU = "Карин засовывает пальцы в свою киску!";
const MasturbateBattleFingerAnalRU = "Карин засовывает пальцы в свой анус!";

const MasturbateBattleToyClitPinkRotorRU = "Karryn starts playing with the pink rotor!";
const MasturbateBattleToyPussyPenisRU = "Karryn starts playing with the penis dildo!";
const MasturbateBattleToyAnalBeadsRU = "Karryn starts playing with the anal beads!";

const MasturbateBattleSuckFingersRU = "Карин начинает сосать свои пальцы!";
const MasturbateBattleSuckNipplesRU = "Карин начинает сосать собственные соски!";

const SkillDescriptionNoValidTargetsRU = "Нет подходящей цели.";
const SkillDescriptionNotEnoughDesireRU = "Недостаточно желания.";
const SkillDescriptionCantDoThisRU = "Нельзя использовать сейчас.";
const SkillDescriptionHandsBusyRU = "Необходима свободная рука для этого.";
const SkillDescriptionNotWetRU = "Недостаточно мокрая.";

const TitleDescriptionFirstTimeTitleEquipRU = "\\C[29] (экипировать один раз)";

const CharmEquipReqTextRU = "Требования к Шарму: ";
const GrowthRateTextRU = "";

const RemResultsVictoryRU = "Битва выиграна!";
const RemResultsDefeatRU = "Битва проиграна...";
const RemResultsAbortedRU = "Битва прервана.";
const RemResultsMasturbateBattleNoneRU = "Карин устала...";
const RemResultsMasturbateBattleSingleRU = "Карин кончила!";
const RemResultsMasturbateBattlePluralRU = "Карин кончила %1 %Plural(%1;раз;раза;раз)!";
const RemResultsJobBattleEndRU = "Смена Карин подошла к концу.";
const RemResultsBitchEndBattleEndRU = "HAPPY END";
const RemResultsEndlessBattleNormalRU = "Результат бесконечной тюремной битвы: %1 %Plural(%1;волна;волны;волн)";
const RemResultsEndlessBattleHellRU = "Результат бесконечной адской битвы: %1 %Plural(%1;волна;волны;волн)";
const RemResultsGainedExpRU = "Опыта получено";
const RemResultsLevelUpRU = "Новый Уровень!";
const RemResultsOrderIncreaseRU = "\\I[408]\\C[11]Порядок восстановлен на %1!";
const RemResultsOrderDecreaseRU = "\\I[409]\\C[10]Порядок снизился на %1...";
const RemResultsFundingIncreaseRU = "\\I[400]\\C[11]Получено %1 %Plural(%1;золотая;золотые;золотых)!";
const RemResultsFundingDecreaseRU = "\\I[401]\\C[10]Потеряно %1 %Plural(%1;золотая;золотые;золотых)...";
const RemResultsFatigueIncreaseRU = "\\I[389]\\C[10]Усталость возросла на %1%...";
const RemResultsFatigueDecreaseRU = "\\I[388]\\C[11]Усталость снизилась на %1%!";
const RemResultsItemDropRU = "\\I[96]\\C[11]Получен новый Аксуссуар %1!";

const CockinessIncreasedTextRU = "\\I[354]\\C[11]Дерзость усилилась на %1%!";
const CockinessDecreasedTextRU = "\\I[489]\\C[10]Дерзость ослабла на %1%...";
const CockinessResetRU = "\\I[489]\\C[10]Дерзость сброшена до нуля...";
const CockinessMaxxedOutRU = "\\I[354]\\C[11]Дерзость 100%!";

const RemResultsSubduedWithAttackRU = "\\I[74]\\C[11]Подчинила %1 %Plural(%1;человека;человек;человек) физически!";
const RemResultsSubduedSexuallyRU = "\\I[43]\\C[27]Подчинила %1 %Plural(%1;человека;человек;человек) сексуально!";
const RemResultsSubduedWithAttackAndSexuallyRU = "\\I[291]\\C[11]Подчинила %1 %Plural(%1;человека;человек;человек) физически и \\C[27]%3 %Plural(%3;человека;человека;человек) сексуально\\C[11]!";
const RemResultsKarrynOrgasmSingularRU = "\\I[99]\\C[27]Кончила 1 раз!";
const RemResultsKarrynOrgasmPluralRU = "\\I[99]\\C[27]Кончила %1 %Plural(%1;раз;раза;раз)!";
const RemResultsKarrynMasturbatedInBattleSingularRU = "\\I[46]\\C[27]Мастурбировала во время боя 1 раз!";
const RemResultsKarrynMasturbatedInBattlePluralRU = "\\I[46]\\C[27]Мастурбировала во время боя %1 %Plural(%1;раз;раза;раз)!";
const RemResultsKarrynKissRU = "\\I[288]\\C[27]Поцеловала %1 %Plural(%1;человека;человек;человек)!";
const RemResultsKarrynHandjobRU = "\\I[289]\\C[27]Подрочила %1 %Plural(%1;человеку;человекам;человекам)!";
const RemResultsKarrynBlowjobRU = "\\I[294]\\C[27]Отсосала у %1 %Plural(%1;человека;человек;человек)!";
const RemResultsKarrynTitjobRU = "\\I[221]\\C[27]Трахнула грудью %1 %Plural(%1;человека;человек;человек)!";
const RemResultsKarrynFootjobRU = "\\I[219]\\C[27]Подрочила ножками %1 %Plural(%1;человеку;человекам;человекам)!";
const RemResultsKarrynRimjobRU = "\\I[299]\\C[27]Лизала задницу %1 %Plural(%1;человеку;человекам;человекам)!";
const RemResultsKarrynVaginalSexRU = "\\I[295]\\C[27]Занималась сексом с %1 %Plural(%1;человеком;человеками;человеками)!";
const RemResultsKarrynAnalSexRU = "\\I[296]\\C[27]Занималась анальным сексом с %1 %Plural(%1;человеком;человеками;человеками)!";


const RemParamLevelGainedSingularRU = "\\C[16]%3Получен %1 уровень %Р2!";
const RemParamLevelGainedPluralRU = "\\C[16]%3%Plural(%1;Получен;Получено;Получены) %1 %Plural(%1;уровень;уровня;уровней) %Р2!!";

const RemWardenLevelRequireSingularRU = "\\C[8]\\I[25]%Plural(%1;Остался;Осталось;Осталось) ещё %1 %Plural(%1;уровень;уровня;уровней) характеристик до следующего Уровня Надзирателя!";
const RemWardenLevelRequirePluralRU = "\\C[8]\\I[25]%Plural(%1;Остался;Осталось;Осталось) ещё %1 %Plural(%1;уровень;уровня;уровней) характеристик до следующего Уровня Надзирателя!";
const RemWardenLevelUpRU = "\\RLI[50]\\C[11]LEVEL UP!!! \\C[16]%1 достигла Уровня Надзирателя %2!!";
const RemWardenLevelLimitReachedRU = "\\RLI[51]\\C[8]%1 достигла лимита Уровня Надзирателя и больше не повышает характеристики";

const RemResultsPassivesTitleRU = "Новая пассивка разблокирована!!";
const RemResultsTooManyPassivesUnlockedRU = "\\C[8]\\I[25]И ещё %1 других пассивок!";

const RemDailyReportDayCountRU = "\\#\\{\\{День %1: Ежедневный отчёт\\}\\}";
const RemDailyReportAnarchyNoLimitRU = "\\I[377]День %2, как на Уровне %1 \\C[7]Анархия\\C[0].";
const RemDailyReportAnarchyLimitBefore_singularRU = "\\I[377]День %2, как на Уровне %1 \\C[7]Анархия\\C[0]. Со следующего дня Контроль будет теряться быстрее из-за беспорядков!";
const RemDailyReportAnarchyLimitBefore_pluralRU = "\\I[377]День %2, как на Уровне %1 \\C[7]Анархия\\C[0]. Дней до беспорядков: %3. При беспорядках, Контроль будет теряться быстрее!";
const RemDailyReportAnarchyPastLimitRU = "\\I[377]День %2, как на Уровне %1 Анархия. Контроль теряется быстрее на \\C[18]%3\\C[0] из-за беспорядков!";
const RemDailyReportRiot_NewRU = "\\I[407]Уровень %1 начал \\C[18]БУНТ\\C[0]!! Контроль снижается на \\C[18]%2\\C[0]!";
const RemDailyReportRiot_OldRU = "\\I[407]Уровень %1 \\C[18]БУНТУЕТ\\C[0] уже %2 дня! Контроль снижается на \\C[18]%3\\C[0]!";
const RemDailyReportOrderChange_PositiveRU = "\\I[408]Порядок поднялся до %1.";
const RemDailyReportOrderChange_NegativeRU = "\\I[409]Порядок упал до %1.";
const RemDailyReportOrderChange_NeutralRU = "\\I[408]Порядок не изменился.";
const RemDailyReportFundingChange_PositiveRU = "\\I[410]Изменение средств до \\C[11]$%1\\C[0].";
const RemDailyReportFundingChange_NegativeRU = "\\I[411]Изменение средств до \\C[2]$%1\\C[0].";
const RemDailyReportBankruptcyRU = "\\I[411]Тюрьма \\C[2]ОБАНКРОЧЕНА\\C[0]!!! Контроль снижается ещё на \\C[18]%1\\C[0]!";
const RemDailyReportEdictPoints_SingularRU = "\\I[364]%1 Очко Указов доступно сегодня.";
const RemDailyReportEdictPoints_PluralRU = "\\I[364]%1 %Plural(%1;Очко;Очка;Очков) Указов %Plural(%1;доступно;доступны;доступны) сегодня.";
const RemDailyReportBarRep_AlmostDecayRU = "\\I[188]Репутация бара скоро \\C[8]снизится\\C[0]. Поработайте официанткой сегодня чтобы предотвратить это.";
const RemDailyReportBarRep_DecayedRU = "\\I[188]\\C[8]Репутация бара снизилась на 1.\\C[0]";
const RemDailyReportVisitorRep_AlmostDecayRU = "\\I[159]Репутация центра посещений скоро \\C[8]снизится\\C[0]. Поработайте сегодня секретаршей чтобы предотвратить это.";
const RemDailyReportVisitorRep_DecayedRU = "\\I[159]\\C[8]Репутация центра посещений снизилась на 1.\\C[0]";
const RemDailyReportToiletRep_AlmostDecayRU = "\\I[234]Репутация туалета скоро \\C[8]снизится\\C[0]. Посетите туалет сегодня чтобы предотвратить это.";
const RemDailyReportToiletRep_DecayedRU = "\\I[234]\\C[8]Репутация туалета снизилась на 1.\\C[0]";
const RemDailyReportStripClubRep_AlmostDecayRU = "\\I[21]Репутация стриптиз-клуба скоро \\C[8]снизится\\C[0]. Поработайте стриптизершей сегодня чтобы предотвратить это.";
const RemDailyReportStripClubRep_DecayedRU = "\\I[21]\\C[8]Репутация стриптиз-клуба снизилась на 1.\\C[0]";
const RemDailyReportGymRep_AlmostDecayRU = "\\I[159]Репутация спортзала скоро \\C[8]снизится\\C[0]. Поработайте тренером сегодня чтобы предотвратить это.";
const RemDailyReportGymRep_DecayedRU = "\\I[159]\\C[8]Репутация спортзала снизилась на 1.\\C[0]";

const RemParamGainedStrengthRU = "Сила увеличена на %1!"; //unused
const RemParamGainedStaminaRU = "Выносливость увеличена на %1!"; //unused
const RemParamGainedEnergyRU = "Энергия увеличена на %1!"; //unused
const RemParamGainedDexterityRU = "Ловкость увеличена на %1!";
const RemParamGainedAgilityRU = "Проворность увеличена на %1!"; //unused
const RemParamGainedEnduranceRU = "Стойкость увеличена на %1!"; //unused
const RemParamGainedMindRU = "Разум увеличен на %1!"; //unused
const RemParamGainedCharmRU = "Шарм увеличен на %1!"; //unused

const RemExpEnemiesDefeatedRU = "Enemies Defeated EXP"; //currently unused
const RemExpHalberdCombatRU = "Halberd Combat EXP"; //currently unused
const RemExpUnarmedCombatRU = "Unarmed Combat EXP"; //currently unused
const RemExpEvasionCombatRU = "Evasion EXP"; //currently unused
const RemExpWillpowerCombatRU = "Willpower EXP"; //currently unused
const RemExpEnduranceCombatRU = "Endurance EXP"; //currently unused
const RemExpTalkSensitivityRU = "Talk Sensitivity EXP"; //currently unused
const RemExpSightSensitivityRU = "Sight Sensitivity EXP"; //currently unused
const RemExpFingerSensitivityRU = "Finger Sensitivity EXP"; //currently unused
const RemExpMouthSensitivityRU = "Mouth Sensitivity EXP"; //currently unused
const RemExpBoobsSensitivityRU = "Boobs Sensitivity EXP"; //currently unused
const RemExpPussySensitivityRU = "Pussy Sensitivity EXP"; //currently unused
const RemExpButtSensitivityRU = "Butt Sensitivity EXP"; //currently unused
const RemExpCreampieSensitivityRU = "Creampie Recipient EXP"; //currently unused
const RemExpBukkakeSensitivityRU = "Bukkake EXP"; //currently unused
const RemExpSwallowSensitivityRU = "Swallowing EXP"; //currently unused
const RemExpKissSkillRU = "Kissing EXP"; //currently unused
const RemExpPettingSkillRU = "Petting EXP"; //currently unused
const RemExpHandjobSkillRU = "Handjob EXP"; //currently unused
const RemExpBlowjobSkillRU = "Blowjob EXP"; //currently unused
const RemExpTittyFuckSkillRU = "Titjob EXP"; //currently unused
const RemExpPussySexSkillRU = "Vaginal Sex EXP"; //currently unused
const RemExpAnalSexSkillRU = "Anal Sex EXP"; //currently unused
const RemExpMasturbateSkillRU = "Masturbation EXP"; //currently unused
const RemExpOrgasmSpecialRU = "Orgasm EXP"; //currently unused
const RemExpStrippedSpecialRU = "Stripped EXP"; //currently unused
const RemExpDoublePenetrationSpecialRU = "Double Penetration EXP"; //currently unused
const RemExpTriplePenetrationSpecialRU = "Triple Penetration EXP"; //currently unused


const RemYanflyBattleCoreUserRU = "Пользователь";
const RemYanflyBattleCoreAllyRU = "Союзник";
const RemYanflyBattleCoreAlliesRU = "Союзники";
const RemYanflyBattleCoreEnemyRU = "Враг";
const RemYanflyBattleCoreEnemiesRU = "Враги";
const RemYanflyBattleCoreAllTargetsRU = "ВСЕ %1";
const RemYanflyBattleCoreRandomTargetsRU = "%2 случайных %1";

const RemYanflyRemoveRU = "Снять";
const RemYanflyEmptyRU = "<Пусто>";

//Options Main
const RemYanflyOptions_All_RU = "\\}\\I[272]Все";
const RemYanflyOptions_All_Help_RU = "Список всех настроек игры.";
const RemYanflyOptions_General_RU = "\\}\\I[273]Общие";
const RemYanflyOptions_General_Help_RU = "Общие настройки влияют на поведение игры.";
const RemYanflyOptions_Audio_RU = "\\}\\I[274]Звук";
const RemYanflyOptions_Audio_Help_RU = "Регулировка звука в игре.";
const RemYanflyOptions_Visual_RU = "\\}\\I[276]Видео";
const RemYanflyOptions_Visual_Help_RU = "Регулировка визуальных свойств игры.";
const RemYanflyOptions_Controls_RU = "\\}\\I[280]Управление";
const RemYanflyOptions_Controls_Help_RU = "Тут можно переназначить активные кнопки.\nНажмите на кнопку на вашем геймпаде, чтобы открыть меню настроек геймпада.";
const RemYanflyOptions_Cheats_RU = "\\}\\I[250]Читы";
const RemYanflyOptions_Cheats_Help_RU = "Читы активируются только в Режиме Секретарши.\nИспользуйте их, если вы предпочитаете играть в Режиме Секретарши\nно хотите немного усложнить игру.";
const RemYanflyOptions_Exit_RU = "\\}\\I[254]Выход";
const RemYanflyOptions_Exit_Help_RU = "Выход в Главное Меню.";

const RemYanflyOptions_Hair_RU = "\\I[586]Косметика";
const RemYanflyOptions_Hair_Help_RU = "Изменить внешность Карин.\nТребуется дополнение «Stray Pubes».";

const RemYanflyOptions_Lovense_RU = "\\I[587]Lovense";
const RemYanflyOptions_Lovense_Help_RU = "Настройки интеграции секс-игрушек Lovense.\nПожалуйста, соблюдайте технику безопасности и гигиену при использовании!\nНажмите кнопку Alt для вынужденной остановки секс-игрушки.";


//Options General
const RemYanflyOptions_Language_RU = "\\i[275]Язык (Language)";
const RemYanflyOptions_Language_Help_RU = "Тут можете изменить язык текста.";
const RemYanflyOptions_VoiceLanguage_RU = "\\i[275]Язык озвучки";
const RemYanflyOptions_VoiceLanguage_Help_RU = "Тут можно изменить язык озвучки.";
const RemYanflyOptions_AlwaysDash_RU = "\\i[273]Постоянный бег";
const RemYanflyOptions_AlwaysDash_Help_RU = "Включив эту опцию, Карин будет постоянно бегать, а на SHIFT — ходить.\nЕсли выключить — наоборот.";
const RemYanflyOptions_MessageSpeed_RU = "\\i[273]Скорость Текста";
const RemYanflyOptions_MessageSpeed_Help_RU = "Скорость появления текста во время разговоров.";
const RemYanflyOptions_MessageSpeed_NoWait_RU = "Сразу";
const RemYanflyOptions_CommandRemember_RU = "\\i[273]Запоминать Команды";
const RemYanflyOptions_CommandRemember_Help_RU = "\\}Игра будет запоминать последние использованные способности в Ментальной и Активной фазах.";

const RemYanflyOptions_Battlelog_Duration_RU = "\\i[273]Продолжительность текста в бою";
const RemYanflyOptions_Battlelog_Duration_Help_RU = "Как долго текст будет оставаться на экране во время боя.";
const RemYanflyOptions_Battlelog_Duration_Zero_RU = "Очень коротко";
const RemYanflyOptions_Battlelog_Duration_One_RU = "Коротко";
const RemYanflyOptions_Battlelog_Duration_Two_RU = "Стандартно";
const RemYanflyOptions_Battlelog_Duration_Three_RU = "Долго";
const RemYanflyOptions_Battlelog_Duration_Four_RU = "Очень долго";

const RemYanflyOptions_Battlelog_Fontsize_RU = "\\i[273]Размер текста в бою";
const RemYanflyOptions_Battlelog_Fontsize_Help_RU = "Изменяет размер текста во время боя.";
const RemYanflyOptions_Battlelog_Fontsize_Zero_RU = "Очень мелкий";
const RemYanflyOptions_Battlelog_Fontsize_One_RU = "Мелкий";
const RemYanflyOptions_Battlelog_Fontsize_Two_RU = "Стандартный";
const RemYanflyOptions_Battlelog_Fontsize_Three_RU = "Средний";
const RemYanflyOptions_Battlelog_Fontsize_Four_RU = "Большой";

const RemYanflyOptions_MaleDialogueAppear_RU = "\\i[273]Вражеские диалоги в бою";
const RemYanflyOptions_MaleDialogueAppear_Help_RU = "Как часто враги будут комментировать какие-либо их сексуальные действия.\n\\}Есть некоторые исключения, когда враги будут говорить независимо от этой настройки.";
const RemYanflyOptions_MaleDialogueAppear_Zero_RU = "Молчать";
const RemYanflyOptions_MaleDialogueAppear_One_RU = "Редко";
const RemYanflyOptions_MaleDialogueAppear_Two_RU = "Иногда";
const RemYanflyOptions_MaleDialogueAppear_Three_RU = "Часто (по умолчанию)";
const RemYanflyOptions_MaleDialogueAppear_Four_RU = "Очень часто";

const RemYanflyOptions_KarrynLinesPrompt_RU = "\\i[273]Пауза на репликах Карин";
const RemYanflyOptions_KarrynLinesPrompt_Help_RU = "\\}Битва приостанавливается после реплики Карин, пока не будет нажата кнопка подтверждения.\nПри выключенной опции, этой паузы не будет почти для всех её реплик.";
const RemYanflyOptions_Disable_Rimjobs_RU = "\\i[273]Отключить сцены с лизанием ануса";
const RemYanflyOptions_Disable_Rimjobs_Help_RU = "Такого рода контент не будет появляться во время игры.\n\\}Обратите внимание, что игра задумывалась с такими сценками, их отключение повлияет на геймплей.\nВключайте эту опцию только в том случае, если вы не захотите играть в игру с таким контентом.";
const RemYanflyOptions_Disable_Footjobs_RU = "\\i[273]Отключить работу ножками";
const RemYanflyOptions_Disable_Footjobs_Help_RU = "Предотвращает появление контента с мастурбацией ногами, если опция включена.\nОбратите внимание, что весь контент игры разработан с учётом наличия мастурбации ногами.\nВключайте эту опцию только в том случае, если вы не захотите играть в игру с таким контентом.";
const RemYanflyOptions_Disable_Smegma_RU = "\\i[273]Отключить смегму";
const RemYanflyOptions_Disable_Smegma_Help_RU = "Отключает все упоминания и описание смегмы в боевых диалогах.\nНе влияет на геймплей, но снизит вариативность диалогов.\n\\}Включайте эту опцию только в том случае, если вы не захотите играть в игру с таким контентом.";
const RemYanflyOptions_Disable_FeraMouth_RU = "\\i[273]Отключить сверхразвратные минеты";
const RemYanflyOptions_Disable_FeraMouth_Help_RU = "Предотвращает появление сверхразвратного рта во время минета.\nУчтите, хоть это и не влияет на геймплей, но уменьшит вариации выражения лица во время минета.\nВключайте эту опцию только в том случае, если вы не захотите играть в игру с таким контентом.";

const RemYanflyOptions_DisplayPleasureAsPercent_RU = "\\i[273]Отображать Наслаждение в процентах";
const RemYanflyOptions_DisplayPleasureAsPercent_Help_RU = "Если эта опция включена, Наслаждение будет отображаться в процентах \nот необходимого количества для достижения оргазма.\nЕсли выключена — наслаждение будет отображаться числами.";

const RemYanflyOptions_ShorterDefeatBattles_RU = "\\i[273]Пропустить битвы поражений";
const RemYanflyOptions_ShorterDefeatBattles_Help_RU = "\\}\\}Обычно битвы поражений (те, когда Карин победили) заканчиваются когда все враги удовлетворятся.\n\\{Включение опции позволит таким битвам заканчиваться сразу как только Карин устанет.\nРежим Заключённой игнорирует эту опцию, для него опция всегда выключена.";

//Options Audio
const RemYanflyOptions_MasterVolume_RU = "\\i[274]Общая громкость";
const RemYanflyOptions_MasterVolume_Help_RU = "Изменяет громкость всего в игре.";
const RemYanflyOptions_BGMVolume_RU = "\\i[274]Громкость музыки";
const RemYanflyOptions_BGMVolume_Help_RU = "Изменяет громкость музыки в игре.";
const RemYanflyOptions_BGSVolume_RU = "\\i[274]Громкость фоновых эффектов";
const RemYanflyOptions_BGSVolume_Help_RU = "Изменение громкости эффектов на заднем плане.";
const RemYanflyOptions_MEVolume_RU = "\\i[274]Громкость мелодий";
const RemYanflyOptions_MEVolume_Help_RU = "Изменение громкости мелодий в игре, таких как фанфары.";
const RemYanflyOptions_SEVolume_RU = "\\i[274]Громкость звуков";
const RemYanflyOptions_SEVolume_Help_RU = "Громкость звуковых эффектов.";
const RemYanflyOptions_VoiceVolume_RU = "\\i[274]Громкость голоса";
const RemYanflyOptions_VoiceVolume_Help_RU = "Громкость голоса Карин (во время диалогов).";
const RemYanflyOptions_MoansVolume_RU = "\\i[274]Громкость стонов";
const RemYanflyOptions_MoansVolume_Help_RU = "Насколько громко Карин стонет.";
const RemYanflyOptions_MaleVolume_RU = "\\i[274]Звуки мужчин";
const RemYanflyOptions_MaleVolume_Help_RU = "Регулирует громкость мужских звуков вроде хрюканья и смеха.";
const RemYanflyOptions_KeepVoicePlayback_RU = "\\i[274]Продолжать проигрывание голоса";
const RemYanflyOptions_KeepVoicePlayback_Help_RU = "Озвучка фразы не будет прекращаться при нажатии на клавишу подтверждения.";
const RemYanflyOptions_AutoContinueAfterVoice_RU = "\\i[274]Автоматическое продолжение после озвучки";
const RemYanflyOptions_AutoContinueAfterVoice_Help_RU = "Включение этой опции автоматически продолжит битву после того как Карин закончит свою фразу.\nДля работы этой опции, также необходимо включить опцию «Пауза на репликах Карин».";

//Options Visual
const RemYanflyOptions_WindowToneRed_RU = "\\i[277]Тон окна: Красный";
const RemYanflyOptions_WindowToneRed_Help_RU = "Изменяет значение \\c[18]красного\\c[0] тона.\nПри зажатом SHIFT значение меняется быстрее.\n\\}\\}Примечание: Эта настройка индивидуальна для каждого файла сохранения и в главном меню её изменить нельзя.";
const RemYanflyOptions_WindowToneGreen_RU = "\\i[278]Тон окна: Зелёный";
const RemYanflyOptions_WindowToneGreen_Help_RU = "Изменяет значение \\c[29]зеленого\\c[0] тона.\nПри зажатом SHIFT значение меняется быстрее.\n\\}\\}Примечание: Эта настройка индивидуальна для каждого файла сохранения и в главном меню её изменить нельзя.";
const RemYanflyOptions_WindowToneBlue_RU = "\\i[279]Тон окна: Синий";
const RemYanflyOptions_WindowToneBlue_Help_RU = "Изменяет значение \\c[14]синего\\c[0] тона.\nПри зажатом SHIFT значение меняется быстрее.\n\\}\\}Примечание: Эта настройка индивидуальна для каждого файла сохранения и в главном меню её изменить нельзя.";
const RemYanflyOptions_FasterBattleDialogue_RU = "\\i[276]Быстрые диалоги в бою";
const RemYanflyOptions_FasterBattleDialogue_Help_RU = "Диалоги в бою будут идти быстрее.";
const RemYanflyOptions_FasterBattleCutins_RU = "\\i[276]Быстрые кат-сцены в бою";
const RemYanflyOptions_FasterBattleCutins_Help_RU = "Кат-сцены будут проходить быстрее, но без анимации.";
const RemYanflyOptions_SmootherBattleCutinLoading_RU = "\\i[276]Более плавное появление кат-сцен в бою";
const RemYanflyOptions_SmootherBattleCutinLoading_Help_RU = "\\}\\}Для более мощных ПК. Кат-сцены будут появляться плавнее, но игра будет запускаться дольше(ТОЛЬКО ЗАПУСК САМОЙ ИГРЫ).\nОтключите эту опцию, если время загрузки игры стало превышать 20 секунд или игра начала выдавать ошибки.\n\\{Перезапустите игру чтобы опция вступила в силу.";
const RemYanflyOptions_DisableBattleCutins_RU = "\\i[276]Выключить кат-сцены в бою";
const RemYanflyOptions_DisableBattleCutins_Help_RU = "Полностью выключает кат-сцены в бою.\nЭто повлияет на ваш игровой опыт.\n\\}Пожалуйста, используйте эту опцию в крайнем случае, если у вас сильно низкий FPS.";
const RemYanflyOptions_SmootherCGLoading_RU = "\\i[276]Плавная загрузка картинок";
const RemYanflyOptions_SmootherCGLoading_Help_RU = "\\}Для более мощных ПК. Смена картинок будет происходить плавнее, но игра будет запускаться дольше.\n\\}Отключите эту опцию, если время загрузки игры стало превышать 20 секунд или игра начала выдавать ошибки.\n\\{Перезапустите игру чтобы опция вступила в силу.";
const RemYanflyOptions_SortPassivesAscending_RU = "\\i[276]Сортировать пассивки по возрастанию";
const RemYanflyOptions_SortPassivesAscending_Help_RU = "Пассивки сортируются по дню их получения.\nВКЛ: Сверху вниз, от старых к новым.\nВЫКЛ: Сверху вниз, от новых к старым.";
const RemYanflyOptions_SynchFPS_RU = "\\i[273]Ограничить 60 FPS";
const RemYanflyOptions_SynchFPS_Help_RU = "\\}Включите эту настройку, если частота монитора выше 60Гц.\n\\}Выключите эту настройку, если FPS ниже 60 или частота монитора 60 Гц или ниже.\n\\{Нажав F2 можно увидеть свой FPS в игре.";
const RemYanflyOptions_LightingEffects_RU = "\\i[276]Эффекты освещения карты";
const RemYanflyOptions_LightingEffects_Help_RU = "Эффекты от источников света (например факелы).\nВыключение этой настройки повысит производительность игры\nесли у вас возникают просадки в местах, где много источников света.";
const RemYanflyOptions_MapEffects_RU = "\\i[276]Анимированные эффекты карты";
const RemYanflyOptions_MapEffects_Help_RU = "Анимирует дым и туман.\nВыключение этой настройки повысит производительность игры.";
const RemYanflyOptions_DisableFlashing_RU = "\\i[276]Отключить вспышки экрана";
const RemYanflyOptions_DisableFlashing_Help_RU = "Включите эту опцию чтобы выключить вспышки экрана.\nИспользуйте эту опцию, если вы чувствительны к вспышкам экрана\nили у вас устают глаза от вспышек." 
const RemYanflyOptions_ShowSexualDamagePopup_RU = "\\i[276]Отображение секс урона по Карин";
const RemYanflyOptions_ShowSexualDamagePopup_Help_RU = "\\}ВКЛ: Числа урона от секс-атак по Карин также будут всплывать поверх её тела.\nВЫКЛ: Информацию об уроне можно будет узнать только журнале боя (слева сверху).";

const RemYanflyOptions_EdictsOutlineColor_Obtainable_RU = "\\i[276]Цвет контура Указов: Доступны";
const RemYanflyOptions_EdictsOutlineColor_Obtainable_Help_RU = "Изменяет цвет контура тех Указов\nкоторые можно приобрести прямо сейчас.";
const RemYanflyOptions_EdictsOutlineColor_MeetReq_RU = "\\i[276]Цвет контура Указов: Можно приобрести";
const RemYanflyOptions_EdictsOutlineColor_MeetReq_Help_RU = "Изменяет цвет контура тех Указов\nдля которых условия приобретения выполнены \nно нельзя приобрести прямо сейчас.";
const RemYanflyOptions_EdictsOutlineColor_NoReq_RU = "\\i[276]Цвет контура Указов: Недоступны";
const RemYanflyOptions_EdictsOutlineColor_NoReq_Help_RU = "Изменяет цвет контура тех Указов\nдля которых условия приобретения ещё не выполнены.";

const RemYanflyOptions_EdictsOutlineColorName_Green_RU = "Зелёный";
const RemYanflyOptions_EdictsOutlineColorName_LightBlue_RU = "Светло-синий";
const RemYanflyOptions_EdictsOutlineColorName_Yellow_RU = "Желтый";
const RemYanflyOptions_EdictsOutlineColorName_Purple_RU = "Фиолетовый";
const RemYanflyOptions_EdictsOutlineColorName_Gray_RU = "Серый";
const RemYanflyOptions_EdictsOutlineColorName_Black_RU = "Чёрный";
const RemYanflyOptions_EdictsOutlineColorName_Red_RU = "Красный";

//Options Controls
const RemYanflyOptions_GamepadControl_RU = "\\i[281]Настройка геймпада";
const RemYanflyOptions_GamepadControl_Help_RU = "Назначение кнопок геймпада.";
const RemYanflyOptions_KeyboardControl_RU = "\\i[280]Настройка клавиатуры";
const RemYanflyOptions_KeyboardControl_Help_RU = "Назначение кнопок клавиатуры.";
const RemYanflyOptions_CancelSkipMentalPhase_RU = "\\I[280]Пропуск Ментальной Фазы";
const RemYanflyOptions_CancelSkipMentalPhase_Help_RU = "При включенной настройке Ментальная фаза закончится\nпри нажатии на кнопку отмены или на правую кнопку мыши.";

const RemYanflyOptions_Fullscreen_RU = "\\i[273]Режим экрана";
const RemYanflyOptions_Fullscreen_Help_RU = "Переключение между оконным и полноэкранным режимами.\nНажатие F4 или ALT+ENTER во время игры также переключает режимы.";

const RemYanflyGamepadButtonNameRU = "Кнопка %1";
const RemYanflyGamepadOkButtonNameRU = "OK / Взаимодействовать";
const RemYanflyGamepadOkButtonHelpRU = "Кнопка подтверждения командных действий и взаимодействия с игровыми объектами.";
const RemYanflyGamepadCancelButtonNameRU = "Отмена";
const RemYanflyGamepadCancelButtonHelpRU = "Кнопка отмены каких-либо действий.";
const RemYanflyGamepadShiftButtonNameRU = "Shift";
const RemYanflyGamepadShiftButtonHelpRU = "Кнопка бега, также скрывает текст.";
const RemYanflyGamepadMenuButtonNameRU = "Меню";
const RemYanflyGamepadMenuButtonHelpRU = "Используется для открытия Главного Меню.";
const RemYanflyGamepadPageUpButtonNameRU = "Левее / Журнал";
const RemYanflyGamepadPageUpButtonHelpRU = "Используется для выбора нужного меню или предмета, также открывает историю сообщений.";
const RemYanflyGamepadPageDownButtonNameRU = "Правее";
const RemYanflyGamepadPageDownButtonHelpRU = "Используется для выбора нужного меню или предмета.";
const RemYanflyGamepadResetDefaultNameRU = "Восстановить по умолчанию";
const RemYanflyGamepadResetDefaultHelpRU = "Применяет стандартные настройки для всех кнопок.";
const RemYanflyGamepadFinishConfigNameRU = "Закончить настройку";
const RemYanflyGamepadFinishConfigHelpRU = "Вы закончили настраивать геймпад?";

const RemYanflyKeyboardHelpRU = "Изменить назначение этой кнопки?";
const RemYanflyKeyboardDefaultLayoutTextRU = "Стандартная раскладка";
const RemYanflyKeyboardDefaultLayoutHelpRU = "Применяет стандартные настройки для всех кнопок.";
const RemYanflyKeyboardWASDTextRU = "WASD Раскладка";
const RemYanflyKeyboardWASDHelpRU = "Изменяет настройки кнопок под передвижение WASD.";
const RemYanflyKeyboardFinishConfigTextRU = "Закончить настройку";
const RemYanflyKeyboardFinishConfigHelpRU = "Вы закончили настраивать кнопки?";
const RemYanflyKeyboardClearTextRU = "Не задано";
const RemYanflyKeyboardOKKeyRU = "OK";
const RemYanflyKeyboardOKTextRU = "OK / Взаимодействовать";
const RemYanflyKeyboardEscapeKeyRU = "Отмена/Меню";
const RemYanflyKeyboardEscapeTextRU = "Отмена / Меню";
const RemYanflyKeyboardCancelKeyRU = "Отмена";
const RemYanflyKeyboardCancelTextRU = "Отмена";
const RemYanflyKeyboardMenuKeyRU = "Меню";
const RemYanflyKeyboardMenuTextRU = "Меню";
const RemYanflyKeyboardShiftKeyRU = "Shift";
const RemYanflyKeyboardShiftTextRU = "Shift";
const RemYanflyKeyboardPageUpKeyRU = "PgUp";
const RemYanflyKeyboardPageUpTextRU = "Page Up / Журнал";
const RemYanflyKeyboardPageDownKeyRU = "PgDn";
const RemYanflyKeyboardPageDownTextRU = "Page Down";
const RemYanflyKeyboardLeftKeyRU = "←";
const RemYanflyKeyboardLeftTextRU = "Влево";
const RemYanflyKeyboardUpKeyRU = "↑";
const RemYanflyKeyboardUpTextRU = "Вверх";
const RemYanflyKeyboardRightKeyRU = "→";
const RemYanflyKeyboardRightTextRU = "Вправо";
const RemYanflyKeyboardDownKeyRU = "↓";
const RemYanflyKeyboardDownTextRU = "Вниз";


//Options Cheats
//Russian gamers memorized English codes
const RemYanflyOptions_Cheats_ActorDoublePassiveGain_RU = RemYanflyOptions_Cheats_ActorDoublePassiveGain_EN;
const RemYanflyOptions_Cheats_ActorDoublePassiveGain_Help_RU = "Пассивки открываются в 2 раза быстрее.\nДля тех, кто хочет чтобы Карин превратилась в шлюху быстрее.\nПримечание: Читы работают только в Режиме Секретарши.";
const RemYanflyOptions_Cheats_ActorNoPassiveGain_RU = RemYanflyOptions_Cheats_ActorNoPassiveGain_EN;
const RemYanflyOptions_Cheats_ActorNoPassiveGain_Help_RU = "Карин больше не получает новые пассивки.\nДля тех, кто хочет сохранить Карин такой, какая она есть.\nПримечание: Этот чит работает только в Свободной Игре после концовки.";
const RemYanflyOptions_Cheats_EnemyDoublePhysicalDamage_RU = RemYanflyOptions_Cheats_EnemyDoublePhysicalDamage_EN;
const RemYanflyOptions_Cheats_EnemyDoublePhysicalDamage_Help_RU = "Враги наносят Карин в 2 раза больше урона Выносливости.\nДля тех, кто не хочет чтобы Карин была непобедимой.\nПримечание: Читы работают только в Режиме Секретарши.";
const RemYanflyOptions_Cheats_EnemyTriplePhysicalDamage_RU = RemYanflyOptions_Cheats_EnemyTriplePhysicalDamage_EN;
const RemYanflyOptions_Cheats_EnemyTriplePhysicalDamage_Help_RU = "Враги наносят Карин в 3 раза больше урона Выносливости.\nДля тех, кто хочет чтобы Карин отлетала с пары тычек.\nПримечание: Читы работают только в Режиме Секретарши.";
const RemYanflyOptions_Cheats_EnemyDoubleSexualDamage_RU = RemYanflyOptions_Cheats_EnemyDoubleSexualDamage_EN;
const RemYanflyOptions_Cheats_EnemyDoubleSexualDamage_Help_RU = "Наслаждение Карин растет в 2 раза быстрее от вражеских секс-атак.\nДля тех, кто хочет чтобы Карин кончала быстрее.\nПримечание: Читы работают только в Режиме Секретарши.";
const RemYanflyOptions_Cheats_EnemyTripleSexualDamage_RU = RemYanflyOptions_Cheats_EnemyTripleSexualDamage_EN;
const RemYanflyOptions_Cheats_EnemyTripleSexualDamage_Help_RU = "Наслаждение Карин растет в 3 раза быстрее от вражеских секс-атак.\nДля тех, кто хочет чтобы киска Карин превратилась в фонтан.\nПримечание: Читы работают только в Режиме Секретарши.";
const RemYanflyOptions_Cheats_EnemyDoubleOrgasmPoint_RU = RemYanflyOptions_Cheats_EnemyDoubleOrgasmPoint_EN;
const RemYanflyOptions_Cheats_EnemyDoubleOrgasmPoint_Help_RU = "Враги получают в два раза больше Наслаждения, прежде чем кончат.\nДля тех, кто хочет чтобы мужчины перестали преждевременно эякулировать.\nПримечание: Читы работают только в Режиме Секретарши.";
const RemYanflyOptions_Cheats_EnemyAlwaysAct_RU = RemYanflyOptions_Cheats_EnemyAlwaysAct_EN;
const RemYanflyOptions_Cheats_EnemyAlwaysAct_Help_RU = "Враги не будут пропускать ходы.\nДля тех, кто хочет чтоб враги были активнее.\nПримечание: Читы работают только в Режиме Секретарши.";
const RemYanflyOptions_Cheats_ActorHalfStaminaRegen_RU = RemYanflyOptions_Cheats_ActorHalfStaminaRegen_EN;
const RemYanflyOptions_Cheats_ActorHalfStaminaRegen_Help_RU = "Карин восстанавливает в 2 раза меньше выносливости.\nДля тех, кто хочет чтобы Карин проигрывала быстрее.\nПримечание: Читы работают только в Режиме Секретарши.";
const RemYanflyOptions_Cheats_ActorThirdStaminaRegen_RU = RemYanflyOptions_Cheats_ActorThirdStaminaRegen_EN;
const RemYanflyOptions_Cheats_ActorThirdStaminaRegen_Help_RU = "Карин восстанавливает в 3 раза меньше выносливости.\nДля тех, кто хочет чтобы выносливость Карин почти не восстанавливалась.\nПримечание: Читы работают только в Режиме Секретарши.";
const RemYanflyOptions_Cheats_ActorNoEvasion_RU = RemYanflyOptions_Cheats_ActorNoEvasion_EN;
const RemYanflyOptions_Cheats_ActorNoEvasion_Help_RU = "Карин не может уклоняться.\nДля тех, кто хочет чтобы Карин принимала каждую атаку на себя.\nПримечание: Читы работают только в Режиме Секретарши.";
const RemYanflyOptions_Cheats_ActorHalfExpRate_RU = RemYanflyOptions_Cheats_ActorHalfExpRate_EN;
const RemYanflyOptions_Cheats_ActorHalfExpRate_Help_RU = "Карин получает в 2 раза меньше опыта.\nДля тех, кто хочет чтобы Карин медленнее поднимала уровни.\nПримечание: Читы работают только в Режиме Секретарши.";
const RemYanflyOptions_Cheats_LessControlFive_RU = RemYanflyOptions_Cheats_LessControlFive_EN;
const RemYanflyOptions_Cheats_LessControlFive_Help_RU = "Снижает Контроль на 5.\nДля тех, кто хочет снизить Контроль.\nПримечание: Читы работают только в Режиме Секретарши.";
const RemYanflyOptions_Cheats_LessControlTen_RU = RemYanflyOptions_Cheats_LessControlTen_EN;
const RemYanflyOptions_Cheats_LessControlTen_Help_RU = "Снижает контроль на 10.\nДля тех, кто хочет усложнить себе жизнь(точнее жизнь Карин).\nПримечание: Читы работают только в Режиме Секретарши.";
const RemYanflyOptions_Cheats_InstantRiotsOne_RU = RemYanflyOptions_Cheats_InstantRiotsOne_EN;
const RemYanflyOptions_Cheats_InstantRiotsOne_Help_RU = "Уровень 1 будет поднимать бунт каждые 3 дня.\nДля тех, кто хочет снова посмотреть контент пройденного уровня.\nПримечание: Читы работают только в Режиме Секретарши.";
const RemYanflyOptions_Cheats_InstantRiotsTwo_RU = RemYanflyOptions_Cheats_InstantRiotsTwo_EN;
const RemYanflyOptions_Cheats_InstantRiotsTwo_Help_RU = "Уровень 2 будет поднимать бунт каждые 3 дня.\nДля тех, кто хочет снова посмотреть контент пройденного уровня.\nПримечание: Читы работают только в Режиме Секретарши.";
const RemYanflyOptions_Cheats_InstantRiotsThree_RU = RemYanflyOptions_Cheats_InstantRiotsThree_EN;
const RemYanflyOptions_Cheats_InstantRiotsThree_Help_RU = "Уровень 3 будет поднимать бунт каждые 3 дня.\nДля тех, кто хочет снова посмотреть контент пройденного уровня.\nПримечание: Читы работают только в Режиме Секретарши.";
const RemYanflyOptions_Cheats_InstantRiotsFour_RU = RemYanflyOptions_Cheats_InstantRiotsFour_EN;
const RemYanflyOptions_Cheats_InstantRiotsFour_Help_RU = "Уровень 4 будет поднимать бунт каждые 3 дня.\nДля тех, кто хочет снова посмотреть контент пройденного уровня.\nПримечание: Читы работают только в Режиме Секретарши.";
const RemYanflyOptions_Cheats_WaitressLog_RU = RemYanflyOptions_Cheats_WaitressLog_EN;
const RemYanflyOptions_Cheats_WaitressLog_Help_RU = "Открывает доступ к истории сообщений во время работы официанткой.\nДля тех, кто не хочет напрягать извилины.\nПримечание: Читы работают только в Режиме Секретарши.";

const RemYanflyOptions_Cheats_WaitressMemory_RU = RemYanflyOptions_Cheats_WaitressMemory_EN;
const RemYanflyOptions_Cheats_WaitressMemory_Help_RU = "Удаляет значок заказанного посетителями бара.\nДля тех, кто хочет запоминать заказы.\nПримечание: Этот чит работает во всех режимах.";

const RemYanflyOptions_Cheats_NoAutoSave_RU = "\\i[282]Код \\C[18]K*n*mi\\C[0]";
const RemYanflyOptions_Cheats_NoAutoSave_Help_RU = "Отключает автосохранения.\nНе забывай сохраняться почаще!\nПримечание: Читы работают только в Режиме Секретарши.";

const RemYanflyOptions_BoobsSize_RU = "\\i[58]Размер груди Карин";
const RemYanflyOptions_BoobsSize_Help_RU = "Изменение размера груди лишь косметический эффект никак не влияющий на игровой процесс.";
const RemYanflyOptions_BoobsSize_One_RU = "Огромный (чашечка K) (стандартный)";
const RemYanflyOptions_BoobsSize_Two_RU = "Большой (чашечка H)";
const RemYanflyOptions_BoobsSize_Three_RU = "Гигантский (чашечка P)";

const RemYanflyOptions_HairColor_RU = "\\i[594]Цвет волос Карин";
const RemYanflyOptions_HairColor_Help_RU = "Изменение цвета волос лишь косметический эффект никак не влияющий на игровой процесс. \nПримечание: в некоторых диалогах, сценах и спрайтах цвет волос Карин остаётся фиолетовым.\nТребуется дополнение «Stray Pubes».";
const RemYanflyOptions_HairColor_One_RU = "Фиолетовые (стандартный)";
const RemYanflyOptions_HairColor_Two_RU = "Светлые";
const RemYanflyOptions_HairColor_Three_RU = "Чёрные";

const RemYanflyOptions_DisplayPubicHair_RU = "\\i[595]Отображать лобковые волосы";
const RemYanflyOptions_DisplayPubicHair_Help_RU = "Включите эту опцию, чтобы у Карин были лобковые волосы.\nВыключите, если хотите чтобы Карин была гладко выбритой.";

const RemYanflyOptions_PubicColor_RU = "\\i[595]Цвет лобковых волос Карин";
const RemYanflyOptions_PubicColor_Help_RU = "Изменение цвета лобковых волос лишь косметический эффект никак не влияющий на игровой процесс.\nТребуется дополнение «Stray Pubes»";
const RemYanflyOptions_PubicColor_Zero_RU = "Как на голове (стандартный)";
const RemYanflyOptions_PubicColor_One_RU = "Фиолетовые";
const RemYanflyOptions_PubicColor_Two_RU = "Светлые";
const RemYanflyOptions_PubicColor_Three_RU = "Чёрные";

const RemYanflyOptions_PubicStyle_RU = "\\i[595]Стиль лобковых волос Карин";
const RemYanflyOptions_PubicStyle_Help_RU = "Изменение лобковых волос лишь косметический эффект, никак не влияющий на игровой процесс.\nТребуется дополнение «Stray Pubes»";
const RemYanflyOptions_PubicStyle_One_RU = "Естественный (стандартный)";
const RemYanflyOptions_PubicStyle_Two_RU = "Подстриженный";
const RemYanflyOptions_PubicStyle_Three_RU = "Заросший";

const RemYanflyOptions_ToggleMaleStrayPubes_RU = "\\i[596]Мужские лобковые волосы";
const RemYanflyOptions_ToggleMaleStrayPubes_Help_RU = "Включите, чтобы мужские лобковые волосы прилипали к телу Карин.\nТребуется дополнение «Stray Pubes».";
const RemYanflyOptions_StrayPubesAmount_RU = "\\i[596]Количество лобковых волос";
const RemYanflyOptions_StrayPubesAmount_Help_RU = "Эта настройка влияет на количество и вероятность прилипания лобковых волос к Карин.\nПоэкспериментируйте с этой настройкой, если вам хватает или не хватает\nгрязных мужских лобковых волос на Карин! Требуется дополнение «Stray Pubes».";
const RemYanflyOptions_StrayPubesAmount_One_RU = "Стандартно";
const RemYanflyOptions_StrayPubesAmount_Two_RU = "Меньше";
const RemYanflyOptions_StrayPubesAmount_Three_RU = "Больше";


const RemYanflyOptions_LovenseEnable_RU = "1) Включить интеграцию Lovense";
const RemYanflyOptions_LovenseEnable_Help_RU = "\\}Включите, чтобы интегрировать секс-игрушки Lovense.\n\\{Примечание: для работы любой функции требуется игрушка Lovense.";

const RemYanflyOptions_LovenseConnectionType_RU = "2) Тип подключения";
const RemYanflyOptions_LovenseConnectionType_Help_RU = "Подключите вашу игрушку Lovense к приложению Lovense Remote.\n\\}Выберите версию приложения Lovense Remote, которую вы используете.";
const RemYanflyOptions_LovenseConnectionType_Mobile_RU = "iPhone/Android";
const RemYanflyOptions_LovenseConnectionType_PC_RU = "Windows";

const RemYanflyOptions_LovenseMobileIP_RU = "Локальный IP";
const RemYanflyOptions_LovenseMobileIP_Help_RU = "\\}Введите локальный IP, отображённый в мобильном приложении Lovense Remote на экране Game Mode.\nЕсли вы стримите, то скройте экран во время ввода локального IP.";
const RemYanflyOptions_LovenseMobileIP_Text_RU = "Введите IP здесь";

const RemYanflyOptions_LovenseMobilePort_RU = "HTTP-порт";
const RemYanflyOptions_LovenseMobilePort_Help_RU = "\\}Введите HTTP-порт, отображённый в мобильном приложении Lovense Remote на экране Game Mode.\nЕсли вы стримите, то скройте экран во время ввода HTTP-порта.";
const RemYanflyOptions_LovenseMobilePort_Text_RU = "Введите HTTP-порт здесь";

const RemYanflyOptions_LovenseMobileHint_RU = "Поле ввода";

const RemYanflyOptions_LovenseConnectToys_RU = "3) Подключение игрушек";
const RemYanflyOptions_LovenseConnectToys_Help_RU = "Нажмите кнопку ПОДКЛЮЧИТЬ после всех вышеуказанных шагов.";
const RemYanflyOptions_LovenseConnectToys_Text_RU = "ПОДКЛЮЧИТЬ";

const RemYanflyOptions_LovenseNoToysConnected_RU = "\\C[18]>>>Сейчас нет подключённых игрушек<<<";
const RemYanflyOptions_LovenseNoToysConnected_Help_RU = "\\}Если у вас возникли проблемы с подключением игрушки к игре, вернитесь к предыдущем шагам,\nубедитесь, что подключены к той же сети Wi-Fi и не используете VPN.";

const RemYanflyOptions_LovenseToyNameList_RU = "Название: %1   Заряд: %2%"; //Example 'Name: Rem's Toy  Battery: 69%'
const RemYanflyOptions_LovenseToyNameList_Test_RU = "Тест";

const RemYanflyOptions_LovenseIntensity_RU = "(Опционально) Глобальная интенсивность";
const RemYanflyOptions_LovenseIntensity_Help_RU = "Эта настройка позволяет изменить интенсивность работы всех ваших игрушек.\n\\}Примечание: интенсивность игрушки зависит также от стиля игры и Уровня Шлюхи Карин.\n\\}Рекомендуется ставить пониженную интенсивность для первой игры шлюховатой Карин с интеграцией секс-игрушек, пока не привыкнете.";

const RemYanflyOptions_LovenseTime_RU = "(Опционально) Глобальная продолжительность";
const RemYanflyOptions_LovenseTime_Help_RU = "\\}Игрушка реагирует на многие непроникающие сексуальные действия непродолжительное время, после чего останавливается.\n\\{Настройка позволяет изменить ответную реакцию секс-игрушки.";
const RemYanflyOptions_LovenseTime_Zero_RU = "1/2";
const RemYanflyOptions_LovenseTime_One_RU = "Стандартно";
const RemYanflyOptions_LovenseTime_Two_RU = "2x";
const RemYanflyOptions_LovenseTime_Three_RU = "3x";
const RemYanflyOptions_LovenseTime_Four_RU = "5x";
const RemYanflyOptions_LovenseTime_Five_RU = "Бесконечно";
const RemYanflyOptions_LovenseTime_Six_RU = "1/6";
const RemYanflyOptions_LovenseTime_Seven_RU = "1/4";

const RemYanflyOptions_LovensePumpEnable_RU = "(Опционально) Включить помпу";
const RemYanflyOptions_LovensePumpEnable_Help_RU = "Игрушки Max/Max2 могут сжиматься с помощью помпы.\nВы можете отключить эту функцию с помощью этой опции.";

const RemYanflyOptions_LovenseEnableRAID_RU = "4) RAID";
const RemYanflyOptions_LovenseEnableRAID_Help_RU = "\\}\\}«Rem's Advanced Integrated Disco» или просто RAID: уникальная система секс-игрушек созданная под Тюрьму Карин.\nПо умолчанию RAID выключен и все подключённые секс-игрушки будут реагировать на каждый сексуальный акт.\nВключение RAID позволяет подстраивать и создавать предустановленные настройки основанные на ваших секс-игрушках.";

const RemYanflyOptions_RAIDparty_Help_RU = "\\}Выберите режим работы игрушки '\\C[5]«Общий»\\C[0]' или '\\C[4]«Одиночный»\\C[0]'.\n\\}\\C[5]«Общий»\\C[0] реагирует на все сексуальные действия, кроме тех, которые приписаны к другим игрушкам.\n\\C[4]«Одиночный»\\C[0] будет реагировать только на те сексуальные действия, которые были приписаны им.";
const RemYanflyOptions_RAIDparty_Solo_RU = "Одиночный";
const RemYanflyOptions_RAIDparty_Party_RU = "Общий";

const RemYanflyOptions_RAIDsexact_Help_RU = "\\}Выберите до трёх сексуальных действий для этой игрушки.\n\\}Игрушка будет реагировать на приписанные сескуальные дейстия происходящие с Карин.\nЭти игрушки также будут работать интенсивнее.";
const RemYanflyOptions_RAIDsexact_Mouth_RU = "Рот";
const RemYanflyOptions_RAIDsexact_Boobs_RU = "Сиськи";
const RemYanflyOptions_RAIDsexact_Clit_RU = "Клитор";
const RemYanflyOptions_RAIDsexact_Pussy_RU = "Киска";
const RemYanflyOptions_RAIDsexact_Anal_RU = "Анал";
const RemYanflyOptions_RAIDsexact_Exhibitionism_RU = "Эксгибиционизм";
const RemYanflyOptions_RAIDsexact_Masochism_RU = "Мазохизм";
const RemYanflyOptions_RAIDsexact_Sadism_RU = "Садизм";
const RemYanflyOptions_RAIDsexact_Rimjob_RU = "Анилингус";
const RemYanflyOptions_RAIDsexact_Footjob_RU = "Работа ножками";
const RemYanflyOptions_RAIDsexact_Hands_RU = "Работа ручками";

const RemYanflyOptions_RAIDarousal_Help_RU = "\\}Выберите, будет ли игрушка реагировать на возбуждение Карин.\nЕсли включена, то игрушка будет немного реагировать, пока Карин возбуждена.";
const RemYanflyOptions_RAIDarousal_ON_RU = "Возбуждение ВКЛ";
const RemYanflyOptions_RAIDarousal_OFF_RU = "Возбуждение ВЫКЛ";
const RemYanflyOptions_RAIDorgasm_Help_RU = "\\}Выберите, будет ли игрушка реагировать на оргазм Карин.\nЕсли включена, то игрушка будет резко и сильно реагировать на оргазм Карин.";
const RemYanflyOptions_RAIDorgasm_ON_RU = "Оргазм ВКЛ";
const RemYanflyOptions_RAIDorgasm_OFF_RU = "Оргазм ВЫКЛ";

const RemYanflyOptions_RAIDintensity_Help_RU = "Выберите интенсивность для этой игрушки.\nНастройка «Глобально» установит этот параметр на все игрушки.";
const RemYanflyOptions_RAIDintensity_Global_RU = "Глобально";

const RemYanflyOptions_RAIDtime_Help_RU = "Выберите продолжительность для этой игрушки.\nНастройка «Глобально» установит этот параметр на все игрушки.";
const RemYanflyOptions_RAIDtime_Global_RU = "Глобально";
const RemYanflyOptions_RAIDTime_One_RU = "Стандартно";
const RemYanflyOptions_RAIDTime_Two_RU = "2x";
const RemYanflyOptions_RAIDTime_Three_RU = "3x";
const RemYanflyOptions_RAIDTime_Four_RU = "5x";
const RemYanflyOptions_RAIDTime_Five_RU = "Бесконечно";
const RemYanflyOptions_RAIDTime_Six_RU = "1/6";
const RemYanflyOptions_RAIDTime_Seven_RU = "1/4";
const RemYanflyOptions_RAIDTime_Eight_RU = "1/2";

const RemYanflyOptions_OptionsOn_RU = "ВКЛ";
const RemYanflyOptions_OptionsOff_RU = "ВЫКЛ";

//Save
const RemYanflySaveYesRU = "Да";
const RemYanflySaveNoRU = "Нет";
const RemYanflySaveEmptyRU = "Пусто";
const RemYanflySaveDeleteTextRU = "Хотите удалить это сохранение?";
const RemYanflySaveLoadTextRU = "Хотите загрузить это сохранение?";
const RemYanflySaveSaveTextRU = "Хотите перезаписать это сохранение?";
const RemYanflySaveInvalidTextRU = "Это сохранение из другой игры.";
const RemYanflySaveSelectHelpRU = "Выберите слот.";
const RemYanflySaveLoadHelpRU = "Загрузить данные из сохранения.";
const RemYanflySaveSaveHelpRU = "Сохранить текущий прогресс игры.";
const RemYanflySaveDeleteHelpRU = "Удалить все данные с этого сохранения.";
const RemYanflyAutosavingRU = "Автосохранение...";

const RemYanflySavePlaytimeRU = "Время игры:";
const RemYanflySaveTotalSavesRU = "Всего сохранений:";
const RemYanflySaveTotalDaysRU = "Всего проведено дней:";
const RemYanflySaveTotalPlaythroughsRU = "Всего забегов:";
const RemYanflySaveTotalGameClearsRU = "Всего прохождений:";
const RemYanflySaveTotalEndingsRU = "Полученные концовки:"; // currently unused

const RemYanflyTargetEverybodyRU = "Everybody"; // currently unused
const RemYanflyTargetMultiEverybodyRU = "Anyone"; // currently unused
const RemYanflyTargetMultiAlliesRU = "Any Ally"; // currently unused
const RemYanflyTargetMultiFoesRU = "Any Enemy"; // currently unused
const RemYanflyTargetFemaleAllyRU = "Female Ally"; // currently unused
const RemYanflyTargetFemaleEnemyRU = "Female Enemy"; // currently unused

const RemFTKRSkillTreeConfirmTextRU = "%2";
const RemFTKRSkillTreeYesRU = "Принять";
const RemFTKRSkillTreeNoRU = "Отмена";
const RemFTKRSkillTreeEdictPointsRU = "Очки Указов(ОУ):";
const RemFTKRSkillTreeEdictPointsAbbrRU = "ОУ";
const RemFTKRSkillTreeOrderRU = "Порядок:";
const RemFTKRSkillTreeFundingRU = "Капитал:";
const RemFTKRSkillTreeFundingCostRU = "Стоимость:";
const RemFTKRSkillTreeCostItemRU = "%1 Cost:"; // currently unused
const RemFTKRSkillTreePreReqTextRU = "\\c[16]Требования:";
const RemFTKRSkillTreeReqTypeEdictRU = "Указ: ";
const RemFTKRSkillTreeReqTypePassiveRU = "Пассивка: ";


const RemErrorMessageRU = "ЕСЛИ ИГРОВЫЕ ФАЙЛЫ ИЛИ СОХРАНЕНИЯ НЕ БЫЛИ МОДИФИЦИРОВАНЫ, ВЫ НЕ ИСПОЛЬЗУЕТЕ МОДЫ и у Вас официальная версия игры из Steam/Itch.io/DLsite/Fanza, сделайте скриншот этого экрана и закиньте его в канал #kp-bug-reports в нашем Дискорде! Сообщите там же свою версию игры, и как можно больше деталей того, что вы делали до появления ошибки!";

const RemEquipTypesRU = ["","Оружие","Аксессуар","Титул","Надеть комплект", "Сохранить комплект"];

const RemSkillTypesRU = ["",
"Атака",
"Энергия",
"Секс-навык",
"Сила Воли",
"Позитивные эффекты",
"Негативные эффекты",
"Пассивки",
"Указы",
"Разговор",
"Взгляд",
"Шаткость",
"Падение",
"Мастурбация",
"Безоружна",
"Официантка",
"Бармен",
"Секретарша",
"Туалет",
"Мастурбация",
"Стриптиз",
"Перерыв",
"Тренер"
];

//Enemy Types
const RemPrisonerGenericRU = makeRussianName(["заключённый", "заключённого", "заключённому", "заключённого", "заключённым", "заключённом"]);
const RemPrisonerGuardRU = makeRussianName(["стражник", "стражника", "стражнику", "стражника", "стражником", "стражнике"]);
const RemPrisonerThugRU = makeRussianName(["громила", "громилы", "громиле", "громилу", "громилой", "громиле"]);
const RemPrisonerGoblinRU = makeRussianName(["гоблин", "гоблина", "гоблину", "гоблина", "гоблином", "гоблине"]);
const RemPrisonerOrcRU = makeRussianName(["орк", "орка", "орку", "орка", "орком", "орке"]);
const RemPrisonerSlimeRU = makeRussianName(["слизь", "слизи", "слизи", "слизь", "слизью", "слизи"]);
const RemPrisonerNerdRU = makeRussianName(["ботан", "ботана", "ботану", "ботана", "ботаном", "ботане"]);
const RemPrisonerRogueRU = makeRussianName(["разбойник", "разбойника", "разбойнику", "разбойника", "разбойником", "разбойнике"]);
const RemPrisonerLizardmanRU = makeRussianName(["людоящер", "людоящера", "людоящеру", "людоящера", "людоящером", "людоящере"]);
const RemPrisonerHomelessRU = makeRussianName(["бомж", "бомжа", "бомжу", "бомжа", "бомжом", "бомже"]);
const RemPrisonerWerewolfRU = makeRussianName(["оборотень", "оборотня", "оборотню", "оборотня", "оборотнем", "оборотне"]);;
const RemPrisonerYetiRU = makeRussianName(["йети", "йети", "йети", "йети", "йети", "йети"]);


const RemReceptionistVisitorRU = "Посетитель";
const RemReceptionistFanRU = "Фанат";

//Boss Types
const RemBossYasuRU = "Заместитель начальника";
const RemBossTonkinRU = "Орк";
const RemBossCargillRU = "Доктор";
const RemBossAronRU = "Людоящер Альфа";
const RemBossNoinimRU = "Великий Йети";
const RemBossGobrielRU = "Капитан";
const RemBossEmperorRU = "Его Императорское Величество";

//Disable Smegma Text
const RemDisableSmegmaSkill815NameRU = "Машина для мытья членов";


//Skills
const RemRestoreMindPartialSuccessRU = "%Д1 удалось немного восстановить свой разум.";
const RemRestoreMindFullSuccessRU = "%Д1 удалось восстановить свой разум!";
const RemRestoreMindFailureRU = "%И1 не смогла восстановить свой разум...";

//Orgasm Skill Message
const RemOrgasmSkillMessageKarrynKissRU = " от поцелуя";
const RemOrgasmSkillMessageKarrynPettingRU = " от того, что погладила член";
const RemOrgasmSkillMessageKarrynHandjobRU = " от дрочки члена";
const RemOrgasmSkillMessageKarrynBlowjobRU = " отсасывая член";
const RemOrgasmSkillMessageKarrynTittyFuckRU = " трахая член своей грудью";
const RemOrgasmSkillMessageKarrynPussySexRU = " трахая член своей киской";
const RemOrgasmSkillMessageKarrynAnalSexRU = " от анального секса";
const RemOrgasmSkillMessageEnemyKissRU = " от того, что её поцеловали";
const RemOrgasmSkillMessageEnemyPettingRU = " от того, как её лапали";
const RemOrgasmSkillMessageEnemyHandjobRU = " от того, что её руку трахают";
const RemOrgasmSkillMessageEnemyBlowjobRU = " пока её рот насиловали";
const RemOrgasmSkillMessageEnemyTittyFuckRU = " пока её грудь трахали";
const RemOrgasmSkillMessageEnemyPussySexRU = " от того, что её выебали";
const RemOrgasmSkillMessageEnemyAnalSexRU = " пока её задницу трахали";
const RemOrgasmSkillMessageEnemyCunnilingusRU = " пока ей делали куннилингус";
const RemOrgasmSkillMessageBukkakeRU = " от того, что её облили спермой";
const RemOrgasmSkillMessageSwallowRU = " пока глотала сперму";
const RemOrgasmSkillMessagePussyCreampieRU = " от того, что её киску заполнили";
const RemOrgasmSkillMessageAnalCreampieRU = " от того, что её попку заполнили";
const RemOrgasmSkillMessageMasochismRU = " от мазохизма";
const RemOrgasmSkillMessageSadismRU = " от садизма";
const RemOrgasmSkillMessageMasturbateRU = " от мастурбации";
const RemOrgasmSkillMessageSpankRU = " от того, что её отшлёпали";
const RemOrgasmSkillMessageTalkRU = " просто от разговоров";
const RemOrgasmSkillMessageSightRU = " от их взглядов";
const RemOrgasmSkillMessageToyRU = " из-за игрушек";

//Waitress
const RemAlcoholTypeWaterRU = "стакан воды";
const RemAlcoholTypePaleAleRU = "кружку светлого эля";
const RemAlcoholTypeDarkAleRU = "кружку тёмного эля";
const RemAlcoholTypeVodkaRU = "стакан водки";
const RemAlcoholTypeTequilaRU = "стакан текилы";
const RemAlcoholTypeGoldRumRU = "стакан рома";
const RemAlcoholTypeOverproofRumRU = "стакан крепкого рома";
const RemAlcoholTypeWhiskeyRU = "стакан виски";
const RemAlcoholTypeDirtyMugsSingularRU = "использованная кружка";
const RemAlcoholTypeDirtyMugsPluralRU = "использованные кружки";
const RemAlcoholTypeDirtyGlassesSingularRU = "использованный стакан";
const RemAlcoholTypeDirtyGlassesPluralRU = "использованные стаканы";

const RemWaitressGetsTipRU = "\\C[3]%И1 получила чаевые в размере %2 %Plural(%2;золотой;золотых;золотых)!";
const RemWaitressEnemySleepRU = "%И1 пьяным уснул на столе.";
const RemWaitressEnemyWakeUpRU = "%И1 проснулся от всей этой суматохи.";
const RemWaitressEnemyLeavesBarRU = "\\C[8]%И1 поднялся и покинул бар.";
const RemWaitressEnemyLeavesBarDrunkRU = "\\C[8]%И1 поднялся и кое-как умудрился найти выход из бара.";
const RemWaitressEnemyCallingForWaitressRU = "\\C[2]%И1 зовёт официантку.";
const RemWaitressEnemyDidntCallForWaitressRU = "%И1 не звал официантку.";
const RemWaitressEnemyAskingForDrinkRU = "\\C[2]%И1 хотел бы заказать %В2.";
const RemWaitressEnemyAskingForWaitressToDrinkRU = "%И1 предлагает %Д2 чаевые, если она сделает глоток его напитка.";
const RemWaitressEnemyAskingForWaitressToFlashRU = "%И1 предлагает %Д2 чаевые, если она засветит своим горячим телом.";
const RemWaitressRefusesDrinkRU = "Но %И1 отказывается, разочаровывая всех вокруг.";
const RemWaitressAcceptsDrinkRU = "\\C[31]%И1 делает глоток напитка, пока все улыбаются и пьют вместе с ней.";
const RemWaitressWontFlashRU = "Но %И1 отказалась демонстрировать своё тело незнакомым мужикам в баре.";
const RemWaitressFlashesRU = "\\C[27]%И1 улыбнулась и позволила всем в баре взглянуть на неё.";
const RemWaitressEnemyRefusesDrinkRU = "Но %И1 не заказывал этот напиток.";
const RemWaitressEnemyAcceptsDrinkRU = "%И1 забирает напиток и платит за него.";
const RemWaitressEnemyAlcoholKissRU = "\\C[27]%И1 силой напоил %В2 своим напитком, пока целовал её!";
const RemWaitressEnemyCheerForBrawlNoDrinkRU = "%И1 радуется и хлопает, пока наблюдает за дракой.";
const RemWaitressEnemyCheerForBrawlYesDrinkRU = "%И1 пьёт, аплодирует и наслаждается дракой.";
const RemWaitressBrawlStartRU = "\\C[18]Началась драка!!";
const RemWaitressBrawlJoinRU = "\\C[18]%И1 с нетерпением присоединяется к драке!";
const RemWaitressBarDamageRU = "\\C[3]Бар получил ущерб на %1 %Plural(%1;золотой;золотых;золотых)!";
const RemWaitressEnemyTellsJokeRU = "%И1 начинает рассказывать анекдот.";
const RemWaitressEnemyContinuesJokeRU = "%И1 продолжает свой анекдот.";
const RemWaitressEnemyHearsJokeRU = "%И1 слушает анекдот %Р2.";
const RemWaitressEnemyLaughsJokeRU = "%И1 смеётся над анекдотом %Р2.";
const RemWaitressEnemyChugsDrinkRU = "%И1 начинает хлебать свой напиток.";
const RemWaitressEnemyChugsDrinkFinishRU = "%И1 допивает остатки напитка.";
const RemWaitressEnemyChattingRU = "%И1 болтает с %Т2.";
const RemWaitressEnemyChattingHimselfRU = "%И1 разговаривает сам с собой.";
const RemWaitressEnemyEntersBarRU = "\\C[2]%И1 зашёл в бар и сел за %В2.";
const RemWaitressEnemyFumingRU = "\\C[10]У %Р1 мрачное лицо...";
const RemWaitressEnemyStartSexRU = "\\C[27]%И2 по пьяни споткнулась и %И1 помог ей лечь на стол!!!";
const RemWaitressEnemyRefillsKarrynMugRU = "%И1 доливает в кружку %Р2 ещё светлого эля!";
const RemWaitressEnemyDumpsKarrynMugRU = "%И1 берёт кружку %Р2 и разливает весь эль на пол!";
const RemWaitressDrinkSemenMugRU = "\\C[27]%И1 глотает \\C[1]%2мл спермы!";

const RemReceptionistVisitingRoomA_RU = "Комната для свиданий A";
const RemReceptionistVisitingRoomB_RU = "Комната для свиданий B";
const RemReceptionistVisitingRoomC_RU = "Комната для свиданий C";
const RemReceptionistVisitingRoomD_RU = "Комната для свиданий D";

const RemReceptionistNewVisitorRU = "\\C[2]%И1 получил свой номер и сел.";
const RemReceptionistNewGoblinRU = "\\C[10]Появился гоблин!";
const RemReceptionistGoblinDefeatedRU = "\\C[8]%И1 сбежал!";
const RemReceptionistVisitorEntersVisitingRoomRU = "\\C[11]%И1 заходит в %В2.";
const RemReceptionistVisitingRoomStatusOccupiedPluralRU = "\\C[23]«%И1 будет занята ещё %2 %Plural(%2;минуту;минуты;минут). Приём!»";
const RemReceptionistVisitingRoomStatusOccupiedSingleRU = "\\C[23]«%И1 будет занята ещё минуту. Приём!»»";
const RemReceptionistVisitingRoomStatusNotOccupiedRU = "\\C[23]«%И1 свободна. Приём!»";
const RemReceptionistVisitorWantsToHandOverPaperRU = "%И1 ждёт чтобы отдать заполненные документы.";
const RemReceptionistVisitorAngryComplaint_OccupiedVisitingRoomRU = "\\C[10]%И1 жалуется что %И2 занята.";
const RemReceptionistGreetVisitorResultNormalRU = "%И1 говорит что он здесь для посещения.";
const RemReceptionistFinishedProcessingPapersRU = "Документы %Р1 проверены. %Plural(%2;Предоставлена;Предоставлено;Предоставлено) %2 %Plural(%2;минута;минуты;минут) для свидания.";
const RemReceptionistVisitorLeavesAngryRU = "\\C[10]%И1 внезапно взбесился и ушёл!";
const RemReceptionistFanLeavesHappyRU = "%И1 с улыбкой покинул центр посещений.";
const RemReceptionistFanLeavesDejectedRU = "%И1 расстроившись, покинул центр посещений.";
const RemReceptionistPervLeavesHappyRU = "%И1 уходит с широченной ухмылкой.";
const RemReceptionistPervLeavesAngryRU = "%И1 в бешенстве ушёл.";
const RemReceptionistNotHereForVisitationRU = "Видимо, %И1 пришёл сюда не для посещений!";

const RemGloryBattleEndRU = "Дверь открылась...";
const RemGloryLeftStallCockNameRU = makeRussianName(["член слева", "члена слева", "члену слева", "член слева", "членом слева", "члене слева"]);
const RemGloryRightStallCockNameRU = makeRussianName(["член справа", "члена справа", "члену справа", "член справа", "членом справа", "члене справа"]);
const RemGloryGuestEnterBathroomRU = "\\C[8]Кто-то вошёл в туалет.";
const RemGloryGuestLeaveBathroomRU = "\\C[8]Кто-то покинул туалет.";
const RemGloryGuestEnterLeftStallRU = "\\C[7]Кто-то зашёл в левую кабинку.";
const RemGloryGuestLeaveLeftStallRU = "\\C[7]Кто-то освободил левую кабинку.";
const RemGloryGuestEnterRightStallRU = "\\C[7]Кто-то зашёл в правую кабинку.";
const RemGloryGuestLeaveRightStallRU = "\\C[7]Кто-то освободил правую кабинку.";
const RemGloryGuestPissingLeftStallRU = "\\C[8]Слышно как в левой кабинке кто-то мочится.";
const RemGloryGuestEatingLeftStallRU = "\\C[8]Слышно как кто-то ест в левой кабинке.";
const RemGloryGuestPissingRightStallRU = "\\C[8]Слышно как в правой кабинке кто-то мочится.";
const RemGloryGuestEatingRightStallRU = "\\C[8]Слышно как кто-то ест в правой кабинке.";
const RemGloryGuestShowedThroughLeftHoleRU = "\\C[27]Из левой дырки появился член!";
const RemGloryGuestShowedThroughRightHoleRU = "\\C[27]Из правой дырки появился член!";

const RemStripperBattleEndRU = "Шоу Карин завершено.";
const RemStripperEnemyTossCondomOntoStageRU = "%И1 бросает презерватив на сцену.";
const RemStripperEnemyTipsCondomToBeltRU = "%И1 привязывает презерватив к поясу %Р2!";
const RemStripperEnemyTipsCondomToBraRU = "%И1 привязывает презерватив к бюстгальтеру %Р2!";
const RemStripperEnemyTipsCondomToNippleRU = "%И1 привязывает презерватив к выпирающему соску %Р2!";
const RemStripperEnemyTipsCondomToHairbandRU = "%И1 привязывает презерватив к ленточке на голове %Р2!";
const RemStripperEnemyTipsCondomToSidetailRU = "%И1 привязывает презерватив к хвостику %Р2!";
const RemStripperEnemyEntersStripClubRU = "\\C[8]%И1 занимает место перед сценой.";
const RemStripperEnemyLeavesStripClubHappyRU = "\\C[8]%И1 поднимается и уходит с улыбкой на лице.";
const RemStripperEnemyLeavesStripClubUnhappyRU = "\\C[8]%И1 встаёт и уходит расстроенным.";
const RemStripperEnemyJoinVIPSingularRU = "\\C[8]%И1, держа за руку оставшегося клиента, ведёт его в приватную клмнату......";
const RemStripperEnemyJoinVIPPluralRU = "\\C[8]%И1, держа за руки оставшихся клиентов, ведёт их в приватную комнату......";

const RemTrainerEnemyObserveFormExcellentRU = "\\C[8](Форма %Р1 \\C[10]практически идеальна\\C[8].)";
const RemTrainerEnemyObserveFormGoodRU = "\\C[8](Форма %Р1 выглядит неплохо%2\\C[8].)";
const RemTrainerEnemyObserveFormOkayRU = "\\C[8](Форма %Р1 могла бы быть и лучше%2\\C[8].)";
const RemTrainerEnemyObserveFormPoorRU = "\\C[8](Над Формой %Р1 нужно серьёзно поработать%2\\C[8].)";
const RemTrainerEnemyObserveFormBadRU = "\\C[8](Форма %Р1 ужасна%2\\C[8].)";
const RemTrainerEnemyObserveFormMaxRU = "\\C[8], но похоже \\C[10]это его максимум";
const RemTrainerEnemyObserveStaminaTiredRU = "\\C[8](Он также начинает выглядеть уставшим.)";
const RemTrainerEnemyObserveStaminaExhaustedRU = "\\C[8](Он также выглядит истощённым.)";
const RemTrainerEnemyEntersGymRU = "\\C[2]%И1 заходит в спортзал и начинает тренировку.";
const RemTrainerEnemyLeavesGymFinishedWorkoutRU = "\\C[8]%И1 закончил тренировку и уходит из спортзала.";
const RemTrainerEnemyLeavesGymFailedWorkoutRU = "\\C[8]%И1 не смог закончить тренировку и уходит из спортзала уставшим.";
const RemTrainerEnemyLeavesGymBlueballedRU = "\\C[8]%И1 слишком отвлекается, беспокоится о распухших яйцах и уходит из спортзала.";
const RemTrainerEnemyLeavesGymHappyRU = "\\C[8]%И1 не смог закончить тренировку, но всё равно уходит из спортзала с широкой улыбкой.";
const RemTrainerRinkanSpatsRippedRU = "Леггинсы Карин порвались!";

const RemMidBattleEnemyReinforcementRU = "\\C[2]%И1 прибыл как подкрепление!";


const RemLevelFiveFreeBattleDefeatSettingRU = [
"случайный Уровень",
"Уровень 1 Склад бара",
"Уровень 2 Туалет",
"Уровень 3 Карцер",
"Уровень 4 Заброшенная территория",
"Уровень 5 Алтарь"
];

//////////////
// Russian Declension
/////////////////////

function patchTextManagerWithRussianDeclension() {
	function RussianTextFormatter() {
		this.translatables = {};
		this.declensions = {};
		this.where = {};

		// context binding to optimize when passed to Array.map()
		this.translate = RussianTextFormatter.prototype.translate.bind(this);
	}

	RussianTextFormatter.FORMAT_DECLENSION_LETTERS_REGEXPS_RU = [
		/%И([0-9]+)/g,
		/%Р([0-9]+)/g,
		/%Д([0-9]+)/g,
		/%В([0-9]+)/g,
		/%Т([0-9]+)/g,
		/%П([0-9]+)/g,
	];

	RussianTextFormatter.prototype.getDeclensions = function(word) {
		return this.declensions[word];
	}

	RussianTextFormatter.prototype.setDeclensions = function(declensions) {
		return this.declensions[declensions[0]] = declensions;
	}

	RussianTextFormatter.prototype.toDeclension = function(word, index) {
		return this.declensions[word] && this.declensions[word][index] || word;
	}

	RussianTextFormatter.prototype.translate = function(from) {
		return this.translatables[from] || from;
	}

	RussianTextFormatter.prototype.setTranslation = function([from, to]) {
		return this.translatables[from] = to;
	}

	RussianTextFormatter.prototype.getWhere = function(word) {
		return this.where[word];
	}

	/**
	* @param {['original location', 'in where']} where
	*/
	RussianTextFormatter.prototype.setWhere = function(where) {
		return this.where[where[0]] = where;
	}

	RussianTextFormatter.prototype.formatDeclensions = function(text, ...variables) {
		const _this = this;

		return RussianTextFormatter.FORMAT_DECLENSION_LETTERS_REGEXPS_RU.reduce((text, regex, caseIndex) => {
			return text.replace(regex, function(s, n) {
				const arg = variables[Number(n) - 1];
				let declensions;

				if (typeof arg === 'string') {
					declensions = _this.getDeclensions(arg);
				}

				if (declensions) {
					return declensions[caseIndex];
				}

				return arg;
			});
		}, text);
	}

	RussianTextFormatter.prototype.formatPlurals = function(text) {
		return text.replace(/%Plural\(([^\)]+)\)/g, (s, paramsString) => {
			const [countString, one, few, many, single] = paramsString.split(';');
			const count = Number(countString.replace(/[,\s]+/g, ''));

			if (Number.isNaN(count)) {
				return many || few || one;
			}

			if (!Number.isInteger(count)) {
				return few || one;
			}

			if (count === 1) {
				return single || one;
			}

			if (count % 10 === 1 && count % 100 !== 11) {
				return one;
			} else if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20)) {
				return few || one;
			}

			return many || few || one;
		});
	}

	/**
	* The Russian language uses different prepositions for different places
	*/
	RussianTextFormatter.prototype.formatWhere = function(text) {
		return text.replace(/%WhereIn\(([^\)]+)\)/g, (s, param) => {
			const where = this.getWhere(param);

			return where && where[1] || `в ${param}`;
		});
	}

	/**
	* Applies all Russian formatting except declensions
	*
	* Declensions are excluded for a little optimization
	* (they are relevant only for String.format)
	*/
	RussianTextFormatter.prototype.format = function(text) {
		let formattedText = text;

		formattedText = this.formatWhere(formattedText);
		formattedText = this.formatPlurals(formattedText);

		return formattedText;
	}

	TextManager.russianTextFormatter = new RussianTextFormatter();
}

/**
 * The game code often uses this non-standard for JS function from rpg_core
 *
 * In order not to write logic for the Russian language in all places
 * where this function is used, we decorate it once
 */
(() => {
	const originalFormat = String.prototype.format;

	String.prototype.format = function(...variables) {
		let text = this;

		// Must be applied before specific formatting
		if (typeof originalFormat === 'function') {
			text = originalFormat.apply(text, variables);
		}

		if (TextManager.isRussian) {
			const translatedVariables = variables.map(TextManager.russianTextFormatter.translate);

			text = TextManager.russianTextFormatter.formatDeclensions(text, ...translatedVariables);
			text = TextManager.russianTextFormatter.format(text);
		}

		return text;
	};
})();

(() => {
	makeRussianWhere([
		['Улица', 'на улице'],
		['Столовая', 'в столовой'],
		['Офис Карин', 'в офисе Карин'],
		['Двор', 'во дворе'],
		['Диспетчерская', 'в диспетчерской'],
		['Комната охраны', 'в комнате охраны'],
		['Медпункт', 'в медпункте'],
		['Бар', 'в баре'],
		['Склад Бара', 'на складе бара'],
		['Прачечная', 'в прачечной'],
		['Посудомоечная', 'в посудомоечной'],
		['Зона приёма заключённых', 'в зоне приёма заключённых'],
		['Комнаты для свиданий', 'в комнатах для свиданий'],
		['Регистратура', 'в регистратуре'],
		['Мастерская', 'в мастерской'],
		['Магазин', 'в магазине'],
		['Читальный зал', 'в читальном зале'],
		['Класс', 'в классе'],
		['Туалет', 'в туалете'],
		['Комната отдыха', 'в комнате отдыха'],
		['Переговорка', 'в переговорке'],
		['Главный офис', 'в главном офисе'],
		['Коридор 2-го корпуса', 'в коридоре 2-го корпуса'],
		['Коридор Уровня 1', 'в коридоре Уровня 1'],
		['Коридор Уровня 2', 'в коридоре Уровня 2'],
		['Лаборатория', 'в лаборатории'],
		['Спортзал', 'в спортзале'],
		['Душевые', 'в душевых'],
		['Карцер 1919', 'в карцере 1919'],
		['Камеры с 072 до 080', 'у камер с 072 до 080'],
		['Камеры с 1024 до 2017', 'у камер с 1024 до 2017'],
		['Камеры с 2018 до 2022', 'у камер с 2018 до 2022'],
		['Блок C', 'в блоке C'],
		['Блок D', 'в блоке D'],
		['Стрип-клуб Арона', 'в стрип-клубе Арона'],
		['Грибная ферма', 'на грибной ферме'],
		['Курятник', 'в курятнике'],
		['Подземный бассейн', 'в подземном бассейне'],
		['Баскетбольная площадка', 'на баскетбольной площадке'],
		['Комната охраны Уровня 1', 'в комнате охраны Уровня 1'],
		['Комната охраны Уровня 2', 'в комнате охраны Уровня 2'],
		['Комната охраны Уровня 3', 'в комнате охраны Уровня 3'],
		['Комната охраны Уровня 4', 'в комнате охраны Уровня 4'],
		['Пещера Йети', 'в пещере Йети'],
		['Засада на узкой тропе', 'в засаде на узкой тропе'],
		['Лестница на Уровни 1 и 4', 'на лестнице на Уровни 1 и 4'],
		['Лестница на Уровень 1', 'на лестнице на Уровень 1'],
		['Лестница на Уровень 2', 'на лестнице на Уровень 2'],
		['Лестница на Уровень 3', 'на лестнице на Уровень 3'],
		['Лестница на Уровень 4', 'на лестнице на Уровень 4'],
		['Лестница на Уровень 5', 'на лестнице на Уровень 5'],
		['Заброшенная зона', 'в заброшенной зоне'],
		['ТЮРЬМА', 'в ТЮРЬМЕ'],
		['Концовка императрицы', 'в Концовке императрицы'],
	]);

	function makeRussianWhere(whereArrays) {
		return whereArrays.forEach(function (whereArray) {
			TextManager.russianTextFormatter.setWhere(whereArray);
		});
	}
})();

[
	["Карин", "Карин", "Карин", "Карин", "Карин", "Карин"],
	["Тонкин", "Тонкина", "Тонкину", "Тонкина", "Тонкином", "Тонкине"],
	["Заключённый", "Заключённого", "Заключённому", "Заключённого", "Заключённым", "Заключённом"],
	["Охранник", "Охранника", "Охраннику", "Охранника", "Охранником", "Охраннике"],
	["Ясу", "Ясу", "Ясу", "Ясу", "Ясу", "Ясу"],
	["Император", "Императора", "Императору", "Императора", "Императором", "Императоре"],
	["Доктор Каргилл", "Доктора Каргилла", "Доктору Каргиллу", "Доктора Каргилла", "Доктором Каргиллом", "Докторе Каргилле"],
	["Арон", "Арона", "Арону", "Арона", "Ароном", "Ароне"],
	["Нойним", "Нойнима", "Нойниму", "Нойнима", "Нойнимом", "Нойниме"],
	["Гобриэль", "Гобриэля", "Гобриэлю", "Гобриэля", "Гобриэлем", "Гобриэле"]
].forEach((declensions) => {
	TextManager.russianTextFormatter.setDeclensions(declensions);
});

/**
 * This is necessary so that these names are correctly displayed in Russian when using an English save.
 */
[
	["Karryn", "Карин"],
	["Tonkin", "Тонкин"],
	["Inmate", "Заключённый"],
	["Guard", "Охранник"],
	["Yasu", "Ясу"],
	["Emperor", "Император"],
	["Dr. Cargill", "Доктор Каргилл"],
	["Cargill", "Доктор Каргилл"],
	["Aron", "Арон"],
	["Noinim", "Нойним"],
	["Gobriel", "Гобриэль"]
].forEach((translation) => {
	TextManager.russianTextFormatter.setTranslation(translation);
});

function makeRussianName(declensions) {
	TextManager.russianTextFormatter.setDeclensions(declensions);

	return declensions[0];
}
