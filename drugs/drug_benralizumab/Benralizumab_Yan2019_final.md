<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03D&quot;,&quot;href&quot;:&quot;atc/R03D.md&quot;},{&quot;label&quot;:&quot;benralizumab&quot;,&quot;href&quot;:&quot;drugs/drug_benralizumab/&quot;},{&quot;label&quot;:&quot;Yan_2019 \u00b7 final&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Benralizumab_Cheung2023_reference&quot;,&quot;label&quot;:&quot;Cheung_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_benralizumab/Benralizumab_Cheung2023_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Benralizumab_Yan2019_final&quot;,&quot;label&quot;:&quot;Yan_2019_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_benralizumab/Benralizumab_Yan2019_final.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# benralizumab — `Benralizumab_Yan2019_final`

> ## <span class="pk-badge pk-badge--green">extracted</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Yan L et al., Population Pharmacokinetic Modeling of…, Clinical pharmacokinetics (2019)
  ·  DOI: [10.1007/s40262-019-00738-4](https://doi.org/10.1007/s40262-019-00738-4)

## Model component
<dbs-pgx drug="benralizumab" model-id="Benralizumab_Yan2019_final" status="extracted" stale="false" population="adult and adolescent patients with asthma" measured-compound="benralizumab" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameters:** 7 extracted, plus 3 covariate effects.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL, L/day | `Q22` · CL | 0.291 | L/day | 3.3680555555555554e-09 | [l] / [d] | not captured | exact (1.0) | Tab5:row2:col3, Tab5:row2:col4 | — | not captured |
| Vc, L | `Q63` · V1 | 3.13 | L | 0.00313 | [l] | not captured | exact (1.0) | Tab5:row5:col3, Tab5:row5:col4 | — | not captured |
| Q, L/day | `Q30` · Q | 0.738 | L/day | 8.541666666666667e-09 | [l] / [d] | not captured | exact (1.0) | Tab5:row7:col3, Tab5:row7:col4 | — | not captured |
| Vp, L | `Q64` · V2 | 2.52 | L | 0.00252 | [l] | not captured | exact (1.0) | Tab5:row9:col3, Tab5:row9:col4 | — | not captured |
| ka, half-life; days | `Q95` · t1/2ka | 3.54 | days | 305856.0 | h | not captured | llm_corrected (0.6) | Tab5:row11:col3, Tab5:row11:col4 | — | not captured |
| F | `Q40` · Fab | 0.589 | Model 9 | not captured | not captured | not captured | exact (1.0) | Tab5:row12:col3, Tab5:row12:col4 | — | not captured |
| Change in F with study CP220, fraction | `Q87` · Frel | 0.490 | Model 9 | not captured | [m] · [odel9] | not captured | llm (0.6) | Tab5:row13:col3, Tab5:row13:col4 | — | not captured |
| theta_q319_body_weight_power | `Q900` · theta_q319_body_weight_power | 0.807 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab5:row3:col3, Tab5:row3:col4 | — | not captured |
| theta_q319_body_weight_power | `Q900` · theta_q319_body_weight_power | 0.803 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab5:row6:col3, Tab5:row6:col4 | — | not captured |
| theta_v2_body_weight_power | `Q900` · theta_v2_body_weight_power | 0.528 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab5:row10:col3, Tab5:row10:col4 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ηCL, %CV' routed out of structural estimates ('IIV')
- table section iiv: 'ηVc, %CV' routed out of structural estimates ('IIV')
- table section iiv: 'ηQ, %CV' routed out of structural estimates ('IIV')
- table section iiv: 'ηVp, %CV' routed out of structural estimates ('IIV')
- table section iiv: 'ηka (half-life), %CV' routed out of structural estimates ('IIV')
- table section iiv: 'ηF, %CV' routed out of structural estimates ('IIV')
- table section iiv: 'ηF (study CP220), %CV' routed out of structural estimates ('IIV')
- table section residual_error: 'Proportional error, %CV' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Proportional error (study CP220), %CV' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Proportional error (studies SIROCCO, CALIMA, ZONDAa, BISE), %CV' routed out of structural estimates ('Residual variability')
- dropped unlinked row (NIL): 'ADAs on CL, fraction' — extend the ontology if this is a real PK parameter (source ['Tab5:row4:col3', 'Tab5:row4:col4'])
- dropped unlinked row (NIL): 'Body weight on Q, power' — extend the ontology if this is a real PK parameter (source ['Tab5:row8:col3'])
- unit_dimension_unknown: 'Model 9' (t1/2ka )
- unit_dimension_unknown: 'Model 9' (Frel)
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'ka, half-life; days' → days (from the paper text: "Text states 'the absorption half-life of benralizumab was 3.54 days' and 'an estimated absorption half-life of 3.5 days ")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=benralizumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- model-stage split: 'final updated model (model 9)' is the final model of Yan_2019 (paper reports 2 stages: base model (model 5), final updated model (model 9)); same population, different model-building step
- molar mass: none found for 'benralizumab' — its concentrations stay mass-only

**Extraction notes:**
- LLM selected parameter table(s) 5

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab5:row2:col3', 'Tab5:row2:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab5:row7:col3', 'Tab5:row7:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab5:row5:col3', 'Tab5:row5:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab5:row9:col3', 'Tab5:row9:col4'] |
| C5_dimension_Q95 | pass | [time] | not captured | not captured | not captured | ['Tab5:row11:col3', 'Tab5:row11:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.291 | not captured | not captured | ['Tab5:row2:col3', 'Tab5:row2:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0121 L/h | not captured | not captured | ['Tab5:row2:col3', 'Tab5:row2:col4'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.13 L | not captured | not captured | ['Tab5:row5:col3', 'Tab5:row5:col4'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.52 L | not captured | not captured | ['Tab5:row9:col3', 'Tab5:row9:col4'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_benralizumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Yan_2019` / `Yan_2019::final`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_benralizumab/Benralizumab_Yan2019_final/Benralizumab_Yan2019_final_modelica.zip" download>Benralizumab_Yan2019_final_modelica.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_benralizumab/Benralizumab_Yan2019_final/Benralizumab_Yan2019_final_fmi.zip" download>Benralizumab_Yan2019_final_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_benralizumab/Benralizumab_Yan2019_final/Benralizumab_Yan2019_final_matlab.zip" download>Benralizumab_Yan2019_final_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_benralizumab/Benralizumab_Yan2019_final/Benralizumab_Yan2019_final_matlab_simbio.zip" download>Benralizumab_Yan2019_final_matlab_simbio.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_benralizumab/Benralizumab_Yan2019_final/Benralizumab_Yan2019_final_sbml.zip" download>Benralizumab_Yan2019_final_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_benralizumab/Benralizumab_Yan2019_final/Benralizumab_Yan2019_final_cellml.zip" download>Benralizumab_Yan2019_final_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_2C.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_benralizumab/Benralizumab_Yan2019_final/Benralizumab_Yan2019_final.svg" alt="Benralizumab_Yan2019_final diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v26.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 2 mg infusion over 10 min, single dose. Doses in the paper: 2, 30, 100, 200 mg.

<dbs-fmusim paramsurl="drugs/drug_benralizumab/Benralizumab_Yan2019_final/Benralizumab_Yan2019_final_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_benralizumab/Benralizumab_Yan2019_final/Benralizumab_Yan2019_final_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_2C` · parameters `Benralizumab_Yan2019_final_params.json` · controls `Benralizumab_Yan2019_final_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-08 00:22 UTC</sub>
