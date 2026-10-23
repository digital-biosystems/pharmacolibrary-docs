<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;remdesivir&quot;,&quot;href&quot;:&quot;drugs/drug_remdesivir/&quot;},{&quot;label&quot;:&quot;Zhang_2025 \u00b7 parameters_for_healthy_control_zhang_et_al_2020&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Remdesivir_Roberts2025_reference&quot;,&quot;label&quot;:&quot;Roberts_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_remdesivir/Remdesivir_Roberts2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# remdesivir — `Remdesivir_Zhang2025_parameters_for_healthy_control_zhang_et`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The intracellular conversion rate constant for the remdesivir metabolite is 3.28E10 /h, a physically impossible value indicating a data extraction error.

<div class="pk-model-meta" hidden drug="remdesivir" model-id="Remdesivir_Zhang2025_parameters_for_healthy_control_zhang_et" status="rejected" stale="false" population="healthy subjects and patients with renal impairment" measured-compound="remdesivir" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Zhang S, Jeong S, Jiang B, Ho H. Pharmacokinetic simulations for remdesivir and its metabolites in healthy subjects and patients with renal impairment. Frontiers in pharmacology 16:1488961 (2025).
  ·  DOI: [10.3389/fphar.2025.1488961](https://doi.org/10.3389/fphar.2025.1488961)

## Population and dosing

**Population:** healthy subjects and patients with renal impairment · condition renal impairment · age group adult · n = 44.

**Dosing:** 100, 200 mg, iv, multiple, every 24 h.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted, plus 2 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| QRDV | Q | 0.19 | /h |
| QIM | Q | 12.53 | /h |
| QNUC | Q | 0.039 | /h |
| KP,NUC | CLfm | 2.44 | /h |
| KP,NTP | kic | 3.28E10 | /h |
| CLC,RDV | CLR | 2.99 | /h |
| theta_q370_im | theta_q370_im | 0.31 |  |
| theta_q370_im | theta_q370_im | 0.22 |  |
| mean volume of distribution | V | 93.0 | L |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.353). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The intracellular conversion rate constant for the remdesivir metabolite is 3.28E10 /h, a physically impossible value indicating a data extraction error.**

The parameter governing the conversion from intermediate metabolites to nucleoside monophosphate is recorded as 3.28E10 /h. This magnitude is biologically implausible for a first-order metabolic rate constant. Furthermore, a reported unit could not be converted to standard SI units, leaving the structural parameter without a valid physical value. Extracted — remdesivir: Q 0.19 /h, CLR 2.99 /h, V 93 L; intermediate metabolites: Q 12.5 /h; nucleoside monophosphate: Q 0.039 /h, CLfm 2.44 /h, kic 3.28e+10 /h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has remdesivir → intermediate metabolites (im) (metabolism); intermediate metabolites (im) → nucleoside monophosphate (nuc) (metabolism), the second reading remdesivir → intermediate metabolites (metabolism); intermediate metabolites → nucleoside monophosphate (metabolism); remdesivir → gs-443902 (metabolism); it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| QRDV | `Q30` · Q | 0.19 | /h |  |  | 1/h | exact (1) | T1:row1:col2 |
| QIM | `Q30` · Q | 12.53 | /h |  |  | 1/h | exact (1) | T1:row2:col2 |
| QNUC | `Q30` · Q | 0.039 | /h |  |  | 1/h | exact (1) | T1:row3:col2 |
| KP,NUC | `Q370` · CLfm | 2.44 | /h |  |  | 1/h | exact (1) | T1:row5:col2 |
| KP,NTP | `Q350` · kic | 3.28E10 | /h | 9.111e+06 | 1/s | 1/h | exact (1) | T1:row6:col2 |
| CLC,RDV | `Q26` · CLR | 2.99 | /h |  |  | 1/h | llm (0.6) | T1:row9:col2 |
| theta_q370_im | `Q900` · theta_q370_im | 0.31 |  |  |  |  |  | T1:row4:col2 |
| theta_q370_im | `Q900` · theta_q370_im | 0.22 |  |  |  |  |  | T1:row8:col2 |
| mean volume of distribution | `Q61` · V | 93.0 | L | 0.093 | m3 | L | review_gapfill (0.7) | Humeniuk_2021:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- linked 'QRDV' as 'Q' → Q30 (Q) for  — compound marker removed
- unit_dimension_mismatch: 'QRDV' → Q30 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'QIM' → Q30 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'QNUC' → Q30 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'KP,NUC' → Q370 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'KC,NUC' → Q370 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q370 ('KC,NUC', value '0.38') — already have one for this compound
- unit_dimension_mismatch: 'CLC,RDV' → Q26 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- covariate effect for Q370 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=remdesivir
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 2 first-order transfer(s) across 3 compounds → general_linear
- template fit: none — only the metabolite is modelled — no parent compartment
- pharmacogenetic covariate 'theta_q370_im' (im) — PGx domain
- status held at route_to_review — not promoted
- population split: 'parameters for healthy control (zhang et al., 2020)' subgroup of Zhang_2025 (paper reports 3 populations: parameters for a renal-impaired patient with egfr = 0 (sörgel et al., 2021), parameters for healthy control (zhang et al., 2020), parameters for severe renal-impaired patients (zhang et al., 2020))
- row roles (LLM): model_class=compartmental; 9/9 row label(s) assigned, 24 linked by role; re-tagged parent→intermediate metabolites ×9, parent→nucleoside monophosphate ×12
- molar mass: no plausible PubChem entry for 'nucleoside monophosphate' ('nucleoside monophosphate') — left in mass units
- molar mass: none found for 'nucleoside monophosphate' — its concentrations stay mass-only
- gap-filled Q61 (V) from Humeniuk_2021's review values (primary lacked it)
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.353 (6/17 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['remdesivir', 'intermediate metabolites (im)', 'metabolism'], ['intermediate metabolites (im)', 'nucleoside monophosphate (nuc)', 'metabolism']] | [['remdesivir', 'intermediate metabolites', 'metabolism'], ['intermediate metabolites', 'nucleoside monophosphate', 'metabolism'], ['remdesivir', 'gs-443902', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[kp,nuc]` |  | 2.44 | only_one_extracted |
| `gpt-oss-120b` | `parameters[kp,nuc]` | 2.44 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[qim]` |  | 12.53 | only_one_extracted |
| `gpt-oss-120b` | `parameters[qim]` | 12.53 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[qnuc]` |  | 0.039 | only_one_extracted |
| `gpt-oss-120b` | `parameters[qnuc]` | 0.039 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[qrdv].parameter_id` | Q900 | Q30 | mismatch |
| `gpt-oss-120b` | `parameters[rdv vz]` | 92.6 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q370_im]` |  | 0.31 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q370_im]` | 0.31 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q26 | fail | 1 / [time] | /h | ['T1:row9:col2'] |
| C5_dimension_Q30 | fail | 1 / [time] | /h | ['T1:row1:col2'] |
| C5_dimension_Q30 | fail | 1 / [time] | /h | ['T1:row2:col2'] |
| C5_dimension_Q30 | fail | 1 / [time] | /h | ['T1:row3:col2'] |
| C5_dimension_Q350 | pass | 1 / [time] |  | ['T1:row6:col2'] |
| C5_dimension_Q370 | fail | 1 / [time] | /h | ['T1:row5:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Humeniuk_2021:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 93 L | ['Humeniuk_2021:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bremdesivir%5D%20Remdesivir_Zhang2025_parameters_for_healthy_control_zhang_et&body=Drug%3A%20remdesivir%0ARecord%3A%20Remdesivir_Zhang2025_parameters_for_healthy_control_zhang_et%0APaper%3A%20Zhang_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_remdesivir/Remdesivir_Zhang2025_parameters_for_healthy_control_zhang_et%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-22 12:38 UTC</sub>
