<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;clozapine&quot;,&quot;href&quot;:&quot;drugs/drug_clozapine/&quot;},{&quot;label&quot;:&quot;Reeves_2024 \u00b7 base_base_model_relative_standard_error&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Clozapine_Geers2022_reference&quot;,&quot;label&quot;:&quot;Geers_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clozapine/Clozapine_Geers2022_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# clozapine — `Clozapine_Reeves2024_base_base_model_relative_standard_error`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The record was rejected because the clozapine-to-norclozapine conversion fraction (0.66) is recorded with the meaning of V/F, a volume of distribution — a dimension mismatch on a structural parameter — and the absorption rate constant's unit (h−1) could not be converted to SI.

<div class="pk-model-meta" hidden drug="clozapine" model-id="Clozapine_Reeves2024_base_base_model_relative_standard_error" status="rejected" stale="false" population="patients with treatment-resistant schizophrenia on clozapine TDM" measured-compound="clozapine" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Reeves S, Bertrand J, Obee SJ, Hunter S, Howard R, Flanagan RJ. A population pharmacokinetic model to guide clozapine dose selection, based on age, sex, ethnicity, body weight and smoking status. British journal of clinical pharmacology 90(1):135–145 (2024).
  ·  DOI: [10.1111/bcp.15691](https://doi.org/10.1111/bcp.15691)

## Population and dosing

**Population:** patients with treatment-resistant schizophrenia on clozapine TDM · condition treatment-resistant schizophrenia · age group mixed · n = 5960.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| α-intercept Norclozapine (mg L−1) | C0 | 7.6 | mg L−1 |
| k f , the fraction of V/F clozapine converted to V/F norclozapine | V/F | 0.66 |  |
| K a (h À1 ; fixed) | kabs | 0.69 | h À1 |
| CL/F clozapine (L h À1 ) | CL/F | 23.2 | L h À1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was rejected because the clozapine-to-norclozapine conversion fraction (0.66) is recorded with the meaning of V/F, a volume of distribution — a dimension mismatch on a structural parameter — and the absorption rate constant's unit (h−1) could not be converted to SI.**

The parameter with value 0.66 is labelled as the fraction of clozapine V/F converted to norclozapine, but its recorded meaning is V/F, a volume of distribution adjusted for bioavailability, so a fraction was assigned the dimensions of a volume — the dimension mismatch that triggered the rejection. The absorption rate constant kabs (0.69 h−1) reached the record without an SI value because its reported unit could not be converted. The two readers also disagreed on the clozapine CL/F entries: this record has no value for the inter-individual variability on CL/F while the second reader reports 93, and this record lists a smoker effect on CL/F of 0.37 while the second reader reports none. Extracted — norclozapine: C0 7.6 mg L−1; clozapine: V/F 0.66, kabs 0.69 h À1, CL/F 23.2 L h À1.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| α-intercept Norclozapine (mg L−1) | `Q86` · C0 | 7.6 | mg L−1 |  |  | mg/l | llm (0.6) | Reeves_2024_table_3:row1:col1 |
| k f , the fraction of V/F clozapine converted to V/F norclozapine | `Q76` · V/F | 0.66 |  |  |  | L | boundary (0.8) | Reeves_2024:results_prose |
| K a (h À1 ; fixed) | `Q49` · kabs | 0.69 | h À1 | 0.0001917 | 1/s | 1/h | space_fold (0.95) | Reeves_2024:other_prose |
| CL/F clozapine (L h À1 ) | `Q27` · CL/F | 23.2 | L h À1 | 6.444e-06 | m3/s | L/h | boundary (0.8) | Reeves_2024:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'base model relative standard error (%)' classified 'rse' by the LLM but kept as the estimate: the header names the point value
- unit_dimension_mismatch: 'α-intercept Norclozapine (mg L−1)' → Q86 (unit '[mass] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped PD-category row 'α-slope Norclozapine' → Q335 (slope, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Reeves_2024_table_3:row2:col1'])
- salvaged Q76 ('k f , the fraction of V/F clozapine converted to V/F norclozapine'=0.66) from results prose — parameter table was unreadable
- salvaged Q49 ('K a (h À1 ; fixed)'=0.69) from results prose — parameter table was unreadable
- salvaged Q27 ('CL/F clozapine (L h À1 )'=23.2) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=clozapine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0]
- status held at route_to_review — not promoted
- model-stage split: 'base model relative standard error (%)' is the base model of Reeves_2024 (paper reports 15 stages: age exp cl/fclozapine parameter estimates, base model parameter estimates, base model relative standard error (%), ethnic cl/fclozapine parameter estimates, sex cl/fclozapine parameter estimates, smoke cl/fclozapine parameter estimates, β afro-caribbean_cl/ 
f_clozapine, β asian_cl/ 
f_clozapine, β female_cl/ 
f_clozapine, β smoking_cl/ 
f_clozapine, β weight_cl/ 
f_clozapine, β weight_cl/ 
f_norclozapine, β weight_v/ 
f_clozapine, β weight_v/ 
f_norclozapine, σ₀_ᵢₙₜₑᵣcₑₚₖ clozapine (mg l⁻¹)); same population, different model-building step
- row roles: 4 per-group rows of clozapine covariate_effect but 0 reference group(s) — kept as printed
- row roles: 4 per-group rows of clozapine variability but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 12/12 row label(s) assigned, 15 linked by role; re-tagged clozapine→parent ×122, parent→norclozapine ×4, clozapine→norclozapine ×16
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2, 3
- transposed table Reeves_2024_table_2: parameters were across the columns, populations/subgroups down the first column — transposed for parsing

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q86 | fail | [mass] / [length] ** 3 | mg L−1 | ['Reeves_2024_table_3:row1:col1'] |
| C5_unit_missing_Q76 | fail | [length] ** 3 |  | ['Reeves_2024:results_prose'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 23.2 L/h | ['Reeves_2024:other_prose'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bclozapine%5D%20Clozapine_Reeves2024_base_base_model_relative_standard_error&body=Drug%3A%20clozapine%0ARecord%3A%20Clozapine_Reeves2024_base_base_model_relative_standard_error%0APaper%3A%20Reeves_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_clozapine/Clozapine_Reeves2024_base_base_model_relative_standard_error%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 15:14 UTC</sub>
