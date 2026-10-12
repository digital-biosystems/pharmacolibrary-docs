<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07X&quot;,&quot;href&quot;:&quot;atc/N07X.md&quot;},{&quot;label&quot;:&quot;amifampridine&quot;,&quot;href&quot;:&quot;drugs/drug_amifampridine/&quot;},{&quot;label&quot;:&quot;Thakkar_2017 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# amifampridine — `Amifampridine_Thakkar2017_reference`

> ## <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.">not simulated</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.375). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A model was generated (see the **Models** tab); it has no in-browser simulator.

> **Caveat** (`covariates_not_exercised`): the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.

### Reviewer guidance

**The amifampridine parent–metabolite model was not published because the peripheral volume V2/F (902.2 L) was not carried into the built model, the structure was reduced to a one-compartment enteral model instead of the parent–metabolite structure, and covariate effects were never simulated.**

The record defines a two-compartment parent with a metabolite (3-N-acetyl-3,4-diaminopyridine) formed from amifampridine, but the built model used a one-compartment enteral structure, and of 7 parameters only 6 were covered — V2/F (902.2 L) was neither emitted nor defaulted. The covariate effect on the metabolite (theta_q351_weight_power, 1.1) was defined but only the reference individual was simulated, so covariate scenarios were not exercised. The builder also left the lag time (Tlag) at a default rather than an explicit estimate and assumed F=1 and Fm=1 with no molar correction (apparent parameterization). Extracted — amifampridine: kabs 1.1 h−1, CL/F 108 L/h, V1/F 72.6 L, Q/F 148 L/h, V2/F 902 L; 3-N-acetyl-3,4-diaminopyridine (3-Ac DAP): CL 23.3 L/h, V 52.3 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has 3,4-diaminopyridine (amifampridine) free base, the second reading 3,4-diaminopyridine (3,4-DAP) free base; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> **Dose compound ≠ measured compound:** dosed `3,4-diaminopyridine (amifampridine) free base`, measured `3,4-diaminopyridine (amifampridine)`.

## Citation
Thakkar N et al., Population Pharmacokinetics/Pharmacodyn…, CPT: pharmacometrics & syst… (2017)
  ·  DOI: [10.1002/psp4.12218](https://doi.org/10.1002/psp4.12218)

## Model component
<dbs-pgx drug="amifampridine" model-id="Amifampridine_Thakkar2017_reference" status="not_simulated" stale="false" population="patients with Lambert-Eaton myasthenia" measured-compound="3,4-diaminopyridine (amifampridine)" parameterization="apparent" topology="parent_metabolite"></dbs-pgx>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 7 extracted, plus 1 covariate effect.

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `not_simulated`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| KA, h−1 | `Q49` · kabs | 1.1 | h−1 | 0.0003055555555555556 | [1] / [h] | not captured | exact (1.0) | psp412218-tbl-0002:row2:col1, psp412218-tbl-0002:row2:col2, psp412218-tbl-0002:row2:col3, psp412218-tbl-0002:row2:col4, psp412218-tbl-0002:row2:col5 | — | 36.2 (None% RSE) |
| CL/F, L/h | `Q27` · CL/F | 107.7 | L/h | 2.9916666666666668e-05 | [l] / [h] | not captured | exact (1.0) | psp412218-tbl-0002:row3:col1, psp412218-tbl-0002:row3:col2, psp412218-tbl-0002:row3:col3, psp412218-tbl-0002:row3:col4, psp412218-tbl-0002:row3:col5 | — | 48.1 (None% RSE) |
| Vc/F, L | `Q290` · V1/F | 72.6 | L | 0.0726 | [l] | not captured | exact (1.0) | psp412218-tbl-0002:row4:col1, psp412218-tbl-0002:row4:col2, psp412218-tbl-0002:row4:col3, psp412218-tbl-0002:row4:col4, psp412218-tbl-0002:row4:col5 | — | 182.4 (None% RSE) |
| Q/F, L/h | `Q69` · Q/F | 147.7 | L/h | 4.1027777777777776e-05 | [l] / [h] | not captured | exact (1.0) | psp412218-tbl-0002:row5:col1, psp412218-tbl-0002:row5:col2, psp412218-tbl-0002:row5:col3, psp412218-tbl-0002:row5:col4, psp412218-tbl-0002:row5:col5 | — | 48.7 (None% RSE) |
| Vp/F, L | `Q82` · V2/F | 902.2 | L | 0.9022000000000001 | [l] | not captured | exact (1.0) | psp412218-tbl-0002:row6:col1, psp412218-tbl-0002:row6:col2, psp412218-tbl-0002:row6:col3, psp412218-tbl-0002:row6:col4, psp412218-tbl-0002:row6:col5 | — | 89.8 (None% RSE) |
| CLm/F3ACDAP , L/h | `Q22` · CL | 23.3 | L/h | 6.4722222222222225e-06 | [l] / [h] | not captured | exact (1.0) | psp412218-tbl-0002:row7:col1, psp412218-tbl-0002:row7:col2, psp412218-tbl-0002:row7:col3, psp412218-tbl-0002:row7:col4, psp412218-tbl-0002:row7:col5 | — | not captured |
| Vm/F3ACDAP , L | `Q61` · V | 52.3 | L | 0.0523 | [l] | not captured | exact (1.0) | psp412218-tbl-0002:row8:col1, psp412218-tbl-0002:row8:col2, psp412218-tbl-0002:row8:col3, psp412218-tbl-0002:row8:col4, psp412218-tbl-0002:row8:col5 | — | not captured |
| theta_q351_weight_power | `Q900` · theta_q351_weight_power | 1.1 | not captured | not captured | not captured | not captured | not captured (not captured) | psp412218-tbl-0002:row9:col1, psp412218-tbl-0002:row9:col2, psp412218-tbl-0002:row9:col3, psp412218-tbl-0002:row9:col4, psp412218-tbl-0002:row9:col5 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'KA, %' routed out of structural estimates ('Between subject variability (%CV)')
- table section iiv: 'CL/F, %' routed out of structural estimates ('Between subject variability (%CV)')
- table section iiv: 'Vc/F, %' routed out of structural estimates ('Between subject variability (%CV)')
- table section iiv: 'Q/F, %' routed out of structural estimates ('Between subject variability (%CV)')
- table section iiv: 'Vp/F, %' routed out of structural estimates ('Between subject variability (%CV)')
- table section iiv: 'CLm/F3ACDAP, %' routed out of structural estimates ('Between subject variability (%CV)')
- table section iiv: 'CL/F‐Vc/F covariance d' routed out of structural estimates ('Between subject variability (%CV)')
- table section residual_error: '3,4‐DAP proportional error, %' routed out of structural estimates ('Residual error')
- table section residual_error: '3‐Ac DAP proportional error, %' routed out of structural estimates ('Residual error')
- NIL: refused to back-fill base 'CL' from footnote/prose loose number None (source ['psp412218-tbl-0002:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V2/F' from footnote/prose loose number None (source ['psp412218-tbl-0002:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 82 (source ['psp412218-tbl-0002:footnote']); the table cell was unparseable — needs review
- covariate weight for equation variable from footnote/prose kept as documentation only (['psp412218-tbl-0002:footnote'])
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 0.8 (source ['psp412218-tbl-0002:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 500 (source ['psp412218-tbl-0002:footnote']); the table cell was unparseable — needs review
- covariate effect for Q351 has no base parameter row (kept as unattached equation-variable)
- metabolite volume: 'Vm/F3ACDAP , L' Q63→Q61 for 3-N-acetyl-3,4-diaminopyridine (3-Ac DAP) — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=3,4-diaminopyridine (amifampridine)
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [1]
- row roles (LLM): model_class=compartmental; 25/25 row label(s) assigned, 38 linked by role; re-tagged parent→3-N-acetyl-3,4-diaminopyridine (3-Ac DAP) ×25, 3,4-diaminopyridine (amifampridine)→parent ×2, 3,4-diaminopyridine (amifampridine)→3-N-acetyl-3,4-diaminopyridine (3-Ac DAP) ×2
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `glm-5.3-flash` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.375 (6/16 fields) | 10 |

<details><summary>10 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['3,4-diaminopyridine (amifampridine)', '3-n-acetyl-3,4-diaminopyridine (3-ac dap)', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[cl/f].covariate_forms` | [] | ['power'] | mismatch |
| `gpt-oss-120b` | `parameters[clm/f3acdap]` | not captured | 23.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clm/f3acdap]` | 23.3 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[exponent_for_scr_on_clm_f3acdap_c]` | not captured | 1.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q351_weight_power]` | 1.1 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vm/f3acdap]` | not captured | 52.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vm/f3acdap]` | 52.3 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | 3,4-diaminopyridine (amifampridine) free base | 3,4-diaminopyridine (3,4-DAP) free base | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | 3,4-diaminopyridine (amifampridine) | 3,4-diaminopyridine (3,4-DAP) | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412218-tbl-0002:row7:col1', 'psp412218-tbl-0002:row7:col2', 'psp412218-tbl-0002:row7:col3', 'psp412218-tbl-0002:row7:col4', 'psp412218-tbl-0002:row7:col5'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412218-tbl-0002:row3:col1', 'psp412218-tbl-0002:row3:col2', 'psp412218-tbl-0002:row3:col3', 'psp412218-tbl-0002:row3:col4', 'psp412218-tbl-0002:row3:col5'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412218-tbl-0002:row4:col1', 'psp412218-tbl-0002:row4:col2', 'psp412218-tbl-0002:row4:col3', 'psp412218-tbl-0002:row4:col4', 'psp412218-tbl-0002:row4:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['psp412218-tbl-0002:row2:col1', 'psp412218-tbl-0002:row2:col2', 'psp412218-tbl-0002:row2:col3', 'psp412218-tbl-0002:row2:col4', 'psp412218-tbl-0002:row2:col5'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412218-tbl-0002:row8:col1', 'psp412218-tbl-0002:row8:col2', 'psp412218-tbl-0002:row8:col3', 'psp412218-tbl-0002:row8:col4', 'psp412218-tbl-0002:row8:col5'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412218-tbl-0002:row5:col1', 'psp412218-tbl-0002:row5:col2', 'psp412218-tbl-0002:row5:col3', 'psp412218-tbl-0002:row5:col4', 'psp412218-tbl-0002:row5:col5'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412218-tbl-0002:row6:col1', 'psp412218-tbl-0002:row6:col2', 'psp412218-tbl-0002:row6:col3', 'psp412218-tbl-0002:row6:col4', 'psp412218-tbl-0002:row6:col5'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 23.3 L/h | not captured | not captured | ['psp412218-tbl-0002:row7:col1', 'psp412218-tbl-0002:row7:col2', 'psp412218-tbl-0002:row7:col3', 'psp412218-tbl-0002:row7:col4', 'psp412218-tbl-0002:row7:col5'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 108 L/h | not captured | not captured | ['psp412218-tbl-0002:row3:col1', 'psp412218-tbl-0002:row3:col2', 'psp412218-tbl-0002:row3:col3', 'psp412218-tbl-0002:row3:col4', 'psp412218-tbl-0002:row3:col5'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 72.6 L | not captured | not captured | ['psp412218-tbl-0002:row4:col1', 'psp412218-tbl-0002:row4:col2', 'psp412218-tbl-0002:row4:col3', 'psp412218-tbl-0002:row4:col4', 'psp412218-tbl-0002:row4:col5'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 52.3 L | not captured | not captured | ['psp412218-tbl-0002:row8:col1', 'psp412218-tbl-0002:row8:col2', 'psp412218-tbl-0002:row8:col3', 'psp412218-tbl-0002:row8:col4', 'psp412218-tbl-0002:row8:col5'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 902 L | not captured | not captured | ['psp412218-tbl-0002:row6:col1', 'psp412218-tbl-0002:row6:col2', 'psp412218-tbl-0002:row6:col3', 'psp412218-tbl-0002:row6:col4', 'psp412218-tbl-0002:row6:col5'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_param_coverage | not captured | fail | 7 scholar param(s) emitted or defaulted | 6 covered | not captured | neither emitted nor in defaulted[]: ['V2/F'] |
| T3_topology_template | not captured | fail | parent_metabolite_central → PK_3M_9C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_amifampridine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Thakkar_2017` / `Thakkar_2017::reference`)
- model: `../../../knowledgebase/drugs/drug_amifampridine/models/modelica/Amifampridine_Thakkar2017_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_amifampridine/models/modelica/Amifampridine_Thakkar2017_reference.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_amifampridine/Amifampridine_Thakkar2017_reference/Amifampridine_Thakkar2017_reference_modelica.zip" download>Amifampridine_Thakkar2017_reference_modelica.zip</a> <span class="pk-size">(4.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_amifampridine/Amifampridine_Thakkar2017_reference/Amifampridine_Thakkar2017_reference_matlab.zip" download>Amifampridine_Thakkar2017_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_amifampridine/Amifampridine_Thakkar2017_reference/Amifampridine_Thakkar2017_reference_matlab_simbio.zip" download>Amifampridine_Thakkar2017_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_amifampridine/Amifampridine_Thakkar2017_reference/Amifampridine_Thakkar2017_reference_sbml.zip" download>Amifampridine_Thakkar2017_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_amifampridine/Amifampridine_Thakkar2017_reference/Amifampridine_Thakkar2017_reference_cellml.zip" download>Amifampridine_Thakkar2017_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 04:17 UTC</sub>
