// ================= js/manufacturing-i18n.js =================

// 1) Page-specific translations for “How We Work” (manufacturing) page
const manufacturingTranslations = {
  en: {
    MAN_PAGE_TITLE:       "How We Work | SeAH Steel UAE LLC",
    HERO_TITLE:           "Manufacturing Procedure",
    HERO_SUBTEXT:         "Step-by-step process visualization",
    SECTION_TITLE:        "MANUFACTURING PROCESS",
    PROC1_TITLE:          "JCO(E) LINE",
    PROC2_TITLE:          "ROLL-BENDER LINE",

    // JCO(E) steps
    STEP_EDGEMILLING:     "Edge Milling",
    STEP_JCOPRESS:        "JCO Press",
    STEP_TACKWELDING:     "Tack Welding",
    STEP_INSIDEWELDING:   "Inside Welding",
    STEP_OUTSIDEWELDING:  "Outside Welding",
    STEP_XRAY_INSPECT:    "X-ray Inspection",
    STEP_COLD_EXPAND:     "Cold Expanding",
    STEP_HYDRO_TEST:      "Hydro Testing",
    STEP_AUTO_UT:         "Automated UT",
    STEP_FINAL_XRAY:      "Final X-ray Test",
    STEP_HEAT_TREAT:      "Heat Treatment",
    STEP_FINAL_INSPECT:   "Final Inspection",

    // Roll-Bender steps
    STEP_PLATE_GASCUT:    "Plate Gas Cutting",
    STEP_3ROLL_BEND:      "3 Roll Bending",
    STEP_TACKWELD_RB:     "Tack Welding",
    STEP_12M_INSIDE:      "12M Inside Welding",
    STEP_12M_OUTSIDE:     "12M Outside Welding",
    STEP_FITTING_UP:      "Fitting Up",
    STEP_GIRTH_IN:        "Girth Welding Inside",
    STEP_GIRTH_OUT:       "Girth Welding Outside",
    STEP_120_HYDRO:       "120\" Hydro Testing",
    STEP_XRAY_RB:         "X-ray Test",
    STEP_HEAT_TREAT_RB:   "Heat Treatment",
    STEP_FINAL_INSPECT_RB:"Final Inspection"
  },

  ar: {
    MAN_PAGE_TITLE:       "كيفية العمل | سي إيه إتش ستيل الإمارات ش.ذ.م.م",
    HERO_TITLE:           "إجراءات التصنيع",
    HERO_SUBTEXT:         "عرض مرئي للعملية خطوة بخطوة",
    SECTION_TITLE:        "عملية التصنيع",
    PROC1_TITLE:          "خط JCO(E)",
    PROC2_TITLE:          "خط التشكيل بالدرفلة",

    // JCO(E) steps
    STEP_EDGEMILLING:     "طحن الحافة",
    STEP_JCOPRESS:        "مكبس JCO",
    STEP_TACKWELDING:     "لحام مؤقت",
    STEP_INSIDEWELDING:   "لحام داخلي",
    STEP_OUTSIDEWELDING:  "لحام خارجي",
    STEP_XRAY_INSPECT:    "تفتيش بالأشعة السينية",
    STEP_COLD_EXPAND:     "تمدد بارد",
    STEP_HYDRO_TEST:      "اختبار الضغط الهيدروليكي",
    STEP_AUTO_UT:         "الفحص بالموجات فوق الصوتية الآلي",
    STEP_FINAL_XRAY:      "اختبار بالأشعة السينية النهائي",
    STEP_HEAT_TREAT:      "المعالجة الحرارية",
    STEP_FINAL_INSPECT:   "الفحص النهائي",

    // Roll-Bender steps
    STEP_PLATE_GASCUT:    "قطع الغاز للصفيحة",
    STEP_3ROLL_BEND:      "انحناء بثلاث بكرات",
    STEP_TACKWELD_RB:     "لحام مؤقت",
    STEP_12M_INSIDE:      "لحام داخلي 12 متر",
    STEP_12M_OUTSIDE:     "لحام خارجي 12 متر",
    STEP_FITTING_UP:      "التجميع",
    STEP_GIRTH_IN:        "لحام محيطي داخلي",
    STEP_GIRTH_OUT:       "لحام محيطي خارجي",
    STEP_120_HYDRO:       "اختبار هيدروليكي 120 بوصة",
    STEP_XRAY_RB:         "اختبار بالأشعة السينية",
    STEP_HEAT_TREAT_RB:   "المعالجة الحرارية",
    STEP_FINAL_INSPECT_RB:"الفحص النهائي"
  },

  ko: {
    MAN_PAGE_TITLE:       "제조 절차 | 세아스틸 UAE LLC",
    HERO_TITLE:           "제조 절차",
    HERO_SUBTEXT:         "단계별 공정 시각화",
    SECTION_TITLE:        "제조 공정",
    PROC1_TITLE:          "JCO(E) 라인",
    PROC2_TITLE:          "롤 벤더 라인",

    // JCO(E) steps
    STEP_EDGEMILLING:     "엣지 밀링",
    STEP_JCOPRESS:        "JCO 프레스",
    STEP_TACKWELDING:     "닥 용접",
    STEP_INSIDEWELDING:   "내부 용접",
    STEP_OUTSIDEWELDING:  "외부 용접",
    STEP_XRAY_INSPECT:    "X-레이 검사",
    STEP_COLD_EXPAND:     "냉간 확장",
    STEP_HYDRO_TEST:      "수압 시험",
    STEP_AUTO_UT:         "자동 UT 검사",
    STEP_FINAL_XRAY:      "최종 X-레이 시험",
    STEP_HEAT_TREAT:      "열처리",
    STEP_FINAL_INSPECT:   "최종 검사",

    // Roll-Bender steps
    STEP_PLATE_GASCUT:    "플레이트 가스 절단",
    STEP_3ROLL_BEND:      "3롤 벤딩",
    STEP_TACKWELD_RB:     "닥 용접",
    STEP_12M_INSIDE:      "12M 내부 용접",
    STEP_12M_OUTSIDE:     "12M 외부 용접",
    STEP_FITTING_UP:      "피팅 업",
    STEP_GIRTH_IN:        "내부 둘레 용접",
    STEP_GIRTH_OUT:       "외부 둘레 용접",
    STEP_120_HYDRO:       "120인치 수압 시험",
    STEP_XRAY_RB:         "X-레이 시험",
    STEP_HEAT_TREAT_RB:   "열처리",
    STEP_FINAL_INSPECT_RB:"최종 검사"
  }
};

// 2) Swap out any element with data-i18n-manufacturing="KEY"
function setManufacturingLanguage(langCode) {
  document.querySelectorAll("[data-i18n-manufacturing]").forEach((el) => {
    const key = el.getAttribute("data-i18n-manufacturing");
    const translated = manufacturingTranslations[langCode][key];
    if (translated !== undefined) {
      el.innerText = translated;
    }
  });
  // Also update <title> if annotated
  document.querySelectorAll("title[data-i18n-manufacturing]").forEach((el) => {
    const key = el.getAttribute("data-i18n-manufacturing");
    const translated = manufacturingTranslations[langCode][key];
    if (translated !== undefined) {
      el.innerText = translated;
    }
  });
}

// 3) Expose globally so common-i18n.js can call it on language switch
window.setPageLanguage = setManufacturingLanguage;

// 4) On DOMContentLoaded, default Manufacturing page content to English
document.addEventListener("DOMContentLoaded", () => {
  setManufacturingLanguage("en");
});
