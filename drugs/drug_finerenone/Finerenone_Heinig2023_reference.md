<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03D&quot;,&quot;href&quot;:&quot;atc/C03D.md&quot;},{&quot;label&quot;:&quot;finerenone&quot;,&quot;href&quot;:&quot;drugs/drug_finerenone/&quot;},{&quot;label&quot;:&quot;Heinig_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Finerenone_Heinig2023_reference&quot;,&quot;label&quot;:&quot;Heinig_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_finerenone/Finerenone_Heinig2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# finerenone — `Finerenone_Heinig2023_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.594), gpt-oss:120b (partly confirmed, agreement 0.656). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model and browser simulation available in **Models** and **Simulation**.

> **Caveat** (`covariates_not_exercised`): Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

### Reviewer guidance

**The finerenone model fails to reproduce the paper's peak concentration, time of peak, and terminal half-life, and the intercompartmental clearance parameter was missing.**

The simulated peak concentration was 1.04e-05 kg/m3, far below the paper's reported 9.62e-05 kg/m3, and the time of peak was 0.543 h versus the paper's 0.75 h. The terminal half-life was simulated as 2.63 h, differing from the paper's 2.25 h. The intercompartmental clearance parameter was not emitted or defaulted, leaving the model structure incomplete. Additionally, the covariate effects on clearance and volume were not exercised in the simulation. Extracted — finerenone: kabs 22.5 1/h, CL/F 29.9 L/h, V/F 113 L, Q/F 0.335 L/h, tlag 0.215 h, Frel 1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has finerenone, the second reading unknown; it also differs on 12 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

## Citation
Heinig R et al., The Pharmacokinetics of the Nonsteroida…, Clinical pharmacokinetics (2023)
  ·  DOI: [10.1007/s40262-023-01312-9](https://doi.org/10.1007/s40262-023-01312-9)

<div class="pk-model-meta" hidden drug="finerenone" model-id="Finerenone_Heinig2023_reference" status="needs_review" stale="false" population="adults with CKD and T2D" measured-compound="finerenone" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 6 extracted, plus 8 covariate effects.

**Parameterization:** CL/F, Q/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Ka (1/h) | `Q49` · kabs | 22.5 | 1/h | 0.00625 | 1/h | 16.2 | exact (1.0) | Tab3:row1:col1, Tab3:row1:col2 | — | not captured |
| CL/F (L/h) | `Q27` · CL/F | 29.9 | L/h | 8.305555555555555e-06 | [l] / [h] | 3.62 | exact (1.0) | Tab3:row2:col1, Tab3:row2:col2 | — | 0.0442 (None% RSE) |
| Vc/F (L) | `Q76` · V/F | 113 | L | 0.113 | [l] | 2.79 | exact (1.0) | Tab3:row3:col1, Tab3:row3:col2 | — | not captured |
| Q/F (L/h) | `Q69` · Q/F | 0.335 | L/h | 9.305555555555555e-08 | [l] / [h] | 9.28 | exact (1.0) | Tab3:row4:col1, Tab3:row4:col2 | — | not captured |
| Absorption lag time (h) | `Q83` · tlag | 0.215 | h | 774.0 | [h] | not captured | exact (1.0) | Tab3:row6:col1 | — | not captured |
| Relative bioavailability | `Q87` · Frel | 1 | not captured | not captured | not captured | not captured | exact (1.0) | Tab3:row7:col1 | — | not captured |
| effect_of_egfr_epi_time_varying_on_cl_f_and_f | `Q900` · effect_of_egfr_epi_time_varying_on_cl_f_and_f | 0.155 | not captured | not captured | not captured | 20.1 | not captured (not captured) | Tab3:row9:col1, Tab3:row9:col2 | — | not captured |
| effect_of_body_height_on_cl_f_and_f | `Q900` · effect_of_body_height_on_cl_f_and_f | 0.720 | not captured | not captured | not captured | 16.1 | not captured (not captured) | Tab3:row10:col1, Tab3:row10:col2 | — | not captured |
| effect_of_creatinine_on_cl_f_and_f | `Q900` · effect_of_creatinine_on_cl_f_and_f | 0.118 | not captured | not captured | not captured | 38.4 | not captured (not captured) | Tab3:row11:col1, Tab3:row11:col2 | — | not captured |
| effect_of_smoking_current_or_former_smokers_on_cl_f_and_f | `Q900` · effect_of_smoking_current_or_former_smokers_on_cl_f_and_f | 1.04 | not captured | not captured | not captured | 1.11 | not captured (not captured) | Tab3:row14:col1, Tab3:row14:col2 | — | not captured |
| effect_of_cyp3a4_inhibitor_use_weak_moderate_or_strong_ge_50_of_on_treatment_period_on_cl_f_and_f | `Q900` · effect_of_cyp3a4_inhibitor_use_weak_moderate_or_strong_ge_50_of_on_treatment_period_on_cl_f_and_f | 0.951 | not captured | not captured | not captured | 1.66 | not captured (not captured) | Tab3:row16:col1, Tab3:row16:col2 | — | not captured |
| effect_of_cyp3a4_inhibitor_use_other_categories_on_cl_f_and_f | `Q900` · effect_of_cyp3a4_inhibitor_use_other_categories_on_cl_f_and_f | 0.996 | not captured | not captured | not captured | 2.17 | not captured (not captured) | Tab3:row17:col1, Tab3:row17:col2 | — | not captured |
| theta_v1_f_body_weight | `Q900` · theta_v1_f_body_weight | 0.501 | not captured | not captured | not captured | 9.87 | not captured (not captured) | Tab3:row8:col1, Tab3:row8:col2 | — | not captured |
| theta_v1_f_category | `Q900` · theta_v1_f_category | 1.29 | L | not captured | not captured | 6.79 | not captured (not captured) | Tab3:row12:col1, Tab3:row12:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'ω2 CL/Fa' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'ω2 Vc/Fb' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'Covariance CL/F × Vc/F' routed out of structural estimates ('Interindividual variability')
- table section residual_error: 'σ2' routed out of structural estimates ('Residual error')
- covariate level 'Effect of eGFR-EPI (time-varying) on CL/F and F' → Q900:effect_of_egfr_epi_time_varying_on_cl_f_and_f = 0.155 (linear_fractional on Q27)
- covariate level 'Effect of body height on CL/F and F' → Q900:effect_of_body_height_on_cl_f_and_f = 0.720 (linear_fractional on Q27)
- covariate level 'Effect of creatinine on CL/F and F' → Q900:effect_of_creatinine_on_cl_f_and_f = 0.118 (linear_fractional on Q27)
- dropped unlinked row (NIL): 'Effect of SGLT-2 inhibitor use (≥50% of treatment period) on CL/F and F' — extend the ontology if this is a real PK parameter (source ['Tab3:row13:col1', 'Tab3:row13:col2'])
- covariate level 'Effect of smoking (current or former smokers) on CL/F and F' → Q900:effect_of_smoking_current_or_former_smokers_on_cl_f_and_f = 1.04 (linear_fractional on Q27)
- dropped duplicate Q27 ('Effect of GGT on CL/F', value '-0.0694') — already have one for this compound
- covariate level 'Effect of CYP3A4 inhibitor use (weak, moderate or strong ≥50% of on treatment period) on CL/F and F' → Q900:effect_of_cyp3a4_inhibitor_use_weak_moderate_or_strong_ge_50_of_on_treatment_period_on_cl_f_and_f = 0.951 (linear_fractional on Q27)
- covariate level 'Effect of CYP3A4 inhibitor use (other categories) on CL/F and F' → Q900:effect_of_cyp3a4_inhibitor_use_other_categories_on_cl_f_and_f = 0.996 (linear_fractional on Q27)
- implicit units: 'Ka (1/h)' → 1/h (from the popPK convention: 'The parameter is the absorption rate constant (Ka). In population pharmacokinetics, first-order rate constants are conve')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=finerenone
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- 1C volume normalization: Q290→Q76 (single-compartment model has no central/peripheral split; 'Vc/F (L)' is the general volume)
- status held at route_to_review — not promoted

**Extraction notes:**
- LLM selected parameter table(s) 3
- LLM region Heinig_2023:other_prose: no JSON records returned

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.594 (19/32 fields) | 13 |
| `gpt-oss:120b` | partly confirmed | 0.656 (21/32 fields) | 11 |

<details><summary>24 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[effect_of_body_height_on_cl_f_and_f]` | 0.720 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[effect_of_creatinine_on_cl_f_and_f]` | 0.118 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[effect_of_cyp3a4_inhibitor_use_other_categories_on_cl_f_and_f]` | 0.996 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[effect_of_cyp3a4_inhibitor_use_weak_moderate_or_strong_ge_50_of_on_treatment_period_on_cl_f_and_f]` | 0.951 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[effect_of_egfr_epi_time_varying_on_cl_f_and_f]` | 0.155 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[effect_of_smoking_current_or_former_smokers_on_cl_f_and_f]` | 1.04 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_creatinine]` | not captured | 0.118 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_cyp3a4]` | not captured | 0.951 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_egfr]` | not captured | 0.155 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_height]` | not captured | 0.720 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_smoking]` | not captured | 1.04 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | finerenone | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | finerenone | unknown | mismatch |
| `gpt-oss:120b` | `parameters[effect_of_body_height_on_cl_f_and_f]` | 0.720 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[effect_of_creatinine_on_cl_f_and_f]` | 0.118 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[effect_of_cyp3a4_inhibitor_use_other_categories_on_cl_f_and_f]` | 0.996 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[effect_of_cyp3a4_inhibitor_use_weak_moderate_or_strong_ge_50_of_on_treatment_period_on_cl_f_and_f]` | 0.951 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[effect_of_egfr_epi_time_varying_on_cl_f_and_f]` | 0.155 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[effect_of_smoking_current_or_former_smokers_on_cl_f_and_f]` | 1.04 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_cl_f_creatinine]` | not captured | 0.118 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_cl_f_cyp3a4]` | not captured | 0.951 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_cl_f_egfr]` | not captured | 0.155 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_cl_f_height]` | not captured | 0.720 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_cl_f_smoking]` | not captured | 1.04 | only_one_extracted |

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
| C1_half_life_beta | pass | 2.25 | 2.62 | 1.1644 | 0.25 | reported t½β |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row2:col1', 'Tab3:row2:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab3:row1:col1', 'Tab3:row1:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row4:col1', 'Tab3:row4:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row3:col1', 'Tab3:row3:col2'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Tab3:row6:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 29.9 L/h | not captured | not captured | ['Tab3:row2:col1', 'Tab3:row2:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 113 L | not captured | not captured | ['Tab3:row3:col1', 'Tab3:row3:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=finerenone) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | fail | 5 scholar param(s) emitted or defaulted | 4 covered | not captured | neither emitted nor in defaulted[]: ['Q/F'] |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | fail | 9.62e-05 | 1.0430601210893446e-05 | 0.1084 | µg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.000118 | 1.0430601210893446e-05 | 0.0884 | µg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 9.99e-05 | 1.0430601210893446e-05 | 0.1044 | µg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 8.840000000000001e-05 | 1.0430601210893446e-05 | 0.118 | µg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.000163 | 1.0430601210893446e-05 | 0.064 | µg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.00015999999999999999 | 1.0430601210893446e-05 | 0.0652 | µg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.000149 | 1.0430601210893446e-05 | 0.07 | µg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | skipped | not captured | 1.0430601210893446e-05 | not captured | non-numeric value |
| T1_cmax | reference | skipped | 88.2 | 1.0430601210893446e-05 | not captured | unresolved concentration unit (exp '%', sim 'kg/m3') |
| T1_cmax | reference | skipped | 122 | 1.0430601210893446e-05 | not captured | unresolved concentration unit (exp '%', sim 'kg/m3') |
| T1_cmax | reference | skipped | 15.7 | 1.0430601210893446e-05 | not captured | unresolved concentration unit (exp '%', sim 'kg/m3') |
| T1_t_half_beta | reference | skipped | not captured | 2.629193576653854 | not captured | non-numeric value |
| T1_t_half_terminal | reference | pass | 2.25 | 2.629193576653854 | 1.1685 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 2.23 | 2.629193576653854 | 1.179 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 2.6 | 2.629193576653854 | 1.0112 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 2.78 | 2.629193576653854 | 0.9458 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 2.59 | 2.629193576653854 | 1.0151 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 3.18 | 2.629193576653854 | 0.8268 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 2.6 | 2.629193576653854 | 1.0112 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 2.3 | 2.629193576653854 | 1.1431 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 1.6 | 2.629193576653854 | 1.6432 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 2.5 | 2.629193576653854 | 1.0517 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 1.9 | 2.629193576653854 | 1.3838 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 3.2 | 2.629193576653854 | 0.8216 | h→SI vs simulated h |
| T1_t_half_terminal | reference | skipped | not captured | 2.629193576653854 | not captured | non-numeric value |
| T1_t_half_terminal | reference | skipped | not captured | 2.629193576653854 | not captured | non-numeric value |
| T1_tmax | reference | fail | 0.75 | 0.5432058909086878 | 0.7243 | h→SI vs simulated h |
| T1_tmax | reference | pass | 0.5 | 0.5432058909086878 | 1.0864 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.75 | 0.5432058909086878 | 0.7243 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.75 | 0.5432058909086878 | 0.7243 | h→SI vs simulated h |
| T1_tmax | reference | pass | 0.65 | 0.5432058909086878 | 0.8357 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_finerenone/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Heinig_2023` / `Heinig_2023::reference`)
- model: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_finerenone/models/modelica/Finerenone_Heinig2023_reference.mo`
- deviation: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_finerenone/models/modelica/Finerenone_Heinig2023_reference.deviation.json`
- sim: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_finerenone/models/modelica/Finerenone_Heinig2023_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_finerenone/Finerenone_Heinig2023_reference/Finerenone_Heinig2023_reference_modelica.zip" download>Finerenone_Heinig2023_reference_modelica.zip</a> <span class="pk-size">(5.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_finerenone/Finerenone_Heinig2023_reference/Finerenone_Heinig2023_reference_fmi.zip" download>Finerenone_Heinig2023_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_finerenone/Finerenone_Heinig2023_reference/Finerenone_Heinig2023_reference_matlab.zip" download>Finerenone_Heinig2023_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_finerenone/Finerenone_Heinig2023_reference/Finerenone_Heinig2023_reference_matlab_simbio.zip" download>Finerenone_Heinig2023_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_finerenone/Finerenone_Heinig2023_reference/Finerenone_Heinig2023_reference_sbml.zip" download>Finerenone_Heinig2023_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_finerenone/Finerenone_Heinig2023_reference/Finerenone_Heinig2023_reference_cellml.zip" download>Finerenone_Heinig2023_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
<p><b>FMI requires two downloads:</b> the record-specific parameters/driver archive and the shared <code>PK_1C_enteral.fmu</code>. Place the FMU beside the script or specify <code>--fmu PATH</code>.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_finerenone/Finerenone_Heinig2023_reference/Finerenone_Heinig2023_reference.svg" alt="Finerenone_Heinig2023_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary v26.09 · OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 1.25 mg, single dose, first-order absorption (ka 22.5 /h, lag 12.9 min, F 1). Doses in the paper: 1.25, 2.5, 5, 7.5, 10, 20 mg.

<dbs-fmusim paramsurl="drugs/drug_finerenone/Finerenone_Heinig2023_reference/Finerenone_Heinig2023_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_finerenone/Finerenone_Heinig2023_reference/Finerenone_Heinig2023_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Finerenone_Heinig2023_reference_params.json` · controls `Finerenone_Heinig2023_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-30 08:21 UTC</sub>
