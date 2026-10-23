<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;belimumab&quot;,&quot;href&quot;:&quot;drugs/drug_belimumab/&quot;},{&quot;label&quot;:&quot;Zhou_2021 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# belimumab — `Belimumab_Zhou2021_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The clearance plausibility check could not be computed.

<div class="pk-model-meta" hidden drug="belimumab" model-id="Belimumab_Zhou2021_reference" status="needs_review" stale="false" population="adults and pediatric patients with systemic lupus erythematosus" measured-compound="belimumab" parameterization="mechanistic" topology="2C"></div>

## Citation
Zhou X, Lee TI, Zhu M, Ma P. Prediction of Belimumab Pharmacokinetics in Chinese Pediatric Patients with Systemic Lupus Erythematosus. Drugs in R&D 21(4):407–417 (2021).
  ·  DOI: [10.1007/s40268-021-00363-2](https://doi.org/10.1007/s40268-021-00363-2)

## Population and dosing

**Population:** adults and pediatric patients with systemic lupus erythematosus · condition systemic lupus erythematosus · age group mixed · n = &gt;=.

**Dosing:** 700 mg, iv, multiple, every 240 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| CL (ml/day) | CL | 238 | ml/day | 26.1 |
| V1 (ml) | V1 | 2597 | ml | 8.9 |
| Q (ml/day) | Q | 591 | ml/day | 6.5 |
| V2 (ml) | V2 | 2318 | ml | 28.5 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.538). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The clearance plausibility check could not be computed.**

The check had no reference to compare the clearance against, so the value is unverified rather than shown to be wrong. Extracted — belimumab: CL 238 ml/day, V1 2.6e+03 ml, Q 591 ml/day, V2 2.32e+03 ml.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[cl].rse_percent`: this record has 26.1, the second reading 5.2; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| CL (ml/day) | `Q22` · CL | 238 | ml/day | 2.755e-09 | m3/s | ml/d | 26.1 | exact (1) | Tab2:row1:col2, Tab2:row1:col3, Tab2:row1:col6, Tab2:row1:col8 |
| V1 (ml) | `Q63` · V1 | 2597 | ml | 0.002597 | m3 | ml | 8.9 | exact (1) | Tab2:row6:col2, Tab2:row6:col3, Tab2:row6:col6, Tab2:row6:col8 |
| Q (ml/day) | `Q30` · Q | 591 | ml/day | 6.84e-09 | m3/s | ml/d | 6.5 | exact (1) | Tab2:row11:col2, Tab2:row11:col3, Tab2:row11:col5 |
| V2 (ml) | `Q64` · V2 | 2318 | ml | 0.002318 | m3 | ml | 28.5 | exact (1) | Tab2:row12:col2, Tab2:row12:col3, Tab2:row12:col5, Tab2:row12:col6, Tab2:row12:col8 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'variance (η)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'FFM' — extend the ontology if this is a real PK parameter (source ['Tab2:row2:col1', 'Tab2:row2:col2', 'Tab2:row2:col3', 'Tab2:row7:col1', 'Tab2:row7:col2', 'Tab2:row7:col3'])
- dropped unlinked row (NIL): 'BALB' — extend the ontology if this is a real PK parameter (source ['Tab2:row3:col1', 'Tab2:row3:col2', 'Tab2:row3:col3'])
- dropped unlinked row (NIL): 'BIGG' — extend the ontology if this is a real PK parameter (source ['Tab2:row4:col1', 'Tab2:row4:col2', 'Tab2:row4:col3'])
- dropped unlinked row (NIL): 'STDY = LBSL01 or 02' — extend the ontology if this is a real PK parameter (source ['Tab2:row5:col2', 'Tab2:row5:col3', 'Tab2:row8:col2', 'Tab2:row8:col3'])
- dropped unlinked row (NIL): 'Race (RAC4d)' — extend the ontology if this is a real PK parameter (source ['Tab2:row9:col2', 'Tab2:row9:col3'])
- dropped unlinked row (NIL): 'AGE' — extend the ontology if this is a real PK parameter (source ['Tab2:row10:col1', 'Tab2:row10:col2', 'Tab2:row10:col3'])
- routed 'ε1 (%)e' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'ε2 (mg/l)e' — extend the ontology if this is a real PK parameter (source ['Tab2:row14:col2', 'Tab2:row14:col3'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=belimumab
- molar mass: none found for 'belimumab' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell Tab2:row1:col1 = 'θ1'
- unparsed cell Tab2:row1:col4 = 'η1'
- unparsed cell Tab2:row1:col5 = '0.0682c'
- unparsed cell Tab2:row5:col1 = '× θ11INDR'
- unparsed cell Tab2:row6:col1 = 'θ2'
- unparsed cell Tab2:row6:col4 = 'η2'
- unparsed cell Tab2:row6:col5 = '0.0079c'
- unparsed cell Tab2:row8:col1 = '× θ12INDR'
- unparsed cell Tab2:row9:col1 = '× θ12RAC4'
- unparsed cell Tab2:row11:col1 = 'θ3'
- unparsed cell Tab2:row11:col4 = 'η3'
- unparsed cell Tab2:row12:col1 = 'θ4'
- unparsed cell Tab2:row12:col4 = 'η4'
- unparsed cell Tab2:row13:col1 = 'θ5'
- unparsed cell Tab2:row13:col4 = 'η5'
- unparsed cell Tab2:row14:col1 = 'θ6'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.538 (7/13 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl].rse_percent` | 26.1 | 5.2 | mismatch |
| `gpt-oss-120b` | `parameters[ffm]` |  | 0.891 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q].value` | 591 | 0 | mismatch |
| `gpt-oss-120b` | `parameters[v1].rse_percent` | 8.9 | 36.6 | mismatch |
| `gpt-oss-120b` | `parameters[v2].rse_percent` | 28.5 | 23.9 | mismatch |
| `gpt-oss-120b` | `parameters[v2].value` | 2318 | 0.0781 | mismatch |

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
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab2:row1:col2', 'Tab2:row1:col3', 'Tab2:row1:col6', 'Tab2:row1:col8'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Tab2:row11:col2', 'Tab2:row11:col3', 'Tab2:row11:col5'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Tab2:row6:col2', 'Tab2:row6:col3', 'Tab2:row6:col6', 'Tab2:row6:col8'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Tab2:row12:col2', 'Tab2:row12:col3', 'Tab2:row12:col5', 'Tab2:row12:col6', 'Tab2:row12:col8'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 238 | ['Tab2:row1:col2', 'Tab2:row1:col3', 'Tab2:row1:col6', 'Tab2:row1:col8'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00992 L/h | ['Tab2:row1:col2', 'Tab2:row1:col3', 'Tab2:row1:col6', 'Tab2:row1:col8'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 2.6 L | ['Tab2:row6:col2', 'Tab2:row6:col3', 'Tab2:row6:col6', 'Tab2:row6:col8'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.32 L | ['Tab2:row12:col2', 'Tab2:row12:col3', 'Tab2:row12:col5', 'Tab2:row12:col6', 'Tab2:row12:col8'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbelimumab%5D%20Belimumab_Zhou2021_reference&body=Drug%3A%20belimumab%0ARecord%3A%20Belimumab_Zhou2021_reference%0APaper%3A%20Zhou_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_belimumab/Belimumab_Zhou2021_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 23:30 UTC</sub>
