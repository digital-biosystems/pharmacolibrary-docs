<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;atogepant&quot;,&quot;href&quot;:&quot;drugs/drug_atogepant/&quot;},{&quot;label&quot;:&quot;Schlachter_2026 \u00b7 phase_3_modela&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Atogepant_Schlachter2026_phase_2_modela&quot;,&quot;label&quot;:&quot;Schlachter_2026_phase_2_modela&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atogepant/Atogepant_Schlachter2026_phase_2_modela.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Schlachter_2026_2_MMD&quot;,&quot;label&quot;:&quot;Schlachter_2026_2 \u00b7 MMD&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_atogepant/pd_Schlachter_2026_2_MMD.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# atogepant — `Atogepant_Schlachter2026_phase_3_modela`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span>

> The reviewer's verdict (Needs review, 2026-09-28 14:36 UTC) predates the latest extraction (2026-10-07 06:23 UTC); the status shown comes from the current checks. The atogepant record was quarantined because clearance, volume of distribution, absorption rate constant, lag time and the intercompartmental rate constants had no extracted values, so library placeholder values were substituted for the published estimates.

<div class="pk-model-meta" hidden drug="atogepant" model-id="Atogepant_Schlachter2026_phase_3_modela" status="needs_review" stale="true" population="healthy participants and patients with migraine" measured-compound="atogepant" parameterization="apparent" topology="3C"></div>

## Citation
Schlachter L, Stodtmann S, Voelkner A, Jonsson F, Lagraauw HM, Boinpally RR. Population Pharmacokinetics of Atogepant for the Prevention of Migraine. Clinical pharmacokinetics 65(1):149–164 (2026).
  ·  DOI: [10.1007/s40262-025-01566-5](https://doi.org/10.1007/s40262-025-01566-5)

## Population and dosing

**Population:** healthy participants and patients with migraine · condition migraine · age group adult.

**Dosing:** 10, 30, 60, 170, 300 mg, oral, multiple, every 24 h.

## Model

**Structure:** 3-compartment; no model was built for this record.  
**Parameterization:** CL/F, Q/F, Q2/F, V1/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 9 extracted, plus 6 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Apparent clearance patients [CL/F (L/h)] | CL/F | 17.4 | L/h |
| Apparent central volume of distribution [V1/F (L)] | V1/F | 86.1 | L |
| Apparent first intercompartmental clearance [Q/F (L/h)] | Q/F | 1.43 | L/h |
| Apparent first peripheral volume of distribution [V2/F (L)] | V2 | 40.5 | L |
| Apparent second intercompartmental clearance [Q2/F (L/h)] | Q2/F | 1.68 | L/h |
| Apparent second peripheral volume of distribution [V3/F (L)] | V3/F | 13.0 | L |
| Lag time [ALAG (h)] | tlag | 0.276 | h |
| Itraconazole effect on Frel | Frel | 0.949 |  |
| food_effect_on_alag | food_effect_on_alag | 0.672 |  |
| exponential_dose_effect_on_frel | exponential_dose_effect_on_frel | 0.119 |  |
| CovQ/F,V2/F | V2/F | 0.422 |  |
| theta_cl_f_hepatic | theta_cl_f_hepatic | -0.366 |  |
| theta_q95_formulation | theta_q95_formulation | -0.353 |  |
| theta_v1_f_weight_power | theta_v1_f_weight_power | 0.411 |  |
| theta_q49_weight_power | theta_q49_weight_power | 0.199 |  |

## Caveats

- Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.517). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The atogepant record was quarantined because clearance, volume of distribution, absorption rate constant, lag time and the intercompartmental rate constants had no extracted values, so library placeholder values were substituted for the published estimates.**

Although the paper reports apparent parameters for atogepant (e.g. CL/F 17.4 L/h, V1/F 86.1 L, Q/F 1.43 L/h, V2/F 40.5 L, tlag 0.276 h), the record's clearance, distribution volume, absorption rate constant, lag time, and central↔peripheral rate constants were left with no extracted values, so placeholder values stood in and the model was held back rather than published with invented numbers. The absorption rate constant was not reported in the source and was defaulted, which was judged an invented absorption input and not acceptable. The covariate effects defined in the record (e.g. the itraconazole effect on relative bioavailability 0.949, the dose effect 0.119) were not exercised: only the reference individual was simulated. A second reader also disagreed on several entries, reading a blood-plasma ratio of 0.573 and a fraction of zero-order absorption of 0.693 that this record lacks, and attributing the 0.119 dose effect to a weight power on relative bioavailability instead. Extracted — atogepant: CL/F 17.4, V1/F 86.1, Q/F 1.43, V2/F 40.5, Q2/F 1.68, V3/F 13, tlag 0.276, Frel 0.949.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has atogepant, the second reading unknown; it also differs on 13 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Apparent clearance patients [CL/F (L/h)] | `Q27` · CL/F | 17.4 | L/h | 4.833e-06 | m3/s | L/h | llm_confirmed (0.6) | Tab2:row3:col3, Tab2:row3:col4, Tab2:row3:col5 |
| Apparent central volume of distribution [V1/F (L)] | `Q290` · V1/F | 86.1 | L | 0.0861 | m3 | L | llm_confirmed (0.6) | Tab2:row6:col3, Tab2:row6:col4, Tab2:row6:col5 |
| Apparent first intercompartmental clearance [Q/F (L/h)] | `Q69` · Q/F | 1.43 | L/h | 3.972e-07 | m3/s | L/h | llm_corrected (0.6) | Tab2:row7:col3, Tab2:row7:col4, Tab2:row7:col5 |
| Apparent first peripheral volume of distribution [V2/F (L)] | `Q64` · V2 | 40.5 | L | 0.0405 | m3 | L | boundary_compartment (0.9) | Tab2:row8:col3, Tab2:row8:col4, Tab2:row8:col5 |
| Apparent second intercompartmental clearance [Q2/F (L/h)] | `Q80` · Q2/F | 1.68 | L/h | 4.667e-07 | m3/s | L/h | llm_corrected (0.6) | Tab2:row9:col3, Tab2:row9:col4, Tab2:row9:col5 |
| Apparent second peripheral volume of distribution [V3/F (L)] | `Q78` · V3/F | 13.0 | L | 0.013 | m3 | L | llm_confirmed (0.6) | Tab2:row10:col3, Tab2:row10:col4, Tab2:row10:col5 |
| Lag time [ALAG (h)] | `Q83` · tlag | 0.276 | h | 993.6 | s | h | llm_confirmed (0.6) | Tab2:row11:col3, Tab2:row11:col4, Tab2:row11:col5 |
| Itraconazole effect on Frel | `Q87` · Frel | 0.949 |  |  |  |  | llm_confirmed (0.6) | Tab2:row26:col3, Tab2:row26:col4, Tab2:row26:col5 |
| food_effect_on_alag | `Q900` · food_effect_on_alag | 0.672 |  |  |  |  |  | Tab2:row30:col3, Tab2:row30:col4, Tab2:row30:col5 |
| exponential_dose_effect_on_frel | `Q900` · exponential_dose_effect_on_frel | 0.119 |  |  |  |  |  | Tab2:row31:col3, Tab2:row31:col4, Tab2:row31:col5 |
| CovQ/F,V2/F | `Q82` · V2/F | 0.422 |  |  |  |  | llm_confirmed (0.6) | Tab2:row42:col3, Tab2:row42:col4, Tab2:row42:col5 |
| theta_cl_f_hepatic | `Q900` · theta_cl_f_hepatic | -0.366 |  |  |  |  |  | Tab2:row29:col3, Tab2:row29:col4 |
| theta_q95_formulation | `Q900` · theta_q95_formulation | -0.353 |  |  |  |  |  | Tab2:row32:col3, Tab2:row32:col4 |
| theta_v1_f_weight_power | `Q900` · theta_v1_f_weight_power | 0.411 |  |  |  |  |  | Tab2:row33:col3, Tab2:row33:col4, Tab2:row33:col5 |
| theta_q49_weight_power | `Q900` · theta_q49_weight_power | 0.199 |  |  |  |  |  | Tab2:row34:col3, Tab2:row34:col4, Tab2:row34:col5 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| F | Q40 | exact |

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q27 ('Apparent clearance healthy participants [CL/F (L/h)]', value '22.9') — already have one for this compound
- dropped unlinked row (NIL): 'Duration zero-order absorption [Tk0 (h)]' — extend the ontology if this is a real PK parameter (source ['Tab2:row5:col3', 'Tab2:row5:col4', 'Tab2:row5:col5'])
- dropped unlinked row (NIL): 'Fraction zero-order absorption (Fk0)' — extend the ontology if this is a real PK parameter (source ['Tab2:row16:col3', 'Tab2:row16:col4', 'Tab2:row16:col5'])
- dropped unlinked row (NIL): 'Blood-plasma ratio' — extend the ontology if this is a real PK parameter (source ['Tab2:row17:col3', 'Tab2:row17:col4', 'Tab2:row17:col5'])
- dropped duplicate Q27 ('Itraconazole effect on CL/F', value '-0.662') — already have one for this compound
- dropped duplicate Q27 ('Rifampin effect on CL/F after first dose', value '-0.128') — already have one for this compound
- dropped duplicate Q27 ('Rifampin effect on CL/F following multiple doses', value '0.818') — already have one for this compound
- dropped duplicate Q27 ('Quinidine effect on CL/F', value '-0.285') — already have one for this compound
- dropped unlinked row (NIL): 'Rifampin effect on Frel following multiple doses' — extend the ontology if this is a real PK parameter (source ['Tab2:row27:col3', 'Tab2:row27:col4'])
- dropped duplicate Q87 ('Rifampin effect on Frel after first dose', value '1.42') — already have one for this compound
- covariate level 'Food effect on ALAG' → Q900:food_effect_on_alag = 0.672 (linear_fractional on Q27)
- covariate level 'Exponential dose effect on Frel' → Q900:exponential_dose_effect_on_frel = 0.119 (power on Q27)
- covariate effect for Q95 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q49 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'Apparent clearance patients [CL/F (L/h)]' → L/h (from the paper text: 'The text explicitly states: "apparent clearance (CL/F), which was 22.9 L/h in healthy participants and was found to be 2')
- implicit units: 'Apparent central volume of distribution [V1/F (L)]' → L (from the paper text: 'The text explicitly states: "The apparent central volume of distribution (V1/F) was 86.1 L"')
- implicit units: 'Apparent first intercompartmental clearance [Q/F (L/h)]' → L/h (from the popPK convention: 'The paper does not explicitly state the unit for Q/F in the provided excerpts. However, the prompt instructions specify ')
- implicit units: 'Apparent first peripheral volume of distribution [V2/F (L)]' → L (from the popPK convention: 'The paper does not explicitly state the unit for V2/F in the provided excerpts. However, the prompt instructions specify')
- implicit units: 'Apparent second intercompartmental clearance [Q2/F (L/h)]' → L/h (from the popPK convention: 'The paper does not explicitly state the unit for Q2/F in the provided excerpts. However, the prompt instructions specify')
- implicit units: 'Apparent second peripheral volume of distribution [V3/F (L)]' → L (from the popPK convention: 'The paper does not explicitly state the unit for V3/F in the provided excerpts. However, the prompt instructions specify')
- implicit units: 'Lag time [ALAG (h)]' → h (from the popPK convention: 'The paper does not explicitly state the unit for ALAG in the provided excerpts (though Tk0 is given in hours). However, ')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=atogepant
- bound model equation to Q40 (Fab): F = 86.1 * (bodyweight/76.8)^
- Q40 (Fab) is equation-defined: value moved to equation-variable 'F'; equation kept verbatim
- population split: 'phase 3 modela' subgroup of Schlachter_2026 (paper reports 3 populations: phase 1 model, phase 2 modela, phase 3 modela)

**Extraction notes:**
- unparsed cell Tab2:row18:col5 = '(−0.669 to −0.654)'
- unparsed cell Tab2:row19:col5 = '(−0.164 to −0.0924)'
- unparsed cell Tab2:row25:col5 = '(−0.305 to −0.266)'
- unparsed cell Tab2:row27:col5 = '(−0.325 to −0.172)'
- unparsed cell Tab2:row29:col5 = '(−0.503 to −0.230)'
- unparsed cell Tab2:row32:col1 = '−0.44/−0.42'
- unparsed cell Tab2:row32:col5 = '(−0.507 to −0.198)'
- LLM selected parameter table(s) 2
- captured model equation F = 86.1 * (bodyweight/76.8)^

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.517 (15/29 fields) | 14 |

<details><summary>14 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[apparent clearance patients [cl/f (l/h)]].covariate_forms` | ['linear_fractional', 'linear_fractional', 'power'] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[blood-plasma ratio]` |  | 0.573 | only_one_extracted |
| `gpt-oss-120b` | `parameters[exponential_dose_effect_on_frel]` | 0.119 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[food_effect_on_alag]` | 0.672 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[fraction zero-order absorption]` |  | 0.693 | only_one_extracted |
| `gpt-oss-120b` | `parameters[itraconazole effect on frel].covariate_forms` | [] | ['power'] | mismatch |
| `gpt-oss-120b` | `parameters[lag time [alag (h)]].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[theta_frel_weight_power]` |  | 0.119 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q49_formulation]` |  | -0.353 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q95_formulation]` | -0.353 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_tlag_food]` |  | 0.672 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | atogepant | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | atogepant | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 10 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tab2:row3:col3', 'Tab2:row3:col4', 'Tab2:row3:col5'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Tab2:row6:col3', 'Tab2:row6:col4', 'Tab2:row6:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Tab2:row8:col3', 'Tab2:row8:col4', 'Tab2:row8:col5'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['Tab2:row7:col3', 'Tab2:row7:col4', 'Tab2:row7:col5'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['Tab2:row10:col3', 'Tab2:row10:col4', 'Tab2:row10:col5'] |
| C5_dimension_Q80 | pass | [length] ** 3 / [time] |  | ['Tab2:row9:col3', 'Tab2:row9:col4', 'Tab2:row9:col5'] |
| C5_dimension_Q83 | pass | [time] |  | ['Tab2:row11:col3', 'Tab2:row11:col4', 'Tab2:row11:col5'] |
| C5_unit_missing_Q82 | fail | [length] ** 3 |  | ['Tab2:row42:col3', 'Tab2:row42:col4', 'Tab2:row42:col5'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 17.4 L/h | ['Tab2:row3:col3', 'Tab2:row3:col4', 'Tab2:row3:col5'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 86.1 L | ['Tab2:row6:col3', 'Tab2:row6:col4', 'Tab2:row6:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 40.5 L | ['Tab2:row8:col3', 'Tab2:row8:col4', 'Tab2:row8:col5'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail |  |  | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction | apparent params must not be double-corrected |
| T3_param_coverage |  | pass | 6 scholar param(s) emitted or defaulted | 6 covered | all structural parameters accounted for |
| T3_topology_template |  | pass | 2C → PK_2C* | PK_2C_enteral | engineer template must match the scholar topology |
| T6_deviations |  | fail |  | invented_absorption: not acceptable | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 3 |  | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 13 |  | no simulated metric for this quantity (single reference sim) |

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

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Batogepant%5D%20Atogepant_Schlachter2026_phase_3_modela&body=Drug%3A%20atogepant%0ARecord%3A%20Atogepant_Schlachter2026_phase_3_modela%0APaper%3A%20Schlachter_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_atogepant/Atogepant_Schlachter2026_phase_3_modela%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 06:23 UTC</sub>
