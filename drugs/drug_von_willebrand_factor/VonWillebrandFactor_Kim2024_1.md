<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;von Willebrand factor&quot;,&quot;href&quot;:&quot;drugs/drug_von_willebrand_factor/&quot;},{&quot;label&quot;:&quot;Kim_2024 \u00b7 1&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;VonWillebrandFactor_Schning2026_reference&quot;,&quot;label&quot;:&quot;Sch\u00f6ning_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_von_willebrand_factor/VonWillebrandFactor_Schning2026_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;VonWillebrandFactor_Valke2024_reference&quot;,&quot;label&quot;:&quot;Valke_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_von_willebrand_factor/VonWillebrandFactor_Valke2024_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;VonWillebrandFactor_Wong2025_reference&quot;,&quot;label&quot;:&quot;Wong_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_von_willebrand_factor/VonWillebrandFactor_Wong2025_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;VonWillebrandFactor_Zhu2020_reference&quot;,&quot;label&quot;:&quot;Zhu_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_von_willebrand_factor/VonWillebrandFactor_Zhu2020_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;VonWillebrandFactor_Al2025_final&quot;,&quot;label&quot;:&quot;Al_2025_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_von_willebrand_factor/VonWillebrandFactor_Al2025_final.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# von Willebrand factor — `VonWillebrandFactor_Kim2024_1`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.167). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The record for factor VIII (from von willebrand factor, Kim_2024) was rejected because the estimates table was mis-split — column '1' is a table statistic, not a study population — and the extracted clearance (0.000242 L/h) and absorption rate constant (1530890000 1/h) are physiologically implausible, indicating a unit/scale extraction error.**

The table was split into one record per column, and '1' holds a statistic rather than a second set of estimates, so the population attribution is wrong. The clearance of 0.000242 L/h and absorption rate constant of 1530890000 1/h for factor VIII fall far outside physiological windows, consistent with a unit or scale extraction error; the volume 8.35 L was also flagged. A second reader disagreed on which compound was measured (factor VIII versus von willebrand factor) and on the dose compound (BT200), and the parameter values themselves were disputed between readers. Extracted — factor VIII: CL 0.000242 L/h, V 8.35 L, kabs 1.53e+09.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has BT200, the second reading unknown; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-09-28 14:42:07.977194+00:00) predates the upstream re-run (2026-10-05 20:03:17.912725+00:00). Current validate status: `rejected`.

> **Dose compound ≠ measured compound:** dosed `BT200`, measured `factor VIII`.

## Citation
Kim MS et al., Kinetic Modeling for BT200 to Predict t…, The AAPS journal (2024)
  ·  DOI: [10.1208/s12248-024-00952-4](https://doi.org/10.1208/s12248-024-00952-4)

<div class="pk-model-meta" hidden drug="von Willebrand factor" model-id="VonWillebrandFactor_Kim2024_1" status="rejected" stale="true" population="humans" measured-compound="factor VIII" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 3 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| θCL (L/h) | `Q22` · CL | 0.000242 | L/h | 6.722222222222223e-11 | [l] / [h] | not captured | llm_confirmed (0.6) | Kim_2024_table_p12_1:row8:col1 | — | not captured |
| θV1 (L) | `Q61` · V | 8.35 | L | 0.00835 | [l] | not captured | llm_confirmed (0.6) | Kim_2024_table_p12_1:row9:col1 | — | not captured |
| θka (1/h) | `Q49` · kabs | 1530890000 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | Kim_2024_table_p12_1:row12:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column '1' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'OBS1)' — extend the ontology if this is a real PK parameter (source ['Kim_2024_table_p12_1:row0:col1'])
- dropped unlinked row (NIL): 'INDS2)' — extend the ontology if this is a real PK parameter (source ['Kim_2024_table_p12_1:row1:col1'])
- dropped unlinked row (NIL): 'RECS3)' — extend the ontology if this is a real PK parameter (source ['Kim_2024_table_p12_1:row2:col1'])
- dropped unlinked row (NIL): 'OBJ4)' — extend the ontology if this is a real PK parameter (source ['Kim_2024_table_p12_1:row3:col1'])
- dropped unlinked row (NIL): 'AIC5)' — extend the ontology if this is a real PK parameter (source ['Kim_2024_table_p12_1:row4:col1'])
- dropped unlinked row (NIL): 'BIC6)' — extend the ontology if this is a real PK parameter (source ['Kim_2024_table_p12_1:row5:col1'])
- dropped unlinked row (NIL): 'Øη1' — extend the ontology if this is a real PK parameter (source ['Kim_2024_table_p12_1:row7:col1'])
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (θCL (L/h)); Q63 (θV1 (L))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=factor VIII
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'θV1 (L)' is the general volume)
- population split: '1' subgroup of Kim_2024 (paper reports 14 populations: 1, 10, 11, 12, 13, 14, 2, 3, 4, 5, 6, 7, 8, 9)
- review gap-fill skipped: this record measures 'factor VIII', not von_willebrand_factor — the review values are the parent's

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- transposed table Kim_2024_table_p12_1: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Kim_2024_table_p12_1:row13:col7 = '0.0493 [5.09]'
- unparsed cell Kim_2024_table_p12_1:row13:col10 = '0.130 [0.856]'
- unparsed cell Kim_2024_table_p12_1:row13:col11 = '0.0870 [2.24]'
- unparsed cell Kim_2024_table_p12_1:row13:col12 = '0.101 [4.35]'
- unparsed cell Kim_2024_table_p12_1:row13:col13 = '0.146 [2.70]'
- unparsed cell Kim_2024_table_p12_1:row13:col14 = '0.166 [1.81]'
- unparsed cell Kim_2024_table_p12_1:row14:col8 = '0.0656 [0.859]'
- unparsed cell Kim_2024_table_p12_1:row14:col10 = '0.167 [3.53]'
- unparsed cell Kim_2024_table_p12_1:row14:col12 = '0.0931 [13.8]'
- unparsed cell Kim_2024_table_p12_1:row14:col13 = '0.162 [5.35]'
- unparsed cell Kim_2024_table_p12_1:row14:col14 = '0.266 [7.31]'
- unparsed cell Kim_2024_table_p12_1:row15:col9 = '0.520 [16.9]'
- unparsed cell Kim_2024_table_p12_1:row15:col11 = '0.428 [14.0]'
- unparsed cell Kim_2024_table_p12_1:row15:col12 = '0.292 [30.9]'
- unparsed cell Kim_2024_table_p12_1:row15:col13 = '0.189 [26.5]'
- unparsed cell Kim_2024_table_p12_1:row15:col14 = '0.264 [85.4]'
- unparsed cell Kim_2024_table_p12_1:row17:col2 = '0.400 [0.888]'
- unparsed cell Kim_2024_table_p12_1:row17:col3 = '0.400 [1e-10]'
- unparsed cell Kim_2024_table_p12_1:row17:col5 = '0.317 [1e-10]'
- unparsed cell Kim_2024_table_p12_1:row17:col6 = '0.400 [1e-10]'
- unparsed cell Kim_2024_table_p12_1:row17:col7 = '0.217 [2.75]'
- unparsed cell Kim_2024_table_p12_1:row17:col8 = '0.252 [6.21]'
- unparsed cell Kim_2024_table_p12_1:row17:col9 = '0.238 [4.76]'
- unparsed cell Kim_2024_table_p12_1:row17:col10 = '0.137 [6.17]'
- unparsed cell Kim_2024_table_p12_1:row17:col11 = '0.148 [4.47]'
- unparsed cell Kim_2024_table_p12_1:row17:col12 = '0.133 [7.91]'
- unparsed cell Kim_2024_table_p12_1:row17:col13 = '0.127 [7.30]'
- unparsed cell Kim_2024_table_p12_1:row17:col14 = '0.273 [4.54]'
- unparsed cell Kim_2024_table_p12_1:row18:col1 = '1756240 [1e-10]'
- unparsed cell Kim_2024_table_p12_1:row18:col3 = '0 [1e-10]'
- unparsed cell Kim_2024_table_p12_1:row18:col4 = '201557 [1e-10]'
- unparsed cell Kim_2024_table_p12_1:row18:col6 = '0 [1e-10]'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.167 (2/12 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[θcl]` | 0.000242 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[θcl]` | not captured | 0.000242 | only_one_extracted |
| `gpt-oss:120b` | `parameters[θka]` | 1530890000 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[θka]` | not captured | 1530890000 | only_one_extracted |
| `gpt-oss:120b` | `parameters[θq]` | not captured | 62.7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[θv1]` | 8.35 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[θv1]` | not captured | 8.35 | only_one_extracted |
| `gpt-oss:120b` | `parameters[θv2]` | not captured | 3.14 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | BT200 | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | factor VIII | von_willebrand_factor | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Kim_2024_table_p12_1:row8:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Kim_2024_table_p12_1:row9:col1'] |
| C5_unit_missing_Q49 | fail | 1 / [time] | not captured | not captured | not captured | ['Kim_2024_table_p12_1:row12:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.000242 | not captured | not captured | ['Kim_2024_table_p12_1:row8:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | fail | clearance within physiological range | 0.000242 L/h | not captured | not captured | ['Kim_2024_table_p12_1:row8:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 8.35 L | not captured | not captured | ['Kim_2024_table_p12_1:row9:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_von_willebrand_factor/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kim_2024` / `Kim_2024::1`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-05 20:03 UTC</sub>
