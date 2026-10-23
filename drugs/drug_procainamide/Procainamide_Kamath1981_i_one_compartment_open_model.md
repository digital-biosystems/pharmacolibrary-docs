<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;procainamide&quot;,&quot;href&quot;:&quot;drugs/drug_procainamide/&quot;},{&quot;label&quot;:&quot;Kamath_1981 \u00b7 i_one_compartment_open_model&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Procainamide_Grasela1984_reference&quot;,&quot;label&quot;:&quot;Grasela_1984_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_procainamide/Procainamide_Grasela1984_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Procainamide_Papich1986_reference&quot;,&quot;label&quot;:&quot;Papich_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_procainamide/Procainamide_Papich1986_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Procainamide_Ellis1994_reference&quot;,&quot;label&quot;:&quot;Ellis_1994_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_procainamide/Procainamide_Ellis1994_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Procainamide_Kamath1981_i_one_compartment_open_model&quot;,&quot;label&quot;:&quot;Kamath_1981_i_one_compartment_open_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_procainamide/Procainamide_Kamath1981_i_one_compartment_open_model.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# procainamide — `Procainamide_Kamath1981_i_one_compartment_open_model`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> The procainamide model's terminal half-life (1.55 h) fails to match the paper's reported value (2.13 h), and the model structure lacks the required metabolite compartment.

<div class="pk-model-meta" hidden drug="procainamide" model-id="Procainamide_Kamath1981_i_one_compartment_open_model" status="rejected" stale="false" population="rats" measured-compound="procainamide" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Kamath BL, Lai CM, Gupta SD, Durrani MJ, Yacobi A. Pharmacokinetics of procainamide and N-acetylprocainamide in rats. Journal of pharmaceutical sciences 70(3):299–302 (1981).
  ·  DOI: [10.1002/jps.2600700319](https://doi.org/10.1002/jps.2600700319)

## Population and dosing

**Population:** rats · condition healthy.

**Dosing:** 5250 mg, iv, single.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_procainamide/Procainamide_Kamath1981_i_one_compartment_open_model/Procainamide_Kamath1981_i_one_compartment_open_model.svg" alt="Procainamide_Kamath1981_i_one_compartment_open_model diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Half-life, hr | t1/2z | 0.66 | hr |
| kex, hr-1 | kel | 0.448 | hr-1 |
| Vd(β), liters/kg | V | 4.60 | liters/kg |
| CId, liters/hr/kg | Q | 4.84 | liters/hr/kg |
| CLr, liters/hr/kg | CLR | 1.92 | liters/hr/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The procainamide model's terminal half-life (1.55 h) fails to match the paper's reported value (2.13 h), and the model structure lacks the required metabolite compartment.**

The simulated terminal half-life of 1.55 h deviates significantly from the paper's reported 2.13 h, with ratios ranging from 0.2924 to 5.7075 across various checks. The model topology is defined as a single central compartment, which contradicts the parent-metabolite structure required for N-acetylprocainamide. Additionally, the output variable is set to the central compartment rather than the measured procainamide analyte. Extracted — procainamide: t1/2z 0.66 hr, kel 0.448 hr-1, V 4.6 liters/kg, Q 4.84 liters/hr/kg, CLR 1.92 liters/hr/kg.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has procainamide, the second reading unknown; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Half-life, hr | `Q57` · t1/2z | 0.66 | hr | 2376 | s | h | llm (0.6) | Kamath_1981_table_2:row3:col1 |
| kex, hr-1 | `Q47` · kel | 0.448 | hr-1 | 0.0001244 | 1/s | 1/h | exact (1) | Kamath_1981_table_2:row7:col1 |
| Vd(β), liters/kg | `Q61` · V | 4.60 | liters/kg | 0.322 | m3 | l/kg | space_fold (0.95) | Kamath_1981_table_2:row11:col1 |
| CId, liters/hr/kg | `Q30` · Q | 4.84 | liters/hr/kg | 9.411e-05 | m3/s | l/(h·kg) | llm (0.6) | Kamath_1981_table_2:row12:col1 |
| CLr, liters/hr/kg | `Q26` · CLR | 1.92 | liters/hr/kg | 3.733e-05 | m3/s | l/(h·kg) | exact (1) | Kamath_1981_table_2:row13:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=procainamide
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0]
- population split: 'i, one-compartment open model (n = 8)' subgroup of Kamath_1981 (paper reports 4 populations: i, one-compartment open model (n = 8), ii, pseudo-three-compartment modela (n = 7), ii, two-compartment open modelb (n = 8), mean)
- row roles (LLM): model_class=compartmental; 19/19 row label(s) assigned, 54 linked by role; re-tagged parent→N-acetylprocainamide ×31
- engineer: parent_metabolite composite downgraded to a 1C model of the measured compound — the paper reports the metabolite's own CL and V but neither the parent's disposition nor a formation rate, so the parent sub-component could not be populated; the parent's concentration-time course is NOT produced by this model
- derived CL=144.256 L/h from Ke × V = CL (Q47 × Q61); not separately reported

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2, 3
- unparsed cell Kamath_1981_table_2:row9:col1 = '0.248d'
- transposed table Kamath_1981_table_3: parameters were across the columns, populations/subgroups down the first column — transposed for parsing

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.143 (2/14 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[cid]` | 4.84 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[cid]` |  | 4.84 | only_one_extracted |
| `gpt-oss:120b` | `parameters[clr]` | 1.92 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[clr]` |  | 1.92 | only_one_extracted |
| `gpt-oss:120b` | `parameters[half-life]` | 0.66 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[half-life]` |  | 0.66 | only_one_extracted |
| `gpt-oss:120b` | `parameters[kex]` | 0.448 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[kex]` |  | 0.448 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vd(β)]` | 4.60 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[vd(β)]` |  | 4.60 | only_one_extracted |
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
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['Kamath_1981_table_2:row13:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Kamath_1981_table_2:row12:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Kamath_1981_table_2:row7:col1'] |
| C5_dimension_Q57 | pass | [time] |  | ['Kamath_1981_table_2:row3:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Kamath_1981_table_2:row11:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 322 L | ['Kamath_1981_table_2:row11:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_derived_parameters |  | pass | 1 deterministic parameter derivation(s) emitted | derived values and bindings match the report |  | rate-derived clearance must be the value the Modelica model uses |
| T3_output_variable |  | fail | Metabolite_C (measured=procainamide) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 3 scholar param(s) emitted or defaulted | 3 covered |  | all structural parameters accounted for |
| T3_rate_constant_conversion |  | pass | Kfm (rate_constant) → CL = k·V | no explicit k·V edge found in model |  | rate constant must not be used raw as a clearance |
| T3_topology_template |  | fail | parent_metabolite → PK_3M_9C* | PK_1C |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  |  |  | no engineer deviations to adjudicate |
| T1_t_half_terminal | reference | fail | 2.13 | 1.552 | 0.7288 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 2.53 | 1.552 | 0.6136 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 5.31 | 1.552 | 0.2924 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 2.88 | 1.552 | 0.539 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 3.62 | 1.552 | 0.4288 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 2.5 | 1.552 | 0.621 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 3.67 | 1.552 | 0.423 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 3.45 | 1.552 | 0.45 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 2.59 | 1.552 | 0.5994 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 3.32 | 1.552 | 0.4676 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.94 | 1.552 | 1.651 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 1.74 | 1.552 | 0.8922 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.779 | 1.552 | 1.993 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 1.22 | 1.552 | 1.272 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.691 | 1.552 | 2.247 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 1.43 | 1.552 | 1.086 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 1 | 1.552 | 1.552 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 1.92 | 1.552 | 0.8086 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.919 | 1.552 | 1.689 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.48 | 1.552 | 3.234 | hr→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.272 | 1.552 | 5.707 | hr→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 5250 mg infusion over 10 min, single dose. Dose in the paper: 5250 mg.

<dbs-fmusim paramsurl="drugs/drug_procainamide/Procainamide_Kamath1981_i_one_compartment_open_model/Procainamide_Kamath1981_i_one_compartment_open_model_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_procainamide/Procainamide_Kamath1981_i_one_compartment_open_model/Procainamide_Kamath1981_i_one_compartment_open_model_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `Procainamide_Kamath1981_i_one_compartment_open_model_params.json` · controls `Procainamide_Kamath1981_i_one_compartment_open_model_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bprocainamide%5D%20Procainamide_Kamath1981_i_one_compartment_open_model&body=Drug%3A%20procainamide%0ARecord%3A%20Procainamide_Kamath1981_i_one_compartment_open_model%0APaper%3A%20Kamath_1981%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_procainamide/Procainamide_Kamath1981_i_one_compartment_open_model%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-08 20:23 UTC</sub>
