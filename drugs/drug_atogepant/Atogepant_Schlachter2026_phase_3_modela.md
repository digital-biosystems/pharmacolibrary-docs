<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;atogepant&quot;,&quot;href&quot;:&quot;drugs/drug_atogepant/&quot;},{&quot;label&quot;:&quot;Schlachter_2026 \u00b7 phase_3_modela&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Atogepant_Schlachter2026_phase_2_modela&quot;,&quot;label&quot;:&quot;Schlachter_2026_phase_2_modela&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atogepant/Atogepant_Schlachter2026_phase_2_modela.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Schlachter_2026_2_MMD&quot;,&quot;label&quot;:&quot;Schlachter_2026_2 \u00b7 MMD&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_atogepant/pd_Schlachter_2026_2_MMD.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# atogepant — `Atogepant_Schlachter2026_phase_3_modela`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.654). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> **Caveat** (`covariates_not_exercised`): the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.

### Reviewer guidance

**The atogepant record was quarantined because clearance, volume of distribution, absorption rate constant, lag time and the intercompartmental rate constants had no extracted values, so library placeholder values were substituted for the published estimates.**

Although the paper reports apparent parameters for atogepant (e.g. CL/F 17.4 L/h, V1/F 86.1 L, Q/F 1.43 L/h, V2/F 40.5 L, tlag 0.276 h), the record's clearance, distribution volume, absorption rate constant, lag time, and central↔peripheral rate constants were left with no extracted values, so placeholder values stood in and the model was held back rather than published with invented numbers. The absorption rate constant was not reported in the source and was defaulted, which was judged an invented absorption input and not acceptable. The covariate effects defined in the record (e.g. the itraconazole effect on relative bioavailability 0.949, the dose effect 0.119) were not exercised: only the reference individual was simulated. A second reader also disagreed on several entries, reading a blood-plasma ratio of 0.573 and a fraction of zero-order absorption of 0.693 that this record lacks, and attributing the 0.119 dose effect to a weight power on relative bioavailability instead. Extracted — atogepant: CL/F 17.4, V1/F 86.1, Q/F 1.43, V2/F 40.5, Q2/F 1.68, V3/F 13, tlag 0.276, Frel 0.949.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has atogepant, the second reading unknown; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `model_quarantined` (reviewed 2026-09-28 14:36:13.751680+00:00) predates the upstream re-run (2026-10-07 06:23:55.690380+00:00). Current validate status: `needs_review`.

## Citation
Schlachter L et al., Population Pharmacokinetics of Atogepan…, Clinical pharmacokinetics (2026)
  ·  DOI: [10.1007/s40262-025-01566-5](https://doi.org/10.1007/s40262-025-01566-5)

## Model component
<dbs-pgx drug="atogepant" model-id="Atogepant_Schlachter2026_phase_3_modela" status="needs_review" stale="true" population="healthy participants and patients with migraine" measured-compound="atogepant" parameterization="apparent" topology="3C"></dbs-pgx>

**Model structure:** 3-compartment; no model was built for this record.  
**Parameters:** 9 extracted, plus 6 covariate effects.

**Parameterization:** CL/F, Q/F, Q2/F, V1/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Apparent clearance patients [CL/F (L/h)] | `Q27` · CL/F | 17.4 | L/h | 4.833333333333333e-06 | L/h | not captured | llm_confirmed (0.6) | Tab2:row3:col3, Tab2:row3:col4, Tab2:row3:col5 | — | not captured |
| Apparent central volume of distribution [V1/F (L)] | `Q290` · V1/F | 86.1 | L | 0.0861 | L | not captured | llm_confirmed (0.6) | Tab2:row6:col3, Tab2:row6:col4, Tab2:row6:col5 | — | not captured |
| Apparent first intercompartmental clearance [Q/F (L/h)] | `Q69` · Q/F | 1.43 | L/h | 3.9722222222222224e-07 | L/h | not captured | llm_corrected (0.6) | Tab2:row7:col3, Tab2:row7:col4, Tab2:row7:col5 | — | not captured |
| Apparent first peripheral volume of distribution [V2/F (L)] | `Q64` · V2 | 40.5 | L | 0.0405 | L | not captured | boundary_compartment (0.9) | Tab2:row8:col3, Tab2:row8:col4, Tab2:row8:col5 | — | not captured |
| Apparent second intercompartmental clearance [Q2/F (L/h)] | `Q80` · Q2/F | 1.68 | L/h | 4.6666666666666666e-07 | L/h | not captured | llm_corrected (0.6) | Tab2:row9:col3, Tab2:row9:col4, Tab2:row9:col5 | — | not captured |
| Apparent second peripheral volume of distribution [V3/F (L)] | `Q78` · V3/F | 13.0 | L | 0.013000000000000001 | L | not captured | llm_confirmed (0.6) | Tab2:row10:col3, Tab2:row10:col4, Tab2:row10:col5 | — | not captured |
| Lag time [ALAG (h)] | `Q83` · tlag | 0.276 | h | 993.6000000000001 | h | not captured | llm_confirmed (0.6) | Tab2:row11:col3, Tab2:row11:col4, Tab2:row11:col5 | — | not captured |
| Itraconazole effect on Frel | `Q87` · Frel | 0.949 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | Tab2:row26:col3, Tab2:row26:col4, Tab2:row26:col5 | — | not captured |
| food_effect_on_alag | `Q900` · food_effect_on_alag | 0.672 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab2:row30:col3, Tab2:row30:col4, Tab2:row30:col5 | — | not captured |
| exponential_dose_effect_on_frel | `Q900` · exponential_dose_effect_on_frel | 0.119 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab2:row31:col3, Tab2:row31:col4, Tab2:row31:col5 | — | not captured |
| CovQ/F,V2/F | `Q82` · V2/F | 0.422 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | Tab2:row42:col3, Tab2:row42:col4, Tab2:row42:col5 | — | not captured |
| theta_cl_f_hepatic | `Q900` · theta_cl_f_hepatic | -0.366 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab2:row29:col3, Tab2:row29:col4 | — | not captured |
| theta_q95_formulation | `Q900` · theta_q95_formulation | -0.353 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab2:row32:col3, Tab2:row32:col4 | — | not captured |
| theta_v1_f_weight_power | `Q900` · theta_v1_f_weight_power | 0.411 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab2:row33:col3, Tab2:row33:col4, Tab2:row33:col5 | — | not captured |
| theta_q49_weight_power | `Q900` · theta_q49_weight_power | 0.199 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab2:row34:col3, Tab2:row34:col4, Tab2:row34:col5 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| F | Q40 | not captured | exact |

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
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.654 (17/26 fields) | 9 |

<details><summary>9 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[apparent clearance patients [cl/f (l/h)]].covariate_forms` | ['linear_fractional', 'power'] | ['linear_fractional'] | mismatch |
| `gpt-oss:120b` | `parameters[apparent first peripheral volume of distribution [v2/f (l)]].parameter_id` | Q82 | Q64 | mismatch |
| `gpt-oss:120b` | `parameters[exponential_dose_effect_on_frel]` | 0.119 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[f]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[fraction zero-order absorption]` | not captured | 0.693 | only_one_extracted |
| `gpt-oss:120b` | `parameters[itraconazole effect on frel].covariate_forms` | [] | ['power'] | mismatch |
| `gpt-oss:120b` | `parameters[theta_frel_weight_power]` | not captured | 0.119 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | atogepant | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | atogepant | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 10 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row3:col3', 'Tab2:row3:col4', 'Tab2:row3:col5'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row6:col3', 'Tab2:row6:col4', 'Tab2:row6:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row8:col3', 'Tab2:row8:col4', 'Tab2:row8:col5'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row7:col3', 'Tab2:row7:col4', 'Tab2:row7:col5'] |
| C5_dimension_Q78 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row10:col3', 'Tab2:row10:col4', 'Tab2:row10:col5'] |
| C5_dimension_Q80 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row9:col3', 'Tab2:row9:col4', 'Tab2:row9:col5'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Tab2:row11:col3', 'Tab2:row11:col4', 'Tab2:row11:col5'] |
| C5_unit_missing_Q82 | fail | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row42:col3', 'Tab2:row42:col4', 'Tab2:row42:col5'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 17.4 L/h | not captured | not captured | ['Tab2:row3:col3', 'Tab2:row3:col4', 'Tab2:row3:col5'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 86.1 L | not captured | not captured | ['Tab2:row6:col3', 'Tab2:row6:col4', 'Tab2:row6:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 40.5 L | not captured | not captured | ['Tab2:row8:col3', 'Tab2:row8:col4', 'Tab2:row8:col5'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_param_coverage | not captured | pass | 6 scholar param(s) emitted or defaulted | 6 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 3 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_cmax | reference | skipped | 13 | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_atogepant/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Schlachter_2026` / `Schlachter_2026::phase_3_modela`)
- model: `../../../knowledgebase/drugs/drug_atogepant/models/modelica/_needs_review/Atogepant_Schlachter2026_phase_3_modela.mo`
- deviation: `../../../knowledgebase/drugs/drug_atogepant/models/modelica/_needs_review/Atogepant_Schlachter2026_phase_3_modela.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
</tbody></table>
<p>No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 06:23 UTC</sub>
