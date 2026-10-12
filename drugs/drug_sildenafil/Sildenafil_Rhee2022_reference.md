<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G04B&quot;,&quot;href&quot;:&quot;atc/G04B.md&quot;},{&quot;label&quot;:&quot;sildenafil&quot;,&quot;href&quot;:&quot;drugs/drug_sildenafil/&quot;},{&quot;label&quot;:&quot;Rhee_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sildenafil_Cochiusden2020_reference&quot;,&quot;label&quot;:&quot;Cochius-den_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sildenafil/Sildenafil_Cochiusden2020_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sildenafil — `Sildenafil_Rhee2022_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Sildenafil elimination clearance was missing from the record, so the model was held back due to incomplete disposition parameters.**

Only the absorption rate constant (0.258 h⁻¹) and volume of distribution (11.4 L) for sildenafil were extracted, while its clearance value was absent. A second reader noted the reference check failed without computing a comparison, rendering the specific check inconclusive. Consequently, the incomplete parameter set prevented valid model construction. Extracted — sildenafil: kabs 0.258 h−1, V/F 11.4 L; N-desmethyl sildenafil: V1/F 2.51 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has sildenafil → n-desmethyl sildenafil (metabolism), the second reading none; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Rhee SJ et al., Population pharmacokinetic analysis of…, Scientific reports (2022)
  ·  DOI: [10.1038/s41598-022-11038-6](https://doi.org/10.1038/s41598-022-11038-6)

## Model component
<dbs-pgx drug="sildenafil" model-id="Sildenafil_Rhee2022_reference" status="needs_review" stale="false" population="term and preterm neonates with pulmonary arterial hypertension" measured-compound="sildenafil" parameterization="apparent" topology="parent_metabolite"></dbs-pgx>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 3 extracted, plus 3 covariate effects.

**Parameterization:** CL/F, V/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| KA (h−1) | `Q49` · kabs | 0.258 | h−1 | 7.166666666666667e-05 | [1] / [h] | 20.1 | exact (1.0) | Tab2:row4:col1, Tab2:row4:col2, Tab2:row4:col3 | — | not captured |
| VSil/F (L) | `Q76` · V/F | 11.4 | L | 0.0114 | [l] | 38.6 | llm (0.6) | Tab2:row5:col1, Tab2:row5:col2, Tab2:row5:col3 | — | not captured |
| female_sex_effect | `Q900` · female_sex_effect | 1.78 | not captured | not captured | not captured | 16.1 | not captured (not captured) | Tab2:row9:col2 | — | not captured |
| maturation_postnatal_age_effect | `Q900` · maturation_postnatal_age_effect | 4.28 | not captured | not captured | not captured | 38.6 | not captured (not captured) | Tab2:row10:col2 | — | not captured |
| VDMS /F’ (L) | `Q290` · V1/F | 2.51 | L | 0.0025099999999999996 | [l] | 26.4 | exact (1.0) | Tab2:row11:col1, Tab2:row11:col2, Tab2:row11:col3 | — | not captured |
| theta_q319_body_weight_power | `Q900` · theta_q319_body_weight_power | 1.06 | not captured | not captured | not captured | 19.8 | not captured (not captured) | Tab2:row8:col2, Tab2:row8:col3, Tab2:row14:col2, Tab2:row14:col3 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| CLSil/F (L/h) = θCL(Sil) × (body weight/3.14)θweight × θfemale × (1−e−θmaturation × postnatal age) | Q27 | not captured | exact |
| CLDMS/F’ (L/h) = θCL(DMS) × (body weight/3.14)θweight | Q27 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'VSil/F' routed out of structural estimates ('Interindividual variability (%CV)')
- table section iiv: 'CLSil/F' routed out of structural estimates ('Interindividual variability (%CV)')
- table section iiv: 'CLDMS/F’' routed out of structural estimates ('Interindividual variability (%CV)')
- table section covariance: 'VSil/F and CLSil/F' routed out of structural estimates ('Correlation between etas')
- table section covariance: 'CLSil/F and CLDMS/F’' routed out of structural estimates ('Correlation between etas')
- table section covariance: 'VSil/F and CLDMS/F’' routed out of structural estimates ('Correlation between etas')
- table section residual_error: 'Sildenafil' routed out of structural estimates ('Residual variability (SD)')
- table section residual_error: 'N-desmethyl sildenafil' routed out of structural estimates ('Residual variability (SD)')
- column 'estimates (rse%)' classified 'rse' by the LLM but kept as the estimate: the header names the point value
- dropped unlinked row (NIL): 'Objective function value' — extend the ontology if this is a real PK parameter (source ['Tab2:row2:col1', 'Tab2:row2:col2', 'Tab2:row2:col3'])
- dropped duplicate Q27 ('θCL(Sil); typical value of CLSil/F', value '9.27') — already have one for this compound
- covariate level 'θfemale; sex effect' → Q900:female_sex_effect = 1.78 (linear_fractional on Q27)
- covariate level 'θmaturation; postnatal age effect' → Q900:maturation_postnatal_age_effect = 4.28 (linear_fractional on Q27)
- dropped duplicate Q27 ('θCL(DMS); typical value of CLDMS/F’', value '12.4') — already have one for this compound
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=sildenafil
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [1]
- row roles (LLM): model_class=compartmental; 19/19 row label(s) assigned, 23 linked by role; re-tagged parent→N-desmethyl sildenafil ×16
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab2:row4:col4 = '0.394 (0.216–0.810)'
- unparsed cell Tab2:row5:col4 = '17.2 (7.57–41.2)'
- unparsed cell Tab2:row7:col4 = '10.1 (7.61–13.7)'
- unparsed cell Tab2:row8:col4 = '0.848 (0.219–2.23)'
- unparsed cell Tab2:row11:col4 = '2.11 (1.43–7.81)'
- unparsed cell Tab2:row13:col4 = '14.2 (10.9–17.3)'
- unparsed cell Tab2:row14:col4 = '1.32 (0.833–2.50)'
- unparsed cell Tab2:row16:col4 = '150.0 (61.6–315.2)'
- unparsed cell Tab2:row17:col4 = '58.6 (29.4–86.3)'
- unparsed cell Tab2:row18:col4 = '47.6 (29.5–64.5)'
- unparsed cell Tab2:row20:col4 = '0.245 (−0.068–0.629)'
- unparsed cell Tab2:row21:col4 = '0.166 (0.015–0.300)'
- unparsed cell Tab2:row22:col4 = '0.061 (−0.274–0.341)'
- unparsed cell Tab2:row24:col4 = '0.543 (0.443–0.626)'
- unparsed cell Tab2:row25:col4 = '0.451 (0.303–0.576)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8-27b` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.667 (12/18 fields) | 6 |

<details><summary>6 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['sildenafil', 'n-desmethyl sildenafil', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[cldms/f’ (l/h) = θcl(dms) × (body weight/3.14)θweight]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka].value` | 0.258 | 0.414 | mismatch |
| `gpt-oss-120b` | `parameters[theta_q319_body_weight_power].value` | 1.06 | 1.34 | mismatch |
| `gpt-oss-120b` | `parameters[vdms /f’]` | 2.51 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vsil/f].value` | 11.4 | 19.8 | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C2_reference | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row11:col1', 'Tab2:row11:col2', 'Tab2:row11:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab2:row4:col1', 'Tab2:row4:col2', 'Tab2:row4:col3'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row5:col1', 'Tab2:row5:col2', 'Tab2:row5:col3'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q290 | pass | volume within physiological range | 2.51 L | not captured | not captured | ['Tab2:row11:col1', 'Tab2:row11:col2', 'Tab2:row11:col3'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 11.4 L | not captured | not captured | ['Tab2:row5:col1', 'Tab2:row5:col2', 'Tab2:row5:col3'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_sildenafil/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Rhee_2022` / `Rhee_2022::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 09:04 UTC</sub>
