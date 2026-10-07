<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;sodium nitrite&quot;,&quot;href&quot;:&quot;drugs/drug_sodium_nitrite/&quot;},{&quot;label&quot;:&quot;Vega-Villa_2013 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;SodiumNitrite_Grimm2023_reference&quot;,&quot;label&quot;:&quot;Grimm_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sodium_nitrite/SodiumNitrite_Grimm2023_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sodium nitrite — `SodiumNitrite_VegaVilla2013_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `sodium nitrite`, measured `nitrite`.

## Citation
Vega-Villa K et al., Quantitative Systems Pharmacology Model…, CPT: pharmacometrics & syst… (2013)
  ·  DOI: [10.1038/psp.2013.35](https://doi.org/10.1038/psp.2013.35)

## Model component
<dbs-pgx drug="sodium nitrite" model-id="SodiumNitrite_VegaVilla2013_reference" status="rejected" stale="false" population="healthy adults" measured-compound="nitrite" parameterization="apparent" topology="general_linear"></dbs-pgx>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 10 extracted.

**Parameterization:** CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| kTP_NO2 (min−1) | `Q48` · kcomp | 1.745 | min−1 | 0.029083333333333336 | [1] / [min] | not captured | llm (0.6) | Vega-Villa_2013_table_p4_1:row1:col2 | — | not captured |
| kPT_NO3 (min−1) | `Q48` · kcomp | 0.160 | min−1 | 0.0026666666666666666 | [1] / [min] | not captured | llm (0.6) | Vega-Villa_2013_table_p4_1:row2:col2 | — | not captured |
| kMYO (min−1) | `Q305` · kfm | 0.234 | min−1 | 0.0039000000000000003 | [1] / [min] | not captured | exact (1.0) | Vega-Villa_2013_table_p4_1:row5:col2 | — | not captured |
| kT_RDT (min−1) | `Q306` · ktr | 6.83E-05 | min−1 | 1.1383333333333334e-06 | [1] / [min] | not captured | llm (0.6) | Vega-Villa_2013_table_p4_1:row6:col2 | — | not captured |
| CL_E0_NO2 (l.min−1) | `Q351` · CLm/F | 0.382 | l.min−1 | 6.366666666666667e-06 | [l] / [min] | not captured | exact (1.0) | Vega-Villa_2013_table_p4_1:row7:col2 | — | not captured |
| V_NO2_P (l) | `Q61` · V | 12.418 | l | 0.012418 | [l] | not captured | exact (1.0) | Vega-Villa_2013_table_p4_1:row9:col2 | — | not captured |
| CL_E0_NO3 (l.min−1) | `Q22` · CL | 9.41E-03 | l.min−1 | 1.5683333333333333e-07 | [l] / [min] | not captured | exact (1.0) | Vega-Villa_2013_table_p4_1:row10:col2 | — | not captured |
| V_NO3_P (l) | `Q61` · V | 12.418 | l | 0.012418 | [l] | not captured | exact (1.0) | Vega-Villa_2013_table_p4_1:row12:col2 | — | not captured |
| kNO3_R (min−1.µmol−1) | `Q305` · kfm | 5.91E-06 | min−1.µmol−1 | not captured | [1] / [[min] · [µM] · [ol]] | not captured | exact (1.0) | Vega-Villa_2013_table_p4_1:row15:col2 | — | not captured |
| S_MetHb | `Q900` · equation variable | 0.045 | not captured | not captured | not captured | not captured | llm (0.6) | Vega-Villa_2013_table_p4_1:row18:col2 | — | not captured |
| V_R_MetHb (l) | `Q64` · V2 | 3.284 | l | 0.003284 | [l] | not captured | llm (0.6) | Vega-Villa_2013_table_p4_1:row21:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'kPT_NO2 (min−1)' routed out of structural estimates ('IIV (%CV)')
- table section iiv: 'kTP_NO2 (min−1)' routed out of structural estimates ('IIV (%CV)')
- table section iiv: 'kNO2_RDT (min−1)' routed out of structural estimates ('IIV (%CV)')
- table section iiv: 'V_NO2_P (l)' routed out of structural estimates ('IIV (%CV)')
- table section iiv: 'CL_E0_NO3 (l.min−1)' routed out of structural estimates ('IIV (%CV)')
- table section iiv: 'kPR_NO2 (min−1)' routed out of structural estimates ('IIV (%CV)')
- table section iiv: 'kRP_NO3 (min−1)' routed out of structural estimates ('IIV (%CV)')
- table section iiv: 'kNO3_R (min−1.µmol−1)' routed out of structural estimates ('IIV (%CV)')
- table section iiv: 'S_MetHb' routed out of structural estimates ('IIV (%CV)')
- table section iiv: 'V_R_NO2 (l)' routed out of structural estimates ('IIV (%CV)')
- table section iiv: 'V_R_MetHb (l)' routed out of structural estimates ('IIV (%CV)')
- table section residual_error: 'Additive error for plasma nitrite (µmol/l)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Proportional error for plasma nitrite (%)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Additive error for RBC nitrite (µmol/l)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Proportional error for RBC nitrite (%)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Additive error for plasma and RBC nitrate (µmol/l)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Proportional error for plasma and RBC nitrate (%)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Additive error for methemoglobin (µmol/l)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Proportional error for methemoglobin (%)' routed out of structural estimates ('Residual variability')
- dropped PD-category row 'kPT_NO2 (min−1)' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Vega-Villa_2013_table_p4_1:row0:col2'])
- dropped duplicate Q48 ('kTP_NO3 (min−1)', value '0.515') — already have one for this compound
- dropped PD-category row 'kNO2_RDT (min−1)' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Vega-Villa_2013_table_p4_1:row4:col2'])
- dropped unlinked row (NIL): 'S_NO2' — extend the ontology if this is a real PK parameter (source ['Vega-Villa_2013_table_p4_1:row8:col2'])
- dropped unlinked row (NIL): 'S_NO3' — extend the ontology if this is a real PK parameter (source ['Vega-Villa_2013_table_p4_1:row11:col2'])
- dropped PD-category row 'kPR_NO2 (min−1)' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Vega-Villa_2013_table_p4_1:row13:col2'])
- dropped duplicate Q48 ('kRP_NO3 (min−1)', value '5.17E-03') — already have one for this compound
- unit_dimension_unknown: 'min−1.µmol−1' (kfm)
- dropped duplicate Q305 ('kNO_R (min−1.µmol−1)', value '1.42E-04') — already have one for this compound
- dropped PD-category row 'kDEG (min−1)' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Vega-Villa_2013_table_p4_1:row17:col2'])
- dropped duplicate Q63 ('V_R_NO2 (l)', value '5.816') — already have one for this compound
- dropped duplicate Q63 ('V_R_NO3 (l)', value '4.391') — already have one for this compound
- unit_dimension_unknown: 'min−2.µmol−1' (kfm)
- dropped duplicate Q305 ('K_HbNO (min−2.µmol−1)', value '2.86E-05') — already have one for this compound
- dropped unlinked row (NIL): 'K_HbNO2 (min−2.µmol−1)' — extend the ontology if this is a real PK parameter (source ['Vega-Villa_2013_table_p4_1:row23:col2'])
- implicit units: 'kNO3_R (min−1.µmol−1)' — the LLM proposed '1/min/µmol', whose dimension does not fit Q305; left unset
- metabolite nitrite: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite volume: 'V_NO2_P (l)' Q63→Q61 for nitrite — it is 1-compartment, so its central volume is its only volume
- metabolite volume: 'V_NO3_P (l)' Q63→Q61 for nitrate — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=nitrite
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — 3 metabolites — the templates hold two
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 32/32 row label(s) assigned, 16 linked by role; re-tagged parent→nitrite ×19, parent→nitrate ×13, parent→nitric oxide ×4, parent→methemoglobin ×4
- review gap-fill skipped: this record measures 'nitrite', not sodium_nitrite — the review values are the parent's

**Extraction notes:**
- final table tbl1: grid unusable → re-running vision table extraction for Vega-Villa_2013

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 10 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Vega-Villa_2013_table_p4_1:row10:col2'] |
| C5_dimension_Q305 | pass | 1 / [time] | not captured | not captured | not captured | ['Vega-Villa_2013_table_p4_1:row5:col2'] |
| C5_dimension_Q306 | pass | 1 / [time] | not captured | not captured | not captured | ['Vega-Villa_2013_table_p4_1:row6:col2'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Vega-Villa_2013_table_p4_1:row7:col2'] |
| C5_dimension_Q48 | pass | 1 / [time] | not captured | not captured | not captured | ['Vega-Villa_2013_table_p4_1:row1:col2'] |
| C5_dimension_Q48 | pass | 1 / [time] | not captured | not captured | not captured | ['Vega-Villa_2013_table_p4_1:row2:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Vega-Villa_2013_table_p4_1:row9:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Vega-Villa_2013_table_p4_1:row12:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Vega-Villa_2013_table_p4_1:row21:col2'] |
| C5_unit_missing_Q305 | fail | 1 / [time] | min−1.µmol−1 | not captured | not captured | ['Vega-Villa_2013_table_p4_1:row15:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['kNO2_RDT'] | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.565 L/h | not captured | not captured | ['Vega-Villa_2013_table_p4_1:row10:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 12.4 L | not captured | not captured | ['Vega-Villa_2013_table_p4_1:row9:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 12.4 L | not captured | not captured | ['Vega-Villa_2013_table_p4_1:row12:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 3.28 L | not captured | not captured | ['Vega-Villa_2013_table_p4_1:row21:col2'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_sodium_nitrite/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Vega-Villa_2013` / `Vega-Villa_2013::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 19:28 UTC</sub>
