<div class="pklg">

### Extraction ledger <sub>KB artifacts as of 2026-11-11 18:49 · one page per panel and run group</sub>

<div class="tiles"><div class="tile"><i>Drugs processed: ATC / non-ATC / toxins</i><b>4,699 / 24 / 732</b><em>1,782 / 17 / 173 with ≥1 popPK/PD/PGx record</em></div><div class="tile"><i>Literature (papers)</i><b>196,775</b><em>28,150 PK/PD/PGx-relevant papers (14%)</em></div><div class="tile"><i>Full text (papers)</i><b>56,516</b><em>140,259 abstract-only papers</em></div><div class="tile"><i>Full-text sources (papers)</i><b>16,497 · 39,805</b><em>GROBID-parsed PDFs · publisher JATS XML</em></div><div class="tile"><i>LLM tokens</i><b>1130.4M input</b><em>87.33M output · cross-checks included</em></div><div class="tile"><i>Domain coverage (drugs)</i><b>1442 · 1705 · 174</b><em>Drugs with popPK · PD · PGx records</em></div><div class="tile"><i>Accepted records by species (top 4)</i><b>4,149 · 1,709 · 659 · 314</b><em>human · in vitro · rat · mouse</em></div><div class="tile"><i>Projected full-text yield</i><b>13,839 · ~10,104 · 37%</b><em>Requested PDFs · expected additional records · observed record-yield rate</em></div></div>
<h3 class="csechead">Corpus</h3><div class="cstats"><div class="cbox"><h4>popPK</h4><div class="cnum"><b>5,065</b><span>extracted records</span></div><div class="cnum"><b class="ok">2,005</b><span>simulatable records · 39.6%</span></div><table><tr><td>topology</td><td>1C 3758 · 2C 824 · parent_metabolite 215</td></tr><tr><td>parameterisation</td><td>mechanistic 3765 · apparent 1294</td></tr><tr><td>covariate equations</td><td>621 (12.3%)</td></tr><tr><td>simulation criterion</td><td>Clearance and volume available</td></tr></table></div><div class="cbox"><h4>PD</h4><div class="cnum"><b>5,098</b><span>extracted records</span></div><div class="cnum"><b class="ok">831</b><span>simulatable records · 16.3%</span></div><table><tr><td>family</td><td>sigmoid_emax 1655 · emax 1170 · unknown 1011</td></tr><tr><td>driver</td><td>cited_pk 2244 · conc_no_pk 1212</td></tr><tr><td>supported structures</td><td>Emax 534 · turnover 297 · effect-cmt 244</td></tr><tr><td>simulation criterion</td><td>potency + Emax, or a turnover rate</td></tr></table></div><div class="cbox"><h4>PGx</h4><div class="cnum"><b>170</b><span>extracted records</span></div><div class="cnum"><b class="ok">35</b><span>simulatable records · 20.6%</span></div><table><tr><td>mechanism</td><td>safety_allele 135 · metabolism 16</td></tr><tr><td>genes covered</td><td>25</td></tr><tr><td>simulation criterion</td><td>Named PK parameter modified</td></tr></table></div><div class="cbox"><h4>accepted records by species</h4><table class="csp"><tr><td></td><td class="n"><i>popPK</i></td><td class="n"><i>PD</i></td><td class="n"><i>PGx</i></td></tr><tr><td>human</td><td class="n">2,133</td><td class="n">1,693</td><td class="n">323</td></tr><tr><td>in vitro</td><td class="n">11</td><td class="n">1,696</td><td class="n">2</td></tr><tr><td>rat</td><td class="n">91</td><td class="n">568</td><td class="n">0</td></tr><tr><td>mouse</td><td class="n">29</td><td class="n">285</td><td class="n">0</td></tr><tr><td>human + animal</td><td class="n">30</td><td class="n">152</td><td class="n">1</td></tr><tr><td>other animal</td><td class="n">3</td><td class="n">120</td><td class="n">0</td></tr><tr><td>pig</td><td class="n">12</td><td class="n">89</td><td class="n">0</td></tr><tr><td>dog</td><td class="n">40</td><td class="n">51</td><td class="n">0</td></tr><tr><td>13 others</td><td class="n">118</td><td class="n">288</td><td class="n">3</td></tr></table><p class="cnote"><small>Records that passed their checks (popPK: closed-form checks; PGx: including guideline-derived estimates), so they differ from the extracted-record counts beside it.</small></p></div></div>

#### curated panels <sub>6 panels · a page each; e/r/o = extracted / rejected / other outcomes</sub>

| panel | scope | drugs | popPK e/r/o | PD e/r/o | PGx e/r/o |
|---|---|---|---|---|---|
| [**dbs**](/ledger/p-dbs) | Selected drug panel | 20 | <span class="n"><b class="ok">314</b><span class="sl">/</span><b class="bad">206</b><span class="sl">/</span><span class="mut">0</span></span> | <span class="n"><b class="ok">143</b><span class="sl">/</span><b class="bad">10</b><span class="sl">/</span><span class="mut">0</span></span> | <span class="n"><b class="ok">107</b><span class="sl">/</span><b class="bad">0</b><span class="sl">/</span><span class="mut">443</span></span> |
| [**ddd**](/ledger/p-ddd) | Curated reference panel; overlaps other panels | 7 | <span class="n"><b class="ok">151</b><span class="sl">/</span><b class="bad">60</b><span class="sl">/</span><span class="mut">0</span></span> | <span class="n"><b class="ok">37</b><span class="sl">/</span><b class="bad">3</b><span class="sl">/</span><span class="mut">0</span></span> | <span class="n"><b class="ok">60</b><span class="sl">/</span><b class="bad">0</b><span class="sl">/</span><span class="mut">252</span></span> |
| [**dn1**](/ledger/p-dn1) | Non-ATC modelling panel | 15 | <span class="n"><b class="ok">23</b><span class="sl">/</span><b class="bad">30</b><span class="sl">/</span><span class="mut">0</span></span> | <span class="n"><b class="ok">16</b><span class="sl">/</span><b class="bad">4</b><span class="sl">/</span><span class="mut">0</span></span> | <span class="n"><b class="ok">0</b><span class="sl">/</span><b class="bad">0</b><span class="sl">/</span><span class="mut">6</span></span> |
| [**do1**](/ledger/p-do1) | Oncology panel of the ADR records | 7 | <span class="n"><b class="ok">108</b><span class="sl">/</span><b class="bad">98</b><span class="sl">/</span><span class="mut">0</span></span> | <span class="n"><b class="ok">66</b><span class="sl">/</span><b class="bad">8</b><span class="sl">/</span><span class="mut">0</span></span> | <span class="n"><b class="ok">50</b><span class="sl">/</span><b class="bad">0</b><span class="sl">/</span><span class="mut">172</span></span> |
| [**dph**](/ledger/p-dph) | Diverse PGx/ATC panel | 18 | <span class="n"><b class="ok">327</b><span class="sl">/</span><b class="bad">165</b><span class="sl">/</span><span class="mut">0</span></span> | <span class="n"><b class="ok">128</b><span class="sl">/</span><b class="bad">4</b><span class="sl">/</span><span class="mut">0</span></span> | <span class="n"><b class="ok">207</b><span class="sl">/</span><b class="bad">0</b><span class="sl">/</span><span class="mut">636</span></span> |
| [**dse**](/ledger/p-dse) | Incretin/GLP-1 panel | 19 | <span class="n"><b class="ok">114</b><span class="sl">/</span><b class="bad">56</b><span class="sl">/</span><span class="mut">0</span></span> | <span class="n"><b class="ok">54</b><span class="sl">/</span><b class="bad">8</b><span class="sl">/</span><span class="mut">0</span></span> | <span class="n"><b class="ok">42</b><span class="sl">/</span><b class="bad">0</b><span class="sl">/</span><span class="mut">178</span></span> |

#### run groups <sub>436 started · 429 finished · one page each</sub>

| run group | run | ATC | drugs | time | popPK · PD · PGx extracted |
|---|---|---|---|---|---|
| [dg-A01A-1](/ledger/dg-A01A-1) | <span class="badge b-finished">finished</span> | A01A | 14 drugs | 1.82 h | 14 popPK · 30 PD · 0 PGx |
| [dg-A01A-2](/ledger/dg-A01A-2) | <span class="badge b-finished">finished</span> | A01A | 15 drugs | 2.15 h | 19 popPK · 16 PD · 0 PGx |
| [dg-A01A-3](/ledger/dg-A01A-3) | <span class="badge b-finished">finished</span> | A01A | 12 drugs | 1.76 h | 8 popPK · 10 PD · 1 PGx |
| [dg-A02A-1](/ledger/dg-A02A-1) | <span class="badge b-finished">finished</span> | A02A | 11 drugs | 0.47 h | 2 popPK · 1 PD · 2 PGx |
| [dg-A02A-2](/ledger/dg-A02A-2) | <span class="badge b-finished">finished</span> | A02A | 10 drugs | 0.40 h | 0 popPK · 0 PD · 0 PGx |
| [dg-A02B-1](/ledger/dg-A02B-1) | <span class="badge b-finished">finished</span> | A02B | 14 drugs | 0.60 h | 46 popPK · 10 PD · 0 PGx |
| [dg-A02B-2](/ledger/dg-A02B-2) | <span class="badge b-finished">finished</span> | A02B | 14 drugs | 1.11 h | 8 popPK · 8 PD · 0 PGx |
| [dg-A02B-3](/ledger/dg-A02B-3) | <span class="badge b-finished">finished</span> | A02B | 14 drugs | 1.76 h | 27 popPK · 12 PD · 3 PGx |
| [dg-A02B-4](/ledger/dg-A02B-4) | <span class="badge b-finished">finished</span> | A02B | 14 drugs | 1.40 h | 14 popPK · 11 PD · 0 PGx |
| [dg-A02B-5](/ledger/dg-A02B-5) | <span class="badge b-finished">finished</span> | A02B | 12 drugs | 0.65 h | 3 popPK · 2 PD · 0 PGx |
| [dg-A03A-1](/ledger/dg-A03A-1) | <span class="badge b-finished">finished</span> | A03A | 15 drugs | 0.31 h | 0 popPK · 0 PD · 0 PGx |
| [dg-A03A-2](/ledger/dg-A03A-2) | <span class="badge b-finished">finished</span> | A03A | 15 drugs | 0.53 h | 7 popPK · 1 PD · 0 PGx |
| [dg-A03A-3](/ledger/dg-A03A-3) | <span class="badge b-finished">finished</span> | A03A | 15 drugs | 0.40 h | 1 popPK · 5 PD · 0 PGx |
| [dg-A03A-4](/ledger/dg-A03A-4) | <span class="badge b-finished">finished</span> | A03A | 15 drugs | 0.39 h | 2 popPK · 2 PD · 0 PGx |
| [dg-A03B](/ledger/dg-A03B) | <span class="badge b-finished">finished</span> | A03B | 10 drugs | 0.41 h | 2 popPK · 3 PD · 0 PGx |
| [dg-A03C-1](/ledger/dg-A03C-1) | <span class="badge b-finished">finished</span> | A03C | 9 drugs | 0.05 h | 0 popPK · 0 PD · 0 PGx |
| [dg-A03C-2](/ledger/dg-A03C-2) | <span class="badge b-finished">finished</span> | A03C | 9 drugs | 0.02 h | 0 popPK · 0 PD · 0 PGx |
| [dg-A03D](/ledger/dg-A03D) | <span class="badge b-finished">finished</span> | A03D | 10 drugs | 0.22 h | 3 popPK · 0 PD · 0 PGx |
| [dg-A03F](/ledger/dg-A03F) | <span class="badge b-finished">finished</span> | A03F | 10 drugs | 0.68 h | 5 popPK · 7 PD · 0 PGx |
| [dg-A04A-1](/ledger/dg-A04A-1) | <span class="badge b-finished">finished</span> | A04A | 9 drugs | 0.29 h | 2 popPK · 3 PD · 0 PGx |
| [dg-A04A-2](/ledger/dg-A04A-2) | <span class="badge b-finished">finished</span> | A04A | 8 drugs | 0.98 h | 13 popPK · 5 PD · 0 PGx |
| [dg-A05A](/ledger/dg-A05A) | <span class="badge b-finished">finished</span> | A05A | 16 drugs | 0.53 h | 1 popPK · 23 PD · 0 PGx |
| [dg-A05B](/ledger/dg-A05B) | <span class="badge b-finished">finished</span> | A05B | 11 drugs | 1.36 h | 4 popPK · 3 PD · 0 PGx |
| [dg-A06A-1](/ledger/dg-A06A-1) | <span class="badge b-finished">finished</span> | A06A | 16 drugs | 0.41 h | 0 popPK · 1 PD · 0 PGx |
| [dg-A06A-2](/ledger/dg-A06A-2) | <span class="badge b-finished">finished</span> | A06A | 16 drugs | 1.25 h | 6 popPK · 6 PD · 1 PGx |
| [dg-A06A-3](/ledger/dg-A06A-3) | <span class="badge b-finished">finished</span> | A06A | 16 drugs | 1.67 h | 11 popPK · 5 PD · 0 PGx |
| [dg-A06A-4](/ledger/dg-A06A-4) | <span class="badge b-finished">finished</span> | A06A | 14 drugs | 0.98 h | 1 popPK · 7 PD · 0 PGx |
| [dg-A07A-1](/ledger/dg-A07A-1) | <span class="badge b-finished">finished</span> | A07A | 10 drugs | 0.89 h | 10 popPK · 10 PD · 0 PGx |
| [dg-A07A-2](/ledger/dg-A07A-2) | <span class="badge b-finished">finished</span> | A07A | 9 drugs | 1.14 h | 10 popPK · 7 PD · 1 PGx |
| [dg-A07B](/ledger/dg-A07B) | <span class="badge b-finished">finished</span> | A07B | 8 drugs | 0.44 h | 0 popPK · 0 PD · 0 PGx |
| [dg-A07D](/ledger/dg-A07D) | <span class="badge b-finished">finished</span> | A07D | 8 drugs | 0.55 h | 0 popPK · 0 PD · 0 PGx |
| [dg-A07E](/ledger/dg-A07E) | <span class="badge b-finished">finished</span> | A07E | 10 drugs | 1.18 h | 11 popPK · 6 PD · 0 PGx |
| [dg-A07F+1](/ledger/dg-A07F_1) | <span class="badge b-finished">finished</span> | A07F, A07X | 10 drugs | 0.97 h | 12 popPK · 2 PD · 0 PGx |
| [dg-A08A-1](/ledger/dg-A08A-1) | <span class="badge b-finished">finished</span> | A08A | 10 drugs | 0.48 h | 1 popPK · 4 PD · 0 PGx |
| [dg-A08A-2](/ledger/dg-A08A-2) | <span class="badge b-finished">finished</span> | A08A | 10 drugs | 0.96 h | 8 popPK · 11 PD · 0 PGx |
| [dg-A09A](/ledger/dg-A09A) | <span class="badge b-finished">finished</span> | A09A | 12 drugs | 1.18 h | 0 popPK · 10 PD · 0 PGx |
| [dg-A10A](/ledger/dg-A10A) | <span class="badge b-finished">finished</span> | A10A | 16 drugs | 2.21 h | 7 popPK · 13 PD · 0 PGx |
| [dg-A10B-1](/ledger/dg-A10B-1) | <span class="badge b-finished">finished</span> | A10B | 16 drugs | 0.46 h | 20 popPK · 19 PD · 0 PGx |
| [dg-A10B-2](/ledger/dg-A10B-2) | <span class="badge b-finished">finished</span> | A10B | 16 drugs | 1.91 h | 10 popPK · 12 PD · 4 PGx |
| [dg-A10B-3](/ledger/dg-A10B-3) | <span class="badge b-finished">finished</span> | A10B | 16 drugs | 0.97 h | 42 popPK · 16 PD · 7 PGx |
| [dg-A10B-4](/ledger/dg-A10B-4) | <span class="badge b-finished">finished</span> | A10B | 16 drugs | 0.83 h | 0 popPK · 0 PD · 0 PGx |
| [dg-A10B-5](/ledger/dg-A10B-5) | <span class="badge b-finished">finished</span> | A10B | 16 drugs | 1.42 h | 16 popPK · 13 PD · 1 PGx |
| [dg-A10B-6](/ledger/dg-A10B-6) | <span class="badge b-finished">finished</span> | A10B | 14 drugs | 2.83 h | 33 popPK · 20 PD · 6 PGx |
| [dg-A10X+1](/ledger/dg-A10X_1) | <span class="badge b-finished">finished</span> | A10X, A11A | 9 drugs | 0.77 h | 4 popPK · 4 PD · 1 PGx |
| [dg-A11C](/ledger/dg-A11C) | <span class="badge b-finished">finished</span> | A11C | 10 drugs | 1.47 h | 6 popPK · 1 PD · 0 PGx |
| [dg-A11D+1](/ledger/dg-A11D_1) | <span class="badge b-finished">finished</span> | A11D, A11G | 7 drugs | 0.43 h | 1 popPK · 1 PD · 0 PGx |
| [dg-A11H](/ledger/dg-A11H) | <span class="badge b-finished">finished</span> | A11H | 14 drugs | 1.93 h | 4 popPK · 5 PD · 0 PGx |
| [dg-A12A](/ledger/dg-A12A) | <span class="badge b-finished">finished</span> | A12A | 13 drugs | 0.38 h | 1 popPK · 4 PD · 0 PGx |
| [dg-A12B](/ledger/dg-A12B) | <span class="badge b-finished">finished</span> | A12B | 7 drugs | 0.34 h | 0 popPK · 0 PD · 0 PGx |
| [dg-A12C-1](/ledger/dg-A12C-1) | <span class="badge b-finished">finished</span> | A12C | 9 drugs | 0.66 h | 5 popPK · 0 PD · 0 PGx |
| [dg-A12C-2](/ledger/dg-A12C-2) | <span class="badge b-finished">finished</span> | A12C | 8 drugs | 0.83 h | 9 popPK · 5 PD · 0 PGx |
| [dg-A14A](/ledger/dg-A14A) | <span class="badge b-finished">finished</span> | A14A | 12 drugs | 0.45 h | 0 popPK · 0 PD · 0 PGx |
| [dg-A16A-1](/ledger/dg-A16A-1) | <span class="badge b-finished">finished</span> | A16A | 13 drugs | 0.93 h | 4 popPK · 5 PD · 0 PGx |
| [dg-A16A-2](/ledger/dg-A16A-2) | <span class="badge b-finished">finished</span> | A16A | 13 drugs | 0.70 h | 5 popPK · 2 PD · 0 PGx |
| [dg-A16A-3](/ledger/dg-A16A-3) | <span class="badge b-finished">finished</span> | A16A | 13 drugs | 0.45 h | 5 popPK · 8 PD · 0 PGx |
| [dg-A16A-4](/ledger/dg-A16A-4) | <span class="badge b-finished">finished</span> | A16A | 13 drugs | 0.64 h | 3 popPK · 0 PD · 0 PGx |
| [dg-A16A-5](/ledger/dg-A16A-5) | <span class="badge b-finished">finished</span> | A16A | 13 drugs | 0.40 h | 4 popPK · 2 PD · 0 PGx |
| [dg-B01A-1](/ledger/dg-B01A-1) | <span class="badge b-finished">finished</span> | B01A | 16 drugs | 2.16 h | 12 popPK · 12 PD · 13 PGx |
| [dg-B01A-2](/ledger/dg-B01A-2) | <span class="badge b-finished">finished</span> | B01A | 16 drugs | 1.11 h | 26 popPK · 17 PD · 17 PGx |
| [dg-B01A-3](/ledger/dg-B01A-3) | <span class="badge b-finished">finished</span> | B01A | 16 drugs | 2.12 h | 18 popPK · 16 PD · 0 PGx |
| [dg-B01A-4](/ledger/dg-B01A-4) | <span class="badge b-finished">finished</span> | B01A | 16 drugs | 0.53 h | 29 popPK · 3 PD · 1 PGx |
| [dg-B01A-5](/ledger/dg-B01A-5) | <span class="badge b-finished">finished</span> | B01A | 14 drugs | 1.16 h | 40 popPK · 26 PD · 47 PGx |
| [dg-B02A](/ledger/dg-B02A) | <span class="badge b-finished">finished</span> | B02A | 7 drugs | 0.88 h | 9 popPK · 5 PD · 0 PGx |
| [dg-B02B-1](/ledger/dg-B02B-1) | <span class="badge b-finished">finished</span> | B02B | 13 drugs | 0.75 h | 33 popPK · 1 PD · 1 PGx |
| [dg-B02B-2](/ledger/dg-B02B-2) | <span class="badge b-finished">finished</span> | B02B | 13 drugs | 1.84 h | 14 popPK · 13 PD · 0 PGx |
| [dg-B02B-3](/ledger/dg-B02B-3) | <span class="badge b-finished">finished</span> | B02B | 11 drugs | 1.41 h | 11 popPK · 15 PD · 1 PGx |
| [dg-B03A-1](/ledger/dg-B03A-1) | <span class="badge b-finished">finished</span> | B03A | 16 drugs | 0.23 h | 0 popPK · 0 PD · 0 PGx |
| [dg-B03A-2](/ledger/dg-B03A-2) | <span class="badge b-finished">finished</span> | B03A | 15 drugs | 0.45 h | 0 popPK · 0 PD · 2 PGx |
| [dg-B03B](/ledger/dg-B03B) | <span class="badge b-finished">finished</span> | B03B | 8 drugs | 0.37 h | 2 popPK · 0 PD · 0 PGx |
| [dg-B03X](/ledger/dg-B03X) | <span class="badge b-finished">finished</span> | B03X | 10 drugs | 0.66 h | 17 popPK · 10 PD · 0 PGx |
| [dg-B05A](/ledger/dg-B05A) | <span class="badge b-finished">finished</span> | B05A | 14 drugs | 2.61 h | 10 popPK · 1 PD · 2 PGx |
| [dg-B05B](/ledger/dg-B05B) | <span class="badge b-finished">finished</span> | B05B | 9 drugs | 1.64 h | 4 popPK · 2 PD · 0 PGx |
| [dg-B05C](/ledger/dg-B05C) | <span class="badge b-finished">finished</span> | B05C | 11 drugs | 1.24 h | 6 popPK · 5 PD · 0 PGx |
| [dg-B05X](/ledger/dg-B05X) | <span class="badge b-finished">finished</span> | B05X | 14 drugs | 1.27 h | 8 popPK · 6 PD · 0 PGx |
| [dg-B06A-1](/ledger/dg-B06A-1) | <span class="badge b-finished">finished</span> | B06A | 12 drugs | 0.37 h | 6 popPK · 4 PD · 0 PGx |
| [dg-B06A-2](/ledger/dg-B06A-2) | <span class="badge b-finished">finished</span> | B06A | 11 drugs | 0.97 h | 3 popPK · 5 PD · 0 PGx |
| [dg-C01A](/ledger/dg-C01A) | <span class="badge b-finished">finished</span> | C01A | 15 drugs | 1.43 h | 18 popPK · 6 PD · 0 PGx |
| [dg-C01B-1](/ledger/dg-C01B-1) | <span class="badge b-finished">finished</span> | C01B | 15 drugs | 6.00 h | 30 popPK · 43 PD · 0 PGx |
| [dg-C01B-2](/ledger/dg-C01B-2) | <span class="badge b-finished">finished</span> | C01B | 15 drugs | 5.40 h | 32 popPK · 30 PD · 1 PGx |
| [dg-C01C-1](/ledger/dg-C01C-1) | <span class="badge b-finished">finished</span> | C01C | 12 drugs | 0.95 h | 11 popPK · 15 PD · 4 PGx |
| [dg-C01C-2](/ledger/dg-C01C-2) | <span class="badge b-finished">finished</span> | C01C | 12 drugs | 0.28 h | 2 popPK · 11 PD · 0 PGx |
| [dg-C01C-3](/ledger/dg-C01C-3) | <span class="badge b-finished">finished</span> | C01C | 12 drugs | 0.38 h | 15 popPK · 16 PD · 0 PGx |
| [dg-C01D-1](/ledger/dg-C01D-1) | <span class="badge b-finished">finished</span> | C01D | 15 drugs | 0.30 h | 2 popPK · 3 PD · 0 PGx |
| [dg-C01D-2](/ledger/dg-C01D-2) | <span class="badge b-finished">finished</span> | C01D | 15 drugs | 0.88 h | 9 popPK · 4 PD · 0 PGx |
| [dg-C01D-3](/ledger/dg-C01D-3) | <span class="badge b-finished">finished</span> | C01D | 13 drugs | 0.27 h | 2 popPK · 0 PD · 0 PGx |
| [dg-C01E-1](/ledger/dg-C01E-1) | <span class="badge b-finished">finished</span> | C01E | 10 drugs | 0.64 h | 28 popPK · 9 PD · 13 PGx |
| [dg-C01E-2](/ledger/dg-C01E-2) | <span class="badge b-finished">finished</span> | C01E | 10 drugs | 0.20 h | 5 popPK · 3 PD · 0 PGx |
| [dg-C02A-1](/ledger/dg-C02A-1) | <span class="badge b-finished">finished</span> | C02A | 9 drugs | 0.43 h | 7 popPK · 5 PD · 0 PGx |
| [dg-C02A-2](/ledger/dg-C02A-2) | <span class="badge b-finished">finished</span> | C02A | 9 drugs | 0.47 h | 1 popPK · 3 PD · 0 PGx |
| [dg-C02B+1](/ledger/dg-C02B_1) | <span class="badge b-finished">finished</span> | C02B, C02C | 14 drugs | 1.29 h | 12 popPK · 10 PD · 1 PGx |
| [dg-C02D](/ledger/dg-C02D) | <span class="badge b-finished">finished</span> | C02D | 8 drugs | 0.82 h | 0 popPK · 6 PD · 0 PGx |
| [dg-C02K](/ledger/dg-C02K) | <span class="badge b-finished">finished</span> | C02K | 15 drugs | 2.06 h | 18 popPK · 7 PD · 1 PGx |
| [dg-C02L-1](/ledger/dg-C02L-1) | <span class="badge b-finished">finished</span> | C02L | 14 drugs | 0.08 h | 0 popPK · 0 PD · 0 PGx |
| [dg-C02L-2](/ledger/dg-C02L-2) | <span class="badge b-finished">finished</span> | C02L | 13 drugs | 0.06 h | 0 popPK · 0 PD · 0 PGx |
| [dg-C03A-1](/ledger/dg-C03A-1) | <span class="badge b-finished">finished</span> | C03A | 12 drugs | 1.61 h | 23 popPK · 7 PD · 2 PGx |
| [dg-C03A-2](/ledger/dg-C03A-2) | <span class="badge b-finished">finished</span> | C03A | 11 drugs | 0.62 h | 2 popPK · 0 PD · 1 PGx |
| [dg-C03B-1](/ledger/dg-C03B-1) | <span class="badge b-finished">finished</span> | C03B | 10 drugs | 0.22 h | 2 popPK · 0 PD · 0 PGx |
| [dg-C03B-2](/ledger/dg-C03B-2) | <span class="badge b-finished">finished</span> | C03B | 10 drugs | 0.20 h | 0 popPK · 0 PD · 0 PGx |
| [dg-C03C](/ledger/dg-C03C) | <span class="badge b-finished">finished</span> | C03C | 10 drugs | 2.07 h | 18 popPK · 7 PD · 0 PGx |
| [dg-C03D](/ledger/dg-C03D) | <span class="badge b-finished">finished</span> | C03D | 8 drugs | 1.58 h | 33 popPK · 7 PD · 0 PGx |
| [dg-C03E+1](/ledger/dg-C03E_1) | <span class="badge b-finished">finished</span> | C03E, C03X | 16 drugs | 0.65 h | 5 popPK · 0 PD · 1 PGx |
| [dg-C04A-1](/ledger/dg-C04A-1) | <span class="badge b-finished">finished</span> | C04A | 13 drugs | 0.28 h | 3 popPK · 1 PD · 0 PGx |
| [dg-C04A-2](/ledger/dg-C04A-2) | <span class="badge b-finished">finished</span> | C04A | 13 drugs | 0.70 h | 3 popPK · 8 PD · 0 PGx |
| [dg-C04A-3](/ledger/dg-C04A-3) | <span class="badge b-finished">finished</span> | C04A | 11 drugs | 0.41 h | 1 popPK · 3 PD · 0 PGx |
| [dg-C05A](/ledger/dg-C05A) | <span class="badge b-finished">finished</span> | C05A | 16 drugs | 1.32 h | 9 popPK · 14 PD · 0 PGx |
| [dg-C05B](/ledger/dg-C05B) | <span class="badge b-finished">finished</span> | C05B | 13 drugs | 1.13 h | 1 popPK · 6 PD · 0 PGx |
| [dg-C05C+1](/ledger/dg-C05C_1) | <span class="badge b-finished">finished</span> | C05C, C05X | 11 drugs | 0.39 h | 2 popPK · 0 PD · 4 PGx |
| [dg-C07A-1](/ledger/dg-C07A-1) | <span class="badge b-finished">finished</span> | C07A | 15 drugs | 0.88 h | 40 popPK · 19 PD · 2 PGx |
| [dg-C07A-2](/ledger/dg-C07A-2) | <span class="badge b-finished">finished</span> | C07A | 15 drugs | 0.39 h | 21 popPK · 20 PD · 2 PGx |
| [dg-C07B](/ledger/dg-C07B) | <span class="badge b-finished">finished</span> | C07B | 15 drugs | 0.11 h | 1 popPK · 1 PD · 0 PGx |
| [dg-C07C](/ledger/dg-C07C) | <span class="badge b-finished">finished</span> | C07C | 8 drugs | 0.02 h | 0 popPK · 0 PD · 0 PGx |
| [dg-C07D+1](/ledger/dg-C07D_1) | <span class="badge b-finished">finished</span> | C07D, C07F | 16 drugs | 2.05 h | 32 popPK · 19 PD · 2 PGx |
| [dg-C08C-1](/ledger/dg-C08C-1) | <span class="badge b-finished">finished</span> | C08C | 9 drugs | 1.00 h | 9 popPK · 14 PD · 8 PGx |
| [dg-C08C-2](/ledger/dg-C08C-2) | <span class="badge b-finished">finished</span> | C08C | 9 drugs | 0.38 h | 7 popPK · 5 PD · 0 PGx |
| [dg-C08D+2](/ledger/dg-C08D_2) | <span class="badge b-finished">finished</span> | C08D, C08E, C08G | 10 drugs | 0.91 h | 0 popPK · 5 PD · 0 PGx |
| [dg-C09A](/ledger/dg-C09A) | <span class="badge b-finished">finished</span> | C09A | 16 drugs | 2.69 h | 23 popPK · 22 PD · 5 PGx |
| [dg-C09B-1](/ledger/dg-C09B-1) | <span class="badge b-finished">finished</span> | C09B | 15 drugs | 0.90 h | 0 popPK · 0 PD · 0 PGx |
| [dg-C09B-2](/ledger/dg-C09B-2) | <span class="badge b-finished">finished</span> | C09B | 14 drugs | 0.54 h | 0 popPK · 0 PD · 0 PGx |
| [dg-C09C](/ledger/dg-C09C) | <span class="badge b-finished">finished</span> | C09C | 11 drugs | 2.23 h | 24 popPK · 24 PD · 13 PGx |
| [dg-C09D-1](/ledger/dg-C09D-1) | <span class="badge b-finished">finished</span> | C09D | 14 drugs | 0.73 h | 0 popPK · 0 PD · 0 PGx |
| [dg-C09D-2](/ledger/dg-C09D-2) | <span class="badge b-finished">finished</span> | C09D | 14 drugs | 1.02 h | 0 popPK · 0 PD · 0 PGx |
| [dg-C09X](/ledger/dg-C09X) | <span class="badge b-finished">finished</span> | C09X | 5 drugs | 0.39 h | 1 popPK · 0 PD · 0 PGx |
| [dg-C10A-1](/ledger/dg-C10A-1) | <span class="badge b-finished">finished</span> | C10A | 15 drugs | 2.27 h | 15 popPK · 9 PD · 5 PGx |
| [dg-C10A-2](/ledger/dg-C10A-2) | <span class="badge b-finished">finished</span> | C10A | 15 drugs | 1.57 h | 6 popPK · 7 PD · 1 PGx |
| [dg-C10A-3](/ledger/dg-C10A-3) | <span class="badge b-finished">finished</span> | C10A | 15 drugs | 0.16 h | 0 popPK · 0 PD · 0 PGx |
| [dg-C10B-1](/ledger/dg-C10B-1) | <span class="badge b-finished">finished</span> | C10B | 14 drugs | 0.44 h | 0 popPK · 0 PD · 0 PGx |
| [dg-C10B-2](/ledger/dg-C10B-2) | <span class="badge b-finished">finished</span> | C10B | 14 drugs | 0.56 h | 0 popPK · 0 PD · 0 PGx |
| [dg-C10B-3](/ledger/dg-C10B-3) | <span class="badge b-finished">finished</span> | C10B | 12 drugs | 0.36 h | 0 popPK · 0 PD · 0 PGx |
| [dg-D01A-1](/ledger/dg-D01A-1) | <span class="badge b-finished">finished</span> | D01A | 13 drugs | 0.19 h | 0 popPK · 1 PD · 0 PGx |
| [dg-D01A-2](/ledger/dg-D01A-2) | <span class="badge b-finished">finished</span> | D01A | 13 drugs | 1.13 h | 10 popPK · 4 PD · 0 PGx |
| [dg-D01A-3](/ledger/dg-D01A-3) | <span class="badge b-finished">finished</span> | D01A | 13 drugs | 0.58 h | 2 popPK · 2 PD · 0 PGx |
| [dg-D01A-4](/ledger/dg-D01A-4) | <span class="badge b-finished">finished</span> | D01A | 12 drugs | 0.53 h | 0 popPK · 2 PD · 0 PGx |
| [dg-D01B+2](/ledger/dg-D01B_2) | <span class="badge b-finished">finished</span> | D01B, D02A, D02B | 5 drugs | 0.04 h | 0 popPK · 0 PD · 0 PGx |
| [dg-D03A+1](/ledger/dg-D03A_1) | <span class="badge b-finished">finished</span> | D03A, D03B | 15 drugs | 0.58 h | 2 popPK · 0 PD · 0 PGx |
| [dg-D04A-1](/ledger/dg-D04A-1) | <span class="badge b-finished">finished</span> | D04A | 9 drugs | 0.55 h | 3 popPK · 18 PD · 0 PGx |
| [dg-D04A-2](/ledger/dg-D04A-2) | <span class="badge b-finished">finished</span> | D04A | 9 drugs | 0.54 h | 2 popPK · 9 PD · 0 PGx |
| [dg-D05A](/ledger/dg-D05A) | <span class="badge b-finished">finished</span> | D05A | 13 drugs | 0.81 h | 8 popPK · 11 PD · 0 PGx |
| [dg-D05B+1](/ledger/dg-D05B_1) | <span class="badge b-finished">finished</span> | D05B, D06A | 15 drugs | 1.88 h | 83 popPK · 18 PD · 5 PGx |
| [dg-D06B-1](/ledger/dg-D06B-1) | <span class="badge b-finished">finished</span> | D06B | 11 drugs | 0.68 h | 2 popPK · 1 PD · 0 PGx |
| [dg-D06B-2](/ledger/dg-D06B-2) | <span class="badge b-finished">finished</span> | D06B | 11 drugs | 0.24 h | 3 popPK · 3 PD · 0 PGx |
| [dg-D07A-1](/ledger/dg-D07A-1) | <span class="badge b-finished">finished</span> | D07A | 14 drugs | 0.17 h | 0 popPK · 1 PD · 0 PGx |
| [dg-D07A-2](/ledger/dg-D07A-2) | <span class="badge b-finished">finished</span> | D07A | 13 drugs | 1.87 h | 15 popPK · 26 PD · 0 PGx |
| [dg-D07B](/ledger/dg-D07B) | <span class="badge b-finished">finished</span> | D07B | 10 drugs | 0.02 h | 0 popPK · 0 PD · 0 PGx |
| [dg-D07C](/ledger/dg-D07C) | <span class="badge b-finished">finished</span> | D07C | 15 drugs | 0.35 h | 0 popPK · 0 PD · 0 PGx |
| [dg-D08A-1](/ledger/dg-D08A-1) | <span class="badge b-finished">finished</span> | D08A | 13 drugs | 0.44 h | 1 popPK · 28 PD · 0 PGx |
| [dg-D08A-2](/ledger/dg-D08A-2) | <span class="badge b-finished">finished</span> | D08A | 13 drugs | 0.46 h | 1 popPK · 6 PD · 0 PGx |
| [dg-D08A-3](/ledger/dg-D08A-3) | <span class="badge b-finished">finished</span> | D08A | 13 drugs | 0.18 h | 3 popPK · 2 PD · 0 PGx |
| [dg-D08A-4](/ledger/dg-D08A-4) | <span class="badge b-finished">finished</span> | D08A | 10 drugs | 0.67 h | 2 popPK · 5 PD · 0 PGx |
| [dg-D09A](/ledger/dg-D09A) | <span class="badge b-finished">finished</span> | D09A | 7 drugs | 0.07 h | 0 popPK · 0 PD · 0 PGx |
| [dg-D10A-1](/ledger/dg-D10A-1) | <span class="badge b-finished">finished</span> | D10A | 14 drugs | 1.08 h | 13 popPK · 10 PD · 0 PGx |
| [dg-D10A-2](/ledger/dg-D10A-2) | <span class="badge b-finished">finished</span> | D10A, D10B | 14 drugs | 0.18 h | 2 popPK · 1 PD · 0 PGx |
| [dg-D11A-1](/ledger/dg-D11A-1) | <span class="badge b-finished">finished</span> | D11A | 13 drugs | 0.69 h | 18 popPK · 17 PD · 4 PGx |
| [dg-D11A-2](/ledger/dg-D11A-2) | <span class="badge b-finished">finished</span> | D11A | 13 drugs | 0.92 h | 7 popPK · 14 PD · 0 PGx |
| [dg-D11A-3](/ledger/dg-D11A-3) | <span class="badge b-finished">finished</span> | D11A | 11 drugs | 0.19 h | 10 popPK · 7 PD · 0 PGx |
| [dg-G01A-1](/ledger/dg-G01A-1) | <span class="badge b-finished">finished</span> | G01A | 12 drugs | 0.26 h | 0 popPK · 4 PD · 0 PGx |
| [dg-G01A-2](/ledger/dg-G01A-2) | <span class="badge b-finished">finished</span> | G01A | 11 drugs | 0.16 h | 1 popPK · 1 PD · 0 PGx |
| [dg-G02A+1](/ledger/dg-G02A_1) | <span class="badge b-finished">finished</span> | G02A, G02B | 15 drugs | 0.27 h | 3 popPK · 6 PD · 0 PGx |
| [dg-G02C-1](/ledger/dg-G02C-1) | <span class="badge b-finished">finished</span> | G02C | 9 drugs | 0.30 h | 1 popPK · 5 PD · 0 PGx |
| [dg-G02C-2](/ledger/dg-G02C-2) | <span class="badge b-finished">finished</span> | G02C | 8 drugs | 0.37 h | 4 popPK · 14 PD · 0 PGx |
| [dg-G03A-1](/ledger/dg-G03A-1) | <span class="badge b-finished">finished</span> | G03A | 14 drugs | 0.78 h | 9 popPK · 10 PD · 0 PGx |
| [dg-G03A-2](/ledger/dg-G03A-2) | <span class="badge b-finished">finished</span> | G03A | 14 drugs | 0.58 h | 1 popPK · 2 PD · 1 PGx |
| [dg-G03A-3](/ledger/dg-G03A-3) | <span class="badge b-finished">finished</span> | G03A | 13 drugs | 0.64 h | 6 popPK · 3 PD · 0 PGx |
| [dg-G03B](/ledger/dg-G03B) | <span class="badge b-finished">finished</span> | G03B | 4 drugs | 0.08 h | 12 popPK · 3 PD · 0 PGx |
| [dg-G03C](/ledger/dg-G03C) | <span class="badge b-finished">finished</span> | G03C | 13 drugs | 1.36 h | 0 popPK · 6 PD · 1 PGx |
| [dg-G03D+1](/ledger/dg-G03D_1) | <span class="badge b-finished">finished</span> | G03D, G03E | 13 drugs | 0.20 h | 7 popPK · 1 PD · 0 PGx |
| [dg-G03F-1](/ledger/dg-G03F-1) | <span class="badge b-finished">finished</span> | G03F | 11 drugs | 0.14 h | 0 popPK · 0 PD · 0 PGx |
| [dg-G03F-2](/ledger/dg-G03F-2) | <span class="badge b-finished">finished</span> | G03F | 11 drugs | 0.21 h | 0 popPK · 0 PD · 0 PGx |
| [dg-G03G](/ledger/dg-G03G) | <span class="badge b-finished">finished</span> | G03G | 14 drugs | 0.24 h | 1 popPK · 2 PD · 0 PGx |
| [dg-G03H+1](/ledger/dg-G03H_1) | <span class="badge b-finished">finished</span> | G03H, G03X | 10 drugs | 0.87 h | 1 popPK · 6 PD · 0 PGx |
| [dg-G04B-1](/ledger/dg-G04B-1) | <span class="badge b-finished">finished</span> | G04B | 15 drugs | 0.67 h | 11 popPK · 15 PD · 3 PGx |
| [dg-G04B-2](/ledger/dg-G04B-2) | <span class="badge b-finished">finished</span> | G04B | 14 drugs | 0.28 h | 9 popPK · 6 PD · 0 PGx |
| [dg-G04C](/ledger/dg-G04C) | <span class="badge b-finished">finished</span> | G04C | 14 drugs | 0.63 h | 2 popPK · 8 PD · 0 PGx |
| [dg-H01A](/ledger/dg-H01A) | <span class="badge b-finished">finished</span> | H01A | 13 drugs | 0.56 h | 2 popPK · 3 PD · 0 PGx |
| [dg-H01B](/ledger/dg-H01B) | <span class="badge b-finished">finished</span> | H01B | 7 drugs | 0.18 h | 1 popPK · 5 PD · 0 PGx |
| [dg-H01C](/ledger/dg-H01C) | <span class="badge b-finished">finished</span> | H01C | 14 drugs | 0.64 h | 5 popPK · 13 PD · 0 PGx |
| [dg-H02A](/ledger/dg-H02A) | <span class="badge b-finished">finished</span> | H02A | 12 drugs | 0.16 h | 3 popPK · 7 PD · 0 PGx |
| [dg-H02B+2](/ledger/dg-H02B_2) | <span class="badge b-finished">finished</span> | H02B, H02C, H03A | 11 drugs | 0.58 h | 9 popPK · 5 PD · 0 PGx |
| [dg-H03B](/ledger/dg-H03B) | <span class="badge b-finished">finished</span> | H03B | 9 drugs | 0.33 h | 3 popPK · 5 PD · 0 PGx |
| [dg-H04A+2](/ledger/dg-H04A_2) | <span class="badge b-finished">finished</span> | H04A, H05A, H05B | 16 drugs | 0.62 h | 4 popPK · 12 PD · 0 PGx |
| [dg-J01A+1](/ledger/dg-J01A_1) | <span class="badge b-finished">finished</span> | J01A, J01B | 13 drugs | 0.34 h | 14 popPK · 9 PD · 0 PGx |
| [dg-J01C-1](/ledger/dg-J01C-1) | <span class="badge b-finished">finished</span> | J01C | 15 drugs | 1.45 h | 20 popPK · 8 PD · 0 PGx |
| [dg-J01C-2](/ledger/dg-J01C-2) | <span class="badge b-finished">finished</span> | J01C | 15 drugs | 0.37 h | 15 popPK · 10 PD · 0 PGx |
| [dg-J01C-3](/ledger/dg-J01C-3) | <span class="badge b-finished">finished</span> | J01C | 14 drugs | 0.91 h | 19 popPK · 8 PD · 0 PGx |
| [dg-J01D-1](/ledger/dg-J01D-1) | <span class="badge b-finished">finished</span> | J01D | 16 drugs | 0.78 h | 19 popPK · 5 PD · 0 PGx |
| [dg-J01D-2](/ledger/dg-J01D-2) | <span class="badge b-finished">finished</span> | J01D | 16 drugs | 1.15 h | 28 popPK · 11 PD · 0 PGx |
| [dg-J01D-3](/ledger/dg-J01D-3) | <span class="badge b-finished">finished</span> | J01D | 16 drugs | 1.11 h | 21 popPK · 7 PD · 0 PGx |
| [dg-J01D-4](/ledger/dg-J01D-4) | <span class="badge b-finished">finished</span> | J01D | 16 drugs | 0.96 h | 15 popPK · 12 PD · 0 PGx |
| [dg-J01D-5](/ledger/dg-J01D-5) | <span class="badge b-finished">finished</span> | J01D | 16 drugs | 0.80 h | 32 popPK · 12 PD · 0 PGx |
| [dg-J01E-1](/ledger/dg-J01E-1) | <span class="badge b-finished">finished</span> | J01E | 14 drugs | 0.51 h | 12 popPK · 1 PD · 0 PGx |
| [dg-J01E-2](/ledger/dg-J01E-2) | <span class="badge b-finished">finished</span> | J01E | 14 drugs | 0.31 h | 5 popPK · 3 PD · 0 PGx |
| [dg-J01F-1](/ledger/dg-J01F-1) | <span class="badge b-finished">finished</span> | J01F | 9 drugs | 0.48 h | 11 popPK · 11 PD · 8 PGx |
| [dg-J01F-2](/ledger/dg-J01F-2) | <span class="badge b-finished">finished</span> | J01F | 8 drugs | 0.98 h | 7 popPK · 2 PD · 0 PGx |
| [dg-J01G](/ledger/dg-J01G) | <span class="badge b-finished">finished</span> | J01G | 10 drugs | 0.34 h | 16 popPK · 9 PD · 0 PGx |
| [dg-J01M-1](/ledger/dg-J01M-1) | <span class="badge b-finished">finished</span> | J01M | 16 drugs | 0.98 h | 58 popPK · 31 PD · 1 PGx |
| [dg-J01M-2](/ledger/dg-J01M-2) | <span class="badge b-finished">finished</span> | J01M | 15 drugs | 0.95 h | 21 popPK · 11 PD · 1 PGx |
| [dg-J01R-1](/ledger/dg-J01R-1) | <span class="badge b-finished">finished</span> | J01R | 11 drugs | 0.19 h | 0 popPK · 2 PD · 0 PGx |
| [dg-J01R-2](/ledger/dg-J01R-2) | <span class="badge b-finished">finished</span> | J01R | 10 drugs | 0.18 h | 0 popPK · 1 PD · 0 PGx |
| [dg-J01X-1](/ledger/dg-J01X-1) | <span class="badge b-finished">finished</span> | J01X | 9 drugs | 1.54 h | 15 popPK · 6 PD · 0 PGx |
| [dg-J01X-2](/ledger/dg-J01X-2) | <span class="badge b-finished">finished</span> | J01X | 9 drugs |  | 0 popPK · 0 PD · 0 PGx |
| [dg-J02A](/ledger/dg-J02A) | <span class="badge b-finished">finished</span> | J02A | 11 drugs | 1.14 h | 57 popPK · 10 PD · 0 PGx |
| [dg-J04A-1](/ledger/dg-J04A-1) | <span class="badge b-finished">finished</span> | J04A | 12 drugs | 1.35 h | 23 popPK · 8 PD · 0 PGx |
| [dg-J04A-2](/ledger/dg-J04A-2) | <span class="badge b-finished">finished</span> | J04A | 12 drugs | 1.18 h | 8 popPK · 9 PD · 0 PGx |
| [dg-J04A-3](/ledger/dg-J04A-3) | <span class="badge b-finished">finished</span> | J04A, J04B | 14 drugs | 0.81 h | 8 popPK · 10 PD · 0 PGx |
| [dg-J05A-1](/ledger/dg-J05A-1) | <span class="badge b-finished">finished</span> | J05A | 16 drugs | 1.27 h | 33 popPK · 14 PD · 72 PGx |
| [dg-J05A-2](/ledger/dg-J05A-2) | <span class="badge b-finished">finished</span> | J05A | 16 drugs | 1.15 h | 19 popPK · 12 PD · 0 PGx |
| [dg-J05A-3](/ledger/dg-J05A-3) | <span class="badge b-finished">finished</span> | J05A | 16 drugs | 1.11 h | 7 popPK · 12 PD · 0 PGx |
| [dg-J05A-4](/ledger/dg-J05A-4) | <span class="badge b-finished">finished</span> | J05A | 16 drugs | 3.00 h | 32 popPK · 20 PD · 0 PGx |
| [dg-J05A-5](/ledger/dg-J05A-5) | <span class="badge b-finished">finished</span> | J05A | 16 drugs | 0.98 h | 7 popPK · 7 PD · 0 PGx |
| [dg-J05A-6](/ledger/dg-J05A-6) | <span class="badge b-finished">finished</span> | J05A | 16 drugs | 1.73 h | 45 popPK · 28 PD · 3 PGx |
| [dg-J05A-7](/ledger/dg-J05A-7) | <span class="badge b-finished">finished</span> | J05A | 16 drugs | 1.75 h | 28 popPK · 29 PD · 6 PGx |
| [dg-J05A-8](/ledger/dg-J05A-8) | <span class="badge b-finished">finished</span> | J05A | 16 drugs | 0.53 h | 10 popPK · 12 PD · 1 PGx |
| [dg-J05A-9](/ledger/dg-J05A-9) | <span class="badge b-finished">finished</span> | J05A, J06A | 14 drugs | 1.13 h | 9 popPK · 6 PD · 0 PGx |
| [dg-J06B-1](/ledger/dg-J06B-1) | <span class="badge b-finished">finished</span> | J06B | 13 drugs | 0.33 h | 4 popPK · 3 PD · 0 PGx |
| [dg-J06B-2](/ledger/dg-J06B-2) | <span class="badge b-finished">finished</span> | J06B | 13 drugs | 0.26 h | 5 popPK · 1 PD · 0 PGx |
| [dg-J06B-3](/ledger/dg-J06B-3) | <span class="badge b-finished">finished</span> | J06B | 11 drugs | 0.35 h | 2 popPK · 4 PD · 0 PGx |
| [dg-J07A-1](/ledger/dg-J07A-1) | <span class="badge b-finished">finished</span> | J07A | 14 drugs | 0.42 h | 0 popPK · 0 PD · 0 PGx |
| [dg-J07A-2](/ledger/dg-J07A-2) | <span class="badge b-finished">finished</span> | J07A | 14 drugs | 0.11 h | 0 popPK · 0 PD · 0 PGx |
| [dg-J07A-3](/ledger/dg-J07A-3) | <span class="badge b-finished">finished</span> | J07A | 12 drugs | 0.69 h | 0 popPK · 2 PD · 0 PGx |
| [dg-J07B-1](/ledger/dg-J07B-1) | <span class="badge b-finished">finished</span> | J07B | 16 drugs | 0.38 h | 0 popPK · 2 PD · 0 PGx |
| [dg-J07B-2](/ledger/dg-J07B-2) | <span class="badge b-finished">finished</span> | J07B | 16 drugs | 0.46 h | 0 popPK · 0 PD · 0 PGx |
| [dg-J07B-3](/ledger/dg-J07B-3) | <span class="badge b-finished">finished</span> | J07B | 15 drugs | 0.43 h | 0 popPK · 0 PD · 0 PGx |
| [dg-J07C+1](/ledger/dg-J07C_1) | <span class="badge b-finished">finished</span> | J07C, J07X | 14 drugs | 0.23 h | 0 popPK · 0 PD · 0 PGx |
| [dg-L01A-1](/ledger/dg-L01A-1) | <span class="badge b-finished">finished</span> | L01A | 14 drugs | 1.59 h | 26 popPK · 26 PD · 3 PGx |
| [dg-L01A-2](/ledger/dg-L01A-2) | <span class="badge b-finished">finished</span> | L01A | 14 drugs | 0.38 h | 9 popPK · 1 PD · 0 PGx |
| [dg-L01B-1](/ledger/dg-L01B-1) | <span class="badge b-interrupted">interrupted</span> | L01B | 12 drugs | 0.99 h | 36 popPK · 16 PD · 75 PGx |
| [dg-L01B-2](/ledger/dg-L01B-2) | <span class="badge b-finished">finished</span> | L01B | 11 drugs | 0.93 h | 47 popPK · 16 PD · 25 PGx |
| [dg-L01C-1](/ledger/dg-L01C-1) | <span class="badge b-finished">finished</span> | L01C | 10 drugs | 0.95 h | 14 popPK · 6 PD · 1 PGx |
| [dg-L01C-2](/ledger/dg-L01C-2) | <span class="badge b-finished">finished</span> | L01C | 9 drugs | 2.00 h | 23 popPK · 23 PD · 1 PGx |
| [dg-L01D-1](/ledger/dg-L01D-1) | <span class="badge b-finished">finished</span> | L01D | 9 drugs | 2.52 h | 72 popPK · 44 PD · 1 PGx |
| [dg-L01D-2](/ledger/dg-L01D-2) | <span class="badge b-finished">finished</span> | L01D | 8 drugs | 1.39 h | 17 popPK · 16 PD · 0 PGx |
| [dg-L01E-1](/ledger/dg-L01E-1) | <span class="badge b-finished">finished</span> | L01E | 14 drugs | 2.21 h | 30 popPK · 37 PD · 0 PGx |
| [dg-L01E-2](/ledger/dg-L01E-2) | <span class="badge b-finished">finished</span> | L01E | 14 drugs | 1.20 h | 17 popPK · 25 PD · 0 PGx |
| [dg-L01E-3](/ledger/dg-L01E-3) | <span class="badge b-finished">finished</span> | L01E | 14 drugs | 1.69 h | 21 popPK · 33 PD · 0 PGx |
| [dg-L01E-4](/ledger/dg-L01E-4) | <span class="badge b-finished">finished</span> | L01E | 14 drugs | 0.82 h | 9 popPK · 18 PD · 0 PGx |
| [dg-L01E-5](/ledger/dg-L01E-5) | <span class="badge b-finished">finished</span> | L01E | 14 drugs | 0.96 h | 24 popPK · 38 PD · 3 PGx |
| [dg-L01E-6](/ledger/dg-L01E-6) | <span class="badge b-finished">finished</span> | L01E | 14 drugs | 1.55 h | 25 popPK · 19 PD · 1 PGx |
| [dg-L01E-7](/ledger/dg-L01E-7) | <span class="badge b-finished">finished</span> | L01E | 14 drugs | 0.77 h | 11 popPK · 18 PD · 0 PGx |
| [dg-L01F-1](/ledger/dg-L01F-1) | <span class="badge b-finished">finished</span> | L01F | 16 drugs | 1.27 h | 49 popPK · 31 PD · 0 PGx |
| [dg-L01F-2](/ledger/dg-L01F-2) | <span class="badge b-finished">finished</span> | L01F | 16 drugs | 0.48 h | 18 popPK · 22 PD · 0 PGx |
| [dg-L01F-3](/ledger/dg-L01F-3) | <span class="badge b-finished">finished</span> | L01F | 16 drugs | 0.44 h | 7 popPK · 6 PD · 0 PGx |
| [dg-L01F-4](/ledger/dg-L01F-4) | <span class="badge b-finished">finished</span> | L01F | 16 drugs | 2.50 h | 65 popPK · 10 PD · 0 PGx |
| [dg-L01F-5](/ledger/dg-L01F-5) | <span class="badge b-finished">finished</span> | L01F | 15 drugs | 1.38 h | 28 popPK · 9 PD · 0 PGx |
| [dg-L01X-1](/ledger/dg-L01X-1) | <span class="badge b-finished">finished</span> | L01X | 14 drugs | 0.02 h | 12 popPK · 7 PD · 1 PGx |
| [dg-L01X-2](/ledger/dg-L01X-2) | <span class="badge b-finished">finished</span> | L01X | 14 drugs | 1.96 h | 22 popPK · 40 PD · 0 PGx |
| [dg-L01X-3](/ledger/dg-L01X-3) | <span class="badge b-finished">finished</span> | L01X | 14 drugs | 0.15 h | 9 popPK · 8 PD · 0 PGx |
| [dg-L01X-4](/ledger/dg-L01X-4) | <span class="badge b-finished">finished</span> | L01X | 14 drugs | 0.58 h | 12 popPK · 10 PD · 0 PGx |
| [dg-L01X-5](/ledger/dg-L01X-5) | <span class="badge b-finished">finished</span> | L01X | 14 drugs | 0.28 h | 12 popPK · 4 PD · 0 PGx |
| [dg-L01X-6](/ledger/dg-L01X-6) | <span class="badge b-finished">finished</span> | L01X | 14 drugs | 0.24 h | 8 popPK · 3 PD · 0 PGx |
| [dg-L01X-7](/ledger/dg-L01X-7) | <span class="badge b-finished">finished</span> | L01X | 13 drugs | 0.80 h | 10 popPK · 10 PD · 0 PGx |
| [dg-L02A](/ledger/dg-L02A) | <span class="badge b-finished">finished</span> | L02A | 9 drugs | 0.23 h | 5 popPK · 8 PD · 0 PGx |
| [dg-L02B-1](/ledger/dg-L02B-1) | <span class="badge b-finished">finished</span> | L02B | 10 drugs | 0.34 h | 1 popPK · 3 PD · 0 PGx |
| [dg-L02B-2](/ledger/dg-L02B-2) | <span class="badge b-finished">finished</span> | L02B | 10 drugs | 0.39 h | 7 popPK · 13 PD · 2 PGx |
| [dg-L03A-1](/ledger/dg-L03A-1) | <span class="badge b-finished">finished</span> | L03A | 16 drugs | 1.02 h | 5 popPK · 6 PD · 0 PGx |
| [dg-L03A-2](/ledger/dg-L03A-2) | <span class="badge b-finished">finished</span> | L03A | 16 drugs | 0.68 h | 2 popPK · 6 PD · 0 PGx |
| [dg-L03A-3](/ledger/dg-L03A-3) | <span class="badge b-finished">finished</span> | L03A | 16 drugs | 0.52 h | 8 popPK · 12 PD · 0 PGx |
| [dg-L03A-4](/ledger/dg-L03A-4) | <span class="badge b-finished">finished</span> | L03A | 13 drugs | 0.37 h | 1 popPK · 3 PD · 0 PGx |
| [dg-L04A-1](/ledger/dg-L04A-1) | <span class="badge b-finished">finished</span> | L04A | 15 drugs | 0.47 h | 16 popPK · 13 PD · 53 PGx |
| [dg-L04A-2](/ledger/dg-L04A-2) | <span class="badge b-finished">finished</span> | L04A | 15 drugs | 0.57 h | 27 popPK · 15 PD · 0 PGx |
| [dg-L04A-3](/ledger/dg-L04A-3) | <span class="badge b-finished">finished</span> | L04A | 15 drugs | 0.48 h | 18 popPK · 20 PD · 1 PGx |
| [dg-L04A-4](/ledger/dg-L04A-4) | <span class="badge b-finished">finished</span> | L04A | 15 drugs | 0.21 h | 40 popPK · 20 PD · 1 PGx |
| [dg-L04A-5](/ledger/dg-L04A-5) | <span class="badge b-finished">finished</span> | L04A | 15 drugs | 0.32 h | 10 popPK · 14 PD · 0 PGx |
| [dg-L04A-6](/ledger/dg-L04A-6) | <span class="badge b-finished">finished</span> | L04A | 15 drugs | 0.39 h | 19 popPK · 10 PD · 0 PGx |
| [dg-L04A-7](/ledger/dg-L04A-7) | <span class="badge b-finished">finished</span> | L04A | 14 drugs | 0.62 h | 23 popPK · 28 PD · 0 PGx |
| [dg-M01A-1](/ledger/dg-M01A-1) | <span class="badge b-finished">finished</span> | M01A | 15 drugs | 0.28 h | 2 popPK · 2 PD · 1 PGx |
| [dg-M01A-2](/ledger/dg-M01A-2) | <span class="badge b-finished">finished</span> | M01A | 15 drugs | 0.22 h | 5 popPK · 7 PD · 0 PGx |
| [dg-M01A-3](/ledger/dg-M01A-3) | <span class="badge b-finished">finished</span> | M01A | 15 drugs | 1.48 h | 20 popPK · 17 PD · 0 PGx |
| [dg-M01A-4](/ledger/dg-M01A-4) | <span class="badge b-finished">finished</span> | M01A | 15 drugs | 0.88 h | 6 popPK · 13 PD · 0 PGx |
| [dg-M01A-5](/ledger/dg-M01A-5) | <span class="badge b-finished">finished</span> | M01A | 15 drugs | 0.36 h | 10 popPK · 7 PD · 0 PGx |
| [dg-M01B+1](/ledger/dg-M01B_1) | <span class="badge b-finished">finished</span> | M01B, M01C | 12 drugs | 0.46 h | 0 popPK · 2 PD · 0 PGx |
| [dg-M02A](/ledger/dg-M02A) | <span class="badge b-finished">finished</span> | M02A | 11 drugs | 0.17 h | 1 popPK · 0 PD · 0 PGx |
| [dg-M03A-1](/ledger/dg-M03A-1) | <span class="badge b-finished">finished</span> | M03A | 10 drugs | 0.70 h | 15 popPK · 36 PD · 0 PGx |
| [dg-M03A-2](/ledger/dg-M03A-2) | <span class="badge b-finished">finished</span> | M03A | 10 drugs | 1.35 h | 25 popPK · 46 PD · 3 PGx |
| [dg-M03B-1](/ledger/dg-M03B-1) | <span class="badge b-finished">finished</span> | M03B | 16 drugs | 0.70 h | 8 popPK · 7 PD · 0 PGx |
| [dg-M03B-2](/ledger/dg-M03B-2) | <span class="badge b-finished">finished</span> | M03B | 15 drugs | 0.51 h | 2 popPK · 2 PD · 0 PGx |
| [dg-M03C+1](/ledger/dg-M03C_1) | <span class="badge b-finished">finished</span> | M03C, M04A | 16 drugs | 0.68 h | 17 popPK · 21 PD · 23 PGx |
| [dg-M05B-1](/ledger/dg-M05B-1) | <span class="badge b-finished">finished</span> | M05B | 14 drugs | 0.60 h | 7 popPK · 9 PD · 0 PGx |
| [dg-M05B-2](/ledger/dg-M05B-2) | <span class="badge b-finished">finished</span> | M05B | 13 drugs | 0.19 h | 0 popPK · 6 PD · 0 PGx |
| [dg-M09A-1](/ledger/dg-M09A-1) | <span class="badge b-finished">finished</span> | M09A | 10 drugs | 0.06 h | 0 popPK · 1 PD · 0 PGx |
| [dg-M09A-2](/ledger/dg-M09A-2) | <span class="badge b-finished">finished</span> | M09A | 9 drugs | 0.23 h | 2 popPK · 0 PD · 0 PGx |
| [dg-N01A-1](/ledger/dg-N01A-1) | <span class="badge b-finished">finished</span> | N01A | 15 drugs | 2.05 h | 61 popPK · 47 PD · 1 PGx |
| [dg-N01A-2](/ledger/dg-N01A-2) | <span class="badge b-finished">finished</span> | N01A | 15 drugs | 1.48 h | 17 popPK · 27 PD · 0 PGx |
| [dg-N01B-1](/ledger/dg-N01B-1) | <span class="badge b-finished">finished</span> | N01B | 11 drugs | 0.69 h | 3 popPK · 18 PD · 0 PGx |
| [dg-N01B-2](/ledger/dg-N01B-2) | <span class="badge b-finished">finished</span> | N01B | 11 drugs | 0.77 h | 12 popPK · 16 PD · 0 PGx |
| [dg-N02A-1](/ledger/dg-N02A-1) | <span class="badge b-finished">finished</span> | N02A | 15 drugs | 0.61 h | 19 popPK · 10 PD · 10 PGx |
| [dg-N02A-2](/ledger/dg-N02A-2) | <span class="badge b-finished">finished</span> | N02A | 15 drugs | 0.39 h | 6 popPK · 3 PD · 0 PGx |
| [dg-N02A-3](/ledger/dg-N02A-3) | <span class="badge b-finished">finished</span> | N02A | 15 drugs | 0.80 h | 55 popPK · 20 PD · 1 PGx |
| [dg-N02A-4](/ledger/dg-N02A-4) | <span class="badge b-finished">finished</span> | N02A | 15 drugs | 0.46 h | 19 popPK · 9 PD · 2 PGx |
| [dg-N02B-1](/ledger/dg-N02B-1) | <span class="badge b-finished">finished</span> | N02B | 15 drugs | 0.50 h | 5 popPK · 5 PD · 0 PGx |
| [dg-N02B-2](/ledger/dg-N02B-2) | <span class="badge b-finished">finished</span> | N02B | 15 drugs | 0.45 h | 10 popPK · 12 PD · 2 PGx |
| [dg-N02B-3](/ledger/dg-N02B-3) | <span class="badge b-finished">finished</span> | N02B | 15 drugs | 0.94 h | 11 popPK · 9 PD · 1 PGx |
| [dg-N02B-4](/ledger/dg-N02B-4) | <span class="badge b-finished">finished</span> | N02B | 12 drugs | 0.15 h | 2 popPK · 2 PD · 0 PGx |
| [dg-N02C-1](/ledger/dg-N02C-1) | <span class="badge b-finished">finished</span> | N02C | 14 drugs | 0.36 h | 12 popPK · 9 PD · 0 PGx |
| [dg-N02C-2](/ledger/dg-N02C-2) | <span class="badge b-finished">finished</span> | N02C | 14 drugs | 0.34 h | 13 popPK · 15 PD · 1 PGx |
| [dg-N03A-1](/ledger/dg-N03A-1) | <span class="badge b-finished">finished</span> | N03A | 16 drugs | 1.11 h | 38 popPK · 15 PD · 24 PGx |
| [dg-N03A-2](/ledger/dg-N03A-2) | <span class="badge b-finished">finished</span> | N03A | 16 drugs | 0.60 h | 23 popPK · 12 PD · 4 PGx |
| [dg-N03A-3](/ledger/dg-N03A-3) | <span class="badge b-finished">finished</span> | N03A | 15 drugs | 0.96 h | 12 popPK · 13 PD · 0 PGx |
| [dg-N04;+1](/ledger/dg-N04__1) | <span class="badge b-finished">finished</span> | N04;, N04A | 15 drugs | 0.33 h | 1 popPK · 2 PD · 0 PGx |
| [dg-N04B-1](/ledger/dg-N04B-1) | <span class="badge b-finished">finished</span> | N04B | 12 drugs | 1.52 h | 10 popPK · 20 PD · 1 PGx |
| [dg-N04B-2](/ledger/dg-N04B-2) | <span class="badge b-finished">finished</span> | N04B, N04C | 12 drugs | 0.45 h | 0 popPK · 8 PD · 0 PGx |
| [dg-N05A-1](/ledger/dg-N05A-1) | <span class="badge b-finished">finished</span> | N05A | 15 drugs | 0.90 h | 28 popPK · 27 PD · 10 PGx |
| [dg-N05A-2](/ledger/dg-N05A-2) | <span class="badge b-finished">finished</span> | N05A | 15 drugs | 0.67 h | 26 popPK · 34 PD · 1 PGx |
| [dg-N05A-3](/ledger/dg-N05A-3) | <span class="badge b-finished">finished</span> | N05A | 15 drugs | 0.53 h | 10 popPK · 25 PD · 0 PGx |
| [dg-N05A-4](/ledger/dg-N05A-4) | <span class="badge b-finished">finished</span> | N05A | 15 drugs | 0.91 h | 13 popPK · 32 PD · 0 PGx |
| [dg-N05A-5](/ledger/dg-N05A-5) | <span class="badge b-finished">finished</span> | N05A | 11 drugs | 1.30 h | 7 popPK · 37 PD · 1 PGx |
| [dg-N05B-1](/ledger/dg-N05B-1) | <span class="badge b-finished">finished</span> | N05B | 13 drugs | 0.54 h | 24 popPK · 44 PD · 0 PGx |
| [dg-N05B-2](/ledger/dg-N05B-2) | <span class="badge b-finished">finished</span> | N05B | 13 drugs | 0.74 h | 18 popPK · 13 PD · 0 PGx |
| [dg-N05B-3](/ledger/dg-N05B-3) | <span class="badge b-finished">finished</span> | N05B | 13 drugs | 0.76 h | 8 popPK · 6 PD · 0 PGx |
| [dg-N05C-1](/ledger/dg-N05C-1) | <span class="badge b-finished">finished</span> | N05C | 15 drugs | 0.30 h | 0 popPK · 5 PD · 0 PGx |
| [dg-N05C-2](/ledger/dg-N05C-2) | <span class="badge b-finished">finished</span> | N05C | 15 drugs | 0.40 h | 8 popPK · 8 PD · 0 PGx |
| [dg-N05C-3](/ledger/dg-N05C-3) | <span class="badge b-finished">finished</span> | N05C | 15 drugs | 1.67 h | 58 popPK · 33 PD · 3 PGx |
| [dg-N05C-4](/ledger/dg-N05C-4) | <span class="badge b-finished">finished</span> | N05C | 15 drugs | 0.70 h | 14 popPK · 13 PD · 0 PGx |
| [dg-N05C-5](/ledger/dg-N05C-5) | <span class="badge b-finished">finished</span> | N05C | 11 drugs | 0.56 h | 12 popPK · 20 PD · 0 PGx |
| [dg-N06A-1](/ledger/dg-N06A-1) | <span class="badge b-finished">finished</span> | N06A | 14 drugs | 0.91 h | 16 popPK · 48 PD · 3 PGx |
| [dg-N06A-2](/ledger/dg-N06A-2) | <span class="badge b-finished">finished</span> | N06A | 14 drugs | 0.47 h | 16 popPK · 25 PD · 0 PGx |
| [dg-N06A-3](/ledger/dg-N06A-3) | <span class="badge b-finished">finished</span> | N06A | 14 drugs | 0.35 h | 2 popPK · 9 PD · 0 PGx |
| [dg-N06A-4](/ledger/dg-N06A-4) | <span class="badge b-finished">finished</span> | N06A | 14 drugs | 0.42 h | 12 popPK · 24 PD · 0 PGx |
| [dg-N06A-5](/ledger/dg-N06A-5) | <span class="badge b-finished">finished</span> | N06A | 10 drugs | 0.40 h | 7 popPK · 14 PD · 0 PGx |
| [dg-N06B-1](/ledger/dg-N06B-1) | <span class="badge b-finished">finished</span> | N06B | 13 drugs | 0.44 h | 5 popPK · 3 PD · 10 PGx |
| [dg-N06B-2](/ledger/dg-N06B-2) | <span class="badge b-finished">finished</span> | N06B | 13 drugs | 0.52 h | 3 popPK · 14 PD · 0 PGx |
| [dg-N06B-3](/ledger/dg-N06B-3) | <span class="badge b-finished">finished</span> | N06B, N06C | 15 drugs | 0.14 h | 3 popPK · 5 PD · 0 PGx |
| [dg-N06D](/ledger/dg-N06D) | <span class="badge b-finished">finished</span> | N06D | 15 drugs | 0.59 h | 15 popPK · 28 PD · 0 PGx |
| [dg-N07A](/ledger/dg-N07A) | <span class="badge b-finished">finished</span> | N07A | 10 drugs | 0.93 h | 3 popPK · 23 PD · 0 PGx |
| [dg-N07B](/ledger/dg-N07B) | <span class="badge b-finished">finished</span> | N07B | 14 drugs | 1.25 h | 14 popPK · 47 PD · 0 PGx |
| [dg-N07C](/ledger/dg-N07C) | <span class="badge b-finished">finished</span> | N07C | 5 drugs | 0.30 h | 0 popPK · 18 PD · 0 PGx |
| [dg-N07X-1](/ledger/dg-N07X-1) | <span class="badge b-finished">finished</span> | N07X | 13 drugs | 0.87 h | 10 popPK · 17 PD · 0 PGx |
| [dg-N07X-2](/ledger/dg-N07X-2) | <span class="badge b-finished">finished</span> | N07X, Not  | 13 drugs | 0.80 h | 6 popPK · 31 PD · 0 PGx |
| [dg-P01A-1](/ledger/dg-P01A-1) | <span class="badge b-finished">finished</span> | P01A | 14 drugs | 0.35 h | 2 popPK · 11 PD · 0 PGx |
| [dg-P01A-2](/ledger/dg-P01A-2) | <span class="badge b-finished">finished</span> | P01A | 13 drugs | 0.19 h | 1 popPK · 8 PD · 0 PGx |
| [dg-P01B-1](/ledger/dg-P01B-1) | <span class="badge b-finished">finished</span> | P01B | 12 drugs | 2.49 h | 20 popPK · 18 PD · 0 PGx |
| [dg-P01B-2](/ledger/dg-P01B-2) | <span class="badge b-finished">finished</span> | P01B | 12 drugs | 0.85 h | 20 popPK · 14 PD · 13 PGx |
| [dg-P01B-3](/ledger/dg-P01B-3) | <span class="badge b-finished">finished</span> | P01B | 12 drugs | 2.88 h | 38 popPK · 30 PD · 0 PGx |
| [dg-P01C](/ledger/dg-P01C) | <span class="badge b-finished">finished</span> | P01C | 11 drugs | 0.89 h | 34 popPK · 68 PD · 0 PGx |
| [dg-P02B](/ledger/dg-P02B) | <span class="badge b-finished">finished</span> | P02B | 7 drugs | 0.42 h | 9 popPK · 2 PD · 0 PGx |
| [dg-P02C](/ledger/dg-P02C) | <span class="badge b-finished">finished</span> | P02C | 15 drugs | 1.61 h | 25 popPK · 56 PD · 0 PGx |
| [dg-P02D](/ledger/dg-P02D) | <span class="badge b-finished">finished</span> | P02D | 3 drugs | 0.14 h | 1 popPK · 5 PD · 0 PGx |
| [dg-P03A-1](/ledger/dg-P03A-1) | <span class="badge b-finished">finished</span> | P03A | 11 drugs | 0.46 h | 0 popPK · 5 PD · 0 PGx |
| [dg-P03A-2](/ledger/dg-P03A-2) | <span class="badge b-finished">finished</span> | P03A | 11 drugs | 1.68 h | 1 popPK · 32 PD · 0 PGx |
| [dg-P03B](/ledger/dg-P03B) | <span class="badge b-finished">finished</span> | P03B | 10 drugs | 1.13 h | 3 popPK · 40 PD · 0 PGx |
| [dg-QI20](/ledger/dg-QI20) | <span class="badge b-finished">finished</span> | QI20 | 1 drugs | 0.00 h | 0 popPK · 0 PD · 0 PGx |
| [dg-R01A-1](/ledger/dg-R01A-1) | <span class="badge b-finished">finished</span> | R01A | 15 drugs | 0.28 h | 9 popPK · 9 PD · 0 PGx |
| [dg-R01A-2](/ledger/dg-R01A-2) | <span class="badge b-finished">finished</span> | R01A | 14 drugs | 0.19 h | 1 popPK · 3 PD · 0 PGx |
| [dg-R01B+1](/ledger/dg-R01B_1) | <span class="badge b-finished">finished</span> | R01B, R02A | 13 drugs | 0.49 h | 2 popPK · 12 PD · 0 PGx |
| [dg-R03A-1](/ledger/dg-R03A-1) | <span class="badge b-finished">finished</span> | R03A | 13 drugs | 0.59 h | 2 popPK · 13 PD · 0 PGx |
| [dg-R03A-2](/ledger/dg-R03A-2) | <span class="badge b-finished">finished</span> | R03A | 13 drugs | 0.52 h | 1 popPK · 11 PD · 0 PGx |
| [dg-R03A-3](/ledger/dg-R03A-3) | <span class="badge b-finished">finished</span> | R03A | 13 drugs | 0.98 h | 17 popPK · 39 PD · 0 PGx |
| [dg-R03A-4](/ledger/dg-R03A-4) | <span class="badge b-finished">finished</span> | R03A | 12 drugs | 0.65 h | 19 popPK · 27 PD · 0 PGx |
| [dg-R03B+1](/ledger/dg-R03B_1) | <span class="badge b-finished">finished</span> | R03B, R03C | 13 drugs | 0.58 h | 0 popPK · 0 PD · 0 PGx |
| [dg-R03D-1](/ledger/dg-R03D-1) | <span class="badge b-finished">finished</span> | R03D | 13 drugs | 1.11 h | 12 popPK · 7 PD · 0 PGx |
| [dg-R03D-2](/ledger/dg-R03D-2) | <span class="badge b-finished">finished</span> | R03D | 13 drugs | 0.25 h | 16 popPK · 6 PD · 0 PGx |
| [dg-R03D-3](/ledger/dg-R03D-3) | <span class="badge b-finished">finished</span> | R03D | 11 drugs | 0.24 h | 1 popPK · 2 PD · 0 PGx |
| [dg-R05C-1](/ledger/dg-R05C-1) | <span class="badge b-finished">finished</span> | R05C | 13 drugs | 0.55 h | 3 popPK · 4 PD · 0 PGx |
| [dg-R05C-2](/ledger/dg-R05C-2) | <span class="badge b-finished">finished</span> | R05C | 12 drugs | 0.19 h | 1 popPK · 2 PD · 0 PGx |
| [dg-R05D-1](/ledger/dg-R05D-1) | <span class="badge b-finished">finished</span> | R05D | 12 drugs | 0.11 h | 0 popPK · 0 PD · 0 PGx |
| [dg-R05D-2](/ledger/dg-R05D-2) | <span class="badge b-finished">finished</span> | R05D | 12 drugs | 0.18 h | 2 popPK · 1 PD · 0 PGx |
| [dg-R05D-3](/ledger/dg-R05D-3) | <span class="badge b-finished">finished</span> | R05D, R05F | 15 drugs | 0.11 h | 1 popPK · 1 PD · 0 PGx |
| [dg-R06A-1](/ledger/dg-R06A-1) | <span class="badge b-finished">finished</span> | R06A | 14 drugs | 0.36 h | 4 popPK · 5 PD · 0 PGx |
| [dg-R06A-2](/ledger/dg-R06A-2) | <span class="badge b-finished">finished</span> | R06A | 14 drugs | 0.35 h | 2 popPK · 4 PD · 0 PGx |
| [dg-R06A-3](/ledger/dg-R06A-3) | <span class="badge b-finished">finished</span> | R06A | 14 drugs | 0.66 h | 5 popPK · 10 PD · 0 PGx |
| [dg-R06A-4](/ledger/dg-R06A-4) | <span class="badge b-finished">finished</span> | R06A | 14 drugs | 0.34 h | 3 popPK · 3 PD · 0 PGx |
| [dg-R06A-5](/ledger/dg-R06A-5) | <span class="badge b-finished">finished</span> | R06A | 13 drugs | 0.21 h | 3 popPK · 10 PD · 0 PGx |
| [dg-R07A-1](/ledger/dg-R07A-1) | <span class="badge b-finished">finished</span> | R07A | 12 drugs | 0.53 h | 5 popPK · 1 PD · 0 PGx |
| [dg-R07A-2](/ledger/dg-R07A-2) | <span class="badge b-finished">finished</span> | R07A | 11 drugs | 0.75 h | 3 popPK · 3 PD · 0 PGx |
| [dg-RX-OA-01](/ledger/dg-RX-OA-01) | <span class="badge b-finished">finished</span> |  | 11 drugs | 0.71 h | 27 popPK · 19 PD · 0 PGx |
| [dg-RX-OA-02](/ledger/dg-RX-OA-02) | <span class="badge b-finished">finished</span> |  | 12 drugs | 0.32 h | 5 popPK · 4 PD · 0 PGx |
| [dg-RX-OA-03](/ledger/dg-RX-OA-03) | <span class="badge b-finished">finished</span> |  | 12 drugs | 0.47 h | 11 popPK · 14 PD · 1 PGx |
| [dg-RX-OA-04](/ledger/dg-RX-OA-04) | <span class="badge b-finished">finished</span> |  | 12 drugs | 0.69 h | 7 popPK · 7 PD · 0 PGx |
| [dg-RX-OA-05](/ledger/dg-RX-OA-05) | <span class="badge b-finished">finished</span> |  | 12 drugs | 0.38 h | 8 popPK · 7 PD · 0 PGx |
| [dg-RX-OA-06](/ledger/dg-RX-OA-06) | <span class="badge b-finished">finished</span> |  | 12 drugs | 0.51 h | 47 popPK · 6 PD · 3 PGx |
| [dg-RX-OA-07](/ledger/dg-RX-OA-07) | <span class="badge b-finished">finished</span> |  | 12 drugs | 1.68 h | 7 popPK · 12 PD · 1 PGx |
| [dg-RX-OA-08](/ledger/dg-RX-OA-08) | <span class="badge b-finished">finished</span> |  | 12 drugs | 1.56 h | 26 popPK · 15 PD · 4 PGx |
| [dg-RX-OA-09](/ledger/dg-RX-OA-09) | <span class="badge b-finished">finished</span> |  | 12 drugs | 1.52 h | 37 popPK · 28 PD · 2 PGx |
| [dg-RX-OA-10](/ledger/dg-RX-OA-10) | <span class="badge b-finished">finished</span> |  | 12 drugs | 0.34 h | 8 popPK · 14 PD · 0 PGx |
| [dg-S01A-1](/ledger/dg-S01A-1) | <span class="badge b-finished">finished</span> | S01A | 10 drugs | 0.22 h | 0 popPK · 4 PD · 0 PGx |
| [dg-S01A-2](/ledger/dg-S01A-2) | <span class="badge b-finished">finished</span> | S01A | 10 drugs | 0.58 h | 0 popPK · 1 PD · 0 PGx |
| [dg-S01B](/ledger/dg-S01B) | <span class="badge b-finished">finished</span> | S01B | 10 drugs | 0.06 h | 0 popPK · 0 PD · 0 PGx |
| [dg-S01C](/ledger/dg-S01C) | <span class="badge b-finished">finished</span> | S01C | 15 drugs | 0.03 h | 0 popPK · 0 PD · 0 PGx |
| [dg-S01E-1](/ledger/dg-S01E-1) | <span class="badge b-finished">finished</span> | S01E | 13 drugs | 0.35 h | 0 popPK · 7 PD · 0 PGx |
| [dg-S01E-2](/ledger/dg-S01E-2) | <span class="badge b-finished">finished</span> | S01E | 13 drugs | 0.33 h | 0 popPK · 2 PD · 0 PGx |
| [dg-S01E-3](/ledger/dg-S01E-3) | <span class="badge b-finished">finished</span> | S01E | 11 drugs | 0.46 h | 1 popPK · 8 PD · 0 PGx |
| [dg-S01F+1](/ledger/dg-S01F_1) | <span class="badge b-finished">finished</span> | S01F, S01G | 13 drugs | 0.09 h | 0 popPK · 0 PD · 0 PGx |
| [dg-S01H+3](/ledger/dg-S01H_3) | <span class="badge b-finished">finished</span> | S01H, S01J, S01K, S01L | 15 drugs | 0.45 h | 20 popPK · 6 PD · 0 PGx |
| [dg-S01X](/ledger/dg-S01X) | <span class="badge b-finished">finished</span> | S01X | 15 drugs | 0.30 h | 0 popPK · 0 PD · 0 PGx |
| [dg-S02A+1](/ledger/dg-S02A_1) | <span class="badge b-finished">finished</span> | S02A, S02C | 5 drugs | 0.42 h | 2 popPK · 6 PD · 0 PGx |
| [dg-V01A](/ledger/dg-V01A) | <span class="badge b-finished">finished</span> | V01A | 10 drugs | 0.63 h | 0 popPK · 4 PD · 0 PGx |
| [dg-V03A-1](/ledger/dg-V03A-1) | <span class="badge b-finished">finished</span> | V03A | 15 drugs | 0.47 h | 2 popPK · 8 PD · 0 PGx |
| [dg-V03A-2](/ledger/dg-V03A-2) | <span class="badge b-finished">finished</span> | V03A | 15 drugs | 1.41 h | 8 popPK · 10 PD · 0 PGx |
| [dg-V03A-3](/ledger/dg-V03A-3) | <span class="badge b-finished">finished</span> | V03A | 15 drugs | 0.52 h | 3 popPK · 11 PD · 0 PGx |
| [dg-V03A-4](/ledger/dg-V03A-4) | <span class="badge b-finished">finished</span> | V03A | 12 drugs | 1.07 h | 8 popPK · 13 PD · 0 PGx |
| [dg-V04C-1](/ledger/dg-V04C-1) | <span class="badge b-finished">finished</span> | V04C | 14 drugs | 0.93 h | 2 popPK · 2 PD · 0 PGx |
| [dg-V04C-2](/ledger/dg-V04C-2) | <span class="badge b-finished">finished</span> | V04C | 14 drugs | 2.53 h | 5 popPK · 18 PD · 0 PGx |
| [dg-V04C-3](/ledger/dg-V04C-3) | <span class="badge b-finished">finished</span> | V04C, V06D | 13 drugs | 1.50 h | 1 popPK · 28 PD · 0 PGx |
| [dg-V08A-1](/ledger/dg-V08A-1) | <span class="badge b-finished">finished</span> | V08A | 12 drugs | 0.19 h | 1 popPK · 0 PD · 0 PGx |
| [dg-V08A-2](/ledger/dg-V08A-2) | <span class="badge b-finished">finished</span> | V08A | 12 drugs | 1.48 h | 17 popPK · 0 PD · 0 PGx |
| [dg-V08A-3](/ledger/dg-V08A-3) | <span class="badge b-finished">finished</span> | V08A, V08B | 15 drugs | 0.30 h | 1 popPK · 1 PD · 0 PGx |
| [dg-V08C-1](/ledger/dg-V08C-1) | <span class="badge b-finished">finished</span> | V08C | 9 drugs | 0.73 h | 6 popPK · 5 PD · 0 PGx |
| [dg-V08C-2](/ledger/dg-V08C-2) | <span class="badge b-finished">finished</span> | V08C, V08D | 14 drugs | 0.88 h | 3 popPK · 8 PD · 0 PGx |
| [dg-V09A](/ledger/dg-V09A) | <span class="badge b-finished">finished</span> | V09A | 12 drugs | 0.38 h | 0 popPK · 0 PD · 0 PGx |
| [dg-V09B+1](/ledger/dg-V09B_1) | <span class="badge b-finished">finished</span> | V09B, V09C | 14 drugs | 0.45 h | 1 popPK · 0 PD · 0 PGx |
| [dg-V09D](/ledger/dg-V09D) | <span class="badge b-finished">finished</span> | V09D | 13 drugs | 0.27 h | 0 popPK · 0 PD · 0 PGx |
| [dg-V09E+1](/ledger/dg-V09E_1) | <span class="badge b-finished">finished</span> | V09E, V09F | 10 drugs | 0.56 h | 3 popPK · 2 PD · 0 PGx |
| [dg-V09G](/ledger/dg-V09G) | <span class="badge b-finished">finished</span> | V09G | 15 drugs | 0.45 h | 0 popPK · 0 PD · 0 PGx |
| [dg-V09H](/ledger/dg-V09H) | <span class="badge b-finished">finished</span> | V09H | 8 drugs | 0.12 h | 0 popPK · 0 PD · 0 PGx |
| [dg-V09I-1](/ledger/dg-V09I-1) | <span class="badge b-finished">finished</span> | V09I | 13 drugs | 0.47 h | 0 popPK · 0 PD · 0 PGx |
| [dg-V09I-2](/ledger/dg-V09I-2) | <span class="badge b-finished">finished</span> | V09I | 13 drugs | 1.06 h | 2 popPK · 0 PD · 0 PGx |
| [dg-V09I-3](/ledger/dg-V09I-3) | <span class="badge b-finished">finished</span> | V09I | 11 drugs | 0.13 h | 0 popPK · 0 PD · 0 PGx |
| [dg-V09X+1](/ledger/dg-V09X_1) | <span class="badge b-finished">finished</span> | V09X, V10A | 16 drugs | 0.23 h | 0 popPK · 0 PD · 0 PGx |
| [dg-V10B+1](/ledger/dg-V10B_1) | <span class="badge b-finished">finished</span> | V10B, V10X | 13 drugs | 0.34 h | 7 popPK · 0 PD · 0 PGx |
| [tg-AIR-1](/ledger/tg-AIR-1) | <span class="badge b-finished">finished</span> |  | 30 drugs | 6.89 h | 68 popPK · 8 PD · 1 PGx |
| [tg-AIR-10](/ledger/tg-AIR-10) | <span class="badge b-finished">finished</span> |  | 29 drugs | 6.26 h | 35 popPK · 16 PD · 0 PGx |
| [tg-AIR-11](/ledger/tg-AIR-11) | <span class="badge b-finished">finished</span> |  | 29 drugs | 3.64 h | 34 popPK · 5 PD · 0 PGx |
| [tg-AIR-12](/ledger/tg-AIR-12) | <span class="badge b-finished">finished</span> |  | 29 drugs | 6.05 h | 39 popPK · 0 PD · 1 PGx |
| [tg-AIR-13](/ledger/tg-AIR-13) | <span class="badge b-finished">finished</span> |  | 29 drugs | 3.45 h | 41 popPK · 2 PD · 0 PGx |
| [tg-AIR-2](/ledger/tg-AIR-2) | <span class="badge b-finished">finished</span> |  | 30 drugs | 1.64 h | 4 popPK · 0 PD · 0 PGx |
| [tg-AIR-3](/ledger/tg-AIR-3) | <span class="badge b-finished">finished</span> |  | 30 drugs | 4.12 h | 8 popPK · 5 PD · 0 PGx |
| [tg-AIR-4](/ledger/tg-AIR-4) | <span class="badge b-finished">finished</span> |  | 30 drugs | 3.76 h | 11 popPK · 1 PD · 0 PGx |
| [tg-AIR-5](/ledger/tg-AIR-5) | <span class="badge b-finished">finished</span> |  | 30 drugs | 1.66 h | 2 popPK · 2 PD · 0 PGx |
| [tg-AIR-6](/ledger/tg-AIR-6) | <span class="badge b-finished">finished</span> |  | 30 drugs | 5.62 h | 16 popPK · 6 PD · 0 PGx |
| [tg-AIR-7](/ledger/tg-AIR-7) | <span class="badge b-finished">finished</span> |  | 30 drugs | 1.95 h | 4 popPK · 2 PD · 0 PGx |
| [tg-AIR-8](/ledger/tg-AIR-8) | <span class="badge b-finished">finished</span> |  | 29 drugs | 1.72 h | 5 popPK · 0 PD · 0 PGx |
| [tg-AIR-9](/ledger/tg-AIR-9) | <span class="badge b-finished">finished</span> |  | 29 drugs | 2.74 h | 12 popPK · 7 PD · 0 PGx |
| [tg-ANIM-1](/ledger/tg-ANIM-1) | <span class="badge b-finished">finished</span> |  | 30 drugs | 9.53 h | 16 popPK · 8 PD · 1 PGx |
| [tg-ANIM-2](/ledger/tg-ANIM-2) | <span class="badge b-finished">finished</span> |  | 30 drugs | 12.13 h | 15 popPK · 8 PD · 6 PGx |
| [tg-ANIM-3](/ledger/tg-ANIM-3) | <span class="badge b-finished">finished</span> |  | 29 drugs | 6.58 h | 18 popPK · 16 PD · 0 PGx |
| [tg-ANIM-4](/ledger/tg-ANIM-4) | <span class="badge b-finished">finished</span> |  | 29 drugs | 0.86 h | 30 popPK · 23 PD · 1 PGx |
| [tg-ANIM-5](/ledger/tg-ANIM-5) | <span class="badge b-finished">finished</span> |  | 29 drugs | 6.40 h | 13 popPK · 7 PD · 0 PGx |
| [tg-ANIM-6](/ledger/tg-ANIM-6) | <span class="badge b-finished">finished</span> |  | 29 drugs | 4.07 h | 33 popPK · 16 PD · 1 PGx |
| [tg-ANIM-7](/ledger/tg-ANIM-7) | <span class="badge b-finished">finished</span> |  | 29 drugs | 0.24 h | 32 popPK · 5 PD · 3 PGx |
| [tg-ANIM-8](/ledger/tg-ANIM-8) | <span class="badge b-finished">finished</span> |  | 29 drugs | 10.79 h | 77 popPK · 0 PD · 7 PGx |
| [tg-ANIM-9](/ledger/tg-ANIM-9) | <span class="badge b-finished">finished</span> |  | 29 drugs | 10.50 h | 43 popPK · 5 PD · 0 PGx |
| [tg-BACT-1](/ledger/tg-BACT-1) | <span class="badge b-interrupted">interrupted</span> |  | 30 drugs | 3.18 h | 6 popPK · 11 PD · 0 PGx |
| [tg-BACT-2](/ledger/tg-BACT-2) | <span class="badge b-interrupted">interrupted</span> |  | 29 drugs | 12.82 h | 28 popPK · 0 PD · 1 PGx |
| [tg-CIG-1](/ledger/tg-CIG-1) | <span class="badge b-interrupted">interrupted</span> |  | 29 drugs | 2.95 h | 18 popPK · 23 PD · 2 PGx |
| [tg-CIG-2](/ledger/tg-CIG-2) | <span class="badge b-interrupted">interrupted</span> |  | 29 drugs | 2.22 h | 6 popPK · 6 PD · 1 PGx |
| [tg-DRUG-1](/ledger/tg-DRUG-1) | <span class="badge b-interrupted">interrupted</span> |  | 30 drugs | 1.77 h | 152 popPK · 60 PD · 53 PGx |
| [tg-DRUG-10](/ledger/tg-DRUG-10) | <span class="badge b-interrupted">interrupted</span> |  | 30 drugs | 1.44 h | 22 popPK · 22 PD · 2 PGx |
| [ttd](/ledger/ttd) | <span class="badge b-finished">finished</span> |  | 5 drugs | 5.79 h | 4 popPK · 11 PD · 3 PGx |

<sub>The pooled [full-text requests](/ledger/wanted) list 12306 paper(s) a reader could still retrieve by hand.</sub>

### Benchmark <sub>every model tag against the same curated truth · 11 tags</sub>

<div class="scroll"><table><thead><tr><th>tag</th><th>drugs</th><th>TP</th><th>FP</th><th>FN</th><th>TN</th><th>prec</th><th>recall</th><th>acc</th><th>F1</th><th>time</th><th>vs baseline</th></tr></thead><tbody><tr><th scope="row">einfracz__kimi_k3</th><td class="n">7</td><td class="n ok">138</td><td class="n bad">6</td><td class="n bad">12</td><td class="n">179</td><td class="n">0.958</td><td class="n">0.920</td><td class="n"><b>0.946</b></td><td class="n">0.939</td><td class="n">2:29:23</td><td class="n ok">ok <span class="nil">(0.946)</span></td></tr><tr><th scope="row">einfracz__gpt_oss_120b</th><td class="n">7</td><td class="n ok">132</td><td class="n bad">6</td><td class="n bad">18</td><td class="n">179</td><td class="n">0.957</td><td class="n">0.880</td><td class="n"><b>0.928</b></td><td class="n">0.917</td><td class="n">44:46</td><td class="n ok">ok <span class="nil">(0.928)</span></td></tr><tr><th scope="row">einfracz__qwen3_8_flash_next</th><td class="n">7</td><td class="n ok">128</td><td class="n bad">3</td><td class="n bad">22</td><td class="n">179</td><td class="n">0.977</td><td class="n">0.853</td><td class="n"><b>0.925</b></td><td class="n">0.911</td><td class="n">30:52</td><td class="n ok">ok <span class="nil">(0.925)</span></td></tr><tr><th scope="row">einfracz__deepseek_v4_1_flash</th><td class="n">7</td><td class="n ok">132</td><td class="n bad">10</td><td class="n bad">18</td><td class="n">179</td><td class="n">0.930</td><td class="n">0.880</td><td class="n"><b>0.917</b></td><td class="n">0.904</td><td class="n">5:43:35</td><td class="n ok">ok <span class="nil">(0.917)</span></td></tr><tr><th scope="row">einfracz__qwen3_8_27b</th><td class="n">7</td><td class="n ok">127</td><td class="n bad">5</td><td class="n bad">23</td><td class="n">179</td><td class="n">0.962</td><td class="n">0.847</td><td class="n"><b>0.916</b></td><td class="n">0.901</td><td class="n">29:59</td><td class="n ok">ok <span class="nil">(0.916)</span></td></tr><tr><th scope="row">ollama__deepseek_v4_1_flash</th><td class="n">7</td><td class="n ok">123</td><td class="n bad">6</td><td class="n bad">27</td><td class="n">179</td><td class="n">0.953</td><td class="n">0.820</td><td class="n"><b>0.901</b></td><td class="n">0.882</td><td class="n">23:22</td><td class="n ok">ok <span class="nil">(0.901)</span></td></tr><tr><th scope="row">ollama__glm_5_3_flash</th><td class="n">7</td><td class="n ok">123</td><td class="n bad">10</td><td class="n bad">27</td><td class="n">179</td><td class="n">0.925</td><td class="n">0.820</td><td class="n"><b>0.891</b></td><td class="n">0.869</td><td class="n">9:01</td><td class="n ok">ok <span class="nil">(0.891)</span></td></tr><tr><th scope="row">einfracz__kimi_k3_1_pro</th><td class="n">7</td><td class="n ok">115</td><td class="n bad">3</td><td class="n bad">35</td><td class="n">179</td><td class="n">0.975</td><td class="n">0.767</td><td class="n"><b>0.886</b></td><td class="n">0.858</td><td class="n">2:06:44</td><td class="n ok">ok <span class="nil">(0.886)</span></td></tr><tr><th scope="row">einfracz__glm_5_3_flash</th><td class="n">7</td><td class="n ok">120</td><td class="n bad">13</td><td class="n bad">30</td><td class="n">179</td><td class="n">0.902</td><td class="n">0.800</td><td class="n"><b>0.874</b></td><td class="n">0.848</td><td class="n">3:12:57</td><td class="n ok">ok <span class="nil">(0.874)</span></td></tr><tr><th scope="row">einfracz__gemma4</th><td class="n">7</td><td class="n ok">100</td><td class="n bad">2</td><td class="n bad">50</td><td class="n">179</td><td class="n">0.980</td><td class="n">0.667</td><td class="n"><b>0.843</b></td><td class="n">0.794</td><td class="n">1:26:54</td><td class="n ok">ok <span class="nil">(0.843)</span></td></tr><tr><th scope="row">einfracz__mistral_medium_3_5</th><td class="n">7</td><td class="n ok">91</td><td class="n bad">5</td><td class="n bad">59</td><td class="n">179</td><td class="n">0.948</td><td class="n">0.607</td><td class="n"><b>0.808</b></td><td class="n">0.740</td><td class="n">36:12</td><td class="n ok">ok <span class="nil">(0.808)</span></td></tr></tbody></table></div>

#### einfracz__kimi_k3 <sub>the leading tag, per drug</sub>

<div class="scroll"><table><thead><tr><th>drug</th><th>papers</th><th>TP</th><th>FP</th><th>FN</th><th>TN</th><th>prec</th><th>recall</th><th>acc</th><th>F1</th></tr></thead><tbody><tr><th scope="row">allopurinol</th><td class="n">3</td><td class="n ok">7</td><td class="n bad">2</td><td class="n bad">5</td><td class="n">15</td><td class="n">0.778</td><td class="n">0.583</td><td class="n"><b>0.759</b></td><td class="n">0.667</td></tr><tr><th scope="row">amoxicillin</th><td class="n">5</td><td class="n ok">21</td><td class="n bad">1</td><td class="n bad">2</td><td class="n">36</td><td class="n">0.955</td><td class="n">0.913</td><td class="n"><b>0.950</b></td><td class="n">0.933</td></tr><tr><th scope="row">clopidogrel</th><td class="n">4</td><td class="n ok">32</td><td class="n bad">1</td><td class="n bad">0</td><td class="n">40</td><td class="n">0.970</td><td class="n">1.000</td><td class="n"><b>0.986</b></td><td class="n">0.985</td></tr><tr><th scope="row">ibuprofen</th><td class="n">3</td><td class="n ok">14</td><td class="n bad">0</td><td class="n bad">0</td><td class="n">1</td><td class="n">1.000</td><td class="n">1.000</td><td class="n"><b>1.000</b></td><td class="n">1.000</td></tr><tr><th scope="row">metformin</th><td class="n">6</td><td class="n ok">33</td><td class="n bad">2</td><td class="n bad">1</td><td class="n">74</td><td class="n">0.943</td><td class="n">0.971</td><td class="n"><b>0.973</b></td><td class="n">0.957</td></tr><tr><th scope="row">semaglutide</th><td class="n">2</td><td class="n ok">19</td><td class="n bad">0</td><td class="n bad">0</td><td class="n">13</td><td class="n">1.000</td><td class="n">1.000</td><td class="n"><b>1.000</b></td><td class="n">1.000</td></tr><tr><th scope="row">tolvaptan</th><td class="n">1</td><td class="n ok">12</td><td class="n bad">0</td><td class="n bad">4</td><td class="n">0</td><td class="n">1.000</td><td class="n">0.750</td><td class="n"><b>0.750</b></td><td class="n">0.857</td></tr></tbody></table></div>


<details>
<summary>Ledger definitions</summary>

- **Time:** recorded elapsed time for the latest agent run. Amber marks durations >24 h,
  which may include interruption intervals rather than active processing time.
- **Papers / rel:** indexed papers / papers retained by at least one domain's relevance assessment.
- **Full text:** GROBID-derived TEI · publisher JATS XML · PDF-extracted text · abstract only.
- **Access:** retrieval-route classification, not licence status. Open-source routes are
  Europe PMC, Unpaywall, OpenAlex, CORE, and Semantic Scholar; other routes are classified separately.
- **Supplement:** supplementary material with or without NONMEM control-stream markers.
- **Review / models / gap-fill:** secondary-reference papers, derived models, and substituted
  parameter values. PGx gap-fill is not applicable to records without parameter lists.
- **popPK / PD / PGx:** extracted / rejected / other validation outcomes.
- **Tokens in/out:** recorded input/output tokens across all models and stages, including
  cross-check readers and adjudication calls in the reported run. These are run totals, not lifetime usage.
- **Baseline comparison:** change relative to the accepted benchmark score.
- **Projected full-text yield:** requested PDFs, estimated additional records, and observed
  record-yield rate. Estimates use domain- and relevance-specific yields, subtract records
  already obtained from abstracts, and assume comparable yields for unavailable papers.

</details>

</div>

