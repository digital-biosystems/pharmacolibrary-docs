# abacavir — `Abacavir_Zhao2013_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

### Reviewer guidance

**What is wrong:** a compartment is unreachable, or a metabolite is unlinked

**Steps:**
1. Check the record's links in _interpretv2.yaml — every compartment needs a path to the dosed one.
2. Parent/metabolite records commonly miss the formation link.

<sub>owner: **curator** · guidance written by playbook</sub>

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Zhao W; Piana C; Danhof M; Burger D; Della Pasqua O; Jacqz-Aigrain E et al. (2013). British journal of clinical pharmacology 75
  ·  DOI: [10.1111/bcp.12024](https://doi.org/10.1111/bcp.12024)

## Model component
<dbs-pgx drug="abacavir" model-id="Abacavir_Zhao2013_reference" status="rejected" stale="false" population="HIV-infected infants, toddlers and children" measured-compound="abacavir" parameterization="apparent" topology="2C"></dbs-pgx>

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Absorption rate constant, Ka (h -1 ) | `Q49` · kabs | —(suppressed) | h -1 | — | [1] / [h] | not captured | llm_confirmed (0.6) | tab_1:row3:col1, tab_1:row3:col2, tab_1:row3:col3, tab_1:row3:col4 | — | not captured |
| CL/Fref | `Q27` · CL/F | —(suppressed) | l h -1 | — | [l] / [h] | not captured | llm (0.6) | tab_1:row6:col1, tab_1:row6:col2, tab_1:row6:col3, tab_1:row6:col4 | — | not captured |
| q1 | `Q30` · Q | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | tab_1:row7:col1, tab_1:row7:col2, tab_1:row7:col3, tab_1:row7:col4 | — | not captured |
| Apparent peripheral volume of distribution, V2/F (l) | `Q82` · V2/F | —(suppressed) | l | — | [l] | not captured | llm_confirmed (0.6) | tab_1:row12:col1, tab_1:row12:col2, tab_1:row12:col3, tab_1:row12:col4 | — | not captured |
| Intercompartment clearance, Q/F (l h -1 ) | `Q69` · Q/F | —(suppressed) | l h -1 | — | [l] / [h] | not captured | llm_corrected (0.6) | tab_1:row13:col1, tab_1:row13:col2, tab_1:row13:col3, tab_1:row13:col4 | — | not captured |
| V1/Fref | `Q900` · V1/Fref | —(suppressed) | l | — | not captured | not captured | not captured (not captured) | tab_1:row10:col1, tab_1:row10:col2, tab_1:row10:col3, tab_1:row10:col4 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| V1/Fref | Q290 | not captured | llm |

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q30 ('q2', value '0.810') — already have one for this compound
- unit_dimension_mismatch: 'Q/F' → Q69 (unit '[length] ** 3' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q69 ('Q/F', value '42.5') — already have one for this compound
- dropped duplicate Q290 ('V1/F', value '47.7') — already have one for this compound
- dropped duplicate Q82 ('V2/F', value '57.5') — already have one for this compound
- unit_dimension_mismatch: 'CL/F' → Q27 (unit '[length] ** 3' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q27 ('CL/F', value '21.9') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=abacavir
- bound model equation to Q290 (V1/F): V1/F = 13.0 ¥ (BW/17.6)^0.810
- Q290 (V1/F) is equation-defined: value moved to equation-variable 'V1/Fref'; equation kept verbatim
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 2
- captured model equation V1/F = 13.0 ¥ (BW/17.6)^0.810

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row6:col1', 'tab_1:row6:col2', 'tab_1:row6:col3', 'tab_1:row6:col4'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row10:col1', 'tab_1:row10:col2', 'tab_1:row10:col3', 'tab_1:row10:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['tab_1:row3:col1', 'tab_1:row3:col2', 'tab_1:row3:col3', 'tab_1:row3:col4'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_1:row13:col1', 'tab_1:row13:col2', 'tab_1:row13:col3', 'tab_1:row13:col4'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_1:row12:col1', 'tab_1:row12:col2', 'tab_1:row12:col3', 'tab_1:row12:col4'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 20.1 L/h | not captured | not captured | ['tab_1:row6:col1', 'tab_1:row6:col2', 'tab_1:row6:col3', 'tab_1:row6:col4'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 13.5 L | not captured | not captured | ['tab_1:row12:col1', 'tab_1:row12:col2', 'tab_1:row12:col3', 'tab_1:row12:col4'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_abacavir/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Zhao_2013` / `Zhao_2013::HIV-infected infants, toddlers and children`)


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
