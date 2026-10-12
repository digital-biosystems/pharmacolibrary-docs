<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;metformin&quot;,&quot;href&quot;:&quot;drugs/toxin_metformin/&quot;},{&quot;label&quot;:&quot;Mak_2023 \u00b7 saem_estimates&quot;}]"></div>

# metformin — `Metformin_Mak2023_saem_estimates`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Mak WY; Ooi QX; Cruz CV; Looi I; Yuen KH; Standing JF et al. (2023). British journal of clinical pharmacology 89
  ·  DOI: [10.1111/bcp.15496](https://doi.org/10.1111/bcp.15496)

<div class="pk-model-meta" hidden drug="metformin" model-id="Metformin_Mak2023_saem_estimates" status="extracted" stale="false" population="healthy adults" measured-compound="metformin" parameterization="mechanistic" topology="1C"></div>

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| k a,fasted (h⁻¹) | `Q49` · kabs | 1.34 | h⁻¹ | 0.00037222222222222225 | [1] / [h] | 32.8 | llm (0.6) | Mak_2023_table_2:row0:col1, Mak_2023_table_2:row0:col2 | — | not captured |
| CL (L·h⁻¹) | `Q22` · CL | 54.9 | L·h⁻¹ | 1.525e-05 | [l] / [h] | 0.841 | exact (1.0) | Mak_2023_table_2:row2:col1, Mak_2023_table_2:row2:col2 | — | not captured |
| V (L) | `Q61` · V | 260 | L | 0.26 | [l] | 4.84e-5 | exact (1.0) | Mak_2023_table_2:row3:col1, Mak_2023_table_2:row3:col2 | — | not captured |
| F fed | `Q87` · Frel | 0.670 | not captured | not captured | not captured | 6.94 | llm (0.6) | Mak_2023_table_2:row4:col1, Mak_2023_table_2:row4:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- dropped duplicate Q49 ('k a,fed (h⁻¹)', value '0.496') — already have one for this compound
- dropped unlinked row (NIL): 'D fasted' — extend the ontology if this is a real PK parameter (source ['Mak_2023_table_2:row5:col1', 'Mak_2023_table_2:row5:col2'])
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CL (L·h⁻¹)); Q61 (V (L))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=metformin
- population split: 'saem estimates' subgroup of Mak_2023 (paper reports 2 populations: focei estimates, saem estimates)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Mak_2023_table_2:row2:col1', 'Mak_2023_table_2:row2:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Mak_2023_table_2:row0:col1', 'Mak_2023_table_2:row0:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Mak_2023_table_2:row3:col1', 'Mak_2023_table_2:row3:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 54.9 | not captured | not captured | ['Mak_2023_table_2:row2:col1', 'Mak_2023_table_2:row2:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 54.9 L/h | not captured | not captured | ['Mak_2023_table_2:row2:col1', 'Mak_2023_table_2:row2:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 260 L | not captured | not captured | ['Mak_2023_table_2:row3:col1', 'Mak_2023_table_2:row3:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_metformin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Mak_2023` / `Mak_2023::saem_estimates`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Model diagram

The structure OpenModelica draws for this model, with **this record's parameter values** in the component labels.

<img src="drugs/toxin_metformin/Metformin_Mak2023_saem_estimates/Metformin_Mak2023_saem_estimates.svg" alt="Metformin_Mak2023_saem_estimates diagram" style="max-width:100%;height:auto;background:#fff;border-radius:6px;padding:8px">

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

<dbs-fmusim paramsurl="drugs/toxin_metformin/Metformin_Mak2023_saem_estimates/Metformin_Mak2023_saem_estimates_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/toxin_metformin/Metformin_Mak2023_saem_estimates/Metformin_Mak2023_saem_estimates_sim_controls.json"></dbs-fmusim>

<sub>Template `PK_1C_enteral` · parameters `Metformin_Mak2023_saem_estimates_params.json` · controls `Metformin_Mak2023_saem_estimates_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
