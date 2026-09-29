// ============================================================
//  PORTFOLIO CONTENT — edit this file to update the site.
//  Everything on the page is rendered from this object.
//  Anything marked TODO is placeholder text to replace.
// ============================================================

window.PORTFOLIO = {
  name: "Selena Nguyen",
  role: "Software Engineer",
  tagline:
    "I build reliable, well-tested software — from backend services to polished user interfaces.", // TODO
  location: "College Park, MD", // TODO
  availability: "Open to new-grad & internship SWE roles", // TODO (set to "" to hide)

  links: {
    email: "you@example.com", // TODO
    github: "https://github.com/selenatnguyenn",
    linkedin: "https://www.linkedin.com/in/your-handle", // TODO
    resume: "resume.pdf", // TODO: add resume.pdf to the repo root (or set to "" to hide)
  },

  about: [
    // TODO: 1–3 short paragraphs.
    "I'm a software engineer who enjoys turning ambiguous problems into clean, maintainable systems. I care about readable code, thoughtful APIs, and shipping things people actually use.",
    "Outside of class and work, I'm usually building side projects, contributing to open source, or learning a new corner of the stack.",
  ],

  skills: {
    // TODO: keep only what you're comfortable being interviewed on.
    Languages: ["Python", "Java", "JavaScript", "TypeScript", "C", "SQL"],
    "Frameworks & Libraries": ["React", "Node.js", "Express", "Flask", "Spring Boot"],
    "Tools & Platforms": ["Git", "Docker", "Linux", "AWS", "PostgreSQL", "GitHub Actions"],
  },

  experience: [
    // TODO: most recent first. Lead bullets with impact + numbers.
    {
      title: "Software Engineering Intern",
      company: "Company Name",
      location: "City, ST",
      dates: "Jun 2025 – Aug 2025",
      bullets: [
        "Built a REST service in Java/Spring Boot that reduced report generation time by 40%.",
        "Added integration tests and CI checks, raising coverage from 55% to 85%.",
        "Collaborated with a team of 6 engineers using code review and agile sprints.",
      ],
      tech: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
    },
    {
      title: "Undergraduate Teaching Assistant",
      company: "University of Maryland",
      location: "College Park, MD",
      dates: "Jan 2024 – Present",
      bullets: [
        "Led weekly discussion sections for 30+ students on data structures and algorithms.",
        "Wrote autograder test suites used across 400+ submissions per project.",
      ],
      tech: ["Java", "JUnit"],
    },
  ],

  projects: [
    // TODO: 3–6 of your strongest projects. `featured: true` gets a wider card.
    {
      name: "Project One",
      description:
        "A full-stack web app that does something useful. Explain the problem, your solution, and the result in two sentences.",
      tech: ["React", "Node.js", "PostgreSQL"],
      github: "https://github.com/selenatnguyenn",
      demo: "",
      featured: true,
    },
    {
      name: "Project Two",
      description:
        "A command-line tool or library. Mention a hard technical challenge you solved and how.",
      tech: ["Python", "Docker"],
      github: "https://github.com/selenatnguyenn",
      demo: "",
    },
    {
      name: "Project Three",
      description:
        "A systems / algorithms project — e.g. a shell, a compiler, a distributed key-value store.",
      tech: ["C", "Linux"],
      github: "https://github.com/selenatnguyenn",
      demo: "",
    },
    {
      name: "Project Four",
      description: "A hackathon project or mobile app. Include awards or user counts if you have them.",
      tech: ["TypeScript", "AWS"],
      github: "https://github.com/selenatnguyenn",
      demo: "",
    },
  ],

  education: [
    {
      school: "University of Maryland, College Park", // TODO
      degree: "B.S. in Computer Science", // TODO
      dates: "Expected May 2027", // TODO
      details: [
        "GPA: X.XX / 4.00", // TODO (remove if you'd rather not list it)
        "Relevant coursework: Data Structures, Algorithms, Computer Systems, Operating Systems, Databases, Software Engineering",
      ],
    },
  ],
};
