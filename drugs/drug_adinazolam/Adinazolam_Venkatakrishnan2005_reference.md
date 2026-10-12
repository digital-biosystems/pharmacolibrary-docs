<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05B&quot;,&quot;href&quot;:&quot;atc/N05B.md&quot;},{&quot;label&quot;:&quot;adinazolam&quot;,&quot;href&quot;:&quot;drugs/drug_adinazolam/&quot;},{&quot;label&quot;:&quot;Venkatakrishnan_2005 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Adinazolam_Venkatakrishnan2005_reference&quot;,&quot;label&quot;:&quot;Venkatakrishnan_2005_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_adinazolam/Adinazolam_Venkatakrishnan2005_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# adinazolam — `Adinazolam_Venkatakrishnan2005_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.062). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** A simulatable model was generated — see the **Models** and **Simulation** tabs.

### Reviewer guidance

**The adinazolam parent–metabolite record was rejected because the absorption rate constant ka (and Tlag) were left at library defaults instead of values from the paper, and the model structure did not match the measured N-desmethyl adinazolam output.**

The record, built from the abstract only, reports summary statistics for adinazolam and N-desmethyl adinazolam (e.g. Vm/F 100 L, CLm/F 321 mL/min, t1/2z 2.8 h) but no fitted model. The model output was set to the parent drug's concentration in its central compartment rather than to the measured metabolite N-desmethyl adinazolam, and the structure was a single-compartment model with extravascular dosing instead of a parent–metabolite structure. The builder defaulted ka and Tlag, assumed F=1 and Fm=1 without molar correction, and used first-order depot input; the ka default is not supported by the paper and the deviation adjudication found defaulted parameters and invented absorption unacceptable. Extracted — adinazolam: Vm/F 106 L, t1/2z 2.9 hours, CLm/F 444 mL/min; N-desmethyl adinazolam: Vm/F 100 L, t1/2z 2.8 hours, CLm/F 321 mL/min; alprazolam: V 77 L, t1/2z 14.6 hours, CL 84 mL/min.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has adinazolam, the second reading unknown; it also differs on 14 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> **Dose compound ≠ measured compound:** dosed `adinazolam`, measured `N-desmethyl adinazolam`.

## Citation
Venkatakrishnan K et al., Kinetics and dynamics of intravenous ad…, Journal of clinical pharmac… (2005)
  ·  DOI: [10.1177/0091270004269105](https://doi.org/10.1177/0091270004269105)

## Model component
<dbs-pgx drug="adinazolam" model-id="Adinazolam_Venkatakrishnan2005_reference" status="rejected" stale="false" population="healthy male volunteers" measured-compound="N-desmethyl adinazolam" parameterization="apparent" topology="parent_metabolite"></dbs-pgx>

**Model structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameters:** 9 extracted.

**Parameterization:** CLm/F, Vm/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| volume of distribution (L), adinazolam | `Q367` · Vm/F | 106 | L | 0.106 | [l] | not captured | llm_confirmed (0.6) | Venkatakrishnan_2005:abstract | — | not captured |
| volume of distribution (L), NDMAD | `Q367` · Vm/F | 100 | L | 0.1 | [l] | not captured | llm_confirmed (0.6) | Venkatakrishnan_2005:abstract | — | not captured |
| volume of distribution (L), alprazolam | `Q61` · V | 77 | L | 0.077 | [l] | not captured | llm_confirmed (0.6) | Venkatakrishnan_2005:abstract | — | not captured |
| elimination half-life (hours), adinazolam | `Q57` · t1/2z | 2.9 | hours | 10440.0 | [h] | not captured | llm (0.6) | Venkatakrishnan_2005:abstract | — | not captured |
| elimination half-life (hours), NDMAD | `Q57` · t1/2z | 2.8 | hours | 10080.0 | [h] | not captured | llm (0.6) | Venkatakrishnan_2005:abstract | — | not captured |
| elimination half-life (hours), alprazolam | `Q57` · t1/2z | 14.6 | hours | 52560.0 | [h] | not captured | llm (0.6) | Venkatakrishnan_2005:abstract | — | not captured |
| clearance (mL/min), adinazolam | `Q351` · CLm/F | 444 | mL/min | 7.4e-06 | [ml] / [min] | not captured | llm_confirmed (0.6) | Venkatakrishnan_2005:abstract | — | not captured |
| clearance (mL/min), NDMAD | `Q351` · CLm/F | 321 | mL/min | 5.35e-06 | [ml] / [min] | not captured | llm_confirmed (0.6) | Venkatakrishnan_2005:abstract | — | not captured |
| clearance (mL/min), alprazolam | `Q22` · CL | 84 | mL/min | 1.4e-06 | [ml] / [min] | not captured | llm_confirmed (0.6) | Venkatakrishnan_2005:abstract | — | not captured |

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
- dropped PD-category row 'effect site equilibration half-life' → Q326 (ke0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Venkatakrishnan_2005:abstract'])
- metabolite n-desmethyl adinazolam: Q61→Q367 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite n-desmethyl adinazolam: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=N-desmethyl adinazolam
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- row roles (LLM): model_class=noncompartmental; 10/10 row label(s) assigned, 0 linked by role; re-tagged N-desmethyl adinazolam→parent ×3, N-desmethyl adinazolam→alprazolam ×3
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- engineer: parent_metabolite composite downgraded to a 1C model of the measured compound — the paper reports the metabolite's own CL and V but neither the parent's disposition nor a formation rate, so the parent sub-component could not be populated; the parent's concentration-time course is NOT produced by this model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Venkatakrishnan_2005_metadata.yaml (10 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `glm-5.3-flash` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.062 (1/16 fields) | 15 |

<details><summary>15 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss-120b` | `parameters[clearance (ml/min), adinazolam]` | 444 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance (ml/min), alprazolam]` | 84 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance (ml/min), ndmad]` | 321 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance]` | not captured | 444 | only_one_extracted |
| `gpt-oss-120b` | `parameters[elimination half-life (hours), adinazolam]` | 2.9 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[elimination half-life (hours), alprazolam]` | 14.6 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[elimination half-life (hours), ndmad]` | 2.8 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[elimination half-life]` | not captured | 2.9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution (l), adinazolam]` | 106 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution (l), alprazolam]` | 77 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution (l), ndmad]` | 100 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution]` | not captured | 106 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | adinazolam | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | N-desmethyl adinazolam | unknown | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Venkatakrishnan_2005:abstract'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Venkatakrishnan_2005:abstract'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Venkatakrishnan_2005:abstract'] |
| C5_dimension_Q367 | pass | [length] ** 3 | not captured | not captured | not captured | ['Venkatakrishnan_2005:abstract'] |
| C5_dimension_Q367 | pass | [length] ** 3 | not captured | not captured | not captured | ['Venkatakrishnan_2005:abstract'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Venkatakrishnan_2005:abstract'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Venkatakrishnan_2005:abstract'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Venkatakrishnan_2005:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Venkatakrishnan_2005:abstract'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 5.04 L/h | not captured | not captured | ['Venkatakrishnan_2005:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 77 L | not captured | not captured | ['Venkatakrishnan_2005:abstract'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_apparent_invariant | not captured | pass | not captured | F=Fm=1, no molar correction | not captured | apparent params must not be double-corrected |
| T3_output_variable | not captured | fail | Metabolite_C (measured=N-desmethyl adinazolam) | central.C | not captured | output must be the measured/analyte compartment |
| T3_param_coverage | not captured | pass | 2 scholar param(s) emitted or defaulted | 2 covered | not captured | all structural parameters accounted for |
| T3_shared_parameters | not captured | pass | 3 shared param(s) bound once | bound once | not captured | shared params must bind one value to both compartments |
| T3_topology_template | not captured | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable; invented_absorption: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_adinazolam/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Venkatakrishnan_2005` / `Venkatakrishnan_2005::reference`)
- model: `../../../knowledgebase/drugs/drug_adinazolam/models/modelica/Adinazolam_Venkatakrishnan2005_reference.mo`
- deviation: `../../../knowledgebase/drugs/drug_adinazolam/models/modelica/Adinazolam_Venkatakrishnan2005_reference.deviation.json`
- sim: `../../../knowledgebase/drugs/drug_adinazolam/models/modelica/Adinazolam_Venkatakrishnan2005_reference.json`


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>No downloads: this record is <b>rejected</b>, so it is not published as a model. Any archives generated for it before the verdict have been removed — a download outlives the page that explains it.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 100 mg, single dose, first-order absorption (ka 0.5 /h, F 1). _The paper's dose was not captured; the simulator's default is used._

<dbs-fmusim paramsurl="drugs/drug_adinazolam/Adinazolam_Venkatakrishnan2005_reference/Adinazolam_Venkatakrishnan2005_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_adinazolam/Adinazolam_Venkatakrishnan2005_reference/Adinazolam_Venkatakrishnan2005_reference_sim_controls.json"></dbs-fmusim>

<sub>Runs this record's model in the browser as WebAssembly. Sliders start at the extracted values; the reference check compares the browser's peak against the FMPy result recorded when the record was built, and is withheld once a value has been edited. Template `PK_1C_enteral` · parameters `Adinazolam_Venkatakrishnan2005_reference_params.json` · controls `Adinazolam_Venkatakrishnan2005_reference_sim_controls.json`. A slider marked *simulator value* is running on the template's own default because this record does not pin that parameter.</sub>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 17:56 UTC</sub>
