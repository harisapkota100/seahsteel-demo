// ================= js/ceo-i18n.js =================

// 1) Page-specific translations for CEO Message
const ceoTranslations = {
  en: {
    CEO_PAGE_TITLE:       "CEO Message | SeAH Steel UAE LLC",
    HERO_TITLE:           "Message From CEO",
    HERO_NAME:            "Mr. Bong Yong Kong",
    HERO_POSITION:        "Chief Executive Officer, SeAH Steel UAE LLC",

    CEO_P1:
      "Since the establishment of SeAH Steel UAE LLC in 2011, we have continuously strived to be more than just a manufacturer—we have worked with steadfast determination to become a name synonymous with trust, innovation, resilience, and excellence in the global steel industry. Situated in Ras Al Khaimah, United Arab Emirates, our presence in the Middle East marks an important chapter in the broader legacy of SeAH Steel Corp., a distinguished pioneer in steel production with a global reputation built over more than six decades.",

    CEO_P2:
      "Rooted in this proud heritage, our company has become a vital force in the region’s industrial development. Leveraging advanced South Korean technologies, industry-leading quality systems, and a team of passionate experts, SeAH Steel UAE LLC has been at the forefront of supplying premium welded pipe solutions for energy, construction, water transmission, and infrastructure development. We have contributed to some of the most critical and challenging projects across the UAE and beyond — delivering not just steel products, but confidence, durability, and long-term reliability.",

    CEO_P3:
      "Our mission goes beyond output and efficiency. We believe that every product we manufacture is part of a larger purpose — a purpose to connect continents, empower economies, and support the dreams of those who build the future. Every steel plate we shape, every pipe we weld, and every shipment we dispatch represents our devotion to craftsmanship and our belief in the power of quality to transform industries.",

    CEO_P4:
      "At the heart of our operations lies a deeply held commitment to our core values — quality, safety, integrity, and sustainability. In a world that demands continuous adaptation, we have embedded a culture of relentless improvement. From sourcing to inspection, from technology integration to environmental responsibility, we ensure that each process aligns with international standards and the evolving needs of our clients. We are especially proud of our capabilities in non-destructive testing (NDT) and precision-based inspection systems — assuring that every product leaving our facility meets the highest global benchmarks.",

    CEO_P5:
      "Moreover, our journey has been enriched by the diverse people who contribute to our shared success. I want to take this opportunity to express my heartfelt gratitude to our loyal clients for placing their trust in us, to our partners and stakeholders for their continued collaboration, and most importantly, to our team — a group of talented, hardworking individuals whose dedication forms the foundation of everything we achieve. Your efforts drive our ambition forward every single day.",

    CEO_P6:
      "As we step into the future, we recognize that the world around us is changing rapidly. Industrial expectations are shifting, sustainability is becoming non-negotiable, and technological disruption is redefining what is possible. At SeAH Steel UAE LLC, we welcome this evolution. We are actively investing in new capabilities, embracing smarter and cleaner manufacturing practices, and strengthening our digital infrastructure to ensure we remain competitive, responsible, and future-ready.",

    CEO_P7:
      "We envision a company that not only leads but uplifts — that not only manufactures but inspires. We seek to be a model of excellence in the steel industry, a trusted partner to governments and enterprises, and a responsible corporate citizen that contributes to the prosperity of the UAE and the broader region.",

    CEO_P8:
      "In closing, I reaffirm our promise to uphold the highest standards in everything we do. With clear vision, strong leadership, and a shared commitment to progress, SeAH Steel UAE LLC will continue to evolve, adapt, and lead — not only as a manufacturer of steel but as a builder of trust, opportunity, and lasting impact.",

    CEO_P9:
      "Thank you for being an integral part of our journey. We look forward to achieving greater heights — together.",

    CEO_SIGNOFF:          "– Mr. Bong Yong Kong"
  },

  ar: {
    CEO_PAGE_TITLE:       "رسالة المدير التنفيذي | سي إيه إتش ستيل الإمارات ش.ذ.م.م",
    HERO_TITLE:           "رسالة من المدير التنفيذي",
    HERO_NAME:            "السيد بونغ يونغ كونغ",
    HERO_POSITION:        "الرئيس التنفيذي، سي إيه إتش ستيل الإمارات ش.ذ.م.م",

    CEO_P1:
      "منذ تأسيس شركة سي إيه إتش ستيل الإمارات ش.ذ.م.م في عام 2011، سعينا باستمرار لأن نكون أكثر من مجرد مصنع — عملنا بعزيمة ثابتة لنصبح اسمًا مرادفًا للثقة والابتكار والمرونة والتميز في صناعة الصلب العالمية. تقع منشأتنا في رأس الخيمة، الإمارات العربية المتحدة، وتشكل حضورًا مهمًا في الشرق الأوسط في إطار إرث أكبر لشركة سي إيه إتش ستيل كورب، الرائد المتميز في إنتاج الصلب والذي بنى سمعته العالمية على مدى أكثر من ستة عقود.",

    CEO_P2:
      "متجذرةً في هذا الإرث الفخور، أصبحت شركتنا قوة حيوية في التنمية الصناعية في المنطقة. بالاستفادة من تقنيات كوريا الجنوبية المتقدمة وأنظمة الجودة الرائدة وفريق من الخبراء الشغوفين، كانت شركة سي إيه إتش ستيل الإمارات ش.ذ.م.م في طليعة توفير حلول أنابيب ملحومة عالية الجودة لقطاعات الطاقة والبناء ونقل المياه وتطوير البنية التحتية. لقد ساهمنا في بعض أكثر المشاريع أهمية وتحديًا في الإمارات وخارجها — مقدمين ليس فقط منتجات صلب، بل الثقة والمتانة والموثوقية طويلة الأمد.",

    CEO_P3:
      "تتعدى مهمتنا الإنتاج والكفاءة. نحن نؤمن أن كل منتج نصنعه هو جزء من غاية أكبر — غاية لربط القارات وتمكين الاقتصاديات ودعم أحلام الذين يبنون المستقبل. كل لوحة صلب نشكلها، وكل أنبوب نلحم، وكل شحنة نرسلها تمثل تفانينا في الحرفية وإيماننا بقوة الجودة في تحويل الصناعات.",

    CEO_P4:
      "في صميم عملياتنا يكمن التزام راسخ بقيمنا الأساسية — الجودة والسلامة والنزاهة والاستدامة. في عالم يتطلب التكيّف المستمر، زرعنا ثقافة التحسين المستمر. من التوريد إلى التفتيش، ومن دمج التكنولوجيا إلى المسؤولية البيئية، نضمن توافق كل عملية مع المعايير الدولية واحتياجات عملائنا المتغيرة. نحن فخورون بشكل خاص بإمكاناتنا في الاختبارات غير الهدامة (NDT) وأنظمة التفتيش عالية الدقة — مما يضمن أن كل منتج يغادر منشأتنا يفي بأعلى المعايير العالمية.",

    CEO_P5:
      "علاوةً على ذلك، أغنت رحلتنا الأشخاص المتنوعون الذين يساهمون في نجاحنا المشترك. أود أن أغتنم هذه الفرصة لأعبر عن امتناني العميق لعملائنا المخلصين الذين وضعوا ثقتهم فينا، ولشركائنا وأصحاب المصلحة على تعاونهم المستمر، والأهم من ذلك، لفريقنا — مجموعة من الأفراد الموهوبين الذين يعملون بجد والذين يشكل تفانيهم أساس كل ما نحققه. جهودكم تدفع طموحنا إلى الأمام كل يوم.",

    CEO_P6:
      "بينما نخطو قدمًا نحو المستقبل، ندرك أن العالم من حولنا يتغير بسرعة. تتغير التوقعات الصناعية، وأصبحت الاستدامة أمراً لا يقبل النقاش، وإعادة تعريف التكنولوجيا لما هو ممكن. في شركة سي إيه إتش ستيل الإمارات ش.ذ.م.م، نرحب بهذا التطور. نحن نستثمر بنشاط في قدرات جديدة، ونعتمد ممارسات تصنيع أكثر ذكاءً ونظافةً، ونعزز بنيتنا التحتية الرقمية لضمان أننا نظل منافسين ومسؤولين ومستعدين للمستقبل.",

    CEO_P7:
      "نحن نتخيل شركة لا تقود فحسب، بل ترفع أيضًا — لا تصنع فحسب، بل تلهم. نسعى لأن نكون نموذجًا للتميز في صناعة الصلب، وشريكًا موثوقًا للحكومات والمؤسسات، ومواطنًا مؤسسيًا مسؤولًا يساهم في ازدهار الإمارات والمنطقة بأسرها.",

    CEO_P8:
      "في الختام، أجدد وعدنا بالتزام أعلى المعايير في كل ما نقوم به. برؤية واضحة وقيادة قوية والتزام مشترك بالتقدم، ستواصل سي إيه إتش ستيل الإمارات ش.ذ.م.م التطور والتكيّف والريادة — ليس فقط كصانع للصلب ولكن كصانع للثقة والفرص والأثر الدائم.",

    CEO_P9:
      "شكرًا لك على كونك جزءًا لا يتجزأ من رحلتنا. نتطلع إلى تحقيق إنجازات أكبر — معًا.",

    CEO_SIGNOFF:          "– السيد بونغ يونغ كونغ"
  },

  ko: {
    CEO_PAGE_TITLE:       "CEO 메시지 | 세아스틸 UAE LLC",
    HERO_TITLE:           "CEO 메시지",
    HERO_NAME:            "봉용콩 사장님",
    HERO_POSITION:        "세아스틸 UAE LLC 최고경영자",

    CEO_P1:
      "2011년 세아스틸 UAE LLC 설립 이후, 우리는 단순한 제조업체를 넘어 신뢰, 혁신, 회복력, 그리고 글로벌 철강 산업에서의 우수성을 상징하는 이름이 되기 위해 꾸준히 노력해왔습니다. 아랍에미리트 라스 알 카이마에 위치한 우리 회사는 중동 지역에서 중요한 역할을 수행하며, 60년이 넘는 역사를 자랑하는 세아스틸 코퍼레이션의 명성을 이어가고 있습니다.",

    CEO_P2:
      "이 자랑스러운 유산을 바탕으로, 우리 회사는 지역 산업 발전의 핵심 축으로 자리매김했습니다. 첨단 한국 기술, 업계를 선도하는 품질 시스템, 그리고 열정적인 전문가 팀을 통해 세아스틸 UAE LLC는 에너지, 건설, 수송 및 인프라 개발을 위한 최고급 용접 파이프 솔루션을 제공하는 데 앞장서 왔습니다. 우리는 UAE를 비롯한 여러 지역의 중요한 프로젝트에 기여하여 단순한 철강 제품을 넘어 신뢰, 내구성 및 장기적 안정성을 제공하고 있습니다.",

    CEO_P3:
      "우리의 사명은 생산과 효율성을 넘어섭니다. 우리가 제조하는 모든 제품은 더 큰 목적의 일부이며, 그것은 대륙을 연결하고 경제를 활성화하며 미래를 건설하는 이들의 꿈을 지원하는 것입니다. 우리가 성형하는 모든 철판, 용접하는 모든 파이프, 발송하는 모든 선적은 장인 정신에 대한 우리의 헌신과 품질의 힘이 산업을 변화시킨다는 믿음을 나타냅니다.",

    CEO_P4:
      "우리 운영의 핵심에는 품질, 안전, 진실성 및 지속 가능성이라는 핵심 가치에 대한 깊은 헌신이 있습니다. 끊임없는 적응이 요구되는 세상에서 우리는 끊임없는 개선 문화를 심어 왔습니다. 조달부터 검사, 기술 통합부터 환경 책임에 이르기까지, 모든 프로세스가 국제 표준 및 변화하는 고객 요구 사항과 일치하도록 보장합니다. 비파괴 검사(NDT) 및 정밀 검사 시스템 분야에서의 역량을 특히 자랑스럽게 생각하며, 이는 우리 시설을 떠나는 모든 제품이 가장 높은 글로벌 기준을 충족함을 보장합니다.",

    CEO_P5:
      "더욱이, 우리의 여정은 공동의 성공에 기여한 다양한 사람들로 풍성해졌습니다. 이 자리를 빌려 우리에게 신뢰를 보내주신 충성스러운 고객분들, 지속적인 협력을 해주신 파트너 및 이해관계자 여러분, 그리고 무엇보다 우리의 성공의 토대를 이루는 열정 넘치고 근면한 인재들로 구성된 팀에게 진심으로 감사의 인사를 전하고 싶습니다. 여러분의 노력은 매일 우리의 야망을 앞으로 나아가게 합니다.",

    CEO_P6:
      "우리가 미래로 나아가며, 주변 세상이 빠르게 변하고 있음을 인식합니다. 산업의 기대치가 변화하고, 지속 가능성이 필수 요소가 되고 있으며, 기술 혁신이 가능한 것의 경계를 재정의하고 있습니다. 세아스틸 UAE LLC는 이러한 변화를 환영합니다. 우리는 새로운 역량에 적극 투자하고, 더 스마트하고 친환경적인 제조 관행을 수용하며, 경쟁력 있고 책임감 있으며 미래에 대비할 수 있도록 디지털 인프라를 강화하고 있습니다.",

    CEO_P7:
      "우리는 단지 선도하는 것뿐 아니라 향상시키는 회사가 되기를 꿈꿉니다 — 단순히 제조하는 것이 아니라 영감을 주는 회사가 되기를 바랍니다. 우리는 철강 산업에서 우수성의 본보기가 되고, 정부 및 기업의 신뢰할 수 있는 파트너가 되며, UAE와 더 넓은 지역의 번영에 기여하는 책임 있는 기업 시민이 되기를 목표로 합니다.",

    CEO_P8:
      "마지막으로, 우리가 하는 모든 일에서 최고 수준의 기준을 유지하겠다는 약속을 다시 한 번 확인합니다. 명확한 비전, 강력한 리더십, 그리고 진보에 대한 공동의 헌신으로 세아스틸 UAE LLC는 단순한 철강 제조업체가 아니라 신뢰, 기회 및 지속적인 영향력을 창출하는 회사로서 계속 진화하고 적응하며 선도해 나갈 것입니다.",

    CEO_P9:
      "우리의 여정에 함께해 주셔서 감사합니다. 함께 더 높은 성과를 이루기를 기대합니다.",

    CEO_SIGNOFF:          "– 봉용콩 사장님"
  }
};

// 2) Swap out any element with data-i18n-ceo="KEY"
function setCeoLanguage(langCode) {
  document.querySelectorAll("[data-i18n-ceo]").forEach((el) => {
    const key = el.getAttribute("data-i18n-ceo");
    const translated = ceoTranslations[langCode][key];
    if (translated !== undefined) {
      el.innerText = translated;
    }
  });
}

// 3) Expose globally so common-i18n.js can call it when language‐switch occurs
window.setPageLanguage = setCeoLanguage;

// 4) On page load, default all CEO‐specific content to English
document.addEventListener("DOMContentLoaded", () => {
  setCeoLanguage("en");
});
