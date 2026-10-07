<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;belzutifan&quot;,&quot;href&quot;:&quot;drugs/drug_belzutifan/&quot;},{&quot;label&quot;:&quot;Marathe_2023 \u00b7 geometric_mean&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Belzutifan_Marathe2023_arithmetic_mean&quot;,&quot;label&quot;:&quot;Marathe_2023_arithmetic_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_belzutifan/Belzutifan_Marathe2023_arithmetic_mean.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Belzutifan_Marathe2023_geometric_mean&quot;,&quot;label&quot;:&quot;Marathe_2023_geometric_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_belzutifan/Belzutifan_Marathe2023_geometric_mean.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# belzutifan — `Belzutifan_Marathe2023_geometric_mean`

> ## <span class="pk-badge pk-badge--green">extracted</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Marathe DD et al., Population pharmacokinetic analyses for…, CPT: pharmacometrics & syst… (2023)
  ·  DOI: [10.1002/psp4.13028](https://doi.org/10.1002/psp4.13028)

## Model component
<dbs-pgx drug="belzutifan" model-id="Belzutifan_Marathe2023_geometric_mean" status="extracted" stale="false" population="patients with VHL disease-associated RCC, CNS hemangioblastomas, and pancreatic neuroendocrine tumors" measured-compound="belzutifan" parameterization="apparent" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 10 extracted.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 7.25 | L/h | 2.013888888888889e-06 | [l] / [h] | 51.36 | exact (1.0) | Marathe_2023_table_5:row0:col2, Marathe_2023_table_5:row0:col3 | — | not captured |
| V d/F (L) | `Q76` · V/F | 129.5 | L | 0.1295 | [l] | 35.18 | space_fold (0.95) | Marathe_2023_table_5:row1:col2, Marathe_2023_table_5:row1:col3 | — | not captured |
| KA (1/h) | `Q49` · kabs | 2.51 | 1/h | 0.0006972222222222221 | 1/h | 145.43 | exact (1.0) | Marathe_2023_table_5:row2:col2, Marathe_2023_table_5:row2:col3 | — | not captured |
| AUC0–24h (μg∙h/mL) | `Q19` · AUCt | 16.71 | μg∙h/mL | not captured | [[h] · [µg]] / [ml] | 52.34 | llm (0.6) | Marathe_2023_table_5:row4:col2, Marathe_2023_table_5:row4:col3 | — | not captured |
| C min (ng/mL) | `Q36` · Cmin | 306.66 | ng/mL | not captured | [ng] / [ml] | 92.3 | space_fold (0.95) | Marathe_2023_table_5:row5:col2, Marathe_2023_table_5:row5:col3 | — | not captured |
| C max (ng/mL) | `Q32` · Cmax | 1362.54 | ng/mL | not captured | [ng] / [ml] | 39.77 | space_fold (0.95) | Marathe_2023_table_5:row7:col2, Marathe_2023_table_5:row7:col3 | — | not captured |
| T max (h) | `Q56` · tmax | 1.42 | h | 5112.0 | [h] | 69.72 | space_fold (0.95) | Marathe_2023_table_5:row9:col2, Marathe_2023_table_5:row9:col3 | — | not captured |
| t 1/2 alpha (h) | `Q59` · t1/2α | 2.60 | h | 9360.0 | [h] | 37.28 | llm_corrected (0.6) | Marathe_2023_table_5:row11:col2, Marathe_2023_table_5:row11:col3 | — | not captured |
| t 1/2 beta (h) | `Q60` · t1/2β | 14.34 | h | 51624.0 | [h] | 36.82 | llm_corrected (0.6) | Marathe_2023_table_5:row12:col2, Marathe_2023_table_5:row12:col3 | — | not captured |
| t 1/2 eff (h) | `Q57` · t1/2z | 12.39 | h | 44604.0 | [h] | 41.61 | llm (0.6) | Marathe_2023_table_5:row13:col2, Marathe_2023_table_5:row13:col3 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| F | Q40 | not captured | exact |

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped unlinked row (NIL): 'FMF' — extend the ontology if this is a real PK parameter (source ['Marathe_2023_table_5:row3:col2', 'Marathe_2023_table_5:row3:col3', 'Marathe_2023_table_5:row6:col2', 'Marathe_2023_table_5:row6:col3', 'Marathe_2023_table_5:row8:col2', 'Marathe_2023_table_5:row8:col3', 'Marathe_2023_table_5:row10:col2', 'Marathe_2023_table_5:row10:col3', 'Marathe_2023_table_5:row15:col2', 'Marathe_2023_table_5:row15:col3'])
- dropped duplicate Q57 ('t 1/2 abs (h)', value '0.28') — already have one for this compound
- implicit units: 'KA (1/h)' → 1/h (from the popPK convention: 'The parameter is the absorption rate constant (KA). In population pharmacokinetic modeling, first-order rate constants a')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=belzutifan
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- bound model equation to Q40 (Fab): F = CL/Fpop * (WT/73.64)^
- Q40 (Fab) is equation-defined: value moved to equation-variable 'F'; equation kept verbatim
- population split: 'geometric mean' subgroup of Marathe_2023 (paper reports 4 populations: absolute parameter value, arithmetic mean, estimate, geometric mean)

**Extraction notes:**
- unparsed cell psp413028-tbl-0002:row2:col3 = '5.25; 6.00'
- unparsed cell psp413028-tbl-0002:row3:col3 = '80.55; 90.26'
- unparsed cell psp413028-tbl-0002:row4:col3 = '3.89; 6.85'
- unparsed cell psp413028-tbl-0002:row5:col3 = '26.42; 34.34'
- unparsed cell psp413028-tbl-0002:row6:col3 = '2.04; 2.76'
- unparsed cell psp413028-tbl-0002:row7:col3 = '0.16; 0.17'
- unparsed cell psp413028-tbl-0002:row8:col3 = '−1.00; −0.75'
- unparsed cell psp413028-tbl-0002:row9:col3 = '0.45; 0.84'
- unparsed cell psp413028-tbl-0002:row10:col3 = '0.98; 1.14'
- unparsed cell psp413028-tbl-0002:row11:col3 = '0.24; 0.54'
- unparsed cell psp413028-tbl-0002:row12:col3 = '−0.34; −0.15'
- unparsed cell psp413028-tbl-0002:row13:col3 = '−0.47; −0.25'
- unparsed cell psp413028-tbl-0002:row14:col3 = '0.061;0.16'
- unparsed cell psp413028-tbl-0002:row15:col3 = '−0.79; −0.15'
- unparsed cell psp413028-tbl-0002:row16:col3 = '−0.30; −0.11'
- unparsed cell psp413028-tbl-0002:row17:col3 = '−0.52; −0.20'
- unparsed cell psp413028-tbl-0002:row19:col3 = '0.11; 0.18'
- unparsed cell psp413028-tbl-0002:row20:col3 = '0.0064; 0.019'
- unparsed cell psp413028-tbl-0002:row21:col3 = '0.052; 0.33'
- unparsed cell psp413028-tbl-0002:row22:col3 = '0.78; 1.52'
- unparsed cell psp413028-tbl-0002:row24:col3 = '0.24; 0.28'
- unparsed cell psp413028-tbl-0002:row25:col3 = '0.27; 0.31'
- unparsed cell Marathe_2023_table_3:row0:col3 = '0 (reference)'
- unparsed cell Marathe_2023_table_3:row2:col3 = '0 (reference)'
- unparsed cell Marathe_2023_table_3:row4:col1 = 'UGT2B17 (intermediate)'
- unparsed cell Marathe_2023_table_3:row4:col3 = '0 (reference)'
- unparsed cell Marathe_2023_table_3:row5:col1 = 'UGT2B17 (extensive)'
- unparsed cell Marathe_2023_table_3:row6:col1 = 'UGT2B17 (poor)'
- unparsed cell Marathe_2023_table_3:row7:col1 = 'CYP2C19 (extensive)'
- unparsed cell Marathe_2023_table_3:row7:col3 = '0 (reference)'
- unparsed cell Marathe_2023_table_3:row8:col1 = 'CYP2C19 (poor)'
- unparsed cell Marathe_2023_table_3:row9:col3 = '0 (reference)'
- unparsed cell Marathe_2023_table_3:row10:col1 = 'UGT2B17 (poor)'
- companion parameter table 3 transcribed (18 record(s))
- transposed table Marathe_2023_table_4: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- companion parameter table 4 transcribed (5 record(s))
- companion parameter table 5 transcribed (64 record(s))
- LLM selected parameter table(s) 2, 3, 4, 5
- captured model equation F = CL/Fpop * (WT/73.64)^

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 11 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Marathe_2023_table_5:row4:col2', 'Marathe_2023_table_5:row4:col3'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Marathe_2023_table_5:row0:col2', 'Marathe_2023_table_5:row0:col3'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Marathe_2023_table_5:row7:col2', 'Marathe_2023_table_5:row7:col3'] |
| C5_dimension_Q36 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Marathe_2023_table_5:row5:col2', 'Marathe_2023_table_5:row5:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Marathe_2023_table_5:row2:col2', 'Marathe_2023_table_5:row2:col3'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Marathe_2023_table_5:row9:col2', 'Marathe_2023_table_5:row9:col3'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Marathe_2023_table_5:row13:col2', 'Marathe_2023_table_5:row13:col3'] |
| C5_dimension_Q59 | pass | [time] | not captured | not captured | not captured | ['Marathe_2023_table_5:row11:col2', 'Marathe_2023_table_5:row11:col3'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['Marathe_2023_table_5:row12:col2', 'Marathe_2023_table_5:row12:col3'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Marathe_2023_table_5:row1:col2', 'Marathe_2023_table_5:row1:col3'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 7.25 L/h | not captured | not captured | ['Marathe_2023_table_5:row0:col2', 'Marathe_2023_table_5:row0:col3'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 130 L | not captured | not captured | ['Marathe_2023_table_5:row1:col2', 'Marathe_2023_table_5:row1:col3'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_belzutifan/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Marathe_2023` / `Marathe_2023::geometric_mean`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_belzutifan/Belzutifan_Marathe2023_geometric_mean/Belzutifan_Marathe2023_geometric_mean_modelica.zip" download>Belzutifan_Marathe2023_geometric_mean_modelica.zip</a> <span class="pk-size">(4.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_belzutifan/Belzutifan_Marathe2023_geometric_mean/Belzutifan_Marathe2023_geometric_mean_fmi.zip" download>Belzutifan_Marathe2023_geometric_mean_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_belzutifan/Belzutifan_Marathe2023_geometric_mean/Belzutifan_Marathe2023_geometric_mean_matlab.zip" download>Belzutifan_Marathe2023_geometric_mean_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_belzutifan/Belzutifan_Marathe2023_geometric_mean/Belzutifan_Marathe2023_geometric_mean_matlab_simbio.zip" download>Belzutifan_Marathe2023_geometric_mean_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_belzutifan/Belzutifan_Marathe2023_geometric_mean/Belzutifan_Marathe2023_geometric_mean_sbml.zip" download>Belzutifan_Marathe2023_geometric_mean_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_belzutifan/Belzutifan_Marathe2023_geometric_mean/Belzutifan_Marathe2023_geometric_mean_cellml.zip" download>Belzutifan_Marathe2023_geometric_mean_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_1C_enteral.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_belzutifan/Belzutifan_Marathe2023_geometric_mean/Belzutifan_Marathe2023_geometric_mean.svg" alt="Belzutifan_Marathe2023_geometric_mean diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v26.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 120 mg, single dose, first-order absorption (ka 2.51 /h, F 1). Dose in the paper: 120 mg.

<dbs-fmusim paramsurl="drugs/drug_belzutifan/Belzutifan_Marathe2023_geometric_mean/Belzutifan_Marathe2023_geometric_mean_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_belzutifan/Belzutifan_Marathe2023_geometric_mean/Belzutifan_Marathe2023_geometric_mean_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_1C_enteral` · parameters `Belzutifan_Marathe2023_geometric_mean_params.json` · controls `Belzutifan_Marathe2023_geometric_mean_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 23:24 UTC</sub>
