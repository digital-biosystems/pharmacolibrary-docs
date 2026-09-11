# atropine — `Atropine_Strm2021_median`

> ## <span class="pk-badge pk-badge--neutral">None</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `atropine sulfate`, measured `atropine`.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Ström L; Dalin F; Domberg M; Stenlund C; Bondesson U; Hedeland M; et al. et al. (2021). BMC veterinary research 17
  ·  DOI: [10.1186/s12917-021-02847-4](https://doi.org/10.1186/s12917-021-02847-4)

## Model component
<dbs-pgx drug="atropine" model-id="Atropine_Strm2021_median" status="" stale="false" population="horses" measured-compound="atropine" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `not captured`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| tvVc | `Q63` · V1 | —(suppressed) | not captured | — | not captured | not captured | tv_prefix (0.95) | Tab1:row2:col2 | — | not captured |
| tvVt | `Q64` · V2 | —(suppressed) | not captured | — | not captured | not captured | llm (0.6) | Tab1:row3:col2 | — | not captured |
| tvCl | `Q22` · CL | —(suppressed) | not captured | — | not captured | not captured | tv_prefix (0.95) | Tab1:row4:col2 | — | not captured |
| tvCld | `Q30` · Q | —(suppressed) | not captured | — | not captured | not captured | tv_prefix (0.95) | Tab1:row5:col2 | — | not captured |
| tvfdrop (ilogit, eye drop) | `Q40` · Fab | —(suppressed) | ilogit, eye drop | — | [ilogit] | not captured | llm (0.6) | Tab1:row6:col2 | — | not captured |
| tvKa | `Q49` · kabs | —(suppressed) | not captured | — | not captured | not captured | tv_prefix (0.95) | Tab1:row9:col2 | — | not captured |
| Half-life_absorption | `Q95` · t1/2ka | —(suppressed) | not captured | — | not captured | not captured | llm (0.6) | Tab1:row14:col2 | — | not captured |
| Half-life_Beta (terminal phase) | `Q60` · t1/2β | —(suppressed) | terminal phase | — | [terminalphase] | not captured | llm (0.6) | Tab1:row15:col2 | — | not captured |
| Half-life_alpha (initial phase) | `Q59` · t1/2α | —(suppressed) | initial phase | — | [initialphase] | not captured | llm (0.6) | Tab1:row16:col2 | — | not captured |
| Vss (steady-state volume of distribution) | `Q65` · Vss | —(suppressed) | steady-state volume of distribution | — | [s]^2 · [tatevolumeofdistribution] · [teady] | not captured | exact (1.0) | Tab1:row17:col2 | — | not captured |
| MRT (Mean residence time (IV) | `Q53` · MRT | —(suppressed) | Mean residence time (IV | — | [m] · [eanresidencetime] · [iv] | not captured | exact (1.0) | Tab1:row18:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'ilogit, eye drop' (Fab)
- unit_dimension_unknown: 'ilogit, infusion' (Fab)
- dropped duplicate Q40 ('tvfINF (ilogit, infusion)', value '0.738') — already have one for this compound
- unit_dimension_unknown: 'terminal phase' (t1/2β)
- unit_dimension_unknown: 'initial phase' (t1/2α)
- unit_dimension_unknown: 'steady-state volume of distribution' (Vss)
- unit_dimension_unknown: 'Mean residence time (IV' (MRT)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=atropine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'median' subgroup of Ström_2021 (paper reports 3 populations: 2.50%, 97.50%, median)

**Extraction notes:**
- unparsed cell Tab1:row12:col1 = 'Scalar (0–1)'
- unparsed cell Tab1:row13:col1 = 'Scalar (0–1)'
- LLM selected parameter table(s) 1

## Validation

_No comparable checks._

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_atropine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Ström_2021` / `Ström_2021::median`)


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
