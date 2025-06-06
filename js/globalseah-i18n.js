// ================= js/globalseah-i18n.js =================

// 1) Page-specific translations for Global SeAH
const globalseahTranslations = {
  en: {
    GLOBAL_PAGE_TITLE:    "Global SeAH | SeAH Steel UAE LLC",
    HERO_TITLE:          "Our Global Presence"
  },
  ar: {
    GLOBAL_PAGE_TITLE:    "سي إيه إتش العالمية | سي إيه إتش ستيل الإمارات ش.ذ.م.م",
    HERO_TITLE:          "حضورنا العالمي"
  },
  ko: {
    GLOBAL_PAGE_TITLE:    "글로벌 세아 | 세아스틸 UAE LLC",
    HERO_TITLE:          "우리의 글로벌 네트워크"
  }
};

// 2) Swap out any element with data-i18n-globalseah="KEY"
function setGlobalLanguage(langCode) {
  document.querySelectorAll("[data-i18n-globalseah]").forEach((el) => {
    const key = el.getAttribute("data-i18n-globalseah");
    const translated = globalseahTranslations[langCode][key];
    if (translated !== undefined) {
      el.innerText = translated;
    }
  });
  // Update <title> if needed
  document.querySelectorAll("title[data-i18n-globalseah]").forEach((el) => {
    const key = el.getAttribute("data-i18n-globalseah");
    const translated = globalseahTranslations[langCode][key];
    if (translated !== undefined) {
      el.innerText = translated;
    }
  });
}

// 3) Expose globally so common-i18n.js can call it on language switch
window.setPageLanguage = setGlobalLanguage;

// 4) On DOMContentLoaded, default Global SeAH page content to English
document.addEventListener("DOMContentLoaded", () => {
  setGlobalLanguage("en");
});
