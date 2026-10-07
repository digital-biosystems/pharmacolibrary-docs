<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;durvalumab&quot;,&quot;href&quot;:&quot;drugs/drug_durvalumab/&quot;},{&quot;label&quot;:&quot;Ogasawara_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Durvalumab_Abegesah2025_reference&quot;,&quot;label&quot;:&quot;Abegesah_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_durvalumab/Durvalumab_Abegesah2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Durvalumab_Zhao2026_reference&quot;,&quot;label&quot;:&quot;Zhao_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_durvalumab/Durvalumab_Zhao2026_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# durvalumab — `Durvalumab_Ogasawara2020_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Ogasawara K et al., Population Pharmacokinetics of an Anti-…, Clinical pharmacokinetics (2020)
  ·  DOI: [10.1007/s40262-019-00804-x](https://doi.org/10.1007/s40262-019-00804-x)

## Model component
<dbs-pgx drug="durvalumab" model-id="Durvalumab_Ogasawara2020_reference" status="rejected" stale="false" population="patients with hematologic malignancies" measured-compound="durvalumab" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 5 extracted, plus 4 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| TVCL, L/h | `Q22` · CL | 0.0107 | L/h | 2.972222222222222e-09 | [l] / [h] | 3.1 | tv_prefix (0.95) | Tab3:row2:col1 | — | not captured |
| TVVc, L | `Q63` · V1 | 4.63 | L | 0.00463 | [l] | 2.1 | tv_prefix (0.95) | Tab3:row3:col1 | — | not captured |
| TVQ, L/h | `Q30` · Q | 0.0376 | L/h | 1.0444444444444444e-08 | [l] / [h] | 11.6 | tv_prefix (0.95) | Tab3:row4:col1 | — | not captured |
| TVVp, L | `Q64` · V2 | 2.68 | L | 0.00268 | [l] | 6.3 | tv_prefix (0.95) | Tab3:row5:col1 | — | not captured |
| ALB on CLb | `Q23` · CLb | -1.58 | not captured | not captured | not captured | 7.1 | llm_confirmed (0.6) | Tab3:row6:col1 | — | not captured |
| theta_q319_wt | `Q900` · theta_q319_wt | 0.581 | not captured | not captured | not captured | 15.5 | not captured (not captured) | Tab3:row10:col1 | — | not captured |
| theta_clb_sex | `Q900` · theta_clb_sex | 0.791 | not captured | not captured | not captured | 4.2 | not captured (not captured) | Tab3:row11:col1 | — | not captured |
| theta_q319_wt | `Q900` · theta_q319_wt | 0.451 | not captured | not captured | not captured | 18.9 | not captured (not captured) | Tab3:row14:col1 | — | not captured |
| theta_v1_sex | `Q900` · theta_v1_sex | 0.790 | not captured | not captured | not captured | 4.2 | not captured (not captured) | Tab3:row15:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL, CV%' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'Vc, CV%' routed out of structural estimates ('Inter-individual variability')
- table section residual_error: 'Log additive error' routed out of structural estimates ('Residual variability')
- dropped duplicate Q23 ('IgG on CLb', value '0.258') — already have one for this compound
- dropped duplicate Q23 ('sPD-L1 on CLb', value '0.0617') — already have one for this compound
- dropped duplicate Q23 ('LDH on CLb', value '0.115') — already have one for this compound
- dropped duplicate Q23 ('MDS/AML on CLb', value '1.26') — already have one for this compound
- dropped duplicate Q63 ('ALB on Vcc', value '-0.566') — already have one for this compound
- dropped duplicate Q63 ('MM on Vcc', value '0.820') — already have one for this compound
- NIL: refused to back-fill base 'equation variable' from footnote/prose loose number -1.58 (source ['Tab3:footnote', 'Tab3:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 0.258 (source ['Tab3:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'equation variable' from footnote/prose loose number 0.0617 (source ['Tab3:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 0.115 (source ['Tab3:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'equation variable' from footnote/prose loose number 0.581 (source ['Tab3:footnote', 'Tab3:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 0.791 (source ['Tab3:footnote', 'Tab3:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 1.26 (source ['Tab3:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 0.82 (source ['Tab3:footnote']); the table cell was unparseable — needs review
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'ALB on CLb' — the LLM proposed 'unitless', whose dimension does not fit Q23; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=durvalumab
- molar mass: none found for 'durvalumab' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell Tab3:row2:col2 = '0.0107 (0.0100–0.0113)'
- unparsed cell Tab3:row3:col2 = '4.62 (4.43–4.84)'
- unparsed cell Tab3:row4:col2 = '0.0375 (0.0298–0.0468)'
- unparsed cell Tab3:row5:col2 = '2.69 (2.43–2.98)'
- unparsed cell Tab3:row6:col2 = '−1.58 (−1.81 to −1.36)'
- unparsed cell Tab3:row7:col2 = '0.258 (0.193–0.317)'
- unparsed cell Tab3:row8:col2 = '0.0597 (0.0198–0.116)'
- unparsed cell Tab3:row9:col2 = '0.117 (0.0423–0.199)'
- unparsed cell Tab3:row10:col2 = '0.581 (0.385–0.766)'
- unparsed cell Tab3:row11:col2 = '0.789 (0.724–0.857)'
- unparsed cell Tab3:row12:col2 = '1.26 (1.15–1.37)'
- unparsed cell Tab3:row13:col2 = '−0.561 (−0.800 to −0.363)'
- unparsed cell Tab3:row14:col2 = '0.448 (0.284–0.591)'
- unparsed cell Tab3:row15:col2 = '0.790 (0.726–0.859)'
- unparsed cell Tab3:row16:col2 = '0.822 (0.756–0.893)'
- unparsed cell Tab3:row19:col2 = '25.3 (21.6–29.5)'
- unparsed cell Tab3:row20:col2 = '24.5 (22.1–26.8)'
- unparsed cell Tab3:row22:col2 = '0.197 (0.179–0.215)'
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_base_sign_Q23 | fail | not captured | -1.58 | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row2:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row4:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row3:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row5:col1'] |
| C5_unit_missing_Q23 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row6:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0107 | not captured | not captured | ['Tab3:row2:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0107 L/h | not captured | not captured | ['Tab3:row2:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 4.63 L | not captured | not captured | ['Tab3:row3:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.68 L | not captured | not captured | ['Tab3:row5:col1'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_durvalumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Ogasawara_2020` / `Ogasawara_2020::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 12:18 UTC</sub>
