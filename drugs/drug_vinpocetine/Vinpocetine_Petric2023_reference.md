<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06B&quot;,&quot;href&quot;:&quot;atc/N06B.md&quot;},{&quot;label&quot;:&quot;vinpocetine&quot;,&quot;href&quot;:&quot;drugs/drug_vinpocetine/&quot;},{&quot;label&quot;:&quot;Petric_2023 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# vinpocetine — `Vinpocetine_Petric2023_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.136). The first reading is what the record holds.">cross-check: disputed</span>

<details class="legend">
<summary>What the badges above mean</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**V1/F and Q/F have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (V1/F and Q/F), so that value has no SI equivalent. None of the extracted parameters is vinpocetine's own; they describe apovincaminic acid (AVA). Extracted — apovincaminic acid (AVA): tlag 0.17 h, D1 1.35 h, CLm/F 56.1 L/h, V1 208 L, Q 14.6 L/h, V2 76.2 L, V1/F 0.15 omega, Q/F 0.47 omega, … (+1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which molecule was measured: this record has apovincaminic acid (AVA), the second reading apovincaminic acid; it also differs on 18 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> **Dose compound ≠ measured compound:** dosed `vinpocetine`, measured `apovincaminic acid (AVA)`.

## Citation
Petric Z et al., Clinical Pharmacology of Vinpocetine: P…, Pharmaceutics (2023)
  ·  DOI: [10.3390/pharmaceutics15102502](https://doi.org/10.3390/pharmaceutics15102502)

<div class="pk-model-meta" hidden drug="vinpocetine" model-id="Vinpocetine_Petric2023_reference" status="needs_review" stale="false" population="healthy adults" measured-compound="apovincaminic acid (AVA)" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 9 extracted.

**Parameterization:** CLm/F, Q/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Tlag_pop h | `Q83` · tlag | 0.17 | h | 612.0 | h | not captured | exact (1.0) | pharmaceutics-15-02502-t001:row3:col1, pharmaceutics-15-02502-t001:row3:col2, pharmaceutics-15-02502-t001:row3:col3 | — | not captured |
| Tk0_pop h | `Q310` · D1 | 1.35 | h | 4860.0 | h | not captured | llm (0.6) | pharmaceutics-15-02502-t001:row4:col1, pharmaceutics-15-02502-t001:row4:col2, pharmaceutics-15-02502-t001:row4:col3 | — | not captured |
| Cl/F_pop L/h | `Q351` · CLm/F | 56.15 | L/h | 1.559722222222222e-05 | L/h | not captured | exact (1.0) | pharmaceutics-15-02502-t001:row7:col1, pharmaceutics-15-02502-t001:row7:col2, pharmaceutics-15-02502-t001:row7:col3 | — | not captured |
| V1/F_pop L | `Q63` · V1 | 208.34 | L | 0.20834 | L | not captured | exact (1.0) | pharmaceutics-15-02502-t001:row8:col1, pharmaceutics-15-02502-t001:row8:col2, pharmaceutics-15-02502-t001:row8:col3 | — | not captured |
| Q/F_pop L | `Q30` · Q | 14.63 | L/h | 4.063888888888889e-06 | L/h | not captured | exact (1.0) | pharmaceutics-15-02502-t001:row11:col1, pharmaceutics-15-02502-t001:row11:col2, pharmaceutics-15-02502-t001:row11:col3 | — | not captured |
| V2/F_pop L | `Q64` · V2 | 76.15 | L | 0.07615000000000001 | L | not captured | exact (1.0) | pharmaceutics-15-02502-t001:row12:col1, pharmaceutics-15-02502-t001:row12:col2, pharmaceutics-15-02502-t001:row12:col3 | — | not captured |
| ω_V1/F | `Q290` · V1/F | 0.15 | omega | not captured | [omega] | not captured | llm (0.6) | pharmaceutics-15-02502-t001:row17:col1, pharmaceutics-15-02502-t001:row17:col2, pharmaceutics-15-02502-t001:row17:col3 | — | not captured |
| ω_Q/F | `Q69` · Q/F | 0.47 | omega | not captured | [omega] | not captured | llm (0.6) | pharmaceutics-15-02502-t001:row18:col1, pharmaceutics-15-02502-t001:row18:col2, pharmaceutics-15-02502-t001:row18:col3 | — | not captured |
| corr_V1/F_Cl/F | `Q900` · equation variable | 0.72 | not captured | not captured | not captured | not captured | llm (0.6) | pharmaceutics-15-02502-t001:row21:col1, pharmaceutics-15-02502-t001:row21:col2, pharmaceutics-15-02502-t001:row21:col3 | — | not captured |
| b | `Q319` · allometric_exponent | 0.14 | not captured | not captured | not captured | not captured | llm (0.6) | pharmaceutics-15-02502-t001:row23:col1, pharmaceutics-15-02502-t001:row23:col2, pharmaceutics-15-02502-t001:row23:col3 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'stochastic approximation' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- routed 'β_Tk0_Formulation#2' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'β_Tk0_Formulation#3' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'β_V1/F_Formulation#2' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'β_V1/F_Formulation#3' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- routed 'ω_Tlag' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'ω_Tk0' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'ω_Cl/F' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- unit_dimension_unknown: 'omega' (V1/F)
- unit_dimension_unknown: 'omega' (Q/F)
- routed 'ω_V2/F' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- implicit units: 'Tlag_pop h' → h (from the paper text: "Table 1 caption: 'Tlag_pop—estimated lag time before absorption'; lag times are in hours, and the paper discusses half-l")
- implicit units: 'Tk0_pop h' → h (from the paper text: "Table 1 caption: 'Tk0_pop—estimated zero-order input'; a zero-order input duration is expressed in hours.")
- implicit units: 'Cl/F_pop L/h' → L/h (from the paper text: "Text: 'The average CL/F, with a value of 56.15 L/h'.")
- implicit units: 'V1/F_pop L' → L (from the paper text: "Text: 'The volume of distribution at steady state (V1/F + V2/F) ... around 135 L' consistent with volumes in L.")
- implicit units: 'Q/F_pop L' → L/h (from the popPK convention: 'Table caption defines Q/F as intercompartmental clearance; clearances are conventionally in L/h, consistent with CL/F = ')
- implicit units: 'V2/F_pop L' → L (from the paper text: "Text: 'volume of distribution at steady state (V1/F + V2/F) ... around 135 L' (208.34 + 76.15 ≈ 284 L for formulation #1")
- metabolite apovincaminic acid (ava): Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=apovincaminic acid (AVA)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: none — only the metabolite is modelled — no parent compartment
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 18/18 row label(s) assigned, 15 linked by role
- review gap-fill skipped: this record measures 'apovincaminic acid (AVA)', not vinpocetine — the review values are the parent's

**Extraction notes:**
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
first reading `glm-5.3-flash` — the numbers on this page are its, whatever the readers say

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.136 (3/22 fields) | 19 |

<details><summary>19 field(s) a reader read differently</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[b]` | 0.14 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f_pop l/h]` | not captured | 56.15 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f_pop l/h]` | 56.15 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[corr_v1/f_cl/f]` | 0.72 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f_pop l]` | not captured | 14.63 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f_pop l]` | 14.63 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[tk0_pop h]` | not captured | 1.35 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tk0_pop h]` | 1.35 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[tlag_pop h]` | not captured | 0.17 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tlag_pop h]` | 0.17 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1/f_pop l]` | not captured | 208.34 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1/f_pop l]` | 208.34 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2/f_pop l]` | not captured | 76.15 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2/f_pop l]` | 76.15 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[β_v1/f_formulation#2]` | not captured | -1.26 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ω_cl/f]` | not captured | 0.21 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ω_q/f]` | 0.47 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ω_v1/f]` | 0.15 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.primary_analyte` | apovincaminic acid (AVA) | apovincaminic acid | mismatch |

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
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['pharmaceutics-15-02502-t001:row11:col1', 'pharmaceutics-15-02502-t001:row11:col2', 'pharmaceutics-15-02502-t001:row11:col3'] |
| C5_dimension_Q310 | pass | [time] | not captured | not captured | not captured | ['pharmaceutics-15-02502-t001:row4:col1', 'pharmaceutics-15-02502-t001:row4:col2', 'pharmaceutics-15-02502-t001:row4:col3'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['pharmaceutics-15-02502-t001:row7:col1', 'pharmaceutics-15-02502-t001:row7:col2', 'pharmaceutics-15-02502-t001:row7:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['pharmaceutics-15-02502-t001:row8:col1', 'pharmaceutics-15-02502-t001:row8:col2', 'pharmaceutics-15-02502-t001:row8:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['pharmaceutics-15-02502-t001:row12:col1', 'pharmaceutics-15-02502-t001:row12:col2', 'pharmaceutics-15-02502-t001:row12:col3'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['pharmaceutics-15-02502-t001:row3:col1', 'pharmaceutics-15-02502-t001:row3:col2', 'pharmaceutics-15-02502-t001:row3:col3'] |
| C5_unit_missing_Q290 | fail | [length] ** 3 | omega | not captured | not captured | ['pharmaceutics-15-02502-t001:row17:col1', 'pharmaceutics-15-02502-t001:row17:col2', 'pharmaceutics-15-02502-t001:row17:col3'] |
| C5_unit_missing_Q69 | fail | [length] ** 3 / [time] | omega | not captured | not captured | ['pharmaceutics-15-02502-t001:row18:col1', 'pharmaceutics-15-02502-t001:row18:col2', 'pharmaceutics-15-02502-t001:row18:col3'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q63 | pass | volume within physiological range | 208 L | not captured | not captured | ['pharmaceutics-15-02502-t001:row8:col1', 'pharmaceutics-15-02502-t001:row8:col2', 'pharmaceutics-15-02502-t001:row8:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 76.2 L | not captured | not captured | ['pharmaceutics-15-02502-t001:row12:col1', 'pharmaceutics-15-02502-t001:row12:col2', 'pharmaceutics-15-02502-t001:row12:col3'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = a volume OR a clearance/elimination term (neither means an exposure/outcome paper, not popPK — rejected); C0c_disposition_complete = BOTH a volume AND a clearance/elimination term, which is what the engineer needs to build (one without the other routes to review, never to the engineer); C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_vinpocetine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Petric_2023` / `Petric_2023::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 00:43 UTC</sub>
