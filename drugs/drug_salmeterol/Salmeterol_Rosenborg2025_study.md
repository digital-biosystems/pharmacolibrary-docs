<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03A&quot;,&quot;href&quot;:&quot;atc/R03A.md&quot;},{&quot;label&quot;:&quot;salmeterol&quot;,&quot;href&quot;:&quot;drugs/drug_salmeterol/&quot;},{&quot;label&quot;:&quot;Rosenborg_2025 \u00b7 study&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Salmeterol_Berkhout2025_reference&quot;,&quot;label&quot;:&quot;Berkhout_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_salmeterol/Salmeterol_Berkhout2025_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Salmeterol_Himstedt2020_salmeterol&quot;,&quot;label&quot;:&quot;Himstedt_2020_salmeterol&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_salmeterol/Salmeterol_Himstedt2020_salmeterol.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Salmeterol_Thoueille2026_reference&quot;,&quot;label&quot;:&quot;Thoueille_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_salmeterol/Salmeterol_Thoueille2026_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# salmeterol — `Salmeterol_Rosenborg2025_study`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.3). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The salmeterol record was rejected because the extracted apparent clearance of 500 L/h and volume of distribution of 0.178 L fall far outside physiological ranges, indicating a unit or scale extraction error.**

For salmeterol in healthy adults, the apparent elimination clearance is recorded as 500 L/h, an implausibly large magnitude, while the volume of distribution is recorded as 0.178 L, implausibly small for any systemic distribution volume. These values suggest the units or scales were misread from the source. The absorption rate constant is also recorded as -0.89 h−1, a negative value that is not physically meaningful for a first-order absorption process, though the rejection was based on the clearance and volume findings. Extracted — salmeterol: CL 500 L/h, V 0.178 L, kabs -0.89 h−1, tlag 1.5 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has salmeterol and fluticasone propionate, the second reading salmeterol; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> **Dose compound ≠ measured compound:** dosed `salmeterol and fluticasone propionate`, measured `salmeterol`.

## Citation
Rosenborg J et al., Relative Bioavailability of Inhaled Flu…, Drug design, development an… (2025)
  ·  DOI: [10.2147/DDDT.S480189](https://doi.org/10.2147/DDDT.S480189)

<div class="pk-model-meta" hidden drug="salmeterol" model-id="Salmeterol_Rosenborg2025_study" status="rejected" stale="false" population="healthy adults" measured-compound="salmeterol" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 4 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| FP | `Q900` · equation variable | 1 | not captured | not captured | not captured | not captured | llm (0.6) | Rosenborg_2025_table_3:row0:col1, Rosenborg_2025_table_3:row1:col1, Rosenborg_2025_table_3:row2:col1, Rosenborg_2025_table_3:row3:col1, Rosenborg_2025_table_3:row4:col1, Rosenborg_2025_table_3:row5:col1, Rosenborg_2025_table_3:row12:col1, Rosenborg_2025_table_3:row13:col1, Rosenborg_2025_table_3:row14:col1, Rosenborg_2025_table_3:row15:col1, Rosenborg_2025_table_3:row16:col1, Rosenborg_2025_table_3:row17:col1 | — | not captured |
| apparent elimination clearance | `Q22` · CL | 500 | L/h | 0.0001388888888888889 | L/h | not captured | boundary (0.8) | Rosenborg_2025:other_prose | — | not captured |
| ε, L | `Q61` · V | 0.178 | L | 0.000178 | L | not captured | review_gapfill (0.7) | Gong_2022:review | — | not captured |
| KA | `Q49` · kabs | -0.89 | h−1 | -0.00024722222222222224 | 1/h | not captured | review_gapfill (0.7) | Ambery_2015:review | — | not captured |
| Absorption lag gut | `Q83` · tlag | 1.5 | h | 5400.0 | h | not captured | review_gapfill (0.7) | Heuberger_2018:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| Figure 2. Between subject variability of empirically derived pharmacokinetic FP parameters considering categorical effects of treatment alternative on relative bioavailability and rate of absorption. R1: Reference product (FP 300µg); R2: Reference product (FP 750µg); R3: Reference product (FP 1500µg); T1: Test product (FP 300µg); T2: Test product (FP 750µg); T3: Test product (FP 1500µg). | Q87 | not captured | llm_confirmed |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'SALM' — extend the ontology if this is a real PK parameter (source ['Rosenborg_2025_table_3:row6:col1', 'Rosenborg_2025_table_3:row7:col1', 'Rosenborg_2025_table_3:row8:col1', 'Rosenborg_2025_table_3:row9:col1', 'Rosenborg_2025_table_3:row10:col1', 'Rosenborg_2025_table_3:row11:col1', 'Rosenborg_2025_table_3:row18:col1', 'Rosenborg_2025_table_3:row19:col1', 'Rosenborg_2025_table_3:row20:col1', 'Rosenborg_2025_table_3:row21:col1', 'Rosenborg_2025_table_3:row22:col1', 'Rosenborg_2025_table_3:row23:col1'])
- salvaged Q22 ('apparent elimination clearance'=500) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=salmeterol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'study' subgroup of Rosenborg_2025 (paper reports 2 populations: mean, study)
- gap-filled Q61 (V) from Gong_2022's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Ambery_2015's review values (primary lacked it)
- gap-filled Q83 (tlag) from Heuberger_2018's review values (primary lacked it)

**Extraction notes:**
- unparsed cell t0002:row0:col5 = '1,2,3'
- unparsed cell Rosenborg_2025_table_2:row3:col2 = 'Linear relationship with the coefficient 1 and the intercept 0'
- companion parameter table 2 transcribed (2 record(s))
- unparsed cell Rosenborg_2025_table_3:row0:col2 = '3 × 100'
- unparsed cell Rosenborg_2025_table_3:row1:col2 = '3 × 100'
- unparsed cell Rosenborg_2025_table_3:row2:col2 = '3 × 250'
- unparsed cell Rosenborg_2025_table_3:row3:col2 = '3 × 250'
- unparsed cell Rosenborg_2025_table_3:row4:col2 = '3 × 500'
- unparsed cell Rosenborg_2025_table_3:row5:col2 = '3 × 500'
- unparsed cell Rosenborg_2025_table_3:row6:col2 = '3 × 50'
- unparsed cell Rosenborg_2025_table_3:row7:col2 = '3 × 50'
- unparsed cell Rosenborg_2025_table_3:row8:col2 = '3 × 50'
- unparsed cell Rosenborg_2025_table_3:row9:col2 = '3 × 50'
- unparsed cell Rosenborg_2025_table_3:row10:col2 = '3 × 50'
- unparsed cell Rosenborg_2025_table_3:row11:col2 = '3 × 50'
- unparsed cell Rosenborg_2025_table_3:row12:col2 = '3 × 100'
- unparsed cell Rosenborg_2025_table_3:row13:col2 = '3 × 100'
- unparsed cell Rosenborg_2025_table_3:row14:col2 = '3 × 250'
- unparsed cell Rosenborg_2025_table_3:row15:col2 = '3 × 250'
- unparsed cell Rosenborg_2025_table_3:row16:col2 = '3 × 500'
- unparsed cell Rosenborg_2025_table_3:row17:col2 = '3 × 500'
- unparsed cell Rosenborg_2025_table_3:row18:col2 = '3 × 50'
- unparsed cell Rosenborg_2025_table_3:row19:col2 = '3 × 50'
- unparsed cell Rosenborg_2025_table_3:row20:col2 = '3 × 50'
- unparsed cell Rosenborg_2025_table_3:row21:col2 = '3 × 50'
- unparsed cell Rosenborg_2025_table_3:row22:col2 = '3 × 50'
- unparsed cell Rosenborg_2025_table_3:row23:col2 = '3 × 50'
- companion parameter table 3 transcribed (72 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.3 (3/10 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[absorption lag gut]` | 1.5 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[apparent elimination clearance]` | 500 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[figure 2. between subject variability of empirically derived pharmacokinetic fp parameters considering categorical effects of treatment alternative on relative bioavailability and rate of absorption. r1: reference product (fp 300ug); r2: reference product (fp 750ug); r3: reference product (fp 1500ug); t1: test product (fp 300ug); t2: test product (fp 750ug); t3: test product (fp 1500ug).]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[fp]` | 1 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | -0.89 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ε]` | 0.178 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | salmeterol and fluticasone propionate | salmeterol | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 1 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Ambery_2015:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Gong_2022:review'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Heuberger_2018:review'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 500.0 | not captured | not captured | ['Rosenborg_2025:other_prose'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 500 L/h | not captured | not captured | ['Rosenborg_2025:other_prose'] |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.178 L | not captured | not captured | ['Gong_2022:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_salmeterol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Rosenborg_2025` / `Rosenborg_2025::study`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 14:51 UTC</sub>
