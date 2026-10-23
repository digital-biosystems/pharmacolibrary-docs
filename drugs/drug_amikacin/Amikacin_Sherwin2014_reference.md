<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D06A&quot;,&quot;href&quot;:&quot;atc/D06A.md&quot;},{&quot;label&quot;:&quot;amikacin&quot;,&quot;href&quot;:&quot;drugs/drug_amikacin/&quot;},{&quot;label&quot;:&quot;Sherwin_2014 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Amikacin_Alhadab2018_reference&quot;,&quot;label&quot;:&quot;Alhadab_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amikacin/Amikacin_Alhadab2018_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amikacin_Alqahtani2018_base&quot;,&quot;label&quot;:&quot;Alqahtani_2018_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amikacin/Amikacin_Alqahtani2018_base.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amikacin_Alqahtani2018_final&quot;,&quot;label&quot;:&quot;Alqahtani_2018_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amikacin/Amikacin_Alqahtani2018_final.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amikacin_Illamola2018_reference&quot;,&quot;label&quot;:&quot;Illamola_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amikacin/Amikacin_Illamola2018_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amikacin_MedellnGaribay2022_reference&quot;,&quot;label&quot;:&quot;Medell\u00edn-Garibay_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amikacin/Amikacin_MedellnGaribay2022_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# amikacin — `Amikacin_Sherwin2014_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:35 UTC (Needs review), but the paper was screened again on 2026-10-07 21:09 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. No value for amikacin's clearance and volume of distribution.

<div class="pk-model-meta" hidden drug="amikacin" model-id="Amikacin_Sherwin2014_reference" status="needs_review" stale="true" population="hospitalized children with severe burns" measured-compound="amikacin" parameterization="mechanistic" topology="2C"></div>

## Citation
Sherwin CM, Wead S, Stockmann C, Healy D, Spigarelli MG, Neely A et al. Amikacin population pharmacokinetics among paediatric burn patients. Burns : journal of the International Society for Burn Injuries 40(2):311–318 (2014).
  ·  DOI: [10.1016/j.burns.2013.06.015](https://doi.org/10.1016/j.burns.2013.06.015)

## Population and dosing

**Population:** hospitalized children with severe burns · condition severe burns; presumed burn-related sepsis · age group mixed · n = 70.

**Dosing:** 10, 20 mg/kg/day, iv, multiple.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| Clearance (CL), L/h/70 kg | CLnorm | 5.57 | L/h/70 kg | 8.6 |  |
| Volume of distribution in the | V | 15.8 | L/70 kg | 8.14 | 0.06 (None% RSE) |
| Intercompartmental clearance (Q), L/h/70 kg | Q | 3.96 | L/h/70 kg | 14.2 | 0.003 (None% RSE) |
| Volume of distribution in the peripheral | V2 | 57.1 | L/70 kg | 34.3 |  |
| CL | CL | 4.33 | liters/h |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.571), gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-check: disputed 1/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No value for amikacin's clearance and volume of distribution.**

The model was built, but amikacin's clearance and volume of distribution had no value, so a library placeholder stood in and the model was held back rather than published with an invented number. A reported unit could not be converted (sigma), so that value has no SI equivalent. Extracted — amikacin: CL 5.57, V 15.8, Q 3.96, sigma 1.18 mg/mL, V2 4.26 liters.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of cl: this record has 4.33, the second reading none; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Clearance (CL), L/h/70 kg | `Q354` · CLnorm | 5.57 | L/h/70 kg | 1.547e-06 | m3/s | L/h | 8.6 | llm_corrected (0.6) | tab_1:row3:col1, tab_1:row3:col2, tab_1:row3:col4, tab_1:row3:col5, tab_1:row3:col6 |  |
| Volume of distribution in the | `Q61` · V | 15.8 | L/70 kg | 0.0158 | m3 | L | 8.14 | llm_confirmed (0.6) | tab_1:row4:col1, tab_1:row4:col2, tab_1:row4:col4, tab_1:row4:col5, tab_1:row4:col6 | 0.06 (None% RSE) |
| Intercompartmental clearance (Q), L/h/70 kg | `Q30` · Q | 3.96 | L/h/70 kg | 1.1e-06 | m3/s | L/h | 14.2 | llm_confirmed (0.6) | tab_1:row6:col1, tab_1:row6:col2, tab_1:row6:col4, tab_1:row6:col5, tab_1:row6:col6 | 0.003 (None% RSE) |
| Volume of distribution in the peripheral | `Q64` · V2 | 57.1 | L/70 kg | 0.0571 | m3 | L | 34.3 | boundary_compartment (0.9) | tab_1:row7:col1, tab_1:row7:col2, tab_1:row7:col4, tab_1:row7:col5, tab_1:row7:col6 |  |
| CL | `Q22` · CL | 4.33 | liters/h | 1.203e-06 | m3/s | L/h |  | review_gapfill (0.7) | Alhadab_2018:review |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'BSV (v)-Clearance (CL)' routed out of structural estimates ('Between subject variability (BSV)')
- table section iiv: 'BSV (v)-Volume of distribution in the' routed out of structural estimates ('Between subject variability (BSV)')
- table section residual_error: 'RUV (s)-Standard deviation (mg/mL)' routed out of structural estimates ('Residual unexplained variability (RUV)')
- table section residual_error: 'RUV (s)-Coefficient of variation (%)' routed out of structural estimates ('Residual unexplained variability (RUV)')
- column 'parameter' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- implicit units: 'Clearance (CL), L/h/70 kg' → L/h/70 kg (from the paper text: 'The abstract reports clearance as “5.98 L/h/70 kg”; the covariate-analysis text says parameter estimates were standardiz')
- implicit units: 'Volume of distribution in the' → L/70 kg (from the paper text: 'The abstract reports the central-compartment volume of distribution as “16.7 L/70 kg”; the covariate-analysis text says ')
- implicit units: 'Intercompartmental clearance (Q), L/h/70 kg' → L/h/70 kg (from the paper text: 'The abstract reports inter-compartmental clearance as “3.38 L/h/70 kg”; the covariate-analysis text says parameter estim')
- implicit units: 'Volume of distribution in the peripheral' → L/70 kg (from the paper text: 'The abstract reports the peripheral-compartment volume of distribution as “40.1 L/70 kg”; the covariate-analysis text sa')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=amikacin
- gap-filled Q22 (CL) from Alhadab_2018's review values (primary lacked it)

**Extraction notes:**
- unparsed cell tab_1:row11:col4 = 'À0.00442 to 0.121 d'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  1 of 2 readers agree  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.571 (8/14 fields) | 6 |
| `gpt-oss:120b` | confirmed | 1.0 (12/12 fields) | none |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[cl]` | 4.33 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[clearance (cl), l/h/70 kg].parameter_id` | Q354 | Q22 | mismatch |
| `qwen3.8-27b` | `parameters[clearance (cl), l/h/70 kg].value` | 5.57 | 5.98 | mismatch |
| `qwen3.8-27b` | `parameters[intercompartmental clearance (q), l/h/70 kg].value` | 3.96 | 3.38 | mismatch |
| `qwen3.8-27b` | `parameters[volume of distribution in the peripheral].value` | 57.1 | 40.1 | mismatch |
| `qwen3.8-27b` | `parameters[volume of distribution in the].value` | 15.8 | 16.7 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Alhadab_2018:review'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['tab_1:row6:col1', 'tab_1:row6:col2', 'tab_1:row6:col4', 'tab_1:row6:col5', 'tab_1:row6:col6'] |
| C5_dimension_Q354 | pass | [length] ** 3 / [time] |  | ['tab_1:row3:col1', 'tab_1:row3:col2', 'tab_1:row3:col4', 'tab_1:row3:col5', 'tab_1:row3:col6'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['tab_1:row4:col1', 'tab_1:row4:col2', 'tab_1:row4:col4', 'tab_1:row4:col5', 'tab_1:row4:col6'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['tab_1:row7:col1', 'tab_1:row7:col2', 'tab_1:row7:col4', 'tab_1:row7:col5', 'tab_1:row7:col6'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 4.33 | ['Alhadab_2018:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 4.33 L/h | ['Alhadab_2018:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 15.8 L | ['tab_1:row4:col1', 'tab_1:row4:col2', 'tab_1:row4:col4', 'tab_1:row4:col5', 'tab_1:row4:col6'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 57.1 L | ['tab_1:row7:col1', 'tab_1:row7:col2', 'tab_1:row7:col4', 'tab_1:row7:col5', 'tab_1:row7:col6'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_param_coverage |  | pass | 4 scholar param(s) emitted or defaulted | 4 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 33.2 |  | no simulated metric for this quantity (single reference sim) |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bamikacin%5D%20Amikacin_Sherwin2014_reference&body=Drug%3A%20amikacin%0ARecord%3A%20Amikacin_Sherwin2014_reference%0APaper%3A%20Sherwin_2014%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_amikacin/Amikacin_Sherwin2014_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 21:09 UTC</sub>
