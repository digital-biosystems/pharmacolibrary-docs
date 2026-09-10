# name — PD  <span class="pk-badge pk-badge--orange">needs review</span>

- **paper:** `Kemal_2026`
- **model family:** `categorical`
- **driver:** `conc_no_pk`
- **tier:** descriptive
- **effect:** stimulation/unknown

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Kemal CC; Zweers TJ; Krekels EHJ; Chatterjee MS et al. (2026). CPT: pharmacometrics & systems pharmacology 15
  ·  DOI: [10.1002/psp4.70257](https://doi.org/10.1002/psp4.70257)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| Apparent clearance (CL/F) (L/h) — Point estimate | `Q27` · not captured | 3.33 | L/h | not captured | llm_confirmed (not captured) | psp470257-tbl-0002:row2:col1 |
| Apparent clearance (CL/F) (L/h) — RSE% | `Q27` · not captured | 4.59 | L/h | not captured | llm_confirmed (not captured) | psp470257-tbl-0002:row2:col2 |
| Apparent central volume (Vc/F) (L) — Point estimate | `Q290` · not captured | 120 | L | not captured | llm_confirmed (not captured) | psp470257-tbl-0002:row3:col1 |
| Apparent central volume (Vc/F) (L) — RSE% | `Q290` · not captured | 1.82 | L | not captured | llm_confirmed (not captured) | psp470257-tbl-0002:row3:col2 |
| Absorption rate (Ka) (1/h) — Point estimate | `Q49` · not captured | 2.83 | not captured | not captured | llm_confirmed (not captured) | psp470257-tbl-0002:row4:col1 |
| Absorption rate (Ka) (1/h) — RSE% | `Q49` · not captured | 7.16 | not captured | not captured | llm_confirmed (not captured) | psp470257-tbl-0002:row4:col2 |
| Apparent inter‐compartmental clearance (Q/F) (L/h) — Point estimate | `Q69` · not captured | 0.681 | L/h | not captured | llm_corrected (not captured) | psp470257-tbl-0002:row5:col1 |
| Apparent inter‐compartmental clearance (Q/F) (L/h) — RSE% | `Q69` · not captured | 41.6 | L/h | not captured | llm_corrected (not captured) | psp470257-tbl-0002:row5:col2 |
| Apparent peripheral volume 1 (Vp/F) (L) — Point estimate | `Q82` · not captured | 66.9 | L | not captured | llm_confirmed (not captured) | psp470257-tbl-0002:row6:col1 |
| Apparent peripheral volume 1 (Vp/F) (L) — RSE% | `Q82` · not captured | 17.3 | L | not captured | llm_confirmed (not captured) | psp470257-tbl-0002:row6:col2 |
| Lag on absorption (h) — Point estimate | `Q83` · not captured | 0.494 | h | not captured | llm_corrected (not captured) | psp470257-tbl-0002:row7:col1 |
| Lag on absorption (h) — RSE% | `Q83` · not captured | 7.79 | h | not captured | llm_corrected (not captured) | psp470257-tbl-0002:row7:col2 |
| CL/F — Point estimate | `Q27` · not captured | 39.8 | not captured | not captured | exact (not captured) | psp470257-tbl-0002:row35:col1 |
| CL/F — RSE% | `Q27` · not captured | 4.60 | not captured | not captured | exact (not captured) | psp470257-tbl-0002:row35:col2 |
| Vc/F — Point estimate | `Q290` · not captured | 17.1 | not captured | not captured | exact (not captured) | psp470257-tbl-0002:row36:col1 |
| Vc/F — RSE% | `Q290` · not captured | 5.56 | not captured | not captured | exact (not captured) | psp470257-tbl-0002:row36:col2 |
| Proportional error — Point estimate | `Q316` · not captured | 0.222 | not captured | not captured | exact (not captured) | psp470257-tbl-0002:row38:col1 |
| Proportional error — RSE% | `Q316` · not captured | 3.19 | not captured | not captured | exact (not captured) | psp470257-tbl-0002:row38:col2 |
| Additive error — Point estimate | `Q317` · not captured | 3.19 | not captured | not captured | exact (not captured) | psp470257-tbl-0002:row39:col1 |
| Additive error — RSE% | `Q317` · not captured | 101 | not captured | not captured | exact (not captured) | psp470257-tbl-0002:row39:col2 |

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
<sub>← back to [magnesium carbonate](drugs/drug_magnesium_carbonate/)</sub>
