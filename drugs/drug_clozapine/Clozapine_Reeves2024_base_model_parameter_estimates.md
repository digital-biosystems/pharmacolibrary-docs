<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;clozapine&quot;,&quot;href&quot;:&quot;drugs/drug_clozapine/&quot;},{&quot;label&quot;:&quot;Reeves_2024 \u00b7 base_model_parameter_estimates&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Clozapine_Geers2022_reference&quot;,&quot;label&quot;:&quot;Geers_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clozapine/Clozapine_Geers2022_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Clozapine_Parker2001_reference&quot;,&quot;label&quot;:&quot;Parker_2001_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clozapine/Clozapine_Parker2001_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Shang_2014_PANSS&quot;,&quot;label&quot;:&quot;Shang_2014 \u00b7 PANSS&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_clozapine/pd_Shang_2014_PANSS.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# clozapine — `Clozapine_Reeves2024_base_model_parameter_estimates`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q49 unit unit ([luminosity] / [length] ** 2) vs 1 / [time]; Q27 unit unit ([luminosity] / [length] ** 2) vs [length] ** 3 / [time]; Q86 unit mg L−1 ([mass] / [length] ** 3) vs [mass] * [time] / [length] ** 3.

<div class="pk-model-meta" hidden drug="clozapine" model-id="Clozapine_Reeves2024_base_model_parameter_estimates" status="rejected" stale="false" population="patients with treatment-resistant schizophrenia" measured-compound="clozapine" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Reeves S, Bertrand J, Obee SJ, Hunter S, Howard R, Flanagan RJ. A population pharmacokinetic model to guide clozapine dose selection, based on age, sex, ethnicity, body weight and smoking status. British journal of clinical pharmacology 90(1):135–145 (2024).
  ·  DOI: [10.1111/bcp.15691](https://doi.org/10.1111/bcp.15691)

## Population and dosing

**Population:** patients with treatment-resistant schizophrenia · condition treatment-resistant schizophrenia · age group adult.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** CL/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| ka (h⁻¹; fixed) | kabs | 0.69 | unit |  |
| V₁/F_clozapine (L) | V1/F | 1430 | L |  |
| β Weight_V/  F_clozapine | equation variable | 1.0 | unit |  |
| CL/F clozapine (L h⁻¹) | CL/F | 23.2 | L h⁻¹ | 0.79 (None% RSE) |
| Km (h⁻¹) | kfm | 0.006 | h⁻¹ |  |
| β Weight_CL/  F_norclozapine | CL/F | 0.75 | unit |  |
| α-intercept Norclozapine (mg L−1) | C0 | 0.02 | mg L−1 |  |
| CL/F_norclozapine | CL/F_norclozapine | 12.1 | L h⁻¹ |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.833). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q49 unit unit ([luminosity] / [length] ** 2) vs 1 / [time]; Q27 unit unit ([luminosity] / [length] ** 2) vs [length] ** 3 / [time]; Q86 unit mg L−1 ([mass] / [length] ** 3) vs [mass] * [time] / [length] ** 3.**

A reported unit could not be converted (kabs, equation variable, CL/F and C0), so that value has no SI equivalent. Extracted — clozapine: kabs 0.69 unit, V1/F 1.43e+03 L, CL/F 23.2 L h⁻¹; norclozapine: kfm 0.006 h⁻¹, CL/F 0.75 unit, C0 0.02 mg L−1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of β weight_v/ f_clozapine: this record has 1.0, the second reading none; it also differs on 1 more field. That field does not shape the model.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| ka (h⁻¹; fixed) | `Q49` · kabs | 0.69 | unit |  |  | unit | exact (1) | Reeves_2024_table_2:row1:col1 |  |
| V₁/F_clozapine (L) | `Q290` · V1/F | 1430 | L | 1.43 | m3 | l | llm (0.6) | Reeves_2024_table_2:row2:col1 |  |
| β Weight_V/  F_clozapine | `Q900` · equation variable | 1.0 | unit |  |  | unit | llm (0.6) | Reeves_2024_table_2:row3:col1 |  |
| CL/F clozapine (L h⁻¹) | `Q27` · CL/F | 23.2 | L h⁻¹ | 6.444e-06 | m3/s | l/h | llm_confirmed (0.6) | Reeves_2024_table_2:row4:col1 | 0.79 (None% RSE) |
| Km (h⁻¹) | `Q305` · kfm | 0.006 | h⁻¹ | 1.667e-06 | 1/s | 1/h | exact (1) | Reeves_2024_table_2:row6:col1 |  |
| β Weight_CL/  F_norclozapine | `Q27` · CL/F | 0.75 | unit |  |  | unit | llm (0.6) | Reeves_2024_table_2:row14:col1 |  |
| α-intercept Norclozapine (mg L−1) | `Q86` · C0 | 0.02 | mg L−1 |  |  | mg/l | llm (0.6) | Reeves_2024_table_3:row1:col2 |  |
| CL/F_norclozapine | `Q900` · CL/F_norclozapine | 12.1 | L h⁻¹ | 3.361e-06 | m3/s |  |  | Reeves_2024_table_2:row13:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| CL/F_norclozapine (L h⁻¹) | Q22 | exact |

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ω₀ V/F clozapine' routed out of structural estimates ('Inter-individual standard deviation')
- table section iiv: 'ω₀ CL/F clozapine' routed out of structural estimates ('Inter-individual standard deviation')
- table section iiv: 'ω₀ km' routed out of structural estimates ('Inter-individual standard deviation')
- table section iiv: 'ω₀ CL/F_norclozapine' routed out of structural estimates ('Inter-individual standard deviation')
- unit_dimension_mismatch: 'ka (h⁻¹; fixed)' → Q49 (unit '[luminosity] / [length] ** 2' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: 'β Weight_CL/ \nF_clozapine' → Q27 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q27 ('β Weight_CL/ \nF_clozapine', value '0.75') — already have one for this compound
- routed 'β Weight_V/ \nF_norclozapine' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- unit_dimension_mismatch: 'β Weight_CL/ \nF_norclozapine' → Q27 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'α-intercept Norclozapine (mg L−1)' → Q86 (unit '[mass] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped PD-category row 'α-slope Norclozapine' → Q335 (slope, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Reeves_2024_table_3:row2:col2'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=clozapine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0]
- bound model equation to Q22 (CL): clozapinei = μCL/F clozapine * (weight/70)^0.75 * (age i -40)^
- Q22 (CL) is equation-defined: value moved to equation-variable 'CL/F_norclozapine (L h⁻¹)'; equation kept verbatim
- status held at "Needs review" — not promoted
- population split: 'base model parameter estimates' subgroup of Reeves_2024 (paper reports 9 populations: age exp cl/f clozapine parameter estimates, age exp cl/fclozapine parameter estimates, base model parameter estimates, ethnic cl/f clozapine parameter estimates, ethnic cl/fclozapine parameter estimates, sex cl/f clozapine parameter estimates, sex cl/fclozapine parameter estimates, smoke cl/f clozapine parameter estimates, smoke cl/fclozapine parameter estimates)
- row roles: 3 per-group rows of clozapine covariate_effect but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 22/22 row label(s) assigned, 25 linked by role; re-tagged clozapine→parent ×47, parent→norclozapine ×8, clozapine→norclozapine ×32

**Extraction notes:**
- LLM selected parameter table(s) 2, 3
- table Reeves_2024_table_2: unbound_uncertainty
- table Reeves_2024_table_3: unbound_uncertainty
- table Reeves_2024_table_3: unparsed_numeric_cell
- captured model equation clozapinei = μCL/F clozapine * (weight/70)^0.75 * (age i -40)^

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.833 (10/12 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[α-intercept norclozapine]` | 0.02 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[β weight_v/ f_clozapine]` | 1.0 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Reeves_2024_table_2:row13:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Reeves_2024_table_2:row4:col1'] |
| C5_dimension_Q27 | fail | [length] ** 3 / [time] | unit ([luminosity] / [length] ** 2) | ['Reeves_2024_table_2:row14:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Reeves_2024_table_2:row2:col1'] |
| C5_dimension_Q305 | pass | 1 / [time] |  | ['Reeves_2024_table_2:row6:col1'] |
| C5_dimension_Q49 | fail | 1 / [time] | unit ([luminosity] / [length] ** 2) | ['Reeves_2024_table_2:row1:col1'] |
| C5_dimension_Q86 | fail | [mass] * [time] / [length] ** 3 | mg L−1 ([mass] / [length] ** 3) | ['Reeves_2024_table_3:row1:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 23.2 L/h | ['Reeves_2024_table_2:row4:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 1.43e+03 L | ['Reeves_2024_table_2:row2:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bclozapine%5D%20Clozapine_Reeves2024_base_model_parameter_estimates&body=Drug%3A%20clozapine%0ARecord%3A%20Clozapine_Reeves2024_base_model_parameter_estimates%0APaper%3A%20Reeves_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_clozapine/Clozapine_Reeves2024_base_model_parameter_estimates%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 11:20 UTC</sub>
