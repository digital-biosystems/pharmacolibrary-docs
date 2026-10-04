<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;gemcitabine&quot;,&quot;href&quot;:&quot;drugs/drug_gemcitabine/&quot;},{&quot;label&quot;:&quot;Yao_2023 \u00b7 PD name&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Gemcitabine_Doi2017_reference&quot;,&quot;label&quot;:&quot;Doi_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_gemcitabine/Gemcitabine_Doi2017_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Gemcitabine_Terranova2021_reference&quot;,&quot;label&quot;:&quot;Terranova_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_gemcitabine/Gemcitabine_Terranova2021_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Blaauboer_2022_unknown&quot;,&quot;label&quot;:&quot;Blaauboer_2022 \u00b7 unknown&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_gemcitabine/pd_Blaauboer_2022_unknown.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Yao_2023_net_body_weight&quot;,&quot;label&quot;:&quot;Yao_2023 \u00b7 net body weight&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_gemcitabine/pd_Yao_2023_net_body_weight.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;pd_Yao_2023_tumor_volume&quot;,&quot;label&quot;:&quot;Yao_2023 \u00b7 tumor volume&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_gemcitabine/pd_Yao_2023_tumor_volume.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# name — PD  <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">mouse</span>

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## What this record describes

**As extracted:** Gemcitabine (concentrations from the PK model of Doi_2017) drives name (in unknown): disease-progression model.

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

> Gemcitabine plasma concentrations drive net body weight (NBW) decline in SW1990 xenograft mice via an Emax-type inhibition of the NBW loss process, with maximum effect E W,max = 0.369 and EC W,50 = 0.673 μg/mL on a baseline loss rate k = 0.00937 1/day; the paper does not state a separate effect-compartment rate for this response.
>
> <sub>in the paper's terms — summarised by glm-5.3-flash from the paper's text; not checked by a person</sub>

- **paper:** `Yao_2023`
- **model family:** `disease_progression`
- **driver:** `cited_pk`
- **tier:** population
- **effect:** inhibition/unknown

## Citation
Yao QY et al., An integrated PK/PD model investigating…, Acta pharmacologica Sinica (2023)
  ·  DOI: [10.1038/s41401-022-00960-0](https://doi.org/10.1038/s41401-022-00960-0)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| PK (driver) | λ 0 (1/day) | `Q67` · not captured | 0.167 | not captured | not captured | llm (not captured) | tab_0:row5:col1 |
| PK (driver) | λ 1 (mm 3 /day) | `Q67` · not captured | 196 | mm 3 /day | not captured | space_fold (not captured) | tab_0:row6:col1 |
| PK (driver) | E T,max | `Q56` · not captured | 0.599 | not captured | not captured | llm (not captured) | tab_0:row7:col1 |
| PD (effect) | EC T,50 (μg/mL) | `Q321` · not captured | 0.999 | μg/mL | not captured | llm (not captured) | tab_0:row8:col1 |
| PK (driver) | k t (1/day) | `Q358` · not captured | 0.171 | not captured | not captured | llm (not captured) | tab_0:row11:col1 |
| variability | IIV T 0 (%) | `Q312` · not captured | 46.6 | not captured | not captured | llm_confirmed (not captured) | tab_0:row12:col1 |
| variability | IIV T 0 (%) | `Q312` · not captured | 45.2 | not captured | not captured | llm_confirmed (not captured) | tab_0:row12:col2 |
| variability | IIV T 0 (%) | `Q312` · not captured | 35.0 | not captured | not captured | llm_confirmed (not captured) | tab_0:row12:col3 |
| variability | IIV λ 0 (%) | `Q312` · not captured | 102 | not captured | not captured | llm_confirmed (not captured) | tab_0:row13:col1 |
| variability | IIV λ 0 (%) | `Q312` · not captured | 102.0 | not captured | not captured | llm_confirmed (not captured) | tab_0:row13:col2 |
| variability | IIV λ 0 (%) | `Q312` · not captured | 83.0 | not captured | not captured | llm_confirmed (not captured) | tab_0:row13:col3 |
| variability | IIV λ 1 (%) | `Q312` · not captured | 54.1 | not captured | not captured | llm_confirmed (not captured) | tab_0:row14:col1 |
| variability | IIV λ 1 (%) | `Q312` · not captured | 54.9 | not captured | not captured | llm_confirmed (not captured) | tab_0:row14:col2 |
| variability | IIV λ 1 (%) | `Q312` · not captured | 41.3 | not captured | not captured | llm_confirmed (not captured) | tab_0:row14:col3 |
| variability | IIV K T,GEM (%) | `Q312` · not captured | 112.7 | not captured | not captured | llm_confirmed (not captured) | tab_0:row15:col1 |
| variability | IIV K T,GEM (%) | `Q312` · not captured | 110.1 | not captured | not captured | llm_confirmed (not captured) | tab_0:row15:col2 |
| variability | IIV K T,GEM (%) | `Q312` · not captured | 77.4 | not captured | not captured | llm_confirmed (not captured) | tab_0:row15:col3 |
| variability | Proportional | `Q316` · not captured | 21.7 | not captured | not captured | llm (not captured) | tab_0:row16:col1 |
| variability | Proportional | `Q316` · not captured | 21.6 | not captured | not captured | llm (not captured) | tab_0:row16:col2 |
| variability | Proportional | `Q316` · not captured | 16.3 | not captured | not captured | llm (not captured) | tab_0:row16:col3 |
| PK (driver) | k (1/day) | `Q47` · not captured | 0.00937 | not captured | not captured | exact (not captured) | tab_0:row20:col1 |
| PD (effect) | E W,max | `Q320` · not captured | 0.369 | not captured | not captured | llm (not captured) | tab_0:row21:col1 |
| PD (effect) | EC W,50 (μg/mL) | `Q321` · not captured | 0.673 | μg/mL | not captured | llm (not captured) | tab_0:row22:col1 |
| variability | IIV NBW 0 (%) | `Q312` · not captured | 9.8 | not captured | not captured | llm_confirmed (not captured) | tab_0:row25:col1 |
| variability | IIV NBW 0 (%) | `Q312` · not captured | 9.4 | not captured | not captured | llm_confirmed (not captured) | tab_0:row25:col2 |
| variability | IIV NBW 0 (%) | `Q312` · not captured | 7.1 | not captured | not captured | llm_confirmed (not captured) | tab_0:row25:col3 |
| variability | IIV k (%) | `Q312` · not captured | 41.4 | not captured | not captured | llm_confirmed (not captured) | tab_0:row26:col1 |
| variability | IIV k (%) | `Q312` · not captured | 39.1 | not captured | not captured | llm_confirmed (not captured) | tab_0:row26:col2 |
| variability | IIV k (%) | `Q312` · not captured | 27.5 | not captured | not captured | llm_confirmed (not captured) | tab_0:row26:col3 |
| variability | IIV K W,GEM (%) | `Q312` · not captured | 54.8 | not captured | not captured | llm_confirmed (not captured) | tab_0:row27:col1 |
| variability | IIV K W,GEM (%) | `Q312` · not captured | 54.1 | not captured | not captured | llm_confirmed (not captured) | tab_0:row27:col2 |
| variability | IIV K W,GEM (%) | `Q312` · not captured | 23.9 | not captured | not captured | llm_confirmed (not captured) | tab_0:row27:col3 |
| variability | IIV ψ W (%) | `Q312` · not captured | 62.2 | not captured | not captured | llm_confirmed (not captured) | tab_0:row28:col1 |
| variability | IIV ψ W (%) | `Q312` · not captured | 60.5 | not captured | not captured | llm_confirmed (not captured) | tab_0:row28:col2 |
| variability | IIV ψ W (%) | `Q312` · not captured | 26.1 | not captured | not captured | llm_confirmed (not captured) | tab_0:row28:col3 |
| variability | Additive error (g) | `Q317` · not captured | 0.59 | g | not captured | exact (not captured) | tab_0:row29:col1 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


## Exposure-response model

`Gemcitabine_Yao2023_PD_net_body_weight` — sigmoid_emax, `response = E0 + Emax*frac`

| parameter | value (paper units) | SI |
|---|---|---|
| E0 | 0 | — |
| Emax | -0.369 | — |
| EC50 | 0.999 μg/mL | 0.000999 kg/m3 |
| gamma | 1 | — |

Closed-form check points (response, SI): `at_0` = 0, `at_EC50` = -0.1845, `at_inf` = -0.369

Deviations:

- `defaulted_parameters` — E0, gamma
- `pd_binding_family_inferred` — the record's model family is disease_progression; read from the parameters: Emax/Imax and EC50/IC50 without a Hill coefficient — Emax
- `pd_binding_inhibition_sign` — effect_direction=inhibition with a positive Emax (Q320) — sign flipped

## Review

Verdict <span class="pk-badge pk-badge--orange">needs review</span> · route to `scholar`

| check | status | note |
|---|---|---|
| `T0_driver` | pass | driver is the drug, a synonym or one of its metabolites (or unnamed) |
| `T1_closed_form` | pass | engineer's check points reproduced from the bound parameters |
| `T1b_fmu` | pass | shared PD_SigmoidEmaxSweep FMU reproduces the reference points (worst 0.05%) |
| `T2_direction` | pass | the response falls, as direct effect predicts |
| `T3_plausibility` | pass | EC50, gamma, Imax and baseline in range |
| `T4_defaults` | fail | a core parameter took a library default: E0 |

Advisory:

- defaulted: E0 — a row the paper has and the record lacks


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_gemcitabine/Gemcitabine_Yao2023_PD_net_body_weight/Gemcitabine_Yao2023_PD_net_body_weight_modelica.zip" download>Gemcitabine_Yao2023_PD_net_body_weight_modelica.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_gemcitabine/Gemcitabine_Yao2023_PD_net_body_weight/Gemcitabine_Yao2023_PD_net_body_weight_fmi.zip" download>Gemcitabine_Yao2023_PD_net_body_weight_fmi.zip</a> <span class="pk-size">(4.6 kB)</span><br><a href="models/fmu/PD_SigmoidEmaxSweep.fmu" download>PD_SigmoidEmaxSweep.fmu</a> <span class="pk-size">(1.2 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_gemcitabine/Gemcitabine_Yao2023_PD_net_body_weight/Gemcitabine_Yao2023_PD_net_body_weight_matlab.zip" download>Gemcitabine_Yao2023_PD_net_body_weight_matlab.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_gemcitabine/Gemcitabine_Yao2023_PD_net_body_weight/Gemcitabine_Yao2023_PD_net_body_weight_sbml.zip" download>Gemcitabine_Yao2023_PD_net_body_weight_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_gemcitabine/Gemcitabine_Yao2023_PD_net_body_weight/Gemcitabine_Yao2023_PD_net_body_weight_cellml.zip" download>Gemcitabine_Yao2023_PD_net_body_weight_cellml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PD_SigmoidEmaxSweep.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/drug_gemcitabine/Gemcitabine_Yao2023_PD_net_body_weight/Gemcitabine_Yao2023_PD_net_body_weight_params.json" metaurl="assets/fmu/PD_SigmoidEmaxSweep.vr.json" wasmurl="assets/fmu/PD_SigmoidEmaxSweep.js" controlsurl="drugs/drug_gemcitabine/Gemcitabine_Yao2023_PD_net_body_weight/Gemcitabine_Yao2023_PD_net_body_weight_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PD_SigmoidEmaxSweep` · parameters `Gemcitabine_Yao2023_PD_net_body_weight_params.json` · controls `Gemcitabine_Yao2023_PD_net_body_weight_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>← back to [gemcitabine](drugs/drug_gemcitabine/)</sub>
