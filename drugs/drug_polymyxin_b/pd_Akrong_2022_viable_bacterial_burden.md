<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;PolymyxinB_Li2023_reference&quot;,&quot;label&quot;:&quot;Li_2023_reference&quot;,&quot;href&quot;:&quot;drugs/drug_polymyxin_b/PolymyxinB_Li2023_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;PolymyxinB_Manchandani2018_reference&quot;,&quot;label&quot;:&quot;Manchandani_2018_reference&quot;,&quot;href&quot;:&quot;drugs/drug_polymyxin_b/PolymyxinB_Manchandani2018_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;PolymyxinB_Chauzy2022_reference&quot;,&quot;label&quot;:&quot;Chauzy_2022_reference&quot;,&quot;href&quot;:&quot;drugs/drug_polymyxin_b/PolymyxinB_Chauzy2022_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;PolymyxinB_Chen2022_reference&quot;,&quot;label&quot;:&quot;Chen_2022_reference&quot;,&quot;href&quot;:&quot;drugs/drug_polymyxin_b/PolymyxinB_Chen2022_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;PolymyxinB_Lakota2018_reference&quot;,&quot;label&quot;:&quot;Lakota_2018_reference&quot;,&quot;href&quot;:&quot;drugs/drug_polymyxin_b/PolymyxinB_Lakota2018_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# name — PD  <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

- **paper:** `Akrong_2022`
- **model family:** `sigmoid_emax`
- **driver:** `conc_no_pk`
- **tier:** descriptive
- **effect:** inhibition/unknown

## Citation
Akrong G; Chauzy A; Aranzana-Climent V; Lacroix M; Deroche L; Prouvensier L; et al. et al. (2022). Antimicrobial agents and chemotherapy 66
  ·  DOI: [10.1128/AAC.01789-21](https://doi.org/10.1128/AAC.01789-21)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| Kg | `Q358` · not captured | 1.62 | not captured | not captured | llm (not captured) | tab_0:row6:col3 |
| B max | `Q332` · not captured | 8.5 | not captured | not captured | space_fold (not captured) | tab_0:row7:col3 |
| E max(0) | `Q320` · not captured | 8.96 | not captured | not captured | space_fold (not captured) | tab_0:row8:col3 |
| EC 50 | `Q321` · not captured | 1.46 | mg/L | not captured | space_fold (not captured) | tab_0:row10:col3 |
| K on | `Q329` · not captured | 0.253 | not captured | not captured | space_fold (not captured) | tab_0:row13:col3 |
| K on — % CV for IIV | `Q329` · not captured | 40.8 | not captured | not captured | space_fold (not captured) | tab_0:row13:col4 |
| s | `Q335` · not captured | 0.608 | not captured | not captured | exact (not captured) | tab_0:row17:col3 |
| g | `Q325` · not captured | 0.656 | Hill coefficient that characterizes the steepness of the drug effect relationship | not captured | review_gapfill (not captured) | Akrong_2022:review |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


## Exposure-response model

`PolymyxinB_Akrong2022_PD_viable_bacterial_burden` — sigmoid_emax, `response = E0 + Emax*frac`

| parameter | value (paper units) | SI |
|---|---|---|
| E0 | 0 | — |
| Emax | -8.96 CFU/mL | — |
| EC50 | 1.46 mg/L | 0.00146 kg/m3 |
| gamma | 0.656 | — |

Closed-form check points (response, SI): `at_0` = 0, `at_EC50` = -4.48, `at_inf` = -8.96

Deviations:

- `defaulted_parameters` — E0
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


**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | secondary_empty | 0.0 (0/14 fields) | 14 |

<details><summary>14 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `driver_compound` | Polymyxin B | not captured | mismatch |
| `gpt-oss:120b` | `effect_direction` | inhibition | not captured | mismatch |
| `gpt-oss:120b` | `effect_form` | unknown | not captured | mismatch |
| `gpt-oss:120b` | `model_family` | sigmoid_emax | not captured | mismatch |
| `gpt-oss:120b` | `parameters[Q320]` | 8.96 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 1.46 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | 0.656 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q329]` | 0.253 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q329]` | 40.8 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q332]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q332]` | 8.5 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q335]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q335]` | 0.608 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q358]` | 1.62 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_polymyxin_b/PolymyxinB_Akrong2022_PD_viable_bacterial_burden/PolymyxinB_Akrong2022_PD_viable_bacterial_burden_modelica.zip" download>PolymyxinB_Akrong2022_PD_viable_bacterial_burden_modelica.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_polymyxin_b/PolymyxinB_Akrong2022_PD_viable_bacterial_burden/PolymyxinB_Akrong2022_PD_viable_bacterial_burden_matlab.zip" download>PolymyxinB_Akrong2022_PD_viable_bacterial_burden_matlab.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_polymyxin_b/PolymyxinB_Akrong2022_PD_viable_bacterial_burden/PolymyxinB_Akrong2022_PD_viable_bacterial_burden_sbml.zip" download>PolymyxinB_Akrong2022_PD_viable_bacterial_burden_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_polymyxin_b/PolymyxinB_Akrong2022_PD_viable_bacterial_burden/PolymyxinB_Akrong2022_PD_viable_bacterial_burden_cellml.zip" download>PolymyxinB_Akrong2022_PD_viable_bacterial_burden_cellml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PD_SigmoidEmaxSweep.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/drug_polymyxin_b/PolymyxinB_Akrong2022_PD_viable_bacterial_burden/PolymyxinB_Akrong2022_PD_viable_bacterial_burden_params.json" metaurl="assets/fmu/PD_SigmoidEmaxSweep.vr.json" wasmurl="assets/fmu/PD_SigmoidEmaxSweep.js" controlsurl="drugs/drug_polymyxin_b/PolymyxinB_Akrong2022_PD_viable_bacterial_burden/PolymyxinB_Akrong2022_PD_viable_bacterial_burden_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PD_SigmoidEmaxSweep` · parameters `PolymyxinB_Akrong2022_PD_viable_bacterial_burden_params.json` · controls `PolymyxinB_Akrong2022_PD_viable_bacterial_burden_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>← back to [polymyxin B](drugs/drug_polymyxin_b/)</sub>
