// ================= js/careers-i18n.js =================

// 1) Page-specific translations for Careers
const careersTranslations = {
  en: {
    CAREERS_PAGE_TITLE:      "Careers | SeAH Steel UAE LLC",
    HERO_TITLE:              "Careers",
    HERO_SUBTEXT:            "Join our team at SeAH Steel UAE LLC",

    CV_TITLE:                "Submit Your CV",
    CV_LABEL_NAME:           "Full Name",
    CV_LABEL_EMAIL:          "Email Address",
    CV_LABEL_PHONE:          "Phone Number",
    CV_LABEL_RESUME_LINK:    "Link to Your Resume (Google Drive, Dropbox, etc.)",
    CV_BUTTON:               "Submit",

    VACANCIES_TITLE:         "Current Vacancies",

    VACANCY1_TITLE:          "Mechanical Engineer",
    VACANCY1_DESC:           "Design, test and oversee manufacturing processes for steel pipe systems.",
    VACANCY1_BUTTON:         "Apply Now",

    VACANCY2_TITLE:          "International Welding Engineer",
    VACANCY2_DESC:           "Drive business development and manage key client relationships across the GCC.",
    VACANCY2_BUTTON:         "Apply Now",

    MODAL_APPLY_FOR:         "Apply for ",
    MODAL_LABEL_NAME:        "Full Name",
    MODAL_LABEL_ADDRESS:     "Address",
    MODAL_LABEL_DOB:         "Date of Birth",
    MODAL_LABEL_GENDER:      "Gender",
    MODAL_OPTION_MALE:       "Male",
    MODAL_OPTION_FEMALE:     "Female",
    MODAL_OPTION_OTHER:      "Other",
    MODAL_LABEL_PHONE:       "Contact Phone",
    MODAL_LABEL_EMAIL:       "Contact Email",
    MODAL_LABEL_EDUCATION:   "Education Details",
    MODAL_LABEL_EXPERIENCE:  "Experience Details",
    MODAL_LABEL_SALARY:      "Expected Salary",
    MODAL_LABEL_RESUME_LINK: "CV Link",
    MODAL_LABEL_CERTIFICATES_LINK: "Certificates Link",
    MODAL_SUBMIT:            "Submit Application",

    FORM_FEEDBACK_SUCCESS:   "Thank you! Your application has been submitted."
  },

  ar: {
    CAREERS_PAGE_TITLE:      "الوظائف | سي إيه إتش ستيل الإمارات ش.ذ.م.م",
    HERO_TITLE:              "الوظائف",
    HERO_SUBTEXT:            "انضم لفريقنا في سي إيه إتش ستيل الإمارات ش.ذ.م.م",

    CV_TITLE:                "أرسل سيرتك الذاتية",
    CV_LABEL_NAME:           "الاسم الكامل",
    CV_LABEL_EMAIL:          "البريد الإلكتروني",
    CV_LABEL_PHONE:          "رقم الهاتف",
    CV_LABEL_RESUME_LINK:    "رابط سيرتك الذاتية (Google Drive, Dropbox، إلخ)",
    CV_BUTTON:               "إرسال",

    VACANCIES_TITLE:         "الوظائف الشاغرة الحالية",

    VACANCY1_TITLE:          "مهندس ميكانيكي",
    VACANCY1_DESC:           "تصميم واختبار والإشراف على عمليات تصنيع أنظمة أنابيب الفولاذ.",
    VACANCY1_BUTTON:         "قدّم الآن",

    VACANCY2_TITLE:          "مهندس لحام دولي",
    VACANCY2_DESC:           "قيادة تطوير الأعمال وإدارة علاقات العملاء الرئيسية في دول مجلس التعاون.",
    VACANCY2_BUTTON:         "قدّم الآن",

    MODAL_APPLY_FOR:         "التقديم على ",
    MODAL_LABEL_NAME:        "الاسم الكامل",
    MODAL_LABEL_ADDRESS:     "العنوان",
    MODAL_LABEL_DOB:         "تاريخ الميلاد",
    MODAL_LABEL_GENDER:      "النوع",
    MODAL_OPTION_MALE:       "ذكر",
    MODAL_OPTION_FEMALE:     "أنثى",
    MODAL_OPTION_OTHER:      "آخر",
    MODAL_LABEL_PHONE:       "رقم الهاتف",
    MODAL_LABEL_EMAIL:       "البريد الإلكتروني",
    MODAL_LABEL_EDUCATION:   "تفاصيل التعليم",
    MODAL_LABEL_EXPERIENCE:  "تفاصيل الخبرة",
    MODAL_LABEL_SALARY:      "الراتب المتوقع",
    MODAL_LABEL_RESUME_LINK: "رابط السيرة الذاتية",
    MODAL_LABEL_CERTIFICATES_LINK: "رابط الشهادات",
    MODAL_SUBMIT:            "إرسال الطلب",

    FORM_FEEDBACK_SUCCESS:   "شكرًا لك! تم استلام طلبك."
  },

  ko: {
    CAREERS_PAGE_TITLE:      "채용 정보 | 세아스틸 UAE LLC",
    HERO_TITLE:              "채용 정보",
    HERO_SUBTEXT:            "세아스틸 UAE LLC 팀에 합류하세요",

    CV_TITLE:                "이력서 제출",
    CV_LABEL_NAME:           "성명",
    CV_LABEL_EMAIL:          "이메일 주소",
    CV_LABEL_PHONE:          "전화번호",
    CV_LABEL_RESUME_LINK:    "이력서 링크 (Google Drive, Dropbox 등)",
    CV_BUTTON:               "제출",

    VACANCIES_TITLE:         "현재 채용 공고",

    VACANCY1_TITLE:          "기계 엔지니어",
    VACANCY1_DESC:           "강관 시스템의 설계, 테스트 및 제조 공정을 감독합니다.",
    VACANCY1_BUTTON:         "지금 지원",

    VACANCY2_TITLE:          "국제 용접 엔지니어",
    VACANCY2_DESC:           "GCC 전역의 주요 고객 관계를 관리하고 비즈니스 개발을 주도합니다.",
    VACANCY2_BUTTON:         "지금 지원",

    MODAL_APPLY_FOR:         "지원하기: ",
    MODAL_LABEL_NAME:        "성명",
    MODAL_LABEL_ADDRESS:     "주소",
    MODAL_LABEL_DOB:         "생년월일",
    MODAL_LABEL_GENDER:      "성별",
    MODAL_OPTION_MALE:       "남성",
    MODAL_OPTION_FEMALE:     "여성",
    MODAL_OPTION_OTHER:      "기타",
    MODAL_LABEL_PHONE:       "연락처 전화",
    MODAL_LABEL_EMAIL:       "연락처 이메일",
    MODAL_LABEL_EDUCATION:   "학력 사항",
    MODAL_LABEL_EXPERIENCE:  "경력 사항",
    MODAL_LABEL_SALARY:      "희망 연봉",
    MODAL_LABEL_RESUME_LINK: "이력서 링크",
    MODAL_LABEL_CERTIFICATES_LINK: "자격증 링크",
    MODAL_SUBMIT:            "지원서 제출",

    FORM_FEEDBACK_SUCCESS:   "감사합니다! 지원서가 성공적으로 제출되었습니다."
  }
};

// 2) Swap out any element with data-i18n-careers="KEY"
function setCareersLanguage(langCode) {
  document.querySelectorAll("[data-i18n-careers]").forEach((el) => {
    const key = el.getAttribute("data-i18n-careers");
    const translated = careersTranslations[langCode][key];
    if (translated !== undefined) {
      el.innerText = translated;
    }
  });
}

// 3) Expose globally so common-i18n.js can call it when languages switch
window.setPageLanguage = setCareersLanguage;

// 4) On page load, default all careers‐specific to English
document.addEventListener("DOMContentLoaded", () => {
  setCareersLanguage("en");
});
