# H3K9me3 levels — PD  <span class="pk-badge pk-badge--green">extracted</span>

- **paper:** `Schiller_2014`
- **model family:** `unknown`
- **driver:** `conc_no_pk`
- **tier:** descriptive
- **effect:** inhibition/unknown

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Schiller R; Scozzafava G; Tumber A; Wickens JR; Bush JT; Rai G; et al. et al. (2014). ChemMedChem 9
  ·  DOI: [10.1002/cmdc.201300428](https://doi.org/10.1002/cmdc.201300428)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| IC50 [μm][a] | `Q322` · not captured | 1 | μm | not captured | llm_confirmed (not captured) | tbl3:row0:col2 |
| IC50 [μm][a] — KDM4C | `Q322` · not captured | 0.6 | μm | not captured | llm_confirmed (not captured) | tbl3:row0:col3 |
| IC50 [μm][a] — KDM4E | `Q322` · not captured | 2.3 | μm | not captured | llm_confirmed (not captured) | tbl3:row0:col4 |
| IC50 [μm][a] — KDM2A | `Q322` · not captured | 1.8 | μm | not captured | llm_confirmed (not captured) | tbl3:row0:col5 |
| IC50 [μm][a] — KDM3A | `Q322` · not captured | 0.1 | μm | not captured | llm_confirmed (not captured) | tbl3:row0:col6 |
| IC50 [μm][a] — KDM5C | `Q322` · not captured | 19.0 | μm | not captured | llm_confirmed (not captured) | tbl3:row0:col7 |
| IC50 [μm][a] — KDM6B | `Q322` · not captured | 1.4 | μm | not captured | llm_confirmed (not captured) | tbl3:row0:col8 |
| IC50 [μm][a] — PHD2 | `Q322` · not captured | 33.0 | μm | not captured | llm_confirmed (not captured) | tbl3:row0:col9 |
| IC50 [μm][a] | `Q322` · not captured | 2 | μm | not captured | llm_confirmed (not captured) | tbl3:row1:col2 |
| IC50 [μm][a] — KDM4C | `Q322` · not captured | 10.7 | μm | not captured | llm_confirmed (not captured) | tbl3:row1:col3 |
| IC50 [μm][a] — KDM4E | `Q322` · not captured | 12.8 | μm | not captured | llm_confirmed (not captured) | tbl3:row1:col4 |
| IC50 [μm][a] — KDM2A | `Q322` · not captured | 30.1 | μm | not captured | llm_confirmed (not captured) | tbl3:row1:col5 |
| IC50 [μm][a] — KDM3A | `Q322` · not captured | 14.5 | μm | not captured | llm_confirmed (not captured) | tbl3:row1:col6 |
| IC50 [μm][a] — KDM5C | `Q322` · not captured | 34.9 | μm | not captured | llm_confirmed (not captured) | tbl3:row1:col7 |
| IC50 [μm][a] — KDM6B | `Q322` · not captured | 10.8 | μm | not captured | llm_confirmed (not captured) | tbl3:row1:col8 |
| IC50 [μm][a] — PHD2 | `Q322` · not captured | 41.1 | μm | not captured | llm_confirmed (not captured) | tbl3:row1:col9 |
| IC50 [μm][a] | `Q322` · not captured | 4 | μm | not captured | llm_confirmed (not captured) | tbl3:row2:col2 |
| IC50 [μm][a] — KDM4C | `Q322` · not captured | 5.0 | μm | not captured | llm_confirmed (not captured) | tbl3:row2:col3 |
| IC50 [μm][a] — KDM4E | `Q322` · not captured | 6.3 | μm | not captured | llm_confirmed (not captured) | tbl3:row2:col4 |
| IC50 [μm][a] — KDM2A | `Q322` · not captured | 16.3 | μm | not captured | llm_confirmed (not captured) | tbl3:row2:col5 |
| IC50 [μm][a] — KDM3A | `Q322` · not captured | 29.4 | μm | not captured | llm_confirmed (not captured) | tbl3:row2:col6 |
| IC50 [μm][a] | `Q322` · not captured | 5 | μm | not captured | llm_confirmed (not captured) | tbl3:row3:col2 |
| IC50 [μm][a] — KDM4C | `Q322` · not captured | 3.9 | μm | not captured | llm_confirmed (not captured) | tbl3:row3:col3 |
| IC50 [μm][a] — KDM4E | `Q322` · not captured | 45.0 | μm | not captured | llm_confirmed (not captured) | tbl3:row3:col4 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

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
<sub>← back to [oxyquinoline](drugs/drug_oxyquinoline/)</sub>
