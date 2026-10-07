<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07B&quot;,&quot;href&quot;:&quot;atc/N07B.md&quot;},{&quot;label&quot;:&quot;nicotine&quot;,&quot;href&quot;:&quot;drugs/drug_nicotine/&quot;},{&quot;label&quot;:&quot;Olsson_2021 \u00b7 lozenge&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# nicotine — `Nicotine_Olsson2021_lozenge`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Olsson Gisleskog PO et al., Nicotine Population Pharmacokinetics in…, Clinical pharmacokinetics (2021)
  ·  DOI: [10.1007/s40262-020-00960-5](https://doi.org/10.1007/s40262-020-00960-5)

## Model component
<dbs-pgx drug="nicotine" model-id="Nicotine_Olsson2021_lozenge" status="needs_review" stale="false" population="healthy smokers" measured-compound="nicotine" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 6 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Krel (h−1) | `Q47` · kel | 6.41 | h−1 | 0.0017805555555555556 | [1] / [h] | not captured | llm (0.6) | Tab5:row3:col7, Tab5:row3:col8 | — | not captured |
| Lag time (h) | `Q83` · tlag | 0.0437 | h | 157.32000000000002 | [h] | not captured | exact (1.0) | Tab5:row4:col7, Tab5:row4:col8 | — | not captured |
| Ka (h−1) | `Q49` · kabs | 11.6 | h−1 | 0.0032222222222222222 | [1] / [h] | not captured | exact (1.0) | Tab5:row5:col7, Tab5:row5:col8 | — | not captured |
| Frsw (%) | `Q40` · Fab | 1.3 | not captured | not captured | not captured | not captured | llm (0.6) | Tab5:row6:col7, Tab5:row6:col8 | — | not captured |
| Ktrg (h−1) | `Q306` · ktr | 3.54 | h−1 | 0.0009833333333333332 | [1] / [h] | not captured | llm (0.6) | Tab5:row7:col7, Tab5:row7:col8 | — | not captured |
| VTotal | `Q61` · V | 2.6 | L | 0.0026000000000000003 | L | not captured | review_gapfill (0.7) | Moore_2024:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'Proportional residual error (%)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Additive residual error (ng/mL)' routed out of structural estimates ('Residual variability')
- dropped PD-category row 'Emax (%)' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab5:row8:col7', 'Tab5:row8:col8'])
- dropped unlinked row (NIL): 'Start (h)' — extend the ontology if this is a real PK parameter (source ['Tab5:row9:col7', 'Tab5:row9:col8'])
- dropped unlinked row (NIL): 'Duration (h)' — extend the ontology if this is a real PK parameter (source ['Tab5:row10:col7', 'Tab5:row10:col8'])
- routed 'pow' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'Nicorette on Frswg' — extend the ontology if this is a real PK parameter (source ['Tab5:row13:col7', 'Tab5:row13:col8'])
- dropped unlinked row (NIL): 'Pre-washout nicotine dose (mg)' — extend the ontology if this is a real PK parameter (source ['Tab5:row15:col7', 'Tab5:row15:col8'])
- NIL: refused to back-fill base 'prop_error' from footnote/prose loose number None (source ['Tab5:footnote']); the table cell was unparseable — needs review
- dropped value-less row: 'IV'
- dropped value-less row: 'Ka'
- dropped value-less row: 'Krel'
- dropped value-less row: 'Ktr'
- dropped value-less row: '(R)SE'
- dropped value-less row: 'aRSE on variance scale for variability estimates'
- dropped value-less row: 'cKa after buccal and sublingual administration, respectively'
- dropped value-less row: 'dKa after 3 mg of Nicorette classic and 2 mg of Freshmint, respectively'
- dropped value-less row: 'eFrsw after 2 and 4 mg, respectively'
- NIL: refused to back-fill base 'kabs' from footnote/prose loose number None (source ['Tab5:footnote']); the table cell was unparseable — needs review
- dropped value-less row: 'gAdditive on logit scale'
- dropped duplicate Q40 ('Frdur1 × 16 h', value 16) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=nicotine
- population split: 'lozenge' subgroup of Olsson_2021 (paper reports 5 populations: chewing gum, estimate, inhaler, lozenge, mouth spray)
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q61 (V) from Moore_2024's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab5:row5:col2 = '3.4, 17'
- unparsed cell Tab5:row5:col5 = '1.0, 0.4'
- unparsed cell Tab5:row8:col4 = '− 75.2'
- unparsed cell Olsson_2021_table_3:row1:col3 = '62.1 to 72.7'
- unparsed cell Olsson_2021_table_3:row2:col3 = '91.8 to 143'
- unparsed cell Olsson_2021_table_3:row3:col3 = '34.8 to 42.4'
- unparsed cell Olsson_2021_table_3:row4:col3 = '76.8 to 184'
- unparsed cell Olsson_2021_table_3:row5:col3 = '197 to 236'
- unparsed cell Olsson_2021_table_3:row6:col3 = '42.6 to 64.2'
- unparsed cell Olsson_2021_table_3:row7:col3 = '3.94 to 5.86'
- unparsed cell Olsson_2021_table_3:row9:col3 = '22.2 to 31.2'
- unparsed cell Olsson_2021_table_3:row10:col3 = '46.4 to 87.3'
- unparsed cell Olsson_2021_table_3:row11:col1 = '− 0.231'
- unparsed cell Olsson_2021_table_3:row11:col3 = '− 0.431 to − 0.0303'
- unparsed cell Olsson_2021_table_3:row12:col3 = '50.6 to 98'
- unparsed cell Olsson_2021_table_3:row13:col3 = '0.317 to 0.789'
- unparsed cell Olsson_2021_table_3:row14:col3 = '142 to 346'
- unparsed cell Olsson_2021_table_3:row15:col3 = '56.5 to 107'
- unparsed cell Olsson_2021_table_3:row17:col3 = '0.0896 to 0.0957'
- unparsed cell Olsson_2021_table_3:row18:col3 = '0.204 to 0.221'
- companion parameter table 3 transcribed (37 record(s), model stage 'final')
- unparsed cell Olsson_2021_table_4:row1:col3 = '0.978 to 2.12'
- unparsed cell Olsson_2021_table_4:row2:col3 = '32.8 to 46.1'
- unparsed cell Olsson_2021_table_4:row3:col3 = '14.4 to 30.1'
- unparsed cell Olsson_2021_table_4:row4:col3 = '0.771 to 6.42'
- unparsed cell Olsson_2021_table_4:row5:col3 = '4.83 to 5.75'
- unparsed cell Olsson_2021_table_4:row6:col3 = '0.646 to 3.19'
- unparsed cell Olsson_2021_table_4:row7:col3 = '35.6 to 119'
- unparsed cell Olsson_2021_table_4:row8:col3 = '4.74 to 19.9'
- unparsed cell Olsson_2021_table_4:row9:col3 = '2.92 to 6.93'
- unparsed cell Olsson_2021_table_4:row11:col3 = '0 to 36.7'
- unparsed cell Olsson_2021_table_4:row12:col3 = '0 to 94'
- unparsed cell Olsson_2021_table_4:row13:col3 = '27 to 147'
- unparsed cell Olsson_2021_table_4:row14:col3 = '0 to 106'
- unparsed cell Olsson_2021_table_4:row16:col3 = '8.38 to 11.4'
- unparsed cell Olsson_2021_table_4:row17:col3 = '− 0.0103 to 0.335'
- companion parameter table 4 transcribed (35 record(s), model stage 'final')
- companion parameter table 6 transcribed (68 record(s), model stage 'final')
- LLM selected parameter table(s) 3, 4, 5, 6

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q306 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab5:row7:col7', 'Tab5:row7:col8'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab5:row3:col7', 'Tab5:row3:col8'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab5:row5:col7', 'Tab5:row5:col8'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Moore_2024:review'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Tab5:row4:col7', 'Tab5:row4:col8'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 2.6 L | not captured | not captured | ['Moore_2024:review'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_nicotine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Olsson_2021` / `Olsson_2021::lozenge`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 03:40 UTC</sub>
