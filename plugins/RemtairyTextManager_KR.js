
//Basic Strings
const LevelNameKR = "레벨";
const LevelAbbrKR = "Lv.";
const HPNameKR = "체력";
const HPAbbrKR = "HP";
const MPNameKR = "정력";
const MPAbbrKR = "EN";
const TPNameKR = "쾌락도";
const TPAbbrKR = "Ple";
const EXPNameKR = "경험치";
const EXPAbbrKR = "Exp";

//Param Strings
const MaxHPNameKR = "최대체력";
const MaxMPNameKR = "최대정력";
const AtkNameKR = "완력";
const DefNameKR = "인내력";
const MatNameKR = "손재주";
const MdfNameKR = "정신력";
const AgiNameKR = "민첩성";
const LukNameKR = "매력";

const CritDmgNameKR = "크리티컬 데미지";
const WpAtkNameKR = "공격력";
const WpDefNameKR = "방어력";
const OverblowProtectionNameKR = "데미지 경감률";
const FatigueNameKR = "피로도";
const FatigueGainNameKR = "피로축적량";
const FatigueRecoveryNameKR = "피로회복량";
const MaxWillpowerNameKR = "최대의지력";
const WillpowerNameKR = "의지력";
const WillpowerAbbrKR = "의지";
const CooldownTurnsSingularNameKR = "%1턴";
const CooldownTurnsPluralNameKR = "%1턴";
const CockinessNameKR = "대담함";

const XParamNameKR = [
"명중력",
"회피력",
"크리티컬률",
"크리티컬 회피율",
"스친 데미지",
"",
"카운터율",
"체력회복량",
"정력회복량",
"매턴 획득 쾌락"];

const SParamNameKR = [
"피격률",
"할버드 방어력",
"회복률",
"정신스킬 소모",
"할버드 공격력",
"의지력 회복량",
"의지스킬 소모",
"성스킬 소모",
"공격스킬 소모",
"경험률"];

//Elements String

const ElementSlashNameKR = "참격";
const ElementPierceNameKR = "관통";
const ElementBluntNameKR = "타격";
const ElementTalkNameKR = "청각";
const ElementSightNameKR = "시각";
const ElementPettingNameKR = "애무";
const ElementStripNameKR = "스트립";
const ElementAlmightyNameKR = "전체";
const ElementDrugsNameKR = "드러그";
const ElementStenchNameKR = "냄새";
const ElementSexNameKR = "섹스";

//Passive Categories
const PassiveCategoryNameKR = [
"\\I[56]전체",
"\\I[57]\\C[1]성욕(口)",
" ├입",
" ├키스",
" └오랄섹스",
"\\I[58]\\C[1]성욕(乳)",
" ├가슴",
" ├유두",
" └파이즈리",
"\\I[59]\\C[1]성욕(膣)",
" ├클리토리스",
" ├보지",
" ├애액",
" ├커널링",
" └질섹스",
"\\I[60]\\C[1]성욕(尻)",
" ├엉덩이",
" ├아날",
" └아날섹스",
"\\I[61]\\C[1]성욕(棒)",
" ├자지사랑",
" ├핸드잡",
" ├부카케",
" ├마시기",
" ├질내사정",
" └육체관계",
"\\I[44]\\C[1]가학성향",
" ├스테이터스",
" ├스킬", 
" ├내성",
" ├풋잡",
" └지배욕",
"\\I[45]\\C[1]피학성향",
" ├음담패설",
" ├약체화",
" ├아날빨기",
" ├페티시즘",
" └복종",
"\\I[46]\\C[1]자위",
" ├성충동",
" ├수면질",
" ├장난감",
" └절정",
"\\I[47]\\C[1]노출",
" ├시간",
" ├입음",
" ├벗음",
" └아르바이트"
];


//Command Strings
const FightNameKR = "전투";
const EscapeNameKR = "도주";
const AttackNameKR = "공격";
const GuardNameKR = "멘탈 페이즈 종료";
const ItemNameKR = "아이템";
const SkillNameKR = "패시브";
const EquipNameKR = "장비";
const StatusNameKR = "스테이터스";
const FormationNameKR = "파티";
const SaveNameKR = "세이브";
const LoadNameKR = "로드";
const DeleteNameKR = "삭제";
const GameEndNameKR = "종료";
const OptionsNameKR = "설정";
const WeaponNameKR = "무기";
const ArmorNameKR = "악세사리";
const KeyItemNameKR = "중요 아이템";
const Equip2NameKR = "장비";
const NewGameNameKR = "새로 시작";
const ContinueNameKR = "계속해서";
const ToTitleNameKR = "타이틀 화면으로";
const CancelNameKR = "취소";
const BuyNameKR = "샵";
const SellNameKR = "판매";

//Message Strings
const ActionFailureKR = "%1에게는 효과가 없다!";
const ActorDamageKR = "%1의 체력 감소!";
const ActorDrainKR = "%1's %2 are drained by %3 points!"; //currently unused
const ActorGainKR = "\\C[11]%1의 %3, %2 상승!";
const ActorLossKR = "\\C[2]%1의 %3, %2 상승!";
const ActorNoDamageKR = "%1, 데미지를 받지 않았다!";
const ActorNoHitKR = "\\C[6]스쳤다! %1, 데미지를 %2 받았다!";
const ActorNoDamageGrazeKR = "스쳤다! %1, 데미지를 받지 않았다!";
const ActorRecoveryKR = "%1's %2 are restored by %3 points!"; //currently unused
const CriticalToActorKR = "\\C[10]크리티컬!!";
const CriticalToEnemyKR = "크리티컬!!";
const DefeatTextKR = "%1 is exhausted!"; //currently unused
const EmergeTextKR = "%1 appears!"; //currently unused
const EnemyDamageKR = "%1, 스태미너에 %2 데미지를 받았다!";
const EnemyDrainKR = "%1's %2 are drained by %3 points!"; //currently unused
const EnemyGainKR = "%1의 %2, %3 상승!";
const EnemyLossKR = "%1의 %2, %3 감소!";
const EnemyNoDamageKR = "\\C[7]%1, 데미지를 받지 않았다!";
const EnemyNoHitKR = "\\C[8]스쳤다! %1에게 %2 데미지!";
const EnemyNoDamageGrazeKR = "\\C[7]스쳤다 %1, 데미지를 받지 않았다!";
const EnemyRecoveryKR = "%1, %2를 %3 회복했다!"; //currently unused
const EscapeFailureKR = "But they couldn't escape!"; //currently unused
const EscapeStartKR = "%1 runs away!"; //currently unused
const EvasionTextKR = "%1, 피했다!";
const SuperEffectiveTextKR = "효과가 대단했다!";
const NotEffectiveTextKR = "효과가 별로인 듯 하다......";
const SaveFileTextKR = "파일";
const LoadMessageKR = "어느 파일을 불러옵니까?";
const PreemptiveTextKR = "%1, 성공적으로 탈출했다!";
const SurpriseTextKR = "%1, 저항할 수 없다!";
const UseItemTextKR = "%1, %2 사용!";
const VictoryTextKR = "%1 победила!"; //currently unused
const CounterAttackTextKR = "%1, 반격!";


const WardenNameKR = "간수레벨";
const WardenLvlLimitKR = "간수레벨 상한";
const SlutNameKR = "빗치 레벨";
const StatLevelNameKR = "%1레벨";
const DayNameKR = "일째";
const OrderNameKR = "질서";
const OrderChangeNameKR = "통제력";
const CorruptionNameKR = "타락";
const TitlesNameKR = "칭호";
const FundingNameKR = "자금";
const LedgerNameKR = "《 회계장부 》";
const IncomeNameKR = "수입";
const BarIncomeNameKR = "주점 수입";
const StoreIncomeNameKR = "샵 수입";
const OutsourcingIncomeNameKR = "잔업 수입";
const NerdBlackmailNameKR = "오타쿠에게 헌납";
const ExpenseNameKR = "비용";
const EstimatedSubsidiesNameKR = "지원금";
const EstimatedProfitNameKR = "다음날 수입";
const EstimatedLossNameKR = "다음날 지출";

const SecretaryModeNameKR = "비서 모드";
const WardenModeNameKR = "간수 모드";
const PrisonerModeNameKR = "죄수 모드";

const SecretaryFreePlayModeNameKR = "비서 프리 모드";
const WardenFreePlayModeNameKR = "간수 프리 모드";
const PrisonerFreePlayModeNameKR = "죄수 프리 모드";

const SecretaryChallengeRunNameKR = "비서 챌린징 모드";
const WardenChallengeRunNameKR = "간수 챌린징 모드";
const PrisonerChallengeRunNameKR = "죄수 챌린징 모드";

const SecretaryDescensionRunNameKR = "비서 타천 모드";
const WardenDescensionRunNameKR = "간수 타천 모드";
const PrisonerDescensionRunNameKR = "죄수 타천 모드";

//Right Click Status
const RCMenuSleepQualityNegTwoTextKR = "\\C[7]어제 잠자리 : 거의 못 잤다... \\C[0](\\C[18]스테이터스 -10%, 매력 -20%\\C[0])";
const RCMenuSleepQualityNegOneTextKR = "\\C[7]어제 잠자리 : 별로 못 잤다... \\C[0](\\C[2]스테이터스 -5%, 매력 -10%\\C[0])";
const RCMenuSleepQualityZeroTextKR = "\\C[8]어제 잠자리 : 잘 잤다.\\C[0]";
const RCMenuSleepQualityOneTextKR = "\\C[0]어제 잠자리 : 푹 잤다. (\\C[24]스테이터스 +3%\\C[0])";
const RCMenuSleepQualityTwoTextKR = "\\C[0]어제 잠자리 : 숙면이었다. (\\C[29]스테이터스 +6%\\C[0])";
const RCMenuSleepQualityThreeTextKR = "\\C[0]어제 잠자리 : 최고의 숙면을 맛봤다. (\\C[28]스테이터스 +9%\\C[0])";

const RCMenuFatigueLevelOneTextKR = "\\C[0]피로 : 약간 피로가 느껴진다. (\\C[2]스테이터스 -10%\\C[0])";
const RCMenuFatigueLevelTwoTextKR = "\\C[0]피로 : 피로가 느껴진다... (\\C[2]스테이터스 -20%\\C[0])";
const RCMenuFatigueLevelThreeTextKR = "\\C[8]피로 : 피곤하다... \\C[0](\\C[10]스테이터스 -30%\\C[0])";
const RCMenuFatigueLevelFourTextKR = "\\C[7]피로 : 꽤 피곤하다... \\C[0](\\C[18]스테이터스 -40%, 도주 불가\\C[0])";
const RCMenuFatigueLevelFiveTextKR = "\\C[7]피로 : 엄청나게 피곤하다...... \\C[0](\\C[18]스테이터스 -50%, 도주 불가\\C[0])";
const RCMenuFatigueLevelFourHardTextKR = "\\C[7]피로 : 피로감이 엄청나다... \\C[0](\\C[18]스테이터스 -40%\\C[0])";
const RCMenuFatigueLevelFiveHardTextKR = "\\C[7]피로 : 온몸이 피로에 찌들었다...... \\C[0](\\C[18]스테이터스 -50%\\C[0])";

const RCMenuArousedLevelOneTextKR = "\\C[27]흥분상태 : 발정했다...\\C[0]";
const RCMenuArousedLevelTwoTextKR = "\\C[5]흥분상태 : 완전히 발정했다...\\C[0]";

const RCMenuFrustratedLevelOneTextKR = "\\C[27]흥분상태 : 몸이 달아오른다...\\C[0]";
const RCMenuFrustratedLevelTwoTextKR = "\\C[5]흥분상태 : 몸이 상당히 달아오른다...\\C[0]";

const RCMenuNightModeTextKR = "\\C[27]야한 모습으로 완전히 주목을 끌고 있다......\\C[0]";

const RCMenuLostPantiesTextKR = "\\C[27]노팬티로 순회중.\\C[0]";

const RCMenuDefiledHalberdTextKR = "\\C[7]할버드 : 더럽혀졌다... \\C[0]";

const RCMenuMetalSingleTextKR = "\\C[0]메탈 죄수를 격퇴했다. (\\C[11]경험치 +%1%\\C[0])";
const RCMenuMetalPluralTextKR = "\\C[0]메탈 죄수를 %2명 격퇴했다. (\\C[11]경험치 +%1%\\C[0])";

const RCMenuGiftsSingleTextKR = "\\C[0]받은 하사품 : \\C[0]";
const RCMenuGiftsPluralTextKR = "\\C[0]받은 하사품 : \\C[0]";

const RCMenuMealOneTextKR = "\\C[0]전속 셰프에게 요리를 대접받았다 : (\\C[11]경험치 +50%\\C[0])";
const RCMenuMealTwoTextKR = "\\C[0]전속 셰프에게 요리를 대접받았다 : (\\C[11]체력회복량, 정력회복량, 의지력회복량 +5%\\C[0])";
const RCMenuMealThreeTextKR = "\\C[0]전속 셰프에게 요리를 대접받았다 : (\\C[11]체력 +15%, 절정의 정력 데미지 경감\\C[0])";
const RCMenuMealFourTextKR = "\\C[0]전속 셰프에게 요리를 대접받았다 : (\\C[27]흥분할 확률이 매턴 상승\\C[0])";
const RCMenuMealFiveTextKR = "\\C[0]전속 셰프에게 요리를 대접받았다 : (\\C[27]가슴, 보지감도 +50%\\C[0])";
const RCMenuMealSixTextKR = "\\C[0]전속 셰프에게 요리를 대접받았다 : (\\C[11]완력, 손재주, 민첩성 +5%\\C[0])";
const RCMenuMealSevenTextKR = "\\C[0]전속 셰프에게 요리를 대접받았다 : (\\C[11]피로축적 -33%\\C[0])";
const RCMenuMealEightTextKR = "\\C[0]전속 셰프에게 요리를 대접받았다 : (\\C[11]애무내성, 섹스내성 +20%\\C[0])";
const RCMenuMealNineTextKR = "\\C[0]전속 셰프에게 요리를 대접받았다 : (\\C[11]적 공격성 격감\\C[0])";
const RCMenuMealTenTextKR = "\\C[0]전속 셰프에게 요리를 대접받았다 : (\\C[27]입감도, 아날감도 +50%\\C[0])";

const RCMenuStoreItemOneTextKR = "\\C[0]샵에서 아이템 사용. (\\C[11]피로축적 -20% \\C[10]스테이터스 -5%\\C[0])";
const RCMenuStoreItemTwoTextKR = "\\C[0]샵에서 아이템 사용. (\\C[11]할버드 크리티컬률 +25% \\C[10]할버드 방어력 -10%\\C[0])";
const RCMenuStoreItemThreeTextKR = "\\C[0]샵에서 아이템 사용. (\\C[11]참격내성, 타격내성, 관통내성 +25% \\C[10]체력회복량 -2%\\C[0])";
const RCMenuStoreItemFourTextKR = "\\C[0]샵에서 아이템 사용. (\\C[11]벗겨짐내성 +30% \\C[10]매력 (아르바이트 중) -15%\\C[0])";
const RCMenuStoreItemFiveTextKR = "\\C[0]샵에서 아이템 사용. (\\C[11]매력 (아르바이트 중) +15% \\C[10]청각내성, 벗겨짐내성 -15%\\C[0])";

const PrisonLevelNameKR = "레벨";
const PrisonLevelStatusUnknownKR = "???????";
const PrisonLevelStatusAnarchyKR = "폭동중";
const PrisonLevelStatusSubjugatedKR = "제압됨";
const PrisonLevelStatusRiotingKR = "폭동발생!!";

const PrisonMapLevelNameKR = "레벨%1 : ";
const PrisonMapOutsideNameKR = "요새 가난 : ";
const PrisonMapUnknownNameKR = "요새내";
const PrisonMapUndiscoveredNameKR = "???";
const PrisonMapWeddingNameKR = "결혼식";
const PrisonMapLevelFiveNameKR = "레벨5";
const PrisonMapEndlessPrisonNameKR = "끝없는 프리즌 배틀";
const PrisonMapEndlessHellNameKR = "끝없는 헬 배틀";
const PrisonMapCustomNameKR = "커스텀 배틀";

const KissingLevelKR = "키스레벨";
const PettingLevelKR = "애무레벨";
const HandjobLevelKR = "핸드잡레벨";
const BlowjobLevelKR = "오랄섹스레벨";
const FootjobLevelKR = "풋잡레벨";
const RimjobLevelKR = "항문빨기레벨";
const TittyFuckLevelKR = "파이즈리레벨";
const PussyLevelKR = "질섹스레벨";
const AnalLevelKR = "아날섹스레벨";
const MasturbationLevelKR = "자위레벨";
const SadismLevelKR = "새드레벨";
const MasochismLevelKR = "마조레벨";

const MouthSensitivityKR = "입감도";
const FingerSensitivityKR = "손감도";
const BoobsSensitivityKR = "가슴감도";
const NipplesSensitivityKR = "유두감도";
const ClitorisSensitivityKR = "클리감도";
const PussySensitivityKR = "보지감도";
const ButtSensitivityKR = "아날감도";
const AnalSensitivityKR = "아날감도";
const FootSensitivityKR = "발감도";
const TalkSensitivityKR = "청각감도";
const SightSensitivityKR = "시각감도";
const SwallowSensitivityKR = "삼키기감도";
const PussyCreampieSensitivityKR = "질사정감도";
const AnalCreampieSensitivityKR = "아날사정감도";
const BukkakeSensitivityKR = "부카케감도";
const ButtSpankingSensitivityKR = "스팽킹감도";

//Status Menu
const StatusMenuPrimaryKR = "스테이터스 1";
const StatusMenuSecondaryKR = "스테이터스 2";
const StatusMenuProfileKR = "이력";
const StatusMenuTertiaryKR = "스테이터스 3";
const StatusMenuRecordsKR = "체험기록";
const StatusMenuDesiresKR = "필요성욕";
const StatusMenuEffectsKR = "몸상태";

const StatusMenuStatsKR = "스테이터스";
const StatusMenuStatLevelsKR = "《 스테이터스 레벨 》";
const StatusMenuAttributesKR = "《 전투능력 》";
const StatusMenuResistsKR = "《내성 》";
const StatusMenuLevelsKR = "《 성 레벨 》";
const StatusMenuSensitivitiesKR = "《 성감도 》";

const StatusMenuMouthDesireReqKR = "《 필요성욕(口) 》";
const StatusMenuBoobsDesireReqKR = "《 필요성욕(乳) 》";
const StatusMenuPussyDesireReqKR = "《 필요성욕(膣) 》";
const StatusMenuButtDesireReqKR = "《 필요성욕(尻) 》";
const StatusMenuCockDesireReqKR = "《 필요성욕(棒) 》";

const ProfileNameTextKR = "이름 : ";
const ProfileAgeTextKR = "나이 : ";
const ProfileThreeSizesTextKR = "쓰리사이즈 : ";
const ProfileBioTextKR = "경력";

const ProfileNameKR = "카린";
const ProfileThreeSizesKR = "110(K컵)-59-100cm";
const ProfileThreeSizesHCupKR = "96(H컵)-59-100cm";
const ProfileBio_One_KR = [
"자나도스 제국 황제의 직속비서로 이름을 날리기까지 말 그대로 초속으로 도달한 정진정명 엘리트.", 
"유년기부터 우수한 성적과 신체능력으로 타인을 압도하는 재능으로 커리어 단계를 참으로 손쉽게 쌓아올렸다.",
"또한, 그 축복받은 미모와 체형에 절대적인 자신을 갖고 잇어 자존심도 매우 높다."
];

const ProfileRecordFirstKR = "첫경험 : ";
const ProfileRecordLastKR = "마지막 경험 : ";
const ProfileRecordSecretKR = "\\C[7]비밀\\C[0]";
const ProfileRecordNeverKR = "\\C[29]미경험\\C[0]";

const ProfileRecordKissKR = "키스";
const ProfileRecordSexKR = "섹스";
const ProfileRecordAnalKR = "아날";
const ProfileRecordHandjobKR = "핸드잡";
const ProfileRecordBlowjobKR = "오랄섹스";
const ProfileRecordTittyFuckKR = "파이즈리";
const ProfileRecordFootjobKR = "풋잡";
const ProfileRecordRimjobKR = "항문빨기";
const ProfileRecordSwallowKR = "삼키기";
const ProfileRecordPussyCreampieKR = "질내사정";
const ProfileRecordAnalCreampieKR = "아날사정";
const ProfileRecordBodyBukkakeKR = "몸 사정";
const ProfileRecordFaceBukkakeKR = "안면사정";

const ProfileRecordCunnilingusKR = "커널링";
const ProfileRecordSuckFingersKR = "손가락빨기";
const ProfileRecordButtSpankKR = "스팽킹";
const ProfileRecordBoobsPettingKR = "가슴애무";
const ProfileRecordNipplesPettingKR = "유두애무";
const ProfileRecordClitPettingKR = "클리애무";
const ProfileRecordPussyPettingKR = "보지애무";
const ProfileRecordButtPettingKR = "엉덩이애무";
const ProfileRecordAnalPettingKR = "아날애무";
const ProfileRecordClitToyKR = "클리 장난감";
const ProfileRecordPussyToyKR = "보지 장난감";
const ProfileRecordAnalToyKR = "아날 장난감";
const ProfileRecordPussySexKR = "질섹스";
const ProfileRecordAnalSexKR = "아날섹스";


const ProfileRecordFirstKissKR = "첫키스는 \\C[26]%1일째\\C[0]에 %3에서  \\C[31]%2\\C[0]와 했다.";
const ProfileRecordFirstKissWasPenisKR = "첫키스 상대는 \\C[26]%1일째\\C[0] %3에서 본 \\C[31]%2\\C[0]의 귀두였다.";
const ProfileRecordFirstKissWasAnusKR = "기념스러운 첫키스 상대는 \\C[26]%1일째\\C[0]에 %3에서 본 \\C[31]%2\\C[0]의 아날이었다.";

const ProfileRecordLastKissKR = "\\C[26]%1일째\\C[0]에 %3에서 \\C[31]%2\\C[0]와 키스했다.";
const ProfileRecordFirstSexKR = "\\C[26]%1일째\\C[0]에 %3에서 \\C[31]%2\\C[0]에게 처녀를 빼앗겼다.";
const ProfileRecordFirstPussySexWasDildoKR = "\\C[26]%1일째\\C[0]에 %3에서 \\C[31]%2\\C[0]의 딜도에게 처녀를 빼앗겼다.";
const ProfileRecordLastSexKR = "\\C[26]%1일째\\C[0]에 %3에서 \\C[31]%2\\C[0]와 섹스했다.";
const ProfileRecordFirstAnalKR = "\\C[26]%1일째\\C[0]에 %3에서 \\C[31]%2\\C[0]에게 아날처녀를 빼앗겼다.";
const ProfileRecordLastAnalKR = "\\C[26]%1일째\\C[0]에 %3에서 \\C[31]%2\\C[0]와 아날섹스했다.";
const ProfileRecordFirstHandjobKR = "\\C[26]%1일째\\C[0]에 %3에서 \\C[31]%2\\C[0]에게 처음으로 자지를 문질렀다.";
const ProfileRecordLastHandjobKR = "\\C[26]%1일째\\C[0]에 %3에서 \\C[31]%2\\C[0]에게 손으로 했다.";
const ProfileRecordFirstBlowjobKR = "\\C[26]%1일째\\C[0]에 %3에서 \\C[31]%2\\C[0]에게 처음으로 입으로 했다.";
const ProfileRecordLastBlowjobKR = "\\C[26]%1일째\\C[0]에 %3에서 \\C[31]%2\\C[0]에게 입으로 빨았다.";
const ProfileRecordFirstTittyFuckKR = "\\C[26]%1일째\\C[0]에 %3에서 \\C[31]%2\\C[0]에게 처음으로 파이즈리 했다.";
const ProfileRecordLastTittyFuckKR = "\\C[26]%1일째\\C[0]에 %3에서 \\C[31]%2\\C[0]에게 파이즈리 했다.";

const ProfileRecordFirstFootjobKR = "\\C[26]%1일째\\C[0]에 %3에서 \\C[31]%2\\C[0]에게 처음으로 발로 문질렀다.";
const ProfileRecordLastFootjobKR = "\\C[26]%1일째\\C[0]에 %3에서 \\C[31]%2\\C[0]에게 발로 했다.";
const ProfileRecordFirstRimjobKR = "\\C[26]%1일째\\C[0]에 %3에서 생전 처음으로 \\C[31]%2\\C[0]의 아날을 빨았다.";
const ProfileRecordLastRimjobKR = "\\C[26]%1일째\\C[0]에 %3에서 \\C[31]%2\\C[0]의 아날을 빨았다.";

const ProfileRecordFirstBukkakeKR = "\\C[26]%1일째\\C[0]에 %3에서 \\C[31]%2\\C[0]에게 처음 몸에 사정당했다.";
const ProfileRecordLastBukkakeKR = "\\C[26]%1일째\\C[0]에 %3에서 \\C[31]%2\\C[0]에게 몸에 사정당했다.";
const ProfileRecordFirstFaceBukkakeKR = "\\C[26]%1일째\\C[0]에 %3에서 \\C[31]%2\\C[0]에게 처음 안면사정 당했다.";
const ProfileRecordLastFaceBukkakeKR = "\\C[26]%1일째\\C[0]에 %3에서 \\C[31]%2\\C[0]에게 안면사정 당했다.";

const ProfileRecordFirstSwallowKR = "\\C[26]%1일째\\C[0]에 %3에서 처음으로 \\C[31]%2\\C[0]의 정액을 마셨다.";
const ProfileRecordLastSwallowKR = "\\C[26]%1일째\\C[0]에 %3에서 \\C[31]%2\\C[0]의 정액을 마셨다.";
const ProfileRecordFirstPussyCreampieKR = "\\C[26]%1일째\\C[0]에 %3에서 \\C[31]%2\\C[0]에게 처음으로 질내사정 당했다.";
const ProfileRecordLastPussyCreampieKR = "\\C[26]%1일째\\C[0]에 %3에서 \\C[31]%2\\C[0]에게 질내사정 당했다.";
const ProfileRecordFirstAnalCreampieKR = "\\C[26]%1일째\\C[0]에 %3에서 \\C[31]%2\\C[0]에게 처음으로 아날사정 당했다.";
const ProfileRecordLastAnalCreampieKR = "\\C[26]%1일째\\C[0]에 %3에서 \\C[31]%2\\C[0]에게 아날사정 당했다.";


const StatusRecordDaysSingularKR = "일";
const StatusRecordDaysPluralKR = "일";
const StatusRecordTimesSingularKR = "회";
const StatusRecordTimesPluralKR = "회";
const StatusRecordJustPeopleSingularKR = "명";
const StatusRecordJustPeoplePluralKR = "명";
const StatusRecordDifferentPeopleSingularKR = "명";
const StatusRecordDifferentPeoplePluralKR = "명";

const StatusRecordDateKR = "내가 교도소에 착임하고 %1일이 경과했다.";
const StatusRecordDateSlutKR = "요새 가난에서 살기 시작해 %1일이나 지났어♥";
const StatusRecordFightKR = "전투에서 %1명을 격퇴했지만, %2번 패배했다.";
const StatusRecordFightSlutKR = "%1명 해치웠지만 %2번은 졌어♥";
const StatusRecordFightSubduedOnlyKR = "전투에서 %1명 격퇴했다.";
const StatusRecordStripKR = "옷을 %1번 벗겨졌다. 그 중에 %2번은 팬티를 벗겨졌다.";
const StatusRecordStripSlutKR = "사람들 앞에서 %1번 벗고 %2번은 노팬티로 돌아다녔어♥";
const StatusRecordKissKR = "%2명과 입맞춤을 나눴다. 총 %1번 입을 맞췄다.";
const StatusRecordKissSlutKR = "나랑 키스 한 남자는 %2명인데 %1번이나 키스했어♥";
const StatusRecordBoobsPettedKR = "%2명이 가슴을 만졌다. 총 %1번 가슴을 만져졌다.";
const StatusRecordBoobsPettedSlutKR = "%2명에게 가슴을 만지게 해주고, %1번 만져졌어♥";
const StatusRecordNipplesPettedKR = "%2명에게 유두를 잡혔다. 총 %1번 잡혔다.";
const StatusRecordNipplesPettedSlutKR = "%2명이 유두를 잡아당겼어♥ 다해서 %1번 꼬집혔어♥";
const StatusRecordClitPettedKR = "%2명이 내 클리토리스를 만졌다. 총 %1번 만져졌다.";
const StatusRecordClitPettedSlutKR = "내 클리를 문지른 남자는 %2명♥ 다해서 %1번 만져졌어♥";
const StatusRecordPussyPettedKR = "내 보지를 %2명이 만졌다. 총 %1번 만져졌다.";
const StatusRecordPussyPettedSlutKR = "%2명이 보지를 애무해줬어♥ 다해서 %1번 만져졌어♥";
const StatusRecordButtPettedKR = "내 엉덩이를 %2명이 만졌다. 총 %1번 만져졌다.";
const StatusRecordButtPettedSlutKR = "%2명이 엉덩이를 주물렀어♥ 다해서 %1번 만져졌어♥";
const StatusRecordAnalPettedKR = "내 아날에 %2명이 손가락을 넣었다. 총 %1번 당했다.";
const StatusRecordAnalPettedSlutKR = "%2명이 아날을 쑤걱쑤걱했어♥ 다해서 %1번 넣어줬어♥";
const StatusRecordMasturbateKR = "내가 자위한 횟수는 %1번. 남자들 자위를 목격한 횟수는 %2번.";
const StatusRecordMasturbateSlutKR = "다양한 장소에서 %1번이나 자위했어♥ 남자들이 딸딸이치는 모습도 %2번 봤어♥";
const StatusRecordSexPartnersKR = "나와 성적인 관계를 맺은 남자는 %1명.";
const StatusRecordSexPartnersSlutKR = "%1명이란 야한짓 했어♥";
const StatusRecordHandjobKR = "%2명에게 손으로 해줬다. 총 %1번 해줬다.";
const StatusRecordHandjobSlutKR = "자지 %2개에다 손으로 문질러줬어♥ 다해서 %1번이나♥";
const StatusRecordBlowjobKR = "%2명에게 입으로 해줬다. 총 %1번 해줬다.";
const StatusRecordBlowjobSlutKR = "%2명의 자지를 빨아줬어♥ 다해서 %1번 빨아줬어♥";
const StatusRecordTittyFuckKR = "%2명에게 가슴으로 해줬다. 총 %1번 해줬다.";
const StatusRecordTittyFuckSlutKR = "%2명의 자지를 가슴에다 끼웠어♥ 다해서 %1번 끼워줬어♥";
const StatusRecordFootjobKR = "%2명에게 발로 해줬다. 총 %1번 해줬다.";
const StatusRecordFootjobSlutKR = "%2명 자지를 발로 문질렀어♥ 다해서 %1번 문질러줬어♥";
const StatusRecordRimjobKR = "내가 아날을 핥은 사람은 %2명. 총 %1번 핥았다.";
const StatusRecordRimjobSlutKR = "내가 아날을 빨아준 사람은 %2명♥ %1번이나 빨아줬어♥";
const StatusRecordCunniKR = "%2명이 내 거기를 핥았다. 총 %1번 당했다";
const StatusRecordCunniSlutKR = "%2명이 내 보지를 빨아줬어♥ 다해서 %1번 빨아주더라♥";
const StatusRecordSpankedKR = "내 엉덩이를 때린 남자는 %2명. 총횟수는 %1번.";
const StatusRecordSpankedSlutKR = "%2명이 내 에로엉덩이를 때려줬어♥ 전부 %1번 때려줬어♥";
const StatusRecordPussySexKR = "나와 섹스한 남자는 %2명. 총 %1번 섹스했다.";
const StatusRecordPussySexSlutKR = "%2명이랑 섹스했다♥ 다해서 %1번♥";
const StatusRecordAnalSexKR = "내 엉덩이에 삽입한 남자는 %2명. 총 %1번 했다.";
const StatusRecordAnalSexSlutKR = "%2명이 내 아날을 써줬어♥ %1번이나♥";
const StatusRecordGangbangKR = "내가 %2명과 단체로 섹스했다. 총 %1번 했다.";
const StatusRecordGangbangSlutKR = "%2명이랑 신나게 섹스♥ %1번♥";
const StatusRecordOrgasmKR = "내가 사정시킨 남자는 %2명. 자지를 %1번 가게했다. 정액량은 %3ml.";
const StatusRecordOrgasmSlutKR = "내가 보낸 남자는 %2명♥ 자지를 %1번 가게했어♥ 그렇게 정액 %3ml 짜냈어♥";
const StatusRecordSwallowKR = "%2개 자지에서 정액을 마셨다. %1번 정액을 마셨다. 마신 정액은 총 %3ml.";
const StatusRecordSwallowSlutKR = "자지밀크 마신 자지는 %2개♥ 횟수는 %1번♥ 양은 %3ml♥";
const StatusRecordPussyCreampieKR = "내 보지에다 사정한 남자는 %2명. 총횟수는 %1번. 정액량은 %3ml.";
const StatusRecordPussyCreampieSlutKR = "내 보지에 %2명이 싸줬어♥ 횟수는 %1번♥ 양은 %3ml♥";
const StatusRecordAnalCreampieKR = "내 아날에다 사정한 남자는 %2명. 총횟수는 %1번. 정액량은 %3ml.";
const StatusRecordAnalCreampieSlutKR = "내 아날에다 %2명이 싸줬어♥ 횟수는 %1번♥ 양은 %3ml♥";

const StatusRecordFingersSuckedKR = "내가 손가락을 빤 남자는 %2명. 총 %1번 빨았다.";
const StatusRecordFingersSuckedSlutKR = "%2명에 손가락을 빨아줬어♥ 다해서 %1번 빨았어♥";
const StatusRecordBukkakeKR = "나에게 정액을 뿌린 남자는 %2명. 총횟수는 %1번. 양은 %3ml.";
const StatusRecordBukkakeSlutKR = "나에게 정액을 뿌려준 남자는 %2명♥ 횟수는 %1번♥ 양은 %3ml♥";
const StatusRecordFaceBukkakeKR = "내 얼굴에다 정액을 뿌린 남자는 %2명. 총횟수는 %1번. 양은 %3ml.";
const StatusRecordFaceBukkakeSlutKR = "%2명이 얼굴에다 정액을 쏴줬어♥ 횟수로는 %1번이고♥ 양은 %3ml나♥";

//StatusBattleEffectはステータスメニューの「状態」に書いてる
const StatusBattleEffectOrgasmKR = "[쾌락 : \\C[5]절정중\\C[0]! 아무것도 할 수 없다!";
const StatusBattleEffectCoolKR = "[감정 : \\C[4]냉정\\C[0]] 명중률, 회피율, 크리티컬률, 크리티컬 회피율이 약간 상승.\n[감정 : \\C[4]냉정\\C[0]] 모든 회복량이 약간 상승.";
const StatusBattleEffectIsHornyZeroKR = "[쾌락 : \\C[18]흥분중!\\C[0]] 모든 보디터치내성이 감소.";
const StatusBattleEffectIsHornyOneKR = "[쾌락 : \\C[18]흥분중!\\C[0]] 모든 보디터치내성이 감소. 모든 성욕이 조금씩 상승.[매턴]";
const StatusBattleEffectIsHornyTwoKR = "[쾌락 : \\C[18]흥분중!\\C[0]] 모든 보디터치내성이 감소. 억제 스킬 소모 상승.[매턴]\n[쾌락 : \\C[18]흥분중!\\C[0]] 모든 성욕이 매턴 조금씩 상승.";
const StatusBattleEffectIsHornyThreeKR = "[쾌락 : \\C[18]흥분중!\\C[0]] 회피율, 명중률, 모든 보디터치내성이 감소. 억제 스킬 소모 상승.[매턴]\n[쾌락 : \\C[18]흥분중!\\C[0]] 모든 성욕이 조금씩 상승.[매턴]";
const StatusBattleEffectIsArousedKR = "[쾌락 : \\C[27]발정중!\\C[0]] 보지가 서서히 \\C[23]젖는다\\C[0]. [매턴]";
const StatusBattleEffectNotArousedKR = "[쾌락 : 미발정] 보지가 안 젖었다.";
const StatusBattleEffectIsWetKR = "[보지 : \\C[23]젖었다!\\C[0]] 삽입가능.";
const StatusBattleEffectNotWetKR = "[보지 : 안 젖었다] 삽입 불가능.";
const StatusBattleEffectIsWearingPantiesKR = "[팬티 : 입었다] 옷이 벗겨지지 않는 한 하반신 접촉을 막는다.";
const StatusBattleEffectIsNotWearingPantiesKR = "[팬티 : \\C[27]안 입었다!\\C[0]] 옷이 벗겨지면 하반신 접촉이 허용된다.";
const StatusBattleEffectIsVirginPublishedKR = "[성경험 정보 : \\C[27]처녀임이 알려졌다!\\C[0]] 전투중 매력 상승.";
const StatusBattleEffectIsVirginHighKR = "[성경험 정보 : \\C[27]처녀란 소문이 퍼진다!\\C[0]] 전투중 매력 상승.";
const StatusBattleEffectIsVirginMedKR = "[성경험 정보 : \\C[27]처녀의혹을 가진 사람이 늘고있다!\\C[0]] 전투중 매력 약간 상승.";
const StatusBattleEffectIsVirginLowKR = "[성경험 정보 : \\C[27]아직 미경험인 사실이 알려지지 않았다\\C[0]] 매력에 영향 없음.";


const StatusBattleEffectIsConfidentZeroKR = "[감정 : \\C[30]자신감!\\C[0]] 모든 스테이터스 상승!";
const StatusBattleEffectIsConfidentOneKR = "[감정 : \\C[30]자신감!\\C[0]] 모든 스테이터스가 대담함에 따라 상승!";

const StatusBattleEffectIsFrustratedKR = "[감정 : \\C[18]욱신거린다!\\C[0]] 공격력 상승과 맞바꿔 방어력, 민첩성, 명중률, 크리티컬 회피율 감소!";

const StatusBattleEffectDisarmedKR = "[무기 : \\C[18]없음\\C[0]] 할버드를 주워 재무장 가능.";
const StatusBattleEffectDefiledHalberdKR = "[무기 : \\C[18]사용불가\\C[0]] 할버드가 더러워서 장비불가. [침대에서 쉬면 가능]";
const StatusBattleEffectOffBalancedKR = "[상태 : \\C[18]균형잃음\\C[0]] 공격력, 방어력, 회피율 감소.";
const StatusBattleEffectWeakenKR = "[상태 : \\C[18]약체화\\C[0]] 완력, 공격력 감소.";
const StatusBattleEffectDizzyKR = "[상태 : \\C[18]어지러움\\C[0]] 명중률, 회피율 감소.";
const StatusBattleEffectSlowKR = "[상태 : \\C[18]슬로우\\C[0]] 민첩성 대폭 하락!";
const StatusBattleEffectVulnerableKR = "[상태 : \\C[18]빈틈\\C[0]] 방어력 감소.";
const StatusBattleEffectPoisonKR = "[상태 : \\C[18]독\\C[0]] 체력이 감소한다. [매턴]";
const StatusBattleEffectYetiHeatAuraOneKR = "[상태 : \\I[18]예티의 열기\\C[0]] 체력회복량 대폭 감소!";
const StatusBattleEffectYetiHeatAuraTwoKR = "[상태 : \\I[18]예티의 열기\\C[0]] 체력회복량, 의지력회복량 대폭 감소!";
const StatusBattleEffectExposeWeaknessKR = "[상태 : \\C[18]약점 들킴\\C[0]] 회피율, 크리티컬 회피율, 모든내성 감소.";
const StatusBattleEffectAttackComboKR = "[공격 콤보 : \\C[2]%1회\\C[0]] 다음 공격시 데미지, 명중률, 스킬 소모 상승.";
const StatusBattleEffectAttackComboCockyKR = "콤보 4회 이상이면 대담함 상승.";
const StatusBattleEffectSexComboOneKR = "[섹스 콤보 : \\C[2]%1회\\C[0]] 다음 공격시 성스킬 쾌락 데미지와 스킬 소모 상승. [애무제외]";
const StatusBattleEffectSexComboTwoKR = "그리고 같은 상대가 같은 성스킬을 연속해서 사용하면 쾌락 데미지와 스킬 소모 대폭 상승. [애무제외]";

const StatusBattleEffectDanceComboKR = "[댄스 콤보 : \\C[2]%1회\\C[0]] 다음 댄스스킬 쾌락 데미지와 체력 소모 상승.";


const StateTooltipsRemainingTurnsSingularKR = "\\c[27](남은 턴 : 1턴)\\c[0]";
const StateTooltipsRemainingTurnsPluralKR = "\\c[27](남은 턴 : %1턴)\\c[0]";

const StateTooltipsOrgasmKR = "\\C[5][절정중!]\\C[0]\n지금은 아무것도 할 수 없다!";
const StateTooltipsSlashStanceKR = "\\I[42]\\C[4]쓰러스트 계열\\C[0]에 약함\n\\I[42]\\C[2]스트라이크 계열\\C[0]에 강함";
const StateTooltipsPierceStanceKR = "\\I[42]\\C[2]스트라이크 계열\\C[0]에 약함\n\\I[42]\\C[3]슬래쉬 계열\\C[0]에 강함";
const StateTooltipsBluntStanceKR = "\\I[42]\\C[3]슬래쉬 계열\\C[0]에 약함\n\\I[42]\\C[4]쓰러스트 계열\\C[0]에 강함";
const StateTooltipsHornyZeroKR = "\\C[18][흥분중!]\\C[0]\n\\I[42]모든 보디터치내성 감소";
const StateTooltipsHornyOneKR = "\\C[18][흥분중!]\\C[0]\n\\I[42]모든 보디터치내성 감소\n\\I[40]모든 성욕 조금씩 상승\n[매턴]";
const StateTooltipsHornyTwoKR = "\\C[18][흥분중!]\\C[0]\n\\I[42]모든 보디터치내성 감소\n\\I[42]억제스킬 소모 상승\n\\I[40]모든 성욕 조금씩 상승\n[매턴]";
const StateTooltipsHornyThreeKR = "\\C[18][흥분중!]\\C[0]\n\\I[42]회피율 감소\n\\I[42]명중률 감소\n\\I[42]모든 보디터치내성 감소\n\\I[42]억제스킬 소모 상승\n\\I[40]모든 성욕 조금씩 상승\n[매턴]";


const StateTooltipsEnemyHornyKR = "\\C[18][흥분중!]\\C[0]\n\\I[42]판단력 상승\n\\I[42]공격성 감소\n\\I[42]모든내성 감소\n\\I[42]매력 필요수치 감소\n\\I[40]사정량 상승";

const StateTooltipsCoolKR = "\\C[4][냉정]\\C[0]\n\\I[42]명중률 약간 상승\n\\I[42]회피율 약간 상승\n\\I[42]크리티컬률 약간 상승\n\\I[42]크리티컬 회피율 약간 상승\n\\I[42]모든 회복량 약간 상승";

const StateTooltipsIsWetKR = "\\C[23][보지가 젖었다!]\n\\I[40]\\C[0]삽입가능";
const StateTooltipsNotWetKR = "[보지가 안 젖었다]\n\\I[42]삽입불가";
const StateTooltipsWearingPantiesKR = "[팬티를 입고있다]\n\\I[42]옷이 벗겨지지 않는 한 하반신 접촉을 막는다.";
const StateTooltipsNotWearingPantiesKR = "\\C[27][팬티를 안 입었다!]\\C[0]\n\\I[40]옷이 벗겨지면 하반신 접촉이 허용된다.";
const StateTooltipsVirginPublishedKR = "\\C[27][처녀 유무가 공개되었다!]\\C[0]\n\\I[40]매력 증가";
const StateTooltipsVirginHighKR = "\\C[27][처녀의혹이 퍼진다!]\\C[0]\n\\I[40]매력 증가";
const StateTooltipsVirginMedKR = "\\C[27][처녀일지 모른다는 소문이 났다......]\\C[0]\n\\I[40]매력 약간 증가";
const StateTooltipsVirginLowKR = "\\C[27][처녀 유무 미발각]\\C[0]\n\\I[42]매력 영향없음";
const StateTooltipsConfidentZeroKR = "\\C[30][자신감!]\\C[0]\n\\I[42]모든 스테이터스 상승";
const StateTooltipsConfidentOneKR = "\\C[30][자신감!]\\C[0]\n\\I[42]모든 스테이터스가 대담함에 따라 상승";
const StateTooltipsFrustratedKR = "\\C[18][욱신거린다!]\\C[0]\n\\I[42]공격력 상승\n\\I[42]방어력 감소\n\\I[42]민첩성 감소\n\\I[42]명중률 감소\n\\I[42]크리티컬 회피율 감소";
const StateTooltipsDisarmedKR = "\\C[18][비무장]\\C[0]\n할버드를 주워 무장";
const StateTooltipsOffBalancedKR = "\\C[18][균형잃음]\\C[0]\n\\I[42]공격력 감소\n\\I[42]방어력 감소\n\\I[42]회피율 감소";
const StateTooltipsWeakenKR = "\\C[18][약체화!]\\C[0]\n\\I[42]완력 감소\n\\I[42]공격력 감소";
const StateTooltipsDizzyKR = "\\C[18][어지럽다!]\\C[0]\n\\I[42]명중률 감소\n\\I[42]회피율 감소";
const StateTooltipsSlowKR = "\\C[18][슬로우!]\\C[0]\n\\I[42]민첩성 대폭 하락";
const StateTooltipsVulnerableKR = "\\C[18][빈틈!]\\C[0]\n\\I[42]방어력 감소";
const StateTooltipsPoisonKR = "\\C[18][독에 당했다!]\\C[0]\n\\I[42]체력 감소\n[매턴]";
const StateTooltipsExposeWeaknessKR = "\\C[18][약점이 들통났다!]\\C[0]\n\\I[42]회피율 감소\n\\I[42]크리티컬 회피율 감소\n\\I[42]모든내성 감소";
const StateTooltipsStunnedKR = "\\C[18][스턴!]\\C[0]\n이번턴 행동불가";
const StateTooltipsEnemyPoseMasterKR = "\\I[29]%1 삽입\n※사정하면 체위 리셋 가능성 있음";
const StateTooltipsActorAttackComboKR = "\\C[2][어택 콤보! %1회 연속공격]\\C[0]\n다음 공격으로 : \n\\I[42]데미지 상승\n\\I[42]명중률 상승\n\\I[42]스킬 소모 상승";
const StateTooltipsActorAttackComboCockyKR = "\\C[2][어택 콤보! %1회 연속공격]\\C[0]\n\\I[42]데미지 상승\n\\I[42]명중률 상승\n\\I[42]스킬 소모 상승\n\\I[42]4번째 콤보시 대담함 상승";
const StateTooltipsActorSexComboKR = "\\C[2][섹스 콤보! %1회 연속]\\C[0]\n성스킬(애무제외) 사용시 : \n\\I[42]쾌락 데미지 상승\n\\I[42]스킬 소모 상승\n　\n같은 상대에게 같은 스킬(애무제외)를 연속해 사용하면 : \n\\I[42]쾌락 데미지 대폭 상승\n\\I[42]스킬 소모 대폭 상승";
const StateTooltipsEnemyPosePussySexKR = "보지에 삽입했다!";
const StateTooltipsEnemyPoseCunnilingusKR = "보지를 빨고있다!";
const StateTooltipsEnemyPoseAnalSexKR = "아날에 삽입했다!";
const StateTooltipsEnemyPosePaizuriKR = "파이즈리하고 있다!";
const StateTooltipsEnemyPoseHandjobKR = "손으로 문지른다!";
const StateTooltipsEnemyPoseBlowjobKR = "입으로 빤다!";
const StateTooltipsEnemyPoseFootjobKR = "발로 문지른다!";
const StateTooltipsEnemyPoseRimjobKR = "엉덩이를 빨고있다!";
const StateTooltipsEnemyKissedKR = "키스받았다! \n\\I[42]공격력 감소\n\\I[42]명중률 감소\n\\I[42]회피율 감소";
const StateTooltipsArousedKR = "\\C[27][발정중!]\\C[0]\n\\I[40]\\C[23]보지가 서서히 젖는다.\\C[0]\n[매턴]";
const StateTooltipsCautiousStanceKR = "[간파태세]\n\\I[42]회피율 대폭 상승\n\\I[42]크리티컬 회피율 대폭 상승";
const StateTooltipsDefensiveStanceKR = "[수비자세]\n\\I[42]다양한 상태이상 방어\n\\I[42]수비력 대폭 상승\n\\I[42]데미지 경감량 대폭 상승\n\\I[42]애무내성 대폭 상승\n\\I[42]벗겨짐내성 대폭 상승";
const StateTooltipsCounterStanceKR = "[반격자세]\n\\I[42]카운터율 대폭 상승\n\\I[42]카운터 최대수 상승\n\\I[42]데미지 경감률 약간 상승";
const StateTooltipsSecretaryStanceKR = "[비서의 마음가짐]\n\\I[42]청각내성 대폭 상승\n\\I[42]시각내성 대폭 상승\n\\I[42]애무내성 대폭 상승\n\\I[42]섹스내성 대폭 상승\n\\I[42]적에게 주는 쾌락 데미지 상승";
const StateTooltipsLadyStanceKR = "[숙녀의 마음가짐]\n\\I[42]애무내성 약간 상승\n\\I[42]섹스내성 약간 상승\n\\I[40]매력 증가중";
const StateTooltipsPleasureStanceKR = "[쾌락의 마음가짐]\n\\I[40]쾌락을 받아들인다!";
const StateTooltipsWillpowerKiOneKR = "[차지]\n\\I[42]공격력 상승";
const StateTooltipsWillpowerKiTwoKR = "[차지]\n\\I[42]공격력 상승\n\\I[42]크리티컬 데미지 상승";
const StateTooltipsWillpowerFocusOneKR = "[포커스]\n\\I[42]카운터율 상승";
const StateTooltipsWillpowerFocusTwoKR = "[포커스]\n\\I[42]카운터율 상승\n\\I[42]데미지 경감률 상승";
const StateTooltipsWillpowerEyeOfTheMindOneKR = "[심안]\n\\I[42]명중률 상승\n\\I[42]회피율 상승\n\\I[42]크리티컬률 상승";
const StateTooltipsWillpowerEyeOfTheMindTwoKR = "[심안]\n\\I[42]명중률 상승\n\\I[42]회피율 상승\n\\I[42]크리티컬률 상승\n\\I[42]크리티컬 데미지 상승";
const StateTooltipsWillpowerSeeNoEvilKR = "[못 본 척]\n\\I[42]시각내성 상승";
const StateTooltipsWillpowerHearNoEvilKR = "[못 들은 척]\n\\I[42]청각내성 상승";
const StateTooltipsWillpowerRealityMarbleKR = "[못 느낀 척]\n\\I[40]매력 증가중";
const StateTooltipsWillpowerResistOrgasmKR = "[절정억제]\n절정을 참고있다!\n\\I[42]절정시 필요쾌락도 상승";
const StateTooltipsWillpowerEdgingControlKarrynKR = "[사정관리]\n상대방 사정을 억제한다!\n\\I[42]적 사정에 필요한 쾌락도 상승";
const StateTooltipsWillpowerEdgingControlEnemyKR = "[사정관리]\n%1의 사정 억제중!\n\\I[42]적 사정에 필요한 쾌락도 상승";
const StateTooltipsBonusPierceDamageKR = "[보너스 어택\\I[42]\\C[4]쓰러스트 계열\\C[0]]";
const StateTooltipsBonusBluntDamageKR = "[보너스 어택\\I[42]\\C[2]스트라이크 계열\\C[0]]";
const StateTooltipsBonusSlashDamageKR = "[보너스 어택\\I[42]\\C[3]슬래쉬 계열\\C[0]]";
const StateTooltipsEjaculationStunnedKR = "\\C[18][스턴!]\\C[0]\n이번턴 행동불가\n\\I[42]보디터치내성  상승\n\\I[42]회피율 감소\n\\I[42]크리티컬 회피율 감소";
const StateTooltipsSlimeRegenNormalKR = "[재생능력]\n\\I[42]체력 20% 회복\n[매턴]";
const StateTooltipsSlimeRegenFourthKR = "[재생능력]\n\\I[42]체력 5% 회복\n[매턴]";
const StateTooltipsOrcDefensivePresenceKR = "[오크 고기벽]\n\\I[42]방어력 상승";
const StateTooltipsOrcCommandingPresenceOneKR = "[진격의 오크]\n\\I[42]공격력&방여력&회피율 상승";
const StateTooltipsOrcCommandingPresenceTwoKR = "[오크의 고기벽]\n\\I[42]방어력&회피율 상승";
const StateTooltipsOrcCommandingPresenceThreeKR = "[진격의 오크]\n\\I[42]공격력 상승";
const StateTooltipsOrcCommandingPresenceFourKR = "[오크 돼지즙]\n\\I[42]쾌락도 데미지 상승";
const StateTooltipsLizardmanRacialKR = "[무리짓는 리자드맨]\n\\I[42]모든 스테이터스 상승";
const StateTooltipsLizardmanRacialWeakKR = "[무리짓는 리자드맨]\n\\I[42]모든 스테이터스 약간 상승";
const StateTooltipsYetiHeatAuraKR = "[열기 방출중]\n\\I[42]전원에게 다양한 상태이상";
const StateTooltipsYetiHeatAuraEnemyOneKR = "\\C[18][예티의 열기]\\C[0]\n\\I[40]카린에게 주는 쾌락도 데미지 감소";
const StateTooltipsYetiHeatAuraEnemyTwoKR = "\\C[18][예티의 열기]\\C[0]\n\\I[40]카린에게 주는 쾌락도 데미지 대폭 감소";
const StateTooltipsYetiHeatAuraKarrynOneKR = "\\C[18][예티의 열기]\\C[0]\n\\I[42]체력회복량 대폭 감소";
const StateTooltipsYetiHeatAuraKarrynTwoKR = "\\C[18][예티의 열기]\\C[0]\n\\I[42]체력회복량&의지력회복량 대폭 감소";

const StateTooltipsYasuKiKR = "카린에게 주는 데미지 상승";
const StateTooltipsYasuFocusKR = "반격률 상승";
const StateTooltipsYasuEyeoftheMindKR = "\\I[42]명중률 상승\n\\I[42]크리티컬률 상승\n\\I[42]크리티컬 데미지 상승";
const StateTooltipsEnemyDefensiveStanceKR = "\\I[42]온갖 상태이상 방어\n\\I[42]수비력 상승\n\\I[42]데미지 경감량 상승";

const StateTooltipsKarrynClitToyKR = "[장난감]\n로터\n\\I[40]클리에 장착중!";
const StateTooltipsKarrynPussyToyKR = "[장난감]\n딜도\n\\I[40]보지에 삽입중!";
const StateTooltipsKarrynAnalToyKR = "[장난감]\n아날비즈\n\\I[40]엉덩이에 삽입중!";
const StateTooltipsEnemyClitToyPinkRotorKR = "로터를 들고있다!";
const StateTooltipsEnemyPussyToyPenisDildoKR = "딜도를 들고있다!";
const StateTooltipsEnemyAnalToyAnalBeadsKR = "아날비즈를 들고있다!";
const StateTooltipsToiletPinkRotorKR = "로터가 방치돼 있다......";
const StateTooltipsToiletPenisDildoKR = "딜도가 방치돼 있다......";
const StateTooltipsToiletAnalBeadsKR = "아날비즈가 방치돼 있다......";
const StateWaitressNoAlcoholKR = "\\C[2][음주거부]\\C[0]\n모든 음료를 거절하고있다.\n\\I[42]음료를 거절하기에 필요한 의지력 : %1\n\\I[42]음료를 거절할 때는 의지력회복량 대폭 하락";
const StateWaitressDirtyMugsSingularKR = "[지저분한 잔]\n1잔";
const StateWaitressDirtyMugsPluralKR = "[지저분한 잔]\n%2개";
const StateWaitressDirtyGlassesSingularKR = "[지저분한 술잔]\n1개";
const StateWaitressDirtyGlassesPluralKR = "[지저분한 술잔]\n%2개";
const StateWaitressAvailableMugsSingularKR = "[깨끗한 잔]\n1개";
const StateWaitressAvailableMugsPluralKR = "[깨끗한 잔]\n%1개";
const StateWaitressAvailableGlassesSingularKR = "[깨끗한 술잔]\n1개";
const StateWaitressAvailableGlassesPluralKR = "[깨끗한 술잔]\n%1개";
const StateWaitressKarrynLocationKR = "[현재위치]\n%1";
const StateWaitressTableALocationKR = "[현재 테이블]\n A";
const StateWaitressTableBLocationKR = "[현재 테이블]\n B";
const StateWaitressTableCLocationKR = "[현재 테이블]\n C";
const StateWaitressTableDLocationKR = "[현재 테이블]\n D";
const StateWaitressSleepingKR = "[만취했다!]\n쫓아내야되는 민폐손님";
const StateWaitressDrinkingDrinkKR = "마시는 술은 %2이다.";

const StateWaitressDrinkingNothingKR = "%1, 지금은 아무것도 안 마신다.";
const StateWaitressWantsDrinkKR = "%1, %2 한 잔을 주문했다.";

const StateReceptionistVisitorUnknownBeforeKR = "목적은 아직 불명";
const StateReceptionistVisitorUnknownAfterKR = "접수원 기다리는 중";
const StateReceptionistVisitorWritingBeforeKR = "미기입된 신청서를 들고있다.";
const StateReceptionistVisitorWritingDuringKR = "신청서에 기입중......";
const StateReceptionistVisitorWritingAfterKR = "기입된 신청서를 들고있다.";
const StateReceptionistVisitorPaperBeforeKR = "%2쪽짜리 신청서를 들고있다.";
const StateReceptionistVisitorPaperAfterKR = "%2쪽짜리 신청서에 기입중......";
const StateReceptionistVisitorTimeKR = "신청서 처리완료\n\\I[42]소유시간 : %2분";
const StateReceptionistVisitorMovingKR = "접수처로 오고있다.....";
const StateReceptionistVisitorSittingKR = "앉아서 대기중";
const StateReceptionistVisitorLineKR = "줄서서 대기중";
const StateReceptionistVisitorDeskKR = "카린 앞에 서 있다.";

const StateStripperActorDanceComboKR = "[댄스 콤보! %1회 연속]\n다음 댄스스킬 사용시 : \n\\I[42]쾌락 데미지 상승\n\\I[42]체력 소모 상승";

const StateTrainerKarrynLocationKR = "[현재 벤치]\n%1";

const DesireTooltipsMouthIntroKR = "\\C[1][성욕(口)]\\C[0]\n\\C[27]카린의 성감대 중 하나. 입의 욕망.\\C[0]\n그 혀는 남자의 온갖 부위를 맛보고,\n분비되는 체액을 맛본다.\n몇 번이고 빨고 체액을 마셔서\n입안에서 전신으로 성충동이 퍼진다.";
const DesireTooltipsBoobsIntroKR = "\\C[1][성욕(乳)]\\C[0]\n\\C[27]카린의 성감대 중 하나. 가슴의 욕망.\\C[0]\n완벽하게 물이 오른 유방은 애무를 받기를,\n단단히 발기한 유두는 만져지길 바라고 있다.\n가슴을 향한 자극은 연심처럼 심장을 뛰게 해\n강한 성충동으로 달려간다.";
const DesireTooltipsPussyIntroKR = "\\C[1][성욕(膣)]\\C[0]\n\\C[27]카린의 성감대 중 하나. 성기의 욕망.\\C[0]\n충실한 삶을 관철한 성기에게 있어\n클리와 질의 자극은 강렬한 흥분소재이다.\n수많은 수단으로 젖고 풀린 질은\n배 깊은 곳에서 성충동을 일으킨다.";
const DesireTooltipsButtIntroKR = "\\C[1][성욕(尻)]\\C[0]\n\\C[27]카린의 성감대 중 하나. 엉덩이의 욕망.\\C[0]\n누구든 돌아볼 엉덩이는\n가축처럼 조교당해, 쑤셔지길 바라고 있다.\n고개를 든 마조히즘은 호기심으로는\n성충동을 막을 수 없어진다.";
const DesireTooltipsCockIntroKR = "\\C[1][성욕(棒)]\\C[0]\n\\C[27]카린의 성감대 중 하나. 자지를 향한 욕망.\\C[0]\n오랫동안 기다린 자지를 향한 흥미는 강렬하고,\n오감으로 그 모든 것을 탐한다.\n남성기의 매력을 알 때마다\n성충동의 고삐가 풀려간다.";

const DesireTooltipsBodyDesireRequirementsUnknownKR = "\\I[40]약한 애무\\I[41]50\n\\I[40]강한 애무\\I[41]75\n\\I[40]섹스\\I[41]100\n (기본 필요성욕)";
const DesireTooltipsCockDesireRequirementsUnknownKR = "\\I[40]핸드잡\\I[41]50\n\\I[40]무삽입 플레이\\I[41]65\n\\I[40]삽입 섹스\\I[41]85\n (기본 필요성욕)";
const DesireTooltipsDesireRequirementsKnownKR = "요구성욕";
const DesireTooltipsDesireRequirementsKnownFormatKR = "\\I[40]\\C[27]%1\\I[41]\\C[0]%2";


const DesireTooltipsMouthDesireDebuffOneKR = "\\I[56]성욕(口)이 50이상이면\n\\I[0]입이 심심해 정신이 팔려서\n\\I[0]\\C[2]공격이 잘 맞지 않는다...... \\C[0]";
const DesireTooltipsMouthDesireDebuffTwoKR = "\\I[56]성욕(口)이 100이상이면\n\\I[0]무언가 입에 물고 싶은 마음이 끼어들어서\n\\I[0]\\c[2]크리티컬 데미지가 내려간다...... \\C[0]";

const DesireTooltipsBoobsDesireDebuffOneKR = "\\I[56]성욕(乳)이 50이상이면\n\\I[0]민감해진 유두가 신경쓰여\n\\I[0]\\C[2]공격을 피하기 어려워진다....... \\C[0]";
const DesireTooltipsBoobsDesireDebuffTwoKR = "\\I[56]성욕(乳)乳이 100이상이면\n\\I[0]가슴에서 유혹 페로몬이 풍겨\n\\I[0]\\C[2] 크리티컬을 내기 힘들어진다..... \\C[0]";

const DesireTooltipsPussyDesireDebuffOneKR = "\\I[56]성욕(膣)이 50이상이면\n\\I[0]고간이 달아올라 몸에서 열이 많아져\n\\I[0]\\C[2]옷이 잘 벗겨진다...... \\C[0]";
const DesireTooltipsPussyDesireDebuffTwoKR = "\\I[56]성욕(膣)이 100이상이면\n\\I[0]질의 욱신거림을 가라앉히는 데 열중해\n\\I[0]\\C[2]크리티컬을 피하기 어려워진다...... \\C[0]";

const DesireTooltipsButtDesireDebuffOneKR = "\\I[56]성욕(尻)이 50이상이면\n\\I[0]무의식적으로 엉덩이가 수컷을 찾아\n\\I[0]\\C[2] 수비가 소홀해진다......\\C[0]";
const DesireTooltipsButtDesireDebuffTwoKR = "\\I[56]성욕(尻)이 100이상이면\n\\I[0]굶주린 엉덩이가 남자를 불러들여\n\\I[0]\\C[2] 애무를 받기 쉬워진다...... \\C[0]";

const DesireTooltipsCockDesireDebuffOneKR = "\\I[56]성욕(棒)이 50이상이면\n\\I[0]남자 고간에 의식이 가서\n\\I[0]\\C[2]공격하는 힘이 약해진다...... \\C[0]";
const DesireTooltipsCockDesireDebuffTwoKR = "\\I[56]성욕(棒)이 100이상이면\n\\I[0]발기자지에 충성심이 생겨나\n\\I[0]\\C[2]섹스 저항이 약해진다...... \\C[0]";

const DesireTooltipsMouthDesireTopBuffKR = "\\I[56]성욕 중 성욕(口)이 가장 높으면\n\\I[0]음탕하게 유혹하는 혀끝에 매료된 적은\n\\I[0]\\C[11]카린의 공격을 막기 어려워진다. \\C[0]";
const DesireTooltipsBoobsDesireTopBuffKR = "\\I[56]성욕 중 성욕(乳)이 가장 높으면\n\\I[0]가슴에서 시선을 뗄 수 없어진 적은\n\\I[0]\\C[11]카린의 공격을 피하기 어려워진다. \\C[0]";
const DesireTooltipsPussyDesireTopBuffKR = "\\I[56]성욕 중 성욕(膣)이 가장 높으면\n\\I[0]카린의 고간에서 내뿜어지는 페로몬에\n\\I[0]\\C[27]적은 매턴 흥분할 가능성이 생긴다. \\C[0]";
const DesireTooltipsButtDesireTopBuffKR = "\\I[56]성욕 중 성욕(尻)이 가장 높으면\n\\I[0]흔들리는 엉덩이를 좇는 데 필사적이라\n\\I[0]\\C[11]적은 카린에게 공격을 맞추기 어려워진다. \\C[0]";
const DesireTooltipsCockDesireTopBuffKR = "\\I[56]성욕 중 성욕(棒)이 가장 높으면\n\\I[0]머리속이 자지로 가득차\n\\I[0]\\C[27]성욕(棒)이 점점 상승한다...... \\C[0]";

const VirginityTextKR = "섹스 스테이터스";
const VirginityYesKR = "\\C[13]처녀\\C[0]";
const VirginityNoKR = "\\C[27]비처녀\\C[0]";
const VirginActorTextKR = "Первый Раз с:"; //currently unused
const VirginActorNoneKR = "---------"; //currently unused

const ResistNameKR = "내성";
const SafeModeKR = "Безопасный режим"; //currently unused
const ReplayModeKR = "Режим повтора"; //currently unused
const PixelMovementKR = "Пиксельное Движение"; //currently unused
const BattleLogKR = "로그";
const BattleStatusKR = "스테이터스";
const EdictsKR = "지령";
const EdictCostKR = "지령치";
const QuestLogKR = "Радио"; //currently unused
const GlossaryKR = "Заметки"; //currently unused
const PassiveObtainedOnKR = "%1일째에 습득";
const StaminaRecoveryKR = "\\C[11]%1의 체력이 %2 회복!";
const EnergyRecoveryKR = "\\C[4]%1의 정력이 %2 회복!";

const KarrynTauntMessageKR = "카린은 도발했다!";
const KarrynFlauntMessageKR = "카린은 자랑하는 몸으로 유혹했다!";

const AronCallLizardmanFailKR = "그러나 아무도 나타나지 않았다...!";

const ActorGainPleasureKR = "\\C[27]%1의 쾌락도가 %2 상승!";
const ActorGainPleasure_SightKR = "\\C[27]%1, 보여져 쾌락도가 %2 상승!";
const ActorGainPleasure_ToyKR = "\\C[27]%1은 장착된 장난감으로 쾌락도가 %2 상승!";

const PleasurePercentTextKR = "%";

const EnemyGainPleasure_Percent_KR = "\\C[1]%1의 사정이 %2 상승!";
const EnemyGainPleasure_Value_KR = "\\C[1]%1의 사정이 %2 상승!";
const ActorSingleOrgasmKR = "\\C[31]%1, 정력을 %2 잃었다!";
const ActorMultipleOrgasmKR = "\\C[1]%1, %3번 연속절정! \\C[31]정력을 %2 잃었다!";

const EjaculatePussyKR = "\\C[27]%2의 질\\C[0]에 사정한 정액량, \\C[1]%3ml!";
const EjaculateAnalKR = "\\C[27]%2의 아날\\C[0]에 사정한 정액량, \\C[1]%3ml!";
const EjaculateMouthKR = "\\C[27]%2의 입\\C[0]에 사정한 정액량, \\C[1]%3ml!";

const BukkakeFaceKR = "\\C[27]%2의 얼굴\\C[0]에 사정한 정액량 \\C[1]%3ml!";
const BukkakeBoobsKR = "\\C[27]%2의 가슴\\C[0]에 사정한 정액량 \\C[1]%3ml!";
const BukkakeArmsKR = "\\C[27]%2의 팔\\C[0]에 사정한 정액량 \\C[1]%3ml!";
const BukkakeLegsKR = "\\C[27]%2의 다리\\C[0]에 사정한 정액량 \\C[1]%3ml!";
const BukkakeButtKR = "\\C[27]%2의 엉덩이\\C[0]에 사정한 정액량 \\C[1]%3ml!";

const ActorFirstKissMouthKR = "\\C[18]카린은 첫키스를 빼앗겼다!!!";
const ActorFirstKissCockKR = "\\C[18]이럴수가! 카린의 첫키스 상대는 자지 끝이다!!!";
const ActorFirstKissAnusKR = "\\C[18]이럴수가! 카린의 첫키스 상대는 똥구멍이다!!!";
const ActorLostPussyVirginityKR = "\\C[18]카린은 처녀를 잃었다!!!!";
const ActorLostAnalVirginityKR = "\\C[18]카린은 아날처녀를 잃었다!!!!";

const InvasionNoiseLevelOneKR = "\\C[8]희미하지만 밖에서 소리가 들린다......";
const InvasionNoiseLevelTwoKR = "\\C[7]밖에서 무언가 움직이는 소리가 난다......";
const InvasionNoiseLevelThreeKR = "\\C[2]다른 곳에서 목소리가 들린다.";
const InvasionNoiseLevelFourKR = "\\C[10]가까이서 웅성거리는 소리가 들린다!";
const InvasionBattleStartKR = "침입자가 나타났다!!";

const MasturbateBattleTouchClitKR = "카린은 클리토리스를 자극하기 시작했다!";
const MasturbateBattleTouchPussyKR = "카린은 보지를 자극하기 시작했다!";
const MasturbateBattleTouchAnalKR = "카린은 아날을 자극하기 시작했다!";
const MasturbateBattleTouchBoobsKR = "카린은 가슴을 주무르기 시작했다!";
const MasturbateBattleTouchNipplesKR = "카린은 유두를 만지기 시작했다!";

const MasturbateBattleFingerPussyKR = "카린은 보지에다 손가락을 넣었다!";
const MasturbateBattleFingerAnalKR = "카린은 아날에 손가락을 넣었다!";

const MasturbateBattleToyClitPinkRotorKR = "카린은 로터로 클리토리스에 자극을 줬다!";
const MasturbateBattleToyPussyPenisKR = "카린은 딜도를 보지에다 격렬하게 넣었다 뺐다!";
const MasturbateBattleToyAnalBeadsKR = "카린은 아날비즈로 항문을 음탕하게 쑤셔댔다!";

const MasturbateBattleSuckFingersKR = "카린은 손가락을 빨기 시작했다!";
const MasturbateBattleSuckNipplesKR = "카린은 유두를 빨기 시작했다!";

const SkillDescriptionNoValidTargetsKR = "※사용가능한 상대가 없습니다.";
const SkillDescriptionNotEnoughDesireKR = "※성욕이 부족합니다.";
const SkillDescriptionCantDoThisKR = "※지금은 쓸 수 없습니다.";
const SkillDescriptionHandsBusyKR = "※빈 손이 필요합니다.";
const SkillDescriptionNotWetKR = "※젖지 않아서 할 수 없습니다.";

const TitleDescriptionFirstTimeTitleEquipKR = "\\C[29](한번 장착하면 지속적으로 효과발동)";

const CharmEquipReqTextKR = "필요한 매력 : ";
const GrowthRateTextKR = "성장도";

const RemResultsVictoryKR = "승리!!";
const RemResultsDefeatKR = "패배했다...";
const RemResultsAbortedKR = "후퇴했다...";
const RemResultsMasturbateBattleNoneKR = "카린은 지쳐버렸다...";
const RemResultsMasturbateBattleSingleKR = "카린은 절정했다!!";
const RemResultsMasturbateBattlePluralKR = "카린은 %1번 절정했다!!!";
const RemResultsJobBattleEndKR = "카린의 업무는 종료됐다.";
const RemResultsBitchEndBattleEndKR = "HAPPY END";
const RemResultsEndlessBattleNormalKR = "[끝없는 프리즌 배틀] WAVE %1 달성";
const RemResultsEndlessBattleHellKR = "[끝없는 헬 배틀] WAVE %1 달성";
const RemResultsGainedExpKR = "경험치 습득";
const RemResultsLevelUpKR = "레벨업!";
const RemResultsOrderIncreaseKR = "\\I[408]\\C[11]질서가 %1 상승했다!";
const RemResultsOrderDecreaseKR = "\\I[409]\\C[10]질서가 %1 하락했다...";
const RemResultsFundingIncreaseKR = "\\I[400]\\C[11]자금이 %1G 늘었다!";
const RemResultsFundingDecreaseKR = "\\I[401]\\C[10]자금을 %1G 잃었다...";
const RemResultsFatigueIncreaseKR = "\\I[389]\\C[10]피로가 %1% 쌓였다...";
const RemResultsFatigueDecreaseKR = "\\I[388]\\C[11]피로가 %1% 감소했다!";
const RemResultsItemDropKR = "\\I[96]\\C[11]새로운 악세사리 『%1』 획득!";

const CockinessIncreasedTextKR = "\\I[354]\\C[11]대담함이 %1%까지 올랐다!";
const CockinessDecreasedTextKR = "\\I[489]\\C[10]대담함이 %1%로 하락했다...";
const CockinessResetKR = "\\I[489]\\C[10]대담함이 초기화되었다...";
const CockinessMaxxedOutKR = "\\I[354]\\C[11]대담함이 100%가 됐다!";

const RemResultsSubduedWithAttackKR = "\\I[74]\\C[11]%1명을 격퇴했다!";
const RemResultsSubduedSexuallyKR = "\\I[43]\\C[27]%1명을 성적으로 꺾었다!";
const RemResultsSubduedWithAttackAndSexuallyKR = "\\I[291]\\C[11]%1명을 격퇴하고, %3명을 성적으로 꺾었다!";
const RemResultsKarrynOrgasmSingularKR = "\\I[99]\\C[27]한번만 절정했다!";
const RemResultsKarrynOrgasmPluralKR = "\\I[99]\\C[27]%1번 절정했다!";
const RemResultsKarrynMasturbatedInBattleSingularKR = "\\I[46]\\C[27]사람들 앞에서 한번만 자위했다!";
const RemResultsKarrynMasturbatedInBattlePluralKR = "\\I[46]\\C[27]사람들 앞에서 %1번 자위했다!";
const RemResultsKarrynKissKR = "\\I[288]\\C[27]%1명과 키스했다!";
const RemResultsKarrynHandjobKR = "\\I[289]\\C[27]%1명에게 손으로 해줬다!";
const RemResultsKarrynBlowjobKR = "\\I[294]\\C[27]%1명에게 입으로 해줬다!";
const RemResultsKarrynTitjobKR = "\\I[221]\\C[27]%1명에게 가슴으로 해줬다!";
const RemResultsKarrynFootjobKR = "\\I[219]\\C[27]%1명에게 발로 해줬다!";
const RemResultsKarrynRimjobKR = "\\I[299]\\C[27]%1명에게 아날을 핥아줬다!";
const RemResultsKarrynVaginalSexKR = "\\I[295]\\C[27]%1명과 섹스했다!";
const RemResultsKarrynAnalSexKR = "\\I[296]\\C[27]%1명과 아날로 섹스했다!";


const RemParamLevelGainedSingularKR = "\\C[16]%3 %2레벨이 %1 올랐다!";
const RemParamLevelGainedPluralKR = "\\C[16]%3 %2레벨이 %1 올랐다!";

const RemWardenLevelRequireSingularKR = "\\C[8]\\I[25]다음 간수레벨까지 남은 스테이터스 레벨은 %1!";
const RemWardenLevelRequirePluralKR = "\\C[8]\\I[25]다음 간수레벨까지 남은 스테이터스 레벨은 %1!";
const RemWardenLevelUpKR = "\\RLI[50]\\C[11]레벨업!! \\C[16]%1은 간수레벨이 %2가 되었다!!";
const RemWardenLevelLimitReachedKR = "\\RLI[51]\\C[8]간수레벨이 한계에 도달해 더이상 스테이터스 레벨을 올릴 수 없다.";

const RemResultsPassivesTitleKR = "새로운 패시브 획득!!";
const RemResultsTooManyPassivesUnlockedKR = "\\C[8]\\I[25]그외 %1개 패시브";

const RemDailyReportDayCountKR = "\\#\\{\\{%1일 : 보고서\\}\\}";
const RemDailyReportAnarchyNoLimitKR = "\\I[377]감옥레벨%1 \\C[7]폭동\\C[0] %2일간 지속\\";
const RemDailyReportAnarchyLimitBefore_singularKR = "\\I[377]감옥레벨%1 \\C[7]폭동\\C[0] %2일간 지속 \\I[25] 익일 통제력 더욱 감소할 위험 있음.";
const RemDailyReportAnarchyLimitBefore_pluralKR = "\\I[377]감옥레벨%1 \\C[7]폭동\\C[0] %2일간 지속 \\I[25] %3일 후, 통제력 더욱 감소할 위험 있음.";
const RemDailyReportAnarchyPastLimitKR = "\\I[377]감옥레벨%1 \\C[7]폭동\\C[0] %2일간 지속 \\I[25]통제력 : \\C[18]-%3\\C[0]";
const RemDailyReportRiot_NewKR = "\\I[407]감옥레벨%1 \\C[18]폭동발생!!!\\C[0]  \\I[25]질서 : \\C[18]-%2\\C[0]!";
const RemDailyReportRiot_OldKR = "\\I[407]감옥레벨%1 \\C[18]폭동발생!!!\\C[0] \\I[25]통제력에 \\C[18]-%3\\C[0]";
const RemDailyReportOrderChange_PositiveKR = "\\I[408]질서 : %1로 상승";
const RemDailyReportOrderChange_NegativeKR = "\\I[409]질서 : %1로 하락";
const RemDailyReportOrderChange_NeutralKR = "\\I[408]질서 : 어제와 마찬가지, %1 유지중";
const RemDailyReportFundingChange_PositiveKR = "\\I[410]자금 : \\C[11]+%1G\\C[0]";
const RemDailyReportFundingChange_NegativeKR = "\\I[411]자금 : \\C[2]-%1G\\C[0]";
const RemDailyReportBankruptcyKR = "\\I[411]자금 : \\C[2]0G (파산) \\C[0]\\I[25]통제력에 \\C[18]-%1\\C[0]";
const RemDailyReportEdictPoints_SingularKR = "\\I[364]오늘 사용가능한 지령치 : %1";
const RemDailyReportEdictPoints_PluralKR = "\\I[364]오늘 사용가능한 지령치 : %1";
const RemDailyReportBarRep_AlmostDecayKR = "\\I[188]주점 평판 : \\C[8]밑바닥\\C[0] \\I[24]웨이트리스 아르바이트로 대처가능";
const RemDailyReportBarRep_DecayedKR = "\\I[188]\\C[8]주점 평판 : -1\\C[0]";
const RemDailyReportVisitorRep_AlmostDecayKR = "\\I[159]면회인 접수처의 평판 : \\C[8]밑바닥\\C[0] \\I[24]접수원 아르바이트로 대처가능";
const RemDailyReportVisitorRep_DecayedKR = "\\I[159]\\C[8]면회인 접수처의 평판 : -1\\C[0]";
const RemDailyReportToiletRep_AlmostDecayKR = "\\I[234]화장실의 평판 : \\C[8]밑바닥\\C[0] \\I[24]화장실 칸에서 쉬면 대처가능";
const RemDailyReportToiletRep_DecayedKR = "\\I[234]\\C[8]화장실의 평판 : -1\\C[0]";
const RemDailyReportStripClubRep_AlmostDecayKR = "\\I[21]스트립 클럽의 평판 : \\C[8]밑바닥\\C[0] \\I[24]스트리퍼 아르바이트로 대처가능";
const RemDailyReportStripClubRep_DecayedKR = "\\I[21]\\C[8]스트립 클럽의 평판 : -1\\C[0]";
const RemDailyReportGymRep_AlmostDecayKR = "\\I[159]트레이너의 평판 : \\C[8]밑바닥\\C[0] \\I[24]트레이너 아르바이트로 대처가능";
const RemDailyReportGymRep_DecayedKR = "\\I[159]\\C[8]트레이너의 평판 : -1\\C[0]";

const RemParamGainedStrengthKR = "Сила увеличена на %1!"; //unused
const RemParamGainedStaminaKR = "체력 увеличена на %1!"; //unused
const RemParamGainedEnergyKR = "Энергия увеличена на %1!"; //unused
const RemParamGainedDexterityKR = "Ловкость увеличена на %1!";
const RemParamGainedAgilityKR = "Проворность увеличена на %1!"; //unused
const RemParamGainedEnduranceKR = "Стойкость увеличена на %1!"; //unused
const RemParamGainedMindKR = "Разум увеличен на %1!"; //unused
const RemParamGainedCharmKR = "Шарм увеличен на %1!"; //unused

const RemExpEnemiesDefeatedKR = "Enemies Defeated EXP"; //currently unused
const RemExpHalberdCombatKR = "Halberd Combat EXP"; //currently unused
const RemExpUnarmedCombatKR = "Unarmed Combat EXP"; //currently unused
const RemExpEvasionCombatKR = "Evasion EXP"; //currently unused
const RemExpWillpowerCombatKR = "Willpower EXP"; //currently unused
const RemExpEnduranceCombatKR = "Endurance EXP"; //currently unused
const RemExpTalkSensitivityKR = "Talk Sensitivity EXP"; //currently unused
const RemExpSightSensitivityKR = "Sight Sensitivity EXP"; //currently unused
const RemExpFingerSensitivityKR = "Finger Sensitivity EXP"; //currently unused
const RemExpMouthSensitivityKR = "Mouth Sensitivity EXP"; //currently unused
const RemExpBoobsSensitivityKR = "Boobs Sensitivity EXP"; //currently unused
const RemExpPussySensitivityKR = "Pussy Sensitivity EXP"; //currently unused
const RemExpButtSensitivityKR = "Butt Sensitivity EXP"; //currently unused
const RemExpCreampieSensitivityKR = "Creampie Recipient EXP"; //currently unused
const RemExpBukkakeSensitivityKR = "Bukkake EXP"; //currently unused
const RemExpSwallowSensitivityKR = "Swallowing EXP"; //currently unused
const RemExpKissSkillKR = "Kissing EXP"; //currently unused
const RemExpPettingSkillKR = "Petting EXP"; //currently unused
const RemExpHandjobSkillKR = "Handjob EXP"; //currently unused
const RemExpBlowjobSkillKR = "Blowjob EXP"; //currently unused
const RemExpTittyFuckSkillKR = "Titjob EXP"; //currently unused
const RemExpPussySexSkillKR = "Vaginal Sex EXP"; //currently unused
const RemExpAnalSexSkillKR = "Anal Sex EXP"; //currently unused
const RemExpMasturbateSkillKR = "Masturbation EXP"; //currently unused
const RemExpOrgasmSpecialKR = "Orgasm EXP"; //currently unused
const RemExpStrippedSpecialKR = "Stripped EXP"; //currently unused
const RemExpDoublePenetrationSpecialKR = "Double Penetration EXP"; //currently unused
const RemExpTriplePenetrationSpecialKR = "Triple Penetration EXP"; //currently unused


const RemYanflyBattleCoreUserKR = "유저";
const RemYanflyBattleCoreAllyKR = "아군";
const RemYanflyBattleCoreAlliesKR = "아군";
const RemYanflyBattleCoreEnemyKR = "적";
const RemYanflyBattleCoreEnemiesKR = "적";
const RemYanflyBattleCoreAllTargetsKR = "모든 %1";
const RemYanflyBattleCoreRandomTargetsKR = "%2 중 무작위한 %1";

const RemYanflyRemoveKR = "벗는다";
const RemYanflyEmptyKR = "<비었음>";

//Options Main
const RemYanflyOptions_All_KR = "\\I[272]전체";
const RemYanflyOptions_All_Help_KR = "게임 설정을 모두 표시합니다.";
const RemYanflyOptions_General_KR = "\\I[273]일반";
const RemYanflyOptions_General_Help_KR = "언어나 속도 등 일반설정을 변경할 수 있습니다.";
const RemYanflyOptions_Audio_KR = "\\I[274]오디오";
const RemYanflyOptions_Audio_Help_KR = "게임내 소리 볼륨을 설정할 수 있습니다.";
const RemYanflyOptions_Visual_KR = "\\I[276]화면";
const RemYanflyOptions_Visual_Help_KR = "게임 표시에 관련된 설정을 변경할 수 있습니다.";
const RemYanflyOptions_Controls_KR = "\\I[280]조작";
const RemYanflyOptions_Controls_Help_KR = "게임 조작을 변경할 수 있습니다.\n게임패드가 접속되어 있을 경우 게임패드 설정을 변경할 수 있습니다.";
const RemYanflyOptions_Cheats_KR = "\\I[250]치트";
const RemYanflyOptions_Cheats_Help_KR = "비서 모드 전용 설정입니다.\n부분적인 난이도를 취향껏 커스터마이즈해 플레이할 수 있습니다.";
const RemYanflyOptions_Exit_KR = "\\I[254]종료";
const RemYanflyOptions_Exit_Help_KR = "설정화면을 종료합니다.";

const RemYanflyOptions_Hair_KR = "\\I[586]외형 변경";
const RemYanflyOptions_Hair_Help_KR = "카린의 머리카락 등을 변경할 수 있습니다.\n※설정 일부는 『털DLC』가 필요합니다.";

const RemYanflyOptions_Lovense_KR = "\\I[587]Lovense";
const RemYanflyOptions_Lovense_Help_KR = "전동 오나홀 『Lovense』를 설정합니다.\n★키보드 ALT키는 Lovense 긴급정지 버튼입니다.\n※오나홀 사용중 취급과 위생관리에 주의하세요.";

//Options General
const RemYanflyOptions_Language_KR = "\\i[275]문자 언어 (Language)";
const RemYanflyOptions_Language_Help_KR = "문장에 쓰는 언어를 변경합니다.";
const RemYanflyOptions_VoiceLanguage_KR = "\\i[275]음성 언어";
const RemYanflyOptions_VoiceLanguage_Help_KR = "보이스 언어를 변경합니다.";
const RemYanflyOptions_AlwaysDash_KR = "\\i[273]항상 달리기";
const RemYanflyOptions_AlwaysDash_Help_KR = "ON : 항상 달리는 속도\n OFF : 걷는 속도\n※OFF로 하면 쉬프트 키+방향키로 달릴 수 있습니다.";
const RemYanflyOptions_MessageSpeed_KR = "\\i[273]메세지 속도";
const RemYanflyOptions_MessageSpeed_Help_KR = "텍스트가 표시되는 속도를 변경합니다.";
const RemYanflyOptions_MessageSpeed_NoWait_KR = "순간";
const RemYanflyOptions_CommandRemember_KR = "\\i[273]커맨드 기억";
const RemYanflyOptions_CommandRemember_Help_KR = "멘탈 페이즈와 액션 페이즈 마지막에 쓴 스킬을 기억합니다.";

const RemYanflyOptions_Battlelog_Duration_KR = "\\i[273]전투 메세지 표시속도";
const RemYanflyOptions_Battlelog_Duration_Help_KR = "전투시 텍스트 표시속도를 변경합니다.";
const RemYanflyOptions_Battlelog_Duration_Zero_KR = "아주 짧게";
const RemYanflyOptions_Battlelog_Duration_One_KR = "짧게";
const RemYanflyOptions_Battlelog_Duration_Two_KR = "기본";
const RemYanflyOptions_Battlelog_Duration_Three_KR = "오래";
const RemYanflyOptions_Battlelog_Duration_Four_KR = "아주 오래";

const RemYanflyOptions_Battlelog_Fontsize_KR = "\\i[273]전투 메세지 폰트 크기";
const RemYanflyOptions_Battlelog_Fontsize_Help_KR = "전투시 텍스트 사이즈를 변경합니다.";
const RemYanflyOptions_Battlelog_Fontsize_Zero_KR = "최소한";
const RemYanflyOptions_Battlelog_Fontsize_One_KR = "작게";
const RemYanflyOptions_Battlelog_Fontsize_Two_KR = "중간";
const RemYanflyOptions_Battlelog_Fontsize_Three_KR = "크게";
const RemYanflyOptions_Battlelog_Fontsize_Four_KR = "최대한";

const RemYanflyOptions_MaleDialogueAppear_KR = "\\i[273]적 대사 표시속도";
const RemYanflyOptions_MaleDialogueAppear_Help_KR = "적이 성스킬을 쓸 때 표시되는 대사의 빈도를 설정합니다.\n\\}※예외도 있습니다.";
const RemYanflyOptions_MaleDialogueAppear_Zero_KR = "침묵";
const RemYanflyOptions_MaleDialogueAppear_One_KR = "매우 드물게";
const RemYanflyOptions_MaleDialogueAppear_Two_KR = "가끔";
const RemYanflyOptions_MaleDialogueAppear_Three_KR = "보통(기본)";
const RemYanflyOptions_MaleDialogueAppear_Four_KR = "수다쟁이";

const RemYanflyOptions_KarrynLinesPrompt_KR = "\\i[273]카린의 대사는 대기한다";
const RemYanflyOptions_KarrynLinesPrompt_Help_KR = "\\}전투시 카린이 이야기할 때는 자동으로 넘길지 아닐지를 설정합니다.\nON : 카린이 말할 때만 결정키를 누를 때까지 전투 메세지를 정지합니다. \nOFF : 카린의 대사를 포함, 전투 메세지는 모두 자동으로 넘깁니다.";
const RemYanflyOptions_Disable_Rimjobs_KR = "\\i[273]항문빨기 비표시";
const RemYanflyOptions_Disable_Rimjobs_Help_KR = "ON : 아날을 핥는 장면이 발생하지 않습니다. \nOFF : 카린이 남자의 아날을 핥는 장면이 발생합니다.\n※게임 진행에 영향을 줍니다.";
const RemYanflyOptions_Disable_Footjobs_KR = "\\i[273]풋잡 비표시";
const RemYanflyOptions_Disable_Footjobs_Help_KR = "ON : 발로 하는 장면이 발생하지 않습니다.\nOFF : 발로 쓰는 장면이 발생합니다.\n※게임 진행에 영향을 줍니다.";
const RemYanflyOptions_Disable_Smegma_KR = "\\i[273]성기찌꺼기 비표시";
const RemYanflyOptions_Disable_Smegma_Help_KR = "ON : 자지찌꺼기를 묘사하지 않습니다.\nOFF : 카린이 자지찌꺼기 냄새를 맡거나, 핥는 등의 대사가 묘사됩니다.\n※게임 진행에 영향을 줍니다.";
const RemYanflyOptions_Disable_FeraMouth_KR = "\\i[273]진공펠라 비표시";
const RemYanflyOptions_Disable_FeraMouth_Help_KR = "ON : 입으로 할 때 뺨이 들어가지 않게 합니다(게임에는 영향이 없습니다.)\nOFF : 경험이 쌓이면 입으로 할 때 빨아들이듯이 합니다.\n※다양한 표정을 즐길 수 있습니다. 보기 싫다면 ON으로 해주세요.";

const RemYanflyOptions_DisplayPleasureAsPercent_KR = "\\i[273]쾌락도를 %로 표시";
const RemYanflyOptions_DisplayPleasureAsPercent_Help_KR = "절정에 필요한 쾌락도 표시를 변경합니다.\nON : 쾌락도를 퍼센트로 표시합니다.\nOFF : 쾌락도를 숫자로 표시합니다.";

const RemYanflyOptions_ShorterDefeatBattles_KR = "\\i[273]패배 H 단축";
const RemYanflyOptions_ShorterDefeatBattles_Help_KR = "통상 패배시 모든 적이 사정하고 종료됩니다.\nON : 적의 사정이 끝나지 않아도 카린의 체력이 0이 되면 종료됩니다.\nOFF : 평소처럼 전원 사정할 때까지 계속됩니다. 죄수 모드에서는 OFF로 고정됩니다.";

//Options Audio
const RemYanflyOptions_MasterVolume_KR = "\\i[274]마스터 볼륨";
const RemYanflyOptions_MasterVolume_Help_KR = "게임 전체의 볼륨을 설정합니다.";
const RemYanflyOptions_BGMVolume_KR = "\\i[274]배경음 볼륨";
const RemYanflyOptions_BGMVolume_Help_KR = "게임내 음악 볼륨을 설정합니다.";
const RemYanflyOptions_BGSVolume_KR = "\\i[274]BGS 볼륨";
const RemYanflyOptions_BGSVolume_Help_KR = "배경효과음 볼륨을 설정합니다.";
const RemYanflyOptions_MEVolume_KR = "\\i[274]연출음 볼륨";
const RemYanflyOptions_MEVolume_Help_KR = "휴식할 때나 팡파레에서 나오는 볼륨을 설정합니다.";
const RemYanflyOptions_SEVolume_KR = "\\i[274]효과음 볼륨";
const RemYanflyOptions_SEVolume_Help_KR = "효과음 볼륨을 설정합니다.";
const RemYanflyOptions_VoiceVolume_KR = "\\i[274]음성 볼륨";
const RemYanflyOptions_VoiceVolume_Help_KR = "카린이 말할 때 볼륨을 설정합니다.";
const RemYanflyOptions_MoansVolume_KR = "\\i[274]신음소리 볼륨";
const RemYanflyOptions_MoansVolume_Help_KR = "카린이 신음할 때의 볼륨을 설정합니다.";
const RemYanflyOptions_MaleVolume_KR = "\\i[274]적 음성 볼륨";
const RemYanflyOptions_MaleVolume_Help_KR = "적의 웃음이나 호출할 때 볼륨을 설정합니다.";
const RemYanflyOptions_KeepVoicePlayback_KR = "\\i[274]메세지를 넘긴 다음에도 음성 재생";
const RemYanflyOptions_KeepVoicePlayback_Help_KR = "ON : 대사를 다 말할 때까지 음성을 재생합니다.\nOFF : 결정키를 누르면 음성이 중단됩니다.";
const RemYanflyOptions_AutoContinueAfterVoice_KR = "\\i[274]음성이 나오면 자동으로 넘긴다";
const RemYanflyOptions_AutoContinueAfterVoice_Help_KR = "ON : 카린의 대사가 끝나고 나서 자동적으로 전투를 속행합니다.\nOFF : 음성이 다 나와도 자동으로 넘어가지 않습니다.\n※이 설정을 켜려면 '카린의 대사는 대기한다'도 켜둬야 합니다.";

//Options Visual
const RemYanflyOptions_WindowToneRed_KR = "\\i[277]윈도우 톤 : RED";
const RemYanflyOptions_WindowToneRed_Help_KR = "윈도우 색조 \\c[18]빨간색\\c[0]을 변경합니다.\n쉬프트키를 누르고 좌우로 움직이면 값을 크게 바꿉니다.\n※세이브에 의존하므로 타이틀 화면에서는 영향이 없습니다.";
const RemYanflyOptions_WindowToneGreen_KR = "\\i[278]윈도우 톤 : GREEN";
const RemYanflyOptions_WindowToneGreen_Help_KR = "윈도우 색조 \\c[29]녹색\\c[0]을 변경합니다.\n쉬프트키를 누르고 좌우로 움직이면 값을 크게 바꿉니다.\n※세이브에 의존하므로 타이틀 화면에서는 영향이 없습니다.";
const RemYanflyOptions_WindowToneBlue_KR = "\\i[279]윈도우 톤 : BLUE";
const RemYanflyOptions_WindowToneBlue_Help_KR = "윈도우 색조 \\c[14]파란색\\c[0]을 변경합니다.\n쉬프트키를 누르고 좌우로 움직이면 값을 크게 바꿉니다.\n※세이브에 의존하므로 타이틀 화면에서는 영향이 없습니다.";
const RemYanflyOptions_FasterBattleDialogue_KR = "\\i[276]전투 메세지 고속화";
const RemYanflyOptions_FasterBattleDialogue_Help_KR = "전투시 표시되는 메세지가 빨라집니다.";
const RemYanflyOptions_FasterBattleCutins_KR = "\\i[276]컷인 간략화";
const RemYanflyOptions_FasterBattleCutins_Help_KR = "ON : 전투시 컷인이 빨라지며, 애니메이션 없는 정지화면이 표시됩니다.\nOFF : 컷인은 보통속도로, 애니메이션도 재생됩니다.\n※컷인으로 게임이 느려질 경우에 사용해 주세요.";
const RemYanflyOptions_SmootherBattleCutinLoading_KR = "\\i[276]컷인 상세히";
const RemYanflyOptions_SmootherBattleCutinLoading_Help_KR = "게임시작시 로딩이 길어지지만, 전투시 컷인으로 발생되는 지연을 상당량 억제합니다.\n주의1 : 로딩이 20초를 넘거나 빈번하게 화면이 멈춘다면 꺼주세요.\n주의2 : 켠 후에 게임을 재시작하면 설정이 적용됩니다.";
const RemYanflyOptions_DisableBattleCutins_KR = "\\i[276]컷인 비표시";
const RemYanflyOptions_DisableBattleCutins_Help_KR = "ON : 전투시 컷인이 표시되지 않습니다.\nOFF : 전투시 컷인이 표시됩니다.\n※컷인의 영향으로 게임에서 튕길 경우에만 최종수단으로 사용해 주세요.";
const RemYanflyOptions_SmootherCGLoading_KR = "\\i[276]CG표시 상세히";
const RemYanflyOptions_SmootherCGLoading_Help_KR = "게임시작시 로딩이 길어지지만 , CG를 표시할 때 발생되는 지연을 상당량 억제합니다.\n주의1 : 로딩이 20초를 넘거나 빈번하게 화면이 멈춘다면 꺼주세요.\n주의2 : 켠 후에 게임을 재시작하면 설정이 적용됩니다.";
const RemYanflyOptions_SortPassivesAscending_KR = "\\i[276]패시브 나열순서 변경";
const RemYanflyOptions_SortPassivesAscending_Help_KR = "패시브 나열을 변경합니다.\nON : 가장 나중에 습득한 순으로 표시합니다.\nOFF : 가장 최근에 얻은 순으로 표시합니다.";
const RemYanflyOptions_SynchFPS_KR = "\\i[273]FPS 동기처리";
const RemYanflyOptions_SynchFPS_Help_KR = "모니터 FPS가 60을 넘을 경우 켜주세요.\n60FPS로 작동되도록 게임 동기화를 변경합니다.\n※F2를 누르면 현재 FPS를 표시합니다.";
const RemYanflyOptions_LightingEffects_KR = "\\i[276]이벤트 번쩍임 효과";
const RemYanflyOptions_LightingEffects_Help_KR = "번적임이 쓰인 이벤트에서 게임이 느려질 경우,\n끄면 게임에서 번쩍임을 없애서\n퍼포먼스를 향상시킵니다.";
const RemYanflyOptions_MapEffects_KR = "\\i[276]맵효과";
const RemYanflyOptions_MapEffects_Help_KR = "맵에서 안개나 연기 등 연출효과를 변경합니다.\nON : 맵효과를 표시합니다.\nOFF : 맵효과를 비표시합니다.(처리가 느려질 경우 추천)";
const RemYanflyOptions_DisableFlashing_KR = "\\i[276]번쩍임연출 비표시";
const RemYanflyOptions_DisableFlashing_Help_KR = "화면 번적임에 민감한 분이나 눈이 아플 경우에 켜주세요.\nON : 화면 번쩍임 효과가 꺼집니다.\nOFF : 화면 번쩍임 효과가 사용됩니다.";
const RemYanflyOptions_ShowSexualDamagePopup_KR = "\\i[276]성 데미지 팝업";
const RemYanflyOptions_ShowSexualDamagePopup_Help_KR = "전투시 성 데미지 표시를 변경합니다.\nON : 카린 위에 데미지가 표시됩니다.\nOFF : 데미지가 텍스트로만 표시됩니다.";

const RemYanflyOptions_EdictsOutlineColor_Obtainable_KR = "\\i[276]지령 외곽선 : 실행가능할 경우";
const RemYanflyOptions_EdictsOutlineColor_Obtainable_Help_KR = "현재 실행가능한 지령의 칸 색을 변경합니다.";
const RemYanflyOptions_EdictsOutlineColor_MeetReq_KR = "\\i[276]지령 외곽선 : 조건이 충족되었을 경우";
const RemYanflyOptions_EdictsOutlineColor_MeetReq_Help_KR = "조건이 충족되었지만 실행이 불가능한 지령의 칸 색을 변경합니다.";
const RemYanflyOptions_EdictsOutlineColor_NoReq_KR = "\\i[276]지령 외곽선 : 실행불가능할 경우";
const RemYanflyOptions_EdictsOutlineColor_NoReq_Help_KR = "조건이 충족되지 않은 지령의 칸 색을 변경합니다.";

const RemYanflyOptions_EdictsOutlineColorName_Green_KR = "그린";
const RemYanflyOptions_EdictsOutlineColorName_LightBlue_KR = "라이트블루";
const RemYanflyOptions_EdictsOutlineColorName_Yellow_KR = "옐로우";
const RemYanflyOptions_EdictsOutlineColorName_Purple_KR = "퍼플";
const RemYanflyOptions_EdictsOutlineColorName_Gray_KR = "그레이";
const RemYanflyOptions_EdictsOutlineColorName_Black_KR = "블랙";
const RemYanflyOptions_EdictsOutlineColorName_Red_KR = "레드";

//Options Controls
const RemYanflyOptions_GamepadControl_KR = "\\i[281]게임패드 설정";
const RemYanflyOptions_GamepadControl_Help_KR = "게임패드 버튼 할당을 설정할 수 있습니다.";
const RemYanflyOptions_KeyboardControl_KR = "\\i[280]키보드 설정";
const RemYanflyOptions_KeyboardControl_Help_KR = "키보드 키 할당을 설정할 수 있습니다.";
const RemYanflyOptions_CancelSkipMentalPhase_KR = "\\I[280]전투시 멘탈 페이즈 스킵";
const RemYanflyOptions_CancelSkipMentalPhase_Help_KR = "ON : 취소 버튼 / 오른족클릭으로 멘탈 페이즈를 넘길 수 있습니다.\nOFF : 커맨드를 입력할 때까지 멘탈 페이즈에서 어택 페이즈로 이행할 수 없습니다.";

//added 2022.06.10
const RemYanflyOptions_Fullscreen_KR = "\\i[273]화면 표시설정";
const RemYanflyOptions_Fullscreen_Help_KR = "Window : 창모드로 플레이합니다.\nFullscreen : 전체화면으로 플레이합니다.\n※플레이중 F4키나 Alt키+Enter키로 바꿀 수 있습니다.";

const RemYanflyGamepadButtonNameKR = "%1 버튼";
const RemYanflyGamepadOkButtonNameKR = "OK / 조사한다";
const RemYanflyGamepadOkButtonHelpKR = "선택지 결정, 맵상에서 조사하거나 대화할 때 사용합니다.";
const RemYanflyGamepadCancelButtonNameKR = "취소";
const RemYanflyGamepadCancelButtonHelpKR = "선택지에서 취소, 메뉴를 닫을 때 사용합니다.";
const RemYanflyGamepadShiftButtonNameKR = "Shift";
const RemYanflyGamepadShiftButtonHelpKR = "달리기, 텍스트 비표시에 사용됩니다.";
const RemYanflyGamepadMenuButtonNameKR = "메뉴";
const RemYanflyGamepadMenuButtonHelpKR = "메유창을 여는 버튼입니다.";
const RemYanflyGamepadPageUpButtonNameKR = "텍스트 로그 표시 / 스크롤";
const RemYanflyGamepadPageUpButtonHelpKR = "텍스트 로그 표시, 메뉴 및 텍스트 스크롤에 사용합니다.";
const RemYanflyGamepadPageDownButtonNameKR = "텍스트 스킵 / 스크롤";
const RemYanflyGamepadPageDownButtonHelpKR = "텍스트 스킵과 전투시 가속, 메뉴나 텍스트 로그 스크롤에 사용합니다.";
const RemYanflyGamepadResetDefaultNameKR = "초기설정으로 되돌린다.";
const RemYanflyGamepadResetDefaultHelpKR = "게임패드 설정을 초기설정으로 되돌립니다.";
const RemYanflyGamepadFinishConfigNameKR = "설정을 보존한다.";
const RemYanflyGamepadFinishConfigHelpKR = "게임패드 설정을 보존하고 닫습니다.";

const RemYanflyKeyboardHelpKR = "키보드에 버튼을 할당해 주세요.";
const RemYanflyKeyboardDefaultLayoutTextKR = "초기설정으로 되돌린다.";
const RemYanflyKeyboardDefaultLayoutHelpKR = "키보드 설정을 초기설정으로 되돌립니다.";
const RemYanflyKeyboardWASDTextKR = "WASD 모드";
const RemYanflyKeyboardWASDHelpKR = "WASD로 이동합니다.";
const RemYanflyKeyboardFinishConfigTextKR = "설정을 완료한다.";
const RemYanflyKeyboardFinishConfigHelpKR = "키보드 설정을 보존하고 되돌아갑니다.";
const RemYanflyKeyboardClearTextKR = "미설정";
const RemYanflyKeyboardOKKeyKR = "OK";
const RemYanflyKeyboardOKTextKR = "OK / 조사한다";
const RemYanflyKeyboardEscapeKeyKR = "취소 / 메뉴";
const RemYanflyKeyboardEscapeTextKR = "취소 / 메뉴";
const RemYanflyKeyboardCancelKeyKR = "취소";
const RemYanflyKeyboardCancelTextKR = "취소";
const RemYanflyKeyboardMenuKeyKR = "메뉴";
const RemYanflyKeyboardMenuTextKR = "메뉴";
const RemYanflyKeyboardShiftKeyKR = "Shift";
const RemYanflyKeyboardShiftTextKR = "Shift";
const RemYanflyKeyboardPageUpKeyKR = "PgUp";
const RemYanflyKeyboardPageUpTextKR = "Page Up / 텍스트 로그 표시";
const RemYanflyKeyboardPageDownKeyKR = "PgDn";
const RemYanflyKeyboardPageDownTextKR = "Page Down";
const RemYanflyKeyboardLeftKeyKR = "←";
const RemYanflyKeyboardLeftTextKR = "왼쪽";
const RemYanflyKeyboardUpKeyKR = "↑";
const RemYanflyKeyboardUpTextKR = "위";
const RemYanflyKeyboardRightKeyKR = "→";
const RemYanflyKeyboardRightTextKR = "오른쪽";
const RemYanflyKeyboardDownKeyKR = "↓";
const RemYanflyKeyboardDownTextKR = "아래";


//Options Cheats
const RemYanflyOptions_Cheats_ActorDoublePassiveGain_KR = "\\i[56]\\C[27]chikicho";
const RemYanflyOptions_Cheats_ActorDoublePassiveGain_Help_KR = "패시브 습득속도가 2배가 됩니다.\n야한 카린을 빨리 보고싶은 사람에게.\n비서 모드에서만 유효.";
const RemYanflyOptions_Cheats_ActorNoPassiveGain_KR = "\\i[56]\\C[25]패시브 습득금지";
const RemYanflyOptions_Cheats_ActorNoPassiveGain_Help_KR = "카린이 더이상 패시브를 얻지 않도록 합니다.\n현재 정숙함을 유지하면서 플레이하고싶은 사람에게.\n특정 엔딩 이후 프리 모드에서만 유효.";
const RemYanflyOptions_Cheats_EnemyDoublePhysicalDamage_KR = "\\i[429]\\C[14]kickmyass";
const RemYanflyOptions_Cheats_EnemyDoublePhysicalDamage_Help_KR = "적이 주는 물리 데미지가 2배가 됩니다.\n카린이 너무 세지지 않길 바라는 사람에게.\n비서 모드에서만 유효.";
const RemYanflyOptions_Cheats_EnemyTriplePhysicalDamage_KR = "\\i[429]\\C[14]killmenow";
const RemYanflyOptions_Cheats_EnemyTriplePhysicalDamage_Help_KR = "적이 주는 물리 데미지가 3배가 됩니다.\n카린이 빨리 쓰러져주길 바라는 사람에게.\n비서 모드에서만 유효.";
const RemYanflyOptions_Cheats_EnemyDoubleSexualDamage_KR = "\\i[387]\\C[1]FOOOXFT";
const RemYanflyOptions_Cheats_EnemyDoubleSexualDamage_Help_KR = "적이 주는 쾌락 데미지가 2배가 됩니다.\n빨리 쾌락에 타락시키고픈 사람에게.\n비서 모드에서만 유효.";
const RemYanflyOptions_Cheats_EnemyTripleSexualDamage_KR = "\\i[387]\\C[1]givemedrug";
const RemYanflyOptions_Cheats_EnemyTripleSexualDamage_Help_KR = "적이 주는 쾌락 데미지가 3배가 됩니다.\n바로 질척질척해지는 카린을 보고싶은 사람에게.\n비서 모드에서만 유효.";
const RemYanflyOptions_Cheats_EnemyDoubleOrgasmPoint_KR = "\\i[387]\\C[1]tgm";
const RemYanflyOptions_Cheats_EnemyDoubleOrgasmPoint_Help_KR = "적이 절정할 때 필요한 쾌락도가 2배가 됩니다.\n이른 사정을 방지하고 싶은 사람에게.\n비서 모드에서만 유효.";
const RemYanflyOptions_Cheats_EnemyAlwaysAct_KR = "\\i[385]\\C[2]전광석화";
const RemYanflyOptions_Cheats_EnemyAlwaysAct_Help_KR = "적이 매턴 행동합니다.\n적 턴을 넘기고 싶지 않은 사람에게.\n비서 모드에서만 유효.";
const RemYanflyOptions_Cheats_ActorHalfStaminaRegen_KR = "\\i[473]\\C[29]불혹";
const RemYanflyOptions_Cheats_ActorHalfStaminaRegen_Help_KR = "카린의 체력회복량이 1/2이 됩니다.\n조금씩 몰리고 싶은 사람에게.\n비서 모드에서만 유효.";
const RemYanflyOptions_Cheats_ActorThirdStaminaRegen_KR = "\\i[473]\\C[29]지천명";
const RemYanflyOptions_Cheats_ActorThirdStaminaRegen_Help_KR = "카린의 체력회복량이 1/3이 됩니다.\n회복을 대폭 낮추고 싶은 사람에게.\n비서 모드에서만 유효.";
const RemYanflyOptions_Cheats_ActorNoEvasion_KR = "\\i[427]\\C[30]slowmo";
const RemYanflyOptions_Cheats_ActorNoEvasion_Help_KR = "카린이 절대 피하지 않습니다.\n공격을 모두 맞고 싶은 사람에게.\n비서 모드에서만 유효.";
const RemYanflyOptions_Cheats_ActorHalfExpRate_KR = "\\i[361]\\C[30]liquor";
const RemYanflyOptions_Cheats_ActorHalfExpRate_Help_KR = "습득경험치가 절반이 됩니다.\n레벨업에 시간을 더 들이고 싶은 사람에게.\n비서 모드에서만 유효.";
const RemYanflyOptions_Cheats_LessControlFive_KR = "\\i[377]\\C[10]267-555-0150";
const RemYanflyOptions_Cheats_LessControlFive_Help_KR = "요새 통제력이 5 내려갑니다.\n질서가 낮은 상태로 플레이하고 싶은 사람에게.\n비서 모드에서만 유효.";
const RemYanflyOptions_Cheats_LessControlTen_KR = "\\i[377]\\C[10]555-891-0011";
const RemYanflyOptions_Cheats_LessControlTen_Help_KR = "요새 통제력이 10 내려갑니다.\n빨리 요새의 질서를 떨어뜨리고 싶은 사람에게.\n비서 모드에서만 유효.";
const RemYanflyOptions_Cheats_InstantRiotsOne_KR = "\\i[407]\\C[7]thereisnocowlevel";
const RemYanflyOptions_Cheats_InstantRiotsOne_Help_KR = "감옥레벨1에서 3일마다 폭동이 발생합니다.\n특정한 스테이지를 다시 즐기고싶은 사람에게.\n비서 모드에서만 유효.";
const RemYanflyOptions_Cheats_InstantRiotsTwo_KR = "\\i[407]\\C[7]the gathering";
const RemYanflyOptions_Cheats_InstantRiotsTwo_Help_KR = "감옥레벨2에서 3일마다 폭동이 발생합니다.\n특정한 스테이지를 다시 즐기고싶은 사람에게.\n비서 모드에서만 유효.";
const RemYanflyOptions_Cheats_InstantRiotsThree_KR = "\\i[407]\\C[7]oinkoinkoink";
const RemYanflyOptions_Cheats_InstantRiotsThree_Help_KR = "감옥레벨3에서 3일마다 폭동이 발생합니다.\n특정한 스테이지를 다시 즐기고싶은 사람에게.\n비서 모드에서만 유효.";
const RemYanflyOptions_Cheats_InstantRiotsFour_KR = "\\i[407]\\C[7]mewmewmew";
const RemYanflyOptions_Cheats_InstantRiotsFour_Help_KR = "감옥레벨4에서 3일마다 폭동이 발생합니다.\n특정한 스테이지를 다시 즐기고싶은 사람에게.\n비서 모드에서만 유효.";
const RemYanflyOptions_Cheats_WaitressLog_KR = "\\i[282]\\C[17]컨닝햄";
const RemYanflyOptions_Cheats_WaitressLog_Help_KR = "웨이트리스로 있을 때 텍스트 로그를 표시합니다.\n주문을 암기하고싶지 않은 사람에게. \n비서 모드에서만 유효.";

const RemYanflyOptions_Cheats_WaitressMemory_KR = "\\i[282]\\C[17]웨이트리스 기억력 게임";
const RemYanflyOptions_Cheats_WaitressMemory_Help_KR = "웨이트리스로 일할 때 손님이 주문한 음료 아이콘을 표시하지 않습니다.\n주문을 암기하고싶은 사람에게. \n모든 모드에서 유효.";

const RemYanflyOptions_Cheats_NoAutoSave_KR = "\\i[282]\\C[18]자동저장 삭제\\C[0]";
const RemYanflyOptions_Cheats_NoAutoSave_Help_KR = "자동저장을 끕니다.\n세이브를 자주 해주세요!\n비서 모드에서만 유효.";

const RemYanflyOptions_BoobsSize_KR = "\\i[58]카린의 가슴크기";
const RemYanflyOptions_BoobsSize_Help_KR = "카린의 가슴을 거유(H컵)나 폭유(K컵)로 바꿀 수 있습니다.\n외견만 변화하며 게임, 대사에는 영향이 없습니다.";
const RemYanflyOptions_BoobsSize_One_KR = "K컵(기본)";
const RemYanflyOptions_BoobsSize_Two_KR = "H컵";
const RemYanflyOptions_BoobsSize_Three_KR = "P컵";

const RemYanflyOptions_HairColor_KR = "\\i[594]카린의 머리카락 색";
const RemYanflyOptions_HairColor_Help_KR = "카린의 머리카락 색상(컷인 제외)을 변경할 수 있습니다.\n★외형만 변할 뿐 게임, 대사에 영향을 주지 않습니다.\n※별도로 『털DLC』 필요";
const RemYanflyOptions_HairColor_One_KR = "보라색(기본)";
const RemYanflyOptions_HairColor_Two_KR = "금발";
const RemYanflyOptions_HairColor_Three_KR = "검정";

const RemYanflyOptions_DisplayPubicHair_KR = "\\i[595]음모 처리";
const RemYanflyOptions_DisplayPubicHair_Help_KR = "음모 표시여부를 변경합니다.\nON : 카린에게 잘 정돈된 음모가 납니다.\nOFF : 카린의 성기가 매끌매끌해집니다.";

const RemYanflyOptions_PubicColor_KR = "\\i[595]카린의 보지털 색";
const RemYanflyOptions_PubicColor_Help_KR = "카린의 음모 색상(컷인 제외)를 변경합니다.\n★외형만 변할 뿐 게임, 대사에 영향을 주지 않습니다.\n※별도로 『털DLC』필요";
const RemYanflyOptions_PubicColor_Zero_KR = "머리카락 색과 똑같이(기본)";
const RemYanflyOptions_PubicColor_One_KR = "보라색";
const RemYanflyOptions_PubicColor_Two_KR = "금발";
const RemYanflyOptions_PubicColor_Three_KR = "검정";

const RemYanflyOptions_PubicStyle_KR = "\\i[595]보지털 형태";
const RemYanflyOptions_PubicStyle_Help_KR = "카린의 음모 스타일을 변경합니다.\n★많아도 적어도 게임에 영향은 없습니다.\n※별도로 『털DLC』 필요";
const RemYanflyOptions_PubicStyle_One_KR = "보통(기본)";
const RemYanflyOptions_PubicStyle_Two_KR = "시원";
const RemYanflyOptions_PubicStyle_Three_KR = "수북";

const RemYanflyOptions_ToggleMaleStrayPubes_KR = "\\i[596]자지털 붙음 유무";
const RemYanflyOptions_ToggleMaleStrayPubes_Help_KR = "ON : 카린의 몸에 남자의 음모가 달라붙습니다.\nOFF : 남자들의 음모가 빠지지 않습니다.\n※별도로 『털DLC』 필요";
const RemYanflyOptions_StrayPubesAmount_KR = "\\i[596]달라붙는 자지털 양";
const RemYanflyOptions_StrayPubesAmount_Help_KR = "카린에게 붙는 자지털의 양(확률)을 변경합니다.\n자지털이 붙는 정도를 조절하고 싶을 경우에 시험해주세요\n※별도로 『털DLC』 필요";
const RemYanflyOptions_StrayPubesAmount_One_KR = "보통(기본)";
const RemYanflyOptions_StrayPubesAmount_Two_KR = "적게";
const RemYanflyOptions_StrayPubesAmount_Three_KR = "많이";


const RemYanflyOptions_LovenseEnable_KR = "1. Lovense 설정";
const RemYanflyOptions_LovenseEnable_Help_KR = "ON : Lovense의 제품과 게임을 연동하는 설정을 실행합니다.\n OFF : Lovense와 게임이 연동되지 않습니다.\n※『Lovense』의 제품은 별매";

const RemYanflyOptions_LovenseConnectionType_KR = "2. 접속부 설정";
const RemYanflyOptions_LovenseConnectionType_Help_KR = "Lovense Remote를 연결할 곳을 선택해 주세요.";
const RemYanflyOptions_LovenseConnectionType_Mobile_KR = "iPhone/Android";
const RemYanflyOptions_LovenseConnectionType_PC_KR = "Windows";

const RemYanflyOptions_LovenseMobileIP_KR = " 로컬 IP";
const RemYanflyOptions_LovenseMobileIP_Help_KR = "Lovense Remote 어플의 게임 모드 화면에 표시되는 로컬IP를 입력해 주세요.\n※인터넷 방송에서 이용할 경우 이 화면을 비표시로 하고 입력해 주세요.";
const RemYanflyOptions_LovenseMobileIP_Text_KR = "IP를 입력한다";

const RemYanflyOptions_LovenseMobilePort_KR = "　Http포트";
const RemYanflyOptions_LovenseMobilePort_Help_KR = "Lovense Remote 어플의 게임 모드 화면에 표시되는 Http Port를 입력해 주세요.\n※인터넷 방송에서 이용할 경우 이 화면을 비표시로 하고 입력해 주세요.";
const RemYanflyOptions_LovenseMobilePort_Text_KR = "Http Port를 입력한다";

const RemYanflyOptions_LovenseMobileHint_KR = "입력해 주세요";

const RemYanflyOptions_LovenseConnectToys_KR = "3. Lovense 접속";
const RemYanflyOptions_LovenseConnectToys_Help_KR = "설정이 완료되면 『연결한다』버튼을 눌러주세요.";
const RemYanflyOptions_LovenseConnectToys_Text_KR = "연결한다";

const RemYanflyOptions_LovenseNoToysConnected_KR = ">>>현재 Lovense 제품이 연결되지 않았습니다.<<<";
const RemYanflyOptions_LovenseNoToysConnected_Help_KR = "Lovense 제품과 연결에 문제가 있을 경우에는, 설정을 다시 확인해 주세요.\n그리고 Lovense 제품이 같은 Wi-Fi를 쓰는지, VPN이 꺼져 있는지 확인해 주세요.";


const RemYanflyOptions_LovenseToyNameList_KR = "이름 : %1 배터리 :  %2%";
const RemYanflyOptions_LovenseToyNameList_Test_KR = "테스트";

const RemYanflyOptions_LovenseIntensity_KR = "[옵션] 제품 전체 강도";
const RemYanflyOptions_LovenseIntensity_Help_KR = "Lovense 제품의 강도를 변경합니다.\n※강도는 플레이나 카린의 타락 상태에 따라 변화하니 주의하세요.\n※익숙해질 때까지는 낮은 강도로 시험해 보세요.";

const RemYanflyOptions_LovenseTime_KR = "[옵션] 제품 전체 지속시간";
const RemYanflyOptions_LovenseTime_Help_KR = "플레이 대부분(위아래 동시삽입 제외)은 Lovense 제품이 자동정지하기 전에 설정대로 반응합니다.\n이 옵션은 Lovense 제품이 정지하기까지 지속시간을 변경합니다.";
const RemYanflyOptions_LovenseTime_Zero_KR = "간격 절반";
const RemYanflyOptions_LovenseTime_One_KR = "기본";
const RemYanflyOptions_LovenseTime_Two_KR = "간격 2배";
const RemYanflyOptions_LovenseTime_Three_KR = "간격 3배";
const RemYanflyOptions_LovenseTime_Four_KR = "간격 5배";
const RemYanflyOptions_LovenseTime_Five_KR = "정지없이 계속";
const RemYanflyOptions_LovenseTime_Six_KR = "간격 1/6";
const RemYanflyOptions_LovenseTime_Seven_KR = "간격 1/4";

const RemYanflyOptions_LovensePumpEnable_KR = "[옵션] 에어펌프 설정";
const RemYanflyOptions_LovensePumpEnable_Help_KR = "Max 및 Max2 에는 에어펌프로 수축하는 기능이 있습니다.\nON : 에어펌프를 사용합니다.\nOFF : 에어펌프를 사용하지 않습니다.";

const RemYanflyOptions_LovenseEnableRAID_KR = "4. RAID 설정";
const RemYanflyOptions_LovenseEnableRAID_Help_KR = "\\}Rem's Advanced Integrated Disco(줄여서 RAID)은 카린의 교도소 전용 독자적 제품의 통합 시스템입니다.\nON : 제품마다 부위별로 개별설정을 할 수 있으며, 더욱 세심한 체험이 가능합니다.\nOFF : 연결된 제품이 모든 플레이에 반응합니다.";

const RemYanflyOptions_RAIDparty_Help_KR = "\\}\\C[4]스타일 A\\C[0] : 설정한 부위의 플레이에만 반응합니다.\n\\C[5]스타일 B\\C[0] : 설정한 부위의 플레이에 반응하지만, 다른 제품으로 선택한 부위는 반응하지 않습니다.";
const RemYanflyOptions_RAIDparty_Solo_KR = "스타일 A";
const RemYanflyOptions_RAIDparty_Party_KR = "스타일 B";

const RemYanflyOptions_RAIDsexact_Help_KR = "이 상품에 할당할 부위를 최대 5개까지 선택합니다.\n할당된 부위로 플레이가 발생하면, 이 제품이 확실하게 반응합니다. \n설정한 부위의 플레이가 발생할 경우, 제품은 더욱 세게 반응합니다.";
const RemYanflyOptions_RAIDsexact_Mouth_KR = "입";
const RemYanflyOptions_RAIDsexact_Boobs_KR = "가슴";
const RemYanflyOptions_RAIDsexact_Clit_KR = "클리토리스";
const RemYanflyOptions_RAIDsexact_Pussy_KR = "질";
const RemYanflyOptions_RAIDsexact_Anal_KR = "아날";
const RemYanflyOptions_RAIDsexact_Exhibitionism_KR = "노출";
const RemYanflyOptions_RAIDsexact_Masochism_KR = "마조히스트";
const RemYanflyOptions_RAIDsexact_Sadism_KR = "새디스트";
const RemYanflyOptions_RAIDsexact_Rimjob_KR = "항문빨기";
const RemYanflyOptions_RAIDsexact_Footjob_KR = "발";
const RemYanflyOptions_RAIDsexact_Hands_KR = "손";

const RemYanflyOptions_RAIDarousal_Help_KR = "ON : 카린의 발정에 연동해서 이 제품이 미약하게 반응합니다.\nOFF : 이 제품이 카린의 발정에 반응하지 않습니다.";
const RemYanflyOptions_RAIDarousal_ON_KR = "발정 ON";
const RemYanflyOptions_RAIDarousal_OFF_KR = "발정 OFF";
const RemYanflyOptions_RAIDorgasm_Help_KR = "ON : 카린의 절정에 연동해서 제품이 격하게 반응합니다.\nOFF : 이 제품이 카린의 절정에 반응하지 않습니다.";
const RemYanflyOptions_RAIDorgasm_ON_KR = "절정 ON";
const RemYanflyOptions_RAIDorgasm_OFF_KR = "절정 OFF";

const RemYanflyOptions_RAIDintensity_Help_KR = "이 제품의 강도를 선택할 수 있습니다.\n『강도 공유』를 선택하면 연결된 제품 모두 다 같은 강도로 설정되어 적용됩니다.";
const RemYanflyOptions_RAIDintensity_Global_KR = "강도 공유";

const RemYanflyOptions_RAIDtime_Help_KR = "이 제품의 간격을 설정합니다.\n『간격 공유』를 선택하면 연결된 제품이 모두 다 같은 간격이 적용됩니다.";
const RemYanflyOptions_RAIDtime_Global_KR = "간격 공유";
const RemYanflyOptions_RAIDTime_One_KR = "기본";
const RemYanflyOptions_RAIDTime_Two_KR = "간격 2배";
const RemYanflyOptions_RAIDTime_Three_KR = "간격 3배";
const RemYanflyOptions_RAIDTime_Four_KR = "간격 5배";
const RemYanflyOptions_RAIDTime_Five_KR = "정지없이 계속";
const RemYanflyOptions_RAIDTime_Six_KR = "간격 1/6";
const RemYanflyOptions_RAIDTime_Seven_KR = "간격 1/4";
const RemYanflyOptions_RAIDTime_Eight_KR = "간격 절반";

//Save
const RemYanflySaveYesKR = "네";
const RemYanflySaveNoKR = "아니오";
const RemYanflySaveEmptyKR = "빈 파일";
const RemYanflySaveDeleteTextKR = "이 파일을 삭제합니까?";
const RemYanflySaveLoadTextKR = "이 파일을 불러옵니까?";
const RemYanflySaveSaveTextKR = "이 파일에 덮어씌워도 괜찮습니까?";
const RemYanflySaveInvalidTextKR = "이 파일은 다른 게임의 파일입니다.";
const RemYanflySaveSelectHelpKR = "파일을 선택해 주세요.";
const RemYanflySaveLoadHelpKR = "이 파일을 불러옵니다.";
const RemYanflySaveSaveHelpKR = "이 파일에 세이브합니다.";
const RemYanflySaveDeleteHelpKR = "이 파일을 삭제합니다.";
const RemYanflyAutosavingKR = "세이브중...";

const RemYanflySavePlaytimeKR = "플레이 타임 : ";
const RemYanflySaveTotalSavesKR = "세이브 횟수 : ";
const RemYanflySaveTotalDaysKR = "주회차를 포함한 경과일수 : ";
const RemYanflySaveTotalPlaythroughsKR = "주회차 횟수 : ";
const RemYanflySaveTotalGameClearsKR = "클리어 횟수 : ";
const RemYanflySaveTotalEndingsKR = "Полученные концовки:"; // currently unused

const RemYanflyTargetEverybodyKR = "Everybody"; // currently unused
const RemYanflyTargetMultiEverybodyKR = "Anyone"; // currently unused
const RemYanflyTargetMultiAlliesKR = "Any Ally"; // currently unused
const RemYanflyTargetMultiFoesKR = "Any Enemy"; // currently unused
const RemYanflyTargetFemaleAllyKR = "Female Ally"; // currently unused
const RemYanflyTargetFemaleEnemyKR = "Female Enemy"; // currently unused

const RemFTKRSkillTreeConfirmTextKR = "%2";
const RemFTKRSkillTreeYesKR = "실행";
const RemFTKRSkillTreeNoKR = "취소";
const RemFTKRSkillTreeEdictPointsKR = "지령치(EP) : ";
const RemFTKRSkillTreeEdictPointsAbbrKR = "EP";
const RemFTKRSkillTreeOrderKR = "질서 : ";
const RemFTKRSkillTreeFundingKR = "자금 : ";
const RemFTKRSkillTreeFundingCostKR = "소모 : ";
const RemFTKRSkillTreeCostItemKR = "%1 Cost:"; // currently unused
const RemFTKRSkillTreePreReqTextKR = "\\c[16]습득조건 : ";
const RemFTKRSkillTreeReqTypeEdictKR = "지령 : ";
const RemFTKRSkillTreeReqTypePassiveKR = "패시브 : ";


const RemErrorMessageKR = "에러가 발생했습니다. 'Array buffer allocation failed', 'resolution', 'Out of memory' 가 표시되어 있다면 컴퓨터 메모리가 부족하다는 뜻입니다. 게임을 켜기 전에 소프트웨어, 특히 브라우저를 모두 닫아주세요. 다른 에러가 발생했을 경우, 에러 화면을 캡쳐해서 디스코드의 #kp-bug-reports 에 올려주세요. 또한 상세한 상황을 설명해 주신다면 더욱 도움이 됩니다.";

const RemEquipTypesKR = ["","무기","악세사리","칭호","장비 프리셋 불러오기", "장비 프리셋 저장"];

const RemSkillTypesKR = ["",
"공격스킬",
"정신스킬",
"성스킬",
"의지스킬",
"강화스킬",
"약화스킬",
"패시브",
"지령",
"청각",
"시각",
"균형잃음",
"넘어짐",
"자위",
"무장해제됨",
"웨이트리스",
"바텐더",
"접수원",
"화장실",
"자위",
"스트리퍼",
"중단",
"트레이너"
];

//Enemy Types
const RemPrisonerGenericKR = "죄수";
const RemPrisonerGuardKR = "경비병";
const RemPrisonerThugKR = "깡패";
const RemPrisonerGoblinKR = "고블린";
const RemPrisonerOrcKR = "오크";
const RemPrisonerSlimeKR = "슬라임";
const RemPrisonerNerdKR = "오타쿠";
const RemPrisonerRogueKR = "도적";
const RemPrisonerLizardmanKR = "리자드맨";
const RemPrisonerHomelessKR = "부랑자";
const RemPrisonerWerewolfKR = "웨어울프";
const RemPrisonerYetiKR = "예티";


const RemReceptionistVisitorKR = "면회인";
const RemReceptionistFanKR = "팬";

//Boss Types
const RemBossYasuKR = "부간수장";
const RemBossTonkinKR = "오크";
const RemBossCargillKR = "박사";
const RemBossAronKR = "알파 리자드맨";
const RemBossNoinimKR = "그레이트 예티";
const RemBossGobrielKR = "캡틴";
const RemBossEmperorKR = "폐하";

//Disable Smegma Text
const RemDisableSmegmaSkill815NameKR = "발기에 눈돌아간 자지청소부";


//Skills
const RemRestoreMindPartialSuccessKR = "%1의 절정이 살짝 가라앉았다.";
const RemRestoreMindFullSuccessKR = "%1의 절정이 완전히 가라앉았다!";
const RemRestoreMindFailureKR = "%1의 절정이 가라앉지 않았다...";

//Orgasm Skill Message
const RemOrgasmSkillMessageKarrynKissKR = " 키스가 너무 기분좋아서";
const RemOrgasmSkillMessageKarrynPettingKR = " 자지를 애무하는 쾌감에";
const RemOrgasmSkillMessageKarrynHandjobKR = " 자지를 문지르는 쾌감에";
const RemOrgasmSkillMessageKarrynBlowjobKR = " 자지를 빠는 쾌감에";
const RemOrgasmSkillMessageKarrynTittyFuckKR = " 파이즈리의 쾌감에";
const RemOrgasmSkillMessageKarrynPussySexKR = " 보지로 섹스하는 쾌감에";
const RemOrgasmSkillMessageKarrynAnalSexKR = " 아날이 주는 쾌감에";
const RemOrgasmSkillMessageEnemyKissKR = " 키스 당해서";
const RemOrgasmSkillMessageEnemyPettingKR = " 애무 받아서";
const RemOrgasmSkillMessageEnemyHandjobKR = " 손으로 해주다보니";
const RemOrgasmSkillMessageEnemyBlowjobKR = " 입으로 빨아주다보니";
const RemOrgasmSkillMessageEnemyTittyFuckKR = " 가슴으로 문지르다보니";
const RemOrgasmSkillMessageEnemyPussySexKR = " 자지에 박혀서";
const RemOrgasmSkillMessageEnemyAnalSexKR = " 아날에 자지가 들어와서";
const RemOrgasmSkillMessageEnemyCunnilingusKR = " 보지를 핥아져";
const RemOrgasmSkillMessageBukkakeKR = " 정액이 몸에 닿아";
const RemOrgasmSkillMessageSwallowKR = " 정액을 마셔서";
const RemOrgasmSkillMessagePussyCreampieKR = " 질에 정액이 들어와";
const RemOrgasmSkillMessageAnalCreampieKR = " 아날에 정액이 들어와";
const RemOrgasmSkillMessageMasochismKR = " 마조히스트적 쾌감에";
const RemOrgasmSkillMessageSadismKR = " 새디스틱한 쾌감에";
const RemOrgasmSkillMessageMasturbateKR = " 자위에서 오는 쾌감에";
const RemOrgasmSkillMessageSpankKR = " 엉덩이를 맞아서";
const RemOrgasmSkillMessageTalkKR = " 야한 단어를 들어서";
const RemOrgasmSkillMessageSightKR = " 남자들 시선에 흥분해";
const RemOrgasmSkillMessageToyKR = " 장난감으로";

//Waitress
const RemAlcoholTypeWaterKR = "물";
const RemAlcoholTypePaleAleKR = "생맥주";
const RemAlcoholTypeDarkAleKR = "흑맥주";
const RemAlcoholTypeVodkaKR = "보드카";
const RemAlcoholTypeTequilaKR = "테킬라";
const RemAlcoholTypeGoldRumKR = "골드럼";
const RemAlcoholTypeOverproofRumKR = "고농도 럼";
const RemAlcoholTypeWhiskeyKR = "위스키";
const RemAlcoholTypeDirtyMugsSingularKR = "빈 잔";
const RemAlcoholTypeDirtyMugsPluralKR = "쌓인 잔";
const RemAlcoholTypeDirtyGlassesSingularKR = "빈 술잔";
const RemAlcoholTypeDirtyGlassesPluralKR = "쌓인 술잔";

const RemWaitressGetsTipKR = "\\C[3]%1은 팁을 %2 받았다!";
const RemWaitressEnemySleepKR = "%1, 취해서 테이블에 엎어져 잠들었다.";
const RemWaitressEnemyWakeUpKR = "%1, 소동으로 눈을 떴다.";
const RemWaitressEnemyLeavesBarKR = "\\C[8]%1, 일어나 주점을 떠났다.";
const RemWaitressEnemyLeavesBarDrunkKR = "\\C[8]%1, 휘청거리며 주점을 떠났다.";
const RemWaitressEnemyCallingForWaitressKR = "\\C[2]%1, 웨이트리스를 불렀다!";
const RemWaitressEnemyDidntCallForWaitressKR = "그러나 손님은 아직 고민중이다.";
const RemWaitressEnemyAskingForDrinkKR = "\\C[2]%1에게 %2 주문을 받았다.";
const RemWaitressEnemyAskingForWaitressToDrinkKR = "%1에게 남긴 술을 마시면 팁을 주겠다는 제안을 받았다.";
const RemWaitressEnemyAskingForWaitressToFlashKR = "%1에게 속살을 드러내면 팁을 주겠다는 제안을 받았다.";
const RemWaitressRefusesDrinkKR = "그러나 %1은 자존심에 거절했다.";
const RemWaitressAcceptsDrinkKR = "\\C[31]손님이 주목하는 한가운데에서 %1은 한모금 홀짝였다.";
const RemWaitressWontFlashKR = "그러나 %1은 거절했다.";
const RemWaitressFlashesKR = "\\C[27]%1은 웃으면서 호응해줬다.";
const RemWaitressEnemyRefusesDrinkKR = "그러나 %1은 거절했다.";
const RemWaitressEnemyAcceptsDrinkKR = "%1에게 잔을 주자, 돈을 지불했다.";
const RemWaitressEnemyAlcoholKissKR = "\\C[27]%1, 입에 머금을 술을 %2에게 마시게 했다!";
const RemWaitressEnemyCheerForBrawlNoDrinkKR = "%1, 싸움을 걸고있다.";
const RemWaitressEnemyCheerForBrawlYesDrinkKR = "%1, 싸움을 즐기며 술을 마셨다.";
const RemWaitressBrawlStartKR = "\\C[18]싸움이 시작됐다!!";
const RemWaitressBrawlJoinKR = "\\C[18]%1, 싸움에 참가했다!";
const RemWaitressBarDamageKR = "\\C[3]주점에 %1G 손해발생!";
const RemWaitressEnemyTellsJokeKR = "%1, 농담을 꺼냈다.";
const RemWaitressEnemyContinuesJokeKR = "%1, 아직 농담을 얘기한다.";
const RemWaitressEnemyHearsJokeKR = "%1, 그런 %2의 농담에 맞춰줬다.";
const RemWaitressEnemyLaughsJokeKR = "%2의 농담에 %1이 웃었다.";
const RemWaitressEnemyChugsDrinkKR = "%1, 한잔 마셨다.";
const RemWaitressEnemyChugsDrinkFinishKR = "%1, 남은 술을 단번에 마셨다.";
const RemWaitressEnemyChattingKR = "%1와 %2, 서로를 보며 떠들었다.";
const RemWaitressEnemyChattingHimselfKR = "%1, 혼잣말을 중얼거렸다.";
const RemWaitressEnemyEntersBarKR = "\\C[2]가게에 들어온 %1, %2에 앉았다.";
const RemWaitressEnemyFumingKR = "\\C[10]%1, 어쩐지 암울한 얼굴이다......";
const RemWaitressEnemyStartSexKR = "\\C[27]%2, 취한 %2를 탁자에다 짓눌렀다!!!";
const RemWaitressEnemyRefillsKarrynMugKR = "%1, %2의 잔에다 맥주를 더 부었다!";
const RemWaitressEnemyDumpsKarrynMugKR = "%1, 잔에 든 술을 버렸다!";
const RemWaitressDrinkSemenMugKR = "\\C[27]%1은 잔에 든 정액을 다 마셨다!! 정액량 \\C[1]%2ml\\C[0]!!";

const RemReceptionistVisitingRoomA_KR = "면회실A";
const RemReceptionistVisitingRoomB_KR = "면회실B";
const RemReceptionistVisitingRoomC_KR = "면회실C";
const RemReceptionistVisitingRoomD_KR = "면회실D";

const RemReceptionistNewVisitorKR = "\\C[2]%1, 번호표를 받아 자리에 앉았다.";
const RemReceptionistNewGoblinKR = "\\C[10]고블린이 침입했다!";
const RemReceptionistGoblinDefeatedKR = "\\C[8]%1, 물러났다!";
const RemReceptionistVisitorEntersVisitingRoomKR = "\\C[11]%1, %2에 들어갔다.";
const RemReceptionistVisitingRoomStatusOccupiedPluralKR = "\\C[23]\"%1은 %2분 남았습니다!\"";
const RemReceptionistVisitingRoomStatusOccupiedSingleKR = "\\C[23]\"%1은 1분 남았습니다!\"";
const RemReceptionistVisitingRoomStatusNotOccupiedKR = "\\C[23]\"현재 %1은 비었습니다!\"";
const RemReceptionistVisitorWantsToHandOverPaperKR = "%1, 다 적은 신청서를 주려고 한다.";
const RemReceptionistVisitorAngryComplaint_OccupiedVisitingRoomKR = "%2는 이미 사람이 있다고 불만을 토로하는 \\C[10]%1.";
const RemReceptionistGreetVisitorResultNormalKR = "%1의 목적은 죄수 면회인 듯 하다.";
const RemReceptionistFinishedProcessingPapersKR = "신청서 처리완료. %1의 면회시간은 %2분.";
const RemReceptionistVisitorLeavesAngryKR = "\\C[10]%1, 화를 내며 접수처에서 떠났다!";
const RemReceptionistFanLeavesHappyKR = "%1, 웃으며 접수처에서 떠나갔다.";
const RemReceptionistFanLeavesDejectedKR = "%1, 실망하며 접수처에서 떠나갔다.";
const RemReceptionistPervLeavesHappyKR = "%1, 후련하게 접수처에서 떠나갔다.";
const RemReceptionistPervLeavesAngryKR = "%1, 쌓인 채로 접수처를 떠났다.";
const RemReceptionistNotHereForVisitationKR = "%1, 카린을 만나러 왔을 뿐이었다!";

const RemGloryBattleEndKR = "문이 열린다...";
const RemGloryLeftStallCockNameKR = "왼쪽 자지";
const RemGloryRightStallCockNameKR = "오른쪽 자지";
const RemGloryGuestEnterBathroomKR = "\\C[8]화장실에 사람이 들어온 것 같다......";
const RemGloryGuestLeaveBathroomKR = "\\C[8]누군가 화장실에서 나갔다.";
const RemGloryGuestEnterLeftStallKR = "\\C[7]누군가 왼쪽 칸에 들어왔다.";
const RemGloryGuestLeaveLeftStallKR = "\\C[7]왼쪽 칸에서 누가 나간 것 같다.";
const RemGloryGuestEnterRightStallKR = "\\C[7]누군가 왼쪽 칸에 들어왔다.";
const RemGloryGuestLeaveRightStallKR = "\\C[7]오른쪽 칸에서 누가 나간 것 같다.";
const RemGloryGuestPissingLeftStallKR = "\\C[8]왼쪽 칸에서 오줌누는 소리가 난다.";
const RemGloryGuestEatingLeftStallKR = "\\C[8]왼쪽 칸에서 뭘 먹는 소리가 난다.";
const RemGloryGuestPissingRightStallKR = "\\C[8]오른쪽 칸에서 오줌누는 소리가 난다.";
const RemGloryGuestEatingRightStallKR = "\\C[8]오른쪽 칸에서 뭘 먹는 소리가 난다.";
const RemGloryGuestShowedThroughLeftHoleKR = "\\C[27]왼쪽 구멍에서 자지가 나타났다!";
const RemGloryGuestShowedThroughRightHoleKR = "\\C[27]오른쪽 구멍에서 자지가 나타났다!";

const RemStripperBattleEndKR = "스트립 종료";
const RemStripperEnemyTossCondomOntoStageKR = "%1, 콘돔을 스테이지로 던졌다.";
const RemStripperEnemyTipsCondomToBeltKR = "%1, %2의 가터벨트에 콘돔을 묶었다!";
const RemStripperEnemyTipsCondomToBraKR = "%1, %2의 브래지어에 콘돔을 묶었다!";
const RemStripperEnemyTipsCondomToNippleKR = "%1, %2의 유두에다 콘돔을 묶었다!";
const RemStripperEnemyTipsCondomToHairbandKR = "%1, %2의 머리띠에다 콘돔을 묶었다!";
const RemStripperEnemyTipsCondomToSidetailKR = "%1, %2의 사이드테일에 콘돔을 묶었다!";
const RemStripperEnemyEntersStripClubKR = "\\C[8]%1, 자리에 앉았다.";
const RemStripperEnemyLeavesStripClubHappyKR = "\\C[8]%1, 후련해진 표정으로 떠나갔다.";
const RemStripperEnemyLeavesStripClubUnhappyKR = "\\C[8]%1, 불만스러운 표정으로 떠나갔다.";
const RemStripperEnemyJoinVIPSingularKR = "\\C[8]%1은 남아있는 손님의 손을 잡고 VIP룸으로 들어갔다......";
const RemStripperEnemyJoinVIPPluralKR = "\\C[8]%1은 남아있는 손님들의 손을 잡고 VIP룸으로 들어갔다......";

const RemTrainerEnemyObserveFormExcellentKR = "\\C[8]%1의 자세는 \\C[10]완벽하게 잡혀있다\\C[8]!";
const RemTrainerEnemyObserveFormGoodKR = "\\C[8]%1의 자세는 안정적이다. %2";
const RemTrainerEnemyObserveFormOkayKR = "\\C[8]%1의 자세는 개선의 여지가 있어 보인다. %2";
const RemTrainerEnemyObserveFormPoorKR = "\\C[8]%1의 자세는 문제가 산더미같다. %2";
const RemTrainerEnemyObserveFormBadKR = "\\C[8]%1의 자세는 완전히 엉망이다...... %2";
const RemTrainerEnemyObserveFormMaxKR = "\\C[8]그리고 이것이 그의 \\C[10]자기기록\\C[8]이라고 한다."; //上のGood～Badの％２はここ
const RemTrainerEnemyObserveStaminaTiredKR = "\\C[8]그리고, 피곤함도 보이기 시작한다.";
const RemTrainerEnemyObserveStaminaExhaustedKR = "\\C[8]그리고, 꽤 피곤이 쌓인 듯하다.";
const RemTrainerEnemyEntersGymKR = "\\C[2]%1, 체육관에 들어와 운동을 시작했다.";
const RemTrainerEnemyLeavesGymFinishedWorkoutKR = "\\C[8]%1, 운동을 끝내고 체육관을 떠났다.";
const RemTrainerEnemyLeavesGymFailedWorkoutKR = "\\C[8]%1, 도중에 단념하고는 지친듯 체육관을 떠났다.";
const RemTrainerEnemyLeavesGymBlueballedKR = "\\C[8]%1, 안절부절 못하고 우물쭈물거리는 표정을 지으며 체육관을 떠났다.";
const RemTrainerEnemyLeavesGymHappyKR = "\\C[8]%1, 운동을 끝내진 못 했지만, 후련한 표정으로 체육관을 떠났다.";
const RemTrainerRinkanSpatsRippedKR = "카린의 스패츠가 찢어졌다!";

const RemMidBattleEnemyReinforcementKR = "\\C[2]%1, 증원으로 왔다!";


const RemLevelFiveFreeBattleDefeatSettingKR = [
"무작위",
"감옥레벨1 주점 창고",
"감옥레벨2 남자용 화장실",
"감옥레벨3 독방",
"감옥레벨4 폐기구역",
"감옥레벨5 제단"
];
