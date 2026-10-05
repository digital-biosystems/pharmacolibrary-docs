<!-- AUTOGEN:intro START — spliced from docs/README-template.md; edit THAT file, not this region -->
# Pharmacolibrary

A pharmaceutical knowledge base of **pharmacokinetic (PK), pharmacodynamic (PD) and
pharmacogenomic (PGx) parameters extracted from the published literature**, one page per drug,
with the numbers linked back to the paper and table they came from — and, where a model could
be built, a simulatable model to download.

<style>
.pklg { --pklg-ok:#2C7A57; --pklg-bad:#A8452F; --pklg-warn:#96690C; --pklg-faint:#8B9994;
  --pklg-s1:#186A55; --pklg-s2:#6FB49B; --pklg-s3:#C9A227; --pklg-s4:#C8D2CF; --pklg-s5:#B08A6A;
  --pklg-rule:var(--theme-color, #DBE3E0); }
@media (prefers-color-scheme: dark) {
  .pklg { --pklg-ok:#63BE94; --pklg-bad:#E08A72; --pklg-warn:#D9AA4C; --pklg-faint:#748480;
    --pklg-s1:#5FC3A4; --pklg-s2:#2F7E67; --pklg-s3:#B99329; --pklg-s4:#2A3733; --pklg-s5:#8A6A50; }
}
.pklg table { border-collapse:collapse; width:100%; min-width:max-content; font-size:13px; }
.pklg th, .pklg td { padding:7px 10px; text-align:left; white-space:nowrap;
  border-top:1px solid rgba(128,128,128,.18); }
.pklg thead th { font-size:11px; letter-spacing:.04em; text-transform:uppercase;
  color:var(--pklg-faint); border-top:0; border-bottom:1px solid rgba(128,128,128,.35); }
.pklg tfoot th, .pklg tfoot td { font-weight:600; border-top:2px solid rgba(128,128,128,.35); }
.pklg .n { font-variant-numeric:tabular-nums; font-family:ui-monospace,SFMono-Regular,Menlo,monospace; }
.pklg .ok { color:var(--pklg-ok); } .pklg .bad { color:var(--pklg-bad); }
.pklg .mut, .pklg .nil { color:var(--pklg-faint); }
.pklg .warn { color:var(--pklg-warn); border-bottom:1px dotted currentColor; cursor:help; }
.pklg .sl { color:var(--pklg-faint); padding:0 1px; }
.pklg .bar { display:flex; height:6px; border-radius:2px; overflow:hidden;
  background:rgba(128,128,128,.15); min-width:110px; }
.pklg .bar span { display:block; height:100%; }
.pklg .s1{background:var(--pklg-s1)} .pklg .s2{background:var(--pklg-s2)}
.pklg .s3{background:var(--pklg-s3)} .pklg .s4{background:var(--pklg-s4)}
.pklg .s5{background:var(--pklg-s5)}
.pklg .mixnum { display:block; margin-top:3px; font-size:11px; color:var(--pklg-faint);
  font-variant-numeric:tabular-nums; }
.pklg .scroll { overflow-x:auto; }
.pklg details { border-top:1px solid rgba(128,128,128,.18); padding:2px 0; }
.pklg details[open] { padding-bottom:10px; }
.pklg summary { cursor:pointer; padding:7px 2px; font-size:13px; list-style:none;
  display:flex; gap:10px; align-items:baseline; flex-wrap:wrap; }
.pklg summary::-webkit-details-marker { display:none; }
.pklg .csechead { margin:18px 0 6px; font-size:13px; letter-spacing:.06em;
  text-transform:uppercase; color:var(--pklg-faint); font-weight:600; }
.pklg .csechead .csub { text-transform:none; letter-spacing:0; font-weight:400; font-size:12px; }
.pklg .cstats { display:grid; grid-template-columns:repeat(auto-fit,minmax(240px,1fr)); gap:12px;
  margin-bottom:14px; }
.pklg .cbox { border:1px solid rgba(128,128,128,.22); border-radius:6px; padding:10px 12px; }
.pklg .cbox h4 { margin:0 0 6px; font-size:12px; letter-spacing:.06em; text-transform:uppercase;
  color:var(--pklg-faint); }
.pklg .cnum { display:flex; align-items:baseline; gap:7px; }
.pklg .cnum b { font-size:20px; font-family:ui-monospace,SFMono-Regular,Menlo,monospace; }
.pklg .cnum b.ok { color:var(--pklg-ok); }
.pklg .cnum span { font-size:10.5px; color:var(--pklg-faint); }
.pklg .cbox table { width:100%; margin-top:8px; font-size:11px; border-collapse:collapse; }
.pklg .cbox td { padding:3px 0; vertical-align:top; border-top:1px solid rgba(128,128,128,.14); }
.pklg .cbox td:first-child { color:var(--pklg-faint); white-space:nowrap; padding-right:8px; }
.pklg .cbox table.csp { margin-top:0; }
.pklg .cbox table.csp td.n { text-align:right; font-variant-numeric:tabular-nums; padding-left:8px; }
.pklg .cbox table.csp i { font-style:normal; color:var(--pklg-faint); }
.pklg .chip { display:inline-block; padding:1px 6px; margin:0 3px 2px 0; border-radius:9px;
  font-size:10px; line-height:1.5; white-space:nowrap; background:rgba(128,128,128,.12); }
.pklg .chip.ok { color:var(--pklg-ok); } .pklg .chip.bad { color:var(--pklg-bad); }
.pklg .chip.warn { color:var(--pklg-warn); } .pklg .chip.mut { color:var(--pklg-faint); }
.pklg td.notes { white-space:normal; min-width:170px; }
/* The literal arrow, not a CSS hex escape. This stylesheet is a plain Python string, so
   a backslash followed by digits is read as an OCTAL escape at parse time: the page
   shipped a NAK control byte and the browser drew that instead of an arrow. */
.pklg summary::before { content:"▸"; color:var(--pklg-faint); display:inline-block;
  width:1em; transition:transform .12s ease; }
.pklg details[open] > summary::before { transform:rotate(90deg); }
.pklg summary .lbl { font-weight:600; font-family:ui-monospace,SFMono-Regular,Menlo,monospace; }
.pklg .badge { font-size:10px; letter-spacing:.05em; text-transform:uppercase;
  padding:1px 6px; border-radius:9px; border:1px solid currentColor; }
.pklg .b-running { color:var(--pklg-warn); }
.pklg .b-finished { color:var(--pklg-ok); }
.pklg .b-interrupted { color:var(--pklg-bad); }
.pklg .b-never_run { color:var(--pklg-faint); }
.pklg summary .meta { color:var(--pklg-faint); font-size:12px;
  font-variant-numeric:tabular-nums; }
.pklg .tiles { display:grid; grid-template-columns:repeat(auto-fit,minmax(170px,1fr));
  gap:10px; margin:14px 0 22px; }
.pklg .tile { border:1px solid rgba(128,128,128,.25); border-radius:4px; padding:10px 12px; }
.pklg .tile b { display:block; font-size:20px; font-variant-numeric:tabular-nums; }
.pklg .tile i { display:block; font-style:normal; font-size:11px; letter-spacing:.06em;
  text-transform:uppercase; color:var(--pklg-faint); }
.pklg .tile em { font-style:normal; font-size:12px; color:var(--pklg-faint); }
</style>
<div class="pklg">

<div class="tiles"><div class="tile"><i>ATC drugs: all / read / with records</i><b>5,225 / 1,688 / 648</b><em>32% of the ATC drugs read · 38% of those gave a popPK, PD or PGx record</em></div><div class="tile"><i>papers for these drugs</i><b>67,586</b><em>14,576 judged relevant to PK/PD/PGx (22%)</em></div><div class="tile"><i>papers with full text</i><b>19,503</b><em>48,083 had an abstract only</em></div><div class="tile"><i>where the full text came from</i><b>5,959 · 13,454</b><em>PDF parsed (GROBID) · publisher XML (JATS)</em></div><div class="tile"><i>LLM tokens</i><b>269.4M read</b><em>24.17M written back</em></div><div class="tile"><i>drugs by domain</i><b>313 · 569 · 91</b><em>with popPK · PD · PGx records</em></div><div class="tile"><i>records by species (top 4)</i><b>1,428 · 463 · 149 · 95</b><em>human · in vitro · rat · mouse</em></div></div>
<h3 class="csechead">Corpus</h3><div class="cstats"><div class="cbox"><h4>popPK</h4><div class="cnum"><b>1,413</b><span>extracted</span></div><div class="cnum"><b class="ok">620</b><span>simulatable · 43.9%</span></div><table><tr><td>topology</td><td>1C 1032 · 2C 252 · parent_metabolite 76</td></tr><tr><td>parameterisation</td><td>mechanistic 977 · apparent 435</td></tr><tr><td>covariate equations</td><td>130 (9.2%)</td></tr><tr><td>simulatable means</td><td>carries a clearance and a volume</td></tr></table></div><div class="cbox"><h4>PD</h4><div class="cnum"><b>1,521</b><span>extracted</span></div><div class="cnum"><b class="ok">232</b><span>simulatable · 15.3%</span></div><table><tr><td>family</td><td>sigmoid_emax 499 · unknown 373 · emax 341</td></tr><tr><td>driver</td><td>conc_no_pk 752 · cited_pk 444</td></tr><tr><td>runnable shapes</td><td>Emax 140 · turnover 92 · effect-cmt 74</td></tr><tr><td>simulatable means</td><td>potency + Emax, or a turnover rate</td></tr></table></div><div class="cbox"><h4>PGx</h4><div class="cnum"><b>93</b><span>extracted</span></div><div class="cnum"><b class="ok">19</b><span>simulatable · 20.4%</span></div><table><tr><td>mechanism</td><td>safety_allele 74 · transport 12</td></tr><tr><td>genes covered</td><td>18</td></tr><tr><td>simulatable means</td><td>shifts a named PK parameter</td></tr></table></div><div class="cbox"><h4>by species</h4><table class="csp"><tr><td></td><td class="n"><i>popPK</i></td><td class="n"><i>PD</i></td><td class="n"><i>PGx</i></td></tr><tr><td>human</td><td class="n">634</td><td class="n">546</td><td class="n">248</td></tr><tr><td>in vitro</td><td class="n">4</td><td class="n">458</td><td class="n">1</td></tr><tr><td>rat</td><td class="n">33</td><td class="n">116</td><td class="n">0</td></tr><tr><td>mouse</td><td class="n">8</td><td class="n">87</td><td class="n">0</td></tr><tr><td>human + animal</td><td class="n">9</td><td class="n">81</td><td class="n">0</td></tr><tr><td>unknown</td><td class="n">14</td><td class="n">48</td><td class="n">3</td></tr><tr><td>pig</td><td class="n">2</td><td class="n">33</td><td class="n">0</td></tr><tr><td>dog</td><td class="n">13</td><td class="n">21</td><td class="n">0</td></tr><tr><td>11 others</td><td class="n">38</td><td class="n">117</td><td class="n">0</td></tr></table></div></div>

<p class="pnote"><a href="#/ledger">Full extraction ledger — all 2020 drugs, per panel and run group →</a></p>

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
- **Toxins.** The same pipeline applied to toxicokinetics and toxicodynamics, listed separately
  in the sidebar because a toxin has no ATC code and the question asked of it is exposure
  rather than therapy.

## Where the numbers come from

Each drug's literature is retrieved from PubMed, full text is fetched where it is openly
available, and every paper passes through a fixed sequence of stages — *relevance → screen →
locate → transcribe → interpret → validate*. Values are read from the paper's own tables rather
than summarised, then checked for internal consistency (does the reported clearance agree with
volume and half-life?) and plausibility before a record is accepted.

Nothing here is hand-typed, and nothing is invented: a value that could not be traced to a
table, or that failed its checks, is marked rather than quietly dropped. The status badge on
every record says which it is.

## How to read a record

| badge | meaning |
|---|---|
| **curated** | a human authored or confirmed these values |
| **extracted** | the pipeline accepted the record and its checks passed |
| **needs review** | extracted, but a check failed or a value looks implausible |
| **rejected** | the record was not accepted; values are suppressed |
| **stale** | the reviewer's verdict predates the latest re-run of the paper |

Each record page has three tabs: **Information** (the parameters and their provenance),
**Models** (the downloadable bundles), and **Simulation** (an in-browser run, coming).

## Please read this before using a value

These records are a **machine extraction of published parameters**, useful as a starting point
and as a map of what the literature reports. They are not clinically validated, not a
substitute for the primary paper, and not medical advice. Every page links its source: check
there before relying on a number.

## Getting around

The sidebar lists the curated panels first, then the toxins, then every drug with a page
arranged by its ATC class. The table below is the extraction ledger — what has been processed,
how much full text was obtained, and how many records came out of it.

## Local rendering
```
docsify serve . 
```
<!-- AUTOGEN:intro END -->

<!-- AUTOGEN:ledger START — generated by docs/ledger.py, do not edit -->

<!-- AUTOGEN:ledger END -->

