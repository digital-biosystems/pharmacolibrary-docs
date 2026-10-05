<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07E&quot;,&quot;href&quot;:&quot;atc/A07E.md&quot;},{&quot;label&quot;:&quot;betamethasone&quot;,&quot;href&quot;:&quot;drugs/drug_betamethasone/&quot;},{&quot;label&quot;:&quot;Krzyzanski_2021_2 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Betamethasone_Krzyzanski2021v2_reference&quot;,&quot;label&quot;:&quot;Krzyzanski_2021_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_betamethasone/Betamethasone_Krzyzanski2021v2_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# betamethasone — `Betamethasone_Krzyzanski2021v2_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.611). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

### Reviewer guidance

**The betamethasone record was rejected because the absorption half-life parameter t1/2ka is dimensionally inconsistent: it is reported as 0.00638 with unit 1/h, a rate unit, while a half-life must carry units of time.**

In the Krzyzanski_2021_2 model for betamethasone in healthy nonpregnant Indian women, the parameter labeled kaIMa is documented as the half-life of the absorption phase, which should be expressed in hours, but its reported unit is 1/h, matching a rate constant rather than a half-life. This dimension mismatch on a structural parameter triggered the rejection. Additionally, the unit of this parameter could not be converted to SI, so it reached the model builder without an SI value. The remaining parameters (CLm/F 9.29 L/h, V/F 51.3 L, kabs 0.460 1/h, CL/F 0.538 L/h, FR 1.04, Fab 0.819) show no such conflict. Extracted — betamethasone: CLm/F 9.29 L/h, V/F 51.3 L, kabs 0.46 1/h, t1/2ka 0.00638 1/h, FR 1.04, Fab 0.819, CL/F 0.538 L/h.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has betamethasone, the second reading unknown; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-09-28 14:36:15.622973+00:00) predates the upstream re-run (2026-10-04 19:13:38.526768+00:00). Current validate status: `extracted`.

## Citation
Krzyzanski W et al., Population pharmacokinetic modeling of…, Journal of pharmacokinetics… (2021)
  ·  DOI: [10.1007/s10928-020-09730-z](https://doi.org/10.1007/s10928-020-09730-z)

## Model component
<dbs-pgx drug="betamethasone" model-id="Betamethasone_Krzyzanski2021v2_reference" status="extracted" stale="true" population="healthy nonpregnant Indian women" measured-compound="betamethasone" parameterization="apparent" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 6 extracted.

**Parameterization:** CL/F, CLm/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/FIM, L/h | `Q351` · CLm/F | 9.29 | L/h | 2.5805555555555555e-06 | [l] / [h] | 8.6 | llm_confirmed (0.6) | Tab4:row1:col2, Krzyzanski_2021_2_table_3:row0:col2 | — | not captured |
| Vp/FIM, L | `Q76` · V/F | 51.3 | L | 0.0513 | [l] | 3.2 | llm (0.6) | Tab4:row2:col2, Krzyzanski_2021_2_table_3:row1:col2 | — | not captured |
| kaIM, 1/h | `Q49` · kabs | 0.460 | 1/h | 0.0001277777777777778 | [1] / [h] | 3.6 | llm (0.6) | Tab4:row3:col2, Krzyzanski_2021_2_table_3:row2:col2 | — | not captured |
| Fr | `Q43` · FR | 1.04 | not captured | not captured | not captured | 9.7 | exact (1.0) | Tab4:row6:col2, Krzyzanski_2021_2_table_3:row4:col2 | — | not captured |
| Fra | `Q40` · Fab | 0.819 | not captured | not captured | not captured | 9.1 | llm (0.6) | Tab4:row7:col2 | — | not captured |
| CLD/FIM, L/h | `Q27` · CL/F | 0.538 | L/h | 1.4944444444444445e-07 | [l] / [h] | 4.1 | llm (0.6) | Tab4:row8:col2, Krzyzanski_2021_2_table_3:row5:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped duplicate Q49 ('kaIMa, 1/h', value '0.00638') — already have one for this compound
- dropped duplicate Q49 ('kaPO, 1/h', value '0.936') — already have one for this compound
- dropped duplicate Q76 ('VT/FIM, L', value '5.06') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=betamethasone

**Extraction notes:**
- unparsed cell Tab4:row1:col3 = '0.0210 (13.9) (14.6)*'
- unparsed cell Tab4:row2:col3 = '0.0188 (10.7) (13.8)*'
- unparsed cell Tab4:row3:col3 = '0.0441 (7.9) (21.2)*'
- unparsed cell Tab4:row4:col3 = '0.147 (2.1) (39.8)*'
- unparsed cell Tab4:row5:col3 = '0.241 (0.8) (52.2)*'
- unparsed cell Tab4:row6:col3 = '0.0182 (8.1) (13.6)*'
- unparsed cell Tab4:row7:col3 = '0.00773 (0.02) (8.8)*'
- unparsed cell Krzyzanski_2021_2_table_3:row0:col3 = '0.0265 (4.7) (16.4)*'
- unparsed cell Krzyzanski_2021_2_table_3:row1:col3 = '0**'
- unparsed cell Krzyzanski_2021_2_table_3:row2:col3 = '0.0633 (29.7) (25.6)*'
- unparsed cell Krzyzanski_2021_2_table_3:row3:col3 = '0.395 (23.6) (69.6)*'
- companion parameter table 3 transcribed (8 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.611 (11/18 fields) | 7 |

<details><summary>7 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [] | [['dexamethasone phosphate', 'dexamethasone', 'hydrolysis'], ['betamethasone phosphate', 'betamethasone', 'hydrolysis'], ['betamethasone acetate', 'betamethasone', 'hydrolysis']] | mismatch |
| `gpt-oss:120b` | `parameters[cl/fim].parameter_id` | Q351 | Q27 | mismatch |
| `gpt-oss:120b` | `parameters[cld/fim]` | 0.538 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[vp/fim].parameter_id` | Q76 | Q82 | mismatch |
| `gpt-oss:120b` | `parameters[vt/fim]` | not captured | 5.06 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | betamethasone | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | betamethasone | unknown | mismatch |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab4:row8:col2', 'Krzyzanski_2021_2_table_3:row5:col2'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab4:row1:col2', 'Krzyzanski_2021_2_table_3:row0:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab4:row3:col2', 'Krzyzanski_2021_2_table_3:row2:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab4:row2:col2', 'Krzyzanski_2021_2_table_3:row1:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.538 L/h | not captured | not captured | ['Tab4:row8:col2', 'Krzyzanski_2021_2_table_3:row5:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 51.3 L | not captured | not captured | ['Tab4:row2:col2', 'Krzyzanski_2021_2_table_3:row1:col2'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_betamethasone/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Krzyzanski_2021_2` / `Krzyzanski_2021_2::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_betamethasone/Betamethasone_Krzyzanski2021v2_reference/Betamethasone_Krzyzanski2021v2_reference_modelica.zip" download>Betamethasone_Krzyzanski2021v2_reference_modelica.zip</a> <span class="pk-size">(4.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_betamethasone/Betamethasone_Krzyzanski2021v2_reference/Betamethasone_Krzyzanski2021v2_reference_matlab.zip" download>Betamethasone_Krzyzanski2021v2_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_betamethasone/Betamethasone_Krzyzanski2021v2_reference/Betamethasone_Krzyzanski2021v2_reference_matlab_simbio.zip" download>Betamethasone_Krzyzanski2021v2_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_betamethasone/Betamethasone_Krzyzanski2021v2_reference/Betamethasone_Krzyzanski2021v2_reference_sbml.zip" download>Betamethasone_Krzyzanski2021v2_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_betamethasone/Betamethasone_Krzyzanski2021v2_reference/Betamethasone_Krzyzanski2021v2_reference_cellml.zip" download>Betamethasone_Krzyzanski2021v2_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_1C_enteral.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_betamethasone/Betamethasone_Krzyzanski2021v2_reference/Betamethasone_Krzyzanski2021v2_reference.svg" alt="Betamethasone_Krzyzanski2021v2_reference diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v26.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 6 mg, single dose, first-order absorption (ka 0.46 /h, F 1). Dose in the paper: 6 mg.

<dbs-fmusim paramsurl="drugs/drug_betamethasone/Betamethasone_Krzyzanski2021v2_reference/Betamethasone_Krzyzanski2021v2_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_betamethasone/Betamethasone_Krzyzanski2021v2_reference/Betamethasone_Krzyzanski2021v2_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_1C_enteral` · parameters `Betamethasone_Krzyzanski2021v2_reference_params.json` · controls `Betamethasone_Krzyzanski2021v2_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-04 19:13 UTC</sub>
