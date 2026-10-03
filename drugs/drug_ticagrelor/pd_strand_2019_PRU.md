<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;ticagrelor&quot;,&quot;href&quot;:&quot;drugs/drug_ticagrelor/&quot;},{&quot;label&quot;:&quot;\u00c5strand_2019 \u00b7 PD P2Y12 reaction units&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ticagrelor_Henrich2021_reference&quot;,&quot;label&quot;:&quot;Henrich_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ticagrelor/Ticagrelor_Henrich2021_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ticagrelor_strand2019_reference&quot;,&quot;label&quot;:&quot;\u00c5strand_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ticagrelor/Ticagrelor_strand2019_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_strand_2019_PRU&quot;,&quot;label&quot;:&quot;\u00c5strand_2019 \u00b7 PRU&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_ticagrelor/pd_strand_2019_PRU.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>
<div class="pk-tab-mark" data-tab="Information"></div>

# P2Y12 reaction units — PD  <span class="pk-badge pk-badge--orange">needs review</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## What this record describes

**As extracted:** Ticagrelor (concentrations from this paper's PK model) drives P2Y12 reaction units (in PRU): direct sigmoid Emax (Hill) effect.

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

> Ticagrelor plasma concentration (nmol l–1) drives inhibition of PRU via a direct sigmoid Emax model (Emax 98.5%, EC50 116 nmol l–1, γ 1.59); the paper does not state an indirect/turnover mechanism, and using the sum of ticagrelor plus AR-C124910XX as driver was not significantly better than ticagrelor alone.
>
> <sub>in the paper's terms — summarised by glm-5.3-flash from the paper's text; not checked by a person</sub>

- **paper:** `Åstrand_2019`
- **model family:** `sigmoid_emax`
- **driver:** `pk_record`
- **tier:** population
- **effect:** inhibition/proportional

## Citation
Åstrand M et al., Pharmacokinetic-pharmacodynamic modelli…, British journal of clinical… (2019)
  ·  DOI: [10.1111/bcp.13812](https://doi.org/10.1111/bcp.13812)

## Parameters
| role | label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|---|
| PK (driver) | CL/F (l h –1 ) — Estimate | `Q27` · not captured | 16.6 | l h –1 | not captured | exact (not captured) | bcp13812-tbl-0002:row1:col1 |
| PK (driver) | CL/F (l h –1 ) — BSV (%) | `Q27` · not captured | 24 | l h –1 | not captured | exact (not captured) | bcp13812-tbl-0002:row1:col3 |
| PK (driver) | Q/F (l h –1 ) — Estimate | `Q69` · not captured | 10.4 | l h –1 | not captured | exact (not captured) | bcp13812-tbl-0002:row2:col1 |
| PK (driver) | Q/F (l h –1 ) — BSV (%) | `Q69` · not captured | 95 | l h –1 | not captured | exact (not captured) | bcp13812-tbl-0002:row2:col3 |
| PK (driver) | Vc/F (l) — Estimate | `Q290` · not captured | 156 | l | not captured | exact (not captured) | bcp13812-tbl-0002:row3:col1 |
| PK (driver) | Vp/F (l) — Estimate | `Q82` · not captured | 55.8 | l | not captured | exact (not captured) | bcp13812-tbl-0002:row4:col1 |
| PK (driver) | KTR (h −1 ) — Estimate | `Q306` · not captured | 10.1 | h −1 | not captured | exact (not captured) | bcp13812-tbl-0002:row5:col1 |
| PK (driver) | KTR (h −1 ) — BSV (%) | `Q306` · not captured | 54 | h −1 | not captured | exact (not captured) | bcp13812-tbl-0002:row5:col3 |
| PK (driver) | Absorption lag time prior MI (h) — Estimate | `Q83` · not captured | 0.48 | h | not captured | llm_confirmed (not captured) | bcp13812-tbl-0002:row6:col1 |
| PK (driver) | F rel — Estimate | `Q87` · not captured | 1 | not captured | not captured | exact (not captured) | bcp13812-tbl-0002:row7:col1 |
| PK (driver) | F rel — BSV (%) | `Q87` · not captured | 32 | not captured | not captured | exact (not captured) | bcp13812-tbl-0002:row7:col3 |
| variability | Proportional residual error ticagrelor (%) — Estimate | `Q316` · not captured | 32 | not captured | not captured | llm_confirmed (not captured) | bcp13812-tbl-0002:row8:col1 |
| PK (driver) | CL m /F (l h –1 ) — Estimate | `Q351` · not captured | 10.2 | l h –1 | not captured | space_fold (not captured) | bcp13812-tbl-0002:row9:col1 |
| PK (driver) | CL m /F (l h –1 ) — BSV (%) | `Q351` · not captured | 28 | l h –1 | not captured | space_fold (not captured) | bcp13812-tbl-0002:row9:col3 |
| PK (driver) | F m — Estimate | `Q45` · not captured | 0.22 | not captured | not captured | space_fold (not captured) | bcp13812-tbl-0002:row10:col1 |
| PK (driver) | Q m /F (l h –1 ) — Estimate | `Q69` · not captured | 4.41 | l h –1 | not captured | llm (not captured) | bcp13812-tbl-0002:row11:col1 |
| PK (driver) | Vc m /F (l) — Estimate | `Q290` · not captured | 7.04 | l | not captured | llm_corrected (not captured) | bcp13812-tbl-0002:row12:col1 |
| PK (driver) | Vp m /F (l) — Estimate | `Q82` · not captured | 42.3 | l | not captured | llm_corrected (not captured) | bcp13812-tbl-0002:row13:col1 |
| PK (driver) | Vp m /F (l) — BSV (%) | `Q82` · not captured | 37 | l | not captured | llm_corrected (not captured) | bcp13812-tbl-0002:row13:col3 |
| variability | Proportional residual error metabolite (%) — Estimate | `Q316` · not captured | 26 | not captured | not captured | llm_confirmed (not captured) | bcp13812-tbl-0002:row14:col1 |
| PD (effect) | EC 50 (nmol l –1 ) — Estimate | `Q321` · not captured | 116 | nmol l –1 | not captured | space_fold (not captured) | bcp13812-tbl-0002:row17:col1 |
| PD (effect) | EC 50 (nmol l –1 ) — BSV (%) | `Q321` · not captured | 66 | nmol l –1 | not captured | space_fold (not captured) | bcp13812-tbl-0002:row17:col3 |
| PD (effect) | PRU baseline ‐EC 50 correlation — BSV (%) | `Q321` · not captured | 0.33 | nmol l–1 | not captured | llm_corrected (not captured) | bcp13812-tbl-0002:row18:col3 |
| PD (effect) | E max (%) — Estimate | `Q320` · not captured | 98.5 | not captured | not captured | space_fold (not captured) | bcp13812-tbl-0002:row19:col1 |
| PD (effect) | Steepness of exposure‐response (γ) — Estimate | `Q325` · not captured | 1.59 | not captured | not captured | llm_corrected (not captured) | bcp13812-tbl-0002:row20:col1 |
| variability | Additive residual error PRU (at PRU = 300) — Estimate | `Q317` · not captured | 47.6 | at PRU = 300 | not captured | llm_confirmed (not captured) | bcp13812-tbl-0002:row21:col1 |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>


## Exposure-response model

`Ticagrelor_strand2019_PD_pru` — sigmoid_emax, `response = E0 + Emax*frac`

| parameter | value (paper units) | SI |
|---|---|---|
| E0 | 0 | — |
| Emax | -98.5 PRU | — |
| EC50 | 116 nmol l –1 | 0.000116 mol/m3 |
| gamma | 1.59 | — |

Closed-form check points (response, SI): `at_0` = 0, `at_EC50` = -49.25, `at_inf` = -98.5

Deviations:

- `defaulted_parameters` — E0
- `pd_binding_inhibition_sign` — effect_direction=inhibition with a positive Emax (Q320) — sign flipped

## Review

Verdict <span class="pk-badge pk-badge--orange">needs review</span> · route to `scholar`

| check | status | note |
|---|---|---|
| `T0_driver` | pass | driver is the drug, a synonym or one of its metabolites (or unnamed) |
| `T1_closed_form` | pass | engineer's check points reproduced from the bound parameters |
| `T1b_fmu` | pass | shared PD_SigmoidEmaxSweep FMU reproduces the reference points (worst 0.00%) |
| `T2_direction` | pass | curve direction matches effect_direction |
| `T3_plausibility` | pass | EC50, gamma, Imax and baseline in range |
| `T4_defaults` | fail | a core parameter took a library default: E0 |

Advisory:

- defaulted: E0 — a row the paper has and the record lacks


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
</tbody></table>
<p>No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

<dbs-fmusim paramsurl="drugs/drug_ticagrelor/Ticagrelor_strand2019_PD_pru/Ticagrelor_strand2019_PD_pru_params.json" metaurl="assets/fmu/PD_SigmoidEmaxSweep.vr.json" wasmurl="assets/fmu/PD_SigmoidEmaxSweep.js" controlsurl="drugs/drug_ticagrelor/Ticagrelor_strand2019_PD_pru/Ticagrelor_strand2019_PD_pru_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PD_SigmoidEmaxSweep` · parameters `Ticagrelor_strand2019_PD_pru_params.json` · controls `Ticagrelor_strand2019_PD_pru_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>← back to [ticagrelor](drugs/drug_ticagrelor/)</sub>
