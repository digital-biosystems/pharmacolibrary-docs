<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A04A&quot;,&quot;href&quot;:&quot;atc/A04A.md&quot;},{&quot;label&quot;:&quot;rolapitant&quot;,&quot;href&quot;:&quot;drugs/drug_rolapitant/&quot;},{&quot;label&quot;:&quot;Wang_2019 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Rolapitant_Li2026_fosrolapitant&quot;,&quot;label&quot;:&quot;Li_2026_fosrolapitant&quot;,&quot;href&quot;:&quot;drugs/drug_rolapitant/Rolapitant_Li2026_fosrolapitant.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Rolapitant_Li2026_healthy_control&quot;,&quot;label&quot;:&quot;Li_2026_healthy_control&quot;,&quot;href&quot;:&quot;drugs/drug_rolapitant/Rolapitant_Li2026_healthy_control.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Rolapitant_Li2026_moderate_hepatic_impairment&quot;,&quot;label&quot;:&quot;Li_2026_moderate_hepatic_impairment&quot;,&quot;href&quot;:&quot;drugs/drug_rolapitant/Rolapitant_Li2026_moderate_hepatic_impairment.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Rolapitant_Li2026_rolapitant&quot;,&quot;label&quot;:&quot;Li_2026_rolapitant&quot;,&quot;href&quot;:&quot;drugs/drug_rolapitant/Rolapitant_Li2026_rolapitant.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Rolapitant_Wang2019_reference&quot;,&quot;label&quot;:&quot;Wang_2019_reference&quot;,&quot;href&quot;:&quot;drugs/drug_rolapitant/Rolapitant_Wang2019_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# rolapitant — `Rolapitant_Wang2019_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

### Reviewer guidance

**The rolapitant parent–metabolite record was rejected because the peripheral volume V2 (164 L) was neither emitted nor defaulted, the model output was the parent compartment instead of the measured analyte, and the structure was reduced to a one-compartment model with an invented ka.**

The paper's topology is a parent–metabolite model (rolapitant metabolizing to M19), but the built model used a one-compartment enteral structure, and the model output was the parent central compartment rather than the measured analyte compartment. Of the four expected parameters, only three were covered: V2 (164 L) was missing, while ka and Tlag were left at library defaults because the abstract-only source did not report them. The builder also assumed F=1 and Fm=1 without molar correction and invented a first-order absorption rate not present in the source, which was judged unacceptable. Extracted — rolapitant: CL/F 0.962 L/h, V1 214 L, Q 2.79 L/h, V2 164 L, CLm/F 1.83 L/h.

<sub>reviewed by glm-5.3-flash</sub>

## Citation
not matched (stem Wang_2019)

## Model component
<dbs-pgx drug="rolapitant" model-id="Rolapitant_Wang2019_reference" status="rejected" stale="false" population="patients with chemotherapy-induced nausea and vomiting" measured-compound="rolapitant" parameterization="apparent" topology="parent_metabolite"></dbs-pgx>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 5 extracted.

**Parameterization:** CL/F, CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| apparent oral clearance | `Q27` · CL/F | 0.962 | L/h | 2.672222222222222e-07 | [l] / [h] | not captured | exact (1.0) | Wang_2019:abstract | — | not captured |
| central compartment volume of distribution | `Q63` · V1 | 214 | L | 0.214 | [l] | not captured | llm_confirmed (0.6) | Wang_2019:abstract | — | not captured |
| intercompartment clearance | `Q30` · Q | 2.79 | L/h | 7.75e-07 | [l] / [h] | not captured | llm_corrected (0.6) | Wang_2019:abstract | — | not captured |
| peripheral compartment volume of distribution | `Q64` · V2 | 164 | L | 0.164 | [l] | not captured | llm_confirmed (0.6) | Wang_2019:abstract | — | not captured |
| apparent metabolite clearance | `Q351` · CLm/F | 1.83 | L/h | 5.083333333333334e-07 | [l] / [h] | not captured | exact (1.0) | Wang_2019:abstract | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `defaulted_parameters`: ['ka', 'Tlag']
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)
- `invented_absorption`: ka defaulted — not reported in source
- `input_model`: first-order depot input — apparent (/F) parameterization ⇒ extravascular dosing

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=rolapitant
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- engineer: parent → metabolite not buildable on PK_3M_9C (None) — the measured compound's 1-compartment model instead

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Wang_2019_metadata.yaml (5 record(s)); values are summary statistics, not a fitted model

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Wang_2019:abstract'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Wang_2019:abstract'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Wang_2019:abstract'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Wang_2019:abstract'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Wang_2019:abstract'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.962 L/h | not captured | not captured | ['Wang_2019:abstract'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 214 L | not captured | not captured | ['Wang_2019:abstract'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 164 L | not captured | not captured | ['Wang_2019:abstract'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | fail | Metabolite_C (measured=rolapitant) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | fail | 4 scholar param(s) emitted or defaulted | 3 covered | not captured | neither emitted nor in defaulted[]: ['V2'] |
| T3_topology_template | not captured | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_rolapitant/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Wang_2019` / `Wang_2019::reference`)
- model: `../../../knowledgebase/drugs/drug_rolapitant/models/modelica/Rolapitant_Wang2019_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_rolapitant/models/modelica/Rolapitant_Wang2019_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_rolapitant/models/modelica/Rolapitant_Wang2019_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 180 mg, single dose, first-order absorption (ka 0.5 /h, F 1). _The paper's dose was not captured; the default is the WHO ATC DDD 180 mg oral (A04AD14) (defined daily dose)._

<dbs-fmusim paramsurl="drugs/drug_rolapitant/Rolapitant_Wang2019_reference/Rolapitant_Wang2019_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_rolapitant/Rolapitant_Wang2019_reference/Rolapitant_Wang2019_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_1C_enteral` · parameters `Rolapitant_Wang2019_reference_params.json` · controls `Rolapitant_Wang2019_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-09-18 13:34 UTC</sub>
