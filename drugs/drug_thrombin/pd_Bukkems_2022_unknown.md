# normalized plasmin peak height — PD  <span class="pk-badge pk-badge--red">rejected</span>

- **paper:** `Bukkems_2022`
- **model family:** `sigmoid_emax`
- **driver:** `not_resolved`
- **tier:** population
- **effect:** unknown/unknown

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Bukkems LH; Valke LLFG; Barteling W; Laros-van Gorkom BAP; Blijlevens NMA; Cnossen MH; et al. et al. (2022). British journal of clinical pharmacology 88
  ·  DOI: [10.1111/bcp.15185](https://doi.org/10.1111/bcp.15185)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| V1 (dL) — Final model | `Q63` · not captured | 27.7 | dL | not captured | exact (not captured) | bcp15185-tbl-0002:row3:col1 |
| V2 (dL) — Final model | `Q64` · not captured | 5.63 | dL | not captured | exact (not captured) | bcp15185-tbl-0002:row4:col1 |
| CL (dL/h) — Final model | `Q22` · not captured | 1.69 | dL/h | not captured | exact (not captured) | bcp15185-tbl-0002:row5:col1 |
| Q (dL/h) — Final model | `Q30` · not captured | 2.27 | dL/h | not captured | exact (not captured) | bcp15185-tbl-0002:row6:col1 |
| Correlation IIV V1 and CL (%) — Final model | `Q312` · not captured | 43.6 | not captured | not captured | llm_confirmed (not captured) | bcp15185-tbl-0002:row8:col2 |
| Proportional error OSA (%) — Final model | `Q316` · not captured | 11.2 | not captured | not captured | llm_confirmed (not captured) | bcp15185-tbl-0002:row16:col1 |
| Additive error OSA (IU/dL) — Final model | `Q317` · not captured | 4.15 | IU/dL | not captured | llm_confirmed (not captured) | bcp15185-tbl-0002:row17:col1 |
| Proportional error CSA (%) — Final model | `Q316` · not captured | 10.5 | not captured | not captured | llm_confirmed (not captured) | bcp15185-tbl-0002:row18:col1 |
| Additive error CSA (IU/dL) — Final model | `Q317` · not captured | 4.28 | IU/dL | not captured | llm_confirmed (not captured) | bcp15185-tbl-0002:row19:col1 |
| EC50 (IU/dL) — Final model | `Q321` · not captured | 50.1 | IU/dL | not captured | exact (not captured) | bcp15185-tbl-0002:row23:col1 |
| Additive error (% of NPP) — Final model | `Q317` · not captured | 11.2 | % of NPP | not captured | exact (not captured) | bcp15185-tbl-0002:row26:col1 |
| EC50 (IU/dL) — Final model | `Q321` · not captured | 13.9 | IU/dL | not captured | exact (not captured) | bcp15185-tbl-0002:row29:col1 |
| Mild haemophilia on E max (% of severe) — Final model | `Q320` · not captured | 70.9 | % of severe | not captured | llm (not captured) | bcp15185-tbl-0002:row31:col1 |
| Additive error (% of NPP) — Final model | `Q317` · not captured | 8.62 | % of NPP | not captured | exact (not captured) | bcp15185-tbl-0002:row34:col1 |
| EC50 (IU/dL) — Final model | `Q321` · not captured | 614 | IU/dL | not captured | exact (not captured) | bcp15185-tbl-0002:row37:col1 |
| Proportional error (%) — Final model | `Q316` · not captured | 26.8 | not captured | not captured | exact (not captured) | bcp15185-tbl-0002:row40:col1 |

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
<sub>← back to [thrombin](drugs/drug_thrombin/)</sub>
