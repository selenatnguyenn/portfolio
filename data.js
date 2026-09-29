// ============================================================
//  PORTFOLIO CONTENT — edit this file to update the site.
//  Everything on the page is rendered from this object.
// ============================================================

window.PORTFOLIO = {
  name: "Selena Nguyen",
  role: "University of Maryland Information Science graduate",
  tagline:
    "I build Python data pipelines, relational databases, and accessible web pages, and I'm looking for a full-time software engineering role.",
  location: "College Park, MD",
  availability: "Open to full-time software engineering roles", // set to "" to hide

  links: {
    email: "tnguye63@terpmail.umd.edu",
    github: "https://github.com/selenatnguyenn",
    linkedin: "https://www.linkedin.com/in/selenatnguyenn/",
    resume: "", // add resume.pdf to the repo root, then set this to "resume.pdf"
  },

  about: [
    "I'm a recent Information Science graduate from the University of Maryland with object-oriented programming experience in Java and Python, relational database design, and end-to-end ETL pipeline development.",
    "Right now I build and validate Python data pipelines that benchmark frontier AI models. I reconcile messy, multi-format datasets into deterministic ground truth and write rubrics that catch subtle methodology errors.",
    "I've also taught 200+ students as a teaching assistant and rebuilt a research lab's website from scratch, so I care about explaining technical work clearly and building things people can actually use.",
  ],

  skills: {
    Languages: ["Java", "Python", "SQL", "JavaScript", "HTML/CSS"],
    "Libraries & Tools": [
      "Git/GitHub",
      "pandas",
      "scikit-learn",
      "matplotlib",
      "PySpark",
      "SharePoint",
      "Power Automate",
      "Airtable",
    ],
    Concepts: [
      "OOP",
      "Data structures",
      "ETL",
      "Relational database design",
      "REST APIs",
      "JSON",
      "Agile",
    ],
  },

  experience: [
    {
      title: "AI Evaluation Analyst",
      company: "Handshake AI",
      location: "Remote · Multimango Platform",
      dates: "May 2026 – Present",
      bullets: [
        "Build Python pipelines that ingest, clean, join, and reconcile 10+ file data packages spanning CSV, XLSX, JSON, and PDF (including sources over 10,000 rows) to establish deterministic ground truth for frontier model benchmarks.",
        "Design 25+ criterion evaluation rubrics and engineer adversarial anomaly-detection edge cases that expose faulty methodology, such as rates computed on the wrong denominator.",
        "Enforce a quantitative quality gate: benchmarks ship only after two independent model runs average below 70% against the rubric, requiring iterative debugging of each task.",
        "Evaluate multimodal model outputs (audio, visual, text) against multi-dimensional rubrics for RLHF.",
      ],
      tech: ["Python", "pandas", "JSON", "CSV/XLSX"],
    },
    {
      title: "Teaching Assistant, INST201",
      company: "UMD College of Information",
      location: "College Park, MD",
      dates: "Jan 2025 – Jun 2025",
      bullets: [
        "Supported 200+ undergraduates in Introduction to Information Science, holding weekly office hours and explaining technical concepts to students with mixed programming backgrounds.",
        "Built review materials and managed course content and grading workflows in Canvas and Google Workspace.",
      ],
      tech: ["Canvas", "Google Workspace"],
    },
    {
      title: "Research Assistant & Web Developer",
      company: "Walsh Lab, UMD",
      location: "College Park, MD (Hybrid)",
      dates: "May 2024 – Sep 2024",
      bullets: [
        "Led the redesign of the lab's research website, owning scope and execution: restructured navigation and content hierarchy for usability and accessibility, and debugged layout issues across pages.",
        "Self-taught HTML/CSS to expand the project beyond its original scope; organized and documented lab research datasets and presented the finished work to lab supervisors.",
      ],
      tech: ["HTML", "CSS", "Accessibility"],
    },
    {
      title: "Business Office Assistant",
      company: "UMD Dept. of Plant Science & Landscape Architecture",
      location: "College Park, MD",
      dates: "Feb 2023 – May 2026",
      bullets: [
        "Maintained department-wide inventory and asset records and audited staff pay records for discrepancies across 1,000+ processed business documents.",
      ],
      tech: ["Excel"],
    },
  ],

  projects: [
    // Add `github: "https://github.com/..."` or `demo: "https://..."` to show link icons.
    {
      name: "Apartment Rent Prediction Pipeline",
      description:
        "An end-to-end ETL pipeline that cleans and merges public housing and census data, resolving missing values and inconsistent join keys. I engineered features like rent-to-income ratio, trained and evaluated a linear regression model to predict rent, and built visualizations for a non-technical audience.",
      tech: ["Python", "pandas", "scikit-learn", "matplotlib"],
      github: "",
      demo: "",
      featured: true,
    },
    {
      name: "Motor Vehicle Collision Database",
      description:
        "A normalized relational schema with ER diagrams and primary/foreign key constraints, an import path for raw CSV collision records, and multi-table SQL queries with joins and aggregations that surface accident patterns.",
      tech: ["SQL", "ER modeling", "Relational design"],
      github: "",
      demo: "",
    },
    {
      name: "MWBE Compliance Process Automation",
      description:
        "Senior capstone (INST490 iConsultancy) for client South Baltimore Gateway Partnership. I designed the SharePoint architecture and Power Automate workflows that automate manual review and centralize vendor tracking for minority- and women-owned business compliance.",
      tech: ["SharePoint", "Power Automate"],
      github: "",
      demo: "",
    },
    {
      name: "This Portfolio",
      description:
        "A fast, dependency-free personal site in HTML, CSS, and JavaScript, rendered from a single data file, with filterable projects, an accessible layout, and automated deployment to GitHub Pages.",
      tech: ["JavaScript", "HTML/CSS", "GitHub Actions"],
      github: "https://github.com/selenatnguyenn/portfolio",
      demo: "",
    },
  ],

  education: [
    {
      school: "University of Maryland, College Park",
      degree: "B.S. in Information Science",
      dates: "May 2026",
      details: [
        "Relevant coursework: Object-Oriented Programming (Java), Python for Data Science, Database Design & Modeling, Data Science Techniques, Statistics",
        "Leadership & activities: Social Media Manager, Terrapin Record Label · Fundraising Committee, UMD Preventing Sexual Assault · Alpha Delta Pi",
      ],
    },
  ],
};
