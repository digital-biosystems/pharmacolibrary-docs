<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;sugammadex&quot;,&quot;href&quot;:&quot;drugs/drug_sugammadex/&quot;},{&quot;label&quot;:&quot;Ji_2023 \u00b7 sugammadex_2_mg_kg_intense_blockade&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sugammadex_Ji2023_sugammadex_2_mg_kg_moderate_blockade&quot;,&quot;label&quot;:&quot;Ji_2023_sugammadex_2_mg_kg_moderate_blockade&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sugammadex/Sugammadex_Ji2023_sugammadex_2_mg_kg_moderate_blockade.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sugammadex_Ji2023v2_reference&quot;,&quot;label&quot;:&quot;Ji_2023_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sugammadex/Sugammadex_Ji2023v2_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sugammadex — `Sugammadex_Ji2023_sugammadex_2_mg_kg_intense_blockade`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> AUClast and AUC∞ have no unit.

<div class="pk-model-meta" hidden drug="sugammadex" model-id="Sugammadex_Ji2023_sugammadex_2_mg_kg_intense_blockade" status="needs_review" stale="false" population="Korean children" measured-compound="sugammadex" parameterization="mechanistic" topology="1C"></div>

## Citation
Ji SH, Huh KY, Oh J, Jeong HJ, Jang YE, Kim EH et al. Reversal of rocuronium-induced intense neuromuscular blockade by sugammadex in Korean children: A pharmacokinetic and pharmacodynamic analysis. Clinical and translational science 16(1):92–103 (2023).
  ·  DOI: [10.1111/cts.13429](https://doi.org/10.1111/cts.13429)

## Population and dosing

**Population:** Korean children · condition surgery requiring early neuromuscular blockade reversal · age group child · n = 40.

**Dosing:** 140, 280, 560 mg, iv, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax (µg/mL) | Cmax | 28.4 | µg/mL |
| AUClast (h-µg/mL) | AUClast | 13.6 | n = 10 |
| AUCinf (h-µg/mL) | AUC∞ | 14.2 | n = 10 |
| Tmax (h) | tmax | 0.03 | h |
| t1/2 (h) | t1/2z | 1.5 | h |
| Vz (L) | V | 9.9 | L |
| CL (L/min) | CL | 0.07 | L/min |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**AUClast and AUC∞ have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (AUClast and AUC∞), so that value has no SI equivalent. Extracted — sugammadex: Cmax 28.4 µg/mL, AUClast 13.6 n = 10, AUC∞ 14.2 n = 10, tmax 0.03 h, t1/2z 1.5 h, V 9.9 L, CL 0.07 L/min.

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax (µg/mL) | `Q32` · Cmax | 28.4 | µg/mL | 0.0284 | kg/m3 | µg/ml | exact (1) | Ji_2023_table_2:row2:col4, Ji_2023_table_2:row10:col4 |
| AUClast (h-µg/mL) | `Q74` · AUClast | 13.6 | n = 10 |  |  | n=10 | exact (1) | Ji_2023_table_2:row3:col4, Ji_2023_table_2:row11:col4 |
| AUCinf (h-µg/mL) | `Q17` · AUC∞ | 14.2 | n = 10 |  |  | n=10 | exact (1) | Ji_2023_table_2:row4:col4, Ji_2023_table_2:row12:col4 |
| Tmax (h) | `Q56` · tmax | 0.03 | h | 108 | s | h | exact (1) | Ji_2023_table_2:row5:col4, Ji_2023_table_2:row13:col4 |
| t1/2 (h) | `Q57` · t1/2z | 1.5 | h | 5400 | s | h | half_life_rule (0.95) | Ji_2023_table_2:row6:col4, Ji_2023_table_2:row14:col4 |
| Vz (L) | `Q61` · V | 9.9 | L | 0.0099 | m3 | l | exact (1) | Ji_2023_table_2:row7:col4, Ji_2023_table_2:row15:col4 |
| CL (L/min) | `Q22` · CL | 0.07 | L/min | 1.167e-06 | m3/s | l/min | exact (1) | Ji_2023_table_2:row8:col4, Ji_2023_table_2:row16:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'n = 10' (AUClast)
- unit_dimension_unknown: 'n = 10' (AUC∞)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=sugammadex
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: 'sugammadex 2 mg/kg / intense blockadeᵃ
(n = 10)' subgroup of Ji_2023 (paper reports 11 populations: age group 12 to &lt;17 (yrs), age group 2 to &lt;6 (yrs), age group 6 to &lt;12 (yrs), placebo / intense blockadeᵃ
(n = 10), placebo / moderate blockadeᵇ
(n = 8), sugammadex 2 mg/kg / intense blockadeᵃ
(n = 10), sugammadex 2 mg/kg / moderate blockadeᵇ
(n = 8), sugammadex 4 mg/kg / intense blockadeᵃ
(n = 10), sugammadex 4 mg/kg / moderate blockadeᵇ
(n = 6), sugammadex 8 mg/kg / intense blockadeᵃ
(n = 10), sugammadex 8 mg/kg / moderate blockadeᵇ
(n = 7))

**Extraction notes:**
- companion parameter table 2 transcribed (147 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (11/11 fields) | none |

_All readers agree on the compared fields of this record._

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Ji_2023_table_2:row8:col4', 'Ji_2023_table_2:row16:col4'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Ji_2023_table_2:row2:col4', 'Ji_2023_table_2:row10:col4'] |
| C5_dimension_Q56 | pass | [time] |  | ['Ji_2023_table_2:row5:col4', 'Ji_2023_table_2:row13:col4'] |
| C5_dimension_Q57 | pass | [time] |  | ['Ji_2023_table_2:row6:col4', 'Ji_2023_table_2:row14:col4'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Ji_2023_table_2:row7:col4', 'Ji_2023_table_2:row15:col4'] |
| C5_unit_missing_Q17 | fail | [mass] * [time] / [length] ** 3 | n = 10 | ['Ji_2023_table_2:row4:col4', 'Ji_2023_table_2:row12:col4'] |
| C5_unit_missing_Q74 | fail | [mass] * [time] / [length] ** 3 | n = 10 | ['Ji_2023_table_2:row3:col4', 'Ji_2023_table_2:row11:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.07 | ['Ji_2023_table_2:row8:col4', 'Ji_2023_table_2:row16:col4'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 4.2 L/h | ['Ji_2023_table_2:row8:col4', 'Ji_2023_table_2:row16:col4'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 9.9 L | ['Ji_2023_table_2:row7:col4', 'Ji_2023_table_2:row15:col4'] |

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

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsugammadex%5D%20Sugammadex_Ji2023_sugammadex_2_mg_kg_intense_blockade&body=Drug%3A%20sugammadex%0ARecord%3A%20Sugammadex_Ji2023_sugammadex_2_mg_kg_intense_blockade%0APaper%3A%20Ji_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_sugammadex/Sugammadex_Ji2023_sugammadex_2_mg_kg_intense_blockade%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 15:05 UTC</sub>
