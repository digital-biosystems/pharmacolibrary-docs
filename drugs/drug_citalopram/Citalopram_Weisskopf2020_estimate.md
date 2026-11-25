<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;citalopram&quot;,&quot;href&quot;:&quot;drugs/drug_citalopram/&quot;},{&quot;label&quot;:&quot;Weisskopf_2020 \u00b7 estimate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Citalopram_Friberg2006_reference&quot;,&quot;label&quot;:&quot;Friberg_2006_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_citalopram/Citalopram_Friberg2006_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Citalopram_Weisskopf2020_estimate&quot;,&quot;label&quot;:&quot;Weisskopf_2020_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_citalopram/Citalopram_Weisskopf2020_estimate.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Citalopram_Weisskopf2020_model_for_scit_sdcit_in_plasma&quot;,&quot;label&quot;:&quot;Weisskopf_2020_model_for_scit_sdcit_in_plasma&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_citalopram/Citalopram_Weisskopf2020_model_for_scit_sdcit_in_plasma.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Citalopram_Weisskopf2020_model_for_scit_sdcit_in_plasma_brea&quot;,&quot;label&quot;:&quot;Weisskopf_2020_model_for_scit_sdcit_in_plasma_breast_milk&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_citalopram/Citalopram_Weisskopf2020_model_for_scit_sdcit_in_plasma_brea.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Friberg_2006_QTci&quot;,&quot;label&quot;:&quot;Friberg_2006 \u00b7 QTci&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_citalopram/pd_Friberg_2006_QTci.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# citalopram — `Citalopram_Weisskopf2020_estimate`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> F use library defaults, not estimates from this paper; t3_output_variable (+3 more).

<div class="pk-model-meta" hidden drug="citalopram" model-id="Citalopram_Weisskopf2020_estimate" status="rejected" stale="false" population="breastfeeding women" measured-compound="escitalopram" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Weisskopf E, Guidi M, Fischer CJ, Bickle Graz M, Beaufils E, Nguyen KA et al. A population pharmacokinetic model for escitalopram and its major metabolite in depressive patients during the perinatal period: Prediction of infant drug exposure through breast milk. British journal of clinical pharmacology 86(8):1642–1653 (2020).
  ·  DOI: [10.1111/bcp.14278](https://doi.org/10.1111/bcp.14278)

## Population and dosing

**Population:** breastfeeding women · condition perinatal · age group adult · n = 33.

**Dosing:** 10 mg/d, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_citalopram/Citalopram_Weisskopf2020_estimate/Citalopram_Weisskopf2020_estimate.svg" alt="Citalopram_Weisskopf2020_estimate diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL(SCIT) (L/h) | CL | 28.7 | L/h |
| V(SCIT) (L) | V | 1310 | L |
| k12 (h⁻¹) | kabs | 0.73 | h⁻¹ |
| k30 (h⁻¹) | kel | 0.54 | h⁻¹ |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.545). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**F use library defaults, not estimates from this paper; t3_output_variable (+3 more).**

These values affect the simulated profile but are not supported by this paper; they need to be extracted or explicitly justified as conventions. Extracted — citalopram: CL 28.7 L/h, V 1.31e+03 L, kabs 0.73 h⁻¹; demethylescitalopram: kel 0.54 h⁻¹.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has escitalopram → demethylescitalopram (metabolism), the second reading none; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL(SCIT) (L/h) | `Q22` · CL | 28.7 | L/h | 7.972e-06 | m3/s | l/h | space_fold (0.95) | Weisskopf_2020_table_p7_1:row0:col3, Weisskopf_2020_table_p7_1:row0:col5 |
| V(SCIT) (L) | `Q61` · V | 1310 | L | 1.31 | m3 | l | space_fold (0.95) | Weisskopf_2020_table_p7_1:row1:col3, Weisskopf_2020_table_p7_1:row1:col5 |
| k12 (h⁻¹) | `Q49` · kabs | 0.73 | h⁻¹ | 0.0002028 | 1/s | 1/h | exact (1) | Weisskopf_2020_table_p7_1:row2:col3, Weisskopf_2020_table_p7_1:row2:col5 |
| k30 (h⁻¹) | `Q47` · kel | 0.54 | h⁻¹ | 0.00015 | 1/s | 1/h | exact (1) | Weisskopf_2020_table_p7_1:row3:col3, Weisskopf_2020_table_p7_1:row3:col5 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- dropped unlinked row (NIL): 'VMR' — extend the ontology if this is a real PK parameter (source ['Weisskopf_2020_table_p7_1:row4:col3'])
- dropped unlinked row (NIL): 'MPRD' — extend the ontology if this is a real PK parameter (source ['Weisskopf_2020_table_p7_1:row5:col3'])
- dropped unlinked row (NIL): 'MPRM' — extend the ontology if this is a real PK parameter (source ['Weisskopf_2020_table_p7_1:row6:col5'])
- dropped 'α(CL) (%)' → Q67: unit '%' is a statistic (%, CV, RSE, shrinkage or fold), not a rate — the row is a variability or a ratio, not the estimate
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CL(SCIT) (L/h)); Q61 (V(SCIT) (L))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=escitalopram
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0]
- population split: 'estimate' subgroup of Weisskopf_2020 (paper reports 3 populations: estimate, model for scit + sdcit in plasma, model for scit + sdcit in plasma + breast milk)
- row roles (LLM): model_class=compartmental; 13/13 row label(s) assigned, 14 linked by role; re-tagged parent→demethylescitalopram ×11
- engineer: parent → metabolite not buildable on PK_3M_9C (None) — the measured compound's 1-compartment model instead

**Extraction notes:**
- table Weisskopf_2020_table_p7_1: ambiguous_uncertainty_binding
- table Weisskopf_2020_table_p7_1: ragged_grid

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.545 (6/11 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['escitalopram', 'demethylescitalopram', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[k12].parameter_id` | Q49 | Q301 | mismatch |
| `gpt-oss-120b` | `parameters[k30]` |  | 0.54 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k30]` | 0.54 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mprd]` |  | 2.1 | only_one_extracted |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Weisskopf_2020_table_p7_1:row0:col3', 'Weisskopf_2020_table_p7_1:row0:col5'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Weisskopf_2020_table_p7_1:row3:col3', 'Weisskopf_2020_table_p7_1:row3:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Weisskopf_2020_table_p7_1:row2:col3', 'Weisskopf_2020_table_p7_1:row2:col5'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Weisskopf_2020_table_p7_1:row1:col3', 'Weisskopf_2020_table_p7_1:row1:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 28.7 | ['Weisskopf_2020_table_p7_1:row0:col3', 'Weisskopf_2020_table_p7_1:row0:col5'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 28.7 L/h | ['Weisskopf_2020_table_p7_1:row0:col3', 'Weisskopf_2020_table_p7_1:row0:col5'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 1.31e+03 L | ['Weisskopf_2020_table_p7_1:row1:col3', 'Weisskopf_2020_table_p7_1:row1:col5'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|
| T0_analyte_identity | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  |  | no covariate effects in record |
| T3_output_variable | fail | Metabolite_C (measured=escitalopram) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage | pass | 4 scholar param(s) emitted or defaulted | 4 covered |  | all structural parameters accounted for |
| T3_rate_constant_conversion | pass | Kfm (rate_constant) → CL = k·V | no explicit k·V edge found in model |  | rate constant must not be used raw as a clearance |
| T3_shared_parameters | pass | 1 shared param(s) bound once | bound once |  | shared params must bind one value to both compartments |
| T3_topology_template | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations | fail |  | defaulted_parameters: not acceptable |  | LLM adjudication → deterministic rule |
| X1_cross_check | fail | no second reader contradicts | verdict disputed; agreement 0.545 (6 of 11 compared fields agree, 3 extracted by one reader only); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) | 0.545 | cross-check contradicted by a second reader: verdict disputed; agreement 0.545 (6 of 11 compared fields agree, 3 extracted by one reader only); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 20 mg, single dose, first-order absorption (ka 0.73 /h, F 0.9). _The paper's dose was not captured; the default is the WHO ATC DDD 20 mg oral (N06AB04) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_citalopram/Citalopram_Weisskopf2020_estimate/Citalopram_Weisskopf2020_estimate_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_citalopram/Citalopram_Weisskopf2020_estimate/Citalopram_Weisskopf2020_estimate_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Citalopram_Weisskopf2020_estimate_params.json` · controls `Citalopram_Weisskopf2020_estimate_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcitalopram%5D%20Citalopram_Weisskopf2020_estimate&body=Drug%3A%20citalopram%0ARecord%3A%20Citalopram_Weisskopf2020_estimate%0APaper%3A%20Weisskopf_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_citalopram/Citalopram_Weisskopf2020_estimate%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 12:21 UTC</sub>
