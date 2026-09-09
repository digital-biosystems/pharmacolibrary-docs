# atogepant — `Atogepant_Schlachter2026_phase_3_modela`

> ## <span class="pk-badge pk-badge--neutral">None</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
not matched (stem Schlachter_2026)

## Model component
<dbs-pgx drug="atogepant" model-id="Atogepant_Schlachter2026_phase_3_modela" status="" stale="false" population="healthy participants and patients with migraine" measured-compound="atogepant" parameterization="apparent" topology="2C"></dbs-pgx>

**Parameterization:** CL/F, Q/F, Q2/F, V1/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `not captured`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Apparent clearance patients [CL/F (L/h)] | `Q27` · CL/F | —(suppressed) | not captured | — | not captured | not captured | llm_confirmed (0.6) | Tab2:row3:col3, Tab2:row3:col4, Tab2:row3:col5 | — | not captured |
| Apparent central volume of distribution [V1/F (L)] | `Q290` · V1/F | —(suppressed) | not captured | — | not captured | not captured | llm_confirmed (0.6) | Tab2:row6:col3, Tab2:row6:col4, Tab2:row6:col5 | — | not captured |
| Apparent first intercompartmental clearance [Q/F (L/h)] | `Q69` · Q/F | —(suppressed) | not captured | — | not captured | not captured | llm_corrected (0.6) | Tab2:row7:col3, Tab2:row7:col4, Tab2:row7:col5 | — | not captured |
| Apparent first peripheral volume of distribution [V2/F (L)] | `Q82` · V2/F | —(suppressed) | not captured | — | not captured | not captured | llm_corrected (0.6) | Tab2:row8:col3, Tab2:row8:col4, Tab2:row8:col5 | — | not captured |
| Apparent second intercompartmental clearance [Q2/F (L/h)] | `Q80` · Q2/F | —(suppressed) | not captured | — | not captured | not captured | llm_corrected (0.6) | Tab2:row9:col3, Tab2:row9:col4, Tab2:row9:col5 | — | not captured |
| Apparent second peripheral volume of distribution [V3/F (L)] | `Q78` · V3/F | —(suppressed) | not captured | — | not captured | not captured | llm_confirmed (0.6) | Tab2:row10:col3, Tab2:row10:col4, Tab2:row10:col5 | — | not captured |
| Lag time [ALAG (h)] | `Q83` · tlag | —(suppressed) | not captured | — | not captured | not captured | llm_confirmed (0.6) | Tab2:row11:col3, Tab2:row11:col4, Tab2:row11:col5 | — | not captured |
| Itraconazole effect on Frel | `Q87` · Frel | —(suppressed) | not captured | — | not captured | not captured | llm_confirmed (0.6) | Tab2:row26:col3, Tab2:row26:col4, Tab2:row26:col5 | — | not captured |
| exponential_dose_effect_on_frel | `Q900` · exponential_dose_effect_on_frel | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | Tab2:row31:col3, Tab2:row31:col4, Tab2:row31:col5 | — | not captured |
| theta_cl_f_hepatic | `Q900` · theta_cl_f_hepatic | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | Tab2:row29:col3, Tab2:row29:col4 | — | not captured |
| theta_tlag_food | `Q900` · theta_tlag_food | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | Tab2:row30:col3, Tab2:row30:col4, Tab2:row30:col5 | — | not captured |
| theta_q49_formulation | `Q900` · theta_q49_formulation | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | Tab2:row32:col3, Tab2:row32:col4 | — | not captured |
| theta_v1_f_weight_power | `Q900` · theta_v1_f_weight_power | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | Tab2:row33:col3, Tab2:row33:col4, Tab2:row33:col5 | — | not captured |
| theta_q49_weight_power | `Q900` · theta_q49_weight_power | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | Tab2:row34:col3, Tab2:row34:col4, Tab2:row34:col5 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| F | Q40 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q27 ('Apparent clearance healthy participants [CL/F (L/h)]', value '22.9') — already have one for this compound
- dropped unlinked row (NIL): 'Duration zero-order absorption [Tk0 (h)]' — extend the ontology if this is a real PK parameter (source ['Tab2:row5:col3', 'Tab2:row5:col4', 'Tab2:row5:col5'])
- dropped unlinked row (NIL): 'Fraction zero-order absorption (Fk0)' — extend the ontology if this is a real PK parameter (source ['Tab2:row16:col3', 'Tab2:row16:col4', 'Tab2:row16:col5'])
- dropped unlinked row (NIL): 'Blood-plasma ratio' — extend the ontology if this is a real PK parameter (source ['Tab2:row17:col3', 'Tab2:row17:col4', 'Tab2:row17:col5'])
- dropped duplicate Q27 ('Itraconazole effect on CL/F', value '-0.662') — already have one for this compound
- dropped duplicate Q27 ('Rifampin effect on CL/F after first dose', value '-0.128') — already have one for this compound
- dropped duplicate Q27 ('Rifampin effect on CL/F following multiple doses', value '0.818') — already have one for this compound
- dropped duplicate Q27 ('Quinidine effect on CL/F', value '-0.285') — already have one for this compound
- dropped unlinked row (NIL): 'Rifampin effect on Frel following multiple doses' — extend the ontology if this is a real PK parameter (source ['Tab2:row27:col3', 'Tab2:row27:col4'])
- dropped unlinked row (NIL): 'Rifampin effect on Frel after first dose' — extend the ontology if this is a real PK parameter (source ['Tab2:row28:col3', 'Tab2:row28:col4', 'Tab2:row28:col5'])
- covariate level 'Exponential dose effect on Frel' → Q900:exponential_dose_effect_on_frel = 0.119 (power on Q27)
- dropped duplicate Q82 ('CovQ/F,V2/F', value '0.422') — already have one for this compound
- covariate effect for Q49 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q49 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=atogepant
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- bound model equation to Q40 (Fab): F = 86.1 * (bodyweight/76.8)^
- Q40 (Fab) is equation-defined: value moved to equation-variable 'F'; equation kept verbatim
- population split: 'phase 3 modela' subgroup of Schlachter_2026 (paper reports 3 populations: phase 1 model, phase 2 modela, phase 3 modela)

**Extraction notes:**
- unparsed cell Tab2:row18:col5 = '(−0.669 to −0.654)'
- unparsed cell Tab2:row19:col5 = '(−0.164 to −0.0924)'
- unparsed cell Tab2:row25:col5 = '(−0.305 to −0.266)'
- unparsed cell Tab2:row27:col5 = '(−0.325 to −0.172)'
- unparsed cell Tab2:row29:col5 = '(−0.503 to −0.230)'
- unparsed cell Tab2:row32:col1 = '−0.44/−0.42'
- unparsed cell Tab2:row32:col5 = '(−0.507 to −0.198)'
- LLM selected parameter table(s) 2
- LLM region Schlachter_2026:other_prose: no JSON records returned
- captured model equation F = 86.1 * (bodyweight/76.8)^

## Validation

_No comparable checks._

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_atogepant/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Schlachter_2026` / `Schlachter_2026::phase_3_modela`)


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
