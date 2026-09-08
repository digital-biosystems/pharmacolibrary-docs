# lacosamide — `Lacosamide_Jang2025_high_seizure_burden_group_n_28`

> ## <span class="pk-badge pk-badge--red">rejected</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Jang Y; Ahn SJ; Lee S; Kim Y; Lee HS; Lee YK; et al. et al. (2025). Scientific reports 15
  ·  DOI: [10.1038/s41598-025-04044-x](https://doi.org/10.1038/s41598-025-04044-x)

## Model component
<dbs-pgx drug="lacosamide" model-id="Lacosamide_Jang2025_high_seizure_burden_group_n_28" status="rejected" stale="false" population="epilepsy patients" measured-compound="lacosamide" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Saliva sample in peak level of lacosamide (mg/L) | `Q32` · Cmax | —(suppressed) | mg/L | — | [mg] / [l] | not captured | llm_confirmed (0.6) | Tab1:row40:col3 | — | not captured |
| Saliva sample in trough level of lacosamide (mg/L) | `Q37` · Ctrough | —(suppressed) | mg/L | — | [mg] / [l] | not captured | llm_confirmed (0.6) | Tab1:row41:col3 | — | not captured |
| AUC in saliva (mg h/L) | `Q88` · AUC | —(suppressed) | mg h/L | — | [[h] · [mg]] / [l] | not captured | llm_confirmed (0.6) | Tab1:row46:col3 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Age (years)' — extend the ontology if this is a real PK parameter (source ['Tab1:row2:col3'])
- dropped unlinked row (NIL): 'Height (cm)' — extend the ontology if this is a real PK parameter (source ['Tab1:row4:col3'])
- dropped unlinked row (NIL): 'Body weights (kg)' — extend the ontology if this is a real PK parameter (source ['Tab1:row5:col3'])
- dropped unlinked row (NIL): 'BSA (m2)' — extend the ontology if this is a real PK parameter (source ['Tab1:row6:col3'])
- dropped unlinked row (NIL): 'Seizure freedom (n)' — extend the ontology if this is a real PK parameter (source ['Tab1:row16:col3'])
- dropped unlinked row (NIL): 'BUN (mg/dL)' — extend the ontology if this is a real PK parameter (source ['Tab1:row19:col3'])
- dropped unlinked row (NIL): 'Creatinine (mg/dL)' — extend the ontology if this is a real PK parameter (source ['Tab1:row20:col3'])
- dropped unlinked row (NIL): 'GFR (mL/min/1.73 m2)' — extend the ontology if this is a real PK parameter (source ['Tab1:row21:col3'])
- dropped unlinked row (NIL): 'AST (U/L)' — extend the ontology if this is a real PK parameter (source ['Tab1:row22:col3'])
- dropped unlinked row (NIL): 'ALT (U/L)' — extend the ontology if this is a real PK parameter (source ['Tab1:row23:col3'])
- dropped unlinked row (NIL): 'Saliva sample in outpatient clinic (mg/L)' — extend the ontology if this is a real PK parameter (source ['Tab1:row39:col3'])
- dropped unlinked row (NIL): 'Blood sample in outpatient clinic (mg/L)' — extend the ontology if this is a real PK parameter (source ['Tab1:row42:col3'])
- dropped duplicate Q32 ('Cmax in saliva (mg/L)', value '14.3') — already have one for this compound
- dropped duplicate Q37 ('Trough in saliva (mg/L)', value '8.29') — already have one for this compound
- unit_dimension_unknown: 'mg h/L' (AUC)
- dropped duplicate Q32 ('Cmax in blood (mg/L)', value '9.94') — already have one for this compound
- dropped duplicate Q37 ('Trough in blood (mg/L)', value '5.76') — already have one for this compound
- unit_dimension_unknown: 'mg h/L' (AUC)
- dropped duplicate Q88 ('AUC in blood (mg h/L)', value '92.7') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=lacosamide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'high seizure burden group (n = 28)' subgroup of Jang_2025 (paper reports 4 populations: high seizure burden group (n = 28), low seizure burden group (n = 95), p-value, total (n = 123))
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell Tab1:row2:col4 = '0.029*'
- unparsed cell Tab1:row3:col1 = '67 (54.5%)'
- unparsed cell Tab1:row3:col2 = '53 (55.8%)'
- unparsed cell Tab1:row3:col3 = '14 (50%)'
- unparsed cell Tab1:row9:col1 = '113 (91.9%)'
- unparsed cell Tab1:row9:col2 = '86 (90.5%)'
- unparsed cell Tab1:row9:col3 = '27 (96.4%)'
- unparsed cell Tab1:row15:col1 = '37 (30.3%)'
- unparsed cell Tab1:row15:col2 = '26 (27.4%)'
- unparsed cell Tab1:row15:col3 = '11 (39.3%)'
- unparsed cell Tab1:row16:col1 = '63 (51.2%)'
- unparsed cell Tab1:row16:col2 = '63 (66.3%)'
- unparsed cell Tab1:row24:col1 = '101 (83.5%)'
- unparsed cell Tab1:row24:col2 = '77 (82.8%)'
- unparsed cell Tab1:row24:col3 = '24 (85.7%)'
- unparsed cell Tab1:row25:col1 = '18 (14.9%)'
- unparsed cell Tab1:row25:col2 = '16 (17.4%)'
- unparsed cell Tab1:row25:col3 = '2 (7.4%)'
- unparsed cell Tab1:row26:col1 = '79 (65.3%)'
- unparsed cell Tab1:row26:col2 = '58 (63.0%)'
- unparsed cell Tab1:row26:col3 = '21 (77.8%)'
- unparsed cell Tab1:row27:col1 = '12 (9.9%)'
- unparsed cell Tab1:row27:col2 = '10 (10.9%)'
- unparsed cell Tab1:row27:col3 = '2 (7.4%)'
- unparsed cell Tab1:row28:col1 = '7 (5.8%)'
- unparsed cell Tab1:row28:col2 = '6 (6.5%)'
- unparsed cell Tab1:row28:col3 = '1 (3.7%)'
- unparsed cell Tab1:row31:col1 = '109 (88.6%)'
- unparsed cell Tab1:row31:col2 = '86 (90.5%)'
- unparsed cell Tab1:row31:col3 = '23 (82.1%)'
- unparsed cell Tab1:row32:col1 = '4.25 [2.57–7]'
- unparsed cell Tab1:row32:col2 = '4.21 [2.54–6.85]'
- unparsed cell Tab1:row32:col3 = '4.25 [ 2.92–7.46]'
- unparsed cell Tab1:row33:col1 = '59 (48.0%)'
- unparsed cell Tab1:row33:col2 = '43 (45.3%)'
- unparsed cell Tab1:row33:col3 = '16 (57.1%)'
- unparsed cell Tab1:row34:col1 = '59 (48.0%)'
- unparsed cell Tab1:row34:col2 = '43 (45.3%)'
- unparsed cell Tab1:row34:col3 = '16 (57.1%)'
- unparsed cell Tab1:row37:col1 = '4.67 [3.03–6.86]'
- unparsed cell Tab1:row37:col2 = '5.17 [2.93–6.86]'
- unparsed cell Tab1:row37:col3 = '3.83 [3.27–6.33]'
- unparsed cell Tab1:row39:col4 = '0.026*'
- unparsed cell Tab1:row42:col4 = '0.011*'

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Tab1:row40:col3'] |
| C5_dimension_Q37 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Tab1:row41:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_lacosamide/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Jang_2025` / `Jang_2025::high_seizure_burden_group_n_28`)


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
