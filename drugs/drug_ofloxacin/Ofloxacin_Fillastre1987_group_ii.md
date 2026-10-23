<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;ofloxacin&quot;,&quot;href&quot;:&quot;drugs/drug_ofloxacin/&quot;},{&quot;label&quot;:&quot;Fillastre_1987 \u00b7 group_ii&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ofloxacin_AlShaer2019_reference&quot;,&quot;label&quot;:&quot;Al-Shaer_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ofloxacin/Ofloxacin_AlShaer2019_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ofloxacin_Zhuo1994_reference&quot;,&quot;label&quot;:&quot;Zhuo_1994_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ofloxacin/Ofloxacin_Zhuo1994_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ofloxacin — `Ofloxacin_Fillastre1987_group_ii`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> AUC, CL/F and CLR have no unit.

<div class="pk-model-meta" hidden drug="ofloxacin" model-id="Ofloxacin_Fillastre1987_group_ii" status="needs_review" stale="false" population="subjects with normal renal function and uremic patients" measured-compound="ofloxacin" parameterization="apparent" topology="1C"></div>

## Citation
Fillastre JP, Leroy A, Humbert G. Ofloxacin pharmacokinetics in renal failure. Antimicrobial agents and chemotherapy 31(2):156–160 (1987).
  ·  DOI: [10.1128/AAC.31.2.156](https://doi.org/10.1128/AAC.31.2.156)

## Population and dosing

**Population:** subjects with normal renal function and uremic patients · condition renal impairment · age group adult · n = &gt;=33.

**Dosing:** 200 mg, oral, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 9 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax (μg/ml) | Cmax | 1.84 | μg/ml |
| Tmax (h) | tmax | 2.36 | h |
| AUC (μg ⋅ h/ml)a | AUC | 47.48 |  |
| V/F (liters/kg) | V/F | 2.15 | liters/kg |
| ka (h-1) | kabs | 1.71 | h-1 |
| t1/2 (h) | t1/2z | 25.37 | h |
| CL/F ml/min per 1.73 m² | CL/F | 70.8 |  |
| CLR ml/min per 1.73 m² | CLR | 30.9 |  |
| Urine, 24 h (%) | Fab | 22.7 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.929). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**AUC, CL/F and CLR have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (Cmax), so that value has no SI equivalent. Extracted — ofloxacin: Cmax 1.84 μg/ml, tmax 2.36 h, AUC 47.5, V/F 2.15 liters/kg, kabs 1.71 h-1, t1/2z 25.4 h, CL/F 70.8, CLR 30.9, … (+1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[urine, 24 h].parameter_id`: this record has Q40, the second reading Q44. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax (μg/ml) | `Q32` · Cmax | 1.84 | μg/ml |  |  | µg/ml | exact (1) | Fillastre_1987_table_p2_1:row0:col3 |
| Tmax (h) | `Q56` · tmax | 2.36 | h | 8496 | s | h | exact (1) | Fillastre_1987_table_p2_1:row1:col3 |
| AUC (μg ⋅ h/ml)a | `Q88` · AUC | 47.48 |  |  |  |  | llm_confirmed (0.6) | Fillastre_1987_table_p2_1:row2:col3 |
| V/F (liters/kg) | `Q76` · V/F | 2.15 | liters/kg | 0.1505 | m3 | l/kg | exact (1) | Fillastre_1987_table_p2_1:row3:col3 |
| ka (h-1) | `Q49` · kabs | 1.71 | h-1 | 0.000475 | 1/s | 1/h | exact (1) | Fillastre_1987_table_p2_1:row4:col3 |
| t1/2 (h) | `Q57` · t1/2z | 25.37 | h | 9.133e+04 | s | h | exact (1) | Fillastre_1987_table_p2_1:row5:col3 |
| CL/F ml/min per 1.73 m² | `Q27` · CL/F | 70.8 |  |  |  |  | llm_confirmed (0.6) | Fillastre_1987_table_p2_1:row6:col3 |
| CLR ml/min per 1.73 m² | `Q26` · CLR | 30.9 |  |  |  |  | llm_confirmed (0.6) | Fillastre_1987_table_p2_1:row7:col3 |
| Urine, 24 h (%) | `Q40` · Fab | 22.7 |  |  |  |  | llm (0.6) | Fillastre_1987_table_p2_1:row8:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Normal subjects, GFR &gt;' — extend the ontology if this is a real PK parameter (source ['Fillastre_1987_table_2:row0:col2'])
- implicit units: 'CL/F ml/min per 1.73 m²' — the LLM proposed 'ml/min/1.73 m²', whose dimension does not fit Q27; left unset
- implicit units: 'CLR ml/min per 1.73 m²' — the LLM proposed 'ml/min/1.73 m²', whose dimension does not fit Q26; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=ofloxacin
- population split: 'group ii' subgroup of Fillastre_1987 (paper reports 5 populations: group i, group ii, group iii, group iv, normal)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- transposed table Fillastre_1987_table_p2_1: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- companion parameter table 2 transcribed (2 record(s))
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.929 (13/14 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[urine, 24 h].parameter_id` | Q40 | Q44 | mismatch |

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
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Fillastre_1987_table_p2_1:row0:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Fillastre_1987_table_p2_1:row4:col3'] |
| C5_dimension_Q56 | pass | [time] |  | ['Fillastre_1987_table_p2_1:row1:col3'] |
| C5_dimension_Q57 | pass | [time] |  | ['Fillastre_1987_table_p2_1:row5:col3'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Fillastre_1987_table_p2_1:row3:col3'] |
| C5_unit_missing_Q26 | fail | [length] ** 3 / [time] |  | ['Fillastre_1987_table_p2_1:row7:col3'] |
| C5_unit_missing_Q27 | fail | [length] ** 3 / [time] |  | ['Fillastre_1987_table_p2_1:row6:col3'] |
| C5_unit_missing_Q88 | fail | [mass] * [time] / [length] ** 3 |  | ['Fillastre_1987_table_p2_1:row2:col3'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q76 | pass | volume within physiological range | 150 L | ['Fillastre_1987_table_p2_1:row3:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bofloxacin%5D%20Ofloxacin_Fillastre1987_group_ii&body=Drug%3A%20ofloxacin%0ARecord%3A%20Ofloxacin_Fillastre1987_group_ii%0APaper%3A%20Fillastre_1987%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ofloxacin/Ofloxacin_Fillastre1987_group_ii%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 11:38 UTC</sub>
