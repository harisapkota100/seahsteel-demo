// ================= js/quote-i18n.js =================

// Page-specific translations for Quote page
const quoteTranslations = {
  en: {
    QUOTE_PAGE_TITLE:        "Request a Quote | SeAH Steel UAE LLC",
    QUOTE_H1:                "Request a Quote",
    QUOTE_P:                 "Please fill out the form below, and we’ll get back to you with a custom quotation.",
    QUOTE_PLACEHOLDER_NAME:   "Your Name",
    QUOTE_PLACEHOLDER_EMAIL:  "Your Email",
    QUOTE_PLACEHOLDER_COMPANY: "Company Name",
    QUOTE_PLACEHOLDER_PRODUCT: "Product Type (e.g. ERW Pipe)",
    QUOTE_PLACEHOLDER_MESSAGE: "Message / Specifications",
    QUOTE_BUTTON_SUBMIT:     "Submit Request"
  },
  ar: {
    QUOTE_PAGE_TITLE:        "طلب عرض سعر | سي إيه إتش ستيل الإمارات ش.ذ.م.م",
    QUOTE_H1:                "طلب عرض سعر",
    QUOTE_P:                 "يرجى تعبئة النموذج أدناه، وسنعود إليك بعرض سعر مخصص.",
    QUOTE_PLACEHOLDER_NAME:   "اسمك",
    QUOTE_PLACEHOLDER_EMAIL:  "بريدك الإلكتروني",
    QUOTE_PLACEHOLDER_COMPANY: "اسم الشركة",
    QUOTE_PLACEHOLDER_PRODUCT: "نوع المنتج (مثل أنبوب ERW)",
    QUOTE_PLACEHOLDER_MESSAGE: "الرسالة / المواصفات",
    QUOTE_BUTTON_SUBMIT:     "إرسال الطلب"
  },
  ko: {
    QUOTE_PAGE_TITLE:        "견적 요청 | 세아스틸 UAE LLC",
    QUOTE_H1:                "견적 요청",
    QUOTE_P:                 "아래 양식을 작성해 주시면 맞춤 견적을 보내드리겠습니다.",
    QUOTE_PLACEHOLDER_NAME:   "성함",
    QUOTE_PLACEHOLDER_EMAIL:  "이메일",
    QUOTE_PLACEHOLDER_COMPANY: "회사명",
    QUOTE_PLACEHOLDER_PRODUCT: "제품 종류 (예: ERW 파이프)",
    QUOTE_PLACEHOLDER_MESSAGE: "메시지 / 사양",
    QUOTE_BUTTON_SUBMIT:     "요청 제출"
  }
};

// Swap out any element with data-i18n-quote="KEY"
function setQuoteLanguage(langCode) {
  // Page title
  document.querySelectorAll("title[data-i18n-quote]").forEach((el) => {
    const key = el.getAttribute("data-i18n-quote");
    const translated = quoteTranslations[langCode][key];
    if (translated !== undefined) {
      el.innerText = translated;
    }
  });

  // All other elements
  document.querySelectorAll("[data-i18n-quote]").forEach((el) => {
    const key = el.getAttribute("data-i18n-quote");
    const translated = quoteTranslations[langCode][key];
    if (translated !== undefined) {
      if (el.tagName.toLowerCase() === "input" || el.tagName.toLowerCase() === "textarea") {
        el.setAttribute("placeholder", translated);
      } else {
        el.innerText = translated;
      }
    }
  });
}

// Expose globally so common-i18n.js can call it on language switch
window.setPageLanguage = setQuoteLanguage;

// On DOMContentLoaded, default Quote page content to English
document.addEventListener("DOMContentLoaded", () => {
  setQuoteLanguage("en");
});
