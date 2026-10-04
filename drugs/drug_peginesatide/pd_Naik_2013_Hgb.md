<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B03X&quot;,&quot;href&quot;:&quot;atc/B03X.md&quot;},{&quot;label&quot;:&quot;peginesatide&quot;,&quot;href&quot;:&quot;drugs/drug_peginesatide/&quot;},{&quot;label&quot;:&quot;Naik_2013 \u00b7 PD hemoglobin&quot;}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# hemoglobin — PD  <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.833). The first reading is what the record holds.">cross-check: disputed</span>

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## What this record describes

**As extracted:** Peginesatide (concentrations from this paper's PK model) drives hemoglobin (in g/dL): indirect response — drug inhibits the loss of hemoglobin.

**Model:** A model was generated (see the **Models** tab); it has no in-browser simulator.

> Peginesatide plasma concentrations (ng/mL) stimulate the endogenous production rate of progenitor cells, modeled with a modified precursor-dependent lifespan indirect response model of hemoglobin (g/dL), with EC50 401 ng/mL (bootstrap median 417 ng/mL, 95% CI 128 ng/mL), baseline hemoglobin 11.5 g/dL, mean transit time for progenitor cells 462 h and for red blood cells 1640 h (red cell life span ~67.5 days); the paper does not state the Emax value for peginesatide in the excerpts.
>
> <sub>in the paper's terms — summarised by glm-5.3-flash from the paper's text; not checked by a person</sub>

- **paper:** `Naik_2013`
- **model family:** `indirect_response_ii`
- **driver:** `pk_record`
- **tier:** population
- **effect:** stimulation/unknown

## Citation
Naik H et al., A Population Pharmacokinetic and Pharma…, PloS one (2013)
  ·  DOI: [10.1371/journal.pone.0066422](https://doi.org/10.1371/journal.pone.0066422)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| PD (effect) | Drug concentration required for 50% of maximumresponse (EC50), in ng/mL — Final Estimate (% SEM) | `Q321` · not captured | 401 | ng/mL | not captured | llm_confirmed (not captured) | pone-0066422-t007:row1:col1 |
| PD (effect) | Drug concentration required for 50% of maximumresponse (EC50), in ng/mL — Median Bootstrap Estimate | `Q321` · not captured | 417 | ng/mL | not captured | llm_confirmed (not captured) | pone-0066422-t007:row1:col2 |
| PD (effect) | Drug concentration required for 50% of maximumresponse (EC50), in ng/mL — Bootstrap 95% CI1 | `Q321` · not captured | 128 | ng/mL | not captured | llm_confirmed (not captured) | pone-0066422-t007:row1:col3 |
| PD (effect) | Hemoglobin at baseline, in g/dL — Final Estimate (% SEM) | `Q324` · not captured | 11.5 | not captured | not captured | llm_confirmed (not captured) | pone-0066422-t007:row3:col1 |
| — | Hemoglobin at baseline, in g/dL — Median Bootstrap Estimate | `Q100` · not captured | 11.5 | not captured | not captured | llm_corrected (not captured) | pone-0066422-t007:row3:col2 |
| — | Hemoglobin at baseline, in g/dL — Bootstrap 95% CI1 | `Q100` · not captured | 11.4 | not captured | not captured | llm_corrected (not captured) | pone-0066422-t007:row3:col3 |
| PK (driver) | Mean transit time for red blood cells (MTT),in hours — Final Estimate (% SEM) | `Q81` · not captured | 1640 | not captured | not captured | llm_confirmed (not captured) | pone-0066422-t007:row4:col1 |
| PK (driver) | Mean transit time for red blood cells (MTT),in hours — Median Bootstrap Estimate | `Q81` · not captured | 1610 | not captured | not captured | llm_confirmed (not captured) | pone-0066422-t007:row4:col2 |
| PK (driver) | Mean transit time for red blood cells (MTT),in hours — Bootstrap 95% CI1 | `Q81` · not captured | 1330 | not captured | not captured | llm_confirmed (not captured) | pone-0066422-t007:row4:col3 |
| PK (driver) | Mean transit time for progenitor cells (MTP),in hours — Final Estimate (% SEM) | `Q81` · not captured | 462 | not captured | not captured | llm_confirmed (not captured) | pone-0066422-t007:row5:col1 |
| PK (driver) | Mean transit time for progenitor cells (MTP),in hours — Median Bootstrap Estimate | `Q81` · not captured | 447 | not captured | not captured | llm_confirmed (not captured) | pone-0066422-t007:row5:col2 |
| PK (driver) | Mean transit time for progenitor cells (MTP),in hours — Bootstrap 95% CI1 | `Q81` · not captured | 348.4 | not captured | not captured | llm_confirmed (not captured) | pone-0066422-t007:row5:col3 |
| PD (effect) | ω2 on EC50 — Final Estimate (% SEM) | `Q321` · not captured | 8.92 | CF | not captured | llm_confirmed (not captured) | pone-0066422-t007:row11:col1 |
| PD (effect) | ω2 on EC50 — Median Bootstrap Estimate | `Q321` · not captured | 9.47 | CF | not captured | llm_confirmed (not captured) | pone-0066422-t007:row11:col2 |
| PD (effect) | ω2 on EC50 — Bootstrap 95% CI1 | `Q321` · not captured | 3.61 | CF | not captured | llm_confirmed (not captured) | pone-0066422-t007:row11:col3 |
| variability | ω2 on BL Hgb — Final Estimate (% SEM) | `Q312` · not captured | 0.00485 | CF | not captured | llm_confirmed (not captured) | pone-0066422-t007:row12:col1 |
| variability | ω2 on BL Hgb — Median Bootstrap Estimate | `Q312` · not captured | 0.00476 | CF | not captured | llm_confirmed (not captured) | pone-0066422-t007:row12:col2 |
| variability | ω2 on BL Hgb — Bootstrap 95% CI1 | `Q312` · not captured | 0.00393 | CF | not captured | llm_confirmed (not captured) | pone-0066422-t007:row12:col3 |
| variability | ω2 on CF — Final Estimate (% SEM) | `Q312` · not captured | 10.6 | CF | not captured | llm_confirmed (not captured) | pone-0066422-t007:row13:col1 |
| variability | ω2 on CF — Median Bootstrap Estimate | `Q312` · not captured | 11.6 | CF | not captured | llm_confirmed (not captured) | pone-0066422-t007:row13:col2 |
| variability | ω2 on CF — Bootstrap 95% CI1 | `Q312` · not captured | 7.244 | CF | not captured | llm_confirmed (not captured) | pone-0066422-t007:row13:col3 |
| variability | σ2 (additive component) — Final Estimate (% SEM) | `Q315` · not captured | 0.00478 | additive component | not captured | exact (not captured) | pone-0066422-t007:row14:col1 |
| variability | σ2 (additive component) — Median Bootstrap Estimate | `Q315` · not captured | 0.00475 | additive component | not captured | exact (not captured) | pone-0066422-t007:row14:col2 |
| variability | σ2 (additive component) — Bootstrap 95% CI1 | `Q315` · not captured | 0.0044 | additive component | not captured | exact (not captured) | pone-0066422-t007:row14:col3 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


## Exposure-response model

`Peginesatide_Naik2013_PD_hgb` — turnover (indirect response type II), `response = E0/(1 - Emax*frac)`

| parameter | value (paper units) | SI |
|---|---|---|
| E0 | 11.5 g/dL | 115 kg/m3 |
| Emax | 1 | — |
| EC50 | 401 ng/mL | 0.000401 kg/m3 |
| gamma | 1 | — |

Closed-form check points (response, SI): `at_0` = 115, `at_EC50` = 230, `at_inf` = inf

Deviations:

- `defaulted_parameters` — Emax, gamma

## Review

Verdict <span class="pk-badge pk-badge--orange">needs review</span> · route to `scholar`

| check | status | note |
|---|---|---|
| `T0_driver` | pass | driver is the drug, a synonym or one of its metabolites (or unnamed) |
| `T1_closed_form` | pass | engineer's check points reproduced from the bound parameters |
| `T1b_fmu` | skipped | template FMU / fmpy not available — advisory only |
| `T2_direction` | skipped | effect_direction 'stimulation' |
| `T3_plausibility` | pass | EC50, gamma, Imax and baseline in range |
| `T4_defaults` | fail | a core parameter took a library default: Emax |

Advisory:

- defaulted: Emax — a row the paper has and the record lacks


**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.833 (25/30 fields) | 5 |

<details><summary>5 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model_family` | indirect_response_ii | indirect_response_i | mismatch |
| `gpt-oss:120b` | `parameters[Q100]` | not captured | 11.5 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q314]` | not captured | 8.92 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 8.92 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q324]` | 11.5 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_peginesatide/Peginesatide_Naik2013_PD_hgb/Peginesatide_Naik2013_PD_hgb_modelica.zip" download>Peginesatide_Naik2013_PD_hgb_modelica.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_peginesatide/Peginesatide_Naik2013_PD_hgb/Peginesatide_Naik2013_PD_hgb_matlab.zip" download>Peginesatide_Naik2013_PD_hgb_matlab.zip</a> <span class="pk-size">(1.8 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_peginesatide/Peginesatide_Naik2013_PD_hgb/Peginesatide_Naik2013_PD_hgb_sbml.zip" download>Peginesatide_Naik2013_PD_hgb_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_peginesatide/Peginesatide_Naik2013_PD_hgb/Peginesatide_Naik2013_PD_hgb_cellml.zip" download>Peginesatide_Naik2013_PD_hgb_cellml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>← back to [peginesatide](drugs/drug_peginesatide/)</sub>
