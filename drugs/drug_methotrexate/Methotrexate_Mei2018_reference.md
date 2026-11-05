<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;methotrexate&quot;,&quot;href&quot;:&quot;drugs/drug_methotrexate/&quot;},{&quot;label&quot;:&quot;Mei_2018 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Methotrexate_Pan2026_reference&quot;,&quot;label&quot;:&quot;Pan_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methotrexate/Methotrexate_Pan2026_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methotrexate_Tan2024_reference&quot;,&quot;label&quot;:&quot;Tan_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methotrexate/Methotrexate_Tan2024_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methotrexate_Yu2025_reference&quot;,&quot;label&quot;:&quot;Yu_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methotrexate/Methotrexate_Yu2025_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methotrexate_van2024_reference&quot;,&quot;label&quot;:&quot;van_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methotrexate/Methotrexate_van2024_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methotrexate_Pignon1994_reference&quot;,&quot;label&quot;:&quot;Pignon_1994_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methotrexate/Methotrexate_Pignon1994_reference.md&quot;,&quot;status&quot;:&quot;Needs review \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methotrexate_Wei2025_reference&quot;,&quot;label&quot;:&quot;Wei_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methotrexate/Methotrexate_Wei2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# methotrexate — `Methotrexate_Mei2018_reference`

> ## <span class="pk-badge pk-badge--neutral">Not simulated</span>

> Extracted and checked against closed-form rules; no simulation has been compared with the paper yet.

<div class="pk-model-meta" hidden drug="methotrexate" model-id="Methotrexate_Mei2018_reference" status="extracted" stale="false" population="patients with primary central nervous system lymphoma" measured-compound="methotrexate" parameterization="mechanistic" topology="2C"></div>

## Citation
Mei S, Li X, Jiang X, Yu K, Lin S, Zhao Z. Population Pharmacokinetics of High-Dose Methotrexate in Patients With Primary Central Nervous System Lymphoma. Journal of pharmaceutical sciences 107(5):1454–1460 (2018).
  ·  DOI: [10.1016/j.xphs.2018.01.004](https://doi.org/10.1016/j.xphs.2018.01.004)

## Population and dosing

**Population:** patients with primary central nervous system lymphoma · condition primary central nervous system lymphoma · age group adult.

**Dosing:** 0.9, 5.44 g/m2, iv, single.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted, plus 1 covariate effect.  
**Availability:** No model was generated from this record.

## Parameters
| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| Vc (L) | V1 | 24.46 | L | 18.03 | 42.72 (None% RSE) |
| CLc (L/h) | CL | 6.67 | L/h | 13.57 | 39.99 (None% RSE) |
| Vp (L) | V2 | 1.32 | L | 25.49 | 63.04 (None% RSE) |
| Q | Q | 0.047 | L/h | 24.33 | 25.11 (None% RSE) |
| BSA on CL (L/h) | allometric_exponent | 1.17 | L/h | 15.25 |  |
| theta_v1_age | theta_v1_age | 0.81 |  | 28.61 |  |
| ka (/day) | kabs | 0.268 | /day |  |  |
| t lag,oral | tlag | 0.36 | hour |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.312). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of bsa on cl: this record has 1.17, the second reading none; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Vc (L) | `Q63` · V1 | 24.46 | L | 0.02446 | m3 | l | 18.03 | exact (1) | Mei_2018_table_p27_1:row0:col1, Mei_2018_table_p27_1:row0:col4 | 42.72 (None% RSE) |
| CLc (L/h) | `Q22` · CL | 6.67 | L/h | 1.853e-06 | m3/s | l/h | 13.57 | central_subscript (0.9) | Mei_2018_table_p27_1:row1:col1, Mei_2018_table_p27_1:row1:col4 | 39.99 (None% RSE) |
| Vp (L) | `Q64` · V2 | 1.32 | L | 0.00132 | m3 | l | 25.49 | exact (1) | Mei_2018_table_p27_1:row2:col1, Mei_2018_table_p27_1:row2:col4 | 63.04 (None% RSE) |
| Q | `Q30` · Q | 0.047 | L/h | 1.306e-08 | m3/s | L/h | 24.33 | exact (1) | Mei_2018_table_p27_1:row3:col1, Mei_2018_table_p27_1:row3:col4 | 25.11 (None% RSE) |
| BSA on CL (L/h) | `Q319` · allometric_exponent | 1.17 | L/h |  |  | l/h | 15.25 | llm_corrected (0.6) | Mei_2018_table_p27_1:row5:col1, Mei_2018_table_p27_1:row5:col4 |  |
| theta_v1_age | `Q900` · theta_v1_age | 0.81 |  |  |  |  | 28.61 |  | Mei_2018_table_p27_1:row4:col1, Mei_2018_table_p27_1:row4:col4 |  |
| ka (/day) | `Q49` · kabs | 0.268 | /day | 3.102e-06 | 1/s | 1/h |  | review_gapfill (0.7) | Pan_2026:review |  |
| t lag,oral | `Q83` · tlag | 0.36 | hour | 1296 | s | h |  | review_gapfill (0.7) | Tan_2024:review |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Vc (L)' routed out of structural estimates ('IIV (CV %)')
- table section iiv: 'CLc (L/h)' routed out of structural estimates ('IIV (CV %)')
- table section iiv: 'Vp (L)' routed out of structural estimates ('IIV (CV %)')
- table section iiv: 'Q' routed out of structural estimates ('IIV (CV %)')
- dropped duplicate Q22 ('SCR on CL (L/h)', value '-0.48') — already have one for this compound
- implicit units: 'Q' → L/h (from the paper text: "The text states: '24.46 (L), 0.047 (L/h), and 1.32 (L) are the typical value of CL c (L/h), V c (L), Q (L/h), and V p (L")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=methotrexate
- gap-filled Q49 (kabs) from Pan_2026's review values (primary lacked it)
- gap-filled Q83 (tlag) from Tan_2024's review values (primary lacked it)

**Extraction notes:**
- table Mei_2018_table_p27_1: ambiguous_uncertainty_binding

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.312 (5/16 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[bsa on cl]` | 1.17 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clc].rse_percent` | 13.57 | 16.69 | mismatch |
| `gpt-oss-120b` | `parameters[clc].value` | 6.67 | 6.75 | mismatch |
| `gpt-oss-120b` | `parameters[q].rse_percent` | 24.33 | 26.99 | mismatch |
| `gpt-oss-120b` | `parameters[q].value` | 0.047 | 0.048 | mismatch |
| `gpt-oss-120b` | `parameters[theta_v1_age].rse_percent` | 28.61 | 37.99 | mismatch |
| `gpt-oss-120b` | `parameters[theta_v1_age].value` | 0.81 | 0.80 | mismatch |
| `gpt-oss-120b` | `parameters[vc].rse_percent` | 18.03 | 23.65 | mismatch |
| `gpt-oss-120b` | `parameters[vc].value` | 24.46 | 24.75 | mismatch |
| `gpt-oss-120b` | `parameters[vp].rse_percent` | 25.49 | 30.97 | mismatch |
| `gpt-oss-120b` | `parameters[vp].value` | 1.32 | 1.35 | mismatch |

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
| C2_reference | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Mei_2018_table_p27_1:row1:col1', 'Mei_2018_table_p27_1:row1:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Mei_2018_table_p27_1:row3:col1', 'Mei_2018_table_p27_1:row3:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Pan_2026:review'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Mei_2018_table_p27_1:row0:col1', 'Mei_2018_table_p27_1:row0:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Mei_2018_table_p27_1:row2:col1', 'Mei_2018_table_p27_1:row2:col4'] |
| C5_dimension_Q83 | pass | [time] |  | ['Tan_2024:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 6.67 | ['Mei_2018_table_p27_1:row1:col1', 'Mei_2018_table_p27_1:row1:col4'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 6.67 L/h | ['Mei_2018_table_p27_1:row1:col1', 'Mei_2018_table_p27_1:row1:col4'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 24.5 L | ['Mei_2018_table_p27_1:row0:col1', 'Mei_2018_table_p27_1:row0:col4'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 1.32 L | ['Mei_2018_table_p27_1:row2:col1', 'Mei_2018_table_p27_1:row2:col4'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmethotrexate%5D%20Methotrexate_Mei2018_reference&body=Drug%3A%20methotrexate%0ARecord%3A%20Methotrexate_Mei2018_reference%0APaper%3A%20Mei_2018%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_methotrexate/Methotrexate_Mei2018_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-04 02:27 UTC</sub>
