<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;prucalopride&quot;,&quot;href&quot;:&quot;drugs/drug_prucalopride/&quot;},{&quot;label&quot;:&quot;van_2016 \u00b7 spd555_303&quot;}]"></div>

# prucalopride — `Prucalopride_van2016_spd555_303`

> ## <span class="pk-badge pk-badge--neutral">None</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
van Schaick E; Benninga MA; Levine A; Magnusson M; Troy S et al. (2016). Pharmacology research & perspectives 4
  ·  DOI: [10.1002/prp2.236](https://doi.org/10.1002/prp2.236)

## Model component
<dbs-pgx drug="prucalopride" model-id="Prucalopride_van2016_spd555_303" status="" stale="false" population="children with functional constipation" measured-compound="prucalopride" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `not captured`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (l h−1) | `Q22` · CL | —(suppressed) | l h−1 | — | [l] / [h] | not captured | exact (1.0) | van_2016_table_4:row2:col4, van_2016_table_4:row2:col5, van_2016_table_4:row2:col6 | — | not captured |
| V2 (l) | `Q64` · V2 | —(suppressed) | l | — | [l] | not captured | exact (1.0) | van_2016_table_4:row3:col4, van_2016_table_4:row3:col5, van_2016_table_4:row3:col6 | — | not captured |
| AUC (ng mL−1 h) | `Q88` · AUC | —(suppressed) | ng mL−1 h | — | [ng] / [[h] · [ml]] | not captured | exact (1.0) | van_2016_table_4:row4:col4, van_2016_table_4:row4:col5, van_2016_table_4:row4:col6 | — | not captured |
| C ss (ng mL−1) | `Q34` · Css | —(suppressed) | ng mL−1 | — | [ng] / [ml] | not captured | space_fold (0.95) | van_2016_table_4:row5:col4, van_2016_table_4:row5:col5, van_2016_table_4:row5:col6 | — | not captured |
| C 0 h (ng mL−1) | `Q86` · C0 | —(suppressed) | ng mL−1 | — | [ng] / [ml] | not captured | llm (0.6) | van_2016_table_4:row6:col4, van_2016_table_4:row6:col5, van_2016_table_4:row6:col6 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): '(n = 38; dose = 0.03 mg kg−1)' — extend the ontology if this is a real PK parameter (source ['van_2016_table_4:row0:col4', 'van_2016_table_4:row0:col5'])
- unit_dimension_unknown: 'ng mL−1 h' (AUC)
- unit_dimension_mismatch: 'C 0 h (ng mL−1)' → Q86 (unit '[mass] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=prucalopride
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- population split: 'spd555‐303' subgroup of van_2016 (paper reports 3 populations: estimate, pru‐usa‐12, spd555‐303)

**Extraction notes:**
- companion parameter table 4 transcribed (29 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

_No comparable checks._

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_prucalopride/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `van_2016` / `van_2016::spd555_303`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
