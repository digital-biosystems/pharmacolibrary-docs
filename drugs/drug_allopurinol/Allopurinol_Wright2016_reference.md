# allopurinol — `Allopurinol_Wright2016_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

### Reviewer guidance

> ⚙️ **Pipeline limitation — scholar.** a reported unit is missing from the conversion table, so the parameter reached the engineer without an SI value<br><sub>evidence: `kel`</sub>

> This is not a curation fix: the record is waiting on the pipeline, not on a reviewer's judgement.

**What is wrong:** a structural parameter has the wrong dimension.

**Steps:**
1. Not a curation fix — scholar limitation.
2. Compare unit_verbatim with unit_canonical in _interpretv2.yaml for that parameter.
3. A misread unit in transcribe is the usual cause.

<sub>owner: **curator** · guidance written by playbook</sub>

> **Dose compound ≠ measured compound:** dosed `allopurinol`, measured `oxypurinol`.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Wright DF; Duffull SB; Merriman TR; Dalbeth N; Barclay ML; Stamp LK et al. (2016). British journal of clinical pharmacology 81
  ·  DOI: [10.1111/bcp.12799](https://doi.org/10.1111/bcp.12799)

## Model component
<dbs-pgx drug="allopurinol" model-id="Allopurinol_Wright2016_reference" status="rejected" stale="false" population="adults with gout" measured-compound="oxypurinol" parameterization="mechanistic" topology="parent_metabolite"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| θ V (l) | `Q61` · V | —(suppressed) | l | — | [l] | not captured | llm (0.6) | tab_0:row2:col5, tab_0:row2:col6 | — | not captured |
| K α (h | `Q47` · kel | —(suppressed) | h | — | [h] | 1.09 | llm (0.6) | tab_0:row3:col4, tab_0:row3:col5, tab_0:row3:col6 | — | not captured |
| absorption rate | `Q49` · kabs | —(suppressed) | h−1 | — | 1/h | not captured | review_gapfill (0.7) | Ekobena_2025:review | — | not captured |
| lag time | `Q83` · tlag | —(suppressed) | h | — | h | not captured | review_gapfill (0.7) | Ekobena_2025:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'θ CL (l h'
- unit_dimension_mismatch: 'K α (h' → Q47 (unit '[time]' vs ontology '1 / [time]') — route to review
- dropped value-less row: 'θ diuretic'
- dropped value-less row: 'θ RFexp'
- dropped PD-category row 'E max' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_0:row6:col5', 'tab_0:row6:col6'])
- dropped PD-category row 'U o (Baseline urate (mmol l' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_0:row7:col2', 'tab_0:row7:col3'])
- dropped value-less row: 'C 50 (μmol l'
- unit_dimension_unknown: 'Hill coefficient' (kel)
- dropped duplicate Q47 ('λ (Hill coefficient)', value '1.45') — already have one for this compound
- dropped value-less row: 'θE 0 diuretic'
- dropped unlinked row (NIL): 'ωCL oxy (CV%)' — extend the ontology if this is a real PK parameter (source ['tab_0:row13:col2', 'tab_0:row13:col3'])
- dropped value-less row: 'F_ ω Voxy'
- dropped value-less row: 'ωK α (CV%)' (captured trailing unit 'CV%' for child rows)
- dropped unlinked row (NIL): 'ωE max (CV%)' — extend the ontology if this is a real PK parameter (source ['tab_0:row16:col2', 'tab_0:row16:col3'])
- dropped value-less row: 'ωU o (CV%)' (captured trailing unit 'CV%' for child rows)
- dropped unlinked row (NIL): 'ω C50 (CV%)' — extend the ontology if this is a real PK parameter (source ['tab_0:row18:col2', 'tab_0:row18:col3'])
- routed 'Covar η Emax , η C50' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'Covar η Emax , η E0' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'Covar η C50 , η E0' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'Oxypurinol σ prop (CV%)' — extend the ontology if this is a real PK parameter (source ['tab_0:row23:col1', 'tab_0:row23:col2'])
- routed 'Urate σ add (mmol l' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=oxypurinol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q49 (kabs) from Ekobena_2025's review values (primary lacked it)
- gap-filled Q83 (tlag) from Ekobena_2025's review values (primary lacked it)

**Extraction notes:**
- unparsed cell tab_0:row1:col1 = 'À1 )'
- unparsed cell tab_0:row1:col5 = '1.32 (3.9)*'
- unparsed cell tab_0:row1:col6 = '1.31 [1.22, 1.44]'
- unparsed cell tab_0:row2:col7 = '41.5 [39.5, 43.5]'
- unparsed cell tab_0:row3:col1 = 'À1 )'
- unparsed cell tab_0:row4:col5 = '0.748 [0.64, 0.86]'
- unparsed cell tab_0:row5:col6 = '0.588 [0.476, 0.742]'
- unparsed cell tab_0:row6:col7 = '0.414 [0.323, 0.595]'
- unparsed cell tab_0:row7:col1 = 'À1 )'
- unparsed cell tab_0:row7:col4 = '0.508 [0.487, 0.530]'
- unparsed cell tab_0:row8:col1 = 'À1 )'
- unparsed cell tab_0:row8:col5 = '87.9 [61.3, 173]'
- unparsed cell tab_0:row9:col4 = '1.26 [1.05, 1.59]'
- unparsed cell tab_0:row11:col5 = '1.14 [1.09, 1.19]'
- unparsed cell tab_0:row13:col4 = '24.0 [19.3, 28.3]'
- unparsed cell tab_0:row16:col4 = '36.2 [18.7, 51.6]'
- unparsed cell tab_0:row17:col5 = '14.2 [10.9, 18.4]'
- unparsed cell tab_0:row18:col4 = '59.0 [23.1, 78.2]'
- unparsed cell tab_0:row19:col4 = '0.184 [0.023, 0.383]'
- unparsed cell tab_0:row20:col4 = '0.027 [0.003, 0.05]'
- unparsed cell tab_0:row21:col4 = '0.013 [0, 0.04]'
- unparsed cell tab_0:row23:col3 = '19.9 [17.7, 22.2]'
- unparsed cell tab_0:row25:col1 = 'À1 )'
- unparsed cell tab_0:row25:col4 = '0.038 [0.033, 0.044]'
- unparsed cell tab_0:row27:col1 = 'À1 )'
- unparsed cell tab_0:row27:col4 = '0.022 [0.016, 0.027]'
- unparsed cell tab_0:row29:col1 = 'À1 )'
- unparsed cell tab_0:row29:col4 = '0.036 [0.031, 0.042]'
- unparsed cell tab_0:row31:col1 = 'À1 )'
- unparsed cell tab_0:row31:col4 = '0.020 [0.019, 0.023]'
- unparsed cell tab_0:row33:col1 = 'À1 )'
- unparsed cell tab_0:row33:col4 = '0.052 [0.029, 0.074]'

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q47 | fail | [time] | h | not captured | not captured | ['tab_0:row3:col4', 'tab_0:row3:col5', 'tab_0:row3:col6'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Ekobena_2025:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_0:row2:col5', 'tab_0:row2:col6'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Ekobena_2025:review'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 41.6 L | not captured | not captured | ['tab_0:row2:col5', 'tab_0:row2:col6'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_allopurinol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Wright_2016` / `Wright_2016::adults with gout`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
