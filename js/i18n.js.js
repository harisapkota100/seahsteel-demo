// ================= i18n.js =================

// 1) All translated strings, organized by language code.
//    The keys here (e.g. "NAV_HOME") must match what you put
//    in each HTML element’s data-i18n attribute.
const translations = {
  en: {
    // ——— Common navigation/menu ———
    NAV_HOME:       "Home",
    NAV_ABOUT:      "About Us",
    NAV_PRODUCTS:   "Products",
    NAV_PROJECTS:   "Projects",
    NAV_QUALITY:    "Quality",
    NAV_NEWS:       "News",
    NAV_CONTACT:    "Contact",
    NAV_CAREERS:    "Careers",
    NAV_DOWNLOADS:  "Downloads",

    // ——— Index (landing page) ———
    INDEX_HEADING:  "Welcome to SeAH Steel UAE LLC",
    INDEX_SUBTEXT:  "We manufacture carbon steel welded pipes with world-class quality assurance.",
    INDEX_CTA:      "Learn More",

    // ——— About Us page ———
    ABOUT_TITLE:    "Who We Are",
    ABOUT_TEXT:     "SeAH Steel UAE LLC is a leading producer of welded carbon steel pipes. Our mission is to deliver top-quality solutions to customers worldwide.",

    // ——— Manufacturing page ———
    MANUF_TITLE:    "Our Manufacturing Process",
    MANUF_P1:       "At SeAH Steel, we operate two main production lines: the JCO(E) line and the Roll-Bender line. Each line uses advanced machinery to ensure precision.",

    // …repeat for every piece of visible text on every page…
    //    (e.g. PROJECTS_TITLE, PROJECTS_DESC, CONTACT_TITLE, CONTACT_ADDRESS, etc.)

    // ——— Footer ———
    FOOTER_COPY:    "© 2025 SeAH Steel UAE. All rights reserved."
  },

  ar: {
    // ——— Common navigation/menu (Arabic, right-to-left) ———
    NAV_HOME:       "الصفحة الرئيسية",
    NAV_ABOUT:      "معلومات عنا",
    NAV_PRODUCTS:   "المنتجات",
    NAV_PROJECTS:   "المشاريع",
    NAV_QUALITY:    "الجودة",
    NAV_NEWS:       "الأخبار",
    NAV_CONTACT:    "اتصل بنا",
    NAV_CAREERS:    "وظائف",
    NAV_DOWNLOADS:  "التنزيلات",

    // ——— Index (landing page) ———
    INDEX_HEADING:  "مرحبًا بكم في شركة سي إيه إتش ستيل الإمارات",
    INDEX_SUBTEXT:  "نحن نقوم بتصنيع أنابيب الكربون الصلب الملحومة بجودة عالمية.",
    INDEX_CTA:      "اعرف المزيد",

    // ——— About Us page ———
    ABOUT_TITLE:    "من نحن",
    ABOUT_TEXT:     "تعد شركة سي إيه إتش ستيل الإمارات رائدة في إنتاج أنابيب الكربون الصلب الملحومة. مهمتنا هي تقديم حلول عالية الجودة للعملاء في جميع أنحاء العالم.",

    // ——— Manufacturing page ———
    MANUF_TITLE:    "عملية التصنيع لدينا",
    MANUF_P1:       "في سي إيه إتش ستيل، ندير خطي إنتاج رئيسيين: خط JCO(E) وخط Roll-Bender. يستخدم كل خط آلات متقدمة لضمان الدقة.",

    // …وأكمل بقية النصوص لكل صفحة…

    // ——— Footer ———
    FOOTER_COPY:    "© 2025 سي إيه إتش ستيل الإمارات. جميع الحقوق محفوظة."
  },

  ko: {
    // ——— Common navigation/menu (Korean) ———
    NAV_HOME:       "홈",
    NAV_ABOUT:      "회사 소개",
    NAV_PRODUCTS:   "제품",
    NAV_PROJECTS:   "프로젝트",
    NAV_QUALITY:    "품질",
    NAV_NEWS:       "뉴스",
    NAV_CONTACT:    "연락처",
    NAV_CAREERS:    "채용 정보",
    NAV_DOWNLOADS:  "다운로드",

    // ——— Index (landing page) ———
    INDEX_HEADING:  "세아스틸 UAE LLC에 오신 것을 환영합니다",
    INDEX_SUBTEXT:  "세계적 수준의 품질 관리를 갖춘 탄소강 용접 파이프를 제조합니다.",
    INDEX_CTA:      "자세히 알아보기",

    // ——— About Us page ———
    ABOUT_TITLE:    "회사 소개",
    ABOUT_TEXT:     "세아스틸 UAE LLC는 용접 탄소강 파이프의 선도적인 생산업체입니다. 우리의 사명은 전 세계 고객에게 최고의 솔루션을 제공하는 것입니다.",

    // ——— Manufacturing page ———
    MANUF_TITLE:    "제조 공정",
    MANUF_P1:       "세아스틸에서는 JCO(E) 라인과 롤 벤더 라인, 두 가지 주요 생산 라인을 운영합니다. 각 라인은 정밀도를 보장하기 위해 첨단 기계를 사용합니다.",

    // …나머지 페이지 텍스트도 동일한 방식으로 추가…

    // ——— Footer ———
    FOOTER_COPY:    "© 2025 세아스틸 UAE. 판권 소유."
  },
};

// 2) A helper function that, given a language code, replaces all
//    elements having data-i18n="KEY" with the corresponding string.
function setLanguage(langCode) {
  // 2a) If Arabic, flip to RTL; otherwise keep LTR.
  if (langCode === "ar") {
    document.documentElement.setAttribute("dir", "rtl");
    document.documentElement.setAttribute("lang", "ar");
  } else {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.setAttribute("lang", langCode);
  }

  // 2b) Walk through every element with data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const text = translations[langCode][key] || ""; 
    el.innerText = text;
  });
}

// 3) When the DOM is ready, default to English and wire up buttons.
document.addEventListener("DOMContentLoaded", () => {
  // Default language: English
  setLanguage("en");

  // Hook each language-switch button (by ID) to call setLanguage(...)
  const btnEn = document.getElementById("lang-en");
  const btnAr = document.getElementById("lang-ar");
  const btnKo = document.getElementById("lang-ko");

  if (btnEn) btnEn.addEventListener("click", (e) => { e.preventDefault(); setLanguage("en"); });
  if (btnAr) btnAr.addEventListener("click", (e) => { e.preventDefault(); setLanguage("ar"); });
  if (btnKo) btnKo.addEventListener("click", (e) => { e.preventDefault(); setLanguage("ko"); });
});
