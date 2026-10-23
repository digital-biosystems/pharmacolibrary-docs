<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;empagliflozin&quot;,&quot;href&quot;:&quot;drugs/drug_empagliflozin/&quot;},{&quot;label&quot;:&quot;Rascher_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;pd_Rascher_2025_HbA1c&quot;,&quot;label&quot;:&quot;Rascher_2025 \u00b7 HbA1c&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_empagliflozin/pd_Rascher_2025_HbA1c.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# empagliflozin — `Empagliflozin_Rascher2025_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Empagliflozin's apparent volume of distribution and absorption lag time were missing, forcing the use of library placeholders.

<div class="pk-model-meta" hidden drug="empagliflozin" model-id="Empagliflozin_Rascher2025_reference" status="model_quarantined" stale="false" population="paediatric patients aged 10–17 years with type 2 diabetes mellitus" measured-compound="empagliflozin" parameterization="apparent" topology="1C"></div>

## Citation
Rascher J, Cheng S, Johnston C, Härtter S, Jan-Georg W, Marquard J et al. Pharmacokinetics and pharmacodynamics of empagliflozin in paediatric patients aged 10-17 years with type 2 diabetes mellitus. British journal of clinical pharmacology 91(8):2390–2400 (2025).
  ·  DOI: [10.1002/bcp.70096](https://doi.org/10.1002/bcp.70096)

## Population and dosing

**Population:** paediatric patients aged 10–17 years with type 2 diabetes mellitus · condition type 2 diabetes mellitus · age group adolescent · n = ,.

**Dosing:** 10, 25 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, Q/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CL/F (L/h) | CL/F | 6.74 | L/h | 33.3 (None% RSE) |
| V₂/F (L) | V2/F | 4.12 | L |  |
| KA (1/h) | kabs | 0.239 | 1/h |  |
| Q/F (L/h) | Q/F | 5.51 | L/h |  |
| V₃/F (L) | V3/F | 71.7 | L |  |
| D1 (h) | D1 | 0.326 | h |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.7). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Empagliflozin's apparent volume of distribution and absorption lag time were missing, forcing the use of library placeholders.**

The record lists a peripheral volume of 4.12 L and a zero-order input duration, but no explicit value was extracted for the total volume of distribution or the absorption lag time. Consequently, generic defaults were substituted for these missing quantities, and the model was held back from publication. A second reader also disagreed that the dose compound and primary analyte were definitively identified as empagliflozin. Extracted — empagliflozin: CL/F 6.74 L/h, V2/F 4.12 L, kabs 0.239 1/h, Q/F 5.51 L/h, V3/F 71.7 L, D1 0.326 h.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has empagliflozin, the second reading unknown; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 6.74 | L/h | 1.872e-06 | m3/s | l/h | exact (1) | Rascher_2025_table_p5_2:row0:col3, Rascher_2025_table_p5_2:row0:col5, Rascher_2025_table_p5_2:row0:col6, Rascher_2025_table_p5_2:row0:col7 | 33.3 (None% RSE) |
| V₂/F (L) | `Q82` · V2/F | 4.12 | L | 0.00412 | m3 | l | exact (1) | Rascher_2025_table_p5_2:row1:col3, Rascher_2025_table_p5_2:row1:col5, Rascher_2025_table_p5_2:row1:col6, Rascher_2025_table_p5_2:row1:col7 |  |
| KA (1/h) | `Q49` · kabs | 0.239 | 1/h | 6.639e-05 | 1/s | 1/h | exact (1) | Rascher_2025_table_p5_2:row2:col3, Rascher_2025_table_p5_2:row2:col5, Rascher_2025_table_p5_2:row2:col6, Rascher_2025_table_p5_2:row2:col7 |  |
| Q/F (L/h) | `Q69` · Q/F | 5.51 | L/h | 1.531e-06 | m3/s | l/h | exact (1) | Rascher_2025_table_p5_2:row3:col3, Rascher_2025_table_p5_2:row3:col5, Rascher_2025_table_p5_2:row3:col6, Rascher_2025_table_p5_2:row3:col7 |  |
| V₃/F (L) | `Q78` · V3/F | 71.7 | L | 0.0717 | m3 | l | exact (1) | Rascher_2025_table_p5_2:row4:col3, Rascher_2025_table_p5_2:row4:col5, Rascher_2025_table_p5_2:row4:col6, Rascher_2025_table_p5_2:row4:col7 |  |
| D1 (h) | `Q310` · D1 | 0.326 | h | 1174 | s | h | exact (1) | Rascher_2025_table_p5_2:row5:col3, Rascher_2025_table_p5_2:row5:col5, Rascher_2025_table_p5_2:row5:col6, Rascher_2025_table_p5_2:row5:col7 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'bulk ess' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'tail ess' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'r̂' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'eGFRₑₗ/ₓ' — extend the ontology if this is a real PK parameter (source ['Rascher_2025_table_p5_2:row6:col3', 'Rascher_2025_table_p5_2:row6:col5', 'Rascher_2025_table_p5_2:row6:col6', 'Rascher_2025_table_p5_2:row6:col7'])
- dropped unlinked row (NIL): 'BLACKCL/F' — extend the ontology if this is a real PK parameter (source ['Rascher_2025_table_p5_2:row7:col3', 'Rascher_2025_table_p5_2:row7:col5', 'Rascher_2025_table_p5_2:row7:col6', 'Rascher_2025_table_p5_2:row7:col7'])
- dropped unlinked row (NIL): 'ASIANCL/F' — extend the ontology if this is a real PK parameter (source ['Rascher_2025_table_p5_2:row8:col3', 'Rascher_2025_table_p5_2:row8:col5', 'Rascher_2025_table_p5_2:row8:col6', 'Rascher_2025_table_p5_2:row8:col7'])
- dropped unlinked row (NIL): 'FEMALECL/F' — extend the ontology if this is a real PK parameter (source ['Rascher_2025_table_p5_2:row9:col3', 'Rascher_2025_table_p5_2:row9:col5', 'Rascher_2025_table_p5_2:row9:col6', 'Rascher_2025_table_p5_2:row9:col7'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=empagliflozin
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table Rascher_2025_table_p5_2: unbound_uncertainty
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.7 (7/10 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [] | [['none', 'none', 'none']] | mismatch |
| `gpt-oss:120b` | `screen.dose_compound` | empagliflozin | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | empagliflozin | unknown | mismatch |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Rascher_2025_table_p5_2:row0:col3', 'Rascher_2025_table_p5_2:row0:col5', 'Rascher_2025_table_p5_2:row0:col6', 'Rascher_2025_table_p5_2:row0:col7'] |
| C5_dimension_Q310 | pass | [time] |  | ['Rascher_2025_table_p5_2:row5:col3', 'Rascher_2025_table_p5_2:row5:col5', 'Rascher_2025_table_p5_2:row5:col6', 'Rascher_2025_table_p5_2:row5:col7'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Rascher_2025_table_p5_2:row2:col3', 'Rascher_2025_table_p5_2:row2:col5', 'Rascher_2025_table_p5_2:row2:col6', 'Rascher_2025_table_p5_2:row2:col7'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Rascher_2025_table_p5_2:row3:col3', 'Rascher_2025_table_p5_2:row3:col5', 'Rascher_2025_table_p5_2:row3:col6', 'Rascher_2025_table_p5_2:row3:col7'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['Rascher_2025_table_p5_2:row4:col3', 'Rascher_2025_table_p5_2:row4:col5', 'Rascher_2025_table_p5_2:row4:col6', 'Rascher_2025_table_p5_2:row4:col7'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['Rascher_2025_table_p5_2:row1:col3', 'Rascher_2025_table_p5_2:row1:col5', 'Rascher_2025_table_p5_2:row1:col6', 'Rascher_2025_table_p5_2:row1:col7'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 6.74 L/h | ['Rascher_2025_table_p5_2:row0:col3', 'Rascher_2025_table_p5_2:row0:col5', 'Rascher_2025_table_p5_2:row0:col6', 'Rascher_2025_table_p5_2:row0:col7'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 4.12 L | ['Rascher_2025_table_p5_2:row1:col3', 'Rascher_2025_table_p5_2:row1:col5', 'Rascher_2025_table_p5_2:row1:col6', 'Rascher_2025_table_p5_2:row1:col7'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_apparent_invariant | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_param_coverage | fail | 4 scholar param(s) emitted or defaulted | 3 covered | neither emitted nor in defaulted[]: ['V2/F'] |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C_enteral | engineer template must match the scholar topology |
| T6_deviations | fail |  | deviation_1: not acceptable; deviation_2: not acceptable; deviation_3: not acceptable; defaulted_parameters: not acceptable | LLM adjudication → deterministic rule |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bempagliflozin%5D%20Empagliflozin_Rascher2025_reference&body=Drug%3A%20empagliflozin%0ARecord%3A%20Empagliflozin_Rascher2025_reference%0APaper%3A%20Rascher_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_empagliflozin/Empagliflozin_Rascher2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-22 09:58 UTC</sub>
