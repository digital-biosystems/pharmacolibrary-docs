# eslicarbazepine — `Eslicarbazepine_Sunkaraneni2018v2_final`

> ## <span class="pk-badge pk-badge--neutral">None</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `eslicarbazepine acetate`, measured `eslicarbazepine`.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
not matched (stem Sunkaraneni_2018_2)

## Model component
<dbs-pgx drug="eslicarbazepine" model-id="Eslicarbazepine_Sunkaraneni2018v2_final" status="" stale="false" population="pediatric patients with partial-onset seizures" measured-compound="eslicarbazepine" parameterization="apparent" topology="1C"></dbs-pgx>

**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `not captured`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL: apparent elimination clearance (L/h) | `Q22` · CL | —(suppressed) | L/h | — | [l] / [h] | not captured | llm_confirmed (0.6) | Tab3:row2:col1, Tab3:row2:col2 | — | not captured |
| V: apparent volume of distribution (L) | `Q76` · V/F | —(suppressed) | L | — | [l] | not captured | llm_confirmed (0.6) | Tab3:row5:col1, Tab3:row5:col2 | — | not captured |
| F1: relative bioavailability during carbamazepine use (–) | `Q87` · Frel | —(suppressed) | not captured | — | not captured | not captured | llm_confirmed (0.6) | Tab3:row8:col1, Tab3:row8:col2 | — | not captured |
| theta_cl_category | `Q900` · theta_cl_category | —(suppressed) | L/h | — | not captured | not captured | not captured (not captured) | Tab3:row3:col2 | — | not captured |
| theta_q49_category | `Q900` · theta_q49_category | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | Tab3:row6:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'RV CCV component' — extend the ontology if this is a real PK parameter (source ['Tab3:row9:col1', 'Tab3:row9:col2'])
- dropped unlinked row (NIL): 'RV additive component' — extend the ontology if this is a real PK parameter (source ['Tab3:row10:col1', 'Tab3:row10:col2'])
- dropped duplicate covariate effect 'category'/'' on Q22 — ambiguous identity (two shifts cannot share one category)
- covariate effect for Q49 has no base parameter row (kept as unattached equation-variable)
- dropped duplicate covariate effect 'category'/'' on Q49 — ambiguous identity (two shifts cannot share one category)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=eslicarbazepine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- model-stage split: 'final parameter estimate' is the final model of Sunkaraneni_2018_2 (paper reports 2 stages: final parameter estimate, interindividual variability/residual variabilitya); same population, different model-building step

**Extraction notes:**
- unparsed cell Tab3:row2:col3 = '25.0 %CV'
- unparsed cell Tab3:row2:col5 = '1.61, 1.77'
- unparsed cell Tab3:row3:col1 = '− 0.176'
- unparsed cell Tab3:row3:col3 = '− 0.247, − 0.101'
- unparsed cell Tab3:row4:col3 = '0.439, 0.86'
- unparsed cell Tab3:row5:col3 = '13.2 %CV'
- unparsed cell Tab3:row5:col5 = '30.8, 45.8'
- unparsed cell Tab3:row6:col3 = '83.8 %CV'
- unparsed cell Tab3:row8:col5 = '0.61, 0.761'
- unparsed cell Tab3:row9:col3 = '328–23.3 %CVF [100–50,000]'
- unparsed cell Tab3:row9:col5 = '0.0443, 0.0643'
- unparsed cell Tab3:row10:col3 = '32,300, 224,000'
- LLM selected parameter table(s) 3

## Validation

_No comparable checks._

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_eslicarbazepine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Sunkaraneni_2018_2` / `Sunkaraneni_2018_2::final`)


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
