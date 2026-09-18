<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A01A&quot;,&quot;href&quot;:&quot;atc/A01A.md&quot;},{&quot;label&quot;:&quot;doxycycline&quot;,&quot;href&quot;:&quot;drugs/drug_doxycycline/&quot;},{&quot;label&quot;:&quot;Toutain_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Doxycycline_Altan2024_reference&quot;,&quot;label&quot;:&quot;Altan_2024_reference&quot;,&quot;href&quot;:&quot;drugs/drug_doxycycline/Doxycycline_Altan2024_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Doxycycline_Thompson2019_reference&quot;,&quot;label&quot;:&quot;Thompson_2019_reference&quot;,&quot;href&quot;:&quot;drugs/drug_doxycycline/Doxycycline_Thompson2019_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Doxycycline_Duyen2026_reference&quot;,&quot;label&quot;:&quot;Duyen_2026_reference&quot;,&quot;href&quot;:&quot;drugs/drug_doxycycline/Doxycycline_Duyen2026_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Doxycycline_Mileva2021_reference&quot;,&quot;label&quot;:&quot;Mileva_2021_reference&quot;,&quot;href&quot;:&quot;drugs/drug_doxycycline/Doxycycline_Mileva2021_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Doxycycline_Petkova2022_reference&quot;,&quot;label&quot;:&quot;Petkova_2022_reference&quot;,&quot;href&quot;:&quot;drugs/drug_doxycycline/Doxycycline_Petkova2022_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Doxycycline_Toutain2025_reference&quot;,&quot;label&quot;:&quot;Toutain_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_doxycycline/Doxycycline_Toutain2025_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Doxycycline_Yang2016_reference&quot;,&quot;label&quot;:&quot;Yang_2016_reference&quot;,&quot;href&quot;:&quot;drugs/drug_doxycycline/Doxycycline_Yang2016_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# doxycycline — `Doxycycline_Toutain2025_reference`

> ## <span class="pk-badge pk-badge--orange">built, not shipped</span>

### Reviewer guidance

> ⚙️ **Pipeline limitation — scholar.** a reported unit is missing from the conversion table, so the parameter reached the engineer without an SI value<br><sub>evidence: `CL`, `MAT`</sub>

> This is not a curation fix: the record is waiting on the pipeline, not on a reviewer's judgement.

**What is wrong:** the engineer built the model but a core parameter had no value and was left at its base-class default, so it was not shipped; the engineer did not exercise the covariate scenarios this record defines. Evidence: T2_covariates_not_exercised.

**Steps:**
1. Not a curation fix — scholar limitation.
2. Check _transcribev2.yaml for the parameter: if the paper's table carries the number, the interpret stage dropped it — re-run interpret and validate for the drug, then the engineer.
3. If the paper never reports it, the record cannot become a model.
4. Advisory only — the base model still replicates.
5. Check the record's covariate_definitions in _interpretv2.yaml.
6. Re-run the engineer for this drug if the covariate curves are wanted.

<sub>owner: **scholar** · guidance written by playbook</sub>

## Citation
Toutain PL; Bousquet-Melou A; Ferran AA; Roques BB; Del Castillo JRE; Lees P; et al. et al. (2025). Journal of veterinary pharmacology and therapeutics 48
  ·  DOI: [10.1111/jvp.13511](https://doi.org/10.1111/jvp.13511)

## Model component
<dbs-pgx drug="doxycycline" model-id="Doxycycline_Toutain2025_reference" status="model_quarantined" stale="false" population="pigs" measured-compound="doxycycline" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Vc | `Q63` · V1 | 0.192 | not captured | not captured | not captured | 107.8 | exact (1.0) | jvp13511-tbl-0006:row2:col1, jvp13511-tbl-0006:row2:col6 | — | not captured |
| V2 | `Q64` · V2 | 0.595 | not captured | not captured | not captured | 63.4 | exact (1.0) | jvp13511-tbl-0006:row3:col1, jvp13511-tbl-0006:row3:col6 | — | not captured |
| V3 | `Q77` · V3 | 0.536 | not captured | not captured | not captured | 47.5 | exact (1.0) | jvp13511-tbl-0006:row4:col1, jvp13511-tbl-0006:row4:col6 | — | not captured |
| Clearance | `Q22` · CL | 0.259 | Thetas fixed and OMEGA estimated | not captured | [thetasfixedandomegaestimated] | 27.1 | exact (1.0) | jvp13511-tbl-0006:row5:col1, jvp13511-tbl-0006:row5:col6 | — | not captured |
| Cld2 | `Q30` · Q | 1.179 | not captured | not captured | not captured | 80.0 | special_case (0.95) | jvp13511-tbl-0006:row6:col1, jvp13511-tbl-0006:row6:col6 | — | not captured |
| MAT_FEED_TLS | `Q73` · MAT | 13.89 | feed, field conditions | not captured | [feed] | 6.54 | llm (0.6) | jvp13511-tbl-0006:row16:col1, jvp13511-tbl-0006:row16:col3, jvp13511-tbl-0006:row16:col4, jvp13511-tbl-0006:row16:col5 | — | not captured |
| theta_q88_category | `Q900` · theta_q88_category | 38.6 | not captured | not captured | not captured | 3.81 | not captured (not captured) | jvp13511-tbl-0006:row17:col1, jvp13511-tbl-0006:row17:col3, jvp13511-tbl-0006:row17:col4, jvp13511-tbl-0006:row17:col5 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'units' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_unknown: 'Thetas fixed and OMEGA estimated' (CL)
- dropped unlinked row (NIL): 'Cld3' — extend the ontology if this is a real PK parameter (source ['jvp13511-tbl-0006:row7:col1', 'jvp13511-tbl-0006:row7:col6'])
- dropped duplicate Q22 ('Cov BW Cl', value '0.299') — already have one for this compound
- dropped duplicate Q22 ('Cov BW Cl2', value '-0.224') — already have one for this compound
- dropped duplicate Q22 ('Cov BW Cl3', value '-0.544') — already have one for this compound
- unit_dimension_unknown: 'Thetas fixed and OMEGA estimated' (V3)
- dropped duplicate Q77 ('Cov BW V3', value '0.376') — already have one for this compound
- dropped unlinked row (NIL): 'CMultStdevOR_FEEDOTHERS' — extend the ontology if this is a real PK parameter (source ['jvp13511-tbl-0006:row12:col1', 'jvp13511-tbl-0006:row24:col1', 'jvp13511-tbl-0006:row24:col3', 'jvp13511-tbl-0006:row24:col4', 'jvp13511-tbl-0006:row24:col5'])
- dropped unlinked row (NIL): 'KaOR_FEED_TLS' — extend the ontology if this is a real PK parameter (source ['jvp13511-tbl-0006:row14:col1', 'jvp13511-tbl-0006:row14:col2', 'jvp13511-tbl-0006:row14:col3', 'jvp13511-tbl-0006:row14:col4', 'jvp13511-tbl-0006:row14:col5', 'jvp13511-tbl-0006:row14:col6'])
- dropped unlinked row (NIL): 'F_FEED_TLS' — extend the ontology if this is a real PK parameter (source ['jvp13511-tbl-0006:row15:col1', 'jvp13511-tbl-0006:row15:col3', 'jvp13511-tbl-0006:row15:col4', 'jvp13511-tbl-0006:row15:col5', 'jvp13511-tbl-0006:row15:col6'])
- unit_dimension_unknown: 'feed, field conditions' (MAT)
- dropped unlinked row (NIL): 'CMultStdevOR_FEEDTLS' — extend the ontology if this is a real PK parameter (source ['jvp13511-tbl-0006:row18:col1', 'jvp13511-tbl-0006:row18:col3', 'jvp13511-tbl-0006:row18:col4', 'jvp13511-tbl-0006:row18:col5'])
- dropped unlinked row (NIL): 'KaOR_FEED_OTHERS' — extend the ontology if this is a real PK parameter (source ['jvp13511-tbl-0006:row20:col1', 'jvp13511-tbl-0006:row20:col2', 'jvp13511-tbl-0006:row20:col3', 'jvp13511-tbl-0006:row20:col4', 'jvp13511-tbl-0006:row20:col5', 'jvp13511-tbl-0006:row20:col6'])
- dropped unlinked row (NIL): 'F_FEED_OTHERS' — extend the ontology if this is a real PK parameter (source ['jvp13511-tbl-0006:row21:col1', 'jvp13511-tbl-0006:row21:col3', 'jvp13511-tbl-0006:row21:col4', 'jvp13511-tbl-0006:row21:col5', 'jvp13511-tbl-0006:row21:col6'])
- unit_dimension_unknown: 'feed, laboratory conditions' (MAT)
- dropped duplicate Q73 ('MAT_FEED_OTHERS', value '6.95') — already have one for this compound
- dropped unlinked row (NIL): 'KaOR_SOLTUBING' — extend the ontology if this is a real PK parameter (source ['jvp13511-tbl-0006:row26:col1', 'jvp13511-tbl-0006:row26:col2', 'jvp13511-tbl-0006:row26:col3', 'jvp13511-tbl-0006:row26:col4', 'jvp13511-tbl-0006:row26:col5', 'jvp13511-tbl-0006:row26:col6'])
- dropped unlinked row (NIL): 'F_SOLTUBING' — extend the ontology if this is a real PK parameter (source ['jvp13511-tbl-0006:row27:col1', 'jvp13511-tbl-0006:row27:col3', 'jvp13511-tbl-0006:row27:col4', 'jvp13511-tbl-0006:row27:col5', 'jvp13511-tbl-0006:row27:col6'])
- unit_dimension_unknown: 'drinking water, stomach tubing' (MAT)
- dropped duplicate Q73 ('MAT_SOL_TUBING', value '1.38') — already have one for this compound
- dropped unlinked row (NIL): 'CMultStdevOR_SOL_TUBING' — extend the ontology if this is a real PK parameter (source ['jvp13511-tbl-0006:row30:col1', 'jvp13511-tbl-0006:row30:col3', 'jvp13511-tbl-0006:row30:col4', 'jvp13511-tbl-0006:row30:col5'])
- dropped unlinked row (NIL): 'KaOR_SOL_DW' — extend the ontology if this is a real PK parameter (source ['jvp13511-tbl-0006:row32:col1', 'jvp13511-tbl-0006:row32:col2', 'jvp13511-tbl-0006:row32:col3', 'jvp13511-tbl-0006:row32:col4', 'jvp13511-tbl-0006:row32:col5', 'jvp13511-tbl-0006:row32:col6'])
- dropped unlinked row (NIL): 'F_SOL_DW' — extend the ontology if this is a real PK parameter (source ['jvp13511-tbl-0006:row33:col1', 'jvp13511-tbl-0006:row33:col3', 'jvp13511-tbl-0006:row33:col4', 'jvp13511-tbl-0006:row33:col5', 'jvp13511-tbl-0006:row33:col6'])
- unit_dimension_unknown: 'drinking water, spontaneous intake' (MAT)
- dropped duplicate Q73 ('MAT_SOL_DW', value '1.45') — already have one for this compound
- dropped unlinked row (NIL): 'CMultStdevOR_SOL_DW' — extend the ontology if this is a real PK parameter (source ['jvp13511-tbl-0006:row36:col1', 'jvp13511-tbl-0006:row36:col3', 'jvp13511-tbl-0006:row36:col4', 'jvp13511-tbl-0006:row36:col5'])
- dropped unlinked row (NIL): 'stdev0 IV' — extend the ontology if this is a real PK parameter (source ['jvp13511-tbl-0006:row38:col1', 'jvp13511-tbl-0006:row38:col3', 'jvp13511-tbl-0006:row38:col4', 'jvp13511-tbl-0006:row38:col5'])
- dropped unlinked row (NIL): 'stdev1 Trial TLS' — extend the ontology if this is a real PK parameter (source ['jvp13511-tbl-0006:row39:col1', 'jvp13511-tbl-0006:row39:col3', 'jvp13511-tbl-0006:row39:col4', 'jvp13511-tbl-0006:row39:col5'])
- dropped unlinked row (NIL): 'stdev2 trials FEED_OTHERS' — extend the ontology if this is a real PK parameter (source ['jvp13511-tbl-0006:row40:col1', 'jvp13511-tbl-0006:row40:col3', 'jvp13511-tbl-0006:row40:col4', 'jvp13511-tbl-0006:row40:col5'])
- dropped unlinked row (NIL): 'stdev3 trials Stomach tubing' — extend the ontology if this is a real PK parameter (source ['jvp13511-tbl-0006:row41:col1', 'jvp13511-tbl-0006:row41:col3', 'jvp13511-tbl-0006:row41:col4', 'jvp13511-tbl-0006:row41:col5'])
- dropped unlinked row (NIL): 'stdev4 Trials drinking water' — extend the ontology if this is a real PK parameter (source ['jvp13511-tbl-0006:row42:col1', 'jvp13511-tbl-0006:row42:col3', 'jvp13511-tbl-0006:row42:col4', 'jvp13511-tbl-0006:row42:col5'])
- covariate effect for Q88 has no base parameter row (kept as unattached equation-variable)
- dropped duplicate covariate effect 'category'/'' on Q88 — ambiguous identity (two shifts cannot share one category)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=doxycycline
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted

**Extraction notes:**
- LLM selected parameter table(s) 6
- dropped sensitivity-analysis table(s) 4, 5 from the LLM selection — perturbations of a model, not a model

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.259 | not captured | not captured | ['jvp13511-tbl-0006:row5:col1', 'jvp13511-tbl-0006:row5:col6'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T3_output_variable | not captured | pass | C_central (measured=doxycycline) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 4 scholar param(s) emitted or defaulted | 4 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_doxycycline/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Toutain_2025` / `Toutain_2025::reference`)
- model: `../../../knowledgebase/drugs/drug_doxycycline/models/modelica/_needs_review/Doxycycline_Toutain2025_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_doxycycline/models/modelica/_needs_review/Doxycycline_Toutain2025_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_doxycycline/models/modelica/Doxycycline_Toutain2025_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_doxycycline/Doxycycline_Toutain2025_reference/Doxycycline_Toutain2025_reference_modelica.zip" download>Doxycycline_Toutain2025_reference_modelica.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_doxycycline/Doxycycline_Toutain2025_reference/Doxycycline_Toutain2025_reference_fmi.zip" download>Doxycycline_Toutain2025_reference_fmi.zip</a> <span class="pk-size">(4.0 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_doxycycline/Doxycycline_Toutain2025_reference/Doxycycline_Toutain2025_reference_matlab.zip" download>Doxycycline_Toutain2025_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_doxycycline/Doxycycline_Toutain2025_reference/Doxycycline_Toutain2025_reference_matlab_simbio.zip" download>Doxycycline_Toutain2025_reference_matlab_simbio.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_doxycycline/Doxycycline_Toutain2025_reference/Doxycycline_Toutain2025_reference_sbml.zip" download>Doxycycline_Toutain2025_reference_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_doxycycline/Doxycycline_Toutain2025_reference/Doxycycline_Toutain2025_reference_cellml.zip" download>Doxycycline_Toutain2025_reference_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_1C.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_doxycycline/Doxycycline_Toutain2025_reference/Doxycycline_Toutain2025_reference.svg" alt="Doxycycline_Toutain2025_reference diagram"><figcaption>The structure OpenModelica draws for this model, with this record's parameter values in the component labels.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/drug_doxycycline/Doxycycline_Toutain2025_reference/Doxycycline_Toutain2025_reference_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_doxycycline/Doxycycline_Toutain2025_reference/Doxycycline_Toutain2025_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_1C` · parameters `Doxycycline_Toutain2025_reference_params.json` · controls `Doxycycline_Toutain2025_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
