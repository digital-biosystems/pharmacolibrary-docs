<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;remdesivir&quot;,&quot;href&quot;:&quot;drugs/drug_remdesivir/&quot;},{&quot;label&quot;:&quot;Zhang_2025 \u00b7 parameters_for_healthy_control_zhang_et_al_2020&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Remdesivir_Morrisette2020_reference&quot;,&quot;label&quot;:&quot;Morrisette_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_remdesivir/Remdesivir_Morrisette2020_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# remdesivir — `Remdesivir_Zhang2025_parameters_for_healthy_control_zhang_et`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The remdesivir record was held back because the intracellular activation rate constant kic (2.44) has no unit, so it cannot be converted to SI, and the clearance plausibility check could not be computed.**

Kic has no unit. Without a unit the value cannot be converted, so the model cannot use it. The clearance plausibility check could not be computed: the check had no reference to compare the reported total clearance of 1171.0 mL/min against, so the value is unverified rather than shown to be wrong. A second reader additionally read a further metabolic step from nucleoside monophosphate to GS-443902 and two parameters (2.99 and 12.53) that this record lacks, so the extracted model structure and parameters are incomplete relative to that reading. Extracted — remdesivir: kic 2.44 Zhang et al., 2020, CL 1.17e+03 mL/min, V 93 L.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has remdesivir, the second reading unknown; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-09-28 14:39:31.569677+00:00) predates the upstream re-run (2026-10-01 15:47:14.766632+00:00). Current validate status: `needs_review`.

## Citation
Zhang S et al., Pharmacokinetic simulations for remdesi…, Frontiers in pharmacology (2025)
  ·  DOI: [10.3389/fphar.2025.1488961](https://doi.org/10.3389/fphar.2025.1488961)

## Model component
<dbs-pgx drug="remdesivir" model-id="Remdesivir_Zhang2025_parameters_for_healthy_control_zhang_et" status="needs_review" stale="true" population="healthy subjects and patients with renal impairment" measured-compound="remdesivir" parameterization="mechanistic" topology="general_linear"></dbs-pgx>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 7 extracted, plus 2 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| QRDV | `Q30` · Q | 0.19 | L/h | 5.277777777777778e-08 | L/h | not captured | exact (1.0) | T1:row1:col2 | — | not captured |
| QIM | `Q30` · Q | 12.53 | L/h | 3.4805555555555554e-06 | L/h | not captured | exact (1.0) | T1:row2:col2 | — | not captured |
| QNUC | `Q30` · Q | 0.039 | L/h | 1.0833333333333333e-08 | L/h | not captured | exact (1.0) | T1:row3:col2 | — | not captured |
| KP,NUC | `Q370` · CLfm | 2.44 | L/h | 6.777777777777778e-07 | L/h | not captured | exact (1.0) | T1:row5:col2 | — | not captured |
| KP,NTP | `Q350` · kic | 3.28E10 | 1/h | 9111111.111111112 | 1/h | not captured | exact (1.0) | T1:row6:col2 | — | not captured |
| CLC,RDV | `Q22` · CL | 2.99 | L/h | 8.305555555555556e-07 | L/h | not captured | exact (1.0) | T1:row9:col2 | — | not captured |
| theta_q370_im | `Q900` · theta_q370_im | 0.31 | not captured | not captured | not captured | not captured | not captured (not captured) | T1:row4:col2 | — | not captured |
| theta_q370_im | `Q900` · theta_q370_im | 0.22 | not captured | not captured | not captured | not captured | not captured (not captured) | T1:row8:col2 | — | not captured |
| mean volume of distribution | `Q61` · V | 93.0 | L | 0.093 | L | not captured | review_gapfill (0.7) | Humeniuk_2021:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- linked 'QRDV' as 'Q' → Q30 (Q) for  — compound marker removed
- unit_dimension_unknown: 'Zhang et al., 2020' (Q)
- unit_dimension_unknown: 'Zhang et al., 2020' (CLfm)
- unit_dimension_unknown: 'Zhang et al., 2020' (kic)
- dropped duplicate Q370 ('KC,NUC', value '0.38') — already have one for this compound
- linked 'CLC,RDV' as 'CL' → Q22 (CL) for  — compound marker removed
- unit_dimension_unknown: 'Zhang et al., 2020' (CL)
- covariate effect for Q370 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'QRDV' → L/h (from the popPK convention: 'The paper does not state a unit for QRDV. QRDV is an intercompartmental clearance (Q). In population PK, intercompartmen')
- implicit units: 'QIM' → L/h (from the popPK convention: 'The paper does not state a unit for QIM. QIM is an intercompartmental clearance (Q). In population PK, intercompartmenta')
- implicit units: 'QNUC' → L/h (from the popPK convention: 'The paper does not state a unit for QNUC. QNUC is an intercompartmental clearance (Q). In population PK, intercompartmen')
- implicit units: 'KP,NUC' → L/h (from the popPK convention: 'The paper does not state a unit for KP,NUC. KP,NUC is a formation clearance (CLfm). In population PK, clearances are con')
- implicit units: 'KP,NTP' → 1/h (from the popPK convention: "The paper does not state a unit for KP,NTP. The parameter description identifies it as a 'First-order rate constant'. Fi")
- implicit units: 'CLC,RDV' → L/h (from the popPK convention: 'The paper does not state a unit for CLC,RDV. CLC,RDV is a total clearance (CL). In population PK, clearances are convent')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=remdesivir
- topology: 2 first-order transfer(s) across 3 compounds → general_linear
- template fit: none — a metabolite is formed from another metabolite (a chain)
- population split: 'parameters for healthy control (zhang et al., 2020)' subgroup of Zhang_2025 (paper reports 3 populations: parameters for a renal-impaired patient with egfr = 0 (sörgel et al., 2021), parameters for healthy control (zhang et al., 2020), parameters for severe renal-impaired patients (zhang et al., 2020))
- row roles (LLM): model_class=compartmental; 10/10 row label(s) assigned, 24 linked by role; re-tagged parent→intermediate metabolites ×9, parent→nucleoside monophosphate ×9
- molar mass: no plausible PubChem entry for 'intermediate metabolites' ('Remdesivir Alanine Metabolite (Ala-Met; GS-704277)') — left in mass units
- molar mass: none of 1 PubChem candidate(s) is 'nucleoside monophosphate' (LLM) — left in mass units
- molar mass: none found for 'intermediate metabolites' — its concentrations stay mass-only
- molar mass: none found for 'nucleoside monophosphate' — its concentrations stay mass-only
- gap-filled Q61 (V) from Humeniuk_2021's review values (primary lacked it)
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell T1:row0:col2 = 'Parameters for healthy control (Zhang et al., 2020)'
- unparsed cell T1:row0:col3 = 'Parameters for severe renal-impaired patients (Zhang et al., 2020)'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `qwen3.8:27b-mtp-q8_0` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.75 (9/12 fields) | 3 |

<details><summary>3 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[clc,rdv].parameter_id` | Q22 | Q26 | mismatch |
| `gpt-oss:120b` | `screen.dose_compound` | remdesivir | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | remdesivir | unknown | mismatch |

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
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T1:row9:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T1:row1:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T1:row2:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T1:row3:col2'] |
| C5_dimension_Q350 | pass | 1 / [time] | not captured | not captured | not captured | ['T1:row6:col2'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T1:row5:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Humeniuk_2021:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 2.99 | not captured | not captured | ['T1:row9:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 2.99 L/h | not captured | not captured | ['T1:row9:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 93 L | not captured | not captured | ['Humeniuk_2021:review'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_remdesivir/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Zhang_2025` / `Zhang_2025::parameters_for_healthy_control_zhang_et_al_2020`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-01 15:47 UTC</sub>
