<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;sodium salicylate&quot;,&quot;href&quot;:&quot;drugs/drug_sodium_salicylate/&quot;},{&quot;label&quot;:&quot;Lowenthal_1974 \u00b7 six_anephric_patients&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;SodiumSalicylate_Mathurkar2018_reference&quot;,&quot;label&quot;:&quot;Mathurkar_2018_reference&quot;,&quot;href&quot;:&quot;drugs/drug_sodium_salicylate/SodiumSalicylate_Mathurkar2018_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SodiumSalicylate_Lowenthal1974_four_normal_subjects&quot;,&quot;label&quot;:&quot;Lowenthal_1974_four_normal_subjects&quot;,&quot;href&quot;:&quot;drugs/drug_sodium_salicylate/SodiumSalicylate_Lowenthal1974_four_normal_subjects.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SodiumSalicylate_Lowenthal1974_six_anephric_patients&quot;,&quot;label&quot;:&quot;Lowenthal_1974_six_anephric_patients&quot;,&quot;href&quot;:&quot;drugs/drug_sodium_salicylate/SodiumSalicylate_Lowenthal1974_six_anephric_patients.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sodium salicylate — `SodiumSalicylate_Lowenthal1974_six_anephric_patients`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.444). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

### Reviewer guidance

**Why:** T1_t_half_terminal
**Second reading:** `gpt-oss:120b` read this paper differently on `screen.dose_compound` (sodium salicylate vs sodium_salicylate) and 4 more field(s) — a structural parameter, so the record is disputed.
**How to address:** Open the paper's reported table and confirm the target value and its units.
<sub>owner: **scholar**</sub>

> **Dose compound ≠ measured compound:** dosed `sodium salicylate`, measured `salicylic acid`.

## Citation
Lowenthal DT; Briggs WA; Levy G et al. (1974). The Journal of clinical investigation 54
  ·  DOI: [10.1172/JCI107865](https://doi.org/10.1172/JCI107865)

## Model component
<dbs-pgx drug="sodium salicylate" model-id="SodiumSalicylate_Lowenthal1974_six_anephric_patients" status="needs_review" stale="false" population="anephric patients" measured-compound="salicylic acid" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Vo, liter | `Q61` · V | 5.01 | liter | 0.00501 | [l] | not captured | llm (0.6) | Lowenthal_1974_table_3:row5:col1 | — | not captured |
| t½ (β), min | `Q60` · t1/2β | 316 | min | 18960.0 | [min] | not captured | llm (0.6) | Lowenthal_1974_table_3:row7:col1 | — | not captured |
| clearance | `Q22` · CL | 0.04 | L/h/kg | 7.777777777777778e-07 | L/h | not captured | review_gapfill (0.7) | Mathurkar_2018:review | — | not captured |
| Ka | `Q49` · kabs | 0.64 | 1/h | 0.00017777777777777779 | 1/h | not captured | review_gapfill (0.7) | Mathurkar_2018:review | — | not captured |
| lag time | `Q83` · tlag | 0.42 | h | 1512.0 | h | not captured | review_gapfill (0.7) | Somani_2016:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F']

**Interpretation flags:**
- dropped duplicate Q61 ('Vd (area), liter', value '9.26') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=salicylic acid
- population split: 'six anephric patients' subgroup of Lowenthal_1974 (paper reports 2 populations: four normal subjects*, six anephric patients)
- gap-filled Q22 (CL) from Mathurkar_2018's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Mathurkar_2018's review values (primary lacked it)
- gap-filled Q83 (tlag) from Somani_2016's review values (primary lacked it)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2, 3
- unparsed cell Lowenthal_1974_table_3:row5:col3 = '&gt;0.7'
- unparsed cell Lowenthal_1974_table_3:row6:col3 = '&gt;0.8'
- unparsed cell Lowenthal_1974_table_3:row7:col3 = '&gt;0.1'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.444 (4/9 fields) | 5 |

<details><summary>5 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[clearance]` | 0.04 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka]` | 0.64 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[lag time]` | 0.42 | not captured | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | sodium salicylate | sodium_salicylate | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | salicylic acid | sodium_salicylate | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Mathurkar_2018:review'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Mathurkar_2018:review'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['Lowenthal_1974_table_3:row7:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Lowenthal_1974_table_3:row5:col1'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Somani_2016:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.04 | not captured | not captured | ['Mathurkar_2018:review'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 2.8 L/h | not captured | not captured | ['Mathurkar_2018:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 5.01 L | not captured | not captured | ['Lowenthal_1974_table_3:row5:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=salicylic acid) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 4 scholar param(s) emitted or defaulted | 4 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |
| T1_t_half_terminal | reference | fail | 5.0 | 1.2927089447545492 | 0.2585 | min→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 5.266666666666667 | 1.2927089447545492 | 0.2455 | min→SI vs simulated h |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_sodium_salicylate/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Lowenthal_1974` / `Lowenthal_1974::six_anephric_patients`)
- model: `../../../knowledgebase/drugs/drug_sodium_salicylate/models/modelica/SodiumSalicylate_Lowenthal1974_six_anephric_patients.mo`
- deviation: `../../../knowledgebase/drugs/drug_sodium_salicylate/models/modelica/SodiumSalicylate_Lowenthal1974_six_anephric_patients.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_sodium_salicylate/models/modelica/SodiumSalicylate_Lowenthal1974_six_anephric_patients.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_sodium_salicylate/SodiumSalicylate_Lowenthal1974_six_anephric_patients/SodiumSalicylate_Lowenthal1974_six_anephric_patients_modelica.zip" download>SodiumSalicylate_Lowenthal1974_six_anephric_patients_modelica.zip</a> <span class="pk-size">(4.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_sodium_salicylate/SodiumSalicylate_Lowenthal1974_six_anephric_patients/SodiumSalicylate_Lowenthal1974_six_anephric_patients_matlab.zip" download>SodiumSalicylate_Lowenthal1974_six_anephric_patients_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_sodium_salicylate/SodiumSalicylate_Lowenthal1974_six_anephric_patients/SodiumSalicylate_Lowenthal1974_six_anephric_patients_matlab_simbio.zip" download>SodiumSalicylate_Lowenthal1974_six_anephric_patients_matlab_simbio.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_sodium_salicylate/SodiumSalicylate_Lowenthal1974_six_anephric_patients/SodiumSalicylate_Lowenthal1974_six_anephric_patients_sbml.zip" download>SodiumSalicylate_Lowenthal1974_six_anephric_patients_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_sodium_salicylate/SodiumSalicylate_Lowenthal1974_six_anephric_patients/SodiumSalicylate_Lowenthal1974_six_anephric_patients_cellml.zip" download>SodiumSalicylate_Lowenthal1974_six_anephric_patients_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_1C_enteral.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_sodium_salicylate/SodiumSalicylate_Lowenthal1974_six_anephric_patients/SodiumSalicylate_Lowenthal1974_six_anephric_patients.svg" alt="SodiumSalicylate_Lowenthal1974_six_anephric_patients diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v25.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/drug_sodium_salicylate/SodiumSalicylate_Lowenthal1974_six_anephric_patients/SodiumSalicylate_Lowenthal1974_six_anephric_patients_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_sodium_salicylate/SodiumSalicylate_Lowenthal1974_six_anephric_patients/SodiumSalicylate_Lowenthal1974_six_anephric_patients_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_1C_enteral` · parameters `SodiumSalicylate_Lowenthal1974_six_anephric_patients_params.json` · controls `SodiumSalicylate_Lowenthal1974_six_anephric_patients_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-21 03:09 UTC</sub>
