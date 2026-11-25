<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;clopidogrel&quot;,&quot;href&quot;:&quot;drugs/drug_clopidogrel/&quot;},{&quot;label&quot;:&quot;Grafeneder_2024 \u00b7 hv_2&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Clopidogrel_Jung2024_reference&quot;,&quot;label&quot;:&quot;Jung_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clopidogrel/Clopidogrel_Jung2024_reference.md&quot;,&quot;status&quot;:&quot;Curated (human-checked)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Clopidogrel_Ma2014_reference&quot;,&quot;label&quot;:&quot;Ma_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clopidogrel/Clopidogrel_Ma2014_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Clopidogrel_Yousef2013_reference&quot;,&quot;label&quot;:&quot;Yousef_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clopidogrel/Clopidogrel_Yousef2013_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Clopidogrel_Henrich2021_reference&quot;,&quot;label&quot;:&quot;Henrich_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clopidogrel/Clopidogrel_Henrich2021_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Jung_2024_PRU&quot;,&quot;label&quot;:&quot;Jung_2024 \u00b7 PRU&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_clopidogrel/pd_Jung_2024_PRU.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Simon_2015_IPA&quot;,&quot;label&quot;:&quot;Simon_2015 \u00b7 IPA&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_clopidogrel/pd_Simon_2015_IPA.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pgx_Jung_2024_CYP2C19_Q45&quot;,&quot;label&quot;:&quot;Jung_2024 \u00b7 CYP2C19&quot;,&quot;group&quot;:&quot;PGx&quot;,&quot;href&quot;:&quot;drugs/drug_clopidogrel/pgx_Jung_2024_CYP2C19_Q45.md&quot;,&quot;status&quot;:&quot;Simulated \u00b7 quantitative&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# clopidogrel — `Clopidogrel_Grafeneder2024_hv_2`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> No value for clopidogrel's clearance and volume of distribution; the covariate scenarios were not simulated (+3 more).

<div class="pk-model-meta" hidden drug="clopidogrel" model-id="Clopidogrel_Grafeneder2024_hv_2" status="model_quarantined" stale="false" population="hemodialysis patients and healthy volunteers" measured-compound="clopidogrel active metabolite" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Grafeneder J, van Os W, Minichmayr IK, Kovacevic Miljevic KD, Reiter B, Säemann MD et al. Prospective Trial on the Pharmacokinetics of Clopidogrel in Hemodialysis Patients. Kidney international reports 9(10):2970–2980 (2024).
  ·  DOI: [10.1016/j.ekir.2024.07.029](https://doi.org/10.1016/j.ekir.2024.07.029)

## Population and dosing

**Population:** hemodialysis patients and healthy volunteers · condition end-stage renal disease · age group adult · n = 32.

**Dosing:** 75, 300 mg, oral, multiple, every 24 h.

**Dosed compound ≠ measured compound:** dosed clopidogrel, measured clopidogrel active metabolite.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 11 extracted, plus 3 covariate effects.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax,CLO [ng/ml] | Cmax | 2.3 | ng/ml |
| Cmax ratio CAM:CLO | Cmax_ratio | 12.8 |  |
| AUClast_CLO [ng/ml·min] | AUClast | 188 | ng/ml·min |
| AUCinf_CLO [ng/ml·min] | AUC∞ | 227 | ng/ml·min |
| t1/2_CLO [min] | t1/2z | 87.5 | min |
| Cmax [μg/ml] | Cmax | 9.6 | μg/ml |
| AUClast [μg/ml·min] | AUClast | 409 | μg/ml·min |
| AUCinf [μg/ml·min] | AUC∞ | 468 | μg/ml·min |
| t1/2 [min] | t1/2z | 76.8 | min |
| Clearance [ml/min] | CL | 85.7 | ml/min |
| VD [ml] | V | 7528 | ml |
| intermediate_metabolizer | intermediate_metabolizer | 7 |  |
| normal_metabolizer | normal_metabolizer | 8 |  |
| rapid_metabolizer | rapid_metabolizer | 1 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.15). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No value for clopidogrel's clearance and volume of distribution; the covariate scenarios were not simulated (+3 more).**

The model was built, but clopidogrel's clearance and volume of distribution had no value, so a library placeholder stood in and the model was held back rather than published with an invented number. The base model was simulated, not the covariate effects the record defines. Extracted — clopidogrel: Cmax 2.3 ng/ml, Cmax_ratio 12.8, AUClast 188 ng/ml·min, AUC∞ 227 ng/ml·min, t1/2z 87.5 min; pantoprazole: Cmax 9.6 μg/ml, AUClast 409 μg/ml·min, AUC∞ 468 μg/ml·min, t1/2z 76.8 min, CL 85.7 ml/min, V 7.53e+03 ml.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has clopidogrel → clopidogrel active metabolite (metabolism), the second reading none; it also differs on 16 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax,CLO [ng/ml] | `Q32` · Cmax | 2.3 | ng/ml | 2.3e-06 | kg/m3 | ng/ml | llm_confirmed (0.6) | tbl2:row2:col1 |
| Cmax ratio CAM:CLO | `Q33` · Cmax_ratio | 12.8 |  | 12.8 |  |  | llm_corrected (0.6) | tbl2:row4:col1 |
| AUClast_CLO [ng/ml·min] | `Q74` · AUClast | 188 | ng/ml·min | 0.01128 | kg*s/m3 | ng/(min·ml) | llm (0.6) | tbl2:row5:col1 |
| AUCinf_CLO [ng/ml·min] | `Q17` · AUC∞ | 227 | ng/ml·min | 0.01362 | kg*s/m3 | ng/(min·ml) | llm (0.6) | tbl2:row6:col1, tbl2:row8:col1 |
| t1/2_CLO [min] | `Q57` · t1/2z | 87.5 | min | 5250 | s | min | llm (0.6) | tbl2:row9:col1 |
| Cmax [μg/ml] | `Q32` · Cmax | 9.6 | μg/ml | 0.0096 | kg/m3 | µg/ml | llm_confirmed (0.6) | tbl2:row12:col1 |
| AUClast [μg/ml·min] | `Q74` · AUClast | 409 | μg/ml·min | 24.54 | kg*s/m3 | µg/(min·ml) | llm_confirmed (0.6) | tbl2:row13:col1 |
| AUCinf [μg/ml·min] | `Q17` · AUC∞ | 468 | μg/ml·min | 28.08 | kg*s/m3 | µg/(min·ml) | llm_confirmed (0.6) | tbl2:row14:col1 |
| t1/2 [min] | `Q57` · t1/2z | 76.8 | min | 4608 | s | min | llm_confirmed (0.6) | tbl2:row15:col1 |
| Clearance [ml/min] | `Q22` · CL | 85.7 | ml/min | 1.428e-06 | m3/s | ml/min | llm_confirmed (0.6) | tbl2:row16:col1 |
| VD [ml] | `Q61` · V | 7528 | ml | 0.007528 | m3 | ml | llm_confirmed (0.6) | tbl2:row17:col1 |
| intermediate_metabolizer | `Q900` · intermediate_metabolizer | 7 |  |  |  |  |  | tbl2:row20:col1 |
| normal_metabolizer | `Q900` · normal_metabolizer | 8 |  |  |  |  |  | tbl2:row21:col1 |
| rapid_metabolizer | `Q900` · rapid_metabolizer | 1 |  |  |  |  |  | tbl2:row22:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q32 ('Cmax,CAM [ng/ml]', value '24.7') — already have one for this compound
- dropped duplicate Q74 ('AUClast_CAM [ng/ml·min]', value '1596') — already have one for this compound
- dropped duplicate Q57 ('t1/2_CAM [min]', value '35.2') — already have one for this compound
- covariate level 'Intermediate metabolizer' → Q900:intermediate_metabolizer = 7 (linear_fractional on Q22)
- covariate level 'Normal metabolizer' → Q900:normal_metabolizer = 8 (linear_fractional on Q22)
- covariate level 'Rapid metabolizer' → Q900:rapid_metabolizer = 1 (linear_fractional on Q22)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=clopidogrel active metabolite
- template fit: PK_3M_3C — hepatic compartment; parent 1 + hepatic, metabolites [0] (site hepatic: 'A liver compartment was included in the model to account for the first-pass metabolism of clopidogrel.')
- pharmacogenetic covariate 'intermediate_metabolizer' (intermediate metabolizer) — PGx domain
- pharmacogenetic covariate 'normal_metabolizer' (normal metabolizer) — PGx domain
- pharmacogenetic covariate 'rapid_metabolizer' (rapid metabolizer) — PGx domain
- population split: 'hv n = 16' subgroup of Grafeneder_2024 (paper reports 4 populations: hdp, hdp n = 17, hv, hv n = 16)
- row roles: 7 per-group rows of clopidogrel summary_statistic but 0 reference group(s) — kept as printed
- row roles: 6 per-group rows of clopidogrel active metabolite summary_statistic but 0 reference group(s) — kept as printed
- row roles: 4 per-group rows of none summary_statistic but 0 reference group(s) — kept as printed
- row roles: 9 per-group rows of pantoprazole summary_statistic but 0 reference group(s) — kept as printed
- row roles: 26 row(s) kept on the molecule their table section names, against the LLM's assignment
- row roles (LLM): model_class=compartmental; 30/30 row label(s) assigned, 0 linked by role; re-tagged parent→pantoprazole ×42
- review gap-fill skipped: this record measures 'clopidogrel active metabolite', not clopidogrel — the review values are the parent's

**Extraction notes:**
- table tbl2: ambiguous_numeric_format
- table Grafeneder_2024_table_3: missing_label
- table Grafeneder_2024_table_3: ambiguous_numeric_format
- companion parameter table 3 transcribed (96 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.15 (3/20 fields) | 17 |

<details><summary>17 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['clopidogrel', 'clopidogrel active metabolite', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[aucinf [ug/ml min]]` | 468 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[aucinf_clo [ng/ml min]]` | 227 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[auclast [ug/ml min]]` | 409 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[auclast_clo [ng/ml min]]` | 188 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance [ml/min]]` | 85.7 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance]` |  | 85.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax [ug/ml]]` | 9.6 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax ratio cam:clo]` | 12.8 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax,clo [ng/ml]]` | 2.3 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[intermediate_metabolizer]` | 7 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[normal_metabolizer]` | 8 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[rapid_metabolizer]` | 1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2 [min]]` | 76.8 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2_clo [min]]` | 87.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd [ml]]` | 7528 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd]` |  | 7528 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 11 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['tbl2:row6:col1', 'tbl2:row8:col1'] |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['tbl2:row14:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['tbl2:row16:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['tbl2:row2:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['tbl2:row12:col1'] |
| C5_dimension_Q57 | pass | [time] |  | ['tbl2:row9:col1'] |
| C5_dimension_Q57 | pass | [time] |  | ['tbl2:row15:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['tbl2:row17:col1'] |
| C5_dimension_Q74 | pass | [mass] * [time] / [length] ** 3 |  | ['tbl2:row5:col1'] |
| C5_dimension_Q74 | pass | [mass] * [time] / [length] ** 3 |  | ['tbl2:row13:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 5.14 L/h | ['tbl2:row16:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 7.53 L | ['tbl2:row17:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_param_coverage |  | pass | 2 scholar param(s) emitted or defaulted | 2 covered |  | all structural parameters accounted for |
| T3_topology_template |  | fail | parent_metabolite → PK_3M_9C* | PK_1C |  | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | defaulted_parameters: not acceptable |  | LLM adjudication → deterministic rule |
| X1_cross_check |  | fail | no second reader contradicts | verdict disputed; agreement 0.15 (3 of 20 compared fields agree, 16 extracted by one reader only); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) | 0.15 | cross-check contradicted by a second reader: verdict disputed; agreement 0.15 (3 of 20 compared fields agree, 16 extracted by one reader only); 0 of 1 reader(s) without a contradiction (gpt-oss-120b) |
| T1_cmax | reference | skipped | 3.3 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 7.7 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped |  |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 12.2 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 1.5 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 1.5 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 12.8 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 2.3 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 7.7 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 24.7 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 12.2 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 12.8 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 1.5 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 9.6 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 2.9 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 1.9 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 3.1 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 1.54 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 7.6 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 10.2 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 22.1 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 24.8 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 35.45 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 12.2 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 12.2 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 13.5 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 8.1 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 24.2 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 1.6 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 1.4 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 12 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 6.8 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 18.7 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 3.2 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 2.7 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 87.5 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 127 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 35.2 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 74.1 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 76.8 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 130 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 87.5 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 82 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 131 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 81.8 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 138 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 33 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 43.2 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 24 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 49.2 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 197 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 83.9 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 69.3 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 57.3 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 195 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 112 |  |  | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 130 |  |  | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bclopidogrel%5D%20Clopidogrel_Grafeneder2024_hv_2&body=Drug%3A%20clopidogrel%0ARecord%3A%20Clopidogrel_Grafeneder2024_hv_2%0APaper%3A%20Grafeneder_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_clopidogrel/Clopidogrel_Grafeneder2024_hv_2%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-20 05:52 UTC</sub>
