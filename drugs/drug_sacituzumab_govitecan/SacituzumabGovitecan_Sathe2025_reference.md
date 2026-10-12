<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;sacituzumab govitecan&quot;,&quot;href&quot;:&quot;drugs/drug_sacituzumab_govitecan/&quot;},{&quot;label&quot;:&quot;Sathe_2025 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sacituzumab govitecan — `SacituzumabGovitecan_Sathe2025_reference`

> ## <span class="pk-badge pk-badge--orange" title="covariates_not_exercised: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves. · molar_mass_missing:free SN-38: a molar mass is missing: the model forms 1 mg of metabolite per mg of parent converted, not one molecule per molecule">needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A model was generated (see the **Models** tab); it has no in-browser simulator.

> **Caveats:**

> - `covariates_not_exercised` — the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.
> - `molar_mass_missing:free SN-38` — a molar mass is missing: the model forms 1 mg of metabolite per mg of parent converted, not one molecule per molecule

### Reviewer guidance

**Free SN-38 metabolite parameters were not extracted, leaving its compartment undefined, and absorption defaults were used without source support.**

Although the record lists values for free SN-38 clearance and volume, no values were extracted for the model, so library placeholders were used and the metabolite's compartment remained undefined. The absorption rate constant was not reported in the source paper, so library defaults were substituted for the missing estimate. The covariate effects defined in the record were not exercised during simulation, leaving their impact on the model unverified. Extracted — sacituzumab govitecan: CL 0.128 L/h, Q 0.00513 L/h, V1 2.65 L, V2 0.929 L; free SN-38: kfm 0.0937 1/h, CL/F 401 L/h, Q/F 243 L/h, V1/F 49 L, V2/F 2.18e+03 L; total antibody: CL 0.0155 L/h, Q 0.0105 L/h, V1 2.97 L, V2 1.32 L.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

## Citation
Sathe AG et al., Sacituzumab Govitecan Population Pharma…, Clinical and translational… (2025)
  ·  DOI: [10.1111/cts.70291](https://doi.org/10.1111/cts.70291)

<div class="pk-model-meta" hidden drug="sacituzumab govitecan" model-id="SacituzumabGovitecan_Sathe2025_reference" status="needs_review" stale="false" population="patients with HR+/HER2− mBC, mTNBC, or other solid tumors" measured-compound="sacituzumab_govitecan" parameterization="apparent" topology="parent_metabolite"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 13 extracted, plus 8 covariate effects.

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CLSG, L/h | `Q22` · CL | 0.128 | L/h | 3.5555555555555554e-08 | [l] / [h] | 1.01 | llm (0.6) | cts70291-tbl-0002:row1:col1, cts70291-tbl-0002:row1:col2 | — | not captured |
| QSG, L/h | `Q30` · Q | 0.00513 | L/h | 1.425e-09 | [l] / [h] | 3.07 | llm (0.6) | cts70291-tbl-0002:row2:col1, cts70291-tbl-0002:row2:col2 | — | not captured |
| V1SG, L | `Q63` · V1 | 2.650 | L | 0.00265 | [l] | 0.87 | exact (1.0) | cts70291-tbl-0002:row3:col1, cts70291-tbl-0002:row3:col2 | — | not captured |
| V2SG, L | `Q64` · V2 | 0.929 | L | 0.000929 | [l] | 3.29 | exact (1.0) | cts70291-tbl-0002:row4:col1, cts70291-tbl-0002:row4:col2 | — | not captured |
| baseline_serum_albumin_exponent_on_clsg | `Q900` · baseline_serum_albumin_exponent_on_clsg | -0.395 | not captured | not captured | not captured | 14.9 | not captured (not captured) | cts70291-tbl-0002:row8:col1, cts70291-tbl-0002:row8:col2 | — | not captured |
| Log (KREL), 1/h | `Q305` · kfm | 0.0937 | 1/h | 2.602777777777778e-05 | [1] / [h] | 2.61 | exact (1.0) | Sathe_2025_table_3:row0:col1, Sathe_2025_table_3:row0:col2, Sathe_2025_table_3:row0:col3 | — | not captured |
| Log (CLSN38/F), L/h | `Q27` · CL/F | 401 | L/h | 0.0001113888888888889 | [l] / [h] | 1.05 | exact (1.0) | Sathe_2025_table_3:row1:col1, Sathe_2025_table_3:row1:col2, Sathe_2025_table_3:row1:col3 | — | not captured |
| Log (QSN38/F), L/h | `Q69` · Q/F | 243 | L/h | 6.75e-05 | [l] / [h] | 0.47 | exact (1.0) | Sathe_2025_table_3:row2:col1, Sathe_2025_table_3:row2:col2, Sathe_2025_table_3:row2:col3 | — | not captured |
| V1SN38/F, L b | `Q290` · V1/F | 49.0 | L | 0.049 | L | not captured | exact (1.0) | Sathe_2025_table_3:row3:col1, Sathe_2025_table_3:row3:col2 | — | not captured |
| V2SN38/F, L b | `Q82` · V2/F | 2177 | L | 2.177 | L | not captured | exact (1.0) | Sathe_2025_table_3:row4:col1, Sathe_2025_table_3:row4:col2 | — | not captured |
| CLtAB, L/h | `Q22` · CL | 0.0155 | L/h | 4.3055555555555555e-09 | [l] / [h] | 2.76 | llm (0.6) | Sathe_2025_table_4:row0:col1, Sathe_2025_table_4:row0:col2 | — | not captured |
| QtAB, L/h | `Q30` · Q | 0.0105 | L/h | 2.916666666666667e-09 | [l] / [h] | 9.62 | llm (0.6) | Sathe_2025_table_4:row1:col1, Sathe_2025_table_4:row1:col2 | — | not captured |
| V1tAB, L | `Q63` · V1 | 2.97 | L | 0.0029700000000000004 | [l] | 1.18 | exact (1.0) | Sathe_2025_table_4:row2:col1, Sathe_2025_table_4:row2:col2 | — | not captured |
| V2tAB, L | `Q64` · V2 | 1.32 | L | 0.00132 | [l] | 10.9 | exact (1.0) | Sathe_2025_table_4:row3:col1, Sathe_2025_table_4:row3:col2 | — | not captured |
| baseline_serum_albumin_exponent_on_cltab | `Q900` · baseline_serum_albumin_exponent_on_cltab | -0.734 | not captured | not captured | not captured | 20.2 | not captured (not captured) | Sathe_2025_table_4:row6:col1, Sathe_2025_table_4:row6:col2 | — | not captured |
| male_sex_on_v1tab | `Q900` · male_sex_on_v1tab | 0.153 | not captured | not captured | not captured | 23.5 | not captured (not captured) | Sathe_2025_table_4:row8:col1, Sathe_2025_table_4:row8:col2 | — | not captured |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 0.523 | not captured | not captured | not captured | 6.77 | not captured (not captured) | cts70291-tbl-0002:row6:col1, cts70291-tbl-0002:row6:col2 | — | not captured |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 0.540 | not captured | not captured | not captured | 6.28 | not captured (not captured) | cts70291-tbl-0002:row7:col1, cts70291-tbl-0002:row7:col2 | — | not captured |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 0.519 | not captured | not captured | not captured | 13.3 | not captured (not captured) | Sathe_2025_table_3:row7:col1, Sathe_2025_table_3:row7:col2 | — | not captured |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 0.422 | not captured | not captured | not captured | 10.2 | not captured (not captured) | Sathe_2025_table_4:row4:col1, Sathe_2025_table_4:row4:col2 | — | not captured |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 0.458 | not captured | not captured | not captured | 2.26 | not captured (not captured) | Sathe_2025_table_4:row5:col1, Sathe_2025_table_4:row5:col2 | — | not captured |

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
- covariate level 'Baseline serum albumin exponent on CLSG' → Q900:baseline_serum_albumin_exponent_on_clsg = -0.395 (power on Q22)
- covariate level 'Baseline serum albumin exponent on CLtAB' → Q900:baseline_serum_albumin_exponent_on_cltab = -0.734 (power on Q22)
- dropped unlinked row (NIL): 'Other cancer type on CLtAB' — extend the ontology if this is a real PK parameter (source ['Sathe_2025_table_4:row7:col1', 'Sathe_2025_table_4:row7:col2'])
- covariate level 'Male sex on V1tAB' → Q900:male_sex_on_v1tab = 0.153 (linear_fractional on Q22)
- dropped unlinked row (NIL): 'Maximum relative reduction of CLtAB, %' — extend the ontology if this is a real PK parameter (source ['Sathe_2025_table_4:row10:col1', 'Sathe_2025_table_4:row10:col2'])
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'V1SN38/F, L b' → L (from the paper text: "The text states: 'V1SN38/F and V2SN38/F were fixed to the values reported in the literature (49 L and 2177 L, respective")
- implicit units: 'V2SN38/F, L b' → L (from the paper text: "The text states: 'V1SN38/F and V2SN38/F were fixed to the values reported in the literature (49 L and 2177 L, respective")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=sacituzumab_govitecan
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [2]
- row roles (LLM): model_class=compartmental; 41/41 row label(s) assigned, 29 linked by role; re-tagged parent→free SN-38 ×32, parent→total antibody ×34
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- companion parameter table 3 transcribed (32 record(s))
- companion parameter table 4 transcribed (36 record(s))
- LLM selected parameter table(s) 2, 3, 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 13 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cts70291-tbl-0002:row1:col1', 'cts70291-tbl-0002:row1:col2'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Sathe_2025_table_4:row0:col1', 'Sathe_2025_table_4:row0:col2'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Sathe_2025_table_3:row1:col1', 'Sathe_2025_table_3:row1:col2', 'Sathe_2025_table_3:row1:col3'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Sathe_2025_table_3:row3:col1', 'Sathe_2025_table_3:row3:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cts70291-tbl-0002:row2:col1', 'cts70291-tbl-0002:row2:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Sathe_2025_table_4:row1:col1', 'Sathe_2025_table_4:row1:col2'] |
| C5_dimension_Q305 | pass | 1 / [time] | not captured | not captured | not captured | ['Sathe_2025_table_3:row0:col1', 'Sathe_2025_table_3:row0:col2', 'Sathe_2025_table_3:row0:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['cts70291-tbl-0002:row3:col1', 'cts70291-tbl-0002:row3:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Sathe_2025_table_4:row2:col1', 'Sathe_2025_table_4:row2:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['cts70291-tbl-0002:row4:col1', 'cts70291-tbl-0002:row4:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Sathe_2025_table_4:row3:col1', 'Sathe_2025_table_4:row3:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Sathe_2025_table_3:row2:col1', 'Sathe_2025_table_3:row2:col2', 'Sathe_2025_table_3:row2:col3'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Sathe_2025_table_3:row4:col1', 'Sathe_2025_table_3:row4:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.128 L/h | not captured | not captured | ['cts70291-tbl-0002:row1:col1', 'cts70291-tbl-0002:row1:col2'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0155 L/h | not captured | not captured | ['Sathe_2025_table_4:row0:col1', 'Sathe_2025_table_4:row0:col2'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 401 L/h | not captured | not captured | ['Sathe_2025_table_3:row1:col1', 'Sathe_2025_table_3:row1:col2', 'Sathe_2025_table_3:row1:col3'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 49 L | not captured | not captured | ['Sathe_2025_table_3:row3:col1', 'Sathe_2025_table_3:row3:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 2.65 L | not captured | not captured | ['cts70291-tbl-0002:row3:col1', 'cts70291-tbl-0002:row3:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 2.97 L | not captured | not captured | ['Sathe_2025_table_4:row2:col1', 'Sathe_2025_table_4:row2:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 0.929 L | not captured | not captured | ['cts70291-tbl-0002:row4:col1', 'cts70291-tbl-0002:row4:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 1.32 L | not captured | not captured | ['Sathe_2025_table_4:row3:col1', 'Sathe_2025_table_4:row3:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 2.18e+03 L | not captured | not captured | ['Sathe_2025_table_3:row4:col1', 'Sathe_2025_table_3:row4:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_metabolite_built[free SN-38] | not captured | fail | own V, CL and formation clearance &gt; 0 | {'V': 0, 'CL': 0, 'formation': 0} | not captured | free SN-38: V, CL, formation not set — the metabolite's compartment would be the template default |
| T3_metabolite_output[free SN-38] | not captured | skipped | not captured | not captured | not captured | the simulation recorded no per-molecule outputs |
| T3_molar_mass[free SN-38] | not captured | fail | not captured | {'MW': 0, 'MW_m1': 0} | not captured | a molar mass is missing: the model forms 1 mg of metabolite per mg of parent converted, not one molecule per molecule |
| T3_param_coverage | not captured | fail | 12 scholar param(s) emitted or defaulted | 11 covered | not captured | neither emitted nor in defaulted[]: ['V2/F'] |
| T3_rate_constant_conversion | not captured | pass | Kfm (rate_constant) → CL = k·V | no explicit k·V edge found in model | not captured | rate constant must not be used raw as a clearance |
| T3_topology_template | not captured | fail | parent_metabolite_central → PK_3M_9C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable; invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_sacituzumab_govitecan/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Sathe_2025` / `Sathe_2025::reference`)
- model: `../../../knowledgebase/drugs/drug_sacituzumab_govitecan/models/modelica/SacituzumabGovitecan_Sathe2025_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_sacituzumab_govitecan/models/modelica/SacituzumabGovitecan_Sathe2025_reference.deviation.json`


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 19:58 UTC</sub>
