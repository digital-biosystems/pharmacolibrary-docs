<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;trastuzumab deruxtecan&quot;,&quot;href&quot;:&quot;drugs/drug_trastuzumab_deruxtecan/&quot;},{&quot;label&quot;:&quot;Yin_2021 \u00b7 final&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;TrastuzumabDeruxtecan_Yin2021_final&quot;,&quot;label&quot;:&quot;Yin_2021_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trastuzumab_deruxtecan/TrastuzumabDeruxtecan_Yin2021_final.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# trastuzumab deruxtecan — `TrastuzumabDeruxtecan_Yin2021_final`

> ## <span class="pk-badge pk-badge--red" title="covariates_not_exercised: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.304). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

> **Caveat** (`covariates_not_exercised`): the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.

### Reviewer guidance

**The record was rejected because the simulated output was the parent drug instead of the measured metabolite, and the model structure lacked the peripheral compartment.**

The output variable was the central compartment concentration of the parent drug, whereas the measured compound was the released drug metabolite. The model topology was a one-compartment structure, which does not match the parent-metabolite structure requiring a peripheral compartment. Additionally, the covariate scenarios were not simulated, so the defined covariate effects were not exercised. Extracted — trastuzumab deruxtecan: CL 0.421 L/day, V1 2.77 L, Q 0.199 L/day, V2 5.16 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has trastuzumab_deruxtecan, the second reading unknown; it also differs on 15 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

## Citation
Yin O et al., Population Pharmacokinetics of Trastuzu…, Clinical pharmacology and t… (2021)
  ·  DOI: [10.1002/cpt.2096](https://doi.org/10.1002/cpt.2096)

<div class="pk-model-meta" hidden drug="trastuzumab deruxtecan" model-id="TrastuzumabDeruxtecan_Yin2021_final" status="rejected" stale="false" population="patients with HER2-positive breast cancer and other solid tumors" measured-compound="trastuzumab_deruxtecan" parameterization="mechanistic" topology="parent_metabolite"></div>

**Model structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameters:** 4 extracted, plus 7 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Clearance (CLintact, L/day) | `Q22` · CL | 0.421 | L/day | 4.872685185185185e-09 | [l] / [d] | not captured | exact (1.0) | cpt2096-tbl-0001:row3:col1, cpt2096-tbl-0001:row3:col2, cpt2096-tbl-0001:row3:col3, cpt2096-tbl-0001:row3:col4, cpt2096-tbl-0001:row3:col5 | — | not captured |
| Central volume of distribution (V1,intact, L) | `Q63` · V1 | 2.77 | L | 0.00277 | [l] | not captured | exact (1.0) | cpt2096-tbl-0001:row4:col1, cpt2096-tbl-0001:row4:col2, cpt2096-tbl-0001:row4:col3, cpt2096-tbl-0001:row4:col4, cpt2096-tbl-0001:row4:col5 | — | not captured |
| Distributional clearance (Qintact, L/day) | `Q30` · Q | 0.199 | L/day | 2.303240740740741e-09 | [l] / [d] | not captured | llm_corrected (0.6) | cpt2096-tbl-0001:row5:col1, cpt2096-tbl-0001:row5:col2, cpt2096-tbl-0001:row5:col3, cpt2096-tbl-0001:row5:col4, cpt2096-tbl-0001:row5:col5 | — | not captured |
| Peripheral volume of distribution (V2,intact, L) | `Q64` · V2 | 5.16 | L | 0.0051600000000000005 | [l] | not captured | exact (1.0) | cpt2096-tbl-0001:row6:col1, cpt2096-tbl-0001:row6:col2, cpt2096-tbl-0001:row6:col3, cpt2096-tbl-0001:row6:col4, cpt2096-tbl-0001:row6:col5 | — | not captured |
| albumin_on_clintact | `Q900` · albumin_on_clintact | -0.533 | not captured | not captured | not captured | not captured | not captured (not captured) | cpt2096-tbl-0001:row7:col1, cpt2096-tbl-0001:row7:col2 | — | not captured |
| country_japan_on_clintact_d | `Q900` · country_japan_on_clintact_d | -0.0970 | not captured | not captured | not captured | not captured | not captured (not captured) | cpt2096-tbl-0001:row8:col1, cpt2096-tbl-0001:row8:col2 | — | not captured |
| sex_male_on_clintact | `Q900` · sex_male_on_clintact | 0.174 | not captured | not captured | not captured | not captured | not captured (not captured) | cpt2096-tbl-0001:row9:col1, cpt2096-tbl-0001:row9:col2 | — | not captured |
| body_weight_on_clintact | `Q900` · body_weight_on_clintact | 0.370 | not captured | not captured | not captured | not captured | not captured (not captured) | cpt2096-tbl-0001:row11:col1, cpt2096-tbl-0001:row11:col2 | — | not captured |
| sex_male_on_v1_intact | `Q900` · sex_male_on_v1_intact | 0.197 | not captured | not captured | not captured | not captured | not captured (not captured) | cpt2096-tbl-0001:row12:col1, cpt2096-tbl-0001:row12:col2 | — | not captured |
| country_japan_on_v2_intact_d | `Q900` · country_japan_on_v2_intact_d | -0.262 | not captured | not captured | not captured | not captured | not captured (not captured) | cpt2096-tbl-0001:row14:col1, cpt2096-tbl-0001:row14:col2 | — | not captured |
| theta_v1_body_weight | `Q900` · theta_v1_body_weight | 0.489 | not captured | not captured | not captured | not captured | not captured (not captured) | cpt2096-tbl-0001:row13:col1, cpt2096-tbl-0001:row13:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'Proportional residual error SD' routed out of structural estimates ('Residual variability e')
- table section residual_error: 'Additive residual error SD (ng/mL)' routed out of structural estimates ('Residual variability e')
- covariate level 'Albumin on CLintact' → Q900:albumin_on_clintact = -0.533 (linear_fractional on Q22)
- covariate level 'Country (Japan) on CLintact d' → Q900:country_japan_on_clintact_d = -0.0970 (linear_fractional on Q22)
- covariate level 'Sex (male) on CLintact' → Q900:sex_male_on_clintact = 0.174 (linear_fractional on Q22)
- dropped unlinked row (NIL): 'Tumor size on CLintact' — extend the ontology if this is a real PK parameter (source ['cpt2096-tbl-0001:row10:col1', 'cpt2096-tbl-0001:row10:col2'])
- covariate level 'Body weight on CLintact' → Q900:body_weight_on_clintact = 0.370 (linear_fractional on Q22)
- covariate level 'Sex (male) on V1,intact' → Q900:sex_male_on_v1_intact = 0.197 (linear_fractional on Q22)
- covariate level 'Country (Japan) on V2,intact d' → Q900:country_japan_on_v2_intact_d = -0.262 (linear_fractional on Q22)
- routed 'Variance of CLintact' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- dropped duplicate Q63 ('Variance of V1,intact', value '0.0250') — already have one for this compound
- routed 'Variance of Qintact' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- dropped duplicate Q64 ('Variance of V2,intact', value '0.430') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=trastuzumab_deruxtecan
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [0]
- status held at route_to_review — not promoted
- model-stage split: 'final intact t‐dxd model' is the final model of Yin_2021 (paper reports 2 stages: final intact t‐dxd model, final released‐drug model); same population, different model-building step
- row roles: 4 per-group rows of trastuzumab_deruxtecan covariate_effect but 0 reference group(s) — kept as printed
- row roles: 2 per-group rows of released drug covariate_effect but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 36/36 row label(s) assigned, 57 linked by role; re-tagged trastuzumab_deruxtecan→parent ×105, trastuzumab_deruxtecan→released drug ×102
- molar mass: none found for 'trastuzumab_deruxtecan' — its concentrations stay mass-only
- engineer: parent → metabolite not buildable on PK_3M_9C (None) — the measured compound's 1-compartment model instead

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
| `gpt-oss-120b` | not confirmed | 0.304 (7/23 fields) | 16 |

<details><summary>16 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['trastuzumab_deruxtecan', 'released drug', 'metabolism']] | [['trastuzumab deruxtecan', 'released drug', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[albumin_on_clintact]` | -0.533 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[central volume of distribution].covariate_forms` | ['linear_fractional'] | ['linear_fractional', 'linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[clearance].covariate_forms` | ['linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional'] | ['linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[country_japan_on_clintact_d]` | -0.0970 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[country_japan_on_v2_intact_d]` | -0.262 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[peripheral volume of distribution].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[sex_male_on_clintact]` | 0.174 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[sex_male_on_v1_intact]` | 0.197 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_albumin]` | not captured | -0.533 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_country]` | not captured | -0.0970 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_sex]` | not captured | 0.174 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v1_sex]` | not captured | 0.197 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v2_country]` | not captured | -0.262 | only_one_extracted |
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
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cpt2096-tbl-0001:row3:col1', 'cpt2096-tbl-0001:row3:col2', 'cpt2096-tbl-0001:row3:col3', 'cpt2096-tbl-0001:row3:col4', 'cpt2096-tbl-0001:row3:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cpt2096-tbl-0001:row5:col1', 'cpt2096-tbl-0001:row5:col2', 'cpt2096-tbl-0001:row5:col3', 'cpt2096-tbl-0001:row5:col4', 'cpt2096-tbl-0001:row5:col5'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['cpt2096-tbl-0001:row4:col1', 'cpt2096-tbl-0001:row4:col2', 'cpt2096-tbl-0001:row4:col3', 'cpt2096-tbl-0001:row4:col4', 'cpt2096-tbl-0001:row4:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['cpt2096-tbl-0001:row6:col1', 'cpt2096-tbl-0001:row6:col2', 'cpt2096-tbl-0001:row6:col3', 'cpt2096-tbl-0001:row6:col4', 'cpt2096-tbl-0001:row6:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.421 | not captured | not captured | ['cpt2096-tbl-0001:row3:col1', 'cpt2096-tbl-0001:row3:col2', 'cpt2096-tbl-0001:row3:col3', 'cpt2096-tbl-0001:row3:col4', 'cpt2096-tbl-0001:row3:col5'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0175 L/h | not captured | not captured | ['cpt2096-tbl-0001:row3:col1', 'cpt2096-tbl-0001:row3:col2', 'cpt2096-tbl-0001:row3:col3', 'cpt2096-tbl-0001:row3:col4', 'cpt2096-tbl-0001:row3:col5'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 2.77 L | not captured | not captured | ['cpt2096-tbl-0001:row4:col1', 'cpt2096-tbl-0001:row4:col2', 'cpt2096-tbl-0001:row4:col3', 'cpt2096-tbl-0001:row4:col4', 'cpt2096-tbl-0001:row4:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 5.16 L | not captured | not captured | ['cpt2096-tbl-0001:row6:col1', 'cpt2096-tbl-0001:row6:col2', 'cpt2096-tbl-0001:row6:col3', 'cpt2096-tbl-0001:row6:col4', 'cpt2096-tbl-0001:row6:col5'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable | not captured | fail | Metabolite_C (measured=trastuzumab_deruxtecan) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 4 scholar param(s) emitted or defaulted | 4 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | fail | parent_metabolite → PK_3M_9C* | PK_1C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |
| T1_cmin_ss | reference | skipped | 23 | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_trastuzumab_deruxtecan/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Yin_2021` / `Yin_2021::final`)
- model: `../../../knowledgebase/drugs/drug_trastuzumab_deruxtecan/models/modelica/TrastuzumabDeruxtecan_Yin2021_final.mo`
- deviation: `../../../knowledgebase/drugs/drug_trastuzumab_deruxtecan/models/modelica/TrastuzumabDeruxtecan_Yin2021_final.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_trastuzumab_deruxtecan/models/modelica/TrastuzumabDeruxtecan_Yin2021_final.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 56 mg infusion over 10 min, single dose. Doses in the paper: 56–560 mg.

<dbs-fmusim paramsurl="drugs/drug_trastuzumab_deruxtecan/TrastuzumabDeruxtecan_Yin2021_final/TrastuzumabDeruxtecan_Yin2021_final_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_trastuzumab_deruxtecan/TrastuzumabDeruxtecan_Yin2021_final/TrastuzumabDeruxtecan_Yin2021_final_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `TrastuzumabDeruxtecan_Yin2021_final_params.json` · controls `TrastuzumabDeruxtecan_Yin2021_final_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 21:35 UTC</sub>
