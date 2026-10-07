<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;vildagliptin&quot;,&quot;href&quot;:&quot;drugs/drug_vildagliptin/&quot;},{&quot;label&quot;:&quot;Dias_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Vildagliptin_Dias2026_reference&quot;,&quot;label&quot;:&quot;Dias_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vildagliptin/Vildagliptin_Dias2026_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# vildagliptin — `Vildagliptin_Dias2026_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Dias BB et al., Preclinical Modeling and Simulation to…, CPT: pharmacometrics & syst… (2026)
  ·  DOI: [10.1002/psp4.70165](https://doi.org/10.1002/psp4.70165)

## Model component
<dbs-pgx drug="vildagliptin" model-id="Vildagliptin_Dias2026_reference" status="extracted" stale="false" population="healthy and diabetic rats" measured-compound="vildagliptin" parameterization="apparent" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 7 extracted.

**Parameterization:** Q/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (L/h/kg) | `Q22` · CL | 2.72 | L/h/kg | 5.288888888888889e-05 | [l] / [[h] · [kg]] | 5 | exact (1.0) | psp470165-tbl-0001:row1:col1 | — | 19.2 (19% RSE) |
| V 1 (L/kg) | `Q63` · V1 | 1.11 | L/kg | 0.0777 | [l] / [kg] | 9 | space_fold (0.95) | psp470165-tbl-0001:row2:col1 | — | not captured |
| Q 1,healthy (L/h/kg) | `Q30` · Q | 0.338 | L/h/kg | 6.572222222222223e-06 | [l] / [[h] · [kg]] | 21 | llm (0.6) | psp470165-tbl-0001:row3:col1 | — | not captured |
| V 2 (L/kg) | `Q64` · V2 | 1.85 | L/kg | 0.1295 | [l] / [kg] | 12 | space_fold (0.95) | psp470165-tbl-0001:row5:col1 | — | not captured |
| V 3 (L/kg) | `Q77` · V3 | 2.55 | L/kg | 0.1785 | [l] / [kg] | 26 | space_fold (0.95) | psp470165-tbl-0001:row8:col1 | — | 76.6 (29% RSE) |
| V 4 (L/kg) | `Q352` · Vnorm | 0.856 | L/kg | 0.05992 | [l] / [kg] | 49 | llm (0.6) | psp470165-tbl-0001:row12:col1 | — | not captured |
| Qin,liver (L/h) | `Q69` · Q/F | 56.65 | L/h | 1.5736111111111112e-05 | [l] / [h] | not captured | llm (0.6) | Dias_2026_table_S2:row7:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['ka', 'Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `invented_absorption`: ka defaulted — not reported in source
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing

**Interpretation flags:**
- table section iiv: 'CL (L/h/kg)' routed out of structural estimates ('IIV (% RSE)')
- table section iiv: 'Q 1,healthy (L/h/kg)' routed out of structural estimates ('IIV (% RSE)')
- table section iiv: 'Q 1,diabetic (L/h/kg)' routed out of structural estimates ('IIV (% RSE)')
- table section iiv: 'V 3 (L/kg)' routed out of structural estimates ('IIV (% RSE)')
- table section iiv: 'Q out,liver,healthy (L/h/kg)' routed out of structural estimates ('IIV (% RSE)')
- table section iiv: 'Q out,liver,diabetic (L/h/kg)' routed out of structural estimates ('IIV (% RSE)')
- table section iiv: 'V 4 (L/kg)' routed out of structural estimates ('IIV (% RSE)')
- table section residual_error: 'Plasma' routed out of structural estimates ('Residual error (ng/L)')
- table section residual_error: 'Muscle' routed out of structural estimates ('Residual error (ng/L)')
- table section residual_error: 'Liver' routed out of structural estimates ('Residual error (ng/L)')
- dropped duplicate Q30 ('Q 1,diabetic (L/h/kg)', value '2.61') — already have one for this compound
- dropped duplicate Q30 ('Q in,muscle (L/h/kg)', value '2.09') — already have one for this compound
- dropped duplicate Q30 ('Q out,muscle (L/h/kg)', value '14.3') — already have one for this compound
- dropped duplicate Q30 ('Q in,liver (L/h/kg)', value '2.5') — already have one for this compound
- dropped duplicate Q30 ('Q out,liver,healthy (L/h/kg)', value '218') — already have one for this compound
- dropped duplicate Q30 ('Q out,liver,diabetic (L/h/kg)', value '19.7') — already have one for this compound
- dropped duplicate Q22 ('CL (L/h)', value '101.01') — already have one for this compound
- dropped duplicate Q63 ('V1 (L)', value '61.64') — already have one for this compound
- dropped duplicate Q30 ('Q1 (L/h)', value '27.65') — already have one for this compound
- dropped duplicate Q64 ('V2 (L)', value '168.35') — already have one for this compound
- dropped duplicate Q30 ('Qin,muscle (L/h)', value '47.36') — already have one for this compound
- dropped duplicate Q30 ('Qout,muscle (L/h)', value '324.07') — already have one for this compound
- dropped duplicate Q77 ('V3 (L)', value '232.05') — already have one for this compound
- dropped duplicate Q69 ('Qout,liver (L/h)', value '446.44') — already have one for this compound
- dropped duplicate Q77 ('V4 (L)', value '77.90') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=vildagliptin
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count

**Extraction notes:**
- unparsed cell psp470165-tbl-0001:row1:col4 = '2.64 (2.34–2.92)'
- unparsed cell psp470165-tbl-0001:row2:col4 = '1.09 (0.85–1.29)'
- unparsed cell psp470165-tbl-0001:row3:col4 = '0.322 (0.217–0.428)'
- unparsed cell psp470165-tbl-0001:row5:col4 = '1.54 (0.73–1.98)'
- unparsed cell psp470165-tbl-0001:row6:col4 = '1.92 (1.19–3.17)'
- unparsed cell psp470165-tbl-0001:row7:col4 = '13.51 (8.22–23.27)'
- unparsed cell psp470165-tbl-0001:row8:col4 = '2.47 (1.29–4.12)'
- unparsed cell psp470165-tbl-0001:row9:col4 = '1.74 (0.62–3.87)'
- unparsed cell psp470165-tbl-0001:row10:col4 = '165 (49–419)'
- unparsed cell psp470165-tbl-0001:row12:col4 = '2.24 (0.52–6.69)'
- unparsed cell psp470165-tbl-0001:row14:col4 = '0.209 (0.148–0.267)'
- unparsed cell psp470165-tbl-0001:row15:col4 = '0.208 (0.158–0.251)'
- unparsed cell psp470165-tbl-0001:row16:col4 = '0.160 (0.128–0.206)'
- companion parameter table S2 transcribed (10 record(s))
- LLM selected parameter table(s) 1, S2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp470165-tbl-0001:row1:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp470165-tbl-0001:row3:col1'] |
| C5_dimension_Q352 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp470165-tbl-0001:row12:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp470165-tbl-0001:row2:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp470165-tbl-0001:row5:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Dias_2026_table_S2:row7:col1'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp470165-tbl-0001:row8:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 190 L/h | not captured | not captured | ['psp470165-tbl-0001:row1:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 77.7 L | not captured | not captured | ['psp470165-tbl-0001:row2:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 130 L | not captured | not captured | ['psp470165-tbl-0001:row5:col1'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_vildagliptin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Dias_2026` / `Dias_2026::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_vildagliptin/Vildagliptin_Dias2026_reference/Vildagliptin_Dias2026_reference_modelica.zip" download>Vildagliptin_Dias2026_reference_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_vildagliptin/Vildagliptin_Dias2026_reference/Vildagliptin_Dias2026_reference_fmi.zip" download>Vildagliptin_Dias2026_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_vildagliptin/Vildagliptin_Dias2026_reference/Vildagliptin_Dias2026_reference_matlab.zip" download>Vildagliptin_Dias2026_reference_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_vildagliptin/Vildagliptin_Dias2026_reference/Vildagliptin_Dias2026_reference_matlab_simbio.zip" download>Vildagliptin_Dias2026_reference_matlab_simbio.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_vildagliptin/Vildagliptin_Dias2026_reference/Vildagliptin_Dias2026_reference_sbml.zip" download>Vildagliptin_Dias2026_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_vildagliptin/Vildagliptin_Dias2026_reference/Vildagliptin_Dias2026_reference_cellml.zip" download>Vildagliptin_Dias2026_reference_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_2C_enteral.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_vildagliptin/Vildagliptin_Dias2026_reference/Vildagliptin_Dias2026_reference.svg" alt="Vildagliptin_Dias2026_reference diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v26.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 3500 mg, single dose, first-order absorption (ka 0.5 /h, F 1). Dose in the paper: 3500 mg.

<dbs-fmusim paramsurl="drugs/drug_vildagliptin/Vildagliptin_Dias2026_reference/Vildagliptin_Dias2026_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_vildagliptin/Vildagliptin_Dias2026_reference/Vildagliptin_Dias2026_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_2C_enteral` · parameters `Vildagliptin_Dias2026_reference_params.json` · controls `Vildagliptin_Dias2026_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 16:22 UTC</sub>
