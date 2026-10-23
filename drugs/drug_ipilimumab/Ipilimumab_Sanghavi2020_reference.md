<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;ipilimumab&quot;,&quot;href&quot;:&quot;drugs/drug_ipilimumab/&quot;},{&quot;label&quot;:&quot;Sanghavi_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ipilimumab_Hu2024_reference&quot;,&quot;label&quot;:&quot;Hu_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ipilimumab/Ipilimumab_Hu2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ipilimumab_Leven2019_reference&quot;,&quot;label&quot;:&quot;Leven_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ipilimumab/Ipilimumab_Leven2019_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ipilimumab_Shang2022_reference&quot;,&quot;label&quot;:&quot;Shang_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ipilimumab/Ipilimumab_Shang2022_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ipilimumab_van2019_reference&quot;,&quot;label&quot;:&quot;van_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ipilimumab/Ipilimumab_van2019_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ipilimumab — `Ipilimumab_Sanghavi2020_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> V and CL_ratio have no unit.

<div class="pk-model-meta" hidden drug="ipilimumab" model-id="Ipilimumab_Sanghavi2020_reference" status="needs_review" stale="false" population="patients with advanced solid tumors receiving ipilimumab alone or with nivolumab" measured-compound="ipilimumab" parameterization="mechanistic" topology="3C"></div>

## Citation
Sanghavi K, Zhang J, Zhao X, Feng Y, Statkevich P, Sheng J et al. Population Pharmacokinetics of Ipilimumab in Combination With Nivolumab in Patients With Advanced Solid Tumors. CPT: pharmacometrics & systems pharmacology 9(1):29–39 (2020).
  ·  DOI: [10.1002/psp4.12477](https://doi.org/10.1002/psp4.12477)

## Population and dosing

**Population:** patients with advanced solid tumors receiving ipilimumab alone or with nivolumab · condition advanced solid tumors · age group adult · n = 3411.

**Dosing:** 70, 210 mg, iv, multiple.

## Model

**Structure:** 3-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CL0REF (mL/hour) | CL | 14.1 | mL/hour | 0.231 |
| VCREF (L) | V1 | 3.95 | L | 0.0255 |
| Q REF (mL/hour) | Q | 27.9 | mL/hour | 2.22 |
| VPREF (L) | V2 | 3.18 | L | 0.0802 |
| CLBBWT | allometric_exponent | 0.694 |  | 0.0315 |
| V BBWT | V | 0.600 |  | 0.0293 |
| CLlog−BLDH | equation variable | 0.703 |  | 0.0716 |
| T 50 (hour) | t1/2z | 2540 | hour | 86.5 |
| CLN1Q3W | CL_ratio | 0.0950 |  | 0.0149 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.727). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**V and CL_ratio have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — ipilimumab: CL 14.1 mL/hour, V1 3.95 L, Q 27.9 mL/hour, V2 3.18 L, allometric_exponent 0.694, V 0.6, t1/2z 2.54e+03 hour, CL_ratio 0.095.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of clbbwt: this record has 0.694, the second reading none; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CL0REF (mL/hour) | `Q22` · CL | 14.1 | mL/hour | 3.917e-09 | m3/s | ml/h | 0.231 | llm (0.6) | psp412477-tbl-0002:row2:col1, psp412477-tbl-0002:row2:col2, psp412477-tbl-0002:row2:col3 |
| VCREF (L) | `Q63` · V1 | 3.95 | L | 0.00395 | m3 | l | 0.0255 | llm (0.6) | psp412477-tbl-0002:row3:col1, psp412477-tbl-0002:row3:col2, psp412477-tbl-0002:row3:col3 |
| Q REF (mL/hour) | `Q30` · Q | 27.9 | mL/hour | 7.75e-09 | m3/s | ml/h | 2.22 | llm (0.6) | psp412477-tbl-0002:row4:col1, psp412477-tbl-0002:row4:col2, psp412477-tbl-0002:row4:col3 |
| VPREF (L) | `Q64` · V2 | 3.18 | L | 0.00318 | m3 | l | 0.0802 | llm (0.6) | psp412477-tbl-0002:row5:col1, psp412477-tbl-0002:row5:col2, psp412477-tbl-0002:row5:col3 |
| CLBBWT | `Q319` · allometric_exponent | 0.694 |  |  |  |  | 0.0315 | llm (0.6) | psp412477-tbl-0002:row6:col1, psp412477-tbl-0002:row6:col2, psp412477-tbl-0002:row6:col3, psp412477-tbl-0002:footnote |
| V BBWT | `Q61` · V | 0.600 |  |  |  |  | 0.0293 | llm (0.6) | psp412477-tbl-0002:row7:col1, psp412477-tbl-0002:row7:col2, psp412477-tbl-0002:row7:col3 |
| CLlog−BLDH | `Q900` · equation variable | 0.703 |  |  |  |  | 0.0716 | llm (0.6) | psp412477-tbl-0002:row8:col1, psp412477-tbl-0002:row8:col2, psp412477-tbl-0002:row8:col3 |
| T 50 (hour) | `Q57` · t1/2z | 2540 | hour | 9.144e+06 | s | h | 86.5 | llm (0.6) | psp412477-tbl-0002:row10:col1, psp412477-tbl-0002:row10:col2, psp412477-tbl-0002:row10:col3 |
| CLN1Q3W | `Q31` · CL_ratio | 0.0950 |  |  |  |  | 0.0149 | llm (0.6) | psp412477-tbl-0002:row13:col1, psp412477-tbl-0002:row13:col2, psp412477-tbl-0002:row13:col3, psp412477-tbl-0002:footnote |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'Proportional (‐)' routed out of structural estimates ('Residual error')
- table section residual_error: 'Additive (μg/mL)' routed out of structural estimates ('Residual error')
- dropped PD-category row 'EmaxREF' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp412477-tbl-0002:row9:col1', 'psp412477-tbl-0002:row9:col2'])
- dropped PD-category row 'HILL' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp412477-tbl-0002:row11:col1', 'psp412477-tbl-0002:row11:col2', 'psp412477-tbl-0002:row11:col3'])
- dropped duplicate Q900 ('CLSCLC', value '-0.124') — already have one for this compound
- dropped duplicate Q900 ('CLN3Q2W', value '0.191') — already have one for this compound
- dropped duplicate Q900 ('CLLINE', value '-0.0949') — already have one for this compound
- dropped PD-category row 'EmaxCOMBO' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp412477-tbl-0002:row16:col1', 'psp412477-tbl-0002:row16:col2', 'psp412477-tbl-0002:footnote'])
- dropped value-less row: 'CLlog - BLDH'
- dropped value-less row: 'VCBBWT'
- implicit units: 'V BBWT' — the LLM proposed 'dimensionless', whose dimension does not fit Q61; left unset
- implicit units: 'CLN1Q3W' — the LLM proposed 'dimensionless', whose dimension does not fit Q31; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ipilimumab
- structure disagreement: deterministic 3C vs LLM 2C — review compartment count
- molar mass: none found for 'ipilimumab' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell psp412477-tbl-0002:row9:col3 = '−0.12 to 0.002'
- unparsed cell psp412477-tbl-0002:row12:col3 = '−0.19 to −0.06'
- unparsed cell psp412477-tbl-0002:row15:col3 = '−0.12 to −0.06'
- unparsed cell psp412477-tbl-0002:row16:col3 = '−0.27 to −0.14'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.727 (16/22 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[clbbwt]` | 0.694 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[cllog-bldh]` | 0.703 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[cln1q3w].parameter_id` | Q31 | Q900 | mismatch |
| `qwen3.8-27b` | `parameters[v bbwt].parameter_id` | Q61 | Q352 | mismatch |
| `qwen3.8-27b` | `parameters[vcref]` | 3.95 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[vpref].parameter_id` | Q64 | Q61 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['psp412477-tbl-0002:row2:col1', 'psp412477-tbl-0002:row2:col2', 'psp412477-tbl-0002:row2:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['psp412477-tbl-0002:row4:col1', 'psp412477-tbl-0002:row4:col2', 'psp412477-tbl-0002:row4:col3'] |
| C5_dimension_Q57 | pass | [time] |  | ['psp412477-tbl-0002:row10:col1', 'psp412477-tbl-0002:row10:col2', 'psp412477-tbl-0002:row10:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['psp412477-tbl-0002:row3:col1', 'psp412477-tbl-0002:row3:col2', 'psp412477-tbl-0002:row3:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['psp412477-tbl-0002:row5:col1', 'psp412477-tbl-0002:row5:col2', 'psp412477-tbl-0002:row5:col3'] |
| C5_unit_missing_Q31 | fail | [length] ** 3 / [time] |  | ['psp412477-tbl-0002:row13:col1', 'psp412477-tbl-0002:row13:col2', 'psp412477-tbl-0002:row13:col3', 'psp412477-tbl-0002:footnote'] |
| C5_unit_missing_Q61 | fail | [length] ** 3 |  | ['psp412477-tbl-0002:row7:col1', 'psp412477-tbl-0002:row7:col2', 'psp412477-tbl-0002:row7:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 14.1 | ['psp412477-tbl-0002:row2:col1', 'psp412477-tbl-0002:row2:col2', 'psp412477-tbl-0002:row2:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0141 L/h | ['psp412477-tbl-0002:row2:col1', 'psp412477-tbl-0002:row2:col2', 'psp412477-tbl-0002:row2:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.95 L | ['psp412477-tbl-0002:row3:col1', 'psp412477-tbl-0002:row3:col2', 'psp412477-tbl-0002:row3:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 3.18 L | ['psp412477-tbl-0002:row5:col1', 'psp412477-tbl-0002:row5:col2', 'psp412477-tbl-0002:row5:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bipilimumab%5D%20Ipilimumab_Sanghavi2020_reference&body=Drug%3A%20ipilimumab%0ARecord%3A%20Ipilimumab_Sanghavi2020_reference%0APaper%3A%20Sanghavi_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ipilimumab/Ipilimumab_Sanghavi2020_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 12:50 UTC</sub>
