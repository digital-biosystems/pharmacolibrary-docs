<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A08A&quot;,&quot;href&quot;:&quot;atc/A08A.md&quot;},{&quot;label&quot;:&quot;mazindol&quot;,&quot;href&quot;:&quot;drugs/drug_mazindol/&quot;},{&quot;label&quot;:&quot;Konofal_2014 \u00b7 final&quot;}]"></div>

# mazindol — `Mazindol_Konofal2014_final`

> ## <span class="pk-badge pk-badge--neutral">None</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Konofal E; Zhao W; Laouénan C; Lecendreux M; Kaguelidou F; Benadjaoud L; et al. et al. (2014). Drug design, development and therapy 8
  ·  DOI: [10.2147/DDDT.S65495](https://doi.org/10.2147/DDDT.S65495)

## Model component
<dbs-pgx drug="mazindol" model-id="Mazindol_Konofal2014_final" status="" stale="false" population="children with ADHD" measured-compound="mazindol" parameterization="apparent" topology="1C"></dbs-pgx>

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `not captured`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Lag-time (h) | `Q83` · tlag | —(suppressed) | h | — | [h] | not captured | llm (0.6) | t3-dddt-8-2321:row2:col3 | — | not captured |
| Ka (h−1) | `Q49` · kabs | —(suppressed) | h−1 | — | [1] / [h] | not captured | exact (1.0) | t3-dddt-8-2321:row3:col3, t3-dddt-8-2321:row3:col4 | — | not captured |
| θ1 | `Q900` · equation variable | —(suppressed) | not captured | — | not captured | not captured | llm (0.6) | t3-dddt-8-2321:row6:col3, t3-dddt-8-2321:row6:col4 | — | not captured |
| CL/F | `Q900` · CL/F | —(suppressed) | L h−1 | — | not captured | not captured | not captured (not captured) | t3-dddt-8-2321:row4:col3, t3-dddt-8-2321:row4:col4 | — | not captured |
| V/F | `Q900` · V/F | —(suppressed) | L | — | not captured | not captured | not captured (not captured) | t3-dddt-8-2321:row7:col3, t3-dddt-8-2321:row7:col4 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| CL/F (L h−1) | Q27 | not captured | exact |
| V/F (L) | Q76 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q27 ('CL/F= CLref* (FFMi/28)θ1', value None) — already have one for this compound
- dropped duplicate Q76 ('V/F= V/Fref* (Agei/10)θ2', value None) — already have one for this compound
- dropped duplicate Q900 ('θ2', value '2.28') — already have one for this compound
- dropped duplicate Q76 ('V/F', value '11.4') — already have one for this compound
- dropped duplicate Q27 ('CL/F', value '24.5') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=mazindol
- bound model equation to Q27 (CL/F): CL/F = CLref* (FFMi/28)^θ1
- bound model equation to Q76 (V/F): V/F = V/Fref* (Agei/10)^θ2
- Q27 (CL/F) is equation-defined: value moved to equation-variable 'CL/F (L h−1)'; equation kept verbatim
- Q76 (V/F) is equation-defined: value moved to equation-variable 'V/F (L)'; equation kept verbatim
- model-stage split: 'final model' is the final model of Konofal_2014 (paper reports 2 stages: basic model, final model); same population, different model-building step

**Extraction notes:**
- LLM selected parameter table(s) 3
- captured model equation CL/F = CLref* (FFMi/28)^θ1
- captured model equation V/F = V/Fref* (Agei/10)^θ2

## Validation

_No comparable checks._

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_mazindol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Konofal_2014` / `Konofal_2014::final`)


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
