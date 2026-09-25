<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Vancomycin_Goyal2022_final_pk_model&quot;,&quot;label&quot;:&quot;Goyal_2022_final_pk_model&quot;,&quot;href&quot;:&quot;drugs/drug_vancomycin/Vancomycin_Goyal2022_final_pk_model.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Vancomycin_Goyal2022_population_typical_value&quot;,&quot;label&quot;:&quot;Goyal_2022_population_typical_value&quot;,&quot;href&quot;:&quot;drugs/drug_vancomycin/Vancomycin_Goyal2022_population_typical_value.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Vancomycin_Yoon2023_reference&quot;,&quot;label&quot;:&quot;Yoon_2023_reference&quot;,&quot;href&quot;:&quot;drugs/drug_vancomycin/Vancomycin_Yoon2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# name — PD  <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.361). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

- **paper:** `Vera-Yunca_2025`
- **model family:** `sigmoid_emax`
- **driver:** `conc_no_pk`
- **tier:** descriptive
- **effect:** inhibition/proportional

## Citation
Vera-Yunca D; Matias C; Vingsbo Lundberg C; Friberg LE et al. (2025). The Journal of antimicrobial chemotherapy 80
  ·  DOI: [10.1093/jac/dkaf140](https://doi.org/10.1093/jac/dkaf140)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| k g (h−1) — Value | `Q47` · not captured | 1.47 | h−1 | not captured | llm (not captured) | dkaf140-T1:row1:col2 |
| k g (h−1) — RSE (%) | `Q47` · not captured | 3.40 | h−1 | not captured | llm (not captured) | dkaf140-T1:row1:col3 |
| B max [log10 (cfu/mL)] — Value | `Q332` · not captured | 12.3 | not captured | not captured | llm (not captured) | dkaf140-T1:row2:col2 |
| B max [log10 (cfu/mL)] — RSE (%) | `Q332` · not captured | 1.20 | not captured | not captured | llm (not captured) | dkaf140-T1:row2:col3 |
| k d (h−1) — Value | `Q331` · not captured | 0.179 | h−1 | not captured | space_fold (not captured) | dkaf140-T1:row3:col2 |
| E max,LZD (h−1) — Value | `Q47` · not captured | 1.97 | h−1 | not captured | llm (not captured) | dkaf140-T1:row5:col2 |
| E max,LZD (h−1) — RSE (%) | `Q326` · not captured | 8.50 | h−1 | not captured | llm (not captured) | dkaf140-T1:row5:col3 |
| EC50,LZD (mg/L) — Value | `Q321` · not captured | 0.560 | mg/L | not captured | llm_confirmed (not captured) | dkaf140-T1:row6:col2 |
| EC50,LZD (mg/L) — RSE (%) | `Q321` · not captured | 3.80 | mg/L | not captured | llm_confirmed (not captured) | dkaf140-T1:row6:col3 |
| t 50,eff,LZD (h) — Value | `Q57` · not captured | 2.24 | h | not captured | llm (not captured) | dkaf140-T1:row8:col2 |
| t 50,eff,LZD (h) — RSE (%) | `Q57` · not captured | 9.90 | h | not captured | llm (not captured) | dkaf140-T1:row8:col3 |
| E max,VAN (h−1) — Value | `Q326` · not captured | 1.74 | h−1 | not captured | llm (not captured) | dkaf140-T1:row10:col2 |
| E max,VAN (h−1) — RSE (%) | `Q326` · not captured | 3.00 | h−1 | not captured | llm (not captured) | dkaf140-T1:row10:col3 |
| EC50,VAN,0 (mg/L) — Value | `Q321` · not captured | 0.245 | mg/L | not captured | llm_confirmed (not captured) | dkaf140-T1:row11:col2 |
| EC50,VAN,0 (mg/L) — RSE (%) | `Q321` · not captured | 2.00 | mg/L | not captured | llm_confirmed (not captured) | dkaf140-T1:row11:col3 |
| k ON,VAN (h−1 × mg−1 × L) — Value | `Q329` · not captured | 0.0635 | h−1 × mg−1 × L | not captured | llm (not captured) | dkaf140-T1:row13:col2 |
| k ON,VAN (h−1 × mg−1 × L) — RSE (%) | `Q329` · not captured | 5.30 | h−1 × mg−1 × L | not captured | llm (not captured) | dkaf140-T1:row13:col3 |
| E max,VAN (h−1) | `Q320` · not captured | 1.74 | h−1 | not captured | review_gapfill (not captured) | Vera-Yunca_2025:review |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


## Exposure-response model

`Vancomycin_VeraYunca2025_PD_bacterial_load` — sigmoid_emax, `response = E0 + Emax*frac`

| parameter | value (paper units) | SI |
|---|---|---|
| E0 | 0 | — |
| Emax | -1.74 h−1 | -0.0004833 1/s |
| EC50 | 0.56 mg/L | 0.00056 kg/m3 |
| gamma | 1 | — |

Closed-form check points (response, SI): `at_0` = 0, `at_EC50` = -0.0002417, `at_inf` = -0.0004833

Deviations:

- `defaulted_parameters` — E0, gamma
- `pd_binding_inhibition_sign` — effect_direction=inhibition with a positive Emax (Q320) — sign flipped

## Review

Verdict <span class="pk-badge pk-badge--orange">needs review</span> · route to `scholar`

| check | status | note |
|---|---|---|
| `T0_driver` | pass | driver is the drug, a synonym or one of its metabolites (or unnamed) |
| `T1_closed_form` | pass | engineer's check points reproduced from the bound parameters |
| `T1b_fmu` | skipped | template FMU / fmpy not available — advisory only |
| `T2_direction` | pass | curve direction matches effect_direction |
| `T3_plausibility` | pass | EC50, gamma, Imax and baseline in range |
| `T4_defaults` | fail | a core parameter took a library default: E0 |

Advisory:

- defaulted: E0 — a row the paper has and the record lacks


**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.361 (13/36 fields) | 23 |

<details><summary>23 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `driver_compound` | linezolid, vancomycin | linezolid (LZD) and vancomycin (VAN) | mismatch |
| `gpt-oss:120b` | `parameters[Q320]` | 1.74 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | not captured | 1.74 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | not captured | 3.00 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | not captured | 1.97 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q320]` | not captured | 8.50 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q324]` | not captured | 1.10 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | not captured | 20.0 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | not captured | 2.19 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | not captured | 15.0 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | not captured | 1.31 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | not captured | 31.6 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q326]` | 1.74 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q326]` | 3.00 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q326]` | not captured | 1.47 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q326]` | 8.50 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q335]` | not captured | 3.43 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q335]` | not captured | 6.70 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q38]` | not captured | 6.30 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q47]` | 1.47 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q47]` | 1.97 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q57]` | 2.24 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q57]` | 9.90 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_vancomycin/Vancomycin_VeraYunca2025_PD_bacterial_load/Vancomycin_VeraYunca2025_PD_bacterial_load_modelica.zip" download>Vancomycin_VeraYunca2025_PD_bacterial_load_modelica.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_vancomycin/Vancomycin_VeraYunca2025_PD_bacterial_load/Vancomycin_VeraYunca2025_PD_bacterial_load_matlab.zip" download>Vancomycin_VeraYunca2025_PD_bacterial_load_matlab.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_vancomycin/Vancomycin_VeraYunca2025_PD_bacterial_load/Vancomycin_VeraYunca2025_PD_bacterial_load_sbml.zip" download>Vancomycin_VeraYunca2025_PD_bacterial_load_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_vancomycin/Vancomycin_VeraYunca2025_PD_bacterial_load/Vancomycin_VeraYunca2025_PD_bacterial_load_cellml.zip" download>Vancomycin_VeraYunca2025_PD_bacterial_load_cellml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PD_SigmoidEmaxSweep.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/drug_vancomycin/Vancomycin_VeraYunca2025_PD_bacterial_load/Vancomycin_VeraYunca2025_PD_bacterial_load_params.json" metaurl="assets/fmu/PD_SigmoidEmaxSweep.vr.json" wasmurl="assets/fmu/PD_SigmoidEmaxSweep.js" controlsurl="drugs/drug_vancomycin/Vancomycin_VeraYunca2025_PD_bacterial_load/Vancomycin_VeraYunca2025_PD_bacterial_load_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PD_SigmoidEmaxSweep` · parameters `Vancomycin_VeraYunca2025_PD_bacterial_load_params.json` · controls `Vancomycin_VeraYunca2025_PD_bacterial_load_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>← back to [vancomycin](drugs/drug_vancomycin/)</sub>
