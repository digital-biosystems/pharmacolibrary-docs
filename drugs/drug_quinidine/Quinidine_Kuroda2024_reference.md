# quinidine — `Quinidine_Kuroda2024_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Kuroda T; Minamijima Y; Kinman CK; Takahashi Y; Ebisuda Y; Inoue K; et al. et al. (2024). Frontiers in veterinary science 11
  ·  DOI: [10.3389/fvets.2024.1454342](https://doi.org/10.3389/fvets.2024.1454342)

## Model component
<dbs-pgx drug="quinidine" model-id="Quinidine_Kuroda2024_reference" status="extracted" stale="false" population="Thoroughbred horses" measured-compound="quinidine" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | `Q63` · V1 | 0.63 | not captured | not captured | not captured | 40.5 | exact (1.0) | tab1:row1:col2, tab1:row1:col3, tab1:row1:col4, tab1:row1:col5, tab1:row1:col6 | — | not captured |
| V2 | `Q64` · V2 | 0.59 | not captured | not captured | not captured | 37.8 | exact (1.0) | tab1:row2:col2, tab1:row2:col3, tab1:row2:col4, tab1:row2:col5, tab1:row2:col6 | — | not captured |
| V3 | `Q77` · V3 | 3.68 | not captured | not captured | not captured | 28.5 | exact (1.0) | tab1:row3:col2, tab1:row3:col3, tab1:row3:col4, tab1:row3:col5, tab1:row3:col6 | — | not captured |
| CL | `Q22` · CL | 0.49 | not captured | not captured | not captured | 25.6 | exact (1.0) | tab1:row4:col2, tab1:row4:col3, tab1:row4:col4, tab1:row4:col5, tab1:row4:col6 | — | not captured |
| CL2 | `Q30` · Q | 2.87 | not captured | not captured | not captured | 74.9 | special_case (0.95) | tab1:row5:col2, tab1:row5:col3, tab1:row5:col4, tab1:row5:col5, tab1:row5:col6 | — | not captured |
| Kabs | `Q49` · kabs | 1.00 | not captured | not captured | not captured | 94.3 | exact (1.0) | tab1:row7:col1, tab1:row7:col2, tab1:row7:col3, tab1:row7:col4, tab1:row7:col5, tab1:row7:col6 | — | not captured |
| F | `Q40` · Fab | 36.4 | not captured | not captured | not captured | 33.1 | exact (1.0) | tab1:row8:col2, tab1:row8:col3, tab1:row8:col4, tab1:row8:col5, tab1:row8:col6 | — | not captured |
| Half_life_alpha | `Q59` · t1/2α | 0.06 | not captured | not captured | not captured | 10.2 | llm (0.6) | tab1:row14:col2, tab1:row14:col3, tab1:row14:col4, tab1:row14:col5 | — | not captured |
| Half_life_Beta | `Q60` · t1/2β | 0.31 | not captured | not captured | not captured | 11.9 | llm (0.6) | tab1:row15:col2, tab1:row15:col3, tab1:row15:col4, tab1:row15:col5 | — | not captured |
| Half_life_Gamma | `Q89` · t1/2γ | 7.76 | not captured | not captured | not captured | 8.8 | llm (0.6) | tab1:row16:col2, tab1:row16:col3, tab1:row16:col4, tab1:row16:col5 | — | not captured |
| Absorption_Half_life | `Q95` · t1/2ka | 0.69 | not captured | not captured | not captured | 23.1 | llm (0.6) | tab1:row17:col2, tab1:row17:col3, tab1:row17:col4, tab1:row17:col5 | — | not captured |
| Vss (steady-state volume of distribution) | `Q65` · Vss | 4.90 | steady-state volume of distribution | not captured | [s]^2 · [tatevolumeofdistribution] · [teady] | 5.1 | exact (1.0) | tab1:row18:col2, tab1:row18:col3, tab1:row18:col4, tab1:row18:col5 | — | not captured |
| MRT (Mean residence time) | `Q53` · MRT | 10.12 | Mean residence time | not captured | [m] · [eanresidencetime] | 9.3 | exact (1.0) | tab1:row19:col2, tab1:row19:col3, tab1:row19:col4, tab1:row19:col5 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'units' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'CL3' — extend the ontology if this is a real PK parameter (source ['tab1:row6:col2', 'tab1:row6:col3', 'tab1:row6:col4', 'tab1:row6:col5', 'tab1:row6:col6'])
- unit_dimension_unknown: 'steady-state volume of distribution' (Vss)
- unit_dimension_unknown: 'Mean residence time' (MRT)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=quinidine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 13 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.49 | not captured | not captured | ['tab1:row4:col2', 'tab1:row4:col3', 'tab1:row4:col4', 'tab1:row4:col5', 'tab1:row4:col6'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_quinidine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kuroda_2024` / `Kuroda_2024::reference`)


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
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
