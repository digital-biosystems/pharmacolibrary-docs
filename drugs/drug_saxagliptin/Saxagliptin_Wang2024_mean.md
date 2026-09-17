<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;saxagliptin&quot;,&quot;href&quot;:&quot;drugs/drug_saxagliptin/&quot;},{&quot;label&quot;:&quot;Wang_2024 \u00b7 mean&quot;}]"></div>

# saxagliptin — `Saxagliptin_Wang2024_mean`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

### Reviewer guidance

> ⚙️ **Pipeline limitation — reviewer_tooling.** the check reported a failure without computing a comparison, so this is an inconclusive check rather than a demonstrated fault<br><sub>evidence: `C6_cl_magnitude failed (ratio None)`</sub>

> This is not a curation fix: the record is waiting on the pipeline, not on a reviewer's judgement.

**What is wrong:** clearance is outside the plausible magnitude window.

**Steps:**
1. Not a curation fix — reviewer_tooling limitation.
2. Check the parameter's unit_verbatim — an unconverted per-kg or per-hour unit is the usual cause, not a genuinely extreme value.
3. Confirm value_si against the paper's reported number.
4. A 'ratio None' means the check could not compute a ratio, so treat the window as unverified rather than as a failure of the value.

<sub>owner: **curator** · guidance written by playbook</sub>

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Wang T; Tao T; Liu Y; Dong J; Ni S; Liu Y; et al. et al. (2024). BMC pharmacology & toxicology 25
  ·  DOI: [10.1186/s40360-024-00757-3](https://doi.org/10.1186/s40360-024-00757-3)

## Model component
<dbs-pgx drug="saxagliptin" model-id="Saxagliptin_Wang2024_mean" status="needs_review" stale="false" population="rats with Type 2 Diabetes Mellitus" measured-compound="saxagliptin" parameterization="mechanistic" topology="parent_metabolite"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Cmax (ng/mL) | `Q32` · Cmax | —(suppressed) | ng/mL | — | [ng] / [ml] | not captured | exact (1.0) | Tab11:row1:col1, Wang_2024_table_9:row0:col1 | — | not captured |
| Tmax (h) | `Q56` · tmax | —(suppressed) | h | — | [h] | not captured | exact (1.0) | Tab11:row2:col1 | — | not captured |
| AUC (ng*h/mL) | `Q88` · AUC | —(suppressed) | ng*h/mL | — | [[h] · [ng]] / [ml] | not captured | exact (1.0) | Tab11:row3:col1, Wang_2024_table_9:row1:col1 | — | not captured |
| t1/2Ka (h) | `Q95` · t1/2ka | —(suppressed) | h | — | [h] | not captured | exact (1.0) | Tab11:row4:col1 | — | not captured |
| t1/2a (h) | `Q59` · t1/2α | —(suppressed) | h | — | [h] | not captured | llm_corrected (0.6) | Tab11:row5:col1, Wang_2024_table_9:row2:col1 | — | not captured |
| t1/2β (h) | `Q60` · t1/2β | —(suppressed) | h | — | [h] | not captured | exact (1.0) | Tab11:row6:col1, Wang_2024_table_9:row3:col1 | — | not captured |
| V (mL/kg) | `Q61` · V | —(suppressed) | mL/kg | — | [ml] / [kg] | not captured | exact (1.0) | Tab11:row7:col1 | — | not captured |
| V2 (mL/kg) | `Q64` · V2 | —(suppressed) | mL/kg | — | [ml] / [kg] | not captured | exact (1.0) | Tab11:row8:col1 | — | not captured |
| CL (mL/h/kg) | `Q22` · CL | —(suppressed) | mL/h/kg | — | [ml] / [[h] · [kg]] | not captured | exact (1.0) | Tab11:row9:col1 | — | not captured |
| CL2 (mL/h/kg) | `Q30` · Q | —(suppressed) | mL/h/kg | — | [ml] / [[h] · [kg]] | not captured | special_case (0.95) | Tab11:row10:col1 | — | not captured |
| K12 (1/h) | `Q301` · k12 | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | Tab11:row11:col1, Wang_2024_table_9:row8:col1 | — | not captured |
| K21 (1/h) | `Q302` · k21 | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | Tab11:row12:col1, Wang_2024_table_9:row9:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q61 ('V (ml/kg)', value '141.49') — already have one for this compound
- dropped duplicate Q64 ('V2 (ml/kg)', value '137.81') — already have one for this compound
- dropped duplicate Q22 ('CL (ml/h/kg)', value '882.19') — already have one for this compound
- dropped duplicate Q30 ('CL2 (ml/h/kg)', value '471.60') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=saxagliptin
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted
- population split: 'mean' subgroup of Wang_2024 (paper reports 7 populations: 2204.81, 27.79, 3245.80, 3735.11, 3797.47, 902.06, mean)

**Extraction notes:**
- companion parameter table 9 transcribed (30 record(s))
- companion parameter table S29 transcribed (42 record(s))
- LLM selected parameter table(s) 9, 11, S29

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 12 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab11:row9:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab11:row10:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Tab11:row1:col1', 'Wang_2024_table_9:row0:col1'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Tab11:row2:col1'] |
| C5_dimension_Q59 | pass | [time] | not captured | not captured | not captured | ['Tab11:row5:col1', 'Wang_2024_table_9:row2:col1'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['Tab11:row6:col1', 'Wang_2024_table_9:row3:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab11:row7:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab11:row8:col1'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Tab11:row3:col1', 'Wang_2024_table_9:row1:col1'] |
| C5_dimension_Q95 | pass | [time] | not captured | not captured | not captured | ['Tab11:row4:col1'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 3245.8 | not captured | not captured | ['Tab11:row9:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 227 L/h | not captured | not captured | ['Tab11:row9:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 162 L | not captured | not captured | ['Tab11:row7:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 1.29e+03 L | not captured | not captured | ['Tab11:row8:col1'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_saxagliptin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Wang_2024` / `Wang_2024::mean`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
