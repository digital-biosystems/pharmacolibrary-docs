<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;semaglutide&quot;,&quot;href&quot;:&quot;drugs/toxin_semaglutide/&quot;},{&quot;label&quot;:&quot;Carlsson_2018 \u00b7 base&quot;}]"></div>

# semaglutide — `Semaglutide_Carlsson2018_base`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Carlsson Petri KC; Ingwersen SH; Flint A; Zacho J; Overgaard RV et al. (2018). Diabetes therapy : research, treatment and education of diabetes and related disorders 9
  ·  DOI: [10.1007/s13300-018-0458-5](https://doi.org/10.1007/s13300-018-0458-5)

<div class="pk-model-meta" hidden drug="semaglutide" model-id="Semaglutide_Carlsson2018_base" status="extracted" stale="false" population="adults with type 2 diabetes" measured-compound="semaglutide" parameterization="apparent" topology="1C"></div>

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ka (h-1) | `Q49` · kabs | 0.0286 | h-1 | 7.944444444444445e-06 | [1] / [h] | not captured | exact (1.0) | Carlsson_2018_table_S2:row0:col1 | — | not captured |
| CL/F (L/h) | `Q27` · CL/F | 0.0480 | L/h | 1.3333333333333334e-08 | [l] / [h] | 26.6 | exact (1.0) | Carlsson_2018_table_S2:row1:col1, Carlsson_2018_table_S2:row1:col2, Carlsson_2018_table_S2:row1:col3, Carlsson_2018_table_S2:row1:col4, Carlsson_2018_table_S2:row1:col5 | — | not captured |
| V/F (L) | `Q76` · V/F | 12.5 | L | 0.0125 | [l] | 30.4 | exact (1.0) | Carlsson_2018_table_S2:row2:col1, Carlsson_2018_table_S2:row2:col2, Carlsson_2018_table_S2:row2:col3, Carlsson_2018_table_S2:row2:col4, Carlsson_2018_table_S2:row2:col5 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- column 'total' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'total' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'total' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'total' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Body weight, kg' — extend the ontology if this is a real PK parameter (source ['Tab2:row20:col2'])
- dropped unlinked row (NIL): 'BMI, kg/m2' — extend the ontology if this is a real PK parameter (source ['Tab2:row22:col2'])
- dropped unlinked row (NIL): 'Duration of diabetes, years' — extend the ontology if this is a real PK parameter (source ['Tab2:row24:col2'])
- dropped unlinked row (NIL): 'HbA1c, %' — extend the ontology if this is a real PK parameter (source ['Tab2:row26:col2'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=semaglutide
- model-stage split: 'base' is the base model of Carlsson_2018 (paper reports 2 stages: base, full); same population, different model-building step
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- companion parameter table S2 transcribed (15 record(s), model stage 'base')
- companion parameter table S3 transcribed (67 record(s), model stage 'full')
- LLM selected parameter table(s) S2, S3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Carlsson_2018_table_S2:row1:col1', 'Carlsson_2018_table_S2:row1:col2', 'Carlsson_2018_table_S2:row1:col3', 'Carlsson_2018_table_S2:row1:col4', 'Carlsson_2018_table_S2:row1:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Carlsson_2018_table_S2:row0:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Carlsson_2018_table_S2:row2:col1', 'Carlsson_2018_table_S2:row2:col2', 'Carlsson_2018_table_S2:row2:col3', 'Carlsson_2018_table_S2:row2:col4', 'Carlsson_2018_table_S2:row2:col5'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.048 L/h | not captured | not captured | ['Carlsson_2018_table_S2:row1:col1', 'Carlsson_2018_table_S2:row1:col2', 'Carlsson_2018_table_S2:row1:col3', 'Carlsson_2018_table_S2:row1:col4', 'Carlsson_2018_table_S2:row1:col5'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 12.5 L | not captured | not captured | ['Carlsson_2018_table_S2:row2:col1', 'Carlsson_2018_table_S2:row2:col2', 'Carlsson_2018_table_S2:row2:col3', 'Carlsson_2018_table_S2:row2:col4', 'Carlsson_2018_table_S2:row2:col5'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_semaglutide/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Carlsson_2018` / `Carlsson_2018::base`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Model diagram

The structure OpenModelica draws for this model, with **this record's parameter values** in the component labels.

<img src="drugs/toxin_semaglutide/Semaglutide_Carlsson2018_base/Semaglutide_Carlsson2018_base.svg" alt="Semaglutide_Carlsson2018_base diagram" style="max-width:100%;height:auto;background:#fff;border-radius:6px;padding:8px">

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

<dbs-fmusim paramsurl="drugs/toxin_semaglutide/Semaglutide_Carlsson2018_base/Semaglutide_Carlsson2018_base_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/toxin_semaglutide/Semaglutide_Carlsson2018_base/Semaglutide_Carlsson2018_base_sim_controls.json"></dbs-fmusim>

<sub>Template `PK_1C_enteral` · parameters `Semaglutide_Carlsson2018_base_params.json` · controls `Semaglutide_Carlsson2018_base_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
