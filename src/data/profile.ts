// Single source of truth for every fact published on dar4datascience.com.
// Derived from ~/Documents/Curriculum-Vitae (candidate-facts.md, detailed_cv.qmd).
// Do NOT add claims that are not confirmed there.

export const SITE_URL = "https://dar4datascience.com";

export const person = {
  name: "Daniel Amieva Rodriguez",
  givenName: "Daniel",
  familyName: "Amieva Rodriguez",
  jobTitle: "Senior Data Engineer",
  headline:
    "Senior Data Engineer | AWS & GCP Data Platforms | AI-Integrated Analytics",
  tagline:
    "I design and ship cloud data platforms on AWS and GCP, automate analytics with Python and SQL, and connect LLM tooling to real business data.",
  location: { city: "Mexico City", country: "Mexico", countryCode: "MX" },
  email: "danielamieva@dar4datascience.com",
  linkedin: "https://www.linkedin.com/in/dar-4-ds",
  github: "https://github.com/dar4datascience",
  languages: [
    { name: "Spanish", level: "Native" },
    { name: "English", level: "Fluent" },
  ],
  yearsOfExperience: "6+",
  summary:
    "Daniel Amieva Rodriguez is a Senior Data Engineer based in Mexico City with 6+ years of experience building scalable data pipelines across AWS, GCP, and multi-cloud environments. He is currently Senior Data Engineer at TeamStation AI, where he architected a medallion data lake on AWS serverless services and integrated natural-language BI for business users. Previously he worked at Rackspace Technology, Baz Super App, DiDi Food, and DGTIC UNAM. He specializes in Python, advanced SQL, PySpark, ETL/ELT architecture, CI/CD, and LLM/MCP integration for analytics.",
} as const;

export type Role = {
  company: string;
  title: string;
  start: string; // ISO yyyy-mm or yyyy
  end: string | null; // null = present
  location: string;
  summary: string;
  highlights: string[];
  technologies: string[];
};

export const experience: Role[] = [
  {
    company: "TeamStation AI",
    title: "Senior Data Engineer",
    start: "2025-05",
    end: null,
    location: "Remote (Mexico City) — consultancy for international clients",
    summary:
      "Architected an enterprise medallion data lake from scratch on AWS serverless and shipped self-service, natural-language analytics for business stakeholders.",
    highlights: [
      "Architected a ground-up medallion data lake (bronze/silver/gold) with custom Python packages and AWS Glue, Step Functions, Lambda, and DMS streaming.",
      "Replaced Spark-heavy jobs with a DuckDB + Lambda architecture, cutting compute costs ~40% and processing time ~60% versus the equivalent Glue cluster approach.",
      "Developed REST API endpoints with FastAPI and contributed to the Django backend, owning features end to end from API design to production deployment.",
      "Offloaded analytics from the main application database into a dedicated PostgreSQL data warehouse and integrated ThoughtSpot BI for natural-language querying (NLQ).",
      "Built an AI-enhanced Quarto documentation system covering Step Functions, Lambdas, and custom packages to speed up team onboarding.",
      "Implemented CI/CD with GitHub Actions and infrastructure as code with AWS SAM, CloudFormation, and Terraform.",
    ],
    technologies: [
      "Python",
      "SQL",
      "PostgreSQL",
      "AWS Glue",
      "AWS Step Functions",
      "AWS Lambda",
      "AWS DMS",
      "DuckDB",
      "FastAPI",
      "Django",
      "ThoughtSpot",
      "GitHub Actions",
      "AWS SAM",
      "CloudFormation",
      "Terraform",
      "Quarto",
    ],
  },
  {
    company: "Rackspace Technology",
    title: "Business Intelligence Engineer IV",
    start: "2024",
    end: "2025",
    location: "Remote (Mexico City)",
    summary:
      "Built enterprise ETL automation on BigQuery, created the organization's first Power BI CI/CD pipeline, and led a cost-optimization initiative worth over USD 1,000,000 per year.",
    highlights: [
      "Built Python ETL pipelines executing SQL against BigQuery and connecting 10+ enterprise APIs (Azure Monitor SDK, LeanIX OData, ServiceNow, SharePoint, Power BI); the AskHR pipeline ran hourly with zero manual intervention.",
      "Independently designed and shipped an end-to-end Power BI CI/CD pipeline (Python + GitHub Actions + Azure AD service principals) for 90+ dashboards across 70+ workspaces, cutting deployment time from 60 minutes to 2 minutes.",
      "Led BigQuery SQL performance tuning and decommissioning of stale assets, delivering estimated annual savings exceeding USD 1,000,000 and freeing 1,500+ engineering hours per year.",
      "Built LLM-based applications for HR and BI use cases with OpenAI, Gemini, and agentic AI frameworks.",
      "Worked with Databricks, Delta Lake, Unity Catalog, and GCP Dataproc/Dataflow for large-scale processing.",
    ],
    technologies: [
      "Python",
      "SQL",
      "BigQuery",
      "Dataform",
      "GitHub Actions",
      "Power BI",
      "Azure AD",
      "Databricks",
      "Delta Lake",
      "PySpark",
      "GCP Dataproc",
      "GCP Dataflow",
      "OpenAI API",
      "Gemini API",
      "Tableau",
      "Jira",
    ],
  },
  {
    company: "Baz Super App",
    title: "Senior BI Engineer",
    start: "2023",
    end: "2024",
    location: "Mexico City",
    summary:
      "Led cross-cloud financial data streaming and automated marketing analytics on GCP.",
    highlights: [
      "Led sensitive financial data replication from AWS to BigQuery through a Kafka streaming pipeline, coordinating security, cloud, and data teams for compliant real-time availability.",
      "Built and automated a Python ETL pipeline ingesting CleverTap marketing events into BigQuery, scheduled with GitHub Actions cron, enabling self-serve campaign reporting.",
      "Implemented data validation and monitoring across cloud environments; worked with Databricks, Dataproc, Dataflow/Apache Beam, Pub/Sub, Cloud Functions, and Looker.",
    ],
    technologies: [
      "Python",
      "SQL",
      "BigQuery",
      "Kafka",
      "AWS",
      "GCP",
      "Cloud Composer",
      "Pub/Sub",
      "Apache Beam",
      "Databricks",
      "Looker",
      "CleverTap",
      "GitHub Actions",
    ],
  },
  {
    company: "DiDi Food",
    title: "Data Engineer / BI Lead",
    start: "2021",
    end: "2023",
    location: "Mexico City",
    summary:
      "Optimized Spark SQL workloads, automated analyst reporting, and led a SQL competency program for the team.",
    highlights: [
      "Tuned Spark SQL jobs via Python profiling and choke-point debugging, achieving a 40% reduction in job execution time.",
      "Parameterized and automated SQL queries previously run manually by business users, saving ~100+ analyst hours per quarter.",
      "Maintained data governance across customer-experience analytics pipelines spanning SQL Server and AWS sources (Athena, Glue, S3).",
      "Designed and led a query competency program that raised the team's internal performance score and unlocked additional compute allocation.",
    ],
    technologies: [
      "Python",
      "SQL",
      "Spark",
      "Presto",
      "Hive",
      "AWS Athena",
      "AWS Glue",
      "AWS S3",
      "Airflow",
      "dbt",
      "Tableau",
      "SQL Server",
      "GitLab",
      "Linux",
    ],
  },
  {
    company: "DGTIC UNAM",
    title: "Data Engineer",
    start: "2019",
    end: "2021",
    location: "Mexico City",
    summary:
      "Built the organization's first data warehouse for online lectures and pioneered Spark adoption for MOOC analytics.",
    highlights: [
      "Pioneered Spark adoption and built the first data warehouse for online lectures during the pandemic.",
      "Collaborated with IT on database architecture and queried MOOC data from PostgreSQL for Big Data analytics.",
    ],
    technologies: ["Python", "SQL", "R", "Spark", "PostgreSQL", "Docker", "Linux"],
  },
];

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Languages",
    items: ["Python", "SQL", "PySpark", "R", "JavaScript", "Bash"],
  },
  {
    category: "AWS",
    items: [
      "Glue",
      "Lambda",
      "Step Functions",
      "DMS",
      "S3",
      "Athena",
      "SAM",
      "CloudFormation",
    ],
  },
  {
    category: "GCP",
    items: [
      "BigQuery",
      "Dataform",
      "Dataproc",
      "Dataflow / Apache Beam",
      "Pub/Sub",
      "Cloud Functions",
      "Cloud Composer",
      "Cloud Storage",
      "Cloud Logging",
    ],
  },
  {
    category: "Data Platforms & Processing",
    items: [
      "Databricks",
      "Delta Lake",
      "Unity Catalog",
      "Spark",
      "DuckDB",
      "Kafka",
      "Presto",
      "Hive",
      "PostgreSQL",
      "Microsoft Fabric",
      "NoSQL databases",
    ],
  },
  {
    category: "Architecture & Modeling",
    items: [
      "Medallion architecture",
      "ETL/ELT pipeline design",
      "Streaming pipelines",
      "Dimensional modeling (star / snowflake schema)",
      "Data governance",
    ],
  },
  {
    category: "DevOps & IaC",
    items: [
      "GitHub Actions",
      "GitLab CI",
      "Terraform",
      "Docker",
      "Git / GitHub / GitLab / Bitbucket",
      "Jira",
      "Confluence",
    ],
  },
  {
    category: "BI & Analytics",
    items: ["Power BI", "Tableau", "Looker", "ThoughtSpot (NLQ)", "Quarto"],
  },
  {
    category: "AI Engineering",
    items: [
      "LLM integration (OpenAI, Gemini)",
      "Model Context Protocol (MCP)",
      "Agentic AI frameworks",
      "Structured outputs",
      "Natural-language querying",
    ],
  },
  {
    category: "Backend",
    items: ["FastAPI", "Django", "REST APIs", "OOP"],
  },
];

export const certifications = [
  {
    name: "LLM Engineering with Structured Outputs",
    issuer: "Weights & Biases",
    year: 2025,
  },
  {
    name: "CI/CD for Machine Learning (GitOps)",
    issuer: "Weights & Biases",
    year: 2024,
  },
  { name: "Azure AI Fundamentals", issuer: "Microsoft", year: 2024 },
  {
    name: "Applying Machine Learning and AI Services on AWS",
    issuer: "Cloud Academy",
    year: 2023,
  },
  { name: "Engineer Data in Google Cloud", issuer: "Google", year: 2023 },
];

export const education = [
  {
    institution: "Universidad Nacional Autónoma de México (UNAM)",
    degree: "Specialization, Data Science",
    start: 2019,
    end: 2020,
  },
  {
    institution: "Universidad Nacional Autónoma de México (UNAM)",
    degree: "Bachelor's degree, Economics",
    start: 2015,
    end: 2021,
  },
];

export const projects = [
  {
    name: "Datos Transporte CDMX",
    description:
      "Open data pipelines for Mexico City public transport (Metrobús, then Metro).",
    url: "https://github.com/dar4datascience/Datos-Transporte-CDMX",
    tags: ["Python", "Open data", "ETL"],
  },
  {
    name: "AWS SAM Cultura CDMX",
    description:
      "Serverless data pipeline for Mexico City cultural events built with AWS SAM.",
    url: "https://github.com/dar4datascience/AWS-SAM-Cultura-CDMX",
    tags: ["AWS SAM", "Lambda", "Serverless"],
  },
  {
    name: "Dynamic QR Code on a Shoestring",
    description: "Low-cost dynamic QR code redirect service.",
    url: "https://github.com/dar4datascience/Dynamic-QR-code-on-a-shoestring",
    tags: ["Serverless", "Cost optimization"],
  },
  {
    name: "Demo Shiny Gemini",
    description: "R Shiny application integrated with the Gemini API.",
    url: "https://github.com/dar4datascience/Demo-Shiny-Gemini",
    tags: ["R", "Shiny", "Gemini"],
  },
  {
    name: "Observable Movie Showcase",
    description: "Interactive movie data visualization with Observable.",
    url: "https://github.com/dar4datascience/Observable-Movie-Showcase",
    tags: ["JavaScript", "Observable", "Data viz"],
  },
  {
    name: "Measuring Inequality with Satellite Images",
    description:
      "Research using NASA Black Marble (VNP46) night-light imagery to estimate inequality.",
    url: "https://github.com/dar4datascience/Measuring-Inequality-with-Satellite-Images",
    tags: ["Remote sensing", "Economics", "Python"],
  },
  {
    name: "Curriculum Vitae (automated)",
    description:
      "CV pipeline built with R targets, Quarto, and GitHub Actions, published to GitHub Pages.",
    url: "https://dar4datascience.github.io/Curriculum-Vitae/",
    tags: ["Quarto", "R", "CI/CD"],
  },
];

export const services = [
  {
    name: "Cloud data platform architecture",
    description:
      "Design and build data lakes and warehouses on AWS (Glue, Lambda, Step Functions, DMS) or GCP (BigQuery, Dataform, Dataproc, Dataflow), using medallion architecture and infrastructure as code.",
  },
  {
    name: "ETL/ELT pipeline engineering",
    description:
      "Python and SQL pipelines with CI/CD, testing, monitoring, and cost optimization; batch and streaming (Kafka, DMS, Pub/Sub).",
  },
  {
    name: "Analytics engineering & BI automation",
    description:
      "Self-service analytics with Power BI, Tableau, Looker, or ThoughtSpot, including BI deployment pipelines and natural-language querying.",
  },
  {
    name: "AI integration for data teams",
    description:
      "LLM and MCP integrations that let agents and business users query governed data safely; AI-enhanced documentation and automation.",
  },
  {
    name: "Cost & performance optimization",
    description:
      "Query tuning, workload right-sizing, and asset decommissioning with measurable savings (USD 1M+ annual at Rackspace; ~40% compute reduction at TeamStation AI).",
  },
];

// Answer-first FAQ. Questions mirror likely Google / AI Overview queries.
export const faq: { question: string; answer: string }[] = [
  {
    question: "Who is Daniel Amieva Rodriguez?",
    answer:
      "Daniel Amieva Rodriguez is a Senior Data Engineer from Mexico City, Mexico, with 6+ years of experience building data platforms on AWS and GCP. He currently works at TeamStation AI and previously held data and BI engineering roles at Rackspace Technology, Baz Super App, DiDi Food, and DGTIC UNAM.",
  },
  {
    question: "What does Daniel Amieva Rodriguez do?",
    answer:
      "He architects cloud data lakes and warehouses, builds Python and SQL ETL/ELT pipelines with CI/CD, optimizes query and compute costs, and integrates LLM and MCP tooling so business users and AI agents can query governed data.",
  },
  {
    question: "Is Daniel Amieva Rodriguez a data engineer?",
    answer:
      "Yes. Daniel Amieva Rodriguez is a Senior Data Engineer. His official titles have included Senior Data Engineer (TeamStation AI), Business Intelligence Engineer IV (Rackspace Technology), Senior BI Engineer (Baz Super App), and Data Engineer / BI Lead (DiDi Food).",
  },
  {
    question: "What technologies does Daniel Amieva Rodriguez specialize in?",
    answer:
      "Python, SQL, PySpark, AWS (Glue, Lambda, Step Functions, DMS, SAM), GCP (BigQuery, Dataform, Dataproc, Dataflow), Databricks and Delta Lake, DuckDB, Kafka, PostgreSQL, GitHub Actions, Terraform, and LLM/MCP integration.",
  },
  {
    question: "Where is Daniel Amieva Rodriguez based?",
    answer:
      "Mexico City, Mexico. He works remotely with international clients and is fluent in English and a native Spanish speaker.",
  },
  {
    question: "What is Daniel Amieva Rodriguez's education?",
    answer:
      "A Bachelor's degree in Economics (2015–2021) and a Specialization in Data Science (2019–2020), both from the Universidad Nacional Autónoma de México (UNAM).",
  },
  {
    question: "What measurable results has Daniel Amieva Rodriguez delivered?",
    answer:
      "Estimated annual savings exceeding USD 1,000,000 from BigQuery optimization and asset decommissioning at Rackspace Technology; Power BI deployment time cut from 60 to 2 minutes; ~40% compute cost and ~60% processing-time reduction on AWS at TeamStation AI; 40% faster Spark SQL jobs at DiDi Food.",
  },
  {
    question: "How can I contact Daniel Amieva Rodriguez?",
    answer:
      "Email danielamieva@dar4datascience.com, or connect on LinkedIn at linkedin.com/in/dar-4-ds. Code is on GitHub at github.com/dar4datascience.",
  },
  {
    question: "What is dar4datascience?",
    answer:
      "dar4datascience is the online handle of Daniel Amieva Rodriguez (D.A.R. for data science). It is used for his GitHub account, this website, and his data engineering projects.",
  },
];
