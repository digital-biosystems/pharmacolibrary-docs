<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01E&quot;,&quot;href&quot;:&quot;atc/J01E.md&quot;},{&quot;label&quot;:&quot;trimethoprim&quot;,&quot;href&quot;:&quot;drugs/drug_trimethoprim/&quot;},{&quot;label&quot;:&quot;Ekstrand_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Trimethoprim_Ekstrand2026_reference&quot;,&quot;label&quot;:&quot;Ekstrand_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trimethoprim/Trimethoprim_Ekstrand2026_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Trimethoprim_Tu1989_reference&quot;,&quot;label&quot;:&quot;Tu_1989_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trimethoprim/Trimethoprim_Tu1989_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# trimethoprim — `Trimethoprim_Ekstrand2026_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

> **Species: dog.** This record comes from an animal study (dog), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `trimethoprim-sulfadiazine, trimethoprim-sulfamethoxazole, trimethoprim`, measured `trimethoprim`.

## Citation
Ekstrand C et al., Comparative pharmacokinetics of trimeth…, BMC veterinary research (2026)
  ·  DOI: [10.1186/s12917-026-05604-7](https://doi.org/10.1186/s12917-026-05604-7)

## Model component
<dbs-pgx drug="trimethoprim" model-id="Trimethoprim_Ekstrand2026_reference" status="extracted" stale="false" population="beagle dogs" measured-compound="trimethoprim" parameterization="mechanistic" topology="3C"></dbs-pgx>

**Model structure:** 3-compartment, oral mammillary model — template `PK_3C_enteral`.  
**Parameters:** 7 extracted.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Cl | `Q22` · CL | 0.43 | L/h/kg | 8.361111111111111e-06 | L/h | 0.37 | exact (1.0) | Tab2:row3:col2, Tab2:row3:col3, Tab2:row3:col6, Tab2:row3:col7, Tab2:row11:col2, Tab2:row11:col3, Tab2:row11:col6, Tab2:row11:col7, Tab2:row19:col2, Tab2:row19:col3, Tab2:row19:col6, Tab2:row19:col7 | — | 28.47 (None% RSE) |
| Vc | `Q63` · V1 | 0.37 | L/kg | 0.0259 | L | 0.32 | exact (1.0) | Tab2:row4:col2, Tab2:row4:col3, Tab2:row4:col6, Tab2:row4:col7, Tab2:row12:col2, Tab2:row12:col3, Tab2:row12:col6, Tab2:row12:col7 | — | 33.28 (None% RSE) |
| Vp | `Q64` · V2 | 0.09 | L/kg | 0.006299999999999999 | L | 0.0002 | exact (1.0) | Tab2:row5:col2, Tab2:row5:col3, Tab2:row5:col6, Tab2:row5:col7, Tab2:row13:col2, Tab2:row13:col3, Tab2:row13:col6, Tab2:row13:col7 | — | 30.54 (None% RSE) |
| Q | `Q30` · Q | 0.14 | L/h/kg | 2.7222222222222224e-06 | L/h | 0.07 | exact (1.0) | Tab2:row6:col2, Tab2:row6:col3, Tab2:row6:col6, Tab2:row6:col7, Tab2:row14:col2 | — | not captured |
| ka | `Q49` · kabs | 3.69 | 1/h | 0.001025 | 1/h | 2.37 | exact (1.0) | Tab2:row7:col1, Tab2:row7:col2, Tab2:row7:col3, Tab2:row7:col6, Tab2:row7:col7, Tab2:row15:col1, Tab2:row15:col2, Tab2:row15:col3, Tab2:row15:col6, Tab2:row15:col7, Tab2:row21:col1, Tab2:row21:col2, Tab2:row21:col3, Tab2:row21:col6, Tab2:row21:col7 | — | 74.17 (None% RSE) |
| F | `Q40` · Fab | 0.94 | not captured | not captured | not captured | 0.76 | exact (1.0) | Tab2:row8:col2, Tab2:row8:col3, Tab2:row8:col6, Tab2:row8:col7, Tab2:row16:col2, Tab2:row16:col3, Tab2:row16:col6, Tab2:row16:col7, Tab2:row22:col2, Tab2:row22:col3, Tab2:row22:col6, Tab2:row22:col7 | — | 36.10 (None% RSE) |
| b | `Q900` · equation variable | 0.41 | not captured | not captured | not captured | 0.29 | llm (0.6) | Tab2:row9:col2, Tab2:row9:col3, Tab2:row9:col6, Tab2:row9:col7, Tab2:row17:col2, Tab2:row17:col3, Tab2:row17:col6, Tab2:row17:col7, Tab2:row23:col2, Tab2:row23:col3, Tab2:row23:col6, Tab2:row23:col7 | — | not captured |
| V | `Q61` · V | 2.62 | L/kg | 0.18340000000000004 | L | 2.22 | exact (1.0) | Tab2:row20:col2, Tab2:row20:col3, Tab2:row20:col6, Tab2:row20:col7 | — | 22.69 (None% RSE) |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag', 'k12', 'k13', 'k31']

**Interpretation flags:**
- table section iiv: 'Cl' routed out of structural estimates ('IIV (%)')
- table section iiv: 'Vc' routed out of structural estimates ('IIV (%)')
- table section iiv: 'Vp' routed out of structural estimates ('IIV (%)')
- table section iiv: 'ka' routed out of structural estimates ('IIV (%)')
- table section iiv: 'F' routed out of structural estimates ('IIV (%)')
- table section iiv: 'V' routed out of structural estimates ('IIV (%)')
- column 'unit' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- implicit units: 'Cl' → L/h/kg (from the paper text: "The paper text states: 'In contrast, TMP was adequately described by a one-compartment model following IV administration")
- implicit units: 'Vc' → L/kg (from the paper text: "The paper text states for TMP: 'a substantially larger V (2.62 L/kg)'. As Vc (V1) is a volume of distribution parameter ")
- implicit units: 'Vp' → L/kg (from the paper text: "The paper text refers to 'V2' in the context of parameters 'F, V1, V2, and Q' and later gives units for other volumes li")
- implicit units: 'Q' → L/h/kg (from the paper text: "The paper text explicitly states: 'The SMX parameter Q was fixed to 0.14 L/kg/h based on preliminary results...'. Note: ")
- implicit units: 'ka' → 1/h (from the paper text: "The paper text states for TMP: 'Oral absorption of TMP was rapid (kₐ 3.69 1/h...)' and for SDZ: '(kₐ 0.65 1/h...)'.")
- implicit units: 'V' → L/kg (from the paper text: "The paper text states for TMP: 'a substantially larger V (2.62 L/kg)'.")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=trimethoprim
- structure disagreement: deterministic 3C vs LLM 2C — review compartment count
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row3:col2', 'Tab2:row3:col3', 'Tab2:row3:col6', 'Tab2:row3:col7', 'Tab2:row11:col2', 'Tab2:row11:col3', 'Tab2:row11:col6', 'Tab2:row11:col7', 'Tab2:row19:col2', 'Tab2:row19:col3', 'Tab2:row19:col6', 'Tab2:row19:col7'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row6:col2', 'Tab2:row6:col3', 'Tab2:row6:col6', 'Tab2:row6:col7', 'Tab2:row14:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab2:row7:col1', 'Tab2:row7:col2', 'Tab2:row7:col3', 'Tab2:row7:col6', 'Tab2:row7:col7', 'Tab2:row15:col1', 'Tab2:row15:col2', 'Tab2:row15:col3', 'Tab2:row15:col6', 'Tab2:row15:col7', 'Tab2:row21:col1', 'Tab2:row21:col2', 'Tab2:row21:col3', 'Tab2:row21:col6', 'Tab2:row21:col7'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row20:col2', 'Tab2:row20:col3', 'Tab2:row20:col6', 'Tab2:row20:col7'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row4:col2', 'Tab2:row4:col3', 'Tab2:row4:col6', 'Tab2:row4:col7', 'Tab2:row12:col2', 'Tab2:row12:col3', 'Tab2:row12:col6', 'Tab2:row12:col7'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row5:col2', 'Tab2:row5:col3', 'Tab2:row5:col6', 'Tab2:row5:col7', 'Tab2:row13:col2', 'Tab2:row13:col3', 'Tab2:row13:col6', 'Tab2:row13:col7'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.43 | not captured | not captured | ['Tab2:row3:col2', 'Tab2:row3:col3', 'Tab2:row3:col6', 'Tab2:row3:col7', 'Tab2:row11:col2', 'Tab2:row11:col3', 'Tab2:row11:col6', 'Tab2:row11:col7', 'Tab2:row19:col2', 'Tab2:row19:col3', 'Tab2:row19:col6', 'Tab2:row19:col7'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 30.1 L/h | not captured | not captured | ['Tab2:row3:col2', 'Tab2:row3:col3', 'Tab2:row3:col6', 'Tab2:row3:col7', 'Tab2:row11:col2', 'Tab2:row11:col3', 'Tab2:row11:col6', 'Tab2:row11:col7', 'Tab2:row19:col2', 'Tab2:row19:col3', 'Tab2:row19:col6', 'Tab2:row19:col7'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 183 L | not captured | not captured | ['Tab2:row20:col2', 'Tab2:row20:col3', 'Tab2:row20:col6', 'Tab2:row20:col7'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 25.9 L | not captured | not captured | ['Tab2:row4:col2', 'Tab2:row4:col3', 'Tab2:row4:col6', 'Tab2:row4:col7', 'Tab2:row12:col2', 'Tab2:row12:col3', 'Tab2:row12:col6', 'Tab2:row12:col7'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 6.3 L | not captured | not captured | ['Tab2:row5:col2', 'Tab2:row5:col3', 'Tab2:row5:col6', 'Tab2:row5:col7', 'Tab2:row13:col2', 'Tab2:row13:col3', 'Tab2:row13:col6', 'Tab2:row13:col7'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_trimethoprim/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Ekstrand_2026` / `Ekstrand_2026::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_trimethoprim/Trimethoprim_Ekstrand2026_reference/Trimethoprim_Ekstrand2026_reference_modelica.zip" download>Trimethoprim_Ekstrand2026_reference_modelica.zip</a> <span class="pk-size">(4.8 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_trimethoprim/Trimethoprim_Ekstrand2026_reference/Trimethoprim_Ekstrand2026_reference_fmi.zip" download>Trimethoprim_Ekstrand2026_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_3C_enteral.fmu" download>PK_3C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_trimethoprim/Trimethoprim_Ekstrand2026_reference/Trimethoprim_Ekstrand2026_reference_matlab.zip" download>Trimethoprim_Ekstrand2026_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_trimethoprim/Trimethoprim_Ekstrand2026_reference/Trimethoprim_Ekstrand2026_reference_matlab_simbio.zip" download>Trimethoprim_Ekstrand2026_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_trimethoprim/Trimethoprim_Ekstrand2026_reference/Trimethoprim_Ekstrand2026_reference_sbml.zip" download>Trimethoprim_Ekstrand2026_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_trimethoprim/Trimethoprim_Ekstrand2026_reference/Trimethoprim_Ekstrand2026_reference_cellml.zip" download>Trimethoprim_Ekstrand2026_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_3C_enteral.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_trimethoprim/Trimethoprim_Ekstrand2026_reference/Trimethoprim_Ekstrand2026_reference.svg" alt="Trimethoprim_Ekstrand2026_reference diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v26.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 140 mg, single dose, first-order absorption (ka 3.69 /h, F 0.94). Doses in the paper: 140, 210, 280, 700, 1050, 1400, 3500 mg.

<dbs-fmusim paramsurl="drugs/drug_trimethoprim/Trimethoprim_Ekstrand2026_reference/Trimethoprim_Ekstrand2026_reference_params.json" metaurl="assets/fmu/PK_3C_enteral.vr.json" wasmurl="assets/fmu/PK_3C_enteral.js" controlsurl="drugs/drug_trimethoprim/Trimethoprim_Ekstrand2026_reference/Trimethoprim_Ekstrand2026_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_3C_enteral` · parameters `Trimethoprim_Ekstrand2026_reference_params.json` · controls `Trimethoprim_Ekstrand2026_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 11:16 UTC</sub>
