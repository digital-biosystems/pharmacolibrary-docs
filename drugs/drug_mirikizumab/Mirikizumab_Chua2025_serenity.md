<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;mirikizumab&quot;,&quot;href&quot;:&quot;drugs/drug_mirikizumab/&quot;},{&quot;label&quot;:&quot;Chua_2025 \u00b7 serenity&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Mirikizumab_Chua2023_reference&quot;,&quot;label&quot;:&quot;Chua_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mirikizumab/Mirikizumab_Chua2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# mirikizumab — `Mirikizumab_Chua2025_serenity`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Only clearance was extracted — no volume; cL has no unit.

<div class="pk-model-meta" hidden drug="mirikizumab" model-id="Mirikizumab_Chua2025_serenity" status="needs_review" stale="false" population="adults with moderately-to-severely active Crohn&#39;s disease" measured-compound="mirikizumab" parameterization="mechanistic" topology="1C"></div>

## Citation
Chua L, Otani Y, Lin Z, Friedrich S, Durand F, Zhang XC. Mirikizumab Pharmacokinetics and Exposure-Response in Patients With Moderately-To-Severely Active Crohn's Disease: Results From Two Randomized Studies. Clinical and translational science 18(8):e70320 (2025).
  ·  DOI: [10.1111/cts.70320](https://doi.org/10.1111/cts.70320)

## Population and dosing

**Population:** adults with moderately-to-severely active Crohn's disease · condition Crohn's disease · age group adult · n = 897.

**Dosing:** 200, 300, 600, 900, 1000 mg, iv, sc, multiple, every 24 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 1 extracted, plus 8 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| BL SES-CD effect on CL | CL | 0.227 |  |
| bl_bmi_effect_on_f | bl_bmi_effect_on_f | -0.0318 |  |
| theta_q49_category | theta_q49_category | 0.00647 |  |
| theta_cl_category | theta_cl_category | 0.0217 |  |
| theta_cl_albumin | theta_cl_albumin | -0.754 |  |
| theta_q30_category | theta_q30_category | 0.00884 |  |
| theta_q64_category | theta_q64_category | 3.31 |  |
| theta_q77_category | theta_q77_category | 1.75 |  |
| theta_q44_category | theta_q44_category | 33.4 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.118). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only clearance was extracted — no volume; cL has no unit.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. Without a unit the value cannot be converted, so the model cannot use it. Extracted — mirikizumab: CL 0.227.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has mirikizumab, the second reading unknown; it also differs on 14 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | link | source |
|---|---|---|---|---|---|
| BL SES-CD effect on CL | `Q22` · CL | 0.227 |  | llm_confirmed (0.6) | tab_1:row14:col1 |
| bl_bmi_effect_on_f | `Q900` · bl_bmi_effect_on_f | -0.0318 |  |  | tab_1:row32:col1, tab_1:row32:col3 |
| theta_q49_category | `Q900` · theta_q49_category | 0.00647 |  |  | tab_1:row5:col1, tab_1:row5:col3 |
| theta_cl_category | `Q900` · theta_cl_category | 0.0217 |  |  | tab_1:row9:col1, tab_1:row9:col3, tab_1:row9:col4 |
| theta_cl_albumin | `Q900` · theta_cl_albumin | -0.754 |  |  | tab_1:row11:col1, tab_1:row11:col3 |
| theta_q30_category | `Q900` · theta_q30_category | 0.00884 |  |  | tab_1:row18:col1, tab_1:row18:col3 |
| theta_q64_category | `Q900` · theta_q64_category | 3.31 |  |  | tab_1:row23:col1, tab_1:row23:col3, tab_1:row23:col4 |
| theta_q77_category | `Q900` · theta_q77_category | 1.75 |  |  | tab_1:row25:col1, tab_1:row25:col3, tab_1:row25:col4 |
| theta_q44_category | `Q900` · theta_q44_category | 33.4 |  |  | tab_1:row30:col1, tab_1:row30:col3, tab_1:row30:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q22 ('BL CRP effect on CL', value '0.0853') — already have one for this compound
- dropped unlinked row (NIL): 'BL BW effect on CL and Q' — extend the ontology if this is a real PK parameter (source ['tab_1:row20:col1', 'tab_1:row20:col3'])
- dropped unlinked row (NIL): 'BL BW effect on V c and V p' — extend the ontology if this is a real PK parameter (source ['tab_1:row27:col1', 'tab_1:row27:col3'])
- covariate level 'BL BMI effect on F' → Q900:bl_bmi_effect_on_f = -0.0318 (linear_fractional on Q22)
- covariate effect for Q49 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q30 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q64 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q77 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q44 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=mirikizumab
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- population split: 'serenity' subgroup of Chua_2025 (paper reports 2 populations: serenity, vivid-1)
- molar mass: none found for 'mirikizumab' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.118 (2/17 fields) | 15 |

<details><summary>15 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[bl bw effect on v c and v p]` |  | 0.445 | only_one_extracted |
| `gpt-oss-120b` | `parameters[bl crp effect on cl]` |  | 0.0853 | only_one_extracted |
| `gpt-oss-120b` | `parameters[bl ses-cd effect on cl]` | 0.227 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[bl_bmi_effect_on_f]` | -0.0318 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_albumin].value` | -0.754 | -0.0200 | mismatch |
| `gpt-oss-120b` | `parameters[theta_cl_category].value` | 0.0217 | 21.9 | mismatch |
| `gpt-oss-120b` | `parameters[theta_q30_category].value` | 0.00884 | 0.00921 | mismatch |
| `gpt-oss-120b` | `parameters[theta_q44_category]` | 33.4 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q49_category].value` | 0.00647 | 0.00693 | mismatch |
| `gpt-oss-120b` | `parameters[theta_q64_category].value` | 3.31 | 17.2 | mismatch |
| `gpt-oss-120b` | `parameters[theta_q77_category].value` | 1.75 | 37.3 | mismatch |
| `gpt-oss-120b` | `parameters[theta_q87_bmi]` |  | -0.0354 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q87_category]` |  | 35.7 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | mirikizumab | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | mirikizumab | unknown | mismatch |

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
| C2_reference | pass |  |  |  |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] |  | ['tab_1:row14:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.227 | ['tab_1:row14:col1'] |
| C8_topology | pass |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmirikizumab%5D%20Mirikizumab_Chua2025_serenity&body=Drug%3A%20mirikizumab%0ARecord%3A%20Mirikizumab_Chua2025_serenity%0APaper%3A%20Chua_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_mirikizumab/Mirikizumab_Chua2025_serenity%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 00:08 UTC</sub>
