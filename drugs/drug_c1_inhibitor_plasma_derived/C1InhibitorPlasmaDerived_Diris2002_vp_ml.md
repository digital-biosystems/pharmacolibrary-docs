# c1-inhibitor, plasma derived — `C1InhibitorPlasmaDerived_Diris2002_vp_ml`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Diris JH; Hermens WT; Hemker PW; Lagrand WK; Hack CE; van Dieijen-Visser MP et al. (2002). Clinical pharmacology and therapeutics 72
  ·  DOI: [10.1067/mcp.2002.129320](https://doi.org/10.1067/mcp.2002.129320)

## Model component
<dbs-pgx drug="c1-inhibitor, plasma derived" model-id="C1InhibitorPlasmaDerived_Diris2002_vp_ml" status="extracted" stale="false" population="patients with acute myocardial infarction" measured-compound="C1-inhibitor protein" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | `Q900` · equation variable | 2953 | mL | not captured | [ml] | not captured | llm (0.6) | Diris_2002_table_1:row0:col4 | — | not captured |
| 2 | `Q63` · V1 | 5144 | mL | 0.005144 | [ml] | not captured | llm (0.6) | Diris_2002_table_1:row1:col4 | — | not captured |
| 5† | `Q61` · V | 2500 | mL | 0.0025 | [ml] | not captured | llm (0.6) | Diris_2002_table_1:row4:col4 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): '3' — extend the ontology if this is a real PK parameter (source ['Diris_2002_table_1:row2:col4'])
- dropped unlinked row (NIL): '4' — extend the ontology if this is a real PK parameter (source ['Diris_2002_table_1:row3:col4'])
- dropped unlinked row (NIL): '6' — extend the ontology if this is a real PK parameter (source ['Diris_2002_table_1:row5:col4'])
- dropped unlinked row (NIL): '7' — extend the ontology if this is a real PK parameter (source ['Diris_2002_table_1:row6:col4'])
- dropped unlinked row (NIL): '8' — extend the ontology if this is a real PK parameter (source ['Diris_2002_table_1:row7:col4'])
- dropped unlinked row (NIL): '9' — extend the ontology if this is a real PK parameter (source ['Diris_2002_table_1:row8:col4'])
- dropped unlinked row (NIL): '10' — extend the ontology if this is a real PK parameter (source ['Diris_2002_table_1:row9:col4'])
- dropped duplicate Q61 ('11', value '3000') — already have one for this compound
- dropped unlinked row (NIL): '12' — extend the ontology if this is a real PK parameter (source ['Diris_2002_table_1:row11:col4'])
- dropped duplicate Q63 ('13', value '3784') — already have one for this compound
- dropped unlinked row (NIL): '14' — extend the ontology if this is a real PK parameter (source ['Diris_2002_table_1:row13:col4'])
- dropped duplicate Q61 ('15', value '3106') — already have one for this compound
- dropped duplicate Q61 ('16', value '3590') — already have one for this compound
- dropped duplicate Q63 ('17†', value '2929') — already have one for this compound
- dropped duplicate Q61 ('18', value '6329') — already have one for this compound
- dropped duplicate Q61 ('19', value '4059') — already have one for this compound
- dropped unlinked row (NIL): '20' — extend the ontology if this is a real PK parameter (source ['Diris_2002_table_1:row19:col4'])
- dropped unlinked row (NIL): '21' — extend the ontology if this is a real PK parameter (source ['Diris_2002_table_1:row20:col4'])
- dropped duplicate Q61 ('22', value '3750') — already have one for this compound
- dropped unlinked row (NIL): 'Median (n = 20)' — extend the ontology if this is a real PK parameter (source ['Diris_2002_table_1:row22:col4'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=C1-inhibitor protein
- population split: 'vp (ml)' subgroup of Diris_2002 (paper reports 3 populations: age (y), body weight (kg), vp (ml))

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 1
- unparsed cell Diris_2002_table_1:row0:col5 = '0.009 (0.005 to 0.013)'
- unparsed cell Diris_2002_table_1:row1:col5 = '0.009 (0.008 to 0.010)'
- unparsed cell Diris_2002_table_1:row2:col5 = '0.007 (0.005 to 0.009)'
- unparsed cell Diris_2002_table_1:row3:col5 = '0.005 (0.003 to 0.007)'
- unparsed cell Diris_2002_table_1:row4:col5 = '0.900 (−0.470 to 2.270)'
- unparsed cell Diris_2002_table_1:row5:col5 = '0.011 (0.010 to 0.012)'
- unparsed cell Diris_2002_table_1:row6:col5 = '0.012 (0.009 to 0.015)'
- unparsed cell Diris_2002_table_1:row7:col5 = '0.003 (0.002 to 0.004)'
- unparsed cell Diris_2002_table_1:row8:col5 = '0.011 (0.008 to 0.014)'
- unparsed cell Diris_2002_table_1:row9:col5 = '0.010 (0.005 to 0.015)'
- unparsed cell Diris_2002_table_1:row10:col5 = '0.021 (0.017 to 0.025)'
- unparsed cell Diris_2002_table_1:row11:col5 = '0.010 (0.006 to 0.014)'
- unparsed cell Diris_2002_table_1:row12:col5 = '0.017 (0.012 to 0.022)'
- unparsed cell Diris_2002_table_1:row13:col5 = '0.016 (0.014 to 0.018)'
- unparsed cell Diris_2002_table_1:row14:col5 = '0.016 (0.011 to 0.021)'
- unparsed cell Diris_2002_table_1:row15:col5 = '0.025 (0.021 to 0.029)'
- unparsed cell Diris_2002_table_1:row16:col5 = '0.002 (−0.004 to 0.008)'
- unparsed cell Diris_2002_table_1:row17:col5 = '0.017 (0.010 to 0.024)'
- unparsed cell Diris_2002_table_1:row18:col5 = '0.007 (0.004 to 0.010)'
- unparsed cell Diris_2002_table_1:row19:col5 = '0.009 (0.007 to 0.011)'
- unparsed cell Diris_2002_table_1:row20:col5 = '0.012 (0.005 to 0.019)'
- unparsed cell Diris_2002_table_1:row21:col5 = '0.011 (0.009 to 0.013)'
- unparsed cell Diris_2002_table_1:row22:col5 = '0.011 (0.008 to 0.014)'

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Diris_2002_table_1:row4:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Diris_2002_table_1:row1:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q61 | pass | volume within physiological range | 2.5 L | not captured | not captured | ['Diris_2002_table_1:row4:col4'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 5.14 L | not captured | not captured | ['Diris_2002_table_1:row1:col4'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_c1_inhibitor_plasma_derived/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Diris_2002` / `Diris_2002::vp_ml`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
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
