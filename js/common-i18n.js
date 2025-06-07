// ================= js/common-i18n.js =================

// 1) Common translation dictionary (shared across all pages)
const translations = {
  en: {
    // Topbar
    TOP_CAREERS:    "Careers",
    TOP_DOWNLOADS:  "Downloads",
    TOP_GLOBAL:     "Global SeAH",

    // Navbar
    NAV_HOME:       "Home",
    NAV_CEO:        "CEO Message",
    NAV_ABOUT:      "About",
    NAV_PRODUCTS:   "Products",
    NAV_MANUFACTURING: "How We Work",
    NAV_PROJECTS:   "Projects",
    NAV_QUALITY:    "Quality",
    NAV_NEWS:       "News",
    NAV_CONTACT:    "Contact",
    NAV_QUOTE:      "Request Quote",

    // Footer Column 1
    FOOTER_HEADER1:    "SeAH Steel UAE LLC",
    FOOTER_ADDR_LINE1: "Al Ghail Industrial Area,",
    FOOTER_ADDR_LINE2: "Ras Al Khaimah, UAE",
    FOOTER_EMAIL:      "Email:",
    FOOTER_PHONE:      "Phone:",

    // Footer Column 2
    FOOTER_HEADER2:    "Quick Links",
    FOOTER_LINK1:      "Home",
    FOOTER_LINK2:      "About",
    FOOTER_LINK3:      "CEO Message",
    FOOTER_LINK4:      "Products",
    FOOTER_LINK5:      "How We Work",
    FOOTER_LINK6:      "Projects",
    FOOTER_LINK7:      "Quality",
    FOOTER_LINK8:      "News",
    FOOTER_LINK9:      "Contact",
    FOOTER_LINK10:     "Request Quote",

    // Footer Column 3
    FOOTER_HEADER3:    "Connect With Us",
    FOOTER_WHATSAPP:   "WhatsApp",
    FOOTER_EMAIL_US:   "Email Us",

    // Bottom Copyright
    COPYRIGHT_TEXT:    "© 2025 SeAH Steel UAE LLC. All rights reserved."
  },

  ar: {
    TOP_CAREERS:    "وظائف",
    TOP_DOWNLOADS:  "التنزيلات",
    TOP_GLOBAL:     "سي إيه إتش عالمي",

    NAV_HOME:       "الصفحة الرئيسية",
    NAV_CEO:        "كلمة المدير التنفيذي",
    NAV_ABOUT:      "معلومات عنا",
    NAV_PRODUCTS:   "المنتجات",
    NAV_MANUFACTURING: "كيف نعمل",
    NAV_PROJECTS:   "المشاريع",
    NAV_QUALITY:    "الجودة",
    NAV_NEWS:       "الأخبار",
    NAV_CONTACT:    "اتصل بنا",
    NAV_QUOTE:      "طلب عرض سعر",

    FOOTER_HEADER1:    "سي إيه إتش ستيل الإمارات ش.ذ.م.م",
    FOOTER_ADDR_LINE1: "منطقة الغيل الصناعية،",
    FOOTER_ADDR_LINE2: "رأس الخيمة، الإمارات",
    FOOTER_EMAIL:      "البريد الإلكتروني:",
    FOOTER_PHONE:      "الهاتف:",

    FOOTER_HEADER2:    "روابط سريعة",
    FOOTER_LINK1:      "الصفحة الرئيسية",
    FOOTER_LINK2:      "معلومات عنا",
    FOOTER_LINK3:      "كلمة المدير التنفيذي",
    FOOTER_LINK4:      "المنتجات",
    FOOTER_LINK5:      "كيف نعمل",
    FOOTER_LINK6:      "المشاريع",
    FOOTER_LINK7:      "الجودة",
    FOOTER_LINK8:      "الأخبار",
    FOOTER_LINK9:      "اتصل بنا",
    FOOTER_LINK10:     "طلب عرض سعر",

    FOOTER_HEADER3:    "تواصل معنا",
    FOOTER_WHATSAPP:   "واتساب",
    FOOTER_EMAIL_US:   "راسلنا",

    COPYRIGHT_TEXT:    "© 2025 سي إيه إتش ستيل الإمارات ش.ذ.م.م. جميع الحقوق محفوظة."
  },

  ko: {
    TOP_CAREERS:    "채용 정보",
    TOP_DOWNLOADS:  "다운로드",
    TOP_GLOBAL:     "글로벌 세아",

    NAV_HOME:       "홈",
    NAV_CEO:        "CEO 메시지",
    NAV_ABOUT:      "회사 소개",
    NAV_PRODUCTS:   "제품",
    NAV_MANUFACTURING: "작업 방식",
    NAV_PROJECTS:   "프로젝트",
    NAV_QUALITY:    "품질",
    NAV_NEWS:       "뉴스",
    NAV_CONTACT:    "연락처",
    NAV_QUOTE:      "견적 요청",

    FOOTER_HEADER1:    "SeAH Steel UAE LLC",
    FOOTER_ADDR_LINE1: "알 Ghail 산업단지,",
    FOOTER_ADDR_LINE2: "라스 알 카이마, UAE",
    FOOTER_EMAIL:      "이메일:",
    FOOTER_PHONE:      "전화번호:",

    FOOTER_HEADER2:    "빠른 링크",
    FOOTER_LINK1:      "홈",
    FOOTER_LINK2:      "회사 소개",
    FOOTER_LINK3:      "CEO 메시지",
    FOOTER_LINK4:      "제품",
    FOOTER_LINK5:      "작업 방식",
    FOOTER_LINK6:      "프로젝트",
    FOOTER_LINK7:      "품질",
    FOOTER_LINK8:      "뉴스",
    FOOTER_LINK9:      "연락처",
    FOOTER_LINK10:     "견적 요청",

    FOOTER_HEADER3:    "연결하기",
    FOOTER_WHATSAPP:   "WhatsApp",
    FOOTER_EMAIL_US:   "Email Us",

    COPYRIGHT_TEXT:    "© 2025 SeAH Steel UAE LLC. 판권 소유."
  }
};

// 2) Swap out any element that has data-i18n="KEY" from the common dictionary
function setCommonLanguage(langCode) {
  if (langCode === "ar") {
    document.documentElement.setAttribute("dir", "rtl");
    document.documentElement.setAttribute("lang", "ar");
  } else {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.setAttribute("lang", langCode);
  }

  document.querySelectorAll("[data-i18n-common]").forEach((el) => {
    const key = el.getAttribute("data-i18n-common");
    const text = translations[langCode][key];
    if (text !== undefined) {
      el.innerText = text;
    }
  });
}

// 3) Expose function globally so page-specific scripts can call it too
window.setCommonLanguage = setCommonLanguage;

// 4) On load, default the common portion to English and wire up the language buttons
document.addEventListener("DOMContentLoaded", () => {
  setCommonLanguage("en");

  document.getElementById("lang-en")?.addEventListener("click", (e) => {
    e.preventDefault();
    setCommonLanguage("en");
    // Note: page-specific language switchers must also re-run
    window.setPageLanguage?.("en");
  });

  document.getElementById("lang-ar")?.addEventListener("click", (e) => {
    e.preventDefault();
    setCommonLanguage("ar");
    window.setPageLanguage?.("ar");
  });

  document.getElementById("lang-ko")?.addEventListener("click", (e) => {
    e.preventDefault();
    setCommonLanguage("ko");
    window.setPageLanguage?.("ko");
  });
});
