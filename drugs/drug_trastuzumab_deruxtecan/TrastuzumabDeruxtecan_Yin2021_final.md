<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;trastuzumab deruxtecan&quot;,&quot;href&quot;:&quot;drugs/drug_trastuzumab_deruxtecan/&quot;},{&quot;label&quot;:&quot;Yin_2021 \u00b7 final&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;TrastuzumabDeruxtecan_Yin2021_final&quot;,&quot;label&quot;:&quot;Yin_2021_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trastuzumab_deruxtecan/TrastuzumabDeruxtecan_Yin2021_final.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# trastuzumab deruxtecan — `TrastuzumabDeruxtecan_Yin2021_final`

> ## <span class="pk-badge pk-badge--red" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Rejected</span>

> The record was rejected because the simulated output was the parent drug instead of the measured metabolite, and the model structure lacked the peripheral compartment.

<div class="pk-model-meta" hidden drug="trastuzumab deruxtecan" model-id="TrastuzumabDeruxtecan_Yin2021_final" status="rejected" stale="false" population="patients with HER2-positive breast cancer and other solid tumors" measured-compound="trastuzumab_deruxtecan" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Yin O, Xiong Y, Endo S, Yoshihara K, Garimella T, AbuTarif M et al. Population Pharmacokinetics of Trastuzumab Deruxtecan in Patients With HER2-Positive Breast Cancer and Other Solid Tumors. Clinical pharmacology and therapeutics 109(5):1314–1325 (2021).
  ·  DOI: [10.1002/cpt.2096](https://doi.org/10.1002/cpt.2096)

## Population and dosing

**Population:** patients with HER2-positive breast cancer and other solid tumors · condition HER2-positive breast cancer and other solid tumors · age group adult · n = #639.

**Dosing:** 56, 560 mg, iv, multiple, every 21 h.

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted, plus 7 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_trastuzumab_deruxtecan/TrastuzumabDeruxtecan_Yin2021_final/TrastuzumabDeruxtecan_Yin2021_final.svg" alt="TrastuzumabDeruxtecan_Yin2021_final diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Clearance (CLintact, L/day) | CL | 0.421 | L/day |
| Central volume of distribution (V1,intact, L) | V1 | 2.77 | L |
| Distributional clearance (Qintact, L/day) | Q | 0.199 | L/day |
| Peripheral volume of distribution (V2,intact, L) | V2 | 5.16 | L |
| albumin_on_clintact | albumin_on_clintact | -0.533 |  |
| country_japan_on_clintact_d | country_japan_on_clintact_d | -0.0970 |  |
| sex_male_on_clintact | sex_male_on_clintact | 0.174 |  |
| body_weight_on_clintact | body_weight_on_clintact | 0.370 |  |
| sex_male_on_v1_intact | sex_male_on_v1_intact | 0.197 |  |
| country_japan_on_v2_intact_d | country_japan_on_v2_intact_d | -0.262 |  |
| theta_v1_body_weight | theta_v1_body_weight | 0.489 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.304). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record was rejected because the simulated output was the parent drug instead of the measured metabolite, and the model structure lacked the peripheral compartment.**

The output variable was the central compartment concentration of the parent drug, whereas the measured compound was the released drug metabolite. The model topology was a one-compartment structure, which does not match the parent-metabolite structure requiring a peripheral compartment. Additionally, the covariate scenarios were not simulated, so the defined covariate effects were not exercised. Extracted — trastuzumab deruxtecan: CL 0.421 L/day, V1 2.77 L, Q 0.199 L/day, V2 5.16 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has trastuzumab_deruxtecan, the second reading unknown; it also differs on 15 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Clearance (CLintact, L/day) | `Q22` · CL | 0.421 | L/day | 4.873e-09 | m3/s | l/d | exact (1) | cpt2096-tbl-0001:row3:col1, cpt2096-tbl-0001:row3:col2, cpt2096-tbl-0001:row3:col3, cpt2096-tbl-0001:row3:col4, cpt2096-tbl-0001:row3:col5 |
| Central volume of distribution (V1,intact, L) | `Q63` · V1 | 2.77 | L | 0.00277 | m3 | l | exact (1) | cpt2096-tbl-0001:row4:col1, cpt2096-tbl-0001:row4:col2, cpt2096-tbl-0001:row4:col3, cpt2096-tbl-0001:row4:col4, cpt2096-tbl-0001:row4:col5 |
| Distributional clearance (Qintact, L/day) | `Q30` · Q | 0.199 | L/day | 2.303e-09 | m3/s | l/d | llm_corrected (0.6) | cpt2096-tbl-0001:row5:col1, cpt2096-tbl-0001:row5:col2, cpt2096-tbl-0001:row5:col3, cpt2096-tbl-0001:row5:col4, cpt2096-tbl-0001:row5:col5 |
| Peripheral volume of distribution (V2,intact, L) | `Q64` · V2 | 5.16 | L | 0.00516 | m3 | l | exact (1) | cpt2096-tbl-0001:row6:col1, cpt2096-tbl-0001:row6:col2, cpt2096-tbl-0001:row6:col3, cpt2096-tbl-0001:row6:col4, cpt2096-tbl-0001:row6:col5 |
| albumin_on_clintact | `Q900` · albumin_on_clintact | -0.533 |  |  |  |  |  | cpt2096-tbl-0001:row7:col1, cpt2096-tbl-0001:row7:col2 |
| country_japan_on_clintact_d | `Q900` · country_japan_on_clintact_d | -0.0970 |  |  |  |  |  | cpt2096-tbl-0001:row8:col1, cpt2096-tbl-0001:row8:col2 |
| sex_male_on_clintact | `Q900` · sex_male_on_clintact | 0.174 |  |  |  |  |  | cpt2096-tbl-0001:row9:col1, cpt2096-tbl-0001:row9:col2 |
| body_weight_on_clintact | `Q900` · body_weight_on_clintact | 0.370 |  |  |  |  |  | cpt2096-tbl-0001:row11:col1, cpt2096-tbl-0001:row11:col2 |
| sex_male_on_v1_intact | `Q900` · sex_male_on_v1_intact | 0.197 |  |  |  |  |  | cpt2096-tbl-0001:row12:col1, cpt2096-tbl-0001:row12:col2 |
| country_japan_on_v2_intact_d | `Q900` · country_japan_on_v2_intact_d | -0.262 |  |  |  |  |  | cpt2096-tbl-0001:row14:col1, cpt2096-tbl-0001:row14:col2 |
| theta_v1_body_weight | `Q900` · theta_v1_body_weight | 0.489 |  |  |  |  |  | cpt2096-tbl-0001:row13:col1, cpt2096-tbl-0001:row13:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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
- status held at "Needs review" — not promoted
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
| `gpt-oss-120b` | `parameters[albumin_on_clintact]` | -0.533 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[central volume of distribution].covariate_forms` | ['linear_fractional'] | ['linear_fractional', 'linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[clearance].covariate_forms` | ['linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional'] | ['linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[country_japan_on_clintact_d]` | -0.0970 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[country_japan_on_v2_intact_d]` | -0.262 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[peripheral volume of distribution].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[sex_male_on_clintact]` | 0.174 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[sex_male_on_v1_intact]` | 0.197 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_albumin]` |  | -0.533 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_country]` |  | -0.0970 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_sex]` |  | 0.174 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v1_sex]` |  | 0.197 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v2_country]` |  | -0.262 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | trastuzumab_deruxtecan | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | trastuzumab_deruxtecan | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['cpt2096-tbl-0001:row3:col1', 'cpt2096-tbl-0001:row3:col2', 'cpt2096-tbl-0001:row3:col3', 'cpt2096-tbl-0001:row3:col4', 'cpt2096-tbl-0001:row3:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['cpt2096-tbl-0001:row5:col1', 'cpt2096-tbl-0001:row5:col2', 'cpt2096-tbl-0001:row5:col3', 'cpt2096-tbl-0001:row5:col4', 'cpt2096-tbl-0001:row5:col5'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['cpt2096-tbl-0001:row4:col1', 'cpt2096-tbl-0001:row4:col2', 'cpt2096-tbl-0001:row4:col3', 'cpt2096-tbl-0001:row4:col4', 'cpt2096-tbl-0001:row4:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['cpt2096-tbl-0001:row6:col1', 'cpt2096-tbl-0001:row6:col2', 'cpt2096-tbl-0001:row6:col3', 'cpt2096-tbl-0001:row6:col4', 'cpt2096-tbl-0001:row6:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.421 | ['cpt2096-tbl-0001:row3:col1', 'cpt2096-tbl-0001:row3:col2', 'cpt2096-tbl-0001:row3:col3', 'cpt2096-tbl-0001:row3:col4', 'cpt2096-tbl-0001:row3:col5'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0175 L/h | ['cpt2096-tbl-0001:row3:col1', 'cpt2096-tbl-0001:row3:col2', 'cpt2096-tbl-0001:row3:col3', 'cpt2096-tbl-0001:row3:col4', 'cpt2096-tbl-0001:row3:col5'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 2.77 L | ['cpt2096-tbl-0001:row4:col1', 'cpt2096-tbl-0001:row4:col2', 'cpt2096-tbl-0001:row4:col3', 'cpt2096-tbl-0001:row4:col4', 'cpt2096-tbl-0001:row4:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 5.16 L | ['cpt2096-tbl-0001:row6:col1', 'cpt2096-tbl-0001:row6:col2', 'cpt2096-tbl-0001:row6:col3', 'cpt2096-tbl-0001:row6:col4', 'cpt2096-tbl-0001:row6:col5'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable |  | fail | Metabolite_C (measured=trastuzumab_deruxtecan) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 4 scholar param(s) emitted or defaulted | 4 covered | all structural parameters accounted for |
| T3_topology_template |  | fail | parent_metabolite → PK_3M_9C* | PK_1C | engineer template must match the scholar topology |
| T6_deviations |  | pass |  |  | no engineer deviations to adjudicate |
| T1_cmin_ss | reference | skipped | 23 |  | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 56 mg infusion over 10 min, single dose. Doses in the paper: 56–560 mg.

<dbs-fmusim paramsurl="drugs/drug_trastuzumab_deruxtecan/TrastuzumabDeruxtecan_Yin2021_final/TrastuzumabDeruxtecan_Yin2021_final_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_trastuzumab_deruxtecan/TrastuzumabDeruxtecan_Yin2021_final/TrastuzumabDeruxtecan_Yin2021_final_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C` · parameters `TrastuzumabDeruxtecan_Yin2021_final_params.json` · controls `TrastuzumabDeruxtecan_Yin2021_final_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btrastuzumab_deruxtecan%5D%20TrastuzumabDeruxtecan_Yin2021_final&body=Drug%3A%20trastuzumab_deruxtecan%0ARecord%3A%20TrastuzumabDeruxtecan_Yin2021_final%0APaper%3A%20Yin_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_trastuzumab_deruxtecan/TrastuzumabDeruxtecan_Yin2021_final%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 21:35 UTC</sub>
