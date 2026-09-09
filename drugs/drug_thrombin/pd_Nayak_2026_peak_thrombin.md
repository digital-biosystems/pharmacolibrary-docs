# name — PD  <span class="pk-badge pk-badge--red">rejected</span>

- **paper:** `Nayak_2026`
- **model family:** `emax`
- **driver:** `conc_no_pk`
- **tier:** population
- **effect:** inhibition/unknown

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Nayak S; Suzuki A; Ravva P; Raje S et al. (2026). Clinical pharmacokinetics
  ·  DOI: [10.1007/s40262-026-01695-5](https://doi.org/10.1007/s40262-026-01695-5)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| Baseline peak TGA, P BASE (nM) 37.8 — Popula- | `Q324` · not captured | 4.45 | not captured | not captured | llm_confirmed (not captured) | tab_6:row3:col1 |
| Baseline peak TGA, P BASE (nM) 37.8 — SE | `Q324` · not captured | 11.8 | not captured | not captured | llm_confirmed (not captured) | tab_6:row3:col2 |
| Baseline peak TGA, P BASE (nM) 37.8 — RSE/CV Bootstrap estimate Bootstrap 95% CI | `Q324` · not captured | 37.5 | not captured | not captured | llm_confirmed (not captured) | tab_6:row3:col3 |
| Baseline peak TGA, P BASE (nM) 37.8 | `Q324` · not captured | 11.8 | not captured | not captured | llm_confirmed (not captured) | tab_6:row3:col4 |
| EC 50 (nM) — Popula- | `Q321` · not captured | 2.92 | nM | not captured | space_fold (not captured) | tab_6:row4:col1 |
| EC 50 (nM) — RSE/CV Bootstrap estimate Bootstrap 95% CI | `Q321` · not captured | 2.92 | nM | not captured | space_fold (not captured) | tab_6:row4:col3 |
| EC 50 (nM) | `Q321` · not captured | 1.77 | nM | not captured | space_fold (not captured) | tab_6:row4:col4 |
| Maximum peak TGA, P MAX (nM) 91.4 — Popula- | `Q32` · not captured | 12.2 | not captured | not captured | llm_confirmed (not captured) | tab_6:row5:col1 |
| Maximum peak TGA, P MAX (nM) 91.4 — SE | `Q32` · not captured | 13.3 | not captured | not captured | llm_confirmed (not captured) | tab_6:row5:col2 |
| Maximum peak TGA, P MAX (nM) 91.4 — RSE/CV Bootstrap estimate Bootstrap 95% CI | `Q32` · not captured | 91.6 | not captured | not captured | llm_confirmed (not captured) | tab_6:row5:col3 |
| Maximum peak TGA, P MAX (nM) 91.4 | `Q32` · not captured | 74.8 | not captured | not captured | llm_confirmed (not captured) | tab_6:row5:col4 |
| Additive error peak TGA (nM) — Popula- | `Q317` · not captured | 26.3 | nM | not captured | llm_confirmed (not captured) | tab_6:row7:col1 |
| Additive error peak TGA (nM) — SE | `Q317` · not captured | 0.51 | nM | not captured | llm_confirmed (not captured) | tab_6:row7:col2 |
| Additive error peak TGA (nM) — RSE/CV Bootstrap estimate Bootstrap 95% CI | `Q317` · not captured | 1.94 | nM | not captured | llm_confirmed (not captured) | tab_6:row7:col3 |
| Additive error peak TGA (nM) | `Q317` · not captured | 26.2 | nM | not captured | llm_confirmed (not captured) | tab_6:row7:col4 |
| Additive error peak TGA (nM) | `Q317` · not captured | 24.2 | nM | not captured | llm_confirmed (not captured) | tab_6:row7:col5 |
| IIV on P BASE — Popula- | `Q312` · not captured | 0.104 | not captured | not captured | llm_confirmed (not captured) | tab_6:row8:col1 |
| IIV on P BASE — RSE/CV Bootstrap estimate Bootstrap 95% CI | `Q312` · not captured | 0.0987 | not captured | not captured | llm_confirmed (not captured) | tab_6:row8:col3 |
| IIV on P BASE | `Q312` · not captured | 0.0115 | not captured | not captured | llm_confirmed (not captured) | tab_6:row8:col4 |
| IIV on EC 50 — Popula- | `Q312` · not captured | 0.0283 | not captured | not captured | llm_confirmed (not captured) | tab_6:row9:col1 |
| IIV on EC 50 — RSE/CV Bootstrap estimate Bootstrap 95% CI | `Q312` · not captured | 0.02 | not captured | not captured | llm_confirmed (not captured) | tab_6:row9:col3 |
| IIV on EC 50 | `Q312` · not captured | 0.00165 | not captured | not captured | llm_confirmed (not captured) | tab_6:row9:col4 |
| IIV on P MAX — Popula- | `Q312` · not captured | 0.111 | not captured | not captured | llm_confirmed (not captured) | tab_6:row10:col1 |
| IIV on P MAX — RSE/CV Bootstrap estimate Bootstrap 95% CI | `Q312` · not captured | 0.103 | not captured | not captured | llm_confirmed (not captured) | tab_6:row10:col3 |
| IIV on P MAX | `Q312` · not captured | 0.00341 | not captured | not captured | llm_confirmed (not captured) | tab_6:row10:col4 |

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
