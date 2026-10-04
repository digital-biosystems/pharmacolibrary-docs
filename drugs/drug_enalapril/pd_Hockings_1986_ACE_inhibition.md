<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;enalapril&quot;,&quot;href&quot;:&quot;drugs/drug_enalapril/&quot;},{&quot;label&quot;:&quot;Hockings_1986 \u00b7 PD ACE inhibition&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Enalapril_Kechagia2015_reference&quot;,&quot;label&quot;:&quot;Kechagia_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_enalapril/Enalapril_Kechagia2015_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Enalapril_Steichert2025v2_reference&quot;,&quot;label&quot;:&quot;Steichert_2025_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_enalapril/Enalapril_Steichert2025v2_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Hockings_1986_ACE_inhibition&quot;,&quot;label&quot;:&quot;Hockings_1986 \u00b7 ACE inhibition&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_enalapril/pd_Hockings_1986_ACE_inhibition.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;pd_Kechagia_2015_DBP&quot;,&quot;label&quot;:&quot;Kechagia_2015 \u00b7 DBP&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_enalapril/pd_Kechagia_2015_DBP.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# ACE inhibition — PD  <span class="pk-badge pk-badge--orange">needs review</span>

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## What this record describes

**As extracted:** Enalaprilat (concentrations from this paper's PK model) drives ACE inhibition (in %): direct sigmoid Emax (Hill) effect.

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

- **paper:** `Hockings_1986`
- **model family:** `sigmoid_emax`
- **driver:** `pk_record`
- **tier:** descriptive
- **effect:** inhibition/unknown

## Citation
Hockings N et al., Age and the pharmacokinetics of angiote…, British journal of clinical… (1986)
  ·  DOI: [10.1111/j.1365-2125.1986.tb05205.x](https://doi.org/10.1111/j.1365-2125.1986.tb05205.x)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| PD (effect) | Emax (%0) — YI | `Q320` · not captured | 89.8 | not captured | not captured | exact (not captured) | tab_3:row0:col3 |
| PD (effect) | Emax (%0) — Y4 | `Q320` · not captured | 90.6 | not captured | not captured | exact (not captured) | tab_3:row0:col5 |
| PD (effect) | Emax (%0) — Y5 | `Q320` · not captured | 81.3 | not captured | not captured | exact (not captured) | tab_3:row0:col6 |
| PD (effect) | Emax (%0) — Y6 | `Q320` · not captured | 93.0 | not captured | not captured | exact (not captured) | tab_3:row0:col7 |
| PD (effect) | Emax (%0) — Y7 | `Q320` · not captured | 94.1 | not captured | not captured | exact (not captured) | tab_3:row0:col8 |
| PD (effect) | Emax (%0) — Y8 | `Q320` · not captured | 95.2 | not captured | not captured | exact (not captured) | tab_3:row0:col9 |
| PD (effect) | Emax (%0) — E3 | `Q320` · not captured | 96.9 | not captured | not captured | exact (not captured) | tab_3:row0:col13 |
| PD (effect) | Emax (%0) — E4 | `Q320` · not captured | 99.0 | not captured | not captured | exact (not captured) | tab_3:row0:col14 |
| PD (effect) | Emax (%0) — E8 | `Q320` · not captured | 118.8 | not captured | not captured | exact (not captured) | tab_3:row0:col16 |
| PD (effect) | Emax (%0) — E9 | `Q320` · not captured | 93.8 | not captured | not captured | exact (not captured) | tab_3:row0:col17 |
| PD (effect) | Sy — YI | `Q335` · not captured | 2.10 | not captured | not captured | llm (not captured) | tab_3:row1:col3 |
| model term | Sy — Y4 | `Q900` · not captured | 0.93 | not captured | not captured | llm (not captured) | tab_3:row1:col5 |
| model term | Sy — Y5 | `Q900` · not captured | 0.90 | not captured | not captured | llm (not captured) | tab_3:row1:col6 |
| model term | Sy — Y6 | `Q900` · not captured | 1.61 | not captured | not captured | llm (not captured) | tab_3:row1:col7 |
| model term | Sy — Y7 | `Q900` · not captured | 0.99 | not captured | not captured | llm (not captured) | tab_3:row1:col8 |
| PD (effect) | Sy — Y8 | `Q335` · not captured | 0.91 | not captured | not captured | llm (not captured) | tab_3:row1:col9 |
| model term | Sy — Y9 Mean ± s.d. | `Q900` · not captured | 0.90 | not captured | not captured | llm (not captured) | tab_3:row1:col10 |
| PD (effect) | Sy — E3 | `Q335` · not captured | 0.69 | not captured | not captured | llm (not captured) | tab_3:row1:col13 |
| model term | Sy — E4 | `Q900` · not captured | 1.02 | not captured | not captured | llm (not captured) | tab_3:row1:col14 |
| model term | Sy — E8 | `Q900` · not captured | 0.36 | not captured | not captured | llm (not captured) | tab_3:row1:col16 |
| model term | Sy — E9 | `Q900` · not captured | 0.75 | not captured | not captured | llm (not captured) | tab_3:row1:col17 |
| PD (effect) | C50 (ng mt') — YI | `Q321` · not captured | 1.83 | ng mt' | not captured | exact (not captured) | tab_3:row2:col3 |
| PD (effect) | C50 (ng mt') — Y2 | `Q321` · not captured | 5.8 | ng mt' | not captured | exact (not captured) | tab_3:row2:col4 |
| PD (effect) | C50 (ng mt') — Y4 | `Q321` · not captured | 4.2 | ng mt' | not captured | exact (not captured) | tab_3:row2:col5 |
| PD (effect) | C50 (ng mt') — Y5 | `Q321` · not captured | 3.9 | ng mt' | not captured | exact (not captured) | tab_3:row2:col6 |
| PD (effect) | C50 (ng mt') — Y6 | `Q321` · not captured | 4.7 | ng mt' | not captured | exact (not captured) | tab_3:row2:col7 |
| PD (effect) | C50 (ng mt') — Y7 | `Q321` · not captured | 6.9 | ng mt' | not captured | exact (not captured) | tab_3:row2:col8 |
| PD (effect) | C50 (ng mt') — Y8 | `Q321` · not captured | 6.0 | ng mt' | not captured | exact (not captured) | tab_3:row2:col9 |
| PD (effect) | C50 (ng mt') — E3 | `Q321` · not captured | 2.4 | ng mt' | not captured | exact (not captured) | tab_3:row2:col13 |
| PD (effect) | C50 (ng mt') — E4 | `Q321` · not captured | 10.0 | ng mt' | not captured | exact (not captured) | tab_3:row2:col14 |
| PD (effect) | C50 (ng mt') — E8 | `Q321` · not captured | 1.7 | ng mt' | not captured | exact (not captured) | tab_3:row2:col16 |
| PD (effect) | C50 (ng mt') — E9 | `Q321` · not captured | 5.0 | ng mt' | not captured | exact (not captured) | tab_3:row2:col17 |
| model term | r2 — YI | `Q900` · not captured | 0.99 | not captured | not captured | llm (not captured) | tab_3:row3:col3 |
| model term | r2 — Y2 | `Q900` · not captured | 0.99 | not captured | not captured | llm (not captured) | tab_3:row3:col4 |
| model term | r2 — Y4 | `Q900` · not captured | 0.99 | not captured | not captured | llm (not captured) | tab_3:row3:col5 |
| model term | r2 — Y5 | `Q900` · not captured | 0.96 | not captured | not captured | llm (not captured) | tab_3:row3:col6 |
| model term | r2 — Y6 | `Q900` · not captured | 0.97 | not captured | not captured | llm (not captured) | tab_3:row3:col7 |
| model term | r2 — Y7 | `Q900` · not captured | 0.96 | not captured | not captured | llm (not captured) | tab_3:row3:col8 |
| model term | r2 — Y8 | `Q900` · not captured | 0.98 | not captured | not captured | llm (not captured) | tab_3:row3:col9 |
| model term | r2 — E3 | `Q900` · not captured | 0.99 | not captured | not captured | llm (not captured) | tab_3:row3:col13 |
| model term | r2 — E4 | `Q900` · not captured | 0.97 | not captured | not captured | llm (not captured) | tab_3:row3:col14 |
| model term | r2 — E8 | `Q900` · not captured | 0.72 | not captured | not captured | llm (not captured) | tab_3:row3:col16 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


## Exposure-response model

`Enalapril_Hockings1986_PD_ace_inhibition` — sigmoid_emax, `response = E0 + Emax*frac`

| parameter | value (paper units) | SI |
|---|---|---|
| E0 | 0 | — |
| Emax | -89.8 % | -0.898 1 |
| EC50 | 1.83 ng mt' | — |
| gamma | 1 | — |

Closed-form check points (response, SI): `at_0` = 0, `at_EC50` = -0.449, `at_inf` = -0.898

Deviations:

- `defaulted_parameters` — E0, gamma
- `pd_binding_inhibition_sign` — effect_direction=inhibition with a positive Emax (Q320) — sign flipped
- `pd_binding_exposure_unit_unresolved` — "ng mt'" — the x axis is in the paper's unit, not SI

## Review

Verdict <span class="pk-badge pk-badge--orange">needs review</span> · route to `scholar`

| check | status | note |
|---|---|---|
| `T0_driver` | pass | driver is the drug, a synonym or one of its metabolites (or unnamed) |
| `T1_closed_form` | pass | engineer's check points reproduced from the bound parameters |
| `T1b_fmu` | pass | shared PD_SigmoidEmaxSweep FMU reproduces the reference points (worst 0.16%) |
| `T2_direction` | pass | the response falls, as direct effect predicts |
| `T3_plausibility` | pass | EC50, gamma, Imax and baseline in range |
| `T4_defaults` | fail | a core parameter took a library default: E0 |

Advisory:

- defaulted: E0 — a row the paper has and the record lacks
- exposure unit not resolved to SI — the x axis is in the paper's unit


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_enalapril/Enalapril_Hockings1986_PD_ace_inhibition/Enalapril_Hockings1986_PD_ace_inhibition_modelica.zip" download>Enalapril_Hockings1986_PD_ace_inhibition_modelica.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_enalapril/Enalapril_Hockings1986_PD_ace_inhibition/Enalapril_Hockings1986_PD_ace_inhibition_fmi.zip" download>Enalapril_Hockings1986_PD_ace_inhibition_fmi.zip</a> <span class="pk-size">(4.5 kB)</span><br><a href="models/fmu/PD_SigmoidEmaxSweep.fmu" download>PD_SigmoidEmaxSweep.fmu</a> <span class="pk-size">(1.2 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_enalapril/Enalapril_Hockings1986_PD_ace_inhibition/Enalapril_Hockings1986_PD_ace_inhibition_matlab.zip" download>Enalapril_Hockings1986_PD_ace_inhibition_matlab.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_enalapril/Enalapril_Hockings1986_PD_ace_inhibition/Enalapril_Hockings1986_PD_ace_inhibition_sbml.zip" download>Enalapril_Hockings1986_PD_ace_inhibition_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_enalapril/Enalapril_Hockings1986_PD_ace_inhibition/Enalapril_Hockings1986_PD_ace_inhibition_cellml.zip" download>Enalapril_Hockings1986_PD_ace_inhibition_cellml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PD_SigmoidEmaxSweep.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/drug_enalapril/Enalapril_Hockings1986_PD_ace_inhibition/Enalapril_Hockings1986_PD_ace_inhibition_params.json" metaurl="assets/fmu/PD_SigmoidEmaxSweep.vr.json" wasmurl="assets/fmu/PD_SigmoidEmaxSweep.js" controlsurl="drugs/drug_enalapril/Enalapril_Hockings1986_PD_ace_inhibition/Enalapril_Hockings1986_PD_ace_inhibition_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PD_SigmoidEmaxSweep` · parameters `Enalapril_Hockings1986_PD_ace_inhibition_params.json` · controls `Enalapril_Hockings1986_PD_ace_inhibition_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>← back to [enalapril](drugs/drug_enalapril/)</sub>
