<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D07A&quot;,&quot;href&quot;:&quot;atc/D07A.md&quot;},{&quot;label&quot;:&quot;fluticasone&quot;,&quot;href&quot;:&quot;drugs/drug_fluticasone/&quot;},{&quot;label&quot;:&quot;Rebello_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fluticasone_Rebello2026_reference&quot;,&quot;label&quot;:&quot;Rebello_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluticasone/Fluticasone_Rebello2026_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fluticasone — `Fluticasone_Rebello2026_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.867). The first reading is what the record holds.">cross-check: partial</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

### Reviewer guidance

**The model does not reproduce the paper's peak concentration (Cmax) (paper 1.4e-07, model 0); the model does not reproduce the paper's time of the peak (tmax) (paper 1.84, model 0).**

Simulated as the paper dosed it, the model's peak concentration (Cmax) differs from the value the paper reports by more than the tolerance. Simulated as the paper dosed it, the model's time of the peak (tmax) differs from the value the paper reports by more than the tolerance. None of the extracted parameters is fluticasone's own; they describe fluticasone propionate. Extracted — fluticasone propionate: V1/F 70.3 L, V2/F 84.4 L, V3/F 46.2 L, CL/F 27 L/h, Q/F 60.2 L/h, kabs 46.8 1/h, tlag 31.6 h, Frel 34.2.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of % systemic exposure due to central lung absorption: this record has none, the second reading 34.5; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Rebello J et al., Understanding Pulmonary and Systemic Ph…, European journal of drug me… (2026)
  ·  DOI: [10.1007/s13318-026-00989-0](https://doi.org/10.1007/s13318-026-00989-0)

<div class="pk-model-meta" hidden drug="fluticasone" model-id="Fluticasone_Rebello2026_reference" status="needs_review" stale="false" population="healthy volunteers" measured-compound="fluticasone propionate" parameterization="apparent" topology="2C"></div>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 8 extracted.

**Parameterization:** CL/F, Q/F, V1/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Vc/F (*) | `Q290` · V1/F | 70.3 | L | 0.0703 | L | not captured | exact (1.0) | Tab5:row3:col2, Tab5:row3:col3, Tab5:row3:col4, Tab5:row3:col5 | — | not captured |
| Vp/F (*) | `Q82` · V2/F | 84.4 | L | 0.0844 | L | not captured | exact (1.0) | Tab5:row4:col2, Tab5:row4:col3, Tab5:row4:col4, Tab5:row4:col5 | — | not captured |
| Vp2/F (*) | `Q78` · V3/F | 46.2 | L | 0.046200000000000005 | L | not captured | exact (1.0) | Tab5:row5:col2, Tab5:row5:col3, Tab5:row5:col4, Tab5:row5:col5 | — | not captured |
| CL/F (*) | `Q27` · CL/F | 27.0 | L/h | 7.5e-06 | L/h | not captured | exact (1.0) | Tab5:row6:col2, Tab5:row6:col3, Tab5:row6:col4, Tab5:row6:col5 | — | not captured |
| CLD/F (*) | `Q69` · Q/F | 60.2 | L/h | 1.6722222222222222e-05 | L/h | not captured | exact (1.0) | Tab5:row7:col2, Tab5:row7:col3, Tab5:row7:col4, Tab5:row7:col5 | — | not captured |
| kaINHD1c | `Q49` · kabs | 46.8 | 1/h | 0.013 | 1/h | not captured | llm (0.6) | Rebello_2026_table_4:row2:col2, Rebello_2026_table_4:row2:col3, Rebello_2026_table_4:row2:col4, Rebello_2026_table_4:row2:col5 | — | not captured |
| TlagD1c | `Q83` · tlag | 31.6 | h | 113760.0 | h | not captured | llm (0.6) | Rebello_2026_table_4:row7:col2, Rebello_2026_table_4:row7:col3, Rebello_2026_table_4:row7:col4, Rebello_2026_table_4:row7:col5 | — | not captured |
| Frel | `Q87` · Frel | 34.2 | not captured | not captured | not captured | not captured | exact (1.0) | Rebello_2026_table_4:row19:col2, Rebello_2026_table_4:row19:col3, Rebello_2026_table_4:row19:col4, Rebello_2026_table_4:row19:col5 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- column 'units' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Systemic parameters—Formulation 1/2' — extend the ontology if this is a real PK parameter (source ['Tab5:row2:col1', 'Tab5:row2:col2', 'Tab5:row2:col3', 'Tab5:row2:col4', 'Tab5:row2:col5'])
- dropped duplicate Q69 ('CLD2/F (*)', value '61.9') — already have one for this compound
- dropped duplicate Q49 ('kaINHD1p', value '51.2') — already have one for this compound
- dropped duplicate Q49 ('kaINHGD1', value '9.6') — already have one for this compound
- dropped unlinked row (NIL): '% Systemic exposure due to central lung absorption' — extend the ontology if this is a real PK parameter (source ['Rebello_2026_table_4:row5:col2', 'Rebello_2026_table_4:row5:col3', 'Rebello_2026_table_4:row5:col4', 'Rebello_2026_table_4:row5:col5', 'Rebello_2026_table_4:row14:col2', 'Rebello_2026_table_4:row14:col3', 'Rebello_2026_table_4:row14:col4', 'Rebello_2026_table_4:row14:col5'])
- dropped unlinked row (NIL): '% Systemic exposure due to peripheral lung absorption' — extend the ontology if this is a real PK parameter (source ['Rebello_2026_table_4:row6:col2', 'Rebello_2026_table_4:row6:col3', 'Rebello_2026_table_4:row6:col4', 'Rebello_2026_table_4:row6:col5', 'Rebello_2026_table_4:row15:col2', 'Rebello_2026_table_4:row15:col3', 'Rebello_2026_table_4:row15:col4', 'Rebello_2026_table_4:row15:col5'])
- dropped duplicate Q83 ('TlagD1p', value '20.4') — already have one for this compound
- dropped duplicate Q83 ('TlagGD1', value '47.5') — already have one for this compound
- dropped duplicate Q49 ('kaINHD2c', value '44.7') — already have one for this compound
- dropped duplicate Q49 ('kaINHD2p', value '56.8') — already have one for this compound
- dropped duplicate Q49 ('kaINHGD2', value '17.9') — already have one for this compound
- dropped duplicate Q83 ('TlagD2c', value '24.2') — already have one for this compound
- dropped duplicate Q83 ('TlagD2p', value '50.7') — already have one for this compound
- dropped duplicate Q83 ('TlagGD2', value '63.4') — already have one for this compound
- implicit units: 'Vc/F (*)' → L (from the popPK convention: 'Vc/F is a volume of distribution parameter. In population PK, volumes are conventionally expressed in liters (L). The va')
- implicit units: 'Vp/F (*)' → L (from the popPK convention: 'Vp/F is a volume of distribution parameter. In population PK, volumes are conventionally expressed in liters (L). The va')
- implicit units: 'Vp2/F (*)' → L (from the popPK convention: 'Vp2/F is a volume of distribution parameter. In population PK, volumes are conventionally expressed in liters (L). The v')
- implicit units: 'CL/F (*)' → L/h (from the popPK convention: 'CL/F is a clearance parameter. In population PK, clearances are conventionally expressed in liters per hour (L/h). The v')
- implicit units: 'CLD/F (*)' → L/h (from the popPK convention: 'CLD/F is an intercompartmental clearance parameter. In population PK, intercompartmental clearances are conventionally e')
- implicit units: 'kaINHD1c' → 1/h (from the paper text: "Table 4 explicitly lists the unit for 'kaINHD1c' as 'h−1' (which is equivalent to 1/h) in the 'Units' column.")
- implicit units: 'TlagD1c' → h (from the popPK convention: 'TlagD1c is a lag time parameter. In population PK, lag times are conventionally expressed in hours (h). The value 31.6 i')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=fluticasone propionate
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count

**Extraction notes:**
- unparsed cell Rebello_2026_table_4:row2:col1 = 'h−1'
- unparsed cell Rebello_2026_table_4:row3:col1 = 'h−1'
- unparsed cell Rebello_2026_table_4:row4:col1 = 'h−1'
- unparsed cell Rebello_2026_table_4:row11:col1 = 'h−1'
- unparsed cell Rebello_2026_table_4:row12:col1 = 'h−1'
- unparsed cell Rebello_2026_table_4:row13:col1 = 'h−1'
- companion parameter table 4 transcribed (68 record(s), model stage 'final')
- LLM selected parameter table(s) 4, 5

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.867 (13/15 fields) | 2 |

<details><summary>2 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[% systemic exposure due to central lung absorption]` | not captured | 34.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax]` | not captured | 140.28 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab5:row6:col2', 'Tab5:row6:col3', 'Tab5:row6:col4', 'Tab5:row6:col5'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab5:row3:col2', 'Tab5:row3:col3', 'Tab5:row3:col4', 'Tab5:row3:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Rebello_2026_table_4:row2:col2', 'Rebello_2026_table_4:row2:col3', 'Rebello_2026_table_4:row2:col4', 'Rebello_2026_table_4:row2:col5'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab5:row7:col2', 'Tab5:row7:col3', 'Tab5:row7:col4', 'Tab5:row7:col5'] |
| C5_dimension_Q78 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab5:row5:col2', 'Tab5:row5:col3', 'Tab5:row5:col4', 'Tab5:row5:col5'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab5:row4:col2', 'Tab5:row4:col3', 'Tab5:row4:col4', 'Tab5:row4:col5'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Rebello_2026_table_4:row7:col2', 'Rebello_2026_table_4:row7:col3', 'Rebello_2026_table_4:row7:col4', 'Rebello_2026_table_4:row7:col5'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 27 L/h | not captured | not captured | ['Tab5:row6:col2', 'Tab5:row6:col3', 'Tab5:row6:col4', 'Tab5:row6:col5'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 70.3 L | not captured | not captured | ['Tab5:row3:col2', 'Tab5:row3:col3', 'Tab5:row3:col4', 'Tab5:row3:col5'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 84.4 L | not captured | not captured | ['Tab5:row4:col2', 'Tab5:row4:col3', 'Tab5:row4:col4', 'Tab5:row4:col5'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=fluticasone propionate) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 6 scholar param(s) emitted or defaulted | 6 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | fail | 1.4028e-07 | 0.0 | 0.0 | pg/ml→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 1.5569e-07 | 0.0 | 0.0 | pg/ml→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 1.3134e-07 | 0.0 | 0.0 | pg/ml→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 1.4678000000000002e-07 | 0.0 | 0.0 | pg/ml→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 9.300000000000001e-10 | 0.0 | 0.0 | pg/ml→SI vs simulated kg/m3 |
| T1_cmax | reference | fail | 9.4e-10 | 0.0 | 0.0 | pg/ml→SI vs simulated kg/m3 |
| T1_tmax | reference | fail | 1.84 | 0.0 | 0.0 | hours→SI vs simulated h |
| T1_tmax | reference | fail | 1.58 | 0.0 | 0.0 | hours→SI vs simulated h |
| T1_tmax | reference | fail | 1.5 | 0.0 | 0.0 | hours→SI vs simulated h |
| T1_tmax | reference | fail | 1.5 | 0.0 | 0.0 | hours→SI vs simulated h |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_fluticasone/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Rebello_2026` / `Rebello_2026::reference`)
- model: `../../../knowledgebase/drugs/drug_fluticasone/models/modelica/Fluticasone_Rebello2026_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_fluticasone/models/modelica/Fluticasone_Rebello2026_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_fluticasone/models/modelica/Fluticasone_Rebello2026_reference.json`


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
</div><figure class="pk-models-diagram"><img src="drugs/drug_fluticasone/Fluticasone_Rebello2026_reference/Fluticasone_Rebello2026_reference.svg" alt="Fluticasone_Rebello2026_reference diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v26.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 1 mg, single dose, first-order absorption (ka 46.8 /h, lag 1.9e+03 min, F 1). Dose in the paper: 1 mg.

<dbs-fmusim paramsurl="drugs/drug_fluticasone/Fluticasone_Rebello2026_reference/Fluticasone_Rebello2026_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_fluticasone/Fluticasone_Rebello2026_reference/Fluticasone_Rebello2026_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_2C_enteral` · parameters `Fluticasone_Rebello2026_reference_params.json` · controls `Fluticasone_Rebello2026_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 23:06 UTC</sub>
