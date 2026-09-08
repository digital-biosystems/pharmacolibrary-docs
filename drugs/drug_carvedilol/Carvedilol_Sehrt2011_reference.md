# carvedilol — `Carvedilol_Sehrt2011_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `carvedilol`, measured `R-carvedilol and S-carvedilol`.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Sehrt D; Meineke I; Tzvetkov M; Gültepe S; Brockmöller J et al. (2011). Pharmacogenomics 12
  ·  DOI: [10.2217/pgs.11.20](https://doi.org/10.2217/pgs.11.20)

## Model component
<dbs-pgx drug="carvedilol" model-id="Carvedilol_Sehrt2011_reference" status="rejected" stale="false" population="healthy volunteers" measured-compound="R-carvedilol and S-carvedilol" parameterization="apparent" topology="general_linear"></dbs-pgx>

**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| variation in total clearance of R-carvedilol accounted for by CYP2D6 genotype | `Q22` · CL | —(suppressed) | % | — | % | not captured | boundary (0.8) | Sehrt_2011:results_prose | — | not captured |
| Cl/F for R-carvedilol | `Q27` · CL/F | —(suppressed) | l/h | — | L/h | not captured | boundary (0.8) | Sehrt_2011:results_prose | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'S-carvedilol' — extend the ontology if this is a real PK parameter (source ['Sehrt_2011_table_1:row3:col6'])
- salvaged Q22 ('variation in total clearance of R-carvedilol accounted for by CYP2D6 genotype'=24.4) from results prose — parameter table was unreadable
- salvaged Q27 ('Cl/F for R-carvedilol'=29.4) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=R-carvedilol and S-carvedilol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- unparsed cell Sehrt_2011_table_1:row2:col1 = '1356 (955-1552)'
- unparsed cell Sehrt_2011_table_1:row2:col2 = '558 (384-878)'
- unparsed cell Sehrt_2011_table_1:row2:col3 = '605 (407-805)'
- unparsed cell Sehrt_2011_table_1:row2:col4 = '430 (289-1053)'
- unparsed cell Sehrt_2011_table_1:row2:col5 = '368 (240-455)'
- unparsed cell Sehrt_2011_table_1:row2:col6 = '&lt; 0.001'
- unparsed cell Sehrt_2011_table_1:row3:col1 = '279 (213-378)'
- unparsed cell Sehrt_2011_table_1:row3:col2 = '158 (116-226)'
- unparsed cell Sehrt_2011_table_1:row3:col3 = '212 (162-306)'
- unparsed cell Sehrt_2011_table_1:row3:col4 = '218 (142-373)'
- unparsed cell Sehrt_2011_table_1:row3:col5 = '143 (109-209)'
- unparsed cell Sehrt_2011_table_1:row4:col1 = '91.3 (66.3-148.7) 41.1 (20.9-50.6)'
- unparsed cell Sehrt_2011_table_1:row4:col2 = '42.7 (33.3-74.0) 41.5 (31.8-64.2)'
- unparsed cell Sehrt_2011_table_1:row4:col3 = '22.6 (12.0-50.6) &lt; 0.001'
- unparsed cell Sehrt_2011_table_1:row5:col1 = '44.2 (14.3-86.5)'
- unparsed cell Sehrt_2011_table_1:row5:col2 = '15.3 (10.7-41.3)'
- unparsed cell Sehrt_2011_table_1:row5:col3 = '41.4 (20.7-88.0) 23.3 (11.1-33.6)'
- unparsed cell Sehrt_2011_table_1:row5:col4 = '14.6 (9.13-36.0) 0.011'
- unparsed cell Sehrt_2011_table_1:row6:col1 = '16.7 (14.2-19.7)'
- unparsed cell Sehrt_2011_table_1:row6:col2 = '13.9 (6.9-18.6)'
- unparsed cell Sehrt_2011_table_1:row6:col3 = '17.3 (11.6-25.8)'
- unparsed cell Sehrt_2011_table_1:row6:col4 = '17.9 (13.6-24.8)'
- unparsed cell Sehrt_2011_table_1:row6:col5 = '19.2 (16.1-25.3) 0.013'
- unparsed cell Sehrt_2011_table_1:row7:col1 = '32.8 (27.6-37.6)'
- unparsed cell Sehrt_2011_table_1:row7:col2 = '23.9 (11.1-35.3)'
- unparsed cell Sehrt_2011_table_1:row7:col3 = '30.8 (23.3-50.4) 32.5 (23.3-52.4)'
- unparsed cell Sehrt_2011_table_1:row7:col4 = '31.5 (22.2-43.7) NS'
- unparsed cell Sehrt_2011_table_1:row8:col1 = '32.7 (23.2-39.2)'
- unparsed cell Sehrt_2011_table_1:row8:col2 = '22.6 (10.8-34.3) 27.5 (19.9-40.2) 24.1 (18.0-36.9)'
- unparsed cell Sehrt_2011_table_1:row8:col3 = '24.2 (18.7-32.1) NS'
- unparsed cell Sehrt_2011_table_1:row9:col1 = '39.1 (30.6-52.5)'
- unparsed cell Sehrt_2011_table_1:row9:col2 = '26.8 (12.5-45.5) 34.5 (26.6-44.1) 31.3 (17.6-37.0)'
- unparsed cell Sehrt_2011_table_1:row9:col3 = '25.1 (21.4-39.4) 0.071'
- LLM region Sehrt_2011:other_prose: no JSON records returned

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 2 | not captured | not captured | not captured |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'none', 'none'] | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_carvedilol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Sehrt_2011` / `Sehrt_2011::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
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
