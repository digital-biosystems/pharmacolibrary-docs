<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03D&quot;,&quot;href&quot;:&quot;atc/C03D.md&quot;},{&quot;label&quot;:&quot;finerenone&quot;,&quot;href&quot;:&quot;drugs/drug_finerenone/&quot;},{&quot;label&quot;:&quot;Heinig_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Finerenone_Heinig2023_reference&quot;,&quot;label&quot;:&quot;Heinig_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_finerenone/Finerenone_Heinig2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# finerenone — `Finerenone_Heinig2023_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span>

> The finerenone model fails to reproduce the paper's peak concentration, time of peak, and terminal half-life, and the intercompartmental clearance parameter was missing.

<div class="pk-model-meta" hidden drug="finerenone" model-id="Finerenone_Heinig2023_reference" status="needs_review" stale="false" population="adults with CKD and T2D" measured-compound="finerenone" parameterization="apparent" topology="1C"></div>

## Citation
Heinig R, Eissing T. The Pharmacokinetics of the Nonsteroidal Mineralocorticoid Receptor Antagonist Finerenone. Clinical pharmacokinetics 62(12):1673–1693 (2023).
  ·  DOI: [10.1007/s40262-023-01312-9](https://doi.org/10.1007/s40262-023-01312-9)

## Population and dosing

**Population:** adults with CKD and T2D · age group adult · n = &gt;=2284.

**Dosing:** 1.25, 2.5, 5, 7.5, 10, 20 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, Q/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted, plus 8 covariate effects.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_finerenone/Finerenone_Heinig2023_reference/Finerenone_Heinig2023_reference.svg" alt="Finerenone_Heinig2023_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| Ka (1/h) | kabs | 22.5 | 1/h | 16.2 |  |
| CL/F (L/h) | CL/F | 29.9 | L/h | 3.62 | 0.0442 (None% RSE) |
| Vc/F (L) | V/F | 113 | L | 2.79 |  |
| Q/F (L/h) | Q/F | 0.335 | L/h | 9.28 |  |
| Absorption lag time (h) | tlag | 0.215 | h |  |  |
| Relative bioavailability | Frel | 1 |  |  |  |
| effect_of_egfr_epi_time_varying_on_cl_f_and_f | effect_of_egfr_epi_time_varying_on_cl_f_and_f | 0.155 |  | 20.1 |  |
| effect_of_body_height_on_cl_f_and_f | effect_of_body_height_on_cl_f_and_f | 0.720 |  | 16.1 |  |
| effect_of_creatinine_on_cl_f_and_f | effect_of_creatinine_on_cl_f_and_f | 0.118 |  | 38.4 |  |
| effect_of_smoking_current_or_former_smokers_on_cl_f_and_f | effect_of_smoking_current_or_former_smokers_on_cl_f_and_f | 1.04 |  | 1.11 |  |
| effect_of_cyp3a4_inhibitor_use_weak_moderate_or_strong_ge_50_of_on_treatment_period_on_cl_f_and_f | effect_of_cyp3a4_inhibitor_use_weak_moderate_or_strong_ge_50_of_on_treatment_period_on_cl_f_and_f | 0.951 |  | 1.66 |  |
| effect_of_cyp3a4_inhibitor_use_other_categories_on_cl_f_and_f | effect_of_cyp3a4_inhibitor_use_other_categories_on_cl_f_and_f | 0.996 |  | 2.17 |  |
| theta_v1_f_body_weight | theta_v1_f_body_weight | 0.501 |  | 9.87 |  |
| theta_v1_f_category | theta_v1_f_category | 1.29 | L | 6.79 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.594). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The finerenone model fails to reproduce the paper's peak concentration, time of peak, and terminal half-life, and the intercompartmental clearance parameter was missing.**

The simulated peak concentration was 1.04e-05 kg/m3, far below the paper's reported 9.62e-05 kg/m3, and the time of peak was 0.543 h versus the paper's 0.75 h. The terminal half-life was simulated as 2.63 h, differing from the paper's 2.25 h. The intercompartmental clearance parameter was not emitted or defaulted, leaving the model structure incomplete. Additionally, the covariate effects on clearance and volume were not exercised in the simulation. Extracted — finerenone: kabs 22.5 1/h, CL/F 29.9 L/h, V/F 113 L, Q/F 0.335 L/h, tlag 0.215 h, Frel 1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has finerenone, the second reading unknown; it also differs on 12 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Ka (1/h) | `Q49` · kabs | 22.5 | 1/h | 0.00625 | 1/s | 1/h | 16.2 | exact (1) | Tab3:row1:col1, Tab3:row1:col2 |  |
| CL/F (L/h) | `Q27` · CL/F | 29.9 | L/h | 8.306e-06 | m3/s | l/h | 3.62 | exact (1) | Tab3:row2:col1, Tab3:row2:col2 | 0.0442 (None% RSE) |
| Vc/F (L) | `Q76` · V/F | 113 | L | 0.113 | m3 | l | 2.79 | exact (1) | Tab3:row3:col1, Tab3:row3:col2 |  |
| Q/F (L/h) | `Q69` · Q/F | 0.335 | L/h | 9.306e-08 | m3/s | l/h | 9.28 | exact (1) | Tab3:row4:col1, Tab3:row4:col2 |  |
| Absorption lag time (h) | `Q83` · tlag | 0.215 | h | 774 | s | h |  | exact (1) | Tab3:row6:col1 |  |
| Relative bioavailability | `Q87` · Frel | 1 |  |  |  |  |  | exact (1) | Tab3:row7:col1 |  |
| effect_of_egfr_epi_time_varying_on_cl_f_and_f | `Q900` · effect_of_egfr_epi_time_varying_on_cl_f_and_f | 0.155 |  |  |  |  | 20.1 |  | Tab3:row9:col1, Tab3:row9:col2 |  |
| effect_of_body_height_on_cl_f_and_f | `Q900` · effect_of_body_height_on_cl_f_and_f | 0.720 |  |  |  |  | 16.1 |  | Tab3:row10:col1, Tab3:row10:col2 |  |
| effect_of_creatinine_on_cl_f_and_f | `Q900` · effect_of_creatinine_on_cl_f_and_f | 0.118 |  |  |  |  | 38.4 |  | Tab3:row11:col1, Tab3:row11:col2 |  |
| effect_of_smoking_current_or_former_smokers_on_cl_f_and_f | `Q900` · effect_of_smoking_current_or_former_smokers_on_cl_f_and_f | 1.04 |  |  |  |  | 1.11 |  | Tab3:row14:col1, Tab3:row14:col2 |  |
| effect_of_cyp3a4_inhibitor_use_weak_moderate_or_strong_ge_50_of_on_treatment_period_on_cl_f_and_f | `Q900` · effect_of_cyp3a4_inhibitor_use_weak_moderate_or_strong_ge_50_of_on_treatment_period_on_cl_f_and_f | 0.951 |  |  |  |  | 1.66 |  | Tab3:row16:col1, Tab3:row16:col2 |  |
| effect_of_cyp3a4_inhibitor_use_other_categories_on_cl_f_and_f | `Q900` · effect_of_cyp3a4_inhibitor_use_other_categories_on_cl_f_and_f | 0.996 |  |  |  |  | 2.17 |  | Tab3:row17:col1, Tab3:row17:col2 |  |
| theta_v1_f_body_weight | `Q900` · theta_v1_f_body_weight | 0.501 |  |  |  |  | 9.87 |  | Tab3:row8:col1, Tab3:row8:col2 |  |
| theta_v1_f_category | `Q900` · theta_v1_f_category | 1.29 | L |  |  |  | 6.79 |  | Tab3:row12:col1, Tab3:row12:col2 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.594 (19/32 fields) | 13 |

<details><summary>13 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[effect_of_body_height_on_cl_f_and_f]` | 0.720 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[effect_of_creatinine_on_cl_f_and_f]` | 0.118 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[effect_of_cyp3a4_inhibitor_use_other_categories_on_cl_f_and_f]` | 0.996 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[effect_of_cyp3a4_inhibitor_use_weak_moderate_or_strong_ge_50_of_on_treatment_period_on_cl_f_and_f]` | 0.951 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[effect_of_egfr_epi_time_varying_on_cl_f_and_f]` | 0.155 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[effect_of_smoking_current_or_former_smokers_on_cl_f_and_f]` | 1.04 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_creatinine]` |  | 0.118 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_cyp3a4]` |  | 0.951 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_egfr]` |  | 0.155 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_height]` |  | 0.720 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_f_smoking]` |  | 1.04 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | finerenone | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | finerenone | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | pass | 2.25 | 2.62 | 1.164 | 0.25 | reported t½β |
| C2_reference | pass |  |  |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  |  |  | ['Tab3:row2:col1', 'Tab3:row2:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  |  |  | ['Tab3:row1:col1', 'Tab3:row1:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  |  |  | ['Tab3:row4:col1', 'Tab3:row4:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  |  |  | ['Tab3:row3:col1', 'Tab3:row3:col2'] |
| C5_dimension_Q83 | pass | [time] |  |  |  | ['Tab3:row6:col1'] |
| C7_apparent_coherence | pass |  |  |  |  |  |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 29.9 L/h |  |  | ['Tab3:row2:col1', 'Tab3:row2:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 113 L |  |  | ['Tab3:row3:col1', 'Tab3:row3:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable |  | pass | C_central (measured=finerenone) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | fail | 5 scholar param(s) emitted or defaulted | 4 covered |  | neither emitted nor in defaulted[]: ['Q/F'] |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_cmax | reference | fail | 9.62e-05 | 1.043e-05 | 0.1084 | µg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.000118 | 1.043e-05 | 0.0884 | µg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 9.99e-05 | 1.043e-05 | 0.1044 | µg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 8.84e-05 | 1.043e-05 | 0.118 | µg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.000163 | 1.043e-05 | 0.064 | µg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.00016 | 1.043e-05 | 0.0652 | µg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.000149 | 1.043e-05 | 0.07 | µg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | skipped |  | 1.043e-05 |  | non-numeric value |
| T1_cmax | reference | skipped | 88.2 | 1.043e-05 |  | unresolved concentration unit (exp '%', sim 'kg/m3') |
| T1_cmax | reference | skipped | 122 | 1.043e-05 |  | unresolved concentration unit (exp '%', sim 'kg/m3') |
| T1_cmax | reference | skipped | 15.7 | 1.043e-05 |  | unresolved concentration unit (exp '%', sim 'kg/m3') |
| T1_t_half_beta | reference | skipped |  | 2.629 |  | non-numeric value |
| T1_t_half_terminal | reference | pass | 2.25 | 2.629 | 1.169 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 2.23 | 2.629 | 1.179 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 2.6 | 2.629 | 1.011 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 2.78 | 2.629 | 0.9458 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 2.59 | 2.629 | 1.015 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 3.18 | 2.629 | 0.8268 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 2.6 | 2.629 | 1.011 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 2.3 | 2.629 | 1.143 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 1.6 | 2.629 | 1.643 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 2.5 | 2.629 | 1.052 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 1.9 | 2.629 | 1.384 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 3.2 | 2.629 | 0.8216 | h→SI vs simulated h |
| T1_t_half_terminal | reference | skipped |  | 2.629 |  | non-numeric value |
| T1_t_half_terminal | reference | skipped |  | 2.629 |  | non-numeric value |
| T1_tmax | reference | fail | 0.75 | 0.5432 | 0.7243 | h→SI vs simulated h |
| T1_tmax | reference | pass | 0.5 | 0.5432 | 1.086 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.75 | 0.5432 | 0.7243 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.75 | 0.5432 | 0.7243 | h→SI vs simulated h |
| T1_tmax | reference | pass | 0.65 | 0.5432 | 0.8357 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

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
</div></div>

## Model interface

The parameters this record sets on the template, in the template's SI units, and the outputs the simulator reads.

| direction | role | name | value | unit (SI) |
|---|---|---|---|---|
| input | compound | `MM` | 0.3784 | kg/mol |
| input | dosing | `F` | 1 | 1 |
| input | dosing | `Tlag` | 774 | s |
| input | dosing | `adminCount` | 1 | 1 |
| input | dosing | `adminDuration` | 600 | s |
| input | dosing | `adminMass` | 1.25e-06 | kg |
| input | model | `Cl` | 8.306e-06 | m3/s |
| input | model | `VdPerKg` | 0.001614 | m3/kg |
| input | model | `ka` | 0.00625 | 1/s |
| input | subject | `weight` | 70 | kg |
| output | concentration | `central.C` |  | kg/m3 |

## Tested with

- Template `Pharmacolibrary.Pharmacokinetic.Models.PK_1C_enteral`, compiled by OpenModelica Compiler OpenModelica 1.26.7~1-g2b913cc.
- Reference peak computed with FMPy from the compiled FMU; the Simulation tab re-runs the same FMU in the browser and compares its peak with it.
- No automated comparison across the download formats runs for this template yet; the FMI archive is the reference implementation.

## How to cite

**Source paper** (the parameters are its): Heinig R, Eissing T. The Pharmacokinetics of the Nonsteroidal Mineralocorticoid Receptor Antagonist Finerenone. Clinical pharmacokinetics 62(12):1673–1693 (2023). [doi:10.1007/s40262-023-01312-9](https://doi.org/10.1007/s40262-023-01312-9)

**This record:** Pharmacolibrary v26.09, model `Finerenone_Heinig2023_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_finerenone/Finerenone_Heinig2023_reference>

```bibtex
@misc{pharmacolibrary_FinerenoneHeinig2023reference,
  title  = {{Pharmacolibrary model Finerenone_Heinig2023_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_finerenone/Finerenone_Heinig2023_reference},
  note   = {Parameters from doi:10.1007/s40262-023-01312-9},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 1.25 mg, single dose, first-order absorption (ka 22.5 /h, lag 12.9 min, F 1). Doses in the paper: 1.25, 2.5, 5, 7.5, 10, 20 mg.

<dbs-fmusim paramsurl="drugs/drug_finerenone/Finerenone_Heinig2023_reference/Finerenone_Heinig2023_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_finerenone/Finerenone_Heinig2023_reference/Finerenone_Heinig2023_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Finerenone_Heinig2023_reference_params.json` · controls `Finerenone_Heinig2023_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfinerenone%5D%20Finerenone_Heinig2023_reference&body=Drug%3A%20finerenone%0ARecord%3A%20Finerenone_Heinig2023_reference%0APaper%3A%20Heinig_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_finerenone/Finerenone_Heinig2023_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-09-30 08:21 UTC</sub>
