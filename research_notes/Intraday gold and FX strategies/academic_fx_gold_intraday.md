# Academic evidence on intraday (flat-by-close) strategies in spot FX and gold

Method note: about 22 search and fetch calls. Many primary-source hosts (ideas.repec.org, mpra.ub.uni-muenchen.de, snb.ch, bankofcanada.ca, aeaweb.org, columbia.edu) failed DNS resolution in the fetch tool, so most findings come from abstracts and search snippets, not full texts. Exact Sharpe ratios, cost assumptions and timing parameters could not be checked against full papers. Where I add detail from prior knowledge that I could not confirm here, it is labelled "unverified" and kept out of Cited Findings.

## Q1. Which intraday patterns in FX and gold have published evidence?

### Takeaway
The best-documented intraday effect in FX is the fix-driven pattern: the USD rises into the major fixes (Tokyo 9:55 JST, ECB 14:15 CET, WM/Reuters 4pm London) and reverses afterwards. This "W-shaped" day is published in the Journal of Finance (Krohn, Mueller & Whelan 2024) over 21 years and 9 currencies. Other effects have weaker or older evidence: time-of-day "home-currency depreciation" (Breedon & Ranaldo 2013), intraday time-series momentum (Elaut et al. 2018, RUB), the gold overnight-vs-daytime asymmetry (Blose & Gondhalekar), the old gold PM fixing leak (Caminschi & Heaney 2014, pre-2015 only), and FOMC-day dollar weakness (Mueller et al. 2017).

### Cited Findings
**FX fixes / W-shaped day (strongest evidence)**
- Krohn, Mueller & Whelan, "Foreign Exchange Fixings and Returns Around the Clock", *Journal of Finance* 79(1), 541–578 (2024), DOI 10.1111/jofi.13306. They find the dollar appreciates before FX fixes and depreciates after them, giving a W-shaped intraday return pattern. The reversals are pervasive and highly significant for the top 9 currencies over a 21-year sample. Natural experiments show the fix schedule decides when the reversals occur. Their preferred explanation is dealer inventory risk: dealers absorb unconditional USD demand at the fix and hedge ahead of it. — [SUFE academic newsletter summary](https://academicnewsletter.sufe.edu.cn/info/358962); [Warwick WRAP](https://wrap.warwick.ac.uk/id/eprint/177333); [Bank of Canada SWP 2021-48](https://www.bankofcanada.ca/wp-content/uploads/2021/10/swp2021-48.pdf)
- The working-paper version reports that futures order imbalances do not line up with the reversal pattern, which the authors read as evidence that intermediaries are the marginal investors. The AEA 2020 draft says the pattern is "present every day of the week, month of the year, and during each of the 20 years in our sample". — [Bank of Canada SWP 2021-48](https://www.bankofcanada.ca/wp-content/uploads/2021/10/swp2021-48.pdf); [AEA 2020 preliminary paper](https://topcat.aeaweb.org/conference/2020/preliminary/paper/2dedYfDH)
- A replication package exists, hosted by the Bank of Canada. — [Bank of Canada OAR record](https://oar-rao.bank-banque-canada.ca/record/711)
- Evans, "Forex Trading and the WMR Fix", *Journal of Banking & Finance* 87 (2018) 233–247. Covers 21 currencies over roughly a decade. Contrary to his microstructure model, price changes show "extraordinary volatility and negative serial correlation around the Fix", i.e. reversals. — [IDEAS/RePEc](https://ideas.repec.org/a/eee/jbfina/v87y2018icp233-247.html); [MPRA 81583](https://mpra.ub.uni-muenchen.de/81583)
- Melvin & Prins, "Equity hedging and exchange rates at the London 4 p.m. fix", *Journal of Financial Markets* 22 (2015) 50–72. Foreign equity gains over the month predict depreciation of the foreign currency into the **month-end** 4pm fix, because equity managers rebalance FX hedges at the month-end fix. — [IDEAS/RePEc](https://ideas.repec.org/a/eee/finmar/v22y2015icp50-72.html); [ECB workshop draft 2013](https://ecb.eu/events/pdf/conferences/131216/Third_FX_Workshop_MELVIN_PRINS_Equity%20hedging%20and%20exchange%20rates%20Nov%202013.pdf)
- Panagiotou (EFMA 2017 PhD paper): a price reversal one minute after the WMR Fix, in both spot and futures, not seen at other fixing points. — [EFMA 2017 PDF](https://www.efmaefm.org/0efmameetings/efma%20annual%20meetings/2017-athens/phd/The%20WMR%20Fix%20and%20its%20Impact%20on%20Currency%20Markets%20-%20Panagiotou.pdf)
- Tokyo fix: Ito & Yamada, "Puzzles in the Tokyo fixing in the forex market: Order imbalances and bank pricing", *Journal of International Economics* (2017). Peer reviewed. I could not reach the full text. Practitioner sources describe USD/JPY strengthening into the 9:55 JST fix on "gotobi" days (5th/10th-multiple days) and say it is not consistent enough to trade on its own. — [Columbia WP 352](https://business.columbia.edu/sites/default/files-efs/imce-uploads/Research/Research_Papers/WP_352.Ito-Yamada.Tokyo_Fixing_Puzzles.pdf); [EBC practitioner note](https://www.ebc.com/forex/gotobi-strategy)

**Time-of-day / session effects in FX**
- Breedon & Ranaldo, "Intraday Patterns in FX Returns and Order Flow" (SNB WP 2011-04; *Journal of Money, Credit and Banking* 2013). Currencies tend to depreciate during their own home trading hours. EUR/USD tends to fall in the European morning and rise in US hours. The pattern holds across currencies, and for EUR/USD it "can form a simple, profitable trading strategy". The authors attribute it to participants being net buyers of foreign currency in their own hours, a pattern also seen in order flow. — [SNB WP 2011-04](https://www.snb.ch/en/publications/research/working-papers/2011/working_paper_2011_04); [QMUL WP 694](https://qmul.ac.uk/sef/research/workingpapers/2012/items/694.html)

**Intraday time-series momentum in FX**
- Elaut, Frömmel & Lampaert, "Intraday momentum in FX markets: Disentangling informed trading from liquidity provision", *Journal of Financial Markets* 37 (2018) 35–51, DOI 10.1016/j.finmar.2016.09.002. I could confirm only the bibliographic record, not the abstract. — [IDEAS/RePEc](https://ideas.repec.org/a/eee/finmar/v37y2018icp35-51.html)
- Later commodity work cites FX as a market where the first half-hour return predicts the last half-hour, and attributes intraday momentum partly to intraday traders' liquidity provision. — [Hull repository paper](https://hull-repository.worktribe.com/OutputFile/3303156)
- The equity benchmark: Gao, Han, Li & Zhou, "Market intraday momentum", *Journal of Financial Economics* 129(2) (2018). The first half-hour return (measured from the previous close) predicts the last half-hour return on the S&P 500 ETF, more strongly on volatile and high-volume days. — [IDEAS/RePEc](https://ideas.repec.org/a/eee/jfinec/v129y2018i2p394-414.html); [Alpha Architect summary](https://alphaarchitect.com/2014/08/attention-prop-traders-the-first-half-hour-of-trading-predicts-the-last-half-hour/)

**Gold: fixing**
- Caminschi & Heaney, "Fixing a Leaky Fixing: Short-Term Market Reactions to the London PM Gold Price Fixing", *Journal of Futures Markets* 34(11) (2014) 1003–1039.
  - Instruments: GC futures and GLD.
  - Volume and volatility jump right after the fixing **starts**. Trades in the first 4 minutes earn significant return advantages, and early-minute direction predicted the fix outcome in some cases more than 90% of the time.
  - There were no significant returns after the fix result was published.
  - Volume was about 50% above the prior 20-minute average within a minute of the call starting.
  - — [IDEAS/RePEc](https://ideas.repec.org/a/wly/jfutmk/v34y2014i11p1003-1039.html); [UWA news](https://www.news.uwa.edu.au/201410067021/research/uwa-research-finds-gold-and-silver-price-setting-open-exploitation); [UWA repository PDF](https://api.research-repository.uwa.edu.au/ws/files/4725264/A0205_use_this.pdf)
- The old conference-call fixing was replaced on 20 March 2015 by the electronic LBMA Gold Price auction (ICE Benchmark Administration), run at 10:30 and 15:00 London time. — [ICE LBMA Gold Price](https://developer.ice.com/fixed-income-data-services/catalog/lbma-gold-price)
- Counter-view from the industry (LBMA Alchemist): afternoon spikes in the gold fix are better explained by US macro releases that fall in the same window than by manipulation. — [LBMA Alchemist 73](https://www.lbma.org.uk/alchemist/issue-73/has-there-been-a-decade-of-london-pm-gold-fixing-manipulation)
- Silver analogue: an NYU working paper finds a 12 bp downward bias in silver's intraday price around the fixing. — [NYU Stern WP](https://www.stern.nyu.edu/sites/default/files/assets/documents/Any%20Silver%20Linings%20-%20WORKING%20PAPER%20-%2020140707%20-%20Merged.pdf)

**Gold: overnight vs daytime and session seasonality**
- Blose & Gondhalekar (2014), COMEX front-month 1985–2012: average overnight returns are significantly greater than daytime returns. Blose, Gondhalekar & Kort (*Journal of Economics and Finance* 42(3), 2018): overnight returns significantly **positive** and daytime returns significantly **negative** across COMEX futures, the London fix, miners and gold funds, in both up and down gold markets. They attribute this to gold opening "too high" and drifting down through the day. — [IDEAS/RePEc JEF 2018](https://ideas.repec.org/a/spr/jecfin/v42y2018i3d10.1007_s12197-017-9403-0.html); [GVSU scholarworks](https://scholarworks.gvsu.edu/fsdg/975)
- Quantpedia (practitioner): most of GLD's 20-year performance came overnight, and intraday performance was negligible. It also warns that OHLC-based overnight drift tests can be spurious. — [Quantpedia](https://quantpedia.com/dangers-of-relying-on-ohlc-prices-the-case-of-overnight-drift-in-gdx-etf/)
- CBS master's thesis on 24-hour gold prices (not peer reviewed): a robust "hat-shaped" pattern, with gold rising in Asian/eastern hours and falling for the rest of the day. — [CBS thesis](https://research.cbs.dk/en/studentProjects/gold-price-dynamics-around-the-clock/)
- Chinese gold and silver futures: "The 'night effect' of intraday trading", *Global Finance Journal* 64 (2025). I confirmed the title only. — [IDEAS/RePEc](https://ideas.repec.org/a/eee/glofin/v64y2025ics1044028325000110.html)
- Chinese gold futures, *Finance Research Letters* 58 (2023): realized volatility in day-session intervals predicts last-half-hour realized volatility. This is about volatility, not return direction. — [IDEAS/RePEc](https://ideas.repec.org/a/eee/finlet/v58y2023ipas154461232300394x.html)
- Chinese metal futures (including gold): before night trading launched, the daytime first half-hour return positively predicted later half-hour returns. — [Pacific-Basin Finance Journal 80 (2023), IDEAS](https://ideas.repec.org/a/eee/pacfin/v80y2023ics0927538x2300152x.html)

**Macro announcements**
- Mueller, Tahbaz-Salehi & Vedolin, "Exchange Rates and Monetary Policy Uncertainty", *Journal of Finance* (2017). Short-USD/long-foreign currency positions earn larger excess returns on scheduled FOMC days. The premium is larger for high interest-rate-differential currencies, rises with policy uncertainty, and is larger when the Fed eases. This is a daily, FOMC-day effect. — [Columbia June 2016 draft](https://drupalgsb-test.paas.cc.columbia.edu/sites/default/files-efs/pubfiles/15021/Exchange%20Rates%20andMonetary%20Policy%20Uncertainty_June2016.pdf); [LSE blog](https://researchonline.lse.ac.uk/id/eprint/65836/1/blogs.lse.ac.uk-Some%20currency%20trading%20positions%20yield%20increased%20returns%20around%20Fed%20announcements.pdf)
- Karnaukh, "The Dollar Ahead of FOMC Target Rate Changes": go long USD two days before FOMC when fed funds futures imply a hike, short when they imply a cut. This earns about 25 bp on average. Intraday realized volatility and illiquidity do not rise in the pre-FOMC window. — [AUT/ACFR PDF](https://acfr.aut.ac.nz/__data/assets/pdf_file/0019/190315/DollarAheadFOMC_NinaKarnaukh.pdf)
- A secondary source reports that before an FOMC cut the USD drifts down from the morning before until the announcement, by about 33 bp on average before 14:00 ET (18 bp excluding the five 2008 cuts). The original paper is not confirmed. — [Macrosynergy](https://macrosynergy.com/?p=41075)
- Elder, Miao & Ramchander, *Journal of Banking & Finance* (2012), intraday metal futures 2002–2008. Metals respond quickly and significantly to US news surprises. The 8:30 ET releases, NFP above all, have the largest effect. Positive (strong-economy) surprises push gold and silver down. News raises realized volatility and volume. — [Mountain Scholar (CSU)](https://mountainscholar.org/handle/10217/206884)
- In COMEX gold, employment, GDP, CPI and personal income have the largest impact among 23 US announcements. — [HKBU "What moves the gold market"](https://scholars.hkbu.edu.hk/en/publications/what-moves-the-gold-market/)
- Practitioner (not peer reviewed): gold's NFP-surprise correlation is about -0.54 at 15 minutes and 1 hour and -0.45 at 4 hours, with anecdotal later reversals. — [FXStreet](https://www.fxstreet.com/analysis/us-march-nonfarm-payrolls-preview-analyzing-gold-price-reaction-to-nfp-surprises-202504031021)

**Price discovery in gold**
- Lucey, Larkin & O'Connor (2013), 25 years of data in 4-month windows: neither London nor New York dominates information share, and leadership switches over time. — [UCLan repository](https://knowledge.lancashire.ac.uk/id/eprint/6563/)
- A Kobe University thesis finds the LBMA leads price discovery among London, New York and Tokyo. — [Kobe thesis](https://da.lib.kobe-u.ac.jp/da/kernel/D1007097/D1007097.pdf)

### Inferences
- The fix-reversal literature is the only body of work with both a top-journal publication and a structural explanation (dealer inventory or hedging demand) that tells you **when** the effect happens. Krohn et al. (2024) is the anchor citation.
- The gold PM-fix leak (Caminschi & Heaney) is about the pre-2015 telephone fixing. Its exploitable window was the first few minutes after 15:00 London and needed tick data. There is no reason to expect it to carry over to the IBA electronic auction.
- The gold overnight-positive / daytime-negative asymmetry is the same phenomenon as the user's already-tested "long Asia / short NY" seasonality, which they found weak. It should be treated as known and probably decayed.

### Gaps
- I could not get the Elaut, Frömmel & Lampaert abstract or results (RUB sample, exact rule, returns, costs).
  - Unverified, from prior knowledge: the paper uses RUB/USD tick data from the Moscow Exchange and finds that the first (overnight plus early-morning) half-hour return predicts the last half-hour return.
  - The report writer should not state numbers for it.
- I found no peer-reviewed study of intraday returns around the **post-2015 LBMA electronic auction** (10:30 / 15:00 London).
- I could not confirm the contents of Hauptfleisch, Putniņš & Lucey ("Who sets the price of gold? London or New York", reportedly *Journal of Futures Markets* 2016).
- I found no peer-reviewed post-NFP drift-or-reversal trading test for gold or EUR/USD with costs.

## Q2. Exact rules, timing, holding periods, samples, performance before and after costs, and decay

### Takeaway
Exact trade rules and net-of-cost Sharpe ratios could not be pulled from full texts. What is documented:
- **Timing:**
  - Pre-fix USD strength and post-fix reversal around Tokyo 9:55 JST, ECB 14:15 CET and London 16:00 (WMR, a 5-minute window since February 2015).
  - Month-end 4pm hedging flows.
  - Gold open-high / daytime drift-down.
  - FOMC-day USD weakness.
- **Decay:** an FCA study, known only through a trade-press summary, found the 4pm-fix reversal fell after 2013 and **disappeared after the 2015 window widening**. This conflicts with Krohn et al.'s claim that the W-pattern holds in every year.

### Cited Findings
- **WMR 4pm fix, decay:** an FCA study reported that short-term reversals around the 4pm WM/Reuters fix fell gradually after the first rigging reports in 2013 and disappeared completely after 2015, when the fixing window widened from 1 to 5 minutes. This coincided with changes in dealer behaviour and participant mix. — [fx-markets.com summary of FCA study](https://www.fx-markets.com/node/3864546)
- **WMR 4pm fix, post-2015 dynamics:** Pragma Securities reports that since February 2015 bank orders are split evenly across the 5-minute window. Rates show steady momentum through the window and mean reversion after it. — [Treasury News Network / CTMfile](https://ctmfile.com/story/unusually-predictable-trading-patterns-uncovered-in-fx-market)
- **Conflict:** Krohn, Mueller & Whelan's AEA draft says the W-pattern is present "during each of the 20 years in our sample". The published version covers 21 years. — [AEA 2020 preliminary paper](https://topcat.aeaweb.org/conference/2020/preliminary/paper/2dedYfDH); [SUFE summary](https://academicnewsletter.sufe.edu.cn/info/358962). This contradicts the FCA finding above. The two may measure different things: Krohn et al. use a multi-hour pre/post-fix window, while the FCA looked at minute-level reversals just after the fix.
- **Month-end 4pm fix:** the direction is set by month-to-date relative equity performance. Foreign equities outperforming the US imply foreign-currency weakness into the month-end fix as hedges are topped up. — [Melvin & Prins, IDEAS](https://ideas.repec.org/a/eee/finmar/v22y2015icp50-72.html). A practitioner series tracks month-end fix flows, which suggests the effect is widely known and anticipated. — [The Full FX](https://thefullfx.com/what-happened-at-the-month-end-fix-36/)
- **Gold PM fix (pre-2015):** the edge was in the first 4 minutes after the 15:00 London fixing call started, with no returns after publication. — [IDEAS/RePEc](https://ideas.repec.org/a/wly/jfutmk/v34y2014i11p1003-1039.html). The mechanism was retired by the 20 March 2015 move to the IBA auction. — [ICE](https://developer.ice.com/fixed-income-data-services/catalog/lbma-gold-price)
- **Gold overnight/daytime:**
  - Sample: COMEX front-month 1985–2012.
  - "Daytime" means the COMEX open (US morning) to the COMEX close.
  - Overnight positive, daytime negative, in both bull and bear markets.
  - — [IDEAS/RePEc JEF 2018](https://ideas.repec.org/a/spr/jecfin/v42y2018i3d10.1007_s12197-017-9403-0.html); [GVSU](https://scholarworks.gvsu.edu/fsdg/975)
  - Cost-adjusted returns were not available in the snippets.
- **FOMC:**
  - Pre-FOMC directional dollar trade: about 25 bp per event, two-day hold, so it is not intraday. — [Karnaukh PDF](https://acfr.aut.ac.nz/__data/assets/pdf_file/0019/190315/DollarAheadFOMC_NinaKarnaukh.pdf)
  - FOMC-day short-USD premium. — [Mueller et al. draft](https://drupalgsb-test.paas.cc.columbia.edu/sites/default/files-efs/pubfiles/15021/Exchange%20Rates%20andMonetary%20Policy%20Uncertainty_June2016.pdf)
- **FX session effect:** Breedon & Ranaldo describe the EUR/USD strategy as "simple" and "profitable": short EUR in the European morning, long in US hours. — [SNB WP 2011-04](https://www.snb.ch/en/publications/research/working-papers/2011/working_paper_2011_04)
  - Unverified details (sample about 1990s–2000s, costs) could not be confirmed.

### Inferences
- Rough timing in UTC for the fix effects, to be checked by the report writer:
  - Tokyo fix: 00:55 UTC.
  - ECB fix: 13:15 UTC in winter, 12:15 UTC in summer.
  - WMR fix: 16:00 London, which is 16:00 UTC in winter and 15:00 UTC in summer. Since 2015 the window is ±2.5 minutes around 16:00.
- From the Krohn et al. description, a W-shaped day means:
  - Long USD in the hours before each fix, flat or short USD after it.
  - The deepest troughs fall after the European fixes and into the NY afternoon.
- The fixed timing makes a 15-minute-bar implementation feasible in principle. The magnitudes, though, are typically single-digit basis points per day in the fix literature (unverified here). On EUR/USD that is roughly 1 pip per bp.
- Effects that are widely documented and regulated (the WMR fix, the gold fix) show the clearest decay after publication and the 2013–2015 regulatory reforms.

### Gaps
- No net-of-cost Sharpe ratios were recoverable for Krohn et al., Breedon & Ranaldo, Evans, or Blose et al.
- The exact sample period and methodology of the FCA study were not verified.
- No out-of-sample replication of Breedon & Ranaldo's session effect after about 2010 was found.
- No study of decay in the gold overnight/daytime anomaly after 2012 was found. Quantpedia's GLD note implies it persisted in ETF data, but it also flags data artefacts.

## Q3. Which effects could a retail trader implement with 15-minute bars and ~1 pip EUR/USD / ~$0.30/oz gold spreads?

### Takeaway
None of the documented effects comes with peer-reviewed proof that it survives retail costs on 15-minute bars. The most plausible candidate to test is the fix-timed USD reversal (Krohn et al. 2024): it is robust across years and currencies, has a mechanism and a fixed schedule, and has public replication code. Its per-trade magnitude is likely only a few bp, so a 1-pip round trip on EUR/USD (about 0.9 bp) would consume much of it. Also worth testing:
- **Gold:** the overnight/daytime asymmetry, which overlaps the user's failed session-seasonality test.
- **FOMC-day USD weakness:** too few events per year.
- **Month-end 4pm hedge flows:** 12 events a year, direction based on equity performance.

Minute-level fix and gold-fix effects need tick data and are gone or degraded since 2015.

### Cited Findings
- **Fix reversals (published):** the W-pattern holds over 21 years and 9 currencies. Replication code is public. — [SUFE summary](https://academicnewsletter.sufe.edu.cn/info/358962); [Bank of Canada OAR](https://oar-rao.bank-banque-canada.ca/record/711)
- **Fix reversals (decay):** minute-scale 4pm reversals reportedly disappeared after 2015. — [fx-markets.com](https://www.fx-markets.com/node/3864546)
- **Gold PM fix:** the exploitable window was the first 4 minutes and needed microstructure-level data. — [IDEAS/RePEc](https://ideas.repec.org/a/wly/jfutmk/v34y2014i11p1003-1039.html)
- **Gold overnight/daytime:** the asymmetry is documented, but the practitioner Quantpedia warns that OHLC-based overnight/intraday decompositions can be misleading. — [Quantpedia](https://quantpedia.com/dangers-of-relying-on-ohlc-prices-the-case-of-overnight-drift-in-gdx-etf/)
- **Gotobi/Tokyo fix:** practitioner sources say it is not consistent enough to trade on its own, and costs and changing behaviour weaken it. — [EBC](https://www.ebc.com/forex/gotobi-strategy)
- **NFP and gold:** gold reacts quickly to surprises, with most of the move immediate. — [Elder et al. via Mountain Scholar](https://mountainscholar.org/handle/10217/206884). An immediate move leaves little drift for a trader entering after a 15-minute bar closes. This is an inference, not a cited result.

### Inferences
- **Cost hurdle:**
  - EUR/USD: a 1-pip round trip is about 0.9 bp.
  - Gold: $0.30/oz at roughly $2,500–4,000/oz is about 0.8–1.2 bp.
  - Any edge therefore needs to be at least about 2–3 bp per trade after slippage. Fix-reversal and session effects are probably near that hurdle. This should be confirmed by running the Krohn et al. replication code on 15-minute retail data.
- **Ranking for retail testing:**
  1. Fix-timed USD reversal on the majors, especially post-WMR (16:00 London) and post-ECB fade trades, using a multi-hour hold rather than minute scalps.
  2. Month-end 4pm hedge-flow trade, direction from month-to-date US vs non-US equity returns (Melvin & Prins).
  3. FOMC-day short USD, held into the 14:00 ET release.
  4. Gold "Asia up / US-day down", already failed in the user's test and consistent with likely decay.
- **Already tested by the user:** the literature found here gives no peer-reviewed support for Asian-range breakouts, opening-range breakouts in FX/gold, EMA crosses, Bollinger/RSI(2) mean reversion or Donchian breakouts at intraday horizons. That fits the user's weak results.

### Gaps
- No study was found that tests any of these effects with retail-style 15-minute bars and ~1 pip / $0.30 spreads.
- No 2023–2026 out-of-sample replication of the Krohn et al. W-pattern was found.
- No peer-reviewed intraday time-series momentum evidence for spot gold/XAUUSD was found. COMEX/Chinese gold work covers volatility or the pre-night-session era only.
