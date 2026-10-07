<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;tianeptine&quot;,&quot;href&quot;:&quot;drugs/drug_tianeptine/&quot;},{&quot;label&quot;:&quot;Szafarz_2018 \u00b7 estimate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg&quot;,&quot;label&quot;:&quot;Szafarz_2018_intraperitoneal_10_mg_kg&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tianeptine/Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tianeptine_Szafarz2018_intravenous_1_mg_kg&quot;,&quot;label&quot;:&quot;Szafarz_2018_intravenous_1_mg_kg&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tianeptine/Tianeptine_Szafarz2018_intravenous_1_mg_kg.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tianeptine — `Tianeptine_Szafarz2018_estimate`

> ## <span class="pk-badge pk-badge--red" title="covariates_not_exercised: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.929). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

**Model:** No model was generated from this record.

> **Caveat** (`covariates_not_exercised`): the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.

### Reviewer guidance

**The tianeptine rat model was rejected because its structure is a one-compartment parent-only model instead of the paper's parent–metabolite model, the peripheral transfer constants k12 and k21 were never included, and the simulated terminal half-life (0.181 h) misses the paper's 7.53 h.**

The record declares a tianeptine→MC5 metabolism link, but the built model is a single central compartment rather than the required parent–metabolite structure, and its output is the central concentration instead of the metabolite compartment. Parameter coverage failed: of 4 reported parameters, only 2 were covered, with k12 (0.504 h−1) and k21 (0.628 h−1) neither emitted nor defaulted. The terminal half-life check failed against both reported values (7.53 h, ratio 0.024; 1.16 h, ratio 0.1559), and the covariate effect theta_kel_em (0.416) was defined but never exercised in simulation. A second reader also disagreed on the parameter identifier for the normalized volume Vnorm (2.971 L/kg). Extracted — tianeptine: V1 0.761 L/kg, Vnorm 2.97 L/kg, kel 2.79 h−1, k12 0.504 h−1, k21 0.628 h−1, Fab 0.694.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on `parameters[v m/f m].parameter_id`: this record has Q352, the second reading Q61. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-10-05 09:32:24.779318+00:00) predates the upstream re-run (2026-10-06 23:48:00.841088+00:00). Current validate status: `rejected`.

## Citation
Szafarz M et al., Pharmacokinetic study of tianeptine and…, Naunyn-Schmiedeberg's archi… (2018)
  ·  DOI: [10.1007/s00210-017-1448-2](https://doi.org/10.1007/s00210-017-1448-2)

## Model component
<dbs-pgx drug="tianeptine" model-id="Tianeptine_Szafarz2018_estimate" status="rejected" stale="true" population="rats" measured-compound="tianeptine" parameterization="apparent" topology="parent_metabolite"></dbs-pgx>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 5 extracted, plus 1 covariate effect.

**Parameterization:** V1/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| V C (L/kg) | `Q63` · V1 | 0.761 | L/kg | 0.053270000000000005 | [l] / [kg] | not captured | space_fold (0.95) | Szafarz_2018_table_4:row0:col1 | — | not captured |
| V m/f m (L/kg) | `Q290` · V1/F | 2.971 | L/kg | 0.20797000000000002 | [l] / [kg] | not captured | exact (1.0) | Szafarz_2018_table_4:row1:col1 | — | not captured |
| k e (h−1) | `Q47` · kel | 2.792 | h−1 | 0.0007755555555555555 | [1] / [h] | not captured | exact (1.0) | Szafarz_2018_table_4:row2:col1 | — | not captured |
| k 12 (h−1) | `Q30` · Q | 0.504 | h−1 | not captured | [1] / [h] | not captured | exact (1.0) | Szafarz_2018_table_4:row4:col1 | — | not captured |
| F | `Q40` · Fab | 0.694 | not captured | not captured | not captured | not captured | exact (1.0) | Szafarz_2018_table_4:row6:col1 | — | not captured |
| theta_q47_em | `Q900` · theta_q47_em | 0.416 | not captured | not captured | not captured | not captured | not captured (not captured) | Szafarz_2018_table_4:row3:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'k 12 (h−1)' → Q30 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'k 21 (h−1)' → Q30 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q30 ('k 21 (h−1)', value '0.628') — already have one for this compound
- dropped value-less row: 'Table 3. Serum pharmacokinetic parameters calculated from concentration vs. time data (n = 3) of tianeptine and MC5 metabolite determined by non-compartmental analysis after a single intravenous or intraperitoneal administration of tianeptine to rats at a dose of 1 or 10 mg/kg, respectively. Data are presented as geometric mean (GM), 90% confidence interval (CI), and coefficient of variation (CV)' (captured trailing unit 'CV' for child rows)
- covariate effect for Q47 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=tianeptine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [1]
- status held at route_to_review — not promoted
- population split: 'estimate' subgroup of Szafarz_2018 (paper reports 3 populations: estimate, intraperitoneal 10 mg/kg, intravenous 1 mg/kg)
- row roles (LLM): model_class=compartmental; 18/18 row label(s) assigned, 12 linked by role; re-tagged parent→MC5 ×4
- molar mass: none of 1 PubChem candidate(s) is 'MC5' (LLM) — left in mass units
- molar mass: none found for 'MC5' — its concentrations stay mass-only
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell Tab3:row3:col1 = '1.27(0.86–1.9)'
- unparsed cell Tab3:row3:col3 = '0.117(0.064–0.212)'
- unparsed cell Tab3:row3:col5 = '6.65(6.44–6.87)'
- unparsed cell Tab3:row3:col7 = '2.02(1.1–3.43)'
- unparsed cell Tab3:row4:col3 = '0.4(0.054–2.89)'
- unparsed cell Tab3:row5:col1 = '0.59(0.25–1.42)'
- unparsed cell Tab3:row5:col3 = '0.09(0.085–0.099)'
- unparsed cell Tab3:row5:col5 = '0.475(0.332–0.68)'
- unparsed cell Tab3:row5:col7 = '0.187(0.07–0.498)'
- unparsed cell Tab3:row6:col1 = '1.16(0.49–2.75)'
- unparsed cell Tab3:row6:col3 = '7.53(6.98–8.13)'
- unparsed cell Tab3:row6:col5 = '1.46(1.018–2.085)'
- unparsed cell Tab3:row6:col7 = '3.69(1.39–9.83)'
- unparsed cell Tab3:row7:col1 = '2.41(0.91–6.4)'
- unparsed cell Tab3:row7:col5 = '6.51(4.03–10.53)'
- unparsed cell Tab3:row8:col1 = '1954.02(1411.02–2705.94)'
- unparsed cell Tab3:row8:col3 = '2371.56(1617.78–3476.46)'
- unparsed cell Tab3:row8:col5 = '11,621.28(9737.58–13,869.36)'
- unparsed cell Tab3:row8:col7 = '14,415.96(12,323.88–16,863.24)'
- unparsed cell Tab3:row9:col1 = '1.84(1.33–2.55)'
- unparsed cell Tab3:row9:col5 = '3.1(2.59–3.69)'
- unparsed cell Tab3:row10:col1 = '2.03(0.89–4.62)'
- unparsed cell Tab3:row11:col1 = '1.25(0.66–2.36)'
- unparsed cell Tab3:row11:col3 = '8.28(6.53–10.5)'
- unparsed cell Tab3:row11:col5 = '0.66(0.51–0.87)'
- unparsed cell Tab3:row11:col7 = '4.1(1.83–9.24)'
- companion parameter table 4 transcribed (13 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.929 (13/14 fields) | 1 |

<details><summary>1 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[v m/f m].parameter_id` | Q352 | Q61 | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Szafarz_2018_table_4:row1:col1'] |
| C5_dimension_Q30 | fail | 1 / [time] | h−1 | not captured | not captured | ['Szafarz_2018_table_4:row4:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Szafarz_2018_table_4:row2:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Szafarz_2018_table_4:row0:col1'] |
| C7_apparent_coherence | fail | F==1, Fm==1, no molar corr. | absolute F=0.694 with apparent parameterization | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q290 | pass | volume within physiological range | 208 L | not captured | not captured | ['Szafarz_2018_table_4:row1:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 53.3 L | not captured | not captured | ['Szafarz_2018_table_4:row0:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_derived_parameters | not captured | pass | 1 deterministic parameter derivation(s) emitted | derived values and bindings match the report | not captured | rate-derived clearance must be the value the Modelica model uses |
| T3_output_variable | not captured | fail | Metabolite_C (measured=tianeptine) | C_central | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | fail | 4 scholar param(s) emitted or defaulted | 2 covered | not captured | neither emitted nor in defaulted[]: ['k12', 'k21'] |
| T3_topology_template | not captured | fail | parent_metabolite → PK_3M_9C* | PK_1C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |
| T1_t_half_beta | reference | fail | 7.53 | 0.18084952380966507 | 0.024 | h→SI vs simulated h |
| T1_t_half_beta | reference | fail | 1.16 | 0.18084952380966507 | 0.1559 | h→SI vs simulated h |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_tianeptine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Szafarz_2018` / `Szafarz_2018::estimate`)
- model: `../../../knowledgebase/drugs/drug_tianeptine/models/modelica/Tianeptine_Szafarz2018_estimate.mo`
- deviation: `../../../knowledgebase/drugs/drug_tianeptine/models/modelica/Tianeptine_Szafarz2018_estimate.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_tianeptine/models/modelica/Tianeptine_Szafarz2018_estimate.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 23:48 UTC</sub>
