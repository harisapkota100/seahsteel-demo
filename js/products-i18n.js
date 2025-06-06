// ================= js/products-i18n.js =================

// Page-specific translations for Products page
const productsTranslations = {
  en: {
    PRODUCTS_PAGE_TITLE:       "Products | SeAH Steel UAE LLC",
    HERO_TITLE:                "Our Steel Pipe Solutions",
    HERO_SUBTEXT:              "Precision-made pipes for every industry.",
    SECTION_TITLE:             "OUR PRODUCTS",

    PROD1_TITLE:               "PROCESS PIPE",
    PROD1_DESC:                "Designed for handling fluids and gases within chemical, oil & gas, and power plants. Made to withstand internal pressures and high temperatures.",

    PROD2_TITLE:               "STRUCTURAL PIPE",
    PROD2_DESC:                "Used in civil and industrial construction for frameworks, supports, towers, and load-bearing applications. Known for strength and uniformity. It offers excellent weldability and adaptability.",

    PROD3_TITLE:               "LINE PIPE",
    PROD3_DESC:                "Engineered for transporting oil, gas, and water over long distances. Typically coated for corrosion protection and built to meet international pipeline standards.",

    RANGE_TITLE:               "PRODUCT RANGE",

    RANGE_LENGTH_LABEL1:       "4 m",
    RANGE_LENGTH_LABEL2:       "12 m",

    RANGE_THICK_LABEL1:        "9 mm",
    RANGE_THICK_LABEL2:        "60 mm",

    RANGE_DIAM_LABEL1:         "18″",
    RANGE_DIAM_LABEL2:         "120″"
  },

  ar: {
    PRODUCTS_PAGE_TITLE:       "المنتجات | سي إيه إتش ستيل الإمارات ش.ذ.م.م",
    HERO_TITLE:                "حلول أنابيب الفولاذ لدينا",
    HERO_SUBTEXT:              "أنابيب مصنوعة بدقة لكل صناعة.",
    SECTION_TITLE:             "منتجاتنا",

    PROD1_TITLE:               "أنبوب العمليات",
    PROD1_DESC:                "مصمم للتعامل مع السوائل والغازات داخل المصانع الكيميائية ومحطات النفط والغاز والطاقة. مصنوع لتحمُّل الضغوط الداخلية ودرجات الحرارة العالية.",

    PROD2_TITLE:               "أنبوب هيكلي",
    PROD2_DESC:                "يُستخدم في البناء المدني والصناعي للأطر والدعامات والأبراج والتطبيقات الحاملة للأحمال. معروف بقوته وتوحُّده. يوفر قابلية ممتازة للّحام والمرونة.",

    PROD3_TITLE:               "أنبوب النقل",
    PROD3_DESC:                "مصمم لنقل النفط والغاز والمياه لمسافات طويلة. عادةً ما يكون مطليًا للحماية من التآكل ومصنوعًا ليلبي المعايير العالمية للأنابيب.",

    RANGE_TITLE:               "نطاق المنتجات",

    RANGE_LENGTH_LABEL1:       "4 م",
    RANGE_LENGTH_LABEL2:       "12 م",

    RANGE_THICK_LABEL1:        "9 مم",
    RANGE_THICK_LABEL2:        "60 مم",

    RANGE_DIAM_LABEL1:         "18″",
    RANGE_DIAM_LABEL2:         "120″"
  },

  ko: {
    PRODUCTS_PAGE_TITLE:       "제품 | 세아스틸 UAE LLC",
    HERO_TITLE:                "우리의 강관 솔루션",
    HERO_SUBTEXT:              "모든 산업을 위한 정밀 제작 파이프.",
    SECTION_TITLE:             "우리의 제품",

    PROD1_TITLE:               "프로세스 파이프",
    PROD1_DESC:                "화학, 석유 및 가스, 발전소 내에서 유체 및 가스를 처리하도록 설계되었습니다. 내부 압력과 고온을 견딜 수 있도록 제작되었습니다.",

    PROD2_TITLE:               "구조용 파이프",
    PROD2_DESC:                "토목 및 산업 건설에서 프레임워크, 지지대, 타워 및 하중 지지 응용 분야에 사용됩니다. 강도와 균일성으로 잘 알려져 있습니다. 용접성과 적응성이 우수합니다.",

    PROD3_TITLE:               "라인 파이프",
    PROD3_DESC:                "장거리로 석유, 가스 및 물을 운송하기 위해 설계되었습니다. 일반적으로 부식 방지를 위해 코팅되며 국제 파이프라인 기준을 충족하도록 제작됩니다.",

    RANGE_TITLE:               "제품 범위",

    RANGE_LENGTH_LABEL1:       "4 m",
    RANGE_LENGTH_LABEL2:       "12 m",

    RANGE_THICK_LABEL1:        "9 mm",
    RANGE_THICK_LABEL2:        "60 mm",

    RANGE_DIAM_LABEL1:         "18″",
    RANGE_DIAM_LABEL2:         "120″"
  }
};

// Swap out any element with data-i18n-products="KEY"
function setProductsLanguage(langCode) {
  document.querySelectorAll("[data-i18n-products]").forEach((el) => {
    const key = el.getAttribute("data-i18n-products");
    const translated = productsTranslations[langCode][key];
    if (translated !== undefined) {
      el.innerText = translated;
    }
  });
  // Also update <title> if annotated
  document.querySelectorAll("title[data-i18n-products]").forEach((el) => {
    const key = el.getAttribute("data-i18n-products");
    const translated = productsTranslations[langCode][key];
    if (translated !== undefined) {
      el.innerText = translated;
    }
  });
}

// Expose globally so common-i18n.js can call it on language switch
window.setPageLanguage = setProductsLanguage;

// On DOMContentLoaded, default Products page content to English
document.addEventListener("DOMContentLoaded", () => {
  setProductsLanguage("en");
});
