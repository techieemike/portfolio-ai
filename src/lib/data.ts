export const navLinks = [
  { label: "Me", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  name: "Abikale Michael Raymond",
  title: "Full Stack AI Engineer",
  subtitle: "Founder of TheBigFish Labs",
  description:
    "Building intelligent systems across the full stack — from LLMs and computer vision to production-grade APIs, data pipelines, and autonomous agents. Turning complex problems into shipped products.",
  status: "Available for new projects",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  email: "hello@abikale.dev",
};

export const stats = [
  { value: "30+", label: "Projects Shipped" },
  { value: "5+", label: "Years Experience" },
  { value: "100+", label: "Models Deployed" },
  { value: "∞", label: "Problems Solved" },
];

export const about = {
  heading: "Building AI That Ships",
  subheading: "Not just research — production systems that scale.",
  bio: [
    "I'm Abikale Michael Raymond, a Full Stack AI Engineer and Founder of TheBigFish Labs. I specialize in building end-to-end intelligent systems — from training custom models and designing RAG pipelines to deploying them at scale across cloud infrastructure.",
    "My work spans large language models, computer vision, data engineering, multi-agent systems, and industrial AI for petroleum engineering. I believe the best AI isn't the most complex — it's the one that reliably ships value to users.",
    "When I'm not architecting systems or optimizing inference pipelines, you'll find me contributing to open-source ML tools and writing about practical AI engineering.",
  ],
};

export const projects = [
  {
    title: "ReplyFlow AI",
    description:
      "AI-powered multi-channel customer support system with autonomous agents, memory, and RAG-based response generation for scalable customer interaction.",
    tags: [
      "Next.js",
      "FastAPI",
      "Python",
      "LangChain",
      "OpenAI API",
      "PostgreSQL",
      "Redis",
      "Pinecone",
      "WebSockets",
      "Docker",
      "AWS",
    ],
    category: "AI/ML",
  },
  {
    title: "PetroBrain",
    description:
      "Industrial AI system for petroleum engineering that analyzes well logs, production data, and reservoir metrics to generate predictive insights and optimization recommendations.",
    tags: [
      "Python",
      "FastAPI",
      "LLMs",
      "RAG",
      "Scikit-learn",
      "PostgreSQL",
      "Next.js",
      "AWS S3",
      "Computer Vision",
    ],
    category: "Robotics/Petroleum",
  },
  {
    title: "NexusChat",
    description:
      "Multi-tenant AI knowledge assistant that allows organizations to upload documents and interact with them using natural language queries.",
    tags: [
      "FastAPI",
      "LangChain",
      "OpenAI API",
      "Pinecone",
      "PostgreSQL",
      "Prisma",
      "Next.js",
      "Vector Embeddings",
      "Docker",
    ],
    category: "AI/ML",
  },
  {
    title: "AgentForge",
    description:
      "No-code AI agent platform where users design, deploy, and orchestrate autonomous workflows capable of executing complex tasks across APIs and tools.",
    tags: [
      "Next.js",
      "NestJS",
      "LangGraph",
      "Redis",
      "PostgreSQL",
      "WebSockets",
      "Docker",
      "Kubernetes",
      "OpenAI API",
    ],
    category: "Automation",
  },
  {
    title: "VisionGuard",
    description:
      "Real-time AI vision system for detecting anomalies, safety violations, and equipment monitoring in industrial environments.",
    tags: [
      "Python",
      "YOLOv8",
      "OpenCV",
      "FastAPI",
      "WebSockets",
      "AWS",
      "Docker",
      "Edge AI",
    ],
    category: "AI/ML",
  },
  {
    title: "DataPulse",
    description:
      "AI-powered data platform for ingesting, transforming, and analyzing structured and unstructured data with natural language querying.",
    tags: [
      "FastAPI",
      "PostgreSQL",
      "Airflow",
      "Kafka",
      "LLMs",
      "Next.js",
      "Vector Databases",
      "Data Pipelines",
    ],
    category: "Data Engineering",
  },
  {
    title: "LogSense",
    description:
      "AI-driven DevOps monitoring system for real-time log analysis, anomaly detection, and automated incident reporting using LLM reasoning.",
    tags: [
      "ELK Stack",
      "Kafka",
      "Prometheus",
      "Grafana",
      "Python",
      "FastAPI",
      "OpenAI API",
      "Kubernetes",
      "Docker",
    ],
    category: "Full Stack",
  },
];

export const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "Next.js / React", level: 95 },
      { name: "TypeScript", level: 93 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Shadcn UI", level: 88 },
      { name: "State Management", level: 85 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js / NestJS", level: 92 },
      { name: "FastAPI", level: 90 },
      { name: "REST / GraphQL", level: 93 },
      { name: "WebSockets", level: 88 },
      { name: "JWT Auth", level: 85 },
    ],
  },
  {
    name: "AI / ML / LLM",
    skills: [
      { name: "LangChain / LangGraph", level: 93 },
      { name: "RAG Systems", level: 95 },
      { name: "OpenAI API", level: 92 },
      { name: "Vector Databases", level: 90 },
      { name: "Computer Vision", level: 85 },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "PostgreSQL", level: 92 },
      { name: "MongoDB", level: 85 },
      { name: "Redis", level: 88 },
      { name: "Prisma", level: 90 },
      { name: "Query Optimization", level: 83 },
    ],
  },
  {
    name: "DevOps & Cloud",
    skills: [
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 85 },
      { name: "AWS / GCP / Azure", level: 88 },
      { name: "CI/CD", level: 87 },
      { name: "Nginx", level: 80 },
    ],
  },
  {
    name: "Data Engineering",
    skills: [
      { name: "ETL Pipelines", level: 90 },
      { name: "Apache Airflow", level: 85 },
      { name: "Kafka", level: 83 },
      { name: "Data Warehousing", level: 82 },
      { name: "Streaming Systems", level: 80 },
    ],
  },
  {
    name: "Automation",
    skills: [
      { name: "n8n / Zapier", level: 90 },
      { name: "Webhooks", level: 88 },
      { name: "OAuth Integrations", level: 85 },
      { name: "BullMQ", level: 82 },
      { name: "Workflow Automation", level: 92 },
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
    period: "2023 — Present",
    company: "TheBigFish Labs",
    role: "Founder & Lead AI Engineer",
    description:
      "Leading development of AI-powered products across customer support, industrial analytics, and multi-agent automation. Architecting full-stack systems from prototype to production deployment.",
    tags: ["Next.js", "Python", "LangChain", "AWS", "Kubernetes"],
  },
  {
    period: "2021 — 2023",
    company: "Tech Company",
    role: "Senior Full Stack Engineer",
    description:
      "Built scalable microservices and data pipelines serving 10k+ daily users. Led the integration of AI/ML features into existing product lines, reducing manual workflows by 60%.",
    tags: ["Node.js", "NestJS", "PostgreSQL", "Docker", "GraphQL"],
  },
  {
    period: "2019 — 2021",
    company: "Startup Inc.",
    role: "Full Stack Developer",
    description:
      "Developed and shipped web applications from concept to launch. Implemented real-time features, authentication systems, and third-party API integrations.",
    tags: ["React", "Express.js", "MongoDB", "Redis", "AWS"],
  },
  {
    period: "2018 — 2019",
    company: "Engineering Firm",
    role: "Junior Developer & Data Analyst",
    description:
      "Built internal tools for data analysis and reporting. Automated petroleum engineering workflows, reducing analysis time by 40%.",
    tags: ["Python", "SQL", "Scikit-learn", "Pandas", "Visualization"],
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
