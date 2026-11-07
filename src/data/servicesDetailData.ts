// ==========================================
// 1. Interfaces & Types
// ==========================================

export interface TargetAudienceCard {
  number: string;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
}

export interface TargetAudienceData {
  badge: string;
  badgeEn?: string;
  number: string;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  cards: TargetAudienceCard[];
}

export interface WorkStage {
  id: string;
  stageNumber: string;
  stageNumberEn?: string;
  badgeTitle: string;
  badgeTitleEn?: string;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
}

export interface DeliverableItem {
  id: string;
  badge: string;
  badgeEn?: string;
  iconType: "doc" | "message" | "table" | "chart";
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  format: string;
  formatEn?: string;
  tag: string;
  tagEn?: string;
  image: string;
  fileUrl?: string;
}

export interface RelatedExperience {
  id: string;
  field: string;
  fieldEn?: string;
  title: string;
  titleEn?: string;
  role: string;
  roleEn?: string;
  impact: string;
  impactEn?: string;
  image: string;
  imageCaption: string;
  imageCaptionEn?: string;
}

export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  titleEn?: string;
  eyebrow: string;
  eyebrowEn?: string;
  subtitle: string;
  subtitleEn?: string;
  description: string;
  descriptionEn?: string;
  mainImage: string;
  imageCaption: string;
  imageCaptionEn?: string;
  targetAudience: TargetAudienceData;
  featuredAudience?: TargetAudienceData;
  audienceCards?: TargetAudienceCard[];
  scopeOfWork: WorkStage[];
  scopeOfWorkEn?: WorkStage[];
  deliverables: DeliverableItem[];
  deliverablesEn?: DeliverableItem[];
  relatedExperience: RelatedExperience;
}

// ==========================================
// 2. Services Data
// ==========================================

export const servicesDetailData: Record<string, ServiceDetail> = {
  // -------------------------------------------------------------
  // الخدمة 1: كسب التأييد والسياسات العامة (Advocacy)
  // -------------------------------------------------------------
  advocacy: {
    id: "advocacy",
    slug: "advocacy",
    eyebrow: "الخدمة الأولى",
    eyebrowEn: "Service 01",
    title: "حملات المدافعة وبناء التحالفات والسياسات العامة",
    titleEn: "Advocacy Campaigns, Coalition Building & Public Policy",
    subtitle: "من قراءة الواقع إلى صياغة الأثر التشريعي والميداني المستدام",
    subtitleEn: "From Baseline Reality to Sustainable Legislative & Field Impact",
    description:
      "تصميم وإدارة استراتيجيات مدافعة متكاملة ترتكز على التحليل القانوني والسياساتي الرصين، وبناء التحالفات المجتمعية والمؤسسية لتحويل المطالب المشروعة إلى سياسات وقوانين نافذة.",
    descriptionEn:
      "Designing and leading comprehensive advocacy strategies grounded in rigorous legal and policy analysis, building community and institutional coalitions to translate legitimate demands into enacted legislation and enforceable policies.",
    mainImage: "/images/services/advocacy-hero.jpg",
    imageCaption:
      "المستشار عماد الفناطسة خلال جلسة نقاشية حول تعديلات تشريعية مع ممثلي منظمات المجتمع المدني",
    imageCaptionEn:
      "Advisor Emad Al-Fanatseh during a legislative amendment consultation with civil society leaders",

    targetAudience: {
      badge: "توصيف المستفيدين",
      badgeEn: "Beneficiary Profiling",
      number: "01",
      title: "لمن تناسب هذه الخدمة؟",
      titleEn: "Who Is This Service For?",
      description:
        "صُممت هذه الخدمة لتلبية الاحتياجات الدقيقة للكيانات التي تعمل في بيئات معقدة تتطلب حواراً عاماً مدروساً وتأثيراً سياساتياً ومجتمعياً متزناً، وتحتاج للانتقال من مجرد النوايا إلى خطط تنفيذية محكمة.",
      descriptionEn:
        "Engineered to address the nuanced demands of entities operating in complex landscapes that require calibrated public dialogue, balanced policy engagement, and disciplined operational plans.",
      cards: [
        {
          number: "01",
          title: "منظمات المجتمع المدني والمؤسسات غير الربحية",
          titleEn: "Civil Society & Non-Profit Organizations",
          description:
            "الساعية لتطوير مسار مبادراتها وصياغة أطر ضغط وتأثير تستند إلى البيانات الموثقة والتأطير القانوني الرصين.",
          descriptionEn:
            "Seeking to sharpen their initiative trajectories and establish evidence-based advocacy campaigns grounded in empirical data and sound legal framing.",
        },
        {
          number: "02",
          title: "التحالفات والشبكات المجتمعية",
          titleEn: "Community Coalitions & Networks",
          description:
            "الراغبة في توحيد صوتها وبناء رسائل مشتركة ومؤثرة تضمن التناغم بين الأطراف المتعددة وتمنع تضارب المواقف والجهود.",
          descriptionEn:
            "Aspiring to harmonize their collective voice, craft impactful unified messaging, and align multiple partners while preventing mandate collisions.",
        },
        {
          number: "03",
          title: "الفرق التنفيذية ومسؤولو المبادرات",
          titleEn: "Executive Delivery Teams & Campaign Leads",
          description:
            "الذين يحتاجون إلى توجيه عملي لتجاوز التشتت وتحديد الأولويات الواقعية، والتركيز على مكاسب مرحلية مدروسة وقابلة للقياس.",
          descriptionEn:
            "Requiring practical advisory to overcome operational fragmentation, map realistic priorities, and secure measurable milestone wins.",
        },
        {
          number: "04",
          title: "المبادرات المحلية والواعدة",
          titleEn: "Local & Emerging Grassroots Initiatives",
          description:
            "الباحثة عن تحويل الأفكار والتطلعات الشعبية إلى خطوات إجرائية محددة ذات أثر ميداني واقعي يتفاعل معه صناع القرار.",
          descriptionEn:
            "Aiming to translate grassroots aspirations into concrete procedural steps with measurable field impact that engages decision-makers effectively.",
        },
      ],
    },

    scopeOfWork: [
      {
        id: "stage-1",
        stageNumber: "المرحلة 01",
        stageNumberEn: "Phase 01",
        badgeTitle: "التشخيص الأولي",
        badgeTitleEn: "Initial Diagnostics",
        title: "تحليل البيئة وسياق المبادرة",
        titleEn: "Context & Stakeholder Landscape Analysis",
        description:
          "استكشاف الفاعلين، وتحديد أصحاب المصلحة والمؤثرين المباشرين وغير المباشرين، وقراءة التحديات الميدانية والفرص السياساتية المتاحة لتفادي الاصطدامات غير المحسوبة.",
        descriptionEn:
          "Mapping key actors, identifying direct and indirect influencers, and evaluating field challenges and legislative windows to prevent uncalculated frictions.",
      },
      {
        id: "stage-2",
        stageNumber: "المرحلة 02",
        stageNumberEn: "Phase 02",
        badgeTitle: "الترتيب المعياري",
        badgeTitleEn: "Priority Mapping",
        title: "تحديد الأولويات الاستراتيجية",
        titleEn: "Strategic Priority Definition",
        description:
          "فرز المطالب والأهداف الاستراتيجية، وفصل الأماني عن الإمكانات، وصياغة هدف محوري واضح وقابل للتحقيق ضمن جدول زمني محدد ومعايير نجاح متفق عليها.",
        descriptionEn:
          "Filtering demands and strategic objectives, separating aspirations from capabilities, and framing a clear, achievable core goal within defined milestones.",
      },
      {
        id: "stage-3",
        stageNumber: "المرحلة 03",
        stageNumberEn: "Phase 03",
        badgeTitle: "صياغة الحجة",
        badgeTitleEn: "Argument Formulation",
        title: "بناء مصفوفة الرسائل وأدوات الخطاب",
        titleEn: "Messaging Matrix & Discourse Toolkits",
        description:
          "صياغة الخطاب الموجه للفئات المختلفة بلغة رصينة ومحايدة، ومقنعة تتناسب مع الواقع الثقافي والمحلي، مع تحديد الحجج الداعمة والشواهد الإحصائية.",
        descriptionEn:
          "Calibrating persuasive, objective discourse tailored to diverse stakeholders and cultural contexts, supported by documented legal evidence and empirical statistics.",
      },
      {
        id: "stage-4",
        stageNumber: "المرحلة 04",
        stageNumberEn: "Phase 04",
        badgeTitle: "الهندسة الميدانية",
        badgeTitleEn: "Field Engineering",
        title: "تخطيط مسار الأنشطة والتحالفات",
        titleEn: "Activity Pathways & Coalition Structuring",
        description:
          "هندسة الأنشطة الميدانية واللقاءات التشاورية وطاولات الحوار المستديرة، وبناء التحالفات الداعمة للحملة لتوسيع الحاضنة الشعبية والمؤسسية للمطلب.",
        descriptionEn:
          "Structuring consultative roundtables and field actions, expanding grassroots and institutional coalitions backing the advocacy objective.",
      },
      {
        id: "stage-5",
        stageNumber: "المرحلة 05",
        stageNumberEn: "Phase 05",
        badgeTitle: "الضبط والتقييم",
        badgeTitleEn: "M&E Alignment",
        title: "مواءمة خطة التنفيذ والمتابعة",
        titleEn: "Operational Execution & M&E Alignment",
        description:
          "وضع آليات عملية لقياس الأداء ومؤشرات الإنجاز، مع قنوات مراجعة مستمرة لضمان التزام الفريق وتعديل مسار الحملة بمرونة عند تغيّر الظروف الميدانية.",
        descriptionEn:
          "Establishing tangible KPIs and feedback loops ensuring accountability and flexible strategic realignment as field conditions shift.",
      },
    ],

    deliverables: [
      {
        id: "deliv-1",
        badge: "ملف/دليل",
        badgeEn: "Strategic Brief",
        iconType: "doc",
        title: "وثيقة خطة العمل الاستراتيجية للمناصرة",
        titleEn: "Strategic Advocacy Action Plan",
        description:
          "ملف تحليلي وتوجيهي متكامل يحدد المحاور الرئيسية، الأهداف المرحلية، والجدول الزمني المحكم للتدخلات.",
        descriptionEn:
          "An integrated analytical and operational manual delineating key axes, milestone targets, and timed intervention schedules.",
        format: "الصيغة: وثيقة مرجعية شاملة",
        formatEn: "Format: Comprehensive Reference Manual",
        tag: "جاهز للتنفيذ المؤسسي",
        tagEn: "Institutional Delivery Ready",
        image:
          "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "deliv-2",
        badge: "رسائل",
        badgeEn: "Messaging",
        iconType: "message",
        title: "الرسائل الموجهة والخطاب العام",
        titleEn: "Targeted Stakeholder Messaging Matrix",
        description:
          "جدول تصنيفي يربط كل فئة مستهدفة بنبرة الحديث، المحفزات الإيجابية، وردود الفعل المسبقة على الاعتراضات.",
        descriptionEn:
          "A classification grid linking each stakeholder group to specific tone, positive triggers, and preemptive rebuttals.",
        format: "الصيغة: مصفوفة توجيه اتصالي",
        formatEn: "Format: Strategic Communications Matrix",
        tag: "محددات الفئات المستهدفة",
        tagEn: "Stakeholder Alignment Criteria",
        image:
          "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "deliv-3",
        badge: "جدول",
        badgeEn: "Matrix",
        iconType: "table",
        title: "جدول الأنشطة وتوزيع الأدوار التنفيذية",
        titleEn: "Activity Timeline & RACI Matrix",
        description:
          "مصفوفة مسؤوليات تنفيذية (RACI) تربط كل مهمة ميدانية بالمسؤول المباشر، الموارد المطلوبة، والمواعيد النهائية.",
        descriptionEn:
          "A field RACI matrix designating responsibilities, required resources, and firm deadlines for every operational task.",
        format: "الصيغة: جدول إجرائي زمني",
        formatEn: "Format: Operational Delivery Roadmap",
        tag: "مصفوفة مواءمة المسؤوليات",
        tagEn: "Mandate Alignment Scorecard",
        image:
          "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "deliv-4",
        badge: "مصادر",
        badgeEn: "M&E Tools",
        iconType: "chart",
        title: "أدوات تقييم الأثر والمراجعة الدورية",
        titleEn: "Impact Evaluation & M&E Toolsets",
        description:
          "استمارات قياس نوعية وكمية ونماذج تقارير مرحلية لرصد التحولات في آراء صناع القرار والجمهور المستهدف.",
        descriptionEn:
          "Quantitative and qualitative measurement rubrics tracking shifts among policymakers and public opinion.",
        format: "الصيغة: مؤشرات قياس وأدلة رصد",
        formatEn: "Format: KPI Scorecards & M&E Toolkits",
        tag: "أدوات تقييم مرحلي",
        tagEn: "Periodic Review Framework",
        image:
          "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80",
      },
    ],

    relatedExperience: {
      id: "civic-engagement",
      field: "المجال: حملات المناصرة والمبادرات المجتمعية",
      fieldEn: "Domain: Advocacy Campaigns & Civic Initiatives",
      title: "التخطيط لمبادرة لتعزيز المشاركة المجتمعية",
      titleEn: "Planning an Initiative to Enhance Civic Participation",
      role: "التخطيط الاستراتيجي، وصياغة خطة العمل، وهندسة مسارات الحوارات التشاركية والتنسيق بين الأطراف الفاعلة.",
      roleEn:
        "Strategic planning, action plan drafting, participatory dialogue facilitation, and multi-stakeholder coordination.",
      impact:
        "تصميم خطة عمل متكاملة تحدد الأولويات والرسائل والأنشطة بما يتناسب مع أهداف المبادرة وإشراك الفاعلين في المجتمع المحلي، مما أثمر عن ميثاق عمل موحد والتزام تشغيلي من كافة المؤسسات.",
      impactEn:
        "Designing an integrated action plan defining priorities, key messaging, and activities aligned with community aspirations, culminating in a ratified charter and operational commitment across partner institutions.",
      image:
        "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1000&q=80",
      imageCaption: "توثيق ميداني لأوراق العمل",
      imageCaptionEn: "Field Documentation of Action Memos",
    },
  },

  // -------------------------------------------------------------
  // الخدمة 2: التدريب وبناء القدرات (Training)
  // -------------------------------------------------------------
  training: {
    id: "training",
    slug: "training",
    eyebrow: "الخدمة الثانية",
    eyebrowEn: "Service 02",
    title: "تصميم وتنفيذ البرامج التدريبية المتخصصة",
    titleEn: "Designing & Delivering Specialized Training Programs",
    subtitle: "تدريب عملي تفاعلي يركز على المهارة التطبيقية لا المعرفة النظرية",
    subtitleEn: "Practical, interactive training focused on applied skills rather than theoretical lecture",
    description:
      "برامج تدريبية وتطويرية مصممة خصيصاً للكوادر الحقوقية والقانونية ومنظمات المجتمع المدني، تعتمد المحاكاة الميدانية وحل المشكلات الواقعية لترسيخ الكفاءة المؤسسية.",
    descriptionEn:
      "Bespoke development and training programs engineered for civic and legal cadres, employing real-world case simulations and problem-solving to institutionalize field excellence.",
    mainImage: "/images/services/training-hero.jpg",
    imageCaption:
      "المستشار عماد الفناطسة أثناء تقديم ورشة تدريبية متقدمة في قيادة حملات التغيير المجتمعي",
    imageCaptionEn:
      "Advisor Emad Al-Fanatseh delivering an advanced workshop in community change leadership",

    targetAudience: {
      badge: "توصيف المستفيدين",
      badgeEn: "Beneficiary Profiling",
      number: "01",
      title: "لمن تناسب هذه الخدمة؟",
      titleEn: "Who Is This Service For?",
      description:
        "موجهة للكوادر والفرق الساعية لتطوير كفاءاتها الميدانية والتنفيذية عبر مهارات تطبيقية قابلة للقياس المباشر.",
      descriptionEn:
        "Targeting cadres and teams striving to elevate frontline delivery competencies through immediately measurable skills.",
      cards: [
        {
          number: "01",
          title: "فرق العمل الميداني ومدراء المشاريع",
          titleEn: "Field Teams & Project Coordinators",
          description:
            "الكوادر المسؤولة عن تحويل الأفكار والمنح إلى نتائج ملموسة على أرض الواقع، وتحتاج إلى أدوات ضبط وإدارة مرنة ومحترفة.",
          descriptionEn:
            "Professionals tasked with translating concepts and grants into tangible field impact, needing flexible management toolsets.",
        },
        {
          number: "02",
          title: "المحامون والمستشارون القانونيون الجدد",
          titleEn: "Junior Lawyers & Legal Counsel",
          description:
            "المشتغلون بالقانون الراغبون في اكتساب مهارات الترافع الاستراتيجي وتوظيف الآليات الدولية والمحلية لحماية الحقوق.",
          descriptionEn:
            "Legal practitioners looking to master strategic advocacy and leverage local and international mechanisms for rights protection.",
        },
        {
          number: "03",
          title: "مسؤولو العلاقات العامة والاتصال المؤسسي",
          titleEn: "Public Relations & Communications Leads",
          description:
            "الكوادر المعنية بصياغة الخطاب العام وإدارة حملات التوعية الإعلامية الموجهة للجمهور وصناع القرار.",
          descriptionEn:
            "Cadres responsible for strategic framing, public discourse, and awareness campaigns targeted at decision-makers.",
        },
        {
          number: "04",
          title: "قادة المبادرات والنشطاء المجتمعيون",
          titleEn: "Initiative Directors & Civic Activists",
          description:
            "الفاعلون في الميدان الساعون لبناء وتسيير التحالفات وتفادي الأخطاء الإجرائية والقانونية في العمل العام.",
          descriptionEn:
            "Grassroots leaders seeking to build resilient coalitions while avoiding procedural and legal risks in public work.",
        },
      ],
    },

    scopeOfWork: [
      {
        id: "stage-1",
        stageNumber: "المرحلة 01",
        stageNumberEn: "Phase 01",
        badgeTitle: "تحديد الاحتياج",
        badgeTitleEn: "Needs Assessment",
        title: "تحليل الفجوة المهارية والمعرفية",
        titleEn: "Skills & Knowledge Gap Analysis",
        description:
          "دراسة معمقة لواقع الفرق المستهدفة لتحديد الفجوات الفعلية في المهارات والأدوات وتجنب التدريبات النمطية غير المجدية.",
        descriptionEn:
          "In-depth diagnostics of team realities to isolate actual competency gaps and avoid generic, ineffective training.",
      },
      {
        id: "stage-2",
        stageNumber: "المرحلة 02",
        stageNumberEn: "Phase 02",
        badgeTitle: "الهندسة التدريبية",
        badgeTitleEn: "Curriculum Engineering",
        title: "تصميم الحقائب والمناهج التطبيقية",
        titleEn: "Curriculum & Interactive Module Design",
        description:
          "بناء وحدات تدريبية ترتكز على دراسات الحالة الحقيقية، والتمارين الفردية والجماعية، ونماذج المحاكاة الميدانية المباشرة.",
        descriptionEn:
          "Authoring modules based on empirical case studies, individual/group drills, and hands-on simulation frameworks.",
      },
      {
        id: "stage-3",
        stageNumber: "المرحلة 03",
        stageNumberEn: "Phase 03",
        badgeTitle: "التنفيذ التفاعلي",
        badgeTitleEn: "Interactive Delivery",
        title: "إدارة الورش وحلقات العمل التشاركية",
        titleEn: "Participatory Workshop Facilitation",
        description:
          "تقديم تجربة تدريبية قائمة على النقاش النقدي وتوليد الحلول المشتركة بدلاً من التلقين، في بيئة آمنة ومحفزة للتعلم.",
        descriptionEn:
          "Delivering an experiential learning environment centered on critical inquiry, active dialogue, and co-creating solutions.",
      },
      {
        id: "stage-4",
        stageNumber: "المرحلة 04",
        stageNumberEn: "Phase 04",
        badgeTitle: "الاختبار العملي",
        badgeTitleEn: "Practical Testing",
        title: "تقييم المخرجات والمشاريع التطبيقية",
        titleEn: "Applied Project & Output Evaluation",
        description:
          "إلزام المشاركين بصياغة خطط وتدخلات واقعية ومراجعتها خطوة بخطوة وتقديم التغذية الراجعة الفورية لتحسينها.",
        descriptionEn:
          "Guiding participants to draft realistic institutional intervention plans with step-by-step coaching and immediate feedback.",
      },
      {
        id: "stage-5",
        stageNumber: "المرحلة 05",
        stageNumberEn: "Phase 05",
        badgeTitle: "الأثر والتمكين",
        badgeTitleEn: "Impact & Sustainability",
        title: "المتابعة اللاحقة وقياس استدامة المهارة",
        titleEn: "Follow-Up Mentoring & Skill Institutionalization",
        description:
          "توفير جلسات توجيه فردية وجماعية لاحقة لضمان نقل ما تم تعلمه إلى الممارسة اليومية للمؤسسة واستدامة الأثر.",
        descriptionEn:
          "Providing post-training coaching sessions to embed learned competencies into organizational daily practice.",
      },
    ],

    deliverables: [
      {
        id: "deliv-1",
        badge: "حقيبة تدريبية",
        badgeEn: "Training Package",
        iconType: "doc",
        title: "الحقيبة التدريبية ودليل المدرب والمتدرب",
        titleEn: "Trainer & Participant Manual Package",
        description: "مادة تدريبية متكاملة تتضمن العروض التقديمية والتمارين ودراسات الحالة التطبيقية.",
        descriptionEn: "A complete curriculum including presentations, exercise handbooks, and applied case studies.",
        format: "الصيغة: حقيبة تدريبية تفاعلية",
        formatEn: "Format: Interactive Training Toolkit",
        tag: "معتمدة للتنفيذ",
        tagEn: "Delivery Accredited",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "deliv-2",
        badge: "تقييم قبلي/بعدي",
        badgeEn: "Pre/Post Evaluation",
        iconType: "chart",
        title: "استمارات قياس الأثر وبنك الاختبارات",
        titleEn: "Competency Assessment & Pre/Post Testing Rubrics",
        description: "أدوات قياس معيارية لرصد التطور المعرفي والمهاري قبل وبعد انتهاء البرنامج.",
        descriptionEn: "Standardized evaluation scorecards tracking knowledge and skill progression before and after completion.",
        format: "الصيغة: نماذج تقييم رقمية",
        formatEn: "Format: Digital Assessment Templates",
        tag: "أدوات قياس فورية",
        tagEn: "Instant Measurement Scorecard",
        image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "deliv-3",
        badge: "خطة متابعة",
        badgeEn: "Follow-Up Plan",
        iconType: "table",
        title: "مصفوفة خطط العمل الفردية والمؤسسية",
        titleEn: "Institutional & Individual Action Plan Matrix",
        description: "مشاريع التخرج والخطط التطبيقية التي ينتجها المتدربون لتطبيقها في مؤسساتهم.",
        descriptionEn: "Capstone projects and intervention blueprints produced by trainees for immediate deployment in their organizations.",
        format: "الصيغة: خطط عمل تنفيذية",
        formatEn: "Format: Executive Action Plans",
        tag: "جاهزة للتطبيق الميداني",
        tagEn: "Field Ready",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "deliv-4",
        badge: "تقرير تدريبي",
        badgeEn: "Evaluation Report",
        iconType: "message",
        title: "التقرير الختامي الشامل والتوصيات",
        titleEn: "Comprehensive Final Report & Strategic Recommendations",
        description: "تحليل دقيق لأداء المتدربين مع توصيات مؤسسية لتطوير بيئة العمل المستقبلية.",
        descriptionEn: "Detailed participant performance analytics and institutional recommendations for workplace development.",
        format: "الصيغة: تقرير تحليلي ختامي",
        formatEn: "Format: Final Analytical Report",
        tag: "موثق ومعتمد",
        tagEn: "Certified Documentation",
        image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
      },
    ],

    relatedExperience: {
      id: "team-skills-development",
      field: "المجال: برامج القيادة وبناء قدرات المجتمع المدني",
      fieldEn: "Domain: Leadership Programs & Civic Capacity Building",
      title: "برنامج تدريبي متقدم حول الحوكمة وإدارة المبادرات",
      titleEn: "Advanced Training Program on Governance & Initiative Management",
      role: "تصميم المنهاج التدريبي التفاعلي، وإدارة ورش العمل التطبيقية، وتقييم مشاريع التخرج للمنظمات المشاركة.",
      roleEn:
        "Interactive curriculum design, workshop facilitation, and capstone project evaluation for participating organizations.",
      impact:
        "تأهيل أكثر من 45 قيادياً ميدانياً في 12 مؤسسة أهلية، واعتماد 8 مبادرات حقوقية قابلة للتنفيذ بتمويل مباشر من شركاء التنمية.",
      impactEn:
        "Qualifying 45+ frontline leaders across 12 civic institutions, resulting in 8 funded human rights initiatives.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80",
      imageCaption: "ورشة عمل تدريبية تفاعلية مع قيادات المجتمع المدني",
      imageCaptionEn: "Interactive training workshop with civil society leaders",
    },
  },

  // -------------------------------------------------------------
  // الخدمة 3: إعداد الأدلة الإجرائية (Guides)
  // -------------------------------------------------------------
  guides: {
    id: "guides",
    slug: "guides",
    eyebrow: "الخدمة الثالثة",
    eyebrowEn: "Service 03",
    title: "إعداد الأدلة الإجرائية ومنهجيات العمل المؤسسي",
    titleEn: "Authoring Procedural Manuals & Institutional Frameworks",
    subtitle: "توثيق الخبرات وتحويلها إلى أدوات تشغيلية معيارية قابلة للتطبيق",
    subtitleEn: "Documenting tacit experience and codifying it into standardized, actionable operational tools",
    description:
      "تطوير أدلة إجرائية، ومصفوفات تشغيلية، وسياسات حوكمة مكتوبة بلغة واضحة وخطوات قابلة للقياس، لحماية المؤسسات من التخبط وضمان استمرارية المعرفة.",
    descriptionEn:
      "Developing procedural handbooks, operational matrices, and governance frameworks drafted in unambiguous language with measurable workflows to safeguard institutional knowledge.",
    mainImage: "/images/services/guides-hero.jpg",
    imageCaption:
      "جلسة اعتماد دليل إجراءات المدافعة القانونية والمؤسسية بالتعاون مع فرق الخبراء الميدانيين",
    imageCaptionEn:
      "Validation session for the legal and operational advocacy manual alongside field experts",

    targetAudience: {
      badge: "توصيف المستفيدين",
      badgeEn: "Beneficiary Profiling",
      number: "01",
      title: "لمن تناسب هذه الخدمة؟",
      titleEn: "Who Is This Service For?",
      description:
        "موجهة للمنظمات والتحالفات التي تحتاج لمأسسة عملياتها وتحويل الخبرات الميدانية إلى وثائق مرجعية وتشغيلية مستدامة.",
      descriptionEn:
        "Dedicated to organizations and coalitions seeking to institutionalize operations and convert field knowledge into enduring reference manuals.",
      cards: [
        {
          number: "01",
          title: "المؤسسات في طور التوسع والنمو الهيكلي",
          titleEn: "Growing Organizations & Scaling Entities",
          description:
            "المنظمات التي راكمت تجارب ميدانية وتواجه صعوبة في مأسستها وتوحيد معايير عمل فرقها في الفروع والمشاريع المتعددة.",
          descriptionEn:
            "Institutions that have accumulated extensive field experience but face friction standardizing workflows across diverse branches.",
        },
        {
          number: "02",
          title: "التحالفات والشبكات المجتمعية المشتركة",
          titleEn: "Joint Coalitions & Multi-Actor Networks",
          description:
            "التحالفات الراغبة في دليل حوكمة ينظم اتخاذ القرار، وإدارة الموارد، وآليات التمثيل الإعلامي والرسمي.",
          descriptionEn:
            "Alliances requiring a governance charter regulating consensus decision-making, resource distribution, and official representation.",
        },
        {
          number: "03",
          title: "المنظمات المانحة والمشرفة على المشاريع",
          titleEn: "Donor Agencies & Program Oversight Bodies",
          description:
            "الجهات الراغبة في تعميم أدلة موحدة لإدارة التدخلات والأنشطة بما يضمن الامتثال القانوني والشفافية العالية.",
          descriptionEn:
            "Funders aiming to standardize intervention management to guarantee legal compliance and operational transparency.",
        },
        {
          number: "04",
          title: "المراكز الحقوقية ومكاتب العون القانوني",
          titleEn: "Legal Aid Clinics & Human Rights Centers",
          description:
            "المؤسسات الساعية لتوحيد بروتوكولات استقبال الشكاوى، وتوثيق الانتهاكات، وتقديم الاستشارات القانونية وفق أفضل الممارسات.",
          descriptionEn:
            "Organizations seeking unified intake protocols, case documentation standards, and legal advisory best practices.",
        },
      ],
    },

    scopeOfWork: [
      {
        id: "stage-1",
        stageNumber: "المرحلة 01",
        stageNumberEn: "Phase 01",
        badgeTitle: "رسم العمليات",
        badgeTitleEn: "Process Mapping",
        title: "حصر الممارسات والتجارب الميدانية",
        titleEn: "Field Practice & Workflow Auditing",
        description:
          "توثيق آليات العمل القائمة، ومقابلة المعنيين المباشرين، وتحليل نقاط القوة ومكامن الهدر أو التشتت في الإجراءات.",
        descriptionEn:
          "Documenting current operating mechanisms, interviewing frontline personnel, and identifying procedural vulnerabilities or waste.",
      },
      {
        id: "stage-2",
        stageNumber: "المرحلة 02",
        stageNumberEn: "Phase 02",
        badgeTitle: "التأطير المنهجي",
        badgeTitleEn: "Methodological Alignment",
        title: "مواءمة الإجراءات مع المعايير القانونية",
        titleEn: "Harmonizing Workflows with Legal Standards",
        description:
          "صياغة أطر تنظيمية دقيقة تتطابق مع القوانين الوطنية والمعايير الحقوقية والدولية ذات الصلة لمنع أي ثغرات تشغيلية.",
        descriptionEn:
          "Aligning procedural frameworks with national legislation and international human rights benchmarks to eliminate compliance gaps.",
      },
      {
        id: "stage-3",
        stageNumber: "المرحلة 03",
        stageNumberEn: "Phase 03",
        badgeTitle: "الصياغة التشغيلية",
        badgeTitleEn: "Operational Codification",
        title: "تبسيط وتفكيك المراحل التنفيذية",
        titleEn: "Streamlining & Codifying Procedural Steps",
        description:
          "كتابة الدليل بلغة إجرائية مباشرة تتضمن مصفوفات المسؤوليات، ونماذج التوثيق، وقوائم التحقق السريعة (Checklists).",
        descriptionEn:
          "Drafting the manual in direct, actionable language featuring responsibility matrices, documentation forms, and rapid checklists.",
      },
      {
        id: "stage-4",
        stageNumber: "المرحلة 04",
        stageNumberEn: "Phase 04",
        badgeTitle: "التحكيم التجريبي",
        badgeTitleEn: "Field Arbitration",
        title: "مراجعة الدليل مع الفرق التنفيذية",
        titleEn: "Pilot Review with Executive Delivery Teams",
        description:
          "إخضاع المسودة الأولى للتجربة الميدانية الحية وجمع الملاحظات المباشرة من الفرق لضمان واقعية وسهولة تطبيق البنود.",
        descriptionEn:
          "Testing the initial draft in live operational conditions and collecting direct user feedback to ensure practical ease of use.",
      },
      {
        id: "stage-5",
        stageNumber: "المرحلة 05",
        stageNumberEn: "Phase 05",
        badgeTitle: "الاعتماد والنشر",
        badgeTitleEn: "Adoption & Launch",
        title: "إطلاق الدليل وتدريب فرق التطبيق",
        titleEn: "Manual Rollout & Staff Training",
        description:
          "إخراج النسخة النهائية بصياغة بصرية احترافية قابلة للتداول، مع تنفيذ ورش تدريبية للموظفين لترسيخ الاعتماد المؤسسي.",
        descriptionEn:
          "Publishing the finalized edition with professional visual formatting and conducting orientation workshops to anchor adoption.",
      },
    ],

    deliverables: [
      {
        id: "deliv-1",
        badge: "دليل إجرائي",
        badgeEn: "Procedural Manual",
        iconType: "doc",
        title: "الدليل الإجرائي المطبوع والرقمي",
        titleEn: "Digital & Print-Ready Procedural Manual",
        description: "دليل عملي تفصيلي يغطي كافة المسارات التشغيلية وقوائم التحقق (Checklists).",
        descriptionEn: "An exhaustive operational handbook covering core delivery pathways, verification workflows, and checklists.",
        format: "الصيغة: وثيقة مرجعية مصممة للطباعة",
        formatEn: "Format: Publication-Ready Master Document",
        tag: "نسخة معتمدة ومحققة",
        tagEn: "Verified Official Edition",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "deliv-2",
        badge: "مصفوفات",
        badgeEn: "Matrices",
        iconType: "table",
        title: "مصفوفة النماذج والاستمارات التشغيلية",
        titleEn: "Operational Template & Form Package",
        description: "حزمة من النماذج الجاهزة للاستخدام الفوري لتوثيق العمليات والمتابعة الميدانية.",
        descriptionEn: "A turn-key bundle of standardized forms and intake sheets for immediate deployment in field documentation.",
        format: "الصيغة: قوالب عمل قابلة للتعديل",
        formatEn: "Format: Editable Operational Templates",
        tag: "جاهزة للاستخدام",
        tagEn: "Ready for Deployment",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "deliv-3",
        badge: "حوكمة",
        badgeEn: "Governance",
        iconType: "message",
        title: "وثيقة سياسات وضوابط الحوكمة",
        titleEn: "Governance Bylaws & Compliance Charter",
        description: "لوائح واضحة تحدد مسارات اتخاذ القرار ومستويات الصلاحيات والمساءلة.",
        descriptionEn: "Clear internal regulations outlining decision authorities, delegation hierarchies, and accountability structures.",
        format: "الصيغة: لائحة تنظيمية داخلية",
        formatEn: "Format: Internal Governance Charter",
        tag: "متوافقة مع القوانين",
        tagEn: "Statutory Compliant",
        image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "deliv-4",
        badge: "مخططات",
        badgeEn: "Flowcharts",
        iconType: "chart",
        title: "خرائط التدفق ومسارات العمليات (Flowcharts)",
        titleEn: "Process Workflow Maps & Visual Flowcharts",
        description: "مخططات بصرية سهلة الفهم توضح التسلسل الإجرائي لكل مرحلة بوضوح.",
        descriptionEn: "Visual diagrams simplifying complex procedural steps for rapid onboarding and training.",
        format: "الصيغة: خرائط بصرية وتوضيحية",
        formatEn: "Format: Visual System Architecture Maps",
        tag: "تسهيل الفهم والتدريب",
        tagEn: "Onboarding & Training Enablement",
        image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80",
      },
    ],

    relatedExperience: {
      id: "practical-operations-guide",
      field: "المجال: تطوير الأدوات الإجرائية والأدلة المعرفية",
      fieldEn: "Domain: Procedural Toolkits & Knowledge Codification",
      title: "الدليل الإجرائي الموحد لإدارة حملات كسب التأييد والتحالفات",
      titleEn: "Unified Procedural Manual for Advocacy Campaigns & Coalitions",
      role: "البحث والتوثيق الميداني، صياغة المنهجية التشغيلية ومصفوفات التحقق، ومواءمة البنود مع المعايير الدولية.",
      roleEn:
        "Field research, operational workflow authoring, verification matrix design, and international standard calibration.",
      impact:
        "اعتماد الدليل كمرجع رسمي لدى 22 منظمة مجتمعية وتدريب أكثر من 180 منسقاً ميدانياً على تطبيقه العملي.",
      impactEn:
        "Adopted as official handbook across 22 civic entities, with over 180 field coordinators trained on execution.",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1000&q=80",
      imageCaption: "مراجعة واعتماد مسودة الدليل الإجرائي التشغيلي",
      imageCaptionEn: "Reviewing and ratifying the operational procedural manual draft",
    },
  },

  // -------------------------------------------------------------
  // الخدمة 4: التوجيه والاستشارات (Mentoring)
  // -------------------------------------------------------------
  mentoring: {
    id: "mentoring",
    slug: "mentoring",
    eyebrow: "الخدمة الرابعة",
    eyebrowEn: "Service 04",
    title: "التوجيه المؤسسي والاستشارات القانونية والسياساتية",
    titleEn: "Institutional Mentoring, Legal & Policy Advisory",
    subtitle: "مرافقة استراتيجية لحماية المبادرات وتمكين صناع القرار",
    subtitleEn: "Strategic advisory accompaniment safeguarding initiatives and empowering decision-makers",
    description:
      "جلسات توجيه ومرافقة استشارية مستمرة لصناع القرار وقادة المؤسسات، لتشخيص المخاطر، وفك الاستعصاءات الإجرائية، واتخاذ القرارات الحساسة بثقة وثبات.",
    descriptionEn:
      "Continuous executive mentoring and advisory clinics for institutional leaders and boards to diagnose risk, navigate operational deadlocks, and execute sensitive decisions with conviction.",
    mainImage: "/images/services/mentoring-hero.jpg",
    imageCaption:
      "جلسة توجيه استراتيجي لمجلس إدارة إحدى المؤسسات الرائدة حول آليات إدارة المخاطر المؤسسية",
    imageCaptionEn:
      "Strategic advisory session with a leading organization's board on institutional risk governance",

    targetAudience: {
      badge: "توصيف المستفيدين",
      badgeEn: "Beneficiary Profiling",
      number: "01",
      title: "لمن تناسب هذه الخدمة؟",
      titleEn: "Who Is This Service For?",
      description:
        "مخصصة للقيادات ومجالس الإدارة والتحالفات التي تمر بمراحل تأسيسية أو منعطفات حساسة تتطلب استشارات قانونية وسياساتية دقيقة.",
      descriptionEn:
        "Designed for executive directors, boards, and coalition leads navigating founding phases or critical organizational junctures.",
      cards: [
        {
          number: "01",
          title: "المدراء التنفيذيون ومجالس الإدارة",
          titleEn: "Executive Directors & Board Members",
          description:
            "القيادات التي تتحمل المسؤولية القانونية والأخلاقية للمؤسسة، وتبحث عن مستشار موثوق لمراجعة التوجهات الحساسة.",
          descriptionEn:
            "Leadership bearing fiduciary and legal accountability, seeking a trusted advisor to audit high-stakes directions.",
        },
        {
          number: "02",
          title: "المؤسسات التي تواجه أزمات طارئة",
          titleEn: "Organizations Facing Emerging Crises",
          description:
            "الجهات التي تمر بنزاعات داخلية أو تدقيق إجرائي أو تحديات سياساتية تستدعي تدخلاً سريعاً ومدروساً لحماية الموقف المؤسسي.",
          descriptionEn:
            "Entities experiencing internal disputes, regulatory audits, or external turbulence requiring rapid, calibrated intervention.",
        },
        {
          number: "03",
          title: "قادة التحالفات في المنعطفات الحاسمة",
          titleEn: "Coalition Leaders at Crucial Junctures",
          description:
            "المسؤولون عن قيادة مفاوضات معقدة مع أجهزة رسمية أو جهات دولية ويحتاجون إلى مساندة في هندسة المواقف.",
          descriptionEn:
            "Officials directing complex multi-party negotiations with governmental or international agencies needing negotiation architecture.",
        },
        {
          number: "04",
          title: "المؤسسات الناشئة في طور التأسيس",
          titleEn: "Founding Initiatives & Emerging Startups",
          description:
            "المبادرات الساعية لبناء هياكل قانونية وإدارية سليمة منذ اليوم الأول لتفادي التعثر المستقبلي.",
          descriptionEn:
            "Early-stage initiatives looking to establish compliant legal and organizational foundations from day one.",
        },
      ],
    },

    scopeOfWork: [
      {
        id: "stage-1",
        stageNumber: "المرحلة 01",
        stageNumberEn: "Phase 01",
        badgeTitle: "الفحص المؤسسي",
        badgeTitleEn: "Institutional Audit",
        title: "مراجعة الهيكل والمخاطر المحتملة",
        titleEn: "Governance Structure & Risk Diagnostics",
        description:
          "فحص شامل للواقع التنظيمي والقانوني للمؤسسة والبرامج القائمة لتحديد مناطق الهشاشة ونقاط الخطر المحتملة.",
        descriptionEn:
          "Comprehensive review of statutory and operational setups across existing programs to identify vulnerability hotspots.",
      },
      {
        id: "stage-2",
        stageNumber: "المرحلة 02",
        stageNumberEn: "Phase 02",
        badgeTitle: "خارطة الحلول",
        badgeTitleEn: "Solutions Roadmap",
        title: "وضع خطة المعالجة والتحصين المباشر",
        titleEn: "Remediation & Safeguarding Strategy",
        description:
          "صياغة توصيات محددة وإجراءات وقائية عملية تحمي المؤسسة وفريق قيادتها من أي تبعات قانونية أو تعثرات تشغيلية.",
        descriptionEn:
          "Formulating concrete protective measures to insulate the institution and leadership against legal liability or disruption.",
      },
      {
        id: "stage-3",
        stageNumber: "المرحلة 03",
        stageNumberEn: "Phase 03",
        badgeTitle: "المرافقة المستمرة",
        badgeTitleEn: "Ongoing Advisory",
        title: "جلسات التوجيه الدوري والتغذية الراجعة",
        titleEn: "Periodic Executive Advisory & Feedback Clinics",
        description:
          "عقد لقاءات دورية منتظمة لمناقشة التحديات الطارئة والقرارات الاستراتيجية وتقديم النصح المستند إلى الخبرة المتراكمة.",
        descriptionEn:
          "Conducting regular advisory touchpoints to review emerging dilemmas, strategic choices, and high-impact policies.",
      },
      {
        id: "stage-4",
        stageNumber: "المرحلة 04",
        stageNumberEn: "Phase 04",
        badgeTitle: "التطوير الداخلي",
        badgeTitleEn: "Internal Structuring",
        title: "تحديث الاتفاقيات ومذكرات التفاهم",
        titleEn: "Contractual Agreements & MoU Modernization",
        description:
          "مراجعة وصياغة العقود والتحالفات وسياسات الحوكمة الداخلية لضمان توازن المصالح واستقرار علاقات العمل.",
        descriptionEn:
          "Drafting robust contracts, partner MoUs, and internal bylaws to protect institutional equities and ensure stability.",
      },
      {
        id: "stage-5",
        stageNumber: "المرحلة 05",
        stageNumberEn: "Phase 05",
        badgeTitle: "إدارة الأزمات",
        badgeTitleEn: "Crisis Intervention",
        title: "التدخل السريع والدعم التفاوضي",
        titleEn: "Rapid Crisis Response & Negotiation Support",
        description:
          "تقديم الدعم الحاسم عند نشوء أزمات مفاجئة أو نزاعات معقدة، وتوجيه مسار التفاوض للوصول إلى تسويات عادلة ومحمية.",
        descriptionEn:
          "Providing critical guidance during unexpected crises, directing negotiations toward equitable and protected resolutions.",
      },
    ],

    deliverables: [
      {
        id: "deliv-1",
        badge: "فحص قانوني",
        badgeEn: "Legal Audit",
        iconType: "doc",
        title: "تقرير تقييم المخاطر والموقف المؤسسي",
        titleEn: "Institutional Risk Assessment & Position Report",
        description: "تشخيص شامل لواقع المؤسسة القانوني والسياساتي مع تحديد مكامن الهشاشة وسبل التحصين.",
        descriptionEn: "Comprehensive diagnosis of organizational legal and policy standing with remediation roadmaps.",
        format: "الصيغة: تقرير استشاري سري",
        formatEn: "Format: Confidential Advisory Report",
        tag: "وثيقة خاصة لصناع القرار",
        tagEn: "Executive Confidential Document",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "deliv-2",
        badge: "خطة تدخل",
        badgeEn: "Intervention Plan",
        iconType: "table",
        title: "خارطة طريق إدارة الأزمات والتحول",
        titleEn: "Crisis Management & Transformation Roadmap",
        description: "مصفوفة إجراءات وقائية وتفاوضية وتوزيع دقيق للأدوار القيادية للتعامل مع السيناريوهات المعقدة.",
        descriptionEn: "A matrix of preventive and negotiation actions with clear leadership mandates for complex scenarios.",
        format: "الصيغة: مصفوفة مسارات طارئة",
        formatEn: "Format: Contingency Pathway Matrix",
        tag: "جاهزية استباقية",
        tagEn: "Proactive Readiness",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "deliv-3",
        badge: "اتفاقيات",
        badgeEn: "Agreements",
        iconType: "message",
        title: "حزمة العقود ومذكرات التفاهم المصاغة",
        titleEn: "Bespoke Contracts & MoU Agreement Package",
        description: "صياغة قانونية متوازنة تحمي مصالح المنظمة وتؤسس لشراكات مستقرة ومحمية.",
        descriptionEn: "Balanced legal drafting safeguarding organizational interests and cementing enduring partnerships.",
        format: "الصيغة: مسودات قانونية معتمدة",
        formatEn: "Format: Certified Legal Drafts",
        tag: "جاهزة للتوقيع الرسمي",
        tagEn: "Execution Ready",
        image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "deliv-4",
        badge: "سجلات توجيه",
        badgeEn: "Advisory Logs",
        iconType: "chart",
        title: "سجل التوصيات الاستراتيجية والقرارات",
        titleEn: "Strategic Recommendation & Decision Log",
        description: "توثيق شامل لمخرجات جلسات التوجيه الدوري والتوصيات المعتمدة لمتابعة التنفيذ.",
        descriptionEn: "Thorough documentation of periodic advisory clinic outcomes and approved milestones for tracking.",
        format: "الصيغة: سجل متابعة قيادي دوري",
        formatEn: "Format: Periodic Executive Log",
        tag: "متابعة مستمرة",
        tagEn: "Ongoing Tracking",
        image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80",
      },
    ],

    relatedExperience: {
      id: "professional-skills-mentoring",
      field: "المجال: الاستشارات المؤسسية وإدارة الأزمات",
      fieldEn: "Domain: Institutional Advisory & Crisis Governance",
      title: "التوجيه القانوني والاستراتيجي لإعادة هيكلة منظومة الحوكمة",
      titleEn: "Legal & Strategic Advisory for Governance Restructuring",
      role: "فحص الامتثال القانوني، وصياغة لوائح إدارة المخاطر، وتقديم الاستشارات المباشرة للمجلس التنفيذي في قرارات التحول.",
      roleEn:
        "Compliance auditing, risk management bylaw formulation, and direct advisory to the executive board during transition.",
      impact:
        "حماية المؤسسة من 4 نزاعات تعاقدية محتملة، وتحصين مسار الشراكات الدولية بمذكرات تفاهم متوازنة ومستدامة.",
      impactEn:
        "Shielded the organization from 4 potential contractual disputes and fortified international partnerships with balanced MoUs.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1000&q=80",
      imageCaption: "جلسة توجيه استراتيجي ومراجعة الحوكمة مع مجلس الإدارة",
      imageCaptionEn: "Strategic advisory and governance review session with the board of directors",
    },
  },
};

// ==========================================
// 3. Helper Functions & Compatible Exports
// ==========================================

export const SERVICES_DETAIL_DATA = servicesDetailData;

export function getServiceById(id: string): ServiceDetail | undefined {
  return servicesDetailData[id];
}

export function getAllServiceIds(): string[] {
  return Object.keys(servicesDetailData);
}

export function getAllServices(): ServiceDetail[] {
  return Object.values(servicesDetailData);
}

export default servicesDetailData;