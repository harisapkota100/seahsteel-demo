// ================= js/index-i18n.js =================

// 1) Page-specific translations for Index page
const indexTranslations = {
  en: {
    HERO_HEADING:      "Forging the Future of Steel",
    HERO_SUBTEXT:      "Delivering high-performance steel pipes across the globe",

    OVERVIEW_TITLE:    "Our Foundation in the UAE",
    OVERVIEW_P1:
      "SeAH Steel Corp. established the local manufacturer at Ras Al Khaimah, UAE and commenced 1st production from March, 2011. Its name is SeAH Steel UAE LLC. We, SeAH Steel UAE LLC, have faithfully carried out the projects improving our quality and internal management so far, as one of the members of energy developers.",
    OVERVIEW_P2:
      "Above all, we have identified the fundamental characteristics of steel products through the regular technical interchange with raw material suppliers. Moreover, we are accelerating technical development to meet the customers’ demands, especially for high corrosion-resistant products with intense quality — a key requirement in this region. Of course, we strive to manufacture the best products with perfect quality, using all NDT testers and inspection equipment specially required for sour service and heat treatment pipes. On the basis of accumulated technology and know-how of SeAH Steel Corp. (Est. 1960), SeAH Steel UAE has executed numerous projects in cooperation with global companies across the Middle East & Africa. We promise to approach our customers with greater quality and a well-managed system, and to remain an honest company that values your voice forever.",

    MAIN_PRODUCTS_TITLE: "MAIN PRODUCTS",
    PROD1_TITLE:        "PROCESS PIPE",
    PROD1_DESC:
      "Designed for handling fluids and gases within chemical, oil & gas, and power plants. Made to withstand internal pressures and high temperatures.",
    PROD2_TITLE:        "STRUCTURAL PIPE",
    PROD2_DESC:
      "Used in civil and industrial construction for frameworks, supports, towers, and load-bearing applications. Known for strength and uniformity. It offers excellent weldability and adaptability.",
    PROD3_TITLE:        "LINE PIPE",
    PROD3_DESC:
      "Engineered for transporting oil, gas, and water over long distances. Typically coated for corrosion protection and built to meet international pipeline standards.",

    STAT1:              "15+ Years in Operation",
    STAT2:              "100+ Global Clients",
    STAT3:              "350,000+ Tons Delivered",
    STAT4:              "ISO/API Certified",

    INDUSTRIES_TITLE:   "Industries We Serve",
    IND1:               "Oil & Gas",
    IND2:               "Water Infrastructure",
    IND3:               "Construction",
    IND4:               "Energy",

    NEWS_TITLE:          "Latest News",
    NEWS_ITEM1_TEXT:     "SeAH Steel UAE at Make It In The Emirates",
    NEWS_ITEM2_TEXT:     "SeAH Steel UAE Obtained ISO-17025 Certificate",
    NEWS_ITEM3_TEXT:     "Historic Inauguration Ceremony",
    SEE_ALL_NEWS:        "See All News"
  },

  ar: {
    HERO_HEADING:      "مؤسِّسون مستقبل الصلب",
    HERO_SUBTEXT:      "تقديم أنابيب فولاذية عالية الأداء في جميع أنحاء العالم",

    OVERVIEW_TITLE:    "أساسنا في الإمارات",
    OVERVIEW_P1:
      "أسست شركة سي إيه إتش ستيل كورب المصنع المحلي في رأس الخيمة، الإمارات العربية المتحدة، وبدأت الإنتاج الأول في مارس 2011. اسمه شركة سي إيه إتش ستيل الإمارات ش.ذ.م.م. نحن، شركة سي إيه إتش ستيل الإمارات ش.ذ.م.م، قمنا بتنفيذ المشاريع بكل إخلاص لتحسين جودة عملنا وإدارة الشؤون الداخلية حتى الآن، كواحد من أعضاء مطوري الطاقة.",
    OVERVIEW_P2:
      "ما يهم قبل كل شيء أننا حدَّدنا الخصائص الأساسية لمنتجات الصلب من خلال التبادل الفني المنتظم مع موردي المواد الخام. علاوةً على ذلك، نحن نعجِّل تطوير التقنيات لتلبية متطلبات العملاء، خاصةً للمنتجات المقاومة للتآكل بدرجة عالية وذات جودة فائقة — وهو مطلب أساسي في هذه المنطقة. بالطبع، نسعى إلى تصنيع أفضل المنتجات بأعلى درجات الكمال، باستخدام جميع أجهزة الاختبار غير الهدّام (NDT) ومعدات التفتيش المطلوبة خصيصًا لأنابيب الخدمة القاسية وأنابيب المعالجة الحرارية. استنادًا إلى التكنولوجيا المتراكمة والمعرفة الفنية لشركة سي إيه إتش ستيل كورب (تأسست عام 1960)، نفَّذت شركة سي إيه إتش ستيل الإمارات ش.ذ.م.م العديد من المشاريع بالتعاون مع الشركات العالمية عبر الشرق الأوسط وأفريقيا. نعد عملاءنا بجودة أكبر ونظام إدارة متكامل، وسنظل شركة صادقة تقدر صوتكم إلى الأبد.",

    MAIN_PRODUCTS_TITLE: "المنتجات الرئيسية",
    PROD1_TITLE:        "أنبوب العمليات",
    PROD1_DESC:
      "مصمم للتعامل مع السوائل والغازات داخل المصانع الكيميائية ومحطات النفط والغاز والطاقة. مصنوع لتحمُّل الضغوط الداخلية ودرجات الحرارة العالية.",
    PROD2_TITLE:        "أنبوب هيكلي",
    PROD2_DESC:
      "يُستخدم في البناء المدني والصناعي للأطر والدعامات والأبراج والتطبيقات الحاملة للأحمال. معروف بقوته وتوحُّده. يوفر قابلية ممتازة للّحام والمرونة.",
    PROD3_TITLE:        "أنبوب النقل",
    PROD3_DESC:
      "مصمم لنقل النفط والغاز والمياه لمسافات طويلة. عادةً ما يكون مطليًا للحماية من التآكل ومصنوعًا ليلبي المعايير العالمية للأنابيب.",

    STAT1:              "أكثر من 15 سنة في العمل",
    STAT2:              "أكثر من 100 عميل عالمي",
    STAT3:              "أكثر من 350,000 طن مُسَلَّمة",
    STAT4:              "معتمد من ISO/API",

    INDUSTRIES_TITLE:   "الصناعات التي نخدمها",
    IND1:               "النفط والغاز",
    IND2:               "بنية تحتية للمياه",
    IND3:               "البناء",
    IND4:               "الطاقة",

    NEWS_TITLE:          "آخر الأخبار",
    NEWS_ITEM1_TEXT:     "سي إيه إتش ستيل الإمارات في فعالية اصنعها في الإمارات",
    NEWS_ITEM2_TEXT:     "حصلت سي إيه إتش ستيل الإمارات على شهادة ISO-17025",
    NEWS_ITEM3_TEXT:     "حفل الافتتاح التاريخي",
    SEE_ALL_NEWS:        "عرض جميع الأخبار"
  },

  ko: {
    HERO_HEADING:      "강철의 미래를 만들어갑니다",
    HERO_SUBTEXT:      "전 세계에 고성능 강관을 제공",

    OVERVIEW_TITLE:    "UAE에 뿌리를 둔 우리",
    OVERVIEW_P1:
      "세아스틸 코퍼레이션은 아랍에미리트 라스알카이마에 현지 제조 시설을 설립하고 2011년 3월에 첫 생산을 시작했습니다. 이름은 세아스틸 UAE LLC입니다. 저희 세아스틸 UAE LLC는 에너지 개발사 중 하나로서 지금까지 품질 및 내부 관리를 개선하기 위한 프로젝트를 충실히 수행해 왔습니다.",
    OVERVIEW_P2:
      "무엇보다도 저희는 원자재 공급업체와의 지속적인 기술 교류를 통해 강재 제품의 기본 특성을 파악해 왔습니다. 또한, 이 지역의 핵심 요구 사항인 고급 내식성 제품을 포함한 고객 요구를 충족하기 위해 기술 개발을 가속화하고 있습니다. 물론, 모든 NDT 시험기 및 열처리 파이프에 필요한 검사 장비를 사용하여 완벽한 품질로 최상의 제품을 제조하기 위해 노력합니다. 세아스틸 코퍼레이션(1960년 설립)의 축적된 기술과 노하우를 바탕으로 세아스틸 UAE는 중동 및 아프리카 전역의 글로벌 기업과 협력하여 수많은 프로젝트를 수행해 왔습니다. 저희는 더 높은 품질과 체계적인 관리를 바탕으로 고객에게 다가갈 것을 약속하며, 여러분의 목소리를 소중히 여기는 정직한 회사로 남을 것입니다.",

    MAIN_PRODUCTS_TITLE: "주요 제품",
    PROD1_TITLE:        "프로세스 파이프",
    PROD1_DESC:
      "화학, 석유 및 가스 및 발전소 내에서 액체 및 가스를 처리하도록 설계되었습니다. 내부 압력과 고온을 견딜 수 있도록 제작되었습니다.",
    PROD2_TITLE:        "구조용 파이프",
    PROD2_DESC:
      "토목 및 산업 건설에서 프레임워크, 지지대, 타워 및 하중 지지 응용 분야에 사용됩니다. 강도와 균일성으로 잘 알려져 있습니다. 용접성과 적응성이 우수합니다.",
    PROD3_TITLE:        "라인 파이프",
    PROD3_DESC:
      "장거리로 석유, 가스 및 물을 운송하기 위해 설계되었습니다. 일반적으로 부식 방지를 위해 코팅되며 국제 파이프라인 기준을 충족하도록 제작됩니다.",

    STAT1:              "15년 이상 운영",
    STAT2:              "100개 이상의 글로벌 고객",
    STAT3:              "350,000톤 이상 제공",
    STAT4:              "ISO/API 인증",

    INDUSTRIES_TITLE:   "우리가 제공하는 산업",
    IND1:               "석유 및 가스",
    IND2:               "수자원 인프라",
    IND3:               "건설",
    IND4:               "에너지",

    NEWS_TITLE:          "최신 뉴스",
    NEWS_ITEM1_TEXT:     "세아스틸 UAE, 메이크 잇 인 디 에미리트 참가",
    NEWS_ITEM2_TEXT:     "세아스틸 UAE, ISO-17025 인증 획득",
    NEWS_ITEM3_TEXT:     "역사적인 개소식",
    SEE_ALL_NEWS:        "모든 뉴스 보기"
  }
};

// 2) Swap out any element with data-i18n-index="KEY"
function setIndexLanguage(langCode) {
  document.querySelectorAll("[data-i18n-index]").forEach((el) => {
    const key = el.getAttribute("data-i18n-index");
    const translated = indexTranslations[langCode][key];
    if (translated !== undefined) {
      el.innerText = translated;
    }
  });
}

// 3) Expose globally so common-i18n.js can call it on language switch
window.setPageLanguage = setIndexLanguage;

// 4) On DOMContentLoaded, default Index page content to English
document.addEventListener("DOMContentLoaded", () => {
  setIndexLanguage("en");
});
