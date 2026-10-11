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

// Price estimator — keep in sync with the pricing table in index.html
const BASE = [85, 105, 135, 175, 220];    // studio, 1, 2, 3, 4+ bedrooms
const LINENS = [20, 25, 40, 55, 70];
const EXTRA_BATH = 20;                    // per bathroom beyond the first
const FULL_CARE_DISCOUNT = 0.05;

const $ = id => document.getElementById(id);
const money = n => '$' + Math.round(n).toLocaleString('en-US');

function updateEstimate() {
  const beds = Number($('beds').value);
  const baths = Number($('baths').value);
  const turns = Math.max(1, Math.min(31, Number($('turns').value) || 1));

  let perTurn = BASE[beds] + (baths - 1) * EXTRA_BATH;
  if ($('linens').checked) perTurn += LINENS[beds];
  if ($('fullcare').checked) perTurn *= 1 - FULL_CARE_DISCOUNT;

  $('perTurn').textContent = money(perTurn);
  $('perMonth').textContent = money(perTurn * turns);
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
