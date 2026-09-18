<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03B&quot;,&quot;href&quot;:&quot;atc/A03B.md&quot;},{&quot;label&quot;:&quot;atropine&quot;,&quot;href&quot;:&quot;drugs/drug_atropine/&quot;},{&quot;label&quot;:&quot;Str\u00f6m_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Atropine_Strm2021_reference&quot;,&quot;label&quot;:&quot;Str\u00f6m_2021_reference&quot;,&quot;href&quot;:&quot;drugs/drug_atropine/Atropine_Strm2021_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Atropine_Ekstrand2022_reference&quot;,&quot;label&quot;:&quot;Ekstrand_2022_reference&quot;,&quot;href&quot;:&quot;drugs/drug_atropine/Atropine_Ekstrand2022_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atropine_Hinderling1985_reference&quot;,&quot;label&quot;:&quot;Hinderling_1985_reference&quot;,&quot;href&quot;:&quot;drugs/drug_atropine/Atropine_Hinderling1985_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atropine_Parrot2024_reference&quot;,&quot;label&quot;:&quot;Parrot_2024_reference&quot;,&quot;href&quot;:&quot;drugs/drug_atropine/Atropine_Parrot2024_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# atropine — `Atropine_Strm2021_reference`

> ## <span class="pk-badge pk-badge--orange">built, not shipped</span>

### Reviewer guidance

> ⚙️ **Pipeline limitation — scholar.** a reported unit is missing from the conversion table, so the parameter reached the engineer without an SI value<br><sub>evidence: `Fab`, `t1/2β`, `t1/2α`, `Vss`</sub>

> This is not a curation fix: the record is waiting on the pipeline, not on a reviewer's judgement.

**What is wrong:** the engineer built the model but a core parameter had no value and was left at its base-class default, so it was not shipped; the engineer's deviations are not documented and quantified. Evidence: T6_deviations — got invented_absorption: not acceptable.

**Steps:**
1. Not a curation fix — scholar limitation.
2. Check _transcribev2.yaml for the parameter: if the paper's table carries the number, the interpret stage dropped it — re-run interpret and validate for the drug, then the engineer.
3. If the paper never reports it, the record cannot become a model.
4. Read the .deviation.json and confirm each deviation names what changed and why.
5. Anything undocumented needs the engineer, not a curator.

<sub>owner: **scholar** · guidance written by playbook</sub>

> **Dose compound ≠ measured compound:** dosed `atropine sulfate`, measured `atropine`.

## Citation
Ström L; Dalin F; Domberg M; Stenlund C; Bondesson U; Hedeland M; et al. et al. (2021). BMC veterinary research 17
  ·  DOI: [10.1186/s12917-021-02847-4](https://doi.org/10.1186/s12917-021-02847-4)

## Model component
<dbs-pgx drug="atropine" model-id="Atropine_Strm2021_reference" status="model_quarantined" stale="false" population="horses" measured-compound="atropine" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| tvVc | `Q63` · V1 | 0.646 | not captured | not captured | not captured | 28.03 | tv_prefix (0.95) | Tab1:row2:col2, Tab1:row2:col3, Tab1:row2:col4, Tab1:row2:col5 | — | not captured |
| tvVt | `Q64` · V2 | 1.148 | not captured | not captured | not captured | 16.39 | llm (0.6) | Tab1:row3:col2, Tab1:row3:col3, Tab1:row3:col4, Tab1:row3:col5 | — | not captured |
| tvCl | `Q22` · CL | 1.905 | not captured | not captured | not captured | 6.63 | tv_prefix (0.95) | Tab1:row4:col2, Tab1:row4:col3, Tab1:row4:col4, Tab1:row4:col5 | — | not captured |
| tvCld | `Q30` · Q | 2.477 | not captured | not captured | not captured | 23.87 | tv_prefix (0.95) | Tab1:row5:col2, Tab1:row5:col3, Tab1:row5:col4, Tab1:row5:col5 | — | not captured |
| tvfdrop (ilogit, eye drop) | `Q40` · Fab | 0.781 | ilogit, eye drop | not captured | [ilogit] | 172.66 | llm (0.6) | Tab1:row6:col2, Tab1:row6:col3, Tab1:row6:col4, Tab1:row6:col5 | — | not captured |
| tvKa | `Q49` · kabs | 5.948 | not captured | not captured | not captured | 198.88 | tv_prefix (0.95) | Tab1:row9:col1, Tab1:row9:col2, Tab1:row9:col3, Tab1:row9:col4, Tab1:row9:col5 | — | not captured |
| Half-life_absorption | `Q95` · t1/2ka | 0.117 | not captured | not captured | not captured | 53.82 | llm (0.6) | Tab1:row14:col2, Tab1:row14:col3, Tab1:row14:col4, Tab1:row14:col5 | — | not captured |
| Half-life_Beta (terminal phase) | `Q60` · t1/2β | 0.798 | terminal phase | not captured | [terminalphase] | 12.77 | llm (0.6) | Tab1:row15:col2, Tab1:row15:col3, Tab1:row15:col4, Tab1:row15:col5 | — | not captured |
| Half-life_alpha (initial phase) | `Q59` · t1/2α | 0.077 | initial phase | not captured | [initialphase] | 20.77 | llm (0.6) | Tab1:row16:col2, Tab1:row16:col3, Tab1:row16:col4, Tab1:row16:col5 | — | not captured |
| Vss (steady-state volume of distribution) | `Q65` · Vss | 1.747 | steady-state volume of distribution | not captured | [s]^2 · [tatevolumeofdistribution] · [teady] | 15.99 | exact (1.0) | Tab1:row17:col2, Tab1:row17:col3, Tab1:row17:col4, Tab1:row17:col5 | — | not captured |
| MRT (Mean residence time (IV) | `Q53` · MRT | 0.884 | Mean residence time (IV | not captured | [m] · [eanresidencetime] · [iv] | 16.16 | exact (1.0) | Tab1:row18:col2, Tab1:row18:col3, Tab1:row18:col4, Tab1:row18:col5 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'units' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_unknown: 'ilogit, eye drop' (Fab)
- unit_dimension_unknown: 'ilogit, infusion' (Fab)
- dropped duplicate Q40 ('tvfINF (ilogit, infusion)', value '0.738') — already have one for this compound
- unit_dimension_unknown: 'terminal phase' (t1/2β)
- unit_dimension_unknown: 'initial phase' (t1/2α)
- unit_dimension_unknown: 'steady-state volume of distribution' (Vss)
- unit_dimension_unknown: 'Mean residence time (IV' (MRT)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=atropine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted

**Extraction notes:**
- unparsed cell Tab1:row12:col1 = 'Scalar (0–1)'
- unparsed cell Tab1:row13:col1 = 'Scalar (0–1)'
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 11 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.905 | not captured | not captured | ['Tab1:row4:col2', 'Tab1:row4:col3', 'Tab1:row4:col4', 'Tab1:row4:col5'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_param_coverage | not captured | pass | 5 scholar param(s) emitted or defaulted | 5 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_atropine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Ström_2021` / `Ström_2021::reference`)
- model: `../../../knowledgebase/drugs/drug_atropine/models/modelica/_needs_review/Atropine_Strm2021_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_atropine/models/modelica/_needs_review/Atropine_Strm2021_reference.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
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
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
