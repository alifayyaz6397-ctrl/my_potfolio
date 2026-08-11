export const profile = {
  name: "Ali Fayyaz",
  role: "Backend systems, databases, and applied cryptography",
  kicker: "Computer Science — UET Lahore",
  heroDesc:
    "I build software where correctness matters — systems with real data " +
    "integrity constraints, protocols with real security guarantees, and " +
    "pipelines with real failure modes. Most recently: a three-tier " +
    "enterprise application with a fully normalized database, a " +
    "zero-knowledge authentication protocol written from first principles, " +
    "and a retrieval-augmented assistant with production-grade error handling.",
  aboutText:
    "I'm an undergraduate Computer Science student focused on backend " +
    "engineering and data systems. I care most about the parts of software " +
    "that are easy to skip and expensive to skip badly — data modeling, " +
    "transaction integrity, and handling the failure cases that don't show " +
    "up until something goes wrong in production.",
  facts: [
    { key: "School", value: "University of Engineering & Technology, Lahore — B.S. Computer Science" },
    { key: "Location", value: "Lahore, Pakistan" },
    { key: "Focus", value: "Backend engineering, database systems, applied ML/retrieval" },
    { key: "Status", value: "Open to internships" },
  ],
  email: "alifayyaz6397@gmail.com",
  github: "https://github.com/alifayyaz6397-ctrl",
  linkedin: "https://www.linkedin.com/in/ali-fayyaz-01b5a037b/",
};

export const nav = [
  { id: "about", file: "01_about.md", label: "About" },
  { id: "work", file: "02_work/", label: "Work" },
  { id: "education", file: "03_education.md", label: "Education" },
  { id: "skills", file: "04_skills.json", label: "Skills" },
  { id: "contact", file: "05_contact.sh", label: "Contact" },
];

export const work = [
  {
    title: "VisaVault — Visa Consultancy Management System",
    category: "Enterprise systems",
    context: "Database Systems coursework",
    status: "Completed",
    description:
      "A desktop application for visa consultancy agencies, built on a " +
      "strict three-tier architecture that separates the interface, " +
      "business rules, and data access into distinct, independently " +
      "testable layers. It handles client records, document expiry " +
      "tracking, multi-stage renewal workflows, invoicing, and " +
      "appointment scheduling.",
    highlightLabel: "Database design",
    highlight:
      "fifteen tables normalized to third normal form, five views, three " +
      "transactional stored procedures, and seven triggers that write an " +
      "automatic audit log on every critical change.",
    stack: ["C#", ".NET / WinForms", "MySQL 8", "ADO.NET"],
    link: "https://github.com/alifayyaz6397-ctrl",
  },
  {
    title: "Zero-Knowledge Proof Authentication",
    category: "Applied cryptography",
    context: "Independent project",
    status: "Completed",
    description:
      "A C++ implementation of the Schnorr identification protocol: a " +
      "prover demonstrates knowledge of a secret key without ever " +
      "transmitting it, through a commitment, challenge, and response " +
      "exchange that a verifier can check but not reverse.",
    highlightLabel: "What made it hard",
    highlight:
      "C++ has no native input or output support for 128-bit integers, so " +
      "I wrote the conversion layer myself, along with overflow-safe " +
      "modular multiplication, square-and-multiply exponentiation, and a " +
      "Miller-Rabin primality test to validate the modulus.",
    stack: ["C++", "Number theory", "Cryptographic protocols"],
    link: "https://github.com/alifayyaz6397-ctrl",
  },
  {
    title: "Exam Invigilator — Retrieval-Augmented Assistant",
    category: "Applied AI / backend",
    context: "Independent project",
    status: "In progress",
    description:
      "A FastAPI service that answers student questions during live " +
      "exams, strictly scoped to exam rules and logistics. A two-layer " +
      "content-safety guard blocks the model from ever hinting at exam " +
      "content, and technical-issue reports are escalated " +
      "deterministically before the model is ever called.",
    highlightLabel: "Reliability under real API limits",
    highlight:
      "every external call is wrapped with retry logic that reads the " +
      "provider's own quota response to tell a transient rate limit apart " +
      "from a hard daily quota exhaustion, and degrades to a clear " +
      "message instead of a raw server error.",
    stack: ["Python", "FastAPI", "PostgreSQL", "Gemini API", "RAG"],
    link: "https://github.com/alifayyaz6397-ctrl",
  },
];

export const education = {
  time: "In progress",
  school: "University of Engineering & Technology, Lahore",
  degree: "B.S. Computer Science",
  notes: [
    "Relevant coursework: Database Systems, Data Structures & Algorithms, Object-Oriented Programming, Computer Networks",
    "VisaVault was built and evaluated as a Database Systems course project",
  ],
};

export const skills = [
  { category: "languages", items: ["C#", "C++", "Python", "SQL"] },
  { category: "backend_data", items: ["FastAPI", ".NET / WinForms", "MySQL", "PostgreSQL", "ADO.NET"] },
  { category: "other", items: ["Git", "Applied cryptography", "RAG / LLM APIs"] },
];
