<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P02C&quot;,&quot;href&quot;:&quot;atc/P02C.md&quot;},{&quot;label&quot;:&quot;fenbendazole&quot;,&quot;href&quot;:&quot;drugs/drug_fenbendazole/&quot;},{&quot;label&quot;:&quot;Bach_2021 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fenbendazole — `Fenbendazole_Bach2021_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `oxfendazole`, measured `fenbendazole`.

## Citation
Bach T et al., Population Pharmacokinetic Model of Oxf…, Antimicrobial agents and ch… (2021)
  ·  DOI: [10.1128/AAC.02129-20](https://doi.org/10.1128/AAC.02129-20)

## Model component
<dbs-pgx drug="fenbendazole" model-id="Fenbendazole_Bach2021_reference" status="rejected" stale="false" population="healthy adults" measured-compound="fenbendazole" parameterization="apparent" topology="general_linear"></dbs-pgx>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 9 extracted.

**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| θ1 | `Q22` · CL | 0.541 | L/h | 1.502777777777778e-07 | L/h | 2.1 | llm (0.6) | Bach_2021_table_p6_1:row0:col1, Bach_2021_table_p6_1:row0:col2, Bach_2021_table_p6_1:row0:col3 | — | not captured |
| θ2 (mg) | `Q64` · V2 | 34.7 | mg | not captured | [mg] | not captured | llm (0.6) | Bach_2021_table_p6_1:row1:col2 | — | not captured |
| ka (h−1) | `Q49` · kabs | 1.59 | h−1 | 0.0004416666666666667 | [1] / [h] | 10.6 | exact (1.0) | Bach_2021_table_p6_1:row2:col2, Bach_2021_table_p6_1:row2:col3 | — | not captured |
| VOXF (liters) | `Q76` · V/F | 35.2 | liters | 0.0352 | [l] | 6.1 | llm (0.6) | Bach_2021_table_p6_1:row4:col2, Bach_2021_table_p6_1:row4:col3 | — | not captured |
| kgut,OXF-SO2 (h−1) | `Q305` · kfm | 0.00134 | h−1 | 3.722222222222222e-07 | [1] / [h] | 9.7 | exact (1.0) | Bach_2021_table_p6_1:row5:col2, Bach_2021_table_p6_1:row5:col3 | — | not captured |
| FM1 | `Q45` · fm | 0.00420 | not captured | not captured | not captured | 7.6 | exact (1.0) | Bach_2021_table_p6_1:row6:col2, Bach_2021_table_p6_1:row6:col3 | — | not captured |
| ke,OXF-SO2 (h−1) | `Q47` · kel | 0.105 | h−1 | 2.9166666666666666e-05 | [1] / [h] | 5.1 | exact (1.0) | Bach_2021_table_p6_1:row7:col2, Bach_2021_table_p6_1:row7:col3 | — | not captured |
| FM2 | `Q45` · fm | 0.000162 | not captured | not captured | not captured | 13.2 | exact (1.0) | Bach_2021_table_p6_1:row8:col2, Bach_2021_table_p6_1:row8:col3 | — | not captured |
| ke,FEN (h−1) | `Q47` · kel | 0.0942 | h−1 | 2.6166666666666668e-05 | [1] / [h] | 12.7 | exact (1.0) | Bach_2021_table_p6_1:row9:col2, Bach_2021_table_p6_1:row9:col3 | — | not captured |

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
- table section iiv: 'hepatic blood flow' routed out of structural estimates ('TABLE 1 Final estimates of oxfendazole and metabolite pharmacokinetic parameters, interindividual variability, and residual variability')
- table section iiv: 'human plasma volume' routed out of structural estimates ('TABLE 1 Final estimates of oxfendazole and metabolite pharmacokinetic parameters, interindividual variability, and residual variability')
- table section iiv: 'total body water volume' routed out of structural estimates ('TABLE 1 Final estimates of oxfendazole and metabolite pharmacokinetic parameters, interindividual variability, and residual variability')
- column 'definition' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_mismatch: 'θ2 (mg)' → Q64 (unit '[mass]' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q22 ('CLOXF (liters/h)', value '2.57') — already have one for this compound
- implicit units: 'θ1' → L/h (from the popPK convention: 'No unit stated for this parameter in text, caption, or footnotes. Total clearance of oxfendazole is discussed in the tex')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=fenbendazole
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 2 first-order transfer(s) across 3 compounds → general_linear
- template fit: PK_3M_3C — first-pass formation; parent 2 + hepatic, metabolites [0, 0] (site presystemic: 'Our final model incorporated mechanistic characterization of dose-limited bioavailability as well as different oxfendazo')
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 22/22 row label(s) assigned, 17 linked by role; re-tagged parent→oxfendazole sulfone ×12, parent→fenbendazole ×10, fenbendazole→parent ×1
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- final table tab_0: grid unusable → re-running vision table extraction for Bach_2021
- unparsed cell Bach_2021_table_p6_1:row14:col1 = 'Variance of interindividual variability on kgut,OXF-SO2'
- unparsed cell Bach_2021_table_p6_1:row15:col1 = 'Variance of interindividual variability on ke,OXF-SO2'
- unparsed cell Bach_2021_table_p6_1:row16:col1 = 'Variance of interindividual variability on FM2'

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 9 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Bach_2021_table_p6_1:row0:col1', 'Bach_2021_table_p6_1:row0:col2', 'Bach_2021_table_p6_1:row0:col3'] |
| C5_dimension_Q305 | pass | 1 / [time] | not captured | not captured | not captured | ['Bach_2021_table_p6_1:row5:col2', 'Bach_2021_table_p6_1:row5:col3'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Bach_2021_table_p6_1:row7:col2', 'Bach_2021_table_p6_1:row7:col3'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Bach_2021_table_p6_1:row9:col2', 'Bach_2021_table_p6_1:row9:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Bach_2021_table_p6_1:row2:col2', 'Bach_2021_table_p6_1:row2:col3'] |
| C5_dimension_Q64 | fail | [mass] | mg | not captured | not captured | ['Bach_2021_table_p6_1:row1:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Bach_2021_table_p6_1:row4:col2', 'Bach_2021_table_p6_1:row4:col3'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.541 L/h | not captured | not captured | ['Bach_2021_table_p6_1:row0:col1', 'Bach_2021_table_p6_1:row0:col2', 'Bach_2021_table_p6_1:row0:col3'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 35.2 L | not captured | not captured | ['Bach_2021_table_p6_1:row4:col2', 'Bach_2021_table_p6_1:row4:col3'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_fenbendazole/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Bach_2021` / `Bach_2021::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 10:19 UTC</sub>
