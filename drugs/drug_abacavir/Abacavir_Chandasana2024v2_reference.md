<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;abacavir&quot;,&quot;href&quot;:&quot;drugs/drug_abacavir/&quot;},{&quot;label&quot;:&quot;Chandasana_2024_2 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Abacavir_Chupradit2024_reference&quot;,&quot;label&quot;:&quot;Chupradit_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_abacavir/Abacavir_Chupradit2024_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Abacavir_Fauchet2014_reference&quot;,&quot;label&quot;:&quot;Fauchet_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_abacavir/Abacavir_Fauchet2014_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Abacavir_Ji2024_reference&quot;,&quot;label&quot;:&quot;Ji_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_abacavir/Abacavir_Ji2024_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Abacavir_Zhang2015_reference&quot;,&quot;label&quot;:&quot;Zhang_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_abacavir/Abacavir_Zhang2015_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# abacavir — `Abacavir_Chandasana2024v2_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.893). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The abacavir children's HIV-1 model was held back because kabs and V/F carry no unit, so their values (2.08 h−1, 32.7 l) cannot be converted to SI.**

Kabs and V/F have no unit; without a unit the values cannot be converted, so the model cannot use them. The record also lists conflicting weight-exponent values for the same covariate effects (0.794, 0.455, 0.758 for clearance; 0.556 versus 0.698 for volume), and a second reader assigned 0.698 to the volume exponent while this record gives 0.556. The weight-based consistency check could not compute a comparison (ratio None), so it is inconclusive rather than a demonstrated fault. The dose compound is also disputed: abacavir versus abacavir/dolutegravir/lamivudine. Extracted — abacavir: CL/F 16.3 L/h, V2/F 10.1 l, kabs 2.08, Q/F 1.69 l/h, V3/F 23 l, Fab 1.62, V1/F 23.1 l, V/F 32.7, … (+1).

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has abacavir, the second reading abacavir/dolutegravir/lamivudine fixed-dose combination; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-09-28 14:35:50.746810+00:00) predates the upstream re-run (2026-10-07 12:38:08.219470+00:00). Current validate status: `needs_review`.

> **Dose compound ≠ measured compound:** dosed `ABC/DTG/3TC FDC`, measured `abacavir`.

## Citation
Chandasana H et al., Population Pharmacokinetic Modeling of…, Infectious diseases and the… (2024)
  ·  DOI: [10.1007/s40121-024-01008-y](https://doi.org/10.1007/s40121-024-01008-y)

## Model component
<dbs-pgx drug="abacavir" model-id="Abacavir_Chandasana2024v2_reference" status="needs_review" stale="true" population="children with HIV-1" measured-compound="abacavir" parameterization="apparent" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 8 extracted, plus 5 covariate effects.

**Parameterization:** CL/F, Q/F, V1/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Apparent clearance, CL/F [L/h] | `Q27` · CL/F | 16.3 | L/h | 4.527777777777778e-06 | [l] / [h] | 3.62 | llm_confirmed (0.6) | Chandasana_2024_2_table_1:row0:col1 | — | 36.3 (None% RSE) |
| Apparent central volume of distribution, V2/F [l] | `Q82` · V2/F | 10.1 | l | 0.0101 | [l] | 7.56 | llm_corrected (0.6) | Chandasana_2024_2_table_1:row1:col1 | — | 51.9 (None% RSE) |
| Absorption rate constant, KA [h−1] | `Q49` · kabs | 2.08 | 1/h | 0.0005777777777777778 | 1/h | 2.31 | llm_confirmed (0.6) | Chandasana_2024_2_table_1:row2:col1, Chandasana_2024_2_table_3:row0:col1 | — | 107 (None% RSE) |
| Intercompartment clearance, Q/F [l/h] | `Q69` · Q/F | 1.69 | l/h | 4.694444444444444e-07 | [l] / [h] | 7.87 | llm_corrected (0.6) | Chandasana_2024_2_table_1:row3:col1 | — | 67.9 (None% RSE) |
| Apparent peripheral compartment volume of distribution, V3/F [l] | `Q78` · V3/F | 23.0 | l | 0.023 | [l] | 17.4 | llm_corrected (0.6) | Chandasana_2024_2_table_1:row4:col1 | — | 91.9 (None% RSE) |
| F, tablet ARROW PK Substudy Part 2 | `Q900` · equation variable | 1.62 | not captured | not captured | not captured | 8.02 | llm (0.6) | Chandasana_2024_2_table_1:row5:col1 | — | not captured |
| Apparent central volume of distribution, V/F [l] | `Q290` · V1/F | 23.1 | l | 0.023100000000000002 | [l] | 2.42 | llm_confirmed (0.6) | Chandasana_2024_2_table_2:row1:col1, Chandasana_2024_2_table_3:row2:col1 | — | not captured |
| F, fasted FCT | `Q40` · Fab | 1.00 | not captured | not captured | not captured | not captured | llm (0.6) | Chandasana_2024_2_table_2:row4:col1 | — | not captured |
| Lag time ALAG1 (h) | `Q83` · tlag | 0.297 | h | 1069.2 | [h] | 12.1 | boundary (0.8) | Chandasana_2024_2_table_3:row1:col1 | — | not captured |
| theta_cl_f_wt_power | `Q900` · theta_cl_f_wt_power | 0.794 | not captured | not captured | not captured | not captured | not captured (not captured) | Chandasana_2024_2_table_1:row7:col1 | — | not captured |
| theta_cl_f_wt_power | `Q900` · theta_cl_f_wt_power | 0.455 | not captured | not captured | not captured | 4.15 | not captured (not captured) | Chandasana_2024_2_table_2:row7:col1 | — | not captured |
| theta_q76_wt_power | `Q900` · theta_q76_wt_power | 0.556 | not captured | not captured | not captured | 3.87 | not captured (not captured) | Chandasana_2024_2_table_2:row8:col1 | — | not captured |
| theta_cl_f_wt_power | `Q900` · theta_cl_f_wt_power | 0.758 | not captured | not captured | not captured | 7.07 | not captured (not captured) | Chandasana_2024_2_table_3:row6:col1 | — | not captured |
| theta_q1_wt_power | `Q900` · theta_q1_wt_power | 0.677 | not captured | not captured | not captured | 8.98 | not captured (not captured) | Chandasana_2024_2_table_3:row7:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| Weight bands | Q319 | not captured | llm |

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Q/F' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'V2/F' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'V3/F' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'CL/F' routed out of structural estimates ('Interindividual variability')
- table section iov: 'IOV-CL/F' routed out of structural estimates ('Interoccasion variability')
- table section iiv: 'V/F' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'KA' routed out of structural estimates ('Interindividual variability')
- table section iov: 'IOV-KA' routed out of structural estimates ('Interoccasion variability')
- table section iov: 'IOV-V/F' routed out of structural estimates ('Interoccasion variability')
- table section iov: 'IOVKA' routed out of structural estimates ('Interoccasion variability')
- table section residual_error: 'Additive error [mg/l]' routed out of structural estimates ('Residual error')
- column 'auc0–24(µg*h/ml)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'c24(µg/ml)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'V/2F ~ (WT/15.6)' — extend the ontology if this is a real PK parameter (source ['Chandasana_2024_2_table_1:row8:col1'])
- dropped duplicate Q27 ('Apparent clearance, CL/F [l/h]', value '9.16') — already have one for this compound
- dropped duplicate Q49 ('Absorption rate constant, KA, FCT [h−1]', value '0.854') — already have one for this compound
- dropped duplicate Q49 ('Absorption rate constant, KA ~ DT and granules [h−1]', value '2.04') — already have one for this compound
- dropped unlinked row (NIL): 'Maturation half time, TM50 [PMA weeks]' — extend the ontology if this is a real PK parameter (source ['Chandasana_2024_2_table_2:row10:col1'])
- dropped PD-category row 'Hill coefficient related to the slope of the enzyme maturation process' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Chandasana_2024_2_table_2:row11:col1'])
- covariate effect for Q76 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q1 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'Absorption rate constant, KA [h−1]' → 1/h (from the paper text: "The parameter line explicitly states the unit as '[h−1]' next to the value 2.08.")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=abacavir
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count

**Extraction notes:**
- companion parameter table 1 transcribed (14 record(s))
- companion parameter table 2 transcribed (18 record(s))
- companion parameter table 3 transcribed (16 record(s))
- LLM selected parameter table(s) 1, 2, 3, 4
- LLM region Tab4:footnote: Error code: 429 - {'error': {'message': 'Rate limit exceeded for api_key: 8d79104cac3d0b5a8019d9c3dd60ff02e7a84591fb3552ddb3bbcabd52b31d23. Limit type: max_parallel_requests. Current limit: 4, Remaining: 0. Limit resets at: 2026-10-07 13:09:39 UTC', 'type': 'throttling_error', 'param': None, 'code': '429'}}

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.893 (25/28 fields) | 3 |

<details><summary>3 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[absolute bioavailability (f1) solution po]` | not captured | 0.496 | only_one_extracted |
| `gpt-oss:120b` | `parameters[f, tablet arrow pk substudy part 2].parameter_id` | Q40 | Q87 | mismatch |
| `gpt-oss:120b` | `screen.dose_compound` | abacavir | abacavir/dolutegravir/lamivudine fixed-dose combination | mismatch |

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
| C2_center_consistency_wt | fail | not captured | [15.6, 18.5, 70.0] | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Chandasana_2024_2_table_1:row0:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Chandasana_2024_2_table_2:row1:col1', 'Chandasana_2024_2_table_3:row2:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Chandasana_2024_2_table_1:row2:col1', 'Chandasana_2024_2_table_3:row0:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Chandasana_2024_2_table_1:row3:col1'] |
| C5_dimension_Q78 | pass | [length] ** 3 | not captured | not captured | not captured | ['Chandasana_2024_2_table_1:row4:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Chandasana_2024_2_table_1:row1:col1'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Chandasana_2024_2_table_3:row1:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 16.3 L/h | not captured | not captured | ['Chandasana_2024_2_table_1:row0:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 23.1 L | not captured | not captured | ['Chandasana_2024_2_table_2:row1:col1', 'Chandasana_2024_2_table_3:row2:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 10.1 L | not captured | not captured | ['Chandasana_2024_2_table_1:row1:col1'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_abacavir/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Chandasana_2024_2` / `Chandasana_2024_2::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 12:38 UTC</sub>
