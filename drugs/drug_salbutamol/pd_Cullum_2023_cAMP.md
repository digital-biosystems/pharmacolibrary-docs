# cAMP — PD  <span class="pk-badge pk-badge--red">rejected</span>

- **paper:** `Cullum_2023`
- **model family:** `sigmoid_emax`
- **driver:** `not_resolved`
- **tier:** descriptive
- **effect:** stimulation/unknown

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Cullum SA; Veprintsev DB; Hill SJ et al. (2023). British journal of pharmacology 180
  ·  DOI: [10.1111/bph.16008](https://doi.org/10.1111/bph.16008)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| Emax (% 1 μM isoprenaline) — Isoprenaline | `Q320` · not captured | 100 | not captured | not captured | exact (not captured) | bph16008-tbl-0001:row0:col2 |
| Emax (% 1 μM isoprenaline) — Formoterol | `Q320` · not captured | 98.38 | not captured | not captured | exact (not captured) | bph16008-tbl-0001:row0:col3 |
| Emax (% 1 μM isoprenaline) — Salbutamol | `Q320` · not captured | 44.74 | not captured | not captured | exact (not captured) | bph16008-tbl-0001:row0:col4 |
| Emax (% 1 μM isoprenaline) — Salmeterol | `Q320` · not captured | 33.73 | not captured | not captured | exact (not captured) | bph16008-tbl-0001:row0:col5 |
| IRmax (% 1 μM isoprenaline) — Isoprenaline | `Q323` · not captured | 100 | not captured | not captured | llm (not captured) | bph16008-tbl-0001:row1:col2 |
| IRmax (% 1 μM isoprenaline) — Formoterol | `Q323` · not captured | 83.36 | not captured | not captured | llm (not captured) | bph16008-tbl-0001:row1:col3 |
| IRmax (% 1 μM isoprenaline) — Salbutamol | `Q323` · not captured | 30.34 | not captured | not captured | llm (not captured) | bph16008-tbl-0001:row1:col4 |
| IRmax (% 1 μM isoprenaline) — Salmeterol | `Q323` · not captured | 22.41 | not captured | not captured | llm (not captured) | bph16008-tbl-0001:row1:col5 |
| Log EC50 (M) — Isoprenaline | `Q321` · not captured | -8.01 | M | not captured | llm_confirmed (not captured) | bph16008-tbl-0001:row2:col2 |
| Log EC50 (M) — Formoterol | `Q321` · not captured | -9.00 | M | not captured | llm_confirmed (not captured) | bph16008-tbl-0001:row2:col3 |
| Log EC50 (M) — Salbutamol | `Q321` · not captured | -6.73 | M | not captured | llm_confirmed (not captured) | bph16008-tbl-0001:row2:col4 |
| Log EC50 (M) — Salmeterol | `Q321` · not captured | -8.39 | M | not captured | llm_confirmed (not captured) | bph16008-tbl-0001:row2:col5 |
| Log L50 (M) — Isoprenaline | `Q322` · not captured | -8.13 | M | not captured | llm (not captured) | bph16008-tbl-0001:row3:col2 |
| Log L50 (M) — Formoterol | `Q322` · not captured | -8.80 | M | not captured | llm (not captured) | bph16008-tbl-0001:row3:col3 |
| Log L50 (M) — Salbutamol | `Q322` · not captured | -6.68 | M | not captured | llm (not captured) | bph16008-tbl-0001:row3:col4 |
| Log L50 (M) — Salmeterol | `Q322` · not captured | -8.08 | M | not captured | llm (not captured) | bph16008-tbl-0001:row3:col5 |

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
<sub>← back to [salbutamol](drugs/drug_salbutamol/)</sub>
