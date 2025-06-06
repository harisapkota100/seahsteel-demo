// ================= js/contact-i18n.js =================

// 1) Page-specific translations for Contact page
const contactTranslations = {
  en: {
    CONTACT_PAGE_TITLE:      "Contact Us | SeAH Steel UAE LLC",
    CONTACT_HERO_TITLE:      "Contact Us",
    CONTACT_HERO_SUBTEXT:    "We’re here to help — reach out to our team today.",

    CONTACT_HEADOFFICE_TITLE:  "Head Office",
    CONTACT_LABEL_EMAIL:       "Email:",
    CONTACT_LABEL_PHONE:       "Phone:",
    CONTACT_DEPARTMENTS_TITLE: "Departments",
    CONTACT_DEPT_SALES:        "Sales:",
    CONTACT_DEPT_HR:           "HR:",
    CONTACT_DEPT_PROCUREMENT:  "Procurement:",

    CONTACT_SALESOFFICE_TITLE: "Sales Office",
    CONTACT_DIVISION_TITLE:    "Division",
    CONTACT_DIV_LINEPIPE:      "Line Pipe / Wind Farm:",
    CONTACT_DIV_OFFSHORE:      "Offshore Structural:",
    CONTACT_DIV_PROCESS:       "Process Pipe / OCTG:",

    CONTACT_FORM_TITLE:        "Send Us a Message",
    CONTACT_PLACEHOLDER_NAME:    "Your Name",
    CONTACT_PLACEHOLDER_EMAIL:   "Your Email",
    CONTACT_PLACEHOLDER_SUBJECT: "Subject",
    CONTACT_PLACEHOLDER_MESSAGE: "Your Message",
    CONTACT_BUTTON_SUBMIT:      "Submit",

    CONTACT_MAP_TITLE:         "Our UAE Locations"
  },

  ar: {
    CONTACT_PAGE_TITLE:      "اتصل بنا | سي إيه إتش ستيل الإمارات ش.ذ.م.م",
    CONTACT_HERO_TITLE:      "اتصل بنا",
    CONTACT_HERO_SUBTEXT:    "نحن هنا للمساعدة — تواصل مع فريقنا اليوم.",

    CONTACT_HEADOFFICE_TITLE:  "المكتب الرئيسي",
    CONTACT_LABEL_EMAIL:       "البريد الإلكتروني:",
    CONTACT_LABEL_PHONE:       "الهاتف:",
    CONTACT_DEPARTMENTS_TITLE: "الأقسام",
    CONTACT_DEPT_SALES:        "المبيعات:",
    CONTACT_DEPT_HR:           "الموارد البشرية:",
    CONTACT_DEPT_PROCUREMENT:  "المشتريات:",

    CONTACT_SALESOFFICE_TITLE: "مكتب المبيعات",
    CONTACT_DIVISION_TITLE:    "القسم",
    CONTACT_DIV_LINEPIPE:      "أنابيب النقل / مشاريع الرياح:",
    CONTACT_DIV_OFFSHORE:      "الهياكل البحرية:",
    CONTACT_DIV_PROCESS:       "أنابيب العمليات / OCTG:",

    CONTACT_FORM_TITLE:        "أرسل لنا رسالة",
    CONTACT_PLACEHOLDER_NAME:    "اسمك",
    CONTACT_PLACEHOLDER_EMAIL:   "بريدك الإلكتروني",
    CONTACT_PLACEHOLDER_SUBJECT: "الموضوع",
    CONTACT_PLACEHOLDER_MESSAGE: "رسالتك",
    CONTACT_BUTTON_SUBMIT:      "إرسال",

    CONTACT_MAP_TITLE:         "مواقعنا في الإمارات"
  },

  ko: {
    CONTACT_PAGE_TITLE:      "문의하기 | 세아스틸 UAE LLC",
    CONTACT_HERO_TITLE:      "문의하기",
    CONTACT_HERO_SUBTEXT:    "도움을 드리기 위해 여기에 있습니다 — 지금 바로 문의해 주세요.",

    CONTACT_HEADOFFICE_TITLE:  "본사",
    CONTACT_LABEL_EMAIL:       "이메일:",
    CONTACT_LABEL_PHONE:       "전화번호:",
    CONTACT_DEPARTMENTS_TITLE: "부서",
    CONTACT_DEPT_SALES:        "영업:",
    CONTACT_DEPT_HR:           "인사:",
    CONTACT_DEPT_PROCUREMENT:  "조달:",

    CONTACT_SALESOFFICE_TITLE: "영업사무소",
    CONTACT_DIVISION_TITLE:    "부문",
    CONTACT_DIV_LINEPIPE:      "라인 파이프 / 풍력:",
    CONTACT_DIV_OFFSHORE:      "해양 구조:",
    CONTACT_DIV_PROCESS:       "공정 파이프 / OCTG:",

    CONTACT_FORM_TITLE:        "메시지 보내기",
    CONTACT_PLACEHOLDER_NAME:    "이름",
    CONTACT_PLACEHOLDER_EMAIL:   "이메일",
    CONTACT_PLACEHOLDER_SUBJECT: "제목",
    CONTACT_PLACEHOLDER_MESSAGE: "메시지 내용",
    CONTACT_BUTTON_SUBMIT:      "제출",

    CONTACT_MAP_TITLE:         "우리의 UAE 지점"
  }
};

// 2) Swap out each element with data-i18n-contact="KEY"
function setContactLanguage(langCode) {
  document.querySelectorAll("[data-i18n-contact]").forEach((el) => {
    const key = el.getAttribute("data-i18n-contact");
    const translated = contactTranslations[langCode][key];
    if (translated !== undefined) {
      el.innerText = translated;
    }
  });
}

// 3) Expose globally so common-i18n.js can call it on language switch
window.setPageLanguage = setContactLanguage;

// 4) On DOMContentLoaded, default Contact page content to English
document.addEventListener("DOMContentLoaded", () => {
  setContactLanguage("en");
});
