<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;ticagrelor&quot;,&quot;href&quot;:&quot;drugs/drug_ticagrelor/&quot;},{&quot;label&quot;:&quot;\u00c5strand_2019 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ticagrelor_Henrich2021_reference&quot;,&quot;label&quot;:&quot;Henrich_2021_reference&quot;,&quot;href&quot;:&quot;drugs/drug_ticagrelor/Ticagrelor_Henrich2021_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ticagrelor_strand2019_reference&quot;,&quot;label&quot;:&quot;\u00c5strand_2019_reference&quot;,&quot;href&quot;:&quot;drugs/drug_ticagrelor/Ticagrelor_strand2019_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Ticagrelor_Kathman2022_reference&quot;,&quot;label&quot;:&quot;Kathman_2022_reference&quot;,&quot;href&quot;:&quot;drugs/drug_ticagrelor/Ticagrelor_Kathman2022_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ticagrelor — `Ticagrelor_strand2019_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.">needs review</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

> **Caveat** (`covariates_not_exercised`): the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.

### Reviewer guidance

**The record was held back because the AR-C124910XX metabolite distribution parameters — Q/F 4.41 l/h, V1/F 7.04 l and V2/F 42.3 l — were neither extracted nor defaulted, leaving only 4 of 10 expected parameters covered.**

The ticagrelor parent parameters (CL/F 16.6 l/h, Q/F 10.4 l/h, V1/F 156 l, V2/F 55.8 l, kabs 10.1 h−1, tlag 0.48 h) and the metabolite clearance CL/F 10.2 l/h with fm 0.22 were present, but the metabolite's intercompartmental clearance and both volumes of distribution were missing from the record. In addition, the model builder assumed F=1 and Fm=1 with no molar correction, an apparent parameterization, and the covariate effects defined in the record (e.g. the exponent 0.48 for the PRU error) were not exercised — only the reference individual was simulated. Extracted — ticagrelor: CL/F 16.6 l h –1, Q/F 10.4 l h –1, V1/F 156 l, V2/F 55.8 l, kabs 10.1 h −1, tlag 0.48 h, Frel 1; AR-C124910XX: CL/F 10.2 l h –1, fm 0.22, Q/F 4.41 l h –1, V1/F 7.04 l, V2/F 42.3 l.

<sub>reviewed by glm-5.3-flash</sub>

## Citation
Åstrand M; Amilon C; Röshammar D; Himmelmann A; Angiolillo DJ; Storey RF; et al. et al. (2019). British journal of clinical pharmacology 85
  ·  DOI: [10.1111/bcp.13812](https://doi.org/10.1111/bcp.13812)

## Model component
<dbs-pgx drug="ticagrelor" model-id="Ticagrelor_strand2019_reference" status="needs_review" stale="false" population="stable coronary artery disease and prior myocardial infarction patients" measured-compound="ticagrelor" parameterization="apparent" topology="parent_metabolite"></dbs-pgx>

**Model structure:** parent–metabolite model: parent with 2 compartment(s); metabolite AR-C124910XX: 2 compartment(s); formed from the central compartment; oral dose — template `PK_3M_9C`.  
**Parameters:** 12 extracted, plus 1 covariate effect.

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL/F (l h –1 ) | `Q27` · CL/F | 16.6 | l h –1 | 4.611111111111111e-06 | [l] / [h] | not captured | exact (1.0) | bcp13812-tbl-0002:row1:col1, bcp13812-tbl-0002:row1:col3 | — | not captured |
| Q/F (l h –1 ) | `Q69` · Q/F | 10.4 | l h –1 | 2.8888888888888894e-06 | [l] / [h] | not captured | exact (1.0) | bcp13812-tbl-0002:row2:col1, bcp13812-tbl-0002:row2:col3 | — | not captured |
| Vc/F (l) | `Q290` · V1/F | 156 | l | 0.156 | [l] | not captured | exact (1.0) | bcp13812-tbl-0002:row3:col1 | — | not captured |
| Vp/F (l) | `Q82` · V2/F | 55.8 | l | 0.055799999999999995 | [l] | not captured | exact (1.0) | bcp13812-tbl-0002:row4:col1 | — | not captured |
| KTR (h −1 ) | `Q49` · kabs | 10.1 | h −1 | 0.0028055555555555555 | [1] / [h] | not captured | exact (1.0) | bcp13812-tbl-0002:row5:col1, bcp13812-tbl-0002:row5:col3 | — | not captured |
| Absorption lag time prior MI (h) | `Q83` · tlag | 0.48 | h | 1728.0 | [h] | not captured | llm_confirmed (0.6) | bcp13812-tbl-0002:row6:col1 | — | not captured |
| F rel | `Q87` · Frel | 1 | not captured | not captured | not captured | not captured | exact (1.0) | bcp13812-tbl-0002:row7:col1, bcp13812-tbl-0002:row7:col3 | — | not captured |
| CL m /F (l h –1 ) | `Q27` · CL/F | 10.2 | l h –1 | 2.833333333333333e-06 | [l] / [h] | not captured | exact (1.0) | bcp13812-tbl-0002:row9:col1, bcp13812-tbl-0002:row9:col3 | — | not captured |
| F m | `Q45` · fm | 0.22 | not captured | not captured | not captured | not captured | exact (1.0) | bcp13812-tbl-0002:row10:col1 | — | not captured |
| Q m /F (l h –1 ) | `Q69` · Q/F | 4.41 | l h –1 | 1.225e-06 | [l] / [h] | not captured | exact (1.0) | bcp13812-tbl-0002:row11:col1 | — | not captured |
| Vc m /F (l) | `Q290` · V1/F | 7.04 | l | 0.00704 | [l] | not captured | exact (1.0) | bcp13812-tbl-0002:row12:col1 | — | not captured |
| Vp m /F (l) | `Q82` · V2/F | 42.3 | l | 0.0423 | [l] | not captured | exact (1.0) | bcp13812-tbl-0002:row13:col1, bcp13812-tbl-0002:row13:col3 | — | not captured |
| exponent_for_pru_error | `Q900` · exponent_for_pru_error | 0.48 | not captured | not captured | not captured | not captured | not captured (not captured) | bcp13812-tbl-0002:row22:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- column 'bsv (%)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped PD-category row 'PRU baseline ONSET/OFFSET' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['bcp13812-tbl-0002:row15:col3'])
- dropped PD-category row 'EC 50 (nmol l –1 )' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['bcp13812-tbl-0002:row17:col1', 'bcp13812-tbl-0002:row17:col3'])
- dropped unlinked row (NIL): 'PRU baseline ‐EC 50 correlation' — extend the ontology if this is a real PK parameter (source ['bcp13812-tbl-0002:row18:col3'])
- dropped PD-category row 'E max (%)' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['bcp13812-tbl-0002:row19:col1', 'bcp13812-tbl-0002:row19:col3'])
- dropped PD-category row 'Steepness of exposure‐response (γ)' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['bcp13812-tbl-0002:row20:col1'])
- covariate level 'Exponent for PRU error (α)' → Q900:exponent_for_pru_error = 0.48 (power on Q27)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=ticagrelor
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [2]
- row roles (LLM): model_class=compartmental; 21/21 row label(s) assigned, 16 linked by role; re-tagged parent→AR-C124910XX ×8
- molar mass: none found for 'AR-C124910XX' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell bcp13812-tbl-0002:row1:col2 = '(3.6)'
- unparsed cell bcp13812-tbl-0002:row1:col4 = '(8.1)'
- unparsed cell bcp13812-tbl-0002:row2:col2 = '(4.7)'
- unparsed cell bcp13812-tbl-0002:row2:col4 = '(45)'
- unparsed cell bcp13812-tbl-0002:row3:col2 = '(4.2)'
- unparsed cell bcp13812-tbl-0002:row4:col2 = '(8.3)'
- unparsed cell bcp13812-tbl-0002:row5:col2 = '(5.8)'
- unparsed cell bcp13812-tbl-0002:row5:col4 = '(7.9)'
- unparsed cell bcp13812-tbl-0002:row6:col2 = '(11)'
- unparsed cell bcp13812-tbl-0002:row7:col4 = '(6.6)'
- unparsed cell bcp13812-tbl-0002:row8:col2 = '(4.5)'
- unparsed cell bcp13812-tbl-0002:row9:col2 = '(3.0)'
- unparsed cell bcp13812-tbl-0002:row9:col4 = '(9.2)'
- unparsed cell bcp13812-tbl-0002:row11:col2 = '(4.7)'
- unparsed cell bcp13812-tbl-0002:row12:col2 = '(6.7)'
- unparsed cell bcp13812-tbl-0002:row13:col2 = '(6.1)'
- unparsed cell bcp13812-tbl-0002:row13:col4 = '(29)'
- unparsed cell bcp13812-tbl-0002:row14:col2 = '(4.9)'
- unparsed cell bcp13812-tbl-0002:row15:col1 = '311 261'
- unparsed cell bcp13812-tbl-0002:row15:col2 = '(1.9) (1.7)'
- unparsed cell bcp13812-tbl-0002:row15:col4 = '(8.9)'
- unparsed cell bcp13812-tbl-0002:row17:col2 = '(5.3)'
- unparsed cell bcp13812-tbl-0002:row17:col4 = '(7.1)'
- unparsed cell bcp13812-tbl-0002:row18:col4 = '(27)'
- unparsed cell bcp13812-tbl-0002:row19:col2 = '(0.1)'
- unparsed cell bcp13812-tbl-0002:row19:col4 = '(6.1)'
- unparsed cell bcp13812-tbl-0002:row20:col2 = '(3.4)'
- unparsed cell bcp13812-tbl-0002:row21:col2 = '(5.6)'
- unparsed cell bcp13812-tbl-0002:row22:col2 = '(2.8)'
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 13 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp13812-tbl-0002:row1:col1', 'bcp13812-tbl-0002:row1:col3'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp13812-tbl-0002:row9:col1', 'bcp13812-tbl-0002:row9:col3'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp13812-tbl-0002:row3:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp13812-tbl-0002:row12:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['bcp13812-tbl-0002:row5:col1', 'bcp13812-tbl-0002:row5:col3'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp13812-tbl-0002:row2:col1', 'bcp13812-tbl-0002:row2:col3'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['bcp13812-tbl-0002:row11:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp13812-tbl-0002:row4:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['bcp13812-tbl-0002:row13:col1', 'bcp13812-tbl-0002:row13:col3'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['bcp13812-tbl-0002:row6:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 16.6 L/h | not captured | not captured | ['bcp13812-tbl-0002:row1:col1', 'bcp13812-tbl-0002:row1:col3'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 10.2 L/h | not captured | not captured | ['bcp13812-tbl-0002:row9:col1', 'bcp13812-tbl-0002:row9:col3'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 156 L | not captured | not captured | ['bcp13812-tbl-0002:row3:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 7.04 L | not captured | not captured | ['bcp13812-tbl-0002:row12:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 55.8 L | not captured | not captured | ['bcp13812-tbl-0002:row4:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 42.3 L | not captured | not captured | ['bcp13812-tbl-0002:row13:col1', 'bcp13812-tbl-0002:row13:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_metabolite_built[AR-C124910XX] | not captured | pass | own V, CL and formation clearance &gt; 0 | {'V': 0.00704, 'CL': 2.833333333333333e-06, 'formation': 1.0144444444444444e-06} | not captured | AR-C124910XX = compartment M1 with its own numbers |
| T3_metabolite_output[AR-C124910XX] | not captured | pass | not captured | 7.186543637316374e-05 | not captured | C_M1 (AR-C124910XX) must rise above 0 when the parent is dosed |
| T3_molar_mass[AR-C124910XX] | not captured | pass | not captured | {'MW': 0.522568, 'MW_m1': 0.478518} | not captured | formation is molecule-for-molecule |
| T3_output_variable | not captured | pass | C_central (measured=ticagrelor) | C_central | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | fail | 10 scholar param(s) emitted or defaulted | 4 covered | not captured | neither emitted nor in defaulted[]: ['Q/F', 'V1/F', 'V2/F', 'Q/F', 'V1/F', 'V2/F'] |
| T3_topology_template | not captured | pass | parent_metabolite_central → PK_3M_9C* | PK_3M_9C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 2096 | 0.00035783688727179276 | not captured | unresolved concentration unit (exp 'nmol l–1', sim 'kg/m3') |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_ticagrelor/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Åstrand_2019` / `Åstrand_2019::reference`)
- model: `../../../knowledgebase/drugs/drug_ticagrelor/models/modelica/Ticagrelor_strand2019_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_ticagrelor/models/modelica/Ticagrelor_strand2019_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_ticagrelor/models/modelica/Ticagrelor_strand2019_reference.json`


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
</div><figure class="pk-models-diagram"><img src="drugs/drug_ticagrelor/Ticagrelor_strand2019_reference/Ticagrelor_strand2019_reference.svg" alt="Ticagrelor_strand2019_reference diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v26.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 60 mg, single dose, first-order absorption (ka 10.1 /h, lag 28.8 min, F 1). Doses in the paper: 60, 90, 180 mg.

<dbs-fmusim paramsurl="drugs/drug_ticagrelor/Ticagrelor_strand2019_reference/Ticagrelor_strand2019_reference_params.json" metaurl="assets/fmu/PK_3M_9C.vr.json" wasmurl="assets/fmu/PK_3M_9C.js" controlsurl="drugs/drug_ticagrelor/Ticagrelor_strand2019_reference/Ticagrelor_strand2019_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_3M_9C` · parameters `Ticagrelor_strand2019_reference_params.json` · controls `Ticagrelor_strand2019_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-26 20:38 UTC</sub>
