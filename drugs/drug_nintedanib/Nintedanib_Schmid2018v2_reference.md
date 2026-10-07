<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;nintedanib&quot;,&quot;href&quot;:&quot;drugs/drug_nintedanib/&quot;},{&quot;label&quot;:&quot;Schmid_2018_2 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nintedanib_Schmid2018_reference&quot;,&quot;label&quot;:&quot;Schmid_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nintedanib/Nintedanib_Schmid2018_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nintedanib_Schmid2018v2_reference&quot;,&quot;label&quot;:&quot;Schmid_2018_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nintedanib/Nintedanib_Schmid2018v2_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# nintedanib — `Nintedanib_Schmid2018v2_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Schmid U et al., Population pharmacokinetics of nintedan…, Cancer chemotherapy and pha… (2018)
  ·  DOI: [10.1007/s00280-017-3452-0](https://doi.org/10.1007/s00280-017-3452-0)

## Model component
<dbs-pgx drug="nintedanib" model-id="Nintedanib_Schmid2018v2_reference" status="extracted" stale="false" population="patients with NSCLC or IPF" measured-compound="nintedanib" parameterization="apparent" topology="parent_metabolite"></dbs-pgx>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 5 extracted.

**Parameterization:** CL/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F [L/h] (θ CL) | `Q27` · CL/F | 897 | L/h | 0.0002491666666666667 | L/h | 2.42 | llm_confirmed (0.6) | Tab3:row2:col1, Tab3:row2:col2 | — | not captured |
| V2/F [L] (θ V2) | `Q290` · V1/F | 465 | L | 0.465 | L | 10.7 | exact (1.0) | Tab3:row3:col1, Tab3:row3:col2 | — | not captured |
| k a [h−1] (θ ka) | `Q49` · kabs | 0.0376 | 1/h | 1.0444444444444445e-05 | 1/h | 7.77 | exact (1.0) | Tab3:row4:col1, Tab3:row4:col2 | — | not captured |
| ALAG [h] | `Q83` · tlag | 0.417 | h | 1501.2 | [h] | 5.59 | llm_confirmed (0.6) | Tab3:row5:col1, Tab3:row5:col2 | — | not captured |
| θ Age | `Q900` · equation variable | 0.00959 | not captured | not captured | not captured | 16.0 | llm (0.6) | Tab3:row15:col1, Tab3:row15:col2, Tab3:footnote | — | not captured |
| θ WT | `Q319` · allometric_exponent | 0.619 | not captured | not captured | not captured | 16.5 | llm (0.6) | Tab3:row20:col1, Tab3:row20:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| Percentage change in AUCτ,ss | Q18 | not captured | llm_corrected |

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'IIV in F1 [CV%]' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'IIV in k a for Phase II studies [CV%]' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'IIV in V2/F [CV%]' routed out of structural estimates ('IIV in k a for Phase III studies [CV%]')
- column 'lactate dehydrogenase' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'ethnic origin' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'ecog performance status' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_unknown: 'θ CL' (CL/F)
- unit_dimension_unknown: 'θ V2' (V1/F)
- unit_dimension_unknown: 'θ ka' (kabs)
- dropped unlinked row (NIL): 'Indian/Chinese/Taiwanese origin' — extend the ontology if this is a real PK parameter (source ['Tab3:row10:col1', 'Tab3:row10:col2'])
- dropped unlinked row (NIL): 'Korean origin' — extend the ontology if this is a real PK parameter (source ['Tab3:row11:col1', 'Tab3:row11:col2'])
- dropped unlinked row (NIL): 'Current smoker' — extend the ontology if this is a real PK parameter (source ['Tab3:row14:col1', 'Tab3:row14:col2'])
- dropped unlinked row (NIL): 'NSCLC Phase II [23] and LUME-Lung 2 [6]' — extend the ontology if this is a real PK parameter (source ['Tab3:row18:col1', 'Tab3:row18:col2'])
- dropped unlinked row (NIL): 'NSCLC Phase II [23] and IPF Phase II [11]' — extend the ontology if this is a real PK parameter (source ['Tab3:row24:col1', 'Tab3:row24:col2'])
- dropped value-less row: 'Additive (SD) [nM; log scale]' (captured trailing unit 'nM; log scale' for child rows)
- dropped unlinked row (NIL): 'Reference patient' — extend the ontology if this is a real PK parameter (source ['Schmid_2018_2_table_4:row0:col7'])
- unit 'nM; log scale' inherited from a section-header row for AUCSS (not printed on this row itself) — see the unit_dimension_mismatch check below if this is wrong
- unit_dimension_unknown: 'nM; log scale' (AUCSS)
- dropped value-less row: 'θ Ethnicity'
- dropped value-less row: 'θ Smok'
- dropped value-less row: 'θ Trial'
- dropped value-less row: 'θWT'
- implicit units: 'CL/F [L/h] (θ CL)' → L/h (from the paper text: 'The paper states, “the typical CL/F was 897 L/h.”')
- implicit units: 'V2/F [L] (θ V2)' → L (from the paper text: 'The paper states, “the V2/F in the central compartment at steady state was 465 L.”')
- implicit units: 'k a [h−1] (θ ka)' → 1/h (from the paper text: 'The paper states that “ka was 0.0827 h−1,” giving the unit for the absorption-rate constant.')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=nintedanib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_3C — first-pass formation; parent 1 + hepatic, metabolites [0] (site presystemic: 'The total fraction of nintedanib and its metabolites absorbed is estimated to be much higher than the absolute bioavaila')
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 21/21 row label(s) assigned, 8 linked by role; re-tagged nintedanib→parent ×6
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- engineer: parent → metabolite not buildable on PK_3M_9C (None) — the measured compound's 1-compartment model instead

**Extraction notes:**
- unparsed cell Tab3:row26:col1 = '49.1 (6.64c)'
- unparsed cell Tab3:row27:col1 = '32.4 (19.2c)'
- unparsed cell Tab3:row29:col1 = '119 (15.7c)'
- unparsed cell Tab3:row31:col1 = '0.526 (4.58c)'
- transposed table Schmid_2018_2_table_4: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Schmid_2018_2_table_4:row0:col1 = 'BIBF 1202'
- unparsed cell Schmid_2018_2_table_4:row0:col2 = '62 yearsa'
- unparsed cell Schmid_2018_2_table_4:row0:col4 = '71.5 kga'
- unparsed cell Schmid_2018_2_table_4:row0:col6 = 'ECOG ≥ 1'
- unparsed cell Schmid_2018_2_table_4:row1:col2 = '45 yearsb: ↓16%76 yearsc: ↑13%'
- unparsed cell Schmid_2018_2_table_4:row1:col3 = 'Current smoker: ↓21%'
- unparsed cell Schmid_2018_2_table_4:row1:col4 = '50 kgb: ↑25%100 kgc: ↓19%'
- unparsed cell Schmid_2018_2_table_4:row2:col2 = '45 yearsb: ↓16%76 yearsc: ↑13%'
- unparsed cell Schmid_2018_2_table_4:row2:col3 = 'Current smoker: ↓21%'
- unparsed cell Schmid_2018_2_table_4:row2:col4 = '50 kgb: ↑32%100 kgc: ↓22%'
- companion parameter table 4 transcribed (5 record(s), model stage 'final')
- LLM selected parameter table(s) 3, 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row2:col1', 'Tab3:row2:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row3:col1', 'Tab3:row3:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab3:row4:col1', 'Tab3:row4:col2'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Tab3:row5:col1', 'Tab3:row5:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 897 L/h | not captured | not captured | ['Tab3:row2:col1', 'Tab3:row2:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 465 L | not captured | not captured | ['Tab3:row3:col1', 'Tab3:row3:col2'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_nintedanib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Schmid_2018_2` / `Schmid_2018_2::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_nintedanib/Nintedanib_Schmid2018v2_reference/Nintedanib_Schmid2018v2_reference_modelica.zip" download>Nintedanib_Schmid2018v2_reference_modelica.zip</a> <span class="pk-size">(5.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_nintedanib/Nintedanib_Schmid2018v2_reference/Nintedanib_Schmid2018v2_reference_fmi.zip" download>Nintedanib_Schmid2018v2_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_nintedanib/Nintedanib_Schmid2018v2_reference/Nintedanib_Schmid2018v2_reference_matlab.zip" download>Nintedanib_Schmid2018v2_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_nintedanib/Nintedanib_Schmid2018v2_reference/Nintedanib_Schmid2018v2_reference_matlab_simbio.zip" download>Nintedanib_Schmid2018v2_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_nintedanib/Nintedanib_Schmid2018v2_reference/Nintedanib_Schmid2018v2_reference_sbml.zip" download>Nintedanib_Schmid2018v2_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_nintedanib/Nintedanib_Schmid2018v2_reference/Nintedanib_Schmid2018v2_reference_cellml.zip" download>Nintedanib_Schmid2018v2_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_1C_enteral.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_nintedanib/Nintedanib_Schmid2018v2_reference/Nintedanib_Schmid2018v2_reference.svg" alt="Nintedanib_Schmid2018v2_reference diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v26.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 150 mg, single dose, first-order absorption (ka 0.0376 /h, F 1). Doses in the paper: 150, 200, 250 mg.

<dbs-fmusim paramsurl="drugs/drug_nintedanib/Nintedanib_Schmid2018v2_reference/Nintedanib_Schmid2018v2_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_nintedanib/Nintedanib_Schmid2018v2_reference/Nintedanib_Schmid2018v2_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_1C_enteral` · parameters `Nintedanib_Schmid2018v2_reference_params.json` · controls `Nintedanib_Schmid2018v2_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 03:19 UTC</sub>
