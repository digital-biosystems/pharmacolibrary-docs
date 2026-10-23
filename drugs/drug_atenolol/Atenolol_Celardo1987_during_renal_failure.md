<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;atenolol&quot;,&quot;href&quot;:&quot;drugs/drug_atenolol/&quot;},{&quot;label&quot;:&quot;Celardo_1987 \u00b7 during_renal_failure&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# atenolol — `Atenolol_Celardo1987_during_renal_failure`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rabbit</span>

> The reviewer's verdict (Rejected, 2026-09-29 04:00 UTC) predates the latest extraction (2026-10-06 23:08 UTC); the status shown comes from the current checks. Atenolol clearance and volume values are implausibly low, indicating a unit or scale extraction error.

<div class="pk-model-meta" hidden drug="atenolol" model-id="Atenolol_Celardo1987_during_renal_failure" status="rejected" stale="true" population="rabbits on continuous peritoneal dialysis" measured-compound="atenolol" parameterization="mechanistic" topology="1C"></div>

## Citation
Celardo A, Traina GL, Arboix M, Puigdemont A, Bonati M. Pharmacokinetic and pharmacodynamic modelling of atenolol in rabbits maintained on continuous peritoneal dialysis. European journal of drug metabolism and pharmacokinetics 12(1):41–48 (1987).
  ·  DOI: [10.1007/BF03189860](https://doi.org/10.1007/BF03189860)

## Population and dosing

**Population:** rabbits on continuous peritoneal dialysis · age group adult · n = &gt;=5.

**Dosing:** 210 mg, iv, single.

> **Species: rabbit.** This record comes from an animal study (rabbit), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 16 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| λ1 | λ1 | 3.98 |  |
| λ2 | λ2 | 0.039 |  |
| T1/2λ1 | t1/2α | 0.21 | h |
| T1/2λ2 | t1/2β | 18.07 | h |
| V1 | V | 0.36 | L |
| Vss b | Vss | 2.03 | L |
| CL c | CL | 0.086 | L/h |
| AUC d | AUC | 39.41 | mg·h/L |
| k12 | k12 | 3.18 | 1/h |
| k21 | k21 | 0.58 | 1/h |
| k10 | kel | 0.28 | 1/h |
| CL b | CLb | 0.095 | L/h |
| CL d | Q | 0.0058 | L/h |
| MDRT | MRT | 23.85 | h |
| T1/2λd | t1/2z | 18.85 | h |
| ka (h -1 ) | kabs | 0.704 | h -1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rabbit</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Atenolol clearance and volume values are implausibly low, indicating a unit or scale extraction error.**

The total clearance of 0.086 L/h and central volume of 0.36 L fall outside physiological windows for this drug. A reported unit could not be converted to standard units, so the parameter lacked a valid value for review. The second reader disagreed on several extracted values, including blood clearance and mean residence time. Extracted — atenolol: λ1 3.98, λ2 0.039, t1/2α 0.21 h, t1/2β 18.1 h, V 0.36 L, Vss 2.03 L, CL 0.086 L/h, AUC 39.4 mg·h/L, … (+7).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of auc d: this record has 39.41, the second reading none; it also differs on 15 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| λ1 | `Q67` · λ1 | 3.98 |  |  |  |  | exact (1) | Celardo_1987_table_2:row0:col3 |
| λ2 | `Q68` · λ2 | 0.039 |  |  |  |  | exact (1) | Celardo_1987_table_2:row1:col3, Celardo_1987_table_3:row6:col3 |
| T1/2λ1 | `Q59` · t1/2α | 0.21 | h | 756 | s | h | llm_corrected (0.6) | Celardo_1987_table_2:row2:col3 |
| T1/2λ2 | `Q60` · t1/2β | 18.07 | h | 6.505e+04 | s | h | llm_corrected (0.6) | Celardo_1987_table_2:row3:col3, Celardo_1987_table_3:row9:col3 |
| V1 | `Q61` · V | 0.36 | L | 0.00036 | m3 | L | exact (1) | Celardo_1987_table_2:row4:col3 |
| Vss b | `Q65` · Vss | 2.03 | L | 0.00203 | m3 | L | llm_confirmed (0.6) | Celardo_1987_table_2:row5:col3 |
| CL c | `Q22` · CL | 0.086 | L/h | 2.389e-08 | m3/s | L/h | central_subscript (0.9) | Celardo_1987_table_2:row6:col3 |
| AUC d | `Q88` · AUC | 39.41 | mg·h/L |  |  | mg·h/L | llm_confirmed (0.6) | Celardo_1987_table_2:row7:col3 |
| k12 | `Q301` · k12 | 3.18 | 1/h | 0.0008833 | 1/s | 1/h | exact (1) | Celardo_1987_table_2:row8:col3 |
| k21 | `Q302` · k21 | 0.58 | 1/h | 0.0001611 | 1/s | 1/h | exact (1) | Celardo_1987_table_2:row9:col3 |
| k10 | `Q47` · kel | 0.28 | 1/h | 7.778e-05 | 1/s | 1/h | exact (1) | Celardo_1987_table_2:row10:col3 |
| CL b | `Q23` · CLb | 0.095 | L/h | 2.639e-08 | m3/s | L/h | space_fold (0.95) | Celardo_1987_table_3:row1:col3 |
| CL d | `Q30` · Q | 0.0058 | L/h | 1.611e-09 | m3/s | L/h | space_fold (0.95) | Celardo_1987_table_3:row2:col3 |
| MDRT | `Q53` · MRT | 23.85 | h | 8.586e+04 | s | h | llm (0.6) | Celardo_1987_table_3:row4:col3 |
| T1/2λd | `Q57` · t1/2z | 18.85 | h | 6.786e+04 | s | h | llm_confirmed (0.6) | Celardo_1987_table_3:row10:col3 |
| ka (h -1 ) | `Q49` · kabs | 0.704 | h -1 | 0.0001956 | 1/s | 1/h | review_gapfill (0.7) | Jia_2011:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q88 ('AUC', value '34.04') — already have one for this compound
- dropped duplicate Q65 ('Vss', value '2.27') — already have one for this compound
- dropped duplicate Q68 ('λd', value '0.037') — already have one for this compound
- implicit units: 'λ1' — the LLM proposed '1/h', whose dimension does not fit Q67; left unset
- implicit units: 'λ2' — the LLM proposed '1/h', whose dimension does not fit Q68; left unset
- implicit units: 'T1/2λ1' → h (from the popPK convention: 'T1/2λ1 is a half-life. By convention, half-lives are expressed in time units (h). The value 0.21 h is consistent with th')
- implicit units: 'T1/2λ2' → h (from the popPK convention: 'T1/2λ2 is a half-life. By convention, half-lives are expressed in time units (h). The value 18.07 h is consistent with t')
- implicit units: 'V1' → L (from the popPK convention: 'V1 is the volume of distribution of the central compartment. By convention, volumes are expressed in liters (L). The val')
- implicit units: 'Vss b' → L (from the popPK convention: 'Vss is the volume of distribution at steady state. By convention, volumes are expressed in liters (L). The value 2.03 L ')
- implicit units: 'CL c' → L/h (from the popPK convention: 'CL is total clearance. By convention, clearances are expressed in volume per time (L/h). The value 0.086 L/h is consiste')
- implicit units: 'AUC d' → mg·h/L (from the popPK convention: 'AUC is the area under the concentration-time curve. By convention, AUC is expressed as concentration × time (mg·h/L). Th')
- implicit units: 'k12' → 1/h (from the popPK convention: 'k12 is a first-order transfer rate constant. By convention, first-order rate constants are expressed in reciprocal time ')
- implicit units: 'k21' → 1/h (from the popPK convention: 'k21 is a first-order transfer rate constant. By convention, first-order rate constants are expressed in reciprocal time ')
- implicit units: 'k10' → 1/h (from the popPK convention: 'k10 is the elimination rate constant. By convention, first-order rate constants are expressed in reciprocal time units (')
- implicit units: 'CL b' → L/h (from the popPK convention: 'CLb is blood clearance. By convention, clearances are expressed in volume per time (L/h). The value 0.095 L/h is consist')
- implicit units: 'CL d' → L/h (from the popPK convention: 'CLd (or Q) is the intercompartmental clearance. By convention, intercompartmental clearances are expressed in volume per')
- implicit units: 'MDRT' → h (from the popPK convention: 'MDRT is the mean residence time. By convention, mean residence times are expressed in time units (h). The value 23.85 h ')
- implicit units: 'T1/2λd' → h (from the popPK convention: 'T1/2λd is the half-life of the terminal elimination phase. By convention, half-lives are expressed in time units (h). Th')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=atenolol
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'V1' is the general volume)
- population split: 'during renal failure' subgroup of Celardo_1987 (paper reports 2 populations: before renal failure, during renal failure)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Jia_2011's review values (primary lacked it)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2, 3
- unparsed cell Celardo_1987_table_2:row0:col1 = 'h-1'
- unparsed cell Celardo_1987_table_2:row1:col1 = 'h-1'
- unparsed cell Celardo_1987_table_2:row8:col1 = 'h-1'
- unparsed cell Celardo_1987_table_2:row9:col1 = 'h-1'
- unparsed cell Celardo_1987_table_2:row10:col1 = 'h-1'
- unparsed cell Celardo_1987_table_3:row6:col1 = 'h-1'
- unparsed cell Celardo_1987_table_3:row7:col1 = 'h-1'
- unparsed cell Celardo_1987_table_3:row8:col1 = 'h-1'
- LLM region Celardo_1987:other_prose: no JSON records returned

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.2 (4/20 fields) | 16 |

<details><summary>16 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[auc d]` | 39.41 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl b].value` | 0.095 | 0.54 | mismatch |
| `gpt-oss-120b` | `parameters[cl c].value` | 0.086 | 0.58 | mismatch |
| `gpt-oss-120b` | `parameters[cl d].value` | 0.0058 | 0.0028 | mismatch |
| `gpt-oss-120b` | `parameters[k10]` | 0.28 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k12]` | 3.18 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k21]` | 0.58 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 0.704 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mdrt]` | 23.85 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2λ1]` | 0.21 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2λ2]` | 18.07 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2λd]` | 18.85 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1]` | 0.36 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vss b]` | 2.03 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[λ1]` | 3.98 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[λ2]` | 0.039 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 15 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Celardo_1987_table_2:row6:col3'] |
| C5_dimension_Q23 | pass | [length] ** 3 / [time] |  | ['Celardo_1987_table_3:row1:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Celardo_1987_table_3:row2:col3'] |
| C5_dimension_Q301 | pass | 1 / [time] |  | ['Celardo_1987_table_2:row8:col3'] |
| C5_dimension_Q302 | pass | 1 / [time] |  | ['Celardo_1987_table_2:row9:col3'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Celardo_1987_table_2:row10:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Jia_2011:review'] |
| C5_dimension_Q53 | pass | [time] |  | ['Celardo_1987_table_3:row4:col3'] |
| C5_dimension_Q57 | pass | [time] |  | ['Celardo_1987_table_3:row10:col3'] |
| C5_dimension_Q59 | pass | [time] |  | ['Celardo_1987_table_2:row2:col3'] |
| C5_dimension_Q60 | pass | [time] |  | ['Celardo_1987_table_2:row3:col3', 'Celardo_1987_table_3:row9:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Celardo_1987_table_2:row4:col3'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Celardo_1987_table_2:row5:col3'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['Celardo_1987_table_2:row7:col3'] |
| C5_unit_missing_Q67 | fail | [mass] / [time] |  | ['Celardo_1987_table_2:row0:col3'] |
| C5_unit_missing_Q68 | fail | [mass] / [time] |  | ['Celardo_1987_table_2:row1:col3', 'Celardo_1987_table_3:row6:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.086 | ['Celardo_1987_table_2:row6:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.086 L/h | ['Celardo_1987_table_2:row6:col3'] |
| C9_phys_window_Q23 | pass | clearance within physiological range | 0.095 L/h | ['Celardo_1987_table_3:row1:col3'] |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.36 L | ['Celardo_1987_table_2:row4:col3'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 2.03 L | ['Celardo_1987_table_2:row5:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Batenolol%5D%20Atenolol_Celardo1987_during_renal_failure&body=Drug%3A%20atenolol%0ARecord%3A%20Atenolol_Celardo1987_during_renal_failure%0APaper%3A%20Celardo_1987%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_atenolol/Atenolol_Celardo1987_during_renal_failure%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 23:08 UTC</sub>
