<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;enalapril&quot;,&quot;href&quot;:&quot;drugs/drug_enalapril/&quot;},{&quot;label&quot;:&quot;Steichert_2025_2 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Enalapril_Kechagia2015_reference&quot;,&quot;label&quot;:&quot;Kechagia_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_enalapril/Enalapril_Kechagia2015_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Enalapril_Steichert2025v2_reference&quot;,&quot;label&quot;:&quot;Steichert_2025_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_enalapril/Enalapril_Steichert2025v2_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;pd_Hockings_1986_ACE_inhibition&quot;,&quot;label&quot;:&quot;Hockings_1986 \u00b7 ACE inhibition&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_enalapril/pd_Hockings_1986_ACE_inhibition.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Kechagia_2015_DBP&quot;,&quot;label&quot;:&quot;Kechagia_2015 \u00b7 DBP&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_enalapril/pd_Kechagia_2015_DBP.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# enalapril — `Enalapril_Steichert2025v2_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

### Reviewer guidance

**The enalaprilat two-compartment disposition parameters Q/F (6.38 L/h) and V2/F (108.26 L) were neither extracted nor defaulted, so only 3 of 5 expected parameters are covered and the record was held for review.**

The record describes enalapril with its metabolite enalaprilat in a two-compartment structure; ktr (5.31 1/h), MTT (1.46 h), kabs (1.19 1/h), CL/F (36.39 L/h) and V1/F (223.71 L) are present, but the peripheral parameters Q/F and V2/F are missing entirely. In addition, the model builder left the lag time (Tlag) at a default instead of an explicit estimate, and used an apparent parameterization assuming F=1 and Fm=1 with no molar correction between enalapril and enalaprilat. Extracted — enalaprilat: ktr 5.31 1/h, MTT 1.46, kabs 1.19 1/h, CL/F 36.4 L/h, V1/F 224 L, Q/F 6.38 L/h, V2/F 108 L.

<sub>reviewed by glm-5.3-flash</sub>

> **Dose compound ≠ measured compound:** dosed `enalapril`, measured `enalaprilat`.

## Citation
Steichert M et al., Angiotensin II/Angiotensin I Ratio as a…, Pharmaceutics (2025)
  ·  DOI: [10.3390/pharmaceutics17101345](https://doi.org/10.3390/pharmaceutics17101345)

## Model component
<dbs-pgx drug="enalapril" model-id="Enalapril_Steichert2025v2_reference" status="needs_review" stale="false" population="healthy adults and children with heart failure" measured-compound="enalaprilat" parameterization="apparent" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 7 extracted.

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ktr | `Q306` · ktr | 5.31 | 1/h | 0.001475 | 1/h | 25.7 | exact (1.0) | pharmaceutics-17-01345-t002:row1:col2, pharmaceutics-17-01345-t002:row1:col3 | — | 72.89 (None% RSE) |
| Mtt | `Q81` · MTT | 1.46 | not captured | not captured | not captured | 11.7 | exact (1.0) | pharmaceutics-17-01345-t002:row2:col2, pharmaceutics-17-01345-t002:row2:col3 | — | 33.7 (None% RSE) |
| ka | `Q49` · kabs | 1.19 | 1/h | 0.00033055555555555556 | 1/h | 8.6 | exact (1.0) | pharmaceutics-17-01345-t002:row3:col2, pharmaceutics-17-01345-t002:row3:col3 | — | not captured |
| CL/F | `Q27` · CL/F | 36.39 | L/h | 1.0108333333333333e-05 | L/h | 10.2 | exact (1.0) | pharmaceutics-17-01345-t002:row4:col2, pharmaceutics-17-01345-t002:row4:col3 | — | 30.17 (None% RSE) |
| V1/F | `Q290` · V1/F | 223.71 | L | 0.22371000000000002 | L | 15.3 | exact (1.0) | pharmaceutics-17-01345-t002:row5:col2, pharmaceutics-17-01345-t002:row5:col3 | — | 46.61 (None% RSE) |
| Q/F | `Q69` · Q/F | 6.38 | L/h | 1.7722222222222224e-06 | L/h | 13.7 | exact (1.0) | pharmaceutics-17-01345-t002:row6:col2, pharmaceutics-17-01345-t002:row6:col3 | — | not captured |
| V2/F | `Q82` · V2/F | 108.26 | L | 0.10826000000000001 | L | 27.2 | exact (1.0) | pharmaceutics-17-01345-t002:row7:col2, pharmaceutics-17-01345-t002:row7:col3 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'IIV ktr' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'IIV Mtt' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'IIV CL/F' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'IIV V1/F' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'IIV E0' routed out of structural estimates ('Interindividual variability')
- table section iiv: 'IIV IC50' routed out of structural estimates ('Interindividual variability')
- table section residual_error: 'Proportional error' routed out of structural estimates ('Residual variability pharmacokinetic model')
- table section residual_error: 'Additive error' routed out of structural estimates ('Residual variability pharmacokinetic model')
- table section residual_error: 'Proportional error' routed out of structural estimates ('Residual variability pharmacodynamic model')
- dropped PD-category row 'ke0' → Q326 (ke0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['pharmaceutics-17-01345-t002:row8:col2', 'pharmaceutics-17-01345-t002:row8:col3'])
- dropped PD-category row 'γ' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['pharmaceutics-17-01345-t002:row9:col2', 'pharmaceutics-17-01345-t002:row9:col3'])
- dropped PD-category row 'E0' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['pharmaceutics-17-01345-t002:row10:col2', 'pharmaceutics-17-01345-t002:row10:col3'])
- dropped PD-category row 'IC50' → Q322 (IC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['pharmaceutics-17-01345-t002:row11:col2', 'pharmaceutics-17-01345-t002:row11:col3'])
- implicit units: 'ktr' → 1/h (from the popPK convention: 'The paper does not state a unit for ktr in the text, caption, or footnotes. ktr is a first-order transit rate constant, ')
- implicit units: 'ka' → 1/h (from the popPK convention: 'The paper does not state a unit for ka in the text, caption, or footnotes. ka is a first-order absorption rate constant,')
- implicit units: 'CL/F' → L/h (from the popPK convention: 'The paper does not state a unit for CL/F in the text, caption, or footnotes. CL/F is an apparent oral clearance, convent')
- implicit units: 'V1/F' → L (from the popPK convention: 'The paper does not state a unit for V1/F in the text, caption, or footnotes. V1/F is an apparent central volume of distr')
- implicit units: 'Q/F' → L/h (from the popPK convention: 'The paper does not state a unit for Q/F in the text, caption, or footnotes. Q/F is an apparent intercompartmental cleara')
- implicit units: 'V2/F' → L (from the popPK convention: 'The paper does not state a unit for V2/F in the text, caption, or footnotes. V2/F is an apparent peripheral volume of di')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=enalaprilat
- template fit: PK_3M_9C — formed from central; parent 0, metabolites [2]
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- row roles (LLM): model_class=compartmental; 20/20 row label(s) assigned, 10 linked by role

**Extraction notes:**
- unparsed cell pharmaceutics-17-01345-t002:row1:col1 = 'h−1'
- unparsed cell pharmaceutics-17-01345-t002:row3:col1 = 'h−1'
- unparsed cell pharmaceutics-17-01345-t002:row8:col1 = 'h−1'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['pharmaceutics-17-01345-t002:row4:col2', 'pharmaceutics-17-01345-t002:row4:col3'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['pharmaceutics-17-01345-t002:row5:col2', 'pharmaceutics-17-01345-t002:row5:col3'] |
| C5_dimension_Q306 | pass | 1 / [time] | not captured | not captured | not captured | ['pharmaceutics-17-01345-t002:row1:col2', 'pharmaceutics-17-01345-t002:row1:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['pharmaceutics-17-01345-t002:row3:col2', 'pharmaceutics-17-01345-t002:row3:col3'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['pharmaceutics-17-01345-t002:row6:col2', 'pharmaceutics-17-01345-t002:row6:col3'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['pharmaceutics-17-01345-t002:row7:col2', 'pharmaceutics-17-01345-t002:row7:col3'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 36.4 L/h | not captured | not captured | ['pharmaceutics-17-01345-t002:row4:col2', 'pharmaceutics-17-01345-t002:row4:col3'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 224 L | not captured | not captured | ['pharmaceutics-17-01345-t002:row5:col2', 'pharmaceutics-17-01345-t002:row5:col3'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 108 L | not captured | not captured | ['pharmaceutics-17-01345-t002:row7:col2', 'pharmaceutics-17-01345-t002:row7:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=enalaprilat) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | fail | 5 scholar param(s) emitted or defaulted | 3 covered | not captured | neither emitted nor in defaulted[]: ['Q/F', 'V2/F'] |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_enalapril/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Steichert_2025_2` / `Steichert_2025_2::reference`)
- model: `../../../knowledgebase/drugs/drug_enalapril/models/modelica/Enalapril_Steichert2025v2_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_enalapril/models/modelica/Enalapril_Steichert2025v2_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_enalapril/models/modelica/Enalapril_Steichert2025v2_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_enalapril/Enalapril_Steichert2025v2_reference/Enalapril_Steichert2025v2_reference_modelica.zip" download>Enalapril_Steichert2025v2_reference_modelica.zip</a> <span class="pk-size">(4.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_enalapril/Enalapril_Steichert2025v2_reference/Enalapril_Steichert2025v2_reference_matlab.zip" download>Enalapril_Steichert2025v2_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_enalapril/Enalapril_Steichert2025v2_reference/Enalapril_Steichert2025v2_reference_matlab_simbio.zip" download>Enalapril_Steichert2025v2_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_enalapril/Enalapril_Steichert2025v2_reference/Enalapril_Steichert2025v2_reference_sbml.zip" download>Enalapril_Steichert2025v2_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_enalapril/Enalapril_Steichert2025v2_reference/Enalapril_Steichert2025v2_reference_cellml.zip" download>Enalapril_Steichert2025v2_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_1C_enteral.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_enalapril/Enalapril_Steichert2025v2_reference/Enalapril_Steichert2025v2_reference.svg" alt="Enalapril_Steichert2025v2_reference diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v26.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 16.1 mg, single dose, first-order absorption (ka 1.19 /h, F 1). Doses in the paper: 16.1–30.1 mg.

<dbs-fmusim paramsurl="drugs/drug_enalapril/Enalapril_Steichert2025v2_reference/Enalapril_Steichert2025v2_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_enalapril/Enalapril_Steichert2025v2_reference/Enalapril_Steichert2025v2_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_1C_enteral` · parameters `Enalapril_Steichert2025v2_reference_params.json` · controls `Enalapril_Steichert2025v2_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-30 23:09 UTC</sub>
