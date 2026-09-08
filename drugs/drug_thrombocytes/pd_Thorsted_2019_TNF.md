# tumor necrosis factor alpha — PD  <span class="pk-badge pk-badge--red">rejected</span>

- **paper:** `Thorsted_2019`
- **model family:** `indirect_response_i`
- **driver:** `not_resolved`
- **tier:** population
- **effect:** stimulation/proportional

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Thorsted A; Bouchene S; Tano E; Castegren M; Lipcsey M; Sjölin J; Karlsson MO; Friberg LE; Nielsen EI et al. (2019). PloS one 14
  ·  DOI: [10.1371/journal.pone.0211981](https://doi.org/10.1371/journal.pone.0211981)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| Vmax — Estimates (RSE%) | `Q66` · not captured | 442000 | RSE% | not captured | special_case (not captured) | pone.0211981.t002:row1:col3 |
| KM — Estimates (RSE%) | `Q1` · not captured | 12600 | RSE% | not captured | exact (not captured) | pone.0211981.t002:row2:col3 |
| KM — Variability in CV% (RSE%)c [SHR%] | `Q1` · not captured | 120 | not captured | not captured | exact (not captured) | pone.0211981.t002:row2:col5 |
| Vc — Estimates (RSE%) | `Q63` · not captured | 36.1 | RSE% | not captured | exact (not captured) | pone.0211981.t002:row3:col3 |
| Vc — Variability in CV% (RSE%)c [SHR%] | `Q63` · not captured | 75.3 | not captured | not captured | exact (not captured) | pone.0211981.t002:row3:col5 |
| BASEETX — Variability in CV% (RSE%)c [SHR%] | `Q318` · not captured | 96.3 | not captured | not captured | llm (not captured) | pone.0211981.t002:row4:col5 |
| Baseline ETX (Coatest, study F)b — (unit) | `Q324` · not captured | 1810 | unit | not captured | llm_confirmed (not captured) | pone.0211981.t002:row5:col1 |
| MTTTNF-α — Variability in CV% (RSE%)c [SHR%] | `Q318` · not captured | 81.5 | not captured | not captured | llm (not captured) | pone.0211981.t002:row8:col5 |
| S0,TNF-α — Variability in CV% (RSE%)c [SHR%] | `Q318` · not captured | 54.1 | not captured | not captured | llm (not captured) | pone.0211981.t002:row9:col5 |
| Baseline TNF-α (DuoSet, study E)b — (unit) | `Q324` · not captured | 25.4 | unit | not captured | llm_confirmed (not captured) | pone.0211981.t002:row10:col1 |
| Baseline TNF-α (BioSource, study C+F)b — (unit) | `Q324` · not captured | 3.06 | unit | not captured | llm_confirmed (not captured) | pone.0211981.t002:row11:col1 |
| Baseline TNF-α (BioSource, study D)b — (unit) | `Q324` · not captured | 68.2 | unit | not captured | llm_confirmed (not captured) | pone.0211981.t002:row12:col1 |
| Emax — Estimates (RSE%) | `Q320` · not captured | 2540 | RSE% | not captured | exact (not captured) | pone.0211981.t002:row13:col3 |
| MTTEC50 — Estimates (RSE%) | `Q321` · not captured | 6.33 | RSE% | not captured | llm (not captured) | pone.0211981.t002:row16:col3 |
| Tmax — Estimates (RSE%) | `Q56` · not captured | 45100 | RSE% | not captured | exact (not captured) | pone.0211981.t002:row17:col3 |
| TC50 — Estimates (RSE%) | `Q321` · not captured | 29300 | RSE% | not captured | llm (not captured) | pone.0211981.t002:row18:col3 |
| MTTIL-6 — Variability in CV% (RSE%)c [SHR%] | `Q318` · not captured | 47.4 | not captured | not captured | llm (not captured) | pone.0211981.t002:row19:col5 |
| S0,IL-6 — Variability in CV% (RSE%)c [SHR%] | `Q318` · not captured | 79.9 | not captured | not captured | llm (not captured) | pone.0211981.t002:row20:col5 |
| Baseline IL-6 (BioSource, study C+D+F)b — (unit) | `Q324` · not captured | 8.19 | unit | not captured | llm_confirmed (not captured) | pone.0211981.t002:row21:col1 |
| σ ETX — Estimates (RSE%) | `Q315` · not captured | 32.1 | RSE% | not captured | llm (not captured) | pone.0211981.t002:row24:col3 |
| σ TNF-α — Estimates (RSE%) | `Q315` · not captured | 48.5 | RSE% | not captured | llm (not captured) | pone.0211981.t002:row25:col3 |
| σ IL-6 — Estimates (RSE%) | `Q315` · not captured | 50.5 | RSE% | not captured | llm (not captured) | pone.0211981.t002:row26:col3 |

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
<sub>← back to [thrombocytes](drugs/drug_thrombocytes/)</sub>
