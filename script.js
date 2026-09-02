const rootPrefix = location.pathname.includes("/posts/") ||
  location.pathname.includes("/categories/") ||
  location.pathname.includes("/about/")
  ? "../"
  : "";

function applyTheme() {
  const saved = localStorage.getItem("theme") || "dark";
  document.documentElement.dataset.theme = saved;
  document.querySelectorAll(".theme-toggle").forEach(button => {
    button.textContent = saved === "light" ? "☾" : "◐";
    button.setAttribute("aria-label", saved === "light" ? "Switch to dark mode" : "Switch to light mode");
  });
}

function byDate(a, b) {
  return new Date(b.date) - new Date(a.date);
}

function makeCard(post) {
  return `
    <article class="post-card">
      <a class="post-copy" href="${rootPrefix}${post.url}">
        <h2>${post.title}</h2>
        <p>${post.excerpt}</p>
        <div class="meta">
          <span>▣ ${post.date}</span>
          <span>▱ ${post.category}, ${post.tags.slice(0, 2).join(", ")}</span>
        </div>
      </a>
    </article>
  `;
}

function uniqueSorted(values) {
  return [...new Set(values)].sort((a, b) => a.localeCompare(b));
}

function renderStats() {
  const target = document.querySelector("#homeStats");
  if (!target) return;

  const events = uniqueSorted(posts.map(post => post.tags[0] || post.category));
  const topics = uniqueSorted(posts.map(post => post.tags[1] || "Writeup"));
  const years = uniqueSorted(posts.map(post => String(new Date(post.date).getFullYear())));
  const pdfCount = posts.filter(post =>
    post.url.includes("ritsec-ctf-") ||
    post.url.includes("sillyctf-") ||
    post.url.includes("swampctf-2025-") ||
    post.url.includes("uw-stout-ctf-") ||
    post.url.includes("unikl-miit-internal-ctf-2024-")
  ).length;

  target.innerHTML = [
    ["Writeups", posts.length],
    ["CTFs", events.length],
    ["Categories", topics.length],
    ["PDFs", pdfCount],
    ["Years", years.join("-")]
  ].map(([label, value]) => `
    <div class="stat-pill">
      <strong>${value}</strong>
      <span>${label}</span>
    </div>
  `).join("");
}

function populateFilters() {
  const eventFilter = document.querySelector("#eventFilter");
  const topicFilter = document.querySelector("#topicFilter");
  if (!eventFilter || !topicFilter) return;

  const events = uniqueSorted(posts.map(post => post.tags[0] || post.category));
  const topics = uniqueSorted(posts.map(post => post.tags[1] || "Writeup"));

  eventFilter.innerHTML = `<option value="">All events</option>` +
    events.map(event => `<option value="${event}">${event}</option>`).join("");
  topicFilter.innerHTML = `<option value="">All categories</option>` +
    topics.map(topic => `<option value="${topic}">${topic}</option>`).join("");
}

function renderHome(list = posts) {
  const target = document.querySelector("#postCards");
  if (!target) return;
  target.innerHTML = [...list].sort(byDate).map(makeCard).join("") || `<p class="empty">No writeups found.</p>`;
}

function renderRails() {
  const recent = document.querySelector("#recentPosts");
  if (recent) {
    recent.innerHTML = [...posts].sort(byDate).slice(0, 5)
      .map(post => `<a href="${rootPrefix}${post.url}">${post.title}</a>`)
      .join("");
  }
}

function slug(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function renderGroups() {
  const target = document.querySelector("#groupList");
  if (!target) return;
  const eventGroups = posts.reduce((groups, post) => {
    const event = post.tags[0] || "CTF";
    const topic = post.tags[1] || "Writeup";
    groups[event] ||= {};
    groups[event][topic] ||= [];
    groups[event][topic].push(post);
    return groups;
  }, {});

  target.innerHTML = Object.entries(eventGroups)
    .sort(([, aTopics], [, bTopics]) => {
      const aNewest = Math.max(...Object.values(aTopics).flat().map(post => new Date(post.date)));
      const bNewest = Math.max(...Object.values(bTopics).flat().map(post => new Date(post.date)));
      return bNewest - aNewest;
    })
    .map(([event, topics], index) => {
      const eventPosts = Object.values(topics).flat().sort(byDate);
      return `
        <details class="category-dropdown event-dropdown">
          <summary class="group-row event-row">
            <span class="folder">▱</span>
            <strong>${event}</strong>
            <span>${eventPosts.length} ${eventPosts.length === 1 ? "writeup" : "writeups"}</span>
            <span class="chevron">⌄</span>
          </summary>
          <div class="topic-list">
            ${Object.entries(topics).sort(([a], [b]) => a.localeCompare(b)).map(([topic, entries]) => `
              <details class="topic-dropdown">
                <summary class="topic-row">
                  <span>▸</span>
                  <strong>${topic}</strong>
                  <small>${entries.length}</small>
                </summary>
                <div class="compact-list nested-list">
                  ${[...entries].sort(byDate).map(post => `<a href="${rootPrefix}${post.url}"><span>${post.title}</span><time>${post.date}</time></a>`).join("")}
                </div>
              </details>
            `).join("")}
          </div>
        </details>
      `;
    }).join("");
}

function wireSearch() {
  const input = document.querySelector("#searchInput");
  const eventFilter = document.querySelector("#eventFilter");
  const topicFilter = document.querySelector("#topicFilter");
  const clearFilters = document.querySelector("#clearFilters");

  function applyFilters() {
    const query = input ? input.value.trim().toLowerCase() : "";
    const event = eventFilter ? eventFilter.value : "";
    const topic = topicFilter ? topicFilter.value : "";
    const filtered = posts.filter(post => {
      const matchesQuery = !query ||
      [post.title, post.excerpt, post.category, ...post.tags].join(" ").toLowerCase().includes(query)
      const matchesEvent = !event || post.tags[0] === event;
      const matchesTopic = !topic || post.tags[1] === topic;
      return matchesQuery && matchesEvent && matchesTopic;
    });
    renderHome(filtered);
  }

  if (input) input.addEventListener("input", applyFilters);
  if (eventFilter) eventFilter.addEventListener("change", applyFilters);
  if (topicFilter) topicFilter.addEventListener("change", applyFilters);
  if (clearFilters) {
    clearFilters.addEventListener("click", () => {
      if (input) input.value = "";
      if (eventFilter) eventFilter.value = "";
      if (topicFilter) topicFilter.value = "";
      renderHome(posts);
    });
  }
}

function wireThemeToggle() {
  applyTheme();
  document.querySelectorAll(".theme-toggle").forEach(button => {
    button.addEventListener("click", () => {
      const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", next);
      applyTheme();
    });
  });
}

wireThemeToggle();
renderStats();
populateFilters();
renderHome();
renderRails();

if (location.pathname.includes("/categories/")) {
  renderGroups();
}

wireSearch();
