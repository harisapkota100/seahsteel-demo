// ================= js/17025-i18n.js =================

// 1) 17025.html-specific dictionary
const page17025Translations = {
  en: {
    ACCR_PAGE_TITLE:    "ISO 17025 Accreditation",
    HERO17025_TITLE:    "ISO/IEC 17025:2017 Accreditation",
    HERO17025_SUBTEXT:  "Ensuring excellence and competence in testing and calibration",

    ACCR_TITLE:
      "SeAH Steel UAE Achieves ISO/IEC 17025:2017 Accreditation",
    ACCR_P1:
      "We are proud to announce that <strong>SeAH Steel UAE LLC</strong> has been accredited by the <strong>Emirates International Accreditation Centre (EIAC)</strong> under certificate number <strong>LB-TEST-266</strong> in accordance with <strong>ISO/IEC 17025:2017</strong> — General requirements for the competence of testing and calibration laboratories.",
    ACCR_P2:
      "This prestigious accreditation, valid from <strong>November 1, 2024 to October 31, 2027</strong>, certifies our capabilities in performing mechanical, metallographic, and chemical testing on steel plates, pipes, and weldments, in compliance with international standards such as ASTM, ISO, AWS, and ASME.",
    ACCR_P3:
      "The recognition under ISO 17025 reinforces SeAH Steel UAE’s ongoing commitment to quality, precision, and technical excellence. It ensures our laboratory operates with high competence and reliable results that meet global benchmarks in testing methodology and equipment calibration.",
    ACCR_P4:
      "We extend our gratitude to our dedicated team, partners, and EIAC for this achievement and pledge to continue delivering world-class steel solutions with validated testing integrity.",

    GALLERY_TITLE:      "GALLERY"
  },

  ar: {
    ACCR_PAGE_TITLE:    "الاعتماد ISO/IEC 17025:2017",
    HERO17025_TITLE:    "الاعتماد ISO/IEC 17025:2017",
    HERO17025_SUBTEXT:  "ضمان التميّز والكفاءة في الاختبار والمعايرة",

    ACCR_TITLE:
      "سي إيه إتش ستيل الإمارات تحصل على اعتماد ISO/IEC 17025:2017",
    ACCR_P1:
      "نفخر بالإعلان عن أن <strong>سي إيه إتش ستيل الإمارات ش.ذ.م.م</strong> قد حصلت على الاعتماد من <strong>المركز الإماراتي الدولي للاعتماد (EIAC)</strong> تحت رقم الشهادة <strong>LB-TEST-266</strong> وفقًا لمتطلبات <strong>ISO/IEC 17025:2017</strong> — المتطلبات العامة لكفاءة مختبرات الاختبار والمعايرة.",
    ACCR_P2:
      "يُعَد هذا الاعتماد المرموق، الساري من <strong>1 نوفمبر 2024 إلى 31 أكتوبر 2027</strong>، شهادةً لقدراتنا في إجراء الاختبارات الميكانيكية والميتالوغرافية والكيميائية على ألواح الفولاذ والأنابيب والملحومات، وفقًا للمعايير الدولية مثل ASTM و ISO و AWS و ASME.",
    ACCR_P3:
      "يعزّز هذا الاعتماد تحت ISO 17025 التزام سي إيه إتش ستيل الإمارات المستمر بالجودة والدقة والتميز الفني. إنّه يضمن أن يعمل معملنا بكفاءة عالية ونتائج موثوقة تتوافق مع المعايير العالمية في منهجية الاختبار ومعايرة الأجهزة.",
    ACCR_P4:
      "نتوجه بخالص الشكر لفريقنا المخلص، وشركائنا، وEIAC على هذا الإنجاز، ونعِد بمواصلة تقديم حلول فولاذية عالمية المستوى بنزاهة اختبار مُتحققة.",

    GALLERY_TITLE:      "المعرض"
  },

  ko: {
    ACCR_PAGE_TITLE:    "ISO/IEC 17025:2017 인증",
    HERO17025_TITLE:    "ISO/IEC 17025:2017 인증",
    HERO17025_SUBTEXT:  "테스트 및 교정의 우수성 및 역량 보장",

    ACCR_TITLE:
      "세아스틸 UAE, ISO/IEC 17025:2017 인증 획득",
    ACCR_P1:
      "저희는 <strong>세아스틸 UAE LLC</strong>가 <strong>EIAC(Emirates International Accreditation Centre)</strong>로부터 인증 번호 <strong>LB-TEST-266</strong>로 <strong>ISO/IEC 17025:2017</strong> — 테스트 및 교정 실험실의 역량에 대한 일반 요구 사항 — 을 획득했음을 자랑스럽게 알립니다.",
    ACCR_P2:
      "이 권위 있는 인증은 <strong>2024년 11월 1일부터 2027년 10월 31일까지</strong> 유효하며, ASTM, ISO, AWS 및 ASME와 같은 국제 표준을 준수하여 강판, 파이프 및 용접부에 대한 기계적, 금속조직학적 및 화학적 테스트를 수행할 수 있는 당사의 역량을 인증합니다.",
    ACCR_P3:
      "ISO 17025 인증을 통해 세아스틸 UAE는 품질, 정밀도 및 기술적 우수성에 대한 지속적인 약속을 강화합니다. 이는 저희 실험실이 높은 역량과 신뢰할 수 있는 결과로 작동하여 테스트 방법론 및 장비 교정의 글로벌 벤치마크를 충족함을 보장합니다.",
    ACCR_P4:
      "이 성과를 위해 헌신적인 팀, 파트너 및 EIAC에 감사드리며, 검증된 테스트 무결성을 통해 세계적 수준의 철강 솔루션을 지속적으로 제공할 것을 약속합니다.",

    GALLERY_TITLE:      "갤러리"
  }
};

// 2) Swap out any element with data-i18n-17025="KEY" for 17025.html
function set17025Language(langCode) {
  document.querySelectorAll("[data-i18n-17025]").forEach((el) => {
    const key = el.getAttribute("data-i18n-17025");
    const translated = page17025Translations[langCode][key];
    if (translated !== undefined) {
      el.innerHTML = translated; // use innerHTML because text contains <strong>
    }
  });
}

// Expose globally so common-i18n can call it on button clicks
window.setPageLanguage = set17025Language;

// On load, default to English for this page
document.addEventListener("DOMContentLoaded", () => {
  // common-i18n already set common to English
  set17025Language("en");
});
