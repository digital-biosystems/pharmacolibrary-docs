<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05B&quot;,&quot;href&quot;:&quot;atc/N05B.md&quot;},{&quot;label&quot;:&quot;diazepam&quot;,&quot;href&quot;:&quot;drugs/drug_diazepam/&quot;},{&quot;label&quot;:&quot;Klotz_1975 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Diazepam_Aurlie2023_reference&quot;,&quot;label&quot;:&quot;Aur\u00e9lie_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_diazepam/Diazepam_Aurlie2023_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Diazepam_Wang2022_reference&quot;,&quot;label&quot;:&quot;Wang_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_diazepam/Diazepam_Wang2022_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# diazepam — `Diazepam_Klotz1975_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.267), gpt-oss:120b (not confirmed, agreement 0.167). The first reading is what the record holds.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The diazepam record from Klotz_1975 was rejected because the absorption lag time tlag is recorded as 84.2 h, a dimensionally implausible value for a structural parameter, and the terminal half-life t1/2β carries the unconvertible unit 'B'.**

The lag time of 84.2 h for diazepam absorption is a dimension mismatch on a structural parameter, far outside any plausible absorption delay, so the record failed the dimensional check. The terminal half-life t1/2β (47.4) was reported with unit 'B', which could not be converted to SI, so the parameter reached the model without an SI value. A second reader also read several table entries differently, assigning 59.6 and 94.2 to two parameters left empty in this record and null to the half-life, clearance, and volume values, leaving the extraction inconclusive for those entries. Extracted — diazepam: t1/2β 47.4 B, CL 13 ml/min, CLb 24.8 ml/min, V 1.13 liter/kg, kabs 1.21 h−1, tlag 84.2 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of b. s.: this record has none, the second reading 5.0; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-10-05 09:26:28.883847+00:00) predates the upstream re-run (2026-10-06 19:05:35.549118+00:00). Current validate status: `rejected`.

## Citation
Klotz U et al., The effects of age and liver disease on…, The Journal of clinical inv… (1975)
  ·  DOI: [10.1172/JCI107938](https://doi.org/10.1172/JCI107938)

## Model component
<dbs-pgx drug="diazepam" model-id="Diazepam_Klotz1975_reference" status="rejected" stale="true" population="healthy adults and patients with liver disease" measured-compound="diazepam" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 6 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| B. S.* | `Q900` · equation variable | 70.8 | B | not captured | [b] | not captured | llm (0.6) | Klotz_1975_table_p9_1:row1:col1, Klotz_1975_table_p9_1:row1:col2, Klotz_1975_table_p9_1:row1:col3, Klotz_1975_table_p9_1:row1:col4, Klotz_1975_table_p9_1:row1:col5, Klotz_1975_table_p9_1:row1:col6 | — | not captured |
| M. C.† | `Q60` · t1/2β | 62.2 | B | not captured | [b] | not captured | llm (0.6) | Klotz_1975_table_p9_1:row4:col1, Klotz_1975_table_p9_1:row4:col2, Klotz_1975_table_p9_1:row4:col3, Klotz_1975_table_p9_1:row4:col4, Klotz_1975_table_p9_1:row4:col5, Klotz_1975_table_p9_1:row4:col6 | — | not captured |
| drug clearance (chronic active hepatitis, individual 1) | `Q22` · CL | 13.0 | ml/min | 2.1666666666666665e-07 | L/h | not captured | boundary (0.8) | Klotz_1975:other_prose | — | not captured |
| calculated blood clearance of diazepam | `Q23` · CLb | 24.8 | ml/min | 4.1333333333333333e-07 | L/h | not captured | boundary (0.8) | Klotz_1975:other_prose | — | not captured |
| Vd(area)/kg, | `Q61` · V | 1.13 | liter/kg | 0.07909999999999999 | L | not captured | boundary (0.8) | Klotz_1975:discussion_prose | — | not captured |
| Ka * (h−1) | `Q49` · kabs | 1.03 | h−1 | 0.0002861111111111111 | 1/h | not captured | review_gapfill (0.7) | Aurélie_2023:review | — | not captured |
| Tlag (h) | `Q83` · tlag | 0.186 | h | 669.6 | h | not captured | review_gapfill (0.7) | Aurélie_2023:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 't1/2(b)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'bilirubin' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'ldh' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'sgot' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'alkaline phosphatase' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'albumin' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'B. S.†' — extend the ontology if this is a real PK parameter (source ['Klotz_1975_table_p9_1:row2:col1', 'Klotz_1975_table_p9_1:row2:col2', 'Klotz_1975_table_p9_1:row2:col3', 'Klotz_1975_table_p9_1:row2:col4', 'Klotz_1975_table_p9_1:row2:col5', 'Klotz_1975_table_p9_1:row2:col6'])
- dropped unlinked row (NIL): 'M. C.*' — extend the ontology if this is a real PK parameter (source ['Klotz_1975_table_p9_1:row3:col1', 'Klotz_1975_table_p9_1:row3:col2', 'Klotz_1975_table_p9_1:row3:col3', 'Klotz_1975_table_p9_1:row3:col4', 'Klotz_1975_table_p9_1:row3:col5', 'Klotz_1975_table_p9_1:row3:col6'])
- unit_dimension_mismatch: 'M. C.†' → Q60 (unit '[length] ** 2' vs ontology '[time]') — route to review
- dropped unlinked row (NIL): 'J. H.*' — extend the ontology if this is a real PK parameter (source ['Klotz_1975_table_p9_1:row5:col1', 'Klotz_1975_table_p9_1:row5:col2', 'Klotz_1975_table_p9_1:row5:col3', 'Klotz_1975_table_p9_1:row5:col4', 'Klotz_1975_table_p9_1:row5:col5', 'Klotz_1975_table_p9_1:row5:col6'])
- dropped unlinked row (NIL): 'J. H.†' — extend the ontology if this is a real PK parameter (source ['Klotz_1975_table_p9_1:row6:col1', 'Klotz_1975_table_p9_1:row6:col2', 'Klotz_1975_table_p9_1:row6:col3', 'Klotz_1975_table_p9_1:row6:col4', 'Klotz_1975_table_p9_1:row6:col5', 'Klotz_1975_table_p9_1:row6:col6'])
- dropped unlinked row (NIL): 'J. H.§' — extend the ontology if this is a real PK parameter (source ['Klotz_1975_table_p9_1:row7:col1', 'Klotz_1975_table_p9_1:row7:col2', 'Klotz_1975_table_p9_1:row7:col3', 'Klotz_1975_table_p9_1:row7:col4', 'Klotz_1975_table_p9_1:row7:col5', 'Klotz_1975_table_p9_1:row7:col6'])
- unit_dimension_mismatch: 'J. M.*' → Q60 (unit '[length] ** 2' vs ontology '[time]') — route to review
- dropped duplicate Q60 ('J. M.*', value '64.8') — already have one for this compound
- dropped unlinked row (NIL): 'J. M.†' — extend the ontology if this is a real PK parameter (source ['Klotz_1975_table_p9_1:row9:col1', 'Klotz_1975_table_p9_1:row9:col2', 'Klotz_1975_table_p9_1:row9:col3', 'Klotz_1975_table_p9_1:row9:col4', 'Klotz_1975_table_p9_1:row9:col5', 'Klotz_1975_table_p9_1:row9:col6'])
- unit_dimension_mismatch: 'J. J.*' → Q60 (unit '[length] ** 2' vs ontology '[time]') — route to review
- dropped duplicate Q60 ('J. J.*', value '89.3') — already have one for this compound
- dropped duplicate Q900 ('J. J.†', value '49.0') — already have one for this compound
- dropped duplicate Q900 ('Upper normal limit', value '45.4') — already have one for this compound
- salvaged Q22 ('drug clearance (chronic active hepatitis, individual 1)'=13.0) from results prose — parameter table was unreadable
- salvaged Q23 ('calculated blood clearance of diazepam'=24.8) from results prose — parameter table was unreadable
- salvaged Q61 ('Vd(area)/kg,'=1.13) from results prose — parameter table was unreadable
- implicit units: 'calculated blood clearance of diazepam' → ml/min (from the paper text: 'Abstract states plasma clearance of diazepam was between 20 and 32 ml/min; text also reports clearance values in ml/min ')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=diazepam
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Aurélie_2023's review values (primary lacked it)
- gap-filled Q83 (tlag) from Aurélie_2023's review values (primary lacked it)

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.267 (4/15 fields) | 11 |
| `gpt-oss:120b` | not confirmed | 0.167 (2/12 fields) | 10 |

<details><summary>21 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[b. s.*].parameter_id` | Q900 | Q60 | mismatch |
| `gpt-oss-120b` | `parameters[b. s.*].value` | 70.8 | 3.9 | mismatch |
| `gpt-oss-120b` | `parameters[b. s.]` | not captured | 5.0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[blood clearance of diazepam]` | not captured | 24.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[calculated blood clearance of diazepam]` | 24.8 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[drug clearance]` | 13.0 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka *]` | 1.03 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[m. c.]` | 62.2 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[plasma clearance of diazepam]` | not captured | 20 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tlag]` | 0.186 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd(area)/kg,]` | 1.13 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[b. s.]` | 47.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[blood clearance of diazepam]` | 24.8 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[blood clearance of diazepam]` | not captured | 24.8 | only_one_extracted |
| `gpt-oss:120b` | `parameters[drug clearance]` | 13.0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[drug clearance]` | not captured | 13.0 | only_one_extracted |
| `gpt-oss:120b` | `parameters[j. h.*]` | not captured | 59.6 | only_one_extracted |
| `gpt-oss:120b` | `parameters[m. c.*]` | not captured | 94.2 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vd(os)/kg]` | 1.13 | not captured | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | diazepam | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | diazepam | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | fail | 0.31 | 0.032 | 0.1032 | 0.25 | reported t½β |
| C5_dimension_Q23 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Klotz_1975:other_prose'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Aurélie_2023:review'] |
| C5_dimension_Q60 | fail | [length] ** 2 | B | not captured | not captured | ['Klotz_1975_table_p9_1:row4:col1', 'Klotz_1975_table_p9_1:row4:col2', 'Klotz_1975_table_p9_1:row4:col3', 'Klotz_1975_table_p9_1:row4:col4', 'Klotz_1975_table_p9_1:row4:col5', 'Klotz_1975_table_p9_1:row4:col6'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Aurélie_2023:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 24.8 | not captured | not captured | ['Klotz_1975:other_prose'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.78 L/h | not captured | not captured | ['Klotz_1975:other_prose'] |
| C9_phys_window_Q23 | pass | clearance within physiological range | 1.49 L/h | not captured | not captured | ['Klotz_1975:other_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 79.1 L | not captured | not captured | ['Klotz_1975:discussion_prose'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_diazepam/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Klotz_1975` / `Klotz_1975::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 19:05 UTC</sub>
