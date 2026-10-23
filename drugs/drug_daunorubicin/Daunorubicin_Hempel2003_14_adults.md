<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01D&quot;,&quot;href&quot;:&quot;atc/L01D.md&quot;},{&quot;label&quot;:&quot;daunorubicin&quot;,&quot;href&quot;:&quot;drugs/drug_daunorubicin/&quot;},{&quot;label&quot;:&quot;Hempel_2003 \u00b7 14_adults&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Daunorubicin_KroghMadsen2012_daunorubicin&quot;,&quot;label&quot;:&quot;Krogh-Madsen_2012_daunorubicin&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_daunorubicin/Daunorubicin_KroghMadsen2012_daunorubicin.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Daunorubicin_KroghMadsen2012_only_present&quot;,&quot;label&quot;:&quot;Krogh-Madsen_2012_only_present&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_daunorubicin/Daunorubicin_KroghMadsen2012_only_present.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Daunorubicin_KroghMadsen2012_only_present_study&quot;,&quot;label&quot;:&quot;Krogh-Madsen_2012_only_present_study&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_daunorubicin/Daunorubicin_KroghMadsen2012_only_present_study.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# daunorubicin — `Daunorubicin_Hempel2003_14_adults`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> V and CL have no unit.

<div class="pk-model-meta" hidden drug="daunorubicin" model-id="Daunorubicin_Hempel2003_14_adults" status="needs_review" stale="false" population="paediatric oncology patients with relapsed AML and other malignancies" measured-compound="daunorubicin" parameterization="mechanistic" topology="1C"></div>

## Citation
Hempel G, Reinhardt D, Creutzig U, Boos J. Population pharmacokinetics of liposomal daunorubicin in children. British journal of clinical pharmacology 56(4):370–377 (2003).
  ·  DOI: [10.1046/j.1365-2125.2003.01886.x](https://doi.org/10.1046/j.1365-2125.2003.01886.x)

## Population and dosing

**Population:** paediatric oncology patients with relapsed AML and other malignancies · condition relapsed acute myeloid leukaemia and other malignancies · age group child · n = 24.

**Dosing:** 30, 60 mg m-2, iv, multiple.

**Dosed compound ≠ measured compound:** dosed daunorubicin (liposomal Daunoxome), measured daunorubicin.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| 2 | Q2 | 0.208 | L/h |
| 3 | Q3 | 0.17 | L/h |
| 4 | Q | 0.217 | L/h |
| V (l m -2 ) | V | 2.08 | l m -2 |
| CL (l h -1 m -2 ) | CL | 0.344 | l h -1 m -2 |
| t 1/2 (h) | t1/2z | 5.23 | h |
| AUC (mg l -1 h) at 60 mg m -2 | AUC | 357 | mg·h/L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**V and CL have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (V, CL and AUC), so that value has no SI equivalent. Extracted — daunorubicin: Q2 0.208 L/h, Q3 0.17 L/h, Q 0.217 L/h, V 2.08 l m -2, CL 0.344 l h -1 m -2, t1/2z 5.23 h, AUC 357 mg·h/L.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on which compound was dosed: this record has daunorubicin (liposomal Daunoxome), the second reading liposomal daunorubicin; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| 2 | `Q99` · Q2 | 0.208 | L/h | 5.778e-08 | m3/s | L/h | llm (0.6) | tab_1:row3:col5 |
| 3 | `Q308` · Q3 | 0.17 | L/h | 4.722e-08 | m3/s | L/h | llm (0.6) | tab_1:row5:col5 |
| 4 | `Q30` · Q | 0.217 | L/h | 6.028e-08 | m3/s | L/h | llm (0.6) | tab_1:row7:col5, tab_1:row7:col8 |
| V (l m -2 ) | `Q61` · V | 2.08 | l m -2 |  |  | l·m-2 | exact (1) | Hempel_2003_table_2:row1:col2, Hempel_2003_table_2:row1:col5 |
| CL (l h -1 m -2 ) | `Q22` · CL | 0.344 | l h -1 m -2 |  |  | l/(h·m-2) | exact (1) | Hempel_2003_table_2:row2:col2, Hempel_2003_table_2:row2:col5 |
| t 1/2 (h) | `Q57` · t1/2z | 5.23 | h | 1.883e+04 | s | h | space_fold (0.95) | Hempel_2003_table_2:row3:col2, Hempel_2003_table_2:row3:col5 |
| AUC (mg l -1 h) at 60 mg m -2 | `Q88` · AUC | 357 | mg·h/L |  |  | mg·h/L | llm_confirmed (0.6) | Hempel_2003_table_2:row4:col2, Hempel_2003_table_2:row4:col5 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): '1' — extend the ontology if this is a real PK parameter (source ['tab_1:row2:col5', 'tab_1:row2:col8'])
- dropped duplicate Q30 ('5', value '0.218') — already have one for this compound
- dropped duplicate Q30 ('6', value '0.228') — already have one for this compound
- dropped duplicate Q30 ('7', value '2.16') — already have one for this compound
- dropped duplicate Q30 ('8', value '0.194') — already have one for this compound
- dropped duplicate Q30 ('9', value '0.25') — already have one for this compound
- dropped unlinked row (NIL): '10' — extend the ontology if this is a real PK parameter (source ['tab_1:row13:col5', 'tab_1:row13:col8'])
- dropped duplicate Q30 ('11', value '0.00917') — already have one for this compound
- dropped duplicate Q30 ('12', value '0.012') — already have one for this compound
- dropped duplicate Q30 ('13', value '0.00612') — already have one for this compound
- dropped duplicate Q30 ('14', value '0.00645') — already have one for this compound
- dropped duplicate Q30 ('15', value '0.00641') — already have one for this compound
- dropped unlinked row (NIL): 'Dose (mg m -2 )' — extend the ontology if this is a real PK parameter (source ['Hempel_2003_table_2:row0:col2', 'Hempel_2003_table_2:row0:col5'])
- unit_dimension_unknown: 'l m -2' (V)
- unit_dimension_unknown: 'l h -1 m -2' (CL)
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number None (source ['tab_1:footnote', 'tab_1:footnote']); the table cell was unparseable — needs review
- covariate age for equation variable from footnote/prose kept as documentation only (['tab_1:footnote', 'tab_1:footnote'])
- implicit units: '2' → L/h (from the popPK convention: 'The caption defines Q as “intercompartmental clearance” but gives no unit for this parameter. Intercompartmental clearan')
- implicit units: '3' → L/h (from the popPK convention: 'The caption defines Q as “intercompartmental clearance” but gives no unit for this parameter. Intercompartmental clearan')
- implicit units: '4' → L/h (from the popPK convention: 'The caption defines Q as “intercompartmental clearance” but gives no unit for this parameter. Intercompartmental clearan')
- implicit units: 'V (l m -2 )' — the LLM proposed 'L/m2', whose dimension does not fit Q61; left unset
- implicit units: 'CL (l h -1 m -2 )' — the LLM proposed 'L/h/m2', whose dimension does not fit Q22; left unset
- implicit units: 'AUC (mg l -1 h) at 60 mg m -2' → mg·h/L (from the paper text: 'The parameter is labeled “AUC (mg l -1 h) at 60 mg m -2 = 357,” which states the unit as mg·h/L.')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=daunorubicin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted
- population split: '14 adults' subgroup of Hempel_2003 (paper reports 3 populations: 11 adults, 14 adults, 18 adults)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell tab_1:row2:col6 = '15%'
- unparsed cell tab_1:row2:col7 = '72%'
- unparsed cell tab_1:row2:col9 = '9% 46%'
- unparsed cell tab_1:row2:col10 = '30%'
- unparsed cell tab_1:row3:col7 = '76% V 1 2.34V 2 2.0'
- unparsed cell tab_1:row3:col9 = '43%'
- unparsed cell tab_1:row3:col10 = '28%'
- unparsed cell tab_1:row5:col6 = '15%'
- unparsed cell tab_1:row5:col7 = '41% V 1 1.56V 2 32.5 10% 41%'
- unparsed cell tab_1:row5:col8 = '33%'
- unparsed cell tab_1:row7:col6 = '17%'
- unparsed cell tab_1:row7:col7 = '69%'
- unparsed cell tab_1:row7:col9 = '10% 52%'
- unparsed cell tab_1:row7:col10 = '18%'
- unparsed cell tab_1:row8:col6 = '17%'
- unparsed cell tab_1:row8:col7 = '74%'
- unparsed cell tab_1:row8:col9 = '11% 50%'
- unparsed cell tab_1:row8:col10 = '25%'
- unparsed cell tab_1:row9:col6 = '14%'
- unparsed cell tab_1:row9:col7 = '66%'
- unparsed cell tab_1:row9:col9 = '8% 46%'
- unparsed cell tab_1:row9:col10 = '27%'
- unparsed cell tab_1:row10:col6 = '18%'
- unparsed cell tab_1:row10:col7 = '106% 26.6'
- unparsed cell tab_1:row10:col8 = '17% 64%'
- unparsed cell tab_1:row10:col9 = '37%'
- unparsed cell tab_1:row11:col6 = '7%'
- unparsed cell tab_1:row11:col7 = '46%'
- unparsed cell tab_1:row11:col9 = '6% 24%'
- unparsed cell tab_1:row11:col10 = '26%'
- unparsed cell tab_1:row12:col6 = '7%'
- unparsed cell tab_1:row12:col7 = '27%'
- unparsed cell tab_1:row12:col9 = '9% 34%'
- unparsed cell tab_1:row12:col10 = '42%'
- unparsed cell tab_1:row13:col6 = '5%'
- unparsed cell tab_1:row13:col7 = '47%'
- unparsed cell tab_1:row13:col9 = '13% 26%'
- unparsed cell tab_1:row13:col10 = '25%'
- unparsed cell tab_1:row14:col6 = '61%'
- unparsed cell tab_1:row14:col7 = '48%'
- unparsed cell tab_1:row14:col9 = '7% 27%'
- unparsed cell tab_1:row14:col10 = '25%'
- unparsed cell tab_1:row15:col6 = '13%'
- unparsed cell tab_1:row15:col7 = '76%'
- unparsed cell tab_1:row15:col9 = '10% 39%'
- unparsed cell tab_1:row15:col10 = '26%'
- unparsed cell tab_1:row16:col6 = '7%'
- unparsed cell tab_1:row16:col7 = '57%'
- unparsed cell tab_1:row16:col9 = '6% 26%'
- unparsed cell tab_1:row16:col10 = '23%'
- unparsed cell tab_1:row17:col6 = '7%'
- unparsed cell tab_1:row17:col7 = '49%'
- unparsed cell tab_1:row17:col9 = '7% 26%'
- unparsed cell tab_1:row17:col10 = '24%'
- unparsed cell tab_1:row18:col6 = '5%'
- unparsed cell tab_1:row18:col7 = '51%'
- unparsed cell tab_1:row18:col9 = '1% 27%'
- unparsed cell tab_1:row18:col10 = '22%'
- unparsed cell Hempel_2003_table_2:row1:col3 = '5.58 abs'
- unparsed cell Hempel_2003_table_2:row2:col3 = '0.9 abs'
- companion parameter table 2 transcribed (22 record(s))
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.25 (3/12 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[14]` |  | 1 | only_one_extracted |
| `qwen3.8-27b` | `parameters[2].value` | 0.208 | 2 | mismatch |
| `qwen3.8-27b` | `parameters[3]` | 0.17 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[4]` | 0.217 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[auc (mg l -1 h) at 60 mg m -2]` | 357 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl]` | 0.344 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[t 1/2]` | 5.23 |  | only_one_extracted |
| `qwen3.8-27b` | `parameters[v]` | 2.08 |  | only_one_extracted |
| `qwen3.8-27b` | `screen.dose_compound` | daunorubicin (liposomal Daunoxome) | liposomal daunorubicin | mismatch |

</details>

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
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['tab_1:row7:col5', 'tab_1:row7:col8'] |
| C5_dimension_Q308 | pass | [length] ** 3 / [time] |  | ['tab_1:row5:col5'] |
| C5_dimension_Q57 | pass | [time] |  | ['Hempel_2003_table_2:row3:col2', 'Hempel_2003_table_2:row3:col5'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['Hempel_2003_table_2:row4:col2', 'Hempel_2003_table_2:row4:col5'] |
| C5_dimension_Q99 | pass | [length] ** 3 / [time] |  | ['tab_1:row3:col5'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | l h -1 m -2 | ['Hempel_2003_table_2:row2:col2', 'Hempel_2003_table_2:row2:col5'] |
| C5_unit_missing_Q61 | fail | [length] ** 3 | l m -2 | ['Hempel_2003_table_2:row1:col2', 'Hempel_2003_table_2:row1:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.344 | ['Hempel_2003_table_2:row2:col2', 'Hempel_2003_table_2:row2:col5'] |
| C8_topology | pass |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdaunorubicin%5D%20Daunorubicin_Hempel2003_14_adults&body=Drug%3A%20daunorubicin%0ARecord%3A%20Daunorubicin_Hempel2003_14_adults%0APaper%3A%20Hempel_2003%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_daunorubicin/Daunorubicin_Hempel2003_14_adults%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 16:52 UTC</sub>
