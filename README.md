# FreshTurn: Airbnb Cleaning in Bath

Everything needed to start an Airbnb cleaning business that uses a team of trusted independent cleaners, paid per job. The company cleans properties between guests; it does not manage the Airbnb listings.

| File | What it is |
|---|---|
| `index.html`, `styles.css`, `script.js` | The website: services, pricing, an instant price estimator, a booking form and an FAQ |
| `BUSINESS_PLAN.md` | The business plan: how it works, pricing, cleaner pay, finding clients, money, risks and a launch checklist |
| `templates/cleaner-agreement.md` | Agreement to sign with each cleaner |
| `templates/client-agreement.md` | Agreement to sign with each Airbnb host |
| `templates/turnover-checklist.md` | The checklist cleaners follow at every clean |
| `templates/outreach-scripts.md` | Messages for your cleaners, friends, Facebook groups, hosts and partners |

## Putting the website live (free)

1. **Fill in your details** in `index.html`: business name, email (`hello@freshturn.example`), phone number and area.
2. **Make the form send you emails.** Sign up free at [formspree.io](https://formspree.io), create a form, then in `index.html` change `<form class="contact" id="contact">` to `<form class="contact" id="contact" action="https://formspree.io/f/YOUR_ID" method="POST">`, and delete the "Contact form" block at the bottom of `script.js`.
3. **Publish it.** Either option works:
   - **Netlify (easiest):** go to [app.netlify.com/drop](https://app.netlify.com/drop) and drag this folder onto the page. You get a free web address straight away.
   - **GitHub Pages:** in this repo go to *Settings → Pages*, choose the branch, and save.
4. **Optional:** buy a domain (e.g. `freshturnbath.co.uk`, about £10–£15/year) and connect it in Netlify or GitHub Pages settings.

## Adding your own photos and reviews

- **Before/after slider:** it currently shows an illustration. Once you have real photos of a clean (ask the host's permission), make a `photos` folder, add `before.jpg` and `after.jpg` (same size, landscape), and follow the note above the "BEFORE / AFTER" section in `index.html`.
- **Reviews:** the reviews section is hidden until you have real ones. Paste genuine reviews into the `REVIEWS` section of `index.html` and delete the word `hidden` from `<section id="reviews" ...>`. Never use made-up reviews.

If you change prices, update **both** the pricing table in `index.html` and the `BASE` / `LINENS` numbers in `script.js`.
