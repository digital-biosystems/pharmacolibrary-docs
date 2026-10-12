<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;trastuzumab deruxtecan&quot;,&quot;href&quot;:&quot;drugs/drug_trastuzumab_deruxtecan/&quot;},{&quot;label&quot;:&quot;Yin_2021 \u00b7 final_final_released_drug_model&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;TrastuzumabDeruxtecan_Yin2021_final&quot;,&quot;label&quot;:&quot;Yin_2021_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trastuzumab_deruxtecan/TrastuzumabDeruxtecan_Yin2021_final.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# trastuzumab deruxtecan — `TrastuzumabDeruxtecan_Yin2021_final_final_released_drug_mode`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.211). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model withheld: a core parameter is unspecified.

> **Caveat** (`covariates_not_exercised`): Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

### Reviewer guidance

**Trastuzumab deruxtecan clearance and volume of distribution lacked extracted values, so placeholders were used and the model was quarantined.**

The record lists clearance (19.2 L/h) and volume (42.0 L) only for the released drug, leaving the parent compound's parameters without extracted values. Consequently, library placeholders were used for the parent's clearance and volume of distribution. Additionally, the defined covariate effects were not exercised in the simulation. Extracted — released drug: CL 19.2 L/h, V 42 L, kfm 0.0159 1/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has trastuzumab_deruxtecan, the second reading unknown; it also differs on 14 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

## Citation
Yin O et al., Population Pharmacokinetics of Trastuzu…, Clinical pharmacology and t… (2021)
  ·  DOI: [10.1002/cpt.2096](https://doi.org/10.1002/cpt.2096)

<div class="pk-model-meta" hidden drug="trastuzumab deruxtecan" model-id="TrastuzumabDeruxtecan_Yin2021_final_final_released_drug_mode" status="model_quarantined" stale="false" population="patients with HER2-positive breast cancer and other solid tumors" measured-compound="trastuzumab_deruxtecan" parameterization="mechanistic" topology="parent_metabolite"></div>

**Model structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameters:** 3 extracted, plus 5 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Released‐drug clearance (CLdrug, L/h) | `Q22` · CL | 19.2 | L/h | 5.333333333333333e-06 | [l] / [h] | not captured | exact (1.0) | Yin_2021_table_2:row2:col1, Yin_2021_table_2:row2:col2, Yin_2021_table_2:row2:col3, Yin_2021_table_2:row2:col4, Yin_2021_table_2:row2:col5 | — | not captured |
| Released‐drug volume of distribution (Vdrug, L) | `Q61` · V | 42.0 | L | 0.042 | [l] | not captured | exact (1.0) | Yin_2021_table_2:row3:col3, Yin_2021_table_2:row3:col4, Yin_2021_table_2:row3:col5 | — | not captured |
| Release rate (Krel, 1/h) | `Q305` · kfm | 0.0159 | 1/h | 4.416666666666667e-06 | [1] / [h] | not captured | exact (1.0) | Yin_2021_table_2:row4:col1, Yin_2021_table_2:row4:col2, Yin_2021_table_2:row4:col3, Yin_2021_table_2:row4:col4, Yin_2021_table_2:row4:col5 | — | not captured |
| total_bilirubin_on_cldrug | `Q900` · total_bilirubin_on_cldrug | -0.207 | not captured | not captured | not captured | not captured | not captured (not captured) | Yin_2021_table_2:row10:col1, Yin_2021_table_2:row10:col2 | — | not captured |
| body_weight_on_cldrug | `Q900` · body_weight_on_cldrug | 0.440 | not captured | not captured | not captured | not captured | not captured (not captured) | Yin_2021_table_2:row11:col1, Yin_2021_table_2:row11:col2 | — | not captured |
| age_on_vdrug | `Q900` · age_on_vdrug | 0.562 | not captured | not captured | not captured | not captured | not captured (not captured) | Yin_2021_table_2:row12:col1, Yin_2021_table_2:row12:col2 | — | not captured |
| fl_dp2_formulation_on_vdrug | `Q900` · fl_dp2_formulation_on_vdrug | 0.255 | not captured | not captured | not captured | not captured | not captured (not captured) | Yin_2021_table_2:row13:col1, Yin_2021_table_2:row13:col2 | — | not captured |
| fl_dp1_formulation_on_vdrug | `Q900` · fl_dp1_formulation_on_vdrug | -0.212 | not captured | not captured | not captured | not captured | not captured (not captured) | Yin_2021_table_2:row14:col1, Yin_2021_table_2:row14:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'Proportional residual error SD' routed out of structural estimates ('Residual variability d')
- dropped unlinked row (NIL): 'Fraction of Krel when cycle &gt; 1' — extend the ontology if this is a real PK parameter (source ['Yin_2021_table_2:row5:col1', 'Yin_2021_table_2:row5:col2', 'Yin_2021_table_2:row5:col3', 'Yin_2021_table_2:row5:col4', 'Yin_2021_table_2:row5:col5'])
- dropped unlinked row (NIL): 'Cycle effect on Krel' — extend the ontology if this is a real PK parameter (source ['Yin_2021_table_2:row6:col1', 'Yin_2021_table_2:row6:col2'])
- dropped unlinked row (NIL): 'Ritonavir on CLdrug' — extend the ontology if this is a real PK parameter (source ['Yin_2021_table_2:row7:col1', 'Yin_2021_table_2:row7:col2'])
- dropped unlinked row (NIL): 'Itraconazole on CLdrug' — extend the ontology if this is a real PK parameter (source ['Yin_2021_table_2:row8:col1', 'Yin_2021_table_2:row8:col2'])
- dropped unlinked row (NIL): 'AST on CLdrug' — extend the ontology if this is a real PK parameter (source ['Yin_2021_table_2:row9:col1', 'Yin_2021_table_2:row9:col2'])
- covariate level 'Total bilirubin on CLdrug' → Q900:total_bilirubin_on_cldrug = -0.207 (linear_fractional on Q22)
- covariate level 'Body weight on CLdrug' → Q900:body_weight_on_cldrug = 0.440 (linear_fractional on Q22)
- covariate level 'Age on Vdrug' → Q900:age_on_vdrug = 0.562 (linear_fractional on Q22)
- covariate level 'FL‐DP2 formulation on Vdrug' → Q900:fl_dp2_formulation_on_vdrug = 0.255 (linear_fractional on Q22)
- covariate level 'FL‐DP1 formulation on Vdrug' → Q900:fl_dp1_formulation_on_vdrug = -0.212 (linear_fractional on Q22)
- routed 'Variance of CLdrug' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'Variance of Vdrug' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'Variance of Krel' — extend the ontology if this is a real PK parameter (source ['Yin_2021_table_2:row20:col1', 'Yin_2021_table_2:row20:col2'])
- dropped unlinked row (NIL): 'Variance of fraction of Krel when cycle&gt; 1' — extend the ontology if this is a real PK parameter (source ['Yin_2021_table_2:row21:col1', 'Yin_2021_table_2:row21:col2'])
- metabolite volume: 'Released‐drug volume of distribution (Vdrug, L)' Q63→Q61 for released drug — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=trastuzumab_deruxtecan
- template fit: none — only the metabolite is modelled — no parent compartment
- model-stage split: 'final released‐drug model' is the final model of Yin_2021 (paper reports 2 stages: final intact t‐dxd model, final released‐drug model); same population, different model-building step
- row roles: 4 per-group rows of trastuzumab_deruxtecan covariate_effect but 0 reference group(s) — kept as printed
- row roles: 2 per-group rows of released drug covariate_effect but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 36/36 row label(s) assigned, 57 linked by role; re-tagged trastuzumab_deruxtecan→parent ×105, trastuzumab_deruxtecan→released drug ×102
- molar mass: none found for 'trastuzumab_deruxtecan' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell cpt2096-tbl-0001:row7:col7 = '–0.686 to −0.315'
- unparsed cell cpt2096-tbl-0001:row8:col7 = '–0.148 to −0.0468'
- unparsed cell cpt2096-tbl-0001:row14:col7 = '–0.397 to −0.0759'
- unparsed cell Yin_2021_table_2:row3:col1 = 'Fixed 17•BSA'
- unparsed cell Yin_2021_table_2:row3:col6 = 'Fixed 17•BSA'
- unparsed cell Yin_2021_table_2:row3:col8 = 'Fixed 17•BSA'
- unparsed cell Yin_2021_table_2:row6:col7 = '–0.160 to −0.114'
- unparsed cell Yin_2021_table_2:row7:col7 = '–0.236 to −0.0177'
- unparsed cell Yin_2021_table_2:row8:col7 = '–0.159 to −0.0535'
- unparsed cell Yin_2021_table_2:row9:col7 = '–0.290 to −0.150'
- unparsed cell Yin_2021_table_2:row10:col7 = '–0.294 to −0.128'
- unparsed cell Yin_2021_table_2:row14:col7 = '–0.289 to −0.124'
- companion parameter table 2 transcribed (108 record(s), model stage 'final')
- LLM selected parameter table(s) 1, 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.211 (4/19 fields) | 15 |

<details><summary>15 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['trastuzumab_deruxtecan', 'released drug', 'metabolism']] | [['trastuzumab deruxtecan', 'released drug', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[age_on_vdrug]` | 0.562 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[body_weight_on_cldrug]` | 0.440 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cycle effect on krel]` | not captured | -0.137 | only_one_extracted |
| `gpt-oss-120b` | `parameters[fl_dp1_formulation_on_vdrug]` | -0.212 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[fl_dp2_formulation_on_vdrug]` | 0.255 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[fraction of krel when cycle &gt; 1]` | not captured | 0.830 | only_one_extracted |
| `gpt-oss-120b` | `parameters[released‐drug clearance].covariate_forms` | ['linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional'] | ['linear_fractional', 'linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[theta_cl_bilirubin]` | not captured | -0.207 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_body_weight]` | not captured | 0.440 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q61_age]` | not captured | 0.562 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q61_formulation]` | not captured | 0.255 | only_one_extracted |
| `gpt-oss-120b` | `parameters[total_bilirubin_on_cldrug]` | -0.207 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | trastuzumab_deruxtecan | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | trastuzumab_deruxtecan | unknown | mismatch |

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
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Yin_2021_table_2:row2:col1', 'Yin_2021_table_2:row2:col2', 'Yin_2021_table_2:row2:col3', 'Yin_2021_table_2:row2:col4', 'Yin_2021_table_2:row2:col5'] |
| C5_dimension_Q305 | pass | 1 / [time] | not captured | not captured | not captured | ['Yin_2021_table_2:row4:col1', 'Yin_2021_table_2:row4:col2', 'Yin_2021_table_2:row4:col3', 'Yin_2021_table_2:row4:col4', 'Yin_2021_table_2:row4:col5'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Yin_2021_table_2:row3:col3', 'Yin_2021_table_2:row3:col4', 'Yin_2021_table_2:row3:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 19.2 | not captured | not captured | ['Yin_2021_table_2:row2:col1', 'Yin_2021_table_2:row2:col2', 'Yin_2021_table_2:row2:col3', 'Yin_2021_table_2:row2:col4', 'Yin_2021_table_2:row2:col5'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 19.2 L/h | not captured | not captured | ['Yin_2021_table_2:row2:col1', 'Yin_2021_table_2:row2:col2', 'Yin_2021_table_2:row2:col3', 'Yin_2021_table_2:row2:col4', 'Yin_2021_table_2:row2:col5'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 42 L | not captured | not captured | ['Yin_2021_table_2:row3:col3', 'Yin_2021_table_2:row3:col4', 'Yin_2021_table_2:row3:col5'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_param_coverage | not captured | pass | 2 scholar param(s) emitted or defaulted | 2 covered | not captured | all structural parameters accounted for |
| T3_rate_constant_conversion | not captured | pass | Krel (rate_constant) → CL = k·V | no explicit k·V edge found in model | not captured | rate constant must not be used raw as a clearance |
| T3_topology_template | not captured | fail | parent_metabolite → PK_3M_9C* | PK_1C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_cmin_ss | reference | skipped | 23 | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_trastuzumab_deruxtecan/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Yin_2021` / `Yin_2021::final_final_released_drug_model`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_trastuzumab_deruxtecan/models/modelica/_needs_review/TrastuzumabDeruxtecan_Yin2021_final_final_released_drug_mode.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_trastuzumab_deruxtecan/models/modelica/_needs_review/TrastuzumabDeruxtecan_Yin2021_final_final_released_drug_mode.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_trastuzumab_deruxtecan/TrastuzumabDeruxtecan_Yin2021_final_final_released_drug_mode/TrastuzumabDeruxtecan_Yin2021_final_final_released_drug_mode_matlab.zip" download>TrastuzumabDeruxtecan_Yin2021_final_final_released_drug_mode_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_trastuzumab_deruxtecan/TrastuzumabDeruxtecan_Yin2021_final_final_released_drug_mode/TrastuzumabDeruxtecan_Yin2021_final_final_released_drug_mode_matlab_simbio.zip" download>TrastuzumabDeruxtecan_Yin2021_final_final_released_drug_mode_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_trastuzumab_deruxtecan/TrastuzumabDeruxtecan_Yin2021_final_final_released_drug_mode/TrastuzumabDeruxtecan_Yin2021_final_final_released_drug_mode_sbml.zip" download>TrastuzumabDeruxtecan_Yin2021_final_final_released_drug_mode_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_trastuzumab_deruxtecan/TrastuzumabDeruxtecan_Yin2021_final_final_released_drug_mode/TrastuzumabDeruxtecan_Yin2021_final_final_released_drug_mode_cellml.zip" download>TrastuzumabDeruxtecan_Yin2021_final_final_released_drug_mode_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 21:35 UTC</sub>
