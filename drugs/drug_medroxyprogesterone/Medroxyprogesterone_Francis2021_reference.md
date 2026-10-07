<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G03A&quot;,&quot;href&quot;:&quot;atc/G03A.md&quot;},{&quot;label&quot;:&quot;medroxyprogesterone&quot;,&quot;href&quot;:&quot;drugs/drug_medroxyprogesterone/&quot;},{&quot;label&quot;:&quot;Francis_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Medroxyprogesterone_Francis2021_reference&quot;,&quot;label&quot;:&quot;Francis_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_medroxyprogesterone/Medroxyprogesterone_Francis2021_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# medroxyprogesterone — `Medroxyprogesterone_Francis2021_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `depot medroxyprogesterone`, measured `medroxyprogesterone acetate`.

## Citation
Francis J et al., A Semimechanistic Pharmacokinetic Model…, Clinical pharmacology and t… (2021)
  ·  DOI: [10.1002/cpt.2324](https://doi.org/10.1002/cpt.2324)

## Model component
<dbs-pgx drug="medroxyprogesterone" model-id="Medroxyprogesterone_Francis2021_reference" status="extracted" stale="false" population="women with HIV and/or tuberculosis" measured-compound="medroxyprogesterone acetate" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 5 extracted, plus 3 covariate effects.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Clearance (CL) (L/hour) a | `Q22` · CL | 47.2 | L/h | 1.3111111111111113e-05 | L/h | not captured | llm_confirmed (0.6) | cpt2324-tbl-0002:row1:col1 | — | not captured |
| Volume of distribution (L) a | `Q61` · V | 8910 | L | 8.91 | L | not captured | llm_confirmed (0.6) | cpt2324-tbl-0002:row2:col1 | — | not captured |
| fraction_of_medroxyprogesterone_acetate_available_for_immediate_absorption_ffast | `Q900` · fraction_of_medroxyprogesterone_acetate_available_for_immediate_absorption_ffast | 24 | not captured | not captured | not captured | not captured | not captured (not captured) | cpt2324-tbl-0002:row3:col1 | — | not captured |
| Fraction of medroxyprogesterone acetate in delayed‐release crystals (Fslow) (%) (1‐Ffast) | `Q46` · fu | 76 | not captured | not captured | not captured | not captured | llm (0.6) | cpt2324-tbl-0002:row4:col1 | — | not captured |
| First‐order absorption rate constant (Ka) (1/day) | `Q49` · kabs | 0.578 | 1/day | 6.689814814814814e-06 | 1/h | not captured | llm_confirmed (0.6) | cpt2324-tbl-0002:row5:col1 | — | not captured |
| Final release rate constant ‐ Krelease (1/day) | `Q47` · kel | 0.0193 | 1/day | 2.2337962962962964e-07 | 1/h | not captured | llm (0.6) | cpt2324-tbl-0002:row9:col1 | — | not captured |
| theta_q81_category | `Q900` · theta_q81_category | 11.6 | not captured | not captured | not captured | not captured | not captured (not captured) | cpt2324-tbl-0002:row7:col1 | — | not captured |
| theta_q311_category | `Q900` · theta_q311_category | 0.954 | not captured | not captured | not captured | not captured | not captured (not captured) | cpt2324-tbl-0002:row8:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['F', 'Tlag']

**Interpretation flags:**
- column 'typical value' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- covariate level 'Fraction of medroxyprogesterone acetate available for immediate absorption (Ffast) (%)' → Q900:fraction_of_medroxyprogesterone_acetate_available_for_immediate_absorption_ffast = 24 (additive_shift on Q22)
- dropped duplicate Q22 ('Nelfinavir on CL (%)', value '-15.8') — already have one for this compound
- dropped unlinked row (NIL): 'Efavirenz on CL (%)' — extend the ontology if this is a real PK parameter (source ['cpt2324-tbl-0002:row12:col1'])
- dropped duplicate Q22 ('Lopinavir/r on CL (%)', value '-28.7') — already have one for this compound
- dropped duplicate Q22 ('Anti‐TB treatment + Efavirenz on CL (%)', value '+52.4') — already have one for this compound
- routed 'Lopinavir/r on Krelease (%)' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- covariate effect for Q81 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q311 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'Clearance (CL) (L/hour) a' → L/h (from the paper text: "Text states: 'mean value of apparent clearance was 47.2 L/h'")
- implicit units: 'Volume of distribution (L) a' → L (from the popPK convention: 'Volume of distribution is conventionally expressed in liters; value 8910 is consistent with a large volume of distributi')
- implicit units: 'First‐order absorption rate constant (Ka) (1/day)' → 1/day (from the popPK convention: 'Absorption rate constant for a depot injection is conventionally expressed in 1/day given the slow release over weeks; v')
- implicit units: 'Final release rate constant ‐ Krelease (1/day)' → 1/day (from the popPK convention: 'Release rate constant for a depot formulation is conventionally expressed in 1/day; value 0.0193 1/day corresponds to a ')
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (Clearance (CL) (L/hour) a); Q61 (Volume of distribution (L) a)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=medroxyprogesterone acetate
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell cpt2324-tbl-0002:row1:col2 = '43.1; 51.5'
- unparsed cell cpt2324-tbl-0002:row1:col3 = '24.2%+'
- unparsed cell cpt2324-tbl-0002:row1:col4 = '21.5; 27.7'
- unparsed cell cpt2324-tbl-0002:row2:col2 = '7240; 10500'
- unparsed cell cpt2324-tbl-0002:row3:col2 = '20.5; 26.9'
- unparsed cell cpt2324-tbl-0002:row3:col3 = '0.203 b ++'
- unparsed cell cpt2324-tbl-0002:row3:col4 = '0.11; 0.321'
- unparsed cell cpt2324-tbl-0002:row5:col2 = '0.358; 0.871'
- unparsed cell cpt2324-tbl-0002:row7:col2 = '10.3; 13.1'
- unparsed cell cpt2324-tbl-0002:row7:col3 = '45.5%++'
- unparsed cell cpt2324-tbl-0002:row7:col4 = '35.1; 58.6'
- unparsed cell cpt2324-tbl-0002:row8:col2 = '0.503; 1.45'
- unparsed cell cpt2324-tbl-0002:row9:col2 = '0.0168; 0.0223'
- unparsed cell cpt2324-tbl-0002:row9:col3 = '76.9%++'
- unparsed cell cpt2324-tbl-0002:row9:col4 = '69.3; 86.6'
- unparsed cell cpt2324-tbl-0002:row11:col2 = '−5.16; −24.9'
- unparsed cell cpt2324-tbl-0002:row12:col2 = '9.78; 43.2'
- unparsed cell cpt2324-tbl-0002:row13:col2 = '−36.8; −69.5'
- unparsed cell cpt2324-tbl-0002:row14:col2 = '−19.9; −36.3'
- unparsed cell cpt2324-tbl-0002:row15:col2 = '54.5; 184.2'
- unparsed cell cpt2324-tbl-0002:row16:col2 = '0.00409; 0.0284'
- unparsed cell cpt2324-tbl-0002:row17:col2 = '16.5; 18.9'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cpt2324-tbl-0002:row1:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['cpt2324-tbl-0002:row9:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['cpt2324-tbl-0002:row5:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['cpt2324-tbl-0002:row2:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 47.2 | not captured | not captured | ['cpt2324-tbl-0002:row1:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 47.2 L/h | not captured | not captured | ['cpt2324-tbl-0002:row1:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 8.91e+03 L | not captured | not captured | ['cpt2324-tbl-0002:row2:col1'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_medroxyprogesterone/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Francis_2021` / `Francis_2021::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_medroxyprogesterone/Medroxyprogesterone_Francis2021_reference/Medroxyprogesterone_Francis2021_reference_modelica.zip" download>Medroxyprogesterone_Francis2021_reference_modelica.zip</a> <span class="pk-size">(5.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_medroxyprogesterone/Medroxyprogesterone_Francis2021_reference/Medroxyprogesterone_Francis2021_reference_fmi.zip" download>Medroxyprogesterone_Francis2021_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_medroxyprogesterone/Medroxyprogesterone_Francis2021_reference/Medroxyprogesterone_Francis2021_reference_matlab.zip" download>Medroxyprogesterone_Francis2021_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_medroxyprogesterone/Medroxyprogesterone_Francis2021_reference/Medroxyprogesterone_Francis2021_reference_matlab_simbio.zip" download>Medroxyprogesterone_Francis2021_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_medroxyprogesterone/Medroxyprogesterone_Francis2021_reference/Medroxyprogesterone_Francis2021_reference_sbml.zip" download>Medroxyprogesterone_Francis2021_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_medroxyprogesterone/Medroxyprogesterone_Francis2021_reference/Medroxyprogesterone_Francis2021_reference_cellml.zip" download>Medroxyprogesterone_Francis2021_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_1C_enteral.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_medroxyprogesterone/Medroxyprogesterone_Francis2021_reference/Medroxyprogesterone_Francis2021_reference.svg" alt="Medroxyprogesterone_Francis2021_reference diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v26.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 150 mg, single dose, first-order absorption (ka 0.0241 /h, F 0.9). Dose in the paper: 150 mg.

<dbs-fmusim paramsurl="drugs/drug_medroxyprogesterone/Medroxyprogesterone_Francis2021_reference/Medroxyprogesterone_Francis2021_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_medroxyprogesterone/Medroxyprogesterone_Francis2021_reference/Medroxyprogesterone_Francis2021_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_1C_enteral` · parameters `Medroxyprogesterone_Francis2021_reference_params.json` · controls `Medroxyprogesterone_Francis2021_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 08:47 UTC</sub>
