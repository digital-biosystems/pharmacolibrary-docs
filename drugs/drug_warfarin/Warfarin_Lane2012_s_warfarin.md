# warfarin — `Warfarin_Lane2012_s_warfarin`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `warfarin`, measured `R-warfarin, S-warfarin`.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Lane S; Al-Zubiedi S; Hatch E; Matthews I; Jorgensen AL; Deloukas P; et al. et al. (2012). British journal of clinical pharmacology 73
  ·  DOI: [10.1111/j.1365-2125.2011.04051.x](https://doi.org/10.1111/j.1365-2125.2011.04051.x)

## Model component
<dbs-pgx drug="warfarin" model-id="Warfarin_Lane2012_s_warfarin" status="extracted" stale="false" population="patients on long-term warfarin therapy" measured-compound="R-warfarin, S-warfarin" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (l h -1 ) | `Q22` · CL | 0.144 | l h -1 | 4e-08 | [l] / [h] | not captured | exact (1.0) | tab_2:row3:col1, Lane_2012_table_2:row2:col1 | — | not captured |
| CL (l h -1 ) | `Q22` · CL | 0.00647 | l h -1 | 1.7972222222222223e-09 | [l] / [h] | not captured | exact (1.0) | tab_2:row3:col2, tab_2:row3:col5, Lane_2012_table_2:row2:col2, Lane_2012_table_2:row2:col5 | — | not captured |
| V (l) | `Q61` · V | 16.6 | l | 0.0166 | [l] | not captured | exact (1.0) | tab_2:row4:col1, Lane_2012_table_2:row3:col1 | — | not captured |
| V (l) | `Q61` · V | 1.57 | l | 0.00157 | [l] | not captured | exact (1.0) | tab_2:row4:col2, tab_2:row4:col5, Lane_2012_table_2:row3:col2, Lane_2012_table_2:row3:col5 | — | not captured |
| Ka | `Q49` · kabs | 1.66 | not captured | not captured | not captured | not captured | exact (1.0) | tab_2:row5:col1, Lane_2012_table_2:row4:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Objective function' — extend the ontology if this is a real PK parameter (source ['tab_2:row1:col1', 'Lane_2012_table_2:row0:col1'])
- dropped unlinked row (NIL): 'qwgt' — extend the ontology if this is a real PK parameter (source ['tab_2:row6:col1'])
- dropped unlinked row (NIL): 'qwgt' — extend the ontology if this is a real PK parameter (source ['tab_2:row6:col2', 'tab_2:row6:col5'])
- dropped unlinked row (NIL): 'qage' — extend the ontology if this is a real PK parameter (source ['tab_2:row7:col1'])
- dropped unlinked row (NIL): 'qage' — extend the ontology if this is a real PK parameter (source ['tab_2:row7:col2', 'tab_2:row7:col5'])
- dropped unlinked row (NIL): 'Female' — extend the ontology if this is a real PK parameter (source ['tab_2:row9:col1'])
- dropped unlinked row (NIL): 'Male' — extend the ontology if this is a real PK parameter (source ['tab_2:row10:col1'])
- dropped unlinked row (NIL): 'Male' — extend the ontology if this is a real PK parameter (source ['tab_2:row10:col2'])
- dropped unlinked row (NIL): '*1/*1 (wild-type)' — extend the ontology if this is a real PK parameter (source ['tab_2:row12:col1'])
- dropped unlinked row (NIL): '*1/*2' — extend the ontology if this is a real PK parameter (source ['tab_2:row13:col1'])
- dropped unlinked row (NIL): '*1/*2' — extend the ontology if this is a real PK parameter (source ['tab_2:row13:col2'])
- dropped unlinked row (NIL): '*2/*2' — extend the ontology if this is a real PK parameter (source ['tab_2:row14:col1'])
- dropped unlinked row (NIL): '*2/*2' — extend the ontology if this is a real PK parameter (source ['tab_2:row14:col2'])
- dropped unlinked row (NIL): '*1/*3' — extend the ontology if this is a real PK parameter (source ['tab_2:row15:col1'])
- dropped unlinked row (NIL): '*1/*3' — extend the ontology if this is a real PK parameter (source ['tab_2:row15:col2'])
- dropped unlinked row (NIL): '*2/*3' — extend the ontology if this is a real PK parameter (source ['tab_2:row16:col1'])
- dropped unlinked row (NIL): '*2/*3' — extend the ontology if this is a real PK parameter (source ['tab_2:row16:col2'])
- dropped unlinked row (NIL): '*3/*3' — extend the ontology if this is a real PK parameter (source ['tab_2:row17:col1'])
- dropped unlinked row (NIL): '*3/*3' — extend the ontology if this is a real PK parameter (source ['tab_2:row17:col2'])
- dropped unlinked row (NIL): 'Missing' — extend the ontology if this is a real PK parameter (source ['tab_2:row18:col1'])
- dropped unlinked row (NIL): 'Missing' — extend the ontology if this is a real PK parameter (source ['tab_2:row18:col2', 'tab_2:row23:col5'])
- dropped unlinked row (NIL): 'Heterozygote' — extend the ontology if this is a real PK parameter (source ['tab_2:row21:col5', 'tab_2:row26:col5'])
- dropped unlinked row (NIL): 'Mutant -homozygote' — extend the ontology if this is a real PK parameter (source ['tab_2:row22:col5', 'tab_2:row27:col5'])
- dropped unlinked row (NIL): 'Homozygote' — extend the ontology if this is a real PK parameter (source ['tab_2:row25:col5'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=R-warfarin, S-warfarin
- population split: 's-warfarin' subgroup of Lane_2012 (paper reports 2 populations: r-warfarin, s-warfarin)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell tab_2:row3:col3 = '(0.131, 0.157)'
- unparsed cell tab_2:row3:col6 = '(0.115, 0.135)'
- unparsed cell tab_2:row4:col3 = '(13.5, 19.7)'
- unparsed cell tab_2:row4:col6 = '(8.63, 13.2)'
- unparsed cell tab_2:row6:col3 = '(0.037, 0.605)'
- unparsed cell tab_2:row6:col6 = '(0.391, 0.909)'
- unparsed cell tab_2:row7:col3 = '(-0.0122, -0.00412)'
- unparsed cell tab_2:row7:col6 = '(-0.0109, -0.00220)'
- unparsed cell tab_2:row10:col3 = '(0.982, 1.26)'
- unparsed cell tab_2:row13:col3 = '(0.732, 0.978)'
- unparsed cell tab_2:row14:col3 = '(0.561, 0.783)'
- unparsed cell tab_2:row15:col3 = '(0.355, 0.553)'
- unparsed cell tab_2:row16:col3 = '(0.259, 0.733)'
- unparsed cell tab_2:row17:col3 = '(0.222, 0.350)'
- unparsed cell tab_2:row18:col3 = '(0.606, 0.958)'
- unparsed cell tab_2:row21:col6 = '(0.648, 0.874)'
- unparsed cell tab_2:row22:col6 = '(0.120, 0.868)'
- unparsed cell tab_2:row23:col6 = '(0.701, 0.907)'
- unparsed cell tab_2:row25:col6 = '(1.13, 1.51)'
- unparsed cell tab_2:row26:col6 = '(0.723, 1.40)'
- unparsed cell tab_2:row27:col6 = '().771, 1.10)'
- unparsed cell Lane_2012_table_2:row2:col3 = '(0.140, 0.158)'
- unparsed cell Lane_2012_table_2:row2:col6 = '(0.125, 0.139)'
- unparsed cell Lane_2012_table_2:row3:col3 = '(12.0, 18.4)'
- unparsed cell Lane_2012_table_2:row3:col6 = '(7.28, 10.9)'
- unparsed cell Lane_2012_table_2:row8:col3 = '(-40.8, 76.6)'
- companion parameter table 2 transcribed (14 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_2:row3:col1', 'Lane_2012_table_2:row2:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_2:row3:col2', 'tab_2:row3:col5', 'Lane_2012_table_2:row2:col2', 'Lane_2012_table_2:row2:col5'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_2:row4:col1', 'Lane_2012_table_2:row3:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_2:row4:col2', 'tab_2:row4:col5', 'Lane_2012_table_2:row3:col2', 'Lane_2012_table_2:row3:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.144 | not captured | not captured | ['tab_2:row3:col1', 'Lane_2012_table_2:row2:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.144 L/h | not captured | not captured | ['tab_2:row3:col1', 'Lane_2012_table_2:row2:col1'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00647 L/h | not captured | not captured | ['tab_2:row3:col2', 'tab_2:row3:col5', 'Lane_2012_table_2:row2:col2', 'Lane_2012_table_2:row2:col5'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 16.6 L | not captured | not captured | ['tab_2:row4:col1', 'Lane_2012_table_2:row3:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 1.57 L | not captured | not captured | ['tab_2:row4:col2', 'tab_2:row4:col5', 'Lane_2012_table_2:row3:col2', 'Lane_2012_table_2:row3:col5'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_warfarin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Lane_2012` / `Lane_2012::s_warfarin`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_warfarin/Warfarin_Lane2012_s_warfarin/Warfarin_Lane2012_s_warfarin_matlab.zip" download>Warfarin_Lane2012_s_warfarin_matlab.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_warfarin/Warfarin_Lane2012_s_warfarin/Warfarin_Lane2012_s_warfarin_matlab_simbio.zip" download>Warfarin_Lane2012_s_warfarin_matlab_simbio.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_warfarin/Warfarin_Lane2012_s_warfarin/Warfarin_Lane2012_s_warfarin_sbml.zip" download>Warfarin_Lane2012_s_warfarin_sbml.zip</a> <span class="pk-size">(2.3 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_warfarin/Warfarin_Lane2012_s_warfarin/Warfarin_Lane2012_s_warfarin_cellml.zip" download>Warfarin_Lane2012_s_warfarin_cellml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
