<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;Midomafetamine&quot;,&quot;href&quot;:&quot;drugs/drug_midomafetamine/&quot;},{&quot;label&quot;:&quot;Huestis_2025 \u00b7 mdma_pharmacokinetic_parameters_and_random_effects_estimates_cv&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Midomafetamine_Hampsey2026_reference&quot;,&quot;label&quot;:&quot;Hampsey_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_midomafetamine/Midomafetamine_Hampsey2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Midomafetamine_chov2025_reference&quot;,&quot;label&quot;:&quot;\u0160\u00edchov\u00e1_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_midomafetamine/Midomafetamine_chov2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Midomafetamine_Huestis2025_mdma_pharmacokinetic_parameters_a&quot;,&quot;label&quot;:&quot;Huestis_2025_mdma_pharmacokinetic_parameters_and_random_effects_estimates&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_midomafetamine/Midomafetamine_Huestis2025_mdma_pharmacokinetic_parameters_a.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Midomafetamine_Huestis2025_mdma_pharmacokinetic_parameters_a&quot;,&quot;label&quot;:&quot;Huestis_2025_mdma_pharmacokinetic_parameters_and_random_effects_estimates_cv&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_midomafetamine/Midomafetamine_Huestis2025_mdma_pharmacokinetic_parameters_a.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Midomafetamine — `Midomafetamine_Huestis2025_mdma_pharmacokinetic_parameters_a`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Midomafetamine model rejected for an absorption rate constant of 60.2 1/h producing a simulated peak time of 0.209 hours versus the paper's 4 hours, and a missing metabolite compartment.

<div class="pk-model-meta" hidden drug="Midomafetamine" model-id="Midomafetamine_Huestis2025_mdma_pharmacokinetic_parameters_a" status="rejected" stale="false" population="healthy adults" measured-compound="midomafetamine" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Huestis MA, Smith WB, Leonowens C, Blanchard R, Viaccoz A, Spargo E et al. MDMA pharmacokinetics: A population and physiologically based pharmacokinetics model-informed analysis. CPT: pharmacometrics & systems pharmacology 14(2):376–388 (2025).
  ·  DOI: [10.1002/psp4.13282](https://doi.org/10.1002/psp4.13282)

## Population and dosing

**Population:** healthy adults · condition healthy · age group adult.

**Dosing:** 120, 180 mg, oral, multiple.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 3 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_midomafetamine/Midomafetamine_Huestis2025_mdma_pharmacokinetic_parameters_a/Midomafetamine_Huestis2025_mdma_pharmacokinetic_parameters_a.svg" alt="Midomafetamine_Huestis2025_mdma_pharmacokinetic_parameters_a diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL/F (L/h) | CL/F | 30.5 | L/h |
| V2/F (L) | V1/F | 19.9 | L |
| ka (1/h) | kabs | 60.2 | 1/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Midomafetamine model rejected for an absorption rate constant of 60.2 1/h producing a simulated peak time of 0.209 hours versus the paper's 4 hours, and a missing metabolite compartment.**

The absorption rate constant of 60.2 1/h is unrealistically fast, resulting in a simulated time to peak concentration of 0.209 hours which deviates significantly from the reported 4.0 hours. Additionally, the model structure lacks the necessary compartment for the measured metabolite MDA, and the output variable is incorrectly assigned to the parent drug instead of the measured analyte. The model also relies on defaulted parameters such as Tlag and assumes unit bioavailability, further invalidating its fit to the observed data. Extracted — midomafetamine: CL/F 30.5 L/h, V1/F 19.9 L, kabs 60.2 1/h.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 30.5 | L/h | 8.472e-06 | m3/s | l/h | exact (1) | psp413282-tbl-0002:row2:col5 |
| V2/F (L) | `Q290` · V1/F | 19.9 | L | 0.0199 | m3 | l | exact (1) | psp413282-tbl-0002:row3:col5 |
| ka (1/h) | `Q49` · kabs | 60.2 | 1/h | 0.01672 | 1/s | 1/h | exact (1) | psp413282-tbl-0002:row4:col5 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- unit_dimension_mismatch: 'D1 (h)' → Q49 (unit '[time]' vs ontology '1 / [time]') — route to review
- dropped duplicate Q49 ('D1 (h)', value '153') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=midomafetamine
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0]
- population split: 'mdma pharmacokinetic parameters and random effects / estimates (%cv)' subgroup of Huestis_2025 (paper reports 2 populations: mdma pharmacokinetic parameters and random effects / estimates, mdma pharmacokinetic parameters and random effects / estimates (%cv))
- row roles (LLM): model_class=compartmental; 15/15 row label(s) assigned, 11 linked by role; re-tagged parent→MDA ×1
- molar mass: none of 3 PubChem candidate(s) is 'MDA' (LLM) — left in mass units
- molar mass: none found for 'MDA' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it
- engineer: parent → metabolite not buildable on PK_3M_9C (None) — the measured compound's 1-compartment model instead

**Extraction notes:**
- table psp413282-tbl-0002: ambiguous_uncertainty_binding
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['psp413282-tbl-0002:row2:col5'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['psp413282-tbl-0002:row3:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['psp413282-tbl-0002:row4:col5'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 30.5 L/h | ['psp413282-tbl-0002:row2:col5'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 19.9 L | ['psp413282-tbl-0002:row3:col5'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable |  | fail | Metabolite_C (measured=midomafetamine) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 3 scholar param(s) emitted or defaulted | 3 covered |  | all structural parameters accounted for |
| T3_rate_constant_conversion |  | pass | Kfm (rate_constant) → CL = k·V | no explicit k·V edge found in model |  | rate constant must not be used raw as a clearance |
| T3_topology_template |  | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | dev1: not acceptable; dev2: not acceptable |  | LLM adjudication → deterministic rule |
| T1_tmax | reference | fail | 4 | 0.2087 | 0.0522 | h→SI vs simulated h |
| T1_tmax | reference | fail | 2 | 0.2087 | 0.1044 | h→SI vs simulated h |
| T1_tmax | reference | fail | 2 | 0.2087 | 0.1044 | h→SI vs simulated h |
| T1_tmax | reference | fail | 1 | 0.2087 | 0.2087 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 120 mg, single dose, first-order absorption (ka 60.2 /h, F 1). Doses in the paper: 120, 180 mg.

<dbs-fmusim paramsurl="drugs/drug_midomafetamine/Midomafetamine_Huestis2025_mdma_pharmacokinetic_parameters_a/Midomafetamine_Huestis2025_mdma_pharmacokinetic_parameters_a_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_midomafetamine/Midomafetamine_Huestis2025_mdma_pharmacokinetic_parameters_a/Midomafetamine_Huestis2025_mdma_pharmacokinetic_parameters_a_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Midomafetamine_Huestis2025_mdma_pharmacokinetic_parameters_a_params.json` · controls `Midomafetamine_Huestis2025_mdma_pharmacokinetic_parameters_a_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmidomafetamine%5D%20Midomafetamine_Huestis2025_mdma_pharmacokinetic_parameters_a&body=Drug%3A%20midomafetamine%0ARecord%3A%20Midomafetamine_Huestis2025_mdma_pharmacokinetic_parameters_a%0APaper%3A%20Huestis_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_midomafetamine/Midomafetamine_Huestis2025_mdma_pharmacokinetic_parameters_a%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-22 09:09 UTC</sub>
