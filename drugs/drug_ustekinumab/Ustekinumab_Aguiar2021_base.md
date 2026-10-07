<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;ustekinumab&quot;,&quot;href&quot;:&quot;drugs/drug_ustekinumab/&quot;},{&quot;label&quot;:&quot;Aguiar_2021 \u00b7 base&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ustekinumab_Adedokun2022_reference&quot;,&quot;label&quot;:&quot;Adedokun_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ustekinumab/Ustekinumab_Adedokun2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ustekinumab_Lam2026_reference&quot;,&quot;label&quot;:&quot;Lam_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ustekinumab/Ustekinumab_Lam2026_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ustekinumab_RodrguezFernndez2022_reference&quot;,&quot;label&quot;:&quot;Rodr\u00edguez-Fern\u00e1ndez_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ustekinumab/Ustekinumab_RodrguezFernndez2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ustekinumab — `Ustekinumab_Aguiar2021_base`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Aguiar Zdovc J et al., Ustekinumab Dosing Individualization in…, Pharmaceutics (2021)
  ·  DOI: [10.3390/pharmaceutics13101587](https://doi.org/10.3390/pharmaceutics13101587)

## Model component
<dbs-pgx drug="ustekinumab" model-id="Ustekinumab_Aguiar2021_base" status="rejected" stale="false" population="patients with Crohn&#39;s disease" measured-compound="ustekinumab" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 7 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Ka (day−1) | `Q49` · kabs | 0.518 | day−1 | 5.99537037037037e-06 | [1] / [d] | not captured | exact (1.0) | pharmaceutics-13-01587-t002:row3:col1 | — | not captured |
| CL (L/day) a | `Q22` · CL | 0.264 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | pharmaceutics-13-01587-t002:row4:col1 | — | not captured |
| Vc (L) b | `Q63` · V1 | 2.18 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | pharmaceutics-13-01587-t002:row8:col1 | — | not captured |
| Q (L/day) | `Q30` · Q | 20.1 | L/day | 2.3263888888888893e-07 | [l] / [d] | not captured | exact (1.0) | pharmaceutics-13-01587-t002:row10:col1 | — | not captured |
| Vp (L) c | `Q64` · V2 | 5.04 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | pharmaceutics-13-01587-t002:row11:col1 | — | not captured |
| Fraction absorbed, F (%) | `Q40` · Fab | 71.7 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | pharmaceutics-13-01587-t002:row13:col1 | — | not captured |
| Kd (nmol/L) | `Q331` · KD | 0.350 | nmol/L | not captured | [nM] / [l] | not captured | exact (1.0) | pharmaceutics-13-01587-t002:row25:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'IIV CL (%, CV) e' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'IIV Vc (%, CV) e' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'IIV Vp (%, CV) e' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'IIV F (%, SD) e' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'IIV Ksyn (%, CV) e' routed out of structural estimates ('Interindividual variability')
- table section residual_error: 'Additive RUV (nmol/L) e' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Proportional RUV (%) e' routed out of structural estimates ('Residual variability')
- dropped duplicate Q63 ('Vc–target (L)', value '18.8') — already have one for this compound
- dropped duplicate Q30 ('Qtarget (L/d)', value '0.752') — already have one for this compound
- dropped unlinked row (NIL): 'Vp–target (L)' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-13-01587-t002:row22:col1'])
- unit_dimension_mismatch: 'Kd (nmol/L)' → Q331 (unit '[substance] / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ustekinumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- model-stage split: 'base model' is the base model of Aguiar_2021 (paper reports 2 stages: base model, final model); same population, different model-building step
- molar mass: none found for 'ustekinumab' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell pharmaceutics-13-01587-t002:row3:col3 = '0.380 (0.341–0.422)'
- unparsed cell pharmaceutics-13-01587-t002:row4:col3 = '0.275 (0.259–0.294)'
- unparsed cell pharmaceutics-13-01587-t002:row5:col3 = '0.596 (0.539–0.673)'
- unparsed cell pharmaceutics-13-01587-t002:row6:col3 = '−0.232 (−0.280–−0.192)'
- unparsed cell pharmaceutics-13-01587-t002:row7:col3 = '−0.0170 (−0.0224–−0.0127)'
- unparsed cell pharmaceutics-13-01587-t002:row8:col3 = '3.56 (3.41–3.70)'
- unparsed cell pharmaceutics-13-01587-t002:row9:col3 = '0.587 (0.534–0.644)'
- unparsed cell pharmaceutics-13-01587-t002:row10:col3 = '1.88 (1.69–2.11)'
- unparsed cell pharmaceutics-13-01587-t002:row11:col3 = '3.27 (3.01–3.52)'
- unparsed cell pharmaceutics-13-01587-t002:row12:col3 = '0.581 (0.512–0.660)'
- unparsed cell pharmaceutics-13-01587-t002:row14:col3 = '88.8 (86.1–92.4)'
- unparsed cell pharmaceutics-13-01587-t002:row15:col3 = '70.8 (65.3–75.8)'
- unparsed cell pharmaceutics-13-01587-t002:row18:col3 = '0.0843 (0.0772–0.0883)'
- unparsed cell pharmaceutics-13-01587-t002:row20:col3 = '2.44 (2.27–2.81)'
- unparsed cell pharmaceutics-13-01587-t002:row21:col3 = '0.488 (0.440–0.539)'
- unparsed cell pharmaceutics-13-01587-t002:row22:col3 = '10.9 (9.87–12.0)'
- unparsed cell pharmaceutics-13-01587-t002:row25:col3 = '0.168 (0.154–0.196)'
- unparsed cell pharmaceutics-13-01587-t002:row27:col3 = '18.0 (16.0–20.1)'
- unparsed cell pharmaceutics-13-01587-t002:row28:col3 = '9.79 (8.88–10.8)'
- unparsed cell pharmaceutics-13-01587-t002:row29:col3 = '23.6 (19.7–26.0)'
- unparsed cell pharmaceutics-13-01587-t002:row30:col3 = '17.4 (15.8–20.2)'
- unparsed cell pharmaceutics-13-01587-t002:row31:col3 = '98.4 (83.4–110)'
- unparsed cell pharmaceutics-13-01587-t002:row33:col3 = '4.58 (4.09–5.86)'
- unparsed cell pharmaceutics-13-01587-t002:row34:col3 = '7.74 (6.94–8.55)'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | pass | 17.0 | 19.078 | 1.1222 | 0.25 | reported t½β |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['pharmaceutics-13-01587-t002:row10:col1'] |
| C5_dimension_Q331 | fail | [substance] / [length] ** 3 | nmol/L | not captured | not captured | ['pharmaceutics-13-01587-t002:row25:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['pharmaceutics-13-01587-t002:row3:col1'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['pharmaceutics-13-01587-t002:row4:col1'] |
| C5_unit_missing_Q63 | fail | [length] ** 3 | not captured | not captured | not captured | ['pharmaceutics-13-01587-t002:row8:col1'] |
| C5_unit_missing_Q64 | fail | [length] ** 3 | not captured | not captured | not captured | ['pharmaceutics-13-01587-t002:row11:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.264 | not captured | not captured | ['pharmaceutics-13-01587-t002:row4:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_ustekinumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Aguiar_2021` / `Aguiar_2021::base`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 01:03 UTC</sub>
