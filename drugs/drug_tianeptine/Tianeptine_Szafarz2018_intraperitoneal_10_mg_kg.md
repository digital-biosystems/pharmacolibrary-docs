<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;tianeptine&quot;,&quot;href&quot;:&quot;drugs/drug_tianeptine/&quot;},{&quot;label&quot;:&quot;Szafarz_2018 \u00b7 intraperitoneal_10_mg_kg&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tianeptine_Grasela1993_reference&quot;,&quot;label&quot;:&quot;Grasela_1993_reference&quot;,&quot;href&quot;:&quot;drugs/drug_tianeptine/Tianeptine_Grasela1993_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tianeptine_Szafarz2018_estimate&quot;,&quot;label&quot;:&quot;Szafarz_2018_estimate&quot;,&quot;href&quot;:&quot;drugs/drug_tianeptine/Tianeptine_Szafarz2018_estimate.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg&quot;,&quot;label&quot;:&quot;Szafarz_2018_intraperitoneal_10_mg_kg&quot;,&quot;href&quot;:&quot;drugs/drug_tianeptine/Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:true},{&quot;id&quot;:&quot;Tianeptine_Szafarz2018_intravenous_1_mg_kg&quot;,&quot;label&quot;:&quot;Szafarz_2018_intravenous_1_mg_kg&quot;,&quot;href&quot;:&quot;drugs/drug_tianeptine/Tianeptine_Szafarz2018_intravenous_1_mg_kg.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tianeptine — `Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg`

> ## <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.769). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

### Reviewer guidance

**Why:** the engineer built the model but a core parameter had no value and was left at its base-class default, so it was not shipped.
**Second reading:** `gpt-oss:120b` read this paper differently on `model.parameterization` (apparent vs mechanistic) and 2 more field(s) — a structural parameter, so the record is disputed.
**How to address:** not a curation fix — the pipeline is the limit here (scholar: a reported unit is missing from the conversion table, so the parameter reached the engineer without an SI value).
<sub>owner: **scholar**</sub>

## Citation
Szafarz M; Wencel A; Pociecha K; Fedak FA; Wlaź P; Wyska E et al. (2018). Naunyn-Schmiedeberg's archives of pharmacology 391
  ·  DOI: [10.1007/s00210-017-1448-2](https://doi.org/10.1007/s00210-017-1448-2)

## Model component
<dbs-pgx drug="tianeptine" model-id="Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg" status="model_quarantined" stale="false" population="rats" measured-compound="tianeptine" parameterization="apparent" topology="parent_metabolite"></dbs-pgx>

**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| t max (h) | `Q56` · tmax | 0.083 | h | 298.8 | [h] | not captured | space_fold (0.95) | Tab3:row4:col5, Tab3:row4:col6, Tab3:row4:col7, Tab3:row4:col8 | — | not captured |
| λ z (h−1) | `Q47` · kel | 14.73 | h−1 | 0.004091666666666667 | [1] / [h] | not captured | space_fold (0.95) | Tab3:row5:col6, Tab3:row5:col8 | — | not captured |
| t 0.5λz (h) | `Q57` · t1/2z | 14.03 | h | 50508.0 | [h] | not captured | llm (0.6) | Tab3:row6:col6, Tab3:row6:col8 | — | not captured |
| V z(V z/F) (L/kg) | `Q61` · V | 18.15 | L/kg | 1.2705 | [l] / [kg] | not captured | space_fold (0.95) | Tab3:row7:col6, Tab3:row7:col8 | — | not captured |
| AUC0-inf (mg∙h/L) | `Q17` · AUC∞ | 7.05 | mg∙h/L | not captured | [[h] · [mg]] / [l] | not captured | exact (1.0) | Tab3:row8:col6, Tab3:row8:col8 | — | not captured |
| CL/(CL/F) (L/h/kg) | `Q27` · CL/F | 7.17 | L/h/kg | 0.00013941666666666665 | [l] / [[h] · [kg]] | not captured | llm_confirmed (0.6) | Tab3:row9:col6, Tab3:row9:col8 | — | not captured |
| MRT (h) | `Q53` · MRT | 10.36 | h | 37296.0 | [h] | not captured | exact (1.0) | Tab3:row11:col6, Tab3:row11:col8 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Parameter' — extend the ontology if this is a real PK parameter (source ['Tab3:row0:col5', 'Tab3:row0:col6', 'Tab3:row0:col7', 'Tab3:row0:col8'])
- dropped unlinked row (NIL): 'C o/C max (mg/L)' — extend the ontology if this is a real PK parameter (source ['Tab3:row3:col6', 'Tab3:row3:col8'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=tianeptine
- population split: 'intraperitoneal 10 mg/kg' subgroup of Szafarz_2018 (paper reports 3 populations: estimate, intraperitoneal 10 mg/kg, intravenous 1 mg/kg)

**Extraction notes:**
- unparsed cell Tab3:row3:col1 = '1.27(0.86–1.9)'
- unparsed cell Tab3:row3:col3 = '0.117(0.064–0.212)'
- unparsed cell Tab3:row3:col5 = '6.65(6.44–6.87)'
- unparsed cell Tab3:row3:col7 = '2.02(1.1–3.43)'
- unparsed cell Tab3:row4:col3 = '0.4(0.054–2.89)'
- unparsed cell Tab3:row5:col1 = '0.59(0.25–1.42)'
- unparsed cell Tab3:row5:col3 = '0.09(0.085–0.099)'
- unparsed cell Tab3:row5:col5 = '0.475(0.332–0.68)'
- unparsed cell Tab3:row5:col7 = '0.187(0.07–0.498)'
- unparsed cell Tab3:row6:col1 = '1.16(0.49–2.75)'
- unparsed cell Tab3:row6:col3 = '7.53(6.98–8.13)'
- unparsed cell Tab3:row6:col5 = '1.46(1.018–2.085)'
- unparsed cell Tab3:row6:col7 = '3.69(1.39–9.83)'
- unparsed cell Tab3:row7:col1 = '2.41(0.91–6.4)'
- unparsed cell Tab3:row7:col5 = '6.51(4.03–10.53)'
- unparsed cell Tab3:row8:col1 = '1954.02(1411.02–2705.94)'
- unparsed cell Tab3:row8:col3 = '2371.56(1617.78–3476.46)'
- unparsed cell Tab3:row8:col5 = '11,621.28(9737.58–13,869.36)'
- unparsed cell Tab3:row8:col7 = '14,415.96(12,323.88–16,863.24)'
- unparsed cell Tab3:row9:col1 = '1.84(1.33–2.55)'
- unparsed cell Tab3:row9:col5 = '3.1(2.59–3.69)'
- unparsed cell Tab3:row10:col1 = '2.03(0.89–4.62)'
- unparsed cell Tab3:row11:col1 = '1.25(0.66–2.36)'
- unparsed cell Tab3:row11:col3 = '8.28(6.53–10.5)'
- unparsed cell Tab3:row11:col5 = '0.66(0.51–0.87)'
- unparsed cell Tab3:row11:col7 = '4.1(1.83–9.24)'
- companion parameter table 4 transcribed (13 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.769 (10/13 fields) | 3 |

<details><summary>3 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss:120b` | `parameters[c o/c max]` | not captured | 1.3 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl/(cl/f)].parameter_id` | Q27 | Q87 | mismatch |

</details>

<details class="legend">
<summary>Cross-check legend</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>a model that re-read the paper independently, always from a different family than the first reading (scholarv2.secondary_for): a qwen primary is checked by gpt-oss:120b, a gpt-oss primary by qwen3.8:27b-mtp-q8_0 — two checkpoints of one family share their misreads, so agreement between them would mean little. A record can have several readers.</td></tr><tr><td><code>agreement</code></td><td>share of the compared fields that reader agreed on.</td></tr><tr><td><code>verdict</code></td><td>per reader: `confirmed` it agrees throughout · `partly confirmed` a non-structural field differs · `not confirmed` a structural one differs (clearance, a volume, ka, a lag) · `primary re-run` the first reading extracted nothing and was given one hinted retry.</td></tr><tr><td><code>combined</code></td><td>the record's verdict over ALL its readers: confirmed only when every reader that answered agrees, disputed as soon as one disagrees on a structural parameter. The most favourable reading is never taken — an extra reader must not be a way to find one that agrees.</td></tr><tr><td><code>kept</code></td><td>which reading the record holds. ALWAYS the first — a disagreement is a signal for a reviewer, never an automatic correction, so the numbers on this page are the first model's either way.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['Tab3:row8:col6', 'Tab3:row8:col8'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row9:col6', 'Tab3:row9:col8'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab3:row5:col6', 'Tab3:row5:col8'] |
| C5_dimension_Q53 | pass | [time] | not captured | not captured | not captured | ['Tab3:row11:col6', 'Tab3:row11:col8'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Tab3:row4:col5', 'Tab3:row4:col6', 'Tab3:row4:col7', 'Tab3:row4:col8'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Tab3:row6:col6', 'Tab3:row6:col8'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row7:col6', 'Tab3:row7:col8'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 502 L/h | not captured | not captured | ['Tab3:row9:col6', 'Tab3:row9:col8'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 1.27e+03 L | not captured | not captured | ['Tab3:row7:col6', 'Tab3:row7:col8'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_param_coverage | not captured | pass | 3 scholar param(s) emitted or defaulted | 3 covered | not captured | all structural parameters accounted for |
| T3_topology_template | not captured | pass | parent_metabolite → PK_Parent_Metabolite* | PK_Parent_Metabolite | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | pass | not captured | all deviations documented+quantified | not captured | LLM adjudication → deterministic rule |
| T1_t_half_beta | reference | skipped | 7.53 | not captured | not captured | no simulated metric for this quantity (single reference sim) |
| T1_t_half_beta | reference | skipped | 1.16 | not captured | not captured | no simulated metric for this quantity (single reference sim) |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_tianeptine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Szafarz_2018` / `Szafarz_2018::intraperitoneal_10_mg_kg`)
- model: `../../../knowledgebase/drugs/drug_tianeptine/models/modelica/_needs_review/Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg.mo`
- deviation: `../../../knowledgebase/drugs/drug_tianeptine/models/modelica/_needs_review/Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg.deviation.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_tianeptine/Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg/Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg_matlab.zip" download>Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_tianeptine/Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg/Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg_matlab_simbio.zip" download>Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_tianeptine/Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg/Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg_sbml.zip" download>Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_tianeptine/Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg/Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg_cellml.zip" download>Tianeptine_Szafarz2018_intraperitoneal_10_mg_kg_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-24 04:53 UTC</sub>
