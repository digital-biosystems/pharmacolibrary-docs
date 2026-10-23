<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;venetoclax&quot;,&quot;href&quot;:&quot;drugs/drug_venetoclax/&quot;},{&quot;label&quot;:&quot;Dave_2019 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Venetoclax_Liu2026_reference&quot;,&quot;label&quot;:&quot;Liu_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_venetoclax/Venetoclax_Liu2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Venetoclax_Zhao2024_minocha_201817&quot;,&quot;label&quot;:&quot;Zhao_2024_minocha_201817&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_venetoclax/Venetoclax_Zhao2024_minocha_201817.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Venetoclax_Zhao2024_deng_201915&quot;,&quot;label&quot;:&quot;Zhao_2024_deng_201915&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_venetoclax/Venetoclax_Zhao2024_deng_201915.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Venetoclax_Zhao2024_gong_202316&quot;,&quot;label&quot;:&quot;Zhao_2024_gong_202316&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_venetoclax/Venetoclax_Zhao2024_gong_202316.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Venetoclax_Zhao2024_jones_201611&quot;,&quot;label&quot;:&quot;Zhao_2024_jones_201611&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_venetoclax/Venetoclax_Zhao2024_jones_201611.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Venetoclax_Zhao2024_samineni_2022a18&quot;,&quot;label&quot;:&quot;Zhao_2024_samineni_2022a18&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_venetoclax/Venetoclax_Zhao2024_samineni_2022a18.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Venetoclax_Zhao2024_samineni_2022b19&quot;,&quot;label&quot;:&quot;Zhao_2024_samineni_2022b19&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_venetoclax/Venetoclax_Zhao2024_samineni_2022b19.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# venetoclax — `Venetoclax_Dave2019_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Venetoclax apparent clearance was listed as 1 L/day, a physiologically implausible value indicating a unit or scale extraction error.

<div class="pk-model-meta" hidden drug="venetoclax" model-id="Venetoclax_Dave2019_reference" status="rejected" stale="false" population="healthy subjects" measured-compound="venetoclax" parameterization="apparent" topology="1C"></div>

## Citation
Dave N, Gopalakrishnan S, Mensing S, Salem AH. Model-Informed Dosing of Venetoclax in Healthy Subjects: An Exposure-Response Analysis. Clinical and translational science 12(6):625–632 (2019).
  ·  DOI: [10.1111/cts.12665](https://doi.org/10.1111/cts.12665)

## Population and dosing

**Population:** healthy subjects · age group adult · n = , "condition": "healthy", "species": "human", "compounds": ["- venetoclax | parent | yes | yes | yes"], "links": "none.

**Dosing:** 10, 400 mg, oral, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 9 extracted, plus 1 covariate effect.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL/F (L/day) | CL/F | 1 | L/day |
| V2 (L) | V2 | 0.29 | L |
| Q (L/day) | Q | 1.47 | L/day |
| V3 (L) | V3 | 0.65 | L |
| KA (1/day) | kabs | 1.53 | 1/day |
| ALAG (day) | tlag | 4.91 | day |
| Rifampin on CL | CL | -0.178 |  |
| t1/2 (days) | t1/2z | 0.1 | days |
| feedback_exponent | feedback_exponent | 20.9 |  |
| apparent volume of distribution (Vd/F) | V/F | 181.0 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.087). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Venetoclax apparent clearance was listed as 1 L/day, a physiologically implausible value indicating a unit or scale extraction error.**

The record reports a venetoclax apparent clearance of 1 L/day, which falls far outside the physiological window for this drug. Additionally, the rifampin covariate effect on clearance is recorded as a negative shift, implying a non-physical reduction in elimination. Extracted — venetoclax: CL/F 1 L/day, V2 0.29 L, Q 1.47 L/day, V3 0.65 L, kabs 1.53 1/day, tlag 4.91 day, CL -0.178, t1/2z 0.1 days, … (+1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has venetoclax, the second reading unknown; it also differs on 20 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL/F (L/day) | `Q27` · CL/F | 1 | L/day | 1.157e-08 | m3/s | l/d | exact (1) | cts12665-tbl-0002:row2:col1, cts12665-tbl-0002:row2:col2, cts12665-tbl-0002:row2:col4 |
| V2 (L) | `Q64` · V2 | 0.29 | L | 0.00029 | m3 | l | exact (1) | cts12665-tbl-0002:row3:col1, cts12665-tbl-0002:row3:col2, cts12665-tbl-0002:row3:col4, cts12665-tbl-0002:row3:col5 |
| Q (L/day) | `Q30` · Q | 1.47 | L/day | 1.701e-08 | m3/s | l/d | exact (1) | cts12665-tbl-0002:row4:col1, cts12665-tbl-0002:row4:col2, cts12665-tbl-0002:row4:col3, cts12665-tbl-0002:row4:col4, cts12665-tbl-0002:row4:col5 |
| V3 (L) | `Q77` · V3 | 0.65 | L | 0.00065 | m3 | l | exact (1) | cts12665-tbl-0002:row5:col1, cts12665-tbl-0002:row5:col2, cts12665-tbl-0002:row5:col4, cts12665-tbl-0002:row5:col5 |
| KA (1/day) | `Q49` · kabs | 1.53 | 1/day | 1.771e-05 | 1/s | 1/h | exact (1) | cts12665-tbl-0002:row6:col1, cts12665-tbl-0002:row6:col2, cts12665-tbl-0002:row6:col4, cts12665-tbl-0002:row6:col5 |
| ALAG (day) | `Q83` · tlag | 4.91 | day | 4.242e+05 | s | d | exact (1) | cts12665-tbl-0002:row7:col1, cts12665-tbl-0002:row7:col2, cts12665-tbl-0002:row7:col4, cts12665-tbl-0002:row7:col5 |
| Rifampin on CL | `Q22` · CL | -0.178 |  |  |  |  | llm_confirmed (0.6) | cts12665-tbl-0002:row8:col1, cts12665-tbl-0002:row8:col2, cts12665-tbl-0002:row8:col3, cts12665-tbl-0002:row8:col4 |
| t1/2 (days) | `Q57` · t1/2z | 0.1 | days | 8640 | s | d | exact (1) | cts12665-tbl-0002:row10:col1, cts12665-tbl-0002:row10:col2, cts12665-tbl-0002:row10:col4, cts12665-tbl-0002:row10:col5 |
| feedback_exponent | `Q900` · feedback_exponent | 20.9 |  |  |  |  |  | cts12665-tbl-0002:row11:col1, cts12665-tbl-0002:row11:col2, cts12665-tbl-0002:row11:col4, cts12665-tbl-0002:row11:col5 |
| apparent volume of distribution (Vd/F) | `Q76` · V/F | 181.0 | L | 0.181 | m3 | L | review_gapfill (0.7) | Liu_2026:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'parameter (units)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- covariate level 'Feedback exponent' → Q900:feedback_exponent = 20.9 (power on Q27)
- implicit units: 'KA (1/day)' → 1/day (from the paper text: "The parameter line explicitly states the unit: 'KA (1/day) = 1.53'")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=venetoclax
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- gap-filled Q76 (V/F) from Liu_2026's review values (primary lacked it)

**Extraction notes:**
- unparsed cell cts12665-tbl-0002:row2:col3 = 'Low fat on F1'
- unparsed cell cts12665-tbl-0002:row3:col3 = 'Fasting on F1'
- unparsed cell cts12665-tbl-0002:row5:col3 = 'Azithromycin on F1'
- unparsed cell cts12665-tbl-0002:row6:col3 = 'Chinese on F1'
- unparsed cell cts12665-tbl-0002:row7:col3 = 'Rifampin on F1'
- unparsed cell cts12665-tbl-0002:row10:col3 = 'k in, proliferation (and transit maturation) rate (day−1)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.087 (2/23 fields) | 21 |

<details><summary>21 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[alag]` |  | 4.91 | only_one_extracted |
| `gpt-oss-120b` | `parameters[alag]` | 4.91 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[apparent volume of distribution]` | 181.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` |  | 1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | 1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[feedback_exponent]` | 20.9 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` |  | 1.53 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 1.53 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q]` |  | 1.47 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q]` | 1.47 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[rifampin on cl]` |  | -0.178 | only_one_extracted |
| `gpt-oss-120b` | `parameters[rifampin on cl]` | -0.178 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2]` |  | 0.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2]` | 0.1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q325_weight_power]` |  | 20.9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2]` |  | 0.29 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2]` | 0.29 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3]` |  | 0.65 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3]` | 0.65 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | venetoclax | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | venetoclax | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_base_sign_Q22 | fail |  | -0.178 |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['cts12665-tbl-0002:row2:col1', 'cts12665-tbl-0002:row2:col2', 'cts12665-tbl-0002:row2:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['cts12665-tbl-0002:row4:col1', 'cts12665-tbl-0002:row4:col2', 'cts12665-tbl-0002:row4:col3', 'cts12665-tbl-0002:row4:col4', 'cts12665-tbl-0002:row4:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['cts12665-tbl-0002:row6:col1', 'cts12665-tbl-0002:row6:col2', 'cts12665-tbl-0002:row6:col4', 'cts12665-tbl-0002:row6:col5'] |
| C5_dimension_Q57 | pass | [time] |  | ['cts12665-tbl-0002:row10:col1', 'cts12665-tbl-0002:row10:col2', 'cts12665-tbl-0002:row10:col4', 'cts12665-tbl-0002:row10:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['cts12665-tbl-0002:row3:col1', 'cts12665-tbl-0002:row3:col2', 'cts12665-tbl-0002:row3:col4', 'cts12665-tbl-0002:row3:col5'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Liu_2026:review'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['cts12665-tbl-0002:row5:col1', 'cts12665-tbl-0002:row5:col2', 'cts12665-tbl-0002:row5:col4', 'cts12665-tbl-0002:row5:col5'] |
| C5_dimension_Q83 | pass | [time] |  | ['cts12665-tbl-0002:row7:col1', 'cts12665-tbl-0002:row7:col2', 'cts12665-tbl-0002:row7:col4', 'cts12665-tbl-0002:row7:col5'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] |  | ['cts12665-tbl-0002:row8:col1', 'cts12665-tbl-0002:row8:col2', 'cts12665-tbl-0002:row8:col3', 'cts12665-tbl-0002:row8:col4'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.0417 L/h | ['cts12665-tbl-0002:row2:col1', 'cts12665-tbl-0002:row2:col2', 'cts12665-tbl-0002:row2:col4'] |
| C9_phys_window_Q64 | fail | volume within physiological range | 0.29 L | ['cts12665-tbl-0002:row3:col1', 'cts12665-tbl-0002:row3:col2', 'cts12665-tbl-0002:row3:col4', 'cts12665-tbl-0002:row3:col5'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 181 L | ['Liu_2026:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvenetoclax%5D%20Venetoclax_Dave2019_reference&body=Drug%3A%20venetoclax%0ARecord%3A%20Venetoclax_Dave2019_reference%0APaper%3A%20Dave_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_venetoclax/Venetoclax_Dave2019_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-06 21:52 UTC</sub>
