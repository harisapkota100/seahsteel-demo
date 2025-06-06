// ================= js/miite-i18n.js =================

// 1) Page-specific translations for “Make It In The Emirates” page
const miiteTranslations = {
  en: {
    MIITE_PAGE_TITLE:   "SeAH Steel UAE at Make It In The Emirates",
    HERO_TITLE:         "Make It In The Emirates",
    HERO_SUBTEXT:       "Highlighting our participation in national development",
    NEWS_HEADLINE:      "SeAH Steel UAE at Make It In The Emirates",
    NEWS_P1:
      "SeAH Steel UAE proudly participated in the Make It In The Emirates event held in Abu Dhabi, showcasing our role in strengthening the industrial base of the United Arab Emirates.",
    NEWS_P2:
      "The exhibition served as a platform for local manufacturers and innovators to collaborate, sign strategic agreements, and highlight products made within the UAE. Our display attracted key industry stakeholders, and we were honored to discuss our steel pipe production capabilities, local sourcing efforts, and commitment to supporting the UAE's industrial vision.",
    NEWS_P3:
      "Events like these align perfectly with our mission to empower infrastructure with sustainable, world-class steel solutions. We extend our sincere thanks to the organizers and partners who made this possible.",
    GALLERY_TITLE:     "GALLERY"
  },

  ar: {
    MIITE_PAGE_TITLE:   "سي إيه إتش ستيل الإمارات في فعالية اصنعها في الإمارات",
    HERO_TITLE:         "اصنعها في الإمارات",
    HERO_SUBTEXT:       "تسليط الضوء على مشاركتنا في التنمية الوطنية",
    NEWS_HEADLINE:      "سي إيه إتش ستيل الإمارات في فعالية اصنعها في الإمارات",
    NEWS_P1:
      "شاركت سي إيه إتش ستيل الإمارات بفخر في فعالية “اصنعها في الإمارات” التي عُقدت في أبوظبي، مما عرض دورنا في تعزيز القاعدة الصناعية في دولة الإمارات العربية المتحدة.",
    NEWS_P2:
      "عمل المعرض كمنصة للمصنعين والمبتكرين المحليين للتعاون وتوقيع الاتفاقيات الاستراتيجية وتسليط الضوء على المنتجات المصنوعة داخل الإمارات. جذبت عروضنا أصحاب المصلحة الرئيسيين في الصناعة، وكان لنا الشرف في مناقشة قدراتنا في إنتاج أنابيب الصلب، وجهودنا في التوريد المحلي، والتزامنا بدعم رؤية الإمارات الصناعية.",
    NEWS_P3:
      "تتوافق مثل هذه الفعاليات تمامًا مع مهمتنا في تمكين البنية التحتية من خلال حلول الصلب المستدامة وعالية الجودة على مستوى عالمي. نوجه جزيل شكرنا للمنظمين والشركاء الذين جعلوا هذا ممكنًا.",
    GALLERY_TITLE:     "المعرض"
  },

  ko: {
    MIITE_PAGE_TITLE:   "세아스틸 UAE, 메이크 잇 인 디 에미리트 참가",
    HERO_TITLE:         "메이크 잇 인 디 에미리트",
    HERO_SUBTEXT:       "국가 발전에 대한 우리의 참여를 강조",
    NEWS_HEADLINE:      "세아스틸 UAE, 메이크 잇 인 디 에미리트 참가",
    NEWS_P1:
      "세아스틸 UAE는 아부다비에서 열린 '메이크 잇 인 디 에미리트' 행사에 자랑스럽게 참여하여 아랍에미리트의 산업 기반 강화에 기여하는 우리의 역할을 선보였습니다.",
    NEWS_P2:
      "이 전시회는 지역 제조업체 및 혁신가들이 협업하고 전략적 협약을 체결하며 UAE 내에서 제조된 제품을 강조하는 플랫폼 역할을 했습니다. 우리의 부스는 주요 업계 관계자들의 관심을 끌었으며, 우리는 강관 생산 능력, 현지 조달 노력 및 UAE 산업 비전 지원에 대한 약속을 논의하는 영광을 누렸습니다.",
    NEWS_P3:
      "이와 같은 행사는 지속 가능하고 세계적 수준의 강철 솔루션으로 인프라를 강화하려는 우리의 사명과 완벽히 부합합니다. 이를 가능하게 한 주최측과 파트너에게 진심으로 감사드립니다.",
    GALLERY_TITLE:     "갤러리"
  }
};

// 2) Swap out any element with data-i18n-miite="KEY"
function setMiiteLanguage(langCode) {
  document.querySelectorAll("[data-i18n-miite]").forEach((el) => {
    const key = el.getAttribute("data-i18n-miite");
    const translated = miiteTranslations[langCode][key];
    if (translated !== undefined) {
      el.innerText = translated;
    }
  });

  // Also update <title> if annotated
  document.querySelectorAll("title[data-i18n-miite]").forEach((el) => {
    const key = el.getAttribute("data-i18n-miite");
    const translated = miiteTranslations[langCode][key];
    if (translated !== undefined) {
      el.innerText = translated;
    }
  });
}

// 3) Expose globally so common-i18n.js can call it on language switch
window.setPageLanguage = setMiiteLanguage;

// 4) On DOMContentLoaded, default Miite page content to English
document.addEventListener("DOMContentLoaded", () => {
  setMiiteLanguage("en");
});
