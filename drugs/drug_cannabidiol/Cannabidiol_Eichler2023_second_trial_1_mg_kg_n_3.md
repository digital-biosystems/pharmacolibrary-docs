# cannabidiol — `Cannabidiol_Eichler2023_second_trial_1_mg_kg_n_3`

> ## <span class="pk-badge pk-badge--neutral">None</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Eichler F; Poźniak B; Machnik M; Schenk I; Wingender A; Baudisch N; et al. et al. (2023). Frontiers in veterinary science 10
  ·  DOI: [10.3389/fvets.2023.1234551](https://doi.org/10.3389/fvets.2023.1234551)

## Model component
<dbs-pgx drug="cannabidiol" model-id="Cannabidiol_Eichler2023_second_trial_1_mg_kg_n_3" status="" stale="false" population="horses" measured-compound="cannabidiol" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `not captured`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| AUC0–12 h (h·ng/mL) | `Q19` · AUCt | —(suppressed) | h·ng/mL | — | [[h] · [ng]] / [ml] | not captured | llm (0.6) | Eichler_2023_table_5:row0:col2 | — | not captured |
| Cmax (ng/mL) | `Q32` · Cmax | —(suppressed) | ng/mL | — | [ng] / [ml] | not captured | exact (1.0) | Eichler_2023_table_5:row1:col2 | — | not captured |
| tmax (hr) | `Q56` · tmax | —(suppressed) | hr | — | [h] | not captured | exact (1.0) | Eichler_2023_table_5:row2:col2 | — | not captured |
| Q2 | `Q30` · Q | —(suppressed) | L/h/kg | — | L/h | not captured | special_case (0.95) | Eichler_2023:discussion_prose | — | not captured |
| clearance | `Q22` · CL | —(suppressed) | L/h/kg | — | L/h | not captured | exact (1.0) | Eichler_2023:discussion_prose | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'CBDNCA' (AUCt)
- dropped duplicate Q19 ('AUC0−12h(CBDPop_PK)AUC0−12h(CBDNCA)', value '0.86') — already have one for this compound
- unit_dimension_unknown: 'CBDNCA' (Cmax)
- dropped duplicate Q32 ('Cmax(CBDPop_PK)Cmax(CBDNCA)', value '1.21') — already have one for this compound
- unit_dimension_unknown: 'CBDNCA' (tmax)
- dropped duplicate Q56 ('tmax(CBDPop_PK)tmax(CBDNCA)', value '1.02') — already have one for this compound
- salvaged Q30 ('Q2'=1.35) from results prose — parameter table was unreadable
- salvaged Q22 ('clearance'=10.75) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cannabidiol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- population split: 'second trial (1 mg/kg, n = 3)' subgroup of Eichler_2023 (paper reports 6 populations: first trial (0.2 mg/kg, n = 3), omega, population value, second trial (1 mg/kg, n = 3), shrinkage (%), third trial (3 mg/kg, n = 5))

**Extraction notes:**
- companion parameter table 5 transcribed (18 record(s))
- LLM selected parameter table(s) 4, 5

## Validation

_No comparable checks._

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_cannabidiol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Eichler_2023` / `Eichler_2023::second_trial_1_mg_kg_n_3`)


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
