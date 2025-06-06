// ================= js/projects-i18n.js =================

// Page-specific translations for Projects page
const projectsTranslations = {
  en: {
    PROJECTS_PAGE_TITLE:   "Projects | SeAH Steel UAE LLC",
    HERO_TITLE:           "All Supply Experience Projects",
    HERO_SUBTEXT:         "Click any title below to see full details",
    SECTION_TITLE:        "OUR PROJECTS"
  },
  ar: {
    PROJECTS_PAGE_TITLE:   "المشاريع | سي إيه إتش ستيل الإمارات ش.ذ.م.م",
    HERO_TITLE:           "جميع مشاريع الخبرة في التوريد",
    HERO_SUBTEXT:         "انقر على أي عنوان أدناه لعرض التفاصيل الكاملة",
    SECTION_TITLE:        "مشاريعنا"
  },
  ko: {
    PROJECTS_PAGE_TITLE:   "프로젝트 | 세아스틸 UAE LLC",
    HERO_TITLE:           "모든 공급 경험 프로젝트",
    HERO_SUBTEXT:         "아래 제목을 클릭하여 전체 세부 정보를 확인하세요",
    SECTION_TITLE:        "우리의 프로젝트"
  }
};

// Swap out any element with data-i18n-projects="KEY"
function setProjectsLanguage(langCode) {
  document.querySelectorAll("[data-i18n-projects]").forEach((el) => {
    const key = el.getAttribute("data-i18n-projects");
    const translated = projectsTranslations[langCode][key];
    if (translated !== undefined) {
      el.innerText = translated;
    }
  });
  // Also update <title> if annotated
  document.querySelectorAll("title[data-i18n-projects]").forEach((el) => {
    const key = el.getAttribute("data-i18n-projects");
    const translated = projectsTranslations[langCode][key];
    if (translated !== undefined) {
      el.innerText = translated;
    }
  });
}

// Expose globally so common-i18n.js can call it on language switch
window.setPageLanguage = setProjectsLanguage;

// On DOMContentLoaded, default Projects page content to English
document.addEventListener("DOMContentLoaded", () => {
  setProjectsLanguage("en");
});
