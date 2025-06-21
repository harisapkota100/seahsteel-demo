// ================= js/visit-i18n.js =================
// 1) visit.html-specific dictionary
const visitTranslations = {
  en: {
    VISIT_PAGE_TITLE: "SeAH President Mr. Joo Sung Lee's Visit to SeAH Steel UAE",
    HERO_TITLE: "SeAH President Mr. Joo Sung Lee's Visit to SeAH Steel UAE",
    HERO_SUBTEXT:
      "Strengthening global partnerships through on-site engagement at our Ras Al Khaimah facility.",
    VISIT_HEADLINE:
      "SeAH President Engages with UAE Team to Drive Future Growth",
    VISIT_P1:
      "On June 15, 2025, Mr. Joo Sung Lee, President of SeAH Steel, visited the SeAH Steel UAE facility in Ras Al Khaimah. The visit began with a formal welcome ceremony led by local management and included an overview of the plant’s operational capabilities and recent production milestones. Mr. Lee emphasized the importance of the UAE region in the company’s global strategy and commended the team for maintaining high quality standards.",
    VISIT_P2:
      "During the tour, he engaged one-on-one with production staff on the factory floor, discussing process optimizations and safety enhancements. The president also held a strategic meeting with the management team to outline future investment plans and explore opportunities for local workforce development.",
    VISIT_P3:
      "The visit concluded with a luncheon hosted by SeAH Steel UAE leadership, where Mr. Lee expressed gratitude to all employees for their dedication and invited open dialogue on how to further strengthen collaboration between the UAE and the global SeAH network. He reaffirmed the company’s commitment to sustainable growth, innovation, and supporting the local community in Ras Al Khaimah.",
    GALLERY_TITLE: "Gallery"
  },
  ar: {
    VISIT_PAGE_TITLE: "زيارة الرئيس التنفيذي السيد جو سونغ لي إلى SeAH Steel الإمارات",
    HERO_TITLE:       "زيارة الرئيس التنفيذي السيد جو سونغ لي إلى SeAH Steel الإمارات",
    HERO_SUBTEXT:
      "تعزيز الشراكات العالمية من خلال التفاعل المباشر في منشأتنا في رأس الخيمة.",
    VISIT_HEADLINE:
      "تفاعل رئيس SeAH مع فريق الإمارات لدفع النمو المستقبلي",
    VISIT_P1:
      "في 15 يونيو 2025، قام السيد جو سونغ لي، رئيس SeAH Steel، بزيارة منشأة SeAH Steel الإمارات في رأس الخيمة. بدأت الزيارة بحفل ترحيبي رسمي برئاسة الإدارة المحلية وشملت نظرة عامة على قدرات المصنع التشغيلية والمعالم الإنتاجية الأخيرة. وأكد السيد لي على أهمية الإمارات ضمن استراتيجية الشركة العالمية وأشاد بالفريق للحفاظ على معايير الجودة العالية.",
    VISIT_P2:
      "خلال الجولة، تفاعل مع موظفي الإنتاج مباشرة في أرضية المصنع، حيث ناقش تحسينات العملية وتعزيز معايير السلامة. كما عقد رئيس الشركة اجتماعًا استراتيجيًا مع فريق الإدارة لتحديد خطط الاستثمار المستقبلية واستكشاف فرص تطوير القوى العاملة المحلية.",
    VISIT_P3:
      "اختتمت الزيارة بغداء أقامته قيادة SeAH Steel الإمارات، حيث عبر السيد لي عن امتنانه لجميع الموظفين لتفانيهم ودعا إلى حوار مفتوح حول كيفية تعزيز التعاون بين الإمارات وشبكة SeAH العالمية. وأكد التزام الشركة بالنمو المستدام والابتكار ودعم المجتمع المحلي في رأس الخيمة.",
    GALLERY_TITLE:    "المعرض"
  },
  ko: {
    VISIT_PAGE_TITLE: "SeAH 회장 이상주님의 SeAH Steel UAE 방문",
    HERO_TITLE:       "SeAH 회장 이상주님의 SeAH Steel UAE 방문",
    HERO_SUBTEXT:
      "라스알카이마 시설 현장 방문을 통한 글로벌 파트너십 강화.",
    VISIT_HEADLINE:
      "SeAH 회장, UAE 팀과의 교류로 미래 성장 견인",
    VISIT_P1:
      "2025년 6월 15일, SeAH Steel 회장 이상주님이 UAE 라스알카이마에 위치한 SeAH Steel UAE 시설을 방문했습니다. 이번 방문은 지역 경영진이 주관한 공식 환영식으로 시작되었으며, 공장 운영 능력 및 최근 생산 성과에 대한 개요를 포함했습니다. 이상주 회장은 UAE 지역이 회사의 글로벌 전략에서 차지하는 중요성을 강조하며 팀의 높은 품질 유지 노력에 찬사를 보냈습니다.",
    VISIT_P2:
      "공장 투어 중 그는 생산 현장 직원들과 일대일로 소통하며 공정 최적화 및 안전 강화 방안을 논의했습니다. 또한 경영진과의 전략 회의를 통해 향후 투자 계획을 논의하고 현지 인력 개발 기회를 모색했습니다.",
    VISIT_P3:
      "방문은 SeAH Steel UAE 리더십이 주최한 만찬으로 마무리되었으며, 회장님은 모든 직원의 헌신에 감사를 표하고 UAE와 글로벌 SeAH 네트워크 간의 협업 강화를 위한 열린 대화를 제안했습니다. 그는 지속 가능한 성장, 혁신 및 라스알카이마 지역 사회 지원에 대한 회사의 약속을 재확인했습니다.",
    GALLERY_TITLE:    "갤러리"
  }
};


// 2) Swap out any element with data-i18n-miite="KEY"
function setVisitLanguage(langCode) {
  document.querySelectorAll("[data-i18n-visit]").forEach((el) => {
    const key = el.getAttribute("data-i18n-visit");
    const translated = visitTranslations[langCode][key];
    if (translated !== undefined) {
      el.innerText = translated;
    }
  });

  // Also update <title> if annotated
  document.querySelectorAll("title[data-i18n-visit]").forEach((el) => {
    const key = el.getAttribute("data-i18n-visit");
    const translated = visitTranslations[langCode][key];
    if (translated !== undefined) {
      el.innerText = translated;
    }
  });
}

// 3) Expose globally so common-i18n.js can call it on language switch
window.setPageLanguage = setVisitLanguage;

// 4) On DOMContentLoaded, default Miite page content to English
document.addEventListener("DOMContentLoaded", () => {
  setVisitLanguage("en");
});
