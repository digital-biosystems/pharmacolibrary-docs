<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01D&quot;,&quot;href&quot;:&quot;atc/C01D.md&quot;},{&quot;label&quot;:&quot;vericiguat&quot;,&quot;href&quot;:&quot;drugs/drug_vericiguat/&quot;},{&quot;label&quot;:&quot;Ruehs_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Vericiguat_Ruehs2021_reference&quot;,&quot;label&quot;:&quot;Ruehs_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vericiguat/Vericiguat_Ruehs2021_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# vericiguat — `Vericiguat_Ruehs2021_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.64). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

### Reviewer guidance

**The vericiguat record was held back because the reference check could not compute a comparison (ratio None), an inconclusive result, and a second reader disputed several extracted values, including the bioavailability fraction, which was left unextracted.**

The record contains vericiguat parameters CL/F 1.3 L/h, V/F 38.9 L, kabs 1.5 1/h, and covariate effects (creatinine power 0.164, sex on V/F 0.850, body weight on kabs 1.28, albumin power 2.37), but the absolute bioavailability parameter Fab has no value. The reference check failed with ratio None, meaning no comparison could be computed, so this is an inconclusive check rather than a demonstrated fault. A second reader disagreed on the dose compound, primary analyte, model links (recorded as empty), and parameter assignments, and read the bioavailability theta as 1.08 where the record has none. Extracted — vericiguat: CL/F 1.3 L/h, V/F 38.9 L, kabs 1.5 1/h.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the links between molecules: this record has none, the second reading vericiguat → nt-probnp (none); it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-09-28 14:42:06.547177+00:00) predates the upstream re-run (2026-10-06 10:33:15.343309+00:00). Current validate status: `extracted`.

## Citation
Ruehs H et al., Population Pharmacokinetics and Pharmac…, Clinical pharmacokinetics (2021)
  ·  DOI: [10.1007/s40262-021-01024-y](https://doi.org/10.1007/s40262-021-01024-y)

## Model component
<dbs-pgx drug="vericiguat" model-id="Vericiguat_Ruehs2021_reference" status="extracted" stale="true" population="adults with heart failure and reduced ejection fraction" measured-compound="vericiguat" parameterization="apparent" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 3 extracted, plus 4 covariate effects.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 1.3 | L/h | 3.611111111111112e-07 | [l] / [h] | 8.33 | exact (1.0) | Tab2:row1:col1, Tab2:row1:col2, Tab2:row1:col4, Ruehs_2021_table_1:row0:col1, Ruehs_2021_table_1:row0:col2, Ruehs_2021_table_1:row0:col4 | — | 25.1 (None% RSE) |
| V/F (L) | `Q76` · V/F | 38.9 | L | 0.0389 | [l] | 12.5 | exact (1.0) | Tab2:row2:col1, Tab2:row2:col2, Tab2:row2:col4, Ruehs_2021_table_1:row2:col1, Ruehs_2021_table_1:row2:col2, Ruehs_2021_table_1:row2:col4 | — | 21.0 (None% RSE) |
| ka (1/h) | `Q49` · kabs | 1.5 | 1/h | 0.00041666666666666664 | 1/h | 18.5 | exact (1.0) | Tab2:row3:col1, Tab2:row3:col2, Tab2:row3:col4, Ruehs_2021_table_1:row3:col1, Ruehs_2021_table_1:row3:col2, Ruehs_2021_table_1:row3:col4 | — | 117 (None% RSE) |
| v_sex | `Q900` · v_sex | 0.850 | not captured | not captured | not captured | 4.09 | not captured (not captured) | Tab2:row9:col1, Tab2:row9:col2 | — | not captured |
| theta_q22_creatinine_power | `Q900` · theta_q22_creatinine_power | 0.164 | not captured | not captured | not captured | 26.1 | not captured (not captured) | Tab2:row6:col1, Tab2:row6:col2 | — | not captured |
| theta_kabs_bodyweight_ka | `Q900` · theta_kabs_bodyweight_ka | 1.28 | not captured | not captured | not captured | 25.2 | not captured (not captured) | Tab2:row10:col1, Tab2:row10:col2 | — | not captured |
| theta_kabs_albumin_power | `Q900` · theta_kabs_albumin_power | 2.37 | not captured | not captured | not captured | 26.1 | not captured (not captured) | Tab2:row11:col1, Tab2:row11:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| F | Q40 | not captured | exact |

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'CL/F (L/h)' routed out of structural estimates ('Inter-individual variabilityCV (%)a')
- table section iiv: 'V/F (L)' routed out of structural estimates ('Inter-individual variabilityCV (%)a')
- table section iiv: 'ka (1/h)' routed out of structural estimates ('Inter-individual variabilityCV (%)a')
- table section iiv: 'CL/F (L/h)' routed out of structural estimates ('Inter-individual variability CV (%)a')
- table section iiv: 'V/F (L)' routed out of structural estimates ('Inter-individual variability CV (%)a')
- table section iiv: 'ka (1/h)' routed out of structural estimates ('Inter-individual variability CV (%)a')
- dropped value-less row: 'θCL,age'
- dropped value-less row: 'θCL,bilirubin'
- covariate level 'θV,sex' → Q900:v_sex = 0.850 (linear_fractional on Q27)
- dropped unlinked row (NIL): 'θF,dose≤1.25 mg' — extend the ontology if this is a real PK parameter (source ['Tab2:row12:col1', 'Tab2:row12:col2'])
- dropped unlinked row (NIL): 'θF,dose=5 mg' — extend the ontology if this is a real PK parameter (source ['Tab2:row13:col1', 'Tab2:row13:col2'])
- dropped unlinked row (NIL): 'θF,dose=10 mg' — extend the ontology if this is a real PK parameter (source ['Tab2:row14:col1', 'Tab2:row14:col2'])
- NIL: refused to back-fill base 'CL/F' from footnote/prose loose number None (source ['Tab2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V/F' from footnote/prose loose number None (source ['Tab2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'kabs' from footnote/prose loose number None (source ['Tab2:footnote']); the table cell was unparseable — needs review
- covariate effect for Q22 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'ka (1/h)' → 1/h (from the paper text: 'The paper text explicitly states: "Population mean estimates (inter-individual variability [%]) for CL/F, V/F, and ka we')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=vericiguat
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab2:row1:col5 = '10.2e'
- unparsed cell Tab2:row2:col5 = '34.7e'
- unparsed cell Tab2:row3:col5 = '35.2e'
- unparsed cell Tab2:row4:col1 = '− 0.418'
- unparsed cell Tab2:row7:col1 = '− 0.072'
- unparsed cell Tab2:row15:col1 = '25.7c'
- unparsed cell Tab2:row15:col5 = '8.4f'
- unparsed cell Tab2:row16:col1 = '7.27d'
- unparsed cell Tab2:row16:col5 = '8.4f'
- unparsed cell Ruehs_2021_table_1:row0:col5 = '6.18d'
- unparsed cell Ruehs_2021_table_1:row2:col5 = '19.5d'
- unparsed cell Ruehs_2021_table_1:row3:col5 = '37.2d'
- unparsed cell Ruehs_2021_table_1:row4:col1 = '26.02b'
- unparsed cell Ruehs_2021_table_1:row4:col5 = '8.91e'
- unparsed cell Ruehs_2021_table_1:row5:col1 = '7.81c'
- unparsed cell Ruehs_2021_table_1:row5:col5 = '8.91e'
- companion parameter table 1 transcribed (16 record(s), model stage 'base')
- LLM selected parameter table(s) 1, 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.64 (16/25 fields) | 9 |

<details><summary>9 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.bioavailability.theta` | not captured | 1.08 | only_one_extracted |
| `gpt-oss:120b` | `model.links` | [] | [['vericiguat', 'nt-probnp', 'none']] | mismatch |
| `gpt-oss:120b` | `parameters[cl/f].covariate_forms` | ['linear_fractional'] | [] | mismatch |
| `gpt-oss:120b` | `parameters[f]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_v_f_sex_v]` | not captured | 0.850 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v/f].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss:120b` | `parameters[v_sex]` | 0.850 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[θf,dose=10 mg]` | not captured | 0.793 | only_one_extracted |
| `gpt-oss:120b` | `parameters[θf,dose≤1.25 mg]` | not captured | 1.08 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row1:col1', 'Tab2:row1:col2', 'Tab2:row1:col4', 'Ruehs_2021_table_1:row0:col1', 'Ruehs_2021_table_1:row0:col2', 'Ruehs_2021_table_1:row0:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab2:row3:col1', 'Tab2:row3:col2', 'Tab2:row3:col4', 'Ruehs_2021_table_1:row3:col1', 'Ruehs_2021_table_1:row3:col2', 'Ruehs_2021_table_1:row3:col4'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row2:col1', 'Tab2:row2:col2', 'Tab2:row2:col4', 'Ruehs_2021_table_1:row2:col1', 'Ruehs_2021_table_1:row2:col2', 'Ruehs_2021_table_1:row2:col4'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 1.3 L/h | not captured | not captured | ['Tab2:row1:col1', 'Tab2:row1:col2', 'Tab2:row1:col4', 'Ruehs_2021_table_1:row0:col1', 'Ruehs_2021_table_1:row0:col2', 'Ruehs_2021_table_1:row0:col4'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 38.9 L | not captured | not captured | ['Tab2:row2:col1', 'Tab2:row2:col2', 'Tab2:row2:col4', 'Ruehs_2021_table_1:row2:col1', 'Ruehs_2021_table_1:row2:col2', 'Ruehs_2021_table_1:row2:col4'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_vericiguat/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Ruehs_2021` / `Ruehs_2021::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_vericiguat/Vericiguat_Ruehs2021_reference/Vericiguat_Ruehs2021_reference_modelica.zip" download>Vericiguat_Ruehs2021_reference_modelica.zip</a> <span class="pk-size">(4.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_vericiguat/Vericiguat_Ruehs2021_reference/Vericiguat_Ruehs2021_reference_fmi.zip" download>Vericiguat_Ruehs2021_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_vericiguat/Vericiguat_Ruehs2021_reference/Vericiguat_Ruehs2021_reference_matlab.zip" download>Vericiguat_Ruehs2021_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_vericiguat/Vericiguat_Ruehs2021_reference/Vericiguat_Ruehs2021_reference_matlab_simbio.zip" download>Vericiguat_Ruehs2021_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_vericiguat/Vericiguat_Ruehs2021_reference/Vericiguat_Ruehs2021_reference_sbml.zip" download>Vericiguat_Ruehs2021_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_vericiguat/Vericiguat_Ruehs2021_reference/Vericiguat_Ruehs2021_reference_cellml.zip" download>Vericiguat_Ruehs2021_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_1C_enteral.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_vericiguat/Vericiguat_Ruehs2021_reference/Vericiguat_Ruehs2021_reference.svg" alt="Vericiguat_Ruehs2021_reference diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v26.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 1.25 mg, single dose, first-order absorption (ka 1.5 /h, F 1). Doses in the paper: 1.25, 2.5, 5, 10 mg.

<dbs-fmusim paramsurl="drugs/drug_vericiguat/Vericiguat_Ruehs2021_reference/Vericiguat_Ruehs2021_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_vericiguat/Vericiguat_Ruehs2021_reference/Vericiguat_Ruehs2021_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_1C_enteral` · parameters `Vericiguat_Ruehs2021_reference_params.json` · controls `Vericiguat_Ruehs2021_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 10:33 UTC</sub>
