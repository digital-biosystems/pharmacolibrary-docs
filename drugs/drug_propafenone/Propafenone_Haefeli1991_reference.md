<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;propafenone&quot;,&quot;href&quot;:&quot;drugs/drug_propafenone/&quot;},{&quot;label&quot;:&quot;Haefeli_1991 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Propafenone_Connolly1984_dose_150_mg_every_8_hr&quot;,&quot;label&quot;:&quot;Connolly_1984_dose_150_mg_every_8_hr&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_propafenone/Propafenone_Connolly1984_dose_150_mg_every_8_hr.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Propafenone_Connolly1984_dose_300_mg_every_8_hr&quot;,&quot;label&quot;:&quot;Connolly_1984_dose_300_mg_every_8_hr&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_propafenone/Propafenone_Connolly1984_dose_300_mg_every_8_hr.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# propafenone — `Propafenone_Haefeli1991_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> The reviewer's verdict (Rejected, 2026-10-06 05:14 UTC) predates the latest extraction (2026-10-08 20:59 UTC); the status shown comes from the current checks. The paper reports none of the model's key parameters.

<div class="pk-model-meta" hidden drug="propafenone" model-id="Propafenone_Haefeli1991_reference" status="rejected" stale="true" population="healthy extensive metabolizers of debrisoquine" measured-compound="S-hydroxypropafenone" parameterization="mechanistic" topology="1C"></div>

## Citation
Haefeli WE, Vozeh S, Ha HR, Taeschner W, Follath F. Concentration-effect relations of 5-hydroxypropafenone in normal subjects. The American journal of cardiology 67(11):1022–1026 (1991).
  ·  DOI: [10.1016/0002-9149(91)90177-m](https://doi.org/10.1016/0002-9149(91)90177-m)

## Population and dosing

**Population:** healthy extensive metabolizers of debrisoquine · condition healthy · age group adult · n = &gt;=6.

**Dosing:** 300 mg, oral, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Lag Time (min) | tlag | 5.0 | min |
| Cmax. (ng/ml) | Cmax | 337 | ng/ml |
| t1/2α (min) | t1/2α | 29.1 | min |
| t1/2β (min) | t1/2β | 615 | min |
| AUC0-12h (ng·min/liter) | AUCt | 28.6 | ng·min/liter |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The paper reports none of the model's key parameters.**

No clearance, volume or rate constant of the model is reported in it. Only the abstract was available, so reported summary statistics stand in for a fitted model. No parameter values were extracted.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has S-hydroxypropafenone, the second reading 5-hydroxypropafenone; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Lag Time (min) | `Q83` · tlag | 5.0 | min | 300 | s | min | exact (1) | Haefeli_1991_table_p2_1:row2:col1, Haefeli_1991_table_p2_1:row2:col2, Haefeli_1991_table_p2_1:row2:col3, Haefeli_1991_table_p2_1:row2:col4, Haefeli_1991_table_p2_1:row2:col5, Haefeli_1991_table_p2_1:row2:col6, Haefeli_1991_table_p2_1:row2:col7 |
| Cmax. (ng/ml) | `Q32` · Cmax | 337 | ng/ml |  |  | ng/ml | llm (0.6) | Haefeli_1991_table_p2_1:row3:col1, Haefeli_1991_table_p2_1:row3:col2, Haefeli_1991_table_p2_1:row3:col3, Haefeli_1991_table_p2_1:row3:col4, Haefeli_1991_table_p2_1:row3:col5, Haefeli_1991_table_p2_1:row3:col6, Haefeli_1991_table_p2_1:row3:col7 |
| t1/2α (min) | `Q59` · t1/2α | 29.1 | min | 1746 | s | min | exact (1) | Haefeli_1991_table_p2_1:row4:col1, Haefeli_1991_table_p2_1:row4:col2, Haefeli_1991_table_p2_1:row4:col3, Haefeli_1991_table_p2_1:row4:col4, Haefeli_1991_table_p2_1:row4:col5, Haefeli_1991_table_p2_1:row4:col6, Haefeli_1991_table_p2_1:row4:col7 |
| t1/2β (min) | `Q60` · t1/2β | 615 | min | 3.69e+04 | s | min | exact (1) | Haefeli_1991_table_p2_1:row5:col1, Haefeli_1991_table_p2_1:row5:col2, Haefeli_1991_table_p2_1:row5:col3, Haefeli_1991_table_p2_1:row5:col4, Haefeli_1991_table_p2_1:row5:col5, Haefeli_1991_table_p2_1:row5:col6, Haefeli_1991_table_p2_1:row5:col7 |
| AUC0-12h (ng·min/liter) | `Q19` · AUCt | 28.6 | ng·min/liter |  |  | (min·ng)/l | llm (0.6) | Haefeli_1991_table_p2_1:row6:col1, Haefeli_1991_table_p2_1:row6:col2, Haefeli_1991_table_p2_1:row6:col3, Haefeli_1991_table_p2_1:row6:col4, Haefeli_1991_table_p2_1:row6:col5, Haefeli_1991_table_p2_1:row6:col6, Haefeli_1991_table_p2_1:row6:col7 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'mb/m' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'if/f' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'eg/f' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'rh/m' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'mm/f' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'it/m' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Age (yr)' — extend the ontology if this is a real PK parameter (source ['Haefeli_1991_table_p2_1:row0:col1', 'Haefeli_1991_table_p2_1:row0:col2', 'Haefeli_1991_table_p2_1:row0:col3', 'Haefeli_1991_table_p2_1:row0:col4', 'Haefeli_1991_table_p2_1:row0:col5', 'Haefeli_1991_table_p2_1:row0:col6', 'Haefeli_1991_table_p2_1:row0:col7'])
- dropped unlinked row (NIL): 'Weight (kg)' — extend the ontology if this is a real PK parameter (source ['Haefeli_1991_table_p2_1:row1:col1', 'Haefeli_1991_table_p2_1:row1:col2', 'Haefeli_1991_table_p2_1:row1:col3', 'Haefeli_1991_table_p2_1:row1:col4', 'Haefeli_1991_table_p2_1:row1:col5', 'Haefeli_1991_table_p2_1:row1:col6', 'Haefeli_1991_table_p2_1:row1:col7'])
- dropped unlinked row (NIL): 'PQ Interval PQ0 (ms)' — extend the ontology if this is a real PK parameter (source ['Haefeli_1991_table_p2_1:row7:col1', 'Haefeli_1991_table_p2_1:row7:col2', 'Haefeli_1991_table_p2_1:row7:col3', 'Haefeli_1991_table_p2_1:row7:col4', 'Haefeli_1991_table_p2_1:row7:col5', 'Haefeli_1991_table_p2_1:row7:col6', 'Haefeli_1991_table_p2_1:row7:col7'])
- dropped unlinked row (NIL): 'PQ Interval PQmax (ms)' — extend the ontology if this is a real PK parameter (source ['Haefeli_1991_table_p2_1:row8:col1', 'Haefeli_1991_table_p2_1:row8:col2', 'Haefeli_1991_table_p2_1:row8:col3', 'Haefeli_1991_table_p2_1:row8:col4', 'Haefeli_1991_table_p2_1:row8:col5', 'Haefeli_1991_table_p2_1:row8:col6', 'Haefeli_1991_table_p2_1:row8:col7'])
- dropped unlinked row (NIL): 'QRS Duration QRS0 (ms)' — extend the ontology if this is a real PK parameter (source ['Haefeli_1991_table_p2_1:row9:col1', 'Haefeli_1991_table_p2_1:row9:col2', 'Haefeli_1991_table_p2_1:row9:col3', 'Haefeli_1991_table_p2_1:row9:col4', 'Haefeli_1991_table_p2_1:row9:col5', 'Haefeli_1991_table_p2_1:row9:col6', 'Haefeli_1991_table_p2_1:row9:col7'])
- dropped unlinked row (NIL): 'QRS Duration QRSmax (ms)' — extend the ontology if this is a real PK parameter (source ['Haefeli_1991_table_p2_1:row10:col1', 'Haefeli_1991_table_p2_1:row10:col2', 'Haefeli_1991_table_p2_1:row10:col3', 'Haefeli_1991_table_p2_1:row10:col4', 'Haefeli_1991_table_p2_1:row10:col5', 'Haefeli_1991_table_p2_1:row10:col6', 'Haefeli_1991_table_p2_1:row10:col7'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=S-hydroxypropafenone
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- row roles (LLM): model_class=noncompartmental; 11/11 row label(s) assigned, 7 linked by role
- molar mass: no plausible PubChem entry for 'S-hydroxypropafenone' ('S-hydroxypropafenone') — left in mass units
- molar mass: none found for 'S-hydroxypropafenone' — its concentrations stay mass-only

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- transposed table Haefeli_1991_table_p2_1: parameters were across the columns, populations/subgroups down the first column — transposed for parsing

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.143 (2/14 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[auc0-12h]` |  | 28.6 | only_one_extracted |
| `gpt-oss:120b` | `parameters[auc0-12h]` | 28.6 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[cmax.]` |  | 337 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cmax.]` | 337 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[lag time]` |  | 5.0 | only_one_extracted |
| `gpt-oss:120b` | `parameters[lag time]` | 5.0 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1/2α]` |  | 29.1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1/2α]` | 29.1 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1/2β]` |  | 615 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1/2β]` | 615 |  | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | S-hydroxypropafenone | 5-hydroxypropafenone | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | S-hydroxypropafenone | 5-hydroxypropafenone | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['Haefeli_1991_table_p2_1:row6:col1', 'Haefeli_1991_table_p2_1:row6:col2', 'Haefeli_1991_table_p2_1:row6:col3', 'Haefeli_1991_table_p2_1:row6:col4', 'Haefeli_1991_table_p2_1:row6:col5', 'Haefeli_1991_table_p2_1:row6:col6', 'Haefeli_1991_table_p2_1:row6:col7'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Haefeli_1991_table_p2_1:row3:col1', 'Haefeli_1991_table_p2_1:row3:col2', 'Haefeli_1991_table_p2_1:row3:col3', 'Haefeli_1991_table_p2_1:row3:col4', 'Haefeli_1991_table_p2_1:row3:col5', 'Haefeli_1991_table_p2_1:row3:col6', 'Haefeli_1991_table_p2_1:row3:col7'] |
| C5_dimension_Q59 | pass | [time] |  | ['Haefeli_1991_table_p2_1:row4:col1', 'Haefeli_1991_table_p2_1:row4:col2', 'Haefeli_1991_table_p2_1:row4:col3', 'Haefeli_1991_table_p2_1:row4:col4', 'Haefeli_1991_table_p2_1:row4:col5', 'Haefeli_1991_table_p2_1:row4:col6', 'Haefeli_1991_table_p2_1:row4:col7'] |
| C5_dimension_Q60 | pass | [time] |  | ['Haefeli_1991_table_p2_1:row5:col1', 'Haefeli_1991_table_p2_1:row5:col2', 'Haefeli_1991_table_p2_1:row5:col3', 'Haefeli_1991_table_p2_1:row5:col4', 'Haefeli_1991_table_p2_1:row5:col5', 'Haefeli_1991_table_p2_1:row5:col6', 'Haefeli_1991_table_p2_1:row5:col7'] |
| C5_dimension_Q83 | pass | [time] |  | ['Haefeli_1991_table_p2_1:row2:col1', 'Haefeli_1991_table_p2_1:row2:col2', 'Haefeli_1991_table_p2_1:row2:col3', 'Haefeli_1991_table_p2_1:row2:col4', 'Haefeli_1991_table_p2_1:row2:col5', 'Haefeli_1991_table_p2_1:row2:col6', 'Haefeli_1991_table_p2_1:row2:col7'] |
| C8_topology | pass |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpropafenone%5D%20Propafenone_Haefeli1991_reference&body=Drug%3A%20propafenone%0ARecord%3A%20Propafenone_Haefeli1991_reference%0APaper%3A%20Haefeli_1991%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_propafenone/Propafenone_Haefeli1991_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-08 20:59 UTC</sub>
