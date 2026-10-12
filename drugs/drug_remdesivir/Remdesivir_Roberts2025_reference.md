<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;remdesivir&quot;,&quot;href&quot;:&quot;drugs/drug_remdesivir/&quot;},{&quot;label&quot;:&quot;Roberts_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Remdesivir_Humeniuk2021_reference&quot;,&quot;label&quot;:&quot;Humeniuk_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_remdesivir/Remdesivir_Humeniuk2021_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Remdesivir_Morrisette2020_reference&quot;,&quot;label&quot;:&quot;Morrisette_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_remdesivir/Remdesivir_Morrisette2020_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# remdesivir — `Remdesivir_Roberts2025_reference`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.143), gpt-oss:120b (not confirmed, agreement 0.286). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model available in **Models**; browser simulation unavailable.

> **Caveat** (`covariates_not_exercised`): Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

### Reviewer guidance

**The remdesivir parent model was quarantined because remdesivir's clearance, volume of distribution, absorption rate constant and absorption lag time had no extracted values and library placeholder values stood in; all four extracted parameters (CL 105 L/h, V 121 L, CLfm 15.9 L/h, V1/F 429 L) describe the metabolite GS-441524.**

The record defines a parent–metabolite structure (remdesivir metabolised to GS-441524), but every parameter with a value belongs to GS-441524, so the parent's PK was left at placeholder defaults and the model was held back rather than published with invented numbers. The builder also assumed F=1 and Fm=1 with no molar correction (apparent parameterization) and defaulted ka, which was not reported in the source. The structure check expected a parent–metabolite model but obtained a one-compartment enteral model, and the covariate effects (age -1.15, eGFR 1.12) were defined but not exercised in simulation. A second reader also disagreed on the dosed compound and primary analyte and returned null for several parameter values, so the extraction is inconclusive on those fields. Extracted — GS-441524: CL 105 L/h, V 121 L, CLfm 15.9 L/h, V1/F 429 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has remdesivir, the second reading unknown; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `model_quarantined` (reviewed 2026-10-05 09:31:36.009574+00:00) predates the upstream re-run (2026-10-07 16:33:25.511885+00:00). Current validate status: `extracted`.

> **Dose compound ≠ measured compound:** dosed `remdesivir`, measured `GS-441524`.

## Citation
Roberts DM et al., Population Pharmacokinetic Modelling of…, Clinical pharmacokinetics (2025)
  ·  DOI: [10.1007/s40262-025-01496-2](https://doi.org/10.1007/s40262-025-01496-2)

<div class="pk-model-meta" hidden drug="remdesivir" model-id="Remdesivir_Roberts2025_reference" status="extracted" stale="true" population="hospitalised adults with COVID-19" measured-compound="GS-441524" parameterization="apparent" topology="parent_metabolite"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 4 extracted, plus 2 covariate effects.

**Parameterization:** CLm/F, V1/F, Vm/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q351` · CLm/F | 105 | L/h | 2.9166666666666666e-05 | [l] / [h] | not captured | exact (1.0) | Tab2:row3:col1, Tab2:row3:col2, Tab2:row3:col4, Tab2:row3:col5 | — | 53.1 (None% RSE) |
| V (L) | `Q367` · Vm/F | 121 | L | 0.121 | [l] | not captured | exact (1.0) | Tab2:row4:col1, Tab2:row4:col2, Tab2:row4:col4, Tab2:row4:col5 | — | not captured |
| CL/fm (L/h) | `Q351` · CLm/F | 15.9 | L/h | 4.416666666666667e-06 | [l] / [h] | not captured | exact (1.0) | Tab2:row6:col1, Tab2:row6:col2, Tab2:row6:col4, Tab2:row6:col5 | — | not captured |
| V/fm (L) | `Q290` · V1/F | 429 | L | 0.429 | [l] | not captured | exact (1.0) | Tab2:row7:col1, Tab2:row7:col2, Tab2:row7:col4, Tab2:row7:col5 | — | not captured |
| egfr_effect_on_cl | `Q900` · egfr_effect_on_cl | 1.12 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab2:row9:col1, Tab2:row9:col2, Tab2:row9:col4, Tab2:row9:col5 | — | not captured |
| theta_q61_age | `Q900` · theta_q61_age | -1.15 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab2:row8:col1, Tab2:row8:col2, Tab2:row8:col4 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['ka', 'Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `invented_absorption`: ka defaulted — not reported in source
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing

**Interpretation flags:**
- table section iiv: 'Remdesivir CL' routed out of structural estimates ('Between subject variability (%)')
- table section iiv: 'Remdesivir V' routed out of structural estimates ('Between subject variability (%)')
- table section iiv: 'GS-441524 CL/fm' routed out of structural estimates ('Between subject variability (%)')
- table section iiv: 'GS-441524 V/fm' routed out of structural estimates ('Between subject variability (%)')
- covariate level 'eGFR effect on CL' → Q900:egfr_effect_on_cl = 1.12 (linear_fractional on Q22)
- routed 'Remdesivir proportional error' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- routed 'GS-441524 proportional error' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- covariate effect for Q61 has no base parameter row (kept as unattached equation-variable)
- metabolite gs-441524: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite gs-441524: Q61→Q367 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite gs-441524: Q27→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=GS-441524
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [1]
- row roles (LLM): model_class=compartmental; 13/13 row label(s) assigned, 36 linked by role; re-tagged parent→GS-441524 ×29
- review gap-fill skipped: this record measures 'GS-441524', not remdesivir — the review values are the parent's

**Extraction notes:**
- unparsed cell Tab2:row8:col5 = '– 2.82 to – 0.51'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.143 (2/14 fields) | 12 |
| `gpt-oss:120b` | not confirmed | 0.286 (4/14 fields) | 10 |

<details><summary>22 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl/fm].parameter_id` | Q351 | Q370 | mismatch |
| `gpt-oss-120b` | `parameters[cl/fm].value` | 15.9 | 13.2 | mismatch |
| `gpt-oss-120b` | `parameters[cl].parameter_id` | Q351 | Q22 | mismatch |
| `gpt-oss-120b` | `parameters[cl].value` | 105 | 69.3 | mismatch |
| `gpt-oss-120b` | `parameters[egfr_effect_on_cl]` | 1.12 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q22_egfr]` | not captured | 0.78 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q61_age].value` | -1.15 | -1.18 | mismatch |
| `gpt-oss-120b` | `parameters[v/fm].value` | 429 | 353 | mismatch |
| `gpt-oss-120b` | `parameters[v].parameter_id` | Q367 | Q61 | mismatch |
| `gpt-oss-120b` | `parameters[v].value` | 121 | 45.9 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | remdesivir | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | GS-441524 | unknown | mismatch |
| `gpt-oss:120b` | `parameters[cl]` | 105 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl]` | not captured | 105 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_cl_egfr]` | 1.12 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q22_egfr]` | not captured | 1.12 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_q61_age]` | -1.15 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_v_age]` | not captured | -1.15 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v]` | 121 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[v]` | not captured | 121 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | remdesivir | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | remdesivir | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row7:col1', 'Tab2:row7:col2', 'Tab2:row7:col4', 'Tab2:row7:col5'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row3:col1', 'Tab2:row3:col2', 'Tab2:row3:col4', 'Tab2:row3:col5'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row6:col1', 'Tab2:row6:col2', 'Tab2:row6:col4', 'Tab2:row6:col5'] |
| C5_dimension_Q367 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row4:col1', 'Tab2:row4:col2', 'Tab2:row4:col4', 'Tab2:row4:col5'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q290 | pass | volume within physiological range | 429 L | not captured | not captured | ['Tab2:row7:col1', 'Tab2:row7:col2', 'Tab2:row7:col4', 'Tab2:row7:col5'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_param_coverage | not captured | pass | 3 scholar param(s) emitted or defaulted | 3 covered | not captured | all structural parameters accounted for |
| T3_rate_constant_conversion | not captured | pass | Kfm (rate_constant) → CL = k·V | no explicit k·V edge found in model | not captured | rate constant must not be used raw as a clearance |
| T3_topology_template | not captured | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable; apparent_assumption: not acceptable; invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_remdesivir/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Roberts_2025` / `Roberts_2025::reference`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_remdesivir/models/modelica/_needs_review/Remdesivir_Roberts2025_reference.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_remdesivir/models/modelica/_needs_review/Remdesivir_Roberts2025_reference.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_remdesivir/Remdesivir_Roberts2025_reference/Remdesivir_Roberts2025_reference_modelica.zip" download>Remdesivir_Roberts2025_reference_modelica.zip</a> <span class="pk-size">(5.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_remdesivir/Remdesivir_Roberts2025_reference/Remdesivir_Roberts2025_reference_matlab.zip" download>Remdesivir_Roberts2025_reference_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_remdesivir/Remdesivir_Roberts2025_reference/Remdesivir_Roberts2025_reference_matlab_simbio.zip" download>Remdesivir_Roberts2025_reference_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_remdesivir/Remdesivir_Roberts2025_reference/Remdesivir_Roberts2025_reference_sbml.zip" download>Remdesivir_Roberts2025_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_remdesivir/Remdesivir_Roberts2025_reference/Remdesivir_Roberts2025_reference_cellml.zip" download>Remdesivir_Roberts2025_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 16:33 UTC</sub>
