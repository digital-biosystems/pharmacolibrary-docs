# PeakLat — PD  <span class="pk-badge pk-badge--green">extracted</span>

- **paper:** `Juul_2014`
- **model family:** `log_linear`
- **driver:** `cited_pk`
- **effect:** unknown/unknown

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Juul RV; Foster DJ; Upton RN; Andresen T; Graversen C; Drewes AM; et al. et al. (2014). Basic & clinical pharmacology & toxicology 115
  ·  DOI: [10.1111/bcpt.12217](https://doi.org/10.1111/bcpt.12217)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| Baseline — PeakAmp | `Q324` · not captured | 24.9 | not captured | not captured | exact (not captured) | tab_0:row3:col2 |
| Baseline | `Q324` · not captured | 18.2 | not captured | not captured | exact (not captured) | tab_0:row3:col3 |
| Baseline — PeakLat | `Q324` · not captured | 138 | not captured | not captured | exact (not captured) | tab_0:row3:col5 |
| Baseline | `Q324` · not captured | 2.1 | not captured | not captured | exact (not captured) | tab_0:row3:col6 |
| Baseline | `Q324` · not captured | 25.6 | not captured | not captured | exact (not captured) | tab_0:row3:col9 |
| h 2 — PeakLat | `Q56` · not captured | 0.000349 | not captured | not captured | llm (not captured) | tab_0:row5:col5 |
| x BSV (baseline) — PeakAmp | `Q312` · not captured | 10.1 | baseline | not captured | boundary (not captured) | tab_0:row7:col2 |
| x BSV (baseline) | `Q312` · not captured | 108.8 | baseline | not captured | boundary (not captured) | tab_0:row7:col3 |
| x BSV (baseline) | `Q312` · not captured | 32.4 | baseline | not captured | boundary (not captured) | tab_0:row7:col6 |
| x BSV (baseline) — MeanAmp | `Q312` · not captured | 5.11 | baseline | not captured | boundary (not captured) | tab_0:row7:col8 |
| x BSV (baseline) | `Q312` · not captured | 45.6 | baseline | not captured | boundary (not captured) | tab_0:row7:col9 |
| x BOV (baseline) — PeakAmp | `Q313` · not captured | 6.10 | baseline | not captured | boundary (not captured) | tab_0:row8:col2 |
| x BOV (baseline) | `Q313` · not captured | 80.9 | baseline | not captured | boundary (not captured) | tab_0:row8:col3 |
| x BOV (baseline) | `Q313` · not captured | 37.4 | baseline | not captured | boundary (not captured) | tab_0:row8:col6 |
| x BOV (baseline) — MeanAmp | `Q313` · not captured | 1.85 | baseline | not captured | boundary (not captured) | tab_0:row8:col8 |
| x BOV (baseline) | `Q313` · not captured | 48.3 | baseline | not captured | boundary (not captured) | tab_0:row8:col9 |
| CovGroup — PeakLat | `Q56` · not captured | 0.634 | not captured | not captured | llm (not captured) | tab_0:row11:col5 |
| K e0 — PeakAmp | `Q324` · not captured | 0.442 | not captured | not captured | boundary (not captured) | tab_0:row15:col2 |
| K e0 | `Q324` · not captured | 85.5 | not captured | not captured | boundary (not captured) | tab_0:row15:col3 |
| e proportional | `Q335` · not captured | 98.1 | not captured | not captured | llm (not captured) | tab_0:row18:col3 |
| e proportional | `Q335` · not captured | 66.9 | not captured | not captured | llm (not captured) | tab_0:row18:col6 |
| e proportional | `Q335` · not captured | 55.2 | not captured | not captured | llm (not captured) | tab_0:row18:col9 |
| e additive | `Q317` · not captured | 53.7 | not captured | not captured | llm (not captured) | tab_0:row19:col3 |
| e additive | `Q317` · not captured | 106.7 | not captured | not captured | llm (not captured) | tab_0:row19:col6 |
| e additive | `Q317` · not captured | 10.6 | not captured | not captured | llm (not captured) | tab_0:row19:col9 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

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
<sub>← back to [buprenorphine](drugs/drug_buprenorphine/)</sub>
