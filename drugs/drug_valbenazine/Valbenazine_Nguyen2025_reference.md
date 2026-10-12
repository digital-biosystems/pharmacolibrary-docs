<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07X&quot;,&quot;href&quot;:&quot;atc/N07X.md&quot;},{&quot;label&quot;:&quot;valbenazine&quot;,&quot;href&quot;:&quot;drugs/drug_valbenazine/&quot;},{&quot;label&quot;:&quot;Nguyen_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Valbenazine_Nguyen2025_reference&quot;,&quot;label&quot;:&quot;Nguyen_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_valbenazine/Valbenazine_Nguyen2025_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# valbenazine — `Valbenazine_Nguyen2025_reference`

> ## <span class="pk-badge pk-badge--red" title="covariates_not_exercised: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.657). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

> **Caveat** (`covariates_not_exercised`): the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.

### Reviewer guidance

**The valbenazine parent–metabolite record for [+]-α-HTBZ was rejected because the model was built as a one-compartment enteral model instead of the three-compartment parent–metabolite structure, the output was taken from the parent rather than the measured metabolite, and the peripheral volumes V2/F (198 L) and V2 (97.8 L) were never set.**

The structure check expected a three-compartment parent–metabolite model but obtained a one-compartment enteral model, and the simulated output was the parent's central compartment rather than the measured metabolite [+]-α-HTBZ. Parameter coverage reached only 6 of 8 expected parameters, with the peripheral volumes V2/F (198 L) and V2 (97.8 L) neither estimated nor defaulted. The model builder left the absorption lag time (Tlag) at a default instead of an explicit estimate, assumed F=1 and Fm=1 without molar correction, and one parameter's reported unit could not be converted to SI so it lacked an SI value. The covariate effects on metabolite clearance (poor metabolizer −0.516, intermediate metabolizer −0.281) were defined but not simulated; only the reference individual was run. Extracted — valbenazine: CL/F 23.2 L/h, V1/F 226 L, kabs 8.43 per hour, Q/F 22 L/h, V2/F 198 L, Frel 1.36 relative to 1 mg, fm 0.207 Units; [+]-α-HTBZ: CL 31 L/h, Q 1.27 L/h, V2 97.8 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which molecule was measured: this record has [+]-α-HTBZ, the second reading valbenazine; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> **Dose compound ≠ measured compound:** dosed `valbenazine`, measured `[+]-α-HTBZ`.

## Citation
Nguyen HQ et al., Population Pharmacokinetic and Exposure…, Journal of clinical pharmac… (2025)
  ·  DOI: [10.1002/jcph.70092](https://doi.org/10.1002/jcph.70092)

<div class="pk-model-meta" hidden drug="valbenazine" model-id="Valbenazine_Nguyen2025_reference" status="rejected" stale="false" population="healthy subjects and patients with tardive dyskinesia and Huntington&#39;s disease chorea" measured-compound="[+]-α-HTBZ" parameterization="apparent" topology="parent_metabolite"></div>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 10 extracted, plus 2 covariate effects.

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 CLP/F (L/h) | `Q27` · CL/F | 23.2 | L/h | 6.444444444444444e-06 | [l] / [h] | 3.95 | exact (1.0) | jcph70092-tbl-0001:row1:col1, jcph70092-tbl-0001:row1:col2 | — | not captured |
| 2 VC/F (L) | `Q290` · V1/F | 226 | L | 0.226 | [l] | 4.49 | exact (1.0) | jcph70092-tbl-0001:row2:col1, jcph70092-tbl-0001:row2:col2 | — | not captured |
| 3 KA (per hour) | `Q49` · kabs | 8.43 | per hour | 0.0023416666666666664 | [1] / [h] | 3.84 | exact (1.0) | jcph70092-tbl-0001:row3:col1, jcph70092-tbl-0001:row3:col2 | — | not captured |
| 4 QP/F (L/h) | `Q69` · Q/F | 22.0 | L/h | 6.11111111111111e-06 | [l] / [h] | 4.35 | exact (1.0) | jcph70092-tbl-0001:row4:col1, jcph70092-tbl-0001:row4:col2 | — | not captured |
| 5 VPP/F (L) | `Q82` · V2/F | 198 | L | 0.198 | [l] | 3.44 | exact (1.0) | jcph70092-tbl-0001:row5:col1, jcph70092-tbl-0001:row5:col2 | — | not captured |
| 6 Fmax (relative to 1 mg) | `Q87` · Frel | 1.36 | relative to 1 mg | not captured | [mg] · [relativeto1] | 10.9 | llm (0.6) | jcph70092-tbl-0001:row6:col1, jcph70092-tbl-0001:row6:col2 | — | not captured |
| 13 CLM (L/h) | `Q22` · CL | 31.0 | L/h | 8.611111111111112e-06 | [l] / [h] | 4.99 | exact (1.0) | jcph70092-tbl-0001:row11:col1, jcph70092-tbl-0001:row11:col2 | — | not captured |
| 14 FM | `Q45` · fm | 0.207 | Units | not captured | [units] | 1.91 | llm_confirmed (0.6) | jcph70092-tbl-0001:row12:col1, jcph70092-tbl-0001:row12:col2 | — | not captured |
| 15 QM (L/h) | `Q30` · Q | 1.27 | L/h | 3.527777777777778e-07 | [l] / [h] | 7.60 | exact (1.0) | jcph70092-tbl-0001:row13:col1, jcph70092-tbl-0001:row13:col2 | — | not captured |
| 16 VPM (L) | `Q64` · V2 | 97.8 | L | 0.0978 | [l] | 7.12 | exact (1.0) | jcph70092-tbl-0001:row14:col1, jcph70092-tbl-0001:row14:col2 | — | not captured |
| theta_cl_poor_metabolizer | `Q900` · theta_cl_poor_metabolizer | -0.516 | not captured | not captured | not captured | 12.3 | not captured (not captured) | jcph70092-tbl-0001:row15:col1, jcph70092-tbl-0001:row15:col2 | — | not captured |
| theta_q314_intermediate_metabolizer | `Q900` · theta_q314_intermediate_metabolizer | -0.281 | not captured | not captured | not captured | 15.3 | not captured (not captured) | jcph70092-tbl-0001:row16:col1, jcph70092-tbl-0001:row16:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section residual_error: '11 Log additive (parent, rich)' routed out of structural estimates ('Residual variability (%)')
- table section residual_error: '12 Log additive (parent, sparse)' routed out of structural estimates ('Residual variability (%)')
- table section residual_error: '19 Log additive (metabolite, rich)' routed out of structural estimates ('Residual variability (%)')
- table section residual_error: '20 Log additive (metabolite, sparse)' routed out of structural estimates ('Residual variability (%)')
- unit_dimension_unknown: 'relative to 1 mg' (Frel)
- dropped PD-category row '7 ED50 (mg)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['jcph70092-tbl-0001:row7:col1', 'jcph70092-tbl-0001:row7:col2'])
- routed '8 Solution on KA' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- dropped unlinked row (NIL): '9 Fed status on KA' — extend the ontology if this is a real PK parameter (source ['jcph70092-tbl-0001:row9:col1', 'jcph70092-tbl-0001:row9:col2'])
- dropped unlinked row (NIL): '10 Fed status on F1' — extend the ontology if this is a real PK parameter (source ['jcph70092-tbl-0001:row10:col1', 'jcph70092-tbl-0001:row10:col2'])
- dropped unlinked row (NIL): '21 WT on CLP' — extend the ontology if this is a real PK parameter (source ['jcph70092-tbl-0001:row17:col1', 'jcph70092-tbl-0001:row17:col2'])
- dropped unlinked row (NIL): '22 WT on VCP' — extend the ontology if this is a real PK parameter (source ['jcph70092-tbl-0001:row18:col1', 'jcph70092-tbl-0001:row18:col2'])
- covariate effect for Q314 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=[+]-α-HTBZ
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [0]
- status held at route_to_review — not promoted
- row roles: 2 per-group rows of [+]-α-HTBZ covariate_effect but 0 reference group(s) — kept as printed
- row roles: 2 per-group rows of valbenazine residual_error but 0 reference group(s) — kept as printed
- row roles: 2 per-group rows of [+]-α-HTBZ residual_error but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 22/22 row label(s) assigned, 16 linked by role; re-tagged parent→[+]-α-HTBZ ×14
- molar mass: no plausible PubChem entry for '[+]-α-dihydrotetrabenazine ([+]-α-HTBZ)' ('[+]-α-HTBZ') — left in mass units
- molar mass: no plausible PubChem entry for '[+]-α-HTBZ' ('[+]-α-HTBZ') — left in mass units
- molar mass: none found for '[+]-α-dihydrotetrabenazine ([+]-α-HTBZ)' — its concentrations stay mass-only
- molar mass: none found for '[+]-α-HTBZ' — its concentrations stay mass-only
- review gap-fill skipped: this record measures '[+]-α-HTBZ', not valbenazine — the review values are the parent's
- engineer: parent_metabolite composite downgraded to a 1C model of the measured compound — the paper reports the metabolite's own CL and V but neither the parent's disposition nor a formation rate, so the parent sub-component could not be populated; the parent's concentration-time course is NOT produced by this model

**Extraction notes:**
- unparsed cell jcph70092-tbl-0001:row1:col3 = '(21.4, 25.0)'
- unparsed cell jcph70092-tbl-0001:row2:col3 = '(206, 246)'
- unparsed cell jcph70092-tbl-0001:row3:col3 = '(7.79, 9.06)'
- unparsed cell jcph70092-tbl-0001:row4:col3 = '(20.1, 23.9)'
- unparsed cell jcph70092-tbl-0001:row5:col3 = '(185, 211)'
- unparsed cell jcph70092-tbl-0001:row6:col3 = '(1.07, 1.65)'
- unparsed cell jcph70092-tbl-0001:row7:col3 = '(49.6, 131)'
- unparsed cell jcph70092-tbl-0001:row8:col3 = '(1.35, 1.68)'
- unparsed cell jcph70092-tbl-0001:row9:col3 = '(−0.696, −0.674)'
- unparsed cell jcph70092-tbl-0001:row10:col3 = '(−0.0901, −0.0391)'
- unparsed cell jcph70092-tbl-0001:row11:col3 = '(28.0, 34.1)'
- unparsed cell jcph70092-tbl-0001:row12:col3 = '(0.199, 0.214)'
- unparsed cell jcph70092-tbl-0001:row13:col3 = '(1.08, 1.45)'
- unparsed cell jcph70092-tbl-0001:row14:col3 = '(84.2, 111)'
- unparsed cell jcph70092-tbl-0001:row15:col3 = '(−0.641, −0.391)'
- unparsed cell jcph70092-tbl-0001:row16:col3 = '(−0.366, −0.197)'
- unparsed cell jcph70092-tbl-0001:row17:col3 = '(0.352, 0.852)'
- unparsed cell jcph70092-tbl-0001:row18:col3 = '(0.695, 1.39)'
- unparsed cell jcph70092-tbl-0001:row20:col3 = '(0.395, 0.410)'
- unparsed cell jcph70092-tbl-0001:row20:col4 = '40.2% (39.5%, 41.0%)'
- unparsed cell jcph70092-tbl-0001:row21:col3 = '(0.649, 0.708)'
- unparsed cell jcph70092-tbl-0001:row21:col4 = '67.8% (64.9%, 70.8%)'
- unparsed cell jcph70092-tbl-0001:row22:col3 = '(0.259, 0.270)'
- unparsed cell jcph70092-tbl-0001:row22:col4 = '26.4% (25.9%, 27.0%)'
- unparsed cell jcph70092-tbl-0001:row23:col3 = '(0.688, 0.752)'
- unparsed cell jcph70092-tbl-0001:row23:col4 = '72.0% (68.8%, 75.2%)'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `glm-5.3-flash` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.657 (23/35 fields) | 12 |

<details><summary>12 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[13 clm].covariate_forms` | ['linear_fractional'] | ['linear_fractional', 'linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[14 fm]` | 0.207 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[14 fm]` | not captured | 0.207 | only_one_extracted |
| `gpt-oss-120b` | `parameters[3 ka].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[6 fmax].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss-120b` | `parameters[theta_cl_intermediate_metabolizer]` | not captured | -0.281 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_frel_fed]` | not captured | -0.0646 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_kabs_fed]` | not captured | -0.685 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q22_wt]` | not captured | 0.602 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q314_intermediate_metabolizer]` | -0.281 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q63_wt]` | not captured | 1.04 | only_one_extracted |
| `gpt-oss-120b` | `screen.primary_analyte` | [+]-α-HTBZ | valbenazine | mismatch |

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
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['jcph70092-tbl-0001:row11:col1', 'jcph70092-tbl-0001:row11:col2'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['jcph70092-tbl-0001:row1:col1', 'jcph70092-tbl-0001:row1:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['jcph70092-tbl-0001:row2:col1', 'jcph70092-tbl-0001:row2:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['jcph70092-tbl-0001:row13:col1', 'jcph70092-tbl-0001:row13:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['jcph70092-tbl-0001:row3:col1', 'jcph70092-tbl-0001:row3:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['jcph70092-tbl-0001:row14:col1', 'jcph70092-tbl-0001:row14:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['jcph70092-tbl-0001:row4:col1', 'jcph70092-tbl-0001:row4:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['jcph70092-tbl-0001:row5:col1', 'jcph70092-tbl-0001:row5:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 31 L/h | not captured | not captured | ['jcph70092-tbl-0001:row11:col1', 'jcph70092-tbl-0001:row11:col2'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 23.2 L/h | not captured | not captured | ['jcph70092-tbl-0001:row1:col1', 'jcph70092-tbl-0001:row1:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 226 L | not captured | not captured | ['jcph70092-tbl-0001:row2:col1', 'jcph70092-tbl-0001:row2:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 97.8 L | not captured | not captured | ['jcph70092-tbl-0001:row14:col1', 'jcph70092-tbl-0001:row14:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 198 L | not captured | not captured | ['jcph70092-tbl-0001:row5:col1', 'jcph70092-tbl-0001:row5:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | fail | Metabolite_C (measured=[+]-α-HTBZ) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | fail | 8 scholar param(s) emitted or defaulted | 6 covered | not captured | neither emitted nor in defaulted[]: ['V2/F', 'V2'] |
| T3_topology_template | not captured | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 1.83 | 8.255690748872249e-05 | not captured | unresolved concentration unit (exp '', sim 'kg/m3') |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_valbenazine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Nguyen_2025` / `Nguyen_2025::reference`)
- model: `../../../knowledgebase/drugs/drug_valbenazine/models/modelica/Valbenazine_Nguyen2025_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_valbenazine/models/modelica/Valbenazine_Nguyen2025_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_valbenazine/models/modelica/Valbenazine_Nguyen2025_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 20 mg, single dose, first-order absorption (ka 8.43 /h, F 1). Doses in the paper: 20, 40, 60, 80 mg.

<dbs-fmusim paramsurl="drugs/drug_valbenazine/Valbenazine_Nguyen2025_reference/Valbenazine_Nguyen2025_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_valbenazine/Valbenazine_Nguyen2025_reference/Valbenazine_Nguyen2025_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_1C_enteral` · parameters `Valbenazine_Nguyen2025_reference_params.json` · controls `Valbenazine_Nguyen2025_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 05:03 UTC</sub>
