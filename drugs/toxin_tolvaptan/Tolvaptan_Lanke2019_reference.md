<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03X&quot;,&quot;href&quot;:&quot;atc/C03X.md&quot;},{&quot;label&quot;:&quot;tolvaptan&quot;,&quot;href&quot;:&quot;drugs/toxin_tolvaptan/&quot;},{&quot;label&quot;:&quot;Lanke_2019 \u00b7 review reference&quot;}]"></div>

# tolvaptan — `Tolvaptan_Lanke2019_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span>

### Reviewer guidance

**What is wrong:** no model exists yet, so there is nothing to judge

**Steps:**
1. No curator action. Run the engineer for this drug.

<sub>owner: **engineer** · guidance written by playbook</sub>

> ⚠️ **STALE** — review status `not_modelled` (reviewed 2026-09-11 08:47:09.903922+00:00) predates the upstream re-run (2026-09-16 18:03:32.751577+00:00). Current validate status: `extracted`.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Lanke S; Shoaf SE et al. (2019). Journal of clinical pharmacology 59
  ·  DOI: [10.1002/jcph.1370](https://doi.org/10.1002/jcph.1370)

<div class="pk-model-meta" hidden drug="tolvaptan" model-id="Tolvaptan_Lanke2019_reference" status="extracted" stale="true" population="adults with autosomal dominant polycystic kidney disease" measured-compound="tolvaptan" parameterization="apparent" topology="1C"></div>

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 13.4 | L/h | 3.7222222222222225e-06 | [l] / [h] | not captured | exact (1.0) | jcph1370-tbl-0003:row2:col1, jcph1370-tbl-0003:row2:col2, jcph1370-tbl-0003:row2:col3, jcph1370-tbl-0003:row2:col4, jcph1370-tbl-0003:row2:col5 | — | not captured |
| Vd/F (L) | `Q76` · V/F | 120 | L | 0.12 | [l] | not captured | exact (1.0) | jcph1370-tbl-0003:row6:col1, jcph1370-tbl-0003:row6:col2, jcph1370-tbl-0003:row6:col3, jcph1370-tbl-0003:row6:col4, jcph1370-tbl-0003:row6:col5 | — | not captured |
| D1 (h) | `Q310` · D1 | 0.78 | h | 2808.0 | [h] | not captured | exact (1.0) | jcph1370-tbl-0003:row8:col1, jcph1370-tbl-0003:row8:col2, jcph1370-tbl-0003:row8:col3, jcph1370-tbl-0003:row8:col4, jcph1370-tbl-0003:row8:col5 | — | not captured |
| theta_q319_egfr_power | `Q900` · theta_q319_egfr_power | 0.54 | not captured | not captured | not captured | not captured | not captured (not captured) | jcph1370-tbl-0003:row3:col2, jcph1370-tbl-0003:row3:col3, jcph1370-tbl-0003:row3:col4, jcph1370-tbl-0003:row3:col5 | — | not captured |
| theta_q319_wt_power | `Q900` · theta_q319_wt_power | -0.35 | not captured | not captured | not captured | not captured | not captured (not captured) | jcph1370-tbl-0003:row4:col2, jcph1370-tbl-0003:row4:col3, jcph1370-tbl-0003:row4:col4, jcph1370-tbl-0003:row4:col5 | — | not captured |
| theta_q319_wt_power | `Q900` · theta_q319_wt_power | 0.44 | not captured | not captured | not captured | not captured | not captured (not captured) | jcph1370-tbl-0003:row7:col2, jcph1370-tbl-0003:row7:col3, jcph1370-tbl-0003:row7:col4, jcph1370-tbl-0003:row7:col5 | — | not captured |
| k a (h -1 ) | `Q49` · kabs | 1.34 | h -1 | 0.00037222222222222225 | 1/h | not captured | review_gapfill (0.7) | Van_2013_2:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped unlinked row (NIL): 'Fractional change of CL/F with Inha' — extend the ontology if this is a real PK parameter (source ['jcph1370-tbl-0003:row5:col2', 'jcph1370-tbl-0003:row5:col3', 'jcph1370-tbl-0003:row5:col4', 'jcph1370-tbl-0003:row5:col5'])
- dropped PD-category row 'Dose50 (mg)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['jcph1370-tbl-0003:row9:col1', 'jcph1370-tbl-0003:row9:col2', 'jcph1370-tbl-0003:row9:col3', 'jcph1370-tbl-0003:row9:col4', 'jcph1370-tbl-0003:row9:col5'])
- dropped unlinked row (NIL): 'Dosemax (mg)' — extend the ontology if this is a real PK parameter (source ['jcph1370-tbl-0003:row10:col1', 'jcph1370-tbl-0003:row10:col2', 'jcph1370-tbl-0003:row10:col3', 'jcph1370-tbl-0003:row10:col4', 'jcph1370-tbl-0003:row10:col5'])
- unit_dimension_unknown: 'n = 1000' (CL/F)
- dropped duplicate Q27 ('CL/F', value '0.46') — already have one for this compound
- unit_dimension_unknown: 'n = 1000' (V/F)
- dropped duplicate Q76 ('Vd/F', value '0.66') — already have one for this compound
- unit_dimension_unknown: 'n = 1000' (D1)
- dropped duplicate Q310 ('D1', value '7.03') — already have one for this compound
- dropped PD-category row 'Dose50' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['jcph1370-tbl-0003:row18:col1', 'jcph1370-tbl-0003:row18:col2', 'jcph1370-tbl-0003:row18:col3', 'jcph1370-tbl-0003:row18:col4', 'jcph1370-tbl-0003:row18:col5'])
- dropped unlinked row (NIL): 'Dosemax' — extend the ontology if this is a real PK parameter (source ['jcph1370-tbl-0003:row19:col1', 'jcph1370-tbl-0003:row19:col2', 'jcph1370-tbl-0003:row19:col3', 'jcph1370-tbl-0003:row19:col4', 'jcph1370-tbl-0003:row19:col5'])
- dropped unlinked row (NIL): 'Additive' — extend the ontology if this is a real PK parameter (source ['jcph1370-tbl-0003:row21:col1', 'jcph1370-tbl-0003:row21:col2', 'jcph1370-tbl-0003:row21:col3', 'jcph1370-tbl-0003:row21:col4', 'jcph1370-tbl-0003:row21:col5'])
- routed 'Proportional' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=tolvaptan
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Van_2013_2's review values (primary lacked it)

**Extraction notes:**
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['jcph1370-tbl-0003:row2:col1', 'jcph1370-tbl-0003:row2:col2', 'jcph1370-tbl-0003:row2:col3', 'jcph1370-tbl-0003:row2:col4', 'jcph1370-tbl-0003:row2:col5'] |
| C5_dimension_Q310 | pass | [time] | not captured | not captured | not captured | ['jcph1370-tbl-0003:row8:col1', 'jcph1370-tbl-0003:row8:col2', 'jcph1370-tbl-0003:row8:col3', 'jcph1370-tbl-0003:row8:col4', 'jcph1370-tbl-0003:row8:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Van_2013_2:review'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['jcph1370-tbl-0003:row6:col1', 'jcph1370-tbl-0003:row6:col2', 'jcph1370-tbl-0003:row6:col3', 'jcph1370-tbl-0003:row6:col4', 'jcph1370-tbl-0003:row6:col5'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 13.4 L/h | not captured | not captured | ['jcph1370-tbl-0003:row2:col1', 'jcph1370-tbl-0003:row2:col2', 'jcph1370-tbl-0003:row2:col3', 'jcph1370-tbl-0003:row2:col4', 'jcph1370-tbl-0003:row2:col5'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 120 L | not captured | not captured | ['jcph1370-tbl-0003:row6:col1', 'jcph1370-tbl-0003:row6:col2', 'jcph1370-tbl-0003:row6:col3', 'jcph1370-tbl-0003:row6:col4', 'jcph1370-tbl-0003:row6:col5'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_param_coverage | not captured | skipped | not captured | not captured | not captured | no emitted model to inspect (engineer build absent) |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_tolvaptan/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Lanke_2019` / `Lanke_2019::review reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Model diagram

The structure OpenModelica draws for this model, with **this record's parameter values** in the component labels.

<img src="drugs/toxin_tolvaptan/Tolvaptan_Lanke2019_reference/Tolvaptan_Lanke2019_reference.svg" alt="Tolvaptan_Lanke2019_reference diagram" style="max-width:100%;height:auto;background:#fff;border-radius:6px;padding:8px">

## Model downloads

No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

Runs **this record's model** in your browser as WebAssembly — nothing to install. The sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited.

<dbs-fmusim paramsurl="drugs/toxin_tolvaptan/Tolvaptan_Lanke2019_reference/Tolvaptan_Lanke2019_reference_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/toxin_tolvaptan/Tolvaptan_Lanke2019_reference/Tolvaptan_Lanke2019_reference_sim_controls.json"></dbs-fmusim>

<sub>Template `PK_1C` · parameters `Tolvaptan_Lanke2019_reference_params.json` · controls `Tolvaptan_Lanke2019_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
