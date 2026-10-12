<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;quizartinib&quot;,&quot;href&quot;:&quot;drugs/drug_quizartinib/&quot;},{&quot;label&quot;:&quot;Kang_2020 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# quizartinib — `Quizartinib_Kang2020_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.938). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**No volume or clearance — not a compartmental population PK model.**

The paper reports no distribution volume and no clearance or elimination rate; it is an exposure/outcome paper. A reported unit could not be converted (fm), so that value has no SI equivalent.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of theta_q61_category: this record has none, the second reading 19.3; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Kang D et al., Population Pharmacokinetic Analysis of…, Journal of clinical pharmac… (2020)
  ·  DOI: [10.1002/jcph.1680](https://doi.org/10.1002/jcph.1680)

<div class="pk-model-meta" hidden drug="quizartinib" model-id="Quizartinib_Kang2020_reference" status="rejected" stale="false" population="healthy volunteers and patients with AML" measured-compound="quizartinib" parameterization="mechanistic" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 5 extracted, plus 22 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Q1 (intercompartmental clearance 1), L/h | `Q30` · Q | 3.14 | L/h | 8.722222222222222e-07 | [l] / [h] | not captured | exact (1.0) | jcph1680-tbl-0003:row8:col1, jcph1680-tbl-0003:row8:col2 | — | 23.3 (None% RSE) |
| Q2 (intercompartmental clearance 2), L/h | `Q99` · Q2 | 4.87 | L/h | 1.3527777777777778e-06 | [l] / [h] | not captured | exact (1.0) | jcph1680-tbl-0003:row13:col1, jcph1680-tbl-0003:row13:col2 | — | not captured |
| D1 (duration of zero‐order input to depot compartment), h | `Q310` · D1 | 3.86 | h | 13896.0 | [h] | not captured | space_fold (0.95) | jcph1680-tbl-0003:row18:col1, jcph1680-tbl-0003:row18:col2 | — | 8.69 (None% RSE) |
| ALAG1 (absorption lag time), h | `Q83` · tlag | 4.09 | h | 14724.0 | [h] | not captured | exact (1.0) | jcph1680-tbl-0003:row23:col1, jcph1680-tbl-0003:row23:col2 | — | 7.36 (None% RSE) |
| FMET (fraction of quizartinib converted to AC886) | `Q45` · fm | 0.500 | fraction of quizartinib converted to AC886 | not captured | [fractionofquizartinibconvertedtoac886] | not captured | exact (1.0) | Kang_2020_table_4:row5:col1 | — | not captured |
| theta_q22_category | `Q900` · theta_q22_category | 2.04 | not captured | not captured | not captured | not captured | not captured (not captured) | jcph1680-tbl-0003:row2:col1, jcph1680-tbl-0003:row2:col2 | — | not captured |
| theta_q63_category | `Q900` · theta_q63_category | 1.89 | not captured | not captured | not captured | not captured | not captured (not captured) | jcph1680-tbl-0003:row5:col1, jcph1680-tbl-0003:row5:col2 | — | not captured |
| theta_q63_weight_power | `Q900` · theta_q63_weight_power | 12.6 | not captured | not captured | not captured | not captured | not captured (not captured) | jcph1680-tbl-0003:row6:col1, jcph1680-tbl-0003:row6:col2 | — | not captured |
| theta_q63_weight_power | `Q900` · theta_q63_weight_power | 7.16 | not captured | not captured | not captured | not captured | not captured (not captured) | jcph1680-tbl-0003:row7:col1, jcph1680-tbl-0003:row7:col2 | — | not captured |
| theta_q_weight_power | `Q900` · theta_q_weight_power | 23.3 | not captured | not captured | not captured | not captured | not captured (not captured) | jcph1680-tbl-0003:row9:col1, jcph1680-tbl-0003:row9:col2 | — | not captured |
| theta_q82_category | `Q900` · theta_q82_category | 2.53 | not captured | not captured | not captured | not captured | not captured (not captured) | jcph1680-tbl-0003:row10:col1, jcph1680-tbl-0003:row10:col2 | — | not captured |
| theta_q64_weight_power | `Q900` · theta_q64_weight_power | 10.9 | not captured | not captured | not captured | not captured | not captured (not captured) | jcph1680-tbl-0003:row11:col1, jcph1680-tbl-0003:row11:col2 | — | not captured |
| theta_q64_age_power | `Q900` · theta_q64_age_power | 10.7 | not captured | not captured | not captured | not captured | not captured (not captured) | jcph1680-tbl-0003:row12:col1, jcph1680-tbl-0003:row12:col2 | — | not captured |
| theta_q78_category | `Q900` · theta_q78_category | 1.86 | not captured | not captured | not captured | not captured | not captured (not captured) | jcph1680-tbl-0003:row14:col1, jcph1680-tbl-0003:row14:col2 | — | not captured |
| theta_q49_category | `Q900` · theta_q49_category | 3.00 | not captured | not captured | not captured | not captured | not captured (not captured) | jcph1680-tbl-0003:row15:col1, jcph1680-tbl-0003:row15:col2 | — | not captured |
| theta_q49_fed | `Q900` · theta_q49_fed | 8.75 | not captured | not captured | not captured | not captured | not captured (not captured) | jcph1680-tbl-0003:row17:col1, jcph1680-tbl-0003:row17:col2 | — | not captured |
| theta_q40_category | `Q900` · theta_q40_category | 3.26 | not captured | not captured | not captured | not captured | not captured (not captured) | jcph1680-tbl-0003:row19:col1, jcph1680-tbl-0003:row19:col2 | — | not captured |
| theta_q40_fasted | `Q900` · theta_q40_fasted | 1.86 | not captured | not captured | not captured | not captured | not captured (not captured) | jcph1680-tbl-0003:row21:col1, jcph1680-tbl-0003:row21:col2 | — | not captured |
| theta_q40_fed | `Q900` · theta_q40_fed | 52.0 | not captured | not captured | not captured | not captured | not captured (not captured) | jcph1680-tbl-0003:row22:col1, jcph1680-tbl-0003:row22:col2 | — | not captured |
| theta_q27_category | `Q900` · theta_q27_category | 3.07 | not captured | not captured | not captured | not captured | not captured (not captured) | Kang_2020_table_4:row1:col1, Kang_2020_table_4:row1:col2 | — | not captured |
| theta_q351_weight_power | `Q900` · theta_q351_weight_power | 12.5 | not captured | not captured | not captured | not captured | not captured (not captured) | Kang_2020_table_4:row2:col1, Kang_2020_table_4:row2:col2 | — | not captured |
| theta_q351_race | `Q900` · theta_q351_race | 14.1 | not captured | not captured | not captured | not captured | not captured (not captured) | Kang_2020_table_4:row3:col1, Kang_2020_table_4:row3:col2 | — | not captured |
| theta_q351_category | `Q900` · theta_q351_category | 27.7 | not captured | not captured | not captured | not captured | not captured (not captured) | Kang_2020_table_4:row4:col1, Kang_2020_table_4:row4:col2 | — | not captured |
| theta_q290_category | `Q900` · theta_q290_category | 8.27 | not captured | not captured | not captured | not captured | not captured (not captured) | Kang_2020_table_4:row6:col1, Kang_2020_table_4:row6:col2 | — | not captured |
| theta_q63_category | `Q900` · theta_q63_category | 19.3 | not captured | not captured | not captured | not captured | not captured (not captured) | Kang_2020_table_4:row7:col1, Kang_2020_table_4:row7:col2 | — | not captured |
| theta_q82_category | `Q900` · theta_q82_category | 1.06 | not captured | not captured | not captured | not captured | not captured (not captured) | Kang_2020_table_4:row8:col1, Kang_2020_table_4:row8:col2 | — | not captured |
| theta_q30_category | `Q900` · theta_q30_category | 1.28 | not captured | not captured | not captured | not captured | not captured (not captured) | Kang_2020_table_4:row9:col1, Kang_2020_table_4:row9:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL (apparent clearance for parent), L/h' routed out of structural estimates ('Magnitude of Interindividual Variability')
- table section iiv: 'Vc (apparent volume of distribution for central compartment), L' routed out of structural estimates ('Magnitude of Interindividual Variability')
- table section iiv: 'Q1 (intercompartmental clearance 1), L/h' routed out of structural estimates ('Magnitude of Interindividual Variability')
- table section iiv: 'Vp1 (apparent volume of distribution for peripheral compartment 1), L' routed out of structural estimates ('Magnitude of Interindividual Variability')
- table section iiv: 'Ka (first‐order absorption constant for healthy participants), 1/h' routed out of structural estimates ('Magnitude of Interindividual Variability')
- table section iiv: 'D1 (duration of zero‐order input to depot compartment), h' routed out of structural estimates ('Magnitude of Interindividual Variability')
- table section iiv: 'F1 (relative F1 for patients)' routed out of structural estimates ('Magnitude of Interindividual Variability')
- table section iiv: 'ALAG1 (absorption lag time), h' routed out of structural estimates ('Magnitude of Interindividual Variability')
- table section iov: 'IOV in CL on occasion 1' routed out of structural estimates ('IOV in F1 on occasion 3')
- table section iov: 'IOV in Vc on occasion 1' routed out of structural estimates ('IOV in CL on occasion 4')
- table section iov: 'RV (healthy volunteer CCV component)' routed out of structural estimates ('IOV in Vc on occasion 4')
- table section iov: 'RV (patient CCV component)' routed out of structural estimates ('IOV in Vc on occasion 4')
- table section iov: 'RV (healthy volunteer additive component)' routed out of structural estimates ('IOV in Vc on occasion 4')
- table section iov: 'RV (patient additive component)' routed out of structural estimates ('IOV in Vc on occasion 4')
- table section iov: 'Minimum value of the objective function = 72 031.19' routed out of structural estimates ('IOV in Vc on occasion 4')
- table section iiv: 'Vcm (apparent central volume of distribution for metabolite), L' routed out of structural estimates ('Magnitude of Interindividual Variability')
- table section iiv: 'IIV in CLm in healthy volunteers' routed out of structural estimates ('Magnitude of Interindividual Variability')
- table section iiv: 'IIV in CLm in patients' routed out of structural estimates ('Magnitude of Interindividual Variability')
- table section iiv: 'Minimum value of the objective function = −10 302.217' routed out of structural estimates ('Magnitude of Interindividual Variability')
- unit_dimension_unknown: 'fraction of quizartinib converted to AC886' (fm)
- dropped unlinked row (NIL): 'Minimum value of the objective function = −10 302.217' — extend the ontology if this is a real PK parameter (source ['Kang_2020_table_4:row14:col1', 'Kang_2020_table_4:row14:col2'])
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 0.082 (source ['jcph1680-tbl-0003:footnote']); the table cell was unparseable — needs review
- dropped value-less row: 'F1'
- covariate effect for Q22 has no base parameter row (kept as unattached equation-variable)
- dropped duplicate covariate effect 'category'/'' on Q22 — ambiguous identity (two shifts cannot share one category)
- covariate effect for Q63 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q82 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q64 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q78 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q49 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q40 has no base parameter row (kept as unattached equation-variable)
- dropped duplicate covariate effect 'category'/'' on Q40 — ambiguous identity (two shifts cannot share one category)
- covariate effect for Q27 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q351 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q290 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q30 has no base parameter row (kept as unattached equation-variable)
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q30 (Q1 (intercompartmental clearance 1), L/h); Q99 (Q2 (intercompartmental clearance 2), L/h)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=quizartinib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at route_to_review — not promoted
- row roles: 6 per-group rows of quizartinib residual_error but 0 reference group(s) — kept as printed
- row roles: 2 per-group rows of AC886 variability but 0 reference group(s) — kept as printed
- row roles: per-genotype parameters — typical value from the reference group: Ka (first‐order absorption constant for healthy participants), 1/h
- row roles (LLM): model_class=compartmental; 46/46 row label(s) assigned, 32 linked by role; re-tagged quizartinib→parent ×66, quizartinib→AC886 ×20
- molar mass: none of 1 PubChem candidate(s) is 'AC886' (LLM) — left in mass units
- molar mass: none found for 'AC886' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell jcph1680-tbl-0003:row2:col3 = '55.1% CV'
- unparsed cell jcph1680-tbl-0003:row5:col3 = '27.6% CV'
- unparsed cell jcph1680-tbl-0003:row8:col3 = '24.8% CV'
- unparsed cell jcph1680-tbl-0003:row10:col3 = '39.7% CV'
- unparsed cell jcph1680-tbl-0003:row15:col3 = '38.5% CV'
- unparsed cell jcph1680-tbl-0003:row18:col3 = '69.3% CV'
- unparsed cell jcph1680-tbl-0003:row19:col3 = '34.8% CV'
- unparsed cell jcph1680-tbl-0003:row23:col3 = '62.0% CV'
- unparsed cell jcph1680-tbl-0003:row24:col1 = '22.6% CV'
- unparsed cell jcph1680-tbl-0003:row26:col1 = '40.9% CV'
- unparsed cell jcph1680-tbl-0003:row30:col1 = '20.3% CV'
- unparsed cell jcph1680-tbl-0003:row34:col3 = '49.4‐7.50% CVb'
- unparsed cell jcph1680-tbl-0003:row36:col3 = '52.6‐19.4% CVc'
- unparsed cell Kang_2020_table_4:row6:col3 = '117% CV'
- unparsed cell Kang_2020_table_4:row10:col3 = '45.9% CV'
- unparsed cell Kang_2020_table_4:row11:col3 = '64.1% CV'
- unparsed cell Kang_2020_table_4:row12:col3 = '0.263 SD'
- unparsed cell Kang_2020_table_4:row13:col3 = '0.412 SD'
- companion parameter table 4 transcribed (28 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | partly confirmed | 0.938 (30/32 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[theta_q61_category]` | not captured | 19.3 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q63_category]` | 19.3 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | fail | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['jcph1680-tbl-0003:row8:col1', 'jcph1680-tbl-0003:row8:col2'] |
| C5_dimension_Q310 | pass | [time] | not captured | not captured | not captured | ['jcph1680-tbl-0003:row18:col1', 'jcph1680-tbl-0003:row18:col2'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['jcph1680-tbl-0003:row23:col1', 'jcph1680-tbl-0003:row23:col2'] |
| C5_dimension_Q99 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['jcph1680-tbl-0003:row13:col1', 'jcph1680-tbl-0003:row13:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_quizartinib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kang_2020` / `Kang_2020::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 05:29 UTC</sub>
