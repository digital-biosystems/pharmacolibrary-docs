<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D06A&quot;,&quot;href&quot;:&quot;atc/D06A.md&quot;},{&quot;label&quot;:&quot;gentamicin&quot;,&quot;href&quot;:&quot;drugs/drug_gentamicin/&quot;},{&quot;label&quot;:&quot;Abbasi_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Gentamicin_Crcek2019_reference&quot;,&quot;label&quot;:&quot;Crcek_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_gentamicin/Gentamicin_Crcek2019_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Gentamicin_Abbasi2023_reference&quot;,&quot;label&quot;:&quot;Abbasi_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_gentamicin/Gentamicin_Abbasi2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# gentamicin — `Gentamicin_Abbasi2023_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: partial</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

### Reviewer guidance

**The model does not reproduce the paper's peak concentration (Cmax) (paper 5, model 0.0102).**

Simulated as the paper dosed it, the model's peak concentration (Cmax) differs from the value the paper reports by more than the tolerance. A reported unit could not be converted (AUC), so that value has no SI equivalent. Extracted — gentamicin: AUC ratio 0.4, AUC 3 mg*h/L, V 0.33 L/kg, CL 4.7 L/h.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of 5: this record has 0.4, the second reading none; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Abbasi MY et al., Recommendations of Gentamicin Dose Base…, Clinical pharmacology : adv… (2023)
  ·  DOI: [10.2147/CPAA.S417298](https://doi.org/10.2147/CPAA.S417298)

<div class="pk-model-meta" hidden drug="gentamicin" model-id="Gentamicin_Abbasi2023_reference" status="needs_review" stale="false" population="critically ill adult patients" measured-compound="gentamicin" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameters:** 4 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| 5 (368.2±87.9) | `Q21` · AUC ratio | 0.4 | not captured | not captured | not captured | not captured | llm (0.6) | Abbasi_2023_table_1:row1:col1, Abbasi_2023_table_1:row1:col2, Abbasi_2023_table_1:row1:col3, Abbasi_2023_table_1:row1:col4, Abbasi_2023_table_1:row1:col5 | — | not captured |
| 8 (586.0±143.0) | `Q88` · AUC | 3.0 | mg*h/L | not captured | mg*h/L | not captured | llm (0.6) | Abbasi_2023_table_1:row7:col1, Abbasi_2023_table_1:row7:col2, Abbasi_2023_table_1:row7:col3, Abbasi_2023_table_1:row7:col4, Abbasi_2023_table_1:row7:col5 | — | not captured |
| Vd | `Q61` · V | 0.33 | L/kg | 0.0231 | L | not captured | exact (1.0) | Abbasi_2023:results_prose | — | not captured |
| CL | `Q22` · CL | 4.70 | L/h | 1.3055555555555556e-06 | L/h | not captured | exact (1.0) | Abbasi_2023:results_prose | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'MIC 0.5 mg/L' — extend the ontology if this is a real PK parameter (source ['Abbasi_2023_table_1:row0:col1', 'Abbasi_2023_table_1:row0:col2', 'Abbasi_2023_table_1:row0:col3'])
- dropped unlinked row (NIL): '3' — extend the ontology if this is a real PK parameter (source ['Abbasi_2023_table_1:row2:col1', 'Abbasi_2023_table_1:row2:col2', 'Abbasi_2023_table_1:row2:col3', 'Abbasi_2023_table_1:row2:col4', 'Abbasi_2023_table_1:row4:col1', 'Abbasi_2023_table_1:row4:col2', 'Abbasi_2023_table_1:row4:col3', 'Abbasi_2023_table_1:row4:col4', 'Abbasi_2023_table_1:row6:col1', 'Abbasi_2023_table_1:row6:col2', 'Abbasi_2023_table_1:row6:col3', 'Abbasi_2023_table_1:row6:col4', 'Abbasi_2023_table_1:row8:col1', 'Abbasi_2023_table_1:row8:col2', 'Abbasi_2023_table_1:row8:col3', 'Abbasi_2023_table_1:row8:col4', 'Abbasi_2023_table_1:row10:col1', 'Abbasi_2023_table_1:row10:col2', 'Abbasi_2023_table_1:row10:col3', 'Abbasi_2023_table_1:row10:col4', 'Abbasi_2023_table_1:row12:col1', 'Abbasi_2023_table_1:row12:col2', 'Abbasi_2023_table_1:row12:col3', 'Abbasi_2023_table_1:row12:col4'])
- dropped duplicate Q21 ('6 (440.7±107.2)', value '0.9') — already have one for this compound
- dropped duplicate Q21 ('7 (513.9±123.6)', value '1.8') — already have one for this compound
- dropped unlinked row (NIL): '9 (660.8±158.6)' — extend the ontology if this is a real PK parameter (source ['Abbasi_2023_table_1:row9:col1', 'Abbasi_2023_table_1:row9:col2', 'Abbasi_2023_table_1:row9:col3', 'Abbasi_2023_table_1:row9:col4', 'Abbasi_2023_table_1:row9:col5'])
- dropped unlinked row (NIL): '10 (732.9±176.9)' — extend the ontology if this is a real PK parameter (source ['Abbasi_2023_table_1:row11:col1', 'Abbasi_2023_table_1:row11:col2', 'Abbasi_2023_table_1:row11:col3', 'Abbasi_2023_table_1:row11:col4', 'Abbasi_2023_table_1:row11:col5'])
- salvaged Q61 ('Vd'=0.33) from results prose — parameter table was unreadable
- salvaged Q22 ('CL'=4.70) from results prose — parameter table was unreadable
- implicit units: '8 (586.0±143.0)' → mg*h/L (from the paper text: 'The paper states “AUC24h &gt;700 mg⋅h/L” and defines AUC24h as the area under the concentration-time curve.')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=gentamicin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
first reading `gpt-6-luna` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | partly confirmed | 0.75 (6/8 fields) | 2 |

<details><summary>2 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[5]` | 0.4 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[8]` | 3.0 | not captured | only_one_extracted |

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
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Abbasi_2023_table_1:row7:col1', 'Abbasi_2023_table_1:row7:col2', 'Abbasi_2023_table_1:row7:col3', 'Abbasi_2023_table_1:row7:col4', 'Abbasi_2023_table_1:row7:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 4.7 | not captured | not captured | ['Abbasi_2023:results_prose'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 4.7 L/h | not captured | not captured | ['Abbasi_2023:results_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 23.1 L | not captured | not captured | ['Abbasi_2023:results_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=gentamicin) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 2 scholar param(s) emitted or defaulted | 2 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |
| T1_cmax | reference | skipped | 5 | 0.010215426508061492 | not captured | unresolved concentration unit (exp 'mg/kg/day', sim 'kg/m3') |
| T1_cmax | reference | skipped | 8 | 0.010215426508061492 | not captured | unresolved concentration unit (exp 'mg/kg/day', sim 'kg/m3') |
| T1_cmax | reference | skipped | 10 | 0.010215426508061492 | not captured | unresolved concentration unit (exp 'mg/kg/day', sim 'kg/m3') |
| T1_cmax | reference | skipped | ≥8–10 | 0.010215426508061492 | not captured | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | 8 | 0.010215426508061492 | not captured | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | 10 | 0.010215426508061492 | not captured | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | 76.2 | 0.010215426508061492 | not captured | unresolved concentration unit (exp '%', sim 'kg/m3') |
| T1_cmax | reference | skipped | 66.9 | 0.010215426508061492 | not captured | unresolved concentration unit (exp '%', sim 'kg/m3') |
| T1_cmax | reference | skipped | 8 | 0.010215426508061492 | not captured | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | &gt;10 | 0.010215426508061492 | not captured | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | &gt;8 | 0.010215426508061492 | not captured | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | &gt;10 | 0.010215426508061492 | not captured | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | fail | 0.016 | 0.010215426508061492 | 0.6385 | mg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.03 | 0.010215426508061492 | 0.3405 | mg/L→SI vs simulated kg/m3 |
| T1_cmax | reference | skipped | &gt;8 | 0.010215426508061492 | not captured | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | ~8–10 | 0.010215426508061492 | not captured | unresolved concentration unit (exp '', sim 'kg/m3') |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_gentamicin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Abbasi_2023` / `Abbasi_2023::reference`)
- model: `../../../knowledgebase/drugs/drug_gentamicin/models/modelica/Gentamicin_Abbasi2023_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_gentamicin/models/modelica/Gentamicin_Abbasi2023_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_gentamicin/models/modelica/Gentamicin_Abbasi2023_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
</tbody></table>
<p>No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_gentamicin/Gentamicin_Abbasi2023_reference/Gentamicin_Abbasi2023_reference.svg" alt="Gentamicin_Abbasi2023_reference diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v26.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 240 mg infusion over 10 min, single dose. _The paper's dose was not captured; the default is the WHO ATC DDD 240 mg parenteral (J01GB03) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_gentamicin/Gentamicin_Abbasi2023_reference/Gentamicin_Abbasi2023_reference_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_gentamicin/Gentamicin_Abbasi2023_reference/Gentamicin_Abbasi2023_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_1C` · parameters `Gentamicin_Abbasi2023_reference_params.json` · controls `Gentamicin_Abbasi2023_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 22:09 UTC</sub>
