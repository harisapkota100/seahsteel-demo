// ================= js/quality-i18n.js =================

// Page-specific translations for Quality page
const qualityTranslations = {
  en: {
    QUALITY_PAGE_TITLE:       "Quality & Certifications | SeAH Steel UAE LLC",
    HERO_TITLE:               "Quality & Certifications",
    HERO_SUBTEXT:             "Global standards. Local assurance.",

    COMMIT_TITLE:             "Our Commitment to Quality",
    COMMIT_P:
      "At SeAH Steel UAE LLC, quality is not just a promise — it is our process. We adhere strictly to international standards including ISO, API, CE and DNV. Our team is trained to ensure excellence in every phase of pipe production.",

    CERT_TITLE:               "Certifications",
    CERT_ITEM_ISO9001:
      "✔ ISO 9001 – Quality Management System (Manufacturing of Longitudinally Welded Steel Pipe)",
    CERT_ITEM_ISO14001:       "✔ ISO 14001 – Environmental Management System",
    CERT_ITEM_ISO45001:       "✔ ISO 45001:2018 – Health & Safety Management System",
    CERT_ITEM_ISO17025:       "✔ ISO/IEC 17025:2017 – Laboratory Accreditation Certificate",
    CERT_ITEM_APIQ1:          "✔ API Q1 – Quality Management for Manufacturing of Line Pipe",
    CERT_ITEM_API5L:          "✔ API 5L – Line Pipe Specification",
    CERT_ITEM_API2B:          "✔ API 2B – Structural Pipe Specification",
    CERT_ITEM_CE1090:         "✔ CE Marking – Regulation 305/2011/EU (Carbon Steel Pipe)",
    CERT_ITEM_DNV:            "✔ DNV – Approval of Manufacturer",
    DOWNLOAD_BUTTON:          "Download Certificates",

    NDT_TITLE:                "NDT & Testing Capabilities",
    NDT_P:
      "We employ advanced Non-Destructive Testing techniques to ensure pipe integrity and customer trust:",
    NDT_ITEM_UT:              "✔ Ultrasonic Testing (UT)",
    NDT_ITEM_RT:              "✔ Radiographic Testing (RT)",
    NDT_ITEM_MT:              "✔ Magnetic Particle Inspection (MT)",
    NDT_ITEM_PT:              "✔ Penetrant Testing (PT)",
    NDT_ITEM_HYDRO:           "✔ Hydrostatic Pressure Testing",

    INSPECT_TITLE:            "Inspection Equipment",
    INSPECT_P:
      "We operate with high-end inspection tools including:",
    INSPECT_ITEM_AUTO_UT:      "✔ Automated UT Equipment",
    INSPECT_ITEM_XRAY:         "✔ X-ray Rooms for RT",
    INSPECT_ITEM_GAUGES:       "✔ Pipe Roundness Gauges",
    INSPECT_ITEM_THICK:        "✔ Digital Wall Thickness Measurement",

    QM_TITLE:                 "Quality Management",
    QM_P1:
      "SeAH Steel UAE’s commitment to quality commences with its raw material sourcing strategy. The Company’s key manufacturing input is steel plate, which is reliably sourced under an existing supply agreement. Other input materials, such as welding consumables and related pipes, are all procured from industry-leading companies.",
    QM_P2:
      "All procured materials are inspected upon delivery before processing. The benefit of this rigorous control is reflected in our world-class API and non-API production yields since 2011. High production yield is critical for cost-competitiveness and market growth in longitudinal welded pipes, while defect-free quality remains essential for oil and gas transmission applications. From 2010 onward, SeAH Steel UAE has recorded minimal customer claims, reinforcing our reputation as a supplier of choice within the SAWL segment.",
    QM_P3:
      "We employ industry-leading quality control techniques and collaborate with customers to develop Manufacturing Procedure Specifications (MPS) and Inspection & Test Plans (ITP) before production begins. Initial trial runs validate process parameters, followed by ongoing inspections—both nondestructive (hydrostatic, ultrasonic, x-ray) and destructive (HIC, SSCC)—using our in-house laboratory equipment to assess chemical and mechanical properties.",

    SAMPLE_TITLE:             "Sample Quality Management Documents",
    SAMPLE_P:
      "Our documentation suite includes Inspection Test Plans, Manufacturing Procedure Specifications, Material Test Certificates (MTC), and Inspection Reports, ensuring traceability and consistency throughout production.",
    VIEW_SAMPLES_BUTTON:      "View Samples",

    PIPE_TITLE:               "Pipe Tracking System",
    PIPE_P1:
      "Traceability is maintained from plate reception to final inspection and storage using a real-time, proprietary ERP-linked tracking system. Plate details (heat number, grade, weight, size) are logged upon receipt. Non-conforming plates are removed, and each formed pipe is assigned a unique ERP-generated number. Stenciling applies complete product data (I.D., O.D., length) at four locations per customer specifications.",
    PIPE_P2:
      "At each manufacturing station, operators record the pipe number, date, shift, and outcomes (accepted or non-conforming). Non-conforming pipes are routed to rework, then re-inspected before reintegration. Final inspection updates pipe length and confirms all dimensions and quality checks.",

    PQR_TITLE:                "PQR & WPS Process",
    PQR_P:
      "We maintain a robust Procedure Qualification Record (PQR) and Welding Procedure Specification (WPS) workflow:",
    PQR_ITEM_REVIEW:          "Review customer request and select raw material",
    PQR_ITEM_PARAMS:          "Set welding parameters and choose consumables",
    PQR_ITEM_PREPARE:         "Prepare and weld specimens (GMAW / SAW)",
    PQR_ITEM_REPORTS:         "Publish mechanical test reports from accredited labs",
    PQR_ITEM_PQ:              "Request TPI witness and conduct Production Qualification (PQ) tests",
    PQR_ITEM_VERIFY:          "Verify and accept specimens and welding status per TPI feedback",

    SPC_TITLE:                "Statistical Process Control",
    SPC_P:
      "Our SPC program evaluates key parameters on a monthly or per-order basis:",
    SPC_ITEM_VISUAL:
      "Visual Inspection: pipe end diameter, wall thickness, straightness, squareness, bead height (inside/outside)",
    SPC_ITEM_LAB:
      "Laboratory Tests: Charpy impact, tensile, and other customer-specific tests"
  },

  ar: {
    QUALITY_PAGE_TITLE:       "الجودة والشهادات | سي إيه إتش ستيل الإمارات ش.ذ.م.م",
    HERO_TITLE:               "الجودة والشهادات",
    HERO_SUBTEXT:             "معايير عالمية. ضمان محلي.",

    COMMIT_TITLE:             "التزامنا بالجودة",
    COMMIT_P:
      "في شركة سي إيه إتش ستيل الإمارات ش.ذ.م.م، الجودة ليست وعدًا فقط — بل هي عمليتنا. نلتزم بشكل صارم بالمعايير الدولية بما في ذلك ISO وAPI وCE وDNV. تم تدريب فريقنا لضمان التميّز في كل مرحلة من مراحل إنتاج الأنابيب.",

    CERT_TITLE:               "الشهادات",
    CERT_ITEM_ISO9001:
      "✔ ISO 9001 – نظام إدارة الجودة (تصنيع أنابيب فولاذية ملحومة طولياً)",
    CERT_ITEM_ISO14001:       "✔ ISO 14001 – نظام الإدارة البيئية",
    CERT_ITEM_ISO45001:       "✔ ISO 45001:2018 – نظام إدارة الصحة والسلامة",
    CERT_ITEM_ISO17025:       "✔ ISO/IEC 17025:2017 – شهادة اعتماد المختبر",
    CERT_ITEM_APIQ1:          "✔ API Q1 – إدارة الجودة لتصنيع أنابيب النقل",
    CERT_ITEM_API5L:          "✔ API 5L – مواصفات أنابيب النقل",
    CERT_ITEM_API2B:          "✔ API 2B – مواصفات الأنابيب الهيكلية",
    CERT_ITEM_CE1090:         "✔ علامة CE – اللائحة 305/2011/EU (أنابيب الكربون)",
    CERT_ITEM_DNV:            "✔ DNV – اعتماد المُصنّع",
    DOWNLOAD_BUTTON:          "تحميل الشهادات",

    NDT_TITLE:                "قدرات الاختبارات غير الهدامة والاختبار",
    NDT_P:
      "نستخدم تقنيات متقدمة للاختبارات غير الهدامة لضمان سلامة الأنابيب وكسب ثقة العملاء:",
    NDT_ITEM_UT:              "✔ الاختبار بالموجات فوق الصوتية (UT)",
    NDT_ITEM_RT:              "✔ الاختبار بالأشعة (RT)",
    NDT_ITEM_MT:              "✔ الفحص بمسحوق مغناطيسي (MT)",
    NDT_ITEM_PT:              "✔ الفحص بالمسبار (PT)",
    NDT_ITEM_HYDRO:           "✔ الاختبار الهيدروليكي للضغط",

    INSPECT_TITLE:            "معدات التفتيش",
    INSPECT_P:
      "نستخدم أدوات تفتيش متقدمة تشمل:",
    INSPECT_ITEM_AUTO_UT:      "✔ معدات UT الآلي",
    INSPECT_ITEM_XRAY:         "✔ غرف الأشعة لأداء RT",
    INSPECT_ITEM_GAUGES:       "✔ مقاييس استدارة الأنابيب",
    INSPECT_ITEM_THICK:        "✔ قياس سمك الجدار الرقمي",

    QM_TITLE:                 "إدارة الجودة",
    QM_P1:
      "يبدأ التزام سي إيه إتش ستيل الإمارات بالجودة باستراتيجية تأمين المواد الخام. المدخل الأساسي للتصنيع هو ألواح الصلب، والتي يتم الحصول عليها بموجب اتفاقية توريد قائمة. المواد الأخرى مثل مستهلكات اللحام والأنابيب ذات الصلة تُشترى كلها من شركات رائدة في الصناعة.",
    QM_P2:
      "يتم فحص جميع المواد المشتراة عند التسليم قبل المعالجة. ينعكس أثر هذا التحكم الدقيق في معدلات إنتاجنا العالمية (API وغير API) منذ عام 2011. تُعد معدلات الإنتاج العالية أمرًا حيويًا لتنافسية التكلفة ونمو السوق في الأنابيب الملحومة طولياً، بينما تظل الجودة الخالية من العيوب ضرورية لتطبيقات نقل النفط والغاز. منذ عام 2010، سجّلت سي إيه إتش ستيل الإمارات أدنى عدد من شكاوى العملاء، مما يعزز سمعتنا كمورد مفضل في قطاع SAWL.",
    QM_P3:
      "نستخدم تقنيات مراقبة جودة رائدة في الصناعة ونتعاون مع العملاء لتطوير مواصفات إجراءات التصنيع (MPS) وخطط التفتيش والاختبار (ITP) قبل بدء الإنتاج. تتحقق التجارب الأولية من معايير العملية، تليها عمليات تفتيش مستمرة—سواء اختبارات غير مدمرة (الهيدروليك، الموجات فوق الصوتية، الأشعة) أو اختبارات مدمرة (HIC، SSCC)—باستخدام معدات مختبرنا الداخلي لتقييم الخصائص الكيميائية والميكانيكية.",

    SAMPLE_TITLE:             "نماذج وثائق إدارة الجودة",
    SAMPLE_P:
      "تشمل حزمة وثائقنا خطط تفتيش الاختبار، ومواصفات إجراءات التصنيع، وشهادات اختبار المواد (MTC)، وتقارير التفتيش، مما يضمن إمكانية تتبع وجودة متسقة طوال الإنتاج.",
    VIEW_SAMPLES_BUTTON:      "عرض النماذج",

    PIPE_TITLE:               "نظام تتبع الأنابيب",
    PIPE_P1:
      "يتم الحفاظ على إمكانية التتبع من استقبال الألواح إلى الفحص النهائي والتخزين باستخدام نظام ERP مرتبط بالزمن الحقيقي. يتم تسجيل تفاصيل اللوح (رقم التسخين، الدرجة، الوزن، الحجم) عند الاستلام. يتم إزالة الألواح غير المطابقة، ويُعيّن لكل أنبوب شكل رقمًا فريدًا مُولَّدًا بواسطة ERP. يتم وسم بيانات المنتج الكاملة (القطر الداخلي، القطر الخارجي، الطول) في أربعة مواقع وفقًا لمواصفات العميل.",
    PIPE_P2:
      "في كل محطة تصنيع، يسجل المشغلون رقم الأنبوب، والتاريخ، والنوبة، والنتائج (مقبول أو غير مطابق). يتم توجيه الأنابيب غير المطابقة إلى إعادة العمل، ثم تُعاد فحصها قبل إعادة إدخالها. يحدّث الفحص النهائي طول الأنبوب ويؤكد جميع الأبعاد وفحوص الجودة.",

    PQR_TITLE:                "عملية PQR وWPS",
    PQR_P:
      "نحافظ على سير عمل صارم لسجل تأهيل الإجراءات (PQR) ومواصفات إجراءات اللحام (WPS):",
    PQR_ITEM_REVIEW:          "مراجعة طلب العميل واختيار المواد الخام",
    PQR_ITEM_PARAMS:          "ضبط معايير اللحام واختيار المستهلكات",
    PQR_ITEM_PREPARE:         "إعداد ولحام العينات (GMAW / SAW)",
    PQR_ITEM_REPORTS:         "نشر تقارير الاختبارات الميكانيكية من المختبرات المعتمدة",
    PQR_ITEM_PQ:              "طلب حضور شهادات الفحص من TPI وإجراء اختبارات تأهيل الإنتاج (PQ)",
    PQR_ITEM_VERIFY:          "التحقق وقبول العينات وحالة اللحام وفقًا لتعليقات TPI",

    SPC_TITLE:                "مراقبة العملية الإحصائية",
    SPC_P:
      "يقوم برنامج SPC لدينا بتقييم المعايير الرئيسية شهريًا أو لكل طلب:",
    SPC_ITEM_VISUAL:
      "الفحص البصري: قطر نهاية الأنبوب، سمك الجدار، الاستقامة، الزاوية القائمة، ارتفاع اللحام (الداخلي/الخارجي)",
    SPC_ITEM_LAB:
      "اختبارات المختبر: اختبار شاربي للصدمات، اختبار الشد، واختبارات مخصصة أخرى"
  },

  ko: {
    QUALITY_PAGE_TITLE:       "품질 및 인증 | 세아스틸 UAE LLC",
    HERO_TITLE:               "품질 및 인증",
    HERO_SUBTEXT:             "글로벌 기준. 지역 보증.",

    COMMIT_TITLE:             "품질에 대한 우리의 약속",
    COMMIT_P:
      "세아스틸 UAE LLC에서는 품질이 단순한 약속이 아니라 우리의 프로세스입니다. 우리는 ISO, API, CE, DNV 등 국제 표준을 엄격하게 준수합니다. 또한, 당사의 팀은 파이프 생산의 모든 단계에서 탁월함을 보장하도록 훈련되어 있습니다.",

    CERT_TITLE:               "인증",
    CERT_ITEM_ISO9001:
      "✔ ISO 9001 – 품질 경영 시스템 (장축 용접 강관 제조)",
    CERT_ITEM_ISO14001:       "✔ ISO 14001 – 환경 경영 시스템",
    CERT_ITEM_ISO45001:       "✔ ISO 45001:2018 – 보건 및 안전 경영 시스템",
    CERT_ITEM_ISO17025:       "✔ ISO/IEC 17025:2017 – 실험실 인정 인증서",
    CERT_ITEM_APIQ1:          "✔ API Q1 – 파이프 제조 품질 경영",
    CERT_ITEM_API5L:          "✔ API 5L – 송유관 규격",
    CERT_ITEM_API2B:          "✔ API 2B – 구조용 파이프 규격",
    CERT_ITEM_CE1090:         "✔ CE 마킹 – 규정 305/2011/EU (탄소강 파이프)",
    CERT_ITEM_DNV:            "✔ DNV – 제조업체 승인",
    DOWNLOAD_BUTTON:          "인증서 다운로드",

    NDT_TITLE:                "비파괴 검사(NDT) 및 시험 능력",
    NDT_P:
      "파이프의 무결성과 고객 신뢰를 보장하기 위해 첨단 비파괴 검사 기술을 사용합니다:",
    NDT_ITEM_UT:              "✔ 초음파 검사 (UT)",
    NDT_ITEM_RT:              "✔ 방사선 검사 (RT)",
    NDT_ITEM_MT:              "✔ 자분 탐상 검사 (MT)",
    NDT_ITEM_PT:              "✔ 침투 탐상 검사 (PT)",
    NDT_ITEM_HYDRO:           "✔ 수압 검사",

    INSPECT_TITLE:            "검사 장비",
    INSPECT_P:
      "다음과 같은 고급 검사 장비를 운영합니다:",
    INSPECT_ITEM_AUTO_UT:      "✔ 자동 UT 장비",
    INSPECT_ITEM_XRAY:         "✔ RT용 X선 실험실",
    INSPECT_ITEM_GAUGES:       "✔ 파이프 원형 측정 게이지",
    INSPECT_ITEM_THICK:        "✔ 디지털 벽 두께 측정",

    QM_TITLE:                 "품질 관리",
    QM_P1:
      "세아스틸 UAE의 품질 약속은 원자재 조달 전략에서 시작됩니다. 주요 제조 재료인 강판은 기존 공급 계약에 따라 안정적으로 소싱됩니다. 고착재나 기타 관련 파이프 같은 보조 자재도 업계 최고 업체에서 조달됩니다.",
    QM_P2:
      "모든 조달 자재는 가공 전 도착 시점에 검사를 받습니다. 이 엄격한 관리의 혜택은 2011년 이후 API 및 비API 전 세계적 생산 수율로 반영되었습니다. 장축 용접 파이프의 비용 경쟁력 및 시장 성장은 높은 생산 수율이 중요하며, 무결점 품질은 석유 및 가스 수송에 필수적입니다. 2010년 이후 세아스틸 UAE는 최소한의 고객 클레임을 기록하여 SAWL 분야에서 신뢰받는 공급업체로 자리매김했습니다.",
    QM_P3:
      "우리는 업계를 선도하는 품질 관리 기법을 사용하며, 생산 시작 전에 고객과 협력하여 제조 절차 명세서(MPS) 및 검사 & 시험 계획(ITP)을 개발합니다. 초기 시제품 테스트로 공정 매개변수를 확인한 후, 지속적인 비파괴 검사(수압, 초음파, X선) 및 파괴 검사(HIC, SSCC)를 통해 화학적·기계적 특성을 내부 실험실 장비로 평가합니다.",

    SAMPLE_TITLE:             "품질 관리 문서 샘플",
    SAMPLE_P:
      "당사의 문서 패키지에는 검사 시험 계획, 제조 절차 명세서, 자재 시험 성적서(MTC) 및 검사 보고서가 포함되어 있어 생산 전반에 걸친 일관된 추적성을 보장합니다.",
    VIEW_SAMPLES_BUTTON:      "샘플 보기",

    PIPE_TITLE:               "파이프 추적 시스템",
    PIPE_P1:
      "판재 수령부터 최종 검사 및 보관까지 실시간 ERP 연계 시스템을 사용하여 추적성이 유지됩니다. 판재 정보(열 번호, 등급, 중량, 크기)는 수령 즉시 기록되며, 불량 판재는 제거되고 각 가공된 파이프에는 고유한 ERP 생성 번호가 부여됩니다. 고객 사양에 따라 파이프 내부/외부 직경 및 길이에 대한 데이터를 네 군데 위치에 마킹합니다.",
    PIPE_P2:
      "각 제조 공정 단계에서 작업자는 파이프 번호, 날짜, 교대, 검사 결과(양호 / 불량)를 기록합니다. 불량 파이프는 재작업으로 이동한 후 재검사를 거쳐 다시 투입됩니다. 최종 검사는 파이프 길이를 업데이트하고 모든 치수 및 품질 검사를 확인합니다.",

    PQR_TITLE:                "PQR & WPS 프로세스",
    PQR_P:
      "우리는 절차 공정 자격 기록(PQR) 및 용접 절차 명세서(WPS) 워크플로우를 엄격하게 유지합니다:",
    PQR_ITEM_REVIEW:          "고객 요청 검토 및 원자재 선택",
    PQR_ITEM_PARAMS:          "용접 매개변수 설정 및 소모품 선택",
    PQR_ITEM_PREPARE:         "시편 준비 및 용접 (GMAW / SAW)",
    PQR_ITEM_REPORTS:         "인증된 실험실에서 기계적 시험 보고서 발표",
    PQR_ITEM_PQ:              "TPI 입회 요청 및 생산 자격(PQ) 시험 수행",
    PQR_ITEM_VERIFY:          "TPI 피드백에 따라 시편 및 용접 상태 확인 및 승인",

    SPC_TITLE:                "통계적 공정 관리",
    SPC_P:
      "우리의 SPC 프로그램은 월간 또는 주문별로 주요 매개변수를 평가합니다:",
    SPC_ITEM_VISUAL:
      "육안 검사: 파이프 끝 직경, 벽 두께, 직진도, 각도, 비드 높이(내부/외부)",
    SPC_ITEM_LAB:
      "실험실 시험: 샤르피 충격시험, 인장시험 및 기타 고객 지정 시험"
  }
};

// Swap out any element with data-i18n-quality="KEY"
function setQualityLanguage(langCode) {
  document.querySelectorAll("[data-i18n-quality]").forEach((el) => {
    const key = el.getAttribute("data-i18n-quality");
    const translated = qualityTranslations[langCode][key];
    if (translated !== undefined) {
      el.innerText = translated;
    }
  });

  // Also update <title> if annotated
  document.querySelectorAll("title[data-i18n-quality]").forEach((el) => {
    const key = el.getAttribute("data-i18n-quality");
    const translated = qualityTranslations[langCode][key];
    if (translated !== undefined) {
      el.innerText = translated;
    }
  });
}

// Expose globally so common-i18n.js can call it on language switch
window.setPageLanguage = setQualityLanguage;

// On DOMContentLoaded, default Quality page content to English
document.addEventListener("DOMContentLoaded", () => {
  setQualityLanguage("en");
});
