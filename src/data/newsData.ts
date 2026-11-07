export type Category = "الكل" | "حملات ومناصرة" | "تقارير ودراسات" | "مقالات وآراء";

export interface Article {
  id: string;
  title: string;
  titleEn: string;
  category: Category;
  categoryEn: string;
  date: string;
  dateEn: string;
  readTime: string;
  readTimeEn: string;
  author: string;
  authorEn: string;
  excerpt: string;
  excerptEn: string;
  image: string;
  keyPoints?: string[];
  keyPointsEn?: string[];
  content: string[];
  contentEn: string[];
}

export const NEWS_ARTICLES: Article[] = [
  {
    id: "1",
    title: "إطلاق مائدة حوار استراتيجية لتطوير آليات كسب التأييد والتشريعات القانونية",
    titleEn: "Launching a Strategic Roundtable to Advance Advocacy Mechanisms & Legal Policies",
    category: "حملات ومناصرة",
    categoryEn: "Advocacy & Campaigns",
    date: "13 أكتوبر 2026",
    dateEn: "October 13, 2026",
    readTime: "4 دقائق",
    readTimeEn: "4 min read",
    author: "المستشار عماد أبو صالح",
    authorEn: "Emad Abu Saleh",
    excerpt:
      "استعراض لأبرز مخرجات الجلسة التشاورية المشتركة لمناقشة منهجيات التأثير في السياسات العامة والتشريعات وتنسيق جهود المناصرة بفاعلية وتأثير مستدام.",
    excerptEn:
      "Reviewing key outcomes from the consultative roundtable on policy influence methodologies, legislative reforms, and coordinated advocacy efforts.",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
    keyPoints: [
      "مراجعة التعديلات التشريعية المقترحة للعمل الحقوقي",
      "صياغة خطط التحالفات الميدانية وبناء التوافقات",
      "تطوير أدوات الترافع القانوني والمؤسسي",
    ],
    keyPointsEn: [
      "Reviewing proposed legislative amendments for rights-based action",
      "Designing coalition action plans and building grassroots consensus",
      "Developing institutional and legal advocacy mechanisms",
    ],
    content: [
      "شهدت مائدة الحوار الاستراتيجية حضوراً واسعاً من خبراء القانون وقيادات العمل التنموي لمناقشة آليات كسب التأييد التشريعي.",
      "تم التركيز على التحول نحو الترافع المبني على الحجج القانونية الدقيقة لضمان حماية الحقوق وتعزيز العدالة.",
    ],
    contentEn: [
      "The strategic roundtable gathered esteemed legal practitioners and civic leadership to address legislative advocacy pathways.",
      "Emphasis was placed on evidence-based legal argumentation to ensure rights protection and reinforce institutional justice.",
    ],
  },
  {
    id: "2",
    title: "صدور التقرير التحليلي حول واقع مؤشرات العدالة وسيادة القانون",
    titleEn: "Release of the Analytical Report on Justice Indicators & the Rule of Law",
    category: "تقارير ودراسات",
    categoryEn: "Reports & Studies",
    date: "14 أكتوبر 2026",
    dateEn: "October 14, 2026",
    readTime: "6 دقائق",
    readTimeEn: "6 min read",
    author: "قسم البحوث والسياسات القانونية",
    authorEn: "Legal Policy & Research Department",
    excerpt:
      "قراءة مفصلة في نتائج المسح الميداني الأخير الذي يحلل التحديات الهيكلية والفرص الواعدة لصناع القرار والمنظمات التنموية الفاعلة.",
    excerptEn:
      "An in-depth analysis of the recent field survey examining structural challenges and emerging opportunities for policymakers and civic institutions.",
    image:
      "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?auto=format&fit=crop&w=1200&q=80",
    keyPoints: [
      "تحليل مؤشرات الوصول والشمول في السياسات المحلية",
      "رصد الفجوات التنسيقية بين المؤسسات المانحة والتنفيذية",
      "توصيات عملية للمحامين والمدافعين لتطوير مذكرات الدفاع",
    ],
    keyPointsEn: [
      "Analyzing accessibility and inclusion indicators within local policy",
      "Identifying coordination gaps between funding and executive entities",
      "Actionable recommendations for legal practitioners to enhance briefs",
    ],
    content: [
      "يقدم التقرير قراءة شاملة ومعمقة مبنية على مسوح ميدانية دقيقة تعكس الواقع التنموي والقانوني بشفافية.",
      "يضع التقرير بين يدي المنظمات خارطة طريق لتحسين كفاءة التدخلات التنموية القادمة.",
    ],
    contentEn: [
      "The report provides a thorough, evidence-grounded assessment reflecting the legal and developmental landscape with transparency.",
      "It delivers a clear roadmap for organizations aiming to maximize the efficiency of forthcoming field interventions.",
    ],
  },
  {
    id: "3",
    title: "اختتام ورشة بناء القدرات في إدارة التدخلات وتخطيط الحملات النوعية",
    titleEn: "Conclusion of the Capacity-Building Workshop on Field Interventions & Campaign Planning",
    category: "حملات ومناصرة",
    categoryEn: "Advocacy & Campaigns",
    date: "09 أكتوبر 2026",
    dateEn: "October 09, 2026",
    readTime: "3 دقائق",
    readTimeEn: "3 min read",
    author: "فريق التدريب القانوني",
    authorEn: "Legal Training Team",
    excerpt:
      "مشاركة قيادات ونشطاء مجتمعيين في تدريب تطبيقي مكثف يركز على صياغة الرسائل الاستراتيجية وأسس الترافع والتقاضي الاستراتيجي.",
    excerptEn:
      "Civic leaders and grassroots advocates engaged in intensive applied training focusing on strategic messaging, coalition-building, and advocacy.",
    image:
      "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?auto=format&fit=crop&w=1200&q=80",
    keyPoints: [
      "تمكين 45 ناشطاً وقيادياً من أدوات التخطيط للترافع",
      "تطبيق محاكاة حية لإدارة النزاعات والمفاوضات",
    ],
    keyPointsEn: [
      "Equipping 45 civic leaders with strategic advocacy toolkits",
      "Facilitating live simulations on conflict resolution and negotiation",
    ],
    content: [
      "اختتمت الورشة التدريبية بعد ثلاثة أيام من التدريب المكثف والتطبيقات العملية في أروقة القانون العملي.",
    ],
    contentEn: [
      "The intensive training concluded following three days of practical exercises bridging strategic law with civic engagement.",
    ],
  },
  {
    id: "4",
    title: "قراءة قانونية في التعديلات التشريعية المعاصرة وحماية الحقوق",
    titleEn: "A Legal Review of Contemporary Legislative Amendments & Rights Protection",
    category: "مقالات وآراء",
    categoryEn: "Articles & Opinions",
    date: "02 أكتوبر 2026",
    dateEn: "October 02, 2026",
    readTime: "5 دقائق",
    readTimeEn: "5 min read",
    author: "المستشار عماد أبو صالح",
    authorEn: "Emad Abu Saleh",
    excerpt:
      "تحليل نقدي للمستجدات التشريعية الأخيرة وأثرها على تمكين الفئات الأكثر احتياجاً وتعزيز دور الدفاع في تحقيق التوازن القانوني.",
    excerptEn:
      "A critical analysis of recent legislative developments and their impact on empowering vulnerable groups and reinforcing legal balance.",
    image:
      "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=1200&q=80",
    keyPoints: [
      "استعراض البنود المستحدثة في القانون",
      "قراءة في المذكرات الإيضاحية والسوابق القضائية",
    ],
    keyPointsEn: [
      "Examining newly ratified statutory clauses",
      "Reviewing explanatory memoranda and jurisprudential precedents",
    ],
    content: [
      "يتناول المقال التطورات المتسارعة في التشريعات المدنية وأثرها المباشر على سير الدعاوى القضائية.",
    ],
    contentEn: [
      "This analysis examines rapid shifts in civil and public legislation and their direct bearing on litigation and justice outcomes.",
    ],
  },
  {
    id: "5",
    title: "دراسة مقارنة: الضمانات القانونية في حماية الشهود والمدافعين",
    titleEn: "Comparative Study: Legal Safeguards for Protecting Witnesses & Human Rights Defenders",
    category: "تقارير ودراسات",
    categoryEn: "Reports & Studies",
    date: "28 سبتمبر 2026",
    dateEn: "September 28, 2026",
    readTime: "7 دقائق",
    readTimeEn: "7 min read",
    author: "قسم الأبحاث والدراسات",
    authorEn: "Research & Studies Division",
    excerpt:
      "ورقة سياسات تحليلية تقارن بين الأطر القانونية الإقليمية والدولية في توفير الحصانات والضمانات اللازمة للعمل الحقوقي.",
    excerptEn:
      "A policy paper benchmarking regional and international legal frameworks that provide institutional safeguards for defenders.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
    keyPoints: [
      "مقارنة بين 4 أنظمة قانونية إقليمية",
      "مقترحات لتعزيز بيئة العمل الآمن للمدافعين",
    ],
    keyPointsEn: [
      "Comparative analysis across four regional legal jurisdictions",
      "Policy proposals to guarantee a secure operating environment for advocates",
    ],
    content: [
      "تهدف الدراسة إلى تقديم رؤية موضوعية حول سبل تطوير التشريعات المتعلقة بحماية النشطاء والمحامين.",
    ],
    contentEn: [
      "The study aims to provide an objective blueprint for advancing protections accorded to legal advocates and civic actors.",
    ],
  },
  {
    id: "6",
    title: "أصول الصياغة القانونية ومحاور كسب القضايا المعقدة",
    titleEn: "Principles of Legal Drafting & Strategic Advocacy in Complex Cases",
    category: "مقالات وآراء",
    categoryEn: "Articles & Opinions",
    date: "21 سبتمبر 2026",
    dateEn: "September 21, 2026",
    readTime: "4 دقائق",
    readTimeEn: "4 min read",
    author: "المستشار عماد أبو صالح",
    authorEn: "Emad Abu Saleh",
    excerpt:
      "إضاءات عملية على الفروق الجوهرية بين الصياغة النظرية والصياغة الإقناعية للمذكرات ولائحة الدعوى أمام المحاكم.",
    excerptEn:
      "Practical insights on the core distinctions between theoretical phrasing and persuasive legal drafting in courtroom pleadings.",
    image:
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1200&q=80",
    keyPoints: [
      "ترتيب الوقائع والأسانيد المنطقية",
      "فن تفنيد دفوع الخصوم بإيجاز محكم",
    ],
    keyPointsEn: [
      "Structuring factual chronologies and logical legal arguments",
      "The art of concisely rebutting opposing defenses with precision",
    ],
    content: [
      "الصياغة القانونية الرصينة هي نصف المعركة القضائية؛ فالوضوح والدقة هما مفتاح إقناع هيئة المحكمة.",
    ],
    contentEn: [
      "Rigorous legal drafting constitutes half the advocacy battle; clarity and precision remain the ultimate tools of judicial persuasion.",
    ],
  },
];