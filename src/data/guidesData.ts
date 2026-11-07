export interface GuideItem {
  id: string;
  category: string;
  categoryEn?: string;
  badge: string;
  badgeEn?: string;
  date: string;
  dateEn?: string;
  refCode: string;
  pagesCount: string;
  pagesCountEn?: string;
  fileSize: string;
  fileSizeEn?: string;
  title: string;
  titleEn?: string;
  desc: string;
  descEn?: string;

  // حقول التوافق مع GuidesSection و KnowledgeLibrary
  subType?: string;
  subTypeEn?: string;
  excerpt?: string;
  excerptEn?: string;
  tagOrDate?: string;
  tagOrDateEn?: string;

  executiveSummary: string;
  executiveSummaryEn?: string;
  image: string;
  downloadUrl: string;
  pillars: {
    title: string;
    desc: string;
    titleEn?: string;
    descEn?: string;
  }[];
  targetAudience: string[];
  targetAudienceEn?: string[];
  sampleOutputs: {
    title: string;
    desc: string;
    format: string;
    titleEn?: string;
    descEn?: string;
    formatEn?: string;
  }[];
}

export const GUIDES_DATA: GuideItem[] = [
  {
    id: "alliances-matrix",
    category: "guides",
    categoryEn: "Toolkits",
    badge: "دليل إجرائي معتمد",
    badgeEn: "Certified Procedural Guide",
    subType: "دليل إجرائي",
    subTypeEn: "Procedural Guide",
    date: "18 يناير 2024",
    dateEn: "January 18, 2024",
    tagOrDate: "18 يناير 2024",
    tagOrDateEn: "Jan 18, 2024",
    refCode: "REF: GDE-2024-01",
    pagesCount: "38 صفحة",
    pagesCountEn: "38 Pages",
    fileSize: "PDF • 4.2 MB",
    fileSizeEn: "PDF • 4.2 MB",
    title: "مصفوفة بناء التحالفات وتحديد الأولويات التنموية",
    titleEn: "Building Coalitions & Setting Developmental Priorities Matrix",
    desc: "منهجية مفصلة لتوزيع الأدوار وتحديد نقاط التقاطع بين الفاعلين المحليين لضمان استدامة المشاريع وتفادي تضارب المسؤوليات.",
    descEn: "A comprehensive methodology for distributing roles and defining synergy points among local actors to ensure project sustainability.",
    excerpt: "منهجية مفصلة لتوزيع الأدوار وتحديد نقاط التقاطع بين الفاعلين المحليين لضمان استدامة المشاريع وتفادي تضارب المسؤوليات.",
    excerptEn: "A comprehensive methodology for distributing roles and defining synergy points among local actors to ensure project sustainability.",
    executiveSummary:
      "يقدّم هذا الدليل إطاراً إجرائياً متكاملاً لمنظمات المجتمع المدني والهيئات التنموية لتأسيس تحالفات مجتمعية فعالة. يركز الدليل على تقييم موازين القوى والأثر، وتحديد الشركاء الاستراتيجيين، وبناء مصفوفات المسؤوليات (RACI) القابلة للتطبيق في الميدان لضمان تكامل الجهود وتفادي الازدواجية.",
    executiveSummaryEn:
      "This guide provides an integrated operational framework for civil society organizations and development agencies to build impactful coalitions. It focuses on power-influence mapping, strategic partner selection, and field-tested RACI assignment matrices.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85",
    downloadUrl: "#",
    pillars: [
      {
        title: "مسح الفاعلين المحليين وتحليل مصفوفة القوة والأثر",
        titleEn: "Mapping Local Actors & Power-Influence Matrix Analysis",
        desc: "تحديد الجهات المؤثرة وتصنيفها حسب درجات الاهتمام والقدرة على دعم المبادرة التنموية.",
        descEn: "Identifying key stakeholders and categorizing them by level of influence and capacity to support developmental initiatives.",
      },
      {
        title: "هندسة غرف الحوار التوافقي وصناعة المشترك العام",
        titleEn: "Facilitating Consensus Dialogues & Building Common Ground",
        desc: "معايير تصميم الجلسات التشاورية وإدارة تباين المصالح للوصول إلى وثيقة أولويات موحدة.",
        descEn: "Designing multi-stakeholder consultations and resolving divergent priorities into a unified strategic roadmap.",
      },
      {
        title: "مصفوفة RACI لتوزيع الأدوار وتفادي تضارب الصلاحيات",
        titleEn: "RACI Matrix Implementation & Clear Authority Allocation",
        desc: "توزيع دقيق لمهام المسؤول والمحاسب والمستشار والمطلع بين أعضاء التحالف التنفيذي.",
        descEn: "Precise designation of Responsible, Accountable, Consulted, and Informed roles across coalition partners.",
      },
      {
        title: "مؤشرات المتابعة وتقييم كفاءة التنسيق الميداني",
        titleEn: "Field Coordination Indicators & Monitoring Mechanisms",
        desc: "لوحة مؤشرات أداء دورية ترصد التزام الشركاء بمخرجات التحالف ونسب الإنجاز المشترك.",
        descEn: "Periodic KPI dashboards monitoring partner adherence to agreed milestones and collaborative delivery metrics.",
      },
    ],
    targetAudience: [
      "منظمات المجتمع المدني والمبادرات الأهلية",
      "مدراء المشاريع والبرامج التنموية المشتركة",
      "المجالس المحلية والهيئات البلدية والتنموية",
      "الجهات المانحة والشركاء الدوليين",
    ],
    targetAudienceEn: [
      "Civil Society Organizations & Community Coalitions",
      "Development Program & Project Managers",
      "Municipal Councils & Local Governance Bodies",
      "International Donor Agencies & Strategic Partners",
    ],
    sampleOutputs: [
      {
        title: "جدول مصفوفة RACI الميدانية المعتمدة",
        titleEn: "Standardized Field RACI Matrix Template",
        desc: "نموذج إجرائي جاهز لتحديد الصلاحيات والمسؤوليات التشغيلية.",
        descEn: "Ready-to-deploy operational template for defining governance and delivery mandates.",
        format: "XLSX / PDF",
        formatEn: "XLSX / PDF",
      },
      {
        title: "ميثاق التفاهم والعمل المشترك بين التحالفات",
        titleEn: "Coalition Memorandum of Strategic Understanding (MoU)",
        desc: "صيغة قانونية وتنظيمية تؤطر العلاقات والالتزامات المتبادلة.",
        descEn: "Legal and governance charter framing mutual institutional commitments.",
        format: "DOCX / PDF",
        formatEn: "DOCX / PDF",
      },
      {
        title: "بطاقة رصد وتوثيق مخاطر التنسيق التنموي",
        titleEn: "Development Coordination Risk Assessment Log",
        desc: "أداة تقييم وقائي لمعالجة الخلافات الميدانية مبكراً.",
        descEn: "Preventive evaluation scorecard to de-escalate field frictions proactively.",
        format: "PDF موثق",
        formatEn: "Verified PDF",
      },
    ],
  },
  {
    id: "advocacy-documents",
    category: "guides",
    categoryEn: "Toolkits",
    badge: "دليل إجرائي معتمد",
    badgeEn: "Certified Procedural Guide",
    subType: "دليل إجرائي",
    subTypeEn: "Procedural Guide",
    date: "22 مارس 2024",
    dateEn: "March 22, 2024",
    tagOrDate: "22 مارس 2024",
    tagOrDateEn: "Mar 22, 2024",
    refCode: "REF: GDE-2024-02",
    pagesCount: "44 صفحة",
    pagesCountEn: "44 Pages",
    fileSize: "PDF • 3.9 MB",
    fileSizeEn: "PDF • 3.9 MB",
    title: "إعداد وثائق كسب التأييد والمناصرة الموجهة لصناع القرار",
    titleEn: "Drafting Evidence-Based Advocacy Briefs for Policymakers",
    desc: "قواعد صياغة المذكرات التوجيهية وتوثيق المطالب المجتمعية بلغة رسمية وموضوعية قادرة على إحداث الأثر الإيجابي لدى القيادات.",
    descEn: "Principles of formulating policy briefs and translating grassroots needs into authoritative language that moves leadership to action.",
    excerpt: "قواعد صياغة المذكرات التوجيهية وتوثيق المطالب المجتمعية بلغة رسمية وموضوعية قادرة على إحداث الأثر الإيجابي لدى القيادات.",
    excerptEn: "Principles of formulating policy briefs and translating grassroots needs into authoritative language that moves leadership to action.",
    executiveSummary:
      "يرشد هذا الدليل الفرق الميدانية وقادة الحملات إلى كيفية ترجمة الاحتياجات الشعبية والمجتمعية إلى مذكرات سياساتية ورسائل مناصرة احترافية تخاطب عقلية صانع القرار بالحقائق والأدلة، وتحدد مسارات التدخل التشريعي والتنفيذي الواقعية.",
    executiveSummaryEn:
      "This toolkit equips grassroots advocates and campaign directors with the methodologies needed to draft persuasive policy memos that address executive decision-makers with evidence, precise data, and viable legislative remedies.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=85",
    downloadUrl: "#",
    pillars: [
      {
        title: "بناء الحجج المنطقية وتوظيف البيانات الإحصائية",
        titleEn: "Building Logical Arguments & Leveraging Statistical Data",
        desc: "صياغة المطالب استناداً إلى أرقام ودراسات ميدانية موثقة تعزز موثوقية الطرح.",
        descEn: "Formulating proposals backed by empirical field studies to establish credibility with legislative committees.",
      },
      {
        title: "صياغة المذكرات السياساتية والتوجيهية المختصرة",
        titleEn: "Structuring Concise Executive Policy Briefs (1-Page Memos)",
        desc: "هيكلة الوثائق وفق النماذج التنفيذية المعيارية القابلة للقراءة السريعة لدى المسؤولين.",
        descEn: "Formatting policy briefs for rapid comprehension by executive leaders and ministerial advisors.",
      },
      {
        title: "تحديد قنوات التأثير المباشر ونوافذ اتخاذ القرار",
        titleEn: "Identifying Policy Windows & Direct Influence Pathways",
        desc: "معرفة التوقيت التشريعي المناسب والجهات ذات الولاية العامة لتقديم المطالب.",
        descEn: "Pinpointing legislative calendar timings and jurisdictional authorities to submit actionable proposals.",
      },
      {
        title: "قياس الاستجابة السياساتية وإدارة ردود الفعل الرسمية",
        titleEn: "Monitoring Policy Responsiveness & Public Commitments",
        desc: "آليات المتابعة الحثيثة للمذكرات المرفوعة وتوثيق التعهدات الحكومية.",
        descEn: "Rigorous follow-up mechanisms tracking institutional responses and ministerial pledges.",
      },
    ],
    targetAudience: [
      "فرق كسب التأييد والمناصرة في المنظمات الحقوقية والتنموية",
      "الناشطون في المبادرات والتحالفات المجتمعية",
      "الباحثون ومعدّو أوراق السياسات والمذكرات الرسمية",
      "مسؤولو الاتصال الاستراتيجي والإعلام التنموي",
    ],
    targetAudienceEn: [
      "Advocacy Teams in Human Rights & Civic Organizations",
      "Grassroots Campaign Organizers & Community Leaders",
      "Policy Analysts & Legislative Brief Writers",
      "Strategic Communications & Civic Media Directors",
    ],
    sampleOutputs: [
      {
        title: "نموذج المذكرة السياساتية من صفحة واحدة (Policy Brief)",
        titleEn: "Standard One-Page Executive Policy Brief Template",
        desc: "قالب معتمد لعرض المشكلة والحلول المقترحة بإيجاز تنفيذي.",
        descEn: "Certified executive template outlining problems, empirical evidence, and actionable reforms.",
        format: "DOCX / PDF",
        formatEn: "DOCX / PDF",
      },
      {
        title: "مصفوفة رسائل المناصرة الموجهة لمختلف القيادات",
        titleEn: "Targeted Stakeholder Messaging Matrix",
        desc: "جدول لتخصيص نبرة الخطاب بحسب خلفية الجهة المستهدفة.",
        descEn: "Structured messaging grid tailoring tone and arguments to diverse political actors.",
        format: "XLSX / PDF",
        formatEn: "XLSX / PDF",
      },
      {
        title: "استمارة متابعة التعهدات والقرارات الصادرة",
        titleEn: "Policy Commitment & Legislative Progress Tracker",
        desc: "أداة لتقييم مدى التزام صناع القرار بما تم الاتفاق عليه.",
        descEn: "Verification scorecard measuring official implementation against stated pledges.",
        format: "PDF موثق",
        formatEn: "Verified PDF",
      },
    ],
  },
  {
    id: "risk-management",
    category: "guides",
    categoryEn: "Toolkits",
    badge: "دليل إجرائي معتمد",
    badgeEn: "Certified Procedural Guide",
    subType: "دليل إجرائي",
    subTypeEn: "Procedural Guide",
    date: "04 فبراير 2024",
    dateEn: "February 04, 2024",
    tagOrDate: "04 فبراير 2024",
    tagOrDateEn: "Feb 04, 2024",
    refCode: "REF: GDE-2024-03",
    pagesCount: "52 صفحة",
    pagesCountEn: "52 Pages",
    fileSize: "PDF • 5.1 MB",
    fileSizeEn: "PDF • 5.1 MB",
    title: "دليل إدارة المخاطر وتطوير خطط الطوارئ للبرامج الميدانية",
    titleEn: "Field Risk Management & Emergency Contingency Planning Manual",
    desc: "أدوات عملية لتوقع الاضطرابات التشغيلية والسياساتية في الميدان وتجهيز سيناريوهات بديلة تحافظ على سير العمل المؤسسي.",
    descEn: "Actionable frameworks to anticipate operational and political disruptions in field programs and build robust institutional contingencies.",
    excerpt: "أدوات عملية لتوقع الاضطرابات التشغيلية والسياساتية في الميدان وتجهيز سيناريوهات بديلة تحافظ على سير العمل المؤسسي.",
    excerptEn: "Actionable frameworks to anticipate operational and political disruptions in field programs and build robust institutional contingencies.",
    executiveSummary:
      "يوفر هذا الدليل منهجية شاملة لإدارة عدم اليقين والمخاطر الميدانية التي تواجه المشاريع التنموية المعقدة. يتضمن مصفوفات تصنيف المخاطر، وخطط الاستجابة للطوارئ، وبروتوكولات السلامة الرقمية والميدانية لفرق العمل في البيئات الحساسة.",
    executiveSummaryEn:
      "This comprehensive manual establishes robust risk governance for complex field operations. It includes dynamic risk registers, continuity protocols, and data safety measures tailored to demanding civic and field environments.",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=85",
    downloadUrl: "#",
    pillars: [
      {
        title: "سجل المخاطر الميدانية والتشغيلية (Risk Register)",
        titleEn: "Comprehensive Field & Operational Risk Register",
        desc: "تحديد المخاطر المحتملة (قانونية، أمنية، مجتمعية، تمويلية) واحتمالية حدوثها وأثرها.",
        descEn: "Identifying vulnerabilities across legal, security, community, and funding domains with impact scoring.",
      },
      {
        title: "تطوير مسارات الاستجابة والسيناريوهات البديلة (Plan B)",
        titleEn: "Actionable Continuity Scenarios & Contingency Protocols (Plan B)",
        desc: "إجراءات فورية تضمن استمرارية المشروع في حال تعثر المسار الأساسي.",
        descEn: "Establishing contingency pathways ensuring uninterrupted delivery during unforeseen field halts.",
      },
      {
        title: "بروتوكول السلامة الميدانية وحماية فرق العمل والبيانات",
        titleEn: "Field Team Safety Protocols & Secure Data Governance",
        desc: "إرشادات عملية لتأمين المعلومات الحساسة والمشاركين في التدخلات الميدانية.",
        descEn: "Practical guidelines safeguarding staff well-being and securing sensitive project documentation.",
      },
      {
        title: "خطط التواصل في الأزمات وحماية السمعة المؤسسية",
        titleEn: "Crisis Communications & Institutional Reputation Management",
        desc: "إدارة الرسائل الإعلامية والميدانية عند مواجهة مواقف شائكة أو معارضة مجتمعية.",
        descEn: "Coordinating strategic communications when navigating contentious socio-political issues.",
      },
    ],
    targetAudience: [
      "مدراء المشاريع والعمليات في البيئات المعقدة",
      "مسؤولو السلامة وإدارة المخاطر في المنظمات الدولية والمحلية",
      "الفرق الميدانية ومنسقو الأنشطة في المحافظات",
      "المستشارون الاستراتيجيون ومدراء البرامج",
    ],
    targetAudienceEn: [
      "Project & Operations Directors in Demanding Environments",
      "Security & Risk Compliance Officers in International Agencies",
      "Frontline Coordinators & Community Field Teams",
      "Strategic Governance Consultants & Program Leads",
    ],
    sampleOutputs: [
      {
        title: "مصفوفة سجل المخاطر التشغيلية الديناميكية",
        titleEn: "Dynamic Operational Risk Scorecard & Matrix",
        desc: "جدول تقييم كمي ونوعي للمخاطر مع مؤشرات الإنذار المبكر.",
        descEn: "Quantitative assessment grid featuring early-warning triggers and severity ratings.",
        format: "XLSX / PDF",
        formatEn: "XLSX / PDF",
      },
      {
        title: "دليل إجراءات الطوارئ والاستجابة السريعة (SOPs)",
        titleEn: "Standard Operating Procedures (SOPs) for Crisis Response",
        desc: "خطوات واضحة خطوة بخطوة للتعامل مع أي توقف مفاجئ للنشاط.",
        descEn: "Step-by-step institutional playbook to manage sudden program interruptions.",
        format: "PDF موثق",
        formatEn: "Verified PDF",
      },
      {
        title: "بطاقة التدقيق الأمني والرقمي للمعلومات الميدانية",
        titleEn: "Digital & Information Security Verification Checklist",
        desc: "قائمة تحقق للتأكد من حماية خصوصية المستفيدين والبيانات.",
        descEn: "Compliance checklist verifying full privacy and encryption standards for beneficiaries.",
        format: "PDF معتمد",
        formatEn: "Certified PDF",
      },
    ],
  },
];

export const GUIDES_MAP: Record<string, GuideItem> = GUIDES_DATA.reduce(
  (acc, guide) => {
    acc[guide.id] = guide;
    return acc;
  },
  {} as Record<string, GuideItem>
);

export function getGuideById(id: string): GuideItem {
  return GUIDES_MAP[id] || GUIDES_DATA[0];
}

export function getAllGuideIds(): string[] {
  return GUIDES_DATA.map((g) => g.id);
}