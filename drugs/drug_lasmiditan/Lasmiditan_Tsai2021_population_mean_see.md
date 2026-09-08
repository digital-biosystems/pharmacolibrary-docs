# lasmiditan — `Lasmiditan_Tsai2021_population_mean_see`

> ## <span class="pk-badge pk-badge--neutral">None</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Tsai M; Nery ESM; Kerr L; Khanna R; Komori M; Dennehy EB; et al. et al. (2021). Clinical pharmacokinetics 60
  ·  DOI: [10.1007/s40262-020-00966-z](https://doi.org/10.1007/s40262-020-00966-z)

## Model component
<dbs-pgx drug="lasmiditan" model-id="Lasmiditan_Tsai2021_population_mean_see" status="" stale="false" population="pediatric patients with migraine" measured-compound="lasmiditan" parameterization="apparent" topology="1C"></dbs-pgx>

**Parameterization:** CL/F, Q/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `not captured`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Ka, 1/h | `Q49` · kabs | —(suppressed) | %SEE | — | [s] · [%] · [ee] | not captured | llm_confirmed (0.6) | Tab3:row1:col1 | — | not captured |
| CL/F, L/h | `Q27` · CL/F | —(suppressed) | %SEE | — | [s] · [%] · [ee] | not captured | llm_confirmed (0.6) | Tab3:row2:col1 | — | not captured |
| V2/F, L | `Q82` · V2/F | —(suppressed) | %SEE | — | [s] · [%] · [ee] | not captured | llm_confirmed (0.6) | Tab3:row3:col1 | — | not captured |
| Q/F, L/h | `Q69` · Q/F | —(suppressed) | %SEE | — | [s] · [%] · [ee] | not captured | llm_confirmed (0.6) | Tab3:row4:col1 | — | not captured |
| V3/F, L | `Q78` · V3/F | —(suppressed) | %SEE | — | [s] · [%] · [ee] | not captured | llm_confirmed (0.6) | Tab3:row5:col1 | — | not captured |
| theta_cl_f_body_weight | `Q900` · theta_cl_f_body_weight | —(suppressed) | %SEE | — | not captured | not captured | not captured (not captured) | Tab3:row8:col1 | — | not captured |
| theta_v2_f_body_weight | `Q900` · theta_v2_f_body_weight | —(suppressed) | %SEE | — | not captured | not captured | not captured (not captured) | Tab3:row9:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: '%SEE' (kabs)
- unit_dimension_unknown: '%SEE' (CL/F)
- unit_dimension_unknown: '%SEE' (V2/F)
- unit_dimension_unknown: '%SEE' (Q/F)
- unit_dimension_unknown: '%SEE' (V3/F)
- dropped unlinked row (NIL): 'Ntr' — extend the ontology if this is a real PK parameter (source ['Tab3:row6:col1'])
- dropped unlinked row (NIL): 'MTT, h' — extend the ontology if this is a real PK parameter (source ['Tab3:row7:col1'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=lasmiditan
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- population split: 'population mean (%see)' subgroup of Tsai_2021 (paper reports 2 populations: iiva (%see), population mean (%see))

**Extraction notes:**
- LLM selected parameter table(s) 3

## Validation

_No comparable checks._

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_lasmiditan/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Tsai_2021` / `Tsai_2021::population_mean_see`)


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
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
