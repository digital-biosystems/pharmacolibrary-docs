# name — PD  <span class="pk-badge pk-badge--red">rejected</span>

- **paper:** `Muthukrishnan_2025`
- **model family:** `indirect_response_i`
- **driver:** `not_resolved`
- **tier:** population
- **effect:** inhibition/unknown

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Muthukrishnan VY; Kerbusch T; Strong LE; Kleijn HJ; Pfister M; Chang AM; Acharya M; Nandy P; McCune JS et al. (2025). Clinical and translational science 18
  ·  DOI: [10.1111/cts.70381](https://doi.org/10.1111/cts.70381)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| k out (1/day) — Parameter estimates for the final PK‐PD model of serum hs‐CRP | `Q328` · not captured | 0.381 | not captured | not captured | llm (not captured) | cts70381-tbl-0002:row2:col1 |
| k out (1/day) — Parameter estimates for the final PK‐PD model of serum hs‐CRP | `Q328` · not captured | 1.98 | not captured | not captured | llm (not captured) | cts70381-tbl-0002:row2:col2 |
| k in ([mg/L]/day) — Parameter estimates for the final PK‐PD model of serum hs‐CRP | `Q328` · not captured | 3.76 | [mg/L]/day | not captured | llm (not captured) | cts70381-tbl-0002:row3:col1 |
| k in ([mg/L]/day) — Parameter estimates for the final PK‐PD model of serum hs‐CRP | `Q328` · not captured | 2.76 | [mg/L]/day | not captured | llm (not captured) | cts70381-tbl-0002:row3:col2 |
| IC50 (ng/mL) — Parameter estimates for the final PK‐PD model of serum hs‐CRP | `Q322` · not captured | 3.39 | ng/mL | not captured | exact (not captured) | cts70381-tbl-0002:row4:col1 |
| IC50 (ng/mL) — Parameter estimates for the final PK‐PD model of serum hs‐CRP | `Q322` · not captured | 69.5 | ng/mL | not captured | exact (not captured) | cts70381-tbl-0002:row4:col2 |
| I max (fraction) — Parameter estimates for the final PK‐PD model of serum hs‐CRP | `Q323` · not captured | 1.00 | fraction | not captured | llm (not captured) | cts70381-tbl-0002:row5:col1 |
| Shape parameter (on IC50 IIV) — Parameter estimates for the final PK‐PD model of serum hs‐CRP | `Q343` · not captured | -0.143 | on IC50 IIV | not captured | exact (not captured) | cts70381-tbl-0002:row8:col1 |
| Shape parameter (on IC50 IIV) — Parameter estimates for the final PK‐PD model of serum hs‐CRP | `Q343` · not captured | 40 | on IC50 IIV | not captured | exact (not captured) | cts70381-tbl-0002:row8:col2 |

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
<sub>← back to [methotrexate](drugs/drug_methotrexate/)</sub>
