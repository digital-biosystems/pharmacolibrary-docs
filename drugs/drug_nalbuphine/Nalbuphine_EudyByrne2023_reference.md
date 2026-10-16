<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;nalbuphine&quot;,&quot;href&quot;:&quot;drugs/drug_nalbuphine/&quot;},{&quot;label&quot;:&quot;Eudy-Byrne_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nalbuphine_Gao2022_reference&quot;,&quot;label&quot;:&quot;Gao_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nalbuphine/Nalbuphine_Gao2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nalbuphine_Nie2023_estimates&quot;,&quot;label&quot;:&quot;Nie_2023_estimates&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nalbuphine/Nalbuphine_Nie2023_estimates.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nalbuphine_Zhu2024_reference&quot;,&quot;label&quot;:&quot;Zhu_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nalbuphine/Nalbuphine_Zhu2024_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nalbuphine_EudyByrne2023_reference&quot;,&quot;label&quot;:&quot;Eudy-Byrne_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nalbuphine/Nalbuphine_EudyByrne2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Nalbuphine_Nie2023_final_model&quot;,&quot;label&quot;:&quot;Nie_2023_final_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nalbuphine/Nalbuphine_Nie2023_final_model.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# nalbuphine — `Nalbuphine_EudyByrne2023_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.793). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

> **Caveat** (`covariates_not_exercised`): Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

### Reviewer guidance

**V2/F volume of distribution is missing from the record, and covariate scenarios were not simulated for nalbuphine.**

The parameter coverage check found V2/F neither emitted nor defaulted, leaving four parameters covered out of five expected. The record includes covariate effects, but only the reference individual was simulated, so the defined covariate scenarios were not exercised. Extracted — nalbuphine: CL/F 573 L/h, V2/F 4.82e+03 L, V3/F 3.76e+04 L, Q/F 106 L/h, kabs 0.826 1/h, D1 0.947 h, V/F 2.57e+03 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has nalbuphine, the second reading unknown; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Eudy-Byrne R et al., A population pharmacokinetic-pharmacody…, British journal of clinical… (2023)
  ·  DOI: [10.1111/bcp.15663](https://doi.org/10.1111/bcp.15663)

<div class="pk-model-meta" hidden drug="nalbuphine" model-id="Nalbuphine_EudyByrne2023_reference" status="needs_review" stale="false" population="patients with prurigo nodularis" measured-compound="nalbuphine" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 7 extracted, plus 4 covariate effects.

**Parameterization:** CL/F, Q/F, V/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 573 | L/h | 0.0001591666666666667 | [l] / [h] | 14.3 | exact (1.0) | Eudy-Byrne_2023_table_p4_1:row1:col3, Eudy-Byrne_2023_table_p4_1:row1:col4 | — | None (None% RSE) |
| V2/F (L) | `Q82` · V2/F | 4.82E+03 | L | 4.82 | [l] | 14.1 | exact (1.0) | Eudy-Byrne_2023_table_p4_1:row2:col3, Eudy-Byrne_2023_table_p4_1:row2:col4 | — | not captured |
| V3/F (L) | `Q78` · V3/F | 3.76E+04 | L | 37.6 | [l] | 66.9 | exact (1.0) | Eudy-Byrne_2023_table_p4_1:row3:col3, Eudy-Byrne_2023_table_p4_1:row3:col4 | — | not captured |
| Q/F (L/h) | `Q69` · Q/F | 106 | L/h | 2.9444444444444445e-05 | [l] / [h] | 41.1 | exact (1.0) | Eudy-Byrne_2023_table_p4_1:row4:col3, Eudy-Byrne_2023_table_p4_1:row4:col4 | — | not captured |
| KA (1/h) | `Q49` · kabs | 0.826 | 1/h | 0.00022944444444444444 | 1/h | 17.2 | exact (1.0) | Eudy-Byrne_2023_table_p4_1:row5:col3, Eudy-Byrne_2023_table_p4_1:row5:col4 | — | not captured |
| D1 (h) | `Q310` · D1 | 0.947 | h | 3409.2 | [h] | 15.6 | exact (1.0) | Eudy-Byrne_2023_table_p4_1:row6:col3, Eudy-Byrne_2023_table_p4_1:row6:col4 | — | not captured |
| theta_v2_f_wt_v2_f | `Q900` · theta_v2_f_wt_v2_f | 2.46 | not captured | not captured | not captured | 18.3 | not captured (not captured) | Eudy-Byrne_2023_table_p4_1:row8:col2, Eudy-Byrne_2023_table_p4_1:row8:col3, Eudy-Byrne_2023_table_p4_1:row8:col4 | — | not captured |
| theta_q314_age_power | `Q900` · theta_q314_age_power | -1.7 | not captured | not captured | not captured | 25.1 | not captured (not captured) | Eudy-Byrne_2023_table_p4_1:row9:col3, Eudy-Byrne_2023_table_p4_1:row9:col4 | — | not captured |
| theta_q_f_age_power | `Q900` · theta_q_f_age_power | 5.31 | not captured | not captured | not captured | 39.5 | not captured (not captured) | Eudy-Byrne_2023_table_p4_1:row10:col3, Eudy-Byrne_2023_table_p4_1:row10:col4 | — | not captured |
| theta_v3_f_age_v3_f | `Q900` · theta_v3_f_age_v3_f | 0.00398 | not captured | not captured | not captured | 5.84E+04 | not captured (not captured) | Eudy-Byrne_2023_table_p4_1:row11:col2, Eudy-Byrne_2023_table_p4_1:row11:col3, Eudy-Byrne_2023_table_p4_1:row11:col4 | — | not captured |
| Vd/F | `Q76` · V/F | 2570.0 | L | 2.57 | L | not captured | review_gapfill (0.7) | Zhu_2024:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'IIV-CL/F' routed out of structural estimates ('Interindividual variance parameters')
- table section iiv: 'IIV-scale' routed out of structural estimates ('Interindividual variance parameters')
- column 'description' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- routed 'Proportional' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- routed 'Additive' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- covariate effect for Q314 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'KA (1/h)' → 1/h (from the paper text: "Table 1 explicitly lists the unit for KA as '(1/h)' next to the parameter name: 'KA (1/h) θ 5 First order absorption rat")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=nalbuphine
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- gap-filled Q76 (V/F) from Zhu_2024's review values (primary lacked it)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- unparsed cell Eudy-Byrne_2023_table_p4_1:row1:col5 = '413, 734'
- unparsed cell Eudy-Byrne_2023_table_p4_1:row2:col5 = '3.49e+03, 6.15e+03'
- unparsed cell Eudy-Byrne_2023_table_p4_1:row3:col5 = '−1.17e+04, 8.69e+04'
- unparsed cell Eudy-Byrne_2023_table_p4_1:row4:col5 = '20.5, 191'
- unparsed cell Eudy-Byrne_2023_table_p4_1:row5:col5 = '0.547, 1.10'
- unparsed cell Eudy-Byrne_2023_table_p4_1:row6:col5 = '0.657, 1.24'
- unparsed cell Eudy-Byrne_2023_table_p4_1:row8:col5 = '1.58, 3.35'
- unparsed cell Eudy-Byrne_2023_table_p4_1:row9:col5 = '−2.54, −0.866'
- unparsed cell Eudy-Byrne_2023_table_p4_1:row10:col5 = '1.19, 9.43'
- unparsed cell Eudy-Byrne_2023_table_p4_1:row11:col5 = '−4.55, 4.56'
- unparsed cell Eudy-Byrne_2023_table_p4_1:row13:col5 = '0.335, 1.05'
- unparsed cell Eudy-Byrne_2023_table_p4_1:row14:col2 = 'Scale parameter for V2 RE'
- unparsed cell Eudy-Byrne_2023_table_p4_1:row14:col5 = '0.580, 1.01'
- unparsed cell Eudy-Byrne_2023_table_p4_1:row16:col5 = '0.0753, 0.0948'
- unparsed cell Eudy-Byrne_2023_table_p4_1:row17:col5 = '−0.0253, 0.0693'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.793 (23/29 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl/f].covariate_forms` | [] | ['power'] | mismatch |
| `gpt-oss-120b` | `parameters[theta_cl_f_age_power]` | not captured | -1.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q314_age_power]` | -1.7 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd/f]` | 2570.0 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | nalbuphine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | nalbuphine | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Eudy-Byrne_2023_table_p4_1:row1:col3', 'Eudy-Byrne_2023_table_p4_1:row1:col4'] |
| C5_dimension_Q310 | pass | [time] | not captured | not captured | not captured | ['Eudy-Byrne_2023_table_p4_1:row6:col3', 'Eudy-Byrne_2023_table_p4_1:row6:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Eudy-Byrne_2023_table_p4_1:row5:col3', 'Eudy-Byrne_2023_table_p4_1:row5:col4'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Eudy-Byrne_2023_table_p4_1:row4:col3', 'Eudy-Byrne_2023_table_p4_1:row4:col4'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Zhu_2024:review'] |
| C5_dimension_Q78 | pass | [length] ** 3 | not captured | not captured | not captured | ['Eudy-Byrne_2023_table_p4_1:row3:col3', 'Eudy-Byrne_2023_table_p4_1:row3:col4'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Eudy-Byrne_2023_table_p4_1:row2:col3', 'Eudy-Byrne_2023_table_p4_1:row2:col4'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 573 L/h | not captured | not captured | ['Eudy-Byrne_2023_table_p4_1:row1:col3', 'Eudy-Byrne_2023_table_p4_1:row1:col4'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 2.57e+03 L | not captured | not captured | ['Zhu_2024:review'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 4.82e+03 L | not captured | not captured | ['Eudy-Byrne_2023_table_p4_1:row2:col3', 'Eudy-Byrne_2023_table_p4_1:row2:col4'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=nalbuphine) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | fail | 5 scholar param(s) emitted or defaulted | 4 covered | not captured | neither emitted nor in defaulted[]: ['V2/F'] |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_nalbuphine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Eudy-Byrne_2023` / `Eudy-Byrne_2023::reference`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_nalbuphine/models/modelica/Nalbuphine_EudyByrne2023_reference.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_nalbuphine/models/modelica/Nalbuphine_EudyByrne2023_reference.deviation.json`
- sim: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_nalbuphine/models/modelica/Nalbuphine_EudyByrne2023_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_nalbuphine/Nalbuphine_EudyByrne2023_reference/Nalbuphine_EudyByrne2023_reference_modelica.zip" download>Nalbuphine_EudyByrne2023_reference_modelica.zip</a> <span class="pk-size">(4.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_nalbuphine/Nalbuphine_EudyByrne2023_reference/Nalbuphine_EudyByrne2023_reference_fmi.zip" download>Nalbuphine_EudyByrne2023_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_nalbuphine/Nalbuphine_EudyByrne2023_reference/Nalbuphine_EudyByrne2023_reference_matlab.zip" download>Nalbuphine_EudyByrne2023_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_nalbuphine/Nalbuphine_EudyByrne2023_reference/Nalbuphine_EudyByrne2023_reference_matlab_simbio.zip" download>Nalbuphine_EudyByrne2023_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_nalbuphine/Nalbuphine_EudyByrne2023_reference/Nalbuphine_EudyByrne2023_reference_sbml.zip" download>Nalbuphine_EudyByrne2023_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_nalbuphine/Nalbuphine_EudyByrne2023_reference/Nalbuphine_EudyByrne2023_reference_cellml.zip" download>Nalbuphine_EudyByrne2023_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_nalbuphine/Nalbuphine_EudyByrne2023_reference/Nalbuphine_EudyByrne2023_reference.svg" alt="Nalbuphine_EudyByrne2023_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 27 mg, single dose, first-order absorption (ka 0.826 /h, F 1). Doses in the paper: 27, 54, 81, 108, 162 mg.

<dbs-fmusim paramsurl="drugs/drug_nalbuphine/Nalbuphine_EudyByrne2023_reference/Nalbuphine_EudyByrne2023_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_nalbuphine/Nalbuphine_EudyByrne2023_reference/Nalbuphine_EudyByrne2023_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Nalbuphine_EudyByrne2023_reference_params.json` · controls `Nalbuphine_EudyByrne2023_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 05:31 UTC</sub>
