<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Ethanol&quot;,&quot;href&quot;:&quot;drugs/toxin_ethanol/&quot;},{&quot;label&quot;:&quot;Plawecki_2012 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Ethanol — `Ethanol_Plawecki2012_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C2 negative clearance/volume in a covariate scenario or base (implausible — base value or shift is wrong).

<div class="pk-model-meta" hidden drug="Ethanol" model-id="Ethanol_Plawecki2012_reference" status="rejected" stale="false" population="healthy adult social drinkers (FHN and FHP)" measured-compound="ethanol" parameterization="mechanistic" topology="1C"></div>

## Citation
Plawecki MH, Zimmermann US, Vitvitskiy V, Doerschuk PC, Crabb D, O'Connor S. Alcohol exposure rate control through physiologically based pharmacokinetic modeling. Alcoholism, clinical and experimental research 36(6):1042–1049 (2012).
  ·  DOI: [10.1111/j.1530-0277.2011.01706.x](https://doi.org/10.1111/j.1530-0277.2011.01706.x)

## Population and dosing

**Population:** healthy adult social drinkers (FHN and FHP) · condition healthy · age group adult · n = 54.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Rc (dL/min) | Q3 | 30.4 | dL/min |
| Mmax (gm/hr) | equation variable | 1.65 | gm/hr |
| Kp (fraction) | Kp | -0.041 | fraction |
| preterm | CL | 0.116 | L/hour/kg |
| Volume Distribution (L/kg) | V | -1.017 | L/kg |
| kA has greater values in our research | kabs | 0.08 | min−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.364). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C2 negative clearance/volume in a covariate scenario or base (implausible — base value or shift is wrong).**

A reported unit could not be converted (equation variable and Kp), so that value has no SI equivalent. Extracted — ethanol: Q3 30.4 dL/min, Kp -0.041 fraction, CL 0.116 L/hour/kg, V -1.02 L/kg, kabs 0.08 min−1.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on `parameters[kp].value`: this record has -0.041, the second reading -0.001; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Rc (dL/min) | `Q308` · Q3 | 30.4 | dL/min | 5.067e-05 | m3/s | dl/min | llm (0.6) | Plawecki_2012_table_1:row0:col1, Plawecki_2012_table_1:row0:col2, Plawecki_2012_table_1:row0:col3, Plawecki_2012_table_1:row0:col4, Plawecki_2012_table_1:row0:col5 |
| Mmax (gm/hr) | `Q900` · equation variable | 1.65 | gm/hr |  |  | (g·m)/h | llm (0.6) | Plawecki_2012_table_1:row3:col1, Plawecki_2012_table_1:row3:col2, Plawecki_2012_table_1:row3:col3, Plawecki_2012_table_1:row3:col4 |
| Kp (fraction) | `Q410` · Kp | -0.041 | fraction |  |  | fraction | exact (1) | Plawecki_2012_table_1:row4:col1, Plawecki_2012_table_1:row4:col2, Plawecki_2012_table_1:row4:col3, Plawecki_2012_table_1:row4:col4 |
| preterm | `Q22` · CL | 0.116 | L/hour/kg | 2.256e-06 | m3/s | L/h | review_gapfill (0.7) | Haslund-Krog_2019:review |
| Volume Distribution (L/kg) | `Q61` · V | -1.017 | L/kg | -0.07119 | m3 | L | review_gapfill (0.7) | Iheagwam_2019:review |
| kA has greater values in our research | `Q49` · kabs | 0.08 | min−1 | 0.001333 | 1/s | 1/h | review_gapfill (0.7) | Zekan_2023:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'col1' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- table representations disagree for 'Rc (dL/min)'; source reconciliation required
- column 'col2' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'col3' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'col4' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'variable' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- table representations disagree for 'Vp (L)'; source reconciliation required
- table representations disagree for 'Vb (L)'; source reconciliation required
- table representations disagree for 'Mmax (gm/hr)'; source reconciliation required
- table representations disagree for 'Kp (fraction)'; source reconciliation required
- dropped 'Vp (L)' → Q64 = -12.4: a volume of -12.4 is not a parameter value (source ['Plawecki_2012_table_1:row1:col1', 'Plawecki_2012_table_1:row1:col2', 'Plawecki_2012_table_1:row1:col3', 'Plawecki_2012_table_1:row1:col4'])
- dropped 'Vb (L)' → Q61 = -0.363: a volume of -0.363 is not a parameter value (source ['Plawecki_2012_table_1:row2:col1', 'Plawecki_2012_table_1:row2:col2', 'Plawecki_2012_table_1:row2:col3', 'Plawecki_2012_table_1:row2:col4'])
- unit_dimension_unknown: 'gm/hr' (equation variable)
- NIL: refused to back-fill base 'equation variable' from footnote/prose loose number 29.3 (source ['T1:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 171 (source ['T1:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 93.6 (source ['T1:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V2' from footnote/prose loose number 36.8 (source ['T1:footnote']); the table cell was unparseable — needs review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ethanol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- gap-filled Q22 (CL) from Haslund-Krog_2019's review values (primary lacked it)
- gap-filled Q61 (V) from Iheagwam_2019's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Zekan_2023's review values (primary lacked it)

**Extraction notes:**
- table T1: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 1, 2
- toxin: the located table(s) gave no kinetic value — 11 record(s) read from the paper's prose

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.364 (4/11 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[kp].value` | -0.041 | -0.001 | mismatch |
| `gpt-oss:120b` | `parameters[mmax].parameter_id` | Q900 | Q66 | mismatch |
| `gpt-oss:120b` | `parameters[mmax].value` | 1.65 | 0.074 | mismatch |
| `gpt-oss:120b` | `parameters[rc].parameter_id` | Q308 | Q22 | mismatch |
| `gpt-oss:120b` | `parameters[rc].value` | 30.4 | 0.388 | mismatch |
| `gpt-oss:120b` | `parameters[vb]` |  | 0.117 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vp]` |  | 0.303 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0c_disposition_complete | fail |  |  |  |
| C2_base_sign_Q61 | fail |  | -1.017 |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Haslund-Krog_2019:review'] |
| C5_dimension_Q308 | pass | [length] ** 3 / [time] |  | ['Plawecki_2012_table_1:row0:col1', 'Plawecki_2012_table_1:row0:col2', 'Plawecki_2012_table_1:row0:col3', 'Plawecki_2012_table_1:row0:col4', 'Plawecki_2012_table_1:row0:col5'] |
| C5_dimension_Q410 | pass | dimensionless |  | ['Plawecki_2012_table_1:row4:col1', 'Plawecki_2012_table_1:row4:col2', 'Plawecki_2012_table_1:row4:col3', 'Plawecki_2012_table_1:row4:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Zekan_2023:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Iheagwam_2019:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.116 | ['Haslund-Krog_2019:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 8.12 L/h | ['Haslund-Krog_2019:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bethanol%5D%20Ethanol_Plawecki2012_reference&body=Drug%3A%20ethanol%0ARecord%3A%20Ethanol_Plawecki2012_reference%0APaper%3A%20Plawecki_2012%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_ethanol/Ethanol_Plawecki2012_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 06:59 UTC</sub>
