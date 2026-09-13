<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07A&quot;,&quot;href&quot;:&quot;atc/A07A.md&quot;},{&quot;label&quot;:&quot;rifaximin&quot;,&quot;href&quot;:&quot;drugs/drug_rifaximin/&quot;},{&quot;label&quot;:&quot;Wang_2021 \u00b7 estimate&quot;}]"></div>

# rifaximin — `Rifaximin_Wang2021_estimate`

> ## <span class="pk-badge pk-badge--neutral">None</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Wang H; Chen C; Chen X; Zhang J; Liu Y; Li X et al. (2021). Frontiers in veterinary science 8
  ·  DOI: [10.3389/fvets.2021.651369](https://doi.org/10.3389/fvets.2021.651369)

## Model component
<dbs-pgx drug="rifaximin" model-id="Rifaximin_Wang2021_estimate" status="" stale="false" population="mice with S. aureus-induced mastitis" measured-compound="rifaximin" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `not captured`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | `Q63` · V1 | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | T4:row1:col1 | — | not captured |
| V2 | `Q64` · V2 | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | T4:row2:col1 | — | not captured |
| Cl1 | `Q22` · CL | —(suppressed) | not captured | — | not captured | not captured | llm (0.6) | T4:row3:col1 | — | not captured |
| Cl2 | `Q30` · Q | —(suppressed) | not captured | — | not captured | not captured | special_case (0.95) | T4:row4:col1 | — | not captured |
| α | `Q67` · λ1 | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | T4:row5:col1 | — | not captured |
| ß | `Q60` · t1/2β | —(suppressed) | not captured | — | not captured | not captured | llm (0.6) | T4:row6:col1 | — | not captured |
| T1/2 (h) | `Q57` · t1/2z | —(suppressed) | h | — | [h] | not captured | exact (1.0) | Wang_2021_table_3:row2:col5 | — | not captured |
| MRT (h) | `Q53` · MRT | —(suppressed) | h | — | [h] | not captured | exact (1.0) | Wang_2021_table_3:row3:col5 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=rifaximin
- population split: 'estimate' subgroup of Wang_2021 (paper reports 3 populations: administered dose (μg/gland) (n = 8), estimate, units)

**Extraction notes:**
- companion parameter table 3 transcribed (18 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

_No comparable checks._

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_rifaximin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Wang_2021` / `Wang_2021::estimate`)


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
