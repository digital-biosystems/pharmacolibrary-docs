<!-- AUTOGEN:intro START — spliced from docs/README-template.md; edit THAT file, not this region -->
# Pharmacolibrary
v26.09 (built 16/10/2026 10:26:59 UTC)

Literature-derived **pharmacokinetic (PK), pharmacodynamic (PD), and pharmacogenomic (PGx)** knowledge base.

<div class="pklg">

<div class="tiles"><div class="tile"><i>Processed: ATC / non-ATC / toxins</i><b>4,703 / 24 / 25</b><em>1,790 / 15 / 5 with ≥1 popPK/PD/PGx record</em></div><div class="tile"><i>Literature</i><b>136,318</b><em>23,385 PK/PD/PGx-relevant papers (17%)</em></div><div class="tile"><i>Full-text availability</i><b>37,883</b><em>98,435 abstract-only papers</em></div><div class="tile"><i>Full-text sources</i><b>10,242 · 27,513</b><em>GROBID-parsed PDFs · publisher JATS XML</em></div><div class="tile"><i>LLM tokens</i><b>646.0M input</b><em>49.63M output · cross-checks included</em></div><div class="tile"><i>Domain coverage</i><b>962 · 1730 · 151</b><em>Drugs with popPK · PD · PGx records</em></div><div class="tile"><i>Species distribution (top 4)</i><b>3,893 · 1,606 · 611 · 281</b><em>human · in vitro · rat · mouse</em></div><div class="tile"><i>Projected full-text yield</i><b>12,350 · ~9,588 · 42%</b><em>Requested PDFs · expected additional records · observed record-yield rate</em></div></div>
<h3 class="csechead">Corpus</h3><div class="cstats"><div class="cbox"><h4>popPK</h4><div class="cnum"><b>4,038</b><span>extracted</span></div><div class="cnum"><b class="ok">1,658</b><span>simulatable · 41.1%</span></div><table><tr><td>topology</td><td>1C 3075 · 2C 675 · parent_metabolite 185</td></tr><tr><td>parameterisation</td><td>mechanistic 2937 · apparent 1091</td></tr><tr><td>covariate equations</td><td>520 (12.9%)</td></tr><tr><td>simulation criterion</td><td>Clearance and volume available</td></tr></table></div><div class="cbox"><h4>PD</h4><div class="cnum"><b>4,671</b><span>extracted</span></div><div class="cnum"><b class="ok">786</b><span>simulatable · 16.8%</span></div><table><tr><td>family</td><td>sigmoid_emax 1533 · emax 1085 · unknown 946</td></tr><tr><td>driver</td><td>cited_pk 1986 · conc_no_pk 1119</td></tr><tr><td>supported structures</td><td>Emax 501 · turnover 285 · effect-cmt 238</td></tr><tr><td>simulation criterion</td><td>potency + Emax, or a turnover rate</td></tr></table></div><div class="cbox"><h4>PGx</h4><div class="cnum"><b>139</b><span>extracted</span></div><div class="cnum"><b class="ok">31</b><span>simulatable · 22.3%</span></div><table><tr><td>mechanism</td><td>safety_allele 108 · transport 15</td></tr><tr><td>genes covered</td><td>23</td></tr><tr><td>simulation criterion</td><td>Named PK parameter modified</td></tr></table></div><div class="cbox"><h4>by species</h4><table class="csp"><tr><td></td><td class="n"><i>popPK</i></td><td class="n"><i>PD</i></td><td class="n"><i>PGx</i></td></tr><tr><td>human</td><td class="n">1,982</td><td class="n">1,618</td><td class="n">293</td></tr><tr><td>in vitro</td><td class="n">11</td><td class="n">1,594</td><td class="n">1</td></tr><tr><td>rat</td><td class="n">77</td><td class="n">534</td><td class="n">0</td></tr><tr><td>mouse</td><td class="n">27</td><td class="n">254</td><td class="n">0</td></tr><tr><td>human + animal</td><td class="n">22</td><td class="n">140</td><td class="n">0</td></tr><tr><td>other animal</td><td class="n">3</td><td class="n">111</td><td class="n">0</td></tr><tr><td>pig</td><td class="n">18</td><td class="n">82</td><td class="n">0</td></tr><tr><td>dog</td><td class="n">34</td><td class="n">47</td><td class="n">0</td></tr><tr><td>13 others</td><td class="n">103</td><td class="n">277</td><td class="n">4</td></tr></table></div></div>

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
