# Market Intraday Momentum in Futures and ETFs (equity, commodity/gold, FX, bonds)

Method note (Oct 2026): direct page and PDF fetches were blocked by this session's egress policy (403 on nd.edu, ssrn, sciencedirect mirrors, alphaarchitect, mql5, unisg). All findings below come from search-result abstracts and snippets of the cited pages, not from reading full papers. Exact table-level numbers (per-asset-class coefficients, per-contract Sharpe ratios, net-of-cost tables) could therefore not be checked and are listed under Gaps. Numbers marked "unverified" came from a search summary without a clear quoted source.

## 1. Gao, Han, Li & Zhou (2018, JFE 129(2):394-414), "Market intraday momentum"

### Takeaway
The first half-hour return (prior 16:00 close to 10:00 ET) on SPY predicts the last half-hour return (15:30-16:00 ET). A timing rule that holds SPY only in the last half-hour, long or short by the sign of the signal, earned about 6.7% a year at about 6.2% volatility (Sharpe about 1.08) over 1993-2013. The effect is stronger on high-volatility, high-volume, recession and macro-news days. Evidence on returns after costs is thin and comes from the authors only.

### Cited Findings
- Published as "Market intraday momentum", JFE 2018. Working-paper title: "Intraday Momentum: The First Half-Hour Return Predicts the Last Half-Hour Return" (SSRN 2440866). — [ScienceDirect](https://www.sciencedirect.com/science/article/abs/pii/S0304405X18301351); [SSRN draft mirror](https://www.smallake.kr/wp-content/uploads/2015/01/SSRN-id2440866.pdf)
- Sample: S&P 500 ETF (SPY) intraday data, 1 Feb 1993 to 31 Dec 2013. The 2014 draft used 1999-2012. — [Gao et al. PDF](https://assets.super.so/e46b77e7-ee08-445e-b43f-4ffd88ae0a0e/files/ee7dac49-530b-4950-b5d0-e0b5eee08f2e.pdf); [ResearchGate](https://www.researchgate.net/publication/272303487_Intraday_Momentum_The_First_Half-Hour_Return_Predicts_the_Last_Half-Hour_Return)
- Signal: the first half-hour return measured from the previous day's close, so it includes the overnight gap (prior close to 10:00 ET). Target: the last half-hour return (15:30-16:00). The paper also uses the 12th half-hour (15:00-15:30) as a second predictor. — [Gao et al. PDF](https://assets.super.so/e46b77e7-ee08-445e-b43f-4ffd88ae0a0e/files/ee7dac49-530b-4950-b5d0-e0b5eee08f2e.pdf)
- Fit: the 2014 draft reports an R² of about 2% from regressing the last half-hour on the first half-hour. In-sample R² rises with first-half-hour volume, from 1.1% on low-volume days to 3.1% on high-volume days. — [Search summary of draft](https://c.mql5.com/forextsd/forum/173/intraday_momentum_-_the_first_half-hour_return_predicts_the_last_half-hour_return.pdf); [Gao et al. PDF](https://assets.super.so/e46b77e7-ee08-445e-b43f-4ffd88ae0a0e/files/ee7dac49-530b-4950-b5d0-e0b5eee08f2e.pdf)
- Timing strategy: the position is open only in the last half-hour, long if r1 > 0 and short if r1 < 0. Results: Sharpe 1.08, 6.67% average annual return, 6.19% annual volatility. Daily buy-and-hold had a Sharpe of 0.29. — [Gao et al. PDF](https://assets.super.so/e46b77e7-ee08-445e-b43f-4ffd88ae0a0e/files/ee7dac49-530b-4950-b5d0-e0b5eee08f2e.pdf)
- The effect is stronger on more volatile days, higher-volume days, recession days and major macro-news release days. — [WUSTL profile / abstract](https://profiles.wustl.edu/en/publications/market-intraday-momentum/)
- Other markets: the effect also appears in 10 other heavily traded domestic and international ETFs. The working paper adds two international equity index futures. — [SUFE newsletter abstract](https://academicnewsletter.sufe.edu.cn/info/356150); [Alpha Architect 2014 summary](https://alphaarchitect.com/2014/08/attention-prop-traders-the-first-half-hour-of-trading-predicts-the-last-half-hour/)
- Explanations: (a) infrequent portfolio rebalancing (Bogousslavsky 2016); (b) late-informed traders who trade near the close. — [WUSTL abstract](https://profiles.wustl.edu/en/publications/market-intraday-momentum/)
- Costs: the authors say the effect survives reasonable transaction costs. A search summary reports that their post-decimalization cost test cut the r1-signal average annual return from 6.51% to 4.46% (unverified: no quote was shown, and 6.51% does not match the published 6.67%, possibly a different version or sample). — [Gao et al. PDF](https://assets.super.so/e46b77e7-ee08-445e-b43f-4ffd88ae0a0e/files/ee7dac49-530b-4950-b5d0-e0b5eee08f2e.pdf)
- A QuantConnect replication says the pattern stays statistically and economically significant after trading fees, but it does not model spreads in detail. — [QuantConnect](https://www.quantconnect.com/learning/articles/investment-strategy-library/intraday-etf-momentum)

### Inferences
- About 6.7% a year at about 6% volatility from a 30-minute daily exposure means a per-trade edge of roughly 2.6 bp per day (6.67% / 252). A round trip costing more than about 1-2 bp therefore removes most of the edge. It suits ES/SPY-level liquidity, not wide-spread retail CFDs.
- The signal includes the overnight move. A 24-hour market (gold, FX) has no single "open", so the signal window has to be chosen deliberately.

### Gaps
- Could not verify the published out-of-sample R², the combined r1+r12 strategy statistics, or the exact net-of-cost table.

## 2. Baltussen, Da, Lammers & Martens (2021, JFE 142(1):377-403), "Hedging demand and market intraday momentum"

### Takeaway
Across more than 60 futures (equities, bonds, commodities, currencies; 1974-2020), the return over the rest of the day (prior close to 30 minutes before close) positively predicts the last 30 minutes. A simple strategy has annualised Sharpe ratios of 0.87-1.73 by asset class. The authors attribute the effect to short-gamma hedging by options market makers and leveraged/inverse ETF rebalancing, which is concentrated near the close. The effect reverses over the following days, so it reflects price pressure rather than information.

### Cited Findings
- Data: intraday returns on more than 60 futures across equities, bonds, commodities and currencies, 1974-2020. Strong market intraday momentum appears "everywhere". — [Erasmus repository](https://pure.eur.nl/en/publications/hedging-demand-and-market-intraday-momentum/); [ScienceDirect](https://www.sciencedirect.com/science/article/abs/pii/S0304405X21001598); [SSRN 3760365](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3760365)
- Main specification: the return in the last 30 minutes before the close is positively predicted by the return over the rest of the day, measured from the previous close to the last half-hour. The predictability reverts over the next days. — [Erasmus repository](https://pure.eur.nl/en/publications/hedging-demand-and-market-intraday-momentum/); [Tinbergen](https://tinbergen.nl/publication/168044/hedging-demand-and-market-intraday-momentum)
- Strategy performance: a simple market intraday momentum strategy earns annualised Sharpe ratios of 0.87 to 1.73 at the asset-class level. — [Alpha Architect summary](https://alphaarchitect.com/hot-topic-does-gamma-hedging-actually-affect-stock-prices/); [ND preprint](https://academicweb.nd.edu/~zda/intramom.pdf)
- Mechanism: dealers who are short gamma must trade with the price move, which creates momentum. The paper ties intraday momentum to gamma hedging by options market makers and by leveraged ETFs. On S&P 500 options and leveraged ETFs, the size of hedging demand on an index drives the strength of its intraday momentum. Most hedging takes place near the close, but large intraday price jumps also predict later returns. — [Alpha Architect summary](https://alphaarchitect.com/hot-topic-does-gamma-hedging-actually-affect-stock-prices/); [SUFE abstract](https://academicnewsletter.sufe.edu.cn/info/355465)
- A secondary summary reports that the relationship is particularly strong in Nasdaq-100 futures. — [danfin.net](https://danfin.net/intraday-momentum-final-30-minutes)
- Follow-ups by the same team: "End-of-Day Reversal" (Baltussen, Da, Soebhag; SSRN 5039009, EFMA 2024) studies close-time effects in the cross-section. A related EFMA 2021 paper studies end-of-day momentum in the cross-section and links it to option hedging. — [EOD reversal SSRN](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5039009); [EFMA 2021](https://www.efmaefm.org/0EFMAMEETINGS/EFMA%20ANNUAL%20MEETINGS/2021-Leeds/papers/EFMA%202021_stage-2049_question-Full%20Paper_id-237.pdf)
- A 0DTE-era paper finds that market makers' net inventory gamma is on average positive. Positive dealer gamma strengthens intraday reversal, and negative dealer gamma strengthens momentum. — [ResearchGate: 0DTEs, Gamma Risk](https://www.researchgate.net/publication/377984312_0DTEs_Trading_Gamma_Risk_and_Volatility_Propagation)
- Adams, Fontaine & Ornthanalai report lower S&P 500 volatility on 0DTE days. They find that market makers' intraday hedging needs predict later E-mini order flow, realised volatility and momentum returns. — [Adams et al. PDF](https://www.jean-sebastienfontaine.com/papers/0dte-options-volatility.pdf)

### Inferences
- Under the gamma mechanism, the effect should be strongest where options and leveraged-ETF short-gamma exposure is large relative to liquidity (US equity indices, especially the Nasdaq-100). It should be weaker in markets with less option gamma relative to depth, likely including spot FX majors (an inference, not verified from the paper's tables).
- For gold, positioning in COMEX GC options and gold ETF options could matter. Gold has no leveraged-ETF rebalancing flow of equity-index scale, so the hedging channel is likely weaker than for NQ or ES (inference).
- If dealers are often long gamma in the 0DTE era, US index intraday momentum could weaken or become conditional on the sign of dealer gamma. This is evidence of conditional decay, not of total disappearance.

### Gaps
- Could not confirm which asset class sits at each end of the 0.87-1.73 Sharpe range, or the coefficients for gold (GC), crude (CL), FX futures (6E, 6J, etc.) or bonds. The full paper tables were inaccessible.
- Could not confirm the paper's cost assumptions or its exact close-time conventions for FX and commodity futures. It probably uses each contract's pit or settlement close, but this is unverified.

## 3. Replications and extensions (commodities incl. gold and crude, FX, China, international, decay, filters)

### Takeaway
The pattern replicates widely: in 12 of 16 developed equity markets (in and out of sample), in China's index and commodity futures, in USO (crude), in VIX futures, in KOSPI and in RUB/USD FX. Gold evidence is mixed: Chinese precious-metal futures show both momentum and reversal depending on the market. Major-FX evidence is thin outside Baltussen et al.'s currency futures. Out-of-sample evidence that the effect has decayed since publication is mostly practitioner work, but it points toward weakening for ES/SPY in 2025-26.

### Cited Findings
- International: Li, Sakkas & Urquhart (J. Financial Markets 2022, vol. 57, 100619) use 16 developed markets. Intraday time-series momentum is economically sizable and significant in and out of sample in most countries. 12 of 16 markets show it; evidence is weak in Austria, Canada, Ireland and New Zealand. It is stronger when liquidity is low, volatility is high and information arrives discretely. — [SSRN 3460965](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3460965); [Nottingham repository](https://nottingham-repository.worktribe.com/file/5273197/1/Interday); [Reading accepted version](https://centaur.reading.ac.uk/95566/1/Accepted-Version.pdf)
- China commodity futures (JFM 2020, 40(4):632-650): for copper, steel, soybean and soybean meal futures, the first half-hour return positively predicts the last half-hour return in all four. — [IDEAS/RePEc](https://ideas.repec.org/a/wly/jfutmk/v40y2020i4p632-650.html)
- China equity index: "Intraday Time-series Momentum: Evidence from China" (Jin et al.). — [QUB PDF](https://pureadmin.qub.ac.uk/ws/files/194643805/Intraday_Time_series_Momentum_Evidence_from_China.pdf); [MPRA](https://ideas.repec.org/p/pra/mprapa/97134.html)
- Chinese metal futures including gold, 1-minute data: the first half-hour return predicted later half-hour returns in four metals, but the snippet does not confirm the last half-hour specifically. — [ACFR / AUT paper, Z. Ivy Zhou](https://acfr.aut.ac.nz/__data/assets/pdf_file/0008/686816/4a-Z-Ivy-Zhou.pdf)
- Chinese gold and silver futures ("night effect"; ScienceDirect 2025): both intraday momentum and intraday reversal exist, and the patterns depend on the market (day vs. night session). — [ScienceDirect S1044028325000110](https://www.sciencedirect.com/science/article/abs/pii/S1044028325000110)
- Crude oil (Economic Modelling, USO 2006-2018): only the first half-hour return positively predicts the last half-hour return. This is attributed to infrequent rebalancing and late-informed investors. — [ScienceDirect S0264999319310417](https://www.sciencedirect.com/science/article/abs/pii/S0264999319310417)
- A GitHub project replicating Baltussen et al. on CL also exists (student work, results not verified). — [GitHub issue](https://github.com/gwino/futures-project-group3/issues/24)
- Commodity ETFs and their volatility indices show intraday return predictability. — [PMC7480318](https://pmc.ncbi.nlm.nih.gov/articles/PMC7480318/)
- Coffee futures (J. Commodity Markets 2026, vol. 41): intraday market momentum and its drivers. — [IDEAS](https://ideas.repec.org/a/eee/jocoma/v41y2026ics2405851325000819.html)
- Bonds: "Bond intraday momentum" (J. Behavioral and Experimental Finance 2021, vol. 31). — [IDEAS](https://ideas.repec.org:443/a/eee/beexfi/v31y2021ics2214635021000599.html)
- VIX futures: "Intraday momentum in the VIX futures market" (J. Banking & Finance 2022). — [ScienceDirect S0378426622003260](https://www.sciencedirect.com/science/article/abs/pii/S0378426622003260)
- KOSPI: market intraday momentum tested with new trading-cost measures (JRFM 2022, 15(11):523). — [MDPI](https://www.mdpi.com/1911-8074/15/11/523)
- FX: Elaut, Frömmel & Lampaert use tick data for RUB/USD on MICEX, 2005-2014. The first half-hour return positively predicts the last half-hour return. They attribute this to risk-averse liquidity providers who avoid holding overnight positions, not to informed trading. — [SSRN 2694985](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2694985)
- Individual stocks (Sweden): weak results, with Sharpe ratios near zero or negative for several stocks. — [DiVA thesis](https://www.diva-portal.org/smash/get/diva2:1878991/FULLTEXT01.pdf)
- Pandemic period: for both the S&P 500 and CSI 300, the last-half-hour intraday momentum relation was not significant during the COVID shock. — [Murdoch University](https://researchportal.murdoch.edu.au/esploro/outputs/journalArticle/The-impact-of-intraday-momentum-on/991005544842407891)
- Bitcoin intraday time-series momentum (Reading). — [Reading PDF](https://centaur.reading.ac.uk/100181/3/21Sep2021Bitcoin%20Intraday%20Time-Series%20Momentum.R2.pdf)
- Volatility/band-filtered variant: Zarattini, Aziz & Barbon (2024/25, SFI WP 24-97), "Beat the Market". They trade SPY at 30-minute decision points when price breaks a "Noise Area" band (14-day average absolute move from the open). Exits use VWAP-based trailing stops, sizing is volatility-targeted, and all positions are flat at the close. Reported net of costs for 2007 to early 2024: 1,985% total return, 19.6% a year, Sharpe 1.33. — [SFI](https://www.sfi.ch/en/publications/n-24-97-beat-the-market-an-effective-intraday-momentum-strategy-for-s-p500-etf-spy); [Concretum](https://concretumgroup.com/beat-the-market-an-effective-intraday-momentum-strategy-for-sp500-etf-spy/); [Swedroe](https://larryswedroe.substack.com/p/when-beat-the-market-meets-the-real)
- Out-of-sample test of that strategy: Swedroe notes the original rules were chosen in sample. Serpa (June 2026) replicated about 19.8% a year and a Sharpe of about 1.34 for 2015-2024, then tested May 2024 to March 2026. The out-of-sample figures were not visible in the snippet. — [Swedroe Substack](https://larryswedroe.substack.com/p/when-beat-the-market-meets-the-real)
- Independent GitHub replication on SPY and ES: Sharpe about 1.11 overall; the edge has weakened since 2025, with recent Sharpe near zero on both. — [GitHub giovannibrusco](https://github.com/giovannibrusco/zarattini-2024-momentum-spy)
- Another GitHub replication on 1-minute NQ and ES (2010s-2026, after costs): the strategy held on NQ, but ES was negative after costs from 2013 to 2026. — [GitHub VigorTas](https://github.com/VigorTas/beat-the-market-replication)
- arXiv 2605.04004 (2026) is a "systematic falsification study" of OHLCV-based intraday momentum signals in MNQ futures. It is cited here only as evidence of skeptical recent work; its results were not verified. — [arXiv](https://arxiv.org/pdf/2605.04004)

### Inferences
- Pattern of decay: the academic papers (data ending 2013, 2018 and 2020) report robust effects. Post-2024 practitioner out-of-sample work on ES/SPY shows weakening, while NQ holds up better. This fits the gamma story (Nasdaq has a larger leveraged-ETF and options footprint relative to liquidity) and possibly arbitrage after publication.
- Conditioning on high volatility, high volume or news days repeatedly strengthens the effect (Gao et al.; Li et al.). This is the most robust filter in the literature.

### Gaps
- No primary peer-reviewed study was found that tests the first/last half-hour rule on spot XAUUSD or on major spot FX pairs (EURUSD, USDJPY), using either NY or 17:00 rollover timing.
- No formal academic out-of-sample post-2020 test of the Gao/Baltussen signal on ES or other futures was found. Decay evidence is practitioner-level only.

## 4. Best-documented implementable rule, and how it maps to XAUUSD / FX on 15-minute bars

### Takeaway
The cleanest and best-documented rule is Gao et al.'s and Baltussen et al.'s: go long or short the last 30 minutes before the official close, by the sign of the return from the prior close to 30 minutes before the close (Baltussen) or to the end of the first half-hour (Gao). Sizing can be equal or scaled by volatility, optionally trading only on high-volatility or high-volume days. Documented Sharpe ratios are about 0.9-1.7 gross. Costs are survivable only at futures-level spreads. The more elaborate Noise-Area rule shows higher in-sample Sharpe (1.33 net) but fragile out-of-sample results.

### Cited Findings
- Gao rule: signal = prior 16:00 close to 10:00 ET; trade = 15:30-16:00 ET; Sharpe 1.08 for 1993-2013. — [Gao et al. PDF](https://assets.super.so/e46b77e7-ee08-445e-b43f-4ffd88ae0a0e/files/ee7dac49-530b-4950-b5d0-e0b5eee08f2e.pdf)
- Baltussen rule: signal = rest-of-day return (prior close to 30 minutes before close); trade = last 30 minutes; Sharpe 0.87-1.73 by asset class. — [Alpha Architect](https://alphaarchitect.com/hot-topic-does-gamma-hedging-actually-affect-stock-prices/)
- Filters: the effect is stronger on volatile, high-volume, news and recession days. — [WUSTL](https://profiles.wustl.edu/en/publications/market-intraday-momentum/); [Li et al.](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3460965)
- A practitioner warning: the per-trade edge is small enough to disappear after costs. — [quantum-bias.com](https://quantum-bias.com/blog/first-last-half-hour-intraday-momentum)

### Inferences (translation to XAUUSD / FX majors, 15-minute bars, NY timing) — not tested in any source found
- The mechanism ties momentum to the official close or settlement, where hedging and rebalancing flows concentrate. The relevant gold "close" is likely the COMEX GC settlement (13:30 ET) and the end of the US equity session (16:00 ET), not 17:00 NY rollover. For FX the relevant fixes are the WM/R 4pm London fix (11:00 ET) and the 16:00/17:00 NY cut (inference; no source found testing which one works).
- Suggested test grid. Signal: 17:00 NY prior close to 10:00 NY (Gao analogue), or 17:00 NY to 15:30 NY (Baltussen rest-of-day analogue). Trade the last 30 minutes (two 15-minute bars) into 16:00 NY and, separately, into the 13:30 COMEX settle for gold. Sign rule, with volatility-scaled size of 1/σ of the trailing 20-day signal-window return. Optional filter: trade only when |signal| or the day's realised volatility is in the top tercile.
- Cost hurdle: the equity-index edge is a few bp per trade, so XAUUSD/FX spreads plus slippage must be well under about 1-2 bp per side on the trading window for the strategy to work. Tight-spread ECN pricing on EURUSD/USDJPY may clear this; typical retail XAUUSD spreads (around 1.5-3 bp) probably do not, unless the signal is filtered to high-volatility days, where expected moves are larger.
- Expectation: given thin FX and gold evidence and post-2024 decay on ES, treat any XAUUSD/FX version as a hypothesis needing a walk-forward test. It should not be treated as an established edge.

### Gaps
- No published after-cost Sharpe for any spot-gold or major-FX implementation was found.
- No evidence was found on whether the 17:00 NY rollover or the 16:00 NY close is the better trading-window endpoint for FX.
