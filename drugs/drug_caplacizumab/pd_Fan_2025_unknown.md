<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;caplacizumab&quot;,&quot;href&quot;:&quot;drugs/drug_caplacizumab/&quot;},{&quot;label&quot;:&quot;Fan_2025 \u00b7 PD HIV-1 viral load&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Caplacizumab_Fan2025_reference&quot;,&quot;label&quot;:&quot;Fan_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_caplacizumab/Caplacizumab_Fan2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Fan_2025_unknown&quot;,&quot;label&quot;:&quot;Fan_2025 \u00b7 unknown&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_caplacizumab/pd_Fan_2025_unknown.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# HIV-1 viral load — PD  <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">mouse</span>

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## What this record describes

**As extracted:** Nb457-NbHSA-Nb457 (measured concentrations) drives HIV-1 viral load (in unknown): target-mediated drug disposition.

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

> In mice given 400 µg of Nb457-NbHSA-Nb457, serum nanobody concentrations drive inhibition of HIV-1 viral load via a mechanism-based TMDD PK-PD model (quasi-equilibrium assumption, sequential fitting), where the drug inhibits viral replication/growth with Imax 16.24 and IC50 0.0341 µg/mL for intraperitoneal dosing and Imax 51.79 with SC50 0.1449 µg/mL for subcutaneous dosing; the paper does not state an explicit effect-form equation beyond this inhibitory TMDD framework.
>
> <sub>in the paper's terms — summarised by glm-5.3-flash from the paper's text; not checked by a person</sub>

- **paper:** `Fan_2025`
- **model family:** `tmdd`
- **driver:** `conc_no_pk`
- **tier:** descriptive
- **effect:** inhibition/unknown

## Citation
Fan X et al., Pharmacokinetic-pharmacodynamic modelin…, Microbiology spectrum (2025)
  ·  DOI: [10.1128/spectrum.00805-25](https://doi.org/10.1128/spectrum.00805-25)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| PK (driver) | kCV (1/h) — Estimate | `Q358` · not captured | 22.72 | not captured | not captured | llm (not captured) | T2:row2:col3 |
| PK (driver) | β (1/h) — Estimate | `Q47` · not captured | 21.1 | not captured | not captured | exact (not captured) | T2:row3:col3 |
| PK (driver) | λ — Description | `Q47` · not captured | 0.81 | not captured | not captured | exact (not captured) | T2:row4:col2 |
| PK (driver) | λ — Estimate | `Q47` · not captured | 36.1 | not captured | not captured | exact (not captured) | T2:row4:col3 |
| PD (effect) | I max — Description | `Q323` · not captured | 1.963 | not captured | not captured | space_fold (not captured) | T2:row6:col2 |
| PD (effect) | I max — Estimate | `Q323` · not captured | 16.24 | not captured | not captured | space_fold (not captured) | T2:row6:col3 |
| PD (effect) | IC50 (μg/mL) — Description | `Q322` · not captured | 0.0341 | μg/mL | not captured | exact (not captured) | T2:row7:col2 |
| variability | σ 3 — Description | `Q315` · not captured | 0.21 | not captured | not captured | llm (not captured) | T2:row8:col2 |
| variability | σ 3 — Estimate | `Q315` · not captured | 14.5 | not captured | not captured | llm (not captured) | T2:row8:col3 |
| PK (driver) | kCV (1/h) — Estimate | `Q358` · not captured | 38.42 | not captured | not captured | llm (not captured) | T2:row10:col3 |
| PK (driver) | β (1/h) — Estimate | `Q47` · not captured | 58 | not captured | not captured | exact (not captured) | T2:row11:col3 |
| PK (driver) | λ — Description | `Q47` · not captured | 2.001 | not captured | not captured | exact (not captured) | T2:row12:col2 |
| PK (driver) | λ — Estimate | `Q47` · not captured | 38.67 | not captured | not captured | exact (not captured) | T2:row12:col3 |
| PD (effect) | I max — Description | `Q323` · not captured | 0.42 | not captured | not captured | space_fold (not captured) | T2:row14:col2 |
| PD (effect) | I max — Estimate | `Q323` · not captured | 51.79 | not captured | not captured | space_fold (not captured) | T2:row14:col3 |
| PD (effect) | SC50 (μg/mL) — Description | `Q322` · not captured | 0.1449 | μg/mL | not captured | llm (not captured) | T2:row15:col2 |
| variability | σ 3 — Description | `Q315` · not captured | 0.94 | not captured | not captured | llm (not captured) | T2:row16:col2 |
| variability | σ 3 — Estimate | `Q315` · not captured | 23.09 | not captured | not captured | llm (not captured) | T2:row16:col3 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


## Exposure-response model

`Caplacizumab_Fan2025_PD_unknown` — sigmoid_emax, `response = E0 + Emax*frac`

| parameter | value (paper units) | SI |
|---|---|---|
| E0 | 0 | — |
| Emax | -16.24 | — |
| EC50 | 0.0341 μg/mL | 3.41e-05 kg/m3 |
| gamma | 1 | — |

Closed-form check points (response, SI): `at_0` = 0, `at_EC50` = -8.12, `at_inf` = -16.24

Deviations:

- `defaulted_parameters` — E0, gamma
- `pd_binding_family_inferred` — the record's model family is tmdd; read from the parameters: Emax/Imax and EC50/IC50 without a Hill coefficient — Emax
- `pd_binding_off_target_driver` — driver compound 'Nb457-NbHSA-Nb457' is not 'caplacizumab' nor one of its metabolites — the curve belongs to that compound's exposure (S12)
- `pd_binding_imax_as_negative_emax` — Imax (Q323) enters SigmoidEmaxSweep as −Emax

## Review

Verdict <span class="pk-badge pk-badge--red">rejected</span> · route to `scholar`

| check | status | note |
|---|---|---|
| `T0_driver` | fail | off-target driver — the curve belongs to that compound |
| `T1_closed_form` | pass | engineer's check points reproduced from the bound parameters |
| `T1b_fmu` | pass | shared PD_SigmoidEmaxSweep FMU reproduces the reference points (worst 0.29%) |
| `T2_direction` | pass | the response falls, as direct effect predicts |
| `T3_plausibility` | pass | EC50, gamma, Imax and baseline in range |
| `T4_defaults` | fail | a core parameter took a library default: E0 |

Blocking:

- off_target_driver: 'Nb457-NbHSA-Nb457' is not 'caplacizumab' (S12)

Advisory:

- defaulted: E0 — a row the paper has and the record lacks


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/drug_caplacizumab/Caplacizumab_Fan2025_PD_unknown/Caplacizumab_Fan2025_PD_unknown_params.json" metaurl="assets/fmu/PD_SigmoidEmaxSweep.vr.json" wasmurl="assets/fmu/PD_SigmoidEmaxSweep.js" controlsurl="drugs/drug_caplacizumab/Caplacizumab_Fan2025_PD_unknown/Caplacizumab_Fan2025_PD_unknown_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PD_SigmoidEmaxSweep` · parameters `Caplacizumab_Fan2025_PD_unknown_params.json` · controls `Caplacizumab_Fan2025_PD_unknown_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>← back to [caplacizumab](drugs/drug_caplacizumab/)</sub>
