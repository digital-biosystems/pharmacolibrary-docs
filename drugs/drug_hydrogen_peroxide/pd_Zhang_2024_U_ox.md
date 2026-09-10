# 24-h urinary oxalate — PD  <span class="pk-badge pk-badge--red">rejected</span>

- **paper:** `Zhang_2024`
- **model family:** `indirect_response_i`
- **driver:** `not_resolved`
- **tier:** population
- **effect:** inhibition/unknown

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Zhang S; Amrite A; Tan B; Jamsen K; Pradhan S; Choy S; Plotkin H et al. (2024). British journal of clinical pharmacology 90
  ·  DOI: [10.1111/bcp.16194](https://doi.org/10.1111/bcp.16194)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| Baseline 24‐h urinary oxalate (24‐h U ox, μmol/24 h) — Estimated value (%RSE) | `Q100` · not captured | 1420 | not captured | not captured | llm_corrected (not captured) | bcp16194-tbl-0002:row1:col1 |
| First‐order elimination rate of 24‐h U ox (K out, 1/week) — Estimated value (%RSE) | `Q328` · not captured | 0.338 | K out, 1/week | not captured | llm_corrected (not captured) | bcp16194-tbl-0002:row2:col1 |
| Between‐subject variability for baseline 24‐h U ox (%CV) — Estimated value (%RSE) | `Q100` · not captured | 31.7 | not captured | not captured | nil (not captured) | bcp16194-tbl-0002:row7:col1 |
| Between‐subject variability for baseline 24‐h U ox (%CV) — ƞ shrinkage (%) | `Q100` · not captured | 4.9 | not captured | not captured | nil (not captured) | bcp16194-tbl-0002:row7:col2 |
| Between‐subject variability for IC50 (%CV) — Estimated value (%RSE) | `Q100` · not captured | 86 | not captured | not captured | nil (not captured) | bcp16194-tbl-0002:row8:col1 |
| Between‐subject variability for IC50 (%CV) — ƞ shrinkage (%) | `Q100` · not captured | 28.3 | not captured | not captured | nil (not captured) | bcp16194-tbl-0002:row8:col2 |
| Residual unexplained variability (additive) (SD, μmol/24 h) — Estimated value (%RSE) | `Q315` · not captured | 205 | SD, μmol/24 h | not captured | llm_confirmed (not captured) | bcp16194-tbl-0002:row10:col1 |

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
