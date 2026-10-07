<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;ensitrelvir&quot;,&quot;href&quot;:&quot;drugs/drug_ensitrelvir/&quot;},{&quot;label&quot;:&quot;Ishibashi_2024 \u00b7 median&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ensitrelvir_Ishibashi2024_mean&quot;,&quot;label&quot;:&quot;Ishibashi_2024_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ensitrelvir/Ensitrelvir_Ishibashi2024_mean.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ensitrelvir_Ishibashi2024_median&quot;,&quot;label&quot;:&quot;Ishibashi_2024_median&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ensitrelvir/Ensitrelvir_Ishibashi2024_median.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ensitrelvir — `Ensitrelvir_Ishibashi2024_median`

> ## <span class="pk-badge pk-badge--green">extracted</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

## Citation
Ishibashi T et al., Population Pharmacokinetics of Ensitrel…, Clinical pharmacokinetics (2024)
  ·  DOI: [10.1007/s40262-024-01446-4](https://doi.org/10.1007/s40262-024-01446-4)

## Model component
<dbs-pgx drug="ensitrelvir" model-id="Ensitrelvir_Ishibashi2024_median" status="extracted" stale="false" population="healthy participants and participants infected with SARS-CoV-2" measured-compound="ensitrelvir" parameterization="apparent" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 6 extracted.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 0.198 | L/h | 5.5e-08 | [l] / [h] | not captured | exact (1.0) | Ishibashi_2024_table_4:row1:col6, Ishibashi_2024_table_4:row12:col6 | — | not captured |
| Vc/F (L) | `Q76` · V/F | 14.1 | L | 0.0141 | [l] | not captured | exact (1.0) | Ishibashi_2024_table_4:row2:col6, Ishibashi_2024_table_4:row13:col6 | — | not captured |
| Cmax_d1 (μg/mL) | `Q32` · Cmax | 47.7 | μg/mL | not captured | [µg] / [ml] | not captured | llm (0.6) | Ishibashi_2024_table_4:row3:col6, Ishibashi_2024_table_4:row14:col6 | — | not captured |
| AUC_d1 (μg*h/mL) | `Q88` · AUC | 887.3 | μg*h/mL | not captured | [[h] · [µg]] / [ml] | not captured | llm (0.6) | Ishibashi_2024_table_4:row4:col6, Ishibashi_2024_table_4:row15:col6 | — | not captured |
| C24_d1 (μg/mL) | `Q75` · Ct | 34.2 | μg/mL | not captured | [µg] / [ml] | not captured | llm (0.6) | Ishibashi_2024_table_4:row5:col6, Ishibashi_2024_table_4:row16:col6 | — | not captured |
| AUC_d5 (μg*h/mL) | `Q19` · AUCt | 1205 | μg*h/mL | not captured | [[h] · [µg]] / [ml] | not captured | llm (0.6) | Ishibashi_2024_table_4:row7:col6, Ishibashi_2024_table_4:row18:col6 | — | not captured |

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
- dropped duplicate Q32 ('Cmax_d5 (μg/mL)', value '55.1') — already have one for this compound
- dropped duplicate Q75 ('C24_d5 (μg/mL)', value '40.8') — already have one for this compound
- dropped duplicate Q32 ('Entire Cmax (μg/mL)', value '55.1') — already have one for this compound
- dropped duplicate Q88 ('Entire AUC (μg*h/mL)', value '5317') — already have one for this compound
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number '0.594' (source ['Tab3:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number '0.362' (source ['Tab3:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number '0.521' (source ['Tab3:footnote', 'Tab3:footnote']); the table cell was unparseable — needs review
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=ensitrelvir
- 1C volume normalization: Q290→Q76 (single-compartment model has no central/peripheral split; 'Vc/F (L)' is the general volume)
- population split: 'median' subgroup of Ishibashi_2024 (paper reports 2 populations: mean, median)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell Tab3:row2:col1 = '1.50 (1.25–1.75)'
- unparsed cell Tab3:row2:col3 = '1.50 (1.23–1.80)'
- unparsed cell Tab3:row2:col4 = '1.50 (1.23–1.80)'
- unparsed cell Tab3:row3:col1 = '0.211 (0.208–0.214)'
- unparsed cell Tab3:row3:col3 = '0.211 (0.207–0.214)'
- unparsed cell Tab3:row3:col4 = '0.211 (0.207–0.214)'
- unparsed cell Tab3:row4:col1 = '14.7 (13.9–15.5)'
- unparsed cell Tab3:row4:col3 = '14.8 (13.9–15.5)'
- unparsed cell Tab3:row4:col4 = '14.8 (13.9–15.5)'
- unparsed cell Tab3:row5:col1 = '0.539 (0.321–0.757)'
- unparsed cell Tab3:row5:col3 = '0.534 (0.331–0.823)'
- unparsed cell Tab3:row5:col4 = '0.534 (0.331–0.823)'
- unparsed cell Tab3:row6:col1 = '2.50 (1.80–3.20)'
- unparsed cell Tab3:row6:col3 = '2.49 (1.74–3.26)'
- unparsed cell Tab3:row6:col4 = '2.49 (1.74–3.26)'
- unparsed cell Tab3:row7:col1 = '0.594 (0.398–0.790)'
- unparsed cell Tab3:row7:col3 = '0.599 (0.447–1.00)'
- unparsed cell Tab3:row7:col4 = '0.599 (0.447–1.00)'
- unparsed cell Tab3:row8:col1 = '0.362 (0.262–0.462)'
- unparsed cell Tab3:row8:col3 = '0.367 (0.280–0.469)'
- unparsed cell Tab3:row8:col4 = '0.367 (0.280–0.469)'
- unparsed cell Tab3:row9:col1 = '0.521 (0.456–0.586)'
- unparsed cell Tab3:row9:col3 = '0.527 (0.459–0.585)'
- unparsed cell Tab3:row9:col4 = '0.527 (0.459–0.585)'
- unparsed cell Tab3:row10:col1 = '1.04 (0.960–1.12)'
- unparsed cell Tab3:row10:col3 = '1.04 (0.959–1.11)'
- unparsed cell Tab3:row10:col4 = '1.04 (0.959–1.11)'
- unparsed cell Tab3:row12:col1 = '72.9 (64.3–80.6)'
- unparsed cell Tab3:row12:col3 = '72.1 (64.4–80.4)'
- unparsed cell Tab3:row12:col4 = '72.1 (64.4–80.4)'
- unparsed cell Tab3:row13:col1 = '21.3 (19.7–22.8)'
- unparsed cell Tab3:row13:col3 = '21.3 (20.0–23.0)'
- unparsed cell Tab3:row13:col4 = '21.3 (20.0–23.0)'
- unparsed cell Tab3:row14:col3 = '0.0217 (0.0179–0.0263)'
- unparsed cell Tab3:row14:col4 = '0.0217 (0.0179–0.0263)'
- unparsed cell Tab3:row15:col1 = '14.7 (12.8–16.3)'
- unparsed cell Tab3:row15:col3 = '14.6 (12.7–16.5)'
- unparsed cell Tab3:row15:col4 = '14.6 (12.7–16.5)'
- unparsed cell Tab3:row17:col1 = '19.9 (18.5–21.3)'
- unparsed cell Tab3:row17:col3 = '19.8 (18.6–21.2)'
- unparsed cell Tab3:row17:col4 = '19.8 (18.6–21.2)'
- unparsed cell Tab3:row18:col1 = '0.0317 (0.0224–0.0410)'
- unparsed cell Tab3:row18:col3 = '0.0331 (0.00945–0.0570)'
- unparsed cell Tab3:row18:col4 = '0.0331 (0.00945–0.0570)'
- companion parameter table 4 transcribed (140 record(s))
- LLM selected parameter table(s) 4
- dropped sensitivity-analysis table(s) 3 from the LLM selection — perturbations of a model, not a model

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Ishibashi_2024_table_4:row7:col6', 'Ishibashi_2024_table_4:row18:col6'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Ishibashi_2024_table_4:row1:col6', 'Ishibashi_2024_table_4:row12:col6'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Ishibashi_2024_table_4:row3:col6', 'Ishibashi_2024_table_4:row14:col6'] |
| C5_dimension_Q75 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Ishibashi_2024_table_4:row5:col6', 'Ishibashi_2024_table_4:row16:col6'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Ishibashi_2024_table_4:row2:col6', 'Ishibashi_2024_table_4:row13:col6'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Ishibashi_2024_table_4:row4:col6', 'Ishibashi_2024_table_4:row15:col6'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.198 L/h | not captured | not captured | ['Ishibashi_2024_table_4:row1:col6', 'Ishibashi_2024_table_4:row12:col6'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 14.1 L | not captured | not captured | ['Ishibashi_2024_table_4:row2:col6', 'Ishibashi_2024_table_4:row13:col6'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_ensitrelvir/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Ishibashi_2024` / `Ishibashi_2024::median`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_ensitrelvir/Ensitrelvir_Ishibashi2024_median/Ensitrelvir_Ishibashi2024_median_modelica.zip" download>Ensitrelvir_Ishibashi2024_median_modelica.zip</a> <span class="pk-size">(4.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_ensitrelvir/Ensitrelvir_Ishibashi2024_median/Ensitrelvir_Ishibashi2024_median_fmi.zip" download>Ensitrelvir_Ishibashi2024_median_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_ensitrelvir/Ensitrelvir_Ishibashi2024_median/Ensitrelvir_Ishibashi2024_median_matlab.zip" download>Ensitrelvir_Ishibashi2024_median_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_ensitrelvir/Ensitrelvir_Ishibashi2024_median/Ensitrelvir_Ishibashi2024_median_matlab_simbio.zip" download>Ensitrelvir_Ishibashi2024_median_matlab_simbio.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_ensitrelvir/Ensitrelvir_Ishibashi2024_median/Ensitrelvir_Ishibashi2024_median_sbml.zip" download>Ensitrelvir_Ishibashi2024_median_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_ensitrelvir/Ensitrelvir_Ishibashi2024_median/Ensitrelvir_Ishibashi2024_median_cellml.zip" download>Ensitrelvir_Ishibashi2024_median_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_1C_enteral.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_ensitrelvir/Ensitrelvir_Ishibashi2024_median/Ensitrelvir_Ishibashi2024_median.svg" alt="Ensitrelvir_Ishibashi2024_median diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v26.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 20 mg, single dose, first-order absorption (ka 0.5 /h, F 1). Doses in the paper: 20, 70, 125, 250, 375, 500, 750, 1000, 2000 mg.

<dbs-fmusim paramsurl="drugs/drug_ensitrelvir/Ensitrelvir_Ishibashi2024_median/Ensitrelvir_Ishibashi2024_median_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_ensitrelvir/Ensitrelvir_Ishibashi2024_median/Ensitrelvir_Ishibashi2024_median_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_1C_enteral` · parameters `Ensitrelvir_Ishibashi2024_median_params.json` · controls `Ensitrelvir_Ishibashi2024_median_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 15:23 UTC</sub>
