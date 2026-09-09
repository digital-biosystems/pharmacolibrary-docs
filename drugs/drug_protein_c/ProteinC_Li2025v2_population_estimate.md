# protein C — `ProteinC_Li2025v2_population_estimate`

> ## <span class="pk-badge pk-badge--neutral">None</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `protein C concentrate`, measured `protein C`.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
not matched (stem Li_2025_2)

## Model component
<dbs-pgx drug="protein C" model-id="ProteinC_Li2025v2_population_estimate" status="" stale="false" population="patients with severe congenital protein C deficiency" measured-compound="protein C" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `not captured`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Clearance (dL/h) | `Q22` · CL | —(suppressed) | dL/h | — | [dl] / [h] | not captured | exact (1.0) | TB25050017-3:row1:col1 | — | 0.0992 (None% RSE) |
| Volume of distribution (dL) | `Q61` · V | —(suppressed) | dL | — | [dl] | not captured | exact (1.0) | TB25050017-3:row2:col1 | — | 0.0505 (None% RSE) |
| effect_of_age_on_the_rate_of_endogenous_protein_c_production | `Q900` · effect_of_age_on_the_rate_of_endogenous_protein_c_production | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | TB25050017-3:row5:col1 | — | not captured |
| First-order absorption rate constant (1/h) | `Q49` · kabs | —(suppressed) | not captured | — | not captured | not captured | llm_confirmed (0.6) | TB25050017-3:row13:col1 | — | not captured |
| Bioavailability | `Q40` · Fab | —(suppressed) | not captured | — | not captured | not captured | exact (1.0) | TB25050017-3:row14:col1 | — | not captured |
| theta_v_age | `Q900` · theta_v_age | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | TB25050017-3:row3:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped PD-category row 'Rate of endogenous protein C production (IU/h)' → Q327 (kin, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['TB25050017-3:row4:col1'])
- covariate level 'Effect of age on the rate of endogenous protein C production' → Q900:effect_of_age_on_the_rate_of_endogenous_protein_c_production = 0.589 (linear_fractional on Q22)
- dropped duplicate Q22 ('Effect of SCPCD indication on clearance', value '-0.575') — already have one for this compound
- dropped unlinked row (NIL): 'Effect of SCPCD indication on rate of endogenous protein C production' — extend the ontology if this is a real PK parameter (source ['TB25050017-3:row9:col1'])
- dropped unlinked row (NIL): 'Duration of administration (h) b' — extend the ontology if this is a real PK parameter (source ['TB25050017-3:row15:col1'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=protein C
- population split: 'population estimate' subgroup of Li_2025_2 (paper reports 3 populations: percentage relative standard error, population estimate, standard error)

**Extraction notes:**
- unparsed cell TB25050017-3:row13:col4 = '0.04 (0.0284, 0.0867)'
- unparsed cell TB25050017-3:row14:col4 = '0.764 (0.511, 0.886)'
- unparsed cell TB25050017-3:row15:col4 = '4.94 (3.34, 6.37)'
- LLM selected parameter table(s) 3

## Validation

_No comparable checks._

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_protein_c/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Li_2025_2` / `Li_2025_2::population_estimate`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_protein_c/ProteinC_Li2025v2_population_estimate/ProteinC_Li2025v2_population_estimate_matlab.zip" download>ProteinC_Li2025v2_population_estimate_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_protein_c/ProteinC_Li2025v2_population_estimate/ProteinC_Li2025v2_population_estimate_matlab_simbio.zip" download>ProteinC_Li2025v2_population_estimate_matlab_simbio.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_protein_c/ProteinC_Li2025v2_population_estimate/ProteinC_Li2025v2_population_estimate_sbml.zip" download>ProteinC_Li2025v2_population_estimate_sbml.zip</a> <span class="pk-size">(2.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_protein_c/ProteinC_Li2025v2_population_estimate/ProteinC_Li2025v2_population_estimate_cellml.zip" download>ProteinC_Li2025v2_population_estimate_cellml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
