<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J04A&quot;,&quot;href&quot;:&quot;atc/J04A.md&quot;},{&quot;label&quot;:&quot;rifapentine&quot;,&quot;href&quot;:&quot;drugs/drug_rifapentine/&quot;},{&quot;label&quot;:&quot;Savic_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Rifapentine_Hibma2020_reference&quot;,&quot;label&quot;:&quot;Hibma_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rifapentine/Rifapentine_Hibma2020_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# rifapentine — `Rifapentine_Savic2017_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.12). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Apparent metabolite clearance and volume parameters double-correct for bioavailability, causing incoherence for rifapentine.**

The record lists apparent metabolite clearance (1.91 L/h) and volume (8.83 L), which already account for the fraction metabolized. Including these alongside parent drug apparent parameters like CL/F (1.86 L/h) leads to double correction errors. Additionally, the 'fraction' unit for the metabolite fraction parameter was not converted to standard SI units. Extracted — rifapentine: CL/F 1.86 L/h, V/F 12.8 L, kabs 0.07 1/h, CLm/F 1.91 L/h, Vm/F 8.83 L, Fab 1 reference, Frel 0.74, fm 1.34 fraction.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has rifapentine, the second reading unknown; it also differs on 21 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Savic RM et al., Defining the optimal dose of rifapentin…, Clinical pharmacology and t… (2017)
  ·  DOI: [10.1002/cpt.634](https://doi.org/10.1002/cpt.634)

<div class="pk-model-meta" hidden drug="rifapentine" model-id="Rifapentine_Savic2017_reference" status="rejected" stale="false" population="adults with pulmonary tuberculosis" measured-compound="rifapentine" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 8 extracted, plus 2 covariate effects.

**Parameterization:** CL/F, CLm/F, V/F, Vm/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/h) | `Q27` · CL/F | 1.86 | L/h | 5.166666666666667e-07 | [l] / [h] | 40 | exact (1.0) | cpt634-tbl-0002:row1:col1, cpt634-tbl-0002:row1:col2 | — | not captured |
| V/F (L) | `Q76` · V/F | 12.77 | L | 0.01277 | [l] | 5 | exact (1.0) | cpt634-tbl-0002:row2:col1 | — | not captured |
| ka (h‐1) | `Q49` · kabs | 0.07 | 1/h | 1.9444444444444445e-05 | 1/h | 3 | exact (1.0) | cpt634-tbl-0002:row3:col1 | — | not captured |
| CLm/Fm (L/h) | `Q351` · CLm/F | 1.91 | L/h | 5.305555555555555e-07 | [l] / [h] | 44 | exact (1.0) | cpt634-tbl-0002:row4:col1, cpt634-tbl-0002:row4:col2 | — | not captured |
| Vm/Fm (L) | `Q367` · Vm/F | 8.83 | L | 0.008830000000000001 | [l] | 12 | llm_confirmed (0.6) | cpt634-tbl-0002:row5:col1 | — | not captured |
| Bioavailability of 450‐mg dose with high fat food (reference) | `Q40` · Fab | 1 | reference | not captured | not captured | 36 | llm_confirmed (0.6) | cpt634-tbl-0002:row6:col1, cpt634-tbl-0002:row6:col2 | — | not captured |
| Bioavailability of 1200‐mg dose (fraction) relative to reference dose | `Q87` · Frel | 0.74 | not captured | not captured | not captured | 8 | llm_corrected (0.6) | cpt634-tbl-0002:row9:col1 | — | not captured |
| age_effect_on_cl_yearly_decrease_from_the_median_age_31_y_a | `Q900` · age_effect_on_cl_yearly_decrease_from_the_median_age_31_y_a | -0.00379 | not captured | not captured | not captured | 50 | not captured (not captured) | cpt634-tbl-0002:row18:col1 | — | not captured |
| Dose effect (&gt; 600 mg) on fraction metabolized, Fm (fraction) | `Q45` · fm | 1.34 | fraction | not captured | [fraction] | 4 | llm_confirmed (0.6) | cpt634-tbl-0002:row20:col1 | — | not captured |
| theta_q22_sex | `Q900` · theta_q22_sex | 0.81 | not captured | not captured | not captured | 36 | not captured (not captured) | cpt634-tbl-0002:row19:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'h‐1' (kabs)
- covariate level 'Age effect on CL (yearly decrease from the median age 31 y)a' → Q900:age_effect_on_cl_yearly_decrease_from_the_median_age_31_y_a = -0.00379 (linear_fractional on Q27)
- covariate effect for Q22 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'ka (h‐1)' → 1/h (from the paper text: "The parameter label in the input 'ka (h‐1)' and the description 'Absorption rate constant' indicate the unit is h^-1, wh")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=rifapentine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8-27b` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.12 (3/25 fields) | 22 |

<details><summary>22 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[age_effect_on_cl_yearly_decrease_from_the_median_age_31_y_a]` | -0.00379 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[bioavailability of 1200‐mg dose (fraction) relative to reference dose]` | 0.74 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[bioavailability of 450‐mg dose with high fat food]` | 1 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[bioavailability of 450‐mg dose with high fat food]` | not captured | 1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[bioavailability of 600‐mg dose (fraction) relative to reference dose]` | not captured | 0.91 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | 1.86 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | not captured | 1.86 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clm/fm]` | 1.91 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[clm/fm]` | not captured | 1.91 | only_one_extracted |
| `gpt-oss-120b` | `parameters[dose effect (&gt; 600 mg) on fraction metabolized, fm]` | 1.34 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[dose effect (&gt; 600 mg) on fraction metabolized, fm]` | not captured | 1.34 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 0.07 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | not captured | 0.07 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q22_age]` | not captured | -0.00379 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q22_sex]` | 0.81 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q31_sex]` | not captured | 0.81 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f]` | 12.77 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f]` | not captured | 12.77 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vm/fm]` | 8.83 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vm/fm]` | not captured | 8.83 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | rifapentine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | rifapentine | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cpt634-tbl-0002:row1:col1', 'cpt634-tbl-0002:row1:col2'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cpt634-tbl-0002:row4:col1', 'cpt634-tbl-0002:row4:col2'] |
| C5_dimension_Q367 | pass | [length] ** 3 | not captured | not captured | not captured | ['cpt634-tbl-0002:row5:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['cpt634-tbl-0002:row3:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['cpt634-tbl-0002:row2:col1'] |
| C7_apparent_coherence | fail | F==1, Fm==1, no molar corr. | Fm=1.34 present with apparent parameterization | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 1.86 L/h | not captured | not captured | ['cpt634-tbl-0002:row1:col1', 'cpt634-tbl-0002:row1:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 12.8 L | not captured | not captured | ['cpt634-tbl-0002:row2:col1'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_rifapentine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Savic_2017` / `Savic_2017::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 12:25 UTC</sub>
