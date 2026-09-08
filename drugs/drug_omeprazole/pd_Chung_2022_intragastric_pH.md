# intragastric pH — PD  <span class="pk-badge pk-badge--red">rejected</span>

- **paper:** `Chung_2022`
- **model family:** `sigmoid_emax`
- **driver:** `not_resolved`
- **tier:** population
- **effect:** stimulation/additive

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Chung TK; Lee HA; Lee KR; Jang SB; Yu KS; Lee H et al. (2022). CPT: pharmacometrics & systems pharmacology 11
  ·  DOI: [10.1002/psp4.12839](https://doi.org/10.1002/psp4.12839)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| CL/F, L/h — Shrinkage for IIV | `Q27` · not captured | 33.0 | not captured | not captured | boundary (not captured) | psp412839-tbl-0002:row1:col4 |
| V C /F, L — Shrinkage for IIV | `Q318` · not captured | 25.0 | not captured | not captured | llm (not captured) | psp412839-tbl-0002:row2:col4 |
| V P /F, L — Shrinkage for IIV | `Q318` · not captured | 54.0 | not captured | not captured | llm (not captured) | psp412839-tbl-0002:row3:col4 |
| Q/F, L/h — Shrinkage for IIV | `Q69` · not captured | 34.0 | not captured | not captured | boundary (not captured) | psp412839-tbl-0002:row4:col4 |
| K A, 1/h — Shrinkage for IIV | `Q318` · not captured | 48.0 | not captured | not captured | llm (not captured) | psp412839-tbl-0002:row5:col4 |
| ALAG1, h — Shrinkage for IIV | `Q318` · not captured | 68.0 | not captured | not captured | llm (not captured) | psp412839-tbl-0002:row6:col4 |
| A 0 — Shrinkage for IIV | `Q318` · not captured | 54.0 | not captured | not captured | llm (not captured) | psp412839-tbl-0002:row7:col4 |
| A 1 — Shrinkage for IIV | `Q318` · not captured | 46.0 | not captured | not captured | llm (not captured) | psp412839-tbl-0002:row8:col4 |
| A 2 — Shrinkage for IIV | `Q318` · not captured | 59.0 | not captured | not captured | llm (not captured) | psp412839-tbl-0002:row9:col4 |
| A 3 — Shrinkage for IIV | `Q318` · not captured | 61.0 | not captured | not captured | llm (not captured) | psp412839-tbl-0002:row10:col4 |
| A 4 — Shrinkage for IIV | `Q318` · not captured | 87.0 | not captured | not captured | llm (not captured) | psp412839-tbl-0002:row11:col4 |
| C 1 , h — Shrinkage for IIV | `Q318` · not captured | 64.0 | not captured | not captured | llm (not captured) | psp412839-tbl-0002:row12:col4 |
| C 2 , h — Shrinkage for IIV | `Q318` · not captured | 72.0 | not captured | not captured | llm (not captured) | psp412839-tbl-0002:row13:col4 |
| C 3 , h — Shrinkage for IIV | `Q318` · not captured | 51.0 | not captured | not captured | llm (not captured) | psp412839-tbl-0002:row14:col4 |
| C 4 , h — Shrinkage for IIV | `Q318` · not captured | 77.0 | not captured | not captured | llm (not captured) | psp412839-tbl-0002:row15:col4 |
| Emax, pH unit — Shrinkage for IIV | `Q320` · not captured | 58.0 | not captured | not captured | boundary (not captured) | psp412839-tbl-0002:row16:col4 |
| EC50, ng/mL — Shrinkage for IIV | `Q321` · not captured | 53.0 | unknown | not captured | boundary (not captured) | psp412839-tbl-0002:row17:col4 |
| KEO, 1/h — Shrinkage for IIV | `Q326` · not captured | 47.0 | not captured | not captured | boundary (not captured) | psp412839-tbl-0002:row18:col4 |
| EPmax — Shrinkage for IIV | `Q318` · not captured | 56.0 | not captured | not captured | llm (not captured) | psp412839-tbl-0002:row19:col4 |
| EP50, pH unit — Shrinkage for IIV | `Q318` · not captured | 59.0 | not captured | not captured | llm (not captured) | psp412839-tbl-0002:row20:col4 |

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
<sub>← back to [omeprazole](drugs/drug_omeprazole/)</sub>
