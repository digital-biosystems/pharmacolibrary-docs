<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;cabozantinib&quot;,&quot;href&quot;:&quot;drugs/drug_cabozantinib/&quot;},{&quot;label&quot;:&quot;Tan_2024 \u00b7 estimates_of_the_final_poppk_model_rse&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cabozantinib_DAngelo2020_reference&quot;,&quot;label&quot;:&quot;DAngelo_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cabozantinib/Cabozantinib_DAngelo2020_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cabozantinib_Lacy2018_reference&quot;,&quot;label&quot;:&quot;Lacy_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cabozantinib/Cabozantinib_Lacy2018_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cabozantinib_Ly2023_ase&quot;,&quot;label&quot;:&quot;Ly_2023_ase&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cabozantinib/Cabozantinib_Ly2023_ase.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cabozantinib_Ly2023_estimate&quot;,&quot;label&quot;:&quot;Ly_2023_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cabozantinib/Cabozantinib_Ly2023_estimate.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cabozantinib_Miles2016v2_reference&quot;,&quot;label&quot;:&quot;Miles_2016_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cabozantinib/Cabozantinib_Miles2016v2_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cabozantinib_Nguyen2019_reference&quot;,&quot;label&quot;:&quot;Nguyen_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cabozantinib/Cabozantinib_Nguyen2019_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cabozantinib_Tan2024_estimates_in_the_registration_file&quot;,&quot;label&quot;:&quot;Tan_2024_estimates_in_the_registration_file&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cabozantinib/Cabozantinib_Tan2024_estimates_in_the_registration_file.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cabozantinib — `Cabozantinib_Tan2024_estimates_of_the_final_poppk_model_rse`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> CL/F has no unit.

<div class="pk-model-meta" hidden drug="cabozantinib" model-id="Cabozantinib_Tan2024_estimates_of_the_final_poppk_model_rse" status="needs_review" stale="false" population="metastatic renal cell carcinoma patients" measured-compound="cabozantinib" parameterization="apparent" topology="2C"></div>

## Citation
Tan Z, Völler S, Yin A, Rieborn A, Gelderblom AJ, van der Hulle T et al. Population Pharmacokinetics of Cabozantinib in Metastatic Renal Cell Carcinoma Patients: Towards Drug Expenses Saving Regimens. Clinical pharmacokinetics 63(6):857–869 (2024).
  ·  DOI: [10.1007/s40262-024-01379-y](https://doi.org/10.1007/s40262-024-01379-y)

## Population and dosing

**Population:** metastatic renal cell carcinoma patients · condition metastatic renal cell carcinoma · age group adult · n = 27.

**Dosing:** 40, 60 mg, oral, multiple, every 24 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted, plus 1 covariate effect.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| F1 (/)* | Fab | 0.675 |  |
| Vc/F (L)* | V1/F | 81.5 | L |
| Vp/F (L)* | V2/F | 213 | L |
| Q/F (L/h)* | Q/F | 14.2 | L/h |
| Ka1 (/h)* | kabs | 0.568 | 1/h |
| ALAG1 (h)* | tlag | 0.459 | h |
| dose_exponent_on_ka1 | dose_exponent_on_ka1 | -0.5 |  |
| Female on CL/F*,# | equation variable | 0.79 |  |
| Asian on CL/F*,# | CL/F | 0.73 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.556). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**CL/F has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — cabozantinib: Fab 0.675, V1/F 81.5 L, V2/F 213 L, Q/F 14.2 L/h, kabs 0.568 1/h, tlag 0.459 h, CL/F 0.73.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on `parameters[alag1 (h)*].parameter_id`: this record has Q83, the second reading Q31; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| F1 (/)* | `Q40` · Fab | 0.675 |  |  |  |  | llm_confirmed (0.6) | Tab2:row2:col2 |
| Vc/F (L)* | `Q290` · V1/F | 81.5 | L | 0.0815 | m3 | L | llm_confirmed (0.6) | Tab2:row3:col2 |
| Vp/F (L)* | `Q82` · V2/F | 213 | L | 0.213 | m3 | L | llm_confirmed (0.6) | Tab2:row4:col2 |
| Q/F (L/h)* | `Q69` · Q/F | 14.2 | L/h | 3.944e-06 | m3/s | L/h | llm_confirmed (0.6) | Tab2:row5:col2 |
| Ka1 (/h)* | `Q49` · kabs | 0.568 | 1/h | 0.0001578 | 1/s | 1/h | llm (0.6) | Tab2:row6:col2 |
| ALAG1 (h)* | `Q83` · tlag | 0.459 | h | 1652 | s | h | llm (0.6) | Tab2:row7:col2 |
| dose_exponent_on_ka1 | `Q900` · dose_exponent_on_ka1 | -0.5 |  |  |  |  |  | Tab2:row10:col2 |
| Female on CL/F*,# | `Q900` · equation variable | 0.79 |  |  |  |  | llm_corrected (0.6) | Tab2:row11:col2 |
| Asian on CL/F*,# | `Q27` · CL/F | 0.73 |  |  |  |  | llm_confirmed (0.6) | Tab2:row12:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'estimates of the final poppk model (rse%)' classified 'rse' by the LLM but kept as the estimate: the header names the point value
- dropped duplicate Q49 ('Ka2 (/h)*', value '0.102') — already have one for this compound
- dropped duplicate Q83 ('ALAG2 (h)*', value '16.8') — already have one for this compound
- covariate level 'Dose exponent on Ka1*' → Q900:dose_exponent_on_ka1 = -0.5 (power on Q69)
- dropped value-less row: 'CL/F'
- dropped value-less row: 'Q/F'
- implicit units: 'Vc/F (L)*' → L (from the paper text: 'Table 2 labels the parameter “Vc/F (L)*”.')
- implicit units: 'Vp/F (L)*' → L (from the paper text: 'Table 2 labels the parameter “Vp/F (L)*”.')
- implicit units: 'Q/F (L/h)*' → L/h (from the paper text: 'Table 2 labels the parameter “Q/F (L/h)*”.')
- implicit units: 'Ka1 (/h)*' → 1/h (from the paper text: 'Table 2 labels the parameter “Ka1 (/h)*”.')
- implicit units: 'ALAG1 (h)*' → h (from the paper text: 'Table 2 labels the parameter “ALAG1 (h)*”.')
- implicit units: 'Asian on CL/F*,#' — the LLM proposed '1', whose dimension does not fit Q27; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=cabozantinib
- population split: 'estimates of the final poppk model (rse%)' subgroup of Tan_2024 (paper reports 2 populations: estimates in the registration file, estimates of the final poppk model (rse%))

**Extraction notes:**
- unparsed cell Tab2:row1:col2 = '3.11 (5%)'
- unparsed cell Tab2:row18:col2 = '0.335 (10%)'
- LLM selected parameter table(s) 2
- dropped sensitivity-analysis table(s) 3 from the LLM selection — perturbations of a model, not a model
- LLM region Tan_2024:other_prose: no JSON records returned

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.556 (10/18 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[alag1 (h)*].parameter_id` | Q83 | Q31 | mismatch |
| `qwen3.8-27b` | `parameters[asian on cl/f*,#]` | 0.73 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[dose_exponent_on_ka1]` | -0.5 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[f1 (/)*]` | 0.675 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[female on cl/f*,#].parameter_id` | Q900 | Q27 | mismatch |
| `qwen3.8-27b` | `parameters[ka2 (/h)*]` |  | 0.102 | only_one_extracted |
| `qwen3.8-27b` | `parameters[q/f (l/h)*].covariate_forms` | ['power'] | [] | mismatch |
| `qwen3.8-27b` | `parameters[theta_t1_2ka_weight_power]` |  | -0.5 | only_one_extracted |

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
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Tab2:row3:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab2:row6:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Tab2:row5:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Tab2:row4:col2'] |
| C5_dimension_Q83 | pass | [time] |  | ['Tab2:row7:col2'] |
| C5_unit_missing_Q27 | fail | [length] ** 3 / [time] |  | ['Tab2:row12:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q290 | pass | volume within physiological range | 81.5 L | ['Tab2:row3:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 213 L | ['Tab2:row4:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcabozantinib%5D%20Cabozantinib_Tan2024_estimates_of_the_final_poppk_model_rse&body=Drug%3A%20cabozantinib%0ARecord%3A%20Cabozantinib_Tan2024_estimates_of_the_final_poppk_model_rse%0APaper%3A%20Tan_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cabozantinib/Cabozantinib_Tan2024_estimates_of_the_final_poppk_model_rse%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 22:04 UTC</sub>
