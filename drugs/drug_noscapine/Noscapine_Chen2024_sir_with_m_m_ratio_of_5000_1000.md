<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R05D&quot;,&quot;href&quot;:&quot;atc/R05D.md&quot;},{&quot;label&quot;:&quot;noscapine&quot;,&quot;href&quot;:&quot;drugs/drug_noscapine/&quot;},{&quot;label&quot;:&quot;Chen_2024 \u00b7 sir_with_m_m_ratio_of_5000_1000&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Noscapine_Chen2024_final_model&quot;,&quot;label&quot;:&quot;Chen_2024_final_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_noscapine/Noscapine_Chen2024_final_model.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Noscapine_Chen2024_sir_with_m_m_ratio_of_5000_1000&quot;,&quot;label&quot;:&quot;Chen_2024_sir_with_m_m_ratio_of_5000_1000&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_noscapine/Noscapine_Chen2024_sir_with_m_m_ratio_of_5000_1000.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# noscapine — `Noscapine_Chen2024_sir_with_m_m_ratio_of_5000_1000`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.071). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

> **Caveat** (`covariates_not_exercised`): the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.

### Reviewer guidance

**The model does not reproduce the paper's time of the peak (tmax) (paper 0.5, model 0.197); the model does not reproduce the paper's terminal half-life (paper 8.42, model 0.0397) (+2 more).**

Simulated as the paper dosed it, the model's time of the peak (tmax) differs from the value the paper reports by more than the tolerance. Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. Simulated as the paper dosed it, the model's peak concentration (Cmax) differs from the value the paper reports by more than the tolerance. The base model was simulated, not the covariate effects the record defines. Extracted — noscapine: D1 0.0663 h, CL/F 939 L/h, V1/F 49.6 L, Q/F 18.8 L/h, Q2/F 25.8 L/h, V3/F 31.2 L, Fab 83.1, ktr 13 1/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has noscapine, the second reading unknown; it also differs on 25 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Chen Z et al., A Semi-Mechanistic Population Pharmacok…, Drugs in R&D (2024)
  ·  DOI: [10.1007/s40268-024-00466-6](https://doi.org/10.1007/s40268-024-00466-6)

<div class="pk-model-meta" hidden drug="noscapine" model-id="Noscapine_Chen2024_sir_with_m_m_ratio_of_5000_1000" status="needs_review" stale="false" population="healthy adults" measured-compound="noscapine" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 8 extracted, plus 1 covariate effect.

**Parameterization:** CL/F, Q/F, Q2/F, V1/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| D1 (h) | `Q310` · D1 | 0.0663 | h | 238.67999999999998 | [h] | not captured | exact (1.0) | Tab4:row2:col3, Tab4:row2:col4 | — | 247 (None% RSE) |
| CL/F_EM (L/h) | `Q27` · CL/F | 939 | L/h | 0.00026083333333333335 | [l] / [h] | not captured | llm_corrected (0.6) | Tab4:row3:col3, Tab4:row3:col4 | — | 58.3 (None% RSE) |
| Vc/F (L) | `Q290` · V1/F | 49.6 | L | 0.049600000000000005 | [l] | not captured | exact (1.0) | Tab4:row6:col3, Tab4:row6:col4 | — | 29.2 (None% RSE) |
| Qp1/F (L/h) | `Q69` · Q/F | 18.8 | L/h | 5.2222222222222226e-06 | [l] / [h] | not captured | exact (1.0) | Tab4:row7:col3, Tab4:row7:col4 | — | not captured |
| Qp2/F (L/h) | `Q80` · Q2/F | 25.8 | L/h | 7.166666666666667e-06 | [l] / [h] | not captured | special_case (0.95) | Tab4:row9:col3, Tab4:row9:col4 | — | not captured |
| Vp2/F (L) | `Q78` · V3/F | 31.2 | L | 0.0312 | [l] | not captured | exact (1.0) | Tab4:row10:col3, Tab4:row10:col4 | — | not captured |
| F1 (%) | `Q40` · Fab | 83.1 | not captured | not captured | not captured | not captured | exact (1.0) | Tab4:row11:col3, Tab4:row11:col4 | — | 34.5 (None% RSE) |
| TR (1/h) | `Q306` · ktr | 13.0 | 1/h | 0.003611111111111111 | 1/h | not captured | llm (0.6) | Tab4:row12:col3, Tab4:row12:col4 | — | not captured |
| age_on_qp1_f | `Q900` · age_on_qp1_f | 0.343 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab4:row15:col3, Tab4:row15:col4 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `absorption_approximation`: transit absorption (ktr=0.003611/s, n=0) folded to first-order ka = ktr/(n+1) = 0.003611/s — same mean absorption time, no delay phase

**Interpretation flags:**
- table section iiv: 'D1' routed out of structural estimates ('Inter-individual variability (IIV, %)a')
- table section iiv: 'CL/F' routed out of structural estimates ('Inter-individual variability (IIV, %)a')
- table section iiv: 'Vc/F' routed out of structural estimates ('Inter-individual variability (IIV, %)a')
- table section iiv: 'F1' routed out of structural estimates ('Inter-individual variability (IIV, %)a')
- table section iov: 'TR' routed out of structural estimates ('Inter-occasion variability (%)')
- table section iov: 'Qp1/F' routed out of structural estimates ('Inter-occasion variability (%)')
- table section residual_error: 'Additive error' routed out of structural estimates ('Residual variability')
- dropped unlinked row (NIL): 'Parameter' — extend the ontology if this is a real PK parameter (source ['Tab4:row0:col3', 'Tab4:row0:col4'])
- dropped duplicate Q27 ('CL/F_IM_1.5 (L/h)', value '549') — already have one for this compound
- dropped duplicate Q27 ('CL/F_PM_IM_1.0 (L/h)', value '364') — already have one for this compound
- dropped duplicate Q290 ('Vp1/F (L)', value '243') — already have one for this compound
- dropped unlinked row (NIL): 'TBW on CL/F' — extend the ontology if this is a real PK parameter (source ['Tab4:row14:col3', 'Tab4:row14:col4'])
- covariate level 'Age on Qp1/F' → Q900:age_on_qp1_f = 0.343 (linear_fractional on Q27)
- implicit units: 'TR (1/h)' → 1/h (from the paper text: "The paper explicitly states 'TR (1/h)' in the parameter table excerpt provided in the text.")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=noscapine
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- model equation 'CLF = (TBW/77.3)^1.34' not bound — neither LHS nor base term 'TBW' linked to an ontology parameter
- population split: 'sir with m/m ratio of 5000/1000' subgroup of Chen_2024 (paper reports 2 populations: final model, sir with m/m ratio of 5000/1000)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell Tab4:row17:col1 = '226 (19.1%)c'
- unparsed cell Tab4:row18:col1 = '57.3 (0.1%)'
- unparsed cell Tab4:row19:col1 = '28.5 (5.2%)'
- unparsed cell Tab4:row20:col1 = '34.1 (1.2%)'
- unparsed cell Tab4:row23:col1 = '− 0.175'
- unparsed cell Tab4:row26:col1 = '50.7 (2.7%)c'
- unparsed cell Tab4:row27:col1 = '30.4 (14.5%)'
- unparsed cell Tab4:row29:col1 = '0.0420d (9.5%)c'
- LLM selected parameter table(s) 4
- captured model equation CLF = (TBW/77.3)^1.34

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8-27b` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.071 (2/28 fields) | 26 |

<details><summary>26 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[age_on_qp1_f]` | 0.343 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[age_on_qp1_f]` | not captured | 0.348 | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc0-inf]` | not captured | 24.9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[auc0-t]` | not captured | 25.9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f_em]` | 939 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f_em]` | not captured | 958 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax]` | not captured | 44.9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[d1]` | 0.0663 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[d1]` | not captured | 0.0624 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f1]` | 83.1 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[f1]` | not captured | 82.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[qp1/f]` | 18.8 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[qp1/f]` | not captured | 18.9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[qp2/f]` | 25.8 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[qp2/f]` | not captured | 25.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2]` | not captured | 8.42 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tmax (h)b]` | not captured | 40.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tr]` | 13.0 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[tr]` | not captured | 13.0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc/f]` | 49.6 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc/f]` | not captured | 49.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp1/f]` | not captured | 243 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp2/f]` | 31.2 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp2/f]` | not captured | 31.2 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | noscapine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | noscapine | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab4:row3:col3', 'Tab4:row3:col4'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab4:row6:col3', 'Tab4:row6:col4'] |
| C5_dimension_Q306 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab4:row12:col3', 'Tab4:row12:col4'] |
| C5_dimension_Q310 | pass | [time] | not captured | not captured | not captured | ['Tab4:row2:col3', 'Tab4:row2:col4'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab4:row7:col3', 'Tab4:row7:col4'] |
| C5_dimension_Q78 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab4:row10:col3', 'Tab4:row10:col4'] |
| C5_dimension_Q80 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab4:row9:col3', 'Tab4:row9:col4'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 939 L/h | not captured | not captured | ['Tab4:row3:col3', 'Tab4:row3:col4'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 49.6 L | not captured | not captured | ['Tab4:row6:col3', 'Tab4:row6:col4'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=noscapine) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 4 scholar param(s) emitted or defaulted | 4 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | fail | 3.679999999999999e-05 | 0.00023839455840611476 | 6.4781 | μg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 4.6899999999999995e-05 | 0.00023839455840611476 | 5.083 | μg/L→SI vs simulated kg/m3 |
| T1_t_half_terminal | reference | fail | 8.42 | 0.03972252166880836 | 0.0047 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 8.29 | 0.03972252166880836 | 0.0048 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.5 | 0.196502342098027 | 0.393 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.5 | 0.196502342098027 | 0.393 | h→SI vs simulated h |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_noscapine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Chen_2024` / `Chen_2024::sir_with_m_m_ratio_of_5000_1000`)
- model: `../../../knowledgebase/drugs/drug_noscapine/models/modelica/Noscapine_Chen2024_sir_with_m_m_ratio_of_5000_1000.mo`
- deviation: `../../../knowledgebase/drugs/drug_noscapine/models/modelica/Noscapine_Chen2024_sir_with_m_m_ratio_of_5000_1000.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_noscapine/models/modelica/Noscapine_Chen2024_sir_with_m_m_ratio_of_5000_1000.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
</tbody></table>
<p>No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_noscapine/Noscapine_Chen2024_sir_with_m_m_ratio_of_5000_1000/Noscapine_Chen2024_sir_with_m_m_ratio_of_5000_1000.svg" alt="Noscapine_Chen2024_sir_with_m_m_ratio_of_5000_1000 diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v26.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 50 mg, single dose, first-order absorption (ka 13 /h, F 1). Dose in the paper: 50 mg.

<dbs-fmusim paramsurl="drugs/drug_noscapine/Noscapine_Chen2024_sir_with_m_m_ratio_of_5000_1000/Noscapine_Chen2024_sir_with_m_m_ratio_of_5000_1000_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_noscapine/Noscapine_Chen2024_sir_with_m_m_ratio_of_5000_1000/Noscapine_Chen2024_sir_with_m_m_ratio_of_5000_1000_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_1C_enteral` · parameters `Noscapine_Chen2024_sir_with_m_m_ratio_of_5000_1000_params.json` · controls `Noscapine_Chen2024_sir_with_m_m_ratio_of_5000_1000_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 22:31 UTC</sub>
