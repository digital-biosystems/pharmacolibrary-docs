<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09X&quot;,&quot;href&quot;:&quot;atc/C09X.md&quot;},{&quot;label&quot;:&quot;sparsentan&quot;,&quot;href&quot;:&quot;drugs/drug_sparsentan/&quot;},{&quot;label&quot;:&quot;Wada_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sparsentan_Wada2023_reference&quot;,&quot;label&quot;:&quot;Wada_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sparsentan/Sparsentan_Wada2023_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sparsentan — `Sparsentan_Wada2023_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Wada R et al., Population pharmacokinetic analysis of…, CPT: pharmacometrics & syst… (2023)
  ·  DOI: [10.1002/psp4.12996](https://doi.org/10.1002/psp4.12996)

## Model component
<dbs-pgx drug="sparsentan" model-id="Sparsentan_Wada2023_reference" status="extracted" stale="false" population="healthy volunteers and patients with focal segmental glomerulosclerosis" measured-compound="sparsentan" parameterization="apparent" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 8 extracted, plus 3 covariate effects.

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 3.88 | L/h | 1.0777777777777777e-06 | [l] / [h] | 4.6 | exact (1.0) | psp412996-tbl-0002:row1:col1, psp412996-tbl-0002:row1:col2 | — | 39.5 (None% RSE) |
| V c/F (L) | `Q290` · V1/F | 49.3 | L | 0.0493 | [l] | 4.3 | space_fold (0.95) | psp412996-tbl-0002:row2:col1, psp412996-tbl-0002:row2:col2 | — | 48.4 (None% RSE) |
| Q/F (L/h) | `Q69` · Q/F | 2.03 | L/h | 5.638888888888888e-07 | [l] / [h] | 12.0 | exact (1.0) | psp412996-tbl-0002:row3:col1, psp412996-tbl-0002:row3:col2 | — | not captured |
| V p/F (L) | `Q82` · V2/F | 12.1 | L | 0.0121 | [l] | 10.5 | space_fold (0.95) | psp412996-tbl-0002:row4:col1, psp412996-tbl-0002:row4:col2 | — | not captured |
| K a (1/h) | `Q49` · kabs | 0.740 | 1/h | 0.00020555555555555556 | 1/h | 6.9 | space_fold (0.95) | psp412996-tbl-0002:row5:col1, psp412996-tbl-0002:row5:col2 | — | 68.9 (None% RSE) |
| T lag (h) | `Q83` · tlag | 0.32 | h | 1152.0 | [h] | 4.0 | space_fold (0.95) | psp412996-tbl-0002:row6:col1, psp412996-tbl-0002:row6:col2 | — | not captured |
| T 1/2 (h) (derived) | `Q57` · t1/2z | 9.6 | h | 34560.0 | h | not captured | space_fold (0.95) | psp412996-tbl-0002:row7:col1, psp412996-tbl-0002:row36:col1 | — | not captured |
| Induction change in CL (L/h) | `Q22` · CL | 1.23 | L/h | 3.4166666666666664e-07 | [l] / [h] | 13.6 | llm_confirmed (0.6) | psp412996-tbl-0002:row8:col1, psp412996-tbl-0002:row8:col2 | — | not captured |
| moderate_cyp3a4 | `Q900` · moderate_cyp3a4 | -0.273 | not captured | not captured | not captured | 18.8 | not captured (not captured) | psp412996-tbl-0002:row12:col1, psp412996-tbl-0002:row12:col2 | — | not captured |
| strong_cyp3a4 | `Q900` · strong_cyp3a4 | -1.069 | not captured | not captured | not captured | 10.0 | not captured (not captured) | psp412996-tbl-0002:row13:col1, psp412996-tbl-0002:row13:col2 | — | not captured |
| crcl | `Q900` · crcl | 0.222 | not captured | not captured | not captured | 26.5 | not captured (not captured) | psp412996-tbl-0002:row15:col1, psp412996-tbl-0002:row15:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'CL/F (L/h)' routed out of structural estimates ('IIV (%)')
- table section iiv: 'V c/F (L)' routed out of structural estimates ('IIV (%)')
- table section iiv: 'K a (1/h)' routed out of structural estimates ('IIV (%)')
- unit_dimension_unknown: 'derived' (t1/2z)
- dropped duplicate Q57 ('Induction t 1/2 (day)', value '0.001') — already have one for this compound
- dropped unlinked row (NIL): 'Dose on F rel' — extend the ontology if this is a real PK parameter (source ['psp412996-tbl-0002:row10:col1', 'psp412996-tbl-0002:row10:col2'])
- covariate level 'Moderate CYP3A4' → Q900:moderate_cyp3a4 = -0.273 (linear_fractional on Q27)
- covariate level 'Strong CYP3A4' → Q900:strong_cyp3a4 = -1.069 (linear_fractional on Q27)
- dropped unlinked row (NIL): 'ALKP' — extend the ontology if this is a real PK parameter (source ['psp412996-tbl-0002:row14:col1', 'psp412996-tbl-0002:row14:col2'])
- covariate level 'CrCL' → Q900:crcl = 0.222 (power on Q27)
- dropped unlinked row (NIL): 'Maleb' — extend the ontology if this is a real PK parameter (source ['psp412996-tbl-0002:row16:col1', 'psp412996-tbl-0002:row16:col2'])
- dropped unlinked row (NIL): 'Black or African American' — extend the ontology if this is a real PK parameter (source ['psp412996-tbl-0002:row18:col1', 'psp412996-tbl-0002:row18:col2'])
- dropped unlinked row (NIL): 'Asian' — extend the ontology if this is a real PK parameter (source ['psp412996-tbl-0002:row19:col1', 'psp412996-tbl-0002:row19:col2'])
- dropped unlinked row (NIL): 'Tablet' — extend the ontology if this is a real PK parameter (source ['psp412996-tbl-0002:row21:col1', 'psp412996-tbl-0002:row21:col2', 'psp412996-tbl-0002:row24:col1', 'psp412996-tbl-0002:row24:col2'])
- dropped unlinked row (NIL): 'Crushed tablet' — extend the ontology if this is a real PK parameter (source ['psp412996-tbl-0002:row22:col1', 'psp412996-tbl-0002:row22:col2', 'psp412996-tbl-0002:row25:col1', 'psp412996-tbl-0002:row25:col2'])
- routed 'Variance CL' → Q315 (sigma) to residual_error — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'Variance V c' — extend the ontology if this is a real PK parameter (source ['psp412996-tbl-0002:row27:col1', 'psp412996-tbl-0002:row27:col2'])
- dropped unlinked row (NIL): 'Variance K a' — extend the ontology if this is a real PK parameter (source ['psp412996-tbl-0002:row28:col1', 'psp412996-tbl-0002:row28:col2'])
- routed 'SD of additive error (ng/mL)' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- routed 'SD of proportional error' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- unit_dimension_unknown: 'derived' (CL/F)
- dropped duplicate Q27 ('CL/F (L/h) (derived)', value '5.47') — already have one for this compound
- unit_dimension_unknown: 'derived' (CL)
- dropped duplicate Q22 ('Steady‐state CL (L/h) (derived)', value '7.21') — already have one for this compound
- unit_dimension_unknown: 'derived' (V1/F)
- dropped duplicate Q290 ('V c /F (L) (derived)', value '69.5') — already have one for this compound
- unit_dimension_unknown: 'derived' (V2/F)
- dropped duplicate Q82 ('V p /F (L) (derived)', value '17.0') — already have one for this compound
- implicit units: 'K a (1/h)' → 1/h (from the paper text: "The paper text states: 'The K a and T lag were 0.740 h and 0.32 h, respectively.' Although the text contains a likely ty")
- implicit units: 'T 1/2 (h) (derived)' → h (from the paper text: "The paper text states: 'The terminal half‐life was 9.6 h at steady‐state (Table 2).'")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=sparsentan

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412996-tbl-0002:row8:col1', 'psp412996-tbl-0002:row8:col2'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412996-tbl-0002:row1:col1', 'psp412996-tbl-0002:row1:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412996-tbl-0002:row2:col1', 'psp412996-tbl-0002:row2:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['psp412996-tbl-0002:row5:col1', 'psp412996-tbl-0002:row5:col2'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['psp412996-tbl-0002:row7:col1', 'psp412996-tbl-0002:row36:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412996-tbl-0002:row3:col1', 'psp412996-tbl-0002:row3:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412996-tbl-0002:row4:col1', 'psp412996-tbl-0002:row4:col2'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['psp412996-tbl-0002:row6:col1', 'psp412996-tbl-0002:row6:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.23 L/h | not captured | not captured | ['psp412996-tbl-0002:row8:col1', 'psp412996-tbl-0002:row8:col2'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 3.88 L/h | not captured | not captured | ['psp412996-tbl-0002:row1:col1', 'psp412996-tbl-0002:row1:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 49.3 L | not captured | not captured | ['psp412996-tbl-0002:row2:col1', 'psp412996-tbl-0002:row2:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 12.1 L | not captured | not captured | ['psp412996-tbl-0002:row4:col1', 'psp412996-tbl-0002:row4:col2'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_sparsentan/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Wada_2023` / `Wada_2023::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_sparsentan/Sparsentan_Wada2023_reference/Sparsentan_Wada2023_reference_modelica.zip" download>Sparsentan_Wada2023_reference_modelica.zip</a> <span class="pk-size">(5.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_sparsentan/Sparsentan_Wada2023_reference/Sparsentan_Wada2023_reference_fmi.zip" download>Sparsentan_Wada2023_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_sparsentan/Sparsentan_Wada2023_reference/Sparsentan_Wada2023_reference_matlab.zip" download>Sparsentan_Wada2023_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_sparsentan/Sparsentan_Wada2023_reference/Sparsentan_Wada2023_reference_matlab_simbio.zip" download>Sparsentan_Wada2023_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_sparsentan/Sparsentan_Wada2023_reference/Sparsentan_Wada2023_reference_sbml.zip" download>Sparsentan_Wada2023_reference_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_sparsentan/Sparsentan_Wada2023_reference/Sparsentan_Wada2023_reference_cellml.zip" download>Sparsentan_Wada2023_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_2C_enteral.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_sparsentan/Sparsentan_Wada2023_reference/Sparsentan_Wada2023_reference.svg" alt="Sparsentan_Wada2023_reference diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v26.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 200 mg, single dose, first-order absorption (ka 0.74 /h, lag 19.2 min, F 1). Doses in the paper: 200, 400, 800 mg.

<dbs-fmusim paramsurl="drugs/drug_sparsentan/Sparsentan_Wada2023_reference/Sparsentan_Wada2023_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_sparsentan/Sparsentan_Wada2023_reference/Sparsentan_Wada2023_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_2C_enteral` · parameters `Sparsentan_Wada2023_reference_params.json` · controls `Sparsentan_Wada2023_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 09:44 UTC</sub>
