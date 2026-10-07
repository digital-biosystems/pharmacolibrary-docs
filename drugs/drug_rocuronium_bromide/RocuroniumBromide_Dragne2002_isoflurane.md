<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M03A&quot;,&quot;href&quot;:&quot;atc/M03A.md&quot;},{&quot;label&quot;:&quot;rocuronium bromide&quot;,&quot;href&quot;:&quot;drugs/drug_rocuronium_bromide/&quot;},{&quot;label&quot;:&quot;Dragne_2002 \u00b7 isoflurane&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;RocuroniumBromide_Ji2023_reference&quot;,&quot;label&quot;:&quot;Ji_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rocuronium_bromide/RocuroniumBromide_Ji2023_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;RocuroniumBromide_Li2025_reference&quot;,&quot;label&quot;:&quot;Li_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rocuronium_bromide/RocuroniumBromide_Li2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# rocuronium bromide — `RocuroniumBromide_Dragne2002_isoflurane`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Dragne A et al., Rocuronium pharmacokinetic-pharmacodyna…, Canadian journal of anaesth… (2002)
  ·  DOI: [10.1007/BF03017322](https://doi.org/10.1007/BF03017322)

## Model component
<dbs-pgx drug="rocuronium bromide" model-id="RocuroniumBromide_Dragne2002_isoflurane" status="rejected" stale="false" population="surgical patients under anesthesia" measured-compound="rocuronium_bromide" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 12 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| A (ng·mL⁻¹) | `Q900` · equation variable | 5711 | ng·mL⁻¹ | not captured | [ng] / [ml] | not captured | llm (0.6) | Dragne_2002_table_p4_1:row0:col2 | — | not captured |
| B (ng·mL⁻¹) | `Q86` · C0 | 1653 | ng·mL⁻¹ | not captured | [ng] / [ml] | not captured | llm (0.6) | Dragne_2002_table_p4_1:row1:col2 | — | not captured |
| α (min⁻¹) | `Q67` · λ1 | 0.5982 | min⁻¹ | not captured | [1] / [min] | not captured | exact (1.0) | Dragne_2002_table_p4_1:row3:col2 | — | not captured |
| β (min⁻¹) | `Q47` · kel | 0.0498 | min⁻¹ | 0.0008299999999999999 | [1] / [min] | not captured | exact (1.0) | Dragne_2002_table_p4_1:row4:col2 | — | not captured |
| t½ α (min) | `Q59` · t1/2α | 1.17 | min | 70.19999999999999 | [min] | not captured | llm (0.6) | Dragne_2002_table_p4_1:row6:col2 | — | not captured |
| t½ β (min) | `Q60` · t1/2β | 13.9 | min | 834.0 | [min] | not captured | llm (0.6) | Dragne_2002_table_p4_1:row7:col2 | — | not captured |
| t½ γ (min) | `Q89` · t1/2γ | 77.06 | min | 4623.6 | [min] | not captured | llm (0.6) | Dragne_2002_table_p4_1:row8:col2 | — | not captured |
| Cl (mL·kg⁻¹·min⁻¹) | `Q22` · CL | 4.09 | mL·kg⁻¹·min⁻¹ | 4.771666666666666e-06 | [ml] / [[min] · [kg]] | not captured | exact (1.0) | Dragne_2002_table_p4_1:row9:col2 | — | not captured |
| Vc (mL·kg⁻¹) | `Q61` · V | 35 | mL·kg⁻¹ | 0.00245 | [ml] / [kg] | not captured | exact (1.0) | Dragne_2002_table_p4_1:row10:col2 | — | not captured |
| Vss (mL·kg⁻¹) | `Q65` · Vss | 187 | mL·kg⁻¹ | 0.01309 | [ml] / [kg] | not captured | exact (1.0) | Dragne_2002_table_p4_1:row11:col2 | — | not captured |
| Cp60 (ng·mL⁻¹) | `Q75` · Ct | 312 | ng·mL⁻¹ | not captured | [ng] / [ml] | not captured | llm (0.6) | Dragne_2002_table_p4_1:row12:col2 | — | not captured |
| Cmax (ng·mL⁻¹) | `Q32` · Cmax | 20860 | ng·mL⁻¹ | not captured | [ng] / [ml] | not captured | exact (1.0) | Dragne_2002_table_p4_1:row13:col2 | — | not captured |
| Tmax (min) | `Q56` · tmax | 0.70 | min | 42.0 | [min] | not captured | exact (1.0) | Dragne_2002_table_p4_1:row14:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'B (ng·mL⁻¹)' → Q86 (unit '[mass] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped duplicate Q900 ('C (ng·mL⁻¹)', value '197') — already have one for this compound
- unit_dimension_mismatch: 'α (min⁻¹)' → Q67 (unit '1 / [time]' vs ontology '[mass] / [time]') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=rocuronium_bromide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'Vc (mL·kg⁻¹)' is the general volume)
- status held at route_to_review — not promoted
- population split: 'isoflurane (n=5)' subgroup of Dragne_2002 (paper reports 2 populations: isoflurane (n=5), propofol (n=5))
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 12 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | pass | 5.15 | 5.932 | 1.1518 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Dragne_2002_table_p4_1:row9:col2'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Dragne_2002_table_p4_1:row13:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Dragne_2002_table_p4_1:row4:col2'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Dragne_2002_table_p4_1:row14:col2'] |
| C5_dimension_Q59 | pass | [time] | not captured | not captured | not captured | ['Dragne_2002_table_p4_1:row6:col2'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['Dragne_2002_table_p4_1:row7:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Dragne_2002_table_p4_1:row10:col2'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['Dragne_2002_table_p4_1:row11:col2'] |
| C5_dimension_Q67 | fail | 1 / [time] | min⁻¹ | not captured | not captured | ['Dragne_2002_table_p4_1:row3:col2'] |
| C5_dimension_Q75 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Dragne_2002_table_p4_1:row12:col2'] |
| C5_dimension_Q86 | fail | [mass] / [length] ** 3 | ng·mL⁻¹ | not captured | not captured | ['Dragne_2002_table_p4_1:row1:col2'] |
| C5_dimension_Q89 | pass | [time] | not captured | not captured | not captured | ['Dragne_2002_table_p4_1:row8:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 4.09 | not captured | not captured | ['Dragne_2002_table_p4_1:row9:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 17.2 L/h | not captured | not captured | ['Dragne_2002_table_p4_1:row9:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 2.45 L | not captured | not captured | ['Dragne_2002_table_p4_1:row10:col2'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 13.1 L | not captured | not captured | ['Dragne_2002_table_p4_1:row11:col2'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_rocuronium_bromide/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Dragne_2002` / `Dragne_2002::isoflurane`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 02:51 UTC</sub>
