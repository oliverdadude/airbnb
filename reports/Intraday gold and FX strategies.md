# Retail costs erase the best intraday edges

No intraday, flat-by-close strategy for XAUUSD or the major FX pairs has published evidence that it beats retail costs out of sample, and none of the 40+ strategy/instrument variants tested in this session found one either. The strongest published effect is the FX-fix "W-shaped day" documented in the *Journal of Finance* by Krohn, Mueller & Whelan (2024): the US dollar rises into the major fixes and falls back after them. Our 15-minute backtest reproduced the post-London-fix USD weakness in EURUSD and GBPUSD at about **+1.0 to +1.1 bp of gross edge per trade**. That edge is roughly the size of a 1-pip retail round trip. At 1.0 pip it nets an EURUSD Sharpe of only **+0.25 (t 0.76)**, it needs all-in costs of about **0.3 pip or less** before it becomes statistically significant, and it has been close to flat since about 2017. Market intraday momentum (Gao et al. 2018; Baltussen et al. 2021) is the best-documented strategy in index futures, but on spot gold and FX it showed **no usable gross edge** and net Sharpe ratios of **−1.6 to −3.4**. Practitioner systems (opening-range breakouts, noise-band momentum) reproduce gross and lose most of their edge net or out of sample, as the user's own Asian-range and NY ORB tests did. A retail trader building an MT5 bot should treat the post-fix EURUSD trade as, at most, a low-stakes forward test that only makes sense with institutional-grade pricing. Given that **97% of persistent day traders lose money** in the largest outcome studies, the realistic expectation is roughly zero after costs.

## Only one intraday effect has top-journal, mechanism-backed support in FX

The most robust intraday result in FX comes from the fixing schedule. Krohn, Mueller & Whelan find that **the dollar appreciates before FX fixes and depreciates after them**. The reversals are "pervasive and highly significant" for the top nine currencies over **21 years**, and natural experiments show that the fix schedule decides when the reversals happen ([SUFE summary](https://academicnewsletter.sufe.edu.cn/info/358962); [Warwick WRAP](https://wrap.warwick.ac.uk/id/eprint/177333)). Their preferred explanation is dealer inventory risk: dealers absorb predictable USD demand at the fix and hedge ahead of it. That gives a structural reason for the effect and fixes its timing in advance. The conference draft says the pattern held "during each of the 20 years in our sample" ([AEA 2020 draft](https://topcat.aeaweb.org/conference/2020/preliminary/paper/2dedYfDH)), and a replication package is public ([Bank of Canada OAR](https://oar-rao.bank-banque-canada.ca/record/711)). Evans (2018) also finds "extraordinary volatility and negative serial correlation around the Fix" across 21 currencies ([IDEAS/RePEc](https://ideas.repec.org/a/eee/jbfina/v87y2018icp233-247.html)).

The evidence does conflict on one point. An FCA study, known only through a trade-press summary, found that minute-scale reversals around the 4pm WM/Reuters fix **faded after 2013 and disappeared after the 2015 widening of the fix window to five minutes** ([fx-markets.com](https://www.fx-markets.com/node/3864546)). The two findings can both be true, because Krohn et al. measure multi-hour pre- and post-fix windows while the FCA looked at the minutes just after the fix. Our backtest, discussed below, measures the multi-hour version, and its results lean toward partial decay as well. The other published FX patterns are weaker candidates. Breedon & Ranaldo find currencies tend to depreciate during their own home trading hours, and call a EUR/USD version "simple" and "profitable", but no post-2010 out-of-sample replication was found ([SNB WP 2011-04](https://www.snb.ch/en/publications/research/working-papers/2011/working_paper_2011_04)). FOMC-day USD weakness ([Mueller et al. draft](https://drupalgsb-test.paas.cc.columbia.edu/sites/default/files-efs/pubfiles/15021/Exchange%20Rates%20andMonetary%20Policy%20Uncertainty_June2016.pdf)) gives only eight trades a year. Month-end hedge flows into the 4pm fix ([Melvin & Prins](https://ideas.repec.org/a/eee/finmar/v22y2015icp50-72.html)) give twelve trades a year and are widely tracked by practitioners ([The Full FX](https://thefullfx.com/what-happened-at-the-month-end-fix-36/)).

Gold's published intraday evidence is older or no longer applies. The London PM fixing "leak" sat in the first four minutes of the telephone fixing ([Caminschi & Heaney 2014](https://ideas.repec.org/a/wly/jfutmk/v34y2014i11p1003-1039.html)), and that mechanism ended when the electronic LBMA auction replaced it on 20 March 2015 ([ICE](https://developer.ice.com/fixed-income-data-services/catalog/lbma-gold-price)). The overnight-positive, daytime-negative asymmetry in COMEX gold over 1985–2012 ([Blose, Gondhalekar & Kort 2018](https://ideas.repec.org/a/spr/jecfin/v42y2018i3d10.1007_s12197-017-9403-0.html)) is essentially the session-seasonality trade the user already tested and found weak. Quantpedia also warns that tests of this kind built on OHLC data can be spurious ([Quantpedia](https://quantpedia.com/dangers-of-relying-on-ohlc-prices-the-case-of-overnight-drift-in-gdx-etf/)). No peer-reviewed study tests any of these effects with retail spreads on 15-minute bars.

| Candidate | Best published evidence | Applies to spot gold/FX? | Cost-survival evidence |
|---|---|---|---|
| Post-fix USD reversal | JF 2024, 21 yrs, 9 currencies | Yes (FX); gold untested | None published at retail cost |
| Market intraday momentum | JFE 2018/2021, 60+ futures | Untested on spot XAUUSD/FX majors | Survives only futures-level costs |
| Home-currency session effect | JMCB 2013 | EURUSD | No post-2010 replication |
| Gold PM-fix leak | JFM 2014 | Pre-2015 only | Mechanism abolished |
| Gold overnight/daytime drift | JEF 2018 (to 2012) | Overlaps user's failed seasonality test | Not available |
| ORB / noise-band systems | SSRN working papers | No gold/FX test found | Replications net to about zero |

## Index-futures momentum works where hedging flows are concentrated, not in spot gold or FX

Gao, Han, Li & Zhou found that the S&P 500 ETF's first half-hour return (prior close to 10:00 ET) predicts its last half-hour return. A rule that holds SPY only from 15:30 to 16:00 earned **6.67% a year at 6.19% volatility, a Sharpe of 1.08**, over 1993–2013. The effect is stronger on volatile, high-volume and macro-news days ([Gao et al. PDF](https://assets.super.so/e46b77e7-ee08-445e-b43f-4ffd88ae0a0e/files/ee7dac49-530b-4950-b5d0-e0b5eee08f2e.pdf); [WUSTL abstract](https://profiles.wustl.edu/en/publications/market-intraday-momentum/)). Baltussen, Da, Lammers & Martens extended the result to **more than 60 futures from 1974 to 2020**, with asset-class Sharpe ratios of **0.87–1.73**. They trace it to short-gamma hedging by options dealers and to leveraged-ETF rebalancing near the close, and the effect reverses over the following days, which marks it as price pressure ([Erasmus repository](https://pure.eur.nl/en/publications/hedging-demand-and-market-intraday-momentum/); [Alpha Architect](https://alphaarchitect.com/hot-topic-does-gamma-hedging-actually-affect-stock-prices/)). The 6.67% figure works out to about 2.6 bp per trade, so the edge is small even in its home market.

This mechanism explains why the trade fails on spot gold and FX. The flows that drive it cluster around an official close in markets with heavy options and leveraged-ETF exposure. Spot FX and XAUUSD trade around the clock and have no comparable closing auction or leveraged-ETF rebalancing. FX evidence outside currency futures is thin: the main FX study covers RUB/USD on the Moscow exchange ([Elaut, Frömmel & Lampaert, SSRN](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2694985)). Gold evidence comes from Chinese futures and runs both ways: momentum and reversal both appear, depending on the session ([ScienceDirect 2025](https://www.sciencedirect.com/science/article/abs/pii/S1044028325000110)). The effect is also weakening in its home market. One independent replication of the Zarattini noise-band version finds recent Sharpe ratios near zero on SPY and ES since 2025 ([GitHub giovannibrusco](https://github.com/giovannibrusco/zarattini-2024-momentum-spy)). A second finds ES negative after costs from 2013 to 2026 while NQ held up ([GitHub VigorTas](https://github.com/VigorTas/beat-the-market-replication)). A Nasdaq that holds up while ES fades fits the gamma explanation, since the Nasdaq-100 has the largest leveraged-ETF and options footprint relative to its liquidity.

Practitioner systems follow the same pattern of good in-sample results and weak out-of-sample results. The SPY noise-band strategy reported a **net Sharpe of 1.33 over 2007–2024**. In an out-of-sample test from May 2024 to March 2026 it earned a **Sharpe of 0.39 and 9.4% against 29.5% for buy-and-hold** ([SSRN 7290621](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7290621); [Swedroe](https://larryswedroe.substack.com/p/when-beat-the-market-meets-the-real)). An independent replication of the 5-minute QQQ ORB breaks even at about **2.2¢/share of slippage**, against a typical spread of about 1¢ ([GitHub replication](https://github.com/giovannibrusco/zarattini-2023-orb-qqq)). A port to five index CFDs was "gross reproduced, net zero" ([MQL5 blog](https://www.mql5.com/en/blogs/post/776235)). A pre-registered test of the Stocks-in-Play ORB found a cost-labelling bug and **−0.0855R per trade over 2020–2026** ([Pricing-the-Fill](https://github.com/js3872/Pricing-the-Fill)). No credible study applies the noise-band method to gold or FX ([TradingView Concretum Bands](https://it.tradingview.com/script/CUpWCZhe-Concretum-Bands)). The user's failed Asian-range and NY ORB tests are close relatives of these systems, so the failures are consistent with the published record.

## Backtests: 40+ variants, one gross edge, no net edge at retail cost

All figures in this section come from backtests run in this session. They are primary results and are not drawn from the literature.

### Setup and rules fixed before testing

| Item | Specification |
|---|---|
| Historical data | 15-minute bars, ejtraderLabs/historical-data (GitHub), MT5 broker feed, server time = New York + 7h |
| Samples | XAUUSD May 2012–Mar 2022; EURUSD, GBPUSD, USDJPY Nov 2012–Mar 2022 |
| Forward test | XAUUSD 1-minute data, 25 Feb–26 May 2026 (Sai310421/xauusd-data, UTC), resampled to 15m |
| Round-trip costs | XAUUSD $0.30/oz (2026: $0.40); EURUSD 1.0 pip; GBPUSD 1.5 pip; USDJPY 1.0 pip (0.01) |
| Execution | Entries and exits at 15m bar opens; rules fixed before testing; returns at 1× notional |
| Statistics | Sharpe annualised from daily returns; t = t-statistic of the daily mean |

### Earlier indicator and breakout tests: 32 combinations, all weak

The user first tested seven classic retail rule families, eight strategies in all, on four instruments. Those were the London Asian-range breakout, the NY 30-minute ORB, the EMA 20/50 cross, Asia-session Bollinger reversion, the RSI(2) pullback, the 20-hour Donchian breakout and session seasonality (long Asia / short NY afternoon). The best result was the Asian-range breakout on USDJPY: **Sharpe +0.76 at 1× notional, +0.032R per trade with fixed-risk sizing, t 2.2**. On gold the same breakout made about 0R per trade over 2012–22. In the 2026 forward test it made +0.1R per trade, but over only three months and with t 1.2. The mean-reversion and indicator strategies were reliably negative after spreads. These results match the academic notes, which found no peer-reviewed support for these rule families at intraday horizons.

### Family A, intraday momentum: no gross edge, so heavily negative net

A1 ports Gao/Baltussen directly. The sign of the return from the 17:00 NY prior close to 15:30 NY sets the direction of a trade from 15:30 to 16:00 NY. A2 uses a first-hour signal and exits at 10:00 NY. A3 trades gold into the COMEX settlement, 13:00 to 13:30 NY. A1v is A1 restricted to high-volatility days, the filter the literature says strengthens the effect.

| Variant | Instrument | Gross bp/trade | Net Sharpe 2012–22 | Years positive |
|---|---|---|---|---|
| A1 | XAUUSD | +0.43 | −2.32 | 0–1 of 11 |
| A1 | EURUSD | +0.06 | −2.54 | 0–1 of 11 |
| A1 | GBPUSD | −0.04 | −3.37 | 0–1 of 11 |
| A1 | USDJPY | −0.16 | −3.04 | 0–1 of 11 |
| A2 | All four | — | −2.7 to −3.1 | — |
| A3 | XAUUSD | — | −1.60 | — |
| A1v (high-vol days) | All four | — | −0.92 to −1.88 | — |

The gross edges are a small fraction of a basis point, against costs of about 1 bp per round trip. The strategy loses because it pays the spread every day on a signal that predicts almost nothing. The volatility filter reduces losses but does not make the strategy profitable. In the 2026 gold forward test, A1 made **+3.85 bp per trade and an annualised Sharpe of +2.93, but with t = +1.46 over only 62 trades**. That is not significant, it covers a single three-month regime, and it contradicts ten years of negative history. A3 lost −3.74 bp per trade over the same period.

### Family B, fix reversal: a real gross edge about the size of retail costs

B1 implements the post-fix leg of the Krohn et al. W-pattern. It goes short USD at the London 16:00 fix and exits at 16:00 NY. B2 takes the pre-fix leg: long USD from 14:00 London into the 16:00 fix.

| Variant | Instrument | Gross bp/trade | Net Sharpe (standard costs) | t |
|---|---|---|---|---|
| B1 | EURUSD | +1.14 | +0.25 | 0.76 |
| B1 | GBPUSD | +1.00 | −0.02 | — |
| B1 | XAUUSD | −0.04 | −0.78 | — |
| B1 | USDJPY | −0.61 | −1.06 | — |
| B2 | All four | — | −0.49 to −0.99 | — |

B1 is the only strategy in the session with a gross edge that has the predicted sign, the predicted timing and the predicted instruments. It works for EUR and GBP against the dollar, and not for gold or USDJPY. The yen's sign is opposite to the paper's prediction, and the cause is unclear. Possibly the Tokyo fix dominates the yen's intraday USD flows, but this session did not test that. The edge is about the size of the cost, so the result depends almost entirely on what the trader pays per round trip:

| All-in cost (pip) | EURUSD Sharpe | EURUSD t | EURUSD H1 / H2 Sharpe | GBPUSD Sharpe |
|---|---|---|---|---|
| 0.0 | +0.86 | 2.64 | +1.18 / +0.47 (8/11 yrs positive) | +0.75 (t 2.32, 9/11 yrs) |
| 0.3 | +0.67 | 2.08 | — | — |
| 0.5 | +0.55 | 1.70 | +0.92 / +0.10 | +0.49 (H1 +1.01, H2 −0.01) |
| 0.7 | +0.43 | — | — / −0.04 | — |
| 1.0 | +0.25 | 0.76 | — / −0.26 | +0.24 |

EURUSD B1 annual return at 1× notional and 0.5 pip cost:

| Year | 2012 | 2013 | 2014 | 2015 | 2016 | 2017 | 2018 | 2019 | 2020 | 2021 | 2022 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Return | +1.2% | +2.3% | −2.4% | +6.9% | +8.4% | +2.5% | −1.7% | −1.1% | +1.2% | +0.8% | −0.4% |

The year-by-year table shows the weakness that the summary statistics hide. **Most of the decade's profit comes from 2015 and 2016**, and returns since 2018 net to roughly zero even at a 0.5-pip cost. The average was about **+1.9% a year at 1× notional**. Every second-half Sharpe at retail-plausible costs is between −0.26 and +0.10. That pattern supports the FCA's view of post-reform decay more than Krohn et al.'s claim that the effect holds every year. One more caution: the backtest data ends in March 2022, so this session has no evidence on the fix trade from 2022 to 2026. The only 2026 test of B1 was on gold, where B1 has no historical edge, and it lost **−7.0 bp per trade**. In the same 2026 gold data, B2 made +6.95 bp per trade with t 0.75, which is noise.

## Forty trials make a 0.7 Sharpe the expected result of pure chance

This session tested **about 40 or more strategy/instrument variants**: 32 indicator and breakout combinations, plus A1, A1v, A2, A3, B1 and B2 across instruments, plus the cost and sub-period sweeps. Selecting the best variant from that many tests inflates its Sharpe. The **Deflated Sharpe Ratio** of Bailey & López de Prado corrects for this. It raises the benchmark a strategy must beat in line with the number of trials and for non-normal returns ([SSRN 2460551](https://papers.ssrn.com/abstract=2460551)). Related work shows that the minimum backtest length rises with the log of the number of trials, and that overfitting cannot be judged at all when the number of trials is not reported ([Bailey et al.](https://carmamaths.org/jon/backtest2.pdf)).

A rough calculation shows what the correction means here. With about 40 independent trials, the expected best of 40 zero-edge strategies is about 2.2 standard errors above zero. With about 9.5 years of data, the standard error of an annualised Sharpe is about 0.32. The best of 40 strategies with no edge would therefore show an annualised Sharpe of **about 0.7 by luck alone**. The session's two best results, USDJPY Asian-range breakout at +0.76 and EURUSD B1 at +0.86 *with zero costs*, sit at that luck threshold. Every result at realistic cost sits below it. The trials were correlated, so the effective number of independent trials is smaller than 40 and the threshold somewhat lower, but the conclusion stands.

The strongest counter-argument applies only to B1. It was not chosen from the data. The direction, timing and instruments were set in advance from a published paper, and the gross result matched that prediction in sign and size for EURUSD and GBPUSD while USDJPY ran the opposite way. That justifies treating B1 as a genuine but small economic effect rather than a data-mined artifact. It does not change the cost arithmetic: a real 1.1 bp effect cannot fund a 0.9 bp round trip plus slippage. The 2026 gold A1 result (Sharpe +2.93) is the type of number this correction exists for. It is the best of many forward cells, it comes from 62 trades, and its t-statistic is 1.46.

## A realistic plan: paper-trade the fix fade only at near-institutional cost

The base rate argues against expecting success. In Taiwan, **fewer than 1% of day traders reliably earn positive abnormal returns net of fees**, and 97% are likely to lose in future day trading ([Barber et al. 2014](https://www.escholarship.org/uc/item/7k75v0qx); [Barber et al. 2020](https://ideas.repec.org/a/oup/rasset/v10y2020i1p61-93..html)). Among Brazilian futures day traders who persisted for 300 or more days, **97% lost money and 0.4% earned more than a bank teller's wage** ([Chague et al., FGV](https://repositorio.fgv.br/items/e87d04fc-4b4c-4a56-ab5a-1c84c1afde1b/full)). European regulators found that **74–89% of retail CFD accounts lose money** ([ESMA](https://www.esma.europa.eu/node/84933)), and the UK FCA found 82% ([FCA](https://fca.org.uk/news/press-releases/fca-proposes-stricter-rules-contract-difference-products)). An MT5 bot does not change these odds. It removes discretionary mistakes, but it adds a requirement for an edge that survives costs, and no edge in this report does.

If the user still wants a live experiment, the only defensible candidate is **B1 on EURUSD, with GBPUSD as a secondary instrument**: short the pair's USD leg (buy EURUSD) at the London 16:00 fix and close at 16:00 NY. That is entry at about 18:00 and exit at about 23:00 on the NY+7 server clock. The bot should use London and New York local time, not fixed server hours, because UK and US daylight-saving changes fall on different dates for a few weeks each spring and autumn. Before deploying anything, the user should measure their **actual all-in round-trip cost** at that hour, meaning spread plus commission plus slippage. The backtest says the trade is significant only at about 0.3 pip or less, and is a coin flip at 0.5 pip in recent years. A standard retail account at about 1 pip is not worth running.

Run it on a demo account or at minimum size for at least six to twelve months. Before starting, write down a kill rule, such as stopping if the net live result after 100–150 trades has t below 1 or is negative. Do not tune the entry or exit times on the live results, because that adds trials and makes the DSR problem worse. The upside should also be clear from the start. At its historical best, this trade earned **about 2% a year per 1× notional** at 0.5 pip. Even scaled to a sensible volatility target it is a small, decaying anomaly, not an income strategy. Gold intraday rules, intraday momentum ports and the indicator and breakout systems should not be traded. The evidence here gives no reason to expect them to cover costs.

## Conclusion

The research changes the question. "Which intraday rule works on gold and FX?" has no supported answer. The useful question is whether a structural flow is large enough to pay a retail spread, and the evidence here says it is not. Intraday effects with real mechanisms, such as dealer hedging at fixes and gamma hedging at index closes, are worth one to three basis points per trade at most. They are strongest where institutional costs are lowest, and they decay once they are published and regulated. On this evidence, intraday XAUUSD and major-FX trading is a cost problem more than a signal problem.

For this trader, the next useful step is not another indicator. It is measuring execution cost, because that one figure decides whether the single genuine effect can be traded. If the broker cannot deliver well under half a pip at the London fix, intraday trading on these instruments has a negative expected value, and longer-horizon approaches where costs are a smaller share of each trade's expected move deserve evaluation instead. The user could test the daily-bar gold trend rules mentioned in the practitioner literature with the same pre-registered discipline, though they too lack peer-reviewed evidence ([Algomatic Trading](https://algomatictrading.substack.com/p/strategy-17-trend-following-gold)).
