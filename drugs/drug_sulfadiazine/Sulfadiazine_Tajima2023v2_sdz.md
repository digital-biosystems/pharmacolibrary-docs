<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01E&quot;,&quot;href&quot;:&quot;atc/J01E.md&quot;},{&quot;label&quot;:&quot;sulfadiazine&quot;,&quot;href&quot;:&quot;drugs/drug_sulfadiazine/&quot;},{&quot;label&quot;:&quot;Tajima_2023_2 \u00b7 sdz&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sulfadiazine_Boulanger2024_reference&quot;,&quot;label&quot;:&quot;Boulanger_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sulfadiazine/Sulfadiazine_Boulanger2024_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sulfadiazine_Ekstrand2026_reference&quot;,&quot;label&quot;:&quot;Ekstrand_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sulfadiazine/Sulfadiazine_Ekstrand2026_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sulfadiazine_Tajima2023v2_sdz&quot;,&quot;label&quot;:&quot;Tajima_2023_2_sdz&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sulfadiazine/Sulfadiazine_Tajima2023v2_sdz.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sulfadiazine — `Sulfadiazine_Tajima2023v2_sdz`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

> **Species: cattle.** This record comes from an animal study (cattle), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Tajima T et al., Oral pharmacokinetics of sulfadiazine a…, The Journal of veterinary m… (2023)
  ·  DOI: [10.1292/jvms.23-0110](https://doi.org/10.1292/jvms.23-0110)

## Model component
<dbs-pgx drug="sulfadiazine" model-id="Sulfadiazine_Tajima2023v2_sdz" status="extracted" stale="false" population="female Holstein milking cows" measured-compound="sulfadiazine" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 11 extracted.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ka | `Q49` · kabs | 0.158 | 1/hr | 4.388888888888889e-05 | 1/h | not captured | exact (1.0) | tbl_002:row2:col2 | — | not captured |
| t1/2ka | `Q95` · t1/2ka | 4.51 | hr | 16236.0 | h | not captured | exact (1.0) | tbl_002:row3:col2 | — | not captured |
| kel | `Q47` · kel | 0.262 | 1/hr | 7.277777777777778e-05 | 1/h | not captured | exact (1.0) | tbl_002:row4:col2 | — | not captured |
| t1/2kel | `Q57` · t1/2z | 2.66 | hr | 9576.0 | h | not captured | fuzzy (0.92) | tbl_002:row5:col2 | — | not captured |
| Cmax | `Q32` · Cmax | 7.01 | µg/mL | not captured | µg/mL | not captured | exact (1.0) | tbl_002:row6:col2 | — | not captured |
| Tmax | `Q56` · tmax | 5.00 | hr | 18000.0 | h | not captured | exact (1.0) | tbl_002:row7:col2 | — | not captured |
| F | `Q40` · Fab | 85.7 | not captured | not captured | not captured | not captured | exact (1.0) | tbl_002:row8:col2 | — | not captured |
| MAT | `Q73` · MAT | 5.92 | hr | 21312.0 | h | not captured | exact (1.0) | tbl_002:row9:col2 | — | not captured |
| AUCi.v. | `Q88` · AUC | 52.0 | µg·h/mL | not captured | µg·h/mL | not captured | llm (0.6) | tbl_002:row12:col2 | — | not captured |
| CLtot | `Q22` · CL | 0.0973 | L/hr/kg | 1.8919444444444444e-06 | L/h | not captured | exact (1.0) | tbl_002:row14:col2 | — | not captured |
| Vdss | `Q65` · Vss | 0.357 | L/kg | 0.024990000000000002 | L | not captured | llm (0.6) | tbl_002:row15:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `vss_as_v`: Vss (Q65) used as the distribution volume — no Vc/V reported

**Interpretation flags:**
- dropped unlinked row (NIL): 'MRTi.v.' — extend the ontology if this is a real PK parameter (source ['tbl_002:row10:col2'])
- dropped unlinked row (NIL): 'MRTp.o.' — extend the ontology if this is a real PK parameter (source ['tbl_002:row11:col2'])
- dropped duplicate Q88 ('AUCp.o.', value '98.5') — already have one for this compound
- implicit units: 'ka' → 1/hr (from the paper text: "The text states 't=elapsed time after drug administration in hr', and since rate constants (ka, kel) are inversely propo")
- implicit units: 't1/2ka' → hr (from the paper text: "The text states 't=elapsed time after drug administration in hr', and half-life is a time parameter.")
- implicit units: 'kel' → 1/hr (from the paper text: "The text states 't=elapsed time after drug administration in hr', and since rate constants (ka, kel) are inversely propo")
- implicit units: 't1/2kel' → hr (from the paper text: "The text explicitly mentions 'The t1/2kel of SMM was significantly shorter (1.62 ± 0.24 hr)' and 'SDZ (2.66 ± 0.25 hr)'.")
- implicit units: 'Cmax' → µg/mL (from the popPK convention: 'Concentration in PK studies is typically reported in µg/mL. While the specific unit is not stated in the excerpt for Cma')
- implicit units: 'Tmax' → hr (from the paper text: "The text states 't=elapsed time after drug administration in hr', and Tmax is a time parameter. Additionally, the text m")
- implicit units: 'MAT' → hr (from the paper text: "The text states 't=elapsed time after drug administration in hr', and MAT is a time parameter. Additionally, the text me")
- implicit units: 'AUCi.v.' → µg·h/mL (from the popPK convention: 'AUC is concentration-time. Given the concentration unit is likely µg/mL (see Cmax) and time is hr, the unit is µg·h/mL. ')
- implicit units: 'CLtot' → L/hr/kg (from the paper text: "The text explicitly states 'The CLtot of SMM (0.202 ± 0.023 L/hr/kg) was significantly higher than that of SDZ (0.0973 ±")
- implicit units: 'Vdss' → L/kg (from the popPK convention: 'Volume of distribution (Vdss) is typically expressed in L/kg in population PK studies, especially when data are normaliz')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=sulfadiazine
- population split: 'sdz' subgroup of Tajima_2023_2 (paper reports 2 populations: sdz, smm)
- skipped review gap-fill of V from Boulanger_2024: its label names a different analyte ('tmp') — 'volume of distribution of TMP'
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell tbl_002:row2:col1 = 'hr−1'
- unparsed cell tbl_002:row2:col3 = '0.179 ± 0.023*'
- unparsed cell tbl_002:row3:col3 = '3.91 ± 0.51*'
- unparsed cell tbl_002:row4:col1 = 'hr−1'
- unparsed cell tbl_002:row4:col3 = '0.433 ± 0.058*'
- unparsed cell tbl_002:row5:col3 = '1.62 ± 0.24*'
- unparsed cell tbl_002:row6:col3 = '4.29 ± 0.32*'
- unparsed cell tbl_002:row7:col3 = '2.75 ± 0.96*'
- unparsed cell tbl_002:row9:col3 = '5.24 ± 0.69*'
- unparsed cell tbl_002:row10:col3 = '2.21 ± 0.31*'
- unparsed cell tbl_002:row11:col3 = '7.45 ± 0.66*'
- unparsed cell tbl_002:row12:col3 = '25.1 ± 3.0*'
- unparsed cell tbl_002:row13:col3 = '45.6 ± 6.0*'
- unparsed cell tbl_002:row14:col3 = '0.202 ± 0.023*'

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 11 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tbl_002:row14:col2'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['tbl_002:row6:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['tbl_002:row4:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['tbl_002:row2:col2'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['tbl_002:row7:col2'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['tbl_002:row5:col2'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['tbl_002:row15:col2'] |
| C5_dimension_Q73 | pass | [time] | not captured | not captured | not captured | ['tbl_002:row9:col2'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['tbl_002:row12:col2'] |
| C5_dimension_Q95 | pass | [time] | not captured | not captured | not captured | ['tbl_002:row3:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0973 | not captured | not captured | ['tbl_002:row14:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 6.81 L/h | not captured | not captured | ['tbl_002:row14:col2'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 25 L | not captured | not captured | ['tbl_002:row15:col2'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_sulfadiazine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Tajima_2023_2` / `Tajima_2023_2::sdz`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_sulfadiazine/Sulfadiazine_Tajima2023v2_sdz/Sulfadiazine_Tajima2023v2_sdz_modelica.zip" download>Sulfadiazine_Tajima2023v2_sdz_modelica.zip</a> <span class="pk-size">(5.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_sulfadiazine/Sulfadiazine_Tajima2023v2_sdz/Sulfadiazine_Tajima2023v2_sdz_fmi.zip" download>Sulfadiazine_Tajima2023v2_sdz_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_sulfadiazine/Sulfadiazine_Tajima2023v2_sdz/Sulfadiazine_Tajima2023v2_sdz_matlab.zip" download>Sulfadiazine_Tajima2023v2_sdz_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_sulfadiazine/Sulfadiazine_Tajima2023v2_sdz/Sulfadiazine_Tajima2023v2_sdz_matlab_simbio.zip" download>Sulfadiazine_Tajima2023v2_sdz_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_sulfadiazine/Sulfadiazine_Tajima2023v2_sdz/Sulfadiazine_Tajima2023v2_sdz_sbml.zip" download>Sulfadiazine_Tajima2023v2_sdz_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_sulfadiazine/Sulfadiazine_Tajima2023v2_sdz/Sulfadiazine_Tajima2023v2_sdz_cellml.zip" download>Sulfadiazine_Tajima2023v2_sdz_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_1C_enteral.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_sulfadiazine/Sulfadiazine_Tajima2023v2_sdz/Sulfadiazine_Tajima2023v2_sdz.svg" alt="Sulfadiazine_Tajima2023v2_sdz diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v26.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 350 mg, single dose, first-order absorption (ka 0.158 /h, F 85.7). Doses in the paper: 350, 700 mg.

<dbs-fmusim paramsurl="drugs/drug_sulfadiazine/Sulfadiazine_Tajima2023v2_sdz/Sulfadiazine_Tajima2023v2_sdz_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_sulfadiazine/Sulfadiazine_Tajima2023v2_sdz/Sulfadiazine_Tajima2023v2_sdz_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_1C_enteral` · parameters `Sulfadiazine_Tajima2023v2_sdz_params.json` · controls `Sulfadiazine_Tajima2023v2_sdz_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 10:38 UTC</sub>
