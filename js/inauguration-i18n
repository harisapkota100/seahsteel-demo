// ================= js/inauguration-i18n.js =================

// 1) Page-specific translations for Inauguration page
const inaugurationTranslations = {
  en: {
    INAG_PAGE_TITLE:   "Inauguration of SeAH Steel UAE LLC",
    HERO_TITLE:        "Inauguration of SeAH Steel UAE",
    HERO_SUBTEXT:      "Marking the beginning of excellence in steel pipe manufacturing",
    INAG_HEADLINE:     "Historic Inauguration Ceremony",
    INAG_P1:
      "SeAH Steel UAE LLC was officially inaugurated on April 4, 2011, at the Al Ghail Industrial Park in Ras Al Khaimah. The event marked a significant milestone in the industrial development of the UAE.",
    INAG_P2:
      "The ceremony was graced by His Highness Sheikh Saud bin Saqr Al Qasimi, Supreme Council Member and Ruler of Ras Al Khaimah, and attended by Sheikh Mohammed bin Saud bin Saqr Al Qasimi, Crown Prince of Ras Al Khaimah, along with other dignitaries.",
    INAG_P3:
      "Established as a joint venture between SeAH Steel Corporation of South Korea and the Ras Al Khaimah Investment Authority (RAKIA), the facility represents a $70 million (AED 257 million) investment, with an annual production capacity of 150,000 tonnes of high-quality steel pipes.",
    INAG_P4:
      "With advanced technology such as the JCO and 3-Roll Bending lines, the plant supports industries like oil, gas, and construction. This inauguration laid the foundation for a robust industrial partnership between the UAE and South Korea.",
    GALLERY_TITLE:     "GALLERY"
  },

  ar: {
    INAG_PAGE_TITLE:   "حفل افتتاح سي إيه إتش ستيل الإمارات ش.ذ.م.م",
    HERO_TITLE:        "حفل افتتاح سي إيه إتش ستيل الإمارات",
    HERO_SUBTEXT:      "يمثل بداية التميز في تصنيع أنابيب الفولاذ",
    INAG_HEADLINE:     "حفل افتتاح تاريخي",
    INAG_P1:
      "تم رسميًا افتتاح شركة سي إيه إتش ستيل الإمارات ش.ذ.م.م في 4 أبريل 2011 في المنطقة الصناعية الغيل برأس الخيمة. مثل هذا الحدث علامة فارقة مهمة في تطوير الصناعة في الإمارات.",
    INAG_P2:
      "حضر الحفل صاحب السمو الشيخ سعود بن صقر القاسمي، عضو المجلس الأعلى وحاكم رأس الخيمة، وكذلك حضر صاحب السمو الشيخ محمد بن سعود بن صقر القاسمي، ولي عهد رأس الخيمة، إلى جانب شخصيات بارزة أخرى.",
    INAG_P3:
      "تم تأسيس المنشأة كمشروع مشترك بين شركة سي إيه إتش ستيل كوربوريشن الكورية الجنوبية وهيئة الاستثمار في رأس الخيمة (راكيا)، ويمثل المنشأة استثمارًا بقيمة 70 مليون دولار أمريكي (257 مليون درهم إماراتي)، بطاقة إنتاجية سنوية تبلغ 150,000 طن من أنابيب الفولاذ عالية الجودة.",
    INAG_P4:
      "بفضل التكنولوجيا المتقدمة مثل خطوط JCO وخطوط الانحناء ذات الثلاث بكرات، تدعم المنشأة صناعات مثل النفط والغاز والبناء. وقد وضع هذا الافتتاح أرضية لشراكة صناعية قوية بين الإمارات وكوريا الجنوبية.",
    GALLERY_TITLE:     "المعرض"
  },

  ko: {
    INAG_PAGE_TITLE:   "세아스틸 UAE LLC 개소식",
    HERO_TITLE:        "세아스틸 UAE 개소식",
    HERO_SUBTEXT:      "강관 제조의 우수성을 여는 시작을 기념합니다",
    INAG_HEADLINE:     "역사적인 개소식",
    INAG_P1:
      "세아스틸 UAE LLC는 2011년 4월 4일 라스 알 카이마 알 걸 산업 단지에서 공식 개소식을 가졌습니다. 이 행사는 UAE 산업 발전에 중요한 이정표가 되었습니다.",
    INAG_P2:
      "개소식에는 라스 알 카이마 통치자이자 최고 평의회 의원인 술탄 사우드 빈 사크르 알 카시미 경에 의해 거행되었으며, 라스 알 카이마의 왕세자 무함마드 빈 사우드 빈 사크르 알 카시미 경과 다른 주요 인사들이 참석했습니다.",
    INAG_P3:
      "이 시설은 한국의 세아스틸 코퍼레이션과 라스 알 카이마 투자청(RAKIA)의 합작 투자로 설립되었으며, 7천만 달러(2억 5천7백만 AED)의 투자로 연간 150,000톤의 고품질 강관을 생산할 수 있습니다.",
    INAG_P4:
      "JCO 및 3롤 벤딩 라인과 같은 첨단 기술을 통해 이 공장은 석유, 가스 및 건설과 같은 산업을 지원합니다. 이 개소식은 UAE와 한국 간 강력한 산업 파트너십의 초석을 마련했습니다.",
    GALLERY_TITLE:     "갤러리"
  }
};

// 2) Swap out any element with data-i18n-inauguration="KEY"
function setInaugurationLanguage(langCode) {
  document.querySelectorAll("[data-i18n-inauguration]").forEach((el) => {
    const key = el.getAttribute("data-i18n-inauguration");
    const translated = inaugurationTranslations[langCode][key];
    if (translated !== undefined) {
      el.innerText = translated;
    }
  });

  // Also update <title> if annotated
  document.querySelectorAll("title[data-i18n-inauguration]").forEach((el) => {
    const key = el.getAttribute("data-i18n-inauguration");
    const translated = inaugurationTranslations[langCode][key];
    if (translated !== undefined) {
      el.innerText = translated;
    }
  });
}

// 3) Expose globally so common-i18n.js can call it on language switch
window.setPageLanguage = setInaugurationLanguage;

// 4) On DOMContentLoaded, default Inauguration page content to English
document.addEventListener("DOMContentLoaded", () => {
  setInaugurationLanguage("en");
});
