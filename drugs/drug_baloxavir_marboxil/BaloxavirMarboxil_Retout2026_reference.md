<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;baloxavir marboxil&quot;,&quot;href&quot;:&quot;drugs/drug_baloxavir_marboxil/&quot;},{&quot;label&quot;:&quot;Retout_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;BaloxavirMarboxil_Kim2022_reference&quot;,&quot;label&quot;:&quot;Kim_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_baloxavir_marboxil/BaloxavirMarboxil_Kim2022_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;BaloxavirMarboxil_Retout2026_reference&quot;,&quot;label&quot;:&quot;Retout_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_baloxavir_marboxil/BaloxavirMarboxil_Retout2026_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# baloxavir marboxil — `BaloxavirMarboxil_Retout2026_reference`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.">extracted</span> <span class="pk-badge pk-badge--stale">stale</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

> **Caveat** (`covariates_not_exercised`): the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.

### Reviewer guidance

**Baloxavir marboxil apparent peripheral volume 260 L was not extracted, and covariate effects were not simulated for children aged 1 to &lt;12 years.**

The record lists V2/F as 260 L, but the simulation engine failed to cover this parameter, leaving it undefined in the executed model. Additionally, covariates for race and age on clearance and absorption were not exercised, so only the reference individual was simulated. Extracted — baloxavir: CLm/F 11 L/h, V1/F 735 L, Q/F 2.12 L/h, V2/F 260 L, kabs 1.39 1/h, tlag 0.223 h.

<sub>reviewed by qwen3.8-27b</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-10-07 14:33:32.582847+00:00) predates the upstream re-run (2026-10-07 15:33:08.758662+00:00). Current validate status: `extracted`.

> **Dose compound ≠ measured compound:** dosed `baloxavir marboxil`, measured `baloxavir acid`.

## Citation
Retout S et al., Population Pharmacokinetic and Exposure…, Clinical pharmacology and t… (2026)
  ·  DOI: [10.1002/cpt.70204](https://doi.org/10.1002/cpt.70204)

## Model component
<dbs-pgx drug="baloxavir marboxil" model-id="BaloxavirMarboxil_Retout2026_reference" status="extracted" stale="true" population="patients aged ≥1 year with influenza (treatment and post-exposure prophylaxis)" measured-compound="baloxavir acid" parameterization="apparent" topology="1C"></dbs-pgx>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 6 extracted, plus 5 covariate effects.

**Parameterization:** CLm/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F | `Q351` · CLm/F | 11.02 | L/h | 3.0611111111111112e-06 | L/h | 1.87 | exact (1.0) | cpt70204-tbl-0001:row2:col2, cpt70204-tbl-0001:row2:col3, cpt70204-tbl-0001:footnote | — | not captured |
| Vc/F | `Q290` · V1/F | 735 | L | 0.735 | L | 2.12 | exact (1.0) | cpt70204-tbl-0001:row3:col2, cpt70204-tbl-0001:row3:col3, cpt70204-tbl-0001:footnote | — | not captured |
| Q/F | `Q69` · Q/F | 2.12 | L/h | 5.88888888888889e-07 | L/h | 5.2 | exact (1.0) | cpt70204-tbl-0001:row4:col2, cpt70204-tbl-0001:row4:col3, cpt70204-tbl-0001:footnote | — | not captured |
| Vp/F | `Q82` · V2/F | 260 | L | 0.26 | L | 6.68 | exact (1.0) | cpt70204-tbl-0001:row5:col2, cpt70204-tbl-0001:row5:col3, cpt70204-tbl-0001:footnote | — | not captured |
| ka | `Q49` · kabs | 1.39 | 1/h | 0.0003861111111111111 | 1/h | 14.6 | exact (1.0) | cpt70204-tbl-0001:row6:col1, cpt70204-tbl-0001:row6:col2, cpt70204-tbl-0001:row6:col3, cpt70204-tbl-0001:footnote | — | not captured |
| Tlag | `Q83` · tlag | 0.223 | h | 802.8000000000001 | h | 39.6 | exact (1.0) | cpt70204-tbl-0001:row7:col2, cpt70204-tbl-0001:row7:col3 | — | not captured |
| Effect of BW on CL/F, Q/F | `Q900` · equation variable | 0.467 | not captured | not captured | not captured | 5.61 | llm_corrected (0.6) | cpt70204-tbl-0001:row26:col2, cpt70204-tbl-0001:row26:col3 | — | not captured |
| theta_equation_variable_race | `Q900` · theta_equation_variable_race | 0.504 | not captured | not captured | not captured | 2.4 | not captured (not captured) | cpt70204-tbl-0001:row28:col2, cpt70204-tbl-0001:row28:col3 | — | not captured |
| theta_q76_race | `Q900` · theta_q76_race | 0.335 | not captured | not captured | not captured | 5.28 | not captured (not captured) | cpt70204-tbl-0001:row29:col2, cpt70204-tbl-0001:row29:col3 | — | not captured |
| theta_equation_variable_race | `Q900` · theta_equation_variable_race | 0.391 | not captured | not captured | not captured | 7.21 | not captured (not captured) | cpt70204-tbl-0001:row30:col2, cpt70204-tbl-0001:row30:col3 | — | not captured |
| theta_kabs_sex | `Q900` · theta_kabs_sex | 0.205 | not captured | not captured | not captured | 36.4 | not captured (not captured) | cpt70204-tbl-0001:row31:col2, cpt70204-tbl-0001:row31:col3 | — | not captured |
| theta_kabs_age | `Q900` · theta_kabs_age | 0.242 | not captured | not captured | not captured | 21.4 | not captured (not captured) | cpt70204-tbl-0001:row32:col2, cpt70204-tbl-0001:row32:col3 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- column 'unit' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped duplicate Q900 ('Effect of BW on Vc/F, Vp/F', value '0.887') — already have one for this compound
- covariate effect for Q76 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'CL/F' → L/h (from the paper text: "Text states oral drug clearance values '10.8 L/h versus 11.0 L/h, respectively', matching CL/F = 11.02 in Table 1.")
- implicit units: 'Vc/F' → L (from the popPK convention: 'No unit stated for Vc/F; central volumes of distribution are conventionally in L, consistent with value 735.')
- implicit units: 'Q/F' → L/h (from the popPK convention: 'No unit stated for Q/F; intercompartmental clearances are conventionally in L/h, consistent with value 2.12.')
- implicit units: 'Vp/F' → L (from the popPK convention: 'No unit stated for Vp/F; peripheral volumes of distribution are conventionally in L, consistent with value 260.')
- implicit units: 'ka' → 1/h (from the popPK convention: 'No unit stated for ka; first-order absorption rate constants are conventionally in 1/h, consistent with value 1.39.')
- implicit units: 'Tlag' → h (from the popPK convention: 'No unit stated for Tlag; absorption lag times are conventionally in h, consistent with value 0.223.')
- metabolite baloxavir acid: Q27→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=baloxavir acid
- template fit: none — only the metabolite is modelled — no parent compartment
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- row roles (LLM): model_class=compartmental; 25/25 row label(s) assigned, 24 linked by role
- review gap-fill skipped: this record measures 'baloxavir acid', not baloxavir_marboxil — the review values are the parent's

**Extraction notes:**
- unparsed cell cpt70204-tbl-0001:row9:col2 = '45.60%'
- unparsed cell cpt70204-tbl-0001:row9:col3 = '4.23b'
- unparsed cell cpt70204-tbl-0001:row10:col2 = '45.70%'
- unparsed cell cpt70204-tbl-0001:row10:col3 = '5.55b'
- unparsed cell cpt70204-tbl-0001:row11:col2 = '48.60%'
- unparsed cell cpt70204-tbl-0001:row11:col3 = '23.0b'
- unparsed cell cpt70204-tbl-0001:row12:col2 = '15% (Fixed)'
- unparsed cell cpt70204-tbl-0001:row13:col2 = '113%'
- unparsed cell cpt70204-tbl-0001:row13:col3 = '8.91b'
- unparsed cell cpt70204-tbl-0001:row14:col2 = '62.60%'
- unparsed cell cpt70204-tbl-0001:row14:col3 = '80.4b'
- unparsed cell cpt70204-tbl-0001:row15:col3 = '1.38c'
- unparsed cell cpt70204-tbl-0001:row16:col3 = '6.79c'
- unparsed cell cpt70204-tbl-0001:row17:col3 = '25.9c'
- unparsed cell cpt70204-tbl-0001:row18:col3 = '13.6c'
- unparsed cell cpt70204-tbl-0001:row19:col3 = '27.9c'
- unparsed cell cpt70204-tbl-0001:row20:col3 = '30.9c'
- unparsed cell cpt70204-tbl-0001:row21:col3 = '16.5c'
- unparsed cell cpt70204-tbl-0001:row22:col3 = '316c'
- unparsed cell cpt70204-tbl-0001:row23:col3 = '159c'
- unparsed cell cpt70204-tbl-0001:row24:col3 = '124c'
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['cpt70204-tbl-0001:row3:col2', 'cpt70204-tbl-0001:row3:col3', 'cpt70204-tbl-0001:footnote'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cpt70204-tbl-0001:row2:col2', 'cpt70204-tbl-0001:row2:col3', 'cpt70204-tbl-0001:footnote'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['cpt70204-tbl-0001:row6:col1', 'cpt70204-tbl-0001:row6:col2', 'cpt70204-tbl-0001:row6:col3', 'cpt70204-tbl-0001:footnote'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cpt70204-tbl-0001:row4:col2', 'cpt70204-tbl-0001:row4:col3', 'cpt70204-tbl-0001:footnote'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['cpt70204-tbl-0001:row5:col2', 'cpt70204-tbl-0001:row5:col3', 'cpt70204-tbl-0001:footnote'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['cpt70204-tbl-0001:row7:col2', 'cpt70204-tbl-0001:row7:col3'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q290 | pass | volume within physiological range | 735 L | not captured | not captured | ['cpt70204-tbl-0001:row3:col2', 'cpt70204-tbl-0001:row3:col3', 'cpt70204-tbl-0001:footnote'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 260 L | not captured | not captured | ['cpt70204-tbl-0001:row5:col2', 'cpt70204-tbl-0001:row5:col3', 'cpt70204-tbl-0001:footnote'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=baloxavir) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | fail | 5 scholar param(s) emitted or defaulted | 4 covered | not captured | neither emitted nor in defaulted[]: ['V2/F'] |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | not captured | 5.1772250275190754e-05 | not captured | non-numeric value |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_baloxavir_marboxil/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Retout_2026` / `Retout_2026::reference`)
- model: `../../../knowledgebase/drugs/drug_baloxavir_marboxil/models/modelica/BaloxavirMarboxil_Retout2026_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_baloxavir_marboxil/models/modelica/BaloxavirMarboxil_Retout2026_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_baloxavir_marboxil/models/modelica/BaloxavirMarboxil_Retout2026_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_baloxavir_marboxil/BaloxavirMarboxil_Retout2026_reference/BaloxavirMarboxil_Retout2026_reference_modelica.zip" download>BaloxavirMarboxil_Retout2026_reference_modelica.zip</a> <span class="pk-size">(5.4 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_baloxavir_marboxil/BaloxavirMarboxil_Retout2026_reference/BaloxavirMarboxil_Retout2026_reference_fmi.zip" download>BaloxavirMarboxil_Retout2026_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_1C_enteral.fmu" download>PK_1C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_1C_enteral.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_baloxavir_marboxil/BaloxavirMarboxil_Retout2026_reference/BaloxavirMarboxil_Retout2026_reference.svg" alt="BaloxavirMarboxil_Retout2026_reference diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v26.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 40 mg, single dose, first-order absorption (ka 1.39 /h, lag 13.4 min, F 1). _The paper's dose was not captured; the default is the WHO ATC DDD 40 mg oral (J05AX25) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_baloxavir_marboxil/BaloxavirMarboxil_Retout2026_reference/BaloxavirMarboxil_Retout2026_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_baloxavir_marboxil/BaloxavirMarboxil_Retout2026_reference/BaloxavirMarboxil_Retout2026_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_1C_enteral` · parameters `BaloxavirMarboxil_Retout2026_reference_params.json` · controls `BaloxavirMarboxil_Retout2026_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 15:33 UTC</sub>
