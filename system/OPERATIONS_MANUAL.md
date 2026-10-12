# FreshTurn Operations Manual

How the business runs day to day. The spreadsheet `FreshTurn_Operations.xlsx` (same folder) is where everything gets recorded. It works in Excel, or upload it to Google Drive and open it with Google Sheets so you can use it on your phone.

---

## 1. The tools

| What | Use | Cost |
|---|---|---|
| **FreshTurn_Operations.xlsx** | Cleans, stock, purchases, damage, invoices, cleaner pay, expenses, tax | Free |
| **Google Drive** | Store the spreadsheet, receipt photos (`Receipts/2026-10/`) and clean photos (`Photos/P001/2026-10-24/`) | Free (15 GB) |
| **Password manager** (Bitwarden free) | Key safe and door codes, Wi-Fi passwords. **Never** in the spreadsheet or a WhatsApp group | Free |
| **WhatsApp Business** | One chat per cleaner, one per host. Separate from your personal WhatsApp | Free |
| **Turno** (optional, once you have 3+ properties) | Pulls bookings from Airbnb calendars and sends jobs to cleaners with checklists and photos | About $10 (≈ £8) per property a month; check UK pricing |
| **Invoicing app** (Zoho Invoice or Wave) | Send invoices, take card payments | Free |
| **Business bank account** (Starling, Tide, Monzo Business) | Keep business money separate | Free – a few £ a month |

**Until you have Turno:** subscribe to each host's Airbnb calendar (the iCal link from the host) in Google Calendar, colour-coded per property. Checkouts show up automatically.

---

## 2. Every clean

**The day before (evening)**
1. Check tomorrow's checkouts in the calendar.
2. Message each cleaner with the job: property, checkout time, next check-in time, anything special. Wait for a 👍.
3. No 👍 by 8pm? Call them. Still nothing: message the backup cleaner.

**On the day: the cleaner**
1. Arrives after checkout. Takes "before" photos of every room, **before touching anything**.
2. Cleans using `templates/turnover-checklist.md`.
3. Counts the stock items on the property's list and sends the counts (a photo of the cupboard works too).
4. Takes "after" photos of every room. Reports any damage or missing items **with photos straight away**.
5. Locks up, photographs the locked door, and texts "Done" with the finish time.

**On the day: you**
1. Send the host the after photos (or a link to the folder) with a one-line note. Template in `templates/messages.md`.
2. Add a row to **Cleans Log** (date, property, cleaner, status, start/finish, rush, photos sent).
3. Update **Stock** counts. Red = buy before the next clean.
4. Damage? Follow section 5 **today**.

---

## 3. Restocking

**First, agree the supplies model with each host** (Properties tab, "Supplies" column):

| Model | How it works | Best for |
|---|---|---|
| **Host stock** | The host buys everything and keeps it in a locked owner's cupboard. You tell them when it's low. | Starting out: you never spend your own money |
| **FreshTurn buys** | You buy in bulk, restock every visit, and add it to the monthly invoice at cost + 10% | Hosts who want zero hassle; once you have 3+ properties so bulk buying pays off |

**Setting up a property's stock list**
1. On your first visit, note what the host provides (toilet roll, toiletries, tea and coffee, and so on).
2. In **Stock**, add a row per item: *Full stock* (what should be there after a clean) and *Reorder at* (the level at which you buy more). The example rows for P001 are a good starting point for a 2-bed.

**Weekly shop (Thursday or Friday, before the weekend rush)**
1. Filter **Stock** by Status = REORDER. "Need to buy" says how many.
2. Buy for all properties in one trip. Booker or Costco for bulk; Screwfix or Toolstation for bulbs and batteries.
3. Log each item in **Purchases**: property, item, quantity, total cost, type "Restock", charge host Y/N, receipt saved Y.
4. Photograph the receipt and save it to `Receipts/YYYY-MM/`.
5. Split bulk packs between properties by logging a separate Purchases row per property (e.g. 8 of 36 toilet rolls = 8 × £0.53).

---

## 4. Replacing broken or missing items

| Item cost | What to do |
|---|---|
| **Up to £20 per item** (glass, mug, bulb, batteries, towel) | Just replace it. Log in Purchases (type "Replacement", charge host Y). It appears on their invoice at cost + 10%. |
| **Over £20** | Text the host first with a photo, the item and the price (template in `templates/messages.md`). Only buy after they say yes. Put Y in "Host approved". |
| **Over £50** | Host buys it themselves, or pays you before you buy. |

The **Check** column in Purchases turns red if you've broken one of these rules or haven't saved the receipt.

Change the limits in **Settings** if a host agrees different ones.

---

## 5. Guest damage

The host claims from the guest, not you. Your job is to make the claim easy and on time.

1. **Photos immediately.** Cleaner photographs the damage before cleaning: wide shot plus close-up.
2. **Tell the host the same day** with the photos (template in `templates/messages.md`). Remind them of the deadline.
3. **Log it** in **Damage**: date, property, platform, guest checkout date, what, link to photos, date you told the host.
4. **Claim deadline:** Airbnb and Booking.com both allow about **14 days from checkout**. The Damage tab counts down and turns amber at 3 days.
5. If you replace the item, log it in **Purchases** as "Guest damage". The host pays you whether or not their claim succeeds.
6. Update "Host's claim" when they tell you (Claimed / Paid / Refused).

Normal wear and tear (a worn towel, a faded cushion) usually can't be claimed. Log it as "Replacement", not "Guest damage".

---

## 6. Paying cleaners (every Friday)

1. Work weeks run **Saturday to Friday**, so the busy weekend is at the start of the week.
2. In **Cleaner Pay**, add a row per cleaner for the week that just ended. Jobs and amount fill in from the Cleans Log.
3. Ask each cleaner to send a simple invoice or confirm the job list. This is good evidence they're self-employed.
4. Pay by bank transfer. Fill in "Paid" date and reference.
5. Re-cleans (fixing a complaint) are unpaid if it was their mistake, per the cleaner agreement.

---

## 7. Invoicing hosts (1st of each month)

1. In **Invoices**, add a row per host: invoice number (FT-0001, FT-0002…), host, month.
2. Open **Invoice Builder**, choose the host and month. Every clean and recharged item is listed with a total.
3. Copy the lines into your invoicing app (or a Google Doc saved as PDF) and send. Attach receipts for recharged items.
4. Fill in "Sent" in Invoices. It shows the due date (7 days) and turns red when overdue.
5. When paid, fill in "Paid".

**Overdue?** Polite reminder on day 1 overdue, phone call on day 7, then pause cleans until paid. Card on file avoids all of this.

---

## 8. Monthly check (30 minutes)

Open **Dashboard**, set the month:
- **You keep per clean:** if it's below about £15, a price or a cleaner rate needs looking at.
- **Income per cleaning hour:** if a property's cleans take longer than priced, re-price it (Price Calculator).
- **Needs attention:** everything should be 0, except "Money owed" until invoices are paid.
- Move **"Put aside for tax"** into a separate savings pot.
- Look at **VAT threshold**: it warns you at 80%.

---

## 9. Taking on a new property

1. Free visit with the host, using `templates/property-onboarding.md`. Take reference photos of every room exactly as it should be left.
2. Time a walkthrough and estimate the cleaning hours. Use **Price Calculator**.
3. Agree the price, supplies model, linen and approval limit. Sign `templates/client-agreement.md`.
4. Add the host to **Hosts** and the property to **Properties**. Put codes in the password manager.
5. Add its stock list to **Stock**.
6. Take the host's calendar link: Google Calendar now, Turno later.
7. Walk the main cleaner **and** the backup cleaner through the property before the first clean.
8. Time the first 4 cleans. Re-price if needed.

## 10. Taking on a new cleaner

1. Trial clean, paid, with you there.
2. Confirm they're registered as self-employed with HMRC. Ask for their UTR to keep on file.
3. Sign `templates/cleaner-agreement.md`.
4. Optional but reassuring for hosts: a basic DBS check (they can apply themselves online for a small fee).
5. Add them to **Cleaners**. Walk them through the checklist and photo routine.
6. Give them their own WhatsApp chat and share codes only for the properties they clean.

---

## 11. When things go wrong

| Problem | What to do |
|---|---|
| Cleaner can't make it | Backup cleaner → you → tell the host early (never at 3:55pm) |
| Guest still in the property | Don't go in. Message the host; they contact the guest. Charge late cancel or wait time per the agreement |
| Running late for check-in | Tell the host by 2pm so they can message the guest |
| Host complains | Thank them, ask for photos, send a cleaner back free within 24 hours, log a "Re-clean" |
| Something broken that makes it unusable (no hot water, broken lock) | Tell the host immediately by phone. They arrange the repair |
| Key lost | Tell the host straight away. Key cover in your insurance pays for lock changes |
| You're ill or away | The backup cleaner has the schedule. Give one trusted person access to the spreadsheet |

---

## 12. Health & safety (COSHH)

Cleaning products count as hazardous substances. As a cleaning business you should:
- keep a short COSHH risk assessment (`templates/coshh-risk-assessment.md`)
- keep the safety data sheets for the products you supply (free from the supplier's website)
- give cleaners gloves, never mix bleach with other products, and ventilate bathrooms

Review it if you change products.

---

## 13. Rubbish

Holiday lets count as businesses, so guest rubbish is generally treated as commercial waste, not household waste. Bath & North East Somerset also has rules about when business waste can be left out in central Bath.
- Agree with each host how rubbish is handled: their commercial waste contract, bin location, collection days.
- Cleaners put rubbish **only** where the host says. Never put it on the street at the wrong time.

---

## 14. Records to keep

| Record | Where | How long |
|---|---|---|
| Spreadsheet (back up monthly: File → Download a copy) | Google Drive | Forever |
| Receipts | `Receipts/YYYY-MM/` | At least 5 years after the 31 January tax return deadline |
| Signed agreements | `Agreements/` | While active + 6 years |
| Clean photos | `Photos/P001/date/` | 90 days (longer if there's a damage claim) |
| Insurance documents | `Insurance/` | Current + previous years |
