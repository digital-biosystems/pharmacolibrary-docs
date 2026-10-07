<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;lamivudine&quot;,&quot;href&quot;:&quot;drugs/drug_lamivudine/&quot;},{&quot;label&quot;:&quot;Chandasana_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lamivudine_Chandasana2024v2_reference&quot;,&quot;label&quot;:&quot;Chandasana_2024_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lamivudine/Lamivudine_Chandasana2024v2_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# lamivudine — `Lamivudine_Chandasana2024_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `abacavir/dolutegravir/lamivudine fixed-dose combination`, measured `lamivudine`.

## Citation
Chandasana H et al., Population Pharmacokinetic Modeling of…, Infectious diseases and the… (2024)
  ·  DOI: [10.1007/s40121-024-01008-y](https://doi.org/10.1007/s40121-024-01008-y)

## Model component
<dbs-pgx drug="lamivudine" model-id="Lamivudine_Chandasana2024_reference" status="rejected" stale="false" population="children with HIV-1" measured-compound="lamivudine" parameterization="apparent" topology="general_linear"></dbs-pgx>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 9 extracted, plus 4 covariate effects.

**Parameterization:** CL/F, Q/F, V1/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Absorption rate constant, KA [h−1] | `Q49` · kabs | 0.85 | 1/h | 0.0002361111111111111 | 1/h | 9.76 | llm_confirmed (0.6) | Tab3:row1:col1, Chandasana_2024_table_1:row2:col1 | — | 76.5 (None% RSE) |
| Lag time ALAG1 (h) | `Q83` · tlag | 0.297 | h | 1069.2 | [h] | 12.1 | llm_confirmed (0.6) | Tab3:row2:col1 | — | not captured |
| Apparent central volume of distribution, V/F [l] | `Q290` · V1/F | 13.6 | l | 0.0136 | [l] | 4.68 | llm_confirmed (0.6) | Tab3:row3:col1, Chandasana_2024_table_2:row1:col1 | — | not captured |
| Apparent clearance, CL/F [l/h] | `Q27` · CL/F | 1.03 | l/h | 2.8611111111111115e-07 | [l] / [h] | 4.49 | llm_confirmed (0.6) | Tab3:row4:col1, Chandasana_2024_table_2:row0:col1 | — | 28.6 (None% RSE) |
| Absolute bioavailability (F1) solution PO | `Q40` · Fab | 0.496 | not captured | not captured | not captured | 5.36 | llm_confirmed (0.6) | Tab3:row5:col1 | — | not captured |
| Apparent central volume of distribution, V2/F [l] | `Q82` · V2/F | 10.1 | l | 0.0101 | [l] | 7.56 | llm_corrected (0.6) | Chandasana_2024_table_1:row1:col1 | — | 51.9 (None% RSE) |
| Intercompartment clearance, Q/F [l/h] | `Q69` · Q/F | 1.69 | l/h | 4.694444444444444e-07 | [l] / [h] | 7.87 | llm_corrected (0.6) | Chandasana_2024_table_1:row3:col1 | — | 67.9 (None% RSE) |
| Apparent peripheral compartment volume of distribution, V3/F [l] | `Q78` · V3/F | 23.0 | l | 0.023 | [l] | 17.4 | llm_corrected (0.6) | Chandasana_2024_table_1:row4:col1 | — | 91.9 (None% RSE) |
| Maturation half time, TM50 [PMA weeks] | `Q57` · t1/2z | 52.2 | weeks | not captured | weeks | not captured | llm (0.6) | Chandasana_2024_table_2:row10:col1 | — | not captured |
| theta_cl_f_wt_power | `Q900` · theta_cl_f_wt_power | 0.758 | not captured | not captured | not captured | 7.07 | not captured (not captured) | Tab3:row7:col1 | — | not captured |
| theta_q319_wt_power | `Q900` · theta_q319_wt_power | 0.794 | not captured | not captured | not captured | not captured | not captured (not captured) | Chandasana_2024_table_1:row7:col1 | — | not captured |
| theta_cl_f_wt_power | `Q900` · theta_cl_f_wt_power | 0.455 | not captured | not captured | not captured | 4.15 | not captured (not captured) | Chandasana_2024_table_2:row7:col1 | — | not captured |
| theta_q76_wt_power | `Q900` · theta_q76_wt_power | 0.556 | not captured | not captured | not captured | 3.87 | not captured (not captured) | Chandasana_2024_table_2:row8:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL/F' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'V/F' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'KA' routed out of structural estimates ('Interindividual variability')
- table section iov: 'IOV-CL/F' routed out of structural estimates ('Interoccasion variability')
- table section iov: 'IOV-V/F' routed out of structural estimates ('Interoccasion variability')
- table section iov: 'IOVKA' routed out of structural estimates ('Interoccasion variability')
- table section residual_error: 'Additive error [mg/l]' routed out of structural estimates ('Residual error')
- table section iiv: 'Q/F' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'V2/F' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'V3/F' routed out of structural estimates ('Interindividual variability')
- table section iov: 'IOV-KA' routed out of structural estimates ('Interoccasion variability')
- dropped unlinked row (NIL): 'VL/F ~ (WT/18.5)' — extend the ontology if this is a real PK parameter (source ['Tab3:row8:col1'])
- dropped duplicate Q27 ('Apparent clearance, CL/F [L/h]', value '16.3') — already have one for this compound
- dropped unlinked row (NIL): 'V/2F ~ (WT/15.6)' — extend the ontology if this is a real PK parameter (source ['Chandasana_2024_table_1:row8:col1'])
- dropped duplicate Q49 ('Absorption rate constant, KA, FCT [h−1]', value '0.854') — already have one for this compound
- dropped duplicate Q49 ('Absorption rate constant, KA ~ DT and granules [h−1]', value '2.04') — already have one for this compound
- unit_dimension_unknown: 'FMAT' (t1/2z)
- dropped PD-category row 'Hill coefficient related to the slope of the enzyme maturation process' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Chandasana_2024_table_2:row11:col1'])
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q76 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'Absorption rate constant, KA [h−1]' → 1/h (from the paper text: "Table 1 row: 'Absorption rate constant, KA [h−1]'")
- implicit units: 'Maturation half time, TM50 [PMA weeks]' → weeks (from the paper text: "Table 2 caption/footnote: 'TM50HILL... PMA (weeks)'")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=lamivudine
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted

**Extraction notes:**
- companion parameter table 1 transcribed (14 record(s))
- companion parameter table 2 transcribed (18 record(s))
- LLM selected parameter table(s) 1, 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 9 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_center_consistency_wt | fail | not captured | [18.5, 70.0] | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row4:col1', 'Chandasana_2024_table_2:row0:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row3:col1', 'Chandasana_2024_table_2:row1:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab3:row1:col1', 'Chandasana_2024_table_1:row2:col1'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Chandasana_2024_table_2:row10:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Chandasana_2024_table_1:row3:col1'] |
| C5_dimension_Q78 | pass | [length] ** 3 | not captured | not captured | not captured | ['Chandasana_2024_table_1:row4:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Chandasana_2024_table_1:row1:col1'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Tab3:row2:col1'] |
| C7_apparent_coherence | fail | F==1, Fm==1, no molar corr. | absolute F=0.496 with apparent parameterization | not captured | not captured | not captured |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none'] | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 1.03 L/h | not captured | not captured | ['Tab3:row4:col1', 'Chandasana_2024_table_2:row0:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 13.6 L | not captured | not captured | ['Tab3:row3:col1', 'Chandasana_2024_table_2:row1:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 10.1 L | not captured | not captured | ['Chandasana_2024_table_1:row1:col1'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_lamivudine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Chandasana_2024` / `Chandasana_2024::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 13:08 UTC</sub>
