<!-- AUTOGEN:intro START — spliced from docs/README-template.md; edit THAT file, not this region -->
# Pharmacolibrary
v26.09 (built 06/10/2026)

**pharmacokinetic (PK), pharmacodynamic (PD) and pharmacogenomic (PGx)** knowledge base extracted from the published literature

<div class="pklg">

<div class="tiles"><div class="tile"><i>ATC drugs: all / read / with records</i><b>5,225 / 4,170 / 1,583</b><em>80% of the ATC drugs read · 38% of those gave a popPK, PD or PGx record</em></div><div class="tile"><i>papers for these drugs</i><b>122,131</b><em>21,886 judged relevant to PK/PD/PGx (18%)</em></div><div class="tile"><i>papers with full text</i><b>33,427</b><em>88,704 had an abstract only</em></div><div class="tile"><i>where the full text came from</i><b>9,261 · 24,052</b><em>PDF parsed (GROBID) · publisher XML (JATS)</em></div><div class="tile"><i>LLM tokens</i><b>570.5M read</b><em>46.11M written back</em></div><div class="tile"><i>drugs by domain</i><b>847 · 1516 · 144</b><em>with popPK · PD · PGx records</em></div><div class="tile"><i>records by species (top 4)</i><b>3,525 · 1,471 · 581 · 272</b><em>human · in vitro · rat · mouse</em></div></div>
<h3 class="csechead">Corpus</h3><div class="cstats"><div class="cbox"><h4>popPK</h4><div class="cnum"><b>3,531</b><span>extracted</span></div><div class="cnum"><b class="ok">1,417</b><span>simulatable · 40.1%</span></div><table><tr><td>topology</td><td>1C 2660 · 2C 598 · parent_metabolite 184</td></tr><tr><td>parameterisation</td><td>mechanistic 2458 · apparent 1069</td></tr><tr><td>covariate equations</td><td>432 (12.2%)</td></tr><tr><td>simulatable means</td><td>carries a clearance and a volume</td></tr></table></div><div class="cbox"><h4>PD</h4><div class="cnum"><b>4,380</b><span>extracted</span></div><div class="cnum"><b class="ok">691</b><span>simulatable · 15.8%</span></div><table><tr><td>family</td><td>sigmoid_emax 1496 · emax 1004 · unknown 847</td></tr><tr><td>driver</td><td>cited_pk 1954 · conc_no_pk 1033</td></tr><tr><td>runnable shapes</td><td>Emax 449 · turnover 242 · effect-cmt 228</td></tr><tr><td>simulatable means</td><td>potency + Emax, or a turnover rate</td></tr></table></div><div class="cbox"><h4>PGx</h4><div class="cnum"><b>135</b><span>extracted</span></div><div class="cnum"><b class="ok">29</b><span>simulatable · 21.5%</span></div><table><tr><td>mechanism</td><td>safety_allele 106 · transport 14</td></tr><tr><td>genes covered</td><td>21</td></tr><tr><td>simulatable means</td><td>shifts a named PK parameter</td></tr></table></div><div class="cbox"><h4>by species</h4><table class="csp"><tr><td></td><td class="n"><i>popPK</i></td><td class="n"><i>PD</i></td><td class="n"><i>PGx</i></td></tr><tr><td>human</td><td class="n">1,722</td><td class="n">1,516</td><td class="n">287</td></tr><tr><td>in vitro</td><td class="n">9</td><td class="n">1,461</td><td class="n">1</td></tr><tr><td>rat</td><td class="n">69</td><td class="n">512</td><td class="n">0</td></tr><tr><td>mouse</td><td class="n">22</td><td class="n">250</td><td class="n">0</td></tr><tr><td>human + animal</td><td class="n">21</td><td class="n">134</td><td class="n">0</td></tr><tr><td>other animal</td><td class="n">3</td><td class="n">99</td><td class="n">0</td></tr><tr><td>pig</td><td class="n">12</td><td class="n">76</td><td class="n">0</td></tr><tr><td>dog</td><td class="n">32</td><td class="n">43</td><td class="n">0</td></tr><tr><td>13 others</td><td class="n">100</td><td class="n">262</td><td class="n">7</td></tr></table></div></div>

<p class="pnote"><a href="#/ledger">Full extraction ledger — all 4900 drugs, per panel and run group →</a></p>

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

