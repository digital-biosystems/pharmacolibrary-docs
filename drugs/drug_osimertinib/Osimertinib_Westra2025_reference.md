<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;osimertinib&quot;,&quot;href&quot;:&quot;drugs/drug_osimertinib/&quot;},{&quot;label&quot;:&quot;Westra_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Osimertinib_Jones2023_reference&quot;,&quot;label&quot;:&quot;Jones_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_osimertinib/Osimertinib_Jones2023_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Osimertinib_Rodier2022_reference&quot;,&quot;label&quot;:&quot;Rodier_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_osimertinib/Osimertinib_Rodier2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Osimertinib_Westra2025_reference&quot;,&quot;label&quot;:&quot;Westra_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_osimertinib/Osimertinib_Westra2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# osimertinib — `Osimertinib_Westra2025_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `osimertinib and cobicistat`, measured `osimertinib`.

## Citation
Westra N et al., Osimertinib Cost Minimization in Non-Sm…, Journal of clinical pharmac… (2025)
  ·  DOI: [10.1002/jcph.70085](https://doi.org/10.1002/jcph.70085)

## Model component
<dbs-pgx drug="osimertinib" model-id="Osimertinib_Westra2025_reference" status="extracted" stale="false" population="patients with NSCLC in the OSIBOOST cohort" measured-compound="osimertinib" parameterization="apparent" topology="parent_metabolite"></dbs-pgx>

**Model structure:** parent–metabolite model: parent with 1 compartment(s); metabolite AZ5104: 1 compartment(s); formed from the central compartment; oral dose — template `PK_3M_9C`.  
**Parameters:** 7 extracted.

**Parameterization:** CL/F, V/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Ka (/h) b | `Q49` · kabs | 0.24 | 1/h | 6.666666666666667e-05 | 1/h | not captured | space_fold (0.95) | jcph70085-tbl-0002:row2:col1 | — | not captured |
| V/F osimertinib (L) b | `Q76` · V/F | 966 | L | 0.966 | L | not captured | llm_confirmed (0.6) | jcph70085-tbl-0002:row3:col2 | — | not captured |
| V/F AZ5104 (L) b | `Q290` · V1/F | 181 | L | 0.181 | L | not captured | exact (1.0) | jcph70085-tbl-0002:row4:col2 | — | not captured |
| CL/F osimertinib (L/h) b | `Q27` · CL/F | 19.0 | L/h | 5.277777777777778e-06 | L/h | not captured | llm_confirmed (0.6) | jcph70085-tbl-0002:row5:col2 | — | not captured |
| CL/F AZ5104 (L/h) b | `Q27` · CL/F | 46.3 | L/h | 1.2861111111111112e-05 | L/h | not captured | exact (1.0) | jcph70085-tbl-0002:row6:col2 | — | not captured |
| GMR AUC0‐144h [90% CI] | `Q21` · AUC ratio | 1 | DL 1 | not captured | [dl1] | not captured | llm (0.6) | Westra_2025_table_3:row4:col1, Westra_2025_table_3:row10:col1 | — | not captured |
| GMR Cmax [90% CI] | `Q33` · Cmax_ratio | 1 | DL 1 | not captured | [dl1] | not captured | llm_corrected (0.6) | Westra_2025_table_3:row5:col1, Westra_2025_table_3:row11:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'Covariance a' routed out of structural estimates ('BSV on CL/F osimertinib')
- column 'bootstrap' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped duplicate Q27 ('Effect of cobicistat on CL/F', value '0.694') — already have one for this compound
- unit_dimension_unknown: 'DL 1' (AUC ratio)
- unit_dimension_unknown: 'DL 1' (Cmax_ratio)
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 1 (source ['jcph70085-tbl-0002:footnote', 'jcph70085-tbl-0002:footnote', 'jcph70085-tbl-0002:footnote']); the table cell was unparseable — needs review
- implicit units: 'Ka (/h) b' → 1/h (from the popPK convention: 'The text identifies Ka as an absorption rate constant but states no unit. First-order absorption rate constants are conv')
- implicit units: 'V/F osimertinib (L) b' → L (from the popPK convention: 'The table footnote defines V/F as apparent volume of distribution but states no unit. Volumes are conventionally express')
- implicit units: 'V/F AZ5104 (L) b' → L (from the popPK convention: 'The table footnote defines V/F as apparent volume of distribution but states no unit. Volumes are conventionally express')
- implicit units: 'CL/F osimertinib (L/h) b' → L/h (from the popPK convention: 'The table footnote defines CL/F as apparent clearance but states no unit. Clearances are conventionally expressed in L/h')
- implicit units: 'CL/F AZ5104 (L/h) b' → L/h (from the popPK convention: 'The table footnote defines CL/F as apparent clearance but states no unit. Clearances are conventionally expressed in L/h')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=osimertinib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [1]
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 11/11 row label(s) assigned, 5 linked by role; re-tagged AZ5104→osimertinib ×8
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell jcph70085-tbl-0002:row3:col1 = '990 (29%)'
- unparsed cell jcph70085-tbl-0002:row3:col3 = '669‐1859'
- unparsed cell jcph70085-tbl-0002:row4:col1 = '184 (48.5%)'
- unparsed cell jcph70085-tbl-0002:row4:col3 = '65‐7547'
- unparsed cell jcph70085-tbl-0002:row5:col1 = '19.0 (8.5%)'
- unparsed cell jcph70085-tbl-0002:row5:col3 = '16.1‐22.6'
- unparsed cell jcph70085-tbl-0002:row6:col1 = '47.3 (7.8%)'
- unparsed cell jcph70085-tbl-0002:row6:col3 = '31.1‐55.4'
- unparsed cell jcph70085-tbl-0002:row7:col1 = '0.704 (3.5%)'
- unparsed cell jcph70085-tbl-0002:row7:col3 = '0.639‐0.743'
- unparsed cell jcph70085-tbl-0002:row8:col1 = '0.178 (10.6%)'
- unparsed cell jcph70085-tbl-0002:row8:col3 = '0.142‐0.216'
- unparsed cell Westra_2025_table_3:row4:col2 = '1.43 [1.40‐1.46]'
- unparsed cell Westra_2025_table_3:row4:col3 = '0.96 [0.94‐0.98]'
- unparsed cell Westra_2025_table_3:row4:col4 = '0.73 [0.71‐0.74]'
- unparsed cell Westra_2025_table_3:row5:col2 = '1.39 [1.37‐1.42]'
- unparsed cell Westra_2025_table_3:row5:col3 = '1.06 [1.04‐1.08]'
- unparsed cell Westra_2025_table_3:row5:col4 = '0.79 [0.78‐0.81]'
- unparsed cell Westra_2025_table_3:row10:col2 = '1.0 [0.99‐1.03]'
- unparsed cell Westra_2025_table_3:row10:col3 = '0.67 [0.66‐0.68]'
- unparsed cell Westra_2025_table_3:row10:col4 = '0.51 [0.50‐0.52]'
- unparsed cell Westra_2025_table_3:row11:col2 = '0.9 [0.97‐1.01]'
- unparsed cell Westra_2025_table_3:row11:col3 = '0.74 [0.73‐0.76]'
- unparsed cell Westra_2025_table_3:row11:col4 = '0.56 [0.55‐0.57]'
- companion parameter table 3 transcribed (4 record(s))
- LLM selected parameter table(s) 3
- dropped sensitivity-analysis table(s) 2 from the LLM selection — perturbations of a model, not a model

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['jcph70085-tbl-0002:row5:col2'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['jcph70085-tbl-0002:row6:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['jcph70085-tbl-0002:row4:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['jcph70085-tbl-0002:row2:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['jcph70085-tbl-0002:row3:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 19 L/h | not captured | not captured | ['jcph70085-tbl-0002:row5:col2'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 46.3 L/h | not captured | not captured | ['jcph70085-tbl-0002:row6:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 181 L | not captured | not captured | ['jcph70085-tbl-0002:row4:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 966 L | not captured | not captured | ['jcph70085-tbl-0002:row3:col2'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_osimertinib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Westra_2025` / `Westra_2025::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_osimertinib/Osimertinib_Westra2025_reference/Osimertinib_Westra2025_reference_modelica.zip" download>Osimertinib_Westra2025_reference_modelica.zip</a> <span class="pk-size">(5.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_osimertinib/Osimertinib_Westra2025_reference/Osimertinib_Westra2025_reference_fmi.zip" download>Osimertinib_Westra2025_reference_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_3M_9C.fmu" download>PK_3M_9C.fmu</a> <span class="pk-size">(1.4 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_osimertinib/Osimertinib_Westra2025_reference/Osimertinib_Westra2025_reference_matlab.zip" download>Osimertinib_Westra2025_reference_matlab.zip</a> <span class="pk-size">(3.7 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_osimertinib/Osimertinib_Westra2025_reference/Osimertinib_Westra2025_reference_sbml.zip" download>Osimertinib_Westra2025_reference_sbml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_osimertinib/Osimertinib_Westra2025_reference/Osimertinib_Westra2025_reference_cellml.zip" download>Osimertinib_Westra2025_reference_cellml.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_3M_9C.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_osimertinib/Osimertinib_Westra2025_reference/Osimertinib_Westra2025_reference.svg" alt="Osimertinib_Westra2025_reference diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v26.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 80 mg, single dose, first-order absorption (ka 0.24 /h, F 1). _The paper's dose was not captured; the default is the WHO ATC DDD 80 mg oral (L01EB04) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_osimertinib/Osimertinib_Westra2025_reference/Osimertinib_Westra2025_reference_params.json" metaurl="assets/fmu/PK_3M_9C.vr.json" wasmurl="assets/fmu/PK_3M_9C.js" controlsurl="drugs/drug_osimertinib/Osimertinib_Westra2025_reference/Osimertinib_Westra2025_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_3M_9C` · parameters `Osimertinib_Westra2025_reference_params.json` · controls `Osimertinib_Westra2025_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 03:49 UTC</sub>
