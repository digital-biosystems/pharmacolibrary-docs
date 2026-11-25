<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;tafenoquine&quot;,&quot;href&quot;:&quot;drugs/drug_tafenoquine/&quot;},{&quot;label&quot;:&quot;Charles_2007 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tafenoquine_CherkaouiRbati2023_reference&quot;,&quot;label&quot;:&quot;Cherkaoui-Rbati_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tafenoquine/Tafenoquine_CherkaouiRbati2023_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tafenoquine — `Tafenoquine_Charles2007_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> No value for tafenoquine's clearance, absorption rate constant and absorption lag time; the covariate scenarios were not simulated (+1 more).

<div class="pk-model-meta" hidden drug="tafenoquine" model-id="Tafenoquine_Charles2007_reference" status="model_quarantined" stale="false" population="healthy adults" measured-compound="tafenoquine" parameterization="apparent" topology="1C"></div>

## Citation
Charles BG, Miller AK, Nasveld PE, Reid MG, Harris IE, Edstein MD. Population pharmacokinetics of tafenoquine during malaria prophylaxis in healthy subjects. Antimicrobial agents and chemotherapy 51(8):2709–2715 (2007).
  ·  DOI: [10.1128/AAC.01183-06](https://doi.org/10.1128/AAC.01183-06)

## Population and dosing

**Population:** healthy adults · condition healthy · age group adult · n = 490.

**Dosing:** 200 mg, oral, multiple, every 168 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 3 extracted, plus 1 covariate effect.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Treatment duration (days)a | n_transit | 3 | days |
| V/F (liters/kg) | V/F | 26.1 | liters/kg |
| t1/2 (days) | t1/2z | 9.8 | days |
| theta_v_f_weight | theta_v_f_weight | 0.713 |  |
| CL/F | CL/F | 3.02 | liters/h |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.556). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No value for tafenoquine's clearance, absorption rate constant and absorption lag time; the covariate scenarios were not simulated (+1 more).**

The model was built, but tafenoquine's clearance, absorption rate constant and absorption lag time had no value, so a library placeholder stood in and the model was held back rather than published with an invented number. The base model was simulated, not the covariate effects the record defines. A reported unit could not be converted (n_transit), so that value has no SI equivalent. Extracted — tafenoquine: n_transit 3 days, V/F 26.1 liters/kg, t1/2z 9.8 days.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of t1/2: this record has 9.8, the second reading none; it also differs on 3 more fields. That field does not shape the model.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Treatment duration (days)a | `Q311` · n_transit | 3 | days |  |  | d | llm (0.6) | Charles_2007_table_3:row1:col1, Charles_2007_table_3:row3:col1, Charles_2007_table_3:row4:col1, Charles_2007_table_3:row5:col1, Charles_2007_table_3:row6:col1, Charles_2007_table_3:row7:col1 |
| V/F (liters/kg) | `Q76` · V/F | 26.1 | liters/kg | 1.827 | m3 | l/kg | exact (1) | Charles_2007_table_3:row1:col6, Charles_2007_table_3:row3:col6, Charles_2007_table_3:row4:col6, Charles_2007_table_3:row5:col6, Charles_2007_table_3:row6:col6, Charles_2007_table_3:row7:col6 |
| t1/2 (days) | `Q57` · t1/2z | 9.8 | days | 8.467e+05 | s | d | half_life_rule (0.95) | Charles_2007_table_3:row1:col7, Charles_2007_table_3:row3:col7, Charles_2007_table_3:row4:col7, Charles_2007_table_3:row5:col7, Charles_2007_table_3:row6:col7, Charles_2007_table_3:row7:col7 |
| theta_v_f_weight | `Q900` · theta_v_f_weight | 0.713 |  |  |  |  |  | tab_1:row4:col1 |
| CL/F | `Q900` · CL/F | 3.02 | liters/h | 8.389e-07 | s |  |  | tab_1:row2:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| CL/F ( 1 ; liters/h) | Q27 | exact |

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'RUV (CV%)' routed out of structural estimates ('IIV K a (CV%) IOV CL/F (CV%) 76 18 75 (64-85) 18 (16-20)')
- table section iiv: 'RUV (ng/ml)' routed out of structural estimates ('IIV K a (CV%) IOV CL/F (CV%) 76 18 75 (64-85) 18 (16-20)')
- dropped unlinked row (NIL): 'Cumulative dose (mg)b' — extend the ontology if this is a real PK parameter (source ['Charles_2007_table_3:row1:col2', 'Charles_2007_table_3:row3:col2', 'Charles_2007_table_3:row4:col2', 'Charles_2007_table_3:row7:col2'])
- dropped duplicate Q27 ('CL/F (liters/h/kg)', value '0.077') — already have one for this compound
- dropped unlinked row (NIL): 'Clast (ng/ml)c' — extend the ontology if this is a real PK parameter (source ['Charles_2007_table_3:row4:col4', 'Charles_2007_table_3:row5:col4', 'Charles_2007_table_3:row6:col4', 'Charles_2007_table_3:row7:col4'])
- NIL: refused to back-fill base 'CL/F' from footnote/prose loose number None (source ['tab_1:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V/F' from footnote/prose loose number None (source ['tab_1:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 't1/2ka ' from footnote/prose loose number None (source ['tab_1:footnote']); the table cell was unparseable — needs review
- dropped value-less row: 'Percentile bootstrap 90% confidence interval (5th to 95th percentiles)'
- dropped value-less row: 'Linear coefficient ( 4 ) for weight centered on CL/F'
- dropped value-less row: 'Linear coefficient ( 5 ) for weight centered on V/F'
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=tafenoquine
- bound model equation to Q27 (CL/F): CL/F = θ₁ * (WT/70)^0.75, V/F = θ₂ * (WT/70)^1.0; Ka = θ₃
- Q27 (CL/F) is equation-defined: value moved to equation-variable 'CL/F ( 1 ; liters/h)'; equation kept verbatim

**Extraction notes:**
- table tab_1: unparsed_numeric_cell
- table Charles_2007_table_3: ambiguous_numeric_format
- transposed table Charles_2007_table_3: logical view retains original source coordinates
- companion parameter table 3 transcribed (34 record(s))
- LLM selected parameter table(s) 2, 3
- captured model equation CL/F = θ₁ * (WT/70)^0.75, V/F = θ₂ * (WT/70)^1.0; Ka = θ₃

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.556 (5/9 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[t1/2]` | 9.8 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v_f_weight]` | 0.713 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[treatment duration (days)a]` | 3 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f]` | 26.1 |  | only_one_extracted |

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
| C2_reference | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['tab_1:row2:col1'] |
| C5_dimension_Q57 | pass | [time] |  | ['Charles_2007_table_3:row1:col7', 'Charles_2007_table_3:row3:col7', 'Charles_2007_table_3:row4:col7', 'Charles_2007_table_3:row5:col7', 'Charles_2007_table_3:row6:col7', 'Charles_2007_table_3:row7:col7'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Charles_2007_table_3:row1:col6', 'Charles_2007_table_3:row3:col6', 'Charles_2007_table_3:row4:col6', 'Charles_2007_table_3:row5:col6', 'Charles_2007_table_3:row6:col6', 'Charles_2007_table_3:row7:col6'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q76 | pass | volume within physiological range | 1.83e+03 L | ['Charles_2007_table_3:row1:col6', 'Charles_2007_table_3:row3:col6', 'Charles_2007_table_3:row4:col6', 'Charles_2007_table_3:row5:col6', 'Charles_2007_table_3:row6:col6', 'Charles_2007_table_3:row7:col6'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_param_coverage |  | pass | 1 scholar param(s) emitted or defaulted | 1 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable; invented_absorption: not acceptable |  | LLM adjudication → deterministic rule |
| X1_cross_check |  | pass |  | verdict partial; agreement 0.556 (5 of 9 compared fields agree, 4 extracted by one reader only); 1 of 1 reader(s) without a contradiction (gpt-oss-120b) | 0.556 | a second reader did not contradict the extraction |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btafenoquine%5D%20Tafenoquine_Charles2007_reference&body=Drug%3A%20tafenoquine%0ARecord%3A%20Tafenoquine_Charles2007_reference%0APaper%3A%20Charles_2007%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tafenoquine/Tafenoquine_Charles2007_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 15:56 UTC</sub>
