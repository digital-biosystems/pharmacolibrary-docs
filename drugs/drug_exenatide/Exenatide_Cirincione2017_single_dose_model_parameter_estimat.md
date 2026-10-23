<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;exenatide&quot;,&quot;href&quot;:&quot;drugs/drug_exenatide/&quot;},{&quot;label&quot;:&quot;Cirincione_2017 \u00b7 single_dose_model_parameter_estimate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Exenatide_Li2012_reference&quot;,&quot;label&quot;:&quot;Li_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_exenatide/Exenatide_Li2012_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# exenatide — `Exenatide_Cirincione2017_single_dose_model_parameter_estimat`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Rejected because the intrinsic clearance unit L/day caused a dimension mismatch against the mg/day Vmax unit.

<div class="pk-model-meta" hidden drug="exenatide" model-id="Exenatide_Cirincione2017_single_dose_model_parameter_estimat" status="rejected" stale="false" population="adults with type 2 diabetes mellitus" measured-compound="exenatide" parameterization="mechanistic" topology="2C"></div>

## Citation
Cirincione B, Edwards J, Mager DE. Population Pharmacokinetics of an Extended-Release Formulation of Exenatide Following Single- and Multiple-Dose Administration. The AAPS journal 19(2):487–496 (2017).
  ·  DOI: [10.1208/s12248-016-9975-1](https://doi.org/10.1208/s12248-016-9975-1)

## Population and dosing

**Population:** adults with type 2 diabetes mellitus · condition type 2 diabetes mellitus · age group adult · n = 64.

**Dosing:** 2.5, 5, 7, 10 mg, sc, single.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 10 extracted, plus 1 covariate effect.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| ka (1/day) | kabs | 2.98 | 1/day |
| CLint (L/day) | CLint | 110 | L/day |
| Vcint (L) | V | 7.03 | L |
| f1 (%) | Fab | 1.13 | % |
| ktr1 (1/day) | ktr | 0.0872 | 1/day |
| N1 | equation variable | 0.722 |  |
| Km (pg/mL) | Km | 567 | pg/mL |
| Vmax (mg/day) | Vmax | 0.037 | mg/day |
| CLd (L/day) | Q | 89.3 | L/day |
| VP (L) | V2 | 7.04 | L |
| theta_q319_egfr_power | theta_q319_egfr_power | 0.838 |  |
| CL | CL | 0.059 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.55). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Rejected because the intrinsic clearance unit L/day caused a dimension mismatch against the mg/day Vmax unit.**

The record defines CLint as 110 L/day and Vmax as 0.037 mg/day. A second reader also disagreed on the extraction of the dose compound, primary analyte, and weight-corrected volume of distribution. These unit inconsistencies prevented the model from being validated. Extracted — exenatide: kabs 2.98 1/day, CLint 110 L/day, V 7.03 L, Fab 1.13 %, ktr 0.0872 1/day, Km 567 pg/mL, Vmax 0.037 mg/day, Q 89.3 L/day, … (+2).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has exenatide, the second reading unknown; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| ka (1/day) | `Q49` · kabs | 2.98 | 1/day | 3.449e-05 | 1/s | 1/d | exact (1) | Cirincione_2017_table_p6_1:row0:col1 |
| CLint (L/day) | `Q3` · CLint | 110 | L/day |  |  | l/d | exact (1) | Cirincione_2017_table_p6_1:row1:col1 |
| Vcint (L) | `Q61` · V | 7.03 | L | 0.00703 | m3 | l | llm (0.6) | Cirincione_2017_table_p6_1:row2:col1 |
| f1 (%) | `Q40` · Fab | 1.13 | % |  |  | % | exact (1) | Cirincione_2017_table_p6_1:row3:col1 |
| ktr1 (1/day) | `Q306` · ktr | 0.0872 | 1/day | 1.009e-06 | 1/s | 1/d | llm (0.6) | Cirincione_2017_table_p6_1:row8:col1 |
| N1 | `Q900` · equation variable | 0.722 |  |  |  |  | llm (0.6) | Cirincione_2017_table_p6_1:row10:col1 |
| Km (pg/mL) | `Q1` · Km | 567 | pg/mL |  |  | pg/ml | exact (1) | Cirincione_2017_table_p6_1:row14:col1 |
| Vmax (mg/day) | `Q66` · Vmax | 0.037 | mg/day |  |  | mg/d | special_case (0.95) | Cirincione_2017_table_p6_1:row15:col1 |
| CLd (L/day) | `Q30` · Q | 89.3 | L/day | 1.034e-06 | m3/s | l/d | exact (1) | Cirincione_2017_table_p6_1:row16:col1 |
| VP (L) | `Q64` · V2 | 7.04 | L | 0.00704 | m3 | l | exact (1) | Cirincione_2017_table_p6_1:row17:col1 |
| theta_q319_egfr_power | `Q900` · theta_q319_egfr_power | 0.838 |  |  |  |  |  | Cirincione_2017_table_p6_1:row13:col1 |
| CL | `Q22` · CL | 0.059 | L/h | 1.639e-08 | m3/s | L/h | review_gapfill (0.7) | Choi_2025:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'CLint (L/day)' → Q3 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3 / [time] / [mass]') — route to review
- dropped unlinked row (NIL): 'f2 (%)' — extend the ontology if this is a real PK parameter (source ['Cirincione_2017_table_p6_1:row4:col1'])
- dropped unlinked row (NIL): 'f3 (%)' — extend the ontology if this is a real PK parameter (source ['Cirincione_2017_table_p6_1:row5:col1'])
- dropped unlinked row (NIL): 'fret(single-dose study) (%)' — extend the ontology if this is a real PK parameter (source ['Cirincione_2017_table_p6_1:row6:col1'])
- dropped duplicate Q306 ('ktr2 (1/day)', value '0.667') — already have one for this compound
- dropped unlinked row (NIL): 'N2' — extend the ontology if this is a real PK parameter (source ['Cirincione_2017_table_p6_1:row11:col1'])
- dropped unlinked row (NIL): 'Vctwkg' — extend the ontology if this is a real PK parameter (source ['Cirincione_2017_table_p6_1:row12:col1'])
- unit_dimension_mismatch: 'Vmax (mg/day)' → Q66 (unit '[mass] / [time]' vs ontology '[length] ** 3') — route to review
- dropped unlinked row (NIL): 'RVS D study (Log SD)' — extend the ontology if this is a real PK parameter (source ['Cirincione_2017_table_p6_1:row18:col1'])
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=exenatide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'single-dose model parameter estimate' subgroup of Cirincione_2017 (paper reports 4 populations: combined single- and multiple-dose models iv (%), combined single- and multiple-dose models parameter estimate, single-dose model iv (%), single-dose model parameter estimate)
- gap-filled Q22 (CL) from Choi_2025's review values (primary lacked it)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table Cirincione_2017_table_p6_1: unbound_uncertainty

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.55 (11/20 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl_egfr]` | 0.838 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance]` | 12.3 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clint].covariate_forms` | ['power'] | [] | mismatch |
| `gpt-oss-120b` | `parameters[f2]` |  | 46.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f3]` |  | 52.6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q22_egfr_power]` |  | 0.838 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vcint].parameter_id` | Q61 | Q63 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | exenatide | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | exenatide | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 |  | ['Cirincione_2017_table_p6_1:row14:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Choi_2025:review'] |
| C5_dimension_Q3 | fail | [length] ** 3 / [time] | L/day | ['Cirincione_2017_table_p6_1:row1:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Cirincione_2017_table_p6_1:row16:col1'] |
| C5_dimension_Q306 | pass | 1 / [time] |  | ['Cirincione_2017_table_p6_1:row8:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Cirincione_2017_table_p6_1:row0:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Cirincione_2017_table_p6_1:row2:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Cirincione_2017_table_p6_1:row17:col1'] |
| C5_dimension_Q66 | fail | [mass] / [time] | mg/day | ['Cirincione_2017_table_p6_1:row15:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.059 | ['Choi_2025:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.059 L/h | ['Choi_2025:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 7.03 L | ['Cirincione_2017_table_p6_1:row2:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 7.04 L | ['Cirincione_2017_table_p6_1:row17:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bexenatide%5D%20Exenatide_Cirincione2017_single_dose_model_parameter_estimat&body=Drug%3A%20exenatide%0ARecord%3A%20Exenatide_Cirincione2017_single_dose_model_parameter_estimat%0APaper%3A%20Cirincione_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_exenatide/Exenatide_Cirincione2017_single_dose_model_parameter_estimat%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-22 09:38 UTC</sub>
