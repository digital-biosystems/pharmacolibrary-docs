<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;Glecaprevir&quot;,&quot;href&quot;:&quot;drugs/drug_glecaprevir/&quot;},{&quot;label&quot;:&quot;Thakre_2026 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Glecaprevir — `Glecaprevir_Thakre2026_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.538). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A model was built but held back: a core parameter had no value, so it is not published or simulated.

> **Caveat** (`covariates_not_exercised`): the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.

### Reviewer guidance

**Glecaprevir clearance, volume, and absorption lag time were missing; pibrentasvir’s clearance of 2170 L/day could not supply those parameters, so the model was held back.**

No value for glecaprevir's clearance, volume of distribution and absorption lag time — all 7 extracted parameters describe pibrentasvir. The model was built, but glecaprevir's clearance, volume of distribution and absorption lag time had no value, so a library placeholder stood in and the model was held back rather than published with an invented number. The covariate scenarios were not simulated. The base model was simulated, not the covariate effects the record defines. A reported unit could not be converted to SI; the builder also defaulted clearance, volume, and lag time and assumed F=1, Fm=1, with no molar correction. Extracted — pibrentasvir: CL/F 2.17e+03 L/day, V2/F 528 L, Q/F 765 L/day, V3/F 3.75e+03 L, tlag 0.0556 days, Fab 2.47 \documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{mathrsfs} \usepackage{upgreek} \setlength{\oddsidemargin}{-69pt} \begin{document}$$\theta$$\end{document}θ, kabs 7.34 1/day.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on which compound was dosed: this record has glecaprevir + pibrentasvir, the second reading glecaprevir; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

> **Dose compound ≠ measured compound:** dosed `glecaprevir + pibrentasvir`, measured `glecaprevir and pibrentasvir`.

## Citation
Thakre N et al., Population Pharmacokinetic Analysis of…, Clinical pharmacokinetics (2026)
  ·  DOI: [10.1007/s40262-026-01637-1](https://doi.org/10.1007/s40262-026-01637-1)

## Model component
<dbs-pgx drug="Glecaprevir" model-id="Glecaprevir_Thakre2026_reference" status="model_quarantined" stale="false" population="pediatric patients with chronic HCV infection, ages 3 to &lt; 18 years" measured-compound="glecaprevir and pibrentasvir" parameterization="apparent" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 7 extracted, plus 3 covariate effects.

**Parameterization:** CL/F, Q/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (L/day)a | `Q27` · CL/F | 2170 | L/day | 2.511574074074074e-05 | L/h | not captured | llm_confirmed (0.6) | Tab3:row2:col1, Tab3:row2:col2, Tab3:row2:col3, Thakre_2026_table_2:row1:col1, Thakre_2026_table_2:row1:col2, Thakre_2026_table_2:row1:col3 | — | not captured |
| V2/F (L)a | `Q82` · V2/F | 528 | L | 0.528 | L | not captured | llm_confirmed (0.6) | Tab3:row3:col1, Tab3:row3:col2, Tab3:row3:col3, Thakre_2026_table_2:row2:col1, Thakre_2026_table_2:row2:col2, Thakre_2026_table_2:row2:col3 | — | not captured |
| Q/F (L/day)a | `Q69` · Q/F | 765 | L/day | 8.854166666666667e-06 | L/h | not captured | llm_confirmed (0.6) | Tab3:row4:col1, Tab3:row4:col2, Tab3:row4:col3 | — | not captured |
| V3/F (L)a | `Q78` · V3/F | 3750 | L | 3.75 | L | not captured | llm_confirmed (0.6) | Tab3:row5:col1, Tab3:row5:col2, Tab3:row5:col3 | — | not captured |
| ALAG1 (days) | `Q83` · tlag | 0.0556 | days | 4803.84 | [d] | not captured | llm (0.6) | Tab3:row6:col1, Tab3:row6:col2, Tab3:row6:col3 | — | not captured |
| Absorption factorb | `Q40` · Fab | 2.47 | \documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{mathrsfs} \usepackage{upgreek} \setlength{\oddsidemargin}{-69pt} \begin{document}$$\theta$$\end{document}θ | not captured | [s] · [min] · [d]^3 · [m] · [$$\] · [-69] · [\]^11 · [amsbsy] · [amsfonts] · [amsmath] · [amssymb] · [athrsfs] · [begin] · [end] · [etlength] · [imal] · [ocument]^2 · [ocumentclass] · [oddsidemargin] · [12pt] · [pt] · [theta$$\] · [upgreek] · [usepackage]^7 · [wasysym] · [θ] | not captured | llm_confirmed (0.6) | Tab3:row7:col1, Tab3:row7:col2, Tab3:row7:col3, Thakre_2026_table_2:row3:col1, Thakre_2026_table_2:row3:col2, Thakre_2026_table_2:row3:col3 | — | not captured |
| Derived absorption rate, ka (1/day)b | `Q49` · kabs | 7.34 | 1/day | 8.495370370370369e-05 | 1/h | not captured | llm_confirmed (0.6) | Tab3:row11:col3, Thakre_2026_table_2:row7:col3 | — | not captured |
| theta_q87_formulation | `Q900` · theta_q87_formulation | 1.20 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab3:row8:col1, Thakre_2026_table_2:row4:col1 | — | not captured |
| theta_q319_body_weight | `Q900` · theta_q319_body_weight | 0.440 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab3:row9:col1, Tab3:row9:col2, Tab3:row9:col3, Thakre_2026_table_2:row5:col1, Thakre_2026_table_2:row5:col2, Thakre_2026_table_2:row5:col3 | — | not captured |
| theta_q319_body_weight | `Q900` · theta_q319_body_weight | 0.757 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab3:row10:col1, Tab3:row10:col2, Tab3:row10:col3, Thakre_2026_table_2:row6:col1, Thakre_2026_table_2:row6:col2, Thakre_2026_table_2:row6:col3 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: '\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$$\\theta$$\\end{document}θ' (CL/F)
- unit_dimension_unknown: '\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$$\\theta$$\\end{document}θ' (V2/F)
- unit_dimension_unknown: '\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$$\\theta$$\\end{document}θ' (Q/F)
- unit_dimension_unknown: '\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$$\\theta$$\\end{document}θ' (V3/F)
- unit_dimension_unknown: '\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$$\\theta$$\\end{document}θ' (Fab)
- unit_dimension_unknown: '\\documentclass[12pt]{minimal} \\usepackage{amsmath} \\usepackage{wasysym} \\usepackage{amsfonts} \\usepackage{amssymb} \\usepackage{amsbsy} \\usepackage{mathrsfs} \\usepackage{upgreek} \\setlength{\\oddsidemargin}{-69pt} \\begin{document}$$\\theta$$\\end{document}θ' (kabs)
- dropped value-less row: 'GLE AUC24 (ng·h/mL)' (captured trailing unit 'ng·h/mL' for child rows)
- covariate effect for Q87 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'CL/F (L/day)a' → L/day (from the paper text: 'The parameter label states “CL/F (L/day)a.”')
- implicit units: 'V2/F (L)a' → L (from the paper text: 'The parameter label states “V2/F (L)a.”')
- implicit units: 'Q/F (L/day)a' → L/day (from the paper text: 'The parameter label states “Q/F (L/day)a.”')
- implicit units: 'V3/F (L)a' → L (from the paper text: 'The parameter label states “V3/F (L)a.”')
- implicit units: 'Derived absorption rate, ka (1/day)b' → 1/day (from the paper text: 'The parameter label states “Derived absorption rate, ka (1/day)b.”')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=glecaprevir and pibrentasvir
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted

**Extraction notes:**
- unparsed cell Tab3:row11:col1 = '10.1 (NA)'
- unparsed cell Thakre_2026_table_2:row7:col1 = '18.6 (NA)'
- companion parameter table 2 transcribed (17 record(s), model stage 'final')
- companion parameter table 4 transcribed (1 record(s), model stage 'final')
- LLM selected parameter table(s) 2, 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `gpt-6-luna` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.538 (7/13 fields) | 6 |

<details><summary>6 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[absorption factorb]` | 2.47 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[alag1]` | 0.0556 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q319_body_weight]` | 0.440 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q87_formulation]` | 1.20 | not captured | only_one_extracted |
| `qwen3.8-27b` | `screen.dose_compound` | glecaprevir + pibrentasvir | glecaprevir | mismatch |
| `qwen3.8-27b` | `screen.primary_analyte` | glecaprevir and pibrentasvir | glecaprevir | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row2:col1', 'Tab3:row2:col2', 'Tab3:row2:col3', 'Thakre_2026_table_2:row1:col1', 'Thakre_2026_table_2:row1:col2', 'Thakre_2026_table_2:row1:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab3:row11:col3', 'Thakre_2026_table_2:row7:col3'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row4:col1', 'Tab3:row4:col2', 'Tab3:row4:col3'] |
| C5_dimension_Q78 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row5:col1', 'Tab3:row5:col2', 'Tab3:row5:col3'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row3:col1', 'Tab3:row3:col2', 'Tab3:row3:col3', 'Thakre_2026_table_2:row2:col1', 'Thakre_2026_table_2:row2:col2', 'Thakre_2026_table_2:row2:col3'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Tab3:row6:col1', 'Tab3:row6:col2', 'Tab3:row6:col3'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 90.4 L/h | not captured | not captured | ['Tab3:row2:col1', 'Tab3:row2:col2', 'Tab3:row2:col3', 'Thakre_2026_table_2:row1:col1', 'Thakre_2026_table_2:row1:col2', 'Thakre_2026_table_2:row1:col3'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 528 L | not captured | not captured | ['Tab3:row3:col1', 'Tab3:row3:col2', 'Tab3:row3:col3', 'Thakre_2026_table_2:row2:col1', 'Thakre_2026_table_2:row2:col2', 'Thakre_2026_table_2:row2:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_param_coverage | not captured | pass | 5 scholar param(s) emitted or defaulted | 5 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_glecaprevir/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Thakre_2026` / `Thakre_2026::reference`)
- model: `../../../knowledgebase/drugs/drug_glecaprevir/models/modelica/_needs_review/Glecaprevir_Thakre2026_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_glecaprevir/models/modelica/_needs_review/Glecaprevir_Thakre2026_reference.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
</tbody></table>
<p>No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 17:54 UTC</sub>
