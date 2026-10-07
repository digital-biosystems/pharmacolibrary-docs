<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;capivasertib&quot;,&quot;href&quot;:&quot;drugs/drug_capivasertib/&quot;},{&quot;label&quot;:&quot;Fernandez_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Capivasertib_Fernandez2025_reference&quot;,&quot;label&quot;:&quot;Fernandez_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_capivasertib/Capivasertib_Fernandez2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# capivasertib — `Capivasertib_Fernandez2025_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Fernandez Teruel C et al., Population Pharmacokinetics and Exposur…, Clinical and translational… (2025)
  ·  DOI: [10.1111/cts.70286](https://doi.org/10.1111/cts.70286)

## Model component
<dbs-pgx drug="capivasertib" model-id="Capivasertib_Fernandez2025_reference" status="extracted" stale="false" population="patients with cancer from six Phase I–III trials" measured-compound="capivasertib" parameterization="apparent" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 10 extracted, plus 1 covariate effect.

**Parameterization:** CL/F, Q/F, Q3/F, V1/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| First‐order absorption rate constant; Ka (1/h) | `Q49` · kabs | 0.441 | 1/h | 0.0001225 | 1/h | 0.045 | llm_confirmed (0.6) | cts70286-tbl-0002:row1:col1, cts70286-tbl-0002:row1:col2 | — | not captured |
| Initial apparent clearance; CL0/F (L/h) | `Q27` · CL/F | 59.6 | L/h | 1.6555555555555556e-05 | [l] / [h] | 0.0509 | llm_confirmed (0.6) | cts70286-tbl-0002:row2:col1, cts70286-tbl-0002:row2:col2 | — | 38.2 (4.36% RSE) |
| Apparent volume of distribution of central compartment; V2/F (L) | `Q290` · V1/F | 49 | L | 0.049 | [l] | 0.0549 | boundary_compartment (0.9) | cts70286-tbl-0002:row3:col1, cts70286-tbl-0002:row3:col2 | — | 103 (5.64% RSE) |
| Apparent volume of distribution of first peripheral compartment; V3/F (L) | `Q82` · V2/F | 113 | L | 0.113 | [l] | 2.42 | boundary_compartment (0.9) | cts70286-tbl-0002:row4:col1, cts70286-tbl-0002:row4:col2 | — | not captured |
| Apparent inter‐compartmental clearance of first peripheral compartment; Q3/F (L/h) | `Q309` · Q3/F | 2.52 | L/h | 7.000000000000001e-07 | [l] / [h] | 0.151 | llm_corrected (0.6) | cts70286-tbl-0002:row5:col1, cts70286-tbl-0002:row5:col2 | — | not captured |
| Logit of fraction of dose absorbed as first‐order (LogitF1) | `Q40` · Fab | 1.6 | LogitF1 | not captured | [l] · [ogitf1] | 4.82 | llm (0.6) | cts70286-tbl-0002:row8:col1, cts70286-tbl-0002:row8:col2 | — | not captured |
| Time (h) at which inhibition of CL/F is reduced by half (T50) | `Q900` · equation variable | 126 | T50 | not captured | [t50] | 0.105 | llm_corrected (0.6) | cts70286-tbl-0002:row9:col1, cts70286-tbl-0002:row9:col2 | — | not captured |
| Apparent inter‐compartmental clearance of second peripheral compartment, L/h (Q4/F) | `Q69` · Q/F | 23.4 | L/h | 6.5000000000000004e-06 | L/h | 0.0557 | llm_corrected (0.6) | cts70286-tbl-0002:row10:col1, cts70286-tbl-0002:row10:col2 | — | not captured |
| Apparent volume of distribution of second peripheral compartment, L (V4/F) | `Q78` · V3/F | 103 | L | 0.10300000000000001 | L | 0.0508 | boundary_compartment (0.9) | cts70286-tbl-0002:row11:col1, cts70286-tbl-0002:row11:col2 | — | not captured |
| Duration of zero‐order absorption; hours (D2) | `Q310` · D1 | 45 | h | 162000.0 | h | 0.748 | llm_corrected (0.6) | cts70286-tbl-0002:row12:col1, cts70286-tbl-0002:row12:col2 | — | not captured |
| Relationship between CL0/F and body weight (CL0_BBW) | `Q319` · allometric_exponent | 0.302 | CL0_BBW | not captured | [bbw] · [cl0_] | 0.146 | llm (0.6) | cts70286-tbl-0002:row17:col1, cts70286-tbl-0002:row17:col2 | — | not captured |
| theta_q83_category | `Q900` · theta_q83_category | 0.468 | not captured | not captured | not captured | 0.152 | not captured (not captured) | cts70286-tbl-0002:row7:col1, cts70286-tbl-0002:row7:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- dropped PD-category row 'Maximum inhibition of CL/F; I max' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['cts70286-tbl-0002:row6:col1', 'cts70286-tbl-0002:row6:col2'])
- unit_dimension_unknown: 'LogitF1' (Fab)
- unit_dimension_unknown: 'T50' (equation variable)
- unit_dimension_unknown: 'Q4/F' (Q/F)
- unit_dimension_unknown: 'V4/F' (V3/F)
- unit_dimension_unknown: 'D2' (D1)
- dropped unlinked row (NIL): 'Relationship between I max and planned capivasertib dose (I max_dose)' — extend the ontology if this is a real PK parameter (source ['cts70286-tbl-0002:row15:col1', 'cts70286-tbl-0002:row15:col2'])
- unit_dimension_unknown: 'CL0_BBW' (allometric_exponent)
- unit_dimension_unknown: 'F1_BBW' (equation variable)
- dropped duplicate Q900 ('Relationship between LogitF1 and body weight (F1_BBW)', value '-1.27') — already have one for this compound
- unit_dimension_unknown: 'CL0_AGE' (CL/F)
- dropped duplicate Q27 ('Relationship between CL0/F and age (CL0_AGE)', value '-0.314') — already have one for this compound
- covariate effect for Q83 has no base parameter row (kept as unattached equation-variable)
- dropped duplicate covariate effect 'category'/'' on Q83 — ambiguous identity (two shifts cannot share one category)
- implicit units: 'First‐order absorption rate constant; Ka (1/h)' → 1/h (from the paper text: 'The parameter is labeled “First‐order absorption rate constant; Ka (1/h) = 0.441.”')
- implicit units: 'Apparent inter‐compartmental clearance of second peripheral compartment, L/h (Q4/F)' → L/h (from the paper text: 'The parameter is labeled “Apparent inter‐compartmental clearance of second peripheral compartment, L/h (Q4/F) = 23.4.”')
- implicit units: 'Apparent volume of distribution of second peripheral compartment, L (V4/F)' → L (from the paper text: 'The parameter is labeled “Apparent volume of distribution of second peripheral compartment, L (V4/F) = 103.”')
- implicit units: 'Duration of zero‐order absorption; hours (D2)' → h (from the paper text: 'The parameter is labeled “Duration of zero‐order absorption; hours (D2) = 45.”')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=capivasertib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell cts70286-tbl-0002:row1:col3 = '0.441 (0.358, 0.538)'
- unparsed cell cts70286-tbl-0002:row2:col3 = '59.3 (56.8, 62)'
- unparsed cell cts70286-tbl-0002:row3:col3 = '49.7 (36.7, 68.9)'
- unparsed cell cts70286-tbl-0002:row4:col3 = '116 (95.7, 137)'
- unparsed cell cts70286-tbl-0002:row5:col3 = '2.36 (1.43, 3.38)'
- unparsed cell cts70286-tbl-0002:row6:col3 = '−1.81 (−2.53, −1.44)'
- unparsed cell cts70286-tbl-0002:row7:col3 = '0.461 (0.405, 0.505)'
- unparsed cell cts70286-tbl-0002:row8:col3 = '1.47 (1.16, 2.18)'
- unparsed cell cts70286-tbl-0002:row9:col3 = '127 (63.3, 144)'
- unparsed cell cts70286-tbl-0002:row10:col3 = '23 (16.5, 31.6)'
- unparsed cell cts70286-tbl-0002:row11:col3 = '98.7 (74, 159)'
- unparsed cell cts70286-tbl-0002:row12:col3 = '45 (43.6, 45.6)'
- unparsed cell cts70286-tbl-0002:row13:col3 = '0.928 (0.516, 1.58)'
- unparsed cell cts70286-tbl-0002:row14:col3 = '44.9 (40.4, 49.2)'
- unparsed cell cts70286-tbl-0002:row15:col3 = '−0.00209 (−0.00253, −0.00133)'
- unparsed cell cts70286-tbl-0002:row16:col3 = '0.287 (0.223, 0.334)'
- unparsed cell cts70286-tbl-0002:row17:col3 = '0.334 (0.189, 0.492)'
- unparsed cell cts70286-tbl-0002:row18:col3 = '−1.2 (−1.62, −0.811)'
- unparsed cell cts70286-tbl-0002:row19:col3 = '−0.319 (−0.476, −0.151)'
- unparsed cell cts70286-tbl-0002:row20:col3 = '37.5 (32.4, 42.4)'
- unparsed cell cts70286-tbl-0002:row21:col3 = '103 (75.7, 143)'
- unparsed cell cts70286-tbl-0002:row22:col3 = '89.1 (54.5, 132)'
- unparsed cell cts70286-tbl-0002:row23:col3 = '73.2 (60.2, 95.5)'
- unparsed cell cts70286-tbl-0002:row24:col3 = '66.4 (51.2, 78.3)'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 10 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cts70286-tbl-0002:row2:col1', 'cts70286-tbl-0002:row2:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['cts70286-tbl-0002:row3:col1', 'cts70286-tbl-0002:row3:col2'] |
| C5_dimension_Q309 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cts70286-tbl-0002:row5:col1', 'cts70286-tbl-0002:row5:col2'] |
| C5_dimension_Q310 | pass | [time] | not captured | not captured | not captured | ['cts70286-tbl-0002:row12:col1', 'cts70286-tbl-0002:row12:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['cts70286-tbl-0002:row1:col1', 'cts70286-tbl-0002:row1:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cts70286-tbl-0002:row10:col1', 'cts70286-tbl-0002:row10:col2'] |
| C5_dimension_Q78 | pass | [length] ** 3 | not captured | not captured | not captured | ['cts70286-tbl-0002:row11:col1', 'cts70286-tbl-0002:row11:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['cts70286-tbl-0002:row4:col1', 'cts70286-tbl-0002:row4:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 59.6 L/h | not captured | not captured | ['cts70286-tbl-0002:row2:col1', 'cts70286-tbl-0002:row2:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 49 L | not captured | not captured | ['cts70286-tbl-0002:row3:col1', 'cts70286-tbl-0002:row3:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 113 L | not captured | not captured | ['cts70286-tbl-0002:row4:col1', 'cts70286-tbl-0002:row4:col2'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_capivasertib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Fernandez_2025` / `Fernandez_2025::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_capivasertib/Capivasertib_Fernandez2025_reference/Capivasertib_Fernandez2025_reference_modelica.zip" download>Capivasertib_Fernandez2025_reference_modelica.zip</a> <span class="pk-size">(5.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_capivasertib/Capivasertib_Fernandez2025_reference/Capivasertib_Fernandez2025_reference_fmi.zip" download>Capivasertib_Fernandez2025_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_capivasertib/Capivasertib_Fernandez2025_reference/Capivasertib_Fernandez2025_reference_matlab.zip" download>Capivasertib_Fernandez2025_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_capivasertib/Capivasertib_Fernandez2025_reference/Capivasertib_Fernandez2025_reference_matlab_simbio.zip" download>Capivasertib_Fernandez2025_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_capivasertib/Capivasertib_Fernandez2025_reference/Capivasertib_Fernandez2025_reference_sbml.zip" download>Capivasertib_Fernandez2025_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_capivasertib/Capivasertib_Fernandez2025_reference/Capivasertib_Fernandez2025_reference_cellml.zip" download>Capivasertib_Fernandez2025_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_2C_enteral.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_capivasertib/Capivasertib_Fernandez2025_reference/Capivasertib_Fernandez2025_reference.svg" alt="Capivasertib_Fernandez2025_reference diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v26.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 80 mg, single dose, first-order absorption (ka 0.441 /h, F 1). Doses in the paper: 80–800 mg.

<dbs-fmusim paramsurl="drugs/drug_capivasertib/Capivasertib_Fernandez2025_reference/Capivasertib_Fernandez2025_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_capivasertib/Capivasertib_Fernandez2025_reference/Capivasertib_Fernandez2025_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_2C_enteral` · parameters `Capivasertib_Fernandez2025_reference_params.json` · controls `Capivasertib_Fernandez2025_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 22:20 UTC</sub>
