# coagulation factor VIIa — `CoagulationFactorViia_Klitgaard2008_paediatric_patients_with`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Klitgaard T; Nielsen TG et al. (2008). British journal of clinical pharmacology 65
  ·  DOI: [10.1111/j.1365-2125.2007.03030.x](https://doi.org/10.1111/j.1365-2125.2007.03030.x)

## Model component
<dbs-pgx drug="coagulation factor VIIa" model-id="CoagulationFactorViia_Klitgaard2008_paediatric_patients_with" status="extracted" stale="false" population="mixed patient populations (haemophilia, liver surgery, trauma, etc.)" measured-compound="recombinant activated factor VII" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (ml kg−1 h−1)† | `Q22` · CL | 67 | ml kg−1 h−1 | 1.3027777777777776e-06 | [ml] / [[h] · [kg]] | not captured | space_fold (0.95) | tbl1:row4:col17, tbl1:row4:col30, tbl1:row4:col33 | — | not captured |
| Vss(ml kg−1) | `Q65` · Vss | 174.5 | ml kg−1 | 0.012214999999999998 | [ml] / [kg] | not captured | exact (1.0) | tbl1:row5:col14, tbl1:row5:col33 | — | not captured |
| t1/2(h) ( t1/2β[h])‡ | `Q57` · t1/2z | 1.32 | t1/2β[h] | not captured | [t1] / [[h] · [2β]] | not captured | space_fold (0.95) | tbl1:row6:col17, tbl1:row6:col33 | — | not captured |
| Volume of distribution (ml.kg-1) | `Q61` · V | 83.0 | ml.kg-1 | 0.00581 | L | not captured | review_gapfill (0.7) | Klitgaard_2006:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'n' — extend the ontology if this is a real PK parameter (source ['tbl1:row0:col14', 'tbl1:row0:col17', 'tbl1:row0:col33'])
- dropped unlinked row (NIL): 'rFVIIa dose, μg kg−1*' — extend the ontology if this is a real PK parameter (source ['tbl1:row1:col4', 'tbl1:row1:col17'])
- unit_dimension_unknown: 't1/2β[h]' (t1/2z)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=recombinant activated factor VII
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'paediatric patients with haemophilia a or b [8]' subgroup of Klitgaard_2008 (paper reports 13 populations: adults with haemophilia a or b [9] (jansen, data on file 2001), healthy japanese and caucasian volunteers [16], healthy volunteers [11, 12], japanese patients with haemophilia a or b [14], nonbleeding patients with cirrhosis and prolonged pt [10], noncirrhotic patients undergoing liver resection [27] (klitgaard, data on file 2005), paediatric patients with haemophilia a or b [8], patients undergoing olt – multiple dose study [20] (erichsen, klitgaard, data on file 2004)., patients undergoing olt – single dose study [17] (jansen, data on file 2001), patients with cirrhosis and ugib [18], patients with cirrhosis and ugib [19/unpublished data] (klitgaard, data on file 2004), patients with traumatic blunt and/or penetrating injury [2, 23], study description)
- gap-filled Q61 (V) from Klitgaard_2006's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- transposed table tbl1: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell tbl1:row0:col5 = '5 (Adults) 12 (Children)'
- unparsed cell tbl1:row1:col2 = '40, 80, 160'
- unparsed cell tbl1:row1:col13 = '17.5, 35 or 70'
- unparsed cell tbl1:row1:col18 = '15, 30'
- unparsed cell tbl1:row1:col22 = '5, 20, 80'
- unparsed cell tbl1:row1:col25 = '20, 40 or 80'
- unparsed cell tbl1:row2:col2 = '0, 10, 30 min, 1, 2, 3, 5, 8, 12, 24 h'
- unparsed cell tbl1:row2:col3 = '0, 5–10 min, 2, 3, 5, 6, 8, 12 h'
- unparsed cell tbl1:row2:col5 = '0, 10, 20 min, 1, 3, 6, 8, 12 h'
- unparsed cell tbl1:row2:col13 = '0, 10, 20, 50 min, 2, 4, 6, 8, 12, 24 h'
- unparsed cell tbl1:row2:col16 = '0, 10, 15, 20 min, 1, 2, 4, 6, 8, 24 h'
- unparsed cell tbl1:row2:col17 = '0, 5, 10, 30 min, 1, 2, 3, 4 h'
- unparsed cell tbl1:row2:col18 = '0, 10, 15, 30 min, 1, 2, 4, 6, 8, 10, 24 h'
- unparsed cell tbl1:row2:col22 = '0, 10, 30 min, 2, 4, 6, 8, 12 h'
- unparsed cell tbl1:row2:col23 = '0, 4, 12, 24 h, days 2, 3, 4, 5 subgroup additional samples: 10, 30 min, 1, 2, 30 h'
- unparsed cell tbl1:row2:col24 = '0, 0.5, 2, 4, 6, 8, 12 h'
- unparsed cell tbl1:row2:col25 = '0, 15, 60 min, then hourly till end of surgery, 24 h, days 3, 7'
- unparsed cell tbl1:row2:col27 = '0, 15, 60 min, then hourly till end of surgery, 24 h, days 3, 7'
- unparsed cell tbl1:row2:col28 = '0, 15, 60 min, then hourly till end of surgery (last sample 5 h NCA, 6 h PopPK)'
- unparsed cell tbl1:row4:col1 = 'CL (ml kg−1 h−1)†'
- unparsed cell tbl1:row4:col5 = '58 (Children, FVII:C)'
- unparsed cell tbl1:row4:col6 = '39 (Adults FVII:C)'
- unparsed cell tbl1:row4:col7 = '78 (Children, FVIIa clot)'
- unparsed cell tbl1:row4:col8 = '53 (Adults, FVIIa clot)'
- unparsed cell tbl1:row4:col9 = '60 (Children, FVII:C)'
- unparsed cell tbl1:row4:col10 = '44 (Adults FVII:C)'
- unparsed cell tbl1:row4:col11 = '84 (Children, FVIIa clot)'
- unparsed cell tbl1:row4:col12 = '60 (Adults, FVIIa clot)'
- unparsed cell tbl1:row4:col14 = '29 (bleeding)'
- unparsed cell tbl1:row4:col15 = '33 (nonbleeding)'
- unparsed cell tbl1:row4:col18 = '71 (15 μg kg−1, FVII:C)'
- unparsed cell tbl1:row4:col19 = '65 (15 μg kg−1, FVIIa clot)'
- unparsed cell tbl1:row4:col20 = '79 (30 μg kg−1, FVII:C)'
- unparsed cell tbl1:row4:col21 = '68 (30 μg kg−1, FVIIa clot)'
- unparsed cell tbl1:row4:col25 = '62 (−liver)'
- unparsed cell tbl1:row4:col26 = '90 (+liver)'
- unparsed cell tbl1:row4:col28 = '64 (20 μg kg−1)'
- unparsed cell tbl1:row4:col29 = '64 (80 μg kg−1)'
- unparsed cell tbl1:row4:col32 = '41 (blunt) 40 (penetrating)'
- unparsed cell tbl1:row5:col1 = 'Vss(ml kg−1)'
- unparsed cell tbl1:row5:col3 = '80.0 (≤20 μg kg−1)'
- unparsed cell tbl1:row5:col4 = '93.6 (&gt;20 μg kg−1)'
- unparsed cell tbl1:row5:col5 = '164 (Children, FVII:C)'
- unparsed cell tbl1:row5:col6 = '128 (Adults FVII:C)'
- unparsed cell tbl1:row5:col7 = '196 (Children, FVIIa clot)'
- unparsed cell tbl1:row5:col8 = '159 (Adults, FVIIa clot)'
- unparsed cell tbl1:row5:col9 = '182 (FVII:C)'
- unparsed cell tbl1:row5:col10 = '215 (FVIIa clot)'
- unparsed cell tbl1:row5:col18 = '280 (15 μg kg−1, FVII:C)'
- unparsed cell tbl1:row5:col19 = '210 (15 μg kg−1, FVIIa clot)'
- unparsed cell tbl1:row5:col20 = '290 (30 μg kg−1, FVII:C)'
- unparsed cell tbl1:row5:col21 = '230 (30 μg kg−1, FVIIa clot)'
- unparsed cell tbl1:row5:col28 = '124 (20 μg kg−1)'
- unparsed cell tbl1:row5:col29 = '277 (80 μg kg−1)'
- unparsed cell tbl1:row5:col30 = '121.5 (20 μg kg−1)'
- unparsed cell tbl1:row5:col31 = '164 (80 μg kg−1)'
- unparsed cell tbl1:row6:col2 = '3.90–5.99 `'
- unparsed cell tbl1:row6:col3 = '2.43 (≤20 μg kg−1)‡'
- unparsed cell tbl1:row6:col4 = '2.45 (&gt;20 μg kg−1)‡'
- unparsed cell tbl1:row6:col5 = '2.6 (Children, FVII:C)'
- unparsed cell tbl1:row6:col6 = '3.1 (Adults FVII:C)'
- unparsed cell tbl1:row6:col7 = '2.3 (Children, FVIIa clot)'
- unparsed cell tbl1:row6:col8 = '2.3 (Adults, FVIIa clot)'
- unparsed cell tbl1:row6:col9 = '4.3 (Children FVII:C)‡'
- unparsed cell tbl1:row6:col10 = '4.8 (Adults FVII:C)‡'
- unparsed cell tbl1:row6:col11 = '2.5 (Children FVIIa clot)‡'
- unparsed cell tbl1:row6:col12 = '3.1 (Adults FVIIa clot)‡'
- unparsed cell tbl1:row6:col14 = '4.37 (bleeding)‡'
- unparsed cell tbl1:row6:col15 = '5.34 (nonbleeding)‡'
- unparsed cell tbl1:row6:col18 = '2.82 (15 μg kg−1, FVII:C)'
- unparsed cell tbl1:row6:col19 = '2.49 (15 μg kg−1, FVIIa clot)'
- unparsed cell tbl1:row6:col20 = '3.11 (30 μg kg−1, FVII:C)'
- unparsed cell tbl1:row6:col21 = '2.62 (30 μg kg−1, FVIIa clot)'
- unparsed cell tbl1:row6:col23 = '3.08¶'
- unparsed cell tbl1:row6:col24 = 'Approx. 2–3'
- unparsed cell tbl1:row6:col25 = '2.59 (−liver)‡'
- unparsed cell tbl1:row6:col26 = '2.19 (+liver)‡'
- unparsed cell tbl1:row6:col28 = '1.08 (20 μg kg−1)'
- unparsed cell tbl1:row6:col29 = '1.57 (80 μg kg−1)'
- unparsed cell tbl1:row6:col30 = '1.20 (20 μg kg−1)¶'
- unparsed cell tbl1:row6:col31 = '1.62 (80 μg kg−1)¶'
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tbl1:row4:col17', 'tbl1:row4:col30', 'tbl1:row4:col33'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Klitgaard_2006:review'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['tbl1:row5:col14', 'tbl1:row5:col33'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 67.0 | not captured | not captured | ['tbl1:row4:col17', 'tbl1:row4:col30', 'tbl1:row4:col33'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 4.69 L/h | not captured | not captured | ['tbl1:row4:col17', 'tbl1:row4:col30', 'tbl1:row4:col33'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 5.81 L | not captured | not captured | ['Klitgaard_2006:review'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_coagulation_factor_viia/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Klitgaard_2008` / `Klitgaard_2008::paediatric_patients_with_haemophilia_a_or_b_8`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

**FMI is two downloads.** The archive holds this record's parameters and its driver; the simulator itself is `PK_1C.fmu`, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass `--fmu PATH`). Running it reproduces the model-specific FMU exactly.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_coagulation_factor_viia/CoagulationFactorViia_Klitgaard2008_paediatric_patients_with/CoagulationFactorViia_Klitgaard2008_paediatric_patients_with_modelica.zip" download>CoagulationFactorViia_Klitgaard2008_paediatric_patients_with_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_coagulation_factor_viia/CoagulationFactorViia_Klitgaard2008_paediatric_patients_with/CoagulationFactorViia_Klitgaard2008_paediatric_patients_with_fmi.zip" download>CoagulationFactorViia_Klitgaard2008_paediatric_patients_with_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_coagulation_factor_viia/CoagulationFactorViia_Klitgaard2008_paediatric_patients_with/CoagulationFactorViia_Klitgaard2008_paediatric_patients_with_matlab.zip" download>CoagulationFactorViia_Klitgaard2008_paediatric_patients_with_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_coagulation_factor_viia/CoagulationFactorViia_Klitgaard2008_paediatric_patients_with/CoagulationFactorViia_Klitgaard2008_paediatric_patients_with_matlab_simbio.zip" download>CoagulationFactorViia_Klitgaard2008_paediatric_patients_with_matlab_simbio.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_coagulation_factor_viia/CoagulationFactorViia_Klitgaard2008_paediatric_patients_with/CoagulationFactorViia_Klitgaard2008_paediatric_patients_with_sbml.zip" download>CoagulationFactorViia_Klitgaard2008_paediatric_patients_with_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_coagulation_factor_viia/CoagulationFactorViia_Klitgaard2008_paediatric_patients_with/CoagulationFactorViia_Klitgaard2008_paediatric_patients_with_cellml.zip" download>CoagulationFactorViia_Klitgaard2008_paediatric_patients_with_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
