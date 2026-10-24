# Earn modest, lumpy income before chasing scale

The only strategy this session found worth running on Tradeify is a **Nasdaq "noise-area" intraday momentum bot on 1 MNQ per account, traded on 50K Select accounts at current volatility**. It is the one family of five that stayed profitable on untouched 2026 data: **+$63 per trade with t 1.81 over 75 trades**, and every one of 216 nearby parameter settings was also profitable. Opening-range breakout, gap fill and VWAP pullback all looked good on 2023 tuning data and then lost money on 2026. Even so, the honest plan is small. After the standard 50% backtest-to-live haircut, one copy of the strategy is worth roughly **$200-450 of trading P&L per month per MNQ**, with a **30-36% chance of any given month losing money** on P&L alone. Payouts, eval fees and blown accounts make the month-to-month cash flow lumpier still. A realistic ladder runs **$0 (and a few hundred dollars of fees) in months 1-3**, **about break-even to +$500 a month in months 3-6**, and **about $300-1,000 a month on average in months 6-12** across up to five staggered 50K accounts. Expect several months at or below zero along the way. "Good money every month", meaning $2,000 or more with few red months, needs a confirmed live edge plus at least two or three *uncorrelated* strategies. Copying one bot onto five accounts adds size, but it does not add consistency. Industry data says only about **5-7% of evaluation accounts ever lead to a payout**, so even the modest version of this plan would put the trader in the top tail of prop traders.

## Four of five Nasdaq strategies failed their one honest test

This session tuned five intraday strategy families on a 2023 Nasdaq-100 series and then tested each once on 2026 data it had never seen. The 2023 series was rebuilt from 1-minute S&P 500 component data for February-December 2023, giving 203 usable days. It tracked the real NDX closely: about 12,170 to 17,223, against a real path of about 12,300 to 16,800. The held-out set was NAS100 5-minute data for March-September 2026, with 115 usable days. Stops and targets were set in multiples of ATR14, so the rules adjusted automatically when volatility doubled. ATR was about **184 points in 2023 and about 389 points in 2026**, roughly 1.3% of price in both years. Every trade was charged **1.25 index points per MNQ round trip**, at $2 per point.

| Strategy family (per MNQ) | Configs tried | Best 2023 result | Same rules on 2026 | Verdict |
|---|---|---|---|---|
| Opening-range breakout | 120 | +$36/trade, t 2.72 | −$58/trade, t −1.56 (1 of top-10 positive) | Overfit |
| Gap fill | 96 | +$32/trade | −$35/trade | Overfit |
| VWAP trend pullback | — | +$30/trade | −$72/trade | Overfit |
| Last-half-hour momentum | — | −$0.4/trade, t −0.12 | +$14/trade | No 2023 edge; 2026 is noise |
| Noise-area momentum (Zarattini et al.) | 216 (robustness grid) | +$34/trade, t 3.25 | +$52/trade, t 1.49 | Only survivor |

The pattern matters more than any single number. Three families picked their best 2023 setting out of roughly 100 candidates, and all three reversed sign out of sample. That is what Bailey and colleagues' overfitting work predicts: try enough configurations and an in-sample Sharpe of 1 is expected to be about zero out of sample ([Bailey et al., SSRN](https://papers.ssrn.com/abstract=2326253); [CXO summary](https://www.cxoadvisory.com/big-ideas/insidiousness-of-overfitting-investment-strategies-via-iterative-backtests)). Noise-area momentum behaved differently. On the 2026 data, **100% of its 216 grid configurations were profitable**, with a median 2026 t-stat of +1.33. The grid covered stops of 0.2-0.5 ATR, 1-3 entries a day, band multipliers of 0.8-1.2, 15- or 30-minute checks, and targets of none, 2R or 3R. A strategy whose neighbouring settings all work is far less likely to be a lucky optimum.

The published record supports the survivor. Zarattini, Aziz and Barbon report the noise-area rule on SPY at **19.6% a year, Sharpe 1.33 net, 2007-2024** ([SFI](https://www.sfi.ch/en/publications/n-24-97-beat-the-market-an-effective-intraday-momentum-strategy-for-s-p500-etf-spy)). It belongs to the market intraday momentum effect documented across more than 60 futures from 1974 to 2020, and the authors attribute that effect to gamma hedging and leveraged-ETF rebalancing ([Baltussen et al., JFE 2021](https://pure.eur.nl/en/publications/hedging-demand-and-market-intraday-momentum/); [Alpha Architect](https://alphaarchitect.com/hot-topic-does-gamma-hedging-actually-affect-stock-prices/)). The warning signs are just as real. An out-of-sample test from May 2024 to March 2026 found the SPY version's **Sharpe fell to 0.39** ([Swedroe](https://larryswedroe.substack.com/p/when-beat-the-market-meets-the-real)). One replication finds ES negative after costs from 2013 to 2026 while NQ held up ([GitHub VigorTas](https://github.com/VigorTas/beat-the-market-replication)). Another finds recent Sharpe near zero on SPY and ES ([GitHub giovannibrusco](https://github.com/giovannibrusco/zarattini-2024-momentum-spy)). The Nasdaq is where the effect still appears to live, which fits a gamma-hedging story, but nothing guarantees it lasts.

## The v3 bot and what its backtest really shows

Earlier in this session, the current "v2" bot passed playback mechanics tests. That bot combines a gap fade, noise-area momentum and last-half-hour momentum. Its gap and last-half-hour components were not robust on 2023, so **v3 switches them off and runs noise-area momentum alone**. The v3 settings were picked from the middle of the robustness grid, not from its top, which deliberately gives up some backtest profit to reduce the risk of overfitting.

| v3 setting | Value |
|---|---|
| Stop | 0.3 × ATR14 (≈$111 per MNQ in 2023, ≈$233 in 2026) |
| Target | 3 × stop |
| Entries | Max 2 per day; signals checked every 30 min, 10:30-15:00 New York time |
| Noise band | 1.0 × (average absolute move from the open) |
| Exit | Stop, target, or flat at 15:25 |

| v3 result (1 MNQ) | 2023 (tuning) | 2026 (held out) |
|---|---|---|
| Trades / win rate | 131 / 47% | 75 / 49% |
| Net per trade (t-stat) | +$34 (t 3.33) | +$63 (t 1.81) |
| Mean daily P/L (sd) | +$22 ($98) | +$41 ($259) |
| Days with a trade | ~44-50% | ~44-50% |
| Max drawdown / longest losing streak | −$599 / 5 trades | −$2,456 / 8 trades |
| Implied annual Sharpe (daily mean/sd × √252) | ≈3.6 | ≈2.5 |

Read the 2026 column carefully. The edge per trade held up, but the swings grew. Daily volatility rose 2.6 times and the worst drawdown at **one micro contract reached −$2,456, more than the entire $2,000 drawdown on a 50K account**. Fixed-ATR stops keep risk proportional to the market, not to the account. MNQ cannot trade smaller than one micro, so when Nasdaq volatility doubles, the account rules get tighter in real terms. The 2026 t-stat of 1.81 also falls short of conventional significance. With 75 trades, the result is encouraging, not proof.

Sharpe ratios this high will not survive live trading. McLean and Pontiff find that published anomalies earn **26% less out of sample and 58% less after publication** ([McLean & Pontiff, JF 2016](https://Www.Gwern.net/doc/economics/2016-mclean.pdf)). Quantopian's study of 888 algorithms found that backtest Sharpe explained **less than 2.5% of live Sharpe** (R² < 0.025), while volatility and drawdown predicted live results better ([Wiecki et al.](https://c.mql5.com/forextsd/forum/208/All%20that%20Glitters%20Is%20Not%20Gold%20-%20Comparing%20Backtest%20and%20Out-of-Sample%20Performance%20on%20a%20Large%20Cohort%20o.pdf)). Harvey and Liu argue that a flat 50% haircut is a crude rule, and that marginal strategies deserve heavier penalties ([Harvey & Liu](https://people.duke.edu/~charvey/Research/Published_Papers/P120_Backtesting.PDF)). This plan therefore assumes a **live Sharpe of about 1.25-1.8**, which is roughly half the backtest figure, and the dollar estimates below are halved to match.

The same unchanged rules were also run on gold (XAUUSD 15-minute bars, New York session, 2012-2022). They produced **1,723 trades, a 31% win rate, −$1.7 per trade and t −1.82**. Only 3 of 11 years and 44% of months were positive. That matches the earlier finding in this conversation that no intraday gold or FX strategy had a robust after-cost edge. The noise-area effect does not carry over to gold, so gold is not a diversifier for this bot.

## Tradeify's rules make the 50K the right account at today's volatility

Tradeify's Select evaluation is a one-time fee with no activation fee. It uses an end-of-day trailing drawdown and a 40% consistency rule during the evaluation only. The 25K costs **$109** for a $1,500 target against a $1,000 drawdown. The 50K costs **$165** for a $3,000 target against a $2,000 drawdown ([quantvps](https://www.quantvps.com/blog/tradeify-review-and-payout-rules); [Tradeify help](https://help.tradeify.co/en/articles/12853921-select-evaluation-accounts)). In funded Select Flex accounts, a payout becomes available after five winning days. Each request is capped at 50% of profit and at a fixed dollar limit, the split is 90/10, and the floor locks at start + $100 once the balance clears start + drawdown + $100 ([mytradingbuddy](https://mytradingbuddy.ai/blog/tradeify-payout-rules); [TradersPost](https://blog.traderspost.io/article/how-to-get-funded-with-tradeify)). This session ran the v3 bot through those rules from every possible start day.

| Evaluation simulation (every start day, ≤120 days) | 2023 pass / fail | 2026 pass / fail | 2026 median days to pass |
|---|---|---|---|
| 25K, 1 MNQ ($1,500 target, $1,000 DD) | 100% / 0% | 53% / 47% | 16 |
| 50K, 1 MNQ ($3,000 target, $2,000 DD) | 100% / 0% (median 94 days) | 63% / 37% | 26 |
| 50K, 1 MNQ, $2,500 target | — | 66% / 34% | — |
| 50K, 2 MNQ | — | 53% / 47% | — |

| Funded Select Flex simulation (60 trading days, 1 MNQ) | Avg paid to trader per 3 months | Got a payout | Blown within 3 months |
|---|---|---|---|
| 25K, 2023 | $369 | 79% | 0% |
| 25K, 2026 | $1,007 | 71% | 75% |
| 50K, 2023 | $20 | 7% | — |
| 50K, 2026 | $969 | 70% | 43% |

*Funded simulation rules. 25K: $1,000 drawdown locking at +$100, winning day ≥ $100, payout = min(50% of profit, $1,250, profit − $1,100 kept). 50K: $2,000 drawdown, winning day ≥ $150, cap $2,000, $2,100 kept. Minimum payout $250, 90% split. The $2,000 cap in the 50K simulation is more conservative than the reported post-September-2026 cap of $2,500 ([Tradeify help](https://help.tradeify.co/en/articles/12853921-select-evaluation-accounts)).*

The two years point in opposite directions, and that is the key to choosing a size. In calm 2023, the 25K was ideal: no account blew up, and 79% were paid. The 50K was useless in 2023: passing took a median of 94 days, and almost nothing was paid within three months. In volatile 2026, the 25K's $1,000 drawdown held only about four $233 stops, and **75% of funded 25K accounts blew up within three months**. The 50K paid about the same, $969 against $1,007, and blew up far less often, 43% against 75%. This session's sizing rule follows from that, as an inference from the simulations: **use the 50K whenever the v3 stop per MNQ (0.6 × ATR14 in dollars) exceeds about $150, which means NQ ATR14 above roughly 250 points. Consider the 25K only in a calm regime where the stop sits near $110.** With ATR near 389 points today, that means the 50K. The research notes reach the same answer independently: the 50K has the best drawdown per fee dollar and payout cap per fee dollar ([prop economics notes, Tradeify pricing](https://help.tradeify.co/en/articles/10468265-which-plan-is-right-for-you)). **Never trade 2 MNQ to "speed up"**: in the simulation it cut the 2026 pass rate from 63% to 53%.

A rough per-account cost check makes the economics concrete. At 2026 behaviour, a funded 50K costs about $165 ÷ 0.63 ≈ **$260 in evaluation fees**. It then pays about $969 over three months, and 43% need replacing. That nets roughly **$700 per account slot per quarter, about $230 a month, at full backtest edge**. This is a back-of-envelope calculation that ignores reset discounts and the idle weeks while an account is re-qualified. Halve the edge and the payout falls by *more* than half, because surviving long enough to clear the $2,100 kept buffer gets harder. A prudent planning figure is **about $75-150 a month per funded 50K slot**, and any single slot can lose money in a quarter.

## Losing months are the base case, and copied accounts do not fix them

Under normal returns, the chance of a losing month is Φ(−S/√12), where S is the annual Sharpe ([Lo 2002](https://rpc.cfainstitute.org/research/financial-analysts-journal/2002/the-statistics-of-sharpe-ratios)). Applying that formula to the v3 bot's own daily figures gives the following.

| Scenario (1 MNQ trading P&L) | Monthly mean | Monthly sd | P(losing month) | P(losing quarter) |
|---|---|---|---|---|
| 2026 backtest as-is (S≈2.5) | +$861 | $1,187 | 23% | 11% |
| 2026 with 50% haircut (S≈1.25) | +$431 | $1,187 | 36% | 27% |
| 2023 backtest as-is (S≈3.6) | +$462 | $449 | 15% | 4% |
| 2023 with 50% haircut (S≈1.8) | +$231 | $449 | 30% | 18% |

*Own calculation: 21 trading days a month, independent days, normal distribution. Fat tails and volatility clustering make real losing months come in clumps.*

The planning case is the haircut row: **roughly one month in three ends red on trading P&L**, and about one quarter in four. Cash flow from the prop firm is lumpier still. The bot trades on only about half of days, and a 50K Flex payout needs five days of +$150 or more. Payouts therefore tend to arrive every four to six weeks per account, not on a calendar schedule, and an account blow-up turns a month negative through fees. The research notes' Monte Carlo makes the same point from the firm's side. At a true Sharpe of 2 and daily sigma of $250, a funded 50K-style account has about a **29% chance of being lost within 12 months, for about $660 a month of expected P&L**. At Sharpe 1, that rises to 55% (consistency notes, own Monte Carlo, calibrated against the vendor's 26.1% zero-edge pass rate from [The Desk](https://thedesk.onrender.com/methodology.html)).

Running five accounts does not change those percentages if all five copy the same bot. Five copies behave like one account at five times the size: same red months, five times the dollars, and one bad day can wipe out all five evaluations at once. Real consistency comes from **uncorrelated** return streams. Combined Sharpe rises to about S·√N only when the streams are independent. Four Sharpe-1 strategies lose in about 12% of months instead of 39%, but at a correlation of 0.3 the combined Sharpe is only about 1.45 (consistency notes, own calculation). The candidate diversifiers that fit Tradeify's intraday, flat-by-close rules are all **untested here**:

- EIA-day crude momentum: peer-reviewed, sample ends in 2019 ([Wen et al., Energy Journal](https://www.iaee.org/ej/ejexec/ej44-5-Xu-exsum.pdf)).
- 10-year Treasury auction-day dip-and-recovery ([Robeco](https://www.robeco.com/en-za/insights/2025/03/quant-chart-us-treasuries-up-for-auction)).
- Last-30-minute momentum on bonds or crude, from the multi-asset panel ([Baltussen et al.](https://pure.eur.nl/en/publications/hedging-demand-and-market-intraday-momentum/)).

Pre-FOMC drift has decayed since 2015 ([Kurov, Wolfe & Gilbert](https://www.skidmore.edu/economics/documents/KurovWolfeGilbert-TheDisappearingPre-FOMC-Announce-Drift-200914.pdf)). ES and RTY momentum would be highly correlated with the Nasdaq bot. Gold failed outright above. Each candidate must clear the same tune-then-hold-out test before it earns an account.

Time is the other constraint. Under the minimum track record formula, confirming a true Sharpe above zero at 95% confidence takes about **23 months of live data at S≈1.25 and about 12 months at S≈1.8** (Bailey & López de Prado, [MinTRL via PortfolioOptimizer](https://portfoliooptimizer.io/blog/the-probabilistic-sharpe-ratio-bias-adjustment-confidence-intervals-hypothesis-testing-and-minimum-track-record-length/); own calculation). A 3-month incubation cannot prove the edge. It can only catch a bot that is clearly broken.

## A staged plan with hard stops

The plan below scales by evidence, not by calendar. Each stage starts only when the previous stage's exit test is met. All dollar ranges assume the haircut edge, 50K Select accounts, 1 MNQ each, and fees at list price.

| Stage | Months | What to run | Realistic net cash per month (planning range) | Exit test to advance |
|---|---|---|---|---|
| 0. Incubate | 1-3 | v3 on sim/playback in real time + **one** 50K evaluation | **−$165 to −$500** (fees), $0 income | ≥40 live/sim trades; avg trade, win rate and slippage within the backtest's range; slippage ≤ ~1.9 pts (≤50% over the 1.25-pt model); no execution bugs |
| 1. First funded | 3-6 | 1-2 funded 50K + 1 evaluation in progress | **−$300 to +$800**; median about break-even; many $0 months | First payout received; funded P&L not below the haircut band after ~60 trades |
| 2. Scale out | 6-12 | Add one account at a time, up to **5 funded**, staggered 2-4 weeks apart | **−$800 to +$2,500**; average **≈$300-1,000**; expect 3-5 red or $0 months a year | 6+ months of live results consistent with S ≥ 1; cumulative cash (payouts − fees) positive |
| 3. Diversify | 12+ | Keep 5 slots; replace some Nasdaq copies with a second, validated uncorrelated strategy | **≈$750-2,000** average if a second edge exists; otherwise stays at Stage 2 levels | Second strategy passes tune/hold-out and 3-month incubation; P&L correlation < 0.3 |

Three operational rules support this table. **Stagger starts**: begin each new evaluation two to four weeks after the last, so accounts sit at different distances from their floors. One bad week then costs one account, not five. The reasoning is a practitioner tactic, not a tested rule (prop economics notes). **Run separate bot instances per account rather than a trade copier.** Tradeify permits copying between one owner's accounts only if every account trades the same direction. A copier glitch that leaves followers open while the leader is flat counts as hedging, which voids profits in *every* linked account and can bring a ban ([Tradeify help: hedging](https://help.tradeify.co/en/articles/10495868-rules-hedging-trading-micros-or-minis); [Phidias](https://phidiaspropfirm.com/education/tradeify-copy-trading)). Separate instances fail independently, but they must still never hold opposite positions in MNQ, NQ or correlated index products at the same time. **Respect the ceilings**: 5 funded accounts per household, 15 Select evaluations per 30 days, and no running the same bot at another firm ([Phidias: account limits](https://phidiaspropfirm.com/education/how-many-tradeify-accounts)). Tradeify also reviews traders for its Elite Live program after **3 payouts on one account or 10 in total**. That move is mandatory, closes every sim account, and restarts at a $0 balance with an 80/20 split ([Tradeify help: Elite](https://help.tradeify.co/en/articles/12969284-tradeify-elite-program); [Proptradingvibes](https://proptradingvibes.com/blog/tradeify-live-funded-accounts)). A five-account operation could reach 10 payouts within a few months, so sim income has a built-in end date. Budget for the reset.

Pre-commit to the kill switches in writing before Stage 0. The thresholds are conventions from practitioners such as Kevin Davey, applied to this bot's numbers ([Algo Advantage](https://algoadvantage.substack.com/p/037-kevin-davey-ii-selecting-optimal)). They are not tested optima.

| Trigger | Action |
|---|---|
| Losing streak ≥ 12 trades (1.5× the worst backtest streak of 8) | Pause all accounts; review execution and data |
| Average net per trade ≤ $0 after 60 live trades, or rolling 3-month result below the haircut band's 5th percentile | Stop the strategy; return to research |
| Average slippage > ~1.9 pts per round trip | Stop; the edge per trade cannot absorb it |
| Two funded accounts blown within 30 days | Stop buying evaluations for one month; recheck regime (ATR) and sizing |
| NQ ATR14 regime shift (stop per MNQ > ~$300, i.e. ATR > ~500 pts) | Pause new evaluations; even 50K holds fewer than 7 stops |
| Cumulative cash (all payouts − all fees) negative after 6 funded months | Stop scaling; drop back to one account |
| Cumulative cash negative after 12 months | **Stop the whole project** |

For "good money every month" to be true, several things must hold at once. Think of good money as $2,000 or more of net cash in at least 9 of 12 months. That needs a portfolio live Sharpe of about **2.3 or higher** (consistency notes, from the Φ formula). It also needs the noise-area edge to persist at roughly backtest-like levels rather than fading as it has on SPY and ES. It needs at least one more uncorrelated validated strategy, a funded payout per slot close to the cap most months, and a plan for the Elite Live transition. None of these is shown today. Funded Tradeify traders' average payout is about **$1,800** ([PropFirmMatch](https://propfirmmatch.com/futures/payouts)). Tradeify says **17.2% of evaluations** were completed ([Tradeify FTA](https://tradeify.co/funded-trader-agreement)), and an older plan page says **28.5% of funded individuals** received a payout ([Tradeify Select](https://tradeify.co/select-plan)). Steady four-figure monthly income sits well beyond what most participants achieve.

## Conclusion

The bot's real advantage is that its edge survived a test designed to kill it, not that it is large. That changes the question from "how much can five accounts make?" to "how cheaply can the edge be proved live before volatility or decay ends it?" The main enemy is the floor of one micro contract. When Nasdaq volatility doubles, the 25K's drawdown becomes a coin flip and even the 50K holds only a handful of stops. So the regime, measured by ATR, should decide account size and whether to buy new evaluations at all.

The path to consistency runs through a second, independent edge, not a sixth account. The most valuable next research hours go into testing one event-driven or non-equity strategy, such as EIA-day crude or Treasury-auction trades, with the same tune-then-hold-out discipline. Meanwhile, Stages 0-2 should be run as a paid live experiment with a capped fee budget and a fixed 12-month stop date. Judged that way, making $300-1,000 a month with a third of months red would be a success, not a disappointment.
