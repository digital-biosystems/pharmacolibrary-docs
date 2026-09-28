<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01C&quot;,&quot;href&quot;:&quot;atc/C01C.md&quot;},{&quot;label&quot;:&quot;levosimendan&quot;,&quot;href&quot;:&quot;drugs/drug_levosimendan/&quot;},{&quot;label&quot;:&quot;Wanderer_2022 \u00b7 PD vasorelaxation&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Levosimendan_Bertin2025_reference&quot;,&quot;label&quot;:&quot;Bertin_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_levosimendan/Levosimendan_Bertin2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Levosimendan_Jonsson2003_reference&quot;,&quot;label&quot;:&quot;Jonsson_2003_reference&quot;,&quot;href&quot;:&quot;drugs/drug_levosimendan/Levosimendan_Jonsson2003_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Levosimendan_Bertin2026_reference&quot;,&quot;label&quot;:&quot;Bertin_2026_reference&quot;,&quot;href&quot;:&quot;drugs/drug_levosimendan/Levosimendan_Bertin2026_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# vasorelaxation — PD  <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.267). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

- **paper:** `Wanderer_2022`
- **model family:** `emax`
- **driver:** `cited_pk`
- **tier:** descriptive
- **effect:** stimulation/unknown

## Citation
Wanderer S; Andereggen L; Mrosek J; Kashefiolasl S; Schubert GA; Marbacher S; et al. et al. (2022). Journal of neurointerventional surgery 14
  ·  DOI: [10.1136/neurintsurg-2021-017504](https://doi.org/10.1136/neurintsurg-2021-017504)

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| Emax | `Q320` · not captured | 103 | % | not captured | review_gapfill (not captured) | Wanderer_2022:review |
| pD2 (-log10EC50) | `Q321` · not captured | 5.38 | -log10EC50 | not captured | review_gapfill (not captured) | Wanderer_2022:review |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


## Exposure-response model

`Levosimendan_Wanderer2022_PD_unknown` — sigmoid_emax, `response = E0 + Emax*frac`

| parameter | value (paper units) | SI |
|---|---|---|
| E0 | 0 | — |
| Emax | 103 % | 1.03 1 |
| EC50 | 5.38 -log10EC50 | — |
| gamma | 1 | — |

Closed-form check points (response, SI): `at_0` = 0, `at_EC50` = 0.515, `at_inf` = 1.03

Deviations:

- `defaulted_parameters` — E0, gamma
- `pd_binding_exposure_unit_unresolved` — '-log10EC50' — the x axis is in the paper's unit, not SI

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
- exposure unit not resolved to SI — the x axis is in the paper's unit


**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.267 (4/15 fields) | 11 |

<details><summary>11 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[Q320]` | 103 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 6.46 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 6.36 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 6.90 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | not captured | 6.86 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q321]` | 5.38 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q322]` | not captured | 6.75 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | not captured | 8 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | not captured | 8 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | not captured | 8 | only_one_extracted |
| `gpt-oss:120b` | `parameters[Q325]` | not captured | 8 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_levosimendan/Levosimendan_Wanderer2022_PD_unknown/Levosimendan_Wanderer2022_PD_unknown_modelica.zip" download>Levosimendan_Wanderer2022_PD_unknown_modelica.zip</a> <span class="pk-size">(2.3 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_levosimendan/Levosimendan_Wanderer2022_PD_unknown/Levosimendan_Wanderer2022_PD_unknown_matlab.zip" download>Levosimendan_Wanderer2022_PD_unknown_matlab.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_levosimendan/Levosimendan_Wanderer2022_PD_unknown/Levosimendan_Wanderer2022_PD_unknown_sbml.zip" download>Levosimendan_Wanderer2022_PD_unknown_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_levosimendan/Levosimendan_Wanderer2022_PD_unknown/Levosimendan_Wanderer2022_PD_unknown_cellml.zip" download>Levosimendan_Wanderer2022_PD_unknown_cellml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PD_SigmoidEmaxSweep.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/drug_levosimendan/Levosimendan_Wanderer2022_PD_unknown/Levosimendan_Wanderer2022_PD_unknown_params.json" metaurl="assets/fmu/PD_SigmoidEmaxSweep.vr.json" wasmurl="assets/fmu/PD_SigmoidEmaxSweep.js" controlsurl="drugs/drug_levosimendan/Levosimendan_Wanderer2022_PD_unknown/Levosimendan_Wanderer2022_PD_unknown_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PD_SigmoidEmaxSweep` · parameters `Levosimendan_Wanderer2022_PD_unknown_params.json` · controls `Levosimendan_Wanderer2022_PD_unknown_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>← back to [levosimendan](drugs/drug_levosimendan/)</sub>
