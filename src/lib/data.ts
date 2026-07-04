export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  name: "Abikale Michael Raymond",
  title: "Founder & Lead Full Stack AI Engineer of TheBigFish Lab",
  subtitle: "Founder of TheBigFish Lab",
  description:
    "Building intelligent systems across the full stack — from LLMs and computer vision to production-grade APIs, data pipelines, and autonomous agents. Turning complex problems into shipped products.",
  status: "Available for new projects",
  github: "https://github.com/techieemike",
  linkedin: "https://www.linkedin.com/in/michael-raymond-abikale-27363949/",
  email: "abikalemichaelraymond@gmail.com",
};

export const stats = [
  { value: "10", label: "Projects Shipped" },
  { value: "5+", label: "Years Experience" },
  { value: "10", label: "Models Deployed" },
  { value: "∞", label: "Problems Solved" },
];

export const about = {
  heading: "Building AI That Ships",
  subheading: "Not just research — production systems that scale.",
  bio: [
    "I'm Abikale Michael Raymond, a Full Stack AI Engineer and Systems Architect with 5+ years of experience designing and deploying production-grade SaaS platforms, agentic AI systems, and real-time applications across fintech, healthcare, industrial automation, and computer vision domains.",
    "Currently serving as AI / Machine Learning Engineer at Globacom in Lagos, where I design and deploy production ML models for fraud detection and anomaly detection on telecom-scale datasets. I also own the full stack — from Next.js frontends and NestJS/FastAPI backends to LLM orchestration, edge CV deployment, and multi-tenant infrastructure.",
    "My work spans large language models, computer vision, data engineering, multi-agent systems, and industrial AI for petroleum engineering. I hold a B.Eng in Petroleum Engineering from the University of Benin and believe the best AI isn't the most complex — it's the one that reliably ships value to users.",
  ],
};

export const projects = [
  {
    title: "FraudSentinel AI",
    creator: "abikale",
    description:
      "Multi-tenant B2B fraud detection SaaS providing real-time transaction risk scoring via REST API with role-based dashboard, WebSocket alerts, and AI-driven decision engine. Reduces financial fraud losses by 60–85% with <200ms detection latency.",
    tags: [
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "Docker",
      "JWT",
      "WebSockets",
      "Prisma",
    ],
    category: "AI/ML",
  },
  {
    title: "ReplyFlow AI",
    creator: "abikale",
    description:
      "Multi-tenant AI customer operations platform with multi-agent orchestration handling support, sales, refunds, and billing across web, WhatsApp, and email channels autonomously. Resolves 90%+ of inquiries autonomously with 10,000+ conversations/day.",
    tags: [
      "FastAPI",
      "LangGraph",
      "LangChain",
      "Next.js",
      "Pinecone",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Kafka",
      "Kubernetes",
    ],
    category: "AI/ML",
  },
  {
    title: "WellSense AI",
    creator: "abikale",
    description:
      "AI-powered oil & gas intelligence platform combining predictive maintenance (LSTM+XGBoost hybrid) and subsurface well log interpretation with conversational AI copilot. Reduces unplanned downtime by 40% with 92% lithology classification accuracy.",
    tags: [
      "Python",
      "FastAPI",
      "XGBoost",
      "LSTM",
      "LangChain",
      "MLflow",
      "PostgreSQL",
      "n8n",
      "Docker",
      "SHAP",
    ],
    category: "AI/ML",
  },
  {
    title: "VisionGuard",
    creator: "abikale",
    description:
      "Real-time industrial safety and surveillance AI detecting PPE violations and equipment anomalies on live camera feeds, optimized for edge deployment on NVIDIA Jetson devices. 96.4% mAP on PPE detection with 45ms/frame inference.",
    tags: [
      "YOLOv8",
      "ByteTrack",
      "ONNX",
      "TensorRT",
      "FastAPI",
      "Kafka",
      "Next.js",
      "Jetson Nano",
      "Docker",
      "Roboflow",
    ],
    category: "Computer Vision",
  },
  {
    title: "CareVoice AI",
    creator: "abikale",
    description:
      "Voice-first healthcare operations platform enabling doctors and care workers to manage patient records, medications, schedules, and documentation through natural language voice commands. Reduces documentation time by 40% with <2s voice response.",
    tags: [
      "FastAPI",
      "LangGraph",
      "Next.js",
      "PWA",
      "Redis",
      "Celery",
      "PostgreSQL",
      "WebSockets",
      "Docker",
    ],
    category: "AI/ML",
  },
];

export const skillCategories = [
  {
    name: "Full Stack & Frontend",
    skills: [
      { name: "Next.js / React", level: 95 },
      { name: "TypeScript", level: 93 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Shadcn UI", level: 88 },
      { name: "Progressive Web Apps", level: 85 },
    ],
  },
  {
    name: "Backend & API Systems",
    skills: [
      { name: "NestJS / FastAPI", level: 92 },
      { name: "Prisma ORM", level: 90 },
      { name: "REST APIs / WebSockets", level: 93 },
      { name: "JWT / OAuth / RBAC", level: 88 },
      { name: "Stripe Integration", level: 85 },
    ],
  },
  {
    name: "Machine Learning & AI",
    skills: [
      { name: "XGBoost / LightGBM", level: 90 },
      { name: "PyTorch / TensorFlow", level: 88 },
      { name: "Scikit-learn / SHAP", level: 92 },
      { name: "Time Series / Forecasting", level: 85 },
      { name: "Anomaly Detection", level: 88 },
    ],
  },
  {
    name: "AI Engineering & Agents",
    skills: [
      { name: "LangChain / LangGraph", level: 93 },
      { name: "RAG Systems", level: 95 },
      { name: "CrewAI / Agentic Workflows", level: 88 },
      { name: "Vector Databases (Pinecone)", level: 90 },
      { name: "Multi-Agent Orchestration", level: 85 },
    ],
  },
  {
    name: "Computer Vision & Edge AI",
    skills: [
      { name: "YOLOv8 / OpenCV", level: 90 },
      { name: "ONNX / TensorRT", level: 85 },
      { name: "NVIDIA Jetson", level: 82 },
      { name: "SAM / CLIP", level: 80 },
      { name: "Edge Deployment", level: 85 },
    ],
  },
  {
    name: "Infrastructure & DevOps",
    skills: [
      { name: "Docker / Kubernetes", level: 90 },
      { name: "GitHub Actions / CI/CD", level: 87 },
      { name: "Prometheus / Grafana", level: 83 },
      { name: "Kafka / Redis / BullMQ", level: 88 },
      { name: "MLflow / Vertex AI", level: 85 },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "PostgreSQL", level: 92 },
      { name: "Redis", level: 88 },
      { name: "Prisma ORM", level: 90 },
      { name: "Query Optimization", level: 85 },
      { name: "Data Warehousing", level: 82 },
    ],
  },
  {
    name: "Petroleum Engineering",
    skills: [
      { name: "Reservoir Engineering", level: 80 },
      { name: "Decline Curve Analysis", level: 78 },
      { name: "Well Log Interpretation", level: 75 },
      { name: "Monte Carlo Simulation", level: 82 },
      { name: "Industrial Data Modeling", level: 85 },
    ],
  },
];

export const experience = [
  {
    period: "Aug 2023 — Present",
    company: "Globacom",
    role: "AI / Machine Learning Engineer",
    description:
      "Designed and deployed production-grade ML models for fraud detection and anomaly detection on telecom-scale datasets (50M+ records/month), improving detection accuracy by 25% and reducing false positive rates by 20%. Built real-time ML inference pipelines using FastAPI, Kafka, and Docker achieving <200ms latency and 99.9% uptime. Implemented end-to-end MLOps pipeline with MLflow experiment tracking, model versioning, and deployment governance. Built real-time model observability dashboards tracking feature drift, prediction distribution shifts, and model degradation.",
    tags: ["Python", "FastAPI", "Kafka", "Docker", "MLflow", "Grafana"],
  },
  {
    period: "Sep 2021 — Jul 2023",
    company: "Globacom",
    role: "Data & ML Systems Engineer",
    description:
      "Led transition from traditional analytics systems to ML-ready data infrastructure, redesigning ETL pipelines and data schemas to support downstream model training and feature engineering workflows. Implemented data quality validation frameworks ensuring feature completeness and distribution stability. Built BI dashboards for executive reporting and business intelligence across telecom operations. Designed and optimized ETL pipelines for ML workflows, reducing data preparation time by 50%.",
    tags: ["Python", "ETL", "SQL", "BI Dashboards", "Data Pipelines"],
  },
  {
    period: "May 2026 — Present",
    company: "TheBigFish Lab",
    role: "Founder & Lead Full Stack AI Engineer",
    description:
      "Leading development of AI-powered products across customer support, industrial analytics, multi-agent automation, computer vision, and healthcare. Architecting full-stack systems from prototype to production deployment. Building FraudSentinel, ReplyFlow, WellSense, VisionGuard, and CareVoice AI platforms.",
    tags: ["Next.js", "Python", "LangChain", "AWS", "Kubernetes", "Docker"],
  },
];

export const blogPosts = [
  {
    category: "AI/LLM",
    title: "Why RAG is Eating the AI World",
    description:
      "Retrieval-Augmented Generation is becoming the default architecture for enterprise AI. Here's why it works and how to build one that actually performs in production.",
    date: "Mar 2026",
    readTime: "8 min read",
  },
  {
    category: "Engineering",
    title: "Building Multi-Agent Systems That Don't Go Rogue",
    description:
      "Designing autonomous agent workflows with LangGraph — guardrails, memory management, and why deterministic fallbacks matter more than you think.",
    date: "Jan 2026",
    readTime: "10 min read",
  },
  {
    category: "Data Engineering",
    title: "Real-Time Data Pipelines: Kafka vs. Airflow",
    description:
      "When to use streaming vs. batch processing for production data systems. Lessons learned from building pipelines that handle millions of events daily.",
    date: "Nov 2025",
    readTime: "7 min read",
  },
  {
    category: "Petroleum + AI",
    title: "Applying ML to Reservoir Engineering",
    description:
      "How machine learning models can complement traditional decline curve analysis and well log interpretation for better production forecasting.",
    date: "Sep 2025",
    readTime: "12 min read",
  },
];

export const coFounder = {
  name: "Rachael Martha Moses",
  title: "Co-Founder & Assistant Lead Full Stack AI Engineer of TheBigFish Lab",
  subtitle: "Co-Founder of TheBigFish Lab",
  description:
    "Full Stack Developer and AI Systems Engineer experienced in building production-grade web applications and AI-powered SaaS platforms. Combines engineering discipline with analytical rigour rooted in peer-reviewed research.",
  email: "martharachaelmoses@gmail.com",
  github: "https://github.com/Rachaellaa",
  linkedin: "https://www.linkedin.com/in/martha-rachael-moses-7106253a4/",
  bio: [
    "I'm Rachael Martha Moses, Co-Founder of TheBigFish Lab and a Full Stack Developer & AI Systems Engineer experienced in building production-grade web applications and AI-powered SaaS platforms.",
    "I specialize in end-to-end full-stack architectures (React/Next.js, Python/FastAPI, NestJS, PostgreSQL, Redis, Celery) and LLM-based AI systems including RAG pipelines, Whisper STT, Prophet/XGBoost forecasting, and agentic AI workflows.",
    "I hold a B.Sc. in Chemistry from the University of Agriculture, Makurdi, and have authored a peer-reviewed publication on protein analysis in infant formula — demonstrating analytical methodology and structured data thinking directly transferable to software engineering and AI documentation.",
  ],
};

export const coFounderProjects = [
  {
    title: "InsightFlow AI",
    creator: "martha",
    description:
      "Full-stack data analytics platform where users upload CSV/Excel/PDF/Word files and get AI-generated insights, charts, RAG-powered chat with their data, SQL querying, and exportable reports. Deployed entirely on free-tier stack (Vercel + Supabase + Gemini).",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Supabase",
      "Gemini LLM",
      "RAG",
      "Recharts",
    ],
    category: "AI/ML",
  },
  {
    title: "RouteOptima AI",
    creator: "martha",
    description:
      "Multi-tenant logistics platform optimizing delivery routes using Dijkstra/A* and VRP solvers with ML-based ETA prediction. Reduces fuel waste by 22% and improves on-time delivery by 35% across 10+ logistics companies.",
    tags: [
      "React",
      "Next.js",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Stripe",
      "LLM",
    ],
    category: "AI/ML",
  },
  {
    title: "Medivoice AI",
    creator: "martha",
    description:
      "Voice-based clinical workflow using Whisper STT (95% accuracy) and LLM summarization to convert voice input into structured SOAP notes, prescriptions, and follow-ups. Reduces documentation time by 40% enabling 3 more consultations per doctor per day.",
    tags: [
      "React",
      "Next.js",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Whisper",
      "LLM",
    ],
    category: "AI/ML",
  },
  {
    title: "StockSense AI",
    creator: "martha",
    description:
      "Predictive inventory system using Prophet/XGBoost demand forecasting on 2+ years of sales data with seasonal decomposition. Reduces stockouts by 45% and expired write-offs by 30% across 5+ retail locations.",
    tags: [
      "React",
      "Next.js",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Celery",
      "XGBoost",
      "Stripe",
    ],
    category: "AI/ML",
  },
  {
    title: "Conversa AI",
    creator: "martha",
    description:
      "Multi-tenant agentic AI support platform with RAG-based knowledge retrieval integrating documents, FAQs, and chat data across web and WhatsApp. Reduces agent workload by 60% with 90%+ first-response resolution.",
    tags: [
      "React",
      "Next.js",
      "FastAPI",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Stripe",
      "LLM",
      "RAG",
    ],
    category: "AI/ML",
  },
];

export const coFounderSkillCategories = [
  {
    name: "Frontend Development",
    skills: [
      { name: "React / Next.js", level: 92 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Bootstrap", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "WebSocket Clients", level: 82 },
    ],
  },
  {
    name: "Backend Development",
    skills: [
      { name: "Python / FastAPI", level: 90 },
      { name: "NestJS", level: 85 },
      { name: "PostgreSQL", level: 88 },
      { name: "Redis / Celery", level: 85 },
      { name: "Stripe API", level: 82 },
    ],
  },
  {
    name: "AI & Machine Learning",
    skills: [
      { name: "LLM Integration", level: 90 },
      { name: "RAG Pipelines", level: 88 },
      { name: "Pinecone (Vector DB)", level: 85 },
      { name: "Whisper STT", level: 85 },
      { name: "XGBoost / Prophet", level: 82 },
    ],
  },
  {
    name: "Infrastructure & Tools",
    skills: [
      { name: "Git / Version Control", level: 90 },
      { name: "REST API Design", level: 92 },
      { name: "WebSockets", level: 85 },
      { name: "Vercel / Render", level: 88 },
      { name: "Supabase / Linux", level: 85 },
    ],
  },
];

export const coFounderExperience = [
  {
    period: "May 2024 — May 2026",
    company: "Centre for Food Technology and Research, BSU",
    role: "Full Stack Developer / Systems Engineer",
    description:
      "Develop Python-based data pipelines and internal web tools serving research operations, reducing manual data processing time by 30%. Built automated reporting dashboards with React, Next.js, and REST API integrations enabling real-time research metrics. Engineered ETL workflows integrating multiple data sources into PostgreSQL, eliminating redundant data collection and streamlining research cycles.",
    tags: ["Python", "React", "Next.js", "PostgreSQL", "ETL", "Dashboards"],
  },
  {
    period: "Apr 2023 — Apr 2024",
    company: "HQ 82 Division, Nigerian Army Ordnance Corps",
    role: "Data and Operations Analyst - NYSC",
    description:
      "Designed and deployed full-stack web dashboards for operational logistics and personnel tracking, improving reporting accuracy and visibility by 18%. Built Python-based collection and analysis tools, structuring manual records into digital datasets. Trained and mentored 50+ personnel on software tools and digital documentation, earning a formal NYSC Leadership Award for excellence.",
    tags: ["Python", "Dashboards", "Data Analysis", "Training", "Leadership"],
  },
  {
    period: "May 2026 — Present",
    company: "TheBigFish Lab",
    role: "Co-Founder & Assistant Lead Full Stack AI Engineer",
    description:
      "Building AI-powered SaaS platforms across logistics, healthcare, retail, customer support, and business intelligence. Leading development of InsightFlow AI, RouteOptima AI, Medivoice AI, StockSense AI, and Conversa AI platforms. Architecting end-to-end full-stack solutions with measurable business impact.",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "LLM", "RAG", "Docker"],
  },
];
