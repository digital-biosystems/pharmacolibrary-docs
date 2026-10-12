<!-- AUTOGEN:intro START — spliced from docs/README-template.md; edit THAT file, not this region -->
# Pharmacolibrary
v26.09 (built 06/10/2026)

**pharmacokinetic (PK), pharmacodynamic (PD) and pharmacogenomic (PGx)** knowledge base extracted from the published literature

<div class="pklg">

<div class="tiles"><div class="tile"><i>read ATC drugs / read non-ATC drugs / read toxins</i><b>4,683 / 24 / 25</b><em>1,758 / 15 / 5 with at least one popPK, PD or PGx record</em></div><div class="tile"><i>papers for these drugs</i><b>134,782</b><em>23,232 judged relevant to PK/PD/PGx (17%)</em></div><div class="tile"><i>papers with full text</i><b>37,316</b><em>97,466 had an abstract only</em></div><div class="tile"><i>where the full text came from</i><b>10,148 · 27,044</b><em>PDF parsed (GROBID) · publisher XML (JATS)</em></div><div class="tile"><i>LLM tokens</i><b>653.5M read</b><em>51.06M written back</em></div><div class="tile"><i>drugs by domain</i><b>948 · 1690 · 150</b><em>with popPK · PD · PGx records</em></div><div class="tile"><i>records by species (top 4)</i><b>3,903 · 1,693 · 623 · 296</b><em>human · in vitro · rat · mouse</em></div><div class="tile"><i>if all wanted PDFs were read (estimate)</i><b>12,151 · ~9,327 · 42%</b><em>wanted PDFs · new records expected · relevant full texts giving ≥1 popPK/PD/PGx record</em></div></div>
<h3 class="csechead">Corpus</h3><div class="cstats"><div class="cbox"><h4>popPK</h4><div class="cnum"><b>4,012</b><span>extracted</span></div><div class="cnum"><b class="ok">1,666</b><span>simulatable · 41.5%</span></div><table><tr><td>topology</td><td>1C 3012 · 2C 703 · parent_metabolite 196</td></tr><tr><td>parameterisation</td><td>mechanistic 2860 · apparent 1146</td></tr><tr><td>covariate equations</td><td>536 (13.4%)</td></tr><tr><td>simulatable means</td><td>carries a clearance and a volume</td></tr></table></div><div class="cbox"><h4>PD</h4><div class="cnum"><b>4,855</b><span>extracted</span></div><div class="cnum"><b class="ok">788</b><span>simulatable · 16.2%</span></div><table><tr><td>family</td><td>sigmoid_emax 1605 · emax 1103 · unknown 1005</td></tr><tr><td>driver</td><td>cited_pk 2128 · conc_no_pk 1172</td></tr><tr><td>runnable shapes</td><td>Emax 505 · turnover 283 · effect-cmt 241</td></tr><tr><td>simulatable means</td><td>potency + Emax, or a turnover rate</td></tr></table></div><div class="cbox"><h4>PGx</h4><div class="cnum"><b>137</b><span>extracted</span></div><div class="cnum"><b class="ok">29</b><span>simulatable · 21.2%</span></div><table><tr><td>mechanism</td><td>safety_allele 108 · transport 14</td></tr><tr><td>genes covered</td><td>22</td></tr><tr><td>simulatable means</td><td>shifts a named PK parameter</td></tr></table></div><div class="cbox"><h4>by species</h4><table class="csp"><tr><td></td><td class="n"><i>popPK</i></td><td class="n"><i>PD</i></td><td class="n"><i>PGx</i></td></tr><tr><td>human</td><td class="n">1,958</td><td class="n">1,654</td><td class="n">291</td></tr><tr><td>in vitro</td><td class="n">10</td><td class="n">1,682</td><td class="n">1</td></tr><tr><td>rat</td><td class="n">75</td><td class="n">548</td><td class="n">0</td></tr><tr><td>mouse</td><td class="n">27</td><td class="n">269</td><td class="n">0</td></tr><tr><td>human + animal</td><td class="n">29</td><td class="n">146</td><td class="n">0</td></tr><tr><td>other animal</td><td class="n">3</td><td class="n">118</td><td class="n">0</td></tr><tr><td>pig</td><td class="n">12</td><td class="n">90</td><td class="n">0</td></tr><tr><td>dog</td><td class="n">33</td><td class="n">50</td><td class="n">0</td></tr><tr><td>13 others</td><td class="n">108</td><td class="n">284</td><td class="n">4</td></tr></table></div></div>

<p class="pnote"><a href="#/ledger">Full extraction ledger — all 5676 drugs, per panel and run group →</a></p>

</div>

## What you will find here

- **A page per drug.** Identity (ATC codes, synonyms, brands, DrugBank/PharmGKB ids, EU market
  status), then the records extracted for it.
- **Population-PK records** — clearance, volumes, intercompartmental clearance, absorption,
  their units and canonical SI values, the covariate model, and the variability terms, each row
  carrying the label as printed in the paper and how it was matched to the parameter ontology.
- **PD records** — the exposure–response model: family (sigmoid Emax, indirect turnover …),
  the driver it is fitted against, the biomarker, and the parameters.
- **PGx records** — the gene, the phenotype, the parameter it shifts, and by how much.
- **Downloadable models.** Where the parameters supported one, the record page's *Models* tab
  offers the same model as Modelica, MATLAB (plain and SimBiology), SBML and CellML — each
  archive holding the model source, a script that simulates it, and a README.
  **Simulation**
- **Toxins.** (in construction) - the same pipeline applied to toxicokinetics and toxicodynamics, listed separately
  in the sidebar because a toxin has no ATC code and the question asked of it is exposure
  rather than therapy.

## Where the numbers come from

Each drug's literature is retrieved from PubMed, full text is fetched where it is openly
available, and every paper passes through a fixed sequence of stages — *relevance → screen →
locate → transcribe → interpret → validate*. Values are read from the paper's own tables rather
than summarised, then checked for internal consistency (does the reported clearance agree with
volume and half-life?) and plausibility before a record is accepted.

Nothing here is hand-typed, and nothing is invented: a value that could not be traced to a
table, or that failed its checks, is marked. The status badge on every record says which it is.

| badge | meaning |
|---|---|
| **curated** | a human authored or confirmed these values |
| **extracted** | the pipeline accepted the record and its checks passed |
| **needs review** | extracted, but a check failed or a value looks implausible |
| **rejected** | the record was not accepted; values are suppressed |
| **stale** | the reviewer's verdict predates the latest re-run of the paper |

Each record page has three tabs: **Information** (the parameters and their provenance),
**Models** (the downloadable bundles), and **Simulation** (an in-browser run).

## Please read this before using a value

These records are a **machine extraction of published parameters**, useful as a starting point
and as a map of what the literature reports. They are not clinically validated, not a
substitute for the primary paper, and not medical advice. Every page links its source: check
there before relying on a number.
<!-- AUTOGEN:intro END -->

<!-- AUTOGEN:ledger START — generated by docs/ledger.py, do not edit -->

<!-- AUTOGEN:ledger END -->

