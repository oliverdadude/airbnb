# Practitioner and quant-community intraday strategies: rules, published backtests, replications, and retail outcomes

Research note, October 2026. Method caveat: in this session WebFetch could not resolve any host and the proxy blocked direct downloads, so I could not open full PDFs. Every finding below comes from search-result extracts of the cited pages (abstracts, author blog posts, GitHub repo descriptions, regulator press releases). Where I could not see a figure on a cited page, it is under Gaps or labelled as unverified recollection. Check headline numbers against the PDFs before quoting them.

## 1. Zarattini / Aziz / Barbon papers (2023-2025): rules, results, costs, criticisms, replications, gold/FX applications

### Takeaway
The three Concretum/Bear Bull Traders papers publish transparent rules and large in-sample net returns: SPY noise-area Sharpe 1.33; Stocks-in-Play 5-min ORB Sharpe 2.81; QQQ ORB alpha of 33%/yr. Independent tests mostly undercut them. A 2026 out-of-sample test of the SPY noise-area strategy found Sharpe 0.39 and returns well below buy-and-hold. Independent ORB replications find the gross edge reproduces but is roughly wiped out by realistic spread and slippage. I found no credible published application of the noise-boundary method to gold or FX.

### Cited Findings

**A. "Beat the Market: An Effective Intraday Momentum Strategy for S&P500 ETF (SPY)" (Zarattini, Aziz, Barbon; SFI Research Paper 24-97; first posted May 2024, revised Feb 2025)**
- Reported results: from 2007 to early 2024, total return 1,985% net of costs, annualized return 19.6%, Sharpe 1.33. — [SFI listing](https://www.sfi.ch/de/publications/n-24-97-beat-the-market-an-effective-intraday-momentum-strategy-for-s-p500-etf-spy)
- The concept: trend-following positions open as soon as intraday prices show "abnormal demand/supply imbalance," rather than only in the last 30 minutes as in earlier academic work. Dynamic trailing stops limit downside. The paper tests different volatility regimes and the effect of commissions and slippage. — [SFI listing](https://www.sfi.ch/fr/publications/n-24-97-beat-the-market-an-effective-intraday-momentum-strategy-for-s-p500-etf-spy)
- The "noise area" is a band built from the average intraday move over the previous 14 days. A move outside it signals an imbalance that may persist through the session. — [Authors' MoneyShow slides](https://bearbulltraders.com/wp-content/uploads/2024/08/Money_Show_Final.pdf); [TradingView "Concretum Bands" replication](https://it.tradingview.com/script/CUpWCZhe-Concretum-Bands)
- Boundary formula: UpperBound = max(Open(t, 9:30), Close(t−1, 16:00)) × (1 + σ(t, 9:30→HH:MM)). The lower bound mirrors it with min(...) × (1 − σ). σ is the average absolute move from the open to that time of day over the last 14 days. The volatility multiplier is VM = 1 in all paper results. — [Concretum paper download](https://alexandria.unisg.ch/bitstreams/a99aba00-f967-49b3-aceb-f544dc386e0b/download); [Concretum Substack: SPY Intraday Momentum](https://concretumgroup.substack.com/p/beat-the-market-with-intraday-momentum)
- Exits: long stop = max(upper band, VWAP); short stop = min(lower band, VWAP). Stops are checked every 30 minutes, and positions are flat at the close. — [GitHub research note sbOogway/sbt2 #335](https://github.com/sbOogway/sbt2/issues/335). Another description: positions are unwound at the close, or when price crosses the opposite boundary, or as soon as price crosses the current band or VWAP. — [Wealth-Lab published strategy](https://www.wealth-lab.com/Strategy/DesignPublished?strategyID=97)
- Sizing: target 2% daily volatility, with leverage capped at 4×. — [Concretum Substack](https://concretumgroup.substack.com/p/beat-the-market-with-intraday-momentum)
- In Concretum's own ablation, switching to the current-band-plus-VWAP stop lifts annualized return to 9.7% and roughly doubles Sharpe to 1.24 for that step. This is an intermediate step, not the final levered configuration. — [Concretum Substack](https://concretumgroup.substack.com/p/beat-the-market-with-intraday-momentum)
- A step-by-step Python backtest is published by the authors. — [Concretum Substack: How to Backtest an Intraday Trading Strategy in Python](https://concretumgroup.substack.com/p/how-to-backtest-an-intraday-trading)
- **Out-of-sample test (Sheimy Paz Serpa, SSRN 7290621, 2026):**
  - The in-sample replication held up: Sharpe 1.34 over 2015-2024, and annualized return 19.8% vs the paper's 19.6%.
  - Out of sample (about May 2024 to March 2026), the strategy returned 9.4% vs 29.5% for buy-and-hold, with Sharpe 0.39.
  - The paper says the fall in risk-adjusted return is statistically significant. It also examines whether the shortfall is within historical drawdown norms.
  - Sources: [SSRN: Out-of-Sample Evaluation of an Intraday Momentum Strategy for SPY](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7290621); [Larry Swedroe, "When 'Beat the Market' Meets the Real World"](https://larryswedroe.substack.com/p/when-beat-the-market-meets-the-real)
- Swedroe's critique: the original results were entirely in-sample, and the rules were fixed choices calibrated on the same data used to evaluate them. — [Swedroe Substack](https://larryswedroe.substack.com/p/when-beat-the-market-meets-the-real). Sources disagree on the study's date: Swedroe calls it a June 2026 study, while the SSRN listing implied about August 2026.
- Other replications are weaker than the paper:
  - A TradingView implementation says results are "good, but not as good as stated in the paper," with smaller returns, a "very low" Sharpe and margin-call problems. — [TradingView "Out of the Noise Intraday Strategy with VWAP"](https://in.tradingview.com/script/gJeM3LZ5-Out-of-the-Noise-Intraday-Strategy-with-VWAP-YuL)
  - A QuantConnect embedded backtest of uncertain configuration shows Sharpe 0.598, max drawdown 25.5% and $108,870 in fees. — [QuantConnect backtest cache](https://quantconnect.com/terminal/cache/embedded_backtest_32f62726550888da5f2a06694ac37930.html)
  - Further public replications exist: [GitHub svettelnova/intraday-momentum-spy](https://github.com/svettelnova/intraday-momentum-spy); [quantmacro Substack paper review](https://quantmacro.substack.com/p/paper-review-an-effective-intraday), which notes that larger N (band multiplier) means less frequent trading.
- A futures adaptation trades Nasdaq-100 futures at a fixed one micro contract, with unattended webhook execution. — [Academia.edu: Noise-Band Intraday Momentum in Nasdaq-100 Futures](https://www.academia.edu/178953330/Noise_Band_Intraday_Momentum_in_Nasdaq_100_Futures)
- **Gold/FX:** I found no study applying the noise-area method to XAUUSD, GC or spot FX. EdgeLab lists a "Zarattini, Barbon & Aziz 2024 FX Microstructure" strategy, but the page gives no method or results. — [EdgeLab](https://edge-lab.app/). One TradingView implementation warns that the published edge was measured on SPY only, so readings on other tickers are not evidence of edge. — [TradingView Concretum Bands](https://it.tradingview.com/script/CUpWCZhe-Concretum-Bands)

**B. "A Profitable Day Trading Strategy for the U.S. Equity Market" (Zarattini, Barbon, Aziz; SSRN 4729284, 2024): 5-minute ORB on "Stocks in Play"**
- The universe is more than 7,000 US stocks, 2016-2023. "Stocks in Play" are stocks with unusually high activity on the day, usually from company news. The top-20 Stocks-in-Play portfolio returned over 1,600% net, with Sharpe 2.81 and annualized alpha of 36%. Passive S&P 500 exposure returned 198% over the same period. — [SSRN 4729284](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4729284); [IDEAS/RePEc](https://ideas.repec.org/p/chf/rpseri/rp2498.html); [Barbon paper page](https://abarbon.com/papers/a-profitable-day-trading-strategy-for-the-u-s-equity-market)
- Screens, per a third-party summary: opening price above $5; average daily volume of at least 1,000,000 shares over 14 days; 14-day ATR above $0.50. — [CXO Advisory summary](https://www.cxoadvisory.com/individual-investing/intraday-trading-of-overactive-stocks-via-opening-range-breakout/)
- Ranking: relative volume, defined as volume in the first 5 minutes today divided by the average first-5-minute volume over the previous 14 days. — [QuantConnect replication](https://www.quantconnect.com/research/18444/opening-range-breakout-for-stocks-in-play/)
- The QuantConnect replication got Sharpe of about 2.4 with beta near zero. A forum user paper-trading it found stops sometimes placed in the same minute as entry, which differs from the backtest assumption. — [QuantConnect research](https://www.quantconnect.com/research/18444/opening-range-breakout-for-stocks-in-play/); [QuantConnect forum](https://www.quantconnect.com/forum/discussion/18444/opening-range-breakout-for-stocks-in-play/)
- **Pre-registered out-of-sample test ("Pricing the Fill"):** it found a cost-labelling bug, priced fills with an explicit model, and "killed the strategy" at −0.0855R per trade over 2020-2026. — [GitHub js3872/Pricing-the-Fill](https://github.com/js3872/Pricing-the-Fill)
- One write-up of ORB on common data across 2010-2026 reports full-sample Sharpe −0.06 and out-of-sample −0.84. — [Papers With Backtest: ORB Trading Strategy, What Replication Shows](https://paperswithbacktest.com/strategies/orb-trading-strategy). The search tool attributed this figure but I could not open the page, so it is unconfirmed.
- Another full-market replication, in progress, uses $0.01/share stop slippage and a doubled-slippage robustness check. Its author reports negative expectancy for their own ORB variants over the last 5-9 months. — [GitHub POB-CL-DT PR #12](https://github.com/patrickobirmingham-eng/POB-CL-DT/pull/12)
- A commentary notes the results rely on single-source replication and lack peer-review validation. — [letsdatascience news item](https://letsdatascience.com/news/traders-adopt-orb-strategy-for-stocks-in-play-19394da2)

**C. "Can Day Trading Really Be Profitable?" (Zarattini & Aziz; SSRN 4416622, 2023): 5-minute ORB on QQQ, 2016-2023**
- Rule: if QQQ rises (falls) in the first 5-minute bar, buy (sell) at the start of the second bar. No trade if the first bar's open and close are about equal (a doji). — [SSRN 4416622](https://papers.ssrn.com/abstract=4416622); [Concretum page](https://concretumgroup.com/can-day-trading-really-be-profitable/); [CXO Advisory](https://www.cxoadvisory.com/technical-trading/day-trading-with-an-opening-range-breakout-strategy)
- Reported: annualized alpha of 33% net of commissions. On 3× TQQQ the strategy returned 1,484% vs 169% for QQQ buy-and-hold. The authors concede that broker leverage limits would cap the upside without leveraged ETFs. — [SSRN 4416622](https://papers.ssrn.com/abstract=4416622); [Retail Traders Repository review](https://retailtradersrepository.substack.com/p/trading-research-paper-can-day-trading-really-be-profitable)
- **Independent replication (giovannibrusco/zarattini-2023-orb-qqq):**
  - It breaks even at about 2.2¢/share of slippage, against a typical QQQ spread of about 1¢, so the edge is thin.
  - An NQ-confirmation filter is significant per trade (t = 2.05), but 76% of its PnL comes from 2022 alone.
  - The repo includes a placebo control and bootstrap confidence intervals.
  - An issue logs a forward test on ES futures, Mar-Sep 2026.
  - A README correction PR says the replication's net PnL was $138,639, while the paper reported $25k growing to $192,806.
  - Sources: [GitHub repo](https://github.com/giovannibrusco/zarattini-2023-orb-qqq); [Issue #3](https://github.com/giovannibrusco/zarattini-2023-orb-qqq/issues/3); [PR #4](https://github.com/giovannibrusco/zarattini-2023-orb-qqq/pull/4)
- **Replication on five index CFDs (MQL5 blog, 25 Sep 2026):** "gross reproduced, net zero." It also criticises the paper for charging commission but no spread or slippage, and for having no out-of-sample period. — [MQL5 blog](https://www.mql5.com/en/blogs/post/776235)
- A 2026 preprint, "Opening-Range Breakout Does Not Survive Trading Costs," tests nine liquid US futures markets (equity indices, metals, energy) on a pre-registered grid. Its peer-review status is unconfirmed. — referenced in search results alongside [Holmberg et al. on IDEAS](https://ideas.repec.org/a/eee/finlet/v10y2013i1p27-33.html); I could not retrieve its URL.
- Conflict of interest: Aziz is a day-trading educator (Bear Bull Traders) and publicly answers the title question "yes … we are living proof." — [Bear Bull Traders post](https://members.bearbulltraders.com/can-day-trading-really-be-profitable-or-is-it-just-a-dream/); [Wikipedia: Andrew Aziz](https://en.wikipedia.org/wiki/Andrew_Aziz)

### Inferences
- The pattern repeats across all three papers: the rules are transparent and the in-sample replications reproduce, but the edge is thin relative to realistic costs and decays out of sample. The best-tested case (SPY noise area) went from Sharpe about 1.3 in-sample to 0.39 live. That is consistent with modest real but overfit/decayed momentum, or with chance.
- Edge per trade for ORB on liquid ETFs is about 1-2¢/share. On gold CFDs or spot FX, retail spreads are wider relative to intraday range than QQQ's 1¢ spread. Any port to XAUUSD therefore needs explicit spread and slippage modelling, ideally session-dependent, and should be judged net.
- The noise-area method has not been publicly tested on gold or FX. Porting it would be original research and needs a pre-registered out-of-sample design. The user's own failed tests (London Asian-range breakout, NY 30-minute ORB) are close cousins of ORB, which lowers the prior for ORB-type ports.

### Gaps
- I could not open the PDFs, so these details are unverified recollection only:
  - SPY paper: commission about $0.0035/share plus $0.001 slippage, and trade checks only at HH:00/HH:30.
  - Stocks-in-Play paper: entry by stop order at the 5-minute range high or low; stop at 10% of the 14-day ATR; 1% risk per trade; 4× leverage cap; exit at end of day.
  - QQQ paper: stop at the opposite end of the first bar and a 10R profit target.
- Max drawdowns and hit rates for all three papers, and the out-of-sample drawdown in Serpa (2026), were not visible.
- I found no independent replication of the noise-area method on gold or FX. The EdgeLab "FX Microstructure" listing could not be verified.

## 2. Other transparent intraday systems on gold (XAUUSD/GC) or FX with credible long-sample evidence

### Takeaway
Credible, long-sample, cost-inclusive evidence for transparent intraday rules on gold or major FX is sparse. Academic evidence exists for intraday time-series momentum (first half-hour predicts last half-hour) in US equities, some commodities, Chinese gold futures and RUB-USD, but the effects are small (R² of about 1-3%) and mostly tested gross. Daily-bar ORB on crude oil was profitable only before costs. I found no academic test of Larry Williams volatility breakout on FX or gold.

### Cited Findings
- **Gao, Han, Li & Zhou, "Market Intraday Momentum" (JFE 2018), SPY 1993-2013:** the first half-hour return since the prior close significantly predicts the last half-hour return. The effect is stronger on volatile days, high-volume days, recession days and macro-news days. — [ScienceDirect](https://www.sciencedirect.com/science/article/abs/pii/S0304405X18301351); [SSRN working paper PDF](https://www.smallake.kr/wp-content/uploads/2015/01/SSRN-id2440866.pdf). The search summary gave R² of about 1-2.6%.
- A global cross-check on SPY and 12 international index futures found that the first half-hour return did not predict, while the overnight return did predict the last half-hour return. — [Reading University accepted version, "Intraday time series momentum: global evidence"](https://centaur.reading.ac.uk/95566/1/Accepted-Version.pdf)
- FX: Elaut, Frömmel & Lampaert (2018) find that the first half-hour return predicts the last half-hour return in RUB-USD. I saw this only through secondary citations. — cited in [QUB "Intraday Time-series Momentum: Evidence from China"](https://pureadmin.qub.ac.uk/ws/files/194643805/Intraday_Time_series_Momentum_Evidence_from_China.pdf)
- Gold (China): intraday momentum and intraday reversal both appear in Chinese gold and silver futures, with metal-specific patterns. Before night trading launched, the daytime first half-hour return was the efficient predictor. — [ScienceDirect, "The 'night effect' of intraday trading," 2025](https://www.sciencedirect.com/science/article/abs/pii/S1044028325000110)
- Chinese copper, steel, soybean and soybean meal futures show the first-to-last half-hour pattern. — [QUB PDF](https://pureadmin.qub.ac.uk/ws/files/194643805/Intraday_Time_series_Momentum_Evidence_from_China.pdf)
- Holmberg, Lönnbark & Lundström, "Assessing the profitability of intraday opening range breakout strategies" (Finance Research Letters 10(1), 2013, pp. 27-33): ORB on US crude oil futures, 1983-2011, from daily OHLC data. Returns are significantly above zero and the success rate beats a fair game. A later critique notes the test used daily bars and zero costs. — [IDEAS/RePEc](https://ideas.repec.org/a/eee/finlet/v10y2013i1p27-33.html); [Umeå working paper](http://www.econ.umu.se/ueslpnr/ues845.pdf)
- "Forecast-to-Fill" (arXiv 2511.08571) reports an out-of-sample gold futures strategy for 2015-2025 with Sharpe 2.88. It is a different, model-based class of strategy and is unverified. — [arXiv](https://arxiv.org/html/2511.08571v1)
- A retail daily-bar gold trend breakout (2000-2026, out-of-sample since late 2024) has been published but not peer-reviewed. — [Algomatic Trading Substack, Strategy #17](https://algomatictrading.substack.com/p/strategy-17-trend-following-gold)

### Inferences
- The most defensible gold/FX intraday hypothesis from the literature is conditional intraday momentum: trade only on high-volatility or macro-news days, in the direction of the early-session move, with an end-of-day exit. This fits the Zarattini noise-area logic. But published gold and FX evidence is either Chinese-market, emerging-market FX, or gross of costs.
- Because the user's session-based breakouts already failed, a volatility-normalised trigger (noise band) plus regime filters (high realized vol or news days) is the most distinct remaining idea. It still has no published gold/FX validation.

### Gaps
- I found no peer-reviewed or long-sample independent test of Larry Williams volatility breakout on FX or gold, and no VWAP-trend test on XAUUSD with realistic spreads.
- I found no published first-to-last half-hour momentum test on COMEX gold or on EUR/USD or USD/JPY.

## 3. Evidence on retail day-trader outcomes

### Takeaway
The large-sample evidence is consistent and bleak:
- Taiwan: fewer than 1% of day traders reliably earn positive abnormal returns net of fees, and 97% are likely to lose in future.
- Brazil: 97% of persistent futures day traders lost money, and only about 0.4-0.5% earned more than a bank teller.
- EU and UK: regulators found 74-89% (EU) and 82% (UK) of retail CFD accounts lose money.

### Cited Findings
- **Barber, Lee, Liu & Odean, "The Cross-Section of Speculator Skill: Evidence from Day Trading" (J. Financial Markets 2014), Taiwan 1992-2006:** fewer than 1% of day traders can predictably earn positive abnormal returns net of fees. The top 500 ranked on the prior year earned 61.3 bps/day before fees and 37.9 bps/day after fees in the published version; the 2011 working paper had 49.5/28.1. — [eScholarship](https://www.escholarship.org/uc/item/7k75v0qx); [Berkeley working paper PDF](https://faculty.haas.berkeley.edu/odean/papers/day%20traders/Day%20Trading%20Skill%20110523.pdf)
- **Barber, Lee, Liu, Odean & Zhang, "Learning, Fast or Slow" (Review of Asset Pricing Studies 10(1), 2020, pp. 61-93; earlier titled "Do Day Traders Rationally Learn About Their Ability?"):**
  - 97% of day traders are likely to lose money in future day trading.
  - 74% of day-trading volume comes from traders with a history of losses.
  - More than 75% of day traders quit within two years.
  - Unprofitable traders quit more, yet many persist despite extensive losses.
  - Sources: [IDEAS/RePEc](https://ideas.repec.org/a/oup/rasset/v10y2020i1p61-93..html); [Berkeley PDF](https://faculty.haas.berkeley.edu/odean/papers/day%20traders/day%20trading%20and%20learning%20110217.pdf)
- **Barber, Lee, Liu & Odean, "Do Individual Day Traders Make Money?" (2004):** about 1% of individual investors account for 50% of day trading. — [CXO Advisory](https://www.cxoadvisory.com/individual-investing/do-day-traders-make-money/)
- **Chague, De-Losso & Giovannetti, "Day Trading for a Living?" (FGV EESP TD 525, Feb 2020; SSRN 3423101, revised June 2020):**
  - Sample: Brazilian mini-index futures day traders who started in 2013-2015 and persisted for at least 300 days, out of 19,646 starters.
  - 97% lost money and only 0.4% earned more than a bank teller's wage (US$54/day).
  - The best individual earned US$310/day, with a standard deviation of US$2,560.
  - There is no evidence of learning.
  - Sources: [FGV repository](https://repositorio.fgv.br/items/e87d04fc-4b4c-4a56-ab5a-1c84c1afde1b/full); [EconPapers](https://econpapers.repec.org/RePEc:fgv:eesptd:525). CXO frames it as 3.0% with positive net daily returns and 0.5% above bank-teller wages. CXO also cautions the sample period may have been especially hard and may not generalise. — [CXO Advisory](https://www.cxoadvisory.com/investing-expertise/day-trading-a-bust/)
- **ESMA product intervention (27 March 2018):** national regulators' analyses found 74-89% of retail CFD accounts typically lose money, with average losses per client of €1,600-€29,000. Measures: retail leverage caps of 30:1 on major FX and 20:1 on non-major FX, gold and major indices; negative-balance protection; a ban on incentives; standardised risk warnings. — [ESMA press release](https://www.esma.europa.eu/node/84933)
- **FCA (6 Dec 2016 consultation):** a representative sample of client accounts showed 82% of clients lost money on CFDs. The FCA proposed mandatory disclosure of profit-loss ratios and leverage caps (25:1 for inexperienced clients, 50:1 maximum). — [FCA press release](https://fca.org.uk/news/press-releases/fca-proposes-stricter-rules-contract-difference-products)

### Inferences
- The base rate for a retail intraday trader being reliably profitable after costs is about 1-3% across markets and decades. A backtest Sharpe above 1 should be treated as most likely overfit or cost-optimistic until it survives a live or forward test.
- Brokers' mandated "X% of retail accounts lose money" warnings, which come from the ESMA rules, are a current, verifiable figure for the specific CFD provider being used.

### Gaps
- I did not retrieve current (2025-2026) broker-specific loss-rate disclosures for gold or FX CFD providers.

## 4. Common backtest pitfalls for intraday strategies

### Takeaway
The main failure modes are:
- Cost under-modelling: no spread or slippage, or stops filled at the stop price. This alone flips the published ORB edges to zero.
- Fill ambiguity: same-bar stop and entry, intrabar order.
- Multiple testing and overfitting: correct with the Deflated Sharpe Ratio, Probability of Backtest Overfitting and Minimum Backtest Length, which need the number of trials to be reported.

### Cited Findings
- Cost sensitivity in practice:
  - QQQ ORB breaks even at about 2.2¢/share of slippage. — [giovannibrusco replication](https://github.com/giovannibrusco/zarattini-2023-orb-qqq)
  - The QQQ paper charges commission but no spread or slippage, and the edge nets to zero on CFDs. — [MQL5 blog](https://www.mql5.com/en/blogs/post/776235)
  - A cost-labelling bug inflated the Stocks-in-Play results. — [Pricing-the-Fill](https://github.com/js3872/Pricing-the-Fill)
- Execution realism: in live paper trading, stop orders landed within the same minute as entry, contrary to backtest assumptions. — [QuantConnect forum](https://quantconnect.com/forum/discussion/18444/opening-range-breakout-for-stocks-in-play/p3/comment-50495)
- Leverage and margin: replications report margin-call issues under the 4× sizing. — [TradingView "Out of the Noise"](https://in.tradingview.com/script/gJeM3LZ5-Out-of-the-Noise-Intraday-Strategy-with-VWAP-YuL)
- In-sample calibration: the noise-area rules were fixed choices calibrated on the evaluation data, and Sharpe fell from 1.34 to 0.39 out of sample. — [Swedroe](https://larryswedroe.substack.com/p/when-beat-the-market-meets-the-real); [SSRN 7290621](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7290621)
- **Deflated Sharpe Ratio** (Bailey & López de Prado, J. Portfolio Management 2014): corrects for selection bias under multiple testing and for non-normal returns. It is a Probabilistic Sharpe Ratio whose benchmark is raised to reflect the number of strategies tried. — [SSRN 2460551](https://papers.ssrn.com/abstract=2460551)
- **Probability of Backtest Overfitting** (Bailey, Borwein, López de Prado & Zhu, J. Computational Finance): estimated by combinatorially symmetric cross-validation. The authors argue standard holdout is unreliable for backtests. — [SSRN 2326253](https://papers.ssrn.com/abstract=2326253)
- **Minimum Backtest Length** ("Pseudo-Mathematics and Financial Charlatanism"): the required sample grows with ln(N trials), and it is a necessary but not sufficient condition. Overfitting cannot be assessed if the number of alternatives tried is not reported. — [Bailey et al. PDF](https://carmamaths.org/jon/backtest2.pdf); [CXO Advisory on iterative backtest overfitting](https://www.cxoadvisory.com/big-ideas/insidiousness-of-overfitting-investment-strategies-via-iterative-backtests)

### Inferences
- The user has already tested at least seven variants: Asian-range breakout, NY ORB, EMA cross, Bollinger reversion, RSI(2), Donchian and seasonality. Including parameter sweeps, the effective N is probably dozens, so any new "winner" should be judged with DSR using that cumulative N.
- For gold and FX on bar data, three precautions follow:
  - Model session- and news-dependent spreads, because spreads widen around releases such as NFP and CPI.
  - Resolve same-bar stop and target conflicts pessimistically, or with tick or 1-second data.
  - Hold out a pre-registered out-of-sample period, as the Pricing-the-Fill and Serpa studies did.

### Gaps
- I found no specific source that quantifies intrabar fill ambiguity or news-time spread widening for XAUUSD or major FX. That search returned nothing usable.
