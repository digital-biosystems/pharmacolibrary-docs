<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;daridorexant&quot;,&quot;href&quot;:&quot;drugs/drug_daridorexant/&quot;},{&quot;label&quot;:&quot;Krause_2023 \u00b7 phase_i_data_intense_pk_estimate&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# daridorexant — `Daridorexant_Krause2023_phase_i_data_intense_pk_estimate`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The daridorexant model was rejected because the Michaelis–Menten affinity parameter Km (0.96 μg/ml) could not be expressed in SI units, giving a dimension mismatch on a structural parameter.

<div class="pk-model-meta" hidden drug="daridorexant" model-id="Daridorexant_Krause2023_phase_i_data_intense_pk_estimate" status="rejected" stale="false" population="healthy subjects and patients with insomnia disorder (phase I-III pooled)" measured-compound="daridorexant" parameterization="mechanistic" topology="2C"></div>

## Citation
Krause A, Lott D, Brussee JM, Muehlan C, Dingemanse J. Population pharmacokinetic modeling of daridorexant, a novel dual orexin receptor antagonist. CPT: pharmacometrics & systems pharmacology 12(1):74–86 (2023).
  ·  DOI: [10.1002/psp4.12877](https://doi.org/10.1002/psp4.12877)

## Population and dosing

**Population:** healthy subjects and patients with insomnia disorder (phase I-III pooled) · condition insomnia; healthy subjects; hepatic/renal impairment · age group adult.

**Dosing:** 5, 200 mg, oral.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 9 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| F | Fab | 0.53 |  | 3.43 |
| t_lag (h) | tlag | 0.29 | h | 0.06 |
| k_a (1/h) | kabs | 5.28 | 1/h | 0.09 |
| V_c (L) | V1 | 24.40 | L | 2.51 |
| V_p (L) | V2 | 19.40 | L | 4.75 |
| Q (L/h) | Q | 3.96 | L/h | 0.09 |
| V_m (mg/h) | Vmax | 4.81 | mg/h | 6.91 |
| K_m (μg/ml) | Km | 0.96 | μg/ml | 0.00 |
| SD(F) | Frel | 0.31 | F | 12.30 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.826). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The daridorexant model was rejected because the Michaelis–Menten affinity parameter Km (0.96 μg/ml) could not be expressed in SI units, giving a dimension mismatch on a structural parameter.**

The record reports Km for daridorexant as 0.96 μg/ml, a concentration unit that could not be converted to SI, so the parameter arrived without an SI value. This produced a dimension mismatch on a structural parameter, and the model was rejected. All other parameters (Fab 0.53, tlag 0.29 h, kabs 5.28 1/h, V1 24.40 L, V2 19.40 L, Q 3.96 L/h, Vmax 4.81 mg/h, Frel 0.31) carry convertible units. Extracted — daridorexant: Fab 0.53, tlag 0.29 h, kabs 5.28 1/h, V1 24.4 L, V2 19.4 L, Q 3.96 L/h, Vmax 4.81 mg/h, Km 0.96 μg/ml, … (+1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has daridorexant, the second reading unknown; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| F | `Q40` · Fab | 0.53 |  |  |  |  | 3.43 | exact (1) | Krause_2023_table_2:row0:col1, Krause_2023_table_2:row0:col2 |
| t_lag (h) | `Q83` · tlag | 0.29 | h | 1044 | s | h | 0.06 | exact (1) | Krause_2023_table_2:row2:col1, Krause_2023_table_2:row2:col2 |
| k_a (1/h) | `Q49` · kabs | 5.28 | 1/h | 0.001467 | 1/s | 1/h | 0.09 | exact (1) | Krause_2023_table_2:row5:col1, Krause_2023_table_2:row5:col2 |
| V_c (L) | `Q63` · V1 | 24.40 | L | 0.0244 | m3 | l | 2.51 | exact (1) | Krause_2023_table_2:row9:col1, Krause_2023_table_2:row9:col2 |
| V_p (L) | `Q64` · V2 | 19.40 | L | 0.0194 | m3 | l | 4.75 | exact (1) | Krause_2023_table_2:row11:col1, Krause_2023_table_2:row11:col2 |
| Q (L/h) | `Q30` · Q | 3.96 | L/h | 1.1e-06 | m3/s | l/h | 0.09 | exact (1) | Krause_2023_table_2:row13:col1, Krause_2023_table_2:row13:col2 |
| V_m (mg/h) | `Q66` · Vmax | 4.81 | mg/h |  |  | mg/h | 6.91 | llm (0.6) | Krause_2023_table_2:row15:col1, Krause_2023_table_2:row15:col2 |
| K_m (μg/ml) | `Q1` · Km | 0.96 | μg/ml |  |  | µg/ml | 0.00 | exact (1) | Krause_2023_table_2:row16:col1, Krause_2023_table_2:row16:col2 |
| SD(F) | `Q87` · Frel | 0.31 | F |  |  | f | 12.30 | llm (0.6) | Krause_2023_table_2:row22:col1, Krause_2023_table_2:row22:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Dose' — extend the ontology if this is a real PK parameter (source ['Krause_2023_table_2:row1:col1', 'Krause_2023_table_2:row1:col2'])
- unit_dimension_mismatch: 'V_m (mg/h)' → Q66 (unit '[mass] / [time]' vs ontology '[length] ** 3') — route to review
- unit_dimension_unknown: 'F' (Frel)
- unit_dimension_unknown: 't_lag' (tlag)
- dropped duplicate Q83 ('SD(t_lag)', value '0.23') — already have one for this compound
- unit_dimension_unknown: 'k_a' (kabs)
- dropped duplicate Q49 ('SD(k_a)', value '1.35') — already have one for this compound
- unit_dimension_unknown: 'V_c' (V1)
- dropped duplicate Q63 ('SD(V_c)', value '0.31') — already have one for this compound
- unit_dimension_unknown: 'V_p' (V2)
- dropped duplicate Q64 ('SD(V_p)', value '0.32') — already have one for this compound
- routed 'SD(Q)' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- unit_dimension_unknown: 'V_m' (Vmax)
- dropped duplicate Q66 ('SD(V_m)', value '0.27') — already have one for this compound
- unit_dimension_unknown: 'K_m' (Km)
- dropped duplicate Q1 ('SD(K_m)', value '0.28') — already have one for this compound
- routed 'Multiplicative error' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- implicit units: 'k_a (1/h)' → 1/h (from the paper text: 'Table 2 lists the parameter as "k_a (1/h)".')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=daridorexant
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: 'phase i data (intense pk) estimate' subgroup of Krause_2023 (paper reports 5 populations: all data, final model estimate, all data, final model rse(%), all phase i data estimate, food, phase i data (intense pk) estimate)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.826 (19/23 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[dose]` |  | -0.66 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q]` | 3.96 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | daridorexant | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | daridorexant | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 |  | ['Krause_2023_table_2:row16:col1', 'Krause_2023_table_2:row16:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Krause_2023_table_2:row13:col1', 'Krause_2023_table_2:row13:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Krause_2023_table_2:row5:col1', 'Krause_2023_table_2:row5:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Krause_2023_table_2:row9:col1', 'Krause_2023_table_2:row9:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Krause_2023_table_2:row11:col1', 'Krause_2023_table_2:row11:col2'] |
| C5_dimension_Q66 | fail | [mass] / [time] | mg/h | ['Krause_2023_table_2:row15:col1', 'Krause_2023_table_2:row15:col2'] |
| C5_dimension_Q83 | pass | [time] |  | ['Krause_2023_table_2:row2:col1', 'Krause_2023_table_2:row2:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q63 | pass | volume within physiological range | 24.4 L | ['Krause_2023_table_2:row9:col1', 'Krause_2023_table_2:row9:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 19.4 L | ['Krause_2023_table_2:row11:col1', 'Krause_2023_table_2:row11:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdaridorexant%5D%20Daridorexant_Krause2023_phase_i_data_intense_pk_estimate&body=Drug%3A%20daridorexant%0ARecord%3A%20Daridorexant_Krause2023_phase_i_data_intense_pk_estimate%0APaper%3A%20Krause_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_daridorexant/Daridorexant_Krause2023_phase_i_data_intense_pk_estimate%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-06 20:11 UTC</sub>
