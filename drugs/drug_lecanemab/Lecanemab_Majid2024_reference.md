<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06D&quot;,&quot;href&quot;:&quot;atc/N06D.md&quot;},{&quot;label&quot;:&quot;lecanemab&quot;,&quot;href&quot;:&quot;drugs/drug_lecanemab/&quot;},{&quot;label&quot;:&quot;Majid_2024 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lecanemab — `Lecanemab_Majid2024_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> CL_ratio has no unit.

<div class="pk-model-meta" hidden drug="lecanemab" model-id="Lecanemab_Majid2024_reference" status="needs_review" stale="false" population="subjects with early Alzheimer&#39;s disease (MCI or mild dementia)" measured-compound="lecanemab" parameterization="mechanistic" topology="2C"></div>

## Citation
Majid O, Cao Y, Willis BA, Hayato S, Takenaka O, Lalovic B et al. Population pharmacokinetics and exposure-response analyses of safety (ARIA-E and isolated ARIA-H) of lecanemab in subjects with early Alzheimer's disease. CPT: pharmacometrics & systems pharmacology 13(12):2111–2123 (2024).
  ·  DOI: [10.1002/psp4.13224](https://doi.org/10.1002/psp4.13224)

## Population and dosing

**Population:** subjects with early Alzheimer's disease (MCI or mild dementia) · condition early Alzheimer's disease · age group adult · n = 1619.

**Dosing:** 175, 350, 700 mg, iv, multiple, every 336 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted, plus 6 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CL (L/h) | CL | 1.60 | L/h | 34.9 (None% RSE) |
| V 1 (L) | V1 | 0.799 | L | 12.2 (None% RSE) |
| V 2 (L) | V2 | 4.09 | L | 94.6 (None% RSE) |
| Q (L/h) | Q | 4.23 | L/h |  |
| F (comparability) for process B | Frel | 0.750 |  |  |
| Females ~ CL (ratio to males) | CL_ratio | 2.17 | ratio to males |  |
| theta_q319_weight_power | theta_q319_weight_power | 10.5 |  |  |
| theta_q319_albumin_power | theta_q319_albumin_power | 9.71 |  |  |
| theta_cl_ratio_ada_power | theta_cl_ratio_ada_power | 0.860 |  |  |
| theta_q319_weight_power | theta_q319_weight_power | 5.01 |  |  |
| theta_v1_ethnicity_power | theta_v1_ethnicity_power | 1.58 |  |  |
| theta_v2_ethnicity_power | theta_v2_ethnicity_power | 11.8 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.364). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**CL_ratio has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (CL_ratio), so that value has no SI equivalent. Extracted — lecanemab: CL 1.6 L/h, V1 0.799 L, V2 4.09 L, Q 4.23 L/h, Frel 0.75, CL_ratio 2.17 ratio to males.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[cl].value`: this record has 1.60, the second reading 0.0147; it also differs on 13 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 1.60 | L/h | 4.444e-07 | m3/s | l/h | exact (1) | psp413224-tbl-0001:row3:col1, psp413224-tbl-0001:row3:col2, psp413224-tbl-0001:row3:col3, psp413224-tbl-0001:row3:col4 | 34.9 (None% RSE) |
| V 1 (L) | `Q63` · V1 | 0.799 | L | 0.000799 | m3 | l | space_fold (0.95) | psp413224-tbl-0001:row4:col1, psp413224-tbl-0001:row4:col2, psp413224-tbl-0001:row4:col3, psp413224-tbl-0001:row4:col4 | 12.2 (None% RSE) |
| V 2 (L) | `Q64` · V2 | 4.09 | L | 0.00409 | m3 | l | space_fold (0.95) | psp413224-tbl-0001:row5:col1, psp413224-tbl-0001:row5:col2, psp413224-tbl-0001:row5:col3, psp413224-tbl-0001:row5:col4 | 94.6 (None% RSE) |
| Q (L/h) | `Q30` · Q | 4.23 | L/h | 1.175e-06 | m3/s | l/h | exact (1) | psp413224-tbl-0001:row6:col1, psp413224-tbl-0001:row6:col2, psp413224-tbl-0001:row6:col3, psp413224-tbl-0001:row6:col4 |  |
| F (comparability) for process B | `Q87` · Frel | 0.750 |  |  |  |  | llm (0.6) | psp413224-tbl-0001:row7:col1, psp413224-tbl-0001:row7:col2, psp413224-tbl-0001:row7:col3, psp413224-tbl-0001:row7:col4 |  |
| Females ~ CL (ratio to males) | `Q31` · CL_ratio | 2.17 | ratio to males |  |  | ratiotomales | llm_corrected (0.6) | psp413224-tbl-0001:row11:col1, psp413224-tbl-0001:row11:col2, psp413224-tbl-0001:row11:col3, psp413224-tbl-0001:row11:col4 |  |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 10.5 |  |  |  |  |  | psp413224-tbl-0001:row9:col1, psp413224-tbl-0001:row9:col2, psp413224-tbl-0001:row9:col3, psp413224-tbl-0001:row9:col4 |  |
| theta_q319_albumin_power | `Q900` · theta_q319_albumin_power | 9.71 |  |  |  |  |  | psp413224-tbl-0001:row10:col1, psp413224-tbl-0001:row10:col2, psp413224-tbl-0001:row10:col3 |  |
| theta_cl_ratio_ada_power | `Q900` · theta_cl_ratio_ada_power | 0.860 |  |  |  |  |  | psp413224-tbl-0001:row12:col1, psp413224-tbl-0001:row12:col2, psp413224-tbl-0001:row12:col3, psp413224-tbl-0001:row12:col4 |  |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 5.01 |  |  |  |  |  | psp413224-tbl-0001:row13:col1, psp413224-tbl-0001:row13:col2, psp413224-tbl-0001:row13:col3, psp413224-tbl-0001:row13:col4 |  |
| theta_v1_ethnicity_power | `Q900` · theta_v1_ethnicity_power | 1.58 |  |  |  |  |  | psp413224-tbl-0001:row15:col1, psp413224-tbl-0001:row15:col2, psp413224-tbl-0001:row15:col3, psp413224-tbl-0001:row15:col4 |  |
| theta_v2_ethnicity_power | `Q900` · theta_v2_ethnicity_power | 11.8 |  |  |  |  |  | psp413224-tbl-0001:row16:col1, psp413224-tbl-0001:row16:col2, psp413224-tbl-0001:row16:col3, psp413224-tbl-0001:row16:col4 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| F | Q40 | exact |

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL' routed out of structural estimates ('Interindividual variability (%CV)')
- table section iiv: 'Correlation CL ~ V1 (R)' routed out of structural estimates ('Interindividual variability (%CV)')
- table section iiv: 'V 1' routed out of structural estimates ('Interindividual variability (%CV)')
- table section iiv: 'V 2' routed out of structural estimates ('Interindividual variability (%CV)')
- table section iiv: 'F' routed out of structural estimates ('Interindividual variability (%CV)')
- table section residual_error: 'Proportional (%CV)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Additive (SD; μg/mL)' routed out of structural estimates ('Residual variability')
- unit_dimension_unknown: 'ratio to males' (CL_ratio)
- unit_dimension_unknown: 'ratio to males' (V1)
- dropped duplicate Q63 ('Females ~ V 1 (ratio to males)', value '1.04') — already have one for this compound
- NIL: refused to back-fill base 'CL' from footnote/prose loose number None (source ['psp413224-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V1' from footnote/prose loose number None (source ['psp413224-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V2' from footnote/prose loose number None (source ['psp413224-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'IIV' from footnote/prose loose number 6.02 (source ['psp413224-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V1' from footnote/prose loose number 29.3 (source ['psp413224-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V2' from footnote/prose loose number 25.8 (source ['psp413224-tbl-0001:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'Frel' from footnote/prose loose number 60.2 (source ['psp413224-tbl-0001:footnote']); the table cell was unparseable — needs review
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=lecanemab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- molar mass: none found for 'lecanemab' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell psp413224-tbl-0001:row10:col4 = '−0.482 to −0.261'
- unparsed cell psp413224-tbl-0001:row25:col4 = '&lt;0–1.62'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.364 (8/22 fields) | 14 |

<details><summary>14 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl].covariate_forms` | [] | ['power', 'power'] | mismatch |
| `gpt-oss-120b` | `parameters[cl].value` | 1.60 | 0.0147 | mismatch |
| `gpt-oss-120b` | `parameters[f (comparability) for process b].value` | 0.750 | 0.890 | mismatch |
| `gpt-oss-120b` | `parameters[females - cl].value` | 2.17 | 0.758 | mismatch |
| `gpt-oss-120b` | `parameters[q].value` | 4.23 | 0.00155 | mismatch |
| `gpt-oss-120b` | `parameters[theta_cl_albumin_power]` |  | -0.372 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_ratio_ada_power].value` | 0.860 | 1.09 | mismatch |
| `gpt-oss-120b` | `parameters[theta_cl_weight_power]` |  | 0.250 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q319_albumin_power]` | 9.71 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q319_weight_power].value` | 10.5 | 0.469 | mismatch |
| `gpt-oss-120b` | `parameters[theta_v1_ethnicity_power].value` | 1.58 | 0.896 | mismatch |
| `gpt-oss-120b` | `parameters[theta_v2_ethnicity_power].value` | 11.8 | 0.475 | mismatch |
| `gpt-oss-120b` | `parameters[v 1].value` | 0.799 | 3.18 | mismatch |
| `gpt-oss-120b` | `parameters[v 2].value` | 4.09 | 1.83 | mismatch |

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
| C2_reference | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['psp413224-tbl-0001:row3:col1', 'psp413224-tbl-0001:row3:col2', 'psp413224-tbl-0001:row3:col3', 'psp413224-tbl-0001:row3:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['psp413224-tbl-0001:row6:col1', 'psp413224-tbl-0001:row6:col2', 'psp413224-tbl-0001:row6:col3', 'psp413224-tbl-0001:row6:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['psp413224-tbl-0001:row4:col1', 'psp413224-tbl-0001:row4:col2', 'psp413224-tbl-0001:row4:col3', 'psp413224-tbl-0001:row4:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['psp413224-tbl-0001:row5:col1', 'psp413224-tbl-0001:row5:col2', 'psp413224-tbl-0001:row5:col3', 'psp413224-tbl-0001:row5:col4'] |
| C5_unit_missing_Q31 | fail | [length] ** 3 / [time] | ratio to males | ['psp413224-tbl-0001:row11:col1', 'psp413224-tbl-0001:row11:col2', 'psp413224-tbl-0001:row11:col3', 'psp413224-tbl-0001:row11:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.6 | ['psp413224-tbl-0001:row3:col1', 'psp413224-tbl-0001:row3:col2', 'psp413224-tbl-0001:row3:col3', 'psp413224-tbl-0001:row3:col4'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.6 L/h | ['psp413224-tbl-0001:row3:col1', 'psp413224-tbl-0001:row3:col2', 'psp413224-tbl-0001:row3:col3', 'psp413224-tbl-0001:row3:col4'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 0.799 L | ['psp413224-tbl-0001:row4:col1', 'psp413224-tbl-0001:row4:col2', 'psp413224-tbl-0001:row4:col3', 'psp413224-tbl-0001:row4:col4'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 4.09 L | ['psp413224-tbl-0001:row5:col1', 'psp413224-tbl-0001:row5:col2', 'psp413224-tbl-0001:row5:col3', 'psp413224-tbl-0001:row5:col4'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blecanemab%5D%20Lecanemab_Majid2024_reference&body=Drug%3A%20lecanemab%0ARecord%3A%20Lecanemab_Majid2024_reference%0APaper%3A%20Majid_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lecanemab/Lecanemab_Majid2024_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 02:53 UTC</sub>
