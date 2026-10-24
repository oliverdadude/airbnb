# Short-horizon US futures strategies other than Nasdaq intraday momentum: evidence review (as of Oct 2026)

Scope note: about 18 tool calls. Many primary-source fetches failed with DNS errors in this environment (nd.edu, Reading eprints, Adelaide repository, Robeco, concretumgroup.com, cxoadvisory.com). Several findings below therefore rest on search-result abstracts or snippets, not full-text reading. The Sources lines say where that applies.

## Q1. Which intraday or short-horizon effects in ES, gold, crude, bonds or Russell have credible long-sample evidence?

### Takeaway
The best-documented effect that is also same-day and Tradeify-compatible is "market intraday momentum": the return over the rest of the day predicts the last 30 minutes, across more than 60 futures (equity, bond, commodity, FX), 1974-2020, in the Journal of Financial Economics. But it is the same family of effect as the Nasdaq noise-area strategy, so its diversification value is limited. The cleaner diversifiers are event-driven:
- **EIA crude inventory day intraday momentum (CL/MCL):** peer-reviewed, 2006-2019 sample.
- **10-year Treasury auction-day concession then recovery (ZN):** Robeco quant note.
- **Turn-of-the-month in ES:** robust, but mostly a multi-day overnight hold.

The pre-FOMC drift has decayed and is mostly overnight. Gold has no credible published intraday strategy evidence that I could find.

### Cited Findings

**A. Market intraday momentum, multi-asset (Baltussen, Da, Lammers & Martens 2021)**
- *Paper:* "Hedging Demand and Market Intraday Momentum", Journal of Financial Economics 142 (2021) 377-403. — [Erasmus pure](https://pure.eur.nl/en/publications/hedging-demand-and-market-intraday-momentum/); [Alpha Architect summary](https://alphaarchitect.com/hot-topic-does-gamma-hedging-actually-affect-stock-prices/)
- *Data:* intraday returns on over 60 futures on equities, bonds, commodities and currencies, 1974-2020. — same sources
- *Rule family:* the return from the previous close to 30 minutes before the close predicts the last-30-minute return. Go long (short) for the final 30 minutes if the rest-of-day return is positive (negative). — same sources
  - The effect is economically and statistically significant and reverts over the next days.
  - The authors attribute it to gamma hedging by option market makers and leveraged-ETF rebalancing.
- *Not verified:* the paper's exact Sharpe ratios, per-market results for gold, crude, ZN/ZB and RTY, and its cost treatment. The full text could not be fetched (DNS failure on nd.edu and the Reading eprint).
- *Trade structure:* enters about 30 minutes before the close and exits at the close. That fits "flat by 4:45pm ET" only if the market's close falls before 4:45pm ET:
  - Equity index futures settle 4:00pm ET (RTH).
  - Treasuries settle 3:00pm ET.
  - CL settles 2:30pm ET.
  - GC settles 1:30pm ET.
  - The settlement times are general market knowledge, not a cited source.

**B. Equity intraday momentum, the original single-index version (Gao, Han, Li & Zhou)**
- SPY high-frequency data, 1993-2013: the first half-hour return predicts the last half-hour return. — [CXO Advisory summary](https://cxoadvisory.com/calendar-effects/first-and-last-half-hours-of-trading-linked); [paper PDF mirror](https://c.mql5.com/forextsd/forum/173/intraday_momentum_-_the_first_half-hour_return_predicts_the_last_half-hour_return.pdf)
- The effect is stronger on volatile days, high-volume days, recession days and major macro news days. — same sources
- Out-of-sample R-squared of 0.018 for 1999-2012 SPY. — [search snippet, Harbourfront Quant](https://harbourfrontquant.substack.com/p/does-intraday-momentum-exist-in-stock)

**C. EIA crude inventory report (Wednesday 10:30 ET), CL**
- *Wen, Indriawan, Lien & Xu, The Energy Journal (2023):*
  - On EIA announcement days, the third half-hour return (which includes the 10:30 release) significantly predicts the last half-hour return. On other days only the first half-hour has predictive power.
  - The authors say the predictors can generate meaningful economic gains as trading signals.
  - Sources: [Adelaide repository record](https://digital.library.adelaide.edu.au/items/13d367dd-06b2-4eca-8d21-4dfeb46c4f55); [IAEE exec summary](https://www.iaee.org/ej/ejexec/ej44-5-Xu-exsum.pdf)
- *Quantpedia's summary:* a 2006-2019 backtest with "indicative performance" of about 4.14% a year. This is Quantpedia's estimate, not a figure verified in the paper. — [Quantpedia Premium update](https://vvv.quantpedia.com/?p=37776)
- *Geman & Li, Journal of Energy Markets (2018):*
  - WTI price, volatility and volume react within minutes of the EIA release and the effect fades after about 25 minutes.
  - Prices revert quickly after the initial move.
  - Some participants appear to get the inventory information about 10 minutes before release, and strategies that follow them look very profitable.
  - Sources: [Risk.net abstract](https://www.risk.net/journal-of-energy-markets/5728636/an-analysis-of-intraday-market-response-to-crude-oil-inventory-shocks); [IDEAS](https://ideas.repec.org/a/rsk/journ2/5728636.html)
- *Related, natural gas:* a large share of annual NG futures returns occur on EIA storage-report days. — [Energy Journal / SAGE](https://journals.sagepub.com/doi/10.5547/01956574.42.2.mpro)

**D. Treasury auctions (ZN)**
- *Robeco quant chart (Mar 2025):* 10-year note futures fall about 6 bp on average ahead of the 10-year auction, then recover in the hours after.
  - Treasury sells about USD 40bn of 10-year notes at a single monthly auction, followed the next day by the 30-year bond auction of over USD 20bn.
  - Source: [Robeco](https://www.robeco.com/en-za/insights/2025/03/quant-chart-us-treasuries-up-for-auction). Summary from the search snippet only; the full page fetch failed.
- *Phillot (AEJ: Macro):* uses futures moves around auction announcements as supply shocks. Higher supply raises yields, partly through the term premium. — [AEA](https://www.aeaweb.org/doi/10.1257/mac.20210243)
- *Not verified:* the Robeco note's sample length and whether it gives net-of-cost strategy statistics.

**E. Turn-of-the-month (ES)**
- *Quantpedia #41:* the window runs from the last trading day of the month through the third trading day of the next month.
  - Quantpedia calls the effect persistent and unexplained by asset pricing models.
  - It cites Carcano & Tornero: this is the only calendar anomaly both significant and persistent in S&P 500 futures.
  - Sources: [Quantpedia strategy page](https://quantpedia.com/strategies/turn-of-the-month-in-equity-indexes); [Quantpedia screener #41](https://quantpedia.com/Screener/Details/41)
- *Holding:* this is a roughly 4-day hold, so it needs overnight positions.

**F. Pre-FOMC announcement drift (ES)**
- *Lucca & Moench:* 1994-2011, about 49 bp excess equity return in the 24 hours (2pm-to-2pm) before scheduled FOMC announcements; no such premium in 1970-1993. — [NY Fed staff report 512](https://www.newyorkfed.org/medialibrary/media/research/staff_reports/sr512.html)
- *Kurov, Wolfe & Gilbert, Finance Research Letters 40 (2021):* extending the sample to Dec 2019, the drift essentially disappeared after 2015, both with and without press conferences. They suggest reduced policy uncertainty as the cause. — [Skidmore PDF](https://www.skidmore.edu/economics/documents/KurovWolfeGilbert-TheDisappearingPre-FOMC-Announce-Drift-200914.pdf); [IDEAS](https://ideas.repec.org/a/eee/finlet/v40y2021ics1544612320315956.html)
- *Vendor claim:* a newsletter says filtered versions remain profitable. This is commercial and unverified. — [Trade Machine Substack](https://trademachine.substack.com/p/pre-fomc-announcement-drift)
- *Related:* Kurov et al. also document price drift before other US macro news releases. — [Skidmore PDF KSSW2017](https://www.skidmore.edu/economics/documents/KSSW2017-PriceDriftBeforeUSMacroeconomicNews.pdf)

**G. Overnight vs intraday split (ES)**
- In S&P 500 futures, close-to-close returns split roughly equally between open-to-close (4.2%) and close-to-open (3.7%). — [CEPR DP14462](https://repec.cepr.org/repec/cpr/ceprdp/DP14462.pdf)
- *Overnight-intraday reversal (della Corte, Kosowski & Wang):* reported robust across equity index, interest rate, commodity and currency futures. — [Quantpedia update](https://vvv.quantpedia.com/?p=666)

**H. Mean reversion after large down days (ES)**
- *Academic anchor:* "Profitable mean reversion after large price drops: A story of day and night", Journal of Asset Management 12(3) 2011, covering the S&P 500, 400 and 600. Only the citation page was seen; findings unverified. — [IDEAS](https://ideas.repec.org/a/pal/assmgt/v12y2011i3d10.1057_jam.2011.15.html)
- *Vendor and practitioner claims, not independent evidence:*
  - A paywalled ES daily model claims a profit factor of 1.85 since 1997. — [Alpha Algo Substack](https://algotr.substack.com/p/from-the-lab-es-daily-1368-returnmax)
  - An SPY/QQQ mean-reversion system reports a 69.1% win rate over 1,389 trades, with an average hold of 4.8 days (2000-2024). — [search snippet, Gryning Times](https://thegryningtimes.substack.com/p/market-signals-report-467)
- *Holding:* these are all multi-day holds.

**I. Gold**
- *Iwatsubo, Watkins & Xu (J. Commodity Markets 2018):* uninformed trading dominates the Tokyo session and informed trading dominates the New York session for gold and platinum futures. This is microstructure work, not a trading strategy. — [RIETI DP](https://www.rieti.go.jp/jp/publications/dp/17e120.pdf)
- *CBS master's thesis (not peer reviewed):* reports a "hat-shaped" 24-hour seasonality, with gold rising in Asian hours and falling for the rest of the day, plus drops around the London fix in the years of alleged manipulation. — [CBS thesis](https://research-api.cbs.dk/ws/portalfiles/portal/59803241/651553_Thesis_Contract_13383.pdf)
- *Concretum:* I found no Concretum gold-specific intraday paper. — [search; Concretum SPY paper page](https://concretumgroup.com/beat-the-market-an-effective-intraday-momentum-strategy-for-sp500-etf-spy/)

**J. Concretum's own futures extension**
- The "Beat the Market" FAQ says the same noise-area rules were applied to 33 futures (21 commodities, 12 equity indices) from Jan 2007 to Sep 2024. — [Concretum SPY paper page](https://concretumgroup.com/beat-the-market-an-effective-intraday-momentum-strategy-for-sp500-etf-spy/)
- The per-market results (gold, crude) were not retrievable; concretumgroup.com fetches failed.
- *Headline SPY result:* 19.6% annualized net and Sharpe 1.33 over 2007-early 2024. — same source
- *Other Concretum papers:*
  - Opening-range breakout on "stocks in play". — [IDEAS rp2498](https://ideas.repec.org/p/chf/rpseri/rp2498.html)
  - A VWAP strategy on leveraged ETFs, with a claimed return of over 8,000% for 2018-2023. Treat this as an in-sample, leveraged-product claim. — [SSRN author page](https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=5831512)

### Inferences
- **Most practical diversifiers under Tradeify rules:**
  1. CL EIA-day momentum: enter around 11:00 ET after the third half-hour, exit at the 2:30pm settle. That stays outside the 5-minute news blackout because entry comes about 30 minutes after release.
  2. ZN auction-day dip-buy: buy a few hours before the 1pm ET auction or at the auction, exit before the 3pm settle. The rule is my construction from the Robeco description, untested.
  3. Last-30-minute intraday momentum on ZN/ZB, GC or CL, each at its own settle time.
- **Low-correlation candidates:**
  - EIA and auction trades are event-driven, about one day a week or month. They should have low correlation with Nasdaq intraday momentum simply because they are rarely in the market on the same bars.
  - Last-30-minute momentum on non-equity futures (bonds, gold) is likely only moderately correlated with Nasdaq noise-area trades. Equity-index last-30-minute momentum (ES, RTY) is likely highly correlated, because the gamma-hedging driver is the same.
- **Ruled out by the no-overnight rule:** turn-of-the-month (multi-day), pre-FOMC 24h drift (mostly overnight, and decayed), buy-after-large-down-day mean reversion (close-to-next-close or multi-day), and the overnight drift/reversal strategies.

### Gaps
- Exact Sharpe, return and cost numbers per asset class for Baltussen et al. (2021). The full text was unavailable; the report writer should not quote numbers for it.
- The Wen et al. (2023) exact trading rules and net returns. Only the abstract and a third-party estimate were seen.
- Gold around US data releases (CPI, NFP): no credible short-horizon trading study found.
- RTY/M2K-specific intraday evidence: none found beyond multi-asset panels.
- Friday/Monday effects in futures: not researched for lack of budget. Yu, Rentzler & Wolf find Monday-dependent momentum and reversal in Nasdaq-100 futures. — [JOIM](https://joim.com/downloads/nasdaq-100-index-futures-intraday-momentum-reversal)
- The Lou, Yan & Zhang (2013, RFS) Treasury auction-cycle paper did not surface in search. I believe from prior knowledge that it documents a multi-day pre-auction decline and post-auction recovery, but this is not verified here.

## Q2. Which have been replicated independently or failed out of sample?

### Takeaway
- **Failed after publication:** the pre-FOMC drift (gone after 2015 in peer-reviewed follow-up work) and the overnight-to-last-half-hour version of intraday momentum (Rosa 2022, Journal of Futures Markets, failed out of sample).
- **Survived in a different setting:** first-half-hour intraday momentum has positive out-of-sample evidence only to 2012. The 60-futures panel to 2020 is effectively an independent broad replication of the market intraday momentum idea.
- **Not replicated:** I found no independent post-2020 replication for EIA or auction effects.

### Cited Findings
- *Pre-FOMC drift failure:* disappeared after 2015. — [Kurov, Wolfe & Gilbert 2021](https://www.skidmore.edu/economics/documents/KurovWolfeGilbert-TheDisappearingPre-FOMC-Announce-Drift-200914.pdf)
  - An R-bloggers replication with SPY reproduced the in-sample result and then ran an out-of-sample test; the out-of-sample result could not be read. — [R-bloggers](https://www.r-bloggers.com/2015/03/update-on-the-pre-fomc-announcement-drift/)
- *Intraday momentum failure:* Rosa (2022, Journal of Futures Markets 42(12)) finds the overnight-return predictor of the last half-hour disappears out of sample. He warns that calendar-time tests can mislead when anomaly returns vary over time. — [IDEAS](https://ideas.repec.org/a/wly/jfutmk/v42y2022i12p2218-2234.html)
- *Intraday momentum survival:* the predictability is significant in and out of sample in at least one follow-up. — [Nottingham repository](https://nottingham-repository.worktribe.com/OutputFile/5273196); [Southampton eprints](https://eprints.soton.ac.uk/452387)
- *Market intraday momentum across 60+ futures, 1974-2020:* extends the SPY finding across asset classes and decades. — [Erasmus pure](https://pure.eur.nl/en/publications/hedging-demand-and-market-intraday-momentum/)
- *Nuance at the stock level:* individual stocks show an end-of-day reversal (cross-sectional). The market-level index effect is momentum. The paper won 2nd prize at the Quantpedia Awards 2025. — [Erasmus news](https://www.eur.nl/en/ese/news/end-day-reversal-pattern-second-place-quantpedia-awards-2025); [OptionMetrics](https://optionmetrics.com/research/a-soebhag-g-baltussen-and-z-da-end-of-day-reversal/)
- *Nasdaq-100 futures:* a simple momentum-or-reversal view "proves untenable". Effects depend on the signs of prior returns and on whether it is a Monday. — [JOIM, Yu, Rentzler & Wolf](https://joim.com/downloads/nasdaq-100-index-futures-intraday-momentum-reversal)

### Inferences
- Any intraday-momentum add-on should be validated on post-2020 micro-futures data by the user. There is no public decay study after 2020 for futures specifically.
- EIA momentum evidence (sample ending 2019) and auction effects should be treated as unreplicated.

### Gaps
- No independent GitHub replications found for EIA-day momentum, ZN auction trades or gold intraday strategies.
- No post-publication (2021-2026) decay analysis found for Baltussen et al.

## Q3. How correlated are these with Nasdaq intraday momentum or with each other?

### Takeaway
I found no published correlation matrix. Correlation can only be inferred from mechanism and from how often each strategy is in the market at the same time as the Nasdaq trades.

### Cited Findings
- *Shared driver:* market intraday momentum is attributed to gamma hedging by options market makers and leveraged ETFs, which is a common equity-index driver. — [Alpha Architect](https://alphaarchitect.com/hot-topic-does-gamma-hedging-actually-affect-stock-prices/)
- *Same rules across futures:* Concretum ran the same noise-area rules on 33 futures. — [Concretum](https://concretumgroup.com/beat-the-market-an-effective-intraday-momentum-strategy-for-sp500-etf-spy/)

### Inferences
- **Expected correlation with Nasdaq noise-area momentum** (my judgement, not measured):

  | Strategy | Expected correlation |
  |---|---|
  | ES/RTY intraday momentum | High |
  | ZN/ZB last-30-minute momentum | Low to moderate |
  | GC and CL last-30-minute momentum | Low to moderate |
  | EIA-day CL momentum | Low |
  | ZN auction-day trades | Low |

- On risk-off days, bond futures tend to rally while equities fall. Momentum strategies in both could profit on the same day, which gives positive P&L correlation even though the underlying prices are negatively correlated.

### Gaps
- No source measures P&L correlation between these strategies. The user should compute it from their own backtests.

## Q4. Which are practical with Tradeify rules (flat by 4:45pm ET, no overnight, 5-minute news blackout, micros)?

### Takeaway
Feasible: last-30-minute intraday momentum on MES, M2K, ZN, GC or MCL (each closing before its settle); EIA-day MCL momentum; and ZN auction-day intraday trades. Ruled out: turn-of-the-month, pre-FOMC 24h drift, overnight drift/reversal, and multi-day buy-the-dip strategies. Fills inside the first minutes after EIA, CPI or FOMC releases are blocked by the blackout.

### Cited Findings
- *EIA trades sit outside the blackout:* the EIA release is Wednesday 10:30 ET and the price reaction fades within about 25 minutes. A trade conditioned on the third half-hour, with entry around 11:00, is therefore outside the 5-minute blackout. — [Risk.net Geman & Li](https://www.risk.net/journal-of-energy-markets/5728636/an-analysis-of-intraday-market-response-to-crude-oil-inventory-shocks); [Wen et al.](https://www.iaee.org/ej/ejexec/ej44-5-Xu-exsum.pdf)
- *Turn-of-the-month needs overnight holds:* the window spans the last trading day through day 3. — [Quantpedia](https://quantpedia.com/strategies/turn-of-the-month-in-equity-indexes)
- *Pre-FOMC drift needs overnight holds:* the window is 2pm-to-2pm (24h). — [NY Fed](https://www.newyorkfed.org/medialibrary/media/research/staff_reports/sr512.html)

### Inferences
- **Micro contract availability:** micro gold (MGC) and micro crude (MCL) exist. As far as I know, Treasuries have micro-yield futures (10Y Yield, 10Y) rather than micro ZN; this is not verified in this session.
- **Costs on micros:** costs per unit of notional are higher on micros, so short-holding strategies with small edges per trade (EIA momentum at about 4% a year indicative) may be marginal after commissions and slippage. Verify costs before relying on any of them.
