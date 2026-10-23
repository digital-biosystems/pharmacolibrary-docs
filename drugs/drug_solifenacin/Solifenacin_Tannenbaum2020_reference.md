<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G04B&quot;,&quot;href&quot;:&quot;atc/G04B.md&quot;},{&quot;label&quot;:&quot;solifenacin&quot;,&quot;href&quot;:&quot;drugs/drug_solifenacin/&quot;},{&quot;label&quot;:&quot;Tannenbaum_2020 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# solifenacin — `Solifenacin_Tannenbaum2020_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Absolute bioavailability for solifenacin is reported as 1.12 Amperes, a unit incompatible with a dimensionless fraction.

<div class="pk-model-meta" hidden drug="solifenacin" model-id="Solifenacin_Tannenbaum2020_reference" status="rejected" stale="false" population="pediatric patients with overactive bladder or neurogenic detrusor overactivity" measured-compound="solifenacin" parameterization="apparent" topology="2C"></div>

## Citation
Tannenbaum S, den Adel M, Krauwinkel W, Meijer J, Hollestein-Havelaar A, Verheggen F et al. Pharmacokinetics of solifenacin in pediatric populations with overactive bladder or neurogenic detrusor overactivity. Pharmacology research & perspectives 8(6):e00684 (2020).
  ·  DOI: [10.1002/prp2.684](https://doi.org/10.1002/prp2.684)

## Population and dosing

**Population:** pediatric patients with overactive bladder or neurogenic detrusor overactivity · condition overactive bladder or neurogenic detrusor overactivity · age group mixed · n = 194.

**Dosing:** 2.5, 5, 7.5, 10 mg/day, oral, multiple, every 24 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** CL/F, Q/F, V/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 12 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL/F (L h–1) | CL/F | 8.81 | L h–1 |
| V2/F (L) | V2/F | 162 | L |
| ka (h–1) | kabs | 0.742 | h–1 |
| ALAG (h) | tlag | 0.834 | h |
| Q/F (L h–1) | Q/F | 98.1 | L h–1 |
| V3/F (L) | V3/F | 174 | L |
| F1 | Fab | 1.12 | A |
| AUC/D (ng h mL–1 mg–1) | AUC/dose | 96.70 | ng h mL–1 mg–1 |
| Cmax/D (ng mL–1 mg–1) | Cmax/dose | 5.744 | ng mL–1 mg–1 |
| t1/2 (h) | t1/2z | 26.75 | h |
| Vz/F (L) | V/F | 300.9 | L |
| Ctrough/D (ng mL–1 mg–1) | Ctrough | 3.184 | ng mL–1 mg–1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.071). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Absolute bioavailability for solifenacin is reported as 1.12 Amperes, a unit incompatible with a dimensionless fraction.**

The absolute bioavailability parameter has a value of 1.12 but is assigned the unit Amperes. Electrical current is not a valid unit for a bioavailability fraction, which is dimensionless. This incompatibility prevented the parameter from being converted to standard scientific units, leaving it dimensionally inconsistent. Extracted — solifenacin: CL/F 8.81 L h–1, V2/F 162 L, kabs 0.742 h–1, tlag 0.834 h, Q/F 98.1 L h–1, V3/F 174 L, Fab 1.12 A, AUC/dose 96.7 ng h mL–1 mg–1, … (+4).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has solifenacin, the second reading unknown; it also differs on 25 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL/F (L h–1) | `Q27` · CL/F | 8.81 | L h–1 | 2.447e-06 | m3/s | l/h | exact (1) | prp2684-tbl-0003:row2:col1, prp2684-tbl-0003:row2:col2, Tannenbaum_2020_table_4:row5:col1, Tannenbaum_2020_table_4:row5:col2, Tannenbaum_2020_table_4:row5:col3 |
| V2/F (L) | `Q82` · V2/F | 162 | L | 0.162 | m3 | l | exact (1) | prp2684-tbl-0003:row5:col1, prp2684-tbl-0003:row5:col2 |
| ka (h–1) | `Q49` · kabs | 0.742 | h–1 | 0.0002061 | 1/s | 1/h | exact (1) | prp2684-tbl-0003:row8:col1, prp2684-tbl-0003:row8:col2 |
| ALAG (h) | `Q83` · tlag | 0.834 | h | 3002 | s | h | exact (1) | prp2684-tbl-0003:row9:col1, prp2684-tbl-0003:row9:col2 |
| Q/F (L h–1) | `Q69` · Q/F | 98.1 | L h–1 | 2.725e-05 | m3/s | l/h | exact (1) | prp2684-tbl-0003:row10:col1, prp2684-tbl-0003:row10:col2 |
| V3/F (L) | `Q78` · V3/F | 174 | L | 0.174 | m3 | l | exact (1) | prp2684-tbl-0003:row11:col1, prp2684-tbl-0003:row11:col2 |
| F1 | `Q40` · Fab | 1.12 | A |  |  | a | exact (1) | prp2684-tbl-0003:row13:col1, prp2684-tbl-0003:row13:col2 |
| AUC/D (ng h mL–1 mg–1) | `Q189` · AUC/dose | 96.70 | ng h mL–1 mg–1 |  |  | (h·ng)/(mg·ml) | exact (1) | Tannenbaum_2020_table_4:row1:col1, Tannenbaum_2020_table_4:row1:col2, Tannenbaum_2020_table_4:row1:col3 |
| Cmax/D (ng mL–1 mg–1) | `Q174` · Cmax/dose | 5.744 | ng mL–1 mg–1 |  |  | ng/(mg·ml) | llm (0.6) | Tannenbaum_2020_table_4:row2:col1, Tannenbaum_2020_table_4:row2:col2, Tannenbaum_2020_table_4:row2:col3 |
| t1/2 (h) | `Q57` · t1/2z | 26.75 | h | 9.63e+04 | s | h | exact (1) | Tannenbaum_2020_table_4:row4:col1, Tannenbaum_2020_table_4:row4:col2, Tannenbaum_2020_table_4:row4:col3 |
| Vz/F (L) | `Q76` · V/F | 300.9 | L | 0.3009 | m3 | l | exact (1) | Tannenbaum_2020_table_4:row6:col1, Tannenbaum_2020_table_4:row6:col2, Tannenbaum_2020_table_4:row6:col3 |
| Ctrough/D (ng mL–1 mg–1) | `Q37` · Ctrough | 3.184 | ng mL–1 mg–1 |  |  | ng/(mg·ml) | llm (0.6) | Tannenbaum_2020_table_4:row7:col1, Tannenbaum_2020_table_4:row7:col2, Tannenbaum_2020_table_4:row7:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'AGP on CL/F b' — extend the ontology if this is a real PK parameter (source ['prp2684-tbl-0003:row3:col1', 'prp2684-tbl-0003:row3:col2'])
- dropped unlinked row (NIL): 'FFM on CL/F b' — extend the ontology if this is a real PK parameter (source ['prp2684-tbl-0003:row4:col1', 'prp2684-tbl-0003:row4:col2'])
- dropped unlinked row (NIL): 'AGP on V2/F b' — extend the ontology if this is a real PK parameter (source ['prp2684-tbl-0003:row6:col1', 'prp2684-tbl-0003:row6:col2'])
- dropped unlinked row (NIL): 'FFM on V2/F b' — extend the ontology if this is a real PK parameter (source ['prp2684-tbl-0003:row7:col1', 'prp2684-tbl-0003:row7:col2'])
- unit_dimension_mismatch: 'FFM on V3/F b' → Q78 (unit '[time]' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q78 ('FFM on V3/F b', value '1.07') — already have one for this compound
- routed 'Parameter, geometric mean (CV% a )' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- unit_dimension_unknown: 'ng h mL–1 mg–1' (AUC/dose)
- unit_dimension_mismatch: 'Cmax/D (ng mL–1 mg–1)' → Q174 (unit '1 / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'Ctrough/D (ng mL–1 mg–1)' → Q37 (unit '1 / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- implicit units: 'AUC/D (ng h mL–1 mg–1)' — the LLM proposed 'ng h mL-1 mg-1', whose dimension does not fit Q189; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=solifenacin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted

**Extraction notes:**
- companion parameter table 4 transcribed (21 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.071 (2/28 fields) | 26 |

<details><summary>26 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[alag]` | 0.834 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[alag]` |  | 0.834 | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc/d]` | 96.70 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc/d]` |  | 96.70 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | 8.81 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` |  | 8.81 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax/d]` | 5.744 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax/d]` |  | 5.744 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ctrough/d]` | 3.184 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ctrough/d]` |  | 3.184 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f1]` | 1.12 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[f1]` |  | 1.12 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 0.742 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` |  | 0.742 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f]` | 98.1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f]` |  | 98.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2]` | 26.75 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2]` |  | 26.75 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2/f]` | 162 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2/f]` |  | 162 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3/f]` | 174 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3/f]` |  | 174 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vz/f]` | 300.9 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vz/f]` |  | 300.9 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | solifenacin | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | solifenacin | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 12 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | pass | 38 | 36.83 | 0.9692 | 0.25 | reported t½β |
| C5_dimension_Q174 | fail | 1 / [length] ** 3 | ng mL–1 mg–1 |  |  | ['Tannenbaum_2020_table_4:row2:col1', 'Tannenbaum_2020_table_4:row2:col2', 'Tannenbaum_2020_table_4:row2:col3'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  |  |  | ['prp2684-tbl-0003:row2:col1', 'prp2684-tbl-0003:row2:col2', 'Tannenbaum_2020_table_4:row5:col1', 'Tannenbaum_2020_table_4:row5:col2', 'Tannenbaum_2020_table_4:row5:col3'] |
| C5_dimension_Q37 | fail | 1 / [length] ** 3 | ng mL–1 mg–1 |  |  | ['Tannenbaum_2020_table_4:row7:col1', 'Tannenbaum_2020_table_4:row7:col2', 'Tannenbaum_2020_table_4:row7:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  |  |  | ['prp2684-tbl-0003:row8:col1', 'prp2684-tbl-0003:row8:col2'] |
| C5_dimension_Q57 | pass | [time] |  |  |  | ['Tannenbaum_2020_table_4:row4:col1', 'Tannenbaum_2020_table_4:row4:col2', 'Tannenbaum_2020_table_4:row4:col3'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  |  |  | ['prp2684-tbl-0003:row10:col1', 'prp2684-tbl-0003:row10:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  |  |  | ['Tannenbaum_2020_table_4:row6:col1', 'Tannenbaum_2020_table_4:row6:col2', 'Tannenbaum_2020_table_4:row6:col3'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  |  |  | ['prp2684-tbl-0003:row11:col1', 'prp2684-tbl-0003:row11:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  |  |  | ['prp2684-tbl-0003:row5:col1', 'prp2684-tbl-0003:row5:col2'] |
| C5_dimension_Q83 | pass | [time] |  |  |  | ['prp2684-tbl-0003:row9:col1', 'prp2684-tbl-0003:row9:col2'] |
| C5_unit_missing_Q189 | fail | [mass] * [time] / [length] ** 3 | ng h mL–1 mg–1 |  |  | ['Tannenbaum_2020_table_4:row1:col1', 'Tannenbaum_2020_table_4:row1:col2', 'Tannenbaum_2020_table_4:row1:col3'] |
| C7_apparent_coherence | pass |  |  |  |  |  |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 8.81 L/h |  |  | ['prp2684-tbl-0003:row2:col1', 'prp2684-tbl-0003:row2:col2', 'Tannenbaum_2020_table_4:row5:col1', 'Tannenbaum_2020_table_4:row5:col2', 'Tannenbaum_2020_table_4:row5:col3'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 301 L |  |  | ['Tannenbaum_2020_table_4:row6:col1', 'Tannenbaum_2020_table_4:row6:col2', 'Tannenbaum_2020_table_4:row6:col3'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 162 L |  |  | ['prp2684-tbl-0003:row5:col1', 'prp2684-tbl-0003:row5:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsolifenacin%5D%20Solifenacin_Tannenbaum2020_reference&body=Drug%3A%20solifenacin%0ARecord%3A%20Solifenacin_Tannenbaum2020_reference%0APaper%3A%20Tannenbaum_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_solifenacin/Solifenacin_Tannenbaum2020_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 09:09 UTC</sub>
