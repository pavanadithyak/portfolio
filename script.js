var projects = [
  {
    id: 0, name: "OceanDisaster Forecast", label: "OceanForecast", color: "#1e6eb5",
    tags: ["PyTorch", "Bayesian LSTM", "ARIMA", "Streamlit", "ML", "Live"],
    desc: "Real-time ocean disaster forecasting dashboard. Fetches live marine data from the Open-Meteo Marine API \u2192 dual ML pipeline: Bayesian LSTM with Monte Carlo Dropout for uncertainty quantification + ARIMA baseline \u2192 multi-parameter risk assessment engine with configurable thresholds \u2192 interactive Plotly visualizations. Built for maritime professionals and coastal disaster response.",
    live: "https://huggingface.co/spaces/paq1/oceanforecast", liveLabel: "LIVE",
    github: "github.com/pavanadithyak/Oceandisaster-forecast", status: "live"
  },
  {
    id: 1, name: "Doc-Analyser", label: "Doc-Analyser", color: "#7c3aed",
    tags: ["FastAPI", "Groq", "Gemini", "Claude", "Docker", "NER"],
    desc: "Upload any PDF, DOCX, or image \u2192 multi-model LLM pipeline (Groq / Gemini / Claude) \u2192 NER, classification, confidence-scored summaries \u2192 structured JSON output. Automatic retry logic when model returns malformed responses. Dockerized. Built in 24 hours for a hackathon.",
    live: "https://huggingface.co/spaces/paq1/doc-analyzer", liveLabel: "LIVE",
    github: "github.com/pavanadithyak/Doc-analyser", status: "live"
  },
  {
    id: 2, name: "devlog-ai", label: "devlog-ai", color: "#22c55e",
    tags: ["Gemini", "Streaming", "Vanilla JS", "Live"],
    desc: "Paste a git diff, commit log, or error trace \u2192 streaming Gemini API generates changelogs, PR descriptions, standup updates, or postmortems instantly. Zero backend. Fully client-side. Built in one sprint.",
    live: "https://pavanadithyak.github.io/devlog-ai", liveLabel: "LIVE",
    github: "github.com/pavanadithyak/devlog-ai", status: "live"
  },
  {
    id: 3, name: "Agent Rocky", label: "Agent Rocky", color: "#f97316",
    tags: ["Electron", "Groq", "Multi-model", "Desktop Agent"],
    desc: "Pixel-art AI companion that lives on your desktop. Walks across your taskbar, opens a retro terminal chat window, jazz-dances when the AI responds. Multi-model support (Groq, Zen). Rate-limit aware. Built in one sprint to explore what ambient AI feels like when it\u2019s not confined to a browser tab.",
    live: "", liveLabel: "",
    github: "github.com/paq67/agent-rocky", status: "none"
  },
  {
    id: 4, name: "Mirror-Mind", label: "Mirror-Mind", color: "#ec4899",
    tags: ["TypeScript", "Node", "AI", "Full-stack"],
    desc: "AI-powered mind mirror app. Reflects your thoughts back with structured insight and pattern recognition. TypeScript full-stack with modular architecture.",
    live: "", liveLabel: "",
    github: "github.com/paq67/Mirror-Mind", status: "none"
  },
  {
    id: 5, name: "AtomQuest Portal", label: "AtomQuest", color: "#06b6d4",
    tags: ["React", "Node", "PostgreSQL", "JWT", "Docker"],
    desc: "Production-grade employee goal-tracking portal. JWT auth, 3-tier RBAC (employee / manager / admin), goal approval workflow, quarterly achievements, audit logs, CSV/JSON export. 24 passing backend tests. Full docker-compose.",
    live: "", liveLabel: "",
    github: "github.com/pavanadithyak/atomquest-portal", status: "none"
  }
];

var DEFAULT_ACHIEVEMENTS = [
  { id: "a0", name: "Appizap Runner Up", type: "hackathon", desc: "Runner up at Appizap — multi-model LLM pipeline for document analysis. Built Doc-Analyser in 24 hours.", link: "https://drive.google.com/file/d/1e8VDDMWdktKpahxcHPDG9H6KTouWpUhp/view", date: "2025-11" },
  { id: "a1", name: "comspro", type: "hackathon", desc: "ECE project showcase — presented projects and secured recognition.", link: "https://drive.google.com/file/d/18ykzEhYLEz3-ABF2GbXLySUXa_zH6oES/view", date: "2026-01" },
  { id: "a2", name: "Databricks Certified Generative AI Engineer Associate", type: "certification", desc: "Validates expertise in applying generative AI using Databricks. Covers LLMOps, RAG architecture, model fine-tuning, and production deployment patterns.", link: "https://drive.google.com/file/d/15Qwp9th5lPER3gd4ONC9e2sXmkL_BK6Y/view", date: "2026-04" },
  { id: "a3", name: "Databricks Certified Data Engineer Associate", type: "certification", desc: "Validates data engineering skills on the Databricks Lakehouse Platform. Topics include ETL pipelines, Delta Lake optimizations, and data governance.", link: "https://drive.google.com/file/d/1kgnLP66SciiRmibSdlXNQIz1pBocz5aY/view", date: "2026-05" },
  { id: "a4", name: "ICISD'26 — Paper Presenter", type: "hackathon", desc: "Presented research paper at the International Conference on Intelligent Systems and Data Science (ICISD 2026).", link: "https://drive.google.com/file/d/1kctCbCzjStXjDZzt_38a6xbRyhJq4zCs/view", date: "2026-03" },
  { id: "a5", name: "Upagraha Hackathon", type: "hackathon", desc: "Built AtomQuest Portal — employee goal-tracking platform with JWT auth, RBAC, goal approval workflow, and CSV/JSON export.", link: "https://drive.google.com/file/d/10JMYIT-n1wVHQOFAPLiVbr5aM8cGpXWK/view", date: "2025-12" }
];

(function () {
  var canvas = document.getElementById('star-field');
  var ctx = canvas.getContext('2d');

  function drawStars() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Base 200 stars — full viewport
    for (var i = 0; i < 200; i++) {
      var x = Math.random() * canvas.width;
      var y = Math.random() * canvas.height;
      var s = Math.random() * 2 + 1;
      ctx.fillStyle = 'rgba(255,255,255,' + (Math.random() * 0.7 + 0.2) + ')';
      ctx.beginPath();
      ctx.arc(x, y, s / 2, 0, Math.PI * 2);
      ctx.fill();
    }

    // 66 extra stars biased to left/right 30% — denser side margins
    for (var j = 0; j < 66; j++) {
      var x2;
      if (Math.random() < 0.5) {
        x2 = Math.random() * canvas.width * 0.3;
      } else {
        x2 = canvas.width * 0.7 + Math.random() * canvas.width * 0.3;
      }
      var y2 = Math.random() * canvas.height;
      var s2 = Math.random() * 2 + 1;
      ctx.fillStyle = 'rgba(255,255,255,' + (Math.random() * 0.7 + 0.2) + ')';
      ctx.beginPath();
      ctx.arc(x2, y2, s2 / 2, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  drawStars();
  window.addEventListener('resize', function(){ drawStars(); renderAchievementStars(); });

  // Asteroid belt
  var svgNS = 'http://www.w3.org/2000/svg';
  var belt = document.getElementById('asteroid-belt');
  var svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('width', '700');
  svg.setAttribute('height', '700');
  svg.setAttribute('viewBox', '0 0 700 700');
  var g = document.createElementNS(svgNS, 'g');
  for (var i = 0; i < 60; i++) {
    var angle = Math.random() * Math.PI * 2;
    var r = 340 + (Math.random() - 0.5) * 40;
    var cx = 350 + Math.cos(angle) * r;
    var cy = 350 + Math.sin(angle) * r;
    var dot = document.createElementNS(svgNS, 'circle');
    dot.setAttribute('cx', cx);
    dot.setAttribute('cy', cy);
    dot.setAttribute('r', Math.random() * 1 + 0.3);
    dot.setAttribute('fill', 'rgba(255,255,255,' + (Math.random() * 0.4 + 0.1) + ')');
    g.appendChild(dot);
  }
  svg.appendChild(g);
  belt.appendChild(svg);

  // Planet click / project card
  var selectedOrbit = null;
  var overlay = document.getElementById('project-overlay');
  var card = document.getElementById('project-card');
  var cardTitle = document.getElementById('card-title');
  var cardTags = document.getElementById('card-tags');
  var cardDesc = document.getElementById('card-desc');
  var cardLinks = document.getElementById('card-links');
  var cardStatus = document.getElementById('card-status');
  var solarSystem = document.getElementById('solar-system');

  function showCard(id) {
    var p = projects[id];
    card.style.setProperty('--card-color', p.color);
    cardTitle.textContent = p.name;
    cardTags.innerHTML = p.tags.map(function (t) { return '<span>' + t + '</span>'; }).join('');
    cardDesc.textContent = p.desc;
    var linksHTML = '';

    if (p.status === 'live') {
      cardStatus.textContent = '\u25cf LIVE';
      cardStatus.className = 'status-live';
      linksHTML += '<a href="' + p.live + '" target="_blank" class="btn-live">\u2192 Live Demo</a>';
    } else if (p.status === 'deploying') {
      cardStatus.textContent = '\u25cf DEPLOYING';
      cardStatus.className = 'status-deploying';
      linksHTML += '<span class="btn-deploying">Deploying \u2014 HF Spaces in progress</span>';
    } else {
      cardStatus.textContent = 'PROJECT';
      cardStatus.className = 'status-none';
    }

    linksHTML += '<a href="https://' + p.github + '" target="_blank" class="btn-github">GitHub</a>';
    cardLinks.innerHTML = linksHTML;
    overlay.classList.add('active');
  }

  function hideCard() {
    overlay.classList.remove('active');
    if (selectedOrbit) {
      selectedOrbit.classList.remove('selected');
      selectedOrbit = null;
    }
  }

  document.querySelectorAll('.planet-body').forEach(function (el) {
    el.addEventListener('click', function (e) {
      var orbit = this.closest('.orbit');
      if (selectedOrbit && selectedOrbit !== orbit) {
        selectedOrbit.classList.remove('selected');
      }
      orbit.classList.add('selected');
      selectedOrbit = orbit;
      var id = Number(orbit.dataset.planet);
      solarSystem.classList.add('dimmed');
      document.querySelectorAll('.fixed-ui').forEach(function (f) { f.classList.add('dimmed'); });
      showCard(id);
      e.stopPropagation();
    });
  });

  overlay.addEventListener('click', function (e) {
    if (e.target === this) {
      solarSystem.classList.remove('dimmed');
      document.querySelectorAll('.fixed-ui').forEach(function (el) { el.classList.remove('dimmed'); });
      hideCard();
    }
  });

  document.getElementById('card-close').addEventListener('click', function () {
    solarSystem.classList.remove('dimmed');
    document.querySelectorAll('.fixed-ui').forEach(function (el) { el.classList.remove('dimmed'); });
    hideCard();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      if (overlay.classList.contains('active')) {
        solarSystem.classList.remove('dimmed');
        document.querySelectorAll('.fixed-ui').forEach(function (el) { el.classList.remove('dimmed'); });
        hideCard();
      }
      if (typeof closeAchievementModal === 'function') closeAchievementModal();
      if (typeof closeAddForm === 'function') closeAddForm();
    }
  });

  // List / Solar toggle
  var toggleBtn = document.getElementById('safe-mode-toggle');
  toggleBtn.addEventListener('click', function () {
    document.body.classList.toggle('list-mode');
    this.textContent = document.body.classList.contains('list-mode') ? '\u229e Solar view' : '\u229e List view';
  });

  var closeBtn = document.getElementById('list-view-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', function () {
      document.body.classList.remove('list-mode');
      document.getElementById('safe-mode-toggle').textContent = '\u229e List view';
    });
  }

  // Sun click captions
  var sun = document.getElementById('sun');
  var captions = [
    'ECE undergrad. Builder.',
    'AI agents. Full-stack systems. Real problems.',
    'I build things that work.',
    'Making AI useful, one project at a time.'
  ];
  var captionIndex = -1;
  sun.addEventListener('click', function () {
    captionIndex = (captionIndex + 1) % captions.length;
    var tip = document.querySelector('#sun-tooltip .tagline');
    if (!tip) {
      tip = document.createElement('div');
      tip.className = 'tagline';
      var role = document.querySelector('#sun-tooltip .role');
      role.parentNode.insertBefore(tip, role.nextSibling);
    }
    tip.innerHTML = '\u201c' + captions[captionIndex] + '\u201d';
  });

  if (window.innerWidth < 768) {
    document.body.classList.add('list-mode');
  }

  /* ─── ACHIEVEMENT STARS ────────────────────────────────────── */

  function loadAchievements(){
    try {
      var stored = localStorage.getItem('portfolio_achievements');
      return stored ? JSON.parse(stored) : JSON.parse(JSON.stringify(DEFAULT_ACHIEVEMENTS));
    } catch(e){ return JSON.parse(JSON.stringify(DEFAULT_ACHIEVEMENTS)); }
  }

  function saveAchievements(arr){
    try { localStorage.setItem('portfolio_achievements', JSON.stringify(arr)); } catch(e){}
  }

  var achievements = loadAchievements();

  function drivePreviewUrl(url){
    if(!url) return '';
    var m = url.match(/\/file\/d\/([^\/\?]+)/);
    if(m) return 'https://drive.google.com/file/d/' + m[1] + '/preview';
    return url;
  }

  var starsContainer = document.getElementById('achievement-stars-layer');
  if(!starsContainer){
    starsContainer = document.createElement('div');
    starsContainer.id = 'achievement-stars-layer';
    document.body.appendChild(starsContainer);
  }

  var starPositions = [];

  function seedPositions(count){
    while(starPositions.length < count){
      var side = Math.random();
      var px, py;
      if(side < 0.4){
        px = 2 + Math.random() * 18;
      } else if(side < 0.8){
        px = 80 + Math.random() * 18;
      } else {
        px = 5 + Math.random() * 90;
      }
      py = 5 + Math.random() * 90;
      starPositions.push({px: px, py: py});
    }
  }

  function renderAchievementStars(){
    seedPositions(achievements.length);
    starsContainer.innerHTML = '';
    achievements.forEach(function(a, idx){
      var pos = starPositions[idx];
      var el = document.createElement('div');
      el.className = 'achievement-star';
      el.dataset.id = a.id;
      el.style.left = pos.px + '%';
      el.style.top  = pos.py + '%';
      el.setAttribute('title', a.name);
      el.innerHTML = '<span class="achievement-star-glyph"></span>';
      el.addEventListener('click', function(e){
        e.stopPropagation();
        openAchievementModal(a);
      });
      starsContainer.appendChild(el);
    });
  }

  renderAchievementStars();

  /* ── Achievement modal ── */

  var achModal = document.getElementById('achievement-modal');
  if(!achModal){
    achModal = document.createElement('div');
    achModal.id = 'achievement-modal';
    achModal.innerHTML =
      '<div id="achievement-modal-inner">' +
        '<button id="achievement-modal-close">&times;</button>' +
        '<div id="achievement-modal-type"></div>' +
        '<div id="achievement-modal-name"></div>' +
        '<div id="achievement-modal-date"></div>' +
        '<div id="achievement-modal-desc"></div>' +
        '<div id="achievement-modal-img-wrap">' +
          '<iframe id="achievement-modal-iframe" allowfullscreen></iframe>' +
        '</div>' +
        '<div id="achievement-modal-actions">' +
          '<a id="achievement-modal-link" href="#" target="_blank">View Certificate &rarr;</a>' +
          '<button id="achievement-modal-delete">Delete</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(achModal);
  }

  var currentAchId = null;

  function openAchievementModal(a){
    currentAchId = a.id;
    document.getElementById('achievement-modal-type').textContent =
      a.type === 'certification' ? '\u2713 Certification' : '\u2605 Hackathon / Award';
    document.getElementById('achievement-modal-name').textContent = a.name;
    document.getElementById('achievement-modal-date').textContent = a.date || '';
    document.getElementById('achievement-modal-desc').textContent = a.desc || '';
    var iframe = document.getElementById('achievement-modal-iframe');
    if(a.link){
      iframe.src = drivePreviewUrl(a.link);
      document.getElementById('achievement-modal-img-wrap').style.display = 'block';
      document.getElementById('achievement-modal-link').href = a.link;
      document.getElementById('achievement-modal-link').style.display = 'inline-flex';
    } else {
      iframe.src = '';
      document.getElementById('achievement-modal-img-wrap').style.display = 'none';
      document.getElementById('achievement-modal-link').style.display = 'none';
    }
    achModal.classList.add('active');
  }

  function closeAchievementModal(){
    achModal.classList.remove('active');
    document.getElementById('achievement-modal-iframe').src = '';
    currentAchId = null;
  }

  document.getElementById('achievement-modal-close').addEventListener('click', closeAchievementModal);
  achModal.addEventListener('click', function(e){ if(e.target === this) closeAchievementModal(); });

  document.getElementById('achievement-modal-delete').addEventListener('click', function(){
    if(!currentAchId) return;
    achievements = achievements.filter(function(a){ return a.id !== currentAchId; });
    starPositions.splice(achievements.length);
    saveAchievements(achievements);
    renderAchievementStars();
    closeAchievementModal();
  });

  /* ── Add Star form ── */

  var addBtn = document.getElementById('add-star-btn');
  var addForm = document.getElementById('add-star-form');

  if(!addForm){
    addForm = document.createElement('div');
    addForm.id = 'add-star-form';
    addForm.innerHTML =
      '<div id="add-star-form-inner">' +
        '<button id="add-star-form-close">&times;</button>' +
        '<div id="add-star-form-title">Add Achievement</div>' +
        '<input id="star-input-name" type="text" placeholder="Name" />' +
        '<input id="star-input-link" type="text" placeholder="Certificate link (Google Drive)" />' +
        '<div id="star-type-row">' +
          '<label><input type="radio" name="star-type" value="hackathon" checked /> \u2605 Hackathon</label>' +
          '<label><input type="radio" name="star-type" value="certification" /> \u2713 Certification</label>' +
        '</div>' +
        '<textarea id="star-input-desc" placeholder="Short description (optional)"></textarea>' +
        '<div id="add-star-form-btns">' +
          '<button id="star-submit-btn">Add Star</button>' +
          '<button id="star-cancel-btn">Cancel</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(addForm);
  }

  function openAddForm(){
    addForm.classList.add('active');
    document.getElementById('star-input-name').focus();
  }
  function closeAddForm(){
    addForm.classList.remove('active');
    document.getElementById('star-input-name').value = '';
    document.getElementById('star-input-link').value = '';
    document.getElementById('star-input-desc').value = '';
    document.querySelector('input[name="star-type"][value="hackathon"]').checked = true;
  }

  if(addBtn) addBtn.addEventListener('click', openAddForm);
  document.getElementById('add-star-form-close').addEventListener('click', closeAddForm);
  document.getElementById('star-cancel-btn').addEventListener('click', closeAddForm);
  addForm.addEventListener('click', function(e){ if(e.target === this) closeAddForm(); });

  document.getElementById('star-submit-btn').addEventListener('click', function(){
    var name = document.getElementById('star-input-name').value.trim();
    if(!name) return;
    var type = document.querySelector('input[name="star-type"]:checked').value;
    var link = document.getElementById('star-input-link').value.trim();
    var desc = document.getElementById('star-input-desc').value.trim();
    var id = 'a' + Date.now();
    var now = new Date();
    var date = now.getFullYear() + '-' + String(now.getMonth()+1).padStart(2,'0');
    achievements.push({id:id, name:name, type:type, link:link, desc:desc, date:date});
    saveAchievements(achievements);
    renderAchievementStars();
    closeAddForm();
  });

})();