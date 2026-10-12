<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;avelumab&quot;,&quot;href&quot;:&quot;drugs/drug_avelumab/&quot;},{&quot;label&quot;:&quot;Wilkins_2019 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# avelumab — `Avelumab_Wilkins2019_reference`

> ## <span class="pk-badge pk-badge--neutral" title="covariates_not_exercised: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.">not modelled</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.568). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

> **Caveat** (`covariates_not_exercised`): the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.

### Reviewer guidance

**No model has been built from this record yet; the covariate scenarios were not simulated.**

The base model was simulated, not the covariate effects the record defines. A reported unit could not be converted (theta_cl_ada), so that value has no SI equivalent.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of age_on_cl_cl_age_1: this record has none, the second reading -0.12; it also differs on 18 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Wilkins JJ et al., Time-Varying Clearance and Impact of Di…, CPT: pharmacometrics & syst… (2019)
  ·  DOI: [10.1002/psp4.12406](https://doi.org/10.1002/psp4.12406)

## Model component
<dbs-pgx drug="avelumab" model-id="Avelumab_Wilkins2019_reference" status="not_modelled" stale="false" population="patients with 14 tumor types across three clinical studies" measured-compound="avelumab" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 4 extracted, plus 12 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `not_modelled`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL, L/hour | `Q22` · CL | 0.0308 | L/hour | 8.555555555555557e-09 | [l] / [h] | 1.36 | exact (1.0) | psp412406-tbl-0002:row1:col1, psp412406-tbl-0002:row1:col2 | — | 0.0171 (None% RSE) |
| Central volume, L | `Q63` · V1 | 3.42 | L | 0.00342 | [l] | 1.20 | exact (1.0) | psp412406-tbl-0002:row2:col1, psp412406-tbl-0002:row2:col2 | — | not captured |
| Peripheral volume, L | `Q64` · V2 | 0.918 | L | 0.0009180000000000001 | [l] | 6.75 | exact (1.0) | psp412406-tbl-0002:row3:col1, psp412406-tbl-0002:row3:col2 | — | not captured |
| Intercompartmental CL, L/hour | `Q30` · Q | 0.0313 | L/hour | 8.694444444444445e-09 | [l] / [h] | 5.92 | llm_corrected (0.6) | psp412406-tbl-0002:row4:col1, psp412406-tbl-0002:row4:col2 | — | not captured |
| t_50_for_all_other_tumor_types | `Q900` · t_50_for_all_other_tumor_types | 68.4 | not captured | not captured | not captured | 2.54 | not captured (not captured) | psp412406-tbl-0002:row9:col1, psp412406-tbl-0002:row9:col2 | — | not captured |
| albumin_on_cl_cl_alb_1 | `Q900` · albumin_on_cl_cl_alb_1 | -0.438 | not captured | not captured | not captured | 12.2 | not captured (not captured) | psp412406-tbl-0002:row18:col1, psp412406-tbl-0002:row18:col2 | — | not captured |
| CRP on CL (θCL,CRP)1 | `Q900` · equation variable | 0.0677 | not captured | not captured | not captured | 6.82 | llm_corrected (0.6) | psp412406-tbl-0002:row22:col1, psp412406-tbl-0002:row22:col2 | — | not captured |
| theta_q323_category | `Q900` · theta_q323_category | 0 | not captured | not captured | not captured | not captured | not captured (not captured) | psp412406-tbl-0002:row7:col1 | — | not captured |
| theta_q319_body_weight | `Q900` · theta_q319_body_weight | 0.324 | not captured | not captured | not captured | 10.1 | not captured (not captured) | psp412406-tbl-0002:row14:col1, psp412406-tbl-0002:row14:col2 | — | not captured |
| theta_cl_sex | `Q900` · theta_cl_sex | -0.15 | not captured | not captured | not captured | 8.85 | not captured (not captured) | psp412406-tbl-0002:row15:col1, psp412406-tbl-0002:row15:col2 | — | not captured |
| theta_equation_variable_age | `Q900` · theta_equation_variable_age | -0.12 | not captured | not captured | not captured | 22.5 | not captured (not captured) | psp412406-tbl-0002:row16:col1, psp412406-tbl-0002:row16:col2 | — | not captured |
| theta_cl_race | `Q900` · theta_cl_race | -0.12 | not captured | not captured | not captured | 17.6 | not captured (not captured) | psp412406-tbl-0002:row17:col1, psp412406-tbl-0002:row17:col2 | — | not captured |
| theta_equation_variable_egfr | `Q900` · theta_equation_variable_egfr | 0.0579 | not captured | not captured | not captured | 32.6 | not captured (not captured) | psp412406-tbl-0002:row19:col1, psp412406-tbl-0002:row19:col2 | — | not captured |
| theta_cl_ada | `Q900` · theta_cl_ada | 0.123 | L/hour | not captured | not captured | 22.0 | not captured (not captured) | psp412406-tbl-0002:row21:col1, psp412406-tbl-0002:row21:col2 | — | not captured |
| theta_q319_body_weight | `Q900` · theta_q319_body_weight | 0.362 | not captured | not captured | not captured | 8.50 | not captured (not captured) | psp412406-tbl-0002:row28:col1, psp412406-tbl-0002:row28:col2 | — | not captured |
| theta_v1_sex | `Q900` · theta_v1_sex | -0.160 | not captured | not captured | not captured | 8.57 | not captured (not captured) | psp412406-tbl-0002:row29:col1, psp412406-tbl-0002:row29:col2 | — | not captured |
| theta_v1_albumin | `Q900` · theta_v1_albumin | -0.278 | not captured | not captured | not captured | 20.6 | not captured (not captured) | psp412406-tbl-0002:row30:col1, psp412406-tbl-0002:row30:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'IIV on CL (ωCL2, variance)' routed out of structural estimates ('IIV')
- table section iiv: 'cov(CL,V 1) (ωCL,V1, covariance)' routed out of structural estimates ('IIV')
- table section iiv: 'IIV on V 1 (ωV12, variance)' routed out of structural estimates ('IIV')
- table section iiv: 'cov(V 1,V 2) (ωCL,V1, covariance)' routed out of structural estimates ('IIV')
- table section iiv: 'cov(CL,V 2) (ωCL,V1, covariance)' routed out of structural estimates ('IIV')
- table section iiv: 'IIV on V 2 (ωV22, variance)' routed out of structural estimates ('IIV')
- table section iiv: 'IIV on Imax (ωImax2, variance)' routed out of structural estimates ('IIV')
- table section residual_error: 'Proportional residual error (σadd)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'Additive residual error (σadd), μg/mL' routed out of structural estimates ('Residual variability')
- dropped PD-category row 'Imax SCCHN' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp412406-tbl-0002:row5:col1', 'psp412406-tbl-0002:row5:col2'])
- dropped PD-category row 'Imax mMCC' → Q323 (Imax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp412406-tbl-0002:row6:col1', 'psp412406-tbl-0002:row6:col2'])
- dropped unlinked row (NIL): 'T 50 mMCC' — extend the ontology if this is a real PK parameter (source ['psp412406-tbl-0002:row8:col1', 'psp412406-tbl-0002:row8:col2'])
- covariate level 'T 50, for all other tumor types' → Q900:t_50_for_all_other_tumor_types = 68.4 (additive_shift on Q22)
- covariate level 'Albumin on CL (θCL,Alb)1' → Q900:albumin_on_cl_cl_alb_1 = -0.438 (linear_fractional on Q22)
- dropped duplicate Q22 ('Tumor burden on CL (θCL,TS)1', value '0.0592') — already have one for this compound
- dropped duplicate Q900 ('Platelets on CL (θCL,Plat)1', value '0.0603') — already have one for this compound
- dropped duplicate Q22 ('AST on CL (θCL,AST)1', value '-0.0514') — already have one for this compound
- dropped duplicate Q900 ('Not taking concomitant opioids on CL (θCL,COpi)2', value '-0.0445') — already have one for this compound
- dropped duplicate Q22 ('Previous use of biologics on CL (θCL,PBio)2', value '-0.0508') — already have one for this compound
- dropped duplicate Q900 ('Previous use of biologics on V 1 (θV1,PBio) 2', value '-0.0526') — already have one for this compound
- covariate effect for Q323 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=avelumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- molar mass: none found for 'avelumab' — its concentrations stay mass-only

**Extraction notes:**
- unparsed cell psp412406-tbl-0002:row1:col3 = '0.03; 0.0316'
- unparsed cell psp412406-tbl-0002:row2:col3 = '3.34; 3.5'
- unparsed cell psp412406-tbl-0002:row3:col3 = '0.796; 1.04'
- unparsed cell psp412406-tbl-0002:row4:col3 = '0.0277; 0.0349'
- unparsed cell psp412406-tbl-0002:row5:col3 = '−0.389; −0.180'
- unparsed cell psp412406-tbl-0002:row6:col3 = '−0.507; −0.266'
- unparsed cell psp412406-tbl-0002:row8:col3 = '99.6; 162'
- unparsed cell psp412406-tbl-0002:row9:col3 = '65.0; 71.8'
- unparsed cell psp412406-tbl-0002:row10:col3 = '0.415; 1.05'
- unparsed cell psp412406-tbl-0002:row11:col3 = '1.22; 2.15'
- unparsed cell psp412406-tbl-0002:row12:col3 = '2.52; 3.31'
- unparsed cell psp412406-tbl-0002:row14:col3 = '0.260; 0.388'
- unparsed cell psp412406-tbl-0002:row15:col3 = '−0.176; −0.124'
- unparsed cell psp412406-tbl-0002:row16:col3 = '−0.173; −0.0671'
- unparsed cell psp412406-tbl-0002:row17:col3 = '−0.161; −0.0785'
- unparsed cell psp412406-tbl-0002:row18:col3 = '−0.543; −0.333'
- unparsed cell psp412406-tbl-0002:row19:col3 = '0.0209; 0.0949'
- unparsed cell psp412406-tbl-0002:row20:col3 = '0.0441; 0.0744'
- unparsed cell psp412406-tbl-0002:row21:col3 = '0.0698; 0.176'
- unparsed cell psp412406-tbl-0002:row22:col3 = '0.0586; 0.0767'
- unparsed cell psp412406-tbl-0002:row23:col3 = '0.0266; 0.094'
- unparsed cell psp412406-tbl-0002:row24:col3 = '−0.0747; −0.028'
- unparsed cell psp412406-tbl-0002:row25:col3 = '−0.0683; −0.0208'
- unparsed cell psp412406-tbl-0002:row26:col3 = '−0.0796; −0.022'
- unparsed cell psp412406-tbl-0002:row28:col3 = '0.301; 0.422'
- unparsed cell psp412406-tbl-0002:row29:col3 = '−0.187; −0.133'
- unparsed cell psp412406-tbl-0002:row30:col3 = '−0.390; −0.165'
- unparsed cell psp412406-tbl-0002:row31:col3 = '−0.0827; −0.0226'
- unparsed cell psp412406-tbl-0002:row33:col3 = '0.0464; 0.0605'
- unparsed cell psp412406-tbl-0002:row34:col3 = '0.0125; 0.0218'
- unparsed cell psp412406-tbl-0002:row35:col3 = '0.0297; 0.0366'
- unparsed cell psp412406-tbl-0002:row36:col3 = '0.0321; 0.0946'
- unparsed cell psp412406-tbl-0002:row37:col3 = '−0.0429; 0.0148'
- unparsed cell psp412406-tbl-0002:row38:col3 = '0.659; 1.06'
- unparsed cell psp412406-tbl-0002:row39:col3 = '0.0485; 0.0707'
- unparsed cell psp412406-tbl-0002:row41:col3 = '0.161; 0.164'
- unparsed cell psp412406-tbl-0002:row42:col3 = '2.39; 2.48'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `gpt-6-luna` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.568 (25/44 fields) | 19 |

<details><summary>19 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[age_on_cl_cl_age_1]` | not captured | -0.12 | only_one_extracted |
| `qwen3.8-27b` | `parameters[albumin_on_cl_cl_alb_1]` | -0.438 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[crp on cl (θcl,crp)1]` | 0.0677 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[intercompartmental cl]` | 0.0313 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[t_50_for_all_other_tumor_types].covariate_forms` | ['linear_fractional', 'linear_fractional'] | [] | mismatch |
| `qwen3.8-27b` | `parameters[theta_cl_ada].covariate_forms` | ['linear_fractional', 'linear_fractional'] | [] | mismatch |
| `qwen3.8-27b` | `parameters[theta_cl_race].covariate_forms` | ['linear_fractional', 'linear_fractional'] | [] | mismatch |
| `qwen3.8-27b` | `parameters[theta_cl_sex].covariate_forms` | ['linear_fractional', 'linear_fractional'] | [] | mismatch |
| `qwen3.8-27b` | `parameters[theta_equation_variable_age]` | -0.12 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_equation_variable_egfr]` | 0.0579 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q1_body_weight]` | not captured | 0.324 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q319_body_weight].covariate_forms` | ['linear_fractional', 'linear_fractional'] | [] | mismatch |
| `qwen3.8-27b` | `parameters[theta_q319_body_weight].rse_percent` | 10.1 | 8.50 | mismatch |
| `qwen3.8-27b` | `parameters[theta_q319_body_weight].value` | 0.324 | 0.362 | mismatch |
| `qwen3.8-27b` | `parameters[theta_q31_egfr]` | not captured | 0.0579 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_q323_category].covariate_forms` | ['linear_fractional', 'linear_fractional'] | [] | mismatch |
| `qwen3.8-27b` | `parameters[theta_q900_albumin]` | not captured | -0.438 | only_one_extracted |
| `qwen3.8-27b` | `parameters[theta_v1_albumin].covariate_forms` | ['linear_fractional', 'linear_fractional'] | [] | mismatch |
| `qwen3.8-27b` | `parameters[theta_v1_sex].covariate_forms` | ['linear_fractional', 'linear_fractional'] | [] | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412406-tbl-0002:row1:col1', 'psp412406-tbl-0002:row1:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp412406-tbl-0002:row4:col1', 'psp412406-tbl-0002:row4:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412406-tbl-0002:row2:col1', 'psp412406-tbl-0002:row2:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp412406-tbl-0002:row3:col1', 'psp412406-tbl-0002:row3:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0308 | not captured | not captured | ['psp412406-tbl-0002:row1:col1', 'psp412406-tbl-0002:row1:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0308 L/h | not captured | not captured | ['psp412406-tbl-0002:row1:col1', 'psp412406-tbl-0002:row1:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.42 L | not captured | not captured | ['psp412406-tbl-0002:row2:col1', 'psp412406-tbl-0002:row2:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 0.918 L | not captured | not captured | ['psp412406-tbl-0002:row3:col1', 'psp412406-tbl-0002:row3:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_param_coverage | not captured | skipped | not captured | not captured | not captured | no emitted model to inspect (engineer build absent) |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |
| T1_t_half_beta | reference | skipped | 6.1 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | skipped | 146 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 4.5 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 6.8 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 5.7 | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_avelumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Wilkins_2019` / `Wilkins_2019::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 09:40 UTC</sub>
