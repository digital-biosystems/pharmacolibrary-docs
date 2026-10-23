<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;lemborexant&quot;,&quot;href&quot;:&quot;drugs/drug_lemborexant/&quot;},{&quot;label&quot;:&quot;Lalovic_2020 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lemborexant — `Lemborexant_Lalovic2020_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The lemborexant three-compartment model was rejected because one compartment is unreachable from the dose, leaving part of the structure with no dosing path.

<div class="pk-model-meta" hidden drug="lemborexant" model-id="Lemborexant_Lalovic2020_reference" status="rejected" stale="false" population="subjects with insomnia disorder (phases 1-3, healthy and insomnia subjects)" measured-compound="lemborexant" parameterization="apparent" topology="1C"></div>

## Citation
Lalovic B, Majid O, Aluri J, Landry I, Moline M, Hussein Z. Population Pharmacokinetics and Exposure-Response Analyses for the Most Frequent Adverse Events Following Treatment With Lemborexant, an Orexin Receptor Antagonist, in Subjects With Insomnia Disorder. Journal of clinical pharmacology 60(12):1642–1654 (2020).
  ·  DOI: [10.1002/jcph.1683](https://doi.org/10.1002/jcph.1683)

## Population and dosing

**Population:** subjects with insomnia disorder (phases 1-3, healthy and insomnia subjects) · condition insomnia disorder · age group mixed · n = 1892.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, Q3/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted, plus 3 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CL/F (L/h) | CL/F | 22.7 | L/h | 0.252 | 48.1 (None% RSE) |
| V2/F (L) | V2/F | 9.09 | L | 0.0909 | 142 (None% RSE) |
| Q3/F (L/h) | Q3/F | 32.1 | L/h | 0.0417 | 56.8 (None% RSE) |
| V3/F (L) | V3/F | 278 | L | 0.0156 | 82.0 (None% RSE) |
| D1, capsule (h) | D1 | 0.467 | h |  | 167 (None% RSE) |
| Ka, capsule (h−1) | kabs | 0.532 | h−1 |  | 43.8 (None% RSE) |
| ALAG1 (h) | tlag | 0.403 | h |  |  |
| theta_cl_f_bmi_power | theta_cl_f_bmi_power | -0.428 |  | 12.9 |  |
| theta_kabs_food_ka | theta_kabs_food_ka | 0.695 |  |  |  |
| theta_q40_food_f1 | theta_q40_food_f1 | 1.21 |  |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.696). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The lemborexant three-compartment model was rejected because one compartment is unreachable from the dose, leaving part of the structure with no dosing path.**

The record describes lemborexant in subjects with insomnia disorder, with apparent parameters CL/F 22.7 L/h, V2/F 9.09 L, Q3/F 32.1 L/h, V3/F 278 L, zero-order input duration D1 0.467 h, absorption rate constant 0.532 h−1, lag time 0.403 h, and covariate effects on BMI (−0.428), food on absorption rate (0.695) and food on bioavailability (1.21). The refusal is based on the model structure: a compartment has no path from the administered dose, so it is orphaned in the topology. No other failed checks or builder deviations are recorded. Extracted — lemborexant: CL/F 22.7 L/h, V2/F 9.09 L, Q3/F 32.1 L/h, V3/F 278 L, D1 0.467 h, kabs 0.532 h−1, tlag 0.403 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[cl/f].value`: this record has 22.7, the second reading 23.7; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 22.7 | L/h | 6.306e-06 | m3/s | l/h | 0.252 | exact (1) | jcph1683-tbl-0002:row1:col1, jcph1683-tbl-0002:row1:col2, jcph1683-tbl-0002:row1:col4 | 48.1 (None% RSE) |
| V2/F (L) | `Q82` · V2/F | 9.09 | L | 0.00909 | m3 | l | 0.0909 | exact (1) | jcph1683-tbl-0002:row5:col1, jcph1683-tbl-0002:row5:col2, jcph1683-tbl-0002:row5:col4 | 142 (None% RSE) |
| Q3/F (L/h) | `Q309` · Q3/F | 32.1 | L/h | 8.917e-06 | m3/s | l/h | 0.0417 | exact (1) | jcph1683-tbl-0002:row6:col1, jcph1683-tbl-0002:row6:col2, jcph1683-tbl-0002:row6:col4 | 56.8 (None% RSE) |
| V3/F (L) | `Q78` · V3/F | 278 | L | 0.278 | m3 | l | 0.0156 | exact (1) | jcph1683-tbl-0002:row7:col1, jcph1683-tbl-0002:row7:col2, jcph1683-tbl-0002:row7:col4 | 82.0 (None% RSE) |
| D1, capsule (h) | `Q310` · D1 | 0.467 | h | 1681 | s | h |  | llm_confirmed (0.6) | jcph1683-tbl-0002:row10:col1 | 167 (None% RSE) |
| Ka, capsule (h−1) | `Q49` · kabs | 0.532 | h−1 | 0.0001478 | 1/s | 1/h |  | llm_confirmed (0.6) | jcph1683-tbl-0002:row13:col1 | 43.8 (None% RSE) |
| ALAG1 (h) | `Q83` · tlag | 0.403 | h | 1451 | s | h |  | llm (0.6) | jcph1683-tbl-0002:row16:col1 |  |
| theta_cl_f_bmi_power | `Q900` · theta_cl_f_bmi_power | -0.428 |  |  |  |  | 12.9 |  | jcph1683-tbl-0002:row2:col1, jcph1683-tbl-0002:row2:col2, jcph1683-tbl-0002:row2:col4 |  |
| theta_kabs_food_ka | `Q900` · theta_kabs_food_ka | 0.695 |  |  |  |  |  |  | jcph1683-tbl-0002:row15:col1 |  |
| theta_q40_food_f1 | `Q900` · theta_q40_food_f1 | 1.21 |  |  |  |  |  |  | jcph1683-tbl-0002:row17:col1 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL/F' routed out of structural estimates ('Interindividual variability (%CV)')
- table section iiv: 'V2/F' routed out of structural estimates ('Interindividual variability (%CV)')
- table section iiv: 'Q3/F' routed out of structural estimates ('Interindividual variability (%CV)')
- table section iiv: 'V3/F' routed out of structural estimates ('Interindividual variability (%CV)')
- table section iiv: 'Q4/F' routed out of structural estimates ('Interindividual variability (%CV)')
- table section iiv: 'V4/F' routed out of structural estimates ('Interindividual variability (%CV)')
- table section iiv: 'D1' routed out of structural estimates ('Interindividual variability (%CV)')
- table section iiv: 'Ka' routed out of structural estimates ('Interindividual variability (%CV)')
- table section iiv: 'F1' routed out of structural estimates ('Interindividual variability (%CV)')
- table section residual_error: 'Proportional (TAD &gt; 3 h), % CV' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Additive (TAD &gt;3 h), ng/mL' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Proportional (TAD ≤ 3 h), % CV' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Additive (TAD ≤3 h), ng/mL' routed out of structural estimates ('Residual variability')
- dropped duplicate Q27 ('CL/F, ALP', value '-0.118') — already have one for this compound
- dropped duplicate Q27 ('CL/F, elderly', value '0.739') — already have one for this compound
- dropped unlinked row (NIL): 'Q4/F (L/h)' — extend the ontology if this is a real PK parameter (source ['jcph1683-tbl-0002:row8:col1', 'jcph1683-tbl-0002:row8:col2', 'jcph1683-tbl-0002:row8:col4'])
- dropped unlinked row (NIL): 'V4/F (L)' — extend the ontology if this is a real PK parameter (source ['jcph1683-tbl-0002:row9:col1', 'jcph1683-tbl-0002:row9:col2', 'jcph1683-tbl-0002:row9:col4'])
- dropped duplicate Q310 ('D1, tablet', value '0.254') — already have one for this compound
- dropped duplicate Q310 ('D1, nighttime dosing', value '2.33') — already have one for this compound
- dropped duplicate Q49 ('Ka, tablet', value '1.12') — already have one for this compound
- dropped value-less row: 'ALAG1'
- dropped value-less row: 'CI'
- dropped value-less row: 'CL/F'
- dropped value-less row: 'CV'
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number None (source ['jcph1683-tbl-0002:footnote']); the table cell was unparseable — needs review
- dropped value-less row: 'D1'
- dropped value-less row: 'F1'
- dropped value-less row: 'Ka'
- dropped value-less row: 'Q2/F'
- dropped value-less row: 'Q3/F'
- dropped value-less row: 'TAD'
- dropped value-less row: 'V2/F'
- dropped value-less row: 'V3/F'
- dropped value-less row: 'V4/F'
- dropped value-less row: 'θk=θTV,k·(covi,contrefcont)θk,cont'
- dropped value-less row: 'θj=θTV,j·θj,catcovi,cat'
- dropped value-less row: 'a'
- dropped value-less row: 'b'
- covariate effect for Q40 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=lemborexant
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell jcph1683-tbl-0002:row1:col3 = '(22.6‐22.8)'
- unparsed cell jcph1683-tbl-0002:row1:col5 = '(23.2‐24.2)'
- unparsed cell jcph1683-tbl-0002:row2:col3 = '(−0.536 to −0.320)'
- unparsed cell jcph1683-tbl-0002:row2:col5 = '(−0.579 to −0.348)'
- unparsed cell jcph1683-tbl-0002:row3:col3 = '(−0.167 to −0.069)'
- unparsed cell jcph1683-tbl-0002:row3:col5 = '(−0.34 to −0.22)'
- unparsed cell jcph1683-tbl-0002:row4:col3 = '(0.735 to −0.753)'
- unparsed cell jcph1683-tbl-0002:row4:col5 = '(0.680‐0.714)'
- unparsed cell jcph1683-tbl-0002:row5:col3 = '(9.07‐9.11)'
- unparsed cell jcph1683-tbl-0002:row5:col5 = '(8.62‐14.25)'
- unparsed cell jcph1683-tbl-0002:row6:col3 = '(32.1‐31.1)'
- unparsed cell jcph1683-tbl-0002:row6:col5 = '(30.68‐35.94)'
- unparsed cell jcph1683-tbl-0002:row7:col3 = '(278‐278)'
- unparsed cell jcph1683-tbl-0002:row7:col5 = '(254‐322)'
- unparsed cell jcph1683-tbl-0002:row8:col3 = '(30.9‐31.1)'
- unparsed cell jcph1683-tbl-0002:row8:col5 = '(26.9‐32.7)'
- unparsed cell jcph1683-tbl-0002:row9:col3 = '(782‐784)'
- unparsed cell jcph1683-tbl-0002:row9:col5 = '(732‐832)'
- unparsed cell jcph1683-tbl-0002:row19:col3 = '(45.1‐51.1)'
- unparsed cell jcph1683-tbl-0002:row19:col5 = '(44.7‐49.3)'
- unparsed cell jcph1683-tbl-0002:row20:col3 = '(86.7‐197.3)'
- unparsed cell jcph1683-tbl-0002:row20:col5 = '(107‐158)'
- unparsed cell jcph1683-tbl-0002:row21:col3 = '(40.4‐73.2)'
- unparsed cell jcph1683-tbl-0002:row21:col5 = '(32.1‐50.4)'
- unparsed cell jcph1683-tbl-0002:row22:col3 = '(61.3‐103)'
- unparsed cell jcph1683-tbl-0002:row22:col5 = '(58.9‐73.0)'
- unparsed cell jcph1683-tbl-0002:row23:col3 = '(37.6‐55.4)'
- unparsed cell jcph1683-tbl-0002:row23:col5 = '(41.6‐64.0)'
- unparsed cell jcph1683-tbl-0002:row24:col3 = '(34.1‐48.7)'
- unparsed cell jcph1683-tbl-0002:row24:col5 = '(33.5‐44.1)'
- unparsed cell jcph1683-tbl-0002:row29:col3 = '(14.0‐14.6)'
- unparsed cell jcph1683-tbl-0002:row29:col5 = '(13.4‐15.0)'
- unparsed cell jcph1683-tbl-0002:row30:col3 = '(0.012‐0.026)'
- unparsed cell jcph1683-tbl-0002:row30:col5 = '(0.011‐0.026)'
- unparsed cell jcph1683-tbl-0002:row31:col3 = '(32.2‐33.6)'
- unparsed cell jcph1683-tbl-0002:row31:col5 = '(32.1‐34.4)'
- unparsed cell jcph1683-tbl-0002:row32:col3 = '(2.48‐2.76)'
- unparsed cell jcph1683-tbl-0002:row32:col5 = '(0.44‐3.51)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.696 (16/23 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl/f].value` | 22.7 | 23.7 | mismatch |
| `gpt-oss-120b` | `parameters[q3/f].value` | 32.1 | 33.0 | mismatch |
| `gpt-oss-120b` | `parameters[q4/f]` |  | 30.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_bmi_power].value` | -0.428 | -0.459 | mismatch |
| `gpt-oss-120b` | `parameters[v2/f].value` | 9.09 | 11.4 | mismatch |
| `gpt-oss-120b` | `parameters[v3/f].value` | 278 | 289 | mismatch |
| `gpt-oss-120b` | `parameters[v4/f]` |  | 779 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['jcph1683-tbl-0002:row1:col1', 'jcph1683-tbl-0002:row1:col2', 'jcph1683-tbl-0002:row1:col4'] |
| C5_dimension_Q309 | pass | [length] ** 3 / [time] |  | ['jcph1683-tbl-0002:row6:col1', 'jcph1683-tbl-0002:row6:col2', 'jcph1683-tbl-0002:row6:col4'] |
| C5_dimension_Q310 | pass | [time] |  | ['jcph1683-tbl-0002:row10:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['jcph1683-tbl-0002:row13:col1'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['jcph1683-tbl-0002:row7:col1', 'jcph1683-tbl-0002:row7:col2', 'jcph1683-tbl-0002:row7:col4'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['jcph1683-tbl-0002:row5:col1', 'jcph1683-tbl-0002:row5:col2', 'jcph1683-tbl-0002:row5:col4'] |
| C5_dimension_Q83 | pass | [time] |  | ['jcph1683-tbl-0002:row16:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 22.7 L/h | ['jcph1683-tbl-0002:row1:col1', 'jcph1683-tbl-0002:row1:col2', 'jcph1683-tbl-0002:row1:col4'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 9.09 L | ['jcph1683-tbl-0002:row5:col1', 'jcph1683-tbl-0002:row5:col2', 'jcph1683-tbl-0002:row5:col4'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blemborexant%5D%20Lemborexant_Lalovic2020_reference&body=Drug%3A%20lemborexant%0ARecord%3A%20Lemborexant_Lalovic2020_reference%0APaper%3A%20Lalovic_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lemborexant/Lemborexant_Lalovic2020_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-06 21:09 UTC</sub>
