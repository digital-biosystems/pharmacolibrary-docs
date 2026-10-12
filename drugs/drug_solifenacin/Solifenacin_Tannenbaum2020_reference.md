<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G04B&quot;,&quot;href&quot;:&quot;atc/G04B.md&quot;},{&quot;label&quot;:&quot;solifenacin&quot;,&quot;href&quot;:&quot;drugs/drug_solifenacin/&quot;},{&quot;label&quot;:&quot;Tannenbaum_2020 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# solifenacin — `Solifenacin_Tannenbaum2020_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.071). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Absolute bioavailability for solifenacin is reported as 1.12 Amperes, a unit incompatible with a dimensionless fraction.**

The absolute bioavailability parameter has a value of 1.12 but is assigned the unit Amperes. Electrical current is not a valid unit for a bioavailability fraction, which is dimensionless. This incompatibility prevented the parameter from being converted to standard scientific units, leaving it dimensionally inconsistent. Extracted — solifenacin: CL/F 8.81 L h–1, V2/F 162 L, kabs 0.742 h–1, tlag 0.834 h, Q/F 98.1 L h–1, V3/F 174 L, Fab 1.12 A, AUC/dose 96.7 ng h mL–1 mg–1, … (+4).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has solifenacin, the second reading unknown; it also differs on 25 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Tannenbaum S et al., Pharmacokinetics of solifenacin in pedi…, Pharmacology research & per… (2020)
  ·  DOI: [10.1002/prp2.684](https://doi.org/10.1002/prp2.684)

<div class="pk-model-meta" hidden drug="solifenacin" model-id="Solifenacin_Tannenbaum2020_reference" status="rejected" stale="false" population="pediatric patients with overactive bladder or neurogenic detrusor overactivity" measured-compound="solifenacin" parameterization="apparent" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 12 extracted.

**Parameterization:** CL/F, Q/F, V/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L h–1) | `Q27` · CL/F | 8.81 | L h–1 | 2.4472222222222225e-06 | [l] / [h] | not captured | exact (1.0) | prp2684-tbl-0003:row2:col1, prp2684-tbl-0003:row2:col2, Tannenbaum_2020_table_4:row5:col1, Tannenbaum_2020_table_4:row5:col2, Tannenbaum_2020_table_4:row5:col3 | — | not captured |
| V2/F (L) | `Q82` · V2/F | 162 | L | 0.162 | [l] | not captured | exact (1.0) | prp2684-tbl-0003:row5:col1, prp2684-tbl-0003:row5:col2 | — | not captured |
| ka (h–1) | `Q49` · kabs | 0.742 | h–1 | 0.00020611111111111112 | [1] / [h] | not captured | exact (1.0) | prp2684-tbl-0003:row8:col1, prp2684-tbl-0003:row8:col2 | — | not captured |
| ALAG (h) | `Q83` · tlag | 0.834 | h | 3002.4 | [h] | not captured | exact (1.0) | prp2684-tbl-0003:row9:col1, prp2684-tbl-0003:row9:col2 | — | not captured |
| Q/F (L h–1) | `Q69` · Q/F | 98.1 | L h–1 | 2.7249999999999998e-05 | [l] / [h] | not captured | exact (1.0) | prp2684-tbl-0003:row10:col1, prp2684-tbl-0003:row10:col2 | — | not captured |
| V3/F (L) | `Q78` · V3/F | 174 | L | 0.17400000000000002 | [l] | not captured | exact (1.0) | prp2684-tbl-0003:row11:col1, prp2684-tbl-0003:row11:col2 | — | not captured |
| F1 | `Q40` · Fab | 1.12 | A | not captured | [a] | not captured | exact (1.0) | prp2684-tbl-0003:row13:col1, prp2684-tbl-0003:row13:col2 | — | not captured |
| AUC/D (ng h mL–1 mg–1) | `Q189` · AUC/dose | 96.70 | ng h mL–1 mg–1 | not captured | [[h] · [ng]] / [[mg] · [ml]] | not captured | exact (1.0) | Tannenbaum_2020_table_4:row1:col1, Tannenbaum_2020_table_4:row1:col2, Tannenbaum_2020_table_4:row1:col3 | — | not captured |
| Cmax/D (ng mL–1 mg–1) | `Q174` · Cmax/dose | 5.744 | ng mL–1 mg–1 | not captured | [ng] / [[mg] · [ml]] | not captured | llm (0.6) | Tannenbaum_2020_table_4:row2:col1, Tannenbaum_2020_table_4:row2:col2, Tannenbaum_2020_table_4:row2:col3 | — | not captured |
| t1/2 (h) | `Q57` · t1/2z | 26.75 | h | 96300.0 | [h] | not captured | exact (1.0) | Tannenbaum_2020_table_4:row4:col1, Tannenbaum_2020_table_4:row4:col2, Tannenbaum_2020_table_4:row4:col3 | — | not captured |
| Vz/F (L) | `Q76` · V/F | 300.9 | L | 0.3009 | [l] | not captured | exact (1.0) | Tannenbaum_2020_table_4:row6:col1, Tannenbaum_2020_table_4:row6:col2, Tannenbaum_2020_table_4:row6:col3 | — | not captured |
| Ctrough/D (ng mL–1 mg–1) | `Q37` · Ctrough | 3.184 | ng mL–1 mg–1 | not captured | [ng] / [[mg] · [ml]] | not captured | llm (0.6) | Tannenbaum_2020_table_4:row7:col1, Tannenbaum_2020_table_4:row7:col2, Tannenbaum_2020_table_4:row7:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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
- status held at route_to_review — not promoted

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
| `gpt-oss-120b` | `parameters[alag]` | 0.834 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[alag]` | not captured | 0.834 | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc/d]` | 96.70 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc/d]` | not captured | 96.70 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | 8.81 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | not captured | 8.81 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax/d]` | 5.744 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax/d]` | not captured | 5.744 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ctrough/d]` | 3.184 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ctrough/d]` | not captured | 3.184 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f1]` | 1.12 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[f1]` | not captured | 1.12 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 0.742 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | not captured | 0.742 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f]` | 98.1 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f]` | not captured | 98.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2]` | 26.75 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2]` | not captured | 26.75 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2/f]` | 162 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2/f]` | not captured | 162 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3/f]` | 174 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3/f]` | not captured | 174 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vz/f]` | 300.9 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vz/f]` | not captured | 300.9 | only_one_extracted |
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
| C0_has_structural_params | pass | not captured | 12 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | pass | 38.0 | 36.829 | 0.9692 | 0.25 | reported t½β |
| C5_dimension_Q174 | fail | 1 / [length] ** 3 | ng mL–1 mg–1 | not captured | not captured | ['Tannenbaum_2020_table_4:row2:col1', 'Tannenbaum_2020_table_4:row2:col2', 'Tannenbaum_2020_table_4:row2:col3'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['prp2684-tbl-0003:row2:col1', 'prp2684-tbl-0003:row2:col2', 'Tannenbaum_2020_table_4:row5:col1', 'Tannenbaum_2020_table_4:row5:col2', 'Tannenbaum_2020_table_4:row5:col3'] |
| C5_dimension_Q37 | fail | 1 / [length] ** 3 | ng mL–1 mg–1 | not captured | not captured | ['Tannenbaum_2020_table_4:row7:col1', 'Tannenbaum_2020_table_4:row7:col2', 'Tannenbaum_2020_table_4:row7:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['prp2684-tbl-0003:row8:col1', 'prp2684-tbl-0003:row8:col2'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Tannenbaum_2020_table_4:row4:col1', 'Tannenbaum_2020_table_4:row4:col2', 'Tannenbaum_2020_table_4:row4:col3'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['prp2684-tbl-0003:row10:col1', 'prp2684-tbl-0003:row10:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tannenbaum_2020_table_4:row6:col1', 'Tannenbaum_2020_table_4:row6:col2', 'Tannenbaum_2020_table_4:row6:col3'] |
| C5_dimension_Q78 | pass | [length] ** 3 | not captured | not captured | not captured | ['prp2684-tbl-0003:row11:col1', 'prp2684-tbl-0003:row11:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['prp2684-tbl-0003:row5:col1', 'prp2684-tbl-0003:row5:col2'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['prp2684-tbl-0003:row9:col1', 'prp2684-tbl-0003:row9:col2'] |
| C5_unit_missing_Q189 | fail | [mass] * [time] / [length] ** 3 | ng h mL–1 mg–1 | not captured | not captured | ['Tannenbaum_2020_table_4:row1:col1', 'Tannenbaum_2020_table_4:row1:col2', 'Tannenbaum_2020_table_4:row1:col3'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 8.81 L/h | not captured | not captured | ['prp2684-tbl-0003:row2:col1', 'prp2684-tbl-0003:row2:col2', 'Tannenbaum_2020_table_4:row5:col1', 'Tannenbaum_2020_table_4:row5:col2', 'Tannenbaum_2020_table_4:row5:col3'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 301 L | not captured | not captured | ['Tannenbaum_2020_table_4:row6:col1', 'Tannenbaum_2020_table_4:row6:col2', 'Tannenbaum_2020_table_4:row6:col3'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 162 L | not captured | not captured | ['prp2684-tbl-0003:row5:col1', 'prp2684-tbl-0003:row5:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_solifenacin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Tannenbaum_2020` / `Tannenbaum_2020::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 09:09 UTC</sub>
