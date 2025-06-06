// ================= js/i18n.js =================

const translations = {
  en: {
    // …all your English keys (INDEX_TITLE, NAV_HOME, HERO_HEADING, etc.)…
    ABOUT_TITLE:     "About SeAH Steel UAE",
    ABOUT_PARAGRAPH:
      "SeAH Steel UAE LLC is an industry leader in carbon steel welded pipes. Founded in 2010, we’ve grown to serve customers across the Middle East and beyond.",
    // …and any other keys from index.html, plus additional keys for about.html…
    CONTACT_TITLE:   "Contact Us",
    CONTACT_ADDRESS: "123 Industrial Road, Abu Dhabi, UAE",
    CONTACT_PHONE:   "+971 2 123 4567",
    // …etc…

    FOOTER_COPY:     "© 2025 SeAH Steel UAE. All rights reserved."
  },
  ar: {
    // …mirror every single “en” key with its Arabic equivalent…
    ABOUT_TITLE:     "عن سي إيه إتش ستيل الإمارات",
    ABOUT_PARAGRAPH:
      "تعد شركة سي إيه إتش ستيل الإمارات رائدة في إنتاج أنابيب الكربون الصلب الملحومة. تأسست في عام 2010، ونمونا لخدمة العملاء في جميع أنحاء الشرق الأوسط وما وراءه.",
    CONTACT_TITLE:   "اتصل بنا",
    CONTACT_ADDRESS: "١٢٣ شارع الصناعة، أبوظبي، الإمارات",
    CONTACT_PHONE:   "+٩٧١ ٢ ١٢٣ ٤٥٦٧",
    // …etc…

    FOOTER_COPY:     "© 2025 سي إيه إتش ستيل الإمارات. جميع الحقوق محفوظة."
  },
  ko: {
    // …mirror every single “en” key with its Korean equivalent…
    ABOUT_TITLE:     "세아스틸 UAE에 대하여",
    ABOUT_PARAGRAPH:
      "세아스틸 UAE LLC는 용접 탄소강 파이프의 선도적인 생산업체입니다. 2010년에 설립되어 중동 전역 및 그 이상으로 고객층을 확장해 왔습니다.",
    CONTACT_TITLE:   "연락처",
    CONTACT_ADDRESS: "아부다비 산업로 123번지, UAE",
    CONTACT_PHONE:   "+971 2 123 4567",
    // …etc…

    FOOTER_COPY:     "© 2025 세아스틸 UAE. 판권 소유."
  }
};

function setLanguage(langCode) {
  if (langCode === "ar") {
    document.documentElement.setAttribute("dir", "rtl");
    document.documentElement.setAttribute("lang", "ar");
  } else {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.setAttribute("lang", langCode);
  }
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.innerText = translations[langCode][key] || "";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // 1) Default to English
  setLanguage("en");

  // 2) Wire up all three buttons (make sure each page has elements with these IDs!)
  document.getElementById("lang-en")?.addEventListener("click", (e) => {
    e.preventDefault();
    setLanguage("en");
  });
  document.getElementById("lang-ar")?.addEventListener("click", (e) => {
    e.preventDefault();
    setLanguage("ar");
  });
  document.getElementById("lang-ko")?.addEventListener("click", (e) => {
    e.preventDefault();
    setLanguage("ko");
  });
});
