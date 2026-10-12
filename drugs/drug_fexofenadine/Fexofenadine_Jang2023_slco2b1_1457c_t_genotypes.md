<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R06A&quot;,&quot;href&quot;:&quot;atc/R06A.md&quot;},{&quot;label&quot;:&quot;fexofenadine&quot;,&quot;href&quot;:&quot;drugs/drug_fexofenadine/&quot;},{&quot;label&quot;:&quot;Jang_2023 \u00b7 slco2b1_1457c_t_genotypes&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fexofenadine_Jang2023_mean_standard_error&quot;,&quot;label&quot;:&quot;Jang_2023_mean_standard_error&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fexofenadine/Fexofenadine_Jang2023_mean_standard_error.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fexofenadine_Jang2023_slco1b1_521t_c_genotypes&quot;,&quot;label&quot;:&quot;Jang_2023_slco1b1_521t_c_genotypes&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fexofenadine/Fexofenadine_Jang2023_slco1b1_521t_c_genotypes.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fexofenadine_Jang2023_slco2b1_1457c_t_genotypes&quot;,&quot;label&quot;:&quot;Jang_2023_slco2b1_1457c_t_genotypes&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fexofenadine/Fexofenadine_Jang2023_slco2b1_1457c_t_genotypes.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Fexofenadine_Gaspar2025_reference&quot;,&quot;label&quot;:&quot;Gaspar_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fexofenadine/Fexofenadine_Gaspar2025_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fexofenadine — `Fexofenadine_Jang2023_slco2b1_1457c_t_genotypes`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.875). The first reading is what the record holds.">cross-check: partial</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

### Reviewer guidance

**Fexofenadine was held back because modeled Cmax (0.000185) and tmax (2.98) miss the paper, with ka defaulted rather than estimated.**

The model does not reproduce the paper's time of the peak (tmax) (paper 2, model 2.98). Simulated as the paper dosed it, the model's time of the peak (tmax) differs from the value the paper reports by more than the tolerance. The model does not reproduce the paper's peak concentration (Cmax) (paper 0.00045, model 0.000185), or its terminal half-life (paper 2.45, model 2.99); simulated as the paper dosed it, both differ from the reported values by more than the tolerance. Ka use library defaults, not estimates from this paper; these values affect the simulated profile but are not supported by this paper, and Tlag was also defaulted; the model additionally assumed F=1 and Fm=1 with no molar correction and first-order depot input for extravascular dosing, while a reported unit could not be converted to SI. Extracted — fexofenadine: t1/2z 2.92 h, tmax 1.72 h, Cmax 930 ng/mL, AUCt 5.11e+03 h·ng/mL, AUC∞ 5.62e+03 h·ng/mL, V/F 167 L, CL/F 38.9 L/h, MRT 5.13 h, … (+2).

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of auc108-120: this record has none, the second reading 5615.91; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by gpt-6-luna</sub>

## Citation
Jang JH et al., Quantitative assessment of the relevanc…, Journal of pharmaceutical a… (2023)
  ·  DOI: [10.1016/j.jpha.2023.04.001](https://doi.org/10.1016/j.jpha.2023.04.001)

## Model component
<dbs-pgx drug="fexofenadine" model-id="Fexofenadine_Jang2023_slco2b1_1457c_t_genotypes" status="needs_review" stale="false" population="healthy adults" measured-compound="fexofenadine" parameterization="apparent" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 10 extracted.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| t1/2 (h) | `Q57` · t1/2z | 2.92 | h | 10512.0 | [h] | not captured | exact (1.0) | Jang_2023_table_3:row1:col1, Jang_2023_table_3:row1:col2, Jang_2023_table_4:row1:col1, Jang_2023_table_4:row1:col2 | — | not captured |
| tmax (h) | `Q56` · tmax | 1.72 | h | 6192.0 | [h] | not captured | exact (1.0) | Jang_2023_table_3:row2:col1, Jang_2023_table_3:row2:col2, Jang_2023_table_4:row2:col1, Jang_2023_table_4:row2:col2 | — | not captured |
| cmax (ng/mL) | `Q32` · Cmax | 930.28 | ng/mL | not captured | [ng] / [ml] | not captured | exact (1.0) | Jang_2023_table_3:row3:col1, Jang_2023_table_3:row3:col2, Jang_2023_table_4:row3:col1, Jang_2023_table_4:row3:col2 | — | not captured |
| AUC0−t (h·ng/mL) | `Q19` · AUCt | 5110.29 | h·ng/mL | not captured | [[h] · [ng]] / [ml] | not captured | exact (1.0) | Jang_2023_table_3:row4:col1, Jang_2023_table_3:row4:col2 | — | not captured |
| AUC0−∞ (h·ng/mL) | `Q17` · AUC∞ | 5617.20 | h·ng/mL | not captured | [[h] · [ng]] / [ml] | not captured | exact (1.0) | Jang_2023_table_3:row5:col1, Jang_2023_table_3:row5:col2 | — | not captured |
| V/F (L) | `Q76` · V/F | 166.90 | L | 0.16690000000000002 | [l] | not captured | exact (1.0) | Jang_2023_table_3:row6:col1, Jang_2023_table_3:row6:col2, Jang_2023_table_4:row6:col1, Jang_2023_table_4:row6:col2 | — | not captured |
| CL/F (L/h) | `Q27` · CL/F | 38.89 | L/h | 1.0802777777777778e-05 | [l] / [h] | not captured | exact (1.0) | Jang_2023_table_3:row7:col1, Jang_2023_table_3:row7:col2, Jang_2023_table_4:row7:col1, Jang_2023_table_4:row7:col2 | — | not captured |
| MRT (h) | `Q53` · MRT | 5.13 | h | 18468.0 | [h] | not captured | exact (1.0) | Jang_2023_table_3:row8:col1, Jang_2023_table_3:row8:col2, Jang_2023_table_4:row8:col1, Jang_2023_table_4:row8:col2 | — | not captured |
| R value a | `Q900` · equation variable | 1.06 | not captured | not captured | not captured | not captured | llm (0.6) | Jang_2023_table_3:row9:col1, Jang_2023_table_3:row9:col2 | — | not captured |
| cSS,mean (ng/mL) a | `Q34` · Css | 468.10 | ng/mL | not captured | ng/mL | not captured | llm_confirmed (0.6) | Jang_2023_table_4:row9:col1, Jang_2023_table_4:row9:col2 | — | not captured |
| AUC ratio b | `Q21` · AUC ratio | 1.08 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | Jang_2023_table_4:row10:col1, Jang_2023_table_4:row10:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['ka', 'Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `invented_absorption`: ka defaulted — not reported in source
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing

**Interpretation flags:**
- dropped duplicate Q19 ('AUC108−120 (h·ng/mL)', value '5615.91') — already have one for this compound
- dropped duplicate Q17 ('AUC108−∞ (h·ng/mL)', value '6038.29') — already have one for this compound
- implicit units: 'cSS,mean (ng/mL) a' → ng/mL (from the paper text: 'The parameter is printed as “cSS,mean (ng/mL)”; the table explicitly gives the unit ng/mL.')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=fexofenadine
- population split: 'slco2b1 1457c &gt; t genotypes' subgroup of Jang_2023 (paper reports 3 populations: mean ± standard error, slco1b1 521t &gt; c genotypes, slco2b1 1457c &gt; t genotypes)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- companion parameter table 1 transcribed (27 record(s))
- companion parameter table 2 transcribed (30 record(s))
- companion parameter table 3 transcribed (18 record(s))
- companion parameter table 4 transcribed (20 record(s))
- LLM selected parameter table(s) 1, 2, 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
first reading `gpt-6-luna` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | partly confirmed | 0.875 (14/16 fields) | 2 |

<details><summary>2 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[auc108-120]` | not captured | 5615.91 | only_one_extracted |
| `qwen3.8-27b` | `parameters[r value a]` | 1.06 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 10 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | pass | 2.45 | 2.975 | 1.2143 | 0.25 | reported t½β |
| C5_dimension_Q17 | pass | [time] * [mass] / [length] ** 3 | not captured | not captured | not captured | ['Jang_2023_table_3:row5:col1', 'Jang_2023_table_3:row5:col2'] |
| C5_dimension_Q19 | pass | [time] * [mass] / [length] ** 3 | not captured | not captured | not captured | ['Jang_2023_table_3:row4:col1', 'Jang_2023_table_3:row4:col2'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Jang_2023_table_3:row7:col1', 'Jang_2023_table_3:row7:col2', 'Jang_2023_table_4:row7:col1', 'Jang_2023_table_4:row7:col2'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Jang_2023_table_3:row3:col1', 'Jang_2023_table_3:row3:col2', 'Jang_2023_table_4:row3:col1', 'Jang_2023_table_4:row3:col2'] |
| C5_dimension_Q34 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Jang_2023_table_4:row9:col1', 'Jang_2023_table_4:row9:col2'] |
| C5_dimension_Q53 | pass | [time] | not captured | not captured | not captured | ['Jang_2023_table_3:row8:col1', 'Jang_2023_table_3:row8:col2', 'Jang_2023_table_4:row8:col1', 'Jang_2023_table_4:row8:col2'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Jang_2023_table_3:row2:col1', 'Jang_2023_table_3:row2:col2', 'Jang_2023_table_4:row2:col1', 'Jang_2023_table_4:row2:col2'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Jang_2023_table_3:row1:col1', 'Jang_2023_table_3:row1:col2', 'Jang_2023_table_4:row1:col1', 'Jang_2023_table_4:row1:col2'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Jang_2023_table_3:row6:col1', 'Jang_2023_table_3:row6:col2', 'Jang_2023_table_4:row6:col1', 'Jang_2023_table_4:row6:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 38.9 L/h | not captured | not captured | ['Jang_2023_table_3:row7:col1', 'Jang_2023_table_3:row7:col2', 'Jang_2023_table_4:row7:col1', 'Jang_2023_table_4:row7:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 167 L | not captured | not captured | ['Jang_2023_table_3:row6:col1', 'Jang_2023_table_3:row6:col2', 'Jang_2023_table_4:row6:col1', 'Jang_2023_table_4:row6:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=fexofenadine) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 2 scholar param(s) emitted or defaulted | 2 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable; invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | fail | 0.00045017 | 0.0001846012453786737 | 0.4101 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.00056164 | 0.0001846012453786737 | 0.3287 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.00077089 | 0.0001846012453786737 | 0.2395 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.00047017 | 0.0001846012453786737 | 0.3926 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.00059383 | 0.0001846012453786737 | 0.3109 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.00084632 | 0.0001846012453786737 | 0.2181 | ng/mL→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 0.0009302799999999999 | 0.0001846012453786737 | 0.1984 | ng/mL→SI vs simulated kg/m3 |
| T1_t_half_terminal | reference | pass | 2.45 | 2.993891868626352 | 1.222 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 2.52 | 2.993891868626352 | 1.1881 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 2.83 | 2.993891868626352 | 1.0579 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 1.97 | 2.993891868626352 | 1.5197 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 1.84 | 2.993891868626352 | 1.6271 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 2.09 | 2.993891868626352 | 1.4325 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 2.92 | 2.993891868626352 | 1.0253 | h→SI vs simulated h |
| T1_t_half_terminal | reference | pass | 3.38 | 2.993891868626352 | 0.8858 | h→SI vs simulated h |
| T1_tmax | reference | fail | 2.0 | 2.977417170802727 | 1.4887 | h→SI vs simulated h |
| T1_tmax | reference | fail | 2.0 | 2.977417170802727 | 1.4887 | h→SI vs simulated h |
| T1_tmax | reference | pass | 2.5 | 2.977417170802727 | 1.191 | h→SI vs simulated h |
| T1_tmax | reference | fail | 1.84 | 2.977417170802727 | 1.6182 | h→SI vs simulated h |
| T1_tmax | reference | fail | 1.93 | 2.977417170802727 | 1.5427 | h→SI vs simulated h |
| T1_tmax | reference | pass | 2.39 | 2.977417170802727 | 1.2458 | h→SI vs simulated h |
| T1_tmax | reference | fail | 1.72 | 2.977417170802727 | 1.7311 | h→SI vs simulated h |
| T1_tmax | reference | fail | 1.83 | 2.977417170802727 | 1.627 | h→SI vs simulated h |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_fexofenadine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Jang_2023` / `Jang_2023::slco2b1_1457c_t_genotypes`)
- model: `../../../knowledgebase/drugs/drug_fexofenadine/models/modelica/Fexofenadine_Jang2023_slco2b1_1457c_t_genotypes.mo`
- deviation: `../../../knowledgebase/drugs/drug_fexofenadine/models/modelica/Fexofenadine_Jang2023_slco2b1_1457c_t_genotypes.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_fexofenadine/models/modelica/Fexofenadine_Jang2023_slco2b1_1457c_t_genotypes.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_fexofenadine/Fexofenadine_Jang2023_slco2b1_1457c_t_genotypes/Fexofenadine_Jang2023_slco2b1_1457c_t_genotypes_modelica.zip" download>Fexofenadine_Jang2023_slco2b1_1457c_t_genotypes_modelica.zip</a> <span class="pk-size">(4.9 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_fexofenadine/Fexofenadine_Jang2023_slco2b1_1457c_t_genotypes/Fexofenadine_Jang2023_slco2b1_1457c_t_genotypes_fmi.zip" download>Fexofenadine_Jang2023_slco2b1_1457c_t_genotypes_fmi.zip</a> <span class="pk-size">(4.4 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_fexofenadine/Fexofenadine_Jang2023_slco2b1_1457c_t_genotypes/Fexofenadine_Jang2023_slco2b1_1457c_t_genotypes_matlab.zip" download>Fexofenadine_Jang2023_slco2b1_1457c_t_genotypes_matlab.zip</a> <span class="pk-size">(3.6 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_fexofenadine/Fexofenadine_Jang2023_slco2b1_1457c_t_genotypes/Fexofenadine_Jang2023_slco2b1_1457c_t_genotypes_matlab_simbio.zip" download>Fexofenadine_Jang2023_slco2b1_1457c_t_genotypes_matlab_simbio.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_fexofenadine/Fexofenadine_Jang2023_slco2b1_1457c_t_genotypes/Fexofenadine_Jang2023_slco2b1_1457c_t_genotypes_sbml.zip" download>Fexofenadine_Jang2023_slco2b1_1457c_t_genotypes_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_fexofenadine/Fexofenadine_Jang2023_slco2b1_1457c_t_genotypes/Fexofenadine_Jang2023_slco2b1_1457c_t_genotypes_cellml.zip" download>Fexofenadine_Jang2023_slco2b1_1457c_t_genotypes_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_1C_enteral.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_fexofenadine/Fexofenadine_Jang2023_slco2b1_1457c_t_genotypes/Fexofenadine_Jang2023_slco2b1_1457c_t_genotypes.svg" alt="Fexofenadine_Jang2023_slco2b1_1457c_t_genotypes diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v26.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 60 mg, single dose, first-order absorption (ka 0.5 /h, F 1). Doses in the paper: 60, 180 mg.

<dbs-fmusim paramsurl="drugs/drug_fexofenadine/Fexofenadine_Jang2023_slco2b1_1457c_t_genotypes/Fexofenadine_Jang2023_slco2b1_1457c_t_genotypes_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_fexofenadine/Fexofenadine_Jang2023_slco2b1_1457c_t_genotypes/Fexofenadine_Jang2023_slco2b1_1457c_t_genotypes_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_1C_enteral` · parameters `Fexofenadine_Jang2023_slco2b1_1457c_t_genotypes_params.json` · controls `Fexofenadine_Jang2023_slco2b1_1457c_t_genotypes_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 23:32 UTC</sub>
