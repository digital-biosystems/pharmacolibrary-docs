<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;talazoparib&quot;,&quot;href&quot;:&quot;drugs/drug_talazoparib/&quot;},{&quot;label&quot;:&quot;Guo_2022 \u00b7 estimate&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# talazoparib — `Talazoparib_Guo2022_estimate`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The model was quarantined because talazoparib's volume of distribution had no extracted value, so a placeholder was used instead.

<div class="pk-model-meta" hidden drug="talazoparib" model-id="Talazoparib_Guo2022_estimate" status="model_quarantined" stale="false" population="patients with advanced solid tumours and varying degrees of hepatic impairment" measured-compound="talazoparib" parameterization="apparent" topology="1C"></div>

## Citation
Guo C, Yu Y, Chakrabarti J, Piha-Paul SA, Moroose R, Plotka A et al. Evaluation of pharmacokinetics and safety of talazoparib in patients with advanced cancer and varying degrees of hepatic impairment. British journal of clinical pharmacology 88(7):3392–3403 (2022).
  ·  DOI: [10.1111/bcp.15294](https://doi.org/10.1111/bcp.15294)

## Population and dosing

**Population:** patients with advanced solid tumours and varying degrees of hepatic impairment · condition advanced solid tumours and hepatic impairment · age group adult · n = /&gt;. 37.

**Dosing:** 0.5 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, Q/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| θCL/F (L/h) | CL/F | 4.853 | L/h |
| θV2 /F (L) | V2/F | 200.632 | L |
| θka (h−1 ) | kabs | 6.548 | h−1 |
| θQ/F (L/h) | Q/F | 40.881 | L/h |
| θV3 /F (L) | V3/F | 315.833 | L |
| θTLAG (h) | tlag | 0.421 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.909). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model was quarantined because talazoparib's volume of distribution had no extracted value, so a placeholder was used instead.**

The record lacks a value for V2/F (200.632 L), which is the volume of distribution for the peripheral compartment. This parameter was identified as missing during the review process, resulting in a default placeholder being substituted. The model was held back to prevent publication with an unverified volume value. Extracted — talazoparib: CL/F 4.85 L/h, V2/F 201 L, kabs 6.55 h−1, Q/F 40.9 L/h, V3/F 316 L, tlag 0.421 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of f: this record has none, the second reading none. That field does not shape the model.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| θCL/F (L/h) | `Q27` · CL/F | 4.853 | L/h | 1.348e-06 | m3/s | l/h | llm_confirmed (0.6) | Guo_2022_table_S6:row0:col1 |
| θV2 /F (L) | `Q82` · V2/F | 200.632 | L | 0.2006 | m3 | l | llm_corrected (0.6) | Guo_2022_table_S6:row1:col1 |
| θka (h−1 ) | `Q49` · kabs | 6.548 | h−1 | 0.001819 | 1/s | 1/h | boundary_llm_dim_refused (0.8) | Guo_2022_table_S6:row2:col1 |
| θQ/F (L/h) | `Q69` · Q/F | 40.881 | L/h | 1.136e-05 | m3/s | l/h | llm_confirmed (0.6) | Guo_2022_table_S6:row3:col1 |
| θV3 /F (L) | `Q78` · V3/F | 315.833 | L | 0.3158 | m3 | l | llm_corrected (0.6) | Guo_2022_table_S6:row4:col1 |
| θTLAG (h) | `Q83` · tlag | 0.421 | h | 1516 | s | h | llm_confirmed (0.6) | Guo_2022_table_S6:row5:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q27 ('θBCCL on CL/F', value '1.074') — already have one for this compound
- dropped duplicate Q27 ('θLIVER-B on CL/F', value '-0.272') — already have one for this compound
- dropped unlinked row (NIL): 'θLIVER-C on CL/F' — extend the ontology if this is a real PK parameter (source ['Guo_2022_table_S6:row8:col1'])
- dropped duplicate Q27 ('θLIVER-D on CL/F', value '-0.286') — already have one for this compound
- routed 'θσ' → Q315 (sigma) to residual_error — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'OFV' — extend the ontology if this is a real PK parameter (source ['Guo_2022_table_S6:row14:col1'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=talazoparib
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- population split: 'estimate' subgroup of Guo_2022 (paper reports 6 populations: all patients, estimate, mild hepatic, moderate hepatic, normal hepatic, severe hepatic)

**Extraction notes:**
- companion parameter table S6 transcribed (56 record(s))
- LLM selected parameter table(s) S6

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.909 (10/11 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[f]` |  |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Guo_2022_table_S6:row0:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Guo_2022_table_S6:row2:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Guo_2022_table_S6:row3:col1'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['Guo_2022_table_S6:row4:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Guo_2022_table_S6:row1:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['Guo_2022_table_S6:row5:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 4.85 L/h | ['Guo_2022_table_S6:row0:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 201 L | ['Guo_2022_table_S6:row1:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_param_coverage |  | fail | 5 scholar param(s) emitted or defaulted | 4 covered | neither emitted nor in defaulted[]: ['V2/F'] |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 10.3 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 11.3 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 13.56 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 17.15 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 2.778 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 3.204 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 3.675 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 4.518 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 2.624 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 3.699 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 3.553 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmin_ss | reference | skipped | 6.225 |  | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | 1.05 |  | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | 1.5 |  | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | 2.13 |  | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | 1.05 |  | no simulated metric for this quantity (single reference sim) |
| T1_tmax | reference | skipped | 4 |  | no simulated metric for this quantity (single reference sim) |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btalazoparib%5D%20Talazoparib_Guo2022_estimate&body=Drug%3A%20talazoparib%0ARecord%3A%20Talazoparib_Guo2022_estimate%0APaper%3A%20Guo_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_talazoparib/Talazoparib_Guo2022_estimate%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 21:44 UTC</sub>
