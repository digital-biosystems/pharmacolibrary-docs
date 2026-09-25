<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J04A&quot;,&quot;href&quot;:&quot;atc/J04A.md&quot;},{&quot;label&quot;:&quot;4-aminosalicylic acid&quot;,&quot;href&quot;:&quot;drugs/drug_4_aminosalicylic_acid/&quot;},{&quot;label&quot;:&quot;Sy_2015 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;D_4AminosalicylicAcid_de2014_reference&quot;,&quot;label&quot;:&quot;de_2014_reference&quot;,&quot;href&quot;:&quot;drugs/drug_4_aminosalicylic_acid/D_4AminosalicylicAcid_de2014_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;D_4AminosalicylicAcid_Sy2015_reference&quot;,&quot;label&quot;:&quot;Sy_2015_reference&quot;,&quot;href&quot;:&quot;drugs/drug_4_aminosalicylic_acid/D_4AminosalicylicAcid_Sy2015_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# 4-aminosalicylic acid — `D_4AminosalicylicAcid_Sy2015_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

> **Caveat** (`covariates_not_exercised`): the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.

### Reviewer guidance

**Why:** T1_cmax
**Second reading:** `gpt-oss:120b` read this paper differently on `parameters[% change in oral clearance associated with efavirenz]` (not captured vs 25) and 1 more field(s) — a structural parameter, so the record is disputed.
**How to address:** Open the paper's reported table and confirm the target value and its units.
<sub>owner: **scholar**</sub>

## Citation
not matched (stem Sy_2015)

## Model component
<dbs-pgx drug="4-aminosalicylic acid" model-id="D_4AminosalicylicAcid_Sy2015_reference" status="needs_review" stale="false" population="tuberculosis patients" measured-compound="para-aminosalicylic acid" parameterization="apparent" topology="1C"></dbs-pgx>

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F, liters/h | `Q27` · CL/F | 8.14 | liters/h | 2.2611111111111117e-06 | [l] / [h] | 11.3 | exact (1.0) | tab_2:row3:col1 | — | not captured |
| Apparent V/F, liters | `Q76` · V/F | 48.9 | liters | 0.0489 | [l] | 6.9 | llm_confirmed (0.6) | tab_2:row4:col1 | — | not captured |
| K tr , h Ϫ1 | `Q306` · ktr | 0.617 | h Ϫ1 | 0.0001713888888888889 | [1] / [h] | 10.2 | space_fold (0.95) | tab_2:row5:col1 | — | not captured |
| No. of transit compartments | `Q311` · n_transit | 3 | not captured | not captured | not captured | not captured | llm_corrected (0.6) | tab_2:row6:col1 | — | not captured |
| gender_on_cl_f | `Q900` · gender_on_cl_f | 0.315 | not captured | not captured | not captured | 40.3 | not captured (not captured) | tab_2:row19:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `absorption_approximation`: transit absorption (ktr=0.0001714/s, n=3) folded to first-order ka = ktr/(n+1) = 4.285e-05/s — same mean absorption time, no delay phase

**Interpretation flags:**
- dropped duplicate Q27 ('CL/F', value '32.2') — already have one for this compound
- dropped duplicate Q76 ('V/F', value '25.2') — already have one for this compound
- dropped duplicate Q306 ('Ktr', value '44.7') — already have one for this compound
- dropped unlinked row (NIL): 'Efavirenz on CL/F' — extend the ontology if this is a real PK parameter (source ['tab_2:row18:col1'])
- covariate level 'Gender on CL/F' → Q900:gender_on_cl_f = 0.315 (linear_fractional on Q27)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=para-aminosalicylic acid

**Extraction notes:**
- unparsed cell tab_2:row20:col1 = 'Ϫ0.19 (56.3)'
- unparsed cell tab_2:row21:col1 = 'Ϫ0.644 (26.2)'
- unparsed cell tab_2:row22:col1 = 'Ϫ0.32 (35.0)'
- unparsed cell tab_2:row23:col1 = 'Ϫ92.633'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.6:27b-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.667 (4/6 fields) | 2 |

<details><summary>2 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[% change in oral clearance associated with efavirenz]` | not captured | 25 | only_one_extracted |
| `gpt-oss:120b` | `parameters[effect of efavirenz on oral clearance]` | 25 | not captured | only_one_extracted |

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
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_2:row3:col1'] |
| C5_dimension_Q306 | pass | 1 / [time] | not captured | not captured | not captured | ['tab_2:row5:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_2:row4:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 8.14 L/h | not captured | not captured | ['tab_2:row3:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 48.9 L | not captured | not captured | ['tab_2:row4:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=para-aminosalicylic acid) | C_central | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 2 scholar param(s) emitted or defaulted | 2 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | not captured | 0.0007238150855741132 | not captured | non-numeric value |
| T1_cmax | reference | fail | 9.999999999999999e-06 | 0.0007238150855741132 | 72.3815 | ng/ml→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.000135 | 0.0007238150855741132 | 5.3616 | ng/ml→SI vs simulated kg/m3 |
| T1_cmax | reference | skipped | 22.4 | 0.0007238150855741132 | not captured | unresolved concentration unit (exp 'mg/liter', sim 'kg/m3') |
| T1_cmax | reference | skipped | 51.6 | 0.0007238150855741132 | not captured | unresolved concentration unit (exp 'mg/liter', sim 'kg/m3') |
| T1_cmax | reference | skipped | 14.3 | 0.0007238150855741132 | not captured | unresolved concentration unit (exp 'mg/liter', sim 'kg/m3') |
| T1_cmax | reference | skipped | 125 | 0.0007238150855741132 | not captured | unresolved concentration unit (exp 'mg/liter', sim 'kg/m3') |
| T1_cmax | reference | skipped | -3.9 | 0.0007238150855741132 | not captured | unresolved concentration unit (exp 'mg/liter', sim 'kg/m3') |
| T1_cmax | reference | skipped | 0.873 | 0.0007238150855741132 | not captured | unresolved concentration unit (exp '', sim 'kg/m3') |
| T1_cmax | reference | skipped | 0.873 | 0.0007238150855741132 | not captured | unresolved concentration unit (exp '', sim 'kg/m3') |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_4_aminosalicylic_acid/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Sy_2015` / `Sy_2015::reference`)
- model: `../../../knowledgebase/drugs/drug_4_aminosalicylic_acid/models/modelica/D_4AminosalicylicAcid_Sy2015_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_4_aminosalicylic_acid/models/modelica/D_4AminosalicylicAcid_Sy2015_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_4_aminosalicylic_acid/models/modelica/D_4AminosalicylicAcid_Sy2015_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_4_aminosalicylic_acid/D_4AminosalicylicAcid_Sy2015_reference/D_4AminosalicylicAcid_Sy2015_reference_modelica.zip" download>D_4AminosalicylicAcid_Sy2015_reference_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_4_aminosalicylic_acid/D_4AminosalicylicAcid_Sy2015_reference/D_4AminosalicylicAcid_Sy2015_reference_fmi.zip" download>D_4AminosalicylicAcid_Sy2015_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_4_aminosalicylic_acid/D_4AminosalicylicAcid_Sy2015_reference/D_4AminosalicylicAcid_Sy2015_reference_matlab.zip" download>D_4AminosalicylicAcid_Sy2015_reference_matlab.zip</a> <span class="pk-size">(3.6 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_4_aminosalicylic_acid/D_4AminosalicylicAcid_Sy2015_reference/D_4AminosalicylicAcid_Sy2015_reference_matlab_simbio.zip" download>D_4AminosalicylicAcid_Sy2015_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_4_aminosalicylic_acid/D_4AminosalicylicAcid_Sy2015_reference/D_4AminosalicylicAcid_Sy2015_reference_sbml.zip" download>D_4AminosalicylicAcid_Sy2015_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_4_aminosalicylic_acid/D_4AminosalicylicAcid_Sy2015_reference/D_4AminosalicylicAcid_Sy2015_reference_cellml.zip" download>D_4AminosalicylicAcid_Sy2015_reference_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_1C_enteral.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_4_aminosalicylic_acid/D_4AminosalicylicAcid_Sy2015_reference/D_4AminosalicylicAcid_Sy2015_reference.svg" alt="D_4AminosalicylicAcid_Sy2015_reference diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v25.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/drug_4_aminosalicylic_acid/D_4AminosalicylicAcid_Sy2015_reference/D_4AminosalicylicAcid_Sy2015_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_4_aminosalicylic_acid/D_4AminosalicylicAcid_Sy2015_reference/D_4AminosalicylicAcid_Sy2015_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_1C_enteral` · parameters `D_4AminosalicylicAcid_Sy2015_reference_params.json` · controls `D_4AminosalicylicAcid_Sy2015_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-07-15 09:22 UTC</sub>
