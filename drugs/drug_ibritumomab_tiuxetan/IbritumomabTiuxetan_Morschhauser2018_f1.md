<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V10X&quot;,&quot;href&quot;:&quot;atc/V10X.md&quot;},{&quot;label&quot;:&quot;ibritumomab tiuxetan&quot;,&quot;href&quot;:&quot;drugs/drug_ibritumomab_tiuxetan/&quot;},{&quot;label&quot;:&quot;Morschhauser_2018 \u00b7 f1&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ibritumomab tiuxetan — `IbritumomabTiuxetan_Morschhauser2018_f1`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:38 UTC (Rejected), but the paper was screened again on 2026-10-07 16:46 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. The record was rejected because clearance for ibritumomab tiuxetan was reported as 1.03 ml.min, a unit missing the per-time denominator expected of clearance, so no SI value could be computed and a dimension mismatch on a structural parameter was flagged.

<div class="pk-model-meta" hidden drug="ibritumomab tiuxetan" model-id="IbritumomabTiuxetan_Morschhauser2018_f1" status="rejected" stale="true" population="patients with follicular lymphoma" measured-compound="ibritumomab tiuxetan" parameterization="mechanistic" topology="1C"></div>

## Citation
Morschhauser F, Dekyndt B, Baillet C, Barthélémy C, Malek E, Fulcrand J et al. A new pharmacokinetic model for 90Y-ibritumomab tiuxetan based on 3-dimensional dosimetry. Scientific reports 8(1):14860 (2018).
  ·  DOI: [10.1038/s41598-018-33160-0](https://doi.org/10.1038/s41598-018-33160-0)

## Population and dosing

**Population:** patients with follicular lymphoma · condition follicular lymphoma · age group adult.

**Dosing:** 11.1 MBq/kg, iv, multiple, every 504 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax* (µg.mL−1) | Cmax | 0.308 | µg.mL−1 |
| T1/2* (h) | t1/2z | 83.6 | h |
| MRT* (h) | MRT | 114.1 | h |
| Clearance* (ml.min) | CL | 1.03 | ml.min |
| AUC Total* (µg.min.mL−1) | AUC | 1708.1 | µg.min.mL−1 |
| AUCcum 4d* (µg.min.mL−1) | AUCt | 261.98 | µg.min.mL−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was rejected because clearance for ibritumomab tiuxetan was reported as 1.03 ml.min, a unit missing the per-time denominator expected of clearance, so no SI value could be computed and a dimension mismatch on a structural parameter was flagged.**

The clearance parameter (CL, total clearance) carries the verbatim unit ml.min, which lacks the per-time denominator expected of clearance and could not be converted to SI units, so the parameter entered the model without an SI value and failed the dimension check. The other reported parameters (Cmax 0.308 µg.mL−1, terminal half-life 83.6 h, MRT 114.1 h, AUC 1708.1 µg.min.mL−1, AUCt 261.98 µg.min.mL−1) carry no such unit problem. A second reader also disagreed on the analyte naming (ibritumomab tiuxetan vs ibritumomab_tiuxetan), the classification of the two AUC parameters, and reported three additional parameters (AUCcum 7d 558.03, blood 4131.0, vertebrae L2-L4 7.84) absent from this record. Extracted — ibritumomab tiuxetan: Cmax 0.308 µg.mL−1, t1/2z 83.6 h, MRT 114 h, CL 1.03 ml.min, AUC 1.71e+03 µg.min.mL−1, AUCt 262 µg.min.mL−1.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has ibritumomab tiuxetan, the second reading 90Y-ibritumomab tiuxetan; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax* (µg.mL−1) | `Q32` · Cmax | 0.308 | µg.mL−1 |  |  | µg/ml | llm_confirmed (0.6) | Morschhauser_2018_table_3:row1:col1, Morschhauser_2018_table_3:row1:col2, Morschhauser_2018_table_3:row7:col1, Morschhauser_2018_table_3:row7:col2, Morschhauser_2018_table_3:row14:col1, Morschhauser_2018_table_3:row14:col2, Morschhauser_2018_table_3:row21:col1, Morschhauser_2018_table_3:row21:col2 |
| T1/2* (h) | `Q57` · t1/2z | 83.6 | h | 3.01e+05 | s | h | llm_confirmed (0.6) | Morschhauser_2018_table_3:row2:col1, Morschhauser_2018_table_3:row2:col2 |
| MRT* (h) | `Q53` · MRT | 114.1 | h | 4.108e+05 | s | h | llm_confirmed (0.6) | Morschhauser_2018_table_3:row3:col1, Morschhauser_2018_table_3:row3:col2, Morschhauser_2018_table_3:row10:col1, Morschhauser_2018_table_3:row10:col2, Morschhauser_2018_table_3:row17:col1, Morschhauser_2018_table_3:row17:col2, Morschhauser_2018_table_3:row24:col1, Morschhauser_2018_table_3:row24:col2 |
| Clearance* (ml.min) | `Q22` · CL | 1.03 | ml.min | 1.717e-08 | m3/s | min·ml | llm_confirmed (0.6) | Morschhauser_2018_table_3:row4:col1, Morschhauser_2018_table_3:row4:col2 |
| AUC Total* (µg.min.mL−1) | `Q88` · AUC | 1708.1 | µg.min.mL−1 |  |  | (min·µg)/ml | llm_confirmed (0.6) | Morschhauser_2018_table_3:row5:col1, Morschhauser_2018_table_3:row5:col2 |
| AUCcum 4d* (µg.min.mL−1) | `Q19` · AUCt | 261.98 | µg.min.mL−1 |  |  | (min·µg)/ml | llm (0.6) | Morschhauser_2018_table_3:row11:col1, Morschhauser_2018_table_3:row11:col2, Morschhauser_2018_table_3:row18:col1, Morschhauser_2018_table_3:row18:col2, Morschhauser_2018_table_3:row25:col1, Morschhauser_2018_table_3:row25:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Blood' — extend the ontology if this is a real PK parameter (source ['Morschhauser_2018_table_3:row0:col2'])
- unit_dimension_mismatch: 'Clearance* (ml.min)' → Q22 (unit '[length] ** 3 * [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped unlinked row (NIL): 'Vertebrae L2-L4' — extend the ontology if this is a real PK parameter (source ['Morschhauser_2018_table_3:row6:col2'])
- dropped duplicate Q19 ('AUCcum 7d* (µg.min.mL−1)', value '558.03') — already have one for this compound
- dropped unlinked row (NIL): 'Liver' — extend the ontology if this is a real PK parameter (source ['Morschhauser_2018_table_3:row13:col2'])
- dropped unlinked row (NIL): 'Spleen' — extend the ontology if this is a real PK parameter (source ['Morschhauser_2018_table_3:row20:col2'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ibritumomab tiuxetan
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'f1' subgroup of Morschhauser_2018 (paper reports 5 populations: f1, f2, liver, lumbar vertebrae l2-l4, spleen)
- molar mass: none found for 'ibritumomab_tiuxetan' — its concentrations stay mass-only
- molar mass: none found for 'ibritumomab tiuxetan' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell Morschhauser_2018_table_3:row8:col1 = '1.11 E-4 (1.31 E-4)'
- unparsed cell Morschhauser_2018_table_3:row8:col2 = '0.60 E-4 (0.55 E-4)'
- unparsed cell Morschhauser_2018_table_3:row9:col1 = '1.05 E-4 (0.55 E-4)'
- unparsed cell Morschhauser_2018_table_3:row9:col2 = '0.96 E-4 (0.57 E-4)'
- unparsed cell Morschhauser_2018_table_3:row15:col1 = '1.80 E-4 (0.60 E-4)'
- unparsed cell Morschhauser_2018_table_3:row15:col2 = '2.05 E-4 (1.70 E-4)'
- unparsed cell Morschhauser_2018_table_3:row16:col1 = '2.32 E-4 (1.07 E-4)'
- unparsed cell Morschhauser_2018_table_3:row16:col2 = '1.77 E-4 (0.25 E-4)'
- unparsed cell Morschhauser_2018_table_3:row22:col1 = '2.11 E-4 (1.39 E-4)'
- unparsed cell Morschhauser_2018_table_3:row22:col2 = '1.17 E-4 (0.52 E-4)'
- unparsed cell Morschhauser_2018_table_3:row23:col1 = '1.26 E-4 (0.50 E-4)'
- unparsed cell Morschhauser_2018_table_3:row23:col2 = '1.64 E-4 (0.40 E-4)'
- companion parameter table 3 transcribed (69 record(s))
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.5 (8/16 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[blood in corresponding volume*]` |  | 8.15 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k12*]` |  | 0.033 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k13*]` |  | 0.738 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k21*]` |  | 0.516 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k31*]` |  | 0.167 | only_one_extracted |
| `gpt-oss:120b` | `parameters[liver]` |  | 489.61 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | ibritumomab tiuxetan | 90Y-ibritumomab tiuxetan | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | ibritumomab tiuxetan | 111In-ibritumomab tiuxetan | mismatch |

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
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['Morschhauser_2018_table_3:row11:col1', 'Morschhauser_2018_table_3:row11:col2', 'Morschhauser_2018_table_3:row18:col1', 'Morschhauser_2018_table_3:row18:col2', 'Morschhauser_2018_table_3:row25:col1', 'Morschhauser_2018_table_3:row25:col2'] |
| C5_dimension_Q22 | fail | [length] ** 3 * [time] | ml.min | ['Morschhauser_2018_table_3:row4:col1', 'Morschhauser_2018_table_3:row4:col2'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Morschhauser_2018_table_3:row1:col1', 'Morschhauser_2018_table_3:row1:col2', 'Morschhauser_2018_table_3:row7:col1', 'Morschhauser_2018_table_3:row7:col2', 'Morschhauser_2018_table_3:row14:col1', 'Morschhauser_2018_table_3:row14:col2', 'Morschhauser_2018_table_3:row21:col1', 'Morschhauser_2018_table_3:row21:col2'] |
| C5_dimension_Q53 | pass | [time] |  | ['Morschhauser_2018_table_3:row3:col1', 'Morschhauser_2018_table_3:row3:col2', 'Morschhauser_2018_table_3:row10:col1', 'Morschhauser_2018_table_3:row10:col2', 'Morschhauser_2018_table_3:row17:col1', 'Morschhauser_2018_table_3:row17:col2', 'Morschhauser_2018_table_3:row24:col1', 'Morschhauser_2018_table_3:row24:col2'] |
| C5_dimension_Q57 | pass | [time] |  | ['Morschhauser_2018_table_3:row2:col1', 'Morschhauser_2018_table_3:row2:col2'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['Morschhauser_2018_table_3:row5:col1', 'Morschhauser_2018_table_3:row5:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.03 | ['Morschhauser_2018_table_3:row4:col1', 'Morschhauser_2018_table_3:row4:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0618 L/h | ['Morschhauser_2018_table_3:row4:col1', 'Morschhauser_2018_table_3:row4:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bibritumomab_tiuxetan%5D%20IbritumomabTiuxetan_Morschhauser2018_f1&body=Drug%3A%20ibritumomab_tiuxetan%0ARecord%3A%20IbritumomabTiuxetan_Morschhauser2018_f1%0APaper%3A%20Morschhauser_2018%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_ibritumomab_tiuxetan/IbritumomabTiuxetan_Morschhauser2018_f1%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 16:46 UTC</sub>
