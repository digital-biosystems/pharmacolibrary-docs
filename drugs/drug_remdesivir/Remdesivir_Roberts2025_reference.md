<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;remdesivir&quot;,&quot;href&quot;:&quot;drugs/drug_remdesivir/&quot;},{&quot;label&quot;:&quot;Roberts_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Remdesivir_Morrisette2020_reference&quot;,&quot;label&quot;:&quot;Morrisette_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_remdesivir/Remdesivir_Morrisette2020_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Remdesivir_Humeniuk2021_reference&quot;,&quot;label&quot;:&quot;Humeniuk_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_remdesivir/Remdesivir_Humeniuk2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Remdesivir_Sukeishi2022_estimates&quot;,&quot;label&quot;:&quot;Sukeishi_2022_estimates&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_remdesivir/Remdesivir_Sukeishi2022_estimates.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Remdesivir_Roberts2025_reference&quot;,&quot;label&quot;:&quot;Roberts_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_remdesivir/Remdesivir_Roberts2025_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# remdesivir — `Remdesivir_Roberts2025_reference`

> ## <span class="pk-badge pk-badge--red" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Rejected</span>

> The remdesivir model was rejected because the simulation used an oral one-compartment structure instead of the defined parent-metabolite topology.

<div class="pk-model-meta" hidden drug="remdesivir" model-id="Remdesivir_Roberts2025_reference" status="rejected" stale="false" population="hospitalised adults with confirmed SARS-CoV-2 infection" measured-compound="GS-441524" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Roberts DM, Liu X, Parker SL, Burke A, Peek J, Carland JE et al. Population Pharmacokinetic Modelling of Remdesivir and Its Metabolite GS-441524 in Hospitalised Patients with COVID-19. Clinical pharmacokinetics 64(5):743–756 (2025).
  ·  DOI: [10.1007/s40262-025-01496-2](https://doi.org/10.1007/s40262-025-01496-2)

## Population and dosing

**Population:** hospitalised adults with confirmed SARS-CoV-2 infection · condition COVID-19 · age group adult · n = This field cannot be an object or array; using the number of subjects contributing to the final model (model-building + external validation). The abstract states 33 patients were enrolled. The methods state 12 patients (model building) + 25 patients (GS-441524) but note the validation was ~1/4 of model building. 33 is the total cohort described in abstract. However, looking at the methods: '49 remdesivir plasma concentrations from 12 patients and 153 GS-441524 concentrations from 25 patients were used for model development.' This is a subset. The abstract says 'In total, 33 patients were enrolled'. I will use 33 as the total study population..

**Dosing:** 100, 200 mg, iv, multiple, every 24 h.

**Dosed compound ≠ measured compound:** dosed remdesivir, measured GS-441524.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CLm/F, Vm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted, plus 2 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_remdesivir/Remdesivir_Roberts2025_reference/Remdesivir_Roberts2025_reference.svg" alt="Remdesivir_Roberts2025_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CL (L/h) | CLm/F | 105 | L/h | 17.8 | 53.1 (29.5% RSE) |
| V (L) | Vm/F | 121 | L | 23.7 |  |
| CL/fm (L/h) | CLm/F | 15.9 | L/h | 8.39 | 36.8 (17.7% RSE) |
| V/fm (L) | Vm/F | 429 | L | 11.4 | 46.0 (22.1% RSE) |
| age_effect_on_v | age_effect_on_v | -1.15 |  | 33.7 |  |
| theta_q22_egfr | theta_q22_egfr | 1.12 |  | 0.02 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The remdesivir model was rejected because the simulation used an oral one-compartment structure instead of the defined parent-metabolite topology.**

The output variable tracked the parent drug concentration rather than the measured metabolite GS-441524, despite the record specifying a parent-metabolite structure. The model builder also substituted library defaults for absorption parameters that were not reported in the paper, leading to an unsupported apparent parameterization. Furthermore, the covariate effects defined for the metabolite were not exercised during the simulation. Extracted — remdesivir: CLm/F 105 L/h, Vm/F 121 L, CLm/F 15.9 L/h, Vm/F 429 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which molecule was measured: this record has GS-441524, the second reading remdesivir; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q351` · CLm/F | 105 | L/h | 2.917e-05 | m3/s | l/h | 17.8 | exact (1) | Tab2:row3:col1 | 53.1 (29.5% RSE) |
| V (L) | `Q367` · Vm/F | 121 | L | 0.121 | m3 | l | 23.7 | exact (1) | Tab2:row4:col1 |  |
| CL/fm (L/h) | `Q351` · CLm/F | 15.9 | L/h | 4.417e-06 | m3/s | l/h | 8.39 | exact (1) | Tab2:row6:col1 | 36.8 (17.7% RSE) |
| V/fm (L) | `Q367` · Vm/F | 429 | L | 0.429 | m3 | l | 11.4 | exact (1) | Tab2:row7:col1 | 46.0 (22.1% RSE) |
| age_effect_on_v | `Q900` · age_effect_on_v | -1.15 |  |  |  |  | 33.7 |  | Tab2:row8:col1 |  |
| theta_q22_egfr | `Q900` · theta_q22_egfr | 1.12 |  |  |  |  | 0.02 |  | Tab2:row9:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['ka', 'Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `invented_absorption`: ka defaulted — not reported in source
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing

**Interpretation flags:**
- compound tags: 11 row(s) → GS-441524 (name 11)
- table section iiv: 'Remdesivir CL' routed out of structural estimates ('Between subject variability (%)')
- table section iiv: 'Remdesivir V' routed out of structural estimates ('Between subject variability (%)')
- table section iiv: 'GS-441524 CL/fm' routed out of structural estimates ('Between subject variability (%)')
- table section iiv: 'GS-441524 V/fm' routed out of structural estimates ('Between subject variability (%)')
- covariate level 'Age effect on V' → Q900:age_effect_on_v = -1.15 (linear_fractional on Q22)
- routed 'Remdesivir proportional error' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- routed 'GS-441524 proportional error' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- covariate effect for Q22 has no base parameter row (kept as unattached equation-variable)
- metabolite gs-441524: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite gs-441524: Q61→Q367 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=GS-441524
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0]
- row roles (LLM): model_class=compartmental; 13/13 row label(s) assigned, 4 linked by role; re-tagged parent→GS-441524 ×5
- review gap-fill skipped: this record measures 'GS-441524', not remdesivir — the review values are the parent's
- engineer: parent_metabolite composite downgraded to a 1C model of the measured compound — the paper reports the metabolite's own CL and V but neither the parent's disposition nor a formation rate, so the parent sub-component could not be populated; the parent's concentration-time course is NOT produced by this model

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.5 (10/20 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['remdesivir', 'gs-441524', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[age_effect_on_v]` | -1.15 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[cl].parameter_id` | Q351 | Q22 | mismatch |
| `gpt-oss-120b` | `parameters[theta_cl_egfr]` |  | 1.12 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q22_egfr]` | 1.12 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v_age]` |  | -1.15 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[v].parameter_id` | Q367 | Q61 | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | GS-441524 | remdesivir | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['Tab2:row3:col1'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['Tab2:row6:col1'] |
| C5_dimension_Q367 | pass | [length] ** 3 |  | ['Tab2:row4:col1'] |
| C5_dimension_Q367 | pass | [length] ** 3 |  | ['Tab2:row7:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable |  | fail | Metabolite_C (measured=GS-441524) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | skipped |  |  | no structural disposition parameters in record |
| T3_topology_template |  | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable; apparent_assumption: not acceptable; invented_absorption: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 100 mg, single dose, first-order absorption (ka 0.5 /h, F 1). Doses in the paper: 100, 200 mg.

<dbs-fmusim paramsurl="drugs/drug_remdesivir/Remdesivir_Roberts2025_reference/Remdesivir_Roberts2025_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_remdesivir/Remdesivir_Roberts2025_reference/Remdesivir_Roberts2025_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Remdesivir_Roberts2025_reference_params.json` · controls `Remdesivir_Roberts2025_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bremdesivir%5D%20Remdesivir_Roberts2025_reference&body=Drug%3A%20remdesivir%0ARecord%3A%20Remdesivir_Roberts2025_reference%0APaper%3A%20Roberts_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_remdesivir/Remdesivir_Roberts2025_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-04 11:19 UTC</sub>
