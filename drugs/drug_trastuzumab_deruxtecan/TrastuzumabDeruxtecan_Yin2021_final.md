<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;trastuzumab deruxtecan&quot;,&quot;href&quot;:&quot;drugs/drug_trastuzumab_deruxtecan/&quot;},{&quot;label&quot;:&quot;Yin_2021 \u00b7 final&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;TrastuzumabDeruxtecan_Yin2021_final&quot;,&quot;label&quot;:&quot;Yin_2021_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trastuzumab_deruxtecan/TrastuzumabDeruxtecan_Yin2021_final.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# trastuzumab deruxtecan — `TrastuzumabDeruxtecan_Yin2021_final`

> ## <span class="pk-badge pk-badge--red" title="covariates_not_exercised: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.304). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

> **Caveat** (`covariates_not_exercised`): the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.

### Reviewer guidance

**The record was rejected because the simulated output was the parent drug instead of the measured metabolite, and the model structure lacked the peripheral compartment.**

The output variable was the central compartment concentration of the parent drug, whereas the measured compound was the released drug metabolite. The model topology was a one-compartment structure, which does not match the parent-metabolite structure requiring a peripheral compartment. Additionally, the covariate scenarios were not simulated, so the defined covariate effects were not exercised. Extracted — trastuzumab deruxtecan: CL 0.421 L/day, V1 2.77 L, Q 0.199 L/day, V2 5.16 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has trastuzumab_deruxtecan, the second reading unknown; it also differs on 15 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8:27b-mtp-q8_0</sub>

## Citation
Yin O et al., Population Pharmacokinetics of Trastuzu…, Clinical pharmacology and t… (2021)
  ·  DOI: [10.1002/cpt.2096](https://doi.org/10.1002/cpt.2096)

<div class="pk-model-meta" hidden drug="trastuzumab deruxtecan" model-id="TrastuzumabDeruxtecan_Yin2021_final" status="rejected" stale="false" population="patients with HER2-positive breast cancer and other solid tumors" measured-compound="trastuzumab_deruxtecan" parameterization="mechanistic" topology="parent_metabolite"></div>

**Model structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameters:** 4 extracted, plus 7 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Clearance (CLintact, L/day) | `Q22` · CL | 0.421 | L/day | 4.872685185185185e-09 | [l] / [d] | not captured | exact (1.0) | cpt2096-tbl-0001:row3:col1, cpt2096-tbl-0001:row3:col2, cpt2096-tbl-0001:row3:col3, cpt2096-tbl-0001:row3:col4, cpt2096-tbl-0001:row3:col5 | — | not captured |
| Central volume of distribution (V1,intact, L) | `Q63` · V1 | 2.77 | L | 0.00277 | [l] | not captured | exact (1.0) | cpt2096-tbl-0001:row4:col1, cpt2096-tbl-0001:row4:col2, cpt2096-tbl-0001:row4:col3, cpt2096-tbl-0001:row4:col4, cpt2096-tbl-0001:row4:col5 | — | not captured |
| Distributional clearance (Qintact, L/day) | `Q30` · Q | 0.199 | L/day | 2.303240740740741e-09 | [l] / [d] | not captured | llm_corrected (0.6) | cpt2096-tbl-0001:row5:col1, cpt2096-tbl-0001:row5:col2, cpt2096-tbl-0001:row5:col3, cpt2096-tbl-0001:row5:col4, cpt2096-tbl-0001:row5:col5 | — | not captured |
| Peripheral volume of distribution (V2,intact, L) | `Q64` · V2 | 5.16 | L | 0.0051600000000000005 | [l] | not captured | exact (1.0) | cpt2096-tbl-0001:row6:col1, cpt2096-tbl-0001:row6:col2, cpt2096-tbl-0001:row6:col3, cpt2096-tbl-0001:row6:col4, cpt2096-tbl-0001:row6:col5 | — | not captured |
| albumin_on_clintact | `Q900` · albumin_on_clintact | -0.533 | not captured | not captured | not captured | not captured | not captured (not captured) | cpt2096-tbl-0001:row7:col1, cpt2096-tbl-0001:row7:col2 | — | not captured |
| country_japan_on_clintact_d | `Q900` · country_japan_on_clintact_d | -0.0970 | not captured | not captured | not captured | not captured | not captured (not captured) | cpt2096-tbl-0001:row8:col1, cpt2096-tbl-0001:row8:col2 | — | not captured |
| sex_male_on_clintact | `Q900` · sex_male_on_clintact | 0.174 | not captured | not captured | not captured | not captured | not captured (not captured) | cpt2096-tbl-0001:row9:col1, cpt2096-tbl-0001:row9:col2 | — | not captured |
| body_weight_on_clintact | `Q900` · body_weight_on_clintact | 0.370 | not captured | not captured | not captured | not captured | not captured (not captured) | cpt2096-tbl-0001:row11:col1, cpt2096-tbl-0001:row11:col2 | — | not captured |
| sex_male_on_v1_intact | `Q900` · sex_male_on_v1_intact | 0.197 | not captured | not captured | not captured | not captured | not captured (not captured) | cpt2096-tbl-0001:row12:col1, cpt2096-tbl-0001:row12:col2 | — | not captured |
| country_japan_on_v2_intact_d | `Q900` · country_japan_on_v2_intact_d | -0.262 | not captured | not captured | not captured | not captured | not captured (not captured) | cpt2096-tbl-0001:row14:col1, cpt2096-tbl-0001:row14:col2 | — | not captured |
| theta_v1_body_weight | `Q900` · theta_v1_body_weight | 0.489 | not captured | not captured | not captured | not captured | not captured (not captured) | cpt2096-tbl-0001:row13:col1, cpt2096-tbl-0001:row13:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'Proportional residual error SD' routed out of structural estimates ('Residual variability e')
- table section residual_error: 'Additive residual error SD (ng/mL)' routed out of structural estimates ('Residual variability e')
- covariate level 'Albumin on CLintact' → Q900:albumin_on_clintact = -0.533 (linear_fractional on Q22)
- covariate level 'Country (Japan) on CLintact d' → Q900:country_japan_on_clintact_d = -0.0970 (linear_fractional on Q22)
- covariate level 'Sex (male) on CLintact' → Q900:sex_male_on_clintact = 0.174 (linear_fractional on Q22)
- dropped unlinked row (NIL): 'Tumor size on CLintact' — extend the ontology if this is a real PK parameter (source ['cpt2096-tbl-0001:row10:col1', 'cpt2096-tbl-0001:row10:col2'])
- covariate level 'Body weight on CLintact' → Q900:body_weight_on_clintact = 0.370 (linear_fractional on Q22)
- covariate level 'Sex (male) on V1,intact' → Q900:sex_male_on_v1_intact = 0.197 (linear_fractional on Q22)
- covariate level 'Country (Japan) on V2,intact d' → Q900:country_japan_on_v2_intact_d = -0.262 (linear_fractional on Q22)
- routed 'Variance of CLintact' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- dropped duplicate Q63 ('Variance of V1,intact', value '0.0250') — already have one for this compound
- routed 'Variance of Qintact' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- dropped duplicate Q64 ('Variance of V2,intact', value '0.430') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=trastuzumab_deruxtecan
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [0]
- status held at route_to_review — not promoted
- model-stage split: 'final intact t‐dxd model' is the final model of Yin_2021 (paper reports 2 stages: final intact t‐dxd model, final released‐drug model); same population, different model-building step
- row roles: 4 per-group rows of trastuzumab_deruxtecan covariate_effect but 0 reference group(s) — kept as printed
- row roles: 2 per-group rows of released drug covariate_effect but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 36/36 row label(s) assigned, 57 linked by role; re-tagged trastuzumab_deruxtecan→parent ×105, trastuzumab_deruxtecan→released drug ×102
- molar mass: none found for 'trastuzumab_deruxtecan' — its concentrations stay mass-only
- engineer: parent → metabolite not buildable on PK_3M_9C (None) — the measured compound's 1-compartment model instead

**Extraction notes:**
- unparsed cell cpt2096-tbl-0001:row7:col7 = '–0.686 to −0.315'
- unparsed cell cpt2096-tbl-0001:row8:col7 = '–0.148 to −0.0468'
- unparsed cell cpt2096-tbl-0001:row14:col7 = '–0.397 to −0.0759'
- unparsed cell Yin_2021_table_2:row3:col1 = 'Fixed 17•BSA'
- unparsed cell Yin_2021_table_2:row3:col6 = 'Fixed 17•BSA'
- unparsed cell Yin_2021_table_2:row3:col8 = 'Fixed 17•BSA'
- unparsed cell Yin_2021_table_2:row6:col7 = '–0.160 to −0.114'
- unparsed cell Yin_2021_table_2:row7:col7 = '–0.236 to −0.0177'
- unparsed cell Yin_2021_table_2:row8:col7 = '–0.159 to −0.0535'
- unparsed cell Yin_2021_table_2:row9:col7 = '–0.290 to −0.150'
- unparsed cell Yin_2021_table_2:row10:col7 = '–0.294 to −0.128'
- unparsed cell Yin_2021_table_2:row14:col7 = '–0.289 to −0.124'
- companion parameter table 2 transcribed (108 record(s), model stage 'final')
- LLM selected parameter table(s) 1, 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.304 (7/23 fields) | 16 |

<details><summary>16 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['trastuzumab_deruxtecan', 'released drug', 'metabolism']] | [['trastuzumab deruxtecan', 'released drug', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[albumin_on_clintact]` | -0.533 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[central volume of distribution].covariate_forms` | ['linear_fractional'] | ['linear_fractional', 'linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[clearance].covariate_forms` | ['linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional'] | ['linear_fractional', 'linear_fractional', 'linear_fractional', 'linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[country_japan_on_clintact_d]` | -0.0970 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[country_japan_on_v2_intact_d]` | -0.262 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[peripheral volume of distribution].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[sex_male_on_clintact]` | 0.174 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[sex_male_on_v1_intact]` | 0.197 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_albumin]` | not captured | -0.533 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_country]` | not captured | -0.0970 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_cl_sex]` | not captured | 0.174 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v1_sex]` | not captured | 0.197 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_v2_country]` | not captured | -0.262 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | trastuzumab_deruxtecan | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | trastuzumab_deruxtecan | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cpt2096-tbl-0001:row3:col1', 'cpt2096-tbl-0001:row3:col2', 'cpt2096-tbl-0001:row3:col3', 'cpt2096-tbl-0001:row3:col4', 'cpt2096-tbl-0001:row3:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cpt2096-tbl-0001:row5:col1', 'cpt2096-tbl-0001:row5:col2', 'cpt2096-tbl-0001:row5:col3', 'cpt2096-tbl-0001:row5:col4', 'cpt2096-tbl-0001:row5:col5'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['cpt2096-tbl-0001:row4:col1', 'cpt2096-tbl-0001:row4:col2', 'cpt2096-tbl-0001:row4:col3', 'cpt2096-tbl-0001:row4:col4', 'cpt2096-tbl-0001:row4:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['cpt2096-tbl-0001:row6:col1', 'cpt2096-tbl-0001:row6:col2', 'cpt2096-tbl-0001:row6:col3', 'cpt2096-tbl-0001:row6:col4', 'cpt2096-tbl-0001:row6:col5'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.421 | not captured | not captured | ['cpt2096-tbl-0001:row3:col1', 'cpt2096-tbl-0001:row3:col2', 'cpt2096-tbl-0001:row3:col3', 'cpt2096-tbl-0001:row3:col4', 'cpt2096-tbl-0001:row3:col5'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0175 L/h | not captured | not captured | ['cpt2096-tbl-0001:row3:col1', 'cpt2096-tbl-0001:row3:col2', 'cpt2096-tbl-0001:row3:col3', 'cpt2096-tbl-0001:row3:col4', 'cpt2096-tbl-0001:row3:col5'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 2.77 L | not captured | not captured | ['cpt2096-tbl-0001:row4:col1', 'cpt2096-tbl-0001:row4:col2', 'cpt2096-tbl-0001:row4:col3', 'cpt2096-tbl-0001:row4:col4', 'cpt2096-tbl-0001:row4:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 5.16 L | not captured | not captured | ['cpt2096-tbl-0001:row6:col1', 'cpt2096-tbl-0001:row6:col2', 'cpt2096-tbl-0001:row6:col3', 'cpt2096-tbl-0001:row6:col4', 'cpt2096-tbl-0001:row6:col5'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_output_variable | not captured | fail | Metabolite_C (measured=trastuzumab_deruxtecan) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 4 scholar param(s) emitted or defaulted | 4 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | fail | parent_metabolite → PK_3M_9C* | PK_1C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |
| T1_cmin_ss | reference | skipped | 23 | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_trastuzumab_deruxtecan/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Yin_2021` / `Yin_2021::final`)
- model: `../../../knowledgebase/drugs/drug_trastuzumab_deruxtecan/models/modelica/TrastuzumabDeruxtecan_Yin2021_final.mo`
- deviation: `../../../knowledgebase/drugs/drug_trastuzumab_deruxtecan/models/modelica/TrastuzumabDeruxtecan_Yin2021_final.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_trastuzumab_deruxtecan/models/modelica/TrastuzumabDeruxtecan_Yin2021_final.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: intravenous** — 56 mg infusion over 10 min, single dose. Doses in the paper: 56–560 mg.

<dbs-fmusim paramsurl="drugs/drug_trastuzumab_deruxtecan/TrastuzumabDeruxtecan_Yin2021_final/TrastuzumabDeruxtecan_Yin2021_final_params.json" metaurl="assets/fmu/PK_1C.vr.json" wasmurl="assets/fmu/PK_1C.js" controlsurl="drugs/drug_trastuzumab_deruxtecan/TrastuzumabDeruxtecan_Yin2021_final/TrastuzumabDeruxtecan_Yin2021_final_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_1C` · parameters `TrastuzumabDeruxtecan_Yin2021_final_params.json` · controls `TrastuzumabDeruxtecan_Yin2021_final_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 21:35 UTC</sub>
