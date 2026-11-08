export const profile = {
  name: 'Ganesh Dussa',
  role: 'Software Developer',
  focus: 'LLM Agents & Mainframe Modernization (learning)',
  location: 'Hyderabad, India',
  phone: '+91 8179504819',
  email: 'ganeshdussa20@gmail.com',
  linkedin: 'https://linkedin.com/in/ganeshdussa', 
  github: 'https://github.com/ganesh18h',
  blog: 'https://medium.com/@ganeshdussa20',
  
  shortSummary:
    "I work at the intersection of mainframe engineering and modern AI. From COBOL and JCL on z/OS to Java, Python, and LLM-based systems, I focus on solving problems across technology generations. Currently exploring agentic engineering and modern tooling for z/OS bringing automation, intelligence, and developer experience to systems built long before today's AI era.",

  summary:
    "Software developer with hands-on experience across Java, Python, AI, and IBM Z technologies. I build and experiment with software across application development, AI, and enterprise systems. My Java work includes JavaFX applications and a cosine-similarity based plagiarism detection system. In Python, I've developed LLM-powered tools focused on practical automation and document processing. On IBM z/OS, I work with COBOL, JCL, DB2, and VSAM, including end-to-end batch processing and job execution. Alongside development, I contribute to the IBM Z community through technical writing and my involvement in the IBM Z Advocacy Program. I'm also exploring LLM agents, Zowe, and modern approaches to connecting mainframe environments with contemporary developer tooling. Outside of core development, I'm exploring quantitative research through WorldQuant BRAIN — building and testing alpha signals as a way to sharpen my data and statistical thinking. My focus is on building reliable software, understanding systems at a deeper level, and continuously working across technologies that solve real engineering problems.",
  
  stats: [
    { label: 'IBM Z ADVOCACY RANK', value: '#9 GLOBAL' },
    { label: 'ADVOCACY POINTS', value: '225' },
    { label: 'WORLDQUANT BRAIN', value: 'GOLD LEVEL' },
    { label: 'GRADUATED', value: '2025' },
    { label: 'CGPA', value: '7.02' },
  ],
}


export const resumeBuilds = [
  {
    id: 'general',
    filename: 'Ganesh_Dussa_Resume.pdf',
    stack: 'Java · Python · SQL · Generative AI ',
  },
  {
    id: 'mainframe',
    filename: 'Ganesh_Dussa_Mainframe_Resume.pdf',
    tag: 'stable · production-grade',
    stack: 'COBOL · JCL · DB2 · VSAM',
  },
]


export const experience = [
  {
    company: 'Mad Sensei Studios',
    role: 'Software Developer Intern',
    location: 'Remote',
    period: 'Jun 2026 — Oct 2026',
    bullets: [
      'Shipped 5+ front-end features to the live company website using JavaScript, HTML, and CSS, working closely with a cross-functional development team.',
      'Integrated a payment gateway module into the website, enabling secure online transactions and streamlining the checkout flow for end users.',
      'Built responsive UI components as part of a 4-person team, improving site functionality and delivering a consistent user experience across devices.',
      'Delivered iterative website updates in 2-week Agile sprints, using Git-based version control and peer code reviews to maintain code quality.',
    ],
  },
]


export const projects = [
  {
    name: 'Mainframe Batch Processing & DB2 Operations',
    tagline: 'End-to-end COBOL/JCL batch pipeline on IBM z/OS',
    stack: ['COBOL', 'JCL', 'DB2', 'VSAM'],
    bullets: [
      'Developed COBOL programs on IBM z/OS including PERFORM loops, COMP variables, 88-level condition names, and structured file I/O across VSAM (KSDS/ESDS) and non-VSAM (PS) datasets.',
      'Designed and executed multi-step JCL jobs for dataset allocation, sorting, merging, and file processing using IEBGENER, SORT, and IDCAMS to build fully functional batch pipelines.',
      'Managed DB2 tables with 50+ test records, performing Load/Unload operations and writing embedded SQL queries via SPUFI — achieving 100% verified data integrity across all output files.',
      'Bridged legacy COBOL business logic with Java-based application layers, and documented the full development journey in a widely read Medium technical article.',
    ],
  },
  {
    name: 'Resume Tailor',
    tagline: 'JD-aware resume automation, powered by an LLM',
    stack: ['Python', 'NLP', 'Gemini API', 'PDF / DOCX Parsing', 'Git'],
    url: 'https://ai-resume-optimizer-eight.vercel.app/',
    bullets: [
      'Built an end-to-end automation tool that removes manual resume editing — users upload a job description and existing resume, and the system instantly identifies matched and missing keywords.',
      'Implemented keyword extraction and comparison logic using NLP techniques, surfacing matched (green) and missing (red) keywords side-by-side.',
      'Designed an interactive selection step where chosen missing keywords are sent to an LLM API, which regenerates the resume with the keywords woven in naturally — preserving structure and formatting in under 5 seconds.',
    ],
  },
  {
    name: 'Plagiarism Checker Tool',
    tagline: 'Similarity scoring engine for text documents',
    stack: ['Java', 'Cosine Similarity', 'Text Processing', 'OOPs'],
    bullets: [
      'Built a Java tool that compares two text documents and returns a similarity percentage, helping surface copied content quickly.',
      'Pre-processed input by stripping punctuation, lowercasing and tokenizing text to keep similarity results accurate and consistent.',
      'Applied the Cosine Similarity algorithm to measure document closeness and validated results against manually calculated expected values.',
    ],
  },
  {
    name: 'Employee Payroll Management System',
    tagline: 'Desktop payroll app with a JavaFX GUI',
    stack: ['Java', 'JavaFX'],
    bullets: [
      'Built a desktop payroll application using Java with a JavaFX-based GUI for employee salary data input and display.',
      'Automated salary calculation logic for gross pay, net pay, overtime, and deductions using arithmetic and conditional logic.',
      'Implemented input validation to reduce incorrect data entries before salary processing.',
    ],
  },
]


export const skills = [
  {
    group: 'core_development',
    items: ['Java (OOPs, Collections, Multithreading)', 'Python', 'COBOL', 'JavaScript (ES6+, DOM)', 'SQL', 'HTML', 'CSS'],
  },
  {
    group: 'mainframe',
    items: ['IBM z/OS', 'JCL', 'DB2 for z/OS', 'VSAM (KSDS, ESDS, RRDS)', 'ISPF', 'SPUFI', 'IEBGENER', 'SORT', 'IDCAMS'],
  },
  {
    group: 'databases',
    items: ['MySQL', 'JDBC', 'Query Optimization', 'Joins', 'Stored Procedures', 'DBMS Design & Normalization'],
  },
  {
    group: 'ai_engineering',
    items: [
      'LLM API Integration (Claude, Gemini, OpenAI)',
      'Prompt Engineering',
      'LLM Agents (learning)',
      'Mainframe Modernization',
      'Zowe (learning)',
      'Cloud Platforms (learning)',
      'Retrieval-Augmented Generation (RAG)',
      'LangChain',
    ],
  },
  {
    group: 'engineering_practices',
    items: ['SDLC', 'Agile / Scrum', 'REST API Development', 'Unit Testing', 'Debugging', 'Code Review', 'Git / GitHub'],
  },
  {
    group: 'tools',
    items: ['Eclipse', 'VS Code', 'MySQL Workbench', 'Postman', 'JavaFX'],
  },
]


export const education = [
  {
    school: 'Narsimha Reddy Engineering College',
    location: 'Hyderabad, India',
    degree: 'B.Tech — Computer Science & Engineering',
    detail: 'CGPA: 7.02 (JNTUH)',
    period: '2022 — 2025',
  },
  {
    school: 'Arjun College of Technology & Sciences',
    location: 'Hyderabad, India',
    degree: 'Diploma — Electrical & Electronics Engineering',
    detail: 'CGPA: 6.67 (SBTET)',
    period: '2019 — 2022',
  },
  {
    school: "S.T. Anne's High School",
    location: 'Nakrekal, India',
    degree: 'Secondary School Certificate (SSC)',
    detail: 'GPA: 9.2',
    period: '2018 — 2019',
  },
]

export const certifications = [
  {
    name: 'Goldman Sachs Engineering Virtual Experience',
    issuer: 'Forage, 2025',
    detail: 'Applied Agile methodology, Git-based version control, and SDLC phases in a real-world engineering simulation.',
  },
  {
    name: 'SQL Certification',
    issuer: 'Great Learning',
    detail: 'Queries, joins, subqueries, stored procedures, and DBMS normalization concepts.',
  },
  {
    name: 'Core Java Programming Certification',
    issuer: 'Self-directed',
    detail: 'Java SE, OOPs (all 4 pillars), Collections Framework, Exception Handling, and Multithreading.',
  },
  {
    name: 'Generative AI Fundamentals',
    issuer: 'Coursera, 2025',
    detail: 'Introduction to large language models, prompt engineering techniques, and AI application development using LLM APIs.',
  },
  {
    name: 'IBM Mainframe Fundamentals',
    issuer: 'Self-directed',
    detail: 'JCL syntax and execution, COBOL program structure, and DB2 relational database management concepts.',
  },
  {
    name: 'Claude 101',
    issuer: 'Anthropic Academy',
    detail: 'Foundations of working with Claude — core capabilities, use cases, and best practices for everyday use.',
    url: 'https://verify.skilljar.com/c/yzy2ynh2727i',
  },
  {
    name: 'AI Fluency: Framework & Foundations',
    issuer: 'Anthropic Academy',
    detail: 'Core framework for working effectively and responsibly with AI systems like Claude.',
    url: 'https://verify.skilljar.com/c/aemsasomwy74',
  },
  {
    name: 'Claude with the Anthropic API',
    issuer: 'Anthropic Academy',
    detail: 'Building applications on the Anthropic API — messages, tool use, and integrating Claude into software.',
    url: 'https://verify.skilljar.com/c/y5f2pms8397b',
  },
  {
    name: 'Introduction to Model Context Protocol',
    issuer: 'Anthropic Academy',
    detail: 'Fundamentals of MCP — connecting Claude to external tools, data sources, and services.',
    url: 'https://verify.skilljar.com/c/dtwckuuqk4u9',
  },
]

// achievements — badges, digital credentials, and milestones.
// `type` drives the little tag on each card: 'badge' | 'certificate' | 'milestone'
// `url` can be an external credential link (Credly, etc.) OR a local file under /public
// (e.g. a PDF certificate) — both render identically, just open in a new tab.
// New badges/certs just get appended here — the grid in Achievements.jsx handles the rest,
// no component changes needed as more come in.
export const achievements = [
  {
    type: 'milestone',
    title: 'IBM Z Advocacy Hub — Global Rank #9',
    issuer: 'IBM Z Advocacy Program',
    date: 'Q1 2026',
    detail: 'Earned 225 Advocacy Points through active contribution to the IBM Z & LinuxONE community.',
  },
  {
    type: 'badge',
    title: 'WorldQuant Challenge® — Gold Level',
    issuer: 'WorldQuant BRAIN',
    date: '2026',
    detail: 'Reached Gold Level in the WorldQuant Challenge®, progressing from Bronze and Silver. Certificate presented by WorldQuant.',
    url: `${import.meta.env.BASE_URL}WorldQuant_Challenge_Gold_Certificate.pdf`,
  },
  {
    type: 'badge',
    title: 'WorldQuant Challenge® — Silver Level',
    issuer: 'WorldQuant BRAIN',
    date: '2026',
    detail: 'Reached Silver Level in the WorldQuant Challenge®. Certificate presented by WorldQuant.',
    url: `${import.meta.env.BASE_URL}WorldQuant_Silver_Certificate.pdf`,
  },
  {
    type: 'badge',
    title: 'Enterprise COBOL Programming with VSCode',
    issuer: 'IBM',
    date: '2026',
    detail: 'Verified digital badge for enterprise COBOL development using VS Code tooling on IBM Z.',
    url: 'https://www.credly.com/badges/6e6fd30a-282a-4063-8289-b91897e7419f/public_url',
  },
  {
    type: 'badge',
    title: 'IBM Z Xplore — Concepts',
    issuer: 'IBM',
    date: '2026',
    detail: 'Verified digital badge covering foundational IBM Z and mainframe systems concepts.',
    url: 'https://www.credly.com/badges/c909440a-bb34-4f6a-b83e-4fca7f0fd603/public_url',
  },
  {
    type: 'badge',
    title: 'IBM Digital Badge — Community Contributor (Level 1)',
    issuer: 'IBM',
    date: '2026',
    detail: 'Awarded by IBM for the IBM Z and LinuxONE Community Contributor program.',
    url: 'https://www.credly.com/badges/7e24b0e3-369f-4eef-b071-ba9105c575de/public_url',
  },
  {
    type: 'badge',
    title: 'IBM Digital Badge — Community Contributor (Level 2)',
    issuer: 'IBM',
    date: '2026',
    detail: 'Awarded by IBM for the IBM Z and LinuxONE Community Contributor program.',
    url: 'https://www.credly.com/badges/8736164e-5bde-4e7c-8589-834c3757ddda',
  },
  {
    type: 'milestone',
    title: 'Technical Writer, Medium',
    issuer: 'Self-published',
    date: 'Ongoing',
    detail: 'Writing about mainframe development — enterprise batch processing on IBM z/OS, and my own journey into mainframe engineering.',
    url: 'https://medium.com/@ganeshdussa20',
  },
]