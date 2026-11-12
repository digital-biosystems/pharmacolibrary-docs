<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;procainamide&quot;,&quot;href&quot;:&quot;drugs/drug_procainamide/&quot;},{&quot;label&quot;:&quot;Papich_1986 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Procainamide_Ellis1994_reference&quot;,&quot;label&quot;:&quot;Ellis_1994_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_procainamide/Procainamide_Ellis1994_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Procainamide_Grasela1984_reference&quot;,&quot;label&quot;:&quot;Grasela_1984_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_procainamide/Procainamide_Grasela1984_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Procainamide_Kamath1981_i_one_compartment_open_model&quot;,&quot;label&quot;:&quot;Kamath_1981_i_one_compartment_open_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_procainamide/Procainamide_Kamath1981_i_one_compartment_open_model.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Procainamide_Papich1986_reference&quot;,&quot;label&quot;:&quot;Papich_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_procainamide/Procainamide_Papich1986_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;pd_Kharidia_1996_QT&quot;,&quot;label&quot;:&quot;Kharidia_1996 \u00b7 QT&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_procainamide/pd_Kharidia_1996_QT.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Liu_1991_QTc&quot;,&quot;label&quot;:&quot;Liu_1991 \u00b7 QTc&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_procainamide/pd_Liu_1991_QTc.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Liu_1991_QTc_2&quot;,&quot;label&quot;:&quot;Liu_1991 \u00b7 QTc&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_procainamide/pd_Liu_1991_QTc_2.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# procainamide — `Procainamide_Papich1986_reference`

> ## <span class="pk-badge pk-badge--red" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">dog</span>

> The record was rejected because absorption rate and delay were left at library defaults while the single-compartment model structure mismatched the required parent-metabolite topology.

<div class="pk-model-meta" hidden drug="procainamide" model-id="Procainamide_Papich1986_reference" status="rejected" stale="false" population="dogs" measured-compound="procainamide" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Papich MG, Davis LE, Davis CA, McKiernan BC, Brown SA. Pharmacokinetics of procainamide hydrochloride in dogs. American journal of veterinary research 47(11):2351–2358 (1986).

## Population and dosing

**Population:** dogs · condition healthy · n = 14.

> **Species: dog.** This record comes from an animal study (dog), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_procainamide/Procainamide_Papich1986_reference/Procainamide_Papich1986_reference.svg" alt="Procainamide_Papich1986_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| elimination half-life | t1/2z | 2.43 | hours |
| apparent volume of distribution | V/F | 1.44 | L/kg |
| systemic clearance | CL | 0.412 | L/kg/hr |
| bioavailability | Fab | 85 | % |
| absorption half-life | t1/2ka | 0.5 | hours |
| estimated elimination half-life of NAPA | t1/2z | 4.7 | hours |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">dog</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was rejected because absorption rate and delay were left at library defaults while the single-compartment model structure mismatched the required parent-metabolite topology.**

The record defines a parent-metabolite structure with N-acetylprocainamide, but the model was built with a single-compartment structure that does not include a metabolite compartment. Consequently, the model output the parent drug concentration instead of the specified metabolite. Additionally, the absorption rate constant and lag time were not reported in the abstract, so library placeholders were used. Extracted — procainamide: t1/2z 2.43 hours, V/F 1.44 L/kg, CL 0.412 L/kg/hr, Fab 85 %, t1/2ka 0.5 hours; N-acetylprocainamide: t1/2z 4.7 hours.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has procainamide, the second reading unknown; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| elimination half-life | `Q57` · t1/2z | 2.43 | hours | 8748 | s | h | llm (0.6) | Papich_1986:abstract |
| apparent volume of distribution | `Q76` · V/F | 1.44 | L/kg | 0.1008 | m3 | l/kg | exact (1) | Papich_1986:abstract, Papich_1986:abstract |
| systemic clearance | `Q22` · CL | 0.412 | L/kg/hr | 8.011e-06 | m3/s | l/(h·kg) | llm_confirmed (0.6) | Papich_1986:abstract, Papich_1986:abstract |
| bioavailability | `Q40` · Fab | 85 | % |  |  |  | exact (1) | Papich_1986:abstract |
| absorption half-life | `Q95` · t1/2ka | 0.5 | hours | 1800 | s | h | llm_corrected (0.6) | Papich_1986:abstract |
| estimated elimination half-life of NAPA | `Q57` · t1/2z | 4.7 | hours | 1.692e+04 | s | h | llm (0.6) | Papich_1986:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `ka_from_half_life`: ka = ln2 / t1/2ka = ln2 / 1800 s = 0.0003851/s (absorption half-life 0.5 hours reported, ka not)

**Interpretation flags:**
- covariate category for t1/2z from footnote/prose kept as documentation only (['Papich_1986:abstract'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=procainamide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=noncompartmental; 7/7 row label(s) assigned, 0 linked by role; re-tagged procainamide→parent ×8, procainamide→N-acetylprocainamide ×1
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- engineer: parent → metabolite not buildable on PK_3M_9C (None) — the measured compound's 1-compartment model instead

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Papich_1986_metadata.yaml (9 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.25 (4/16 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[absorption half-life]` | 0.5 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[absorption half-life]` |  | 0.5 | only_one_extracted |
| `gpt-oss:120b` | `parameters[apparent volume of distribution]` | 1.44 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[apparent volume of distribution]` |  | 1.44 | only_one_extracted |
| `gpt-oss:120b` | `parameters[bioavailability]` | 85 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[bioavailability]` |  | 85 | only_one_extracted |
| `gpt-oss:120b` | `parameters[elimination half-life]` | 2.43 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[elimination half-life]` |  | 2.43 | only_one_extracted |
| `gpt-oss:120b` | `parameters[systemic clearance]` | 0.412 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[systemic clearance]` |  | 0.412 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | procainamide | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | procainamide | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Papich_1986:abstract', 'Papich_1986:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Papich_1986:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Papich_1986:abstract'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Papich_1986:abstract', 'Papich_1986:abstract'] |
| C5_dimension_Q95 | pass | [time] |  | ['Papich_1986:abstract'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 28.8 L/h | ['Papich_1986:abstract', 'Papich_1986:abstract'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 101 L | ['Papich_1986:abstract', 'Papich_1986:abstract'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_output_variable |  | fail | Metabolite_C (measured=procainamide) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 2 scholar param(s) emitted or defaulted | 2 covered | all structural parameters accounted for |
| T3_shared_parameters |  | pass | 1 shared param(s) bound once | bound once | shared params must bind one value to both compartments |
| T3_topology_template |  | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable; invented_absorption: not acceptable | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 3000 mg, single dose, first-order absorption (ka 1.39 /h, F 1). _The paper's dose was not captured; the default is the WHO ATC DDD 3000 mg oral (C01BA02) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_procainamide/Procainamide_Papich1986_reference/Procainamide_Papich1986_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_procainamide/Procainamide_Papich1986_reference/Procainamide_Papich1986_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Procainamide_Papich1986_reference_params.json` · controls `Procainamide_Papich1986_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bprocainamide%5D%20Procainamide_Papich1986_reference&body=Drug%3A%20procainamide%0ARecord%3A%20Procainamide_Papich1986_reference%0APaper%3A%20Papich_1986%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_procainamide/Procainamide_Papich1986_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-10-06 04:05 UTC</sub>
