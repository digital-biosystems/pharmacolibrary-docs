# bacterial burden in bladder — PD  <span class="pk-badge pk-badge--red">rejected</span>

- **paper:** `Hernández-Lozano_2025`
- **model family:** `indirect_response_i`
- **driver:** `conc_no_pk`
- **tier:** population
- **effect:** inhibition/unknown

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Hernández-Lozano I; Aranzana-Climent V; Cao S; Matias C; Ulf Hansen J; Liepinsh E; Hughes D; Hobbie SN; Vingsbo Lundberg C; Friberg LE et al. (2025). The Journal of antimicrobial chemotherapy 80
  ·  DOI: [10.1093/jac/dkae409](https://doi.org/10.1093/jac/dkae409)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| k d — Value | `Q331` · not captured | 0.179 | mg/L | not captured | llm (not captured) | dkae409-T1:row5:col4 |
| B max — Value | `Q332` · not captured | 9.18 | not captured | not captured | llm (not captured) | dkae409-T1:row6:col4 |
| B max — 95% CI | `Q332` · not captured | 8.97 | not captured | not captured | llm (not captured) | dkae409-T1:row6:col5 |
| γ — Value | `Q89` · not captured | 1 | not captured | not captured | llm (not captured) | dkae409-T1:row8:col4 |
| k ada × 1000 — Value | `Q49` · not captured | 0.080 | not captured | not captured | llm (not captured) | dkae409-T1:row15:col4 |
| k ada × 1000 — 95% CI | `Q95` · not captured | 0.033 | not captured | not captured | llm (not captured) | dkae409-T1:row15:col5 |
| k d,k — Value | `Q331` · not captured | 0.526 | mg/L | not captured | llm (not captured) | dkae409-T1:row23:col4 |
| k d,k — 95% CI | `Q331` · not captured | 0.348 | mg/L | not captured | llm (not captured) | dkae409-T1:row23:col5 |
| k ada,k — Value | `Q49` · not captured | 0.031 | not captured | not captured | llm (not captured) | dkae409-T1:row27:col4 |
| k ada,k — 95% CI | `Q95` · not captured | 0.006 | not captured | not captured | llm (not captured) | dkae409-T1:row27:col5 |
| B max,k — Value | `Q332` · not captured | 6.49 | not captured | not captured | llm (not captured) | dkae409-T1:row28:col4 |
| k d,b — Value | `Q331` · not captured | 1.16 | mg/L | not captured | llm (not captured) | dkae409-T1:row34:col4 |
| k d,b — 95% CI | `Q331` · not captured | 0.85 | mg/L | not captured | llm (not captured) | dkae409-T1:row34:col5 |
| B max,b — Value | `Q332` · not captured | 7.07 | not captured | not captured | llm (not captured) | dkae409-T1:row39:col4 |
| γ — Value | `Q89` · not captured | 1 | not captured | not captured | llm (not captured) | dkae409-T1:row41:col4 |

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
<sub>← back to [allopurinol](drugs/drug_allopurinol/)</sub>
