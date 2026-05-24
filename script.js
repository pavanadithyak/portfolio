var projects = [
  {id:0,name:"OceanDisaster Forecast",label:"OceanForecast",color:"#1e6eb5",
   tags:["PyTorch","Bayesian LSTM","ARIMA","Streamlit","ML","Live"],
   desc:"Real-time ocean disaster forecasting dashboard. Fetches live marine data from the Open-Meteo Marine API \u2192 dual ML pipeline: Bayesian LSTM with Monte Carlo Dropout for uncertainty quantification + ARIMA baseline \u2192 multi-parameter risk assessment engine with configurable thresholds \u2192 interactive Plotly visualizations. Built for maritime professionals and coastal disaster response.",
   live:"https://huggingface.co/spaces/paq1/oceanforecast",liveLabel:"LIVE",
   github:"github.com/pavanadithyak/Oceandisaster-forecast",status:"live"},
   {id:1,name:"Doc-Analyser",label:"Doc-Analyser",color:"#7c3aed",
    tags:["FastAPI","Groq","Gemini","Claude","Docker","NER"],
    desc:"Upload any PDF, DOCX, or image \u2192 multi-model LLM pipeline (Groq / Gemini / Claude) \u2192 NER, classification, confidence-scored summaries \u2192 structured JSON output. Automatic retry logic when model returns malformed responses. Dockerized. Built in 24 hours for a hackathon.",
    live:"https://huggingface.co/spaces/paq1/doc-analyzer",liveLabel:"LIVE",
    github:"github.com/pavanadithyak/Doc-analyser",status:"live"},
  {id:2,name:"devlog-ai",label:"devlog-ai",color:"#22c55e",
   tags:["Gemini","Streaming","Vanilla JS","Live"],
   desc:"Paste a git diff, commit log, or error trace \u2192 streaming Gemini API generates changelogs, PR descriptions, standup updates, or postmortems instantly. Zero backend. Fully client-side. Built in one sprint.",
   live:"https://pavanadithyak.github.io/devlog-ai",liveLabel:"LIVE",
   github:"github.com/pavanadithyak/devlog-ai",status:"live"},
  {id:3,name:"Agent Rocky",label:"Agent Rocky",color:"#f97316",
   tags:["Electron","Groq","Multi-model","Desktop Agent"],
   desc:"Pixel-art AI companion that lives on your desktop. Walks across your taskbar, opens a retro terminal chat window, jazz-dances when the AI responds. Multi-model support (Groq, Zen). Rate-limit aware. Built in one sprint to explore what ambient AI feels like when it\u2019s not confined to a browser tab.",
   live:"",liveLabel:"",
   github:"github.com/paq67/agent-rocky",status:"none"},
  {id:4,name:"Mirror-Mind",label:"Mirror-Mind",color:"#ec4899",
   tags:["TypeScript","Node","AI","Full-stack"],
   desc:"AI-powered mind mirror app. Reflects your thoughts back with structured insight and pattern recognition. TypeScript full-stack with modular architecture.",
   live:"",liveLabel:"",
   github:"github.com/paq67/Mirror-Mind",status:"none"},
  {id:5,name:"AtomQuest Portal",label:"AtomQuest",color:"#06b6d4",
   tags:["React","Node","PostgreSQL","JWT","Docker"],
   desc:"Production-grade employee goal-tracking portal. JWT auth, 3-tier RBAC (employee / manager / admin), goal approval workflow, quarterly achievements, audit logs, CSV/JSON export. 24 passing backend tests. Full docker-compose.",
   live:"",liveLabel:"",
   github:"github.com/pavanadithyak/atomquest-portal",status:"none"}
];

(function(){
  var canvas = document.getElementById('star-field');
  var ctx = canvas.getContext('2d');
  function drawStars(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(var i = 0; i < 200; i++){
      var x = Math.random() * canvas.width;
      var y = Math.random() * canvas.height;
      var s = Math.random() * 2 + 1;
      ctx.fillStyle = 'rgba(255,255,255,' + (Math.random() * 0.7 + 0.2) + ')';
      ctx.beginPath();
      ctx.arc(x, y, s / 2, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  drawStars();
  window.addEventListener('resize', drawStars);

  var svgNS = 'http://www.w3.org/2000/svg';
  var belt = document.getElementById('asteroid-belt');
  var svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('width', '700');
  svg.setAttribute('height', '700');
  svg.setAttribute('viewBox', '0 0 700 700');
  var g = document.createElementNS(svgNS, 'g');
  for(var i = 0; i < 60; i++){
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

  var selectedOrbit = null;
  var overlay = document.getElementById('project-overlay');
  var card = document.getElementById('project-card');
  var cardTitle = document.getElementById('card-title');
  var cardTags = document.getElementById('card-tags');
  var cardDesc = document.getElementById('card-desc');
  var cardLinks = document.getElementById('card-links');
  var cardStatus = document.getElementById('card-status');
  var solarSystem = document.getElementById('solar-system');

  function showCard(id){
    var p = projects[id];
    card.style.setProperty('--card-color', p.color);
    cardTitle.textContent = p.name;
    cardTags.innerHTML = p.tags.map(function(t){ return '<span>' + t + '</span>'; }).join('');
    cardDesc.textContent = p.desc;
    var linksHTML = '';

    if(p.status === 'live'){
      cardStatus.textContent = '\u25cf LIVE';
      cardStatus.className = 'status-live';
      linksHTML += '<a href="' + p.live + '" target="_blank" class="btn-live">\u2192 Live Demo</a>';
    } else if(p.status === 'deploying'){
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

  function hideCard(){
    overlay.classList.remove('active');
    if(selectedOrbit){
      selectedOrbit.classList.remove('selected');
      selectedOrbit = null;
    }
  }

  document.querySelectorAll('.planet-body').forEach(function(el){
    el.addEventListener('click', function(e){
      var orbit = this.closest('.orbit');
      if(selectedOrbit && selectedOrbit !== orbit){
        selectedOrbit.classList.remove('selected');
      }
      orbit.classList.add('selected');
      selectedOrbit = orbit;
      var id = Number(orbit.dataset.planet);
      solarSystem.classList.add('dimmed');
      document.querySelectorAll('.fixed-ui').forEach(function(f){ f.classList.add('dimmed'); });
      showCard(id);
      e.stopPropagation();
    });
  });

  overlay.addEventListener('click', function(e){
    if(e.target === this){
      solarSystem.classList.remove('dimmed');
      document.querySelectorAll('.fixed-ui').forEach(function(el){ el.classList.remove('dimmed'); });
      hideCard();
    }
  });

  document.getElementById('card-close').addEventListener('click', function(){
    solarSystem.classList.remove('dimmed');
    document.querySelectorAll('.fixed-ui').forEach(function(el){ el.classList.remove('dimmed'); });
    hideCard();
  });

  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && overlay.classList.contains('active')){
      solarSystem.classList.remove('dimmed');
      document.querySelectorAll('.fixed-ui').forEach(function(el){ el.classList.remove('dimmed'); });
      hideCard();
    }
  });

  var toggleBtn = document.getElementById('safe-mode-toggle');
  toggleBtn.addEventListener('click', function(){
    document.body.classList.toggle('list-mode');
    this.textContent = document.body.classList.contains('list-mode') ? '\u229e Solar view' : '\u229e List view';
  });

  var closeBtn = document.getElementById('list-view-close');
  if(closeBtn){
    closeBtn.addEventListener('click', function(){
      document.body.classList.remove('list-mode');
      document.getElementById('safe-mode-toggle').textContent = '\u229e List view';
    });
  }

  var sun = document.getElementById('sun');
  var captions = [
    'ECE undergrad. Builder.',
    'AI agents. Full-stack systems. Real problems.',
    'I build things that work.',
    'Making AI useful, one project at a time.'
  ];
  var captionIndex = -1;
  sun.addEventListener('click', function(){
    captionIndex = (captionIndex + 1) % captions.length;
    var tip = document.querySelector('#sun-tooltip .tagline');
    if(!tip){
      tip = document.createElement('div');
      tip.className = 'tagline';
      var role = document.querySelector('#sun-tooltip .role');
      role.parentNode.insertBefore(tip, role.nextSibling);
    }
    tip.innerHTML = '\u201c' + captions[captionIndex] + '\u201d';
  });

  if(window.innerWidth < 768){
    document.body.classList.add('list-mode');
  }
})();
