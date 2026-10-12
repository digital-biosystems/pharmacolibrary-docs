<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C10A&quot;,&quot;href&quot;:&quot;atc/C10A.md&quot;},{&quot;label&quot;:&quot;alirocumab&quot;,&quot;href&quot;:&quot;drugs/drug_alirocumab/&quot;},{&quot;label&quot;:&quot;Nolain_2022 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# alirocumab — `Alirocumab_Nolain2022_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.438), gpt-oss:120b (not confirmed, agreement 0.412). The first reading is what the record holds.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has alirocumab, the second reading unknown; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Nolain P et al., Combined Semi-mechanistic Target-Mediat…, European journal of drug me… (2022)
  ·  DOI: [10.1007/s13318-022-00787-4](https://doi.org/10.1007/s13318-022-00787-4)

## Model component
<dbs-pgx drug="alirocumab" model-id="Alirocumab_Nolain2022_reference" status="needs_review" stale="false" population="adults with cardiovascular risk" measured-compound="alirocumab" parameterization="mechanistic" topology="general_linear"></dbs-pgx>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 6 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| θCL (L/day) | `Q22` · CL | 0.221 | L/day | 2.5578703703703703e-09 | [l] / [d] | not captured | llm_confirmed (0.6) | Tab4:row1:col1 | — | not captured |
| θQ (L/day) | `Q30` · Q | 0.557 | L/day | 6.44675925925926e-09 | [l] / [d] | not captured | llm (0.6) | Tab4:row4:col1 | — | not captured |
| θvc (L) | `Q63` · V1 | 3.20 | L | 0.0032 | [l] | not captured | llm_confirmed (0.6) | Tab4:row5:col1 | — | not captured |
| θka(per day) | `Q49` · kabs | 0.346 | per day | 4.004629629629629e-06 | [1] / [d] | not captured | llm_confirmed (0.6) | Tab4:row6:col1 | — | not captured |
| θkon(per nM/day) | `Q329` · kon | 559 | per nM/day | not captured | [pernm] / [d] | not captured | llm_confirmed (0.6) | Tab4:row9:col1 | — | not captured |
| θLAG (day) | `Q83` · tlag | 0.0283 | day | 2445.12 | [d] | not captured | llm (0.6) | Tab4:row11:col1 | — | not captured |
| θkDnM | `Q900` · θkDnM | 0.58 | not captured | not captured | not captured | not captured | not captured (not captured) | not captured | — | not captured |
| θVPL | `Q900` · θVPL | 2.61 | not captured | not captured | not captured | not captured | not captured (not captured) | not captured | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'θkclear(per day)' → Q22 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q22 ('θkclear(per day)', value '0.127') — already have one for this compound
- dropped PD-category row 'θkdeg(per day)' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab4:row3:col1'])
- dropped unlinked row (NIL): 'θF (%)' — extend the ontology if this is a real PK parameter (source ['Tab4:row7:col1'])
- kept covariate coefficient θkDnM=0.58 (covariate kDnM) — not an ontology parameter
- unit_dimension_unknown: 'per nM/day' (kon)
- kept covariate coefficient θVPL=2.61 (covariate VPL) — not an ontology parameter
- dropped PD-category row 'θkout(per day)' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab4:row12:col1'])
- dropped PD-category row 'θImax(%)' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab4:row13:col1'])
- dropped PD-category row 'θIC50(nM)' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab4:row14:col1'])
- dropped unlinked row (NIL): 'θγ (unitless)' — extend the ontology if this is a real PK parameter (source ['Tab4:row15:col1'])
- dropped unlinked row (NIL): 'θV_STATIN (unitless)' — extend the ontology if this is a real PK parameter (source ['Tab4:row16:col1'])
- dropped PD-category row 'θImaxSTATIN(unitless)' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab4:row17:col1'])
- dropped PD-category row 'θIC50TBSPCSK(unitless)' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab4:row18:col1'])
- implicit units: 'θkon(per nM/day)' — the LLM proposed '1/nM/day', whose dimension does not fit Q329; left unset
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (θCL (L/day)); Q30 (θQ (L/day)); Q63 (θvc (L))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=alirocumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 1 first-order transfer(s) across 3 compounds → general_linear
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell Tab4:row1:col2 = '9.49%'
- unparsed cell Tab4:row1:col3 = '[0.179; 0.263]'
- unparsed cell Tab4:row2:col2 = '1.87%'
- unparsed cell Tab4:row2:col3 = '[0.122; 0.132]'
- unparsed cell Tab4:row3:col2 = '2.58%'
- unparsed cell Tab4:row3:col3 = '[1.27; 1.41]'
- unparsed cell Tab4:row4:col2 = '5.84%'
- unparsed cell Tab4:row4:col3 = '[0.492; 0.622]'
- unparsed cell Tab4:row5:col2 = '5.10%'
- unparsed cell Tab4:row5:col3 = '[2.88; 3.53]'
- unparsed cell Tab4:row6:col2 = '5.79%'
- unparsed cell Tab4:row6:col3 = '[0.306; 0.387]'
- unparsed cell Tab4:row7:col2 = '4.23%'
- unparsed cell Tab4:row7:col3 = '[62.4; 73.9]'
- unparsed cell Tab4:row11:col2 = '3.00%'
- unparsed cell Tab4:row11:col3 = '[0.0266; 0.0300]'
- unparsed cell Tab4:row12:col2 = '3.86%'
- unparsed cell Tab4:row12:col3 = '[0.240; 0.280]'
- unparsed cell Tab4:row13:col2 = '3.03%'
- unparsed cell Tab4:row13:col3 = '[69.6; 78.6]'
- unparsed cell Tab4:row14:col2 = '1.27%'
- unparsed cell Tab4:row14:col3 = '[5.88; 6.19]'
- unparsed cell Tab4:row15:col2 = '9.30%'
- unparsed cell Tab4:row15:col3 = '[9.43; 13.7]'
- unparsed cell Tab4:row16:col2 = '4.85%'
- unparsed cell Tab4:row16:col3 = '[1.58; 1.92]'
- unparsed cell Tab4:row17:col2 = '9.82%'
- unparsed cell Tab4:row17:col3 = '[0.112; 0.167]'
- unparsed cell Tab4:row18:col2 = '1.86%'
- unparsed cell Tab4:row18:col3 = '[0.895; 0.964]'
- LLM selected parameter table(s) 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.438 (7/16 fields) | 9 |
| `gpt-oss:120b` | not confirmed | 0.412 (7/17 fields) | 10 |

<details><summary>19 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[θf]` | not captured | 68.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θkclear]` | not captured | 0.127 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θkdnm]` | 0.58 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[θq]` | 0.557 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[θv_statin]` | not captured | 1.75 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θvpl]` | not captured | 2.61 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θvpl]` | 2.61 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | alirocumab | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | alirocumab | unknown | mismatch |
| `gpt-oss:120b` | `parameters[θf]` | not captured | 68.1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[θkclear]` | not captured | 0.127 | only_one_extracted |
| `gpt-oss:120b` | `parameters[θkdnm]` | not captured | 0.58 | only_one_extracted |
| `gpt-oss:120b` | `parameters[θkdnm]` | 0.58 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[θq]` | 0.557 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[θv_statin]` | not captured | 1.75 | only_one_extracted |
| `gpt-oss:120b` | `parameters[θvpl]` | not captured | 2.61 | only_one_extracted |
| `gpt-oss:120b` | `parameters[θvpl]` | 2.61 | not captured | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | alirocumab | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | alirocumab | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab4:row1:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab4:row4:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab4:row6:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab4:row5:col1'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Tab4:row11:col1'] |
| C5_unit_missing_Q329 | fail | [length] ** 3 / [mass] / [time] | per nM/day | not captured | not captured | ['Tab4:row9:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.221 | not captured | not captured | ['Tab4:row1:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00921 L/h | not captured | not captured | ['Tab4:row1:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.2 L | not captured | not captured | ['Tab4:row5:col1'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_alirocumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Nolain_2022` / `Nolain_2022::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 09:48 UTC</sub>
