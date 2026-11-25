<div class="pklg">

### Extraction ledger <sub>KB artifacts as of 2026-11-25 07:17 · one page per panel and run group</sub>

<div class="tiles"><div class="tile"><i>Drugs processed: ATC / non-ATC / toxins</i><b>4,708 / 28 / 2,180</b><em>1,810 / 17 / 742 with ≥1 popPK/PD/PGx record before review</em></div><div class="tile"><i>Toxins: TK · TD · TGx records</i><b>4,451 · 815 · 71</b><em>Extracted records in the toxin store: toxicokinetics · toxicodynamics · toxicogenomics, in 843 · 243 · 18 toxins</em></div><div class="tile"><i>Papers: all · relevant · extracted</i><b>171,911 · 30,110 · 11,303</b><em>Extracted: 7% of all · 38% of relevant · before review</em></div><div class="tile"><i>Full text (papers)</i><b>49,417</b><em>122,494 abstract-only papers</em></div><div class="tile"><i>Full-text sources (papers)</i><b>15,758 · 33,436</b><em>GROBID-parsed PDFs · publisher JATS XML</em></div><div class="tile"><i>LLM tokens</i><b>718.2M input</b><em>70.55M output · cross-checks included</em></div><div class="tile"><i>Domain coverage (drugs)</i><b>1489 · 1875 · 200</b><em>Drugs with popPK · PD · PGx records</em></div><div class="tile"><i>Accepted records by species (top 4)</i><b>4,145 · 1,342 · 540 · 272</b><em>human · in vitro · rat · mouse</em></div><div class="tile"><i>Wanted PDFs · expected extracted</i><b>10,999 · ~4,129</b><em>At the extracted share of relevant papers (38%)</em></div><div class="tile"><i>Generated models · replicate paper</i><b>7,866 · 140</b><em>2,403 shipped in the 26.11 library · replication fails 794, no reference values 2,419</em></div><div class="tile"><i>Record verdicts (popPK · PD · PGx)</i><b>28,102</b><div class="bar"><span class="s1" style="width:0.0320%" title="Curated (human-checked): 9"></span><span class="s1" style="width:0.3701%" title="Reproduces paper: 104"></span><span class="s2" style="width:0.0036%" title="Reproduces with caveats: 1"></span><span class="s2" style="width:7.7183%" title="Simulated: 2169"></span><span class="s4" style="width:19.9381%" title="Not simulated: 5603"></span><span class="s3" style="width:28.5887%" title="Needs review: 8034"></span><span class="s5" style="width:28.4464%" title="Rejected: 7994"></span><span class="s4" style="width:14.9029%" title="other: 4188"></span></div><em>curated (human-checked) 9 · reproduces paper 104 · reproduces with caveats 1 · simulated 2,169 · not simulated 5,603 · needs review 8,034 · rejected 7,994 · other 4,188</em></div></div>
<h3 class="csechead">Corpus</h3><div class="cstats"><div class="cbox"><h4>popPK</h4><div class="cnum"><b>8,009</b><span>records after review · front-page count</span></div><div class="cnum"><b>8,995</b><span>extracted by the scholar, before review</span></div><div class="cnum"><b class="ok">3,242</b><span>simulatable of the scholar-extracted · 36.0%</span></div><table><tr><td>topology</td><td>1C 6558 · 2C 1022 · retention 910</td></tr><tr><td>parameterisation</td><td>mechanistic 7092 · apparent 1889</td></tr><tr><td>covariate equations</td><td>926 (10.3%)</td></tr><tr><td>simulation criterion</td><td>Clearance and volume available</td></tr></table></div><div class="cbox"><h4>PD</h4><div class="cnum"><b>7,082</b><span>records after review · front-page count</span></div><div class="cnum"><b>5,048</b><span>extracted by the scholar, before review</span></div><div class="cnum"><b class="ok">902</b><span>simulatable of the scholar-extracted · 17.9%</span></div><table><tr><td>family</td><td>sigmoid_emax 1655 · emax 1096 · unknown 717</td></tr><tr><td>driver</td><td>cited_pk 2186 · conc_no_pk 1043</td></tr><tr><td>supported structures</td><td>Emax 553 · turnover 349 · effect-cmt 291</td></tr><tr><td>simulation criterion</td><td>potency + Emax, or a turnover rate</td></tr></table></div><div class="cbox"><h4>PGx</h4><div class="cnum"><b>829</b><span>records after review · front-page count</span></div><div class="cnum"><b>248</b><span>extracted by the scholar, before review</span></div><div class="cnum"><b class="ok">62</b><span>simulatable of the scholar-extracted · 25.0%</span></div><table><tr><td>mechanism</td><td>safety_allele 186 · metabolism 30</td></tr><tr><td>genes covered</td><td>35</td></tr><tr><td>simulation criterion</td><td>Named PK parameter modified</td></tr></table></div><div class="cbox"><h4>accepted records by species</h4><table class="csp"><tr><td></td><td class="n"><i>popPK</i></td><td class="n"><i>PD</i></td><td class="n"><i>PGx</i></td></tr><tr><td>human</td><td class="n">2,152</td><td class="n">1,664</td><td class="n">329</td></tr><tr><td>in vitro</td><td class="n">13</td><td class="n">1,327</td><td class="n">2</td></tr><tr><td>rat</td><td class="n">100</td><td class="n">440</td><td class="n">0</td></tr><tr><td>mouse</td><td class="n">30</td><td class="n">242</td><td class="n">0</td></tr><tr><td>human + animal</td><td class="n">31</td><td class="n">116</td><td class="n">1</td></tr><tr><td>other animal</td><td class="n">5</td><td class="n">100</td><td class="n">0</td></tr><tr><td>pig</td><td class="n">16</td><td class="n">81</td><td class="n">0</td></tr><tr><td>dog</td><td class="n">43</td><td class="n">52</td><td class="n">0</td></tr><tr><td>13 others</td><td class="n">118</td><td class="n">211</td><td class="n">4</td></tr></table><p class="cnote"><small>Records that passed their checks (popPK: closed-form checks; PGx: including guideline-derived estimates), so they differ from the extracted-record counts beside it.</small></p></div></div>

#### curated panels <sub>7 panels · a page each; e/r/o = extracted / rejected / other outcomes</sub>

| panel | scope | drugs | popPK e/r/o | PD e/r/o | PGx e/r/o |
|---|---|---|---|---|---|
| [**dbs**](/ledger/p-dbs) | Selected drug panel | 20 | <span class="n"><b class="ok">322</b><span class="sl">/</span><b class="bad">285</b><span class="sl">/</span><span class="mut">0</span></span> | <span class="n"><b class="ok">208</b><span class="sl">/</span><b class="bad">11</b><span class="sl">/</span><span class="mut">0</span></span> | <span class="n"><b class="ok">103</b><span class="sl">/</span><b class="bad">0</b><span class="sl">/</span><span class="mut">454</span></span> |
| [**ddd**](/ledger/p-ddd) | Curated reference panel; overlaps other panels | 7 | <span class="n"><b class="ok">137</b><span class="sl">/</span><b class="bad">84</b><span class="sl">/</span><span class="mut">0</span></span> | <span class="n"><b class="ok">71</b><span class="sl">/</span><b class="bad">4</b><span class="sl">/</span><span class="mut">0</span></span> | <span class="n"><b class="ok">54</b><span class="sl">/</span><b class="bad">0</b><span class="sl">/</span><span class="mut">223</span></span> |
| [**dku**](/ledger/p-dku) | Precision-dosing (TDM) panel | 5 | <span class="n"><b class="ok">12</b><span class="sl">/</span><b class="bad">4</b><span class="sl">/</span><span class="mut">0</span></span> | <span class="n"><b class="ok">12</b><span class="sl">/</span><b class="bad">1</b><span class="sl">/</span><span class="mut">0</span></span> | <span class="n"><b class="ok">2</b><span class="sl">/</span><b class="bad">0</b><span class="sl">/</span><span class="mut">6</span></span> |
| [**dn1**](/ledger/p-dn1) | Non-ATC modelling panel | 15 | <span class="n"><b class="ok">14</b><span class="sl">/</span><b class="bad">39</b><span class="sl">/</span><span class="mut">0</span></span> | <span class="n"><b class="ok">22</b><span class="sl">/</span><b class="bad">6</b><span class="sl">/</span><span class="mut">0</span></span> | <span class="n"><b class="ok">0</b><span class="sl">/</span><b class="bad">0</b><span class="sl">/</span><span class="mut">6</span></span> |
| [**do1**](/ledger/p-do1) | Oncology panel of the ADR records | 7 | <span class="n"><b class="ok">117</b><span class="sl">/</span><b class="bad">112</b><span class="sl">/</span><span class="mut">0</span></span> | <span class="n"><b class="ok">86</b><span class="sl">/</span><b class="bad">11</b><span class="sl">/</span><span class="mut">0</span></span> | <span class="n"><b class="ok">51</b><span class="sl">/</span><b class="bad">0</b><span class="sl">/</span><span class="mut">178</span></span> |
| [**dph**](/ledger/p-dph) | Diverse PGx/ATC panel | 18 | <span class="n"><b class="ok">342</b><span class="sl">/</span><b class="bad">213</b><span class="sl">/</span><span class="mut">0</span></span> | <span class="n"><b class="ok">194</b><span class="sl">/</span><b class="bad">14</b><span class="sl">/</span><span class="mut">0</span></span> | <span class="n"><b class="ok">214</b><span class="sl">/</span><b class="bad">0</b><span class="sl">/</span><span class="mut">621</span></span> |
| [**dse**](/ledger/p-dse) | Incretin/GLP-1 panel | 19 | <span class="n"><b class="ok">89</b><span class="sl">/</span><b class="bad">78</b><span class="sl">/</span><span class="mut">0</span></span> | <span class="n"><b class="ok">99</b><span class="sl">/</span><b class="bad">7</b><span class="sl">/</span><span class="mut">0</span></span> | <span class="n"><b class="ok">42</b><span class="sl">/</span><b class="bad">0</b><span class="sl">/</span><span class="mut">178</span></span> |

#### run groups <sub>478 started · 477 finished · one page each</sub>

| run group | run | ATC | drugs | time | popPK · PD · PGx extracted |
|---|---|---|---|---|---|
| [dg-A01A-1](/ledger/dg-A01A-1) | <span class="badge b-finished">finished</span> | A01A | 14 drugs | 1.82 h | 11 popPK · 44 PD · 0 PGx |
| [dg-A01A-2](/ledger/dg-A01A-2) | <span class="badge b-finished">finished</span> | A01A | 15 drugs | 2.15 h | 19 popPK · 38 PD · 0 PGx |
| [dg-A01A-3](/ledger/dg-A01A-3) | <span class="badge b-finished">finished</span> | A01A | 12 drugs | 1.76 h | 6 popPK · 19 PD · 1 PGx |
| [dg-A02A-1](/ledger/dg-A02A-1) | <span class="badge b-finished">finished</span> | A02A | 11 drugs | 0.47 h | 0 popPK · 1 PD · 2 PGx |
| [dg-A02A-2](/ledger/dg-A02A-2) | <span class="badge b-finished">finished</span> | A02A | 10 drugs | 0.40 h | 0 popPK · 0 PD · 0 PGx |
| [dg-A02B-1](/ledger/dg-A02B-1) | <span class="badge b-finished">finished</span> | A02B | 14 drugs | 0.60 h | 49 popPK · 16 PD · 0 PGx |
| [dg-A02B-2](/ledger/dg-A02B-2) | <span class="badge b-finished">finished</span> | A02B | 14 drugs | 1.11 h | 7 popPK · 11 PD · 0 PGx |
| [dg-A02B-3](/ledger/dg-A02B-3) | <span class="badge b-finished">finished</span> | A02B | 14 drugs | 1.76 h | 50 popPK · 15 PD · 5 PGx |
| [dg-A02B-4](/ledger/dg-A02B-4) | <span class="badge b-finished">finished</span> | A02B | 14 drugs | 1.40 h | 10 popPK · 17 PD · 0 PGx |
| [dg-A02B-5](/ledger/dg-A02B-5) | <span class="badge b-finished">finished</span> | A02B | 12 drugs | 0.65 h | 3 popPK · 2 PD · 0 PGx |
| [dg-A03A-1](/ledger/dg-A03A-1) | <span class="badge b-finished">finished</span> | A03A | 15 drugs | 0.31 h | 0 popPK · 0 PD · 0 PGx |
| [dg-A03A-2](/ledger/dg-A03A-2) | <span class="badge b-finished">finished</span> | A03A | 15 drugs | 0.53 h | 7 popPK · 2 PD · 0 PGx |
| [dg-A03A-3](/ledger/dg-A03A-3) | <span class="badge b-finished">finished</span> | A03A | 15 drugs | 0.40 h | 1 popPK · 6 PD · 0 PGx |
| [dg-A03A-4](/ledger/dg-A03A-4) | <span class="badge b-finished">finished</span> | A03A | 15 drugs | 0.39 h | 2 popPK · 2 PD · 0 PGx |
| [dg-A03B](/ledger/dg-A03B) | <span class="badge b-finished">finished</span> | A03B | 10 drugs | 0.41 h | 2 popPK · 6 PD · 0 PGx |
| [dg-A03C-1](/ledger/dg-A03C-1) | <span class="badge b-finished">finished</span> | A03C | 9 drugs | 0.05 h | 0 popPK · 0 PD · 0 PGx |
| [dg-A03C-2](/ledger/dg-A03C-2) | <span class="badge b-finished">finished</span> | A03C | 9 drugs | 0.01 h | 4 popPK · 0 PD · 0 PGx |
| [dg-A03D](/ledger/dg-A03D) | <span class="badge b-finished">finished</span> | A03D | 10 drugs | 0.22 h | 3 popPK · 0 PD · 0 PGx |
| [dg-A03F](/ledger/dg-A03F) | <span class="badge b-finished">finished</span> | A03F | 10 drugs | 0.68 h | 5 popPK · 7 PD · 0 PGx |
| [dg-A04A-1](/ledger/dg-A04A-1) | <span class="badge b-finished">finished</span> | A04A | 9 drugs | 0.29 h | 2 popPK · 5 PD · 0 PGx |
| [dg-A04A-2](/ledger/dg-A04A-2) | <span class="badge b-finished">finished</span> | A04A | 8 drugs | 0.98 h | 13 popPK · 15 PD · 0 PGx |
| [dg-A05A](/ledger/dg-A05A) | <span class="badge b-finished">finished</span> | A05A | 16 drugs | 0.53 h | 1 popPK · 23 PD · 0 PGx |
| [dg-A05B](/ledger/dg-A05B) | <span class="badge b-finished">finished</span> | A05B | 11 drugs | 1.36 h | 2 popPK · 3 PD · 0 PGx |
| [dg-A06A-1](/ledger/dg-A06A-1) | <span class="badge b-finished">finished</span> | A06A | 16 drugs | 0.41 h | 0 popPK · 1 PD · 0 PGx |
| [dg-A06A-2](/ledger/dg-A06A-2) | <span class="badge b-finished">finished</span> | A06A | 16 drugs | 1.25 h | 1 popPK · 10 PD · 1 PGx |
| [dg-A06A-3](/ledger/dg-A06A-3) | <span class="badge b-finished">finished</span> | A06A | 16 drugs | 1.67 h | 10 popPK · 8 PD · 0 PGx |
| [dg-A06A-4](/ledger/dg-A06A-4) | <span class="badge b-finished">finished</span> | A06A | 14 drugs | 0.98 h | 1 popPK · 10 PD · 0 PGx |
| [dg-A07A-1](/ledger/dg-A07A-1) | <span class="badge b-finished">finished</span> | A07A | 10 drugs | 0.89 h | 10 popPK · 21 PD · 0 PGx |
| [dg-A07A-2](/ledger/dg-A07A-2) | <span class="badge b-finished">finished</span> | A07A | 9 drugs | 1.14 h | 9 popPK · 8 PD · 1 PGx |
| [dg-A07B](/ledger/dg-A07B) | <span class="badge b-finished">finished</span> | A07B | 8 drugs | 0.44 h | 0 popPK · 0 PD · 0 PGx |
| [dg-A07D](/ledger/dg-A07D) | <span class="badge b-finished">finished</span> | A07D | 8 drugs | 0.55 h | 0 popPK · 0 PD · 0 PGx |
| [dg-A07E](/ledger/dg-A07E) | <span class="badge b-finished">finished</span> | A07E | 10 drugs | 1.18 h | 10 popPK · 10 PD · 0 PGx |
| [dg-A07F+1](/ledger/dg-A07F_1) | <span class="badge b-finished">finished</span> | A07F, A07X | 10 drugs | 0.97 h | 6 popPK · 1 PD · 0 PGx |
| [dg-A08A-1](/ledger/dg-A08A-1) | <span class="badge b-finished">finished</span> | A08A | 10 drugs | 0.48 h | 1 popPK · 12 PD · 0 PGx |
| [dg-A08A-2](/ledger/dg-A08A-2) | <span class="badge b-finished">finished</span> | A08A | 10 drugs | 0.96 h | 8 popPK · 13 PD · 0 PGx |
| [dg-A09A](/ledger/dg-A09A) | <span class="badge b-finished">finished</span> | A09A | 12 drugs | 1.18 h | 0 popPK · 9 PD · 0 PGx |
| [dg-A10A](/ledger/dg-A10A) | <span class="badge b-finished">finished</span> | A10A | 16 drugs | 2.21 h | 7 popPK · 29 PD · 0 PGx |
| [dg-A10B-1](/ledger/dg-A10B-1) | <span class="badge b-finished">finished</span> | A10B | 16 drugs | 0.46 h | 17 popPK · 41 PD · 0 PGx |
| [dg-A10B-2](/ledger/dg-A10B-2) | <span class="badge b-finished">finished</span> | A10B | 16 drugs | 1.91 h | 10 popPK · 25 PD · 4 PGx |
| [dg-A10B-3](/ledger/dg-A10B-3) | <span class="badge b-finished">finished</span> | A10B | 16 drugs | 0.97 h | 36 popPK · 23 PD · 6 PGx |
| [dg-A10B-4](/ledger/dg-A10B-4) | <span class="badge b-finished">finished</span> | A10B | 16 drugs | 0.83 h | 0 popPK · 0 PD · 0 PGx |
| [dg-A10B-5](/ledger/dg-A10B-5) | <span class="badge b-finished">finished</span> | A10B | 16 drugs | 1.42 h | 15 popPK · 26 PD · 1 PGx |
| [dg-A10B-6](/ledger/dg-A10B-6) | <span class="badge b-finished">finished</span> | A10B | 14 drugs | 2.83 h | 26 popPK · 31 PD · 6 PGx |
| [dg-A10X+1](/ledger/dg-A10X_1) | <span class="badge b-finished">finished</span> | A10X, A11A | 9 drugs | 0.77 h | 2 popPK · 4 PD · 2 PGx |
| [dg-A11C](/ledger/dg-A11C) | <span class="badge b-finished">finished</span> | A11C | 10 drugs | 1.47 h | 5 popPK · 1 PD · 0 PGx |
| [dg-A11D+1](/ledger/dg-A11D_1) | <span class="badge b-finished">finished</span> | A11D, A11G | 7 drugs | 0.43 h | 1 popPK · 1 PD · 0 PGx |
| [dg-A11H](/ledger/dg-A11H) | <span class="badge b-finished">finished</span> | A11H | 14 drugs | 1.93 h | 4 popPK · 9 PD · 0 PGx |
| [dg-A12A](/ledger/dg-A12A) | <span class="badge b-finished">finished</span> | A12A | 13 drugs | 0.38 h | 1 popPK · 3 PD · 0 PGx |
| [dg-A12B](/ledger/dg-A12B) | <span class="badge b-finished">finished</span> | A12B | 7 drugs | 0.34 h | 0 popPK · 0 PD · 0 PGx |
| [dg-A12C-1](/ledger/dg-A12C-1) | <span class="badge b-finished">finished</span> | A12C | 9 drugs | 0.66 h | 4 popPK · 0 PD · 0 PGx |
| [dg-A12C-2](/ledger/dg-A12C-2) | <span class="badge b-finished">finished</span> | A12C | 8 drugs | 0.83 h | 4 popPK · 6 PD · 0 PGx |
| [dg-A14A](/ledger/dg-A14A) | <span class="badge b-finished">finished</span> | A14A | 12 drugs | 0.45 h | 0 popPK · 0 PD · 0 PGx |
| [dg-A16A-1](/ledger/dg-A16A-1) | <span class="badge b-finished">finished</span> | A16A | 13 drugs | 0.93 h | 3 popPK · 6 PD · 0 PGx |
| [dg-A16A-2](/ledger/dg-A16A-2) | <span class="badge b-finished">finished</span> | A16A | 13 drugs | 0.70 h | 5 popPK · 2 PD · 0 PGx |
| [dg-A16A-3](/ledger/dg-A16A-3) | <span class="badge b-finished">finished</span> | A16A | 13 drugs | 0.45 h | 5 popPK · 9 PD · 0 PGx |
| [dg-A16A-4](/ledger/dg-A16A-4) | <span class="badge b-finished">finished</span> | A16A | 13 drugs | 0.64 h | 1 popPK · 0 PD · 0 PGx |
| [dg-A16A-5](/ledger/dg-A16A-5) | <span class="badge b-finished">finished</span> | A16A | 13 drugs | 0.40 h | 4 popPK · 3 PD · 0 PGx |
| [dg-B01A-1](/ledger/dg-B01A-1) | <span class="badge b-finished">finished</span> | B01A | 16 drugs | 2.16 h | 9 popPK · 22 PD · 13 PGx |
| [dg-B01A-2](/ledger/dg-B01A-2) | <span class="badge b-finished">finished</span> | B01A | 16 drugs | 1.11 h | 17 popPK · 26 PD · 17 PGx |
| [dg-B01A-3](/ledger/dg-B01A-3) | <span class="badge b-finished">finished</span> | B01A | 16 drugs | 2.12 h | 11 popPK · 22 PD · 0 PGx |
| [dg-B01A-4](/ledger/dg-B01A-4) | <span class="badge b-finished">finished</span> | B01A | 16 drugs | 0.53 h | 26 popPK · 9 PD · 1 PGx |
| [dg-B01A-5](/ledger/dg-B01A-5) | <span class="badge b-finished">finished</span> | B01A | 14 drugs | 1.16 h | 28 popPK · 33 PD · 51 PGx |
| [dg-B02A](/ledger/dg-B02A) | <span class="badge b-finished">finished</span> | B02A | 7 drugs | 0.88 h | 9 popPK · 6 PD · 0 PGx |
| [dg-B02B-1](/ledger/dg-B02B-1) | <span class="badge b-finished">finished</span> | B02B | 13 drugs | 0.75 h | 33 popPK · 1 PD · 1 PGx |
| [dg-B02B-2](/ledger/dg-B02B-2) | <span class="badge b-finished">finished</span> | B02B | 13 drugs | 1.84 h | 11 popPK · 16 PD · 0 PGx |
| [dg-B02B-3](/ledger/dg-B02B-3) | <span class="badge b-finished">finished</span> | B02B | 11 drugs | 1.41 h | 8 popPK · 21 PD · 1 PGx |
| [dg-B03A-1](/ledger/dg-B03A-1) | <span class="badge b-finished">finished</span> | B03A | 16 drugs | 0.23 h | 0 popPK · 1 PD · 0 PGx |
| [dg-B03A-2](/ledger/dg-B03A-2) | <span class="badge b-finished">finished</span> | B03A | 15 drugs | 0.45 h | 0 popPK · 0 PD · 2 PGx |
| [dg-B03B](/ledger/dg-B03B) | <span class="badge b-finished">finished</span> | B03B | 8 drugs | 0.37 h | 2 popPK · 0 PD · 0 PGx |
| [dg-B03X](/ledger/dg-B03X) | <span class="badge b-finished">finished</span> | B03X | 10 drugs | 0.66 h | 17 popPK · 23 PD · 0 PGx |
| [dg-B05A](/ledger/dg-B05A) | <span class="badge b-finished">finished</span> | B05A | 14 drugs | 2.61 h | 4 popPK · 5 PD · 2 PGx |
| [dg-B05B](/ledger/dg-B05B) | <span class="badge b-finished">finished</span> | B05B | 9 drugs | 1.64 h | 1 popPK · 2 PD · 0 PGx |
| [dg-B05C](/ledger/dg-B05C) | <span class="badge b-finished">finished</span> | B05C | 11 drugs | 1.24 h | 6 popPK · 12 PD · 0 PGx |
| [dg-B05X](/ledger/dg-B05X) | <span class="badge b-finished">finished</span> | B05X | 14 drugs | 1.27 h | 4 popPK · 11 PD · 0 PGx |
| [dg-B06A-1](/ledger/dg-B06A-1) | <span class="badge b-finished">finished</span> | B06A | 12 drugs | 0.37 h | 6 popPK · 5 PD · 0 PGx |
| [dg-B06A-2](/ledger/dg-B06A-2) | <span class="badge b-finished">finished</span> | B06A | 11 drugs | 0.97 h | 3 popPK · 16 PD · 0 PGx |
| [dg-C01A](/ledger/dg-C01A) | <span class="badge b-finished">finished</span> | C01A | 15 drugs | 1.43 h | 12 popPK · 6 PD · 0 PGx |
| [dg-C01B-1](/ledger/dg-C01B-1) | <span class="badge b-finished">finished</span> | C01B | 15 drugs | 6.00 h | 28 popPK · 72 PD · 0 PGx |
| [dg-C01B-2](/ledger/dg-C01B-2) | <span class="badge b-finished">finished</span> | C01B | 15 drugs | 5.40 h | 31 popPK · 44 PD · 1 PGx |
| [dg-C01C-1](/ledger/dg-C01C-1) | <span class="badge b-finished">finished</span> | C01C | 12 drugs | 0.95 h | 5 popPK · 30 PD · 5 PGx |
| [dg-C01C-2](/ledger/dg-C01C-2) | <span class="badge b-finished">finished</span> | C01C | 12 drugs | 0.28 h | 1 popPK · 11 PD · 0 PGx |
| [dg-C01C-3](/ledger/dg-C01C-3) | <span class="badge b-finished">finished</span> | C01C | 12 drugs | 0.38 h | 12 popPK · 31 PD · 0 PGx |
| [dg-C01D-1](/ledger/dg-C01D-1) | <span class="badge b-finished">finished</span> | C01D | 15 drugs | 0.30 h | 1 popPK · 4 PD · 0 PGx |
| [dg-C01D-2](/ledger/dg-C01D-2) | <span class="badge b-finished">finished</span> | C01D | 15 drugs | 0.88 h | 8 popPK · 6 PD · 0 PGx |
| [dg-C01D-3](/ledger/dg-C01D-3) | <span class="badge b-finished">finished</span> | C01D | 13 drugs | 0.27 h | 2 popPK · 0 PD · 0 PGx |
| [dg-C01E-1](/ledger/dg-C01E-1) | <span class="badge b-finished">finished</span> | C01E | 10 drugs | 0.64 h | 19 popPK · 12 PD · 13 PGx |
| [dg-C01E-2](/ledger/dg-C01E-2) | <span class="badge b-finished">finished</span> | C01E | 10 drugs | 0.20 h | 5 popPK · 5 PD · 0 PGx |
| [dg-C02A-1](/ledger/dg-C02A-1) | <span class="badge b-finished">finished</span> | C02A | 9 drugs | 0.43 h | 6 popPK · 9 PD · 0 PGx |
| [dg-C02A-2](/ledger/dg-C02A-2) | <span class="badge b-finished">finished</span> | C02A | 9 drugs | 0.47 h | 1 popPK · 4 PD · 0 PGx |
| [dg-C02B+1](/ledger/dg-C02B_1) | <span class="badge b-finished">finished</span> | C02B, C02C | 14 drugs | 1.29 h | 20 popPK · 14 PD · 1 PGx |
| [dg-C02D](/ledger/dg-C02D) | <span class="badge b-finished">finished</span> | C02D | 8 drugs | 0.82 h | 0 popPK · 6 PD · 0 PGx |
| [dg-C02K](/ledger/dg-C02K) | <span class="badge b-finished">finished</span> | C02K | 15 drugs | 2.06 h | 17 popPK · 15 PD · 1 PGx |
| [dg-C02L-1](/ledger/dg-C02L-1) | <span class="badge b-finished">finished</span> | C02L | 14 drugs | 0.08 h | 0 popPK · 0 PD · 0 PGx |
| [dg-C02L-2](/ledger/dg-C02L-2) | <span class="badge b-finished">finished</span> | C02L | 13 drugs | 0.06 h | 0 popPK · 0 PD · 0 PGx |
| [dg-C03A-1](/ledger/dg-C03A-1) | <span class="badge b-finished">finished</span> | C03A | 12 drugs | 1.61 h | 17 popPK · 8 PD · 5 PGx |
| [dg-C03A-2](/ledger/dg-C03A-2) | <span class="badge b-finished">finished</span> | C03A | 11 drugs | 0.62 h | 3 popPK · 0 PD · 0 PGx |
| [dg-C03B-1](/ledger/dg-C03B-1) | <span class="badge b-finished">finished</span> | C03B | 10 drugs | 0.22 h | 2 popPK · 0 PD · 0 PGx |
| [dg-C03B-2](/ledger/dg-C03B-2) | <span class="badge b-finished">finished</span> | C03B | 10 drugs | 0.20 h | 0 popPK · 0 PD · 0 PGx |
| [dg-C03C](/ledger/dg-C03C) | <span class="badge b-finished">finished</span> | C03C | 10 drugs | 2.07 h | 12 popPK · 7 PD · 0 PGx |
| [dg-C03D](/ledger/dg-C03D) | <span class="badge b-finished">finished</span> | C03D | 8 drugs | 1.58 h | 32 popPK · 14 PD · 0 PGx |
| [dg-C03E+1](/ledger/dg-C03E_1) | <span class="badge b-finished">finished</span> | C03E, C03X | 16 drugs | 0.65 h | 8 popPK · 3 PD · 1 PGx |
| [dg-C04A-1](/ledger/dg-C04A-1) | <span class="badge b-finished">finished</span> | C04A | 13 drugs | 0.28 h | 3 popPK · 1 PD · 0 PGx |
| [dg-C04A-2](/ledger/dg-C04A-2) | <span class="badge b-finished">finished</span> | C04A | 13 drugs | 0.70 h | 3 popPK · 9 PD · 0 PGx |
| [dg-C04A-3](/ledger/dg-C04A-3) | <span class="badge b-finished">finished</span> | C04A | 11 drugs | 0.41 h | 1 popPK · 2 PD · 0 PGx |
| [dg-C05A](/ledger/dg-C05A) | <span class="badge b-finished">finished</span> | C05A | 16 drugs | 1.32 h | 7 popPK · 23 PD · 0 PGx |
| [dg-C05B](/ledger/dg-C05B) | <span class="badge b-finished">finished</span> | C05B | 13 drugs | 1.13 h | 1 popPK · 8 PD · 0 PGx |
| [dg-C05C+1](/ledger/dg-C05C_1) | <span class="badge b-finished">finished</span> | C05C, C05X | 11 drugs | 0.39 h | 2 popPK · 0 PD · 4 PGx |
| [dg-C07A-1](/ledger/dg-C07A-1) | <span class="badge b-finished">finished</span> | C07A | 15 drugs | 0.88 h | 40 popPK · 30 PD · 2 PGx |
| [dg-C07A-2](/ledger/dg-C07A-2) | <span class="badge b-finished">finished</span> | C07A | 15 drugs | 0.39 h | 21 popPK · 29 PD · 2 PGx |
| [dg-C07B](/ledger/dg-C07B) | <span class="badge b-finished">finished</span> | C07B | 15 drugs | 0.11 h | 1 popPK · 1 PD · 0 PGx |
| [dg-C07C](/ledger/dg-C07C) | <span class="badge b-finished">finished</span> | C07C | 8 drugs | 0.02 h | 0 popPK · 0 PD · 0 PGx |
| [dg-C07D+1](/ledger/dg-C07D_1) | <span class="badge b-finished">finished</span> | C07D, C07F | 16 drugs | 2.05 h | 29 popPK · 24 PD · 2 PGx |
| [dg-C08C-1](/ledger/dg-C08C-1) | <span class="badge b-finished">finished</span> | C08C | 9 drugs | 1.00 h | 9 popPK · 23 PD · 8 PGx |
| [dg-C08C-2](/ledger/dg-C08C-2) | <span class="badge b-finished">finished</span> | C08C | 9 drugs | 0.38 h | 7 popPK · 7 PD · 0 PGx |
| [dg-C08D+2](/ledger/dg-C08D_2) | <span class="badge b-finished">finished</span> | C08D, C08E, C08G | 10 drugs | 0.91 h | 0 popPK · 6 PD · 0 PGx |
| [dg-C09A](/ledger/dg-C09A) | <span class="badge b-finished">finished</span> | C09A | 16 drugs | 2.69 h | 21 popPK · 30 PD · 5 PGx |
| [dg-C09B-1](/ledger/dg-C09B-1) | <span class="badge b-finished">finished</span> | C09B | 15 drugs | 0.90 h | 0 popPK · 0 PD · 0 PGx |
| [dg-C09B-2](/ledger/dg-C09B-2) | <span class="badge b-finished">finished</span> | C09B | 14 drugs | 0.54 h | 0 popPK · 0 PD · 0 PGx |
| [dg-C09C](/ledger/dg-C09C) | <span class="badge b-finished">finished</span> | C09C | 11 drugs | 2.23 h | 27 popPK · 32 PD · 13 PGx |
| [dg-C09D-1](/ledger/dg-C09D-1) | <span class="badge b-finished">finished</span> | C09D | 14 drugs | 0.73 h | 0 popPK · 0 PD · 0 PGx |
| [dg-C09D-2](/ledger/dg-C09D-2) | <span class="badge b-finished">finished</span> | C09D | 14 drugs | 1.02 h | 0 popPK · 0 PD · 0 PGx |
| [dg-C09X](/ledger/dg-C09X) | <span class="badge b-finished">finished</span> | C09X | 5 drugs | 0.39 h | 1 popPK · 0 PD · 0 PGx |
| [dg-C10A-1](/ledger/dg-C10A-1) | <span class="badge b-finished">finished</span> | C10A | 15 drugs | 2.27 h | 14 popPK · 16 PD · 5 PGx |
| [dg-C10A-2](/ledger/dg-C10A-2) | <span class="badge b-finished">finished</span> | C10A | 15 drugs | 1.57 h | 5 popPK · 7 PD · 1 PGx |
| [dg-C10A-3](/ledger/dg-C10A-3) | <span class="badge b-finished">finished</span> | C10A | 15 drugs | 0.16 h | 0 popPK · 0 PD · 0 PGx |
| [dg-C10B-1](/ledger/dg-C10B-1) | <span class="badge b-finished">finished</span> | C10B | 14 drugs | 0.44 h | 0 popPK · 0 PD · 0 PGx |
| [dg-C10B-2](/ledger/dg-C10B-2) | <span class="badge b-finished">finished</span> | C10B | 14 drugs | 0.56 h | 0 popPK · 0 PD · 0 PGx |
| [dg-C10B-3](/ledger/dg-C10B-3) | <span class="badge b-finished">finished</span> | C10B | 12 drugs | 0.36 h | 0 popPK · 0 PD · 0 PGx |
| [dg-D01A-1](/ledger/dg-D01A-1) | <span class="badge b-finished">finished</span> | D01A | 13 drugs | 0.19 h | 0 popPK · 1 PD · 0 PGx |
| [dg-D01A-2](/ledger/dg-D01A-2) | <span class="badge b-finished">finished</span> | D01A | 13 drugs | 1.13 h | 9 popPK · 6 PD · 0 PGx |
| [dg-D01A-3](/ledger/dg-D01A-3) | <span class="badge b-finished">finished</span> | D01A | 13 drugs | 0.58 h | 2 popPK · 2 PD · 0 PGx |
| [dg-D01A-4](/ledger/dg-D01A-4) | <span class="badge b-finished">finished</span> | D01A | 12 drugs | 0.53 h | 0 popPK · 4 PD · 0 PGx |
| [dg-D01B+2](/ledger/dg-D01B_2) | <span class="badge b-finished">finished</span> | D01B, D02A, D02B | 5 drugs | 0.04 h | 0 popPK · 0 PD · 0 PGx |
| [dg-D03A+1](/ledger/dg-D03A_1) | <span class="badge b-finished">finished</span> | D03A, D03B | 15 drugs | 0.58 h | 2 popPK · 0 PD · 0 PGx |
| [dg-D04A-1](/ledger/dg-D04A-1) | <span class="badge b-finished">finished</span> | D04A | 9 drugs | 0.55 h | 3 popPK · 11 PD · 0 PGx |
| [dg-D04A-2](/ledger/dg-D04A-2) | <span class="badge b-finished">finished</span> | D04A | 9 drugs | 0.54 h | 2 popPK · 10 PD · 0 PGx |
| [dg-D05A](/ledger/dg-D05A) | <span class="badge b-finished">finished</span> | D05A | 13 drugs | 0.81 h | 9 popPK · 11 PD · 0 PGx |
| [dg-D05B+1](/ledger/dg-D05B_1) | <span class="badge b-finished">finished</span> | D05B, D06A | 15 drugs | 1.88 h | 80 popPK · 34 PD · 5 PGx |
| [dg-D06B-1](/ledger/dg-D06B-1) | <span class="badge b-finished">finished</span> | D06B | 11 drugs | 0.68 h | 2 popPK · 1 PD · 0 PGx |
| [dg-D06B-2](/ledger/dg-D06B-2) | <span class="badge b-finished">finished</span> | D06B | 11 drugs | 0.24 h | 3 popPK · 3 PD · 0 PGx |
| [dg-D07A-1](/ledger/dg-D07A-1) | <span class="badge b-finished">finished</span> | D07A | 14 drugs | 0.17 h | 0 popPK · 1 PD · 0 PGx |
| [dg-D07A-2](/ledger/dg-D07A-2) | <span class="badge b-finished">finished</span> | D07A | 13 drugs | 1.87 h | 10 popPK · 43 PD · 0 PGx |
| [dg-D07B](/ledger/dg-D07B) | <span class="badge b-finished">finished</span> | D07B | 10 drugs | 0.02 h | 0 popPK · 0 PD · 0 PGx |
| [dg-D07C](/ledger/dg-D07C) | <span class="badge b-finished">finished</span> | D07C | 15 drugs | 0.35 h | 0 popPK · 0 PD · 0 PGx |
| [dg-D08A-1](/ledger/dg-D08A-1) | <span class="badge b-finished">finished</span> | D08A | 13 drugs | 0.44 h | 1 popPK · 41 PD · 0 PGx |
| [dg-D08A-2](/ledger/dg-D08A-2) | <span class="badge b-finished">finished</span> | D08A | 13 drugs | 0.46 h | 0 popPK · 7 PD · 0 PGx |
| [dg-D08A-3](/ledger/dg-D08A-3) | <span class="badge b-finished">finished</span> | D08A | 13 drugs | 0.18 h | 1 popPK · 3 PD · 0 PGx |
| [dg-D08A-4](/ledger/dg-D08A-4) | <span class="badge b-finished">finished</span> | D08A | 10 drugs | 0.67 h | 1 popPK · 13 PD · 0 PGx |
| [dg-D09A](/ledger/dg-D09A) | <span class="badge b-finished">finished</span> | D09A | 7 drugs | 0.07 h | 0 popPK · 0 PD · 0 PGx |
| [dg-D10A-1](/ledger/dg-D10A-1) | <span class="badge b-finished">finished</span> | D10A | 14 drugs | 1.08 h | 8 popPK · 15 PD · 0 PGx |
| [dg-D10A-2](/ledger/dg-D10A-2) | <span class="badge b-finished">finished</span> | D10A, D10B | 14 drugs | 0.18 h | 2 popPK · 1 PD · 0 PGx |
| [dg-D11A-1](/ledger/dg-D11A-1) | <span class="badge b-finished">finished</span> | D11A | 13 drugs | 0.69 h | 18 popPK · 24 PD · 4 PGx |
| [dg-D11A-2](/ledger/dg-D11A-2) | <span class="badge b-finished">finished</span> | D11A | 13 drugs | 0.92 h | 7 popPK · 18 PD · 0 PGx |
| [dg-D11A-3](/ledger/dg-D11A-3) | <span class="badge b-finished">finished</span> | D11A | 11 drugs | 0.19 h | 9 popPK · 9 PD · 0 PGx |
| [dg-G01A-1](/ledger/dg-G01A-1) | <span class="badge b-finished">finished</span> | G01A | 12 drugs | 0.26 h | 0 popPK · 15 PD · 0 PGx |
| [dg-G01A-2](/ledger/dg-G01A-2) | <span class="badge b-finished">finished</span> | G01A | 11 drugs | 0.16 h | 1 popPK · 1 PD · 0 PGx |
| [dg-G02A+1](/ledger/dg-G02A_1) | <span class="badge b-finished">finished</span> | G02A, G02B | 15 drugs | 0.27 h | 3 popPK · 3 PD · 0 PGx |
| [dg-G02C-1](/ledger/dg-G02C-1) | <span class="badge b-finished">finished</span> | G02C | 9 drugs | 0.30 h | 1 popPK · 5 PD · 0 PGx |
| [dg-G02C-2](/ledger/dg-G02C-2) | <span class="badge b-finished">finished</span> | G02C | 8 drugs | 0.37 h | 3 popPK · 27 PD · 0 PGx |
| [dg-G03A-1](/ledger/dg-G03A-1) | <span class="badge b-finished">finished</span> | G03A | 14 drugs | 0.78 h | 2 popPK · 11 PD · 0 PGx |
| [dg-G03A-2](/ledger/dg-G03A-2) | <span class="badge b-finished">finished</span> | G03A | 14 drugs | 0.58 h | 1 popPK · 3 PD · 1 PGx |
| [dg-G03A-3](/ledger/dg-G03A-3) | <span class="badge b-finished">finished</span> | G03A | 13 drugs | 0.64 h | 1 popPK · 7 PD · 0 PGx |
| [dg-G03B](/ledger/dg-G03B) | <span class="badge b-finished">finished</span> | G03B | 4 drugs | 0.08 h | 1 popPK · 2 PD · 0 PGx |
| [dg-G03C](/ledger/dg-G03C) | <span class="badge b-finished">finished</span> | G03C | 13 drugs | 1.36 h | 0 popPK · 10 PD · 1 PGx |
| [dg-G03D+1](/ledger/dg-G03D_1) | <span class="badge b-finished">finished</span> | G03D, G03E | 13 drugs | 0.20 h | 1 popPK · 2 PD · 0 PGx |
| [dg-G03F-1](/ledger/dg-G03F-1) | <span class="badge b-finished">finished</span> | G03F | 11 drugs | 0.14 h | 0 popPK · 0 PD · 0 PGx |
| [dg-G03F-2](/ledger/dg-G03F-2) | <span class="badge b-finished">finished</span> | G03F | 11 drugs | 0.21 h | 0 popPK · 0 PD · 0 PGx |
| [dg-G03G](/ledger/dg-G03G) | <span class="badge b-finished">finished</span> | G03G | 14 drugs | 0.24 h | 1 popPK · 5 PD · 0 PGx |
| [dg-G03H+1](/ledger/dg-G03H_1) | <span class="badge b-finished">finished</span> | G03H, G03X | 10 drugs | 0.87 h | 1 popPK · 10 PD · 0 PGx |
| [dg-G04B-1](/ledger/dg-G04B-1) | <span class="badge b-finished">finished</span> | G04B | 15 drugs | 0.67 h | 11 popPK · 16 PD · 3 PGx |
| [dg-G04B-2](/ledger/dg-G04B-2) | <span class="badge b-finished">finished</span> | G04B | 14 drugs | 0.28 h | 9 popPK · 8 PD · 0 PGx |
| [dg-G04C](/ledger/dg-G04C) | <span class="badge b-finished">finished</span> | G04C | 14 drugs | 0.63 h | 2 popPK · 13 PD · 0 PGx |
| [dg-H01A](/ledger/dg-H01A) | <span class="badge b-finished">finished</span> | H01A | 13 drugs | 0.56 h | 2 popPK · 2 PD · 0 PGx |
| [dg-H01B](/ledger/dg-H01B) | <span class="badge b-finished">finished</span> | H01B | 7 drugs | 0.18 h | 1 popPK · 6 PD · 0 PGx |
| [dg-H01C](/ledger/dg-H01C) | <span class="badge b-finished">finished</span> | H01C | 14 drugs | 0.64 h | 3 popPK · 25 PD · 0 PGx |
| [dg-H02A](/ledger/dg-H02A) | <span class="badge b-finished">finished</span> | H02A | 12 drugs | 0.16 h | 3 popPK · 12 PD · 0 PGx |
| [dg-H02B+2](/ledger/dg-H02B_2) | <span class="badge b-finished">finished</span> | H02B, H02C, H03A | 11 drugs | 0.58 h | 11 popPK · 3 PD · 0 PGx |
| [dg-H03B](/ledger/dg-H03B) | <span class="badge b-finished">finished</span> | H03B | 9 drugs | 0.33 h | 2 popPK · 6 PD · 0 PGx |
| [dg-H04A+2](/ledger/dg-H04A_2) | <span class="badge b-finished">finished</span> | H04A, H05A, H05B | 16 drugs | 0.62 h | 4 popPK · 22 PD · 0 PGx |
| [dg-J01A+1](/ledger/dg-J01A_1) | <span class="badge b-finished">finished</span> | J01A, J01B | 13 drugs | 0.34 h | 13 popPK · 23 PD · 0 PGx |
| [dg-J01C-1](/ledger/dg-J01C-1) | <span class="badge b-finished">finished</span> | J01C | 15 drugs | 1.45 h | 18 popPK · 18 PD · 0 PGx |
| [dg-J01C-2](/ledger/dg-J01C-2) | <span class="badge b-finished">finished</span> | J01C | 15 drugs | 0.37 h | 13 popPK · 12 PD · 0 PGx |
| [dg-J01C-3](/ledger/dg-J01C-3) | <span class="badge b-finished">finished</span> | J01C | 14 drugs | 0.91 h | 19 popPK · 13 PD · 0 PGx |
| [dg-J01D-1](/ledger/dg-J01D-1) | <span class="badge b-finished">finished</span> | J01D | 16 drugs | 0.78 h | 17 popPK · 6 PD · 0 PGx |
| [dg-J01D-2](/ledger/dg-J01D-2) | <span class="badge b-finished">finished</span> | J01D | 16 drugs | 1.15 h | 26 popPK · 11 PD · 0 PGx |
| [dg-J01D-3](/ledger/dg-J01D-3) | <span class="badge b-finished">finished</span> | J01D | 16 drugs | 1.11 h | 18 popPK · 10 PD · 0 PGx |
| [dg-J01D-4](/ledger/dg-J01D-4) | <span class="badge b-finished">finished</span> | J01D | 16 drugs | 0.96 h | 13 popPK · 14 PD · 0 PGx |
| [dg-J01D-5](/ledger/dg-J01D-5) | <span class="badge b-finished">finished</span> | J01D | 16 drugs | 0.80 h | 29 popPK · 12 PD · 0 PGx |
| [dg-J01E-1](/ledger/dg-J01E-1) | <span class="badge b-finished">finished</span> | J01E | 14 drugs | 0.51 h | 12 popPK · 1 PD · 0 PGx |
| [dg-J01E-2](/ledger/dg-J01E-2) | <span class="badge b-finished">finished</span> | J01E | 14 drugs | 0.31 h | 5 popPK · 3 PD · 0 PGx |
| [dg-J01F-1](/ledger/dg-J01F-1) | <span class="badge b-finished">finished</span> | J01F | 9 drugs | 0.48 h | 8 popPK · 19 PD · 8 PGx |
| [dg-J01F-2](/ledger/dg-J01F-2) | <span class="badge b-finished">finished</span> | J01F | 8 drugs | 0.98 h | 3 popPK · 3 PD · 0 PGx |
| [dg-J01G](/ledger/dg-J01G) | <span class="badge b-finished">finished</span> | J01G | 10 drugs | 0.34 h | 16 popPK · 13 PD · 0 PGx |
| [dg-J01M-1](/ledger/dg-J01M-1) | <span class="badge b-finished">finished</span> | J01M | 16 drugs | 0.98 h | 64 popPK · 39 PD · 1 PGx |
| [dg-J01M-2](/ledger/dg-J01M-2) | <span class="badge b-finished">finished</span> | J01M | 15 drugs | 0.95 h | 21 popPK · 17 PD · 1 PGx |
| [dg-J01R-1](/ledger/dg-J01R-1) | <span class="badge b-finished">finished</span> | J01R | 11 drugs | 0.19 h | 0 popPK · 2 PD · 0 PGx |
| [dg-J01R-2](/ledger/dg-J01R-2) | <span class="badge b-finished">finished</span> | J01R | 10 drugs | 0.18 h | 0 popPK · 1 PD · 0 PGx |
| [dg-J01X-1](/ledger/dg-J01X-1) | <span class="badge b-finished">finished</span> | J01X | 9 drugs | 1.54 h | 15 popPK · 6 PD · 0 PGx |
| [dg-J01X-2](/ledger/dg-J01X-2) | <span class="badge b-finished">finished</span> | J01X | 9 drugs |  | 0 popPK · 0 PD · 0 PGx |
| [dg-J02A](/ledger/dg-J02A) | <span class="badge b-finished">finished</span> | J02A | 11 drugs | 1.14 h | 57 popPK · 17 PD · 0 PGx |
| [dg-J04A-1](/ledger/dg-J04A-1) | <span class="badge b-finished">finished</span> | J04A | 12 drugs | 1.35 h | 17 popPK · 10 PD · 0 PGx |
| [dg-J04A-2](/ledger/dg-J04A-2) | <span class="badge b-finished">finished</span> | J04A | 12 drugs | 1.18 h | 7 popPK · 12 PD · 0 PGx |
| [dg-J04A-3](/ledger/dg-J04A-3) | <span class="badge b-finished">finished</span> | J04A, J04B | 14 drugs | 0.81 h | 7 popPK · 25 PD · 0 PGx |
| [dg-J05A-1](/ledger/dg-J05A-1) | <span class="badge b-finished">finished</span> | J05A | 16 drugs | 1.27 h | 38 popPK · 15 PD · 70 PGx |
| [dg-J05A-2](/ledger/dg-J05A-2) | <span class="badge b-finished">finished</span> | J05A | 16 drugs | 1.15 h | 20 popPK · 10 PD · 1 PGx |
| [dg-J05A-3](/ledger/dg-J05A-3) | <span class="badge b-finished">finished</span> | J05A | 16 drugs | 1.11 h | 6 popPK · 13 PD · 0 PGx |
| [dg-J05A-4](/ledger/dg-J05A-4) | <span class="badge b-finished">finished</span> | J05A | 16 drugs | 3.00 h | 24 popPK · 21 PD · 0 PGx |
| [dg-J05A-5](/ledger/dg-J05A-5) | <span class="badge b-finished">finished</span> | J05A | 16 drugs | 0.98 h | 7 popPK · 10 PD · 0 PGx |
| [dg-J05A-6](/ledger/dg-J05A-6) | <span class="badge b-finished">finished</span> | J05A | 16 drugs | 1.73 h | 40 popPK · 37 PD · 3 PGx |
| [dg-J05A-7](/ledger/dg-J05A-7) | <span class="badge b-finished">finished</span> | J05A | 16 drugs | 1.75 h | 27 popPK · 36 PD · 6 PGx |
| [dg-J05A-8](/ledger/dg-J05A-8) | <span class="badge b-finished">finished</span> | J05A | 16 drugs | 0.53 h | 11 popPK · 25 PD · 1 PGx |
| [dg-J05A-9](/ledger/dg-J05A-9) | <span class="badge b-finished">finished</span> | J05A, J06A | 14 drugs | 1.13 h | 7 popPK · 17 PD · 0 PGx |
| [dg-J06B-1](/ledger/dg-J06B-1) | <span class="badge b-finished">finished</span> | J06B | 13 drugs | 0.33 h | 3 popPK · 6 PD · 0 PGx |
| [dg-J06B-2](/ledger/dg-J06B-2) | <span class="badge b-finished">finished</span> | J06B | 13 drugs | 0.26 h | 5 popPK · 1 PD · 0 PGx |
| [dg-J06B-3](/ledger/dg-J06B-3) | <span class="badge b-finished">finished</span> | J06B | 11 drugs | 0.35 h | 2 popPK · 4 PD · 0 PGx |
| [dg-J07A-1](/ledger/dg-J07A-1) | <span class="badge b-finished">finished</span> | J07A | 14 drugs | 0.42 h | 0 popPK · 0 PD · 0 PGx |
| [dg-J07A-2](/ledger/dg-J07A-2) | <span class="badge b-finished">finished</span> | J07A | 14 drugs | 0.11 h | 0 popPK · 0 PD · 0 PGx |
| [dg-J07A-3](/ledger/dg-J07A-3) | <span class="badge b-finished">finished</span> | J07A | 12 drugs | 0.69 h | 0 popPK · 2 PD · 0 PGx |
| [dg-J07B-1](/ledger/dg-J07B-1) | <span class="badge b-finished">finished</span> | J07B | 16 drugs | 0.38 h | 0 popPK · 2 PD · 0 PGx |
| [dg-J07B-2](/ledger/dg-J07B-2) | <span class="badge b-finished">finished</span> | J07B | 16 drugs | 0.46 h | 0 popPK · 0 PD · 0 PGx |
| [dg-J07B-3](/ledger/dg-J07B-3) | <span class="badge b-finished">finished</span> | J07B | 15 drugs | 0.43 h | 0 popPK · 0 PD · 0 PGx |
| [dg-J07C+1](/ledger/dg-J07C_1) | <span class="badge b-finished">finished</span> | J07C, J07X | 14 drugs | 0.23 h | 0 popPK · 0 PD · 0 PGx |
| [dg-L01A-1](/ledger/dg-L01A-1) | <span class="badge b-finished">finished</span> | L01A | 14 drugs | 1.59 h | 18 popPK · 30 PD · 3 PGx |
| [dg-L01A-2](/ledger/dg-L01A-2) | <span class="badge b-finished">finished</span> | L01A | 14 drugs | 0.38 h | 9 popPK · 1 PD · 0 PGx |
| [dg-L01B-1](/ledger/dg-L01B-1) | <span class="badge b-interrupted">interrupted</span> | L01B | 12 drugs | 0.99 h | 58 popPK · 33 PD · 73 PGx |
| [dg-L01B-2](/ledger/dg-L01B-2) | <span class="badge b-finished">finished</span> | L01B | 11 drugs | 0.93 h | 34 popPK · 28 PD · 25 PGx |
| [dg-L01C-1](/ledger/dg-L01C-1) | <span class="badge b-finished">finished</span> | L01C | 10 drugs | 0.95 h | 14 popPK · 7 PD · 1 PGx |
| [dg-L01C-2](/ledger/dg-L01C-2) | <span class="badge b-finished">finished</span> | L01C | 9 drugs | 2.00 h | 28 popPK · 41 PD · 1 PGx |
| [dg-L01D-1](/ledger/dg-L01D-1) | <span class="badge b-finished">finished</span> | L01D | 9 drugs | 2.52 h | 58 popPK · 49 PD · 1 PGx |
| [dg-L01D-2](/ledger/dg-L01D-2) | <span class="badge b-finished">finished</span> | L01D | 8 drugs | 1.39 h | 15 popPK · 13 PD · 0 PGx |
| [dg-L01E-1](/ledger/dg-L01E-1) | <span class="badge b-finished">finished</span> | L01E | 14 drugs | 2.21 h | 32 popPK · 125 PD · 0 PGx |
| [dg-L01E-2](/ledger/dg-L01E-2) | <span class="badge b-finished">finished</span> | L01E | 14 drugs | 1.20 h | 14 popPK · 41 PD · 0 PGx |
| [dg-L01E-3](/ledger/dg-L01E-3) | <span class="badge b-finished">finished</span> | L01E | 14 drugs | 1.69 h | 20 popPK · 31 PD · 0 PGx |
| [dg-L01E-4](/ledger/dg-L01E-4) | <span class="badge b-finished">finished</span> | L01E | 14 drugs | 0.82 h | 10 popPK · 59 PD · 0 PGx |
| [dg-L01E-5](/ledger/dg-L01E-5) | <span class="badge b-finished">finished</span> | L01E | 14 drugs | 0.96 h | 18 popPK · 68 PD · 3 PGx |
| [dg-L01E-6](/ledger/dg-L01E-6) | <span class="badge b-finished">finished</span> | L01E | 14 drugs | 1.55 h | 25 popPK · 37 PD · 1 PGx |
| [dg-L01E-7](/ledger/dg-L01E-7) | <span class="badge b-finished">finished</span> | L01E | 14 drugs | 0.77 h | 12 popPK · 19 PD · 0 PGx |
| [dg-L01F-1](/ledger/dg-L01F-1) | <span class="badge b-finished">finished</span> | L01F | 16 drugs | 1.27 h | 53 popPK · 110 PD · 0 PGx |
| [dg-L01F-2](/ledger/dg-L01F-2) | <span class="badge b-finished">finished</span> | L01F | 16 drugs | 0.48 h | 15 popPK · 54 PD · 0 PGx |
| [dg-L01F-3](/ledger/dg-L01F-3) | <span class="badge b-finished">finished</span> | L01F | 16 drugs | 0.44 h | 7 popPK · 15 PD · 0 PGx |
| [dg-L01F-4](/ledger/dg-L01F-4) | <span class="badge b-finished">finished</span> | L01F | 16 drugs | 2.50 h | 27 popPK · 26 PD · 0 PGx |
| [dg-L01F-5](/ledger/dg-L01F-5) | <span class="badge b-finished">finished</span> | L01F | 15 drugs | 1.38 h | 27 popPK · 25 PD · 0 PGx |
| [dg-L01X-1](/ledger/dg-L01X-1) | <span class="badge b-finished">finished</span> | L01X | 14 drugs | 0.02 h | 12 popPK · 8 PD · 1 PGx |
| [dg-L01X-2](/ledger/dg-L01X-2) | <span class="badge b-finished">finished</span> | L01X | 14 drugs | 1.96 h | 18 popPK · 35 PD · 0 PGx |
| [dg-L01X-3](/ledger/dg-L01X-3) | <span class="badge b-finished">finished</span> | L01X | 14 drugs | 0.15 h | 9 popPK · 25 PD · 0 PGx |
| [dg-L01X-4](/ledger/dg-L01X-4) | <span class="badge b-finished">finished</span> | L01X | 14 drugs | 0.58 h | 12 popPK · 15 PD · 0 PGx |
| [dg-L01X-5](/ledger/dg-L01X-5) | <span class="badge b-finished">finished</span> | L01X | 14 drugs | 0.28 h | 8 popPK · 4 PD · 0 PGx |
| [dg-L01X-6](/ledger/dg-L01X-6) | <span class="badge b-finished">finished</span> | L01X | 14 drugs | 0.24 h | 8 popPK · 7 PD · 0 PGx |
| [dg-L01X-7](/ledger/dg-L01X-7) | <span class="badge b-finished">finished</span> | L01X | 13 drugs | 0.80 h | 10 popPK · 25 PD · 0 PGx |
| [dg-L02A](/ledger/dg-L02A) | <span class="badge b-finished">finished</span> | L02A | 9 drugs | 0.23 h | 5 popPK · 7 PD · 0 PGx |
| [dg-L02B-1](/ledger/dg-L02B-1) | <span class="badge b-finished">finished</span> | L02B | 10 drugs | 0.34 h | 1 popPK · 3 PD · 0 PGx |
| [dg-L02B-2](/ledger/dg-L02B-2) | <span class="badge b-finished">finished</span> | L02B | 10 drugs | 0.39 h | 6 popPK · 15 PD · 5 PGx |
| [dg-L03A-1](/ledger/dg-L03A-1) | <span class="badge b-finished">finished</span> | L03A | 16 drugs | 1.02 h | 5 popPK · 6 PD · 0 PGx |
| [dg-L03A-2](/ledger/dg-L03A-2) | <span class="badge b-finished">finished</span> | L03A | 16 drugs | 0.68 h | 1 popPK · 5 PD · 0 PGx |
| [dg-L03A-3](/ledger/dg-L03A-3) | <span class="badge b-finished">finished</span> | L03A | 16 drugs | 0.52 h | 4 popPK · 21 PD · 0 PGx |
| [dg-L03A-4](/ledger/dg-L03A-4) | <span class="badge b-finished">finished</span> | L03A | 13 drugs | 0.37 h | 1 popPK · 11 PD · 0 PGx |
| [dg-L04A-1](/ledger/dg-L04A-1) | <span class="badge b-finished">finished</span> | L04A | 15 drugs | 0.47 h | 17 popPK · 32 PD · 53 PGx |
| [dg-L04A-2](/ledger/dg-L04A-2) | <span class="badge b-finished">finished</span> | L04A | 15 drugs | 0.57 h | 25 popPK · 20 PD · 0 PGx |
| [dg-L04A-3](/ledger/dg-L04A-3) | <span class="badge b-finished">finished</span> | L04A | 15 drugs | 0.48 h | 17 popPK · 25 PD · 1 PGx |
| [dg-L04A-4](/ledger/dg-L04A-4) | <span class="badge b-finished">finished</span> | L04A | 15 drugs | 0.21 h | 18 popPK · 30 PD · 0 PGx |
| [dg-L04A-5](/ledger/dg-L04A-5) | <span class="badge b-finished">finished</span> | L04A | 15 drugs | 0.32 h | 9 popPK · 20 PD · 0 PGx |
| [dg-L04A-6](/ledger/dg-L04A-6) | <span class="badge b-finished">finished</span> | L04A | 15 drugs | 0.39 h | 19 popPK · 28 PD · 0 PGx |
| [dg-L04A-7](/ledger/dg-L04A-7) | <span class="badge b-finished">finished</span> | L04A | 14 drugs | 0.62 h | 23 popPK · 55 PD · 0 PGx |
| [dg-M01A-1](/ledger/dg-M01A-1) | <span class="badge b-finished">finished</span> | M01A | 15 drugs | 0.28 h | 2 popPK · 5 PD · 1 PGx |
| [dg-M01A-2](/ledger/dg-M01A-2) | <span class="badge b-finished">finished</span> | M01A | 15 drugs | 0.22 h | 5 popPK · 10 PD · 0 PGx |
| [dg-M01A-3](/ledger/dg-M01A-3) | <span class="badge b-finished">finished</span> | M01A | 15 drugs | 1.48 h | 17 popPK · 31 PD · 0 PGx |
| [dg-M01A-4](/ledger/dg-M01A-4) | <span class="badge b-finished">finished</span> | M01A | 15 drugs | 0.88 h | 3 popPK · 23 PD · 0 PGx |
| [dg-M01A-5](/ledger/dg-M01A-5) | <span class="badge b-finished">finished</span> | M01A | 15 drugs | 0.36 h | 10 popPK · 12 PD · 0 PGx |
| [dg-M01B+1](/ledger/dg-M01B_1) | <span class="badge b-finished">finished</span> | M01B, M01C | 12 drugs | 0.46 h | 0 popPK · 7 PD · 0 PGx |
| [dg-M02A](/ledger/dg-M02A) | <span class="badge b-finished">finished</span> | M02A | 11 drugs | 0.17 h | 1 popPK · 0 PD · 0 PGx |
| [dg-M03A-1](/ledger/dg-M03A-1) | <span class="badge b-finished">finished</span> | M03A | 10 drugs | 0.70 h | 7 popPK · 38 PD · 0 PGx |
| [dg-M03A-2](/ledger/dg-M03A-2) | <span class="badge b-finished">finished</span> | M03A | 10 drugs | 1.35 h | 20 popPK · 61 PD · 3 PGx |
| [dg-M03B-1](/ledger/dg-M03B-1) | <span class="badge b-finished">finished</span> | M03B | 16 drugs | 0.70 h | 8 popPK · 10 PD · 0 PGx |
| [dg-M03B-2](/ledger/dg-M03B-2) | <span class="badge b-finished">finished</span> | M03B | 15 drugs | 0.51 h | 2 popPK · 6 PD · 0 PGx |
| [dg-M03C+1](/ledger/dg-M03C_1) | <span class="badge b-finished">finished</span> | M03C, M04A | 16 drugs | 0.68 h | 16 popPK · 30 PD · 17 PGx |
| [dg-M05B-1](/ledger/dg-M05B-1) | <span class="badge b-finished">finished</span> | M05B | 14 drugs | 0.60 h | 7 popPK · 9 PD · 0 PGx |
| [dg-M05B-2](/ledger/dg-M05B-2) | <span class="badge b-finished">finished</span> | M05B | 13 drugs | 0.19 h | 0 popPK · 19 PD · 0 PGx |
| [dg-M09A-1](/ledger/dg-M09A-1) | <span class="badge b-finished">finished</span> | M09A | 10 drugs | 0.06 h | 0 popPK · 1 PD · 0 PGx |
| [dg-M09A-2](/ledger/dg-M09A-2) | <span class="badge b-finished">finished</span> | M09A | 9 drugs | 0.23 h | 2 popPK · 0 PD · 0 PGx |
| [dg-N01A-1](/ledger/dg-N01A-1) | <span class="badge b-finished">finished</span> | N01A | 15 drugs | 2.05 h | 51 popPK · 59 PD · 1 PGx |
| [dg-N01A-2](/ledger/dg-N01A-2) | <span class="badge b-finished">finished</span> | N01A | 15 drugs | 1.48 h | 15 popPK · 34 PD · 0 PGx |
| [dg-N01B-1](/ledger/dg-N01B-1) | <span class="badge b-finished">finished</span> | N01B | 11 drugs | 0.69 h | 3 popPK · 24 PD · 0 PGx |
| [dg-N01B-2](/ledger/dg-N01B-2) | <span class="badge b-finished">finished</span> | N01B | 11 drugs | 0.77 h | 10 popPK · 20 PD · 0 PGx |
| [dg-N02A-1](/ledger/dg-N02A-1) | <span class="badge b-finished">finished</span> | N02A | 15 drugs | 0.61 h | 20 popPK · 18 PD · 10 PGx |
| [dg-N02A-2](/ledger/dg-N02A-2) | <span class="badge b-finished">finished</span> | N02A | 15 drugs | 0.39 h | 6 popPK · 2 PD · 0 PGx |
| [dg-N02A-3](/ledger/dg-N02A-3) | <span class="badge b-finished">finished</span> | N02A | 15 drugs | 0.80 h | 51 popPK · 27 PD · 1 PGx |
| [dg-N02A-4](/ledger/dg-N02A-4) | <span class="badge b-finished">finished</span> | N02A | 15 drugs | 0.46 h | 17 popPK · 11 PD · 2 PGx |
| [dg-N02B-1](/ledger/dg-N02B-1) | <span class="badge b-finished">finished</span> | N02B | 15 drugs | 0.50 h | 22 popPK · 17 PD · 1 PGx |
| [dg-N02B-2](/ledger/dg-N02B-2) | <span class="badge b-finished">finished</span> | N02B | 15 drugs | 0.45 h | 7 popPK · 13 PD · 2 PGx |
| [dg-N02B-3](/ledger/dg-N02B-3) | <span class="badge b-finished">finished</span> | N02B | 15 drugs | 0.94 h | 10 popPK · 13 PD · 1 PGx |
| [dg-N02B-4](/ledger/dg-N02B-4) | <span class="badge b-finished">finished</span> | N02B | 12 drugs | 0.15 h | 2 popPK · 1 PD · 0 PGx |
| [dg-N02C-1](/ledger/dg-N02C-1) | <span class="badge b-finished">finished</span> | N02C | 14 drugs | 0.36 h | 10 popPK · 13 PD · 0 PGx |
| [dg-N02C-2](/ledger/dg-N02C-2) | <span class="badge b-finished">finished</span> | N02C | 14 drugs | 0.34 h | 13 popPK · 20 PD · 1 PGx |
| [dg-N03A-1](/ledger/dg-N03A-1) | <span class="badge b-finished">finished</span> | N03A | 16 drugs | 1.11 h | 28 popPK · 29 PD · 24 PGx |
| [dg-N03A-2](/ledger/dg-N03A-2) | <span class="badge b-finished">finished</span> | N03A | 16 drugs | 0.60 h | 21 popPK · 21 PD · 4 PGx |
| [dg-N03A-3](/ledger/dg-N03A-3) | <span class="badge b-finished">finished</span> | N03A | 15 drugs | 0.96 h | 11 popPK · 19 PD · 0 PGx |
| [dg-N04;+1](/ledger/dg-N04__1) | <span class="badge b-finished">finished</span> | N04;, N04A | 15 drugs | 0.33 h | 1 popPK · 3 PD · 0 PGx |
| [dg-N04B-1](/ledger/dg-N04B-1) | <span class="badge b-finished">finished</span> | N04B | 12 drugs | 1.52 h | 8 popPK · 20 PD · 1 PGx |
| [dg-N04B-2](/ledger/dg-N04B-2) | <span class="badge b-finished">finished</span> | N04B, N04C | 12 drugs | 0.45 h | 7 popPK · 11 PD · 0 PGx |
| [dg-N05A-1](/ledger/dg-N05A-1) | <span class="badge b-finished">finished</span> | N05A | 15 drugs | 0.90 h | 30 popPK · 43 PD · 9 PGx |
| [dg-N05A-2](/ledger/dg-N05A-2) | <span class="badge b-finished">finished</span> | N05A | 15 drugs | 0.67 h | 15 popPK · 51 PD · 1 PGx |
| [dg-N05A-3](/ledger/dg-N05A-3) | <span class="badge b-finished">finished</span> | N05A | 15 drugs | 0.53 h | 11 popPK · 28 PD · 0 PGx |
| [dg-N05A-4](/ledger/dg-N05A-4) | <span class="badge b-finished">finished</span> | N05A | 15 drugs | 0.91 h | 13 popPK · 33 PD · 0 PGx |
| [dg-N05A-5](/ledger/dg-N05A-5) | <span class="badge b-finished">finished</span> | N05A | 11 drugs | 1.30 h | 4 popPK · 29 PD · 1 PGx |
| [dg-N05B-1](/ledger/dg-N05B-1) | <span class="badge b-finished">finished</span> | N05B | 13 drugs | 0.54 h | 22 popPK · 25 PD · 0 PGx |
| [dg-N05B-2](/ledger/dg-N05B-2) | <span class="badge b-finished">finished</span> | N05B | 13 drugs | 0.74 h | 6 popPK · 12 PD · 0 PGx |
| [dg-N05B-3](/ledger/dg-N05B-3) | <span class="badge b-finished">finished</span> | N05B | 13 drugs | 0.76 h | 8 popPK · 8 PD · 0 PGx |
| [dg-N05C-1](/ledger/dg-N05C-1) | <span class="badge b-finished">finished</span> | N05C | 15 drugs | 0.30 h | 2 popPK · 1 PD · 0 PGx |
| [dg-N05C-2](/ledger/dg-N05C-2) | <span class="badge b-finished">finished</span> | N05C | 15 drugs | 0.40 h | 11 popPK · 21 PD · 0 PGx |
| [dg-N05C-3](/ledger/dg-N05C-3) | <span class="badge b-finished">finished</span> | N05C | 15 drugs | 1.67 h | 45 popPK · 35 PD · 3 PGx |
| [dg-N05C-4](/ledger/dg-N05C-4) | <span class="badge b-finished">finished</span> | N05C | 15 drugs | 0.70 h | 14 popPK · 15 PD · 0 PGx |
| [dg-N05C-5](/ledger/dg-N05C-5) | <span class="badge b-finished">finished</span> | N05C | 11 drugs | 0.56 h | 12 popPK · 21 PD · 0 PGx |
| [dg-N06A-1](/ledger/dg-N06A-1) | <span class="badge b-finished">finished</span> | N06A | 14 drugs | 0.91 h | 8 popPK · 47 PD · 3 PGx |
| [dg-N06A-2](/ledger/dg-N06A-2) | <span class="badge b-finished">finished</span> | N06A | 14 drugs | 0.47 h | 14 popPK · 45 PD · 0 PGx |
| [dg-N06A-3](/ledger/dg-N06A-3) | <span class="badge b-finished">finished</span> | N06A | 14 drugs | 0.35 h | 2 popPK · 10 PD · 0 PGx |
| [dg-N06A-4](/ledger/dg-N06A-4) | <span class="badge b-finished">finished</span> | N06A | 14 drugs | 0.42 h | 13 popPK · 28 PD · 0 PGx |
| [dg-N06A-5](/ledger/dg-N06A-5) | <span class="badge b-finished">finished</span> | N06A | 10 drugs | 0.40 h | 6 popPK · 30 PD · 0 PGx |
| [dg-N06B-1](/ledger/dg-N06B-1) | <span class="badge b-finished">finished</span> | N06B | 13 drugs | 0.44 h | 7 popPK · 7 PD · 10 PGx |
| [dg-N06B-2](/ledger/dg-N06B-2) | <span class="badge b-finished">finished</span> | N06B | 13 drugs | 0.52 h | 6 popPK · 17 PD · 0 PGx |
| [dg-N06B-3](/ledger/dg-N06B-3) | <span class="badge b-finished">finished</span> | N06B, N06C | 15 drugs | 0.14 h | 3 popPK · 7 PD · 0 PGx |
| [dg-N06D](/ledger/dg-N06D) | <span class="badge b-finished">finished</span> | N06D | 15 drugs | 0.59 h | 11 popPK · 32 PD · 0 PGx |
| [dg-N07A](/ledger/dg-N07A) | <span class="badge b-finished">finished</span> | N07A | 10 drugs | 0.93 h | 1 popPK · 18 PD · 0 PGx |
| [dg-N07B](/ledger/dg-N07B) | <span class="badge b-finished">finished</span> | N07B | 14 drugs | 1.25 h | 12 popPK · 64 PD · 0 PGx |
| [dg-N07C](/ledger/dg-N07C) | <span class="badge b-finished">finished</span> | N07C | 5 drugs | 0.30 h | 0 popPK · 13 PD · 0 PGx |
| [dg-N07X-1](/ledger/dg-N07X-1) | <span class="badge b-finished">finished</span> | N07X | 13 drugs | 0.87 h | 6 popPK · 9 PD · 0 PGx |
| [dg-N07X-2](/ledger/dg-N07X-2) | <span class="badge b-finished">finished</span> | N07X, Not  | 13 drugs | 0.80 h | 7 popPK · 13 PD · 1 PGx |
| [dg-P01A-1](/ledger/dg-P01A-1) | <span class="badge b-finished">finished</span> | P01A | 14 drugs | 0.35 h | 0 popPK · 10 PD · 0 PGx |
| [dg-P01A-2](/ledger/dg-P01A-2) | <span class="badge b-finished">finished</span> | P01A | 13 drugs | 0.19 h | 1 popPK · 2 PD · 0 PGx |
| [dg-P01B-1](/ledger/dg-P01B-1) | <span class="badge b-finished">finished</span> | P01B | 12 drugs | 2.49 h | 15 popPK · 26 PD · 0 PGx |
| [dg-P01B-2](/ledger/dg-P01B-2) | <span class="badge b-finished">finished</span> | P01B | 12 drugs | 0.85 h | 22 popPK · 11 PD · 12 PGx |
| [dg-P01B-3](/ledger/dg-P01B-3) | <span class="badge b-finished">finished</span> | P01B | 12 drugs | 2.88 h | 31 popPK · 34 PD · 1 PGx |
| [dg-P01C](/ledger/dg-P01C) | <span class="badge b-finished">finished</span> | P01C | 11 drugs | 0.89 h | 17 popPK · 47 PD · 0 PGx |
| [dg-P02B](/ledger/dg-P02B) | <span class="badge b-finished">finished</span> | P02B | 7 drugs | 0.42 h | 7 popPK · 4 PD · 0 PGx |
| [dg-P02C](/ledger/dg-P02C) | <span class="badge b-finished">finished</span> | P02C | 15 drugs | 1.61 h | 22 popPK · 53 PD · 0 PGx |
| [dg-P02D](/ledger/dg-P02D) | <span class="badge b-finished">finished</span> | P02D | 3 drugs | 0.14 h | 1 popPK · 5 PD · 0 PGx |
| [dg-P03A-1](/ledger/dg-P03A-1) | <span class="badge b-finished">finished</span> | P03A | 11 drugs | 0.46 h | 0 popPK · 5 PD · 0 PGx |
| [dg-P03A-2](/ledger/dg-P03A-2) | <span class="badge b-finished">finished</span> | P03A | 11 drugs | 1.68 h | 1 popPK · 11 PD · 0 PGx |
| [dg-P03B](/ledger/dg-P03B) | <span class="badge b-finished">finished</span> | P03B | 10 drugs | 1.13 h | 3 popPK · 23 PD · 0 PGx |
| [dg-QI20](/ledger/dg-QI20) | <span class="badge b-finished">finished</span> | QI20 | 1 drugs | 0.00 h | 0 popPK · 0 PD · 0 PGx |
| [dg-R01A-1](/ledger/dg-R01A-1) | <span class="badge b-finished">finished</span> | R01A | 15 drugs | 0.28 h | 9 popPK · 15 PD · 0 PGx |
| [dg-R01A-2](/ledger/dg-R01A-2) | <span class="badge b-finished">finished</span> | R01A | 14 drugs | 0.19 h | 1 popPK · 1 PD · 0 PGx |
| [dg-R01B+1](/ledger/dg-R01B_1) | <span class="badge b-finished">finished</span> | R01B, R02A | 13 drugs | 0.49 h | 2 popPK · 12 PD · 0 PGx |
| [dg-R03A-1](/ledger/dg-R03A-1) | <span class="badge b-finished">finished</span> | R03A | 13 drugs | 0.59 h | 1 popPK · 17 PD · 0 PGx |
| [dg-R03A-2](/ledger/dg-R03A-2) | <span class="badge b-finished">finished</span> | R03A | 13 drugs | 0.52 h | 3 popPK · 9 PD · 0 PGx |
| [dg-R03A-3](/ledger/dg-R03A-3) | <span class="badge b-finished">finished</span> | R03A | 13 drugs | 0.98 h | 11 popPK · 48 PD · 0 PGx |
| [dg-R03A-4](/ledger/dg-R03A-4) | <span class="badge b-finished">finished</span> | R03A | 12 drugs | 0.65 h | 15 popPK · 24 PD · 0 PGx |
| [dg-R03B+1](/ledger/dg-R03B_1) | <span class="badge b-finished">finished</span> | R03B, R03C | 13 drugs | 0.58 h | 0 popPK · 0 PD · 0 PGx |
| [dg-R03D-1](/ledger/dg-R03D-1) | <span class="badge b-finished">finished</span> | R03D | 13 drugs | 1.11 h | 11 popPK · 3 PD · 0 PGx |
| [dg-R03D-2](/ledger/dg-R03D-2) | <span class="badge b-finished">finished</span> | R03D | 13 drugs | 0.25 h | 15 popPK · 17 PD · 0 PGx |
| [dg-R03D-3](/ledger/dg-R03D-3) | <span class="badge b-finished">finished</span> | R03D | 11 drugs | 0.24 h | 1 popPK · 6 PD · 0 PGx |
| [dg-R05C-1](/ledger/dg-R05C-1) | <span class="badge b-finished">finished</span> | R05C | 13 drugs | 0.55 h | 0 popPK · 8 PD · 0 PGx |
| [dg-R05C-2](/ledger/dg-R05C-2) | <span class="badge b-finished">finished</span> | R05C | 12 drugs | 0.19 h | 1 popPK · 2 PD · 0 PGx |
| [dg-R05D-1](/ledger/dg-R05D-1) | <span class="badge b-finished">finished</span> | R05D | 12 drugs | 0.11 h | 0 popPK · 0 PD · 0 PGx |
| [dg-R05D-2](/ledger/dg-R05D-2) | <span class="badge b-finished">finished</span> | R05D | 12 drugs | 0.18 h | 2 popPK · 1 PD · 0 PGx |
| [dg-R05D-3](/ledger/dg-R05D-3) | <span class="badge b-finished">finished</span> | R05D, R05F | 15 drugs | 0.11 h | 1 popPK · 1 PD · 0 PGx |
| [dg-R06A-1](/ledger/dg-R06A-1) | <span class="badge b-finished">finished</span> | R06A | 14 drugs | 0.36 h | 4 popPK · 8 PD · 0 PGx |
| [dg-R06A-2](/ledger/dg-R06A-2) | <span class="badge b-finished">finished</span> | R06A | 14 drugs | 0.35 h | 2 popPK · 4 PD · 0 PGx |
| [dg-R06A-3](/ledger/dg-R06A-3) | <span class="badge b-finished">finished</span> | R06A | 14 drugs | 0.66 h | 5 popPK · 10 PD · 0 PGx |
| [dg-R06A-4](/ledger/dg-R06A-4) | <span class="badge b-finished">finished</span> | R06A | 14 drugs | 0.34 h | 3 popPK · 4 PD · 0 PGx |
| [dg-R06A-5](/ledger/dg-R06A-5) | <span class="badge b-finished">finished</span> | R06A | 13 drugs | 0.21 h | 3 popPK · 9 PD · 0 PGx |
| [dg-R07A-1](/ledger/dg-R07A-1) | <span class="badge b-finished">finished</span> | R07A | 12 drugs | 0.53 h | 4 popPK · 1 PD · 0 PGx |
| [dg-R07A-2](/ledger/dg-R07A-2) | <span class="badge b-finished">finished</span> | R07A | 11 drugs | 0.75 h | 2 popPK · 4 PD · 0 PGx |
| [dg-RX-OA-01](/ledger/dg-RX-OA-01) | <span class="badge b-finished">finished</span> |  | 11 drugs | 0.71 h | 24 popPK · 28 PD · 0 PGx |
| [dg-RX-OA-02](/ledger/dg-RX-OA-02) | <span class="badge b-finished">finished</span> |  | 12 drugs | 0.32 h | 5 popPK · 4 PD · 0 PGx |
| [dg-RX-OA-03](/ledger/dg-RX-OA-03) | <span class="badge b-finished">finished</span> |  | 12 drugs | 0.47 h | 8 popPK · 29 PD · 1 PGx |
| [dg-RX-OA-04](/ledger/dg-RX-OA-04) | <span class="badge b-finished">finished</span> |  | 12 drugs | 0.69 h | 5 popPK · 9 PD · 0 PGx |
| [dg-RX-OA-05](/ledger/dg-RX-OA-05) | <span class="badge b-finished">finished</span> |  | 12 drugs | 0.38 h | 8 popPK · 7 PD · 0 PGx |
| [dg-RX-OA-06](/ledger/dg-RX-OA-06) | <span class="badge b-finished">finished</span> |  | 12 drugs | 0.51 h | 30 popPK · 14 PD · 3 PGx |
| [dg-RX-OA-07](/ledger/dg-RX-OA-07) | <span class="badge b-finished">finished</span> |  | 12 drugs | 1.68 h | 8 popPK · 24 PD · 0 PGx |
| [dg-RX-OA-08](/ledger/dg-RX-OA-08) | <span class="badge b-finished">finished</span> |  | 12 drugs | 1.56 h | 27 popPK · 18 PD · 4 PGx |
| [dg-RX-OA-09](/ledger/dg-RX-OA-09) | <span class="badge b-finished">finished</span> |  | 12 drugs | 1.52 h | 31 popPK · 51 PD · 2 PGx |
| [dg-RX-OA-10](/ledger/dg-RX-OA-10) | <span class="badge b-finished">finished</span> |  | 12 drugs | 0.34 h | 7 popPK · 16 PD · 0 PGx |
| [dg-S01A-1](/ledger/dg-S01A-1) | <span class="badge b-finished">finished</span> | S01A | 10 drugs | 0.22 h | 0 popPK · 11 PD · 0 PGx |
| [dg-S01A-2](/ledger/dg-S01A-2) | <span class="badge b-finished">finished</span> | S01A | 10 drugs | 0.58 h | 0 popPK · 1 PD · 0 PGx |
| [dg-S01B](/ledger/dg-S01B) | <span class="badge b-finished">finished</span> | S01B | 10 drugs | 0.06 h | 0 popPK · 0 PD · 0 PGx |
| [dg-S01C](/ledger/dg-S01C) | <span class="badge b-finished">finished</span> | S01C | 15 drugs | 0.03 h | 0 popPK · 0 PD · 0 PGx |
| [dg-S01E-1](/ledger/dg-S01E-1) | <span class="badge b-finished">finished</span> | S01E | 13 drugs | 0.35 h | 0 popPK · 9 PD · 0 PGx |
| [dg-S01E-2](/ledger/dg-S01E-2) | <span class="badge b-finished">finished</span> | S01E | 13 drugs | 0.33 h | 0 popPK · 2 PD · 0 PGx |
| [dg-S01E-3](/ledger/dg-S01E-3) | <span class="badge b-finished">finished</span> | S01E | 11 drugs | 0.46 h | 1 popPK · 9 PD · 0 PGx |
| [dg-S01F+1](/ledger/dg-S01F_1) | <span class="badge b-finished">finished</span> | S01F, S01G | 13 drugs | 0.09 h | 0 popPK · 0 PD · 0 PGx |
| [dg-S01H+3](/ledger/dg-S01H_3) | <span class="badge b-finished">finished</span> | S01H, S01J, S01K, S01L | 15 drugs | 0.45 h | 18 popPK · 7 PD · 0 PGx |
| [dg-S01X](/ledger/dg-S01X) | <span class="badge b-finished">finished</span> | S01X | 15 drugs | 0.30 h | 0 popPK · 2 PD · 0 PGx |
| [dg-S02A+1](/ledger/dg-S02A_1) | <span class="badge b-finished">finished</span> | S02A, S02C | 5 drugs | 0.42 h | 1 popPK · 6 PD · 0 PGx |
| [dg-V01A](/ledger/dg-V01A) | <span class="badge b-finished">finished</span> | V01A | 10 drugs | 0.63 h | 0 popPK · 6 PD · 0 PGx |
| [dg-V03A-1](/ledger/dg-V03A-1) | <span class="badge b-finished">finished</span> | V03A | 15 drugs | 0.47 h | 1 popPK · 8 PD · 0 PGx |
| [dg-V03A-2](/ledger/dg-V03A-2) | <span class="badge b-finished">finished</span> | V03A | 15 drugs | 1.41 h | 6 popPK · 13 PD · 0 PGx |
| [dg-V03A-3](/ledger/dg-V03A-3) | <span class="badge b-finished">finished</span> | V03A | 15 drugs | 0.52 h | 4 popPK · 6 PD · 0 PGx |
| [dg-V03A-4](/ledger/dg-V03A-4) | <span class="badge b-finished">finished</span> | V03A | 12 drugs | 1.07 h | 12 popPK · 17 PD · 0 PGx |
| [dg-V04C-1](/ledger/dg-V04C-1) | <span class="badge b-finished">finished</span> | V04C | 14 drugs | 0.93 h | 4 popPK · 1 PD · 0 PGx |
| [dg-V04C-2](/ledger/dg-V04C-2) | <span class="badge b-finished">finished</span> | V04C | 14 drugs | 2.53 h | 7 popPK · 9 PD · 0 PGx |
| [dg-V04C-3](/ledger/dg-V04C-3) | <span class="badge b-finished">finished</span> | V04C, V06D | 13 drugs | 1.50 h | 4 popPK · 10 PD · 0 PGx |
| [dg-V08A-1](/ledger/dg-V08A-1) | <span class="badge b-finished">finished</span> | V08A | 12 drugs | 0.19 h | 1 popPK · 2 PD · 0 PGx |
| [dg-V08A-2](/ledger/dg-V08A-2) | <span class="badge b-finished">finished</span> | V08A | 12 drugs | 1.48 h | 16 popPK · 0 PD · 0 PGx |
| [dg-V08A-3](/ledger/dg-V08A-3) | <span class="badge b-finished">finished</span> | V08A, V08B | 15 drugs | 0.30 h | 1 popPK · 1 PD · 0 PGx |
| [dg-V08C-1](/ledger/dg-V08C-1) | <span class="badge b-finished">finished</span> | V08C | 9 drugs | 0.73 h | 6 popPK · 2 PD · 0 PGx |
| [dg-V08C-2](/ledger/dg-V08C-2) | <span class="badge b-finished">finished</span> | V08C, V08D | 14 drugs | 0.88 h | 4 popPK · 11 PD · 0 PGx |
| [dg-V09A](/ledger/dg-V09A) | <span class="badge b-finished">finished</span> | V09A | 12 drugs | 0.38 h | 0 popPK · 0 PD · 0 PGx |
| [dg-V09B+1](/ledger/dg-V09B_1) | <span class="badge b-finished">finished</span> | V09B, V09C | 14 drugs | 0.45 h | 1 popPK · 0 PD · 0 PGx |
| [dg-V09D](/ledger/dg-V09D) | <span class="badge b-finished">finished</span> | V09D | 13 drugs | 0.27 h | 0 popPK · 1 PD · 0 PGx |
| [dg-V09E+1](/ledger/dg-V09E_1) | <span class="badge b-finished">finished</span> | V09E, V09F | 10 drugs | 0.56 h | 3 popPK · 2 PD · 0 PGx |
| [dg-V09G](/ledger/dg-V09G) | <span class="badge b-finished">finished</span> | V09G | 15 drugs | 0.45 h | 1 popPK · 1 PD · 0 PGx |
| [dg-V09H](/ledger/dg-V09H) | <span class="badge b-finished">finished</span> | V09H | 8 drugs | 0.12 h | 0 popPK · 0 PD · 0 PGx |
| [dg-V09I-1](/ledger/dg-V09I-1) | <span class="badge b-finished">finished</span> | V09I | 13 drugs | 0.47 h | 0 popPK · 0 PD · 0 PGx |
| [dg-V09I-2](/ledger/dg-V09I-2) | <span class="badge b-finished">finished</span> | V09I | 13 drugs | 1.06 h | 2 popPK · 0 PD · 0 PGx |
| [dg-V09I-3](/ledger/dg-V09I-3) | <span class="badge b-finished">finished</span> | V09I | 11 drugs | 0.13 h | 0 popPK · 0 PD · 0 PGx |
| [dg-V09X+1](/ledger/dg-V09X_1) | <span class="badge b-finished">finished</span> | V09X, V10A | 16 drugs | 0.23 h | 0 popPK · 0 PD · 0 PGx |
| [dg-V10B+1](/ledger/dg-V10B_1) | <span class="badge b-finished">finished</span> | V10B, V10X | 13 drugs | 0.34 h | 7 popPK · 0 PD · 0 PGx |
| [tg-AIR-10](/ledger/tg-AIR-10) | <span class="badge b-finished">finished</span> |  | 2 drugs | 6.26 h | 0 popPK · 0 PD · 0 PGx |
| [tg-AIR-11](/ledger/tg-AIR-11) | <span class="badge b-finished">finished</span> |  | 3 drugs | 3.64 h | 3 popPK · 0 PD · 0 PGx |
| [tg-AIR-12](/ledger/tg-AIR-12) | <span class="badge b-finished">finished</span> |  | 1 drugs | 6.05 h | 0 popPK · 0 PD · 0 PGx |
| [tg-AIR-3](/ledger/tg-AIR-3) | <span class="badge b-finished">finished</span> |  | 1 drugs | 4.12 h | 0 popPK · 0 PD · 0 PGx |
| [tg-AIR-7](/ledger/tg-AIR-7) | <span class="badge b-finished">finished</span> |  | 4 drugs | 1.95 h | 1 popPK · 1 PD · 0 PGx |
| [tg-AIR-9](/ledger/tg-AIR-9) | <span class="badge b-finished">finished</span> |  | 1 drugs | 2.74 h | 0 popPK · 0 PD · 0 PGx |
| [tg-ANIM-1](/ledger/tg-ANIM-1) | <span class="badge b-finished">finished</span> |  | 5 drugs | 9.53 h | 0 popPK · 2 PD · 0 PGx |
| [tg-ANIM-2](/ledger/tg-ANIM-2) | <span class="badge b-finished">finished</span> |  | 6 drugs | 12.13 h | 1 popPK · 1 PD · 0 PGx |
| [tg-ANIM-3](/ledger/tg-ANIM-3) | <span class="badge b-finished">finished</span> |  | 10 drugs | 6.58 h | 1 popPK · 1 PD · 1 PGx |
| [tg-ANIM-4](/ledger/tg-ANIM-4) | <span class="badge b-finished">finished</span> |  | 8 drugs | 0.86 h | 0 popPK · 8 PD · 1 PGx |
| [tg-ANIM-5](/ledger/tg-ANIM-5) | <span class="badge b-finished">finished</span> |  | 12 drugs | 6.40 h | 3 popPK · 11 PD · 0 PGx |
| [tg-ANIM-6](/ledger/tg-ANIM-6) | <span class="badge b-finished">finished</span> |  | 4 drugs | 4.07 h | 2 popPK · 4 PD · 0 PGx |
| [tg-ANIM-7](/ledger/tg-ANIM-7) | <span class="badge b-finished">finished</span> |  | 3 drugs | 0.24 h | 0 popPK · 0 PD · 0 PGx |
| [tg-ANIM-8](/ledger/tg-ANIM-8) | <span class="badge b-finished">finished</span> |  | 7 drugs | 10.79 h | 2 popPK · 8 PD · 0 PGx |
| [tg-ANIM-9](/ledger/tg-ANIM-9) | <span class="badge b-finished">finished</span> |  | 7 drugs | 10.50 h | 1 popPK · 2 PD · 0 PGx |
| [tg-BACT-1](/ledger/tg-BACT-1) | <span class="badge b-finished">finished</span> |  | 1 drugs |  | 0 popPK · 1 PD · 0 PGx |
| [tg-BACT-2](/ledger/tg-BACT-2) | <span class="badge b-finished">finished</span> |  | 1 drugs | 0.00 h | 0 popPK · 0 PD · 0 PGx |
| [tg-CIG-1](/ledger/tg-CIG-1) | <span class="badge b-finished">finished</span> |  | 8 drugs |  | 0 popPK · 11 PD · 0 PGx |
| [tg-CIG-2](/ledger/tg-CIG-2) | <span class="badge b-finished">finished</span> |  | 6 drugs |  | 0 popPK · 3 PD · 0 PGx |
| [tg-DRUG-1](/ledger/tg-DRUG-1) | <span class="badge b-finished">finished</span> |  | 26 drugs | 8.72 h | 70 popPK · 72 PD · 47 PGx |
| [tg-DRUG-10](/ledger/tg-DRUG-10) | <span class="badge b-finished">finished</span> |  | 29 drugs |  | 15 popPK · 31 PD · 2 PGx |
| [tg-DRUG-11](/ledger/tg-DRUG-11) | <span class="badge b-finished">finished</span> |  | 27 drugs | 18.08 h | 31 popPK · 86 PD · 0 PGx |
| [tg-DRUG-12](/ledger/tg-DRUG-12) | <span class="badge b-finished">finished</span> |  | 28 drugs | 12.07 h | 68 popPK · 92 PD · 12 PGx |
| [tg-DRUG-13](/ledger/tg-DRUG-13) | <span class="badge b-finished">finished</span> |  | 28 drugs |  | 45 popPK · 85 PD · 4 PGx |
| [tg-DRUG-2](/ledger/tg-DRUG-2) | <span class="badge b-finished">finished</span> |  | 29 drugs |  | 70 popPK · 69 PD · 108 PGx |
| [tg-DRUG-3](/ledger/tg-DRUG-3) | <span class="badge b-finished">finished</span> |  | 26 drugs | 14.18 h | 84 popPK · 80 PD · 11 PGx |
| [tg-DRUG-4](/ledger/tg-DRUG-4) | <span class="badge b-finished">finished</span> |  | 28 drugs | 24.98 h | 49 popPK · 103 PD · 6 PGx |
| [tg-DRUG-5](/ledger/tg-DRUG-5) | <span class="badge b-finished">finished</span> |  | 29 drugs | 16.01 h | 78 popPK · 74 PD · 1 PGx |
| [tg-DRUG-6](/ledger/tg-DRUG-6) | <span class="badge b-finished">finished</span> |  | 28 drugs | 3.25 h | 85 popPK · 97 PD · 45 PGx |
| [tg-DRUG-7](/ledger/tg-DRUG-7) | <span class="badge b-finished">finished</span> |  | 29 drugs | 15.26 h | 40 popPK · 64 PD · 1 PGx |
| [tg-DRUG-8](/ledger/tg-DRUG-8) | <span class="badge b-finished">finished</span> |  | 27 drugs | 13.78 h | 94 popPK · 88 PD · 13 PGx |
| [tg-DRUG-9](/ledger/tg-DRUG-9) | <span class="badge b-finished">finished</span> |  | 27 drugs | 21.23 h | 45 popPK · 57 PD · 0 PGx |
| [tg-FOOD-1](/ledger/tg-FOOD-1) | <span class="badge b-finished">finished</span> |  | 2 drugs | 5.24 h | 0 popPK · 0 PD · 0 PGx |
| [tg-FOOD-10](/ledger/tg-FOOD-10) | <span class="badge b-finished">finished</span> |  | 9 drugs | 14.79 h | 59 popPK · 30 PD · 5 PGx |
| [tg-FOOD-11](/ledger/tg-FOOD-11) | <span class="badge b-finished">finished</span> |  | 9 drugs | 7.46 h | 3 popPK · 10 PD · 0 PGx |
| [tg-FOOD-12](/ledger/tg-FOOD-12) | <span class="badge b-finished">finished</span> |  | 15 drugs | 13.13 h | 24 popPK · 68 PD · 0 PGx |
| [tg-FOOD-13](/ledger/tg-FOOD-13) | <span class="badge b-finished">finished</span> |  | 7 drugs | 11.69 h | 9 popPK · 16 PD · 0 PGx |
| [tg-FOOD-14](/ledger/tg-FOOD-14) | <span class="badge b-finished">finished</span> |  | 12 drugs | 10.84 h | 8 popPK · 18 PD · 0 PGx |
| [tg-FOOD-2](/ledger/tg-FOOD-2) | <span class="badge b-finished">finished</span> |  | 5 drugs | 2.14 h | 0 popPK · 2 PD · 1 PGx |
| [tg-FOOD-3](/ledger/tg-FOOD-3) | <span class="badge b-finished">finished</span> |  | 11 drugs | 12.71 h | 8 popPK · 21 PD · 8 PGx |
| [tg-FOOD-4](/ledger/tg-FOOD-4) | <span class="badge b-finished">finished</span> |  | 13 drugs | 11.78 h | 10 popPK · 26 PD · 8 PGx |
| [tg-FOOD-5](/ledger/tg-FOOD-5) | <span class="badge b-finished">finished</span> |  | 12 drugs | 11.67 h | 15 popPK · 36 PD · 9 PGx |
| [tg-FOOD-6](/ledger/tg-FOOD-6) | <span class="badge b-finished">finished</span> |  | 4 drugs | 6.95 h | 14 popPK · 13 PD · 0 PGx |
| [tg-FOOD-7](/ledger/tg-FOOD-7) | <span class="badge b-finished">finished</span> |  | 14 drugs | 9.66 h | 21 popPK · 31 PD · 0 PGx |
| [tg-FOOD-8](/ledger/tg-FOOD-8) | <span class="badge b-finished">finished</span> |  | 18 drugs | 12.40 h | 48 popPK · 44 PD · 19 PGx |
| [tg-FOOD-9](/ledger/tg-FOOD-9) | <span class="badge b-finished">finished</span> |  | 7 drugs | 8.42 h | 2 popPK · 7 PD · 0 PGx |
| [tg-FUNG-2](/ledger/tg-FUNG-2) | <span class="badge b-finished">finished</span> |  | 2 drugs | 8.35 h | 0 popPK · 0 PD · 0 PGx |
| [tg-FUNG-3](/ledger/tg-FUNG-3) | <span class="badge b-finished">finished</span> |  | 4 drugs | 7.62 h | 1 popPK · 5 PD · 2 PGx |
| [tg-FUNG-4](/ledger/tg-FUNG-4) | <span class="badge b-finished">finished</span> |  | 3 drugs | 3.02 h | 0 popPK · 0 PD · 0 PGx |
| [tg-FUNG-5](/ledger/tg-FUNG-5) | <span class="badge b-finished">finished</span> |  | 2 drugs | 6.27 h | 1 popPK · 3 PD · 0 PGx |
| [tg-FUNG-6](/ledger/tg-FUNG-6) | <span class="badge b-finished">finished</span> |  | 2 drugs | 6.93 h | 13 popPK · 7 PD · 6 PGx |
| [tg-HOUS-1](/ledger/tg-HOUS-1) | <span class="badge b-finished">finished</span> |  | 6 drugs | 2.26 h | 0 popPK · 0 PD · 0 PGx |
| [tg-HOUS-2](/ledger/tg-HOUS-2) | <span class="badge b-finished">finished</span> |  | 3 drugs | 5.60 h | 0 popPK · 0 PD · 0 PGx |
| [tg-HOUS-3](/ledger/tg-HOUS-3) | <span class="badge b-finished">finished</span> |  | 11 drugs | 10.29 h | 5 popPK · 1 PD · 0 PGx |
| [tg-HOUS-4](/ledger/tg-HOUS-4) | <span class="badge b-finished">finished</span> |  | 5 drugs | 1.50 h | 0 popPK · 2 PD · 0 PGx |
| [tg-IND-1](/ledger/tg-IND-1) | <span class="badge b-finished">finished</span> |  | 2 drugs | 3.96 h | 0 popPK · 0 PD · 0 PGx |
| [tg-IND-10](/ledger/tg-IND-10) | <span class="badge b-finished">finished</span> |  | 2 drugs | 4.80 h | 0 popPK · 0 PD · 0 PGx |
| [tg-IND-11](/ledger/tg-IND-11) | <span class="badge b-finished">finished</span> |  | 1 drugs | 0.84 h | 0 popPK · 0 PD · 0 PGx |
| [tg-IND-12](/ledger/tg-IND-12) | <span class="badge b-finished">finished</span> |  | 1 drugs | 5.28 h | 0 popPK · 0 PD · 0 PGx |
| [tg-IND-13](/ledger/tg-IND-13) | <span class="badge b-finished">finished</span> |  | 3 drugs | 5.11 h | 0 popPK · 0 PD · 0 PGx |
| [tg-IND-14](/ledger/tg-IND-14) | <span class="badge b-finished">finished</span> |  | 1 drugs | 0.98 h | 0 popPK · 0 PD · 0 PGx |
| [tg-IND-15](/ledger/tg-IND-15) | <span class="badge b-finished">finished</span> |  | 4 drugs | 3.42 h | 0 popPK · 8 PD · 0 PGx |
| [tg-IND-16](/ledger/tg-IND-16) | <span class="badge b-finished">finished</span> |  | 1 drugs | 2.31 h | 0 popPK · 0 PD · 0 PGx |
| [tg-IND-17](/ledger/tg-IND-17) | <span class="badge b-finished">finished</span> |  | 1 drugs | 1.15 h | 0 popPK · 0 PD · 0 PGx |
| [tg-IND-19](/ledger/tg-IND-19) | <span class="badge b-finished">finished</span> |  | 2 drugs | 2.53 h | 0 popPK · 0 PD · 0 PGx |
| [tg-IND-6](/ledger/tg-IND-6) | <span class="badge b-finished">finished</span> |  | 2 drugs | 3.26 h | 0 popPK · 0 PD · 0 PGx |
| [tg-IND-7](/ledger/tg-IND-7) | <span class="badge b-finished">finished</span> |  | 2 drugs | 1.90 h | 0 popPK · 0 PD · 0 PGx |
| [tg-IND-8](/ledger/tg-IND-8) | <span class="badge b-finished">finished</span> |  | 1 drugs | 0.44 h | 0 popPK · 3 PD · 0 PGx |
| [tg-PEST-11](/ledger/tg-PEST-11) | <span class="badge b-finished">finished</span> |  | 3 drugs | 2.98 h | 0 popPK · 0 PD · 0 PGx |
| [tg-PEST-14](/ledger/tg-PEST-14) | <span class="badge b-finished">finished</span> |  | 5 drugs | 3.35 h | 0 popPK · 0 PD · 0 PGx |
| [ttd](/ledger/ttd) | <span class="badge b-finished">finished</span> |  | 2 drugs | 5.79 h | 0 popPK · 0 PD · 0 PGx |

<sub>The pooled [full-text requests](/ledger/wanted) list 10999 paper(s) a reader could still retrieve by hand.</sub>
<!-- bench:start -->

### Model benchmark <sub>ddd panel, curated truth · 3 runs · latest 2026-11-22</sub>

<p class="pnote">Each model reads the 17 curated ddd papers twice: with the staged scholar (screen → locate → transcribe → interpret → validate) and with the naive scholar (one LLM call per paper). Counts, accuracy, precision and F1 are for the staged scholar, pooled over popPK, PD and PGx (the three domains&#x27; TP/FP/FN/TN summed); naive F1 is pooled the same way. Trend: the staged F1 over the runs, with ▲ up, ▼ down or ▬ the same as the previous run (within ±0.03 it counts as the same). Time and tokens are the staged run&#x27;s. Table rows differ in load (4 models ran at once, e-INFRA rate limits included in the time).</p>

<div class="scroll"><table><thead><tr><th>model</th><th>TP</th><th>FP</th><th>FN</th><th>TN</th><th title="accuracy">acc.</th><th title="precision">prec.</th><th>F1</th><th>naive F1</th><th>trend</th><th>time</th><th title="input tokens">i.tok.</th><th title="output tokens">o.tok.</th></tr></thead><tbody><tr><th scope="row">qwen3.8-27b</th><td class="n ok">177</td><td class="n bad">6</td><td class="n bad">12</td><td class="n">183</td><td class="n">0.952</td><td class="n">0.967</td><td class="n"><b>0.952</b></td><td class="n">0.627</td><td class="n"><span class="ok" title="up: +0.036 F1 against the previous run"><svg width="84" height="18" viewBox="0 0 84 18" role="img" aria-label="F1 over the last 3 runs"><polyline fill="none" stroke="currentColor" stroke-width="1.5" points="2.0,6.3 42.0,11.7 82.0,6.6"/><circle cx="82.0" cy="6.6" r="2" fill="currentColor"/></svg> ▲</span></td><td class="n">0:16 h</td><td class="n">667k</td><td class="n">65k</td></tr><tr><th scope="row">deepseek-v4.1-flash</th><td class="n ok">179</td><td class="n bad">13</td><td class="n bad">10</td><td class="n">184</td><td class="n">0.940</td><td class="n">0.932</td><td class="n"><b>0.940</b></td><td class="n">0.598</td><td class="n"><span class="ok" title="up: +0.099 F1 against the previous run"><svg width="84" height="18" viewBox="0 0 84 18" role="img" aria-label="F1 over the last 3 runs"><polyline fill="none" stroke="currentColor" stroke-width="1.5" points="2.0,5.3 42.0,16.0 82.0,2.0"/><circle cx="82.0" cy="2.0" r="2" fill="currentColor"/></svg> ▲</span></td><td class="n">2:24 h</td><td class="n">642k</td><td class="n">677k</td></tr><tr><th scope="row">qwen3.8-flash-next</th><td class="n ok">163</td><td class="n bad">3</td><td class="n bad">26</td><td class="n">184</td><td class="n">0.923</td><td class="n">0.982</td><td class="n"><b>0.918</b></td><td class="n">0.686</td><td class="n"><span class="mut" title="same: +0.021 F1 against the previous run"><svg width="84" height="18" viewBox="0 0 84 18" role="img" aria-label="F1 over the last 3 runs"><polyline fill="none" stroke="currentColor" stroke-width="1.5" points="2.0,12.4 42.0,8.5 82.0,5.6"/><circle cx="82.0" cy="5.6" r="2" fill="currentColor"/></svg> ▬</span></td><td class="n">0:19 h</td><td class="n">662k</td><td class="n">50k</td></tr><tr><th scope="row">glm-5.3-flash</th><td class="n ok">161</td><td class="n bad">8</td><td class="n bad">28</td><td class="n">184</td><td class="n">0.906</td><td class="n">0.953</td><td class="n"><b>0.899</b></td><td class="n">0.530</td><td class="n"><span class="mut" title="same: -0.004 F1 against the previous run"><svg width="84" height="18" viewBox="0 0 84 18" role="img" aria-label="F1 over the last 3 runs"><polyline fill="none" stroke="currentColor" stroke-width="1.5" points="2.0,9.4 42.0,8.6 82.0,9.1"/><circle cx="82.0" cy="9.1" r="2" fill="currentColor"/></svg> ▬</span></td><td class="n">4:51 h</td><td class="n">661k</td><td class="n">769k</td></tr><tr><th scope="row">kimi-k3.1-pro</th><td class="n ok">156</td><td class="n bad">5</td><td class="n bad">33</td><td class="n">184</td><td class="n">0.899</td><td class="n">0.969</td><td class="n"><b>0.891</b></td><td class="n">0.644</td><td class="n"><span class="ok" title="up: +0.189 F1 against the previous run"><svg width="84" height="18" viewBox="0 0 84 18" role="img" aria-label="F1 over the last 3 runs"><polyline fill="none" stroke="currentColor" stroke-width="1.5" points="2.0,4.4 42.0,16.0 82.0,2.0"/><circle cx="82.0" cy="2.0" r="2" fill="currentColor"/></svg> ▲</span></td><td class="n">1:11 h</td><td class="n">668k</td><td class="n">46k</td></tr><tr><th scope="row">gpt-oss-120b</th><td class="n ok">148</td><td class="n bad">17</td><td class="n bad">41</td><td class="n">184</td><td class="n">0.851</td><td class="n">0.897</td><td class="n"><b>0.836</b></td><td class="n">0.491</td><td class="n"><span class="mut" title="same: +0.016 F1 against the previous run"><svg width="84" height="18" viewBox="0 0 84 18" role="img" aria-label="F1 over the last 3 runs"><polyline fill="none" stroke="currentColor" stroke-width="1.5" points="2.0,4.0 42.0,14.0 82.0,11.7"/><circle cx="82.0" cy="11.7" r="2" fill="currentColor"/></svg> ▬</span></td><td class="n">0:36 h</td><td class="n">669k</td><td class="n">152k</td></tr><tr><th scope="row">mistral-medium-3.5</th><td class="n ok">131</td><td class="n bad">18</td><td class="n bad">58</td><td class="n">183</td><td class="n">0.805</td><td class="n">0.879</td><td class="n"><b>0.775</b></td><td class="n">0.611</td><td class="n"><span class="bad" title="down: -0.050 F1 against the previous run"><svg width="84" height="18" viewBox="0 0 84 18" role="img" aria-label="F1 over the last 3 runs"><polyline fill="none" stroke="currentColor" stroke-width="1.5" points="2.0,2.9 42.0,8.1 82.0,15.1"/><circle cx="82.0" cy="15.1" r="2" fill="currentColor"/></svg> ▼</span></td><td class="n">0:42 h</td><td class="n">681k</td><td class="n">49k</td></tr><tr><th scope="row">gemma4</th><td class="n ok">113</td><td class="n bad">11</td><td class="n bad">76</td><td class="n">184</td><td class="n">0.773</td><td class="n">0.911</td><td class="n"><b>0.722</b></td><td class="n">0.621</td><td class="n"><span class="bad" title="down: -0.113 F1 against the previous run"><svg width="84" height="18" viewBox="0 0 84 18" role="img" aria-label="F1 over the last 3 runs"><polyline fill="none" stroke="currentColor" stroke-width="1.5" points="2.0,3.1 42.0,2.0 82.0,16.0"/><circle cx="82.0" cy="16.0" r="2" fill="currentColor"/></svg> ▼</span></td><td class="n">1:42 h</td><td class="n">637k</td><td class="n">70k</td></tr></tbody></table></div>

<p class="pnote"><a href="#/ledger/benchmarks">Trends, naive scholar and every run →</a></p>
<!-- bench:end -->


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
- **Baseline comparison:** change relative to the model's first periodic benchmark run
  (`scripts/runs/ddd/benchmark-periodic.sh`); within ±0.03 F1 it is run-to-run noise.
- **Papers: all · relevant · extracted:** indexed papers · papers retained by at least one
  domain's relevance assessment · papers that gave at least one extracted popPK, PD or PGx
  record; below, the extracted papers as a share of all and of relevant papers.
- **Wanted PDFs · expected extracted:** papers whose full text is requested · how many of
  them are expected to give at least one extracted record, assuming the extracted share of
  relevant papers (extracted / relevant).

</details>

</div>

