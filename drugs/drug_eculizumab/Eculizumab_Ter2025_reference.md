<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;eculizumab&quot;,&quot;href&quot;:&quot;drugs/drug_eculizumab/&quot;},{&quot;label&quot;:&quot;Ter_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Eculizumab_Cosson2025_reference&quot;,&quot;label&quot;:&quot;Cosson_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eculizumab/Eculizumab_Cosson2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Eculizumab_Badri2021_reference&quot;,&quot;label&quot;:&quot;Badri_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eculizumab/Eculizumab_Badri2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Eculizumab_Gatault2015_reference&quot;,&quot;label&quot;:&quot;Gatault_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eculizumab/Eculizumab_Gatault2015_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Eculizumab_Monteleone2021_mean&quot;,&quot;label&quot;:&quot;Monteleone_2021_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eculizumab/Eculizumab_Monteleone2021_mean.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Eculizumab_Monteleone2021_median&quot;,&quot;label&quot;:&quot;Monteleone_2021_median&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eculizumab/Eculizumab_Monteleone2021_median.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Eculizumab_Singh2021_mean&quot;,&quot;label&quot;:&quot;Singh_2021_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eculizumab/Eculizumab_Singh2021_mean.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Eculizumab_Singh2021_median&quot;,&quot;label&quot;:&quot;Singh_2021_median&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eculizumab/Eculizumab_Singh2021_median.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# eculizumab — `Eculizumab_Ter2025_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The covariate effect on intercompartmental clearance was rejected because its unit was missing, preventing conversion to standard SI units.

<div class="pk-model-meta" hidden drug="eculizumab" model-id="Eculizumab_Ter2025_reference" status="rejected" stale="false" population="adults with paroxysmal nocturnal hemoglobinuria and atypical hemolytic uremic syndrome" measured-compound="eculizumab" parameterization="mechanistic" topology="2C"></div>

## Citation
Ter Avest M, Langemeijer SMC, van den Heuvel LPWJ, Baas LM, van de Kar NCAJ, Ter Heine R. Model-Informed Precision Dosing of Eculizumab in Patients with Paroxysmal Nocturnal Hemoglobinuria. Clinical pharmacokinetics 64(8):1139–1147 (2025).
  ·  DOI: [10.1007/s40262-025-01536-x](https://doi.org/10.1007/s40262-025-01536-x)

## Population and dosing

**Population:** adults with paroxysmal nocturnal hemoglobinuria and atypical hemolytic uremic syndrome · condition paroxysmal nocturnal hemoglobinuria · age group adult · n = 27.

**Dosing:** 600, 900, 1200 mg, iv, multiple, every 168 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted, plus 1 covariate effect.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| Clearance (L/day) | CL | 0.163 | L/day | 6.1 | 0.155 (24.8% RSE) |
| Volume of distribution 1 (L) | V1 | 4.3 | L | 5.7 | 0.0812 (28.9% RSE) |
| Volume of distribution 2 (L) | V2 | 2.6 | L | 5.5 |  |
| Q (L/day) | Q | 0.62 | L/day | 13.3 |  |
| Maximum rate (Vmax) [mg/day] | Vmax | 25.6 | mg/day | 5.2 |  |
| theta_q321_category | theta_q321_category | 13.5 |  | 37.4 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The covariate effect on intercompartmental clearance was rejected because its unit was missing, preventing conversion to standard SI units.**

The parameter theta_q321_category (value 13.5) lacks an explicit unit in the record, unlike other parameters such as CL (0.163 L/day) or V1 (4.3 L). Since the unit could not be converted to SI, the system identified a dimension mismatch for this structural parameter. This prevented the model from being processed correctly, resulting in its rejection. Extracted — classical pathway activity: CL 0.163 L/day, V1 4.3 L, V2 2.6 L, Q 0.62 L/day, Vmax 25.6 mg/day.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has eculizumab, the second reading unknown; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Clearance (L/day) | `Q22` · CL | 0.163 | L/day | 1.887e-09 | m3/s | l/d | 6.1 | exact (1) | Tab2:row1:col1 | 0.155 (24.8% RSE) |
| Volume of distribution 1 (L) | `Q63` · V1 | 4.3 | L | 0.0043 | m3 | l | 5.7 | llm_corrected (0.6) | Tab2:row4:col1 | 0.0812 (28.9% RSE) |
| Volume of distribution 2 (L) | `Q64` · V2 | 2.6 | L | 0.0026 | m3 | l | 5.5 | llm_corrected (0.6) | Tab2:row6:col1 |  |
| Q (L/day) | `Q30` · Q | 0.62 | L/day | 7.176e-09 | m3/s | l/d | 13.3 | exact (1) | Tab2:row7:col1 |  |
| Maximum rate (Vmax) [mg/day] | `Q66` · Vmax | 25.6 | mg/day |  |  | mg/d | 5.2 | llm_confirmed (0.6) | Tab2:row8:col1 |  |
| theta_q321_category | `Q900` · theta_q321_category | 13.5 |  |  |  |  | 37.4 |  | Tab2:row9:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'Additional error' routed out of structural estimates ('Residual error')
- table section residual_error: 'Proportional error assay 1 (Radboudumc)' routed out of structural estimates ('Residual error')
- table section residual_error: 'Proportional error assay 2 (Sanquin)' routed out of structural estimates ('Residual error')
- unit_dimension_mismatch: 'Maximum rate (Vmax) [mg/day]' → Q66 (unit '[mass] / [time]' vs ontology '[length] ** 3') — route to review
- covariate effect for Q321 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=eculizumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- molar mass: none found for 'eculizumab' — its concentrations stay mass-only

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.75 (12/16 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[theta_q1_category]` |  | 13.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q321_category]` | 13.5 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | eculizumab | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | eculizumab | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab2:row1:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Tab2:row7:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Tab2:row4:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Tab2:row6:col1'] |
| C5_dimension_Q66 | fail | [mass] / [time] | mg/day | ['Tab2:row8:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.163 | ['Tab2:row1:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00679 L/h | ['Tab2:row1:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 4.3 L | ['Tab2:row4:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.6 L | ['Tab2:row6:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Beculizumab%5D%20Eculizumab_Ter2025_reference&body=Drug%3A%20eculizumab%0ARecord%3A%20Eculizumab_Ter2025_reference%0APaper%3A%20Ter_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_eculizumab/Eculizumab_Ter2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-06 23:51 UTC</sub>
