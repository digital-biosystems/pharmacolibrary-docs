<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01A&quot;,&quot;href&quot;:&quot;atc/L01A.md&quot;},{&quot;label&quot;:&quot;dacarbazine&quot;,&quot;href&quot;:&quot;drugs/drug_dacarbazine/&quot;},{&quot;label&quot;:&quot;Clemons_2003 \u00b7 5_c2&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# dacarbazine — `Dacarbazine_Clemons2003_5_c2`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The model was rejected due to a unit dimension mismatch on the intercompartmental clearance parameter Q, and because the recorded clearance of 10.7 L/hr conflicted with a second reading of 36.6.

<div class="pk-model-meta" hidden drug="dacarbazine" model-id="Dacarbazine_Clemons2003_5_c2" status="rejected" stale="false" population="patients with advanced breast cancer" measured-compound="8-aziridinyl-2-(2-hydroxyethyl)imidazo[4,5-d]pyrimidine" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Clemons M, Ranson M, Margison JM, El Teraifi H, Griffiths A, Kelly J et al. Pharmacokinetic, biochemical and clinical effects of dimethyltriazenoimidazole-4-carboxamide-bischloroethylnitrosourea combination therapy in patients with advanced breast cancer. International journal of cancer 103(5):686–692 (2003).
  ·  DOI: [10.1002/ijc.10849](https://doi.org/10.1002/ijc.10849)

## Population and dosing

**Population:** patients with advanced breast cancer · condition breast cancer · age group adult · n = 7.

**Dosing:** 75, 400 mg/m2, iv, multiple, every 4 h.

**Dosed compound ≠ measured compound:** dosed dacarbazine, measured 8-aziridinyl-2-(2-hydroxyethyl)imidazo[4,5-d]pyrimidine.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC (hr · μg/ml) | AUC | 42.6 | hr · μg/ml |
| Vc (l) | V1 | 25.3 | l |
| CL (l/hr) | CLm/F | 10.7 | l/hr |
| K12 | Q | 0.13 | hr-1 |
| K21 | Q2 | 0.14 | hr-1 |
| t1/2 α (hr) | t1/2α | 1.17 | hr |
| t1/2 β (hr) | t1/2β | 6.5 | hr |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.067). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model was rejected due to a unit dimension mismatch on the intercompartmental clearance parameter Q, and because the recorded clearance of 10.7 L/hr conflicted with a second reading of 36.6.**

Parameter Q, representing the intercompartmental clearance between central and peripheral compartments, was reported with units of hr-1, causing a dimensional inconsistency with the expected volume/time format. Additionally, the apparent metabolite clearance was recorded as 10.7 L/hr in this record, whereas a second reader extracted a value of 36.6 L/hr from the source. Disagreements also arose regarding the primary analyte, with one reading identifying the metabolite 8-aziridinyl-2-(2-hydroxyethyl)imidazo[4,5-d]pyrimidine and the other identifying dacarbazine. Extracted — dacarbazine: AUC 42.6 hr · μg/ml, V1 25.3 l, CLm/F 10.7 l/hr, Q 0.13 hr-1, Q2 0.14 hr-1, t1/2α 1.17 hr, t1/2β 6.5 hr.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which molecule was measured: this record has 8-aziridinyl-2-(2-hydroxyethyl)imidazo[4,5-d]pyrimidine, the second reading dacarbazine; it also differs on 13 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC (hr · μg/ml) | `Q88` · AUC | 42.6 | hr · μg/ml |  |  | (h·µg)/ml | exact (1) | Clemons_2003_table_3:row4:col6 |
| Vc (l) | `Q63` · V1 | 25.3 | l | 0.0253 | m3 | l | exact (1) | Clemons_2003_table_3:row4:col7 |
| CL (l/hr) | `Q351` · CLm/F | 10.7 | l/hr | 2.972e-06 | m3/s | l/h | exact (1) | Clemons_2003_table_3:row4:col8 |
| K12 | `Q30` · Q | 0.13 | hr-1 |  |  | 1/h | exact (1) | Clemons_2003_table_3:row4:col9 |
| K21 | `Q99` · Q2 | 0.14 | hr-1 |  |  | 1/h | exact (1) | Clemons_2003_table_3:row4:col10 |
| t1/2 α (hr) | `Q59` · t1/2α | 1.17 | hr | 4212 | s | h | space_fold (0.95) | Clemons_2003_table_3:row4:col11 |
| t1/2 β (hr) | `Q60` · t1/2β | 6.5 | hr | 2.34e+04 | s | h | space_fold (0.95) | Clemons_2003_table_3:row4:col12 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column '5 (c2)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Weight (kg)' — extend the ontology if this is a real PK parameter (source ['Clemons_2003_table_3:row4:col1'])
- dropped unlinked row (NIL): 'SA (m2)' — extend the ontology if this is a real PK parameter (source ['Clemons_2003_table_3:row4:col2'])
- dropped unlinked row (NIL): 'Dose/m2 (mg)' — extend the ontology if this is a real PK parameter (source ['Clemons_2003_table_3:row4:col3'])
- unit_dimension_mismatch: 'K12' → Q30 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'K21' → Q99 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- metabolite 8-aziridinyl-2-(2-hydroxyethyl)imidazo[4,5-d]pyrimidine: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=8-aziridinyl-2-(2-hydroxyethyl)imidazo[4,5-d]pyrimidine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0]
- status held at "Needs review" — not promoted
- population split: '5 (c2)' subgroup of Clemons_2003 (paper reports 2 populations: 5 (c1), 5 (c2))
- row roles (LLM): model_class=compartmental; 10/10 row label(s) assigned, 28 linked by role
- molar mass: no plausible PubChem entry for '8-aziridinyl-2-(2-hydroxyethyl)imidazo[4,5-d]pyrimidine' ('8-aziridinyl-2-(2-hydroxyethyl)imidazo[4,5-d]pyrimidine') — left in mass units
- molar mass: none found for '8-aziridinyl-2-(2-hydroxyethyl)imidazo[4,5-d]pyrimidine' — its concentrations stay mass-only
- review gap-fill skipped: this record measures '8-aziridinyl-2-(2-hydroxyethyl)imidazo[4,5-d]pyrimidine', not dacarbazine — the review values are the parent's

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 3
- table Clemons_2003_table_3: unparsed_numeric_cell
- transposed table Clemons_2003_table_3: logical view retains original source coordinates

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.067 (1/15 fields) | 14 |

<details><summary>14 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['dacarbazine', '8-aziridinyl-2-(2-hydroxyethyl)imidazo[4,5-d]pyrimidine', 'metabolism']] | [['dacarbazine', 'aic', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss-120b` | `parameters[auc].value` | 42.6 | 32.3 | mismatch |
| `gpt-oss-120b` | `parameters[cl].parameter_id` | Q351 | Q22 | mismatch |
| `gpt-oss-120b` | `parameters[cl].value` | 10.7 | 36.6 | mismatch |
| `gpt-oss-120b` | `parameters[dose/m2]` |  | 400 | only_one_extracted |
| `gpt-oss-120b` | `parameters[k12].parameter_id` | Q30 | Q301 | mismatch |
| `gpt-oss-120b` | `parameters[k12].value` | 0.13 | 0.33 | mismatch |
| `gpt-oss-120b` | `parameters[k21].parameter_id` | Q99 | Q302 | mismatch |
| `gpt-oss-120b` | `parameters[k21].value` | 0.14 | 0.53 | mismatch |
| `gpt-oss-120b` | `parameters[t1/2 α].value` | 1.17 | 0.44 | mismatch |
| `gpt-oss-120b` | `parameters[t1/2 β].value` | 6.5 | 1.9 | mismatch |
| `gpt-oss-120b` | `parameters[vc].value` | 25.3 | 34.6 | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | 8-aziridinyl-2-(2-hydroxyethyl)imidazo[4,5-d]pyrimidine | dacarbazine | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q30 | fail | 1 / [time] | hr-1 | ['Clemons_2003_table_3:row4:col9'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['Clemons_2003_table_3:row4:col8'] |
| C5_dimension_Q59 | pass | [time] |  | ['Clemons_2003_table_3:row4:col11'] |
| C5_dimension_Q60 | pass | [time] |  | ['Clemons_2003_table_3:row4:col12'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Clemons_2003_table_3:row4:col7'] |
| C5_dimension_Q88 | pass | [time] * [mass] / [length] ** 3 |  | ['Clemons_2003_table_3:row4:col6'] |
| C5_dimension_Q99 | fail | 1 / [time] | hr-1 | ['Clemons_2003_table_3:row4:col10'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q63 | pass | volume within physiological range | 25.3 L | ['Clemons_2003_table_3:row4:col7'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdacarbazine%5D%20Dacarbazine_Clemons2003_5_c2&body=Drug%3A%20dacarbazine%0ARecord%3A%20Dacarbazine_Clemons2003_5_c2%0APaper%3A%20Clemons_2003%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_dacarbazine/Dacarbazine_Clemons2003_5_c2%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-03 12:47 UTC</sub>
