export const profile = {
  name: 'Ganesh Dussa',
  role: 'Software Developer',
  focus: 'Teaching mainframes new AI tricks (learning!)',
  location: 'Hyderabad, India',
  phone: '+91 8179504819',
  email: 'ganeshdussa20@gmail.com',
  linkedin: 'https://linkedin.com/in/ganeshdussa', 
  github: 'https://github.com/ganesh18h',
  blog: 'https://medium.com/@ganeshdussa20',
  
  shortSummary:
    "I live where mainframes meet modern AI. COBOL and JCL on z/OS? Yep. Java, Python and LLM agents? Also yep. I love teaching old-school systems new tricks, and right now I'm poking at agentic engineering and fresh tooling for z/OS, so machines built long before anyone said 'prompt engineering' can finally chat back.",

  summary:
    "Software developer fluent in Java, Python, AI and IBM Z, so basically a polyglot who speaks both 'curly braces' and 'column 7 of a COBOL card'. I build things across application development, AI and enterprise systems. On the Java side: JavaFX apps and a cosine-similarity plagiarism detector that sniffs out copy-paste like a bloodhound. In Python: LLM-powered tools that automate the boring stuff and wrangle documents so you don't have to. On IBM z/OS: COBOL, JCL, DB2 and VSAM, including end-to-end batch pipelines from job submit all the way to a satisfying RC=0. I also hang out in the IBM Z community, writing technical articles and contributing through the IBM Z Advocacy Program. Lately I'm exploring LLM agents, Zowe, and ways to introduce mainframes to modern developer tooling (they get along better than you'd think). On the side, I'm exploring quantitative research on WorldQuant BRAIN, building and testing alpha signals to sharpen my data and statistical thinking. Bottom line: I like reliable software, knowing how things work under the hood, and hopping between technologies to solve real engineering problems.",

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
    tag: 'stable · has seen things',
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
      'Shipped 5+ front-end features to the live company website (JavaScript, HTML, CSS) alongside a cross-functional team. Real users, real clicks, nowhere to hide.',
      'Wired a payment gateway into the website so money moves securely and checkout stops feeling like an escape room.',
      'Built responsive UI components with a 4-person team, so the site looks good on everything from a phone to a "why is your monitor that big" display.',
      'Lived in 2-week Agile sprints: Git, peer code reviews and small iterative releases, with code quality kept intact.',
    ],
  },
]


export const projects = [
  {
    name: 'Mainframe Batch Processing & DB2 Operations',
    tagline: 'COBOL + JCL batch pipeline on IBM z/OS: old-school, still cool',
    stack: ['COBOL', 'JCL', 'DB2', 'VSAM'],
    bullets: [
      'Wrote COBOL programs on IBM z/OS with PERFORM loops, COMP variables, 88-level condition names and structured file I/O across VSAM (KSDS/ESDS) and non-VSAM (PS) datasets.',
      'Designed and ran multi-step JCL jobs that allocate, sort, merge and process datasets using IEBGENER, SORT and IDCAMS, turning a pile of files into a working batch pipeline.',
      'Managed DB2 tables with 50+ test records, ran Load/Unload operations and wrote embedded SQL via SPUFI, with 100% verified data integrity across all output files. Every record accounted for.',
      'Bridged legacy COBOL business logic with Java-based application layers (old meets new) and wrote up the whole journey in a widely read Medium technical article.',
    ],
  },
  {
    name: 'Resume Tailor',
    tagline: 'Your resume, now with actual awareness of the job description',
    stack: ['Python', 'NLP', 'Gemini API', 'PDF / DOCX Parsing', 'Git'],
    url: 'https://ai-resume-optimizer-eight.vercel.app/',
    bullets: [
      'Built an end-to-end automation tool that kills manual resume editing: upload a job description and your resume, and it instantly shows which keywords match and which are missing.',
      'Implemented keyword extraction and comparison with NLP techniques, showing matched (green) and missing (red) keywords side-by-side, like a traffic light for your resume.',
      'Designed an interactive step where you pick the missing keywords, an LLM API weaves them in naturally, and your original structure and formatting survive. All in under 5 seconds.',
    ],
  },
  {
    name: 'Plagiarism Checker Tool',
    tagline: 'A bloodhound for copy-pasted text',
    stack: ['Java', 'Cosine Similarity', 'Text Processing', 'OOPs'],
    bullets: [
      'Built a Java tool that compares two text documents and returns a similarity percentage, so copied content gets caught fast.',
      'Pre-processed input by stripping punctuation, lowercasing and tokenizing the text, so results stay accurate and consistent (no sneaky commas allowed).',
      'Applied the Cosine Similarity algorithm to measure how close two documents really are, and checked results against hand-calculated expected values. Math, but verified.',
    ],
  },
  {
    name: 'Employee Payroll Management System',
    tagline: 'Desktop payroll app with a JavaFX GUI, because paychecks should add up',
    stack: ['Java', 'JavaFX'],
    bullets: [
      'Built a desktop payroll application in Java with a JavaFX GUI for entering and viewing employee salary data.',
      'Automated gross pay, net pay, overtime and deductions with arithmetic and conditional logic, so nobody has to do payroll math by hand.',
      'Added input validation to catch bad entries before they turn into bad paychecks.',
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
    detail: 'Practiced Agile, Git and the full SDLC in a real-world engineering simulation. Dress rehearsal for the real thing.',
  },
  {
    name: 'SQL Certification',
    issuer: 'Great Learning',
    detail: 'Queries, joins, subqueries, stored procedures and DBMS normalization. Tables, but make them behave.',
  },
  {
    name: 'Core Java Programming Certification',
    issuer: 'Self-directed',
    detail: 'Java SE, all 4 OOP pillars, Collections, Exception Handling and Multithreading. Many threads, zero tangles.',
  },
  {
    name: 'Generative AI Fundamentals',
    issuer: 'Coursera, 2025',
    detail: 'How large language models think, how to prompt them well, and how to build apps on LLM APIs.',
  },
  {
    name: 'IBM Mainframe Fundamentals',
    issuer: 'Self-directed',
    detail: 'JCL syntax and execution, COBOL program structure and DB2 concepts. The mainframe starter pack.',
  },
  {
    name: 'Claude 101',
    issuer: 'Anthropic Academy',
    detail: 'Foundations of working with Claude: what it can do, where it shines and how to use it well every day.',
    url: 'https://verify.skilljar.com/c/yzy2ynh2727i',
  },
  {
    name: 'AI Fluency: Framework & Foundations',
    issuer: 'Anthropic Academy',
    detail: 'A framework for working with AI effectively and responsibly, so humans stay firmly in charge.',
    url: 'https://verify.skilljar.com/c/aemsasomwy74',
  },
  {
    name: 'Claude with the Anthropic API',
    issuer: 'Anthropic Academy',
    detail: 'Building on the Anthropic API: messages, tool use and plugging Claude into real software.',
    url: 'https://verify.skilljar.com/c/y5f2pms8397b',
  },
  {
    name: 'Introduction to Model Context Protocol',
    issuer: 'Anthropic Academy',
    detail: 'MCP fundamentals: giving Claude a toolbox, a library card and a phone book.',
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
    detail: 'Earned 225 Advocacy Points by showing up and contributing to the IBM Z & LinuxONE community.',
  },
  {
    type: 'badge',
    title: 'WorldQuant Challenge® — Gold Level',
    issuer: 'WorldQuant BRAIN',
    date: '2026',
    detail: 'Reached Gold Level in the WorldQuant Challenge®, climbing from Bronze to Silver to Gold. Certificate presented by WorldQuant.',
    url: `${import.meta.env.BASE_URL}WorldQuant_Challenge_Gold_Certificate.pdf`,
  },
  {
    type: 'badge',
    title: 'WorldQuant Challenge® — Silver Level',
    issuer: 'WorldQuant BRAIN',
    date: '2026',
    detail: 'Reached Silver Level in the WorldQuant Challenge®. The stop on the way to Gold. Certificate presented by WorldQuant.',
    url: `${import.meta.env.BASE_URL}WorldQuant_Silver_Certificate.pdf`,
  },
  {
    type: 'badge',
    title: 'Enterprise COBOL Programming with VSCode',
    issuer: 'IBM',
    date: '2026',
    detail: 'Verified badge for enterprise COBOL in VS Code on IBM Z. Yes, COBOL in a modern editor.',
    url: 'https://www.credly.com/badges/6e6fd30a-282a-4063-8289-b91897e7419f/public_url',
  },
  {
    type: 'badge',
    title: 'IBM Z Xplore — Concepts',
    issuer: 'IBM',
    date: '2026',
    detail: 'Verified badge covering IBM Z and mainframe fundamentals. Welcome to the big iron.',
    url: 'https://www.credly.com/badges/c909440a-bb34-4f6a-b83e-4fca7f0fd603/public_url',
  },
  {
    type: 'badge',
    title: 'IBM Digital Badge — Community Contributor (Level 1)',
    issuer: 'IBM',
    date: '2026',
    detail: 'Awarded by IBM for contributing to the IBM Z and LinuxONE community. Gold-star energy.',
    url: 'https://www.credly.com/badges/7e24b0e3-369f-4eef-b071-ba9105c575de/public_url',
  },
  {
    type: 'badge',
    title: 'IBM Digital Badge — Community Contributor (Level 2)',
    issuer: 'IBM',
    date: '2026',
    detail: 'Awarded by IBM for contributing to the IBM Z and LinuxONE community. Gold-star energy.',
    url: 'https://www.credly.com/badges/8736164e-5bde-4e7c-8589-834c3757ddda',
  },
  {
    type: 'milestone',
    title: 'Technical Writer, Medium',
    issuer: 'Self-published',
    date: 'Ongoing',
    detail: 'Writing about mainframes: enterprise batch processing on IBM z/OS and my own journey into mainframe engineering.',
    url: 'https://medium.com/@ganeshdussa20',
  },
]