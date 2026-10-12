<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;tebipenem pivoxil&quot;,&quot;href&quot;:&quot;drugs/drug_tebipenem_pivoxil/&quot;},{&quot;label&quot;:&quot;Ganesan_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;TebipenemPivoxil_Ganesan2023_reference&quot;,&quot;label&quot;:&quot;Ganesan_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tebipenem_pivoxil/TebipenemPivoxil_Ganesan2023_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tebipenem pivoxil — `TebipenemPivoxil_Ganesan2023_reference`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.312). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

> **Caveat** (`covariates_not_exercised`): the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.

### Reviewer guidance

**Accepted with a caveat: the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines. None of the extracted parameters is tebipenem pivoxil's own; they describe tebipenem.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has tebipenem_pivoxil, the second reading tebipenem pivoxil hydrobromide; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> **Dose compound ≠ measured compound:** dosed `tebipenem_pivoxil`, measured `tebipenem`.

## Citation
Ganesan H et al., Population Pharmacokinetic Analyses for…, Antimicrobial agents and ch… (2023)
  ·  DOI: [10.1128/aac.01451-22](https://doi.org/10.1128/aac.01451-22)

<div class="pk-model-meta" hidden drug="tebipenem pivoxil" model-id="TebipenemPivoxil_Ganesan2023_reference" status="accepted_with_caveats" stale="false" population="adults with cUTI/AP and healthy adults" measured-compound="tebipenem" parameterization="apparent" topology="2C"></div>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 6 extracted, plus 2 covariate effects.

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CLNR | `Q79` · CLNR | 15.6 | L/h | 4.333333333333333e-06 | L/h | not captured | exact (1.0) | T2:row2:col1, T2:row2:col2, T2:row2:col4, T2:row2:col5, T2:row2:col6 | — | not captured |
| CL/F:BSA (slope) | `Q27` · CL/F | 0.479 | L/h | 1.3305555555555554e-07 | L/h | not captured | llm_confirmed (0.6) | T2:row7:col1, T2:row7:col2, T2:row7:col4, T2:row7:col5, T2:row7:col6 | — | not captured |
| Vc/F | `Q290` · V1/F | 38.5 | L | 0.0385 | L | not captured | exact (1.0) | T2:row8:col1, T2:row8:col2, T2:row8:col4, T2:row8:col5, T2:row8:col6 | — | 10.6 (None% RSE) |
| CLd/F | `Q69` · Q/F | 2.23 | L/h | 6.194444444444445e-07 | L/h | not captured | exact (1.0) | T2:row11:col1, T2:row11:col2, T2:row11:col4, T2:row11:col5, T2:row11:col6 | — | not captured |
| Vp/F | `Q82` · V2/F | 4.84 | L | 0.00484 | L | not captured | exact (1.0) | T2:row12:col1, T2:row12:col2, T2:row12:col4, T2:row12:col5, T2:row12:col6 | — | 46.4 (None% RSE) |
| Ka (fasted) | `Q49` · kabs | 1.23 | 1/h | 0.00034166666666666666 | 1/h | not captured | exact (1.0) | T2:row15:col1, T2:row15:col2, T2:row15:col4, T2:row15:col5, T2:row15:col6 | — | 8.46 (None% RSE) |
| theta_clnr_weight_power | `Q900` · theta_clnr_weight_power | 0.722 | not captured | not captured | not captured | not captured | not captured (not captured) | T2:row3:col1, T2:row3:col2, T2:row3:col4, T2:row3:col5, T2:row3:col6 | — | not captured |
| theta_v1_f_weight_power | `Q900` · theta_v1_f_weight_power | 2.09 | not captured | not captured | not captured | not captured | not captured (not captured) | T2:row10:col1, T2:row10:col2, T2:row10:col4, T2:row10:col5, T2:row10:col6 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped value-less row: 'Parameter'
- dropped unlinked row (NIL): 'CLR, MAX' — extend the ontology if this is a real PK parameter (source ['T2:row4:col1', 'T2:row4:col2', 'T2:row4:col4', 'T2:row4:col5', 'T2:row4:col6'])
- dropped unlinked row (NIL): 'CLR, CLcr 50' — extend the ontology if this is a real PK parameter (source ['T2:row5:col1', 'T2:row5:col2', 'T2:row5:col4', 'T2:row5:col5', 'T2:row5:col6'])
- dropped PD-category row 'CLR, Hill' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T2:row6:col1', 'T2:row6:col2', 'T2:row6:col4', 'T2:row6:col5', 'T2:row6:col6'])
- unit_dimension_unknown: 'slope' (CL/F)
- dropped duplicate Q290 ('Vc/F:Infection status', value '-0.29') — already have one for this compound
- dropped unlinked row (NIL): 'Vp/F:BSA (slope)' — extend the ontology if this is a real PK parameter (source ['T2:row13:col1', 'T2:row13:col2', 'T2:row13:col4', 'T2:row13:col5', 'T2:row13:col6'])
- dropped unlinked row (NIL): 'Vp/F:Infection status' — extend the ontology if this is a real PK parameter (source ['T2:row14:col1', 'T2:row14:col2', 'T2:row14:col4', 'T2:row14:col5', 'T2:row14:col6'])
- unit_dimension_unknown: 'fasted' (kabs)
- unit_dimension_unknown: 'fed' (kabs)
- dropped duplicate Q49 ('Ka (fed)', value '3.04') — already have one for this compound
- dropped duplicate Q49 ('Ka:Dose effect', value '-0.478') — already have one for this compound
- dropped unlinked row (NIL): 'Ka:Infection status' — extend the ontology if this is a real PK parameter (source ['T2:row18:col1', 'T2:row18:col2', 'T2:row18:col4', 'T2:row18:col5', 'T2:row18:col6'])
- dropped unlinked row (NIL): 'RVprop, plasma' — extend the ontology if this is a real PK parameter (source ['T2:row26:col2', 'T2:row26:col3', 'T2:row26:col4', 'T2:row26:col5', 'T2:row26:col6'])
- dropped unlinked row (NIL): 'RVprop, urine' — extend the ontology if this is a real PK parameter (source ['T2:row27:col2', 'T2:row27:col3', 'T2:row27:col4', 'T2:row27:col5', 'T2:row27:col6'])
- dropped unlinked row (NIL): 'RVadd, urine' — extend the ontology if this is a real PK parameter (source ['T2:row28:col1', 'T2:row28:col2', 'T2:row28:col3', 'T2:row28:col4', 'T2:row28:col5', 'T2:row28:col6'])
- implicit units: 'CLNR' → L/h (from the popPK convention: 'CLNR is a clearance parameter; in population PK, clearances are standardly expressed in L/h, consistent with the magnitu')
- implicit units: 'CL/F:BSA (slope)' → L/h (from the popPK convention: 'CL/F is a total clearance parameter; the base unit for clearance in population PK is L/h. The slope relates this to BSA,')
- implicit units: 'Vc/F' → L (from the popPK convention: 'Vc/F is a volume of distribution parameter; volumes in population PK are standardly expressed in L.')
- implicit units: 'CLd/F' → L/h (from the popPK convention: 'CLd/F is an intercompartmental clearance parameter; intercompartmental clearances are standardly expressed in L/h.')
- implicit units: 'Vp/F' → L (from the popPK convention: 'Vp/F is a volume of distribution parameter; volumes in population PK are standardly expressed in L.')
- implicit units: 'Ka (fasted)' → 1/h (from the popPK convention: 'Ka is a first-order rate constant for absorption; rate constants in population PK are standardly expressed in 1/h.')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=tebipenem
- review gap-fill skipped: this record measures 'tebipenem', not tebipenem_pivoxil — the review values are the parent's

**Extraction notes:**
- unparsed cell T2:row2:col7 = '[14.4, 17.1]'
- unparsed cell T2:row3:col7 = '[0.655, 0.802]'
- unparsed cell T2:row4:col7 = '[18.9, 23.5]'
- unparsed cell T2:row5:col7 = '[38.9, 51.5]'
- unparsed cell T2:row6:col7 = '[1.92, 2.34]'
- unparsed cell T2:row7:col7 = '[0.311, 0.625]'
- unparsed cell T2:row8:col7 = '[35.8, 41.3]'
- unparsed cell T2:row9:col7 = '[−0.396, −0.207]'
- unparsed cell T2:row10:col7 = '[1.26, 2.99]'
- unparsed cell T2:row11:col7 = '[1.82, 3]'
- unparsed cell T2:row12:col7 = '[4.3, 5.61]'
- unparsed cell T2:row13:col7 = '[0.306, 0.661]'
- unparsed cell T2:row14:col7 = '[−0.318, −0.153]'
- unparsed cell T2:row15:col7 = '[1.1, 1.39]'
- unparsed cell T2:row16:col7 = '[2.84, 3.3]'
- unparsed cell T2:row17:col7 = '[−0.522, −0.424]'
- unparsed cell T2:row18:col7 = '[0.168, 0.558]'
- unparsed cell T2:row19:col1 = '0.0614 (24.8 %CV)'
- unparsed cell T2:row19:col7 = '[0.0474, 0.0827]'
- unparsed cell T2:row20:col1 = '0.328 (57.2 %CV)'
- unparsed cell T2:row20:col7 = '[0.287, 0.366]'
- unparsed cell T2:row21:col1 = '0.197 (44.4 %CV)'
- unparsed cell T2:row21:col7 = '[0.157, 0.26]'
- unparsed cell T2:row22:col1 = '0.0115 (10.7 %CV)'
- unparsed cell T2:row22:col7 = '[0.00458, 0.0223]'
- unparsed cell T2:row23:col1 = '0.518 (71.9 %CV)'
- unparsed cell T2:row23:col7 = '[0.44, 0.617]'
- unparsed cell T2:row24:col1 = '0.201 (44.8 %CV)'
- unparsed cell T2:row24:col7 = '[0.102, 0.397]'
- unparsed cell T2:row25:col1 = '0.201 (44.8 %CV)'
- unparsed cell T2:row26:col1 = '0.209 (45.7 %CV)'
- unparsed cell T2:row26:col7 = '[0.198, 0.221]'
- unparsed cell T2:row27:col1 = '0.298 (54.6 %CV)'
- unparsed cell T2:row27:col7 = '[0.254, 0.355]'
- unparsed cell T2:row28:col7 = '[308, 752]'
- companion parameter table 3 transcribed (0 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8-27b` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.312 (5/16 fields) | 11 |

<details><summary>11 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl/f:bsa].value` | 0.479 | 21 | mismatch |
| `gpt-oss-120b` | `parameters[cld/f].value` | 2.23 | 11 | mismatch |
| `gpt-oss-120b` | `parameters[clnr].value` | 15.6 | 5.87 | mismatch |
| `gpt-oss-120b` | `parameters[clr, max]` | not captured | 5.96 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka].value` | 1.23 | 5.08 | mismatch |
| `gpt-oss-120b` | `parameters[rvprop, urine]` | not captured | 11.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_clnr_weight_power].value` | 0.722 | 5.92 | mismatch |
| `gpt-oss-120b` | `parameters[theta_v1_f_weight_power].value` | 2.09 | 24.7 | mismatch |
| `gpt-oss-120b` | `parameters[vc/f].value` | 38.5 | 3.81 | mismatch |
| `gpt-oss-120b` | `parameters[vp/f].value` | 4.84 | 6.6 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | tebipenem_pivoxil | tebipenem pivoxil hydrobromide | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row7:col1', 'T2:row7:col2', 'T2:row7:col4', 'T2:row7:col5', 'T2:row7:col6'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row8:col1', 'T2:row8:col2', 'T2:row8:col4', 'T2:row8:col5', 'T2:row8:col6'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['T2:row15:col1', 'T2:row15:col2', 'T2:row15:col4', 'T2:row15:col5', 'T2:row15:col6'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row11:col1', 'T2:row11:col2', 'T2:row11:col4', 'T2:row11:col5', 'T2:row11:col6'] |
| C5_dimension_Q79 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row2:col1', 'T2:row2:col2', 'T2:row2:col4', 'T2:row2:col5', 'T2:row2:col6'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row12:col1', 'T2:row12:col2', 'T2:row12:col4', 'T2:row12:col5', 'T2:row12:col6'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.479 L/h | not captured | not captured | ['T2:row7:col1', 'T2:row7:col2', 'T2:row7:col4', 'T2:row7:col5', 'T2:row7:col6'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 38.5 L | not captured | not captured | ['T2:row8:col1', 'T2:row8:col2', 'T2:row8:col4', 'T2:row8:col5', 'T2:row8:col6'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 4.84 L | not captured | not captured | ['T2:row12:col1', 'T2:row12:col2', 'T2:row12:col4', 'T2:row12:col5', 'T2:row12:col6'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=tebipenem) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 6 scholar param(s) emitted or defaulted | 6 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_tebipenem_pivoxil/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Ganesan_2023` / `Ganesan_2023::reference`)
- model: `../../../knowledgebase/drugs/drug_tebipenem_pivoxil/models/modelica/TebipenemPivoxil_Ganesan2023_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_tebipenem_pivoxil/models/modelica/TebipenemPivoxil_Ganesan2023_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_tebipenem_pivoxil/models/modelica/TebipenemPivoxil_Ganesan2023_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_tebipenem_pivoxil/TebipenemPivoxil_Ganesan2023_reference/TebipenemPivoxil_Ganesan2023_reference_modelica.zip" download>TebipenemPivoxil_Ganesan2023_reference_modelica.zip</a> <span class="pk-size">(5.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_tebipenem_pivoxil/TebipenemPivoxil_Ganesan2023_reference/TebipenemPivoxil_Ganesan2023_reference_fmi.zip" download>TebipenemPivoxil_Ganesan2023_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_tebipenem_pivoxil/TebipenemPivoxil_Ganesan2023_reference/TebipenemPivoxil_Ganesan2023_reference_matlab.zip" download>TebipenemPivoxil_Ganesan2023_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_tebipenem_pivoxil/TebipenemPivoxil_Ganesan2023_reference/TebipenemPivoxil_Ganesan2023_reference_matlab_simbio.zip" download>TebipenemPivoxil_Ganesan2023_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_tebipenem_pivoxil/TebipenemPivoxil_Ganesan2023_reference/TebipenemPivoxil_Ganesan2023_reference_sbml.zip" download>TebipenemPivoxil_Ganesan2023_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_tebipenem_pivoxil/TebipenemPivoxil_Ganesan2023_reference/TebipenemPivoxil_Ganesan2023_reference_cellml.zip" download>TebipenemPivoxil_Ganesan2023_reference_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_2C_enteral.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_tebipenem_pivoxil/TebipenemPivoxil_Ganesan2023_reference/TebipenemPivoxil_Ganesan2023_reference.svg" alt="TebipenemPivoxil_Ganesan2023_reference diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v26.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 600 mg, single dose, first-order absorption (ka 1.23 /h, F 1). Dose in the paper: 600 mg.

<dbs-fmusim paramsurl="drugs/drug_tebipenem_pivoxil/TebipenemPivoxil_Ganesan2023_reference/TebipenemPivoxil_Ganesan2023_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_tebipenem_pivoxil/TebipenemPivoxil_Ganesan2023_reference/TebipenemPivoxil_Ganesan2023_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_2C_enteral` · parameters `TebipenemPivoxil_Ganesan2023_reference_params.json` · controls `TebipenemPivoxil_Ganesan2023_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 11:47 UTC</sub>
