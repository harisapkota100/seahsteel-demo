// ================= js/downloads-i18n.js =================

// Page-specific translations for Downloads page
const downloadsTranslations = {
  en: {
    DOWNLOADS_PAGE_TITLE:     "Downloads | SeAH Steel UAE LLC",
    HERO_TITLE:               "Downloads",
    HERO_SUBTEXT:             "Access our latest catalogues and statements",
    AVAILABLE_DOCS_TITLE:     "Available Documents",

    DOC1_TITLE:               "Company Catalogue",
    DOC1_DESC:                "Explore our full range of steel tube and pipe solutions in detail.",
    DOC1_VIEW:                "View",
    DOC1_DOWNLOAD:            "Download",

    DOC2_TITLE:               "Prequalification Statement",
    DOC2_DESC:                "Detailed prequalification information, certifications and credentials.",
    DOC2_VIEW:                "View",
    DOC2_DOWNLOAD:            "Download"
  },

  ar: {
    DOWNLOADS_PAGE_TITLE:     "التنزيلات | سي إيه إتش ستيل الإمارات ش.ذ.م.م",
    HERO_TITLE:               "التنزيلات",
    HERO_SUBTEXT:             "الوصول إلى أحدث الكتالوجات والبيانات لدينا",
    AVAILABLE_DOCS_TITLE:     "المستندات المتاحة",

    DOC1_TITLE:               "كتالوج الشركة",
    DOC1_DESC:                "استكشف نطاق حلول أنابيب الصلب لدينا بالتفصيل.",
    DOC1_VIEW:                "عرض",
    DOC1_DOWNLOAD:            "تنزيل",

    DOC2_TITLE:               "بيان التأهيل المسبق",
    DOC2_DESC:                "معلومات مفصلة حول التأهيل المسبق والشهادات والاعتمادات.",
    DOC2_VIEW:                "عرض",
    DOC2_DOWNLOAD:            "تنزيل"
  },

  ko: {
    DOWNLOADS_PAGE_TITLE:     "다운로드 | 세아스틸 UAE LLC",
    HERO_TITLE:               "다운로드",
    HERO_SUBTEXT:             "최신 카탈로그 및 자료를 확인하세요",
    AVAILABLE_DOCS_TITLE:     "다운로드 문서",

    DOC1_TITLE:               "회사 카탈로그",
    DOC1_DESC:                "당사의 모든 강관 및 튜브 솔루션을 자세히 살펴보십시오.",
    DOC1_VIEW:                "보기",
    DOC1_DOWNLOAD:            "다운로드",

    DOC2_TITLE:               "자격 사전심사 명세서",
    DOC2_DESC:                "자격 사전심사 정보, 인증 및 자격 증명 세부 정보.",
    DOC2_VIEW:                "보기",
    DOC2_DOWNLOAD:            "다운로드"
  }
};

// 2) Swap out any element with data-i18n-downloads="KEY"
function setDownloadsLanguage(langCode) {
  document.querySelectorAll("[data-i18n-downloads]").forEach((el) => {
    const key = el.getAttribute("data-i18n-downloads");
    const translated = downloadsTranslations[langCode][key];
    if (translated !== undefined) {
      el.innerText = translated;
    }
  });
}

// 3) Expose globally so common-i18n.js can call it on language switch
window.setPageLanguage = setDownloadsLanguage;

// 4) On DOMContentLoaded, default Downloads page content to English
document.addEventListener("DOMContentLoaded", () => {
  setDownloadsLanguage("en");
});
