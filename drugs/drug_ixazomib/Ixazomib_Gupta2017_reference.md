<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;ixazomib&quot;,&quot;href&quot;:&quot;drugs/drug_ixazomib/&quot;},{&quot;label&quot;:&quot;Gupta_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ixazomib_Gupta2017_reference&quot;,&quot;label&quot;:&quot;Gupta_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ixazomib/Ixazomib_Gupta2017_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# ixazomib — `Ixazomib_Gupta2017_reference`

> ## <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.125). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

### Reviewer guidance

**Every check that could be run on this record passed.**

A reported unit could not be converted (Fab), so that value has no SI equivalent.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has ixazomib, the second reading unknown; it also differs on 20 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Gupta N et al., Population Pharmacokinetic Analysis of…, Clinical pharmacokinetics (2017)
  ·  DOI: [10.1007/s40262-017-0526-4](https://doi.org/10.1007/s40262-017-0526-4)

## Model component
<dbs-pgx drug="ixazomib" model-id="Ixazomib_Gupta2017_reference" status="curated_candidate" stale="false" population="adults with multiple myeloma" measured-compound="ixazomib" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Model structure:** 2-compartment, oral mammillary model — template `PK_2C_enteral`.  
**Parameters:** 9 extracted.

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Absorption rate constant (log K a) | `Q49` · kabs | -1.09 | 1/h | -0.0003027777777777778 | 1/h | 8 | exact (1.0) | Tab3:row1:col1, Tab3:row1:col2, Tab3:row1:col4 | — | not captured |
| Systemic clearance (log CL) | `Q22` · CL | 0.62 | L/h | 1.7222222222222222e-07 | L/h | 7 | llm_confirmed (0.6) | Tab3:row2:col1, Tab3:row2:col2, Tab3:row2:col4 | — | not captured |
| Central volume of distribution (log V 2) | `Q63` · V1 | 2.62 | L | 0.0026200000000000004 | L | 4 | boundary_compartment (0.9) | Tab3:row3:col1, Tab3:row3:col2 | — | not captured |
| Absolute bioavailability (log F) | `Q40` · Fab | -0.55 | log F | not captured | not captured | 9 | exact (1.0) | Tab3:row4:col1, Tab3:row4:col2 | — | not captured |
| First inter-compartmental clearance (log Q3) | `Q308` · Q3 | 1.65 | L/h | 4.583333333333333e-07 | L/h | 7 | llm_corrected (0.6) | Tab3:row5:col1, Tab3:row5:col2, Tab3:row5:col4 | — | not captured |
| Volume of the first peripheral compartment (log V 3) | `Q64` · V2 | 5.73 | L | 0.005730000000000001 | L | 1 | boundary_compartment (0.9) | Tab3:row6:col1, Tab3:row6:col2 | — | not captured |
| Second inter-compartmental clearance (log Q4) | `Q30` · Q | 3.26 | L/h | 9.055555555555556e-07 | L/h | 2 | llm_confirmed (0.6) | Tab3:row7:col1, Tab3:row7:col2, Tab3:row7:col4 | — | not captured |
| Volume of the second peripheral compartment (log V 4) | `Q77` · V3 | 5.32 | L | 0.00532 | L | 1 | exact (1.0) | Tab3:row8:col1, Tab3:row8:col2 | — | not captured |
| Absorption lag time (log T LAG) | `Q83` · tlag | -1.52 | h | -5472.0 | h | 0 | exact (1.0) | Tab3:row9:col1, Tab3:row9:col2 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'log K a' (kabs)
- unit_dimension_unknown: 'log CL' (CL)
- unit_dimension_unknown: 'log V 2' (V1)
- unit_dimension_unknown: 'log Q3' (Q3)
- unit_dimension_unknown: 'log V 3' (V2)
- unit_dimension_unknown: 'log Q4' (Q)
- unit_dimension_unknown: 'log V 4' (V3)
- unit_dimension_unknown: 'log T LAG' (tlag)
- unit_dimension_unknown: 'V 4[BSA]' (V2)
- dropped duplicate Q64 ('Impact of BSA on V 4 (V 4[BSA])', value '2.06') — already have one for this compound
- implicit units: 'Absorption rate constant (log K a)' → 1/h (from the paper text: "Table 3 explicitly states the untransformed parameter for Absorption rate constant as '1/h ~ t 1/2 = 124 min'.")
- implicit units: 'Systemic clearance (log CL)' → L/h (from the paper text: "Table 3 explicitly states the untransformed parameter for Systemic clearance as '1.86 L/h'. The text also confirms 'syst")
- implicit units: 'Central volume of distribution (log V 2)' → L (from the paper text: "Table 3 explicitly states the untransformed parameter for Central volume of distribution as '13.7 L'. The text also conf")
- implicit units: 'First inter-compartmental clearance (log Q3)' → L/h (from the paper text: "Table 3 explicitly states the untransformed parameter for First inter-compartmental clearance as '5.18 L/h'.")
- implicit units: 'Volume of the first peripheral compartment (log V 3)' → L (from the paper text: "Table 3 explicitly states the untransformed parameter for Volume of the first peripheral compartment as '309 L'.")
- implicit units: 'Second inter-compartmental clearance (log Q4)' → L/h (from the paper text: "Table 3 explicitly states the untransformed parameter for Second inter-compartmental clearance as '27.4 L/h' (implied by")
- implicit units: 'Volume of the second peripheral compartment (log V 4)' → L (from the popPK convention: 'The text excerpt truncates the line for Volume of the second peripheral compartment. However, Volume of the first periph')
- implicit units: 'Absorption lag time (log T LAG)' → h (from the popPK convention: "The text excerpt truncates the line for Absorption lag time. However, the text mentions 'median time to maximum plasma c")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=ixazomib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted

**Extraction notes:**
- unparsed cell Tab3:row3:col4 = '13.7 L'
- unparsed cell Tab3:row4:col4 = '58%'
- unparsed cell Tab3:row6:col4 = '309 L'
- unparsed cell Tab3:row8:col4 = '205 L'
- unparsed cell Tab3:row9:col4 = '13 min'
- unparsed cell Tab3:row10:col4 = '−37 and +46% at the 5th and 95th percentile (1.5 and 2.25 m2) on V 4 relative to median BSA (1.87 m2)'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8-27b` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.125 (3/24 fields) | 21 |

<details><summary>21 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[absolute bioavailability]` | -0.55 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[absolute bioavailability]` | not captured | -0.55 | only_one_extracted |
| `gpt-oss-120b` | `parameters[absorption lag time]` | -1.52 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[absorption lag time]` | not captured | -1.52 | only_one_extracted |
| `gpt-oss-120b` | `parameters[absorption rate constant]` | -1.09 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[absorption rate constant]` | not captured | -1.09 | only_one_extracted |
| `gpt-oss-120b` | `parameters[central volume of distribution]` | 2.62 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[central volume of distribution]` | not captured | 2.62 | only_one_extracted |
| `gpt-oss-120b` | `parameters[first inter-compartmental clearance]` | 1.65 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[first inter-compartmental clearance]` | not captured | 1.65 | only_one_extracted |
| `gpt-oss-120b` | `parameters[impact of bsa on v 4]` | not captured | 2.06 | only_one_extracted |
| `gpt-oss-120b` | `parameters[second inter-compartmental clearance]` | 3.26 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[second inter-compartmental clearance]` | not captured | 3.26 | only_one_extracted |
| `gpt-oss-120b` | `parameters[systemic clearance]` | 0.62 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[systemic clearance]` | not captured | 0.62 | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of the first peripheral compartment]` | 5.73 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of the first peripheral compartment]` | not captured | 5.73 | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of the second peripheral compartment]` | 5.32 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of the second peripheral compartment]` | not captured | 5.32 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | ixazomib | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | ixazomib | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 9 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C1_half_life_beta | pass | 9.5 | 10.204 | 1.0741 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row2:col1', 'Tab3:row2:col2', 'Tab3:row2:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row7:col1', 'Tab3:row7:col2', 'Tab3:row7:col4'] |
| C5_dimension_Q308 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row5:col1', 'Tab3:row5:col2', 'Tab3:row5:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab3:row1:col1', 'Tab3:row1:col2', 'Tab3:row1:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row3:col1', 'Tab3:row3:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row6:col1', 'Tab3:row6:col2'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row8:col1', 'Tab3:row8:col2'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Tab3:row9:col1', 'Tab3:row9:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.62 | not captured | not captured | ['Tab3:row2:col1', 'Tab3:row2:col2', 'Tab3:row2:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.62 L/h | not captured | not captured | ['Tab3:row2:col1', 'Tab3:row2:col2', 'Tab3:row2:col4'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 2.62 L | not captured | not captured | ['Tab3:row3:col1', 'Tab3:row3:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 5.73 L | not captured | not captured | ['Tab3:row6:col1', 'Tab3:row6:col2'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_output_variable | not captured | pass | C_central (measured=ixazomib) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 6 scholar param(s) emitted or defaulted | 6 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | 2C → PK_2C* | PK_2C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | not captured | not captured | no engineer deviations to adjudicate |
| T1_t_half_beta | reference | skipped | 9.5 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | skipped | 9.53 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_terminal | reference | skipped | 9.35 | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_ixazomib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Gupta_2017` / `Gupta_2017::reference`)
- model: `../../../knowledgebase/drugs/drug_ixazomib/models/modelica/Ixazomib_Gupta2017_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_ixazomib/models/modelica/Ixazomib_Gupta2017_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_ixazomib/models/modelica/Ixazomib_Gupta2017_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_ixazomib/Ixazomib_Gupta2017_reference/Ixazomib_Gupta2017_reference_modelica.zip" download>Ixazomib_Gupta2017_reference_modelica.zip</a> <span class="pk-size">(4.6 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_ixazomib/Ixazomib_Gupta2017_reference/Ixazomib_Gupta2017_reference_fmi.zip" download>Ixazomib_Gupta2017_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_2C_enteral.fmu" download>PK_2C_enteral.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_ixazomib/Ixazomib_Gupta2017_reference/Ixazomib_Gupta2017_reference_matlab.zip" download>Ixazomib_Gupta2017_reference_matlab.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_ixazomib/Ixazomib_Gupta2017_reference/Ixazomib_Gupta2017_reference_matlab_simbio.zip" download>Ixazomib_Gupta2017_reference_matlab_simbio.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_ixazomib/Ixazomib_Gupta2017_reference/Ixazomib_Gupta2017_reference_sbml.zip" download>Ixazomib_Gupta2017_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_ixazomib/Ixazomib_Gupta2017_reference/Ixazomib_Gupta2017_reference_cellml.zip" download>Ixazomib_Gupta2017_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
<p><b>FMI is two downloads.</b> The archive holds this record's parameters and its driver; the simulator itself is <code>PK_2C_enteral.fmu</code>, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass <code>--fmu PATH</code>). Running it reproduces the model-specific FMU exactly.</p>
</div><figure class="pk-models-diagram"><img src="drugs/drug_ixazomib/Ixazomib_Gupta2017_reference/Ixazomib_Gupta2017_reference.svg" alt="Ixazomib_Gupta2017_reference diagram"><figcaption>Model diagram (Modelica) using Pharmacolibrary v26.09 components, rendered by OpenModelica 1.26.7.</figcaption></figure></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 0.43 mg, single dose, first-order absorption (ka -1.09 /h, lag -91.2 min, F -0.55). _The paper's dose was not captured; the default is the WHO ATC DDD 0.43 mg oral (L01XG03) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_ixazomib/Ixazomib_Gupta2017_reference/Ixazomib_Gupta2017_reference_params.json" metaurl="assets/fmu/PK_2C_enteral.vr.json" wasmurl="assets/fmu/PK_2C_enteral.js" controlsurl="drugs/drug_ixazomib/Ixazomib_Gupta2017_reference/Ixazomib_Gupta2017_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_2C_enteral` · parameters `Ixazomib_Gupta2017_reference_params.json` · controls `Ixazomib_Gupta2017_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 20:49 UTC</sub>
