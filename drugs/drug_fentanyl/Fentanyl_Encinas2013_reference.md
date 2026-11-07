<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N01A&quot;,&quot;href&quot;:&quot;atc/N01A.md&quot;},{&quot;label&quot;:&quot;fentanyl&quot;,&quot;href&quot;:&quot;drugs/drug_fentanyl/&quot;},{&quot;label&quot;:&quot;Encinas_2013 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fentanyl_Cavallaro2026_reference&quot;,&quot;label&quot;:&quot;Cavallaro_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fentanyl/Fentanyl_Cavallaro2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fentanyl_Davis1986_reference&quot;,&quot;label&quot;:&quot;Davis_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fentanyl/Fentanyl_Davis1986_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fentanyl_Koehntop1986_reference&quot;,&quot;label&quot;:&quot;Koehntop_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fentanyl/Fentanyl_Koehntop1986_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fentanyl — `Fentanyl_Encinas2013_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> CLint has no unit.

<div class="pk-model-meta" hidden drug="fentanyl" model-id="Fentanyl_Encinas2013_reference" status="needs_review" stale="false" population="neonates" measured-compound="fentanyl" parameterization="mechanistic" topology="2C"></div>

## Citation
Encinas E, Calvo R, Lukas JC, Vozmediano V, Rodriguez M, Suarez E. A predictive pharmacokinetic/pharmacodynamic model of fentanyl for analgesia/sedation in neonates based on a semi-physiologic approach. Paediatric drugs 15(3):247–257 (2013).
  ·  DOI: [10.1007/s40272-013-0029-1](https://doi.org/10.1007/s40272-013-0029-1)

## Population and dosing

**Population:** neonates · condition healthy · age group neonate.

**Dosing:** 0.105, 0.735 mg, iv, multiple, every 1 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 15 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| f u | fu | 0.31 |  |
| CL R (L/min) | CLR | 0.004 | L/min |
| CL int (L/min/g of liver) | CLint | 0.0006 | L/min/g of liver |
| CL H (L/min) | CLH | 0.024 | L/min |
| CL S (L/min) | CL | 0.028 | L/min |
| V 1 (L) | V1 | 1.26 | L |
| V 2 (L) | V2 | 2.63 | L |
| V 3 (L) | V3 | 18.15 | L |
| V ss (L) | Vss | 22.04 | L |
| Q 1-2 (L/min) | Q | 0.41 | L/min |
| Q 1-3 (L/min) | Q3 | 0.17 | L/min |
| k 13 (min -1 ) | k13 | 0.13 | min -1 |
| k 31 (min -1 ) | k31 | 0.009 | min -1 |
| clearance, volumes and absorption rate | kabs | 1.0 | h−1 |
| t1pp ranged from | tlag | 15.0 | min |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**CLint has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (CLint), so that value has no SI equivalent. Extracted — fentanyl: fu 0.31, CLR 0.004 L/min, CLint 0.0006 L/min/g of liver, CLH 0.024 L/min, CL 0.028 L/min, V1 1.26 L, V2 2.63 L, V3 18.1 L, … (+7).

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| f u | `Q46` · fu | 0.31 |  |  |  |  | space_fold (0.95) | tab_2:row2:col1 |
| CL R (L/min) | `Q26` · CLR | 0.004 | L/min | 6.667e-08 | m3/s | l/min | space_fold (0.95) | tab_2:row3:col1 |
| CL int (L/min/g of liver) | `Q3` · CLint | 0.0006 | L/min/g of liver |  |  | l/(min·g·ofliver) | space_fold (0.95) | tab_2:row4:col1 |
| CL H (L/min) | `Q25` · CLH | 0.024 | L/min | 4e-07 | m3/s | l/min | space_fold (0.95) | tab_2:row5:col1 |
| CL S (L/min) | `Q22` · CL | 0.028 | L/min | 4.667e-07 | m3/s | l/min | llm_confirmed (0.6) | tab_2:row6:col1 |
| V 1 (L) | `Q63` · V1 | 1.26 | L | 0.00126 | m3 | l | space_fold (0.95) | tab_2:row7:col1 |
| V 2 (L) | `Q64` · V2 | 2.63 | L | 0.00263 | m3 | l | space_fold (0.95) | tab_2:row8:col1 |
| V 3 (L) | `Q77` · V3 | 18.15 | L | 0.01815 | m3 | l | space_fold (0.95) | tab_2:row9:col1 |
| V ss (L) | `Q65` · Vss | 22.04 | L | 0.02204 | m3 | l | space_fold (0.95) | tab_2:row10:col1 |
| Q 1-2 (L/min) | `Q30` · Q | 0.41 | L/min | 6.833e-06 | m3/s | l/min | llm (0.6) | tab_2:row11:col1 |
| Q 1-3 (L/min) | `Q308` · Q3 | 0.17 | L/min | 2.833e-06 | m3/s | l/min | llm (0.6) | tab_2:row12:col1 |
| k 13 (min -1 ) | `Q303` · k13 | 0.13 | min -1 | 0.002167 | 1/s | 1/min | space_fold (0.95) | tab_2:row13:col1 |
| k 31 (min -1 ) | `Q304` · k31 | 0.009 | min -1 | 0.00015 | 1/s | 1/min | space_fold (0.95) | tab_2:row14:col1 |
| clearance, volumes and absorption rate | `Q49` · kabs | 1.0 | h−1 | 0.0002778 | 1/s | 1/h | review_gapfill (0.7) | Eleveld_2026:review |
| t1pp ranged from | `Q83` · tlag | 15.0 | min | 900 | s | h | review_gapfill (0.7) | Andersen_1986:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'AAG (g/L)' — extend the ontology if this is a real PK parameter (source ['tab_2:row1:col1'])
- unit_dimension_unknown: 'L/min/g of liver' (CLint)
- dropped PD-category row 'k e0 (min -1 )' → Q326 (ke0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_2:row15:col1'])
- dropped PD-category row 't _k e0 (min)' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_2:row16:col1'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=fentanyl
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- status held at "Needs review" — not promoted
- gap-filled Q49 (kabs) from Eleveld_2026's review values (primary lacked it)
- gap-filled Q83 (tlag) from Andersen_1986's review values (primary lacked it)

**Extraction notes:**
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (17/17 fields) | none |

_All readers agree on the compared fields of this record._

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 13 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['tab_2:row6:col1'] |
| C5_dimension_Q25 | pass | [length] ** 3 / [time] |  | ['tab_2:row5:col1'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['tab_2:row3:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['tab_2:row11:col1'] |
| C5_dimension_Q303 | pass | 1 / [time] |  | ['tab_2:row13:col1'] |
| C5_dimension_Q304 | pass | 1 / [time] |  | ['tab_2:row14:col1'] |
| C5_dimension_Q308 | pass | [length] ** 3 / [time] |  | ['tab_2:row12:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Eleveld_2026:review'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['tab_2:row7:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['tab_2:row8:col1'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['tab_2:row10:col1'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['tab_2:row9:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['Andersen_1986:review'] |
| C5_unit_missing_Q3 | fail | [length] ** 3 / [time] / [mass] | L/min/g of liver | ['tab_2:row4:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.028 | ['tab_2:row6:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.68 L/h | ['tab_2:row6:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 1.26 L | ['tab_2:row7:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.63 L | ['tab_2:row8:col1'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 22 L | ['tab_2:row10:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfentanyl%5D%20Fentanyl_Encinas2013_reference&body=Drug%3A%20fentanyl%0ARecord%3A%20Fentanyl_Encinas2013_reference%0APaper%3A%20Encinas_2013%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_fentanyl/Fentanyl_Encinas2013_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-03 18:28 UTC</sub>
