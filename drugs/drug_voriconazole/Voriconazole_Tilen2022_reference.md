<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J02A&quot;,&quot;href&quot;:&quot;atc/J02A.md&quot;},{&quot;label&quot;:&quot;voriconazole&quot;,&quot;href&quot;:&quot;drugs/drug_voriconazole/&quot;},{&quot;label&quot;:&quot;Tilen_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Voriconazole_Wang2024_reference&quot;,&quot;label&quot;:&quot;Wang_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_voriconazole/Voriconazole_Wang2024_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# voriconazole — `Voriconazole_Tilen2022_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.586). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**This record lacks units for the trough concentration and has an incomplete disposition core with no volume parameter.**

The trough concentration value (-2.0763) has no unit, preventing conversion to standard units. The model also lacks a volume parameter to define the disposition core. Clearance of 9.16 L/h was extracted, but a volume is also needed for a complete model. Extracted — voriconazole: Ctrough -2.08, allometric_exponent 1.14 surface area, m2, CL 9.16 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has voriconazole, the second reading unknown; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Tilen R et al., Pharmacogenetic Analysis of Voriconazol…, Pharmaceutics (2022)
  ·  DOI: [10.3390/pharmaceutics14061289](https://doi.org/10.3390/pharmaceutics14061289)

<div class="pk-model-meta" hidden drug="voriconazole" model-id="Voriconazole_Tilen2022_reference" status="needs_review" stale="false" population="pediatric patients with invasive fungal infections" measured-compound="voriconazole" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 3 extracted, plus 7 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| θ1, Intercept (log(Ctrough)) | `Q37` · Ctrough | -2.0763 | not captured | not captured | not captured | 0.4637 | llm_confirmed (0.6) | pharmaceutics-14-01289-t004:row2:col2, pharmaceutics-14-01289-t004:row2:col3 | — | not captured |
| θ2, ln(dose/weight, mg/kg) | `Q900` · equation variable | 0.8905 | mg/kg | not captured | [mg] / [kg] | 0.2004 | llm (0.6) | pharmaceutics-14-01289-t004:row3:col1, pharmaceutics-14-01289-t004:row3:col2, pharmaceutics-14-01289-t004:row3:col3 | — | not captured |
| θ3, Δ ln(surface area, m2) | `Q319` · allometric_exponent | 1.1437 | surface area, m2 | not captured | [s] · [urfacearea] | 0.2388 | llm (0.6) | pharmaceutics-14-01289-t004:row4:col2, pharmaceutics-14-01289-t004:row4:col3 | — | not captured |
| 8_abcc2_rs2273697 | `Q900` · 8_abcc2_rs2273697 | -0.6581 | mg/kg | not captured | [mg] / [kg] | 0.1708 | not captured (not captured) | pharmaceutics-14-01289-t004:row9:col2, pharmaceutics-14-01289-t004:row9:col3, pharmaceutics-14-01289-t004:row9:col4 | — | not captured |
| 9_abcc2_rs717620 | `Q900` · 9_abcc2_rs717620 | 0.4130 | mg/kg | not captured | [mg] / [kg] | 0.1918 | not captured (not captured) | pharmaceutics-14-01289-t004:row10:col2, pharmaceutics-14-01289-t004:row10:col3, pharmaceutics-14-01289-t004:row10:col4 | — | not captured |
| 10_abcg2_rs2231142 | `Q900` · 10_abcg2_rs2231142 | 0.4481 | mg/kg | not captured | [mg] / [kg] | 0.1391 | not captured (not captured) | pharmaceutics-14-01289-t004:row11:col2, pharmaceutics-14-01289-t004:row11:col3, pharmaceutics-14-01289-t004:row11:col4 | — | not captured |
| 11_cyp2c19_rs4244285 | `Q900` · 11_cyp2c19_rs4244285 | 0.8990 | mg/kg | not captured | [mg] / [kg] | 0.1980 | not captured (not captured) | pharmaceutics-14-01289-t004:row12:col2, pharmaceutics-14-01289-t004:row12:col3 | — | not captured |
| 13_cyp3a4_rs35599367 | `Q900` · 13_cyp3a4_rs35599367 | 3.3737 | mg/kg | not captured | [mg] / [kg] | 0.6203 | not captured (not captured) | pharmaceutics-14-01289-t004:row14:col2, pharmaceutics-14-01289-t004:row14:col3 | — | not captured |
| 14_metamizole_cyp2c19_rs4244285 | `Q900` · 14_metamizole_cyp2c19_rs4244285 | -0.4911 | mg/kg | not captured | [mg] / [kg] | 0.2231 | not captured (not captured) | pharmaceutics-14-01289-t004:row15:col2, pharmaceutics-14-01289-t004:row15:col3, pharmaceutics-14-01289-t004:row15:col4 | — | not captured |
| theta_equation_variable_cyp2c19 | `Q900` · theta_equation_variable_cyp2c19 | 1.6289 | not captured | not captured | not captured | 0.4302 | not captured (not captured) | pharmaceutics-14-01289-t004:row13:col2, pharmaceutics-14-01289-t004:row13:col3, pharmaceutics-14-01289-t004:row13:col4 | — | not captured |
| CL | `Q22` · CL | 9.16 | L/h | 2.5444444444444446e-06 | L/h | not captured | review_gapfill (0.7) | Yang_2021:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'p' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_unknown: 'surface area, m2' (allometric_exponent)
- dropped duplicate Q900 ('θ4, ciprofloxacin', value '-0.9497') — already have one for this compound
- dropped unlinked row (NIL): 'θ5, levetiracetam' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-14-01289-t004:row6:col2', 'pharmaceutics-14-01289-t004:row6:col3', 'pharmaceutics-14-01289-t004:row6:col4'])
- dropped duplicate Q900 ('θ6, propranolol', value '-0.5887') — already have one for this compound
- dropped unlinked row (NIL): 'θ7, metamizole' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-14-01289-t004:row8:col2', 'pharmaceutics-14-01289-t004:row8:col3', 'pharmaceutics-14-01289-t004:row8:col4'])
- covariate level 'θ8, ABCC2 rs2273697' → Q900:8_abcc2_rs2273697 = -0.6581 (linear_fractional on the model)
- covariate level 'θ9, ABCC2 rs717620' → Q900:9_abcc2_rs717620 = 0.4130 (linear_fractional on the model)
- covariate level 'θ10, ABCG2 rs2231142' → Q900:10_abcg2_rs2231142 = 0.4481 (linear_fractional on the model)
- covariate level 'θ11, CYP2C19 rs4244285' → Q900:11_cyp2c19_rs4244285 = 0.8990 (linear_fractional on the model)
- covariate level 'θ13, CYP3A4 rs35599367' → Q900:13_cyp3a4_rs35599367 = 3.3737 (linear_fractional on the model)
- covariate level 'θ14, metamizole × CYP2C19 rs4244285' → Q900:14_metamizole_cyp2c19_rs4244285 = -0.4911 (linear_fractional on the model)
- unit inherited for 8_abcc2_rs2273697 (Q900): 'mg/kg' from a same-Q-code sibling (this row's label had no unit)
- unit inherited for 9_abcc2_rs717620 (Q900): 'mg/kg' from a same-Q-code sibling (this row's label had no unit)
- unit inherited for 10_abcg2_rs2231142 (Q900): 'mg/kg' from a same-Q-code sibling (this row's label had no unit)
- unit inherited for 11_cyp2c19_rs4244285 (Q900): 'mg/kg' from a same-Q-code sibling (this row's label had no unit)
- unit inherited for 13_cyp3a4_rs35599367 (Q900): 'mg/kg' from a same-Q-code sibling (this row's label had no unit)
- unit inherited for 14_metamizole_cyp2c19_rs4244285 (Q900): 'mg/kg' from a same-Q-code sibling (this row's label had no unit)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=voriconazole
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- gap-filled Q22 (CL) from Yang_2021's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell pharmaceutics-14-01289-t004:row2:col4 = '&lt;10−4'
- unparsed cell pharmaceutics-14-01289-t004:row3:col4 = '&lt;10−4'
- unparsed cell pharmaceutics-14-01289-t004:row4:col1 = 'ln(1 m2)'
- unparsed cell pharmaceutics-14-01289-t004:row4:col4 = '&lt;10−5'
- unparsed cell pharmaceutics-14-01289-t004:row9:col1 = 'ABCC2 rs2273697 GG'
- unparsed cell pharmaceutics-14-01289-t004:row10:col1 = 'ABCC2 rs717620 CC'
- unparsed cell pharmaceutics-14-01289-t004:row11:col1 = 'ABCG2 rs2231142 CC'
- unparsed cell pharmaceutics-14-01289-t004:row12:col1 = 'CYP2C19 rs4244285 GG'
- unparsed cell pharmaceutics-14-01289-t004:row12:col4 = '&lt;10−5'
- unparsed cell pharmaceutics-14-01289-t004:row13:col1 = 'CYP2C19 rs4986893 GG'
- unparsed cell pharmaceutics-14-01289-t004:row14:col1 = 'CYP3A4 rs35599367 CC'
- unparsed cell pharmaceutics-14-01289-t004:row14:col4 = '&lt;10−6'
- unparsed cell pharmaceutics-14-01289-t004:row15:col1 = 'No metamizole, CYP2C19 rs4244285 GG'
- LLM selected parameter table(s) 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8-27b` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.586 (17/29 fields) | 12 |

<details><summary>12 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[10_abcg2_rs2231142].covariate_forms` | ['linear_fractional'] | [] | mismatch |
| `gpt-oss-120b` | `parameters[11_cyp2c19_rs4244285].covariate_forms` | ['linear_fractional'] | [] | mismatch |
| `gpt-oss-120b` | `parameters[12_cyp2c19_rs4986893]` | not captured | 1.6289 | only_one_extracted |
| `gpt-oss-120b` | `parameters[13_cyp3a4_rs35599367].covariate_forms` | ['linear_fractional'] | [] | mismatch |
| `gpt-oss-120b` | `parameters[14_metamizole_cyp2c19_rs4244285]` | -0.4911 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[8_abcc2_rs2273697].covariate_forms` | ['linear_fractional'] | [] | mismatch |
| `gpt-oss-120b` | `parameters[9_abcc2_rs717620].covariate_forms` | ['linear_fractional'] | [] | mismatch |
| `gpt-oss-120b` | `parameters[cl]` | 9.16 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_equation_variable_cyp2c19]` | 1.6289 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q314_cyp2c19]` | not captured | -0.4911 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ2, ln]` | 0.8905 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | voriconazole | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 2 | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C2_reference | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Yang_2021:review'] |
| C5_unit_missing_Q37 | fail | [mass] / [length] ** 3 | not captured | not captured | not captured | ['pharmaceutics-14-01289-t004:row2:col2', 'pharmaceutics-14-01289-t004:row2:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 9.16 | not captured | not captured | ['Yang_2021:review'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 9.16 L/h | not captured | not captured | ['Yang_2021:review'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_voriconazole/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Tilen_2022` / `Tilen_2022::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 13:03 UTC</sub>
