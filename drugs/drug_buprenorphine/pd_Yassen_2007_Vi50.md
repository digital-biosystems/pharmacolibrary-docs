# ventilation — PD  <span class="pk-badge pk-badge--red">rejected</span>

- **paper:** `Yassen_2007`
- **model family:** `sigmoid_emax`
- **driver:** `not_resolved`
- **effect:** inhibition/unknown

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Yassen A; Olofsen E; Romberg R; Sarton E; Teppema L; Danhof M; et al. et al. (2007). Clinical pharmacology and therapeutics 81
  ·  DOI: [10.1038/sj.clpt.6100025](https://doi.org/10.1038/sj.clpt.6100025)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| k on (ml/ng/min) | `Q27` · not captured | 0.246 | ml/ng/min | not captured | llm (not captured) | tab_1:row4:col1 |
| k on (ml/ng/min) — CV of | `Q27` · not captured | 17.9 | ml/ng/min | not captured | llm (not captured) | tab_1:row4:col2 |
| k on (ml/ng/min) — Inter- | `Q27` · not captured | 72.1 | ml/ng/min | not captured | llm (not captured) | tab_1:row4:col3 |
| k on (ml/ng/min) — CV of | `Q27` · not captured | 26.4 | ml/ng/min | not captured | llm (not captured) | tab_1:row4:col4 |
| k off (min À1 ) | `Q330` · not captured | 0.0102 | min À1 | not captured | llm (not captured) | tab_1:row5:col1 |
| k off (min À1 ) — CV of | `Q330` · not captured | 23.2 | min À1 | not captured | llm (not captured) | tab_1:row5:col2 |
| K D (nM b ) | `Q331` · not captured | 0.089 | nM b | not captured | llm (not captured) | tab_1:row6:col1 |
| k eo ( min À1 ) | `Q326` · not captured | 0.0092 | min À1 | not captured | llm (not captured) | tab_1:row7:col1 |
| k eo ( min À1 ) — CV of | `Q326` · not captured | 22.5 | min À1 | not captured | llm (not captured) | tab_1:row7:col2 |
| k eo ( min À1 ) — Inter- | `Q326` · not captured | 110 | min À1 | not captured | llm (not captured) | tab_1:row7:col3 |
| k eo ( min À1 ) — CV of | `Q326` · not captured | 24.1 | min À1 | not captured | llm (not captured) | tab_1:row7:col4 |
| E 0 (l/min) | `Q324` · not captured | 23.90 | l/min | not captured | llm (not captured) | tab_1:row8:col1 |
| E 0 (l/min) — CV of | `Q324` · not captured | 3.7 | l/min | not captured | llm (not captured) | tab_1:row8:col2 |
| E 0 (l/min) — Inter- | `Q324` · not captured | 25.1 | l/min | not captured | llm (not captured) | tab_1:row8:col3 |
| E 0 (l/min) — CV of | `Q324` · not captured | 20.9 | l/min | not captured | llm (not captured) | tab_1:row8:col4 |
| Additive error | `Q317` · not captured | 1.3 | not captured | not captured | exact (not captured) | tab_1:row10:col1 |
| Additive error — CV of | `Q317` · not captured | 13.1 | not captured | not captured | exact (not captured) | tab_1:row10:col2 |

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
<sub>← back to [buprenorphine](drugs/drug_buprenorphine/)</sub>
