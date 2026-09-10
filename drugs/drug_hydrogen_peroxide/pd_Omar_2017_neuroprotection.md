# name — PD  <span class="pk-badge pk-badge--green">extracted</span>

- **paper:** `Omar_2017`
- **model family:** `unknown`
- **driver:** `conc_no_pk`
- **tier:** descriptive
- **effect:** stimulation/unknown

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Omar SH; Kerr PG; Scott CJ; Hamlin AS; Obied HK et al. (2017). Molecules (Basel, Switzerland) 22
  ·  DOI: [10.3390/molecules22111858](https://doi.org/10.3390/molecules22111858)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| SOR EC50 (μM) — Non-flavonoids | `Q321` · not captured | 436.3 | μM | not captured | llm_confirmed (not captured) | molecules-22-01858-t002:row1:col2 |
| SOR EC50 (μM) — HT (3) | `Q321` · not captured | 1.02 | μM | not captured | llm_confirmed (not captured) | molecules-22-01858-t002:row1:col3 |
| SOR EC50 (μM) — OL (4) | `Q321` · not captured | 1.02 | μM | not captured | llm_confirmed (not captured) | molecules-22-01858-t002:row1:col4 |
| SOR EC50 (μM) — VB (6) | `Q321` · not captured | 0.66 | μM | not captured | llm_confirmed (not captured) | molecules-22-01858-t002:row1:col5 |
| SOR EC50 (μM) — Flavonoids | `Q321` · not captured | 93.97 | μM | not captured | llm_confirmed (not captured) | molecules-22-01858-t002:row1:col7 |
| SOR EC50 (μM) — Extracts | `Q321` · not captured | 1.89 | μM | not captured | llm_confirmed (not captured) | molecules-22-01858-t002:row1:col11 |
| SOR EC50 (μM) — OFE | `Q321` · not captured | 217 | μM | not captured | llm_confirmed (not captured) | molecules-22-01858-t002:row1:col12 |
| SOR EC50 (μM) — HTE | `Q321` · not captured | 115.8 | μM | not captured | llm_confirmed (not captured) | molecules-22-01858-t002:row1:col13 |
| SOR EC50 (μM) — OLP | `Q321` · not captured | 280.3 | μM | not captured | llm_confirmed (not captured) | molecules-22-01858-t002:row1:col14 |
| H2O2 EC50 (mM) — Non-flavonoids | `Q321` · not captured | 1.01 | mM | not captured | llm_confirmed (not captured) | molecules-22-01858-t002:row2:col2 |
| H2O2 EC50 (mM) — HT (3) | `Q321` · not captured | 0.775 | mM | not captured | llm_confirmed (not captured) | molecules-22-01858-t002:row2:col3 |
| H2O2 EC50 (mM) — OL (4) | `Q321` · not captured | 0.713 | mM | not captured | llm_confirmed (not captured) | molecules-22-01858-t002:row2:col4 |
| H2O2 EC50 (mM) — VB (6) | `Q321` · not captured | 1.173 | mM | not captured | llm_confirmed (not captured) | molecules-22-01858-t002:row2:col5 |
| H2O2 EC50 (mM) — RU (10) | `Q321` · not captured | 0.957 | mM | not captured | llm_confirmed (not captured) | molecules-22-01858-t002:row2:col8 |
| H2O2 EC50 (mM) — LU (8) | `Q321` · not captured | 1.011 | mM | not captured | llm_confirmed (not captured) | molecules-22-01858-t002:row2:col9 |
| H2O2 EC50 (mM) — Extracts | `Q321` · not captured | 120.6 | mM | not captured | llm_confirmed (not captured) | molecules-22-01858-t002:row2:col11 |
| H2O2 EC50 (mM) — OFE | `Q321` · not captured | 1.708 | mM | not captured | llm_confirmed (not captured) | molecules-22-01858-t002:row2:col12 |
| H2O2 EC50 (mM) — HTE | `Q321` · not captured | 2.824 | mM | not captured | llm_confirmed (not captured) | molecules-22-01858-t002:row2:col13 |
| H2O2 EC50 (mM) — OLP | `Q321` · not captured | 1.421 | mM | not captured | llm_confirmed (not captured) | molecules-22-01858-t002:row2:col14 |

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
<sub>← back to [hydrogen peroxide](drugs/drug_hydrogen_peroxide/)</sub>
