<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;clozapine&quot;,&quot;href&quot;:&quot;drugs/drug_clozapine/&quot;},{&quot;label&quot;:&quot;Reeves_2024 \u00b7 female_cl_f_clozapine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Clozapine_Geers2022_reference&quot;,&quot;label&quot;:&quot;Geers_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clozapine/Clozapine_Geers2022_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# clozapine — `Clozapine_Reeves2024_female_cl_f_clozapine`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The clozapine record was rejected because the sex effect on CL/F was extracted as −0.28, a negative value that is implausible for a clearance covariate parameter.

<div class="pk-model-meta" hidden drug="clozapine" model-id="Clozapine_Reeves2024_female_cl_f_clozapine" status="rejected" stale="false" population="patients with treatment-resistant schizophrenia on clozapine TDM" measured-compound="clozapine" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Reeves S, Bertrand J, Obee SJ, Hunter S, Howard R, Flanagan RJ. A population pharmacokinetic model to guide clozapine dose selection, based on age, sex, ethnicity, body weight and smoking status. British journal of clinical pharmacology 90(1):135–145 (2024).
  ·  DOI: [10.1111/bcp.15691](https://doi.org/10.1111/bcp.15691)

## Population and dosing

**Population:** patients with treatment-resistant schizophrenia on clozapine TDM · condition treatment-resistant schizophrenia · age group mixed · n = 5960.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 1 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Sex CL/F clozapine Parameter estimates | CL/F | -0.28 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The clozapine record was rejected because the sex effect on CL/F was extracted as −0.28, a negative value that is implausible for a clearance covariate parameter.**

The parameter labelled 'Sex CL/F clozapine Parameter estimates' carries the value −0.28 for total oral clearance (CL/F) of clozapine, which triggered the negative-clearance finding. The record also disagrees with a second reader on the IIV of CL/F (recorded as null versus 93) and on the smoker covariate βsmoker (0.37 in this record versus null), so the covariate and variability values are inconsistently read. The model itself is a parent–metabolite structure with clozapine forming norclozapine via the rate constant Kfm, but the implausible clearance value led to rejection. Extracted — clozapine: CL/F -0.28.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has clozapine, the second reading unknown; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | link | source |
|---|---|---|---|---|---|
| Sex CL/F clozapine Parameter estimates | `Q27` · CL/F | -0.28 |  | llm_confirmed (0.6) | Reeves_2024_table_2:row4:col9 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q27 ('Sex CL/F clozapine Relative standard error (%)', value '7.5') — already have one for this compound
- dropped duplicate Q27 ('Age exp CL/F clozapine Parameter estimates', value '-0.26') — already have one for this compound
- dropped duplicate Q27 ('Age exp CL/F clozapine Relative standard error (%)', value '8.5') — already have one for this compound
- dropped duplicate Q27 ('Ethnic CL/F clozapine Parameter estimates', value '-0.24') — already have one for this compound
- dropped duplicate Q27 ('Ethnic CL/F clozapine Relative standard error (%)', value '8.8') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=clozapine
- template fit: none — only the metabolite is modelled — no parent compartment
- population split: 'β female_cl/ 
f_clozapine' subgroup of Reeves_2024 (paper reports 15 populations: age exp cl/fclozapine parameter estimates, base model parameter estimates, base model relative standard error (%), ethnic cl/fclozapine parameter estimates, sex cl/fclozapine parameter estimates, smoke cl/fclozapine parameter estimates, β afro-caribbean_cl/ 
f_clozapine, β asian_cl/ 
f_clozapine, β female_cl/ 
f_clozapine, β smoking_cl/ 
f_clozapine, β weight_cl/ 
f_clozapine, β weight_cl/ 
f_norclozapine, β weight_v/ 
f_clozapine, β weight_v/ 
f_norclozapine, σ₀_ᵢₙₜₑᵣcₑₚₖ clozapine (mg l⁻¹))
- row roles: 4 per-group rows of clozapine covariate_effect but 0 reference group(s) — kept as printed
- row roles: 4 per-group rows of clozapine variability but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 12/12 row label(s) assigned, 15 linked by role; re-tagged clozapine→parent ×122, parent→norclozapine ×4, clozapine→norclozapine ×16
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2, 3
- transposed table Reeves_2024_table_2: parameters were across the columns, populations/subgroups down the first column — transposed for parsing

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.25 (2/8 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[age exp cl/f clozapine relative standard error]` |  | 8.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clozapinei]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[sex cl/f clozapine parameter estimates]` | -0.28 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[sex cl/f clozapine parameter estimates]` |  | -0.28 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | clozapine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | clozapine | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C2_base_sign_Q27 | fail |  | -0.28 |  |
| C5_unit_missing_Q27 | fail | [length] ** 3 / [time] |  | ['Reeves_2024_table_2:row4:col9'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bclozapine%5D%20Clozapine_Reeves2024_female_cl_f_clozapine&body=Drug%3A%20clozapine%0ARecord%3A%20Clozapine_Reeves2024_female_cl_f_clozapine%0APaper%3A%20Reeves_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_clozapine/Clozapine_Reeves2024_female_cl_f_clozapine%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 15:14 UTC</sub>
