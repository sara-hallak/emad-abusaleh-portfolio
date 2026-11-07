export interface ProjectItem {
  id: string;
  number: string;
  category: "advocacy" | "training" | "guides" | "mentoring";
  categoryLabel: string;
  categoryLabelEn?: string;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  role: string;
  roleEn?: string;
  deliverable: string;
  deliverableEn?: string;
  image: string;
  tag?: string;
  tagEn?: string;
  excerpt?: string;
  excerptEn?: string;

  // بيانات تفصيلية لصفحة المشروع المنفصلة
  client?: string;
  clientEn?: string;
  year?: string;
  yearEn?: string;
  challenge?: string;
  challengeEn?: string;
  approach?: string[];
  approachEn?: string[];
  results?: string[];
  resultsEn?: string[];

  // حقول التوافق مع بطاقات الهيرو وبيانات التوثيق المؤسسي
  targetScope?: string;
  targetScopeEn?: string;
  outputType?: string;
  outputTypeEn?: string;
  field?: string;
  fieldEn?: string;
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "civic-engagement",
    number: "01",
    category: "advocacy",
    categoryLabel: "حملات المناصرة",
    categoryLabelEn: "Advocacy Campaigns",
    title: "التخطيط لمبادرة لتعزيز المشاركة المجتمعية",
    titleEn: "Planning an Initiative to Enhance Civic Participation",
    description:
      "تصميم خطة عمل متكاملة تحدد الأولويات والرسائل والأنشطة مع تنظيم خطوات التنفيذ بما يتناسب مع أهداف المبادرة.",
    descriptionEn:
      "Designing an integrated action plan defining priorities, key messaging, and activities, structuring delivery steps aligned with initiative objectives.",
    role: "التخطيط وتطوير خطة العمل",
    roleEn: "Strategic Planning & Action Plan Development",
    deliverable: "خطة تنفيذية",
    deliverableEn: "Executive Action Plan",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1000&q=80",
    client: "ائتلاف منظمات المجتمع المدني",
    clientEn: "Civil Society Organizations Coalition",
    year: "2024 - 2025",
    yearEn: "2024 - 2025",
    targetScope: "المجتمع المحلي والفرق الفاعلة",
    targetScopeEn: "Local Community & Active Coalitions",
    outputType: "وثيقة خطة إجرائية متكاملة",
    outputTypeEn: "Integrated Operational Plan Document",
    field: "المشاركة المجتمعية وبناء المبادرات",
    fieldEn: "Civic Participation & Initiative Building",
    challenge:
      "غياب إطار تنظيمي موحد لتنسيق جهود المبادرات الشعبية، مما أدى إلى تشتت المطالب وتراجع أثر الحوار مع صناع القرار.",
    challengeEn:
      "Absence of a unified organizational framework coordinating grassroots initiative efforts, causing fragmented advocacy demands and diminishing dialogue impact with policymakers.",
    approach: [
      "رسم خارطة أصحاب المصلحة وتحديد الفاعلين الرئيسيين في البيئة التشريعية والميدانية.",
      "صياغة مصفوفة رسائل موحدة بلغة رصينة تراعي التوازنات السياساتية والمجتمعية.",
      "تنظيم 6 جلسات حوار تشاورية وطاولات مستديرة لبناء الثقة واعتماد وثيقة التدخل.",
    ],
    approachEn: [
      "Mapping stakeholders and identifying key actors across the legislative and field environments.",
      "Drafting a unified messaging matrix in authoritative language tailored to policy and community nuances.",
      "Facilitating 6 consultative dialogue sessions and executive roundtables to establish consensus on the intervention charter.",
    ],
    results: [
      "اعتماد خطة عمل تنفيذية موحدة من قبل 14 منظمة ومبادرة حقوقية ومجتمعية.",
      "فتح قناة حوار مباشرة ورسمية مع لجان المجلس النيابي والجهات الوزارية المعنية.",
      "إطلاق حملة توعوية منظمة وصلت لأكثر من 250,000 مواطن في المحافظات.",
    ],
    resultsEn: [
      "Official adoption of a unified operational action plan across 14 civic and human rights organizations.",
      "Establishing a direct and official dialogue channel with parliamentary committees and ministerial leadership.",
      "Launching a structured awareness campaign reaching over 250,000 citizens across provinces.",
    ],
  },
  {
    id: "team-skills-development",
    number: "02",
    category: "training",
    categoryLabel: "التدريب",
    categoryLabelEn: "Capacity Building",
    title: "برنامج تدريبي لتطوير مهارات فرق العمل",
    titleEn: "Capacity Building Program for Frontline Teams",
    description:
      "إعداد وتنفيذ برنامج تدريبي يركز على التخطيط والتواصل الفعال وتحويل المعرفة إلى ممارسات عملية.",
    descriptionEn:
      "Designing and delivering a training program focused on strategic planning, effective communication, and transforming knowledge into actionable field practice.",
    role: "تصميم المحتوى وتنفيذ التدريب",
    roleEn: "Curriculum Design & Training Delivery",
    deliverable: "برنامج تدريبي وأدوات تطبيقية",
    deliverableEn: "Training Curriculum & Practical Toolkits",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80",
    client: "مؤسسة التدريب والتطوير الإقليمية",
    clientEn: "Regional Training & Development Institute",
    year: "2024",
    yearEn: "2024",
    targetScope: "المنسقون الميدانيون والمشرفون الإداريون",
    targetScopeEn: "Frontline Coordinators & Administrative Supervisors",
    outputType: "حقيبة تدريبية وأدلة تطبيقية",
    outputTypeEn: "Training Package & Applied Toolkits",
    field: "تطوير الكفاءات وبناء القدرات",
    fieldEn: "Competency Development & Capacity Building",
    challenge:
      "وجود فجوة مهارية بين المعارف النظرية لدى فرق العمل الميداني والقدرة على تطبيقها في إدارة الأنشطة والتواصل مع الشركاء.",
    challengeEn:
      "A skills gap between theoretical knowledge among field teams and practical execution in managing activities and partner communication.",
    approach: [
      "إجراء تقييم دقيق للاحتياجات المهارية والمعرفية لـ 45 مشاركاً من مختلف الفروع.",
      "بناء حقيبة تدريبية تفاعلية تعتمد محاكاة الأدوار ودراسات الحالة الميدانية الحقيقية.",
      "مرافقة المشاركين أثناء صياغة خطط التدخل الخاصة بمؤسساتهم وتقديم الملاحظات المباشرة.",
    ],
    approachEn: [
      "Conducting rigorous competency and skills need assessments for 45 participants across provincial branches.",
      "Authoring an interactive training package utilizing role-playing simulations and real-world field case studies.",
      "Mentoring participants during the formulation of institutional intervention plans with immediate expert feedback.",
    ],
    results: [
      "تأهيل 45 منسقاً ومشرفاً ميدانياً على استخدام أدوات التخطيط التشاركي.",
      "تطوير 8 نماذج مشاريع تطبيقية تم اعتمادها وتنفيذها بنجاح داخل المنظمات المشاركة.",
      "تحقيق نسبة رضا وتقييم إيجابي بلغت 98% لكفاءة المحتوى والتمارين العملية.",
    ],
    resultsEn: [
      "Qualifying 45 frontline coordinators and field supervisors in participatory planning toolsets.",
      "Developing 8 practical project models successfully approved and implemented within participating organizations.",
      "Achieving a 98% positive participant satisfaction rating for curriculum quality and practical exercises.",
    ],
  },
  {
    id: "practical-operations-guide",
    number: "03",
    category: "guides",
    categoryLabel: "الأدلة",
    categoryLabelEn: "Toolkits & Manuals",
    title: "إعداد دليل عملي لتطوير الممارسات المهنية",
    titleEn: "Practical Manual for Enhancing Professional Standards",
    description:
      "تطوير دليل إرشادي يقدم خطوات واضحة وأدوات قابلة للاستخدام لدعم الفرق في تنظيم العمل وتحسين الممارسات.",
    descriptionEn:
      "Developing an actionable procedural guide providing clear workflows and ready-to-deploy tools to support teams in structuring delivery and elevating standards.",
    role: "إعداد المحتوى ومراجعته",
    roleEn: "Content Authoring & Expert Review",
    deliverable: "دليل إرشادي",
    deliverableEn: "Procedural Manual",
    image:
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1000&q=80",
    client: "الشبكة الوطنية لحماية الحقوق",
    clientEn: "National Rights Protection Network",
    year: "2023 - 2024",
    yearEn: "2023 - 2024",
    targetScope: "المنظمات الحقوقية والفرق الإجرائية",
    targetScopeEn: "Civic Organizations & Operational Units",
    outputType: "دليل إرشادي ومصفوفات تشغيلية",
    outputTypeEn: "Operational Guidelines & Verification Matrices",
    field: "الحوكمة والإجراءات المعيارية",
    fieldEn: "Governance & Standard Operating Procedures",
    challenge:
      "تكرار الأخطاء التشغيلية وغياب معايير معتمدة لإدارة البيانات وتوثيق الممارسات الميدانية لدى المنظمات الشريكة.",
    challengeEn:
      "Recurring operational bottlenecks and lack of accredited data governance standards and field documentation among partner organizations.",
    approach: [
      "توثيق أفضل الممارسات الميدانية وتفكيك المسارات الإجرائية إلى خطوات واضحة.",
      "صياغة مصفوفات المسؤوليات (RACI) وقوائم التحقق السريعة ونماذج استقبال الشكاوى.",
      "تحكيم مسودة الدليل مع لجان خبراء قانونيين وفرق تنفيذية لضمان واقعية التطبيق.",
    ],
    approachEn: [
      "Benchmarking frontline best practices and breaking operational workflows into streamlined, actionable steps.",
      "Formulating RACI responsibility matrices, rapid verification checklists, and complaint management templates.",
      "Arbitrating manual drafts with legal committees and executive delivery teams to ensure practical field feasibility.",
    ],
    results: [
      "إصدار الدليل المطبوع والرقمي واعتماده رسمياً لدى أكثر من 20 مؤسسة محلية.",
      "تقليص الوقت الإجرائي لمعالجة الملفات والتوثيق بنسبة 35% لدى الفرق المعتمدة.",
      "توزيع أكثر من 1,200 نسخة وتدريب 80 منسقاً على آليات العمل المعيارية.",
    ],
    resultsEn: [
      "Publishing the printed and digital manual, officially adopted by over 20 local institutions.",
      "Reducing procedural case processing and documentation turnaround time by 35% across certified teams.",
      "Distributing over 1,200 copies and training 80 coordinators on standardized operational protocols.",
    ],
  },
  {
    id: "professional-skills-mentoring",
    number: "04",
    category: "mentoring",
    categoryLabel: "الإرشاد المهني",
    categoryLabelEn: "Professional Mentoring",
    title: "مسار إرشادي لتطوير المهارات المهنية",
    titleEn: "Advisory Pathway for Professional Career Growth",
    description:
      "تنظيم جلسات إرشادية تساعد المشاركين على تحديد أهدافهم المهنية، وتقييم مهاراتهم، ووضع خطوات عملية للتطوير.",
    descriptionEn:
      "Conducting mentoring clinics enabling participants to set career milestones, evaluate core competencies, and chart pragmatic growth pathways.",
    role: "الإرشاد وتحديد مسارات التطوير",
    roleEn: "Executive Mentoring & Career Trajectory Design",
    deliverable: "خطة تطوير مهني",
    deliverableEn: "Professional Development Plan",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80",
    client: "برنامج تمكين القيادات الواعدة",
    clientEn: "Emerging Leadership Empowerment Initiative",
    year: "2024 - 2025",
    yearEn: "2024 - 2025",
    targetScope: "القيادات الشابة ومدراء المشاريع",
    targetScopeEn: "Emerging Leaders & Project Directors",
    outputType: "خطط تطوير شخصية ومؤسسية",
    outputTypeEn: "Personal & Institutional Development Roadmaps",
    field: "الإرشاد المهني والقيادة الاستراتيجية",
    fieldEn: "Professional Mentoring & Strategic Leadership",
    challenge:
      "صعوبة تحديد مسارات النمو المهني وفقدان الرؤية الاستراتيجية لدى مدراء البرامج والمستشارين القانونيين الجدد.",
    challengeEn:
      "Challenges in defining career development pathways and strategic vision among junior program managers and emerging legal advisors.",
    approach: [
      "عقد جلسات فردية معمقة لتشخيص نقاط القوة والتحديات والفرص الوظيفية المتاحة.",
      "وضع خطة تطوير شخصية ومؤسسية مخصصة لكل مشارك بجدول زمني محدد.",
      "توفير مرافقة دورية لمراجعة القرارات الحساسة والتحديات الإدارية والقانونية الطارئة.",
    ],
    approachEn: [
      "Conducting in-depth one-on-one sessions diagnosing core strengths, growth areas, and strategic career opportunities.",
      "Formulating bespoke personal and institutional growth roadmaps with measurable milestone timelines.",
      "Providing continuous advisory touchpoints reviewing critical executive decisions and emerging administrative challenges.",
    ],
    results: [
      "مرافقة 30 قيادياً شاباً في قطاع الاستشارات والعمل العام وتأهيلهم لمواقع إدارية متقدمة.",
      "صياغة 30 خطة تطوير مهني معتمدة مع متابعة مؤشرات الإنجاز على مدار 6 أشهر.",
      "بناء شبكة تواصل استشارية مستدامة بين الموجهين والمشاركين.",
    ],
    resultsEn: [
      "Mentoring 30 emerging leaders in civic consultancy and public interest work for advanced managerial appointments.",
      "Formulating 30 accredited career development roadmaps with 6-month progress monitoring.",
      "Establishing an active, enduring peer-mentoring network connecting advisors and participants.",
    ],
  },
  {
    id: "legal-advocacy-reform",
    number: "05",
    category: "advocacy",
    categoryLabel: "حملات المناصرة",
    categoryLabelEn: "Advocacy Campaigns",
    title: "صياغة أوراق السياسات وإصلاح التشريعات العمالية",
    titleEn: "Policy Paper Formulation & Labor Legislation Reform",
    description:
      "إعداد أوراق موقف وتحليل سياساتي متقدم لدعم حوارات تعديل أنظمة العمل والضمان الاجتماعي.",
    descriptionEn:
      "Drafting evidence-based position briefs and policy analyses to support legislative consultations reforming labor and social security regulations.",
    role: "التحليل القانوني وإعداد أوراق السياسات",
    roleEn: "Legal Analysis & Policy Brief Drafting",
    deliverable: "أوراق سياسات ومذكرات برلمانية",
    deliverableEn: "Policy Briefs & Parliamentary Memos",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1000&q=80",
    client: "اتحاد النقابات المستقلة",
    clientEn: "Independent Trade Union Federation",
    year: "2023",
    yearEn: "2023",
    targetScope: "اللجان التشريعية والمنظمات العمالية",
    targetScopeEn: "Legislative Committees & Labor Organizations",
    outputType: "مذكرات سياساتية وصياغات قانونية",
    outputTypeEn: "Policy Memorandums & Legal Clauses",
    field: "المناصرة التشريعية والسياسات العامة",
    fieldEn: "Legislative Advocacy & Public Policy",
    challenge:
      "وجود ثغرات تشريعية تؤثر على الحماية الاجتماعية للفئات العمالية الأكثر هشاشة وضعف التنسيق في تقديم مذكرات التعديل القانونية.",
    challengeEn:
      "Legislative gaps undermining social protection for vulnerable workforce segments and uncoordinated parliamentary advocacy submissions.",
    approach: [
      "إجراء مراجعات قانونية مقارنة بين التشريعات الوطنية والمعايير العمالية الدولية.",
      "صياغة 4 مذكرات سياساتية تنفيذية مدعومة ببيانات الأثر الاقتصادي والاجتماعي.",
      "تنظيم جلسات إحاطة برلمانية مع اللجان القانونية والعمالية في مجلس النواب.",
    ],
    approachEn: [
      "Conducting comparative legal reviews between national legislation and international labor standards.",
      "Drafting 4 concise executive policy memos backed by socio-economic impact data.",
      "Organizing parliamentary briefing sessions with legislative and labor committees.",
    ],
    results: [
      "تبني مقترحات التعديل الجوهرية في مسودة التعديلات المطروحة على اللجان النيابية.",
      "توحيد الموقف الترافعي لـ 6 نقابات عمالية ومجموعات رصد مدنية.",
    ],
    resultsEn: [
      "Adoption of key reform proposals in draft amendments reviewed by parliamentary committees.",
      "Unifying the advocacy position across 6 trade unions and civic labor monitoring groups.",
    ],
  },
  {
    id: "institutional-governance-guide",
    number: "06",
    category: "guides",
    categoryLabel: "الأدلة",
    categoryLabelEn: "Toolkits & Manuals",
    title: "دليل حوكمة التحالفات وشبكات العمل المشترك",
    titleEn: "Governance Manual for Coalitions & Collaborative Networks",
    description:
      "إطار تنظيمي متكامل لإدارة التحالفات المدنية، يشمل آليات اتخاذ القرار وتوزيع الموارد والتمثيل الرسمي.",
    descriptionEn:
      "An integrated governance framework for civil coalitions, detailing consensus decision-making, resource allocation, and institutional representation.",
    role: "التأطير المؤسسي وصياغة اللوائح",
    roleEn: "Institutional Structuring & Bylaw Drafting",
    deliverable: "ميثاق حوكمة ولائحة تشغيلية",
    deliverableEn: "Governance Charter & Operating Bylaws",
    image:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1000&q=80",
    client: "التحالف الوطني لتنمية المجتمع",
    clientEn: "National Community Development Coalition",
    year: "2024",
    yearEn: "2024",
    targetScope: "التحالفات التنموية وشبكات العمل الأهلي",
    targetScopeEn: "Development Coalitions & Civic Networks",
    outputType: "لوائح حوكمة ومواثيق توافقية",
    outputTypeEn: "Governance Bylaws & Consensus Charters",
    field: "حوكمة الشبكات والتحالفات",
    fieldEn: "Network Governance & Coalition Structuring",
    challenge:
      "تضارب الصلاحيات وصعوبة اتخاذ القرارات التوافقية عند توسع شبكات التحالف وتعدد الجهات المانحة والشركاء.",
    challengeEn:
      "Jurisdictional friction and gridlock in consensus decision-making during coalition expansion and multi-donor coordination.",
    approach: [
      "صياغة ميثاق حوكمة داخلي شفاف يحدد آليات التصويت وأدوار الهيئة التنسيقية.",
      "تصميم بروتوكولات فض النزاعات وتحديد ضوابط التمثيل الإعلامي والرسمي.",
      "إجراء ورش عمل تشاورية لاعتماد اللائحة من كافة المنظمات المؤسسة.",
    ],
    approachEn: [
      "Formulating a transparent internal governance charter defining voting mechanisms and steering committee roles.",
      "Designing conflict resolution protocols and clear guidelines for official media and external representation.",
      "Facilitating consultative validation workshops with founding member organizations.",
    ],
    results: [
      "مصادقة المنظمات الشريكة على اللائحة التنفيذية والعمل بها دون تحفظات.",
      "تأسيس هيكل تنظيمي مستقر عزز من فرص استقطاب المنح والمشاريع المشتركة.",
    ],
    resultsEn: [
      "Ratification of the governance bylaws by all member organizations without procedural reservations.",
      "Establishing a stable operational structure facilitating joint funding applications.",
    ],
  },
];

export function getProjectById(id: string): ProjectItem | undefined {
  return PROJECTS_DATA.find((p) => p.id === id);
}

export function getAllProjectIds(): string[] {
  return PROJECTS_DATA.map((p) => p.id);
}