<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;odronextamab&quot;,&quot;href&quot;:&quot;drugs/drug_odronextamab/&quot;},{&quot;label&quot;:&quot;Bravo_2026 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# odronextamab — `Odronextamab_Bravo2026_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.727), gpt-oss:120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**C5 dimension mismatch on a structural parameter; c2 negative clearance/volume in a covariate scenario or base (implausible — base value or shift is wrong).**

A reported unit could not be converted (albumin_effect_on_v_c_and_v_p, female_sex_effect_on_v_c_and_v_p, Vmax and equation variable), so that value has no SI equivalent. Extracted — odronextamab: CL 0.189 L/day, Q 1.21 L/day, V1 4.99 L, V2 4.42 L, Vmax 2.93 mg/L/day, V -0.133.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has odronextamab, the second reading unknown; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Bravo Padros M et al., Pharmacokinetics of Odronextamab, A Bis…, CPT: pharmacometrics & syst… (2026)
  ·  DOI: [10.1002/psp4.70162](https://doi.org/10.1002/psp4.70162)

<div class="pk-model-meta" hidden drug="odronextamab" model-id="Odronextamab_Bravo2026_reference" status="rejected" stale="false" population="adult patients with relapsed or refractory B-cell non-Hodgkin lymphoma" measured-compound="odronextamab" parameterization="mechanistic" topology="3C"></div>

**Model structure:** 3-compartment; no model was built for this record.  
**Parameters:** 6 extracted, plus 5 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Linear clearance, CL (L/day) | `Q22` · CL | 0.189 | L/day | 2.1875e-09 | [l] / [d] | not captured | llm_confirmed (0.6) | psp470162-tbl-0002:row1:col1, psp470162-tbl-0002:row1:col2, psp470162-tbl-0002:row1:col3 | — | not captured |
| Intercompartmental clearance, Q (L/day) | `Q30` · Q | 1.21 | L/day | 1.4004629629629629e-08 | [l] / [d] | not captured | llm_confirmed (0.6) | psp470162-tbl-0002:row7:col1, psp470162-tbl-0002:row7:col2, psp470162-tbl-0002:row7:col3 | — | not captured |
| Volume of distribution of central compartment, V c (L) | `Q63` · V1 | 4.99 | L | 0.0049900000000000005 | [l] | not captured | boundary_compartment (0.9) | psp470162-tbl-0002:row8:col1, psp470162-tbl-0002:row8:col2, psp470162-tbl-0002:row8:col3 | — | not captured |
| Volume of distribution of peripheral compartment, V p (L) | `Q64` · V2 | 4.42 | L | 0.00442 | [l] | not captured | boundary_compartment (0.9) | psp470162-tbl-0002:row9:col1, psp470162-tbl-0002:row9:col2, psp470162-tbl-0002:row9:col3 | — | not captured |
| albumin_effect_on_v_c_and_v_p | `Q900` · albumin_effect_on_v_c_and_v_p | -0.561 | 0 | not captured | [0] | not captured | not captured (not captured) | psp470162-tbl-0002:row10:col2, psp470162-tbl-0002:row10:col3 | — | not captured |
| female_sex_effect_on_v_c_and_v_p | `Q900` · female_sex_effect_on_v_c_and_v_p | -0.186 | 0 | not captured | [0] | not captured | not captured (not captured) | psp470162-tbl-0002:row12:col3 | — | not captured |
| Baseline maximum velocity of Michaelis–Menten elimination, V max,0 (mg/L/day) | `Q66` · Vmax | 2.93 | mg/L/day | not captured | [mg] / [[d] · [l]] | not captured | llm_corrected (0.6) | psp470162-tbl-0002:row14:col1, psp470162-tbl-0002:row14:col2, psp470162-tbl-0002:row14:col3 | — | not captured |
| Follicular lymphoma effect on V max,0 | `Q900` · equation variable | -0.252 | 0 | not captured | [0] | not captured | llm (0.6) | psp470162-tbl-0002:row17:col2, psp470162-tbl-0002:row17:col3 | — | not captured |
| Follicular lymphoma effect on R v | `Q61` · V | -0.133 | not captured | not captured | not captured | not captured | llm (0.6) | psp470162-tbl-0002:row25:col2, psp470162-tbl-0002:row25:col3 | — | not captured |
| theta_cl_albumin | `Q900` · theta_cl_albumin | -0.933 | not captured | not captured | not captured | not captured | not captured (not captured) | psp470162-tbl-0002:row2:col2, psp470162-tbl-0002:row2:col3 | — | not captured |
| theta_cl_body_weight | `Q900` · theta_cl_body_weight | 0.854 | not captured | not captured | not captured | not captured | not captured (not captured) | psp470162-tbl-0002:row3:col2, psp470162-tbl-0002:row3:col3 | — | not captured |
| theta_v_body_weight | `Q900` · theta_v_body_weight | 0.372 | not captured | not captured | not captured | not captured | not captured (not captured) | psp470162-tbl-0002:row11:col2, psp470162-tbl-0002:row11:col3 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Immunoglobulin G effect on CL' — extend the ontology if this is a real PK parameter (source ['psp470162-tbl-0002:row4:col2', 'psp470162-tbl-0002:row4:col3'])
- dropped duplicate Q22 ('Interferon gamma effect on CL', value '0.0274') — already have one for this compound
- dropped duplicate Q22 ('Interleukin 10 effect on CL', value '-0.0717') — already have one for this compound
- covariate level 'Albumin effect on V c and V p' → Q900:albumin_effect_on_v_c_and_v_p = -0.561 (linear_fractional on Q22)
- covariate level 'Female sex effect on V c and V p' → Q900:female_sex_effect_on_v_c_and_v_p = -0.186 (linear_fractional on Q22)
- dropped unlinked row (NIL): 'Lymphocyte count effect on V c and V p' — extend the ontology if this is a real PK parameter (source ['psp470162-tbl-0002:row13:col2', 'psp470162-tbl-0002:row13:col3'])
- unit_dimension_mismatch: 'Baseline maximum velocity of Michaelis–Menten elimination, V max,0 (mg/L/day)' → Q66 (unit '[mass] / [length] ** 3 / [time]' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'Ann Arbor stage &lt; 4 effect on V max,0' → Q66 (unit 'dimensionless' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q66 ('Ann Arbor stage &lt; 4 effect on V max,0', value '-0.285') — already have one for this compound
- dropped unlinked row (NIL): 'Lymphocyte count effect on V max,0' — extend the ontology if this is a real PK parameter (source ['psp470162-tbl-0002:row16:col2', 'psp470162-tbl-0002:row16:col3'])
- unit_dimension_mismatch: 'Prior CAR T therapy effect on V max,0' → Q66 (unit 'dimensionless' vs ontology '[length] ** 3') — route to review
- dropped duplicate Q66 ('Prior CAR T therapy effect on V max,0', value '-0.201') — already have one for this compound
- dropped unlinked row (NIL): 'Tumor size effect on V max,0' — extend the ontology if this is a real PK parameter (source ['psp470162-tbl-0002:row19:col2', 'psp470162-tbl-0002:row19:col3'])
- dropped PD-category row 'Concentration reaching 50% of V max,0, k m (mg/L)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp470162-tbl-0002:row20:col1', 'psp470162-tbl-0002:row20:col2', 'psp470162-tbl-0002:row20:col3'])
- dropped PD-category row 'Rate constant describing the decline in V max per unit of time, K v (1/day)' → Q335 (slope, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['psp470162-tbl-0002:row21:col1', 'psp470162-tbl-0002:row21:col2', 'psp470162-tbl-0002:row21:col3'])
- dropped unlinked row (NIL): 'Follicular lymphoma effect on K v' — extend the ontology if this is a real PK parameter (source ['psp470162-tbl-0002:row22:col2', 'psp470162-tbl-0002:row22:col3'])
- dropped unlinked row (NIL): 'Other B‐NHL type effect on K v' — extend the ontology if this is a real PK parameter (source ['psp470162-tbl-0002:row23:col2', 'psp470162-tbl-0002:row23:col3'])
- dropped unlinked row (NIL): 'Asymptotic V max (V max,asym) to V max,0 ratio, R v' — extend the ontology if this is a real PK parameter (source ['psp470162-tbl-0002:row24:col1', 'psp470162-tbl-0002:row24:col2', 'psp470162-tbl-0002:row24:col3'])
- dropped unlinked row (NIL): 'Other B‐NHL type effect on R v' — extend the ontology if this is a real PK parameter (source ['psp470162-tbl-0002:row26:col2', 'psp470162-tbl-0002:row26:col3'])
- routed 'Variance of between‐patient variability in V c' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'Variance of between‐patient variability in V max,0' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'Variance of between‐patient variability in V p' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- unit inherited for albumin_effect_on_v_c_and_v_p (Q900): '0' from a same-Q-code sibling (this row's label had no unit)
- unit inherited for female_sex_effect_on_v_c_and_v_p (Q900): '0' from a same-Q-code sibling (this row's label had no unit)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=odronextamab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 3C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- molar mass: none found for 'odronextamab' — its concentrations stay mass-only

**Extraction notes:**
- table psp470162-tbl-0002: unparsed_numeric_cell
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.727 (8/11 fields) | 3 |
| `gpt-oss:120b` | not confirmed | 0.143 (2/14 fields) | 12 |

<details><summary>15 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[auc]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[c max]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[c min]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[auc]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[c max]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[c min]` | not captured | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[linear clearance]` | 0.189 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[v c]` | 4.99 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[v c]` | not captured | 4.99 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v p]` | 4.42 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[v p]` | not captured | 4.42 | only_one_extracted |
| `gpt-oss:120b` | `parameters[volume of distribution at steady state]` | 9.41 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[volume of distribution at steady state]` | not captured | 9.41 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | odronextamab | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | odronextamab | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_base_sign_Q61 | fail | not captured | -0.133 | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp470162-tbl-0002:row1:col1', 'psp470162-tbl-0002:row1:col2', 'psp470162-tbl-0002:row1:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['psp470162-tbl-0002:row7:col1', 'psp470162-tbl-0002:row7:col2', 'psp470162-tbl-0002:row7:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp470162-tbl-0002:row8:col1', 'psp470162-tbl-0002:row8:col2', 'psp470162-tbl-0002:row8:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['psp470162-tbl-0002:row9:col1', 'psp470162-tbl-0002:row9:col2', 'psp470162-tbl-0002:row9:col3'] |
| C5_dimension_Q66 | fail | [mass] / [length] ** 3 / [time] | mg/L/day | not captured | not captured | ['psp470162-tbl-0002:row14:col1', 'psp470162-tbl-0002:row14:col2', 'psp470162-tbl-0002:row14:col3'] |
| C5_unit_missing_Q61 | fail | [length] ** 3 | not captured | not captured | not captured | ['psp470162-tbl-0002:row25:col2', 'psp470162-tbl-0002:row25:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.189 | not captured | not captured | ['psp470162-tbl-0002:row1:col1', 'psp470162-tbl-0002:row1:col2', 'psp470162-tbl-0002:row1:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00788 L/h | not captured | not captured | ['psp470162-tbl-0002:row1:col1', 'psp470162-tbl-0002:row1:col2', 'psp470162-tbl-0002:row1:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 4.99 L | not captured | not captured | ['psp470162-tbl-0002:row8:col1', 'psp470162-tbl-0002:row8:col2', 'psp470162-tbl-0002:row8:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 4.42 L | not captured | not captured | ['psp470162-tbl-0002:row9:col1', 'psp470162-tbl-0002:row9:col2', 'psp470162-tbl-0002:row9:col3'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_odronextamab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Bravo_2026` / `Bravo_2026::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-15 03:59 UTC</sub>
