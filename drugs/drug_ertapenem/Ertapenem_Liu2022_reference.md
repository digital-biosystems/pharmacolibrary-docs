<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;ertapenem&quot;,&quot;href&quot;:&quot;drugs/drug_ertapenem/&quot;},{&quot;label&quot;:&quot;Liu_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ertapenem_Chauzy2022_reference&quot;,&quot;label&quot;:&quot;Chauzy_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ertapenem/Ertapenem_Chauzy2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ertapenem_Muangkasem2025_reference&quot;,&quot;label&quot;:&quot;Muangkasem_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ertapenem/Ertapenem_Muangkasem2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ertapenem_Wittau2017_reference&quot;,&quot;label&quot;:&quot;Wittau_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ertapenem/Ertapenem_Wittau2017_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ertapenem_Cardone2012_reference&quot;,&quot;label&quot;:&quot;Cardone_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ertapenem/Ertapenem_Cardone2012_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ertapenem_Chen2024_reference&quot;,&quot;label&quot;:&quot;Chen_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ertapenem/Ertapenem_Chen2024_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ertapenem — `Ertapenem_Liu2022_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.625). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The ertapenem model was rejected because the volume of distribution parameter was assigned a clearance unit of L/h.**

The parameter identified as the volume of distribution (V) has a unit verbatim of L/h. This is dimensionally inconsistent with a volume, which should be expressed in liters. The clearance (CL) and intercompartmental clearance (Q) parameters are correctly assigned units of L/h. Extracted — unknown: Q 16.2 L/h, CL 66.2 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of clindamycin44: this record has 66.2, the second reading none; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Liu L et al., Model-Informed Precision Dosing of Anti…, Infection and drug resistan… (2022)
  ·  DOI: [10.2147/idr.s332366](https://doi.org/10.2147/idr.s332366)

<div class="pk-model-meta" hidden drug="ertapenem" model-id="Ertapenem_Liu2022_reference" status="rejected" stale="false" population="osteoarticular infection patients" measured-compound="unknown" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 2 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Cloxacillin36 | `Q30` · Q | 16.2 | L/h | 4.5e-06 | [l] / [h] | not captured | llm (0.6) | t0002:row2:col1, t0002:row2:col3, t0002:row2:col4 | — | not captured |
| Clindamycin44 | `Q22` · CL | 66.2 | L/h | 1.838888888888889e-05 | [l] / [h] | not captured | llm (0.6) | t0002:row4:col1, t0002:row4:col2, t0002:row4:col4, t0002:row4:col5 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| Dalbavancin63 | Q61 | not captured | llm |

## Departures & gaps

**Interpretation flags:**
- column 'dosing recommendations for oai patients' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'target' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Cephalexin41' — extend the ontology if this is a real PK parameter (source ['t0002:row3:col1', 't0002:row3:col2', 't0002:row3:col3', 't0002:row3:col4'])
- dropped duplicate Q30 ('Ciprofloxacin49', value '20.7') — already have one for this compound
- dropped duplicate Q22 ('Ciprofloxacin50', value None) — already have one for this compound
- dropped duplicate Q22 ('Levofloxacin55', value None) — already have one for this compound
- dropped duplicate Q22 ('Rifampicin58', value None) — already have one for this compound
- unit_dimension_mismatch: 'Dalbavancin63' → Q61 (unit '[length] ** 3 / [time]' vs ontology '[length] ** 3') — route to review
- dropped unlinked row (NIL): 'Dalbavancin64' — extend the ontology if this is a real PK parameter (source ['t0002:row10:col1', 't0002:row10:col4', 't0002:row10:col5'])
- dropped unlinked row (NIL): 'Daptomycin69' — extend the ontology if this is a real PK parameter (source ['t0002:row11:col1', 't0002:row11:col3', 't0002:row11:col4', 't0002:row11:col5'])
- dropped unlinked row (NIL): 'Daptomycin70' — extend the ontology if this is a real PK parameter (source ['t0002:row12:col1', 't0002:row12:col3', 't0002:row12:col4', 't0002:row12:col5'])
- dropped unlinked row (NIL): 'Ertapenem72' — extend the ontology if this is a real PK parameter (source ['t0002:row13:col1', 't0002:row13:col4'])
- dropped duplicate Q22 ('Ertapenem73', value '0.055') — already have one for this compound
- dropped unlinked row (NIL): 'Fosfomycin80' — extend the ontology if this is a real PK parameter (source ['t0002:row15:col1', 't0002:row15:col3', 't0002:row15:col4'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=unknown
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted
- molar mass: no plausible PubChem entry for 'unknown' ('no full name in the paper') — left in mass units
- molar mass: none found for 'unknown' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'unknown', not ertapenem — the review values are the parent's

**Extraction notes:**
- unparsed cell t0002:row2:col2 = 'V1:16.0V2:2.7'
- unparsed cell t0002:row2:col5 = '50% fT&gt;MIC'
- unparsed cell t0002:row3:col5 = '40% fT &gt; MIC'
- unparsed cell t0002:row4:col3 = '600–900 mg, q8 h, iv'
- unparsed cell t0002:row5:col2 = 'V1:5.85'
- unparsed cell t0002:row8:col3 = '300 mg, tid, po'
- unparsed cell t0002:row9:col3 = '1500 mg, single, iv; 1000 mg followed one week later by 500 mg, iv'
- unparsed cell t0002:row10:col2 = 'V1:17.40V2:15.10'
- unparsed cell t0002:row10:col3 = '1500 mg, single, iv; 1000 mg followed one week later by 500 mg, iv'
- unparsed cell t0002:row11:col2 = 'V1:10.1V2:3.39'
- unparsed cell t0002:row12:col2 = 'V1:3.59V2:4.71'
- unparsed cell t0002:row13:col2 = 'V1:5.72V2:4.77'
- unparsed cell t0002:row13:col3 = '1 g, qd, iv'
- unparsed cell t0002:row13:col5 = '50%fT &gt; MIC'
- unparsed cell t0002:row14:col2 = 'V1:6.091'
- unparsed cell t0002:row14:col3 = '1 g, qd, iv'
- unparsed cell t0002:row14:col5 = '40%fT &gt; MIC'
- unparsed cell t0002:row15:col2 = 'V1:6.4'
- unparsed cell t0002:row15:col5 = '70%T&gt; MIC'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.625 (5/8 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[clindamycin44]` | 66.2 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cloxacillin36].parameter_id` | Q30 | Q22 | mismatch |
| `gpt-oss-120b` | `parameters[dalbavancin63]` | not captured | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 2 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['t0002:row4:col1', 't0002:row4:col2', 't0002:row4:col4', 't0002:row4:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['t0002:row2:col1', 't0002:row2:col3', 't0002:row2:col4'] |
| C5_dimension_Q61 | fail | [length] ** 3 / [time] | L/h | not captured | not captured | ['t0002:row9:col4', 't0002:row9:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 66.2 | not captured | not captured | ['t0002:row4:col1', 't0002:row4:col2', 't0002:row4:col4', 't0002:row4:col5'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 66.2 L/h | not captured | not captured | ['t0002:row4:col1', 't0002:row4:col2', 't0002:row4:col4', 't0002:row4:col5'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_ertapenem/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Liu_2022` / `Liu_2022::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 10:51 UTC</sub>
