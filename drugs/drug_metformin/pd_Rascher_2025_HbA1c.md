# HbA1c — PD  <span class="pk-badge pk-badge--red">rejected</span>

- **paper:** `Rascher_2025`
- **model family:** `indirect_response_i`
- **driver:** `not_resolved`
- **tier:** population
- **effect:** inhibition/unknown

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Rascher J; Cheng S; Johnston C; Härtter S; Jan-Georg W; Marquard J; Tartakovsky I; Laffel LMB et al. (2025). British journal of clinical pharmacology 91
  ·  DOI: [10.1002/bcp.70096](https://doi.org/10.1002/bcp.70096)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| Kout (1/day) — Median | `Q328` · not captured | 0.0489 | not captured | not captured | exact (not captured) | bcp70096-tbl-0004:row2:col3 |
| Kout (1/day) — Bulk ESS | `Q328` · not captured | 5125 | not captured | not captured | exact (not captured) | bcp70096-tbl-0004:row2:col5 |
| Kout (1/day) — Tail ESS | `Q328` · not captured | 3498 | not captured | not captured | exact (not captured) | bcp70096-tbl-0004:row2:col6 |
| Kout (1/day) — Ȓ | `Q328` · not captured | 1.00 | not captured | not captured | exact (not captured) | bcp70096-tbl-0004:row2:col7 |
| PROG (%/h/h) — Ȓ | `Q340` · not captured | 1.00 | %/h/h | not captured | llm (not captured) | bcp70096-tbl-0004:row4:col7 |
| IMAX (%) — Median | `Q323` · not captured | 10.1 | not captured | not captured | exact (not captured) | bcp70096-tbl-0004:row5:col3 |
| IMAX (%) — Bulk ESS | `Q323` · not captured | 6062 | not captured | not captured | exact (not captured) | bcp70096-tbl-0004:row5:col5 |
| IMAX (%) — Tail ESS | `Q323` · not captured | 4750 | not captured | not captured | exact (not captured) | bcp70096-tbl-0004:row5:col6 |
| IMAX (%) — Ȓ | `Q323` · not captured | 1.00 | not captured | not captured | exact (not captured) | bcp70096-tbl-0004:row5:col7 |
| AUC50 (nmol*hr/L) — Median | `Q19` · not captured | 703 | nmol*hr/L | not captured | llm (not captured) | bcp70096-tbl-0004:row6:col3 |
| ΩBASE (CV(%)) — Median | `Q312` · not captured | 16.1 | not captured | not captured | llm (not captured) | bcp70096-tbl-0004:row12:col3 |
| ΩBASE (CV(%)) — Bulk ESS | `Q312` · not captured | 2373 | not captured | not captured | llm (not captured) | bcp70096-tbl-0004:row12:col5 |
| ΩBASE (CV(%)) — Ȓ | `Q312` · not captured | 1.00 | not captured | not captured | llm (not captured) | bcp70096-tbl-0004:row12:col7 |
| ΩBASE (CV(%)) — Shrinkage (%) | `Q318` · not captured | 14.9 | not captured | not captured | llm (not captured) | bcp70096-tbl-0004:row12:col8 |
| ΩPROG (CV(%)) — Shrinkage (%) | `Q318` · not captured | 19.0 | not captured | not captured | llm (not captured) | bcp70096-tbl-0004:row13:col8 |

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
<sub>← back to [metformin](drugs/drug_metformin/)</sub>
