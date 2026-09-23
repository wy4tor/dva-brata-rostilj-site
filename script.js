const menuData = [
  {
    title: 'Pljeskavice',
    category: 'rostilj',
    icon: '🍔',
    items: [
      ['Mala', '100g', '190 din'],
      ['Srednja', '200g', '270 din'],
      ['Velika', '300g', '390 din'],
      ['Gurmanska', '200g', '320 din'],
      ['Selska', '300g', '400 din'],
      ['Punjena', '300g', '450 din'],
      ['Bratska', '350g', '470 din']
    ]
  },
  {
    title: 'Ćevapi',
    category: 'rostilj',
    icon: '🥩',
    items: [
      ['5 kom', '150g', '210 din'],
      ['10 kom', '300g', '410 din'],
      ['Gurmanski 5 kom', '200g', '260 din'],
      ['Gurmanski 10 kom', '350g', '460 din']
    ]
  },
  {
    title: 'Kobasica',
    category: 'rostilj',
    icon: '🌭',
    items: [
      ['Domaća sveža', '150g', '230 din'],
      ['Domaća sveža', '300g', '340 din'],
      ['Dimljena', '150g', '230 din'],
      ['Dimljena', '300g', '340 din']
    ]
  },
  {
    title: 'Svinjsko',
    category: 'rostilj',
    icon: '🔥',
    items: [
      ['Bela vešalica', '250g', '310 din'],
      ['Dimljena svinjska', '250g', '360 din'],
      ['Šnicla', '250g', '290 din'],
      ['Svinjski vrat', '250g', '320 din'],
      ['Ražnjić', '250g', '310 din']
    ]
  },
  {
    title: 'Krilca i piletina',
    category: 'piletina',
    icon: '🍗',
    items: [
      ['Batak', '250g', '240 din'],
      ['Belo', '250g', '240 din'],
      ['Punjeno belo', '300g', '290 din'],
      ['Rolovano belo', '250g', '290 din'],
      ['Ražnjić', '250g', '240 din']
    ]
  },
  {
    title: 'Friteza',
    category: 'friteza',
    icon: '🍟',
    items: [
      ['Bečka', '250g', '280 din'],
      ['Karađorđeva', '300g', '390 din'],
      ['Susam piletina', '250g', '270 din'],
      ['Kačkavalj', '300g', '360 din']
    ]
  },
  {
    title: 'Tostevi',
    category: 'friteza',
    icon: '🥪',
    items: [
      ['Salama', '', '130 din + kačkavalj 170 din'],
      ['Šunka', '', '160 din + kačkavalj 190 din'],
      ['Pečenica', '', '190 din + kačkavalj 230 din'],
      ['Kulen', '', '200 din + kačkavalj 240 din'],
      ['Mix', '', '230 din'],
      ['Krem', '', '130 din']
    ]
  },
  {
    title: 'Pomfrit',
    category: 'friteza',
    icon: '🍟',
    items: [
      ['Mala porcija', '150g', '180 din'],
      ['Velika porcija', '300g', '340 din']
    ]
  },
  {
    title: 'Posno',
    category: 'posno',
    icon: '🐟',
    items: [
      ['Pastrmka', '', 'pitaj za cenu'],
      ['Skuša', '', 'pitaj za cenu'],
      ['Oslić', '', 'pitaj za cenu'],
      ['Girice', '', 'pitaj za cenu']
    ]
  }
];

const kiloData = [
  ['Pljeskavica', '1kg', '950 din'],
  ['Ćevapi', '1kg', '990 din'],
  ['Uštipak', '1kg', '1250 din'],
  ['Gurmanske pljeskavice', '1kg', '1250 din'],
  ['Punjene pljeskavice', '1kg', '1250 din'],
  ['Kobasica', '1kg', '1200 din'],
  ['Bela vešalica', '1kg', '1300 din'],
  ['Dimljena vešalica', '1kg', '1400 din'],
  ['Vrat', '1kg', '1100 din'],
  ['Ražnjići', '1kg', '1000 din'],
  ['Šnicla', '1kg', '1100 din'],
  ['Krilca', '1kg', '650 din'],
  ['Batak', '1kg', '750 din'],
  ['Belo', '1kg', '900 din'],
  ['Rolovano', '1kg', '1000 din']
];

const menuGrid = document.querySelector('[data-menu-grid]');
const kiloList = document.querySelector('[data-kilo-list]');
const filters = document.querySelectorAll('[data-filter]');
const header = document.querySelector('[data-header]');
const nav = document.querySelector('[data-nav]');
const navToggle = document.querySelector('[data-nav-toggle]');

document.querySelector('[data-year]').textContent = new Date().getFullYear();

function renderMenu(filter = 'all') {
  const data = filter === 'all' ? menuData : menuData.filter(group => group.category === filter);
  menuGrid.innerHTML = data.map(group => `
    <article class="menu-card reveal visible" data-category="${group.category}">
      <div class="menu-title"><span>${group.icon}</span>${group.title}</div>
      <div class="menu-list">
        ${group.items.map(([name, weight, price]) => `
          <div class="menu-row">
            <strong>${name}${weight ? ` <small>(${weight})</small>` : ''}</strong>
            <span>${price}</span>
          </div>
        `).join('')}
      </div>
    </article>
  `).join('');
}

function renderKilo() {
  kiloList.innerHTML = `
    <h3>Aktuelne cene</h3>
    <div class="menu-list">
      ${kiloData.map(([name, weight, price]) => `
        <div class="price-row">
          <strong>${name} <small>(${weight})</small></strong>
          <span>${price}</span>
        </div>
      `).join('')}
    </div>
  `;
}

filters.forEach(button => {
  button.addEventListener('click', () => {
    filters.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    renderMenu(button.dataset.filter);
  });
});

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let lenis = null;

// Keep the floating call out of sections that already offer a call action,
// and fade it before it can cover the footer.
const stickyCall = document.querySelector('.sticky-call');
if (stickyCall) {
  const callSections = new Set(
    [...document.querySelectorAll('main a[href^="tel:"]')]
      .map(link => link.closest('section'))
      .filter(Boolean)
  );
  const footer = document.querySelector('.site-footer');
  const visibleTargets = new Set();
  const callObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) visibleTargets.add(entry.target);
      else visibleTargets.delete(entry.target);
    });
    const hidden = visibleTargets.size > 0;
    stickyCall.classList.toggle('is-hidden', hidden);
    stickyCall.inert = hidden;
    stickyCall.setAttribute('aria-hidden', String(hidden));
  }, { rootMargin: '-80px 0px 80px 0px', threshold: 0 });
  callSections.forEach(section => callObserver.observe(section));
  if (footer) callObserver.observe(footer);
}

const backToTop = document.querySelector('.back-to-top');

function setHeaderState(scrollY) {
  header.classList.toggle('scrolled', scrollY > 24);
  if (backToTop) {
    const hidden = scrollY < 400;
    backToTop.classList.toggle('is-hidden', hidden);
    backToTop.inert = hidden;
    backToTop.setAttribute('aria-hidden', String(hidden));
  }
}

function closeNav() {
  nav.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
}

function scrollToHash(hash, immediate = false) {
  if (!hash || hash === '#') return;
  const target = document.querySelector(hash);
  if (!target) return;
  if (hash === '#top') {
    if (lenis) lenis.scrollTo(0, { immediate, duration: 1.35 });
    else window.scrollTo({ top: 0, behavior: immediate || reduceMotion ? 'auto' : 'smooth' });
    return;
  }
  const offset = -88;
  if (lenis) {
    lenis.scrollTo(target, { offset, immediate, duration: 1.35 });
    return;
  }
  const top = target.getBoundingClientRect().top + window.scrollY + offset;
  window.scrollTo({ top, behavior: immediate || reduceMotion ? 'auto' : 'smooth' });
}

navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', event => {
    const hash = link.getAttribute('href');
    if (!hash || hash === '#') return;
    event.preventDefault();
    closeNav();
    scrollToHash(hash);
    history.pushState(null, '', hash);
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

function observeReveals() {
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
}

setHeaderState(window.scrollY);

if (!reduceMotion && window.Lenis) {
  lenis = new Lenis({
    lerp: 0.075,
    smoothWheel: true,
    wheelMultiplier: 0.9,
    touchMultiplier: 1.05,
    autoRaf: true,
    overscroll: true
  });

  lenis.on('scroll', ({ scroll }) => setHeaderState(scroll));
} else {
  window.addEventListener('scroll', () => setHeaderState(window.scrollY), { passive: true });
}

const heroVideo = document.querySelector('.hero-video');
if (heroVideo) {
  const videoObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        heroVideo.play().catch(() => {});
      } else {
        heroVideo.pause();
      }
    });
  }, { threshold: 0.12 });
  videoObserver.observe(heroVideo);
}

window.addEventListener('load', () => {
  if (location.hash) scrollToHash(location.hash, true);
});

renderMenu();
renderKilo();
observeReveals();
