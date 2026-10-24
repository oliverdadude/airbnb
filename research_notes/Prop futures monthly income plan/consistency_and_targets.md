# Consistency and realistic monthly targets for small-capital / prop-funded systematic futures traders

Note on method: WebFetch and direct downloads were blocked in this session (DNS/proxy refusals for financemagnates.com, quantpedia.com, davidhbailey.com, etc.), so the citations below rest on search-result abstracts and summaries rather than full-text reads. Figures marked "own calculation" are closed-form or Monte Carlo results I computed with standard formulas (normal i.i.d. returns). Their assumptions are stated, and they are not taken from a published source. The script is at /tmp/claude-0/-home-user-airbnb/dd54aeab-58af-55fd-836e-49b2bd20891e/scratchpad/calc.py.

## Q1. Probability of a losing month at Sharpe S, and the effect of combining N uncorrelated strategies

### Takeaway
Assuming normal i.i.d. returns, P(losing month) = Phi(-S/sqrt(12)), where S is the annual Sharpe. Even a Sharpe 2 strategy loses in about 28% of months. Combining N uncorrelated, equal-risk strategies raises the Sharpe to about S*sqrt(N), so 4 uncorrelated Sharpe 1 strategies (combined Sharpe 2) lose in about 12% of months instead of 39%. Correlation erodes this benefit quickly.

### Cited Findings
- Lo (2002) derives the sampling distribution of the Sharpe ratio. Under i.i.d. returns the standard error is about sqrt((1 + SR^2/2)/T). Multiplying a monthly Sharpe by sqrt(12) is wrong when returns are serially correlated: positive autocorrelation overstates the annual Sharpe — [Lo, "The Statistics of Sharpe Ratios", FAJ 2002](https://rpc.cfainstitute.org/research/financial-analysts-journal/2002/the-statistics-of-sharpe-ratios); [PDF copy](https://traders.studentorg.berkeley.edu/papers/The-Statistics-of-Sharpe-Ratios.pdf)
- Skewness and kurtosis do not change the point estimate of the Sharpe ratio, but they widen its confidence bands. Negative skew combined with fat tails means more losing outliers than the normal approximation implies — [Bailey & Lopez de Prado, "The Sharpe Ratio Efficient Frontier", Journal of Risk](https://ideas.repec.org/a/rsk/journ4/2223785.html); [PortfolioOptimizer summary](https://portfoliooptimizer.io/blog/the-probabilistic-sharpe-ratio-bias-adjustment-confidence-intervals-hypothesis-testing-and-minimum-track-record-length/)
- Real-world diversification example: SG notes that short-term CTAs "have historically exhibited low pairwise correlations to each other, which once again kept the index volatility low at around 4%" in 2022 — [SG 2022 CTA Index Performance Review (via Alpha Week)](https://mail.alpha-week.com/2022-cta-index-performance-review)

### Own calculation (normal i.i.d. monthly returns; combined Sharpe = S*sqrt(N) for uncorrelated equal-risk strategies)

| Annual Sharpe (single) | P(loss month) N=1 | N=2 | N=4 | N=9 | P(losing quarter), N=1 | P(losing year), N=1 |
|---|---|---|---|---|---|---|
| 0.5 | 44.3% | 41.9% | 38.6% | 33.3% | 40.1% | 30.9% |
| 1.0 | 38.6% | 34.2% | 28.2% | 19.3% | 30.9% | 15.9% |
| 1.5 | 33.3% | 27.0% | 19.3% | 9.7% | 22.7% | 6.7% |
| 2.0 | 28.2% | 20.7% | 12.4% | 4.2% | 15.9% | 2.3% |
| 3.0 | 19.3% | 11.0% | 4.2% | 0.5% | 6.7% | 0.1% |

- With correlation rho between strategies: combined Sharpe = S*sqrt(N/(1+(N-1)rho)). For 4 Sharpe 1 strategies at rho = 0.3 the combined Sharpe is about 1.45, against 2.0 when uncorrelated, so P(loss month) is about 34%, not 12%.
- Drawdown depth: for a fixed volatility target, expected maximum drawdown scales roughly with sigma^2/mu = sigma/SR (in volatility units). Doubling the Sharpe through diversification at the same total volatility roughly halves the typical drawdown in dollar terms. This is the standard Brownian-motion result, and I found no primary source for it in this session.

### Inferences
- A trader aiming for "consistent monthly income" (for example, 9 or more green months out of 12, i.e. P(loss) of 25% or less) needs a portfolio-level live Sharpe of about 2.3 or higher. A single strategy rarely sustains that live (see Q3), so in practice it takes several uncorrelated strategies or markets.
- Intraday strategies on the same index future (for example ES and NQ) are usually highly correlated, so diversification has to come from different markets (rates, energy, metals, FX) and different logic (trend, mean reversion, breakout, different holding periods).

### Gaps
- I found no published empirical study measuring P(losing month) for diversified intraday futures portfolios. The table is theoretical, and fat tails and volatility clustering make real losing months clumpier.

## Q2. Position sizing and risk of ruin under a hard trailing drawdown (prop rules)

### Takeaway
A trailing drawdown is far harsher than a static one: a zero-edge trader passes a typical 50K evaluation only about 26% of the time. Ruin risk depends mainly on the ratio of daily P&L volatility to the drawdown limit and on the true Sharpe. Small fixed contract sizes, so that daily sigma is about 1/10 of the drawdown or less, plus reaching the lock (the trailing floor freezing at start balance) quickly, are the main levers. I found no peer-reviewed study. Evidence is vendor Monte Carlo plus first-principles simulation.

### Cited Findings
- Vendor engine validated on Topstep 50K rules: a zero-edge trader (50% win rate, 1:1 reward-to-risk) passes 40.2% of the time with a static floor and 26.1% with the trailing-then-lock floor — [The Desk methodology](https://thedesk.onrender.com/methodology.html); [The Desk: trailing vs static](https://thedesk.onrender.com/learn/trailing-drawdown-vs-static-drawdown.html) (vendor; full text not read)
- Another vendor blog cites 10,000-account Monte Carlo results: 46% pass with trailing vs 63% with static/EOD drawdown. No methodology is given, so the weighting is low — [PropScorer](https://www.propscorer.com/blog/trailing-drawdown-killing-accounts-eod-wins)
- A position-size planner uses 5,000 resampled simulations of real trades and recommends the largest contract count that keeps a pass rate of at least 70%. It treats an intraday trailing drawdown as more conservative than end-of-day — [Phoenix Position Size Planner](https://futures.aeromir.com/phoenix-planner)
- Calculator caveat: checking limits only on closed trades overstates pass rates, because firms track intraday floating equity. With roughly 30 trades the simulated pass rate is "fragile" — summarised from vendor tools in search results ([NexusFi position sizing](https://nexusfi.com/a/prop-firms/position-sizing-funded-evaluations); [NexusFi trailing drawdown mechanics](https://nexusfi.com/a/prop-firms/trailing-drawdown-mechanics))
- Conflicting opinions: one vendor says sizing tweaks barely move the pass rate under trailing rules and only real edge does. A blog claims conservative sizing roughly doubles the pass rate. That claim is an unsourced rule of thumb.

### Own Monte Carlo (normal daily P&L, EOD trailing $2,000 drawdown, $3,000 target, 252-day horizon, 20,000 paths)

| True annual Sharpe | Daily sigma $250 | $400 | $600 |
|---|---|---|---|
| 0 (no edge) | pass 26% | 27% | 29% |
| 1 | 48% | 42% | 39% |
| 2 | 70% | 58% | 51% |
| 3 | 86% | 72% | 62% |

- The zero-edge result (26-29%) independently matches the vendor's 26.1% figure, which suggests the simple model is calibrated.
- With no edge, larger size slightly raises the pass rate, because it amounts to a lottery. With an edge, smaller size raises the pass rate but takes longer: at Sharpe 2, the median is about 58 trading days at $250/day sigma versus about 13 at $600.
- Funded phase: a trailing $2,000 floor that locks at start +$100 once the peak reaches +$2,100. Probability of losing the account within 12 months, with expected monthly P&L (drift) in brackets:
  - Sharpe 1: 32% at sigma $150 (~$200/mo), 55% at sigma $250 (~$330/mo), 69% at sigma $400 (~$530/mo)
  - Sharpe 2: 11% (~$400/mo), 29% (~$660/mo), 47% (~$1,060/mo)
  - Sharpe 3: 3% (~$600/mo), 14% (~$990/mo), 29% (~$1,590/mo)
- Closed-form result (Taylor 1975 / Lehoczky 1977 drawdown results for Brownian motion with drift; recalled, not fetched): under a pure trailing drawdown D with no lock, ruin is certain eventually. The expected peak profit before ruin is (sigma^2/2mu)(e^(2mu D/sigma^2) - 1), which grows exponentially in D*mu/sigma^2. That is why both a small sigma relative to D and an early lock matter so much.

### Inferences
- Fixed fractional sizing is not really usable inside a prop account, since the risk budget is a fixed dollar drawdown and not equity. The practical approach is fixed small contracts until the floor locks, then scale contracts in steps as the cushion above the floor grows (for example, add 1 micro or mini per X dollars of buffer).
- Rule of thumb from the simulations: keep daily P&L sigma at about 1/8 to 1/13 of the trailing drawdown (roughly $150-250 on a $2,000 drawdown). Expect only a few hundred dollars per month per 50K account at realistic Sharpe ratios. Income scales by running several accounts, which also diversifies ruin events if the strategies differ, but not if every account copies the same trades.

### Gaps
- No academic or independently audited Monte Carlo of prop-firm rules was found. Intraday (non-EOD) trailing, consistency rules, daily loss limits and payout withdrawals (which reset the cushion) were not modelled.

## Q3. Realistic live Sharpe and monthly returns; backtest-to-live degradation; prop payout reality

### Takeaway
Large diversified CTA indices deliver a long-run Sharpe of about 0.5. Published anomalies lose about 26% of return out-of-sample and 58% post-publication. Quantopian found backtest Sharpe almost useless for predicting live Sharpe (R^2 < 0.025). Funded prop traders who get paid earn small amounts on average: about 7% of accounts reach any payout, and successful ones average about 4% of allocated capital.

### Cited Findings
- SG CTA Index: Sharpe 0.56 since its January 2000 inception (monthly returns), against 0.51 for the S&P 500 TR — [CFM blog](https://www.cfm.com/is-trend-really-having-a-bad-year/)
- SG CTA Index returned 20.1% in 2022, its best year since 2000 (SG Trend Index +27.3%). The SG Short-Term Traders sub-index had about 4% volatility — [SG 2022 review via Alpha Week](https://mail.alpha-week.com/2022-cta-index-performance-review)
- SG Short-Term Traders Index: a positive July 2023 (+0.17%) was its first positive month since September 2022, and it was -3.08% YTD. This shows that even professional short-term CTAs go through long losing streaks — [The Full FX](https://thefullfx.com/traders-slip-back-into-the-red-in-july/)
- An unidentified equal-weight CTA benchmark: CAGR 4.15%, standard deviation 8.7%, Sharpe 0.46. The source and period are unclear, so treat it as indicative only — [Autumn Gold report](https://autumngold.com/SubLeaf/gold_report.php?id=114703)
- McLean & Pontiff (JF 2016), 97 anomalies: returns 26% lower out-of-sample and 58% lower post-publication, of which about 32% is attributed to publication-informed trading. (A 2013 working paper reported 10% and 35%.) — [McLean & Pontiff PDF](https://Www.Gwern.net/doc/economics/2016-mclean.pdf); [Ivey copy](https://ivey.uwo.ca/media/3775549/pontiff.pdf)
- Quantopian (Wiecki et al. 2016), 888 algorithms with at least 6 months out-of-sample: backtest Sharpe has R^2 < 0.025 for predicting out-of-sample Sharpe. More backtesting means a larger IS/OOS gap. Volatility and maximum drawdown, and hedging, are more predictive. Machine-learning classifiers reach R^2 = 0.17 — [Paper PDF (mirror)](https://c.mql5.com/forextsd/forum/208/All%20that%20Glitters%20Is%20Not%20Gold%20-%20Comparing%20Backtest%20and%20Out-of-Sample%20Performance%20on%20a%20Large%20Cohort%20o.pdf); [Quantpedia summary](https://quantpedia.com/quantopians-academic-paper-about-in-vs-out-of-sample-performance-of-trading-alg/)
- Harvey & Liu ("Backtesting", JPM 2015): the common practice of a flat 50% Sharpe haircut is a rule of thumb they call a "serious mistake". The correct multiple-testing haircut is nonlinear: high Sharpe ratios are only moderately penalised, while marginal ones are heavily penalised — [Harvey & Liu PDF](https://people.duke.edu/~charvey/Research/Published_Papers/P120_Backtesting.PDF); [Man/Oxford-Man summary](https://www.man.com/insights/backtesting)
- Prop payouts across the industry: FPFX Tech data on more than 300,000 accounts (about 100,000 traders, 10 firms) shows about 7% of accounts reached a payout, and those that did averaged about 4% of allocated capital — [Finance Magnates](https://financemagnates.com/forex/analysis/exclusive-only-7-of-300000-prop-trading-accounts-achieved-payouts)
- Topstep 2025 (company-reported, via reviews): 16.8% of Combines passed per attempt, 51.8% of participants were funded at least once, about 33% of funded traders received a payout, and 0.71% of starters reached a Live Funded account — [AlphaEx Capital review](https://www.alphaexcapital.com/prop-trading/topstep-review); [Curved Trading review](https://curvedtrading.com/articles/en/reviews/topstep-review/) (not independently verified)
- FTMO 2024 (analyst inference from its accounts): payouts were about 55% of revenue — [TradeInformer](https://www.tradeinformer.com/prop-weekly/what-ftmo-tells-us-about-prop-firm-finances)
- Consistency rules (no single day above 20-40% of profit, depending on the firm) and 8-10 minimum qualifying days gate payouts. Breaches usually delay a payout rather than fail the account — [QuantVPS on MFF](https://www.quantvps.com/blog/my-funded-futures-consistency); [DayTradingz](https://daytradingz.com/prop-firm-consistency-rule/)

### Inferences
- A planning haircut: take the backtest Sharpe, apply at least a 50% reduction (more if many variants were tried), and plan on a live Sharpe of 0.7-1.5 per intraday strategy. Live Sharpe above 2 at the portfolio level is achievable only with genuine diversification.
- Monthly return targets: professional short-term CTAs run at about 4-10% annual volatility. At Sharpe 1, roughly 1%/month on account equity is already strong. For a prop 50K account with a $2,000 trailing drawdown, a defensible expected value is a few hundred to about $1,000/month per account (own MC above), with frequent zero or negative months and a material annual chance of losing the account.
- Industry data (7% of accounts get any payout, averaging 4% of allocation) suggests that a funded trader earning about $500-1,000/month consistently is already in the top tail.

### Gaps
- No public database isolates *intraday* futures CTAs with audited Sharpe ratios. BarclayHedge and SG short-term index figures beyond those above could not be fetched.
- Topstep and FPFX figures are self-reported or vendor data, and I could not read them in full text.

## Q4. How many live trades or months are needed to separate a real edge from luck

### Takeaway
The minimum track-record length to be 95% confident that the true Sharpe is above 0 is about 3 years at Sharpe 1, about 10 months at Sharpe 2, and about 6 months at Sharpe 3, under normal returns. Negative skew and fat tails lengthen it. Multiple testing (many backtested variants) raises the bar further, as captured by the Deflated Sharpe Ratio and Minimum Backtest Length.

### Cited Findings
- The Probabilistic Sharpe Ratio and Minimum Track Record Length (Bailey & Lopez de Prado) give the track-record length needed to reject "true Sharpe <= threshold" at a chosen confidence, allowing for skew and kurtosis. The PerformanceAnalytics R package implements MinTRL — [Journal of Risk listing](https://ideas.repec.org/a/rsk/journ4/2223785.html); [PerformanceAnalytics MinTrackRecord](https://www.quantargo.com/help/r/latest/packages/PerformanceAnalytics/NEWS/MinTrackRecord)
- Formula (as recalled in search summaries; verify before use): MinTRL = 1 + [1 - g3*SR + ((g4 - 1)/4)*SR^2] * (z_alpha/(SR - SR*))^2, in periods of the SR frequency — [PortfolioOptimizer](https://portfoliooptimizer.io/blog/the-probabilistic-sharpe-ratio-bias-adjustment-confidence-intervals-hypothesis-testing-and-minimum-track-record-length/)
- The Deflated Sharpe Ratio corrects for selection bias across the number of trials and for non-normality — [Bailey & Lopez de Prado, DSR, JPM 2014 (SSRN)](https://papers.ssrn.com/abstract=2460551)
- Minimum Backtest Length: with about 5 years of daily data, trying more than roughly 45 independent configurations makes an in-sample Sharpe of 1 expected to be about 0 out-of-sample. That figure comes from a secondary summary, and the original wording was not confirmed — [Bailey et al., Probability of Backtest Overfitting (SSRN)](https://papers.ssrn.com/abstract=2326253); [CXO Advisory summary](https://www.cxoadvisory.com/big-ideas/insidiousness-of-overfitting-investment-strategies-via-iterative-backtests)

### Own calculation (normal returns, SR* = 0, 95% one-sided, monthly observations)

| Annual Sharpe | Months needed | Years |
|---|---|---|
| 0.5 | 132 | 11.0 |
| 1.0 | 35 | 2.9 |
| 1.5 | 17 | 1.4 |
| 2.0 | 10 | 0.9 |
| 3.0 | 6 | 0.5 |

- In trades: a per-trade t-stat of about 2 requires N of about (2/SR_trade)^2. For example, a per-trade Sharpe of 0.1 (typical for intraday systems) needs about 400 trades, and 0.2 needs about 100 (own calculation, ignoring serial correlation and multiple testing).

### Inferences
- A 3-month sim or incubation window cannot statistically confirm an edge below a Sharpe of about 3. It can only detect gross failure: live results falling well outside the backtest's Monte Carlo band. Trust should be built gradually across the scaling stages, not granted at one checkpoint.

### Gaps
- I could not fetch the exact MinBTL equation or the original 45-trial example.

## Q5. Practical staged plans (sim, small live, scale-up, kill switches)

### Takeaway
Practitioner practice (most prominently Kevin Davey's process) is: build, check walk-forward and out-of-sample results, incubate in real-time sim or minimal size for about 3-9 months, compare live results with the backtest's Monte Carlo distribution, and give every strategy a predefined quit point. This is opinion and practice from practitioners, not peer-reviewed evidence.

### Cited Findings
- Davey's incubation period is a live, no-capital test, typically 3 or 6 months (another summary says 6-9 months of real-time paper trading). Live results are compared with backtest expectations, and further investigation is required if they diverge — [Financial Wisdom TV summary](https://www.financialwisdomtv.com/post/building-winning-algorithmic-trading-systems-kevin-davey-s-complete-framework-for-trading-success); [Algo Advantage podcast with Davey](https://algoadvantage.substack.com/p/036-kevin-davey-part-i-its-all-about)
- Each strategy gets a predefined stop-trading threshold (an illustrative example is a $5,000 drawdown per contract). Davey reviews the strategy library monthly and uses Monte Carlo to estimate worst-case drawdowns and compare realised results with simulated ones — [Algo Advantage ep. 037](https://algoadvantage.substack.com/p/037-kevin-davey-ii-selecting-optimal); same summaries as above
- Quantopian evidence supports kill and selection criteria based on realised volatility and drawdown more than on backtest Sharpe — [Wiecki et al.](https://c.mql5.com/forextsd/forum/208/All%20that%20Glitters%20Is%20Not%20Gold%20-%20Comparing%20Backtest%20and%20Out-of-Sample%20Performance%20on%20a%20Large%20Cohort%20o.pdf)

### Inferences (synthesised plan; opinion grounded in the evidence above)
1. **Research:** hold out out-of-sample data, record the number of variants tried, and compute the DSR. Require the haircut (about 50%) Sharpe to stay above 1.
2. **Incubation (sim, 2-3 months, or at least about 50-100 trades):** pass if live P&L, win rate and average trade sit within the backtest Monte Carlo 5th-95th percentile band, and slippage is at or below the modelled level.
3. **Small live, or one evaluation account at minimum size (micros), for 3-6 months:** daily sigma at about 1/10 of the trailing drawdown. Add strategies only when they are uncorrelated (rho < 0.3).
4. **Scale-up:** add contracts only after the trailing floor locks and the buffer exceeds about 2x the 95th-percentile Monte Carlo drawdown. Add accounts one at a time, and scale in steps of no more than 25-50%.
5. **Kill switches:** stop a strategy if its live drawdown exceeds about 1.5x the backtest maximum drawdown or the Monte Carlo 95th-99th percentile. Also stop it if rolling 3-6 month live results fall below the 5th percentile of the simulated band, or slippage exceeds the model by about 50%. Portfolio-level kill switches are a daily loss limit set inside the firm's limit and a pause after N consecutive losing days. Pre-commit to these thresholds in writing.

### Gaps
- I found no academic studies of optimal incubation length or kill-switch thresholds. The numeric thresholds above are practitioner conventions plus my own synthesis, not tested results.
