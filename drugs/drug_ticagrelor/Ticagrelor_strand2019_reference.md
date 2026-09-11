# ticagrelor — `Ticagrelor_strand2019_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

### Reviewer guidance

**What is wrong:** every check the reviewer could run passed

**Steps:**
1. Confirm the model card and promote to 'curated' if it should be an exemplar. Promotion is a human decision; the reviewer never makes it.

<sub>owner: **curator** · guidance written by playbook</sub>

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Åstrand M; Amilon C; Röshammar D; Himmelmann A; Angiolillo DJ; Storey RF; et al. et al. (2019). British journal of clinical pharmacology 85
  ·  DOI: [10.1111/bcp.13812](https://doi.org/10.1111/bcp.13812)

## Model component
<dbs-pgx drug="ticagrelor" model-id="Ticagrelor_strand2019_reference" status="rejected" stale="false" population="patients with stable coronary artery disease and prior myocardial infarction" measured-compound="ticagrelor" parameterization="apparent" topology="parent_metabolite"></dbs-pgx>

**Parameterization:** CL/F, CLm/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (l h –1 ) | `Q27` · CL/F | —(suppressed) | l h –1 | — | [l] / [h] | not captured | exact (1.0) | bcp13812-tbl-0002:row1:col1, bcp13812-tbl-0002:row1:col3 | — | not captured |
| Q/F (l h –1 ) | `Q69` · Q/F | —(suppressed) | l h –1 | — | [l] / [h] | not captured | exact (1.0) | bcp13812-tbl-0002:row2:col1, bcp13812-tbl-0002:row2:col3 | — | not captured |
| Vc/F (l) | `Q290` · V1/F | —(suppressed) | l | — | [l] | not captured | exact (1.0) | bcp13812-tbl-0002:row3:col1 | — | not captured |
| Vp/F (l) | `Q82` · V2/F | —(suppressed) | l | — | [l] | not captured | exact (1.0) | bcp13812-tbl-0002:row4:col1 | — | not captured |
| KTR (h −1 ) | `Q306` · ktr | —(suppressed) | h −1 | — | [1] / [h] | not captured | exact (1.0) | bcp13812-tbl-0002:row5:col1, bcp13812-tbl-0002:row5:col3 | — | not captured |
| Absorption lag time prior MI (h) | `Q83` · tlag | —(suppressed) | h | — | [h] | not captured | llm_confirmed (0.6) | bcp13812-tbl-0002:row6:col1 | — | not captured |
| F rel | `Q87` · Frel | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | bcp13812-tbl-0002:row7:col1, bcp13812-tbl-0002:row7:col3 | — | not captured |
| CL m /F (l h –1 ) | `Q351` · CLm/F | —(suppressed) | l h –1 | — | [l] / [h] | not captured | space_fold (0.95) | bcp13812-tbl-0002:row9:col1, bcp13812-tbl-0002:row9:col3 | — | not captured |
| F m | `Q45` · fm | —(suppressed) | not captured | — | not captured | not captured | space_fold (0.95) | bcp13812-tbl-0002:row10:col1 | — | not captured |
| exponent_for_pru_error | `Q900` · exponent_for_pru_error | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | bcp13812-tbl-0002:row22:col1 | — | not captured |
| ka (1/h) | `Q49` · kabs | —(suppressed) | 1/h | — | 1/h | not captured | review_gapfill (0.7) | Henrich_2021:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'bsv (%)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'bsv (%)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'bsv (%)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'bsv (%)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'bsv (%)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'bsv (%)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'bsv (%)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'bsv (%)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'bsv (%)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'bsv (%)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped duplicate Q69 ('Q m /F (l h –1 )', value '4.41') — already have one for this compound
- dropped duplicate Q290 ('Vc m /F (l)', value '7.04') — already have one for this compound
- dropped duplicate Q82 ('Vp m /F (l)', value '42.3') — already have one for this compound
- dropped PD-category row 'PRU baseline ONSET/OFFSET' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['bcp13812-tbl-0002:row15:col3'])
- dropped PD-category row 'EC 50 (nmol l –1 )' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['bcp13812-tbl-0002:row17:col1', 'bcp13812-tbl-0002:row17:col3'])
- dropped PD-category row 'PRU baseline ‐EC 50 correlation' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['bcp13812-tbl-0002:row18:col3'])
- dropped PD-category row 'E max (%)' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['bcp13812-tbl-0002:row19:col1', 'bcp13812-tbl-0002:row19:col3'])
- dropped PD-category row 'Steepness of exposure‐response (γ)' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['bcp13812-tbl-0002:row20:col1'])
- covariate level 'Exponent for PRU error (α)' → Q900:exponent_for_pru_error = 0.48 (power on Q27)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=ticagrelor
- gap-filled Q49 (kabs) from Henrich_2021's review values (primary lacked it)

**Extraction notes:**
- unparsed cell bcp13812-tbl-0002:row1:col2 = '(3.6)'
- unparsed cell bcp13812-tbl-0002:row1:col4 = '(8.1)'
- unparsed cell bcp13812-tbl-0002:row2:col2 = '(4.7)'
- unparsed cell bcp13812-tbl-0002:row2:col4 = '(45)'
- unparsed cell bcp13812-tbl-0002:row3:col2 = '(4.2)'
- unparsed cell bcp13812-tbl-0002:row4:col2 = '(8.3)'
- unparsed cell bcp13812-tbl-0002:row5:col2 = '(5.8)'
- unparsed cell bcp13812-tbl-0002:row5:col4 = '(7.9)'
- unparsed cell bcp13812-tbl-0002:row6:col2 = '(11)'
- unparsed cell bcp13812-tbl-0002:row7:col4 = '(6.6)'
- unparsed cell bcp13812-tbl-0002:row8:col2 = '(4.5)'
- unparsed cell bcp13812-tbl-0002:row9:col2 = '(3.0)'
- unparsed cell bcp13812-tbl-0002:row9:col4 = '(9.2)'
- unparsed cell bcp13812-tbl-0002:row11:col2 = '(4.7)'
- unparsed cell bcp13812-tbl-0002:row12:col2 = '(6.7)'
- unparsed cell bcp13812-tbl-0002:row13:col2 = '(6.1)'
- unparsed cell bcp13812-tbl-0002:row13:col4 = '(29)'
- unparsed cell bcp13812-tbl-0002:row14:col2 = '(4.9)'
- unparsed cell bcp13812-tbl-0002:row15:col1 = '311 261'
- unparsed cell bcp13812-tbl-0002:row15:col2 = '(1.9) (1.7)'
- unparsed cell bcp13812-tbl-0002:row15:col4 = '(8.9)'
- unparsed cell bcp13812-tbl-0002:row17:col2 = '(5.3)'
- unparsed cell bcp13812-tbl-0002:row17:col4 = '(7.1)'
- unparsed cell bcp13812-tbl-0002:row18:col4 = '(27)'
- unparsed cell bcp13812-tbl-0002:row19:col2 = '(0.1)'
- unparsed cell bcp13812-tbl-0002:row19:col4 = '(6.1)'
- unparsed cell bcp13812-tbl-0002:row20:col2 = '(3.4)'
- unparsed cell bcp13812-tbl-0002:row21:col2 = '(5.6)'
- unparsed cell bcp13812-tbl-0002:row22:col2 = '(2.8)'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 11 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp13812-tbl-0002:row1:col1', 'bcp13812-tbl-0002:row1:col3'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp13812-tbl-0002:row3:col1'] |
| C5_dimension_Q306 | pass | 1 / [time] | not captured | not captured | not captured | ['bcp13812-tbl-0002:row5:col1', 'bcp13812-tbl-0002:row5:col3'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp13812-tbl-0002:row9:col1', 'bcp13812-tbl-0002:row9:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Henrich_2021:review'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp13812-tbl-0002:row2:col1', 'bcp13812-tbl-0002:row2:col3'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp13812-tbl-0002:row4:col1'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['bcp13812-tbl-0002:row6:col1'] |
| C7_apparent_coherence | fail | F==1, Fm==1, no molar corr. | Fm=0.22 present with apparent parameterization | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 16.6 L/h | not captured | not captured | ['bcp13812-tbl-0002:row1:col1', 'bcp13812-tbl-0002:row1:col3'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 156 L | not captured | not captured | ['bcp13812-tbl-0002:row3:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 55.8 L | not captured | not captured | ['bcp13812-tbl-0002:row4:col1'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_ticagrelor/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Åstrand_2019` / `Åstrand_2019::patients with stable coronary artery disease and prior myocardial infarction`)


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
