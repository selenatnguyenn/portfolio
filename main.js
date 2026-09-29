(function () {
  const data = window.PORTFOLIO;
  const $ = (sel) => document.querySelector(sel);

  const escapeHtml = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

  const ICONS = {
    github:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.83 1.19 3.09 0 4.41-2.7 5.38-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z"/></svg>',
    linkedin:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>',
    email:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.24-8 5-8-5V6l8 5 8-5v2.24z"/></svg>',
    external:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42L17.59 5H14V3zM5 5h5v2H5v12h12v-5h2v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"/></svg>',
    folder:
      '<svg class="folder" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"/></svg>',
  };

  const tags = (list = []) =>
    `<ul class="tags">${list.map((t) => `<li class="tag">${escapeHtml(t)}</li>`).join("")}</ul>`;

  const { links } = data;

  // ---------- Hero ----------
  document.title = `${data.name} — ${data.role}`;
  $("#brand").textContent = `<${data.name.split(" ")[0]} />`;
  $("#availability").textContent = data.availability || "";
  $("#hero-name").textContent = `Hi, I'm ${data.name}.`;
  $("#hero-role").textContent = data.role + (data.location ? ` based in ${data.location}.` : ".");
  $("#hero-tagline").textContent = data.tagline;

  const actionButtons = [
    `<a class="btn btn-primary" href="#projects">View my work</a>`,
    links.resume
      ? `<a class="btn btn-secondary" href="${escapeHtml(links.resume)}" target="_blank" rel="noopener">Résumé</a>`
      : "",
  ].join("");
  $("#hero-actions").innerHTML = actionButtons;

  $("#contact-actions").innerHTML = [
    links.email ? `<a class="btn btn-primary" href="mailto:${escapeHtml(links.email)}">Say hello</a>` : "",
    links.resume
      ? `<a class="btn btn-secondary" href="${escapeHtml(links.resume)}" target="_blank" rel="noopener">Download résumé</a>`
      : "",
  ].join("");

  const socialHtml = [
    ["github", links.github, "GitHub"],
    ["linkedin", links.linkedin, "LinkedIn"],
    ["email", links.email && `mailto:${links.email}`, "Email"],
  ]
    .filter(([, href]) => href)
    .map(
      ([icon, href, label]) =>
        `<li><a href="${escapeHtml(href)}" aria-label="${label}" ${
          icon === "email" ? "" : 'target="_blank" rel="noopener"'
        }>${ICONS[icon]}</a></li>`
    )
    .join("");
  $("#hero-social").innerHTML = socialHtml;
  $("#footer-social").innerHTML = socialHtml;
  $("#footer-text").textContent = `© ${new Date().getFullYear()} ${data.name}`;

  // ---------- About & skills ----------
  $("#about-text").innerHTML = data.about.map((p) => `<p>${escapeHtml(p)}</p>`).join("");
  $("#skills").innerHTML = Object.entries(data.skills)
    .map(([group, items]) => `<div class="skill-group"><h3>${escapeHtml(group)}</h3>${tags(items)}</div>`)
    .join("");

  // ---------- Experience ----------
  $("#experience-list").innerHTML = data.experience
    .map(
      (job) => `
      <li class="timeline-item reveal">
        <div class="timeline-head">
          <h3>${escapeHtml(job.title)} <span class="at">@ ${escapeHtml(job.company)}</span></h3>
          <span class="meta mono">${escapeHtml(job.dates)}</span>
        </div>
        ${job.location ? `<div class="meta">${escapeHtml(job.location)}</div>` : ""}
        <ul class="bullets">${job.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}</ul>
        ${tags(job.tech)}
      </li>`
    )
    .join("");

  // ---------- Projects ----------
  const grid = $("#project-grid");
  grid.innerHTML = data.projects
    .map(
      (p) => `
      <article class="project-card reveal${p.featured ? " featured" : ""}" data-tech="${escapeHtml(
        (p.tech || []).join("|")
      )}">
        <div class="project-top">
          ${ICONS.folder}
          <div class="project-links">
            ${
              p.github
                ? `<a href="${escapeHtml(p.github)}" target="_blank" rel="noopener" aria-label="${escapeHtml(
                    p.name
                  )} source code">${ICONS.github}</a>`
                : ""
            }
            ${
              p.demo
                ? `<a href="${escapeHtml(p.demo)}" target="_blank" rel="noopener" aria-label="${escapeHtml(
                    p.name
                  )} live demo">${ICONS.external}</a>`
                : ""
            }
          </div>
        </div>
        <h3>${escapeHtml(p.name)}${p.featured ? '<span class="featured-badge mono">★ featured</span>' : ""}</h3>
        <p>${escapeHtml(p.description)}</p>
        ${tags(p.tech)}
      </article>`
    )
    .join("");

  const allTech = [...new Set(data.projects.flatMap((p) => p.tech || []))].sort((a, b) => a.localeCompare(b));
  const filters = $("#project-filters");
  filters.innerHTML = ["All", ...allTech]
    .map(
      (t, i) =>
        `<button class="filter-btn" type="button" data-filter="${escapeHtml(t)}" aria-pressed="${i === 0}">${escapeHtml(
          t
        )}</button>`
    )
    .join("");
  filters.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    const f = btn.dataset.filter;
    filters.querySelectorAll(".filter-btn").forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
    grid.querySelectorAll(".project-card").forEach((card) => {
      card.hidden = f !== "All" && !card.dataset.tech.split("|").includes(f);
    });
  });

  // ---------- Education ----------
  $("#education-list").innerHTML = data.education
    .map(
      (e) => `
      <div class="edu-card reveal">
        <div class="timeline-head">
          <h3>${escapeHtml(e.school)}</h3>
          <span class="meta mono">${escapeHtml(e.dates)}</span>
        </div>
        <div class="meta">${escapeHtml(e.degree)}</div>
        ${e.details?.length ? `<ul>${e.details.map((d) => `<li>${escapeHtml(d)}</li>`).join("")}</ul>` : ""}
      </div>`
    )
    .join("");

  // ---------- Theme toggle ----------
  const root = document.documentElement;
  $("#theme-toggle").addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
  });

  // ---------- Mobile nav ----------
  const navToggle = $(".nav-toggle");
  const navLinks = $("#nav-links");
  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
  navLinks.addEventListener("click", (e) => {
    if (e.target.closest("a")) {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });

  // ---------- Header border on scroll ----------
  const header = $(".site-header");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ---------- Reveal on scroll ----------
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("visible");
            io.unobserve(en.target);
          }
        }),
      { threshold: 0.1 }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("visible"));
  }
})();
