<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;canagliflozin&quot;,&quot;href&quot;:&quot;drugs/drug_canagliflozin/&quot;},{&quot;label&quot;:&quot;Yao_2023 \u00b7 iiv&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Canagliflozin_Yao2023_estimates&quot;,&quot;label&quot;:&quot;Yao_2023_estimates&quot;,&quot;href&quot;:&quot;drugs/drug_canagliflozin/Canagliflozin_Yao2023_estimates.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Canagliflozin_Yao2023_iiv&quot;,&quot;label&quot;:&quot;Yao_2023_iiv&quot;,&quot;href&quot;:&quot;drugs/drug_canagliflozin/Canagliflozin_Yao2023_iiv.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Canagliflozin_Yao2023_reference&quot;,&quot;label&quot;:&quot;Yao_2023_reference&quot;,&quot;href&quot;:&quot;drugs/drug_canagliflozin/Canagliflozin_Yao2023_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# canagliflozin — `Canagliflozin_Yao2023_iiv`

> ## <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.133). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

### Reviewer guidance

**Why:** every check the reviewer could run passed
**Second reading:** `gpt-oss:120b` read this paper differently on `screen.dose_compound` (dapagliflozin, canagliflozin, empagliflozin vs canagliflozin) and 12 more field(s) — a structural parameter, so the record is disputed.
**How to address:** Confirm the model card and promote to 'curated' if it should be an exemplar.
<sub>owner: **curator**</sub>

## Citation
Yao X; Zhou J; Song L; Ren Y; Hu P; Liu D et al. (2023). CPT: pharmacometrics & systems pharmacology 12
  ·  DOI: [10.1002/psp4.12934](https://doi.org/10.1002/psp4.12934)

## Model component
<dbs-pgx drug="canagliflozin" model-id="Canagliflozin_Yao2023_iiv" status="curated_candidate" stale="false" population="healthy subjects and patients with type 2 diabetes" measured-compound="dapagliflozin, canagliflozin, empagliflozin" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h) | `Q22` · CL | 5.69 | L/h | 1.5805555555555558e-06 | [l] / [h] | not captured | exact (1.0) | psp412934-tbl-0001:row2:col4, psp412934-tbl-0001:row11:col4, psp412934-tbl-0001:row18:col4 | — | not captured |
| Vc (L) | `Q63` · V1 | 5.63 | L | 0.00563 | [l] | not captured | exact (1.0) | psp412934-tbl-0001:row3:col4, psp412934-tbl-0001:row12:col4, psp412934-tbl-0001:row19:col4 | — | not captured |
| VT (L) | `Q61` · V | 22.0 | L | 0.022 | [l] | not captured | llm (0.6) | psp412934-tbl-0001:row5:col4, psp412934-tbl-0001:row14:col4, psp412934-tbl-0001:row21:col4 | — | not captured |
| K t (h−1) | `Q47` · kel | 5.67 | h−1 | 0.001575 | [1] / [h] | not captured | llm (0.6) | psp412934-tbl-0001:row6:col4, psp412934-tbl-0001:row15:col4, psp412934-tbl-0001:row22:col4 | — | not captured |
| CLD | `Q30` · Q | 12.8 | not captured | not captured | not captured | not captured | exact (1.0) | psp412934-tbl-0001:row13:col4 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['k12', 'k21']

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=dapagliflozin, canagliflozin, empagliflozin
- population split: 'iiv (%)' subgroup of Yao_2023 (paper reports 2 populations: estimates, iiv (%))

**Extraction notes:**
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.133 (2/15 fields) | 13 |

<details><summary>13 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[cl].rse_percent` | not captured | 6.10 | mismatch |
| `gpt-oss:120b` | `parameters[cl].value` | 5.69 | 4.25 | mismatch |
| `gpt-oss:120b` | `parameters[cld].rse_percent` | not captured | 13.5 | mismatch |
| `gpt-oss:120b` | `parameters[cld].value` | 12.8 | 1.37 | mismatch |
| `gpt-oss:120b` | `parameters[fed]` | not captured | 0.254 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k t].rse_percent` | not captured | 6.90 | mismatch |
| `gpt-oss:120b` | `parameters[k t].value` | 5.67 | 4.13 | mismatch |
| `gpt-oss:120b` | `parameters[vc].rse_percent` | not captured | 9.50 | mismatch |
| `gpt-oss:120b` | `parameters[vc].value` | 5.63 | 30.6 | mismatch |
| `gpt-oss:120b` | `parameters[vt].rse_percent` | not captured | 26.5 | mismatch |
| `gpt-oss:120b` | `parameters[vt].value` | 22.0 | 28.3 | mismatch |
| `gpt-oss:120b` | `screen.dose_compound` | dapagliflozin, canagliflozin, empagliflozin | canagliflozin | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | dapagliflozin, canagliflozin, empagliflozin | canagliflozin | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412934-tbl-0001:row2:col4', 'psp412934-tbl-0001:row11:col4', 'psp412934-tbl-0001:row18:col4'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['psp412934-tbl-0001:row6:col4', 'psp412934-tbl-0001:row15:col4', 'psp412934-tbl-0001:row22:col4'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412934-tbl-0001:row5:col4', 'psp412934-tbl-0001:row14:col4', 'psp412934-tbl-0001:row21:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412934-tbl-0001:row3:col4', 'psp412934-tbl-0001:row12:col4', 'psp412934-tbl-0001:row19:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 5.69 | not captured | not captured | ['psp412934-tbl-0001:row2:col4', 'psp412934-tbl-0001:row11:col4', 'psp412934-tbl-0001:row18:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 5.69 L/h | not captured | not captured | ['psp412934-tbl-0001:row2:col4', 'psp412934-tbl-0001:row11:col4', 'psp412934-tbl-0001:row18:col4'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 22 L | not captured | not captured | ['psp412934-tbl-0001:row5:col4', 'psp412934-tbl-0001:row14:col4', 'psp412934-tbl-0001:row21:col4'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 5.63 L | not captured | not captured | ['psp412934-tbl-0001:row3:col4', 'psp412934-tbl-0001:row12:col4', 'psp412934-tbl-0001:row19:col4'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=dapagliflozin, canagliflozin, empagliflozin) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 5 scholar param(s) emitted or defaulted | 5 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_canagliflozin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Yao_2023` / `Yao_2023::iiv`)
- model: `../../../knowledgebase/drugs/drug_canagliflozin/models/modelica/Canagliflozin_Yao2023_iiv.mo`
- deviation: `../../../knowledgebase/drugs/drug_canagliflozin/models/modelica/Canagliflozin_Yao2023_iiv.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_canagliflozin/models/modelica/Canagliflozin_Yao2023_iiv.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_canagliflozin/Canagliflozin_Yao2023_iiv/Canagliflozin_Yao2023_iiv_modelica.zip" download>Canagliflozin_Yao2023_iiv_modelica.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_canagliflozin/Canagliflozin_Yao2023_iiv/Canagliflozin_Yao2023_iiv_matlab.zip" download>Canagliflozin_Yao2023_iiv_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_canagliflozin/Canagliflozin_Yao2023_iiv/Canagliflozin_Yao2023_iiv_matlab_simbio.zip" download>Canagliflozin_Yao2023_iiv_matlab_simbio.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_canagliflozin/Canagliflozin_Yao2023_iiv/Canagliflozin_Yao2023_iiv_sbml.zip" download>Canagliflozin_Yao2023_iiv_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_canagliflozin/Canagliflozin_Yao2023_iiv/Canagliflozin_Yao2023_iiv_cellml.zip" download>Canagliflozin_Yao2023_iiv_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_2C.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_canagliflozin/Canagliflozin_Yao2023_iiv/Canagliflozin_Yao2023_iiv.svg" alt="Canagliflozin_Yao2023_iiv diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v25.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/drug_canagliflozin/Canagliflozin_Yao2023_iiv/Canagliflozin_Yao2023_iiv_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_canagliflozin/Canagliflozin_Yao2023_iiv/Canagliflozin_Yao2023_iiv_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_2C` · parameters `Canagliflozin_Yao2023_iiv_params.json` · controls `Canagliflozin_Yao2023_iiv_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-15 16:36 UTC</sub>
