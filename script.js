const $ = id => document.getElementById(id);
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Mobile nav
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  links.classList.remove('open');
  toggle.setAttribute('aria-expanded', false);
}));

// Nav gets a border and shadow once the page scrolls
const nav = document.querySelector('.nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Hero report: replays the turnover from checkout to "ready".
// The HTML already shows the finished state, so nothing is hidden if this never runs.
const report = $('report');
const items = [...$('reportList').children];
let playing = false;

function playReport() {
  if (playing || reduceMotion) return;
  playing = true;
  report.classList.add('running');
  report.classList.remove('pop');
  items.forEach(li => li.classList.remove('done'));
  $('reportBar').style.width = '0%';
  $('reportClock').textContent = '11:00';
  $('reportStatus').textContent = 'Turnover in progress';

  items.forEach((li, i) => {
    setTimeout(() => {
      li.classList.add('done');
      $('reportClock').textContent = li.dataset.time;
      $('reportBar').style.width = `${((i + 1) / items.length) * 75}%`;   // 14:47 of an 11:00–16:00 window
      if (i === items.length - 1) {
        report.classList.remove('running');
        report.classList.add('pop');
        $('reportStatus').textContent = 'Turnover complete';
        playing = false;
      }
    }, 700 + i * 750);
  });
}
report.addEventListener('click', playReport);
// Play once the card is mostly on screen (straight away on desktop, after scrolling on phones)
if ('IntersectionObserver' in window) {
  const seen = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) { setTimeout(playReport, 400); seen.disconnect(); }
  }, { threshold: 0.6 });
  seen.observe(report);
}

// Before/after slider
const ba = $('ba');
$('baRange').addEventListener('input', e => ba.style.setProperty('--pos', e.target.value + '%'));

// Scroll reveal: only elements starting below the fold get the "rise" offset
if (!reduceMotion && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('rise');
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px' });

  document.querySelectorAll('[data-reveal]').forEach(el => {
    if (el.getBoundingClientRect().top > window.innerHeight) {
      // stagger items that sit side by side in a row
      el.style.transitionDelay = `${([...el.parentElement.children].indexOf(el) % 3) * 90}ms`;
      el.classList.add('rise');
      io.observe(el);
    }
  });
}

// Price estimator — keep in sync with the pricing table in index.html
const BASE = [85, 105, 135, 175, 220];    // studio, 1, 2, 3, 4+ bedrooms
const LINENS = [20, 25, 40, 55, 70];
const EXTRA_BATH = 20;                    // per bathroom beyond the first
const FULL_CARE_DISCOUNT = 0.05;

const money = n => '$' + Math.round(n).toLocaleString('en-US');

function setValue(el, text) {
  if (el.textContent === text) return;
  el.textContent = text;
  el.classList.remove('bump');
  void el.offsetWidth;                    // restart the animation
  el.classList.add('bump');
}

function updateEstimate() {
  const beds = Number($('beds').value);
  const baths = Number($('baths').value);
  const turns = Math.max(1, Math.min(31, Number($('turns').value) || 1));

  let perTurn = BASE[beds] + (baths - 1) * EXTRA_BATH;
  if ($('linens').checked) perTurn += LINENS[beds];
  if ($('fullcare').checked) perTurn *= 1 - FULL_CARE_DISCOUNT;

  setValue($('perTurn'), money(perTurn));
  setValue($('perMonth'), money(perTurn * turns));
}
$('calc').addEventListener('input', updateEstimate);
updateEstimate();

// Contact form — swap the action for a real endpoint (Formspree, Netlify Forms, etc.)
$('contact').addEventListener('submit', e => {
  e.preventDefault();
  const name = e.target.elements.name.value.trim().split(' ')[0];
  $('formMsg').textContent = `Thanks ${name}! We'll be in touch within one business day to book your walkthrough.`;
  e.target.reset();
});

$('year').textContent = new Date().getFullYear();
