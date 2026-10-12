<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;daridorexant&quot;,&quot;href&quot;:&quot;drugs/drug_daridorexant/&quot;},{&quot;label&quot;:&quot;Krause_2023 \u00b7 phase_i_data_intense_pk_estimate&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# daridorexant — `Daridorexant_Krause2023_phase_i_data_intense_pk_estimate`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.826). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The daridorexant model was rejected because the Michaelis–Menten affinity parameter Km (0.96 μg/ml) could not be expressed in SI units, giving a dimension mismatch on a structural parameter.**

The record reports Km for daridorexant as 0.96 μg/ml, a concentration unit that could not be converted to SI, so the parameter arrived without an SI value. This produced a dimension mismatch on a structural parameter, and the model was rejected. All other parameters (Fab 0.53, tlag 0.29 h, kabs 5.28 1/h, V1 24.40 L, V2 19.40 L, Q 3.96 L/h, Vmax 4.81 mg/h, Frel 0.31) carry convertible units. Extracted — daridorexant: Fab 0.53, tlag 0.29 h, kabs 5.28 1/h, V1 24.4 L, V2 19.4 L, Q 3.96 L/h, Vmax 4.81 mg/h, Km 0.96 μg/ml, … (+1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has daridorexant, the second reading unknown; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

## Citation
Krause A et al., Population pharmacokinetic modeling of…, CPT: pharmacometrics & syst… (2023)
  ·  DOI: [10.1002/psp4.12877](https://doi.org/10.1002/psp4.12877)

<div class="pk-model-meta" hidden drug="daridorexant" model-id="Daridorexant_Krause2023_phase_i_data_intense_pk_estimate" status="rejected" stale="false" population="healthy subjects and patients with insomnia disorder (phase I-III pooled)" measured-compound="daridorexant" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 9 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| F | `Q40` · Fab | 0.53 | not captured | not captured | not captured | 3.43 | exact (1.0) | Krause_2023_table_2:row0:col1, Krause_2023_table_2:row0:col2 | — | not captured |
| t_lag (h) | `Q83` · tlag | 0.29 | h | 1044.0 | [h] | 0.06 | exact (1.0) | Krause_2023_table_2:row2:col1, Krause_2023_table_2:row2:col2 | — | not captured |
| k_a (1/h) | `Q49` · kabs | 5.28 | 1/h | 0.0014666666666666667 | 1/h | 0.09 | exact (1.0) | Krause_2023_table_2:row5:col1, Krause_2023_table_2:row5:col2 | — | not captured |
| V_c (L) | `Q63` · V1 | 24.40 | L | 0.024399999999999998 | [l] | 2.51 | exact (1.0) | Krause_2023_table_2:row9:col1, Krause_2023_table_2:row9:col2 | — | not captured |
| V_p (L) | `Q64` · V2 | 19.40 | L | 0.0194 | [l] | 4.75 | exact (1.0) | Krause_2023_table_2:row11:col1, Krause_2023_table_2:row11:col2 | — | not captured |
| Q (L/h) | `Q30` · Q | 3.96 | L/h | 1.1e-06 | [l] / [h] | 0.09 | exact (1.0) | Krause_2023_table_2:row13:col1, Krause_2023_table_2:row13:col2 | — | not captured |
| V_m (mg/h) | `Q66` · Vmax | 4.81 | mg/h | not captured | [mg] / [h] | 6.91 | llm (0.6) | Krause_2023_table_2:row15:col1, Krause_2023_table_2:row15:col2 | — | not captured |
| K_m (μg/ml) | `Q1` · Km | 0.96 | μg/ml | not captured | [µg] / [ml] | 0.00 | exact (1.0) | Krause_2023_table_2:row16:col1, Krause_2023_table_2:row16:col2 | — | not captured |
| SD(F) | `Q87` · Frel | 0.31 | F | not captured | [f] | 12.30 | llm (0.6) | Krause_2023_table_2:row22:col1, Krause_2023_table_2:row22:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
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
- status held at route_to_review — not promoted
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
| `gpt-oss-120b` | `parameters[dose]` | not captured | -0.66 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q]` | 3.96 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | daridorexant | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | daridorexant | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 9 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q1 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Krause_2023_table_2:row16:col1', 'Krause_2023_table_2:row16:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Krause_2023_table_2:row13:col1', 'Krause_2023_table_2:row13:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Krause_2023_table_2:row5:col1', 'Krause_2023_table_2:row5:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Krause_2023_table_2:row9:col1', 'Krause_2023_table_2:row9:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Krause_2023_table_2:row11:col1', 'Krause_2023_table_2:row11:col2'] |
| C5_dimension_Q66 | fail | [mass] / [time] | mg/h | not captured | not captured | ['Krause_2023_table_2:row15:col1', 'Krause_2023_table_2:row15:col2'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Krause_2023_table_2:row2:col1', 'Krause_2023_table_2:row2:col2'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q63 | pass | volume within physiological range | 24.4 L | not captured | not captured | ['Krause_2023_table_2:row9:col1', 'Krause_2023_table_2:row9:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 19.4 L | not captured | not captured | ['Krause_2023_table_2:row11:col1', 'Krause_2023_table_2:row11:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_daridorexant/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Krause_2023` / `Krause_2023::phase_i_data_intense_pk_estimate`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 20:11 UTC</sub>
