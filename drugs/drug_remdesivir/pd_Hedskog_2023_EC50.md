# SARS-CoV-2 susceptibility — PD  <span class="pk-badge pk-badge--green">extracted</span>

- **paper:** `Hedskog_2023`
- **model family:** `emax`
- **driver:** `cited_pk`
- **tier:** descriptive
- **effect:** inhibition/unknown

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Hedskog C; Rodriguez L; Roychoudhury P; Huang ML; Jerome KR; Hao L; et al. et al. (2023). The Journal of infectious diseases 228
  ·  DOI: [10.1093/infdis/jiad270](https://doi.org/10.1093/infdis/jiad270)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| Participants with baseline sequencing data b | `Q324` · not captured | 5 | not captured | not captured | boundary (not captured) | tab_0:row3:col1 |
| Participants with baseline sequencing data b — Participants, No. (% out of Participants With Baseline Sequencing Data Available) a | `Q324` · not captured | 3 | not captured | not captured | boundary (not captured) | tab_0:row3:col2 |
| Participants with baseline sequencing data b | `Q324` · not captured | 42 | not captured | not captured | boundary (not captured) | tab_0:row3:col3 |
| Participants with baseline sequencing data b | `Q324` · not captured | 41 | not captured | not captured | boundary (not captured) | tab_0:row3:col4 |
| Participants with baseline sequencing data b | `Q324` · not captured | 47 | not captured | not captured | boundary (not captured) | tab_0:row3:col5 |
| Participants with baseline sequencing data b | `Q324` · not captured | 44 | not captured | not captured | boundary (not captured) | tab_0:row3:col6 |
| Participants with baseline sequencing data b | `Q324` · not captured | 91 | not captured | not captured | boundary (not captured) | tab_0:row3:col7 |
| B.1 — Participants, No. (% out of Participants With Baseline Sequencing Data Available) a | `Q100` · not captured | 1 | not captured | not captured | llm (not captured) | tab_0:row4:col2 |
| B.1.333 — Participants, No. (% out of Participants With Baseline Sequencing Data Available) a | `Q100` · not captured | 0 | not captured | not captured | llm (not captured) | tab_0:row5:col2 |
| A.1 — Participants, No. (% out of Participants With Baseline Sequencing Data Available) a | `Q100` · not captured | 0 | not captured | not captured | llm (not captured) | tab_0:row6:col2 |
| A — Participants, No. (% out of Participants With Baseline Sequencing Data Available) a | `Q100` · not captured | 0 | not captured | not captured | llm (not captured) | tab_0:row7:col2 |
| B.1.320 — Participants, No. (% out of Participants With Baseline Sequencing Data Available) a | `Q100` · not captured | 0 | not captured | not captured | llm (not captured) | tab_0:row8:col2 |
| B.1.605 — Participants, No. (% out of Participants With Baseline Sequencing Data Available) a | `Q100` · not captured | 0 | not captured | not captured | llm (not captured) | tab_0:row9:col2 |
| Other c — Participants, No. (% out of Participants With Baseline Sequencing Data Available) a | `Q100` · not captured | 2 | not captured | not captured | llm (not captured) | tab_0:row10:col2 |

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
<sub>← back to [remdesivir](drugs/drug_remdesivir/)</sub>
