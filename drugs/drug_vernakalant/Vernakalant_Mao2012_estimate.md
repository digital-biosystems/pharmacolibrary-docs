<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;vernakalant&quot;,&quot;href&quot;:&quot;drugs/drug_vernakalant/&quot;},{&quot;label&quot;:&quot;Mao_2012 \u00b7 estimate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Vernakalant_Mao2012_estimate&quot;,&quot;label&quot;:&quot;Mao_2012_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vernakalant/Vernakalant_Mao2012_estimate.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# vernakalant — `Vernakalant_Mao2012_estimate`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.308). The first reading is what the record holds.">cross-check: partial</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of cl: this record has 0.20, the second reading none; it also differs on 8 more fields. That field does not shape the model.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Mao ZL et al., Population pharmacokinetics of vernakal…, Journal of clinical pharmac… (2012)
  ·  DOI: [10.1177/0091270011408425](https://doi.org/10.1177/0091270011408425)

## Model component
<dbs-pgx drug="vernakalant" model-id="Vernakalant_Mao2012_estimate" status="extracted" stale="false" population="patients with atrial fibrillation or atrial flutter and healthy volunteers" measured-compound="vernakalant" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameters:** 7 extracted.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL, L/h/kg | `Q22` · CL | 0.20 | L/h/kg | 3.88888888888889e-06 | [l] / [[h] · [kg]] | not captured | exact (1.0) | Mao_2012_table_3:row1:col3, Mao_2012_table_3:row2:col3, Mao_2012_table_3:row3:col3, Mao_2012_table_3:row4:col3 | — | not captured |
| Q, L/h/kg | `Q30` · Q | 2.63 | L/h/kg | 5.113888888888889e-05 | [l] / [[h] · [kg]] | not captured | exact (1.0) | Mao_2012_table_3:row5:col3, Mao_2012_table_3:row6:col3 | — | not captured |
| Vc, L/kg | `Q63` · V1 | 0.51 | L/kg | 0.0357 | [l] / [kg] | not captured | exact (1.0) | Mao_2012_table_3:row7:col3 | — | not captured |
| Vp, L/kg | `Q64` · V2 | 1.04 | L/kg | 0.0728 | [l] / [kg] | not captured | exact (1.0) | Mao_2012_table_3:row8:col3 | — | not captured |
| Distribution half-life, h | `Q59` · t1/2α | 0.16 | h | 576.0 | [h] | not captured | llm (0.6) | Mao_2012_table_4:row0:col3 | — | not captured |
| Terminal half-life, h | `Q57` · t1/2z | 3.45 | h | 12420.0 | [h] | not captured | llm (0.6) | Mao_2012_table_4:row4:col3 | — | not captured |
| Cmax, ng/mL | `Q32` · Cmax | 4303 | ng/mL | not captured | [ng] / [ml] | not captured | exact (1.0) | Mao_2012_table_4:row8:col3, Mao_2012_table_4:row12:col3 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q22 ('CL, L/h', value '16.40') — already have one for this compound
- dropped duplicate Q30 ('Q, L/h', value '210.4') — already have one for this compound
- dropped duplicate Q63 ('Vc, L', value '40.94') — already have one for this compound
- dropped duplicate Q64 ('Vp, L', value '83.11') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=vernakalant
- population split: 'estimate' subgroup of Mao_2012 (paper reports 2 populations: estimate, parameter estimate ± se)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2, 3, 4
- unparsed cell Mao_2012_table_2:row0:col2 = '−1.120 to −0.980'
- unparsed cell Mao_2012_table_2:row1:col2 = '−0.757 to −0.583'
- unparsed cell Mao_2012_table_2:row2:col2 = '−0.015 to 0.091'
- unparsed cell Mao_2012_table_2:row3:col2 = '0.099 to 0.483'
- unparsed cell Mao_2012_table_2:row4:col2 = '0.270 to 0.674'
- unparsed cell Mao_2012_table_2:row5:col2 = '0.082 to 0.230'
- unparsed cell Mao_2012_table_2:row6:col2 = '−0.654 to −0.416'
- unparsed cell Mao_2012_table_2:row7:col2 = '−0.440 to −0.128'
- unparsed cell Mao_2012_table_2:row8:col2 = '−0.508 to −0.182'
- unparsed cell Mao_2012_table_2:row9:col2 = '0.313 to 1.039'
- unparsed cell Mao_2012_table_2:row10:col2 = '0.120 to 0.198'
- unparsed cell Mao_2012_table_2:row11:col2 = '0.101 to 0.267'
- unparsed cell Mao_2012_table_2:row12:col2 = '0.000 to 0.085'
- unparsed cell Mao_2012_table_2:row13:col2 = '−0.069 to 0.165'
- unparsed cell Mao_2012_table_2:row14:col2 = '0.310 to 0.582'
- unparsed cell Mao_2012_table_2:row15:col2 = '−0.052 to 0.084'
- unparsed cell Mao_2012_table_2:row16:col2 = '−0.103 to 0.339'
- unparsed cell Mao_2012_table_2:row17:col2 = '0.077 to 0.165'
- unparsed cell Mao_2012_table_2:row18:col2 = '0.129 to 0.277'
- unparsed cell Mao_2012_table_2:row19:col2 = '0.286 to 0.674'
- unparsed cell Mao_2012_table_2:row20:col2 = '0.037 to 0.074'
- unparsed cell Mao_2012_table_2:row21:col2 = '0.061 to 0.097'
- unparsed cell Mao_2012_table_4:row8:col4 = '1290-11 529'
- unparsed cell Mao_2012_table_4:row12:col4 = '1649-11 546'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | partly confirmed | 0.308 (4/13 fields) | 9 |

<details><summary>9 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[cl]` | 0.20 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[cmax]` | 4303 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[distribution half-life]` | 0.16 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[q]` | 2.63 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[steady‐state volume of distribution]` | not captured | 1.55 | only_one_extracted |
| `gpt-oss:120b` | `parameters[systemic clearance]` | not captured | 0.35 | only_one_extracted |
| `gpt-oss:120b` | `parameters[terminal half-life]` | 3.45 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[vc]` | 0.51 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[vp]` | 1.04 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_base_Q22 | fail | 0.2 | 0.41 | 2.05 | 0.05 | footnote reference category |
| C2_base_Q30 | fail | 2.63 | 1.34 | 0.5095 | 0.05 | footnote reference category |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Mao_2012_table_3:row1:col3', 'Mao_2012_table_3:row2:col3', 'Mao_2012_table_3:row3:col3', 'Mao_2012_table_3:row4:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Mao_2012_table_3:row5:col3', 'Mao_2012_table_3:row6:col3'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Mao_2012_table_4:row8:col3', 'Mao_2012_table_4:row12:col3'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Mao_2012_table_4:row4:col3'] |
| C5_dimension_Q59 | pass | [time] | not captured | not captured | not captured | ['Mao_2012_table_4:row0:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Mao_2012_table_3:row7:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Mao_2012_table_3:row8:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.2 | not captured | not captured | ['Mao_2012_table_3:row1:col3', 'Mao_2012_table_3:row2:col3', 'Mao_2012_table_3:row3:col3', 'Mao_2012_table_3:row4:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 14 L/h | not captured | not captured | ['Mao_2012_table_3:row1:col3', 'Mao_2012_table_3:row2:col3', 'Mao_2012_table_3:row3:col3', 'Mao_2012_table_3:row4:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 35.7 L | not captured | not captured | ['Mao_2012_table_3:row7:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 72.8 L | not captured | not captured | ['Mao_2012_table_3:row8:col3'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_vernakalant/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Mao_2012` / `Mao_2012::estimate`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_vernakalant/Vernakalant_Mao2012_estimate/Vernakalant_Mao2012_estimate_modelica.zip" download>Vernakalant_Mao2012_estimate_modelica.zip</a> <span class="pk-size">(3.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_vernakalant/Vernakalant_Mao2012_estimate/Vernakalant_Mao2012_estimate_fmi.zip" download>Vernakalant_Mao2012_estimate_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_vernakalant/Vernakalant_Mao2012_estimate/Vernakalant_Mao2012_estimate_matlab.zip" download>Vernakalant_Mao2012_estimate_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_vernakalant/Vernakalant_Mao2012_estimate/Vernakalant_Mao2012_estimate_matlab_simbio.zip" download>Vernakalant_Mao2012_estimate_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_vernakalant/Vernakalant_Mao2012_estimate/Vernakalant_Mao2012_estimate_sbml.zip" download>Vernakalant_Mao2012_estimate_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_vernakalant/Vernakalant_Mao2012_estimate/Vernakalant_Mao2012_estimate_cellml.zip" download>Vernakalant_Mao2012_estimate_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_2C.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_vernakalant/Vernakalant_Mao2012_estimate/Vernakalant_Mao2012_estimate.svg" alt="Vernakalant_Mao2012_estimate diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v26.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 140 mg infusion over 10 min, single dose. Doses in the paper: 140, 210 mg.

<dbs-fmusim paramsurl="drugs/drug_vernakalant/Vernakalant_Mao2012_estimate/Vernakalant_Mao2012_estimate_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_vernakalant/Vernakalant_Mao2012_estimate/Vernakalant_Mao2012_estimate_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_2C` · parameters `Vernakalant_Mao2012_estimate_params.json` · controls `Vernakalant_Mao2012_estimate_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-09 00:20 UTC</sub>
