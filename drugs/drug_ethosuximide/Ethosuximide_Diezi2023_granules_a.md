<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;ethosuximide&quot;,&quot;href&quot;:&quot;drugs/drug_ethosuximide/&quot;},{&quot;label&quot;:&quot;Diezi_2023 \u00b7 granules_a&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ethosuximide_Diezi2023_final_model&quot;,&quot;label&quot;:&quot;Diezi_2023_final_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ethosuximide/Ethosuximide_Diezi2023_final_model.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ethosuximide_Diezi2023_granules_a&quot;,&quot;label&quot;:&quot;Diezi_2023_granules_a&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ethosuximide/Ethosuximide_Diezi2023_granules_a.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Ethosuximide_Diezi2023_granules_b&quot;,&quot;label&quot;:&quot;Diezi_2023_granules_b&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ethosuximide/Ethosuximide_Diezi2023_granules_b.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ethosuximide_Diezi2023_syrup_zarontin_b&quot;,&quot;label&quot;:&quot;Diezi_2023_syrup_zarontin_b&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ethosuximide/Ethosuximide_Diezi2023_syrup_zarontin_b.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ethosuximide — `Ethosuximide_Diezi2023_granules_a`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.588). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

### Reviewer guidance

**The model does not reproduce the paper's time of the peak (tmax) (paper 0.63, model 1.18).**

Simulated as the paper dosed it, the model's time of the peak (tmax) differs from the value the paper reports by more than the tolerance. A reported unit could not be converted (Cmax, AUClast and AUC∞), so that value has no SI equivalent. Extracted — ethosuximide: Cmax 18.2 μg/ml, AUClast 1.34e+03 μg·h/ml, AUC∞ 1.35e+03 μg·h/ml, t1/2z 62.3 h, CLnorm/F 7.6 ml/h/kg, Vnorm/F 646 ml/kg, CL 0.57 L/h, Q 10.2 L/h, … (+3).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of cl: this record has 0.57, the second reading none; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Diezi L et al., An innovative ethosuximide granule form…, Pharmacology research & per… (2023)
  ·  DOI: [10.1002/prp2.1032](https://doi.org/10.1002/prp2.1032)

## Model component
<dbs-pgx drug="ethosuximide" model-id="Ethosuximide_Diezi2023_granules_a" status="needs_review" stale="false" population="healthy adults" measured-compound="ethosuximide" parameterization="apparent" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 11 extracted.

**Parameterization:** CLnorm/F, Vnorm/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| C max [μg/ml] | `Q32` · Cmax | 18.2 | μg/ml | not captured | [µg] / [ml] | not captured | llm (0.6) | Diezi_2023_table_1:row1:col1 | — | not captured |
| AUC(0,last) [μg·h/ml] | `Q74` · AUClast | 1340 | μg·h/ml | not captured | [[h] · [µg]] / [ml] | not captured | llm_corrected (0.6) | Diezi_2023_table_1:row3:col1 | — | not captured |
| AUC(0,∞) [μg·h/ml] | `Q17` · AUC∞ | 1350 | μg·h/ml | not captured | [[h] · [µg]] / [ml] | not captured | llm_corrected (0.6) | Diezi_2023_table_1:row4:col1 | — | not captured |
| t 1/2 [h] | `Q57` · t1/2z | 62.3 | h | 224280.0 | [h] | not captured | llm (0.6) | Diezi_2023_table_1:row5:col1 | — | not captured |
| CLTot/F [ml/h/kg] | `Q355` · CLnorm/F | 7.6 | ml/h/kg | 1.4777777777777776e-07 | [ml] / [[h] · [kg]] | not captured | llm (0.6) | Diezi_2023_table_1:row6:col1 | — | not captured |
| V z/F [ml/kg] | `Q353` · Vnorm/F | 646 | ml/kg | 0.045219999999999996 | [ml] / [kg] | not captured | llm (0.6) | Diezi_2023_table_1:row7:col1 | — | not captured |
| CL | `Q22` · CL | 0.57 | L/h | 1.5833333333333333e-07 | L/h | not captured | exact (1.0) | Diezi_2023:other_prose | — | not captured |
| Q | `Q30` · Q | 10.2 | L/h | 2.833333333333333e-06 | L/h | not captured | exact (1.0) | Diezi_2023:other_prose | — | not captured |
| V C | `Q63` · V1 | 31.3 | L | 0.0313 | L | not captured | space_fold (0.95) | Diezi_2023:other_prose | — | not captured |
| V P | `Q64` · V2 | 13.9 | L | 0.013900000000000001 | L | not captured | space_fold (0.95) | Diezi_2023:other_prose | — | not captured |
| ka1 | `Q49` · kabs | 5.59 | /h | 0.0015527777777777777 | 1/h | not captured | review_gapfill (0.7) | Diezi_2023:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- salvaged Q22 ('CL'=0.57) from results prose — parameter table was unreadable
- salvaged Q30 ('Q'=10.2) from results prose — parameter table was unreadable
- salvaged Q63 ('V C'=31.3) from results prose — parameter table was unreadable
- salvaged Q64 ('V P'=13.9) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=ethosuximide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'granules (a)' subgroup of Diezi_2023 (paper reports 4 populations: final model, granules (a), granules (b), syrup (zarontin®) (b))
- gap-filled Q49 (kabs) from Diezi_2023's review values (primary lacked it)

**Extraction notes:**
- unparsed cell prp21032-tbl-0002:row2:col6 = '(0.53; 0.61)'
- unparsed cell prp21032-tbl-0002:row2:col8 = '(12.3; 20.9)'
- unparsed cell prp21032-tbl-0002:row3:col8 = '(3.2; 11.5)'
- unparsed cell prp21032-tbl-0002:row6:col6 = '(2.70; 11.8)'
- unparsed cell prp21032-tbl-0002:row6:col8 = '(66.3; 144.4)'
- unparsed cell prp21032-tbl-0002:row7:col6 = '(1.40; 2.95)'
- unparsed cell prp21032-tbl-0002:row7:col8 = '(32.5; 78.3)'
- unparsed cell prp21032-tbl-0002:row8:col6 = '(1.38; 2.26)'
- unparsed cell prp21032-tbl-0002:row9:col6 = '(0.12; 0.18)'
- unparsed cell prp21032-tbl-0002:row10:col6 = '(0.02; 0.04)'
- transposed table Diezi_2023_table_1: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- companion parameter table 1 transcribed (18 record(s))
- LLM selected parameter table(s) 1
- dropped sensitivity-analysis table(s) 2 from the LLM selection — perturbations of a model, not a model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8-27b` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.588 (10/17 fields) | 7 |

<details><summary>7 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl]` | 0.57 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cltot/f [ml/h/kg]].parameter_id` | Q355 | Q27 | mismatch |
| `gpt-oss-120b` | `parameters[ka1]` | 5.59 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[q]` | 10.2 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v c]` | 31.3 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v p]` | 13.9 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v z/f [ml/kg]].parameter_id` | Q353 | Q76 | mismatch |

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
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Diezi_2023_table_1:row4:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Diezi_2023_table_1:row1:col1'] |
| C5_dimension_Q353 | pass | [length] ** 3 | not captured | not captured | not captured | ['Diezi_2023_table_1:row7:col1'] |
| C5_dimension_Q355 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Diezi_2023_table_1:row6:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Diezi_2023:review'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Diezi_2023_table_1:row5:col1'] |
| C5_dimension_Q74 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Diezi_2023_table_1:row3:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.57 L/h | not captured | not captured | ['Diezi_2023:other_prose'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 31.3 L | not captured | not captured | ['Diezi_2023:other_prose'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 13.9 L | not captured | not captured | ['Diezi_2023:other_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | pass | C_central (measured=ethosuximide) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 5 scholar param(s) emitted or defaulted | 5 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |
| T1_cmax | reference | skipped | 93.7 | 0.011677483440997678 | not captured | unresolved concentration unit (exp '90% Confidence Interval (CI): 76.3–115.1', sim 'kg/m3') |
| T1_cmax | reference | skipped | 87.6 | 0.011677483440997678 | not captured | unresolved concentration unit (exp '90% CI: 81.6–94.0', sim 'kg/m3') |
| T1_tmax | reference | fail | 0.63 | 1.1831983614146855 | 1.8781 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.75 | 1.1831983614146855 | 1.5776 | h→SI vs simulated h |
| T1_tmax | reference | fail | 0.5 | 1.1831983614146855 | 2.3664 | h→SI vs simulated h |
| T1_tmax | reference | fail | 4.0 | 1.1831983614146855 | 0.2958 | h→SI vs simulated h |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_ethosuximide/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Diezi_2023` / `Diezi_2023::granules_a`)
- model: `../../../knowledgebase/drugs/drug_ethosuximide/models/modelica/Ethosuximide_Diezi2023_granules_a.mo`
- deviation: `../../../knowledgebase/drugs/drug_ethosuximide/models/modelica/Ethosuximide_Diezi2023_granules_a.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_ethosuximide/models/modelica/Ethosuximide_Diezi2023_granules_a.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_ethosuximide/Ethosuximide_Diezi2023_granules_a/Ethosuximide_Diezi2023_granules_a_modelica.zip" download>Ethosuximide_Diezi2023_granules_a_modelica.zip</a> <span class="pk-size">(4.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_ethosuximide/Ethosuximide_Diezi2023_granules_a/Ethosuximide_Diezi2023_granules_a_fmi.zip" download>Ethosuximide_Diezi2023_granules_a_fmi.zip</a> <span class="pk-size">(4.3 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_ethosuximide/Ethosuximide_Diezi2023_granules_a/Ethosuximide_Diezi2023_granules_a_matlab.zip" download>Ethosuximide_Diezi2023_granules_a_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_ethosuximide/Ethosuximide_Diezi2023_granules_a/Ethosuximide_Diezi2023_granules_a_matlab_simbio.zip" download>Ethosuximide_Diezi2023_granules_a_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_ethosuximide/Ethosuximide_Diezi2023_granules_a/Ethosuximide_Diezi2023_granules_a_sbml.zip" download>Ethosuximide_Diezi2023_granules_a_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_ethosuximide/Ethosuximide_Diezi2023_granules_a/Ethosuximide_Diezi2023_granules_a_cellml.zip" download>Ethosuximide_Diezi2023_granules_a_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_2C_enteral.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_ethosuximide/Ethosuximide_Diezi2023_granules_a/Ethosuximide_Diezi2023_granules_a.svg" alt="Ethosuximide_Diezi2023_granules_a diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v26.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 700 mg, single dose, first-order absorption (ka 5.59 /h, F 1). Dose in the paper: 700 mg.

<dbs-fmusim paramsurl="drugs/drug_ethosuximide/Ethosuximide_Diezi2023_granules_a/Ethosuximide_Diezi2023_granules_a_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_ethosuximide/Ethosuximide_Diezi2023_granules_a/Ethosuximide_Diezi2023_granules_a_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_2C_enteral` · parameters `Ethosuximide_Diezi2023_granules_a_params.json` · controls `Ethosuximide_Diezi2023_granules_a_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 07:47 UTC</sub>
