# icatibant — `Icatibant_Wang2021_shrinkage`

> ## <span class="pk-badge pk-badge--neutral">None</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Wang Y; Jomphe C; Marier JF; Martin P et al. (2021). Journal of clinical pharmacology 61
  ·  DOI: [10.1002/jcph.1768](https://doi.org/10.1002/jcph.1768)

## Model component
<dbs-pgx drug="icatibant" model-id="Icatibant_Wang2021_shrinkage" status="" stale="false" population="pediatric and adult patients with hereditary angioedema and healthy adults" measured-compound="icatibant" parameterization="apparent" topology="2C"></dbs-pgx>

**Parameterization:** CL/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `not captured`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ka | `Q49` · kabs | —(suppressed) | h–1 | — | 1/h | not captured | exact (1.0) | Wang_2021:other_prose | — | not captured |
| Cl/F | `Q27` · CL/F | —(suppressed) | L/h | — | L/h | not captured | exact (1.0) | Wang_2021:other_prose | — | not captured |
| Vc/F | `Q290` · V1/F | —(suppressed) | L | — | L | not captured | exact (1.0) | Wang_2021:other_prose | — | not captured |
| Vp/F | `Q82` · V2/F | —(suppressed) | L | — | L | not captured | exact (1.0) | Wang_2021:other_prose | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'ka, h–1'
- dropped value-less row: 'tlag, h'
- dropped value-less row: 'Cl/F, L/h'
- dropped value-less row: 'Vc/F, L'
- dropped value-less row: 'Clp/F, L/h'
- dropped value-less row: 'Vp/F, L'
- dropped value-less row: 'ka (h–1)' (captured trailing unit 'h–1' for child rows)
- dropped value-less row: 'tlag (h)' (captured trailing unit 'h' for child rows)
- dropped value-less row: 'Cl/F (L/h)Weight'
- dropped value-less row: 'Vc/F (L)Weight'
- dropped value-less row: 'Clp/F (L/h)' (captured trailing unit 'L/h' for child rows)
- dropped value-less row: 'Vp/F (L)' (captured trailing unit 'L' for child rows)
- salvaged Q49 ('ka'=3.27) from results prose — parameter table was unreadable
- salvaged Q27 ('Cl/F'=15.4) from results prose — parameter table was unreadable
- salvaged Q290 ('Vc/F'=20.4) from results prose — parameter table was unreadable
- salvaged Q82 ('Vp/F'=1.75) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=icatibant
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- model equation 'θi = θTypical·expθeffi·Cov=iwhere θTypical is the population value of PK parameters for subjects in the category of reference and exp(θeffi) is the multiplicative effect of category i on parameter θ' not bound — neither LHS nor base term 'θTypical' linked to an ontology parameter
- status held at route_to_review — not promoted
- population split: 'shrinkage (%)' subgroup of Wang_2021 (paper reports 3 populations: shrinkage (%), typical value, typical value (rse%))

**Extraction notes:**
- unparsed cell jcph1768-tbl-0002:row3:col2 = '2.50 12.7'
- unparsed cell jcph1768-tbl-0002:row7:col2 = '3.10 9.7'
- companion parameter table S4 transcribed (19 record(s), model stage 'base')
- LLM selected parameter table(s) 2, S4
- captured model equation θi = θTypical·expθeffi·Cov=iwhere θTypical is the population value of PK parameters for subjects in the category of reference and exp(θeffi) is the multiplicative effect of category i on parameter θ

## Validation

_No comparable checks._

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_icatibant/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Wang_2021` / `Wang_2021::shrinkage`)


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
