<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;cilazapril&quot;,&quot;href&quot;:&quot;drugs/drug_cilazapril/&quot;},{&quot;label&quot;:&quot;Williams_1990 \u00b7 eighth_dose&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cilazapril_Song2002_reference&quot;,&quot;label&quot;:&quot;Song_2002_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cilazapril/Cilazapril_Song2002_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cilazapril_Wright2025_reference&quot;,&quot;label&quot;:&quot;Wright_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cilazapril/Cilazapril_Wright2025_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cilazapril — `Cilazapril_Williams1990_eighth_dose`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="cilazapril" model-id="Cilazapril_Williams1990_eighth_dose" status="needs_review" stale="false" population="healthy young volunteers" measured-compound="cilazapril" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Williams PE, Brown AN, Rajaguru S, Francis RJ, Bell AJ, Dewland PM. Pharmacokinetics of cilazapril during repeated oral dosing in healthy young volunteers. European journal of drug metabolism and pharmacokinetics 15(1):63–67 (1990).
  ·  DOI: [10.1007/BF03190129](https://doi.org/10.1007/BF03190129)

## Population and dosing

**Population:** healthy young volunteers · condition healthy · age group adult · n = &gt;=.

**Dosing:** 2.5 mg, oral, multiple, every 24 h.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 9 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Maximum conc. [ng/ml] | Cmax | 50.9 | ng/ml |
| Time to maximum [h] | tmax | 1.69 | h |
| Conc. at 24 h [ng/ml] | Ct | 1.84 | ng/ml |
| AUC24 [ng.h/ml] | AUCt | 213 | ng.h/ml |
| Initial elimin. half-life [h] | t1/2β | 2.02 | h |
| Terminal elimin. half-life [h] | t1/2z | 53.8 | h |
| and | CL | 40.0 | ml/min |
| Vd (L) | V | 1.79 | L |
| Ego-onset ( h) | tlag | 1.2 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.059). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has cilazapril, the second reading unknown; it also differs on 15 more fields. That field shapes the model, so the record is marked disputed.

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Maximum conc. [ng/ml] | `Q32` · Cmax | 50.9 | ng/ml |  |  | ng/ml | llm (0.6) | Williams_1990_table_p4_1:row1:col3 |
| Time to maximum [h] | `Q56` · tmax | 1.69 | h | 6084 | s | h | llm (0.6) | Williams_1990_table_p4_1:row2:col3, Williams_1990_table_p4_1:row10:col3 |
| Conc. at 24 h [ng/ml] | `Q75` · Ct | 1.84 | ng/ml |  |  | ng/ml | llm (0.6) | Williams_1990_table_p4_1:row3:col3 |
| AUC24 [ng.h/ml] | `Q19` · AUCt | 213 | ng.h/ml |  |  | (h·ng)/ml | llm (0.6) | Williams_1990_table_p4_1:row4:col3 |
| Initial elimin. half-life [h] | `Q60` · t1/2β | 2.02 | h | 7272 | s | h | llm (0.6) | Williams_1990_table_p4_1:row5:col3 |
| Terminal elimin. half-life [h] | `Q57` · t1/2z | 53.8 | h | 1.937e+05 | s | h | llm (0.6) | Williams_1990_table_p4_1:row6:col3 |
| and | `Q22` · CL | 40.0 | ml/min | 6.667e-07 | m3/s | L/h | review_gapfill (0.7) | Deget_1991:review |
| Vd (L) | `Q61` · V | 1.79 | L | 0.00179 | m3 | L | review_gapfill (0.7) | Song_2002:review |
| Ego-onset ( h) | `Q83` · tlag | 1.2 | h | 4320 | s | h | review_gapfill (0.7) | Massarella_1989:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q57 ('‘Effective’ half-life [h]', value '8.90') — already have one for this compound
- dropped unlinked row (NIL): 'Inhibition at 24 h [%]' — extend the ontology if this is a real PK parameter (source ['Williams_1990_table_p4_1:row11:col3'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cilazapril
- topology: 1 first-order transfer(s) across 2 compounds → general_linear
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- population split: 'eighth dose' subgroup of Williams_1990 (paper reports 2 populations: eighth dose, first dose)
- row roles (LLM): model_class=noncompartmental; 8/8 row label(s) assigned, 0 linked by role; re-tagged parent→cilazaprilat ×14
- gap-filled Q22 (CL) from Deget_1991's review values (primary lacked it)
- gap-filled Q61 (V) from Song_2002's review values (primary lacked it)
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- gap-filled Q83 (tlag) from Massarella_1989's review values (primary lacked it)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- table Williams_1990_table_p4_1: unparsed_numeric_cell

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.059 (1/17 fields) | 16 |

<details><summary>16 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['cilazapril', 'cilazaprilat', 'hydrolysis']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[auc24 [ng.h/ml]]` |  | 213 | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc24 [ng.h/ml]]` | 213 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[conc. at 24 h [ng/ml]]` |  | 1.84 | only_one_extracted |
| `gpt-oss-120b` | `parameters[conc. at 24 h [ng/ml]]` | 1.84 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[inhibition at 24 h [%]]` |  | 66.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[initial elimin. half-life [h]]` |  | 2.02 | only_one_extracted |
| `gpt-oss-120b` | `parameters[initial elimin. half-life [h]]` | 2.02 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[maximum conc. [ng/ml]]` |  | 50.9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[maximum conc. [ng/ml]]` | 50.9 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[terminal elimin. half-life [h]]` |  | 53.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[terminal elimin. half-life [h]]` | 53.8 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[time to maximum [h]]` |  | 1.69 | only_one_extracted |
| `gpt-oss-120b` | `parameters[time to maximum [h]]` | 1.69 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | cilazapril | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | cilazapril | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['Williams_1990_table_p4_1:row4:col3'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Deget_1991:review'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Williams_1990_table_p4_1:row1:col3'] |
| C5_dimension_Q56 | pass | [time] |  | ['Williams_1990_table_p4_1:row2:col3', 'Williams_1990_table_p4_1:row10:col3'] |
| C5_dimension_Q57 | pass | [time] |  | ['Williams_1990_table_p4_1:row6:col3'] |
| C5_dimension_Q60 | pass | [time] |  | ['Williams_1990_table_p4_1:row5:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Song_2002:review'] |
| C5_dimension_Q75 | pass | [mass] / [length] ** 3 |  | ['Williams_1990_table_p4_1:row3:col3'] |
| C5_dimension_Q83 | pass | [time] |  | ['Massarella_1989:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 40 | ['Deget_1991:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 2.4 L/h | ['Deget_1991:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 1.79 L | ['Song_2002:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcilazapril%5D%20Cilazapril_Williams1990_eighth_dose&body=Drug%3A%20cilazapril%0ARecord%3A%20Cilazapril_Williams1990_eighth_dose%0APaper%3A%20Williams_1990%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cilazapril/Cilazapril_Williams1990_eighth_dose%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-03 11:14 UTC</sub>
