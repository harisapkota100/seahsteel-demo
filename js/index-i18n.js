// ================= js/index-i18n.js =================

// 1) Page-specific dictionary for index.html
const indexTranslations = {
  en: {
    // Hero
    HERO_HEADING:      "Forging the Future of Steel",
    HERO_SUBTEXT:      "Delivering high-performance steel pipes across the globe",

    // Overview
    OVERVIEW_TITLE:    "Our Foundation in the UAE",
    OVERVIEW_P1:
      "SeAH Steel Corp. established the local manufacturer at Ras Al Khaimah, UAE and commenced 1st production from March, 2011. Its name is SeAH Steel UAE LLC. We, SeAH Steel UAE LLC, have faithfully carried out the projects improving our quality and internal management so far, as one of the members of energy developers.",
    OVERVIEW_P2:
      "Above all, we have identified the fundamental characteristics of steel products through the regular technical interchange with raw material suppliers. Moreover, we are accelerating technical development to meet the customers’ demands, especially for high corrosion-resistant products with intense quality — a key requirement in this region. Of course, we strive to manufacture the best products with perfect quality, using all NDT testers and inspection equipment specially required for sour service and heat treatment pipes. On the basis of accumulated technology and know-how of SeAH Steel Corp. (Est. 1960), SeAH Steel UAE has executed numerous projects in cooperation with global companies across the Middle East & Africa. We promise to approach our customers with greater quality and a well-managed system, and to remain an honest company that values your voice forever.",

    // Main Products
    MAIN_PRODUCTS_TITLE: "MAIN PRODUCTS",
    PROD1_TITLE:         "PROCESS PIPE",
    PROD1_DESC:
      "Designed for handling fluids and gases within chemical, oil & gas, and power plants. Made to withstand internal pressures and high temperatures.",
    PROD2_TITLE:         "STRUCTURAL PIPE",
    PROD2_DESC:
      "Used in civil and industrial construction for frameworks, supports, towers, and load-bearing applications. Known for strength and uniformity. It offers excellent weldability and adaptability.",
    PROD3_TITLE:         "LINE PIPE",
    PROD3_DESC:
      "Engineered for transporting oil, gas, and water over long distances. Typically coated for corrosion protection and built to meet international pipeline standards.",

    // Stats
    STAT1:              "15+ Years in Operation",
    STAT2:              "100+ Global Clients",
    STAT3:              "350,000+ Tons Delivered",
    STAT4:              "ISO/API Certified",

    // Industries
    INDUSTRIES_TITLE:   "Industries We Serve",
    IND1:               "Oil & Gas",
    IND2:               "Water Infrastructure",
    IND3:               "Construction",
    IND4:               "Energy",

    // News Marquee
    NEWS_TITLE:         "Latest News",
    NEWS_ITEM1_TEXT:    "SeAH Steel UAE at Make It In The Emirates",
    NEWS_ITEM2_TEXT:    "SeAH Steel UAE Obtained ISO-17025 Certificate",
    NEWS_ITEM3_TEXT:    "Historic Inauguration Ceremony",
    SEE_ALL_NEWS:       "See All News"
  },

  ar: {
    HERO_HEADING:      "صنع مستقبل الصلب",
    HERO_SUBTEXT:      "تقديم أنابيب فولاذية عالية الأداء في جميع أنحاء العالم",

    OVERVIEW_TITLE:    "أساسنا في الإمارات",
    OVERVIEW_P1:
      "أسست سي إيه إتش ستيل الشركة المحلية في رأس الخيمة، الإمارات وبدأت الإنتاج الأول من مارس 2011. اسمها هو SeAH Steel UAE LLC. نحن، SeAH Steel UAE LLC، نفذنا المشاريع بحرص لتحسين جودة وإدارة داخلية حتى الآن، كواحد من أعضاء مطوري الطاقة.",
    OVERVIEW_P2:
      "فوق كل شيء، حددنا الخصائص الأساسية للمنتجات الفولاذية من خلال التبادل الفني المنتظم مع موردي المواد الخام. علاوة على ذلك، نعجّل بالتطوير التقني لتلبية طلبات العملاء، خاصةً للمنتجات عالية المقاومة للتآكل ذات الجودة العالية — وهو مطلب أساسي في هذه المنطقة. بالطبع، نسعى إلى تصنيع أفضل المنتجات بأعلى جودة، باستخدام جميع أجهزة الاختبار غير الإتلافي ومعدات التفتيش اللازمة لأنابيب الخدمة الحمضية وأنابيب المعالجة الحرارية. استنادًا إلى التكنولوجيا المتراكمة والخبرة التقنية لشركة SeAH Steel Corp. (1960)، نفذت SeAH Steel UAE عدة مشاريع بالتعاون مع شركات عالمية في الشرق الأوسط وأفريقيا. نعد عملائنا بتقديم جودة أعلى ونظام إدارة جيد، وأن نظل شركة صادقة تقدر صوتكم إلى الأبد.",

    MAIN_PRODUCTS_TITLE: "المنتجات الرئيسية",
    PROD1_TITLE:         "أنابيب المعالجة",
    PROD1_DESC:
      "مصممة للتعامل مع السوائل والغازات في المصانع الكيميائية والنفط والغاز ومحطات الطاقة. مصنوعة لتحمّل الضغوط الداخلية ودرجات الحرارة العالية.",
    PROD2_TITLE:         "أنابيب هيكلية",
    PROD2_DESC:
      "تستخدم في البناء المدني والصناعي للهياكل والدعامات والأبراج والتطبيقات الحاملة للأحمال. معروفة بالقوة والتجانس وتقدّم قابلية لحام ممتازة وقابلية التكيف.",
    PROD3_TITLE:         "أنابيب النقل",
    PROD3_DESC:
      "مهندسة لنقل النفط والغاز والماء لمسافات طويلة. عادةً ما يتم طلائها لحماية من التآكل وبُنيت لتلبية معايير خطوط الأنابيب الدولية.",

    STAT1:              "أكثر من 15 سنة في العمل",
    STAT2:              "أكثر من 100 عميل عالمي",
    STAT3:              "أكثر من 350,000 طن تم تسليمها",
    STAT4:              "حاصلة على شهادات ISO/API",

    INDUSTRIES_TITLE:   "الصناعات التي نخدمها",
    IND1:               "النفط والغاز",
    IND2:               "بُنى تحتية المياه",
    IND3:               "البناء",
    IND4:               "الطاقة",

    NEWS_TITLE:         "آخر الأخبار",
    NEWS_ITEM1_TEXT:    "سي إيه إتش ستيل الإمارات في معرض ‘Make It In The Emirates’",
    NEWS_ITEM2_TEXT:    "حصول سي إيه إتش ستيل الإمارات على شهادة ISO-17025",
    NEWS_ITEM3_TEXT:    "حفل الافتتاح التاريخي",
    SEE_ALL_NEWS:       "عرض جميع الأخبار"
  },

  ko: {
    HERO_HEADING:      "강철의 미래를 단조하다",
    HERO_SUBTEXT:      "전 세계에 고성능 강관을 제공",

    OVERVIEW_TITLE:    "아랍에미리트에서의 기반",
    OVERVIEW_P1:
      "SeAH Steel Corp.는 아랍에미리트 라스 알 카이마에 현지 제조업체를 설립하고 2011년 3월부터 첫 생산을 시작했습니다. 그 이름은 SeAH Steel UAE LLC입니다. 저희 SeAH Steel UAE LLC는 에너지 개발자 중 하나로서 지금까지 품질과 내부 관리를 향상시키는 프로젝트를 성실히 수행해 왔습니다.",
    OVERVIEW_P2:
      "무엇보다도 원자재 공급업체와의 정기적인 기술 교류를 통해 강철 제품의 기본 특성을 파악했습니다. 또한 이 지역의 핵심 요구 사항인 고부식성 제품에 대한 고객 요구를 충족하기 위해 기술 개발을 가속화하고 있습니다. 물론, NDT 검사기와 열처리 파이프에 필수적인 모든 검사 장비를 사용하여 완벽한 품질로 최고의 제품을 제조하기 위해 노력합니다. SeAH Steel Corp. (1960년 설립)의 축적된 기술과 노하우를 기반으로 SeAH Steel UAE는 중동 및 아프리카 전역의 글로벌 기업과 협력하여 수많은 프로젝트를 수행했습니다. 저희는 더 높은 품질과 잘 관리된 시스템으로 고객에게 다가갈 것을 약속하며, 언제나 여러분의 목소리를 소중히 여기는 정직한 회사가 될 것입니다.",

    MAIN_PRODUCTS_TITLE: "주요 제품",
    PROD1_TITLE:         "공정 파이프",
    PROD1_DESC:
      "화학, 석유 & 가스, 발전소 내 유체 및 가스를 처리하도록 설계되었습니다. 내부 압력과 고온을 견딜 수 있도록 제작됩니다.",
    PROD2_TITLE:         "구조용 파이프",
    PROD2_DESC:
      "토목 및 산업용 건설의 프레임워크, 지지대, 타워 및 하중 지지 응용 분야에 사용됩니다. 강도와 균일성으로 알려져 있으며 우수한 용접성 및 적응성을 제공합니다.",
    PROD3_TITLE:         "라인 파이프",
    PROD3_DESC:
      "장거리로 석유, 가스 및 물을 운송하도록 설계되었습니다. 일반적으로 부식 방지를 위해 코팅되며 국제 파이프라인 표준을 충족하도록 제작됩니다.",

    STAT1:              "15년 이상 운영",
    STAT2:              "100개 이상의 글로벌 고객",
    STAT3:              "350,000톤 이상 배송",
    STAT4:              "ISO/API 인증",

    INDUSTRIES_TITLE:   "서비스 산업",
    IND1:               "석유 & 가스",
    IND2:               "수자원 인프라",
    IND3:               "건설",
    IND4:               "에너지",

    NEWS_TITLE:         "최신 뉴스",
    NEWS_ITEM1_TEXT:    "Make It In The Emirates에 참가한 SeAH Steel UAE",
    NEWS_ITEM2_TEXT:    "SeAH Steel UAE, ISO-17025 인증 획득",
    NEWS_ITEM3_TEXT:    "역사적 개관식",
    SEE_ALL_NEWS:       "모든 뉴스 보기"
  }
};

// 2) Swap out any element with data-i18n-page="KEY" for index.html
function setIndexLanguage(langCode) {
  document.querySelectorAll("[data-i18n-page]").forEach((el) => {
    const key = el.getAttribute("data-i18n-page");
    const text = indexTranslations[langCode][key];
    if (text !== undefined) {
      el.innerText = text;
    }
  });
}

// Expose page function globally
window.setPageLanguage = setIndexLanguage;

// On load, run both common and index-specific (assuming common already ran)
document.addEventListener("DOMContentLoaded", () => {
  // common already set to English by common-i18n.js
  setIndexLanguage("en");
});
