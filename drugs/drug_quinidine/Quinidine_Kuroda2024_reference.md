<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;quinidine&quot;,&quot;href&quot;:&quot;drugs/drug_quinidine/&quot;},{&quot;label&quot;:&quot;Kuroda_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Quinidine_Kuroda2024_reference&quot;,&quot;label&quot;:&quot;Kuroda_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_quinidine/Quinidine_Kuroda2024_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# quinidine — `Quinidine_Kuroda2024_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">horse</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

> **Species: horse.** This record comes from an animal study (horse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

### Reviewer guidance

**V1, V2, V3, CL, Q, kabs, t1/2α, t1/2β, t1/2γ, t1/2ka , Vss and MRT have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (Vss and MRT), so that value has no SI equivalent. Extracted — quinidine: V1 0.63, V2 0.59, V3 3.68, CL 0.49, Q 2.87, kabs 1, Fab 36.4, t1/2α 0.06, … (+5).

Independently confirmed by `gpt-oss:120b`.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-10-05 09:31:07.503281+00:00) predates the upstream re-run (2026-10-06 04:23:24.109307+00:00). Current validate status: `extracted`.

> **Dose compound ≠ measured compound:** dosed `quinidine sulfate dihydrate`, measured `quinidine`.

## Citation
Kuroda T et al., Rational quinidine dosage regimen for a…, Frontiers in veterinary sci… (2024)
  ·  DOI: [10.3389/fvets.2024.1454342](https://doi.org/10.3389/fvets.2024.1454342)

## Model component
<dbs-pgx drug="quinidine" model-id="Quinidine_Kuroda2024_reference" status="extracted" stale="true" population="Thoroughbred racehorses" measured-compound="quinidine" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 13 extracted.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| V1 | `Q63` · V1 | 0.63 | L | 0.00063 | L | 12.4 | exact (1.0) | tab1:row1:col2, tab1:row1:col3, tab1:row1:col4, tab1:row1:col5 | — | 40.5 (None% RSE) |
| V2 | `Q64` · V2 | 0.59 | L | 0.00059 | L | 12.1 | exact (1.0) | tab1:row2:col2, tab1:row2:col3, tab1:row2:col4, tab1:row2:col5 | — | 37.8 (None% RSE) |
| V3 | `Q77` · V3 | 3.68 | L | 0.00368 | L | 7.0 | exact (1.0) | tab1:row3:col2, tab1:row3:col3, tab1:row3:col4, tab1:row3:col5 | — | 28.5 (None% RSE) |
| CL | `Q22` · CL | 0.49 | L/h | 1.361111111111111e-07 | L/h | 6.4 | exact (1.0) | tab1:row4:col2, tab1:row4:col3, tab1:row4:col4, tab1:row4:col5 | — | 25.6 (None% RSE) |
| CL2 | `Q30` · Q | 2.87 | L/h | 7.972222222222223e-07 | L/h | 15.2 | special_case (0.95) | tab1:row5:col2, tab1:row5:col3, tab1:row5:col4, tab1:row5:col5 | — | 74.9 (None% RSE) |
| Kabs | `Q49` · kabs | 1.00 | 1/h | 0.0002777777777777778 | 1/h | 24.5 | exact (1.0) | tab1:row7:col1, tab1:row7:col2, tab1:row7:col3, tab1:row7:col4, tab1:row7:col5 | — | 94.3 (None% RSE) |
| F | `Q40` · Fab | 36.4 | not captured | not captured | not captured | 2.9 | exact (1.0) | tab1:row8:col2, tab1:row8:col3, tab1:row8:col4, tab1:row8:col5 | — | 33.1 (None% RSE) |
| Half_life_alpha | `Q59` · t1/2α | 0.06 | h | 216.0 | h | 10.2 | llm (0.6) | tab1:row14:col2, tab1:row14:col3, tab1:row14:col4, tab1:row14:col5 | — | not captured |
| Half_life_Beta | `Q60` · t1/2β | 0.31 | h | 1116.0 | h | 11.9 | llm (0.6) | tab1:row15:col2, tab1:row15:col3, tab1:row15:col4, tab1:row15:col5 | — | not captured |
| Half_life_Gamma | `Q89` · t1/2γ | 7.76 | h | 27936.0 | h | 8.8 | llm (0.6) | tab1:row16:col2, tab1:row16:col3, tab1:row16:col4, tab1:row16:col5 | — | not captured |
| Absorption_Half_life | `Q95` · t1/2ka | 0.69 | h | 2484.0 | h | 23.1 | llm (0.6) | tab1:row17:col2, tab1:row17:col3, tab1:row17:col4, tab1:row17:col5 | — | not captured |
| Vss (steady-state volume of distribution) | `Q65` · Vss | 4.90 | L | 0.004900000000000001 | L | 5.1 | exact (1.0) | tab1:row18:col2, tab1:row18:col3, tab1:row18:col4, tab1:row18:col5 | — | not captured |
| MRT (Mean residence time) | `Q53` · MRT | 10.12 | h | 36432.0 | h | 9.3 | exact (1.0) | tab1:row19:col2, tab1:row19:col3, tab1:row19:col4, tab1:row19:col5 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']

**Interpretation flags:**
- table section iiv: 'V1' routed out of structural estimates ('BSV%')
- table section iiv: 'V2' routed out of structural estimates ('BSV%')
- table section iiv: 'V3' routed out of structural estimates ('BSV%')
- table section iiv: 'CL' routed out of structural estimates ('BSV%')
- table section iiv: 'CL2' routed out of structural estimates ('BSV%')
- table section iiv: 'CL3' routed out of structural estimates ('BSV%')
- table section iiv: 'Kabs' routed out of structural estimates ('BSV%')
- table section iiv: 'F' routed out of structural estimates ('BSV%')
- column 'units' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'CL3' — extend the ontology if this is a real PK parameter (source ['tab1:row6:col2', 'tab1:row6:col3', 'tab1:row6:col4', 'tab1:row6:col5'])
- unit_dimension_unknown: 'steady-state volume of distribution' (Vss)
- unit_dimension_unknown: 'Mean residence time' (MRT)
- implicit units: 'V1' → L (from the popPK convention: 'V1 is a volume of distribution. In population PK, volumes are typically reported in liters (L). The value 0.63 is consis')
- implicit units: 'V2' → L (from the popPK convention: 'V2 is a volume of distribution. Standard unit for volume parameters in PK is liters (L).')
- implicit units: 'V3' → L (from the popPK convention: 'V3 is a volume of distribution. Standard unit for volume parameters in PK is liters (L).')
- implicit units: 'CL' → L/h (from the popPK convention: 'CL is plasma clearance. Standard unit for clearance in population PK is liters per hour (L/h). The value 0.49 is consist')
- implicit units: 'CL2' → L/h (from the popPK convention: 'CL2 is an intercompartmental clearance. Standard unit for clearance parameters is liters per hour (L/h).')
- implicit units: 'Kabs' → 1/h (from the popPK convention: 'Kabs is an absorption rate constant. Standard unit for first-order rate constants is inverse hours (1/h).')
- implicit units: 'Half_life_alpha' → h (from the popPK convention: 'Half_life_alpha is a half-life. Standard unit for time parameters like half-life is hours (h).')
- implicit units: 'Half_life_Beta' → h (from the popPK convention: 'Half_life_Beta is a half-life. Standard unit for time parameters like half-life is hours (h).')
- implicit units: 'Half_life_Gamma' → h (from the popPK convention: 'Half_life_Gamma is a half-life. Standard unit for time parameters like half-life is hours (h).')
- implicit units: 'Absorption_Half_life' → h (from the popPK convention: 'Absorption_Half_life is a half-life. Standard unit for time parameters like half-life is hours (h).')
- implicit units: 'Vss (steady-state volume of distribution)' → L (from the popPK convention: 'Vss is a volume of distribution. Standard unit for volume parameters in PK is liters (L).')
- implicit units: 'MRT (Mean residence time)' → h (from the popPK convention: 'MRT is a time parameter (Mean Residence Time). Standard unit is hours (h).')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=quinidine
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | confirmed | 1.0 (31/31 fields) | none |

_Every reader agrees on every compared field of this record._

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 13 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab1:row4:col2', 'tab1:row4:col3', 'tab1:row4:col4', 'tab1:row4:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab1:row5:col2', 'tab1:row5:col3', 'tab1:row5:col4', 'tab1:row5:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['tab1:row7:col1', 'tab1:row7:col2', 'tab1:row7:col3', 'tab1:row7:col4', 'tab1:row7:col5'] |
| C5_dimension_Q53 | pass | [time] | not captured | not captured | not captured | ['tab1:row19:col2', 'tab1:row19:col3', 'tab1:row19:col4', 'tab1:row19:col5'] |
| C5_dimension_Q59 | pass | [time] | not captured | not captured | not captured | ['tab1:row14:col2', 'tab1:row14:col3', 'tab1:row14:col4', 'tab1:row14:col5'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['tab1:row15:col2', 'tab1:row15:col3', 'tab1:row15:col4', 'tab1:row15:col5'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab1:row1:col2', 'tab1:row1:col3', 'tab1:row1:col4', 'tab1:row1:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab1:row2:col2', 'tab1:row2:col3', 'tab1:row2:col4', 'tab1:row2:col5'] |
| C5_dimension_Q65 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab1:row18:col2', 'tab1:row18:col3', 'tab1:row18:col4', 'tab1:row18:col5'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab1:row3:col2', 'tab1:row3:col3', 'tab1:row3:col4', 'tab1:row3:col5'] |
| C5_dimension_Q89 | pass | [time] | not captured | not captured | not captured | ['tab1:row16:col2', 'tab1:row16:col3', 'tab1:row16:col4', 'tab1:row16:col5'] |
| C5_dimension_Q95 | pass | [time] | not captured | not captured | not captured | ['tab1:row17:col2', 'tab1:row17:col3', 'tab1:row17:col4', 'tab1:row17:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.49 | not captured | not captured | ['tab1:row4:col2', 'tab1:row4:col3', 'tab1:row4:col4', 'tab1:row4:col5'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.49 L/h | not captured | not captured | ['tab1:row4:col2', 'tab1:row4:col3', 'tab1:row4:col4', 'tab1:row4:col5'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 0.63 L | not captured | not captured | ['tab1:row1:col2', 'tab1:row1:col3', 'tab1:row1:col4', 'tab1:row1:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 0.59 L | not captured | not captured | ['tab1:row2:col2', 'tab1:row2:col3', 'tab1:row2:col4', 'tab1:row2:col5'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 4.9 L | not captured | not captured | ['tab1:row18:col2', 'tab1:row18:col3', 'tab1:row18:col4', 'tab1:row18:col5'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_quinidine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kuroda_2024` / `Kuroda_2024::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_quinidine/Quinidine_Kuroda2024_reference/Quinidine_Kuroda2024_reference_modelica.zip" download>Quinidine_Kuroda2024_reference_modelica.zip</a> <span class="pk-size">(5.0 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_quinidine/Quinidine_Kuroda2024_reference/Quinidine_Kuroda2024_reference_fmi.zip" download>Quinidine_Kuroda2024_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_quinidine/Quinidine_Kuroda2024_reference/Quinidine_Kuroda2024_reference_matlab.zip" download>Quinidine_Kuroda2024_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_quinidine/Quinidine_Kuroda2024_reference/Quinidine_Kuroda2024_reference_matlab_simbio.zip" download>Quinidine_Kuroda2024_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_quinidine/Quinidine_Kuroda2024_reference/Quinidine_Kuroda2024_reference_sbml.zip" download>Quinidine_Kuroda2024_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_quinidine/Quinidine_Kuroda2024_reference/Quinidine_Kuroda2024_reference_cellml.zip" download>Quinidine_Kuroda2024_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_2C_enteral.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_quinidine/Quinidine_Kuroda2024_reference/Quinidine_Kuroda2024_reference.svg" alt="Quinidine_Kuroda2024_reference diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v26.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 350 mg, single dose, first-order absorption (ka 1 /h, F 36.4). Doses in the paper: 350, 1400 mg.

<dbs-fmusim paramsurl="drugs/drug_quinidine/Quinidine_Kuroda2024_reference/Quinidine_Kuroda2024_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_quinidine/Quinidine_Kuroda2024_reference/Quinidine_Kuroda2024_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_2C_enteral` · parameters `Quinidine_Kuroda2024_reference_params.json` · controls `Quinidine_Kuroda2024_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 04:23 UTC</sub>
