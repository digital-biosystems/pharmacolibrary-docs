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
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>← back to [metformin](drugs/toxin_metformin/)</sub>
