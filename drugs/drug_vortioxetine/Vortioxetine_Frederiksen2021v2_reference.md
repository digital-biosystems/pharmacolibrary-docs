<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;vortioxetine&quot;,&quot;href&quot;:&quot;drugs/drug_vortioxetine/&quot;},{&quot;label&quot;:&quot;Frederiksen_2021_2 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# vortioxetine — `Vortioxetine_Frederiksen2021v2_reference`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.769). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A model was built but held back: a core parameter had no value, so it is not published or simulated.

> **Caveat** (`covariates_not_exercised`): the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.

### Reviewer guidance

**The vortioxetine parent–metabolite model was quarantined because vortioxetine's bioavailability (F), clearance (CL) and absorption lag time (Tlag) had no extracted values and library placeholder values were substituted instead.**

The record lists kabs 0.160 1/h, V1 1510 L, Q 21.1 L/h and V2 571 L for vortioxetine, and kabs 0.281 1/h, fm 0.190, V1 155 L, CL 22.5 L/h, Q 7.69 L/h and V2 211 L for Lu AA34443, but F, CL and Tlag for the parent had no value, so placeholders stood in and the model was held back rather than published with invented numbers. The model structure also did not match the paper: a parent–metabolite hepatic structure with three compartments was expected, but a one-compartment enteral structure was obtained. The covariate effects defined in the record (e.g. theta_q370_cyp2d6 13.1 and theta_q22_cyp2c19 12.5) were not exercised in simulation, which simulated only the reference individual. A second reader additionally reported covariate parameters absent from this record, such as theta_cl_age 0.157 and theta_v3_height 1.48. Extracted — vortioxetine: kabs 0.16 1/h, V1 1.51e+03 L, Q 21.1 L/h, V2 571 L, tlag 0.966 h; Lu AA34443: kabs 0.281 1/h, fm 0.19, Q 7.69 L/h, V1 155 L, CL 22.5 L/h, V2 211 L.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on `parameters[lu aa34443 clearance, clmet].covariate_forms`: this record has ['linear_fractional'], the second reading ['linear_fractional', 'linear_fractional']; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `model_quarantined` (reviewed 2026-10-05 09:32:54.604512+00:00) predates the upstream re-run (2026-10-07 19:05:08.036904+00:00). Current validate status: `extracted`.

## Citation
Frederiksen T et al., Quantification of In Vivo Metabolic Act…, Clinical pharmacology and t… (2021)
  ·  DOI: [10.1002/cpt.1972](https://doi.org/10.1002/cpt.1972)

## Model component
<dbs-pgx drug="vortioxetine" model-id="Vortioxetine_Frederiksen2021v2_reference" status="extracted" stale="true" population="adults" measured-compound="vortioxetine" parameterization="mechanistic" topology="parent_metabolite"></dbs-pgx>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 11 extracted, plus 4 covariate effects.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Absorption rate constant, ka | `Q49` · kabs | 0.160 | 1/h | 4.4444444444444447e-05 | 1/h | 1.6 | llm_confirmed (0.6) | cpt1972-tbl-0002:row2:col1, cpt1972-tbl-0002:row2:col3 | — | 50.8 (6.1% RSE) |
| Absorption rate constant, metabolite, ka,met | `Q49` · kabs | 0.281 | 1/h | 7.805555555555556e-05 | 1/h | 2.8 | exact (1.0) | cpt1972-tbl-0002:row3:col1, cpt1972-tbl-0002:row3:col3 | — | not captured |
| Presystemic metabolite formation, Fmet | `Q45` · fm | 0.190 | not captured | not captured | not captured | 1.9 | exact (1.0) | cpt1972-tbl-0002:row4:col1, cpt1972-tbl-0002:row4:col3 | — | not captured |
| Volume of distribution, vortioxetine central compartment, V3 | `Q63` · V1 | 1510 | L | 1.51 | L | 2.4 | exact (1.0) | cpt1972-tbl-0002:row5:col1, cpt1972-tbl-0002:row5:col3 | — | 30.1 (6.9% RSE) |
| Inter‐compartmental clearance, vortioxetine, Q | `Q30` · Q | 21.1 | L/h | 5.861111111111111e-06 | L/h | 2.9 | llm_corrected (0.6) | cpt1972-tbl-0002:row7:col1, cpt1972-tbl-0002:row7:col3 | — | 14.3 (85% RSE) |
| Volume of distribution, vortioxetine peripheral compartment, V4 | `Q64` · V2 | 571 | L | 0.5710000000000001 | L | 5.8 | exact (1.0) | cpt1972-tbl-0002:row8:col1, cpt1972-tbl-0002:row8:col3 | — | 60.7 (8.7% RSE) |
| Intercompartmental clearance, vortioxetine, Qmet | `Q30` · Q | 7.69 | L/h | 2.136111111111111e-06 | L/h | 2.8 | exact (1.0) | cpt1972-tbl-0002:row9:col1, cpt1972-tbl-0002:row9:col3 | — | not captured |
| Volume of distribution, Lu AA34443 central compartment, V5 | `Q63` · V1 | 155 | L | 0.155 | L | 3.4 | exact (1.0) | cpt1972-tbl-0002:row10:col1, cpt1972-tbl-0002:row10:col3 | — | not captured |
| Lu AA34443 clearance, CLmet | `Q22` · CL | 22.5 | L/h | 6.2499999999999995e-06 | L/h | 1.8 | exact (1.0) | cpt1972-tbl-0002:row11:col1, cpt1972-tbl-0002:row11:col3 | — | 43.2 (6.0% RSE) |
| Volume of distribution, Lu AA34443 peripheral compartment, V6 | `Q64` · V2 | 211 | L | 0.211 | L | 0.8 | exact (1.0) | cpt1972-tbl-0002:row12:col1, cpt1972-tbl-0002:row12:col3 | — | not captured |
| Lag‐time (ALAG) | `Q83` · tlag | 0.966 | h | 3477.6 | h | 66.8 | llm (0.6) | cpt1972-tbl-0002:row13:col1, cpt1972-tbl-0002:row13:col3 | — | not captured |
| theta_q370_cyp2d6 | `Q900` · theta_q370_cyp2d6 | 13.1 | not captured | not captured | not captured | 0.8 | not captured (not captured) | cpt1972-tbl-0002:row6:col1, cpt1972-tbl-0002:row6:col3 | — | not captured |
| theta_q22_cyp2c19 | `Q900` · theta_q22_cyp2c19 | 12.5 | not captured | not captured | not captured | not captured | not captured (not captured) | cpt1972-tbl-0002:row17:col1, cpt1972-tbl-0002:row17:col3 | — | not captured |
| theta_q77_height | `Q900` · theta_q77_height | 1.48 | not captured | not captured | not captured | 11.1 | not captured (not captured) | cpt1972-tbl-0002:row21:col1, cpt1972-tbl-0002:row21:col3 | — | not captured |
| theta_q900_weight | `Q900` · theta_q900_weight | 0.918 | not captured | not captured | not captured | 21.0 | not captured (not captured) | cpt1972-tbl-0002:row22:col1, cpt1972-tbl-0002:row22:col3 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Absorption rate constant, ka' routed out of structural estimates ('IIV (%RSE)')
- table section iiv: 'Absorption rate constant, metabolite, ka,met' routed out of structural estimates ('IIV (%RSE)')
- table section iiv: 'Presystemic metabolite formation, Fmet' routed out of structural estimates ('IIV (%RSE)')
- table section iiv: 'Volume of distribution, vortioxetine central compartment, V3' routed out of structural estimates ('IIV (%RSE)')
- table section iiv: 'CYP2D6 mediated clearance (CLCYP2D6)' routed out of structural estimates ('IIV (%RSE)')
- table section iiv: 'Inter‐compartmental clearance, vortioxetine, Q' routed out of structural estimates ('IIV (%RSE)')
- table section iiv: 'Volume of distribution, vortioxetine peripheral compartment, V4' routed out of structural estimates ('IIV (%RSE)')
- table section iiv: 'Intercompartmental clearance, vortioxetine, Qmet' routed out of structural estimates ('IIV (%RSE)')
- table section iiv: 'Volume of distribution, Lu AA34443 central compartment, V5' routed out of structural estimates ('IIV (%RSE)')
- table section iiv: 'Lu AA34443 clearance, CLmet' routed out of structural estimates ('IIV (%RSE)')
- table section iiv: 'Volume of distribution, Lu AA34443 peripheral compartment, V6' routed out of structural estimates ('IIV (%RSE)')
- table section iiv: 'Lag‐time (ALAG)' routed out of structural estimates ('IIV (%RSE)')
- table section iiv: 'CYP2C19 poor metabolizers' routed out of structural estimates ('IIV (%RSE)')
- table section iiv: 'CYP2C19 intermediate metabolizers' routed out of structural estimates ('IIV (%RSE)')
- table section iiv: 'CYP2C19 normal metabolizers' routed out of structural estimates ('IIV (%RSE)')
- table section covariance: 'ρ (Fmet,V3)' routed out of structural estimates ('Correlation coefficients (ρ) a')
- table section covariance: 'ρ (Fmet,CLCYP2D6)' routed out of structural estimates ('Correlation coefficients (ρ) a')
- table section covariance: 'ρ (CLCYP2D6,V3)' routed out of structural estimates ('Correlation coefficients (ρ) a')
- table section covariance: 'ρ (CLmet,V5)' routed out of structural estimates ('Correlation coefficients (ρ) a')
- table section covariance: 'Residual error (proportional) b' routed out of structural estimates ('Correlation coefficients (ρ) a')
- unit_dimension_unknown: 'ALAG' (tlag)
- dropped unlinked row (NIL): 'Age on CLother' — extend the ontology if this is a real PK parameter (source ['cpt1972-tbl-0002:row18:col1', 'cpt1972-tbl-0002:row18:col3'])
- dropped unlinked row (NIL): 'Creatinine clearance on CLother' — extend the ontology if this is a real PK parameter (source ['cpt1972-tbl-0002:row19:col1', 'cpt1972-tbl-0002:row19:col3'])
- dropped unlinked row (NIL): 'LBM on CLother' — extend the ontology if this is a real PK parameter (source ['cpt1972-tbl-0002:row20:col1', 'cpt1972-tbl-0002:row20:col3'])
- dropped unlinked row (NIL): 'Weight on V5' — extend the ontology if this is a real PK parameter (source ['cpt1972-tbl-0002:row23:col1', 'cpt1972-tbl-0002:row23:col3'])
- dropped value-less row: '95% CI'
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number None (source ['cpt1972-tbl-0002:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'equation variable' from footnote/prose loose number None (source ['cpt1972-tbl-0002:footnote']); the table cell was unparseable — needs review
- covariate effect for Q370 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q22 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q77 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q900 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'Absorption rate constant, ka' → 1/h (from the popPK convention: 'The parameter is an absorption rate constant (first-order rate constant), which is conventionally expressed in 1/h in po')
- implicit units: 'Absorption rate constant, metabolite, ka,met' → 1/h (from the popPK convention: 'The parameter is an absorption rate constant for the metabolite (first-order rate constant), which is conventionally exp')
- implicit units: 'Volume of distribution, vortioxetine central compartment, V3' → L (from the paper text: "The text states that vortioxetine has a 'steady‐state volume of distribution of ~ 2,600 L', establishing the unit for vo")
- implicit units: 'Inter‐compartmental clearance, vortioxetine, Q' → L/h (from the popPK convention: 'The parameter is an intercompartmental clearance. In population PK, clearances are conventionally expressed in L/h, and ')
- implicit units: 'Volume of distribution, vortioxetine peripheral compartment, V4' → L (from the paper text: "The text states that vortioxetine has a 'steady‐state volume of distribution of ~ 2,600 L', establishing the unit for vo")
- implicit units: 'Intercompartmental clearance, vortioxetine, Qmet' → L/h (from the popPK convention: 'The parameter is an intercompartmental clearance. In population PK, clearances are conventionally expressed in L/h, and ')
- implicit units: 'Volume of distribution, Lu AA34443 central compartment, V5' → L (from the popPK convention: 'The parameter is a volume of distribution. In population PK, volumes are conventionally expressed in Liters (L), and the')
- implicit units: 'Lu AA34443 clearance, CLmet' → L/h (from the popPK convention: 'The parameter is a clearance. In population PK, clearances are conventionally expressed in L/h, and the magnitude (22.5)')
- implicit units: 'Volume of distribution, Lu AA34443 peripheral compartment, V6' → L (from the popPK convention: 'The parameter is a volume of distribution. In population PK, volumes are conventionally expressed in Liters (L), and the')
- implicit units: 'Lag‐time (ALAG)' → h (from the popPK convention: 'The parameter is an absorption lag time. In population PK, time parameters are conventionally expressed in hours (h), an')
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q63 (Volume of distribution, vortioxetine central compartment, V3); Q30 (Inter‐compartmental clearance, vortioxetine, Q); Q64 (Volume of distribution, vortioxetine peripheral compartment, V4); Q30 (Intercompartmental clearance, vortioxetine, Qmet); Q63 (Volume of distribution, Lu AA34443 central compartment, V5); Q22 (Lu AA34443 clearance, CLmet); Q64 (Volume of distribution, Lu AA34443 peripheral compartment, V6)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=vortioxetine
- template fit: PK_3M_3C — first-pass formation; parent 2 + hepatic, metabolites [2] (site presystemic: 'An early appearance of Lu AA34443 in plasma indicated presence of presystemic formation of the metabolite, which was ass')
- row roles: per-genotype parameters — typical value from the reference group: CYP2C19 normal metabolizers
- row roles (LLM): model_class=compartmental; 30/30 row label(s) assigned, 39 linked by role; re-tagged parent→Lu AA34443 ×25

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.769 (20/26 fields) | 6 |

<details><summary>6 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[lu aa34443 clearance, clmet].covariate_forms` | ['linear_fractional'] | ['linear_fractional', 'linear_fractional'] | mismatch |
| `gpt-oss:120b` | `parameters[theta_cl_age]` | not captured | 0.157 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta_v3_height]` | not captured | 1.48 | only_one_extracted |
| `gpt-oss:120b` | `parameters[volume of distribution, lu aa34443 central compartment, v5]` | 155 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[volume of distribution, vortioxetine central compartment, v3].covariate_forms` | [] | ['linear_fractional'] | mismatch |
| `gpt-oss:120b` | `parameters[volume of distribution, vortioxetine peripheral compartment, v4].parameter_id` | Q64 | Q61 | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 11 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cpt1972-tbl-0002:row11:col1', 'cpt1972-tbl-0002:row11:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cpt1972-tbl-0002:row7:col1', 'cpt1972-tbl-0002:row7:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cpt1972-tbl-0002:row9:col1', 'cpt1972-tbl-0002:row9:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['cpt1972-tbl-0002:row2:col1', 'cpt1972-tbl-0002:row2:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['cpt1972-tbl-0002:row3:col1', 'cpt1972-tbl-0002:row3:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['cpt1972-tbl-0002:row5:col1', 'cpt1972-tbl-0002:row5:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['cpt1972-tbl-0002:row10:col1', 'cpt1972-tbl-0002:row10:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['cpt1972-tbl-0002:row8:col1', 'cpt1972-tbl-0002:row8:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['cpt1972-tbl-0002:row12:col1', 'cpt1972-tbl-0002:row12:col3'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['cpt1972-tbl-0002:row13:col1', 'cpt1972-tbl-0002:row13:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 22.5 L/h | not captured | not captured | ['cpt1972-tbl-0002:row11:col1', 'cpt1972-tbl-0002:row11:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 1.51e+03 L | not captured | not captured | ['cpt1972-tbl-0002:row5:col1', 'cpt1972-tbl-0002:row5:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 155 L | not captured | not captured | ['cpt1972-tbl-0002:row10:col1', 'cpt1972-tbl-0002:row10:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 571 L | not captured | not captured | ['cpt1972-tbl-0002:row8:col1', 'cpt1972-tbl-0002:row8:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 211 L | not captured | not captured | ['cpt1972-tbl-0002:row12:col1', 'cpt1972-tbl-0002:row12:col3'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_param_coverage | not captured | pass | 10 scholar param(s) emitted or defaulted | 10 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | fail | parent_metabolite_hepatic → PK_3M_3C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable | not captured | LLM adjudication → deterministic rule |
| T1_t_half_beta | reference | skipped | 66 | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_vortioxetine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Frederiksen_2021_2` / `Frederiksen_2021_2::reference`)
- model: `../../../knowledgebase/drugs/drug_vortioxetine/models/modelica/_needs_review/Vortioxetine_Frederiksen2021v2_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_vortioxetine/models/modelica/_needs_review/Vortioxetine_Frederiksen2021v2_reference.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_vortioxetine/Vortioxetine_Frederiksen2021v2_reference/Vortioxetine_Frederiksen2021v2_reference_matlab.zip" download>Vortioxetine_Frederiksen2021v2_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_vortioxetine/Vortioxetine_Frederiksen2021v2_reference/Vortioxetine_Frederiksen2021v2_reference_matlab_simbio.zip" download>Vortioxetine_Frederiksen2021v2_reference_matlab_simbio.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_vortioxetine/Vortioxetine_Frederiksen2021v2_reference/Vortioxetine_Frederiksen2021v2_reference_sbml.zip" download>Vortioxetine_Frederiksen2021v2_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_vortioxetine/Vortioxetine_Frederiksen2021v2_reference/Vortioxetine_Frederiksen2021v2_reference_cellml.zip" download>Vortioxetine_Frederiksen2021v2_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 19:05 UTC</sub>
