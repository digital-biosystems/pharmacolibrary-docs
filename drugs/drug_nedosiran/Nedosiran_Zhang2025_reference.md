<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;nedosiran&quot;,&quot;href&quot;:&quot;drugs/drug_nedosiran/&quot;},{&quot;label&quot;:&quot;Zhang_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nedosiran_Zhang2025_reference&quot;,&quot;label&quot;:&quot;Zhang_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_nedosiran/Nedosiran_Zhang2025_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# nedosiran — `Nedosiran_Zhang2025_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.808). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

### Reviewer guidance

**Vmax, CL and V have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (Km), so that value has no SI equivalent. Extracted — nedosiran: CL/F 6.1 L/h, V1/F 148 L, kabs 0.212 1/h, FR 0.692, V2/F 6.56e+03 L, Q/F 2.79 L/h, Vmax 3.37, Km 248 ng/mL, … (+2).

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has nedosiran, the second reading unknown; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Zhang S; Gamallo P; Rawson V et al. (2025). Clinical pharmacokinetics 64
  ·  DOI: [10.1007/s40262-025-01540-1](https://doi.org/10.1007/s40262-025-01540-1)

## Model component
<dbs-pgx drug="nedosiran" model-id="Nedosiran_Zhang2025_reference" status="needs_review" stale="false" population="patients with primary hyperoxaluria type 1 (PH1) and healthy volunteers" measured-compound="nedosiran" parameterization="apparent" topology="3C"></dbs-pgx>

**Model structure:** 3-compartment; no model was built for this record.  
**Parameters:** 10 extracted.

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F | `Q27` · CL/F | 6.10 | L/h | 1.6944444444444442e-06 | L/h | 11.4 | exact (1.0) | Tab2:row1:col3, Tab2:row1:col4 | — | not captured |
| Vc/F | `Q290` · V1/F | 148 | L | 0.148 | L | 6.07 | exact (1.0) | Tab2:row2:col3, Tab2:row2:col4 | — | not captured |
| Ka1 | `Q49` · kabs | 0.212 | 1/h | 5.888888888888889e-05 | 1/h | 6.78 | llm (0.6) | Tab2:row3:col2, Tab2:row3:col3, Tab2:row3:col4 | — | not captured |
| FR1 | `Q43` · FR | 0.692 | not captured | not captured | not captured | 2.20 | llm (0.6) | Tab2:row5:col3, Tab2:row5:col4 | — | not captured |
| Vp/F | `Q82` · V2/F | 6560 | L | 6.5600000000000005 | L | 22.4 | exact (1.0) | Tab2:row6:col3, Tab2:row6:col4 | — | not captured |
| Q/F | `Q69` · Q/F | 2.79 | L/h | 7.75e-07 | L/h | 13.0 | exact (1.0) | Tab2:row7:col3, Tab2:row7:col4 | — | not captured |
| Vmax | `Q66` · Vmax | 3.37 | not captured | not captured | not captured | 20.9 | special_case (0.95) | Tab2:row8:col3, Tab2:row8:col4 | — | not captured |
| KM | `Q1` · Km | 248 | ng/mL | not captured | ng/mL | 26.7 | exact (1.0) | Tab2:row9:col3, Tab2:row9:col4 | — | not captured |
| CL.EGFR | `Q22` · CL | 0.969 | not captured | not captured | not captured | 11.6 | llm (0.6) | Tab2:row10:col3, Tab2:row10:col4 | — | not captured |
| Vc.EGFR | `Q61` · V | 0.174 | not captured | not captured | not captured | 18.1 | llm (0.6) | Tab2:row11:col3, Tab2:row11:col4 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'units' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Ka2' — extend the ontology if this is a real PK parameter (source ['Tab2:row4:col2', 'Tab2:row4:col3', 'Tab2:row4:col4'])
- dropped duplicate Q49 ('ka.BW', value '-0.221') — already have one for this compound
- dropped duplicate Q22 ('CL.BW', value '0.750') — already have one for this compound
- dropped duplicate Q61 ('V.BW', value '1.00') — already have one for this compound
- dropped duplicate Q49 ('Ka1.PH', value '1.32') — already have one for this compound
- dropped duplicate Q66 ('Vmax.BW', value '0.492') — already have one for this compound
- routed 'ExpError' → Q315 (sigma) to residual_error — variability estimate, not a structural parameter
- dropped PD-category row 'Kout' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Zhang_2025_table_3:row0:col2', 'Zhang_2025_table_3:row0:col3'])
- dropped unlinked row (NIL): 'BSL' — extend the ontology if this is a real PK parameter (source ['Zhang_2025_table_3:row1:col3', 'Zhang_2025_table_3:row1:col4'])
- dropped PD-category row 'Imax' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Zhang_2025_table_3:row2:col3', 'Zhang_2025_table_3:row2:col4'])
- dropped PD-category row 'IC50' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Zhang_2025_table_3:row3:col3', 'Zhang_2025_table_3:row3:col4'])
- dropped PD-category row 'Gamma' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Zhang_2025_table_3:row4:col3'])
- dropped PD-category row 'Lambda' → Q342 (lambda_hazard, category G14) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Zhang_2025_table_3:row5:col3'])
- dropped unlinked row (NIL): 'AGE.BSL' — extend the ontology if this is a real PK parameter (source ['Zhang_2025_table_3:row6:col3', 'Zhang_2025_table_3:row6:col4'])
- routed 'PropError' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 70 (source ['Tab2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 90 (source ['Tab2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number None (source ['Tab2:footnote']); the table cell was unparseable — needs review
- implicit units: 'CL/F' → L/h (from the popPK convention: 'CL/F is apparent clearance. In population PK, clearance is conventionally expressed in L/h. The value 6.10 is consistent')
- implicit units: 'Vc/F' → L (from the popPK convention: 'Vc/F is the apparent volume of distribution of the central compartment. Volumes are conventionally expressed in L. The v')
- implicit units: 'Ka1' → 1/h (from the popPK convention: 'Ka1 is an absorption rate constant (first-order). Rate constants are conventionally expressed in 1/h. The value 0.212 is')
- implicit units: 'Vp/F' → L (from the popPK convention: 'Vp/F is the apparent volume of distribution of the peripheral compartment. Volumes are conventionally expressed in L. Th')
- implicit units: 'Q/F' → L/h (from the popPK convention: 'Q/F is the apparent intercompartmental clearance. Intercompartmental clearances are conventionally expressed in L/h. The')
- implicit units: 'Vmax' — the LLM proposed 'ng/mL/h', whose dimension does not fit Q66; left unset
- implicit units: 'KM' → ng/mL (from the popPK convention: 'KM is the Michaelis constant (substrate concentration at half Vmax). It has the same units as the drug concentration. Gi')
- implicit units: 'CL.EGFR' — the LLM proposed '1', whose dimension does not fit Q22; left unset
- implicit units: 'Vc.EGFR' — the LLM proposed '1', whose dimension does not fit Q61; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=nedosiran
- structure disagreement: deterministic 3C vs LLM 2C — review compartment count
- molar mass: none found for 'nedosiran' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab2:row1:col5 = '[4.74; 7.47]'
- unparsed cell Tab2:row2:col5 = '[130; 165]'
- unparsed cell Tab2:row3:col5 = '[0.184; 0.240]'
- unparsed cell Tab2:row4:col5 = '[13.6; 16.2]'
- unparsed cell Tab2:row5:col5 = '[0.662; 0.721]'
- unparsed cell Tab2:row6:col5 = '[3690; 9440]'
- unparsed cell Tab2:row7:col5 = '[2.08; 3.51]'
- unparsed cell Tab2:row8:col5 = '[1.99; 4.75]'
- unparsed cell Tab2:row9:col5 = '[118; 378]'
- unparsed cell Tab2:row10:col5 = '[0.749; 1.19]'
- unparsed cell Tab2:row11:col5 = '[0.112; 0.236]'
- unparsed cell Tab2:row12:col1 = 'BW on ka1 and ka2'
- unparsed cell Tab2:row12:col5 = '[−0.428; 0.0135]'
- unparsed cell Tab2:row15:col1 = 'PH Type 1 on ka1'
- unparsed cell Tab2:row15:col5 = '[1.07; 1.57]'
- unparsed cell Tab2:row16:col5 = '[0.355; 0.629]'
- unparsed cell Tab2:row18:col1 = 'IIV on ka1 (CV%)'
- unparsed cell Tab2:row19:col1 = 'IIV on ka2 (CV%)'
- unparsed cell Tab2:row21:col1 = 'IIV on FR1 (additive on logit) (SD)'
- unparsed cell Zhang_2025_table_3:row1:col5 = '[202; 325]'
- unparsed cell Zhang_2025_table_3:row2:col5 = '[0.640; 0.734]'
- unparsed cell Zhang_2025_table_3:row3:col5 = '[0.992; 2.38]'
- unparsed cell Zhang_2025_table_3:row6:col5 = '[−0.578; −0.321]'
- unparsed cell Zhang_2025_table_3:row8:col1 = 'IIV on IC50 (CV%)'
- companion parameter table 3 transcribed (21 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.808 (21/26 fields) | 5 |

<details><summary>5 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [] | [['nedosiran', 'uox/cr', 'none']] | mismatch |
| `gpt-oss:120b` | `parameters[v.bw]` | not captured | 1.00 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vc.egfr].parameter_id` | Q61 | Q63 | mismatch |
| `gpt-oss:120b` | `screen.dose_compound` | nedosiran | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | nedosiran | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 10 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Tab2:row9:col3', 'Tab2:row9:col4'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row1:col3', 'Tab2:row1:col4'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row2:col3', 'Tab2:row2:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab2:row3:col2', 'Tab2:row3:col3', 'Tab2:row3:col4'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row7:col3', 'Tab2:row7:col4'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row6:col3', 'Tab2:row6:col4'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row10:col3', 'Tab2:row10:col4'] |
| C5_unit_missing_Q61 | fail | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row11:col3', 'Tab2:row11:col4'] |
| C5_unit_missing_Q66 | fail | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row8:col3', 'Tab2:row8:col4'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 6.1 L/h | not captured | not captured | ['Tab2:row1:col3', 'Tab2:row1:col4'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 148 L | not captured | not captured | ['Tab2:row2:col3', 'Tab2:row2:col4'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 6.56e+03 L | not captured | not captured | ['Tab2:row6:col3', 'Tab2:row6:col4'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_nedosiran/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Zhang_2025` / `Zhang_2025::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-27 14:45 UTC</sub>
