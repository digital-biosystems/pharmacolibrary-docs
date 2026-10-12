<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05B&quot;,&quot;href&quot;:&quot;atc/N05B.md&quot;},{&quot;label&quot;:&quot;clobazam&quot;,&quot;href&quot;:&quot;drugs/drug_clobazam/&quot;},{&quot;label&quot;:&quot;Tolbert_2019 \u00b7 t_mean_cv_h&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# clobazam — `Clobazam_Tolbert2019_t_mean_cv_h`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.846). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The record was rejected because the AUCt parameter for clobazam carries the unit 'h' instead of the concentration-time unit 'ng•h/mL', a dimension mismatch on a structural parameter.**

In the Tolbert_2019 record for clobazam, the AUCt (area under the concentration-time curve from time 0 to t) is reported as 8871 with the verbatim unit 'h', while its label states 'ng•h/mL'; the unit 'h' could not be converted to SI, so the parameter was left without a usable numeric value in standard units. The other reported parameters (Cmax 87.2 ng/mL, t1/2z 58.6 h, V/F 100 L, CL/F 1.9 L/h) carry consistent units. The model is a parent-metabolite structure with N-desmethylclobazam formed from clobazam in the central compartment, but the metabolism link parameter is of unknown kind, and the record was held back on the AUCt unit mismatch. Extracted — clobazam: Cmax 87.2 ng/mL, AUCt 8.87e+03 h, t1/2z 58.6 h, V/F 100 L, CL/F 1.9 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on `parameters[auc0‐t, mean (% cv), ng•h/ml].parameter_id`: this record has Q19, the second reading Q74; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

## Citation
Tolbert D et al., A Comprehensive Overview of the Clinica…, Journal of clinical pharmac… (2019)
  ·  DOI: [10.1002/jcph.1313](https://doi.org/10.1002/jcph.1313)

<div class="pk-model-meta" hidden drug="clobazam" model-id="Clobazam_Tolbert2019_t_mean_cv_h" status="rejected" stale="false" population="healthy subjects and patients with Lennox-Gastaut syndrome" measured-compound="clobazam" parameterization="apparent" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 5 extracted, plus 1 covariate effect.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Cmax, Mean (% CV), ng/mL | `Q32` · Cmax | 87.2 | ng/mL | not captured | [ng] / [ml] | not captured | llm_confirmed (0.6) | Tolbert_2019_table_1:row2:col2, Tolbert_2019_table_1:row2:col3, Tolbert_2019_table_1:row2:col4, Tolbert_2019_table_1:row2:col6, Tolbert_2019_table_1:row2:col7, Tolbert_2019_table_1:row2:col8, Tolbert_2019_table_1:row2:col10, Tolbert_2019_table_1:row2:col11, Tolbert_2019_table_1:row2:col12, Tolbert_2019_table_1:row2:col13, Tolbert_2019_table_1:row2:col14, Tolbert_2019_table_1:row2:col15, Tolbert_2019_table_1:row2:col16, Tolbert_2019_table_1:row2:col22, Tolbert_2019_table_1:row2:col23, Tolbert_2019_table_1:row2:col26, Tolbert_2019_table_1:row2:col27, Tolbert_2019_table_1:row2:col28 | — | not captured |
| AUC0‐t, Mean (% CV), ng•h/mL | `Q19` · AUCt | 8871 | h | not captured | [h] | not captured | llm (0.6) | Tolbert_2019_table_1:row4:col7, Tolbert_2019_table_1:row4:col11, Tolbert_2019_table_1:row4:col13, Tolbert_2019_table_1:row4:col15 | — | not captured |
| t½, Mean (% CV), h | `Q57` · t1/2z | 58.6 | h | 210960.0 | [h] | not captured | llm (0.6) | Tolbert_2019_table_1:row5:col2, Tolbert_2019_table_1:row5:col3, Tolbert_2019_table_1:row5:col4, Tolbert_2019_table_1:row5:col7, Tolbert_2019_table_1:row5:col10, Tolbert_2019_table_1:row5:col11, Tolbert_2019_table_1:row5:col12, Tolbert_2019_table_1:row5:col13, Tolbert_2019_table_1:row5:col14, Tolbert_2019_table_1:row5:col15, Tolbert_2019_table_1:row5:col16, Tolbert_2019_table_1:row5:col26, Tolbert_2019_table_1:row5:col27, Tolbert_2019_table_1:row5:col28 | — | not captured |
| Vd/F, Mean (% CV), L | `Q76` · V/F | 100 | L | 0.1 | [l] | not captured | llm_confirmed (0.6) | Tolbert_2019_table_1:row6:col3, Tolbert_2019_table_1:row6:col7, Tolbert_2019_table_1:row6:col11, Tolbert_2019_table_1:row6:col13, Tolbert_2019_table_1:row6:col15, Tolbert_2019_table_1:row6:col27 | — | not captured |
| CL/F, Mean (% CV), L/h | `Q27` · CL/F | 1.9 | L/h | 5.277777777777777e-07 | [l] / [h] | not captured | llm_confirmed (0.6) | Tolbert_2019_table_1:row7:col3, Tolbert_2019_table_1:row7:col7, Tolbert_2019_table_1:row7:col11, Tolbert_2019_table_1:row7:col13, Tolbert_2019_table_1:row7:col15, Tolbert_2019_table_1:row7:col23, Tolbert_2019_table_1:row7:col27 | — | not captured |
| theta_q31_cyp2c19 | `Q900` · theta_q31_cyp2c19 | 41.7 | not captured | not captured | not captured | 32 | not captured (not captured) | Tolbert_2019_table_2:row0:col6 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Treatment' — extend the ontology if this is a real PK parameter (source ['Tolbert_2019_table_1:row0:col3', 'Tolbert_2019_table_1:row0:col7', 'Tolbert_2019_table_1:row0:col11', 'Tolbert_2019_table_1:row0:col13', 'Tolbert_2019_table_1:row0:col15', 'Tolbert_2019_table_1:row0:col23', 'Tolbert_2019_table_1:row0:col27'])
- unit_dimension_mismatch: 'AUC0‐t, Mean (% CV), ng•h/mL' → Q19 (unit '[time]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped unlinked row (NIL): '10 mg CLB' — extend the ontology if this is a real PK parameter (source ['Tolbert_2019_table_2:row2:col6'])
- dropped unlinked row (NIL): '10 mg CLB + 40 mg OPZ' — extend the ontology if this is a real PK parameter (source ['Tolbert_2019_table_2:row4:col6'])
- dropped unlinked row (NIL): 'OV‐102363 (effect of CLB on CYP probe substrates)' — extend the ontology if this is a real PK parameter (source ['Tolbert_2019_table_2:row8:col6'])
- dropped unlinked row (NIL): 'Drug Cocktail + CLB' — extend the ontology if this is a real PK parameter (source ['Tolbert_2019_table_2:row9:col6', 'Tolbert_2019_table_2:row11:col6'])
- dropped unlinked row (NIL): 'Drug Cocktail' — extend the ontology if this is a real PK parameter (source ['Tolbert_2019_table_2:row10:col6'])
- covariate effect for Q31 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=clobazam
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at route_to_review — not promoted
- population split: 't½, mean (% cv), h' subgroup of Tolbert_2019 (paper reports 10 populations: auc0‐inf, mean (% cv), ng•h/ml, cl/f, mean (% cv), l/hr, cmax, mean (% cv), ng/ml, ov‐101611 (bioequivalence), ov‐101732 (relative ba), ov‐101839, 41 (food effect), ov‐102234 (multiple dose‐1), ov‐1038c (multiple dose‐2), t½, mean (% cv), h, vd/f, mean (% cv), l)
- row roles (LLM): model_class=noncompartmental; 13/13 row label(s) assigned, 0 linked by role
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)

**Extraction notes:**
- transposed table jcph1313-tbl-0003: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell jcph1313-tbl-0003:row7:col2 = 'Ka (RSE, %), hr−1'
- unparsed cell jcph1313-tbl-0003:row7:col5 = '15.0(‐)'
- transposed table Tolbert_2019_table_1: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Tolbert_2019_table_1:row0:col18 = 'CLB 10 mg'
- unparsed cell Tolbert_2019_table_1:row0:col19 = 'CLB 20 mg'
- unparsed cell Tolbert_2019_table_1:row0:col20 = 'CLB 40 mg'
- unparsed cell Tolbert_2019_table_1:row2:col18 = '107 (32)d'
- unparsed cell Tolbert_2019_table_1:row2:col19 = '375 (51)d'
- unparsed cell Tolbert_2019_table_1:row2:col20 = '683 (117)d'
- unparsed cell Tolbert_2019_table_1:row2:col24 = '11 020 (60)'
- unparsed cell Tolbert_2019_table_1:row4:col1 = '10 693 (32)'
- unparsed cell Tolbert_2019_table_1:row4:col2 = '12 731 (46)'
- unparsed cell Tolbert_2019_table_1:row4:col3 = '10 897 (31)'
- unparsed cell Tolbert_2019_table_1:row4:col4 = '13 638 (73)'
- unparsed cell Tolbert_2019_table_1:row4:col6 = '11 451 (48)'
- unparsed cell Tolbert_2019_table_1:row4:col8 = '10 366 (34)'
- unparsed cell Tolbert_2019_table_1:row4:col10 = '12 399 (49)'
- unparsed cell Tolbert_2019_table_1:row4:col12 = '11 451 (31)'
- unparsed cell Tolbert_2019_table_1:row4:col14 = '11 378 (27)'
- unparsed cell Tolbert_2019_table_1:row4:col16 = '11 453 (24)'
- unparsed cell Tolbert_2019_table_1:row4:col18 = '3518 (923)d,e'
- unparsed cell Tolbert_2019_table_1:row4:col19 = '7190 (2091)d,e'
- unparsed cell Tolbert_2019_table_1:row4:col20 = '13 980 (3608)d,e'
- unparsed cell Tolbert_2019_table_1:row4:col21 = '17 649 (28)f'
- unparsed cell Tolbert_2019_table_1:row4:col22 = '57 693 (65)f'
- unparsed cell Tolbert_2019_table_1:row4:col23 = '41 389 (20)f'
- unparsed cell Tolbert_2019_table_1:row4:col24 = '223 023 (55)f'
- unparsed cell Tolbert_2019_table_1:row4:col25 = '26 092 (13)'
- unparsed cell Tolbert_2019_table_1:row4:col26 = '84 401 (29)'
- unparsed cell Tolbert_2019_table_1:row4:col27 = '19 867 (19)'
- unparsed cell Tolbert_2019_table_1:row4:col28 = '89 539 (39)'
- unparsed cell Tolbert_2019_table_1:row5:col6 = '66.2 (34)a'
- unparsed cell Tolbert_2019_table_1:row5:col8 = '62.8 (22)b'
- unparsed cell Tolbert_2019_table_1:row5:col18 = '25.5 (18)d'
- unparsed cell Tolbert_2019_table_1:row5:col19 = '17.4 (5)d'
- unparsed cell Tolbert_2019_table_1:row5:col20 = '17.8 (5)d'
- unparsed cell Tolbert_2019_table_1:row6:col21 = '113 (27)g'
- unparsed cell Tolbert_2019_table_1:row6:col23 = '128 (26)g'
- companion parameter table 1 transcribed (82 record(s))
- unparsed cell Tolbert_2019_table_2:row0:col1 = '10 mg CLB + 400 mg KTZ'
- unparsed cell Tolbert_2019_table_2:row0:col4 = '2.0 (0.5‐2.5)'
- unparsed cell Tolbert_2019_table_2:row2:col3 = '1.0 (0.5‐2.6)'
- unparsed cell Tolbert_2019_table_2:row4:col3 = '1.3 (0.5‐4.0)'
- unparsed cell Tolbert_2019_table_2:row8:col4 = '0.5 (0.3‐1.5)'
- unparsed cell Tolbert_2019_table_2:row8:col5 = '38 528 (33)'
- unparsed cell Tolbert_2019_table_2:row9:col3 = '0.8 (0.3‐2.0)'
- unparsed cell Tolbert_2019_table_2:row9:col4 = '40 622 (29)'
- unparsed cell Tolbert_2019_table_2:row10:col2 = '50 806 (12)'
- unparsed cell Tolbert_2019_table_2:row10:col3 = '3.5 (1.5‐6.0)'
- unparsed cell Tolbert_2019_table_2:row10:col4 = '841 599 (35)'
- unparsed cell Tolbert_2019_table_2:row11:col2 = '47 511 (13)'
- unparsed cell Tolbert_2019_table_2:row11:col3 = '3.5 (2.0‐6.0)'
- unparsed cell Tolbert_2019_table_2:row11:col4 = '746 043 (35)'
- unparsed cell Tolbert_2019_table_2:row12:col3 = '2.0 (1.0‐6.0)'
- unparsed cell Tolbert_2019_table_2:row12:col6 = '19 707 (76)'
- unparsed cell Tolbert_2019_table_2:row13:col3 = '3.0 (2.0‐8.0)'
- unparsed cell Tolbert_2019_table_2:row13:col6 = '10 374 (75)'
- companion parameter table 2 transcribed (37 record(s))
- LLM selected parameter table(s) 1, 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.846 (11/13 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[auc0‐t, mean (% cv), ng•h/ml].parameter_id` | Q19 | Q74 | mismatch |
| `gpt-oss-120b` | `parameters[drug cocktail + clb]` | not captured | 9.0 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | pass | 36.0 | 36.481 | 1.0134 | 0.25 | reported t½β |
| C5_dimension_Q19 | fail | [time] | h | not captured | not captured | ['Tolbert_2019_table_1:row4:col7', 'Tolbert_2019_table_1:row4:col11', 'Tolbert_2019_table_1:row4:col13', 'Tolbert_2019_table_1:row4:col15'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tolbert_2019_table_1:row7:col3', 'Tolbert_2019_table_1:row7:col7', 'Tolbert_2019_table_1:row7:col11', 'Tolbert_2019_table_1:row7:col13', 'Tolbert_2019_table_1:row7:col15', 'Tolbert_2019_table_1:row7:col23', 'Tolbert_2019_table_1:row7:col27'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Tolbert_2019_table_1:row2:col2', 'Tolbert_2019_table_1:row2:col3', 'Tolbert_2019_table_1:row2:col4', 'Tolbert_2019_table_1:row2:col6', 'Tolbert_2019_table_1:row2:col7', 'Tolbert_2019_table_1:row2:col8', 'Tolbert_2019_table_1:row2:col10', 'Tolbert_2019_table_1:row2:col11', 'Tolbert_2019_table_1:row2:col12', 'Tolbert_2019_table_1:row2:col13', 'Tolbert_2019_table_1:row2:col14', 'Tolbert_2019_table_1:row2:col15', 'Tolbert_2019_table_1:row2:col16', 'Tolbert_2019_table_1:row2:col22', 'Tolbert_2019_table_1:row2:col23', 'Tolbert_2019_table_1:row2:col26', 'Tolbert_2019_table_1:row2:col27', 'Tolbert_2019_table_1:row2:col28'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Tolbert_2019_table_1:row5:col2', 'Tolbert_2019_table_1:row5:col3', 'Tolbert_2019_table_1:row5:col4', 'Tolbert_2019_table_1:row5:col7', 'Tolbert_2019_table_1:row5:col10', 'Tolbert_2019_table_1:row5:col11', 'Tolbert_2019_table_1:row5:col12', 'Tolbert_2019_table_1:row5:col13', 'Tolbert_2019_table_1:row5:col14', 'Tolbert_2019_table_1:row5:col15', 'Tolbert_2019_table_1:row5:col16', 'Tolbert_2019_table_1:row5:col26', 'Tolbert_2019_table_1:row5:col27', 'Tolbert_2019_table_1:row5:col28'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tolbert_2019_table_1:row6:col3', 'Tolbert_2019_table_1:row6:col7', 'Tolbert_2019_table_1:row6:col11', 'Tolbert_2019_table_1:row6:col13', 'Tolbert_2019_table_1:row6:col15', 'Tolbert_2019_table_1:row6:col27'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 1.9 L/h | not captured | not captured | ['Tolbert_2019_table_1:row7:col3', 'Tolbert_2019_table_1:row7:col7', 'Tolbert_2019_table_1:row7:col11', 'Tolbert_2019_table_1:row7:col13', 'Tolbert_2019_table_1:row7:col15', 'Tolbert_2019_table_1:row7:col23', 'Tolbert_2019_table_1:row7:col27'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 100 L | not captured | not captured | ['Tolbert_2019_table_1:row6:col3', 'Tolbert_2019_table_1:row6:col7', 'Tolbert_2019_table_1:row6:col11', 'Tolbert_2019_table_1:row6:col13', 'Tolbert_2019_table_1:row6:col15', 'Tolbert_2019_table_1:row6:col27'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_clobazam/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Tolbert_2019` / `Tolbert_2019::t_mean_cv_h`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 18:56 UTC</sub>
