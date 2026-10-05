<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;vestronidase alfa&quot;,&quot;href&quot;:&quot;drugs/drug_vestronidase_alfa/&quot;},{&quot;label&quot;:&quot;Qi_2019 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;VestronidaseAlfa_Qi2019_reference&quot;,&quot;label&quot;:&quot;Qi_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vestronidase_alfa/VestronidaseAlfa_Qi2019_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# vestronidase alfa — `VestronidaseAlfa_Qi2019_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

### Reviewer guidance

**The vestronidase alfa parameters (CL 9.61, V1 9.64, Q 16.3, V2 4.23) were reported with the unit 'units' instead of L/h or L, so no SI values could be established and the record was rejected.**

All four structural parameters of the two-compartment model — clearance 9.61, central volume 9.64, intercompartmental clearance 16.3, and peripheral volume 4.23 — carry the verbatim unit 'units', which does not state the physical dimension (L/h for clearances, L for volumes). This unit could not be converted to SI, so the parameters reached the model without valid SI values, giving a dimension mismatch on structural parameters. The record was therefore rejected. Extracted — vestronidase alfa: CL 9.61 units, V1 9.64 units, Q 16.3 units, V2 4.23 units.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-09-28 14:42:06.599592+00:00) predates the upstream re-run (2026-10-05 12:12:14.830754+00:00). Current validate status: `extracted`.

## Citation
Qi Y et al., Pharmacokinetic and Pharmacodynamic Mod…, Clinical pharmacokinetics (2019)
  ·  DOI: [10.1007/s40262-018-0721-y](https://doi.org/10.1007/s40262-018-0721-y)

## Model component
<dbs-pgx drug="vestronidase alfa" model-id="VestronidaseAlfa_Qi2019_reference" status="extracted" stale="true" population="adult and pediatric subjects with MPS VII" measured-compound="vestronidase_alfa" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment, IV mammillary model — template `PK_2C`.  
**Parameters:** 4 extracted.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h)a | `Q22` · CL | 1.99 | L/h | 5.527777777777778e-07 | L/h | not captured | llm_confirmed (0.6) | Tab2:row2:col1, Tab2:row2:col2, Tab2:row2:col5 | — | 0.170 (None% RSE) |
| Vc (L)a | `Q63` · V1 | 1.49 | L | 0.00149 | L | not captured | llm_confirmed (0.6) | Tab2:row3:col1, Tab2:row3:col2, Tab2:row3:col5 | — | 0.0944 (None% RSE) |
| Q (L/h)a | `Q30` · Q | 0.940 | L/h | 2.6111111111111113e-07 | L/h | not captured | llm (0.6) | Tab2:row4:col1, Tab2:row4:col2, Tab2:row4:col5 | — | not captured |
| Vp (L)a | `Q64` · V2 | 3.03 | L | 0.0030299999999999997 | L | not captured | llm_confirmed (0.6) | Tab2:row5:col1, Tab2:row5:col2, Tab2:row5:col5 | — | 0.0236 (None% RSE) |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ω2 for CL' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'ω2 for Vc' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'ω2 for Q' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'ω2 for Vp' routed out of structural estimates ('Interindividual variability')
- table section residual_error: 'σ2 prop' routed out of structural estimates ('Residual variability')
- dropped unlinked row (NIL): 'BWT on CL and Qb' — extend the ontology if this is a real PK parameter (source ['Tab2:row7:col1', 'Tab2:row7:col2', 'Tab2:row7:col5'])
- dropped unlinked row (NIL): 'BWT on Vc and Vpb' — extend the ontology if this is a real PK parameter (source ['Tab2:row8:col1', 'Tab2:row8:col2', 'Tab2:row8:col5'])
- implicit units: 'CL (L/h)a' → L/h (from the paper text: "Table 2 footnote states 'CL serum clearance' and the text explicitly states 'Typical PK parameter value estimates for se")
- implicit units: 'Vc (L)a' → L (from the paper text: "Table 2 footnote states 'Vc volume of distribution in the central compartment' and the text explicitly states 'volume of")
- implicit units: 'Q (L/h)a' → L/h (from the paper text: "Table 2 footnote states 'Q intercompartmental clearance' and the text explicitly states 'intercompartment clearance (Q).")
- implicit units: 'Vp (L)a' → L (from the paper text: "Table 2 footnote states 'Vp volume of distribution in the peripheral compartment' and the text explicitly states 'volume")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=vestronidase_alfa
- molar mass: none found for 'vestronidase_alfa' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell Tab2:row2:col3 = '1.63, 2.38'
- unparsed cell Tab2:row2:col6 = '1.60, 2.42'
- unparsed cell Tab2:row3:col3 = '1.26, 1.83'
- unparsed cell Tab2:row3:col6 = '1.27, 1.76'
- unparsed cell Tab2:row4:col3 = '0.676, 1.28'
- unparsed cell Tab2:row4:col6 = '0.640, 1.29'
- unparsed cell Tab2:row5:col3 = '2.86, 3.38'
- unparsed cell Tab2:row5:col6 = '2.65, 3.42'
- unparsed cell Tab2:row7:col3 = '0.444, 0.730c'
- unparsed cell Tab2:row7:col6 = '0.413, 0.703'
- unparsed cell Tab2:row8:col3 = '0.315, 0.651c'
- unparsed cell Tab2:row8:col6 = '0.371, 0.642'
- unparsed cell Tab2:row10:col3 = '0.00281, 0.337'
- unparsed cell Tab2:row10:col4 = '43.0d'
- unparsed cell Tab2:row10:col6 = '0.0411, 0.331'
- unparsed cell Tab2:row11:col3 = '− 0.00556, 0.194'
- unparsed cell Tab2:row11:col6 = '0.00773, 0.209'
- unparsed cell Tab2:row12:col3 = '− 0.0152, 1.14'
- unparsed cell Tab2:row12:col4 = '86.9d'
- unparsed cell Tab2:row12:col6 = '0.117, 1.14'
- unparsed cell Tab2:row13:col3 = '0.00516, 0.0420'
- unparsed cell Tab2:row13:col6 = '0.00911, 0.0518'
- unparsed cell Tab2:row15:col3 = '0.0690, 0.149'
- unparsed cell Tab2:row15:col6 = '0.0687, 0.147'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | pass | 3.6 | 3.475 | 0.9653 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row2:col1', 'Tab2:row2:col2', 'Tab2:row2:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row4:col1', 'Tab2:row4:col2', 'Tab2:row4:col5'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row3:col1', 'Tab2:row3:col2', 'Tab2:row3:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row5:col1', 'Tab2:row5:col2', 'Tab2:row5:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.99 | not captured | not captured | ['Tab2:row2:col1', 'Tab2:row2:col2', 'Tab2:row2:col5'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.99 L/h | not captured | not captured | ['Tab2:row2:col1', 'Tab2:row2:col2', 'Tab2:row2:col5'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 1.49 L | not captured | not captured | ['Tab2:row3:col1', 'Tab2:row3:col2', 'Tab2:row3:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 3.03 L | not captured | not captured | ['Tab2:row5:col1', 'Tab2:row5:col2', 'Tab2:row5:col5'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_vestronidase_alfa/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Qi_2019` / `Qi_2019::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_vestronidase_alfa/VestronidaseAlfa_Qi2019_reference/VestronidaseAlfa_Qi2019_reference_modelica.zip" download>VestronidaseAlfa_Qi2019_reference_modelica.zip</a> <span class="pk-size">(4.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_vestronidase_alfa/VestronidaseAlfa_Qi2019_reference/VestronidaseAlfa_Qi2019_reference_fmi.zip" download>VestronidaseAlfa_Qi2019_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C.fmu" download>PK_2C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_vestronidase_alfa/VestronidaseAlfa_Qi2019_reference/VestronidaseAlfa_Qi2019_reference_matlab.zip" download>VestronidaseAlfa_Qi2019_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_vestronidase_alfa/VestronidaseAlfa_Qi2019_reference/VestronidaseAlfa_Qi2019_reference_matlab_simbio.zip" download>VestronidaseAlfa_Qi2019_reference_matlab_simbio.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_vestronidase_alfa/VestronidaseAlfa_Qi2019_reference/VestronidaseAlfa_Qi2019_reference_sbml.zip" download>VestronidaseAlfa_Qi2019_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_vestronidase_alfa/VestronidaseAlfa_Qi2019_reference/VestronidaseAlfa_Qi2019_reference_cellml.zip" download>VestronidaseAlfa_Qi2019_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_2C.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_vestronidase_alfa/VestronidaseAlfa_Qi2019_reference/VestronidaseAlfa_Qi2019_reference.svg" alt="VestronidaseAlfa_Qi2019_reference diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v26.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 70 mg infusion over 10 min, single dose. Doses in the paper: 70, 140, 280 mg.

<dbs-fmusim paramsurl="drugs/drug_vestronidase_alfa/VestronidaseAlfa_Qi2019_reference/VestronidaseAlfa_Qi2019_reference_params.json" metaurl="assets/fmu/PK_2C.vr.json" wasmurl="assets/fmu/PK_2C.js" controlsurl="drugs/drug_vestronidase_alfa/VestronidaseAlfa_Qi2019_reference/VestronidaseAlfa_Qi2019_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_2C` · parameters `VestronidaseAlfa_Qi2019_reference_params.json` · controls `VestronidaseAlfa_Qi2019_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-05 12:12 UTC</sub>
