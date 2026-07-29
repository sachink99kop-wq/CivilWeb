// ─── DATA ─────────────────────────────────────────────
const projectGroups = [
  { status: 'Upcoming', items: [
    { cat: 'Residential', title: 'Skyline Residency', meta: 'Launching Q1 2027', img: '1541888946425-d81bb19240f5',
      desc: '48-unit high-rise apartments in Tilakwadi with a clubhouse and rooftop garden.' },
    { cat: 'Villa', title: 'Green Valley Villas', meta: 'Bookings open', img: '1580587771525-78b9dba3b914',
      desc: 'A gated community of 20 eco-friendly villas with solar and rainwater harvesting.' },
    { cat: 'Commercial', title: 'Metro Business Hub', meta: 'Planned 2027', img: '1487958449943-2429e8be8625',
      desc: 'A Grade-A office tower with a retail podium and multi-level parking on CBT Road.' },
    { cat: 'Township', title: 'Riverside Township', meta: 'Phase 1 approvals', img: '1600607687939-ce8a6c25118c',
      desc: 'An integrated township of plots, homes, and amenities on the city outskirts.' },
  ]},
  { status: 'Completed', items: [
    { cat: 'Residential', title: 'Kale Residency', meta: 'Delivered 2024', img: '1486406146926-c627a92ad1ab',
      desc: 'A 24-unit premium apartment complex with landscaped courtyards and covered parking.' },
    { cat: 'Commercial', title: 'University Arcade', meta: 'Delivered 2023', img: '1449157291145-7efd050a4d0e',
      desc: 'A four-storey commercial arcade of retail and office units on University Avenue.' },
    { cat: 'Institutional', title: 'Vidya Bhavan Block', meta: 'Delivered 2022', img: '1518005020951-eccb494ad742',
      desc: 'An earthquake-resistant RCC academic block with large, well-lit classrooms.' },
    { cat: 'Restoration', title: 'Heritage Wada Revival', meta: 'Delivered 2021', img: '1460574283810-2aab119d8511',
      desc: 'Structural restoration of a heritage residence with modern reinforcement.' },
  ]},
  { status: 'Ongoing', items: [
    { cat: 'Industrial', title: 'Auto Park Warehouse', meta: '70% complete', img: '1416331108676-a22ccb276e35',
      desc: 'A 40,000 sq. ft. pre-engineered warehouse with mezzanine offices at Desur.' },
    { cat: 'Villa', title: 'Tilakwadi Villas', meta: 'Finishing stage', img: '1568605114967-8130f3a36994',
      desc: 'A row of six contemporary 3-BHK villas designed for natural light and cross-ventilation.' },
    { cat: 'Institutional', title: 'Sadhana School Annexe', meta: 'Structure stage', img: '1523217582562-09d0def993a6',
      desc: 'A new RCC-framed classroom annexe and auditorium under construction.' },
    { cat: 'Commercial', title: 'Corner Court Retail', meta: 'Slab work', img: '1600585154340-be6161a56a0c',
      desc: 'A mixed-use retail and office corner block on Khanapur Road at structural stage.' },
  ]},
];
const IMG = id => `https://images.unsplash.com/photo-${id}?w=800&q=70&auto=format&fit=crop`;

const services = [
  { name: 'Residential Construction', price: 'turnkey',
    desc: 'Individual homes, villas, and apartment buildings — from foundation to finished, handover-ready interiors.' },
  { name: 'Commercial & Industrial', price: 'on request',
    desc: 'Offices, retail arcades, warehouses, and institutional buildings built to code and on schedule.' },
  { name: 'Civil Contracting', price: 'project-based',
    desc: 'RCC framework, structural work, plumbing, and electrical execution for developers and architects.' },
  { name: 'Renovation & Restoration', price: 'from assessment',
    desc: 'Structural repairs, extensions, and heritage restoration that strengthen and modernise existing buildings.' },
  { name: 'Design & Approvals', price: 'consultation',
    desc: 'Architectural drawings, structural design, and end-to-end help with municipal permits and approvals.' },
];

const process = [
  { num: '01', name: 'Consult', desc: 'We meet to understand your land, requirements, and budget, then advise on what is realistic and how to begin.' },
  { num: '02', name: 'Design & Estimate', desc: 'Drawings, material specifications, and a transparent, itemised cost estimate with a clear project timeline.' },
  { num: '03', name: 'Build', desc: 'Skilled crews and on-site engineers execute the work with regular quality checks and progress updates.' },
  { num: '04', name: 'Handover', desc: 'Final inspection, snag-free completion, documentation, and a structural warranty you can rely on.' },
];

const testimonials = [
  { quote: 'They built our family home exactly to budget and handed it over a week early. The finish quality is outstanding even three years on.', author: '— Suresh Patil, Tilakwadi, Belgaum' },
  { quote: 'As an architect I have worked with many contractors. Ravi Kale Builders is one of the few who treat the drawings with real respect.', author: '— Ar. Meena Joshi, Joshi Associates' },
  { quote: 'Our retail arcade was completed on schedule despite the monsoon. Their site discipline and costing transparency won our trust.', author: '— Imran Sayyed, Director, Sayyed Enterprises' },
];

const faqs = [
  { q: 'Which areas do you serve?', a: 'We are based in Belgaum (Belagavi) and take on projects across North Karnataka and nearby districts. For larger commercial or industrial work we travel further on request — get in touch with your location and we will confirm.' },
  { q: 'How is the cost of a project decided?', a: 'After understanding your site and requirements, we provide a transparent, itemised estimate covering materials, labour, and timeline. Residential work is usually offered turnkey at a per-square-foot rate, while commercial and civil contracts are quoted project-by-project.' },
  { q: 'How long will my project take?', a: 'An individual home typically takes 8 to 14 months depending on size and finishes; commercial and institutional projects vary with scale. We commit to a timeline in writing before work begins and keep you updated at every stage.' },
  { q: 'Do you handle plan approvals and permits?', a: 'Yes. We assist with architectural and structural drawings and guide you through municipal approvals and permits, so the paperwork moves in step with the construction.' },
  { q: 'Do you provide a warranty?', a: 'Every completed structure comes with a documented structural warranty, and we remain available for support after handover. Quality materials and proper engineering mean fewer issues for years to come.' },
];

// ─── RENDER HELPERS ───────────────────────────────────
function el(html) { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstChild; }

// Projects (grouped by status)
const worksGroups = document.getElementById('worksGroups');
if (worksGroups) {
  projectGroups.forEach(g => {
    const group = el(`
      <div class="work-group fade-up">
        <div class="work-group-head">
          <span class="work-status work-status--${g.status.toLowerCase()}">${g.status}</span>
          <span class="work-group-line"></span>
          <span class="work-group-count">${g.items.length} Projects</span>
        </div>
        <div class="works-grid"></div>
      </div>`);
    const grid = group.querySelector('.works-grid');
    g.items.forEach(p => {
      grid.appendChild(el(`
        <div class="work-card">
          <div class="work-bg" style="background-image:url('${IMG(p.img)}');background-size:cover;background-position:center"></div>
          <span class="work-tag work-tag--${g.status.toLowerCase()}">${g.status}</span>
          <div class="work-always">
            <p class="work-cat">${p.cat}</p>
            <h3 class="work-title">${p.title}</h3>
          </div>
          <div class="work-overlay">
            <p class="work-cat">${p.cat}</p>
            <h3 class="work-title">${p.title}</h3>
            <p class="work-ai-desc">${p.desc}</p>
            <p class="work-year">${p.meta}</p>
          </div>
        </div>`));
    });
    worksGroups.appendChild(group);
  });
}

// Services list
const servicesList = document.getElementById('servicesList');
if (servicesList) {
  services.forEach(s => {
    servicesList.appendChild(el(`
      <div class="service-item">
        <div class="service-item-header">
          <span class="service-name">${s.name}</span>
          <span class="service-price">${s.price}</span>
        </div>
        <p class="service-desc">${s.desc}</p>
      </div>`));
  });
}

// Process steps
const processGrid = document.getElementById('processGrid');
if (processGrid) {
  process.forEach(p => {
    processGrid.appendChild(el(`
      <div class="process-step">
        <div class="process-num">${p.num}</div>
        <div class="process-name">${p.name}</div>
        <p class="process-desc">${p.desc}</p>
      </div>`));
  });
}

// Plot configurations
const plotIcons = {
  trend: '<polyline points="3 17 9 11 13 15 21 7"/><polyline points="14 7 21 7 21 14"/>',
  home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V20h14V9.5"/>',
  expand: '<path d="M4 8V4h4"/><path d="M20 8V4h-4"/><path d="M4 16v4h4"/><path d="M20 16v4h-4"/>',
  grid: '<rect x="3" y="3" width="8" height="8" rx="1"/><rect x="13" y="3" width="8" height="8" rx="1"/><rect x="3" y="13" width="8" height="8" rx="1"/><rect x="13" y="13" width="8" height="8" rx="1"/>',
  tree: '<path d="M12 3c-2.8 0-4 2.4-4 4-1.4.4-2.5 1.7-2.5 3.3 0 1.8 1.4 3.2 3.2 3.2H15.3c1.8 0 3.2-1.4 3.2-3.2 0-1.6-1.1-2.9-2.5-3.3 0-1.6-1.2-4-4-4z"/><path d="M12 13.7V21"/>',
  bank: '<polygon points="12 3 21 8 3 8"/><line x1="3" y1="21" x2="21" y2="21"/><line x1="5" y1="11" x2="5" y2="18"/><line x1="10" y1="11" x2="10" y2="18"/><line x1="14" y1="11" x2="14" y2="18"/><line x1="19" y1="11" x2="19" y2="18"/>'
};
const sparkle = '<svg viewBox="0 0 24 24"><path d="M12 2l1.8 7.2L21 11l-7.2 1.8L12 20l-1.8-7.2L3 11l7.2-1.8z"/></svg>';
const plots = [
  { icon: 'trend',  name: '1200 Sq.ft', badge: 'First-Time Investors',      desc: 'Compact investment-friendly plot with excellent future appreciation potential.' },
  { icon: 'home',   name: '1500 Sq.ft', badge: 'Family Home Construction',  desc: 'Balanced plot size offering flexibility for modern villa development.' },
  { icon: 'expand', name: '1800 Sq.ft', badge: 'Premium Villa Living',      desc: 'Spacious plot option for larger homes and long-term value creation.' },
  { icon: 'grid',   name: 'Corner Plots', badge: 'Premium Buyers',          desc: 'Enhanced frontage, better accessibility, and stronger long-term desirability.' },
  { icon: 'tree',   name: 'Park Facing Plots', badge: 'Lifestyle Buyers',   desc: 'Enjoy open views, greenery, and a more premium living environment.' },
  { icon: 'bank',   name: 'Investment-Focused Plots', badge: 'Long-Term Appreciation', desc: 'Strategically positioned plots benefiting from corridor growth and future infrastructure development.' },
];
const plotsGrid = document.getElementById('plotsGrid');
if (plotsGrid) {
  plots.forEach(p => {
    plotsGrid.appendChild(el(`
      <div class="plot-card fade-up">
        <div class="plot-icon"><svg viewBox="0 0 24 24">${plotIcons[p.icon]}</svg></div>
        <h3 class="plot-name">${p.name}</h3>
        <span class="plot-badge">${sparkle}${p.badge}</span>
        <p class="plot-desc">${p.desc}</p>
      </div>`));
  });
}

// Testimonials
const testimonialsGrid = document.getElementById('testimonialsGrid');
if (testimonialsGrid) {
  testimonials.forEach(t => {
    testimonialsGrid.appendChild(el(`
      <div class="testimonial-card fade-up">
        <p class="testimonial-quote">${t.quote}</p>
        <p class="testimonial-author">${t.author}</p>
      </div>`));
  });
}

// FAQ accordion
const faqList = document.getElementById('faqList');
if (faqList) {
  faqs.forEach(f => {
    const item = el(`
      <div class="faq-item">
        <button class="faq-q">${f.q}<span class="faq-icon">+</span></button>
        <div class="faq-a"><p>${f.a}</p></div>
      </div>`);
    const btn = item.querySelector('.faq-q');
    const ans = item.querySelector('.faq-a');
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(o => {
        o.classList.remove('open'); o.querySelector('.faq-a').style.maxHeight = null;
      });
      if (!isOpen) { item.classList.add('open'); ans.style.maxHeight = ans.scrollHeight + 'px'; }
    });
    faqList.appendChild(item);
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ─── NAV ──────────────────────────────────────────────
const navbar = document.getElementById('navbar');
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 60);
  if (scrollTopBtn) scrollTopBtn.classList.toggle('show', window.scrollY > 400);
});
if (scrollTopBtn) scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
}

// ─── SCROLL ANIMATIONS ────────────────────────────────
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (typeof gsap !== 'undefined' && !reduceMotion) {
  gsap.registerPlugin(ScrollTrigger);
  document.querySelectorAll('.fade-up').forEach(elm => {
    gsap.to(elm, { opacity: 1, y: 0, duration: 0.9, ease: 'power2.out',
      scrollTrigger: { trigger: elm, start: 'top 90%' } });
  });
} else {
  document.querySelectorAll('.fade-up').forEach(elm => { elm.style.opacity = 1; elm.style.transform = 'none'; });
}

// ─── CONTACT FORM ─────────────────────────────────────
const form = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(form);
    const name = (data.get('name') || '').trim();
    const email = (data.get('email') || '').trim();
    const phone = (data.get('phone') || '').trim();
    const message = (data.get('message') || '').trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!name || !emailOk || !message) {
      formNote.style.color = 'var(--gold)';
      formNote.textContent = 'Please add your name, a valid email, and a short message.';
      return;
    }

    // No backend wired up — open the visitor's mail client with the enquiry pre-filled.
    const subject = encodeURIComponent((data.get('subject') || 'New project enquiry').trim());
    const body = encodeURIComponent(`${message}\n\n— ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}`);
    window.location.href = `mailto:support@ravikalebuilders.in?subject=${subject}&body=${body}`;

    const btn = form.querySelector('.form-submit');
    btn.textContent = 'Opening your mail…';
    btn.style.background = 'var(--sage)'; btn.style.color = 'var(--ink)';
    formNote.style.color = 'var(--muted)';
    formNote.textContent = 'Your email app should open. If it doesn\'t, write to support@ravikalebuilders.in directly.';
    form.reset();
    setTimeout(() => { btn.textContent = 'Send Enquiry'; btn.style.background = ''; btn.style.color = ''; }, 4000);
  });
}
