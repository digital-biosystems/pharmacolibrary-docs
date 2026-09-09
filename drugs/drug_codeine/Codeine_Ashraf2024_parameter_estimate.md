# codeine — `Codeine_Ashraf2024_parameter_estimate`

> ## <span class="pk-badge pk-badge--red">rejected</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Ashraf MW; Poikola S; Neuvonen M; Kiiski JI; Kontinen VK; Olkkola KT; et al. et al. (2024). Clinical pharmacokinetics 63
  ·  DOI: [10.1007/s40262-024-01433-9](https://doi.org/10.1007/s40262-024-01433-9)

## Model component
<dbs-pgx drug="codeine" model-id="Codeine_Ashraf2024_parameter_estimate" status="rejected" stale="false" population="ambulatory surgical patients" measured-compound="codeine" parameterization="mechanistic" topology="general_linear"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ka,cod | `Q49` · kabs | —(suppressed) | not captured | — | not captured | not captured | llm_confirmed (0.6) | Tab2:row2:col2, Tab2:row2:col3 | — | not captured |
| Vc,cod | `Q63` · V1 | —(suppressed) | not captured | — | not captured | not captured | llm_confirmed (0.6) | Tab2:row4:col2, Tab2:row4:col3 | — | not captured |
| fmor | `Q45` · fm | —(suppressed) | not captured | — | not captured | not captured | llm (0.6) | Tab2:row8:col2, Tab2:row8:col3 | — | not captured |
| CL | `Q22` · CL | —(suppressed) | ml/h | — | L/h | not captured | review_gapfill (0.7) | Capparelli_2005:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'CLcod' — extend the ontology if this is a real PK parameter (source ['Tab2:row3:col2', 'Tab2:row3:col3'])
- dropped unlinked row (NIL): 'Fcod' — extend the ontology if this is a real PK parameter (source ['Tab2:row5:col2', 'Tab2:row5:col3'])
- dropped unlinked row (NIL): 'CLmor' — extend the ontology if this is a real PK parameter (source ['Tab2:row6:col2', 'Tab2:row6:col3'])
- dropped duplicate Q63 ('Vc,mor', value '22.8') — already have one for this compound
- dropped unlinked row (NIL): 'GENeff' — extend the ontology if this is a real PK parameter (source ['Tab2:row9:col2', 'Tab2:row9:col3'])
- dropped unlinked row (NIL): 'CLC6G' — extend the ontology if this is a real PK parameter (source ['Tab2:row10:col2', 'Tab2:row10:col3'])
- dropped duplicate Q63 ('Vc,C6G', value '5.36') — already have one for this compound
- dropped unlinked row (NIL): 'CLM3G' — extend the ontology if this is a real PK parameter (source ['Tab2:row12:col2', 'Tab2:row12:col3'])
- dropped duplicate Q63 ('Vc,M3G', value '8.47') — already have one for this compound
- dropped duplicate Q49 ('ηka,cod', value '3.75') — already have one for this compound
- dropped duplicate Q63 ('ηVc,cod', value '0.181') — already have one for this compound
- dropped unlinked row (NIL): 'ηFcod' — extend the ontology if this is a real PK parameter (source ['Tab2:row16:col2', 'Tab2:row16:col3'])
- dropped unlinked row (NIL): 'ηCLmor' — extend the ontology if this is a real PK parameter (source ['Tab2:row17:col2', 'Tab2:row17:col3'])
- dropped unlinked row (NIL): 'ηRmor' — extend the ontology if this is a real PK parameter (source ['Tab2:row18:col2', 'Tab2:row18:col3'])
- dropped unlinked row (NIL): 'εcod' — extend the ontology if this is a real PK parameter (source ['Tab2:row19:col2', 'Tab2:row19:col3'])
- dropped unlinked row (NIL): 'εmor' — extend the ontology if this is a real PK parameter (source ['Tab2:row20:col2', 'Tab2:row20:col3'])
- dropped unlinked row (NIL): 'εC6G' — extend the ontology if this is a real PK parameter (source ['Tab2:row21:col2', 'Tab2:row21:col3'])
- dropped unlinked row (NIL): 'εM3G' — extend the ontology if this is a real PK parameter (source ['Tab2:row22:col2', 'Tab2:row22:col3'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=codeine
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted
- population split: 'parameter estimate' subgroup of Ashraf_2024 (paper reports 2 populations: descriptiona, parameter estimate)
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q22 (CL) from Capparelli_2005's review values (primary lacked it)
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab2:row2:col1 = 'Codeine absorption rate constant (h-1)'
- unparsed cell Tab2:row11:col1 = 'C6G central volume (L)'
- unparsed cell Tab2:row11:col3 = '(2.88–7 .86)'
- unparsed cell Tab2:row13:col1 = 'M3G central volume (L)'
- unparsed cell Tab2:row21:col1 = 'RV for C6G observations'
- unparsed cell Tab2:row22:col1 = 'RV for M3G observations'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Capparelli_2005:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.18 | not captured | not captured | ['Capparelli_2005:review'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['fmor', '1 - fmor', 'fM3G'] | not captured | not captured | not captured |
| C9_phys_window_Q22 | fail | clearance within physiological range | 0.00018 L/h | not captured | not captured | ['Capparelli_2005:review'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_codeine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Ashraf_2024` / `Ashraf_2024::parameter_estimate`)


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
