<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;naldemedine&quot;,&quot;href&quot;:&quot;drugs/drug_naldemedine/&quot;},{&quot;label&quot;:&quot;Kubota_2018 \u00b7 estimate&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# naldemedine — `Naldemedine_Kubota2018_estimate`

> ## <span class="pk-badge pk-badge--green" title="covariates_not_exercised: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.692). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A model was built but held back: a core parameter had no value, so it is not published or simulated.

> **Caveat** (`covariates_not_exercised`): the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only the reference individual, so those scenarios were never run. The base model still reproduces the paper; what is missing is the covariate curves.

### Reviewer guidance

**Naldemedine's clearance, absorption rate constant and peripheral-to-central rate constant have no values in the record, so library defaults were substituted and the model was quarantined.**

The record for naldemedine (Kubota_2018, two-compartment structure) reports V1/F = 83.6 L, V2/F = 37.7 L, Q/F = 4.77 L/h and tlag = 0.195 h, but CL/F, Ka and k21 carry no extracted values; placeholders stood in for them, and the invented absorption (defaulted Ka) was judged not acceptable. The model also assumed F = 1 and Fm = 1 with no molar correction, and the covariate effects defined in the record were not simulated — only the reference individual was. A second reader recorded 51.36 as a maximum parameter value where this record has none, and no THETA value where this record has -0.195. Extracted — naldemedine: V1/F 83.6 L, Q/F 4.77 L/h, V2/F 37.7, tlag 0.195 hr.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of dose: this record has none, the second reading 0.2; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `model_quarantined` (reviewed 2026-09-28 14:39:06.744382+00:00) predates the upstream re-run (2026-10-04 16:42:17.599036+00:00). Current validate status: `extracted`.

## Citation
Kubota R et al., Population Pharmacokinetics and Exposur…, Pharmaceutical research (2018)
  ·  DOI: [10.1007/s11095-018-2501-7](https://doi.org/10.1007/s11095-018-2501-7)

## Model component
<dbs-pgx drug="naldemedine" model-id="Naldemedine_Kubota2018_estimate" status="extracted" stale="true" population="healthy subjects, patients with chronic non-cancer pain and OIC, and cancer patients with OIC" measured-compound="naldemedine" parameterization="apparent" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 4 extracted.

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| THETA (2) | `Q900` · equation variable | -0.195 | not captured | not captured | not captured | not captured | llm (0.6) | Tab3:row4:col1 | — | not captured |
| Vc/F (L) | `Q290` · V1/F | 83.6 | L | 0.0836 | [l] | not captured | exact (1.0) | Tab3:row8:col1, Kubota_2018_table_S2:row2:col1, Kubota_2018_table_S2:row2:col5 | — | 25.3 (None% RSE) |
| Q/F (L/h) | `Q69` · Q/F | 4.77 | L/h | 1.325e-06 | [l] / [h] | not captured | exact (1.0) | Tab3:row16:col1 | — | 46.3 (None% RSE) |
| Vp/F | `Q82` · V2/F | 41.8 | L | 0.0418 | L | not captured | exact (1.0) | Tab3:row17:col1 | — | 36.3 (None% RSE) |
| ALAG (hr) | `Q83` · tlag | 0.195 | hr | 702.0 | [h] | not captured | exact (1.0) | Tab3:row18:col1, Kubota_2018_table_S2:row6:col1, Kubota_2018_table_S2:row6:col5 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| CL/F (L/h) | Q27 | not captured | exact |
| Ka (hr−1) | Q49 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL/F' routed out of structural estimates ('Inter-individual variability (CV%)')
- table section iiv: 'Vc/F' routed out of structural estimates ('Inter-individual variability (CV%)')
- table section iiv: 'Ka' routed out of structural estimates ('Inter-individual variability (CV%)')
- table section iiv: 'Q/F' routed out of structural estimates ('Inter-individual variability (CV%)')
- table section iiv: 'Vp/F' routed out of structural estimates ('Inter-individual variability (CV%)')
- dropped unlinked row (NIL): 'THETA (1)' — extend the ontology if this is a real PK parameter (source ['Tab3:row3:col1'])
- dropped unlinked row (NIL): 'THETA (3)' — extend the ontology if this is a real PK parameter (source ['Tab3:row5:col1'])
- dropped unlinked row (NIL): 'THETA (4)' — extend the ontology if this is a real PK parameter (source ['Tab3:row6:col1'])
- dropped unlinked row (NIL): 'THETA (5)' — extend the ontology if this is a real PK parameter (source ['Tab3:row7:col1'])
- dropped unlinked row (NIL): 'THETA (6)' — extend the ontology if this is a real PK parameter (source ['Tab3:row9:col1'])
- dropped unlinked row (NIL): 'THETA (7)' — extend the ontology if this is a real PK parameter (source ['Tab3:row10:col1'])
- dropped unlinked row (NIL): 'THETA (8)' — extend the ontology if this is a real PK parameter (source ['Tab3:row11:col1'])
- dropped unlinked row (NIL): 'THETA (9)' — extend the ontology if this is a real PK parameter (source ['Tab3:row12:col1'])
- dropped unlinked row (NIL): 'THETA (10)' — extend the ontology if this is a real PK parameter (source ['Tab3:row14:col1'])
- dropped unlinked row (NIL): 'THETA (11)' — extend the ontology if this is a real PK parameter (source ['Tab3:row15:col1'])
- routed 'proportional' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- dropped duplicate Q27 ('CL/F (L/hr)', value '8.20') — already have one for this compound
- dropped duplicate Q49 ('Ka (hr-1)', value '3.81') — already have one for this compound
- dropped duplicate Q69 ('Q/F (L/hr)', value '5.02') — already have one for this compound
- dropped duplicate Q82 ('Vp/F (L)', value '43.2') — already have one for this compound
- dropped unlinked row (NIL): 'Dose(mg)' — extend the ontology if this is a real PK parameter (source ['Kubota_2018_table_S3:row0:col3', 'Kubota_2018_table_S3:row0:col6'])
- dropped unlinked row (NIL): 'N' — extend the ontology if this is a real PK parameter (source ['Kubota_2018_table_S3:row1:col3', 'Kubota_2018_table_S3:row1:col6'])
- dropped unlinked row (NIL): 'Mean' — extend the ontology if this is a real PK parameter (source ['Kubota_2018_table_S3:row2:col3', 'Kubota_2018_table_S3:row2:col6'])
- dropped unlinked row (NIL): 'SD' — extend the ontology if this is a real PK parameter (source ['Kubota_2018_table_S3:row3:col3', 'Kubota_2018_table_S3:row3:col6'])
- dropped unlinked row (NIL): 'CV%' — extend the ontology if this is a real PK parameter (source ['Kubota_2018_table_S3:row4:col3', 'Kubota_2018_table_S3:row4:col6'])
- dropped unlinked row (NIL): 'Max' — extend the ontology if this is a real PK parameter (source ['Kubota_2018_table_S3:row5:col3', 'Kubota_2018_table_S3:row5:col6'])
- dropped unlinked row (NIL): 'Median' — extend the ontology if this is a real PK parameter (source ['Kubota_2018_table_S3:row6:col3', 'Kubota_2018_table_S3:row6:col6'])
- dropped unlinked row (NIL): 'Min' — extend the ontology if this is a real PK parameter (source ['Kubota_2018_table_S3:row7:col3', 'Kubota_2018_table_S3:row7:col6'])
- dropped unlinked row (NIL): 'Geometric Mean' — extend the ontology if this is a real PK parameter (source ['Kubota_2018_table_S3:row8:col3', 'Kubota_2018_table_S3:row8:col6'])
- dropped unlinked row (NIL): 'CV% Geometric Mean' — extend the ontology if this is a real PK parameter (source ['Kubota_2018_table_S3:row9:col3', 'Kubota_2018_table_S3:row9:col6'])
- dropped unlinked row (NIL): 'Age' — extend the ontology if this is a real PK parameter (source ['Kubota_2018_table_S4:row2:col5', 'Kubota_2018_table_S4:row2:col6', 'Kubota_2018_table_S4:row2:col8', 'Kubota_2018_table_S4:row2:col9', 'Kubota_2018_table_S4:row2:col10'])
- dropped unlinked row (NIL): 'Gender' — extend the ontology if this is a real PK parameter (source ['Kubota_2018_table_S4:row6:col5', 'Kubota_2018_table_S4:row6:col6', 'Kubota_2018_table_S4:row6:col8', 'Kubota_2018_table_S4:row6:col9', 'Kubota_2018_table_S4:row6:col10'])
- dropped unlinked row (NIL): 'Race' — extend the ontology if this is a real PK parameter (source ['Kubota_2018_table_S4:row8:col5', 'Kubota_2018_table_S4:row8:col6', 'Kubota_2018_table_S4:row8:col8'])
- dropped unlinked row (NIL): 'Health status' — extend the ontology if this is a real PK parameter (source ['Kubota_2018_table_S4:row13:col5', 'Kubota_2018_table_S4:row13:col6', 'Kubota_2018_table_S4:row13:col8'])
- implicit units: 'Vp/F' → L (from the paper text: "The paper text states: 'The population parameter estimates were: ... Vp/F = 41.8 L'")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=naldemedine
- bound model equation to Q27 (CL/F): CL/F = THETA (1) * (Age/52) ** THETA (2) * (CLcr/108) ** THETA (3) * THETA (4) ** White * THETA (5) ** Gender
- bound model equation to Q49 (kabs): Ka = THETA (10) * (Age/52) ** THETA (11)
- Q27 (CL/F) is equation-defined: value moved to equation-variable 'CL/F (L/h)'; equation kept verbatim
- Q49 (kabs) is equation-defined: value moved to equation-variable 'Ka (hr−1)'; equation kept verbatim
- population split: 'estimate' subgroup of Kubota_2018 (paper reports 3 populations: 1107v9221(phase 2b), 1314v9231_1315v9232(phase 3), estimate)

**Extraction notes:**
- companion parameter table S2 transcribed (42 record(s), model stage 'base')
- companion parameter table S3 transcribed (40 record(s))
- unparsed cell Kubota_2018_table_S4:row2:col1 = '&lt; 65'
- companion parameter table S4 transcribed (20 record(s))
- LLM selected parameter table(s) 3, S2, S3, S4
- captured model equation CL/F = THETA (1) * (Age/52) ** THETA (2) * (CLcr/108) ** THETA (3) * THETA (4) ** White * THETA (5) ** Gender
- captured model equation Ka = THETA (10) * (Age/52) ** THETA (11)

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.692 (9/13 fields) | 4 |

<details><summary>4 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[dose]` | not captured | 0.2 | only_one_extracted |
| `gpt-oss:120b` | `parameters[max]` | not captured | 51.36 | only_one_extracted |
| `gpt-oss:120b` | `parameters[theta]` | -0.195 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[vc/f].value` | 83.6 | not captured | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row2:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row8:col1', 'Kubota_2018_table_S2:row2:col1', 'Kubota_2018_table_S2:row2:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab3:row13:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row16:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row17:col1'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Tab3:row18:col1', 'Kubota_2018_table_S2:row6:col1', 'Kubota_2018_table_S2:row6:col5'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q290 | pass | volume within physiological range | 83.6 L | not captured | not captured | ['Tab3:row8:col1', 'Kubota_2018_table_S2:row2:col1', 'Kubota_2018_table_S2:row2:col5'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 41.8 L | not captured | not captured | ['Tab3:row17:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T2_covariates_not_exercised | (all) | fail | not captured | not captured | not captured | record has covariate_effects but the engineer simulated only the reference individual — covariate scenarios were not exercised |
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_param_coverage | not captured | pass | 4 scholar param(s) emitted or defaulted | 4 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_naldemedine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kubota_2018` / `Kubota_2018::estimate`)
- model: `../../../knowledgebase/drugs/drug_naldemedine/models/modelica/_needs_review/Naldemedine_Kubota2018_estimate.mo`
- deviation: `../../../knowledgebase/drugs/drug_naldemedine/models/modelica/_needs_review/Naldemedine_Kubota2018_estimate.deviation.json`


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-04 16:42 UTC</sub>
