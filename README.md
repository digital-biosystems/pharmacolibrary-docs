<!-- AUTOGEN:intro START — spliced from docs/README-template.md; edit THAT file, not this region -->
# Pharmacolibrary
v26.09 (built 12/10/2026 16:43:11 UTC)

Literature-derived **pharmacokinetic (PK), pharmacodynamic (PD), and pharmacogenomic (PGx)** knowledge base.

<div class="pklg">

<div class="tiles"><div class="tile"><i>Processed: ATC / non-ATC / toxins</i><b>4,683 / 24 / 25</b><em>1,758 / 15 / 5 with ≥1 popPK/PD/PGx record</em></div><div class="tile"><i>Literature</i><b>134,782</b><em>23,232 PK/PD/PGx-relevant papers (17%)</em></div><div class="tile"><i>Full-text availability</i><b>37,316</b><em>97,466 abstract-only papers</em></div><div class="tile"><i>Full-text sources</i><b>10,148 · 27,044</b><em>GROBID-parsed PDFs · publisher JATS XML</em></div><div class="tile"><i>LLM tokens</i><b>653.5M input</b><em>51.06M output · cross-checks included</em></div><div class="tile"><i>Domain coverage</i><b>948 · 1690 · 150</b><em>Drugs with popPK · PD · PGx records</em></div><div class="tile"><i>Species distribution (top 4)</i><b>3,903 · 1,693 · 623 · 296</b><em>human · in vitro · rat · mouse</em></div><div class="tile"><i>Projected full-text yield</i><b>12,151 · ~9,327 · 42%</b><em>Requested PDFs · expected additional records · observed record-yield rate</em></div></div>
<h3 class="csechead">Corpus</h3><div class="cstats"><div class="cbox"><h4>popPK</h4><div class="cnum"><b>4,012</b><span>extracted</span></div><div class="cnum"><b class="ok">1,666</b><span>simulatable · 41.5%</span></div><table><tr><td>topology</td><td>1C 3012 · 2C 703 · parent_metabolite 196</td></tr><tr><td>parameterisation</td><td>mechanistic 2860 · apparent 1146</td></tr><tr><td>covariate equations</td><td>536 (13.4%)</td></tr><tr><td>simulation criterion</td><td>Clearance and volume available</td></tr></table></div><div class="cbox"><h4>PD</h4><div class="cnum"><b>4,855</b><span>extracted</span></div><div class="cnum"><b class="ok">788</b><span>simulatable · 16.2%</span></div><table><tr><td>family</td><td>sigmoid_emax 1605 · emax 1103 · unknown 1005</td></tr><tr><td>driver</td><td>cited_pk 2128 · conc_no_pk 1172</td></tr><tr><td>supported structures</td><td>Emax 505 · turnover 283 · effect-cmt 241</td></tr><tr><td>simulation criterion</td><td>potency + Emax, or a turnover rate</td></tr></table></div><div class="cbox"><h4>PGx</h4><div class="cnum"><b>137</b><span>extracted</span></div><div class="cnum"><b class="ok">29</b><span>simulatable · 21.2%</span></div><table><tr><td>mechanism</td><td>safety_allele 108 · transport 14</td></tr><tr><td>genes covered</td><td>22</td></tr><tr><td>simulation criterion</td><td>Named PK parameter modified</td></tr></table></div><div class="cbox"><h4>by species</h4><table class="csp"><tr><td></td><td class="n"><i>popPK</i></td><td class="n"><i>PD</i></td><td class="n"><i>PGx</i></td></tr><tr><td>human</td><td class="n">1,958</td><td class="n">1,654</td><td class="n">291</td></tr><tr><td>in vitro</td><td class="n">10</td><td class="n">1,682</td><td class="n">1</td></tr><tr><td>rat</td><td class="n">75</td><td class="n">548</td><td class="n">0</td></tr><tr><td>mouse</td><td class="n">27</td><td class="n">269</td><td class="n">0</td></tr><tr><td>human + animal</td><td class="n">29</td><td class="n">146</td><td class="n">0</td></tr><tr><td>other animal</td><td class="n">3</td><td class="n">118</td><td class="n">0</td></tr><tr><td>pig</td><td class="n">12</td><td class="n">90</td><td class="n">0</td></tr><tr><td>dog</td><td class="n">33</td><td class="n">50</td><td class="n">0</td></tr><tr><td>13 others</td><td class="n">108</td><td class="n">284</td><td class="n">4</td></tr></table></div></div>

<p class="pnote"><a href="#/ledger">Extraction ledger by panel and run group →</a></p>

</div>

## Contents

- **Drug profiles:** identifiers, ATC classification, synonyms, brands, EU regulatory status,
  and extracted records.
- **Population PK:** disposition and absorption parameters, source units, SI-normalised values,
  covariate relationships, and interindividual variability.
- **PD:** exposure–response models, biomarkers, drivers, and parameter estimates.
- **PGx:** genotype or phenotype effects on PK/PD parameters and adverse-reaction risk.
- **Models:** Modelica, MATLAB, SimBiology, SBML, CellML, and FMI downloads where available;
  each archive includes source code, a simulation script, and documentation.
- **Simulation:** browser-based simulations for supported models.
- **Toxicology:** toxicokinetic and toxicodynamic records, listed separately from drugs.
  Coverage is under development.

## Data provenance

Literature is retrieved from PubMed and available full-text sources. Extraction follows
*relevance assessment → screening → localisation → transcription → interpretation → validation*.
Parameter estimates retain source labels and units and undergo consistency and plausibility checks.

Status badges indicate curation, validation, and review outcomes. Source references,
inferred values, and secondary-source substitutions are identified in each record.

| Status | Definition |
|---|---|
| **curated** | Human-authored or verified reference record |
| **extracted** | Accepted extraction with applicable validation checks passed |
| **needs review** | Incomplete, inconsistent, or unresolved extraction |
| **rejected** | Unaccepted record; displayed values remain unverified |
| **stale** | Review predates the current extraction |

Record tabs: **Information** (parameters and provenance), **Models** (downloads), and
**Simulation** (browser-based execution).

## Limitations

These machine-extracted records are research resources, not clinically validated models
or medical advice. Verify estimates and model assumptions against the cited primary sources.
<!-- AUTOGEN:intro END -->

<!-- AUTOGEN:ledger START — generated by docs/ledger.py, do not edit -->

<!-- AUTOGEN:ledger END -->
