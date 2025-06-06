// ================= js/news-i18n.js =================

// 1) Page-specific translations for News page
const newsTranslations = {
  en: {
    NEWS_PAGE_TITLE:     "News & Events | SeAH Steel UAE LLC",
    HERO_TITLE:          "News & Events",
    HERO_SUBTEXT:        "Stay updated with our latest developments and milestones.",
    SECTION_TITLE:       "Latest News",

    ITEM1_TITLE:         "SeAH Steel UAE at Make It In The Emirates",
    ITEM2_TITLE:         "SeAH Steel UAE Obtained ISO-17025 Certificate",
    ITEM3_TITLE:         "Historic Inauguration Ceremony",

    SEE_MORE:            "See More"
  },

  ar: {
    NEWS_PAGE_TITLE:     "الأخبار والفعاليات | سي إيه إتش ستيل الإمارات ش.ذ.م.م",
    HERO_TITLE:          "الأخبار والفعاليات",
    HERO_SUBTEXT:        "ابقَ على اطلاع على أحدث التطورات والإنجازات لدينا.",
    SECTION_TITLE:       "آخر الأخبار",

    ITEM1_TITLE:         "سي إيه إتش ستيل الإمارات في فعالية اصنعها في الإمارات",
    ITEM2_TITLE:         "حصلت سي إيه إتش ستيل الإمارات على شهادة ISO-17025",
    ITEM3_TITLE:         "حفل الافتتاح التاريخي",

    SEE_MORE:            "عرض المزيد"
  },

  ko: {
    NEWS_PAGE_TITLE:     "뉴스 및 이벤트 | 세아스틸 UAE LLC",
    HERO_TITLE:          "뉴스 및 이벤트",
    HERO_SUBTEXT:        "최신 개발 및 이정표를 확인하세요.",
    SECTION_TITLE:       "최신 뉴스",

    ITEM1_TITLE:         "세아스틸 UAE, 메이크 잇 인 디 에미리트 참가",
    ITEM2_TITLE:         "세아스틸 UAE, ISO-17025 인증 획득",
    ITEM3_TITLE:         "역사적인 개소식",

    SEE_MORE:            "더 보기"
  }
};

// 2) Swap out any element with data-i18n-news="KEY"
function setNewsLanguage(langCode) {
  document.querySelectorAll("[data-i18n-news]").forEach((el) => {
    const key = el.getAttribute("data-i18n-news");
    const translated = newsTranslations[langCode][key];
    if (translated !== undefined) {
      el.innerText = translated;
    }
  });

  // Also update <title> if annotated
  document.querySelectorAll("title[data-i18n-news]").forEach((el) => {
    const key = el.getAttribute("data-i18n-news");
    const translated = newsTranslations[langCode][key];
    if (translated !== undefined) {
      el.innerText = translated;
    }
  });
}

// 3) Expose globally so common-i18n.js can call it on language switch
window.setPageLanguage = setNewsLanguage;

// 4) On DOMContentLoaded, default News page content to English
document.addEventListener("DOMContentLoaded", () => {
  setNewsLanguage("en");
});
